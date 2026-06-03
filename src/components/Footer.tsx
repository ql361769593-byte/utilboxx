import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">UtilBoxx</h3>
            <p className="text-sm">{dict.site.tagline}</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">{dict.nav.tools}</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href={`/${locale}/tools/pdf`} className="hover:text-white">{dict.tools.category.pdf}</Link></li>
              <li><Link href={`/${locale}/tools/image`} className="hover:text-white">{dict.tools.category.image}</Link></li>
              <li><Link href={`/${locale}/tools/text`} className="hover:text-white">{dict.tools.category.text}</Link></li>
              <li><Link href={`/${locale}/tools/unit`} className="hover:text-white">{dict.tools.category.unit}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">{dict.nav.about}</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href={`/${locale}/about`} className="hover:text-white">{dict.nav.about}</Link></li>
              <li><Link href={`/${locale}/privacy`} className="hover:text-white">{dict.nav.privacy}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm">
          <p>{dict.footer.copyright}</p>
          <p className="text-slate-500 mt-1">{dict.footer.made_with}</p>
        </div>
      </div>
    </footer>
  );
}
