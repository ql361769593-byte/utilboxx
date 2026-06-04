// Blog post: How to Build a Color Palette from an Image
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const paletteEn = `## Why build a palette from an image?

A color palette is a small set of colors (usually 4-8) that work together. Designers and artists build palettes constantly: a brand identity, a website, an illustration, a marketing campaign, an interior design scheme. The fastest way to get a great palette is to start from a photo that already "feels right" — a sunset, a flower, a textile, a painting — and extract the colors that the photographer, painter, or nature already chose.

The reasons people build palettes from images are practical and frequent:

- **Brand consistency**: A logo's color comes from the same palette as the product photos on the website, which echoes the same palette as the packaging. All anchored in one source photo.
- **Design inspiration**: A photo of a misty forest, a desert sunset, or a brutalist concrete wall gives you a palette for free.
- **Mood matching**: Warm palettes (reds, oranges, ambers) feel energetic. Cool palettes (blues, greens, purples) feel calm. Picking from an image whose mood you want is faster than building from scratch.
- **Trend awareness**: Designers who study Pantone's "color of the year" or run a fashion palette often ground their work in photo evidence.
- **Accessibility**: A palette with sufficient contrast between text and background colors is readable. Starting from a photo with good natural contrast and sticking to its tones helps.
- **Personal taste**: A photo of your child's drawing, your grandmother's kitchen, or the view from your office window is a perfectly valid palette source.

The good news: with the right tool, building a palette from an image is a 10-second job, and you do not need to install anything.

## Method 1: Use UtilBoxx's Free Palette Generator (Recommended)

The fastest, safest, and most private way to build a palette is [UtilBoxx's Palette Generator tool](/en/tools/color/palette). It runs entirely in your browser, so your image never leaves your device. There is no upload, no signup, and no tracking.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/color/palette](/en/tools/color/palette)
2. Click the upload area and select your image (or drag and drop)
3. The tool extracts the **5-8 dominant colors** automatically (you can pick the count)
4. See the palette as swatches with HEX, RGB, and HSL codes
5. Choose a harmony rule to generate matching colors:
   - **Complementary** — opposite side of the color wheel
   - **Analogous** — adjacent colors
   - **Triadic** — three colors evenly spaced
   - **Split-complementary** — softer complement
6. Copy any color with one click, or export the whole palette as **CSS variables** or JSON
7. Save the palette for later

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. Your image never reaches a server.
- **Automatic extraction**: dominant colors picked by a clustering algorithm, not just "the brightest pixel"
- **Harmony rules**: complementary, analogous, triadic, split-complementary
- **Multi-format export**: HEX, RGB, HSL, CSS variables, JSON
- **Save and share**: keep palettes for reuse
- **Works on any device**: Windows, Mac, Linux, ChromeOS, iOS, Android

If you only build palettes once in a while, this is by far the lowest-friction option.

## Method 2: Adobe Color (Free with Adobe account)

Adobe Color (color.adobe.com) is Adobe's free web-based color tool, and it is the gold standard for palette building. The "Extract Theme" tab lets you upload an image and pulls out the 5 dominant colors automatically. The "Color Wheel" tab lets you build a palette from scratch using harmony rules (analogous, monochromatic, triad, complementary, split-complementary, square, rectangular). The "Accessibility Tools" tab checks contrast ratios for WCAG AA/AAA compliance.

The catch is that you need a free Adobe account to use it, and the site does some logging (you need to be signed in to save palettes to your library). The interface is also more complex than a one-shot tool.

Adobe Color is worth using if you are already in the Adobe ecosystem and want to share palettes with Photoshop or Illustrator. If you only need a one-off palette without creating an account, a browser tool does the job.

## Method 3: Python with PIL and k-means clustering

If you are a developer or data scientist, you can build a palette yourself with a few lines of Python. The approach: load the image, downsample it for speed, run k-means clustering on the pixel colors, and the cluster centers are your palette.

\`\`\`python
# pip install pillow numpy scikit-learn
from PIL import Image
import numpy as np
from sklearn.cluster import KMeans

def extract_palette(image_path, n_colors=5):
    img = Image.open(image_path).convert("RGB")
    # Downsample for speed
    img.thumbnail((200, 200))
    arr = np.array(img).reshape(-1, 3)
    # Run k-means
    kmeans = KMeans(n_clusters=n_colors, n_init=10, random_state=0)
    kmeans.fit(arr)
    # Sort by cluster size (most dominant first)
    counts = np.bincount(kmeans.labels_)
    order = np.argsort(-counts)
    palette = [tuple(kmeans.cluster_centers_[i].astype(int)) for i in order]
    return palette

palette = extract_palette("photo.jpg", n_colors=6)
for color in palette:
    hex_code = "#{:02X}{:02X}{:02X}".format(*color)
    print(f"{hex_code}  rgb{color}")
\`\`\`

Output for a sunset photo, for example, might be:

\`\`\`
#2A1A0F  rgb(42, 26, 15)
#5C2A18  rgb(92, 42, 24)
#A14A28  rgb(161, 74, 40)
#D87740  rgb(216, 119, 64)
#F2B66B  rgb(242, 182, 107)
#FCE4A6  rgb(252, 228, 166)
\`\`\`

A perfect 6-color warm palette. You can then drop these into a CSS file, a design tool, or a brand book. The k-means approach is the algorithm that powers most palette extractors under the hood.

## Common questions

### How many colors should a palette have?

For most purposes, **4-6 colors** is the sweet spot. Fewer feels limiting; more dilutes the brand. A typical structure is: 1 primary, 1-2 secondary, 1-2 accents, and 1-2 neutrals. Most brand systems sit in the 4-8 range.

### What is the difference between dominant and accent colors?

**Dominant colors** are the most common pixels in the image — the broad strokes. **Accent colors** are the small, vivid bursts that draw attention. A good palette has both: dominant for backgrounds, accents for highlights. UtilBoxx extracts the dominants; you can use the harmony-rule generator to add accents.

### What is a complementary color?

The color opposite on the color wheel. Red's complement is cyan, blue's complement is orange, green's complement is magenta. Complementary pairs feel vivid and high-contrast. Use them sparingly to draw the eye.

### What is an analogous palette?

Colors that sit next to each other on the color wheel — like blue, blue-green, and green. Analogous palettes feel harmonious and natural. They are the most common in landscape photography and are a safe choice for backgrounds and large surfaces.

### Can I save and reuse palettes?

Yes. UtilBoxx lets you save palettes to your browser's local storage and copy them out as CSS variables. Adobe Color saves palettes to your account library if you are signed in. In code, you can save the palette as a JSON file or a Python dict and load it back next time.

### Is it safe to use an online palette generator?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your image is being uploaded to a remote server. For personal or proprietary images, a browser-only tool is the safer choice.

## Conclusion

Building a palette from an image is a small task that comes up constantly for designers, developers, and marketers, and it should not require an Adobe subscription. For most people, [UtilBoxx's free Palette Generator](/en/tools/color/palette) is the obvious choice: it is private, fast, and free, with no signup.

If you are a designer who is already in the Adobe ecosystem, Adobe Color is a great backup. If you are scripting or want full control, Python with PIL and k-means is unbeatable. macOS users can also build palettes by sampling colors with Digital Color Meter and saving the codes in Notes.

For everything else, head to [UtilBoxx Color tools](/en/tools/color) and you will find a complete, privacy-first toolkit for working with colors — all in your browser.`;

