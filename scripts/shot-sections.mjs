// Screenshots specific sections of the built site for visual review.
//   node scripts/shot-sections.mjs
import { preview } from 'vite';
import { chromium } from 'playwright';
import { resolve, dirname } from 'node:path';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const out = resolve(root, 'screenshots/review');
mkdirSync(out, { recursive: true });

const SHOTS = [
  { page: 'case-studies.html', sel: '.wwh', name: 'cases-whowehelp' },
  { page: 'index.html', sel: '.testi', name: 'home-testimonial' },
];

const server = await preview({ root, preview: { port: 5199, strictPort: true, open: false } });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });

for (const s of SHOTS) {
  await page.goto(`http://localhost:5199/${s.page}`, { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  const el = await page.$(s.sel);
  if (!el) {
    console.log(`  MISS ${s.name} (${s.sel} not found)`);
    continue;
  }
  const file = resolve(out, `${s.name}.png`);
  await el.screenshot({ path: file });
  console.log(`  OK   ${s.name} -> screenshots/review/${s.name}.png`);
}

await browser.close();
await server.close();
