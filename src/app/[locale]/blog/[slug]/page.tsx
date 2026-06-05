import { getAllPostSlugs, getPost } from "@/content/blog/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#667eea",
};

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "zh", "ja", "es", "pt", "fr", "de"];
  const slugs = getAllPostSlugs();
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale; slug: string };
}): Promise<Metadata> {
  const post = getPost(params.slug, params.locale);
  if (!post) return {};
  const dict = await getDictionary(params.locale);
  return buildPageMetadata({
    locale: params.locale,
    path: `blog/${params.slug}`,
    title: `${post.title} | ${dict.site.title}`,
    description: post.description,
    keywords: [
      post.category.toLowerCase(),
      "tutorial",
      "how-to",
      "online tools",
      ...dict.blog.subtitle.toLowerCase().split(/\s+/).filter((w) => w.length > 4),
    ],
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
  });
}

// Tiny markdown renderer for the simple subset we use
function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const out: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];
  let inOl = false;
  let olItems: string[] = [];
  let inP = false;
  let pBuf: string[] = [];

  const flushP = () => {
    if (pBuf.length) {
      out.push(
        <p key={out.length} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {renderInline(pBuf.join(" "))}
        </p>
      );
      pBuf = [];
    }
    inP = false;
  };
  const flushUl = () => {
    if (listItems.length) {
      out.push(
        <ul key={out.length} className="list-disc pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
          {listItems.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ul>
      );
      listItems = [];
    }
    inList = false;
  };
  const flushOl = () => {
    if (olItems.length) {
      out.push(
        <ol key={out.length} className="list-decimal pl-6 mb-4 space-y-1 text-gray-700 dark:text-gray-300">
          {olItems.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ol>
      );
      olItems = [];
    }
    inOl = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const h2 = line.match(/^##\s+(.+)$/);
    const h3 = line.match(/^###\s+(.+)$/);
    const ul = line.match(/^-\s+(.+)$/);
    const ol = line.match(/^\d+\.\s+(.+)$/);

    if (h2) {
      flushP();
      flushUl();
      flushOl();
      out.push(
        <h2 key={out.length} className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
          {h2[1]}
        </h2>
      );
    } else if (h3) {
      flushP();
      flushUl();
      flushOl();
      out.push(
        <h3 key={out.length} className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
          {h3[1]}
        </h3>
      );
    } else if (ul) {
      flushP();
      flushOl();
      inList = true;
      listItems.push(ul[1]);
    } else if (ol) {
      flushP();
      flushUl();
      inOl = true;
      olItems.push(ol[1]);
    } else if (line.trim() === "") {
      flushP();
      flushUl();
      flushOl();
    } else {
      flushUl();
      flushOl();
      inP = true;
      pBuf.push(line);
    }
  }
  flushP();
  flushUl();
  flushOl();
  return out;
}

function renderInline(text: string): React.ReactNode {
  // Process **bold**, *italic*, and [text](url)
  const parts: React.ReactNode[] = [];
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0;
  let match;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const tok = match[0];
    if (tok.startsWith("**")) {
      parts.push(<strong key={key++}>{tok.slice(2, -2)}</strong>);
    } else if (tok.startsWith("[")) {
      const lm = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/)!;
      parts.push(
        <a key={key++} href={lm[2]} className="text-blue-600 dark:text-blue-400 hover:underline">
          {lm[1]}
        </a>
      );
    } else if (tok.startsWith("*")) {
      parts.push(<em key={key++}>{tok.slice(1, -1)}</em>);
    }
    last = match.index + tok.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

export default async function BlogPostPage({ params }: { params: { locale: Locale; slug: string } }) {
  const post = getPost(params.slug, params.locale);
  if (!post) notFound();
  const t = await getDictionary(params.locale);

  // Related articles: same category, exclude self, max 3
  const allSlugs = getAllPostSlugs();
  const related = allSlugs
    .filter((s) => s !== params.slug)
    .map((s) => getPost(s, params.locale))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .filter((p) => p.category === post.category)
    .slice(0, 3);

  // Prev/Next by date (newest first ordering)
  const allByDate = allSlugs
    .map((s) => getPost(s, params.locale))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)
    .sort((a, b) => b.date.localeCompare(a.date));
  const currentIdx = allByDate.findIndex((p) => p.slug === params.slug);
  const prev = currentIdx > 0 ? allByDate[currentIdx - 1] : null;
  const next = currentIdx < allByDate.length - 1 ? allByDate[currentIdx + 1] : null;

  // JSON-LD Article structured data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "UtilBoxx" },
    publisher: {
      "@type": "Organization",
      name: "UtilBoxx",
      url: "https://utilboxx.com",
      logo: {
        "@type": "ImageObject",
        url: "https://utilboxx.com/icon.svg",
        width: 64,
        height: 64,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://utilboxx.com/${params.locale}/blog/${params.slug}`,
    },
    inLanguage: params.locale,
    articleSection: post.category,
    image: [
      `https://utilboxx.com/og-${params.locale}.png`,
    ],
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <nav className="text-sm text-gray-500 mb-6">
        <Link href={`/${params.locale}`} className="hover:text-blue-600">
          {t.nav.home}
        </Link>
        {" / "}
        <Link href={`/${params.locale}/blog`} className="hover:text-blue-600">
          {t.blog.title}
        </Link>
      </nav>

      <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
        <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
          {post.category}
        </span>
        <time dateTime={post.date}>{post.date}</time>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>

      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{post.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{post.description}</p>

      <div className="prose-content">{renderMarkdown(post.content)}</div>

      {/* Prev/Next navigation by date */}
      <nav className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4" aria-label="Article navigation">
        {prev ? (
          <Link
            href={`/${params.locale}/blog/${prev.slug}`}
            className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 hover:shadow-sm transition"
          >
            <div className="text-xs text-gray-500 mb-1">← {t.blog?.prev || "Previous"}</div>
            <div className="font-medium text-gray-900 dark:text-white line-clamp-2">{prev.title}</div>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            href={`/${params.locale}/blog/${next.slug}`}
            className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 hover:shadow-sm transition md:text-right"
          >
            <div className="text-xs text-gray-500 mb-1">{t.blog?.next || "Next"} →</div>
            <div className="font-medium text-gray-900 dark:text-white line-clamp-2">{next.title}</div>
          </Link>
        ) : <div />}
      </nav>

      {/* Related articles (same category) */}
      {related.length > 0 && (
        <section className="mt-12" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {t.blog?.related || "Related Articles"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/${params.locale}/blog/${p.slug}`}
                className="block p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-blue-500 hover:shadow-md transition"
              >
                <div className="text-xs text-blue-600 dark:text-blue-400 mb-2">{p.category}</div>
                <div className="font-medium text-gray-900 dark:text-white line-clamp-2 mb-2">{p.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{p.description}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link href={`/${params.locale}/blog`} className="text-blue-600 dark:text-blue-400 hover:underline">
          ← {t.blog.backToList}
        </Link>
      </div>
    </article>
  );
}
