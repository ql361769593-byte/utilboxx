import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import HomePage from "./[locale]/page";
import type { Locale } from "@/i18n/config";

export default async function RootPage() {
  // 根路径直接渲染默认语言内容，不做 redirect
  // 这样 AdSense 等爬虫在根路径就能直接看到完整页面（含 adsbygoogle.js）
  return <HomePage params={{ locale: defaultLocale as Locale }} />;
}
