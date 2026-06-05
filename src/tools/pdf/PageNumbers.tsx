"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

type Pos = "bottom-center" | "bottom-right" | "bottom-left" | "top-center" | "top-right" | "top-left";

export default function PageNumbers({ dict }: { dict: Dictionary }) {
  const [position, setPosition] = useState<Pos>("bottom-center");
  const [fontSize, setFontSize] = useState(12);
  const [format, setFormat] = useState<"x" | "x-of-y">("x-of-y");

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">Position</label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value as Pos)}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="bottom-center">Bottom Center</option>
            <option value="bottom-right">Bottom Right</option>
            <option value="bottom-left">Bottom Left</option>
            <option value="top-center">Top Center</option>
            <option value="top-right">Top Right</option>
            <option value="top-left">Top Left</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Format</label>
          <select
            value={format}
            onChange={(e) => setFormat(e.target.value as "x" | "x-of-y")}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="x-of-y">Page X of Y</option>
            <option value="x">X only</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium block mb-1">Font size: {fontSize}px</label>
          <input
            type="range"
            min="8"
            max="24"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.pageNumbers}
        onProcess={async (files) => {
          const file = files[0];
          const bytes = await file.arrayBuffer();
          const doc = await PDFDocument.load(bytes);
          const font = await doc.embedFont(StandardFonts.Helvetica);
          const pages = doc.getPages();
          const total = pages.length;
          const margin = 24;
          for (let i = 0; i < total; i++) {
            const page = pages[i];
            const { width, height } = page.getSize();
            const text = format === "x-of-y" ? `Page ${i + 1} of ${total}` : `${i + 1}`;
            const textWidth = font.widthOfTextAtSize(text, fontSize);
            let x = (width - textWidth) / 2;
            let y = margin;
            const isTop = position.startsWith("top");
            if (isTop) y = height - fontSize - margin;
            if (position.endsWith("-right")) x = width - textWidth - margin;
            if (position.endsWith("-left")) x = margin;
            if (position === "bottom-center" || position === "top-center") x = (width - textWidth) / 2;
            page.drawText(text, { x, y, size: fontSize, font, color: rgb(0, 0, 0) });
          }
          const data = await doc.save();
          downloadBlob(
            new Blob([data as BlobPart], { type: "application/pdf" }),
            `numbered-${file.name}`
          );
        }}
      />
    </div>
  );
}
