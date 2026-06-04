// Blog post: Celsius to Fahrenheit Conversion: The Complete Guide
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const celsiusFahrenheitEn = `## Why convert Celsius to Fahrenheit?

Temperature is one of the most frequently converted units in daily life. Recipes from the US list oven temperatures in Fahrenheit, weather forecasts for Americans use °F, while most of the world reports temperature in Celsius. Add Kelvin (used in science), Rankine (used in some engineering fields in the US), and you have a small but real conversion problem.

The good news: the formulas are short, exact, and easy to memorize. And with a free browser tool, you never have to compute them by hand.

## The exact conversion formulas

There are four temperature scales you will encounter, and the conversions between them are linear. The two reference points are the **freezing point of water** (0 °C = 32 °F = 273.15 K = 491.67 °R) and the **boiling point of water** (100 °C = 212 °F = 373.15 K = 671.67 °R).

### Celsius to Fahrenheit

\`\`\`
°F = °C × 9/5 + 32
\`\`\`

**Example**: 100 °C → (100 × 9/5) + 32 = 180 + 32 = **212 °F** (boiling point of water).

### Celsius to Kelvin

\`\`\`
K = °C + 273.15
\`\`\`

**Example**: 25 °C → 25 + 273.15 = **298.15 K** (standard room temperature in science).

### Celsius to Rankine

\`\`\`
°R = (°C + 273.15) × 9/5
\`\`\`

**Example**: 0 °C → 273.15 × 9/5 = **491.67 °R**.

### Fahrenheit to Celsius (the reverse)

\`\`\`
°C = (°F − 32) × 5/9
\`\`\`

**Example**: 98.6 °F (body temperature) → (98.6 − 32) × 5/9 = 66.6 × 5/9 = **37 °C**.

A useful mental shortcut: 1 °C step equals 1.8 °F, and the scales meet at −40 (i.e. −40 °C = −40 °F). If you remember only one number, remember **−40** — it is the one temperature where Celsius and Fahrenheit read the same.

## Quick reference table

| Celsius | Fahrenheit | Kelvin | Use case |
|--------:|-----------:|-------:|----------|
| −40 °C | −40 °F | 233.15 K | Coldest point where °C and °F match |
| 0 °C | 32 °F | 273.15 K | Water freezes |
| 20 °C | 68 °F | 293.15 K | Comfortable room |
| 25 °C | 77 °F | 298.15 K | Standard lab temperature |
| 37 °C | 98.6 °F | 310.15 K | Human body temperature |
| 100 °C | 212 °F | 373.15 K | Water boils |
| 180 °C | 356 °F | 453.15 K | Typical baking temperature |

## Method 1: Use UtilBoxx's Free Temperature Converter (Recommended)

The fastest, most private, and most reliable way to convert temperature in your browser is the [UtilBoxx Temperature Converter](/en/tools/unit/temperature). It supports Celsius, Fahrenheit, Kelvin, Rankine, and a dozen other scales, with instant bidirectional conversion and a clean interface. Everything happens locally in your browser — no server, no upload, no logs.

**How to use it:**

1. Go to [utilboxx.com/en/tools/unit/temperature](/en/tools/unit/temperature)
2. Type a value in any field (Celsius, Fahrenheit, Kelvin, or Rankine)
3. The other fields update instantly as you type
4. Copy the result with one click

**Why we recommend this method:**

- **100% free**, no signup, no email, no captcha
- **Privacy-first**: all math runs in your browser. Nothing is sent to a server.
- **Bidirectional**: type in any field, get the rest immediately
- **Covers all four major scales**: Celsius, Fahrenheit, Kelvin, Rankine
- **Works offline** once the page has loaded
- **No ads, no popups, no tracking**

If you convert temperature even a few times a month, bookmarking this tool saves more time than any other approach.

## Method 2: Google Search

For a one-off conversion, Google is the fastest path. Type a query like \`100C to F\` or \`convert 25 celsius to fahrenheit\` directly into the search box. Google replies with a built-in converter card at the top of the results.

**Pros:** zero friction, no click required, works on any device with a browser.

**Cons:** requires an internet connection, only good for one value at a time, and Google logs every conversion you make. If you are converting sensitive data (a clinical temperature, a lab measurement tied to a patient), prefer an offline method. Google also handles only common pairs well — Fahrenheit to Rankine often needs an extra click.

## Method 3: Python (or any language)

If you write code, a one-liner covers all the formulas. In Python:

\`\`\`python
def c_to_f(c): return (c * 9/5) + 32
def c_to_k(c): return c + 273.15
def c_to_r(c): return (c + 273.15) * 9/5
def f_to_c(f): return (f - 32) * 5/9

print(c_to_f(100))   # 212.0
print(c_to_k(25))    # 298.15
print(c_to_r(0))     # 491.67
print(f_to_c(98.6))  # 37.0
\`\`\`

The same formulas port to any language. In JavaScript:

\`\`\`js
const cToF = c => (c * 9/5) + 32;
const cToK = c => c + 273.15;
const fToC = f => (f - 32) * 5/9;
\`\`\`

For batch conversion of a CSV file, a 5-line script processes thousands of rows in milliseconds.

## Method 4: CLI with units (Linux/macOS)

The GNU \`units\` utility handles temperature conversion on the command line. It is preinstalled on most Linux distributions and available via Homebrew on macOS (\`brew install units\`).

\`\`\`bash
# Convert 100 Celsius to Fahrenheit
units "100 Celsius" "Fahrenheit"
# Result: 212

# Convert body temperature
units "98.6 Fahrenheit" "Celsius"
# Result: 37

# Celsius to Kelvin
units "0 Celsius" "Kelvin"
# Result: 273.15
\`\`\`

\`units\` is a favorite for sysadmins and shell scripts that need to embed conversions in pipelines. Note that on macOS the built-in \`units\` tool is the BSD variant and uses a different syntax; the GNU version above is the friendlier one.

## Common questions

### Is there a temperature where Celsius and Fahrenheit are equal?

Yes: **−40**. The two scales cross at exactly −40 °C = −40 °F = 233.15 K. This is a great mental anchor: any value above −40 is colder in Fahrenheit (numerically lower), any value below −40 is warmer in Fahrenheit (numerically higher) — until the scales cross, the relationship reverses. Wait, no: above −40, a Fahrenheit number is numerically higher than the Celsius number; below −40, the opposite is true. Remember −40 as the one fixed point.

### Why does the US still use Fahrenheit?

Historical reasons. Fahrenheit was defined in 1724 by Daniel Gabriel Fahrenheit, well before Celsius was proposed in 1742. By the time the metric system spread in the 19th century, the US had already adopted Fahrenheit for weather, cooking, and industry. Switching is politically expensive (retooling signage, ovens, thermostats) and offers limited scientific benefit. Most countries that metricated did so in the 20th century; the US has not.

### What is Kelvin used for?

Kelvin is the SI unit of temperature and the only scale with no negative values. It is used in physics, chemistry, and engineering whenever absolute temperature matters — gas laws, thermodynamics, color temperature of light, semiconductor physics. 0 K is **absolute zero**, the theoretical lower limit of temperature where atomic motion stops. To convert Celsius to Kelvin, just add 273.15.

### Is Rankine still used?

Rarely. Rankine is the Fahrenheit counterpart of Kelvin (0 °R = absolute zero, 0 °F = 459.67 °R). It survives in some US engineering fields, particularly older thermodynamics textbooks and certain aerospace calculations. Most modern engineering uses Kelvin exclusively.

### Why does the formula use 9/5 and not 1.8?

They are the same number. \`9/5 = 1.8\` exactly. The fraction form is more common in written math because it shows the underlying ratio: a Celsius degree is 9/5 the size of a Fahrenheit degree. In code, use 1.8 for clarity, or use \`9/5\` to make the formula self-documenting.

### Can I convert with Siri, Alexa, or Google Assistant?

Yes. \"Hey Siri, what is 100 Celsius in Fahrenheit?\" works on all major assistants. They use the same formulas under the hood. It is fast and convenient for one-off conversions, but not great for batch work.

## Conclusion

Celsius to Fahrenheit conversion is one of the simplest numerical tasks in everyday life, and the formula \`°F = °C × 9/5 + 32\` is worth memorizing. For a one-off value, Google or a voice assistant is fine. For repeated conversions, bookmark the [UtilBoxx Temperature Converter](/en/tools/unit/temperature) — it is private, free, and works offline. And for scripting, the formulas in Python or the \`units\` CLI handle any volume of data without leaving your terminal.

Whichever method you pick, the math is identical — and now you have all four formulas, plus the −40 anchor, ready to use.`;

