"use client";
import { useState } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

async function digest(algo: string, text: string) {
  const data = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest(algo, data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function Hash({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("");
  const [hashes, setHashes] = useState<Record<string, string>>({});

  const compute = async () => {
    if (!text) return;
    const results: Record<string, string> = {};
    results["SHA-1"] = await digest("SHA-1", text);
    results["SHA-256"] = await digest("SHA-256", text);
    results["SHA-384"] = await digest("SHA-384", text);
    results["SHA-512"] = await digest("SHA-512", text);
    setHashes(results);
  };

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} rows={5} />
      <button
        onClick={compute}
        disabled={!text}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold py-2.5 rounded-lg"
      >
        Generate Hashes
      </button>
      {Object.keys(hashes).length > 0 && (
        <div className="space-y-2">
          {Object.entries(hashes).map(([algo, hash]) => (
            <div key={algo} className="bg-slate-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-semibold">{algo}</span>
                <CopyButton text={hash} dict={dict} />
              </div>
              <code className="text-xs break-all">{hash}</code>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
