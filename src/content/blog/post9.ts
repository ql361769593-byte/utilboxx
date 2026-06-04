// Blog post: How to Reorder PDF Pages
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const reorderPdfEn = `## Why reorder PDF pages?

PDFs are designed to be linear and self-contained, which makes them easy to read in order but surprisingly painful to rearrange. A scanned contract might be in reverse order because the feeder pulled pages out of sequence. A report you assembled from multiple sources has the cover at the end. A photo album needs the pages in chronological order. In each case, the answer is the same: reorder the pages.

The reasons people need to reorder pages are practical and frequent:

- **Assemble a report**: Combine the cover, table of contents, body, and appendices from separate PDFs into a single, correctly ordered document.
- **Fix scan order**: Some scanners output pages in reverse order. A 50-page scan may have page 1 at the back and page 50 at the front.
- **Rearrange a contract**: A signed contract may have the signature pages out of place. Reorder so the signature page falls at the end, where it belongs.
- **Reorder photos**: A photo album exported from a phone often comes back with the order scrambled. Reorder before printing or sharing.
- **Combine chapters**: Pull chapter 3 from a draft and put it where chapter 7 used to be, while keeping the rest of the document intact.
- **Tear out a section**: Move pages 12-15 to the very front as an executive summary, with the rest of the report behind.

The good news: with the right tool, reordering pages is a 30-second drag-and-drop job, and you do not need to install anything.

## Method 1: Use UtilBoxx's Free PDF Page Reorder Tool (Recommended)

The fastest, safest, and most private way to reorder pages is [UtilBoxx's PDF Reorder tool](/en/tools/pdf/reorder). It runs entirely in your browser, so your file never leaves your device. There is no upload, no signup, no watermark, and no daily limit.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/pdf/reorder](/en/tools/pdf/reorder)
2. Click the upload area and select your PDF (or drag and drop)
3. The tool displays every page as a thumbnail in a grid
4. **Drag and drop** the thumbnails into the new order you want
5. Click "Process"
6. Download the reordered PDF

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. The file never reaches a server.
- **Visual drag-and-drop**: see every page as a thumbnail and rearrange with the mouse
- **Works on any device**: Windows, Mac, Linux, ChromeOS, iOS, Android — any modern browser
- **Undo friendly**: reorder freely, preview the new order, then save
- **No watermarks** on the output
- **No quality loss**: pages are moved, not re-encoded

If you only need to reorder pages occasionally, this is by far the lowest-friction option.

## Method 2: Adobe Acrobat Pro (Paid)

Adobe Acrobat Pro is the heavyweight of the PDF world and the default for many legal, publishing, and corporate teams. Its "Organize Pages" view shows every page as a thumbnail in a grid. You can click and drag a page to a new position, and Acrobat inserts it where you drop it. The interface is polished, the visual feedback is immediate, and you can also rotate, delete, or insert blank pages from the same view.

The catch is the price. Acrobat Pro costs roughly **$19.99 per month** (about $240 per year) on a subscription. For a one-off reordering job, that is a poor trade. You also need a desktop install, which can be heavy on older machines.

Acrobat is worth it only if you already use it for editing, redaction, e-signatures, or form creation. If reordering is all you need, a browser-based tool does the job without the bill.

## Method 3: Command line with qpdf

If you are comfortable in a terminal, the open-source tool **qpdf** is the most reliable CLI option for reordering. Install it with Homebrew (\`brew install qpdf\`), then:

\`\`\`bash
# Reorder: take pages 1, 5, 3, 7, 2, 4, 6 from input.pdf and write them in that order to out.pdf
qpdf input.pdf --pages input.pdf 1,5,3,7,2,4,6 -- out.pdf

# Reverse the order of all pages (10-page document)
qpdf input.pdf --pages input.pdf 10,9,8,7,6,5,4,3,2,1 -- out.pdf

# Move page 4 to the front, keep the rest in order
qpdf input.pdf --pages input.pdf 4,1,2,3,5-10 -- out.pdf
\`\`\`

The \`--pages\` flag is the Swiss army knife of qpdf: it takes a comma-separated list of page numbers in any order and writes them to the output in that order. \`qpdf\` is fast, lightweight, and unbeatable for scripted batch reordering across hundreds of files. The \`pdftk\` tool offers similar capabilities but is unmaintained and pulls in heavy Java dependencies — qpdf is the better choice today.

## Common questions

### Does reordering pages reduce quality?

No. Reordering copies the original page content into a new container without re-encoding anything. Text remains crisp, images stay at their original resolution, fonts are preserved exactly, and the only thing that changes is the page order. The output PDF is bit-for-bit the same content in a new sequence.

### Can I reorder pages and rotate them at the same time?

Yes. With [UtilBoxx's PDF Reorder tool](/en/tools/pdf/reorder), you can drag pages into the order you want; for rotation, run the reorder first, then the [PDF Rotate tool](/en/tools/pdf/rotate) on the result. With qpdf, you can use the \`--rotate\` flag alongside \`--pages\` to apply both transformations in one pass.

### What is the difference between reordering and merging?

**Reordering** rearranges the pages inside a single PDF. **Merging** combines multiple PDFs into one. If you need both — pulling chapters from several PDFs and arranging them in a specific order — use [UtilBoxx's PDF Merge tool](/en/tools/pdf/merge) first to combine the files, then [PDF Reorder](/en/tools/pdf/reorder) to arrange the final page order.

### Can I move just one page to a new position?

Yes. In UtilBoxx's reorder tool, drag a single thumbnail to the new location and drop it. With qpdf, list the target page where you want it in the \`--pages\` argument. For example, to move page 7 to the front: \`qpdf input.pdf --pages input.pdf 7,1-6,8-10 -- out.pdf\`.

### Is it safe to use an online PDF reorder tool?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your file is being uploaded to a remote server and read their privacy policy carefully. Avoid uploading any document containing personal, financial, medical, or legally sensitive information to a reorder tool you do not trust.

### Will the bookmarks and links still work after reordering?

This depends on the tool. UtilBoxx preserves internal links in most cases but does not rewrite bookmark targets — if you have a complex bookmark structure, re-running the bookmarks against the new page order is a good idea. Acrobat Pro offers full bookmark rewriting on reorder, and qpdf can be combined with its \`--update-bookmarks\` option to keep cross-references intact.

## Conclusion

Reordering PDF pages is one of those small tasks that comes up constantly — and should not require a paid subscription or a software install. For most people, [UtilBoxx's free PDF Reorder tool](/en/tools/pdf/reorder) is the obvious choice: it is private, fast, free, with no signup and no watermark.

If you already pay for Adobe Acrobat for other reasons, its "Organize Pages" view is excellent. If you are scripting batch work, qpdf in the terminal is unbeatable.

For everything else, head to [UtilBoxx PDF tools](/en/tools/pdf) and you will find a complete, privacy-first toolkit for working with PDFs — all in your browser.`;

