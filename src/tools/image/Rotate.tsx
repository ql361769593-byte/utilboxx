"use client";
import { useState, useRef } from "react";
import type { Dictionary } from "@/i18n/types";

export default function Rotate({ dict }: { dict: Dictionary }) {
  const [file, setFile] = useState<File | null>(null);
  const [angle, setAngle] = useState(90);
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
        <label className="text-sm font-medium block">Angle (degrees)</label>
        <input
          type="number"
          value={angle}
          onChange={(e) => setAngle(parseFloat(e.target.value) || 0)}
          className="w-32 border border-slate-300 rounded px-3 py-2"
        />
      </div>
      {file && <div className="text-sm text-slate-600">Selected: {file.name}</div>}
    </div>
  );
}
