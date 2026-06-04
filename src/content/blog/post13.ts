// Blog post: How to Add a Watermark to a PDF
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const addWatermarkEn = `## Why add a watermark to a PDF?

Watermarks are one of the oldest tricks in document handling — a faint mark across the page that identifies who owns, who sent, or who reviewed a document. They are simple, low-tech, and surprisingly effective. A diagonal "CONFIDENTIAL" on every page of a draft tells readers at a glance not to share it. A logo in the corner of every page turns a stack of documents into a branded package. A "DRAFT" stamp prevents a working document from being mistaken for a final one.

The reasons people add watermarks to PDFs are practical and frequent:

- **Confidentiality**: Mark drafts, internal documents, and proprietary material as "Confidential" so the recipient knows not to share them.
- **Branding**: Add a company logo or wordmark to every page of a proposal, report, or brochure.
- **Copyright protection**: Add a copyright notice to every page of a creative work, whitepaper, or e-book.
- **Draft marking**: Mark a working version of a document as "DRAFT" so it is not mistaken for a final version.
- **Status indicators**: Mark documents as "APPROVED", "REJECTED", "PENDING", "FOR REVIEW", etc.
- **Personalization**: Add a recipient's name or a code to every page of a document, turning a generic document into a personalized one.
- **Tracking**: Add a faint order ID or customer ID to every page so leaked documents can be traced.

The good news: with the right tool, adding a watermark to a PDF is a 30-second job, and you do not need to install anything.

## Method 1: Use UtilBoxx's Free PDF Watermark Tool (Recommended)

The fastest, safest, and most private way to watermark a PDF is [UtilBoxx's PDF Watermark tool](/en/tools/pdf/add-watermark). It runs entirely in your browser, so your file never leaves your device. There is no upload, no signup, no watermark (irony aside), and no daily limit.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/pdf/add-watermark](/en/tools/pdf/add-watermark)
2. Click the upload area and select your PDF (or drag and drop)
3. Choose a **text watermark** (any string, including "Confidential", "DRAFT", your company name) or an **image watermark** (a logo, signature, or icon)
4. Set the **position**: center, top, bottom, top-left, top-right, bottom-left, bottom-right
5. Set the **opacity** (transparency), usually 10-30% for text and 30-60% for images
6. Set the **rotation** (0°, 45° diagonal is classic, or any angle)
7. Set the **size** (relative to the page, usually 30-60% of the page width)
8. Choose which pages to apply: all pages, first page only, or a custom range
9. Click "Process"
10. Download the watermarked PDF

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. The file never reaches a server.
- **Text or image**: use a string ("Confidential") or upload a logo
- **Full control**: position, opacity, rotation, size — every visual property
- **Per-page or all pages**: watermark everything, or just specific pages
- **Works on any device**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **No watermarks** on the output (yes, really — it is your watermark, not ours)

If you only need to watermark documents occasionally, this is by far the lowest-friction option.

## Method 2: Adobe Acrobat Pro (Paid)

Adobe Acrobat Pro is the heavyweight of the PDF world. Its "Edit PDF" view has a "Watermark" tool that lets you add text or image watermarks, set position, opacity, rotation, scale, and choose which pages get the watermark. The interface is polished, the preview is accurate, and you can save the watermarked PDF with a single click.

The catch is the price. Acrobat Pro costs roughly **$19.99 per month** (about $240 per year) on a subscription. For a one-off watermarking job, that is a poor trade. You also need a desktop install, which can be heavy on older machines.

Acrobat is worth it only if you already use it for editing, redaction, e-signatures, or form creation. If watermarking is all you need, a browser-based tool does the job without the bill.

## Method 3: Command line with qpdf (image underlay)

If you are comfortable in a terminal, **qpdf** can place an image underlay under every page of a PDF — that is, an image drawn underneath the page content. This is a clean way to add a logo or background to every page.

Install qpdf with \`brew install qpdf\` (macOS) or \`sudo apt install qpdf\` (Debian/Ubuntu), then:

\`\`\`bash
# Overlay a single-page image watermark on every page
# The overlay.pdf is a single-page PDF that contains your watermark image
qpdf input.pdf --underlay overlay.pdf -- watermarked.pdf

# Combine with a stamp for above-page content
qpdf input.pdf --underlay overlay.pdf --stamp stamp.pdf -- watermarked.pdf

# Apply to specific pages only (e.g., page 1)
qpdf input.pdf --pages input.pdf 1 --underlay overlay.pdf -- out-1.pdf
\`\`\`

The \`--underlay\` flag draws the overlay PDF **underneath** the page content of the input PDF — perfect for a faded background watermark. For text watermarks above the content, prepare a single-page PDF with your text (e.g. via LaTeX, or any PDF generator) and use \`--stamp\` instead. **qpdf** is fast, scriptable, and unbeatable for batch watermarking across hundreds of files.

## Common questions

### Will a watermark block the actual text of the page?

No, not if you set the opacity right. A typical text watermark is 10-30% opacity, which is faint enough to read through but visible enough to identify. A logo watermark is usually 30-60% opacity. Anything above 60% is more like a stamp than a watermark, and obscures the page.

### Where is the best place to position a watermark?

- **Diagonal center** is the classic "CONFIDENTIAL" style. It crosses the page at 45°, visible from any angle, and is hard to crop out.
- **Bottom-right corner** is the unobtrusive style for branding and copyright. A small logo or copyright line sits in the margin.
- **Top-center** is good for "DRAFT" stamps and status indicators. Visible but out of the way.

Choose the position based on purpose. For confidentiality, diagonal center. For branding, bottom-right. For status, top-center.

### Can I use a logo as a watermark?

Yes. [UtilBoxx's PDF Watermark tool](/en/tools/pdf/add-watermark) supports image watermarks. Upload a PNG or JPG of your logo, set the opacity to 30-60%, and position it where you want it. A transparent-background PNG is ideal — it will not have an opaque rectangle around the logo.

### Will the watermark appear on every page or just one?

You choose. UtilBoxx lets you apply the watermark to all pages, the first page only, or a custom page range. Acrobat Pro offers the same set of options. With qpdf, the \`--underlay\` flag applies to every page by default; for a custom range, use the \`--pages\` flag to select which pages to watermark.

### Can I add a watermark with the recipient's name?

Yes. Many people generate a unique watermark per recipient (with the recipient's name, date, or order ID) before sending a personalized document. UtilBoxx supports text watermarks with any string, so you can pre-generate the personalized text and use it as your watermark. For mass personalization, write a small script with qpdf to apply a different overlay to each copy.

### Is it safe to use an online PDF watermarker?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your file is being uploaded to a remote server and read their privacy policy carefully. Avoid uploading any document containing personal, financial, medical, or legally sensitive information to a watermarker you do not trust.

### Will a watermark protect my PDF from being copied?

A watermark is a *visual* deterrent, not a *technical* one. A determined user can crop, blur, or use OCR to extract the underlying text. For serious protection, combine watermarking with PDF encryption, password protection, and digital rights management. For most everyday use, though, a watermark is a strong visual signal that discourages casual sharing.

## Conclusion

Adding a watermark to a PDF is one of those small tasks that comes up constantly — and should not require a paid subscription or a software install. For most people, [UtilBoxx's free PDF Watermark tool](/en/tools/pdf/add-watermark) is the obvious choice: it is private, fast, free, supports text and image watermarks, and works in your browser.

If you already pay for Adobe Acrobat for other reasons, its "Watermark" tool is excellent. If you are scripting batch work, qpdf with an underlay is unbeatable.

For everything else, head to [UtilBoxx PDF tools](/en/tools/pdf) and you will find a complete, privacy-first toolkit for working with PDFs — all in your browser.`;

