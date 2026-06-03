"use client";
import { useState, useRef, useEffect } from "react";
import { TextArea } from "@/components/UI";
import { downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import QRCode from "qrcode";

export default function Qrcode({ dict }: { dict: Dictionary }) {
  const [text, setText] = useState("https://utilboxx.com");
  const [size, setSize] = useState(256);
  const [fg, setFg] = useState("#000000");
  const [bg, setBg] = useState("#FFFFFF");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!text) {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }
    QRCode.toCanvas(canvas, text, {
      width: size,
      margin: 2,
      color: { dark: fg, light: bg },
      errorCorrectionLevel: "M",
    }).catch(() => {});
  }, [text, size, fg, bg]);

  const download = () => {
    if (!canvasRef.current) return;
    canvasRef.current.toBlob((b) => {
      if (b) downloadBlob(b, "qrcode.png");
    });
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.foreground}</label>
          <input type="color" value={fg} onChange={(e) => setFg(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">{dict.ui.background}</label>
          <input type="color" value={bg} onChange={(e) => setBg(e.target.value)} className="w-full h-10 rounded cursor-pointer" />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium block mb-1">
          {dict.ui.size}: {size}px
        </label>
        <input type="range" min="128" max="512" step="32" value={size} onChange={(e) => setSize(parseInt(e.target.value))} className="w-full" />
      </div>
      <TextArea value={text} onChange={setText} rows={3} />
      <div className="flex flex-col items-center gap-3 bg-slate-50 rounded-lg p-6">
        <canvas ref={canvasRef} />
        <button type="button" onClick={download} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg">
          {dict.common.download} PNG
        </button>
      </div>
    </div>
  );
}
