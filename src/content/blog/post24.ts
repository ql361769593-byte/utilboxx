// Blog post: How to Convert Square Feet to Square Meters
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const sqftSqmEn = `## Why convert square feet to square meters?

Area conversion is one of the most common tasks in real estate, construction, interior design, and land management. The square foot (sq ft) dominates the US, UK (for property listings), Canada, India, and a few other markets. The square meter (sq m or m²) is the SI standard used by the rest of the world for nearly every purpose.

You will hit this conversion when:

- **Buying or renting property**: A US listing says 1,500 sq ft. A European equivalent says 140 m². Which is bigger? (This guide will tell you.)
- **Building or renovating**: Tile, flooring, paint, and wallpaper are sold by coverage area. Mixing units silently produces 10–20% off estimates.
- **Land and farming**: Acres and hectares are the common large-area units. A farmer switching between them needs precise math.
- **Architecture and CAD**: Most international CAD software uses m² as the base unit.

The good news: the formulas are short, exact, and easy to remember.

## The exact conversion formulas

### Square feet to square meters

\`\`\`
1 sq ft = 0.09290304 sq m  (exact, by definition)
1 sq m  = 10.7639104 sq ft   (exact)
\`\`\`

**Why the exact number**: The international foot is defined as **exactly 0.3048 m** (since the 1959 international yard and pound agreement). Squaring that gives **0.09290304 m²** for one square foot — exact, not an approximation.

**Worked examples:**

- **1,000 sq ft → m²**: 1,000 × 0.09290304 = **92.90 m²**
- **100 m² → sq ft**: 100 × 10.7639104 = **1,076.39 sq ft**
- **1,500 sq ft → m²**: 1,500 × 0.09290304 = **139.35 m²** (a typical 3-bedroom apartment in either unit)

### Acres and hectares

The two large-area units you will encounter:

\`\`\`
1 acre      = 4,046.8564224 sq m   (exact)
1 acre      = 0.40468564224 hectare
1 hectare   = 10,000 sq m           (exact)
1 hectare   = 2.4710538147 acres
1 sq km     = 100 hectares          (exact)
\`\`\`

A useful mental anchor: **1 hectare ≈ 2.47 acres**, and **1 acre ≈ 0.405 hectare**. A football field (without the end zones) is about 1 acre; a full soccer pitch is about 0.7 hectare.

### Other area units worth knowing

- **Square yard (sq yd)**: 1 sq yd = 9 sq ft = 0.83612736 m². Used in UK/US for carpet and fabric.
- **Square inch**: 1 sq in = 6.4516 cm² (exact). Common for screen sizes (TVs, monitors, phones).
- **Ares**: 1 are = 100 m². Old metric, still seen in European property listings.
- **Square mile**: 1 sq mi ≈ 2.59 km². Used for cities, counties, and large land parcels in the US.

## Quick reference table

| Unit          | sq m         | sq ft         | Common context              |
|---------------|-------------:|--------------:|-----------------------------|
| 1 sq ft       | 0.0929       | 1             | Apartment, room, lot        |
| 100 sq ft     | 9.29         | 100           | Small apartment, garage     |
| 1,000 sq ft   | 92.90        | 1,000         | Apartment, small house      |
| 1 acre        | 4,046.86     | 43,560        | US land parcel              |
| 1 hectare     | 10,000       | 107,639       | Metric land parcel          |
| 1 sq km       | 1,000,000    | 10,763,910    | City, large region          |

## Method 1: Use UtilBoxx's Area Converter (Recommended)

The fastest, most private, and most precise way to convert area in your browser is the [UtilBoxx Area Converter](/en/tools/unit/area). It supports square meters, square feet, square kilometers, acres, hectares, square miles, square yards, and more, with bidirectional instant conversion. Everything runs in your browser — no server, no upload, no logs.

**How to use it:**

1. Go to [utilboxx.com/en/tools/unit/area](/en/tools/unit/area)
2. Type a value in any field (m², ft², acre, hectare, etc.)
3. All other fields update instantly
4. Copy the result

**Why we recommend this method:**

- **100% free**, no signup, no email, no ads
- **Privacy-first**: nothing leaves your browser
- **Covers all common area units**: m², ft², km², acres, hectares, and more
- **Exact precision** — uses the precise 0.09290304 factor
- **Works on any device** with a browser

If you compare property listings, plan renovations, or work in real estate, this tool will pay for itself the first time you use it.

## Method 2: Google Search

For a one-off conversion, Google is the fastest path. Type \`1500 sq ft to m2\` or \`1000 square meters in square feet\` into the search box. Google replies with a built-in converter card at the top of the results, including the exact conversion.

**Pros:** zero friction, no click required, works on any device with a browser.

**Cons:** requires an internet connection, only good for one value at a time, and Google logs every conversion. For privacy-sensitive values (real estate decisions, confidential property data), prefer an offline method. Google also handles acres and hectares well, but unusual units like ares or square rods may need an additional click.

## Method 3: Python (or any language)

A few lines of Python cover every area conversion. The same factor of 0.09290304 is exact, so you can use it without worrying about floating-point drift.

\`\`\`python
SQM_PER_SQFT = 0.09290304

def sqft_to_sqm(sqft): return sqft * SQM_PER_SQFT
def sqm_to_sqft(sqm):  return sqm / SQM_PER_SQFT

print(sqft_to_sqm(1500))  # 139.35456
print(sqm_to_sqft(100))   # 1076.3910416709721

# Acres and hectares
SQFT_PER_ACRE = 43560
SQM_PER_HECTARE = 10000
SQM_PER_ACRE = 4046.8564224

def acres_to_hectares(ac): return ac * SQM_PER_ACRE / SQM_PER_HECTARE
def hectares_to_acres(ha): return ha * SQM_PER_HECTARE / SQM_PER_ACRE

print(acres_to_hectares(2.5))   # 1.01171...
print(hectares_to_acres(1))     # 2.47105...
\`\`\`

JavaScript, with the same idea:

\`\`\`js
const SQM_PER_SQFT = 0.09290304;
const sqftToSqm = sqft => sqft * SQM_PER_SQFT;
const sqmToSqft = sqm => sqm / SQM_PER_SQFT;
console.log(sqftToSqm(1500).toFixed(2));  // 139.35
\`\`\`

For batch conversion of property data (a CSV with sq ft prices per region, for instance), a 3-line pandas script processes thousands of rows in milliseconds.

## Method 4: CLI with units (Linux/macOS)

The GNU \`units\` utility handles area conversion on the command line. Install on macOS with Homebrew (\`brew install units\`).

\`\`\`bash
# Convert 1500 sq ft to m²
units "1500 sqft" "m2"
# 139.35456

# Convert 1 acre to hectares
units "1 acre" "hectare"
# 0.40468564

# Convert 1 hectare to acres
units "1 hectare" "acre"
# 2.4710538
\`\`\`

\`units\` understands many synonyms (\`sq ft\`, \`square feet\`, \`ft²\`, \`m²\`, \`sq m\`, etc.) and handles compound expressions. It is the fastest path for one-off area math in a shell session, and ideal for shell scripts that need to embed conversions in pipelines.

## Common questions

### Is 1,500 sq ft a big apartment?

It depends on the market. In Manhattan, 1,500 sq ft (~139 m²) is a very large 3-bedroom apartment. In suburban Texas, 1,500 sq ft is a modest starter home. In Mumbai or Tokyo, 1,500 sq ft would be a luxury apartment. The number alone is meaningless without the city context. The size of a "comfortable" home varies by 3-4x between markets.

### How many sq ft is a "1 BHK" in India?

"BHK" stands for Bedroom, Hall, Kitchen. A 1 BHK in India typically ranges from 400 to 700 sq ft (37–65 m²). A 2 BHK is 700–1,200 sq ft. A 3 BHK is 1,200–2,000 sq ft. These vary widely by city — Mumbai and Delhi are tighter, Bangalore and Hyderabad more spacious.

### What is a "guntha" or "cent" in Indian real estate?

Older Indian property units: 1 guntha = 1,089 sq ft (used in Maharashtra, Karnataka). 1 cent = 435.6 sq ft (used in South India, 1 cent = 1/100 acre). Modern Indian real estate has largely standardized to sq ft for apartments and acres for land, but rural property transactions still use guntha and cent.

### Why do some US homes list sq ft and others list acres?

Different markets and different property types. Apartments, condos, and houses are listed in **square feet** because buyers care about interior floor area. Land, farms, and rural properties are listed in **acres** because buyers care about total land area. A 1,500 sq ft house on 0.25 acres is a typical suburban lot. A 1,500 sq ft house on 5 acres is a small farm.

### Is a hectare bigger than an acre?

Yes. **1 hectare = 2.47 acres**. Both are roughly the size of a sports field, but a hectare is closer to 2.5 American football fields, while an acre is about 1 football field. Hectares are the standard unit in the metric system; acres persist in the US, UK, and a few other markets for historical reasons.

### How precise is 1 sq ft = 0.09290304 sq m?

Exact. Since 1959, the international foot is defined as exactly 0.3048 m. Squaring that gives 0.09290304 m² per square foot — exact, not an approximation. Any tool or formula that uses this number is using the precise international standard. Older US survey foot (1 ft = 1200/3937 m) gives a slightly different factor of about 0.09290304 m² as well, but the difference is in the 9th decimal.

## Conclusion

Square feet to square meters is one of the easiest conversions to memorize, and the exact factor (0.09290304) has not changed since 1959. For occasional conversions, the [UtilBoxx Area Converter](/en/tools/unit/area) is private, free, and works offline once loaded. For batch work, Python and the \`units\` CLI handle thousands of values without leaving the terminal. And for one-offs, Google or a voice assistant gives an instant answer.

The mental shortcut: **1 m² ≈ 10.76 sq ft** (about 11), and **1,000 sq ft ≈ 93 m²**. With these two anchors, you can sanity-check any real estate listing in your head.`;

