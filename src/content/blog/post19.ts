// Blog post: How to Pick a Color from an Image
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const pickerEn = `## What is an eyedropper tool?

An eyedropper is a tool that samples the exact color of any pixel in an image. Click on a pixel, and the tool gives you back the color's numeric value — usually as HEX, RGB, or HSL. Designers and developers use it constantly: "I love that blue in the photo, what is it?" becomes a 2-second task with an eyedropper.

The reasons people pick colors from images are practical and frequent:

- **Match a brand to a photo**: You have a product photo, and you want the website's accent color to echo the product. The eyedropper finds the exact shade.
- **Replicate a design**: You see a website or poster you love, and you want the same blue in your own project. Eyedropper a screenshot and you have the hex code.
- **Build a palette**: A photo has 5-6 dominant colors that look great together. The eyedropper extracts them as a starting point.
- **Touch up paint or fabric**: Take a photo of a wall, eyedrop the color, and take it to a paint store to match the swatch.
- **Color-correct precisely**: Need to match a logo's blue across two images? Eyedrop both, compare the codes, adjust.
- **Curiosity**: "Is that black actually black, or is it dark blue?" An eyedropper answers in a click.

The good news: with the right tool, picking a color from an image is a 10-second job, and you do not need to install anything.

## Method 1: Use UtilBoxx's Free Color Picker (Recommended)

The fastest, safest, and most private way to pick colors from an image is [UtilBoxx's Color Picker tool](/en/tools/color/picker). It runs entirely in your browser, so your image never leaves your device. There is no upload, no signup, and no tracking.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/color/picker](/en/tools/color/picker)
2. Click the upload area and select your image (or drag and drop)
3. Hover over the image — the live color preview shows the hex code under your cursor
4. Click anywhere on the image to "lock" that color
5. Read the color in **HEX**, **RGB**, and **HSL** simultaneously
6. Click any output to copy it to your clipboard
7. Optional: zoom in for pixel-perfect sampling

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. Your image never reaches a server.
- **Live preview**: see the color under your cursor before you click
- **All three formats**: HEX, RGB, HSL shown together
- **One-click copy**: copy any format to the clipboard
- **Zoom support**: get pixel-precise samples from small or detailed images
- **Works on any device**: Windows, Mac, Linux, ChromeOS, iOS, Android

If you only need to pick colors occasionally, this is by far the lowest-friction option.

## Method 2: Adobe Photoshop (Paid)

Photoshop is the heavyweight of image editing, and its Eyedropper Tool (keyboard shortcut **I**) is the gold standard for color sampling. Click anywhere in an open image, and the foreground color swatch updates to the sampled value. The Info panel (Window > Info) shows the exact pixel coordinates and the color in CMYK, RGB, HSB, Lab, and Web (hex) — all at once. You can also set the sample size to "3x3 Average" or "5x5 Average" to sample a small region instead of a single pixel, which is useful for noisy or anti-aliased images.

The catch is the price. Photoshop is part of a Creative Cloud subscription that costs roughly **$22.99 per month** (about $240 per year). For a one-off color pick, it is overkill, and the panel of options is more than most people need.

Photoshop is worth it only if you already use it for retouching, compositing, or design work. If color picking is all you need, a browser tool does the job without the bill or the install.

## Method 3: macOS Digital Color Meter (Built-in, free)

If you are on a Mac, you already have a powerful eyedropper installed: **Digital Color Meter**. It lives in **Applications > Utilities**. Open it, choose your display, hover the magnifier over any pixel on the screen (not just in an image — anywhere), and it shows the color in RGB, hex, or percentage. You can also lock the view to a small window that always sits on top, which is perfect for cross-referencing colors in different apps.

To use it for an image:

1. Open the image in Preview, Quick Look, or any viewer
2. Open Digital Color Meter (Cmd+Space, type "Digital Color Meter")
3. Click the image — the color appears in the meter
4. Choose **Color > Copy as Text** (or press Cmd+Shift+C) to get the hex code on your clipboard
5. Paste anywhere

This is the most underrated tool on macOS. It is built in, free, and works on any pixel on the screen — not just inside an app. On Windows, **Microsoft PowerToys** has a similar "Color Picker" utility that does the same job (press Win+Shift+C to activate).

## Common questions

### Can I sample colors from a website?

Yes. In Chrome, Firefox, or Edge, open DevTools (F12 or Cmd+Opt+I), click the "Inspect" tool (top-left icon), then click on the page. The Styles panel shows the colors used on that element, and you can click the color swatch to see hex, RGB, HSL, and even modify the color live. On macOS, Digital Color Meter can sample any pixel on the screen, including ones in a browser.

### What is the difference between HEX, RGB, and HSL?

- **HEX** is a six-character code like \`#FF5733\`, the standard for CSS
- **RGB** is three numbers 0-255, like \`rgb(255, 87, 51)\`, the raw screen values
- **HSL** is hue/saturation/lightness, more intuitive for adjusting colors

All three describe the same color. UtilBoxx shows all three side by side so you can copy whichever format your project needs.

### How do I pick a color from a small or detailed image?

Zoom in. UtilBoxx supports zooming in on the image so you can position the cursor on the exact pixel you want. In Photoshop, the eyedropper has a "Sample Size" dropdown that lets you average over 3x3 or 5x5 pixels, which is a great fallback for noisy images.

### How do I match a color I see in real life?

Use your phone's camera, eyedrop the photo you took, and use the sampled color. For more accuracy, photograph the object in good daylight (no flash), eyedrop a flat area, and double-check the result against the object itself.

### Can I pick a color from a PDF or video?

Yes — take a screenshot (Cmd+Shift+4 on Mac, Win+Shift+S on Windows), then eyedrop the screenshot. For video, pause on a frame, screenshot, eyedrop. UtilBoxx accepts JPG, PNG, and WebP, so any screenshot in those formats works.

### Is it safe to use an online color picker?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your image is being uploaded to a remote server and read their privacy policy carefully. For personal or proprietary images, a browser-only tool is the safer choice.

## Conclusion

An eyedropper is one of the most useful little tools in any designer's or developer's kit, and it should not require a paid subscription. For most people, [UtilBoxx's free Color Picker](/en/tools/color/picker) is the obvious choice: it is private, fast, and free, with no signup.

If you are a designer who already lives in Photoshop, the Eyedropper Tool is a great backup. If you are on a Mac, Digital Color Meter is an excellent always-available option. And GIMP, the free Photoshop alternative, has the same eyedropper at zero cost.

For everything else, head to [UtilBoxx Color tools](/en/tools/color) and you will find a complete, privacy-first toolkit for working with colors — all in your browser.`;

