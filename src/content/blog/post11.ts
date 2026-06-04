// Blog post: How to Convert PDF to Images
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const pdfToImageEn = `## Why convert a PDF to images?

PDFs are designed to be portable, vector-friendly, and resolution-independent — perfect for printing, sharing, and archiving. But there are many situations where you actually need the *opposite*: a flat raster image of a page. A JPEG you can post to social media. A PNG you can embed in a slide deck. A WebP you can drop into a website without any extra viewer.

Converting a PDF to images is a small but surprisingly common task. The reasons people need to do it are practical and frequent:

- **Share on social media**: Instagram, X, LinkedIn, and most chat apps want images, not PDFs. A 5-page report becomes 5 shareable images.
- **Embed in slides**: PowerPoint, Keynote, and Google Slides accept images far more cleanly than PDFs. A page from a PDF as a PNG slides right in.
- **Use in blog posts and websites**: A page from a PDF, embedded as an image, is faster to load and easier to style than a PDF viewer widget.
- **Thumbnail previews**: Generate a cover image for a document, or a quick visual index of a multi-page report.
- **Send in messaging apps**: WhatsApp, Telegram, and Signal do not render PDFs reliably. A JPG does.
- **Add to a design tool**: Pull a page from a PDF into Figma, Sketch, or Canva as a background, mockup, or annotation base.
- **Print at a specific size**: Export a page as a 300-DPI image to feed into a high-quality print pipeline.

The good news: with the right tool, converting a PDF to images is a 30-second job, and you do not need to install anything.

## Method 1: Use UtilBoxx's Free PDF to Image Converter (Recommended)

The fastest, safest, and most private way to convert a PDF to images is [UtilBoxx's PDF to Image tool](/en/tools/pdf/to-image). It runs entirely in your browser, so your file never leaves your device. There is no upload, no signup, no watermark, and no daily limit.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/pdf/to-image](/en/tools/pdf/to-image)
2. Click the upload area and select your PDF (or drag and drop)
3. Choose the output format: **PNG**, **JPG**, or **WebP**
4. Pick the resolution: 72 DPI (screen), 150 DPI (default), 300 DPI (print), or a custom value
5. Select which pages to convert: all pages, or a custom range like 1-5 or 1,3,7
6. Click "Process"
7. Download the resulting images (usually zipped together)

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. The file never reaches a server.
- **Three formats**: PNG (lossless, transparency), JPG (small, great for photos), WebP (modern, smaller still)
- **Custom resolution**: pick any DPI from 72 to 600 — screen, print, or archival
- **Per-page or all pages**: convert every page, or just the ones you need
- **Works on any device**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **No watermarks** on the output

If you only need to convert a few pages every now and then, this is by far the lowest-friction option.

## Method 2: macOS Preview

On a Mac, the built-in **Preview** app can export PDF pages as images natively, with full control over format and resolution:

1. Open the PDF in **Preview**
2. Click **File > Export** (or **File > Export As** in older macOS versions)
3. Choose the format: **PNG**, **JPEG**, **TIFF**, or others
4. Pick the resolution. Preview lets you drag a slider or enter a specific value
5. Click **Save**

To export only specific pages, open them in Preview first (drag thumbnails to a new window) and export each one separately. For a 50-page document, the browser-based UtilBoxx tool is significantly faster.

Preview is **Mac only** and free, but it is not a batch tool: there is no "convert all 50 pages" button. It shines for one or two pages at a time.

## Method 3: Command line with pdftoppm (Poppler)

If you are comfortable in a terminal, the open-source tool **pdftoppm** from the **poppler-utils** package is the fastest and most flexible CLI option. It is available on macOS (via Homebrew), Linux (via apt/dnf/pacman), and Windows (via Cygwin or WSL).

Install it with \`brew install poppler\` (macOS) or \`sudo apt install poppler-utils\` (Debian/Ubuntu), then:

\`\`\`bash
# Convert all pages to PNG at 150 DPI
pdftoppm -png -r 150 input.pdf out/page

# Convert all pages to JPG at 200 DPI
pdftoppm -jpeg -r 200 input.pdf out/page

# Convert only pages 1, 3, 5 to PNG
pdftoppm -png -r 150 -f 1 -l 5 input.pdf out/page

# Convert with a specific output prefix and only page 7
pdftoppm -png -r 300 -f 7 -l 7 input.pdf out/page
\`\`\`

The output files will be named \`out-1.png\`, \`out-2.png\`, etc. (or \`out-01.png\` for two-digit padding). \`pdftoppm\` is fast, scriptable, and unbeatable for batch conversion of hundreds of PDFs.

## Common questions

### Which format should I pick: PNG, JPG, or WebP?

- **PNG**: Lossless, supports transparency, larger file size. Best for diagrams, screenshots, line art, and any image where clarity matters more than file size.
- **JPG (JPEG)**: Lossy, smaller file size, no transparency. Best for photos and page scans, where the slight quality loss is invisible and the size reduction is welcome.
- **WebP**: Modern format, smaller than JPG at the same quality, supports transparency like PNG. Best for websites and modern apps that accept it.

For a typical PDF page (text + graphics), PNG is the safest default. If file size matters more than perfect sharpness, JPG at 85-95% quality is excellent. WebP is the future, but not all tools support it yet.

### What DPI should I use?

- **72 DPI**: Screen-only, very small files, not for printing.
- **150 DPI**: Default for most on-screen use. Sharp on retina and 4K displays.
- **300 DPI**: Standard for high-quality printing. Photos and detailed graphics look great.
- **600 DPI**: Archival or commercial print. Very large files, rarely needed.

For social media and slides, 150 DPI is plenty. For printing, 300 DPI is the safe default.

### Can I convert just a few pages instead of all?

Yes. [UtilBoxx's PDF to Image tool](/en/tools/pdf/to-image) lets you select a specific page range. With \`pdftoppm\`, the \`-f\` and \`-l\` flags set the first and last page to convert. With macOS Preview, drag the pages you want to a new window first and export that window.

### Will the images be high quality?

Yes. The conversion preserves the page resolution at the DPI you choose. A 300-DPI export of an A4 page gives you a 2480 × 3508 pixel image — more than enough for sharp printing. The only quality loss comes from the format you choose: PNG is lossless, JPG applies lossy compression, WebP is configurable.

### Is it safe to use an online PDF-to-image converter?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your file is being uploaded to a remote server and read their privacy policy carefully. Avoid uploading any document containing personal, financial, medical, or legally sensitive information to a converter you do not trust.

### Can I batch convert hundreds of PDFs at once?

In UtilBoxx, you can convert all pages of one PDF, or process many PDFs in a row by repeating the steps. For true batch automation, the **pdftoppm** CLI with a small shell loop is faster:

\`\`\`bash
# Convert every PDF in a folder
for f in *.pdf; do
  pdftoppm -png -r 150 "$f" "out/\${f%.pdf}-page"
done
\`\`\`

## Conclusion

Converting a PDF to images is a small task that comes up constantly and should not require a paid subscription or a software install. For most people, [UtilBoxx's free PDF to Image tool](/en/tools/pdf/to-image) is the obvious choice: it is private, fast, free, supports all three common formats, and works in your browser.

If you are on a Mac and need a quick export of one page, Preview works in a pinch. If you are scripting batch work, pdftoppm in the terminal is unbeatable.

For everything else, head to [UtilBoxx PDF tools](/en/tools/pdf) and you will find a complete, privacy-first toolkit for working with PDFs — all in your browser.`;

