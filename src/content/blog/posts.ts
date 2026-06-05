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
import { addPageNumbersPost } from "./post31";
import { signPdfPost } from "./post32";
import { editMetadataPost } from "./post33";
import { headerFooterPost } from "./post34";
import { comparePdfPost } from "./post35";
import { cropPdfPost } from "./post36";
import { rotateImagePost } from "./post37";
import { flipImagePost } from "./post38";
import { imageToBase64Post } from "./post39";
import { removeExifPost } from "./post40";
import { blurImagePost } from "./post41";
import { upscaleImagePost } from "./post42";
import { createMemePost } from "./post43";
import { reverseTextPost } from "./post44";
import { sortLinesPost } from "./post45";
import { loremIpsumPost } from "./post46";
import { markdownPreviewPost } from "./post47";
import { fancyTextPost } from "./post48";
import { rot13Post } from "./post49";
import { pressurePost } from "./post50";
import { energyPost } from "./post51";
import { powerPost } from "./post52";
import { fuelPost } from "./post53";
import { cssGradientPost } from "./post54";
import { contrastCheckerPost } from "./post55";
import { colorMixerPost } from "./post56";
import { namedColorsPost } from "./post57";
import { jwtDecoderPost } from "./post58";
import { hmacGeneratorPost } from "./post59";
import { fileChecksumPost } from "./post60";
import { yamlJsonPost } from "./post61";
import { csvJsonPost } from "./post62";
import { sqlFormatterPost } from "./post63";
import { xmlFormatterPost } from "./post64";

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
  "how-to-add-page-numbers-to-pdf": addPageNumbersPost,
  "how-to-sign-pdf-electronically": signPdfPost,
  "how-to-edit-pdf-metadata": editMetadataPost,
  "how-to-add-header-and-footer-to-pdf": headerFooterPost,
  "how-to-compare-pdf-files": comparePdfPost,
  "how-to-crop-pdf-pages": cropPdfPost,
  "how-to-rotate-images-any-angle": rotateImagePost,
  "how-to-flip-or-mirror-images": flipImagePost,
  "how-to-convert-image-to-base64": imageToBase64Post,
  "how-to-remove-exif-data-from-photos": removeExifPost,
  "how-to-blur-an-image": blurImagePost,
  "how-to-upscale-images-without-losing-quality": upscaleImagePost,
  "how-to-create-memes-online": createMemePost,
  "how-to-reverse-text": reverseTextPost,
  "how-to-sort-text-lines": sortLinesPost,
  "what-is-lorem-ipsum": loremIpsumPost,
  "how-to-preview-markdown": markdownPreviewPost,
  "how-to-use-fancy-text": fancyTextPost,
  "what-is-rot13-cipher": rot13Post,
  "pressure-units-explained": pressurePost,
  "energy-units-explained": energyPost,
  "power-units-explained": powerPost,
  "fuel-economy-mpg-vs-l100km": fuelPost,
  "how-to-create-css-gradient": cssGradientPost,
  "wcag-color-contrast-guide": contrastCheckerPost,
  "how-to-mix-colors": colorMixerPost,
  "css-named-colors-complete-list": namedColorsPost,
  "how-to-decode-jwt-tokens": jwtDecoderPost,
  "how-to-generate-hmac-signatures": hmacGeneratorPost,
  "how-to-compute-file-checksum": fileChecksumPost,
  "yaml-vs-json-comparison": yamlJsonPost,
  "csv-vs-json-comparison": csvJsonPost,
  "how-to-format-sql-queries": sqlFormatterPost,
  "how-to-format-xml-documents": xmlFormatterPost,
};

export const getAllPostSlugs = () => Object.keys(blogPosts);
export const getPost = (slug: string, locale: string) => blogPosts[slug]?.[locale];
export const getAllPostsForLocale = (locale: string) =>
  Object.values(blogPosts)
    .map((p) => p[locale])
    .filter(Boolean);