const pickerZh = `## 什么是吸管工具？

吸管工具是采样图片中任意像素精确颜色的工具。点一下像素，工具就会返回该颜色的数值 —— 通常是 HEX、RGB 或 HSL 格式。设计师和开发者经常用到它："我喜欢照片里那个蓝，是什么蓝？"用吸管 2 秒就能搞定。

人们需要从图片中取色的原因既实际又频繁：

- **让品牌与照片呼应**：你有一张产品照片，希望网站的强调色和产品呼应。吸管能找出那个精确色调。
- **复制设计**：你看到喜欢的网站或海报，想在自己的项目里用同样的蓝。给截图吸个色就有 hex 代码了。
- **建立调色板**：一张照片里有 5-6 个看起来很搭的主导色。吸管把它们提取出来作为起点。
- **调配油漆或面料**：拍一张墙的照片，吸一下色，带去油漆店配出对应色卡。
- **精确校色**：需要让 Logo 的蓝色在两张图里保持一致？两边都吸一下，对比代码，调整。
- **好奇心**："那块黑真的是黑吗，还是深蓝？"吸一下，一键揭晓。

好消息是：只要用对工具，从图片中取色只需 10 秒，而且不需要装任何东西。

## 方法一：使用 UtilBoxx 免费取色器（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的取色器工具](/zh/tools/color/picker)。它完全在你的浏览器中运行，图片不会离开你的设备。没有上传、没有注册、没有追踪。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/color/picker](/zh/tools/color/picker)
2. 点击上传区域选择你的图片（或直接拖入）
3. 鼠标悬停在图片上 —— 实时颜色预览显示光标下的 hex 代码
4. 在图片任意位置点击即可"锁定"该颜色
5. 同时读取 **HEX**、**RGB** 和 **HSL** 格式
6. 点击任意输出即可复制到剪贴板
7. 可选：放大图片以实现像素级精确采样

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，图片不会上传到任何服务器
- **实时预览**：点击前就能看到光标下的颜色
- **三种格式同显**：HEX、RGB、HSL 并排展示
- **一键复制**：任意格式一键复制到剪贴板
- **支持缩放**：从小图或细节图上做像素级精确采样
- **全设备支持**：Windows、Mac、Linux、ChromeOS、iOS、Android

如果你只是偶尔取色，这是最省心的选择。

## 方法二：Adobe Photoshop（付费）

Photoshop 是图像编辑领域的重量级选手，它的吸管工具（快捷键 **I**）是颜色采样的黄金标准。在打开的图片上点一下，前景色块就更新为采样值。信息面板（窗口 > 信息）会同时显示精确像素坐标以及 CMYK、RGB、HSB、Lab 和 Web（hex）格式的颜色。你还可以把样本大小设为"3x3 平均"或"5x5 平均"来采样一小块区域而不是单个像素，这对噪点或抗锯齿图片非常有用。

代价是价格。Photoshop 是 Creative Cloud 订阅的一部分，每月约 **$22.99**（每年约 $240 美元）。如果只是偶尔吸一下色，杀鸡用牛刀，选项面板对大多数人来说也太多了。

只有当你已经用它做修图、合成或设计时，Photoshop 才值得。如果取色就是你的全部需求，浏览器工具就够用，还免了账单和安装。

## 方法三：macOS Digital Color Meter（内置、免费）

如果你用 Mac，你已经有了一个强大的吸管：**Digital Color Meter**。它在 **应用程序 > 实用工具** 里。打开它，选好显示器，把放大镜悬停在屏幕上任意像素上（不限于图片里 —— 任何地方都行），它就会以 RGB、hex 或百分比显示该颜色。你还可以把视图锁定在总是置顶的小窗口上，这对跨应用对比颜色非常方便。

给图片取色的话：

1. 用 Preview、Quick Look 或任何看图工具打开图片
2. 打开 Digital Color Meter（Cmd+Space，输入"Digital Color Meter"）
3. 点击图片 —— 颜色就出现在取色器里
4. 选择 **颜色 > 复制为文本**（或按 Cmd+Shift+C）把 hex 代码复制到剪贴板
5. 粘贴到任何地方

这是 macOS 上最被低估的工具。它内置、免费、对屏幕上任意像素都能取色 —— 不仅仅是应用内部的像素。在 Windows 上，**Microsoft PowerToys** 也有一个类似的"Color Picker"工具（按 Win+Shift+C 激活）。

## 常见问题

### 能从网页上取色吗？

可以。在 Chrome、Firefox 或 Edge 中，打开开发者工具（F12 或 Cmd+Opt+I），点击"检查"工具（左上角图标），然后点击页面。样式面板会显示该元素使用的颜色，点击色块就能看到 hex、RGB、HSL，甚至可以实时修改颜色。在 macOS 上，Digital Color Meter 可以对屏幕上任意像素取色，包括浏览器里的。

### HEX、RGB、HSL 有什么区别？

- **HEX** 是六位代码，如 \`#FF5733\`，是 CSS 的标准
- **RGB** 是 0-255 的三个数，如 \`rgb(255, 87, 51)\`，是原始屏幕值
- **HSL** 是色相/饱和度/亮度，调整颜色时更直观

三者描述的是同一种颜色。UtilBoxx 把三种格式并排显示，你可以按项目需要复制任意一种。

### 怎么从小图或细节图上取色？

放大。UtilBoxx 支持放大图片，让你把光标精确放到目标像素上。在 Photoshop 中，吸管有"样本大小"下拉菜单，可以取 3x3 或 5x5 像素的平均值，这对噪点图片是个很好的兜底。

### 怎么匹配现实里看到的颜色？

用手机相机拍一张照，给照片吸个色，再用采到的颜色。对于更高精度，在良好的日光下（不要开闪光灯）拍物体，吸一个平整区域的颜色，再和物体本身对比验证。

### 能从 PDF 或视频里取色吗？

可以 —— 截图（Mac 用 Cmd+Shift+4，Windows 用 Win+Shift+S），然后给截图吸色。视频的话，暂停在某一帧，截图，吸色。UtilBoxx 接受 JPG、PNG 和 WebP，任何这些格式的截图都能用。

### 在线取色器安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的图片会被上传到远程服务器，并仔细阅读隐私政策。对个人或专有图片来说，纯浏览器工具是更安全的选择。

## 结论

吸管是任何设计师或开发者工具箱里最实用的小工具之一，不应该为此付费订阅。对大多数人来说，[UtilBoxx 的免费取色器](/zh/tools/color/picker) 是显而易见的选择：私密、快速、免费、无需注册。

如果你是常驻 Photoshop 的设计师，吸管工具是很好的备用。如果你是 Mac 用户，Digital Color Meter 是随时可用的优秀选择。免费替代品 GIMP 也有同样的吸管，零成本。

其他情况下，去看 [UtilBoxx 的颜色工具集](/zh/tools/color)，你会找到一个完整的、隐私优先的颜色处理工具箱 —— 全部在浏览器里完成。`;

