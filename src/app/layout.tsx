import "@/app/globals.css";
import { locales, type Locale, defaultLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { VercelInsights } from "@/components/VercelInsights";
import type { Metadata, Viewport } from "next";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#667eea",
};

export const metadata: Metadata = {
  // AdSense 验证必须：根 layout metadata 不参与子页 OG/hreflang
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  // 静态导出时，root layout 拿不到子段 params.locale
  // [locale]/layout.tsx 用 <script> 注入 document.documentElement.lang='zh' 等
  // 这里默认 en 即可，根路径就应该是英文
  const lang = "en";

  return (
    <html lang={lang}>
      <head>
        {/* Preconnect to pdfjs CDN (used by 9 PDF tools on demand) */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        {/* RSS feed autodiscovery */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="UtilBoxx Blog"
          href="/feed.xml"
        />
        {/* Google AdSense - must be in <head>, but defer to not block LCP */}
        <script
          async
          // @ts-expect-error fetchPriority is valid HTML but not in React types yet
          fetchPriority="low"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9345131467461923"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <VercelInsights />
      </body>
    </html>
  );
}
