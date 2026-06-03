"use client";
import { useState } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function Base64({ dict }: { dict: Dictionary }) {
  const [input, setInput] = useState("");
  const [encoded, setEncoded] = useState("");
  const [decoded, setDecoded] = useState("");
  const [error, setError] = useState("");

  const encode = () => {
    setError("");
    try {
      const b64 = btoa(unescape(encodeURIComponent(input)));
      setEncoded(b64);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const decode = () => {
    setError("");
    try {
      const text = decodeURIComponent(escape(atob(input)));
      setDecoded(text);
    } catch (e: any) {
      setError("Invalid Base64 string");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-1">Input</label>
        <TextArea value={input} onChange={setInput} rows={5} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button onClick={encode} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg">Encode →</button>
        <button onClick={decode} className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg">← Decode</button>
      </div>
      {error && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">⚠️ {error}</p>}
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
