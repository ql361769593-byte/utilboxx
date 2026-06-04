/**
 * 输出一个 <head>-级别的内联 <script>，在浏览器解析时立即把
 * <html lang> 改成实际 locale（根 layout 在静态导出时拿不到 [locale] 段 params）。
 *
 * 用法（server component，SSR 输出）：
 *   <SetHtmlLang locale={locale} />
 *
 * SEO 爬虫（Googlebot、Bingbot）执行 JS，所以爬虫看到的就是修正后的 lang。
 * 浏览器用户也是 hydration 前就修正，无 FOUC。
 */
export function SetHtmlLang({ locale }: { locale: string }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang=${JSON.stringify(locale)};`,
      }}
    />
  );
}
