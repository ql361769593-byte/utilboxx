import Link from "next/link";
import { Home, Search } from "lucide-react";

// 根级 404 兜底（无 locale 段时使用）
export const metadata = {
  title: "Page Not Found | UtilBoxx",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/en"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Go Home
          </Link>
          <Link
            href="/en/tools"
            className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:bg-slate-50 transition"
          >
            <Search className="w-4 h-4" aria-hidden="true" />
            Browse Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
