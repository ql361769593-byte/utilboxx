// Blog post: How to Split a PDF
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const splitPdfEn = `## Why split a PDF?

PDFs are designed to be portable and self-contained, but that same strength is what makes them hard to break apart. A 200-page report might contain a single chapter you actually need. A scanned book may have a cover image you want to use elsewhere. A long contract might bury the signature page in the back. In each case, the answer is the same: split the PDF.

The reasons people need to split a PDF are practical and frequent:

- **Extract one section**: Pull chapter 3 out of a 200-page manual so you can email it to a colleague.
- **Separate large files**: Break a 500-page scan into per-chapter files that are easier to upload, share, and read.
- **Save specific pages**: Keep just pages 12-15 of a contract as evidence, ignoring the rest.
- **Reuse embedded content**: Grab the diagram on page 47 and turn it into an image.
- **Reduce file size for sharing**: Many email and upload portals cap attachment size. Splitting a 50 MB PDF into five 10 MB chunks gets around that limit.
- **Privacy**: Send only the relevant pages of a financial statement, not the whole document.

The good news: with the right tool, splitting a PDF is a 10-second job, and you do not need to install anything.

## Method 1: Use UtilBoxx's Free PDF Splitter (Recommended)

The fastest, safest, and most private way to split a PDF is [UtilBoxx's PDF Split tool](/en/tools/pdf/split). It runs entirely in your browser, so your file never leaves your device. There is no upload, no signup, and no watermark on the output.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/pdf/split](/en/tools/pdf/split)
2. Click the upload area and select your PDF (or drag and drop)
3. Choose how you want to split: by page range, by every N pages, or by extracting selected pages
4. Click "Process"
5. Download the resulting PDFs (usually a zip of multiple files)

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. The file never reaches a server.
- **Three splitting modes**: extract a range, split into N-page chunks, or pick specific pages individually
- **Works on any device**: Windows, Mac, Linux, ChromeOS, iOS, Android — anything with a modern browser
- **Batch friendly**: split one file into many, or process many files in a row
- **No watermarks** on the output PDFs

If you only need to split a PDF once in a while, this is by far the lowest-friction option.

## Method 2: Adobe Acrobat Pro (Paid)

Adobe Acrobat Pro is the heavyweight of the PDF world and the tool most legal and publishing teams default to. Its "Organize Pages" view lets you visually drag pages into new files, split by bookmark, or split by file size target. The interface is polished, and the output is reliable.

The catch is the price. Acrobat Pro costs roughly **$19.99 per month** (about $240 per year) on a subscription. For a one-off split, that is a poor trade. You also need a desktop install, which can be heavy on older machines.

Acrobat is worth it only if you already use it for editing, redaction, e-signatures, or form creation. If splitting is all you need, a browser-based tool does the job without the bill.

## Method 3: macOS Preview

On a Mac, you can use the built-in **Preview** app to split a PDF manually, though it takes a few more steps than a dedicated tool:

1. Open the PDF in **Preview**
2. Click **View > Thumbnails** to show the page panel
3. Select the pages you want to keep in a new file
4. Drag those thumbnails to your desktop (or into a new Preview window)
5. Save the new file

This method is **Mac only** and works best for small splits. It is not practical for splitting a 200-page document into per-chapter files, since you have to drag and save repeatedly.

## Method 4: Command line with qpdf or pdftk

If you are comfortable in a terminal, the open-source tool **qpdf** is the most reliable CLI option. Install it with Homebrew (\`brew install qpdf\`), then:

\`\`\`bash
# Extract pages 1-5 into a new file
qpdf input.pdf --pages input.pdf 1-5 -- out.pdf

# Extract single pages 1, 3, 7
qpdf input.pdf --pages input.pdf 1,3,7 -- out.pdf

# Split every page into its own file
mkdir out && qpdf --split-pages input.pdf out/page.pdf
\`\`\`

The \`pdftk\` tool offers similar capabilities but is unmaintained and pulls in heavy Java dependencies. **qpdf** is faster, smaller, and actively maintained. Both are excellent for scripting batch splits across hundreds of files.

## Common questions

### Will splitting a PDF reduce quality?

No. Splitting a PDF copies the original page content into a new container without re-encoding it. Text remains crisp, images stay at their original resolution, and fonts are preserved exactly. The only thing that changes is which pages are in which file.

### Can I split a password-protected PDF?

Password-protected PDFs can be split, but you usually need to remove the password first so the tool can read the contents. Use a [PDF unlock tool](/en/tools/pdf) to clear the password, then split the unlocked file. Only do this on documents you own or have permission to modify.

### How do I extract just one page from a PDF?

With [UtilBoxx's PDF Split tool](/en/tools/pdf/split), choose "Extract specific pages" and enter the single page number. You will get a one-page PDF as output. The original document is untouched.

### Can I split a scanned PDF?

Yes. Scanned PDFs are just images wrapped in a PDF container, and splitting works the same way. The pages do not change resolution or quality. If you also need the text of the scans to be searchable, run the split first, then use an OCR tool on the result.

### Is it safe to use an online PDF splitter?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your file is being uploaded to a remote server and read their privacy policy carefully. Avoid uploading any document containing personal, financial, medical, or legally sensitive information to a splitter you do not trust.

### What is the difference between splitting and extracting pages?

In most tools the two terms overlap. **Splitting** usually means breaking a PDF into multiple smaller PDFs. **Extracting** typically means pulling a specific page or range into a single new file. UtilBoxx's tool supports both modes in one place.

## Conclusion

Splitting a PDF is one of those small tasks that comes up constantly and should not require a paid subscription or a software install. For most people, [UtilBoxx's free PDF Split tool](/en/tools/pdf/split) is the obvious choice: it is private, fast, and free, with no signup and no watermark.

If you are on a Mac and just need a quick split, Preview works in a pinch. If you are scripting batch work, qpdf in the terminal is unbeatable. And if you already pay for Adobe Acrobat for other reasons, its "Organize Pages" view is excellent.

For everything else, head to [UtilBoxx PDF tools](/en/tools/pdf) and you will find a complete, privacy-first toolkit for working with PDFs — all in your browser.`;

