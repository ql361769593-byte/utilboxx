// Blog post: How to Add a Watermark to Images
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const watermarkEn = `## Why watermark images?

A watermark is a visible mark — usually text or a logo — placed on an image to identify the owner, deter theft, or promote a brand. Photographers, designers, real estate agents, e-commerce sellers, and stock content creators all watermark their work, and for good reason: the internet is a copy machine, and a watermark is the one line of defense between your photo and someone else passing it off as theirs.

The reasons people watermark images are practical and frequent:

- **Copyright protection**: A visible watermark tells the world "this is mine" without needing to file a formal copyright notice.
- **Deterrent against theft**: A thief would have to crop, blur, or otherwise remove the watermark before they can use the image — and that often ruins the photo's value.
- **Branding**: Real estate photos with "© Agency Name" in the corner get shared on social media, and the agent's name comes along for the ride.
- **Promotion**: A wedding photographer's elegant logo on the corner of every preview gets a few extra clients per year just from being seen.
- **Attribution**: Stock photographers watermark their previews and remove the watermark after purchase.
- **Proof of ownership**: If two people claim the same photo, the one with the watermark has a stronger case.

The good news: with the right tool, watermarking images is a 10-second job, and you do not need to install anything.

## Method 1: Use UtilBoxx's Free Watermark Tool (Recommended)

The fastest, safest, and most private way to watermark images is [UtilBoxx's Watermark tool](/en/tools/image/add-watermark). It runs entirely in your browser, so your photos never leave your device. There is no upload, no signup, and no extra branding on the output.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/image/add-watermark](/en/tools/image/add-watermark)
2. Click the upload area and select your base image (or drag and drop)
3. Choose **text** or **logo**:
   - **Text**: type your watermark text, pick a font, size, color, and opacity
   - **Logo**: upload a PNG with a transparent background as the logo
4. Choose position: **corner** (top-left, top-right, bottom-left, bottom-right), **center**, **tile** (repeated across the whole image), or drag manually
5. Adjust size, opacity (typically 30-60% is the sweet spot), and rotation
6. Click "Apply"
7. Download the result (or all results as a zip)

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. Your photos never reach a server.
- **Text and logo support**: one tool for both watermark styles
- **Tiled mode**: diagonal repeating text across the whole image, classic stock-photo look
- **Precise controls**: position, size, opacity, rotation, font, color
- **Batch friendly**: drop 20 images and watermark them all at once
- **No watermarks** added by the tool itself — only the watermark you specified

If you only watermark images once in a while, this is by far the lowest-friction option. And because it is browser-based, it works on Windows, Mac, Linux, ChromeOS, iOS, and Android.

## Method 2: Adobe Photoshop (Paid)

Photoshop is the heavyweight of image editing, and its "Layer Styles" combined with "Free Transform" gives you full control over the watermark. You can paste your text or logo as a separate layer, set the blend mode (Multiply for darkening, Screen for lightening, Overlay for color blending), adjust opacity with a slider, rotate freely, scale, position with pixel precision, and save the result. You can also record an "Action" to apply the same watermark to a folder of images automatically.

The catch is the price and the complexity. Photoshop is part of a Creative Cloud subscription that costs roughly **$22.99 per month** (about $240 per year). For a one-off watermark, it is overkill, and the layer panel can be intimidating for new users.

Photoshop is worth it only if you already use it for retouching, compositing, or design work. If watermarking is all you need, a browser tool does the job without the bill or the install.

## Method 3: Command line with ImageMagick

If you are comfortable in a terminal, the open-source tool **ImageMagick** is the most powerful CLI option for watermarking. Install it with Homebrew (\`brew install imagemagick\`), then:

\`\`\`bash
# Composite a logo PNG in the bottom-right corner with 10px padding
magick input.jpg logo.png -gravity southeast -geometry +10+10 -composite output.jpg

# Add tiled diagonal text watermark across the whole image
magick input.jpg \\
  -fill "rgba(255,255,255,0.4)" \\
  -pointsize 40 \\
  -gravity center \\
  -annotate +0+0 "© Your Name" \\
  -rotate -30 \\
  output.jpg

# Place a centered logo with 50% opacity
magick input.jpg \\
  \( logo.png -resize 300x -alpha set -channel A -evaluate set 50% +channel \) \\
  -gravity center -composite output.png

# Batch watermark all JPGs in a folder
for f in *.jpg; do magick "$f" logo.png -gravity southeast -geometry +10+10 -composite "wm_$f"; done
\`\`\`

The \`-composite\` operation stacks images. The \`-gravity\` flag positions the top image relative to the bottom (southeast = bottom-right, north = top-center, center = middle). The \`-geometry +10+10\` adds 10px padding from the chosen gravity. The \`-alpha\` and \`-evaluate set 50%\` flags reduce the logo opacity to 50%.

**ImageMagick** is excellent for scripting batch watermarks across thousands of files. It is also the only option that works on a headless server with no GUI.

## Common questions

### Do watermarks prevent image theft?

They reduce it. A casual thief looking for a quick image will skip one with a watermark and grab a cleaner one. A determined thief with Photoshop and time can usually remove a simple watermark, especially if it is over a uniform area. For real protection, combine the visible watermark with metadata (EXIF copyright field) and consider low-resolution previews for the public.

### Should I use a text watermark or a logo?

**Text** is faster (no design needed) and is the go-to for photographers who want a "© Your Name" tag. **Logo** looks more professional and is what brands, real estate agents, and stock sites prefer. If you have a logo, use it. If you do not, a clean text watermark in a simple sans-serif font at 40-50% opacity works great.

### What is the best opacity for a watermark?

The sweet spot is **30-60%**. At 100% the watermark is so opaque it distracts from the photo. Below 20% it is barely visible. Around 40% the watermark is clearly there for protection but does not overpower the image.

### Where should I place the watermark?

- **Bottom-right corner** is the most common and least intrusive
- **Bottom-left corner** is also good
- **Center** is the strongest deterrent because it is hard to crop out, but it is also the most distracting
- **Tiled (repeated)** is the strongest protection but the most intrusive — typically used for previews of paid content

### Can I watermark a transparent PNG?

Yes. UtilBoxx and ImageMagick both support transparent PNGs. When compositing a logo with a transparent background, the underlying image shows through where the logo has no pixels.

### Is it safe to use an online watermark tool?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your photos are being uploaded to a remote server and read their privacy policy carefully. Avoid uploading personal, financial, medical, or otherwise sensitive photos to a watermark tool you do not trust.

## Conclusion

Watermarking is a small task that comes up constantly for anyone who creates images, and it should not require a paid subscription or a software install. For most people, [UtilBoxx's free Watermark tool](/en/tools/image/add-watermark) is the obvious choice: it is private, fast, and free, with no signup and no extra branding on the output.

If you are a designer who already lives in Photoshop, layer-based watermarking gives you the finest control. If you are scripting batch work, ImageMagick in the terminal is unbeatable. macOS users can also use **Preview** for simple text overlays: open the image, choose **Tools > Annotate > Text**, type your watermark, position it, and save. GIMP, the free Photoshop alternative, has the same layer-based workflow at zero cost.

For everything else, head to [UtilBoxx Image tools](/en/tools/image) and you will find a complete, privacy-first toolkit for working with images — all in your browser.`;

