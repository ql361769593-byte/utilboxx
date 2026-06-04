// Blog post: How to Convert Images to PDF
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const imageToPdfEn = `## Why convert images to a PDF?

A folder of photos is easy to fill, but hard to share. Send 20 JPEGs by email and you get 20 attachments, 20 download prompts, and 20 "this file is too large" warnings. A single PDF of those same photos is one attachment, one download, one neat bundle. Converting images to a PDF is one of those small tasks that comes up constantly — and the right tool turns a 5-minute chore into a 30-second one.

The reasons people need to combine images into a PDF are practical and frequent:

- **Photo albums**: A vacation, a wedding, a family event. Combine 50 photos into one shareable PDF instead of zipping them.
- **Scanned documents**: A multi-page document you scanned page by page as JPEGs. Combine them back into a single PDF that prints and emails cleanly.
- **Receipts and invoices**: Snap a photo of every receipt on a trip. Combine into a single PDF for expense reports.
- **Sketches and whiteboards**: Photograph a whiteboard, sketch, or diagram. Combine into a PDF for sharing.
- **Real-estate listings**: A property gets a cover photo, several interior photos, a floor plan. Bundle them into one PDF brochure.
- **Portfolios**: A photographer, designer, or architect can combine a body of work into a single PDF for clients.
- **Easier to print**: A PDF of 20 images prints exactly as ordered, page by page, no manual layout needed.

The good news: with the right tool, combining images into a PDF is a 30-second drag-and-drop job, and you do not need to install anything.

## Method 1: Use UtilBoxx's Free Image to PDF Tool (Recommended)

The fastest, safest, and most private way to combine images into a PDF is [UtilBoxx's Image to PDF tool](/en/tools/pdf/image-to-pdf). It runs entirely in your browser, so your images never leave your device. There is no upload, no signup, no watermark, and no daily limit.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/pdf/image-to-pdf](/en/tools/pdf/image-to-pdf)
2. Drag in your images (or click to browse). You can mix **JPG**, **PNG**, and **WebP** in the same PDF.
3. Reorder the images by drag-and-drop. The thumbnails show the order they will appear in the PDF.
4. Pick the page size: **A4**, **Letter**, or **Fit to image** (each image becomes its own page sized to fit the photo).
5. Pick the orientation: **Portrait** or **Landscape** (or auto).
6. Click "Process"
7. Download the new PDF

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. The images never reach a server.
- **Three formats supported**: JPG, PNG, and WebP in the same PDF
- **Drag-and-drop reordering**: see the page order, drag to rearrange
- **Custom page size**: A4, Letter, or fit-to-image
- **Works on any device**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **No watermarks** on the output
- **No quality loss**: images are embedded at full resolution

If you only need to combine images occasionally, this is by far the lowest-friction option.

## Method 2: macOS Preview

On a Mac, the built-in **Preview** app can turn a folder of images into a PDF in a few clicks:

1. Open **Preview**
2. Choose **File > New from Clipboard** or open the first image
3. Drag the other images into the sidebar (the thumbnails panel) in the order you want
4. You can also **File > Print** the selection and choose **Save as PDF** in the print dialog
5. **File > Save** to write the PDF

A faster path: select all the images in **Finder**, right-click, choose **Quick Actions > Create PDF**. macOS will assemble them into a single PDF in alphabetical order. You can then drag the pages around in Preview to reorder.

Preview is **Mac only** and free. It is fast for small batches, but it does not let you choose a different page size per image — every image gets the same A4 or Letter page, which is fine for documents but adds whitespace to photos.

## Method 3: Command line with img2pdf

If you are comfortable in a terminal, the open-source tool **img2pdf** is the most flexible CLI option. It is a small Python tool that wraps images into a PDF **without re-encoding them**, which means **zero quality loss** and **smaller file sizes** than converting to PDF via a print-to-PDF pipeline.

Install it with \`pip install img2pdf\` (or \`brew install img2pdf\` on macOS), then:

\`\`\`bash
# Combine all images in a folder into a single PDF (alphabetical order)
img2pdf *.jpg --output out.pdf

# Combine specific images in a specific order
img2pdf page1.jpg page2.jpg page3.jpg --output out.pdf

# Set page size to A4 and orientation to landscape
img2pdf --pagesize A4 --landscape *.jpg --output out.pdf

# Fit each image exactly, no margins, no rescaling
img2pdf --fit img --no-imgsize img1.jpg img2.jpg --output out.pdf
\`\`\`

The \`img2pdf\` tool is fast, scriptable, and unbeatable for batch processing hundreds of images. The alternative tool, **ImageMagick** (\`convert img1.jpg img2.jpg out.pdf\`) re-encodes every image as JPEG, which can introduce quality loss. img2pdf embeds the original images as-is.

## Common questions

### What image formats are supported?

**UtilBoxx** supports **JPG**, **PNG**, and **WebP**. \`img2pdf\` supports the same plus a few more (TIFF, PPM). If you need to convert HEIC photos from an iPhone, run them through a HEIC-to-JPG converter first, then drop the JPGs into the tool.

### Will the PDF have one page per image, or all on one page?

One page per image. Each image you add becomes its own page in the PDF, in the order you arrange them. This is the standard for photo albums and scanned documents.

### Can I reorder the images after adding them?

Yes. In [UtilBoxx's Image to PDF tool](/en/tools/pdf/image-to-pdf), drag the thumbnails into the order you want. In \`img2pdf\`, list the files in the order you want them to appear. In macOS Preview, drag the page thumbnails in the sidebar to reorder.

### Will the image quality be preserved?

Yes. UtilBoxx embeds the images at full resolution. \`img2pdf\` is the same: it wraps the original image bytes into the PDF container without re-encoding. The only tool that re-encodes is **ImageMagick's** \`convert\`, which can introduce JPEG artifacts — avoid that path for high-quality output.

### What page size should I pick?

- **A4** (210 × 297 mm): International standard, used everywhere except the US and Canada.
- **Letter** (8.5 × 11 in): US and Canadian standard.
- **Fit to image**: Each image becomes its own page sized exactly to the image. No margins, no whitespace. Ideal for photos.

For documents (receipts, scanned pages), use A4 or Letter. For photo albums, "Fit to image" is usually the best choice.

### Is it safe to use an online image-to-PDF converter?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your file is being uploaded to a remote server and read their privacy policy carefully. Avoid uploading photos of personal, financial, medical, or legally sensitive information to a converter you do not trust.

### What is the difference between combining images as PDF pages and stitching them into a single image?

Combining as PDF pages is the right approach for photo albums, scanned documents, and any case where you want each image to be a separate, separately-viewable page. Stitching into a single image is better for grid-style montages and comparison shots. Most people want the former.

## Conclusion

Combining images into a PDF is a small task that comes up constantly — and should not require a paid subscription or a software install. For most people, [UtilBoxx's free Image to PDF tool](/en/tools/pdf/image-to-pdf) is the obvious choice: it is private, fast, free, supports JPG/PNG/WebP, and works in your browser.

If you are on a Mac, Preview's Quick Actions do this in two clicks. If you are scripting batch work, img2pdf in the terminal is unbeatable.

For everything else, head to [UtilBoxx PDF tools](/en/tools/pdf) and you will find a complete, privacy-first toolkit for working with PDFs — all in your browser.`;

