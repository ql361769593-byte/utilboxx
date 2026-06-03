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
  if (params.locale) {
    if (!locales.includes(params.locale as Locale)) {
      notFound();
    }
    return (
      <html lang={params.locale}>
        <body>
          {children}
          <VercelInsights />
        </body>
      </html>
    );
  }
  return (
    <html>
      <body>
        {children}
        <VercelInsights />
      </body>
    </html>
  );
}
