// Blog post: How to Crop Images Online
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const cropEn = `## Why crop images?

Cropping is the act of trimming away the parts of an image you do not want and keeping the parts you do. It sounds simple, but it is the single most impactful edit you can make. A bad crop can ruin a great photo. A great crop can rescue a mediocre one. Photographers obsess over it because it determines what the viewer sees first, second, and never.

The reasons people crop images are practical and frequent:

- **Improve composition**: Get rid of distracting edges, dead space on one side, or random strangers who wandered into the background.
- **Change aspect ratio**: A 4:3 camera shot needs to become 16:9 for a YouTube thumbnail, 1:1 for an Instagram post, 9:16 for an Instagram Story, or 4:5 for a portrait post.
- **Focus attention**: Cut out the busy background and keep the subject front and center.
- **Frame the subject**: Tighten around a face, a logo, or a product so the eye lands on it immediately.
- **Meet platform requirements**: Some sites and apps reject uploads that are not exactly the right shape.
- **Print fitting**: A 16:9 photo on a 4x6 print leaves awkward white bars. Cropping to match the print ratio fills the page.

The good news: with the right tool, cropping an image is a 10-second job, and you do not need to install anything.

## Method 1: Use UtilBoxx's Free Image Cropper (Recommended)

The fastest, safest, and most private way to crop images is [UtilBoxx's Image Crop tool](/en/tools/image/crop). It runs entirely in your browser, so your photos never leave your device. There is no upload, no signup, and no watermark on the output.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/image/crop](/en/tools/image/crop)
2. Click the upload area and select your JPG, PNG, or WebP (or drag and drop)
3. Pick a crop mode:
   - **Aspect ratio** — choose 1:1, 16:9, 4:3, 9:16, 4:5, or enter a custom ratio. The crop box stays that shape while you drag.
   - **Freeform** — drag the crop box to any shape you like.
   - **Output dimensions** — type the exact width and height in pixels. The tool calculates the matching aspect ratio.
4. Drag the crop box to position it where you want
5. Click "Crop"
6. Download the result

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. Your photos never reach a server.
- **Three crop modes**: aspect ratio for social media, freeform for custom shapes, output dimensions for exact sizes
- **Live preview**: see the crop frame and the result before you commit
- **Multi-format**: JPG, PNG, and WebP in the same tool
- **No watermarks** on the output

If you only crop images once in a while, this is by far the lowest-friction option. And because it is browser-based, it works on Windows, Mac, Linux, ChromeOS, iOS, and Android.

## Method 2: Adobe Photoshop (Paid)

Photoshop is the heavyweight of image editing, and its Crop tool (keyboard shortcut **C**) is the most precise way to crop. You can type exact width, height, and resolution into the options bar, lock the aspect ratio, set a fixed ratio like 16:9, choose from a list of presets (1:1, 2:3, 3:5, 4:5, 5:7, 2:3, 16:9, etc.), or use "Content-Aware Crop" to automatically extend the background when straightening a tilted horizon. The straightening tool is also built in — just drag a line along what should be horizontal.

The catch is the price and the complexity. Photoshop is part of a Creative Cloud subscription that costs roughly **$22.99 per month** (about $240 per year). For a one-off crop, it is overkill, and the panel of options is more than most people need.

Photoshop is worth it only if you already use it for retouching, compositing, or design work. If cropping is all you need, a browser tool does the job without the bill or the install.

## Method 3: Command line with ImageMagick

If you are comfortable in a terminal, the open-source tool **ImageMagick** is the most powerful CLI option for image cropping. Install it with Homebrew (\`brew install imagemagick\`), then:

\`\`\`bash
# Crop a 500x500 region starting at (100, 50)
magick input.jpg -crop 500x500+100+50 output.jpg

# Crop with gravity (e.g. center, north, southeast)
magick input.jpg -gravity center -crop 800x600+0+0 output.jpg

# Crop to a square (use the smaller dimension)
magick input.png -gravity center -crop "$(identify -format "%[fx:w]x%[fx:h]")+0+0" +repage output.png

# Trim automatic whitespace borders
magick input.png -trim +repage output.png

# Batch crop all JPGs in a folder (centered, 800x800)
for f in *.jpg; do magick "$f" -gravity center -crop 800x800+0+0 +repage "cropped_$f"; done
\`\`\`

The \`-crop\` flag takes WIDTHxHEIGHT+X+Y, where X and Y are the offsets from the top-left corner. The \`-gravity\` flag positions the crop relative to the image (center, north, south, east, west, northeast, etc.). The \`-trim\` flag is a handy bonus: it automatically removes uniform-colored borders, perfect for cleaning up scanned images or screenshots with extra whitespace.

**ImageMagick** is excellent for scripting batch crops across thousands of files. It is also the only option that works on a headless server with no GUI.

## Common questions

### Does cropping reduce image quality?

No. Cropping just selects a region of the original pixels. The pixels that remain are unchanged. The only thing that shrinks is the total pixel count (and therefore the file size). This is why it is always best to start from a high-resolution original: you can crop aggressively and still have a sharp result.

### What is the best aspect ratio for social media?

- **Instagram post**: 1:1 (1080x1080) or 4:5 (1080x1350) for max screen real estate
- **Instagram Story / Reel**: 9:16 (1080x1920)
- **Twitter / X post**: 16:9 (1200x675)
- **LinkedIn post**: 1.91:1 (1200x627)
- **YouTube thumbnail**: 16:9 (1280x720)
- **Facebook cover**: 2.7:1 (820x312)
- **TikTok**: 9:16 (1080x1920)

### What is the difference between crop and resize?

**Crop** selects a region of the image, discarding the rest. **Resize** changes the pixel dimensions of the whole image. You can crop then resize (most common), or resize then crop. UtilBoxx has separate tools for each so you can do them in either order.

### Can I crop to a circular or shaped area?

Most basic crop tools (including UtilBoxx) are limited to rectangular crops. For circular or shaped crops, you need a more advanced tool or you can crop to a square and then add a circular mask in Photoshop or GIMP.

### Can I straighten a tilted image while cropping?

Yes. In Photoshop, the Crop tool has a straighten slider built in. In UtilBoxx, you would first rotate the image with another tool, then crop. In ImageMagick, you can use \`-deskew\` to auto-straighten, or rotate first with \`-rotate\` then crop.

### Is it safe to use an online image cropper?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your photos are being uploaded to a remote server and read their privacy policy carefully. Avoid uploading personal, financial, medical, or otherwise sensitive photos to a cropper you do not trust.

## Conclusion

Cropping is one of the most common image edits there is, and it should not require a paid subscription or a software install. For most people, [UtilBoxx's free Image Crop tool](/en/tools/image/crop) is the obvious choice: it is private, fast, and free, with no signup and no watermark.

If you are a designer who already lives in Photoshop, the Crop tool gives you the finest control. If you are scripting batch work, ImageMagick in the terminal is unbeatable. macOS users can also use **Preview**: open the image, drag a rectangle selection with the Rectangular Selection tool, then choose **Tools > Crop** (or use the keyboard shortcut). GIMP, the free Photoshop alternative, has the same crop tool at zero cost.

For everything else, head to [UtilBoxx Image tools](/en/tools/image) and you will find a complete, privacy-first toolkit for working with images — all in your browser.`;

