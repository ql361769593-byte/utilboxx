// Blog post: Hex to RGB Color Conversion
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const hexRgbEn = `## What is a hex color code?

A hex color code is a six-character string that represents a color in web design. It looks like this: \`#FF5733\`. The \`#\` is a prefix, and the six characters are three pairs of hexadecimal digits — one pair each for red, green, and blue. Hex is short for "hexadecimal," which is base-16, so each pair can represent a value from 00 to FF (0 to 255 in decimal).

So \`#FF5733\` breaks down as:

- \`FF\` = 255 red
- \`57\` = 87 green
- \`33\` = 51 blue

Mix those three intensities of light, and you get a warm orange. Hex codes are the most common way colors are written in CSS, HTML, and most design tools. They are short, they round-trip cleanly with RGB, and they are the lingua franca of color on the web.

The other common color notations you will meet are **RGB** (red 0-255, green 0-255, blue 0-255), **HSL** (hue 0-360, saturation 0-100%, lightness 0-100%), and **CMYK** (cyan, magenta, yellow, key/black percentages used in print). Knowing how to convert between them is a daily task for web developers, designers, and digital marketers.

## Method 1: Use UtilBoxx's Free Color Converter (Recommended)

The fastest, safest, and most private way to convert color codes is [UtilBoxx's Hex to RGB tool](/en/tools/color/hex-rgb). It runs entirely in your browser, so no data ever leaves your device. There is no upload, no signup, and no tracking.

Here is how to use it:

1. Go to [utilboxx.com/en/tools/color/hex-rgb](/en/tools/color/hex-rgb)
2. Type or paste your hex code (with or without the leading \`#\`)
3. See the live conversion to **RGB**, **HSL**, and **CMYK** all at once
4. Use the eyedropper to pick a color from anywhere on the screen
5. Click any output to copy it to your clipboard

**Why we recommend this method**:

- **100% free**, no account, no signup, no email gate
- **Privacy-first**: everything happens locally in your browser. Nothing is uploaded.
- **All-in-one**: HEX, RGB, HSL, and CMYK in a single screen
- **Bidirectional**: type in any format, get all the others
- **Eyedropper**: pick a color from any pixel on the screen
- **One-click copy**: copy any format to the clipboard
- **Works on any device**: Windows, Mac, Linux, ChromeOS, iOS, Android

If you only need to convert colors once in a while, this is by far the lowest-friction option.

## Method 2: Photoshop Color Picker (Paid)

Photoshop is the heavyweight of image editing, and its Color Picker (activated by clicking the foreground/background color swatch in the toolbar) is the gold standard for color selection. It shows HEX, RGB, HSL, CMYK, Lab, and a few other color spaces side by side. You can type a hex code into the \`#\` field, slide the H/S/B pickers, click anywhere in the color field, or sample a color from an open image with the eyedropper.

The catch is the price. Photoshop is part of a Creative Cloud subscription that costs roughly **$22.99 per month** (about $240 per year). For a one-off color conversion, it is overkill. And it requires a desktop install, which can be heavy on older machines.

Photoshop is worth it only if you already use it for retouching, compositing, or design work. If color conversion is all you need, a browser tool does the job without the bill.

## Method 3: Convert with code (JavaScript or Python)

If you are a developer, you can convert colors with a one-liner in your language of choice. Here are reliable snippets:

\`\`\`bash
# In any Unix shell with Python:
python3 -c "import sys; h=sys.argv[1].lstrip('#'); print(tuple(int(h[i:i+2], 16) for i in (0,2,4)))" "#FF5733"
# (255, 87, 51)
\`\`\`

\`\`\`javascript
// JavaScript: parseInt on each hex pair
const hex = "#FF5733";
const r = parseInt(hex.slice(1, 3), 16); // 255
const g = parseInt(hex.slice(3, 5), 16); // 87
const b = parseInt(hex.slice(5, 7), 16); // 51
console.log(\`rgb(\${r}, \${g}, \${b})\`); // "rgb(255, 87, 51)"

// In reverse: RGB to HEX
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
}
console.log(rgbToHex(255, 87, 51)); // "#FF5733"
\`\`\`

\`\`\`python
# Python f-string with format spec
hex = "FF5733"
r, g, b = int(hex[0:2], 16), int(hex[2:4], 16), int(hex[4:6], 16)
print(f"rgb({r}, {g}, {b})")  # "rgb(255, 87, 51)"

# RGB to HEX
def rgb_to_hex(r, g, b):
    return "#{:02X}{:02X}{:02X}".format(r, g, b)
print(rgb_to_hex(255, 87, 51))  # "#FF5733"
\`\`\`

\`\`\`css
/* CSS now supports color() and relative colors in modern browsers */
:root {
  --brand: #FF5733;
  --brand-rgb: 255, 87, 51; /* drop into rgba() */
}

.button {
  background: rgb(var(--brand-rgb));
  border: 1px solid rgba(var(--brand-rgb), 0.5);
}
\`\`\`

For one-off conversions, a browser tool is faster. For integrating into a build pipeline or design system, code is the right answer.

## Common questions

### What is the difference between HEX and RGB?

**HEX** is a six-character base-16 string. **RGB** is three decimal numbers from 0-255. They represent the exact same color; the formats are interchangeable. \`#FF5733\` = \`rgb(255, 87, 51)\` = the same shade of warm orange.

### What is HSL better for?

HSL (Hue, Saturation, Lightness) is a much more intuitive way to reason about color than RGB. To make a color "lighter," you increase L. To make it "more vivid," you increase S. To shift through the spectrum, you rotate H. That is why modern CSS color-mixing functions and many design tools prefer HSL.

### What is CMYK for?

CMYK is the color model for **print**. RGB is the color model for **screens**. They overlap but are not identical: a vivid RGB blue can be impossible to print in CMYK without shifting toward purple. Convert to CMYK before sending a file to a printer to preview what will actually come out.

### Are hex codes case-sensitive?

No. \`#FF5733\` and \`#ff5733\` are the same color. CSS treats them as identical. The convention is to use uppercase for clarity (\`#FFFFFF\` reads as "white" faster than \`#ffffff\`).

### How do I pick a color from a webpage?

Use the eyedropper in your browser's DevTools. In Chrome, Firefox, or Edge, open DevTools (F12 or Cmd+Opt+I), click the "Inspect" tool, then click the color swatch in the Styles panel. You can copy the hex, RGB, or HSL value from the popup. UtilBoxx's tool also has a screen eyedropper built in.

### Is it safe to use an online color converter?

It depends on the service. **UtilBoxx processes everything in your browser** — no upload, no server-side processing, no logs. With other tools, assume your input is being logged. For one-off color codes that is not a big deal, but for proprietary brand colors it is worth using a private tool.

## Conclusion

Color conversion is a small task that comes up constantly for anyone working with web design, branding, or print, and it should not require a paid subscription or a software install. For most people, [UtilBoxx's free Color Converter](/en/tools/color/hex-rgb) is the obvious choice: it is private, fast, and free, with no signup.

If you are a designer who already lives in Photoshop, the Color Picker is a great backup. If you are scripting, JavaScript and Python one-liners are unbeatable. macOS users can also use the built-in **Digital Color Meter** (in Applications/Utilities) to sample any color on the screen and read it in RGB.

For everything else, head to [UtilBoxx Color tools](/en/tools/color) and you will find a complete, privacy-first toolkit for working with colors — all in your browser.`;

