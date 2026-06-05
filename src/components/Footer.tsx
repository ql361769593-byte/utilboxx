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
            <p className="text-sm text-slate-300">{dict.site.tagline}</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">{dict.nav.tools}</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href={`/${locale}/tools/pdf`} className="text-slate-300 hover:text-white hover:underline underline-offset-2">{dict.tools.category.pdf.name}</Link></li>
              <li><Link href={`/${locale}/tools/image`} className="text-slate-300 hover:text-white hover:underline underline-offset-2">{dict.tools.category.image.name}</Link></li>
              <li><Link href={`/${locale}/tools/text`} className="text-slate-300 hover:text-white hover:underline underline-offset-2">{dict.tools.category.text.name}</Link></li>
              <li><Link href={`/${locale}/tools/unit`} className="text-slate-300 hover:text-white hover:underline underline-offset-2">{dict.tools.category.unit.name}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-3">{dict.nav.about}</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href={`/${locale}/about`} className="text-slate-300 hover:text-white hover:underline underline-offset-2">{dict.nav.about}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-slate-300 hover:text-white hover:underline underline-offset-2">{dict.nav.contact}</Link></li>
              <li><Link href={`/${locale}/privacy`} className="text-slate-300 hover:text-white hover:underline underline-offset-2">{dict.nav.privacy}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm">
          <p className="text-slate-300">{dict.footer.copyright}</p>
          <p className="text-slate-400 mt-1">{dict.footer.made_with}</p>
        </div>
      </div>
    </footer>
  );
}
