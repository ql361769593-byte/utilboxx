import { defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HomePage from "./[locale]/page";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

// 根路径 metadata：和 /en 完全一致（content 一致，应指向同一 canonical）
export async function generateMetadata(): Promise<Metadata> {
  const locale = defaultLocale as Locale;
  const dict = await getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "", // 根路径 canonical = /en
    title: dict.home.hero_title,
    description: dict.home.hero_subtitle,
    keywords: [
      "free online tools",
      "PDF tools",
      "image tools",
      "text tools",
      "unit converter",
      "color picker",
      "developer tools",
      "no signup",
    ],
  });
}

export default async function RootPage() {
  // 根路径直接渲染默认语言内容，不做 redirect
  // 根路径不走 [locale]/layout.tsx，所以这里要自己加 Header/Footer
  // 但子组件 HomePage 的 generateMetadata 在根路径下不会触发（它期待 params.locale），
  // 所以根路径 metadata 必须在 RootPage 里手动设置
  const locale = defaultLocale as Locale;
  const dict = await getDictionary(locale);
  return (
    <>
      {/* 跟 [locale] layout 一样：hydration 前修正 lang */}
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)};`,
        }}
      />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header locale={locale} dict={dict} />
        <main className="flex-1">
          <HomePage params={{ locale }} />
        </main>
        <Footer locale={locale} dict={dict} />
      </div>
    </>
  );
}
