import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { tools } from "@/i18n/tools";
import { getAllPostSlugs } from "@/content/blog/posts";

const BASE = "https://utilboxx.com";
const LASTMOD = new Date(); // all routes updated today (sitemap regenerate on each deploy)

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    // Core pages
    routes.push({ url: `${BASE}/${locale}`, lastModified: LASTMOD, changeFrequency: "weekly", priority: 1 });
    routes.push({ url: `${BASE}/${locale}/tools`, lastModified: LASTMOD, changeFrequency: "weekly", priority: 0.9 });
    routes.push({ url: `${BASE}/${locale}/blog`, lastModified: LASTMOD, changeFrequency: "weekly", priority: 0.9 });
    routes.push({ url: `${BASE}/${locale}/about`, lastModified: LASTMOD, changeFrequency: "monthly", priority: 0.5 });
    routes.push({ url: `${BASE}/${locale}/contact`, lastModified: LASTMOD, changeFrequency: "yearly", priority: 0.4 });
    routes.push({ url: `${BASE}/${locale}/privacy`, lastModified: LASTMOD, changeFrequency: "yearly", priority: 0.3 });

    // Category pages
    const categories = Array.from(new Set(tools.map((t) => t.category)));
    for (const c of categories) {
      routes.push({
        url: `${BASE}/${locale}/tools/${c}`,
        lastModified: LASTMOD,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }

    // Tool pages
    for (const t of tools) {
      routes.push({
        url: `${BASE}/${locale}/tools/${t.slug}`,
        lastModified: LASTMOD,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    // Blog posts
    for (const slug of getAllPostSlugs()) {
      routes.push({
        url: `${BASE}/${locale}/blog/${slug}`,
        lastModified: LASTMOD,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return routes;
}
