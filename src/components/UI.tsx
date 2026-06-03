"use client";
import { useState, ReactNode } from "react";
import { Copy, Check } from "lucide-react";
import type { Dictionary } from "@/i18n/types";

export function CopyButton({ text, dict, className }: { text: string; dict: Dictionary; className?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className={`inline-flex items-center gap-1 text-sm px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded transition ${className || ""}`}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-green-600" />
          {dict.common.copied}
        </>
      ) : (
        <>
          <Copy className="w-4 h-4" />
          {dict.common.copy}
        </>
      )}
    </button>
  );
}

export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 10,
  dict,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  dict?: Dictionary;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || (dict?.ui.type_text ?? "")}
      rows={rows}
      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none font-mono text-sm"
    />
  );
}

export function ToolSection({ children }: { children: ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}
