// Mobile audit helper (framework-agnostic).
// Usage: node scripts/audit.mjs <url> <WxH> [screenshotPath]
// Prints a JSON report (horizontal overflow + offenders, sub-44px tap targets,
// sub-16px inputs that trigger iOS zoom, tiny body text) and saves a full-page screenshot.
import { chromium } from 'playwright';

const [url, vp = '390x844', out] = process.argv.slice(2);
const [W, H] = vp.split('x').map(Number);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 2, isMobile: W < 500 });
const page = await ctx.newPage();
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(400);

const report = await page.evaluate((vw) => {
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && cs.opacity !== '0';
  };

  const docOverflow = document.documentElement.scrollWidth - window.innerWidth;
  // Always scan for elements escaping the viewport horizontally. (docOverflow
  // can read 0 even when children overflow, if an ancestor clips the scroll.)
  const offenders = [];
  document.querySelectorAll('*').forEach((el) => {
    const r = el.getBoundingClientRect();
    if ((r.right > vw + 1 || r.left < -1) && r.width < vw * 1.6 && visible(el)) {
      offenders.push({ tag: el.tagName, cls: (el.className?.toString() || '').slice(0, 30), right: Math.round(r.right), left: Math.round(r.left), w: Math.round(r.width), txt: (el.textContent || '').trim().slice(0, 20) });
    }
  });

  const smallTargets = [];
  document.querySelectorAll('a, button, input, select, textarea, [role="button"], [onclick]').forEach((el) => {
    if (!visible(el)) return;
    const r = el.getBoundingClientRect();
    // ignore off-screen (e.g. honeypots)
    if (r.left < -1000 || r.top < -1000) return;
    if (r.width < 44 || r.height < 44) {
      smallTargets.push({ tag: el.tagName, txt: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 20), w: Math.round(r.width), h: Math.round(r.height) });
    }
  });

  const smallInputs = [];
  document.querySelectorAll('input, select, textarea').forEach((el) => {
    if (!visible(el)) return;
    if ((el.type || '') === 'checkbox' || (el.type || '') === 'radio') return; // don't zoom
    const fs = parseFloat(getComputedStyle(el).fontSize);
    if (fs < 16) smallInputs.push({ tag: el.tagName, type: el.getAttribute('type') || '', fontSize: fs });
  });

  const smallText = [];
  const seen = new Set();
  document.querySelectorAll('p, li, a, span, label, div').forEach((el) => {
    const own = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 12);
    if (!own || !visible(el)) return;
    const fs = parseFloat(getComputedStyle(el).fontSize);
    if (fs < 14) {
      const key = el.tagName + Math.round(fs);
      if (!seen.has(key)) { seen.add(key); smallText.push({ tag: el.tagName, fontSize: fs, txt: el.textContent.trim().slice(0, 30) }); }
    }
  });

  return { viewport: vw + 'x' + window.innerHeight, docOverflow, offenders: offenders.slice(0, 12), smallTargets: smallTargets.slice(0, 20), smallInputs, smallText: smallText.slice(0, 12) };
}, W);

if (out) await page.screenshot({ path: out, fullPage: true });
console.log(JSON.stringify(report, null, 2));
await browser.close();
