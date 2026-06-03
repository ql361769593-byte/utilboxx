"use client";
import { useState, useRef } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";

export default function ResizeImage({ dict }: { dict: Dictionary }) {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [keepRatio, setKeepRatio] = useState(true);
  const [origSize, setOrigSize] = useState<{ w: number; h: number } | null>(null);
  const ratioRef = useRef<number | null>(null);

  const setWidthSafe = (w: number) => {
    if (isNaN(w) || w <= 0) return;
    setWidth(w);
    if (keepRatio) {
      const r = ratioRef.current ?? (origSize ? origSize.h / origSize.w : height / width);
      setHeight(Math.round(w * r));
    }
  };
  const setHeightSafe = (h: number) => {
    if (isNaN(h) || h <= 0) return;
    setHeight(h);
    if (keepRatio) {
      const r = ratioRef.current ?? (origSize ? origSize.w / origSize.h : width / height);
      setWidth(Math.round(h * r));
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.width} (px)</label>
          <input
            type="number"
            min="1"
            value={width || ""}
            onChange={(e) => setWidthSafe(parseInt(e.target.value))}
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.height} (px)</label>
          <input
            type="number"
            min="1"
            value={height || ""}
            onChange={(e) => setHeightSafe(parseInt(e.target.value))}
            className="w-full border border-slate-300 rounded px-3 py-2"
          />
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={keepRatio}
          onChange={(e) => {
            const v = e.target.checked;
            setKeepRatio(v);
            if (v && origSize) {
              ratioRef.current = origSize.h / origSize.w;
            }
          }}
        />
        {dict.ui.keep_ratio}
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
          if (!origSize) {
            setOrigSize({ w: img.width, h: img.height });
            ratioRef.current = img.height / img.width;
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) return;
          ctx.drawImage(img, 0, 0, width, height);
          const blob: Blob | null = await new Promise((res) =>
            canvas.toBlob((b) => res(b), "image/png")
          );
          if (blob) downloadBlob(blob, `resized-${file.name}`);
          URL.revokeObjectURL(url);
        }}
      />
    </div>
  );
}