const watermarkZh = `## 为什么要给图片加水印？

水印是放在图片上的可见标记 —— 通常是文字或 Logo —— 用来标识作者、阻止盗用、或推广品牌。摄影师、设计师、房产中介、电商卖家、图库内容创作者都会给作品加水印，原因很充分：互联网就是一台复印机，而水印是你的照片和被别人冒名顶替之间唯一的防线。

人们需要给图片加水印的原因既实际又频繁：

- **版权保护**：可见的水印告诉全世界"这是我的"，不需要走正式的版权登记。
- **阻止盗用**：盗图者必须裁剪、模糊或以其他方式去除水印才能使用图片 —— 而这往往毁掉了照片的价值。
- **品牌建设**：房产照片右下角的"© 中介名称"在社交媒体上被分享时，机构名也跟着传播。
- **自我推广**：婚礼摄影师每张预览上优雅的 Logo，每年都能带来几个新客户，仅仅因为它被看见。
- **归属标识**：图库摄影师给预览加水印，购买后去除水印。
- **所有权证明**：如果两个人都声称拥有同一张照片，有水印的那一方更有说服力。

好消息是：只要用对工具，给图片加水印只需 10 秒，而且不需要装任何东西。

## 方法一：使用 UtilBoxx 免费水印工具（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的水印工具](/zh/tools/image/add-watermark)。它完全在你的浏览器中运行，照片不会离开你的设备。没有上传、没有注册、输出文件没有额外水印。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/image/add-watermark](/zh/tools/image/add-watermark)
2. 点击上传区域选择你的底图（或直接拖入）
3. 选择 **文字** 或 **Logo**：
   - **文字**：输入水印文字，选字体、字号、颜色和不透明度
   - **Logo**：上传一张带透明背景的 PNG 当作 Logo
4. 选择位置：**角落**（左上、右上、左下、右下）、**居中**、**平铺**（整图重复），或手动拖动
5. 调整大小、不透明度（通常 30-60% 是最佳区间）、旋转
6. 点击"应用"
7. 下载结果（多个文件时打包成 zip）

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，照片不会上传到任何服务器
- **支持文字和 Logo**：一个工具搞定两种水印风格
- **平铺模式**：整图对角线重复文字，经典图库风格
- **精细控制**：位置、大小、不透明度、旋转、字体、颜色
- **支持批量**：一次拖入 20 张，全部一起加水印
- **工具本身不加水印** —— 只有你指定的水印会加上去

如果你只是偶尔给图片加水印，这是最省心的选择。而且因为它基于浏览器，Windows、Mac、Linux、ChromeOS、iOS、Android 都能用。

## 方法二：Adobe Photoshop（付费）

Photoshop 是图像编辑领域的重量级选手，它的"图层样式"配合"自由变换"给你对水印的完全控制。你可以把文字或 Logo 粘贴为单独图层，设置混合模式（正片叠底变暗、滤色变亮、叠加色彩融合），用滑块调整不透明度，自由旋转、缩放、以像素精度定位，然后保存结果。你还可以录制"动作"自动把同样的水印应用到一个文件夹的所有图片上。

代价是价格和复杂度。Photoshop 是 Creative Cloud 订阅的一部分，每月约 **$22.99**（每年约 $240 美元）。如果只是偶尔加一次水印，杀鸡用牛刀，图层面板对新手来说也让人望而生畏。

只有当你已经用它做修图、合成或设计时，Photoshop 才值得。如果加水印就是你的全部需求，浏览器工具就够用，还免了账单和安装。

## 方法三：命令行 ImageMagick

如果你熟悉终端，开源工具 **ImageMagick** 是最强大的加水印命令行选择。用 Homebrew 安装（\`brew install imagemagick\`）后：

\`\`\`bash
# 在右下角合成一个 Logo PNG，离边 10px
magick input.jpg logo.png -gravity southeast -geometry +10+10 -composite output.jpg

# 给整图加对角线重复文字水印
magick input.jpg \\
  -fill "rgba(255,255,255,0.4)" \\
  -pointsize 40 \\
  -gravity center \\
  -annotate +0+0 "© 你的名字" \\
  -rotate -30 \\
  output.jpg

# 在中央放一个 50% 不透明度的 Logo
magick input.jpg \\
  \\( logo.png -resize 300x -alpha set -channel A -evaluate set 50% +channel \\) \\
  -gravity center -composite output.png

# 批量给文件夹内所有 JPG 加水印
for f in *.jpg; do magick "$f" logo.png -gravity southeast -geometry +10+10 -composite "wm_$f"; done
\`\`\`

\`-composite\` 操作把图片叠在一起。\`-gravity\` 标志把上层图片相对于底层定位（southeast = 右下，north = 上中，center = 中央）。\`-geometry +10+10\` 在选定位置基础上加 10px 内边距。\`-alpha\` 和 \`-evaluate set 50%\` 标志把 Logo 不透明度降到 50%。

**ImageMagick** 非常适合写脚本对成百上千个文件批量加水印，也是无 GUI 环境的服务器上唯一可行的方案。

## 常见问题

### 水印能防止图片被盗吗？

能减少。随手找图的窃贼看到有水印的会跳过，去找更干净的。下了决心的窃贼用 Photoshop 加时间通常能去掉简单水印，特别是在均匀区域上的水印。要真正保护，可以把可见水印和元数据（EXIF 版权字段）结合使用，对外发布低分辨率预览。

### 该用文字水印还是 Logo 水印？

**文字** 更快（不需要设计），是摄影师想要"© 你的名字"标签时的首选。**Logo** 看起来更专业，是品牌、房产中介、图库网站的首选。如果你有 Logo，就用它。如果没有，40-50% 不透明度的简洁无衬线字体的文字水印就很棒。

### 水印最佳不透明度是多少？

最佳区间是 **30-60%**。100% 不透明度太显眼，会分散对照片的注意力。低于 20% 几乎看不见。40% 上下时，水印清晰可见起保护作用，又不喧宾夺主。

### 水印应该放哪里？

- **右下角** 是最常见、最不打扰的位置
- **左下角** 也很好
- **居中** 威慑力最强，因为最难裁掉，但也是最打扰的
- **平铺（重复）** 保护最强但最干扰 —— 通常用于付费内容的预览

### 能给透明 PNG 加水印吗？

可以。UtilBoxx 和 ImageMagick 都支持透明 PNG。合成带透明背景的 Logo 时，底层图片在 Logo 没有像素的地方会透出来。

### 在线水印工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的照片会被上传到远程服务器，并仔细阅读隐私政策。避免向你不信任的水印工具上传任何包含个人、财务、医疗或敏感信息的照片。

## 结论

给图片加水印是任何创作者经常要做的小事，不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费水印工具](/zh/tools/image/add-watermark) 是显而易见的选择：私密、快速、免费、无需注册、输出无额外水印。

如果你是常驻 Photoshop 的设计师，基于图层的水印给你最精细的控制。如果你写脚本做批量处理，ImageMagick 在终端里无可替代。Mac 用户也可以用 **Preview** 做简单的文字叠加：打开图片，选择 **工具 > 标注 > 文字**，输入水印，定位，保存。免费替代品 GIMP 也有同样的基于图层的工作流。

其他情况下，去看 [UtilBoxx 的图片工具集](/zh/tools/image)，你会找到一个完整的、隐私优先的图片处理工具箱 —— 全部在浏览器里完成。`;

