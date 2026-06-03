"use client";
import { useState } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function UrlEncode({ dict }: { dict: Dictionary }) {
  const [input, setInput] = useState("");
  const [encoded, setEncoded] = useState("");
  const [decoded, setDecoded] = useState("");

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-1">Input</label>
        <TextArea value={input} onChange={setInput} rows={5} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setEncoded(encodeURIComponent(input))}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg"
        >
          Encode →
        </button>
        <button
          onClick={() => {
            try {
              setDecoded(decodeURIComponent(input));
            } catch {
              setDecoded("Invalid URL-encoded string");
            }
          }}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg"
        >
          ← Decode
        </button>
      </div>
      {encoded && (
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Encoded</label>
            <CopyButton text={encoded} dict={dict} />
          </div>
          <textarea value={encoded} readOnly rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-lg font-mono text-sm bg-slate-50" />
        </div>
      )}
      {decoded && (
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium">Decoded</label>
            <CopyButton text={decoded} dict={dict} />
          </div>
          <textarea value={decoded} readOnly rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-lg font-mono text-sm bg-slate-50" />
        </div>
      )}
    </div>
  );
}