const splitPdfZh = `## 为什么要拆分 PDF？

PDF 设计的初衷是便携和自包含，这恰恰是它难以拆分的根源。一份 200 页的报告可能只包含你真正需要的一章；一本扫描的书可能有你想另作他用的封面图；一份冗长的合同可能把签字页埋到末尾。每种情况的答案都是同一个：拆分 PDF。

人们需要拆分 PDF 的原因既实际又频繁：

- **提取某一部分**：从 200 页手册里抽出第三章，发邮件给同事。
- **拆分大文件**：把 500 页扫描稿按章节拆成多个文件，便于上传、分享和阅读。
- **保存特定页面**：把合同的第 12-15 页单独留作证据，忽略其余内容。
- **复用嵌入内容**：取出第 47 页的图表，转成图片。
- **缩小文件便于分享**：很多邮箱和上传门户都有附件大小限制。把 50 MB 的 PDF 拆成五个 10 MB 就能绕过这个上限。
- **隐私**：只发财务报表中相关的几页，而不是整份文件。

好消息是：只要用对工具，拆分 PDF 只需 10 秒，而且不需要装任何东西。

## 方法一：使用 UtilBoxx 免费 PDF 拆分工具（推荐）

最快、最安全、最私密的拆分方式是 [UtilBoxx 的 PDF 拆分工具](/zh/tools/pdf/split)。它完全在你的浏览器中运行，文件不会离开你的设备。没有上传、没有注册、输出文件没有水印。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/pdf/split](/zh/tools/pdf/split)
2. 点击上传区域选择你的 PDF（或直接拖入）
3. 选择拆分方式：按页码范围、按每 N 页拆分、或提取指定页面
4. 点击"开始处理"
5. 下载生成的 PDF（通常是多个文件打包成 zip）

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，文件不会上传到任何服务器
- **三种拆分模式**：提取范围、按 N 页分块、或逐页单独挑选
- **全设备支持**：Windows、Mac、Linux、ChromeOS、iOS、Android —— 任何有现代浏览器的设备都行
- **支持批量**：把一个文件拆成多个，或连续处理多个文件
- **输出 PDF 无水印**

如果你只是偶尔拆一次 PDF，这是最省心的选择。

## 方法二：Adobe Acrobat Pro（付费）

Adobe Acrobat Pro 是 PDF 领域的重量级选手，也是大多数法务和出版团队默认使用的工具。它的"组织页面"视图可以让你可视化地拖动页面到新文件、按书签拆分、或按文件大小目标拆分。界面精致，输出可靠。

代价是价格。Acrobat Pro 订阅版大约 **每月 $19.99**（每年约 $240 美元）。如果只是拆一次 PDF，这个投入显然不划算。你还需要桌面安装，对老机器也不太友好。

只有当你已经用它做编辑、涂黑、电子签名或表单创建时，Acrobat 才值得。否则，浏览器工具完全够用，还免了账单。

## 方法三：macOS Preview

在 Mac 上，你可以用内置的 **Preview** 应用手动拆分 PDF，但步骤比专用工具多一点：

1. 用 **Preview** 打开 PDF
2. 点击 **视图 > 缩略图** 显示页面面板
3. 选中要保留在新文件中的页面
4. 把这些缩略图拖到桌面（或拖到新 Preview 窗口）
5. 保存新文件

这个方法**仅限 Mac**，最适合少量拆分。如果要把 200 页文档按章节拆开，就不实用了 —— 你得反复拖动保存。

## 方法四：命令行 qpdf 或 pdftk

如果你熟悉终端，开源工具 **qpdf** 是最可靠的命令行选择。用 Homebrew 安装（\`brew install qpdf\`）后：

\`\`\`bash
# 提取第 1-5 页到新文件
qpdf input.pdf --pages input.pdf 1-5 -- out.pdf

# 提取第 1、3、7 页
qpdf input.pdf --pages input.pdf 1,3,7 -- out.pdf

# 拆成每页一个文件
mkdir out && qpdf --split-pages input.pdf out/page.pdf
\`\`\`

\`pdftk\` 也能做类似的事，但已停止维护且依赖庞大的 Java 运行时。**qpdf** 更快、更轻、且持续维护。两者都适合编写脚本，对成百上千个文件做批量拆分。

## 常见问题

### 拆分 PDF 会降低质量吗？

不会。拆分 PDF 只是把原始页面内容复制到新的容器，不重新编码。文字保持锐利、图片保持原始分辨率、字体保持原样。变化的只是哪个文件里包含哪些页。

### 加密 PDF 可以拆分吗？

可以，但通常需要先解除密码，以便工具读取内容。使用 [PDF 解锁工具](/zh/tools/pdf) 清除密码，然后拆分解锁后的文件。仅对自己拥有或有权修改的文档这样做。

### 如何只提取 PDF 中的某一页？

使用 [UtilBoxx 的 PDF 拆分工具](/zh/tools/pdf/split)，选择"提取指定页面"，输入单个页码即可。输出就是一个单页 PDF，原文件保持不变。

### 扫描的 PDF 可以拆分吗？

可以。扫描 PDF 只是在 PDF 容器里包了图片，拆分方式一样。页面分辨率和质量不会变化。如果你还需要让扫描内容可搜索，先拆分，再用 OCR 工具处理。

### 使用在线 PDF 拆分工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的文件会被上传到远程服务器，并仔细阅读隐私政策。避免向你不信任的拆分工具上传任何包含个人、财务、医疗或法律敏感信息的文件。

### 拆分和提取页面有什么区别？

在大多数工具中这两个词互相重叠。**拆分** 通常指把一个 PDF 拆成多个较小的 PDF。**提取** 通常指把指定页面或范围抽到一个新文件里。UtilBoxx 的工具在一个界面里同时支持这两种模式。

## 结论

拆分 PDF 是一件经常要做的小事，不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费 PDF 拆分工具](/zh/tools/pdf/split) 是显而易见的选择：私密、快速、免费、无需注册、无水印。

如果你是 Mac 用户，只想快速拆一次，Preview 也能凑合用。如果你写脚本做批量处理，qpdf 在终端里无可替代。如果你已经为 Adobe Acrobat 付了费，那它的"组织页面"视图也很优秀。

其他情况下，去看 [UtilBoxx 的 PDF 工具集](/zh/tools/pdf)，你会找到一个完整的、隐私优先的 PDF 处理工具箱 —— 全部在浏览器里完成。`;

