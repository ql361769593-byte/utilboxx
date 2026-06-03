"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, localeFlags, locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Wrench, Menu, X } from "lucide-react";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname() || `/${locale}`;

  // 把当前路径的 locale 段替换成新 locale
  // pathname 形如 /en/tools/pdf/merge，locale 段在第 1 个
  const switchLocale = (newLocale: Locale): string => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return `/${newLocale}`;
    // 第一个 segment 可能是 locale
    if (locales.includes(segments[0] as Locale)) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    return "/" + segments.join("/");
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">
          {/* 左：Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">UtilBoxx</span>
            </Link>
          </div>

          {/* 中：主导航（居中）*/}
          <nav className="hidden md:flex items-center justify-center gap-8">
            <Link
              href={`/${locale}`}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
            >
              {dict.nav.home}
            </Link>
            <Link
              href={`/${locale}/tools`}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
            >
              {dict.nav.tools}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
            >
              {dict.blog.title}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
            >
              {dict.nav.about}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
            >
              {dict.nav.contact}
            </Link>
          </nav>

          {/* 右：语言切换 + 移动端菜单按钮 */}
          <div className="flex items-center justify-end gap-1">
            <div className="hidden sm:flex items-center gap-1">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchLocale(l)}
                  title={l}
                  className={`px-2 py-1 rounded text-sm hover:bg-slate-100 transition ${
                    l === locale ? "bg-slate-100" : ""
                  }`}
                >
                  {localeFlags[l]}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 py-3 space-y-2">
            <Link
              href={`/${locale}`}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {dict.nav.home}
            </Link>
            <Link
              href={`/${locale}/tools`}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {dict.nav.tools}
            </Link>
            <Link
              href={`/${locale}/blog`}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {dict.blog.title}
            </Link>
            <Link
              href={`/${locale}/about`}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {dict.nav.about}
            </Link>
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {dict.nav.contact}
            </Link>
            <div className="flex items-center gap-1 px-3 pt-2 border-t border-slate-100">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchLocale(l)}
                  onClick={() => setMobileOpen(false)}
                  className={`px-2 py-1 rounded text-sm hover:bg-slate-100 ${
                    l === locale ? "bg-slate-100" : ""
                  }`}
                >
                  {localeFlags[l]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
