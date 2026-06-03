"use client";
import { useState } from "react";
import type { Dictionary } from "@/i18n/types";

export default function Temperature({ dict }: { dict: Dictionary }) {
  return <TemperatureCustom />;
}

function TemperatureCustom() {
  const [c, setC] = useState("");
  const [f, setF] = useState("");
  const [k, setK] = useState("");

  const updateFromC = (val: string) => {
    setC(val);
    const n = parseFloat(val);
    if (isNaN(n)) {
      setF("");
      setK("");
      return;
    }
    setF(((n * 9) / 5 + 32).toString());
    setK((n + 273.15).toString());
  };
  const updateFromF = (val: string) => {
    setF(val);
    const n = parseFloat(val);
    if (isNaN(n)) {
      setC("");
      setK("");
      return;
    }
    const cVal = ((n - 32) * 5) / 9;
    setC(cVal.toString());
    setK((cVal + 273.15).toString());
  };
  const updateFromK = (val: string) => {
    setK(val);
    const n = parseFloat(val);
    if (isNaN(n)) {
      setC("");
      setF("");
      return;
    }
    const cVal = n - 273.15;
    setC(cVal.toString());
    setF(((cVal * 9) / 5 + 32).toString());
  };

  return (
    <div className="space-y-3">
      <TempInput label="Celsius (°C)" value={c} onChange={updateFromC} />
      <TempInput label="Fahrenheit (°F)" value={f} onChange={updateFromF} />
      <TempInput label="Kelvin (K)" value={k} onChange={updateFromK} />
    </div>
  );
}

function TempInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-1">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-slate-300 rounded px-3 py-2 text-lg font-mono"
      />
    </div>
  );
}
