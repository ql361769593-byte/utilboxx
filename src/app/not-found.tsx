import Link from "next/link";
import { Home, Search } from "lucide-react";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

// 404 兜底页（Next.js 找不到路由或 notFound() 时使用）
// SEO: 加 noindex 避免 Google 索引 404 页
export async function generateMetadata({ params }: { params: { locale?: Locale } }) {
  // 静态 metadata 即可（无 locale 段时也兜底）
  return {
    title: "Page Not Found | UtilBoxx",
    robots: { index: false, follow: true },
  };
}

export default async function NotFound({ params }: { params?: { locale?: Locale } }) {
  // 默认 en，避免抛错（404 路径可能没有 locale 段）
  const locale: Locale = (params?.locale as Locale) || "en";
  const dict = await getDictionary(locale);
  const homeHref = locale === "en" ? "/" : `/${locale}`;
  const toolsHref = locale === "en" ? "/tools" : `/${locale}/tools`;
  const homeLabel = dict.nav.home;
  const toolsLabel = dict.nav.tools;

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={homeHref}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            {homeLabel}
          </Link>
          <Link
            href={toolsHref}
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:bg-slate-50 transition"
          >
            <Search className="w-4 h-4" aria-hidden="true" />
            {toolsLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
