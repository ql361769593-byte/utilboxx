// Blog post: How to Generate a QR Code (Free, Customizable)
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const qrCodeEn = `## What is a QR code and why generate one?

A **QR code** (Quick Response code) is a two-dimensional barcode that can store up to 4,296 alphanumeric characters or 7,089 numeric characters. Invented in 1994 by Denso Wave, a Japanese subsidiary of Toyota, QR codes were originally designed to track vehicles during manufacturing. They have since become a universal tool for bridging physical and digital: scanning a printed QR code with a phone camera opens a URL, shows contact details, connects to WiFi, or executes payment flows — no typing required.

You will want to generate QR codes when:

- **Sharing a URL**: Print it on a flyer, business card, or product label. People scan and visit.
- **WiFi access**: A QR code containing your network SSID and password lets guests join without typing.
- **Contact cards (vCard)**: Encode your name, phone, email, and address so people can save it directly to their phone contacts.
- **Email and SMS**: Pre-fill the subject and body of a message, or the destination phone number.
- **Crypto payments**: Bitcoin, Ethereum, and most wallets use QR codes to encode a payment address and amount.
- **Two-factor authentication (TOTP)**: Authenticator apps like Google Authenticator display QR codes to set up 2FA on a new device.
- **App deep links**: Link directly to a screen in your app (e.g., \`myapp://product/123\`).
- **Inventory and ticketing**: A QR code on each item encodes an ID for tracking.

The good news: generating QR codes is free, fast, and private if you use the right tool.

## QR code types and capacity

There are several standards for QR code content:

- **URL**: A simple web address. \`https://example.com\`
- **Text**: Arbitrary text up to ~4,000 characters
- **vCard**: A contact card with name, phone, email, address
- **WiFi**: \`WIFI:T:WPA;S:mynetwork;P:mypassword;;\`
- **Email**: \`mailto:[email protected]?subject=Hello&body=Hi\`
- **SMS**: \`sms:+15551234567?body=Hello\`
- **Phone**: \`tel:+15551234567\`
- **Geo**: \`geo:37.7749,-122.4194\` (latitude, longitude)
- **Crypto**: \`bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.5\`

QR codes also have **error correction levels** that control how much of the code can be damaged before it becomes unreadable:

- **L (Low)**: ~7 % of code can be lost
- **M (Medium)**: ~15 % can be lost
- **Q (Quartile)**: ~25 % can be lost
- **H (High)**: ~30 % can be lost

Higher error correction makes the QR code denser (more squares), but is more resilient. For printing on curved surfaces, outdoor signs, or anything that may get scratched, use Q or H.

## Method 1: Use UtilBoxx's QR Code Generator (Recommended)

The fastest, most private, and most customizable way to generate QR codes in your browser is the [UtilBoxx QR Code Generator](/en/tools/dev/qrcode). It supports URLs, text, WiFi, vCard, email, phone, SMS, geo, and crypto, with full color and size customization, and downloads as PNG or SVG. Everything runs in your browser — no upload, no signup, no log of what you generate.

**How to use it:**

1. Go to [utilboxx.com/en/tools/dev/qrcode](/en/tools/dev/qrcode)
2. Choose your content type: URL, WiFi, vCard, email, etc.
3. Fill in the fields (URL, SSID/password, contact details, etc.)
4. Customize the color, background, size, and error correction
5. Click Generate
6. Download as PNG (for screen) or SVG (for print)

**Why we recommend this method:**

- **100% free**, no signup, no email, no watermarks
- **Privacy-first**: the QR code is generated in your browser. The content never leaves your device. Critical for sensitive QR codes (WiFi passwords, 2FA secrets, crypto addresses).
- **All major types**: URL, WiFi, vCard, email, phone, SMS, geo, crypto
- **Full customization**: foreground color, background color, size, error correction, margin
- **PNG and SVG export**: PNG for screen and web, SVG for print (SVG scales infinitely without quality loss)
- **Works on any device** with a browser

If you generate QR codes even once a month, this tool will pay for itself in saved time and privacy.

## Method 2: python-qrcode library (Python)

Python's \`qrcode\` library (along with \`Pillow\` for image rendering) is the canonical tool for programmatic QR code generation. Install with \`pip install qrcode[pil]\`.

\`\`\`python
import qrcode
from qrcode.constants import ERROR_CORRECT_H

# Simple URL
qr = qrcode.QRCode(
    version=None,            # auto-detect size
    error_correction=ERROR_CORRECT_H,
    box_size=10,             # pixel size of each square
    border=4,                # quiet zone in squares
)
qr.add_data("https://example.com")
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("url_qr.png")

# WiFi QR code
wifi_qr = qrcode.QRCode(box_size=10, border=4)
wifi_qr.add_data("WIFI:T:WPA;S:MyNetwork;P:MyPassword;;")
wifi = wifi_qr.make_image()
wifi.save("wifi_qr.png")

# vCard
vcard = """BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
ORG:UtilBoxx
TEL:+15551234567
EMAIL:[email protected]
URL:https://example.com
END:VCARD"""
vcard_qr = qrcode.QRCode(box_size=8, border=2)
vcard_qr.add_data(vcard)
vcard_img = vcard_qr.make_image()
vcard_img.save("vcard_qr.png")

# SVG output (for print)
from qrcode.image.svg import SvgPathImage
svg_qr = qrcode.QRCode(box_size=10, border=4)
svg_qr.add_data("https://example.com")
svg_img = svg_qr.make_image(image_factory=SvgPathImage)
with open("url_qr.svg", "wb") as f:
    svg_img.save(f)
\`\`\`

For batch generation (say, 1,000 inventory tags), a small script with \`qrcode\` and a CSV of IDs produces all the files in seconds.

## Method 3: CLI with qrencode (Linux/macOS)

The \`qrencode\` command-line tool is a fast, scriptable way to generate QR codes. Install with Homebrew on macOS (\`brew install qrencode\`) or apt on Linux (\`sudo apt install qrencode\`).

\`\`\`bash
# Generate a QR code for a URL
qrencode -o url.png "https://example.com"

# Generate with higher error correction
qrencode -o url.png -l H "https://example.com"

# Generate as SVG (for print, scales infinitely)
qrencode -o url.svg -t SVG "https://example.com"

# Generate as ANSI text (for terminal display!)
qrencode -t ANSI "https://example.com"

# Generate as UTF-8 text (for nicer terminal output)
qrencode -t UTF8 "https://example.com"

# WiFi QR
qrencode -o wifi.png "WIFI:T:WPA;S:MyNetwork;P:MyPassword;;"

# vCard
qrencode -o vcard.png "BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
TEL:+15551234567
END:VCARD"
\`\`\`

\`qrencode\` is the fastest path for one-off QR generation in a shell session, and ideal for scripts that need to embed QR codes in pipelines. The \`-t ANSI\` mode lets you print QR codes directly in the terminal, which is a fun trick for sharing without a GUI.

## Method 4: Online tools (other than UtilBoxx)

There are many other online QR code generators — most of them work, but with caveats:

- **Some upload your data**: If you scan a WiFi QR, the SSID and password are sensitive. Make sure the tool processes locally (UtilBoxx does) or has a clear privacy policy.
- **Some add watermarks**: Free tiers often add a small logo or branded border. Read the fine print.
- **Some limit features**: Customization, types, and error correction may be behind a paywall.
- **Some have ads**: Popup ads, redirect ads, and tracking pixels are common.

When in doubt, prefer a privacy-respecting tool that processes in the browser. UtilBoxx's QR generator is built on \`qrcode\` and runs the entire pipeline client-side.

## Common questions

### How much data can a QR code hold?

The maximum is **4,296 alphanumeric characters** or **7,089 numeric characters** or **2,953 binary bytes** at the lowest error correction level. In practice, QR codes work best with short data — long URLs become dense and harder to scan. For content over ~300 characters, consider a shortened URL (via a service like bit.ly) or a different code type (Data Matrix, PDF417, Aztec).

### What is the difference between a static and dynamic QR code?

A **static** QR code encodes a fixed URL or content. It cannot be changed after generation. A **dynamic** QR code points to a redirect service that you control: scan it once and the URL never changes, but you can update where it redirects. Dynamic codes require a paid service and have a privacy cost (the redirect service logs every scan). For privacy, prefer static codes.

### Are QR codes a security risk?

Yes, in a few specific ways:

- **Quishing (QR phishing)**: A malicious QR code can lead to a phishing site. Always preview the URL before opening it.
- **Drive-by malware**: A QR code can link to a malicious APK or .exe download. Don't scan codes from untrusted sources.
- **WiFi sharing**: If you generate a QR code for your home WiFi and post it publicly, anyone can join your network. Use guest networks with limited access for shared QR codes.
- **Payment redirection**: Crypto address substitution attacks generate QR codes for the attacker's wallet. Always verify the address character by character before sending.

The QR code itself is just a square. The risk is the URL or action it triggers.

### What is the best size for a printed QR code?

A common rule of thumb: the QR code should be at least **1 cm (0.4 in) wide per 10 characters of data**, with a minimum of **2 cm × 2 cm (0.8 in × 0.8 in)**. For most QR codes (~50 characters), 2 cm is enough. For dense codes (~500 characters), aim for 4-5 cm. Always include a "quiet zone" of at least 4 empty squares around the code — most tools add this by default.

For distance scanning, multiply by the expected distance: a code meant to be scanned from 1 meter should be at least 2.5 cm wide.

### Can QR codes be styled or branded?

Yes, but with care. The three finder patterns (the large squares in three corners) must remain perfectly intact and high-contrast against the background. You can:

- **Change the color** of the data modules (foreground) and background
- **Add a logo in the center** (use higher error correction Q or H to compensate for the obscured data)
- **Round the module corners** for a modern look
- **Add a frame** with text below the code

Do not:
- Invert colors (light on dark is hard for some scanners)
- Add gradients (most scanners can read them, but some cannot)
- Place text or graphics over the data modules
- Distort the square aspect ratio

### What is the smallest scannable QR code?

The minimum practical size is about **1 cm × 1 cm** for short data and good lighting. Smaller codes (down to a few millimeters) are possible with high-resolution printing and high-contrast ink, but most phone cameras struggle. For most uses, 2-3 cm is the practical floor.

## Conclusion

QR codes are the universal bridge between physical and digital. They are free to generate, free to scan (every phone has a built-in scanner), and support dozens of content types from URLs to WiFi credentials to crypto payments. The right tool matters: privacy-respecting tools run entirely in your browser, while others upload your data to remote servers.

For occasional generation, the [UtilBoxx QR Code Generator](/en/tools/dev/qrcode) is private, free, and produces high-quality PNG and SVG output with full customization. For batch work, Python's \`qrcode\` library or the \`qrencode\` CLI handle thousands of codes without leaving your terminal. And for one-offs, an online tool works as long as you trust it with your data.

A quick design tip: keep the contrast high (black on white is the gold standard), add a quiet zone, and use error correction H if you plan to overlay a logo. Your QR code will scan reliably on the first try.`;