const sqftSqmZh = `## 为什么要做平方英尺到平方米的换算？

面积换算是房地产、建筑、室内设计和土地管理中最常见的任务之一。平方英尺（sq ft）在美国、英国（用于房产挂牌）、加拿大、印度和一些其他市场占主导。平方米（sq m 或 m²）是国际标准制（SI）单位，世界其他几乎所有地方都使用它。

你会在以下场景遇到这个换算：

- **买卖或租赁房产**：美国挂牌说 1,500 sq ft。欧洲等价物说 140 m²。哪个更大？（本文会告诉你。）
- **建筑或装修**：瓷砖、地板、油漆和墙纸按覆盖面积销售。单位混用悄无声息地导致估算偏差 10-20%。
- **土地和农业**：英亩和公顷是常见的大面积单位。在两者之间切换的农民需要精确的数学。
- **建筑和 CAD**：大多数国际 CAD 软件使用 m² 作为基本单位。

好消息是：公式都很短、精确、容易记住。

## 精确换算公式

### 平方英尺转平方米

\`\`\`
1 sq ft = 0.09290304 sq m（精确，按定义）
1 sq m  = 10.7639104 sq ft （精确）
\`\`\`

**为什么是精确数字**：自 1959 年国际码和磅协议以来，国际英尺被定义为**正好 0.3048 m**。平方得到 **0.09290304 m²** 每平方英尺 —— 精确，不是近似。

**计算示例：**

- **1,000 sq ft → m²**：1,000 × 0.09290304 = **92.90 m²**
- **100 m² → sq ft**：100 × 10.7639104 = **1,076.39 sq ft**
- **1,500 sq ft → m²**：1,500 × 0.09290304 = **139.35 m²**（任一单位的典型三居室公寓）

### 英亩和公顷

你会遇到的两个大面积单位：

\`\`\`
1 acre      = 4,046.8564224 sq m   （精确）
1 acre      = 0.40468564224 hectare
1 hectare   = 10,000 sq m           （精确）
1 hectare   = 2.4710538147 acres
1 sq km     = 100 hectares          （精确）
\`\`\`

实用的心算锚点：**1 公顷 ≈ 2.47 英亩**，**1 英亩 ≈ 0.405 公顷**。一个橄榄球场（不含端区）约 1 英亩；一个完整的足球场约 0.7 公顷。

### 其他值得知道的面积单位

- **平方码（sq yd）**：1 sq yd = 9 sq ft = 0.83612736 m²。英美用于地毯和织物。
- **平方英寸**：1 sq in = 6.4516 cm²（精确）。常用于屏幕尺寸（电视、显示器、手机）。
- **公亩（are）**：1 are = 100 m²。老的公制单位，在欧洲房产挂牌中仍可见。
- **平方英里**：1 sq mi ≈ 2.59 km²。用于美国的城市、县和大块土地。

## 速查表

| 单位          | 平方米          | 平方英尺          | 常见用途                |
|---------------|---------------:|-----------------:|------------------------|
| 1 sq ft       | 0.0929         | 1                | 公寓、房间、地块        |
| 100 sq ft     | 9.29           | 100              | 小公寓、车库            |
| 1,000 sq ft   | 92.90          | 1,000            | 公寓、小屋              |
| 1 acre        | 4,046.86       | 43,560           | 美国土地地块            |
| 1 hectare     | 10,000         | 107,639          | 公制土地地块            |
| 1 sq km       | 1,000,000      | 10,763,910       | 城市、大区域            |

## 方法一：使用 UtilBoxx 面积换算工具（推荐）

在浏览器中换算面积最快、最私密、最精确的方式是 [UtilBoxx 面积换算工具](/zh/tools/unit/area)。它支持平方米、平方英尺、平方千米、英亩、公顷、平方英里、平方码等，双向即时换算。所有计算在浏览器本地完成 —— 没有服务器、没有上传、没有日志。

**使用方法：**

1. 打开 [utilboxx.com/zh/tools/unit/area](/zh/tools/unit/area)
2. 在任意一个输入框（m²、ft²、acre、hectare 等）输入数值
3. 所有其他输入框即时更新
4. 复制结果

**为什么推荐这个方法：**

- **100% 免费**，无注册、无邮箱、无广告
- **隐私优先**：不离开你的浏览器
- **所有常见面积单位**：m²、ft²、km²、英亩、公顷等
- **精确精度** —— 使用精确的 0.09290304 系数
- **任何有浏览器的设备都能用**

如果你比较房产挂牌、规划装修或从事房地产工作，这个工具第一次用就值回票价。

## 方法二：Google 搜索

一次性换算用 Google 是最快的路径。在搜索框输入 \`1500 sq ft to m2\` 或 \`1000 平方米等于多少平方英尺\`。Google 会在结果顶部返回内建的换算卡片，包括精确换算。

**优点**：零摩擦、无需点击、在任何有浏览器的设备上都能用。

**缺点**：需要联网、一次只能换算一个值，而且 Google 会记录你的每次换算。对于隐私敏感的值（房地产决策、机密房产数据），请优先选择离线方法。Google 处理英亩和公顷也做得很好，但像公亩或平方杆这种不常见单位可能需要额外点一下。

## 方法三：Python（或任何语言）

几行 Python 就能覆盖所有面积换算。0.09290304 这个系数是精确的，所以你可以放心使用，不用担心浮点漂移。

\`\`\`python
SQM_PER_SQFT = 0.09290304

def sqft_to_sqm(sqft): return sqft * SQM_PER_SQFT
def sqm_to_sqft(sqm):  return sqm / SQM_PER_SQFT

print(sqft_to_sqm(1500))  # 139.35456
print(sqm_to_sqft(100))   # 1076.3910416709721

# 英亩和公顷
SQFT_PER_ACRE = 43560
SQM_PER_HECTARE = 10000
SQM_PER_ACRE = 4046.8564224

def acres_to_hectares(ac): return ac * SQM_PER_ACRE / SQM_PER_HECTARE
def hectares_to_acres(ha): return ha * SQM_PER_HECTARE / SQM_PER_ACRE

print(acres_to_hectares(2.5))   # 1.01171...
print(hectares_to_acres(1))     # 2.47105...
\`\`\`

JavaScript 同样的思路：

\`\`\`js
const SQM_PER_SQFT = 0.09290304;
const sqftToSqm = sqft => sqft * SQM_PER_SQFT;
const sqmToSqft = sqm => sqm / SQM_PER_SQFT;
console.log(sqftToSqm(1500).toFixed(2));  // 139.35
\`\`\`

要批量换算房产数据（例如一个按地区 sq ft 单价的 CSV），3 行 pandas 脚本能在毫秒内处理上千行。

## 方法四：命令行 units（Linux/macOS）

GNU 的 \`units\` 工具在命令行里处理面积换算。macOS 上用 Homebrew 安装（\`brew install units\`）。

\`\`\`bash
# 1500 平方英尺转平方米
units "1500 sqft" "m2"
# 139.35456

# 1 英亩转公顷
units "1 acre" "hectare"
# 0.40468564

# 1 公顷转英亩
units "1 hectare" "acre"
# 2.4710538
\`\`\`

\`units\` 理解很多同义词（\`sq ft\`、\`square feet\`、\`ft²\`、\`m²\`、\`sq m\` 等），并处理复合表达式。它是 shell 会话中一次性面积计算的最快路径，也适合在流水线中嵌入换算的 shell 脚本。

## 常见问题

### 1,500 sq ft 算大公寓吗？

取决于市场。在曼哈顿，1,500 sq ft（~139 m²）是一个非常大的三居室公寓。在德州郊区，1,500 sq ft 是一个适中的入门级住宅。在孟买或东京，1,500 sq ft 则是豪华公寓。单独的数字脱离了城市背景就毫无意义。"舒适"住宅的面积在不同市场之间相差 3-4 倍。

### 印度的"1 BHK"是多少 sq ft？

"BHK"代表卧室、客厅、厨房。印度的 1 BHK 通常在 400 到 700 sq ft（37-65 m²）之间。2 BHK 是 700-1,200 sq ft。3 BHK 是 1,200-2,000 sq ft。城市之间差异很大 —— 孟买和德里更紧凑，班加罗尔和海得拉巴更宽敞。

### 印度房地产中的"guntha"或"cent"是什么？

老的印度土地单位：1 guntha = 1,089 sq ft（用于马哈拉施特拉邦、卡纳塔克邦）。1 cent = 435.6 sq ft（用于南印度，1 cent = 1/100 英亩）。现代印度房地产已大部分标准化为公寓用 sq ft、土地用英亩，但农村土地交易仍使用 guntha 和 cent。

### 为什么有些美国房屋用 sq ft 而其他用英亩？

不同的市场和不同的房产类型。公寓、共管公寓和住宅以**平方英尺**挂牌，因为买家关心室内居住面积。土地、农场和农村房产以**英亩**挂牌，因为买家关心总土地面积。0.25 英亩地上的 1,500 sq ft 房子是典型的郊区地块。5 英亩地上的 1,500 sq ft 房子是小农场。

### 公顷比英亩大吗？

是的。**1 公顷 = 2.47 英亩**。两者都大约是一个体育场的面积，但公顷更接近 2.5 个美式橄榄球场，而英亩约 1 个橄榄球场。公顷是公制标准单位；英亩在美国、英国和少数其他市场出于历史原因仍被使用。

### 1 sq ft = 0.09290304 sq m 有多精确？

精确。自 1959 年以来，国际英尺被定义为正好 0.3048 m。平方得到 0.09290304 m² 每平方英尺 —— 精确，不是近似。任何使用这个数字的工具或公式都使用了精确的国际标准。较老的美国测量英尺（1 ft = 1200/3937 m）也给出大约 0.09290304 m² 的系数，但差别在小数点后第 9 位。

## 结论

平方英尺到平方米是最容易记住的换算之一，精确系数（0.09290304）自 1959 年以来没有变过。偶尔换算的话，[UtilBoxx 面积换算工具](/zh/tools/unit/area) 私密、免费、加载后离线可用。批量工作用 Python 和 \`units\` 命令行可以在不离开终端的情况下处理上千个值。偶尔的一次性换算，Google 或语音助手能给出即时答案。

心算捷径：**1 m² ≈ 10.76 sq ft**（约 11），**1,000 sq ft ≈ 93 m²**。有了这两个锚点，你可以在脑中核对任何房产挂牌。`;

