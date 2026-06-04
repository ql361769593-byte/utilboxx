// 提取 lucide icons 的 SVG body（<path>/<line>/<circle>/<rect> 等）
// 用法：node extract-icons.mjs

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const ICONS = [
  ["combine", "Combine"],
  ["scissors", "Scissors"],
  ["minimize-2", "Minimize2"],
  ["image", "Image"],
  ["file-image", "FileImage"],
  ["stamp", "Stamp"],
  ["rotate-cw", "RotateCw"],
  ["file-text", "FileText"],
  ["list-ordered", "ListOrdered"],
  ["maximize-2", "Maximize2"],
  ["crop", "Crop"],
  ["refresh-cw", "RefreshCw"],
  ["hash", "Hash"],
  ["case-sensitive", "CaseSensitive"],
  ["copy-x", "CopyX"],
  ["git-compare", "GitCompare"],
  ["regex", "Regex"],
  ["ruler", "Ruler"],
  ["weight", "Weight"],
  ["thermometer", "Thermometer"],
  ["square", "Square"],
  ["beaker", "Beaker"],
  ["gauge", "Gauge"],
  ["hard-drive", "HardDrive"],
  ["clock", "Clock"],
  ["pipette", "Pipette"],
  ["palette", "Palette"],
  ["swatch-book", "SwatchBook"],
  ["lock", "Lock"],
  ["binary", "Binary"],
  ["link", "Link"],
  ["fingerprint", "Fingerprint"],
  ["braces", "Braces"],
  ["timer", "Timer"],
  ["qr-code", "QrCode"],
  ["key", "Key"],
];

// 把 [tag, {attrs}] 转成 innerHTML
function attrsToString(attrs) {
  return Object.entries(attrs)
    .filter(([k]) => k !== "key")
    .map(([k, v]) => `${k}="${String(v).replace(/"/g, "&quot;")}"`)
    .join(" ");
}

function iconToInner(slug) {
  const src = readFileSync(
    join(__dirname, "node_modules/lucide-react/dist/esm/icons", `${slug}.js`),
    "utf8"
  );
  // 提取 [[tag, {attrs}], ...] 数组
  // 简单 regex：匹配 ['path', {...}]
  const matches = src.matchAll(/\[\s*"(\w+)"\s*,\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}\s*\]/g);
  const parts = [];
  for (const m of matches) {
    const tag = m[1];
    const attrStr = m[2];
    // 解析属性对象
    const attrs = {};
    const attrRe = /(\w+):\s*(?:"([^"]*)"|'([^']*)'|(\d+(?:\.\d+)?))/g;
    let am;
    while ((am = attrRe.exec(attrStr)) !== null) {
      const k = am[1];
      const v = am[2] ?? am[3] ?? am[4];
      attrs[k] = v;
    }
    parts.push(`<${tag} ${attrsToString(attrs)}/>`);
  }
  return parts.join("");
}

const out = {};
for (const [slug, name] of ICONS) {
  out[name] = iconToInner(slug);
}

writeFileSync(
  join(__dirname, "src/lib/icon-sprite.json"),
  JSON.stringify(out, null, 0)
);

const total = Object.values(out).reduce((s, v) => s + v.length, 0);
console.log(
  `Extracted ${ICONS.length} icons, total ${(total / 1024).toFixed(1)}KB`
);