const hexRgbZh = `## 什么是十六进制（Hex）颜色代码？

十六进制颜色代码是网页设计中表示颜色的六位字符串，看起来像这样：\`#FF5733\`。\`#\` 是前缀，六位字符是三对十六进制数字 —— 红、绿、蓝各一对。Hex 是 hexadecimal（十六进制）的缩写，基数为 16，所以每对可以表示 00 到 FF（十进制的 0 到 255）之间的值。

所以 \`#FF5733\` 可以拆解为：

- \`FF\` = 红 255
- \`57\` = 绿 87
- \`33\` = 蓝 51

把这三种强度的光混合起来，就得到一种暖橙色。Hex 代码是 CSS、HTML 和大多数设计工具中最常见的颜色书写方式。它短小、与 RGB 转换不丢精度，是网页颜色的通用语言。

你还会遇到的常见颜色表示法有 **RGB**（红 0-255、绿 0-255、蓝 0-255）、**HSL**（色相 0-360、饱和度 0-100%、亮度 0-100%）和 **CMYK**（青、品红、黄、黑/Key 的百分比，用于印刷）。知道如何在它们之间转换，是网页开发者、设计师和数字营销人员的日常工作。

## 方法一：使用 UtilBoxx 免费颜色转换工具（推荐）

最快、最安全、最私密的方式是 [UtilBoxx 的 Hex 转 RGB 工具](/zh/tools/color/hex-rgb)。它完全在你的浏览器中运行，没有任何数据离开你的设备。没有上传、没有注册、没有追踪。

使用方法如下：

1. 打开 [utilboxx.com/zh/tools/color/hex-rgb](/zh/tools/color/hex-rgb)
2. 输入或粘贴你的 hex 代码（带或不带前缀 \`#\` 都可以）
3. 一次性看到 **RGB**、**HSL**、**CMYK** 的实时转换
4. 用取色器从屏幕任何地方吸取颜色
5. 点击任意输出即可复制到剪贴板

**为什么推荐这个方法**：

- **100% 免费**，无账号、无注册、无邮箱验证
- **隐私优先**：所有处理都在你的浏览器本地完成，没有任何数据被上传
- **全能**：HEX、RGB、HSL、CMYK 在同一个界面
- **双向转换**：任意格式输入，得到所有其他格式
- **取色器**：从屏幕任意像素吸取颜色
- **一键复制**：任意格式一键复制到剪贴板
- **全设备支持**：Windows、Mac、Linux、ChromeOS、iOS、Android

如果你只是偶尔转换一下颜色，这是最省心的选择。

## 方法二：Photoshop 拾色器（付费）

Photoshop 是图像编辑领域的重量级选手，它的拾色器（点击工具栏的前景/背景色色块即可打开）是颜色选择的黄金标准。它把 HEX、RGB、HSL、CMYK、Lab 和其他几种颜色空间并排显示。你可以在 \`#\` 字段输入 hex 代码，拖动 H/S/B 滑块，点击颜色区域的任意位置，或用吸管工具从打开的图片中取样。

代价是价格。Photoshop 是 Creative Cloud 订阅的一部分，每月约 **$22.99**（每年约 $240 美元）。如果只是偶尔转一次颜色，杀鸡用牛刀。而且需要桌面安装，对老机器也不太友好。

只有当你已经用它做修图、合成或设计时，Photoshop 才值得。如果颜色转换就是你的全部需求，浏览器工具就够用，还免了账单。

## 方法三：用代码转换（JavaScript 或 Python）

如果你是开发者，可以用一行代码在任何你喜欢的语言里转换颜色。下面是可靠的片段：

\`\`\`bash
# 在任何装有 Python 的 Unix shell 中：
python3 -c "import sys; h=sys.argv[1].lstrip('#'); print(tuple(int(h[i:i+2], 16) for i in (0,2,4)))" "#FF5733"
# (255, 87, 51)
\`\`\`

\`\`\`javascript
// JavaScript：用 parseInt 解析每对 hex
const hex = "#FF5733";
const r = parseInt(hex.slice(1, 3), 16); // 255
const g = parseInt(hex.slice(3, 5), 16); // 87
const b = parseInt(hex.slice(5, 7), 16); // 51
console.log(\`rgb(\${r}, \${g}, \${b})\`); // "rgb(255, 87, 51)"

// 反向：RGB 转 HEX
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
}
console.log(rgbToHex(255, 87, 51)); // "#FF5733"
\`\`\`

\`\`\`python
# Python f-string 配合 format 规范
hex = "FF5733"
r, g, b = int(hex[0:2], 16), int(hex[2:4], 16), int(hex[4:6], 16)
print(f"rgb({r}, {g}, {b})")  # "rgb(255, 87, 51)"

# RGB 转 HEX
def rgb_to_hex(r, g, b):
    return "#{:02X}{:02X}{:02X}".format(r, g, b)
print(rgb_to_hex(255, 87, 51))  # "#FF5733"
\`\`\`

\`\`\`css
/* 现代 CSS 支持 color() 和相对颜色 */
:root {
  --brand: #FF5733;
  --brand-rgb: 255, 87, 51; /* 套进 rgba() */
}

.button {
  background: rgb(var(--brand-rgb));
  border: 1px solid rgba(var(--brand-rgb), 0.5);
}
\`\`\`

临时转换，浏览器工具更快；集成进构建流水线或设计系统，代码才是正路。

## 常见问题

### HEX 和 RGB 有什么区别？

**HEX** 是六位十六进制字符串。**RGB** 是 0-255 之间的三个十进制数。它们表示完全相同的颜色；这两种格式可以互换。\`#FF5733\` = \`rgb(255, 87, 51)\` = 同一种暖橙色。

### HSL 适合什么场景？

HSL（色相、饱和度、亮度）是一种比 RGB 直观得多的颜色推理方式。要让颜色"更亮"，增大 L；要让它"更鲜艳"，增大 S；要沿光谱平移，旋转 H。这就是为什么现代 CSS 颜色混合函数和许多设计工具都偏好 HSL。

### CMYK 是干什么的？

CMYK 是用于**印刷**的颜色模型。RGB 是用于**屏幕**的颜色模型。它们有重叠但不相同：一种鲜艳的 RGB 蓝色在 CMYK 中可能无法不偏紫地印刷出来。在把文件发给印刷厂之前转换成 CMYK，可以预览实际印出来的样子。

### Hex 代码大小写敏感吗？

不敏感。\`#FF5733\` 和 \`#ff5733\` 是同一种颜色。CSS 也视它们为相同。约定俗成是用大写，更清晰（\`#FFFFFF\` 比 \`#ffffff\` 读起来更像"白色"）。

### 怎么从网页上取色？

用浏览器开发者工具里的吸管。在 Chrome、Firefox 或 Edge 中，打开开发者工具（F12 或 Cmd+Opt+I），点击"检查"工具，然后在样式面板里点击色块。可以在弹出框里复制 hex、RGB 或 HSL 值。UtilBoxx 的工具也内置了屏幕取色器。

### 在线颜色转换工具安全吗？

取决于服务。**UtilBoxx 一切处理都在浏览器中完成** —— 不上传、服务器不处理、不记录日志。对其他工具，假设你的输入会被记录。对一次性颜色代码这没什么大不了，但对专有的品牌色，用一个私密工具更值得。

## 结论

颜色转换是任何做网页设计、品牌或印刷的人经常要做的小事，不应该为此付费订阅或安装软件。对大多数人来说，[UtilBoxx 的免费颜色转换工具](/zh/tools/color/hex-rgb) 是显而易见的选择：私密、快速、免费、无需注册。

如果你是常驻 Photoshop 的设计师，拾色器是很好的备用。如果你写脚本，JavaScript 和 Python 一行代码无可替代。Mac 用户也可以用内置的 **Digital Color Meter**（在应用程序/实用工具中）从屏幕取任意颜色并读出 RGB。

其他情况下，去看 [UtilBoxx 的颜色工具集](/zh/tools/color)，你会找到一个完整的、隐私优先的颜色处理工具箱 —— 全部在浏览器里完成。`;

