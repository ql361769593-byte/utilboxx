// Blog post: How to Extract Text from a PDF
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const extractTextEn = `## Why extract text from a PDF?

PDFs are designed to look the same everywhere, which makes them perfect for sharing and printing. But that visual fidelity hides a problem: the text inside a PDF is often not really text. It can be a vector path that *looks* like the letter "A" but contains no letter "A" the computer can copy. Or it can be a flat image of a page that contains text a scanner saw but a machine cannot read.

When you need to actually do something with the content — quote it in an email, paste it into a translator, edit it in a document, or search through 200 pages for one paragraph — you need to extract the text. This guide shows you how.

The reasons people need to extract text from a PDF are practical and frequent:

- **Quote a passage**: Copy a paragraph from a research paper into an email without retyping it.
- **Translate a document**: Paste a foreign-language PDF into a translation tool. Translation engines need plain text.
- **Edit and reformat**: Pull text out of a PDF into Word or Google Docs to fix typos or update wording.
- **Search inside scanned PDFs**: A scanned book is a 300-page image. Extracting text with OCR makes it searchable.
- **Repurpose content**: Grab a chapter from an old PDF and put it in a new report.
- **Data extraction**: Pull tabular data out of a PDF report into a spreadsheet.

The challenge: PDFs come in two flavors, and they need different tools.

- **Text-based PDFs** (most modern PDFs): The text is real text, encoded in the file. Extracting is a fast, lossless operation.
- **Scanned PDFs** (images of pages): The text is just pixels. You need OCR (Optical Character Recognition) to read it.

## Method 1: Use UtilBoxx's Free PDF Text Extractor (Recommended)

The fastest, safest, and most private way to extract text is [UtilBoxx's PDF Extract Text tool](/en/tools/pdf/extract-text). It runs entirely in your browser, handles both text-based and scanned PDFs, and never sends your file to a server.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/pdf/extract-text](/en/tools/pdf/extract-text)
2. Click the upload area and select your PDF (or drag and drop)
3. The tool detects whether your PDF has embedded text or is a scanned image
4. For text PDFs, it copies the text directly. For scanned PDFs, it runs **OCR** in your browser.
5. Copy the result to your clipboard, or download it as a .txt file

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. The file never reaches a server.
- **Handles both kinds of PDF**: text-based and scanned (with OCR)
- **Works on any device**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **No watermarks**, no daily limits
- **Fast**: text-based extraction is near-instant. OCR runs at a few seconds per page.

If you need to grab text out of a PDF — once in a while or all day long — this is the most flexible tool you can use without installing anything.

## Method 2: Adobe Acrobat Pro (Paid)

Adobe Acrobat Pro is the heavyweight of the PDF world. Its "Export PDF" tool lets you convert a PDF to Word, Excel, plain text, or a variety of other formats. For text-based PDFs, the export is clean. For scanned PDFs, Acrobat runs a high-quality OCR engine that recognizes dozens of languages and preserves layout reasonably well.

The catch is the price. Acrobat Pro costs roughly **$19.99 per month** (about $240 per year) on a subscription. For a one-off text extraction, that is a poor trade. You also need a desktop install, which can be heavy on older machines.

Acrobat is worth it only if you already use it for editing, redaction, e-signatures, or form creation. Its OCR is excellent, but if text extraction is all you need, a browser-based tool does the job without the bill.

## Method 3: Command line with pdftotext (Poppler)

If you are comfortable in a terminal, the open-source tool **pdftotext** from the **poppler-utils** package is the fastest CLI option. It is available on macOS (via Homebrew), Linux (via apt/dnf/pacman), and Windows (via Cygwin or WSL).

Install it with \`brew install poppler\` (macOS) or \`sudo apt install poppler-utils\` (Debian/Ubuntu), then:

\`\`\`bash
# Extract text with default layout
pdftotext input.pdf output.txt

# Preserve layout as much as possible
pdftotext -layout input.pdf output.txt

# Extract text from a specific page range (pages 1-5)
pdftotext -f 1 -l 5 input.pdf output.txt

# Extract text from a scanned PDF by combining pdftotext with OCRmyPDF
ocrmypdf --skip-text input.pdf scanned-with-ocr.pdf
pdftotext scanned-with-ocr.pdf output.txt
\`\`\`

The \`pdftotext\` tool is the workhorse of PDF text extraction in the open-source world. It is fast, scriptable, and handles thousands of files in a batch. For scanned PDFs, **OCRmyPDF** is the de-facto choice: it adds a text layer to scanned PDFs without altering the original page images.

## Common questions

### Can I extract text from a scanned PDF?

Yes, but you need OCR. [UtilBoxx's PDF Extract Text tool](/en/tools/pdf/extract-text) runs OCR in your browser, so the scanned image is converted to searchable text without uploading your file anywhere. Adobe Acrobat Pro also runs OCR on scanned PDFs. The CLI workflow is **OCRmyPDF** to add a text layer, then **pdftotext** to dump the text.

### Does text extraction preserve the formatting?

Usually not. PDF text extraction gives you the words and paragraphs, but the visual formatting (bold, italics, font sizes, columns) is often lost. \`pdftotext -layout\` does a reasonable job of preserving column layout, and tools like Adobe's "Export to Word" preserve more visual structure, at the cost of being much heavier. For most use cases — quoting, translating, searching — plain text is enough.

### Can I extract text from a password-protected PDF?

Yes, but you need the password. Password-protected PDFs can be opened with the password, then the text can be extracted normally. Most tools, including UtilBoxx, will prompt for the password when needed. If you do not have the password, the text is not accessible by design — this is a security feature, not a bug.

### Will extraction work on every language?

Yes. Text-based extraction works on any language that is embedded in the PDF. OCR works on any language the OCR engine has been trained on. UtilBoxx's browser-based OCR supports a wide range of Latin, Cyrillic, and East Asian scripts. Adobe Acrobat Pro supports dozens more. For unusual scripts, command-line tools like **Tesseract** offer the broadest language coverage.

### Is it safe to use an online text extractor?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your file is being uploaded to a remote server and read their privacy policy carefully. Avoid uploading any document containing personal, financial, medical, or legally sensitive information to a text extractor you do not trust.

### What is the difference between "copy text" and "extract text"?

In most tools the two are the same: the text content of the PDF. Some tools (like \`pdftotext -layout\`) try to preserve the visual layout in plain text. Others (like Adobe's "Export to Word") produce a structured document. UtilBoxx gives you clean plain text — perfect for pasting anywhere.

## Conclusion

Extracting text from a PDF is a small task that comes up constantly and should not require a paid subscription or a software install. For most people, [UtilBoxx's free PDF Extract Text tool](/en/tools/pdf/extract-text) is the obvious choice: it is private, fast, free, handles both text and scanned PDFs, and works in your browser.

If you already pay for Adobe Acrobat, its "Export PDF" feature is excellent. If you are scripting batch work, the combination of **pdftotext** and **OCRmyPDF** in the terminal is unbeatable.

For everything else, head to [UtilBoxx PDF tools](/en/tools/pdf) and you will find a complete, privacy-first toolkit for working with PDFs — all in your browser.`;

