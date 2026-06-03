"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";

export default function ResizeImage({ dict }: { dict: Dictionary }) {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [keepRatio, setKeepRatio] = useState(true);
  const [origSize, setOrigSize] = useState<{ w: number; h: number } | null>(null);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">Width (px)</label>
          <input
            type="number"
            value={width}
            onChange={(e) => {
              const w = parseInt(e.target.value);
              setWidth(w);
              if (keepRatio && origSize)
                setHeight(Math.round((w / origSize.w) * origSize.h));
            }}
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Height (px)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => {
              const h = parseInt(e.target.value);
              setHeight(h);
              if (keepRatio && origSize)
                setWidth(Math.round((h / origSize.h) * origSize.w));
            }}
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={keepRatio}
          onChange={(e) => setKeepRatio(e.target.checked)}
        />
        Keep aspect ratio
      </label>
      <FileTool
        dict={dict}
        accept="image/*"
        processButtonText={dict.tools.image.resize}
        onProcess={async (files) => {
          const file = files[0];
          const url = URL.createObjectURL(file);
          const img = await new Promise<HTMLImageElement>((res, rej) => {
            const i = new Image();
            i.onload = () => res(i);
            i.onerror = rej;
            i.src = url;
          });
          if (!origSize) setOrigSize({ w: img.width, h: img.height });
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d")!;
          ctx.drawImage(img, 0, 0, width, height);
          const blob: Blob = await new Promise((res) =>
            canvas.toBlob((b) => res(b!), "image/png")!
          );
          downloadBlob(blob, `resized-${file.name}`);
          URL.revokeObjectURL(url);
        }}
      />
    </div>
  );
}