const reorderPdfZh = `## 为什么要重排 PDF 页面？

PDF 的设计目标就是线性和自包含，这让按顺序阅读很容易，但重新排列却意外地痛苦。一份扫描合同可能因为进纸器抽走了页序而前后颠倒；一份你从多处来源拼装的报告封面跑到了末尾；一本电子相册需要按时间排序。每种情况的答案都是同一个：重排页面。

人们需要重排页面的原因既实际又频繁：

- **拼装报告**：把封面、目录、正文、附录从不同 PDF 拼成一份顺序正确的文档。
- **修正扫描顺序**：有些扫描仪会倒序输出，50 页的扫描可能第 1 页在最末、第 50 页在最前。
- **重排合同**：签好的合同签名页位置不对，重排后让签名页落在应有的末尾。
- **整理照片**：从手机导出的相册经常顺序错乱，打印或分享前需要重排。
- **重组章节**：把第 3 章从草稿里抽出来放到原本是第 7 章的位置，其它部分保持不变。
- **前置摘要**：把第 12-15 页移到最前面作为执行摘要，正文跟在后面。

好消息是：只要用对工具，重排页面是 30 秒的拖放操作，而且不需要装任何东西。

## 方法一：使用 UtilBoxx 免费 PDF 页面重排工具（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的 PDF 重排工具](/zh/tools/pdf/reorder)。它完全在你的浏览器中运行，文件不会离开你的设备。没有上传、没有注册、输出文件没有水印，也没有每日次数限制。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/pdf/reorder](/zh/tools/pdf/reorder)
2. 点击上传区域选择你的 PDF（或直接拖入）
3. 工具以网格形式显示每一页的缩略图
4. **拖放** 缩略图到你想要的新顺序
5. 点击"开始处理"
6. 下载重排后的 PDF

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，文件不会上传到任何服务器
- **可视化拖放**：以缩略图看到每一页，用鼠标重新排列
- **全设备支持**：Windows、Mac、Linux、ChromeOS、iOS、Android —— 任何现代浏览器都行
- **可撤销**：自由重排、预览新顺序、再保存
- **输出 PDF 无水印**
- **无质量损失**：只是移动页面，不会重新编码

如果你只是偶尔需要重排页面，这是最省心的选择。

## 方法二：Adobe Acrobat Pro（付费）

Adobe Acrobat Pro 是 PDF 领域的重量级选手，也是很多法务、出版和企业团队的默认工具。它的"组织页面"视图把每一页都显示为网格中的缩略图。你可以点击并拖动页面到新位置，Acrobat 会把它插入到你松手的地方。界面精致、视觉反馈即时，在同一个视图里你还可以旋转、删除、或插入空白页。

代价是价格。Acrobat Pro 订阅版大约 **每月 $19.99**（每年约 $240 美元）。如果只是偶尔重排一次，这个投入显然不划算。你还需要桌面安装，对老机器也不太友好。

只有当你已经用它做编辑、涂黑、电子签名或表单创建时，Acrobat 才值得。否则，浏览器工具完全够用，还免了账单。

## 方法三：命令行 qpdf

如果你熟悉终端，开源工具 **qpdf** 是命令行里最可靠的重排方案。用 Homebrew 安装（\`brew install qpdf\`）后：

\`\`\`bash
# 重排：从 input.pdf 取第 1、5、3、7、2、4、6 页，按这个顺序写入 out.pdf
qpdf input.pdf --pages input.pdf 1,5,3,7,2,4,6 -- out.pdf

# 反转全部页面顺序（10 页文档）
qpdf input.pdf --pages input.pdf 10,9,8,7,6,5,4,3,2,1 -- out.pdf

# 把第 4 页移到最前，其它保持顺序
qpdf input.pdf --pages input.pdf 4,1,2,3,5-10 -- out.pdf
\`\`\`

\`--pages\` 是 qpdf 的瑞士军刀：它接受任意顺序的逗号分隔页码列表，按你写的顺序写入输出。**qpdf** 快速、轻量、对成百上千个文件做脚本化批量重排无可替代。\`pdftk\` 也能做类似的事，但已停止维护且依赖庞大的 Java 运行时 —— qpdf 是当下更好的选择。

## 常见问题

### 重排页面会降低质量吗？

不会。重排只是把原始页面内容复制到新的容器，不重新编码。文字保持锐利、图片保持原始分辨率、字体保持原样。输出的 PDF 在内容上和原来完全一样，只是页面顺序变了。

### 可以在重排的同时旋转页面吗？

可以。使用 [UtilBoxx 的 PDF 重排工具](/zh/tools/pdf/reorder)，把页面拖到想要的位置；旋转的话，先重排再用 [PDF 旋转工具](/zh/tools/pdf/rotate) 处理结果。用 qpdf 的话，可以在 \`--pages\` 的同时使用 \`--rotate\` 标志，一次完成两件事。

### 重排和合并有什么区别？

**重排** 是调整单个 PDF 内部的页面顺序。**合并** 是把多个 PDF 合成一个。如果你需要两者 —— 从多个 PDF 抽取章节并按特定顺序排列 —— 先用 [UtilBoxx 的 PDF 合并工具](/zh/tools/pdf/merge) 合并文件，再用 [PDF 重排工具](/zh/tools/pdf/reorder) 整理最终页序。

### 能把单独一页移到新位置吗？

可以。在 UtilBoxx 的重排工具里，把单张缩略图拖到新位置松手即可。用 qpdf 时，在 \`--pages\` 参数里把目标页写到你想要的位置。例如，把第 7 页移到最前：\`qpdf input.pdf --pages input.pdf 7,1-6,8-10 -- out.pdf\`。

### 使用在线 PDF 重排工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的文件会被上传到远程服务器，并仔细阅读隐私政策。避免向你不信任的重排工具上传任何包含个人、财务、医疗或法律敏感信息的文件。

### 重排之后书签和链接还能用吗？

这取决于工具。UtilBoxx 在大多数情况下会保留内部链接，但不会重写书签目标 —— 如果你有复杂的书签结构，建议重排后重新生成书签。Acrobat Pro 在重排时会完整重写书签，qpdf 也可以结合 \`--update-bookmarks\` 选项保持交叉引用完整。

## 结论

重排 PDF 页面是一件经常要做的小事 —— 不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费 PDF 重排工具](/zh/tools/pdf/reorder) 是显而易见的选择：私密、快速、免费、无需注册、无水印。

如果你已经为 Adobe Acrobat 付了费，那它的"组织页面"视图也很优秀。如果你写脚本做批量处理，qpdf 在终端里无可替代。

其他情况下，去看 [UtilBoxx 的 PDF 工具集](/zh/tools/pdf)，你会找到一个完整的、隐私优先的 PDF 处理工具箱 —— 全部在浏览器里完成。`;