const pickerJa = `## スポイトツールとは？

スポイトは、画像内の任意ピクセルの正確な色をサンプリングするツールです。ピクセルをクリックすると、ツールはその色の数値を返してくれます —— 通常は HEX、RGB、または HSL 形式。デザイナーと開発者は常にこれを使います：「写真の中のあの青が好きなんだが、何色だろう？」は、スポイトがあれば 2 秒で解決します。

人が画像から色を取得する理由は実際的でしかも頻繁です：

- **ブランドと写真をマッチさせる**：商品写真があり、サイトのアクセントカラーに商品を反映させたい。スポイトがその正確な色調を見つけてくれる。
- **デザインを再現する**：好きなウェブサイトやポスターを見て、自分のプロジェクトで同じ青を使いたい。スクリーンショットをスポイトすれば hex コードが手に入る。
- **パレットを作る**：写真には 5〜6 の美しく調和する支配色がある。スポイトがそれらをスタート地点として抽出。
- **ペンキや布の調色**：壁の写真を撮り、スポイトで色を取得し、ペンキ屋に持って行って色を合わせる。
- **精密な色補正**：2 つの画像でロゴの青を揃えたい？両方をスポイトして、コードを比較し、調整する。
- **好奇心**：「あれ黒、本当に黒？それとも濃い青？」は、スポイトで一発解決。

良いニュースは、適切なツールを使えば画像から色を取る作業は 10 秒で終わり、何もインストールする必要がないことです。

## 方法 1：UtilBoxx の無料カラーピッカー（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx のカラーピッカーツール](/ja/tools/color/picker) です。完全にブラウザ内で動作するため、画像がデバイスの外に出ることがありません。アップロードも登録もトラッキングも不要です。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/color/picker](/ja/tools/color/picker) を開く
2. アップロード領域をクリックして画像を選択（またはドラッグ＆ドロップ）
3. 画像上にカーソルを置くと —— カーソル下の hex コードをライブプレビュー表示
4. 画像上の任意の場所をクリックしてその色を「ロック」
5. **HEX**、**RGB**、**HSL** 形式で同時に色を読み取る
6. 任意の出力をクリックでクリップボードにコピー
7. オプション：拡大してピクセル単位で精密サンプリング

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべてブラウザ内で完結。画像はサーバーへ送信されません
- **ライブプレビュー**：クリック前にカーソル下の色を確認
- **3 形式同時表示**：HEX、RGB、HSL を並べて表示
- **ワンクリックコピー**：どの形式でもクリップボードへ
- **ズーム対応**：小さく詳細な画像からもピクセル精度でサンプリング
- **あらゆるデバイスで動作**：Windows、Mac、Linux、ChromeOS、iOS、Android

たまに色を取る程度なら、これほど低コストな選択肢はありません。

## 方法 2：Adobe Photoshop（有料）

Photoshop は画像編集のヘビー級で、そのスポイトツール（ショートカット **I**）は色サンプリングのゴールドスタンダードです。開いている画像をクリックすると、フォアグラウンド色スウォッチがサンプリング値で更新されます。情報パネル（ウィンドウ > 情報）は正確なピクセル座標と CMYK、RGB、HSB、Lab、Web（hex）の色を同時に表示します。サンプルサイズを「3×3 平均」や「5×5 平均」に設定すれば、1 ピクセルではなく小さな領域を平均してサンプリングでき、ノイズやアンチエイリアスのかかった画像に有用です。

ただし価格があります。Photoshop は Creative Cloud サブスクリプションの一部で、月額約 **$22.99**（年額約 $240）。たまに色を吸うだけならオーバースペックで、オプションパネルはほとんどの人にとって多すぎます。

既にレタッチ、合成、デザインのために Photoshop を使っているなら価値があります。色取りだけが目的であれば、ブラウザツールで十分です。請求書もインストールも不要です。

## 方法 3：macOS Digital Color Meter（内蔵、無料）

Mac ユーザーなら、すでに強力なスポイトがインストールされています：**Digital Color Meter**。**アプリケーション > ユーティリティ** にあります。それを開き、ディスプレイを選び、画面上の任意ピクセルにルーペを重ねれば（画像内だけでなく、どこでも）、RGB、hex、パーセントで色を表示します。常に最前面に表示される小さなウィンドウにロックすることもでき、アプリをまたいだ色比較に最適です。

画像から色を取るには：

1. Preview、Quick Look、または任意のビューワで画像を開く
2. Digital Color Meter を開く（Cmd+Space、「Digital Color Meter」を入力）
3. 画像をクリック —— 色がメーターに表示される
4. **カラー > テキストとしてコピー**（または Cmd+Shift+C）を選び hex コードをクリップボードに
5. どこにでも貼り付け

これは macOS で最も過小評価されているツールです。内蔵で、無料で、画面上のどんなピクセルからでも取れます —— アプリ内ピクセルに限りません。Windows では、**Microsoft PowerToys** に同様の「Color Picker」ユーティリティがあります（Win+Shift+C で起動）。

## よくある質問

### ウェブサイトから色を採取できますか？

はい。Chrome、Firefox、Edge で DevTools（F12 または Cmd+Opt+I）を開き、「検証」ツール（左上のアイコン）をクリックして、ページをクリックします。スタイルパネルにその要素の色が表示され、色スウォッチをクリックすると hex、RGB、HSL を確認でき、リアルタイムで色を変更できます。macOS では Digital Color Meter がブラウザ内のピクセルを含む画面上の任意ピクセルから色を採取できます。

### HEX、RGB、HSL の違いは？

- **HEX** は \`#FF5733\` のような 6 文字コードで、CSS の標準
- **RGB** は \`rgb(255, 87, 51)\` のような 0〜255 の 3 つの値で、生の画面値
- **HSL** は色相/彩度/明度で、色を調整する際に直感的

3 つとも同じ色を表します。UtilBoxx は 3 形式を並べて表示するので、プロジェクトに必要な形式をどれでもコピーできます。

### 小さくて詳細な画像から色を取るには？

ズームイン。UtilBoxx は画像拡大をサポートし、目的ピクセルにカーソルを正確に置けます。Photoshop のスポイトには「サンプルサイズ」ドロップダウンがあり、3×3 や 5×5 ピクセルで平均を取れるので、ノイズ画像の優れたフォールバックになります。

### 現実の色をどうやって合わせる？

スマホのカメラで写真を撮り、その写真をスポイトして色を使います。より精度を求めるなら、晴天で（フラッシュなしで）対象を撮影し、平坦な部分をスポイトして、対象物自身と照合して確認します。

### PDF や動画から色を取れますか？

はい —— スクリーンショットを撮り（Mac は Cmd+Shift+4、Windows は Win+Shift+S）、そのスクリーンショットをスポイトします。動画ならフレームで一時停止し、スクリーンショット、スポイト。UtilBoxx は JPG、PNG、WebP を受け付けるので、これらの形式のスクリーンショットならどれでも動きます。

### オンラインのカラーピッカーは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、画像がリモートサーバーにアップロードされると仮定し、プライバシーポリシーをよく確認してください。個人または専有画像には、ブラウザのみのツールがより安全な選択です。

## まとめ

スポイトはデザイナーや開発者のキットで最も便利な小さなツールのひとつであり、有料サブスクリプションが必要なものではありません。ほとんどの人にとって、[UtilBoxx の無料カラーピッカー](/ja/tools/color/picker) は明白な選択です：プライベートで、速くて、無料で、登録不要。

既に Photoshop を常用しているデザイナーなら、スポイトツールは良いバックアップになります。Mac ユーザーなら、Digital Color Meter が常に使える優れた選択肢です。無料の Photoshop 代替 GIMP にも同じスポイトがあります。

その他は、[UtilBoxx のカラーツール](/ja/tools/color) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先のカラーツールキットが見つかります。`;

