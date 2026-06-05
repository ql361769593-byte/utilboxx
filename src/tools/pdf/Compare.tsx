"use client";
import { useState } from "react";
import { FileTool } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { getPdfjs } from "./pdfjs-loader";

export default function ComparePdf({ dict }: { dict: Dictionary }) {
  const [left, setLeft] = useState<string[]>([]);
  const [right, setRight] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);

  const renderPdfToImages = async (file: File): Promise<string[]> => {
    const pdfjs = await getPdfjs();
    const bytes = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: bytes }).promise;
    const urls: string[] = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const vp = page.getViewport({ scale: 1.2 });
      const canvas = document.createElement("canvas");
      canvas.width = vp.width;
      canvas.height = vp.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) continue;
      await page.render({ canvasContext: ctx, viewport: vp, canvas } as any).promise;
      urls.push(canvas.toDataURL("image/png"));
    }
    return urls;
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-slate-600">
        Upload two PDFs to view them page-by-page side by side. Rendering
        happens in your browser; nothing is uploaded.
      </div>
      <FileTool
        dict={dict}
        accept="application/pdf"
        multiple
        processButtonText={dict.tools.pdf.compare}
        onProcess={async (files) => {
          if (files.length < 2) return;
          setBusy(true);
          try {
            const [a, b] = files;
            const [l, r] = await Promise.all([renderPdfToImages(a), renderPdfToImages(b)]);
            setLeft(l);
            setRight(r);
          } finally {
            setBusy(false);
          }
        }}
      />
      {busy && <div className="text-sm text-slate-600">{dict.common.loading}</div>}
      {left.length > 0 && right.length > 0 && (
        <div className="space-y-3">
          {Array.from({ length: Math.max(left.length, right.length) }).map((_, i) => (
            <div key={i} className="border border-slate-200 rounded-lg p-2">
              <div className="text-xs text-slate-500 mb-1">Page {i + 1}</div>
              <div className="flex gap-2 overflow-x-auto">
                {left[i] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={left[i]} alt={`A p${i + 1}`} className="max-w-full border" />
                ) : (
                  <div className="text-slate-400 text-sm p-4">No page</div>
                )}
                {right[i] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={right[i]} alt={`B p${i + 1}`} className="max-w-full border" />
                ) : (
                  <div className="text-slate-400 text-sm p-4">No page</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
