"use client";
import { useState, useMemo } from "react";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function Timestamp({ dict }: { dict: Dictionary }) {
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000).toString());
  const [dateStr, setDateStr] = useState(new Date().toISOString().slice(0, 19));

  const fromTimestamp = useMemo(() => {
    const n = parseInt(timestamp);
    if (isNaN(n)) return "";
    return new Date(n * 1000).toISOString();
  }, [timestamp]);

  const fromDate = useMemo(() => {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "";
    return Math.floor(d.getTime() / 1000).toString();
  }, [dateStr]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium block">Unix timestamp (seconds)</label>
          <input
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 font-mono"
          />
          {fromTimestamp && (
            <div className="bg-slate-50 rounded p-3 text-sm font-mono">
              <div>UTC: {fromTimestamp}</div>
              <div>Local: {new Date(parseInt(timestamp) * 1000).toLocaleString()}</div>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium block">Date string</label>
          <input
            type="datetime-local"
            value={dateStr}
            onChange={(e) => setDateStr(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2 font-mono"
          />
          {fromDate && (
            <div className="bg-slate-50 rounded p-3 text-sm font-mono">
              <div>Timestamp: {fromDate}</div>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <button onClick={() => setTimestamp(Math.floor(Date.now() / 1000).toString())} className="bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded text-sm">Now (s)</button>
        <button onClick={() => setTimestamp(Date.now().toString())} className="bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded text-sm">Now (ms)</button>
        <button onClick={() => setTimestamp("0")} className="bg-slate-100 hover:bg-slate-200 px-3 py-2 rounded text-sm">Epoch (0)</button>
      </div>
    </div>
  );
}
