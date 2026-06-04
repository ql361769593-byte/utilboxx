// Blog post: How to Resize Images Without Losing Quality
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const resizeEn = `## Why resize images?

Resizing is one of the most common image operations there is. You shoot a 6000x4000 photo on your phone, but Instagram wants 1080x1080. You download a 4000x4000 product shot, but your website only has room for 800x800 thumbnails. You capture a 4K screenshot, but the support ticket attachment limit is 1920px wide. In every case, the answer is the same: resize the image.

The trick is doing it **without losing visible quality**. Resize up and you get blurry, pixelated mush. Resize down and you usually look fine, but throw away too much and you also lose detail. The right approach depends on whether you need exact pixels, a percentage, or a preset.

The reasons people resize images are practical and frequent:

- **Web performance**: A 6000x4000 photo weighs 8 MB and takes 4 seconds to load on mobile. The same image at 1600x1067 weighs 400 KB and loads in 0.3 seconds.
- **Email attachments**: Most clients cap images around 1500-2000 px on the long edge. Anything bigger gets rejected or auto-resized by the recipient's mail provider.
- **Social media presets**: Instagram post = 1080x1080. Story = 1080x1920. Twitter = 1200x675. LinkedIn = 1200x627. YouTube thumbnail = 1280x720. Each platform has its own spec.
- **Print vs screen**: Print needs 300 DPI. Screen needs 72-150 DPI. Resizing the source to match avoids wasting pixels or ending up with a blurry poster.
- **Storage organization**: Keeping a master full-size original plus a "share size" variant keeps your library lean.
- **Design constraints**: Banners, cards, hero images — every layout has its own box, and resizing is how the source photo fits it.

The good news: with the right tool, resizing an image is a 10-second job, and you do not need to install anything.

## Method 1: Use UtilBoxx's Free Image Resizer (Recommended)

The fastest, safest, and most private way to resize images is [UtilBoxx's Image Resize tool](/en/tools/image/resize). It runs entirely in your browser, so your photos never leave your device. There is no upload, no signup, and no watermark on the output.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/image/resize](/en/tools/image/resize)
2. Click the upload area and select your JPG, PNG, or WebP (or drag and drop)
3. Choose a resize mode:
   - **By percentage** — e.g. 50% makes the image half as wide and half as tall
   - **By exact pixels** — type the new width and height
   - **By social media preset** — pick Instagram Post, Story, Twitter, LinkedIn, YouTube Thumbnail, etc.
4. Toggle "Lock aspect ratio" so the image does not get stretched
5. Click "Resize"
6. Download the result (or all results as a zip)

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. Your photos never reach a server.
- **Three resize modes**: percentage, exact pixels, and a library of social media presets
- **Aspect ratio lock**: prevents the awkward stretched look when you only enter one dimension
- **Multi-format**: JPG, PNG, and WebP in the same tool
- **Batch friendly**: drop 20 images and resize them all at once
- **No watermarks** on the output

If you only resize images once in a while, this is by far the lowest-friction option. And because it is browser-based, it works on Windows, Mac, Linux, ChromeOS, iOS, and Android.

## Method 2: Adobe Photoshop (Paid)

Photoshop is the heavyweight of image editing, and its "Image > Image Size" dialog is the gold standard for precise resizing. You can switch between pixels, percent, inches, cm, and points; set the resolution (DPI) independently; and turn resampling on or off. The dropdown of resampling algorithms (Bicubic, Bicubic Smoother, Bicubic Sharper, Nearest Neighbor, Preserve Details) gives you fine-grained control over how pixels are interpolated.

The catch is the price and the complexity. Photoshop is part of a Creative Cloud subscription that costs roughly **$22.99 per month** (about $240 per year). For a one-off resize, it is overkill, and the menu depth is overkill for a simple operation.

Photoshop is worth it only if you already use it for retouching, compositing, or design work. If resize is all you need, a browser tool does the job without the bill or the install.

## Method 3: Command line with ImageMagick

If you are comfortable in a terminal, the open-source tool **ImageMagick** is the most powerful CLI option for image resizing. Install it with Homebrew (\`brew install imagemagick\`), then:

\`\`\`bash
# Resize to 50% of the original
magick input.png -resize 50% output.png

# Resize to a specific width, keeping aspect ratio
magick input.jpg -resize 1200x output.jpg

# Resize to fit within a box (no enlargement if already smaller)
magick input.png -resize 800x600\> output.png

# Resize to exact dimensions (ignoring aspect ratio)
magick input.jpg -resize 800x600! output.jpg

# Resize and compress all PNGs in a folder
for f in *.png; do magick "$f" -resize 1024x "resized_$f"; done
\`\`\`

The trailing characters matter: \`1200x\` means fit to width 1200 and scale height proportionally. \`800x600\>\` means resize only if larger than 800x600 (the \`>\` flag prevents upscaling). \`800x600!\` means force exact dimensions (ignores aspect ratio). For a specific algorithm, use \`-filter Lanczos\` or \`-filter Point\` for nearest-neighbor.

**ImageMagick** is excellent for scripting batch resizes across thousands of files. It is also the only option that works on a headless server with no GUI.

## Common questions

### Does resizing reduce image quality?

It depends. **Resizing down** (making smaller) almost always looks fine, especially with a good resampling algorithm. The browser tool uses Lanczos, which is the standard high-quality choice. **Resizing up** (making bigger) adds pixels that did not exist, so the result looks blurry. This is why professional workflows always shoot at or above the target size.

### What is the best resampling algorithm?

For shrinking, **Lanczos** or **Bicubic Sharper** gives the cleanest result. For enlarging, **Bicubic Smoother** or **Preserve Details** (Photoshop) avoids the harsh pixel look. UtilBoxx and ImageMagick both default to Lanczos for shrinking and Bicubic for enlarging.

### What is the difference between resize and resample?

In Photoshop terminology, **resize** changes the on-disk pixel dimensions. **Resample** also changes the pixel count (adds or removes pixels). In casual speech and most other tools, "resize" means resample. UtilBoxx resizes (resamples) by default; you would only avoid resampling if you are changing the print size (DPI) of an already-correct pixel image.

### How do I resize for Instagram?

Open UtilBoxx's resize tool, pick the **Instagram Post** preset (1080x1080), drop your photo, and download. Done. There are also presets for Instagram Story (1080x1920), Twitter (1200x675), LinkedIn (1200x627), YouTube Thumbnail (1280x720), Facebook Cover (820x312), and more.

### Will resizing a JPG degrade it further?

Each time you save a JPG, it is re-encoded, and a small amount of quality is lost. If you resize a JPG and save it again as JPG, you get one more generation of loss. To minimize this, work from the original master, do all your edits, and save the final JPG only once. PNGs and WebPs in lossless mode do not have this issue.

### Is it safe to use an online image resizer?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your photos are being uploaded to a remote server and read their privacy policy carefully. Avoid uploading personal, financial, medical, or otherwise sensitive photos to a resizer you do not trust.

## Conclusion

Resizing images is one of those small tasks that comes up constantly and should not require a paid subscription or a software install. For most people, [UtilBoxx's free Image Resize tool](/en/tools/image/resize) is the obvious choice: it is private, fast, and free, with no signup and no watermark.

If you are a designer who already lives in Photoshop, "Image Size" gives you the finest control. If you are scripting batch work, ImageMagick in the terminal is unbeatable. And GIMP, the free Photoshop alternative, has the same dialog at zero cost. macOS users can also use **Preview**: open the image, choose **Tools > Adjust Size**, type the new dimensions, and save.

For everything else, head to [UtilBoxx Image tools](/en/tools/image) and you will find a complete, privacy-first toolkit for working with images — all in your browser.`;