const pdfToImageZh = `## 为什么要把 PDF 转成图片？

PDF 的设计目标是便携、矢量友好、分辨率无关 —— 非常适合打印、分享和归档。但在很多场景下你需要的恰恰相反：一页扁平的栅格图。一张可以发到社交媒体的 JPEG，一张可以嵌入幻灯片的 PNG，一张可以放进网站的 WebP。

把 PDF 转成图片是一件看似简单、但实际很常见的任务。人们需要这样做的原因既实际又频繁：

- **发到社交媒体**：Instagram、X、LinkedIn 和大多数聊天应用都要图片、不要 PDF。一份 5 页报告就变成 5 张可分享的图片。
- **嵌入幻灯片**：PowerPoint、Keynote 和 Google Slides 接受图片远比接受 PDF 顺畅。把 PDF 的一页存成 PNG 就能直接拖进去。
- **在博客或网站中使用**：把 PDF 一页嵌成图片，比 PDF 阅读器组件加载更快、样式更易控制。
- **缩略图预览**：为文档生成封面图，或为多页报告生成快速视觉索引。
- **在聊天应用里发**：WhatsApp、Telegram 和 Signal 都不能稳定地渲染 PDF，JPG 可以。
- **加进设计工具**：把 PDF 一页导入 Figma、Sketch 或 Canva 当作背景、样图或批注底图。
- **按特定尺寸打印**：把一页导出成 300 DPI 的图，喂给高质量的打印流水线。

好消息是：只要用对工具，把 PDF 转成图片是 30 秒的活儿，而且不需要装任何东西。

## 方法一：使用 UtilBoxx 免费 PDF 转图片工具（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的 PDF 转图片工具](/zh/tools/pdf/to-image)。它完全在你的浏览器中运行，文件不会离开你的设备。没有上传、没有注册、输出文件没有水印，也没有每日次数限制。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/pdf/to-image](/zh/tools/pdf/to-image)
2. 点击上传区域选择你的 PDF（或直接拖入）
3. 选择输出格式：**PNG**、**JPG**、或 **WebP**
4. 选择分辨率：72 DPI（屏幕）、150 DPI（默认）、300 DPI（打印），或自定义
5. 选择要转换的页面：全部页面，或自定义范围如 1-5 或 1,3,7
6. 点击"开始处理"
7. 下载生成的图片（通常打包成 zip）

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，文件不会上传到任何服务器
- **三种格式**：PNG（无损、支持透明）、JPG（小巧、适合照片）、WebP（现代、文件更小）
- **自定义分辨率**：从 72 到 600 DPI 任选 —— 屏幕、打印或归档都覆盖
- **按页或全页**：转换全部页面，或只转换你需要的
- **全设备支持**：Windows、Mac、Linux、ChromeOS、iOS、Android
- **输出 PDF 无水印**

如果你只是偶尔转几页，这是最省心的选择。

## 方法二：macOS Preview

在 Mac 上，内置的 **Preview** 应用可以原生把 PDF 页导出为图片，并完整控制格式和分辨率：

1. 用 **Preview** 打开 PDF
2. 点击 **文件 > 导出**（旧版 macOS 是 **文件 > 导出为**）
3. 选择格式：**PNG**、**JPEG**、**TIFF** 等
4. 选择分辨率，Preview 提供滑块或输入具体数值
5. 点击 **存储**

如果只想导出几页，先把它们拖到一个新窗口里再分别导出。对于 50 页的文档，用浏览器的 UtilBoxx 工具会快得多。

Preview **仅限 Mac** 且免费，但不是批处理工具：没有"一次转换全部 50 页"的按钮。它适合一次一两页。

## 方法三：命令行 pdftoppm（Poppler）

如果你熟悉终端，**poppler-utils** 包里的开源工具 **pdftoppm** 是最快、最灵活的命令行选择。它在 macOS（通过 Homebrew）、Linux（通过 apt/dnf/pacman）、Windows（通过 Cygwin 或 WSL）上都可用。

用 \`brew install poppler\`（macOS）或 \`sudo apt install poppler-utils\`（Debian/Ubuntu）安装后：

\`\`\`bash
# 把所有页转成 150 DPI 的 PNG
pdftoppm -png -r 150 input.pdf out/page

# 把所有页转成 200 DPI 的 JPG
pdftoppm -jpeg -r 200 input.pdf out/page

# 只把第 1、3、5 页转成 PNG
pdftoppm -png -r 150 -f 1 -l 5 input.pdf out/page

# 用指定前缀，只转换第 7 页，300 DPI
pdftoppm -png -r 300 -f 7 -l 7 input.pdf out/page
\`\`\`

输出文件会命名为 \`out-1.png\`、\`out-2.png\` 等等（两位数会自动补零成 \`out-01.png\`）。\`pdftoppm\` 快速、可脚本化、对成百上千个 PDF 做批量转换无可替代。

## 常见问题

### 该选哪种格式：PNG、JPG 还是 WebP？

- **PNG**：无损、支持透明、文件大。最适合图表、截图、线稿，以及清晰度比文件大小更重要的场景。
- **JPG（JPEG）**：有损、文件小、不支持透明。最适合照片和扫描页 —— 细微的画质损失肉眼难辨，文件却小很多。
- **WebP**：现代格式，同等质量下比 JPG 还小，像 PNG 一样支持透明。最适合网站和现代应用。

对典型的 PDF 页（文字 + 图形），PNG 是最稳的默认选择。如果文件大小比极致清晰更重要，85-95% 质量的 JPG 就很好。WebP 是未来，但目前并非所有工具都支持。

### 该选多少 DPI？

- **72 DPI**：仅屏幕，文件极小，不能打印。
- **150 DPI**：大多数屏幕用途的默认值，在 Retina 和 4K 屏上仍然锐利。
- **300 DPI**：高质量打印的标准。照片和细节丰富的图形看起来非常棒。
- **600 DPI**：归档或商业印刷，文件非常大，几乎用不到。

社交媒体和幻灯片，150 DPI 足够；打印，300 DPI 是稳的默认。

### 能只转几页吗？

可以。[UtilBoxx 的 PDF 转图片工具](/zh/tools/pdf/to-image) 允许你选择特定页码范围。用 \`pdftoppm\`，\`-f\` 和 \`-l\` 参数分别设置首页和末页。用 macOS Preview，先把想导出的页拖到新窗口再导出。

### 出来的图片质量高吗？

高。转换会按你选的 DPI 保留页面分辨率。A4 页 300 DPI 导出得到 2480 × 3508 像素的图 —— 锐利打印绰绰有余。唯一的质量损失来自你选择的格式：PNG 无损，JPG 有损压缩，WebP 可调。

### 使用在线 PDF 转图片工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的文件会被上传到远程服务器，并仔细阅读隐私政策。避免向你不信任的转换工具上传任何包含个人、财务、医疗或法律敏感信息的文件。

### 能批量转换几百个 PDF 吗？

在 UtilBoxx 中，你可以一次转一个 PDF 的所有页，或连续处理多个 PDF。如果要真正的批处理自动化，**pdftoppm** 命令行加上一个小 shell 循环更快：

\`\`\`bash
# 转换文件夹里的所有 PDF
for f in *.pdf; do
  pdftoppm -png -r 150 "$f" "out/\${f%.pdf}-page"
done
\`\`\`

## 结论

把 PDF 转成图片是一件经常要做的小事，不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费 PDF 转图片工具](/zh/tools/pdf/to-image) 是显而易见的选择：私密、快速、免费、支持三种主流格式，浏览器里就能完成。

如果你是 Mac 用户，只需要快速导出一页，Preview 也能凑合用。如果你写脚本做批量处理，pdftoppm 在终端里无可替代。

其他情况下，去看 [UtilBoxx 的 PDF 工具集](/zh/tools/pdf)，你会找到一个完整的、隐私优先的 PDF 处理工具箱 —— 全部在浏览器里完成。`;

