"use client";
import { useState } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

function hexToRgb(hex: string) {
  const m = hex.replace("#", "").match(/.{1,2}/g);
  if (!m || m.length < 3) return null;
  return {
    r: parseInt(m[0], 16),
    g: parseInt(m[1], 16),
    b: parseInt(m[2], 16),
  };
}
function rgbToHex(r: number, g: number, b: number) {
  return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase();
}
function rgbToHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}
function hslToRgb(h: number, s: number, l: number) {
  h /= 360; s /= 100; l /= 100;
  let r, g, b;
  if (s === 0) { r = g = b = l; }
  else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

export default function ColorPicker({ dict }: { dict: Dictionary }) {
  const [hex, setHex] = useState("#3B82F6");
  const rgb = hexToRgb(hex) || { r: 0, g: 0, b: 0 };
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="w-full sm:w-48 h-48 rounded-lg border border-slate-200" style={{ background: hex }} />
        <div className="flex-1 space-y-3">
          <div>
            <label className="text-sm font-medium block mb-1">Pick a color</label>
            <input type="color" value={hex} onChange={(e) => setHex(e.target.value)} className="w-full h-12 rounded cursor-pointer" />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">HEX</label>
            <div className="flex gap-2">
              <input value={hex} onChange={(e) => setHex(e.target.value)} className="flex-1 border border-slate-300 rounded px-3 py-2 font-mono" />
              <CopyButton text={hex} dict={dict} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <ColorBox label="RGB" value={`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`} text={dict} />
        <ColorBox label="HSL" value={`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`} text={dict} />
        <ColorBox label="Decimal" value={rgb.r * 65536 + rgb.g * 256 + rgb.b} text={dict} />
      </div>
    </div>
  );
}

function ColorBox({ label, value, text }: { label: string; value: string | number; text: Dictionary }) {
  return (
    <div className="bg-slate-50 rounded-lg p-3">
      <div className="text-xs text-slate-600 mb-1">{label}</div>
      <div className="font-mono text-sm">{value}</div>
    </div>
  );
}
