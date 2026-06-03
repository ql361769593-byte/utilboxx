"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument, StandardFonts, degrees, rgb } from "pdf-lib";

export default function AddWatermarkPdf({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("CONFIDENTIAL");
  const [opacity, setOpacity] = useState(0.3);
  const [size, setSize] = useState(50);

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.watermark_text}</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium block mb-1">
              {dict.ui.opacity}: {opacity.toFixed(1)}
            </label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.1"
              value={opacity}
              onChange={(e) => setOpacity(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">
              {dict.ui.size}: {size}px
            </label>
            <input
              type="range"
              min="20"
              max="100"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.addWatermark}
        onProcess={async (files) => {
          const file = files[0];
          const bytes = await file.arrayBuffer();
          const doc = await PDFDocument.load(bytes);
          const font = await doc.embedFont(StandardFonts.HelveticaBold);
          const pages = doc.getPages();
          for (const page of pages) {
            const { width, height } = page.getSize();
            page.drawText(text, {
              x: width / 2 - (text.length * size) / 3,
              y: height / 2,
              size,
              font,
              color: rgb(0.5, 0.5, 0.5),
              opacity,
              rotate: degrees(45),
            });
          }
          const data = await doc.save();
          downloadBlob(
            new Blob([data as BlobPart], { type: "application/pdf" }),
            `watermarked-${file.name}`
          );
        }}
      />
    </div>
  );
}
