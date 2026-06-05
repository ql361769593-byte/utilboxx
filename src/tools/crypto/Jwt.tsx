"use client";
import { useMemo, useState } from "react";
import { TextArea, CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

function b64urlDecode(s: string) {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  try {
    const bin = atob(s);
    try {
      return decodeURIComponent(escape(bin));
    } catch {
      return bin;
    }
  } catch {
    return null;
  }
}

export default function Jwt({ dict }: { dict: Dictionary }) {
  const [token, setToken] = useState("");

  const decoded = useMemo(() => {
    if (!token.trim()) return { valid: true, header: "", payload: "", signature: "" };
    const parts = token.trim().split(".");
    if (parts.length !== 3) return { valid: false, header: "", payload: "", signature: "" };
    const h = b64urlDecode(parts[0]);
    const p = b64urlDecode(parts[1]);
    if (h === null || p === null) return { valid: false, header: "", payload: "", signature: "" };
    const tryJson = (s: string) => {
      try { return JSON.stringify(JSON.parse(s), null, 2); } catch { return s; }
    };
    return { valid: true, header: tryJson(h), payload: tryJson(p), signature: parts[2] };
  }, [token]);

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-2">JWT Token</label>
        <TextArea value={token} onChange={setToken} rows={4} placeholder="eyJhbGciOi..." />
      </div>
      {!decoded.valid && (
        <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">⚠️ Invalid JWT (expected 3 parts separated by dots)</p>
      )}
      {decoded.valid && decoded.header && (
        <div className="space-y-3">
          {([
            { label: "Header", val: decoded.header },
            { label: "Payload", val: decoded.payload },
            { label: "Signature", val: decoded.signature },
          ] as const).map((s) => (
            <div key={s.label} className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">{s.label}</label>
                <CopyButton text={s.val} dict={dict} />
              </div>
              <textarea readOnly value={s.val} rows={s.label === "Signature" ? 2 : 6} className="w-full px-3 py-2 border border-slate-300 rounded font-mono text-xs bg-slate-50" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
