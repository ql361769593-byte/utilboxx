// Blog post registry
// Each post is defined in its own file (post1.ts .. postN.ts) for maintainability.
// Every post has 7 language versions (en, zh, ja, es, pt, fr, de).

export type BlogPost = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  content: string; // Markdown
};

import { mergePdfPost } from "./post1";
import { compressPdfPost } from "./post2";
import { jpgVsPngVsWebp } from "./post3";
import { jsonFormattingPost } from "./post4";
import { metricVsImperialPost } from "./post5";
import { splitPdfPost } from "./post6";
import { rotatePdfPost } from "./post8";
import { reorderPdfPost } from "./post9";
import { extractTextPost } from "./post10";
import { pdfToImagePost } from "./post11";
import { imageToPdfPost } from "./post12";
import { addWatermarkPost } from "./post13";
import { compressPost } from "./post14";
import { resizePost } from "./post15";
import { cropPost } from "./post16";
import { watermarkPost } from "./post17";
import { hexRgbPost } from "./post18";
import { pickerPost } from "./post19";
import { palettePost } from "./post20";
import { celsiusFahrenheitPost } from "./post21";
import { bytesConvertPost } from "./post22";
import { kgToLbsPost } from "./post23";
import { sqftToSqmPost } from "./post24";
import { cubicFeetToLitersPost } from "./post25";
import { mphToKphPost } from "./post26";
import { unixTimestampPost } from "./post27";
import { qrCodePost } from "./post28";
import { unixTimestampsDevPost } from "./post29";
import { strongPasswordsPost } from "./post30";

export const blogPosts: Record<string, Record<string, BlogPost>> = {
  "how-to-merge-pdf-files": mergePdfPost,
  "compress-pdf-without-losing-quality": compressPdfPost,
  "jpg-vs-png-vs-webp": jpgVsPngVsWebp,
  "json-formatting-best-practices": jsonFormattingPost,
  "metric-vs-imperial-conversion": metricVsImperialPost,
  "how-to-split-pdf-files": splitPdfPost,
  "how-to-rotate-pdf-pages": rotatePdfPost,
  "how-to-reorder-pdf-pages": reorderPdfPost,
  "extract-text-from-pdf": extractTextPost,
  "convert-pdf-to-images": pdfToImagePost,
  "convert-images-to-pdf": imageToPdfPost,
  "add-watermark-to-pdf": addWatermarkPost,
  "how-to-compress-images-online": compressPost,
  "how-to-resize-images-without-losing-quality": resizePost,
  "how-to-crop-images-online": cropPost,
  "add-watermark-to-images": watermarkPost,
  "hex-to-rgb-color-conversion": hexRgbPost,
  "how-to-pick-color-from-image": pickerPost,
  "how-to-build-color-palette": palettePost,
  "celsius-to-fahrenheit-conversion": celsiusFahrenheitPost,
  "how-to-convert-bytes-kb-mb-gb": bytesConvertPost,
  "kg-to-lbs-conversion": kgToLbsPost,
  "how-to-convert-square-feet-to-square-meters": sqftToSqmPost,
  "cubic-feet-to-liters-conversion": cubicFeetToLitersPost,
  "mph-to-kph-conversion": mphToKphPost,
  "how-to-convert-unix-timestamp": unixTimestampPost,
  "how-to-generate-qr-code": qrCodePost,
  "understanding-unix-timestamps": unixTimestampsDevPost,
  "how-to-create-strong-passwords": strongPasswordsPost,
};

export const getAllPostSlugs = () => Object.keys(blogPosts);
export const getPost = (slug: string, locale: string) => blogPosts[slug]?.[locale];
export const getAllPostsForLocale = (locale: string) =>
  Object.values(blogPosts)
    .map((p) => p[locale])
    .filter(Boolean);
