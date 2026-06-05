"use client";
import { useState, useRef } from "react";
import type { Dictionary } from "@/i18n/types";

export default function Exif({ dict }: { dict: Dictionary }) {
  const [file, setFile] = useState<File | null>(null);
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
      {file && <div className="text-sm text-slate-600">Selected: {file.name}</div>}
    </div>
  );
}