const qrCodeZh = `## 什么是 QR 码，为什么要生成它？

**QR 码**（Quick Response code，快速响应码）是一种二维条码，可以存储多达 4,296 个字母数字字符或 7,089 个数字字符。1994 年由丰田的日本子公司电装波（Denso Wave）发明，QR 码最初设计用于在制造过程中追踪车辆。它们后来成为连接物理和数字的通用工具：用手机摄像头扫描打印的 QR 码，可以打开网址、显示联系人详细信息、连接 WiFi，或执行支付流程 —— 无需输入。

你会在以下场景需要生成 QR 码：

- **分享链接**：把它打印在传单、名片或产品标签上。人们扫描访问。
- **WiFi 接入**：包含你的网络 SSID 和密码的 QR 码让客人无需输入即可加入。
- **联系人卡片（vCard）**：编码你的姓名、电话、邮箱和地址，让人们可以直接保存到手机通讯录。
- **电子邮件和短信**：预填邮件主题和正文，或目标电话号码。
- **加密货币支付**：比特币、以太坊和大多数钱包使用 QR 码编码支付地址和金额。
- **双因素认证（TOTP）**：Google Authenticator 等认证器应用通过显示 QR 码在新设备上设置 2FA。
- **应用深度链接**：直接链接到你应用中的某个屏幕（例如 \`myapp://product/123\`）。
- **库存和票务**：每个项目上的 QR 码编码一个 ID 用于追踪。

好消息是：只要用对工具，生成 QR 码是免费、快速且私密的。

## QR 码类型和容量

QR 码内容有几种标准：

- **网址**：一个简单的网址。\`https://example.com\`
- **文本**：最多约 4,000 字符的任意文本
- **vCard**：包含姓名、电话、邮箱、地址的联系人卡片
- **WiFi**：\`WIFI:T:WPA;S:mynetwork;P:mypassword;;\`
- **电子邮件**：\`mailto:[email protected]?subject=Hello&body=Hi\`
- **短信**：\`sms:+15551234567?body=Hello\`
- **电话**：\`tel:+15551234567\`
- **地理**：\`geo:37.7749,-122.4194\`（纬度，经度）
- **加密货币**：\`bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.5\`

QR 码还有**纠错级别**，控制代码在被破坏到无法读取之前可以损失多少：

- **L（低）**：约 7% 的代码可以丢失
- **M（中）**：约 15% 可以丢失
- **Q（四分之一）**：约 25% 可以丢失
- **H（高）**：约 30% 可以丢失

更高的纠错使 QR 码更密集（更多方块），但更具弹性。对于打印在曲面上、户外标志或任何可能被划伤的物品上，使用 Q 或 H。

## 方法一：使用 UtilBoxx QR 码生成器（推荐）

在浏览器中生成 QR 码最快、最私密、最可定制的方式是 [UtilBoxx QR 码生成器](/zh/tools/dev/qrcode)。它支持 URL、文本、WiFi、vCard、邮件、电话、短信、地理和加密货币，可完全自定义颜色和大小，并可下载为 PNG 或 SVG。所有处理在浏览器本地完成 —— 没有上传、没有注册、不会记录你生成的内容。

**使用方法：**

1. 打开 [utilboxx.com/zh/tools/dev/qrcode](/zh/tools/dev/qrcode)
2. 选择你的内容类型：URL、WiFi、vCard、邮件等
3. 填写字段（URL、SSID/密码、联系人详细信息等）
4. 自定义颜色、背景、大小和纠错
5. 点击"生成"
6. 下载为 PNG（用于屏幕）或 SVG（用于打印）

**为什么推荐这个方法：**

- **100% 免费**，无注册、无邮箱、无水印
- **隐私优先**：QR 码在浏览器中生成。内容永远不离开你的设备。对敏感 QR 码（WiFi 密码、2FA 密钥、加密货币地址）至关重要。
- **所有主要类型**：URL、WiFi、vCard、邮件、电话、短信、地理、加密货币
- **完全可定制**：前景色、背景色、大小、纠错、边距
- **PNG 和 SVG 导出**：PNG 用于屏幕和网页，SVG 用于打印（SVG 无限缩放而不失真）
- **任何有浏览器的设备都能用**

如果你每月生成一次以上的 QR 码，这个工具能在节省时间和保护隐私上值回票价。

## 方法二：python-qrcode 库（Python）

Python 的 \`qrcode\` 库（配合用于图像渲染的 \`Pillow\`）是编程生成 QR 码的规范工具。用 \`pip install qrcode[pil]\` 安装。

\`\`\`python
import qrcode
from qrcode.constants import ERROR_CORRECT_H

# 简单 URL
qr = qrcode.QRCode(
    version=None,            # 自动检测大小
    error_correction=ERROR_CORRECT_H,
    box_size=10,             # 每个方块的像素大小
    border=4,                # 静默区方块数
)
qr.add_data("https://example.com")
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("url_qr.png")

# WiFi QR 码
wifi_qr = qrcode.QRCode(box_size=10, border=4)
wifi_qr.add_data("WIFI:T:WPA;S:MyNetwork;P:MyPassword;;")
wifi = wifi_qr.make_image()
wifi.save("wifi_qr.png")

# vCard
vcard = """BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
ORG:UtilBoxx
TEL:+15551234567
EMAIL:[email protected]
URL:https://example.com
END:VCARD"""
vcard_qr = qrcode.QRCode(box_size=8, border=2)
vcard_qr.add_data(vcard)
vcard_img = vcard_qr.make_image()
vcard_img.save("vcard_qr.png")

# SVG 输出（用于打印）
from qrcode.image.svg import SvgPathImage
svg_qr = qrcode.QRCode(box_size=10, border=4)
svg_qr.add_data("https://example.com")
svg_img = svg_qr.make_image(image_factory=SvgPathImage)
with open("url_qr.svg", "wb") as f:
    svg_img.save(f)
\`\`\`

要批量生成（例如 1,000 个库存标签），一个带 \`qrcode\` 和 ID CSV 的小脚本能在几秒内生成所有文件。

## 方法三：命令行 qrencode（Linux/macOS）

\`qrencode\` 命令行工具是生成 QR 码的快速、可脚本化方式。macOS 上用 Homebrew 安装（\`brew install qrencode\`），Linux 上用 apt（\`sudo apt install qrencode\`）。

\`\`\`bash
# 为 URL 生成 QR 码
qrencode -o url.png "https://example.com"

# 使用更高纠错生成
qrencode -o url.png -l H "https://example.com"

# 生成 SVG（用于打印，无限缩放）
qrencode -o url.svg -t SVG "https://example.com"

# 生成 ANSI 文本（用于终端显示！）
qrencode -t ANSI "https://example.com"

# 生成 UTF-8 文本（更好的终端输出）
qrencode -t UTF8 "https://example.com"

# WiFi QR
qrencode -o wifi.png "WIFI:T:WPA;S:MyNetwork;P:MyPassword;;"

# vCard
qrencode -o vcard.png "BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
TEL:+15551234567
END:VCARD"
\`\`\`

\`qrencode\` 是 shell 会话中一次性 QR 生成的最快路径，也适合在流水线中嵌入 QR 码的脚本。\`-t ANSI\` 模式让你可以直接在终端打印 QR 码，这是一个无需 GUI 就能分享的有趣技巧。

## 方法四：在线工具（UtilBoxx 之外）

还有许多其他在线 QR 码生成器 —— 大多数都能用，但有一些注意事项：

- **有些会上传你的数据**：如果你扫描 WiFi QR，SSID 和密码是敏感的。确保工具本地处理（UtilBoxx 就是）或有明确的隐私政策。
- **有些会加水印**：免费版通常会添加小标志或品牌边框。请阅读细则。
- **有些限制功能**：自定义、类型和纠错可能藏在付费墙后。
- **有些有广告**：弹窗广告、重定向广告和追踪像素很常见。

当有疑问时，优先选择尊重隐私、浏览器内处理的工具。UtilBoxx 的 QR 生成器基于 \`qrcode\` 构建，整个流水线在客户端运行。

## 常见问题

### QR 码能容纳多少数据？

最大是 **4,296 个字母数字字符**或 **7,089 个数字字符**或 **2,953 个二进制字节**（在最低纠错级别下）。实际上，QR 码最适合短数据 —— 长 URL 变得密集且难以扫描。对于超过约 300 字符的内容，考虑使用缩短的 URL（通过 bit.ly 等服务）或不同的码类型（Data Matrix、PDF417、Aztec）。

### 静态和动态 QR 码有什么区别？

**静态**QR 码编码固定的 URL 或内容。生成后无法更改。**动态**QR 码指向您控制的重定向服务：扫描一次后 URL 永远不会变，但您可以更新它重定向的位置。动态码需要付费服务，并有隐私成本（重定向服务记录每次扫描）。出于隐私考虑，优先选择静态码。

### QR 码是安全风险吗？

是的，在几个特定方面：

- **Quishing（QR 钓鱼）**：恶意 QR 码可以导向钓鱼网站。打开之前始终预览 URL。
- **路过式恶意软件**：QR 码可以链接到恶意 APK 或 .exe 下载。不要扫描来自不可信来源的码。
- **WiFi 共享**：如果你为家庭 WiFi 生成 QR 码并公开发布，任何人都可以加入你的网络。对共享的 QR 码使用有访问限制的访客网络。
- **支付重定向**：加密货币地址替换攻击为攻击者的钱包生成 QR 码。发送前始终逐字符验证地址。

QR 码本身只是一个方块。风险在于它触发的 URL 或操作。

### 打印 QR 码的最佳尺寸是多少？

一个常用的经验法则：QR 码宽度应至少为**每 10 个数据字符 1 厘米（0.4 英寸）**，最小为 **2 cm × 2 cm（0.8 in × 0.8 in）**。对于大多数 QR 码（约 50 个字符），2 厘米就足够了。对于密集的码（约 500 个字符），目标是 4-5 厘米。始终在码周围包含至少 4 个空白方块的"静默区" —— 大多数工具默认添加。

对于远距离扫描，按预期距离乘以系数：打算从 1 米处扫描的码应至少 2.5 厘米宽。

### QR 码可以样式化或品牌化吗？

可以，但需要小心。三个定位图案（三个角上的大方块）必须保持完整且与背景高对比度。你可以：

- **更改数据模块（前景）和背景的颜色**
- **在中心添加 logo**（使用更高纠错 Q 或 H 来补偿被遮挡的数据）
- **圆角化模块**以获得现代外观
- **在码下方添加带文字的边框**

不要：

- 反转颜色（某些扫描器难以读取浅色深背景）
- 添加渐变（大多数扫描器可以读取，但有些不能）
- 在数据模块上放置文字或图形
- 扭曲方形宽高比

### 最小可扫描的 QR 码是多少？

最小实际尺寸约为短数据和良好光照下的 **1 cm × 1 cm**。更小的码（低至几毫米）在高分辨率打印和高对比度油墨下是可能的，但大多数手机摄像头有困难。对于大多数用途，2-3 厘米是实际下限。

## 结论

QR 码是物理和数字之间的通用桥梁。生成免费，扫描免费（每部手机都有内置扫描器），并支持从 URL 到 WiFi 凭据再到加密货币支付的数十种内容类型。正确的工具很重要：尊重隐私的工具完全在浏览器中运行，而其他的则将你的数据上传到远程服务器。

偶尔生成的话，[UtilBoxx QR 码生成器](/zh/tools/dev/qrcode) 私密、免费，并生成具有完全自定义功能的高质量 PNG 和 SVG 输出。批量工作用 Python 的 \`qrcode\` 库或 \`qrencode\` CLI 可以处理成千上万的码而不离开终端。一次性的情况下，在线工具也行，只要你信任它处理你的数据。

一个快速的设计提示：保持高对比度（黑底白底是黄金标准），添加静默区，如果你打算叠加 logo 则使用纠错 H。你的 QR 码将在第一次就可靠地扫描。`;

