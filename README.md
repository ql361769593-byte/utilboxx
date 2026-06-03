# UtilBoxx

> Free Online Tools — 40 tools, 7 languages, 100% client-side processing

A complete static-first Next.js 14 application providing free online tools across 7 categories: PDF, Image, Text, Unit, Color, Crypto, and Developer tools. Supports 7 languages with full i18n.

## Features

- **40 Tools** across 7 categories
- **7 Languages**: English, 中文, 日本語, Español, Português, Français, Deutsch
- **Privacy-first**: All file processing happens in the browser, no uploads
- **Static-generated**: 356 pre-rendered pages, deploys to any static host
- **SEO optimized**: sitemap.xml, robots.txt, per-page metadata
- **Zero server cost**: Deploy to Vercel free tier

## Categories

- **PDF Tools** (10): Merge, Split, Compress, To Image, Image to PDF, Watermark, Rotate, Extract Images, Extract Text, Reorder
- **Image Tools** (5): Compress, Resize, Crop, Convert, Watermark
- **Text Tools** (5): Character Count, Case Converter, Remove Duplicates, Text Diff, Regex Tester
- **Unit Converters** (8): Length, Weight, Temperature, Area, Volume, Speed, Data, Time
- **Color Tools** (3): Color Picker, HEX/RGB Converter, Palette Generator
- **Crypto Tools** (4): Hash Generator, Base64, URL Encode/Decode, UUID
- **Developer Tools** (4): JSON Formatter, Timestamp Converter, QR Code, Password Generator

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- pdf-lib, pdfjs-dist (PDF processing)
- browser-image-compression, jsPDF, canvas API (image processing)
- qrcode, uuid (utility)
- lucide-react (icons)

## Getting Started

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # production server
```

## Project Structure

```
src/
  app/
    [locale]/                   # i18n routing
      page.tsx                  # Home
      about/page.tsx
      privacy/page.tsx
      tools/
        page.tsx                # All tools
        [category]/
          page.tsx              # Category listing
          [slug]/page.tsx       # Tool page
    layout.tsx                  # Root layout
    globals.css
    sitemap.ts
    robots.ts
  components/
    Header.tsx
    Footer.tsx
    ToolCard.tsx
    ToolClient.tsx              # Dynamic tool loader
    FileTool.tsx                # File upload UI
    UI.tsx                      # Copy button, textarea
  i18n/
    config.ts
    dictionaries/               # 7 language JSON files
    types.ts
    default-dict.ts
    DictContext.tsx
    tools.ts                    # Tool metadata
  tools/
    pdf/      image/      text/
    unit/     color/      crypto/      dev/
DEPLOY.md                       # Deployment guide
```

## Deployment

See `DEPLOY.md` for full instructions. Quickest path: Vercel.

## License

MIT