const pdfToImageJa = `## なぜ PDF を画像に変換するのか？

PDF は可搬性・ベクター親和性・解像度非依存を目指して設計されており、印刷・共有・アーカイブに最適です。しかし、時にはその逆が必要です：ページのフラットなラスター画像。SNS に投稿できる JPEG、スライドに埋め込める PNG、Web サイトに貼れる WebP。

PDF を画像に変換するのは、一見シンプルだが実際よくある作業です。これが必要になる理由は、実際的でしかも頻繁です：

- **SNS で共有する**：Instagram、X、LinkedIn、そしてほとんどのチャットアプリは PDF ではなく画像を求めます。5 ページのレポートは 5 枚のシェア可能な画像になります。
- **スライドに埋め込む**：PowerPoint、Keynote、Google Slides は PDF よりもはるかにスムーズに画像を受け付けます。PDF の 1 ページを PNG にすればそのままスライドに貼れます。
- **ブログや Web サイトで使う**：PDF の 1 ページを画像として埋め込むのは、PDF ビューア部品より読み込みが速く、スタイルもしやすい。
- **サムネイルプレビュー**：ドキュメントの表紙画像を生成したり、複数ページレポートのビジュアルインデックスを作る。
- **メッセージアプリで送る**：WhatsApp、Telegram、Signal は PDF を安定してレンダリングできません。JPG はできます。
- **デザインツールに追加**：Figma、Sketch、Canva に PDF のページを背景・モックアップ・注釈ベースとして取り込む。
- **特定サイズで印刷する**：1 ページを 300 DPI の画像として書き出し、高品質印刷パイプラインに流す。

良いニュースは、適切なツールを使えば PDF を画像に変換するのは 30 秒で終わり、何もインストールする必要がないことです。

## 方法 1：UtilBoxx の無料 PDF → 画像変換ツール（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の PDF → 画像ツール](/ja/tools/pdf/to-image) です。完全にブラウザ内で動作するため、ファイルがデバイスの外に出ることがありません。アップロードも登録も不要、透かしも入りません、利用回数制限もありません。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/pdf/to-image](/ja/tools/pdf/to-image) を開く
2. アップロード領域をクリックして PDF を選択（またはドラッグ＆ドロップ）
3. 出力形式を選択：**PNG**、**JPG**、または **WebP**
4. 解像度を選択：72 DPI（画面）、150 DPI（デフォルト）、300 DPI（印刷）、またはカスタム値
5. 変換するページを選択：全ページ、または 1〜5、1,3,7 のようなカスタム範囲
6.「処理」をクリック
7. 生成された画像をダウンロード（通常 ZIP でまとめられる）

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべての処理がブラウザ内で完結。ファイルはサーバーへ送信されません
- **3 つの形式**：PNG（ロスレス・透過対応）、JPG（小型・写真向き）、WebP（最新・さらに小さい）
- **カスタム解像度**：72〜600 DPI を任意に選択可能 —— 画面、印刷、アーカイブすべてカバー
- **ページ単位または全ページ**：全ページを変換も、必要なページだけでも OK
- **あらゆるデバイスで動作**：Windows、Mac、Linux、ChromeOS、iOS、Android
- **出力 PDF に透かしなし**

たまに数ページ変換するだけなら、これほど低コストな選択肢はありません。

## 方法 2：macOS のプレビュー

Mac では、内蔵の **プレビュー** アプリが PDF ページをネイティブに画像として書き出せ、形式と解像度を完全に制御できます：

1. **プレビュー** で PDF を開く
2. **ファイル > 書き出す**（旧 macOS では **ファイル > 形式を指定して書き出す**）をクリック
3. 形式を選択：**PNG**、**JPEG**、**TIFF** など
4. 解像度を選択。プレビューはスライダーまたは数値入力が可能
5. **保存** をクリック

特定のページだけを書き出したい場合は、まずそれらを新しいウィンドウにドラッグして開き、それぞれを別々に書き出します。50 ページのドキュメントなら、ブラウザ版の UtilBoxx ツールのほうが圧倒的に速いです。

プレビューは **Mac 専用** で無料ですが、バッチツールではありません。「50 ページを一括変換」ボタンはありません。1〜2 ページのクイック書き出しに向きます。

## 方法 3：コマンドラインで pdftoppm（Poppler）

ターミナルに慣れているなら、**poppler-utils** パッケージの **pdftoppm** が最速かつ最も柔軟な CLI オプションです。macOS（Homebrew）、Linux（apt/dnf/pacman）、Windows（Cygwin・WSL）で利用可能です。

\`brew install poppler\`（macOS）または \`sudo apt install poppler-utils\`（Debian/Ubuntu）でインストールしたら：

\`\`\`bash
# 全ページを 150 DPI の PNG に変換
pdftoppm -png -r 150 input.pdf out/page

# 全ページを 200 DPI の JPG に変換
pdftoppm -jpeg -r 200 input.pdf out/page

# 1、3、5 ページのみを PNG に変換
pdftoppm -png -r 150 -f 1 -l 5 input.pdf out/page

# 特定の出力プレフィックスで 7 ページ目のみ、300 DPI
pdftoppm -png -r 300 -f 7 -l 7 input.pdf out/page
\`\`\`

出力ファイルは \`out-1.png\`, \`out-2.png\` などの名前で生成されます（2 桁ゼロ詰めで \`out-01.png\` になることも）。\`pdftoppm\` は高速でスクリプト向き、何百もの PDF のバッチ変換に最強です。

## よくある質問

### どの形式を選べばいい？ PNG、JPG、WebP？

- **PNG**：ロスレス、透過対応、ファイルサイズ大。図、スクリーンショット、線画、鮮明さがファイルサイズより重要な場面に最適。
- **JPG（JPEG）**：非可逆、ファイルサイズ小、透過なし。写真とスキャン向き。わずかな品質低下は目立たず、サイズ削減はありがたい。
- **WebP**：最新形式、同品質で JPG より小さく、PNG のように透過も対応。Web サイトや最新アプリに最適。

典型的な PDF ページ（テキスト + グラフィックス）なら、PNG が最も安全なデフォルトです。ファイルサイズが極限のシャープネスより重要なら、85〜95% 品質の JPG が優秀。WebP は未来ですが、まだ全ツールが対応しているわけではありません。

### どの DPI を選べばいい？

- **72 DPI**：画面専用、ファイル極小、印刷不可。
- **150 DPI**：ほとんどの画面用途のデフォルト。Retina・4K ディスプレイでもシャープ。
- **300 DPI**：高品質印刷の標準。写真と精細なグラフィックが見栄え良く仕上がる。
- **600 DPI**：アーカイブ・商業印刷。ファイルが極めて大きく、ほとんど必要ない。

SNS とスライドなら 150 DPI で十分。印刷なら 300 DPI が安全なデフォルトです。

### 数ページだけ変換できますか？

できます。[UtilBoxx の PDF → 画像ツール](/ja/tools/pdf/to-image) では特定のページ範囲を選択できます。\`pdftoppm\` では \`-f\` と \`-l\` フラグで最初と最後のページを指定します。macOS プレビューでは、まず必要なページを新しいウィンドウにドラッグして開き、それを書き出します。

### 出力される画像は高品質ですか？

はい。変換は選択した DPI でページ解像度を保持します。A4 ページを 300 DPI で書き出すと 2480×3508 ピクセルの画像になり、高品質印刷に十分です。唯一の品質損失は選んだ形式から来ます：PNG はロスレス、JPG は非可逆圧縮、WebP は設定可能です。

### オンラインの PDF → 画像変換ツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、ファイルがリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人情報、財務、医療、法的に機密性の高い情報を含む文書は、信頼できない変換ツールにアップロードしないでください。

### 何百もの PDF を一括変換できますか？

UtilBoxx では、1 つの PDF の全ページを一度に変換したり、複数の PDF を連続で処理したりできます。真のバッチ自動化には、**pdftoppm** CLI と小さなシェルループが高速です：

\`\`\`bash
# フォルダ内のすべての PDF を変換
for f in *.pdf; do
  pdftoppm -png -r 150 "$f" "out/\${f%.pdf}-page"
done
\`\`\`

## まとめ

PDF を画像に変換することは頻繁に発生する小さな作業であり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料 PDF → 画像ツール](/ja/tools/pdf/to-image) は明白な選択です：プライベートで、速くて、無料で、3 つの主要形式すべてに対応、ブラウザで完結。

Mac ユーザーで 1 ページだけ素早く書き出したい場合は、プレビューで十分です。バッチ処理をスクリプト化したいなら、ターミナルで pdftoppm が最強です。

その他は、[UtilBoxx の PDF ツール](/ja/tools/pdf) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先の PDF ツールキットが見つかります。`;