const qrCodeJa = `## QR コードとは何ですか？なぜ生成するのですか？

**QR コード**（Quick Response code）は、最大 4,296 個の英数字または 7,089 個の数字を格納できる二次元バーコードです。1994 年にトヨタの日本の子会社であるデンソーウェーブによって発明され、製造中に車両を追跡するために元々設計されました。それ以来、物理とデジタルを橋渡しする普遍的なツールとなり、印刷された QR コードを phone カメラでスキャンすると、URL を開いたり、連絡先詳細を表示したり、WiFi に接続したり、決済フローを実行したりできます — 入力は不要です。

QR コードを生成したい場面：

- **URL の共有**：チラシ、名刺、製品ラベルに印刷。人々がスキャンしてアクセス。
- **WiFi アクセス**：ネットワーク SSID とパスワードを含む QR コードで、ゲストが入力せずに参加できる。
- **連絡先カード（vCard）**：名前、電話、メールアドレス、住所をエンコードし、人々が直接 phone の連絡先に保存できるようにする。
- **メールと SMS**：メッセージの件名と本文、または宛先電話番号を事前入力。
- **暗号通貨決済**：Bitcoin、Ethereum、ほとんどのウォレットは QR コードを使用して決済アドレスと金額をエンコードする。
- **二要素認証（TOTP）**：Google Authenticator などの認証アプリは、新しいデバイスで 2FA を設定するために QR コードを表示する。
- **アプリのディープリンク**：アプリの特定の画面にリンク（例：\`myapp://product/123\`）。
- **在庫とチケット**：各アイテムの QR コードが追跡用の ID をエンコードする。

朗報です：適切なツールを使えば、QR コードの生成は無料で、迅速で、プライベートです。

## QR コードの種類と容量

QR コードコンテンツにはいくつかの標準があります：

- **URL**：単純なウェブアドレス。\`https://example.com\`
- **テキスト**：最大約 4,000 文字の任意のテキスト
- **vCard**：名前、電話、メール、住所を含む連絡先カード
- **WiFi**：\`WIFI:T:WPA;S:mynetwork;P:mypassword;;\`
- **メール**：\`mailto:[email protected]?subject=Hello&body=Hi\`
- **SMS**：\`sms:+15551234567?body=Hello\`
- **電話**：\`tel:+15551234567\`
- **地理**：\`geo:37.7749,-122.4194\`（緯度、経度）
- **暗号通貨**：\`bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.5\`

QR コードには**エラー訂正レベル**もあり、コードが読めなくなるまでにどれだけの損傷が許容されるかを制御します：

- **L（低）**：コードの約 7% を失える
- **M（中）**：約 15% を失える
- **Q（四分位）**：約 25% を失える
- **H（高）**：約 30% を失える

より高いエラー訂正は QR コードをより密集させますが（より多くの正方形）、より弾力的です。曲面、屋外サイ、または傷がつく可能性のあるものへの印刷には、Q または H を使用してください。

## 方法 1：UtilBoxx QR コード生成器（推奨）

ブラウザで QR コードを生成する最も速く、最もプライベートで、最もカスタマイズ可能な方法は [UtilBoxx QR コード生成器](/ja/tools/dev/qrcode) です。URL、テキスト、WiFi、vCard、メール、電話、SMS、地理、暗号通貨をサポートし、完全な色とサイズカスタマイズが可能で、PNG または SVG としてダウンロードできます。すべてブラウザ内で実行されます。アップロードなし、登録なし、生成内容のログなし。

**使い方：**

1. [utilboxx.com/ja/tools/dev/qrcode](/ja/tools/dev/qrcode) を開く
2. コンテンツタイプを選択：URL、WiFi、vCard、メールなど
3. フィールドを入力（URL、SSID/パスワード、連絡先詳細など）
4. 色、背景、サイズ、エラー訂正をカスタマイズ
5. 生成をクリック
6. PNG（画面用）または SVG（印刷用）としてダウンロード

**この方法を推奨する理由：**

- **100% 無料**、登録不要、メールアドレス不要、透かしなし
- **プライバシー最優先**：QR コードはブラウザで生成されます。コンテンツはあなたのデバイスを離れません。機密性の高い QR コード（WiFi パスワード、2FA シークレット、暗号通貨アドレス）に重要です。
- **すべての主要な種類**：URL、WiFi、vCard、メール、電話、SMS、地理、暗号通貨
- **完全なカスタマイズ**：前景色、背景色、サイズ、エラー訂正、マージン
- **PNG と SVG エクスポート**：PNG は画面とウェブ用、SVG は印刷用（SVG は無限に拡大しても品質が劣化しない）
- **ブラウザがあるあらゆるデバイスで動作**

月に 1 回でも QR コードを生成するなら、このツールは時間の節約とプライバシーの両方で元が取れます。

## 方法 2：python-qrcode ライブラリ（Python）

Python の \`qrcode\` ライブラリ（画像レンダリング用の \`Pillow\` 付き）は、プログラムによる QR コード生成の正規ツールです。\`pip install qrcode[pil]\` でインストールします。

\`\`\`python
import qrcode
from qrcode.constants import ERROR_CORRECT_H

# シンプルな URL
qr = qrcode.QRCode(
    version=None,            # サイズを自動検出
    error_correction=ERROR_CORRECT_H,
    box_size=10,             # 各正方形のピクセルサイズ
    border=4,                # 静粛ゾーンの正方形数
)
qr.add_data("https://example.com")
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("url_qr.png")

# WiFi QR コード
wifi_qr = qrcode.QRCode(box_size=10, border=4)
wifi_qr.add_data("WIFI:T:WPA;S:MyNetwork;P:MyPassword;;")
wifi = wifi_qr.make_image()
wifi.save("wifi_qr.png")

# vCard
vcard = """BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
ORG:UtilBoxx
TEL:+15551234567
EMAIL:[email protected]
URL:https://example.com
END:VCARD"""
vcard_qr = qrcode.QRCode(box_size=8, border=2)
vcard_qr.add_data(vcard)
vcard_img = vcard_qr.make_image()
vcard_img.save("vcard_qr.png")

# SVG 出力（印刷用）
from qrcode.image.svg import SvgPathImage
svg_qr = qrcode.QRCode(box_size=10, border=4)
svg_qr.add_data("https://example.com")
svg_img = svg_qr.make_image(image_factory=SvgPathImage)
with open("url_qr.svg", "wb") as f:
    svg_img.save(f)
\`\`\`

バッチ生成（例えば 1,000 個の在庫タグ）には、\`qrcode\` と ID の CSV を使用する小さなスクリプトで、すべてのファイルが数秒で生成されます。

## 方法 3：コマンドラインで qrencode（Linux/macOS）

\`qrencode\` コマンドラインツールは、QR コードを生成するための高速でスクリプト可能な方法です。macOS では Homebrew でインストール（\`brew install qrencode\`）、Linux では apt（\`sudo apt install qrencode\`）。

\`\`\`bash
# URL の QR コードを生成
qrencode -o url.png "https://example.com"

# より高いエラー訂正で生成
qrencode -o url.png -l H "https://example.com"

# SVG として生成（印刷用、無限にスケール）
qrencode -o url.svg -t SVG "https://example.com"

# ANSI テキストとして生成（端末表示用！）
qrencode -t ANSI "https://example.com"

# UTF-8 テキストとして生成（よりきれいな端末出力）
qrencode -t UTF8 "https://example.com"

# WiFi QR
qrencode -o wifi.png "WIFI:T:WPA;S:MyNetwork;P:MyPassword;;"

# vCard
qrencode -o vcard.png "BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
TEL:+15551234567
END:VCARD"
\`\`\`

\`qrencode\` はシェルセッションでの単発 QR 生成の最速パスであり、パイプラインに QR コードを埋め込むスクリプトに理想的です。\`-t ANSI\` モードを使うと、QR コードを端末に直接印刷でき、GUI なしで共有できる楽しいトリックです。

## 方法 4：オンラインツール（UtilBoxx 以外）

他の多くのオンライン QR コード生成器があります — ほとんどは動作しますが、注意点があります：

- **一部はあなたのデータをアップロードします**：WiFi QR をスキャンする場合、SSID とパスワードは機密性が高いです。ツールがローカルで処理すること（UtilBoxx はそう）または明確なプライバシーポリシーを持っていることを確認してください。
- **一部は透かしを追加します**：無料版はしばしば小さなロゴやブランドの境界線を追加します。細則を読んでください。
- **一部は機能を制限します**：カスタマイズ、種類、エラー訂正は有料壁の背後にあるかもしれません。
- **一部は広告があります**：ポップアップ広告、リダイレクト広告、トラッキングピクセルが一般的です。

疑わしい場合は、ブラウザで処理するプライバシーを尊重するツールを優先してください。UtilBoxx の QR 生成器は \`qrcode\` に基づいて構築され、パイプライン全体をクライアントサイドで実行します。

## よくある質問

### QR コードはどれだけのデータを保持できますか？

最大は最低エラー訂正レベルで **4,296 個の英数字**、**7,089 個の数字**、または **2,953 バイトのバイナリ**です。実際には、QR コードは短いデータで最もよく機能します — 長い URL は密集してスキャンしにくくなります。約 300 文字を超えるコンテンツについては、短い URL（bit.ly などのサービス経由）または別のコードタイプ（Data Matrix、PDF417、Aztec）の使用を検討してください。

### 静的 QR コードと動的 QR コードの違いは何ですか？

**静的**QR コードは固定された URL またはコンテンツをエンコードします。生成後に変更できません。**動的**QR コードは、制御するリダイレクトサービスを示します。一度スキャンすると URL は決して変わりませんが、リダイレクト先を更新できます。動的コードは有料サービスが必要で、プライバシーのコストがあります（リダイレクトサービスはすべてのスキャンをログに記録します）。プライバシーのためには、静的コードを優先してください。

### QR コードはセキュリティリスクですか？

いくつかの特定の方法で、はい：

- **Quishing（QR フィッシング）**：悪意のある QR コードはフィッシングサイトに導くことができます。開く前に常に URL をプレビューしてください。
- **ドライブバイマルウェア**：QR コードは悪意のある APK や .exe ダウンロードにリンクできます。信頼できないソースからのコードをスキャンしないでください。
- **WiFi 共有**：ホーム WiFi 用に QR コードを生成して公開すると、誰でもあなたのネットワークに参加できます。共有 QR コードにはアクセス制限のあるゲストネットワークを使用してください。
- **支払いリダイレクト**：暗号通貨アドレス置換攻撃は攻撃者のウォレット用の QR コードを生成します。送信前に常にアドレスを 1 文字ずつ検証してください。

QR コード自体はその square に過ぎません。リスクはそれがトリガーする URL またはアクションです。

### 印刷された QR コードの最適なサイズは？

一般的な経験則：QR コードの幅は**データ 10 文字あたり少なくとも 1 cm（0.4 インチ）**、最小 **2 cm × 2 cm（0.8 in × 0.8 in）** である必要があります。ほとんどの QR コード（約 50 文字）には 2 cm で十分です。密集したコード（約 500 文字）には 4-5 cm を目指します。常にコードの周囲に少なくとも 4 つの空白正方形の「静粛ゾーン」を含めてください — ほとんどのツールはデフォルトでこれを追加します。

距離スキャン用には、期待される距離で掛けます：1 メートルからスキャンされる予定のコードは少なくとも 2.5 cm 幅である必要があります。

### QR コードをスタイルしたりブランディングしたりできますか？

はい、ただし注意が必要です。3 つのファインダーパターン（3 つの角にある大きな正方形）は完全で背景と高コントラストのままである必要があります。以下ができます：

- **データモジュール（前景）と背景の色を変更**
- **中央にロゴを追加**（隠されたデータを補うため、より高いエラー訂正 Q または H を使用）
- **モジュールの角を丸める**モダンな外観のため
- **コードの下にテキスト付きのフレームを追加**

しないでください：

- 色を反転する（一部のスキャナは暗い背景に明るい色を読みにくい）
- グラデーションを追加する（ほとんどのスキャナは読み取れるが、一部は読めない）
- データモジュール上にテキストやグラフィックスを配置する
- 正方形の縦横比を歪める

### 最小のスキャン可能な QR コードは？

実用上の最小サイズは、短いデータと良好な照明で約 **1 cm × 1 cm** です。より小さなコード（数ミリまで）は高解像度印刷と高コントラストインクで可能ですが、ほとんどの phone カメラは苦労します。ほとんどの用途では、2-3 cm が実際的な下限です。

## まとめ

QR コードは物理とデジタルの間の普遍的なブリッジです。生成は無料で、スキャンも無料で（すべての phone にスキャナが組み込まれています）、URL から WiFi 認証情報、暗号通貨支払いまで何十ものコンテンツタイプをサポートします。適切なツールが重要です：プライバシーを尊重するツールはブラウザ内で完全に動作しますが、他のツールはあなたのデータをリモートサーバーにアップロードします。

たまに生成するなら、[UtilBoxx QR コード生成器](/ja/tools/dev/qrcode) はプライベートで、無料で、完全なカスタマイズを備えた高品質な PNG と SVG 出力を生成します。バッチ作業には Python の \`qrcode\` ライブラリまたは \`qrencode\` CLI が、ターミナルから出ずに何千ものコードを処理できます。単発の場合は、あなたがデータを信頼する限りオンラインツールが機能します。

簡単なデザインのヒント：高コントラストを保ち（黒地に白がゴールドスタンダード）、静粛ゾーンを追加し、ロゴをオーバーレイする予定がある場合はエラー訂正 H を使用します。あなたの QR コードは最初の試行で確実にスキャンされます。`;