const pickerEs = `## ¿Qué es una herramienta de Cuentagotas?

El Cuentagotas es una herramienta que muestrea el color exacto de cualquier píxel de una imagen. Haz clic en un píxel y la herramienta te devuelve el valor numérico del color — normalmente como HEX, RGB o HSL. Diseñadores y desarrolladores la usan constantemente: "Me encanta ese azul de la foto, ¿cuál es?" se convierte en una tarea de 2 segundos con un Cuentagotas.

Las razones por las que la gente extrae colores de imágenes son prácticas y frecuentes:

- **Hacer coincidir marca y foto**: tienes una foto de producto y quieres que el color de acento del sitio web haga eco del producto. El Cuentagotas encuentra el tono exacto.
- **Replicar un diseño**: ves un sitio web o póster que te encanta y quieres el mismo azul en tu propio proyecto. Cuentagotas a una captura y tienes el código hex.
- **Construir una paleta**: una foto tiene 5-6 colores dominantes que se ven geniales juntos. El Cuentagotas los extrae como punto de partida.
- **Igualar pintura o tela**: saca una foto de una pared, Cuentagotas el color y llévalo a una tienda de pinturas para igualar la muestra.
- **Corrección de color precisa**: ¿necesitas igualar el azul de un logo en dos imágenes? Cuentagotas en ambas, compara los códigos, ajusta.
- **Curiosidad**: "¿Ese negro es realmente negro, o es azul oscuro?" Un Cuentagotas responde con un clic.

La buena noticia: con la herramienta adecuada, extraer un color de una imagen es un trabajo de 10 segundos y no requiere instalar nada.

## Método 1: Usa el Cuentagotas de color gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de extraer colores de una imagen es la [herramienta Cuentagotas de UtilBoxx](/es/tools/color/picker). Se ejecuta por completo en tu navegador, por lo que tu imagen nunca sale de tu dispositivo. Sin subidas, sin registro y sin rastreo.

Así se usa:

1. Ve a [utilboxx.com/es/tools/color/picker](/es/tools/color/picker)
2. Haz clic en el área de subida y selecciona tu imagen (o arrástrala)
3. Pasa el cursor sobre la imagen — la vista previa en vivo muestra el código hex bajo tu cursor
4. Haz clic en cualquier parte de la imagen para "bloquear" ese color
5. Lee el color en **HEX**, **RGB** y **HSL** simultáneamente
6. Haz clic en cualquier salida para copiarla al portapapeles
7. Opcional: haz zoom para muestreo con precisión de píxel

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. Tu imagen nunca llega a un servidor.
- **Vista previa en vivo**: ve el color bajo tu cursor antes de hacer clic
- **Los tres formatos**: HEX, RGB, HSL mostrados a la vez
- **Copia con un clic**: copia cualquier formato al portapapeles
- **Soporte de zoom**: obtén muestras con precisión de píxel en imágenes pequeñas o detalladas
- **Funciona en cualquier dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android

Si solo necesitas extraer colores de vez en cuando, esta es la opción de menor fricción con diferencia.

## Método 2: Adobe Photoshop (De pago)

Photoshop es el peso pesado de la edición de imágenes, y su herramienta Cuentagotas (atajo de teclado **I**) es el estándar de oro para el muestreo de color. Haz clic en cualquier parte de una imagen abierta y la muestra de color de primer plano se actualiza al valor muestreado. El panel Info (Ventana > Info) muestra las coordenadas exactas del píxel y el color en CMYK, RGB, HSB, Lab y Web (hex) — todo a la vez. También puedes ajustar el tamaño de muestra a "Promedio 3x3" o "Promedio 5x5" para muestrear una región pequeña en lugar de un solo píxel, útil para imágenes con ruido o suavizado.

El inconveniente es el precio. Photoshop forma parte de una suscripción a Creative Cloud que cuesta aproximadamente **$22,99 al mes** (unos $240 al año). Para una extracción puntual es excesivo, y el panel de opciones es más de lo que la mayoría necesita.

Photoshop solo vale la pena si ya lo usas para retoque, composición o diseño. Si la extracción de color es todo lo que necesitas, una herramienta de navegador hace el trabajo sin factura ni instalación.

## Método 3: Digital Color Meter de macOS (Integrado, gratis)

Si estás en Mac, ya tienes un Cuentagotas potente instalado: **Digital Color Meter**. Vive en **Aplicaciones > Utilidades**. Ábrelo, elige tu pantalla, pasa la lupa sobre cualquier píxel de la pantalla (no solo dentro de una imagen — en cualquier lugar), y mostrará el color en RGB, hex o porcentaje. También puedes bloquear la vista en una pequeña ventana que queda siempre encima, perfecta para contrastar colores entre apps.

Para usarlo con una imagen:

1. Abre la imagen en Vista Previa, Quick Look o cualquier visor
2. Abre Digital Color Meter (Cmd+Space, escribe "Digital Color Meter")
3. Haz clic en la imagen — el color aparece en el medidor
4. Elige **Color > Copiar como texto** (o pulsa Cmd+Shift+C) para obtener el código hex en tu portapapeles
5. Pégalo donde quieras

Esta es la herramienta más subestimada de macOS. Viene integrada, es gratis y funciona con cualquier píxel de la pantalla — no solo dentro de una app. En Windows, **Microsoft PowerToys** tiene una utilidad "Color Picker" similar que hace el mismo trabajo (pulsa Win+Shift+C para activarla).

## Preguntas frecuentes

### ¿Puedo muestrear colores de una web?

Sí. En Chrome, Firefox o Edge, abre DevTools (F12 o Cmd+Opt+I), haz clic en la herramienta "Inspeccionar" (icono arriba a la izquierda), luego haz clic en la página. El panel Estilos muestra los colores usados en ese elemento, y puedes hacer clic en la muestra para ver hex, RGB, HSL e incluso modificar el color en vivo. En macOS, Digital Color Meter puede muestrear cualquier píxel de la pantalla, incluidos los de un navegador.

### ¿Cuál es la diferencia entre HEX, RGB y HSL?

- **HEX** es un código de seis caracteres como \`#FF5733\`, el estándar para CSS
- **RGB** son tres números 0-255, como \`rgb(255, 87, 51)\`, los valores crudos de pantalla
- **HSL** es tono/saturación/luminosidad, más intuitivo para ajustar colores

Los tres describen el mismo color. UtilBoxx muestra los tres juntos para que copies el formato que tu proyecto necesite.

### ¿Cómo extraigo un color de una imagen pequeña o detallada?

Haz zoom. UtilBoxx soporta zoom en la imagen para que puedas colocar el cursor sobre el píxel exacto. En Photoshop, el Cuentagotas tiene un desplegable de "Tamaño de muestra" que te permite promediar sobre 3x3 o 5x5 píxeles, un gran respaldo para imágenes con ruido.

### ¿Cómo igualo un color que veo en la vida real?

Usa la cámara de tu teléfono, Cuentagotas la foto que tomaste y usa el color muestreado. Para más precisión, fotografía el objeto con buena luz natural (sin flash), Cuentagotas un área plana y vuelve a comprobar el resultado contra el propio objeto.

### ¿Puedo extraer un color de un PDF o un vídeo?

Sí — haz una captura (Cmd+Shift+4 en Mac, Win+Shift+S en Windows) y luego Cuentagotas la captura. Para vídeo, pausa en un fotograma, captura, Cuentagotas. UtilBoxx acepta JPG, PNG y WebP, así que cualquier captura en esos formatos funciona.

### ¿Es seguro usar un Cuentagotas de color online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador** — sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tu imagen se está subiendo a un servidor remoto y lee atentamente su política de privacidad. Para imágenes personales o propietarias, una herramienta solo-navegador es la opción más segura.

## Conclusión

El Cuentagotas es una de las herramientas pequeñas más útiles en el kit de cualquier diseñador o desarrollador, y no debería requerir una suscripción de pago. Para la mayoría de la gente, el [Cuentagotas de color gratis de UtilBoxx](/es/tools/color/picker) es la opción obvia: es privado, rápido y gratis, sin registro.

Si eres diseñador y ya vives en Photoshop, la herramienta Cuentagotas es un gran respaldo. Si estás en Mac, Digital Color Meter es una excelente opción siempre disponible. Y GIMP, la alternativa gratuita a Photoshop, tiene el mismo Cuentagotas a coste cero.

Para todo lo demás, visita las [herramientas de color de UtilBoxx](/es/tools/color) y encontrarás un conjunto completo de herramientas para trabajar con colores, con privacidad como prioridad, todo en tu navegador.`;

