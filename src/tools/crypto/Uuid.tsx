"use client";
import { useState } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";
import { v4 as uuidv4, v1 as uuidv1 } from "uuid";

export default function Uuid({ dict }: { dict: Dictionary }) {
  const [uuids, setUuids] = useState<string[]>([]);
  const [version, setVersion] = useState<"v4" | "v1">("v4");
  const [count, setCount] = useState(5);

  const generate = () => {
    const n = Math.max(1, Math.min(50, count));
    const fn = version === "v4" ? uuidv4 : uuidv1;
    setUuids(Array.from({ length: n }, () => fn()));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.version}</label>
          <select value={version} onChange={(e) => setVersion(e.target.value as "v4" | "v1")} className="w-full border border-slate-300 rounded px-3 py-2">
            <option value="v4">{dict.ui.v4}</option>
            <option value="v1">{dict.ui.v1}</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.count}</label>
          <input type="number" min="1" max="50" value={count} onChange={(e) => setCount(parseInt(e.target.value) || 1)} className="w-full border border-slate-300 rounded px-3 py-2" />
        </div>
        <div className="flex items-end">
          <button type="button" onClick={generate} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg">{dict.ui.generate}</button>
        </div>
      </div>
      {uuids.length > 0 && (
        <div className="space-y-2">
          {uuids.map((u, i) => (
            <div key={i} className="bg-slate-50 rounded-lg p-3 flex items-center justify-between">
              <code className="text-sm font-mono break-all">{u}</code>
              <CopyButton text={u} dict={dict} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