const addWatermarkZh = `## 为什么要给 PDF 加水印？

水印是文档处理最古老的招数之一 —— 跨页面的一道淡淡标记，标明谁拥有、谁发送、或谁审阅了一份文档。它简单、低技术、却出奇地有效。草稿每页上一道斜向的"机密"字样，让读者一眼就明白不能外传。每页角落一个 logo，把一堆文档变成品牌套装。一个"DRAFT"戳能避免工作文档被误当成终稿。

人们给 PDF 加水印的原因既实际又频繁：

- **机密性**：把草稿、内部文档、专有资料标记为"机密"，让接收方知道不要外传。
- **品牌**：在每页的方案、报告、宣传册上加上公司 logo 或字标。
- **版权保护**：在创意作品、白皮书、电子书的每页加版权声明。
- **草稿标识**：把工作版本标记为"DRAFT"，免得被误当成终稿。
- **状态指示**：把文档标记为"已批准"、"已驳回"、"待处理"、"待审"等。
- **个性化**：在每页加上收件人姓名或编码，把通用文档变成个性化版本。
- **追踪**：在每页加一道淡淡的订单号或客户号，泄露出去时能追溯源头。

好消息是：只要用对工具，给 PDF 加水印是 30 秒的活儿，而且不需要装任何东西。

## 方法一：使用 UtilBoxx 免费 PDF 水印工具（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的 PDF 水印工具](/zh/tools/pdf/add-watermark)。它完全在你的浏览器中运行，文件不会离开你的设备。没有上传、没有注册、输出文件没有水印（说真的，是你的水印，不是我们的），也没有每日次数限制。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/pdf/add-watermark](/zh/tools/pdf/add-watermark)
2. 点击上传区域选择你的 PDF（或直接拖入）
3. 选择 **文本水印**（任意字符串，包括"机密"、"草稿"、公司名）或 **图片水印**（logo、签名、图标）
4. 设置 **位置**：居中、顶部、底部、左上、右上、左下、右下
5. 设置 **不透明度**（透明度），文本通常 10-30%，图片通常 30-60%
6. 设置 **旋转**（0°、45° 斜向是经典款，或任意角度）
7. 设置 **大小**（相对页面，通常是页面宽度的 30-60%）
8. 选择应用页面：所有页、仅首页、或自定义范围
9. 点击"开始处理"
10. 下载加水印后的 PDF

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，文件不会上传到任何服务器
- **文本或图片**：用字符串（"机密"）或上传 logo
- **完全可控**：位置、不透明度、旋转、大小 —— 每一个视觉属性都能调
- **逐页或全页**：水印所有页，或只水印指定页
- **全设备支持**：Windows、Mac、Linux、ChromeOS、iOS、Android
- **输出 PDF 无水印**（真的是你自己的水印，不是我们加的）

如果你只是偶尔给文档加水印，这是最省心的选择。

## 方法二：Adobe Acrobat Pro（付费）

Adobe Acrobat Pro 是 PDF 领域的重量级选手。它的"编辑 PDF"视图里有"水印"工具，可以加文本或图片水印、设置位置、不透明度、旋转、缩放，并选择哪些页要加水印。界面精致、预览准确、单击一下就能保存加水印后的 PDF。

代价是价格。Acrobat Pro 订阅版大约 **每月 $19.99**（每年约 $240 美元）。如果只是偶尔加一次水印，这个投入显然不划算。你还需要桌面安装，对老机器也不太友好。

只有当你已经用它做编辑、涂黑、电子签名或表单创建时，Acrobat 才值得。否则，浏览器工具完全够用，还免了账单。

## 方法三：命令行 qpdf（图片 underlay）

如果你熟悉终端，**qpdf** 可以在 PDF 的每页下面铺一张图片 —— 也就是把图片画在页面内容的下方。这是给每页加 logo 或背景的干净方式。

用 \`brew install qpdf\`（macOS）或 \`sudo apt install qpdf\`（Debian/Ubuntu）安装后：

\`\`\`bash
# 把单页图片水印叠加到每页的下方
# overlay.pdf 是一个包含水印图片的单页 PDF
qpdf input.pdf --underlay overlay.pdf -- watermarked.pdf

# 结合 stamp 在内容之上再加一层
qpdf input.pdf --underlay overlay.pdf --stamp stamp.pdf -- watermarked.pdf

# 只对指定页应用（例如第 1 页）
qpdf input.pdf --pages input.pdf 1 --underlay overlay.pdf -- out-1.pdf
\`\`\`

\`--underlay\` 参数把 overlay PDF 画在输入 PDF 页面内容的**下方** —— 适合做淡化的背景水印。如果要在内容之上做文本水印，准备一个含你文字的单页 PDF（比如用 LaTeX 或任何 PDF 生成器），改用 \`--stamp\` 即可。**qpdf** 快速、可脚本化、对成百上千个文件做批量水印无可替代。

## 常见问题

### 水印会挡住页面正文吗？

不会，前提是设置好不透明度。典型的文本水印 10-30% 不透明度，淡到能透过去读，但明显到能识别身份。Logo 水印通常 30-60%。超过 60% 就更像图章而不是水印了，会遮挡页面。

### 水印放在哪里最好？

- **斜向居中**是经典的"机密"风格。它以 45° 角跨过页面，从任何角度都能看见，而且很难被裁掉。
- **右下角**是低调的品牌和版权风格。小 logo 或版权行放在页边。
- **顶部居中**适合"DRAFT"戳和状态指示。可见但不挡路。

按用途选择。机密用斜向居中；品牌用右下角；状态用顶部居中。

### 可以用 logo 当水印吗？

可以。[UtilBoxx 的 PDF 水印工具](/zh/tools/pdf/add-watermark) 支持图片水印。上传 PNG 或 JPG 格式的 logo，把不透明度设到 30-60%，再放到合适的位置。透明背景的 PNG 最佳 —— logo 周围不会出现不透明的方块。

### 水印会出现在每一页还是只一页？

你说了算。UtilBoxx 允许你把水印应用到所有页、仅首页、或自定义页码范围。Acrobat Pro 提供同样的选项。用 qpdf 时，\`--underlay\` 默认作用于每页；要自定义范围，用 \`--pages\` 选择要加水印的页。

### 能加上收件人姓名的水印吗？

可以。很多人会在发送个性化文档之前，为每个收件人生成一份带收件人姓名、日期或订单号的独特水印。UtilBoxx 支持任意字符串的文本水印，所以你可以预先生成个性化文字，再当水印用。要做大规模个性化，用 qpdf 写个小脚本，给每份副本换不同的 overlay 即可。

### 使用在线 PDF 水印工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的文件会被上传到远程服务器，并仔细阅读隐私政策。避免向你不信任的水印工具上传任何包含个人、财务、医疗或法律敏感信息的文件。

### 加水印能防止 PDF 被复制吗？

水印是**视觉**层面的威慑，不是**技术**层面的防护。执意要复制的人可以裁剪、模糊处理或用 OCR 提取下面的文字。要做更严的保护，请把水印、PDF 加密、密码保护、数字版权管理结合使用。不过对大多数日常用途，水印已经是一个能有效阻止随手分享的视觉信号。

## 结论

给 PDF 加水印是一件经常要做的小事 —— 不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费 PDF 水印工具](/zh/tools/pdf/add-watermark) 是显而易见的选择：私密、快速、免费、支持文本和图片水印，浏览器里就能完成。

如果你已经为 Adobe Acrobat 付了费，那它的"水印"工具也很优秀。如果你写脚本做批量处理，qpdf 的 underlay 模式无可替代。

其他情况下，去看 [UtilBoxx 的 PDF 工具集](/zh/tools/pdf)，你会找到一个完整的、隐私优先的 PDF 处理工具箱 —— 全部在浏览器里完成。`;