const paletteZh = `## 为什么要从图片构建调色板？

调色板是一组（通常 4-8 个）相互协调的颜色。设计师和艺术家经常构建调色板：品牌识别、网站、插画、营销活动、室内设计方案。获取出色调色板最快的方式，就是从一张已经"感觉对了"的照片开始 —— 日落、花朵、纺织品、画作 —— 提取摄影师、画家或大自然已经选好的颜色。

人们需要从图片构建调色板的原因既实际又频繁：

- **品牌一致性**：Logo 的颜色来自与网站产品照片相同的调色板，而产品照片又呼应与包装相同的调色板。全部锚定在同一张源图上。
- **设计灵感**：一张雾气森林、沙漠日落、或粗野主义混凝土墙的照片，免费送给你一个调色板。
- **情绪匹配**：暖色调（红、橙、琥珀）感觉有活力。冷色调（蓝、绿、紫）感觉平静。从你想要情绪的图片中取色，比从零开始更快。
- **趋势感知**：研究 Pantone"年度色彩"或运营时尚调色板的设计师，常把工作扎根于图片证据。
- **可访问性**：文字和背景色之间对比度足够的调色板才能易读。从对比度良好的自然图片开始，并坚持它的色调，会有所帮助。
- **个人品味**：你孩子的画作、祖母的厨房、或办公室窗外的风景，都是完全合法的调色板来源。

好消息是：只要用对工具，从图片构建调色板只需 10 秒，而且不需要装任何东西。

## 方法一：使用 UtilBoxx 免费调色板生成器（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的调色板生成器](/zh/tools/color/palette)。它完全在你的浏览器中运行，图片不会离开你的设备。没有上传、没有注册、没有追踪。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/color/palette](/zh/tools/color/palette)
2. 点击上传区域选择你的图片（或直接拖入）
3. 工具自动提取 **5-8 个主导色**（数量可调）
4. 把调色板看成色卡，并显示 HEX、RGB 和 HSL 代码
5. 选择一种和谐规则来生成匹配颜色：
   - **互补色** —— 色环对面
   - **类似色** —— 相邻色
   - **三色** —— 等距三种
   - **分裂互补** —— 柔和的互补
6. 一键复制任意颜色，或把整个调色板导出为 **CSS 变量** 或 JSON
7. 保存调色板备用

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，图片不会上传到任何服务器
- **自动提取**：用聚类算法选主导色，而不是"最亮像素"
- **和谐规则**：互补、类似、三色、分裂互补
- **多格式导出**：HEX、RGB、HSL、CSS 变量、JSON
- **保存和分享**：调色板可复用
- **全设备支持**：Windows、Mac、Linux、ChromeOS、iOS、Android

如果你只是偶尔构建调色板，这是最省心的选择。

## 方法二：Adobe Color（免费，需 Adobe 账号）

Adobe Color（color.adobe.com）是 Adobe 免费的网页端颜色工具，是调色板构建的黄金标准。"提取主题"标签可以上传图片并自动抽出 5 个主导色。"色轮"标签可以让你用和谐规则从零开始构建调色板（类似、单色、三色、互补、分裂互补、方形、矩形）。"可访问性工具"标签可以检查 WCAG AA/AAA 合规性对比度。

代价是你需要免费 Adobe 账号才能使用，并且网站会做一些日志记录（要保存调色板到你的库必须登录）。界面也比一次性工具更复杂。

如果已经身处 Adobe 生态、希望和 Photoshop 或 Illustrator 共享调色板，Adobe Color 值得用。如果你只想无需注册地用一次，浏览器工具就够用。

## 方法三：Python 配合 PIL 和 k-means 聚类

如果你是开发者或数据科学家，可以用几行 Python 自己构建调色板。方法是：加载图片、下采样提速、对像素颜色跑 k-means 聚类，聚类中心就是你的调色板。

\`\`\`python
# pip install pillow numpy scikit-learn
from PIL import Image
import numpy as np
from sklearn.cluster import KMeans

def extract_palette(image_path, n_colors=5):
    img = Image.open(image_path).convert("RGB")
    # 下采样提速
    img.thumbnail((200, 200))
    arr = np.array(img).reshape(-1, 3)
    # 跑 k-means
    kmeans = KMeans(n_clusters=n_colors, n_init=10, random_state=0)
    kmeans.fit(arr)
    # 按聚类大小排序（主导色优先）
    counts = np.bincount(kmeans.labels_)
    order = np.argsort(-counts)
    palette = [tuple(kmeans.cluster_centers_[i].astype(int)) for i in order]
    return palette

palette = extract_palette("photo.jpg", n_colors=6)
for color in palette:
    hex_code = "#{:02X}{:02X}{:02X}".format(*color)
    print(f"{hex_code}  rgb{color}")
\`\`\`

比如一张日落照片的输出可能是：

\`\`\`
#2A1A0F  rgb(42, 26, 15)
#5C2A18  rgb(92, 42, 24)
#A14A28  rgb(161, 74, 40)
#D87740  rgb(216, 119, 64)
#F2B66B  rgb(242, 182, 107)
#FCE4A6  rgb(252, 228, 166)
\`\`\`

完美的 6 色暖色调色板。然后你可以把它们丢进 CSS 文件、设计工具或品牌手册。k-means 方法正是大多数调色板提取器底层的算法。

## 常见问题

### 调色板该有多少种颜色？

大多数情况下，**4-6 种颜色** 是最佳区间。少了感觉受限，多了稀释品牌。典型结构是：1 个主色、1-2 个辅色、1-2 个强调色、1-2 个中性色。大多数品牌体系都落在 4-8 范围内。

### 主导色和强调色有什么区别？

**主导色** 是图片中最常见的像素 —— 大的笔触。**强调色** 是吸引注意的小巧鲜艳爆点。好的调色板两者兼具：主导色用作背景，强调色用作高亮。UtilBoxx 提取主导色；你可以用和谐规则生成器来添加强调色。

### 什么是互补色？

色环上相对的颜色。红的补色是青，蓝的补色是橙，绿的补色是品红。互补对感觉鲜明、高对比。节制使用以吸引眼球。

### 什么是类似色调色板？

色环上相邻的颜色 —— 比如蓝、蓝绿、绿。类似色调色板感觉和谐自然。在风景摄影中最常见，是背景和大面积区域的安全选择。

### 调色板能保存复用吗？

可以。UtilBoxx 可以把调色板保存到浏览器的本地存储中，并复制为 CSS 变量导出。Adobe Color 可以把调色板保存到你账号的库中（如果已登录）。在代码中，你可以把调色板保存为 JSON 文件或 Python 字典，下次再加载。

### 在线调色板生成器安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的图片会被上传到远程服务器。对个人或专有图片，纯浏览器工具是更安全的选择。

## 结论

从图片构建调色板是设计师、开发者和营销人员经常要做的小事，不应该为此订阅 Adobe 服务。对大多数人来说，[UtilBoxx 的免费调色板生成器](/zh/tools/color/palette) 是显而易见的选择：私密、快速、免费、无需注册。

如果你是身处 Adobe 生态的设计师，Adobe Color 是很好的备用。如果你在写脚本或要完全控制，Python + PIL + k-means 无可替代。Mac 用户也可以用 Digital Color Meter 采样颜色、把代码存到 Notes 里。

其他情况下，去看 [UtilBoxx 的颜色工具集](/zh/tools/color)，你会找到一个完整的、隐私优先的颜色处理工具箱 —— 全部在浏览器里完成。`;