const qrCodeEs = `## ¿Qué es un código QR y por qué generar uno?

Un **código QR** (código de respuesta rápida) es un código de barras bidimensional que puede almacenar hasta 4.296 caracteres alfanuméricos o 7.089 caracteres numéricos. Inventado en 1994 por Denso Wave, una subsidiaria japonesa de Toyota, los códigos QR se diseñaron originalmente para rastrear vehículos durante la fabricación. Desde entonces se han convertido en una herramienta universal para conectar lo físico y lo digital: escanear un código QR impreso con la cámara del teléfono abre una URL, muestra datos de contacto, se conecta a WiFi, o ejecuta flujos de pago — sin escribir nada.

Querrás generar códigos QR cuando:

- **Compartas una URL**: Imprímela en un folleto, tarjeta de presentación o etiqueta de producto. La gente escanea y visita.
- **Acceso WiFi**: Un código QR que contiene el SSID y la contraseña de tu red permite a los invitados unirse sin escribir.
- **Tarjetas de contacto (vCard)**: Codifica tu nombre, teléfono, email y dirección para que la gente pueda guardarlos directamente en los contactos de su teléfono.
- **Email y SMS**: Pre-rellena el asunto y cuerpo de un mensaje, o el número de teléfono de destino.
- **Pagos con criptomonedas**: Bitcoin, Ethereum y la mayoría de las wallets usan códigos QR para codificar una dirección de pago y un monto.
- **Autenticación de dos factores (TOTP)**: Aplicaciones de autenticación como Google Authenticator muestran códigos QR para configurar 2FA en un nuevo dispositivo.
- **Enlaces profundos de apps**: Enlaza directamente a una pantalla en tu app (p. ej., \`myapp://product/123\`).
- **Inventario y entradas**: Un código QR en cada artículo codifica un ID para seguimiento.

La buena noticia: generar códigos QR es gratis, rápido y privado si usas la herramienta adecuada.

## Tipos y capacidad de códigos QR

Hay varios estándares para el contenido del código QR:

- **URL**: Una dirección web simple. \`https://example.com\`
- **Texto**: Texto arbitrario hasta ~4.000 caracteres
- **vCard**: Una tarjeta de contacto con nombre, teléfono, email, dirección
- **WiFi**: \`WIFI:T:WPA;S:mynetwork;P:mypassword;;\`
- **Email**: \`mailto:[email protected]?subject=Hello&body=Hi\`
- **SMS**: \`sms:+15551234567?body=Hello\`
- **Teléfono**: \`tel:+15551234567\`
- **Geo**: \`geo:37.7749,-122.4194\` (latitud, longitud)
- **Criptomonedas**: \`bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.5\`

Los códigos QR también tienen **niveles de corrección de errores** que controlan cuánto del código puede dañarse antes de volverse ilegible:

- **L (Bajo)**: ~7 % del código puede perderse
- **M (Medio)**: ~15 % puede perderse
- **Q (Cuartil)**: ~25 % puede perderse
- **H (Alto)**: ~30 % puede perderse

Mayor corrección de errores hace que el código QR sea más denso (más cuadrados), pero más resiliente. Para imprimir en superficies curvas, señales al aire libre o cualquier cosa que pueda rayarse, use Q o H.

## Método 1: Use el generador de códigos QR de UtilBoxx (Recomendado)

La forma más rápida, privada y personalizable de generar códigos QR en el navegador es el [Generador de Códigos QR de UtilBoxx](/es/tools/dev/qrcode). Soporta URLs, texto, WiFi, vCard, email, teléfono, SMS, geo y criptomonedas, con personalización completa de color y tamaño, y descarga como PNG o SVG. Todo se ejecuta en su navegador: sin carga, sin registro, sin registro de lo que genera.

**Cómo usarlo:**

1. Vaya a [utilboxx.com/es/tools/dev/qrcode](/es/tools/dev/qrcode)
2. Elija su tipo de contenido: URL, WiFi, vCard, email, etc.
3. Rellene los campos (URL, SSID/contraseña, datos de contacto, etc.)
4. Personalice el color, fondo, tamaño y corrección de errores
5. Haga clic en Generar
6. Descargue como PNG (para pantalla) o SVG (para impresión)

**Por qué recomendamos este método:**

- **100 % gratis**, sin registro, sin email, sin marcas de agua
- **Privacidad primero**: el código QR se genera en su navegador. El contenido nunca sale de su dispositivo. Crítico para códigos QR sensibles (contraseñas WiFi, secretos 2FA, direcciones de criptomonedas).
- **Todos los tipos principales**: URL, WiFi, vCard, email, teléfono, SMS, geo, criptomonedas
- **Personalización completa**: color de primer plano, color de fondo, tamaño, corrección de errores, margen
- **Exportación PNG y SVG**: PNG para pantalla y web, SVG para impresión (SVG escala infinitamente sin pérdida de calidad)
- **Funciona en cualquier dispositivo** con navegador

Si genera códigos QR aunque sea una vez al mes, esta herramienta se amortiza en tiempo ahorrado y privacidad.

## Método 2: biblioteca python-qrcode (Python)

La biblioteca \`qrcode\` de Python (junto con \`Pillow\` para renderizado de imágenes) es la herramienta canónica para generación programática de códigos QR. Instale con \`pip install qrcode[pil]\`.

\`\`\`python
import qrcode
from qrcode.constants import ERROR_CORRECT_H

# URL simple
qr = qrcode.QRCode(
    version=None,            # detectar tamaño automáticamente
    error_correction=ERROR_CORRECT_H,
    box_size=10,             # tamaño de píxel de cada cuadrado
    border=4,                # zona de silencio en cuadrados
)
qr.add_data("https://example.com")
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("url_qr.png")

# Código QR WiFi
wifi_qr = qrcode.QRCode(box_size=10, border=4)
wifi_qr.add_data("WIFI:T:WPA;S:MyNetwork;P:MyPassword;;")
wifi = wifi_qr.make_image()
wifi.save("wifi_qr.png")

# vCard
vcard = """BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
ORG:UtilBoxx
TEL:+15551234567
EMAIL:[email protected]
URL:https://example.com
END:VCARD"""
vcard_qr = qrcode.QRCode(box_size=8, border=2)
vcard_qr.add_data(vcard)
vcard_img = vcard_qr.make_image()
vcard_img.save("vcard_qr.png")

# Salida SVG (para impresión)
from qrcode.image.svg import SvgPathImage
svg_qr = qrcode.QRCode(box_size=10, border=4)
svg_qr.add_data("https://example.com")
svg_img = svg_qr.make_image(image_factory=SvgPathImage)
with open("url_qr.svg", "wb") as f:
    svg_img.save(f)
\`\`\`

Para generación por lotes (digamos, 1.000 etiquetas de inventario), un pequeño script con \`qrcode\` y un CSV de IDs produce todos los archivos en segundos.

## Método 3: CLI con qrencode (Linux/macOS)

La herramienta de línea de comandos \`qrencode\` es una forma rápida y scriptable de generar códigos QR. Instale con Homebrew en macOS (\`brew install qrencode\`) o apt en Linux (\`sudo apt install qrencode\`).

\`\`\`bash
# Generar un código QR para una URL
qrencode -o url.png "https://example.com"

# Generar con mayor corrección de errores
qrencode -o url.png -l H "https://example.com"

# Generar como SVG (para impresión, escala infinitamente)
qrencode -o url.svg -t SVG "https://example.com"

# Generar como texto ANSI (¡para mostrar en terminal!)
qrencode -t ANSI "https://example.com"

# Generar como texto UTF-8 (mejor salida en terminal)
qrencode -t UTF8 "https://example.com"

# QR WiFi
qrencode -o wifi.png "WIFI:T:WPA;S:MyNetwork;P:MyPassword;;"

# vCard
qrencode -o vcard.png "BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
TEL:+15551234567
END:VCARD"
\`\`\`

\`qrencode\` es el camino más rápido para generación única de QR en una sesión de shell, e ideal para scripts que necesitan incrustar códigos QR en pipelines. El modo \`-t ANSI\` le permite imprimir códigos QR directamente en la terminal, un truco divertido para compartir sin GUI.

## Método 4: Herramientas en línea (aparte de UtilBoxx)

Hay muchos otros generadores de códigos QR en línea — la mayoría funcionan, pero con advertencias:

- **Algunos suben sus datos**: Si escanea un QR de WiFi, el SSID y la contraseña son sensibles. Asegúrese de que la herramienta procese localmente (UtilBoxx lo hace) o tenga una política de privacidad clara.
- **Algunos añaden marcas de agua**: Las versiones gratuitas a menudo añaden un pequeño logo o borde de marca. Lea la letra pequeña.
- **Algunos limitan funciones**: La personalización, tipos y corrección de errores pueden estar detrás de un muro de pago.
- **Algunos tienen anuncios**: Anuncios emergentes, anuncios de redirección y píxeles de seguimiento son comunes.

En caso de duda, prefiera una herramienta que respete la privacidad y procese en el navegador. El generador de QR de UtilBoxx está construido sobre \`qrcode\` y ejecuta todo el pipeline en el lado del cliente.

## Preguntas frecuentes

### ¿Cuántos datos puede contener un código QR?

El máximo es **4.296 caracteres alfanuméricos** o **7.089 caracteres numéricos** o **2.953 bytes binarios** al nivel de corrección de errores más bajo. En la práctica, los códigos QR funcionan mejor con datos cortos: las URL largas se vuelven densas y difíciles de escanear. Para contenido de más de ~300 caracteres, considere una URL acortada (a través de un servicio como bit.ly) o un tipo de código diferente (Data Matrix, PDF417, Aztec).

### ¿Cuál es la diferencia entre un código QR estático y dinámico?

Un código QR **estático** codifica una URL o contenido fijo. No se puede cambiar después de la generación. Un código QR **dinámico** apunta a un servicio de redirección que usted controla: lo escanea una vez y la URL nunca cambia, pero puede actualizar a dónde redirige. Los códigos dinámicos requieren un servicio de pago y tienen un costo de privacidad (el servicio de redirección registra cada escaneo). Por privacidad, prefiera los códigos estáticos.

### ¿Son los códigos QR un riesgo de seguridad?

Sí, en algunas formas específicas:

- **Quishing (phishing por QR)**: Un código QR malicioso puede llevar a un sitio de phishing. Siempre previsualice la URL antes de abrirla.
- **Malware drive-by**: Un código QR puede enlazar a una descarga maliciosa de APK o .exe. No escanee códigos de fuentes no confiables.
- **Compartición WiFi**: Si genera un código QR para su WiFi de casa y lo publica, cualquiera puede unirse a su red. Use redes de invitados con acceso limitado para códigos QR compartidos.
- **Redirección de pagos**: Los ataques de sustitución de direcciones de criptomonedas generan códigos QR para la wallet del atacante. Siempre verifique la dirección carácter por carácter antes de enviar.

El código QR en sí es solo un cuadrado. El riesgo es la URL o acción que dispara.

### ¿Cuál es el mejor tamaño para un código QR impreso?

Una regla común: el código QR debe tener al menos **1 cm (0,4 in) de ancho por cada 10 caracteres de datos**, con un mínimo de **2 cm × 2 cm (0,8 in × 0,8 in)**. Para la mayoría de códigos QR (~50 caracteres), 2 cm es suficiente. Para códigos densos (~500 caracteres), apunte a 4-5 cm. Siempre incluya una "zona de silencio" de al menos 4 cuadrados vacíos alrededor del código — la mayoría de las herramientas lo añaden por defecto.

Para escaneo a distancia, multiplique por la distancia esperada: un código pensado para ser escaneado desde 1 metro debe tener al menos 2,5 cm de ancho.

### ¿Se pueden estilizar o marcar los códigos QR?

Sí, pero con cuidado. Los tres patrones de búsqueda (los cuadrados grandes en tres esquinas) deben permanecer perfectamente intactos y con alto contraste contra el fondo. Usted puede:

- **Cambiar el color** de los módulos de datos (primer plano) y el fondo
- **Añadir un logo en el centro** (use corrección de errores Q o H para compensar los datos oscurecidos)
- **Redondear las esquinas de los módulos** para un aspecto moderno
- **Añadir un marco** con texto debajo del código

No debe:

- Invertir colores (claro sobre oscuro es difícil para algunos escáneres)
- Añadir gradientes (la mayoría de los escáneres pueden leerlos, pero algunos no)
- Colocar texto o gráficos sobre los módulos de datos
- Distorsionar la relación de aspecto cuadrada

### ¿Cuál es el código QR más pequeño escaneable?

El tamaño mínimo práctico es de unos **1 cm × 1 cm** para datos cortos y buena iluminación. Códigos más pequeños (hasta unos pocos milímetros) son posibles con impresión de alta resolución y tinta de alto contraste, pero la mayoría de las cámaras de teléfono luchan. Para la mayoría de usos, 2-3 cm es el suelo práctico.

## Conclusión

Los códigos QR son el puente universal entre lo físico y lo digital. Son gratis de generar, gratis de escanear (cada teléfono tiene un escáner integrado), y soportan docenas de tipos de contenido desde URLs hasta credenciales WiFi hasta pagos con criptomonedas. La herramienta adecuada importa: las herramientas que respetan la privacidad se ejecutan enteramente en su navegador, mientras que otras suben sus datos a servidores remotos.

Para generación ocasional, el [Generador de Códigos QR de UtilBoxx](/es/tools/dev/qrcode) es privado, gratis, y produce salida PNG y SVG de alta calidad con personalización completa. Para trabajo por lotes, la biblioteca \`qrcode\` de Python o la CLI \`qrencode\` manejan miles de códigos sin salir de su terminal. Y para casos puntuales, una herramienta en línea funciona siempre que confíe en ella con sus datos.

Un consejo rápido de diseño: mantenga el contraste alto (negro sobre blanco es el estándar de oro), añada una zona de silencio, y use corrección de errores H si planea superponer un logo. Su código QR escaneará de manera confiable al primer intento.`;

