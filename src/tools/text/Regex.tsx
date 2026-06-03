"use client";
import { useState, useMemo } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function RegexTester({ dict }: { dict: Dictionary }) {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const result = useMemo(() => {
    if (!pattern) return { matches: [], count: 0 };
    try {
      const re = new RegExp(pattern, flags);
      const matches: { match: string; index: number; groups: string[] }[] = [];
      if (flags.includes("g")) {
        let m;
        while ((m = re.exec(text)) !== null) {
          matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
          if (m.index === re.lastIndex) re.lastIndex++;
        }
      } else {
        const m = re.exec(text);
        if (m) matches.push({ match: m[0], index: m.index, groups: m.slice(1) });
      }
      setError("");
      return { matches, count: matches.length };
    } catch (e: any) {
      setError(e.message);
      return { matches: [], count: 0 };
    }
  }, [pattern, flags, text]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <label className="text-sm font-medium block mb-1">Pattern</label>
          <input
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="e.g. \b\w+@\w+\.\w+\b"
            className="w-full border border-slate-300 rounded px-3 py-2 font-mono"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Flags</label>
          <input
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            placeholder="g, i, m..."
            className="w-full border border-slate-300 rounded px-3 py-2 font-mono"
          />
        </div>
      </div>
      {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">⚠️ {error}</p>}
      <div>
        <label className="text-sm font-medium block mb-1">Test text</label>
        <TextArea value={text} onChange={setText} rows={8} />
      </div>
      {result.count > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-green-600">✓ {result.count} match(es) found</p>
          <div className="space-y-1 max-h-64 overflow-auto">
            {result.matches.map((m, i) => (
              <div key={i} className="bg-slate-50 rounded px-3 py-2 text-sm font-mono flex items-center justify-between">
                <span>
                  <span className="text-slate-500">@{m.index}:</span>{" "}
                  <span className="text-blue-700">{m.match}</span>
                </span>
                {m.groups.length > 0 && (
                  <span className="text-xs text-slate-500">groups: [{m.groups.join(", ")}]</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