const sqftSqmJa = `## なぜ平方フィートを平方メートルに換算するのか？

面積換算は不動産、建築、 interior design、土地管理で最も一般的なタスクの一つです。平方フィート（sq ft）は米国、英国（物件リスティング用）、カナダ、インド、その他いくつかの市場で支配的です。平方メートル（sq m または m²）は SI 標準であり、他のほぼすべての地域であらゆる目的で使用されています。

以下のような場面で換算が必要になります：

- **不動産の売買や賃貸**：米国のリスティングは 1,500 sq ft。ヨーロッパの同等表記は 140 m²。どちらが大きい？（このガイドで分かります。）
- **建築や改装**：タイル、フローリング、ペンキ、壁紙はカバー面積でsoldされます。単位を混ぜると、見積もりが 10-20% 静かにずれます。
- **土地と農業**：エーカーとヘクタールが一般的な広域単位です。両者を行き来する農家には精密な計算が必要です。
- **建築と CAD**：ほとんどの国際的な CAD ソフトウェアは基本単位として m² を使用しています。

朗報です：公式は短く、正確で、覚えやすい。

## 正確な換算公式

### 平方フィートから平方メートル

\`\`\`
1 sq ft = 0.09290304 sq m（正確に、定義により）
1 sq m  = 10.7639104 sq ft （正確）
\`\`\`

**なぜ正確な数字か**：1959 年の国際ヤード・ポンド協定以来、国際フィートは**ちょうど 0.3048 m**と定義されています。2 乗すると 1 平方フィートあたり **0.09290304 m²** になります — 正確で、近似ではありません。

**計算例：**

- **1,000 sq ft → m²**：1,000 × 0.09290304 = **92.90 m²**
- **100 m² → sq ft**：100 × 10.7639104 = **1,076.39 sq ft**
- **1,500 sq ft → m²**：1,500 × 0.09290304 = **139.35 m²**（いずれの単位でも典型的な 3 ベッドルーム apartment）

### エーカーとヘクタール

出会う 2 つの広域単位：

\`\`\`
1 acre      = 4,046.8564224 sq m   （正確）
1 acre      = 0.40468564224 hectare
1 hectare   = 10,000 sq m           （正確）
1 hectare   = 2.4710538147 acres
1 sq km     = 100 hectares          （正確）
\`\`\`

便利な暗算アンカー：**1 ヘクタール ≈ 2.47 エーカー**、**1 エーカー ≈ 0.405 ヘクタール**。フットボールフィールド（エンドゾーンを除く）は約 1 エーカー、サッカーピッチ全体は約 0.7 ヘクタールです。

### 知っておく価値のある他の面積単位

- **平方ヤード（sq yd）**：1 sq yd = 9 sq ft = 0.83612736 m²。英米でカーペットや fabric に使用。
- **平方インチ**：1 sq in = 6.4516 cm²（正確）。スクリーンサイズ（テレビ、モニター、 phone）に一般的。
- **アール（are）**：1 are = 100 m²。古いメートル法で、ヨーロッパの物件リスティングにまだ登場。
- **平方マイル**：1 sq mi ≈ 2.59 km²。米国の都市、郡、大きな土地区画に使用。

## 早見表

| 単位            | 平方メートル     | 平方フィート     | 一般的な用途            |
|----------------|---------------:|---------------:|------------------------|
| 1 sq ft        | 0.0929         | 1              |  apartment、部屋、区画 |
| 100 sq ft      | 9.29           | 100            | 小さな apartment、車庫 |
| 1,000 sq ft    | 92.90          | 1,000          |  apartment、小さな家  |
| 1 acre         | 4,046.86       | 43,560         | 米国の土地区画         |
| 1 hectare      | 10,000         | 107,639        | メートル法の土地区画   |
| 1 sq km        | 1,000,000      | 10,763,910     | 都市、大きな地域       |

## 方法 1：UtilBoxx 面積換算ツール（推奨）

ブラウザで面積を換算する最も速く、最もプライベートで、最も正確な方法は [UtilBoxx 面積換算ツール](/ja/tools/unit/area) です。平方メートル、平方フィート、平方キロメートル、エーカー、ヘクタール、平方マイル、平方ヤードなどをサポートし、双方向の即時換算を提供します。すべてブラウザ内で動作します。サーバーも、アップロードも、ログもなし。

**使い方：**

1. [utilboxx.com/ja/tools/unit/area](/ja/tools/unit/area) を開く
2. 任意のフィールド（m²、ft²、acre、hectare など）に値を入力
3. 他のフィールドが即座に更新
4. 結果をコピー

**この方法を推奨する理由：**

- **100% 無料**、登録不要、メールアドレス不要、広告なし
- **プライバシー最優先**：ブラウザから出ない
- **あらゆる一般的な面積単位**をカバー：m²、ft²、km²、エーカー、ヘクタールなど
- **正確な精度** — 正確な 0.09290304 係数を使用
- **ブラウザがあるあらゆるデバイスで動作**

物件リスティングを比較したり、改装を計画したり、不動産で働いたりするなら、このツールは最初に使っただけで元が取れます。

## 方法 2：Google 検索

一度限りの換算なら、Google が最速です。検索ボックスに \`1500 sq ft to m2\` や \`1000 平方フィートを平方メートルに\` と入力します。Google は結果の上部に、正確な換算を含む内蔵換算カードを返します。

**長所**：摩擦ゼロ、クリック不要、ブラウザがあるデバイスで動作。

**短所**：インターネット接続が必要、一度に一つの値しか換算できない、Google がすべての換算をログに記録する。プライバシーに敏感な値（不動産の判断、機密の物件データ）の場合は、オフラインの方法を選んでください。Google はエーカーとヘクタールも上手に扱いますが、アールや平方ロッドのような珍しい単位は追加クリックが必要になることがあります。

## 方法 3：Python（または任意の言語）

わずかな行の Python であらゆる面積換算をカバーできます。0.09290304 という同じ係数は正確なので、浮動小数点のドリフトを心配せずに使用できます。

\`\`\`python
SQM_PER_SQFT = 0.09290304

def sqft_to_sqm(sqft): return sqft * SQM_PER_SQFT
def sqm_to_sqft(sqm):  return sqm / SQM_PER_SQFT

print(sqft_to_sqm(1500))  # 139.35456
print(sqm_to_sqft(100))   # 1076.3910416709721

# エーカーとヘクタール
SQFT_PER_ACRE = 43560
SQM_PER_HECTARE = 10000
SQM_PER_ACRE = 4046.8564224

def acres_to_hectares(ac): return ac * SQM_PER_ACRE / SQM_PER_HECTARE
def hectares_to_acres(ha): return ha * SQM_PER_HECTARE / SQM_PER_ACRE

print(acres_to_hectares(2.5))   # 1.01171...
print(hectares_to_acres(1))     # 2.47105...
\`\`\`

JavaScript でも同じ考え方：

\`\`\`js
const SQM_PER_SQFT = 0.09290304;
const sqftToSqm = sqft => sqft * SQM_PER_SQFT;
const sqmToSqft = sqm => sqm / SQM_PER_SQFT;
console.log(sqftToSqm(1500).toFixed(2));  // 139.35
\`\`\`

物件データの一括換算（例えば、地域別の sq ft 価格を含む CSV）をするには、3 行の pandas スクリプトで数千行をミリ秒で処理できます。

## 方法 4：コマンドラインで units（Linux/macOS）

GNU の \`units\` ユーティリティはコマンドラインで面積を扱えます。macOS では Homebrew でインストール（\`brew install units\`）。

\`\`\`bash
# 1500 平方フィートを m² に換算
units "1500 sqft" "m2"
# 139.35456

# 1 エーカーをヘクタールに
units "1 acre" "hectare"
# 0.40468564

# 1 ヘクタールをエーカーに
units "1 hectare" "acre"
# 2.4710538
\`\`\`

\`units\` は多くの同義語（\`sq ft\`、\`square feet\`、\`ft²\`、\`m²\`、\`sq m\` など）を理解し、複合式を扱います。シェルセッションでの単発面積計算の最速パスであり、パイプラインに換算を埋め込むシェルスクリプトに理想的です。

## よくある質問

### 1,500 sq ft は広いアパートですか？

市場によります。マンハッタンでは 1,500 sq ft（～139 m²）は非常に広い 3 ベッドルームのアパートです。テキサスの郊外では 1,500 sq ft は中規模の starter home です。ムンバイや東京では 1,500 sq ft はラグジュアリーアパートになります。数字だけでは都市の文脈なしには意味がありません。「快適な」住宅の面積は市場間で 3-4 倍異なります。

### インドの「1 BHK」は何 sq ft ですか？

「BHK」は Bedroom（寝室）、Hall（居間）、Kitchen（台所）の略です。インドの 1 BHK は通常 400〜700 sq ft（37-65 m²）の範囲です。2 BHK は 700-1,200 sq ft。3 BHK は 1,200-2,000 sq ft。都市によって大きく異なります — ムンバイとデリーはより狭く、 bangalore とハイデラバードはより広めです。

### インド不動産の「guntha」や「cent」とは？

古いインドの土地単位：1 guntha = 1,089 sq ft（マハーラーシュトラ州、カルナータカ州で使用）。1 cent = 435.6 sq ft（南インドで使用、1 cent = 1/100 エーカー）。現代のインド不動産はアパートには sq ft、土地にはエーカーで大部分標準化されていますが、農村の土地取引ではまだ guntha と cent が使われています。

### なぜ一部の米国の家は sq ft で、他はエーカーで表示されるのか？

異なる市場と異なる物件タイプです。アパート、コンドミニアム、住宅は**平方フィート**でリスティングされます、買い手が室内床面積を気にするからです。土地、農場、田舎の物件は**エーカー**でリスティングされます、買い手が総土地面積を気にするからです。0.25 エーカーの土地にある 1,500 sq ft の家は典型的な郊外の区画です。5 エーカーの土地にある 1,500 sq ft の家は小さな farm です。

### ヘクタールはエーカーより大きいですか？

はい。**1 ヘクタール = 2.47 エーカー**。どちらも約スポーツフィールドの大きさですが、ヘクタールは 2.5 個のアメリカンフットボールフィールドに近く、エーカーは約 1 個です。ヘクタールはメートル法の標準単位です。エーカーは歴史的な理由で米国、英国、その他いくつかの市場で残っています。

### 1 sq ft = 0.09290304 sq m はどのくらい正確ですか？

正確です。1959 年以来、国際フィートはちょうど 0.3048 m と定義されています。2 乗すると平方フィートあたり 0.09290304 m² になります — 正確で、近似ではありません。この数字を使うツールや公式は、正確な国際標準を使用しています。古い米国測量フィート（1 ft = 1200/3937 m）も約 0.09290304 m² の係数を与えますが、差は小数点 9 桁目です。

## まとめ

平方フィートから平方メートルは最も覚えやすい換算の一つであり、正確な係数（0.09290304）は 1959 年から変わっていません。たまに換算するなら、[UtilBoxx 面積換算ツール](/ja/tools/unit/area) はプライベートで、無料で、読み込み後はオフラインで動作します。バッチ作業には Python と \`units\` コマンドラインが、ターミナルから出ずに何千もの値を処理できます。単発なら、Google や音声アシスタントが即座に答えてくれます。

暗算の近道：**1 m² ≈ 10.76 sq ft**（約 11）、**1,000 sq ft ≈ 93 m²**。この 2 つのアンカーがあれば、どんな物件リスティングも頭の中で sanity-check できます。`;

