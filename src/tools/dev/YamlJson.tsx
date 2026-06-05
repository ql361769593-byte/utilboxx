"use client";
import { useState } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

// Minimal YAML <-> JSON converter (supports common cases: maps, lists, strings, numbers, booleans, nulls)
function parseYAML(src: string): any {
  const lines = src.split(/\r?\n/).filter((l) => l.trim() && !l.trim().startsWith("#"));
  if (lines.length === 0) return null;

  // Detect if it's a list (every non-empty line starts with "- ")
  if (lines.every((l) => /^\s*-\s/.test(l))) {
    return lines.map((l) => parseScalar(l.replace(/^\s*-\s+/, "")));
  }

  // Otherwise treat as a map
  const obj: Record<string, any> = {};
  for (const l of lines) {
    const m = l.match(/^([A-Za-z0-9_.-]+)\s*:\s*(.*)$/);
    if (m) obj[m[1]] = parseScalar(m[2]);
  }
  return Object.keys(obj).length ? obj : null;
}

function parseScalar(v: string): any {
  const t = v.trim();
  if (t === "" || t === "~" || t === "null") return null;
  if (t === "true") return true;
  if (t === "false") return false;
  if (/^-?\d+$/.test(t)) return parseInt(t, 10);
  if (/^-?\d+\.\d+$/.test(t)) return parseFloat(t);
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
}

function toYAML(v: any, indent = 0): string {
  const pad = "  ".repeat(indent);
  if (v === null) return "null";
  if (typeof v === "boolean") return v ? "true" : "false";
  if (typeof v === "number") return String(v);
  if (typeof v === "string") return /[:#\n]/.test(v) ? JSON.stringify(v) : v;
  if (Array.isArray(v)) {
    if (v.length === 0) return "[]";
    return v.map((it) => {
      if (it && typeof it === "object" && !Array.isArray(it)) {
        const kvs = Object.entries(it);
        if (kvs.length === 0) return `${pad}- {}`;
        const [first, ...rest] = kvs;
        const head = `${pad}- ${first[0]}: ${toYAML(first[1], indent + 2)}`;
        return [head, ...rest.map(([k, val]) => `${pad}  ${k}: ${toYAML(val, indent + 2)}`)].join("\n");
      }
      return `${pad}- ${toYAML(it, indent + 1)}`;
    }).join("\n");
  }
  if (typeof v === "object") {
    const entries = Object.entries(v);
    if (entries.length === 0) return "{}";
    return entries.map(([k, val]) => {
      if (val && typeof val === "object" && !Array.isArray(val) && Object.keys(val).length > 0) {
        return `${pad}${k}:\n${toYAML(val, indent + 1)}`;
      }
      if (Array.isArray(val) && val.length > 0) {
        return `${pad}${k}:\n${toYAML(val, indent + 1)}`;
      }
      return `${pad}${k}: ${toYAML(val, indent + 1)}`;
    }).join("\n");
  }
  return String(v);
}

export default function YamlJson({ dict }: { dict: Dictionary }) {
  const [yaml, setYaml] = useState("name: UtilBoxx\nversion: 1.0\nactive: true\ncount: 42");
  const [json, setJson] = useState("");
  const [err, setErr] = useState("");

  const toJson = () => {
    try {
      const obj = parseYAML(yaml);
      setJson(obj === null ? "" : JSON.stringify(obj, null, 2));
      setErr("");
    } catch (e: any) { setErr(e.message); }
  };

  const toYaml = () => {
    try {
      const obj = JSON.parse(json);
      setYaml(toYAML(obj));
      setErr("");
    } catch (e: any) { setErr("Invalid JSON: " + e.message); }
  };

  return (
    <div className="space-y-4">
      {err && <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded">⚠️ {err}</p>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">YAML</label>
            <button onClick={toJson} className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">→ JSON</button>
          </div>
          <textarea value={yaml} onChange={(e) => setYaml(e.target.value)} rows={15} className="w-full px-3 py-2 border border-slate-300 rounded font-mono text-sm" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium">JSON</label>
            <div className="flex gap-2">
              <button onClick={toYaml} className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded">← YAML</button>
              {json && <CopyButton text={json} dict={dict} />}
            </div>
          </div>
          <textarea value={json} onChange={(e) => setJson(e.target.value)} rows={15} className="w-full px-3 py-2 border border-slate-300 rounded font-mono text-sm" />
        </div>
      </div>
    </div>
  );
}