const cropZh = `## 为什么要裁剪图片？

裁剪就是把图片中你不想要的部分去掉，只留下你想要的部分。听起来简单，但它是你能做的最具影响力的编辑。一次糟糕的裁剪可以毁掉一张好照片；一次出色的裁剪可以拯救一张平庸的照片。摄影师对它痴迷，因为它决定了观众第一眼、第二眼看到什么、什么永远看不到。

人们需要裁剪图片的原因既实际又频繁：

- **改善构图**：去掉干扰性的边缘、某一侧的死区、或无意中闯入背景的路人。
- **改变宽高比**：一张 4:3 的相机照片需要变成 16:9 才能当 YouTube 缩略图，1:1 才能发 Instagram 帖子，9:16 才能做 Instagram Story，4:5 才能竖屏发帖。
- **聚焦注意力**：裁掉杂乱的背景，把主体放在画面正中。
- **框定主体**：紧贴脸部、Logo 或产品，让眼睛立刻落到上面。
- **满足平台要求**：一些网站和应用会拒绝尺寸不对的上传。
- **适配打印**：16:9 的照片打在 4x6 相纸上会留下尴尬的白边。裁到匹配相纸比例就能铺满整页。

好消息是：只要用对工具，裁剪图片只需 10 秒，而且不需要装任何东西。

## 方法一：使用 UtilBoxx 免费图片裁剪工具（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的图片裁剪工具](/zh/tools/image/crop)。它完全在你的浏览器中运行，照片不会离开你的设备。没有上传、没有注册、输出文件没有水印。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/image/crop](/zh/tools/image/crop)
2. 点击上传区域选择你的 JPG、PNG 或 WebP（或直接拖入）
3. 选择裁剪模式：
   - **按宽高比** —— 选择 1:1、16:9、4:3、9:16、4:5，或输入自定义比例。裁剪框保持该形状，你可以拖动。
   - **自由裁剪** —— 拖动裁剪框到任意形状。
   - **按输出尺寸** —— 输入精确的宽高像素数。工具自动算出匹配的宽高比。
4. 拖动裁剪框到你想要的位置
5. 点击"开始裁剪"
6. 下载结果

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，照片不会上传到任何服务器
- **三种裁剪模式**：宽高比适合社交媒体，自由裁剪适合自定义形状，输出尺寸适合精确像素
- **实时预览**：在确认前看到裁剪框和结果
- **多格式**：JPG、PNG、WebP 一个工具搞定
- **输出无水印**

如果你只是偶尔裁剪一下图片，这是最省心的选择。而且因为它基于浏览器，Windows、Mac、Linux、ChromeOS、iOS、Android 都能用。

## 方法二：Adobe Photoshop（付费）

Photoshop 是图像编辑领域的重量级选手，它的裁剪工具（快捷键 **C**）是最精确的裁剪方式。你可以在选项栏输入精确的宽、高和分辨率，锁定宽高比，设置固定比例（16:9 等），从预设列表中选择（1:1、2:3、3:5、4:5、5:7、2:3、16:9 等），或使用"内容感知裁剪"在拉直倾斜地平线时自动扩展背景。拉直工具也内置了 —— 沿着本应水平的线拖一下就行。

代价是价格和复杂度。Photoshop 是 Creative Cloud 订阅的一部分，每月约 **$22.99**（每年约 $240 美元）。如果只是偶尔裁一次，杀鸡用牛刀，选项面板对大多数人来说也太多了。

只有当你已经用它做修图、合成或设计时，Photoshop 才值得。如果裁剪就是你的全部需求，浏览器工具就够用，还免了账单和安装。

## 方法三：命令行 ImageMagick

如果你熟悉终端，开源工具 **ImageMagick** 是最强大的图片裁剪命令行选择。用 Homebrew 安装（\`brew install imagemagick\`）后：

\`\`\`bash
# 从 (100, 50) 起裁 500x500 的区域
magick input.jpg -crop 500x500+100+50 output.jpg

# 按位置定位裁剪（中心、上方、右下等）
magick input.jpg -gravity center -crop 800x600+0+0 output.jpg

# 裁成正方形（取较小边）
magick input.png -gravity center -crop "$(identify -format "%[fx:w]x%[fx:h]")+0+0" +repage output.png

# 自动裁掉白边
magick input.png -trim +repage output.png

# 批量裁剪文件夹内所有 JPG（居中 800x800）
for f in *.jpg; do magick "$f" -gravity center -crop 800x800+0+0 +repage "cropped_$f"; done
\`\`\`

\`-crop\` 标志的格式是 宽x高+X+Y，X 和 Y 是从左上角算起的偏移。\`-gravity\` 标志决定裁剪相对于图片的位置（center、north、south、east、west、northeast 等）。\`-trim\` 标志是个额外福利：自动去除单色边缘，特别适合清理扫描件或带多余白边的截图。

**ImageMagick** 非常适合写脚本对成百上千个文件做批量裁剪，也是无 GUI 环境的服务器上唯一可行的方案。

## 常见问题

### 裁剪会降低画质吗？

不会。裁剪只是选取原始像素的一块区域，保留的像素完全不变。唯一缩小的是总像素数（也就是文件大小）。这就是为什么永远要从高分辨率原图开始 —— 你可以放心大胆地裁，最后仍然清晰。

### 社交媒体最佳宽高比是多少？

- **Instagram 帖子**：1:1（1080x1080）或 4:5（1080x1350）占满屏幕
- **Instagram Story / Reel**：9:16（1080x1920）
- **Twitter / X 帖子**：16:9（1200x675）
- **LinkedIn 帖子**：1.91:1（1200x627）
- **YouTube 缩略图**：16:9（1280x720）
- **Facebook 封面**：2.7:1（820x312）
- **TikTok**：9:16（1080x1920）

### 裁剪和调整大小有什么区别？

**裁剪**选取图片的一块区域，丢掉其余部分。**调整大小**改变整张图的像素尺寸。你可以先裁再调（最常见），也可以先调再裁。UtilBoxx 提供了独立的两个工具，按你需要的顺序来用。

### 能裁成圆形或异形吗？

大多数基础裁剪工具（包括 UtilBoxx）只支持矩形裁剪。要做圆形或异形裁剪，你需要更高级的工具，或者先裁成正方形再用 Photoshop 或 GIMP 加圆形遮罩。

### 裁剪时能顺便把倾斜的图片拉直吗？

可以。在 Photoshop 中，裁剪工具内置了拉直滑块。在 UtilBoxx 中，你可以先用别的工具旋转图片，再裁剪。在 ImageMagick 中，可以用 \`-deskew\` 自动拉直，或先用 \`-rotate\` 旋转，再裁剪。

### 在线图片裁剪工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的照片会被上传到远程服务器，并仔细阅读隐私政策。避免向你不信任的裁剪工具上传任何包含个人、财务、医疗或敏感信息的照片。

## 结论

裁剪是最常见的图片编辑之一，不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费图片裁剪工具](/zh/tools/image/crop) 是显而易见的选择：私密、快速、免费、无需注册、无水印。

如果你是常驻 Photoshop 的设计师，裁剪工具给你最精细的控制。如果你写脚本做批量处理，ImageMagick 在终端里无可替代。Mac 用户也可以用 **Preview**：打开图片，用矩形选择工具拖一个矩形选区，然后选择 **工具 > 裁剪**（或用快捷键）。免费替代品 GIMP 也有同样的裁剪工具，零成本。

其他情况下，去看 [UtilBoxx 的图片工具集](/zh/tools/image)，你会找到一个完整的、隐私优先的图片处理工具箱 —— 全部在浏览器里完成。`;