const paletteJa = `## なぜ画像からパレットを作るのか？

カラーパレットは、一緒に機能する少数の色（通常 4〜8 色）のセットです。デザイナーやアーティストは絶えずパレットを作ります：ブランドアイデンティティ、ウェブサイト、イラスト、营销キャンペーン、インテリアデザイン。素晴らしいパレットを得る最も速い方法は、すでに「しっくりくる」写真から始めることです —— 夕焼け、花、繊維、絵画 —— 写真家、画家、自然がすでに選んだ色を抽出します。

人が画像からパレットを作る理由は実際的でしかも頻繁です：

- **ブランド一貫性**：ロゴの色はウェブサイトの商品写真と同じパレットから来ており、それがパッケージと同じパレットを反映する。すべて 1 つのソース写真に紐づけられる。
- **デザインインスピレーション**：霧の森林、砂漠の夕日、ブルータリストのコンクリート壁の写真は、無料でパレットを提供してくれる。
- **ムードマッチング**：暖色パレット（赤、オレンジ、琥珀）はエネルギッシュに感じる。寒色パレット（青、緑、紫）は穏やかに感じる。欲しいムードの写真から選ぶのが、ゼロから作るより速い。
- **トレンド把握**：Pantone の「カラー・オブ・ザ・イヤー」を研究したり、ファッションパレットを動かすデザイナーは、作品を写真の証拠に基づかせる。
- **アクセシビリティ**：テキストと背景色の間に十分なコントラストがあるパレットは読みやすい。自然なコントラストが良好な写真から始めて、そのトーンに固執することが役立つ。
- **個人的な好み**：子供の絵、祖母のキッチン、オフィス窓からの景色は、完全に有効なパレットソースです。

良いニュースは、適切なツールを使えば画像からパレットを作る作業は 10 秒で終わり、何もインストールする必要がないことです。

## 方法 1：UtilBoxx の無料パレットジェネレーター（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx のパレットジェネレーター](/ja/tools/color/palette) です。完全にブラウザ内で動作するため、画像がデバイスの外に出ることがありません。アップロードも登録もトラッキングも不要です。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/color/palette](/ja/tools/color/palette) を開く
2. アップロード領域をクリックして画像を選択（またはドラッグ＆ドロップ）
3. ツールが **5〜8 個の支配色** を自動抽出（数は選択可能）
4. パレットを HEX、RGB、HSL コード付きスウォッチとして表示
5. マッチ色を生成するハーモニールールを選択：
   - **補色** — 色環の反対側
   - **類似色** — 隣接する色
   - **トライアド** — 等間隔の 3 色
   - **スプリットコンプリメンタリー** — 柔らかい補色
6. ワンクリックで任意の色をコピー、またはパレット全体を **CSS 変数** または JSON としてエクスポート
7. パレットを後から使うために保存

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべてブラウザ内で完結。画像はサーバーへ送信されません
- **自動抽出**：「一番明るいピクセル」ではなくクラスタリングアルゴリズムで支配色を選択
- **ハーモニールール**：補色、類似、トライアド、スプリットコンプリメンタリー
- **マルチフォーマットエクスポート**：HEX、RGB、HSL、CSS 変数、JSON
- **保存と共有**：パレットを再利用可能
- **あらゆるデバイスで動作**：Windows、Mac、Linux、ChromeOS、iOS、Android

たまにパレットを作る程度なら、これほど低コストな選択肢はありません。

## 方法 2：Adobe Color（Adobe アカウントで無料）

Adobe Color（color.adobe.com）は Adobe の無料ウェブベースカラーツールで、パレット構築のゴールドスタンダードです。「テーマを抽出」タブで画像をアップロードし、5 つの支配色を自動抽出します。「カラーホイール」タブでハーモニールール（類似、モノクロマチック、トライアド、補色、スプリットコンプリメンタリー、スクエア、矩形）を使ってゼロからパレットを組めます。「アクセシビリティツール」タブは WCAG AA/AAA 準拠のコントラスト比をチェックします。

ただし無料の Adobe アカウントが必要で、サイトはいくらかのロギングを行います（パレットをライブラリに保存するにはサインイン必須）。インターフェースもワンショットツールより複雑です。

すでに Adobe エコシステムにいて、Photoshop や Illustrator とパレットを共有したいなら、Adobe Color を使う価値があります。アカウントを作らずに 1 回限りのパレットが必要なら、ブラウザツールで十分です。

## 方法 3：PIL と k-means クラスタリングを使った Python

開発者やデータサイエンティストなら、Python 数行でパレットを自分で作れます。アプローチは：画像を読み込み、高速化のためダウンサンプリングし、ピクセル色で k-means クラスタリングを走らせ、クラスタ中心がパレットになります。

\`\`\`python
# pip install pillow numpy scikit-learn
from PIL import Image
import numpy as np
from sklearn.cluster import KMeans

def extract_palette(image_path, n_colors=5):
    img = Image.open(image_path).convert("RGB")
    # 高速化のためダウンサンプル
    img.thumbnail((200, 200))
    arr = np.array(img).reshape(-1, 3)
    # k-means を実行
    kmeans = KMeans(n_clusters=n_colors, n_init=10, random_state=0)
    kmeans.fit(arr)
    # クラスタサイズでソート（支配色優先）
    counts = np.bincount(kmeans.labels_)
    order = np.argsort(-counts)
    palette = [tuple(kmeans.cluster_centers_[i].astype(int)) for i in order]
    return palette

palette = extract_palette("photo.jpg", n_colors=6)
for color in palette:
    hex_code = "#{:02X}{:02X}{:02X}".format(*color)
    print(f"{hex_code}  rgb{color}")
\`\`\`

たとえば夕焼け写真の出力は次のようになるかもしれません：

\`\`\`
#2A1A0F  rgb(42, 26, 15)
#5C2A18  rgb(92, 42, 24)
#A14A28  rgb(161, 74, 40)
#D87740  rgb(216, 119, 64)
#F2B66B  rgb(242, 182, 107)
#FCE4A6  rgb(252, 228, 166)
\`\`\`

完璧な 6 色暖色パレットです。これらを CSS ファイル、デザインツール、ブランドブックに落とし込めます。k-means アプローチは、ほとんどのパレット抽出器の背後にあるアルゴリズムです。

## よくある質問

### パレットは何色がいいですか？

ほとんどの場合、**4〜6 色** がスイートスポットです。少なすぎると窮屈に、多すぎるとブランドが薄まります。典型的な構成は：プライマリ 1 つ、セカンダリ 1〜2 つ、アクセント 1〜2 つ、ニュートラル 1〜2 つ。ほとんどのブランドシステムは 4〜8 の範囲に収まります。

### 支配色とアクセント色の違いは？

**支配色** は画像中で最も一般的なピクセル —— 大局。**アクセント色** は注意を引く小さく鮮やかな差し色。良いパレットは両方を持ちます：支配色は背景に、アクセントはハイライトに。UtilBoxx は支配色を抽出します；ハーモニールールジェネレーターでアクセントを追加できます。

### 補色とは何ですか？

色環の反対側にある色。赤の補色はシアン、青の補色はオレンジ、緑の補色はマゼンタ。補色のペアは鮮やかで高コントラストに感じます。目を引くために控えめに使います。

### 類似色パレットとは何ですか？

色環上で隣り合う色 —— 例えば青、青緑、緑。類似色パレットは調和して自然に感じます。風景写真で最も一般的で、背景や広い面の安全な選択肢です。

### パレットを保存して再利用できますか？

はい。UtilBoxx はパレットをブラウザのローカルストレージに保存し、CSS 変数としてコピーしてエクスポートできます。Adobe Color はサインインしていればアカウントライブラリに保存できます。コードでは、JSON ファイルや Python 辞書としてパレットを保存し、次回に再読み込みできます。

### オンラインのパレットジェネレーターは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、画像がリモートサーバーにアップロードされると仮定してください。個人または専有画像には、ブラウザのみのツールがより安全な選択です。

## まとめ

画像からパレットを作ることはデザイナー、開発者、マーケターが頻繁に行う小さな作業であり、Adobe サブスクリプションが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料パレットジェネレーター](/ja/tools/color/palette) は明白な選択です：プライベートで、速くて、無料で、登録不要。

既に Adobe エコシステムにいるデザイナーなら、Adobe Color は良いバックアップになります。スクリプトを書く場合や完全な制御が必要な場合は、Python + PIL + k-means が最強です。Mac ユーザーは Digital Color Meter で色をサンプリングし、コードをメモに保存することもできます。

その他は、[UtilBoxx のカラーツール](/ja/tools/color) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先のカラーツールキットが見つかります。`;