const addWatermarkJa = `## なぜ PDF に透かしを追加するのか？

透かしはドキュメント処理で最も古いテクニックの 1 つで、ページをまたいだ薄いマークで、文書の所有者・送信者・レビュアーを示します。シンプル、低技術、しかし驚くほど効果的です。草稿の各ページに斜めに入る「機密」表記は、読者に対して一目で共有しないよう伝えます。すべてのページの隅に入るロゴは、ドキュメント群をブランド パッケージに変えます。「DRAFT」スタンプは作業中のドキュメントを最終版と間違えられないようにします。

PDF に透かしを入れる理由は、実際的でしかも頻繁です：

- **機密性**：草稿、社内文書、 proprietary 資料に「機密」と付け、受け手が共有しないよう伝える。
- **ブランディング**：提案書、レポート、パンフレットの各ページに会社ロゴやワードマークを入れる。
- **著作権保護**：クリエイティブ作品、ホワイトペーパー、電子書籍の各ページに著作権表示を入れる。
- **草稿識別**：作業中のバージョンを「DRAFT」とマークし、最終版と間違えられないようにする。
- **ステータス表示**：「承認済」「却下」「保留」「レビュー中」などを表示する。
- **パーソナライズ**：各ページに受け取り手の名前やコードを載せ、汎用ドキュメントを個別化する。
- **追跡**：各ページに薄いオーダー ID や顧客 ID を載せ、漏洩時に追跡できるようにする。

良いニュースは、適切なツールを使えば PDF への透かし入れは 30 秒で終わり、何もインストールする必要がないことです。

## 方法 1：UtilBoxx の無料 PDF 透かしツール（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の PDF 透かしツール](/ja/tools/pdf/add-watermark) です。完全にブラウザ内で動作するため、ファイルがデバイスの外に出ることがありません。アップロードも登録も不要、出力 PDF にも透かしなし（皮肉ではなく、あなたの透かしであって私たちの透かしではありません）、利用回数制限もありません。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/pdf/add-watermark](/ja/tools/pdf/add-watermark) を開く
2. アップロード領域をクリックして PDF を選択（またはドラッグ＆ドロップ）
3. **テキスト透かし**（任意の文字列 — 「機密」「DRAFT」、会社名など）または **画像透かし**（ロゴ、サイン、アイコン）を選択
4. **位置**を設定：中央、上、下、左上、右上、左下、右下
5. **不透明度**（透明度）を設定 — テキストは通常 10〜30%、画像は通常 30〜60%
6. **回転**を設定（0°、45° の斜めがクラシック、または任意角度）
7. **サイズ**を設定（ページ幅に対する相対値、通常 30〜60%）
8. 適用するページを選択：全ページ、1 ページ目のみ、またはカスタム範囲
9.「処理」をクリック
10. 透かし入り PDF をダウンロード

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべての処理がブラウザ内で完結。ファイルはサーバーへ送信されません
- **テキストと画像**：文字列（「機密」）またはロゴ画像を使用
- **完全制御**：位置、不透明度、回転、サイズ — すべての視覚プロパティを調整可能
- **ページ単位または全ページ**：すべてのページに透かし、または特定ページのみ
- **あらゆるデバイスで動作**：Windows、Mac、Linux、ChromeOS、iOS、Android
- **出力 PDF に余計な透かしなし**（本当にあなたのための透かしです）

たまにドキュメントに透かしを入れるだけなら、これほど低コストな選択肢はありません。

## 方法 2：Adobe Acrobat Pro（有料）

Adobe Acrobat Pro は PDF 界のヘビー級です。「PDF を編集」ビューには「透かし」ツールがあり、テキスト/画像透かしの追加、位置・不透明度・回転・スケールの設定、透かしを入れるページの選択が可能です。インターフェースは洗練され、プレビューは正確で、ワンクリックで透かし入り PDF を保存できます。

ただし価格が高めです。Acrobat Pro はサブスクリプションで月額約 **$19.99**（年額約 $240）。一度だけの透かし入れなら割に合いません。デスクトップインストールが必要なので、古いマシンには負担です。

既に編集・墨消し・電子署名・フォーム作成などのために Acrobat を利用しているなら価値があります。透かしだけが目的であれば、ブラウザツールで十分です。

## 方法 3：コマンドラインで qpdf（画像 underlay）

ターミナルに慣れているなら、**qpdf** で PDF の各ページの下に画像を敷けます — つまりページコンテンツの下に描画された画像です。これは全ページにロゴや背景を入れるクリーンな方法です。

\`brew install qpdf\`（macOS）または \`sudo apt install qpdf\`（Debian/Ubuntu）でインストールしたら：

\`\`\`bash
# 単一ページの画像透かしを各ページの下に重ねる
# overlay.pdf は透かし画像を含む 1 ページの PDF
qpdf input.pdf --underlay overlay.pdf -- watermarked.pdf

# stamp と組み合わせてコンテンツの上にもう 1 層
qpdf input.pdf --underlay overlay.pdf --stamp stamp.pdf -- watermarked.pdf

# 特定のページのみに適用（例：1 ページ目）
qpdf input.pdf --pages input.pdf 1 --underlay overlay.pdf -- out-1.pdf
\`\`\`

\`--underlay\` フラグは overlay PDF を入力 PDF のページコンテンツの下に描画します — 薄れた背景透かしにぴったりです。コンテンツの上にテキスト透かしを置きたい場合は、テキストを含む 1 ページの PDF（LaTeX や任意の PDF 生成ツールで作成）を用意し、\`--stamp\` を使ってください。**qpdf** は高速でスクリプト向き、何百ものファイルへのバッチ透かし入れに最強です。

## よくある質問

### 透かしはページ本文を隠してしまいますか？

いいえ、不透明度を正しく設定していれば大丈夫です。典型的なテキスト透かしは 10〜30% の不透明度で、透けて読める程度に薄いが、識別できる程度に濃い。ロゴ透かしは通常 30〜60%。60% を超えるとスタンプに近くなり、ページを覆い隠します。

### 透かしの最適な位置はどこ？

- **斜め中央**は古典的な「機密」スタイル。ページを 45° で横切り、どの角度からも見え、トリミングしづらい。
- **右下隅**は控えめなブランディング・著作権スタイル。小さなロゴや著作権表記が余白に置かれる。
- **上中央**は「DRAFT」スタンプやステータス表示向け。見えるが邪魔にならない。

目的に応じて選んでください。機密性には斜め中央、ブランディングには右下、ステータスには上中央。

### ロゴを透かしとして使えますか？

はい。[UtilBoxx の PDF 透かしツール](/ja/tools/pdf/add-watermark) は画像透かしに対応します。ロゴの PNG または JPG をアップロードし、不透明度を 30〜60% に設定し、配置します。背景透明の PNG が理想です — ロゴの周りに不透明な四角が出ません。

### 透かしは全ページに出ますか、それとも 1 ページだけですか？

選べます。UtilBoxx では全ページ、1 ページ目のみ、カスタム範囲のいずれかに透かしを適用できます。Acrobat Pro も同じオプションを提供します。qpdf の場合、\`--underlay\` はデフォルトで全ページに作用します。カスタム範囲には \`--pages\` を使って透かしを入れるページを選択してください。

### 受け取り手の名前入りの透かしを入れられますか？

はい。多くの人は個別化したドキュメントを送る前に、受け取り手の名前・日付・オーダー ID 付きの独自透かしを生成します。UtilBoxx は任意の文字列のテキスト透かしに対応しているので、個別化文字列を事前生成して透かしとして使えます。大量個別化には、qpdf で小さなスクリプトを書いて、コピーごとに異なる overlay を適用してください。

### オンラインの PDF 透かしツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、ファイルがリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人情報、財務、医療、法的に機密性の高い情報を含む文書は、信頼できない透かしツールにアップロードしないでください。

### 透かしは PDF のコピーを防ぎますか？

透かしは**視覚的**な抑止力であり、**技術的**な保護ではありません。決心したユーザーはトリミング・ぼかし・OCR を使って下のテキストを取り出せます。厳重な保護には、透かし・PDF 暗号化・パスワード保護・デジタル著作権管理を組み合わせてください。ただし、日常的な用途の大半では、透かしはカジュアルな共有を思いとどまらせる強力な視覚的シグナルです。

## まとめ

PDF への透かし入れは頻繁に発生する小さな作業であり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料 PDF 透かしツール](/ja/tools/pdf/add-watermark) は明白な選択です：プライベートで、速くて、無料で、テキストと画像の透かしに対応、ブラウザで完結。

Adobe Acrobat を他用途で既に利用しているなら、「透かし」ツールが優れています。バッチ処理をスクリプト化したいなら、qpdf の underlay が最強です。

その他は、[UtilBoxx の PDF ツール](/ja/tools/pdf) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先の PDF ツールキットが見つかります。`;