const reorderPdfJa = `## なぜ PDF ページを並び替えるのか？

PDF はリニアで自己完結的に設計されているため、順番に読むのは簡単ですが、並び替えるのは意外に苦痛です。スキャンした契約書は、給紙トレイがページ順を乱すため前後逆になっているかもしれません。複数のソースから組み立てたレポートの表紙が最後に来ているかもしれません。スマホから書き出したフォトアルバムの順番がバラバラかもしれません。どのケースでも答えは、ページを並び替えることです。

ページを並び替える必要がある理由は、実際的でしかも頻繁です：

- **レポートの組み立て**：表紙・目次・本文・付録を別々の PDF から 1 つの正しい順番の文書にまとめる。
- **スキャン順の修正**：一部のスキャナは逆順で出力します。50 ページのスキャンで 1 ページ目が最後、50 ページ目が最初、なんてことがあります。
- **契約書の再構成**：署名済みの契約書で署名ページが所定の位置にない。署名ページが末尾にくるよう並び替える。
- **写真の整理**：スマホからエクスポートしたアルバムは順番がバラバラなことが多い。印刷や共有前に並び替える。
- **章の再構成**：ドラフトから第 3 章を抜き出して第 7 章のあった場所に置く。残りはそのまま。
- **セクションを前に出す**：12〜15 ページを実行概要として冒頭に移動し、本文をその後ろに続ける。

良いニュースは、適切なツールを使えば、ページ並び替えは 30 秒のドラッグ＆ドロップで終わり、何もインストールする必要がないことです。

## 方法 1：UtilBoxx の無料 PDF ページ並び替えツール（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の PDF 並び替えツール](/ja/tools/pdf/reorder) です。完全にブラウザ内で動作するため、ファイルがデバイスの外に出ることがありません。アップロードも登録も不要、透かしも入りません、利用回数制限もありません。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/pdf/reorder](/ja/tools/pdf/reorder) を開く
2. アップロード領域をクリックして PDF を選択（またはドラッグ＆ドロップ）
3. ツールが全ページをサムネールグリッドで表示
4. サムネールを **ドラッグ＆ドロップ** して希望の順番に
5.「処理」をクリック
6. 並び替えた PDF をダウンロード

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべての処理がブラウザ内で完結。ファイルはサーバーへ送信されません
- **ビジュアルなドラッグ＆ドロップ**：全ページをサムネールで見て、マウスで再配置
- **あらゆるデバイスで動作**：Windows、Mac、Linux、ChromeOS、iOS、Android
- **やり直し自在**：自由に並び替えて新しい順番をプレビューしてから保存
- **出力 PDF に透かしなし**
- **品質劣化なし**：ページを移動するだけで再エンコードしない

たまにページを並び替えるだけなら、これほど低コストな選択肢はありません。

## 方法 2：Adobe Acrobat Pro（有料）

Adobe Acrobat Pro は PDF 界のヘビー級で、法務・出版・企業チームの定番です。「ページ構成」ビューでは全ページがサムネールグリッドで表示されます。ページをクリック＆ドラッグして新しい位置に移動し、ドロップした位置に挿入されます。インターフェースは洗練され、視覚的フィードバックが即座で、同じビューからページの回転・削除・空白挿入もできます。

ただし価格が高めです。Acrobat Pro はサブスクリプションで月額約 **$19.99**（年額約 $240）。一度だけ並び替える用途なら割に合いません。デスクトップインストールが必要なので、古いマシンには負担です。

既に編集・墨消し・電子署名・フォーム作成などのために Acrobat を利用しているなら価値があります。並び替えだけが目的であれば、ブラウザツールで十分です。

## 方法 3：コマンドラインで qpdf

ターミナルに慣れているなら、オープンソースの **qpdf** が並び替え用の CLI として最も信頼できます。Homebrew でインストール（\`brew install qpdf\`）したら：

\`\`\`bash
# 並び替え：input.pdf から 1、5、3、7、2、4、6 ページを取り、その順で out.pdf に書き出す
qpdf input.pdf --pages input.pdf 1,5,3,7,2,4,6 -- out.pdf

# 全ページを逆順に（10 ページのドキュメント）
qpdf input.pdf --pages input.pdf 10,9,8,7,6,5,4,3,2,1 -- out.pdf

# 4 ページ目を先頭に移動、残りは順番維持
qpdf input.pdf --pages input.pdf 4,1,2,3,5-10 -- out.pdf
\`\`\`

\`--pages\` は qpdf のスイスアーミーナイフで、カンマ区切りのページ番号リストを任意順で受け取り、その順で出力に書き込みます。**qpdf** は高速・軽量で、何百ものファイルをバッチ並び替えするスクリプトに最強です。\`pdftk\` も同様の機能を持ちますが、メンテナンスされておらず重い Java 依存があります —— 現状は qpdf のほうが優れています。

## よくある質問

### ページの並び替えで品質は落ちますか？

落ちません。並び替えは元の内容を新しいコンテナにコピーするだけで、何も再エンコードされません。文字はシャープなまま、画像も元の解像度のまま、フォントもそのままです。出力 PDF は内容が完全に同じで、ページ順だけが異なります。

### 並び替えと回転を同時にできますか？

できます。[UtilBoxx の PDF 並び替えツール](/ja/tools/pdf/reorder) では、ページをドラッグして希望の順番に配置できます。回転もしたい場合は、先に並び替えてから [PDF 回転ツール](/ja/tools/pdf/rotate) を通してください。qpdf の場合は \`--pages\` と同時に \`--rotate\` フラグを使えば、1 パスで両方の変換を行えます。

### 並び替えとマージの違いは何ですか？

**並び替え** は 1 つの PDF 内のページ順を変えることです。**マージ** は複数の PDF を 1 つに結合することです。両方が必要な場合 —— 複数の PDF から章を抜き出し特定の順番に並べる —— まず [UtilBoxx の PDF マージツール](/ja/tools/pdf/merge) でファイルを結合し、次に [PDF 並び替えツール](/ja/tools/pdf/reorder) で最終的なページ順を整理します。

### 1 ページだけを新しい位置に移動できますか？

できます。UtilBoxx の並び替えツールでは、1 つのサムネールを新しい位置にドラッグしてドロップします。qpdf では \`--pages\` 引数で対象ページを任意の場所に書きます。例えば 7 ページ目を先頭にするには：\`qpdf input.pdf --pages input.pdf 7,1-6,8-10 -- out.pdf\`。

### オンラインの PDF 並び替えツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、ファイルがリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人情報、財務、医療、法的に機密性の高い情報を含む文書は、信頼できない並び替えツールにアップロードしないでください。

### 並び替え後もブックマークやリンクは使えますか？

ツール次第です。UtilBoxx は多くの場合内部リンクを保持しますが、ブックマークのリンク先までは書き換えません。複雑なブックマーク構造がある場合は、並び替え後にブックマークを再生成することをお勧めします。Acrobat Pro は並び替え時にブックマークを完全に書き換え、qpdf は \`--update-bookmarks\` オプションと組み合わせて相互参照を維持できます。

## まとめ

PDF ページの並び替えは頻繁に発生する小さな作業であり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料 PDF 並び替えツール](/ja/tools/pdf/reorder) は明白な選択です：プライベートで、速くて、無料で、登録不要、透かしなし。

Adobe Acrobat を他用途で既に利用しているなら、「ページ構成」ビューが優れています。バッチ処理をスクリプト化したいなら、ターミナルで qpdf が最強です。

その他は、[UtilBoxx の PDF ツール](/ja/tools/pdf) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先の PDF ツールキットが見つかります。`;