const sqftSqmEs = `## ¿Por qué convertir pies cuadrados a metros cuadrados?

La conversión de área es una de las tareas más comunes en bienes raíces, construcción, diseño de interiores y gestión de tierras. El pie cuadrado (sq ft) domina en EE. UU., el Reino Unido (para listados de propiedades), Canadá, India y algunos otros mercados. El metro cuadrado (sq m o m²) es el estándar SI usado por el resto del mundo para casi cualquier propósito.

Encontrará esta conversión cuando:

- **Compre o alquile propiedades**: Un listado estadounidense dice 1,500 sq ft. Un equivalente europeo dice 140 m². ¿Cuál es más grande? (Esta guía se lo dirá.)
- **Construya o renueve**: Las baldosas, pisos, pintura y papel tapiz se venden por área de cobertura. Mezclar unidades silenciosamente produce estimaciones con un 10–20 % de error.
- **Tierra y agricultura**: Acres y hectáreas son las unidades de área grande comunes. Un agricultor que cambia entre ellas necesita matemáticas precisas.
- **Arquitectura y CAD**: La mayoría del software CAD internacional usa m² como unidad base.

La buena noticia: las fórmulas son cortas, exactas y fáciles de memorizar.

## Las fórmulas exactas de conversión

### Pies cuadrados a metros cuadrados

\`\`\`
1 sq ft = 0.09290304 sq m  (exacto, por definición)
1 sq m  = 10.7639104 sq ft   (exacto)
\`\`\`

**Por qué el número exacto**: El pie internacional se define como **exactamente 0,3048 m** (desde el acuerdo internacional de yarda y libra de 1959). Elevarlo al cuadrado da **0,09290304 m²** por pie cuadrado — exacto, no una aproximación.

**Ejemplos trabajados:**

- **1.000 sq ft → m²**: 1.000 × 0,09290304 = **92,90 m²**
- **100 m² → sq ft**: 100 × 10,7639104 = **1.076,39 sq ft**
- **1.500 sq ft → m²**: 1.500 × 0,09290304 = **139,35 m²** (un apartamento típico de 3 dormitorios en cualquier unidad)

### Acres y hectáreas

Las dos unidades de área grande que encontrará:

\`\`\`
1 acre      = 4.046,8564224 sq m   (exacto)
1 acre      = 0,40468564224 hectare
1 hectare   = 10.000 sq m           (exacto)
1 hectare   = 2,4710538147 acres
1 sq km     = 100 hectares          (exacto)
\`\`\`

Un ancla mental útil: **1 hectárea ≈ 2,47 acres**, y **1 acre ≈ 0,405 hectáreas**. Un campo de fútbol americano (sin las zonas de anotación) mide aproximadamente 1 acre; una cancha de fútbol completa mide cerca de 0,7 hectáreas.

### Otras unidades de área que vale la pena conocer

- **Yarda cuadrada (sq yd)**: 1 sq yd = 9 sq ft = 0,83612736 m². Usada en RU/EE. UU. para alfombras y telas.
- **Pulgada cuadrada**: 1 sq in = 6,4516 cm² (exacto). Común para tamaños de pantalla (TVs, monitores, teléfonos).
- **Área (are)**: 1 are = 100 m². Métrica antigua, todavía aparece en listados europeos.
- **Milla cuadrada**: 1 sq mi ≈ 2,59 km². Usada para ciudades, condados y parcelas grandes en EE. UU.

## Tabla de referencia rápida

| Unidad        | m²            | sq ft          | Contexto común            |
|---------------|--------------:|---------------:|---------------------------|
| 1 sq ft       | 0,0929        | 1              | Apartment, habitación     |
| 100 sq ft     | 9,29          | 100            | Apartment pequeño, garage |
| 1.000 sq ft   | 92,90         | 1.000          | Apartment, casa pequeña   |
| 1 acre        | 4.046,86      | 43.560         | Parcela de tierra EE. UU. |
| 1 hectare     | 10.000        | 107.639        | Parcela de tierra métrica |
| 1 sq km       | 1.000.000     | 10.763.910     | Ciudad, región grande     |

## Método 1: Use el conversor de área de UtilBoxx (Recomendado)

La forma más rápida, privada y precisa de convertir área en el navegador es el [Conversor de Área de UtilBoxx](/es/tools/unit/area). Soporta metros cuadrados, pies cuadrados, kilómetros cuadrados, acres, hectáreas, millas cuadradas, yardas cuadradas y más, con conversión bidireccional instantánea. Todo se ejecuta en su navegador: sin servidor, sin carga, sin registros.

**Cómo usarlo:**

1. Vaya a [utilboxx.com/es/tools/unit/area](/es/tools/unit/area)
2. Escriba un valor en cualquier campo (m², ft², acre, hectare, etc.)
3. Todos los demás campos se actualizan al instante
4. Copie el resultado

**Por qué recomendamos este método:**

- **100 % gratis**, sin registro, sin email, sin anuncios
- **Privacidad primero**: nada sale de su navegador
- **Cubre todas las unidades de área comunes**: m², ft², km², acres, hectáreas y más
- **Precisión exacta** — usa el factor preciso 0,09290304
- **Funciona en cualquier dispositivo** con navegador

Si compara listados de propiedades, planifica renovaciones o trabaja en bienes raíces, esta herramienta se amortiza la primera vez que la usa.

## Método 2: Búsqueda en Google

Para una conversión puntual, Google es el camino más rápido. Escriba \`1500 sq ft to m2\` o \`1000 metros cuadrados en pies cuadrados\` en el cuadro de búsqueda. Google responde con una tarjeta de conversión integrada en la parte superior de los resultados, incluyendo la conversión exacta.

**Ventajas:** cero fricción, sin clics, funciona en cualquier dispositivo con navegador.

**Desventajas:** requiere conexión a internet, solo es útil para un valor a la vez, y Google registra cada conversión. Para valores sensibles a la privacidad (decisiones inmobiliarias, datos confidenciales de propiedades), prefiera un método sin conexión. Google maneja bien acres y hectáreas, pero unidades inusuales como áreas o rods cuadrados pueden necesitar un clic adicional.

## Método 3: Python (o cualquier lenguaje)

Unas pocas líneas de Python cubren cada conversión de área. El mismo factor de 0,09290304 es exacto, por lo que puede usarlo sin preocuparse por la deriva de punto flotante.

\`\`\`python
SQM_PER_SQFT = 0.09290304

def sqft_to_sqm(sqft): return sqft * SQM_PER_SQFT
def sqm_to_sqft(sqm):  return sqm / SQM_PER_SQFT

print(sqft_to_sqm(1500))  # 139.35456
print(sqm_to_sqft(100))   # 1076.3910416709721

# Acres y hectáreas
SQFT_PER_ACRE = 43560
SQM_PER_HECTARE = 10000
SQM_PER_ACRE = 4046.8564224

def acres_to_hectares(ac): return ac * SQM_PER_ACRE / SQM_PER_HECTARE
def hectares_to_acres(ha): return ha * SQM_PER_HECTARE / SQM_PER_ACRE

print(acres_to_hectares(2.5))   # 1.01171...
print(hectares_to_acres(1))     # 2.47105...
\`\`\`

En JavaScript, con la misma idea:

\`\`\`js
const SQM_PER_SQFT = 0.09290304;
const sqftToSqm = sqft => sqft * SQM_PER_SQFT;
const sqmToSqft = sqm => sqm / SQM_PER_SQFT;
console.log(sqftToSqm(1500).toFixed(2));  // 139.35
\`\`\`

Para conversión por lotes de datos de propiedades (un CSV con precios por sq ft por región, por ejemplo), un script de pandas de 3 líneas procesa miles de filas en milisegundos.

## Método 4: CLI con units (Linux/macOS)

La utilidad GNU \`units\` maneja la conversión de área en la línea de comandos. Instale en macOS con Homebrew (\`brew install units\`).

\`\`\`bash
# Convertir 1500 sq ft a m²
units "1500 sqft" "m2"
# 139.35456

# Convertir 1 acre a hectáreas
units "1 acre" "hectare"
# 0.40468564

# Convertir 1 hectárea a acres
units "1 hectare" "acre"
# 2.4710538
\`\`\`

\`units\` entiende muchos sinónimos (\`sq ft\`, \`square feet\`, \`ft²\`, \`m²\`, \`sq m\`, etc.) y maneja expresiones compuestas. Es el camino más rápido para matemáticas de área puntuales en una sesión de shell, e ideal para scripts de shell que necesitan incrustar conversiones en pipelines.

## Preguntas frecuentes

### ¿Es 1.500 sq ft un apartamento grande?

Depende del mercado. En Manhattan, 1.500 sq ft (~139 m²) es un apartamento de 3 dormitorios muy grande. En los suburbios de Texas, 1.500 sq ft es una casa de inicio modesta. En Mumbai o Tokio, 1.500 sq ft sería un apartamento de lujo. El número por sí solo no tiene sentido sin el contexto de la ciudad. El tamaño de una casa "cómoda" varía entre 3 y 4 veces entre mercados.

### ¿Cuántos sq ft tiene un "1 BHK" en India?

"BHK" significa Bedroom (dormitorio), Hall (sala), Kitchen (cocina). Un 1 BHK en India típicamente va de 400 a 700 sq ft (37–65 m²). Un 2 BHK es 700–1.200 sq ft. Un 3 BHK es 1.200–2.000 sq ft. Estos varían mucho según la ciudad: Mumbai y Delhi son más ajustados, Bangalore y Hyderabad más espaciosos.

### ¿Qué es un "guntha" o "cent" en bienes raíces indios?

Unidades de tierra indias antiguas: 1 guntha = 1.089 sq ft (usado en Maharashtra, Karnataka). 1 cent = 435,6 sq ft (usado en el sur de India, 1 cent = 1/100 acre). El mercado inmobiliario indio moderno se ha estandarizado en gran medida en sq ft para apartamentos y acres para tierra, pero las transacciones de propiedades rurales todavía usan guntha y cent.

### ¿Por qué algunas casas en EE. UU. se listan en sq ft y otras en acres?

Diferentes mercados y diferentes tipos de propiedad. Los apartamentos, condominios y casas se listan en **pies cuadrados** porque los compradores se preocupan por el área interior del piso. La tierra, granjas y propiedades rurales se listan en **acres** porque los compradores se preocupan por el área total de tierra. Una casa de 1.500 sq ft en 0,25 acres es una parcela suburbana típica. Una casa de 1.500 sq ft en 5 acres es una pequeña granja.

### ¿Es una hectárea más grande que un acre?

Sí. **1 hectárea = 2,47 acres**. Ambos son aproximadamente del tamaño de un campo deportivo, pero una hectárea es más cercana a 2,5 campos de fútbol americano, mientras que un acre es como 1 campo. Las hectáreas son la unidad estándar en el sistema métrico; los acres persisten en EE. UU., el Reino Unido y algunos otros mercados por razones históricas.

### ¿Qué tan preciso es 1 sq ft = 0,09290304 sq m?

Exacto. Desde 1959, el pie internacional se define como exactamente 0,3048 m. Elevado al cuadrado da 0,09290304 m² por pie cuadrado — exacto, no una aproximación. Cualquier herramienta o fórmula que use este número está usando el estándar internacional preciso. El pie de agrimensura estadounidense antiguo (1 ft = 1200/3937 m) da un factor ligeramente diferente de aproximadamente 0,09290304 m² también, pero la diferencia está en el noveno decimal.

## Conclusión

Pies cuadrados a metros cuadrados es una de las conversiones más fáciles de memorizar, y el factor exacto (0,09290304) no ha cambiado desde 1959. Para conversiones ocasionales, el [Conversor de Área de UtilBoxx](/es/tools/unit/area) es privado, gratis y funciona sin conexión una vez cargado. Para trabajo por lotes, Python y la CLI \`units\` manejan miles de valores sin salir de la terminal. Y para conversiones puntuales, Google o un asistente de voz dan una respuesta instantánea.

El atajo mental: **1 m² ≈ 10,76 sq ft** (cerca de 11), y **1.000 sq ft ≈ 93 m²**. Con estos dos anclajes, puede hacer una comprobación de cordura de cualquier listado inmobiliario en su cabeza.`;

