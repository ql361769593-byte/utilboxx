"use client";
import { useState } from "react";
import { FileTool } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";

export default function ExtractImages({ dict }: { dict: Dictionary }) {
  const [info, setInfo] = useState("");
  return (
    <div className="space-y-4">
      <div className="bg-amber-50 border border-amber-200 text-amber-800 text-sm rounded-lg p-3">
        ℹ️ Renders each PDF page as a high-res image. For real embedded image extraction use a server-side tool.
      </div>
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.extractImages}
        onProcess={async (files) => {
          const file = files[0];
          const pdfjs = await import("pdfjs-dist");
          (pdfjs as any).GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@4.0.379/build/pdf.worker.min.mjs`;
          const bytes = await file.arrayBuffer();
          const pdf = await pdfjs.getDocument({ data: bytes }).promise;
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const vp = page.getViewport({ scale: 1.5 });
            const canvas = document.createElement("canvas");
            canvas.width = vp.width;
            canvas.height = vp.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) continue;
            await page.render({ canvasContext: ctx, viewport: vp, canvas } as any).promise;
            const blob: Blob | null = await new Promise((res) =>
              canvas.toBlob((b) => res(b), "image/png")
            );
            if (blob) {
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `${file.name.replace(".pdf", "")}-page-${i}.png`;
              a.click();
              URL.revokeObjectURL(url);
            }
          }
          setInfo(`Processed ${pdf.numPages} page(s).`);
        }}
      />
      {info && <p className="text-sm text-green-600">{info}</p>}
    </div>
  );
}