const resizeZh = `## 为什么要调整图片大小？

调整大小是最常见的图片操作之一。你用手机拍了一张 6000x4000 的照片，但 Instagram 想要 1080x1080。你下载了一张 4000x4000 的产品图，但你的网站只能放 800x800 的缩略图。你截了一张 4K 截图，但工单附件限制宽度 1920px。每种情况的答案都是同一个：调整图片大小。

诀窍是**不让画质可见地损失**。放大，你会得到模糊、像素化的糊墙；缩小，一般看起来还行，但缩太多也会丢细节。正确的做法取决于你需要精确像素、百分比还是预设。

人们需要调整图片大小的原因既实际又频繁：

- **网页性能**：6000x4000 的照片 8 MB，手机上要 4 秒加载。同一张图缩到 1600x1067 变成 400 KB，加载只要 0.3 秒。
- **邮件附件**：大多数邮件客户端限制长边 1500-2000 px。再大就被拒收或被收件方的邮件服务商自动缩图。
- **社交媒体预设**：Instagram 帖子 = 1080x1080。Story = 1080x1920。Twitter = 1200x675。LinkedIn = 1200x627。YouTube 缩略图 = 1280x720。每个平台都有自己的规格。
- **印刷 vs 屏幕**：印刷需要 300 DPI。屏幕需要 72-150 DPI。把源图缩到匹配尺寸，避免浪费像素或得到模糊的海报。
- **存储整理**：保留一份全尺寸原图加一份"分享尺寸"版本，让图库更轻盈。
- **设计约束**：横幅、卡片、头图 —— 每个布局都有自己的框，调整大小让源图能塞进去。

好消息是：只要用对工具，调整图片大小只需 10 秒，而且不需要装任何东西。

## 方法一：使用 UtilBoxx 免费图片调整大小工具（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的图片调整大小工具](/zh/tools/image/resize)。它完全在你的浏览器中运行，照片不会离开你的设备。没有上传、没有注册、输出文件没有水印。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/image/resize](/zh/tools/image/resize)
2. 点击上传区域选择你的 JPG、PNG 或 WebP（或直接拖入）
3. 选择调整模式：
   - **按百分比** —— 例如 50% 让图宽高都缩到一半
   - **按精确像素** —— 输入新的宽和高
   - **按社交媒体预设** —— 选择 Instagram 帖子、Story、Twitter、LinkedIn、YouTube 缩略图等
4. 开启"锁定宽高比"以防图片被拉伸变形
5. 点击"调整大小"
6. 下载结果（多个文件时打包成 zip）

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，照片不会上传到任何服务器
- **三种调整模式**：百分比、精确像素、社交媒体预设库
- **宽高比锁定**：只填一个尺寸时不会得到被拉伸的尴尬效果
- **多格式**：JPG、PNG、WebP 一个工具搞定
- **支持批量**：一次拖入 20 张，全部一起调整
- **输出无水印**

如果你只是偶尔调整一下图片大小，这是最省心的选择。而且因为它基于浏览器，Windows、Mac、Linux、ChromeOS、iOS、Android 都能用。

## 方法二：Adobe Photoshop（付费）

Photoshop 是图像编辑领域的重量级选手，它的"图像 > 图像大小"对话框是精确调整的黄金标准。你可以在像素、百分比、英寸、厘米、点之间切换；独立设置分辨率（DPI）；打开或关闭重新采样。重新采样算法下拉菜单（双三次、双三次（较平滑）、双三次（较锐利）、邻近、保留细节）让你对像素如何插值有精细控制。

代价是价格和复杂度。Photoshop 是 Creative Cloud 订阅的一部分，每月约 **$22.99**（每年约 $240 美元）。如果只是偶尔缩一缩，杀鸡用牛刀，菜单深度对简单操作来说也太夸张。

只有当你已经用它做修图、合成或设计时，Photoshop 才值得。如果调大小就是你的全部需求，浏览器工具就够用，还免了账单和安装。

## 方法三：命令行 ImageMagick

如果你熟悉终端，开源工具 **ImageMagick** 是最强大的图片调整大小命令行选择。用 Homebrew 安装（\`brew install imagemagick\`）后：

\`\`\`bash
# 缩到原图的 50%
magick input.png -resize 50% output.png

# 缩到指定宽度，高度按比例
magick input.jpg -resize 1200x output.jpg

# 缩进一个框内（如果原图已经更小就不放大了）
magick input.png -resize 800x600\> output.png

# 强制精确尺寸（忽略宽高比）
magick input.jpg -resize 800x600! output.jpg

# 缩放并处理文件夹内所有 PNG
for f in *.png; do magick "$f" -resize 1024x "resized_$f"; done
\`\`\`

结尾的字符很关键：\`1200x\` 表示按宽 1200 缩放，高度按比例。\`800x600\>\` 表示仅当原图大于 800x600 时才缩（\`>\` 标志防止放大）。\`800x600!\` 表示强制精确尺寸（忽略宽高比）。指定算法可以用 \`-filter Lanczos\` 或 \`-filter Point\`（邻近）。

**ImageMagick** 非常适合写脚本对成百上千个文件做批量调整，也是无 GUI 环境的服务器上唯一可行的方案。

## 常见问题

### 调整大小会降低画质吗？

看情况。**缩小**（变小）几乎总是看起来不错，特别是用好的重采样算法。浏览器工具默认用 Lanczos，是高质量的标准选择。**放大**（变大）会添加原本不存在的像素，结果看起来模糊。这就是为什么专业流程总是在等于或大于目标尺寸时拍摄。

### 最好的重采样算法是什么？

缩小用 **Lanczos** 或 **双三次（较锐利）** 最干净。放大用 **双三次（较平滑）** 或 **保留细节**（Photoshop）可以避免生硬的像素感。UtilBoxx 和 ImageMagick 默认缩小用 Lanczos，放大用双三次。

### 调整大小和重新采样有什么区别？

在 Photoshop 的术语里，**resize** 改变磁盘上的像素尺寸。**resample** 也改变像素总数（增加或减少像素）。在日常用法和大多数其他工具里，"resize" 就意味着 resample。UtilBoxx 默认 resample；如果你要改的是已经像素正确的图的打印尺寸（DPI），那才不需要 resample。

### Instagram 用多大尺寸？

打开 UtilBoxx 调整大小工具，选 **Instagram 帖子** 预设（1080x1080），拖入照片，下载。搞定。还有 Instagram Story（1080x1920）、Twitter（1200x675）、LinkedIn（1200x627）、YouTube 缩略图（1280x720）、Facebook 封面（820x312）等等预设。

### 调整 JPG 大小会进一步降低画质吗？

每保存一次 JPG，它都会被重新编码，损失一小部分画质。如果你调了 JPG 大小再以 JPG 保存，就又多一代损失。要把这个损失最小化，永远从原图开始工作，做完所有编辑，只以 JPG 保存一次最终版。PNG 和 WebP 的无损模式没有这个问题。

### 在线图片调整大小工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的照片会被上传到远程服务器，并仔细阅读隐私政策。避免向你不信任的调整大小工具上传任何包含个人、财务、医疗或敏感信息的照片。

## 结论

调整图片大小是一件经常要做的小事，不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费图片调整大小工具](/zh/tools/image/resize) 是显而易见的选择：私密、快速、免费、无需注册、无水印。

如果你是常驻 Photoshop 的设计师，"图像大小"给你最精细的控制。如果你写脚本做批量处理，ImageMagick 在终端里无可替代。免费替代品 GIMP 也有同样的对话框。Mac 用户也可以用 **Preview**：打开图片，选择 **工具 > 调整大小**，输入新尺寸，保存。

其他情况下，去看 [UtilBoxx 的图片工具集](/zh/tools/image)，你会找到一个完整的、隐私优先的图片处理工具箱 —— 全部在浏览器里完成。`;

