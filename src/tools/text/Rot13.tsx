"use client";
import { useState, useMemo } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

function rot13(s: string): string {
  return s.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
}

export default function Rot13({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("");
  const output = useMemo(() => rot13(text), [text]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium block">{dict.common.input}</label>
        <TextArea value={text} onChange={setText} rows={6} />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium block">{dict.common.output}</label>
          {output && <CopyButton text={output} dict={dict} />}
        </div>
        <pre className="w-full min-h-[160px] px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 font-mono text-sm whitespace-pre-wrap break-words">
{output || <span className="text-slate-400">…</span>}
        </pre>
      </div>
    </div>
  );
}
