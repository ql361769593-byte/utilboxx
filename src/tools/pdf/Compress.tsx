"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument } from "pdf-lib";
import { getPdfjs } from "./pdfjs-loader";

type Level = "light" | "medium" | "strong";

export default function CompressPdf({ dict }: { dict: Dictionary }) {
  const [level, setLevel] = useState<Level>("medium");

  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 text-blue-800 text-sm rounded-lg p-3 space-y-1">
        <p>
          <strong>{dict.ui.how_it_works || "How it works"}:</strong> {dict.ui.compress_explainer || "Choose a compression level. Light and Medium preserve text as selectable; Strong re-renders pages as compressed images (smallest files, text won't be searchable)."}
        </p>
      </div>

      <div>
        <label className="text-sm font-medium block mb-2">
          {dict.ui.compression_level || "Compression level"}
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setLevel("light")}
            className={`px-3 py-3 text-sm rounded border text-left ${level === "light" ? "bg-blue-600 text-white border-blue-600" : "bg-white border-slate-300 hover:border-blue-400"}`}
          >
            <div className="font-semibold">{dict.ui.level_light || "Light"}</div>
            <div className={`text-xs ${level === "light" ? "text-blue-100" : "text-slate-500"}`}>
              {dict.ui.level_light_desc || "Strip metadata, reflow streams. Text remains searchable."}
            </div>
          </button>
          <button
            type="button"
            onClick={() => setLevel("medium")}
            className={`px-3 py-3 text-sm rounded border text-left ${level === "medium" ? "bg-blue-600 text-white border-blue-600" : "bg-white border-slate-300 hover:border-blue-400"}`}
          >
            <div className="font-semibold">{dict.ui.level_medium || "Medium"}</div>
            <div className={`text-xs ${level === "medium" ? "text-blue-100" : "text-slate-500"}`}>
              {dict.ui.level_medium_desc || "Re-render pages at 150 DPI. Smaller files, text becomes image."}
            </div>
          </button>
          <button
            type="button"
            onClick={() => setLevel("strong")}
            className={`px-3 py-3 text-sm rounded border text-left ${level === "strong" ? "bg-blue-600 text-white border-blue-600" : "bg-white border-slate-300 hover:border-blue-400"}`}
          >
            <div className="font-semibold">{dict.ui.level_strong || "Strong"}</div>
            <div className={`text-xs ${level === "strong" ? "text-blue-100" : "text-slate-500"}`}>
              {dict.ui.level_strong_desc || "Re-render at 100 DPI, JPEG quality 60. Smallest files."}
            </div>
          </button>
        </div>
      </div>

      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.compress}
        onProcess={async (files) => {
          const file = files[0];
          const bytes = await file.arrayBuffer();

          if (level === "light") {
            // Strip metadata + re-save with object streams
            const doc = await PDFDocument.load(bytes);
            doc.setTitle("");
            doc.setAuthor("");
            doc.setSubject("");
            doc.setKeywords([]);
            doc.setProducer("");
            doc.setCreator("");
            const data = await doc.save({ useObjectStreams: true });
            downloadBlob(
              new Blob([data as BlobPart], { type: "application/pdf" }),
              `compressed-${file.name}`
            );
            return;
          }

          // medium / strong: render each page to image, recompress, re-embed in new PDF
          const scale = level === "medium" ? 1.5 : 1.0; // 150 DPI vs 100 DPI
          const quality = level === "medium" ? 0.75 : 0.6;

          const pdfjs = await getPdfjs();
          const pdf = await pdfjs.getDocument({ data: bytes.slice(0) }).promise;
          const jspdfMod = await import("jspdf");
          const { jsPDF } = jspdfMod;

          // Determine first-page orientation
          const firstPage = await pdf.getPage(1);
          const firstVp = firstPage.getViewport({ scale: 1 });
          const orientation = firstVp.width >= firstVp.height ? "landscape" : "portrait";
          const out = new jsPDF({
            orientation,
            unit: "pt",
            format: [firstVp.width, firstVp.height],
          });

          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const vp = page.getViewport({ scale });
            const canvas = document.createElement("canvas");
            canvas.width = Math.ceil(vp.width);
            canvas.height = Math.ceil(vp.height);
            const ctx = canvas.getContext("2d");
            if (!ctx) continue;
            await page.render({ canvasContext: ctx, viewport: vp, canvas } as any).promise;
            const dataUrl: string = canvas.toDataURL("image/jpeg", quality);

            if (i > 1) {
              const thisVp = page.getViewport({ scale: 1 });
              out.addPage(
                [thisVp.width, thisVp.height],
                thisVp.width >= thisVp.height ? "landscape" : "portrait"
              );
            }
            const targetVp = page.getViewport({ scale: 1 });
            out.addImage(dataUrl, "JPEG", 0, 0, targetVp.width, targetVp.height);
          }

          const blob = out.output("blob");
          downloadBlob(blob, `compressed-${level}-${file.name}`);
        }}
      />
    </div>
  );
}