const sqftSqmPt = `## Por que converter pés quadrados para metros quadrados?

A conversão de área é uma das tarefas mais comuns em imóveis, construção, design de interiores e gestão de terras. O pé quadrado (sq ft) domina nos EUA, Reino Unido (para listagens de propriedades), Canadá, Índia e alguns outros mercados. O metro quadrado (sq m ou m²) é o padrão SI usado pelo resto do mundo para quase qualquer propósito.

Você vai encontrar esta conversão quando:

- **Comprar ou alugar imóveis**: Uma listagem americana diz 1.500 sq ft. Um equivalente europeu diz 140 m². Qual é maior? (Este guia vai dizer.)
- **Construir ou reformar**: Pisos, azulejos, tinta e papel de parede são vendidos por área de cobertura. Misturar unidades silenciosamente produz estimativas com 10-20 % de erro.
- **Terra e agricultura**: Acres e hectares são as unidades de área grande comuns. Um fazendeiro que alterna entre elas precisa de matemática precisa.
- **Arquitetura e CAD**: A maioria dos softwares CAD internacionais usa m² como unidade base.

A boa notícia: as fórmulas são curtas, exatas e fáceis de memorizar.

## As fórmulas exatas de conversão

### Pés quadrados para metros quadrados

\`\`\`
1 sq ft = 0,09290304 sq m  (exato, por definição)
1 sq m  = 10,7639104 sq ft   (exato)
\`\`\`

**Por que o número exato**: O pé internacional é definido como **exatamente 0,3048 m** (desde o acordo internacional de jarda e libra de 1959). Elevando ao quadrado dá **0,09290304 m²** por pé quadrado — exato, não uma aproximação.

**Exemplos resolvidos:**

- **1.000 sq ft → m²**: 1.000 × 0,09290304 = **92,90 m²**
- **100 m² → sq ft**: 100 × 10,7639104 = **1.076,39 sq ft**
- **1.500 sq ft → m²**: 1.500 × 0,09290304 = **139,35 m²** (um apartamento típico de 3 quartos em qualquer unidade)

### Acres e hectares

As duas unidades de área grande que você vai encontrar:

\`\`\`
1 acre      = 4.046,8564224 sq m   (exato)
1 acre      = 0,40468564224 hectare
1 hectare   = 10.000 sq m           (exato)
1 hectare   = 2,4710538147 acres
1 sq km     = 100 hectares          (exato)
\`\`\`

Uma âncora mental útil: **1 hectare ≈ 2,47 acres**, e **1 acre ≈ 0,405 hectare**. Um campo de futebol americano (sem as zonas de gol) tem cerca de 1 acre; um campo de futebol completo tem cerca de 0,7 hectare.

### Outras unidades de área que vale a pena conhecer

- **Jarda quadrada (sq yd)**: 1 sq yd = 9 sq ft = 0,83612736 m². Usada no RU/EUA para carpetes e tecidos.
- **Polegada quadrada**: 1 sq in = 6,4516 cm² (exato). Comum para tamanhos de tela (TVs, monitores, telefones).
- **Are**: 1 are = 100 m². Métrica antiga, ainda aparece em listagens europeias.
- **Milha quadrada**: 1 sq mi ≈ 2,59 km². Usada para cidades, condados e grandes parcelas nos EUA.

## Tabela de referência rápida

| Unidade       | m²            | sq ft          | Contexto comum            |
|---------------|--------------:|---------------:|---------------------------|
| 1 sq ft       | 0,0929        | 1              | Apartamento, cômodo       |
| 100 sq ft     | 9,29          | 100            | Apto pequeno, garagem     |
| 1.000 sq ft   | 92,90         | 1.000          | Apartamento, casa pequena |
| 1 acre        | 4.046,86      | 43.560         | Parcela de terra EUA      |
| 1 hectare     | 10.000        | 107.639        | Parcela de terra métrica  |
| 1 sq km       | 1.000.000     | 10.763.910     | Cidade, região grande     |

## Método 1: Use o conversor de área do UtilBoxx (Recomendado)

A maneira mais rápida, privada e precisa de converter área no navegador é o [Conversor de Área do UtilBoxx](/pt/tools/unit/area). Suporta metros quadrados, pés quadrados, quilômetros quadrados, acres, hectares, milhas quadradas, jardas quadradas e mais, com conversão bidirecional instantânea. Tudo roda no seu navegador: sem servidor, sem upload, sem registros.

**Como usar:**

1. Acesse [utilboxx.com/pt/tools/unit/area](/pt/tools/unit/area)
2. Digite um valor em qualquer campo (m², ft², acre, hectare, etc.)
3. Todos os outros campos se atualizam instantaneamente
4. Copie o resultado

**Por que recomendamos este método:**

- **100 % grátis**, sem cadastro, sem e-mail, sem anúncios
- **Privacidade em primeiro lugar**: nada sai do seu navegador
- **Cobre todas as unidades de área comuns**: m², ft², km², acres, hectares e mais
- **Precisão exata** — usa o fator preciso 0,09290304
- **Funciona em qualquer dispositivo** com navegador

Se você compara listagens de imóveis, planeja reformas ou trabalha com imóveis, esta ferramenta se paga da primeira vez que você a usa.

## Método 2: Busca no Google

Para uma conversão pontual, o Google é o caminho mais rápido. Digite \`1500 sq ft to m2\` ou \`1000 metros quadrados em pés quadrados\` na caixa de busca. O Google responde com um cartão conversor embutido no topo dos resultados, incluindo a conversão exata.

**Prós:** zero atrito, sem cliques, funciona em qualquer dispositivo com navegador.

**Contras:** requer conexão à internet, só serve para um valor por vez, e o Google registra cada conversão. Para valores sensíveis à privacidade (decisões imobiliárias, dados confidenciais de propriedades), prefira um método offline. O Google lida bem com acres e hectares, mas unidades incomuns como ares ou rods quadrados podem precisar de um clique extra.

## Método 3: Python (ou qualquer linguagem)

Poucas linhas de Python cobrem cada conversão de área. O mesmo fator de 0,09290304 é exato, então você pode usá-lo sem se preocupar com drift de ponto flutuante.

\`\`\`python
SQM_PER_SQFT = 0.09290304

def sqft_to_sqm(sqft): return sqft * SQM_PER_SQFT
def sqm_to_sqft(sqm):  return sqm / SQM_PER_SQFT

print(sqft_to_sqm(1500))  # 139.35456
print(sqm_to_sqft(100))   # 1076.3910416709721

# Acres e hectares
SQFT_PER_ACRE = 43560
SQM_PER_HECTARE = 10000
SQM_PER_ACRE = 4046.8564224

def acres_to_hectares(ac): return ac * SQM_PER_ACRE / SQM_PER_HECTARE
def hectares_to_acres(ha): return ha * SQM_PER_HECTARE / SQM_PER_ACRE

print(acres_to_hectares(2.5))   # 1.01171...
print(hectares_to_acres(1))     # 2.47105...
\`\`\`

Em JavaScript, com a mesma ideia:

\`\`\`js
const SQM_PER_SQFT = 0.09290304;
const sqftToSqm = sqft => sqft * SQM_PER_SQFT;
const sqmToSqft = sqm => sqm / SQM_PER_SQFT;
console.log(sqftToSqm(1500).toFixed(2));  // 139.35
\`\`\`

Para conversão em lote de dados de propriedades (um CSV com preços por sq ft por região, por exemplo), um script pandas de 3 linhas processa milhares de linhas em milissegundos.

## Método 4: CLI com units (Linux/macOS)

O utilitário GNU \`units\` lida com conversão de área na linha de comando. Instale no macOS com Homebrew (\`brew install units\`).

\`\`\`bash
# Converter 1500 sq ft para m²
units "1500 sqft" "m2"
# 139.35456

# Converter 1 acre para hectares
units "1 acre" "hectare"
# 0.40468564

# Converter 1 hectare para acres
units "1 hectare" "acre"
# 2.4710538
\`\`\`

O \`units\` entende muitos sinônimos (\`sq ft\`, \`square feet\`, \`ft²\`, \`m²\`, \`sq m\`, etc.) e lida com expressões compostas. É o caminho mais rápido para matemática de área pontual em uma sessão de shell, e ideal para scripts shell que precisam embutir conversões em pipelines.

## Perguntas frequentes

### 1.500 sq ft é um apartamento grande?

Depende do mercado. Em Manhattan, 1.500 sq ft (~139 m²) é um apartamento de 3 quartos muito grande. Nos subúrbios do Texas, 1.500 sq ft é uma casa inicial modesta. Em Mumbai ou Tóquio, 1.500 sq ft seria um apartamento de luxo. O número sozinho não tem sentido sem o contexto da cidade. O tamanho de uma casa "confortável" varia 3-4 vezes entre mercados.

### Quantos sq ft tem um "1 BHK" na Índia?

"BHK" significa Bedroom (quarto), Hall (sala), Kitchen (cozinha). Um 1 BHK na Índia tipicamente varia de 400 a 700 sq ft (37-65 m²). Um 2 BHK é 700-1.200 sq ft. Um 3 BHK é 1.200-2.000 sq ft. Estes variam muito por cidade — Mumbai e Delhi são mais apertados, Bangalore e Hyderabad mais espaçosos.

### O que é um "guntha" ou "cent" em imóveis indianos?

Unidades de terra indianas antigas: 1 guntha = 1.089 sq ft (usado em Maharashtra, Karnataka). 1 cent = 435,6 sq ft (usado no sul da Índia, 1 cent = 1/100 acre). O mercado imobiliário indiano moderno se padronizou em grande parte em sq ft para apartamentos e acres para terra, mas transações de propriedades rurais ainda usam guntha e cent.

### Por que algumas casas nos EUA são listadas em sq ft e outras em acres?

Diferentes mercados e diferentes tipos de propriedades. Apartamentos, condomínios e casas são listados em **pés quadrados** porque os compradores se importam com a área interna do piso. Terras, fazendas e propriedades rurais são listadas em **acres** porque os compradores se importam com a área total de terra. Uma casa de 1.500 sq ft em 0,25 acre é uma parcela suburbana típica. Uma casa de 1.500 sq ft em 5 acres é uma pequena fazenda.

### Um hectare é maior que um acre?

Sim. **1 hectare = 2,47 acres**. Ambos são aproximadamente do tamanho de um campo esportivo, mas um hectare está mais perto de 2,5 campos de futebol americano, enquanto um acre é cerca de 1 campo. Hectares são a unidade padrão no sistema métrico; acres persistem nos EUA, Reino Unido e alguns outros mercados por razões históricas.

### Quão preciso é 1 sq ft = 0,09290304 sq m?

Exato. Desde 1959, o pé internacional é definido como exatamente 0,3048 m. Elevado ao quadrado dá 0,09290304 m² por pé quadrado — exato, não uma aproximação. Qualquer ferramenta ou fórmula que use este número está usando o padrão internacional preciso. O pé de agrimensura americano antigo (1 ft = 1200/3937 m) dá um fator ligeiramente diferente de aproximadamente 0,09290304 m² também, mas a diferença está na 9ª casa decimal.

## Conclusão

Pés quadrados para metros quadrados é uma das conversões mais fáceis de memorizar, e o fator exato (0,09290304) não mudou desde 1959. Para conversões ocasionais, o [Conversor de Área do UtilBoxx](/pt/tools/unit/area) é privado, grátis e funciona offline uma vez carregado. Para trabalho em lote, Python e a CLI \`units\` lidam com milhares de valores sem sair do terminal. E para conversões pontuais, Google ou um assistente de voz dão uma resposta instantânea.

O atalho mental: **1 m² ≈ 10,76 sq ft** (cerca de 11), e **1.000 sq ft ≈ 93 m²**. Com estas duas âncoras, você pode fazer uma checagem de sanidade de qualquer listagem imobiliária na sua cabeça.`;