const imageToPdfZh = `## 为什么要把图片转成 PDF？

装满照片的文件夹很容易填满，但很难分享。一次性用邮件发 20 张 JPEG，你会得到 20 个附件、20 次下载提示和 20 个"文件过大"警告。同一组照片如果合成一个 PDF，就只有一个附件、一次下载、一个整齐的包。把图片转成 PDF 是经常要做的小事之一 —— 选对工具，5 分钟的活儿可以缩短到 30 秒。

人们需要把图片合并成 PDF 的原因既实际又频繁：

- **电子相册**：一次度假、一场婚礼、一个家庭活动。把 50 张照片合成一个可分享的 PDF，比打包成 zip 方便得多。
- **扫描文档**：一份多页文档你逐页扫描成了 JPEG。把它们重新合成一个 PDF，打印和邮件都干净利落。
- **收据和发票**：出差时给每张收据拍张照，合成一个 PDF 用来报销。
- **草图和白板**：把白板、草图或图表拍下来，合成一个 PDF 方便分享。
- **房产清单**：一套房源有封面图、若干室内图、平面图。打包成一个 PDF 宣传册。
- **作品集**：摄影师、设计师或建筑师可以把一组作品合成一个 PDF 交给客户。
- **打印更方便**：20 张图片的 PDF 会按页顺序一张一张地打印出来，不需要手动排版。

好消息是：只要用对工具，把图片合并成 PDF 是 30 秒的拖放操作，而且不需要装任何东西。

## 方法一：使用 UtilBoxx 免费图片转 PDF 工具（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的图片转 PDF 工具](/zh/tools/pdf/image-to-pdf)。它完全在你的浏览器中运行，图片不会离开你的设备。没有上传、没有注册、输出文件没有水印，也没有每日次数限制。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/pdf/image-to-pdf](/zh/tools/pdf/image-to-pdf)
2. 拖入你的图片（或点击浏览）。同一个 PDF 里可以混用 **JPG**、**PNG**、**WebP**
3. 用拖放重新排列图片顺序，缩略图会按 PDF 中的页序显示
4. 选择页面大小：**A4**、**Letter**、或**自适应图片**（每张图成为一页，按图大小自适应）
5. 选择方向：**纵向**或**横向**（或自动）
6. 点击"开始处理"
7. 下载新的 PDF

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，图片不会上传到任何服务器
- **支持三种格式**：JPG、PNG、WebP 可放在同一个 PDF 里
- **拖放重排**：以页顺序查看，拖动即可调整
- **自定义页面大小**：A4、Letter、或自适应图片
- **全设备支持**：Windows、Mac、Linux、ChromeOS、iOS、Android
- **输出 PDF 无水印**
- **无质量损失**：以原分辨率嵌入图片

如果你只是偶尔合并图片，这是最省心的选择。

## 方法二：macOS Preview

在 Mac 上，内置的 **Preview** 应用可以把一个文件夹里的图片在几下点击中变成 PDF：

1. 打开 **Preview**
2. 选择 **文件 > 从剪贴板新建** 或打开第一张图片
3. 把其它图片拖到侧边栏（缩略图面板），按你想要的顺序排列
4. 也可以 **文件 > 打印** 选中项，在打印对话框选 **存储为 PDF**
5. **文件 > 存储** 把 PDF 写出来

更快的路径：在 **Finder** 中选中所有图片，右键选择 **快速操作 > 创建 PDF**。macOS 会按字母顺序把它们合成一个 PDF，然后你可以在 Preview 里拖动页面缩略图重排。

Preview **仅限 Mac** 且免费。少量图片时很快，但无法为不同图片设置不同页面大小 —— 每张图都是同样的 A4 或 Letter 页，对文档无所谓，给照片加白边就不好看了。

## 方法三：命令行 img2pdf

如果你熟悉终端，开源工具 **img2pdf** 是最灵活的命令行选择。它是一个小型的 Python 工具，把图片**原样**包进 PDF，**不重新编码**，因此**零质量损失**，且比通过打印转 PDF 流程的输出**更小**。

用 \`pip install img2pdf\`（或在 macOS 上 \`brew install img2pdf\`）安装后：

\`\`\`bash
# 把文件夹里所有图片合并成一个 PDF（按字母顺序）
img2pdf *.jpg --output out.pdf

# 按指定顺序合并指定图片
img2pdf page1.jpg page2.jpg page3.jpg --output out.pdf

# 页面大小设为 A4，方向为横向
img2pdf --pagesize A4 --landscape *.jpg --output out.pdf

# 每张图严格按其尺寸填满，无边距、无缩放
img2pdf --fit img --no-imgsize img1.jpg img2.jpg --output out.pdf
\`\`\`

\`img2pdf\` 快速、可脚本化、对成百上千张图片做批处理无可替代。另一种工具 **ImageMagick**（\`convert img1.jpg img2.jpg out.pdf\`）会把每张图都重新编码成 JPEG，可能引入画质损失。img2pdf 直接嵌入原图。

## 常见问题

### 支持哪些图片格式？

**UtilBoxx** 支持 **JPG**、**PNG**、**WebP**。\`img2pdf\` 支持同样的格式再加一些（TIFF、PPM）。如果你需要把 iPhone 的 HEIC 照片加进来，先用 HEIC 转 JPG 的工具转一下，再把 JPG 拖进工具。

### PDF 是一页一张图，还是所有图挤在一页？

一页一张图。你加的每张图在 PDF 里都成为独立的一页，顺序按你排的那样。这是相册和扫描文档的标准做法。

### 加完图片后能重新排序吗？

可以。在 [UtilBoxx 的图片转 PDF 工具](/zh/tools/pdf/image-to-pdf) 里，拖动缩略图到想要的顺序。用 \`img2pdf\`，按你想要的页顺序列出文件。用 macOS Preview，拖动侧边栏的页面缩略图重排。

### 图片质量会保留吗？

会。UtilBoxx 以原分辨率嵌入图片。\`img2pdf\` 同样：把原始图片字节原样包进 PDF 容器，不重新编码。唯一会重新编码的工具是 **ImageMagick** 的 \`convert\`，可能引入 JPEG 伪影 —— 高质量输出请避开那条路。

### 该选什么页面大小？

- **A4**（210 × 297 毫米）：国际标准，除美国和加拿大外全球通用。
- **Letter**（8.5 × 11 英寸）：美国和加拿大的标准。
- **自适应图片**：每张图成为独立的一页，页面大小严格匹配图片。无边距、无空白。最适合照片。

对文档（收据、扫描页），用 A4 或 Letter。对相册，"自适应图片"通常是最佳选择。

### 使用在线图片转 PDF 工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的图片会被上传到远程服务器，并仔细阅读隐私政策。避免向你不信任的转换工具上传任何包含个人、财务、医疗或法律敏感信息的照片。

### 把图片合并成 PDF 页和拼成一张大图有什么区别？

合并成 PDF 页是相册、扫描文档的标准做法 —— 每张图是一页、可单独查看。拼成一张大图更适合网格化拼贴和对比图。大多数人需要的是前者。

## 结论

把图片合并成 PDF 是一件经常要做的小事 —— 不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费图片转 PDF 工具](/zh/tools/pdf/image-to-pdf) 是显而易见的选择：私密、快速、免费、支持 JPG/PNG/WebP，浏览器里就能完成。

如果你是 Mac 用户，Preview 的"快速操作"两下点击就能搞定。如果你写脚本做批量处理，img2pdf 在终端里无可替代。

其他情况下，去看 [UtilBoxx 的 PDF 工具集](/zh/tools/pdf)，你会找到一个完整的、隐私优先的 PDF 处理工具箱 —— 全部在浏览器里完成。`;

