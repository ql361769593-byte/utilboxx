"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument, degrees } from "pdf-lib";

export default function RotatePdf({ dict }: { dict: Dictionary }) {
  const [angle, setAngle] = useState(90);
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-1">Rotation: {angle}°</label>
        <select
          value={angle}
          onChange={(e) => setAngle(parseInt(e.target.value))}
          className="border border-slate-300 rounded px-3 py-2"
        >
          <option value={90}>90°</option>
          <option value={180}>180°</option>
          <option value={270}>270°</option>
        </select>
      </div>
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.rotate}
        onProcess={async (files) => {
          const file = files[0];
          const bytes = await file.arrayBuffer();
          const doc = await PDFDocument.load(bytes);
          const pages = doc.getPages();
          for (const page of pages) {
            const cur = page.getRotation().angle;
            page.setRotation(degrees((cur + angle) % 360));
          }
          const data = await doc.save();
          downloadBlob(
            new Blob([data as BlobPart], { type: "application/pdf" }),
            `rotated-${file.name}`
          );
        }}
      />
    </div>
  );
}
