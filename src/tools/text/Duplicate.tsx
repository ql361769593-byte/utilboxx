"use client";
import { useState, useMemo } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function RemoveDuplicates({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(true);
  const [keepEmpty, setKeepEmpty] = useState(false);

  const result = useMemo(() => {
    const lines = text.split("\n");
    const seen = new Set<string>();
    const out: string[] = [];
    let removed = 0;
    for (const line of lines) {
      const key = caseSensitive ? line : line.toLowerCase();
      if (!keepEmpty && !line.trim()) {
        if (out[out.length - 1] !== "") out.push(line);
        continue;
      }
      if (seen.has(key)) {
        removed++;
        continue;
      }
      seen.add(key);
      out.push(line);
    }
    return { text: out.join("\n"), removed };
  }, [text, caseSensitive, keepEmpty]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} />
          Case sensitive
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={keepEmpty} onChange={(e) => setKeepEmpty(e.target.checked)} />
          Keep empty lines
        </label>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium block mb-2">{dict.common.input}</label>
          <TextArea value={text} onChange={setText} rows={12} />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">{dict.common.output}</label>
            <CopyButton text={result.text} dict={dict} />
          </div>
          <textarea value={result.text} readOnly rows={12} className="w-full px-4 py-3 border border-slate-300 rounded-lg font-mono text-sm bg-slate-50" />
          {result.removed > 0 && (
            <p className="text-sm text-green-600 mt-2">✓ Removed {result.removed} duplicate(s)</p>
          )}
        </div>
      </div>
    </div>
  );
}
