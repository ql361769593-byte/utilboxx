// Blog post: How to Compress Images Online
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const compressEn = `## Why compress images?

Every website you visit loads images. Every email you send may carry them. Every phone backup stores them. And every one of those images is bigger than it needs to be. A typical phone photo is 4-8 MB. A product photo from a mirrorless camera can hit 25 MB. A 4K screenshot can be 30 MB. Most of that size is wasted on data your eyes cannot see.

Compressing images is one of the highest-leverage things you can do to make your site faster, your emails sendable, and your storage bill smaller. A 4 MB photo compressed with the right settings can drop to 400 KB — a 90% reduction — with no visible quality loss.

The reasons people compress images are practical and frequent:

- **Faster websites**: Google ranks pages partly on load speed, and images are usually the largest contributor. Smaller images = faster pages = better SEO and conversion.
- **Email attachments**: Gmail caps attachments at 25 MB, Outlook at 20 MB, and many corporate servers at 10 MB. A few uncompressed photos will bounce.
- **Storage savings**: A phone with 256 GB fills up fast. A photo library of 50,000 images at 4 MB each is 200 GB; at 400 KB each, it is 20 GB.
- **Social media uploads**: Instagram, X, and LinkedIn all re-compress uploads, so sending a smaller, higher-quality original often beats sending a big lossy file.
- **Bandwidth costs**: If you run a site that serves a lot of images, every kilobyte costs real money in CDN fees.
- **Faster sharing**: WhatsApp, Slack, and AirDrop all feel snappier with smaller files.

The good news: with the right tool, compressing an image is a 10-second job, and you do not need to install anything.

## Method 1: Use UtilBoxx's Free Image Compressor (Recommended)

The fastest, safest, and most private way to compress images is [UtilBoxx's Image Compress tool](/en/tools/image/compress). It runs entirely in your browser, so your photos never leave your device. There is no upload, no signup, and no watermark on the output.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/image/compress](/en/tools/image/compress)
2. Click the upload area and select your JPG, PNG, or WebP (or drag and drop)
3. Pick a mode: **lossy** (smallest file, slight quality loss), **lossless** (no quality loss, modest size drop), or **target size** (you set a KB target, it adjusts)
4. Adjust the quality slider if you want fine control
5. Click "Compress"
6. Download the result (or all results as a zip)

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. Your photos never reach a server.
- **Three modes**: lossy for smallest file, lossless for pixel-perfect, target size when you have a hard limit
- **Multi-format**: JPG, PNG, and WebP in the same tool
- **Batch friendly**: drop 20 images and process them all at once
- **No watermarks** on the output

If you only compress images once in a while, this is by far the lowest-friction option. And because it is browser-based, it works on Windows, Mac, Linux, ChromeOS, iOS, and Android.

## Method 2: Adobe Photoshop (Paid)

Photoshop is the heavyweight of image editing, and its "Save for Web" (in older versions) or "Export > Save for Web (Legacy)" dialog is the gold standard for fine-grained compression. You can compare the original and compressed versions side by side, pick a quality level, choose between JPG, PNG, WebP, and GIF, set the output dimensions, and watch the file size update in real time.

The catch is the price and the complexity. Photoshop is part of a Creative Cloud subscription that costs roughly **$22.99 per month** (about $240 per year). For one-off compression it is overkill, and the learning curve is steep if you only need a slider.

Photoshop is worth it only if you already use it for retouching, compositing, or design work. If compression is all you need, a browser tool does the job without the bill or the install.

## Method 3: Command line with ImageMagick

If you are comfortable in a terminal, the open-source tool **ImageMagick** is the most powerful CLI option for image compression. Install it with Homebrew (\`brew install imagemagick\`), then:

\`\`\`bash
# Compress a JPG to quality 80 (good balance)
magick input.jpg -quality 80 output.jpg

# Aggressive compression for thumbnails
magick input.jpg -quality 60 -resize 800x output.jpg

# Lossless compression for PNG
magick input.png -strip -define png:compression-level=9 output.png

# Convert to WebP at quality 75
magick input.jpg -quality 75 output.webp

# Compress all JPGs in a folder
for f in *.jpg; do magick "$f" -quality 80 "compressed_$f"; done
\`\`\`

The \`-quality\` flag is a percentage for JPG and WebP (higher = better, larger file). For PNG, \`png:compression-level\` goes from 0 to 9, with 9 being the smallest. The \`-strip\` flag removes metadata (EXIF, GPS, camera info) which can shrink files by another 5-15%.

**ImageMagick** is excellent for scripting batch compression across thousands of files. It is also the only option that works on a headless server with no GUI.

## Common questions

### Will compressing an image reduce quality?

It depends on the mode. **Lossy** compression (JPG, WebP with quality below 100) does reduce quality mathematically, but at quality 80-85, the difference is invisible to the human eye at normal viewing distance. **Lossless** compression (PNG, or WebP lossless mode) reduces file size by 10-30% with zero pixel change.

### How much can I compress a JPG?

Most JPGs from cameras can be compressed 60-80% without visible quality loss. A 4 MB photo typically drops to 500 KB-1 MB. Screenshots compress even more, often 90%+.

### Should I use JPG, PNG, or WebP?

- **JPG** for photos (millions of colors, lossy is fine)
- **PNG** for screenshots, logos, images with text, or anything needing transparency
- **WebP** for the web (smaller than both, supported by all modern browsers since 2020)

### Can I compress a PNG losslessly?

Yes. PNGs from design tools often have lots of metadata and inefficient compression. Running them through a tool like UtilBoxx or \`pngcrush\` shrinks the file 10-30% with no pixel change.

### Is it safe to use an online image compressor?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your photos are being uploaded to a remote server and read their privacy policy carefully. Avoid uploading personal, financial, medical, or otherwise sensitive photos to a compressor you do not trust.

### What is the difference between lossy and lossless compression?

**Lossy** compression (JPG, WebP lossy) throws away image data that the human eye barely notices. It can achieve 10:1 or better compression. **Lossless** compression (PNG, WebP lossless) preserves every pixel exactly and typically achieves 2:1 to 3:1 compression.

## Conclusion

Compressing images is one of those small tasks that comes up constantly and should not require a paid subscription or a software install. For most people, [UtilBoxx's free Image Compress tool](/en/tools/image/compress) is the obvious choice: it is private, fast, and free, with no signup and no watermark.

If you are a designer who already lives in Photoshop, "Save for Web" gives you the finest control. If you are scripting batch work, ImageMagick in the terminal is unbeatable. And GIMP, the free Photoshop alternative, has a similar export dialog at zero cost.

For everything else, head to [UtilBoxx Image tools](/en/tools/image) and you will find a complete, privacy-first toolkit for working with images — all in your browser.`;

