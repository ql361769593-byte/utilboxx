import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function AboutPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        {dict.nav.about}
      </h1>
      <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
        <p className="text-lg">
          <strong>UtilBoxx</strong> — {dict.site.tagline}.
        </p>
        <p>{dict.site.description}</p>
        <h2 className="text-2xl font-bold text-slate-900 pt-4">Why UtilBoxx?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>100% Free — no hidden fees, no premium tiers</li>
          <li>Privacy First — files never leave your browser</li>
          <li>No Signup — start using tools instantly</li>
          <li>Multi-language — supports 7 languages</li>
          <li>Fast — powered by modern web technologies</li>
        </ul>
        <h2 className="text-2xl font-bold text-slate-900 pt-4">Our Mission</h2>
        <p>
          We believe useful tools should be free, fast, and respect user privacy.
          UtilBoxx is built for the global community, with support for multiple
          languages and a focus on user experience.
        </p>
      </div>
    </div>
  );
}
