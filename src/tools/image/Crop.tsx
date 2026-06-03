"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";

export default function CropImage({ dict }: { dict: Dictionary }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [w, setW] = useState(400);
  const [h, setH] = useState(400);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.x}</label>
          <input type="number" value={x} onChange={(e) => setX(parseInt(e.target.value))} className="w-full border border-slate-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.y}</label>
          <input type="number" value={y} onChange={(e) => setY(parseInt(e.target.value))} className="w-full border border-slate-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.width}</label>
          <input type="number" value={w} onChange={(e) => setW(parseInt(e.target.value))} className="w-full border border-slate-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.height}</label>
          <input type="number" value={h} onChange={(e) => setH(parseInt(e.target.value))} className="w-full border border-slate-300 rounded px-3 py-2" />
        </div>
      </div>
      <FileTool
        dict={dict}
        accept="image/*"
        processButtonText={dict.tools.image.crop}
        onProcess={async (files) => {
          const file = files[0];
          const url = URL.createObjectURL(file);
          const img = await new Promise<HTMLImageElement>((res, rej) => {
            const i = new Image();
            i.onload = () => res(i);
            i.onerror = rej;
            i.src = url;
          });
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          if (!ctx) return;
          ctx.drawImage(img, x, y, w, h, 0, 0, w, h);
          const blob: Blob | null = await new Promise((res) =>
            canvas.toBlob((b) => res(b), "image/png")
          );
          if (blob) downloadBlob(blob, `cropped-${file.name}`);
          URL.revokeObjectURL(url);
        }}
      />
    </div>
  );
}