const hexRgbJa = `## 16 進カラーコードとは？

16 進カラーコードは、Web デザインで色を表現する 6 文字の文字列です。例：\`#FF5733\`。\`#\` はプレフィックスで、6 文字は 3 組の 16 進数字 —— 赤、緑、青の各ペア。Hex は hexadecimal（16 進）の略で、基数は 16 なので、各ペアは 00 から FF（10 進で 0〜255）の値を表せます。

つまり \`#FF5733\` は次のように分解できます：

- \`FF\` = 赤 255
- \`57\` = 緑 87
- \`33\` = 青 51

これら 3 つの強度の光を混ぜると、暖色寄りのオレンジになります。Hex コードは CSS、HTML、そしてほとんどのデザインツールで色を記述する最も一般的な方法です。短く、RGB との間で正確に往復でき、Web 上の色の共通語です。

出会う他の一般的な色表記には、**RGB**（赤 0-255、緑 0-255、青 0-255）、**HSL**（色相 0-360、彩度 0-100%、明度 0-100%）、**CMYK**（シアン、マゼンタ、イエロー、キー/黒の割合、印刷用）があります。Web 開発者、デザイナー、デジタルマーケターにとって、これらの間で変換できることは日常業務です。

## 方法 1：UtilBoxx の無料カラーコンバーター（推奨）

最も速く、安全で、プライベートな方法は [UtilBoxx の Hex→RGB ツール](/ja/tools/color/hex-rgb) です。完全にブラウザ内で動作し、データを一切デバイスから送りません。アップロードも登録もトラッキングも不要です。

使い方は次のとおりです：

1. [utilboxx.com/ja/tools/color/hex-rgb](/ja/tools/color/hex-rgb) を開く
2. Hex コードを入力または貼り付け（先頭の \`#\` はあってもなくても可）
3. **RGB**、**HSL**、**CMYK** への変換を一度に確認
4. スポイトで画面上の任意の場所から色を取得
5. 任意の出力をクリックでクリップボードにコピー

**この方法を推奨する理由**：

- **100% 無料**、アカウント不要、登録不要、メール認証不要
- **プライバシー最優先**：すべてブラウザ内で完結。何もアップロードされません
- **全部入り**：HEX、RGB、HSL、CMYK を 1 つの画面に
- **双方向**：どの形式で入力しても他のすべてが得られる
- **スポイト**：画面上の任意ピクセルから色を取得
- **ワンクリックコピー**：どの形式でもクリップボードへ
- **あらゆるデバイスで動作**：Windows、Mac、Linux、ChromeOS、iOS、Android

たまに色を変換するだけなら、これほど低コストな選択肢はありません。

## 方法 2：Photoshop カラーピッカー（有料）

Photoshop は画像編集のヘビー級で、そのカラーピッカー（ツールバーの前景/背景色スウォッチをクリックで開く）は色選択のゴールドスタンダードです。HEX、RGB、HSL、CMYK、Lab、その他いくつかの色空間が並んで表示されます。\`#\` フィールドに Hex コードを入力したり、H/S/B スライダーを動かしたり、色フィールドの任意の場所をクリックしたり、開いている画像からスポイトでサンプリングしたりできます。

ただし価格があります。Photoshop は Creative Cloud サブスクリプションの一部で、月額約 **$22.99**（年額約 $240）。たまの変換にはオーバースペックで、デスクトップインストールが必要なので、古いマシンには負担です。

既にレタッチ、合成、デザインのために Photoshop を使っているなら価値があります。色変換だけが目的であれば、ブラウザツールで十分です。請求書も不要です。

## 方法 3：コードで変換（JavaScript または Python）

開発者なら、好みの言語のワンライナーで色を変換できます。信頼性の高いスニペットを以下に示します：

\`\`\`bash
# Python が入った任意の Unix シェル：
python3 -c "import sys; h=sys.argv[1].lstrip('#'); print(tuple(int(h[i:i+2], 16) for i in (0,2,4)))" "#FF5733"
# (255, 87, 51)
\`\`\`

\`\`\`javascript
// JavaScript：各 hex ペアに parseInt
const hex = "#FF5733";
const r = parseInt(hex.slice(1, 3), 16); // 255
const g = parseInt(hex.slice(3, 5), 16); // 87
const b = parseInt(hex.slice(5, 7), 16); // 51
console.log(\`rgb(\${r}, \${g}, \${b})\`); // "rgb(255, 87, 51)"

// 逆方向：RGB → HEX
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
}
console.log(rgbToHex(255, 87, 51)); // "#FF5733"
\`\`\`

\`\`\`python
# Python f-string + format spec
hex = "FF5733"
r, g, b = int(hex[0:2], 16), int(hex[2:4], 16), int(hex[4:6], 16)
print(f"rgb({r}, {g}, {b})")  # "rgb(255, 87, 51)"

# RGB → HEX
def rgb_to_hex(r, g, b):
    return "#{:02X}{:02X}{:02X}".format(r, g, b)
print(rgb_to_hex(255, 87, 51))  # "#FF5733"
\`\`\`

\`\`\`css
/* モダン CSS は color() と relative color をサポート */
:root {
  --brand: #FF5733;
  --brand-rgb: 255, 87, 51; /* rgba() に流し込む */
}

.button {
  background: rgb(var(--brand-rgb));
  border: 1px solid rgba(var(--brand-rgb), 0.5);
}
\`\`\`

その場限りの変換にはブラウザツールが高速。ビルドパイプラインやデザインシステムに組み込むならコードが正解です。

## よくある質問

### HEX と RGB の違いは？

**HEX** は 6 文字の 16 進文字列。**RGB** は 0〜255 の 3 つの 10 進数。両者はまったく同じ色を表し、フォーマットは交換可能です。\`#FF5733\` = \`rgb(255, 87, 51)\` = 同じ暖色オレンジ。

### HSL は何に向いていますか？

HSL（色相、彩度、明度）は RGB よりずっと直感的に色を扱えます。色を「明るく」するには L を増やす、「鮮やかに」するには S を増やす、スペクトルをシフトするには H を回す。だからモダン CSS のカラーミックス関数や多くのデザインツールは HSL を好みます。

### CMYK は何のため？

CMYK は**印刷**の色モデルです。RGB は**画面**の色モデル。重なりますが同一ではありません。鮮やかな RGB の青は CMYK で紫に振れずに印刷できないことがあります。印刷所にファイルを送る前に CMYK に変換すれば、実際に印刷される色をプレビューできます。

### Hex コードは大文字小文字を区別しますか？

しません。\`#FF5733\` と \`#ff5733\` は同じ色です。CSS も同一に扱います。慣習として視認性のため大文字を使います（\`#FFFFFF\` のほうが \`#ffffff\` より「白」と読み取りやすい）。

### Web ページから色を取るには？

ブラウザ DevTools のスポイトを使います。Chrome、Firefox、Edge で DevTools（F12 または Cmd+Opt+I）を開き、「検証」ツールをクリックし、スタイルパネルの色スウォッチをクリックします。ポップアップで hex、RGB、HSL 値をコピーできます。UtilBoxx のツールにも画面スポイトが内蔵されています。

### オンラインの色変換ツールは安全ですか？

サービスによります。**UtilBoxx はすべてブラウザ内で処理します** —— アップロードなし、サーバーサイド処理なし、ログなし。他のツールでは、入力がログされていると仮定してください。1 回限りの色コードなら大した問題ではありませんが、企業秘密のブランドカラーにはプライベートなツールを使う価値があります。

## まとめ

色変換は Web デザイン、ブランディング、印刷に関わる人が頻繁に行う小さな作業であり、有料サブスクリプションやソフトのインストールが必要な作業ではありません。ほとんどの人にとって、[UtilBoxx の無料カラーコンバーター](/ja/tools/color/hex-rgb) は明白な選択です：プライベートで、速くて、無料で、登録不要。

既に Photoshop を常用しているデザイナーなら、カラーピッカーは良いバックアップになります。スクリプトを書くなら、JavaScript と Python のワンライナーが最強です。Mac ユーザーは内蔵の **Digital Color Meter**（アプリケーション/ユーティリティ内）でも画面から任意の色を RGB で読み取れます。

その他は、[UtilBoxx のカラーツール](/ja/tools/color) をチェックしてください。すべてブラウザ内で完結する、プライバシー最優先のカラーツールキットが見つかります。`;