const addWatermarkEs = `## ¿Por qué añadir una marca de agua a un PDF?

Las marcas de agua son uno de los trucos más antiguos del manejo de documentos: una marca tenue a lo largo de la página que identifica quién posee, quién envió o quién revisó un documento. Son simples, de baja tecnología y sorprendentemente efectivas. Un "CONFIDENCIAL" diagonal en cada página de un borrador dice a los lectores de un vistazo que no deben compartirlo. Un logo en la esquina de cada página convierte una pila de documentos en un paquete de marca. Un sello "DRAFT" evita que un documento de trabajo se confunda con una versión final.

Las razones por las que la gente añade marcas de agua a los PDF son prácticas y frecuentes:

- **Confidencialidad**: marca borradores, documentos internos y material propietario como "Confidencial" para que el destinatario sepa que no debe compartirlos.
- **Branding**: añade un logo o wordmark de empresa a cada página de una propuesta, informe o folleto.
- **Protección de copyright**: añade un aviso de copyright a cada página de un trabajo creativo, whitepaper o e-book.
- **Marcado de borrador**: marca una versión de trabajo del documento como "DRAFT" para que no se confunda con una versión final.
- **Indicadores de estado**: marca documentos como "APROBADO", "RECHAZADO", "PENDIENTE", "PARA REVISIÓN", etc.
- **Personalización**: añade el nombre de un destinatario o un código a cada página, convirtiendo un documento genérico en uno personalizado.
- **Trazabilidad**: añade un ID de pedido o ID de cliente tenue a cada página para que los documentos filtrados puedan rastrearse.

La buena noticia: con la herramienta adecuada, añadir una marca de agua a un PDF es un trabajo de 30 segundos y no necesitas instalar nada.

## Método 1: Usa la herramienta de marca de agua PDF gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de marcar un PDF con agua es la [herramienta de marca de agua de UtilBoxx](/es/tools/pdf/add-watermark). Se ejecuta por completo en tu navegador, por lo que el archivo nunca sale de tu dispositivo. Sin subidas, sin registro, sin marca de agua en el resultado (ironía aparte) y sin límite diario.

Así se usa:

1. Ve a [utilboxx.com/es/tools/pdf/add-watermark](/es/tools/pdf/add-watermark)
2. Haz clic en el área de subida y selecciona tu PDF (o arrástralo)
3. Elige una **marca de agua de texto** (cualquier cadena, incluyendo "Confidencial", "DRAFT", el nombre de tu empresa) o una **marca de agua de imagen** (un logo, firma o icono)
4. Define la **posición**: centro, arriba, abajo, arriba-izquierda, arriba-derecha, abajo-izquierda, abajo-derecha
5. Define la **opacidad** (transparencia), normalmente 10-30% para texto y 30-60% para imágenes
6. Define la **rotación** (0°, 45° diagonal es la clásica, o cualquier ángulo)
7. Define el **tamaño** (relativo a la página, normalmente 30-60% del ancho de la página)
8. Elige a qué páginas aplicar: todas, solo la primera, o un rango personalizado
9. Haz clic en "Procesar"
10. Descarga el PDF con marca de agua

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. El archivo nunca llega a un servidor.
- **Texto o imagen**: usa una cadena ("Confidencial") o sube un logo
- **Control total**: posición, opacidad, rotación, tamaño — cada propiedad visual
- **Por página o todas**: marca todo, o solo páginas concretas
- **Funciona en cualquier dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Sin marcas de agua ajenas** en el resultado (sí, en serio — es tu marca, no la nuestra)

Si solo necesitas marcar documentos de vez en cuando, esta es la opción de menor fricción con diferencia.

## Método 2: Adobe Acrobat Pro (De pago)

Adobe Acrobat Pro es el peso pesado del mundo PDF. Su vista "Editar PDF" tiene una herramienta "Marca de agua" que permite añadir marcas de texto o imagen, definir posición, opacidad, rotación, escala y elegir qué páginas reciben la marca. La interfaz es pulida, la previsualización es precisa, y puedes guardar el PDF marcado con un solo clic.

El inconveniente es el precio. Acrobat Pro cuesta aproximadamente **$19.99 al mes** (unos $240 al año) en suscripción. Para una tarea puntual, es una mala relación calidad-precio. También requiere instalación de escritorio, que puede ser pesada en máquinas antiguas.

Acrobat solo vale la pena si ya lo usas para edición, redacción, firmas electrónicas o creación de formularios. Si marcar con agua es todo lo que necesitas, una herramienta basada en el navegador hace el trabajo sin la factura.

## Método 3: Línea de comandos con qpdf (underlay de imagen)

Si te manejas en la terminal, **qpdf** puede colocar una imagen debajo de cada página de un PDF — es decir, una imagen dibujada bajo el contenido de la página. Es una forma limpia de añadir un logo o fondo a cada página.

Instala qpdf con \`brew install qpdf\` (macOS) o \`sudo apt install qpdf\` (Debian/Ubuntu), luego:

\`\`\`bash
# Superponer una marca de agua de imagen de una página sobre cada página
# overlay.pdf es un PDF de una sola página que contiene tu marca de agua
qpdf input.pdf --underlay overlay.pdf -- watermarked.pdf

# Combinar con un stamp para contenido encima de la página
qpdf input.pdf --underlay overlay.pdf --stamp stamp.pdf -- watermarked.pdf

# Aplicar solo a páginas específicas (p. ej., página 1)
qpdf input.pdf --pages input.pdf 1 --underlay overlay.pdf -- out-1.pdf
\`\`\`

El parámetro \`--underlay\` dibuja el PDF superpuesto **debajo** del contenido de la página del PDF de entrada — perfecto para una marca de agua de fondo tenue. Para marcas de texto sobre el contenido, prepara un PDF de una sola página con tu texto (por ejemplo, con LaTeX o cualquier generador de PDF) y usa \`--stamp\`. **qpdf** es rápido, scriptable e imbatible para marcar por lotes cientos de archivos.

## Preguntas frecuentes

### ¿La marca de agua bloqueará el texto real de la página?

No, si defines la opacidad correctamente. Una marca de agua de texto típica tiene 10-30% de opacidad, lo bastante tenue para leer a través pero lo bastante visible para identificar. Un logo suele ir al 30-60%. Por encima del 60% es más un sello que una marca de agua y oscurece la página.

### ¿Cuál es la mejor posición para una marca de agua?

- **Centro diagonal** es el estilo clásico "CONFIDENCIAL". Cruza la página a 45°, visible desde cualquier ángulo y difícil de recortar.
- **Esquina inferior derecha** es el estilo discreto para branding y copyright. Un pequeño logo o línea de copyright queda en el margen.
- **Centro superior** va bien para sellos "DRAFT" e indicadores de estado. Visible pero fuera del camino.

Elige la posición según el propósito. Para confidencialidad, centro diagonal. Para branding, abajo-derecha. Para estado, arriba-centro.

### ¿Puedo usar un logo como marca de agua?

Sí. La [herramienta de marca de agua de UtilBoxx](/es/tools/pdf/add-watermark) admite marcas de imagen. Sube un PNG o JPG de tu logo, define la opacidad al 30-60% y colócalo donde quieras. Lo ideal es un PNG con fondo transparente: no habrá un rectángulo opaco alrededor del logo.

### ¿La marca aparecerá en cada página o solo en una?

Tú decides. UtilBoxx te permite aplicar la marca a todas las páginas, solo a la primera o a un rango personalizado. Acrobat Pro ofrece el mismo conjunto de opciones. Con qpdf, \`--underlay\` se aplica a todas las páginas por defecto; para un rango personalizado, usa el parámetro \`--pages\` para elegir qué páginas marcar.

### ¿Puedo añadir una marca de agua con el nombre del destinatario?

Sí. Mucha gente genera una marca única por destinatario (con el nombre del destinatario, fecha o ID de pedido) antes de enviar un documento personalizado. UtilBoxx admite marcas de texto con cualquier cadena, así que puedes pregenerar el texto personalizado y usarlo como marca. Para personalización masiva, escribe un pequeño script con qpdf que aplique un overlay distinto a cada copia.

### ¿Es seguro usar un marcador de PDF online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador**: sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tu archivo se está subiendo a un servidor remoto y lee atentamente su política de privacidad. Evita subir a un marcador en el que no confías cualquier documento con información personal, financiera, médica o legalmente sensible.

### ¿Una marca de agua protegerá mi PDF de ser copiado?

Una marca de agua es un disuasorio *visual*, no *técnico*. Un usuario decidido puede recortar, difuminar o usar OCR para extraer el texto subyacente. Para protección seria, combina el marcado con cifrado PDF, protección por contraseña y gestión de derechos digitales. Para la mayoría de los usos cotidianos, sin embargo, una marca de agua es una señal visual fuerte que desanima la compartición casual.

## Conclusión

Añadir una marca de agua a un PDF es una de esas pequeñas tareas que aparecen constantemente y no debería requerir una suscripción de pago o instalar software. Para la mayoría de la gente, la [herramienta gratuita de marca de agua de UtilBoxx](/es/tools/pdf/add-watermark) es la opción obvia: es privada, rápida, gratis, soporta marcas de texto e imagen y funciona en tu navegador.

Si ya pagas Adobe Acrobat por otras razones, su herramienta "Marca de agua" es excelente. Si estás programando trabajo por lotes, qpdf con underlay es imbatible.

Para todo lo demás, visita las [herramientas PDF de UtilBoxx](/es/tools/pdf) y encontrarás un conjunto completo de herramientas para trabajar con PDF, con privacidad como prioridad, todo en tu navegador.`;