const resizeJa = `## なぜ画像のリサイズをするのか？

リサイズは最も一般的な画像操作のひとつです。スマホで 6000x4000 の写真を撮ったが、Instagram は 1080x1080 を求めている。4000x4000 の商品ショットをダウンロードしたが、サイトには 800x800 のサムネしか置けない。4K のスクリーンショットを撮ったが、サポートチケットの添付幅は 1920px まで。どのケースも答えは画像のリサイズです。

コツは**見た目の品質を落とさずに行う**こと。拡大するとぼやけたピクセル化、縮小は概ね問題ありませんが、やりすぎると細部が失われます。どのアプローチが正しいかは、厳密なピクセル値、百分比、または preset を必要とするかどうかで変わります。

人が画像をリサイズする理由は実際的でしかも頻繁です：

- **ウェブパフォーマンス**：6000x4000 の写真は 8 MB でスマホで 4 秒かかる。同じ画像を 1600x1067 にすれば 400 KB で 0.3 秒で読み込み完了。
- **メール添付**：ほとんどのクライアントは長辺 1500〜2000 px に制限。それ以上だと拒否されたり、受信側プロバイダに自動縮小されたりします。
- **ソーシャルメディアのプリセット**：Instagram 投稿 = 1080x1080。Story = 1080x1920。Twitter = 1200x675。LinkedIn = 1200x627。YouTube サムネ = 1280x720。プラットフォームごとに仕様があります。
- **印刷 vs 画面**：印刷は 300 DPI 必要。画面は 72〜150 DPI。ソースを合わせるサイズにリサイズすれば、ピクセルを浪費せず、ぼやけたポスターにもなりません。
- **ストレージ整理**：マスターのフルサイズ原画と「共有用サイズ」を残せば、ライブラリが軽くなります。
- **デザイン制約**：バナー、カード、ヒーロー画像 — どのレイアウトにも枠があり、リサイズでソース写真をその枠に収めます。

良いニュースは、適切なツールを使えば画像のリサイズは 10 秒で終わり、何もインストールする必要がないことです。

## 方法 1：UtilBoxx の無料画像リサイズツール（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の画像リサイズツール](/ja/tools/image/resize) です。完全にブラウザ内で動作するため、写真がデバイスの外に出ることがありません。アップロードも登録も不要で、透かしも入りません。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/image/resize](/ja/tools/image/resize) を開く
2. アップロード領域をクリックして JPG、PNG、WebP を選択（またはドラッグ＆ドロップ）
3. リサイズモードを選択：
   - **百分比** — 例：50% で幅高さとも半分に
   - **厳密なピクセル** — 新しい幅と高さを入力
   - **ソーシャルメディアプリセット** — Instagram 投稿、Story、Twitter、LinkedIn、YouTube サムネなどから選択
4.「アスペクト比を固定」をオンにして画像が伸びないようにする
5.「リサイズ」をクリック
6. 結果をダウンロード（複数なら zip）

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべての処理がブラウザ内で完結。写真はサーバーへ送信されません
- **3 つのリサイズモード**：百分比、厳密ピクセル、ソーシャルメディアのプリセットライブラリ
- **アスペクト比固定**：片側だけ指定しても引き伸ばされた仕上がりにならない
- **マルチフォーマット**：JPG、PNG、WebP を同じツールで
- **バッチ処理に対応**：20 枚ドロップして一括処理
- **出力に透かしなし**

たまに画像をリサイズするだけなら、これほど低コストな選択肢はありません。ブラウザベースなので、Windows、Mac、Linux、ChromeOS、iOS、Android で動作します。

## 方法 2：Adobe Photoshop（有料）

Photoshop は画像編集のヘビー級で、その「画像 > 画像サイズ」ダイアログは精密なリサイズのゴールドスタンダードです。ピクセル、百分比、インチ、cm、ポイントを切り替えたり、解像度（DPI）を独立して設定したり、再サンプリングのオン/オフを切り替えたりできます。再サンプリングアルゴリズムのドロップダウン（バイキュービック、バイキュービック（滑らかに）、バイキュービック（シャープ）、ニアレストネイバー、ディテールを保持）でピクセル補間の方法を細かく制御できます。

ただし価格と複雑さがあります。Photoshop は Creative Cloud サブスクリプションの一部で、月額約 **$22.99**（年額約 $240）。たまのリサイズにはオーバースペックで、メニュー階層が深すぎます。

既にレタッチ、合成、デザインのために Photoshop を使っているなら価値があります。リサイズだけが目的であれば、ブラウザツールで十分です。請求書もインストールも不要です。

## 方法 3：コマンドラインで ImageMagick

ターミナルに慣れているなら、オープンソースの **ImageMagick** が最も強力な画像リサイズ CLI オプションです。Homebrew でインストール（\`brew install imagemagick\`）したら：

\`\`\`bash
# 原寸の 50% にリサイズ
magick input.png -resize 50% output.png

# 幅指定でリサイズ（高さは比率維持）
magick input.jpg -resize 1200x output.jpg

# ボックス内に収める（元が小さければ拡大しない）
magick input.png -resize 800x600\> output.png

# 寸法を強制（アスペクト比無視）
magick input.jpg -resize 800x600! output.jpg

# フォルダ内の全 PNG をリサイズ
for f in *.png; do magick "$f" -resize 1024x "resized_$f"; done
\`\`\`

末尾の文字が重要です：\`1200x\` は幅 1200 に合わせ高さを比例。\`800x600\>\` は 800x600 より大きい場合のみリサイズ（\`>\` フラグでアップスケールを防止）。\`800x600!\` は寸法を強制（アスペクト比無視）。アルゴリズム指定は \`-filter Lanczos\` や \`-filter Point\`（ニアレストネイバー）。

**ImageMagick** は数千ファイルのバッチリサイズスクリプトに優れています。GUI のないヘッドレスサーバーで動作する唯一の選択肢でもあります。

## よくある質問

### リサイズで品質は落ちますか？

場合によります。**縮小**（小さくする）はほぼ確実に良好に見えます。特に良い再サンプリングアルゴリズムなら。ブラウザツールは高品質の標準である Lanczos を使います。**拡大**（大きくする）は存在しなかったピクセルを追加するため、結果がぼやけて見えます。これがプロが常に目的サイズ以上で撮影する理由です。

### 最良の再サンプリングアルゴリズムは？

縮小には **Lanczos** または **バイキュービック（シャープ）** が最もクリーン。拡大には **バイキュービック（滑らか）** または **ディテールを保持**（Photoshop）が硬いピクセル感を避けます。UtilBoxx と ImageMagick は縮小が Lanczos、拡大がバイキュービックがデフォルトです。

### リサイズと再サンプリングの違いは？

Photoshop の用語では、**リサイズ**はディスク上のピクセル寸法を変更します。**再サンプリング**はピクセル数も変更します（増減）。一般的な会話や他のツールでは、「リサイズ」は再サンプリングを意味します。UtilBoxx はデフォルトで再サンプリングします。すでにピクセル寸法が正しい画像の印刷サイズ（DPI）を変更する場合にのみ再サンプリングを避けます。

### Instagram のサイズはどうする？

UtilBoxx のリサイズツールを開き、**Instagram 投稿** プリセット（1080x1080）を選び、写真をドロップしてダウンロード。これで完了。Instagram Story（1080x1920）、Twitter（1200x675）、LinkedIn（1200x627）、YouTube サムネ（1280x720）、Facebook カバー（820x312）などのプリセットもあります。

### JPG をリサイズするとさらに劣化しますか？

JPG を保存するたびに再エンコードされ、少しずつ品質を失います。JPG をリサイズして再度 JPG で保存すると、世代が一つ増えます。これを最小化するには、常に元マスターから作業し、すべての編集を終えてから最終 JPG を一度だけ保存します。PNG と WebP のロスレスモードにはこの問題はありません。

### オンラインの画像リサイズツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、写真がリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人情報、財務、医療、その他の機密性の高い写真を、信頼できないリサイズツールにアップロードしないでください。

## まとめ

画像のリサイズは頻繁に行う小さな作業であり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料画像リサイズツール](/ja/tools/image/resize) は明白な選択です：プライベートで、速くて、無料で、登録不要、透かしなし。

既に Photoshop を常用しているデザイナーなら、「画像サイズ」が最も細かい制御を提供します。バッチ処理のスクリプトを書くなら、ターミナルで ImageMagick が最強です。無料の Photoshop 代替 GIMP にも同じダイアログがあります。Mac ユーザーは **プレビュー** も使えます：画像を開き、**ツール >  sizeを調整** を選び、新しい寸法を入力して保存。

その他は、[UtilBoxx の画像ツール](/ja/tools/image) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先の画像ツールキットが見つかります。`;

