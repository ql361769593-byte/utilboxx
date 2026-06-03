import type { Dictionary } from "./types";

export const defaultDict: Dictionary = {
  site: {
    title: "UtilBoxx - Free Online Tools",
    description: "Free online tools.",
    keywords: "online tools, free tools",
    tagline: "All the tools you need, in one place",
  },
  nav: { home: "Home", tools: "Tools", about: "About", privacy: "Privacy" },
  home: {
    hero_title: "Free Online Tools for Everyone",
    hero_subtitle: "PDF, image, text, units, color, and developer tools.",
    features_title: "All Tools",
    features_subtitle: "Choose from our growing collection",
    cta: "Start Using",
    categories: [
      { title: "PDF Tools", description: "Merge, split, compress" },
      { title: "Image Tools", description: "Compress, resize" },
      { title: "Text Tools", description: "Count, format" },
      { title: "Unit Converters", description: "Length, weight" },
      { title: "Color Tools", description: "Pick, convert" },
      { title: "Crypto Tools", description: "Hash, encode" },
      { title: "Developer Tools", description: "JSON, timestamp" },
    ],
  },
  tools: {
    category: { pdf: "PDF", image: "Image", text: "Text", unit: "Unit", color: "Color", crypto: "Crypto", dev: "Dev" },
    pdf: { merge: "Merge", split: "Split", compress: "Compress", toImage: "To Image", imageToPdf: "Image to PDF", addWatermark: "Watermark", rotate: "Rotate", extractImages: "Extract Images", extractText: "Extract Text", reorder: "Reorder" },
    image: { compress: "Compress", resize: "Resize", crop: "Crop", convert: "Convert", addWatermark: "Watermark" },
    text: { charCount: "Char Count", caseConvert: "Case", duplicate: "Dedupe", diff: "Diff", regex: "Regex" },
    unit: { length: "Length", weight: "Weight", temperature: "Temperature", area: "Area", volume: "Volume", speed: "Speed", data: "Data", time: "Time" },
    color: { picker: "Picker", hexToRgb: "HEX/RGB", palette: "Palette" },
    crypto: { hash: "Hash", base64: "Base64", urlEncode: "URL", uuid: "UUID" },
    dev: { jsonFormat: "JSON", timestamp: "Timestamp", qrcode: "QR", password: "Password" },
  },
  common: { upload: "Upload", download: "Download", process: "Process", reset: "Reset", copy: "Copy", copied: "Copied!", input: "Input", output: "Output", result: "Result", options: "Options", error: "Error", success: "Success", loading: "Loading..." },
  ui: { choose_file: "Choose file", drop_file_here: "Drop file here", or: "or", paste_text: "Paste text here", type_text: "Type or paste text", select_option: "Select option" },
  footer: { copyright: "© 2026 UtilBoxx", made_with: "Made with care" },
};