const extractTextZh = `## 为什么要从 PDF 提取文本？

PDF 的设计目标是"在任何地方显示都一样"，这让它非常适合分享和打印。但这种视觉保真度背后藏着一个问题：PDF 里的文字往往不是真正的文字。它可能是一条看起来像字母 "A" 的矢量路径，但里面并不包含计算机可以复制的字母 "A"。也可能是一张平铺的页面图，里面有扫描仪看见的、但机器读不出的文字。

当你真的需要"用"这些内容时 —— 在邮件里引用一段、粘贴到翻译工具、放进文档里编辑、或者在 200 页里搜某一段 —— 你就需要提取文本。本指南会告诉你怎么做。

人们需要从 PDF 提取文本的原因既实际又频繁：

- **引用一段话**：把研究论文的一段复制到邮件里，不用重新打字。
- **翻译文档**：把一份外语 PDF 粘贴到翻译工具里，翻译引擎需要纯文本。
- **编辑和重新排版**：把 PDF 里的文字抽到 Word 或 Google Docs 里改错别字或更新措辞。
- **在扫描 PDF 中搜索**：一本扫描书就是 300 页图片，提取文本并 OCR 后才可搜索。
- **内容再利用**：从老 PDF 里抽出一章，放进新报告。
- **抽取数据**：把 PDF 报告里的表格数据抽到电子表格里。

挑战在于：PDF 实际上有两种，它们需要不同的工具。

- **文本型 PDF**（绝大多数现代 PDF）：文字是真正的、编码在文件中的文本，提取是无损的高速操作。
- **扫描型 PDF**（页面是图片）：文字只是像素，需要 OCR（光学字符识别）才能读出来。

## 方法一：使用 UtilBoxx 免费 PDF 文本提取工具（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的 PDF 提取文本工具](/zh/tools/pdf/extract-text)。它完全在你的浏览器中运行，同时支持文本型和扫描型 PDF，文件不会上传到任何服务器。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/pdf/extract-text](/zh/tools/pdf/extract-text)
2. 点击上传区域选择你的 PDF（或直接拖入）
3. 工具会自动检测你的 PDF 包含的是嵌入文本还是扫描图片
4. 对文本型 PDF，它会直接复制文字；对扫描型 PDF，它会在浏览器中跑 **OCR**
5. 复制结果到剪贴板，或下载为 .txt 文件

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，文件不会上传到任何服务器
- **同时支持两种 PDF**：文本型和扫描型（带 OCR）
- **全设备支持**：Windows、Mac、Linux、ChromeOS、iOS、Android
- **无水印、无每日次数限制**
- **快速**：文本型提取几乎瞬时，OCR 每页几秒

无论你是偶尔还是整天都要从 PDF 里抓文字，这是最灵活、且无需安装的工具。

## 方法二：Adobe Acrobat Pro（付费）

Adobe Acrobat Pro 是 PDF 领域的重量级选手。它的"导出 PDF"功能可以把 PDF 转换成 Word、Excel、纯文本等多种格式。对文本型 PDF，导出干净整齐；对扫描型 PDF，Acrobat 运行一个高质量的 OCR 引擎，能识别几十种语言、版式还原也相当不错。

代价是价格。Acrobat Pro 订阅版大约 **每月 $19.99**（每年约 $240 美元）。如果只是偶尔提取一次文字，这个投入显然不划算。你还需要桌面安装，对老机器也不太友好。

只有当你已经用它做编辑、涂黑、电子签名或表单创建时，Acrobat 才值得。它的 OCR 确实很优秀，但如果提取文字是你唯一的需求，浏览器工具完全够用，还免了账单。

## 方法三：命令行 pdftotext（Poppler）

如果你熟悉终端，**poppler-utils** 包里的开源工具 **pdftotext** 是最快的命令行选择。它在 macOS（通过 Homebrew）、Linux（通过 apt/dnf/pacman）、Windows（通过 Cygwin 或 WSL）上都可用。

用 \`brew install poppler\`（macOS）或 \`sudo apt install poppler-utils\`（Debian/Ubuntu）安装后：

\`\`\`bash
# 用默认版式提取文本
pdftotext input.pdf output.txt

# 尽可能保留版式
pdftotext -layout input.pdf output.txt

# 提取指定页范围（第 1-5 页）
pdftotext -f 1 -l 5 input.pdf output.txt

# 通过 pdftotext 与 OCRmyPDF 配合，从扫描型 PDF 提取文本
ocrmypdf --skip-text input.pdf scanned-with-ocr.pdf
pdftotext scanned-with-ocr.pdf output.txt
\`\`\`

\`pdftotext\` 是开源世界 PDF 文本提取的主力。它快速、可脚本化、能批量处理上千个文件。对扫描型 PDF，**OCRmyPDF** 是事实标准：它在不改变原始页面图像的前提下，给扫描 PDF 加上一层可搜索的文本层。

## 常见问题

### 能从扫描型 PDF 中提取文本吗？

可以，但需要 OCR。[UtilBoxx 的 PDF 文本提取工具](/zh/tools/pdf/extract-text) 在你的浏览器中跑 OCR，把扫描图转成可搜索的文本，文件不会上传到任何地方。Adobe Acrobat Pro 也能对扫描 PDF 跑 OCR。命令行的工作流是 **OCRmyPDF** 加文本层，再 **pdftotext** 抽文字。

### 文本提取会保留格式吗？

通常不会。PDF 文本提取给你的是单词和段落，但视觉格式（粗体、斜体、字号、分栏）往往丢失。\`pdftotext -layout\` 在保留分栏上做得不错；Adobe 的"导出为 Word"在保留视觉结构上更强，但代价是工具重得多。对绝大多数场景 —— 引用、翻译、搜索 —— 纯文本就够了。

### 加密的 PDF 能提取文本吗？

可以，但需要密码。加密 PDF 可以用密码打开，然后正常提取文字。包括 UtilBoxx 在内的大多数工具都会在需要时提示输入密码。如果你没有密码，文字按设计就是无法访问的 —— 这是安全特性，不是 bug。

### 提取对所有语言都有效吗？

是的。文本型提取对 PDF 内嵌的任何语言都有效；OCR 对 OCR 引擎训练过的语言有效。UtilBoxx 浏览器版 OCR 支持多种拉丁、西里尔、东亚文字。Adobe Acrobat Pro 支持的语言更多。对小众文字，命令行工具如 **Tesseract** 提供最广泛的语言覆盖。

### 使用在线文本提取工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的文件会被上传到远程服务器，并仔细阅读隐私政策。避免向你不信任的文本提取工具上传任何包含个人、财务、医疗或法律敏感信息的文件。

### "复制文本"和"提取文本"有什么区别？

在大多数工具中两者是一样的：PDF 的文本内容。一些工具（如 \`pdftotext -layout\`）会尝试在纯文本里保留视觉版式。另一些（如 Adobe 的"导出为 Word"）会产出结构化文档。UtilBoxx 给你的是干净的纯文本 —— 适合粘贴到任何地方。

## 结论

从 PDF 提取文本是一件经常要做的小事，不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费 PDF 文本提取工具](/zh/tools/pdf/extract-text) 是显而易见的选择：私密、快速、免费，同时支持文本型和扫描型 PDF，浏览器里就能完成。

如果你已经为 Adobe Acrobat 付了费，那它的"导出 PDF"功能也很优秀。如果你写脚本做批量处理，**pdftotext** + **OCRmyPDF** 的组合在终端里无可替代。

其他情况下，去看 [UtilBoxx 的 PDF 工具集](/zh/tools/pdf)，你会找到一个完整的、隐私优先的 PDF 处理工具箱 —— 全部在浏览器里完成。`;