const reorderPdfEs = `## ¿Por qué reordenar páginas de un PDF?

Los PDF están diseñados para ser lineales y autosuficientes, lo que los hace fáciles de leer en orden, pero sorprendentemente difíciles de reordenar. Un contrato escaneado puede llegar en orden inverso porque el alimentador extrajo las páginas fuera de secuencia. Un informe que armaste desde varias fuentes tiene la portada al final. Un álbum de fotos necesita las páginas en orden cronológico. En cada caso, la respuesta es la misma: reordenar las páginas.

Las razones por las que la gente necesita reordenar páginas son prácticas y frecuentes:

- **Armar un informe**: Combina portada, índice, cuerpo y apéndices de PDFs separados en un único documento correctamente ordenado.
- **Corregir el orden del escaneo**: Algunos escáneres sacan las páginas al revés. Un escaneo de 50 páginas puede tener la página 1 al final y la 50 al principio.
- **Reordenar un contrato**: Un contrato firmado puede tener las páginas de firma fuera de lugar. Reordénalo para que la página de firma quede al final, donde corresponde.
- **Reordenar fotos**: Un álbum exportado desde el móvil suele llegar con el orden mezclado. Reordénalo antes de imprimir o compartir.
- **Reorganizar capítulos**: Toma el capítulo 3 de un borrador y ponlo donde estaba el capítulo 7, dejando el resto intacto.
- **Poner un fragmento al principio**: Mueve las páginas 12-15 al frente como resumen ejecutivo, con el resto detrás.

La buena noticia: con la herramienta adecuada, reordenar páginas es un trabajo de 30 segundos arrastrando y soltando, y no necesitas instalar nada.

## Método 1: Usa el reordenador de páginas PDF gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de reordenar páginas es la [herramienta de reordenar PDF de UtilBoxx](/es/tools/pdf/reorder). Se ejecuta por completo en tu navegador, por lo que el archivo nunca sale de tu dispositivo. Sin subidas, sin registro, sin marca de agua y sin límite diario.

Así se usa:

1. Ve a [utilboxx.com/es/tools/pdf/reorder](/es/tools/pdf/reorder)
2. Haz clic en el área de subida y selecciona tu PDF (o arrástralo)
3. La herramienta muestra cada página como miniatura en una cuadrícula
4. **Arrastra y suelta** las miniaturas en el nuevo orden
5. Haz clic en "Procesar"
6. Descarga el PDF reordenado

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. El archivo nunca llega a un servidor.
- **Arrastrar y soltar visual**: ve cada página como miniatura y reordena con el ratón
- **Funciona en cualquier dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Reversible**: reordena libremente, previsualiza el nuevo orden y guarda
- **Sin marcas de agua** en el resultado
- **Sin pérdida de calidad**: las páginas se mueven, no se re-codifican

Si solo necesitas reordenar páginas de vez en cuando, esta es la opción de menor fricción con diferencia.

## Método 2: Adobe Acrobat Pro (De pago)

Adobe Acrobat Pro es el peso pesado del mundo PDF y la herramienta por defecto de muchos equipos legales, editoriales y corporativos. Su vista "Organizar páginas" muestra cada página como miniatura en una cuadrícula. Puedes hacer clic y arrastrar una página a una nueva posición, y Acrobat la inserta donde la sueltes. La interfaz es pulida, la respuesta visual es inmediata, y desde la misma vista también puedes rotar, eliminar o insertar páginas en blanco.

El inconveniente es el precio. Acrobat Pro cuesta aproximadamente **$19.99 al mes** (unos $240 al año) en suscripción. Para un reordenado puntual, es una mala relación calidad-precio. También requiere instalación de escritorio, que puede ser pesada en máquinas antiguas.

Acrobat solo vale la pena si ya lo usas para edición, redacción, firmas electrónicas o creación de formularios. Si reordenar es todo lo que necesitas, una herramienta basada en el navegador hace el trabajo sin la factura.

## Método 3: Línea de comandos con qpdf

Si te manejas en la terminal, la herramienta de código abierto **qpdf** es la opción CLI más fiable para reordenar. Instálala con Homebrew (\`brew install qpdf\`), luego:

\`\`\`bash
# Reordenar: tomar las páginas 1, 5, 3, 7, 2, 4, 6 de input.pdf y escribirlas en ese orden en out.pdf
qpdf input.pdf --pages input.pdf 1,5,3,7,2,4,6 -- out.pdf

# Invertir el orden de todas las páginas (documento de 10 páginas)
qpdf input.pdf --pages input.pdf 10,9,8,7,6,5,4,3,2,1 -- out.pdf

# Mover la página 4 al frente, mantener el resto en orden
qpdf input.pdf --pages input.pdf 4,1,2,3,5-10 -- out.pdf
\`\`\`

El parámetro \`--pages\` es la navaja suiza de qpdf: acepta una lista separada por comas de números de página en cualquier orden y los escribe en la salida en ese orden. **qpdf** es rápido, ligero e imbatible para programar reordenamientos por lotes sobre cientos de archivos. La herramienta \`pdftk\` ofrece capacidades similares, pero no se mantiene y arrastra pesadas dependencias de Java — qpdf es la mejor opción hoy.

## Preguntas frecuentes

### ¿Reordenar páginas reduce la calidad?

No. Reordenar copia el contenido original de las páginas en un nuevo contenedor sin re-codificar nada. El texto permanece nítido, las imágenes mantienen su resolución original, las fuentes se conservan exactamente, y lo único que cambia es el orden de las páginas. El PDF de salida es idéntico en contenido al original, solo en una nueva secuencia.

### ¿Puedo reordenar y rotar páginas al mismo tiempo?

Sí. Con la [herramienta de reordenar PDF de UtilBoxx](/es/tools/pdf/reorder), arrastra las páginas al orden que quieras; para rotar, reordena primero y luego pasa la [herramienta de rotar PDF](/es/tools/pdf/rotate) sobre el resultado. Con qpdf puedes usar el parámetro \`--rotate\` junto a \`--pages\` para aplicar ambas transformaciones en una sola pasada.

### ¿Cuál es la diferencia entre reordenar y fusionar?

**Reordenar** reorganiza las páginas dentro de un único PDF. **Fusionar** combina varios PDFs en uno. Si necesitas ambas cosas — extraer capítulos de varios PDFs y organizarlos en un orden concreto — usa primero la [herramienta de fusionar PDF de UtilBoxx](/es/tools/pdf/merge) para combinar los archivos y luego la [herramienta de reordenar PDF](/es/tools/pdf/reorder) para arreglar el orden final.

### ¿Puedo mover solo una página a una nueva posición?

Sí. En la herramienta de reordenar de UtilBoxx, arrastra una sola miniatura a la nueva ubicación y suéltala. Con qpdf, lista la página objetivo donde quieras en el argumento \`--pages\`. Por ejemplo, para mover la página 7 al frente: \`qpdf input.pdf --pages input.pdf 7,1-6,8-10 -- out.pdf\`.

### ¿Es seguro usar un reordenador de PDF online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador**: sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tu archivo se está subiendo a un servidor remoto y lee atentamente su política de privacidad. Evita subir a un reordenador en el que no confías cualquier documento con información personal, financiera, médica o legalmente sensible.

### ¿Los marcadores y enlaces seguirán funcionando después de reordenar?

Depende de la herramienta. UtilBoxx conserva los enlaces internos en la mayoría de los casos, pero no reescribe los destinos de los marcadores: si tienes una estructura de marcadores compleja, conviene regenerar los marcadores tras reordenar. Acrobat Pro reescribe por completo los marcadores al reordenar, y qpdf puede combinarse con la opción \`--update-bookmarks\` para mantener las referencias cruzadas.

## Conclusión

Reordenar páginas de un PDF es una de esas pequeñas tareas que aparecen constantemente y no deberían requerir una suscripción de pago o instalar software. Para la mayoría de la gente, la [herramienta gratuita de reordenar PDF de UtilBoxx](/es/tools/pdf/reorder) es la opción obvia: es privada, rápida, gratis, sin registro y sin marca de agua.

Si ya pagas Adobe Acrobat por otras razones, su vista "Organizar páginas" es excelente. Si estás programando trabajo por lotes, qpdf en la terminal es imbatible.

Para todo lo demás, visita las [herramientas PDF de UtilBoxx](/es/tools/pdf) y encontrarás un conjunto completo de herramientas para trabajar con PDF, con privacidad como prioridad, todo en tu navegador.`;

