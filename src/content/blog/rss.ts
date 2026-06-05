import { getAllPostSlugs, getPost } from "./posts";
import { locales } from "@/i18n/config";

const SITE_URL = "https://utilboxx.com";
const SITE_TITLE = "UtilBoxx";
const SITE_DESCRIPTION = "Free Online Tools - PDF, Image, Text, Unit, Color, Crypto, Developer. Privacy-first, browser-based, no signup.";

// RSS 2.0 feed for all blog posts in all 7 locales
// Each post is listed once per locale to maximize indexable entry points
export function generateRss(): string {
  const slugs = getAllPostSlugs();
  const items: string[] = [];

  for (const slug of slugs) {
    for (const locale of locales) {
      const post = getPost(slug, locale);
      if (!post) continue;
      const url = `${SITE_URL}/${locale}/blog/${slug}`;
      const pubDate = new Date(post.date).toUTCString();
      items.push(`
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.description}]]></description>
      <category>${post.category}</category>
      <pubDate>${pubDate}</pubDate>
      <language>${locale}</language>
    </item>`);
    }
  }

  const lastBuild = new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items.join("")}
  </channel>
</rss>`;
}
