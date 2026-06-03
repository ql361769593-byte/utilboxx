import "@/app/globals.css";
import { locales, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";

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
  // 根 layout 只在有 locale 的子页面时包装 <html>
  if (params.locale) {
    if (!locales.includes(params.locale as Locale)) {
      notFound();
    }
    return (
      <html lang={params.locale}>
        <body>{children}</body>
      </html>
    );
  }
  // 根路径直接渲染（会被 redirect 到 /[locale]）
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
