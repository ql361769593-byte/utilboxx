"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument } from "pdf-lib";

type SplitMode = "range" | "single" | "each";

export default function SplitPdf({ dict }: { dict: Dictionary }) {
  const [mode, setMode] = useState<SplitMode>("range");
  const [ranges, setRanges] = useState("1-3, 5, 7-9");
  const [pageInfo, setPageInfo] = useState<{ total: number; name: string } | null>(null);

  // Parse ranges like "1-3, 5, 7-9" into 0-indexed page indices, deduped and sorted
  const parseRanges = (input: string, total: number): number[] => {
    const set = new Set<number>();
    const parts = input.split(/[,;\s]+/).map((s) => s.trim()).filter(Boolean);
    for (const p of parts) {
      if (p.includes("-")) {
        const [a, b] = p.split("-").map((s) => parseInt(s.trim(), 10));
        if (isNaN(a) || isNaN(b)) continue;
        const [start, end] = a <= b ? [a, b] : [b, a];
        for (let i = start; i <= end; i++) {
          if (i >= 1 && i <= total) set.add(i - 1);
        }
      } else {
        const n = parseInt(p, 10);
        if (!isNaN(n) && n >= 1 && n <= total) set.add(n - 1);
      }
    }
    return [...set].sort((a, b) => a - b);
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm rounded-lg p-3">
        ℹ️ {dict.ui.split_info || "Choose how to split your PDF. Enter ranges like 1-3, 5, 7-9 to extract specific pages."}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium block">{dict.ui.split_mode || "Split mode"}</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setMode("range")}
            className={`px-3 py-2 text-sm rounded border ${mode === "range" ? "bg-blue-600 text-white border-blue-600" : "bg-white border-slate-300 hover:border-blue-400"}`}
          >
            {dict.ui.split_mode_range || "Custom range"}
          </button>
          <button
            type="button"
            onClick={() => setMode("each")}
            className={`px-3 py-2 text-sm rounded border ${mode === "each" ? "bg-blue-600 text-white border-blue-600" : "bg-white border-slate-300 hover:border-blue-400"}`}
          >
            {dict.ui.split_mode_each || "One file per page"}
          </button>
          <button
            type="button"
            onClick={() => setMode("single")}
            className={`px-3 py-2 text-sm rounded border ${mode === "single" ? "bg-blue-600 text-white border-blue-600" : "bg-white border-slate-300 hover:border-blue-400"}`}
          >
            {dict.ui.split_mode_single || "Single file (all pages)"}
          </button>
        </div>
      </div>

      {mode === "range" && (
        <div>
          <label className="text-sm font-medium block mb-1">
            {dict.ui.page_ranges || "Page ranges"} <span className="text-slate-500 font-normal">(e.g. 1-3, 5, 7-9)</span>
          </label>
          <input
            type="text"
            value={ranges}
            onChange={(e) => setRanges(e.target.value)}
            placeholder="1-3, 5, 7-9"
            className="w-full border border-slate-300 rounded px-3 py-2 font-mono text-sm"
          />
        </div>
      )}

      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.split}
        onProcess={async (files) => {
          const file = files[0];
          const bytes = await file.arrayBuffer();
          const src = await PDFDocument.load(bytes);
          const total = src.getPageCount();
          setPageInfo({ total, name: file.name });

          const baseName = file.name.replace(/\.pdf$/i, "");

          if (mode === "single") {
            // Just download a single copy of the whole PDF (for users who want a "validated" copy)
            const data = await src.save();
            downloadBlob(
              new Blob([data as BlobPart], { type: "application/pdf" }),
              `${baseName}.pdf`
            );
            return;
          }

          if (mode === "each") {
            for (let i = 0; i < total; i++) {
              const out = await PDFDocument.create();
              const [page] = await out.copyPages(src, [i]);
              out.addPage(page);
              const data = await out.save();
              downloadBlob(
                new Blob([data as BlobPart], { type: "application/pdf" }),
                `${baseName}-page-${i + 1}.pdf`
              );
            }
            return;
          }

          // mode === "range"
          const indices = parseRanges(ranges, total);
          if (indices.length === 0) {
            alert(dict.ui.invalid_range || "Invalid page range. Please use formats like 1-3, 5, 7-9.");
            return;
          }
          const out = await PDFDocument.create();
          const pages = await out.copyPages(src, indices);
          pages.forEach((p) => out.addPage(p));
          const data = await out.save();
          downloadBlob(
            new Blob([data as BlobPart], { type: "application/pdf" }),
            `${baseName}-split.pdf`
          );
        }}
      />

      {pageInfo && (
        <p className="text-xs text-slate-500">
          {dict.ui.source_pdf || "Source"}: {pageInfo.name} · {pageInfo.total} {dict.ui.pages || "pages"}
        </p>
      )}
    </div>
  );
}