const celsiusFahrenheitZh = `## 为什么要做摄氏到华氏的换算？

温度是日常生活中最常被换算的单位之一。美国食谱用华氏度标烤箱温度，美国天气预报用 °F，世界大多数其他国家用摄氏度。再加上科学界用的开尔文、某些美国工程领域用的兰金，你就面临一个虽小但真实的换算问题。

好消息是：公式都很短、精确、容易记住。而用免费的浏览器工具，你根本不用手算。

## 精确换算公式

你会遇到四种温标，它们之间的换算是线性的。两个参考点是**水的冰点**（0 °C = 32 °F = 273.15 K = 491.67 °R）和**水的沸点**（100 °C = 212 °F = 373.15 K = 671.67 °R）。

### 摄氏度转华氏度

\`\`\`
°F = °C × 9/5 + 32
\`\`\`

**示例**：100 °C → (100 × 9/5) + 32 = 180 + 32 = **212 °F**（水的沸点）。

### 摄氏度转开尔文

\`\`\`
K = °C + 273.15
\`\`\`

**示例**：25 °C → 25 + 273.15 = **298.15 K**（科学上的标准室温）。

### 摄氏度转兰金

\`\`\`
°R = (°C + 273.15) × 9/5
\`\`\`

**示例**：0 °C → 273.15 × 9/5 = **491.67 °R**。

### 华氏度转摄氏度（反向）

\`\`\`
°C = (°F − 32) × 5/9
\`\`\`

**示例**：98.6 °F（人体温度）→ (98.6 − 32) × 5/9 = 66.6 × 5/9 = **37 °C**。

一个实用的心算捷径：1 °C 等于 1.8 °F，两种温标在 **−40** 处相交（−40 °C = −40 °F）。如果你只想记一个数，就记 **−40** —— 这是摄氏和华氏读数相同的唯一温度。

## 速查表

| 摄氏度 | 华氏度 | 开尔文 | 用途 |
|------:|------:|------:|------|
| −40 °C | −40 °F | 233.15 K | 摄氏和华氏相同的最低温度 |
| 0 °C | 32 °F | 273.15 K | 水结冰 |
| 20 °C | 68 °F | 293.15 K | 舒适室温 |
| 25 °C | 77 °F | 298.15 K | 标准实验室温度 |
| 37 °C | 98.6 °F | 310.15 K | 人体温度 |
| 100 °C | 212 °F | 373.15 K | 水沸腾 |
| 180 °C | 356 °F | 453.15 K | 常见烘焙温度 |

## 方法一：使用 UtilBoxx 免费温度换算工具（推荐）

在浏览器里换算温度最快、最私密、最可靠的方法是 [UtilBoxx 温度换算工具](/zh/tools/unit/temperature)。它支持摄氏度、华氏度、开尔文、兰金等十几种温标，即时双向换算，界面干净。所有计算都在你的浏览器本地完成 —— 没有服务器、没有上传、没有日志。

**使用方法：**

1. 打开 [utilboxx.com/zh/tools/unit/temperature](/zh/tools/unit/temperature)
2. 在任意一个输入框（摄氏度、华氏度、开尔文或兰金）输入数值
3. 其他输入框会即时更新
4. 一键复制结果

**为什么推荐这个方法：**

- **100% 免费**，无需注册、无需邮箱、无需验证码
- **隐私优先**：所有计算都在浏览器中运行，不向服务器发送任何数据
- **双向换算**：任一字段输入，其他字段立即给出结果
- **覆盖四大温标**：摄氏度、华氏度、开尔文、兰金
- **页面加载后可离线使用**
- **无广告、无弹窗、无追踪**

如果你每月要换算几次温度，把这个工具加书签能节省比其他方法更多时间。

## 方法二：Google 搜索

临时换一次的话，Google 是最快的路径。直接在搜索框里输入 \`100C to F\` 或 \`摄氏 25 度转华氏\` 这样的查询，Google 会在结果顶部返回一个内建的换算卡片。

**优点**：零摩擦、无需点击、在任何有浏览器的设备上都能用。

**缺点**：需要联网、一次只能换算一个值，而且 Google 会记录你的每次换算。如果你在换算敏感数据（临床体温、涉及病人的实验室测量值），请优先选择离线方法。Google 对常见温标对处理得很好，但华氏度转兰金往往需要额外点一下。

## 方法三：Python（或任何语言）

如果你写代码，一行就能搞定所有公式。Python 示例：

\`\`\`python
def c_to_f(c): return (c * 9/5) + 32
def c_to_k(c): return c + 273.15
def c_to_r(c): return (c + 273.15) * 9/5
def f_to_c(f): return (f - 32) * 5/9

print(c_to_f(100))   # 212.0
print(c_to_k(25))    # 298.15
print(c_to_r(0))     # 491.67
print(f_to_c(98.6))  # 37.0
\`\`\`

同样的公式可以移植到任何语言。JavaScript 示例：

\`\`\`js
const cToF = c => (c * 9/5) + 32;
const cToK = c => c + 273.15;
const fToC = f => (f - 32) * 5/9;
\`\`\`

如果要批量处理一个 CSV 文件，5 行脚本能在毫秒内处理上千行数据。

## 方法四：命令行 units（Linux/macOS）

GNU 的 \`units\` 工具可以在命令行里换算温度。它在大多数 Linux 发行版上预装，macOS 上可以通过 Homebrew 安装（\`brew install units\`）。

\`\`\`bash
# 100 摄氏度转华氏度
units "100 Celsius" "Fahrenheit"
# 结果：212

# 人体温度换算
units "98.6 Fahrenheit" "Celsius"
# 结果：37

# 摄氏度转开尔文
units "0 Celsius" "Kelvin"
# 结果：273.15
\`\`\`

\`units\` 是系统管理员和在流水线里嵌入换算的 shell 脚本的利器。注意 macOS 自带的 \`units\` 是 BSD 版本，语法不同；上面这种 GNU 版本更友好。

## 常见问题

### 摄氏度和华氏度在哪个温度相等？

**−40**。两种温标在 −40 °C = −40 °F = 233.15 K 处相交。这是一个很好的心算锚点：高于 −40 时华氏度的数字更大，低于 −40 时华氏度的数字更小。记住 −40 这个固定点。

### 美国为什么还在用华氏度？

历史原因。华氏度由 Daniel Gabriel Fahrenheit 在 1724 年定义，远早于 1742 年提出的摄氏度。到 19 世纪公制传播开时，美国已经将华氏度用于天气、烹饪和工业。切换的政治成本很高（要更换标识、烤箱、温控器），科学收益有限。大多数在 20 世纪完成公制化的国家都已切换；美国还没有。

### 开尔文用在哪？

开尔文是温度的国际单位制（SI）单位，也是唯一没有负值的温标。它用于物理、化学和任何需要绝对温度的工程领域 —— 气体定律、热力学、光的色温、半导体物理。0 K 是**绝对零度**，原子运动停止的理论下限。摄氏转开尔文，只需加 273.15。

### 兰金还在用吗？

很少见。兰金是开尔文的华氏版本（0 °R = 绝对零度，0 °F = 459.67 °R）。它残留在一些美国工程领域，尤其是较老的热力学教科书和某些航空航天计算中。现代工程几乎只用开尔文。

### 为什么公式用 9/5 而不是 1.8？

它们是同一个数。\`9/5 = 1.8\` 完全相等。分数形式在书面数学中更常见，因为它显示了底层比例：1 摄氏度的大小是华氏度的 9/5。代码中用 1.8 更清晰，或者用 \`9/5\` 让公式自文档化。

### Siri、Alexa、Google 助手能换算吗？

可以。\"Hey Siri，100 摄氏度是几华氏度？\" 在所有主流助手上都能用。它们底层用的也是同样的公式。对一次性换算来说又快又方便，但不适合批量工作。

## 结论

摄氏到华氏的换算是日常生活中最简单的数值任务之一，\`°F = °C × 9/5 + 32\` 这个公式值得记住。一次性换算用 Google 或语音助手就够了。重复性换算就把 [UtilBoxx 温度换算工具](/zh/tools/unit/temperature) 加书签 —— 私密、免费、可离线。脚本工作用 Python 公式或 \`units\` 命令行，无论数据量多大都不用离开终端。

无论你选哪种方法，数学都是一样的 —— 现在你已经掌握了全部四个公式，以及 −40 这个锚点，随时可用。`;

