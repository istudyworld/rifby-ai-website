// One-off: capture https://cps.co.uk/problems-we-solve/ for layout reference.
// Usage: node scripts/cps-capture.mjs <outdir>
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const outDir = process.argv[2] || 'cps-ref';
fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1512, height: 950 } });
await page.goto('https://cps.co.uk/problems-we-solve/', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(4000);

// dismiss cookie banner if present
for (const sel of ['#onetrust-accept-btn-handler', 'button:has-text("Accept")', 'button:has-text("Allow all")', '.cky-btn-accept']) {
  try {
    const b = page.locator(sel).first();
    if (await b.isVisible({ timeout: 1500 })) { await b.click(); await page.waitForTimeout(800); break; }
  } catch {}
}

// force-load lazy content
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 700) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 150));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(1500);

await page.screenshot({ path: path.join(outDir, 'cps-full.png'), fullPage: true });

// viewport slices for readability
const total = await page.evaluate(() => document.body.scrollHeight);
let i = 0;
for (let y = 0; y < total; y += 900) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(400);
  await page.screenshot({ path: path.join(outDir, `cps-slice-${String(i).padStart(2, '0')}.png`) });
  i += 1;
}

// structured text extraction
const structure = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll('h1, h2, h3, h4, h5, p, li, a.btn, button').forEach((el) => {
    const t = (el.innerText || '').trim().replace(/\s+/g, ' ');
    if (!t || t.length > 400) return;
    const r = el.getBoundingClientRect();
    out.push({ tag: el.tagName.toLowerCase(), text: t, y: Math.round(r.top + window.scrollY) });
  });
  return out;
});
fs.writeFileSync(path.join(outDir, 'cps-structure.json'), JSON.stringify(structure, null, 2));
console.log('slices:', i, 'total height:', total, 'text nodes:', structure.length);
await browser.close();
