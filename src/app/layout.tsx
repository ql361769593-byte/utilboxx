import "@/app/globals.css";
import { locales, type Locale } from "@/i18n/config";
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
  const lang = params.locale && locales.includes(params.locale as Locale) ? params.locale : "en";

  return (
    <html lang={lang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#667eea" />
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
