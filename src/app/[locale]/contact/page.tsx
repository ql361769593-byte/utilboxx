import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { buildPageMetadata } from "@/lib/metadata";
import { getDictionary } from "@/i18n/dictionaries";
import ContactForm from "./ContactForm";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return buildPageMetadata({
    locale: params.locale,
    path: "contact",
    title: `${dict.contact.title} | ${dict.site.title}`,
    description: dict.contact.subtitle,
    keywords: ["contact", "support", "feedback", "UtilBoxx"],
  });
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  return <ContactForm params={params} />;
}
