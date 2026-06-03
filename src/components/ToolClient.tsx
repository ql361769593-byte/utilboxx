"use client";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { defaultDict } from "@/i18n/default-dict";
import { DictContext } from "@/i18n/DictContext";
import { FileTool } from "@/components/FileTool";

const loaders: Record<string, () => Promise<{ default: React.ComponentType<{ dict: Dictionary }> }>> = {
  // PDF
  "pdf/merge": () => import("@/tools/pdf/Merge"),
  "pdf/split": () => import("@/tools/pdf/Split"),
  "pdf/compress": () => import("@/tools/pdf/Compress"),
  "pdf/to-image": () => import("@/tools/pdf/ToImage"),
  "pdf/image-to-pdf": () => import("@/tools/pdf/ImageToPdf"),
  "pdf/add-watermark": () => import("@/tools/pdf/AddWatermark"),
  "pdf/rotate": () => import("@/tools/pdf/Rotate"),
  "pdf/extract-images": () => import("@/tools/pdf/ExtractImages"),
  "pdf/extract-text": () => import("@/tools/pdf/ExtractText"),
  "pdf/reorder": () => import("@/tools/pdf/Reorder"),
  // Image
  "image/compress": () => import("@/tools/image/Compress"),
  "image/resize": () => import("@/tools/image/Resize"),
  "image/crop": () => import("@/tools/image/Crop"),
  "image/convert": () => import("@/tools/image/Convert"),
  "image/add-watermark": () => import("@/tools/image/AddWatermark"),
  // Text
  "text/char-count": () => import("@/tools/text/CharCount"),
  "text/case-convert": () => import("@/tools/text/CaseConvert"),
  "text/duplicate": () => import("@/tools/text/Duplicate"),
  "text/diff": () => import("@/tools/text/Diff"),
  "text/regex": () => import("@/tools/text/Regex"),
  // Unit
  "unit/length": () => import("@/tools/unit/Length"),
  "unit/weight": () => import("@/tools/unit/Weight"),
  "unit/temperature": () => import("@/tools/unit/Temperature"),
  "unit/area": () => import("@/tools/unit/Area"),
  "unit/volume": () => import("@/tools/unit/Volume"),
  "unit/speed": () => import("@/tools/unit/Speed"),
  "unit/data": () => import("@/tools/unit/Data"),
  "unit/time": () => import("@/tools/unit/Time"),
  // Color
  "color/picker": () => import("@/tools/color/Picker"),
  "color/hex-rgb": () => import("@/tools/color/HexRgb"),
  "color/palette": () => import("@/tools/color/Palette"),
  // Crypto
  "crypto/hash": () => import("@/tools/crypto/Hash"),
  "crypto/base64": () => import("@/tools/crypto/Base64"),
  "crypto/url-encode": () => import("@/tools/crypto/UrlEncode"),
  "crypto/uuid": () => import("@/tools/crypto/Uuid"),
  // Dev
  "dev/json-format": () => import("@/tools/dev/JsonFormat"),
  "dev/timestamp": () => import("@/tools/dev/Timestamp"),
  "dev/qrcode": () => import("@/tools/dev/Qrcode"),
  "dev/password": () => import("@/tools/dev/Password"),
};

export function ToolClient({ toolSlug, locale }: { toolSlug: string; locale: Locale }) {
  const [dict, setDict] = useState<Dictionary>(defaultDict);
  const [Comp, setComp] = useState<React.ComponentType<{ dict: Dictionary }> | null>(null);

  useEffect(() => {
    import(`@/i18n/dictionaries/${locale}.json`).then((m) => {
      setDict(m.default as Dictionary);
    });
    const loader = loaders[toolSlug];
    if (loader) {
      loader().then((m) => setComp(() => m.default));
    }
  }, [toolSlug, locale]);

  if (!Comp) {
    return <div className="py-12 text-center text-slate-500">Loading...</div>;
  }
  return (
    <DictContext.Provider value={dict}>
      <Comp dict={dict} />
    </DictContext.Provider>
  );
}
