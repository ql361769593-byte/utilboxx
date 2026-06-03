"use client";
import { useState } from "react";
import { FileTool } from "@/components/FileTool";
import { CopyButton } from "@/components/UI";
import type { Dictionary } from "@/i18n/types";

export default function ExtractText({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("");
  return (
    <div className="space-y-4">
      <FileTool
        dict={dict}
        accept="application/pdf"
        processButtonText={dict.tools.pdf.extractText}
        onProcess={async (files) => {
          const file = files[0];
          const pdfjs = await import("pdfjs-dist");
          // @ts-expect-error - worker
          pdfjs.GlobalWorkerOptions.workerSrc = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
          const bytes = await file.arrayBuffer();
          const pdf = await pdfjs.getDocument({ data: bytes }).promise;
          let out = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const tc = await page.getTextContent();
            out +=
              "=== Page " +
              i +
              " ===\n" +
              tc.items.map((it: any) => it.str).join(" ") +
              "\n\n";
          }
          setText(out);
        }}
      />
      {text && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">{dict.common.result}</h3>
            <CopyButton text={text} dict={dict} />
          </div>
          <textarea
            value={text}
            readOnly
            rows={12}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg font-mono text-sm"
          />
        </div>
      )}
    </div>
  );
}