const qrCodePt = `## O que é um código QR e por que gerar um?

Um **código QR** (código de resposta rápida) é um código de barras bidimensional que pode armazenar até 4.296 caracteres alfanuméricos ou 7.089 caracteres numéricos. Inventado em 1994 pela Denso Wave, uma subsidiária japonesa da Toyota, os códigos QR foram originalmente projetados para rastrear veículos durante a fabricação. Desde então, eles se tornaram uma ferramenta universal para conectar o físico e o digital: escanear um código QR impresso com a câmera do telefone abre uma URL, mostra dados de contato, conecta ao WiFi, ou executa fluxos de pagamento — sem digitar nada.

Você vai querer gerar códigos QR quando:

- **Compartilhar uma URL**: Imprima em um folheto, cartão de visita ou etiqueta de produto. As pessoas escaneiam e visitam.
- **Acesso WiFi**: Um código QR contendo o SSID e senha da sua rede permite que convidados se conectem sem digitar.
- **Cartões de contato (vCard)**: Codifique seu nome, telefone, email e endereço para que as pessoas possam salvar diretamente nos contatos do telefone.
- **Email e SMS**: Pré-preencha o assunto e corpo de uma mensagem, ou o número de telefone de destino.
- **Pagamentos com criptomoedas**: Bitcoin, Ethereum e a maioria das wallets usam códigos QR para codificar um endereço de pagamento e um valor.
- **Autenticação de dois fatores (TOTP)**: Aplicativos autenticadores como Google Authenticator exibem códigos QR para configurar 2FA em um novo dispositivo.
- **Links profundos de apps**: Link diretamente para uma tela no seu app (ex.: \`myapp://product/123\`).
- **Inventário e ingressos**: Um código QR em cada item codifica um ID para rastreamento.

A boa notícia: gerar códigos QR é grátis, rápido e privado se você usar a ferramenta certa.

## Tipos e capacidade de códigos QR

Existem vários padrões para o conteúdo do código QR:

- **URL**: Um endereço web simples. \`https://example.com\`
- **Texto**: Texto arbitrário até ~4.000 caracteres
- **vCard**: Um cartão de contato com nome, telefone, email, endereço
- **WiFi**: \`WIFI:T:WPA;S:mynetwork;P:mypassword;;\`
- **Email**: \`mailto:[email protected]?subject=Hello&body=Hi\`
- **SMS**: \`sms:+15551234567?body=Hello\`
- **Telefone**: \`tel:+15551234567\`
- **Geo**: \`geo:37.7749,-122.4194\` (latitude, longitude)
- **Criptomoedas**: \`bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.5\`

Códigos QR também têm **níveis de correção de erros** que controlam quanto do código pode ser danificado antes de se tornar ilegível:

- **L (Baixo)**: ~7 % do código pode ser perdido
- **M (Médio)**: ~15 % pode ser perdido
- **Q (Quartil)**: ~25 % pode ser perdido
- **H (Alto)**: ~30 % pode ser perdido

Correção de erros mais alta torna o código QR mais denso (mais quadrados), mas mais resiliente. Para impressão em superfícies curvas, placas ao ar livre ou qualquer coisa que possa ser arranhada, use Q ou H.

## Método 1: Use o gerador de códigos QR do UtilBoxx (Recomendado)

A maneira mais rápida, privada e personalizável de gerar códigos QR no navegador é o [Gerador de Códigos QR do UtilBoxx](/pt/tools/dev/qrcode). Suporta URLs, texto, WiFi, vCard, email, telefone, SMS, geo e criptomoedas, com personalização completa de cor e tamanho, e download como PNG ou SVG. Tudo roda no seu navegador: sem upload, sem cadastro, sem registro do que você gera.

**Como usar:**

1. Acesse [utilboxx.com/pt/tools/dev/qrcode](/pt/tools/dev/qrcode)
2. Escolha seu tipo de conteúdo: URL, WiFi, vCard, email, etc.
3. Preencha os campos (URL, SSID/senha, dados de contato, etc.)
4. Personalize a cor, fundo, tamanho e correção de erros
5. Clique em Gerar
6. Baixe como PNG (para tela) ou SVG (para impressão)

**Por que recomendamos este método:**

- **100 % grátis**, sem cadastro, sem e-mail, sem marcas d'água
- **Privacidade em primeiro lugar**: o código QR é gerado no seu navegador. O conteúdo nunca sai do seu dispositivo. Crítico para códigos QR sensíveis (senhas WiFi, segredos 2FA, endereços de criptomoedas).
- **Todos os tipos principais**: URL, WiFi, vCard, email, telefone, SMS, geo, criptomoedas
- **Personalização completa**: cor de primeiro plano, cor de fundo, tamanho, correção de erros, margem
- **Exportação PNG e SVG**: PNG para tela e web, SVG para impressão (SVG escala infinitamente sem perda de qualidade)
- **Funciona em qualquer dispositivo** com navegador

Se você gera códigos QR mesmo que uma vez por mês, esta ferramenta se paga em tempo economizado e privacidade.

## Método 2: biblioteca python-qrcode (Python)

A biblioteca \`qrcode\` do Python (junto com \`Pillow\` para renderização de imagens) é a ferramenta canônica para geração programática de códigos QR. Instale com \`pip install qrcode[pil]\`.

\`\`\`python
import qrcode
from qrcode.constants import ERROR_CORRECT_H

# URL simples
qr = qrcode.QRCode(
    version=None,            # detectar tamanho automaticamente
    error_correction=ERROR_CORRECT_H,
    box_size=10,             # tamanho em pixels de cada quadrado
    border=4,                # zona de silêncio em quadrados
)
qr.add_data("https://example.com")
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("url_qr.png")

# Código QR WiFi
wifi_qr = qrcode.QRCode(box_size=10, border=4)
wifi_qr.add_data("WIFI:T:WPA;S:MyNetwork;P:MyPassword;;")
wifi = wifi_qr.make_image()
wifi.save("wifi_qr.png")

# vCard
vcard = """BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
ORG:UtilBoxx
TEL:+15551234567
EMAIL:[email protected]
URL:https://example.com
END:VCARD"""
vcard_qr = qrcode.QRCode(box_size=8, border=2)
vcard_qr.add_data(vcard)
vcard_img = vcard_qr.make_image()
vcard_img.save("vcard_qr.png")

# Saída SVG (para impressão)
from qrcode.image.svg import SvgPathImage
svg_qr = qrcode.QRCode(box_size=10, border=4)
svg_qr.add_data("https://example.com")
svg_img = svg_qr.make_image(image_factory=SvgPathImage)
with open("url_qr.svg", "wb") as f:
    svg_img.save(f)
\`\`\`

Para geração em lote (digamos, 1.000 etiquetas de inventário), um pequeno script com \`qrcode\` e um CSV de IDs produz todos os arquivos em segundos.

## Método 3: CLI com qrencode (Linux/macOS)

A ferramenta de linha de comando \`qrencode\` é uma maneira rápida e scriptável de gerar códigos QR. Instale com Homebrew no macOS (\`brew install qrencode\`) ou apt no Linux (\`sudo apt install qrencode\`).

\`\`\`bash
# Gerar um código QR para uma URL
qrencode -o url.png "https://example.com"

# Gerar com correção de erros mais alta
qrencode -o url.png -l H "https://example.com"

# Gerar como SVG (para impressão, escala infinitamente)
qrencode -o url.svg -t SVG "https://example.com"

# Gerar como texto ANSI (para exibir no terminal!)
qrencode -t ANSI "https://example.com"

# Gerar como texto UTF-8 (saída melhor no terminal)
qrencode -t UTF8 "https://example.com"

# QR WiFi
qrencode -o wifi.png "WIFI:T:WPA;S:MyNetwork;P:MyPassword;;"

# vCard
qrencode -o vcard.png "BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
TEL:+15551234567
END:VCARD"
\`\`\`

O \`qrencode\` é o caminho mais rápido para geração pontual de QR em uma sessão de shell, e ideal para scripts que precisam embutir códigos QR em pipelines. O modo \`-t ANSI\` permite imprimir códigos QR diretamente no terminal, um truque divertido para compartilhar sem GUI.

## Método 4: Ferramentas online (além do UtilBoxx)

Existem muitos outros geradores de código QR online — a maioria funciona, mas com ressalvas:

- **Alguns enviam seus dados**: Se você escaneia um QR de WiFi, o SSID e a senha são sensíveis. Certifique-se de que a ferramenta processe localmente (UtilBoxx faz) ou tenha uma política de privacidade clara.
- **Alguns adicionam marcas d'água**: Versões gratuitas frequentemente adicionam um pequeno logo ou borda com marca. Leia as letras miúdas.
- **Alguns limitam recursos**: Personalização, tipos e correção de erros podem estar atrás de um paywall.
- **Alguns têm anúncios**: Anúncios pop-up, anúncios de redirecionamento e pixels de rastreamento são comuns.

Em caso de dúvida, prefira uma ferramenta que respeita a privacidade e processa no navegador. O gerador de QR do UtilBoxx é construído sobre \`qrcode\` e executa todo o pipeline no lado do cliente.

## Perguntas frequentes

### Quantos dados um código QR pode conter?

O máximo é **4.296 caracteres alfanuméricos** ou **7.089 caracteres numéricos** ou **2.953 bytes binários** no nível mais baixo de correção de erros. Na prática, códigos QR funcionam melhor com dados curtos — URLs longas ficam densas e difíceis de escanear. Para conteúdo acima de ~300 caracteres, considere uma URL encurtada (via um serviço como bit.ly) ou um tipo de código diferente (Data Matrix, PDF417, Aztec).

### Qual a diferença entre um código QR estático e dinâmico?

Um código QR **estático** codifica uma URL ou conteúdo fixo. Não pode ser alterado após a geração. Um código QR **dinâmico** aponta para um serviço de redirecionamento que você controla: escaneie uma vez e a URL nunca muda, mas você pode atualizar para onde ela redireciona. Códigos dinâmicos requerem um serviço pago e têm um custo de privacidade (o serviço de redirecionamento registra cada escaneamento). Por privacidade, prefira códigos estáticos.

### Códigos QR são um risco de segurança?

Sim, em algumas formas específicas:

- **Quishing (phishing por QR)**: Um código QR malicioso pode levar a um site de phishing. Sempre visualize a URL antes de abrir.
- **Malware drive-by**: Um código QR pode linkar para um download malicioso de APK ou .exe. Não escaneie códigos de fontes não confiáveis.
- **Compartilhamento WiFi**: Se você gera um código QR para seu WiFi doméstico e o publica, qualquer pessoa pode se juntar à sua rede. Use redes de convidados com acesso limitado para códigos QR compartilhados.
- **Redirecionamento de pagamento**: Ataques de substituição de endereço de criptomoedas geram códigos QR para a wallet do atacante. Sempre verifique o endereço caractere por caractere antes de enviar.

O código QR em si é apenas um quadrado. O risco é a URL ou ação que ele dispara.

### Qual o melhor tamanho para um código QR impresso?

Uma regra comum: o código QR deve ter pelo menos **1 cm (0,4 in) de largura para cada 10 caracteres de dados**, com um mínimo de **2 cm × 2 cm (0,8 in × 0,8 in)**. Para a maioria dos códigos QR (~50 caracteres), 2 cm é suficiente. Para códigos densos (~500 caracteres), mire em 4-5 cm. Sempre inclua uma "zona de silêncio" de pelo menos 4 quadrados vazios ao redor do código — a maioria das ferramentas adiciona isso por padrão.

Para escaneamento à distância, multiplique pela distância esperada: um código destinado a ser escaneado de 1 metro deve ter pelo menos 2,5 cm de largura.

### Os códigos QR podem ser estilizados ou ter marca?

Sim, mas com cuidado. Os três padrões de localização (os quadrados grandes em três cantos) devem permanecer perfeitamente intactos e com alto contraste contra o fundo. Você pode:

- **Mudar a cor** dos módulos de dados (primeiro plano) e fundo
- **Adicionar um logo no centro** (use correção de erros Q ou H para compensar os dados obscurecidos)
- **Arredondar os cantos dos módulos** para um visual moderno
- **Adicionar uma moldura** com texto abaixo do código

Não deve:

- Inverter cores (claro sobre escuro é difícil para alguns scanners)
- Adicionar gradientes (a maioria dos scanners consegue ler, mas alguns não)
- Colocar texto ou gráficos sobre os módulos de dados
- Distorcer a proporção quadrada

### Qual o menor código QR escaneável?

O tamanho mínimo prático é cerca de **1 cm × 1 cm** para dados curtos e boa iluminação. Códigos menores (até alguns milímetros) são possíveis com impressão de alta resolução e tinta de alto contraste, mas a maioria das câmeras de telefone tem dificuldade. Para a maioria dos usos, 2-3 cm é o piso prático.

## Conclusão

Códigos QR são a ponte universal entre o físico e o digital. São grátis para gerar, grátis para escanear (todo telefone tem um scanner embutido), e suportam dezenas de tipos de conteúdo de URLs a credenciais WiFi a pagamentos com criptomoedas. A ferramenta certa importa: ferramentas que respeitam a privacidade rodam inteiramente no seu navegador, enquanto outras enviam seus dados para servidores remotos.

Para geração ocasional, o [Gerador de Códigos QR do UtilBoxx](/pt/tools/dev/qrcode) é privado, grátis e produz saída PNG e SVG de alta qualidade com personalização completa. Para trabalho em lote, a biblioteca \`qrcode\` do Python ou a CLI \`qrencode\` lidam com milhares de códigos sem sair do seu terminal. E para casos pontuais, uma ferramenta online funciona desde que você confie nela com seus dados.

Uma dica rápida de design: mantenha o contraste alto (preto sobre branco é o padrão-ouro), adicione uma zona de silêncio, e use correção de erros H se planeja sobrepor um logo. Seu código QR vai escanear de forma confiável na primeira tentativa.`;

