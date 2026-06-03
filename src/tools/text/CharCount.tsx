"use client";
import { useState, useMemo } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function CharCount({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("");
  const stats = useMemo(() => {
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, "").length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text ? text.split("\n").length : 0;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter((s) => s.trim()).length : 0;
    const bytes = new Blob([text]).size;
    return { chars, charsNoSpaces, words, lines, sentences, bytes };
  }, [text]);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={dict.ui.type_text} rows={10} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <Stat label="Characters" value={stats.chars} />
        <Stat label="No spaces" value={stats.charsNoSpaces} />
        <Stat label="Words" value={stats.words} />
        <Stat label="Lines" value={stats.lines} />
        <Stat label="Sentences" value={stats.sentences} />
        <Stat label="Bytes" value={stats.bytes} />
      </div>
      {text && (
        <div className="flex justify-end">
          <CopyButton text={text} dict={dict} />
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-slate-50 rounded-lg p-3 text-center">
      <div className="text-2xl font-bold text-slate-900">{value.toLocaleString()}</div>
      <div className="text-xs text-slate-600 mt-1">{label}</div>
    </div>
  );
}