const extractTextJa = `## なぜ PDF からテキストを抽出するのか？

PDF は「どこでも同じ見た目」を目的に設計されており、共有や印刷に最適です。しかし、その視覚的な忠実度の裏に問題があります：PDF 内のテキストは、多くの場合「本当のテキスト」ではないのです。文字「A」のように見えるベクター経路であって、コンピュータがコピーできる文字「A」を含んでいないこともあります。あるいは、ページ全体のフラットな画像で、スキャナは見たが機械は読めない、ということもあります。

コンテンツを本当に「使いたい」とき —— メールで引用する、翻訳ツールに貼り付ける、文書で編集する、200 ページの中から 1 段落を探す —— には、テキストの抽出が必要です。このガイドではその方法を説明します。

PDF からテキストを抽出する必要がある理由は、実際的でしかも頻繁です：

- **一節を引用する**：研究論文の段落をメールにコピーし、打ち直さなくて済む。
- **文書を翻訳する**：外国語の PDF を翻訳ツールに貼り付ける。翻訳エンジンはプレーンテキストが必要。
- **編集と書式変更**：PDF から Word や Google Docs にテキストを移し、誤字を直したり表現を更新する。
- **スキャン PDF の中身を検索**：スキャンされた本は 300 ページの画像。OCR でテキスト抽出してようやく検索可能に。
- **コンテンツの再利用**：古い PDF から章を抜き出して新しいレポートに入れる。
- **データ抽出**：PDF レポートから表データを取り出してスプレッドシートへ。

課題は：PDF には 2 種類あり、別々のツールが必要だということです。

- **テキストベース PDF**（大半の現代 PDF）：文字は本当の、ファイルにエンコードされたテキスト。抽出は高速でロスレス。
- **スキャン PDF**（ページの画像）：文字はただのピクセル。OCR（光学文字認識）が必要。

## 方法 1：UtilBoxx の無料 PDF テキスト抽出ツール（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の PDF テキスト抽出ツール](/ja/tools/pdf/extract-text) です。完全にブラウザ内で動作し、テキストベースとスキャンの両方の PDF に対応し、ファイルがサーバーへ送信されることはありません。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/pdf/extract-text](/ja/tools/pdf/extract-text) を開く
2. アップロード領域をクリックして PDF を選択（またはドラッグ＆ドロップ）
3. ツールが PDF に埋め込みテキストがあるか、スキャン画像かを自動検出
4. テキスト PDF なら直接テキストをコピー。スキャン PDF ならブラウザ内で **OCR** を実行
5. 結果をクリップボードへコピー、または .txt ファイルとしてダウンロード

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべての処理がブラウザ内で完結。ファイルはサーバーへ送信されません
- **両方の PDF に対応**：テキストベースとスキャン（OCR 付き）
- **あらゆるデバイスで動作**：Windows、Mac、Linux、ChromeOS、iOS、Android
- **透かしなし、利用回数制限なし**
- **高速**：テキスト抽出はほぼ一瞬。OCR も 1 ページ数秒で完了

たまに必要でも、一日中必要でも、インストール不要でテキストを取り出せる最も柔軟なツールです。

## 方法 2：Adobe Acrobat Pro（有料）

Adobe Acrobat Pro は PDF 界のヘビー級です。「PDF をエクスポート」機能では、PDF を Word、Excel、プレーンテキストなど多様な形式に変換できます。テキスト PDF ではきれいにエクスポートされ、スキャン PDF では数十言語を認識し、レイアウトもよく保つ高品質 OCR エンジンが走ります。

ただし価格が高めです。Acrobat Pro はサブスクリプションで月額約 **$19.99**（年額約 $240）。一度だけテキスト抽出する用途なら割に合いません。デスクトップインストールが必要なので、古いマシンには負担です。

既に編集・墨消し・電子署名・フォーム作成などのために Acrobat を利用しているなら価値があります。OCR は優れていますが、テキスト抽出だけが目的であれば、ブラウザツールで十分です。

## 方法 3：コマンドラインで pdftotext（Poppler）

ターミナルに慣れているなら、**poppler-utils** パッケージの **pdftotext** が最速の CLI オプションです。macOS（Homebrew）、Linux（apt/dnf/pacman）、Windows（Cygwin や WSL）で利用可能です。

\`brew install poppler\`（macOS）または \`sudo apt install poppler-utils\`（Debian/Ubuntu）でインストールしたら：

\`\`\`bash
# デフォルトのレイアウトでテキスト抽出
pdftotext input.pdf output.txt

# レイアウトをできる限り保持
pdftotext -layout input.pdf output.txt

# 特定のページ範囲（1〜5 ページ）から抽出
pdftotext -f 1 -l 5 input.pdf output.txt

# OCRmyPDF と組み合わせてスキャン PDF からテキスト抽出
ocrmypdf --skip-text input.pdf scanned-with-ocr.pdf
pdftotext scanned-with-ocr.pdf output.txt
\`\`\`

\`pdftotext\` はオープンソースの PDF テキスト抽出の定番です。高速でスクリプト向き、何千ファイルものバッチ処理に耐えます。スキャン PDF には **OCRmyPDF** が事実上の標準で、元のページ画像を変えずに検索可能なテキスト層を追加します。

## よくある質問

### スキャン PDF からテキストを抽出できますか？

できますが、OCR が必要です。[UtilBoxx の PDF テキスト抽出ツール](/ja/tools/pdf/extract-text) はブラウザ内で OCR を実行し、ファイルをどこにも送らずスキャン画像を検索可能テキストに変換します。Adobe Acrobat Pro もスキャン PDF に OCR を行います。CLI のワークフローは **OCRmyPDF** でテキスト層を追加し、**pdftotext** でテキストを取り出す、という形です。

### テキスト抽出は書式を保ちますか？

通常は保たれません。PDF のテキスト抽出では単語と段落が得られますが、視覚的書式（太字、斜体、フォントサイズ、複数段組）は失われることが多いです。\`pdftotext -layout\` は段組の保持にそこそこ強く、Adobe の「Word にエクスポート」はツールはずっと重いですが視覚的構造を保ちます。ほとんどの用途 —— 引用、翻訳、検索 —— には、プレーンテキストで十分です。

### パスワード保護された PDF からテキストを抽出できますか？

できます。ただしパスワードが必要です。パスワード保護された PDF はパスワードで開けば、その後は通常通りテキストを抽出できます。UtilBoxx を含むほとんどのツールは、必要に応じてパスワードを要求します。パスワードがない場合、テキストは仕様上アクセスできません —— これはバグではなくセキュリティ機能です。

### どんな言語でも抽出できますか？

はい。テキストベース抽出は PDF に埋め込まれた任意の言語で動作します。OCR はそのエンジンが学習済みの任意の言語で動作します。UtilBoxx のブラウザ OCR はラテン・キリル・東アジアの幅広い文字をカバーします。Adobe Acrobat Pro はさらに多くの言語をサポートします。珍しい文字については、**Tesseract** のような CLI ツールが最も広い言語カバレッジを提供します。

### オンラインのテキスト抽出ツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、ファイルがリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人情報、財務、医療、法的に機密性の高い情報を含む文書は、信頼できないテキスト抽出ツールにアップロードしないでください。

### 「テキストをコピー」と「テキストを抽出」の違いは何ですか？

多くのツールでは同じで、PDF のテキスト内容です。\`pdftotext -layout\` のようなツールはプレーンテキスト内で視覚的レイアウトの保持を試みます。Adobe の「Word にエクスポート」のようなツールは構造化文書を生成します。UtilBoxx はクリーンなプレーンテキストを返します —— どこにでも貼り付けられます。

## まとめ

PDF からテキストを抽出することは頻繁に発生する小さな作業であり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料 PDF テキスト抽出ツール](/ja/tools/pdf/extract-text) は明白な選択です：プライベートで、速くて、無料で、テキスト PDF とスキャン PDF の両方に対応、ブラウザで完結。

Adobe Acrobat を他用途で既に利用しているなら、「PDF をエクスポート」機能が優れています。バッチ処理をスクリプト化したいなら、ターミナルでの **pdftotext** + **OCRmyPDF** の組み合わせが最強です。

その他は、[UtilBoxx の PDF ツール](/ja/tools/pdf) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先の PDF ツールキットが見つかります。`;

