"use client";
import { useState, useEffect } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument } from "pdf-lib";

type PagePreview = {
  index: number; // 0-based original index
  preview: string; // short text from page for display
  width: number;
  height: number;
};

export default function ReorderPdf({ dict }: { dict: Dictionary }) {
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PagePreview[]>([]);
  const [order, setOrder] = useState<number[]>([]); // array of original indices in current order
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  // When a file is chosen, parse and populate page previews
  const handleFile = async (f: File) => {
    setFile(f);
    setBusy(true);
    setError("");
    setPages([]);
    setOrder([]);
    try {
      const bytes = await f.arrayBuffer();
      const pdfjs = await import("pdfjs-dist");
      (pdfjs as any).GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@4.0.379/build/pdf.worker.min.mjs`;
      const pdf = await pdfjs.getDocument({ data: bytes.slice(0) }).promise;
      const out: PagePreview[] = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const vp = page.getViewport({ scale: 1 });
        let preview = "";
        try {
          const tc = await page.getTextContent();
          preview = (tc.items as any[])
            .map((it) => (it.str || "").trim())
            .filter(Boolean)
            .slice(0, 6)
            .join(" ");
          if (preview.length > 80) preview = preview.slice(0, 80) + "…";
        } catch {
          preview = `Page ${i}`;
        }
        if (!preview) preview = `Page ${i}`;
        out.push({ index: i - 1, preview, width: vp.width, height: vp.height });
      }
      setPages(out);
      setOrder(out.map((p) => p.index));
    } catch (e: any) {
      setError(e?.message || "Failed to read PDF");
    } finally {
      setBusy(false);
    }
  };

  const move = (from: number, to: number) => {
    if (from === to) return;
    setOrder((cur) => {
      const next = [...cur];
      const [m] = next.splice(from, 1);
      next.splice(to, 0, m);
      return next;
    });
  };

  const reset = () => setOrder(pages.map((p) => p.index));
  const reverse = () => setOrder((cur) => [...cur].reverse());

  const onDragStart = (e: React.DragEvent, idx: number) => {
    e.dataTransfer.setData("text/plain", String(idx));
    e.dataTransfer.effectAllowed = "move";
  };
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const onDrop = (e: React.DragEvent, target: number) => {
    e.preventDefault();
    const from = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (!isNaN(from)) move(from, target);
  };

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm rounded-lg p-3">
        ℹ️ {dict.ui.reorder_info || "Upload a PDF, then drag pages to reorder them. Click the buttons to move one step, or drag rows."}
      </div>

      {!file && (
        <div>
          <label className="block border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50/30 transition">
            <p className="text-slate-700 font-medium">{dict.ui.choose_file}</p>
            <p className="text-sm text-slate-500 mt-1">{dict.ui.drop_file_here}</p>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) handleFile(f);
              }}
              className="sr-only"
            />
          </label>
        </div>
      )}

      {busy && <p className="text-sm text-slate-600">{dict.common.loading}</p>}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded p-3">{error}</div>
      )}

      {file && pages.length > 0 && (
        <>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="text-sm text-slate-600">
              {file.name} · {pages.length} {dict.ui.pages || "pages"}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={reset}
                className="px-3 py-1.5 text-xs border border-slate-300 rounded hover:bg-slate-50"
              >
                {dict.ui.reset || "Reset"}
              </button>
              <button
                type="button"
                onClick={reverse}
                className="px-3 py-1.5 text-xs border border-slate-300 rounded hover:bg-slate-50"
              >
                {dict.ui.reverse || "Reverse"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setPages([]);
                  setOrder([]);
                }}
                className="px-3 py-1.5 text-xs border border-slate-300 rounded hover:bg-slate-50"
              >
                {dict.ui.change_file || "Change file"}
              </button>
            </div>
          </div>

          <ol className="space-y-1 max-h-[420px] overflow-y-auto border border-slate-200 rounded-lg p-2 bg-slate-50">
            {order.map((origIdx, pos) => {
              const p = pages[origIdx];
              return (
                <li
                  key={origIdx}
                  draggable
                  onDragStart={(e) => onDragStart(e, pos)}
                  onDragOver={onDragOver}
                  onDrop={(e) => onDrop(e, pos)}
                  className="flex items-center gap-3 bg-white border border-slate-200 rounded px-3 py-2 cursor-move hover:border-blue-400"
                >
                  <span className="text-slate-400 text-xs">⋮⋮</span>
                  <span className="text-xs font-mono text-slate-500 w-12">
                    {dict.ui.page || "Page"} {pos + 1}
                  </span>
                  <span className="text-xs font-mono text-slate-400 w-16">
                    (was #{origIdx + 1})
                  </span>
                  <span className="flex-1 text-sm truncate text-slate-700">{p.preview}</span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      onClick={() => move(pos, Math.max(0, pos - 1))}
                      disabled={pos === 0}
                      className="px-2 py-0.5 text-xs border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-30"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      onClick={() => move(pos, Math.min(order.length - 1, pos + 1))}
                      disabled={pos === order.length - 1}
                      className="px-2 py-0.5 text-xs border border-slate-300 rounded hover:bg-slate-50 disabled:opacity-30"
                    >
                      ↓
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>

          <button
            type="button"
            onClick={async () => {
              if (order.length === 0) return;
              setBusy(true);
              try {
                const bytes = await file.arrayBuffer();
                const src = await PDFDocument.load(bytes);
                const out = await PDFDocument.create();
                const pagesCopy = await out.copyPages(src, order);
                pagesCopy.forEach((p) => out.addPage(p));
                const data = await out.save();
                downloadBlob(
                  new Blob([data as BlobPart], { type: "application/pdf" }),
                  `reordered-${file.name}`
                );
              } catch (e: any) {
                setError(e?.message || "Failed to reorder");
              } finally {
                setBusy(false);
              }
            }}
            disabled={busy || order.length === 0}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition"
          >
            {busy ? dict.common.loading : (dict.ui.apply_reorder || "Apply reorder & download")}
          </button>
        </>
      )}
    </div>
  );
}