const watermarkJa = `## なぜ画像に透かしを入れるのか？

透かしとは画像の所有者を示したり、盗難を抑止したり、ブランドを宣伝するために画像上に置かれる可視マーク —— 通常はテキストかロゴ —— のことです。写真家、デザイナー、不動産エージェント、eコマース販売者、ストックコンテンツ制作者のすべてが自身の作品に透かしを入れます。それには十分な理由があります：インターネットはコピー機械であり、透かしはあなたの写真と他人がそれを自分のものとして使い分ける間の唯一の防衛線です。

人が画像に透かしを入れる理由は実際的でしかも頻繁です：

- **著作権保護**：可視透かしは「これは私のものです」と全世界に告げ、正式な著作権登録を出す必要がない。
- **盗難抑止**：カジュアルな泥棒はすぐ使える画像を探しており、透かし入りはスキップする。決心した泥棒でも Photoshop と時間があれば、特に均一な部分にある単純な透かしは除去できることが多い。
- **ブランディング**：「© エージェント名」と入った不動産写真は SNS で共有される際、エージェント名が一緒に伝わる。
- **プロモーション**： wedding 写真家がプレビュー隅に置くエレガントなロゴは、ただ見られるだけで年に数名の追加クライアントをもたらす。
- **帰属表示**：ストック写真家はプレビューに透かしを入れ、購入後に除去する。
- **所有権の証明**：同じ写真を 2 人が主張する場合、透かしのある方が有利な立場を持つ。

良いニュースは、適切なツールを使えば透かし入れは 10 秒で終わり、何もインストールする必要がないことです。

## 方法 1：UtilBoxx の無料透かしツール（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の透かしツール](/ja/tools/image/add-watermark) です。完全にブラウザ内で動作するため、写真がデバイスの外に出ることがありません。アップロードも登録も不要で、出力に余計な透かしも入りません。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/image/add-watermark](/ja/tools/image/add-watermark) を開く
2. アップロード領域をクリックしてベース画像を選択（またはドラッグ＆ドロップ）
3. **テキスト** または **ロゴ** を選択：
   - **テキスト**：透かしテキストを入力し、フォント、サイズ、色、不透明度を選ぶ
   - **ロゴ**：透明背景の PNG をロゴとしてアップロード
4. 位置を選択：**コーナー**（左上、右上、左下、右下）、**中央**、**タイル**（画像全体に繰り返し）、または手動でドラッグ
5. サイズ、不透明度（通常 30〜60% がスイートスポット）、回転を調整
6.「適用」をクリック
7. 結果をダウンロード（複数なら zip）

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべての処理がブラウザ内で完結。写真はサーバーへ送信されません
- **テキストとロゴ対応**：両方の透かしスタイルを 1 つのツールで
- **タイルモード**：画像全体に斜めに繰り返しテキスト、クラシックなストック風
- **精密なコントロール**：位置、サイズ、不透明度、回転、フォント、色
- **バッチ処理に対応**：20 枚ドロップして一括透かし入れ
- **ツール自身の透かしなし** —— 指定した透かしのみが入る

たまに画像に透かしを入れるだけなら、これほど低コストな選択肢はありません。ブラウザベースなので、Windows、Mac、Linux、ChromeOS、iOS、Android で動作します。

## 方法 2：Adobe Photoshop（有料）

Photoshop は画像編集のヘビー級で、その「レイヤースタイル」と「自由変形」を組み合わせれば、透かしを完全に制御できます。テキストやロゴを別レイヤーとして貼り付け、ブレンドモード（乗算で暗く、スクリーンで明るく、オーバーレイで色を混ぜる）を設定し、スライダーで不透明度を調整し、自由に回転・スケール・ピクセル精度で配置し、結果を保存できます。「アクション」を記録すれば、同じ透かしをフォルダ内の画像に自動適用できます。

ただし価格と複雑さがあります。Photoshop は Creative Cloud サブスクリプションの一部で、月額約 **$22.99**（年額約 $240）。たまの透かし入れにはオーバースペックで、レイヤーパネルは初心者には intimidating です。

既にレタッチ、合成、デザインのために Photoshop を使っているなら価値があります。透かし入れだけが目的であれば、ブラウザツールで十分です。請求書もインストールも不要です。

## 方法 3：コマンドラインで ImageMagick

ターミナルに慣れているなら、オープンソースの **ImageMagick** が最も強力な透かし入れ CLI オプションです。Homebrew でインストール（\`brew install imagemagick\`）したら：

\`\`\`bash
# 右下隅に Logo PNG を合成（余白 10px）
magick input.jpg logo.png -gravity southeast -geometry +10+10 -composite output.jpg

# 画像全体に斜めに繰り返しテキスト透かしを追加
magick input.jpg \\
  -fill "rgba(255,255,255,0.4)" \\
  -pointsize 40 \\
  -gravity center \\
  -annotate +0+0 "© あなたの名前" \\
  -rotate -30 \\
  output.jpg

# 中央に 50% 不透明度の Logo を配置
magick input.jpg \\
  \\( logo.png -resize 300x -alpha set -channel A -evaluate set 50% +channel \\) \\
  -gravity center -composite output.png

# フォルダ内の全 JPG にバッチ透かし入れ
for f in *.jpg; do magick "$f" logo.png -gravity southeast -geometry +10+10 -composite "wm_$f"; done
\`\`\`

\`-composite\` 操作は画像を積み重ねます。\`-gravity\` フラグは上層画像を下層に対して位置決めします（southeast = 右下、north = 上中央、center = 中央）。\`-geometry +10+10\` は選択した位置から 10px のパディングを追加します。\`-alpha\` と \`-evaluate set 50%\` フラグは Logo の不透明度を 50% に下げます。

**ImageMagick** は数千ファイルのバッチ透かし入れスクリプトに優れています。GUI のないヘッドレスサーバーで動作する唯一の選択肢でもあります。

## よくある質問

### 透かしは画像の盗難を防ぎますか？

減らします。カジュアルな泥棒はクリーンな画像を手に入れようとするので、透かし入りはスキップします。決心した泥棒は Photoshop と時間があれば単純な透かしは除去できます、特に均一な部分にあるものは。本当の保護には、可視透かしにメタデータ（EXIF 著作権フィールド）を組み合わせ、一般向けには低解像度プレビューを使うことを検討してください。

### テキスト透かしとロゴ透かし、どちらを使うべき？

**テキスト** はより速く（デザイン不要）、写真家が「© あなたの名前」タグを入れたいときの定番。**ロゴ** はよりプロフェッショナルに見え、ブランド、不動産エージェント、ストックサイトが好みます。ロゴがあるなら、それを使ってください。なければ、40〜50% 不透明度のクリーンなサンセリフフォントのテキスト透かしが素晴らしいです。

### 透かしの最適な不透明度は？

スイートスポットは **30〜60%** です。100% だと透かしが強すぎて写真から注意を逸らします。20% 以下だとほとんど見えません。40% 付近なら、保護のためにはっきり見えるが、画像を圧倒しません。

### 透かしはどこに配置すべき？

- **右下隅** が最も一般的で最も邪魔にならない
- **左下隅** 也不错
- **中央** は抑止力が最も強い（クロップしにくいため）が、最も邪魔でもある
- **タイル（繰り返し）** は保護が最も強いが最も侵入的 —— 典型的には有料コンテンツのプレビューに使用

### 透明 PNG に透かしを入れられますか？

はい。UtilBoxx と ImageMagick はどちらも透明 PNG をサポートします。透明背景の Logo を合成するとき、Logo にピクセルがない部分では下層の画像が透けて見えます。

### オンラインの透かしツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、写真がリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人情報、財務、医療、その他の機密性の高い写真を、信頼できない透かしツールにアップロードしないでください。

## まとめ

透かし入れは画像を作る人なら誰でも頻繁に行う小さな作業であり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料透かしツール](/ja/tools/image/add-watermark) は明白な選択です：プライベートで、速くて、無料で、登録不要、出力に余計な透かしなし。

既に Photoshop を常用しているデザイナーなら、レイヤーベースの透かし入れが最も細かい制御を提供します。バッチ処理のスクリプトを書くなら、ターミナルで ImageMagick が最強です。Mac ユーザーは **プレビュー** でシンプルなテキスト重ね合わせもできます：画像を開き、**ツール > 注釈 > テキスト** を選び、透かしを入力し、配置して保存。無料の Photoshop 代替 GIMP にも同じレイヤーベースのワークフローがあります。

その他は、[UtilBoxx の画像ツール](/ja/tools/image) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先の画像ツールキットが見つかります。`;