const compressZh = `## 为什么要压缩图片？

你访问的每个网站都要加载图片。你发送的每封邮件都可能带着图片。每一次手机备份都会保存图片。而这其中的每张图片都比它本应的大小要臃肿。一张普通的手机照片是 4-8 MB，一台微单拍的产品图可以到 25 MB，一张 4K 截图能到 30 MB。这些体积的绝大部分，都是人眼根本看不到的冗余数据。

压缩图片，是你能做的"性价比最高"的事情之一：让网站更快、邮件发得出、存储账单更小。一张 4 MB 的照片用合适的设置压到 400 KB —— 缩小 90% —— 肉眼看不出任何差别。

人们需要压缩图片的原因既实际又频繁：

- **网站更快**：谷歌把页面加载速度作为排名因素之一，图片通常是最大头。图片小 = 页面快 = SEO 和转化率更好。
- **邮件附件**：Gmail 附件上限 25 MB，Outlook 20 MB，很多企业邮箱 10 MB。几张未压缩的照片就会被退回。
- **节省存储**：256 GB 的手机空间很快就会塞满。5 万张照片每张 4 MB 是 200 GB；每张 400 KB 则只有 20 GB。
- **社交媒体上传**：Instagram、X、LinkedIn 都会对上传重新压缩，发一张更小、更高质量的原图，往往比发一张巨大的有损图效果更好。
- **带宽成本**：如果你的网站服务大量图片，每一 KB 都是 CDN 上的真金白银。
- **分享更顺畅**：WhatsApp、Slack、AirDrop 传小文件都更利落。

好消息是：只要用对工具，压缩图片只需 10 秒，而且不需要装任何东西。

## 方法一：使用 UtilBoxx 免费图片压缩工具（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的图片压缩工具](/zh/tools/image/compress)。它完全在你的浏览器中运行，照片不会离开你的设备。没有上传、没有注册、输出文件没有水印。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/image/compress](/zh/tools/image/compress)
2. 点击上传区域选择你的 JPG、PNG 或 WebP（或直接拖入）
3. 选择模式：**有损**（文件最小，略有画质损失）、**无损**（无画质损失，体积适度缩小）或**目标大小**（你设置一个 KB 目标，工具自动调整）
4. 如需微调可拖动质量滑块
5. 点击"开始压缩"
6. 下载结果（多个文件时打包成 zip）

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，照片不会上传到任何服务器
- **三种模式**：有损压到最小、无损像素级一致、目标大小满足硬性限制
- **多格式**：JPG、PNG、WebP 一个工具搞定
- **支持批量**：一次拖入 20 张，全部一起处理
- **输出无水印**

如果你只是偶尔压一压图片，这是最省心的选择。而且因为它基于浏览器，Windows、Mac、Linux、ChromeOS、iOS、Android 都能用。

## 方法二：Adobe Photoshop（付费）

Photoshop 是图像编辑领域的重量级选手，它的"存储为 Web 所用格式"（在旧版本中）或"导出 > 存储为 Web 所用格式（Legacy）"对话框，是精细压缩的黄金标准。你可以左右对比原图和压缩图、选质量、挑格式（支持 JPG、PNG、WebP、GIF）、设输出尺寸，并实时看到文件大小变化。

代价是价格和复杂度。Photoshop 是 Creative Cloud 订阅的一部分，每月约 **$22.99**（每年约 $240 美元）。如果只是偶尔压缩一下，杀鸡用牛刀，而且学习曲线很陡。

只有当你已经用它做修图、合成或设计时，Photoshop 才值得。如果压缩就是你的全部需求，浏览器工具就够用，还免了账单和安装。

## 方法三：命令行 ImageMagick

如果你熟悉终端，开源工具 **ImageMagick** 是最强大的图片压缩命令行选择。用 Homebrew 安装（\`brew install imagemagick\`）后：

\`\`\`bash
# 把 JPG 压到质量 80（平衡良好）
magick input.jpg -quality 80 output.jpg

# 缩略图激进压缩
magick input.jpg -quality 60 -resize 800x output.jpg

# PNG 无损压缩
magick input.png -strip -define png:compression-level=9 output.png

# 转 WebP，质量 75
magick input.jpg -quality 75 output.webp

# 压缩文件夹里所有 JPG
for f in *.jpg; do magick "$f" -quality 80 "compressed_$f"; done
\`\`\`

\`-quality\` 参数对 JPG 和 WebP 是百分比（越高越好，文件越大）。对 PNG，\`png:compression-level\` 范围是 0-9，9 最小。\`-strip\` 参数会移除元数据（EXIF、GPS、相机信息），可以再缩小 5-15%。

**ImageMagick** 非常适合写脚本对成百上千个文件做批量压缩，也是无 GUI 环境的服务器上唯一可行的方案。

## 常见问题

### 压缩图片会降低画质吗？

取决于模式。**有损**压缩（JPG、质量低于 100 的 WebP）在数学上确实降低了画质，但在 80-85 质量下，肉眼在正常观看距离看不出区别。**无损**压缩（PNG，或 WebP 无损模式）可以让文件缩小 10-30%，像素完全不变。

### JPG 最多能压多少？

相机拍的 JPG 通常可以压 60-80% 而看不出画质损失。4 MB 的照片一般能压到 500 KB-1 MB。截图压缩率更高，常常能到 90% 以上。

### 我该用 JPG、PNG 还是 WebP？

- **JPG** 适合照片（百万级颜色，有损没关系）
- **PNG** 适合截图、Logo、带文字的图、或任何需要透明的地方
- **WebP** 适合网页（比前两者都小，2020 年起所有现代浏览器都支持）

### PNG 可以无损压缩吗？

可以。设计工具导出的 PNG 常常带大量元数据且压缩效率低。丢到 UtilBoxx 或 \`pngcrush\` 里跑一遍，文件能缩小 10-30%，像素完全不变。

### 在线图片压缩工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的照片会被上传到远程服务器，并仔细阅读隐私政策。避免向你不信任的压缩工具上传任何包含个人、财务、医疗或敏感信息的照片。

### 有损和无损压缩有什么区别？

**有损**压缩（JPG、WebP 有损）会丢弃人眼几乎注意不到的图像数据，可以做到 10:1 甚至更高。**无损**压缩（PNG、WebP 无损）完整保留每个像素，通常能压到 2:1 到 3:1。

## 结论

压缩图片是一件经常要做的小事，不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费图片压缩工具](/zh/tools/image/compress) 是显而易见的选择：私密、快速、免费、无需注册、无水印。

如果你是常驻 Photoshop 的设计师，"存储为 Web 所用格式"给你最精细的控制。如果你写脚本做批量处理，ImageMagick 在终端里无可替代。免费替代品 GIMP 也有类似的导出对话框，零成本。

其他情况下，去看 [UtilBoxx 的图片工具集](/zh/tools/image)，你会找到一个完整的、隐私优先的图片处理工具箱 —— 全部在浏览器里完成。`;

