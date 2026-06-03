"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";

export default function AddWatermarkImage({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("© UtilBoxx");
  const [position, setPosition] = useState<"tl" | "tr" | "bl" | "br" | "center">("br");
  const [opacity, setOpacity] = useState(0.5);
  const [size, setSize] = useState(36);

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium block mb-1">Watermark text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} className="w-full border border-slate-300 rounded px-3 py-2" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium block mb-1">Position</label>
            <select value={position} onChange={(e) => setPosition(e.target.value as any)} className="w-full border border-slate-300 rounded px-3 py-2">
              <option value="tl">Top Left</option>
              <option value="tr">Top Right</option>
              <option value="bl">Bottom Left</option>
              <option value="br">Bottom Right</option>
              <option value="center">Center</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Font size: {size}px</label>
            <input type="range" min="12" max="120" value={size} onChange={(e) => setSize(parseInt(e.target.value))} className="w-full" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">Opacity: {(opacity * 100).toFixed(0)}%</label>
          <input type="range" min="0.1" max="1" step="0.1" value={opacity} onChange={(e) => setOpacity(parseFloat(e.target.value))} className="w-full" />
        </div>
      </div>
      <FileTool
        dict={dict}
        accept="image/*"
        processButtonText={dict.tools.image.addWatermark}
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
          ctx.font = `${size}px sans-serif`;
          ctx.fillStyle = `rgba(255,255,255,${opacity})`;
          ctx.strokeStyle = `rgba(0,0,0,${opacity * 0.5})`;
          ctx.lineWidth = 2;
          const m = ctx.measureText(text);
          const tw = m.width;
          const th = size;
          let x = 20, y = size + 20;
          if (position === "tr") x = img.width - tw - 20;
          if (position === "bl") y = img.height - 20;
          if (position === "br") { x = img.width - tw - 20; y = img.height - 20; }
          if (position === "center") { x = (img.width - tw) / 2; y = (img.height - th) / 2 + th; }
          ctx.strokeText(text, x, y);
          ctx.fillText(text, x, y);
          const blob: Blob = await new Promise((res) => canvas.toBlob((b) => res(b!), "image/png")!);
          downloadBlob(blob, `watermarked-${file.name}`);
          URL.revokeObjectURL(url);
        }}
      />
    </div>
  );
}