const celsiusFahrenheitJa = `## なぜ摂氏から華氏へ換算するのか？

温度は日常生活で最も頻繁に変換される単位の一つです。アメリカのレシピはオーブンの温度を華氏で示し、米国の天気予報は °F を使い、世界のほとんどの国は摂氏で報告します。科学で使われるケルビンや、一部の米工学分野で使われるランキンを加えると、小さいながらも本物の換算問題になります。

朗報です：公式はどれも短く、正確で、覚えやすい。そして無料のブラウザツールを使えば、手計算する必要は一切ありません。

## 正確な換算公式

遭遇する 4 つの温度目盛りがあり、相互の換算は線形です。2 つの基準点は**水の凝固点**（0 °C = 32 °F = 273.15 K = 491.67 °R）と**水の沸点**（100 °C = 212 °F = 373.15 K = 671.67 °R）です。

### 摂氏から華氏

\`\`\`
°F = °C × 9/5 + 32
\`\`\`

**例**：100 °C → (100 × 9/5) + 32 = 180 + 32 = **212 °F**（水の沸点）。

### 摂氏からケルビン

\`\`\`
K = °C + 273.15
\`\`\`

**例**：25 °C → 25 + 273.15 = **298.15 K**（科学における標準室温）。

### 摂氏からランキン

\`\`\`
°R = (°C + 273.15) × 9/5
\`\`\`

**例**：0 °C → 273.15 × 9/5 = **491.67 °R**。

### 華氏から摂氏（逆方向）

\`\`\`
°C = (°F − 32) × 5/9
\`\`\`

**例**：98.6 °F（体温）→ (98.6 − 32) × 5/9 = 66.6 × 5/9 = **37 °C**。

便利な暗算の近道：1 °C のステップは 1.8 °F に等しく、目盛りは −40 で交差します（つまり −40 °C = −40 °F）。1 つだけ数字を覚えるなら、**−40** を覚えてください。摂氏と華氏が同じ値を示す唯一の温度です。

## 早見表

| 摂氏 | 華氏 | ケルビン | 用途 |
|---:|---:|---:|---|
| −40 °C | −40 °F | 233.15 K | °C と °F が一致する最も低い温度 |
| 0 °C | 32 °F | 273.15 K | 水が凍る |
| 20 °C | 68 °F | 293.15 K | 快適な室温 |
| 25 °C | 77 °F | 298.15 K | 標準実験室温度 |
| 37 °C | 98.6 °F | 310.15 K | 人間の体温 |
| 100 °C | 212 °F | 373.15 K | 水が沸騰 |
| 180 °C | 356 °F | 453.15 K | 一般的なオーブン温度 |

## 方法 1：UtilBoxx の無料温度換算ツール（推奨）

ブラウザで温度を換算する最も速く、最もプライベートで、信頼できる方法は [UtilBoxx 温度換算ツール](/ja/tools/unit/temperature) です。摂氏、華氏、ケルビン、ランキンなど十数種類の目盛りをサポートし、双方向の即時変換とクリーンなインターフェースを提供します。すべてブラウザ内でローカルに動作します。サーバーも、アップロードも、ログもなし。

**使い方：**

1. [utilboxx.com/ja/tools/unit/temperature](/ja/tools/unit/temperature) を開く
2. 任意のフィールド（摂氏、華氏、ケルビン、ランキン）に値を入力
3. 他のフィールドが即座に更新
4. ワンクリックで結果をコピー

**この方法を推奨する理由：**

- **100% 無料**、登録不要、メールアドレス不要、CAPTCHA なし
- **プライバシー最優先**：すべての計算がブラウザ内で実行され、サーバーには送信されません
- **双方向**：任意のフィールドに入力すれば、残りが即座に得られる
- **4 つの主要目盛りをすべてカバー**：摂氏、華氏、ケルビン、ランキン
- **ページ読み込み後はオフラインで動作**
- **広告なし、ポップアップなし、追跡なし**

月に何度か温度を換算するなら、このツールをブックマークするのが最も時間を節約できます。

## 方法 2：Google 検索

一度限りの換算なら、Google が最速です。検索ボックスに \`100C to F\` や \`25摂氏を華氏に変換\` のようなクエリを直接入力すると、Google は結果の上部に内蔵換算カードを返します。

**長所**：摩擦ゼロ、クリック不要、ブラウザがあるデバイスならどれでも動作。

**短所**：インターネット接続が必要、一度に一つの値しか換算できない、Google がすべての換算をログに記録する。機密データ（臨床体温、患者に紐づく検査値）を換算する場合は、オフラインの方法を選んでください。また Google は一般的なペアはうまく処理しますが、華氏からランキンへの換算は追加クリックが必要なことがあります。

## 方法 3：Python（または任意の言語）

コードを書くなら、ワンライナーで全公式をカバーできます。Python の例：

\`\`\`python
def c_to_f(c): return (c * 9/5) + 32
def c_to_k(c): return c + 273.15
def c_to_r(c): return (c + 273.15) * 9/5
def f_to_c(f): return (f - 32) * 5/9

print(c_to_f(100))   # 212.0
print(c_to_k(25))    # 298.15
print(c_to_r(0))     # 491.67
print(f_to_c(98.6))  # 37.0
\`\`\`

同じ公式はどの言語にも移植できます。JavaScript の例：

\`\`\`js
const cToF = c => (c * 9/5) + 32;
const cToK = c => c + 273.15;
const fToC = f => (f - 32) * 5/9;
\`\`\`

CSV ファイルをバッチ処理するには、5 行のスクリプトで数千行をミリ秒で処理できます。

## 方法 4：コマンドラインで units（Linux/macOS）

GNU の \`units\` ユーティリティはコマンドラインで温度を扱えます。ほとんどの Linux ディストリビューションにプリインストールされており、macOS では Homebrew 経由で入手できます（\`brew install units\`）。

\`\`\`bash
# 100 摂氏を華氏に変換
units "100 Celsius" "Fahrenheit"
# 結果：212

# 体温を変換
units "98.6 Fahrenheit" "Celsius"
# 結果：37

# 摂氏からケルビン
units "0 Celsius" "Kelvin"
# 結果：273.15
\`\`\`

\`units\` はシステム管理者や、シェルパイプラインに換算を埋め込むスクリプトの定番です。macOS に内蔵の \`units\` は BSD 版で構文が異なることに注意してください。上記の GNU 版の方が親しみやすいでしょう。

## よくある質問

### 摂氏と華氏が等しくなる温度は？

**−40** です。2 つの目盛りはちょうど −40 °C = −40 °F = 233.15 K で交差します。これは優れた暗算のアンカーです。−40 より上では華氏の数値が大きく、−40 より下では華氏の数値が小さくなります。−40 を固定点として覚えてください。

### なぜ米国は華氏を使い続けるのか？

歴史的な理由です。華氏は 1724 年に Daniel Gabriel Fahrenheit が定義したもので、摂氏が提案された 1742 年よりずっと前です。19 世紀にメートル法が広まった頃、米国はすでに華氏を天気、料理、産業に採用していました。切り替えの政治コスト（標識、オーブン、サーモスタットの刷新）は高く、科学的利益は限定的です。20 世紀にメートル法に移行した国は多いものの、米国はそうしていません。

### ケルビンは何に使われる？

ケルビンは温度の SI 単位で、負の値を持たない唯一の目盛りです。物理学、化学、絶対温度が必要なあらゆる工学分野 —— 気体の法則、熱力学、光の色温度、半導体物理学 —— で使われます。0 K は**絶対零度**で、原子運動が停止する理論的な下限です。摂氏からケルビンへは、273.15 を加えるだけです。

### ランキンはまだ使われていますか？

まれです。ランキンはケルビンの華氏版（0 °R = 絶対零度、0 °F = 459.67 °R）です。一部の米工学分野、特に古い熱力学の教科書や特定の航空宇宙計算に残っています。現代の工学は専らケルビンを使用します。

### なぜ公式は 9/5 で 1.8 ではないのか？

同じ数です。\`9/5 = 1.8\` は正確です。分数形式は書面数学でより一般的で、根底にある比率を示します：1 摂氏の大きさは華氏の 9/5 です。コードでは明確さのために 1.8 を使うか、自己文書化のために \`9/5\` を使うと良いでしょう。

### Siri、Alexa、Google アシスタントで換算できますか？

はい。「Hey Siri、100 摂氏は華氏で何度？」はすべての主要アシスタントで動作します。内部的には同じ公式を使っています。一度限りの換算には速くて便利ですが、バッチ作業には向きません。

## まとめ

摂氏から華氏への換算は日常生活で最も簡単な数値タスクの一つで、\`°F = °C × 9/5 + 32\` は覚えておく価値があります。一度限りの値なら Google や音声アシスタントで十分です。繰り返し換算するなら [UtilBoxx 温度換算ツール](/ja/tools/unit/temperature) をブックマークしてください。プライベートで、無料で、オフラインで動作します。スクリプト作業には Python の公式または \`units\` コマンドラインが、ターミナルから出ずにどんな量のデータも扱えます。

どの方法を選んでも、数学は同じです。4 つすべての公式と、−40 というアンカーを今すぐ活用できます。`;

