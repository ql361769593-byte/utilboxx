"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import { jsPDF } from "jspdf";

type PageSize = "fit" | "a4" | "letter";

export default function ImageToPdf({ dict }: { dict: Dictionary }) {
  const [pageSize, setPageSize] = useState<PageSize>("a4");
  const [orientation, setOrientation] = useState<"p" | "l">("p");

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">
            {dict.ui.page_size || "Page size"}
          </label>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(e.target.value as PageSize)}
            className="w-full border border-slate-300 rounded px-3 py-2"
          >
            <option value="a4">A4 (210 × 297 mm)</option>
            <option value="letter">Letter (216 × 279 mm)</option>
            <option value="fit">{dict.ui.page_fit || "Fit to image"}</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">
            {dict.ui.orientation || "Orientation"}
          </label>
          <select
            value={orientation}
            onChange={(e) => setOrientation(e.target.value as "p" | "l")}
            disabled={pageSize === "fit"}
            className="w-full border border-slate-300 rounded px-3 py-2 disabled:opacity-50"
          >
            <option value="p">{dict.ui.portrait || "Portrait"}</option>
            <option value="l">{dict.ui.landscape || "Landscape"}</option>
          </select>
        </div>
      </div>

      <FileTool
        dict={dict}
        accept="image/*"
        multiple
        processButtonText={dict.tools.pdf.imageToPdf}
        onProcess={async (files) => {
          let pdf: jsPDF | null = null;

          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const dataUrl: string = await new Promise((res, rej) => {
              const r = new FileReader();
              r.onload = () => res(r.result as string);
              r.onerror = rej;
              r.readAsDataURL(file);
            });

            const img = await new Promise<HTMLImageElement>((res, rej) => {
              const im = new Image();
              im.onload = () => res(im);
              im.onerror = rej;
              im.src = dataUrl;
            });

            // Use the actual image format. jsPDF natively supports JPEG and PNG.
            const fmt: "PNG" | "JPEG" = file.type === "image/png" ? "PNG" : "JPEG";

            if (i === 0) {
              if (pageSize === "fit") {
                // Pixel-accurate: each image becomes a page matching its pixel size
                pdf = new jsPDF({
                  orientation: img.width >= img.height ? "l" : "p",
                  unit: "px",
                  format: [img.width, img.height],
                });
              } else {
                pdf = new jsPDF({
                  orientation,
                  unit: "mm",
                  format: pageSize,
                });
              }
            } else {
              if (pageSize === "fit") {
                pdf!.addPage([img.width, img.height], img.width >= img.height ? "l" : "p");
              } else {
                pdf!.addPage(pageSize, orientation);
              }
            }

            if (pageSize === "fit") {
              // Full-bleed in pixel units
              pdf!.addImage(dataUrl, fmt, 0, 0, img.width, img.height);
            } else {
              // Fit-with-margin in mm units. Keep aspect ratio; center.
              const pageW = pdf!.internal.pageSize.getWidth();
              const pageH = pdf!.internal.pageSize.getHeight();
              const margin = 10; // mm
              const maxW = pageW - margin * 2;
              const maxH = pageH - margin * 2;
              const ratio = Math.min(maxW / (img.width * 0.264583), maxH / (img.height * 0.264583));
              // img.width is in px; convert px to mm: 1 inch = 25.4 mm = 96 px, so 1 px = 0.264583 mm
              const drawWmm = img.width * 0.264583 * ratio;
              const drawHmm = img.height * 0.264583 * ratio;
              const x = (pageW - drawWmm) / 2;
              const y = (pageH - drawHmm) / 2;
              pdf!.addImage(dataUrl, fmt, x, y, drawWmm, drawHmm);
            }
          }

          const blob = pdf!.output("blob");
          downloadBlob(blob, "images.pdf");
        }}
      />
    </div>
  );
}
