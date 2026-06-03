import Link from "next/link";
import { type Locale, localeFlags, locales } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { Wrench } from "lucide-react";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">UtilBoxx</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
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
              href={`/${locale}/about`}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
            >
              {dict.nav.about}
            </Link>
          </nav>

          <div className="flex items-center gap-1">
            {locales.map((l) => (
              <Link
                key={l}
                href={`/${l}`}
                title={l}
                className={`px-2 py-1 rounded text-sm hover:bg-slate-100 transition ${
                  l === locale ? "bg-slate-100" : ""
                }`}
              >
                {localeFlags[l]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