const celsiusFahrenheitEs = `## ¿Por qué convertir Celsius a Fahrenheit?

La temperatura es una de las unidades que más se convierten en la vida diaria. Las recetas de EE. UU. muestran la temperatura del horno en Fahrenheit, los pronósticos del tiempo estadounidenses usan °F, y la mayor parte del mundo reporta la temperatura en Celsius. Súmele Kelvin (en ciencia), Rankine (en algunas ingenierías de EE. UU.) y tiene un problema de conversión pequeño pero real.

La buena noticia: las fórmulas son cortas, exactas y fáciles de memorizar. Y con una herramienta gratuita en el navegador, nunca tendrá que calcular a mano.

## Las fórmulas exactas de conversión

Hay cuatro escalas de temperatura con las que se encontrará, y las conversiones entre ellas son lineales. Los dos puntos de referencia son el **punto de congelación del agua** (0 °C = 32 °F = 273,15 K = 491,67 °R) y el **punto de ebullición del agua** (100 °C = 212 °F = 373,15 K = 671,67 °R).

### Celsius a Fahrenheit

\`\`\`
°F = °C × 9/5 + 32
\`\`\`

**Ejemplo**: 100 °C → (100 × 9/5) + 32 = 180 + 32 = **212 °F** (punto de ebullición del agua).

### Celsius a Kelvin

\`\`\`
K = °C + 273,15
\`\`\`

**Ejemplo**: 25 °C → 25 + 273,15 = **298,15 K** (temperatura ambiente estándar en ciencia).

### Celsius a Rankine

\`\`\`
°R = (°C + 273,15) × 9/5
\`\`\`

**Ejemplo**: 0 °C → 273,15 × 9/5 = **491,67 °R**.

### Fahrenheit a Celsius (la inversa)

\`\`\`
°C = (°F − 32) × 5/9
\`\`\`

**Ejemplo**: 98,6 °F (temperatura corporal) → (98,6 − 32) × 5/9 = 66,6 × 5/9 = **37 °C**.

Un atajo mental útil: 1 °C equivale a 1,8 °F, y las escalas se cruzan en **−40** (es decir, −40 °C = −40 °F). Si solo recuerda un número, recuerde **−40**: es la única temperatura donde Celsius y Fahrenheit muestran el mismo valor.

## Tabla de referencia rápida

| Celsius | Fahrenheit | Kelvin | Caso de uso |
|--------:|-----------:|-------:|------------|
| −40 °C | −40 °F | 233,15 K | Punto más frío donde °C y °F coinciden |
| 0 °C | 32 °F | 273,15 K | El agua se congela |
| 20 °C | 68 °F | 293,15 K | Habitación confortable |
| 25 °C | 77 °F | 298,15 K | Temperatura estándar de laboratorio |
| 37 °C | 98,6 °F | 310,15 K | Temperatura corporal humana |
| 100 °C | 212 °F | 373,15 K | El agua hierve |
| 180 °C | 356 °F | 453,15 K | Temperatura de horneado típica |

## Método 1: Use el conversor de temperatura gratis de UtilBoxx (Recomendado)

La forma más rápida, privada y confiable de convertir temperatura en el navegador es el [Conversor de Temperatura de UtilBoxx](/es/tools/unit/temperature). Soporta Celsius, Fahrenheit, Kelvin, Rankine y una docena de escalas más, con conversión bidireccional instantánea y una interfaz limpia. Todo ocurre localmente en su navegador: sin servidor, sin carga, sin registros.

**Cómo usarlo:**

1. Vaya a [utilboxx.com/es/tools/unit/temperature](/es/tools/unit/temperature)
2. Escriba un valor en cualquier campo (Celsius, Fahrenheit, Kelvin o Rankine)
3. Los otros campos se actualizan al instante mientras escribe
4. Copie el resultado con un solo clic

**Por qué recomendamos este método:**

- **100% gratis**, sin registro, sin email, sin captcha
- **Privacidad primero**: todos los cálculos se ejecutan en su navegador. No se envía nada a un servidor.
- **Bidireccional**: escriba en cualquier campo y obtenga el resto de inmediato
- **Cubre las cuatro escalas principales**: Celsius, Fahrenheit, Kelvin, Rankine
- **Funciona sin conexión** una vez que la página ha cargado
- **Sin anuncios, sin popups, sin rastreo**

Si convierte temperatura aunque sea unas pocas veces al mes, marcar esta herramienta le ahorrará más tiempo que cualquier otro enfoque.

## Método 2: Búsqueda en Google

Para una conversión puntual, Google es el camino más rápido. Escriba una consulta como \`100C to F\` o \`convertir 25 celsius a fahrenheit\` directamente en el cuadro de búsqueda. Google responde con una tarjeta de conversión incorporada en la parte superior de los resultados.

**Ventajas:** cero fricción, no requiere clics, funciona en cualquier dispositivo con navegador.

**Desventajas:** requiere conexión a internet, solo es útil para un valor a la vez, y Google registra cada conversión que hace. Si está convirtiendo datos sensibles (una temperatura clínica, una medición de laboratorio vinculada a un paciente), prefiera un método sin conexión. Google también maneja bien solo los pares comunes: Fahrenheit a Rankine a menudo necesita un clic adicional.

## Método 3: Python (o cualquier lenguaje)

Si escribe código, una sola línea cubre todas las fórmulas. En Python:

\`\`\`python
def c_to_f(c): return (c * 9/5) + 32
def c_to_k(c): return c + 273.15
def c_to_r(c): return (c + 273.15) * 9/5
def f_to_c(f): return (f - 32) * 5/9

print(c_to_f(100))   # 212.0
print(c_to_k(25))    # 298.15
print(c_to_r(0))     # 491.67
print(f_to_c(98.6))  # 37.0
\`\`\`

Las mismas fórmulas se trasladan a cualquier lenguaje. En JavaScript:

\`\`\`js
const cToF = c => (c * 9/5) + 32;
const cToK = c => c + 273.15;
const fToC = f => (f - 32) * 5/9;
\`\`\`

Para conversión por lotes de un archivo CSV, un script de 5 líneas procesa miles de filas en milisegundos.

## Método 4: CLI con units (Linux/macOS)

La utilidad GNU \`units\` maneja la conversión de temperatura en la línea de comandos. Viene preinstalada en la mayoría de distribuciones Linux y está disponible vía Homebrew en macOS (\`brew install units\`).

\`\`\`bash
# Convertir 100 Celsius a Fahrenheit
units "100 Celsius" "Fahrenheit"
# Resultado: 212

# Convertir temperatura corporal
units "98.6 Fahrenheit" "Celsius"
# Resultado: 37

# Celsius a Kelvin
units "0 Celsius" "Kelvin"
# Resultado: 273.15
\`\`\`

\`units\` es el favorito de administradores de sistemas y scripts de shell que necesitan incrustar conversiones en pipelines. Tenga en cuenta que en macOS la herramienta \`units\` integrada es la variante BSD y usa una sintaxis diferente; la versión GNU de arriba es la más amigable.

## Preguntas frecuentes

### ¿Hay una temperatura donde Celsius y Fahrenheit son iguales?

Sí: **−40**. Las dos escalas se cruzan exactamente en −40 °C = −40 °F = 233,15 K. Es un gran ancla mental: por encima de −40 el número en Fahrenheit es mayor, por debajo de −40 el número en Fahrenheit es menor. Recuerde −40 como el único punto fijo.

### ¿Por qué EE. UU. sigue usando Fahrenheit?

Razones históricas. Fahrenheit fue definido en 1724 por Daniel Gabriel Fahrenheit, mucho antes de que Celsius fuera propuesto en 1742. Cuando el sistema métrico se extendió en el siglo XIX, EE. UU. ya había adoptado Fahrenheit para el clima, la cocina y la industria. Cambiar es políticamente caro (renovar señalización, hornos, termostatos) y ofrece un beneficio científico limitado. La mayoría de los países que se metricaron lo hicieron en el siglo XX; EE. UU. no lo ha hecho.

### ¿Para qué se usa Kelvin?

Kelvin es la unidad SI de temperatura y la única escala sin valores negativos. Se usa en física, química e ingeniería siempre que importa la temperatura absoluta: leyes de los gases, termodinámica, temperatura de color de la luz, física de semiconductores. 0 K es el **cero absoluto**, el límite teórico inferior de temperatura donde se detiene el movimiento atómico. Para convertir Celsius a Kelvin, simplemente sume 273,15.

### ¿Rankine todavía se usa?

Rara vez. Rankine es la contraparte en Fahrenheit de Kelvin (0 °R = cero absoluto, 0 °F = 459,67 °R). Sobrevive en algunos campos de ingeniería de EE. UU., particularmente en libros de texto antiguos de termodinámica y en ciertos cálculos aeroespaciales. La ingeniería moderna usa exclusivamente Kelvin.

### ¿Por qué la fórmula usa 9/5 y no 1,8?

Son el mismo número. \`9/5 = 1,8\` exactamente. La forma de fracción es más común en matemáticas escritas porque muestra la razón subyacente: un grado Celsius es 9/5 del tamaño de un grado Fahrenheit. En código, use 1,8 por claridad, o use \`9/5\` para que la fórmula se autodocumente.

### ¿Puedo convertir con Siri, Alexa o el Asistente de Google?

Sí. \"Oye Siri, ¿cuántos Fahrenheit son 100 Celsius?\" funciona en todos los asistentes principales. Usan las mismas fórmulas internamente. Es rápido y conveniente para conversiones puntuales, pero no es ideal para trabajo por lotes.

## Conclusión

La conversión de Celsius a Fahrenheit es una de las tareas numéricas más simples de la vida diaria, y la fórmula \`°F = °C × 9/5 + 32\` vale la pena memorizar. Para un valor puntual, Google o un asistente de voz está bien. Para conversiones repetidas, marque el [Conversor de Temperatura de UtilBoxx](/es/tools/unit/temperature): es privado, gratis y funciona sin conexión. Y para programar, las fórmulas en Python o la CLI \`units\` manejan cualquier volumen de datos sin salir de su terminal.

Independientemente del método que elija, las matemáticas son idénticas, y ahora tiene las cuatro fórmulas, más el ancla de −40, listas para usar.`;

