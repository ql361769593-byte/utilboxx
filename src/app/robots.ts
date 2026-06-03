import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        // Google AdSense crawler - explicitly allow
        userAgent: "Mediapartners-Google",
        allow: "/",
      },
      {
        // Googlebot - explicitly allow
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        // Bingbot - explicitly allow
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: "https://utilboxx.com/sitemap.xml",
  };
}
