"use client";
import { useState, useMemo } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

type Mode = "az" | "za" | "numAsc" | "numDesc";

export default function Sort({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("");
  const [mode, setMode] = useState<Mode>("az");

  const sorted = useMemo(() => {
    const lines = text.split("\n");
    if (mode === "az") return [...lines].sort((a, b) => a.localeCompare(b));
    if (mode === "za") return [...lines].sort((a, b) => b.localeCompare(a));
    if (mode === "numAsc")
      return [...lines].sort((a, b) => parseFloat(a) - parseFloat(b));
    return [...lines].sort((a, b) => parseFloat(b) - parseFloat(a));
  }, [text, mode]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_220px] gap-3 items-end">
        <div className="space-y-2">
          <label className="text-sm font-medium block">{dict.common.input}</label>
          <TextArea value={text} onChange={setText} rows={8} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium block">{dict.common.options}</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as Mode)}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
            <option value="numAsc">Numeric ↑</option>
            <option value="numDesc">Numeric ↓</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium block">{dict.common.output}</label>
          {text && <CopyButton text={sorted.join("\n")} dict={dict} />}
        </div>
        <pre className="w-full min-h-[160px] px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 font-mono text-sm whitespace-pre-wrap break-words">
{sorted.join("\n")}
        </pre>
      </div>
    </div>
  );
}
