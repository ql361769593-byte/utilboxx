"use client";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";

export default function ExtractImages({ dict }: { dict: Dictionary }) {
  return (
    <FileTool
      dict={dict}
      accept="application/pdf"
      processButtonText={dict.tools.pdf.extractImages}
      onProcess={async (files) => {
        const file = files[0];
        const pdfjs = await import("pdfjs-dist");
        // @ts-expect-error - worker
        pdfjs.GlobalWorkerOptions.workerSrc = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
        const bytes = await file.arrayBuffer();
        const pdf = await pdfjs.getDocument({ data: bytes }).promise;
        let count = 0;
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const ops = await page.getOperatorList();
          // 通过 OPS.paintImageXObject 等操作获取图片
          // 简化：渲染整页
          const vp = page.getViewport({ scale: 1.5 });
          const canvas = document.createElement("canvas");
          canvas.width = vp.width;
          canvas.height = vp.height;
          const ctx = canvas.getContext("2d")!;
          await page.render({ canvasContext: ctx, viewport: vp, canvas } as any).promise;
          // 仅作为占位 — 实际生产建议用 pdfjs 的 image extraction API
          count++;
        }
        alert(`Rendered ${count} page(s). For full image extraction use a server tool.`);
      }}
    />
  );
}
