// Screenshot specific elements (readable per-section captures).
// Usage: node scripts/shot-el.mjs <url> <W> <outPrefix> <sel1> [sel2 ...]
import { chromium } from 'playwright';

const [url, w = '390', prefix = 'screenshots/el', ...sels] = process.argv.slice(2);
const W = Number(w);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: 900 }, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

let i = 0;
for (const sel of sels) {
  const loc = page.locator(sel).first();
  try {
    await loc.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await loc.screenshot({ path: `${prefix}-${i}-${sel.replace(/[^a-z0-9]/gi, '')}.png` });
    console.log('ok', sel);
  } catch (e) {
    console.log('FAIL', sel, e.message.split('\n')[0]);
  }
  i++;
}
await browser.close();