const qrCodeFr = `## Qu'est-ce qu'un code QR et pourquoi en générer un ?

Un **code QR** (code de réponse rapide) est un code-barres bidimensionnel qui peut stocker jusqu'à 4 296 caractères alphanumériques ou 7 089 caractères numériques. Inventé en 1994 par Denso Wave, une filiale japonaise de Toyota, les codes QR ont été initialement conçus pour suivre les véhicules pendant la fabrication. Ils sont depuis devenus un outil universel pour relier le physique et le numérique : scanner un code QR imprimé avec l'appareil photo du téléphone ouvre une URL, affiche des coordonnées, se connecte au WiFi, ou exécute des flux de paiement — sans rien taper.

Vous voudrez générer des codes QR quand :

- **Partager une URL** : Imprimez-la sur un dépliant, une carte de visite ou une étiquette de produit. Les gens scannent et visitent.
- **Accès WiFi** : Un code QR contenant le SSID et le mot de passe de votre réseau permet aux invités de se connecter sans taper.
- **Cartes de contact (vCard)** : Encodez votre nom, téléphone, e-mail et adresse pour que les gens puissent les enregistrer directement dans les contacts de leur téléphone.
- **E-mail et SMS** : Pré-remplissez l'objet et le corps d'un message, ou le numéro de téléphone de destination.
- **Paiements en cryptomonnaie** : Bitcoin, Ethereum et la plupart des wallets utilisent des codes QR pour encoder une adresse de paiement et un montant.
- **Authentification à deux facteurs (TOTP)** : Les applications d'authentification comme Google Authenticator affichent des codes QR pour configurer 2FA sur un nouvel appareil.
- **Liens profonds d'apps** : Lien direct vers un écran de votre app (p. ex., \`myapp://product/123\`).
- **Inventaire et billetterie** : Un code QR sur chaque article encode un ID pour le suivi.

Bonne nouvelle : générer des codes QR est gratuit, rapide et privé si vous utilisez le bon outil.

## Types et capacité des codes QR

Il existe plusieurs standards pour le contenu des codes QR :

- **URL** : Une adresse web simple. \`https://example.com\`
- **Texte** : Texte arbitraire jusqu'à ~4 000 caractères
- **vCard** : Une carte de contact avec nom, téléphone, e-mail, adresse
- **WiFi** : \`WIFI:T:WPA;S:mynetwork;P:mypassword;;\`
- **E-mail** : \`mailto:[email protected]?subject=Hello&body=Hi\`
- **SMS** : \`sms:+15551234567?body=Hello\`
- **Téléphone** : \`tel:+15551234567\`
- **Geo** : \`geo:37.7749,-122.4194\` (latitude, longitude)
- **Crypto** : \`bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.5\`

Les codes QR ont aussi des **niveaux de correction d'erreur** qui contrôlent la part du code qui peut être endommagée avant de devenir illisible :

- **L (Bas)** : ~7 % du code peut être perdu
- **M (Moyen)** : ~15 % peut être perdu
- **Q (Quartile)** : ~25 % peut être perdu
- **H (Haut)** : ~30 % peut être perdu

Une correction d'erreur plus élevée rend le code QR plus dense (plus de carrés), mais plus résilient. Pour l'impression sur des surfaces courbes, des panneaux extérieurs ou tout ce qui peut être rayé, utilisez Q ou H.

## Méthode 1 : Utilisez le générateur de codes QR de UtilBoxx (Recommandé)

La façon la plus rapide, privée et personnalisable de générer des codes QR dans le navigateur est le [Générateur de Codes QR de UtilBoxx](/fr/tools/dev/qrcode). Il prend en charge les URLs, texte, WiFi, vCard, e-mail, téléphone, SMS, géo et crypto, avec personnalisation complète des couleurs et de la taille, et téléchargement en PNG ou SVG. Tout s'exécute dans votre navigateur : pas de téléversement, pas d'inscription, pas de journalisation de ce que vous générez.

**Comment l'utiliser :**

1. Allez sur [utilboxx.com/fr/tools/dev/qrcode](/fr/tools/dev/qrcode)
2. Choisissez votre type de contenu : URL, WiFi, vCard, e-mail, etc.
3. Remplissez les champs (URL, SSID/mot de passe, coordonnées, etc.)
4. Personnalisez la couleur, le fond, la taille et la correction d'erreur
5. Cliquez sur Générer
6. Téléchargez en PNG (pour écran) ou SVG (pour impression)

**Pourquoi nous recommandons cette méthode :**

- **100 % gratuit**, sans inscription, sans e-mail, sans filigrane
- **Confidentialité d'abord** : le code QR est généré dans votre navigateur. Le contenu ne quitte jamais votre appareil. Critique pour les codes QR sensibles (mots de passe WiFi, secrets 2FA, adresses crypto).
- **Tous les types principaux** : URL, WiFi, vCard, e-mail, téléphone, SMS, géo, crypto
- **Personnalisation complète** : couleur de premier plan, couleur de fond, taille, correction d'erreur, marge
- **Export PNG et SVG** : PNG pour écran et web, SVG pour impression (SVG met à l'échelle à l'infini sans perte de qualité)
- **Fonctionne sur tout appareil** avec navigateur

Si vous générez des codes QR même une fois par mois, cet outil est rentabilisé en temps gagné et en confidentialité.

## Méthode 2 : bibliothèque python-qrcode (Python)

La bibliothèque \`qrcode\` de Python (avec \`Pillow\` pour le rendu d'images) est l'outil canonique pour la génération programmatique de codes QR. Installez avec \`pip install qrcode[pil]\`.

\`\`\`python
import qrcode
from qrcode.constants import ERROR_CORRECT_H

# URL simple
qr = qrcode.QRCode(
    version=None,            # détecter la taille automatiquement
    error_correction=ERROR_CORRECT_H,
    box_size=10,             # taille en pixels de chaque carré
    border=4,                # zone de silence en carrés
)
qr.add_data("https://example.com")
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("url_qr.png")

# Code QR WiFi
wifi_qr = qrcode.QRCode(box_size=10, border=4)
wifi_qr.add_data("WIFI:T:WPA;S:MyNetwork;P:MyPassword;;")
wifi = wifi_qr.make_image()
wifi.save("wifi_qr.png")

# vCard
vcard = """BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
ORG:UtilBoxx
TEL:+15551234567
EMAIL:[email protected]
URL:https://example.com
END:VCARD"""
vcard_qr = qrcode.QRCode(box_size=8, border=2)
vcard_qr.add_data(vcard)
vcard_img = vcard_qr.make_image()
vcard_img.save("vcard_qr.png")

# Sortie SVG (pour impression)
from qrcode.image.svg import SvgPathImage
svg_qr = qrcode.QRCode(box_size=10, border=4)
svg_qr.add_data("https://example.com")
svg_img = svg_qr.make_image(image_factory=SvgPathImage)
with open("url_qr.svg", "wb") as f:
    svg_img.save(f)
\`\`\`

Pour la génération par lots (disons, 1 000 étiquettes d'inventaire), un petit script avec \`qrcode\` et un CSV d'IDs produit tous les fichiers en secondes.

## Méthode 3 : CLI avec qrencode (Linux/macOS)

L'outil en ligne de commande \`qrencode\` est un moyen rapide et scriptable de générer des codes QR. Installez avec Homebrew sur macOS (\`brew install qrencode\`) ou apt sur Linux (\`sudo apt install qrencode\`).

\`\`\`bash
# Générer un code QR pour une URL
qrencode -o url.png "https://example.com"

# Générer avec une correction d'erreur plus élevée
qrencode -o url.png -l H "https://example.com"

# Générer en SVG (pour impression, mise à l'échelle infinie)
qrencode -o url.svg -t SVG "https://example.com"

# Générer en texte ANSI (pour affichage en terminal !)
qrencode -t ANSI "https://example.com"

# Générer en texte UTF-8 (meilleure sortie en terminal)
qrencode -t UTF8 "https://example.com"

# QR WiFi
qrencode -o wifi.png "WIFI:T:WPA;S:MyNetwork;P:MyPassword;;"

# vCard
qrencode -o vcard.png "BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
TEL:+15551234567
END:VCARD"
\`\`\`

\`qrencode\` est le chemin le plus rapide pour la génération ponctuelle de QR dans une session shell, et l'idéal pour les scripts qui ont besoin d'incruster des codes QR dans des pipelines. Le mode \`-t ANSI\` vous permet d'imprimer des codes QR directement dans le terminal, une astuce sympa pour partager sans GUI.

## Méthode 4 : Outils en ligne (autres que UtilBoxx)

Il existe de nombreux autres générateurs de codes QR en ligne — la plupart fonctionnent, mais avec des mises en garde :

- **Certains téléversent vos données** : Si vous scannez un QR WiFi, le SSID et le mot de passe sont sensibles. Assurez-vous que l'outil traite localement (UtilBoxx le fait) ou a une politique de confidentialité claire.
- **Certains ajoutent des filigranes** : Les versions gratuites ajoutent souvent un petit logo ou une bordure de marque. Lisez les petits caractères.
- **Certains limitent les fonctionnalités** : La personnalisation, les types et la correction d'erreur peuvent être derrière un paywall.
- **Certains ont des publicités** : Popups, publicités de redirection et pixels de suivi sont courants.

En cas de doute, préférez un outil respectueux de la confidentialité qui traite dans le navigateur. Le générateur de QR de UtilBoxx est construit sur \`qrcode\` et exécute tout le pipeline côté client.

## Questions fréquentes

### Combien de données un code QR peut-il contenir ?

Le maximum est de **4 296 caractères alphanumériques** ou **7 089 caractères numériques** ou **2 953 octets binaires** au niveau de correction d'erreur le plus bas. En pratique, les codes QR fonctionnent mieux avec des données courtes — les longues URL deviennent denses et difficiles à scanner. Pour du contenu de plus de ~300 caractères, envisagez une URL raccourcie (via un service comme bit.ly) ou un autre type de code (Data Matrix, PDF417, Aztec).

### Quelle est la différence entre un code QR statique et dynamique ?

Un code QR **statique** encode une URL ou un contenu fixe. Il ne peut pas être modifié après génération. Un code QR **dynamique** pointe vers un service de redirection que vous contrôlez : scannez-le une fois et l'URL ne change jamais, mais vous pouvez mettre à jour la cible de la redirection. Les codes dynamiques nécessitent un service payant et ont un coût en termes de confidentialité (le service de redirection journalise chaque scan). Pour la confidentialité, préférez les codes statiques.

### Les codes QR sont-ils un risque de sécurité ?

Oui, de plusieurs façons spécifiques :

- **Quishing (hameçonnage par QR)** : Un code QR malveillant peut mener à un site de phishing. Prévisualisez toujours l'URL avant de l'ouvrir.
- **Malware drive-by** : Un code QR peut renvoyer vers un téléchargement malveillant d'APK ou de .exe. Ne scannez pas les codes de sources non fiables.
- **Partage WiFi** : Si vous générez un code QR pour votre WiFi domestique et le publiez, n'importe qui peut rejoindre votre réseau. Utilisez des réseaux invités avec accès limité pour les codes QR partagés.
- **Redirection de paiement** : Les attaques de substitution d'adresse de cryptomonnaie génèrent des codes QR pour le wallet de l'attaquant. Vérifiez toujours l'adresse caractère par caractère avant d'envoyer.

Le code QR lui-même n'est qu'un carré. Le risque est l'URL ou l'action qu'il déclenche.

### Quelle est la meilleure taille pour un code QR imprimé ?

Une règle empirique courante : le code QR doit faire au moins **1 cm (0,4 in) de large pour 10 caractères de données**, avec un minimum de **2 cm × 2 cm (0,8 in × 0,8 in)**. Pour la plupart des codes QR (~50 caractères), 2 cm suffisent. Pour les codes denses (~500 caractères), visez 4-5 cm. Incluez toujours une « zone de silence » d'au moins 4 carrés vides autour du code — la plupart des outils l'ajoutent par défaut.

Pour le scan à distance, multipliez par la distance prévue : un code destiné à être scanné à 1 mètre doit faire au moins 2,5 cm de large.

### Les codes QR peuvent-ils être stylisés ou marqués ?

Oui, mais avec précaution. Les trois motifs de repère (les grands carrés dans trois coins) doivent rester parfaitement intacts et à fort contraste avec l'arrière-plan. Vous pouvez :

- **Changer la couleur** des modules de données (premier plan) et de l'arrière-plan
- **Ajouter un logo au centre** (utilisez la correction d'erreur Q ou H pour compenser les données masquées)
- **Arrondir les coins des modules** pour un look moderne
- **Ajouter un cadre** avec du texte sous le code

Vous ne devez pas :

- Inverser les couleurs (clair sur sombre est difficile pour certains scanners)
- Ajouter des dégradés (la plupart des scanners peuvent les lire, mais certains ne le peuvent pas)
- Placer du texte ou des graphiques sur les modules de données
- Déformer le rapport d'aspect carré

### Quel est le plus petit code QR scannable ?

La taille minimale pratique est d'environ **1 cm × 1 cm** pour des données courtes et un bon éclairage. Des codes plus petits (jusqu'à quelques millimètres) sont possibles avec une impression haute résolution et une encre à fort contraste, mais la plupart des appareils photo de téléphone peinent. Pour la plupart des usages, 2-3 cm est le plancher pratique.

## Conclusion

Les codes QR sont le pont universel entre le physique et le numérique. Ils sont gratuits à générer, gratuits à scanner (chaque téléphone a un scanner intégré), et supportent des dizaines de types de contenu des URL aux identifiants WiFi aux paiements en cryptomonnaie. Le bon outil compte : les outils respectueux de la confidentialité s'exécutent entièrement dans votre navigateur, tandis que d'autres téléversent vos données sur des serveurs distants.

Pour la génération ponctuelle, le [Générateur de Codes QR de UtilBoxx](/fr/tools/dev/qrcode) est privé, gratuit et produit une sortie PNG et SVG de haute qualité avec personnalisation complète. Pour le travail par lots, la bibliothèque \`qrcode\` de Python ou la CLI \`qrencode\` gèrent des milliers de codes sans quitter votre terminal. Et pour les cas ponctuels, un outil en ligne fonctionne tant que vous lui faites confiance avec vos données.

Un conseil de design rapide : gardez un contraste élevé (le noir sur blanc est la référence), ajoutez une zone de silence, et utilisez la correction d'erreur H si vous prévoyez de superposer un logo. Votre code QR se scannera de manière fiable dès le premier essai.`;

