import Link from "next/link";
import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getToolBySlug, tools } from "@/i18n/tools";
import { notFound } from "next/navigation";
import { ToolClient } from "@/components/ToolClient";
import { buildPageMetadata, SITE_NAME } from "@/lib/metadata";

export function generateStaticParams() {
  return tools.map((t) => ({ category: t.category, slug: t.slug.split("/")[1] }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; category: string; slug: string };
}): Promise<Metadata> {
  const tool = getToolBySlug(`${params.category}/${params.slug}`);
  if (!tool) return {};
  const dict = await getDictionary(params.locale);
  const name = tool.name[params.locale];
  const description = tool.description[params.locale];
  return buildPageMetadata({
    locale: params.locale,
    path: `tools/${params.category}/${params.slug}`,
    title: `${name} - Free Online ${dict.tools.category[params.category as keyof typeof dict.tools.category]} | ${dict.site.title}`,
    description: `${description} Free, fast, no signup, runs in your browser.`,
    keywords: [
      name.toLowerCase(),
      "free",
      "online",
      ...tool.name[params.locale].toLowerCase().split(/\s+/),
      ...dict.tools.category[params.category as keyof typeof dict.tools.category].toLowerCase().split(/\s+/),
    ],
  });
}

export default async function ToolPage({
  params,
}: {
  params: { locale: Locale; category: string; slug: string };
}) {
  const tool = getToolBySlug(`${params.category}/${params.slug}`);
  if (!tool) notFound();
  const dict = await getDictionary(params.locale);
  const name = tool.name[params.locale];
  const description = tool.description[params.locale];
  const categoryName =
    dict.tools.category[params.category as keyof typeof dict.tools.category];

  const toolUrl = `https://utilboxx.com/${params.locale}/tools/${params.category}/${params.slug}`;

  // JSON-LD: SoftwareApplication + BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name,
        description,
        url: toolUrl,
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Any (browser-based)",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@type": "Organization", name: SITE_NAME },
        inLanguage: params.locale,
        browserRequirements: "Modern web browser with JavaScript enabled",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dict.nav.home,
            item: `https://utilboxx.com/${params.locale}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dict.nav.tools,
            item: `https://utilboxx.com/${params.locale}/tools`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: categoryName,
            item: `https://utilboxx.com/${params.locale}/tools/${params.category}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name,
            item: toolUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="text-sm text-slate-600 mb-4" aria-label="Breadcrumb">
        <Link href={`/${params.locale}`} className="hover:text-blue-600">{dict.nav.home}</Link>
        {" / "}
        <Link href={`/${params.locale}/tools`} className="hover:text-blue-600">{dict.nav.tools}</Link>
        {" / "}
        <Link href={`/${params.locale}/tools/${params.category}`} className="hover:text-blue-600">
          {categoryName}
        </Link>
        {" / "}
        <span>{name}</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
        {name}
      </h1>
      <p className="text-slate-600 mb-6">{description}</p>

      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <ToolClient toolSlug={tool.slug} locale={params.locale} />
      </div>
    </div>
  );
}
