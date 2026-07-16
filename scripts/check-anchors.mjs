// Checks every internal link in the built site: the page exists, and if the
// href carries a #fragment, an element with that id exists on the target page.
// The site deep-links a lot (sector pills, /problems CTAs, testimonial "See
// More"), and removing a case-study row silently breaks those anchors.
//
//   node scripts/check-anchors.mjs
import { preview } from 'vite';
import { chromium } from 'playwright';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = [
  'index.html', 'about.html', 'services.html', 'case-studies.html',
  'contact.html', 'problems.html', 'assessment.html', 'privacy.html', 'terms.html',
];
// Clean URL -> built file, mirrors vercel.json cleanUrls + vite.config cleanUrls().
const ROUTE = {
  '/': 'index.html', '/about': 'about.html', '/services': 'services.html',
  '/case-studies': 'case-studies.html', '/contact': 'contact.html',
  '/problems': 'problems.html', '/assessment': 'assessment.html',
  '/privacy': 'privacy.html',
  '/terms': 'terms.html', '/cookies': 'privacy.html',
};

const server = await preview({ root, preview: { port: 5199, strictPort: true, open: false } });
const browser = await chromium.launch();

// Collect every internal link across the site.
const links = [];
for (const p of PAGES) {
  const page = await browser.newPage();
  await page.goto(`http://localhost:5199/${p}`, { waitUntil: 'load' });
  await page.waitForTimeout(800);
  const found = await page.evaluate(() =>
    [...document.querySelectorAll('a[href]')]
      .map((a) => a.getAttribute('href'))
      .filter((h) => h && !/^(https?:|mailto:|tel:|#$)/.test(h))
  );
  found.forEach((h) => links.push({ from: p, href: h }));
  await page.close();
}

// Cache each target page's element ids.
const idCache = new Map();
async function idsOf(file) {
  if (idCache.has(file)) return idCache.get(file);
  const page = await browser.newPage();
  await page.goto(`http://localhost:5199/${file}`, { waitUntil: 'load' });
  await page.waitForTimeout(800);
  const ids = await page.evaluate(() => [...document.querySelectorAll('[id]')].map((e) => e.id));
  await page.close();
  idCache.set(file, ids);
  return ids;
}

const unique = [...new Map(links.map((l) => [`${l.from}|${l.href}`, l])).values()];
let failed = 0;

for (const { from, href } of unique) {
  const [path, frag] = href.split('#');
  // A bare "#frag" href targets the current page, not the site root.
  const target = path === '' ? from : ROUTE[path];

  if (!target) {
    console.log(`  FAIL ${from.padEnd(18)} ${href}  — no such route`);
    failed++;
    continue;
  }
  if (!frag) continue; // plain page link, route already validated above

  const ids = await idsOf(target);
  if (!ids.includes(frag)) {
    console.log(`  FAIL ${from.padEnd(18)} ${href}  — #${frag} not found on ${target}`);
    failed++;
  } else {
    console.log(`  OK   ${from.padEnd(18)} ${href}`);
  }
}

await browser.close();
await server.close();

console.log(
  failed
    ? `\n${failed} broken link(s) of ${unique.length} checked`
    : `\nAll ${unique.length} internal links resolve (routes + #anchors)`
);
process.exit(failed ? 1 : 0);