const extractTextEs = `## ¿Por qué extraer texto de un PDF?

Los PDF están diseñados para verse igual en todas partes, lo que los hace perfectos para compartir e imprimir. Pero esa fidelidad visual esconde un problema: el texto dentro de un PDF a menudo no es realmente texto. Puede ser un trazado vectorial que *parece* la letra «A» pero no contiene una letra «A» que la computadora pueda copiar. O puede ser una imagen plana de una página con texto que el escáner vio pero la máquina no puede leer.

Cuando necesitas hacer algo con el contenido — citarlo en un correo, pegarlo en un traductor, editarlo en un documento o buscar un párrafo entre 200 páginas — necesitas extraer el texto. Esta guía te muestra cómo.

Las razones por las que la gente necesita extraer texto de un PDF son prácticas y frecuentes:

- **Citar un pasaje**: Copia un párrafo de un paper de investigación en un correo sin reescribirlo.
- **Traducir un documento**: Pega un PDF en un idioma extranjero en una herramienta de traducción. Los motores de traducción necesitan texto plano.
- **Editar y reformatear**: Saca texto de un PDF a Word o Google Docs para corregir erratas o actualizar la redacción.
- **Buscar dentro de PDFs escaneados**: Un libro escaneado es una imagen de 300 páginas. Extraer el texto con OCR lo vuelve buscable.
- **Reutilizar contenido**: Toma un capítulo de un PDF antiguo y colócalo en un informe nuevo.
- **Extracción de datos**: Saca datos tabulares de un informe PDF a una hoja de cálculo.

El reto: los PDF vienen en dos sabores y necesitan herramientas diferentes.

- **PDFs con texto** (la mayoría de los modernos): el texto es texto real, codificado en el archivo. La extracción es rápida y sin pérdida.
- **PDFs escaneados** (imágenes de páginas): el texto son solo píxeles. Necesitas OCR (Reconocimiento Óptico de Caracteres) para leerlo.

## Método 1: Usa el extractor de texto PDF gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de extraer texto es la [herramienta de extraer texto de PDF de UtilBoxx](/es/tools/pdf/extract-text). Se ejecuta por completo en tu navegador, maneja tanto PDFs con texto como escaneados, y nunca envía tu archivo a un servidor.

Así se usa:

1. Ve a [utilboxx.com/es/tools/pdf/extract-text](/es/tools/pdf/extract-text)
2. Haz clic en el área de subida y selecciona tu PDF (o arrástralo)
3. La herramienta detecta si tu PDF tiene texto incrustado o es una imagen escaneada
4. Para PDFs con texto, copia el texto directamente. Para escaneados, ejecuta **OCR** en tu navegador.
5. Copia el resultado al portapapeles o descárgalo como .txt

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. El archivo nunca llega a un servidor.
- **Maneja ambos tipos de PDF**: con texto y escaneados (con OCR)
- **Funciona en cualquier dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Sin marcas de agua**, sin límite diario
- **Rápido**: la extracción de texto es casi instantánea; el OCR tarda unos segundos por página

Si necesitas sacar texto de un PDF — de vez en cuando o todo el día — esta es la herramienta más flexible que puedes usar sin instalar nada.

## Método 2: Adobe Acrobat Pro (De pago)

Adobe Acrobat Pro es el peso pesado del mundo PDF. Su herramienta "Exportar PDF" permite convertir un PDF a Word, Excel, texto plano u otros formatos. Para PDFs con texto, la exportación es limpia. Para PDFs escaneados, Acrobat ejecuta un motor OCR de alta calidad que reconoce decenas de idiomas y conserva la maquetación razonablemente bien.

El inconveniente es el precio. Acrobat Pro cuesta aproximadamente **$19.99 al mes** (unos $240 al año) en suscripción. Para una extracción puntual, es una mala relación calidad-precio. También requiere instalación de escritorio, que puede ser pesada en máquinas antiguas.

Acrobat solo vale la pena si ya lo usas para edición, redacción, firmas electrónicas o creación de formularios. Su OCR es excelente, pero si extraer texto es todo lo que necesitas, una herramienta basada en navegador hace el trabajo sin la factura.

## Método 3: Línea de comandos con pdftotext (Poppler)

Si te manejas en la terminal, la herramienta de código abierto **pdftotext** del paquete **poppler-utils** es la opción CLI más rápida. Está disponible en macOS (vía Homebrew), Linux (vía apt/dnf/pacman) y Windows (vía Cygwin o WSL).

Instálala con \`brew install poppler\` (macOS) o \`sudo apt install poppler-utils\` (Debian/Ubuntu), luego:

\`\`\`bash
# Extraer texto con la maquetación por defecto
pdftotext input.pdf output.txt

# Preservar la maquetación tanto como sea posible
pdftotext -layout input.pdf output.txt

# Extraer texto de un rango específico de páginas (páginas 1-5)
pdftotext -f 1 -l 5 input.pdf output.txt

# Extraer texto de un PDF escaneado combinando pdftotext con OCRmyPDF
ocrmypdf --skip-text input.pdf scanned-with-ocr.pdf
pdftotext scanned-with-ocr.pdf output.txt
\`\`\`

\`pdftotext\` es el caballo de batalla de la extracción de texto PDF en el mundo open-source. Es rápido, scriptable y maneja miles de archivos por lotes. Para PDFs escaneados, **OCRmyPDF** es la opción de facto: añade una capa de texto a PDFs escaneados sin alterar las imágenes originales de las páginas.

## Preguntas frecuentes

### ¿Puedo extraer texto de un PDF escaneado?

Sí, pero necesitas OCR. La [herramienta de extraer texto de UtilBoxx](/es/tools/pdf/extract-text) ejecuta OCR en tu navegador, convirtiendo la imagen escaneada en texto buscable sin subir tu archivo a ningún sitio. Adobe Acrobat Pro también ejecuta OCR en PDFs escaneados. El flujo CLI es **OCRmyPDF** para añadir la capa de texto y luego **pdftotext** para volcar el texto.

### ¿La extracción de texto conserva el formato?

Generalmente no. La extracción de texto de un PDF te da las palabras y los párrafos, pero el formato visual (negrita, cursiva, tamaños de fuente, columnas) a menudo se pierde. \`pdftotext -layout\` hace un trabajo razonable preservando el diseño de columnas, y herramientas como "Exportar a Word" de Adobe conservan más estructura visual, a costa de ser mucho más pesadas. Para la mayoría de usos — citar, traducir, buscar — basta el texto plano.

### ¿Puedo extraer texto de un PDF protegido con contraseña?

Sí, pero necesitas la contraseña. Los PDFs protegidos con contraseña se pueden abrir con ella y luego extraer el texto normalmente. La mayoría de las herramientas, incluida UtilBoxx, pedirán la contraseña cuando sea necesario. Si no la tienes, el texto no es accesible por diseño: es una característica de seguridad, no un bug.

### ¿La extracción funciona en todos los idiomas?

Sí. La extracción basada en texto funciona en cualquier idioma incrustado en el PDF. El OCR funciona en cualquier idioma para el que el motor haya sido entrenado. El OCR basado en navegador de UtilBoxx admite una amplia gama de escrituras latinas, cirílicas y de Asia oriental. Adobe Acrobat Pro admite muchas más. Para escrituras poco comunes, herramientas CLI como **Tesseract** ofrecen la cobertura más amplia.

### ¿Es seguro usar un extractor de texto online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador**: sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tu archivo se está subiendo a un servidor remoto y lee atentamente su política de privacidad. Evita subir a un extractor en el que no confías cualquier documento con información personal, financiera, médica o legalmente sensible.

### ¿Cuál es la diferencia entre «copiar texto» y «extraer texto»?

En la mayoría de las herramientas son lo mismo: el contenido de texto del PDF. Algunas (como \`pdftotext -layout\`) intentan preservar la maquetación visual en texto plano. Otras (como «Exportar a Word» de Adobe) producen un documento estructurado. UtilBoxx te da texto plano limpio: perfecto para pegar en cualquier sitio.

## Conclusión

Extraer texto de un PDF es una pequeña tarea que aparece constantemente y no debería requerir una suscripción de pago o instalar software. Para la mayoría de la gente, la [herramienta gratuita de extraer texto de UtilBoxx](/es/tools/pdf/extract-text) es la opción obvia: es privada, rápida, gratis, maneja tanto PDFs con texto como escaneados y funciona en tu navegador.

Si ya pagas Adobe Acrobat, su función "Exportar PDF" es excelente. Si estás programando trabajo por lotes, la combinación de **pdftotext** y **OCRmyPDF** en la terminal es imbatible.

Para todo lo demás, visita las [herramientas PDF de UtilBoxx](/es/tools/pdf) y encontrarás un conjunto completo de herramientas para trabajar con PDF, con privacidad como prioridad, todo en tu navegador.`;