const sqftSqmFr = `## Pourquoi convertir des pieds carrés en mètres carrés ?

La conversion de surface est l'une des tâches les plus courantes en immobilier, construction, design d'intérieur et gestion des terres. Le pied carré (sq ft) domine aux États-Unis, au Royaume-Uni (pour les annonces immobilières), au Canada, en Inde et dans quelques autres marchés. Le mètre carré (sq m ou m²) est la norme SI utilisée par le reste du monde pour presque tous les usages.

Vous rencontrerez cette conversion quand :

- **Vous achetez ou louez un bien** : Une annonce américaine indique 1 500 sq ft. Un équivalent européen indique 140 m². Lequel est plus grand ? (Ce guide vous le dira.)
- **Vous construisez ou rénovez** : Le carrelage, le sol, la peinture et le papier peint se vendent par surface couverte. Mélanger les unités produit silencieusement des estimations décalées de 10–20 %.
- **Terres et agriculture** : Acres et hectares sont les unités de grande surface courantes. Un agriculteur qui passe de l'un à l'autre a besoin de mathématiques précises.
- **Architecture et CAO** : La plupart des logiciels de CAO internationaux utilisent le m² comme unité de base.

Bonne nouvelle : les formules sont courtes, exactes et faciles à mémoriser.

## Les formules exactes de conversion

### Pieds carrés en mètres carrés

\`\`\`
1 sq ft = 0,09290304 sq m  (exact, par définition)
1 sq m  = 10,7639104 sq ft   (exact)
\`\`\`

**Pourquoi le nombre exact** : Le pied international est défini comme **exactement 0,3048 m** (depuis l'accord international de la yard et de la livre de 1959). En l'élevant au carré, on obtient **0,09290304 m²** par pied carré — exact, pas une approximation.

**Exemples détaillés :**

- **1 000 sq ft → m²** : 1 000 × 0,09290304 = **92,90 m²**
- **100 m² → sq ft** : 100 × 10,7639104 = **1 076,39 sq ft**
- **1 500 sq ft → m²** : 1 500 × 0,09290304 = **139,35 m²** (un appartement 3 chambres typique dans l'une ou l'autre unité)

### Acres et hectares

Les deux unités de grande surface que vous rencontrerez :

\`\`\`
1 acre      = 4 046,8564224 sq m   (exact)
1 acre      = 0,40468564224 hectare
1 hectare   = 10 000 sq m           (exact)
1 hectare   = 2,4710538147 acres
1 sq km     = 100 hectares          (exact)
\`\`\`

Une ancre mentale utile : **1 hectare ≈ 2,47 acres**, et **1 acre ≈ 0,405 hectare**. Un terrain de football américain (sans les zones d'en-but) fait environ 1 acre ; un terrain de football complet fait environ 0,7 hectare.

### Autres unités de surface à connaître

- **Yard carré (sq yd)** : 1 sq yd = 9 sq ft = 0,83612736 m². Utilisé au RU/aux États-Unis pour la moquette et le tissu.
- **Pouce carré** : 1 sq in = 6,4516 cm² (exact). Courant pour les tailles d'écran (TV, moniteurs, téléphones).
- **Are** : 1 are = 100 m². Ancienne unité métrique, encore présente dans les annonces européennes.
- **Mille carré** : 1 sq mi ≈ 2,59 km². Utilisé pour les villes, comtés et grandes parcelles aux États-Unis.

## Table de référence rapide

| Unité         | m²            | sq ft          | Contexte courant         |
|---------------|--------------:|---------------:|--------------------------|
| 1 sq ft       | 0,0929        | 1              | Apartment, pièce, lot    |
| 100 sq ft     | 9,29          | 100            | Petit apartment, garage  |
| 1 000 sq ft   | 92,90         | 1 000          | Apartment, petite maison |
| 1 acre        | 4 046,86      | 43 560         | Parcelle de terre US     |
| 1 hectare     | 10 000        | 107 639        | Parcelle de terre métrique |
| 1 sq km       | 1 000 000     | 10 763 910     | Ville, grande région     |

## Méthode 1 : Utilisez le convertisseur de surface de UtilBoxx (Recommandé)

La façon la plus rapide, privée et précise de convertir une surface dans le navigateur est le [Convertisseur de Surface de UtilBoxx](/fr/tools/unit/area). Il prend en charge les mètres carrés, pieds carrés, kilomètres carrés, acres, hectares, milles carrés, yards carrés et plus, avec conversion bidirectionnelle instantanée. Tout s'exécute dans votre navigateur : pas de serveur, pas de téléversement, pas de logs.

**Comment l'utiliser :**

1. Allez sur [utilboxx.com/fr/tools/unit/area](/fr/tools/unit/area)
2. Saisissez une valeur dans n'importe quel champ (m², ft², acre, hectare, etc.)
3. Tous les autres champs se mettent à jour instantanément
4. Copiez le résultat

**Pourquoi nous recommandons cette méthode :**

- **100 % gratuit**, sans inscription, sans e-mail, sans publicité
- **Confidentialité d'abord** : rien ne quitte votre navigateur
- **Couvre toutes les unités de surface courantes** : m², ft², km², acres, hectares et plus
- **Précision exacte** — utilise le facteur précis 0,09290304
- **Fonctionne sur tout appareil** avec navigateur

Si vous comparez des annonces immobilières, planifiez des rénovations ou travaillez dans l'immobilier, cet outil est rentabilisé dès la première utilisation.

## Méthode 2 : Recherche Google

Pour une conversion ponctuelle, Google est le chemin le plus rapide. Saisissez \`1500 sq ft to m2\` ou \`1000 mètres carrés en pieds carrés\` dans la zone de recherche. Google répond avec une carte de conversion intégrée en haut des résultats, incluant la conversion exacte.

**Avantages :** zéro friction, aucun clic requis, fonctionne sur tout appareil avec navigateur.

**Inconvénients :** nécessite une connexion internet, bon pour une seule valeur à la fois, et Google enregistre chaque conversion. Pour les valeurs sensibles à la confidentialité (décisions immobilières, données de propriété confidentielles), préférez une méthode hors ligne. Google gère bien les acres et hectares, mais les unités inhabituelles comme les ares ou les rods carrés peuvent nécessiter un clic supplémentaire.

## Méthode 3 : Python (ou tout langage)

Quelques lignes de Python couvrent chaque conversion de surface. Le même facteur 0,09290304 est exact, vous pouvez donc l'utiliser sans vous soucier de la dérive en virgule flottante.

\`\`\`python
SQM_PER_SQFT = 0.09290304

def sqft_to_sqm(sqft): return sqft * SQM_PER_SQFT
def sqm_to_sqft(sqm):  return sqm / SQM_PER_SQFT

print(sqft_to_sqm(1500))  # 139.35456
print(sqm_to_sqft(100))   # 1076.3910416709721

# Acres et hectares
SQFT_PER_ACRE = 43560
SQM_PER_HECTARE = 10000
SQM_PER_ACRE = 4046.8564224

def acres_to_hectares(ac): return ac * SQM_PER_ACRE / SQM_PER_HECTARE
def hectares_to_acres(ha): return ha * SQM_PER_HECTARE / SQM_PER_ACRE

print(acres_to_hectares(2.5))   # 1.01171...
print(hectares_to_acres(1))     # 2.47105...
\`\`\`

En JavaScript, avec la même idée :

\`\`\`js
const SQM_PER_SQFT = 0.09290304;
const sqftToSqm = sqft => sqft * SQM_PER_SQFT;
const sqmToSqft = sqm => sqm / SQM_PER_SQFT;
console.log(sqftToSqm(1500).toFixed(2));  // 139.35
\`\`\`

Pour la conversion par lots de données immobilières (un CSV avec prix au sq ft par région, par exemple), un script pandas de 3 lignes traite des milliers de lignes en millisecondes.

## Méthode 4 : CLI avec units (Linux/macOS)

L'utilitaire GNU \`units\` gère la conversion de surface en ligne de commande. Installez sur macOS avec Homebrew (\`brew install units\`).

\`\`\`bash
# Convertir 1500 sq ft en m²
units "1500 sqft" "m2"
# 139.35456

# Convertir 1 acre en hectares
units "1 acre" "hectare"
# 0.40468564

# Convertir 1 hectare en acres
units "1 hectare" "acre"
# 2.4710538
\`\`\`

\`units\` comprend de nombreux synonymes (\`sq ft\`, \`square feet\`, \`ft²\`, \`m²\`, \`sq m\`, etc.) et gère les expressions composées. C'est le chemin le plus rapide pour des calculs de surface ponctuels dans une session shell, et l'idéal pour les scripts shell qui ont besoin d'incruster des conversions dans des pipelines.

## Questions fréquentes

### 1 500 sq ft, c'est un grand appartement ?

Ça dépend du marché. À Manhattan, 1 500 sq ft (~139 m²) est un très grand appartement 3 chambres. En banlieue du Texas, 1 500 sq ft est une maison de départ modeste. À Mumbai ou Tokyo, 1 500 sq ft serait un appartement de luxe. Le nombre seul n'a pas de sens sans le contexte de la ville. La taille d'une maison « confortable » varie d'un facteur 3 à 4 entre marchés.

### Combien de sq ft fait un « 1 BHK » en Inde ?

« BHK » signifie Bedroom (chambre), Hall (séjour), Kitchen (cuisine). Un 1 BHK en Inde va typiquement de 400 à 700 sq ft (37–65 m²). Un 2 BHK fait 700–1 200 sq ft. Un 3 BHK fait 1 200–2 000 sq ft. Ces chiffres varient beaucoup selon la ville — Mumbai et Delhi sont plus serrés, Bangalore et Hyderabad plus spacieux.

### Qu'est-ce qu'un « guntha » ou « cent » dans l'immobilier indien ?

Anciennes unités de terre indiennes : 1 guntha = 1 089 sq ft (utilisé au Maharashtra, Karnataka). 1 cent = 435,6 sq ft (utilisé dans le sud de l'Inde, 1 cent = 1/100 acre). L'immobilier indien moderne s'est largement standardisé en sq ft pour les appartements et en acres pour les terres, mais les transactions rurales utilisent encore guntha et cent.

### Pourquoi certaines maisons américaines sont-elles en sq ft et d'autres en acres ?

Différents marchés et différents types de biens. Les appartements, copropriétés et maisons sont listés en **pieds carrés** car les acheteurs s'intéressent à la surface intérieure. Les terres, fermes et propriétés rurales sont listées en **acres** car les acheteurs s'intéressent à la surface totale. Une maison de 1 500 sq ft sur 0,25 acre est un lotissement suburbain typique. Une maison de 1 500 sq ft sur 5 acres est une petite ferme.

### Un hectare est-il plus grand qu'un acre ?

Oui. **1 hectare = 2,47 acres**. Les deux font à peu près la taille d'un terrain de sport, mais un hectare se rapproche de 2,5 terrains de football américain, alors qu'un acre fait environ 1 terrain. L'hectare est l'unité standard du système métrique ; l'acre persiste aux États-Unis, au Royaume-Uni et dans quelques autres marchés pour des raisons historiques.

### Quelle est la précision de 1 sq ft = 0,09290304 sq m ?

Exacte. Depuis 1959, le pied international est défini comme exactement 0,3048 m. En l'élevant au carré, on obtient 0,09290304 m² par pied carré — exact, pas une approximation. Tout outil ou formule utilisant ce nombre utilise la norme internationale précise. L'ancien pied d'arpentage américain (1 ft = 1200/3937 m) donne un facteur légèrement différent d'environ 0,09290304 m² aussi, mais la différence est à la 9e décimale.

## Conclusion

Pieds carrés en mètres carrés est l'une des conversions les plus faciles à mémoriser, et le facteur exact (0,09290304) n'a pas changé depuis 1959. Pour des conversions ponctuelles, le [Convertisseur de Surface de UtilBoxx](/fr/tools/unit/area) est privé, gratuit et fonctionne hors ligne une fois chargé. Pour le travail par lots, Python et la CLI \`units\` gèrent des milliers de valeurs sans quitter le terminal. Et pour les conversions ponctuelles, Google ou un assistant vocal donnent une réponse instantanée.

Le raccourci mental : **1 m² ≈ 10,76 sq ft** (environ 11), et **1 000 sq ft ≈ 93 m²**. Avec ces deux ancres, vous pouvez faire une vérification de bon sens de n'importe quelle annonce immobilière dans votre tête.`;

