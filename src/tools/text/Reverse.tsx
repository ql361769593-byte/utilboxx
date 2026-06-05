"use client";
import { useState, useMemo } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function Reverse({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("");
  const reversed = useMemo(() => text.split("").reverse().join(""), [text]);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={dict.ui.type_text} rows={8} />
      <div className="space-y-2">
        <label className="text-sm font-medium block">{dict.common.output}</label>
        <div
          className="w-full min-h-[160px] px-4 py-3 border border-slate-300 rounded-lg bg-slate-50 font-mono text-sm whitespace-pre-wrap break-words"
        >
          {reversed || <span className="text-slate-400">…</span>}
        </div>
        {reversed && (
          <div className="flex justify-end">
            <CopyButton text={reversed} dict={dict} />
          </div>
        )}
      </div>
    </div>
  );
}