const cropJa = `## なぜ画像をクロップするのか？

クロップは、画像から不要な部分を切り取り、必要な部分だけを残す行為です。シンプルに思えますが、最も影響力のある編集です。まずいクロップは素晴らしい写真を台無しにし、優れたクロップは平凡な写真を救います。写真家はこの作業にこだわる。なぜなら、視聴者が最初に見るもの、2 番目に見るもの、決して見ないものを決めるからです。

人が画像をクロップする理由は実際的でしかも頻繁です：

- **構図を改善**：邪魔な端、余白、ランダムに背景に紛れ込んだ通行人を切り取る。
- **アスペクト比を変更**：4:3 のカメラ写真を YouTube サムネ用に 16:9 に、Instagram 投稿用に 1:1 に、Instagram Story 用に 9:16 に、ポートレート投稿用に 4:5 にする。
- **注意を集中**：散らかった背景を落とし、被写体を中央に据える。
- **被写体をフレーミング**：顔、ロゴ、商品にぴったり寄せて、視線をすぐそこに導く。
- **プラットフォーム要件を満たす**：正しい比率でないアップロードを拒否するサイトやアプリもある。
- **印刷合わせ**：16:9 の写真を 4x6 で印刷すると余白が出る。印刷比に合わせてクロップすればページが埋まる。

良いニュースは、適切なツールを使えばクロップは 10 秒で終わり、何もインストールする必要がないことです。

## 方法 1：UtilBoxx の無料画像クロップツール（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の画像クロップツール](/ja/tools/image/crop) です。完全にブラウザ内で動作するため、写真がデバイスの外に出ることがありません。アップロードも登録も不要で、透かしも入りません。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/image/crop](/ja/tools/image/crop) を開く
2. アップロード領域をクリックして JPG、PNG、WebP を選択（またはドラッグ＆ドロップ）
3. クロップモードを選択：
   - **アスペクト比** — 1:1、16:9、4:3、9:16、4:5 を選択、またはカスタム比を入力。クロップ枠はその形のままドラッグ可能。
   - **フリーフォーム** — クロップ枠を好きな形にドラッグ。
   - **出力寸法** — ピクセル単位で正確な幅と高さを入力。ツールが合うアスペクト比を計算。
4. クロップ枠を好きな位置にドラッグ
5.「クロップ」をクリック
6. 結果をダウンロード

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべての処理がブラウザ内で完結。写真はサーバーへ送信されません
- **3 つのクロップモード**：アスペクト比（SNS 用）、フリーフォーム（カスタム形）、出力寸法（正確なサイズ）
- **ライブプレビュー**：確定前にクロップ枠と結果を確認
- **マルチフォーマット**：JPG、PNG、WebP を同じツールで
- **出力に透かしなし**

たまに画像をクロップするだけなら、これほど低コストな選択肢はありません。ブラウザベースなので、Windows、Mac、Linux、ChromeOS、iOS、Android で動作します。

## 方法 2：Adobe Photoshop（有料）

Photoshop は画像編集のヘビー級で、そのクロップツール（ショートカット **C**）は最も精密なクロップ手段です。オプションバーに正確な幅・高さ・解像度を打ち込めば、アスペクト比の固定、16:9 などの固定比、プリセット一覧（1:1、2:3、3:5、4:5、5:7、2:3、16:9 など）から選んだり、傾いた水平線をまっすぐにする際に背景を自動延長する「コンテンツに応じるクロップ」を使ったりできます。まっすぐ化ツールも内蔵されており、水平にしたい線に沿ってドラッグするだけです。

ただし価格と複雑さがあります。Photoshop は Creative Cloud サブスクリプションの一部で、月額約 **$22.99**（年額約 $240）。たまのクロップにはオーバースペックで、オプションパネルはほとんどの人にとって多すぎます。

既にレタッチ、合成、デザインのために Photoshop を使っているなら価値があります。クロップだけが目的であれば、ブラウザツールで十分です。請求書もインストールも不要です。

## 方法 3：コマンドラインで ImageMagick

ターミナルに慣れているなら、オープンソースの **ImageMagick** が最も強力な画像クロップ CLI オプションです。Homebrew でインストール（\`brew install imagemagick\`）したら：

\`\`\`bash
# (100, 50) から 500x500 の領域をクロップ
magick input.jpg -crop 500x500+100+50 output.jpg

# 重力を指定してクロップ（中央、上、右下など）
magick input.jpg -gravity center -crop 800x600+0+0 output.jpg

# 正方形にクロップ（小さい辺に合わせる）
magick input.png -gravity center -crop "$(identify -format "%[fx:w]x%[fx:h]")+0+0" +repage output.png

# 自動で白余白をトリム
magick input.png -trim +repage output.png

# フォルダ内の全 JPG を一括クロップ（中央 800x800）
for f in *.jpg; do magick "$f" -gravity center -crop 800x800+0+0 +repage "cropped_$f"; done
\`\`\`

\`-crop\` フラグの形式は WIDTHxHEIGHT+X+Y で、X と Y は左上からのオフセットです。\`-gravity\` フラグはクロップを画像に対してどこ基準にするかを決めます（center、north、south、east、west、northeast など）。\`-trim\` フラグは嬉しいおまけで：単色ボーダーを自動除去し、スキャン画像や余白だらけのスクリーンショットの掃除に最適です。

**ImageMagick** は数千ファイルのバッチクロップスクリプトに優れています。GUI のないヘッドレスサーバーで動作する唯一の選択肢でもあります。

## よくある質問

### クロップで品質は落ちますか？

いいえ。クロップは元ピクセルのある領域を選ぶだけです。残るピクセルは変化しません。縮小するのは総ピクセル数（つまりファイルサイズ）だけです。だから常に高解像度の原画から始めるのがベストです。思い切ってクロップしても結果はシャープです。

### SNS の最良のアスペクト比は？

- **Instagram 投稿**：1:1（1080x1080）または 4:5（1080x1350）で画面占有最大
- **Instagram Story / Reel**：9:16（1080x1920）
- **Twitter / X 投稿**：16:9（1200x675）
- **LinkedIn 投稿**：1.91:1（1200x627）
- **YouTube サムネ**：16:9（1280x720）
- **Facebook カバー**：2.7:1（820x312）
- **TikTok**：9:16（1080x1920）

### クロップとリサイズの違いは？

**クロップ**は画像の一領域を選び、他を捨てます。**リサイズ**は画像全体のピクセル寸法を変更します。クロップしてからリサイズ（最も一般的）でも、リサイズしてからクロップでも構いません。UtilBoxx にはそれぞれ別のツールがあるので、好きな順序で使えます。

### 円形や特殊な形にクロップできますか？

ほとんどの基本クロップツール（UtilBoxx を含む）は矩形クロップに限定されます。円形や特殊形状のクロップは、より高度なツールが必要か、正方形にクロップしてから Photoshop や GIMP で円形マスクを追加します。

### クロップついでに傾いた画像をまっすぐにできますか？

できます。Photoshop ではクロップツールに「まっすぐ化」スライダーが内蔵されています。UtilBoxx では、まず別のツールで画像を回転してからクロップします。ImageMagick では \`-deskew\` で自動補正するか、\`-rotate\` で回転してからクロップします。

### オンラインの画像クロップツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、写真がリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人情報、財務、医療、その他の機密性の高い写真を、信頼できないクロップツールにアップロードしないでください。

## まとめ

クロップは最も一般的な画像編集のひとつであり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料画像クロップツール](/ja/tools/image/crop) は明白な選択です：プライベートで、速くて、無料で、登録不要、透かしなし。

既に Photoshop を常用しているデザイナーなら、クロップツールが最も細かい制御を提供します。バッチ処理のスクリプトを書くなら、ターミナルで ImageMagick が最強です。Mac ユーザーは **プレビュー** も使えます：画像を開き、矩形選択ツールで矩形を選び、**ツール > クロップ** を選択（またはショートカット）。無料の Photoshop 代替 GIMP にも同じクロップツールがあります。

その他は、[UtilBoxx の画像ツール](/ja/tools/image) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先の画像ツールキットが見つかります。`;

