# UtilBoxx 部署说明

## 项目信息

- 框架: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- 总工具数: 40 个
- 支持语言: 7 种 (en, zh, ja, es, pt, fr, de)
- 静态页面总数: 356 个（7 语言 × 完整路由）

## 本地开发

```bash
cd utilboxx
pnpm install
pnpm dev        # 启动开发服务器 (localhost:3000)
pnpm build      # 生产构建
pnpm start      # 启动生产服务器
```

## 部署方案对比

### 方案 A: Vercel（推荐，零配置）

1. 把项目推送到 GitHub
2. 登录 vercel.com, 导入 repo
3. 框架自动识别为 Next.js
4. 点击 Deploy, 2 分钟上线
5. 在 Project Settings → Domains 添加 utilboxx.com
6. 在 Cloudflare DNS 添加:
   - CNAME @ → cname.vercel-dns.com
   - 或按 Vercel 提示配 A 记录

成本: 免费（100GB 流量/月，个人项目足够）

### 方案 B: Cloudflare Pages（次选，更便宜）

1. 把项目推送到 GitHub
2. 登录 pages.cloudflare.com, 创建项目
3. 构建设置:
   - Build command: `pnpm build`
   - Build output: `.next`
   - Root: 空
4. 添加环境变量（如果需要）: 无
5. 添加自定义域名 utilboxx.com

成本: 完全免费（不限流量）

⚠️ 注意: Cloudflare Pages 需要 Next.js 14+ 的特定配置，可能要调整。

### 方案 C: 自建服务器（VPS）

适合有海外 VPS 的用户。

```bash
# 1. 在服务器上装 Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 2. 上传代码
scp -r ./utilboxx user@server:/home/user/

# 3. 服务器上
cd /home/user/utilboxx
pnpm install
pnpm build

# 4. 用 PM2 守护进程
npm install -g pm2
pm2 start pnpm --name utilboxx -- start
pm2 startup
pm2 save

# 5. Nginx 反向代理
server {
    listen 80;
    server_name utilboxx.com www.utilboxx.com;
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}

# 6. SSL (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d utilboxx.com -d www.utilboxx.com
```

## 域名 DNS 配置

无论用哪种部署，都需要在 Cloudflare 或域名注册商配置 DNS:

```
A     @     指向 Vercel / Pages / VPS IP
CNAME www   指向 @ 或 vercel-dns.com
```

## 上线后必做

1. 申请 Google AdSense
   - 域名稳定运行 1-2 周后申请
   - 需要 25+ 篇 SEO 文章
2. 提交搜索引擎
   - Google Search Console: https://search.google.com/search-console
   - Bing Webmaster: https://www.bing.com/webmasters
3. 配置 Analytics
   - 推荐 Plausible 或 Umami（隐私友好）
   - 或 Google Analytics 4
4. 添加 robots.txt 和 sitemap（已自动生成）
5. 持续添加内容（每周 3-5 篇文章）

## 变现策略

- Google AdSense: 流量起来后申请
- Ezoic: 1000 UV/天后可申请，收益比 AdSense 高
- Mediavine: 5 万 PV/天后申请
- 联盟营销: 工具站适合推云服务、域名、主机

## SEO 关键词建议

按优先级做日语站（推荐）：
- "PDF 結合" - 18,000/月
- "画像 圧縮" - 14,000/月
- "JSON フォーマッタ" - 8,000/月
- "UUID 生成" - 5,000/月

英文站：
- "merge pdf" - 110,000/月
- "json formatter" - 80,000/月
- "password generator" - 60,000/月

## 注意事项

- 替换 utilboxx.com 为你的实际域名（在 src/app/sitemap.ts）
- 部署前检查 .git 状态，避免敏感信息
- 定期更新依赖 (pnpm update)
- 监控 Lighthouse 分数（目标: 95+）