const sqftSqmDe = `## Warum Quadratfuß in Quadratmeter umrechnen?

Die Flächenumrechnung ist eine der häufigsten Aufgaben in Immobilien, Bauwesen, Innenarchitektur und Landmanagement. Der Quadratfuß (sq ft) dominiert in den USA, Großbritannien (für Immobilienanzeigen), Kanada, Indien und einigen anderen Märkten. Der Quadratmeter (sq m oder m²) ist der SI-Standard, der vom Rest der Welt für nahezu jeden Zweck verwendet wird.

Sie begegnen dieser Umrechnung, wenn:

- **Sie eine Immobilie kaufen oder mieten**: Eine US-Anzeige sagt 1.500 sq ft. Eine europäische Entsprechung sagt 140 m². Welches ist größer? (Dieser Leitfaden wird es Ihnen sagen.)
- **Sie bauen oder renovieren**: Fliesen, Böden, Farbe und Tapeten werden nach abgedeckter Fläche verkauft. Das Mischen von Einheiten führt stillschweigend zu 10–20 % falschen Schätzungen.
- **Land und Landwirtschaft**: Acres und Hektare sind die üblichen Großflächeneinheiten. Ein Landwirt, der zwischen ihnen wechselt, braucht präzise Mathematik.
- **Architektur und CAD**: Die meiste internationale CAD-Software verwendet m² als Basiseinheit.

Die gute Nachricht: Die Formeln sind kurz, exakt und leicht zu merken.

## Die exakten Umrechnungsformeln

### Quadratfuß zu Quadratmeter

\`\`\`
1 sq ft = 0,09290304 sq m  (exakt, per Definition)
1 sq m  = 10,7639104 sq ft   (exakt)
\`\`\`

**Warum die exakte Zahl**: Der internationale Fuß ist definiert als **genau 0,3048 m** (seit dem internationalen Yard- und Pfund-Abkommen von 1959). Quadriert ergibt das **0,09290304 m²** pro Quadratfuß — exakt, keine Näherung.

**Durchgerechnete Beispiele:**

- **1.000 sq ft → m²**: 1.000 × 0,09290304 = **92,90 m²**
- **100 m² → sq ft**: 100 × 10,7639104 = **1.076,39 sq ft**
- **1.500 sq ft → m²**: 1.500 × 0,09290304 = **139,35 m²** (eine typische 3-Zimmer-Wohnung in jeder Einheit)

### Acres und Hektare

Die zwei Großflächeneinheiten, denen Sie begegnen werden:

\`\`\`
1 acre      = 4.046,8564224 sq m   (exakt)
1 acre      = 0,40468564224 hectare
1 hectare   = 10.000 sq m           (exakt)
1 hectare   = 2,4710538147 acres
1 sq km     = 100 hectares          (exakt)
\`\`\`

Ein nützlicher mentaler Anker: **1 Hektar ≈ 2,47 Acres**, und **1 Acre ≈ 0,405 Hektar**. Ein American-Football-Feld (ohne Endzonen) ist etwa 1 Acre; ein vollständiger Fußballplatz ist etwa 0,7 Hektar.

### Weitere Flächeneinheiten, die es wert sind, gekannt zu werden

- **Quadratyard (sq yd)**: 1 sq yd = 9 sq ft = 0,83612736 m². In GB/USA für Teppiche und Stoffe verwendet.
- **Quadratzoll**: 1 sq in = 6,4516 cm² (exakt). Üblich für Bildschirmgrößen (TVs, Monitore, Telefone).
- **Ar**: 1 Ar = 100 m². Alte metrische Einheit, taucht noch in europäischen Anzeigen auf.
- **Quadratmeile**: 1 sq mi ≈ 2,59 km². In den USA für Städte, Countys und große Landstücke verwendet.

## Schnellreferenztabelle

| Einheit       | m²            | sq ft          | Üblicher Kontext         |
|---------------|--------------:|---------------:|--------------------------|
| 1 sq ft       | 0,0929        | 1              | Wohnung, Raum, Los       |
| 100 sq ft     | 9,29          | 100            | Kleine Wohnung, Garage   |
| 1.000 sq ft   | 92,90         | 1.000          | Wohnung, kleines Haus    |
| 1 acre        | 4.046,86      | 43.560         | US-Landstück             |
| 1 hectare     | 10.000        | 107.639        | Metrisches Landstück     |
| 1 sq km       | 1.000.000     | 10.763.910     | Stadt, große Region      |

## Methode 1: Den Flächenumrechner von UtilBoxx verwenden (Empfohlen)

Der schnellste, privateste und genaueste Weg, Flächen im Browser umzurechnen, ist der [Flächenumrechner von UtilBoxx](/de/tools/unit/area). Er unterstützt Quadratmeter, Quadratfuß, Quadratkilometer, Acres, Hektare, Quadratmeilen, Quadratyards und mehr, mit bidirektionaler sofortiger Umrechnung. Alles läuft in Ihrem Browser — kein Server, kein Upload, keine Logs.

**So verwenden Sie ihn:**

1. Gehen Sie zu [utilboxx.com/de/tools/unit/area](/de/tools/unit/area)
2. Geben Sie einen Wert in ein beliebiges Feld ein (m², ft², acre, hectare usw.)
3. Alle anderen Felder aktualisieren sich sofort
4. Kopieren Sie das Ergebnis

**Warum wir diese Methode empfehlen:**

- **100 % kostenlos**, keine Registrierung, keine E-Mail, keine Werbung
- **Privatsphäre zuerst**: Nichts verlässt Ihren Browser
- **Deckt alle gängigen Flächeneinheiten ab**: m², ft², km², Acres, Hektare und mehr
- **Exakte Präzision** — verwendet den präzisen Faktor 0,09290304
- **Funktioniert auf jedem Gerät** mit Browser

Wenn Sie Immobilienanzeigen vergleichen, Renovierungen planen oder im Immobilienbereich arbeiten, amortisiert sich dieses Werkzeug bei der ersten Nutzung.

## Methode 2: Google-Suche

Für eine einmalige Umrechnung ist Google der schnellste Weg. Geben Sie \`1500 sq ft to m2\` oder \`1000 Quadratmeter in Quadratfuß\` in das Suchfeld ein. Google antwortet mit einer eingebauten Umrechnungskarte oben in den Ergebnissen, einschließlich der genauen Umrechnung.

**Vorteile:** Null Reibung, kein Klick nötig, funktioniert auf jedem Gerät mit Browser.

**Nachteile:** Erfordert eine Internetverbindung, nur für einen Wert gleichzeitig gut, und Google protokolliert jede Umrechnung. Für datenschutzsensible Werte (Immobilienentscheidungen, vertrauliche Immobiliendaten) bevorzugen Sie eine Offline-Methode. Google handhabt Acres und Hektare gut, aber ungewöhnliche Einheiten wie Ar oder Quadratruten benötigen möglicherweise einen zusätzlichen Klick.

## Methode 3: Python (oder jede Sprache)

Ein paar Zeilen Python decken jede Flächenumrechnung ab. Derselbe Faktor 0,09290304 ist exakt, Sie können ihn also verwenden, ohne sich um Gleitkomma-Drift zu sorgen.

\`\`\`python
SQM_PER_SQFT = 0.09290304

def sqft_to_sqm(sqft): return sqft * SQM_PER_SQFT
def sqm_to_sqft(sqm):  return sqm / SQM_PER_SQFT

print(sqft_to_sqm(1500))  # 139.35456
print(sqm_to_sqft(100))   # 1076.3910416709721

# Acres und Hektare
SQFT_PER_ACRE = 43560
SQM_PER_HECTARE = 10000
SQM_PER_ACRE = 4046.8564224

def acres_to_hectares(ac): return ac * SQM_PER_ACRE / SQM_PER_HECTARE
def hectares_to_acres(ha): return ha * SQM_PER_HECTARE / SQM_PER_ACRE

print(acres_to_hectares(2.5))   # 1.01171...
print(hectares_to_acres(1))     # 2.47105...
\`\`\`

In JavaScript mit derselben Idee:

\`\`\`js
const SQM_PER_SQFT = 0.09290304;
const sqftToSqm = sqft => sqft * SQM_PER_SQFT;
const sqmToSqft = sqm => sqm / SQM_PER_SQFT;
console.log(sqftToSqm(1500).toFixed(2));  // 139.35
\`\`\`

Für die Stapelumrechnung von Immobiliendaten (eine CSV mit sq-ft-Preisen pro Region zum Beispiel) verarbeitet ein 3-zeiliges pandas-Skript Tausende von Zeilen in Millisekunden.

## Methode 4: CLI mit units (Linux/macOS)

Das GNU-Dienstprogramm \`units\` erledigt die Flächenumrechnung in der Kommandozeile. Installieren Sie auf macOS mit Homebrew (\`brew install units\`).

\`\`\`bash
# 1500 sq ft in m² umrechnen
units "1500 sqft" "m2"
# 139.35456

# 1 Acre in Hektare
units "1 acre" "hectare"
# 0.40468564

# 1 Hektar in Acres
units "1 hectare" "acre"
# 2.4710538
\`\`\`

\`units\` versteht viele Synonyme (\`sq ft\`, \`square feet\`, \`ft²\`, \`m²\`, \`sq m\` usw.) und verarbeitet zusammengesetzte Ausdrücke. Es ist der schnellste Weg für einmalige Flächenmathematik in einer Shell-Sitzung und ideal für Shell-Skripte, die Umrechnungen in Pipelines einbetten müssen.

## Häufige Fragen

### Ist 1.500 sq ft eine große Wohnung?

Es kommt auf den Markt an. In Manhattan sind 1.500 sq ft (~139 m²) eine sehr große 3-Zimmer-Wohnung. In den Vororten von Texas sind 1.500 sq ft ein bescheidenes Starterhaus. In Mumbai oder Tokio wären 1.500 sq ft eine Luxuswohnung. Die Zahl allein ist ohne den städtischen Kontext bedeutungslos. Die Größe eines „komfortablen" Hauses variiert zwischen den Märkten um den Faktor 3–4.

### Wie viele sq ft hat eine „1 BHK" in Indien?

„BHK" steht für Bedroom (Schlafzimmer), Hall (Wohnzimmer), Kitchen (Küche). Eine 1 BHK in Indien reicht typischerweise von 400 bis 700 sq ft (37–65 m²). Eine 2 BHK sind 700–1.200 sq ft. Eine 3 BHK sind 1.200–2.000 sq ft. Diese variieren stark nach Stadt — Mumbai und Delhi sind enger, Bangalore und Hyderabad großzügiger.

### Was ist eine „Guntha" oder „Cent" im indischen Immobilienwesen?

Alte indische Landeinheiten: 1 Guntha = 1.089 sq ft (verwendet in Maharashtra, Karnataka). 1 Cent = 435,6 sq ft (verwendet in Südindien, 1 Cent = 1/100 Acre). Der moderne indische Immobilienmarkt hat sich weitgehend auf sq ft für Wohnungen und Acres für Land standardisiert, aber ländliche Immobilientransaktionen verwenden immer noch Guntha und Cent.

### Warum werden einige US-Häuser in sq ft und andere in Acres gelistet?

Unterschiedliche Märkte und unterschiedliche Immobilientypen. Wohnungen, Eigentumswohnungen und Häuser werden in **Quadratfuß** gelistet, weil Käufer an der Innenfläche interessiert sind. Land, Farmen und ländliche Immobilien werden in **Acres** gelistet, weil Käufer an der Gesamtlandfläche interessiert sind. Ein 1.500-sq-ft-Haus auf 0,25 Acres ist ein typisches Vorortgrundstück. Ein 1.500-sq-ft-Haus auf 5 Acres ist eine kleine Farm.

### Ist ein Hektar größer als ein Acre?

Ja. **1 Hektar = 2,47 Acres**. Beide haben ungefähr die Größe eines Spielfelds, aber ein Hektar entspricht etwa 2,5 American-Football-Feldern, während ein Acre etwa 1 Feld entspricht. Hektar sind die Standardeinheit im metrischen System; Acres bestehen in den USA, Großbritannien und einigen anderen Märkten aus historischen Gründen fort.

### Wie präzise ist 1 sq ft = 0,09290304 sq m?

Exakt. Seit 1959 ist der internationale Fuß definiert als genau 0,3048 m. Quadriert ergibt das 0,09290304 m² pro Quadratfuß — exakt, keine Näherung. Jedes Werkzeug oder jede Formel, die diese Zahl verwendet, nutzt den präzisen internationalen Standard. Der alte US-Vermessungsfuß (1 ft = 1200/3937 m) ergibt einen geringfügig anderen Faktor von etwa 0,09290304 m² ebenfalls, aber der Unterschied liegt in der 9. Dezimalstelle.

## Fazit

Quadratfuß zu Quadratmeter ist eine der am einfachsten zu merkenden Umrechnungen, und der exakte Faktor (0,09290304) hat sich seit 1959 nicht geändert. Für gelegentliche Umrechnungen ist der [Flächenumrechner von UtilBoxx](/de/tools/unit/area) privat, kostenlos und funktioniert offline, sobald er geladen ist. Für Stapelverarbeitung bewältigen Python und die \`units\`-CLI Tausende von Werten, ohne das Terminal zu verlassen. Und für gelegentliche Einmalumrechnungen geben Google oder ein Sprachassistent sofortige Antworten.

Die mentale Abkürzung: **1 m² ≈ 10,76 sq ft** (etwa 11), und **1.000 sq ft ≈ 93 m²**. Mit diesen beiden Ankern können Sie jede Immobilienanzeige im Kopf auf Plausibilität prüfen.`;

