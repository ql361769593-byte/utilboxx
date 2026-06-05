import { generateRss } from "@/content/blog/rss";

// Serve RSS at /feed.xml
export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  const xml = generateRss();
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
