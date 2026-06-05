"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { getPdfjs } from "./pdfjs-loader";
import { PDFDocument } from "pdf-lib";

export default function CropPdf({ dict }: { dict: Dictionary }) {
  const [margin, setMargin] = useState(20);
  const [busy, setBusy] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const loadPreviews = async (f: File) => {
    setFile(f);
    setBusy(true);
    try {
      const pdfjs = await getPdfjs();
      const bytes = await f.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: bytes }).promise;
      const urls: string[] = [];
      for (let i = 1; i <= Math.min(pdf.numPages, 5); i++) {
        const page = await pdf.getPage(i);
        const vp = page.getViewport({ scale: 1 });
        const canvas = document.createElement("canvas");
        canvas.width = vp.width;
        canvas.height = vp.height;
        const ctx = canvas.getContext("2d");
        if (!ctx) continue;
        await page.render({ canvasContext: ctx, viewport: vp, canvas } as any).promise;
        urls.push(canvas.toDataURL("image/png"));
      }
      setPreviews(urls);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-1">
          Crop margin: {margin}px
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={margin}
          onChange={(e) => setMargin(parseInt(e.target.value))}
          className="w-full"
        />
        <p className="text-xs text-slate-500 mt-1">
          Removes a uniform margin (in PDF points) from each side of every page.
        </p>
      </div>
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.cropPdf}
        onProcess={async (files) => {
          await loadPreviews(files[0]);
          const f = files[0];
          const bytes = await f.arrayBuffer();
          const doc = await PDFDocument.load(bytes);
          for (const page of doc.getPages()) {
            const { width, height } = page.getSize();
            page.setCropBox(margin, margin, width - 2 * margin, height - 2 * margin);
          }
          const data = await doc.save();
          downloadBlob(
            new Blob([data as BlobPart], { type: "application/pdf" }),
            `cropped-${f.name}`
          );
        }}
      />
      {busy && <div className="text-sm text-slate-600">{dict.common.loading}</div>}
      {previews.length > 0 && file && (
        <div className="space-y-2">
          <div className="text-xs text-slate-600">
            Preview: {file.name} (showing first {previews.length} pages)
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {previews.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt={`p${i + 1}`} className="border max-h-48" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