const extractTextPt = `## Por que extrair texto de um PDF?

PDFs são projetados para parecer iguais em qualquer lugar, o que os torna perfeitos para compartilhar e imprimir. Mas essa fidelidade visual esconde um problema: o texto dentro de um PDF frequentemente não é realmente texto. Pode ser um traçado vetorial que *parece* a letra "A" mas não contém uma letra "A" que o computador possa copiar. Ou pode ser uma imagem plana de uma página com texto que o scanner viu mas a máquina não consegue ler.

Quando você precisa realmente fazer algo com o conteúdo — citá-lo em um e-mail, colá-lo em um tradutor, editá-lo em um documento ou procurar um parágrafo em 200 páginas — você precisa extrair o texto. Este guia mostra como.

Os motivos pelos quais as pessoas precisam extrair texto de um PDF são práticos e frequentes:

- **Citar um trecho**: copie um parágrafo de um paper de pesquisa em um e-mail sem redigitá-lo.
- **Traduzir um documento**: cole um PDF em idioma estrangeiro em uma ferramenta de tradução. Motores de tradução precisam de texto simples.
- **Editar e reformatar**: tire o texto de um PDF para o Word ou Google Docs para corrigir erros ou atualizar a redação.
- **Pesquisar em PDFs digitalizados**: um livro escaneado é uma imagem de 300 páginas. Extrair o texto com OCR o torna pesquisável.
- **Reaproveitar conteúdo**: pegue um capítulo de um PDF antigo e coloque-o em um novo relatório.
- **Extração de dados**: tire dados tabulares de um relatório em PDF para uma planilha.

O desafio: PDFs vêm em dois sabores e precisam de ferramentas diferentes.

- **PDFs com texto** (a maioria dos modernos): o texto é texto real, codificado no arquivo. A extração é rápida e sem perdas.
- **PDFs digitalizados** (imagens de páginas): o texto é só pixel. Você precisa de OCR (Reconhecimento Óptico de Caracteres) para lê-lo.

## Método 1: Use o extrator de texto PDF grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de extrair texto é a [ferramenta de extrair texto de PDF do UtilBoxx](/pt/tools/pdf/extract-text). Ela roda inteiramente no seu navegador, lida tanto com PDFs com texto quanto com escaneados, e nunca envia seu arquivo para um servidor.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/pdf/extract-text](/pt/tools/pdf/extract-text)
2. Clique na área de upload e selecione seu PDF (ou arraste e solte)
3. A ferramenta detecta se o PDF tem texto embutido ou é uma imagem escaneada
4. Para PDFs com texto, ela copia o texto diretamente. Para escaneados, roda **OCR** no seu navegador.
5. Copie o resultado para a área de transferência ou baixe como .txt

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. O arquivo nunca chega a um servidor.
- **Lida com os dois tipos de PDF**: com texto e escaneados (com OCR)
- **Funciona em qualquer dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Sem marcas d'água**, sem limite diário
- **Rápido**: a extração de texto é quase instantânea; o OCR leva alguns segundos por página

Se você precisa tirar texto de um PDF — de vez em quando ou o dia todo — esta é a ferramenta mais flexível que você pode usar sem instalar nada.

## Método 2: Adobe Acrobat Pro (Pago)

Adobe Acrobat Pro é o peso-pesado do mundo PDF. Sua ferramenta "Exportar PDF" permite converter um PDF para Word, Excel, texto simples e outros formatos. Para PDFs com texto, a exportação é limpa. Para PDFs escaneados, o Acrobat executa um mecanismo OCR de alta qualidade que reconhece dezenas de idiomas e preserva o layout razoavelmente bem.

O problema é o preço. Acrobat Pro custa cerca de **$19.99 por mês** (aproximadamente $240 por ano) na assinatura. Para uma extração pontual, é uma troca ruim. Também requer instalação desktop, que pode ser pesada em máquinas antigas.

Acrobat vale a pena apenas se você já o usa para edição, redação, assinaturas eletrônicas ou criação de formulários. Seu OCR é excelente, mas se extrair texto é tudo o que você precisa, uma ferramenta baseada em navegador faz o trabalho sem a fatura.

## Método 3: Linha de comando com pdftotext (Poppler)

Se você se sente confortável no terminal, a ferramenta open-source **pdftotext** do pacote **poppler-utils** é a opção CLI mais rápida. Está disponível em macOS (via Homebrew), Linux (via apt/dnf/pacman) e Windows (via Cygwin ou WSL).

Instale com \`brew install poppler\` (macOS) ou \`sudo apt install poppler-utils\` (Debian/Ubuntu), depois:

\`\`\`bash
# Extrair texto com layout padrão
pdftotext input.pdf output.txt

# Preservar o layout tanto quanto possível
pdftotext -layout input.pdf output.txt

# Extrair texto de um intervalo de páginas específico (páginas 1-5)
pdftotext -f 1 -l 5 input.pdf output.txt

# Extrair texto de um PDF escaneado combinando pdftotext com OCRmyPDF
ocrmypdf --skip-text input.pdf scanned-with-ocr.pdf
pdftotext scanned-with-ocr.pdf output.txt
\`\`\`

\`pdftotext\` é o cavalo de batalha da extração de texto PDF no mundo open-source. É rápido, programável e lida com milhares de arquivos em lote. Para PDFs escaneados, **OCRmyPDF** é a opção de fato: adiciona uma camada de texto a PDFs escaneados sem alterar as imagens originais das páginas.

## Perguntas frequentes

### Posso extrair texto de um PDF escaneado?

Sim, mas você precisa de OCR. A [ferramenta de extrair texto do UtilBoxx](/pt/tools/pdf/extract-text) executa OCR no seu navegador, convertendo a imagem escaneada em texto pesquisável sem enviar seu arquivo para lugar nenhum. O Adobe Acrobat Pro também roda OCR em PDFs escaneados. O fluxo CLI é **OCRmyPDF** para adicionar a camada de texto e em seguida **pdftotext** para despejar o texto.

### A extração de texto preserva a formatação?

Geralmente não. A extração de texto de um PDF te dá as palavras e os parágrafos, mas a formatação visual (negrito, itálico, tamanhos de fonte, colunas) frequentemente se perde. \`pdftotext -layout\` faz um trabalho razoável preservando o layout de colunas, e ferramentas como "Exportar para Word" do Adobe preservam mais estrutura visual, ao custo de serem muito mais pesadas. Para a maioria dos usos — citar, traduzir, pesquisar — texto simples basta.

### Posso extrair texto de um PDF protegido por senha?

Sim, mas você precisa da senha. PDFs protegidos por senha podem ser abertos com a senha e em seguida o texto pode ser extraído normalmente. A maioria das ferramentas, incluindo o UtilBoxx, pedirá a senha quando necessário. Se você não tem a senha, o texto não é acessível por design: é um recurso de segurança, não um bug.

### A extração funciona em todos os idiomas?

Sim. A extração baseada em texto funciona em qualquer idioma embutido no PDF. O OCR funciona em qualquer idioma para o qual o mecanismo tenha sido treinado. O OCR baseado em navegador do UtilBoxx suporta uma ampla gama de escritas latinas, cirílicas e do leste asiático. O Adobe Acrobat Pro suporta muito mais. Para escritas incomuns, ferramentas CLI como **Tesseract** oferecem a cobertura mais ampla.

### É seguro usar um extrator de texto online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que seu arquivo está sendo enviado para um servidor remoto e leia atentamente sua política de privacidade. Evite enviar a um extrator em que você não confia qualquer documento com informações pessoais, financeiras, médicas ou legalmente sensíveis.

### Qual a diferença entre "copiar texto" e "extrair texto"?

Na maioria das ferramentas é a mesma coisa: o conteúdo de texto do PDF. Algumas (como \`pdftotext -layout\`) tentam preservar o layout visual em texto simples. Outras (como "Exportar para Word" do Adobe) produzem um documento estruturado. O UtilBoxx te dá texto simples limpo: perfeito para colar em qualquer lugar.

## Conclusão

Extrair texto de um PDF é uma pequena tarefa que surge constantemente e não deveria exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, a [ferramenta gratuita de extrair texto do UtilBoxx](/pt/tools/pdf/extract-text) é a escolha óbvia: é privada, rápida, grátis, lida tanto com PDFs com texto quanto escaneados, e funciona no seu navegador.

Se você já paga pelo Adobe Acrobat, sua função "Exportar PDF" é excelente. Se você está programando trabalho em lote, a combinação de **pdftotext** e **OCRmyPDF** no terminal é imbatível.

Para todo o resto, visite as [ferramentas PDF do UtilBoxx](/pt/tools/pdf) e você encontrará um conjunto completo de ferramentas para trabalhar com PDFs, com privacidade como prioridade, tudo no seu navegador.`;

