"use client";
import { useState, useMemo } from "react";
import type { Dictionary } from "@/i18n/types";

// Base: km/L
// MPG(US) = km/L * 2.352
// MPG(UK) = km/L * 2.825
// L/100km = 100 / (km/L)
// gal/100mi = (1 / km/L) * (160.9344 / 3.785411784) * 100 = 4251.43... / km/L
//   derived: 1 mi = 1.609344 km, 1 US gal = 3.785411784 L
//   1 km/L = (1/1.609344) mi/L = 0.621371 mi/L
//   1 mi/gal = km/L * (1.609344 / 3.785411784) = km/L * 0.4251437
//   so 1 km/L = 1/0.4251437 MPG(US) = 2.352145 MPG(US)  ✓
//   1 UK gal = 4.54609 L, 1 km/L = 1/(1.609344/4.54609) MPG(UK) = 2.824816 MPG(UK)  ✓
//   gal/100mi: 1 km/L means you travel 1 km on 1 L, or 100 mi on (100/1.609344)/1 L = 62.1371 L
//   so gal/100mi = 62.1371 / 3.785411784 = 16.41 (US gal) per 100 mi
//   more simply: gal/100mi = 352.145 / km/L
//   Let's verify: 1 km/L = 100 mi / 100 km = 100 mi / 62.1371 mi
//   = 1.6093 "100km per 100 mi" ratio? Hmm let's recompute.
//   1 km/L means 1 km per 1 L. Per 100 mi = 160.9344 km, needs 160.9344 L.
//   gal/100mi = 160.9344 / 3.785411784 = 42.5144 US gal/100mi
//   So gal/100mi = 42.5144 / km/L = (100*1.609344/3.785411784) / km/L = 42.5144 / km/L
//
// Let's redefine everything in terms of km/L (the base):
//   km/L -> MPG(US):  km/L * 2.352145
//   km/L -> MPG(UK):  km/L * 2.824816
//   km/L -> L/100km:  100 / km/L
//   km/L -> gal/100mi: 42.5144 / km/L
//   km/L -> km/L:     km/L

const UNITS = [
  { key: "kmL", name: "km/L" },
  { key: "mpgUS", name: "MPG (US)" },
  { key: "mpgUK", name: "MPG (UK)" },
  { key: "l100", name: "L/100km" },
  { key: "gal100mi", name: "gal (US)/100mi" },
];

function toBase(value: number, key: string): number {
  // returns km/L
  switch (key) {
    case "kmL": return value;
    case "mpgUS": return value / 2.352145;
    case "mpgUK": return value / 2.824816;
    case "l100": return value === 0 ? 0 : 100 / value;
    case "gal100mi": return value === 0 ? 0 : 42.5144 / value;
    default: return 0;
  }
}

function fromBase(kmL: number, key: string): number {
  switch (key) {
    case "kmL": return kmL;
    case "mpgUS": return kmL * 2.352145;
    case "mpgUK": return kmL * 2.824816;
    case "l100": return kmL === 0 ? 0 : 100 / kmL;
    case "gal100mi": return kmL === 0 ? 0 : 42.5144 / kmL;
    default: return 0;
  }
}

export default function Fuel({ dict }: { dict: Dictionary }) {
  const [src, setSrc] = useState(UNITS[0]);
  const [value, setValue] = useState("10");
  const [swapTarget, setSwapTarget] = useState(UNITS[1]?.key);

  const base = useMemo(() => toBase(parseFloat(value) || 0, src.key), [value, src]);

  const handleSwap = () => {
    const target = UNITS.find((u) => u.key === swapTarget);
    if (!target) return;
    const newVal = fromBase(base, target.key);
    setSrc(target);
    setValue(String(newVal));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-3 items-end">
        <div className="space-y-2">
          <label className="text-sm font-medium block">{dict.common.input}</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 text-lg font-mono"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium block">{dict.tools.unit.fuel}</label>
          <select
            value={src.key}
            onChange={(e) => setSrc(UNITS.find((u) => u.key === e.target.value)!)}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            {UNITS.map((u) => (
              <option key={u.key} value={u.key}>{u.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-4 space-y-2">
        <label className="text-sm font-medium block">{dict.common.output}</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {UNITS.filter((u) => u.key !== src.key).map((u) => {
            const v = fromBase(base, u.key);
            return (
              <div
                key={u.key}
                className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded px-3 py-2"
              >
                <span className="text-sm text-slate-700">{u.name}</span>
                <span className="font-mono text-sm font-semibold text-slate-900">
                  {v.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-end gap-2 pt-2 border-t border-slate-200">
        <div className="space-y-1 flex-1 min-w-[180px]">
          <label className="text-xs font-medium text-slate-600 block">{dict.common.swap}</label>
          <select
            value={swapTarget}
            onChange={(e) => setSwapTarget(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 text-sm"
          >
            {UNITS.filter((u) => u.key !== src.key).map((u) => (
              <option key={u.key} value={u.key}>{u.name}</option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSwap}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded transition h-[42px]"
          title={dict.common.swap}
        >
          ⇄ {dict.common.swap}
        </button>
      </div>
    </div>
  );
}
