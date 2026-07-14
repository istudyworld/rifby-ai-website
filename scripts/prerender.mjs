// Prerenders every page's React tree into its built HTML, so crawlers and AI
// answer engines get real markup instead of an empty <div id="root">. The
// client then hydrates that markup (see src/entries/mount.jsx).
//
// Runs as part of `npm run build`, after `vite build` (client) and
// `vite build --ssr` (which produces .prerender/ssr.js).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ssrEntry = resolve(root, '.prerender/ssr.js');

if (!existsSync(ssrEntry)) {
  console.error(`prerender: missing ${ssrEntry}. Run the ssr build first.`);
  process.exit(1);
}

const { PAGES, render } = await import(pathToFileURL(ssrEntry).href);

const PLACEHOLDER = '<div id="root"></div>';
let failed = 0;

for (const file of Object.keys(PAGES)) {
  const htmlPath = resolve(root, 'dist', file);

  if (!existsSync(htmlPath)) {
    console.error(`  FAIL  ${file} — not found in dist/`);
    failed++;
    continue;
  }

  const html = readFileSync(htmlPath, 'utf8');
  if (!html.includes(PLACEHOLDER)) {
    console.error(`  FAIL  ${file} — no ${PLACEHOLDER} to inject into`);
    failed++;
    continue;
  }

  let markup;
  try {
    markup = render(file);
  } catch (err) {
    console.error(`  FAIL  ${file} — render threw: ${err.message}`);
    failed++;
    continue;
  }

  writeFileSync(htmlPath, html.replace(PLACEHOLDER, `<div id="root">${markup}</div>`));

  const words = markup.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean).length;
  console.log(`  OK    ${file.padEnd(18)} ${String(words).padStart(5)} words  ${String(Math.round(markup.length / 1024)).padStart(4)} KB`);
}

if (failed) {
  console.error(`\nprerender: ${failed} page(s) failed`);
  process.exit(1);
}
console.log(`\nprerender: ${Object.keys(PAGES).length} pages prerendered`);
