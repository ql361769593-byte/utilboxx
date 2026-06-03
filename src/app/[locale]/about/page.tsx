import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import Link from "next/link";
import { Sparkles, Globe, Zap, Shield, Heart, Mail } from "lucide-react";

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return { title: dict.nav.about, description: dict.about.intro_p1 };
}

export default async function AboutPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  const a = dict.about;
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        {dict.nav.about}
      </h1>

      <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
        <p className="text-lg">{a.intro_p1}</p>
        <p>{a.intro_p2}</p>
        <p>{a.intro_p3}</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">{a.why_title}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {a.why_items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">{a.mission_title}</h2>
        <p>{a.mission_p1}</p>
        <p>{a.mission_p2}</p>

        <h2 className="text-2xl font-bold text-slate-900 pt-6">{a.tech_title}</h2>
        <p>{a.tech_p1}</p>
        <p>{a.tech_p2}</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8 not-prose">
          <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            {a.contact_title}
          </h3>
          <p className="text-slate-700 mb-4">{a.contact_p1}</p>
          <Link
            href={`/${params.locale}/contact`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg transition"
          >
            {dict.contact.title} →
          </Link>
        </div>
      </div>
    </div>
  );
}