const compressJa = `## なぜ画像を圧縮するのか？

あなたが訪れるすべてのウェブサイトは画像を読み込みます。あなたが送るすべてのメールは画像を運ぶ可能性があります。すべてのスマホバックアップは画像を保存します。そして、そのすべての画像は本来必要なサイズよりも大きくなっています。典型的なスマホ写真は 4〜8 MB、ミラーレス一眼で撮った商品写真は 25 MB に達し、4K スクリーンショットは 30 MB になり得ます。そのサイズの大部分は、人間の目には見えない無駄なデータです。

画像を圧縮することは、サイトを速くし、メールを送信可能にし、ストレージ料金を下げるためにできる最も費用対効果の高いことのひとつです。4 MB の写真は、適切な設定で 400 KB まで落とせます — 90% の削減 — 見た目には品質低下を感じません。

人が画像を圧縮する理由は実際的でしかも頻繁です：

- **ウェブサイトを高速化**：Google はページ読み込み速度をランキング要因の一部としており、画像は通常最大の貢献者です。画像が小さい = ページが速い = SEO とコンバージョンが向上。
- **メール添付**：Gmail は 25 MB、Outlook は 20 MB、多くの企業サーバーは 10 MB が上限。圧縮していない写真が数枚あれば弾かれます。
- **ストレージ節約**：256 GB のスマホもすぐ埋まります。5 万枚の写真ライブラリが 1 枚 4 MB なら 200 GB、400 KB なら 20 GB です。
- **ソーシャルメディアへのアップロード**：Instagram、X、LinkedIn はすべてアップロードを再圧縮するため、大きくてロッシーなファイルを送るより、小さくて高品質なオリジナルを送るほうが良い結果になります。
- **帯域コスト**：大量の画像を配信するサイトを運営している場合、1 KB ごとに CDN 料金がかかります。
- **共有を高速化**：WhatsApp、Slack、AirDrop はいずれも小さなファイルでサクサク動きます。

良いニュースは、適切なツールを使えば画像の圧縮は 10 秒で終わり、何もインストールする必要がないことです。

## 方法 1：UtilBoxx の無料画像圧縮ツール（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の画像圧縮ツール](/ja/tools/image/compress) です。完全にブラウザ内で動作するため、写真がデバイスの外に出ることがありません。アップロードも登録も不要で、透かしも入りません。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/image/compress](/ja/tools/image/compress) を開く
2. アップロード領域をクリックして JPG、PNG、WebP を選択（またはドラッグ＆ドロップ）
3. モードを選択：**ロッシー**（最小サイズ、わずかな品質低下）、**ロスレス**（品質低下なし、そこそこ縮小）、**目標サイズ**（KB 目標を指定すると自動調整）
4. 必要なら品質スライダーを調整
5.「圧縮」をクリック
6. 結果をダウンロード（複数なら zip）

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべての処理がブラウザ内で完結。写真はサーバーへ送信されません
- **3 つのモード**：最小化のロッシー、完璧なロスレス、厳格な上限の目標サイズ
- **マルチフォーマット**：JPG、PNG、WebP を同じツールで
- **バッチ処理に対応**：20 枚ドロップして一括処理
- **出力に透かしなし**

たまに画像を圧縮するだけなら、これほど低コストな選択肢はありません。ブラウザベースなので、Windows、Mac、Linux、ChromeOS、iOS、Android で動作します。

## 方法 2：Adobe Photoshop（有料）

Photoshop は画像編集のヘビー級で、その「Web 用に保存」（古いバージョン）または「書き出し > Web 用に保存（レガシー）」ダイアログは、きめ細かい圧縮のゴールドスタンダードです。オリジナルと圧縮版を左右で比較したり、品質を選んだり、JPG / PNG / WebP / GIF を選んだり、出力サイズを設定したり、ファイルサイズの変化をリアルタイムで見られます。

ただし価格と複雑さがあります。Photoshop は Creative Cloud サブスクリプションの一部で、月額約 **$22.99**（年額約 $240）。たまの圧縮にはオーバースペックで、スライダーだけが目的なら学習曲線が急です。

既にレタッチ、合成、デザインのために Photoshop を使っているなら価値があります。圧縮だけが目的であれば、ブラウザツールで十分です。請求書もインストールも不要です。

## 方法 3：コマンドラインで ImageMagick

ターミナルに慣れているなら、オープンソースの **ImageMagick** が最も強力な画像圧縮 CLI オプションです。Homebrew でインストール（\`brew install imagemagick\`）したら：

\`\`\`bash
# JPG を品質 80 に圧縮（バランス良好）
magick input.jpg -quality 80 output.jpg

# サムネイル用に強気に圧縮
magick input.jpg -quality 60 -resize 800x output.jpg

# PNG をロスレス圧縮
magick input.png -strip -define png:compression-level=9 output.png

# 品質 75 で WebP に変換
magick input.jpg -quality 75 output.webp

# フォルダ内の全 JPG を圧縮
for f in *.jpg; do magick "$f" -quality 80 "compressed_$f"; done
\`\`\`

\`-quality\` フラグは JPG と WebP ではパーセンテージです（高いほど高品質でファイル大）。PNG では \`png:compression-level\` が 0〜9、9 が最小です。\`-strip\` フラグはメタデータ（EXIF、GPS、カメラ情報）を削除し、さらに 5〜15% 縮小できます。

**ImageMagick** は数千ファイルのバッチ圧縮スクリプトに優れています。GUI のないヘッドレスサーバーで動作する唯一の選択肢でもあります。

## よくある質問

### 画像を圧縮すると品質は落ちますか？

モードによります。**ロッシー**圧縮（JPG、品質 100 未満の WebP）は数学的には品質を落としますが、品質 80〜85 では通常の視聴距離で人間の目に違いはわかりません。**ロスレス**圧縮（PNG、WebP のロスレスモード）はファイルを 10〜30% 縮小し、ピクセルは完全に維持されます。

### JPG はどこまで圧縮できますか？

カメラの JPG は通常、見た目で 60〜80% 圧縮できます。4 MB の写真は典型的には 500 KB〜1 MB になります。スクリーンショットはさらに圧縮でき、90% 以上になることもよくあります。

### JPG、PNG、WebP のどれを使うべきですか？

- **JPG**：写真（数百万色、ロッシーで OK）
- **PNG**：スクリーンショット、ロゴ、テキストを含む画像、透明が必要なもの
- **WebP**：ウェブ向け（両者より小さく、2020 年以降のすべてのモダンブラウザでサポート）

### PNG をロスレスで圧縮できますか？

はい。デザインツールから書き出した PNG には大量のメタデータと非効率な圧縮が含まれていることが多いです。UtilBoxx や \`pngcrush\` を通すと、ピクセルそのままで 10〜30% 縮小できます。

### オンラインの画像圧縮ツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、写真がリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人情報、財務、医療、その他の機密性の高い写真を、信頼できない圧縮ツールにアップロードしないでください。

### ロッシー圧縮とロスレス圧縮の違いは何ですか？

**ロッシー**圧縮（JPG、WebP ロッシー）は人間の目がほとんど気づかない画像データを捨て去り、10:1 以上の圧縮が可能です。**ロスレス**圧縮（PNG、WebP ロスレス）はすべてのピクセルをそのまま保持し、通常 2:1〜3:1 の圧縮にとどまります。

## まとめ

画像の圧縮は頻繁に行う小さな作業であり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料画像圧縮ツール](/ja/tools/image/compress) は明白な選択です：プライベートで、速くて、無料で、登録不要、透かしなし。

既に Photoshop を常用しているデザイナーなら、「Web 用に保存」が最も細かい制御を提供します。バッチ処理のスクリプトを書くなら、ターミナルで ImageMagick が最強です。無料の Photoshop 代替 GIMP にも同様のエクスポートダイアログがあります。

その他は、[UtilBoxx の画像ツール](/ja/tools/image) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先の画像ツールキットが見つかります。`;