const cropEs = `## ¿Por qué recortar imágenes?

Recortar es el acto de quitar las partes de una imagen que no quieres y conservar las que sí. Suena simple, pero es la edición de mayor impacto que puedes hacer. Un mal recorte puede arruinar una gran foto. Un gran recorte puede rescatar una mediocre. Los fotógrafos lo cuidan obsesivamente porque determina qué ve primero, segundo y nunca el espectador.

Las razones por las que la gente recorta imágenes son prácticas y frecuentes:

- **Mejorar la composición**: Quita bordes que distraen, espacio muerto a un lado, o transeúntes que se colaron en el fondo.
- **Cambiar la relación de aspecto**: Una toma 4:3 de cámara debe pasar a 16:9 para una miniatura de YouTube, 1:1 para una publicación de Instagram, 9:16 para una Story, o 4:5 para un retrato.
- **Enfocar la atención**: Corta el fondo cargado y mantén al sujeto al frente y al centro.
- **Enmarcar al sujeto**: Aprieta alrededor de un rostro, un logo o un producto para que el ojo aterrice ahí de inmediato.
- **Cumplir requisitos de plataforma**: Algunos sitios y apps rechazan subidas que no tienen la forma exacta.
- **Encajar en impresión**: Una foto 16:9 en una impresión 4x6 deja feas barras blancas. Recortar para coincidir con la proporción de impresión llena la página.

La buena noticia: con la herramienta adecuada, recortar una imagen es un trabajo de 10 segundos y no requiere instalar nada.

## Método 1: Usa el recortador de imágenes gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de recortar imágenes es la [herramienta de recorte de imágenes de UtilBoxx](/es/tools/image/crop). Se ejecuta por completo en tu navegador, por lo que tus fotos nunca salen de tu dispositivo. Sin subidas, sin registro y sin marca de agua en el resultado.

Así se usa:

1. Ve a [utilboxx.com/es/tools/image/crop](/es/tools/image/crop)
2. Haz clic en el área de subida y selecciona tu JPG, PNG o WebP (o arrástralo)
3. Elige un modo de recorte:
   - **Relación de aspecto** — elige 1:1, 16:9, 4:3, 9:16, 4:5, o introduce una proporción personalizada. El cuadro mantiene esa forma mientras lo arrastras.
   - **Forma libre** — arrastra el cuadro a la forma que quieras.
   - **Dimensiones de salida** — escribe el ancho y alto exactos en píxeles. La herramienta calcula la proporción que coincide.
4. Arrastra el cuadro a la posición que quieras
5. Haz clic en "Recortar"
6. Descarga el resultado

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. Tus fotos nunca llegan a un servidor.
- **Tres modos de recorte**: relación de aspecto para redes sociales, forma libre para figuras personalizadas, dimensiones de salida para tamaños exactos
- **Vista previa en vivo**: ves el marco de recorte y el resultado antes de confirmar
- **Multi-formato**: JPG, PNG y WebP en la misma herramienta
- **Sin marcas de agua** en la salida

Si solo necesitas recortar imágenes de vez en cuando, esta es la opción de menor fricción con diferencia. Y como es basada en navegador, funciona en Windows, Mac, Linux, ChromeOS, iOS y Android.

## Método 2: Adobe Photoshop (De pago)

Photoshop es el peso pesado de la edición de imágenes, y su herramienta Recortar (atajo de teclado **C**) es la forma más precisa de recortar. Puedes escribir ancho, alto y resolución exactos en la barra de opciones, fijar la relación de aspecto, elegir una proporción fija como 16:9, escoger de una lista de presets (1:1, 2:3, 3:5, 4:5, 5:7, 2:3, 16:9, etc.), o usar "Recortar consciente del contenido" para extender el fondo automáticamente al enderezar un horizonte inclinado. La herramienta de enderezar también viene integrada: solo arrastra una línea a lo largo de lo que debería ser horizontal.

El inconveniente es el precio y la complejidad. Photoshop forma parte de una suscripción a Creative Cloud que cuesta aproximadamente **$22,99 al mes** (unos $240 al año). Para un recorte puntual es excesivo, y el panel de opciones es más de lo que la mayoría necesita.

Photoshop solo vale la pena si ya lo usas para retoque, composición o diseño. Si recortar es todo lo que necesitas, una herramienta de navegador hace el trabajo sin factura ni instalación.

## Método 3: Línea de comandos con ImageMagick

Si te manejas en la terminal, la herramienta de código abierto **ImageMagick** es la opción CLI más potente para recortar imágenes. Instálala con Homebrew (\`brew install imagemagick\`), luego:

\`\`\`bash
# Recortar una región 500x500 empezando en (100, 50)
magick input.jpg -crop 500x500+100+50 output.jpg

# Recortar con gravedad (p. ej. centro, norte, sureste)
magick input.jpg -gravity center -crop 800x600+0+0 output.jpg

# Recortar a cuadrado (usa la dimensión menor)
magick input.png -gravity center -crop "$(identify -format "%[fx:w]x%[fx:h]")+0+0" +repage output.png

# Recortar automáticamente bordes de un solo color
magick input.png -trim +repage output.png

# Recorte por lotes de todos los JPG de una carpeta (centrado, 800x800)
for f in *.jpg; do magick "$f" -gravity center -crop 800x800+0+0 +repage "cropped_$f"; done
\`\`\`

La bandera \`-crop\` toma ANCHOxALTO+X+Y, donde X e Y son los desplazamientos desde la esquina superior izquierda. La bandera \`-gravity\` posiciona el recorte respecto a la imagen (center, north, south, east, west, northeast, etc.). La bandera \`-trim\` es un extra útil: elimina automáticamente bordes de color uniforme, perfecto para limpiar imágenes escaneadas o capturas con espacio en blanco extra.

**ImageMagick** es excelente para programar recortes por lotes a través de miles de archivos. También es la única opción que funciona en un servidor headless sin GUI.

## Preguntas frecuentes

### ¿Recortar reduce la calidad de la imagen?

No. Recortar solo selecciona una región de los píxeles originales. Los píxeles que quedan no cambian. Lo único que se reduce es el recuento total de píxeles (y por tanto el tamaño del archivo). Por eso siempre es mejor partir de un original de alta resolución: puedes recortar agresivamente y aun así tener un resultado nítido.

### ¿Cuál es la mejor relación de aspecto para redes sociales?

- **Publicación de Instagram**: 1:1 (1080x1080) o 4:5 (1080x1350) para máximo espacio en pantalla
- **Story / Reel de Instagram**: 9:16 (1080x1920)
- **Publicación de Twitter / X**: 16:9 (1200x675)
- **Publicación de LinkedIn**: 1,91:1 (1200x627)
- **Miniatura de YouTube**: 16:9 (1280x720)
- **Portada de Facebook**: 2,7:1 (820x312)
- **TikTok**: 9:16 (1080x1920)

### ¿Cuál es la diferencia entre recortar y redimensionar?

**Recortar** selecciona una región de la imagen y descarta el resto. **Redimensionar** cambia las dimensiones en píxeles de toda la imagen. Puedes recortar y luego redimensionar (lo más común), o redimensionar y luego recortar. UtilBoxx tiene herramientas separadas para cada operación, así que puedes hacerlas en el orden que necesites.

### ¿Puedo recortar a un área circular o con forma?

La mayoría de herramientas básicas de recorte (incluida UtilBoxx) están limitadas a recortes rectangulares. Para recortes circulares o con forma necesitas una herramienta más avanzada, o puedes recortar a un cuadrado y luego añadir una máscara circular en Photoshop o GIMP.

### ¿Puedo enderezar una imagen inclinada al recortar?

Sí. En Photoshop, la herramienta Recortar tiene un control deslizante de enderezar integrado. En UtilBoxx, primero rotarías la imagen con otra herramienta y luego recortarías. En ImageMagick, puedes usar \`-deskew\` para enderezar automáticamente, o rotar primero con \`-rotate\` y luego recortar.

### ¿Es seguro usar un recortador de imágenes online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador** — sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tus fotos se están subiendo a un servidor remoto y lee atentamente su política de privacidad. Evita subir fotos personales, financieras, médicas o de otro modo sensibles a un recortador en el que no confías.

## Conclusión

Recortar es una de las ediciones de imagen más comunes que hay, y no debería requerir una suscripción de pago o instalar software. Para la mayoría de la gente, la [herramienta gratuita de recorte de imágenes de UtilBoxx](/es/tools/image/crop) es la opción obvia: es privada, rápida y gratis, sin registro y sin marca de agua.

Si eres diseñador y ya vives en Photoshop, la herramienta Recortar te da el control más fino. Si estás programando trabajo por lotes, ImageMagick en la terminal es imbatible. Los usuarios de macOS también pueden usar **Vista Previa**: abre la imagen, arrastra una selección rectangular con la herramienta de Selección Rectangular, y luego elige **Herramientas > Recortar** (o usa el atajo de teclado). GIMP, la alternativa gratuita a Photoshop, tiene la misma herramienta de recorte a coste cero.

Para todo lo demás, visita las [herramientas de imagen de UtilBoxx](/es/tools/image) y encontrarás un conjunto completo de herramientas para trabajar con imágenes, con privacidad como prioridad, todo en tu navegador.`;