const imageToPdfJa = `## なぜ画像を PDF に変換するのか？

写真で埋まったフォルダは簡単にいっぱいになりますが、共有するのは大変です。メールで JPEG を 20 枚送ると、20 個の添付ファイル、20 回のダウンロード確認、20 件の「ファイルが大きすぎます」警告が届きます。同じ写真を 1 つの PDF にまとめれば、添付 1 個、ダウンロード 1 回、すっきりした束になります。画像を PDF に変換するのは頻繁に発生する小さな作業の 1 つで、適切なツールを使えば 5 分の雑用が 30 秒で終わります。

画像を 1 つの PDF にまとめる必要がある理由は、実際的でしかも頻繁です：

- **フォトアルバム**：休暇、結婚式、家族イベント。50 枚を zip にする代わりに、共有しやすい 1 つの PDF にまとめる。
- **スキャン文書**：ページごとに JPEG としてスキャンした複数ページの文書。1 つの PDF としてまとめ直せば、印刷もメールもきれい。
- **領収書と請求書**：出張中、領収書ごとに写真を撮る。経費精算用に 1 つの PDF にまとめる。
- **スケッチとホワイトボード**：ホワイトボード、スケッチ、図を写真に撮る。共有しやすい PDF にまとめる。
- **不動産の物件資料**：物件にカバー写真、いくつかの室内写真、間取り図。1 つの PDF パンフレットに束ねる。
- **ポートフォリオ**：フォトグラファー、デザイナー、建築家は作品群を 1 つの PDF にしてクライアントに提出できる。
- **印刷が楽**：20 枚の画像の PDF は順番通りに 1 ページずつ印刷され、手動のレイアウト不要。

良いニュースは、適切なツールを使えば、画像を PDF にまとめるのは 30 秒のドラッグ＆ドロップで終わり、何もインストールする必要がないことです。

## 方法 1：UtilBoxx の無料画像 → PDF ツール（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の画像 → PDF ツール](/ja/tools/pdf/image-to-pdf) です。完全にブラウザ内で動作するため、画像がデバイスの外に出ることがありません。アップロードも登録も不要、透かしも入りません、利用回数制限もありません。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/pdf/image-to-pdf](/ja/tools/pdf/image-to-pdf) を開く
2. 画像をドラッグイン（またはクリックして選択）。同じ PDF 内に **JPG**、**PNG**、**WebP** を混在可能
3. サムネールをドラッグ＆ドロップで並べ替え。PDF 内のページ順が表示されます
4. ページサイズを選択：**A4**、**Letter**、または**画像に合わせる**（各画像が画像サイズに合ったページになる）
5. 向きを選択：**縦向き**または**横向き**（または自動）
6.「処理」をクリック
7. 新しい PDF をダウンロード

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべての処理がブラウザ内で完結。画像はサーバーへ送信されません
- **3 つの形式に対応**：JPG、PNG、WebP を同じ PDF に
- **ドラッグ＆ドロップで並べ替え**：ページ順を確認しながらドラッグで再配置
- **カスタムページサイズ**：A4、Letter、画像に合わせる
- **あらゆるデバイスで動作**：Windows、Mac、Linux、ChromeOS、iOS、Android
- **出力 PDF に透かしなし**
- **品質劣化なし**：画像は元解像度で埋め込まれる

たまに画像をまとめるだけなら、これほど低コストな選択肢はありません。

## 方法 2：macOS のプレビュー

Mac では、内蔵の **プレビュー** アプリがフォルダ内の画像を数クリックで PDF にできます：

1. **プレビュー** を開く
2. **ファイル > クリップボードから新規** を選択、または最初の画像を開く
3. 他の画像をサイドバー（サムネールパネル）に、希望の順序でドラッグ
4. **ファイル > プリント** で選択項目を印刷し、印刷ダイアログで **PDF として保存** を選ぶこともできる
5. **ファイル > 保存** で PDF を書き出す

より簡単な方法：**Finder** で全画像を選択し、右クリックして **クイックアクション > PDF を作成** を選びます。macOS がアルファベット順で 1 つの PDF にしてくれます。あとでプレビューでサムネールをドラッグして並べ替えられます。

プレビューは **Mac 専用** で無料。少量なら高速ですが、画像ごとに異なるページサイズは指定できません —— すべての画像が同じ A4 または Letter ページになり、文書なら OK でも写真には余白が入ります。

## 方法 3：コマンドラインで img2pdf

ターミナルに慣れているなら、オープンソースの **img2pdf** が最も柔軟な CLI オプションです。小さな Python ツールで、画像を**再エンコードせず**に PDF に包むので、**品質劣化ゼロ**、しかも「PDF へ印刷」するパイプラインより**ファイルサイズが小さくなります**。

\`pip install img2pdf\`（macOS なら \`brew install img2pdf\`）でインストールしたら：

\`\`\`bash
# フォルダ内の全画像を 1 つの PDF にまとめる（アルファベット順）
img2pdf *.jpg --output out.pdf

# 指定した画像を指定した順序でまとめる
img2pdf page1.jpg page2.jpg page3.jpg --output out.pdf

# ページサイズを A4、向きを横向きに
img2pdf --pagesize A4 --landscape *.jpg --output out.pdf

# 各画像を厳密に画像サイズで、余白なし、拡縮なしで
img2pdf --fit img --no-imgsize img1.jpg img2.jpg --output out.pdf
\`\`\`

\`img2pdf\` は高速でスクリプト向き、何百もの画像のバッチ処理に最強です。代替の **ImageMagick**（\`convert img1.jpg img2.jpg out.pdf\`）は各画像を JPEG に再エンコードするため、JPEG アーティファクトが入ることがあります —— 高品質出力には img2pdf を選んでください。

## よくある質問

### どの画像形式に対応していますか？

**UtilBoxx** は **JPG**、**PNG**、**WebP** に対応します。\`img2pdf\` は同じ形式に加え TIFF、PPM などにも対応します。iPhone の HEIC 写真を使いたい場合は、まず HEIC→JPG 変換ツールを通してから JPG をツールに入れてください。

### PDF は画像ごとに 1 ページですか？ それとも全部 1 ページに収まりますか？

画像ごとに 1 ページです。追加した各画像は PDF 内で独立した 1 ページになり、配置した順になります。これがフォトアルバムやスキャン文書の標準です。

### 画像を追加した後、並べ替えできますか？

できます。[UtilBoxx の画像 → PDF ツール](/ja/tools/pdf/image-to-pdf) では、サムネールをドラッグして希望の順に並び替えます。\`img2pdf\` ではファイルを表示したい順に並べます。macOS プレビューではサイドバーのページサムネールをドラッグして並び替えます。

### 画像の品質は保たれますか？

保たれます。UtilBoxx は画像を元解像度で埋め込みます。\`img2pdf\` も同様で、元の画像バイトを PDF コンテナに再エンコードせず包みます。再エンコードするのは **ImageMagick** の \`convert\` だけで、JPEG アーティファクトが入る可能性があります —— 高品質出力にはこの経路を避けてください。

### どのページサイズを選べばいい？

- **A4**（210 × 297 mm）：国際標準。米国とカナダ以外で広く使われています。
- **Letter**（8.5 × 11 in）：米国・カナダの標準。
- **画像に合わせる**：各画像が画像サイズに正確に合ったページになります。余白なし、空白なし。写真に最適。

文書（領収書、スキャンページ）には A4 または Letter。フォトアルバムには「画像に合わせる」が通常は最良の選択です。

### オンラインの画像 → PDF 変換ツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、ファイルがリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人情報、財務、医療、法的に機密性の高い情報を含む写真は、信頼できない変換ツールにアップロードしないでください。

### 画像を PDF ページにまとめるのと、1 枚の大きな画像に結合するのはどう違いますか？

PDF ページにまとめるのはアルバムやスキャン文書の標準アプローチで、各画像が独立した個別閲覧可能なページになります。1 枚の大きな画像に結合するのは、グリッドスタイルのモンタージュや比較ショットに向きます。多くの場合、前者が必要です。

## まとめ

画像を PDF にまとめるのは頻繁に発生する小さな作業であり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料画像 → PDF ツール](/ja/tools/pdf/image-to-pdf) は明白な選択です：プライベートで、速くて、無料で、JPG/PNG/WebP に対応、ブラウザで完結。

Mac ユーザーなら、プレビューの「クイックアクション」で 2 クリックで済みます。バッチ処理をスクリプト化したいなら、ターミナルで img2pdf が最強です。

その他は、[UtilBoxx の PDF ツール](/ja/tools/pdf) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先の PDF ツールキットが見つかります。`;