const reorderPdfPt = `## Por que reordenar páginas de um PDF?

PDFs são projetados para serem lineares e autocontidos, o que os torna fáceis de ler em ordem, mas surpreendentemente dolorosos de reordenar. Um contrato escaneado pode chegar na ordem inversa porque o alimentador puxou as páginas fora de sequência. Um relatório montado a partir de várias fontes tem a capa no final. Um álbum de fotos precisa das páginas em ordem cronológica. Em cada caso, a resposta é a mesma: reordenar as páginas.

Os motivos pelos quais as pessoas precisam reordenar páginas são práticos e frequentes:

- **Montar um relatório**: combine capa, sumário, corpo e apêndices de PDFs separados em um único documento na ordem correta.
- **Corrigir a ordem da digitalização**: alguns scanners emitem as páginas ao contrário. Uma digitalização de 50 páginas pode ter a página 1 no final e a 50 no começo.
- **Reordenar um contrato**: um contrato assinado pode ter as páginas de assinatura fora do lugar. Reordene para que a página de assinatura fique no final, onde deve estar.
- **Reordenar fotos**: um álbum exportado do celular geralmente chega com a ordem bagunçada. Reordene antes de imprimir ou compartilhar.
- **Reorganizar capítulos**: pegue o capítulo 3 de um rascunho e coloque-o onde estava o capítulo 7, mantendo o restante intacto.
- **Destacar uma seção**: mova as páginas 12-15 para o início como resumo executivo, com o restante atrás.

A boa notícia: com a ferramenta certa, reordenar páginas é um trabalho de 30 segundos com arrastar e soltar, e você não precisa instalar nada.

## Método 1: Use a ferramenta gratuita de reordenar páginas PDF do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de reordenar páginas é a [ferramenta de reordenar PDF do UtilBoxx](/pt/tools/pdf/reorder). Ela roda inteiramente no seu navegador, então o arquivo nunca sai do seu dispositivo. Sem upload, sem cadastro, sem marca d'água e sem limite diário.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/pdf/reorder](/pt/tools/pdf/reorder)
2. Clique na área de upload e selecione seu PDF (ou arraste e solte)
3. A ferramenta mostra cada página como miniatura em uma grade
4. **Arraste e solte** as miniaturas na nova ordem
5. Clique em "Processar"
6. Baixe o PDF reordenado

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. O arquivo nunca chega a um servidor.
- **Arrastar e soltar visual**: veja cada página como miniatura e reordene com o mouse
- **Funciona em qualquer dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Reversível**: reordene à vontade, visualize a nova ordem e salve
- **Sem marcas d'água** no resultado
- **Sem perda de qualidade**: as páginas são movidas, não recodificadas

Se você só precisa reordenar páginas de vez em quando, essa é a opção de menor atrito disparado.

## Método 2: Adobe Acrobat Pro (Pago)

Adobe Acrobat Pro é o peso-pesado do mundo PDF e a ferramenta padrão de muitas equipes jurídicas, editoriais e corporativas. Sua visualização "Organizar páginas" mostra cada página como miniatura em uma grade. Você pode clicar e arrastar uma página para uma nova posição, e o Acrobat a insere onde você soltar. A interface é polida, a resposta visual é imediata, e na mesma visualização você também pode girar, excluir ou inserir páginas em branco.

O problema é o preço. Acrobat Pro custa cerca de **$19.99 por mês** (aproximadamente $240 por ano) na assinatura. Para um reordenamento pontual, é uma troca ruim. Também requer instalação desktop, que pode ser pesada em máquinas antigas.

Acrobat vale a pena apenas se você já o usa para edição, redação, assinaturas eletrônicas ou criação de formulários. Se reordenar é tudo o que você precisa, uma ferramenta baseada em navegador faz o trabalho sem a fatura.

## Método 3: Linha de comando com qpdf

Se você se sente confortável no terminal, a ferramenta open-source **qpdf** é a opção CLI mais confiável para reordenar. Instale com Homebrew (\`brew install qpdf\`), depois:

\`\`\`bash
# Reordenar: pegar as páginas 1, 5, 3, 7, 2, 4, 6 de input.pdf e gravá-las nessa ordem em out.pdf
qpdf input.pdf --pages input.pdf 1,5,3,7,2,4,6 -- out.pdf

# Inverter a ordem de todas as páginas (documento de 10 páginas)
qpdf input.pdf --pages input.pdf 10,9,8,7,6,5,4,3,2,1 -- out.pdf

# Mover a página 4 para o início, manter o restante em ordem
qpdf input.pdf --pages input.pdf 4,1,2,3,5-10 -- out.pdf
\`\`\`

O parâmetro \`--pages\` é o canivete suíço do qpdf: aceita uma lista de números de página separados por vírgula em qualquer ordem e os grava na saída nessa ordem. **qpdf** é rápido, leve e imbatível para programar reordenamentos em lote em centenas de arquivos. A ferramenta \`pdftk\` oferece recursos similares, mas não é mantida e traz dependências pesadas de Java — qpdf é a melhor escolha hoje.

## Perguntas frequentes

### Reordenar páginas reduz a qualidade?

Não. Reordenar copia o conteúdo original das páginas em um novo contêiner sem recodificar nada. O texto permanece nítido, as imagens mantêm sua resolução original, as fontes são preservadas exatamente, e a única coisa que muda é a ordem das páginas. O PDF de saída é idêntico em conteúdo ao original, apenas em uma nova sequência.

### Posso reordenar e girar páginas ao mesmo tempo?

Sim. Com a [ferramenta de reordenar PDF do UtilBoxx](/pt/tools/pdf/reorder), arraste as páginas para a ordem que quiser; para girar, reordene primeiro e depois passe a [ferramenta de girar PDF](/pt/tools/pdf/rotate) no resultado. Com qpdf você pode usar o parâmetro \`--rotate\` junto com \`--pages\` para aplicar ambas as transformações em uma única passada.

### Qual a diferença entre reordenar e mesclar?

**Reordenar** reorganiza as páginas dentro de um único PDF. **Mesclar** combina vários PDFs em um. Se você precisa dos dois — extrair capítulos de vários PDFs e organizá-los em uma ordem específica — use primeiro a [ferramenta de mesclar PDF do UtilBoxx](/pt/tools/pdf/merge) para combinar os arquivos e depois a [ferramenta de reordenar PDF](/pt/tools/pdf/reorder) para arrumar a ordem final.

### Posso mover apenas uma página para uma nova posição?

Sim. Na ferramenta de reordenar do UtilBoxx, arraste uma única miniatura para a nova localização e solte. Com qpdf, liste a página de destino onde quiser no argumento \`--pages\`. Por exemplo, para mover a página 7 para o início: \`qpdf input.pdf --pages input.pdf 7,1-6,8-10 -- out.pdf\`.

### É seguro usar um reordenador de PDF online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que seu arquivo está sendo enviado para um servidor remoto e leia atentamente sua política de privacidade. Evite enviar a um reordenador em que você não confia qualquer documento com informações pessoais, financeiras, médicas ou legalmente sensíveis.

### Os marcadores e links continuarão funcionando depois de reordenar?

Depende da ferramenta. O UtilBoxx preserva os links internos na maioria dos casos, mas não reescreve os destinos dos marcadores: se você tem uma estrutura de marcadores complexa, é recomendável regenerar os marcadores após reordenar. O Acrobat Pro reescreve por completo os marcadores ao reordenar, e o qpdf pode ser combinado com a opção \`--update-bookmarks\` para manter as referências cruzadas.

## Conclusão

Reordenar páginas de um PDF é uma daquelas pequenas tarefas que surgem constantemente e não deveriam exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, a [ferramenta gratuita de reordenar PDF do UtilBoxx](/pt/tools/pdf/reorder) é a escolha óbvia: é privada, rápida, grátis, sem cadastro e sem marca d'água.

Se você já paga pelo Adobe Acrobat por outros motivos, sua visualização "Organizar páginas" é excelente. Se você está programando trabalho em lote, qpdf no terminal é imbatível.

Para todo o resto, visite as [ferramentas PDF do UtilBoxx](/pt/tools/pdf) e você encontrará um conjunto completo de ferramentas para trabalhar com PDFs, com privacidade como prioridade, tudo no seu navegador.`;

