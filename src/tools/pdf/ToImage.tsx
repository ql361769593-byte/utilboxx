"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";

export default function PdfToImage({ dict }: { dict: Dictionary }) {
  const [format, setFormat] = useState<"png" | "jpeg">("png");
  const [scale, setScale] = useState(2);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.format}:</label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as "png" | "jpeg")}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="png">PNG (lossless, larger)</option>
            <option value="jpeg">JPEG (lossy, smaller)</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">
            {dict.ui.quality || "Quality"}: {scale}x ({Math.round(72 * scale)} DPI)
          </label>
          <input
            type="range"
            min="1"
            max="4"
            step="0.5"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-500">
            <span>1x (72 DPI)</span>
            <span>2x (144 DPI)</span>
            <span>3x (216 DPI)</span>
            <span>4x (288 DPI)</span>
          </div>
        </div>
      </div>

      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.toImage}
        onProcess={async (files) => {
          const file = files[0];
          const pdfjs = await import("pdfjs-dist");
          (pdfjs as any).GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@4.0.379/build/pdf.worker.min.mjs`;
          const bytes = await file.arrayBuffer();
          const pdf = await pdfjs.getDocument({ data: bytes }).promise;
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const vp = page.getViewport({ scale });
            const canvas = document.createElement("canvas");
            canvas.width = vp.width;
            canvas.height = vp.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) continue;
            // White background for JPEG (PDFs are transparent by default)
            if (format === "jpeg") {
              ctx.fillStyle = "#ffffff";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            await page.render({ canvasContext: ctx, viewport: vp, canvas } as any).promise;
            const blob: Blob | null = await new Promise((res) =>
              canvas.toBlob(
                (b) => res(b),
                format === "png" ? "image/png" : "image/jpeg",
                format === "jpeg" ? 0.92 : undefined
              )
            );
            if (blob)
              downloadBlob(
                blob,
                `${file.name.replace(/\.pdf$/i, "")}-${i}.${format === "png" ? "png" : "jpg"}`
              );
          }
        }}
      />
    </div>
  );
}
