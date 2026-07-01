// Capture after clicking a selector (e.g. open the mobile nav).
// Usage: node scripts/shot-click.mjs <url> <WxH> <out.png> <selector> [full]
import { chromium } from 'playwright';

const [url, wh = '390x844', out = 'screenshots/click.png', selector, mode] = process.argv.slice(2);
const [w, h] = wh.split('x').map(Number);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: w, height: h || 844 }, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
if (selector) { await page.click(selector); await page.waitForTimeout(450); }
await page.screenshot({ path: out, fullPage: mode === 'full' });
await browser.close();
console.log('saved', out);