const resizeEs = `## ¿Por qué redimensionar imágenes?

Redimensionar es una de las operaciones de imagen más comunes. Tomas una foto de 6000x4000 con el móvil, pero Instagram quiere 1080x1080. Descargas una toma de producto de 4000x4000, pero tu web solo admite miniaturas de 800x800. Capturas una pantalla 4K, pero el límite de adjuntos del ticket de soporte es 1920px de ancho. En cada caso, la respuesta es la misma: redimensionar la imagen.

El truco es hacerlo **sin perder calidad visible**. Redimensionar hacia arriba da un batido borroso y pixelado. Redimensionar hacia abajo suele verse bien, pero si reduces demasiado también pierdes detalle. El enfoque correcto depende de si necesitas píxeles exactos, un porcentaje o un preset.

Las razones por las que la gente redimensiona imágenes son prácticas y frecuentes:

- **Rendimiento web**: Una foto de 6000x4000 pesa 8 MB y tarda 4 segundos en cargar en móvil. La misma imagen a 1600x1067 pesa 400 KB y carga en 0,3 segundos.
- **Adjuntos de correo**: La mayoría de clientes limitan las imágenes a 1500-2000 px en el lado largo. Cualquier cosa mayor se rechaza o el proveedor de correo del destinatario la redimensiona.
- **Presets de redes sociales**: Publicación de Instagram = 1080x1080. Story = 1080x1920. Twitter = 1200x675. LinkedIn = 1200x627. Miniatura de YouTube = 1280x720. Cada plataforma tiene su propia especificación.
- **Impresión vs pantalla**: La impresión necesita 300 DPI. La pantalla 72-150 DPI. Redimensionar la fuente para que coincida evita gastar píxeles o acabar con un póster borroso.
- **Organización del almacenamiento**: Mantener un original maestro a tamaño completo más una variante "tamaño compartido" mantiene tu biblioteca ligera.
- **Restricciones de diseño**: Banners, tarjetas, imágenes hero — cada diseño tiene su propia caja, y redimensionar es cómo la foto fuente encaja.

La buena noticia: con la herramienta adecuada, redimensionar una imagen es un trabajo de 10 segundos y no requiere instalar nada.

## Método 1: Usa el redimensionador de imágenes gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de redimensionar imágenes es la [herramienta de redimensionar imágenes de UtilBoxx](/es/tools/image/resize). Se ejecuta por completo en tu navegador, por lo que tus fotos nunca salen de tu dispositivo. Sin subidas, sin registro y sin marca de agua en el resultado.

Así se usa:

1. Ve a [utilboxx.com/es/tools/image/resize](/es/tools/image/resize)
2. Haz clic en el área de subida y selecciona tu JPG, PNG o WebP (o arrástralo)
3. Elige un modo de redimensionado:
   - **Por porcentaje** — p. ej. 50% hace la imagen la mitad de ancha y la mitad de alta
   - **Por píxeles exactos** — escribe el nuevo ancho y alto
   - **Por preset de redes sociales** — elige Publicación de Instagram, Story, Twitter, LinkedIn, Miniatura de YouTube, etc.
4. Activa "Bloquear relación de aspecto" para que la imagen no se estire
5. Haz clic en "Redimensionar"
6. Descarga el resultado (o todos como zip)

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. Tus fotos nunca llegan a un servidor.
- **Tres modos de redimensionado**: porcentaje, píxeles exactos, y biblioteca de presets para redes sociales
- **Bloqueo de relación de aspecto**: evita el estiramiento antiestético cuando introduces solo una dimensión
- **Multi-formato**: JPG, PNG y WebP en la misma herramienta
- **Apto para lotes**: suelta 20 imágenes y rediménsionalas todas a la vez
- **Sin marcas de agua** en la salida

Si solo necesitas redimensionar imágenes de vez en cuando, esta es la opción de menor fricción con diferencia. Y como es basada en navegador, funciona en Windows, Mac, Linux, ChromeOS, iOS y Android.

## Método 2: Adobe Photoshop (De pago)

Photoshop es el peso pesado de la edición de imágenes, y su diálogo "Imagen > Tamaño de imagen" es el estándar de oro para redimensionar con precisión. Puedes alternar entre píxeles, porcentaje, pulgadas, cm y puntos; ajustar la resolución (DPI) de forma independiente; y activar o desactivar el remuestreo. El desplegable de algoritmos de remuestreo (Bicúbica, Bicúbica más suave, Bicúbica más nítida, Por aproximación, Conservar detalles) te da control fino sobre cómo se interpolan los píxeles.

El inconveniente es el precio y la complejidad. Photoshop forma parte de una suscripción a Creative Cloud que cuesta aproximadamente **$22,99 al mes** (unos $240 al año). Para un redimensionado puntual es excesivo, y la profundidad de menús es desproporcionada para una operación simple.

Photoshop solo vale la pena si ya lo usas para retoque, composición o diseño. Si redimensionar es todo lo que necesitas, una herramienta de navegador hace el trabajo sin factura ni instalación.

## Método 3: Línea de comandos con ImageMagick

Si te manejas en la terminal, la herramienta de código abierto **ImageMagick** es la opción CLI más potente para redimensionar imágenes. Instálala con Homebrew (\`brew install imagemagick\`), luego:

\`\`\`bash
# Redimensionar al 50% del original
magick input.png -resize 50% output.png

# Redimensionar a un ancho específico, manteniendo la relación
magick input.jpg -resize 1200x output.jpg

# Redimensionar para encajar en una caja (sin ampliar si ya es menor)
magick input.png -resize 800x600\> output.png

# Forzar dimensiones exactas (ignorando relación de aspecto)
magick input.jpg -resize 800x600! output.jpg

# Redimensionar y procesar todos los PNG de una carpeta
for f in *.png; do magick "$f" -resize 1024x "resized_$f"; done
\`\`\`

Los caracteres finales importan: \`1200x\` significa ajustar al ancho 1200 y escalar el alto proporcionalmente. \`800x600\>\` significa redimensionar solo si es mayor de 800x600 (la marca \`>\` evita el escalado hacia arriba). \`800x600!\` significa forzar dimensiones exactas (ignora la relación de aspecto). Para un algoritmo concreto, usa \`-filter Lanczos\` o \`-filter Point\` para vecino más cercano.

**ImageMagick** es excelente para programar redimensionados por lotes a través de miles de archivos. También es la única opción que funciona en un servidor headless sin GUI.

## Preguntas frecuentes

### ¿Redimensionar reduce la calidad de la imagen?

Depende. **Redimensionar hacia abajo** (hacer más pequeño) casi siempre se ve bien, especialmente con un buen algoritmo de remuestreo. La herramienta de navegador usa Lanczos, que es la elección estándar de alta calidad. **Redimensionar hacia arriba** (hacer más grande) añade píxeles que no existían, por lo que el resultado se ve borroso. Por eso los flujos profesionales siempre disparan a un tamaño igual o superior al objetivo.

### ¿Cuál es el mejor algoritmo de remuestreo?

Para reducir, **Lanczos** o **Bicúbica más nítida** da el resultado más limpio. Para ampliar, **Bicúbica más suave** o **Conservar detalles** (Photoshop) evita el aspecto píxel duro. UtilBoxx e ImageMagick usan Lanczos por defecto al reducir y Bicúbica al ampliar.

### ¿Cuál es la diferencia entre redimensionar y remuestrear?

En la terminología de Photoshop, **redimensionar** cambia las dimensiones de píxeles en disco. **Remuestrear** también cambia el número de píxeles (añade o quita píxeles). En el habla cotidiana y en la mayoría de herramientas, "redimensionar" significa remuestrear. UtilBoxx redimensiona (remuestrea) por defecto; solo evitarías el remuestreo si estás cambiando el tamaño de impresión (DPI) de una imagen con píxeles ya correctos.

### ¿Cómo redimensiono para Instagram?

Abre la herramienta de redimensionar de UtilBoxx, elige el preset **Publicación de Instagram** (1080x1080), suelta tu foto y descarga. Listo. También hay presets para Story de Instagram (1080x1920), Twitter (1200x675), LinkedIn (1200x627), Miniatura de YouTube (1280x720), Portada de Facebook (820x312) y más.

### ¿Redimensionar un JPG lo degrada más?

Cada vez que guardas un JPG, se re-codifica, y se pierde una pequeña cantidad de calidad. Si redimensionas un JPG y lo guardas de nuevo como JPG, obtienes una generación más de pérdida. Para minimizar esto, trabaja desde el maestro original, haz todas tus ediciones y guarda el JPG final solo una vez. Los PNG y WebP en modo sin pérdida no tienen este problema.

### ¿Es seguro usar un redimensionador de imágenes online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador** — sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tus fotos se están subiendo a un servidor remoto y lee atentamente su política de privacidad. Evita subir fotos personales, financieras, médicas o de otro modo sensibles a un redimensionador en el que no confías.

## Conclusión

Redimensionar imágenes es una de esas pequeñas tareas que aparecen constantemente y no deberían requerir una suscripción de pago o instalar software. Para la mayoría de la gente, la [herramienta gratuita de redimensionar imágenes de UtilBoxx](/es/tools/image/resize) es la opción obvia: es privada, rápida y gratis, sin registro y sin marca de agua.

Si eres diseñador y ya vives en Photoshop, "Tamaño de imagen" te da el control más fino. Si estás programando trabajo por lotes, ImageMagick en la terminal es imbatible. Y GIMP, la alternativa gratuita a Photoshop, tiene el mismo diálogo a coste cero. Los usuarios de macOS también pueden usar **Vista Previa**: abre la imagen, elige **Herramientas > Ajustar tamaño**, escribe las nuevas dimensiones y guarda.

Para todo lo demás, visita las [herramientas de imagen de UtilBoxx](/es/tools/image) y encontrarás un conjunto completo de herramientas para trabajar con imágenes, con privacidad como prioridad, todo en tu navegador.`;