const pickerPt = `## O que é uma ferramenta de Conta-gotas?

O Conta-gotas é uma ferramenta que amostra a cor exata de qualquer pixel de uma imagem. Clique em um pixel e a ferramenta retorna o valor numérico da cor — geralmente como HEX, RGB ou HSL. Designers e desenvolvedores usam o tempo todo: "Adoro aquele azul da foto, qual é?" vira uma tarefa de 2 segundos com o Conta-gotas.

Os motivos pelos quais as pessoas extraem cores de imagens são práticos e frequentes:

- **Combinar marca e foto**: você tem uma foto de produto e quer que a cor de destaque do site faça eco do produto. O Conta-gotas encontra o tom exato.
- **Replicar um design**: você vê um site ou pôster que adora e quer o mesmo azul no seu projeto. Conta-gotas em um print e você tem o código hex.
- **Construir uma paleta**: uma foto tem 5-6 cores dominantes que ficam ótimas juntas. O Conta-gotas extrai como ponto de partida.
- **Igualar tinta ou tecido**: tire uma foto de uma parede, Conta-gotas a cor e leve a uma loja de tintas para igualar a amostra.
- **Correção de cor precisa**: precisa igualar o azul de um logo em duas imagens? Conta-gotas em ambas, compare os códigos, ajuste.
- **Curiosidade**: "Esse preto é realmente preto, ou é azul escuro?" O Conta-gotas responde com um clique.

A boa notícia: com a ferramenta certa, extrair uma cor de uma imagem é um trabalho de 10 segundos e você não precisa instalar nada.

## Método 1: Use o Conta-gotas de cor grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de extrair cores de uma imagem é a [ferramenta Conta-gotas do UtilBoxx](/pt/tools/color/picker). Ela roda inteiramente no seu navegador, então sua imagem nunca sai do seu dispositivo. Sem upload, sem cadastro e sem rastreamento.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/color/picker](/pt/tools/color/picker)
2. Clique na área de upload e selecione sua imagem (ou arraste e solte)
3. Passe o cursor sobre a imagem — a pré-visualização ao vivo mostra o código hex sob seu cursor
4. Clique em qualquer parte da imagem para "bloquear" aquela cor
5. Leia a cor em **HEX**, **RGB** e **HSL** simultaneamente
6. Clique em qualquer saída para copiá-la para a área de transferência
7. Opcional: amplie para amostragem com precisão de pixel

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. Sua imagem nunca chega a um servidor.
- **Pré-visualização ao vivo**: veja a cor sob o cursor antes de clicar
- **Os três formatos**: HEX, RGB, HSL mostrados juntos
- **Cópia com um clique**: copie qualquer formato para a área de transferência
- **Suporte a zoom**: obtenha amostras com precisão de pixel em imagens pequenas ou detalhadas
- **Funciona em qualquer dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android

Se você só precisa extrair cores de vez em quando, essa é a opção de menor atrito disparado.

## Método 2: Adobe Photoshop (Pago)

Photoshop é o peso-pesado da edição de imagens, e sua ferramenta Conta-gotas (atalho de teclado **I**) é o padrão-ouro para amostragem de cor. Clique em qualquer lugar de uma imagem aberta e a amostra de cor de primeiro plano é atualizada com o valor amostrado. O painel Info (Janela > Info) mostra as coordenadas exatas do pixel e a cor em CMYK, RGB, HSB, Lab e Web (hex) — tudo de uma vez. Você também pode definir o tamanho da amostra como "Média 3x3" ou "Média 5x5" para amostrar uma pequena região em vez de um único pixel, útil para imagens com ruído ou anti-aliasing.

O problema é o preço. Photoshop faz parte de uma assinatura Creative Cloud que custa cerca de **$22,99 por mês** (aproximadamente $240 por ano). Para uma extração pontual é exagero, e o painel de opções é mais do que a maioria das pessoas precisa.

Photoshop vale a pena apenas se você já o usa para retoque, composição ou design. Se extração de cor é tudo o que você precisa, uma ferramenta baseada em navegador faz o trabalho sem fatura nem instalação.

## Método 3: Digital Color Meter do macOS (Integrado, grátis)

Se você está no Mac, já tem um Conta-gotas poderoso instalado: **Digital Color Meter**. Ele fica em **Aplicativos > Utilitários**. Abra-o, escolha seu display, passe a lupa sobre qualquer pixel da tela (não apenas dentro de uma imagem — em qualquer lugar), e ele mostra a cor em RGB, hex ou porcentagem. Você também pode travar a vista em uma pequena janela que fica sempre no topo, perfeita para comparar cores entre apps.

Para usar com uma imagem:

1. Abra a imagem no Visualização, Quick Look ou qualquer visualizador
2. Abra o Digital Color Meter (Cmd+Space, digite "Digital Color Meter")
3. Clique na imagem — a cor aparece no medidor
4. Escolha **Cor > Copiar como Texto** (ou pressione Cmd+Shift+C) para obter o código hex na área de transferência
5. Cole onde quiser

Esta é a ferramenta mais subestimada do macOS. Ela é integrada, grátis, e funciona com qualquer pixel da tela — não só dentro de um app. No Windows, o **Microsoft PowerToys** tem um utilitário "Color Picker" similar que faz o mesmo trabalho (pressione Win+Shift+C para ativar).

## Perguntas frequentes

### Posso amostrar cores de uma página web?

Sim. No Chrome, Firefox ou Edge, abra DevTools (F12 ou Cmd+Opt+I), clique na ferramenta "Inspecionar" (ícone no canto superior esquerdo), depois clique na página. O painel Estilos mostra as cores usadas naquele elemento, e você pode clicar no swatch de cor para ver hex, RGB, HSL e até modificar a cor ao vivo. No macOS, o Digital Color Meter pode amostrar qualquer pixel da tela, incluindo os do navegador.

### Qual a diferença entre HEX, RGB e HSL?

- **HEX** é um código de seis caracteres como \`#FF5733\`, o padrão para CSS
- **RGB** são três números 0-255, como \`rgb(255, 87, 51)\`, os valores crus de tela
- **HSL** é matiz/saturação/luminosidade, mais intuitivo para ajustar cores

Os três descrevem a mesma cor. UtilBoxx mostra os três lado a lado para você copiar o formato que seu projeto precisa.

### Como extraio uma cor de uma imagem pequena ou detalhada?

Aplique zoom. UtilBoxx suporta zoom na imagem para você posicionar o cursor no pixel exato. No Photoshop, o Conta-gotas tem um menu suspenso de "Tamanho da amostra" que permite fazer média sobre 3x3 ou 5x5 pixels, um ótimo fallback para imagens com ruído.

### Como igualo uma cor que vejo na vida real?

Use a câmera do celular, Conta-gotas a foto que você tirou e use a cor amostrada. Para mais precisão, fotografe o objeto com boa luz natural (sem flash), Conta-gotas uma área plana e verifique o resultado contra o próprio objeto.

### Posso extrair uma cor de um PDF ou vídeo?

Sim — tire um print (Cmd+Shift+4 no Mac, Win+Shift+S no Windows), depois Conta-gotas o print. Para vídeo, pause em um frame, print, Conta-gotas. UtilBoxx aceita JPG, PNG e WebP, então qualquer print nesses formatos funciona.

### É seguro usar um Conta-gotas de cor online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que sua imagem está sendo enviada para um servidor remoto e leia atentamente sua política de privacidade. Para imagens pessoais ou proprietárias, uma ferramenta só-navegador é a escolha mais segura.

## Conclusão

O Conta-gotas é uma das pequenas ferramentas mais úteis no kit de qualquer designer ou desenvolvedor, e não deveria exigir uma assinatura paga. Para a maioria das pessoas, o [Conta-gotas de cor grátis do UtilBoxx](/pt/tools/color/picker) é a escolha óbvia: é privado, rápido e grátis, sem cadastro.

Se você é designer e já vive no Photoshop, a ferramenta Conta-gotas é um ótimo backup. Se você está no Mac, o Digital Color Meter é uma excelente opção sempre disponível. E o GIMP, a alternativa gratuita ao Photoshop, tem o mesmo Conta-gotas a custo zero.

Para todo o resto, visite as [ferramentas de cor do UtilBoxx](/pt/tools/color) e você encontrará um conjunto completo de ferramentas para trabalhar com cores, com privacidade como prioridade, tudo no seu navegador.`;

