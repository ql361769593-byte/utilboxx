"use client";
import { useState } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

function hslToHex(h: number, s: number, l: number) {
  s /= 100; l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60) { r = c; g = x; }
  else if (h < 120) { r = x; g = c; }
  else if (h < 180) { g = c; b = x; }
  else if (h < 240) { g = x; b = c; }
  else if (h < 300) { r = x; b = c; }
  else { r = c; b = x; }
  const toHex = (n: number) =>
    Math.round((n + m) * 255).toString(16).padStart(2, "0");
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

export default function Palette({ dict }: { dict: Dictionary }) {
  const [baseHue, setBaseHue] = useState(220);
  const [scheme, setScheme] = useState<"complementary" | "analogous" | "triadic" | "tetradic" | "monochromatic">("analogous");

  const colors = (() => {
    switch (scheme) {
      case "complementary": return [baseHue, baseHue + 180];
      case "analogous": return [baseHue - 30, baseHue, baseHue + 30];
      case "triadic": return [baseHue, baseHue + 120, baseHue + 240];
      case "tetradic": return [baseHue, baseHue + 90, baseHue + 180, baseHue + 270];
      case "monochromatic": return [baseHue, baseHue, baseHue, baseHue];
    }
  })();

  const saturation = 70;
  const lightnesses = [40, 55, 70, 85];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">
            {dict.ui.base_hue}: {baseHue}°
          </label>
          <input type="range" min="0" max="360" value={baseHue} onChange={(e) => setBaseHue(parseInt(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.scheme}</label>
          <select value={scheme} onChange={(e) => setScheme(e.target.value as any)} className="w-full border border-slate-300 rounded px-3 py-2">
            <option value="analogous">{dict.ui.scheme_analogous}</option>
            <option value="complementary">{dict.ui.scheme_complementary}</option>
            <option value="triadic">{dict.ui.scheme_triadic}</option>
            <option value="tetradic">{dict.ui.scheme_tetradic}</option>
            <option value="monochromatic">{dict.ui.scheme_monochromatic}</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        {colors.map((h, i) => (
          <div key={i} className="grid grid-cols-4 gap-2">
            {lightnesses.map((l, j) => {
              const hex = hslToHex(((h % 360) + 360) % 360, saturation, l);
              return (
                <div key={j} className="rounded-lg overflow-hidden border border-slate-200">
                  <div className="h-16" style={{ background: hex }} />
                  <div className="p-2 bg-white text-xs font-mono flex items-center justify-between">
                    <span>{hex}</span>
                    <CopyButton text={hex} dict={dict} />
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