const extractTextFr = `## Pourquoi extraire du texte d'un PDF ?

Les PDF sont conçus pour s'afficher identiquement partout, ce qui les rend parfaits pour le partage et l'impression. Mais cette fidélité visuelle cache un problème : le texte dans un PDF n'est souvent pas vraiment du texte. Il peut s'agir d'un tracé vectoriel qui *ressemble* à la lettre « A » mais ne contient pas de lettre « A » que l'ordinateur puisse copier. Ou il peut s'agir d'une image plate d'une page contenant du texte qu'un scanner a vu mais qu'une machine ne peut pas lire.

Quand vous avez besoin de faire quelque chose avec le contenu — le citer dans un e-mail, le coller dans un traducteur, l'éditer dans un document, ou chercher un paragraphe dans 200 pages — il faut extraire le texte. Ce guide vous montre comment.

Les raisons pour lesquelles on doit extraire le texte d'un PDF sont pratiques et fréquentes :

- **Citer un passage** : copier un paragraphe d'un article de recherche dans un e-mail sans le retaper.
- **Traduire un document** : coller un PDF en langue étrangère dans un outil de traduction. Les moteurs de traduction ont besoin de texte brut.
- **Éditer et reformater** : extraire le texte d'un PDF vers Word ou Google Docs pour corriger des fautes ou mettre à jour la formulation.
- **Rechercher dans des PDF scannés** : un livre scanné est une image de 300 pages. L'extraction de texte par OCR le rend recherchable.
- **Réutiliser du contenu** : prendre un chapitre d'un ancien PDF et le mettre dans un nouveau rapport.
- **Extraction de données** : sortir des données tabulaires d'un rapport PDF vers un tableur.

Le défi : les PDF existent en deux variétés qui nécessitent des outils différents.

- **PDF avec texte** (la plupart des PDF modernes) : le texte est du vrai texte, encodé dans le fichier. L'extraction est rapide et sans perte.
- **PDF numérisés** (images de pages) : le texte n'est que pixels. Il faut l'OCR (Reconnaissance Optique de Caractères) pour le lire.

## Méthode 1 : Utiliser l'extracteur de texte PDF gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée d'extraire du texte est l'[outil d'extraction de texte PDF de UtilBoxx](/fr/tools/pdf/extract-text). Il s'exécute entièrement dans votre navigateur, gère les deux types de PDF, et n'envoie jamais votre fichier sur un serveur.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/pdf/extract-text](/fr/tools/pdf/extract-text)
2. Cliquez sur la zone de téléversement et sélectionnez votre PDF (ou glissez-déposez)
3. L'outil détecte si votre PDF contient du texte intégré ou s'il s'agit d'une image scannée
4. Pour les PDF avec texte, il copie le texte directement. Pour les scannés, il lance l'**OCR** dans votre navigateur.
5. Copiez le résultat dans le presse-papiers, ou téléchargez-le en .txt

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Le fichier n'arrive jamais sur un serveur.
- **Gère les deux types de PDF** : avec texte et scannés (avec OCR)
- **Fonctionne sur tout appareil** : Windows, Mac, Linux, ChromeOS, iOS, Android
- **Aucun filigrane**, pas de limite quotidienne
- **Rapide** : l'extraction de texte est quasi instantanée ; l'OCR prend quelques secondes par page

Si vous devez extraire du texte d'un PDF — de temps en temps ou toute la journée — c'est l'outil le plus souple que vous puissiez utiliser sans rien installer.

## Méthode 2 : Adobe Acrobat Pro (Payant)

Adobe Acrobat Pro est le poids lourd du monde PDF. Son outil « Exporter un PDF » permet de convertir un PDF en Word, Excel, texte brut et bien d'autres formats. Pour les PDF avec texte, l'export est propre. Pour les PDF scannés, Acrobat lance un moteur OCR de haute qualité qui reconnaît des dizaines de langues et préserve raisonnablement la mise en page.

Le hic, c'est le prix. Acrobat Pro coûte environ **19,99 $ par mois** (environ 240 $ par an) en abonnement. Pour une extraction ponctuelle, c'est un mauvais calcul. Il faut aussi une installation desktop, qui peut être lourde sur des machines anciennes.

Acrobat ne vaut le coup que si vous l'utilisez déjà pour l'édition, la rédaction, la signature électronique ou la création de formulaires. Son OCR est excellent, mais si l'extraction de texte est tout ce dont vous avez besoin, un outil en navigateur fait le travail sans la facture.

## Méthode 3 : Ligne de commande avec pdftotext (Poppler)

Si vous êtes à l'aise dans un terminal, l'outil open-source **pdftotext** du paquet **poppler-utils** est l'option CLI la plus rapide. Il est disponible sur macOS (via Homebrew), Linux (via apt/dnf/pacman) et Windows (via Cygwin ou WSL).

Installez-le avec \`brew install poppler\` (macOS) ou \`sudo apt install poppler-utils\` (Debian/Ubuntu), puis :

\`\`\`bash
# Extraire le texte avec la mise en page par défaut
pdftotext input.pdf output.txt

# Préserver la mise en page autant que possible
pdftotext -layout input.pdf output.txt

# Extraire le texte d'une plage de pages précise (pages 1 à 5)
pdftotext -f 1 -l 5 input.pdf output.txt

# Extraire le texte d'un PDF scanné en combinant pdftotext avec OCRmyPDF
ocrmypdf --skip-text input.pdf scanned-with-ocr.pdf
pdftotext scanned-with-ocr.pdf output.txt
\`\`\`

\`pdftotext\` est le cheval de bataille de l'extraction de texte PDF dans le monde open-source. Il est rapide, scriptable, et gère des milliers de fichiers en lots. Pour les PDF scannés, **OCRmyPDF** est le choix de facto : il ajoute une couche de texte aux PDF scannés sans altérer les images originales des pages.

## Questions fréquentes

### Puis-je extraire du texte d'un PDF numérisé ?

Oui, mais il faut de l'OCR. L'[outil d'extraction de texte de UtilBoxx](/fr/tools/pdf/extract-text) lance l'OCR dans votre navigateur, convertissant l'image scannée en texte recherchable sans téléverser votre fichier. Adobe Acrobat Pro lance aussi l'OCR sur les PDF scannés. Le flux CLI consiste à utiliser **OCRmyPDF** pour ajouter la couche de texte, puis **pdftotext** pour extraire le texte.

### L'extraction préserve-t-elle la mise en forme ?

En général non. L'extraction de texte d'un PDF vous donne les mots et les paragraphes, mais la mise en forme visuelle (gras, italique, tailles de police, colonnes) est souvent perdue. \`pdftotext -layout\` fait un travail raisonnable pour préserver la mise en colonnes, et des outils comme « Exporter vers Word » d'Adobe préservent davantage la structure visuelle, au prix d'une grande lourdeur. Pour la plupart des usages — citer, traduire, rechercher — le texte brut suffit.

### Puis-je extraire le texte d'un PDF protégé par mot de passe ?

Oui, mais il faut le mot de passe. Les PDF protégés par mot de passe peuvent être ouverts avec ce dernier, puis le texte est extrait normalement. La plupart des outils, y compris UtilBoxx, demanderont le mot de passe si nécessaire. Si vous ne l'avez pas, le texte n'est pas accessible par conception : c'est une fonctionnalité de sécurité, pas un bug.

### L'extraction fonctionne-t-elle dans toutes les langues ?

Oui. L'extraction basée sur le texte fonctionne dans toute langue intégrée au PDF. L'OCR fonctionne dans toute langue pour laquelle le moteur a été entraîné. L'OCR en navigateur de UtilBoxx prend en charge un large éventail d'écritures latines, cyrilliques et est-asiatiques. Adobe Acrobat Pro en prend en charge beaucoup plus. Pour les écritures peu courantes, des outils CLI comme **Tesseract** offrent la couverture la plus large.

### Est-il sûr d'utiliser un extracteur de texte en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que votre fichier est téléversé sur un serveur distant et lisez attentivement leur politique de confidentialité. Évitez de téléverser sur un extracteur en qui vous n'avez pas confiance tout document contenant des informations personnelles, financières, médicales ou juridiquement sensibles.

### Quelle est la différence entre « copier du texte » et « extraire du texte » ?

Dans la plupart des outils, c'est la même chose : le contenu textuel du PDF. Certains (comme \`pdftotext -layout\`) tentent de préserver la mise en page visuelle en texte brut. D'autres (comme « Exporter vers Word » d'Adobe) produisent un document structuré. UtilBoxx vous donne du texte brut propre : parfait pour coller n'importe où.

## Conclusion

Extraire du texte d'un PDF est une petite tâche qui revient constamment et ne devrait pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, l'[outil gratuit d'extraction de texte PDF de UtilBoxx](/fr/tools/pdf/extract-text) est le choix évident : privé, rapide, gratuit, gérant à la fois les PDF avec texte et les scannés, et fonctionnant dans votre navigateur.

Si vous payez déjà Adobe Acrobat, sa fonction « Exporter un PDF » est excellente. Si vous scriptz du travail par lots, la combinaison de **pdftotext** et **OCRmyPDF** dans le terminal est imbattable.

Pour tout le reste, rendez-vous sur les [outils PDF de UtilBoxx](/fr/tools/pdf) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const extractTextDe = `## Warum Text aus einem PDF extrahieren?