const resizePt = `## Por que redimensionar imagens?

Redimensionar é uma das operações de imagem mais comuns. Você tira uma foto de 6000x4000 no celular, mas o Instagram quer 1080x1080. Você baixa uma foto de produto de 4000x4000, mas seu site só tem espaço para miniaturas de 800x800. Você captura uma tela 4K, mas o limite de anexo do ticket de suporte é 1920px de largura. Em cada caso, a resposta é a mesma: redimensionar a imagem.

O truque é fazer isso **sem perder qualidade visível**. Redimensionar para cima dá uma massa borrada e pixelada. Redimensionar para baixo geralmente fica bom, mas reduzir demais também perde detalhe. A abordagem certa depende se você precisa de pixels exatos, uma porcentagem ou um preset.

Os motivos pelos quais as pessoas redimensionam imagens são práticos e frequentes:

- **Performance web**: Uma foto de 6000x4000 pesa 8 MB e leva 4 segundos para carregar no celular. A mesma imagem em 1600x1067 pesa 400 KB e carrega em 0,3 segundos.
- **Anexos de e-mail**: A maioria dos clientes limita imagens a 1500-2000 px no lado maior. Qualquer coisa maior é rejeitada ou redimensionada pelo provedor de e-mail do destinatário.
- **Presets de redes sociais**: Post do Instagram = 1080x1080. Story = 1080x1920. Twitter = 1200x675. LinkedIn = 1200x627. Thumbnail do YouTube = 1280x720. Cada plataforma tem sua própria especificação.
- **Impressão vs tela**: Impressão precisa de 300 DPI. Tela precisa de 72-150 DPI. Redimensionar a fonte para combinar evita gastar pixels ou acabar com um pôster borrado.
- **Organização de armazenamento**: Manter um original mestre em tamanho cheio mais uma variante "tamanho de compartilhamento" mantém sua biblioteca leve.
- **Restrições de design**: Banners, cards, imagens hero — cada layout tem sua própria caixa, e redimensionar é como a foto fonte cabe nela.

A boa notícia: com a ferramenta certa, redimensionar uma imagem é um trabalho de 10 segundos e você não precisa instalar nada.

## Método 1: Use o redimensionador de imagens grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de redimensionar imagens é a [ferramenta de redimensionar imagens do UtilBoxx](/pt/tools/image/resize). Ela roda inteiramente no seu navegador, então suas fotos nunca saem do seu dispositivo. Sem upload, sem cadastro e sem marca d'água no resultado.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/image/resize](/pt/tools/image/resize)
2. Clique na área de upload e selecione seu JPG, PNG ou WebP (ou arraste e solte)
3. Escolha um modo de redimensionamento:
   - **Por porcentagem** — ex. 50% deixa a imagem com metade da largura e metade da altura
   - **Por pixels exatos** — digite a nova largura e altura
   - **Por preset de redes sociais** — escolha Post do Instagram, Story, Twitter, LinkedIn, Thumbnail do YouTube, etc.
4. Ative "Bloquear proporção" para a imagem não esticar
5. Clique em "Redimensionar"
6. Baixe o resultado (ou todos como zip)

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. Suas fotos nunca chegam a um servidor.
- **Três modos de redimensionamento**: porcentagem, pixels exatos, e biblioteca de presets para redes sociais
- **Bloqueio de proporção**: evita o esticamento esquisito quando você insere só uma dimensão
- **Multi-formato**: JPG, PNG e WebP na mesma ferramenta
- **Amigo de lotes**: solte 20 imagens e redimensione todas de uma vez
- **Sem marcas d'água** na saída

Se você só precisa redimensionar imagens de vez em quando, essa é a opção de menor atrito disparado. E como é baseada em navegador, funciona em Windows, Mac, Linux, ChromeOS, iOS e Android.

## Método 2: Adobe Photoshop (Pago)

Photoshop é o peso-pesado da edição de imagens, e seu diálogo "Imagem > Tamanho da imagem" é o padrão-ouro para redimensionamento preciso. Você pode alternar entre pixels, porcentagem, polegadas, cm e pontos; definir a resolução (DPI) de forma independente; e ligar ou desligar o reamostragem. O menu suspenso de algoritmos de reamostragem (Bicúbica, Bicúbica mais suave, Bicúbica mais nítida, Vizinho mais próximo, Preservar detalhes) dá controle fino sobre como os pixels são interpolados.

O problema é o preço e a complexidade. Photoshop faz parte de uma assinatura Creative Cloud que custa cerca de **$22,99 por mês** (aproximadamente $240 por ano). Para um redimensionamento pontual é exagero, e a profundidade do menu é desproporcional para uma operação simples.

Photoshop vale a pena apenas se você já o usa para retoque, composição ou design. Se redimensionar é tudo o que você precisa, uma ferramenta baseada em navegador faz o trabalho sem fatura nem instalação.

## Método 3: Linha de comando com ImageMagick

Se você se sente confortável no terminal, a ferramenta open-source **ImageMagick** é a opção CLI mais poderosa para redimensionar imagens. Instale com Homebrew (\`brew install imagemagick\`), depois:

\`\`\`bash
# Redimensionar para 50% do original
magick input.png -resize 50% output.png

# Redimensionar para uma largura específica, mantendo a proporção
magick input.jpg -resize 1200x output.jpg

# Redimensionar para caber em uma caixa (sem ampliar se já for menor)
magick input.png -resize 800x600\> output.png

# Forçar dimensões exatas (ignorando proporção)
magick input.jpg -resize 800x600! output.jpg

# Redimensionar e processar todos os PNG de uma pasta
for f in *.png; do magick "$f" -resize 1024x "resized_$f"; done
\`\`\`

Os caracteres finais importam: \`1200x\` significa ajustar à largura 1200 e escalar a altura proporcionalmente. \`800x600\>\` significa redimensionar só se for maior que 800x600 (a flag \`>\` evita ampliar). \`800x600!\` significa forçar dimensões exatas (ignora proporção). Para um algoritmo específico, use \`-filter Lanczos\` ou \`-filter Point\` para vizinho mais próximo.

**ImageMagick** é excelente para programar redimensionamentos em lote através de milhares de arquivos. Também é a única opção que funciona em um servidor headless sem GUI.

## Perguntas frequentes

### Redimensionar reduz a qualidade da imagem?

Depende. **Redimensionar para baixo** (deixar menor) quase sempre fica bom, especialmente com um bom algoritmo de reamostragem. A ferramenta do navegador usa Lanczos, que é a escolha padrão de alta qualidade. **Redimensionar para cima** (deixar maior) adiciona pixels que não existiam, então o resultado fica borrado. É por isso que fluxos profissionais sempre disparam a um tamanho igual ou maior que o alvo.

### Qual o melhor algoritmo de reamostragem?

Para reduzir, **Lanczos** ou **Bicúbica mais nítida** dá o resultado mais limpo. Para ampliar, **Bicúbica mais suave** ou **Preservar detalhes** (Photoshop) evita o aspecto de pixel duro. UtilBoxx e ImageMagick usam Lanczos por padrão ao reduzir e Bicúbica ao ampliar.

### Qual a diferença entre redimensionar e reamostrar?

Na terminologia do Photoshop, **redimensionar** altera as dimensões de pixels no disco. **Reamostrar** também altera o número de pixels (adiciona ou remove pixels). Na fala cotidiana e na maioria das ferramentas, "redimensionar" significa reamostrar. UtilBoxx redimensiona (reamostra) por padrão; você só evitaria a reamostragem se estivesse mudando o tamanho de impressão (DPI) de uma imagem com pixels já corretos.

### Como redimensiono para o Instagram?

Abra a ferramenta de redimensionar do UtilBoxx, escolha o preset **Post do Instagram** (1080x1080), solte sua foto e baixe. Pronto. Há também presets para Story do Instagram (1080x1920), Twitter (1200x675), LinkedIn (1200x627), Thumbnail do YouTube (1280x720), Capa do Facebook (820x312) e mais.

### Redimensionar um JPG o degrada ainda mais?

Cada vez que você salva um JPG, ele é recodificado, e uma pequena quantidade de qualidade é perdida. Se você redimensiona um JPG e salva de novo como JPG, você ganha mais uma geração de perda. Para minimizar isso, trabalhe a partir do mestre original, faça todas as edições e salve o JPG final só uma vez. PNGs e WebPs em modo sem perda não têm esse problema.

### É seguro usar um redimensionador de imagens online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que suas fotos estão sendo enviadas para um servidor remoto e leia atentamente sua política de privacidade. Evite enviar fotos pessoais, financeiras, médicas ou de outro modo sensíveis para um redimensionador em que você não confia.

## Conclusão

Redimensionar imagens é uma daquelas pequenas tarefas que surgem constantemente e não deveriam exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, a [ferramenta gratuita de redimensionar imagens do UtilBoxx](/pt/tools/image/resize) é a escolha óbvia: é privada, rápida e grátis, sem cadastro e sem marca d'água.

Se você é designer e já vive no Photoshop, "Tamanho da imagem" dá o controle mais fino. Se você está programando trabalho em lote, ImageMagick no terminal é imbatível. E o GIMP, a alternativa gratuita ao Photoshop, tem o mesmo diálogo a custo zero. Usuários de macOS também podem usar o **Visualização**: abra a imagem, escolha **Ferramentas > Ajustar Tamanho**, digite as novas dimensões e salve.

Para todo o resto, visite as [ferramentas de imagem do UtilBoxx](/pt/tools/image) e você encontrará um conjunto completo de ferramentas para trabalhar com imagens, com privacidade como prioridade, tudo no seu navegador.`;