const compressEs = `## ¿Por qué comprimir imágenes?

Cada sitio web que visitas carga imágenes. Cada correo que envías puede llevarlas. Cada copia de seguridad del teléfono las almacena. Y todas esas imágenes son más grandes de lo que necesitan ser. Una foto típica de móvil es de 4-8 MB. Una foto de producto de una cámara sin espejo puede llegar a 25 MB. Una captura de pantalla 4K puede alcanzar 30 MB. La mayor parte de ese tamaño son datos que tus ojos no ven.

Comprimir imágenes es una de las cosas con mayor impacto que puedes hacer para que tu sitio sea más rápido, tus correos se puedan enviar y tu factura de almacenamiento baje. Una foto de 4 MB comprimida con la configuración adecuada puede bajar a 400 KB — una reducción del 90% — sin pérdida visible de calidad.

Las razones por las que la gente comprime imágenes son prácticas y frecuentes:

- **Sitios web más rápidos**: Google posiciona las páginas en parte por la velocidad de carga, y las imágenes suelen ser la mayor contribución. Imágenes más pequeñas = páginas más rápidas = mejor SEO y conversión.
- **Adjuntos de correo**: Gmail limita a 25 MB, Outlook a 20 MB, y muchos servidores corporativos a 10 MB. Unas pocas fotos sin comprimir rebotarán.
- **Ahorro de almacenamiento**: Un móvil de 256 GB se llena rápido. Una biblioteca de 50.000 imágenes a 4 MB cada una son 200 GB; a 400 KB cada una, son 20 GB.
- **Subidas a redes sociales**: Instagram, X y LinkedIn recomprimen las subidas, así que enviar un original más pequeño y de mayor calidad a menudo supera a enviar un archivo grande con pérdida.
- **Costes de ancho de banda**: Si tienes un sitio que sirve muchas imágenes, cada kilobyte cuesta dinero real en tarifas de CDN.
- **Compartir más rápido**: WhatsApp, Slack y AirDrop se sienten más ágiles con archivos pequeños.

La buena noticia: con la herramienta adecuada, comprimir una imagen es un trabajo de 10 segundos y no requiere instalar nada.

## Método 1: Usa el compresor de imágenes gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de comprimir imágenes es la [herramienta de compresión de imágenes de UtilBoxx](/es/tools/image/compress). Se ejecuta por completo en tu navegador, por lo que tus fotos nunca salen de tu dispositivo. Sin subidas, sin registro y sin marca de agua en el resultado.

Así se usa:

1. Ve a [utilboxx.com/es/tools/image/compress](/es/tools/image/compress)
2. Haz clic en el área de subida y selecciona tu JPG, PNG o WebP (o arrástralo)
3. Elige un modo: **con pérdida** (archivo más pequeño, ligera pérdida de calidad), **sin pérdida** (sin pérdida, reducción moderada), o **tamaño objetivo** (estableces un KB, la herramienta ajusta)
4. Ajusta el control deslizante de calidad si quieres control fino
5. Haz clic en "Comprimir"
6. Descarga el resultado (o todos como zip)

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. Tus fotos nunca llegan a un servidor.
- **Tres modos**: con pérdida para archivo mínimo, sin pérdida para píxel perfecto, tamaño objetivo para límites estrictos
- **Multi-formato**: JPG, PNG y WebP en la misma herramienta
- **Apto para lotes**: suelta 20 imágenes y procésalas todas a la vez
- **Sin marcas de agua** en la salida

Si solo necesitas comprimir imágenes de vez en cuando, esta es la opción de menor fricción con diferencia. Y como es basada en navegador, funciona en Windows, Mac, Linux, ChromeOS, iOS y Android.

## Método 2: Adobe Photoshop (De pago)

Photoshop es el peso pesado de la edición de imágenes, y su diálogo "Guardar para web" (en versiones antiguas) o "Exportar > Guardar para web (heredado)" es el estándar de oro para la compresión detallada. Puedes comparar las versiones original y comprimida lado a lado, elegir un nivel de calidad, escoger entre JPG, PNG, WebP y GIF, fijar las dimensiones de salida y ver el tamaño del archivo actualizarse en tiempo real.

El inconveniente es el precio y la complejidad. Photoshop forma parte de una suscripción a Creative Cloud que cuesta aproximadamente **$22,99 al mes** (unos $240 al año). Para una compresión puntual es excesivo, y la curva de aprendizaje es pronunciada si solo necesitas un deslizador.

Photoshop solo vale la pena si ya lo usas para retoque, composición o diseño. Si comprimir es todo lo que necesitas, una herramienta de navegador hace el trabajo sin factura ni instalación.

## Método 3: Línea de comandos con ImageMagick

Si te manejas en la terminal, la herramienta de código abierto **ImageMagick** es la opción CLI más potente para compresión de imágenes. Instálala con Homebrew (\`brew install imagemagick\`), luego:

\`\`\`bash
# Comprimir un JPG a calidad 80 (buen equilibrio)
magick input.jpg -quality 80 output.jpg

# Compresión agresiva para miniaturas
magick input.jpg -quality 60 -resize 800x output.jpg

# Compresión sin pérdida para PNG
magick input.png -strip -define png:compression-level=9 output.png

# Convertir a WebP con calidad 75
magick input.jpg -quality 75 output.webP

# Comprimir todos los JPG de una carpeta
for f in *.jpg; do magick "$f" -quality 80 "compressed_$f"; done
\`\`\`

La bandera \`-quality\` es un porcentaje para JPG y WebP (más alto = mejor, archivo más grande). Para PNG, \`png:compression-level\` va de 0 a 9, siendo 9 el más pequeño. La bandera \`-strip\` elimina metadatos (EXIF, GPS, datos de cámara) lo que puede reducir el archivo otro 5-15%.

**ImageMagick** es excelente para programar compresión por lotes a través de miles de archivos. También es la única opción que funciona en un servidor headless sin GUI.

## Preguntas frecuentes

### ¿Comprimir una imagen reduce la calidad?

Depende del modo. La compresión **con pérdida** (JPG, WebP con calidad inferior a 100) sí reduce la calidad matemáticamente, pero a calidad 80-85 la diferencia es invisible al ojo humano a distancia normal de visualización. La compresión **sin pérdida** (PNG o WebP sin pérdida) reduce el archivo 10-30% sin cambio de píxel.

### ¿Cuánto puedo comprimir un JPG?

La mayoría de JPG de cámara se pueden comprimir 60-80% sin pérdida visible de calidad. Una foto de 4 MB típicamente baja a 500 KB-1 MB. Las capturas de pantalla se comprimen aún más, a menudo 90%+.

### ¿Debería usar JPG, PNG o WebP?

- **JPG** para fotos (millones de colores, la pérdida está bien)
- **PNG** para capturas, logos, imágenes con texto, o cualquier cosa que necesite transparencia
- **WebP** para la web (más pequeño que ambos, soportado por todos los navegadores modernos desde 2020)

### ¿Puedo comprimir un PNG sin pérdida?

Sí. Los PNG de herramientas de diseño suelen tener muchos metadatos y compresión ineficiente. Pasarlos por una herramienta como UtilBoxx o \`pngcrush\` reduce el archivo 10-30% sin cambio de píxel.

### ¿Es seguro usar un compresor de imágenes online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador** — sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tus fotos se están subiendo a un servidor remoto y lee atentamente su política de privacidad. Evita subir fotos personales, financieras, médicas o de otro modo sensibles a un compresor en el que no confías.

### ¿Cuál es la diferencia entre compresión con pérdida y sin pérdida?

La compresión **con pérdida** (JPG, WebP con pérdida) tira datos de imagen que el ojo humano apenas nota. Puede lograr 10:1 o mejor. La compresión **sin pérdida** (PNG, WebP sin pérdida) preserva cada píxel exactamente y típicamente logra 2:1 a 3:1.

## Conclusión

Comprimir imágenes es una de esas pequeñas tareas que aparecen constantemente y no deberían requerir una suscripción de pago o instalar software. Para la mayoría de la gente, la [herramienta gratuita de compresión de imágenes de UtilBoxx](/es/tools/image/compress) es la opción obvia: es privada, rápida y gratis, sin registro y sin marca de agua.

Si eres diseñador y ya vives en Photoshop, "Guardar para web" te da el control más fino. Si estás programando trabajo por lotes, ImageMagick en la terminal es imbatible. Y GIMP, la alternativa gratuita a Photoshop, tiene un diálogo de exportación similar a coste cero.

Para todo lo demás, visita las [herramientas de imagen de UtilBoxx](/es/tools/image) y encontrarás un conjunto completo de herramientas para trabajar con imágenes, con privacidad como prioridad, todo en tu navegador.`;