const addWatermarkPt = `## Por que adicionar uma marca d'água a um PDF?

Marcas d'água são um dos truques mais antigos do manuseio de documentos — uma marca tênue ao longo da página que identifica quem possui, enviou ou revisou um documento. São simples, de baixa tecnologia e surpreendentemente eficazes. Um "CONFIDENCIAL" diagonal em cada página de um rascunho diz aos leitores de imediato que não devem compartilhar. Um logo no canto de cada página transforma uma pilha de documentos em um pacote de marca. Um carimbo "DRAFT" evita que um documento de trabalho seja confundido com a versão final.

Os motivos pelos quais as pessoas adicionam marcas d'água a PDFs são práticos e frequentes:

- **Confidencialidade**: marque rascunhos, documentos internos e material proprietário como "Confidencial" para que o destinatário saiba que não deve compartilhar.
- **Branding**: adicione um logo ou wordmark da empresa a cada página de uma proposta, relatório ou folheto.
- **Proteção de copyright**: adicione um aviso de copyright a cada página de um trabalho criativo, whitepaper ou e-book.
- **Marcação de rascunho**: marque uma versão de trabalho do documento como "DRAFT" para que não seja confundida com a versão final.
- **Indicadores de status**: marque documentos como "APROVADO", "REJEITADO", "PENDENTE", "PARA REVISÃO", etc.
- **Personalização**: adicione o nome de um destinatário ou um código a cada página, transformando um documento genérico em personalizado.
- **Rastreamento**: adicione um ID de pedido ou ID de cliente tênue a cada página para que documentos vazados possam ser rastreados.

A boa notícia: com a ferramenta certa, adicionar uma marca d'água a um PDF é um trabalho de 30 segundos e você não precisa instalar nada.

## Método 1: Use a ferramenta de marca d'água PDF grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de marcar um PDF com água é a [ferramenta de marca d'água do UtilBoxx](/pt/tools/pdf/add-watermark). Ela roda inteiramente no seu navegador, então o arquivo nunca sai do seu dispositivo. Sem upload, sem cadastro, sem marca d'água no resultado (ironia à parte) e sem limite diário.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/pdf/add-watermark](/pt/tools/pdf/add-watermark)
2. Clique na área de upload e selecione seu PDF (ou arraste e solte)
3. Escolha uma **marca d'água de texto** (qualquer string, incluindo "Confidencial", "DRAFT", o nome da sua empresa) ou uma **marca d'água de imagem** (um logo, assinatura ou ícone)
4. Defina a **posição**: centro, topo, rodapé, superior-esquerda, superior-direita, inferior-esquerda, inferior-direita
5. Defina a **opacidade** (transparência), normalmente 10-30% para texto e 30-60% para imagens
6. Defina a **rotação** (0°, 45° diagonal é a clássica, ou qualquer ângulo)
7. Defina o **tamanho** (relativo à página, normalmente 30-60% da largura da página)
8. Escolha a quais páginas aplicar: todas, apenas a primeira, ou um intervalo personalizado
9. Clique em "Processar"
10. Baixe o PDF com marca d'água

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. O arquivo nunca chega a um servidor.
- **Texto ou imagem**: use uma string ("Confidencial") ou envie um logo
- **Controle total**: posição, opacidade, rotação, tamanho — cada propriedade visual
- **Por página ou todas**: marque tudo, ou apenas páginas específicas
- **Funciona em qualquer dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Sem marcas d'água alheias** no resultado (sim, sério — é a sua marca, não a nossa)

Se você só precisa marcar documentos de vez em quando, essa é a opção de menor atrito disparado.

## Método 2: Adobe Acrobat Pro (Pago)

Adobe Acrobat Pro é o peso-pesado do mundo PDF. Sua visualização "Editar PDF" tem uma ferramenta "Marca d'água" que permite adicionar marcas de texto ou imagem, definir posição, opacidade, rotação, escala e escolher quais páginas recebem a marca. A interface é polida, a pré-visualização é precisa, e você pode salvar o PDF marcado com um único clique.

O problema é o preço. Acrobat Pro custa cerca de **$19.99 por mês** (aproximadamente $240 por ano) na assinatura. Para um trabalho pontual, é uma troca ruim. Também requer instalação desktop, que pode ser pesada em máquinas antigas.

Acrobat vale a pena apenas se você já o usa para edição, redação, assinaturas eletrônicas ou criação de formulários. Se marcar com água é tudo o que você precisa, uma ferramenta baseada em navegador faz o trabalho sem a fatura.

## Método 3: Linha de comando com qpdf (underlay de imagem)

Se você se sente confortável no terminal, **qpdf** pode colocar uma imagem sob cada página de um PDF — ou seja, uma imagem desenhada sob o conteúdo da página. É uma forma limpa de adicionar um logo ou fundo a cada página.

Instale o qpdf com \`brew install qpdf\` (macOS) ou \`sudo apt install qpdf\` (Debian/Ubuntu), depois:

\`\`\`bash
# Sobrepor uma marca d'água de imagem de uma página em cada página
# overlay.pdf é um PDF de uma página que contém a sua marca d'água
qpdf input.pdf --underlay overlay.pdf -- watermarked.pdf

# Combinar com um stamp para conteúdo por cima da página
qpdf input.pdf --underlay overlay.pdf --stamp stamp.pdf -- watermarked.pdf

# Aplicar apenas a páginas específicas (ex.: página 1)
qpdf input.pdf --pages input.pdf 1 --underlay overlay.pdf -- out-1.pdf
\`\`\`

O parâmetro \`--underlay\` desenha o PDF sobreposto **sob** o conteúdo da página do PDF de entrada — perfeito para uma marca d'água de fundo tênue. Para marcas de texto por cima do conteúdo, prepare um PDF de uma página com o seu texto (por exemplo, com LaTeX ou qualquer gerador de PDF) e use \`--stamp\`. **qpdf** é rápido, programável e imbatível para marcar em lote centenas de arquivos.

## Perguntas frequentes

### A marca d'água bloqueará o texto real da página?

Não, se você definir a opacidade corretamente. Uma marca de texto típica tem 10-30% de opacidade, tênue o suficiente para ler através, mas visível o suficiente para identificar. Um logo geralmente fica em 30-60%. Acima de 60% é mais um carimbo do que uma marca d'água e obscurece a página.

### Qual é o melhor lugar para posicionar uma marca d'água?

- **Centro diagonal** é o estilo clássico "CONFIDENCIAL". Atravessa a página a 45°, visível de qualquer ângulo e difícil de cortar.
- **Canto inferior direito** é o estilo discreto para branding e copyright. Um pequeno logo ou linha de copyright fica na margem.
- **Centro superior** é bom para carimbos "DRAFT" e indicadores de status. Visível, mas fora do caminho.

Escolha a posição conforme o propósito. Para confidencialidade, centro diagonal. Para branding, inferior-direita. Para status, superior-centro.

### Posso usar um logo como marca d'água?

Sim. A [ferramenta de marca d'água do UtilBoxx](/pt/tools/pdf/add-watermark) suporta marcas de imagem. Envie um PNG ou JPG do seu logo, defina a opacidade em 30-60% e posicione onde quiser. O ideal é um PNG com fundo transparente: não haverá um retângulo opaco ao redor do logo.

### A marca aparecerá em cada página ou em apenas uma?

Você decide. O UtilBoxx permite aplicar a marca a todas as páginas, apenas à primeira, ou a um intervalo personalizado. O Acrobat Pro oferece o mesmo conjunto de opções. Com o qpdf, o parâmetro \`--underlay\` se aplica a todas as páginas por padrão; para um intervalo personalizado, use o parâmetro \`--pages\` para escolher quais páginas marcar.

### Posso adicionar uma marca d'água com o nome do destinatário?

Sim. Muita gente gera uma marca única por destinatário (com o nome do destinatário, data ou ID de pedido) antes de enviar um documento personalizado. O UtilBoxx suporta marcas de texto com qualquer string, então você pode pré-gerar o texto personalizado e usá-lo como marca. Para personalização em massa, escreva um pequeno script com qpdf que aplique um overlay diferente a cada cópia.

### É seguro usar um marcador de PDF online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que seu arquivo está sendo enviado para um servidor remoto e leia atentamente sua política de privacidade. Evite enviar a um marcador em que você não confia qualquer documento com informações pessoais, financeiras, médicas ou legalmente sensíveis.

### Uma marca d'água protegerá meu PDF de ser copiado?

Uma marca d'água é um impedimento *visual*, não *técnico*. Um usuário determinado pode cortar, borrar ou usar OCR para extrair o texto subjacente. Para proteção séria, combine a marca com criptografia de PDF, proteção por senha e gestão de direitos digitais. Para a maioria dos usos cotidianos, no entanto, uma marca d'água é um sinal visual forte que desencoraja o compartilhamento casual.

## Conclusão

Adicionar uma marca d'água a um PDF é uma daquelas pequenas tarefas que surgem constantemente e não deveria exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, a [ferramenta gratuita de marca d'água do UtilBoxx](/pt/tools/pdf/add-watermark) é a escolha óbvia: é privada, rápida, grátis, suporta marcas de texto e imagem e funciona no seu navegador.

Se você já paga pelo Adobe Acrobat por outros motivos, sua ferramenta "Marca d'água" é excelente. Se você está programando trabalho em lote, qpdf com underlay é imbatível.

Para todo o resto, visite as [ferramentas PDF do UtilBoxx](/pt/tools/pdf) e você encontrará um conjunto completo de ferramentas para trabalhar com PDFs, com privacidade como prioridade, tudo no seu navegador.`;