PDFs sind darauf ausgelegt, überall identisch auszusehen, was sie perfekt zum Teilen und Drucken macht. Doch diese visuelle Treue verbirgt ein Problem: Der Text in einem PDF ist oft kein echter Text. Es kann ein Vektorpfad sein, der wie der Buchstabe „A" aussieht, aber keinen Buchstaben „A" enthält, den der Computer kopieren könnte. Oder es kann ein flaches Bild einer Seite sein, das Text enthält, den ein Scanner gesehen hat, eine Maschine aber nicht lesen kann.

Wenn Sie mit dem Inhalt tatsächlich etwas tun möchten — ihn in einer E-Mail zitieren, in ein Übersetzungstool einfügen, in einem Dokument bearbeiten oder einen Absatz in 200 Seiten suchen — müssen Sie den Text extrahieren. Dieser Leitfaden zeigt Ihnen, wie es geht.

Die Gründe, warum Menschen Text aus einem PDF extrahieren müssen, sind praktisch und häufig:

- **Eine Passage zitieren**: Einen Absatz aus einem Forschungsbericht in eine E-Mail kopieren, ohne ihn neu zu tippen.
- **Ein Dokument übersetzen**: Ein fremdsprachiges PDF in ein Übersetzungstool einfügen. Übersetzungsmaschinen brauchen reinen Text.
- **Bearbeiten und umformatieren**: Text aus einem PDF nach Word oder Google Docs ziehen, um Tippfehler zu korrigieren oder Formulierungen zu aktualisieren.
- **In gescannten PDFs suchen**: Ein gescanntes Buch ist ein 300-seitiges Bild. Das Extrahieren des Textes per OCR macht es durchsuchbar.
- **Inhalt wiederverwenden**: Ein Kapitel aus einem alten PDF holen und in einen neuen Bericht einfügen.
- **Datenextraktion**: Tabellarische Daten aus einem PDF-Bericht in eine Tabelle ziehen.

Die Herausforderung: PDFs gibt es in zwei Varianten, und sie brauchen unterschiedliche Werkzeuge.

- **PDFs mit Text** (die meisten modernen PDFs): Der Text ist echter, in der Datei kodierter Text. Die Extraktion ist schnell und verlustfrei.
- **Gescannte PDFs** (Seitenbilder): Der Text sind nur Pixel. Sie brauchen OCR (Optical Character Recognition), um ihn zu lesen.

## Methode 1: Den kostenlosen PDF-Textextraktor von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode ist das [PDF-Textextraktionswerkzeug von UtilBoxx](/de/tools/pdf/extract-text). Es läuft vollständig in Ihrem Browser, verarbeitet sowohl textbasierte als auch gescannte PDFs und sendet Ihre Datei nie an einen Server.

So verwenden Sie es:

1. Gehen Sie zu [utilboxx.com/de/tools/pdf/extract-text](/de/tools/pdf/extract-text)
2. Klicken Sie auf den Upload-Bereich und wählen Sie Ihre PDF (oder ziehen Sie sie per Drag & Drop)
3. Das Werkzeug erkennt, ob Ihr PDF eingebetteten Text enthält oder ein gescanntes Bild ist
4. Bei Text-PDFs wird der Text direkt kopiert. Bei gescannten PDFs läuft **OCR** in Ihrem Browser.
5. Kopieren Sie das Ergebnis in die Zwischenablage oder laden Sie es als .txt-Datei herunter

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in Ihrem Browser verarbeitet. Die Datei erreicht nie einen Server.
- **Verarbeitet beide PDF-Typen**: textbasiert und gescannt (mit OCR)
- **Funktioniert auf jedem Gerät**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Keine Wasserzeichen**, kein Tageslimit
- **Schnell**: Die Textextraktion ist nahezu augenblicklich; OCR dauert wenige Sekunden pro Seite

Wenn Sie Text aus einem PDF holen müssen — gelegentlich oder den ganzen Tag — ist dies das flexibelste Werkzeug, das Sie ohne Installation nutzen können.

## Methode 2: Adobe Acrobat Pro (Kostenpflichtig)

Adobe Acrobat Pro ist das Schwergewicht der PDF-Welt. Sein Werkzeug „PDF exportieren" erlaubt es, ein PDF in Word, Excel, reinen Text und viele andere Formate zu konvertieren. Bei Text-PDFs ist der Export sauber. Bei gescannten PDFs läuft Acrobats hochwertige OCR-Engine, die Dutzende Sprachen erkennt und das Layout einigermaßen beibehält.

Der Haken ist der Preis. Acrobat Pro kostet im Abonnement ungefähr **19,99 $ pro Monat** (etwa 240 $ pro Jahr). Für eine gelegentliche Extraktion ein schlechtes Geschäft. Außerdem ist eine Desktop-Installation nötig, die auf älteren Maschinen schwer wiegen kann.

Acrobat lohnt sich nur, wenn Sie es bereits für Bearbeitung, Schwärzung, elektronische Signaturen oder Formularerstellung nutzen. Seine OCR ist ausgezeichnet, aber wenn Textextraktion alles ist, was Sie brauchen, erledigt ein Browser-Tool die Arbeit ohne die Rechnung.

## Methode 3: Kommandozeile mit pdftotext (Poppler)

Wenn Sie sich im Terminal wohlfühlen, ist das Open-Source-Werkzeug **pdftotext** aus dem **poppler-utils**-Paket die schnellste CLI-Option. Es ist verfügbar auf macOS (über Homebrew), Linux (über apt/dnf/pacman) und Windows (über Cygwin oder WSL).

