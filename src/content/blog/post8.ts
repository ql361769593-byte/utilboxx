// Blog post: How to Rotate PDF Pages
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const rotatePdfEn = `## Why rotate PDF pages?

Almost every scanned document, emailed attachment, or photocopied page eventually arrives in the wrong orientation. A contract page is sideways. The signature page is upside down. A two-page spread from a book scan lands with one page rotated 90° from the other. These little orientation mistakes are annoying, unprofessional, and surprisingly hard to fix in a PDF — because the PDF format is designed to display identically everywhere, including orientation.

Rotating pages is the kind of task that feels trivial but trips people up:

- **Sideways scans**: Many office scanners default to feeding pages in portrait orientation. A landscape A4 form ends up rotated 90° in the final PDF.
- **Upside-down signature pages**: When you sign and rescan a printed contract, the scanned image is sometimes flipped. The text is correct, but reading it requires tilting your head.
- **Mixed-orientation documents**: A report may mix portrait body text with landscape diagrams, charts, or wide tables. The reader should not have to switch orientations manually.
- **Photos and embedded images**: An image inserted on its side ruins the layout of the final document.
- **Email attachments**: Opening a sideways PDF in a phone email app makes it almost impossible to read.
- **Printable forms**: A form meant to be filled by hand on paper needs the right orientation or it wastes paper.

The good news: rotating PDF pages permanently — saving a corrected version with all pages in the right direction — is a 10-second job in your browser. No install, no signup, no watermark.

## Method 1: Use UtilBoxx's Free PDF Rotator (Recommended)

The fastest, safest, and most private way to rotate PDF pages is [UtilBoxx's PDF Rotate tool](/en/tools/pdf/rotate). It runs entirely in your browser, so your file never leaves your device. There is no upload, no signup, no watermark, and no daily limit.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/pdf/rotate](/en/tools/pdf/rotate)
2. Click the upload area and select your PDF (or drag and drop)
3. Pick the pages you want to rotate — one, several, or all of them
4. Choose a rotation angle: **90° clockwise**, **90° counter-clockwise**, or **180°**
5. Click "Process"
6. Download the new, corrected PDF

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. The file never reaches a server.
- **Three angles**: 90° clockwise, 90° counter-clockwise, and 180° — enough to fix any standard orientation
- **Per-page control**: rotate a single page, a custom selection, or every page at once
- **Works on any device**: Windows, Mac, Linux, ChromeOS, iOS, Android — any modern browser
- **Permanent rotation**: the output PDF opens in the corrected orientation for every reader, with no further setup
- **No watermarks** on the output

If you only need to fix a few pages every now and then, this is by far the lowest-friction option.

## Method 2: Adobe Acrobat Pro (Paid)

Adobe Acrobat Pro is the heavyweight of the PDF world and the default for many legal, publishing, and corporate teams. Its "Organize Pages" view shows every page as a thumbnail. You can right-click a page and pick "Rotate Pages" — clockwise, counter-clockwise, or 180° — for the current selection, odd pages, even pages, or a custom range. You can preview the rotation before saving, and the result is reliable across every PDF reader.

The catch is the price. Acrobat Pro costs roughly **$19.99 per month** (about $240 per year) on a subscription. For a one-off rotation of a few pages, that is a poor trade. You also need a desktop install, which can be heavy on older machines.

Acrobat is worth it only if you already use it for editing, redaction, e-signatures, or form creation. If rotation is all you need, a browser-based tool does the job without the bill.

## Method 3: macOS Preview

On a Mac, the built-in **Preview** app can rotate pages natively and save the changes back to the PDF. It is fast and good for quick fixes:

1. Open the PDF in **Preview**
2. Click **View > Thumbnails** to show the page panel
3. Select the pages you want to rotate
4. Hold **Command** and click a thumbnail, then choose **Rotate Left** (⌘L) or **Rotate Right** (⌘R) from the **Tools** menu
5. **File > Save** to write the rotation back to the PDF

**Tip**: In macOS Preview the shortcut **⌘L** rotates the currently selected thumbnail 90° counter-clockwise. The new orientation is saved with the document.

This method is **Mac only** and works best for one or two pages. If you need to rotate 50 out of 200 pages, the browser-based UtilBoxx tool is significantly faster.

## Method 4: Command line with qpdf

If you are comfortable in a terminal, the open-source tool **qpdf** is the most reliable CLI option for rotation. Install it with Homebrew (\`brew install qpdf\`), then:

\`\`\`bash
# Rotate page 1 by 90 degrees clockwise
qpdf input.pdf --rotate=+90:1 -- out.pdf

# Rotate pages 1, 3, 5 by 180 degrees
qpdf input.pdf --rotate=180:1,3,5 -- out.pdf

# Rotate all pages by 90 degrees counter-clockwise (--rotate uses + for CW, - for CCW)
qpdf input.pdf --rotate=-90 -- out.pdf
\`\`\`

The \`--rotate\` flag takes an angle in degrees followed by a colon-separated list of page numbers (or no list, meaning all pages). **qpdf** is fast, lightweight, and ideal for scripting batch rotation across hundreds of files.

## Common questions

### Does rotating a PDF reduce quality?

No. Permanent rotation of a PDF page only changes the orientation flag stored in the page dictionary. The text, images, and vector content underneath are not re-encoded. A 90° rotation is essentially free — the PDF just tells the reader "display this page rotated." A 180° rotation is the same: a flag flip, not a re-render. Quality is preserved at 100%.

### Can I rotate just one page in a multi-page PDF?

Yes. [UtilBoxx's PDF Rotate tool](/en/tools/pdf/rotate) lets you select a specific page, a custom set of pages, or every page. With qpdf the syntax is \`--rotate=+90:1\` for page 1 only, or \`--rotate=+90:1,3,5\` for pages 1, 3, and 5. Acrobat Pro and macOS Preview both support per-page selection too.

### Why does my PDF open in a different orientation on different devices?

PDF readers honor the orientation flag set on each page. If page 7 is marked as rotated 90° in the file, every reader — Acrobat, Preview, Chrome, mobile viewers — will display it rotated 90°. The rotation is part of the document, not the application. That is exactly why permanent rotation is the right fix: once you save it, every reader sees the same thing.

### Can I rotate a scanned PDF?

Yes. Scanned PDFs are just images wrapped in a PDF container, and the rotation flag works on them the same way. The text does not become "more rotated" — only the display orientation changes. If you also need the text of the scans to be searchable, run OCR after the rotation.

### Is it safe to use an online PDF rotator?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your file is being uploaded to a remote server and read their privacy policy carefully. Avoid uploading any document containing personal, financial, medical, or legally sensitive information to a rotator you do not trust.

### What is the difference between "view rotation" and "permanent rotation"?

A "view rotation" is the orientation your reader applies to the display, usually reset every time you reopen the file. A "permanent rotation" is written into the PDF itself, so every reader — including printers, e-readers, and other people's devices — sees the corrected orientation. UtilBoxx and the other methods above all produce a permanent rotation.

## Conclusion

Rotating PDF pages is one of those small tasks that comes up constantly — especially with scanned documents — and should not require a paid subscription or a software install. For most people, [UtilBoxx's free PDF Rotate tool](/en/tools/pdf/rotate) is the obvious choice: it is private, fast, free, with no signup and no watermark.

If you are on a Mac and just need to fix one page, Preview's ⌘L shortcut works in a pinch. If you are scripting batch work, qpdf in the terminal is unbeatable. And if you already pay for Adobe Acrobat for other reasons, its "Organize Pages" view is excellent.

For everything else, head to [UtilBoxx PDF tools](/en/tools/pdf) and you will find a complete, privacy-first toolkit for working with PDFs — all in your browser.`;