const imageToPdfEs = `## ¿Por qué convertir imágenes a un PDF?

Una carpeta llena de fotos es fácil de llenar, pero difícil de compartir. Envía 20 JPEGs por correo y obtienes 20 adjuntos, 20 avisos de descarga y 20 advertencias de "archivo demasiado grande". Un solo PDF con esas mismas fotos es un adjunto, una descarga, un paquete limpio. Convertir imágenes a PDF es una de esas pequeñas tareas que aparece constantemente — y la herramienta adecuada convierte una tarea de 5 minutos en una de 30 segundos.

Las razones por las que la gente necesita combinar imágenes en un PDF son prácticas y frecuentes:

- **Álbumes de fotos**: unas vacaciones, una boda, un evento familiar. Combina 50 fotos en un PDF compartible en vez de zipearlas.
- **Documentos escaneados**: un documento multipágina que escaneaste página a página como JPEGs. Vuelve a combinarlos en un único PDF que se imprima y envíe limpiamente.
- **Recibos y facturas**: haz una foto de cada recibo en un viaje. Combínalos en un único PDF para informes de gastos.
- **Esquemas y pizarras**: fotografía una pizarra, esquema o diagrama. Combínalos en un PDF para compartir.
- **Listados inmobiliarios**: una propiedad con foto de portada, varias fotos de interiores, un plano. Empaquétalos en un PDF folleto.
- **Portfolios**: un fotógrafo, diseñador o arquitecto puede combinar su trabajo en un único PDF para clientes.
- **Más fácil de imprimir**: un PDF con 20 imágenes se imprime exactamente en orden, página a página, sin maquetación manual.

La buena noticia: con la herramienta adecuada, combinar imágenes en un PDF es un trabajo de 30 segundos arrastrando y soltando, y no necesitas instalar nada.

## Método 1: Usa el conversor de imagen a PDF gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de combinar imágenes en un PDF es la [herramienta de imagen a PDF de UtilBoxx](/es/tools/pdf/image-to-pdf). Se ejecuta por completo en tu navegador, por lo que tus imágenes nunca salen de tu dispositivo. Sin subidas, sin registro, sin marca de agua y sin límite diario.

Así se usa:

1. Ve a [utilboxx.com/es/tools/pdf/image-to-pdf](/es/tools/pdf/image-to-pdf)
2. Arrastra tus imágenes (o haz clic para examinar). Puedes mezclar **JPG**, **PNG** y **WebP** en el mismo PDF.
3. Reordena las imágenes arrastrando y soltando. Las miniaturas muestran el orden en que aparecerán en el PDF.
4. Elige el tamaño de página: **A4**, **Letter** o **Ajustar a la imagen** (cada imagen se vuelve una página dimensionada para la foto).
5. Elige la orientación: **Vertical** u **Horizontal** (o automática).
6. Haz clic en "Procesar"
7. Descarga el PDF nuevo

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. Las imágenes nunca llegan a un servidor.
- **Tres formatos soportados**: JPG, PNG y WebP en el mismo PDF
- **Reordenar arrastrando y soltando**: ve el orden de las páginas y arrastra para reordenar
- **Tamaño de página personalizado**: A4, Letter o ajustar a la imagen
- **Funciona en cualquier dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Sin marcas de agua** en el resultado
- **Sin pérdida de calidad**: las imágenes se incrustan a resolución completa

Si solo necesitas combinar imágenes de vez en cuando, esta es la opción de menor fricción con diferencia.

## Método 2: Vista Previa de macOS

En Mac, la app integrada **Vista Previa** puede convertir una carpeta de imágenes en un PDF en unos clics:

1. Abre **Vista Previa**
2. Elige **Archivo > Nuevo desde el portapapeles** o abre la primera imagen
3. Arrastra las otras imágenes al panel lateral (el de miniaturas) en el orden deseado
4. También puedes **Archivo > Imprimir** la selección y elegir **Guardar como PDF** en el diálogo de impresión
5. **Archivo > Guardar** para escribir el PDF

Una ruta más rápida: selecciona todas las imágenes en **Finder**, clic derecho, elige **Acciones rápidas > Crear PDF**. macOS las ensamblará en un único PDF en orden alfabético. Luego puedes arrastrar las páginas en Vista Previa para reordenarlas.

Vista Previa es **solo para Mac** y gratis. Es rápida para lotes pequeños, pero no te permite elegir un tamaño de página distinto por imagen: cada imagen obtiene la misma página A4 o Letter, lo cual está bien para documentos pero añade espacio en blanco a las fotos.

## Método 3: Línea de comandos con img2pdf

Si te manejas en la terminal, la herramienta de código abierto **img2pdf** es la opción CLI más flexible. Es una pequeña herramienta de Python que envuelve las imágenes en un PDF **sin re-codificarlas**, lo que significa **cero pérdida de calidad** y **archivos más pequeños** que convirtiendo a PDF mediante una tubería de impresión a PDF.

Instálala con \`pip install img2pdf\` (o \`brew install img2pdf\` en macOS), luego:

\`\`\`bash
# Combinar todas las imágenes de una carpeta en un único PDF (orden alfabético)
img2pdf *.jpg --output out.pdf

# Combinar imágenes específicas en un orden específico
img2pdf page1.jpg page2.jpg page3.jpg --output out.pdf

# Tamaño de página A4 y orientación horizontal
img2pdf --pagesize A4 --landscape *.jpg --output out.pdf

# Ajustar cada imagen exactamente, sin márgenes, sin reescalar
img2pdf --fit img --no-imgsize img1.jpg img2.jpg --output out.pdf
\`\`\`

\`img2pdf\` es rápida, scriptable e imbatible para procesar por lotes cientos de imágenes. La herramienta alternativa, **ImageMagick** (\`convert img1.jpg img2.jpg out.pdf\`), re-codifica cada imagen como JPEG, lo que puede introducir pérdida de calidad. img2pdf incrusta las imágenes originales tal cual.

## Preguntas frecuentes

### ¿Qué formatos de imagen se admiten?

**UtilBoxx** admite **JPG**, **PNG** y **WebP**. \`img2pdf\` admite los mismos y algunos más (TIFF, PPM). Si necesitas convertir fotos HEIC de un iPhone, pásalas primero por un conversor HEIC-a-JPG, y luego mete los JPEGs en la herramienta.

### ¿El PDF tendrá una página por imagen o todas en una página?

Una página por imagen. Cada imagen que añades se convierte en su propia página en el PDF, en el orden que las coloques. Este es el estándar para álbumes de fotos y documentos escaneados.

### ¿Puedo reordenar las imágenes después de añadirlas?

Sí. En la [herramienta de imagen a PDF de UtilBoxx](/es/tools/pdf/image-to-pdf), arrastra las miniaturas al orden que quieras. En \`img2pdf\`, lista los archivos en el orden en que quieres que aparezcan. En Vista Previa de macOS, arrastra las miniaturas de página en el panel lateral para reordenar.

### ¿Se preservará la calidad de la imagen?

Sí. UtilBoxx incrusta las imágenes a resolución completa. \`img2pdf\` es igual: envuelve los bytes originales de la imagen en el contenedor PDF sin re-codificar. La única herramienta que re-codifica es \`convert\` de **ImageMagick**, que puede introducir artefactos JPEG — evita esa ruta para salida de alta calidad.

### ¿Qué tamaño de página debería elegir?

- **A4** (210 × 297 mm): estándar internacional, usado en todo el mundo excepto EE. UU. y Canadá.
- **Letter** (8,5 × 11 in): estándar de EE. UU. y Canadá.
- **Ajustar a la imagen**: cada imagen se vuelve su propia página dimensionada exactamente a la imagen. Sin márgenes, sin espacios en blanco. Ideal para fotos.

Para documentos (recibos, páginas escaneadas), usa A4 o Letter. Para álbumes de fotos, "Ajustar a la imagen" suele ser la mejor opción.

### ¿Es seguro usar un conversor online de imagen a PDF?

Depende del servicio. **UtilBoxx procesa todo en tu navegador**: sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tu archivo se está subiendo a un servidor remoto y lee atentamente su política de privacidad. Evita subir fotos con información personal, financiera, médica o legalmente sensible a un conversor en el que no confías.

### ¿Cuál es la diferencia entre combinar imágenes como páginas de PDF y unirlas en una sola imagen?

Combinar como páginas de PDF es el enfoque adecuado para álbumes de fotos, documentos escaneados y cualquier caso donde quieras que cada imagen sea una página separada y visualizable individualmente. Unir en una sola imagen es mejor para montajes en cuadrícula y tomas de comparación. La mayoría de la gente quiere lo primero.

## Conclusión

Combinar imágenes en un PDF es una pequeña tarea que aparece constantemente y no debería requerir una suscripción de pago o instalar software. Para la mayoría de la gente, la [herramienta gratuita de imagen a PDF de UtilBoxx](/es/tools/pdf/image-to-pdf) es la opción obvia: es privada, rápida, gratis, soporta JPG/PNG/WebP y funciona en tu navegador.

Si estás en Mac, las Acciones rápidas de Vista Previa lo hacen en dos clics. Si estás programando trabajo por lotes, img2pdf en la terminal es imbatible.

Para todo lo demás, visita las [herramientas PDF de UtilBoxx](/es/tools/pdf) y encontrarás un conjunto completo de herramientas para trabajar con PDF, con privacidad como prioridad, todo en tu navegador.`;