const pickerFr = `## Qu'est-ce qu'un outil Pipette ?

La Pipette est un outil qui échantillonne la couleur exacte de n'importe quel pixel d'une image. Cliquez sur un pixel et l'outil vous renvoie la valeur numérique de la couleur — généralement en HEX, RGB ou HSL. Designers et développeurs l'utilisent en permanence : « J'adore ce bleu dans la photo, c'est quoi ? » devient une tâche de 2 secondes avec une Pipette.

Les raisons pour lesquelles les gens prélèvent des couleurs dans des images sont pratiques et fréquentes :

- **Faire matcher marque et photo** : vous avez une photo produit et vous voulez que la couleur d'accent du site fasse écho au produit. La Pipette trouve la teinte exacte.
- **Répliquer un design** : vous voyez un site ou une affiche que vous adorez et vous voulez le même bleu dans votre projet. Pipette sur une capture et vous avez le code hex.
- **Construire une palette** : une photo contient 5-6 couleurs dominantes qui s'accordent à merveille. La Pipette les extrait comme point de départ.
- **Répliquer une peinture ou un tissu** : prenez une photo d'un mur, Pipette la couleur et emmenez-la chez un marchand de peinture pour assortir.
- **Correction de couleur précise** : vous devez aligner le bleu d'un logo sur deux images ? Pipette sur les deux, comparez les codes, ajustez.
- **Curiosité** : « Ce noir est-il vraiment noir, ou est-ce du bleu foncé ? » Une Pipette répond d'un clic.

Bonne nouvelle : avec le bon outil, prélever une couleur dans une image est un travail de 10 secondes et vous n'avez rien à installer.

## Méthode 1 : Utiliser la Pipette de couleur gratuite de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de prélever des couleurs dans une image est l'[outil Pipette de UtilBoxx](/fr/tools/color/picker). Il s'exécute entièrement dans votre navigateur, donc votre image ne quitte jamais votre appareil. Pas de téléversement, pas d'inscription, pas de tracking.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/color/picker](/fr/tools/color/picker)
2. Cliquez sur la zone de téléversement et sélectionnez votre image (ou glissez-déposez)
3. Survolez l'image — l'aperçu en direct affiche le code hex sous votre curseur
4. Cliquez n'importe où sur l'image pour « verrouiller » cette couleur
5. Lisez la couleur en **HEX**, **RGB** et **HSL** simultanément
6. Cliquez sur n'importe quelle sortie pour la copier dans le presse-papiers
7. Optionnel : zoomez pour un échantillonnage au pixel près

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Votre image n'arrive jamais sur un serveur.
- **Aperçu en direct** : voyez la couleur sous votre curseur avant de cliquer
- **Les trois formats** : HEX, RGB, HSL affichés ensemble
- **Copie en un clic** : copiez n'importe quel format dans le presse-papiers
- **Support du zoom** : obtenez des échantillons au pixel près sur des images petites ou détaillées
- **Fonctionne sur tout appareil** : Windows, Mac, Linux, ChromeOS, iOS, Android

Si vous n'avez besoin de prélever des couleurs qu'occasionnellement, c'est de loin l'option la plus simple.

## Méthode 2 : Adobe Photoshop (Payant)

Photoshop est le poids lourd de l'édition d'images, et son outil Pipette (raccourci clavier **I**) est la référence en matière d'échantillonnage de couleur. Cliquez n'importe où dans une image ouverte et la pastille de couleur de premier plan se met à jour avec la valeur échantillonnée. Le panneau Infos (Fenêtre > Infos) affiche les coordonnées exactes du pixel et la couleur en CMJN, RVB, TSL, Lab et Web (hex) — tout à la fois. Vous pouvez aussi régler la taille d'échantillon sur « Moyenne 3x3 » ou « Moyenne 5x5 » pour échantillonner une petite zone au lieu d'un seul pixel, ce qui est utile pour les images bruitées ou anticrénelées.

Le hic, c'est le prix. Photoshop fait partie d'un abonnement Creative Cloud qui coûte environ **22,99 $ par mois** (environ 240 $ par an). Pour un prélèvement ponctuel c'est disproportionné, et le panneau d'options est plus que ce dont la plupart des gens ont besoin.

Photoshop ne vaut le coup que si vous l'utilisez déjà pour la retouche, le compositing ou le design. Si le prélèvement de couleur est tout ce dont vous avez besoin, un outil en navigateur fait le travail sans facture ni installation.

## Méthode 3 : Digital Color Meter de macOS (Intégré, gratuit)

Si vous êtes sur Mac, vous avez déjà une Pipette puissante installée : **Digital Color Meter**. Elle se trouve dans **Applications > Utilitaires**. Ouvrez-la, choisissez votre écran, passez la loupe sur n'importe quel pixel de l'écran (pas seulement dans une image — n'importe où), et elle affiche la couleur en RVB, hex ou pourcentage. Vous pouvez aussi verrouiller la vue dans une petite fenêtre qui reste toujours au-dessus, parfaite pour comparer des couleurs entre apps.

Pour l'utiliser avec une image :

1. Ouvrez l'image dans Aperçu, Quick Look ou n'importe quelle visionneuse
2. Ouvrez Digital Color Meter (Cmd+Space, tapez « Digital Color Meter »)
3. Cliquez sur l'image — la couleur apparaît dans le mesureur
4. Choisissez **Couleur > Copier comme texte** (ou appuyez sur Cmd+Shift+C) pour obtenir le code hex dans votre presse-papiers
5. Collez où vous voulez

C'est l'outil le plus sous-estimé de macOS. Il est intégré, gratuit, et fonctionne sur n'importe quel pixel de l'écran — pas seulement à l'intérieur d'une app. Sur Windows, **Microsoft PowerToys** a un utilitaire « Color Picker » similaire qui fait le même travail (appuyez sur Win+Shift+C pour l'activer).

## Questions fréquentes

### Puis-je échantillonner des couleurs d'un site web ?

Oui. Dans Chrome, Firefox ou Edge, ouvrez les DevTools (F12 ou Cmd+Opt+I), cliquez sur l'outil « Inspecter » (icône en haut à gauche), puis cliquez sur la page. Le panneau Styles affiche les couleurs utilisées sur cet élément, et vous pouvez cliquer sur la pastille pour voir hex, RVB, TSL et même modifier la couleur en direct. Sur macOS, Digital Color Meter peut échantillonner n'importe quel pixel de l'écran, y compris dans un navigateur.

### Quelle est la différence entre HEX, RVB et TSL ?

- **HEX** est un code de six caractères comme \`#FF5733\`, le standard pour CSS
- **RVB** est trois nombres 0-255, comme \`rgb(255, 87, 51)\`, les valeurs brutes d'écran
- **TSL** est teinte/saturation/luminosité, plus intuitif pour ajuster les couleurs

Les trois décrivent la même couleur. UtilBoxx affiche les trois ensemble pour que vous puissiez copier le format dont votre projet a besoin.

### Comment prélever une couleur d'une image petite ou détaillée ?

Zoomez. UtilBoxx supporte le zoom sur l'image pour que vous puissiez positionner le curseur sur le pixel exact. Dans Photoshop, la Pipette a un menu déroulant « Taille d'échantillon » qui vous permet de moyenner sur 3x3 ou 5x5 pixels, un excellent fallback pour les images bruitées.

### Comment apparier une couleur que je vois dans la vie réelle ?

Utilisez l'appareil photo de votre téléphone, Pipettez la photo que vous avez prise et utilisez la couleur échantillonnée. Pour plus de précision, photographiez l'objet en bonne lumière du jour (sans flash), Pipettez une zone plate et revérifiez le résultat contre l'objet lui-même.

### Puis-je prélever une couleur d'un PDF ou d'une vidéo ?

Oui — faites une capture (Cmd+Shift+4 sur Mac, Win+Shift+S sur Windows), puis Pipettez la capture. Pour la vidéo, mettez pause sur une frame, capturez, Pipettez. UtilBoxx accepte JPG, PNG et WebP, donc toute capture dans ces formats fonctionne.

### Est-il sûr d'utiliser une Pipette de couleur en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que votre image est téléversée sur un serveur distant et lisez attentivement leur politique de confidentialité. Pour les images personnelles ou propriétaires, un outil navigateur seul est le choix le plus sûr.

## Conclusion

La Pipette est l'un des petits outils les plus utiles dans la trousse de tout designer ou développeur, et ne devrait pas exiger un abonnement payant. Pour la plupart des gens, la [Pipette de couleur gratuite de UtilBoxx](/fr/tools/color/picker) est le choix évident : privé, rapide, gratuit, sans inscription.

Si vous êtes designer et vivez déjà dans Photoshop, l'outil Pipette est une excellente roue de secours. Si vous êtes sur Mac, Digital Color Meter est une excellente option toujours disponible. Et GIMP, l'alternative gratuite à Photoshop, propose la même Pipette à coût zéro.

Pour tout le reste, rendez-vous sur les [outils couleur de UtilBoxx](/fr/tools/color) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const pickerDe = `## Was ist ein Pipetten-Werkzeug?