const rotatePdfZh = `## 为什么要旋转 PDF 页面？

几乎每份扫描件、邮件附件或复印的页面，最终都会以错误的方向出现。合同页是横的，签名页上下颠倒，从书里扫描的双页跨页一张横着一张竖着。这些小方向问题既烦人又不专业，而且在 PDF 里出奇难改 —— 因为 PDF 的设计目标就是"在任何地方显示都一样"，包括方向。

旋转页面这种事看似简单，却经常让人卡住：

- **扫描件横置**：很多办公扫描仪默认以竖向送纸，一张横向的 A4 表单最终在 PDF 里就被旋转了 90°。
- **签名页上下颠倒**：当你签好字再扫描合同时，扫描图有时会被翻面。文字内容正确，但阅读时需要歪着脑袋。
- **方向混排的文档**：报告可能把竖向正文和横向的图表、宽表格混在一起，读者不该每次都手动切换方向。
- **图片和插图**：一张侧着的图片会毁掉整份文档的版式。
- **邮件附件**：在手机邮箱里打开一张横着的 PDF 几乎没法读。
- **可打印的表格**：一张本来要手填的表格如果方向错了，打印出来既浪费纸也浪费时间。

好消息是：把 PDF 页面**永久**旋转 —— 也就是保存成方向正确的新版本 —— 在浏览器里 10 秒就能搞定。无需安装、无需注册、无水印。

## 方法一：使用 UtilBoxx 免费 PDF 旋转工具（推荐）

最快、最安全、最私密的旋转方式就是 [UtilBoxx 的 PDF 旋转工具](/zh/tools/pdf/rotate)。它完全在你的浏览器中运行，文件不会离开你的设备。没有上传、没有注册、输出文件没有水印，也没有每日次数限制。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/pdf/rotate](/zh/tools/pdf/rotate)
2. 点击上传区域选择你的 PDF（或直接拖入）
3. 选择要旋转的页面 —— 一页、几页、或者全部
4. 选择旋转角度：**顺时针 90°**、**逆时针 90°**、或 **180°**
5. 点击"开始处理"
6. 下载新的、方向正确的 PDF

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，文件不会上传到任何服务器
- **三种角度**：顺时针 90°、逆时针 90°、180° —— 足以应对任何标准方向
- **逐页控制**：可以旋转单页、自定义选中页、或一次旋转全部
- **全设备支持**：Windows、Mac、Linux、ChromeOS、iOS、Android —— 任何现代浏览器都行
- **永久旋转**：输出的 PDF 在任何阅读器里打开都是正确方向，接收方无需任何额外操作
- **输出 PDF 无水印**

如果你只是偶尔旋转几页，这是最省心的选择。

## 方法二：Adobe Acrobat Pro（付费）

Adobe Acrobat Pro 是 PDF 领域的重量级选手，也是很多法务、出版和企业团队的默认工具。它的"组织页面"视图会把每一页都显示为缩略图，你可以右键点击页面选择"旋转页面" —— 顺时针、逆时针、或 180° —— 作用范围可以是当前选中页、奇数页、偶数页、或自定义范围。保存前可以预览旋转效果，结果在所有 PDF 阅读器里都一致可靠。

代价是价格。Acrobat Pro 订阅版大约 **每月 $19.99**（每年约 $240 美元）。如果只是偶尔旋转几页，这个投入显然不划算。你还需要桌面安装，对老机器也不太友好。

只有当你已经用它做编辑、涂黑、电子签名或表单创建时，Acrobat 才值得。否则，浏览器工具完全够用，还免了账单。

## 方法三：macOS Preview

在 Mac 上，内置的 **Preview** 应用可以原生旋转页面并把修改写回 PDF 文件。它非常快，适合临时修一修：

1. 用 **Preview** 打开 PDF
2. 点击 **视图 > 缩略图** 显示页面面板
3. 选中要旋转的页面
4. 按住 **Command** 并点击缩略图，然后在 **工具** 菜单里选 **向左旋转**（⌘L）或 **向右旋转**（⌘R）
5. **文件 > 存储** 把旋转写回 PDF

**小贴士**：在 macOS Preview 中，快捷键 **⌘L** 会把当前选中的缩略图逆时针旋转 90°。新方向会随文档一起保存。

这个方法**仅限 Mac**，最适合一两页的修改。如果你要在 200 页里旋转其中 50 页，用浏览器的 UtilBoxx 工具会快得多。

## 方法四：命令行 qpdf

如果你熟悉终端，开源工具 **qpdf** 是命令行里最可靠的旋转方案。用 Homebrew 安装（\`brew install qpdf\`）后：

\`\`\`bash
# 将第 1 页顺时针旋转 90 度
qpdf input.pdf --rotate=+90:1 -- out.pdf

# 将第 1、3、5 页旋转 180 度
qpdf input.pdf --rotate=180:1,3,5 -- out.pdf

# 将所有页逆时针旋转 90 度（--rotate 中 + 为顺时针，- 为逆时针）
qpdf input.pdf --rotate=-90 -- out.pdf
\`\`\`

\`--rotate\` 参数后跟角度（度数），冒号后跟页码列表（不写则作用于全部页面）。**qpdf** 快速、轻量、非常适合写脚本对成百上千个文件做批量旋转。

## 常见问题

### 旋转 PDF 会降低质量吗？

不会。PDF 页面的"永久旋转"只修改页字典里的方向标志位，文字、图片、矢量内容都不会被重新编码。90° 旋转本质上是零成本 —— PDF 只是告诉阅读器"把这页转过来显示"。180° 旋转也是一样：只是标志位翻转，不是重新渲染。质量保持 100%。

### 在多页 PDF 里只旋转一页可以吗？

可以。[UtilBoxx 的 PDF 旋转工具](/zh/tools/pdf/rotate) 允许你选中单页、自定义页集合、或全部页面。在 qpdf 里用 \`--rotate=+90:1\` 旋转第 1 页，或者 \`--rotate=+90:1,3,5\` 旋转第 1、3、5 页。Acrobat Pro 和 macOS Preview 都支持按页选择。

### 为什么我的 PDF 在不同设备上打开方向不一样？

PDF 阅读器会按页面内置的方向标志位来显示。如果第 7 页在文件里被标记为旋转 90°，那么所有阅读器 —— Acrobat、Preview、Chrome、手机端阅读器 —— 都会按旋转 90° 来显示。旋转是文档本身的一部分，不是应用的事。这正是为什么"永久旋转"是正确的修复：一旦保存，所有人看到的都是同一个方向。

### 扫描的 PDF 可以旋转吗？

可以。扫描 PDF 只是在 PDF 容器里包了图片，方向标志位对它们一样有效。文字不会"更歪" —— 改变的只是显示方向。如果你还需要让扫描内容可搜索，先旋转再做 OCR。

### 使用在线 PDF 旋转工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的文件会被上传到远程服务器，并仔细阅读隐私政策。避免向你不信任的旋转工具上传任何包含个人、财务、医疗或法律敏感信息的文件。

### "查看旋转"和"永久旋转"有什么区别？

"查看旋转"是阅读器对显示做的临时调整，通常重新打开文件就丢失。"永久旋转"会被写入 PDF 文件本身，所有阅读器 —— 包括打印机、电子阅读器、别人的设备 —— 都会看到正确方向。UtilBoxx 和上面其他方法产出的都是永久旋转。

## 结论

旋转 PDF 页面是一件经常要做的小事 —— 尤其是扫描文档 —— 不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费 PDF 旋转工具](/zh/tools/pdf/rotate) 是显而易见的选择：私密、快速、免费、无需注册、无水印。

如果你是 Mac 用户，只想快速改一页，Preview 的 ⌘L 快捷键也能凑合用。如果你写脚本做批量处理，qpdf 在终端里无可替代。如果你已经为 Adobe Acrobat 付了费，那它的"组织页面"视图也很优秀。

其他情况下，去看 [UtilBoxx 的 PDF 工具集](/zh/tools/pdf)，你会找到一个完整的、隐私优先的 PDF 处理工具箱 —— 全部在浏览器里完成。`;