const compressPt = `## Por que comprimir imagens?

Cada site que você visita carrega imagens. Cada e-mail que você envia pode carregá-las. Cada backup de celular as armazena. E todas essas imagens são maiores do que precisam ser. Uma foto típica de celular é de 4-8 MB. Uma foto de produto de uma câmera mirrorless pode chegar a 25 MB. Um print 4K pode atingir 30 MB. A maior parte desse tamanho é dado que seus olhos não veem.

Comprimir imagens é uma das coisas de maior impacto que você pode fazer para deixar seu site mais rápido, seus e-mails enviáveis e sua conta de armazenamento menor. Uma foto de 4 MB comprimida com as configurações certas pode cair para 400 KB — uma redução de 90% — sem perda visível de qualidade.

Os motivos pelos quais as pessoas comprimem imagens são práticos e frequentes:

- **Sites mais rápidos**: O Google classifica páginas em parte pela velocidade de carregamento, e imagens costumam ser a maior contribuição. Imagens menores = páginas mais rápidas = melhor SEO e conversão.
- **Anexos de e-mail**: O Gmail limita a 25 MB, o Outlook a 20 MB, e muitos servidores corporativos a 10 MB. Algumas fotos sem compressão vão voltar.
- **Economia de armazenamento**: Um celular de 256 GB enche rápido. Uma biblioteca de 50.000 imagens a 4 MB cada são 200 GB; a 400 KB cada, são 20 GB.
- **Uploads em redes sociais**: Instagram, X e LinkedIn recomprimem os uploads, então enviar um original menor e de maior qualidade muitas vezes supera enviar um arquivo grande com perda.
- **Custos de banda**: Se você roda um site que serve muitas imagens, cada kilobyte custa dinheiro real em taxas de CDN.
- **Compartilhamento mais rápido**: WhatsApp, Slack e AirDrop ficam mais ágeis com arquivos menores.

A boa notícia: com a ferramenta certa, comprimir uma imagem é um trabalho de 10 segundos e você não precisa instalar nada.

## Método 1: Use o compressor de imagens grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de comprimir imagens é a [ferramenta de compressão de imagens do UtilBoxx](/pt/tools/image/compress). Ela roda inteiramente no seu navegador, então suas fotos nunca saem do seu dispositivo. Sem upload, sem cadastro e sem marca d'água no resultado.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/image/compress](/pt/tools/image/compress)
2. Clique na área de upload e selecione seu JPG, PNG ou WebP (ou arraste e solte)
3. Escolha um modo: **com perda** (arquivo menor, leve perda de qualidade), **sem perda** (sem perda de qualidade, redução moderada), ou **tamanho alvo** (você define um KB, a ferramenta ajusta)
4. Ajuste o controle deslizante de qualidade se quiser controle fino
5. Clique em "Comprimir"
6. Baixe o resultado (ou todos como zip)

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. Suas fotos nunca chegam a um servidor.
- **Três modos**: com perda para arquivo mínimo, sem perda para pixel perfeito, tamanho alvo para limites rígidos
- **Multi-formato**: JPG, PNG e WebP na mesma ferramenta
- **Amigo de lotes**: solte 20 imagens e processe todas de uma vez
- **Sem marcas d'água** na saída

Se você só precisa comprimir imagens de vez em quando, essa é a opção de menor atrito disparado. E como é baseada em navegador, funciona em Windows, Mac, Linux, ChromeOS, iOS e Android.

## Método 2: Adobe Photoshop (Pago)

Photoshop é o peso-pesado da edição de imagens, e seu diálogo "Salvar para Web" (em versões antigas) ou "Exportar > Salvar para Web (legado)" é o padrão-ouro para compressão detalhada. Você pode comparar as versões original e comprimida lado a lado, escolher um nível de qualidade, escolher entre JPG, PNG, WebP e GIF, definir as dimensões de saída e ver o tamanho do arquivo atualizar em tempo real.

O problema é o preço e a complexidade. Photoshop faz parte de uma assinatura Creative Cloud que custa cerca de **$22,99 por mês** (aproximadamente $240 por ano). Para uma compressão pontual é exagero, e a curva de aprendizado é íngreme se você só precisa de um controle deslizante.

Photoshop vale a pena apenas se você já o usa para retoque, composição ou design. Se compressão é tudo o que você precisa, uma ferramenta baseada em navegador faz o trabalho sem fatura nem instalação.

## Método 3: Linha de comando com ImageMagick

Se você se sente confortável no terminal, a ferramenta open-source **ImageMagick** é a opção CLI mais poderosa para compressão de imagens. Instale com Homebrew (\`brew install imagemagick\`), depois:

\`\`\`bash
# Comprimir um JPG para qualidade 80 (bom equilíbrio)
magick input.jpg -quality 80 output.jpg

# Compressão agressiva para miniaturas
magick input.jpg -quality 60 -resize 800x output.jpg

# Compressão sem perda para PNG
magick input.png -strip -define png:compression-level=9 output.png

# Converter para WebP com qualidade 75
magick input.jpg -quality 75 output.webp

# Comprimir todos os JPG de uma pasta
for f in *.jpg; do magick "$f" -quality 80 "compressed_$f"; done
\`\`\`

A flag \`-quality\` é uma porcentagem para JPG e WebP (maior = melhor, arquivo maior). Para PNG, \`png:compression-level\` vai de 0 a 9, sendo 9 o menor. A flag \`-strip\` remove metadados (EXIF, GPS, dados da câmera), o que pode reduzir o arquivo em mais 5-15%.

**ImageMagick** é excelente para programar compressão em lotes através de milhares de arquivos. Também é a única opção que funciona em um servidor headless sem GUI.

## Perguntas frequentes

### Comprimir uma imagem reduz a qualidade?

Depende do modo. A compressão **com perda** (JPG, WebP com qualidade inferior a 100) reduz a qualidade matematicamente, mas a qualidade 80-85 a diferença é invisível ao olho humano na distância normal de visualização. A compressão **sem perda** (PNG ou WebP sem perda) reduz o arquivo em 10-30% sem mudança de pixel.

### Quanto posso comprimir um JPG?

A maioria dos JPGs de câmera pode ser comprimida em 60-80% sem perda visível de qualidade. Uma foto de 4 MB tipicamente cai para 500 KB-1 MB. Capturas de tela comprimem ainda mais, frequentemente 90%+.

### Devo usar JPG, PNG ou WebP?

- **JPG** para fotos (milhões de cores, perda é ok)
- **PNG** para capturas, logos, imagens com texto, ou qualquer coisa que precise de transparência
- **WebP** para a web (menor que ambos, suportado por todos os navegadores modernos desde 2020)

### Posso comprimir um PNG sem perda?

Sim. PNGs de ferramentas de design costumam ter muitos metadados e compressão ineficiente. Passá-los por uma ferramenta como UtilBoxx ou \`pngcrush\` reduz o arquivo em 10-30% sem mudança de pixel.

### É seguro usar um compressor de imagens online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que suas fotos estão sendo enviadas para um servidor remoto e leia atentamente sua política de privacidade. Evite enviar fotos pessoais, financeiras, médicas ou de outro modo sensíveis para um compressor em que você não confia.

### Qual a diferença entre compressão com perda e sem perda?

A compressão **com perda** (JPG, WebP com perda) descarta dados de imagem que o olho humano mal nota. Pode atingir 10:1 ou melhor. A compressão **sem perda** (PNG, WebP sem perda) preserva cada pixel exatamente e tipicamente atinge 2:1 a 3:1.

## Conclusão

Comprimir imagens é uma daquelas pequenas tarefas que surgem constantemente e não deveriam exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, a [ferramenta gratuita de compressão de imagens do UtilBoxx](/pt/tools/image/compress) é a escolha óbvia: é privada, rápida e grátis, sem cadastro e sem marca d'água.

Se você é designer e já vive no Photoshop, "Salvar para Web" dá o controle mais fino. Se você está programando trabalho em lote, ImageMagick no terminal é imbatível. E o GIMP, a alternativa gratuita ao Photoshop, tem um diálogo de exportação similar a custo zero.

Para todo o resto, visite as [ferramentas de imagem do UtilBoxx](/pt/tools/image) e você encontrará um conjunto completo de ferramentas para trabalhar com imagens, com privacidade como prioridade, tudo no seu navegador.`;