const hexRgbEs = `## ¿Qué es un código de color hexadecimal?

Un código de color hexadecimal es una cadena de seis caracteres que representa un color en diseño web. Se ve así: \`#FF5733\`. La \`#\` es un prefijo, y los seis caracteres son tres pares de dígitos hexadecimales — un par para rojo, verde y azul. Hex es abreviatura de "hexadecimal", que es base 16, por lo que cada par puede representar un valor de 00 a FF (0 a 255 en decimal).

Así que \`#FF5733\` se desglosa como:

- \`FF\` = 255 rojo
- \`57\` = 87 verde
- \`33\` = 51 azul

Mezcla esas tres intensidades de luz y obtienes un naranja cálido. Los códigos hexadecimales son la forma más común de escribir colores en CSS, HTML y la mayoría de herramientas de diseño. Son cortos, van y vuelven limpiamente con RGB, y son la lengua franca del color en la web.

Las otras notaciones de color comunes que encontrarás son **RGB** (rojo 0-255, verde 0-255, azul 0-255), **HSL** (matiz 0-360, saturación 0-100%, luminosidad 0-100%) y **CMYK** (cian, magenta, amarillo, clave/negro en porcentajes, usado en impresión). Saber convertir entre ellas es una tarea diaria para desarrolladores web, diseñadores y marketers digitales.

## Método 1: Usa el conversor de color gratis de UtilBoxx (Recomendado)

La forma más rápida, segura y privada de convertir códigos de color es la [herramienta Hex a RGB de UtilBoxx](/es/tools/color/hex-rgb). Se ejecuta por completo en tu navegador, por lo que ningún dato sale de tu dispositivo. Sin subidas, sin registro y sin rastreo.

Así se usa:

1. Ve a [utilboxx.com/es/tools/color/hex-rgb](/es/tools/color/hex-rgb)
2. Escribe o pega tu código hex (con o sin el \`#\` inicial)
3. Ve la conversión en vivo a **RGB**, **HSL** y **CMYK** a la vez
4. Usa el Cuentagotas para tomar un color de cualquier parte de la pantalla
5. Haz clic en cualquier salida para copiarla al portapapeles

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro, sin verificación de email
- **Privacidad primero**: todo se procesa localmente en tu navegador. No se sube nada.
- **Todo en uno**: HEX, RGB, HSL y CMYK en una sola pantalla
- **Bidireccional**: escribe en cualquier formato, obtén los demás
- **Cuentagotas**: toma un color de cualquier píxel de la pantalla
- **Copia con un clic**: copia cualquier formato al portapapeles
- **Funciona en cualquier dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android

Si solo necesitas convertir colores de vez en cuando, esta es la opción de menor fricción con diferencia.

## Método 2: Selector de color de Photoshop (De pago)

Photoshop es el peso pesado de la edición de imágenes, y su Selector de color (activado al hacer clic en el swatch de color de primer plano/fondo en la barra de herramientas) es el estándar de oro para la selección de color. Muestra HEX, RGB, HSL, CMYK, Lab y otros espacios de color lado a lado. Puedes escribir un código hex en el campo \`#\`, deslizar los selectores H/S/B, hacer clic en cualquier parte del campo de color, o muestrear un color de una imagen abierta con el Cuentagotas.

El inconveniente es el precio. Photoshop forma parte de una suscripción a Creative Cloud que cuesta aproximadamente **$22,99 al mes** (unos $240 al año). Para una conversión puntual es excesivo. Y requiere instalación de escritorio, que puede ser pesada en máquinas antiguas.

Photoshop solo vale la pena si ya lo usas para retoque, composición o diseño. Si la conversión de color es todo lo que necesitas, una herramienta de navegador hace el trabajo sin la factura.

## Método 3: Convierte con código (JavaScript o Python)

Si eres desarrollador, puedes convertir colores con una sola línea en tu lenguaje favorito. Aquí tienes snippets fiables:

\`\`\`bash
# En cualquier shell Unix con Python:
python3 -c "import sys; h=sys.argv[1].lstrip('#'); print(tuple(int(h[i:i+2], 16) for i in (0,2,4)))" "#FF5733"
# (255, 87, 51)
\`\`\`

\`\`\`javascript
// JavaScript: parseInt en cada par hex
const hex = "#FF5733";
const r = parseInt(hex.slice(1, 3), 16); // 255
const g = parseInt(hex.slice(3, 5), 16); // 87
const b = parseInt(hex.slice(5, 7), 16); // 51
console.log(\`rgb(\${r}, \${g}, \${b})\`); // "rgb(255, 87, 51)"

// Inverso: RGB a HEX
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
}
console.log(rgbToHex(255, 87, 51)); // "#FF5733"
\`\`\`

\`\`\`python
# Python f-string con format spec
hex = "FF5733"
r, g, b = int(hex[0:2], 16), int(hex[2:4], 16), int(hex[4:6], 16)
print(f"rgb({r}, {g}, {b})")  # "rgb(255, 87, 51)"

# RGB a HEX
def rgb_to_hex(r, g, b):
    return "#{:02X}{:02X}{:02X}".format(r, g, b)
print(rgb_to_hex(255, 87, 51))  # "#FF5733"
\`\`\`

\`\`\`css
/* CSS moderno soporta color() y colores relativos */
:root {
  --brand: #FF5733;
  --brand-rgb: 255, 87, 51; /* mételo en rgba() */
}

.button {
  background: rgb(var(--brand-rgb));
  border: 1px solid rgba(var(--brand-rgb), 0.5);
}
\`\`\`

Para conversiones puntuales, una herramienta de navegador es más rápida. Para integrar en un pipeline de build o sistema de diseño, el código es la respuesta correcta.

## Preguntas frecuentes

### ¿Cuál es la diferencia entre HEX y RGB?

**HEX** es una cadena hexadecimal de seis caracteres. **RGB** son tres números decimales del 0-255. Representan exactamente el mismo color; los formatos son intercambiables. \`#FF5733\` = \`rgb(255, 87, 51)\` = el mismo tono de naranja cálido.

### ¿Para qué es mejor HSL?

HSL (Matiz, Saturación, Luminosidad) es una forma mucho más intuitiva de razonar sobre el color que RGB. Para hacer un color "más claro", aumentas L. Para hacerlo "más vivo", aumentas S. Para desplazarte por el espectro, rotas H. Por eso las funciones modernas de mezcla de color en CSS y muchas herramientas de diseño prefieren HSL.

### ¿Para qué es CMYK?

CMYK es el modelo de color para **impresión**. RGB es el modelo de color para **pantallas**. Se solapan pero no son idénticos: un azul RGB vivo puede ser imposible de imprimir en CMYK sin virar a morado. Convierte a CMYK antes de enviar un archivo a una imprenta para previsualizar lo que saldrá realmente.

### ¿Los códigos hex son sensibles a mayúsculas?

No. \`#FF5733\` y \`#ff5733\` son el mismo color. CSS los trata como idénticos. La convención es usar mayúsculas por claridad (\`#FFFFFF\` se lee como "blanco" más rápido que \`#ffffff\`).

### ¿Cómo tomo un color de una página web?

Usa el Cuentagotas en las DevTools de tu navegador. En Chrome, Firefox o Edge, abre DevTools (F12 o Cmd+Opt+I), haz clic en la herramienta "Inspeccionar", luego haz clic en el swatch de color en el panel de Estilos. Puedes copiar el valor hex, RGB o HSL del popup. La herramienta de UtilBoxx también tiene un Cuentagotas de pantalla integrado.

### ¿Es seguro usar un conversor de color online?

Depende del servicio. **UtilBoxx procesa todo en tu navegador** — sin subida, sin procesamiento en el servidor, sin registros. Con otras herramientas, asume que tu entrada se está registrando. Para códigos de color puntuales no es gran cosa, pero para colores de marca propietarios vale la pena usar una herramienta privada.

## Conclusión

La conversión de color es una pequeña tarea que aparece constantemente para cualquiera que trabaje con diseño web, branding o impresión, y no debería requerir una suscripción de pago o instalar software. Para la mayoría de la gente, el [Conversor de color gratis de UtilBoxx](/es/tools/color/hex-rgb) es la opción obvia: es privado, rápido y gratis, sin registro.

Si eres diseñador y ya vives en Photoshop, el Selector de color es un gran respaldo. Si estás programando, los one-liners de JavaScript y Python son imbatibles. Los usuarios de macOS también pueden usar el **Digital Color Meter** integrado (en Aplicaciones/Utilidades) para muestrear cualquier color de la pantalla y leerlo en RGB.

Para todo lo demás, visita las [herramientas de color de UtilBoxx](/es/tools/color) y encontrarás un conjunto completo de herramientas para trabajar con colores, con privacidad como prioridad, todo en tu navegador.`;