const rotatePdfJa = `## なぜ PDF ページを回転するのか？

スキャンした書類も、メールに添付されたファイルも、コピーしたページも、最終的に間違った向きで届くことがよくあります。契約書のページが横向き、署名ページが上下逆さま、本の見開きスキャンで 1 ページだけ 90° ずれている。こうした小さな向きのミスは鬱陶しく、見た目も悪く、PDF では直すのが意外に面倒です。PDF は「どこでも同じ表示」を目的に設計されているからです。

ページ回転は、一見シンプルなのに多くの人がつまずく作業です：

- **横向きのスキャン**：多くのオフィススキャナは縦送りで紙を送るため、横向きの A4 書類が PDF では 90° 回転してしまいます。
- **上下逆さまの署名ページ**：紙に署名してからスキャンし直すと、画像が反転していることがあります。文字は正しいのに、首を傾けて読む羽目に。
- **向きが混在する文書**：縦の本文と横の図表・ワイドテーブルが混在するレポート。読者が毎回向きを手動で切り替えるべきではありません。
- **画像や挿入写真**：横向きで挿入された 1 枚の写真が文書全体のレイアウトを壊します。
- **メール添付**：スマホのメールアプリで横向き PDF を開くと、もう読めません。
- **印刷用フォーム**：手で記入するためのフォームは正しい向きでないと紙とインクの無駄になります。

良いニュースは、PDF ページを**永久に**回転する —— つまり正しい向きで新しいファイルとして保存する —— ことはブラウザで 10 秒で終わることです。インストール不要、登録不要、透かし不要。

## 方法 1：UtilBoxx の無料 PDF 回転ツール（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の PDF 回転ツール](/ja/tools/pdf/rotate) です。完全にブラウザ内で動作するため、ファイルがデバイスの外に出ることがありません。アップロードも登録も不要、透かしも入りません、利用回数制限もありません。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/pdf/rotate](/ja/tools/pdf/rotate) を開く
2. アップロード領域をクリックして PDF を選択（またはドラッグ＆ドロップ）
3. 回転したいページを選ぶ —— 1 ページ、数ページ、または全ページ
4. 回転角度を選択：**時計回り 90°**、**反時計回り 90°**、または **180°**
5.「処理」をクリック
6. 新しい、正しい向きの PDF をダウンロード

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべての処理がブラウザ内で完結。ファイルはサーバーへ送信されません
- **3 つの角度**：時計回り 90°、反時計回り 90°、180° —— あらゆる標準的な向きに対応
- **ページ単位の制御**：1 ページだけ、複数ページの選択、全ページ一括、いずれも可能
- **あらゆるデバイスで動作**：Windows、Mac、Linux、ChromeOS、iOS、Android
- **永続的な回転**：出力 PDF はどのリーダーでも正しい向きで表示され、受け手が何もする必要がない
- **出力 PDF に透かしなし**

たまに数ページを直すだけなら、これほど低コストな選択肢はありません。

## 方法 2：Adobe Acrobat Pro（有料）

Adobe Acrobat Pro は PDF 界のヘビー級で、法務・出版・企業チームの定番です。「ページ構成」ビューでは全ページがサムネール表示され、ページを右クリックして「ページを回転」 —— 時計回り、反時計回り、180° —— を選択できます。対象は現在の選択、奇数ページ、偶数ページ、または任意のカスタム範囲。保存前にプレビューでき、結果はどの PDF リーダーでも安定して表示されます。

ただし価格が高めです。Acrobat Pro はサブスクリプションで月額約 **$19.99**（年額約 $240）。一度だけ数ページ回転する用途なら割に合いません。デスクトップインストールが必要なので、古いマシンには負担です。

既に編集・墨消し・電子署名・フォーム作成などのために Acrobat を利用しているなら価値があります。回転だけが目的であれば、ブラウザツールで十分です。

## 方法 3：macOS のプレビュー

Mac では、内蔵の **プレビュー** アプリがページをネイティブに回転し、変更を PDF に書き戻せます。素早く、応急処置に最適です：

1. **プレビュー** で PDF を開く
2.**表示 > サムネール** をクリックしてページパネルを表示
3. 回転したいページを選択
4. **Command** を押しながらサムネールをクリックし、**ツール** メニューから **左に回転**（⌘L）または **右に回転**（⌘R）を選択
5. **ファイル > 保存** で回転を PDF に書き戻す

**ヒント**：macOS プレビューでショートカット **⌘L** を押すと、選択中のサムネールが反時計回りに 90° 回転します。新しい向きは文書と一緒に保存されます。

この方法は **Mac 専用** で、1〜2 ページの修正に向きます。200 ページ中の 50 ページを回転するなら、ブラウザ版の UtilBoxx ツールのほうが圧倒的に速いです。

## 方法 4：コマンドラインで qpdf

ターミナルに慣れているなら、オープンソースの **qpdf** が回転用の CLI として最も信頼できます。Homebrew でインストール（\`brew install qpdf\`）したら：

\`\`\`bash
# 1 ページ目を時計回りに 90 度回転
qpdf input.pdf --rotate=+90:1 -- out.pdf

# 1、3、5 ページ目を 180 度回転
qpdf input.pdf --rotate=180:1,3,5 -- out.pdf

# 全ページを反時計回りに 90 度回転（--rotate の + は時計回り、- は反時計回り）
qpdf input.pdf --rotate=-90 -- out.pdf
\`\`\`

\`--rotate\` フラグは角度の後にコロン区切りのページ番号を取ります（リスト省略時は全ページ）。**qpdf** は高速・軽量で、何百ものファイルをバッチ回転するスクリプトに最適です。

## よくある質問

### PDF の回転で品質は落ちますか？

落ちません。PDF ページの「永続的な回転」は、ページ辞書の向きフラグを書き換えるだけです。テキストも画像もベクターも再エンコードされません。90° 回転はほぼゼロコスト —— PDF は「このページを回転させて表示」と指示するだけです。180° 回転も同様で、フラグの反転であり再描画ではありません。品質は 100% 維持されます。

### 複数ページ PDF のうち 1 ページだけ回転できますか？

できます。[UtilBoxx の PDF 回転ツール](/ja/tools/pdf/rotate) では、1 ページのみの選択、複数ページのカスタム選択、全ページ一括が可能です。qpdf では \`--rotate=+90:1\` で 1 ページ目だけ、\`--rotate=+90:1,3,5\` で 1、3、5 ページ目を指定します。Acrobat Pro と macOS プレビューもページ単位の選択に対応しています。

### デバイスごとに PDF の向きが違うのはなぜですか？

PDF リーダーは各ページに埋め込まれた向きフラグに従います。7 ページ目のファイル内フラグが「90° 回転」になっていれば、Acrobat・プレビュー・Chrome・スマホアプリなど、どのリーダーでも 90° 回転して表示されます。向きは文書の一部であり、アプリケーションのものではありません。これこそが「永続的な回転」が正しい解決策である理由です。一度保存すれば、全員が同じ向きで見ます。

### スキャンした PDF を回転できますか？

できます。スキャン PDF は PDF コンテナに入った画像であり、向きフラグは同様に機能します。文字が「より斜め」になることはなく、変わるのは表示の向きだけです。スキャン内容を検索可能にしたい場合は、回転してから OCR をかけてください。

### オンラインの PDF 回転ツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、ファイルがリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人情報、財務、医療、法的に機密性の高い情報を含む文書は、信頼できない回転ツールにアップロードしないでください。

### 「表示回転」と「永続的な回転」の違いは何ですか？

「表示回転」はリーダーが表示に一時的に適用するもので、通常はファイルを開き直すと失われます。「永続的な回転」は PDF ファイル自体に書き込まれるため、リーダーだけでなく、プリンタ・電子書籍リーダー・他人のデバイスを含め、すべての環境で正しい向きになります。UtilBoxx と上記の手法はすべて永続的な回転を生成します。

## まとめ

PDF ページの回転は、頻繁に発生する —— 特にスキャン文書では —— 小さな作業であり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料 PDF 回転ツール](/ja/tools/pdf/rotate) は明白な選択です：プライベートで、速くて、無料で、登録不要、透かしなし。

Mac ユーザーで 1 ページだけ直したいなら、プレビューの ⌘L ショートカットが即応できます。バッチ処理をスクリプト化したいなら、ターミナルで qpdf が最強です。Adobe Acrobat を他用途で既に利用しているなら、「ページ構成」ビューが優れています。

その他は、[UtilBoxx の PDF ツール](/ja/tools/pdf) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先の PDF ツールキットが見つかります。`;