const celsiusFahrenheitPt = `## Por que converter Celsius para Fahrenheit?

Temperatura é uma das unidades mais convertidas no cotidiano. Receitas dos EUA listam a temperatura do forno em Fahrenheit, previsões do tempo americanas usam °F, e a maior parte do mundo informa a temperatura em Celsius. Some Kelvin (usado em ciência), Rankine (usado em algumas engenharias nos EUA) e você tem um pequeno, mas real, problema de conversão.

A boa notícia: as fórmulas são curtas, exatas e fáceis de memorizar. E com uma ferramenta gratuita no navegador, você nunca precisa calcular à mão.

## As fórmulas exatas de conversão

Existem quatro escalas de temperatura com as quais você vai se deparar, e as conversões entre elas são lineares. Os dois pontos de referência são o **ponto de congelamento da água** (0 °C = 32 °F = 273,15 K = 491,67 °R) e o **ponto de ebulição da água** (100 °C = 212 °F = 373,15 K = 671,67 °R).

### Celsius para Fahrenheit

\`\`\`
°F = °C × 9/5 + 32
\`\`\`

**Exemplo**: 100 °C → (100 × 9/5) + 32 = 180 + 32 = **212 °F** (ponto de ebulição da água).

### Celsius para Kelvin

\`\`\`
K = °C + 273,15
\`\`\`

**Exemplo**: 25 °C → 25 + 273,15 = **298,15 K** (temperatura ambiente padrão em ciência).

### Celsius para Rankine

\`\`\`
°R = (°C + 273,15) × 9/5
\`\`\`

**Exemplo**: 0 °C → 273,15 × 9/5 = **491,67 °R**.

### Fahrenheit para Celsius (a inversa)

\`\`\`
°C = (°F − 32) × 5/9
\`\`\`

**Exemplo**: 98,6 °F (temperatura corporal) → (98,6 − 32) × 5/9 = 66,6 × 5/9 = **37 °C**.

Um atalho mental útil: 1 °C equivale a 1,8 °F, e as escalas se cruzam em **−40** (ou seja, −40 °C = −40 °F). Se você só lembrar de um número, lembre de **−40**: é a única temperatura onde Celsius e Fahrenheit mostram o mesmo valor.

## Tabela de referência rápida

| Celsius | Fahrenheit | Kelvin | Caso de uso |
|--------:|-----------:|-------:|------------|
| −40 °C | −40 °F | 233,15 K | Ponto mais frio onde °C e °F coincidem |
| 0 °C | 32 °F | 273,15 K | A água congela |
| 20 °C | 68 °F | 293,15 K | Sala confortável |
| 25 °C | 77 °F | 298,15 K | Temperatura padrão de laboratório |
| 37 °C | 98,6 °F | 310,15 K | Temperatura corporal humana |
| 100 °C | 212 °F | 373,15 K | A água ferve |
| 180 °C | 356 °F | 453,15 K | Temperatura típica de forno |

## Método 1: Use o conversor de temperatura grátis do UtilBoxx (Recomendado)

A maneira mais rápida, privada e confiável de converter temperatura no navegador é o [Conversor de Temperatura do UtilBoxx](/pt/tools/unit/temperature). Ele suporta Celsius, Fahrenheit, Kelvin, Rankine e mais uma dúzia de escalas, com conversão bidirecional instantânea e uma interface limpa. Tudo acontece localmente no seu navegador: sem servidor, sem upload, sem registros.

**Como usar:**

1. Acesse [utilboxx.com/pt/tools/unit/temperature](/pt/tools/unit/temperature)
2. Digite um valor em qualquer campo (Celsius, Fahrenheit, Kelvin ou Rankine)
3. Os outros campos se atualizam instantaneamente enquanto você digita
4. Copie o resultado com um clique

**Por que recomendamos este método:**

- **100% grátis**, sem cadastro, sem e-mail, sem captcha
- **Privacidade em primeiro lugar**: todos os cálculos rodam no seu navegador. Nada é enviado a um servidor.
- **Bidirecional**: digite em qualquer campo e obtenha o resto imediatamente
- **Cobre as quatro escalas principais**: Celsius, Fahrenheit, Kelvin, Rankine
- **Funciona offline** assim que a página carrega
- **Sem anúncios, sem popups, sem rastreamento**

Se você converte temperatura mesmo que apenas algumas vezes por mês, favoritar esta ferramenta economiza mais tempo do que qualquer outra abordagem.

## Método 2: Busca no Google

Para uma conversão pontual, o Google é o caminho mais rápido. Digite uma consulta como \`100C to F\` ou \`converter 25 celsius para fahrenheit\` diretamente na caixa de busca. O Google responde com um cartão conversor embutido no topo dos resultados.

**Prós:** zero atrito, sem cliques, funciona em qualquer dispositivo com navegador.

**Contras:** requer conexão à internet, só serve para um valor por vez, e o Google registra cada conversão que você faz. Se você está convertendo dados sensíveis (temperatura clínica, medição de laboratório ligada a um paciente), prefira um método offline. O Google também lida bem apenas com pares comuns: Fahrenheit para Rankine geralmente precisa de um clique extra.

## Método 3: Python (ou qualquer linguagem)

Se você escreve código, uma única linha cobre todas as fórmulas. Em Python:

\`\`\`python
def c_to_f(c): return (c * 9/5) + 32
def c_to_k(c): return c + 273.15
def c_to_r(c): return (c + 273.15) * 9/5
def f_to_c(f): return (f - 32) * 5/9

print(c_to_f(100))   # 212.0
print(c_to_k(25))    # 298.15
print(c_to_r(0))     # 491.67
print(f_to_c(98.6))  # 37.0
\`\`\`

As mesmas fórmulas migram para qualquer linguagem. Em JavaScript:

\`\`\`js
const cToF = c => (c * 9/5) + 32;
const cToK = c => c + 273.15;
const fToC = f => (f - 32) * 5/9;
\`\`\`

Para conversão em lote de um arquivo CSV, um script de 5 linhas processa milhares de linhas em milissegundos.

## Método 4: CLI com units (Linux/macOS)

O utilitário GNU \`units\` lida com conversão de temperatura na linha de comando. Vem pré-instalado na maioria das distribuições Linux e está disponível via Homebrew no macOS (\`brew install units\`).

\`\`\`bash
# Converter 100 Celsius para Fahrenheit
units "100 Celsius" "Fahrenheit"
# Resultado: 212

# Converter temperatura corporal
units "98.6 Fahrenheit" "Celsius"
# Resultado: 37

# Celsius para Kelvin
units "0 Celsius" "Kelvin"
# Resultado: 273.15
\`\`\`

O \`units\` é o favorito de administradores de sistemas e scripts shell que precisam embutir conversões em pipelines. Note que no macOS a ferramenta \`units\` integrada é a variante BSD e usa sintaxe diferente; a versão GNU acima é a mais amigável.

## Perguntas frequentes

### Existe uma temperatura onde Celsius e Fahrenheit são iguais?

Sim: **−40**. As duas escalas se cruzam exatamente em −40 °C = −40 °F = 233,15 K. É uma ótima âncora mental: acima de −40 o número em Fahrenheit é maior, abaixo de −40 o número em Fahrenheit é menor. Lembre de −40 como o único ponto fixo.

### Por que os EUA ainda usam Fahrenheit?

Razões históricas. Fahrenheit foi definido em 1724 por Daniel Gabriel Fahrenheit, muito antes de Celsius ser proposto em 1742. Quando o sistema métrico se espalhou no século XIX, os EUA já tinham adotado Fahrenheit para clima, culinária e indústria. A troca é politicamente cara (trocar placas, fornos, termostatos) e oferece benefício científico limitado. A maioria dos países que se metricou fez isso no século XX; os EUA não.

### Para que serve Kelvin?

Kelvin é a unidade SI de temperatura e a única escala sem valores negativos. É usada em física, química e engenharia sempre que a temperatura absoluta importa: leis dos gases, termodinâmica, temperatura de cor da luz, física de semicondutores. 0 K é o **zero absoluto**, o limite teórico inferior de temperatura onde o movimento atômico cessa. Para converter Celsius para Kelvin, basta somar 273,15.

### Rankine ainda é usado?

Raramente. Rankine é a contraparte em Fahrenheit de Kelvin (0 °R = zero absoluto, 0 °F = 459,67 °R). Sobrevive em alguns campos da engenharia dos EUA, particularmente em livros-texto antigos de termodinâmica e em certos cálculos aeroespaciais. A engenharia moderna usa exclusivamente Kelvin.

### Por que a fórmula usa 9/5 e não 1,8?

São o mesmo número. \`9/5 = 1,8\` exatamente. A forma de fração é mais comum em matemática escrita porque mostra a razão subjacente: um grau Celsius é 9/5 do tamanho de um grau Fahrenheit. No código, use 1,8 pela clareza, ou use \`9/5\` para que a fórmula se autodocumente.

### Posso converter com Siri, Alexa ou Google Assistente?

Sim. \"E aí Siri, quanto é 100 Celsius em Fahrenheit?\" funciona em todos os principais assistentes. Eles usam as mesmas fórmulas por baixo. É rápido e conveniente para conversões pontuais, mas não é ideal para trabalho em lote.

## Conclusão

A conversão de Celsius para Fahrenheit é uma das tarefas numéricas mais simples da vida cotidiana, e a fórmula \`°F = °C × 9/5 + 32\` vale a pena memorizar. Para um valor pontual, Google ou um assistente de voz está ótimo. Para conversões repetidas, marque o [Conversor de Temperatura do UtilBoxx](/pt/tools/unit/temperature): é privado, grátis e funciona offline. E para programar, as fórmulas em Python ou a CLI \`units\` lidam com qualquer volume de dados sem sair do seu terminal.

Seja qual for o método que você escolher, a matemática é idêntica, e agora você tem todas as quatro fórmulas, mais a âncora de −40, prontas para usar.`;