const splitPdfJa = `## なぜ PDF を分割するのか？

PDF は可搬性と自己完結性を重視して設計されているからこそ、逆に分割が難しいという面があります。200 ページのレポートから必要なのは 1 つの章だけかもしれない。スキャンした本の表紙画像を別所で使いたいかもしれない。長い契約書の署名ページが後ろのほうに埋もれているかもしれない。どのケースでも、答えは PDF を分割することです。

PDF の分割が必要になる理由は、実際的でしかも頻繁です：

- **一部だけを抽出**：200 ページのマニュアルから第 3 章を抜き出して同僚にメールする。
- **大きなファイルを分割**：500 ページのスキャンを章ごとに分けて、アップロード・共有・閲覧しやすくする。
- **特定のページを保存**：契約書の 12〜15 ページだけを証拠として抜き出し、残りは無視する。
- **埋め込みコンテンツの再利用**：47 ページの図だけ取り出して画像化する。
- **共有のためのサイズ削減**：多くのメールやアップロードサービスには添付サイズ上限がある。50 MB の PDF を 10 MB ずつ 5 つに分ければ上限を回避できる。
- **プライバシー**：財務諸表の関連ページだけを送り、書類全体は送らない。

良いニュースは、適切なツールを使えば PDF の分割は 10 秒で終わり、何もインストールする必要がないことです。

## 方法 1：UtilBoxx の無料 PDF 分割ツール（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の PDF 分割ツール](/ja/tools/pdf/split) です。完全にブラウザ内で動作するため、ファイルがデバイスの外に出ることがありません。アップロードも登録も不要で、透かしも入りません。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/pdf/split](/ja/tools/pdf/split) を開く
2. アップロード領域をクリックして PDF を選択（またはドラッグ＆ドロップ）
3. 分割方法を選択：ページ範囲指定、N ページごと分割、特定ページ抽出
4.「処理」をクリック
5. 結果の PDF をダウンロード（通常は ZIP で複数ファイル）

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべての処理がブラウザ内で完結。ファイルはサーバーへ送信されません
- **3 つの分割モード**：範囲抽出、N ページごとの分割、特定ページ選択
- **あらゆるデバイスで動作**：Windows、Mac、Linux、ChromeOS、iOS、Android
- **バッチ処理に対応**：1 つのファイルを複数に分割、または複数ファイルを連続処理
- **出力 PDF に透かしなし**

たまに PDF を分割するだけなら、これほど低コストな選択肢はありません。

## 方法 2：Adobe Acrobat Pro（有料）

Adobe Acrobat Pro は PDF 界のヘビー級で、法務・出版チームの定番です。「ページ構成」ビューでは、ページをドラッグして新ファイルにまとめたり、ブックマークで分割したり、ファイルサイズを目標にして分割したりできます。インターフェースは洗練されていて、出力は信頼できます。

ただし価格が高めです。Acrobat Pro はサブスクリプションで月額約 **$19.99**（年額約 $240）。一度だけの分割なら割に合いません。デスクトップインストールが必要なので、古いマシンには負担です。

既に編集・墨消し・電子署名・フォーム作成などのために Acrobat を利用しているなら価値があります。分割だけが目的であれば、ブラウザツールで十分です。

## 方法 3：macOS のプレビュー

Mac では内蔵の **プレビュー** アプリで手動で PDF を分割できます。ただし専用ツールより手順が増えます：

1. **プレビュー** で PDF を開く
2.**表示 > サムネール** をクリックしてページパネルを表示
3. 新しいファイルに残したいページを選択
4. サムネールをデスクトップへ（または新しいプレビューウィンドウへ）ドラッグ
5. 新しいファイルを保存

この方法は **Mac 専用** で、少量の分割に向きます。200 ページのドキュメントを章ごとに分割するとなると、ドラッグと保存の繰り返しになるため実用的ではありません。

## 方法 4：コマンドラインで qpdf または pdftk

ターミナルに慣れているなら、オープンソースの **qpdf** が最も信頼性の高い CLI オプションです。Homebrew でインストール（\`brew install qpdf\`）したら：

\`\`\`bash
# 1〜5 ページを新ファイルに抽出
qpdf input.pdf --pages input.pdf 1-5 -- out.pdf

# 1、3、7 ページを抽出
qpdf input.pdf --pages input.pdf 1,3,7 -- out.pdf

# 全ページを 1 ページずつ分割
mkdir out && qpdf --split-pages input.pdf out/page.pdf
\`\`\`

\`pdftk\` も同様の機能を提供しますが、メンテナンスされておらず Java 依存が巨大です。**qpdf** のほうが高速・軽量・活発に保守されています。どちらもスクリプトで何百ものファイルをバッチ処理するのに優れています。

## よくある質問

### PDF の分割で品質は落ちますか？

いいえ。PDF の分割は元のページ内容を新しいコンテナにコピーするだけで、再エンコードは行われません。文字はシャープなまま、画像も元の解像度のまま、フォントもそのままです。変わるのは「どのファイルにどのページが入るか」だけです。

### パスワード保護された PDF を分割できますか？

パスワード保護された PDF も分割可能ですが、通常はまずパスワードを解除してツールが内容を読み取れるようにする必要があります。[PDF ロック解除ツール](/ja/tools/pdf) でパスワードをクリアしてから、解除後のファイルを分割してください。自分が所有している、または変更する権限がある文書に対してのみ行ってください。

### PDF から 1 ページだけ抽出するには？

[UtilBoxx の PDF 分割ツール](/ja/tools/pdf/split) で「特定のページを抽出」を選び、ページ番号を 1 つ入力します。1 ページだけの PDF が出力され、元のファイルはそのままです。

### スキャンした PDF を分割できますか？

はい。スキャン PDF は PDF コンテナに入った画像にすぎないので、分割の動作は同じです。ページの解像度と品質は変わりません。スキャン内容を検索可能にしたい場合は、まず分割し、その後 OCR ツールで処理してください。

### オンラインの PDF 分割ツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、ファイルがリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人情報、財務、医療、法的に機密性の高い情報を含む文書は、信頼できない分割ツールにアップロードしないでください。

### 分割とページ抽出の違いは何ですか？

多くのツールではこの 2 つの用語は重なっています。**分割** は通常、1 つの PDF を複数の小さな PDF に分けることです。**抽出** は通常、特定のページや範囲を新しいファイルに抜き出すことです。UtilBoxx のツールは両方を 1 か所でサポートしています。

## まとめ

PDF の分割は頻繁に行う小さな作業であり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料 PDF 分割ツール](/ja/tools/pdf/split) は明白な選択です：プライベートで、速くて、無料で、登録不要、透かしなし。

Mac ユーザーで少しだけ分割したい場合は、プレビューでも間に合います。バッチ処理のスクリプトを書くなら、ターミナルで qpdf が最強です。Adobe Acrobat を他用途で既に利用しているなら、「ページ構成」ビューは優れています。

その他は、[UtilBoxx の PDF ツール](/ja/tools/pdf) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先の PDF ツールキットが見つかります。`;