const paletteEs = `## ¿Por qué construir una paleta a partir de una imagen?

Una paleta de color es un pequeño conjunto de colores (normalmente 4-8) que funcionan juntos. Diseñadores y artistas construyen paletas constantemente: una identidad de marca, un sitio web, una ilustración, una campaña de marketing, un esquema de diseño interior. La forma más rápida de obtener una gran paleta es empezar desde una foto que ya "se siente bien" — un atardecer, una flor, un textil, una pintura — y extraer los colores que el fotógrafo, pintor o naturaleza ya eligió.

Las razones por las que la gente construye paletas a partir de imágenes son prácticas y frecuentes:

- **Consistencia de marca**: El color de un logo viene de la misma paleta que las fotos de producto del sitio web, que hacen eco de la misma paleta que el packaging. Todo anclado en una foto fuente.
- **Inspiración de diseño**: Una foto de un bosque brumoso, un atardecer en el desierto o una pared de hormigón brutalista te da una paleta gratis.
- **Coincidencia de ánimo**: Las paletas cálidas (rojos, naranjas, ámbar) se sienten enérgicas. Las paletas frías (azules, verdes, púrpuras) se sienten tranquilas. Escoger de una imagen cuyo ánimo quieres es más rápido que construir desde cero.
- **Conciencia de tendencia**: Los diseñadores que estudian el "color del año" de Pantone o manejan una paleta de moda a menudo fundamentan su trabajo en evidencia fotográfica.
- **Accesibilidad**: Una paleta con suficiente contraste entre texto y fondo es legible. Empezar de una foto con buen contraste natural y mantenerse en sus tonos ayuda.
- **Gusto personal**: Una foto del dibujo de tu hijo, la cocina de tu abuela o la vista desde tu oficina es una fuente de paleta perfectamente válida.

La buena noticia: con la herramienta adecuada, construir una paleta a partir de una imagen es un trabajo de 10 segundos y no requiere instalar nada.

## Método 1: Usa el generador de paletas gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de construir una paleta es la [herramienta Generador de Paleta de UtilBoxx](/es/tools/color/palette). Se ejecuta por completo en tu navegador, por lo que tu imagen nunca sale de tu dispositivo. Sin subidas, sin registro y sin rastreo.

Así se usa:

1. Ve a [utilboxx.com/es/tools/color/palette](/es/tools/color/palette)
2. Haz clic en el área de subida y selecciona tu imagen (o arrástrala)
3. La herramienta extrae los **5-8 colores dominantes** automáticamente (puedes elegir la cantidad)
4. Ve la paleta como muestras con códigos HEX, RGB y HSL
5. Elige una regla de armonía para generar colores que combinen:
   - **Complementarios** — lado opuesto de la rueda de color
   - **Análogos** — colores adyacentes
   - **Triádicos** — tres colores equidistantes
   - **Complementarios divididos** — complemento más suave
6. Copia cualquier color con un clic, o exporta toda la paleta como **variables CSS** o JSON
7. Guarda la paleta para después

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. Tu imagen nunca llega a un servidor.
- **Extracción automática**: colores dominantes elegidos por un algoritmo de clustering, no "el píxel más brillante"
- **Reglas de armonía**: complementarios, análogos, triádicos, complementarios divididos
- **Exportación multi-formato**: HEX, RGB, HSL, variables CSS, JSON
- **Guardar y compartir**: mantén paletas para reusar
- **Funciona en cualquier dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android

Si solo necesitas construir paletas de vez en cuando, esta es la opción de menor fricción con diferencia.

## Método 2: Adobe Color (Gratis con cuenta de Adobe)

Adobe Color (color.adobe.com) es la herramienta de color web gratuita de Adobe, y es el estándar de oro para construir paletas. La pestaña "Extraer tema" te permite subir una imagen y saca los 5 colores dominantes automáticamente. La pestaña "Rueda de color" te permite construir una paleta desde cero usando reglas de armonía (análoga, monocromática, tríada, complementaria, complementaria dividida, cuadrada, rectangular). La pestaña "Herramientas de accesibilidad" verifica ratios de contraste para cumplimiento WCAG AA/AAA.

El inconveniente es que necesitas una cuenta gratuita de Adobe para usarlo, y el sitio hace algo de logging (necesitas estar conectado para guardar paletas en tu biblioteca). La interfaz también es más compleja que una herramienta de un solo uso.

Adobe Color merece la pena si ya estás en el ecosistema de Adobe y quieres compartir paletas con Photoshop o Illustrator. Si solo necesitas una paleta puntual sin crear una cuenta, una herramienta de navegador hace el trabajo.

## Método 3: Python con PIL y clustering k-means

Si eres desarrollador o científico de datos, puedes construir una paleta tú mismo con unas pocas líneas de Python. El enfoque: carga la imagen, redúcela para velocidad, ejecuta k-means clustering sobre los colores de los píxeles, y los centros de los clusters son tu paleta.

\`\`\`python
# pip install pillow numpy scikit-learn
from PIL import Image
import numpy as np
from sklearn.cluster import KMeans

def extract_palette(image_path, n_colors=5):
    img = Image.open(image_path).convert("RGB")
    # Reducir para velocidad
    img.thumbnail((200, 200))
    arr = np.array(img).reshape(-1, 3)
    # Ejecutar k-means
    kmeans = KMeans(n_clusters=n_colors, n_init=10, random_state=0)
    kmeans.fit(arr)
    # Ordenar por tamaño del cluster (dominante primero)
    counts = np.bincount(kmeans.labels_)
    order = np.argsort(-counts)
    palette = [tuple(kmeans.cluster_centers_[i].astype(int)) for i in order]
    return palette

palette = extract_palette("photo.jpg", n_colors=6)
for color in palette:
    hex_code = "#{:02X}{:02X}{:02X}".format(*color)
    print(f"{hex_code}  rgb{color}")
\`\`\`

La salida para una foto de atardecer, por ejemplo, podría ser:

\`\`\`
#2A1A0F  rgb(42, 26, 15)
#5C2A18  rgb(92, 42, 24)
#A14A28  rgb(161, 74, 40)
#D87740  rgb(216, 119, 64)
#F2B66B  rgb(242, 182, 107)
#FCE4A6  rgb(252, 228, 166)
\`\`\`

Una paleta cálida perfecta de 6 colores. Puedes luego meterlos en un archivo CSS, una herramienta de diseño o un manual de marca. El enfoque k-means es el algoritmo que impulsa la mayoría de extractores de paleta por debajo.

## Preguntas frecuentes

### ¿Cuántos colores debería tener una paleta?

Para la mayoría de propósitos, **4-6 colores** es el punto dulce. Menos se siente limitante; más diluye la marca. Una estructura típica es: 1 primario, 1-2 secundarios, 1-2 acentos y 1-2 neutros. La mayoría de sistemas de marca caen en el rango de 4-8.

### ¿Cuál es la diferencia entre colores dominantes y de acento?

Los **colores dominantes** son los píxeles más comunes en la imagen — los trazos amplios. Los **colores de acento** son las pequeñas ráfagas vivas que llaman la atención. Una buena paleta tiene ambos: dominantes para fondos, acentos para destacados. UtilBoxx extrae los dominantes; puedes usar el generador de reglas de armonía para añadir acentos.

### ¿Qué es un color complementario?

El color opuesto en la rueda de color. El complementario del rojo es el cian, el del azul es el naranja, el del verde es el magenta. Los pares complementarios se sienten vivos y de alto contraste. Úsalos con moderación para dirigir la mirada.

### ¿Qué es una paleta análoga?

Colores que están uno al lado del otro en la rueda de color — como azul, azul-verde y verde. Las paletas análogas se sienten armoniosas y naturales. Son las más comunes en fotografía de paisaje y son una opción segura para fondos y superficies grandes.

### ¿Puedo guardar y reusar paletas?

Sí. UtilBoxx te permite guardar paletas en el almacenamiento local de tu navegador y copiarlas como variables CSS. Adobe Color guarda paletas en la biblioteca de tu cuenta si estás conectado. En código, puedes guardar la paleta como archivo JSON o diccionario Python y recargarla la próxima vez.

### ¿Es seguro usar un generador de paletas online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador** — sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tu imagen se está subiendo a un servidor remoto. Para imágenes personales o propietarias, una herramienta solo-navegador es la opción más segura.

## Conclusión

Construir una paleta a partir de una imagen es una pequeña tarea que aparece constantemente para diseñadores, desarrolladores y marketers, y no debería requerir una suscripción a Adobe. Para la mayoría de la gente, el [Generador de paletas gratis de UtilBoxx](/es/tools/color/palette) es la opción obvia: es privado, rápido y gratis, sin registro.

Si eres diseñador y ya estás en el ecosistema de Adobe, Adobe Color es un gran respaldo. Si estás programando o quieres control total, Python con PIL y k-means es imbatible. Los usuarios de macOS también pueden construir paletas muestreando colores con Digital Color Meter y guardando los códigos en Notas.

Para todo lo demás, visita las [herramientas de color de UtilBoxx](/es/tools/color) y encontrarás un conjunto completo de herramientas para trabajar con colores, con privacidad como prioridad, todo en tu navegador.`;