const celsiusFahrenheitFr = `## Pourquoi convertir Celsius en Fahrenheit ?

La température est l'une des unités les plus converties au quotidien. Les recettes américaines indiquent la température du four en Fahrenheit, les prévisions météo américaines utilisent les °F, et la majeure partie du monde rapporte la température en Celsius. Ajoutez Kelvin (en science), Rankine (dans certains domaines d'ingénierie américains) et vous avez un petit mais réel problème de conversion.

Bonne nouvelle : les formules sont courtes, exactes et faciles à mémoriser. Et avec un outil gratuit dans le navigateur, vous n'avez jamais à calculer à la main.

## Les formules exactes de conversion

Il existe quatre échelles de température que vous rencontrerez, et les conversions entre elles sont linéaires. Les deux points de référence sont le **point de congélation de l'eau** (0 °C = 32 °F = 273,15 K = 491,67 °R) et le **point d'ébullition de l'eau** (100 °C = 212 °F = 373,15 K = 671,67 °R).

### Celsius en Fahrenheit

\`\`\`
°F = °C × 9/5 + 32
\`\`\`

**Exemple** : 100 °C → (100 × 9/5) + 32 = 180 + 32 = **212 °F** (point d'ébullition de l'eau).

### Celsius en Kelvin

\`\`\`
K = °C + 273,15
\`\`\`

**Exemple** : 25 °C → 25 + 273,15 = **298,15 K** (température ambiante standard en science).

### Celsius en Rankine

\`\`\`
°R = (°C + 273,15) × 9/5
\`\`\`

**Exemple** : 0 °C → 273,15 × 9/5 = **491,67 °R**.

### Fahrenheit en Celsius (l'inverse)

\`\`\`
°C = (°F − 32) × 5/9
\`\`\`

**Exemple** : 98,6 °F (température corporelle) → (98,6 − 32) × 5/9 = 66,6 × 5/9 = **37 °C**.

Un raccourci mental utile : 1 °C équivaut à 1,8 °F, et les échelles se croisent à **−40** (c'est-à-dire −40 °C = −40 °F). Si vous ne devez retenir qu'un seul nombre, retenez **−40** : c'est la seule température où Celsius et Fahrenheit affichent la même valeur.

## Table de référence rapide

| Celsius | Fahrenheit | Kelvin | Cas d'usage |
|--------:|-----------:|-------:|------------|
| −40 °C | −40 °F | 233,15 K | Point le plus froid où °C et °F coïncident |
| 0 °C | 32 °F | 273,15 K | L'eau gèle |
| 20 °C | 68 °F | 293,15 K | Pièce confortable |
| 25 °C | 77 °F | 298,15 K | Température standard de laboratoire |
| 37 °C | 98,6 °F | 310,15 K | Température corporelle humaine |
| 100 °C | 212 °F | 373,15 K | L'eau bout |
| 180 °C | 356 °F | 453,15 K | Température de cuisson typique |

## Méthode 1 : Utilisez le convertisseur de température gratuit de UtilBoxx (Recommandé)

La façon la plus rapide, privée et fiable de convertir la température dans le navigateur est le [Convertisseur de Température de UtilBoxx](/fr/tools/unit/temperature). Il prend en charge Celsius, Fahrenheit, Kelvin, Rankine et une douzaine d'autres échelles, avec conversion bidirectionnelle instantanée et une interface épurée. Tout se fait localement dans votre navigateur : pas de serveur, pas de téléversement, pas de logs.

**Comment l'utiliser :**

1. Allez sur [utilboxx.com/fr/tools/unit/temperature](/fr/tools/unit/temperature)
2. Saisissez une valeur dans n'importe quel champ (Celsius, Fahrenheit, Kelvin ou Rankine)
3. Les autres champs se mettent à jour instantanément pendant la saisie
4. Copiez le résultat en un clic

**Pourquoi nous recommandons cette méthode :**

- **100 % gratuit**, sans inscription, sans e-mail, sans captcha
- **Confidentialité d'abord** : tous les calculs s'exécutent dans votre navigateur. Rien n'est envoyé à un serveur.
- **Bidirectionnel** : saisissez dans n'importe quel champ et obtenez le reste immédiatement
- **Couvre les quatre échelles principales** : Celsius, Fahrenheit, Kelvin, Rankine
- **Fonctionne hors ligne** une fois la page chargée
- **Pas de publicités, pas de popups, pas de pistage**

Si vous convertissez la température ne serait-ce que quelques fois par mois, mettre cet outil en favori vous fera gagner plus de temps que toute autre approche.

## Méthode 2 : Recherche Google

Pour une conversion ponctuelle, Google est le chemin le plus rapide. Saisissez une requête comme \`100C to F\` ou \`convertir 25 celsius en fahrenheit\` directement dans la zone de recherche. Google répond avec une carte de conversion intégrée en haut des résultats.

**Avantages :** zéro friction, aucun clic requis, fonctionne sur tout appareil avec navigateur.

**Inconvénients :** nécessite une connexion internet, bon pour une seule valeur à la fois, et Google enregistre chaque conversion que vous faites. Si vous convertissez des données sensibles (température clinique, mesure de laboratoire liée à un patient), préférez une méthode hors ligne. Google gère bien uniquement les paires courantes : Fahrenheit en Rankine nécessite souvent un clic supplémentaire.

## Méthode 3 : Python (ou tout langage)

Si vous écrivez du code, une seule ligne couvre toutes les formules. En Python :

\`\`\`python
def c_to_f(c): return (c * 9/5) + 32
def c_to_k(c): return c + 273.15
def c_to_r(c): return (c + 273.15) * 9/5
def f_to_c(f): return (f - 32) * 5/9

print(c_to_f(100))   # 212.0
print(c_to_k(25))    # 298.15
print(c_to_r(0))     # 491.67
print(f_to_c(98.6))  # 37.0
\`\`\`

Les mêmes formules se déclinent dans tout langage. En JavaScript :

\`\`\`js
const cToF = c => (c * 9/5) + 32;
const cToK = c => c + 273.15;
const fToC = f => (f - 32) * 5/9;
\`\`\`

Pour la conversion par lots d'un fichier CSV, un script de 5 lignes traite des milliers de lignes en millisecondes.

## Méthode 4 : CLI avec units (Linux/macOS)

L'utilitaire GNU \`units\` gère la conversion de température en ligne de commande. Il est préinstallé sur la plupart des distributions Linux et disponible via Homebrew sur macOS (\`brew install units\`).

\`\`\`bash
# Convertir 100 Celsius en Fahrenheit
units "100 Celsius" "Fahrenheit"
# Résultat : 212

# Convertir la température corporelle
units "98.6 Fahrenheit" "Celsius"
# Résultat : 37

# Celsius en Kelvin
units "0 Celsius" "Kelvin"
# Résultat : 273.15
\`\`\`

\`units\` est le favori des administrateurs système et des scripts shell qui ont besoin d'incruster des conversions dans des pipelines. Notez que sur macOS l'outil \`units\` intégré est la variante BSD et utilise une syntaxe différente ; la version GNU ci-dessus est la plus conviviale.

## Questions fréquentes

### Existe-t-il une température où Celsius et Fahrenheit sont égaux ?

Oui : **−40**. Les deux échelles se croisent exactement à −40 °C = −40 °F = 233,15 K. C'est une excellente ancre mentale : au-dessus de −40 le nombre en Fahrenheit est plus grand, en dessous de −40 il est plus petit. Souvenez-vous de −40 comme l'unique point fixe.

### Pourquoi les États-Unis utilisent-ils encore Fahrenheit ?

Des raisons historiques. Le Fahrenheit a été défini en 1724 par Daniel Gabriel Fahrenheit, bien avant que le Celsius ne soit proposé en 1742. Lorsque le système métrique s'est répandu au XIXᵉ siècle, les États-Unis avaient déjà adopté le Fahrenheit pour la météo, la cuisine et l'industrie. La transition est politiquement coûteuse (renouveler la signalisation, les fours, les thermostats) et offre un bénéfice scientifique limité. La plupart des pays qui se sont métrifiés l'ont fait au XXᵉ siècle ; les États-Unis ne l'ont pas fait.

### À quoi sert Kelvin ?

Le Kelvin est l'unité SI de température et la seule échelle sans valeurs négatives. Il est utilisé en physique, en chimie et en ingénierie chaque fois que la température absolue compte : lois des gaz, thermodynamique, température de couleur de la lumière, physique des semi-conducteurs. 0 K est le **zéro absolu**, la limite théorique inférieure de température où le mouvement atomique s'arrête. Pour convertir Celsius en Kelvin, ajoutez simplement 273,15.

### Rankine est-il encore utilisé ?

Rarement. Le Rankine est l'équivalent en Fahrenheit du Kelvin (0 °R = zéro absolu, 0 °F = 459,67 °R). Il subsiste dans certains domaines d'ingénierie américains, notamment dans les anciens manuels de thermodynamique et dans certains calculs aérospatiaux. L'ingénierie moderne utilise exclusivement le Kelvin.

### Pourquoi la formule utilise 9/5 et non 1,8 ?

C'est le même nombre. \`9/5 = 1,8\` exactement. La forme fractionnaire est plus courante en mathématiques écrites car elle montre le rapport sous-jacent : un degré Celsius fait 9/5 de la taille d'un degré Fahrenheit. En code, utilisez 1,8 pour la clarté, ou \`9/5\` pour que la formule s'auto-documente.

### Puis-je convertir avec Siri, Alexa ou Google Assistant ?

Oui. « Dis Siri, combien font 100 Celsius en Fahrenheit ? » fonctionne sur tous les assistants principaux. Ils utilisent les mêmes formules en interne. C'est rapide et pratique pour des conversions ponctuelles, mais pas idéal pour le travail par lots.

## Conclusion

La conversion Celsius en Fahrenheit est l'une des tâches numériques les plus simples de la vie quotidienne, et la formule \`°F = °C × 9/5 + 32\` mérite d'être mémorisée. Pour une valeur ponctuelle, Google ou un assistant vocal suffit. Pour des conversions répétées, mettez en favori le [Convertisseur de Température de UtilBoxx](/fr/tools/unit/temperature) : il est privé, gratuit et fonctionne hors ligne. Et pour scripter, les formules en Python ou la CLI \`units\` gèrent n'importe quel volume de données sans quitter votre terminal.

Quelle que soit la méthode choisie, les mathématiques sont identiques, et vous avez maintenant les quatre formules, plus l'ancre des −40, prêtes à l'emploi.`;