const splitPdfEs = `## ¿Por qué dividir un PDF?

Los PDF están diseñados para ser portátiles y autosuficientes, y esa misma fortaleza es lo que los hace difíciles de separar. Un informe de 200 páginas puede contener un único capítulo que realmente necesitas. Un libro escaneado puede tener una portada que quieras usar en otro lugar. Un contrato largo puede ocultar la página de firmas al final. En cada caso, la respuesta es la misma: dividir el PDF.

Las razones por las que la gente necesita dividir un PDF son prácticas y frecuentes:

- **Extraer una sección**: Sacar el capítulo 3 de un manual de 200 páginas para enviárselo por correo a un colega.
- **Separar archivos grandes**: Romper un escaneo de 500 páginas en archivos por capítulo, más fáciles de subir, compartir y leer.
- **Guardar páginas específicas**: Conservar solo las páginas 12-15 de un contrato como evidencia, ignorando el resto.
- **Reutilizar contenido incrustado**: Tomar el diagrama de la página 47 y convertirlo en imagen.
- **Reducir el tamaño para compartir**: Muchos portales de correo y subida imponen límites. Dividir un PDF de 50 MB en cinco de 10 MB evita esa restricción.
- **Privacidad**: Enviar solo las páginas relevantes de un estado financiero, no todo el documento.

La buena noticia: con la herramienta adecuada, dividir un PDF es un trabajo de 10 segundos y no requiere instalar nada.

## Método 1: Usa el divisor de PDF gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de dividir un PDF es la [herramienta de división de PDF de UtilBoxx](/es/tools/pdf/split). Se ejecuta por completo en tu navegador, por lo que el archivo nunca sale de tu dispositivo. Sin subidas, sin registro y sin marca de agua en el resultado.

Así se usa:

1. Ve a [utilboxx.com/es/tools/pdf/split](/es/tools/pdf/split)
2. Haz clic en el área de subida y selecciona tu PDF (o arrástralo)
3. Elige cómo dividir: por rango de páginas, cada N páginas, o extrayendo páginas seleccionadas
4. Haz clic en "Procesar"
5. Descarga los PDF resultantes (normalmente un zip con varios archivos)

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. El archivo nunca llega a un servidor.
- **Tres modos de división**: extraer un rango, dividir en bloques de N páginas, o elegir páginas específicas
- **Funciona en cualquier dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Apto para lotes**: divide un archivo en muchos, o procesa muchos archivos seguidos
- **Sin marcas de agua** en los PDF de salida

Si solo necesitas dividir un PDF de vez en cuando, esta es la opción de menor fricción con diferencia.

## Método 2: Adobe Acrobat Pro (De pago)

Adobe Acrobat Pro es el peso pesado del mundo PDF y la herramienta preferida de la mayoría de los equipos legales y editoriales. Su vista "Organizar páginas" permite arrastrar páginas a nuevos archivos, dividir por marcador, o dividir por tamaño objetivo. La interfaz es pulida y la salida confiable.

El inconveniente es el precio. Acrobat Pro cuesta aproximadamente **$19.99 al mes** (unos $240 al año) en suscripción. Para una división puntual, es una mala relación calidad-precio. También requiere instalación de escritorio, que puede ser pesada en máquinas antiguas.

Acrobat solo vale la pena si ya lo usas para edición, redacción, firmas electrónicas o creación de formularios. Si lo único que necesitas es dividir, una herramienta basada en el navegador hace el trabajo sin la factura.

## Método 3: Vista Previa de macOS

En Mac, puedes usar la aplicación **Vista Previa** integrada para dividir un PDF manualmente, aunque lleva más pasos que una herramienta dedicada:

1. Abre el PDF en **Vista Previa**
2. Haz clic en **Ver > Miniaturas** para mostrar el panel de páginas
3. Selecciona las páginas que quieres en el archivo nuevo
4. Arrastra esas miniaturas al escritorio (o a una nueva ventana de Vista Previa)
5. Guarda el archivo nuevo

Este método es **solo para Mac** y funciona mejor para divisiones pequeñas. No es práctico para dividir un documento de 200 páginas en archivos por capítulo, ya que hay que arrastrar y guardar repetidamente.

## Método 4: Línea de comandos con qpdf o pdftk

Si te manejas en la terminal, la herramienta de código abierto **qpdf** es la opción CLI más fiable. Instálala con Homebrew (\`brew install qpdf\`), luego:

\`\`\`bash
# Extraer páginas 1-5 en un archivo nuevo
qpdf input.pdf --pages input.pdf 1-5 -- out.pdf

# Extraer páginas individuales 1, 3, 7
qpdf input.pdf --pages input.pdf 1,3,7 -- out.pdf

# Dividir cada página en su propio archivo
mkdir out && qpdf --split-pages input.pdf out/page.pdf
\`\`\`

La herramienta \`pdftk\` ofrece capacidades similares, pero no se mantiene y arrastra dependencias pesadas de Java. **qpdf** es más rápido, ligero y se mantiene activamente. Ambos son excelentes para programar divisiones por lotes entre cientos de archivos.

## Preguntas frecuentes

### ¿Dividir un PDF reduce la calidad?

No. Dividir un PDF copia el contenido original de las páginas en un nuevo contenedor sin recodificar. El texto permanece nítido, las imágenes mantienen su resolución original y las fuentes se conservan exactamente. Lo único que cambia es qué páginas están en qué archivo.

### ¿Puedo dividir un PDF protegido con contraseña?

Los PDF protegidos con contraseña se pueden dividir, pero normalmente hay que eliminar primero la contraseña para que la herramienta pueda leer el contenido. Usa una [herramienta para desbloquear PDF](/es/tools/pdf) y luego divide el archivo desbloqueado. Hazlo solo con documentos que poseas o tengas permiso para modificar.

### ¿Cómo extraigo una sola página de un PDF?

Con la [herramienta de división de PDF de UtilBoxx](/es/tools/pdf/split), elige "Extraer páginas específicas" e introduce el número de página. Obtendrás un PDF de una página como salida. El documento original queda intacto.

### ¿Puedo dividir un PDF escaneado?

Sí. Los PDF escaneados son solo imágenes envueltas en un contenedor PDF, y la división funciona igual. Las páginas no cambian de resolución ni de calidad. Si también necesitas que el texto de los escaneos sea buscable, divide primero y luego usa una herramienta OCR sobre el resultado.

### ¿Es seguro usar un divisor de PDF online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador**: sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tu archivo se está subiendo a un servidor remoto y lee atentamente su política de privacidad. Evita subir a un divisor en el que no confías cualquier documento con información personal, financiera, médica o legalmente sensible.

### ¿Cuál es la diferencia entre dividir y extraer páginas?

En la mayoría de las herramientas los dos términos se solapan. **Dividir** suele significar romper un PDF en varios PDF más pequeños. **Extraer** típicamente significa sacar una página o rango específico a un único archivo nuevo. La herramienta de UtilBoxx admite ambos modos en un solo lugar.

## Conclusión

Dividir un PDF es una de esas pequeñas tareas que aparecen constantemente y no deberían requerir una suscripción de pago o instalar software. Para la mayoría de la gente, la [herramienta gratuita de división de PDF de UtilBoxx](/es/tools/pdf/split) es la opción obvia: es privada, rápida y gratis, sin registro y sin marca de agua.

Si estás en Mac y solo necesitas una división rápida, Vista Previa funciona. Si estás programando trabajo por lotes, qpdf en la terminal es imbatible. Y si ya pagas Adobe Acrobat por otras razones, su vista "Organizar páginas" es excelente.

Para todo lo demás, visita las [herramientas PDF de UtilBoxx](/es/tools/pdf) y encontrarás un conjunto completo de herramientas para trabajar con PDF, con privacidad como prioridad, todo en tu navegador.`;

