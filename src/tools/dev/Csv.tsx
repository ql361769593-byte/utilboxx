"use client";
import { useState } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

// Simple CSV parser supporting quoted fields and embedded commas/newlines
function parseCSV(src: string): Record<string, string>[] {
  const rows: string[][] = [];
  let cur: string[] = [];
  let field = "";
  let inQ = false;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (inQ) {
      if (c === '"') {
        if (src[i + 1] === '"') { field += '"'; i++; }
        else inQ = false;
      } else field += c;
    } else {
      if (c === '"') inQ = true;
      else if (c === ",") { cur.push(field); field = ""; }
      else if (c === "\n") { cur.push(field); rows.push(cur); cur = []; field = ""; }
      else if (c === "\r") { /* skip */ }
      else field += c;
    }
  }
  if (field.length || cur.length) { cur.push(field); rows.push(cur); }
  if (rows.length === 0) return [];
  const headers = rows[0];
  return rows.slice(1).filter((r) => r.some((v) => v !== "")).map((r) => {
    const o: Record<string, string> = {};
    headers.forEach((h, idx) => { o[h] = r[idx] ?? ""; });
    return o;
  });
}

function esc(v: any): string {
  const s = v === null || v === undefined ? "" : String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function toCSV(arr: any[]): string {
  if (arr.length === 0) return "";
  const keys = Array.from(new Set(arr.flatMap((o) => Object.keys(o))));
  const lines = [keys.join(",")];
  for (const row of arr) lines.push(keys.map((k) => esc(row[k])).join(","));
  return lines.join("\n");
}

export default function Csv({ dict }: { dict: Dictionary }) {
  const [csv, setCsv] = useState("name,age,city\nAlice,30,NYC\nBob,25,LA");
  const [json, setJson] = useState("");
  const [err, setErr] = useState("");

  const toJson = () => {
    try {
      const arr = parseCSV(csv);
      setJson(JSON.stringify(arr, null, 2));
      setErr("");
    } catch (e: any) { setErr(e.message); }
  };

  const toCsv = () => {
    try {
      const arr = JSON.parse(json);
      if (!Array.isArray(arr)) throw new Error("JSON must be an array of objects");
      setCsv(toCSV(arr));
      setErr("");
    } catch (e: any) { setErr("Invalid JSON: " + e.message); }
  };

  return (
    <div className="space-y-4">
      {err && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">⚠️ {err}</p>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">CSV</label>
            <button onClick={toJson} className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">→ JSON</button>
          </div>
          <textarea value={csv} onChange={(e) => setCsv(e.target.value)} rows={15} className="w-full px-3 py-2 border border-slate-300 rounded font-mono text-sm" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">JSON (array of objects)</label>
            <div className="flex gap-2">
              <button onClick={toCsv} className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">← CSV</button>
              {json && <CopyButton text={json} dict={dict} />}
            </div>
          </div>
          <textarea value={json} onChange={(e) => setJson(e.target.value)} rows={15} className="w-full px-3 py-2 border border-slate-300 rounded font-mono text-sm" />
        </div>
      </div>
    </div>
  );
}
