// One-off/maintenance: converts the site photography under public/figma/ to
// WebP and removes the PNG/JPG originals. The Figma export dumped multi-MB
// PNGs of what are actually photographs; WebP cuts them by roughly 90% with no
// visible difference.
//
//   node scripts/to-webp.mjs          # convert
//   node scripts/to-webp.mjs --dry    # report only
//
// After converting, image references in src/ must use .webp.
import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { resolve, dirname, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const target = resolve(root, 'public/figma');
const dry = process.argv.includes('--dry');

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(target).filter((f) => /\.(png|jpe?g)$/i.test(f));
let before = 0;
let after = 0;

for (const file of files) {
  const src = statSync(file).size;
  const out = file.replace(/\.(png|jpe?g)$/i, '.webp');

  // effort 6 = slower encode, smaller file. One-off cost, permanent win.
  const buf = await sharp(file).webp({ quality: 82, effort: 6 }).toBuffer();

  before += src;
  after += buf.length;

  const pct = Math.round((1 - buf.length / src) * 100);
  const rel = file.slice(root.length + 1).replace(/\\/g, '/');
  console.log(
    `  ${String(Math.round(src / 1024)).padStart(5)} KB -> ${String(Math.round(buf.length / 1024)).padStart(4)} KB  (-${String(pct).padStart(2)}%)  ${rel}`
  );

  if (!dry) {
    await sharp(buf).toFile(out);
    unlinkSync(file);
  }
}

console.log(
  `\n${files.length} images: ${(before / 1048576).toFixed(1)} MB -> ${(after / 1048576).toFixed(1)} MB ` +
    `(-${Math.round((1 - after / before) * 100)}%, saves ${((before - after) / 1048576).toFixed(1)} MB)` +
    (dry ? '\n(dry run, nothing written)' : '')
);
