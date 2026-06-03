import { getAllPostSlugs, getPost } from "@/content/blog/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

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

export function generateMetadata({ params }: { params: { locale: Locale; slug: string } }) {
  const post = getPost(params.slug, params.locale);
  if (!post) return {};
  return {
    title: `${post.title} | UtilBoxx`,
    description: post.description,
    keywords: post.category,
  };
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

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
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

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <Link href={`/${params.locale}/blog`} className="text-blue-600 dark:text-blue-400 hover:underline">
          ← {t.blog.backToList}
        </Link>
      </div>
    </article>
  );
}
