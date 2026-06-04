import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { tools } from "@/i18n/tools";
import { ToolCard } from "@/components/ToolCard";
import { Sparkles } from "lucide-react";
import { buildPageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return buildPageMetadata({
    locale: params.locale,
    path: "",
    title: dict.home.hero_title, // "Free Online Tools for Everyone"
    description: dict.home.hero_subtitle,
    keywords: [
      "free online tools",
      "PDF tools",
      "image tools",
      "text tools",
      "unit converter",
      "color picker",
      "developer tools",
      "no signup",
    ],
  });
}

export default async function HomePage({ params }: { params: { locale: Locale } }) {
  const dict = await getDictionary(params.locale);

  // Structured data: WebSite + Organization + SoftwareApplication
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://utilboxx.com/#website",
        url: "https://utilboxx.com",
        name: "UtilBoxx",
        description: dict.home.hero_subtitle,
        inLanguage: ["en", "zh", "ja", "es", "pt", "fr", "de"],
        publisher: { "@id": "https://utilboxx.com/#organization" },
      },
      {
        "@type": "Organization",
        "@id": "https://utilboxx.com/#organization",
        name: "UtilBoxx",
        url: "https://utilboxx.com",
        logo: {
          "@type": "ImageObject",
          url: "https://utilboxx.com/icon.svg",
          width: 64,
          height: 64,
        },
        sameAs: [],
      },
      {
        "@type": "WebApplication",
        name: "UtilBoxx",
        url: "https://utilboxx.com",
        applicationCategory: "UtilityApplication",
        operatingSystem: "Any (browser-based)",
        description: dict.home.hero_subtitle,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        browserRequirements: "Modern web browser with JavaScript enabled",
        image: `https://utilboxx.com/og-${params.locale}.png`,
        inLanguage: params.locale,
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero */}
      <section className="gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>{dict.home.hero_badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {dict.home.hero_title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {dict.home.hero_subtitle}
          </p>
          <a
            href="#tools"
            className="inline-block bg-white text-purple-700 font-semibold px-8 py-3 rounded-lg hover:bg-slate-100 transition"
          >
            {dict.home.cta} →
          </a>
        </div>
      </section>

      {/* Categories */}
      <section id="tools" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            {dict.home.features_title}
          </h2>
          <p className="text-slate-600 text-lg">{dict.home.features_subtitle}</p>
        </div>

        {dict.home.categories.map((cat, i) => {
          const catTools = tools.filter((t) => {
            const catKey = ["pdf", "image", "text", "unit", "color", "crypto", "dev"][i];
            return t.category === catKey;
          });
          return (
            <div key={cat.title} className="mb-12">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900">{cat.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{cat.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {catTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} locale={params.locale} />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