const cropPt = `## Por que cortar imagens?

Cortar é o ato de remover as partes de uma imagem que você não quer e manter as que você quer. Parece simples, mas é a edição de maior impacto que você pode fazer. Um corte ruim pode arruinar uma ótima foto. Um corte ótimo pode resgatar uma medíocre. Fotógrafos obcecam por isso porque determina o que o espectador vê primeiro, em segundo, e nunca vê.

Os motivos pelos quais as pessoas cortam imagens são práticos e frequentes:

- **Melhorar a composição**: Tire bordas que distraem, espaço vazio de um lado, ou estranhos que entraram no fundo.
- **Mudar a proporção**: Uma foto 4:3 de câmera precisa virar 16:9 para thumbnail do YouTube, 1:1 para post do Instagram, 9:16 para Story do Instagram, ou 4:5 para post retrato.
- **Focar a atenção**: Corte o fundo ocupado e mantenha o assunto em primeiro plano e centralizado.
- **Enquadrar o assunto**: Aperte em volta de um rosto, logo ou produto para o olho pousar ali imediatamente.
- **Atender requisitos de plataforma**: Alguns sites e apps rejeitam uploads que não estão na forma exata.
- **Encaixar na impressão**: Uma foto 16:9 em uma impressão 4x6 deixa barras brancas esquisitas. Cortar para casar com a proporção da impressão preenche a página.

A boa notícia: com a ferramenta certa, cortar uma imagem é um trabalho de 10 segundos e você não precisa instalar nada.

## Método 1: Use o cortador de imagens grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de cortar imagens é a [ferramenta de corte de imagens do UtilBoxx](/pt/tools/image/crop). Ela roda inteiramente no seu navegador, então suas fotos nunca saem do seu dispositivo. Sem upload, sem cadastro e sem marca d'água no resultado.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/image/crop](/pt/tools/image/crop)
2. Clique na área de upload e selecione seu JPG, PNG ou WebP (ou arraste e solte)
3. Escolha um modo de corte:
   - **Por proporção** — escolha 1:1, 16:9, 4:3, 9:16, 4:5, ou digite uma proporção personalizada. A caixa de corte mantém essa forma enquanto você arrasta.
   - **Forma livre** — arraste a caixa de corte para qualquer forma que quiser.
   - **Dimensões de saída** — digite a largura e altura exatas em pixels. A ferramenta calcula a proporção correspondente.
4. Arraste a caixa de corte para a posição desejada
5. Clique em "Cortar"
6. Baixe o resultado

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. Suas fotos nunca chegam a um servidor.
- **Três modos de corte**: proporção para redes sociais, forma livre para formas personalizadas, dimensões de saída para tamanhos exatos
- **Pré-visualização ao vivo**: veja a moldura de corte e o resultado antes de confirmar
- **Multi-formato**: JPG, PNG e WebP na mesma ferramenta
- **Sem marcas d'água** na saída

Se você só precisa cortar imagens de vez em quando, essa é a opção de menor atrito disparado. E como é baseada em navegador, funciona em Windows, Mac, Linux, ChromeOS, iOS e Android.

## Método 2: Adobe Photoshop (Pago)

Photoshop é o peso-pesado da edição de imagens, e sua ferramenta Cortar (atalho de teclado **C**) é o modo mais preciso de cortar. Você pode digitar largura, altura e resolução exatas na barra de opções, travar a proporção, definir uma proporção fixa como 16:9, escolher em uma lista de presets (1:1, 2:3, 3:5, 4:5, 5:7, 2:3, 16:9, etc.), ou usar "Corte ciente do conteúdo" para estender o fundo automaticamente ao endireitar um horizonte inclinado. A ferramenta de endireitar também é integrada: basta arrastar uma linha ao longo do que deveria ser horizontal.

O problema é o preço e a complexidade. Photoshop faz parte de uma assinatura Creative Cloud que custa cerca de **$22,99 por mês** (aproximadamente $240 por ano). Para um corte pontual é exagero, e o painel de opções é mais do que a maioria das pessoas precisa.

Photoshop vale a pena apenas se você já o usa para retoque, composição ou design. Se cortar é tudo o que você precisa, uma ferramenta baseada em navegador faz o trabalho sem fatura nem instalação.

## Método 3: Linha de comando com ImageMagick

Se você se sente confortável no terminal, a ferramenta open-source **ImageMagick** é a opção CLI mais poderosa para cortar imagens. Instale com Homebrew (\`brew install imagemagick\`), depois:

\`\`\`bash
# Cortar uma região 500x500 começando em (100, 50)
magick input.jpg -crop 500x500+100+50 output.jpg

# Cortar com gravidade (ex. centro, norte, sudeste)
magick input.jpg -gravity center -crop 800x600+0+0 output.jpg

# Cortar para quadrado (usa a dimensão menor)
magick input.png -gravity center -crop "$(identify -format "%[fx:w]x%[fx:h]")+0+0" +repage output.png

# Aparar automaticamente bordas de cor sólida
magick input.png -trim +repage output.png

# Corte em lote de todos os JPG de uma pasta (centralizado, 800x800)
for f in *.jpg; do magick "$f" -gravity center -crop 800x800+0+0 +repage "cropped_$f"; done
\`\`\`

A flag \`-crop\` toma LARGURAxALTURA+X+Y, onde X e Y são os deslocamentos do canto superior esquerdo. A flag \`-gravity\` posiciona o corte em relação à imagem (center, north, south, east, west, northeast, etc.). A flag \`-trim\` é um bônus útil: remove automaticamente bordas de cor uniforme, perfeito para limpar imagens escaneadas ou capturas com espaço em branco extra.

**ImageMagick** é excelente para programar cortes em lote através de milhares de arquivos. Também é a única opção que funciona em um servidor headless sem GUI.

## Perguntas frequentes

### Cortar reduz a qualidade da imagem?

Não. Cortar só seleciona uma região dos pixels originais. Os pixels que restam não mudam. A única coisa que diminui é a contagem total de pixels (e portanto o tamanho do arquivo). É por isso que sempre é melhor começar de um original em alta resolução: você pode cortar agressivamente e ainda ter um resultado nítido.

### Qual a melhor proporção para redes sociais?

- **Post do Instagram**: 1:1 (1080x1080) ou 4:5 (1080x1350) para máximo espaço na tela
- **Story / Reel do Instagram**: 9:16 (1080x1920)
- **Post do Twitter / X**: 16:9 (1200x675)
- **Post do LinkedIn**: 1,91:1 (1200x627)
- **Thumbnail do YouTube**: 16:9 (1280x720)
- **Capa do Facebook**: 2,7:1 (820x312)
- **TikTok**: 9:16 (1080x1920)

### Qual a diferença entre cortar e redimensionar?

**Cortar** seleciona uma região da imagem e descarta o resto. **Redimensionar** altera as dimensões em pixels de toda a imagem. Você pode cortar e depois redimensionar (o mais comum), ou redimensionar e depois cortar. UtilBoxx tem ferramentas separadas para cada uma, então você pode fazer na ordem que precisar.

### Posso cortar em área circular ou com forma?

A maioria das ferramentas básicas de corte (incluindo UtilBoxx) é limitada a cortes retangulares. Para cortes circulares ou com forma, você precisa de uma ferramenta mais avançada, ou pode cortar para um quadrado e depois adicionar uma máscara circular no Photoshop ou GIMP.

### Posso endireitar uma imagem inclinada ao cortar?

Sim. No Photoshop, a ferramenta Cortar tem um controle deslizante de endireitar embutido. No UtilBoxx, você primeiro rotacionaria a imagem com outra ferramenta e depois cortaria. No ImageMagick, você pode usar \`-deskew\` para endireitar automaticamente, ou girar primeiro com \`-rotate\` e depois cortar.

### É seguro usar um cortador de imagens online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que suas fotos estão sendo enviadas para um servidor remoto e leia atentamente sua política de privacidade. Evite enviar fotos pessoais, financeiras, médicas ou de outro modo sensíveis para um cortador em que você não confia.

## Conclusão

Cortar é uma das edições de imagem mais comuns que existem, e não deveria exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, a [ferramenta gratuita de corte de imagens do UtilBoxx](/pt/tools/image/crop) é a escolha óbvia: é privada, rápida e grátis, sem cadastro e sem marca d'água.

Se você é designer e já vive no Photoshop, a ferramenta Cortar dá o controle mais fino. Se você está programando trabalho em lote, ImageMagick no terminal é imbatível. Usuários de macOS também podem usar o **Visualização**: abra a imagem, arraste uma seleção retangular com a ferramenta de Seleção Retangular, e depois escolha **Ferramentas > Cortar** (ou use o atalho de teclado). O GIMP, a alternativa gratuita ao Photoshop, tem a mesma ferramenta de corte a custo zero.

Para todo o resto, visite as [ferramentas de imagem do UtilBoxx](/pt/tools/image) e você encontrará um conjunto completo de ferramentas para trabalhar com imagens, com privacidade como prioridade, tudo no seu navegador.`;

