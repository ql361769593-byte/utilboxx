"use client";
import { useMemo, useState } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function Gradient({ dict }: { dict: Dictionary }) {
  const [color1, setColor1] = useState("#3B82F6");
  const [color2, setColor2] = useState("#EC4899");
  const [angle, setAngle] = useState(135);

  const css = useMemo(
    () => `linear-gradient(${angle}deg, ${color1} 0%, ${color2} 100%)`,
    [color1, color2, angle]
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="space-y-1">
          <label className="text-sm font-medium">Color 1</label>
          <div className="flex gap-2">
            <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="h-10 w-14 border border-slate-300 rounded cursor-pointer" />
            <input value={color1} onChange={(e) => setColor1(e.target.value)} className="flex-1 border border-slate-300 rounded px-3 py-2 font-mono text-sm" />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Color 2</label>
          <div className="flex gap-2">
            <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="h-10 w-14 border border-slate-300 rounded cursor-pointer" />
            <input value={color2} onChange={(e) => setColor2(e.target.value)} className="flex-1 border border-slate-300 rounded px-3 py-2 font-mono text-sm" />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Angle: {angle}°</label>
          <input type="range" min="0" max="360" value={angle} onChange={(e) => setAngle(parseInt(e.target.value))} className="w-full mt-2" />
        </div>
      </div>
      <div
        className="h-48 rounded-lg shadow-inner border border-slate-200"
        style={{ background: css }}
      />
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">CSS</label>
          <CopyButton text={css} dict={dict} />
        </div>
        <textarea readOnly value={`background: ${css};`} rows={2} className="w-full px-3 py-2 border border-slate-300 rounded font-mono text-sm bg-slate-50" />
      </div>
    </div>
  );
}