const rotatePdfEs = `## ¿Por qué rotar páginas de un PDF?

Casi todos los documentos escaneados, archivos adjuntos o páginas fotocopiadas terminan llegando con la orientación incorrecta. Una página de contrato está de lado. La página de firma está al revés. Una doble página escaneada de un libro llega con una página girada 90° respecto a la otra. Estos pequeños errores de orientación son molestos, poco profesionales y sorprendentemente difíciles de arreglar en un PDF, precisamente porque el formato PDF está diseñado para verse igual en todas partes, incluida la orientación.

Rotar páginas parece trivial, pero a mucha gente le da problemas:

- **Escaneos de lado**: Muchos escáneres de oficina alimentan las páginas en vertical. Un formulario A4 en horizontal acaba rotado 90° en el PDF final.
- **Páginas de firma al revés**: Cuando firmas y reescaneas un contrato impreso, a veces la imagen sale invertida. El texto está bien, pero hay que ladear la cabeza para leerlo.
- **Documentos de orientación mixta**: Un informe puede mezclar texto en vertical con diagramas, gráficos o tablas anchas en horizontal. El lector no debería tener que cambiar de orientación a mano.
- **Fotos e imágenes incrustadas**: Una imagen insertada de lado arruina la maquetación del documento final.
- **Adjuntos de email**: Abrir un PDF de lado en la app de correo del móvil lo hace casi ilegible.
- **Formularios imprimibles**: Un formulario pensado para rellenarse a mano necesita la orientación correcta, si no, se desperdicia papel.

La buena noticia: rotar páginas PDF de forma permanente — guardar una versión corregida con todas las páginas en la dirección correcta — es un trabajo de 10 segundos en tu navegador. Sin instalar nada, sin registro, sin marca de agua.

## Método 1: Usa el rotador de PDF gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de rotar páginas PDF es la [herramienta de rotar PDF de UtilBoxx](/es/tools/pdf/rotate). Se ejecuta por completo en tu navegador, por lo que el archivo nunca sale de tu dispositivo. Sin subidas, sin registro, sin marca de agua y sin límite diario.

Así se usa:

1. Ve a [utilboxx.com/es/tools/pdf/rotate](/es/tools/pdf/rotate)
2. Haz clic en el área de subida y selecciona tu PDF (o arrástralo)
3. Elige las páginas que quieres rotar: una, varias o todas
4. Escoge un ángulo de rotación: **90° en el sentido horario**, **90° en el sentido antihorario** o **180°**
5. Haz clic en "Procesar"
6. Descarga el PDF nuevo y corregido

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. El archivo nunca llega a un servidor.
- **Tres ángulos**: 90° horario, 90° antihorario y 180° — suficiente para corregir cualquier orientación estándar
- **Control por página**: rota una sola página, una selección personalizada o todas a la vez
- **Funciona en cualquier dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Rotación permanente**: el PDF de salida abre con la orientación correcta en cualquier lector, sin configuración adicional
- **Sin marcas de agua** en el resultado

Si solo necesitas corregir unas páginas de vez en cuando, esta es la opción de menor fricción con diferencia.

## Método 2: Adobe Acrobat Pro (De pago)

Adobe Acrobat Pro es el peso pesado del mundo PDF y la herramienta por defecto de muchos equipos legales, editoriales y corporativos. Su vista "Organizar páginas" muestra todas las páginas como miniaturas. Puedes hacer clic derecho en una página y elegir "Rotar páginas" — en sentido horario, antihorario o 180° — para la selección actual, páginas impares, pares o un rango personalizado. Puedes previsualizar la rotación antes de guardar, y el resultado es fiable en todos los lectores.

El inconveniente es el precio. Acrobat Pro cuesta aproximadamente **$19.99 al mes** (unos $240 al año) en suscripción. Para una rotación puntual de unas páginas, es una mala relación calidad-precio. También requiere instalación de escritorio, que puede ser pesada en máquinas antiguas.

Acrobat solo vale la pena si ya lo usas para edición, redacción, firmas electrónicas o creación de formularios. Si rotar es todo lo que necesitas, una herramienta basada en el navegador hace el trabajo sin la factura.

## Método 3: Vista Previa de macOS

En Mac, la app integrada **Vista Previa** puede rotar páginas de forma nativa y guardar los cambios en el PDF. Es rápida y útil para arreglos puntuales:

1. Abre el PDF en **Vista Previa**
2. Haz clic en **Ver > Miniaturas** para mostrar el panel de páginas
3. Selecciona las páginas que quieras rotar
4. Mantén **Command** pulsado y haz clic en una miniatura; en el menú **Herramientas** elige **Rotar a la izquierda** (⌘L) o **Rotar a la derecha** (⌘R)
5. **Archivo > Guardar** para escribir la rotación en el PDF

**Consejo**: en Vista Previa de macOS, el atajo **⌘L** rota la miniatura seleccionada 90° en sentido antihorario. La nueva orientación se guarda con el documento.

Este método es **solo para Mac** y funciona mejor con una o dos páginas. Si necesitas rotar 50 de 200 páginas, la herramienta en navegador de UtilBoxx es notablemente más rápida.

## Método 4: Línea de comandos con qpdf

Si te manejas en la terminal, la herramienta de código abierto **qpdf** es la opción CLI más fiable para rotar. Instálala con Homebrew (\`brew install qpdf\`), luego:

\`\`\`bash
# Rotar la página 1 90 grados en sentido horario
qpdf input.pdf --rotate=+90:1 -- out.pdf

# Rotar las páginas 1, 3, 5 180 grados
qpdf input.pdf --rotate=180:1,3,5 -- out.pdf

# Rotar todas las páginas 90 grados en sentido antihorario (en --rotate, + es horario, - es antihorario)
qpdf input.pdf --rotate=-90 -- out.pdf
\`\`\`

El parámetro \`--rotate\` toma un ángulo en grados seguido de una lista de páginas separadas por comas (sin lista significa todas). **qpdf** es rápido, ligero e ideal para programar rotaciones por lotes sobre cientos de archivos.

## Preguntas frecuentes

### ¿Rotar un PDF reduce la calidad?

No. La rotación permanente de una página PDF solo cambia la marca de orientación almacenada en el diccionario de página. El texto, las imágenes y el contenido vectorial subyacente no se re-codifican. Una rotación de 90° es esencialmente gratis: el PDF simplemente le dice al lector "muestra esta página rotada". Una rotación de 180° es lo mismo: un cambio de marca, no un re-render. La calidad se preserva al 100%.

### ¿Puedo rotar solo una página en un PDF de varias páginas?

Sí. La [herramienta de rotar PDF de UtilBoxx](/es/tools/pdf/rotate) te permite seleccionar una página específica, un conjunto personalizado o todas. Con qpdf la sintaxis es \`--rotate=+90:1\` para la página 1 sola, o \`--rotate=+90:1,3,5\` para las páginas 1, 3 y 5. Acrobat Pro y Vista Previa de macOS también admiten selección por página.

### ¿Por qué mi PDF se abre con orientaciones distintas en dispositivos diferentes?

Los lectores de PDF respetan la marca de orientación establecida en cada página. Si la página 7 está marcada como rotada 90° en el archivo, todos los lectores — Acrobat, Vista Previa, Chrome, visores móviles — la mostrarán rotada 90°. La rotación es parte del documento, no de la aplicación. Por eso la rotación permanente es la solución correcta: una vez guardada, todos ven lo mismo.

### ¿Puedo rotar un PDF escaneado?

Sí. Los PDF escaneados son solo imágenes envueltas en un contenedor PDF, y la marca de rotación funciona igual con ellos. El texto no se vuelve "más torcido", solo cambia la orientación de la visualización. Si también necesitas que el texto de los escaneos sea buscable, aplica OCR después de la rotación.

### ¿Es seguro usar un rotador de PDF online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador**: sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tu archivo se está subiendo a un servidor remoto y lee atentamente su política de privacidad. Evita subir a un rotador en el que no confías cualquier documento con información personal, financiera, médica o legalmente sensible.

### ¿Cuál es la diferencia entre "rotación de visualización" y "rotación permanente"?

La "rotación de visualización" es la orientación que tu lector aplica a la vista, normalmente se reinicia cada vez que reabres el archivo. La "rotación permanente" se escribe en el propio PDF, de modo que todos los lectores — incluidas impresoras, e-readers y los dispositivos de otras personas — ven la orientación corregida. UtilBoxx y los demás métodos anteriores producen una rotación permanente.

## Conclusión

Rotar páginas de un PDF es una de esas pequeñas tareas que aparecen constantemente — sobre todo con documentos escaneados — y no deberían requerir una suscripción de pago o instalar software. Para la mayoría de la gente, la [herramienta gratuita de rotar PDF de UtilBoxx](/es/tools/pdf/rotate) es la opción obvia: es privada, rápida, gratis, sin registro y sin marca de agua.

Si estás en Mac y solo necesitas arreglar una página, el atajo ⌘L de Vista Previa funciona. Si estás programando trabajo por lotes, qpdf en la terminal es imbatible. Y si ya pagas Adobe Acrobat por otras razones, su vista "Organizar páginas" es excelente.

Para todo lo demás, visita las [herramientas PDF de UtilBoxx](/es/tools/pdf) y encontrarás un conjunto completo de herramientas para trabajar con PDF, con privacidad como prioridad, todo en tu navegador.`;

