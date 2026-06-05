"use client";
import { useState, useRef } from "react";
import { TextArea } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function Meme({ dict }: { dict: Dictionary }) {
  const [file, setFile] = useState<File | null>(null);
  const [top, setTop] = useState("WHEN YOU FIND");
  const [bottom, setBottom] = useState("A FREE TOOL");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="space-y-4">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block w-full text-sm border border-slate-300 rounded px-3 py-2"
      />
      <div className="space-y-2">
        <label className="text-sm font-medium block">Top text</label>
        <TextArea value={top} onChange={setTop} rows={2} />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium block">Bottom text</label>
        <TextArea value={bottom} onChange={setBottom} rows={2} />
      </div>
    </div>
  );
}