const compressFr = `## Pourquoi compresser les images ?

Chaque site que vous visitez charge des images. Chaque e-mail que vous envoyez peut en transporter. Chaque sauvegarde de téléphone les stocke. Et toutes ces images sont plus grosses qu'elles ne devraient l'être. Une photo typique de téléphone fait 4-8 Mo. Une photo produit d'un hybride peut atteindre 25 Mo. Une capture d'écran 4K peut faire 30 Mo. La majeure partie de ce volume correspond à des données que vos yeux ne voient pas.

Compresser des images est l'une des actions au meilleur retour que vous puissiez mener pour accélérer votre site, rendre vos e-mails envoyables et faire baisser votre facture de stockage. Une photo de 4 Mo compressée avec les bons réglages peut tomber à 400 Ko — une réduction de 90 % — sans perte de qualité visible.

Les raisons pour lesquelles les gens compressent des images sont pratiques et fréquentes :

- **Sites plus rapides** : Google classe les pages en partie sur la vitesse de chargement, et les images en sont souvent la plus grande contribution. Images plus petites = pages plus rapides = meilleur SEO et taux de conversion.
- **Pièces jointes e-mail** : Gmail plafonne à 25 Mo, Outlook à 20 Mo, et beaucoup de serveurs d'entreprise à 10 Mo. Quelques photos non compressées seront refusées.
- **Économie de stockage** : Un téléphone de 256 Go se remplit vite. Une photothèque de 50 000 images à 4 Mo chacune fait 200 Go ; à 400 Ko, cela fait 20 Go.
- **Uploads sur les réseaux sociaux** : Instagram, X et LinkedIn recompressent tous les uploads, donc envoyer un original plus petit et de meilleure qualité bat souvent l'envoi d'un gros fichier avec perte.
- **Coûts de bande passante** : Si vous gérez un site qui sert beaucoup d'images, chaque kilooctet coûte réellement de l'argent en frais de CDN.
- **Partage plus rapide** : WhatsApp, Slack et AirDrop sont plus réactifs avec des fichiers plus petits.

Bonne nouvelle : avec le bon outil, compresser une image est un travail de 10 secondes et vous n'avez rien à installer.

## Méthode 1 : Utiliser le compresseur d'images gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de compresser des images est l'[outil de compression d'images de UtilBoxx](/fr/tools/image/compress). Il s'exécute entièrement dans votre navigateur, donc vos photos ne quittent jamais votre appareil. Pas de téléversement, pas d'inscription, pas de filigrane sur le résultat.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/image/compress](/fr/tools/image/compress)
2. Cliquez sur la zone de téléversement et sélectionnez votre JPG, PNG ou WebP (ou glissez-déposez)
3. Choisissez un mode : **avec perte** (fichier minimal, légère perte de qualité), **sans perte** (aucune perte, réduction modérée), ou **taille cible** (vous fixez un Ko, l'outil ajuste)
4. Ajustez le curseur de qualité si vous voulez un contrôle fin
5. Cliquez sur « Compresser »
6. Téléchargez le résultat (ou tous les résultats en zip)

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Vos photos n'arrivent jamais sur un serveur.
- **Trois modes** : avec perte pour le fichier minimal, sans perte pour le pixel parfait, taille cible pour des limites strictes
- **Multi-format** : JPG, PNG et WebP dans le même outil
- **Compatible lots** : déposez 20 images et traitez-les toutes en même temps
- **Aucun filigrane** sur la sortie

Si vous n'avez besoin de compresser des images qu'occasionnellement, c'est de loin l'option la plus simple. Et comme c'est basé navigateur, cela fonctionne sur Windows, Mac, Linux, ChromeOS, iOS et Android.

## Méthode 2 : Adobe Photoshop (Payant)

Photoshop est le poids lourd de l'édition d'images, et sa boîte de dialogue « Enregistrer pour le web » (dans les anciennes versions) ou « Exporter > Enregistrer pour le web (hérité) » est la référence en matière de compression fine. Vous pouvez comparer les versions originale et compressée côte à côte, choisir un niveau de qualité, choisir entre JPG, PNG, WebP et GIF, fixer les dimensions de sortie et voir la taille du fichier se mettre à jour en temps réel.

Le hic, c'est le prix et la complexité. Photoshop fait partie d'un abonnement Creative Cloud qui coûte environ **22,99 $ par mois** (environ 240 $ par an). Pour une compression ponctuelle c'est disproportionné, et la courbe d'apprentissage est raide si vous n'avez besoin que d'un curseur.

Photoshop ne vaut le coup que si vous l'utilisez déjà pour la retouche, le compositing ou le design. Si la compression est tout ce dont vous avez besoin, un outil en navigateur fait le travail sans facture ni installation.

## Méthode 3 : Ligne de commande avec ImageMagick

Si vous êtes à l'aise dans un terminal, l'outil open-source **ImageMagick** est l'option CLI la plus puissante pour la compression d'images. Installez-le avec Homebrew (\`brew install imagemagick\`), puis :

\`\`\`bash
# Compresser un JPG en qualité 80 (bon équilibre)
magick input.jpg -quality 80 output.jpg

# Compression agressive pour vignettes
magick input.jpg -quality 60 -resize 800x output.jpg

# Compression sans perte pour PNG
magick input.png -strip -define png:compression-level=9 output.png

# Convertir en WebP à qualité 75
magick input.jpg -quality 75 output.webp

# Compresser tous les JPG d'un dossier
for f in *.jpg; do magick "$f" -quality 80 "compressed_$f"; done
\`\`\`

Le flag \`-quality\` est un pourcentage pour JPG et WebP (plus haut = meilleur, fichier plus gros). Pour PNG, \`png:compression-level\` va de 0 à 9, 9 étant le plus petit. Le flag \`-strip\` supprime les métadonnées (EXIF, GPS, infos appareil), ce qui peut réduire encore le fichier de 5-15 %.

**ImageMagick** est excellent pour scripter la compression par lots sur des milliers de fichiers. C'est aussi la seule option qui fonctionne sur un serveur headless sans GUI.

## Questions fréquentes

### Compresser une image réduit-il la qualité ?

Ça dépend du mode. La compression **avec perte** (JPG, WebP avec qualité sous 100) réduit bien la qualité mathématiquement, mais à qualité 80-85 la différence est invisible à l'œil humain à distance normale de visualisation. La compression **sans perte** (PNG ou WebP sans perte) réduit le fichier de 10-30 % sans changement de pixel.

### De combien puis-je compresser un JPG ?

La plupart des JPG d'appareil photo peuvent être compressés de 60-80 % sans perte visible de qualité. Une photo de 4 Mo descend typiquement à 500 Ko-1 Mo. Les captures d'écran se compressent encore plus, souvent 90 %+.

### Dois-je utiliser JPG, PNG ou WebP ?

- **JPG** pour les photos (des millions de couleurs, la perte est OK)
- **PNG** pour les captures, logos, images avec texte, ou tout ce qui nécessite de la transparence
- **WebP** pour le web (plus petit que les deux, supporté par tous les navigateurs modernes depuis 2020)

### Puis-je compresser un PNG sans perte ?

Oui. Les PNG issus d'outils de design ont souvent beaucoup de métadonnées et une compression inefficace. Les passer dans un outil comme UtilBoxx ou \`pngcrush\` réduit le fichier de 10-30 % sans changement de pixel.

### Est-il sûr d'utiliser un compresseur d'images en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que vos photos sont téléversées sur un serveur distant et lisez attentivement leur politique de confidentialité. Évitez de téléverser des photos personnelles, financières, médicales ou autrement sensibles sur un compresseur en qui vous n'avez pas confiance.

### Quelle est la différence entre compression avec perte et sans perte ?

La compression **avec perte** (JPG, WebP avec perte) jette des données d'image que l'œil humain remarque à peine. Elle peut atteindre 10:1 ou mieux. La compression **sans perte** (PNG, WebP sans perte) préserve chaque pixel à l'identique et atteint typiquement 2:1 à 3:1.

## Conclusion

Compresser des images est l'une de ces petites tâches qui reviennent constamment et ne devraient pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, l'[outil gratuit de compression d'images de UtilBoxx](/fr/tools/image/compress) est le choix évident : privé, rapide, gratuit, sans inscription ni filigrane.

Si vous êtes designer et vivez déjà dans Photoshop, « Enregistrer pour le web » vous offre le contrôle le plus fin. Si vous scriptz du travail par lots, ImageMagick dans le terminal est imbattable. Et GIMP, l'alternative gratuite à Photoshop, propose un dialogue d'export similaire à coût zéro.

Pour tout le reste, rendez-vous sur les [outils image de UtilBoxx](/fr/tools/image) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const compressDe = `## Warum Bilder komprimieren?

