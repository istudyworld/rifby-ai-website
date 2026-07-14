// Verifies the prerender + hydration contract against the real built site:
// every page must ship crawlable markup, hydrate without React warnings,
// expose exactly one <h1>, and reference no missing assets. Run after
// `npm run build`.
//
//   node scripts/verify-prerender.mjs
import { preview } from 'vite';
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = [
  'index.html', 'about.html', 'services.html', 'case-studies.html',
  'contact.html', 'problems.html', 'privacy.html', 'terms.html',
];

// Words present in the static HTML, i.e. what a crawler that runs no JS sees.
function staticWords(file) {
  const html = readFileSync(resolve(root, 'dist', file), 'utf8');
  const body = (html.match(/<body[^>]*>([\s\S]*)<\/body>/i) || ['', ''])[1];
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

const server = await preview({ root, preview: { port: 5199, strictPort: true, open: false } });
const browser = await chromium.launch();
let failed = 0;

console.log('  PAGE                STATIC  HYDRATED   H1   IMG KB');
for (const p of PAGES) {
  const page = await browser.newPage();
  const problems = [];
  let imgBytes = 0;

  page.on('console', (m) => {
    if (m.type() === 'error' || m.type() === 'warning') {
      const t = m.text();
      if (/hydrat|did not match|Text content|server HTML|Warning: Expected/i.test(t)) {
        problems.push(t.slice(0, 200));
      }
    }
  });
  page.on('pageerror', (e) => problems.push('pageerror: ' + e.message.slice(0, 200)));
  page.on('response', async (r) => {
    const url = r.url();
    if (r.status() >= 400 && !url.includes('calendly')) {
      problems.push(`${r.status()} ${url.replace('http://localhost:5199', '')}`);
    }
    if (/\.(webp|png|jpe?g|svg)$/i.test(url)) {
      const len = Number(r.headers()['content-length'] || 0);
      imgBytes += len;
    }
  });

  await page.goto(`http://localhost:5199/${p}`, { waitUntil: 'load' });
  await page.waitForTimeout(1200); // let hydration settle and surface mismatches

  // Any <img> that resolved to nothing (bad src / missing file).
  const broken = await page.evaluate(() =>
    [...document.querySelectorAll('img')]
      .filter((i) => i.complete && i.naturalWidth === 0)
      .map((i) => i.getAttribute('src'))
  );
  broken.forEach((b) => problems.push('broken img: ' + b));

  const { words, h1 } = await page.evaluate(() => ({
    words: (document.getElementById('root')?.innerText || '').split(/\s+/).filter(Boolean).length,
    h1: [...document.querySelectorAll('h1')].map((e) => e.innerText.replace(/\s+/g, ' ').trim()),
  }));

  const stat = staticWords(p);
  const ok = problems.length === 0 && stat > 100 && words > 50 && h1.length === 1;
  if (!ok) failed++;

  console.log(
    `${ok ? '  OK  ' : '  FAIL'} ${p.padEnd(18)} ${String(stat).padStart(5)}  ${String(words).padStart(7)}  ${String(h1.length).padStart(3)}  ${String(Math.round(imgBytes / 1024)).padStart(7)}` +
      (problems.length ? `\n         ${problems.slice(0, 5).join('\n         ')}` : '') +
      (h1.length !== 1 ? `\n         h1s: ${JSON.stringify(h1)}` : '')
  );
  await page.close();
}

await browser.close();
await server.close();

console.log(failed ? `\n${failed} page(s) failed` : '\nAll pages: crawlable markup, clean hydration, single h1');
process.exit(failed ? 1 : 0);
