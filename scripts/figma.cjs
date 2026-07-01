// Figma fetch helper for the Rifby Redesign file.
// Usage:
//   node scripts/figma.js tree <node-id> [depth]  -> prints shallow tree (id, name, type, bbox)
//   node scripts/figma.js spec <node-id>          -> prints node JSON (geometry, styles, text)
//   node scripts/figma.js png  <node-id> [scale]  -> downloads a PNG to screenshots/figma-<id>.png
// node-id may be "14:373" or "14-373".
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..', '..'); // -> Rifby ai root
const ENV = path.join(ROOT, '.env-keys', '.env');
const FILE = process.env.FIGMA_FILE || 'iGm1lyZcqsEzCbLEWLaAOL';

function token() {
  const txt = fs.readFileSync(ENV, 'utf8');
  const m = txt.match(/^FIGMA_TOKEN="?([^"\r\n]*)"?/m);
  if (!m) throw new Error('FIGMA_TOKEN not found in ' + ENV);
  return m[1];
}

function bbox(n) {
  const b = n.absoluteBoundingBox;
  return b ? `${Math.round(b.width)}x${Math.round(b.height)} @(${Math.round(b.x)},${Math.round(b.y)})` : '';
}

function printTree(node, maxDepth, depth = 0) {
  const pad = '  '.repeat(depth);
  const txt = node.type === 'TEXT' && node.characters ? `  "${node.characters.slice(0, 60).replace(/\n/g, ' ')}"` : '';
  console.log(`${pad}${node.id}  [${node.type}]  ${node.name}  ${bbox(node)}${txt}`);
  if (depth < maxDepth && node.children) {
    for (const c of node.children) printTree(c, maxDepth, depth + 1);
  }
}

function hex(c) {
  if (!c) return '';
  const to = (v) => Math.round(v * 255).toString(16).padStart(2, '0');
  const a = c.a === undefined ? 1 : c.a;
  return `#${to(c.r)}${to(c.g)}${to(c.b)}${a < 1 ? to(a) : ''}`;
}

function paint(fills) {
  if (!Array.isArray(fills) || !fills.length) return '';
  return fills.filter(f => f.visible !== false).map(f => {
    if (f.type === 'SOLID') return hex({ ...f.color, a: f.opacity !== undefined ? f.opacity : f.color.a });
    if (f.type && f.type.startsWith('GRADIENT')) {
      const stops = (f.gradientStops || []).map(s => hex(s.color)).join('→');
      return `grad(${stops})`;
    }
    if (f.type === 'IMAGE') return `image[${f.imageRef ? f.imageRef.slice(0, 8) : ''} ${f.scaleMode || ''}]`;
    return f.type;
  }).join(',');
}

