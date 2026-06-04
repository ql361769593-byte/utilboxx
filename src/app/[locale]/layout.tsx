import "@/app/globals.css";
import { locales, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/i18n/dictionaries";
import { locales as allLocales } from "@/i18n/config";
import { SetHtmlLang as LangAttribute } from "@/components/SetHtmlLang";

export async function generateStaticParams() {
  return allLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  // OG locale:alternates 7 语言 + x-default
  const ogAlternates: Record<string, string> = {};
  for (const l of allLocales) {
    ogAlternates[l] = dict.site.title;  // 用同名 title 即可（OG 协议要求）
  }
  return {
    // No template — pages will set their own absolute title to avoid "Foo | UtilBoxx | UtilBoxx" duplication
    title: dict.site.title,
    description: dict.site.description,
    keywords: dict.site.keywords,
    openGraph: {
      title: dict.site.title,
      description: dict.site.description,
      type: "website",
      locale: params.locale,
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }
  const dict = await getDictionary(locale as Locale);
  return (
    <>
      {/* 在 hydration 前就修正 <html lang>（根 layout 在静态导出时拿不到 [locale] 段） */}
      <LangAttribute locale={locale} />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header locale={locale as Locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale as Locale} dict={dict} />
      </div>
    </>
  );
}