const rotatePdfPt = `## Por que girar páginas de um PDF?

Quase todo documento escaneado, anexo de e-mail ou página xerocada acaba chegando na orientação errada. Uma página de contrato está de lado. A página de assinatura está de cabeça para baixo. Uma abertura de livro escaneada vem com uma página girada 90° em relação à outra. Esses pequenos erros de orientação são irritantes, pouco profissionais e surpreendentemente difíceis de corrigir em um PDF — justamente porque o PDF foi feito para ser exibido igual em qualquer lugar, inclusive na orientação.

Girar páginas parece simples, mas pega muita gente:

- **Digitalizações de lado**: muitos escâneres de escritório alimentam as páginas em retrato. Um formulário A4 em paisagem acaba girado 90° no PDF final.
- **Páginas de assinatura invertidas**: quando você assina e redigitaliza um contrato impresso, às vezes a imagem sai invertida. O texto está certo, mas é preciso inclinar a cabeça para ler.
- **Documentos com orientação mista**: um relatório pode misturar corpo de texto em retrato com diagramas, gráficos ou tabelas largas em paisagem. O leitor não deveria ter que trocar a orientação manualmente.
- **Fotos e imagens embutidas**: uma imagem inserida de lado arruína o layout do documento final.
- **Anexos de e-mail**: abrir um PDF de lado no app de e-mail do celular torna-o quase ilegível.
- **Formulários imprimíveis**: um formulário para preencher à mão precisa estar na orientação certa, senão desperdiça papel.

A boa notícia: girar páginas de PDF de forma permanente — salvando uma versão corrigida com todas as páginas na direção certa — é um trabalho de 10 segundos no seu navegador. Sem instalar nada, sem cadastro, sem marca d'água.

## Método 1: Use o rotador de PDF grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de girar páginas PDF é a [ferramenta de girar PDF do UtilBoxx](/pt/tools/pdf/rotate). Ela roda inteiramente no seu navegador, então o arquivo nunca sai do seu dispositivo. Sem upload, sem cadastro, sem marca d'água e sem limite diário.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/pdf/rotate](/pt/tools/pdf/rotate)
2. Clique na área de upload e selecione seu PDF (ou arraste e solte)
3. Escolha as páginas que quer girar: uma, várias ou todas
4. Selecione o ângulo de rotação: **90° no sentido horário**, **90° no sentido anti-horário** ou **180°**
5. Clique em "Processar"
6. Baixe o PDF novo, já corrigido

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. O arquivo nunca chega a um servidor.
- **Três ângulos**: 90° horário, 90° anti-horário e 180° — suficiente para corrigir qualquer orientação padrão
- **Controle por página**: gire uma única página, uma seleção personalizada ou todas de uma vez
- **Funciona em qualquer dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Rotação permanente**: o PDF de saída abre com a orientação correta em qualquer leitor, sem configuração adicional
- **Sem marcas d'água** no resultado

Se você só precisa corrigir algumas páginas de vez em quando, essa é a opção de menor atrito disparado.

## Método 2: Adobe Acrobat Pro (Pago)

Adobe Acrobat Pro é o peso-pesado do mundo PDF e a ferramenta padrão de muitas equipes jurídicas, editoriais e corporativas. Sua visualização "Organizar páginas" mostra todas as páginas como miniaturas. Você pode clicar com o botão direito numa página e escolher "Girar páginas" — horário, anti-horário ou 180° — para a seleção atual, páginas ímpares, pares ou um intervalo personalizado. É possível visualizar a rotação antes de salvar e o resultado é confiável em todos os leitores.

O problema é o preço. Acrobat Pro custa cerca de **$19.99 por mês** (aproximadamente $240 por ano) na assinatura. Para uma rotação pontual de algumas páginas, é uma troca ruim. Também requer instalação desktop, que pode ser pesada em máquinas antigas.

Acrobat vale a pena apenas se você já o usa para edição, redação, assinaturas eletrônicas ou criação de formulários. Se girar é tudo o que você precisa, uma ferramenta baseada em navegador faz o trabalho sem a fatura.

## Método 3: Visualização do macOS

No Mac, o app integrado **Visualização** pode girar páginas nativamente e gravar as alterações de volta no PDF. É rápido e útil para ajustes pontuais:

1. Abra o PDF em **Visualização**
2. Clique em **Visualizar > Miniaturas** para mostrar o painel de páginas
3. Selecione as páginas que você quer girar
4. Segure **Command** e clique numa miniatura; no menu **Ferramentas** escolha **Girar para a esquerda** (⌘L) ou **Girar para a direita** (⌘R)
5. **Arquivo > Salvar** para gravar a rotação no PDF

**Dica**: no Visualização do macOS, o atalho **⌘L** gira a miniatura selecionada 90° no sentido anti-horário. A nova orientação é salva com o documento.

Este método é **apenas para Mac** e funciona melhor para uma ou duas páginas. Se você precisa girar 50 de 200 páginas, a ferramenta baseada em navegador do UtilBoxx é visivelmente mais rápida.

## Método 4: Linha de comando com qpdf

Se você se sente confortável no terminal, a ferramenta open-source **qpdf** é a opção CLI mais confiável para rotação. Instale com Homebrew (\`brew install qpdf\`), depois:

\`\`\`bash
# Girar a página 1 em 90 graus no sentido horário
qpdf input.pdf --rotate=+90:1 -- out.pdf

# Girar as páginas 1, 3, 5 em 180 graus
qpdf input.pdf --rotate=180:1,3,5 -- out.pdf

# Girar todas as páginas em 90 graus no sentido anti-horário (em --rotate, + é horário, - é anti-horário)
qpdf input.pdf --rotate=-90 -- out.pdf
\`\`\`

O parâmetro \`--rotate\` aceita um ângulo em graus seguido de uma lista de páginas separadas por vírgula (sem lista significa todas). **qpdf** é rápido, leve e ideal para programar rotações em lote em centenas de arquivos.

## Perguntas frequentes

### Girar um PDF reduz a qualidade?

Não. A rotação permanente de uma página de PDF altera apenas a marca de orientação armazenada no dicionário da página. O texto, as imagens e o conteúdo vetorial subjacente não são recodificados. Uma rotação de 90° é essencialmente grátis: o PDF apenas diz ao leitor "exiba esta página girada". Uma rotação de 180° é a mesma coisa: uma troca de marca, não uma re-renderização. A qualidade é preservada em 100%.

### Posso girar apenas uma página em um PDF com várias páginas?

Sim. A [ferramenta de girar PDF do UtilBoxx](/pt/tools/pdf/rotate) permite selecionar uma página específica, um conjunto personalizado ou todas. Com qpdf a sintaxe é \`--rotate=+90:1\` para a página 1 sozinha, ou \`--rotate=+90:1,3,5\` para as páginas 1, 3 e 5. Acrobat Pro e o Visualização do macOS também suportam seleção por página.

### Por que meu PDF abre com orientações diferentes em dispositivos diferentes?

Os leitores de PDF respeitam a marca de orientação definida em cada página. Se a página 7 está marcada como girada em 90° no arquivo, todos os leitores — Acrobat, Visualização, Chrome, visores móveis — a exibirão girada em 90°. A rotação faz parte do documento, não do aplicativo. É exatamente por isso que a rotação permanente é a correção certa: uma vez salva, todo mundo vê igual.

### Posso girar um PDF digitalizado?

Sim. PDFs digitalizados são apenas imagens envoltas em um contêiner PDF, e a marca de rotação funciona da mesma forma. O texto não fica "mais torto", só muda a orientação da exibição. Se você também precisa que o texto dos escaneamentos seja pesquisável, aplique OCR após a rotação.

### É seguro usar um rotador de PDF online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que seu arquivo está sendo enviado para um servidor remoto e leia atentamente sua política de privacidade. Evite enviar a um rotador em que você não confia qualquer documento com informações pessoais, financeiras, médicas ou legalmente sensíveis.

### Qual a diferença entre "rotação de visualização" e "rotação permanente"?

A "rotação de visualização" é a orientação que seu leitor aplica à exibição, normalmente resetada toda vez que você reabre o arquivo. A "rotação permanente" é gravada no próprio PDF, de modo que todos os leitores — incluindo impressoras, e-readers e os dispositivos de outras pessoas — veem a orientação corrigida. UtilBoxx e os demais métodos acima produzem uma rotação permanente.

## Conclusão

Girar páginas de PDF é uma daquelas pequenas tarefas que surgem constantemente — especialmente com documentos escaneados — e não deveriam exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, a [ferramenta gratuita de girar PDF do UtilBoxx](/pt/tools/pdf/rotate) é a escolha óbvia: é privada, rápida, grátis, sem cadastro e sem marca d'água.

Se você está no Mac e só precisa corrigir uma página, o atalho ⌘L do Visualização resolve. Se você está programando trabalho em lote, qpdf no terminal é imbatível. E se você já paga pelo Adobe Acrobat por outros motivos, sua visualização "Organizar páginas" é excelente.

Para todo o resto, visite as [ferramentas PDF do UtilBoxx](/pt/tools/pdf) e você encontrará um conjunto completo de ferramentas para trabalhar com PDFs, com privacidade como prioridade, tudo no seu navegador.`;