const splitPdfPt = `## Por que dividir um PDF?

PDFs são projetados para serem portáteis e autocontidos, e essa mesma força é o que os torna difíceis de separar. Um relatório de 200 páginas pode conter um único capítulo que você realmente precisa. Um livro escaneado pode ter uma capa que você quer usar em outro lugar. Um contrato longo pode esconder a página de assinaturas no final. Em cada caso, a resposta é a mesma: dividir o PDF.

Os motivos pelos quais as pessoas precisam dividir um PDF são práticos e frequentes:

- **Extrair uma seção**: Retirar o capítulo 3 de um manual de 200 páginas para enviá-lo por e-mail a um colega.
- **Separar arquivos grandes**: Quebrar uma digitalização de 500 páginas em arquivos por capítulo, mais fáceis de enviar, compartilhar e ler.
- **Salvar páginas específicas**: Manter apenas as páginas 12-15 de um contrato como evidência, ignorando o resto.
- **Reutilizar conteúdo incorporado**: Pegar o diagrama da página 47 e transformá-lo em imagem.
- **Reduzir tamanho para compartilhamento**: Muitos portais de e-mail e upload têm limites de tamanho. Dividir um PDF de 50 MB em cinco de 10 MB contorna esse limite.
- **Privacidade**: Enviar apenas as páginas relevantes de um demonstrativo financeiro, não o documento inteiro.

A boa notícia: com a ferramenta certa, dividir um PDF é um trabalho de 10 segundos e você não precisa instalar nada.

## Método 1: Use o divisor de PDF grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de dividir um PDF é a [ferramenta de divisão de PDF do UtilBoxx](/pt/tools/pdf/split). Ela roda inteiramente no seu navegador, então o arquivo nunca sai do seu dispositivo. Sem upload, sem cadastro e sem marca d'água no resultado.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/pdf/split](/pt/tools/pdf/split)
2. Clique na área de upload e selecione seu PDF (ou arraste e solte)
3. Escolha como dividir: por intervalo de páginas, a cada N páginas, ou extraindo páginas selecionadas
4. Clique em "Processar"
5. Baixe os PDFs resultantes (geralmente um zip com vários arquivos)

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. O arquivo nunca chega a um servidor.
- **Três modos de divisão**: extrair um intervalo, dividir em blocos de N páginas, ou escolher páginas específicas
- **Funciona em qualquer dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Amigo de lotes**: divida um arquivo em muitos, ou processe muitos arquivos seguidos
- **Sem marcas d'água** nos PDFs de saída

Se você só precisa dividir um PDF de vez em quando, essa é a opção de menor atrito disparado.

## Método 2: Adobe Acrobat Pro (Pago)

Adobe Acrobat Pro é o peso-pesado do mundo PDF e a ferramenta padrão da maioria das equipes jurídicas e editoriais. Sua visualização "Organizar páginas" permite arrastar páginas para novos arquivos, dividir por marcador ou dividir por tamanho alvo. A interface é polida e a saída é confiável.

O problema é o preço. Acrobat Pro custa cerca de **$19.99 por mês** (aproximadamente $240 por ano) na assinatura. Para uma divisão pontual, é uma troca ruim. Também requer instalação desktop, que pode ser pesada em máquinas antigas.

Acrobat vale a pena apenas se você já o usa para edição, redação, assinaturas eletrônicas ou criação de formulários. Se divisão é tudo o que você precisa, uma ferramenta baseada em navegador faz o trabalho sem a fatura.

## Método 3: Visualização do macOS

No Mac, você pode usar o app **Visualização** integrado para dividir um PDF manualmente, embora leve mais passos do que uma ferramenta dedicada:

1. Abra o PDF em **Visualização**
2. Clique em **Visualizar > Miniaturas** para mostrar o painel de páginas
3. Selecione as páginas que você quer no novo arquivo
4. Arraste essas miniaturas para a área de trabalho (ou para uma nova janela do Visualização)
5. Salve o novo arquivo

Este método é **apenas para Mac** e funciona melhor para divisões pequenas. Não é prático para dividir um documento de 200 páginas em arquivos por capítulo, pois você tem que arrastar e salvar repetidamente.

## Método 4: Linha de comando com qpdf ou pdftk

Se você se sente confortável no terminal, a ferramenta open-source **qpdf** é a opção CLI mais confiável. Instale com Homebrew (\`brew install qpdf\`), depois:

\`\`\`bash
# Extrair páginas 1-5 em um novo arquivo
qpdf input.pdf --pages input.pdf 1-5 -- out.pdf

# Extrair páginas individuais 1, 3, 7
qpdf input.pdf --pages input.pdf 1,3,7 -- out.pdf

# Dividir cada página em seu próprio arquivo
mkdir out && qpdf --split-pages input.pdf out/page.pdf
\`\`\`

A ferramenta \`pdftk\` oferece capacidades similares, mas não é mantida e traz dependências pesadas de Java. **qpdf** é mais rápido, leve e ativamente mantido. Ambos são excelentes para programar divisões em lote entre centenas de arquivos.

## Perguntas frequentes

### Dividir um PDF reduz a qualidade?

Não. Dividir um PDF copia o conteúdo original das páginas em um novo contêiner sem recodificar. O texto permanece nítido, as imagens mantêm sua resolução original e as fontes são preservadas exatamente. A única coisa que muda é quais páginas estão em qual arquivo.

### Posso dividir um PDF protegido por senha?

PDFs protegidos por senha podem ser divididos, mas geralmente é necessário remover a senha primeiro para que a ferramenta possa ler o conteúdo. Use uma [ferramenta para desbloquear PDF](/pt/tools/pdf) e depois divida o arquivo desbloqueado. Faça isso apenas em documentos que você possui ou tem permissão para modificar.

### Como extraio uma única página de um PDF?

Com a [ferramenta de divisão de PDF do UtilBoxx](/pt/tools/pdf/split), escolha "Extrair páginas específicas" e insira o número da página. Você obterá um PDF de uma página como saída. O documento original fica intacto.

### Posso dividir um PDF digitalizado?

Sim. PDFs digitalizados são apenas imagens envoltas em um contêiner PDF, e a divisão funciona da mesma forma. As páginas não mudam de resolução nem de qualidade. Se você também precisa que o texto das digitalizações seja pesquisável, divida primeiro e depois use uma ferramenta OCR no resultado.

### É seguro usar um divisor de PDF online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que seu arquivo está sendo enviado para um servidor remoto e leia atentamente sua política de privacidade. Evite enviar a um divisor em que você não confia qualquer documento com informações pessoais, financeiras, médicas ou legalmente sensíveis.

### Qual a diferença entre dividir e extrair páginas?

Na maioria das ferramentas os dois termos se sobrepõem. **Dividir** geralmente significa quebrar um PDF em vários PDFs menores. **Extrair** normalmente significa puxar uma página ou intervalo específico para um único arquivo novo. A ferramenta do UtilBoxx suporta ambos os modos em um só lugar.

## Conclusão

Dividir um PDF é uma daquelas pequenas tarefas que surgem constantemente e não deveriam exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, a [ferramenta gratuita de divisão de PDF do UtilBoxx](/pt/tools/pdf/split) é a escolha óbvia: é privada, rápida e grátis, sem cadastro e sem marca d'água.

Se você está no Mac e só precisa de uma divisão rápida, o Visualização resolve. Se você está programando trabalho em lote, qpdf no terminal é imbatível. E se você já paga pelo Adobe Acrobat por outros motivos, sua visualização "Organizar páginas" é excelente.

Para todo o resto, visite as [ferramentas PDF do UtilBoxx](/pt/tools/pdf) e você encontrará um conjunto completo de ferramentas para trabalhar com PDFs, com privacidade como prioridade, tudo no seu navegador.`;

