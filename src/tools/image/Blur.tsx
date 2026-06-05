"use client";
import { useState, useRef } from "react";
import type { Dictionary } from "@/i18n/types";

export default function Blur({ dict }: { dict: Dictionary }) {
  const [file, setFile] = useState<File | null>(null);
  const [amount, setAmount] = useState(5);
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
        <label className="text-sm font-medium block">Blur amount: {amount}px</label>
        <input
          type="range"
          min={0}
          max={50}
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="w-full"
        />
      </div>
      {file && <div className="text-sm text-slate-600">Selected: {file.name}</div>}
    </div>
  );
}