Jede Website, die du besuchst, lädt Bilder. Jede E-Mail, die du sendest, kann welche mitführen. Jedes Telefon-Backup speichert sie. Und all diese Bilder sind größer, als sie sein müssten. Ein typisches Handyfoto ist 4-8 MB. Ein Produktfoto aus einer spiegellosen Kamera kann 25 MB erreichen. Ein 4K-Screenshot kann 30 MB groß sein. Der größte Teil dieser Größe sind Daten, die deine Augen nicht sehen.

Bilder zu komprimieren gehört zu den wirkungsvollsten Dingen, die du tun kannst, um deine Website schneller zu machen, deine E-Mails verschickbar zu halten und deine Speicherrechnung zu senken. Ein 4-MB-Foto, mit den richtigen Einstellungen komprimiert, kann auf 400 KB schrumpfen — eine Reduktion um 90 % — ohne sichtbaren Qualitätsverlust.

Die Gründe, warum Menschen Bilder komprimieren, sind praktisch und häufig:

- **Schnellere Websites**: Google bewertet Seiten teilweise nach Ladegeschwindigkeit, und Bilder sind meist der größte Beitrag. Kleinere Bilder = schnellere Seiten = besseres SEO und Conversion.
- **E-Mail-Anhänge**: Gmail begrenzt auf 25 MB, Outlook auf 20 MB, viele Firmen-Server auf 10 MB. Ein paar unkomprimierte Fotos werden abgewiesen.
- **Speicherersparnis**: Ein 256-GB-Handy ist schnell voll. Eine Fotobibliothek mit 50.000 Bildern à 4 MB ist 200 GB; à 400 KB sind es 20 GB.
- **Social-Media-Uploads**: Instagram, X und LinkedIn komprimieren Uploads neu, deshalb schlägt das Senden eines kleineren, qualitativ besseren Originals oft das Senden einer großen verlustbehafteten Datei.
- **Bandbreitenkosten**: Wenn du eine Seite betreibst, die viele Bilder ausliefert, kostet jedes Kilobyte echtes Geld bei CDN-Gebühren.
- **Schnelleres Teilen**: WhatsApp, Slack und AirDrop fühlen sich mit kleineren Dateien reaktionsschneller an.

Die gute Nachricht: Mit dem richtigen Werkzeug ist das Komprimieren eines Bildes eine 10-Sekunden-Aufgabe, und du musst nichts installieren.

## Methode 1: Den kostenlosen Bildkompressor von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode, Bilder zu komprimieren, ist das [Bildkomprimierungswerkzeug von UtilBoxx](/de/tools/image/compress). Es läuft vollständig in deinem Browser, sodass deine Fotos dein Gerät nie verlassen. Kein Upload, keine Registrierung, kein Wasserzeichen im Ergebnis.

So verwendest du es:

1. Gehe zu [utilboxx.com/de/tools/image/compress](/de/tools/image/compress)
2. Klicke auf den Upload-Bereich und wähle deine JPG, PNG oder WebP (oder ziehe sie per Drag & Drop)
3. Wähle einen Modus: **Verlustbehaftet** (kleinste Datei, leichter Qualitätsverlust), **Verlustfrei** (kein Qualitätsverlust, moderate Verkleinerung), oder **Zielgröße** (du setzt ein KB-Ziel, das Werkzeug passt an)
4. Stelle den Qualitätsregler fein ein, falls gewünscht
5. Klicke auf „Komprimieren"
6. Lade das Ergebnis herunter (oder alle als ZIP)

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in deinem Browser verarbeitet. Deine Fotos erreichen nie einen Server.
- **Drei Modi**: Verlustbehaftet für minimale Datei, Verlustfrei für perfekte Pixel, Zielgröße für harte Limits
- **Multi-Format**: JPG, PNG und WebP im selben Werkzeug
- **Stapelfähig**: Wirf 20 Bilder rein und verarbeite sie alle auf einmal
- **Keine Wasserzeichen** in der Ausgabe

Wenn du nur gelegentlich Bilder komprimierst, ist dies die reibungsloseste Option. Und weil es browserbasiert ist, läuft es auf Windows, Mac, Linux, ChromeOS, iOS und Android.

## Methode 2: Adobe Photoshop (Kostenpflichtig)

Photoshop ist das Schwergewicht der Bildbearbeitung, und sein Dialog „Für Web speichern" (in älteren Versionen) oder „Exportieren > Für Web speichern (Legacy)" ist der Goldstandard für fein abgestimmte Komprimierung. Du kannst Original und komprimierte Version nebeneinander vergleichen, eine Qualitätsstufe wählen, zwischen JPG, PNG, WebP und GIF wählen, die Ausgabeabmessungen festlegen und die Dateigröße in Echtzeit aktualisieren sehen.

Der Haken ist der Preis und die Komplexität. Photoshop ist Teil eines Creative-Cloud-Abonnements, das ungefähr **22,99 $ pro Monat** (etwa 240 $ pro Jahr) kostet. Für eine gelegentliche Komprimierung ist das übertrieben, und die Lernkurve ist steil, wenn du nur einen Schieberegler brauchst.

Photoshop lohnt sich nur, wenn du es bereits für Retusche, Compositing oder Design nutzt. Wenn Komprimierung alles ist, was du brauchst, erledigt ein Browser-Werkzeug die Arbeit ohne Rechnung und ohne Installation.

