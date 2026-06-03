"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";

export default function PdfToImage({ dict }: { dict: Dictionary }) {
  const [format, setFormat] = useState<"png" | "jpeg">("png");
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 text-sm">
        <label className="font-medium">Format:</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value as "png" | "jpeg")}
          className="border border-slate-300 rounded px-3 py-1.5"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
        </select>
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
            const vp = page.getViewport({ scale: 2 });
            const canvas = document.createElement("canvas");
            canvas.width = vp.width;
            canvas.height = vp.height;
            const ctx = canvas.getContext("2d")!;
            await page.render({ canvasContext: ctx, viewport: vp, canvas } as any).promise;
            const blob: Blob = await new Promise((res) =>
              canvas.toBlob((b) => res(b!), format === "png" ? "image/png" : "image/jpeg")!
            );
            downloadBlob(blob, `${file.name.replace(".pdf", "")}-${i}.${format === "png" ? "png" : "jpg"}`);
          }
        }}
      />
    </div>
  );
}