const watermarkEs = `## ¿Por qué marcar imágenes con marca de agua?

Una marca de agua es una marca visible — normalmente texto o un logo — colocada en una imagen para identificar al propietario, disuadir el robo o promocionar una marca. Fotógrafos, diseñadores, agentes inmobiliarios, vendedores de e-commerce y creadores de contenido de stock marcan su trabajo con marca de agua, y por buenas razones: internet es una máquina de copiar, y una marca de agua es la única línea de defensa entre tu foto y alguien que la haga pasar por suya.

Las razones por las que la gente marca imágenes con marca de agua son prácticas y frecuentes:

- **Protección de copyright**: Una marca de agua visible dice al mundo "esto es mío" sin necesidad de presentar un aviso formal de copyright.
- **Disuasión del robo**: Un ladrón casual que busca una imagen rápida se saltará una con marca de agua e irá a por una más limpia. Un ladrón decidido con Photoshop y tiempo puede, eso sí, eliminar una marca de agua simple, especialmente sobre un área uniforme.
- **Branding**: Las fotos inmobiliarias con "© Nombre de la agencia" en la esquina se comparten en redes sociales y el nombre de la agencia viaja con ellas.
- **Promoción**: El logo elegante de un fotógrafo de bodas en la esquina de cada preview le consigue unos cuantos clientes extra al año solo por ser visto.
- **Atribución**: Los fotógrafos de stock marcan sus previews con marca de agua y la quitan tras la compra.
- **Prueba de propiedad**: Si dos personas reclaman la misma foto, quien tiene la marca de agua tiene un caso más fuerte.

La buena noticia: con la herramienta adecuada, marcar imágenes con marca de agua es un trabajo de 10 segundos y no requiere instalar nada.

## Método 1: Usa la herramienta de marca de agua gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de marcar imágenes es la [herramienta de marca de agua de UtilBoxx](/es/tools/image/add-watermark). Se ejecuta por completo en tu navegador, por lo que tus fotos nunca salen de tu dispositivo. Sin subidas, sin registro y sin marca extra en el resultado.

Así se usa:

1. Ve a [utilboxx.com/es/tools/image/add-watermark](/es/tools/image/add-watermark)
2. Haz clic en el área de subida y selecciona tu imagen base (o arrástrala)
3. Elige **texto** o **logo**:
   - **Texto**: escribe el texto de tu marca de agua, elige fuente, tamaño, color y opacidad
   - **Logo**: sube un PNG con fondo transparente como logo
4. Elige la posición: **esquina** (superior izquierda, superior derecha, inferior izquierda, inferior derecha), **centro**, **mosaico** (repetido por toda la imagen), o arrastra manualmente
5. Ajusta tamaño, opacidad (típicamente 30-60 % es el punto dulce) y rotación
6. Haz clic en "Aplicar"
7. Descarga el resultado (o todos como zip)

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. Tus fotos nunca llegan a un servidor.
- **Soporte de texto y logo**: una herramienta para ambos estilos de marca de agua
- **Modo mosaico**: texto repetido en diagonal por toda la imagen, look clásico de stock
- **Controles precisos**: posición, tamaño, opacidad, rotación, fuente, color
- **Apto para lotes**: suelta 20 imágenes y márcalas todas a la vez
- **Sin marcas de agua** añadidas por la propia herramienta — solo la marca de agua que tú especifiques

Si solo necesitas marcar imágenes de vez en cuando, esta es la opción de menor fricción con diferencia. Y como es basada en navegador, funciona en Windows, Mac, Linux, ChromeOS, iOS y Android.

## Método 2: Adobe Photoshop (De pago)

Photoshop es el peso pesado de la edición de imágenes, y su "Estilos de capa" combinados con "Transformación libre" te da control total sobre la marca de agua. Puedes pegar tu texto o logo como una capa separada, configurar el modo de fusión (Multiplicar para oscurecer, Trama para aclarar, Superponer para mezclar color), ajustar la opacidad con un deslizador, rotar libremente, escalar, posicionar con precisión de píxel y guardar el resultado. También puedes grabar una "Acción" para aplicar la misma marca de agua a una carpeta de imágenes automáticamente.

El inconveniente es el precio y la complejidad. Photoshop forma parte de una suscripción a Creative Cloud que cuesta aproximadamente **$22,99 al mes** (unos $240 al año). Para una marca de agua puntual es excesivo, y el panel de capas puede intimidar a nuevos usuarios.

Photoshop solo vale la pena si ya lo usas para retoque, composición o diseño. Si marcar con marca de agua es todo lo que necesitas, una herramienta de navegador hace el trabajo sin factura ni instalación.

## Método 3: Línea de comandos con ImageMagick

Si te manejas en la terminal, la herramienta de código abierto **ImageMagick** es la opción CLI más potente para marcar con marca de agua. Instálala con Homebrew (\`brew install imagemagick\`), luego:

\`\`\`bash
# Componer un logo PNG en la esquina inferior derecha con padding de 10px
magick input.jpg logo.png -gravity southeast -geometry +10+10 -composite output.jpg

# Añadir marca de agua de texto en mosaico diagonal por toda la imagen
magick input.jpg \\
  -fill "rgba(255,255,255,0.4)" \\
  -pointsize 40 \\
  -gravity center \\
  -annotate +0+0 "© Tu Nombre" \\
  -rotate -30 \\
  output.jpg

# Colocar un logo centrado con 50% de opacidad
magick input.jpg \\
  \\( logo.png -resize 300x -alpha set -channel A -evaluate set 50% +channel \\) \\
  -gravity center -composite output.png

# Marca de agua por lotes a todos los JPG de una carpeta
for f in *.jpg; do magick "$f" logo.png -gravity southeast -geometry +10+10 -composite "wm_$f"; done
\`\`\`

La operación \`-composite\` apila imágenes. La bandera \`-gravity\` posiciona la imagen superior respecto a la inferior (southeast = inferior derecha, north = superior centro, center = medio). La bandera \`-geometry +10+10\` añade 10px de padding desde la gravity elegida. Las banderas \`-alpha\` y \`-evaluate set 50%\` reducen la opacidad del logo al 50 %.

**ImageMagick** es excelente para programar marcas de agua por lotes a través de miles de archivos. También es la única opción que funciona en un servidor headless sin GUI.

## Preguntas frecuentes

### ¿Las marcas de agua evitan el robo de imágenes?

Lo reducen. Un ladrón casual que busca una imagen rápida se saltará una con marca de agua e irá a por una más limpia. Un ladrón decidido con Photoshop y tiempo puede, eso sí, eliminar una marca de agua simple, especialmente sobre un área uniforme. Para protección real, combina la marca de agua visible con metadatos (campo de copyright EXIF) y considera previews de baja resolución para el público.

### ¿Debería usar una marca de agua de texto o de logo?

**Texto** es más rápido (sin diseño) y es la opción de los fotógrafos que quieren una etiqueta "© Tu Nombre". **Logo** se ve más profesional y es lo que prefieren marcas, agentes inmobiliarios y sitios de stock. Si tienes un logo, úsalo. Si no, una marca de agua de texto limpia en una fuente sans-serif simple al 40-50 % de opacidad funciona genial.

### ¿Cuál es la mejor opacidad para una marca de agua?

El punto dulce es **30-60 %**. Al 100 % la marca de agua es tan opaca que distrae de la foto. Por debajo del 20 % apenas se ve. Alrededor del 40 % la marca de agua está claramente ahí para protección pero no abruma la imagen.

### ¿Dónde debería colocar la marca de agua?

- **Esquina inferior derecha** es la más común y la menos intrusiva
- **Esquina inferior izquierda** también es buena
- **Centro** es el disuasorio más fuerte porque es difícil de recortar, pero también es el más distractor
- **Mosaico (repetido)** es la protección más fuerte pero la más intrusiva — típicamente usado para previews de contenido de pago

### ¿Puedo marcar con marca de agua un PNG transparente?

Sí. UtilBoxx e ImageMagick soportan PNGs transparentes. Al componer un logo con fondo transparente, la imagen de fondo se ve a través de donde el logo no tiene píxeles.

### ¿Es seguro usar una herramienta de marca de agua online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador** — sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tus fotos se están subiendo a un servidor remoto y lee atentamente su política de privacidad. Evita subir fotos personales, financieras, médicas o de otro modo sensibles a una herramienta de marca de agua en la que no confías.

## Conclusión

Marcar con marca de agua es una pequeña tarea que aparece constantemente para cualquiera que cree imágenes, y no debería requerir una suscripción de pago o instalar software. Para la mayoría de la gente, la [herramienta gratuita de marca de agua de UtilBoxx](/es/tools/image/add-watermark) es la opción obvia: es privada, rápida y gratis, sin registro y sin marca extra en el resultado.

Si eres diseñador y ya vives en Photoshop, marcar con marca de agua basado en capas te da el control más fino. Si estás programando trabajo por lotes, ImageMagick en la terminal es imbatible. Los usuarios de macOS también pueden usar **Vista Previa** para superposiciones de texto simples: abre la imagen, elige **Herramientas > Anotar > Texto**, escribe tu marca de agua, posiciónala y guarda. GIMP, la alternativa gratuita a Photoshop, tiene el mismo flujo basado en capas a coste cero.

Para todo lo demás, visita las [herramientas de imagen de UtilBoxx](/es/tools/image) y encontrarás un conjunto completo de herramientas para trabajar con imágenes, con privacidad como prioridad, todo en tu navegador.`;

