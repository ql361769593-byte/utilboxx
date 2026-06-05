"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

export default function SignPdf({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("John Doe");
  const [fontSize, setFontSize] = useState(28);
  const [color, setColor] = useState("#0000aa");

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium block mb-1">Signature text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border border-slate-300 rounded px-3 py-2"
            placeholder="Type your name"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium block mb-1">Size: {fontSize}px</label>
            <input
              type="range"
              min="14"
              max="60"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-10 border border-slate-300 rounded px-1"
            />
          </div>
        </div>
        <div className="text-xs text-slate-500">
          Signature is placed on every page at bottom-right. For more advanced
          placement, use a desktop tool.
        </div>
      </div>
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.sign}
        onProcess={async (files) => {
          const file = files[0];
          const bytes = await file.arrayBuffer();
          const doc = await PDFDocument.load(bytes);
          const font = await doc.embedFont(StandardFonts.HelveticaBoldOblique);
          const r = parseInt(color.slice(1, 3), 16) / 255;
          const g = parseInt(color.slice(3, 5), 16) / 255;
          const b = parseInt(color.slice(5, 7), 16) / 255;
          for (const page of doc.getPages()) {
            const { width, height } = page.getSize();
            const tw = font.widthOfTextAtSize(text, fontSize);
            page.drawText(text, {
              x: width - tw - 30,
              y: 30,
              size: fontSize,
              font,
              color: rgb(r, g, b),
            });
          }
          const data = await doc.save();
          downloadBlob(
            new Blob([data as BlobPart], { type: "application/pdf" }),
            `signed-${file.name}`
          );
        }}
      />
    </div>
  );
}
