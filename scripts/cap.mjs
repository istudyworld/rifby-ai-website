// Screenshot helper for verifying the build against Figma.
// Usage:
//   node scripts/cap.mjs <url> <WxH> <out.png> [full|<clipY:clipH>]
//   node scripts/cap.mjs http://localhost:5181/ 1512x982 screenshots/home-top.png
//   node scripts/cap.mjs http://localhost:5181/ 1512x0  screenshots/home-full.png full
import { chromium } from 'playwright';

const [url, wh = '1512x982', out = 'screenshots/cap.png', mode] = process.argv.slice(2);
const [w, h] = wh.split('x').map(Number);

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: w, height: h || 982 },
  deviceScaleFactor: 2,
});
await page.goto(url, { waitUntil: 'networkidle' });
// give web fonts + images a beat
await page.waitForTimeout(700);

if (mode === 'full') {
  await page.screenshot({ path: out, fullPage: true });
} else if (mode && mode.includes(':')) {
  const [y, ch] = mode.split(':').map(Number);
  await page.screenshot({ path: out, clip: { x: 0, y, width: w, height: ch } });
} else {
  await page.screenshot({ path: out });
}

await browser.close();
console.log('saved', out);