const watermarkPt = `## Por que marcar imagens com marca d'água?

Uma marca d'água é uma marca visível — geralmente texto ou logo — colocada em uma imagem para identificar o dono, desencorajar o roubo ou promover uma marca. Fotógrafos, designers, corretores de imóveis, vendedores de e-commerce e criadores de conteúdo de stock marcam seu trabalho com marca d'água, e por boas razões: a internet é uma máquina de cópia, e uma marca d'água é a única linha de defesa entre sua foto e alguém passando-a como se fosse dele.

Os motivos pelos quais as pessoas marcam imagens com marca d'água são práticos e frequentes:

- **Proteção de copyright**: Uma marca d'água visível diz ao mundo "isso é meu" sem precisar registrar um aviso formal de copyright.
- **Inibição de roubo**: Um ladrão casual procurando uma imagem rápida pula uma com marca d'água e pega uma mais limpa. Um ladrão determinado com Photoshop e tempo pode remover uma marca d'água simples, especialmente sobre uma área uniforme.
- **Branding**: Fotos de imóveis com "© Nome da imobiliária" no canto são compartilhadas em redes sociais e o nome vai junto.
- **Promoção**: O logo elegante de um fotógrafo de casamentos no canto de cada preview consegue alguns clientes extras por ano só por ser visto.
- **Atribuição**: Fotógrafos de stock marcam seus previews e removem a marca d'água após a compra.
- **Prova de propriedade**: Se duas pessoas reivindicam a mesma foto, quem tem a marca d'água tem o caso mais forte.

A boa notícia: com a ferramenta certa, marcar imagens com marca d'água é um trabalho de 10 segundos e você não precisa instalar nada.

## Método 1: Use a ferramenta de marca d'água grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de marcar imagens é a [ferramenta de marca d'água do UtilBoxx](/pt/tools/image/add-watermark). Ela roda inteiramente no seu navegador, então suas fotos nunca saem do seu dispositivo. Sem upload, sem cadastro e sem marca extra no resultado.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/image/add-watermark](/pt/tools/image/add-watermark)
2. Clique na área de upload e selecione sua imagem base (ou arraste e solte)
3. Escolha **texto** ou **logo**:
   - **Texto**: digite o texto da sua marca d'água, escolha fonte, tamanho, cor e opacidade
   - **Logo**: faça upload de um PNG com fundo transparente como logo
4. Escolha a posição: **canto** (superior esquerdo, superior direito, inferior esquerdo, inferior direito), **centro**, **mosaico** (repetido por toda a imagem), ou arraste manualmente
5. Ajuste tamanho, opacidade (tipicamente 30-60% é o ponto ideal) e rotação
6. Clique em "Aplicar"
7. Baixe o resultado (ou todos como zip)

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. Suas fotos nunca chegam a um servidor.
- **Suporte a texto e logo**: uma ferramenta para ambos os estilos de marca d'água
- **Modo mosaico**: texto diagonal repetido por toda a imagem, visual clássico de stock
- **Controles precisos**: posição, tamanho, opacidade, rotação, fonte, cor
- **Amigo de lotes**: solte 20 imagens e marque todas de uma vez
- **Sem marcas d'água** adicionadas pela própria ferramenta — apenas a marca d'água que você especificou

Se você só precisa marcar imagens de vez em quando, essa é a opção de menor atrito disparado. E como é baseada em navegador, funciona em Windows, Mac, Linux, ChromeOS, iOS e Android.

## Método 2: Adobe Photoshop (Pago)

Photoshop é o peso-pesado da edição de imagens, e seu "Estilos de camada" combinados com "Transformação livre" dá controle total sobre a marca d'água. Você pode colar seu texto ou logo como uma camada separada, configurar o modo de fusão (Multiplicar para escurecer, Tela para clarear, Sobreposição para misturar cor), ajustar a opacidade com um controle deslizante, girar livremente, escalar, posicionar com precisão de pixel e salvar o resultado. Você também pode gravar uma "Ação" para aplicar a mesma marca d'água a uma pasta de imagens automaticamente.

O problema é o preço e a complexidade. Photoshop faz parte de uma assinatura Creative Cloud que custa cerca de **$22,99 por mês** (aproximadamente $240 por ano). Para uma marca d'água pontual é exagero, e o painel de camadas pode intimidar novos usuários.

Photoshop vale a pena apenas se você já o usa para retoque, composição ou design. Se marcar com marca d'água é tudo o que você precisa, uma ferramenta baseada em navegador faz o trabalho sem fatura nem instalação.

## Método 3: Linha de comando com ImageMagick

Se você se sente confortável no terminal, a ferramenta open-source **ImageMagick** é a opção CLI mais poderosa para marcar com marca d'água. Instale com Homebrew (\`brew install imagemagick\`), depois:

\`\`\`bash
# Compor um logo PNG no canto inferior direito com padding de 10px
magick input.jpg logo.png -gravity southeast -geometry +10+10 -composite output.jpg

# Adicionar marca d'água de texto em mosaico diagonal por toda a imagem
magick input.jpg \\
  -fill "rgba(255,255,255,0.4)" \\
  -pointsize 40 \\
  -gravity center \\
  -annotate +0+0 "© Seu Nome" \\
  -rotate -30 \\
  output.jpg

# Colocar um logo centralizado com 50% de opacidade
magick input.jpg \\
  \\( logo.png -resize 300x -alpha set -channel A -evaluate set 50% +channel \\) \\
  -gravity center -composite output.png

# Marca d'água em lote para todos os JPG de uma pasta
for f in *.jpg; do magick "$f" logo.png -gravity southeast -geometry +10+10 -composite "wm_$f"; done
\`\`\`

A operação \`-composite\` empilha imagens. A flag \`-gravity\` posiciona a imagem superior em relação à inferior (southeast = inferior direito, north = superior centro, center = meio). A flag \`-geometry +10+10\` adiciona 10px de padding a partir da gravity escolhida. As flags \`-alpha\` e \`-evaluate set 50%\` reduzem a opacidade do logo a 50%.

**ImageMagick** é excelente para programar marcas d'água em lote através de milhares de arquivos. Também é a única opção que funciona em um servidor headless sem GUI.

## Perguntas frequentes

### Marcas d'água evitam o roubo de imagens?

Reduzem. Um ladrão casual procurando uma imagem rápida pula uma com marca d'água e pega uma mais limpa. Um ladrão determinado com Photoshop e tempo pode remover uma marca d'água simples, especialmente sobre uma área uniforme. Para proteção real, combine a marca d'água visível com metadados (campo de copyright EXIF) e considere previews em baixa resolução para o público.

### Devo usar uma marca d'água de texto ou de logo?

**Texto** é mais rápido (sem design) e é o padrão para fotógrafos que querem uma etiqueta "© Seu Nome". **Logo** parece mais profissional e é o que marcas, corretores e sites de stock preferem. Se você tem um logo, use-o. Se não, uma marca d'água de texto limpa em uma fonte sans-serif simples a 40-50% de opacidade funciona muito bem.

### Qual a melhor opacidade para uma marca d'água?

O ponto ideal é **30-60%**. A 100% a marca d'água é tão opaca que distrai da foto. Abaixo de 20% mal aparece. Por volta dos 40% a marca d'água está claramente ali para proteção, mas não domina a imagem.

### Onde devo colocar a marca d'água?

- **Canto inferior direito** é o mais comum e o menos intrusivo
- **Canto inferior esquerdo** também é bom
- **Centro** é o maior inibidor porque é difícil de cortar, mas também é o que mais distrai
- **Mosaico (repetido)** é a proteção mais forte, porém mais intrusiva — tipicamente usado para previews de conteúdo pago

### Posso marcar com marca d'água um PNG transparente?

Sim. UtilBoxx e ImageMagick suportam PNGs transparentes. Ao compor um logo com fundo transparente, a imagem de fundo aparece onde o logo não tem pixels.

### É seguro usar uma ferramenta de marca d'água online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que suas fotos estão sendo enviadas para um servidor remoto e leia atentamente sua política de privacidade. Evite enviar fotos pessoais, financeiras, médicas ou de outro modo sensíveis para uma ferramenta de marca d'água em que você não confia.

## Conclusão

Marcar com marca d'água é uma pequena tarefa que aparece constantemente para quem cria imagens, e não deveria exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, a [ferramenta gratuita de marca d'água do UtilBoxx](/pt/tools/image/add-watermark) é a escolha óbvia: é privada, rápida e grátis, sem cadastro e sem marca extra no resultado.

Se você é designer e já vive no Photoshop, marcar com marca d'água baseado em camadas dá o controle mais fino. Se você está programando trabalho em lote, ImageMagick no terminal é imbatível. Usuários de macOS também podem usar o **Visualização** para sobreposições de texto simples: abra a imagem, escolha **Ferramentas > Anotar > Texto**, digite sua marca d'água, posicione e salve. O GIMP, a alternativa gratuita ao Photoshop, tem o mesmo fluxo baseado em camadas a custo zero.

Para todo o resto, visite as [ferramentas de imagem do UtilBoxx](/pt/tools/image) e você encontrará um conjunto completo de ferramentas para trabalhar com imagens, com privacidade como prioridade, tudo no seu navegador.`;