const palettePt = `## Por que construir uma paleta a partir de uma imagem?

Uma paleta de cores é um pequeno conjunto de cores (geralmente 4-8) que funcionam juntas. Designers e artistas constroem paletas constantemente: uma identidade de marca, um site, uma ilustração, uma campanha de marketing, um esquema de design de interiores. A maneira mais rápida de obter uma ótima paleta é começar de uma foto que já "parece certa" — um pôr do sol, uma flor, um tecido, uma pintura — e extrair as cores que o fotógrafo, pintor ou natureza já escolheram.

Os motivos pelos quais as pessoas constroem paletas a partir de imagens são práticos e frequentes:

- **Consistência de marca**: A cor de um logo vem da mesma paleta das fotos de produto do site, que ecoa a mesma paleta da embalagem. Tudo ancorado em uma foto fonte.
- **Inspiração de design**: Uma foto de uma floresta enevoada, um pôr do sol no deserto ou uma parede de concreto brutalista te dá uma paleta de graça.
- **Combinação de humor**: Paletas quentes (vermelhos, laranjas, âmbar) parecem enérgicas. Paletas frias (azuis, verdes, roxos) parecem calmas. Escolher de uma imagem cujo humor você quer é mais rápido do que construir do zero.
- **Consciência de tendência**: Designers que estudam a "cor do ano" da Pantone ou conduzem uma paleta de moda frequentemente fundamentam seu trabalho em evidência fotográfica.
- **Acessibilidade**: Uma paleta com contraste suficiente entre texto e fundo é legível. Começar de uma foto com bom contraste natural e se ater aos seus tons ajuda.
- **Gosto pessoal**: Uma foto do desenho do seu filho, da cozinha da sua avó ou da vista da sua janela do escritório é uma fonte de paleta perfeitamente válida.

A boa notícia: com a ferramenta certa, construir uma paleta a partir de uma imagem é um trabalho de 10 segundos e você não precisa instalar nada.

## Método 1: Use o gerador de paletas grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de construir uma paleta é a [ferramenta Gerador de Paleta do UtilBoxx](/pt/tools/color/palette). Ela roda inteiramente no seu navegador, então sua imagem nunca sai do seu dispositivo. Sem upload, sem cadastro e sem rastreamento.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/color/palette](/pt/tools/color/palette)
2. Clique na área de upload e selecione sua imagem (ou arraste e solte)
3. A ferramenta extrai as **5-8 cores dominantes** automaticamente (você pode escolher a quantidade)
4. Veja a paleta como amostras com códigos HEX, RGB e HSL
5. Escolha uma regra de harmonia para gerar cores que combinem:
   - **Complementares** — lado oposto da roda de cores
   - **Análogas** — cores adjacentes
   - **Triádicas** — três cores equidistantes
   - **Complementares divididas** — complemento mais suave
6. Copie qualquer cor com um clique, ou exporte a paleta inteira como **variáveis CSS** ou JSON
7. Salve a paleta para depois

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. Sua imagem nunca chega a um servidor.
- **Extração automática**: cores dominantes escolhidas por um algoritmo de clustering, não "o pixel mais brilhante"
- **Regras de harmonia**: complementares, análogas, triádicas, complementares divididas
- **Exportação multi-formato**: HEX, RGB, HSL, variáveis CSS, JSON
- **Salvar e compartilhar**: mantenha paletas para reuso
- **Funciona em qualquer dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android

Se você só precisa construir paletas de vez em quando, essa é a opção de menor atrito disparado.

## Método 2: Adobe Color (Grátis com conta Adobe)

Adobe Color (color.adobe.com) é a ferramenta de cores web gratuita da Adobe, e é o padrão-ouro para construção de paletas. A aba "Extrair tema" permite que você faça upload de uma imagem e extrai as 5 cores dominantes automaticamente. A aba "Roda de cores" permite construir uma paleta do zero usando regras de harmonia (análoga, monocromática, tríade, complementar, complementar dividida, quadrada, retangular). A aba "Ferramentas de acessibilidade" verifica razões de contraste para conformidade WCAG AA/AAA.

O problema é que você precisa de uma conta Adobe gratuita para usá-lo, e o site faz algum registro (você precisa estar logado para salvar paletas na sua biblioteca). A interface também é mais complexa que uma ferramenta de uso único.

Adobe Color vale a pena se você já está no ecossistema Adobe e quer compartilhar paletas com Photoshop ou Illustrator. Se você só precisa de uma paleta pontual sem criar uma conta, uma ferramenta baseada em navegador faz o trabalho.

## Método 3: Python com PIL e clustering k-means

Se você é desenvolvedor ou cientista de dados, pode construir uma paleta você mesmo com algumas linhas de Python. A abordagem: carregue a imagem, reduza a amostragem para velocidade, execute k-means clustering nas cores dos pixels, e os centros dos clusters são sua paleta.

\`\`\`python
# pip install pillow numpy scikit-learn
from PIL import Image
import numpy as np
from sklearn.cluster import KMeans

def extract_palette(image_path, n_colors=5):
    img = Image.open(image_path).convert("RGB")
    # Reduzir para velocidade
    img.thumbnail((200, 200))
    arr = np.array(img).reshape(-1, 3)
    # Executar k-means
    kmeans = KMeans(n_clusters=n_colors, n_init=10, random_state=0)
    kmeans.fit(arr)
    # Ordenar por tamanho do cluster (dominante primeiro)
    counts = np.bincount(kmeans.labels_)
    order = np.argsort(-counts)
    palette = [tuple(kmeans.cluster_centers_[i].astype(int)) for i in order]
    return palette

palette = extract_palette("photo.jpg", n_colors=6)
for color in palette:
    hex_code = "#{:02X}{:02X}{:02X}".format(*color)
    print(f"{hex_code}  rgb{color}")
\`\`\`

A saída para uma foto de pôr do sol, por exemplo, pode ser:

\`\`\`
#2A1A0F  rgb(42, 26, 15)
#5C2A18  rgb(92, 42, 24)
#A14A28  rgb(161, 74, 40)
#D87740  rgb(216, 119, 64)
#F2B66B  rgb(242, 182, 107)
#FCE4A6  rgb(252, 228, 166)
\`\`\`

Uma paleta quente perfeita de 6 cores. Você pode então colocá-las em um arquivo CSS, ferramenta de design ou manual de marca. A abordagem k-means é o algoritmo que move a maioria dos extratores de paleta por baixo.

## Perguntas frequentes

### Quantas cores uma paleta deve ter?

Para a maioria dos propósitos, **4-6 cores** é o ponto ideal. Menos parece limitante; mais dilui a marca. Uma estrutura típica é: 1 primária, 1-2 secundárias, 1-2 acentos e 1-2 neutras. A maioria dos sistemas de marca fica na faixa de 4-8.

### Qual a diferença entre cores dominantes e de acento?

As **cores dominantes** são os pixels mais comuns na imagem — os traços amplos. As **cores de acento** são as pequenas explosões vívidas que chamam atenção. Uma boa paleta tem ambos: dominantes para fundos, acentos para destaques. UtilBoxx extrai as dominantes; você pode usar o gerador de regras de harmonia para adicionar acentos.

### O que é uma cor complementar?

A cor oposta na roda de cores. O complementar do vermelho é ciano, do azul é laranja, do verde é magenta. Pares complementares parecem vívidos e de alto contraste. Use-os com moderação para chamar o olhar.

### O que é uma paleta análoga?

Cores que ficam uma do lado da outra na roda de cores — como azul, azul-verde e verde. Paletas análogas parecem harmoniosas e naturais. São as mais comuns em fotografia de paisagem e são uma escolha segura para fundos e superfícies grandes.

### Posso salvar e reusar paletas?

Sim. UtilBoxx permite que você salve paletas no armazenamento local do seu navegador e as copie como variáveis CSS. Adobe Color salva paletas na biblioteca da sua conta se você estiver logado. Em código, você pode salvar a paleta como arquivo JSON ou dicionário Python e recarregá-la da próxima vez.

### É seguro usar um gerador de paletas online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que sua imagem está sendo enviada para um servidor remoto. Para imagens pessoais ou proprietárias, uma ferramenta só-navegador é a escolha mais segura.

## Conclusão

Construir uma paleta a partir de uma imagem é uma pequena tarefa que surge constantemente para designers, desenvolvedores e profissionais de marketing, e não deveria exigir uma assinatura Adobe. Para a maioria das pessoas, o [Gerador de paletas grátis do UtilBoxx](/pt/tools/color/palette) é a escolha óbvia: é privado, rápido e grátis, sem cadastro.

Se você é designer e já está no ecossistema Adobe, o Adobe Color é um ótimo backup. Se você está programando ou quer controle total, Python com PIL e k-means é imbatível. Usuários de macOS também podem construir paletas amostrando cores com o Digital Color Meter e salvando os códigos no Notas.

Para todo o resto, visite as [ferramentas de cor do UtilBoxx](/pt/tools/color) e você encontrará um conjunto completo de ferramentas para trabalhar com cores, com privacidade como prioridade, tudo no seu navegador.`;