export const sqftToSqmPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-convert-square-feet-to-square-meters",
    category: "Unit Tools",
    date: "2026-03-25",
    readTime: "4 min",
    title: "How to Convert Square Feet to Square Meters",
    description: "Convert between sq ft, sq m, acres, hectares, and more. With real estate context.",
    content: sqftSqmEn,
  },
  zh: {
    slug: "how-to-convert-square-feet-to-square-meters",
    category: "单位工具",
    date: "2026-03-25",
    readTime: "4 分钟",
    title: "如何换算平方英尺和平方米",
    description: "在平方英尺、平方米、英亩、公顷等单位间换算。附房地产场景。",
    content: sqftSqmZh,
  },
  ja: {
    slug: "how-to-convert-square-feet-to-square-meters",
    category: "単位ツール",
    date: "2026-03-25",
    readTime: "4 分",
    title: "平方フィートと平方メートルの換算方法",
    description: "平方フィート、平方メートル、エーカー、ヘクタールなどの間で換算。不動産の文脈とともに。",
    content: sqftSqmJa,
  },
  es: {
    slug: "how-to-convert-square-feet-to-square-meters",
    category: "Herramientas de unidades",
    date: "2026-03-25",
    readTime: "4 min",
    title: "Cómo convertir pies cuadrados a metros cuadrados",
    description: "Convierta entre pies cuadrados, metros cuadrados, acres, hectáreas y más. Con contexto inmobiliario.",
    content: sqftSqmEs,
  },
  pt: {
    slug: "how-to-convert-square-feet-to-square-meters",
    category: "Ferramentas de unidades",
    date: "2026-03-25",
    readTime: "4 min",
    title: "Como converter pés quadrados para metros quadrados",
    description: "Converta entre pés quadrados, metros quadrados, acres, hectares e mais. Com contexto imobiliário.",
    content: sqftSqmPt,
  },
  fr: {
    slug: "how-to-convert-square-feet-to-square-meters",
    category: "Outils d'unités",
    date: "2026-03-25",
    readTime: "4 min",
    title: "Comment convertir des pieds carrés en mètres carrés",
    description: "Convertissez entre pieds carrés, mètres carrés, acres, hectares et plus. Avec un contexte immobilier.",
    content: sqftSqmFr,
  },
  de: {
    slug: "how-to-convert-square-feet-to-square-meters",
    category: "Einheiten-Tools",
    date: "2026-03-25",
    readTime: "4 Min",
    title: "Quadratfuß in Quadratmeter umrechnen",
    description: "Rechnen Sie zwischen Quadratfuß, Quadratmeter, Acres, Hektare und mehr um. Mit Immobilien-Kontext.",
    content: sqftSqmDe,
  },
};