const watermarkFr = `## Pourquoi filigraner des images ?

Un filigrane est une marque visible — généralement du texte ou un logo — placée sur une image pour identifier le propriétaire, dissuader le vol ou promouvoir une marque. Photographes, designers, agents immobiliers, vendeurs e-commerce et créateurs de contenu stock filigranent leur travail, et pour de bonnes raisons : internet est une machine à copier, et un filigrane est l'unique ligne de défense entre votre photo et quelqu'un qui la fait passer pour sienne.

Les raisons pour lesquelles les gens filigranent des images sont pratiques et fréquentes :

- **Protection du droit d'auteur** : Un filigrane visible dit au monde « c'est à moi » sans avoir à déposer un avis formel de copyright.
- **Dissuasion du vol** : Un voleur occasionnel cherchant une image rapide passera son chemin devant un filigrane et prendra quelque chose de plus propre. Un voleur déterminé avec Photoshop et du temps peut, en revanche, retirer un filigrane simple, surtout sur une zone uniforme.
- **Image de marque** : Les photos immobilières avec « © Nom de l'agence » dans le coin se partagent sur les réseaux sociaux, et le nom de l'agence voyage avec.
- **Promotion** : Le logo élégant d'un photographe de mariage dans le coin de chaque aperçu lui rapporte quelques clients supplémentaires par an, juste parce qu'il est vu.
- **Attribution** : Les photographes stock filigranent leurs aperçus et retirent le filigrane après achat.
- **Preuve de propriété** : Si deux personnes revendiquent la même photo, celle qui a le filigrane a un dossier plus solide.

Bonne nouvelle : avec le bon outil, filigraner des images est un travail de 10 secondes et vous n'avez rien à installer.

## Méthode 1 : Utiliser l'outil de filigrane gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de filigraner des images est l'[outil de filigrane de UtilBoxx](/fr/tools/image/add-watermark). Il s'exécute entièrement dans votre navigateur, donc vos photos ne quittent jamais votre appareil. Pas de téléversement, pas d'inscription, pas de marque supplémentaire sur le résultat.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/image/add-watermark](/fr/tools/image/add-watermark)
2. Cliquez sur la zone de téléversement et sélectionnez votre image de base (ou glissez-déposez)
3. Choisissez **texte** ou **logo** :
   - **Texte** : tapez le texte de votre filigrane, choisissez la police, la taille, la couleur et l'opacité
   - **Logo** : téléversez un PNG avec fond transparent comme logo
4. Choisissez la position : **coin** (haut gauche, haut droit, bas gauche, bas droit), **centre**, **mosaïque** (répété sur toute l'image), ou glissez manuellement
5. Ajustez taille, opacité (typiquement 30-60 % est le sweet spot) et rotation
6. Cliquez sur « Appliquer »
7. Téléchargez le résultat (ou tous en zip)

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Vos photos n'arrivent jamais sur un serveur.
- **Support texte et logo** : un seul outil pour les deux styles de filigrane
- **Mode mosaïque** : texte répété en diagonale sur toute l'image, look classique de stock
- **Contrôles précis** : position, taille, opacité, rotation, police, couleur
- **Compatible lots** : déposez 20 images et filigrannez-les toutes d'un coup
- **Aucun filigrane** ajouté par l'outil lui-même — uniquement le filigrane que vous avez spécifié

Si vous n'avez besoin de filigraner des images qu'occasionnellement, c'est de loin l'option la plus simple. Et comme c'est basé navigateur, cela fonctionne sur Windows, Mac, Linux, ChromeOS, iOS et Android.

## Méthode 2 : Adobe Photoshop (Payant)

Photoshop est le poids lourd de l'édition d'images, et ses « Styles de calque » combinés à la « Transformation libre » vous donnent un contrôle total sur le filigrane. Vous pouvez coller votre texte ou logo comme un calque séparé, régler le mode de fusion (Produit pour assombrir, Screen pour éclaircir, Incrustation pour mélanger les couleurs), ajuster l'opacité avec un curseur, faire pivoter librement, mettre à l'échelle, positionner à la précision du pixel et enregistrer le résultat. Vous pouvez aussi enregistrer une « Action » pour appliquer automatiquement le même filigrane à un dossier d'images.

Le hic, c'est le prix et la complexité. Photoshop fait partie d'un abonnement Creative Cloud qui coûte environ **22,99 $ par mois** (environ 240 $ par an). Pour un filigrane ponctuel c'est disproportionné, et le panneau des calques peut intimider les nouveaux utilisateurs.

Photoshop ne vaut le coup que si vous l'utilisez déjà pour la retouche, le compositing ou le design. Si filigraner est tout ce dont vous avez besoin, un outil en navigateur fait le travail sans facture ni installation.

## Méthode 3 : Ligne de commande avec ImageMagick

Si vous êtes à l'aise dans un terminal, l'outil open-source **ImageMagick** est l'option CLI la plus puissante pour filigraner. Installez-le avec Homebrew (\`brew install imagemagick\`), puis :

\`\`\`bash
# Composer un logo PNG dans le coin bas-droit avec padding de 10px
magick input.jpg logo.png -gravity southeast -geometry +10+10 -composite output.jpg

# Ajouter un filigrane texte en mosaïque diagonale sur toute l'image
magick input.jpg \\
  -fill "rgba(255,255,255,0.4)" \\
  -pointsize 40 \\
  -gravity center \\
  -annotate +0+0 "© Votre Nom" \\
  -rotate -30 \\
  output.jpg

# Placer un logo centré avec 50 % d'opacité
magick input.jpg \\
  \\( logo.png -resize 300x -alpha set -channel A -evaluate set 50% +channel \\) \\
  -gravity center -composite output.png

# Filigrane par lot sur tous les JPG d'un dossier
for f in *.jpg; do magick "$f" logo.png -gravity southeast -geometry +10+10 -composite "wm_$f"; done
\`\`\`

L'opération \`-composite\` empile les images. Le flag \`-gravity\` positionne l'image supérieure par rapport à l'inférieure (southeast = bas-droite, north = haut-centre, center = milieu). Le flag \`-geometry +10+10\` ajoute 10px de padding depuis la gravity choisie. Les flags \`-alpha\` et \`-evaluate set 50%\` réduisent l'opacité du logo à 50 %.

**ImageMagick** est excellent pour scripter des filigranes par lots sur des milliers de fichiers. C'est aussi la seule option qui fonctionne sur un serveur headless sans GUI.

## Questions fréquentes

### Les filigranes empêchent-ils le vol d'images ?

Ils le réduisent. Un voleur occasionnel cherchant une image rapide passera son chemin devant un filigrane et prendra quelque chose de plus propre. Un voleur déterminé avec Photoshop et du temps peut retirer un filigrane simple, surtout sur une zone uniforme. Pour une vraie protection, combinez le filigrane visible avec des métadonnées (champ copyright EXIF) et envisagez des aperçus basse résolution pour le public.

### Dois-je utiliser un filigrane texte ou logo ?

**Texte** est plus rapide (pas de design) et c'est le choix des photographes qui veulent une étiquette « © Votre Nom ». **Logo** fait plus professionnel et est ce que préfèrent marques, agents immobiliers et sites de stock. Si vous avez un logo, utilisez-le. Sinon, un filigrane de texte propre dans une police sans-serif simple à 40-50 % d'opacité fait des merveilles.

### Quelle est la meilleure opacité pour un filigrane ?

Le sweet spot est **30-60 %**. À 100 % le filigrane est si opaque qu'il distrait de la photo. Sous 20 % il est à peine visible. Aux alentours de 40 % le filigrane est clairement là pour la protection mais n'écrase pas l'image.

### Où dois-je placer le filigrane ?

- **Coin bas-droit** est le plus commun et le moins intrusif
- **Coin bas-gauche** est aussi bien
- **Centre** est le plus dissuasif car difficile à recadrer, mais aussi le plus distrayant
- **Mosaïque (répétée)** est la protection la plus forte mais la plus intrusive — typiquement utilisée pour les aperçus de contenu payant

### Puis-je filigraner un PNG transparent ?

Oui. UtilBoxx et ImageMagick supportent les PNG transparents. Lors de la composition d'un logo avec fond transparent, l'image sous-jacente transparaît là où le logo n'a pas de pixels.

### Est-il sûr d'utiliser un outil de filigrane en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que vos photos sont téléversées sur un serveur distant et lisez attentivement leur politique de confidentialité. Évitez de téléverser des photos personnelles, financières, médicales ou autrement sensibles sur un outil de filigrane en qui vous n'avez pas confiance.

## Conclusion

Filigraner est une petite tâche qui revient constamment pour quiconque crée des images, et ne devrait pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, l'[outil gratuit de filigrane de UtilBoxx](/fr/tools/image/add-watermark) est le choix évident : privé, rapide, gratuit, sans inscription ni marque supplémentaire sur le résultat.

Si vous êtes designer et vivez déjà dans Photoshop, le filigrane basé sur les calques vous offre le contrôle le plus fin. Si vous scriptz du travail par lots, ImageMagick dans le terminal est imbattable. Les utilisateurs de macOS peuvent aussi utiliser **Aperçu** pour des superpositions de texte simples : ouvrez l'image, choisissez **Outils > Annoter > Texte**, saisissez votre filigrane, positionnez-le et enregistrez. GIMP, l'alternative gratuite à Photoshop, propose le même flux basé sur les calques à coût zéro.

Pour tout le reste, rendez-vous sur les [outils image de UtilBoxx](/fr/tools/image) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const watermarkDe = `## Warum Bilder mit Wasserzeichen versehen?