const paletteFr = `## Pourquoi construire une palette à partir d'une image ?

Une palette de couleurs est un petit ensemble de couleurs (généralement 4-8) qui fonctionnent ensemble. Designers et artistes construisent des palettes constamment : identité de marque, site web, illustration, campagne marketing, schéma de design d'intérieur. Le moyen le plus rapide d'obtenir une superbe palette est de partir d'une photo qui « sonne déjà juste » — un coucher de soleil, une fleur, un textile, une peinture — et d'extraire les couleurs que le photographe, le peintre ou la nature a déjà choisies.

Les raisons pour lesquelles les gens construisent des palettes à partir d'images sont pratiques et fréquentes :

- **Cohérence de marque** : La couleur d'un logo vient de la même palette que les photos produit du site, qui fait écho à la même palette que le packaging. Tout ancré dans une photo source.
- **Inspiration de design** : Une photo de forêt brumeuse, de coucher de soleil désertique ou de mur en béton brutaliste vous offre une palette gratuite.
- **Correspondance d'ambiance** : Les palettes chaudes (rouges, oranges, ambre) semblent énergiques. Les palettes froides (bleus, verts, violets) semblent calmes. Choisir dans une image dont vous voulez l'ambiance est plus rapide que de partir de zéro.
- **Conscience des tendances** : Les designers qui étudient la « couleur de l'année » de Pantone ou animent une palette mode fondent souvent leur travail sur des preuves photographiques.
- **Accessibilité** : Une palette avec suffisamment de contraste entre texte et fond est lisible. Partir d'une photo avec un bon contraste naturel et s'en tenir à ses tonalités aide.
- **Goût personnel** : Une photo du dessin de votre enfant, de la cuisine de votre grand-mère ou de la vue depuis votre bureau est une source de palette parfaitement valable.

Bonne nouvelle : avec le bon outil, construire une palette à partir d'une image est un travail de 10 secondes et vous n'avez rien à installer.

## Méthode 1 : Utiliser le générateur de palettes gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de construire une palette est l'[outil Générateur de Palette de UtilBoxx](/fr/tools/color/palette). Il s'exécute entièrement dans votre navigateur, donc votre image ne quitte jamais votre appareil. Pas de téléversement, pas d'inscription, pas de tracking.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/color/palette](/fr/tools/color/palette)
2. Cliquez sur la zone de téléversement et sélectionnez votre image (ou glissez-déposez)
3. L'outil extrait automatiquement les **5-8 couleurs dominantes** (vous pouvez choisir le nombre)
4. Voyez la palette sous forme de pastilles avec les codes HEX, RVB et TSL
5. Choisissez une règle d'harmonie pour générer des couleurs assorties :
   - **Complémentaires** — côté opposé de la roue chromatique
   - **Analogues** — couleurs adjacentes
   - **Triadiques** — trois couleurs équidistantes
   - **Complémentaires divisées** — complément plus doux
6. Copiez n'importe quelle couleur en un clic, ou exportez toute la palette en **variables CSS** ou JSON
7. Enregistrez la palette pour plus tard

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Votre image n'arrive jamais sur un serveur.
- **Extraction automatique** : couleurs dominantes choisies par un algorithme de clustering, pas « le pixel le plus brillant »
- **Règles d'harmonie** : complémentaires, analogues, triadiques, complémentaires divisées
- **Export multi-format** : HEX, RVB, TSL, variables CSS, JSON
- **Sauvegarder et partager** : gardez les palettes pour les réutiliser
- **Fonctionne sur tout appareil** : Windows, Mac, Linux, ChromeOS, iOS, Android

Si vous n'avez besoin de construire des palettes qu'occasionnellement, c'est de loin l'option la plus simple.

## Méthode 2 : Adobe Color (Gratuit avec compte Adobe)

Adobe Color (color.adobe.com) est l'outil couleur web gratuit d'Adobe, et c'est la référence en matière de construction de palettes. L'onglet « Extraire un thème » vous permet de téléverser une image et en tire automatiquement les 5 couleurs dominantes. L'onglet « Roue chromatique » vous permet de construire une palette à partir de zéro en utilisant des règles d'harmonie (analogue, monochromatique, triade, complémentaire, complémentaire divisée, carrée, rectangulaire). L'onglet « Outils d'accessibilité » vérifie les ratios de contraste pour la conformité WCAG AA/AAA.

Le hic, c'est qu'il faut un compte Adobe gratuit pour l'utiliser, et le site fait un peu de logging (il faut être connecté pour enregistrer les palettes dans votre bibliothèque). L'interface est aussi plus complexe qu'un outil one-shot.

Adobe Color vaut le coup si vous êtes déjà dans l'écosystème Adobe et voulez partager des palettes avec Photoshop ou Illustrator. Si vous n'avez besoin que d'une palette ponctuelle sans créer de compte, un outil en navigateur fait le travail.

## Méthode 3 : Python avec PIL et clustering k-means

Si vous êtes développeur ou data scientist, vous pouvez construire une palette vous-même en quelques lignes de Python. L'approche : chargez l'image, sous-échantillonnez pour la vitesse, lancez k-means clustering sur les couleurs des pixels, et les centres des clusters sont votre palette.

\`\`\`python
# pip install pillow numpy scikit-learn
from PIL import Image
import numpy as np
from sklearn.cluster import KMeans

def extract_palette(image_path, n_colors=5):
    img = Image.open(image_path).convert("RGB")
    # Sous-échantillonner pour la vitesse
    img.thumbnail((200, 200))
    arr = np.array(img).reshape(-1, 3)
    # Lancer k-means
    kmeans = KMeans(n_clusters=n_colors, n_init=10, random_state=0)
    kmeans.fit(arr)
    # Trier par taille de cluster (dominante d'abord)
    counts = np.bincount(kmeans.labels_)
    order = np.argsort(-counts)
    palette = [tuple(kmeans.cluster_centers_[i].astype(int)) for i in order]
    return palette

palette = extract_palette("photo.jpg", n_colors=6)
for color in palette:
    hex_code = "#{:02X}{:02X}{:02X}".format(*color)
    print(f"{hex_code}  rgb{color}")
\`\`\`

La sortie pour une photo de coucher de soleil, par exemple, pourrait être :

\`\`\`
#2A1A0F  rgb(42, 26, 15)
#5C2A18  rgb(92, 42, 24)
#A14A28  rgb(161, 74, 40)
#D87740  rgb(216, 119, 64)
#F2B66B  rgb(242, 182, 107)
#FCE4A6  rgb(252, 228, 166)
\`\`\`

Une palette chaude parfaite de 6 couleurs. Vous pouvez ensuite les déposer dans un fichier CSS, un outil de design ou un brand book. L'approche k-means est l'algorithme qui fait tourner la plupart des extracteurs de palette sous le capot.

## Questions fréquentes

### Combien de couleurs une palette devrait-elle contenir ?

Pour la plupart des usages, **4-6 couleurs** est le sweet spot. Moins paraît limitant ; plus dilue la marque. Une structure typique est : 1 primaire, 1-2 secondaires, 1-2 accents et 1-2 neutres. La plupart des systèmes de marque se situent dans la fourchette 4-8.

### Quelle est la différence entre couleurs dominantes et d'accent ?

Les **couleurs dominantes** sont les pixels les plus présents dans l'image — les grandes touches. Les **couleurs d'accent** sont les petits éclats vifs qui attirent l'œil. Une bonne palette a les deux : dominantes pour les fonds, accents pour les points saillants. UtilBoxx extrait les dominantes ; vous pouvez utiliser le générateur de règles d'harmonie pour ajouter des accents.

### Qu'est-ce qu'une couleur complémentaire ?

La couleur opposée sur la roue chromatique. Le complémentaire du rouge est le cyan, celui du bleu est l'orange, celui du vert est le magenta. Les paires complémentaires sont vives et à fort contraste. Utilisez-les avec parcimonie pour attirer le regard.

### Qu'est-ce qu'une palette analogue ?

Des couleurs qui se touchent sur la roue chromatique — comme bleu, bleu-vert et vert. Les palettes analogues paraissent harmonieuses et naturelles. Ce sont les plus courantes en photographie de paysage et c'est un choix sûr pour les fonds et les grandes surfaces.

### Puis-je enregistrer et réutiliser des palettes ?

Oui. UtilBoxx vous permet d'enregistrer des palettes dans le stockage local de votre navigateur et de les copier en variables CSS. Adobe Color enregistre les palettes dans la bibliothèque de votre compte si vous êtes connecté. En code, vous pouvez enregistrer la palette comme fichier JSON ou dict Python et la recharger la prochaine fois.

### Est-il sûr d'utiliser un générateur de palettes en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que votre image est téléversée sur un serveur distant. Pour les images personnelles ou propriétaires, un outil navigateur seul est le choix le plus sûr.

## Conclusion

Construire une palette à partir d'une image est une petite tâche qui revient constamment pour les designers, développeurs et marketers, et ne devrait pas exiger un abonnement Adobe. Pour la plupart des gens, le [Générateur de palettes gratuit de UtilBoxx](/fr/tools/color/palette) est le choix évident : privé, rapide, gratuit, sans inscription.

Si vous êtes designer et êtes déjà dans l'écosystème Adobe, Adobe Color est une excellente roue de secours. Si vous scriptz ou voulez le contrôle total, Python avec PIL et k-means est imbattable. Les utilisateurs de macOS peuvent aussi construire des palettes en échantillonnant des couleurs avec Digital Color Meter et en sauvegardant les codes dans Notes.

Pour tout le reste, rendez-vous sur les [outils couleur de UtilBoxx](/fr/tools/color) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const paletteDe = `## Warum eine Palette aus einem Bild erstellen?

