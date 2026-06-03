import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { tools } from "@/i18n/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://utilboxx.com";
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    routes.push({ url: `${base}/${locale}`, changeFrequency: "weekly", priority: 1 });
    routes.push({ url: `${base}/${locale}/tools`, changeFrequency: "weekly", priority: 0.9 });
    routes.push({ url: `${base}/${locale}/about`, changeFrequency: "monthly", priority: 0.5 });
    routes.push({ url: `${base}/${locale}/privacy`, changeFrequency: "monthly", priority: 0.3 });

    for (const t of tools) {
      routes.push({
        url: `${base}/${locale}/tools/${t.slug}`,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }
  return routes;
}