const imageToPdfPt = `## Por que converter imagens em PDF?

Uma pasta cheia de fotos é fácil de encher, mas difícil de compartilhar. Envie 20 JPEGs por e-mail e você terá 20 anexos, 20 prompts de download e 20 avisos de "arquivo grande demais". Um único PDF com essas mesmas fotos é um anexo, um download, um pacote organizado. Converter imagens em PDF é uma daquelas pequenas tarefas que surgem constantemente — e a ferramenta certa transforma um trabalho de 5 minutos em um de 30 segundos.

Os motivos pelos quais as pessoas precisam combinar imagens em um PDF são práticos e frequentes:

- **Álbuns de fotos**: férias, casamento, evento em família. Combine 50 fotos em um PDF compartilhável em vez de zipar.
- **Documentos digitalizados**: um documento multipágina que você digitalizou página por página como JPEGs. Combine-os em um único PDF que imprime e envia por e-mail de forma limpa.
- **Recibos e faturas**: fotografe cada recibo em uma viagem. Combine em um único PDF para relatórios de despesas.
- **Esboços e quadros brancos**: fotografe um quadro branco, esboço ou diagrama. Combine em um PDF para compartilhar.
- **Listagens imobiliárias**: um imóvel com foto de capa, várias fotos internas, uma planta. Agrupe tudo em um PDF folheto.
- **Portfólios**: um fotógrafo, designer ou arquiteto pode combinar um corpo de trabalho em um único PDF para clientes.
- **Mais fácil de imprimir**: um PDF de 20 imagens imprime exatamente em ordem, página por página, sem layout manual.

A boa notícia: com a ferramenta certa, combinar imagens em um PDF é um trabalho de 30 segundos com arrastar e soltar, e você não precisa instalar nada.

## Método 1: Use a ferramenta de imagem para PDF grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de combinar imagens em um PDF é a [ferramenta de imagem para PDF do UtilBoxx](/pt/tools/pdf/image-to-pdf). Ela roda inteiramente no seu navegador, então suas imagens nunca saem do seu dispositivo. Sem upload, sem cadastro, sem marca d'água e sem limite diário.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/pdf/image-to-pdf](/pt/tools/pdf/image-to-pdf)
2. Arraste suas imagens (ou clique para procurar). Você pode misturar **JPG**, **PNG** e **WebP** no mesmo PDF.
3. Reordene as imagens arrastando e soltando. As miniaturas mostram a ordem em que aparecerão no PDF.
4. Escolha o tamanho da página: **A4**, **Letter** ou **Ajustar à imagem** (cada imagem vira uma página dimensionada para a foto).
5. Escolha a orientação: **Retrato** ou **Paisagem** (ou automática).
6. Clique em "Processar"
7. Baixe o PDF novo

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. As imagens nunca chegam a um servidor.
- **Três formatos suportados**: JPG, PNG e WebP no mesmo PDF
- **Reordenar com arrastar e soltar**: veja a ordem das páginas e arraste para reorganizar
- **Tamanho de página personalizado**: A4, Letter ou ajustar à imagem
- **Funciona em qualquer dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Sem marcas d'água** no resultado
- **Sem perda de qualidade**: as imagens são embutidas em resolução completa

Se você só precisa combinar imagens de vez em quando, essa é a opção de menor atrito disparado.

## Método 2: Visualização do macOS

No Mac, o app integrado **Visualização** pode transformar uma pasta de imagens em um PDF em poucos cliques:

1. Abra o **Visualização**
2. Escolha **Arquivo > Novo da área de transferência** ou abra a primeira imagem
3. Arraste as outras imagens para a barra lateral (painel de miniaturas) na ordem desejada
4. Você também pode **Arquivo > Imprimir** a seleção e escolher **Salvar como PDF** no diálogo de impressão
5. **Arquivo > Salvar** para gravar o PDF

Caminho mais rápido: selecione todas as imagens no **Finder**, clique com o botão direito, escolha **Ações Rápidas > Criar PDF**. O macOS montará tudo em um único PDF em ordem alfabética. Depois você pode arrastar as páginas no Visualização para reordenar.

O Visualização é **apenas para Mac** e grátis. É rápido para lotes pequenos, mas não permite escolher um tamanho de página diferente por imagem: cada imagem recebe a mesma página A4 ou Letter, o que é bom para documentos, mas adiciona espaço em branco a fotos.

## Método 3: Linha de comando com img2pdf

Se você se sente confortável no terminal, a ferramenta open-source **img2pdf** é a opção CLI mais flexível. É uma pequena ferramenta Python que envolve as imagens em um PDF **sem recodificá-las**, o que significa **zero perda de qualidade** e **arquivos menores** do que converter para PDF por meio de um pipeline de impressão para PDF.

Instale com \`pip install img2pdf\` (ou \`brew install img2pdf\` no macOS), depois:

\`\`\`bash
# Combinar todas as imagens de uma pasta em um único PDF (ordem alfabética)
img2pdf *.jpg --output out.pdf

# Combinar imagens específicas em uma ordem específica
img2pdf page1.jpg page2.jpg page3.jpg --output out.pdf

# Definir tamanho de página A4 e orientação paisagem
img2pdf --pagesize A4 --landscape *.jpg --output out.pdf

# Ajustar cada imagem exatamente, sem margens, sem redimensionar
img2pdf --fit img --no-imgsize img1.jpg img2.jpg --output out.pdf
\`\`\`

\`img2pdf\` é rápido, programável e imbatível para processamento em lote de centenas de imagens. A ferramenta alternativa, **ImageMagick** (\`convert img1.jpg img2.jpg out.pdf\`), recodifica cada imagem como JPEG, o que pode introduzir perda de qualidade. img2pdf embute as imagens originais como estão.

## Perguntas frequentes

### Quais formatos de imagem são suportados?

O **UtilBoxx** suporta **JPG**, **PNG** e **WebP**. \`img2pdf\` suporta os mesmos e mais alguns (TIFF, PPM). Se precisar converter fotos HEIC de um iPhone, passe-as primeiro por um conversor HEIC-para-JPG e depois coloque os JPEGs na ferramenta.

### O PDF terá uma página por imagem ou todas em uma página?

Uma página por imagem. Cada imagem que você adiciona vira sua própria página no PDF, na ordem que você organizar. Este é o padrão para álbuns de fotos e documentos escaneados.

### Posso reordenar as imagens depois de adicioná-las?

Sim. Na [ferramenta de imagem para PDF do UtilBoxx](/pt/tools/pdf/image-to-pdf), arraste as miniaturas para a ordem desejada. No \`img2pdf\`, liste os arquivos na ordem em que quer que apareçam. No Visualização do macOS, arraste as miniaturas de página na barra lateral para reordenar.

### A qualidade da imagem será preservada?

Sim. O UtilBoxx embute as imagens em resolução completa. O \`img2pdf\` é igual: envolve os bytes originais da imagem no contêiner PDF sem recodificar. A única ferramenta que recodifica é o \`convert\` do **ImageMagick**, que pode introduzir artefatos JPEG — evite esse caminho para saída de alta qualidade.

### Qual tamanho de página devo escolher?

- **A4** (210 × 297 mm): padrão internacional, usado em todo o mundo exceto EUA e Canadá.
- **Letter** (8,5 × 11 in): padrão dos EUA e Canadá.
- **Ajustar à imagem**: cada imagem vira sua própria página dimensionada exatamente à imagem. Sem margens, sem espaços em branco. Ideal para fotos.

Para documentos (recibos, páginas escaneadas), use A4 ou Letter. Para álbuns de fotos, "Ajustar à imagem" geralmente é a melhor escolha.

### É seguro usar um conversor online de imagem para PDF?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que seu arquivo está sendo enviado para um servidor remoto e leia atentamente sua política de privacidade. Evite enviar fotos com informações pessoais, financeiras, médicas ou legalmente sensíveis a um conversor em que você não confia.

### Qual a diferença entre combinar imagens como páginas de PDF e uni-las em uma única imagem?

Combinar como páginas de PDF é a abordagem certa para álbuns de fotos, documentos escaneados e qualquer caso em que você queira que cada imagem seja uma página separada e visualizável individualmente. Unir em uma única imagem é melhor para montagens em grade e fotos de comparação. A maioria das pessoas quer a primeira opção.

## Conclusão

Combinar imagens em um PDF é uma pequena tarefa que surge constantemente e não deveria exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, a [ferramenta gratuita de imagem para PDF do UtilBoxx](/pt/tools/pdf/image-to-pdf) é a escolha óbvia: é privada, rápida, grátis, suporta JPG/PNG/WebP e funciona no seu navegador.

Se você está no Mac, as Ações Rápidas do Visualização resolvem em dois cliques. Se você está programando trabalho em lote, img2pdf no terminal é imbatível.

Para todo o resto, visite as [ferramentas PDF do UtilBoxx](/pt/tools/pdf) e você encontrará um conjunto completo de ferramentas para trabalhar com PDFs, com privacidade como prioridade, tudo no seu navegador.`;