const rotatePdfFr = `## Pourquoi pivoter des pages PDF ?

Quasiment tout document scanné, pièce jointe ou photocopie finit par arriver dans la mauvaise orientation. Une page de contrat est de côté. La page de signature est à l'envers. Une double page scannée d'un livre arrive avec une page pivotée de 90° par rapport à l'autre. Ces petites erreurs d'orientation sont agaçantes, peu professionnelles et étonnamment difficiles à corriger dans un PDF — précisément parce que le format PDF est conçu pour s'afficher identiquement partout, y compris dans son orientation.

Faire pivoter des pages semble anodin, mais piège beaucoup de monde :

- **Scans de côté** : de nombreux scanners de bureau alimentent les pages en portrait. Un formulaire A4 en paysage finit pivoté de 90° dans le PDF final.
- **Pages de signature à l'envers** : quand vous signez et rescanniez un contrat imprimé, l'image scannée est parfois inversée. Le texte est correct, mais il faut pencher la tête pour le lire.
- **Documents à orientation mixte** : un rapport peut mêler du texte en portrait à des diagrammes, graphiques ou tableaux larges en paysage. Le lecteur ne devrait pas avoir à changer d'orientation à la main.
- **Photos et images intégrées** : une image insérée de côté ruine la mise en page du document final.
- **Pièces jointes e-mail** : ouvrir un PDF de côté dans l'app mail d'un téléphone le rend presque illisible.
- **Formulaires imprimables** : un formulaire destiné à être rempli à la main doit avoir la bonne orientation, sinon il gaspille du papier.

Bonne nouvelle : pivoter des pages PDF de façon permanente — enregistrer une version corrigée avec toutes les pages dans le bon sens — est un travail de 10 secondes dans votre navigateur. Pas d'installation, pas d'inscription, pas de filigrane.

## Méthode 1 : Utiliser le rotateur PDF gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de pivoter des pages PDF est l'[outil de rotation PDF de UtilBoxx](/fr/tools/pdf/rotate). Il s'exécute entièrement dans votre navigateur, donc le fichier ne quitte jamais votre appareil. Pas de téléversement, pas d'inscription, pas de filigrane et pas de limite quotidienne.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/pdf/rotate](/fr/tools/pdf/rotate)
2. Cliquez sur la zone de téléversement et sélectionnez votre PDF (ou glissez-déposez)
3. Choisissez les pages à pivoter — une, plusieurs ou toutes
4. Sélectionnez un angle de rotation : **90° dans le sens horaire**, **90° dans le sens antihoraire** ou **180°**
5. Cliquez sur « Traiter »
6. Téléchargez le PDF corrigé

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Le fichier n'arrive jamais sur un serveur.
- **Trois angles** : 90° horaire, 90° antihoraire et 180° — de quoi corriger toute orientation standard
- **Contrôle par page** : pivotez une seule page, une sélection personnalisée ou toutes en une fois
- **Fonctionne sur tout appareil** : Windows, Mac, Linux, ChromeOS, iOS, Android
- **Rotation permanente** : le PDF de sortie s'ouvre dans la bonne orientation dans tout lecteur, sans paramétrage
- **Aucun filigrane** sur le résultat

Si vous n'avez besoin de corriger que quelques pages de temps en temps, c'est de loin l'option la plus simple.

## Méthode 2 : Adobe Acrobat Pro (Payant)

Adobe Acrobat Pro est le poids lourd du monde PDF et l'outil par défaut de nombreuses équipes juridiques, éditoriales et entreprises. Sa vue « Organiser les pages » affiche toutes les pages sous forme de miniatures. Vous pouvez faire un clic droit sur une page et choisir « Faire pivoter les pages » — horaire, antihoraire ou 180° — pour la sélection en cours, les pages impaires, paires ou une plage personnalisée. Vous pouvez prévisualiser la rotation avant d'enregistrer, et le résultat est fiable dans tous les lecteurs.

Le hic, c'est le prix. Acrobat Pro coûte environ **19,99 $ par mois** (environ 240 $ par an) en abonnement. Pour une rotation ponctuelle de quelques pages, c'est un mauvais calcul. Il faut aussi une installation desktop, qui peut être lourde sur des machines anciennes.

Acrobat ne vaut le coup que si vous l'utilisez déjà pour l'édition, la rédaction, la signature électronique ou la création de formulaires. Si la rotation est tout ce dont vous avez besoin, un outil en navigateur fait le travail sans la facture.

## Méthode 3 : Aperçu de macOS

Sur Mac, l'app intégrée **Aperçu** peut pivoter les pages nativement et enregistrer les modifications dans le PDF. C'est rapide et pratique pour des corrections ponctuelles :

1. Ouvrez le PDF dans **Aperçu**
2. Cliquez sur **Présentation > Miniatures** pour afficher le panneau des pages
3. Sélectionnez les pages à pivoter
4. Maintenez **Command** et cliquez sur une miniature, puis dans le menu **Outils** choisissez **Pivoter à gauche** (⌘L) ou **Pivoter à droite** (⌘R)
5. **Fichier > Enregistrer** pour écrire la rotation dans le PDF

**Astuce** : dans Aperçu macOS, le raccourci **⌘L** pivote la miniature sélectionnée de 90° dans le sens antihoraire. La nouvelle orientation est enregistrée avec le document.

Cette méthode est **réservée à Mac** et convient mieux pour une ou deux pages. Si vous devez pivoter 50 pages sur 200, l'outil navigateur de UtilBoxx est nettement plus rapide.

## Méthode 4 : Ligne de commande avec qpdf

Si vous êtes à l'aise dans un terminal, l'outil open-source **qpdf** est l'option CLI la plus fiable pour la rotation. Installez-le avec Homebrew (\`brew install qpdf\`), puis :

\`\`\`bash
# Pivoter la page 1 de 90 degrés dans le sens horaire
qpdf input.pdf --rotate=+90:1 -- out.pdf

# Pivoter les pages 1, 3, 5 de 180 degrés
qpdf input.pdf --rotate=180:1,3,5 -- out.pdf

# Pivoter toutes les pages de 90 degrés dans le sens antihoraire (dans --rotate, + est horaire, - est antihoraire)
qpdf input.pdf --rotate=-90 -- out.pdf
\`\`\`

Le paramètre \`--rotate\` prend un angle en degrés suivi d'une liste de pages séparées par des virgules (sans liste signifie toutes les pages). **qpdf** est rapide, léger et idéal pour scripter des rotations par lots sur des centaines de fichiers.

## Questions fréquentes

### Pivoter un PDF réduit-il la qualité ?

Non. La rotation permanente d'une page PDF ne modifie que la marque d'orientation stockée dans le dictionnaire de page. Le texte, les images et le contenu vectoriel sous-jacent ne sont pas ré-encodés. Une rotation de 90° est essentiellement gratuite : le PDF indique simplement au lecteur « affiche cette page pivotée ». Une rotation de 180° revient au même : un changement de marque, pas un nouveau rendu. La qualité est préservée à 100 %.

### Puis-je pivoter une seule page dans un PDF multi-pages ?

Oui. L'[outil de rotation PDF de UtilBoxx](/fr/tools/pdf/rotate) vous permet de sélectionner une page précise, un ensemble personnalisé ou toutes les pages. Avec qpdf, la syntaxe est \`--rotate=+90:1\` pour la page 1 seule, ou \`--rotate=+90:1,3,5\` pour les pages 1, 3 et 5. Acrobat Pro et Aperçu macOS supportent aussi la sélection par page.

### Pourquoi mon PDF s'ouvre-t-il avec des orientations différentes selon les appareils ?

Les lecteurs PDF respectent la marque d'orientation définie sur chaque page. Si la page 7 est marquée comme pivotée de 90° dans le fichier, tous les lecteurs — Acrobat, Aperçu, Chrome, lecteurs mobiles — l'afficheront pivotée de 90°. La rotation fait partie du document, pas de l'application. C'est précisément pour cela que la rotation permanente est la bonne correction : une fois enregistrée, tout le monde voit la même chose.

### Puis-je pivoter un PDF numérisé ?

Oui. Les PDF numérisés ne sont que des images enveloppées dans un conteneur PDF, et la marque de rotation fonctionne de la même façon. Le texte ne devient pas « plus penché », seule l'orientation d'affichage change. Si vous avez aussi besoin que le texte des numérisations soit recherchable, appliquez l'OCR après la rotation.

### Est-il sûr d'utiliser un rotateur PDF en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que votre fichier est téléversé sur un serveur distant et lisez attentivement leur politique de confidentialité. Évitez de téléverser sur un rotateur en qui vous n'avez pas confiance tout document contenant des informations personnelles, financières, médicales ou juridiquement sensibles.

### Quelle est la différence entre « rotation d'affichage » et « rotation permanente » ?

La « rotation d'affichage » est l'orientation que votre lecteur applique à la vue, généralement réinitialisée à chaque réouverture du fichier. La « rotation permanente » est écrite dans le PDF lui-même, de sorte que tous les lecteurs — y compris les imprimantes, liseuses et appareils d'autres personnes — voient l'orientation corrigée. UtilBoxx et les autres méthodes ci-dessus produisent tous une rotation permanente.

## Conclusion

Faire pivoter des pages PDF est l'une de ces petites tâches qui reviennent constamment — surtout avec des documents scannés — et ne devraient pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, l'[outil gratuit de rotation PDF de UtilBoxx](/fr/tools/pdf/rotate) est le choix évident : privé, rapide, gratuit, sans inscription ni filigrane.

Si vous êtes sur Mac et n'avez besoin de corriger qu'une seule page, le raccourci ⌘L d'Aperçu fait l'affaire. Si vous scriptz du travail par lots, qpdf dans le terminal est imbattable. Et si vous payez déjà Adobe Acrobat pour d'autres raisons, sa vue « Organiser les pages » est excellente.

Pour tout le reste, rendez-vous sur les [outils PDF de UtilBoxx](/fr/tools/pdf) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const rotatePdfDe = `## Warum PDF-Seiten drehen?

