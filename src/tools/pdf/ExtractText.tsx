"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";
import { getPdfjs } from "./pdfjs-loader";

export default function ExtractText({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");

  return (
    <div className="space-y-4">
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.extractText}
        onProcess={async (files) => {
          const file = files[0];
          setFileName(file.name);
          const pdfjs = await getPdfjs();
          const bytes = await file.arrayBuffer();
          const pdf = await pdfjs.getDocument({ data: bytes }).promise;
          let out = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const tc = await page.getTextContent();
            const pageText = (tc.items as any[])
              .map((it) => (it.str || "").trim())
              .filter(Boolean)
              .join(" ");
            out += `=== Page ${i} ===\n${pageText}\n\n`;
          }
          setText(out);
        }}
      />
      {text && (
        <div className="space-y-2">
          <div className="flex justify-between items-center flex-wrap gap-2">
            <h3 className="font-semibold">{dict.common.result}</h3>
            <div className="flex gap-2">
              <CopyButton text={text} dict={dict} />
              <button
                type="button"
                onClick={() => {
                  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
                  const baseName = fileName.replace(/\.pdf$/i, "") || "extracted";
                  downloadBlob(blob, `${baseName}.txt`);
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded"
              >
                {dict.ui.download_txt || "Download .txt"}
              </button>
            </div>
          </div>
          <textarea
            value={text}
            readOnly
            rows={12}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg font-mono text-sm"
          />
          <p className="text-xs text-slate-500">
            {text.split(/\s+/).filter(Boolean).length} {dict.ui.words || "words"} ·{" "}
            {text.length} {dict.ui.characters || "characters"}
          </p>
        </div>
      )}
    </div>
  );
}