const reorderPdfFr = `## Pourquoi réorganiser les pages d'un PDF ?

Les PDF sont conçus pour être linéaires et autonomes, ce qui les rend faciles à lire dans l'ordre mais étonnamment pénibles à réorganiser. Un contrat scanné peut arriver dans l'ordre inverse parce que le chargeur a sorti les pages dans le désordre. Un rapport assemblé à partir de plusieurs sources a sa couverture à la fin. Un album photo a besoin des pages dans l'ordre chronologique. Dans chaque cas, la réponse est la même : réorganiser les pages.

Les raisons pour lesquelles on doit réorganiser des pages sont pratiques et fréquentes :

- **Assembler un rapport** : combiner couverture, sommaire, corps et annexes de PDF séparés en un seul document correctement ordonné.
- **Corriger l'ordre du scan** : certains scanners sortent les pages à l'envers. Un scan de 50 pages peut avoir la page 1 à la fin et la page 50 au début.
- **Réordonner un contrat** : un contrat signé peut avoir les pages de signature mal placées. Réorganisez pour que la page de signature tombe à la fin, là où elle doit être.
- **Réordonner des photos** : un album exporté depuis un téléphone arrive souvent dans le désordre. Réorganisez avant d'imprimer ou de partager.
- **Réagencer des chapitres** : prendre le chapitre 3 d'un brouillon et le placer là où était le chapitre 7, en gardant le reste intact.
- **Mettre une section en avant** : déplacer les pages 12 à 15 tout devant en tant que résumé exécutif, avec le reste derrière.

Bonne nouvelle : avec le bon outil, réorganiser des pages est un travail de 30 secondes en glisser-déposer, et vous n'avez rien à installer.

## Méthode 1 : Utiliser le réorganisateur de pages PDF gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de réorganiser des pages est l'[outil de réorganisation PDF de UtilBoxx](/fr/tools/pdf/reorder). Il s'exécute entièrement dans votre navigateur, donc le fichier ne quitte jamais votre appareil. Pas de téléversement, pas d'inscription, pas de filigrane et pas de limite quotidienne.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/pdf/reorder](/fr/tools/pdf/reorder)
2. Cliquez sur la zone de téléversement et sélectionnez votre PDF (ou glissez-déposez)
3. L'outil affiche chaque page sous forme de miniature dans une grille
4. **Glissez-déposez** les miniatures dans le nouvel ordre
5. Cliquez sur « Traiter »
6. Téléchargez le PDF réorganisé

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Le fichier n'arrive jamais sur un serveur.
- **Glisser-déposer visuel** : voyez chaque page en miniature et réorganisez à la souris
- **Fonctionne sur tout appareil** : Windows, Mac, Linux, ChromeOS, iOS, Android
- **Réversible** : réorganisez librement, prévisualisez le nouvel ordre puis enregistrez
- **Aucun filigrane** sur le résultat
- **Aucune perte de qualité** : les pages sont déplacées, pas ré-encodées

Si vous n'avez besoin de réorganiser des pages qu'occasionnellement, c'est de loin l'option la plus simple.

## Méthode 2 : Adobe Acrobat Pro (Payant)

Adobe Acrobat Pro est le poids lourd du monde PDF et l'outil par défaut de nombreuses équipes juridiques, éditoriales et entreprises. Sa vue « Organiser les pages » affiche chaque page sous forme de miniature dans une grille. Vous pouvez cliquer et faire glisser une page vers une nouvelle position, et Acrobat l'insère là où vous la déposez. L'interface est soignée, le retour visuel est immédiat, et depuis la même vue vous pouvez aussi pivoter, supprimer ou insérer des pages vierges.

Le hic, c'est le prix. Acrobat Pro coûte environ **19,99 $ par mois** (environ 240 $ par an) en abonnement. Pour une réorganisation ponctuelle, c'est un mauvais calcul. Il faut aussi une installation desktop, qui peut être lourde sur des machines anciennes.

Acrobat ne vaut le coup que si vous l'utilisez déjà pour l'édition, la rédaction, la signature électronique ou la création de formulaires. Si la réorganisation est tout ce dont vous avez besoin, un outil en navigateur fait le travail sans la facture.

## Méthode 3 : Ligne de commande avec qpdf

Si vous êtes à l'aise dans un terminal, l'outil open-source **qpdf** est l'option CLI la plus fiable pour réorganiser. Installez-le avec Homebrew (\`brew install qpdf\`), puis :

\`\`\`bash
# Réorganiser : prendre les pages 1, 5, 3, 7, 2, 4, 6 de input.pdf et les écrire dans cet ordre dans out.pdf
qpdf input.pdf --pages input.pdf 1,5,3,7,2,4,6 -- out.pdf

# Inverser l'ordre de toutes les pages (document de 10 pages)
qpdf input.pdf --pages input.pdf 10,9,8,7,6,5,4,3,2,1 -- out.pdf

# Mettre la page 4 en tête, garder le reste dans l'ordre
qpdf input.pdf --pages input.pdf 4,1,2,3,5-10 -- out.pdf
\`\`\`

Le paramètre \`--pages\` est le couteau suisse de qpdf : il accepte une liste de numéros de page séparés par des virgules dans n'importe quel ordre et les écrit dans la sortie dans cet ordre. **qpdf** est rapide, léger et imbattable pour scripter des réorganisations par lots sur des centaines de fichiers. L'outil \`pdftk\` offre des capacités similaires, mais il n'est plus maintenu et embarque de lourdes dépendances Java — qpdf est le meilleur choix aujourd'hui.

## Questions fréquentes

### Réorganiser des pages réduit-il la qualité ?

Non. Réorganiser copie le contenu original des pages dans un nouveau conteneur sans rien ré-encoder. Le texte reste net, les images conservent leur résolution d'origine, les polices sont préservées à l'identique, et la seule chose qui change est l'ordre des pages. Le PDF de sortie est identique en contenu à l'original, juste dans une nouvelle séquence.

### Puis-je réorganiser et pivoter des pages en même temps ?

Oui. Avec l'[outil de réorganisation PDF de UtilBoxx](/fr/tools/pdf/reorder), glissez les pages dans l'ordre voulu ; pour la rotation, réorganisez d'abord, puis passez l'[outil de rotation PDF](/fr/tools/pdf/rotate) sur le résultat. Avec qpdf, vous pouvez utiliser le paramètre \`--rotate\` en plus de \`--pages\` pour appliquer les deux transformations en une seule passe.

### Quelle est la différence entre réorganiser et fusionner ?

**Réorganiser** réarrange les pages à l'intérieur d'un seul PDF. **Fusionner** combine plusieurs PDF en un. Si vous avez besoin des deux — extraire des chapitres de plusieurs PDF et les organiser dans un ordre précis — utilisez d'abord l'[outil de fusion PDF de UtilBoxx](/fr/tools/pdf/merge) pour combiner les fichiers, puis l'[outil de réorganisation PDF](/fr/tools/pdf/reorder) pour fixer l'ordre final.

### Puis-je déplacer une seule page vers une nouvelle position ?

Oui. Dans l'outil de réorganisation de UtilBoxx, glissez une seule miniature à l'emplacement voulu et déposez-la. Avec qpdf, placez la page cible où vous voulez dans l'argument \`--pages\`. Par exemple, pour mettre la page 7 en tête : \`qpdf input.pdf --pages input.pdf 7,1-6,8-10 -- out.pdf\`.

### Est-il sûr d'utiliser un réorganisateur PDF en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que votre fichier est téléversé sur un serveur distant et lisez attentivement leur politique de confidentialité. Évitez de téléverser sur un réorganisateur en qui vous n'avez pas confiance tout document contenant des informations personnelles, financières, médicales ou juridiquement sensibles.

### Les signets et liens fonctionneront-ils encore après la réorganisation ?

Cela dépend de l'outil. UtilBoxx préserve les liens internes dans la plupart des cas, mais ne réécrit pas les cibles des signets : si vous avez une structure de signets complexe, mieux vaut régénérer les signets après réorganisation. Acrobat Pro réécrit intégralement les signets à la réorganisation, et qpdf peut être combiné avec l'option \`--update-bookmarks\` pour conserver les références croisées.

## Conclusion

Réorganiser des pages d'un PDF est l'une de ces petites tâches qui reviennent constamment et ne devraient pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, l'[outil gratuit de réorganisation PDF de UtilBoxx](/fr/tools/pdf/reorder) est le choix évident : privé, rapide, gratuit, sans inscription ni filigrane.

Si vous payez déjà Adobe Acrobat pour d'autres raisons, sa vue « Organiser les pages » est excellente. Si vous scriptz du travail par lots, qpdf dans le terminal est imbattable.

Pour tout le reste, rendez-vous sur les [outils PDF de UtilBoxx](/fr/tools/pdf) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const reorderPdfDe = `## Warum PDF-Seiten neu anordnen?