Nahezu jedes gescannte Dokument, jeder E-Mail-Anhang und jede Fotokopie kommt am Ende in der falschen Ausrichtung an. Eine Vertragsseite steht quer. Die Unterschriftsseite steht auf dem Kopf. Eine aufgeschlagene Buchdoppelseite landet mit einer 90° gedrehten Seite. Diese kleinen Ausrichtungsfehler sind ärgerlich, wirken unprofessionell und sind in einem PDF überraschend schwer zu beheben — gerade weil das PDF-Format darauf ausgelegt ist, überall identisch angezeigt zu werden, einschließlich der Ausrichtung.

Seiten zu drehen wirkt trivial, bringt aber viele Menschen zur Verzweiflung:

- **Scans im Querformat**: Viele Büroscanner führen Seiten in Hochformat zu. Ein A4-Formular im Querformat landet um 90° gedreht im PDF.
- **Umgedrehte Unterschriftsseiten**: Wenn Sie einen gedruckten Vertrag unterschreiben und erneut scannen, ist das Bild manchmal gespiegelt. Der Text stimmt, aber Sie müssen den Kopf neigen.
- **Dokumente mit gemischter Ausrichtung**: Ein Bericht kann Hochformat-Text mit Querformat-Diagrammen, -Grafiken oder -Tabellen mischen. Der Leser sollte nicht manuell die Ausrichtung wechseln müssen.
- **Fotos und eingebettete Bilder**: Ein seitlich eingefügtes Bild zerstört das Layout.
- **E-Mail-Anhänge**: Ein quer stehendes PDF in der Mail-App des Telefons ist nahezu unleserlich.
- **Druckbare Formulare**: Ein handschriftlich auszufüllendes Formular braucht die richtige Ausrichtung, sonst verschwenden Sie Papier.

Die gute Nachricht: PDF-Seiten dauerhaft zu drehen — also eine korrigierte Version mit allen Seiten in der richtigen Richtung zu speichern — ist eine 10-Sekunden-Aufgabe im Browser. Keine Installation, keine Registrierung, kein Wasserzeichen.

## Methode 1: Den kostenlosen PDF-Rotator von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode ist das [PDF-Drehwerkzeug von UtilBoxx](/de/tools/pdf/rotate). Es läuft vollständig in Ihrem Browser, sodass die Datei Ihr Gerät nie verlässt. Kein Upload, keine Registrierung, kein Wasserzeichen und kein Tageslimit.

So verwenden Sie es:

1. Gehen Sie zu [utilboxx.com/de/tools/pdf/rotate](/de/tools/pdf/rotate)
2. Klicken Sie auf den Upload-Bereich und wählen Sie Ihre PDF (oder ziehen Sie sie per Drag & Drop)
3. Wählen Sie die zu drehenden Seiten — eine, mehrere oder alle
4. Wählen Sie einen Drehwinkel: **90° im Uhrzeigersinn**, **90° gegen den Uhrzeigersinn** oder **180°**
5. Klicken Sie auf „Verarbeiten"
6. Laden Sie das neue, korrigierte PDF herunter

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in Ihrem Browser verarbeitet. Die Datei erreicht nie einen Server.
- **Drei Winkel**: 90° im Uhrzeigersinn, 90° gegen den Uhrzeigersinn und 180° — genug für jede Standardausrichtung
- **Seitengenaue Kontrolle**: eine einzelne Seite, eine benutzerdefinierte Auswahl oder alle Seiten auf einmal drehen
- **Funktioniert auf jedem Gerät**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Dauerhafte Drehung**: Das ausgegebene PDF öffnet sich in jedem Reader in der korrekten Ausrichtung, ohne weitere Einrichtung
- **Keine Wasserzeichen** auf dem Ergebnis

Wenn Sie nur ab und zu ein paar Seiten korrigieren müssen, ist dies mit Abstand die reibungsloseste Option.

## Methode 2: Adobe Acrobat Pro (Kostenpflichtig)

Adobe Acrobat Pro ist das Schwergewicht der PDF-Welt und das Standardwerkzeug vieler Rechts-, Verlags- und Unternehmensabteilungen. Seine Ansicht „Seiten organisieren" zeigt alle Seiten als Miniaturansichten. Sie können mit der rechten Maustaste auf eine Seite klicken und „Seiten drehen" wählen — im Uhrzeigersinn, gegen den Uhrzeigersinn oder 180° — für die aktuelle Auswahl, ungerade Seiten, gerade Seiten oder einen benutzerdefinierten Bereich. Sie können die Drehung vor dem Speichern in der Vorschau prüfen, und das Ergebnis ist in allen Readern zuverlässig.

Der Haken ist der Preis. Acrobat Pro kostet im Abonnement ungefähr **19,99 $ pro Monat** (etwa 240 $ pro Jahr). Für eine gelegentliche Drehung weniger Seiten ein schlechtes Geschäft. Außerdem ist eine Desktop-Installation nötig, die auf älteren Maschinen schwer wiegen kann.

Acrobat lohnt sich nur, wenn Sie es bereits für Bearbeitung, Schwärzung, elektronische Signaturen oder Formularerstellung nutzen. Wenn Drehen alles ist, was Sie brauchen, erledigt ein Browser-Tool die Arbeit ohne die Rechnung.

## Methode 3: macOS-Vorschau

Auf einem Mac kann die eingebaute App **Vorschau** Seiten nativ drehen und die Änderungen in die PDF zurückschreiben. Sie ist schnell und gut für schnelle Korrekturen:

1. Öffnen Sie das PDF in **Vorschau**
2. Klicken Sie auf **Darstellung > Miniaturansichten**, um das Seiten-Panel anzuzeigen
3. Wählen Sie die Seiten aus, die Sie drehen möchten
4. Halten Sie **Command** gedrückt, klicken Sie auf eine Miniatur und wählen Sie im **Werkzeuge**-Menü **Links drehen** (⌘L) oder **Rechts drehen** (⌘R)
5. **Ablage > Sichern**, um die Drehung in das PDF zu schreiben

**Tipp**: In der macOS-Vorschau dreht das Tastenkürzel **⌘L** die ausgewählte Miniatur 90° gegen den Uhrzeigersinn. Die neue Ausrichtung wird mit dem Dokument gespeichert.

