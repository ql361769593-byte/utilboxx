"use client";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument } from "pdf-lib";

export default function ReorderPdf({ dict }: { dict: Dictionary }) {
  return (
    <FileTool
      dict={dict}
      accept="application/pdf"
      processButtonText={dict.tools.pdf.reorder}
      onProcess={async (files) => {
        const file = files[0];
        const bytes = await file.arrayBuffer();
        const src = await PDFDocument.load(bytes);
        const out = await PDFDocument.create();
        const indices = src.getPageIndices();
        // 反转顺序作为示例
        const reversed = [...indices].reverse();
        const pages = await out.copyPages(src, reversed);
        pages.forEach((p) => out.addPage(p));
        const data = await out.save();
        downloadBlob(
          new Blob([data as BlobPart], { type: "application/pdf" }),
          `reordered-${file.name}`
        );
      }}
    />
  );
}
