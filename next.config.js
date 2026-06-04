/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 生产模式关闭 source maps（减小 bundle）
  productionBrowserSourceMaps: false,
  // 启用 gzip/brotli 压缩
  compress: true,
  // 优化包导入，减小 bundle
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // pdfjs-dist worker 走 CDN，避免打包问题
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      canvas: false,
    };
    return config;
  },
};

module.exports = nextConfig;
