import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";

const SITE_URL = "https://utilboxx.com";
export const SITE_NAME = "UtilBoxx";
export const SITE_TAGLINE = "Free Online Tools - PDF, Image, Text, Unit, Color, Crypto, Developer";

export const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_CN",
  ja: "ja_JP",
  es: "es_ES",
  pt: "pt_PT",
  fr: "fr_FR",
  de: "de_DE",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  es: "Español",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
};

/**
 * Build hreflang alternates for a given path (relative to locale, no leading slash).
 * Example: buildAlternates("tools/pdf/merge") returns hreflang links for each locale
 * with x-default pointing to the English version.
 */
export function buildAlternates(pathWithoutLocale: string): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    const url =
      loc === "en"
        ? `${SITE_URL}/${pathWithoutLocale}`
        : `${SITE_URL}/${loc}/${pathWithoutLocale}`;
    languages[loc] = url;
  }
  languages["x-default"] = `${SITE_URL}/${pathWithoutLocale}`;
  return {
    canonical: `${SITE_URL}/${locales.includes("en" as Locale) ? "en" : locales[0]}/${pathWithoutLocale}`,
    languages,
  };
}

/**
 * Canonical URL for the current locale.
 */
export function canonicalFor(locale: Locale, pathWithoutLocale: string): string {
  if (pathWithoutLocale === "" || pathWithoutLocale === "/") {
    return `${SITE_URL}/${locale}`;
  }
  return `${SITE_URL}/${locale}/${pathWithoutLocale}`;
}

/**
 * Build a full Metadata object for any given page.
 * Pass the per-page title/description; the helper fills in site defaults + hreflang + canonical.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  keywords,
  imagePath,
  type = "website",
  publishedTime,
  modifiedTime,
}: {
  locale: Locale;
  path: string; // relative to /, no locale prefix. e.g. "tools/pdf/merge"
  title: string;
  description: string;
  keywords?: string[];
  imagePath?: string; // e.g. "/og/merge.png" — relative to SITE_URL
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}): Metadata {
  const canonical = canonicalFor(locale, path);
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = canonicalFor(loc, path);
  }
  languages["x-default"] = canonicalFor("en", path);

  const ogImage = `${SITE_URL}${imagePath || (locale === "en" ? "/og-default.png" : `/og-${locale}.png`)}`;

  return {
    title,
    description,
    keywords: keywords?.join(", "),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      type,
      locale: ogLocaleMap[locale],
      url: canonical,
      siteName: SITE_NAME,
      // locale:alternate 由 alternates.languages 处理（hreflang 同等效力）
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}
