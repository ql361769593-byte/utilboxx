"use client";
import { useState, useMemo } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

// Map of letters to their fancy unicode equivalents (one per row in VARIANTS)
const VARIANTS: Record<string, string> = {
  a: "𝓪𝖺𝒶𝙖ᴀ",
  b: "𝓫𝖻𝒷𝙗ʙ",
  c: "𝓬𝖼𝒸𝙘ᴄ",
  d: "𝓭𝖽𝒹𝙙ᴅ",
  e: "𝓮𝖾𝑒𝙚ᴇ",
  f: "𝓯𝖿𝒻𝙛ꜰ",
  g: "𝓰𝗀𝑔𝙜ɢ",
  h: "𝓱𝗁𝒽𝙝ʜ",
  i: "𝓲𝗂𝒾𝙞ɪ",
  j: "𝓳𝗃𝒿𝙟ᴊ",
  k: "𝓴𝗄𝓀𝙠ᴋ",
  l: "𝓵𝗅𝓁𝙡ʟ",
  m: "𝓶𝗆𝓂𝙢ᴍ",
  n: "𝓷𝗇𝓃𝙣ɴ",
  o: "𝓸𝗈𝑜𝙤ᴏ",
  p: "𝓹𝗉𝓅𝙥ᴘ",
  q: "𝓺𝗊𝓆𝙦ǫ",
  r: "𝓻𝗋𝓇𝙧ʀ",
  s: "𝓼𝗌𝓈𝙨ꜱ",
  t: "𝓽𝗍𝓉𝙩ᴛ",
  u: "𝓾𝗎𝓊𝙪ᴜ",
  v: "𝓿𝗏𝓋𝙫ᴠ",
  w: "𝔀𝗐𝓌𝙬ᴡ",
  x: "𝔁𝗑𝓍𝙭𝓍",
  y: "𝔂𝗒𝓎𝙮ʏ",
  z: "𝔃𝗓𝓏𝙯ᴢ",
};

const VARIANT_LABELS = ["𝒞𝓊𝓇𝓈𝒾𝓋𝑒", "𝖲𝖺𝗇𝗌", "𝒮𝒸𝓇𝒾𝓅𝓉", "𝖬𝗈𝗇𝗈", "𝐒𝐦𝐚𝐥𝐥", "𝐅𝐫𝐚𝐤𝐭𝐮𝐫", "𝐁𝐨𝐥𝐝", "𝐼𝑡𝑎𝑙𝑖𝑐"];

function transform(input: string, idx: number): string {
  return Array.from(input)
    .map((ch) => {
      const lower = ch.toLowerCase();
      const v = VARIANTS[lower];
      if (!v) return ch;
      const isUpper = ch !== lower;
      // Get variant at index idx (cycling); the map is space-separated
      const parts = v.split("");
      const out = parts[idx] || ch;
      return isUpper ? out.toUpperCase() : out;
    })
    .join("");
}

export default function Fancy({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("Hello World");

  const variants = useMemo(
    () => VARIANT_LABELS.map((_, i) => transform(text, i)),
    [text]
  );

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} rows={3} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {variants.map((v, i) => (
          <div key={i} className="space-y-2">
            <label className="text-xs font-medium text-slate-600 block">
              {VARIANT_LABELS[i] || `Variant ${i + 1}`}
            </label>
            <div className="relative">
              <TextArea value={v} onChange={() => {}} rows={2} />
              <div className="absolute top-1 right-1">
                <CopyButton text={v} dict={dict} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
