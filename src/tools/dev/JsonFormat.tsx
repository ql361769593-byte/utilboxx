"use client";
import { useState, useMemo } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function JsonFormat({ dict }: { dict: Dictionary }) {
  const [input, setInput] = useState("");
  const [indent, setIndent] = useState(2);
  const [error, setError] = useState("");

  const result = useMemo(() => {
    if (!input.trim()) return "";
    try {
      const obj = JSON.parse(input);
      setError("");
      return JSON.stringify(obj, null, indent);
    } catch (e: any) {
      setError(e.message);
      return "";
    }
  }, [input, indent]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium">Indent:</label>
        <select value={indent} onChange={(e) => setIndent(parseInt(e.target.value))} className="border border-slate-300 rounded px-3 py-1.5 text-sm">
          <option value="2">2 spaces</option>
          <option value="4">4 spaces</option>
          <option value="0">Minified</option>
        </select>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium block mb-2">Input JSON</label>
          <TextArea value={input} onChange={setInput} rows={15} />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">Output</label>
            {result && <CopyButton text={result} dict={dict} />}
          </div>
          <textarea value={result} readOnly rows={15} className="w-full px-4 py-3 border border-slate-300 rounded-lg font-mono text-sm bg-slate-50" />
        </div>
      </div>
      {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">⚠️ {error}</p>}
    </div>
  );
}