const pdfToImageEs = `## ¿Por qué convertir un PDF a imágenes?

Los PDF están diseñados para ser portátiles, amigables con vectores e independientes de la resolución, perfectos para imprimir, compartir y archivar. Pero hay muchas situaciones en las que necesitas justo lo contrario: una imagen raster plana de una página. Un JPEG que puedas publicar en redes sociales. Un PNG que puedas incrustar en una presentación. Un WebP que puedas colocar en una web sin un visor extra.

Convertir un PDF a imágenes es una tarea pequeña pero sorprendentemente común. Las razones por las que la gente lo necesita son prácticas y frecuentes:

- **Compartir en redes sociales**: Instagram, X, LinkedIn y la mayoría de apps de chat quieren imágenes, no PDFs. Un informe de 5 páginas se vuelve 5 imágenes compartibles.
- **Incrustar en presentaciones**: PowerPoint, Keynote y Google Slides aceptan imágenes mucho mejor que PDFs. Una página de un PDF como PNG encaja directamente.
- **Usar en blogs y webs**: Una página de un PDF, incrustada como imagen, carga más rápido y es más fácil de estilar que un visor de PDF.
- **Vistas previas en miniatura**: Genera una imagen de portada para un documento, o un índice visual rápido de un informe multipágina.
- **Enviar en apps de mensajería**: WhatsApp, Telegram y Signal no renderizan PDFs de forma fiable. Un JPG sí.
- **Añadir a una herramienta de diseño**: Lleva una página de un PDF a Figma, Sketch o Canva como fondo, mockup o base de anotación.
- **Imprimir a un tamaño específico**: Exporta una página como imagen a 300 DPI para alimentar un pipeline de impresión de alta calidad.

La buena noticia: con la herramienta adecuada, convertir un PDF a imágenes es un trabajo de 30 segundos y no necesitas instalar nada.

## Método 1: Usa el conversor de PDF a imagen gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de convertir un PDF a imágenes es la [herramienta PDF a imagen de UtilBoxx](/es/tools/pdf/to-image). Se ejecuta por completo en tu navegador, por lo que el archivo nunca sale de tu dispositivo. Sin subidas, sin registro, sin marca de agua y sin límite diario.

Así se usa:

1. Ve a [utilboxx.com/es/tools/pdf/to-image](/es/tools/pdf/to-image)
2. Haz clic en el área de subida y selecciona tu PDF (o arrástralo)
3. Elige el formato de salida: **PNG**, **JPG** o **WebP**
4. Escoge la resolución: 72 DPI (pantalla), 150 DPI (por defecto), 300 DPI (impresión), o un valor personalizado
5. Selecciona qué páginas convertir: todas o un rango personalizado como 1-5 o 1,3,7
6. Haz clic en "Procesar"
7. Descarga las imágenes resultantes (suelen venir en un zip)

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. El archivo nunca llega a un servidor.
- **Tres formatos**: PNG (sin pérdida, con transparencia), JPG (pequeño, ideal para fotos), WebP (moderno, aún más pequeño)
- **Resolución personalizada**: elige cualquier DPI de 72 a 600 — pantalla, impresión o archivo
- **Por página o todas**: convierte cada página, o solo las que necesitas
- **Funciona en cualquier dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Sin marcas de agua** en el resultado

Si solo necesitas convertir unas páginas de vez en cuando, esta es la opción de menor fricción con diferencia.

## Método 2: Vista Previa de macOS

En Mac, la app integrada **Vista Previa** puede exportar páginas de PDF como imágenes de forma nativa, con control total sobre formato y resolución:

1. Abre el PDF en **Vista Previa**
2. Haz clic en **Archivo > Exportar** (o **Archivo > Exportar como** en macOS antiguos)
3. Elige el formato: **PNG**, **JPEG**, **TIFF** u otros
4. Escoge la resolución. Vista Previa permite arrastrar un deslizador o introducir un valor concreto
5. Haz clic en **Guardar**

Para exportar solo páginas concretas, ábrelas primero en Vista Previa (arrastra miniaturas a una ventana nueva) y exporta cada una por separado. Para un documento de 50 páginas, la herramienta de UtilBoxx en navegador es notablemente más rápida.

Vista Previa es **solo para Mac** y gratis, pero no es una herramienta por lotes: no tiene un botón "convertir las 50 páginas". Brilla con una o dos páginas a la vez.

## Método 3: Línea de comandos con pdftoppm (Poppler)

Si te manejas en la terminal, la herramienta de código abierto **pdftoppm** del paquete **poppler-utils** es la opción CLI más rápida y flexible. Está disponible en macOS (vía Homebrew), Linux (vía apt/dnf/pacman) y Windows (vía Cygwin o WSL).

Instálala con \`brew install poppler\` (macOS) o \`sudo apt install poppler-utils\` (Debian/Ubuntu), luego:

\`\`\`bash
# Convertir todas las páginas a PNG a 150 DPI
pdftoppm -png -r 150 input.pdf out/page

# Convertir todas las páginas a JPG a 200 DPI
pdftoppm -jpeg -r 200 input.pdf out/page

# Convertir solo las páginas 1, 3, 5 a PNG
pdftoppm -png -r 150 -f 1 -l 5 input.pdf out/page

# Convertir con un prefijo específico y solo la página 7
pdftoppm -png -r 300 -f 7 -l 7 input.pdf out/page
\`\`\`

Los archivos de salida se nombrarán \`out-1.png\`, \`out-2.png\`, etc. (o \`out-01.png\` con padding de dos dígitos). \`pdftoppm\` es rápido, scriptable e imbatible para la conversión por lotes de cientos de PDFs.

## Preguntas frecuentes

### ¿Qué formato debería elegir: PNG, JPG o WebP?

- **PNG**: sin pérdida, soporta transparencia, archivos grandes. Ideal para diagramas, capturas, arte lineal y cualquier imagen donde la nitidez importa más que el tamaño.
- **JPG (JPEG)**: con pérdida, archivos pequeños, sin transparencia. Ideal para fotos y escaneos, donde la ligera pérdida de calidad es invisible y la reducción de tamaño es bienvenida.
- **WebP**: formato moderno, más pequeño que JPG a la misma calidad, soporta transparencia como PNG. Ideal para webs y apps modernas que lo acepten.

Para una página típica de PDF (texto + gráficos), PNG es el valor predeterminado más seguro. Si el tamaño importa más que la nitidez perfecta, JPG al 85-95% de calidad es excelente. WebP es el futuro, pero no todas las herramientas lo soportan aún.

### ¿Qué DPI debería usar?

- **72 DPI**: solo pantalla, archivos muy pequeños, no para imprimir.
- **150 DPI**: valor por defecto para uso en pantalla. Nítido en pantallas retina y 4K.
- **300 DPI**: estándar para impresión de alta calidad. Fotos y gráficos detallados se ven genial.
- **600 DPI**: archivo o impresión comercial. Archivos muy grandes, rara vez necesario.

Para redes sociales y presentaciones, 150 DPI es suficiente. Para imprimir, 300 DPI es el valor por defecto seguro.

### ¿Puedo convertir solo unas páginas en lugar de todas?

Sí. La [herramienta PDF a imagen de UtilBoxx](/es/tools/pdf/to-image) te permite seleccionar un rango específico de páginas. Con \`pdftoppm\`, los parámetros \`-f\` y \`-l\` fijan la primera y la última página a convertir. Con Vista Previa de macOS, arrastra primero las páginas que quieras a una ventana nueva y exporta esa.

### ¿Las imágenes serán de alta calidad?

Sí. La conversión preserva la resolución de la página al DPI elegido. Una exportación a 300 DPI de una página A4 da una imagen de 2480 × 3508 píxeles, más que suficiente para impresión nítida. La única pérdida de calidad viene del formato elegido: PNG es sin pérdida, JPG aplica compresión con pérdida, WebP es configurable.

### ¿Es seguro usar un conversor online de PDF a imagen?

Depende del servicio. **UtilBoxx procesa todo en tu navegador**: sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tu archivo se está subiendo a un servidor remoto y lee atentamente su política de privacidad. Evita subir a un conversor en el que no confías cualquier documento con información personal, financiera, médica o legalmente sensible.

### ¿Puedo convertir por lotes cientos de PDFs a la vez?

En UtilBoxx, puedes convertir todas las páginas de un PDF, o procesar muchos PDFs seguidos repitiendo los pasos. Para automatización por lotes de verdad, el CLI **pdftoppm** con un pequeño bucle de shell es más rápido:

\`\`\`bash
# Convertir cada PDF en una carpeta
for f in *.pdf; do
  pdftoppm -png -r 150 "$f" "out/\${f%.pdf}-page"
done
\`\`\`

## Conclusión

Convertir un PDF a imágenes es una pequeña tarea que aparece constantemente y no debería requerir una suscripción de pago o instalar software. Para la mayoría de la gente, la [herramienta gratuita PDF a imagen de UtilBoxx](/es/tools/pdf/to-image) es la opción obvia: es privada, rápida, gratis, soporta los tres formatos comunes y funciona en tu navegador.

Si estás en Mac y solo necesitas una exportación rápida de una página, Vista Previa funciona. Si estás programando trabajo por lotes, pdftoppm en la terminal es imbatible.

Para todo lo demás, visita las [herramientas PDF de UtilBoxx](/es/tools/pdf) y encontrarás un conjunto completo de herramientas para trabajar con PDF, con privacidad como prioridad, todo en tu navegador.`;