const splitPdfFr = `## Pourquoi diviser un PDF ?

Les PDF sont conçus pour être portables et autonomes, et c'est précisément cette force qui les rend difficiles à démembrer. Un rapport de 200 pages peut ne contenir qu'un seul chapitre dont vous avez vraiment besoin. Un livre numérisé peut avoir une couverture que vous voulez réutiliser ailleurs. Un contrat long peut cacher la page de signature à la fin. Dans chaque cas, la réponse est la même : diviser le PDF.

Les raisons pour lesquelles les gens ont besoin de diviser un PDF sont pratiques et fréquentes :

- **Extraire une section** : Sortir le chapitre 3 d'un manuel de 200 pages pour l'envoyer par e-mail à un collègue.
- **Séparer de gros fichiers** : Découper une numérisation de 500 pages en fichiers par chapitre, plus faciles à téléverser, partager et lire.
- **Conserver des pages précises** : Garder uniquement les pages 12 à 15 d'un contrat comme preuve, en ignorant le reste.
- **Réutiliser du contenu intégré** : Récupérer le schéma de la page 47 et le transformer en image.
- **Réduire la taille pour le partage** : Beaucoup de portails e-mail et d'upload imposent des limites. Diviser un PDF de 50 Mo en cinq de 10 Mo contourne cette limite.
- **Confidentialité** : N'envoyer que les pages pertinentes d'un relevé financier, pas tout le document.

Bonne nouvelle : avec le bon outil, diviser un PDF est un travail de 10 secondes et vous n'avez rien à installer.

## Méthode 1 : Utiliser le diviseur PDF gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de diviser un PDF est l'[outil de division PDF de UtilBoxx](/fr/tools/pdf/split). Il s'exécute entièrement dans votre navigateur, donc le fichier ne quitte jamais votre appareil. Pas de téléversement, pas d'inscription, pas de filigrane sur le résultat.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/pdf/split](/fr/tools/pdf/split)
2. Cliquez sur la zone de téléversement et sélectionnez votre PDF (ou glissez-déposez)
3. Choisissez comment diviser : par plage de pages, toutes les N pages, ou en extrayant des pages précises
4. Cliquez sur « Traiter »
5. Téléchargez les PDF obtenus (généralement un zip de plusieurs fichiers)

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Le fichier n'arrive jamais sur un serveur.
- **Trois modes de division** : extraire une plage, diviser en blocs de N pages, ou choisir des pages spécifiques
- **Fonctionne sur tout appareil** : Windows, Mac, Linux, ChromeOS, iOS, Android
- **Compatible lots** : divisez un fichier en plusieurs, ou traitez plusieurs fichiers à la suite
- **Aucun filigrane** sur les PDF de sortie

Si vous n'avez besoin de diviser un PDF qu'occasionnellement, c'est de loin l'option la plus simple.

## Méthode 2 : Adobe Acrobat Pro (Payant)

Adobe Acrobat Pro est le poids lourd du monde PDF et l'outil par défaut de la plupart des équipes juridiques et éditoriales. Sa vue « Organiser les pages » permet de glisser visuellement des pages dans de nouveaux fichiers, de diviser par signet ou par taille cible. L'interface est soignée et la sortie fiable.

Le hic, c'est le prix. Acrobat Pro coûte environ **19,99 $ par mois** (environ 240 $ par an) en abonnement. Pour une division ponctuelle, c'est un mauvais calcul. Il faut aussi une installation desktop, qui peut être lourde sur des machines anciennes.

Acrobat ne vaut le coup que si vous l'utilisez déjà pour l'édition, la rédaction, la signature électronique ou la création de formulaires. Si la division est tout ce dont vous avez besoin, un outil en navigateur fait le travail sans la facture.

## Méthode 3 : Aperçu de macOS

Sur Mac, vous pouvez utiliser l'application **Aperçu** intégrée pour diviser un PDF manuellement, mais cela demande quelques étapes de plus qu'un outil dédié :

1. Ouvrez le PDF dans **Aperçu**
2. Cliquez sur **Présentation > Miniatures** pour afficher le panneau des pages
3. Sélectionnez les pages que vous voulez dans le nouveau fichier
4. Glissez ces miniatures sur le bureau (ou dans une nouvelle fenêtre Aperçu)
5. Enregistrez le nouveau fichier

Cette méthode est **réservée à Mac** et convient mieux aux petites divisions. Elle n'est pas pratique pour diviser un document de 200 pages en fichiers par chapitre, car il faut glisser et enregistrer en boucle.

## Méthode 4 : Ligne de commande avec qpdf ou pdftk

Si vous êtes à l'aise dans un terminal, l'outil open-source **qpdf** est l'option CLI la plus fiable. Installez-le avec Homebrew (\`brew install qpdf\`), puis :

\`\`\`bash
# Extraire les pages 1-5 dans un nouveau fichier
qpdf input.pdf --pages input.pdf 1-5 -- out.pdf

# Extraire des pages individuelles 1, 3, 7
qpdf input.pdf --pages input.pdf 1,3,7 -- out.pdf

# Diviser chaque page dans son propre fichier
mkdir out && qpdf --split-pages input.pdf out/page.pdf
\`\`\`

L'outil \`pdftk\` offre des capacités similaires, mais il n'est plus maintenu et embarque de lourdes dépendances Java. **qpdf** est plus rapide, plus léger et activement maintenu. Les deux excellent pour scripter des divisions par lots sur des centaines de fichiers.

## Questions fréquentes

### Diviser un PDF réduit-il la qualité ?

Non. Diviser un PDF copie le contenu original des pages dans un nouveau conteneur sans ré-encoder. Le texte reste net, les images conservent leur résolution d'origine et les polices sont préservées à l'identique. La seule chose qui change, c'est quelles pages se trouvent dans quel fichier.

### Puis-je diviser un PDF protégé par mot de passe ?

Les PDF protégés par mot de passe peuvent être divisés, mais il faut généralement d'abord retirer le mot de passe pour que l'outil puisse lire le contenu. Utilisez un [outil de déverrouillage PDF](/fr/tools/pdf) puis divisez le fichier déverrouillé. Ne le faites que sur des documents que vous possédez ou pour lesquels vous avez la permission de modifier.

### Comment extraire une seule page d'un PDF ?

Avec l'[outil de division PDF de UtilBoxx](/fr/tools/pdf/split), choisissez « Extraire des pages précises » et saisissez un seul numéro de page. Vous obtenez un PDF d'une page en sortie. Le document original reste inchangé.

### Puis-je diviser un PDF numérisé ?

Oui. Les PDF numérisés ne sont que des images enveloppées dans un conteneur PDF, et la division fonctionne de la même façon. La résolution et la qualité des pages ne changent pas. Si vous avez aussi besoin que le texte des numérisations soit recherchable, divisez d'abord, puis passez un outil OCR sur le résultat.

### Est-il sûr d'utiliser un diviseur PDF en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que votre fichier est téléversé sur un serveur distant et lisez attentivement leur politique de confidentialité. Évitez de téléverser sur un diviseur en qui vous n'avez pas confiance tout document contenant des informations personnelles, financières, médicales ou juridiquement sensibles.

### Quelle est la différence entre diviser et extraire des pages ?

Dans la plupart des outils, les deux termes se chevauchent. **Diviser** signifie généralement casser un PDF en plusieurs PDF plus petits. **Extraire** signifie typiquement tirer une page ou une plage précise vers un seul nouveau fichier. L'outil de UtilBoxx gère les deux modes au même endroit.

## Conclusion

Diviser un PDF est l'une de ces petites tâches qui reviennent constamment et ne devraient pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, l'[outil gratuit de division PDF de UtilBoxx](/fr/tools/pdf/split) est le choix évident : privé, rapide, gratuit, sans inscription ni filigrane.

Si vous êtes sur Mac et n'avez besoin que d'une division rapide, Aperçu fait l'affaire. Si vous scriptz du travail par lots, qpdf dans le terminal est imbattable. Et si vous payez déjà Adobe Acrobat pour d'autres raisons, sa vue « Organiser les pages » est excellente.

Pour tout le reste, rendez-vous sur les [outils PDF de UtilBoxx](/fr/tools/pdf) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const splitPdfDe = `## Warum ein PDF teilen?

