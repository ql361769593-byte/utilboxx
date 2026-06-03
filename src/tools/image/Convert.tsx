"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";

const formats = ["png", "jpeg", "webp", "bmp"] as const;

export default function ConvertImage({ dict }: { dict: Dictionary }) {
  const [format, setFormat] = useState<typeof formats[number]>("png");
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium block mb-1">Output format</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value as typeof formats[number])}
          className="border border-slate-300 rounded px-3 py-2"
        >
          {formats.map((f) => (
            <option key={f} value={f}>
              {f.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <FileTool
        dict={dict}
        accept="image/*"
        processButtonText={dict.tools.image.convert}
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
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d")!;
          ctx.drawImage(img, 0, 0);
          const mime = format === "jpeg" ? "image/jpeg" : `image/${format}`;
          const blob: Blob = await new Promise((res) =>
            canvas.toBlob((b) => res(b!), mime)!
          );
          const newName = file.name.replace(/\.[^.]+$/, `.${format}`);
          downloadBlob(blob, newName);
          URL.revokeObjectURL(url);
        }}
      />
    </div>
  );
}
