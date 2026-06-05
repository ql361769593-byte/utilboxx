"use client";
import { useState } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

function bufToHex(buf: ArrayBuffer) {
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export default function Hmac({ dict }: { dict: Dictionary }) {
  const [message, setMessage] = useState("");
  const [secret, setSecret] = useState("");
  const [result, setResult] = useState("");
  const [err, setErr] = useState("");

  const compute = async () => {
    setErr("");
    setResult("");
    try {
      const enc = new TextEncoder();
      const key = await crypto.subtle.importKey(
        "raw",
        enc.encode(secret),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
      );
      const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
      setResult(bufToHex(sig));
    } catch (e: any) {
      setErr(e.message || "Error");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-2">Message</label>
        <TextArea value={message} onChange={setMessage} rows={4} />
      </div>
      <div className="space-y-1">
        <label className="text-sm font-medium block">Secret Key</label>
        <input
          type="text"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          className="w-full border border-slate-300 rounded px-3 py-2 font-mono text-sm"
          placeholder="my-secret"
        />
      </div>
      <button
        onClick={compute}
        disabled={!message || !secret}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold py-2.5 rounded-lg"
      >
        Generate HMAC-SHA256
      </button>
      {err && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">⚠️ {err}</p>}
      {result && (
        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-semibold">HMAC-SHA256 (hex)</span>
            <CopyButton text={result} dict={dict} />
          </div>
          <code className="text-xs break-all block">{result}</code>
        </div>
      )}
    </div>
  );
}