const hexRgbPt = `## O que é um código de cor hexadecimal?

Um código de cor hexadecimal é uma string de seis caracteres que representa uma cor em design web. Parece com isto: \`#FF5733\`. O \`#\` é um prefixo, e os seis caracteres são três pares de dígitos hexadecimais — um par para vermelho, verde e azul. Hex é abreviação de "hexadecimal", que é base 16, então cada par pode representar um valor de 00 a FF (0 a 255 em decimal).

Então \`#FF5733\` se decompõe em:

- \`FF\` = 255 vermelho
- \`57\` = 87 verde
- \`33\` = 51 azul

Misture essas três intensidades de luz e você obtém um laranja quente. Códigos hexadecimais são a forma mais comum de escrever cores em CSS, HTML e na maioria das ferramentas de design. São curtos, fazem a conversão de ida e volta de forma limpa com RGB, e são a língua franca da cor na web.

As outras notações de cor comuns que você vai encontrar são **RGB** (vermelho 0-255, verde 0-255, azul 0-255), **HSL** (matiz 0-360, saturação 0-100%, luminosidade 0-100%) e **CMYK** (ciano, magenta, amarelo, chave/preto em porcentagens, usado em impressão). Saber converter entre elas é uma tarefa diária para desenvolvedores web, designers e profissionais de marketing digital.

## Método 1: Use o conversor de cor grátis do UtilBoxx (Recomendado)

A maneira mais rápida, segura e privada de converter códigos de cor é a [ferramenta Hex para RGB do UtilBoxx](/pt/tools/color/hex-rgb). Ela roda inteiramente no seu navegador, então nenhum dado sai do seu dispositivo. Sem upload, sem cadastro e sem rastreamento.

Veja como usar:

1. Acesse [utilboxx.com/pt/tools/color/hex-rgb](/pt/tools/color/hex-rgb)
2. Digite ou cole seu código hex (com ou sem o \`#\` no início)
3. Veja a conversão ao vivo para **RGB**, **HSL** e **CMYK** de uma vez
4. Use o Conta-gotas para pegar uma cor de qualquer parte da tela
5. Clique em qualquer saída para copiá-la para a área de transferência

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro, sem verificação de e-mail
- **Privacidade em primeiro lugar**: tudo é processado localmente no seu navegador. Nada é enviado.
- **Tudo em um**: HEX, RGB, HSL e CMYK em uma única tela
- **Bidirecional**: digite em qualquer formato, obtenha todos os outros
- **Conta-gotas**: pegue uma cor de qualquer pixel da tela
- **Cópia com um clique**: copie qualquer formato para a área de transferência
- **Funciona em qualquer dispositivo**: Windows, Mac, Linux, ChromeOS, iOS, Android

Se você só precisa converter cores de vez em quando, essa é a opção de menor atrito disparado.

## Método 2: Seletor de cor do Photoshop (Pago)

Photoshop é o peso-pesado da edição de imagens, e seu Seletor de cor (ativado ao clicar no swatch de cor de primeiro plano/fundo na barra de ferramentas) é o padrão-ouro para seleção de cor. Mostra HEX, RGB, HSL, CMYK, Lab e outros espaços de cor lado a lado. Você pode digitar um código hex no campo \`#\`, deslizar os seletores H/S/B, clicar em qualquer lugar do campo de cor, ou amostrar uma cor de uma imagem aberta com o Conta-gotas.

O problema é o preço. Photoshop faz parte de uma assinatura Creative Cloud que custa cerca de **$22,99 por mês** (aproximadamente $240 por ano). Para uma conversão pontual é exagero. E requer instalação desktop, que pode ser pesada em máquinas antigas.

Photoshop vale a pena apenas se você já o usa para retoque, composição ou design. Se a conversão de cor é tudo o que você precisa, uma ferramenta baseada em navegador faz o trabalho sem a fatura.

## Método 3: Converta com código (JavaScript ou Python)

Se você é desenvolvedor, pode converter cores com uma única linha na sua linguagem favorita. Aqui vão snippets confiáveis:

\`\`\`bash
# Em qualquer shell Unix com Python:
python3 -c "import sys; h=sys.argv[1].lstrip('#'); print(tuple(int(h[i:i+2], 16) for i in (0,2,4)))" "#FF5733"
# (255, 87, 51)
\`\`\`

\`\`\`javascript
// JavaScript: parseInt em cada par hex
const hex = "#FF5733";
const r = parseInt(hex.slice(1, 3), 16); // 255
const g = parseInt(hex.slice(3, 5), 16); // 87
const b = parseInt(hex.slice(5, 7), 16); // 51
console.log(\`rgb(\${r}, \${g}, \${b})\`); // "rgb(255, 87, 51)"

// Reverso: RGB para HEX
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
}
console.log(rgbToHex(255, 87, 51)); // "#FF5733"
\`\`\`

\`\`\`python
# Python f-string com format spec
hex = "FF5733"
r, g, b = int(hex[0:2], 16), int(hex[2:4], 16), int(hex[4:6], 16)
print(f"rgb({r}, {g}, {b})")  # "rgb(255, 87, 51)"

# RGB para HEX
def rgb_to_hex(r, g, b):
    return "#{:02X}{:02X}{:02X}".format(r, g, b)
print(rgb_to_hex(255, 87, 51))  # "#FF5733"
\`\`\`

\`\`\`css
/* CSS moderno suporta color() e cores relativas */
:root {
  --brand: #FF5733;
  --brand-rgb: 255, 87, 51; /* coloque no rgba() */
}

.button {
  background: rgb(var(--brand-rgb));
  border: 1px solid rgba(var(--brand-rgb), 0.5);
}
\`\`\`

Para conversões pontuais, uma ferramenta de navegador é mais rápida. Para integrar em um pipeline de build ou sistema de design, o código é a resposta certa.

## Perguntas frequentes

### Qual a diferença entre HEX e RGB?

**HEX** é uma string hexadecimal de seis caracteres. **RGB** são três números decimais de 0-255. Representam exatamente a mesma cor; os formatos são intercambiáveis. \`#FF5733\` = \`rgb(255, 87, 51)\` = o mesmo tom de laranja quente.

### Para que HSL é melhor?

HSL (Matiz, Saturação, Luminosidade) é uma forma muito mais intuitiva de raciocinar sobre cor que RGB. Para tornar uma cor "mais clara", você aumenta L. Para deixá-la "mais vívida", você aumenta S. Para deslocar pelo espectro, você gira H. É por isso que funções modernas de mistura de cores em CSS e muitas ferramentas de design preferem HSL.

### Para que serve CMYK?

CMYK é o modelo de cor para **impressão**. RGB é o modelo de cor para **telas**. Eles se sobrepõem, mas não são idênticos: um azul RGB vívido pode ser impossível de imprimir em CMYK sem desviar para roxo. Converta para CMYK antes de enviar um arquivo para uma gráfica para pré-visualizar o que vai sair de fato.

### Códigos hex são sensíveis a maiúsculas?

Não. \`#FF5733\` e \`#ff5733\` são a mesma cor. CSS os trata como idênticos. A convenção é usar maiúsculas por clareza (\`#FFFFFF\` é lido como "branco" mais rápido que \`#ffffff\`).

### Como pego uma cor de uma página web?

Use o Conta-gotas nas DevTools do seu navegador. No Chrome, Firefox ou Edge, abra DevTools (F12 ou Cmd+Opt+I), clique na ferramenta "Inspecionar", depois clique no swatch de cor no painel de Estilos. Você pode copiar o valor hex, RGB ou HSL do popup. A ferramenta do UtilBoxx também tem um Conta-gotas de tela integrado.

### É seguro usar um conversor de cor online?

Depende do serviço. **UtilBoxx processa tudo no seu navegador** — sem upload, sem processamento no servidor, sem registros. Com outras ferramentas, assuma que sua entrada está sendo registrada. Para códigos de cor pontuais não é grande coisa, mas para cores de marca proprietárias vale a pena usar uma ferramenta privada.

## Conclusão

A conversão de cor é uma pequena tarefa que surge constantemente para qualquer um que trabalhe com design web, branding ou impressão, e não deveria exigir uma assinatura paga ou instalação de software. Para a maioria das pessoas, o [Conversor de cor grátis do UtilBoxx](/pt/tools/color/hex-rgb) é a escolha óbvia: é privado, rápido e grátis, sem cadastro.

Se você é designer e já vive no Photoshop, o Seletor de cor é um ótimo backup. Se você está programando, one-liners de JavaScript e Python são imbatíveis. Usuários de macOS também podem usar o **Digital Color Meter** integrado (em Aplicativos/Utilitários) para amostrar qualquer cor da tela e ler em RGB.

Para todo o resto, visite as [ferramentas de cor do UtilBoxx](/pt/tools/color) e você encontrará um conjunto completo de ferramentas para trabalhar com cores, com privacidade como prioridade, tudo no seu navegador.`;

