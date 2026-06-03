import Link from "next/link";
import {
  Combine,
  Scissors,
  Minimize2,
  Image as ImageIcon,
  FileImage,
  Stamp,
  RotateCw,
  FileText,
  ListOrdered,
  Maximize2,
  Crop,
  RefreshCw,
  Hash,
  CaseSensitive,
  CopyX,
  GitCompare,
  Regex,
  Ruler,
  Weight,
  Thermometer,
  Square,
  Beaker,
  Gauge,
  HardDrive,
  Clock,
  Pipette,
  Palette,
  SwatchBook,
  Lock,
  Binary,
  Link as LinkIcon,
  Fingerprint,
  Braces,
  Timer,
  QrCode,
  Key,
  type LucideIcon,
} from "lucide-react";
import { type Locale } from "@/i18n/config";

const iconMap: Record<string, LucideIcon> = {
  Combine,
  Scissors,
  Minimize2,
  Image: ImageIcon,
  FileImage,
  Stamp,
  RotateCw,
  FileText,
  ListOrdered,
  Maximize2,
  Crop,
  RefreshCw,
  Hash,
  CaseSensitive,
  CopyX,
  GitCompare,
  Regex,
  Ruler,
  Weight,
  Thermometer,
  Square,
  Beaker,
  Gauge,
  HardDrive,
  Clock,
  Pipette,
  Palette,
  SwatchBook,
  Lock,
  Binary,
  Link: LinkIcon,
  Fingerprint,
  Braces,
  Timer,
  QrCode,
  Key,
};

const colorMap: Record<string, string> = {
  pdf: "from-red-500 to-orange-500",
  image: "from-purple-500 to-pink-500",
  text: "from-blue-500 to-cyan-500",
  unit: "from-green-500 to-emerald-500",
  color: "from-pink-500 to-rose-500",
  crypto: "from-yellow-500 to-amber-500",
  dev: "from-indigo-500 to-blue-500",
};

export function ToolIcon({ name, category }: { name: string; category: string }) {
  const Icon = iconMap[name] || FileText;
  const color = colorMap[category] || "from-slate-500 to-slate-600";
  return (
    <div
      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white`}
    >
      <Icon className="w-6 h-6" />
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
      className="block bg-white border border-slate-200 rounded-xl p-5 card-hover"
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
