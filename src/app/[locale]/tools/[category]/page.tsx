import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getToolsByCategory } from "@/i18n/tools";
import { ToolCard } from "@/components/ToolCard";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";

const categoryKeys = ["pdf", "image", "text", "unit", "color", "crypto", "dev"] as const;

export function generateStaticParams() {
  return categoryKeys.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; category: string };
}): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  const cat = dict.tools.category[params.category as keyof typeof dict.tools.category];
  const count = getToolsByCategory(params.category as (typeof categoryKeys)[number]).length;
  return buildPageMetadata({
    locale: params.locale,
    path: `tools/${params.category}`,
    title: `${cat} - ${count} Free ${cat} Online | ${dict.site.title}`,
    description: `${count} free ${cat.toLowerCase()} tools. No signup, runs in your browser, all ${cat.toLowerCase()} processing happens client-side for privacy.`,
    keywords: [
      cat.toLowerCase(),
      "free",
      "online",
      "tools",
      "no signup",
      "browser-based",
    ],
  });
}

export default async function CategoryPage({
  params,
}: {
  params: { locale: Locale; category: string };
}) {
  const dict = await getDictionary(params.locale);
  const cat = params.category as (typeof categoryKeys)[number];
  const catTools = getToolsByCategory(cat);
  const catName = dict.tools.category[cat];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-slate-600 mb-4">
        <Link href={`/${params.locale}`} className="hover:text-blue-600">{dict.nav.home}</Link>
        {" / "}
        <Link href={`/${params.locale}/tools`} className="hover:text-blue-600">{dict.nav.tools}</Link>
        {" / "}
        <span>{catName}</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{catName}</h1>
      <p className="text-slate-600 mb-8">{catTools.length} {dict.ui.tools_count}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {catTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} locale={params.locale} />
        ))}
      </div>
    </div>
  );
}