const imageToPdfFr = `## Pourquoi convertir des images en PDF ?

Un dossier plein de photos se remplit facilement, mais se partage difficilement. Envoyez 20 JPEG par e-mail et vous obtenez 20 pièces jointes, 20 invites au téléchargement et 20 avertissements « fichier trop volumineux ». Un seul PDF avec ces mêmes photos, c'est une pièce jointe, un téléchargement, un paquet net. Convertir des images en PDF est l'une de ces petites tâches qui reviennent constamment — et le bon outil transforme une corvée de 5 minutes en une de 30 secondes.

Les raisons pour lesquelles on doit combiner des images en un PDF sont pratiques et fréquentes :

- **Albums photo** : vacances, mariage, événement familial. Combinez 50 photos en un PDF partageable au lieu de les zipper.
- **Documents numérisés** : un document multi-pages que vous avez numérisé page par page en JPEG. Recombinez-les en un seul PDF qui s'imprime et s'envoie proprement.
- **Reçus et factures** : prenez en photo chaque reçu lors d'un déplacement. Combinez-les en un seul PDF pour les notes de frais.
- **Croquis et tableaux blancs** : photographiez un tableau blanc, un croquis ou un diagramme. Combinez en un PDF à partager.
- **Annonces immobilières** : un bien avec une photo de couverture, plusieurs photos d'intérieur, un plan. Regroupez le tout en un PDF brochure.
- **Portfolios** : un photographe, designer ou architecte peut combiner un ensemble de travaux en un seul PDF pour des clients.
- **Plus facile à imprimer** : un PDF de 20 images s'imprime exactement dans l'ordre, page par page, sans mise en page manuelle.

Bonne nouvelle : avec le bon outil, combiner des images en un PDF est un travail de 30 secondes en glisser-déposer, et vous n'avez rien à installer.

## Méthode 1 : Utiliser l'outil Image vers PDF gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de combiner des images en un PDF est l'[outil Image vers PDF de UtilBoxx](/fr/tools/pdf/image-to-pdf). Il s'exécute entièrement dans votre navigateur, donc vos images ne quittent jamais votre appareil. Pas de téléversement, pas d'inscription, pas de filigrane et pas de limite quotidienne.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/pdf/image-to-pdf](/fr/tools/pdf/image-to-pdf)
2. Glissez vos images (ou cliquez pour parcourir). Vous pouvez mélanger **JPG**, **PNG** et **WebP** dans le même PDF.
3. Réorganisez les images par glisser-déposer. Les miniatures affichent l'ordre dans lequel elles apparaîtront dans le PDF.
4. Choisissez la taille de page : **A4**, **Letter** ou **Ajuster à l'image** (chaque image devient une page dimensionnée à la photo).
5. Choisissez l'orientation : **Portrait** ou **Paysage** (ou auto).
6. Cliquez sur « Traiter »
7. Téléchargez le nouveau PDF

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Les images n'arrivent jamais sur un serveur.
- **Trois formats pris en charge** : JPG, PNG et WebP dans le même PDF
- **Réorganisation par glisser-déposer** : voyez l'ordre des pages et glissez pour réarranger
- **Taille de page personnalisée** : A4, Letter ou ajuster à l'image
- **Fonctionne sur tout appareil** : Windows, Mac, Linux, ChromeOS, iOS, Android
- **Aucun filigrane** sur le résultat
- **Aucune perte de qualité** : les images sont intégrées à la résolution d'origine

Si vous n'avez besoin de combiner des images qu'occasionnellement, c'est de loin l'option la plus simple.

## Méthode 2 : Aperçu de macOS

Sur Mac, l'app intégrée **Aperçu** peut transformer un dossier d'images en PDF en quelques clics :

1. Ouvrez **Aperçu**
2. Choisissez **Fichier > Nouveau depuis le presse-papiers** ou ouvrez la première image
3. Glissez les autres images dans la barre latérale (panneau des miniatures) dans l'ordre voulu
4. Vous pouvez aussi **Fichier > Imprimer** la sélection et choisir **Enregistrer au format PDF** dans la boîte de dialogue d'impression
5. **Fichier > Enregistrer** pour écrire le PDF

Chemin plus rapide : sélectionnez toutes les images dans le **Finder**, clic droit, choisissez **Actions rapides > Créer un PDF**. macOS les assemblera en un seul PDF par ordre alphabétique. Vous pourrez ensuite faire glisser les pages dans Aperçu pour les réordonner.

Aperçu est **réservé à Mac** et gratuit. C'est rapide pour de petits lots, mais cela ne permet pas de choisir une taille de page différente par image — chaque image obtient la même page A4 ou Letter, ce qui convient aux documents mais ajoute du blanc aux photos.

## Méthode 3 : Ligne de commande avec img2pdf

Si vous êtes à l'aise dans un terminal, l'outil open-source **img2pdf** est l'option CLI la plus souple. C'est un petit outil Python qui enveloppe les images dans un PDF **sans les ré-encoder**, ce qui signifie **aucune perte de qualité** et **des fichiers plus petits** qu'en passant par un pipeline d'impression vers PDF.

Installez-le avec \`pip install img2pdf\` (ou \`brew install img2pdf\` sur macOS), puis :

\`\`\`bash
# Combiner toutes les images d'un dossier en un seul PDF (ordre alphabétique)
img2pdf *.jpg --output out.pdf

# Combiner des images spécifiques dans un ordre précis
img2pdf page1.jpg page2.jpg page3.jpg --output out.pdf

# Taille de page A4 et orientation paysage
img2pdf --pagesize A4 --landscape *.jpg --output out.pdf

# Ajuster chaque image exactement, sans marges, sans redimensionnement
img2pdf --fit img --no-imgsize img1.jpg img2.jpg --output out.pdf
\`\`\`

\`img2pdf\` est rapide, scriptable et imbattable pour traiter par lots des centaines d'images. L'outil alternatif, **ImageMagick** (\`convert img1.jpg img2.jpg out.pdf\`), ré-encode chaque image en JPEG, ce qui peut introduire une perte de qualité. img2pdf intègre les images originales telles quelles.

## Questions fréquentes

### Quels formats d'image sont pris en charge ?

**UtilBoxx** prend en charge **JPG**, **PNG** et **WebP**. \`img2pdf\` prend en charge les mêmes plus quelques autres (TIFF, PPM). Si vous devez convertir des photos HEIC d'un iPhone, passez-les d'abord par un convertisseur HEIC-vers-JPG, puis mettez les JPEG dans l'outil.

### Le PDF aura-t-il une page par image, ou toutes sur une page ?

Une page par image. Chaque image ajoutée devient sa propre page dans le PDF, dans l'ordre où vous les placez. C'est le standard pour les albums photo et les documents numérisés.

### Puis-je réorganiser les images après les avoir ajoutées ?

Oui. Dans l'[outil Image vers PDF de UtilBoxx](/fr/tools/pdf/image-to-pdf), glissez les miniatures dans l'ordre voulu. Dans \`img2pdf\`, listez les fichiers dans l'ordre d'apparition souhaité. Dans Aperçu macOS, glissez les miniatures de page dans la barre latérale pour réorganiser.

### La qualité de l'image sera-t-elle préservée ?

Oui. UtilBoxx intègre les images à leur résolution d'origine. \`img2pdf\` fait de même : il enveloppe les octets d'image originaux dans le conteneur PDF sans ré-encoder. Le seul outil qui ré-encode est le \`convert\` d'**ImageMagick**, qui peut introduire des artefacts JPEG — évitez ce chemin pour une sortie haute qualité.

### Quelle taille de page choisir ?

- **A4** (210 × 297 mm) : standard international, utilisé partout sauf aux États-Unis et au Canada.
- **Letter** (8,5 × 11 in) : standard des États-Unis et du Canada.
- **Ajuster à l'image** : chaque image devient sa propre page dimensionnée exactement à l'image. Pas de marges, pas d'espace blanc. Idéal pour les photos.

Pour les documents (reçus, pages numérisées), utilisez A4 ou Letter. Pour les albums photo, « Ajuster à l'image » est généralement le meilleur choix.

### Est-il sûr d'utiliser un convertisseur Image vers PDF en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que votre fichier est téléversé sur un serveur distant et lisez attentivement leur politique de confidentialité. Évitez de téléverser sur un convertisseur en qui vous n'avez pas confiance toute photo contenant des informations personnelles, financières, médicales ou juridiquement sensibles.

### Quelle est la différence entre combiner des images comme pages de PDF et les fusionner en une seule image ?

Combiner comme pages de PDF est l'approche adaptée aux albums photo, documents numérisés et tout cas où vous voulez que chaque image soit une page séparée, consultable individuellement. Fusionner en une seule image convient mieux aux montages en grille et aux prises de comparaison. La plupart des gens veulent la première option.

## Conclusion

Combiner des images en un PDF est une petite tâche qui revient constamment et ne devrait pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, l'[outil gratuit Image vers PDF de UtilBoxx](/fr/tools/pdf/image-to-pdf) est le choix évident : privé, rapide, gratuit, prenant en charge JPG/PNG/WebP et fonctionnant dans votre navigateur.

Si vous êtes sur Mac, les Actions rapides d'Aperçu le font en deux clics. Si vous scriptz du travail par lots, img2pdf dans le terminal est imbattable.

Pour tout le reste, rendez-vous sur les [outils PDF de UtilBoxx](/fr/tools/pdf) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const imageToPdfDe = `## Warum Bilder in ein PDF umwandeln?

