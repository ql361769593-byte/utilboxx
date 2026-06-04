// 共享 pdfjs lazy load + worker init
// 用于所有 PDF 处理 tool（避免重复 + 确保版本一致）

const PDFJS_VERSION = "4.0.379";
const WORKER_URL = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${PDFJS_VERSION}/build/pdf.worker.min.mjs`;

let pdfjsPromise: Promise<typeof import("pdfjs-dist")> | null = null;

/**
 * 懒加载 pdfjs-dist（只在用户实际用 PDF 工具时下载，节省 LCP）
 * Worker 用 CDN，避免 webpack 打包问题
 */
export async function getPdfjs() {
  if (!pdfjsPromise) {
    pdfjsPromise = import("pdfjs-dist").then((mod) => {
      (mod as any).GlobalWorkerOptions.workerSrc = WORKER_URL;
      return mod;
    });
  }
  return pdfjsPromise;
}