const celsiusFahrenheitDe = `## Warum Celsius in Fahrenheit umrechnen?

Temperatur ist eine der am häufigsten umgerechneten Einheiten im Alltag. Amerikanische Rezepte geben die Backofentemperatur in Fahrenheit an, US-Wettervorhersagen verwenden °F, und der größte Teil der Welt gibt die Temperatur in Celsius an. Addieren Sie Kelvin (in der Wissenschaft), Rankine (in einigen US-Ingenieurbereichen) und Sie haben ein kleines, aber reales Umrechnungsproblem.

Die gute Nachricht: Die Formeln sind kurz, exakt und leicht zu merken. Und mit einem kostenlosen Browser-Werkzeug müssen Sie nie von Hand rechnen.

## Die exakten Umrechnungsformeln

Es gibt vier Temperaturskalen, denen Sie begegnen werden, und die Umrechnungen zwischen ihnen sind linear. Die beiden Referenzpunkte sind der **Gefrierpunkt von Wasser** (0 °C = 32 °F = 273,15 K = 491,67 °R) und der **Siedepunkt von Wasser** (100 °C = 212 °F = 373,15 K = 671,67 °R).

### Celsius zu Fahrenheit

\`\`\`
°F = °C × 9/5 + 32
\`\`\`

**Beispiel**: 100 °C → (100 × 9/5) + 32 = 180 + 32 = **212 °F** (Siedepunkt von Wasser).

### Celsius zu Kelvin

\`\`\`
K = °C + 273,15
\`\`\`

**Beispiel**: 25 °C → 25 + 273,15 = **298,15 K** (Standard-Raumtemperatur in der Wissenschaft).

### Celsius zu Rankine

\`\`\`
°R = (°C + 273,15) × 9/5
\`\`\`

**Beispiel**: 0 °C → 273,15 × 9/5 = **491,67 °R**.

### Fahrenheit zu Celsius (die Umkehrung)

\`\`\`
°C = (°F − 32) × 5/9
\`\`\`

**Beispiel**: 98,6 °F (Körpertemperatur) → (98,6 − 32) × 5/9 = 66,6 × 5/9 = **37 °C**.

Eine nützliche mentale Abkürzung: 1 °C-Schritt entspricht 1,8 °F, und die Skalen treffen sich bei **−40** (also −40 °C = −40 °F). Wenn Sie sich nur eine Zahl merken, dann **−40** — es ist die einzige Temperatur, bei der Celsius und Fahrenheit denselben Wert anzeigen.

## Schnellreferenztabelle

| Celsius | Fahrenheit | Kelvin | Anwendungsfall |
|--------:|-----------:|-------:|----------------|
| −40 °C | −40 °F | 233,15 K | Kältester Punkt, an dem °C und °F übereinstimmen |
| 0 °C | 32 °F | 273,15 K | Wasser gefriert |
| 20 °C | 68 °F | 293,15 K | Angenehme Raumtemperatur |
| 25 °C | 77 °F | 298,15 K | Standard-Labortemperatur |
| 37 °C | 98,6 °F | 310,15 K | Menschliche Körpertemperatur |
| 100 °C | 212 °F | 373,15 K | Wasser siedet |
| 180 °C | 356 °F | 453,15 K | Typische Backtemperatur |

## Methode 1: Den kostenlosen Temperaturumrechner von UtilBoxx verwenden (Empfohlen)

Der schnellste, privateste und zuverlässigste Weg, Temperatur im Browser umzurechnen, ist der [Temperaturumrechner von UtilBoxx](/de/tools/unit/temperature). Er unterstützt Celsius, Fahrenheit, Kelvin, Rankine und ein Dutzend weiterer Skalen, mit sofortiger bidirektionaler Umrechnung und einer sauberen Oberfläche. Alles passiert lokal in Ihrem Browser — kein Server, kein Upload, keine Logs.

**So verwenden Sie ihn:**

1. Gehen Sie zu [utilboxx.com/de/tools/unit/temperature](/de/tools/unit/temperature)
2. Geben Sie einen Wert in ein beliebiges Feld ein (Celsius, Fahrenheit, Kelvin oder Rankine)
3. Die anderen Felder aktualisieren sich sofort beim Tippen
4. Kopieren Sie das Ergebnis mit einem Klick

**Warum wir diese Methode empfehlen:**

- **100 % kostenlos**, keine Registrierung, keine E-Mail, kein Captcha
- **Privatsphäre zuerst**: Alle Berechnungen laufen in Ihrem Browser. Nichts wird an einen Server gesendet.
- **Bidirektional**: Geben Sie in ein beliebiges Feld ein und erhalten Sie den Rest sofort
- **Deckt alle vier Hauptskalen ab**: Celsius, Fahrenheit, Kelvin, Rankine
- **Funktioniert offline**, sobald die Seite geladen ist
- **Keine Werbung, keine Pop-ups, kein Tracking**

Wenn Sie Temperatur auch nur ein paar Mal im Monat umrechnen, spart das Favorisieren dieses Werkzeugs mehr Zeit als jeder andere Ansatz.

## Methode 2: Google-Suche

Für eine einmalige Umrechnung ist Google der schnellste Weg. Geben Sie eine Anfrage wie \`100C to F\` oder \`25 Celsius in Fahrenheit umrechnen\` direkt in das Suchfeld ein. Google antwortet mit einer eingebauten Umrechnungskarte oben in den Ergebnissen.

**Vorteile:** Null Reibung, kein Klick nötig, funktioniert auf jedem Gerät mit Browser.

**Nachteile:** Erfordert eine Internetverbindung, nur für einen Wert gleichzeitig gut, und Google protokolliert jede Umrechnung, die Sie machen. Wenn Sie sensible Daten umrechnen (klinische Temperatur, Labormessung mit Patientenbezug), bevorzugen Sie eine Offline-Methode. Google handhabt auch nur gängige Paare gut — Fahrenheit zu Rankine benötigt oft einen zusätzlichen Klick.

## Methode 3: Python (oder jede Sprache)

Wenn Sie Code schreiben, deckt eine Einzeiler alle Formeln ab. In Python:

\`\`\`python
def c_to_f(c): return (c * 9/5) + 32
def c_to_k(c): return c + 273.15
def c_to_r(c): return (c + 273.15) * 9/5
def f_to_c(f): return (f - 32) * 5/9

print(c_to_f(100))   # 212.0
print(c_to_k(25))    # 298.15
print(c_to_r(0))     # 491.67
print(f_to_c(98.6))  # 37.0
\`\`\`

Dieselben Formeln portieren in jede Sprache. In JavaScript:

\`\`\`js
const cToF = c => (c * 9/5) + 32;
const cToK = c => c + 273.15;
const fToC = f => (f - 32) * 5/9;
\`\`\`

Für die Batch-Umrechnung einer CSV-Datei verarbeitet ein 5-Zeilen-Skript Tausende von Zeilen in Millisekunden.

## Methode 4: CLI mit units (Linux/macOS)

Das GNU-Dienstprogramm \`units\` erledigt die Temperaturumrechnung in der Kommandozeile. Es ist auf den meisten Linux-Distributionen vorinstalliert und auf macOS über Homebrew verfügbar (\`brew install units\`).

\`\`\`bash
# 100 Celsius in Fahrenheit umrechnen
units "100 Celsius" "Fahrenheit"
# Ergebnis: 212

# Körpertemperatur umrechnen
units "98.6 Fahrenheit" "Celsius"
# Ergebnis: 37

# Celsius zu Kelvin
units "0 Celsius" "Kelvin"
# Ergebnis: 273.15
\`\`\`

\`units\` ist der Favorit von Systemadministratoren und Shell-Skripten, die Umrechnungen in Pipelines einbetten müssen. Beachten Sie, dass auf macOS das eingebaute \`units\`-Werkzeug die BSD-Variante ist und eine andere Syntax verwendet; die obige GNU-Version ist die freundlichere.

## Häufige Fragen

### Gibt es eine Temperatur, bei der Celsius und Fahrenheit gleich sind?

Ja: **−40**. Die beiden Skalen kreuzen sich genau bei −40 °C = −40 °F = 233,15 K. Das ist ein großartiger mentaler Anker: oberhalb von −40 ist die Fahrenheit-Zahl größer, unterhalb von −40 ist sie kleiner. Merken Sie sich −40 als den einen festen Punkt.

### Warum verwenden die USA immer noch Fahrenheit?

Historische Gründe. Fahrenheit wurde 1724 von Daniel Gabriel Fahrenheit definiert, lange bevor Celsius 1742 vorgeschlagen wurde. Als sich das metrische System im 19. Jahrhundert ausbreitete, hatten die USA Fahrenheit bereits für Wetter, Kochen und Industrie übernommen. Eine Umstellung ist politisch teuer (Beschilderung, Öfen, Thermostate erneuern) und bietet begrenzten wissenschaftlichen Nutzen. Die meisten Länder, die sich metriciert haben, taten dies im 20. Jahrhundert; die USA nicht.

### Wofür wird Kelvin verwendet?

Kelvin ist die SI-Einheit der Temperatur und die einzige Skala ohne negative Werte. Es wird in Physik, Chemie und Ingenieurwesen verwendet, wann immer absolute Temperatur zählt: Gasgesetze, Thermodynamik, Farbtemperatur von Licht, Halbleiterphysik. 0 K ist der **absolute Nullpunkt**, die theoretische Untergrenze der Temperatur, an der die atomare Bewegung stoppt. Um Celsius in Kelvin umzurechnen, addieren Sie einfach 273,15.

### Wird Rankine noch verwendet?

Selten. Rankine ist das Fahrenheit-Gegenstück zu Kelvin (0 °R = absoluter Nullpunkt, 0 °F = 459,67 °R). Es überlebt in einigen US-Ingenieurbereichen, besonders in älteren Thermodynamik-Lehrbüchern und in bestimmten Luft- und Raumfahrtberechnungen. Die moderne Technik verwendet ausschließlich Kelvin.

### Warum verwendet die Formel 9/5 und nicht 1,8?

Es ist dieselbe Zahl. \`9/5 = 1,8\` exakt. Die Bruchform ist in der geschriebenen Mathematik üblicher, weil sie das zugrundeliegende Verhältnis zeigt: ein Celsius-Grad ist 9/5 so groß wie ein Fahrenheit-Grad. Im Code verwenden Sie 1,8 für Klarheit oder \`9/5\`, damit sich die Formel selbst dokumentiert.

### Kann ich mit Siri, Alexa oder Google Assistant umrechnen?

Ja. „Hey Siri, wie viel Fahrenheit sind 100 Celsius?" funktioniert auf allen großen Assistenten. Sie verwenden intern dieselben Formeln. Es ist schnell und bequem für einmalige Umrechnungen, aber nicht ideal für Stapelverarbeitung.

## Fazit

Die Umrechnung von Celsius in Fahrenheit ist eine der einfachsten numerischen Aufgaben im Alltag, und die Formel \`°F = °C × 9/5 + 32\` lohnt sich zu merken. Für einen einmaligen Wert sind Google oder ein Sprachassistent in Ordnung. Für wiederholte Umrechnungen setzen Sie ein Lesezeichen auf den [Temperaturumrechner von UtilBoxx](/de/tools/unit/temperature) — er ist privat, kostenlos und funktioniert offline. Und zum Skripten erledigen die Formeln in Python oder die \`units\`-CLI jedes Datenvolumen, ohne Ihr Terminal zu verlassen.

Welche Methode Sie auch wählen, die Mathematik ist identisch — und jetzt haben Sie alle vier Formeln, plus den −40-Anker, einsatzbereit.`;

