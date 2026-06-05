"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export default function HeaderFooter({ dict }: { dict: Dictionary }) {
  const [header, setHeader] = useState("");
  const [footer, setFooter] = useState("");
  const [includePageNum, setIncludePageNum] = useState(true);
  const [fontSize, setFontSize] = useState(10);

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium block mb-1">Header text</label>
          <input
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
            placeholder="Leave empty for none"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Footer text</label>
          <input
            value={footer}
            onChange={(e) => setFooter(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
            placeholder="Leave empty for none"
          />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <input
            id="pn"
            type="checkbox"
            checked={includePageNum}
            onChange={(e) => setIncludePageNum(e.target.checked)}
          />
          <label htmlFor="pn">Include page numbers in footer (Page X of Y)</label>
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Font size: {fontSize}px</label>
          <input
            type="range"
            min="8"
            max="18"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.headerFooter}
        onProcess={async (files) => {
          const file = files[0];
          const bytes = await file.arrayBuffer();
          const doc = await PDFDocument.load(bytes);
          const font = await doc.embedFont(StandardFonts.Helvetica);
          const pages = doc.getPages();
          const total = pages.length;
          const margin = 20;
          for (let i = 0; i < total; i++) {
            const page = pages[i];
            const { width, height } = page.getSize();
            if (header) {
              const tw = font.widthOfTextAtSize(header, fontSize);
              page.drawText(header, {
                x: (width - tw) / 2,
                y: height - fontSize - margin / 2,
                size: fontSize,
                font,
                color: rgb(0.2, 0.2, 0.2),
              });
            }
            const footerText = includePageNum
              ? `${footer}${footer ? " — " : ""}Page ${i + 1} of ${total}`
              : footer;
            if (footerText) {
              const tw = font.widthOfTextAtSize(footerText, fontSize);
              page.drawText(footerText, {
                x: (width - tw) / 2,
                y: margin / 2,
                size: fontSize,
                font,
                color: rgb(0.2, 0.2, 0.2),
              });
            }
          }
          const data = await doc.save();
          downloadBlob(
            new Blob([data as BlobPart], { type: "application/pdf" }),
            `headerfooter-${file.name}`
          );
        }}
      />
    </div>
  );
}