const pdfToImagePt = `## Por que converter um PDF em imagens?

PDFs são projetados para serem portáteis, amigáveis a vetores e independentes de resolução — perfeitos para imprimir, compartilhar e arquivar. Mas há muitas situações em que você precisa do oposto: uma imagem raster plana de uma página. Um JPEG que você pode postar em redes sociais. Um PNG que você pode embutir em uma apresentação. Um WebP que você pode colocar em um site sem um visualizador extra.

Converter um PDF em imagens é uma tarefa pequena mas surpreendentemente comum. Os motivos pelos quais as pessoas precisam disso são práticos e frequentes:

- **Compartilhar em redes sociais**: Instagram, X, LinkedIn e a maioria dos apps de chat querem imagens, não PDFs. Um relatório de 5 páginas vira 5 imagens compartilháveis.
- **Embutir em apresentações**: PowerPoint, Keynote e Google Slides aceitam imagens muito melhor do que PDFs. Uma página de um PDF como PNG entra direto.
- **Usar em blogs e sites**: uma página de um PDF, embutida como imagem, carrega mais rápido e é mais fácil de estilizar do que um widget visualizador de PDF.
- **Pré-visualizações em miniatura**: gere uma imagem de capa para um documento, ou um índice visual rápido de um relatório multipágina.
- **Enviar em apps de mensagem**: WhatsApp, Telegram e Signal não renderizam PDFs de forma confiável. Um JPG sim.
- **Adicionar a uma ferramenta de design**: leve uma página de um PDF para o Figma, Sketch ou Canva como fundo, mockup ou base de anotação.
- **Imprimir em um tamanho específico**: exporte uma página como imagem a 300 DPI para alimentar um pipeline de impressão de alta qualidade.

A boa notícia: com a ferramenta certa, converter um PDF em imagens é um trabalho de 30 segundos e você não precisa instalar nada.

## Método 1: Use o conversor de PDF para imagem grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de converter um PDF em imagens é a [ferramenta PDF para imagem do UtilBoxx](/pt/tools/pdf/to-image). Ela roda inteiramente no seu navegador, então o arquivo nunca sai do seu dispositivo. Sem upload, sem cadastro, sem marca d'água e sem limite diário.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/pdf/to-image](/pt/tools/pdf/to-image)
2. Clique na área de upload e selecione seu PDF (ou arraste e solte)
3. Escolha o formato de saída: **PNG**, **JPG** ou **WebP**
4. Selecione a resolução: 72 DPI (tela), 150 DPI (padrão), 300 DPI (impressão) ou um valor personalizado
5. Selecione quais páginas converter: todas ou um intervalo personalizado como 1-5 ou 1,3,7
6. Clique em "Processar"
7. Baixe as imagens resultantes (geralmente em um zip)

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. O arquivo nunca chega a um servidor.
- **Três formatos**: PNG (sem perda, com transparência), JPG (pequeno, ótimo para fotos), WebP (moderno, ainda menor)
- **Resolução personalizada**: escolha qualquer DPI de 72 a 600 — tela, impressão ou arquivo
- **Por página ou todas**: converta cada página, ou apenas as que você precisa
- **Funciona em qualquer dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Sem marcas d'água** no resultado

Se você só precisa converter algumas páginas de vez em quando, essa é a opção de menor atrito disparado.

## Método 2: Visualização do macOS

No Mac, o app integrado **Visualização** pode exportar páginas de PDF como imagens nativamente, com controle total sobre formato e resolução:

1. Abra o PDF em **Visualização**
2. Clique em **Arquivo > Exportar** (ou **Arquivo > Exportar como** em macOS antigos)
3. Escolha o formato: **PNG**, **JPEG**, **TIFF** ou outros
4. Escolha a resolução. O Visualização permite arrastar um controle deslizante ou inserir um valor específico
5. Clique em **Salvar**

Para exportar apenas páginas específicas, abra-as primeiro no Visualização (arraste miniaturas para uma nova janela) e exporte cada uma separadamente. Para um documento de 50 páginas, a ferramenta do UtilBoxx no navegador é visivelmente mais rápida.

O Visualização é **apenas para Mac** e grátis, mas não é uma ferramenta em lote: não tem um botão "converter as 50 páginas". Brilha com uma ou duas páginas por vez.

## Método 3: Linha de comando com pdftoppm (Poppler)

Se você se sente confortável no terminal, a ferramenta open-source **pdftoppm** do pacote **poppler-utils** é a opção CLI mais rápida e flexível. Está disponível em macOS (via Homebrew), Linux (via apt/dnf/pacman) e Windows (via Cygwin ou WSL).

Instale com \`brew install poppler\` (macOS) ou \`sudo apt install poppler-utils\` (Debian/Ubuntu), depois:

\`\`\`bash
# Converter todas as páginas para PNG a 150 DPI
pdftoppm -png -r 150 input.pdf out/page

# Converter todas as páginas para JPG a 200 DPI
pdftoppm -jpeg -r 200 input.pdf out/page

# Converter apenas as páginas 1, 3, 5 para PNG
pdftoppm -png -r 150 -f 1 -l 5 input.pdf out/page

# Converter com um prefixo específico e apenas a página 7
pdftoppm -png -r 300 -f 7 -l 7 input.pdf out/page
\`\`\`

Os arquivos de saída serão nomeados \`out-1.png\`, \`out-2.png\`, etc. (ou \`out-01.png\` com padding de dois dígitos). \`pdftoppm\` é rápido, programável e imbatível para conversão em lote de centenas de PDFs.

## Perguntas frequentes

### Qual formato devo escolher: PNG, JPG ou WebP?

- **PNG**: sem perda, suporta transparência, arquivos grandes. Ideal para diagramas, capturas, arte vetorial e qualquer imagem onde a nitidez importa mais que o tamanho.
- **JPG (JPEG)**: com perda, arquivos pequenos, sem transparência. Ideal para fotos e digitalizações, onde a leve perda de qualidade é invisível e a redução de tamanho é bem-vinda.
- **WebP**: formato moderno, menor que JPG na mesma qualidade, suporta transparência como o PNG. Ideal para sites e apps modernos que o aceitem.

Para uma página típica de PDF (texto + gráficos), PNG é o padrão mais seguro. Se o tamanho importa mais que a nitidez perfeita, JPG a 85-95% de qualidade é excelente. WebP é o futuro, mas nem todas as ferramentas o suportam ainda.

### Qual DPI devo usar?

- **72 DPI**: só tela, arquivos muito pequenos, não imprime.
- **150 DPI**: padrão para uso em tela. Nítido em telas retina e 4K.
- **300 DPI**: padrão para impressão de alta qualidade. Fotos e gráficos detalhados ficam ótimos.
- **600 DPI**: arquivamento ou impressão comercial. Arquivos muito grandes, raramente necessário.

Para redes sociais e apresentações, 150 DPI é suficiente. Para imprimir, 300 DPI é o padrão seguro.

### Posso converter apenas algumas páginas em vez de todas?

Sim. A [ferramenta PDF para imagem do UtilBoxx](/pt/tools/pdf/to-image) permite selecionar um intervalo específico de páginas. Com \`pdftoppm\`, os parâmetros \`-f\` e \`-l\` definem a primeira e a última página a converter. Com o Visualização do macOS, arraste primeiro as páginas desejadas para uma nova janela e exporte essa.

### As imagens serão de alta qualidade?

Sim. A conversão preserva a resolução da página no DPI escolhido. Uma exportação a 300 DPI de uma página A4 resulta em uma imagem de 2480 × 3508 pixels — mais que suficiente para impressão nítida. A única perda de qualidade vem do formato escolhido: PNG é sem perda, JPG aplica compressão com perda, WebP é configurável.

### É seguro usar um conversor online de PDF para imagem?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que seu arquivo está sendo enviado para um servidor remoto e leia atentamente sua política de privacidade. Evite enviar a um conversor em que você não confia qualquer documento com informações pessoais, financeiras, médicas ou legalmente sensíveis.

### Posso converter em lote centenas de PDFs de uma vez?

No UtilBoxx, você pode converter todas as páginas de um PDF, ou processar muitos PDFs seguidos repetindo os passos. Para automação em lote de verdade, o CLI **pdftoppm** com um pequeno loop de shell é mais rápido:

\`\`\`bash
# Converter cada PDF em uma pasta
for f in *.pdf; do
  pdftoppm -png -r 150 "$f" "out/\${f%.pdf}-page"
done
\`\`\`

## Conclusão

Converter um PDF em imagens é uma pequena tarefa que surge constantemente e não deveria exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, a [ferramenta gratuita PDF para imagem do UtilBoxx](/pt/tools/pdf/to-image) é a escolha óbvia: é privada, rápida, grátis, suporta os três formatos comuns e funciona no seu navegador.

Se você está no Mac e só precisa de uma exportação rápida de uma página, o Visualização resolve. Se você está programando trabalho em lote, pdftoppm no terminal é imbatível.

Para todo o resto, visite as [ferramentas PDF do UtilBoxx](/pt/tools/pdf) e você encontrará um conjunto completo de ferramentas para trabalhar com PDFs, com privacidade como prioridade, tudo no seu navegador.`;