PDFs sind darauf ausgelegt, linear und in sich geschlossen zu sein, wodurch sie sich in der richtigen Reihenfolge leicht lesen, aber überraschend schwer umordnen lassen. Ein gescannter Vertrag kann in umgekehrter Reihenfolge ankommen, weil der Einzug die Seiten in falscher Sequenz herausgezogen hat. Ein aus mehreren Quellen zusammengestellter Bericht hat das Cover am Ende. Ein Fotoalbum braucht die Seiten in chronologischer Reihenfolge. In jedem Fall lautet die Antwort: die Seiten neu anordnen.

Die Gründe, warum Menschen Seiten neu anordnen müssen, sind praktisch und häufig:

- **Einen Bericht zusammenstellen**: Cover, Inhaltsverzeichnis, Hauptteil und Anhänge aus separaten PDFs zu einem korrekt geordneten Dokument zusammenfügen.
- **Scan-Reihenfolge korrigieren**: Manche Scanner geben Seiten in umgekehrter Reihenfolge aus. Ein 50-seitiger Scan kann Seite 1 am Ende und Seite 50 am Anfang haben.
- **Einen Vertrag neu anordnen**: Ein unterschriebener Vertrag hat die Unterschriftsseiten vielleicht an der falschen Stelle. Ordnen Sie sie so um, dass die Unterschriftsseite ans Ende kommt, wo sie hingehört.
- **Fotos neu anordnen**: Ein aus dem Handy exportiertes Album kommt oft mit durcheinander geratener Reihenfolge. Ordnen Sie es vor dem Drucken oder Teilen um.
- **Kapitel umstellen**: Kapitel 3 aus einem Entwurf herausnehmen und dorthin setzen, wo Kapitel 7 war — den Rest unverändert lassen.
- **Einen Abschnitt nach vorn ziehen**: Die Seiten 12-15 als Executive Summary ganz nach vorn verschieben, den Rest dahinter.

Die gute Nachricht: Mit dem richtigen Werkzeug ist das Umordnen eine 30-Sekunden-Drag-&-Drop-Aufgabe, und Sie müssen nichts installieren.

## Methode 1: Das kostenlose PDF-Seiten-Neuordnungswerkzeug von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode ist das [PDF-Neuordnungswerkzeug von UtilBoxx](/de/tools/pdf/reorder). Es läuft vollständig in Ihrem Browser, sodass die Datei Ihr Gerät nie verlässt. Kein Upload, keine Registrierung, kein Wasserzeichen und kein Tageslimit.

So verwenden Sie es:

1. Gehen Sie zu [utilboxx.com/de/tools/pdf/reorder](/de/tools/pdf/reorder)
2. Klicken Sie auf den Upload-Bereich und wählen Sie Ihre PDF (oder ziehen Sie sie per Drag & Drop)
3. Das Werkzeug zeigt jede Seite als Miniaturansicht in einem Raster
4. **Ziehen Sie die Miniaturansichten per Drag & Drop** in die neue Reihenfolge
5. Klicken Sie auf „Verarbeiten"
6. Laden Sie das neu geordnete PDF herunter

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in Ihrem Browser verarbeitet. Die Datei erreicht nie einen Server.
- **Visuelles Drag & Drop**: jede Seite als Miniaturansicht sehen und mit der Maus umordnen
- **Funktioniert auf jedem Gerät**: Windows, Mac, Linux, ChromeOS, iOS, Android
- **Rückgängig-freundlich**: frei umordnen, neue Reihenfolge prüfen, dann speichern
- **Keine Wasserzeichen** auf dem Ergebnis
- **Kein Qualitätsverlust**: Seiten werden verschoben, nicht neu kodiert

Wenn Sie nur gelegentlich Seiten umordnen müssen, ist dies mit Abstand die reibungsloseste Option.

## Methode 2: Adobe Acrobat Pro (Kostenpflichtig)

Adobe Acrobat Pro ist das Schwergewicht der PDF-Welt und das Standardwerkzeug vieler Rechts-, Verlags- und Unternehmensabteilungen. Seine Ansicht „Seiten organisieren" zeigt jede Seite als Miniaturansicht in einem Raster. Sie können eine Seite anklicken und an eine neue Position ziehen, und Acrobat fügt sie dort ein, wo Sie sie ablegen. Die Oberfläche ist poliert, die visuelle Rückmeldung sofort, und in derselben Ansicht können Sie auch Seiten drehen, löschen oder Leerseiten einfügen.

Der Haken ist der Preis. Acrobat Pro kostet im Abonnement ungefähr **19,99 $ pro Monat** (etwa 240 $ pro Jahr). Für eine gelegentliche Umordnung ein schlechtes Geschäft. Außerdem ist eine Desktop-Installation nötig, die auf älteren Maschinen schwer wiegen kann.

Acrobat lohnt sich nur, wenn Sie es bereits für Bearbeitung, Schwärzung, elektronische Signaturen oder Formularerstellung nutzen. Wenn Umordnen alles ist, was Sie brauchen, erledigt ein Browser-Tool die Arbeit ohne die Rechnung.

## Methode 3: Kommandozeile mit qpdf