const resizeFr = `## Pourquoi redimensionner des images ?

Redimensionner est l'une des opérations d'image les plus courantes. Vous prenez une photo en 6000x4000 avec votre téléphone, mais Instagram veut du 1080x1080. Vous téléchargez une photo produit en 4000x4000, mais votre site n'a de place que pour des vignettes en 800x800. Vous capturez un écran 4K, mais la limite de pièce jointe du ticket support est 1920 px de large. Dans chaque cas, la réponse est la même : redimensionner l'image.

L'astuce est de le faire **sans perte de qualité visible**. Redimensionner vers le haut donne une bouillie floue et pixelisée. Redimensionner vers le bas passe généralement bien, mais trop réduire fait perdre du détail. La bonne approche dépend de ce dont vous avez besoin : pixels exacts, pourcentage ou preset.

Les raisons pour lesquelles les gens redimensionnent des images sont pratiques et fréquentes :

- **Performance web** : Une photo de 6000x4000 pèse 8 Mo et met 4 secondes à charger sur mobile. La même image en 1600x1067 pèse 400 Ko et charge en 0,3 seconde.
- **Pièces jointes e-mail** : La plupart des clients limitent les images à 1500-2000 px sur le côté long. Tout ce qui est plus grand est refusé ou redimensionné par le fournisseur mail du destinataire.
- **Presets de réseaux sociaux** : Publication Instagram = 1080x1080. Story = 1080x1920. Twitter = 1200x675. LinkedIn = 1200x627. Miniature YouTube = 1280x720. Chaque plateforme a sa propre spec.
- **Impression vs écran** : L'impression demande 300 DPI. L'écran 72-150 DPI. Redimensionner la source à la bonne taille évite de gaspiller des pixels ou d'aboutir à une affiche floue.
- **Organisation du stockage** : Garder un original maître pleine taille plus une variante « taille partage » maintient votre bibliothèque légère.
- **Contraintes de design** : Bannières, cartes, images hero — chaque mise en page a sa propre boîte, et redimensionner c'est comment la photo source y entre.

Bonne nouvelle : avec le bon outil, redimensionner une image est un travail de 10 secondes et vous n'avez rien à installer.

## Méthode 1 : Utiliser le redimensionneur d'images gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de redimensionner des images est l'[outil de redimensionnement d'images de UtilBoxx](/fr/tools/image/resize). Il s'exécute entièrement dans votre navigateur, donc vos photos ne quittent jamais votre appareil. Pas de téléversement, pas d'inscription, pas de filigrane sur le résultat.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/image/resize](/fr/tools/image/resize)
2. Cliquez sur la zone de téléversement et sélectionnez votre JPG, PNG ou WebP (ou glissez-déposez)
3. Choisissez un mode de redimensionnement :
   - **Par pourcentage** — p. ex. 50 % rend l'image deux fois moins large et deux fois moins haute
   - **Par pixels exacts** — saisissez la nouvelle largeur et hauteur
   - **Par preset réseaux sociaux** — choisissez Publication Instagram, Story, Twitter, LinkedIn, Miniature YouTube, etc.
4. Activez « Verrouiller le ratio » pour que l'image ne soit pas étirée
5. Cliquez sur « Redimensionner »
6. Téléchargez le résultat (ou tous en zip)

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Vos photos n'arrivent jamais sur un serveur.
- **Trois modes de redimensionnement** : pourcentage, pixels exacts, et bibliothèque de presets pour réseaux sociaux
- **Verrouillage du ratio** : évite l'étirement disgracieux quand vous ne renseignez qu'une dimension
- **Multi-format** : JPG, PNG et WebP dans le même outil
- **Compatible lots** : déposez 20 images et redimensionnez-les toutes d'un coup
- **Aucun filigrane** sur la sortie

Si vous n'avez besoin de redimensionner des images qu'occasionnellement, c'est de loin l'option la plus simple. Et comme c'est basé navigateur, cela fonctionne sur Windows, Mac, Linux, ChromeOS, iOS et Android.

## Méthode 2 : Adobe Photoshop (Payant)

Photoshop est le poids lourd de l'édition d'images, et sa boîte de dialogue « Image > Taille de l'image » est la référence pour un redimensionnement précis. Vous pouvez basculer entre pixels, pourcentage, pouces, cm et points ; régler la résolution (DPI) indépendamment ; et activer ou désactiver le rééchantillonnage. La liste déroulante des algorithmes de rééchantillonnage (Bicubique, Bicubique plus doux, Bicubique plus net, Plus proche voisin, Conserver les détails) vous donne un contrôle fin sur la façon dont les pixels sont interpolés.

Le hic, c'est le prix et la complexité. Photoshop fait partie d'un abonnement Creative Cloud qui coûte environ **22,99 $ par mois** (environ 240 $ par an). Pour un redimensionnement ponctuel c'est disproportionné, et la profondeur des menus est exagérée pour une opération simple.

Photoshop ne vaut le coup que si vous l'utilisez déjà pour la retouche, le compositing ou le design. Si redimensionner est tout ce dont vous avez besoin, un outil en navigateur fait le travail sans facture ni installation.

## Méthode 3 : Ligne de commande avec ImageMagick

Si vous êtes à l'aise dans un terminal, l'outil open-source **ImageMagick** est l'option CLI la plus puissante pour redimensionner des images. Installez-le avec Homebrew (\`brew install imagemagick\`), puis :

\`\`\`bash
# Redimensionner à 50 % de l'original
magick input.png -resize 50% output.png

# Redimensionner à une largeur spécifique, en gardant le ratio
magick input.jpg -resize 1200x output.jpg

# Redimensionner pour tenir dans une boîte (pas d'agrandissement si déjà plus petit)
magick input.png -resize 800x600\> output.png

# Forcer des dimensions exactes (en ignorant le ratio)
magick input.jpg -resize 800x600! output.jpg

# Redimensionner et traiter tous les PNG d'un dossier
for f in *.png; do magick "$f" -resize 1024x "resized_$f"; done
\`\`\`

Les caractères de fin comptent : \`1200x\` signifie ajuster à la largeur 1200 et mettre la hauteur à l'échelle proportionnellement. \`800x600\>\` signifie redimensionner uniquement si plus grand que 800x600 (le flag \`>\` évite l'agrandissement). \`800x600!\` signifie forcer les dimensions exactes (ignore le ratio). Pour un algorithme précis, utilisez \`-filter Lanczos\` ou \`-filter Point\` pour le plus proche voisin.

**ImageMagick** est excellent pour scripter des redimensionnements par lots sur des milliers de fichiers. C'est aussi la seule option qui fonctionne sur un serveur headless sans GUI.

## Questions fréquentes

### Redimensionner réduit-il la qualité de l'image ?

Ça dépend. **Redimensionner vers le bas** (rendre plus petit) passe presque toujours bien, surtout avec un bon algorithme de rééchantillonnage. L'outil du navigateur utilise Lanczos, qui est le choix standard de haute qualité. **Redimensionner vers le haut** (rendre plus grand) ajoute des pixels qui n'existaient pas, donc le résultat paraît flou. C'est pourquoi les flux pros tirent toujours à une taille égale ou supérieure à la cible.

### Quel est le meilleur algorithme de rééchantillonnage ?

Pour réduire, **Lanczos** ou **Bicubique plus net** donne le résultat le plus propre. Pour agrandir, **Bicubique plus doux** ou **Conserver les détails** (Photoshop) évite l'aspect pixel dur. UtilBoxx et ImageMagick utilisent Lanczos par défaut en réduction et Bicubique en agrandissement.

### Quelle est la différence entre redimensionner et rééchantillonner ?

Dans la terminologie Photoshop, **redimensionner** change les dimensions en pixels sur disque. **Rééchantillonner** change aussi le nombre de pixels (en ajoute ou en retire). Dans le langage courant et la plupart des outils, « redimensionner » signifie rééchantillonner. UtilBoxx redimensionne (rééchantillonne) par défaut ; vous n'éviteriez le rééchantillonnage que si vous changez la taille d'impression (DPI) d'une image dont les pixels sont déjà corrects.

### Comment redimensionner pour Instagram ?

Ouvrez l'outil de redimensionnement de UtilBoxx, choisissez le preset **Publication Instagram** (1080x1080), déposez votre photo et téléchargez. Terminé. Il y a aussi des presets pour Story Instagram (1080x1920), Twitter (1200x675), LinkedIn (1200x627), Miniature YouTube (1280x720), Couverture Facebook (820x312) et plus.

### Redimensionner un JPG le dégrade-t-il davantage ?

À chaque sauvegarde d'un JPG, il est ré-encodé et une petite quantité de qualité est perdue. Si vous redimensionnez un JPG et le sauvez à nouveau en JPG, vous gagnez une génération de perte de plus. Pour minimiser cela, travaillez à partir du maître d'origine, faites toutes vos retouches, et sauvez le JPG final une seule fois. Les PNG et WebP en mode sans perte n'ont pas ce problème.

### Est-il sûr d'utiliser un redimensionneur d'images en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que vos photos sont téléversées sur un serveur distant et lisez attentivement leur politique de confidentialité. Évitez de téléverser des photos personnelles, financières, médicales ou autrement sensibles sur un redimensionneur en qui vous n'avez pas confiance.

## Conclusion

Redimensionner des images est l'une de ces petites tâches qui reviennent constamment et ne devraient pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, l'[outil gratuit de redimensionnement d'images de UtilBoxx](/fr/tools/image/resize) est le choix évident : privé, rapide, gratuit, sans inscription ni filigrane.

Si vous êtes designer et vivez déjà dans Photoshop, « Taille de l'image » vous offre le contrôle le plus fin. Si vous scriptz du travail par lots, ImageMagick dans le terminal est imbattable. Et GIMP, l'alternative gratuite à Photoshop, propose la même boîte de dialogue à coût zéro. Les utilisateurs de macOS peuvent aussi utiliser **Aperçu** : ouvrez l'image, choisissez **Outils > Ajuster la taille**, saisissez les nouvelles dimensions et enregistrez.

Pour tout le reste, rendez-vous sur les [outils image de UtilBoxx](/fr/tools/image) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const resizeDe = `## Warum Bilder skalieren?

