"use client";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { jsPDF } from "jspdf";

export default function ImageToPdf({ dict }: { dict: Dictionary }) {
  return (
    <FileTool
      dict={dict}
      accept="image/*"
      multiple
      processButtonText={dict.tools.pdf.imageToPdf}
      onProcess={async (files) => {
        const pdf = new jsPDF();
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const dataUrl = await new Promise<string>((res) => {
            const r = new FileReader();
            r.onload = () => res(r.result as string);
            r.readAsDataURL(file);
          });
          const img = await new Promise<HTMLImageElement>((res, rej) => {
            const img = new Image();
            img.onload = () => res(img);
            img.onerror = rej;
            img.src = dataUrl;
          });
          const w = pdf.internal.pageSize.getWidth();
          const h = (img.height / img.width) * w;
          if (i > 0) pdf.addPage();
          pdf.addImage(dataUrl, "JPEG", 0, 0, w, h);
        }
        const blob = pdf.output("blob");
        downloadBlob(blob, "images.pdf");
      }}
    />
  );
}