Wenn Sie sich im Terminal wohlfühlen, ist das Open-Source-Werkzeug **qpdf** die zuverlässigste CLI-Option zum Umordnen. Installieren Sie es mit Homebrew (\`brew install qpdf\`), dann:

\`\`\`bash
# Umordnen: die Seiten 1, 5, 3, 7, 2, 4, 6 aus input.pdf in dieser Reihenfolge in out.pdf schreiben
qpdf input.pdf --pages input.pdf 1,5,3,7,2,4,6 -- out.pdf

# Reihenfolge aller Seiten umkehren (10-seitiges Dokument)
qpdf input.pdf --pages input.pdf 10,9,8,7,6,5,4,3,2,1 -- out.pdf

# Seite 4 nach vorn verschieben, den Rest in Reihenfolge behalten
qpdf input.pdf --pages input.pdf 4,1,2,3,5-10 -- out.pdf
\`\`\`

Der Parameter \`--pages\` ist das Schweizer Taschenmesser von qpdf: Er akzeptiert eine durch Kommas getrennte Liste von Seitenzahlen in beliebiger Reihenfolge und schreibt sie in dieser Reihenfolge in die Ausgabe. **qpdf** ist schnell, leicht und unschlagbar beim Skripten von Massen-Umordnungen über Hunderte von Dateien. Das Werkzeug \`pdftk\` bietet ähnliche Fähigkeiten, wird aber nicht mehr gepflegt und zieht schwere Java-Abhängigkeiten mit sich — qpdf ist heute die bessere Wahl.

## Häufige Fragen

### Verringert das Umordnen die Qualität?

Nein. Beim Umordnen wird der ursprüngliche Seiteninhalt in einen neuen Container kopiert, ohne irgendetwas neu zu kodieren. Text bleibt scharf, Bilder behalten ihre Originalauflösung, Schriftarten werden genau erhalten, und das Einzige, was sich ändert, ist die Seitenreihenfolge. Das ausgegebene PDF ist inhaltlich identisch mit dem Original, nur in einer neuen Sequenz.

### Kann ich Seiten umordnen und gleichzeitig drehen?

Ja. Mit dem [PDF-Neuordnungswerkzeug von UtilBoxx](/de/tools/pdf/reorder) ziehen Sie die Seiten in die gewünschte Reihenfolge; zum Drehen ordnen Sie zuerst um und führen das [PDF-Drehwerkzeug](/de/tools/pdf/rotate) danach auf dem Ergebnis aus. Mit qpdf können Sie den Parameter \`--rotate\` neben \`--pages\` verwenden, um beide Transformationen in einem Durchlauf anzuwenden.

### Was ist der Unterschied zwischen Umordnen und Zusammenführen?

**Umordnen** sortiert die Seiten innerhalb eines einzigen PDFs neu. **Zusammenführen** kombiniert mehrere PDFs zu einem. Wenn Sie beides brauchen — Kapitel aus mehreren PDFs entnehmen und in einer bestimmten Reihenfolge anordnen — verwenden Sie zuerst das [PDF-Zusammenführungswerkzeug von UtilBoxx](/de/tools/pdf/merge), um die Dateien zu kombinieren, und dann das [PDF-Neuordnungswerkzeug](/de/tools/pdf/reorder), um die endgültige Seitenreihenfolge festzulegen.

### Kann ich nur eine Seite an eine neue Position verschieben?

Ja. Im Neuordnungswerkzeug von UtilBoxx ziehen Sie eine einzelne Miniaturansicht an die neue Stelle und legen sie ab. Mit qpdf listen Sie die Zielseite dort im \`--pages\`-Argument auf, wo Sie sie haben möchten. Um z. B. Seite 7 nach vorn zu verschieben: \`qpdf input.pdf --pages input.pdf 7,1-6,8-10 -- out.pdf\`.

### Ist die Nutzung eines Online-PDF-Neuordners sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in Ihrem Browser** – kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen sollten Sie davon ausgehen, dass Ihre Datei auf einen entfernten Server hochgeladen wird, und die Datenschutzrichtlinie sorgfältig lesen. Vermeiden Sie das Hochladen von Dokumenten mit persönlichen, finanziellen, medizinischen oder rechtlich sensiblen Informationen zu einem Neuordner, dem Sie nicht vertrauen.

### Funktionieren Lesezeichen und Links nach dem Umordnen noch?

Das hängt vom Werkzeug ab. UtilBoxx erhält interne Links in den meisten Fällen, schreibt jedoch die Lesezeichen-Ziele nicht neu: Wenn Sie eine komplexe Lesezeichen-Struktur haben, empfiehlt es sich, die Lesezeichen nach dem Umordnen neu zu erzeugen. Acrobat Pro schreibt Lesezeichen beim Umordnen vollständig neu, und qpdf kann mit der Option \`--update-bookmarks\` kombiniert werden, um Querverweise zu erhalten.

## Fazit

PDF-Seiten umzuordnen ist eine dieser kleinen Aufgaben, die ständig anfallen und keine kostenpflichtige Subskription oder Software-Installation erfordern sollten. Für die meisten Menschen ist das [kostenlose PDF-Neuordnungswerkzeug von UtilBoxx](/de/tools/pdf/reorder) die offensichtliche Wahl: privat, schnell, kostenlos, ohne Registrierung und ohne Wasserzeichen.

Wenn Sie Adobe Acrobat bereits aus anderen Gründen bezahlen, ist seine Ansicht „Seiten organisieren" ausgezeichnet. Wenn Sie Stapelverarbeitung skripten, ist qpdf im Terminal unschlagbar.

Für alles andere besuchen Sie die [PDF-Werkzeuge von UtilBoxx](/de/tools/pdf): Dort finden Sie einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit PDFs – alles im Browser.`;

export const reorderPdfPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-reorder-pdf-pages",
    category: "PDF Tools",
    date: "2026-01-28",
    readTime: "4 min",
    title: "How to Reorder PDF Pages: Drag, Drop, Done",
    description: "Rearrange pages in any PDF with drag and drop. Perfect for assembling reports and contracts.",
    content: reorderPdfEn,
  },
  zh: {
    slug: "how-to-reorder-pdf-pages",
    category: "PDF 工具",
    date: "2026-01-28",
    readTime: "4 分钟",
    title: "如何重排 PDF 页面：拖放即完成",
    description: "用拖放重新排列任何 PDF 的页面。非常适合组装报告和合同。",
    content: reorderPdfZh,
  },
  ja: {
    slug: "how-to-reorder-pdf-pages",
    category: "PDF ツール",
    date: "2026-01-28",
    readTime: "4 分",
    title: "PDF ページを並び替える方法：ドラッグ＆ドロップで完了",
    description: "ドラッグ＆ドロップで任意の PDF ページを並べ替えます。レポートや契約書の組み立てに最適。",
    content: reorderPdfJa,
  },
  es: {
    slug: "how-to-reorder-pdf-pages",
    category: "Herramientas PDF",
    date: "2026-01-28",
    readTime: "4 min",
    title: "Cómo reordenar páginas de un PDF: arrastra, suelta, listo",
    description: "Reorganiza las páginas de cualquier PDF con arrastrar y soltar. Perfecto para ensamblar informes y contratos.",
    content: reorderPdfEs,
  },
  pt: {
    slug: "how-to-reorder-pdf-pages",
    category: "Ferramentas PDF",
    date: "2026-01-28",
    readTime: "4 min",
    title: "Como reordenar páginas de um PDF: arraste, solte, pronto",
    description: "Reorganize as páginas de qualquer PDF com arrastar e soltar. Perfeito para montar relatórios e contratos.",
    content: reorderPdfPt,
  },
  fr: {
    slug: "how-to-reorder-pdf-pages",
    category: "Outils PDF",
    date: "2026-01-28",
    readTime: "4 min",
    title: "Comment réorganiser les pages d'un PDF : glisser, déposer, terminé",
    description: "Réarrangez les pages de n'importe quel PDF par glisser-déposer. Parfait pour assembler rapports et contrats.",
    content: reorderPdfFr,
  },
  de: {
    slug: "how-to-reorder-pdf-pages",
    category: "PDF-Werkzeuge",
    date: "2026-01-28",
    readTime: "4 Min",
    title: "PDF-Seiten neu anordnen: Ziehen, Ablegen, Fertig",
    description: "Ordnen Sie die Seiten jeder PDF per Drag & Drop neu. Perfekt zum Zusammenstellen von Berichten und Verträgen.",
    content: reorderPdfDe,
  },
};