const qrCodeDe = `## Was ist ein QR-Code und warum sollte man einen generieren?

Ein **QR-Code** (Quick Response Code) ist ein zweidimensionaler Barcode, der bis zu 4.296 alphanumerische Zeichen oder 7.089 numerische Zeichen speichern kann. Er wurde 1994 von Denso Wave, einer japanischen Tochtergesellschaft von Toyota, erfunden und ursprünglich entwickelt, um Fahrzeuge während der Herstellung zu verfolgen. Seitdem sind sie zu einem universellen Werkzeug geworden, um Physisches und Digitales zu verbinden: Einen gedruckten QR-Code mit der Handykamera zu scannen öffnet eine URL, zeigt Kontaktdetails, verbindet sich mit WLAN oder führt Zahlungsabläufe aus — ohne Eingabe.

Sie möchten QR-Codes generieren, wenn:

- **Sie eine URL teilen**: Drucken Sie sie auf eine Broschüre, Visitenkarte oder ein Produktetikett. Leute scannen und besuchen sie.
- **WLAN-Zugang**: Ein QR-Code, der Ihre Netzwerk-SSID und Ihr Passwort enthält, lässt Gäste beitreten, ohne zu tippen.
- **Kontaktkarten (vCard)**: Codieren Sie Ihren Namen, Telefon, E-Mail und Adresse, damit Leute sie direkt in ihren Telefonkontakten speichern können.
- **E-Mail und SMS**: Füllen Sie Betreff und Text einer Nachricht oder die Zieltelefonnummer vorab aus.
- **Krypto-Zahlungen**: Bitcoin, Ethereum und die meisten Wallets verwenden QR-Codes, um eine Zahlungsadresse und einen Betrag zu codieren.
- **Zwei-Faktor-Authentifizierung (TOTP)**: Authenticator-Apps wie Google Authenticator zeigen QR-Codes an, um 2FA auf einem neuen Gerät einzurichten.
- **App-Deep-Links**: Verlinken Sie direkt auf einen Bildschirm in Ihrer App (z. B. \`myapp://product/123\`).
- **Inventar und Ticketing**: Ein QR-Code auf jedem Artikel codiert eine ID zur Verfolgung.

Die gute Nachricht: QR-Codes zu generieren ist kostenlos, schnell und privat, wenn Sie das richtige Werkzeug verwenden.

## QR-Code-Typen und Kapazität

Es gibt mehrere Standards für QR-Code-Inhalte:

- **URL**: Eine einfache Webadresse. \`https://example.com\`
- **Text**: Beliebiger Text bis zu ~4.000 Zeichen
- **vCard**: Eine Kontaktkarte mit Name, Telefon, E-Mail, Adresse
- **WLAN**: \`WIFI:T:WPA;S:mynetwork;P:mypassword;;\`
- **E-Mail**: \`mailto:[email protected]?subject=Hello&body=Hi\`
- **SMS**: \`sms:+15551234567?body=Hello\`
- **Telefon**: \`tel:+15551234567\`
- **Geo**: \`geo:37.7749,-122.4194\` (Breitengrad, Längengrad)
- **Krypto**: \`bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.5\`

QR-Codes haben auch **Fehlerkorrekturstufen**, die kontrollieren, wie viel vom Code beschädigt werden kann, bevor er unlesbar wird:

- **L (Niedrig)**: ~7 % des Codes können verloren gehen
- **M (Mittel)**: ~15 % können verloren gehen
- **Q (Quartil)**: ~25 % können verloren gehen
- **H (Hoch)**: ~30 % können verloren gehen

Höhere Fehlerkorrektur macht den QR-Code dichter (mehr Quadrate), aber widerstandsfähiger. Für den Druck auf gekrümmten Oberflächen, Außenschildern oder allem, was zerkratzt werden könnte, verwenden Sie Q oder H.

## Methode 1: Den QR-Code-Generator von UtilBoxx verwenden (Empfohlen)

Der schnellste, privateste und anpassbarste Weg, QR-Codes im Browser zu generieren, ist der [QR-Code-Generator von UtilBoxx](/de/tools/dev/qrcode). Er unterstützt URLs, Text, WLAN, vCard, E-Mail, Telefon, SMS, Geo und Krypto, mit vollständiger Farb- und Größenanpassung, und Downloads als PNG oder SVG. Alles läuft in Ihrem Browser — kein Upload, keine Registrierung, keine Protokollierung dessen, was Sie generieren.

**So verwenden Sie ihn:**

1. Gehen Sie zu [utilboxx.com/de/tools/dev/qrcode](/de/tools/dev/qrcode)
2. Wählen Sie Ihren Inhaltstyp: URL, WLAN, vCard, E-Mail usw.
3. Füllen Sie die Felder aus (URL, SSID/Passwort, Kontaktdetails usw.)
4. Passen Sie Farbe, Hintergrund, Größe und Fehlerkorrektur an
5. Klicken Sie auf Generieren
6. Laden Sie als PNG (für Bildschirm) oder SVG (für Druck) herunter

**Warum wir diese Methode empfehlen:**

- **100 % kostenlos**, keine Registrierung, keine E-Mail, keine Wasserzeichen
- **Privatsphäre zuerst**: Der QR-Code wird in Ihrem Browser generiert. Der Inhalt verlässt Ihr Gerät nie. Entscheidend für sensible QR-Codes (WLAN-Passwörter, 2FA-Geheimnisse, Krypto-Adressen).
- **Alle Haupttypen**: URL, WLAN, vCard, E-Mail, Telefon, SMS, Geo, Krypto
- **Vollständige Anpassung**: Vordergrundfarbe, Hintergrundfarbe, Größe, Fehlerkorrektur, Rand
- **PNG- und SVG-Export**: PNG für Bildschirm und Web, SVG für Druck (SVG skaliert unendlich ohne Qualitätsverlust)
- **Funktioniert auf jedem Gerät** mit Browser

Wenn Sie auch nur einmal im Monat QR-Codes generieren, amortisiert sich dieses Werkzeug durch Zeitersparnis und Privatsphäre.

## Methode 2: python-qrcode-Bibliothek (Python)

Die Python-Bibliothek \`qrcode\` (zusammen mit \`Pillow\` für die Bildwiedergabe) ist das kanonische Werkzeug für die programmatische QR-Code-Generierung. Installation mit \`pip install qrcode[pil]\`.

\`\`\`python
import qrcode
from qrcode.constants import ERROR_CORRECT_H

# Einfache URL
qr = qrcode.QRCode(
    version=None,            # Größe automatisch erkennen
    error_correction=ERROR_CORRECT_H,
    box_size=10,             # Pixelgröße jedes Quadrats
    border=4,                # Ruhezone in Quadraten
)
qr.add_data("https://example.com")
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("url_qr.png")

# WLAN-QR-Code
wifi_qr = qrcode.QRCode(box_size=10, border=4)
wifi_qr.add_data("WIFI:T:WPA;S:MyNetwork;P:MyPassword;;")
wifi = wifi_qr.make_image()
wifi.save("wifi_qr.png")

# vCard
vcard = """BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
ORG:UtilBoxx
TEL:+15551234567
EMAIL:[email protected]
URL:https://example.com
END:VCARD"""
vcard_qr = qrcode.QRCode(box_size=8, border=2)
vcard_qr.add_data(vcard)
vcard_img = vcard_qr.make_image()
vcard_img.save("vcard_qr.png")

# SVG-Ausgabe (für Druck)
from qrcode.image.svg import SvgPathImage
svg_qr = qrcode.QRCode(box_size=10, border=4)
svg_qr.add_data("https://example.com")
svg_img = svg_qr.make_image(image_factory=SvgPathImage)
with open("url_qr.svg", "wb") as f:
    svg_img.save(f)
\`\`\`

Für die Batch-Generierung (sagen wir, 1.000 Inventaraufkleber) erzeugt ein kleines Skript mit \`qrcode\` und einer CSV mit IDs alle Dateien in Sekunden.

## Methode 3: CLI mit qrencode (Linux/macOS)

Das Kommandozeilen-Werkzeug \`qrencode\` ist ein schneller, skriptbarer Weg, QR-Codes zu generieren. Installation mit Homebrew auf macOS (\`brew install qrencode\`) oder apt auf Linux (\`sudo apt install qrencode\`).

\`\`\`bash
# QR-Code für eine URL generieren
qrencode -o url.png "https://example.com"

# Mit höherer Fehlerkorrektur generieren
qrencode -o url.png -l H "https://example.com"

# Als SVG generieren (für Druck, unendlich skalierbar)
qrencode -o url.svg -t SVG "https://example.com"

# Als ANSI-Text generieren (für Terminalanzeige!)
qrencode -t ANSI "https://example.com"

# Als UTF-8-Text generieren (bessere Terminalausgabe)
qrencode -t UTF8 "https://example.com"

# WLAN-QR
qrencode -o wifi.png "WIFI:T:WPA;S:MyNetwork;P:MyPassword;;"

# vCard
qrencode -o vcard.png "BEGIN:VCARD
VERSION:3.0
FN:Ada Lovelace
TEL:+15551234567
END:VCARD"
\`\`\`

\`qrencode\` ist der schnellste Weg für einmalige QR-Generierung in einer Shell-Sitzung und ideal für Skripte, die QR-Codes in Pipelines einbetten müssen. Der \`-t ANSI\`-Modus ermöglicht es Ihnen, QR-Codes direkt im Terminal auszugeben — ein netter Trick zum Teilen ohne GUI.

## Methode 4: Online-Werkzeuge (außer UtilBoxx)

Es gibt viele andere Online-QR-Code-Generatoren — die meisten funktionieren, aber mit Vorbehalten:

- **Einige laden Ihre Daten hoch**: Wenn Sie einen WLAN-QR scannen, sind SSID und Passwort sensibel. Stellen Sie sicher, dass das Werkzeug lokal verarbeitet (UtilBoxx tut dies) oder eine klare Datenschutzrichtlinie hat.
- **Einige fügen Wasserzeichen hinzu**: Kostenlose Versionen fügen oft ein kleines Logo oder einen Markenrahmen hinzu. Lesen Sie das Kleingedruckte.
- **Einige schränken Funktionen ein**: Anpassung, Typen und Fehlerkorrektur können hinter einer Bezahlschranke sein.
- **Einige haben Werbung**: Popup-Werbung, Weiterleitungsanzeigen und Tracking-Pixel sind üblich.

Im Zweifelsfall bevorzugen Sie ein datenschutzfreundliches Werkzeug, das im Browser verarbeitet. Der QR-Generator von UtilBoxx basiert auf \`qrcode\` und führt die gesamte Pipeline clientseitig aus.

## Häufige Fragen

### Wie viele Daten kann ein QR-Code aufnehmen?

Das Maximum sind **4.296 alphanumerische Zeichen** oder **7.089 numerische Zeichen** oder **2.953 binäre Bytes** bei der niedrigsten Fehlerkorrekturstufe. In der Praxis funktionieren QR-Codes am besten mit kurzen Daten — lange URLs werden dicht und schwer zu scannen. Für Inhalte über ~300 Zeichen erwägen Sie eine gekürzte URL (über einen Dienst wie bit.ly) oder einen anderen Code-Typ (Data Matrix, PDF417, Aztec).

### Was ist der Unterschied zwischen einem statischen und dynamischen QR-Code?

Ein **statischer** QR-Code codiert eine feste URL oder einen festen Inhalt. Er kann nach der Generierung nicht mehr geändert werden. Ein **dynamischer** QR-Code zeigt auf einen Weiterleitungsdienst, den Sie kontrollieren: einmal gescannt ändert sich die URL nie, aber Sie können das Weiterleitungsziel aktualisieren. Dynamische Codes erfordern einen kostenpflichtigen Dienst und haben einen Datenschutz-Nachteil (der Weiterleitungsdienst protokolliert jeden Scan). Für Datenschutz bevorzugen Sie statische Codes.

### Sind QR-Codes ein Sicherheitsrisiko?

Ja, in einigen spezifischen Weisen:

- **Quishing (QR-Phishing)**: Ein bösartiger QR-Code kann zu einer Phishing-Site führen. Überprüfen Sie immer die URL, bevor Sie sie öffnen.
- **Drive-by-Malware**: Ein QR-Code kann auf einen bösartigen APK- oder .exe-Download verlinken. Scannen Sie keine Codes aus nicht vertrauenswürdigen Quellen.
- **WLAN-Freigabe**: Wenn Sie einen QR-Code für Ihr Heim-WLAN generieren und ihn veröffentlichen, kann jeder Ihrem Netzwerk beitreten. Verwenden Sie Gastnetzwerke mit eingeschränktem Zugriff für geteilte QR-Codes.
- **Zahlungsumleitung**: Krypto-Adress-Substitutions-Angriffe generieren QR-Codes für die Wallet des Angreifers. Überprüfen Sie die Adresse immer Zeichen für Zeichen vor dem Senden.

Der QR-Code selbst ist nur ein Quadrat. Das Risiko liegt in der URL oder Aktion, die er auslöst.

### Was ist die beste Größe für einen gedruckten QR-Code?

Eine gängige Faustregel: Der QR-Code sollte mindestens **1 cm (0,4 in) breit pro 10 Datenzeichen** sein, mit einem Minimum von **2 cm × 2 cm (0,8 in × 0,8 in)**. Für die meisten QR-Codes (~50 Zeichen) reichen 2 cm. Für dichte Codes (~500 Zeichen) zielen Sie auf 4-5 cm. Fügen Sie immer eine „Ruhezone" von mindestens 4 leeren Quadraten um den Code herum ein — die meisten Werkzeuge fügen dies standardmäßig hinzu.

Für Scannen aus der Ferne multiplizieren Sie mit der erwarteten Entfernung: Ein Code, der aus 1 Meter Entfernung gescannt werden soll, sollte mindestens 2,5 cm breit sein.

### Können QR-Codes gestaltet oder gebrandmarkt werden?

Ja, aber mit Vorsicht. Die drei Suchmuster (die großen Quadrate in drei Ecken) müssen perfekt intakt und mit hohem Kontrast zum Hintergrund bleiben. Sie können:

- **Die Farbe** der Datenmodule (Vordergrund) und des Hintergrunds ändern
- **Ein Logo in der Mitte hinzufügen** (verwenden Sie Fehlerkorrektur Q oder H, um die verdeckten Daten zu kompensieren)
- **Die Ecken der Module abrunden** für ein modernes Aussehen
- **Einen Rahmen** mit Text unter dem Code hinzufügen

Sie sollten nicht:

- Farben invertieren (hell auf dunkel ist für einige Scanner schwierig)
- Verläufe hinzufügen (die meisten Scanner können sie lesen, aber einige nicht)
- Text oder Grafiken über die Datenmodule legen
- Das quadratische Seitenverhältnis verzerren

### Was ist der kleinste scanbare QR-Code?

Die praktische Mindestgröße ist etwa **1 cm × 1 cm** für kurze Daten und gute Beleuchtung. Kleinere Codes (bis zu wenige Millimeter) sind mit hochauflösendem Druck und kontrastreicher Tinte möglich, aber die meisten Handykameras haben Schwierigkeiten. Für die meisten Verwendungen sind 2-3 cm die praktische Untergrenze.

## Fazit

QR-Codes sind die universelle Brücke zwischen Physisch und Digital. Sie sind kostenlos zu generieren, kostenlos zu scannen (jedes Handy hat einen eingebauten Scanner) und unterstützen Dutzende von Inhaltstypen von URLs über WLAN-Zugangsdaten bis hin zu Krypto-Zahlungen. Das richtige Werkzeug ist wichtig: Datenschutzfreundliche Werkzeuge laufen vollständig in Ihrem Browser, während andere Ihre Daten auf entfernte Server hochladen.

Für gelegentliche Generierung ist der [QR-Code-Generator von UtilBoxx](/de/tools/dev/qrcode) privat, kostenlos und erzeugt hochwertige PNG- und SVG-Ausgabe mit vollständiger Anpassung. Für Stapelverarbeitung bewältigen die Python-Bibliothek \`qrcode\` oder die \`qrencode\`-CLI Tausende von Codes, ohne das Terminal zu verlassen. Und für Einzelfälle funktioniert ein Online-Werkzeug, solange Sie ihm mit Ihren Daten vertrauen.

Ein schneller Design-Tipp: Halten Sie den Kontrast hoch (Schwarz auf Weiß ist der Goldstandard), fügen Sie eine Ruhezone hinzu und verwenden Sie Fehlerkorrektur H, wenn Sie ein Logo überlagern möchten. Ihr QR-Code wird beim ersten Versuch zuverlässig gescannt.`;

