import Link from "next/link";
import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { tools, getToolsByCategory } from "@/i18n/tools";
import { ToolCard } from "@/components/ToolCard";
import { buildPageMetadata } from "@/lib/metadata";

const categoryKeys = ["pdf", "image", "text", "unit", "color", "crypto", "dev"] as const;

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return buildPageMetadata({
    locale: params.locale,
    path: "tools",
    title: `${dict.home.features_title} - ${tools.length} ${dict.ui.tools_count} | ${dict.site.title}`,
    description: `Browse all ${tools.length} free online tools: PDF, image, text, unit converter, color, crypto, and developer tools. No signup, runs in your browser.`,
    keywords: [
      "all online tools",
      "PDF tools",
      "image tools",
      "text tools",
      "unit converter",
      "color tools",
      "crypto tools",
      "developer tools",
    ],
  });
}

export default async function ToolsPage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
        {dict.home.features_title}
      </h1>
      <p className="text-slate-600 mb-8">{tools.length} {dict.ui.tools_count}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {categoryKeys.map((c) => {
          const count = getToolsByCategory(c).length;
          return (
            <Link
              key={c}
              href={`/${params.locale}/tools/${c}`}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition"
            >
              {dict.tools.category[c]} ({count})
            </Link>
          );
        })}
      </div>

      <div className="space-y-12">
        {categoryKeys.map((c) => {
          const catTools = getToolsByCategory(c);
          return (
            <div key={c}>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {dict.tools.category[c]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {catTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} locale={params.locale} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