PDFs sind darauf ausgelegt, portabel und in sich geschlossen zu sein – und genau diese Stärke macht sie schwer zu zerlegen. Ein 200-seitiger Bericht enthält vielleicht nur ein einziges Kapitel, das Sie wirklich brauchen. Ein gescanntes Buch hat vielleicht ein Cover, das Sie woanders verwenden möchten. Ein langer Vertrag versteckt die Unterschriftsseite ganz am Ende. In jedem Fall lautet die Antwort: das PDF teilen.

Die Gründe, warum Menschen ein PDF teilen müssen, sind praktisch und häufig:

- **Einen Abschnitt extrahieren**: Kapitel 3 aus einem 200-seitigen Handbuch herausziehen, um es einem Kollegen per E-Mail zu schicken.
- **Große Dateien aufteilen**: Einen 500-seitigen Scan in Dateien pro Kapitel zerlegen, die sich leichter hochladen, teilen und lesen lassen.
- **Bestimmte Seiten sichern**: Nur die Seiten 12-15 eines Vertrags als Beweis behalten, den Rest ignorieren.
- **Eingebettete Inhalte wiederverwenden**: Das Diagramm auf Seite 47 herausnehmen und in ein Bild verwandeln.
- **Für den Versand verkleinern**: Viele E-Mail- und Upload-Portale haben Größenbeschränkungen. Ein 50-MB-PDF in fünf 10-MB-Dateien aufzuteilen umgeht diese Grenze.
- **Privatsphäre**: Nur die relevanten Seiten eines Finanzberichts senden, nicht das ganze Dokument.

Die gute Nachricht: Mit dem richtigen Werkzeug ist das Teilen eines PDFs eine 10-Sekunden-Aufgabe, und Sie müssen nichts installieren.

## Methode 1: Den kostenlosen PDF-Teiler von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode, ein PDF zu teilen, ist das [PDF-Teilungswerkzeug von UtilBoxx](/de/tools/pdf/split). Es läuft vollständig in Ihrem Browser, sodass die Datei Ihr Gerät nie verlässt. Kein Upload, keine Registrierung, kein Wasserzeichen im Ergebnis.

So verwenden Sie es:

1. Gehen Sie zu [utilboxx.com/de/tools/pdf/split](/de/tools/pdf/split)
2. Klicken Sie auf den Upload-Bereich und wählen Sie Ihre PDF (oder ziehen Sie sie per Drag & Drop)
3. Wählen Sie die Teilungsmethode: nach Seitenbereich, alle N Seiten, oder durch Extrahieren ausgewählter Seiten
4. Klicken Sie auf „Verarbeiten"
5. Laden Sie die resultierenden PDFs herunter (meist ein ZIP mit mehreren Dateien)

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in Ihrem Browser verarbeitet. Die Datei erreicht nie einen Server.
- **Drei Teilungsmodi**: Bereich extrahieren, in N-Seiten-Blöcke teilen, oder einzelne Seiten auswählen
- **Funktioniert auf jedem Gerät**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Stapelfähig**: Eine Datei in viele aufteilen oder viele Dateien hintereinander verarbeiten
- **Keine Wasserzeichen** auf den ausgegebenen PDFs

Wenn Sie nur gelegentlich ein PDF teilen müssen, ist dies mit Abstand die reibungsloseste Option.

## Methode 2: Adobe Acrobat Pro (Kostenpflichtig)

Adobe Acrobat Pro ist das Schwergewicht der PDF-Welt und das Standardwerkzeug der meisten Rechts- und Verlagsabteilungen. Seine Ansicht „Seiten organisieren" erlaubt es, Seiten visuell in neue Dateien zu ziehen, nach Lesezeichen zu teilen oder nach Zieldateigröße zu teilen. Die Oberfläche ist poliert und die Ausgabe zuverlässig.

Der Haken ist der Preis. Acrobat Pro kostet im Abonnement ungefähr **19,99 $ pro Monat** (etwa 240 $ pro Jahr). Für eine gelegentliche Teilung ein schlechtes Geschäft. Außerdem ist eine Desktop-Installation nötig, die auf älteren Maschinen schwer wiegen kann.

Acrobat lohnt sich nur, wenn Sie es bereits für Bearbeitung, Schwärzung, elektronische Signaturen oder Formularerstellung nutzen. Wenn Teilen alles ist, was Sie brauchen, erledigt ein Browser-Tool die Arbeit ohne die Rechnung.

## Methode 3: macOS-Vorschau

Auf einem Mac können Sie die eingebaute App **Vorschau** verwenden, um ein PDF manuell zu teilen, auch wenn es ein paar Schritte mehr sind als mit einem dedizierten Werkzeug:

1. Öffnen Sie das PDF in **Vorschau**
2. Klicken Sie auf **Darstellung > Miniaturansichten**, um das Seiten-Panel anzuzeigen
3. Wählen Sie die Seiten aus, die Sie in der neuen Datei haben möchten
4. Ziehen Sie diese Miniaturen auf den Schreibtisch (oder in ein neues Vorschau-Fenster)
5. Speichern Sie die neue Datei

Diese Methode ist **nur für Mac** und eignet sich am besten für kleine Teilungen. Für ein 200-seitiges Dokument in Kapiteldateien ist sie unpraktisch, da man wiederholt ziehen und speichern muss.

## Methode 4: Kommandozeile mit qpdf oder pdftk

