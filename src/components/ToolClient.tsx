"use client";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { defaultDict } from "@/i18n/default-dict";
import { DictContext } from "@/i18n/DictContext";

import enDict from "@/i18n/dictionaries/en.json";
import zhDict from "@/i18n/dictionaries/zh.json";
import jaDict from "@/i18n/dictionaries/ja.json";
import esDict from "@/i18n/dictionaries/es.json";
import ptDict from "@/i18n/dictionaries/pt.json";
import frDict from "@/i18n/dictionaries/fr.json";
import deDict from "@/i18n/dictionaries/de.json";

const dicts: Record<Locale, Dictionary> = {
  en: enDict as Dictionary,
  zh: zhDict as Dictionary,
  ja: jaDict as Dictionary,
  es: esDict as Dictionary,
  pt: ptDict as Dictionary,
  fr: frDict as Dictionary,
  de: deDict as Dictionary,
};

const loaders: Record<string, () => Promise<{ default: React.ComponentType<{ dict: Dictionary }> }>> = {
  "pdf/merge": () => import("@/tools/pdf/Merge"),
  "pdf/split": () => import("@/tools/pdf/Split"),
  "pdf/compress": () => import("@/tools/pdf/Compress"),
  "pdf/to-image": () => import("@/tools/pdf/ToImage"),
  "pdf/image-to-pdf": () => import("@/tools/pdf/ImageToPdf"),
  "pdf/add-watermark": () => import("@/tools/pdf/AddWatermark"),
  "pdf/rotate": () => import("@/tools/pdf/Rotate"),
  "pdf/extract-text": () => import("@/tools/pdf/ExtractText"),
  "pdf/reorder": () => import("@/tools/pdf/Reorder"),
  "image/compress": () => import("@/tools/image/Compress"),
  "image/resize": () => import("@/tools/image/Resize"),
  "image/crop": () => import("@/tools/image/Crop"),
  "image/convert": () => import("@/tools/image/Convert"),
  "image/add-watermark": () => import("@/tools/image/AddWatermark"),
  "text/char-count": () => import("@/tools/text/CharCount"),
  "text/case-convert": () => import("@/tools/text/CaseConvert"),
  "text/duplicate": () => import("@/tools/text/Duplicate"),
  "text/diff": () => import("@/tools/text/Diff"),
  "text/regex": () => import("@/tools/text/Regex"),
  "unit/length": () => import("@/tools/unit/Length"),
  "unit/weight": () => import("@/tools/unit/Weight"),
  "unit/temperature": () => import("@/tools/unit/Temperature"),
  "unit/area": () => import("@/tools/unit/Area"),
  "unit/volume": () => import("@/tools/unit/Volume"),
  "unit/speed": () => import("@/tools/unit/Speed"),
  "unit/data": () => import("@/tools/unit/Data"),
  "unit/time": () => import("@/tools/unit/Time"),
  "color/picker": () => import("@/tools/color/Picker"),
  "color/hex-rgb": () => import("@/tools/color/HexRgb"),
  "color/palette": () => import("@/tools/color/Palette"),
  "crypto/hash": () => import("@/tools/crypto/Hash"),
  "crypto/base64": () => import("@/tools/crypto/Base64"),
  "crypto/url-encode": () => import("@/tools/crypto/UrlEncode"),
  "crypto/uuid": () => import("@/tools/crypto/Uuid"),
  "dev/json-format": () => import("@/tools/dev/JsonFormat"),
  "dev/timestamp": () => import("@/tools/dev/Timestamp"),
  "dev/qrcode": () => import("@/tools/dev/Qrcode"),
  "dev/password": () => import("@/tools/dev/Password"),
};

export function ToolClient({ toolSlug, locale }: { toolSlug: string; locale: Locale }) {
  const [Comp, setComp] = useState<React.ComponentType<{ dict: Dictionary }> | null>(null);
  const [error, setError] = useState<string | null>(null);

  const dict = dicts[locale] || defaultDict;

  useEffect(() => {
    let cancelled = false;
    setComp(null);
    setError(null);
    const loader = loaders[toolSlug];
    if (!loader) {
      setError("Tool not found: " + toolSlug);
      return;
    }
    loader()
      .then((m) => {
        if (!cancelled) setComp(() => m.default);
      })
      .catch((e) => {
        if (!cancelled) setError(String(e));
      });
    return () => {
      cancelled = true;
    };
  }, [toolSlug]);

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }
  if (!Comp) {
    return <div className="py-12 text-center text-slate-500">Loading...</div>;
  }
  return (
    <DictContext.Provider value={dict}>
      <Comp dict={dict} />
    </DictContext.Provider>
  );
}