Installieren Sie es mit \`brew install poppler\` (macOS) oder \`sudo apt install poppler-utils\` (Debian/Ubuntu), dann:

\`\`\`bash
# Text mit Standardlayout extrahieren
pdftotext input.pdf output.txt

# Layout so weit wie möglich erhalten
pdftotext -layout input.pdf output.txt

# Text aus einem bestimmten Seitenbereich extrahieren (Seiten 1-5)
pdftotext -f 1 -l 5 input.pdf output.txt

# Text aus einem gescannten PDF extrahieren, indem pdftotext mit OCRmyPDF kombiniert wird
ocrmypdf --skip-text input.pdf scanned-with-ocr.pdf
pdftotext scanned-with-ocr.pdf output.txt
\`\`\`

\`pdftotext\` ist das Arbeitstier der PDF-Textextraktion in der Open-Source-Welt. Es ist schnell, skriptbar und verarbeitet Tausende von Dateien im Stapel. Für gescannte PDFs ist **OCRmyPDF** die De-facto-Wahl: Es fügt eine Textschicht zu gescannten PDFs hinzu, ohne die ursprünglichen Seitenbilder zu verändern.

## Häufige Fragen

### Kann ich Text aus einem gescannten PDF extrahieren?

Ja, aber Sie brauchen OCR. Das [PDF-Textextraktionswerkzeug von UtilBoxx](/de/tools/pdf/extract-text) führt OCR in Ihrem Browser aus und wandelt das gescannte Bild in durchsuchbaren Text um, ohne Ihre Datei hochzuladen. Adobe Acrobat Pro führt ebenfalls OCR auf gescannten PDFs aus. Der CLI-Workflow ist **OCRmyPDF** zum Hinzufügen der Textschicht und anschließend **pdftotext** zum Ausgeben des Textes.

### Bewahrt die Textextraktion die Formatierung?

In der Regel nicht. Die PDF-Textextraktion liefert Ihnen Wörter und Absätze, aber die visuelle Formatierung (Fett, Kursiv, Schriftgrößen, Spalten) geht oft verloren. \`pdftotext -layout\` leistet brauchbare Arbeit beim Erhalten des Spaltenlayouts, und Werkzeuge wie Adobes „Als Word exportieren" bewahren mehr visuelle Struktur, kosten aber deutlich mehr Rechenleistung. Für die meisten Zwecke — Zitieren, Übersetzen, Suchen — reicht reiner Text.

### Kann ich Text aus einem passwortgeschützten PDF extrahieren?

Ja, aber Sie brauchen das Passwort. Passwortgeschützte PDFs können mit dem Passwort geöffnet und der Text dann normal extrahiert werden. Die meisten Werkzeuge, einschließlich UtilBoxx, fordern das Passwort bei Bedarf an. Wenn Sie das Passwort nicht haben, ist der Text absichtlich nicht zugänglich — das ist ein Sicherheitsmerkmal, kein Fehler.

### Funktioniert die Extraktion in jeder Sprache?

Ja. Die textbasierte Extraktion funktioniert in jeder in das PDF eingebetteten Sprache. OCR funktioniert in jeder Sprache, auf die die Engine trainiert wurde. Die browserbasierte OCR von UtilBoxx unterstützt eine breite Palette lateinischer, kyrillischer und ostasiatischer Schriften. Adobe Acrobat Pro unterstützt viele weitere. Für ungewöhnliche Schriften bieten CLI-Werkzeuge wie **Tesseract** die breiteste Sprachabdeckung.

### Ist die Nutzung eines Online-Textextraktors sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in Ihrem Browser** – kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen sollten Sie davon ausgehen, dass Ihre Datei auf einen entfernten Server hochgeladen wird, und die Datenschutzrichtlinie sorgfältig lesen. Vermeiden Sie das Hochladen von Dokumenten mit persönlichen, finanziellen, medizinischen oder rechtlich sensiblen Informationen zu einem Extraktor, dem Sie nicht vertrauen.

### Was ist der Unterschied zwischen „Text kopieren" und „Text extrahieren"?

In den meisten Werkzeugen ist es dasselbe: der Textinhalt des PDFs. Manche (wie \`pdftotext -layout\") versuchen, das visuelle Layout in reinem Text zu erhalten. Andere (wie Adobes „Als Word exportieren") erzeugen ein strukturiertes Dokument. UtilBoxx liefert Ihnen sauberen reinen Text — perfekt zum Einfügen überall.

## Fazit

Text aus einem PDF zu extrahieren ist eine kleine Aufgabe, die ständig anfällt und keine kostenpflichtige Subskription oder Software-Installation erfordern sollte. Für die meisten Menschen ist das [kostenlose PDF-Textextraktionswerkzeug von UtilBoxx](/de/tools/pdf/extract-text) die offensichtliche Wahl: privat, schnell, kostenlos, verarbeitet sowohl Text- als auch Scan-PDFs und funktioniert im Browser.

Wenn Sie Adobe Acrobat bereits aus anderen Gründen bezahlen, ist seine Funktion „PDF exportieren" ausgezeichnet. Wenn Sie Stapelverarbeitung skripten, ist die Kombination aus **pdftotext** und **OCRmyPDF** im Terminal unschlagbar.

Für alles andere besuchen Sie die [PDF-Werkzeuge von UtilBoxx](/de/tools/pdf): Dort finden Sie einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit PDFs – alles im Browser.`;

export const extractTextPost: Record<string, BlogPost> = {
  en: {
    slug: "extract-text-from-pdf",
    category: "PDF Tools",
    date: "2026-02-02",
    readTime: "5 min",
    title: "How to Extract Text from a PDF (Copy, Paste, Export)",
    description: "Copy text from a PDF for editing, quoting, or translation. Works on normal and scanned PDFs.",
    content: extractTextEn,
  },
  zh: {
    slug: "extract-text-from-pdf",
    category: "PDF 工具",
    date: "2026-02-02",
    readTime: "5 分钟",
    title: "如何从 PDF 提取文本（复制、粘贴、导出）",
    description: "从 PDF 复制文字以便编辑、引用或翻译。适用于普通和扫描型 PDF。",
    content: extractTextZh,
  },
  ja: {
    slug: "extract-text-from-pdf",
    category: "PDF ツール",
    date: "2026-02-02",
    readTime: "5 分",
    title: "PDF からテキストを抽出する方法（コピー、貼り付け、エクスポート）",
    description: "編集、引用、翻訳のために PDF からテキストをコピー。通常の PDF とスキャン PDF の両方に対応。",
    content: extractTextJa,
  },
  es: {
    slug: "extract-text-from-pdf",
    category: "Herramientas PDF",
    date: "2026-02-02",
    readTime: "5 min",
    title: "Cómo extraer texto de un PDF (copiar, pegar, exportar)",
    description: "Copia texto de un PDF para editarlo, citarlo o traducirlo. Funciona con PDFs normales y escaneados.",
    content: extractTextEs,
  },
  pt: {
    slug: "extract-text-from-pdf",
    category: "Ferramentas PDF",
    date: "2026-02-02",
    readTime: "5 min",
    title: "Como extrair texto de um PDF (copiar, colar, exportar)",
    description: "Copie texto de um PDF para editar, citar ou traduzir. Funciona em PDFs normais e escaneados.",
    content: extractTextPt,
  },
  fr: {
    slug: "extract-text-from-pdf",
    category: "Outils PDF",
    date: "2026-02-02",
    readTime: "5 min",
    title: "Comment extraire du texte d'un PDF (copier, coller, exporter)",
    description: "Copiez du texte d'un PDF pour l'éditer, le citer ou le traduire. Fonctionne sur les PDF normaux et numérisés.",
    content: extractTextFr,
  },
  de: {
    slug: "extract-text-from-pdf",
    category: "PDF-Werkzeuge",
    date: "2026-02-02",
    readTime: "5 Min",
    title: "Text aus PDF extrahieren (Kopieren, Einfügen, Exportieren)",
    description: "Kopieren Sie Text aus einem PDF zum Bearbeiten, Zitieren oder Übersetzen. Funktioniert bei normalen und gescannten PDFs.",
    content: extractTextDe,
  },
};