const cropFr = `## Pourquoi recadrer des images ?

Recadrer consiste à retirer les parties d'une image que vous ne voulez pas et à garder celles que vous voulez. Cela paraît simple, mais c'est l'édition au plus gros impact que vous puissiez faire. Un mauvais recadrage peut ruiner une superbe photo. Un excellent recadrage peut en sauver une médiocre. Les photographes en sont obsédés car cela détermine ce que le spectateur voit en premier, en deuxième, et ne voit jamais.

Les raisons pour lesquelles les gens recadrent des images sont pratiques et fréquentes :

- **Améliorer la composition** : Retirez les bords gênants, l'espace mort d'un côté, ou les passants qui se sont glissés dans le fond.
- **Changer le ratio** : Une prise de vue 4:3 doit passer en 16:9 pour une miniature YouTube, 1:1 pour un post Instagram, 9:16 pour une Story, ou 4:5 pour un portrait.
- **Focaliser l'attention** : Coupez le fond chargé et gardez le sujet au premier plan et au centre.
- **Cadrer le sujet** : Serrez autour d'un visage, d'un logo ou d'un produit pour que l'œil y atterrisse immédiatement.
- **Respecter les exigences de plateforme** : Certains sites et apps rejettent les uploads qui ne sont pas à la bonne forme.
- **Adapter à l'impression** : Une photo 16:9 sur un tirage 4x6 laisse des barres blanches gênantes. Recadrer pour matcher le ratio d'impression remplit la page.

Bonne nouvelle : avec le bon outil, recadrer une image est un travail de 10 secondes et vous n'avez rien à installer.

## Méthode 1 : Utiliser le recadreur d'images gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de recadrer des images est l'[outil de recadrage d'images de UtilBoxx](/fr/tools/image/crop). Il s'exécute entièrement dans votre navigateur, donc vos photos ne quittent jamais votre appareil. Pas de téléversement, pas d'inscription, pas de filigrane sur le résultat.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/image/crop](/fr/tools/image/crop)
2. Cliquez sur la zone de téléversement et sélectionnez votre JPG, PNG ou WebP (ou glissez-déposez)
3. Choisissez un mode de recadrage :
   - **Ratio** — choisissez 1:1, 16:9, 4:3, 9:16, 4:5, ou saisissez un ratio personnalisé. Le cadre garde cette forme pendant que vous le déplacez.
   - **Forme libre** — déplacez le cadre à la forme que vous voulez.
   - **Dimensions de sortie** — saisissez la largeur et la hauteur exactes en pixels. L'outil calcule le ratio correspondant.
4. Placez le cadre où vous le souhaitez
5. Cliquez sur « Recadrer »
6. Téléchargez le résultat

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Vos photos n'arrivent jamais sur un serveur.
- **Trois modes de recadrage** : ratio pour les réseaux sociaux, forme libre pour les formes personnalisées, dimensions de sortie pour les tailles exactes
- **Aperçu en direct** : voyez le cadre de recadrage et le résultat avant de valider
- **Multi-format** : JPG, PNG et WebP dans le même outil
- **Aucun filigrane** sur la sortie

Si vous n'avez besoin de recadrer des images qu'occasionnellement, c'est de loin l'option la plus simple. Et comme c'est basé navigateur, cela fonctionne sur Windows, Mac, Linux, ChromeOS, iOS et Android.

## Méthode 2 : Adobe Photoshop (Payant)

Photoshop est le poids lourd de l'édition d'images, et son outil Recadrer (raccourci clavier **C**) est la façon la plus précise de recadrer. Vous pouvez taper la largeur, la hauteur et la résolution exactes dans la barre d'options, verrouiller le ratio, définir un ratio fixe comme 16:9, choisir dans une liste de presets (1:1, 2:3, 3:5, 4:5, 5:7, 2:3, 16:9, etc.), ou utiliser « Recadrage en fonction du contenu » pour étendre automatiquement le fond lors du redressement d'un horizon incliné. L'outil de redressement est aussi intégré : il suffit de tirer une ligne le long de ce qui devrait être horizontal.

Le hic, c'est le prix et la complexité. Photoshop fait partie d'un abonnement Creative Cloud qui coûte environ **22,99 $ par mois** (environ 240 $ par an). Pour un recadrage ponctuel c'est disproportionné, et le panneau d'options est plus que ce dont la plupart des gens ont besoin.

Photoshop ne vaut le coup que si vous l'utilisez déjà pour la retouche, le compositing ou le design. Si recadrer est tout ce dont vous avez besoin, un outil en navigateur fait le travail sans facture ni installation.

## Méthode 3 : Ligne de commande avec ImageMagick

Si vous êtes à l'aise dans un terminal, l'outil open-source **ImageMagick** est l'option CLI la plus puissante pour recadrer des images. Installez-le avec Homebrew (\`brew install imagemagick\`), puis :

\`\`\`bash
# Recadrer une région 500x500 en partant de (100, 50)
magick input.jpg -crop 500x500+100+50 output.jpg

# Recadrer avec gravité (p. ex. centre, nord, sud-est)
magick input.jpg -gravity center -crop 800x600+0+0 output.jpg

# Recadrer en carré (utilise la dimension la plus petite)
magick input.png -gravity center -crop "$(identify -format "%[fx:w]x%[fx:h]")+0+0" +repage output.png

# Supprimer automatiquement les bordures d'une seule couleur
magick input.png -trim +repage output.png

# Recadrage par lot de tous les JPG d'un dossier (centré, 800x800)
for f in *.jpg; do magick "$f" -gravity center -crop 800x800+0+0 +repage "cropped_$f"; done
\`\`\`

Le flag \`-crop\` prend LARGEURxHAUTEUR+X+Y, où X et Y sont les décalages depuis le coin supérieur gauche. Le flag \`-gravity\` positionne le recadrage par rapport à l'image (center, north, south, east, west, northeast, etc.). Le flag \`-trim\` est un bonus pratique : il retire automatiquement les bordures de couleur uniforme, parfait pour nettoyer des images scannées ou des captures avec trop d'espace blanc.

**ImageMagick** est excellent pour scripter des recadrages par lots sur des milliers de fichiers. C'est aussi la seule option qui fonctionne sur un serveur headless sans GUI.

## Questions fréquentes

### Recadrer réduit-il la qualité de l'image ?

Non. Recadrer sélectionne juste une région des pixels d'origine. Les pixels qui restent sont inchangés. La seule chose qui diminue est le nombre total de pixels (et donc la taille du fichier). C'est pourquoi il vaut toujours mieux partir d'un original haute résolution : vous pouvez recadrer agressivement et avoir tout de même un résultat net.

### Quel est le meilleur ratio pour les réseaux sociaux ?

- **Publication Instagram** : 1:1 (1080x1080) ou 4:5 (1080x1350) pour un max d'espace à l'écran
- **Story / Reel Instagram** : 9:16 (1080x1920)
- **Publication Twitter / X** : 16:9 (1200x675)
- **Publication LinkedIn** : 1,91:1 (1200x627)
- **Miniature YouTube** : 16:9 (1280x720)
- **Couverture Facebook** : 2,7:1 (820x312)
- **TikTok** : 9:16 (1080x1920)

### Quelle est la différence entre recadrer et redimensionner ?

**Recadrer** sélectionne une région de l'image et jette le reste. **Redimensionner** change les dimensions en pixels de toute l'image. Vous pouvez recadrer puis redimensionner (le plus courant), ou redimensionner puis recadrer. UtilBoxx a des outils séparés pour chaque opération, donc vous pouvez les faire dans l'ordre que vous voulez.

### Puis-je recadrer en cercle ou avec une forme ?

La plupart des outils de recadrage basiques (UtilBoxx inclus) se limitent au recadrage rectangulaire. Pour des recadrages circulaires ou en forme, il faut un outil plus avancé, ou vous pouvez recadrer en carré puis ajouter un masque circulaire dans Photoshop ou GIMP.

### Puis-je redresser une image inclinée en recadrant ?

Oui. Dans Photoshop, l'outil Recadrer a un curseur de redressement intégré. Dans UtilBoxx, vous feriez pivoter l'image avec un autre outil d'abord, puis recadreriez. Dans ImageMagick, vous pouvez utiliser \`-deskew\` pour redresser automatiquement, ou pivoter d'abord avec \`-rotate\` puis recadrer.

### Est-il sûr d'utiliser un recadreur d'images en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que vos photos sont téléversées sur un serveur distant et lisez attentivement leur politique de confidentialité. Évitez de téléverser des photos personnelles, financières, médicales ou autrement sensibles sur un recadreur en qui vous n'avez pas confiance.

## Conclusion

Recadrer est l'une des éditions d'image les plus courantes, et ne devrait pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, l'[outil gratuit de recadrage d'images de UtilBoxx](/fr/tools/image/crop) est le choix évident : privé, rapide, gratuit, sans inscription ni filigrane.

Si vous êtes designer et vivez déjà dans Photoshop, l'outil Recadrer vous offre le contrôle le plus fin. Si vous scriptz du travail par lots, ImageMagick dans le terminal est imbattable. Les utilisateurs de macOS peuvent aussi utiliser **Aperçu** : ouvrez l'image, tirez une sélection rectangulaire avec l'outil de sélection rectangulaire, puis choisissez **Outils > Rogner** (ou utilisez le raccourci clavier). GIMP, l'alternative gratuite à Photoshop, propose le même outil de recadrage à coût zéro.

Pour tout le reste, rendez-vous sur les [outils image de UtilBoxx](/fr/tools/image) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const cropDe = `## Warum Bilder zuschneiden?

