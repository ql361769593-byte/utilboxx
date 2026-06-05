import { getAllPostsForLocale } from "@/content/blog/posts";
import Link from "next/link";
import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  const postCount = getAllPostsForLocale(params.locale).length;
  return buildPageMetadata({
    locale: params.locale,
    path: "blog",
    title: `${dict.blog.title} | ${dict.site.title}`,
    description: dict.blog.subtitle,
    keywords: [
      "blog",
      "PDF guides",
      "image guides",
      "developer tutorials",
      "online tools tutorials",
    ],
  });
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }, { locale: "ja" }, { locale: "es" }, { locale: "pt" }, { locale: "fr" }, { locale: "de" }];
}

const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  es: "Español",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
};

export default async function BlogIndexPage({ params }: { params: { locale: Locale } }) {
  const posts = getAllPostsForLocale(params.locale);
  const t = await getDictionary(params.locale);

  // Group posts by category for sectioned display
  const byCategory = new Map<string, typeof posts>();
  for (const p of posts) {
    const arr = byCategory.get(p.category) ?? [];
    arr.push(p);
    byCategory.set(p.category, arr);
  }
  const categories = Array.from(byCategory.keys());

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{t.blog.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{t.blog.subtitle}</p>

      {/* Category filter chips */}
      {categories.length > 0 && (
        <nav aria-label="Categories" className="mb-12 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#cat-${encodeURIComponent(cat)}`}
              className="px-3 py-1.5 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition"
            >
              {cat} <span className="text-gray-500 dark:text-gray-400">({byCategory.get(cat)!.length})</span>
            </a>
          ))}
        </nav>
      )}

      {posts.length === 0 ? (
        <p className="text-gray-500">{t.blog.empty}</p>
      ) : (
        categories.map((cat) => (
          <section key={cat} id={`cat-${encodeURIComponent(cat)}`} className="mb-12 scroll-mt-20">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{cat}</h2>
            <div className="space-y-4">
              {byCategory.get(cat)!.map((post) => (
                <article
                  key={post.slug}
                  className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{localeNames[params.locale]}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    <Link href={`/${params.locale}/blog/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{post.description}</p>
                  <Link
                    href={`/${params.locale}/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {t.blog.readMore} →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