Eine Farbpalette ist ein kleiner Satz von Farben (normalerweise 4-8), die zusammen funktionieren. Designer und Künstler erstellen ständig Paletten: eine Markenidentität, eine Website, eine Illustration, eine Marketingkampagne, ein Interior-Design-Konzept. Der schnellste Weg zu einer großartigen Palette ist, mit einem Foto zu beginnen, das bereits „richtig wirkt" — ein Sonnenuntergang, eine Blume, ein Textil, ein Gemälde — und die Farben zu extrahieren, die der Fotograf, Maler oder die Natur bereits gewählt hat.

Die Gründe, warum Menschen Paletten aus Bildern erstellen, sind praktisch und häufig:

- **Markenkonsistenz**: Die Farbe eines Logos kommt aus derselben Palette wie die Produktfotos auf der Website, die dieselbe Palette widerspiegelt wie die Verpackung. Alles verankert in einem Quellfoto.
- **Design-Inspiration**: Ein Foto von nebeligem Wald, Wüsten-Sonnenuntergang oder brutalistischer Betonwand liefert dir kostenlos eine Palette.
- **Stimmungs-Matching**: Warme Paletten (Rot, Orange, Bernstein) wirken energiegeladen. Kühle Paletten (Blau, Grün, Violett) wirken ruhig. Aus einem Bild mit der gewünschten Stimmung auszuwählen ist schneller als von null zu beginnen.
- **Trendbewusstsein**: Designer, die die „Farbe des Jahres" von Pantone studieren oder eine Mode-Palette führen, gründen ihre Arbeit oft auf Foto-Beweisen.
- **Barrierefreiheit**: Eine Palette mit ausreichend Kontrast zwischen Text und Hintergrund ist lesbar. Mit einem Foto mit gutem natürlichen Kontrast zu beginnen und dessen Tönen treu zu bleiben hilft.
- **Persönlicher Geschmack**: Ein Foto von der Zeichnung deines Kindes, der Küche deiner Großmutter oder dem Blick aus deinem Bürofenster ist eine völlig valide Palettenquelle.

Die gute Nachricht: Mit dem richtigen Werkzeug ist das Erstellen einer Palette aus einem Bild eine 10-Sekunden-Aufgabe, und du musst nichts installieren.

## Methode 1: Den kostenlosen Palettengenerator von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode, eine Palette zu erstellen, ist das [Palettengenerator-Werkzeug von UtilBoxx](/de/tools/color/palette). Es läuft vollständig in deinem Browser, sodass dein Bild dein Gerät nie verlässt. Kein Upload, keine Registrierung, kein Tracking.

So verwendest du es:

1. Gehe zu [utilboxx.com/de/tools/color/palette](/de/tools/color/palette)
2. Klicke auf den Upload-Bereich und wähle dein Bild (oder ziehe es per Drag & Drop)
3. Das Werkzeug extrahiert automatisch die **5-8 dominanten Farben** (Anzahl wählbar)
4. Sieh die Palette als Schalter mit HEX-, RGB- und HSL-Codes
5. Wähle eine Harmonie-Regel, um passende Farben zu generieren:
   - **Komplementär** — gegenüberliegende Seite des Farbkreises
   - **Analog** — benachbarte Farben
   - **Triadisch** — drei gleichabständige Farben
   - **Geteilt komplementär** — weichere Ergänzung
6. Kopiere jede Farbe mit einem Klick oder exportiere die gesamte Palette als **CSS-Variablen** oder JSON
7. Speichere die Palette für später

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in deinem Browser verarbeitet. Dein Bild erreicht nie einen Server.
- **Automatische Extraktion**: dominante Farben durch einen Clustering-Algorithmus gewählt, nicht „das hellste Pixel"
- **Harmonie-Regeln**: komplementär, analog, triadisch, geteilt komplementär
- **Multi-Format-Export**: HEX, RGB, HSL, CSS-Variablen, JSON
- **Speichern und teilen**: Paletten zur Wiederverwendung aufbewahren
- **Funktioniert auf jedem Gerät**: Windows, Mac, Linux, ChromeOS, iOS, Android

Wenn du nur gelegentlich Paletten erstellst, ist dies die reibungsloseste Option.

## Methode 2: Adobe Color (Kostenlos mit Adobe-Konto)

Adobe Color (color.adobe.com) ist Adobes kostenloses webbasiertes Farbwerkzeug und der Goldstandard für die Palettenerstellung. Der Tab „Thema extrahieren" erlaubt dir, ein Bild hochzuladen und zieht die 5 dominanten Farben automatisch heraus. Der Tab „Farbrad" erlaubt dir, eine Palette von Grund auf mit Harmonie-Regeln zu erstellen (analog, monochrom, Triade, komplementär, geteilt komplementär, quadratisch, rechteckig). Der Tab „Barrierefreiheits-Tools" prüft Kontrastverhältnisse für WCAG AA/AAA-Konformität.

Der Haken ist, dass du ein kostenloses Adobe-Konto brauchst, und die Seite macht etwas Logging (du musst angemeldet sein, um Paletten in deiner Bibliothek zu speichern). Die Oberfläche ist außerdem komplexer als ein Einmal-Werkzeug.

