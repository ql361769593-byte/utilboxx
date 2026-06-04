import "@/app/globals.css";
import { locales, type Locale, defaultLocale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { VercelInsights } from "@/components/VercelInsights";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  // 静态导出时，root layout 拿不到子段 params.locale（子段是独立的 [locale] 段）
  // [locale]/layout.tsx 会用 <script> 在 hydration 前修正 document.documentElement.lang
  // 这里默认 en 即可，根路径就应该是英文
  const lang = "en";

  return (
    <html lang={lang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
        {/* Favicon + Apple touch icon (Next.js 14 auto-generates from src/app/icon.svg, src/app/apple-icon.svg) */}
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {/* Google AdSense - must be in <head> */}
        <script
          async
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
