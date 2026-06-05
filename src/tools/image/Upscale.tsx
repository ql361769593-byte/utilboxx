"use client";
import { useState, useRef } from "react";
import type { Dictionary } from "@/i18n/types";

export default function Upscale({ dict }: { dict: Dictionary }) {
  const [file, setFile] = useState<File | null>(null);
  const [scale, setScale] = useState(2);
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
      <div className="flex gap-2">
        {[2, 3, 4].map((n) => (
          <button
            key={n}
            onClick={() => setScale(n)}
            className={`px-4 py-2 rounded text-sm ${scale === n ? "bg-blue-600 text-white" : "bg-slate-100"}`}
          >
            {n}x
          </button>
        ))}
      </div>
      {file && <div className="text-sm text-slate-600">Selected: {file.name}</div>}
    </div>
  );
}