export const qrCodePost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-generate-qr-code",
    category: "Developer Tools",
    date: "2026-04-08",
    readTime: "4 min",
    title: "How to Generate a QR Code (Free, Customizable)",
    description: "Create QR codes for URLs, WiFi, contacts, and more. Customize colors and size, download as PNG or SVG.",
    content: qrCodeEn,
  },
  zh: {
    slug: "how-to-generate-qr-code",
    category: "开发工具",
    date: "2026-04-08",
    readTime: "4 分钟",
    title: "如何生成 QR 码（免费、可定制）",
    description: "为 URL、WiFi、联系人等创建 QR 码。自定义颜色和大小，下载为 PNG 或 SVG。",
    content: qrCodeZh,
  },
  ja: {
    slug: "how-to-generate-qr-code",
    category: "開発者ツール",
    date: "2026-04-08",
    readTime: "4 分",
    title: "QR コードを生成する方法（無料、カスタマイズ可能）",
    description: "URL、WiFi、連絡先などのための QR コードを作成。色とサイズをカスタマイズし、PNG または SVG としてダウンロード。",
    content: qrCodeJa,
  },
  es: {
    slug: "how-to-generate-qr-code",
    category: "Herramientas para desarrolladores",
    date: "2026-04-08",
    readTime: "4 min",
    title: "Cómo generar un código QR (gratis, personalizable)",
    description: "Cree códigos QR para URLs, WiFi, contactos y más. Personalice colores y tamaño, descargue como PNG o SVG.",
    content: qrCodeEs,
  },
  pt: {
    slug: "how-to-generate-qr-code",
    category: "Ferramentas para desenvolvedores",
    date: "2026-04-08",
    readTime: "4 min",
    title: "Como gerar um código QR (grátis, personalizável)",
    description: "Crie códigos QR para URLs, WiFi, contatos e mais. Personalize cores e tamanho, baixe como PNG ou SVG.",
    content: qrCodePt,
  },
  fr: {
    slug: "how-to-generate-qr-code",
    category: "Outils pour développeurs",
    date: "2026-04-08",
    readTime: "4 min",
    title: "Comment générer un code QR (gratuit, personnalisable)",
    description: "Créez des codes QR pour URLs, WiFi, contacts et plus. Personnalisez les couleurs et la taille, téléchargez en PNG ou SVG.",
    content: qrCodeFr,
  },
  de: {
    slug: "how-to-generate-qr-code",
    category: "Entwickler-Tools",
    date: "2026-04-08",
    readTime: "4 Min",
    title: "QR-Code generieren (kostenlos, anpassbar)",
    description: "Erstellen Sie QR-Codes für URLs, WLAN, Kontakte und mehr. Passen Sie Farben und Größe an, laden Sie als PNG oder SVG herunter.",
    content: qrCodeDe,
  },
};