const pdfToImageFr = `## Pourquoi convertir un PDF en images ?

Les PDF sont conçus pour être portables, compatibles avec les vecteurs et indépendants de la résolution — parfaits pour imprimer, partager et archiver. Mais il y a de nombreuses situations où vous avez besoin du contraire : une image raster plate d'une page. Un JPEG que vous pouvez poster sur les réseaux sociaux. Un PNG que vous pouvez intégrer dans une présentation. Un WebP que vous pouvez insérer dans un site web sans lecteur supplémentaire.

Convertir un PDF en images est une tâche petite mais étonnamment fréquente. Les raisons pour lesquelles les gens en ont besoin sont pratiques et nombreuses :

- **Partager sur les réseaux sociaux** : Instagram, X, LinkedIn et la plupart des apps de chat veulent des images, pas des PDF. Un rapport de 5 pages devient 5 images partageables.
- **Intégrer dans des présentations** : PowerPoint, Keynote et Google Slides acceptent bien mieux les images que les PDF. Une page de PDF en PNG s'y glisse directement.
- **Utiliser dans des blogs et sites web** : une page de PDF, intégrée en image, charge plus vite et se stylise plus facilement qu'un widget lecteur PDF.
- **Vignettes d'aperçu** : générez une image de couverture pour un document, ou un index visuel rapide d'un rapport multi-pages.
- **Envoyer dans les apps de messagerie** : WhatsApp, Telegram et Signal ne rendent pas les PDF de manière fiable. Un JPG oui.
- **Ajouter à un outil de design** : importez une page de PDF dans Figma, Sketch ou Canva comme fond, maquette ou base d'annotation.
- **Imprimer à une taille précise** : exportez une page en image à 300 DPI pour alimenter un pipeline d'impression haute qualité.

Bonne nouvelle : avec le bon outil, convertir un PDF en images est un travail de 30 secondes et vous n'avez rien à installer.

## Méthode 1 : Utiliser le convertisseur PDF vers image gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de convertir un PDF en images est l'[outil PDF vers image de UtilBoxx](/fr/tools/pdf/to-image). Il s'exécute entièrement dans votre navigateur, donc le fichier ne quitte jamais votre appareil. Pas de téléversement, pas d'inscription, pas de filigrane et pas de limite quotidienne.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/pdf/to-image](/fr/tools/pdf/to-image)
2. Cliquez sur la zone de téléversement et sélectionnez votre PDF (ou glissez-déposez)
3. Choisissez le format de sortie : **PNG**, **JPG** ou **WebP**
4. Choisissez la résolution : 72 DPI (écran), 150 DPI (par défaut), 300 DPI (impression), ou une valeur personnalisée
5. Sélectionnez les pages à convertir : toutes, ou une plage personnalisée comme 1-5 ou 1,3,7
6. Cliquez sur « Traiter »
7. Téléchargez les images obtenues (souvent dans un zip)

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Le fichier n'arrive jamais sur un serveur.
- **Trois formats** : PNG (sans perte, avec transparence), JPG (petit, idéal pour les photos), WebP (moderne, encore plus petit)
- **Résolution personnalisée** : choisissez n'importe quel DPI de 72 à 600 — écran, impression ou archivage
- **Par page ou toutes** : convertissez chaque page, ou seulement celles dont vous avez besoin
- **Fonctionne sur tout appareil** : Windows, Mac, Linux, ChromeOS, iOS, Android
- **Aucun filigrane** sur le résultat

Si vous n'avez besoin de convertir que quelques pages de temps en temps, c'est de loin l'option la plus simple.

## Méthode 2 : Aperçu de macOS

Sur Mac, l'app intégrée **Aperçu** peut exporter des pages de PDF en images nativement, avec un contrôle total sur le format et la résolution :

1. Ouvrez le PDF dans **Aperçu**
2. Cliquez sur **Fichier > Exporter** (ou **Fichier > Exporter sous** dans les anciennes versions de macOS)
3. Choisissez le format : **PNG**, **JPEG**, **TIFF** ou autres
4. Choisissez la résolution. Aperçu permet de glisser un curseur ou d'entrer une valeur précise
5. Cliquez sur **Enregistrer**

Pour exporter uniquement certaines pages, ouvrez-les d'abord dans Aperçu (glissez les miniatures vers une nouvelle fenêtre) et exportez-les une par une. Pour un document de 50 pages, l'outil navigateur de UtilBoxx est nettement plus rapide.

Aperçu est **réservé à Mac** et gratuit, mais ce n'est pas un outil de lot : il n'y a pas de bouton « convertir les 50 pages ». Il brille sur une ou deux pages à la fois.

## Méthode 3 : Ligne de commande avec pdftoppm (Poppler)

Si vous êtes à l'aise dans un terminal, l'outil open-source **pdftoppm** du paquet **poppler-utils** est l'option CLI la plus rapide et la plus souple. Il est disponible sur macOS (via Homebrew), Linux (via apt/dnf/pacman) et Windows (via Cygwin ou WSL).

Installez-le avec \`brew install poppler\` (macOS) ou \`sudo apt install poppler-utils\` (Debian/Ubuntu), puis :

\`\`\`bash
# Convertir toutes les pages en PNG à 150 DPI
pdftoppm -png -r 150 input.pdf out/page

# Convertir toutes les pages en JPG à 200 DPI
pdftoppm -jpeg -r 200 input.pdf out/page

# Convertir uniquement les pages 1, 3, 5 en PNG
pdftoppm -png -r 150 -f 1 -l 5 input.pdf out/page

# Convertir avec un préfixe spécifique et seulement la page 7
pdftoppm -png -r 300 -f 7 -l 7 input.pdf out/page
\`\`\`

Les fichiers de sortie seront nommés \`out-1.png\`, \`out-2.png\`, etc. (ou \`out-01.png\` avec un padding à deux chiffres). \`pdftoppm\` est rapide, scriptable et imbattable pour la conversion par lots de centaines de PDF.

## Questions fréquentes

### Quel format choisir : PNG, JPG ou WebP ?

- **PNG** : sans perte, supporte la transparence, fichiers volumineux. Idéal pour diagrammes, captures, traits et toute image où la netteté compte plus que la taille.
- **JPG (JPEG)** : avec perte, fichiers petits, sans transparence. Idéal pour photos et numérisations, où la légère perte de qualité est invisible et la réduction de taille bienvenue.
- **WebP** : format moderne, plus petit que JPG à qualité équivalente, supporte la transparence comme PNG. Idéal pour sites web et apps modernes qui l'acceptent.

Pour une page de PDF typique (texte + graphiques), PNG est le choix par défaut le plus sûr. Si la taille compte plus que la netteté parfaite, JPG à 85-95 % de qualité est excellent. WebP est l'avenir, mais tous les outils ne le supportent pas encore.

### Quel DPI utiliser ?

- **72 DPI** : écran uniquement, fichiers très petits, pas pour imprimer.
- **150 DPI** : défaut pour la plupart des usages écran. Nette sur écrans retina et 4K.
- **300 DPI** : standard pour l'impression haute qualité. Photos et graphiques détaillés sont superbes.
- **600 DPI** : archivage ou impression commerciale. Fichiers très volumineux, rarement nécessaire.

Pour les réseaux sociaux et les présentations, 150 DPI suffit. Pour imprimer, 300 DPI est la valeur par défaut sûre.

### Puis-je convertir seulement quelques pages au lieu de toutes ?

Oui. L'[outil PDF vers image de UtilBoxx](/fr/tools/pdf/to-image) vous permet de sélectionner une plage précise. Avec \`pdftoppm\`, les paramètres \`-f\` et \`-l\` fixent la première et la dernière page à convertir. Avec Aperçu macOS, glissez d'abord les pages souhaitées dans une nouvelle fenêtre et exportez celle-ci.

### Les images seront-elles de haute qualité ?

Oui. La conversion préserve la résolution de la page au DPI choisi. Un export à 300 DPI d'une page A4 donne une image de 2480 × 3508 pixels — plus qu'assez pour une impression nette. La seule perte de qualité vient du format choisi : PNG est sans perte, JPG applique une compression avec perte, WebP est configurable.

### Est-il sûr d'utiliser un convertisseur PDF vers image en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que votre fichier est téléversé sur un serveur distant et lisez attentivement leur politique de confidentialité. Évitez de téléverser sur un convertisseur en qui vous n'avez pas confiance tout document contenant des informations personnelles, financières, médicales ou juridiquement sensibles.

### Puis-je convertir par lots des centaines de PDF d'un coup ?

Dans UtilBoxx, vous pouvez convertir toutes les pages d'un PDF, ou traiter plusieurs PDF à la suite. Pour une véritable automatisation par lots, le CLI **pdftoppm** avec une petite boucle shell est plus rapide :

\`\`\`bash
# Convertir chaque PDF d'un dossier
for f in *.pdf; do
  pdftoppm -png -r 150 "$f" "out/\${f%.pdf}-page"
done
\`\`\`

## Conclusion

Convertir un PDF en images est une petite tâche qui revient constamment et ne devrait pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, l'[outil gratuit PDF vers image de UtilBoxx](/fr/tools/pdf/to-image) est le choix évident : privé, rapide, gratuit, supportant les trois formats courants et fonctionnant dans votre navigateur.

Si vous êtes sur Mac et n'avez besoin que d'un export rapide d'une page, Aperçu fait l'affaire. Si vous scriptz du travail par lots, pdftoppm dans le terminal est imbattable.

Pour tout le reste, rendez-vous sur les [outils PDF de UtilBoxx](/fr/tools/pdf) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const pdfToImageDe = `## Warum ein PDF in Bilder umwandeln?

