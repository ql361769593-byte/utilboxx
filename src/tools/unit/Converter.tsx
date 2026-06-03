"use client";
import { useState, useEffect, useCallback } from "react";
import type { Dictionary } from "@/i18n/types";

export type Unit = { name: string; factor: number; offset?: number };

export function UnitConverter({
  units,
  dict,
}: {
  units: Unit[];
  dict: Dictionary;
}) {
  const baseUnit = units[0];
  const [fromUnit, setFromUnit] = useState(baseUnit);
  const [toUnit, setToUnit] = useState(units[1] || baseUnit);
  const [fromValue, setFromValue] = useState("1");
  const [toValue, setToValue] = useState("");

  const convert = useCallback((val: string, from: Unit, to: Unit) => {
    const n = parseFloat(val);
    if (isNaN(n)) return "";
    if (from.offset !== undefined && to.offset !== undefined) {
      const celsius = n + from.offset;
      return (celsius - to.offset).toString();
    }
    const baseVal = n * from.factor;
    return (baseVal / to.factor).toString();
  }, []);

  // 改 fromValue → 重算 toValue
  useEffect(() => {
    setToValue(convert(fromValue, fromUnit, toUnit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromValue, fromUnit, toUnit]);

  // 改 toValue → 反推 fromValue（仅在 fromValue 为空或被 toValue 推到时）
  useEffect(() => {
    // 只在直接修改 toValue 时触发
  }, [toValue]);

  const handleFromChange = (v: string) => setFromValue(v);
  const handleToChange = (v: string) => {
    setToValue(v);
    setFromValue(convert(v, toUnit, fromUnit));
  };
  const swap = () => {
    const oldFromUnit = fromUnit;
    const oldToUnit = toUnit;
    const oldFromVal = fromValue;
    const oldToVal = toValue;
    setFromUnit(oldToUnit);
    setToUnit(oldFromUnit);
    setFromValue(oldToVal);
    setToValue(oldFromVal);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-end">
        <UnitInput
          label={dict.common.input}
          unit={fromUnit}
          units={units}
          onUnitChange={setFromUnit}
          value={fromValue}
          onChange={handleFromChange}
        />
        <button
          type="button"
          onClick={swap}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded transition h-[42px]"
          title={dict.common.swap}
        >
          ⇄
        </button>
        <UnitInput
          label={dict.common.output}
          unit={toUnit}
          units={units}
          onUnitChange={setToUnit}
          value={toValue}
          onChange={handleToChange}
        />
      </div>
    </div>
  );
}

function UnitInput({
  label,
  unit,
  units,
  onUnitChange,
  value,
  onChange,
}: {
  label: string;
  unit: Unit;
  units: Unit[];
  onUnitChange: (u: Unit) => void;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium block">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-slate-300 rounded px-3 py-2 text-lg font-mono"
      />
      <select
        value={unit.name}
        onChange={(e) => onUnitChange(units.find((u) => u.name === e.target.value)!)}
        className="w-full border border-slate-300 rounded px-3 py-2"
      >
        {units.map((u) => (
          <option key={u.name} value={u.name}>
            {u.name}
          </option>
        ))}
      </select>
    </div>
  );
}
