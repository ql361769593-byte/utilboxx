"use client";
import Link from "next/link";
import { type Locale } from "@/i18n/config";
import iconPaths from "@/lib/icon-sprite.json";

// 工具卡片 icon 渲染 —— 使用 lucide icon sprite
// 比 inline SVG 节省 60+KB HTML（38 cards × 1.5KB → 38 × 50B + 6KB sprite）
// icon-sprite.json 是构建时提取的，sprite 在根 layout 注入 <defs>
const colorMap: Record<string, string> = {
  pdf: "from-red-500 to-orange-500",
  image: "from-purple-500 to-pink-500",
  text: "from-blue-500 to-cyan-500",
  unit: "from-green-500 to-emerald-500",
  color: "from-pink-500 to-rose-500",
  crypto: "from-yellow-500 to-amber-500",
  dev: "from-indigo-500 to-blue-500",
};

function ToolIcon({ name, category }: { name: string; category: string }) {
  const color = colorMap[category] || "from-slate-500 to-slate-600";
  // name 是 lucide 组件名（如 "Combine", "Scissors"）
  return (
    <div
      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white shrink-0`}
      aria-hidden="true"
    >
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        // 关键：引用根 layout 注入的 sprite
        dangerouslySetInnerHTML={{
          __html: iconPaths[name as keyof typeof iconPaths] || iconPaths.FileText,
        }}
      />
    </div>
  );
}

export function ToolCard({
  tool,
  locale,
}: {
  tool: {
    slug: string;
    category: string;
    icon: string;
    name: Record<Locale, string>;
    description: Record<Locale, string>;
  };
  locale: Locale;
}) {
  return (
    <Link
      href={`/${locale}/tools/${tool.slug}`}
      className="block bg-white border border-slate-200 rounded-xl p-5 card-hover no-underline"
    >
      <div className="flex items-start gap-4">
        <ToolIcon name={tool.icon} category={tool.category} />
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 mb-1 truncate">
            {tool.name[locale]}
          </h3>
          <p className="text-sm text-slate-600 line-clamp-2">
            {tool.description[locale]}
          </p>
        </div>
      </div>
    </Link>
  );
}