PDFs sind darauf ausgelegt, portabel, vektorfreundlich und auflösungsunabhängig zu sein – perfekt zum Drucken, Teilen und Archivieren. Aber es gibt viele Situationen, in denen Sie genau das Gegenteil brauchen: ein flaches Rasterbild einer Seite. Ein JPEG, das Sie in sozialen Medien posten können. Ein PNG, das Sie in eine Präsentation einbetten können. Ein WebP, das Sie ohne zusätzlichen Betrachter in eine Website einfügen können.

Ein PDF in Bilder umzuwandeln ist eine kleine, aber überraschend häufige Aufgabe. Die Gründe, warum Menschen das brauchen, sind praktisch und zahlreich:

- **In sozialen Medien teilen**: Instagram, X, LinkedIn und die meisten Chat-Apps wollen Bilder, keine PDFs. Ein 5-seitiger Bericht wird zu 5 teilbaren Bildern.
- **In Präsentationen einbetten**: PowerPoint, Keynote und Google Slides akzeptieren Bilder viel reibungsloser als PDFs. Eine PDF-Seite als PNG passt direkt hinein.
- **In Blogs und Websites verwenden**: Eine PDF-Seite, als Bild eingebettet, lädt schneller und ist einfacher zu stylen als ein PDF-Viewer-Widget.
- **Vorschaubilder erzeugen**: Erstellen Sie ein Cover-Bild für ein Dokument oder einen schnellen visuellen Index eines mehrseitigen Berichts.
- **In Messenger-Apps senden**: WhatsApp, Telegram und Signal rendern PDFs nicht zuverlässig. Ein JPG schon.
- **In ein Design-Tool einfügen**: Bringen Sie eine PDF-Seite in Figma, Sketch oder Canva als Hintergrund, Mockup oder Annotationsbasis.
- **In bestimmter Größe drucken**: Exportieren Sie eine Seite als 300-DPI-Bild, um es in eine hochwertige Druck-Pipeline einzuspeisen.

Die gute Nachricht: Mit dem richtigen Werkzeug ist die Umwandlung eines PDFs in Bilder eine 30-Sekunden-Aufgabe, und Sie müssen nichts installieren.

## Methode 1: Den kostenlosen PDF-zu-Bild-Konverter von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode ist das [PDF-zu-Bild-Werkzeug von UtilBoxx](/de/tools/pdf/to-image). Es läuft vollständig in Ihrem Browser, sodass die Datei Ihr Gerät nie verlässt. Kein Upload, keine Registrierung, kein Wasserzeichen und kein Tageslimit.

So verwenden Sie es:

1. Gehen Sie zu [utilboxx.com/de/tools/pdf/to-image](/de/tools/pdf/to-image)
2. Klicken Sie auf den Upload-Bereich und wählen Sie Ihre PDF (oder ziehen Sie sie per Drag & Drop)
3. Wählen Sie das Ausgabeformat: **PNG**, **JPG** oder **WebP**
4. Wählen Sie die Auflösung: 72 DPI (Bildschirm), 150 DPI (Standard), 300 DPI (Druck) oder einen benutzerdefinierten Wert
5. Wählen Sie die umzuwandelnden Seiten: alle oder einen benutzerdefinierten Bereich wie 1-5 oder 1,3,7
6. Klicken Sie auf „Verarbeiten"
7. Laden Sie die resultierenden Bilder herunter (meist in einem ZIP)

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in Ihrem Browser verarbeitet. Die Datei erreicht nie einen Server.
- **Drei Formate**: PNG (verlustfrei, mit Transparenz), JPG (klein, ideal für Fotos), WebP (modern, noch kleiner)
- **Benutzerdefinierte Auflösung**: Wählen Sie jeden DPI von 72 bis 600 — Bildschirm, Druck oder Archiv
- **Pro Seite oder alle**: Jede Seite umwandeln oder nur die, die Sie brauchen
- **Funktioniert auf jedem Gerät**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Keine Wasserzeichen** auf dem Ergebnis

Wenn Sie nur ab und zu ein paar Seiten umwandeln müssen, ist dies mit Abstand die reibungsloseste Option.

## Methode 2: macOS-Vorschau

Auf einem Mac kann die eingebaute App **Vorschau** PDF-Seiten nativ als Bilder exportieren, mit voller Kontrolle über Format und Auflösung:

1. Öffnen Sie das PDF in **Vorschau**
2. Klicken Sie auf **Ablage > Exportieren** (oder **Ablage > Exportieren als** in älteren macOS-Versionen)
3. Wählen Sie das Format: **PNG**, **JPEG**, **TIFF** oder andere
4. Wählen Sie die Auflösung. Vorschau erlaubt es, einen Schieberegler zu ziehen oder einen konkreten Wert einzugeben
5. Klicken Sie auf **Sichern**

Um nur bestimmte Seiten zu exportieren, öffnen Sie diese zuerst in Vorschau (ziehen Sie Miniaturansichten in ein neues Fenster) und exportieren Sie jede einzeln. Für ein 50-seitiges Dokument ist das Browser-Werkzeug von UtilBoxx deutlich schneller.

Vorschau ist **nur für Mac** und kostenlos, aber kein Stapel-Werkzeug: Es gibt keinen „Alle 50 Seiten umwandeln"-Button. Es glänzt mit einer oder zwei Seiten auf einmal.

## Methode 3: Kommandozeile mit pdftoppm (Poppler)

Wenn Sie sich im Terminal wohlfühlen, ist das Open-Source-Werkzeug **pdftoppm** aus dem **poppler-utils**-Paket die schnellste und flexibelste CLI-Option. Es ist verfügbar auf macOS (über Homebrew), Linux (über apt/dnf/pacman) und Windows (über Cygwin oder WSL).