Skalieren ist eine der häufigsten Bildbearbeitungen überhaupt. Du schießt ein 6000x4000-Foto mit dem Handy, aber Instagram will 1080x1080. Du lädst ein 4000x4000-Produktfoto herunter, aber deine Website hat nur Platz für 800x800-Thumbnails. Du machst einen 4K-Screenshot, aber das Ticket-Anhang-Limit ist 1920px breit. In jedem Fall lautet die Antwort: das Bild skalieren.

Der Trick ist, es **ohne sichtbaren Qualitätsverlust** zu tun. Hochskalieren liefert verwaschenen, pixeligen Matsch. Runterskalieren sieht meistens gut aus, aber zu viel weglassen lässt auch Details verschwinden. Der richtige Ansatz hängt davon ab, ob du exakte Pixel, einen Prozentsatz oder eine Voreinstellung brauchst.

Die Gründe, warum Menschen Bilder skalieren, sind praktisch und häufig:

- **Web-Performance**: Ein 6000x4000-Foto wiegt 8 MB und braucht auf dem Handy 4 Sekunden zum Laden. Dasselbe Bild in 1600x1067 wiegt 400 KB und lädt in 0,3 Sekunden.
- **E-Mail-Anhänge**: Die meisten Clients begrenzen Bilder auf 1500-2000 px an der langen Kante. Alles darüber wird abgelehnt oder vom Mail-Provider des Empfängers automatisch skaliert.
- **Social-Media-Voreinstellungen**: Instagram-Post = 1080x1080. Story = 1080x1920. Twitter = 1200x675. LinkedIn = 1200x627. YouTube-Thumbnail = 1280x720. Jede Plattform hat ihre eigene Spec.
- **Druck vs Bildschirm**: Druck braucht 300 DPI. Bildschirm 72-150 DPI. Die Quelle auf die passende Größe zu skalieren vermeidet verschwendete Pixel oder ein verschwommenes Poster.
- **Speicherorganisation**: Ein Master in voller Größe plus eine "Share-Size"-Variante hält deine Bibliothek schlank.
- **Design-Beschränkungen**: Banner, Karten, Hero-Bilder — jedes Layout hat seine eigene Box, und Skalieren ist der Weg, wie das Quellfoto hineinpasst.

Die gute Nachricht: Mit dem richtigen Werkzeug ist das Skalieren eines Bildes eine 10-Sekunden-Aufgabe, und du musst nichts installieren.

## Methode 1: Den kostenlosen Bildskalierer von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode, Bilder zu skalieren, ist das [Bildskalierungswerkzeug von UtilBoxx](/de/tools/image/resize). Es läuft vollständig in deinem Browser, sodass deine Fotos dein Gerät nie verlassen. Kein Upload, keine Registrierung, kein Wasserzeichen im Ergebnis.

So verwendest du es:

1. Gehe zu [utilboxx.com/de/tools/image/resize](/de/tools/image/resize)
2. Klicke auf den Upload-Bereich und wähle deine JPG, PNG oder WebP (oder ziehe sie per Drag & Drop)
3. Wähle einen Skalierungsmodus:
   - **Nach Prozentsatz** — z. B. 50 % macht das Bild halb so breit und halb so hoch
   - **Nach exakten Pixeln** — gib die neue Breite und Höhe ein
   - **Nach Social-Media-Voreinstellung** — wähle Instagram-Post, Story, Twitter, LinkedIn, YouTube-Thumbnail usw.
4. Schalte „Seitenverhältnis sperren" ein, damit das Bild nicht gestreckt wird
5. Klicke auf „Skalieren"
6. Lade das Ergebnis herunter (oder alle als ZIP)

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in deinem Browser verarbeitet. Deine Fotos erreichen nie einen Server.
- **Drei Skalierungsmodi**: Prozentsatz, exakte Pixel und eine Bibliothek von Social-Media-Voreinstellungen
- **Seitenverhältnis-Sperre**: verhindert das unschöne Strecken, wenn du nur eine Dimension eingibst
- **Multi-Format**: JPG, PNG und WebP im selben Werkzeug
- **Stapelfähig**: Wirf 20 Bilder rein und skaliere sie alle auf einmal
- **Keine Wasserzeichen** in der Ausgabe

Wenn du nur gelegentlich Bilder skalierst, ist dies die reibungsloseste Option. Und weil es browserbasiert ist, läuft es auf Windows, Mac, Linux, ChromeOS, iOS und Android.

## Methode 2: Adobe Photoshop (Kostenpflichtig)

Photoshop ist das Schwergewicht der Bildbearbeitung, und sein Dialog „Bild > Bildgröße" ist der Goldstandard für präzises Skalieren. Du kannst zwischen Pixeln, Prozent, Zoll, cm und Punkten wechseln; die Auflösung (DPI) unabhängig einstellen; und das Resampling ein- oder ausschalten. Das Drop-down der Resampling-Algorithmen (Bikubisch, Bikubisch glatter, Bikubisch schärfer, Nächster Nachbar, Details erhalten) gibt dir feinkörnige Kontrolle über die Pixelinterpolation.

Der Haken ist der Preis und die Komplexität. Photoshop ist Teil eines Creative-Cloud-Abonnements, das ungefähr **22,99 $ pro Monat** (etwa 240 $ pro Jahr) kostet. Für eine gelegentliche Skalierung ist das übertrieben, und die Menütiefe ist für eine einfache Operation überdimensioniert.

