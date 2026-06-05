"use client";
import { useState, useRef } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function Base64({ dict }: { dict: Dictionary }) {
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (f: File | null) => {
    setFile(f);
    if (!f) return setData("");
    const reader = new FileReader();
    reader.onload = () => setData(reader.result as string);
    reader.readAsDataURL(f);
  };

  return (
    <div className="space-y-4">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => handleFile(e.target.files?.[0] || null)}
        className="block w-full text-sm border border-slate-300 rounded px-3 py-2"
      />
      {data && (
        <div className="space-y-2">
          <label className="text-sm font-medium block">{dict.common.output}</label>
          <textarea
            value={data}
            readOnly
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg font-mono text-xs"
          />
          <div className="flex justify-end">
            <CopyButton text={data} dict={dict} />
          </div>
        </div>
      )}
    </div>
  );
}