const hexRgbFr = `## Qu'est-ce qu'un code couleur hexadécimal ?

Un code couleur hexadécimal est une chaîne de six caractères qui représente une couleur en design web. Cela ressemble à ceci : \`#FF5733\`. Le \`#\` est un préfixe, et les six caractères sont trois paires de chiffres hexadécimaux — une paire pour le rouge, le vert et le bleu. Hex est l'abréviation de « hexadécimal », qui est en base 16, donc chaque paire peut représenter une valeur de 00 à FF (0 à 255 en décimal).

Donc \`#FF5733\` se décompose ainsi :

- \`FF\` = 255 rouge
- \`57\` = 87 vert
- \`33\` = 51 bleu

Mélangez ces trois intensités de lumière et vous obtenez un orange chaud. Les codes hexadécimaux sont la façon la plus courante d'écrire les couleurs en CSS, HTML et dans la plupart des outils de design. Ils sont courts, font l'aller-retour proprement avec RGB, et sont la langue franca de la couleur sur le web.

Les autres notations de couleur courantes que vous allez rencontrer sont **RGB** (rouge 0-255, vert 0-255, bleu 0-255), **HSL** (teinte 0-360, saturation 0-100%, luminosité 0-100%) et **CMYK** (cyan, magenta, jaune, clé/noir en pourcentages, utilisé en impression). Savoir convertir entre elles est une tâche quotidienne pour les développeurs web, les designers et les marketers digitaux.

## Méthode 1 : Utiliser le convertisseur de couleur gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, sûre et privée de convertir des codes couleur est l'[outil Hex vers RGB de UtilBoxx](/fr/tools/color/hex-rgb). Il s'exécute entièrement dans votre navigateur, donc aucune donnée ne quitte votre appareil. Pas de téléversement, pas d'inscription, pas de tracking.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/color/hex-rgb](/fr/tools/color/hex-rgb)
2. Tapez ou collez votre code hex (avec ou sans le \`#\` initial)
3. Voyez la conversion en direct vers **RGB**, **HSL** et **CMYK** en même temps
4. Utilisez la pipette pour prélever une couleur depuis n'importe quel endroit de l'écran
5. Cliquez sur n'importe quelle sortie pour la copier dans le presse-papiers

**Pourquoi nous recommandons cette méthode** :

- **100 % gratuit**, sans compte, sans inscription, sans validation e-mail
- **Confidentialité d'abord** : tout se traite localement dans votre navigateur. Rien n'est téléversé.
- **Tout-en-un** : HEX, RGB, HSL et CMYK sur un seul écran
- **Bidirectionnel** : tapez dans n'importe quel format, obtenez tous les autres
- **Pipette** : prélevez une couleur depuis n'importe quel pixel de l'écran
- **Copie en un clic** : copiez n'importe quel format dans le presse-papiers
- **Fonctionne sur tout appareil** : Windows, Mac, Linux, ChromeOS, iOS, Android

Si vous n'avez besoin de convertir des couleurs qu'occasionnellement, c'est de loin l'option la plus simple.

## Méthode 2 : Sélecteur de couleur Photoshop (Payant)

Photoshop est le poids lourd de l'édition d'images, et son Sélecteur de couleur (activé en cliquant sur la pastille de couleur de premier plan/arrière-plan dans la barre d'outils) est la référence en matière de sélection de couleur. Il affiche HEX, RGB, HSL, CMYK, Lab et quelques autres espaces colorimétriques côte à côte. Vous pouvez taper un code hex dans le champ \`#\`, faire glisser les curseurs T/S/L, cliquer n'importe où dans le champ de couleur, ou échantillonner une couleur d'une image ouverte avec la pipette.

Le hic, c'est le prix. Photoshop fait partie d'un abonnement Creative Cloud qui coûte environ **22,99 $ par mois** (environ 240 $ par an). Pour une conversion ponctuelle c'est disproportionné. Et il faut une installation desktop, qui peut être lourde sur des machines anciennes.

Photoshop ne vaut le coup que si vous l'utilisez déjà pour la retouche, le compositing ou le design. Si la conversion de couleur est tout ce dont vous avez besoin, un outil en navigateur fait le travail sans la facture.

## Méthode 3 : Convertir avec du code (JavaScript ou Python)

Si vous êtes développeur, vous pouvez convertir des couleurs en une ligne dans votre langage préféré. Voici des snippets fiables :

\`\`\`bash
# Dans n'importe quel shell Unix avec Python :
python3 -c "import sys; h=sys.argv[1].lstrip('#'); print(tuple(int(h[i:i+2], 16) for i in (0,2,4)))" "#FF5733"
# (255, 87, 51)
\`\`\`

\`\`\`javascript
// JavaScript : parseInt sur chaque paire hex
const hex = "#FF5733";
const r = parseInt(hex.slice(1, 3), 16); // 255
const g = parseInt(hex.slice(3, 5), 16); // 87
const b = parseInt(hex.slice(5, 7), 16); // 51
console.log(\`rgb(\${r}, \${g}, \${b})\`); // "rgb(255, 87, 51)"

// Inverse : RGB vers HEX
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
}
console.log(rgbToHex(255, 87, 51)); // "#FF5733"
\`\`\`

\`\`\`python
# Python f-string avec format spec
hex = "FF5733"
r, g, b = int(hex[0:2], 16), int(hex[2:4], 16), int(hex[4:6], 16)
print(f"rgb({r}, {g}, {b})")  # "rgb(255, 87, 51)"

# RGB vers HEX
def rgb_to_hex(r, g, b):
    return "#{:02X}{:02X}{:02X}".format(r, g, b)
print(rgb_to_hex(255, 87, 51))  # "#FF5733"
\`\`\`

\`\`\`css
/* CSS moderne supporte color() et les couleurs relatives */
:root {
  --brand: #FF5733;
  --brand-rgb: 255, 87, 51; /* à passer dans rgba() */
}

.button {
  background: rgb(var(--brand-rgb));
  border: 1px solid rgba(var(--brand-rgb), 0.5);
}
\`\`\`

Pour des conversions ponctuelles, un outil en navigateur est plus rapide. Pour intégrer dans un pipeline de build ou un design system, le code est la bonne réponse.

## Questions fréquentes

### Quelle est la différence entre HEX et RGB ?

**HEX** est une chaîne hexadécimale de six caractères. **RGB** est trois nombres décimaux de 0-255. Ils représentent exactement la même couleur ; les formats sont interchangeables. \`#FF5733\` = \`rgb(255, 87, 51)\` = la même nuance d'orange chaud.

### Pour quoi HSL est-il mieux ?

HSL (Teinte, Saturation, Luminosité) est une façon bien plus intuitive de raisonner sur la couleur que RGB. Pour rendre une couleur « plus claire », augmentez L. Pour la rendre « plus vive », augmentez S. Pour vous déplacer dans le spectre, faites tourner H. C'est pourquoi les fonctions modernes de mélange de couleurs en CSS et de nombreux outils de design préfèrent HSL.

### À quoi sert CMYK ?

CMYK est le modèle colorimétrique pour l'**impression**. RGB est le modèle colorimétrique pour les **écrans**. Ils se chevauchent mais ne sont pas identiques : un bleu RGB vif peut être impossible à imprimer en CMYK sans virer au violet. Convertissez en CMYK avant d'envoyer un fichier à un imprimeur pour prévisualiser ce qui sortira réellement.

### Les codes hex sont-ils sensibles à la casse ?

Non. \`#FF5733\` et \`#ff5733\` sont la même couleur. CSS les traite à l'identique. La convention est d'utiliser des majuscules pour la clarté (\`#FFFFFF\" se lit « blanc » plus vite que \`#ffffff\`).

### Comment prélever une couleur d'une page web ?

Utilisez la pipette dans les DevTools de votre navigateur. Dans Chrome, Firefox ou Edge, ouvrez les DevTools (F12 ou Cmd+Opt+I), cliquez sur l'outil « Inspecter », puis cliquez sur la pastille de couleur dans le panneau Styles. Vous pouvez copier la valeur hex, RGB ou HSL depuis le popup. L'outil de UtilBoxx a aussi une pipette d'écran intégrée.

### Est-il sûr d'utiliser un convertisseur de couleur en ligne ?

Cela dépend du service. **UtilBoxx traite tout dans votre navigateur** : pas de téléversement, pas de traitement côté serveur, pas de logs. Avec d'autres outils, partez du principe que votre entrée est journalisée. Pour des codes couleur ponctuels ce n'est pas grave, mais pour des couleurs de marque propriétaires il vaut mieux utiliser un outil privé.

## Conclusion

La conversion de couleur est une petite tâche qui revient constamment pour quiconque travaille sur du design web, du branding ou de l'impression, et ne devrait pas exiger un abonnement payant ni une installation logicielle. Pour la plupart des gens, le [convertisseur de couleur gratuit de UtilBoxx](/fr/tools/color/hex-rgb) est le choix évident : privé, rapide, gratuit, sans inscription.

Si vous êtes designer et vivez déjà dans Photoshop, le Sélecteur de couleur est une excellente roue de secours. Si vous scriptz, les one-liners JavaScript et Python sont imbattables. Les utilisateurs de macOS peuvent aussi utiliser le **Digital Color Meter** intégré (dans Applications/Utilitaires) pour échantillonner n'importe quelle couleur de l'écran et la lire en RGB.

Pour tout le reste, rendez-vous sur les [outils couleur de UtilBoxx](/fr/tools/color) : vous y trouverez une boîte à outils complète, avec la confidentialité comme priorité, le tout dans votre navigateur.`;