Zuschneiden bedeutet, die Teile eines Bildes zu entfernen, die du nicht willst, und die Teile zu behalten, die du willst. Es klingt einfach, ist aber die wirkungsvollste Bearbeitung, die du machen kannst. Ein schlechter Zuschnitt kann ein großartiges Foto ruinieren. Ein großartiger Zuschnitt kann ein mittelmäßiges retten. Fotografen sind besessen davon, weil es bestimmt, was der Betrachter zuerst, zweitens und nie sieht.

Die Gründe, warum Menschen Bilder zuschneiden, sind praktisch und häufig:

- **Komposition verbessern**: Entferne ablenkende Ränder, tote Bereiche auf einer Seite oder zufällige Passanten, die sich in den Hintergrund verirrt haben.
- **Seitenverhältnis ändern**: Eine 4:3-Kameraaufnahme muss zu 16:9 für ein YouTube-Thumbnail werden, 1:1 für einen Instagram-Post, 9:16 für eine Instagram-Story oder 4:5 für einen Porträt-Post.
- **Aufmerksamkeit fokussieren**: Schneide den unruhigen Hintergrund weg und halte das Motiv vorne und in der Mitte.
- **Motiv rahmen**: Ziehe eng um ein Gesicht, ein Logo oder ein Produkt, damit das Auge sofort darauf landet.
- **Plattform-Anforderungen erfüllen**: Manche Seiten und Apps lehnen Uploads ab, die nicht die exakte Form haben.
- **Druck anpassen**: Ein 16:9-Foto auf einem 4x6-Druck hinterlässt hässliche weiße Balken. Ein Zuschnitt passend zum Druckverhältnis füllt die Seite.

Die gute Nachricht: Mit dem richtigen Werkzeug ist das Zuschneiden eines Bildes eine 10-Sekunden-Aufgabe, und du musst nichts installieren.

## Methode 1: Den kostenlosen Bildzuschneider von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode, Bilder zuzuschneiden, ist das [Bildzuschneidewerkzeug von UtilBoxx](/de/tools/image/crop). Es läuft vollständig in deinem Browser, sodass deine Fotos dein Gerät nie verlassen. Kein Upload, keine Registrierung, kein Wasserzeichen im Ergebnis.

So verwendest du es:

1. Gehe zu [utilboxx.com/de/tools/image/crop](/de/tools/image/crop)
2. Klicke auf den Upload-Bereich und wähle deine JPG, PNG oder WebP (oder ziehe sie per Drag & Drop)
3. Wähle einen Zuschnittsmodus:
   - **Seitenverhältnis** — wähle 1:1, 16:9, 4:3, 9:16, 4:5 oder gib ein eigenes Verhältnis ein. Der Zuschnittsrahmen behält diese Form beim Ziehen.
   - **Freiform** — ziehe den Rahmen in jede gewünschte Form.
   - **Ausgabeabmessungen** — gib die exakte Breite und Höhe in Pixeln ein. Das Werkzeug berechnet das passende Verhältnis.
4. Ziehe den Rahmen an die gewünschte Position
5. Klicke auf „Zuschneiden"
6. Lade das Ergebnis herunter

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in deinem Browser verarbeitet. Deine Fotos erreichen nie einen Server.
- **Drei Zuschnittsmodi**: Seitenverhältnis für Social Media, Freiform für eigene Formen, Ausgabeabmessungen für exakte Größen
- **Live-Vorschau**: sieh den Zuschnittsrahmen und das Ergebnis vor dem Bestätigen
- **Multi-Format**: JPG, PNG und WebP im selben Werkzeug
- **Keine Wasserzeichen** in der Ausgabe

Wenn du nur gelegentlich Bilder zuschneidest, ist dies die reibungsloseste Option. Und weil es browserbasiert ist, läuft es auf Windows, Mac, Linux, ChromeOS, iOS und Android.

## Methode 2: Adobe Photoshop (Kostenpflichtig)

Photoshop ist das Schwergewicht der Bildbearbeitung, und sein Zuschnittswerkzeug (Tastaturkurzbefehl **C**) ist der präziseste Weg zum Zuschneiden. Du kannst exakte Breite, Höhe und Auflösung in die Optionsleiste eingeben, das Seitenverhältnis sperren, ein festes Verhältnis wie 16:9 setzen, aus einer Liste von Voreinstellungen wählen (1:1, 2:3, 3:5, 4:5, 5:7, 2:3, 16:9 usw.) oder „Inhaltsbasiertes Zuschneiden" verwenden, um beim Begradigen eines schiefen Horizonts den Hintergrund automatisch zu erweitern. Das Begradigungswerkzeug ist ebenfalls eingebaut — ziehe einfach eine Linie entlang dessen, was horizontal sein sollte.

Der Haken ist der Preis und die Komplexität. Photoshop ist Teil eines Creative-Cloud-Abonnements, das ungefähr **22,99 $ pro Monat** (etwa 240 $ pro Jahr) kostet. Für einen gelegentlichen Zuschnitt ist das übertrieben, und das Optionsfeld bietet mehr als die meisten Menschen brauchen.

Photoshop lohnt sich nur, wenn du es bereits für Retusche, Compositing oder Design nutzt. Wenn Zuschneiden alles ist, was du brauchst, erledigt ein Browser-Werkzeug die Arbeit ohne Rechnung und ohne Installation.

## Methode 3: Kommandozeile mit ImageMagick

