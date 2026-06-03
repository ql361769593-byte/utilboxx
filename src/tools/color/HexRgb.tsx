"use client";
import { useState, useMemo } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

function hexToRgb(hex: string) {
  const m = hex.replace("#", "").match(/.{1,2}/g);
  if (!m || m.length < 3) return null;
  return { r: parseInt(m[0], 16), g: parseInt(m[1], 16), b: parseInt(m[2], 16) };
}

export default function HexRgb({ dict }: { dict: Dictionary }) {
  const [hex, setHex] = useState("#3B82F6");
  const [r, setR] = useState(59);
  const [g, setG] = useState(130);
  const [b, setB] = useState(246);

  const validHex = useMemo(() => /^#[0-9A-Fa-f]{6}$/.test(hex), [hex]);
  const fromHex = validHex ? hexToRgb(hex) : null;

  const setFromHex = (val: string) => {
    setHex(val);
    const rgb = hexToRgb(val);
    if (rgb) {
      setR(rgb.r);
      setG(rgb.g);
      setB(rgb.b);
    }
  };
  const setFromRgb = (nr: number, ng: number, nb: number) => {
    setR(nr);
    setG(ng);
    setB(nb);
    setHex("#" + [nr, ng, nb].map((v) => v.toString(16).padStart(2, "0")).join("").toUpperCase());
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium block">HEX</label>
          <div className="flex gap-2">
            <input value={hex} onChange={(e) => setFromHex(e.target.value)} className="flex-1 border border-slate-300 rounded px-3 py-2 font-mono" />
            <CopyButton text={hex} dict={dict} />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium block">RGB</label>
          <div className="flex gap-2">
            <input value={`rgb(${r}, ${g}, ${b})`} readOnly className="flex-1 border border-slate-300 rounded px-3 py-2 font-mono bg-slate-50" />
            <CopyButton text={`rgb(${r}, ${g}, ${b})`} dict={dict} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "R", val: r, set: (v: number) => setFromRgb(v, g, b) },
          { label: "G", val: g, set: (v: number) => setFromRgb(r, v, b) },
          { label: "B", val: b, set: (v: number) => setFromRgb(r, g, v) },
        ].map((c) => (
          <div key={c.label}>
            <label className="text-sm font-medium block mb-1">
              {c.label}: {c.val}
            </label>
            <input
              type="range"
              min="0"
              max="255"
              value={c.val}
              onChange={(e) => c.set(parseInt(e.target.value))}
              className="w-full"
            />
            <input
              type="number"
              min="0"
              max="255"
              value={c.val}
              onChange={(e) => c.set(Math.max(0, Math.min(255, parseInt(e.target.value) || 0)))}
              className="w-full mt-1 border border-slate-300 rounded px-3 py-1 text-sm font-mono"
            />
          </div>
        ))}
      </div>
      <div
        className="h-32 rounded-lg flex items-center justify-center text-white font-mono text-2xl shadow-inner"
        style={{ background: hex }}
      >
        {hex}
      </div>
    </div>
  );
}