const hexRgbDe = `## Was ist ein Hex-Farbcode?

Ein Hex-Farbcode ist eine sechsstellige Zeichenkette, die eine Farbe im Webdesign darstellt. Er sieht so aus: \`#FF5733\`. Das \`#\` ist ein Präfix, und die sechs Zeichen sind drei Paare hexadezimaler Ziffern — ein Paar jeweils für Rot, Grün und Blau. Hex ist die Abkürzung für „hexadezimal", was Basis 16 bedeutet, sodass jedes Paar einen Wert von 00 bis FF (0 bis 255 in Dezimal) darstellen kann.

Also \`#FF5733\` zerlegt sich so:

- \`FF\` = 255 Rot
- \`57\` = 87 Grün
- \`33\` = 51 Blau

Mische diese drei Lichtintensitäten und du erhältst ein warmes Orange. Hex-Codes sind die gängigste Art, Farben in CSS, HTML und den meisten Designwerkzeugen zu schreiben. Sie sind kurz, gehen sauber mit RGB hin und her, und sind die Lingua Franca der Farbe im Web.

Die anderen gängigen Farbnotationen, die dir begegnen werden, sind **RGB** (Rot 0-255, Grün 0-255, Blau 0-255), **HSL** (Farbton 0-360, Sättigung 0-100 %, Helligkeit 0-100 %) und **CMYK** (Cyan, Magenta, Gelb, Key/Schwarz in Prozent, für den Druck). Zwischen ihnen umrechnen zu können ist eine tägliche Aufgabe für Webentwickler, Designer und digitale Marketer.

## Methode 1: Den kostenlosen Farbumrechner von UtilBoxx verwenden (Empfohlen)

Die schnellste, sicherste und privateste Methode, Farbcodes umzurechnen, ist das [Hex-zu-RGB-Werkzeug von UtilBoxx](/de/tools/color/hex-rgb). Es läuft vollständig in deinem Browser, sodass keine Daten dein Gerät verlassen. Kein Upload, keine Registrierung, kein Tracking.

So verwendest du es:

1. Gehe zu [utilboxx.com/de/tools/color/hex-rgb](/de/tools/color/hex-rgb)
2. Tippe oder füge deinen Hex-Code ein (mit oder ohne führendes \`#\`)
3. Sieh die Live-Umrechnung in **RGB**, **HSL** und **CMYK** auf einmal
4. Nutze die Pipette, um eine Farbe von einer beliebigen Stelle des Bildschirms aufzunehmen
5. Klicke auf eine beliebige Ausgabe, um sie in die Zwischenablage zu kopieren

**Warum wir diese Methode empfehlen**:

- **100 % kostenlos**, kein Konto, keine Registrierung, keine E-Mail-Bestätigung
- **Privatsphäre zuerst**: Alles wird lokal in deinem Browser verarbeitet. Es wird nichts hochgeladen.
- **Alles in einem**: HEX, RGB, HSL und CMYK auf einem Bildschirm
- **Bidirektional**: gib in einem beliebigen Format ein, erhalte alle anderen
- **Pipette**: nimm eine Farbe von einem beliebigen Bildschirm-Pixel auf
- **Ein-Klick-Kopie**: kopiere ein beliebiges Format in die Zwischenablage
- **Funktioniert auf jedem Gerät**: Windows, Mac, Linux, ChromeOS, iOS, Android

Wenn du nur gelegentlich Farben umrechnen musst, ist dies die reibungsloseste Option.

## Methode 2: Photoshop-Farbwähler (Kostenpflichtig)

Photoshop ist das Schwergewicht der Bildbearbeitung, und sein Farbwähler (aktiviert durch Klick auf den Vorder-/Hintergrund-Farbschalter in der Werkzeugleiste) ist der Goldstandard für die Farbauswahl. Er zeigt HEX, RGB, HSL, CMYK, Lab und einige andere Farbräume nebeneinander. Du kannst einen Hex-Code in das \`#\`-Feld eingeben, die H/S/B-Schieberegler bewegen, irgendwo in das Farbfeld klicken oder mit der Pipette eine Farbe aus einem offenen Bild aufnehmen.

Der Haken ist der Preis. Photoshop ist Teil eines Creative-Cloud-Abonnements, das ungefähr **22,99 $ pro Monat** (etwa 240 $ pro Jahr) kostet. Für eine gelegentliche Umrechnung ist das übertrieben. Und es braucht eine Desktop-Installation, die auf älteren Maschinen schwer wiegen kann.

Photoshop lohnt sich nur, wenn du es bereits für Retusche, Compositing oder Design nutzt. Wenn Farbumrechnung alles ist, was du brauchst, erledigt ein Browser-Werkzeug die Arbeit ohne Rechnung.

## Methode 3: Mit Code umrechnen (JavaScript oder Python)

Wenn du Entwickler bist, kannst du Farben mit einer Einzeiler-Lösung in deiner bevorzugten Sprache umrechnen. Hier sind zuverlässige Snippets:

\`\`\`bash
# In jeder Unix-Shell mit Python:
python3 -c "import sys; h=sys.argv[1].lstrip('#'); print(tuple(int(h[i:i+2], 16) for i in (0,2,4)))" "#FF5733"
# (255, 87, 51)
\`\`\`

\`\`\`javascript
// JavaScript: parseInt auf jedes Hex-Paar
const hex = "#FF5733";
const r = parseInt(hex.slice(1, 3), 16); // 255
const g = parseInt(hex.slice(3, 5), 16); // 87
const b = parseInt(hex.slice(5, 7), 16); // 51
console.log(\`rgb(\${r}, \${g}, \${b})\`); // "rgb(255, 87, 51)"

// Umgekehrt: RGB zu HEX
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("").toUpperCase();
}
console.log(rgbToHex(255, 87, 51)); // "#FF5733"
\`\`\`

\`\`\`python
# Python f-string mit format spec
hex = "FF5733"
r, g, b = int(hex[0:2], 16), int(hex[2:4], 16), int(hex[4:6], 16)
print(f"rgb({r}, {g}, {b})")  # "rgb(255, 87, 51)"

# RGB zu HEX
def rgb_to_hex(r, g, b):
    return "#{:02X}{:02X}{:02X}".format(r, g, b)
print(rgb_to_hex(255, 87, 51))  # "#FF5733"
\`\`\`

\`\`\`css
/* Modernes CSS unterstützt color() und relative Farben */
:root {
  --brand: #FF5733;
  --brand-rgb: 255, 87, 51; /* in rgba() einsetzen */
}

.button {
  background: rgb(var(--brand-rgb));
  border: 1px solid rgba(var(--brand-rgb), 0.5);
}
\`\`\`

Für Ad-hoc-Umrechnungen ist ein Browser-Werkzeug schneller. Für die Integration in eine Build-Pipeline oder ein Design-System ist Code die richtige Antwort.

## Häufige Fragen

### Was ist der Unterschied zwischen HEX und RGB?

**HEX** ist eine sechsstellige hexadezimale Zeichenkette. **RGB** sind drei Dezimalzahlen von 0-255. Sie repräsentieren exakt dieselbe Farbe; die Formate sind austauschbar. \`#FF5733\` = \`rgb(255, 87, 51)\` = derselbe warme Orangeton.

### Wofür ist HSL besser?

HSL (Farbton, Sättigung, Helligkeit) ist eine viel intuitivere Art, über Farbe nachzudenken, als RGB. Um eine Farbe „heller" zu machen, erhöhst du L. Um sie „lebhafter" zu machen, erhöhst du S. Um dich durch das Spektrum zu bewegen, drehst du H. Deshalb bevorzugen moderne CSS-Farbmischfunktionen und viele Designwerkzeuge HSL.

### Wofür ist CMYK?

CMYK ist das Farbmodell für den **Druck**. RGB ist das Farbmodell für **Bildschirme**. Sie überlappen sich, sind aber nicht identisch: ein lebendiges RGB-Blau kann unmöglich in CMYK gedruckt werden, ohne ins Violette zu kippen. Rechne vor dem Senden an eine Druckerei in CMYK um, um eine Vorschau dessen zu erhalten, was tatsächlich herauskommt.

### Sind Hex-Codes case-sensitive?

Nein. \`#FF5733\` und \`#ff5733\` sind dieselbe Farbe. CSS behandelt sie identisch. Die Konvention ist, der Klarheit halber Großbuchstaben zu verwenden (\`#FFFFFF\` liest sich schneller als „Weiß" als \`#ffffff\`).

### Wie nehme ich eine Farbe von einer Webseite auf?

Nutze die Pipette in den DevTools deines Browsers. Öffne in Chrome, Firefox oder Edge die DevTools (F12 oder Cmd+Opt+I), klicke auf das „Untersuchen"-Werkzeug und dann auf den Farbschalter im Styles-Panel. Du kannst den Hex-, RGB- oder HSL-Wert aus dem Popup kopieren. Das UtilBoxx-Werkzeug hat ebenfalls eine eingebaute Bildschirm-Pipette.

### Ist die Nutzung eines Online-Farbumrechners sicher?

Das hängt vom Dienst ab. **UtilBoxx verarbeitet alles in deinem Browser** — kein Upload, keine serverseitige Verarbeitung, keine Logs. Bei anderen Werkzeugen solltest du davon ausgehen, dass deine Eingabe protokolliert wird. Für gelegentliche Farbcodes ist das kein großes Ding, aber für proprietäre Markenfarben lohnt sich ein privates Werkzeug.

## Fazit

Farbumrechnung ist eine kleine Aufgabe, die für jeden, der mit Webdesign, Branding oder Druck arbeitet, ständig anfällt, und keine kostenpflichtige Subskription oder Software-Installation erfordern sollte. Für die meisten Menschen ist der [kostenlose Farbumrechner von UtilBoxx](/de/tools/color/hex-rgb) die offensichtliche Wahl: privat, schnell, kostenlos, ohne Registrierung.

Wenn du Designer bist und bereits in Photoshop lebst, ist der Farbwähler ein großartiges Backup. Wenn du skriptest, sind JavaScript- und Python-Einzeiler unschlagbar. macOS-Nutzer können auch das eingebaute **Digital Color Meter** (in Programme/Dienstprogramme) verwenden, um eine beliebige Farbe auf dem Bildschirm abzutasten und in RGB abzulesen.

Für alles andere besuche die [Farb-Werkzeuge von UtilBoxx](/de/tools/color): Dort findest du einen kompletten, auf Privatsphäre ausgelegten Werkzeugkasten für die Arbeit mit Farben — alles im Browser.`;