Ein Wasserzeichen ist eine sichtbare Markierung — normalerweise Text oder ein Logo — die auf einem Bild platziert wird, um den Eigentümer zu identifizieren, Diebstahl abzuschrecken oder eine Marke zu bewerben. Fotografen, Designer, Immobilienmakler, E-Commerce-Verkäufer und Stock-Content-Ersteller versehen ihre Arbeit mit Wasserzeichen, und das aus gutem Grund: Das Internet ist eine Kopiermaschine, und ein Wasserzeichen ist die einzige Verteidigungslinie zwischen deinem Foto und jemand anderem, der es als seines ausgibt.

Die Gründe, warum Menschen Bilder mit Wasserzeichen versehen, sind praktisch und häufig:

- **Urheberrechtsschutz**: Ein sichtbares Wasserzeichen sagt der Welt „das ist meins", ohne dass eine formelle Urheberrechtsanmeldung nötig ist.
- **Diebstahlsabschreckung**: Ein Gelegenheitsdieb, der ein schnelles Bild sucht, überspringt eines mit Wasserzeichen und greift zu einem saubereren. Ein entschlossener Dieb mit Photoshop und Zeit kann allerdings ein einfaches Wasserzeichen entfernen, besonders über einem gleichmäßigen Bereich.
- **Branding**: Immobilienfotos mit „© Agenturname" in der Ecke werden in sozialen Medien geteilt, und der Name der Agentur reist mit.
- **Promotion**: Das elegante Logo eines Hochzeitsfotografen in der Ecke jeder Vorschau bringt pro Jahr ein paar zusätzliche Kunden ein, nur weil es gesehen wird.
- **Zuordnung**: Stock-Fotografen versehen ihre Vorschauen mit Wasserzeichen und entfernen sie nach dem Kauf.
- **Eigentumsnachweis**: Wenn zwei Personen dasselbe Foto beanspruchen, hat der mit dem Wasserzeichen den stärkeren Fall.

Die gute Nachricht: Mit dem richtigen Werkzeug ist das Versehen mit Wasserzeichen eine 10-Sekunden-Aufgabe, und du musst nichts installieren.

## Methode 1: Das kostenlose Wasserzeichen-Werkzeug von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode, Bilder mit Wasserzeichen zu versehen, ist das [Wasserzeichen-Werkzeug von UtilBoxx](/de/tools/image/add-watermark). Es läuft vollständig in deinem Browser, sodass deine Fotos dein Gerät nie verlassen. Kein Upload, keine Registrierung, keine zusätzliche Markierung im Ergebnis.

So verwendest du es:

1. Gehe zu [utilboxx.com/de/tools/image/add-watermark](/de/tools/image/add-watermark)
2. Klicke auf den Upload-Bereich und wähle dein Basisbild (oder ziehe es per Drag & Drop)
3. Wähle **Text** oder **Logo**:
   - **Text**: gib deinen Wasserzeichentext ein, wähle Schriftart, Größe, Farbe und Deckkraft
   - **Logo**: lade ein PNG mit transparentem Hintergrund als Logo hoch
4. Wähle die Position: **Ecke** (oben links, oben rechts, unten links, unten rechts), **Mitte**, **Kacheln** (über das ganze Bild wiederholt) oder ziehe manuell
5. Passe Größe, Deckkraft (typischerweise 30-60 % ist der Sweet Spot) und Drehung an
6. Klicke auf „Anwenden"
7. Lade das Ergebnis herunter (oder alle als ZIP)

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in deinem Browser verarbeitet. Deine Fotos erreichen nie einen Server.
- **Text- und Logo-Unterstützung**: ein Werkzeug für beide Wasserzeichen-Stile
- **Kachel-Modus**: diagonal wiederholter Text über das ganze Bild, klassischer Stock-Look
- **Präzise Steuerung**: Position, Größe, Deckkraft, Drehung, Schriftart, Farbe
- **Stapelfähig**: Wirf 20 Bilder rein und versehe sie alle auf einmal
- **Keine Wasserzeichen** vom Werkzeug selbst hinzugefügt — nur dein angegebenes Wasserzeichen

Wenn du nur gelegentlich Bilder mit Wasserzeichen versiehst, ist dies die reibungsloseste Option. Und weil es browserbasiert ist, läuft es auf Windows, Mac, Linux, ChromeOS, iOS und Android.

## Methode 2: Adobe Photoshop (Kostenpflichtig)

Photoshop ist das Schwergewicht der Bildbearbeitung, und seine „Ebenenstile" kombiniert mit „Frei transformieren" geben dir volle Kontrolle über das Wasserzeichen. Du kannst deinen Text oder dein Logo als separate Ebene einfügen, den Mischmodus einstellen (Multiplizieren zum Abdunkeln, Bildschirm zum Aufhellen, Überlagern zum Farbmischen), die Deckkraft mit einem Schieberegler anpassen, frei drehen, skalieren, pixelgenau positionieren und das Ergebnis speichern. Du kannst auch eine „Aktion" aufzeichnen, um dasselbe Wasserzeichen automatisch auf einen Ordner voller Bilder anzuwenden.

Der Haken ist der Preis und die Komplexität. Photoshop ist Teil eines Creative-Cloud-Abonnements, das ungefähr **22,99 $ pro Monat** (etwa 240 $ pro Jahr) kostet. Für ein gelegentliches Wasserzeichen ist das übertrieben, und das Ebenen-Bedienfeld kann Neulinge abschrecken.

Photoshop lohnt sich nur, wenn du es bereits für Retusche, Compositing oder Design nutzt. Wenn Wasserzeichen alles ist, was du brauchst, erledigt ein Browser-Werkzeug die Arbeit ohne Rechnung und ohne Installation.

## Methode 3: Kommandozeile mit ImageMagick