## Methode 3: Kommandozeile mit ImageMagick

Wenn du dich im Terminal wohlfühlst, ist das Open-Source-Werkzeug **ImageMagick** die leistungsfähigste CLI-Option für Bildkomprimierung. Installiere es mit Homebrew (\`brew install imagemagick\`), dann:

\`\`\`bash
# JPG auf Qualität 80 komprimieren (gute Balance)
magick input.jpg -quality 80 output.jpg

# Aggressive Komprimierung für Thumbnails
magick input.jpg -quality 60 -resize 800x output.jpg

# Verlustfreie PNG-Komprimierung
magick input.png -strip -define png:compression-level=9 output.png

# In WebP mit Qualität 75 konvertieren
magick input.jpg -quality 75 output.webp

# Alle JPGs in einem Ordner komprimieren
for f in *.jpg; do magick "$f" -quality 80 "compressed_$f"; done
\`\`\`

Das Flag \`-quality\` ist für JPG und WebP ein Prozentsatz (höher = besser, größere Datei). Für PNG reicht \`png:compression-level\` von 0 bis 9, wobei 9 am kleinsten ist. Das Flag \`-strip\` entfernt Metadaten (EXIF, GPS, Kamerainfos), was die Datei nochmal um 5-15 % verkleinern kann.

**ImageMagick** eignet sich hervorragend, um Stapelkomprimierung über Tausende von Dateien zu skripten. Es ist auch die einzige Option, die auf einem kopflosen Server ohne GUI funktioniert.

## Häufige Fragen

### Verringert das Komprimieren eines Bildes die Qualität?

Das hängt vom Modus ab. **Verlustbehaftete** Komprimierung (JPG, WebP mit Qualität unter 100) verringert die Qualität mathematisch, aber bei Qualität 80-85 ist der Unterschied für das menschliche Auge bei normalem Betrachtungsabstand unsichtbar. **Verlustfreie** Komprimierung (PNG oder WebP verlustfrei) verkleinert die Datei um 10-30 % ohne Pixelveränderung.

### Wie stark kann ich ein JPG komprimieren?

Die meisten Kamera-JPGs können 60-80 % ohne sichtbaren Qualitätsverlust komprimiert werden. Ein 4-MB-Foto sinkt typischerweise auf 500 KB-1 MB. Screenshots komprimieren noch stärker, oft 90 %+.

### Sollte ich JPG, PNG oder WebP verwenden?

- **JPG** für Fotos (Millionen Farben, verlustbehaftet ist OK)
- **PNG** für Screenshots, Logos, Bilder mit Text oder alles, was Transparenz braucht
- **WebP** fürs Web (kleiner als beide, von allen modernen Browsern seit 2020 unterstützt)

### Kann ich ein PNG verlustfrei komprimieren?

Ja. PNGs aus Designwerkzeugen enthalten oft viele Metadaten und ineffiziente Komprimierung. Sie durch ein Werkzeug wie UtilBoxx oder \`pngcrush\` zu schicken, verkleinert die Datei um 10-30 % ohne Pixelveränderung.

### Ist die Nutzung eines Online-Bildkompressors sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in deinem Browser** — kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen solltest du davon ausgehen, dass deine Fotos auf einen entfernten Server hochgeladen werden, und die Datenschutzrichtlinie sorgfältig lesen. Vermeide das Hochladen persönlicher, finanzieller, medizinischer oder anderweitig sensibler Fotos zu einem Kompressor, dem du nicht vertraust.

### Was ist der Unterschied zwischen verlustbehafteter und verlustfreier Komprimierung?

**Verlustbehaftete** Komprimierung (JPG, WebP verlustbehaftet) wirft Bilddaten weg, die das menschliche Auge kaum bemerkt. Sie kann 10:1 oder besser erreichen. **Verlustfreie** Komprimierung (PNG, WebP verlustfrei) bewahrt jeden Pixel exakt und erreicht typischerweise 2:1 bis 3:1.

## Fazit

Bilder zu komprimieren ist eine dieser kleinen Aufgaben, die ständig anfallen und keine kostenpflichtige Subskription oder Software-Installation erfordern sollten. Für die meisten Menschen ist das [kostenlose Bildkomprimierungswerkzeug von UtilBoxx](/de/tools/image/compress) die offensichtliche Wahl: privat, schnell, kostenlos, ohne Registrierung und ohne Wasserzeichen.

Wenn du Designer bist und bereits in Photoshop lebst, gibt dir „Für Web speichern" die feinste Kontrolle. Wenn du Stapelverarbeitung skriptest, ist ImageMagick im Terminal unschlagbar. Und GIMP, die kostenlose Photoshop-Alternative, hat einen ähnlichen Exportdialog zum Nulltarif.

Für alles andere besuche die [Bild-Werkzeuge von UtilBoxx](/de/tools/image): Dort findest du einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit Bildern — alles im Browser.`;

export const compressPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-compress-images-online",
    category: "Image Tools",
    date: "2026-02-15",
    readTime: "4 min",
    title: "How to Compress Images Online (JPG, PNG, WebP)",
    description: "Shrink JPG, PNG, and WebP images for web, email, and storage — without visible quality loss.",
    content: compressEn,
  },
  zh: {
    slug: "how-to-compress-images-online",
    category: "图片工具",
    date: "2026-02-15",
    readTime: "4 分钟",
    title: "如何在线压缩图片（JPG、PNG、WebP）",
    description: "缩小 JPG、PNG 和 WebP 图片用于网页、邮件和存储 —— 肉眼看不出画质损失。",
    content: compressZh,
  },
  ja: {
    slug: "how-to-compress-images-online",
    category: "画像ツール",
    date: "2026-02-15",
    readTime: "4 分",
    title: "オンラインで画像を圧縮する方法（JPG、PNG、WebP）",
    description: "JPG、PNG、WebP をウェブ、メール、ストレージ向けに縮小 — 見た目の品質低下なし。",
    content: compressJa,
  },
  es: {
    slug: "how-to-compress-images-online",
    category: "Herramientas de imagen",
    date: "2026-02-15",
    readTime: "4 min",
    title: "Cómo comprimir imágenes online (JPG, PNG, WebP)",
    description: "Reduce imágenes JPG, PNG y WebP para web, email y almacenamiento — sin pérdida visible de calidad.",
    content: compressEs,
  },
  pt: {
    slug: "how-to-compress-images-online",
    category: "Ferramentas de imagem",
    date: "2026-02-15",
    readTime: "4 min",
    title: "Como comprimir imagens online (JPG, PNG, WebP)",
    description: "Reduza imagens JPG, PNG e WebP para web, e-mail e armazenamento — sem perda visível de qualidade.",
    content: compressPt,
  },
  fr: {
    slug: "how-to-compress-images-online",
    category: "Outils d'image",
    date: "2026-02-15",
    readTime: "4 min",
    title: "Comment compresser des images en ligne (JPG, PNG, WebP)",
    description: "Réduisez les images JPG, PNG et WebP pour le web, l'e-mail et le stockage — sans perte de qualité visible.",
    content: compressFr,
  },
  de: {
    slug: "how-to-compress-images-online",
    category: "Bildbearbeitungs-Tools",
    date: "2026-02-15",
    readTime: "4 Min",
    title: "Bilder online komprimieren (JPG, PNG, WebP)",
    description: "Verkleinere JPG-, PNG- und WebP-Bilder für Web, E-Mail und Speicher — ohne sichtbaren Qualitätsverlust.",
    content: compressDe,
  },
};