export const hexRgbPost: Record<string, BlogPost> = {
  en: {
    slug: "hex-to-rgb-color-conversion",
    category: "Color Tools",
    date: "2026-03-01",
    readTime: "5 min",
    title: "Hex to RGB Color Conversion: The Complete Guide",
    description: "Convert hex color codes to RGB, HSL, and CMYK. With a free browser-based converter.",
    content: hexRgbEn,
  },
  zh: {
    slug: "hex-to-rgb-color-conversion",
    category: "颜色工具",
    date: "2026-03-01",
    readTime: "5 分钟",
    title: "Hex 到 RGB 颜色转换：完全指南",
    description: "把 hex 颜色代码转换为 RGB、HSL 和 CMYK。附带一个免费的浏览器内转换器。",
    content: hexRgbZh,
  },
  ja: {
    slug: "hex-to-rgb-color-conversion",
    category: "カラーツール",
    date: "2026-03-01",
    readTime: "5 分",
    title: "Hex から RGB への色変換：完全ガイド",
    description: "Hex カラーコードを RGB、HSL、CMYK に変換。無料のブラウザベース・コンバーター付き。",
    content: hexRgbJa,
  },
  es: {
    slug: "hex-to-rgb-color-conversion",
    category: "Herramientas de color",
    date: "2026-03-01",
    readTime: "5 min",
    title: "Conversión de color Hex a RGB: la guía completa",
    description: "Convierte códigos de color hex a RGB, HSL y CMYK. Con un conversor gratis en el navegador.",
    content: hexRgbEs,
  },
  pt: {
    slug: "hex-to-rgb-color-conversion",
    category: "Ferramentas de cor",
    date: "2026-03-01",
    readTime: "5 min",
    title: "Conversão de cor Hex para RGB: o guia completo",
    description: "Converta códigos de cor hex para RGB, HSL e CMYK. Com um conversor grátis no navegador.",
    content: hexRgbPt,
  },
  fr: {
    slug: "hex-to-rgb-color-conversion",
    category: "Outils de couleur",
    date: "2026-03-01",
    readTime: "5 min",
    title: "Conversion de couleur Hex vers RGB : le guide complet",
    description: "Convertissez les codes couleur hex en RGB, HSL et CMYK. Avec un convertisseur gratuit dans le navigateur.",
    content: hexRgbFr,
  },
  de: {
    slug: "hex-to-rgb-color-conversion",
    category: "Farb-Tools",
    date: "2026-03-01",
    readTime: "5 Min",
    title: "Hex zu RGB Farbumrechnung: der vollständige Leitfaden",
    description: "Rechne Hex-Farbcodes in RGB, HSL und CMYK um. Mit einem kostenlosen Browser-basierten Umrechner.",
    content: hexRgbDe,
  },
};
