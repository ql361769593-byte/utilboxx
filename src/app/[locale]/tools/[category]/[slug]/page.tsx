import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getToolBySlug } from "@/i18n/tools";
import { notFound } from "next/navigation";
import { tools } from "@/i18n/tools";

export function generateStaticParams() {
  return tools.map((t) => ({ category: t.category, slug: t.slug.split("/")[1] }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; category: string; slug: string };
}) {
  const tool = getToolBySlug(`${params.category}/${params.slug}`);
  if (!tool) return {};
  return { title: tool.name[params.locale], description: tool.description[params.locale] };
}

export default async function ToolPage({
  params,
}: {
  params: { locale: Locale; category: string; slug: string };
}) {
  const tool = getToolBySlug(`${params.category}/${params.slug}`);
  if (!tool) notFound();
  const dict = await getDictionary(params.locale);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <nav className="text-sm text-slate-600 mb-4">
        <Link href={`/${params.locale}`} className="hover:text-blue-600">{dict.nav.home}</Link>
        {" / "}
        <Link href={`/${params.locale}/tools`} className="hover:text-blue-600">{dict.nav.tools}</Link>
        {" / "}
        <Link href={`/${params.locale}/tools/${params.category}`} className="hover:text-blue-600">
          {dict.tools.category[params.category as keyof typeof dict.tools.category]}
        </Link>
        {" / "}
        <span>{tool.name[params.locale]}</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
        {tool.name[params.locale]}
      </h1>
      <p className="text-slate-600 mb-6">{tool.description[params.locale]}</p>

      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <ToolClient toolSlug={tool.slug} locale={params.locale} />
      </div>
    </div>
  );
}

import { ToolClient } from "@/components/ToolClient";