function printLayout(node, root, maxDepth, depth = 0) {
  const pad = '  '.repeat(depth);
  const b = node.absoluteBoundingBox;
  const rb = root.absoluteBoundingBox;
  let pos = '';
  if (b && rb) pos = `${Math.round(b.width)}x${Math.round(b.height)} @(${Math.round(b.x - rb.x)},${Math.round(b.y - rb.y)})`;
  const parts = [`${pad}${node.id} [${node.type}] ${node.name}`, pos];
  // auto layout
  if (node.layoutMode && node.layoutMode !== 'NONE') {
    const al = [`flex-${node.layoutMode === 'HORIZONTAL' ? 'row' : 'col'}`];
    if (node.itemSpacing) al.push(`gap:${node.itemSpacing}`);
    const pads = [node.paddingTop, node.paddingRight, node.paddingBottom, node.paddingLeft].map(p => p || 0);
    if (pads.some(p => p)) al.push(`pad:${pads.join('/')}`);
    if (node.primaryAxisAlignItems) al.push(`main:${node.primaryAxisAlignItems}`);
    if (node.counterAxisAlignItems) al.push(`cross:${node.counterAxisAlignItems}`);
    parts.push(`{${al.join(' ')}}`);
  }
  if (node.layoutSizingHorizontal || node.layoutSizingVertical) {
    parts.push(`size:${node.layoutSizingHorizontal || '-'}/${node.layoutSizingVertical || '-'}`);
  }
  const fillStr = paint(node.fills);
  if (fillStr) parts.push(`fill:${fillStr}`);
  if (node.strokes && node.strokes.length) parts.push(`stroke:${paint(node.strokes)}@${node.strokeWeight || 1}`);
  if (node.cornerRadius) parts.push(`radius:${node.cornerRadius}`);
  else if (node.rectangleCornerRadii) parts.push(`radius:${node.rectangleCornerRadii.join('/')}`);
  if (node.effects && node.effects.length) {
    const sh = node.effects.filter(e => e.visible !== false && /SHADOW/.test(e.type))
      .map(e => `${e.type === 'INNER_SHADOW' ? 'inner' : ''}shadow(${Math.round(e.offset?.x||0)},${Math.round(e.offset?.y||0)},${Math.round(e.radius||0)} ${hex(e.color)})`);
    if (sh.length) parts.push(sh.join(' '));
  }
  if (node.style) {
    const s = node.style;
    parts.push(`font:${s.fontFamily || ''} ${s.fontSize || ''}/${Math.round(s.lineHeightPx || 0)} w${s.fontWeight || ''}${s.letterSpacing ? ' ls:' + Math.round(s.letterSpacing*100)/100 : ''} ${s.textAlignHorizontal || ''}`);
  }
  if (node.type === 'TEXT' && node.characters) parts.push(`"${node.characters.replace(/\n/g, ' ⏎ ')}"`);
  console.log(parts.filter(Boolean).join('  '));
  if (depth < maxDepth && node.children) {
    for (const c of node.children) printLayout(c, root, maxDepth, depth + 1);
  }
}

async function getNode(NODE, tok, depthParam) {
  const dp = depthParam ? `&depth=${depthParam}` : '';
  const r = await fetch(`https://api.figma.com/v1/files/${FILE}/nodes?ids=${encodeURIComponent(NODE)}${dp}`, { headers: { 'X-Figma-Token': tok } });
  const j = await r.json();
  if (!j.nodes || !j.nodes[NODE]) throw new Error('node not found: ' + JSON.stringify(j).slice(0, 300));
  return j.nodes[NODE].document;
}

async function main() {
  const [cmd, rawId, arg3] = process.argv.slice(2);
  if (!cmd || !rawId) { console.log('usage: node scripts/figma.js <tree|spec|png> <node-id> [depth|scale]'); return; }
  const NODE = rawId.replace('-', ':');
  const tok = token();

  if (cmd === 'tree') {
    const depth = arg3 ? parseInt(arg3, 10) : 3;
    const doc = await getNode(NODE, tok, depth + 1);
    printTree(doc, depth);
  } else if (cmd === 'layout') {
    const depth = arg3 ? parseInt(arg3, 10) : 6;
    const doc = await getNode(NODE, tok, depth + 1);
    printLayout(doc, doc, depth);
  } else if (cmd === 'spec') {
    const doc = await getNode(NODE, tok);
    console.log(JSON.stringify(doc, null, 2));
  } else if (cmd === 'png' || cmd === 'svg') {
    const fmt = cmd;
    const scale = fmt === 'png' ? (arg3 || '2') : '1';
    const r = await fetch(`https://api.figma.com/v1/images/${FILE}?ids=${encodeURIComponent(NODE)}&format=${fmt}&scale=${scale}`, { headers: { 'X-Figma-Token': tok } });
    const j = await r.json();
    const url = j.images[NODE];
    if (!url) { console.log('no image url', JSON.stringify(j)); return; }
    const img = await fetch(url);
    const buf = Buffer.from(await img.arrayBuffer());
    const dir = path.join(__dirname, '..', 'screenshots');
    fs.mkdirSync(dir, { recursive: true });
    const out = path.join(dir, `figma-${rawId.replace(':', '-')}.${fmt}`);
    fs.writeFileSync(out, buf);
    console.log('saved', out);
  }
}
main().catch(e => { console.error(e.message); process.exit(1); });