Ein Ordner voller Fotos ist schnell gefüllt, aber schwer zu teilen. Schicken Sie 20 JPEGs per E-Mail, bekommen Sie 20 Anhänge, 20 Download-Aufforderungen und 20 „Datei zu groß"-Warnungen. Ein einzelnes PDF mit denselben Fotos ist ein Anhang, ein Download, ein sauberes Paket. Bilder in ein PDF umzuwandeln ist eine dieser kleinen Aufgaben, die ständig anfallen — und das richtige Werkzeug macht aus einer 5-Minuten-Aufgabe eine von 30 Sekunden.

Die Gründe, warum Menschen Bilder in einem PDF bündeln müssen, sind praktisch und häufig:

- **Fotoalben**: Urlaub, Hochzeit, Familienereignis. Fassen Sie 50 Fotos in einem teilbaren PDF zusammen, statt sie zu zippen.
- **Gescannte Dokumente**: Ein mehrseitiges Dokument, das Sie Seite für Seite als JPEGs gescannt haben. Fügen Sie sie wieder zu einem einzigen PDF zusammen, das sich sauber drucken und mailen lässt.
- **Belege und Rechnungen**: Fotografieren Sie auf einer Reise jeden Beleg. Bündeln Sie sie in einem einzigen PDF für die Spesenabrechnung.
- **Sketches und Whiteboards**: Fotografieren Sie ein Whiteboard, eine Skizze oder ein Diagramm. Fügen Sie sie zu einem teilbaren PDF zusammen.
- **Immobilien-Exposés**: Eine Immobilie mit Cover-Foto, mehreren Innenaufnahmen, einem Grundriss. Bündeln Sie alles in einem PDF-Prospekt.
- **Portfolios**: Ein Fotograf, Designer oder Architekt kann ein Werk in einem einzigen PDF für Kunden bündeln.
- **Einfacher zu drucken**: Ein PDF mit 20 Bildern druckt genau in der Reihenfolge, Seite für Seite, ohne manuelles Layout.

Die gute Nachricht: Mit dem richtigen Werkzeug ist das Bündeln von Bildern in einem PDF eine 30-Sekunden-Drag-&-Drop-Aufgabe, und Sie müssen nichts installieren.

## Methode 1: Das kostenlose Bild-zu-PDF-Werkzeug von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode ist das [Bild-zu-PDF-Werkzeug von UtilBoxx](/de/tools/pdf/image-to-pdf). Es läuft vollständig in Ihrem Browser, sodass Ihre Bilder Ihr Gerät nie verlassen. Kein Upload, keine Registrierung, kein Wasserzeichen und kein Tageslimit.

So verwenden Sie es:

1. Gehen Sie zu [utilboxx.com/de/tools/pdf/image-to-pdf](/de/tools/pdf/image-to-pdf)
2. Ziehen Sie Ihre Bilder hinein (oder klicken Sie zum Durchsuchen). Sie können **JPG**, **PNG** und **WebP** im selben PDF mischen.
3. Sortieren Sie die Bilder per Drag & Drop. Die Miniaturansichten zeigen die Reihenfolge, in der sie im PDF erscheinen.
4. Wählen Sie die Seitengröße: **A4**, **Letter** oder **An Bild anpassen** (jedes Bild wird eine Seite in der Größe des Fotos).
5. Wählen Sie die Ausrichtung: **Hochformat** oder **Querformat** (oder automatisch).
6. Klicken Sie auf „Verarbeiten"
7. Laden Sie das neue PDF herunter

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in Ihrem Browser verarbeitet. Die Bilder erreichen nie einen Server.
- **Drei Formate unterstützt**: JPG, PNG und WebP im selben PDF
- **Drag-&-Drop-Sortierung**: sehen Sie die Seitenreihenfolge, ziehen Sie zum Neuordnen
- **Benutzerdefinierte Seitengröße**: A4, Letter oder An Bild anpassen
- **Funktioniert auf jedem Gerät**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Keine Wasserzeichen** auf dem Ergebnis
- **Kein Qualitätsverlust**: Bilder werden in voller Auflösung eingebettet

Wenn Sie nur gelegentlich Bilder bündeln müssen, ist dies mit Abstand die reibungsloseste Option.

## Methode 2: macOS-Vorschau

Auf einem Mac kann die eingebaute App **Vorschau** einen Ordner Bilder in wenigen Klicks in ein PDF verwandeln:

1. Öffnen Sie **Vorschau**
2. Wählen Sie **Ablage > Neu aus Zwischenablage** oder öffnen Sie das erste Bild
3. Ziehen Sie die anderen Bilder in die Seitenleiste (Miniaturansichten-Panel) in der gewünschten Reihenfolge
4. Sie können auch **Ablage > Drucken** für die Auswahl wählen und im Druckdialog **Als PDF sichern** wählen
5. **Ablage > Sichern**, um das PDF zu schreiben

Schnellerer Weg: Wählen Sie alle Bilder im **Finder** aus, klicken Sie mit der rechten Maustaste und wählen Sie **Schnellaktionen > PDF erstellen**. macOS setzt sie in alphabetischer Reihenfolge zu einem einzigen PDF zusammen. Danach können Sie die Seiten in Vorschau per Drag & Drop neu anordnen.

Vorschau ist **nur für Mac** und kostenlos. Für kleine Stapel ist es schnell, aber es erlaubt keine unterschiedliche Seitengröße pro Bild — jedes Bild bekommt die gleiche A4- oder Letter-Seite, was für Dokumente in Ordnung ist, aber Fotos mit Leerraum versieht.

## Methode 3: Kommandozeile mit img2pdf

Wenn Sie sich im Terminal wohlfühlen, ist das Open-Source-Werkzeug **img2pdf** die flexibelste CLI-Option. Es ist ein kleines Python-Werkzeug, das Bilder **ohne Re-Kodierung** in ein PDF einwickelt, was **null Qualitätsverlust** und **kleinere Dateien** bedeutet als die Umwandlung über eine Druck-zu-PDF-Pipeline.

