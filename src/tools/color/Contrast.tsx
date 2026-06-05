"use client";
import { useMemo, useState } from "react";
import type { Dictionary } from "@/i18n/types";

function hexToRgb(hex: string): [number, number, number] | null {
  let h = hex.trim().replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (!/^[0-9A-Fa-f]{6}$/.test(h)) return null;
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function relLum([r, g, b]: [number, number, number]) {
  const f = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

export default function Contrast({ dict }: { dict: Dictionary }) {
  const [fg, setFg] = useState("#FFFFFF");
  const [bg, setBg] = useState("#1E40AF");

  const { ratio, aa, aaa, aaLarge, aaaLarge } = useMemo(() => {
    const f = hexToRgb(fg);
    const b = hexToRgb(bg);
    if (!f || !b) return { ratio: 0, aa: false, aaa: false, aaLarge: false, aaaLarge: false };
    const l1 = relLum(f);
    const l2 = relLum(b);
    const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
    const r = (hi + 0.05) / (lo + 0.05);
    return {
      ratio: r,
      aa: r >= 4.5,
      aaa: r >= 7,
      aaLarge: r >= 3,
      aaaLarge: r >= 4.5,
    };
  }, [fg, bg]);

  const pickers = [
    { label: "Foreground", val: fg, set: setFg },
    { label: "Background", val: bg, set: setBg },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {pickers.map((p) => (
          <div key={p.label} className="space-y-1">
            <label className="text-sm font-medium">{p.label}</label>
            <div className="flex gap-2">
              <input type="color" value={p.val} onChange={(e) => p.set(e.target.value)} className="h-10 w-14 border border-slate-300 rounded cursor-pointer" />
              <input value={p.val} onChange={(e) => p.set(e.target.value)} className="flex-1 border border-slate-300 rounded px-3 py-2 font-mono text-sm" />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-lg p-6 border border-slate-200" style={{ background: bg, color: fg }}>
        <p className="text-2xl font-bold">Large Heading (24px)</p>
        <p className="text-base mt-2">Normal body text at 16px is used to verify contrast for typical reading.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-center">
          <div className="text-3xl font-bold text-slate-900">{ratio.toFixed(2)}:1</div>
          <div className="text-xs text-slate-500 mt-1">Contrast Ratio</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 grid grid-cols-2 gap-2 text-sm">
          <div className={aa ? "text-green-700" : "text-red-600"}>AA Normal: {aa ? "✓ Pass" : "✗ Fail"}</div>
          <div className={aaa ? "text-green-700" : "text-red-600"}>AAA Normal: {aaa ? "✓ Pass" : "✗ Fail"}</div>
          <div className={aaLarge ? "text-green-700" : "text-red-600"}>AA Large: {aaLarge ? "✓ Pass" : "✗ Fail"}</div>
          <div className={aaaLarge ? "text-green-700" : "text-red-600"}>AAA Large: {aaaLarge ? "✓ Pass" : "✗ Fail"}</div>
        </div>
      </div>
    </div>
  );
}