const addWatermarkFr = `## Pourquoi ajouter un filigrane à un PDF ?

Les filigranes sont l'un des plus anciens trucs de la gestion documentaire — une marque discrète en travers de la page qui identifie le propriétaire, l'expéditeur ou le relecteur d'un document. Ils sont simples, low-tech et étonnamment efficaces. Un « CONFIDENTIEL » en diagonale sur chaque page d'un brouillon indique aux lecteurs d'un coup d'œil qu'ils ne doivent pas le partager. Un logo dans le coin de chaque page transforme une pile de documents en package de marque. Un tampon « DRAFT » empêche qu'un document de travail soit pris pour une version finale.

Les raisons pour lesquelles on ajoute des filigranes aux PDF sont pratiques et fréquentes :

- **Confidentialité** : marquez les brouillons, documents internes et matériels propriétaires comme « Confidentiel » pour que le destinataire sache qu'il ne doit pas les partager.
- **Marque** : ajoutez un logo ou un wordmark d'entreprise à chaque page d'une proposition, d'un rapport ou d'une brochure.
- **Protection du copyright** : ajoutez un avis de copyright à chaque page d'une œuvre créative, d'un livre blanc ou d'un e-book.
- **Marquage de brouillon** : marquez une version de travail du document comme « DRAFT » pour qu'elle ne soit pas confondue avec une version finale.
- **Indicateurs d'état** : marquez les documents comme « APPROUVÉ », « REJETÉ », « EN ATTENTE », « À REVOIR », etc.
- **Personnalisation** : ajoutez le nom d'un destinataire ou un code à chaque page, transformant un document générique en un document personnalisé.
- **Traçabilité** : ajoutez un ID de commande ou un ID client discret à chaque page pour que les documents fuités puissent être tracés.

Bonne nouvelle : avec le bon outil, ajouter un filigrane à un PDF est un travail de 30 secondes et vous n'avez rien à installer.

## Méthode 1 : Utiliser l'outil de filigrane PDF gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de filigraner un PDF est l'[outil de filigrane de UtilBoxx](/fr/tools/pdf/add-watermark). Il s'exécute entièrement dans votre navigateur, donc le fichier ne quitte jamais votre appareil. Pas de téléversement, pas d'inscription, pas de filigrane sur le résultat (ironie mise à part) et pas de limite quotidienne.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/pdf/add-watermark](/fr/tools/pdf/add-watermark)
2. Cliquez sur la zone de téléversement et sélectionnez votre PDF (ou glissez-déposez)
3. Choisissez un **filigrane de texte** (toute chaîne, y compris « Confidentiel », « DRAFT », le nom de votre entreprise) ou un **filigrane d'image** (un logo, une signature ou une icône)
4. Définissez la **position** : centre, haut, bas, haut-gauche, haut-droite, bas-gauche, bas-droite
5. Définissez l'**opacité** (transparence), généralement 10-30 % pour le texte et 30-60 % pour les images
6. Définissez la **rotation** (0°, 45° en diagonale est classique, ou tout angle)
7. Définissez la **taille** (par rapport à la page, généralement 30-60 % de la largeur de la page)
8. Choisissez les pages à filigraner : toutes, première page uniquement, ou plage personnalisée
9. Cliquez sur « Traiter »
10. Téléchargez le PDF filigrané

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Le fichier n'arrive jamais sur un serveur.
- **Texte ou image** : utilisez une chaîne (« Confidentiel ») ou téléversez un logo
- **Contrôle total** : position, opacité, rotation, taille — chaque propriété visuelle
- **Par page ou toutes** : filigranez tout, ou seulement certaines pages
- **Fonctionne sur tout appareil** : Windows, Mac, Linux, ChromeOS, iOS, Android
- **Aucun filigrane tiers** sur le résultat (oui, vraiment — c'est votre filigrane, pas le nôtre)

Si vous n'avez besoin de filigraner des documents qu'occasionnellement, c'est de loin l'option la plus simple.

## Méthode 2 : Adobe Acrobat Pro (Payant)

Adobe Acrobat Pro est le poids lourd du monde PDF. Sa vue « Modifier un PDF » comprend un outil « Filigrane » qui permet d'ajouter des filigranes de texte ou d'image, de définir position, opacité, rotation, échelle et de choisir quelles pages reçoivent le filigrane. L'interface est soignée, l'aperçu est précis, et vous pouvez enregistrer le PDF filigrané en un clic.

Le hic, c'est le prix. Acrobat Pro coûte environ **19,99 $ par mois** (environ 240 $ par an) en abonnement. Pour une tâche ponctuelle, c'est un mauvais calcul. Il faut aussi une installation desktop, qui peut être lourde sur des machines anciennes.

Acrobat ne vaut le coup que si vous l'utilisez déjà pour l'édition, la rédaction, la signature électronique ou la création de formulaires. Si le filigrane est tout ce dont vous avez besoin, un outil en navigateur fait le travail sans la facture.

## Méthode 3 : Ligne de commande avec qpdf (sous-couche d'image)

Si vous êtes à l'aise dans un terminal, **qpdf** peut placer une sous-couche d'image sous chaque page d'un PDF — c'est-à-dire une image dessinée sous le contenu de la page. C'est une manière propre d'ajouter un logo ou un fond à chaque page.

Installez qpdf avec \`brew install qpdf\` (macOS) ou \`sudo apt install qpdf\` (Debian/Ubuntu), puis :

\`\`\`bash
# Superposer un filigrane d'image d'une page sur chaque page
# overlay.pdf est un PDF d'une page contenant votre filigrane
qpdf input.pdf --underlay overlay.pdf -- watermarked.pdf

# Combiner avec un tampon pour du contenu au-dessus de la page
qpdf input.pdf --underlay overlay.pdf --stamp stamp.pdf -- watermarked.pdf

# Appliquer uniquement à des pages spécifiques (ex. page 1)
qpdf input.pdf --pages input.pdf 1 --underlay overlay.pdf -- out-1.pdf
\`\`\`

Le paramètre \`--underlay\` dessine le PDF superposé **sous** le contenu de la page du PDF d'entrée — parfait pour un filigrane de fond discret. Pour des filigranes de texte au-dessus du contenu, préparez un PDF d'une page avec votre texte (par exemple via LaTeX ou tout générateur de PDF) et utilisez \`--stamp\`. **qpdf** est rapide, scriptable et imbattable pour filigraner par lots des centaines de fichiers.

## Questions fréquentes

### Le filigrane bloquera-t-il le texte réel de la page ?

Non, pas si vous réglez correctement l'opacité. Un filigrane de texte typique est à 10-30 % d'opacité, assez discret pour lire à travers, mais assez visible pour identifier. Un logo se met généralement à 30-60 %. Au-dessus de 60 %, c'est plus un tampon qu'un filigrane et cela obscurcit la page.

### Quel est le meilleur emplacement pour un filigrane ?

- **Centre en diagonale** est le style « CONFIDENTIEL » classique. Il traverse la page à 45°, visible sous tout angle et difficile à recadrer.
- **Coin inférieur droit** est le style discret pour la marque et le copyright. Un petit logo ou une ligne de copyright se place dans la marge.
- **Centre en haut** convient aux tampons « DRAFT » et indicateurs d'état. Visible mais hors du chemin.

Choisissez la position en fonction de l'objectif. Pour la confidentialité, centre en diagonale. Pour la marque, bas-droite. Pour le statut, haut-centre.

### Puis-je utiliser un logo comme filigrane ?

Oui. L'[outil de filigrane de UtilBoxx](/fr/tools/pdf/add-watermark) prend en charge les filigranes d'image. Téléversez un PNG ou JPG de votre logo, réglez l'opacité à 30-60 % et positionnez-le où vous voulez. L'idéal est un PNG à fond transparent : il n'y aura pas de rectangle opaque autour du logo.

### Le filigrane apparaîtra-t-il sur chaque page ou sur une seule ?

C'est vous qui choisissez. UtilBoxx vous permet d'appliquer le filigrane à toutes les pages, à la première seulement, ou à une plage personnalisée. Acrobat Pro propose le même ensemble d'options. Avec qpdf, le paramètre \`--underlay\` s'applique par défaut à toutes les pages ; pour une plage personnalisée, utilisez le paramètre \`--pages\` pour choisir quelles pages filigraner.

### Puis-je ajouter un filigrane avec le nom du destinataire ?

Oui. Beaucoup de gens génèrent un filigrane unique par destinataire (avec le nom du destinataire, la date ou l'ID de commande) avant d'envoyer un document personnalisé. UtilBoxx prend en charge les filigranes de texte avec n'importe quelle chaîne, donc vous pouvez pré-générer le texte personnalisé et l'utiliser comme filigrane. Pour de la personnalisation en masse, écrivez un petit script avec qpdf qui applique un overlay différent à chaque copie.

### Est-il sûr d'utiliser un filigraneur PDF en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que votre fichier est téléversé sur un serveur distant et lisez attentivement leur politique de confidentialité. Évitez de téléverser sur un filigraneur en qui vous n'avez pas confiance tout document contenant des informations personnelles, financières, médicales ou juridiquement sensibles.

### Un filigrane protégera-t-il mon PDF contre la copie ?

Un filigrane est un frein *visuel*, pas *technique*. Un utilisateur déterminé peut recadrer, flouter ou utiliser l'OCR pour extraire le texte sous-jacent. Pour une protection série, combinez le filigrane avec le chiffrement PDF, la protection par mot de passe et la gestion des droits numériques. Pour la plupart des usages quotidiens, toutefois, un filigrane est un signal visuel fort qui décourage le partage occasionnel.

## Conclusion

Ajouter un filigrane à un PDF est l'une de ces petites tâches qui reviennent constamment et ne devraient pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, l'[outil gratuit de filigrane PDF de UtilBoxx](/fr/tools/pdf/add-watermark) est le choix évident : privé, rapide, gratuit, supportant les filigranes de texte et d'image et fonctionnant dans votre navigateur.

Si vous payez déjà Adobe Acrobat pour d'autres raisons, son outil « Filigrane » est excellent. Si vous scriptz du travail par lots, qpdf avec underlay est imbattable.

Pour tout le reste, rendez-vous sur les [outils PDF de UtilBoxx](/fr/tools/pdf) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const addWatermarkDe = `## Warum ein Wasserzeichen zu einem PDF hinzufügen?