Die Pipette ist ein Werkzeug, das die exakte Farbe eines beliebigen Pixels in einem Bild abtastet. Klicke auf ein Pixel und das Werkzeug gibt dir den numerischen Wert der Farbe zurück — normalerweise als HEX, RGB oder HSL. Designer und Entwickler nutzen es ständig: „Ich liebe dieses Blau im Foto, was ist es?" wird mit einer Pipette zur 2-Sekunden-Aufgabe.

Die Gründe, warum Menschen Farben aus Bildern entnehmen, sind praktisch und häufig:

- **Marke und Foto abstimmen**: Du hast ein Produktfoto und möchtest, dass die Akzentfarbe der Website das Produkt aufgreift. Die Pipette findet den exakten Ton.
- **Ein Design replizieren**: Du siehst eine Website oder ein Plakat, das du liebst, und willst dasselbe Blau in deinem eigenen Projekt. Pipette auf einem Screenshot und du hast den Hex-Code.
- **Eine Palette aufbauen**: Ein Foto hat 5-6 dominante Farben, die großartig zusammenpassen. Die Pipette extrahiert sie als Ausgangspunkt.
- **Farbe oder Stoff abstimmen**: Fotografiere eine Wand, pipettiere die Farbe und bringe sie zum Farbenladen, um sie anzupassen.
- **Präzise Farbkorrektur**: Du musst das Blau eines Logos in zwei Bildern gleich halten? Pipette auf beide, vergleiche die Codes, passe an.
- **Neugier**: „Ist dieses Schwarz wirklich schwarz, oder ist es dunkelblau?" Eine Pipette antwortet mit einem Klick.

Die gute Nachricht: Mit dem richtigen Werkzeug ist das Entnehmen einer Farbe aus einem Bild eine 10-Sekunden-Aufgabe, und du musst nichts installieren.

## Methode 1: Die kostenlose Farbpipette von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode, Farben aus einem Bild zu entnehmen, ist das [Farbpipetten-Werkzeug von UtilBoxx](/de/tools/color/picker). Es läuft vollständig in deinem Browser, sodass dein Bild dein Gerät nie verlässt. Kein Upload, keine Registrierung, kein Tracking.

So verwendest du es:

1. Gehe zu [utilboxx.com/de/tools/color/picker](/de/tools/color/picker)
2. Klicke auf den Upload-Bereich und wähle dein Bild (oder ziehe es per Drag & Drop)
3. Bewege den Cursor über das Bild — die Live-Vorschau zeigt den Hex-Code unter deinem Cursor
4. Klicke irgendwo auf das Bild, um diese Farbe zu „sperren"
5. Lies die Farbe in **HEX**, **RGB** und **HSL** gleichzeitig ab
6. Klicke auf eine beliebige Ausgabe, um sie in die Zwischenablage zu kopieren
7. Optional: zoome hinein für pixelgenaue Abtastung

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in deinem Browser verarbeitet. Dein Bild erreicht nie einen Server.
- **Live-Vorschau**: sieh die Farbe unter deinem Cursor vor dem Klick
- **Alle drei Formate**: HEX, RGB, HSL nebeneinander
- **Ein-Klick-Kopie**: kopiere ein beliebiges Format in die Zwischenablage
- **Zoom-Unterstützung**: pixelgenaue Abtastung aus kleinen oder detaillierten Bildern
- **Funktioniert auf jedem Gerät**: Windows, Mac, Linux, ChromeOS, iOS, Android

Wenn du nur gelegentlich Farben entnimmst, ist dies die reibungsloseste Option.

## Methode 2: Adobe Photoshop (Kostenpflichtig)

Photoshop ist das Schwergewicht der Bildbearbeitung, und sein Pipetten-Werkzeug (Tastaturkurzbefehl **I**) ist der Goldstandard für die Farbabtastung. Klicke irgendwo in ein offenes Bild, und der Vordergrund-Farbschalter aktualisiert sich auf den abgetasteten Wert. Das Info-Bedienfeld (Fenster > Info) zeigt die exakten Pixelkoordinaten und die Farbe in CMYK, RGB, HSB, Lab und Web (Hex) — alles auf einmal. Du kannst die „Stichprobengröße" auch auf „3x3 Mittelwert" oder „5x5 Mittelwert" setzen, um einen kleinen Bereich statt eines einzelnen Pixels abzutasten — nützlich bei verrauschten oder antialiasing-behafteten Bildern.

Der Haken ist der Preis. Photoshop ist Teil eines Creative-Cloud-Abonnements, das ungefähr **22,99 $ pro Monat** (etwa 240 $ pro Jahr) kostet. Für eine gelegentliche Farbentnahme ist das übertrieben, und das Optionsfeld bietet mehr als die meisten Menschen brauchen.

Photoshop lohnt sich nur, wenn du es bereits für Retusche, Compositing oder Design nutzt. Wenn Farbentnahme alles ist, was du brauchst, erledigt ein Browser-Werkzeug die Arbeit ohne Rechnung und ohne Installation.

## Methode 3: Digital Color Meter von macOS (Integriert, kostenlos)