Diese Methode ist **nur für Mac** und eignet sich am besten für ein oder zwei Seiten. Wenn Sie 50 von 200 Seiten drehen müssen, ist das Browser-Werkzeug von UtilBoxx deutlich schneller.

## Methode 4: Kommandozeile mit qpdf

Wenn Sie sich im Terminal wohlfühlen, ist das Open-Source-Werkzeug **qpdf** die zuverlässigste CLI-Option für die Drehung. Installieren Sie es mit Homebrew (\`brew install qpdf\`), dann:

\`\`\`bash
# Seite 1 um 90 Grad im Uhrzeigersinn drehen
qpdf input.pdf --rotate=+90:1 -- out.pdf

# Seiten 1, 3, 5 um 180 Grad drehen
qpdf input.pdf --rotate=180:1,3,5 -- out.pdf

# Alle Seiten um 90 Grad gegen den Uhrzeigersinn drehen (in --rotate ist + im Uhrzeigersinn, - gegen den Uhrzeigersinn)
qpdf input.pdf --rotate=-90 -- out.pdf
\`\`\`

Der Parameter \`--rotate\` nimmt einen Winkel in Grad, gefolgt von einer durch Kommas getrennten Liste von Seitenzahlen (ohne Liste = alle Seiten). **qpdf** ist schnell, leicht und ideal, um Drehungen über Hunderte von Dateien zu skripten.

## Häufige Fragen

### Verringert das Drehen eines PDFs die Qualität?

Nein. Eine dauerhafte Drehung einer PDF-Seite ändert nur das Ausrichtungs-Flag im Seiten-Wörterbuch. Der zugrunde liegende Text, die Bilder und der Vektorinhalt werden nicht neu kodiert. Eine 90°-Drehung ist im Wesentlichen kostenlos: Das PDF sagt dem Reader nur „zeige diese Seite gedreht". Eine 180°-Drehung ist dasselbe: ein Flag-Wechsel, kein neues Rendern. Die Qualität bleibt zu 100 % erhalten.

### Kann ich in einem mehrseitigen PDF nur eine Seite drehen?

Ja. Das [PDF-Drehwerkzeug von UtilBoxx](/de/tools/pdf/rotate) erlaubt es Ihnen, eine bestimmte Seite, eine benutzerdefinierte Auswahl oder alle Seiten auszuwählen. Mit qpdf lautet die Syntax \`--rotate=+90:1\` für Seite 1 allein oder \`--rotate=+90:1,3,5\` für die Seiten 1, 3 und 5. Acrobat Pro und die macOS-Vorschau unterstützen ebenfalls die Seiten-Auswahl.

### Warum öffnet sich mein PDF auf verschiedenen Geräten mit unterschiedlichen Ausrichtungen?

PDF-Reader beachten das Ausrichtungs-Flag, das auf jeder Seite gesetzt ist. Wenn Seite 7 in der Datei als um 90° gedreht markiert ist, zeigen sie alle Reader — Acrobat, Vorschau, Chrome, mobile Viewer — um 90° gedreht an. Die Drehung ist Teil des Dokuments, nicht der App. Genau deshalb ist die dauerhafte Drehung die richtige Lösung: Einmal gespeichert, sehen alle dasselbe.

### Kann ich eine gescannte PDF drehen?

Ja. Gescannte PDFs sind nur Bilder, die in einem PDF-Container verpackt sind, und das Dreh-Flag wirkt genauso. Der Text wird nicht „schiefer", nur die Anzeigeausrichtung ändert sich. Wenn Sie den Text der Scans auch durchsuchbar machen möchten, wenden Sie OCR nach der Drehung an.

### Ist die Nutzung eines Online-PDF-Rotators sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in Ihrem Browser** – kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen sollten Sie davon ausgehen, dass Ihre Datei auf einen entfernten Server hochgeladen wird, und die Datenschutzrichtlinie sorgfältig lesen. Vermeiden Sie das Hochladen von Dokumenten mit persönlichen, finanziellen, medizinischen oder rechtlich sensiblen Informationen zu einem Rotator, dem Sie nicht vertrauen.

### Was ist der Unterschied zwischen „Ansichtsdrehung" und „dauerhafter Drehung"?

Eine „Ansichtsdrehung" ist die Ausrichtung, die Ihr Reader auf die Anzeige anwendet, normalerweise zurückgesetzt, sobald Sie die Datei erneut öffnen. Eine „dauerhafte Drehung" wird in die PDF selbst geschrieben, sodass alle Reader — einschließlich Drucker, E-Reader und Geräte anderer Personen — die korrigierte Ausrichtung sehen. UtilBoxx und die anderen oben genannten Methoden erzeugen alle eine dauerhafte Drehung.

## Fazit

PDF-Seiten zu drehen ist eine dieser kleinen Aufgaben, die ständig anfallen — besonders bei gescannten Dokumenten — und keine kostenpflichtige Subskription oder Software-Installation erfordern sollten. Für die meisten Menschen ist das [kostenlose PDF-Drehwerkzeug von UtilBoxx](/de/tools/pdf/rotate) die offensichtliche Wahl: privat, schnell, kostenlos, ohne Registrierung und ohne Wasserzeichen.

Wenn Sie auf einem Mac sind und nur eine Seite schnell korrigieren möchten, funktioniert das Tastenkürzel ⌘L der Vorschau. Wenn Sie Stapelverarbeitung skripten, ist qpdf im Terminal unschlagbar. Und wenn Sie Adobe Acrobat bereits aus anderen Gründen bezahlen, ist seine Ansicht „Seiten organisieren" ausgezeichnet.

Für alles andere besuchen Sie die [PDF-Werkzeuge von UtilBoxx](/de/tools/pdf): Dort finden Sie einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit PDFs – alles im Browser.`;

export const rotatePdfPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-rotate-pdf-pages",
    category: "PDF Tools",
    date: "2026-01-25",
    readTime: "4 min",
    title: "How to Rotate PDF Pages (Permanently, Free, Online)",
    description: "Fix scanned sideways pages in seconds — rotate one, many, or all pages and save a new PDF.",
    content: rotatePdfEn,
  },
  zh: {
    slug: "how-to-rotate-pdf-pages",
    category: "PDF 工具",
    date: "2026-01-25",
    readTime: "4 分钟",
    title: "如何永久旋转 PDF 页面（免费、在线）",
    description: "几秒钟修好扫描的横置页面 —— 旋转一页、多页或全部页面，保存为新 PDF。",
    content: rotatePdfZh,
  },
  ja: {
    slug: "how-to-rotate-pdf-pages",
    category: "PDF ツール",
    date: "2026-01-25",
    readTime: "4 分",
    title: "PDF ページを永久に回転する方法（無料・オンライン）",
    description: "スキャンされた横向きページを数秒で修正 — 1 ページ、複数、全ページを回転して新しい PDF に保存。",
    content: rotatePdfJa,
  },
  es: {
    slug: "how-to-rotate-pdf-pages",
    category: "Herramientas PDF",
    date: "2026-01-25",
    readTime: "4 min",
    title: "Cómo rotar páginas de un PDF (permanente, gratis, online)",
    description: "Arregla páginas escaneadas de lado en segundos — rota una, varias o todas las páginas y guarda un nuevo PDF.",
    content: rotatePdfEs,
  },
  pt: {
    slug: "how-to-rotate-pdf-pages",
    category: "Ferramentas PDF",
    date: "2026-01-25",
    readTime: "4 min",
    title: "Como girar páginas de um PDF (permanente, grátis, online)",
    description: "Conserte páginas digitalizadas de lado em segundos — gire uma, várias ou todas as páginas e salve um novo PDF.",
    content: rotatePdfPt,
  },
  fr: {
    slug: "how-to-rotate-pdf-pages",
    category: "Outils PDF",
    date: "2026-01-25",
    readTime: "4 min",
    title: "Comment pivoter des pages PDF (permanent, gratuit, en ligne)",
    description: "Corrigez en quelques secondes les pages scannées de côté — pivotez une, plusieurs ou toutes les pages et enregistrez un nouveau PDF.",
    content: rotatePdfFr,
  },
  de: {
    slug: "how-to-rotate-pdf-pages",
    category: "PDF-Werkzeuge",
    date: "2026-01-25",
    readTime: "4 Min",
    title: "PDF-Seiten dauerhaft drehen (kostenlos, online)",
    description: "Beheben Sie gescannte Querformat-Seiten in Sekunden — drehen Sie eine, mehrere oder alle Seiten und speichern Sie ein neues PDF.",
    content: rotatePdfDe,
  },
};
