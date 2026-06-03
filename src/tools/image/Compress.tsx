"use client";
import { useState } from "react";
import { FileTool, downloadBlob } from "@/components/FileTool";
import type { Dictionary } from "@/i18n/types";
import imageCompression from "browser-image-compression";

export default function CompressImage({ dict }: { dict: Dictionary }) {
  const [quality, setQuality] = useState(0.7);
  const [maxSize, setMaxSize] = useState(1);
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium block mb-1">
            Quality: {(quality * 100).toFixed(0)}%
          </label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={quality}
            onChange={(e) => setQuality(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">
            Max size: {maxSize}MB
          </label>
          <input
            type="range"
            min="0.1"
            max="5"
            step="0.1"
            value={maxSize}
            onChange={(e) => setMaxSize(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      <FileTool
        dict={dict}
        accept="image/*"
        processButtonText={dict.tools.image.compress}
        onProcess={async (files) => {
          const file = files[0];
          const compressed = await imageCompression(file, {
            maxSizeMB: maxSize,
            initialQuality: quality,
          });
          downloadBlob(compressed, `compressed-${file.name}`);
        }}
      />
    </div>
  );
}