Wenn du auf einem Mac bist, hast du bereits eine leistungsfähige Pipette installiert: **Digital Color Meter**. Sie liegt in **Programme > Dienstprogramme**. Öffne sie, wähle deinen Bildschirm, bewege die Lupe über einen beliebigen Bildschirm-Pixel (nicht nur innerhalb eines Bildes — irgendwo), und sie zeigt die Farbe in RGB, Hex oder Prozent. Du kannst die Ansicht auch in einem kleinen Fenster fixieren, das immer im Vordergrund bleibt — perfekt zum Vergleichen von Farben zwischen Apps.

So nutzt du es für ein Bild:

1. Öffne das Bild in Vorschau, Quick Look oder einem beliebigen Viewer
2. Öffne Digital Color Meter (Cmd+Space, tippe „Digital Color Meter")
3. Klicke auf das Bild — die Farbe erscheint im Messgerät
4. Wähle **Farbe > Als Text kopieren** (oder drücke Cmd+Shift+C), um den Hex-Code in die Zwischenablage zu holen
5. Füge ihn überall ein

Dies ist das am meisten unterschätzte Werkzeug auf macOS. Es ist eingebaut, kostenlos und funktioniert mit jedem Pixel auf dem Bildschirm — nicht nur innerhalb einer App. Auf Windows hat **Microsoft PowerToys** ein ähnliches „Color Picker"-Dienstprogramm, das dasselbe leistet (Win+Shift+C drücken zum Aktivieren).

## Häufige Fragen

### Kann ich Farben von einer Webseite abtasten?

Ja. Öffne in Chrome, Firefox oder Edge die DevTools (F12 oder Cmd+Opt+I), klicke auf das „Untersuchen"-Werkzeug (Icon oben links), dann auf die Seite. Das Styles-Bedienfeld zeigt die in diesem Element verwendeten Farben, und du kannst auf den Farbschalter klicken, um Hex, RGB, HSL zu sehen und die Farbe sogar live zu ändern. Auf macOS kann Digital Color Meter jeden Bildschirm-Pixel abtasten, einschließlich derer in einem Browser.

### Was ist der Unterschied zwischen HEX, RGB und HSL?

- **HEX** ist ein sechsstelliger Code wie \`#FF5733\`, der Standard für CSS
- **RGB** sind drei Zahlen 0-255, wie \`rgb(255, 87, 51)\`, die rohen Bildschirmwerte
- **HSL** ist Farbton/Sättigung/Helligkeit, intuitiver zum Anpassen von Farben

Alle drei beschreiben dieselbe Farbe. UtilBoxx zeigt alle drei nebeneinander, damit du das Format kopieren kannst, das dein Projekt braucht.

### Wie entnehme ich eine Farbe aus einem kleinen oder detaillierten Bild?

Zoome hinein. UtilBoxx unterstützt das Zoomen des Bildes, damit du den Cursor auf dem exakten Pixel positionieren kannst. In Photoshop hat die Pipette ein „Stichprobengröße"-Dropdown, mit dem du über 3x3 oder 5x5 Pixel mitteln kannst — ein großartiges Fallback für verrauschte Bilder.

### Wie stimme ich eine Farbe ab, die ich im echten Leben sehe?

Verwende die Handykamera, pipettiere das Foto, das du gemacht hast, und nutze die abgetastete Farbe. Für mehr Genauigkeit fotografiere das Objekt bei gutem Tageslicht (ohne Blitz), pipettiere einen flachen Bereich und überprüfe das Ergebnis gegen das Objekt selbst.

### Kann ich eine Farbe aus einem PDF oder Video entnehmen?

Ja — mach einen Screenshot (Cmd+Shift+4 auf dem Mac, Win+Shift+S unter Windows), dann pipettiere den Screenshot. Für Video: pausiere auf einem Frame, Screenshot, pipettiere. UtilBoxx akzeptiert JPG, PNG und WebP, also funktioniert jeder Screenshot in diesen Formaten.

### Ist die Nutzung einer Online-Farbpipette sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in deinem Browser** — kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen solltest du davon ausgehen, dass dein Bild auf einen entfernten Server hochgeladen wird, und die Datenschutzrichtlinie sorgfältig lesen. Für persönliche oder proprietäre Bilder ist ein reines Browser-Werkzeug die sicherere Wahl.

## Fazit

Die Pipette ist eines der nützlichsten kleinen Werkzeuge im Kit jedes Designers oder Entwicklers und sollte keine kostenpflichtige Subskription erfordern. Für die meisten Menschen ist die [kostenlose Farbpipette von UtilBoxx](/de/tools/color/picker) die offensichtliche Wahl: privat, schnell, kostenlos, ohne Registrierung.

Wenn du Designer bist und bereits in Photoshop lebst, ist das Pipetten-Werkzeug ein großartiges Backup. Wenn du auf einem Mac bist, ist Digital Color Meter eine ausgezeichnete stets verfügbare Option. Und GIMP, die kostenlose Photoshop-Alternative, hat dieselbe Pipette zum Nulltarif.

Für alles andere besuche die [Farb-Werkzeuge von UtilBoxx](/de/tools/color): Dort findest du einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit Farben — alles im Browser.`;

export const pickerPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-pick-color-from-image",
    category: "Color Tools",
    date: "2026-03-05",
    readTime: "4 min",
    title: "How to Pick a Color from an Image (Eyedropper Tool)",
    description: "Extract exact color codes from any image. Get HEX, RGB, and HSL with one click.",
    content: pickerEn,
  },
  zh: {
    slug: "how-to-pick-color-from-image",
    category: "颜色工具",
    date: "2026-03-05",
    readTime: "4 分钟",
    title: "如何从图片中取色（吸管工具）",
    description: "从任意图片中提取精确的颜色代码。一键获得 HEX、RGB 和 HSL。",
    content: pickerZh,
  },
  ja: {
    slug: "how-to-pick-color-from-image",
    category: "カラーツール",
    date: "2026-03-05",
    readTime: "4 分",
    title: "画像から色を取得する方法（スポイトツール）",
    description: "任意のイメージから正確なカラーコードを抽出。HEX、RGB、HSL をワンクリックで。",
    content: pickerJa,
  },
  es: {
    slug: "how-to-pick-color-from-image",
    category: "Herramientas de color",
    date: "2026-03-05",
    readTime: "4 min",
    title: "Cómo extraer un color de una imagen (herramienta Cuentagotas)",
    description: "Extrae códigos de color exactos de cualquier imagen. Obtén HEX, RGB y HSL con un clic.",
    content: pickerEs,
  },
  pt: {
    slug: "how-to-pick-color-from-image",
    category: "Ferramentas de cor",
    date: "2026-03-05",
    readTime: "4 min",
    title: "Como extrair uma cor de uma imagem (ferramenta Conta-gotas)",
    description: "Extraia códigos de cor exatos de qualquer imagem. Obtenha HEX, RGB e HSL com um clique.",
    content: pickerPt,
  },
  fr: {
    slug: "how-to-pick-color-from-image",
    category: "Outils de couleur",
    date: "2026-03-05",
    readTime: "4 min",
    title: "Comment prélever une couleur d'une image (outil Pipette)",
    description: "Extrayez des codes couleur exacts de n'importe quelle image. Obtenez HEX, RVB et TSL en un clic.",
    content: pickerFr,
  },
  de: {
    slug: "how-to-pick-color-from-image",
    category: "Farb-Tools",
    date: "2026-03-05",
    readTime: "4 Min",
    title: "Farbe aus einem Bild entnehmen (Pipetten-Werkzeug)",
    description: "Extrahiere exakte Farbcodes aus jedem Bild. Erhalte HEX, RGB und HSL mit einem Klick.",
    content: pickerDe,
  },
};
