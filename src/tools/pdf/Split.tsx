"use client";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument } from "pdf-lib";

export default function SplitPdf({ dict }: { dict: Dictionary }) {
  return (
    <FileTool
      dict={dict}
      accept="application/pdf"
      processButtonText={dict.tools.pdf.split}
      onProcess={async (files) => {
        const file = files[0];
        const bytes = await file.arrayBuffer();
        const src = await PDFDocument.load(bytes);
        const pageCount = src.getPageCount();
        for (let i = 0; i < pageCount; i++) {
          const out = await PDFDocument.create();
          const [page] = await out.copyPages(src, [i]);
          out.addPage(page);
          const data = await out.save();
          downloadBlob(
            new Blob([data as BlobPart], { type: "application/pdf" }),
            `${file.name.replace(".pdf", "")}-page-${i + 1}.pdf`
          );
        }
      }}
    />
  );
}
