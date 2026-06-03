"use client";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument } from "pdf-lib";

export default function MergePdf({ dict }: { dict: Dictionary }) {
  return (
    <FileTool
      dict={dict}
      accept="application/pdf"
      multiple
      processButtonText={dict.tools.pdf.merge}
      onProcess={async (files) => {
        const merged = await PDFDocument.create();
        for (const f of files) {
          const bytes = await f.arrayBuffer();
          const doc = await PDFDocument.load(bytes);
          const pages = await merged.copyPages(doc, doc.getPageIndices());
          pages.forEach((p) => merged.addPage(p));
        }
        const out = await merged.save();
        downloadBlob(new Blob([out as BlobPart], { type: "application/pdf" }), "merged.pdf");
      }}
    />
  );
}