Installieren Sie es mit \`brew install poppler\` (macOS) oder \`sudo apt install poppler-utils\` (Debian/Ubuntu), dann:

\`\`\`bash
# Alle Seiten in PNG mit 150 DPI umwandeln
pdftoppm -png -r 150 input.pdf out/page

# Alle Seiten in JPG mit 200 DPI umwandeln
pdftoppm -jpeg -r 200 input.pdf out/page

# Nur die Seiten 1, 3, 5 in PNG umwandeln
pdftoppm -png -r 150 -f 1 -l 5 input.pdf out/page

# Mit bestimmtem Präfix und nur Seite 7
pdftoppm -png -r 300 -f 7 -l 7 input.pdf out/page
\`\`\`

Die Ausgabedateien heißen \`out-1.png\`, \`out-2.png\` usw. (oder \`out-01.png\` mit zweistelliger Nullen-Auffüllung). \`pdftoppm\` ist schnell, skriptbar und unschlagbar bei der Stapel-Umwandlung von Hunderten von PDFs.

## Häufige Fragen

### Welches Format sollte ich wählen: PNG, JPG oder WebP?

- **PNG**: verlustfrei, unterstützt Transparenz, große Dateien. Ideal für Diagramme, Screenshots, Strichzeichnungen und jedes Bild, bei dem Schärfe wichtiger ist als Dateigröße.
- **JPG (JPEG)**: verlustbehaftet, kleine Dateien, keine Transparenz. Ideal für Fotos und Scans, wo der leichte Qualitätsverlust unsichtbar und die Größenreduzierung willkommen ist.
- **WebP**: modernes Format, kleiner als JPG bei gleicher Qualität, unterstützt Transparenz wie PNG. Ideal für Webseiten und moderne Apps, die es akzeptieren.

Für eine typische PDF-Seite (Text + Grafiken) ist PNG die sicherste Standardwahl. Wenn die Größe wichtiger ist als perfekte Schärfe, ist JPG mit 85–95 % Qualität ausgezeichnet. WebP ist die Zukunft, aber noch nicht alle Werkzeuge unterstützen es.

### Welchen DPI sollte ich verwenden?

- **72 DPI**: nur Bildschirm, sehr kleine Dateien, nicht zum Drucken.
- **150 DPI**: Standard für die meisten Bildschirm-Anwendungen. Scharf auf Retina- und 4K-Displays.
- **300 DPI**: Standard für hochwertigen Druck. Fotos und detaillierte Grafiken sehen großartig aus.
- **600 DPI**: Archivierung oder kommerzieller Druck. Sehr große Dateien, selten nötig.

Für soziale Medien und Präsentationen reichen 150 DPI. Fürs Drucken ist 300 DPI die sichere Standardeinstellung.

### Kann ich nur einige Seiten umwandeln statt alle?

Ja. Das [PDF-zu-Bild-Werkzeug von UtilBoxx](/de/tools/pdf/to-image) erlaubt es Ihnen, einen bestimmten Seitenbereich auszuwählen. Bei \`pdftoppm\` setzen die Parameter \`-f\` und \`-l\` die erste und letzte umzuwandelnde Seite. In der macOS-Vorschau ziehen Sie zunächst die gewünschten Seiten in ein neues Fenster und exportieren dieses.

### Sind die Bilder hochwertig?

Ja. Die Umwandlung behält die Seitenauflösung beim gewählten DPI. Ein 300-DPI-Export einer A4-Seite ergibt ein Bild mit 2480 × 3508 Pixeln — mehr als genug für scharfen Druck. Der einzige Qualitätsverlust kommt vom gewählten Format: PNG ist verlustfrei, JPG verwendet verlustbehaftete Kompression, WebP ist konfigurierbar.

### Ist die Nutzung eines Online-PDF-zu-Bild-Konverters sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in Ihrem Browser** – kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen sollten Sie davon ausgehen, dass Ihre Datei auf einen entfernten Server hochgeladen wird, und die Datenschutzrichtlinie sorgfältig lesen. Vermeiden Sie das Hochladen von Dokumenten mit persönlichen, finanziellen, medizinischen oder rechtlich sensiblen Informationen zu einem Konverter, dem Sie nicht vertrauen.

### Kann ich Hunderte von PDFs auf einmal stapelweise umwandeln?

In UtilBoxx können Sie alle Seiten einer PDF umwandeln oder mehrere PDFs hintereinander verarbeiten. Für echte Stapelautomatisierung ist das **pdftoppm**-CLI mit einer kleinen Shell-Schleife schneller:

\`\`\`bash
# Jede PDF in einem Ordner umwandeln
for f in *.pdf; do
  pdftoppm -png -r 150 "$f" "out/\${f%.pdf}-page"
done
\`\`\`

## Fazit

Ein PDF in Bilder umzuwandeln ist eine kleine Aufgabe, die ständig anfällt und keine kostenpflichtige Subskription oder Software-Installation erfordern sollte. Für die meisten Menschen ist das [kostenlose PDF-zu-Bild-Werkzeug von UtilBoxx](/de/tools/pdf/to-image) die offensichtliche Wahl: privat, schnell, kostenlos, mit Unterstützung aller drei gängigen Formate und im Browser.

Wenn Sie auf einem Mac sind und nur einen schnellen Export einer Seite brauchen, funktioniert Vorschau. Wenn Sie Stapelverarbeitung skripten, ist pdftoppm im Terminal unschlagbar.

Für alles andere besuchen Sie die [PDF-Werkzeuge von UtilBoxx](/de/tools/pdf): Dort finden Sie einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit PDFs – alles im Browser.`;

export const pdfToImagePost: Record<string, BlogPost> = {
  en: {
    slug: "convert-pdf-to-images",
    category: "PDF Tools",
    date: "2026-02-05",
    readTime: "4 min",
    title: "How to Convert PDF to Images (PNG, JPG, WebP)",
    description: "Turn any PDF page into a high-quality image. Pick the format, resolution, and pages you need.",
    content: pdfToImageEn,
  },
  zh: {
    slug: "convert-pdf-to-images",
    category: "PDF 工具",
    date: "2026-02-05",
    readTime: "4 分钟",
    title: "如何把 PDF 转成图片（PNG、JPG、WebP）",
    description: "把任何 PDF 页面转成高质量图片。选择你需要的格式、分辨率和页面。",
    content: pdfToImageZh,
  },
  ja: {
    slug: "convert-pdf-to-images",
    category: "PDF ツール",
    date: "2026-02-05",
    readTime: "4 分",
    title: "PDF を画像に変換する方法（PNG、JPG、WebP）",
    description: "任意の PDF ページを高品質な画像に変換。形式、解像度、ページを自由に選べます。",
    content: pdfToImageJa,
  },
  es: {
    slug: "convert-pdf-to-images",
    category: "Herramientas PDF",
    date: "2026-02-05",
    readTime: "4 min",
    title: "Cómo convertir un PDF a imágenes (PNG, JPG, WebP)",
    description: "Convierte cualquier página de PDF en una imagen de alta calidad. Elige el formato, la resolución y las páginas que necesitas.",
    content: pdfToImageEs,
  },
  pt: {
    slug: "convert-pdf-to-images",
    category: "Ferramentas PDF",
    date: "2026-02-05",
    readTime: "4 min",
    title: "Como converter PDF em imagens (PNG, JPG, WebP)",
    description: "Transforme qualquer página de PDF em uma imagem de alta qualidade. Escolha o formato, a resolução e as páginas que você precisa.",
    content: pdfToImagePt,
  },
  fr: {
    slug: "convert-pdf-to-images",
    category: "Outils PDF",
    date: "2026-02-05",
    readTime: "4 min",
    title: "Comment convertir un PDF en images (PNG, JPG, WebP)",
    description: "Transformez n'importe quelle page de PDF en image de haute qualité. Choisissez le format, la résolution et les pages dont vous avez besoin.",
    content: pdfToImageFr,
  },
  de: {
    slug: "convert-pdf-to-images",
    category: "PDF-Werkzeuge",
    date: "2026-02-05",
    readTime: "4 Min",
    title: "PDF in Bilder umwandeln (PNG, JPG, WebP)",
    description: "Verwandeln Sie jede PDF-Seite in ein hochwertiges Bild. Wählen Sie Format, Auflösung und Seiten nach Bedarf.",
    content: pdfToImageDe,
  },
};
