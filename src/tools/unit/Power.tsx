"use client";
import { useState, useMemo } from "react";
import type { Dictionary } from "@/i18n/types";

const UNITS = [
  { key: "W", name: "Watt (W)", factor: 1 },
  { key: "kW", name: "Kilowatt (kW)", factor: 1_000 },
  { key: "MW", name: "Megawatt (MW)", factor: 1_000_000 },
  { key: "GW", name: "Gigawatt (GW)", factor: 1_000_000_000 },
  { key: "HP", name: "Horsepower (mechanical, hp)", factor: 745.6998715822702 },
  { key: "PS", name: "Metric horsepower (PS)", factor: 735.49875 },
];

export default function Power({ dict }: { dict: Dictionary }) {
  const [src, setSrc] = useState(UNITS[0]);
  const [value, setValue] = useState("1");
  const [swapTarget, setSwapTarget] = useState(UNITS[1]?.key);

  const base = useMemo(() => parseFloat(value) * src.factor, [value, src]);

  const handleSwap = () => {
    const target = UNITS.find((u) => u.key === swapTarget);
    if (!target) return;
    const old = src;
    setSrc(target);
    setValue((parseFloat(value) * old.factor / target.factor).toString());
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
          <label className="text-sm font-medium block">{dict.tools.unit.power}</label>
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
          {UNITS.filter((u) => u.key !== src.key).map((u) => (
            <div
              key={u.key}
              className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded px-3 py-2"
            >
              <span className="text-sm text-slate-700">{u.name}</span>
              <span className="font-mono text-sm font-semibold text-slate-900">
                {(base / u.factor).toLocaleString(undefined, { maximumFractionDigits: 6 })}
              </span>
            </div>
          ))}
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
