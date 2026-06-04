import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return buildPageMetadata({
    locale: params.locale,
    path: "privacy",
    title: `Privacy Policy | ${dict.site.title}`,
    description:
      "UtilBoxx privacy policy: no file uploads, no personal data, no tracking. All processing happens in your browser. Your files never touch our servers.",
    keywords: ["privacy policy", "no tracking", "no data collection", "GDPR"],
  });
}

export default async function PrivacyPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
        {dict.nav.privacy}
      </h1>
      <div className="prose prose-slate max-w-none space-y-4 text-slate-700">
        <p>
          <strong>Last updated:</strong> January 2026
        </p>
        <h2 className="text-2xl font-bold text-slate-900 pt-4">Overview</h2>
        <p>
          UtilBoxx is committed to protecting your privacy. This page explains
          what data we collect (or rather, what we don't collect).
        </p>
        <h2 className="text-2xl font-bold text-slate-900 pt-4">Data We Don't Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>No file uploads:</strong> All file processing happens
            entirely in your browser. Your files never touch our servers.
          </li>
          <li>
            <strong>No personal data:</strong> We don't require accounts,
            emails, or any personal information.
          </li>
          <li>
            <strong>No tracking pixels:</strong> We don't track your activity
            across other sites.
          </li>
        </ul>
        <h2 className="text-2xl font-bold text-slate-900 pt-4">Cookies and Analytics</h2>
        <p>
          We may use privacy-friendly analytics (such as Plausible or Umami)
          to understand aggregate traffic patterns. No personally identifiable
          information is collected.
        </p>
        <h2 className="text-2xl font-bold text-slate-900 pt-4">Advertising</h2>
        <p>
          We may display third-party advertisements (such as Google AdSense).
          These providers may use cookies to serve relevant ads. You can opt
          out via your browser's privacy settings.
        </p>
        <h2 className="text-2xl font-bold text-slate-900 pt-4">Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us
          through the methods listed on our website.
        </p>
      </div>
    </div>
  );
}
