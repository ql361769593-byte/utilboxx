"use client";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { PDFDocument } from "pdf-lib";

export default function CompressPdf({ dict }: { dict: Dictionary }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">
        ⚠️ {dict.common.process}: removes metadata and re-saves. For deep compression use a server tool.
      </p>
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.compress}
        onProcess={async (files) => {
          const file = files[0];
          const bytes = await file.arrayBuffer();
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
        }}
      />
    </div>
  );
}
