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

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{t.blog.title}</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">{t.blog.subtitle}</p>

      <div className="space-y-6">
        {posts.length === 0 ? (
          <p className="text-gray-500">{t.blog.empty}</p>
        ) : (
          posts.map((post) => (
            <article
              key={post.slug}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                  {post.category}
                </span>
                <time dateTime={post.date}>{post.date}</time>
                <span>·</span>
                <span>{post.readTime}</span>
                <span>·</span>
                <span>{localeNames[params.locale]}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/${params.locale}/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">{post.description}</p>
              <Link
                href={`/${params.locale}/blog/${post.slug}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {t.blog.readMore} →
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
