"use client";
import { useMemo, useState } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

function hexToRgb(hex: string): [number, number, number] | null {
  let h = hex.trim().replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (!/^[0-9A-Fa-f]{6}$/.test(h)) return null;
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("").toUpperCase();
}

export default function Mixer({ dict }: { dict: Dictionary }) {
  const [c1, setC1] = useState("#3B82F6");
  const [c2, setC2] = useState("#EC4899");
  const [percent, setPercent] = useState(50);

  const mixed = useMemo(() => {
    const a = hexToRgb(c1);
    const b = hexToRgb(c2);
    if (!a || !b) return "#000000";
    const t = percent / 100;
    return rgbToHex(a[0] * (1 - t) + b[0] * t, a[1] * (1 - t) + b[1] * t, a[2] * (1 - t) + b[2] * t);
  }, [c1, c2, percent]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[{ label: "Color A", val: c1, set: setC1 }, { label: "Color B", val: c2, set: setC2 }].map((p) => (
          <div key={p.label} className="space-y-1">
            <label className="text-sm font-medium">{p.label}</label>
            <div className="flex gap-2">
              <input type="color" value={p.val} onChange={(e) => p.set(e.target.value)} className="h-10 w-14 border border-slate-300 rounded cursor-pointer" />
              <input value={p.val} onChange={(e) => p.set(e.target.value)} className="flex-1 border border-slate-300 rounded px-3 py-2 font-mono text-sm" />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium">Mix: {percent}% of B / {100 - percent}% of A</label>
        <input type="range" min="0" max="100" value={percent} onChange={(e) => setPercent(parseInt(e.target.value))} className="w-full" />
      </div>
      <div className="h-32 rounded-lg shadow-inner border border-slate-200" style={{ background: mixed }} />
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Result HEX</label>
          <CopyButton text={mixed} dict={dict} />
        </div>
        <input readOnly value={mixed} className="w-full border border-slate-300 rounded px-3 py-2 font-mono text-sm bg-slate-50" />
      </div>
    </div>
  );
}