Wasserzeichen sind einer der ältesten Tricks im Dokumenten-Handling — eine dezente Markierung über die Seite, die kennzeichnet, wem das Dokument gehört, wer es gesendet oder wer es geprüft hat. Sie sind einfach, low-tech und überraschend effektiv. Ein diagonales „VERTRAULICH" auf jeder Seite eines Entwurfs sagt den Lesern auf einen Blick, dass sie es nicht teilen sollen. Ein Logo in der Ecke jeder Seite verwandelt einen Stapel Dokumente in ein Markenpaket. Ein „ENTWURF"-Stempel verhindert, dass ein Arbeitsdokument für eine finale Version gehalten wird.

Die Gründe, warum Menschen Wasserzeichen zu PDFs hinzufügen, sind praktisch und häufig:

- **Vertraulichkeit**: Markieren Sie Entwürfe, interne Dokumente und proprietäres Material als „Vertraulich", damit der Empfänger weiß, dass er es nicht teilen darf.
- **Markenbildung**: Fügen Sie jeder Seite eines Angebots, Berichts oder einer Broschüre ein Firmenlogo oder Wordmark hinzu.
- **Urheberrechtsschutz**: Fügen Sie jeder Seite eines kreativen Werks, Whitepapers oder E-Books einen Urheberrechtshinweis hinzu.
- **Entwurfsmarkierung**: Markieren Sie eine Arbeitsversion des Dokuments als „ENTWURF", damit sie nicht mit der finalen Version verwechselt wird.
- **Statusindikatoren**: Markieren Sie Dokumente als „GENEHMIGT", „ABGELEHNT", „AUSSTEHEND", „ZUR ÜBERPRÜFUNG" usw.
- **Personalisierung**: Fügen Sie jeder Seite den Namen eines Empfängers oder einen Code hinzu, um ein generisches Dokument zu personalisieren.
- **Rückverfolgbarkeit**: Fügen Sie jeder Seite eine dezente Bestell- oder Kunden-ID hinzu, damit geleakte Dokumente zurückverfolgt werden können.

Die gute Nachricht: Mit dem richtigen Werkzeug ist das Hinzufügen eines Wasserzeichens zu einem PDF eine 30-Sekunden-Aufgabe, und Sie müssen nichts installieren.

## Methode 1: Das kostenlose PDF-Wasserzeichen-Werkzeug von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode, ein PDF mit einem Wasserzeichen zu versehen, ist das [PDF-Wasserzeichen-Werkzeug von UtilBoxx](/de/tools/pdf/add-watermark). Es läuft vollständig in Ihrem Browser, sodass die Datei Ihr Gerät nie verlässt. Kein Upload, keine Registrierung, kein Wasserzeichen im Ergebnis (Ironie beiseite) und kein Tageslimit.

So verwenden Sie es:

1. Gehen Sie zu [utilboxx.com/de/tools/pdf/add-watermark](/de/tools/pdf/add-watermark)
2. Klicken Sie auf den Upload-Bereich und wählen Sie Ihre PDF (oder ziehen Sie sie per Drag & Drop)
3. Wählen Sie ein **Text-Wasserzeichen** (jede Zeichenkette, einschließlich „Vertraulich", „ENTWURF", Ihr Firmenname) oder ein **Bild-Wasserzeichen** (ein Logo, eine Signatur oder ein Symbol)
4. Legen Sie die **Position** fest: Mitte, oben, unten, oben-links, oben-rechts, unten-links, unten-rechts
5. Legen Sie die **Deckkraft** (Transparenz) fest, üblicherweise 10-30 % für Text und 30-60 % für Bilder
6. Legen Sie die **Rotation** fest (0°, 45° diagonal ist klassisch, oder ein beliebiger Winkel)
7. Legen Sie die **Größe** fest (relativ zur Seite, üblicherweise 30-60 % der Seitenbreite)
8. Wählen Sie, auf welche Seiten es angewendet wird: alle Seiten, nur die erste oder ein benutzerdefinierter Bereich
9. Klicken Sie auf „Verarbeiten"
10. Laden Sie das PDF mit Wasserzeichen herunter

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in Ihrem Browser verarbeitet. Die Datei erreicht nie einen Server.
- **Text oder Bild**: Verwenden Sie eine Zeichenkette („Vertraulich") oder laden Sie ein Logo hoch
- **Volle Kontrolle**: Position, Deckkraft, Rotation, Größe — jede visuelle Eigenschaft
- **Pro Seite oder alle**: Wasserzeichen auf alles oder nur auf bestimmte Seiten
- **Funktioniert auf jedem Gerät**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Keine fremden Wasserzeichen** im Ergebnis (ja, wirklich — es ist Ihr Wasserzeichen, nicht unseres)

Wenn Sie nur gelegentlich Dokumente mit Wasserzeichen versehen müssen, ist dies mit Abstand die reibungsloseste Option.

## Methode 2: Adobe Acrobat Pro (Kostenpflichtig)

Adobe Acrobat Pro ist das Schwergewicht der PDF-Welt. Seine Ansicht „PDF bearbeiten" enthält ein „Wasserzeichen"-Werkzeug, mit dem Sie Text- oder Bild-Wasserzeichen hinzufügen, Position, Deckkraft, Rotation, Skalierung festlegen und wählen können, welche Seiten das Wasserzeichen erhalten. Die Oberfläche ist poliert, die Vorschau genau, und Sie können das mit Wasserzeichen versehene PDF mit einem Klick speichern.

Der Haken ist der Preis. Acrobat Pro kostet im Abonnement ungefähr **19,99 $ pro Monat** (etwa 240 $ pro Jahr). Für eine gelegentliche Wasserzeichen-Aufgabe ein schlechtes Geschäft. Außerdem ist eine Desktop-Installation nötig, die auf älteren Maschinen schwer wiegen kann.

Acrobat lohnt sich nur, wenn Sie es bereits für Bearbeitung, Schwärzung, elektronische Signaturen oder Formularerstellung nutzen. Wenn Wasserzeichen alles ist, was Sie brauchen, erledigt ein Browser-Tool die Arbeit ohne die Rechnung.

## Methode 3: Kommandozeile mit qpdf (Bild-Unterlage)

Wenn Sie sich im Terminal wohlfühlen, kann **qpdf** eine Bildunterlage unter jeder Seite eines PDFs platzieren — also ein Bild, das unter dem Seiteninhalt gezeichnet wird. Dies ist eine saubere Methode, um jeder Seite ein Logo oder einen Hintergrund hinzuzufügen.

Installieren Sie qpdf mit \`brew install qpdf\` (macOS) oder \`sudo apt install qpdf\` (Debian/Ubuntu), dann:

\`\`\`bash
# Ein einseitiges Bild-Wasserzeichen auf jede Seite legen
# overlay.pdf ist ein einseitiges PDF, das Ihr Wasserzeichen enthält
qpdf input.pdf --underlay overlay.pdf -- watermarked.pdf

# Mit einem Stempel kombinieren für Inhalt über dem Seiteninhalt
qpdf input.pdf --underlay overlay.pdf --stamp stamp.pdf -- watermarked.pdf

# Nur auf bestimmte Seiten anwenden (z. B. Seite 1)
qpdf input.pdf --pages input.pdf 1 --underlay overlay.pdf -- out-1.pdf
\`\`\`

Der Parameter \`--underlay\` zeichnet das überlagerte PDF **unter** den Seiteninhalt der Eingabe-PDF — perfekt für ein dezentes Hintergrund-Wasserzeichen. Für Text-Wasserzeichen über dem Inhalt erstellen Sie ein einseitiges PDF mit Ihrem Text (z. B. mit LaTeX oder einem PDF-Generator) und verwenden \`--stamp\`. **qpdf** ist schnell, skriptbar und unschlagbar beim Stapel-Wasserzeichnen Hunderter Dateien.

## Häufige Fragen

### Blockiert das Wasserzeichen den eigentlichen Text der Seite?

Nein, nicht wenn Sie die Deckkraft richtig einstellen. Ein typisches Text-Wasserzeichen hat 10-30 % Deckkraft, dezent genug, um hindurchzulesen, aber sichtbar genug, um zu identifizieren. Ein Logo liegt meist bei 30-60 %. Über 60 % ist es eher ein Stempel als ein Wasserzeichen und verdunkelt die Seite.

### Wo ist die beste Position für ein Wasserzeichen?

- **Mitte diagonal** ist der klassische „VERTRAULICH"-Stil. Es kreuzt die Seite in 45°, ist aus jedem Winkel sichtbar und schwer wegzuschneiden.
- **Untere rechte Ecke** ist der unauffällige Stil für Markenbildung und Copyright. Ein kleines Logo oder eine Copyright-Zeile sitzt im Rand.
- **Obere Mitte** ist gut für „ENTWURF"-Stempel und Statusindikatoren. Sichtbar, aber nicht im Weg.

Wählen Sie die Position je nach Zweck. Für Vertraulichkeit: Mitte diagonal. Für Markenbildung: unten rechts. Für Status: oben Mitte.

### Kann ich ein Logo als Wasserzeichen verwenden?

Ja. Das [PDF-Wasserzeichen-Werkzeug von UtilBoxx](/de/tools/pdf/add-watermark) unterstützt Bild-Wasserzeichen. Laden Sie ein PNG oder JPG Ihres Logos hoch, stellen Sie die Deckkraft auf 30-60 % und positionieren Sie es, wo Sie möchten. Ein PNG mit transparentem Hintergrund ist ideal: es gibt keinen undurchsichtigen Kasten um das Logo.

### Erscheint das Wasserzeichen auf jeder Seite oder nur auf einer?

Sie entscheiden. UtilBoxx erlaubt es Ihnen, das Wasserzeichen auf alle Seiten, nur auf die erste oder auf einen benutzerdefinierten Bereich anzuwenden. Acrobat Pro bietet denselben Optionensatz. Bei qpdf wirkt \`--underlay\` standardmäßig auf alle Seiten; für einen benutzerdefinierten Bereich verwenden Sie den Parameter \`--pages\`, um auszuwählen, welche Seiten markiert werden.

### Kann ich ein Wasserzeichen mit dem Namen des Empfängers hinzufügen?

Ja. Viele erzeugen vor dem Versand eines personalisierten Dokuments ein eindeutiges Wasserzeichen pro Empfänger (mit Empfängername, Datum oder Bestell-ID). UtilBoxx unterstützt Text-Wasserzeichen mit jeder Zeichenkette, sodass Sie den personalisierten Text vorgenerieren und als Wasserzeichen verwenden können. Für Massenpersonalisierung schreiben Sie ein kleines Skript mit qpdf, das auf jede Kopie eine andere Unterlage anwendet.

### Ist die Nutzung eines Online-PDF-Wasserzeichen-Werkzeugs sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in Ihrem Browser** – kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen sollten Sie davon ausgehen, dass Ihre Datei auf einen entfernten Server hochgeladen wird, und die Datenschutzrichtlinie sorgfältig lesen. Vermeiden Sie das Hochladen von Dokumenten mit persönlichen, finanziellen, medizinischen oder rechtlich sensiblen Informationen zu einem Wasserzeichen-Werkzeug, dem Sie nicht vertrauen.

### Schützt ein Wasserzeichen mein PDF vor dem Kopieren?

Ein Wasserzeichen ist eine *visuelle* Abschreckung, kein *technischer* Schutz. Ein entschlossener Benutzer kann zuschneiden, weichzeichnen oder OCR verwenden, um den zugrundeliegenden Text zu extrahieren. Für ernsthaften Schutz kombinieren Sie Wasserzeichen mit PDF-Verschlüsselung, Passwortschutz und digitalem Rechtemanagement. Für die meisten alltäglichen Anwendungen ist ein Wasserzeichen jedoch ein starkes visuelles Signal, das beiläufiges Teilen abschreckt.

## Fazit

Ein Wasserzeichen zu einem PDF hinzuzufügen ist eine dieser kleinen Aufgaben, die ständig anfallen und keine kostenpflichtige Subskription oder Software-Installation erfordern sollten. Für die meisten Menschen ist das [kostenlose PDF-Wasserzeichen-Werkzeug von UtilBoxx](/de/tools/pdf/add-watermark) die offensichtliche Wahl: privat, schnell, kostenlos, mit Unterstützung für Text- und Bild-Wasserzeichen und im Browser.

Wenn Sie Adobe Acrobat bereits aus anderen Gründen bezahlen, ist sein „Wasserzeichen"-Werkzeug ausgezeichnet. Wenn Sie Stapelverarbeitung skripten, ist qpdf mit Underlay unschlagbar.

Für alles andere besuchen Sie die [PDF-Werkzeuge von UtilBoxx](/de/tools/pdf): Dort finden Sie einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit PDFs – alles im Browser.`;

export const addWatermarkPost: Record<string, BlogPost> = {
  en: {
    slug: "add-watermark-to-pdf",
    category: "PDF Tools",
    date: "2026-02-12",
    readTime: "5 min",
    title: "How to Add a Watermark to a PDF (Text or Image)",
    description: "Add Confidential, a logo, or a copyright notice to every page. Control size, position, and opacity.",
    content: addWatermarkEn,
  },
  zh: {
    slug: "add-watermark-to-pdf",
    category: "PDF 工具",
    date: "2026-02-12",
    readTime: "5 分钟",
    title: "如何给 PDF 加水印（文本或图片）",
    description: "在每页加上「机密」、logo 或版权声明。可控制大小、位置和不透明度。",
    content: addWatermarkZh,
  },
  ja: {
    slug: "add-watermark-to-pdf",
    category: "PDF ツール",
    date: "2026-02-12",
    readTime: "5 分",
    title: "PDF に透かしを追加する方法（テキストまたは画像）",
    description: "「機密」、ロゴ、著作権表示を全ページに追加。サイズ、位置、不透明度を制御できます。",
    content: addWatermarkJa,
  },
  es: {
    slug: "add-watermark-to-pdf",
    category: "Herramientas PDF",
    date: "2026-02-12",
    readTime: "5 min",
    title: "Cómo añadir una marca de agua a un PDF (texto o imagen)",
    description: "Añade Confidencial, un logo o un aviso de copyright a cada página. Controla tamaño, posición y opacidad.",
    content: addWatermarkEs,
  },
  pt: {
    slug: "add-watermark-to-pdf",
    category: "Ferramentas PDF",
    date: "2026-02-12",
    readTime: "5 min",
    title: "Como adicionar marca d'água a um PDF (texto ou imagem)",
    description: "Adicione Confidencial, um logo ou um aviso de copyright a cada página. Controle tamanho, posição e opacidade.",
    content: addWatermarkPt,
  },
  fr: {
    slug: "add-watermark-to-pdf",
    category: "Outils PDF",
    date: "2026-02-12",
    readTime: "5 min",
    title: "Comment ajouter un filigrane à un PDF (texte ou image)",
    description: "Ajoutez Confidentiel, un logo ou un avis de copyright à chaque page. Contrôlez taille, position et opacité.",
    content: addWatermarkFr,
  },
  de: {
    slug: "add-watermark-to-pdf",
    category: "PDF-Werkzeuge",
    date: "2026-02-12",
    readTime: "5 Min",
    title: "Wasserzeichen zu PDF hinzufügen (Text oder Bild)",
    description: "Fügen Sie jeder Seite „Vertraulich“, ein Logo oder einen Urheberrechtshinweis hinzu. Steuern Sie Größe, Position und Deckkraft.",
    content: addWatermarkDe,
  },
};