Installieren Sie es mit \`pip install img2pdf\` (oder \`brew install img2pdf\` auf macOS), dann:

\`\`\`bash
# Alle Bilder in einem Ordner in einem einzigen PDF bündeln (alphabetische Reihenfolge)
img2pdf *.jpg --output out.pdf

# Bestimmte Bilder in einer bestimmten Reihenfolge bündeln
img2pdf page1.jpg page2.jpg page3.jpg --output out.pdf

# Seitengröße A4 und Ausrichtung Querformat
img2pdf --pagesize A4 --landscape *.jpg --output out.pdf

# Jedes Bild genau anpassen, keine Ränder, keine Skalierung
img2pdf --fit img --no-imgsize img1.jpg img2.jpg --output out.pdf
\`\`\`

\`img2pdf\` ist schnell, skriptbar und unschlagbar für die Stapelverarbeitung Hunderter Bilder. Das alternative Werkzeug **ImageMagick** (\`convert img1.jpg img2.jpg out.pdf\") re-kodiert jedes Bild als JPEG, was Qualitätsverlust einführen kann. img2pdf bettet die Originalbilder unverändert ein.

## Häufige Fragen

### Welche Bildformate werden unterstützt?

**UtilBoxx** unterstützt **JPG**, **PNG** und **WebP**. \`img2pdf\` unterstützt dieselben und einige mehr (TIFF, PPM). Wenn Sie HEIC-Fotos vom iPhone konvertieren müssen, führen Sie sie zuerst durch einen HEIC-zu-JPG-Konverter und legen Sie dann die JPGs in das Werkzeug.

### Hat das PDF eine Seite pro Bild oder alle auf einer Seite?

Eine Seite pro Bild. Jedes hinzugefügte Bild wird eine eigene Seite im PDF, in der Reihenfolge, in der Sie es anordnen. Das ist der Standard für Fotoalben und gescannte Dokumente.

### Kann ich die Bilder nach dem Hinzufügen neu anordnen?

Ja. Im [Bild-zu-PDF-Werkzeug von UtilBoxx](/de/tools/pdf/image-to-pdf) ziehen Sie die Miniaturansichten in die gewünschte Reihenfolge. Bei \`img2pdf\` listen Sie die Dateien in der gewünschten Reihenfolge auf. In der macOS-Vorschau ziehen Sie die Seiten-Miniaturen in der Seitenleiste zum Neuordnen.

### Bleibt die Bildqualität erhalten?

Ja. UtilBoxx bettet Bilder in voller Auflösung ein. \`img2pdf\` ist genauso: Es wickelt die Originalbild-Bytes in den PDF-Container, ohne sie neu zu kodieren. Das einzige Werkzeug, das re-kodiert, ist das \`convert\` von **ImageMagick**, das JPEG-Artefakte einführen kann — vermeiden Sie diesen Weg für hochwertige Ausgaben.

### Welche Seitengröße sollte ich wählen?

- **A4** (210 × 297 mm): Internationaler Standard, überall außerhalb der USA und Kanadas verwendet.
- **Letter** (8,5 × 11 in): US- und kanadischer Standard.
- **An Bild anpassen**: Jedes Bild wird eine eigene Seite, die genau dem Bild entspricht. Keine Ränder, kein Weißraum. Ideal für Fotos.

Für Dokumente (Belege, gescannte Seiten) verwenden Sie A4 oder Letter. Für Fotoalben ist „An Bild anpassen" meist die beste Wahl.

### Ist die Nutzung eines Online-Bild-zu-PDF-Konverters sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in Ihrem Browser** – kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen sollten Sie davon ausgehen, dass Ihre Datei auf einen entfernten Server hochgeladen wird, und die Datenschutzrichtlinie sorgfältig lesen. Vermeiden Sie das Hochladen von Fotos mit persönlichen, finanziellen, medizinischen oder rechtlich sensiblen Informationen zu einem Konverter, dem Sie nicht vertrauen.

### Was ist der Unterschied zwischen dem Bündeln von Bildern als PDF-Seiten und dem Zusammenfügen zu einem einzigen Bild?

Das Bündeln als PDF-Seiten ist der richtige Ansatz für Fotoalben, gescannte Dokumente und jeden Fall, in dem jedes Bild eine separate, einzeln anzeigbare Seite sein soll. Das Zusammenfügen zu einem einzigen Bild ist besser für Raster-Montagen und Vergleichsaufnahmen. Die meisten Leute wollen das Erstere.

## Fazit

Bilder in einem PDF zu bündeln ist eine kleine Aufgabe, die ständig anfällt und keine kostenpflichtige Subskription oder Software-Installation erfordern sollte. Für die meisten Menschen ist das [kostenlose Bild-zu-PDF-Werkzeug von UtilBoxx](/de/tools/pdf/image-to-pdf) die offensichtliche Wahl: privat, schnell, kostenlos, mit Unterstützung für JPG/PNG/WebP und im Browser.

Wenn Sie auf einem Mac sind, erledigen die Schnellaktionen der Vorschau das in zwei Klicks. Wenn Sie Stapelverarbeitung skripten, ist img2pdf im Terminal unschlagbar.

Für alles andere besuchen Sie die [PDF-Werkzeuge von UtilBoxx](/de/tools/pdf): Dort finden Sie einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit PDFs – alles im Browser.`;

export const imageToPdfPost: Record<string, BlogPost> = {
  en: {
    slug: "convert-images-to-pdf",
    category: "PDF Tools",
    date: "2026-02-08",
    readTime: "4 min",
    title: "How to Convert Images to PDF (JPG, PNG, WebP)",
    description: "Combine photos and scans into a single PDF. Drag in JPG, PNG, WebP, and reorder before saving.",
    content: imageToPdfEn,
  },
  zh: {
    slug: "convert-images-to-pdf",
    category: "PDF 工具",
    date: "2026-02-08",
    readTime: "4 分钟",
    title: "如何把图片转成 PDF（JPG、PNG、WebP）",
    description: "把照片和扫描页合成一个 PDF。拖入 JPG、PNG、WebP，保存前可重新排序。",
    content: imageToPdfZh,
  },
  ja: {
    slug: "convert-images-to-pdf",
    category: "PDF ツール",
    date: "2026-02-08",
    readTime: "4 分",
    title: "画像を PDF に変換する方法（JPG、PNG、WebP）",
    description: "写真やスキャンを 1 つの PDF にまとめます。JPG、PNG、WebP をドラッグし、保存前に並べ替え可能。",
    content: imageToPdfJa,
  },
  es: {
    slug: "convert-images-to-pdf",
    category: "Herramientas PDF",
    date: "2026-02-08",
    readTime: "4 min",
    title: "Cómo convertir imágenes a PDF (JPG, PNG, WebP)",
    description: "Combina fotos y escaneos en un único PDF. Arrastra JPG, PNG, WebP y reordena antes de guardar.",
    content: imageToPdfEs,
  },
  pt: {
    slug: "convert-images-to-pdf",
    category: "Ferramentas PDF",
    date: "2026-02-08",
    readTime: "4 min",
    title: "Como converter imagens em PDF (JPG, PNG, WebP)",
    description: "Combine fotos e digitalizações em um único PDF. Arraste JPG, PNG, WebP e reordene antes de salvar.",
    content: imageToPdfPt,
  },
  fr: {
    slug: "convert-images-to-pdf",
    category: "Outils PDF",
    date: "2026-02-08",
    readTime: "4 min",
    title: "Comment convertir des images en PDF (JPG, PNG, WebP)",
    description: "Combinez photos et scans en un seul PDF. Glissez JPG, PNG, WebP et réorganisez avant d'enregistrer.",
    content: imageToPdfFr,
  },
  de: {
    slug: "convert-images-to-pdf",
    category: "PDF-Werkzeuge",
    date: "2026-02-08",
    readTime: "4 Min",
    title: "Bilder in PDF umwandeln (JPG, PNG, WebP)",
    description: "Fassen Sie Fotos und Scans in einem einzigen PDF zusammen. JPG, PNG, WebP per Drag & Drop, vor dem Speichern neu anordnen.",
    content: imageToPdfDe,
  },
};
