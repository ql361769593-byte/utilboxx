"use client";
import { useState } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function Password({ dict }: { dict: Dictionary }) {
  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [exclude, setExclude] = useState("");
  const [count, setCount] = useState(3);
  const [passwords, setPasswords] = useState<string[]>([]);

  const generate = () => {
    let pool = "";
    if (upper) pool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) pool += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) pool += "0123456789";
    if (symbols) pool += "!@#$%^&*()-_=+[]{};:,.<>?/";
    if (exclude) {
      for (const c of exclude) pool = pool.split(c).join("");
    }
    if (!pool) return;
    const arr = new Uint32Array(length * count);
    crypto.getRandomValues(arr);
    const out: string[] = [];
    for (let i = 0; i < count; i++) {
      let s = "";
      for (let j = 0; j < length; j++) {
        s += pool[arr[i * length + j] % pool.length];
      }
      out.push(s);
    }
    setPasswords(out);
  };

  const strength = (() => {
    let score = 0;
    if (length >= 8) score++;
    if (length >= 12) score++;
    if (length >= 16) score++;
    const numTypes = [upper, lower, numbers, symbols].filter(Boolean).length;
    if (numTypes >= 3) score++;
    if (numTypes === 4) score++;
    return Math.min(4, score);
  })();

  const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["bg-red-500", "bg-orange-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"];

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-1">Length: {length}</label>
        <input type="range" min="4" max="64" value={length} onChange={(e) => setLength(parseInt(e.target.value))} className="w-full" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: "A-Z", v: upper, set: setUpper },
          { label: "a-z", v: lower, set: setLower },
          { label: "0-9", v: numbers, set: setNumbers },
          { label: "!@#", v: symbols, set: setSymbols },
        ].map((c) => (
          <label key={c.label} className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded">
            <input type="checkbox" checked={c.v} onChange={(e) => c.set(e.target.checked)} />
            <span className="text-sm font-mono">{c.label}</span>
          </label>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">Exclude characters</label>
          <input value={exclude} onChange={(e) => setExclude(e.target.value)} className="w-full border border-slate-300 rounded px-3 py-2 font-mono text-sm" placeholder="e.g. 0OIl" />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Count: {count}</label>
          <input type="number" min="1" max="20" value={count} onChange={(e) => setCount(parseInt(e.target.value) || 1)} className="w-full border border-slate-300 rounded px-3 py-2" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className={`flex-1 ${i <= strength ? strengthColors[strength] : "bg-slate-200"}`} />
            ))}
          </div>
          <span className="text-sm font-medium w-24 text-right">{strengthLabels[strength]}</span>
        </div>
      </div>
      <button onClick={generate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg">
        Generate
      </button>
      {passwords.length > 0 && (
        <div className="space-y-2">
          {passwords.map((p, i) => (
            <div key={i} className="bg-slate-50 rounded-lg p-3 flex items-center justify-between">
              <code className="text-sm font-mono break-all">{p}</code>
              <CopyButton text={p} dict={dict} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