Wenn du dich im Terminal wohlfühlst, ist das Open-Source-Werkzeug **ImageMagick** die leistungsfähigste CLI-Option zum Zuschneiden von Bildern. Installiere es mit Homebrew (\`brew install imagemagick\`), dann:

\`\`\`bash
# 500x500-Bereich ab (100, 50) zuschneiden
magick input.jpg -crop 500x500+100+50 output.jpg

# Mit Schwerkraft zuschneiden (z. B. Mitte, Norden, Südosten)
magick input.jpg -gravity center -crop 800x600+0+0 output.jpg

# Zu Quadrat zuschneiden (kleinere Dimension verwenden)
magick input.png -gravity center -crop "$(identify -format "%[fx:w]x%[fx:h]")+0+0" +repage output.png

# Gleichfarbige Ränder automatisch entfernen
magick input.png -trim +repage output.png

# Stapel-Zuschnitt aller JPGs in einem Ordner (zentriert, 800x800)
for f in *.jpg; do magick "$f" -gravity center -crop 800x800+0+0 +repage "cropped_$f"; done
\`\`\`

Das Flag \`-crop\` nimmt BREITExHÖHE+X+Y, wobei X und Y die Versätze von der oberen linken Ecke sind. Das Flag \`-gravity\` positioniert den Zuschnitt relativ zum Bild (center, north, south, east, west, northeast usw.). Das Flag \`-trim\` ist ein praktischer Bonus: entfernt automatisch einfarbige Ränder, perfekt zum Aufräumen gescannter Bilder oder Screenshots mit zusätzlichem Weißraum.

**ImageMagick** eignet sich hervorragend, um Stapelzuschnitte über Tausende von Dateien zu skripten. Es ist auch die einzige Option, die auf einem kopflosen Server ohne GUI funktioniert.

## Häufige Fragen

### Verringert Zuschneiden die Bildqualität?

Nein. Zuschneiden wählt nur einen Bereich der Originalpixel aus. Die verbleibenden Pixel sind unverändert. Das Einzige, was sich verringert, ist die Gesamtpixelanzahl (und damit die Dateigröße). Deshalb ist es immer am besten, mit einem hochauflösenden Original zu beginnen: Du kannst aggressiv zuschneiden und trotzdem ein scharfes Ergebnis haben.

### Was ist das beste Seitenverhältnis für Social Media?

- **Instagram-Post**: 1:1 (1080x1080) oder 4:5 (1080x1350) für maximalen Bildschirmraum
- **Instagram-Story / Reel**: 9:16 (1080x1920)
- **Twitter / X-Post**: 16:9 (1200x675)
- **LinkedIn-Post**: 1,91:1 (1200x627)
- **YouTube-Thumbnail**: 16:9 (1280x720)
- **Facebook-Cover**: 2,7:1 (820x312)
- **TikTok**: 9:16 (1080x1920)

### Was ist der Unterschied zwischen Zuschneiden und Skalieren?

**Zuschneiden** wählt einen Bereich des Bildes und verwirft den Rest. **Skalieren** ändert die Pixelmaße des gesamten Bildes. Du kannst zuschneiden und dann skalieren (am häufigsten), oder skalieren und dann zuschneiden. UtilBoxx hat separate Werkzeuge für jede Operation, sodass du sie in der Reihenfolge ausführen kannst, die du brauchst.

### Kann ich in einen kreisförmigen oder geformten Bereich zuschneiden?

Die meisten einfachen Zuschnittswerkzeuge (einschließlich UtilBoxx) sind auf rechteckige Zuschnitte beschränkt. Für kreisförmige oder geformte Zuschnitte brauchst du ein fortgeschritteneres Werkzeug, oder du schneidest zu einem Quadrat zu und fügst dann in Photoshop oder GIMP eine kreisförmige Maske hinzu.

### Kann ich ein schiefes Bild beim Zuschneiden begradigen?

Ja. In Photoshop hat das Zuschnittswerkzeug einen eingebauten Begradigungsregler. In UtilBoxx würdest du das Bild zuerst mit einem anderen Werkzeug drehen und dann zuschneiden. In ImageMagick kannst du \`-deskew\` zur automatischen Begradigung nutzen, oder zuerst mit \`-rotate\` drehen und dann zuschneiden.

### Ist die Nutzung eines Online-Bildzuschneiders sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in deinem Browser** — kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen solltest du davon ausgehen, dass deine Fotos auf einen entfernten Server hochgeladen werden, und die Datenschutzrichtlinie sorgfältig lesen. Vermeide das Hochladen persönlicher, finanzieller, medizinischer oder anderweitig sensibler Fotos zu einem Zuschneider, dem du nicht vertraust.

## Fazit

Zuschneiden ist eine der häufigsten Bildbearbeitungen überhaupt und sollte keine kostenpflichtige Subskription oder Software-Installation erfordern. Für die meisten Menschen ist das [kostenlose Bildzuschneidewerkzeug von UtilBoxx](/de/tools/image/crop) die offensichtliche Wahl: privat, schnell, kostenlos, ohne Registrierung und ohne Wasserzeichen.

Wenn du Designer bist und bereits in Photoshop lebst, gibt dir das Zuschnittswerkzeug die feinste Kontrolle. Wenn du Stapelverarbeitung skriptest, ist ImageMagick im Terminal unschlagbar. macOS-Nutzer können auch **Vorschau** verwenden: Bild öffnen, mit dem rechteckigen Auswahlwerkzeug einen Bereich ziehen, dann **Werkzeuge > Zuschneiden** wählen (oder das Tastaturkürzel nutzen). GIMP, die kostenlose Photoshop-Alternative, hat dasselbe Zuschnittswerkzeug zum Nulltarif.

Für alles andere besuche die [Bild-Werkzeuge von UtilBoxx](/de/tools/image): Dort findest du einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit Bildern — alles im Browser.`;

export const cropPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-crop-images-online",
    category: "Image Tools",
    date: "2026-02-22",
    readTime: "4 min",
    title: "How to Crop Images Online (Free, in Your Browser)",
    description: "Crop JPG, PNG, WebP to any aspect ratio. Free, fast, and private — no upload.",
    content: cropEn,
  },
  zh: {
    slug: "how-to-crop-images-online",
    category: "图片工具",
    date: "2026-02-22",
    readTime: "4 分钟",
    title: "如何在线裁剪图片（免费，浏览器内完成）",
    description: "把 JPG、PNG、WebP 裁剪成任意宽高比。免费、快速、私密 —— 无需上传。",
    content: cropZh,
  },
  ja: {
    slug: "how-to-crop-images-online",
    category: "画像ツール",
    date: "2026-02-22",
    readTime: "4 分",
    title: "オンラインで画像をクロップする方法（無料・ブラウザで完結）",
    description: "JPG、PNG、WebP を任意のアスペクト比にクロップ。無料、迅速、プライベート — アップロード不要。",
    content: cropJa,
  },
  es: {
    slug: "how-to-crop-images-online",
    category: "Herramientas de imagen",
    date: "2026-02-22",
    readTime: "4 min",
    title: "Cómo recortar imágenes online (gratis, en tu navegador)",
    description: "Recorta JPG, PNG, WebP a cualquier relación de aspecto. Gratis, rápido y privado — sin subida.",
    content: cropEs,
  },
  pt: {
    slug: "how-to-crop-images-online",
    category: "Ferramentas de imagem",
    date: "2026-02-22",
    readTime: "4 min",
    title: "Como cortar imagens online (grátis, no seu navegador)",
    description: "Corte JPG, PNG, WebP em qualquer proporção. Grátis, rápido e privado — sem upload.",
    content: cropPt,
  },
  fr: {
    slug: "how-to-crop-images-online",
    category: "Outils d'image",
    date: "2026-02-22",
    readTime: "4 min",
    title: "Comment recadrer des images en ligne (gratuit, dans votre navigateur)",
    description: "Recadrez JPG, PNG, WebP à tout ratio. Gratuit, rapide et privé — pas de téléversement.",
    content: cropFr,
  },
  de: {
    slug: "how-to-crop-images-online",
    category: "Bildbearbeitungs-Tools",
    date: "2026-02-22",
    readTime: "4 Min",
    title: "Bilder online zuschneiden (kostenlos, im Browser)",
    description: "Schneide JPG, PNG, WebP auf jedes Seitenverhältnis zu. Kostenlos, schnell und privat — kein Upload.",
    content: cropDe,
  },
};