Photoshop lohnt sich nur, wenn du es bereits für Retusche, Compositing oder Design nutzt. Wenn Skalieren alles ist, was du brauchst, erledigt ein Browser-Werkzeug die Arbeit ohne Rechnung und ohne Installation.

## Methode 3: Kommandozeile mit ImageMagick

Wenn du dich im Terminal wohlfühlst, ist das Open-Source-Werkzeug **ImageMagick** die leistungsfähigste CLI-Option für Bildskalierung. Installiere es mit Homebrew (\`brew install imagemagick\`), dann:

\`\`\`bash
# Auf 50 % des Originals skalieren
magick input.png -resize 50% output.png

# Auf eine bestimmte Breite skalieren, Verhältnis beibehalten
magick input.jpg -resize 1200x output.jpg

# In eine Box einpassen (keine Vergrößerung, wenn schon kleiner)
magick input.png -resize 800x600\> output.png

# Exakte Maße erzwingen (Seitenverhältnis ignorieren)
magick input.jpg -resize 800x600! output.jpg

# Alle PNGs in einem Ordner skalieren
for f in *.png; do magick "$f" -resize 1024x "resized_$f"; done
\`\`\`

Die Endzeichen sind wichtig: \`1200x\` bedeutet Anpassung an Breite 1200 und proportionale Skalierung der Höhe. \`800x600\>\` bedeutet nur skalieren, wenn größer als 800x600 (das \`>\`-Flag verhindert Hochskalieren). \`800x600!\` erzwingt exakte Maße (ignoriert Seitenverhältnis). Für einen bestimmten Algorithmus nutze \`-filter Lanczos\` oder \`-filter Point\` für Nächster Nachbar.

**ImageMagick** eignet sich hervorragend, um Stapeiskalierung über Tausende von Dateien zu skripten. Es ist auch die einzige Option, die auf einem kopflosen Server ohne GUI funktioniert.

## Häufige Fragen

### Verringert Skalieren die Bildqualität?

Es kommt darauf an. **Runterskalieren** (kleiner machen) sieht fast immer gut aus, besonders mit einem guten Resampling-Algorithmus. Das Browser-Werkzeug nutzt Lanczos, die Standardwahl für hohe Qualität. **Hochskalieren** (größer machen) fügt Pixel hinzu, die nicht existierten, deshalb wirkt das Ergebnis verschwommen. Deshalb wird in professionellen Workflows immer auf oder über der Zielgröße fotografiert.

### Was ist der beste Resampling-Algorithmus?

Für Verkleinern liefern **Lanczos** oder **Bikubisch schärfer** das sauberste Ergebnis. Für Vergrößern vermeiden **Bikubisch glatter** oder **Details erhalten** (Photoshop) den harten Pixel-Look. UtilBoxx und ImageMagick nutzen Lanczos standardmäßig beim Verkleinern und Bikubisch beim Vergrößern.

### Was ist der Unterschied zwischen Skalieren und Resampling?

In der Photoshop-Terminologie ändert **Skalieren** die Pixelmaße auf dem Datenträger. **Resampling** ändert auch die Pixelanzahl (fügt Pixel hinzu oder entfernt sie). In der Umgangssprache und in den meisten anderen Werkzeugen bedeutet „Skalieren" Resampling. UtilBoxx skaliert (resampelt) standardmäßig; Resampling würdest du nur vermeiden, wenn du die Druckgröße (DPI) eines in den Pixeln bereits korrekten Bildes änderst.

### Wie skaliere ich für Instagram?

Öffne UtilBoxx' Skalierungswerkzeug, wähle die Voreinstellung **Instagram-Post** (1080x1080), ziehe dein Foto hinein und lade es herunter. Fertig. Es gibt auch Voreinstellungen für Instagram-Story (1080x1920), Twitter (1200x675), LinkedIn (1200x627), YouTube-Thumbnail (1280x720), Facebook-Cover (820x312) und mehr.

### Wird ein JPG durch Skalieren weiter degradiert?

Jedes Mal, wenn du ein JPG speicherst, wird es neu kodiert, und es geht ein klein wenig Qualität verloren. Wenn du ein JPG skalierst und erneut als JPG speicherst, bekommst du eine weitere Generation Verlust. Um das zu minimieren, arbeite vom Original-Master, mache alle Bearbeitungen und speichere das endgültige JPG nur einmal. PNGs und WebPs im verlustfreien Modus haben dieses Problem nicht.

### Ist die Nutzung eines Online-Bildskalierers sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in deinem Browser** — kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen solltest du davon ausgehen, dass deine Fotos auf einen entfernten Server hochgeladen werden, und die Datenschutzrichtlinie sorgfältig lesen. Vermeide das Hochladen persönlicher, finanzieller, medizinischer oder anderweitig sensibler Fotos zu einem Skalierer, dem du nicht vertraust.

## Fazit

Bilder zu skalieren ist eine dieser kleinen Aufgaben, die ständig anfallen und keine kostenpflichtige Subskription oder Software-Installation erfordern sollten. Für die meisten Menschen ist das [kostenlose Bildskalierungswerkzeug von UtilBoxx](/de/tools/image/resize) die offensichtliche Wahl: privat, schnell, kostenlos, ohne Registrierung und ohne Wasserzeichen.

Wenn du Designer bist und bereits in Photoshop lebst, gibt dir „Bildgröße" die feinste Kontrolle. Wenn du Stapelverarbeitung skriptest, ist ImageMagick im Terminal unschlagbar. Und GIMP, die kostenlose Photoshop-Alternative, hat denselben Dialog zum Nulltarif. macOS-Nutzer können auch **Vorschau** verwenden: Bild öffnen, **Werkzeuge > Größe anpassen** wählen, neue Maße eingeben und speichern.

Für alles andere besuche die [Bild-Werkzeuge von UtilBoxx](/de/tools/image): Dort findest du einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit Bildern — alles im Browser.`;

export const resizePost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-resize-images-without-losing-quality",
    category: "Image Tools",
    date: "2026-02-18",
    readTime: "5 min",
    title: "How to Resize Images Without Losing Quality",
    description: "Resize JPG, PNG, WebP to any dimension. Pick percentage, exact pixels, or social-media presets.",
    content: resizeEn,
  },
  zh: {
    slug: "how-to-resize-images-without-losing-quality",
    category: "图片工具",
    date: "2026-02-18",
    readTime: "5 分钟",
    title: "如何在不损失画质的情况下调整图片大小",
    description: "把 JPG、PNG、WebP 调整到任意尺寸。可选百分比、精确像素或社交媒体预设。",
    content: resizeZh,
  },
  ja: {
    slug: "how-to-resize-images-without-losing-quality",
    category: "画像ツール",
    date: "2026-02-18",
    readTime: "5 分",
    title: "品質を落とさずに画像をリサイズする方法",
    description: "JPG、PNG、WebP を任意の寸法に。パーセンテージ、正確なピクセル、ソーシャルメディアのプリセットから選べます。",
    content: resizeJa,
  },
  es: {
    slug: "how-to-resize-images-without-losing-quality",
    category: "Herramientas de imagen",
    date: "2026-02-18",
    readTime: "5 min",
    title: "Cómo redimensionar imágenes sin perder calidad",
    description: "Redimensiona JPG, PNG, WebP a cualquier dimensión. Elige porcentaje, píxeles exactos o presets para redes sociales.",
    content: resizeEs,
  },
  pt: {
    slug: "how-to-resize-images-without-losing-quality",
    category: "Ferramentas de imagem",
    date: "2026-02-18",
    readTime: "5 min",
    title: "Como redimensionar imagens sem perder qualidade",
    description: "Redimensione JPG, PNG, WebP para qualquer dimensão. Escolha porcentagem, pixels exatos ou presets para redes sociais.",
    content: resizePt,
  },
  fr: {
    slug: "how-to-resize-images-without-losing-quality",
    category: "Outils d'image",
    date: "2026-02-18",
    readTime: "5 min",
    title: "Comment redimensionner des images sans perdre en qualité",
    description: "Redimensionnez JPG, PNG, WebP à toute dimension. Choisissez pourcentage, pixels exacts ou presets pour réseaux sociaux.",
    content: resizeFr,
  },
  de: {
    slug: "how-to-resize-images-without-losing-quality",
    category: "Bildbearbeitungs-Tools",
    date: "2026-02-18",
    readTime: "5 Min",
    title: "Bilder skalieren ohne Qualitätsverlust",
    description: "Skaliere JPG, PNG, WebP auf jede Größe. Wähle Prozent, exakte Pixel oder Social-Media-Voreinstellungen.",
    content: resizeDe,
  },
};
