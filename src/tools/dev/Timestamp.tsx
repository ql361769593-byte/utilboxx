"use client";
import { useState, useEffect } from "react";
import type { Dictionary } from "@/i18n/types";

export default function Timestamp({ dict }: { dict: Dictionary }) {
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000).toString());
  const [dateStr, setDateStr] = useState(new Date().toISOString().slice(0, 19));
  const [editing, setEditing] = useState<"ts" | "date">("ts");

  // 改 timestamp → 重算 dateStr
  useEffect(() => {
    if (editing !== "ts") return;
    const n = parseInt(timestamp);
    if (isNaN(n)) return;
    const d = new Date(n * 1000);
    if (isNaN(d.getTime())) return;
    setDateStr(d.toISOString().slice(0, 19));
  }, [timestamp, editing]);

  // 改 dateStr → 重算 timestamp
  useEffect(() => {
    if (editing !== "date") return;
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return;
    setTimestamp(Math.floor(d.getTime() / 1000).toString());
  }, [dateStr, editing]);

  const fromTimestamp = (() => {
    const n = parseInt(timestamp);
    if (isNaN(n)) return null;
    return new Date(n * 1000);
  })();

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium block">{dict.ui.unix_timestamp}</label>
          <input
            value={timestamp}
            onChange={(e) => {
              setEditing("ts");
              setTimestamp(e.target.value);
            }}
            className="w-full border border-slate-300 rounded px-3 py-2 font-mono"
          />
          {fromTimestamp && !isNaN(fromTimestamp.getTime()) && (
            <div className="bg-slate-50 rounded p-3 text-sm font-mono">
              <div>UTC: {fromTimestamp.toISOString()}</div>
              <div>Local: {fromTimestamp.toLocaleString()}</div>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium block">{dict.ui.date_string}</label>
          <input
            type="datetime-local"
            value={dateStr}
            onChange={(e) => {
              setEditing("date");
              setDateStr(e.target.value);
            }}
            className="w-full border border-slate-300 rounded px-3 py-2 font-mono"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => {
            setEditing("ts");
            setTimestamp(Math.floor(Date.now() / 1000).toString());
          }}
          className="bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded text-sm"
        >
          {dict.ui.now_s}
        </button>
        <button
          type="button"
          onClick={() => {
            setEditing("ts");
            setTimestamp(Date.now().toString());
          }}
          className="bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded text-sm"
        >
          {dict.ui.now_ms}
        </button>
        <button
          type="button"
          onClick={() => {
            setEditing("ts");
            setTimestamp("0");
          }}
          className="bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded text-sm"
        >
          {dict.ui.epoch}
        </button>
      </div>
    </div>
  );
}