Wenn Sie sich im Terminal wohlfühlen, ist das Open-Source-Werkzeug **qpdf** die zuverlässigste CLI-Option. Installieren Sie es mit Homebrew (\`brew install qpdf\`), dann:

\`\`\`bash
# Seiten 1-5 in eine neue Datei extrahieren
qpdf input.pdf --pages input.pdf 1-5 -- out.pdf

# Einzelne Seiten 1, 3, 7 extrahieren
qpdf input.pdf --pages input.pdf 1,3,7 -- out.pdf

# Jede Seite in ihre eigene Datei teilen
mkdir out && qpdf --split-pages input.pdf out/page.pdf
\`\`\`

Das Werkzeug \`pdftk\` bietet ähnliche Fähigkeiten, wird aber nicht mehr gepflegt und zieht schwere Java-Abhängigkeiten mit. **qpdf** ist schneller, leichter und aktiv gepflegt. Beide eignen sich hervorragend, um Stapelteilungen über Hunderte von Dateien zu skripten.

## Häufige Fragen

### Verringert das Teilen eines PDFs die Qualität?

Nein. Beim Teilen eines PDFs wird der ursprüngliche Seiteninhalt in einen neuen Container kopiert, ohne neu zu kodieren. Text bleibt scharf, Bilder behalten ihre Originalauflösung, und Schriftarten werden genau erhalten. Das Einzige, was sich ändert, ist, welche Seiten in welcher Datei liegen.

### Kann ich ein passwortgeschütztes PDF teilen?

Passwortgeschützte PDFs können geteilt werden, aber Sie müssen normalerweise zuerst das Passwort entfernen, damit das Werkzeug den Inhalt lesen kann. Verwenden Sie ein [PDF-Entsperrwerkzeug](/de/tools/pdf) und teilen Sie dann die entsperrte Datei. Tun Sie dies nur bei Dokumenten, die Ihnen gehören oder deren Änderung Sie genehmigt haben.

### Wie extrahiere ich nur eine Seite aus einem PDF?

Wählen Sie im [PDF-Teilungswerkzeug von UtilBoxx](/de/tools/pdf/split) „Bestimmte Seiten extrahieren" und geben Sie die gewünschte Seitenzahl ein. Sie erhalten eine einseitige PDF als Ausgabe. Das Originaldokument bleibt unverändert.

### Kann ich eine gescannte PDF teilen?

Ja. Gescannte PDFs sind nur Bilder, die in einem PDF-Container verpackt sind, und das Teilen funktioniert genauso. Auflösung und Qualität der Seiten ändern sich nicht. Wenn Sie den Text der Scans auch durchsuchbar machen möchten, teilen Sie zuerst und wenden Sie dann ein OCR-Werkzeug auf das Ergebnis an.

### Ist die Nutzung eines Online-PDF-Teilers sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in Ihrem Browser** – kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen sollten Sie davon ausgehen, dass Ihre Datei auf einen entfernten Server hochgeladen wird, und die Datenschutzrichtlinie sorgfältig lesen. Vermeiden Sie das Hochladen von Dokumenten mit persönlichen, finanziellen, medizinischen oder rechtlich sensiblen Informationen zu einem Teiler, dem Sie nicht vertrauen.

### Was ist der Unterschied zwischen Teilen und Extrahieren von Seiten?

In den meisten Werkzeugen überschneiden sich die beiden Begriffe. **Teilen** bedeutet normalerweise, ein PDF in mehrere kleinere PDFs zu zerlegen. **Extrahieren** bedeutet typischerweise, eine bestimmte Seite oder einen Bereich in eine einzige neue Datei herauszuziehen. Das Werkzeug von UtilBoxx unterstützt beide Modi an einem Ort.

## Fazit

Ein PDF zu teilen ist eine dieser kleinen Aufgaben, die ständig anfallen und keine kostenpflichtige Subskription oder Software-Installation erfordern sollten. Für die meisten Menschen ist das [kostenlose PDF-Teilungswerkzeug von UtilBoxx](/de/tools/pdf/split) die offensichtliche Wahl: privat, schnell, kostenlos, ohne Registrierung und ohne Wasserzeichen.

Wenn Sie auf einem Mac sind und nur eine schnelle Teilung brauchen, funktioniert Vorschau notfalls. Wenn Sie Stapelverarbeitung skripten, ist qpdf im Terminal unschlagbar. Und wenn Sie Adobe Acrobat bereits aus anderen Gründen bezahlen, ist seine Ansicht „Seiten organisieren" ausgezeichnet.

Für alles andere besuchen Sie die [PDF-Werkzeuge von UtilBoxx](/de/tools/pdf): Dort finden Sie einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit PDFs – alles im Browser.`;

export const splitPdfPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-split-pdf-files",
    category: "PDF Tools",
    date: "2026-01-22",
    readTime: "5 min",
    title: "How to Split a PDF File: Extract Pages or Save Separate Files",
    description: "Learn how to extract one page, a range, or split every page into its own PDF — fast, free, and in your browser.",
    content: splitPdfEn,
  },
  zh: {
    slug: "how-to-split-pdf-files",
    category: "PDF 工具",
    date: "2026-01-22",
    readTime: "5 分钟",
    title: "如何拆分 PDF 文件：提取页面或保存为多个文件",
    description: "学习如何从 PDF 中提取单页、一个范围、或将每一页拆为独立 PDF —— 快速、免费、在浏览器中完成。",
    content: splitPdfZh,
  },
  ja: {
    slug: "how-to-split-pdf-files",
    category: "PDF ツール",
    date: "2026-01-22",
    readTime: "5 分",
    title: "PDF ファイルを分割する方法：ページの抽出とファイル分割",
    description: "PDF から 1 ページだけを抽出したり、範囲を抜き出したり、全ページを別ファイルに分割したりする方法を学びましょう — 高速・無料・ブラウザで完結。",
    content: splitPdfJa,
  },
  es: {
    slug: "how-to-split-pdf-files",
    category: "Herramientas PDF",
    date: "2026-01-22",
    readTime: "5 min",
    title: "Cómo dividir un archivo PDF: extrae páginas o guarda archivos separados",
    description: "Aprende a extraer una página, un rango o dividir cada página en su propio PDF — rápido, gratis y en tu navegador.",
    content: splitPdfEs,
  },
  pt: {
    slug: "how-to-split-pdf-files",
    category: "Ferramentas PDF",
    date: "2026-01-22",
    readTime: "5 min",
    title: "Como dividir um arquivo PDF: extraia páginas ou salve arquivos separados",
    description: "Aprenda a extrair uma página, um intervalo ou dividir cada página em seu próprio PDF — rápido, grátis e no seu navegador.",
    content: splitPdfPt,
  },
  fr: {
    slug: "how-to-split-pdf-files",
    category: "Outils PDF",
    date: "2026-01-22",
    readTime: "5 min",
    title: "Comment diviser un fichier PDF : extraire des pages ou enregistrer des fichiers séparés",
    description: "Apprenez à extraire une page, une plage ou à diviser chaque page dans son propre PDF — rapide, gratuit et dans votre navigateur.",
    content: splitPdfFr,
  },
  de: {
    slug: "how-to-split-pdf-files",
    category: "PDF-Werkzeuge",
    date: "2026-01-22",
    readTime: "5 Min",
    title: "PDF-Datei teilen: Seiten extrahieren oder separate Dateien speichern",
    description: "Lernen Sie, eine Seite, einen Bereich oder jede Seite in ein eigenes PDF zu extrahieren — schnell, kostenlos und im Browser.",
    content: splitPdfDe,
  },
};
