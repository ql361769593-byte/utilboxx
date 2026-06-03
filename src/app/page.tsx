import { defaultLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import HomePage from "./[locale]/page";

export default async function RootPage() {
  // 根路径直接渲染默认语言内容，不做 redirect
  // 根路径不走 [locale]/layout.tsx，所以这里要自己加 Header/Footer
  const locale = defaultLocale as Locale;
  const dict = await getDictionary(locale);
  return (
    <div lang={locale} className="min-h-screen flex flex-col bg-slate-50">
      <Header locale={locale} dict={dict} />
      <main className="flex-1">
        <HomePage params={{ locale }} />
      </main>
      <Footer locale={locale} dict={dict} />
    </div>
  );
}