Adobe Color lohnt sich, wenn du bereits im Adobe-Ökosystem bist und Paletten mit Photoshop oder Illustrator teilen willst. Wenn du nur eine Ad-hoc-Palette brauchst, ohne ein Konto anzulegen, erledigt ein Browser-Werkzeug die Arbeit.

## Methode 3: Python mit PIL und k-means-Clustering

Wenn du Entwickler oder Data Scientist bist, kannst du mit wenigen Python-Zeilen selbst eine Palette erstellen. Der Ansatz: lade das Bild, downsample für Geschwindigkeit, lasse k-means-Clustering auf den Pixelfarben laufen, und die Cluster-Zentren sind deine Palette.

\`\`\`python
# pip install pillow numpy scikit-learn
from PIL import Image
import numpy as np
from sklearn.cluster import KMeans

def extract_palette(image_path, n_colors=5):
    img = Image.open(image_path).convert("RGB")
    # Für Geschwindigkeit downsample
    img.thumbnail((200, 200))
    arr = np.array(img).reshape(-1, 3)
    # k-means laufen lassen
    kmeans = KMeans(n_clusters=n_colors, n_init=10, random_state=0)
    kmeans.fit(arr)
    # Nach Cluster-Größe sortieren (dominant zuerst)
    counts = np.bincount(kmeans.labels_)
    order = np.argsort(-counts)
    palette = [tuple(kmeans.cluster_centers_[i].astype(int)) for i in order]
    return palette

palette = extract_palette("photo.jpg", n_colors=6)
for color in palette:
    hex_code = "#{:02X}{:02X}{:02X}".format(*color)
    print(f"{hex_code}  rgb{color}")
\`\`\`

Die Ausgabe für ein Sonnenuntergangsfoto könnte zum Beispiel sein:

\`\`\`
#2A1A0F  rgb(42, 26, 15)
#5C2A18  rgb(92, 42, 24)
#A14A28  rgb(161, 74, 40)
#D87740  rgb(216, 119, 64)
#F2B66B  rgb(242, 182, 107)
#FCE4A6  rgb(252, 228, 166)
\`\`\`

Eine perfekte 6-Farben-Warmpalette. Du kannst sie dann in eine CSS-Datei, ein Designwerkzeug oder ein Markenbuch packen. Der k-means-Ansatz ist der Algorithmus, der die meisten Paletten-Extraktoren unter der Haube antreibt.

## Häufige Fragen

### Wie viele Farben sollte eine Palette haben?

Für die meisten Zwecke sind **4-6 Farben** der Sweet Spot. Weniger wirkt einschränkend; mehr verwässert die Marke. Eine typische Struktur ist: 1 Primär, 1-2 Sekundär, 1-2 Akzent und 1-2 Neutral. Die meisten Markensysteme liegen im Bereich 4-8.

### Was ist der Unterschied zwischen dominanten und Akzent-Farben?

**Dominante Farben** sind die häufigsten Pixel im Bild — die großen Striche. **Akzent-Farben** sind die kleinen, lebhaften Ausbrüche, die die Aufmerksamkeit auf sich ziehen. Eine gute Palette hat beides: dominante für Hintergründe, Akzente für Highlights. UtilBoxx extrahiert die Dominanten; du kannst mit dem Harmonie-Regel-Generator Akzente hinzufügen.

### Was ist eine Komplementärfarbe?

Die gegenüberliegende Farbe auf dem Farbkreis. Das Komplement von Rot ist Cyan, das von Blau ist Orange, das von Grün ist Magenta. Komplementärpaare wirken lebhaft und kontrastreich. Setze sie sparsam ein, um den Blick zu lenken.

### Was ist eine analoge Palette?

Farben, die auf dem Farbkreis nebeneinander liegen — wie Blau, Blau-Grün und Grün. Analoge Paletten wirken harmonisch und natürlich. Sie sind in der Landschaftsfotografie am häufigsten und eine sichere Wahl für Hintergründe und große Flächen.

### Kann ich Paletten speichern und wiederverwenden?

Ja. UtilBoxx erlaubt dir, Paletten im lokalen Speicher deines Browsers zu speichern und sie als CSS-Variablen zu kopieren. Adobe Color speichert Paletten in der Bibliothek deines Kontos, falls du angemeldet bist. Im Code kannst du die Palette als JSON-Datei oder Python-Dict speichern und beim nächsten Mal wieder laden.

### Ist die Nutzung eines Online-Paletten-Generators sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in deinem Browser** — kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen solltest du davon ausgehen, dass dein Bild auf einen entfernten Server hochgeladen wird. Für persönliche oder proprietäre Bilder ist ein reines Browser-Werkzeug die sicherere Wahl.

## Fazit

Eine Palette aus einem Bild zu erstellen ist eine kleine Aufgabe, die für Designer, Entwickler und Marketer ständig anfällt, und keine Adobe-Subskription erfordern sollte. Für die meisten Menschen ist der [kostenlose Palettengenerator von UtilBoxx](/de/tools/color/palette) die offensichtliche Wahl: privat, schnell, kostenlos, ohne Registrierung.

Wenn du Designer bist und bereits im Adobe-Ökosystem bist, ist Adobe Color ein großartiges Backup. Wenn du skriptest oder volle Kontrolle willst, ist Python mit PIL und k-means unschlagbar. macOS-Nutzer können auch Paletten erstellen, indem sie Farben mit Digital Color Meter abtasten und die Codes in Notizen speichern.

Für alles andere besuche die [Farb-Werkzeuge von UtilBoxx](/de/tools/color): Dort findest du einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit Farben — alles im Browser.`;

export const palettePost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-build-color-palette",
    category: "Color Tools",
    date: "2026-03-10",
    readTime: "5 min",
    title: "How to Build a Color Palette from an Image",
    description: "Generate harmonious color palettes from any image. Export HEX, RGB, HSL, or CSS variables.",
    content: paletteEn,
  },
  zh: {
    slug: "how-to-build-color-palette",
    category: "颜色工具",
    date: "2026-03-10",
    readTime: "5 分钟",
    title: "如何从图片构建调色板",
    description: "从任意图片生成和谐的调色板。导出 HEX、RGB、HSL 或 CSS 变量。",
    content: paletteZh,
  },
  ja: {
    slug: "how-to-build-color-palette",
    category: "カラーツール",
    date: "2026-03-10",
    readTime: "5 分",
    title: "画像からカラーパレットを作る方法",
    description: "任意のイメージから調和のとれたカラーパレットを生成。HEX、RGB、HSL、CSS 変数をエクスポート。",
    content: paletteJa,
  },
  es: {
    slug: "how-to-build-color-palette",
    category: "Herramientas de color",
    date: "2026-03-10",
    readTime: "5 min",
    title: "Cómo construir una paleta de colores a partir de una imagen",
    description: "Genera paletas de colores armoniosas a partir de cualquier imagen. Exporta HEX, RGB, HSL o variables CSS.",
    content: paletteEs,
  },
  pt: {
    slug: "how-to-build-color-palette",
    category: "Ferramentas de cor",
    date: "2026-03-10",
    readTime: "5 min",
    title: "Como construir uma paleta de cores a partir de uma imagem",
    description: "Gere paletas de cores harmoniosas a partir de qualquer imagem. Exporte HEX, RGB, HSL ou variáveis CSS.",
    content: palettePt,
  },
  fr: {
    slug: "how-to-build-color-palette",
    category: "Outils de couleur",
    date: "2026-03-10",
    readTime: "5 min",
    title: "Comment construire une palette de couleurs à partir d'une image",
    description: "Générez des palettes de couleurs harmonieuses à partir de n'importe quelle image. Exportez HEX, RVB, TSL ou variables CSS.",
    content: paletteFr,
  },
  de: {
    slug: "how-to-build-color-palette",
    category: "Farb-Tools",
    date: "2026-03-10",
    readTime: "5 Min",
    title: "Farbpalette aus einem Bild erstellen",
    description: "Erzeuge harmonische Farbpaletten aus jedem Bild. Exportiere HEX, RGB, HSL oder CSS-Variablen.",
    content: paletteDe,
  },
};