export const celsiusFahrenheitPost: Record<string, BlogPost> = {
  en: {
    slug: "celsius-to-fahrenheit-conversion",
    category: "Unit Tools",
    date: "2026-03-15",
    readTime: "4 min",
    title: "Celsius to Fahrenheit Conversion: The Complete Guide",
    description: "Convert Celsius to Fahrenheit, Kelvin, and Rankine. With the exact formula and a free browser tool.",
    content: celsiusFahrenheitEn,
  },
  zh: {
    slug: "celsius-to-fahrenheit-conversion",
    category: "单位工具",
    date: "2026-03-15",
    readTime: "4 分钟",
    title: "摄氏转华氏换算：完整指南",
    description: "在摄氏、华氏、开尔文和兰金之间换算。包含精确公式和免费浏览器工具。",
    content: celsiusFahrenheitZh,
  },
  ja: {
    slug: "celsius-to-fahrenheit-conversion",
    category: "単位ツール",
    date: "2026-03-15",
    readTime: "4 分",
    title: "摂氏から華氏への換算：完全ガイド",
    description: "摂氏、華氏、ケルビン、ランキンの間で換算。正確な式と無料ブラウザツールを紹介。",
    content: celsiusFahrenheitJa,
  },
  es: {
    slug: "celsius-to-fahrenheit-conversion",
    category: "Herramientas de unidades",
    date: "2026-03-15",
    readTime: "4 min",
    title: "Conversión de Celsius a Fahrenheit: La guía completa",
    description: "Convierte entre Celsius, Fahrenheit, Kelvin y Rankine. Con la fórmula exacta y una herramienta gratuita en el navegador.",
    content: celsiusFahrenheitEs,
  },
  pt: {
    slug: "celsius-to-fahrenheit-conversion",
    category: "Ferramentas de unidades",
    date: "2026-03-15",
    readTime: "4 min",
    title: "Conversão de Celsius para Fahrenheit: O guia completo",
    description: "Converta entre Celsius, Fahrenheit, Kelvin e Rankine. Com a fórmula exata e uma ferramenta gratuita no navegador.",
    content: celsiusFahrenheitPt,
  },
  fr: {
    slug: "celsius-to-fahrenheit-conversion",
    category: "Outils d'unités",
    date: "2026-03-15",
    readTime: "4 min",
    title: "Conversion Celsius en Fahrenheit : le guide complet",
    description: "Convertissez entre Celsius, Fahrenheit, Kelvin et Rankine. Avec la formule exacte et un outil gratuit dans le navigateur.",
    content: celsiusFahrenheitFr,
  },
  de: {
    slug: "celsius-to-fahrenheit-conversion",
    category: "Einheiten-Tools",
    date: "2026-03-15",
    readTime: "4 Min",
    title: "Celsius in Fahrenheit umrechnen: Der vollständige Leitfaden",
    description: "Rechnen Sie zwischen Celsius, Fahrenheit, Kelvin und Rankine um. Mit der exakten Formel und einem kostenlosen Browser-Werkzeug.",
    content: celsiusFahrenheitDe,
  },
};