Wenn du dich im Terminal wohlfühlst, ist das Open-Source-Werkzeug **ImageMagick** die leistungsfähigste CLI-Option für Wasserzeichen. Installiere es mit Homebrew (\`brew install imagemagick\`), dann:

\`\`\`bash
# Logo PNG in der unteren rechten Ecke mit 10px Abstand compositen
magick input.jpg logo.png -gravity southeast -geometry +10+10 -composite output.jpg

# Diagonal gekacheltes Textwasserzeichen über das ganze Bild
magick input.jpg \\
  -fill "rgba(255,255,255,0.4)" \\
  -pointsize 40 \\
  -gravity center \\
  -annotate +0+0 "© Dein Name" \\
  -rotate -30 \\
  output.jpg

# Zentriertes Logo mit 50 % Deckkraft platzieren
magick input.jpg \\
  \\( logo.png -resize 300x -alpha set -channel A -evaluate set 50% +channel \\) \\
  -gravity center -composite output.png

# Stapel-Wasserzeichen für alle JPGs in einem Ordner
for f in *.jpg; do magick "$f" logo.png -gravity southeast -geometry +10+10 -composite "wm_$f"; done
\`\`\`

Die Operation \`-composite\` stapelt Bilder. Das Flag \`-gravity\` positioniert das obere Bild relativ zum unteren (southeast = unten rechts, north = oben Mitte, center = Mitte). Das Flag \`-geometry +10+10\` fügt 10px Abstand von der gewählten Schwerkraft hinzu. Die Flags \`-alpha\` und \`-evaluate set 50%\` reduzieren die Logo-Deckkraft auf 50 %.

**ImageMagick** eignet sich hervorragend, um Wasserzeichen-Stapel über Tausende von Dateien zu skripten. Es ist auch die einzige Option, die auf einem kopflosen Server ohne GUI funktioniert.

## Häufige Fragen

### Verhindern Wasserzeichen Bilddiebstahl?

Sie reduzieren ihn. Ein Gelegenheitsdieb, der ein schnelles Bild sucht, überspringt eines mit Wasserzeichen und greift zu einem saubereren. Ein entschlossener Dieb mit Photoshop und Zeit kann allerdings ein einfaches Wasserzeichen entfernen, besonders über einem gleichmäßigen Bereich. Für echten Schutz kombiniere das sichtbare Wasserzeichen mit Metadaten (EXIF-Copyright-Feld) und erwäge niedrigauflösende Vorschauen für die Öffentlichkeit.

### Sollte ich ein Text- oder Logo-Wasserzeichen verwenden?

**Text** ist schneller (kein Design nötig) und die erste Wahl für Fotografen, die ein „© Dein Name"-Tag wollen. **Logo** sieht professioneller aus und ist, was Marken, Immobilienmakler und Stock-Seiten bevorzugen. Wenn du ein Logo hast, nutze es. Wenn nicht, funktioniert ein sauberes Textwasserzeichen in einer schlichten Sans-Serif-Schriftart bei 40-50 % Deckkraft großartig.

### Was ist die beste Deckkraft für ein Wasserzeichen?

Der Sweet Spot ist **30-60 %**. Bei 100 % ist das Wasserzeichen so deckend, dass es vom Foto ablenkt. Unter 20 % ist es kaum sichtbar. Um die 40 % ist das Wasserzeichen klar als Schutz erkennbar, überwältigt das Bild aber nicht.

### Wo sollte ich das Wasserzeichen platzieren?

- **Untere rechte Ecke** ist am gebräuchlichsten und am wenigsten aufdringlich
- **Untere linke Ecke** ist auch gut
- **Mitte** ist am stärksten abschreckend, weil schwer wegzucroppen, aber auch am stärksten ablenkend
- **Gekachelt (wiederholt)** ist der stärkste Schutz, aber am aufdringlichsten — typischerweise für Vorschauen kostenpflichtiger Inhalte

### Kann ich ein transparentes PNG mit Wasserzeichen versehen?

Ja. UtilBoxx und ImageMagick unterstützen beide transparente PNGs. Beim Compositen eines Logos mit transparentem Hintergrund scheint das darunterliegende Bild durch, wo das Logo keine Pixel hat.

### Ist die Nutzung eines Online-Wasserzeichen-Werkzeugs sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in deinem Browser** — kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen solltest du davon ausgehen, dass deine Fotos auf einen entfernten Server hochgeladen werden, und die Datenschutzrichtlinie sorgfältig lesen. Vermeide das Hochladen persönlicher, finanzieller, medizinischer oder anderweitig sensibler Fotos zu einem Wasserzeichen-Werkzeug, dem du nicht vertraust.

## Fazit

Wasserzeichen sind eine kleine Aufgabe, die für jeden, der Bilder erstellt, ständig anfällt, und keine kostenpflichtige Subskription oder Software-Installation erfordern sollten. Für die meisten Menschen ist das [kostenlose Wasserzeichen-Werkzeug von UtilBoxx](/de/tools/image/add-watermark) die offensichtliche Wahl: privat, schnell, kostenlos, ohne Registrierung und ohne zusätzliche Markierung im Ergebnis.

Wenn du Designer bist und bereits in Photoshop lebst, gibt dir ebenenbasiertes Wasserzeichnen die feinste Kontrolle. Wenn du Stapelverarbeitung skriptest, ist ImageMagick im Terminal unschlagbar. macOS-Nutzer können auch **Vorschau** für einfache Text-Overlays verwenden: Bild öffnen, **Werkzeuge > Anmerken > Text** wählen, Wasserzeichen eingeben, positionieren und speichern. GIMP, die kostenlose Photoshop-Alternative, hat denselben ebenenbasierten Workflow zum Nulltarif.

Für alles andere besuche die [Bild-Werkzeuge von UtilBoxx](/de/tools/image): Dort findest du einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit Bildern — alles im Browser.`;

export const watermarkPost: Record<string, BlogPost> = {
  en: {
    slug: "add-watermark-to-images",
    category: "Image Tools",
    date: "2026-02-26",
    readTime: "5 min",
    title: "How to Add a Watermark to Images (Text or Logo)",
    description: "Protect your photos with a text or logo watermark. Control position, size, opacity, and tile.",
    content: watermarkEn,
  },
  zh: {
    slug: "add-watermark-to-images",
    category: "图片工具",
    date: "2026-02-26",
    readTime: "5 分钟",
    title: "如何给图片添加水印（文字或 Logo）",
    description: "用文字或 Logo 水印保护你的照片。可控位置、大小、不透明度、平铺方式。",
    content: watermarkZh,
  },
  ja: {
    slug: "add-watermark-to-images",
    category: "画像ツール",
    date: "2026-02-26",
    readTime: "5 分",
    title: "画像に透かしを入れる方法（テキストまたはロゴ）",
    description: "テキストまたはロゴの透かしで写真を保護。位置、サイズ、不透明度、タイルを制御。",
    content: watermarkJa,
  },
  es: {
    slug: "add-watermark-to-images",
    category: "Herramientas de imagen",
    date: "2026-02-26",
    readTime: "5 min",
    title: "Cómo añadir una marca de agua a imágenes (texto o logo)",
    description: "Protege tus fotos con una marca de agua de texto o logo. Controla posición, tamaño, opacidad y mosaico.",
    content: watermarkEs,
  },
  pt: {
    slug: "add-watermark-to-images",
    category: "Ferramentas de imagem",
    date: "2026-02-26",
    readTime: "5 min",
    title: "Como adicionar marca d'água a imagens (texto ou logo)",
    description: "Proteja suas fotos com uma marca d'água de texto ou logo. Controle posição, tamanho, opacidade e mosaico.",
    content: watermarkPt,
  },
  fr: {
    slug: "add-watermark-to-images",
    category: "Outils d'image",
    date: "2026-02-26",
    readTime: "5 min",
    title: "Comment ajouter un filigrane à des images (texte ou logo)",
    description: "Protégez vos photos avec un filigrane texte ou logo. Contrôlez la position, la taille, l'opacité et la mosaïque.",
    content: watermarkFr,
  },
  de: {
    slug: "add-watermark-to-images",
    category: "Bildbearbeitungs-Tools",
    date: "2026-02-26",
    readTime: "5 Min",
    title: "Bilder mit Wasserzeichen versehen (Text oder Logo)",
    description: "Schütze deine Fotos mit einem Text- oder Logo-Wasserzeichen. Steuere Position, Größe, Deckkraft und Kacheln.",
    content: watermarkDe,
  },
};
