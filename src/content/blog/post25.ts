// Blog post: Cubic Feet to Liters Conversion: A Practical Guide
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const cubicFeetLitersEn = `## Why convert cubic feet to liters?

Volume conversion shows up whenever you ship, store, brew, cook, or design anything that holds or moves a measurable quantity of space. The **cubic foot** (cu ft or ft³) is the standard unit in the US for shipping (FedEx, UPS), HVAC sizing, refrigerator and freezer capacity, and natural gas billing. The **liter** (L) is the SI standard for almost everything else, especially in cooking, brewing, automotive (engine displacement), and most countries' consumer packaging.

You will encounter this conversion when:

- **Shipping a package**: FedEx and UPS quote rates based on dimensional weight in cubic inches or cubic feet. International destinations usually report cubic meters.
- **Sizing an HVAC system**: Airflow is rated in CFM (cubic feet per minute). Equipment specs often give liters per second.
- **Refrigerator or freezer shopping**: US models list capacity in cu ft. European models list liters.
- **Brewing and cooking**: Recipes mix units freely. A 5-gallon batch is 18.93 L; a 1 L bottle is 0.0353 cu ft.
- **Engine displacement**: 2.0 L is the same as 122 cu in.

The good news: the formulas are short, exact, and easy to remember.

## The exact conversion formulas

### Cubic feet to liters

\`\`\`
1 cu ft = 28.316846592 L   (exact, by definition)
1 L     = 0.03531466672149 cu ft
1 L     = 1 dm³ (cubic decimeter, exact)
1 m³    = 1,000 L           (exact)
1 m³    = 35.3146667215 cu ft
\`\`\`

**Why the exact number**: Since 1959, the international foot is defined as **exactly 0.3048 m**. A cubic foot is therefore 0.3048³ = 0.028316846592 m³ exactly. A liter is exactly 0.001 m³ (one cubic decimeter). So 1 cu ft = 0.028316846592 / 0.001 = 28.316846592 L, exact.

**Worked examples:**

- **5 cu ft → L**: 5 × 28.316846592 = **141.58 L** (a large duffel bag)
- **100 L → cu ft**: 100 / 28.316846592 = **3.53 cu ft**
- **1.5 cu ft → mL**: 1.5 × 28,316.846592 = **42,475.27 mL** (a small cooler)

### Gallons and other common units

The two gallons you will encounter:

\`\`\`
1 US gallon        = 3.785411784 L     (exact)
1 US gallon        = 0.133680556 cu ft
1 Imperial gallon  = 4.54609 L         (exact)
1 Imperial gallon  = 0.160543653 cu ft
1 cup (US)         = 236.5882365 mL
1 cup (metric)     = 250 mL
1 fluid ounce (US) = 29.5735295625 mL
\`\`\`

**The gallon trap**: US gallons and Imperial (UK) gallons are different. **1 US gallon = 3.785 L**, but **1 Imperial gallon = 4.546 L**. A 1-gallon jug of milk in the US is 3.785 L; the same jug in the UK would be 4.546 L. Mixing these up gives a 20% error.

### Cups, tablespoons, and teaspoons (US)

\`\`\`
1 tablespoon (US) = 14.78676478125 mL
1 teaspoon (US)   = 4.92892159375 mL
1 fluid ounce (US)= 29.5735295625 mL
1 cup (US)        = 236.5882365 mL = 8 fl oz
1 pint (US)       = 473.176473 mL
1 quart (US)      = 946.352946 mL
1 gallon (US)     = 3.785411784 L
\`\`\`

For most cooking, the simple approximation **1 cup ≈ 240 mL** is good enough. For baking or scaling up, use exact values.

## Quick reference table

| Unit            | Liters        | Cubic feet     | Common context              |
|-----------------|--------------:|---------------:|-----------------------------|
| 1 fl oz (US)    | 0.0296        | 0.00104        | Tablespoon of liquid        |
| 1 cup (US)      | 0.2366        | 0.00836        | Coffee mug                  |
| 1 L             | 1             | 0.0353         | Water bottle                |
| 1 gallon (US)   | 3.79          | 0.1337         | Milk jug                    |
| 1 cu ft         | 28.32         | 1              | Carry-on luggage, freezer   |
| 1 m³            | 1,000         | 35.31          | Shipping pallet             |

## Method 1: Use UtilBoxx's Volume Converter (Recommended)

The fastest, most private, and most precise way to convert volume in your browser is the [UtilBoxx Volume Converter](/en/tools/unit/volume). It supports cubic meters, liters, milliliters, cubic feet, cubic inches, US gallons, Imperial gallons, cups, fluid ounces, tablespoons, teaspoons, and more, with bidirectional instant conversion. Everything runs in your browser — no server, no upload, no logs.

**How to use it:**

1. Go to [utilboxx.com/en/tools/unit/volume](/en/tools/unit/volume)
2. Type a value in any field (L, mL, gal, cu ft, cu in, cup, fl oz, etc.)
3. All other fields update instantly
4. Copy the result

**Why we recommend this method:**

- **100% free**, no signup, no email, no ads
- **Privacy-first**: nothing leaves your browser
- **Covers US, Imperial, and metric** simultaneously, so you can compare any two units without doing math
- **Exact precision** — uses the precise 28.316846592 factor
- **Works on any device** with a browser

If you ship packages, brew beer, bake bread, or buy appliances internationally, this tool will save you from costly unit confusion.

## Method 2: Google Search

For a one-off conversion, Google is the fastest path. Type \`5 cu ft to L\` or \`100 liters in cubic feet\` into the search box. Google replies with a built-in converter card at the top of the results.

**Pros:** zero friction, no click required, works on any device with a browser.

**Cons:** requires an internet connection, only good for one value at a time, and Google logs every conversion. For privacy-sensitive values (recipe R&D, supplier pricing), prefer an offline method. Google also has trouble with US vs Imperial gallons and may not distinguish unless you spell it out (e.g., "US gallon").

## Method 3: Python (or any language)

A few lines of Python cover every volume conversion. The same factor of 28.316846592 is exact, so you can use it without worrying about floating-point drift.

\`\`\`python
L_PER_CUFT   = 28.316846592
L_PER_USGAL  = 3.785411784
L_PER_IMPGAL = 4.54609
ML_PER_CUP   = 236.5882365

def cuft_to_l(cuft):     return cuft * L_PER_CUFT
def l_to_cuft(l):        return l / L_PER_CUFT
def usgal_to_l(gal):     return gal * L_PER_USGAL
def impgal_to_l(gal):    return gal * L_PER_IMPGAL
def cup_to_ml(cup):      return cup * ML_PER_CUP

print(cuft_to_l(5))         # 141.58423...
print(usgal_to_l(1))        # 3.785411784
print(impgal_to_l(1))       # 4.54609
print(cup_to_ml(1))         # 236.5882365
\`\`\`

JavaScript, with the same idea:

\`\`\`js
const L_PER_CUFT = 28.316846592;
const cuftToL = cuft => cuft * L_PER_CUFT;
const lToCuft = l => l / L_PER_CUFT;
console.log(cuftToL(5).toFixed(2));  // 141.58
\`\`\`

For batch conversion of recipe data (a CSV of ingredient amounts in cups, say, that you want in mL for a metric cookbook), a 3-line pandas script processes thousands of rows in milliseconds.

## Method 4: CLI with units (Linux/macOS)

The GNU \`units\` utility handles volume conversion on the command line. Install on macOS with Homebrew (\`brew install units\`).

\`\`\`bash
# Convert 5 cu ft to liters
units "5 cubicfeet" "liters"
# 141.58423

# Convert 1 US gallon to liters
units "1 gallon" "liters"
# 3.7854118

# Convert 100 L to cubic feet
units "100 liters" "cubicfeet"
# 3.5314667
\`\`\`

\`units\` understands many synonyms (\`cu ft\`, \`cubic feet\`, \`ft³\`, \`L\`, \`liter\`, \`litre\`, \`gal\`, \`gallon\`, etc.) and handles compound expressions. It is the fastest path for one-off volume math in a shell session, and ideal for shell scripts that need to embed conversions in pipelines.

## Common questions

### Are US gallons and Imperial gallons the same?

No — and confusing them is one of the most common unit errors. **1 US gallon = 3.785 L**, but **1 Imperial gallon = 4.546 L**. The difference is about 20%. A recipe that calls for 1 gallon of water in the US uses 3.785 L; the same recipe in the UK uses 4.546 L. Always check the source of any "gallon" measurement before treating it as a known quantity.

### Is a "fluid ounce" the same as a weight ounce?

No. A **fluid ounce** (fl oz) measures volume. An **ounce** (oz) measures weight (mass). They share a name and the abbreviation "oz", but they are different units. 1 fl oz of water weighs approximately 1 oz (avoirdupois), but 1 fl oz of honey weighs about 1.5 oz, and 1 fl oz of mercury weighs about 13.6 oz. The abbreviation is a historical accident that causes constant confusion.

### How do I calculate shipping cost based on volume?

US carriers (FedEx, UPS, USPS) use **dimensional weight**: (length × width × height in inches) / 139 = billable pounds for domestic shipments. For international, divide by 139 for some services or by 5,000 for cubic cm to kg. To estimate volume in cu ft from a box, multiply dimensions in inches and divide by 1,728 (cubic inches per cubic foot). To convert to liters, multiply by 28.317. Always check the carrier's specific calculator, as the divisors vary by service.

### Why is engine displacement in liters?

Engine displacement (the total volume swept by all pistons) is the most natural metric for engine size. **2.0 L** is much easier to say than "122 cubic inches". The SI unit of volume is the cubic meter, but 1 m³ = 1,000,000 cm³ = 1,000 L, and engines are typically 1–8 L, so liters are the natural subdivision. US muscle car enthusiasts still use cubic inches ("a 350 small-block") out of tradition, but the official spec sheet is in liters.

### What is the difference between a "cup" in the US, UK, and metric?

Three different cups:

- **US legal cup**: 240 mL (used on nutrition labels since the 1990s, but recipes often use 236.588 mL = 8 fl oz)
- **US customary cup**: 236.5882365 mL (the standard US cooking cup)
- **Metric cup**: 250 mL (used in Australia, New Zealand, and metric recipes)
- **Imperial cup**: 284.131 mL (rare, mostly UK older recipes)

The 5–20% difference between these cups matters in baking, where small errors in flour or water change the outcome. Use exact values for baking; "1 cup" approximations are fine for soup.

### How much is 1 m³ in real-world terms?

A cubic meter is the volume of a cube 1 meter on each side. Some real-world equivalents:

- A standard washing machine: about 0.4 m³
- A full bathtub: about 0.3 m³
- A small refrigerator: about 0.5 m³
- A shipping pallet (standard EUR pallet, loaded to 1 m height): exactly 1.2 × 0.8 × 1.0 = 0.96 m³
- An SUV trunk: about 1.5–2.5 m³
- A 10×10×10 ft room: 28.3 m³

## Conclusion

Cubic feet to liters is a fundamental conversion that spans shipping, cooking, brewing, HVAC, and automotive contexts. The exact factor (28.316846592) has not changed since 1959 and is exact. For occasional conversions, the [UtilBoxx Volume Converter](/en/tools/unit/volume) is private, free, and works offline once loaded. For batch work, Python and the \`units\` CLI handle thousands of values without leaving the terminal. And for one-offs, Google or a voice assistant gives an instant answer.

The mental shortcuts: **1 cu ft ≈ 28 L** (a small suitcase), and **1 L ≈ 35 mL per cubic inch**. A 5 cu ft bag is about 142 L, a 1 L bottle is about 0.035 cu ft. With these anchors, you can sanity-check any volume in your head.`;

const cubicFeetLitersZh = `## 为什么要做立方英尺到升的换算？

体积换算出现在你需要运输、储存、酿造、烹饪或设计任何可以容纳或移动可测量空间的东西时。**立方英尺**（cu ft 或 ft³）是美国运输（FedEx、UPS）、暖通空调尺寸、冰箱和冰柜容量，以及天然气计量的标准单位。**升**（L）是几乎所有其他情况的国际标准制（SI）单位，特别是在烹饪、酿造、汽车（发动机排量）和大多数国家的消费品包装中。

你会在以下场景遇到这个换算：

- **寄送包裹**：FedEx 和 UPS 根据以立方英寸或立方英尺计的体积重量报价。国际目的地通常以立方米计。
- **暖通空调尺寸**：气流以 CFM（每分钟立方英尺）为单位。设备规格通常给出升/秒。
- **购买冰箱或冰柜**：美国型号以 cu ft 标容量。欧洲型号以升标。
- **酿造和烹饪**：食谱自由混用单位。5 加仑批次等于 18.93 升；1 升瓶等于 0.0353 cu ft。
- **发动机排量**：2.0 L 等于 122 cu in。

好消息是：公式都很短、精确、容易记住。

## 精确换算公式

### 立方英尺转升

\`\`\`
1 cu ft = 28.316846592 L   （精确，按定义）
1 L     = 0.03531466672149 cu ft
1 L     = 1 dm³（立方分米，精确）
1 m³    = 1,000 L           （精确）
1 m³    = 35.3146667215 cu ft
\`\`\`

**为什么是精确数字**：自 1959 年以来，国际英尺被定义为**正好 0.3048 m**。因此 1 立方英尺 = 0.3048³ = 0.028316846592 m³ 精确。1 升正好是 0.001 m³（一个立方分米）。所以 1 cu ft = 0.028316846592 / 0.001 = 28.316846592 L，精确。

**计算示例：**

- **5 cu ft → L**：5 × 28.316846592 = **141.58 L**（一个大行李袋）
- **100 L → cu ft**：100 / 28.316846592 = **3.53 cu ft**
- **1.5 cu ft → mL**：1.5 × 28,316.846592 = **42,475.27 mL**（一个小冰柜）

### 加仑和其他常见单位

你会遇到的两种加仑：

\`\`\`
1 美制加仑        = 3.785411784 L     （精确）
1 美制加仑        = 0.133680556 cu ft
1 英制加仑        = 4.54609 L         （精确）
1 英制加仑        = 0.160543653 cu ft
1 杯（美制）      = 236.5882365 mL
1 杯（公制）      = 250 mL
1 液量盎司（美制）= 29.5735295625 mL
\`\`\`

**加仑陷阱**：美制加仑和英制（UK）加仑不同。**1 美制加仑 = 3.785 L**，但**1 英制加仑 = 4.546 L**。一加仑的美制牛奶是 3.785 升；同样大小的一加仑英制容器是 4.546 升。混用它们会产生 20% 的误差。

### 杯、汤匙和茶匙（美制）

\`\`\`
1 汤匙（美制）    = 14.78676478125 mL
1 茶匙（美制）    = 4.92892159375 mL
1 液量盎司（美制）= 29.5735295625 mL
1 杯（美制）      = 236.5882365 mL = 8 fl oz
1 品脱（美制）    = 473.176473 mL
1 夸脱（美制）    = 946.352946 mL
1 加仑（美制）    = 3.785411784 L
\`\`\`

对大多数烹饪来说，简单的近似 **1 杯 ≈ 240 mL** 已经够用。烘焙或按比例放大时，使用精确值。

## 速查表

| 单位            | 升             | 立方英尺       | 常见用途                |
|----------------|---------------:|---------------:|------------------------|
| 1 fl oz (美)   | 0.0296         | 0.00104        | 一汤匙液体             |
| 1 杯 (美)      | 0.2366         | 0.00836        | 咖啡杯                 |
| 1 L            | 1              | 0.0353         | 水瓶                   |
| 1 加仑 (美)    | 3.79           | 0.1337         | 牛奶壶                 |
| 1 cu ft        | 28.32          | 1              | 随身行李、冰柜          |
| 1 m³           | 1,000          | 35.31          | 运输托盘               |

## 方法一：使用 UtilBoxx 体积换算工具（推荐）

在浏览器中换算体积最快、最私密、最精确的方式是 [UtilBoxx 体积换算工具](/zh/tools/unit/volume)。它支持立方米、升、毫升、立方英尺、立方英寸、美制加仑、英制加仑、杯、液量盎司、汤匙、茶匙等，双向即时换算。所有计算在浏览器本地完成 —— 没有服务器、没有上传、没有日志。

**使用方法：**

1. 打开 [utilboxx.com/zh/tools/unit/volume](/zh/tools/unit/volume)
2. 在任意一个输入框（L、mL、gal、cu ft、cu in、cup、fl oz 等）输入数值
3. 所有其他输入框即时更新
4. 复制结果

**为什么推荐这个方法：**

- **100% 免费**，无注册、无邮箱、无广告
- **隐私优先**：不离开你的浏览器
- **同时覆盖美制、英制和公制**，无需换算就能比较任意两个单位
- **精确精度** —— 使用精确的 28.316846592 系数
- **任何有浏览器的设备都能用**

如果你寄送包裹、酿造啤酒、烤面包或购买国际家电，这个工具能让你免于代价高昂的单位混淆。

## 方法二：Google 搜索

一次性换算用 Google 是最快的路径。在搜索框输入 \`5 cu ft to L\` 或 \`100 升等于多少立方英尺\`。Google 会在结果顶部返回内建的换算卡片。

**优点**：零摩擦、无需点击、在任何有浏览器的设备上都能用。

**缺点**：需要联网、一次只能换算一个值，而且 Google 会记录你的每次换算。对于隐私敏感的值（食谱研发、供应商报价），请优先选择离线方法。Google 在美制和英制加仑上也可能出错，除非你写明（例如"US gallon"）。

## 方法三：Python（或任何语言）

几行 Python 就能覆盖所有体积换算。28.316846592 这个系数是精确的，所以你可以放心使用，不用担心浮点漂移。

\`\`\`python
L_PER_CUFT   = 28.316846592
L_PER_USGAL  = 3.785411784
L_PER_IMPGAL = 4.54609
ML_PER_CUP   = 236.5882365

def cuft_to_l(cuft):     return cuft * L_PER_CUFT
def l_to_cuft(l):        return l / L_PER_CUFT
def usgal_to_l(gal):     return gal * L_PER_USGAL
def impgal_to_l(gal):    return gal * L_PER_IMPGAL
def cup_to_ml(cup):      return cup * ML_PER_CUP

print(cuft_to_l(5))         # 141.58423...
print(usgal_to_l(1))        # 3.785411784
print(impgal_to_l(1))       # 4.54609
print(cup_to_ml(1))         # 236.5882365
\`\`\`

JavaScript 同样的思路：

\`\`\`js
const L_PER_CUFT = 28.316846592;
const cuftToL = cuft => cuft * L_PER_CUFT;
const lToCuft = l => l / L_PER_CUFT;
console.log(cuftToL(5).toFixed(2));  // 141.58
\`\`\`

要批量换算食谱数据（例如一个以杯为单位的配料清单，你想把它换成 mL 用于公制食谱），3 行 pandas 脚本能在毫秒内处理上千行。

## 方法四：命令行 units（Linux/macOS）

GNU 的 \`units\` 工具在命令行里处理体积换算。macOS 上用 Homebrew 安装（\`brew install units\`）。

\`\`\`bash
# 5 立方英尺转升
units "5 cubicfeet" "liters"
# 141.58423

# 1 美制加仑转升
units "1 gallon" "liters"
# 3.7854118

# 100 升转立方英尺
units "100 liters" "cubicfeet"
# 3.5314667
\`\`\`

\`units\` 理解很多同义词（\`cu ft\`、\`cubic feet\`、\`ft³\`、\`L\`、\`liter\`、\`litre\`、\`gal\`、\`gallon\` 等），并处理复合表达式。它是 shell 会话中一次性体积计算的最快路径，也适合在流水线中嵌入换算的 shell 脚本。

## 常见问题

### 美制加仑和英制加仑一样吗？

不一样 —— 把它们混淆是最常见的单位错误之一。**1 美制加仑 = 3.785 L**，但**1 英制加仑 = 4.546 L**。差异约为 20%。在美国食谱中 1 加仑水用 3.785 升；同样食谱在英国用 4.546 升。在把任何"加仑"测量当作已知量之前，请务必检查其来源。

### 液量盎司和重量盎司一样吗？

不一样。**液量盎司**（fl oz）测量体积。**盎司**（oz）测量重量（质量）。它们名字和缩写"oz"相同，但是不同的单位。1 fl oz 水约重 1 oz（常衡），但 1 fl oz 蜂蜜约重 1.5 oz，1 fl oz 水银约重 13.6 oz。缩写是历史偶然事件，造成持续的混淆。

### 我怎么根据体积计算运费？

美国承运商（FedEx、UPS、USPS）使用**体积重量**：（长 × 宽 × 高，单位英寸）/ 139 = 国内货物的计费磅数。国际的，有些服务除以 139，有的用立方厘米转千克除以 5,000。要从箱子的尺寸估算 cu ft，将英寸尺寸相乘并除以 1,728（每立方英尺的立方英寸数）。要换算成升，乘以 28.317。始终检查承运商的具体计算器，因为除数因服务而异。

### 为什么发动机排量用升？

发动机排量（所有活塞扫过的总体积）是发动机尺寸最自然的度量。**2.0 L** 比"122 立方英寸"容易说得多。体积的 SI 单位是立方米，但 1 m³ = 1,000,000 cm³ = 1,000 L，发动机通常在 1-8 L，所以升是自然的细分。美国肌肉车爱好者出于传统仍使用立方英寸（"350 小缸体"），但官方规格表用升。

### 美国、英国和公制的"杯"有什么区别？

三种不同的杯：

- **美制法定杯**：240 mL（自 1990 年代起用于营养标签，但食谱常用 236.588 mL = 8 fl oz）
- **美制常用杯**：236.5882365 mL（标准美式烹饪杯）
- **公制杯**：250 mL（澳大利亚、新西兰和公制食谱使用）
- **英制杯**：284.131 mL（罕见，主要是英国老食谱）

这些杯之间 5-20% 的差异在烘焙中很重要，面粉或水的微小误差会改变结果。烘焙使用精确值；做汤时"1 杯"的近似值就够了。

### 1 m³ 在实际中是多少？

1 立方米是每边 1 米的立方体体积。一些现实世界的等效：

- 标准洗衣机：约 0.4 m³
- 满浴缸：约 0.3 m³
- 小冰箱：约 0.5 m³
- 货运托盘（标准 EUR 托盘，载货高度 1 米）：正好 1.2 × 0.8 × 1.0 = 0.96 m³
- SUV 行李厢：约 1.5-2.5 m³
- 一个 10×10×10 英尺的房间：28.3 m³

## 结论

立方英尺到升是一个基础换算，跨越运输、烹饪、酿造、暖通空调和汽车领域。精确系数（28.316846592）自 1959 年以来没有变过，是精确的。偶尔换算的话，[UtilBoxx 体积换算工具](/zh/tools/unit/volume) 私密、免费、加载后离线可用。批量工作用 Python 和 \`units\` 命令行可以在不离开终端的情况下处理上千个值。偶尔的一次性换算，Google 或语音助手能给出即时答案。

心算捷径：**1 cu ft ≈ 28 L**（一个小行李箱），**1 L ≈ 35 mL 每立方英寸**。5 cu ft 的包约 142 L，1 L 瓶约 0.035 cu ft。有了这些锚点，你可以在脑中核对任何体积。`;

const cubicFeetLitersJa = `## なぜ立方フィートをリットルに換算するのか？

体積換算は、荷物の輸送、保管、醸造、調理、または測定可能な空間を持つ／動かすものを設計する際に必要になります。**立方フィート**（cu ft または ft³）は、米国の輸送（FedEx、UPS）、HVAC のサイズ、冷蔵庫・冷凍庫の容量、ガス料金請求の標準単位です。**リットル**（L）は、それ以外のほぼすべて、特に料理、醸造、自動車（エンジン排気量）、そしてほとんどの国の消費者向け包装における国際標準単位です。

以下のような場面で換算が必要になります：

- **荷物の発送**：FedEx と UPS は、立方インチまたは立方フィートでの容積重量に基づいて料金を見積もります。国際配送先は通常立方メートルで報告されます。
- **HVAC のサイズ設定**：気流は CFM（立方フィート毎分）で定格されます。機器仕様は通常リットル毎秒で提供されます。
- **冷蔵庫・冷凍庫選び**：米国モデルは容量を cu ft で表示。欧州モデルはリットルで表示。
- **醸造と料理**：レシピは単位を自由に混在させます。5 ガロンバッチは 18.93 L、1 L ボトルは 0.0353 cu ft。
- **エンジン排気量**：2.0 L は 122 cu in と同じです。

朗報です：公式は短く、正確で、覚えやすい。

## 正確な換算公式

### 立方フィートからリットル

\`\`\`
1 cu ft = 28.316846592 L   （正確に、定義により）
1 L     = 0.03531466672149 cu ft
1 L     = 1 dm³（立方デシメートル、正確）
1 m³    = 1,000 L           （正確）
1 m³    = 35.3146667215 cu ft
\`\`\`

**なぜ正確な数字か**：1959 年以来、国際フィートは**ちょうど 0.3048 m**と定義されています。したがって 1 立方フィート = 0.3048³ = 0.028316846592 m³ が正確です。1 リットルはちょうど 0.001 m³（1 立方デシメートル）。よって 1 cu ft = 0.028316846592 / 0.001 = 28.316846592 L が正確。

**計算例：**

- **5 cu ft → L**：5 × 28.316846592 = **141.58 L**（大きなダッフルバッグ）
- **100 L → cu ft**：100 / 28.316846592 = **3.53 cu ft**
- **1.5 cu ft → mL**：1.5 × 28,316.846592 = **42,475.27 mL**（小さなクーラー）

### ガロンと他の一般的な単位

出会う 2 つのガロン：

\`\`\`
1 米国ガロン         = 3.785411784 L     （正確）
1 米国ガロン         = 0.133680556 cu ft
1 帝国ガロン         = 4.54609 L         （正確）
1 帝国ガロン         = 0.160543653 cu ft
1 カップ（米国）     = 236.5882365 mL
1 カップ（メートル）= 250 mL
1 液量オンス（米国） = 29.5735295625 mL
\`\`\`

**ガロンの落とし穴**：米国ガロンと帝国（英国）ガロンは異なります。**1 米国ガロン = 3.785 L**、しかし**1 帝国ガロン = 4.546 L**。差は約 20% です。米国で 1 ガロンの牛乳は 3.785 L、英国で同じ容器は 4.546 L。混同すると 20% の誤差になります。

### カップ、大さじ、 teaspoons（米国）

\`\`\`
1 大さじ（米国）     = 14.78676478125 mL
1 小さじ（米国）     = 4.92892159375 mL
1 液量オンス（米国） = 29.5735295625 mL
1 カップ（米国）     = 236.5882365 mL = 8 fl oz
1 パイント（米国）   = 473.176473 mL
1 クォート（米国）   = 946.352946 mL
1 ガロン（米国）     = 3.785411784 L
\`\`\`

ほとんどの調理では、簡単な近似 **1 カップ ≈ 240 mL** で十分です。ベーカリーやスケールアップには正確な値を使用してください。

## 早見表

| 単位              | リットル        | 立方フィート   | 一般的な用途              |
|------------------|---------------:|--------------:|--------------------------|
| 1 fl oz (米)     | 0.0296         | 0.00104       | 液体の大さじ 1 杯         |
| 1 カップ (米)     | 0.2366         | 0.00836       | コーヒーマグ             |
| 1 L              | 1              | 0.0353        |  water bottle            |
| 1 ガロン (米)     | 3.79           | 0.1337        | 牛乳ジャグ               |
| 1 cu ft          | 28.32          | 1             | 機内持ち込み、冷凍庫     |
| 1 m³             | 1,000          | 35.31         | 配送パレット              |

## 方法 1：UtilBoxx 体積換算ツール（推奨）

ブラウザで体積を換算する最も速く、最もプライベートで、最も正確な方法は [UtilBoxx 体積換算ツール](/ja/tools/unit/volume) です。立方メートル、リットル、ミリリットル、立方フィート、立方インチ、米国ガロン、帝国ガロン、カップ、液量オンス、大さじ、小さじなどをサポートし、双方向の即時換算を提供します。すべてブラウザ内で動作します。サーバーも、アップロードも、ログもなし。

**使い方：**

1. [utilboxx.com/ja/tools/unit/volume](/ja/tools/unit/volume) を開く
2. 任意のフィールド（L、mL、gal、cu ft、cu in、cup、fl oz など）に値を入力
3. 他のフィールドが即座に更新
4. 結果をコピー

**この方法を推奨する理由：**

- **100% 無料**、登録不要、メールアドレス不要、広告なし
- **プライバシー最優先**：ブラウザから出ない
- **米国、帝国、メートルを同時にカバー**し、計算なしで任意の 2 単位を比較可能
- **正確な精度** — 正確な 28.316846592 係数を使用
- **ブラウザがあるあらゆるデバイスで動作**

荷物の発送、ビール醸造、パン焼き、または国際的な家電購入をするなら、このツールは costly な単位混乱から救ってくれます。

## 方法 2：Google 検索

一度限りの換算なら、Google が最速です。検索ボックスに \`5 cu ft to L\` や \`100 リットルを立方フィートに\` と入力します。Google は結果の上部に内蔵換算カードを返します。

**長所**：摩擦ゼロ、クリック不要、ブラウザがあるデバイスで動作。

**短所**：インターネット接続が必要、一度に一つの値しか換算できない、Google がすべての換算をログに記録する。プライバシーに敏感な値（レシピ R&D、サプライヤー価格）の場合は、オフラインの方法を選んでください。Google は米国と帝国ガロンでも間違えることがあり、明示的に書かない限り（例：「US gallon」）区別しないことがあります。

## 方法 3：Python（または任意の言語）

わずかな行の Python であらゆる体積換算をカバーできます。28.316846592 という同じ係数は正確なので、浮動小数点ドリフトを心配せずに使用できます。

\`\`\`python
L_PER_CUFT   = 28.316846592
L_PER_USGAL  = 3.785411784
L_PER_IMPGAL = 4.54609
ML_PER_CUP   = 236.5882365

def cuft_to_l(cuft):     return cuft * L_PER_CUFT
def l_to_cuft(l):        return l / L_PER_CUFT
def usgal_to_l(gal):     return gal * L_PER_USGAL
def impgal_to_l(gal):    return gal * L_PER_IMPGAL
def cup_to_ml(cup):      return cup * ML_PER_CUP

print(cuft_to_l(5))         # 141.58423...
print(usgal_to_l(1))        # 3.785411784
print(impgal_to_l(1))       # 4.54609
print(cup_to_ml(1))         # 236.5882365
\`\`\`

JavaScript でも同じ考え方：

\`\`\`js
const L_PER_CUFT = 28.316846592;
const cuftToL = cuft => cuft * L_PER_CUFT;
const lToCuft = l => l / L_PER_CUFT;
console.log(cuftToL(5).toFixed(2));  // 141.58
\`\`\`

レシピデータの一括換算（例えば、カップ単位の食材リストをメートル法の料理本用に mL にしたい場合）は、3 行の pandas スクリプトで数千行をミリ秒で処理できます。

## 方法 4：コマンドラインで units（Linux/macOS）

GNU の \`units\` ユーティリティはコマンドラインで体積を扱えます。macOS では Homebrew でインストール（\`brew install units\`）。

\`\`\`bash
# 5 立方フィートをリットルに換算
units "5 cubicfeet" "liters"
# 141.58423

# 1 米国ガロンをリットルに
units "1 gallon" "liters"
# 3.7854118

# 100 リットルを立方フィートに
units "100 liters" "cubicfeet"
# 3.5314667
\`\`\`

\`units\` は多くの同義語（\`cu ft\`、\`cubic feet\`、\`ft³\`、\`L\`、\`liter\`、\`litre\`、\`gal\`、\`gallon\` など）を理解し、複合式を扱います。シェルセッションでの単発体積計算の最速パスであり、パイプラインに換算を埋め込むシェルスクリプトに理想的です。

## よくある質問

### 米国ガロンと帝国ガロンは同じですか？

いいえ — 混同は最も一般的な単位エラーの一つです。**1 米国ガロン = 3.785 L**、しかし**1 帝国ガロン = 4.546 L**。差は約 20% です。米国で 1 ガロンの水を使うレシピは 3.785 L、英国で同じレシピは 4.546 L。「ガロン」の測定値を既知の量として扱う前に、必ずそのソースを確認してください。

### 液量オンスは重量オンスと同じですか？

いいえ。**液量オンス**（fl oz）は体積を測ります。**オンス**（oz）は重量（質量）を測ります。同じ名前と「oz」の省略形を共有しますが、異なる単位です。1 fl oz の水は約 1 oz（常衡）ですが、1 fl oz の蜂蜜は約 1.5 oz、1 fl oz の水銀は約 13.6 oz です。省略形は歴史的な偶然であり、常に混乱を引き起こします。

### 体積に基づいて配送料を計算するには？

米国の運送業者（FedEx、UPS、USPS）は**容積重量**を使用します：（長さ × 幅 × 高さ、インチ単位）/ 139 = 国内貨物の課金ポンド数。国際の場合、サービスによっては 139 で割ったり、立方 cm から kg へ 5,000 で割ったりします。箱の寸法から cu ft を見積もるには、インチ寸法を掛け合わせて 1,728（立方フィートあたりの立方インチ数）で割ります。リットルに換算するには 28.317 を掛けます。除数はサービスによって異なるため、必ず運送業者の特定の計算機を確認してください。

### なぜエンジン排気量はリットルで表示されるのか？

エンジン排気量（すべてのピストンが掃く総体積）は、エンジンサイズにとって最も自然な指標です。**2.0 L** は「122 立方インチ」よりもはるかに言いやすい。体積の SI 単位は立方メートルですが、1 m³ = 1,000,000 cm³ = 1,000 L、エンジンは通常 1–8 L なので、リットルが自然な細分です。米国のマッスルカー愛好家は伝統から立方インチ（「350 スモールブロック」）を使い続けていますが、公式仕様書はリットルです。

### 米国、英国、メートルの「カップ」の違いは何ですか？

3 つの異なるカップ：

- **米国法定カップ**：240 mL（1990 年代から栄養表示に使用、レシピは 236.588 mL = 8 fl oz を使用すること多い）
- **米国常用カップ**：236.5882365 mL（標準的な米国料理用カップ）
- **メートルカップ**：250 mL（オーストラリア、ニュージーランド、メートルレシピで使用）
- **帝国カップ**：284.131 mL（まれ、主に英国の古いレシピ）

これらのカップ間の 5–20% の差はベーカリーでは重要で、小麦粉や水の小さな誤差が結果を変えます。ベーカリーには正確な値を使用；スープには「1 カップ」の近似で十分です。

### 1 m³ は実際にはどのくらいの量ですか？

1 立方メートルは 1 メートル四方の立方体の体積です。現実世界の等価物：

- 標準的な洗濯機：約 0.4 m³
- 満タンの浴槽：約 0.3 m³
- 小型冷蔵庫：約 0.5 m³
- 配送パレット（標準 EUR パレット、1 m まで積載）：ちょうど 1.2 × 0.8 × 1.0 = 0.96 m³
- SUV トランク：約 1.5–2.5 m³
- 10×10×10 フィートの部屋：28.3 m³

## まとめ

立方フィートからリットルへの換算は、輸送、料理、醸造、HVAC、自動車分野にまたがる基礎的な換算です。正確な係数（28.316846592）は 1959 年以来変わらず正確です。たまに換算するなら、[UtilBoxx 体積換算ツール](/ja/tools/unit/volume) はプライベートで、無料で、読み込み後はオフラインで動作します。バッチ作業には Python と \`units\` コマンドラインが、ターミナルから出ずに何千もの値を処理できます。単発なら、Google や音声アシスタントが即座に答えてくれます。

暗算の近道：**1 cu ft ≈ 28 L**（小さなスーツケース）、**1 L ≈ 1 立方インチあたり 35 mL**。5 cu ft のバッグは約 142 L、1 L ボトルは約 0.035 cu ft。これらのアンカーがあれば、どんな体積も頭の中で sanity-check できます。`;

const cubicFeetLitersEs = `## ¿Por qué convertir pies cúbicos a litros?

La conversión de volumen aparece siempre que envíe, almacene, elabore, cocine o diseñe algo que contenga o mueva una cantidad medible de espacio. El **pie cúbico** (cu ft o ft³) es la unidad estándar en EE. UU. para envío (FedEx, UPS), dimensionamiento de HVAC, capacidad de refrigeradores y congeladores, y facturación de gas natural. El **litro** (L) es el estándar SI para casi todo lo demás, especialmente en cocina, elaboración de cerveza, automoción (cilindrada del motor) y el envase de productos de consumo en la mayoría de los países.

Encontrará esta conversión cuando:

- **Envíe un paquete**: FedEx y UPS cotizan tarifas según el peso dimensional en pulgadas cúbicas o pies cúbicos. Los destinos internacionales suelen reportar metros cúbicos.
- **Dimensione un sistema HVAC**: El flujo de aire se clasifica en CFM (pies cúbicos por minuto). Las especificaciones del equipo a menudo dan litros por segundo.
- **Compre un refrigerador o congelador**: Los modelos estadounidenses listan la capacidad en cu ft. Los modelos europeos listan litros.
- **Elaboración y cocina**: Las recetas mezclan unidades libremente. Un lote de 5 galones es 18,93 L; una botella de 1 L es 0,0353 cu ft.
- **Cilindrada del motor**: 2,0 L es lo mismo que 122 cu in.

La buena noticia: las fórmulas son cortas, exactas y fáciles de memorizar.

## Las fórmulas exactas de conversión

### Pies cúbicos a litros

\`\`\`
1 cu ft = 28,316846592 L   (exacto, por definición)
1 L     = 0,03531466672149 cu ft
1 L     = 1 dm³ (decímetro cúbico, exacto)
1 m³    = 1.000 L           (exacto)
1 m³    = 35,3146667215 cu ft
\`\`\`

**Por qué el número exacto**: Desde 1959, el pie internacional se define como **exactamente 0,3048 m**. Por lo tanto, un pie cúbico es 0,3048³ = 0,028316846592 m³ exactamente. Un litro es exactamente 0,001 m³ (un decímetro cúbico). Así que 1 cu ft = 0,028316846592 / 0,001 = 28,316846592 L, exacto.

**Ejemplos trabajados:**

- **5 cu ft → L**: 5 × 28,316846592 = **141,58 L** (una bolsa de lona grande)
- **100 L → cu ft**: 100 / 28,316846592 = **3,53 cu ft**
- **1,5 cu ft → mL**: 1,5 × 28.316,846592 = **42.475,27 mL** (una hielera pequeña)

### Galones y otras unidades comunes

Los dos galones que encontrará:

\`\`\`
1 galón estadounidense  = 3,785411784 L     (exacto)
1 galón estadounidense  = 0,133680556 cu ft
1 galón imperial        = 4,54609 L         (exacto)
1 galón imperial        = 0,160543653 cu ft
1 taza (EE. UU.)        = 236,5882365 mL
1 taza (métrica)        = 250 mL
1 onza líquida (EE. UU.)= 29,5735295625 mL
\`\`\`

**La trampa del galón**: Los galones estadounidenses y los imperiales (Reino Unido) son diferentes. **1 galón estadounidense = 3,785 L**, pero **1 galón imperial = 4,546 L**. La diferencia es de aproximadamente un 20 %. Una jarra de 1 galón de leche en EE. UU. son 3,785 L; la misma jarra en el Reino Unido serían 4,546 L. Mezclarlos produce un error del 20 %.

### Tazas, cucharadas y cucharaditas (EE. UU.)

\`\`\`
1 cucharada (EE. UU.)  = 14,78676478125 mL
1 cucharadita (EE. UU.)= 4,92892159375 mL
1 onza líquida (EE. UU.)= 29,5735295625 mL
1 taza (EE. UU.)       = 236,5882365 mL = 8 fl oz
1 pinta (EE. UU.)      = 473,176473 mL
1 cuarto (EE. UU.)     = 946,352946 mL
1 galón (EE. UU.)      = 3,785411784 L
\`\`\`

Para la mayoría de la cocina, la aproximación simple **1 taza ≈ 240 mL** es suficiente. Para hornear o escalar, use valores exactos.

## Tabla de referencia rápida

| Unidad          | Litros        | Pies cúbicos   | Contexto común           |
|-----------------|--------------:|---------------:|--------------------------|
| 1 fl oz (EE. UU.)| 0,0296       | 0,00104        | Cucharada de líquido     |
| 1 taza (EE. UU.)| 0,2366        | 0,00836        | Taza de café             |
| 1 L             | 1             | 0,0353         | Botella de agua          |
| 1 galón (EE. UU.)| 3,79         | 0,1337         | Jarra de leche           |
| 1 cu ft         | 28,32         | 1              | Equipaje de mano, congelador |
| 1 m³            | 1.000         | 35,31          | Palet de envío           |

## Método 1: Use el conversor de volumen de UtilBoxx (Recomendado)

La forma más rápida, privada y precisa de convertir volumen en el navegador es el [Conversor de Volumen de UtilBoxx](/es/tools/unit/volume). Soporta metros cúbicos, litros, mililitros, pies cúbicos, pulgadas cúbicas, galones estadounidenses, galones imperiales, tazas, onzas líquidas, cucharadas, cucharaditas y más, con conversión bidireccional instantánea. Todo se ejecuta en su navegador: sin servidor, sin carga, sin registros.

**Cómo usarlo:**

1. Vaya a [utilboxx.com/es/tools/unit/volume](/es/tools/unit/volume)
2. Escriba un valor en cualquier campo (L, mL, gal, cu ft, cu in, taza, fl oz, etc.)
3. Todos los demás campos se actualizan al instante
4. Copie el resultado

**Por qué recomendamos este método:**

- **100 % gratis**, sin registro, sin email, sin anuncios
- **Privacidad primero**: nada sale de su navegador
- **Cubre unidades estadounidenses, imperiales y métricas** simultáneamente, para que pueda comparar dos unidades cualesquiera sin hacer matemáticas
- **Precisión exacta** — usa el factor preciso 28,316846592
- **Funciona en cualquier dispositivo** con navegador

Si envía paquetes, elabora cerveza, hace pan o compra electrodomésticos internacionales, esta herramienta le evitará costosas confusiones de unidades.

## Método 2: Búsqueda en Google

Para una conversión puntual, Google es el camino más rápido. Escriba \`5 cu ft to L\` o \`100 litros en pies cúbicos\` en el cuadro de búsqueda. Google responde con una tarjeta de conversión integrada en la parte superior de los resultados.

**Ventajas:** cero fricción, sin clics, funciona en cualquier dispositivo con navegador.

**Desventajas:** requiere conexión a internet, solo es útil para un valor a la vez, y Google registra cada conversión. Para valores sensibles a la privacidad (I+D de recetas, precios de proveedores), prefiera un método sin conexión. Google también tiene problemas con los galones estadounidenses vs imperiales y puede no distinguirlos a menos que lo especifique (p. ej., "US gallon").

## Método 3: Python (o cualquier lenguaje)

Unas pocas líneas de Python cubren cada conversión de volumen. El mismo factor de 28,316846592 es exacto, por lo que puede usarlo sin preocuparse por la deriva de punto flotante.

\`\`\`python
L_PER_CUFT   = 28.316846592
L_PER_USGAL  = 3.785411784
L_PER_IMPGAL = 4.54609
ML_PER_CUP   = 236.5882365

def cuft_to_l(cuft):     return cuft * L_PER_CUFT
def l_to_cuft(l):        return l / L_PER_CUFT
def usgal_to_l(gal):     return gal * L_PER_USGAL
def impgal_to_l(gal):    return gal * L_PER_IMPGAL
def cup_to_ml(cup):      return cup * ML_PER_CUP

print(cuft_to_l(5))         # 141.58423...
print(usgal_to_l(1))        # 3.785411784
print(impgal_to_l(1))       # 4.54609
print(cup_to_ml(1))         # 236.5882365
\`\`\`

En JavaScript, con la misma idea:

\`\`\`js
const L_PER_CUFT = 28.316846592;
const cuftToL = cuft => cuft * L_PER_CUFT;
const lToCuft = l => l / L_PER_CUFT;
console.log(cuftToL(5).toFixed(2));  // 141.58
\`\`\`

Para conversión por lotes de datos de recetas (un CSV de cantidades de ingredientes en tazas, por ejemplo, que quiere en mL para un recetario métrico), un script de pandas de 3 líneas procesa miles de filas en milisegundos.

## Método 4: CLI con units (Linux/macOS)

La utilidad GNU \`units\` maneja la conversión de volumen en la línea de comandos. Instale en macOS con Homebrew (\`brew install units\`).

\`\`\`bash
# Convertir 5 cu ft a litros
units "5 cubicfeet" "liters"
# 141.58423

# Convertir 1 galón estadounidense a litros
units "1 gallon" "liters"
# 3.7854118

# Convertir 100 L a pies cúbicos
units "100 liters" "cubicfeet"
# 3.5314667
\`\`\`

\`units\` entiende muchos sinónimos (\`cu ft\`, \`cubic feet\`, \`ft³\`, \`L\`, \`liter\`, \`litre\`, \`gal\`, \`gallon\`, etc.) y maneja expresiones compuestas. Es el camino más rápido para matemáticas de volumen puntuales en una sesión de shell, e ideal para scripts de shell que necesitan incrustar conversiones en pipelines.

## Preguntas frecuentes

### ¿Son iguales los galones estadounidenses e imperiales?

No — y confundirlos es uno de los errores de unidades más comunes. **1 galón estadounidense = 3,785 L**, pero **1 galón imperial = 4,546 L**. La diferencia es de aproximadamente un 20 %. Una receta que pide 1 galón de agua en EE. UU. usa 3,785 L; la misma receta en el Reino Unido usa 4,546 L. Siempre verifique la fuente de cualquier medición en "galones" antes de tratarla como una cantidad conocida.

### ¿Es la "onza líquida" lo mismo que la onza de peso?

No. Una **onza líquida** (fl oz) mide volumen. Una **onza** (oz) mide peso (masa). Comparten nombre y la abreviatura "oz", pero son unidades diferentes. 1 fl oz de agua pesa aproximadamente 1 oz (avoirdupois), pero 1 fl oz de miel pesa alrededor de 1,5 oz, y 1 fl oz de mercurio pesa alrededor de 13,6 oz. La abreviatura es un accidente histórico que causa confusión constante.

### ¿Cómo calculo el costo de envío según el volumen?

Los transportistas estadounidenses (FedEx, UPS, USPS) usan **peso dimensional**: (largo × ancho × alto en pulgadas) / 139 = libras facturables para envíos domésticos. Para internacionales, divida por 139 para algunos servicios o por 5.000 para cm³ a kg. Para estimar el volumen en cu ft de una caja, multiplique las dimensiones en pulgadas y divida por 1.728 (pulgadas cúbicas por pie cúbico). Para convertir a litros, multiplique por 28,317. Siempre verifique la calculadora específica del transportista, ya que los divisores varían según el servicio.

### ¿Por qué la cilindrada del motor está en litros?

La cilindrada del motor (el volumen total barrido por todos los pistones) es la métrica más natural para el tamaño del motor. **2,0 L** es mucho más fácil de decir que "122 pulgadas cúbicas". La unidad SI de volumen es el metro cúbico, pero 1 m³ = 1.000.000 cm³ = 1.000 L, y los motores típicamente son de 1–8 L, así que los litros son la subdivisión natural. Los entusiastas de los muscle cars estadounidenses todavía usan pulgadas cúbicas ("un 350 small-block") por tradición, pero la hoja de especificaciones oficial está en litros.

### ¿Cuál es la diferencia entre una "taza" en EE. UU., Reino Unido y métrica?

Tres tazas diferentes:

- **Taza legal estadounidense**: 240 mL (usada en etiquetas nutricionales desde la década de 1990, pero las recetas a menudo usan 236,588 mL = 8 fl oz)
- **Taza consuetudinaria estadounidense**: 236,5882365 mL (la taza estándar de cocina estadounidense)
- **Taza métrica**: 250 mL (usada en Australia, Nueva Zelanda y recetas métricas)
- **Taza imperial**: 284,131 mL (rara, principalmente en recetas británicas antiguas)

La diferencia del 5-20 % entre estas tazas importa en la repostería, donde pequeños errores en harina o agua cambian el resultado. Use valores exactos para hornear; las aproximaciones de "1 taza" están bien para sopa.

### ¿Cuánto es 1 m³ en términos del mundo real?

Un metro cúbico es el volumen de un cubo de 1 metro por lado. Algunos equivalentes del mundo real:

- Una lavadora estándar: unos 0,4 m³
- Una bañera llena: unos 0,3 m³
- Un refrigerador pequeño: unos 0,5 m³
- Un palet de envío (palet EUR estándar, cargado a 1 m de altura): exactamente 1,2 × 0,8 × 1,0 = 0,96 m³
- El maletero de un SUV: unos 1,5-2,5 m³
- Una habitación de 10×10×10 ft: 28,3 m³

## Conclusión

Pies cúbicos a litros es una conversión fundamental que abarca contextos de envío, cocina, elaboración de cerveza, HVAC y automoción. El factor exacto (28,316846592) no ha cambiado desde 1959 y es exacto. Para conversiones ocasionales, el [Conversor de Volumen de UtilBoxx](/es/tools/unit/volume) es privado, gratis y funciona sin conexión una vez cargado. Para trabajo por lotes, Python y la CLI \`units\` manejan miles de valores sin salir de la terminal. Y para conversiones puntuales, Google o un asistente de voz dan una respuesta instantánea.

Los atajos mentales: **1 cu ft ≈ 28 L** (una maleta pequeña), y **1 L ≈ 35 mL por pulgada cúbica**. Una bolsa de 5 cu ft es unos 142 L, una botella de 1 L es unos 0,035 cu ft. Con estos anclajes, puede hacer una comprobación de cordura de cualquier volumen en su cabeza.`;

const cubicFeetLitersPt = `## Por que converter pés cúbicos para litros?

A conversão de volume aparece sempre que você envia, armazena, fabrica, cozinha ou projeta algo que contém ou move uma quantidade mensurável de espaço. O **pé cúbico** (cu ft ou ft³) é a unidade padrão nos EUA para envio (FedEx, UPS), dimensionamento de HVAC, capacidade de refrigeradores e freezers, e cobrança de gás natural. O **litro** (L) é o padrão SI para quase todo o resto, especialmente em culinária, fabricação de cerveja, automotivo (cilindrada do motor) e embalagem de produtos de consumo na maioria dos países.

Você vai encontrar esta conversão quando:

- **Enviar um pacote**: FedEx e UPS cotam tarifas com base no peso dimensional em polegadas cúbicas ou pés cúbicos. Destinos internacionais geralmente reportam metros cúbicos.
- **Dimensionar um sistema HVAC**: O fluxo de ar é classificado em CFM (pés cúbicos por minuto). As especificações do equipamento geralmente dão litros por segundo.
- **Comprar um refrigerador ou freezer**: Modelos americanos listam capacidade em cu ft. Modelos europeus listam litros.
- **Cerveja e culinária**: Receitas misturam unidades livremente. Um lote de 5 galões é 18,93 L; uma garrafa de 1 L é 0,0353 cu ft.
- **Cilindrada do motor**: 2,0 L é o mesmo que 122 cu in.

A boa notícia: as fórmulas são curtas, exatas e fáceis de memorizar.

## As fórmulas exatas de conversão

### Pés cúbicos para litros

\`\`\`
1 cu ft = 28,316846592 L   (exato, por definição)
1 L     = 0,03531466672149 cu ft
1 L     = 1 dm³ (decímetro cúbico, exato)
1 m³    = 1.000 L           (exato)
1 m³    = 35,3146667215 cu ft
\`\`\`

**Por que o número exato**: Desde 1959, o pé internacional é definido como **exatamente 0,3048 m**. Portanto, um pé cúbico é 0,3048³ = 0,028316846592 m³ exatamente. Um litro é exatamente 0,001 m³ (um decímetro cúbico). Então 1 cu ft = 0,028316846592 / 0,001 = 28,316846592 L, exato.

**Exemplos resolvidos:**

- **5 cu ft → L**: 5 × 28,316846592 = **141,58 L** (uma bolsa de lona grande)
- **100 L → cu ft**: 100 / 28,316846592 = **3,53 cu ft**
- **1,5 cu ft → mL**: 1,5 × 28.316,846592 = **42.475,27 mL** (uma caixa térmica pequena)

### Galões e outras unidades comuns

Os dois galões que você vai encontrar:

\`\`\`
1 galão americano      = 3,785411784 L     (exato)
1 galão americano      = 0,133680556 cu ft
1 galão imperial       = 4,54609 L         (exato)
1 galão imperial       = 0,160543653 cu ft
1 xícara (EUA)         = 236,5882365 mL
1 xícara (métrica)     = 250 mL
1 onça fluida (EUA)    = 29,5735295625 mL
\`\`\`

**A armadilha do galão**: Galões americanos e imperiais (Reino Unido) são diferentes. **1 galão americano = 3,785 L**, mas **1 galão imperial = 4,546 L**. A diferença é de cerca de 20 %. Uma jarra de 1 galão de leite nos EUA são 3,785 L; a mesma jarra no Reino Unido seriam 4,546 L. Misturá-los produz um erro de 20 %.

### Xícaras, colheres de sopa e de chá (EUA)

\`\`\`
1 colher de sopa (EUA) = 14,78676478125 mL
1 colher de chá (EUA)  = 4,92892159375 mL
1 onça fluida (EUA)    = 29,5735295625 mL
1 xícara (EUA)         = 236,5882365 mL = 8 fl oz
1 pinta (EUA)          = 473,176473 mL
1 quarto (EUA)         = 946,352946 mL
1 galão (EUA)          = 3,785411784 L
\`\`\`

Para a maior parte da culinária, a aproximação simples **1 xícara ≈ 240 mL** é suficiente. Para panificação ou escala maior, use valores exatos.

## Tabela de referência rápida

| Unidade        | Litros        | Pés cúbicos     | Contexto comum            |
|----------------|--------------:|---------------:|---------------------------|
| 1 fl oz (EUA)  | 0,0296        | 0,00104        | Colher de sopa de líquido |
| 1 xícara (EUA) | 0,2366        | 0,00836        | Caneca de café            |
| 1 L            | 1             | 0,0353         | Garrafa de água           |
| 1 galão (EUA)  | 3,79          | 0,1337         | Jarra de leite            |
| 1 cu ft        | 28,32         | 1              | Bagagem de mão, freezer   |
| 1 m³           | 1.000         | 35,31          | Palete de envio           |

## Método 1: Use o conversor de volume do UtilBoxx (Recomendado)

A maneira mais rápida, privada e precisa de converter volume no navegador é o [Conversor de Volume do UtilBoxx](/pt/tools/unit/volume). Suporta metros cúbicos, litros, mililitros, pés cúbicos, polegadas cúbicas, galões americanos, galões imperiais, xícaras, onças fluidas, colheres de sopa, colheres de chá e mais, com conversão bidirecional instantânea. Tudo roda no seu navegador: sem servidor, sem upload, sem registros.

**Como usar:**

1. Acesse [utilboxx.com/pt/tools/unit/volume](/pt/tools/unit/volume)
2. Digite um valor em qualquer campo (L, mL, gal, cu ft, cu in, xícara, fl oz, etc.)
3. Todos os outros campos se atualizam instantaneamente
4. Copie o resultado

**Por que recomendamos este método:**

- **100 % grátis**, sem cadastro, sem e-mail, sem anúncios
- **Privacidade em primeiro lugar**: nada sai do seu navegador
- **Cobre unidades americanas, imperiais e métricas** simultaneamente, para que você possa comparar duas unidades quaisquer sem fazer matemática
- **Precisão exata** — usa o fator preciso 28,316846592
- **Funciona em qualquer dispositivo** com navegador

Se você envia pacotes, fabrica cerveja, faz pão ou compra eletrodomésticos internacionais, esta ferramenta evita confusões de unidades caras.

## Método 2: Busca no Google

Para uma conversão pontual, o Google é o caminho mais rápido. Digite \`5 cu ft to L\` ou \`100 litros em pés cúbicos\` na caixa de busca. O Google responde com um cartão conversor embutido no topo dos resultados.

**Prós:** zero atrito, sem cliques, funciona em qualquer dispositivo com navegador.

**Contras:** requer conexão à internet, só serve para um valor por vez, e o Google registra cada conversão. Para valores sensíveis à privacidade (P&D de receitas, preços de fornecedores), prefira um método offline. O Google também tem problemas com galões americanos vs imperiais e pode não distingui-los a menos que você especifique (ex.: "US gallon").

## Método 3: Python (ou qualquer linguagem)

Poucas linhas de Python cobrem cada conversão de volume. O mesmo fator de 28,316846592 é exato, então você pode usá-lo sem se preocupar com drift de ponto flutuante.

\`\`\`python
L_PER_CUFT   = 28.316846592
L_PER_USGAL  = 3.785411784
L_PER_IMPGAL = 4.54609
ML_PER_CUP   = 236.5882365

def cuft_to_l(cuft):     return cuft * L_PER_CUFT
def l_to_cuft(l):        return l / L_PER_CUFT
def usgal_to_l(gal):     return gal * L_PER_USGAL
def impgal_to_l(gal):    return gal * L_PER_IMPGAL
def cup_to_ml(cup):      return cup * ML_PER_CUP

print(cuft_to_l(5))         # 141.58423...
print(usgal_to_l(1))        # 3.785411784
print(impgal_to_l(1))       # 4.54609
print(cup_to_ml(1))         # 236.5882365
\`\`\`

Em JavaScript, com a mesma ideia:

\`\`\`js
const L_PER_CUFT = 28.316846592;
const cuftToL = cuft => cuft * L_PER_CUFT;
const lToCuft = l => l / L_PER_CUFT;
console.log(cuftToL(5).toFixed(2));  // 141.58
\`\`\`

Para conversão em lote de dados de receitas (um CSV de quantidades de ingredientes em xícaras, por exemplo, que você quer em mL para um livro de receitas métrico), um script pandas de 3 linhas processa milhares de linhas em milissegundos.

## Método 4: CLI com units (Linux/macOS)

O utilitário GNU \`units\` lida com conversão de volume na linha de comando. Instale no macOS com Homebrew (\`brew install units\`).

\`\`\`bash
# Converter 5 cu ft para litros
units "5 cubicfeet" "liters"
# 141.58423

# Converter 1 galão americano para litros
units "1 gallon" "liters"
# 3.7854118

# Converter 100 L para pés cúbicos
units "100 liters" "cubicfeet"
# 3.5314667
\`\`\`

O \`units\` entende muitos sinônimos (\`cu ft\`, \`cubic feet\`, \`ft³\`, \`L\`, \`liter\`, \`litre\`, \`gal\`, \`gallon\`, etc.) e lida com expressões compostas. É o caminho mais rápido para matemática de volume pontual em uma sessão de shell, e ideal para scripts shell que precisam embutir conversões em pipelines.

## Perguntas frequentes

### Galões americanos e imperiais são iguais?

Não — e confundi-los é um dos erros de unidades mais comuns. **1 galão americano = 3,785 L**, mas **1 galão imperial = 4,546 L**. A diferença é de cerca de 20 %. Uma receita que pede 1 galão de água nos EUA usa 3,785 L; a mesma receita no Reino Unido usa 4,546 L. Sempre verifique a fonte de qualquer medição em "galões" antes de tratá-la como uma quantidade conhecida.

### A "onça fluida" é a mesma que a onça de peso?

Não. Uma **onça fluida** (fl oz) mede volume. Uma **onça** (oz) mede peso (massa). Compartilham nome e a abreviação "oz", mas são unidades diferentes. 1 fl oz de água pesa aproximadamente 1 oz (avoirdupois), mas 1 fl oz de mel pesa cerca de 1,5 oz, e 1 fl oz de mercúrio pesa cerca de 13,6 oz. A abreviação é um acidente histórico que causa confusão constante.

### Como calculo o custo de envio com base no volume?

Transportadoras americanas (FedEx, UPS, USPS) usam **peso dimensional**: (comprimento × largura × altura em polegadas) / 139 = libras faturáveis para envios domésticos. Para internacionais, divida por 139 para alguns serviços ou por 5.000 para cm³ a kg. Para estimar o volume em cu ft de uma caixa, multiplique as dimensões em polegadas e divida por 1.728 (polegadas cúbicas por pé cúbico). Para converter para litros, multiplique por 28,317. Sempre verifique a calculadora específica da transportadora, pois os divisores variam por serviço.

### Por que a cilindrada do motor é em litros?

A cilindrada do motor (o volume total varrido por todos os pistões) é a métrica mais natural para o tamanho do motor. **2,0 L** é muito mais fácil de dizer do que "122 polegadas cúbicas". A unidade SI de volume é o metro cúbico, mas 1 m³ = 1.000.000 cm³ = 1.000 L, e motores tipicamente são de 1–8 L, então litros são a subdivisão natural. Entusiastas de muscle cars americanos ainda usam polegadas cúbicas ("um 350 small-block") por tradição, mas a ficha técnica oficial é em litros.

### Qual a diferença entre uma "xícara" nos EUA, Reino Unido e métrica?

Três xícaras diferentes:

- **Xícara legal americana**: 240 mL (usada em rótulos nutricionais desde a década de 1990, mas receitas frequentemente usam 236,588 mL = 8 fl oz)
- **Xícara costumeira americana**: 236,5882365 mL (a xícara padrão de cozinha americana)
- **Xícara métrica**: 250 mL (usada na Austrália, Nova Zelândia e receitas métricas)
- **Xícara imperial**: 284,131 mL (rara, principalmente em receitas britânicas antigas)

A diferença de 5-20 % entre essas xícaras importa em panificação, onde pequenos erros em farinha ou água mudam o resultado. Use valores exatos para panificar; aproximações de "1 xícara" estão ok para sopa.

### Quanto é 1 m³ em termos do mundo real?

Um metro cúbico é o volume de um cubo de 1 metro de lado. Alguns equivalentes do mundo real:

- Uma máquina de lavar padrão: cerca de 0,4 m³
- Uma banheira cheia: cerca de 0,3 m³
- Uma geladeira pequena: cerca de 0,5 m³
- Um palete de envio (palete EUR padrão, carregado a 1 m de altura): exatamente 1,2 × 0,8 × 1,0 = 0,96 m³
- O porta-malas de um SUV: cerca de 1,5-2,5 m³
- Uma sala de 10×10×10 ft: 28,3 m³

## Conclusão

Pés cúbicos para litros é uma conversão fundamental que abrange contextos de envio, culinária, fabricação de cerveja, HVAC e automotivo. O fator exato (28,316846592) não mudou desde 1959 e é exato. Para conversões ocasionais, o [Conversor de Volume do UtilBoxx](/pt/tools/unit/volume) é privado, grátis e funciona offline uma vez carregado. Para trabalho em lote, Python e a CLI \`units\` lidam com milhares de valores sem sair do terminal. E para conversões pontuais, Google ou um assistente de voz dão uma resposta instantânea.

Os atalhos mentais: **1 cu ft ≈ 28 L** (uma mala pequena), e **1 L ≈ 35 mL por polegada cúbica**. Uma bolsa de 5 cu ft é cerca de 142 L, uma garrafa de 1 L é cerca de 0,035 cu ft. Com essas âncoras, você pode fazer uma checagem de sanidade de qualquer volume na sua cabeça.`;

const cubicFeetLitersFr = `## Pourquoi convertir des pieds cubes en litres ?

La conversion de volume apparaît chaque fois que vous expédiez, stockez, brassez, cuisinez ou concevez quelque chose qui contient ou déplace une quantité mesurable d'espace. Le **pied cube** (cu ft ou ft³) est l'unité standard aux États-Unis pour l'expédition (FedEx, UPS), le dimensionnement HVAC, la capacité des réfrigérateurs et congélateurs, et la facturation du gaz naturel. Le **litre** (L) est la norme SI pour à peu près tout le reste, en particulier en cuisine, en brassage, en automobile (cylindrée du moteur) et dans l'emballage des produits de consommation dans la plupart des pays.

Vous rencontrerez cette conversion quand :

- **Vous expédiez un colis** : FedEx et UPS facturent en fonction du poids dimensionnel en pouces cubes ou pieds cubes. Les destinations internationales indiquent généralement les mètres cubes.
- **Vous dimensionnez un système CVC** : Le débit d'air est noté en CFM (pieds cubes par minute). Les spécifications des équipements donnent souvent des litres par seconde.
- **Vous achetez un réfrigérateur ou un congélateur** : Les modèles américains indiquent la capacité en cu ft. Les modèles européens en litres.
- **Brassage et cuisine** : Les recettes mélangent les unités librement. Un lot de 5 gallons fait 18,93 L ; une bouteille de 1 L fait 0,0353 cu ft.
- **Cylindrée du moteur** : 2,0 L revient à 122 cu in.

Bonne nouvelle : les formules sont courtes, exactes et faciles à mémoriser.

## Les formules exactes de conversion

### Pieds cubes en litres

\`\`\`
1 cu ft = 28,316846592 L   (exact, par définition)
1 L     = 0,03531466672149 cu ft
1 L     = 1 dm³ (décimètre cube, exact)
1 m³    = 1 000 L           (exact)
1 m³    = 35,3146667215 cu ft
\`\`\`

**Pourquoi le nombre exact** : Depuis 1959, le pied international est défini comme **exactement 0,3048 m**. Un pied cube vaut donc 0,3048³ = 0,028316846592 m³ exactement. Un litre vaut exactement 0,001 m³ (un décimètre cube). Donc 1 cu ft = 0,028316846592 / 0,001 = 28,316846592 L, exact.

**Exemples détaillés :**

- **5 cu ft → L** : 5 × 28,316846592 = **141,58 L** (un grand sac polochon)
- **100 L → cu ft** : 100 / 28,316846592 = **3,53 cu ft**
- **1,5 cu ft → mL** : 1,5 × 28 316,846592 = **42 475,27 mL** (une petite glacière)

### Gallons et autres unités courantes

Les deux gallons que vous rencontrerez :

\`\`\`
1 gallon US              = 3,785411784 L     (exact)
1 gallon US              = 0,133680556 cu ft
1 gallon impérial        = 4,54609 L         (exact)
1 gallon impérial        = 0,160543653 cu ft
1 tasse (US)             = 236,5882365 mL
1 tasse (métrique)       = 250 mL
1 once liquide (US)      = 29,5735295625 mL
\`\`\`

**Le piège du gallon** : Les gallons américains et impériaux (Royaume-Uni) sont différents. **1 gallon US = 3,785 L**, mais **1 gallon impérial = 4,546 L**. La différence est d'environ 20 %. Une bouteille de 1 gallon de lait aux États-Unis fait 3,785 L ; la même bouteille au Royaume-Uni ferait 4,546 L. Les mélanger produit une erreur de 20 %.

### Tasses, cuillères à soupe et à café (US)

\`\`\`
1 cuillère à soupe (US) = 14,78676478125 mL
1 cuillère à café (US)  = 4,92892159375 mL
1 once liquide (US)     = 29,5735295625 mL
1 tasse (US)            = 236,5882365 mL = 8 fl oz
1 pinte (US)            = 473,176473 mL
1 quart (US)            = 946,352946 mL
1 gallon (US)           = 3,785411784 L
\`\`\`

Pour la plupart de la cuisine, l'approximation simple **1 tasse ≈ 240 mL** suffit. Pour la pâtisserie ou la mise à l'échelle, utilisez des valeurs exactes.

## Table de référence rapide

| Unité           | Litres        | Pieds cubes    | Contexte courant          |
|-----------------|--------------:|---------------:|---------------------------|
| 1 fl oz (US)    | 0,0296        | 0,00104        | Cuillerée de liquide      |
| 1 tasse (US)    | 0,2366        | 0,00836        | Tasse à café              |
| 1 L             | 1             | 0,0353         | Bouteille d'eau           |
| 1 gallon (US)   | 3,79          | 0,1337         | Bouteille de lait         |
| 1 cu ft         | 28,32         | 1              | Bagage à main, congélateur|
| 1 m³            | 1 000         | 35,31          | Palette d'expédition      |

## Méthode 1 : Utilisez le convertisseur de volume de UtilBoxx (Recommandé)

La façon la plus rapide, privée et précise de convertir un volume dans le navigateur est le [Convertisseur de Volume de UtilBoxx](/fr/tools/unit/volume). Il prend en charge les mètres cubes, litres, millilitres, pieds cubes, pouces cubes, gallons US, gallons impériaux, tasses, onces liquides, cuillères à soupe, cuillères à café et plus, avec conversion bidirectionnelle instantanée. Tout s'exécute dans votre navigateur : pas de serveur, pas de téléversement, pas de logs.

**Comment l'utiliser :**

1. Allez sur [utilboxx.com/fr/tools/unit/volume](/fr/tools/unit/volume)
2. Saisissez une valeur dans n'importe quel champ (L, mL, gal, cu ft, cu in, tasse, fl oz, etc.)
3. Tous les autres champs se mettent à jour instantanément
4. Copiez le résultat

**Pourquoi nous recommandons cette méthode :**

- **100 % gratuit**, sans inscription, sans e-mail, sans publicité
- **Confidentialité d'abord** : rien ne quitte votre navigateur
- **Couvre simultanément les unités US, impériales et métriques**, vous pouvez comparer deux unités sans calculs
- **Précision exacte** — utilise le facteur précis 28,316846592
- **Fonctionne sur tout appareil** avec navigateur

Si vous expédiez des colis, brassez de la bière, faites du pain ou achetez des appareils internationaux, cet outil vous évitera des confusions d'unités coûteuses.

## Méthode 2 : Recherche Google

Pour une conversion ponctuelle, Google est le chemin le plus rapide. Saisissez \`5 cu ft to L\` ou \`100 litres en pieds cubes\` dans la zone de recherche. Google répond avec une carte de conversion intégrée en haut des résultats.

**Avantages :** zéro friction, aucun clic requis, fonctionne sur tout appareil avec navigateur.

**Inconvénients :** nécessite une connexion internet, bon pour une seule valeur à la fois, et Google enregistre chaque conversion. Pour les valeurs sensibles à la confidentialité (R&D de recettes, prix fournisseurs), préférez une méthode hors ligne. Google a aussi du mal avec les gallons US vs impériaux et peut ne pas les distinguer sauf si vous l'écrivez explicitement (par ex., « US gallon »).

## Méthode 3 : Python (ou tout langage)

Quelques lignes de Python couvrent chaque conversion de volume. Le même facteur 28,316846592 est exact, vous pouvez donc l'utiliser sans vous soucier de la dérive en virgule flottante.

\`\`\`python
L_PER_CUFT   = 28.316846592
L_PER_USGAL  = 3.785411784
L_PER_IMPGAL = 4.54609
ML_PER_CUP   = 236.5882365

def cuft_to_l(cuft):     return cuft * L_PER_CUFT
def l_to_cuft(l):        return l / L_PER_CUFT
def usgal_to_l(gal):     return gal * L_PER_USGAL
def impgal_to_l(gal):    return gal * L_PER_IMPGAL
def cup_to_ml(cup):      return cup * ML_PER_CUP

print(cuft_to_l(5))         # 141.58423...
print(usgal_to_l(1))        # 3.785411784
print(impgal_to_l(1))       # 4.54609
print(cup_to_ml(1))         # 236.5882365
\`\`\`

En JavaScript, avec la même idée :

\`\`\`js
const L_PER_CUFT = 28.316846592;
const cuftToL = cuft => cuft * L_PER_CUFT;
const lToCuft = l => l / L_PER_CUFT;
console.log(cuftToL(5).toFixed(2));  // 141.58
\`\`\`

Pour la conversion par lots de données de recettes (un CSV de quantités d'ingrédients en tasses, par exemple, que vous voulez en mL pour un livre de cuisine métrique), un script pandas de 3 lignes traite des milliers de lignes en millisecondes.

## Méthode 4 : CLI avec units (Linux/macOS)

L'utilitaire GNU \`units\` gère la conversion de volume en ligne de commande. Installez sur macOS avec Homebrew (\`brew install units\`).

\`\`\`bash
# Convertir 5 cu ft en litres
units "5 cubicfeet" "liters"
# 141.58423

# Convertir 1 gallon US en litres
units "1 gallon" "liters"
# 3.7854118

# Convertir 100 L en pieds cubes
units "100 liters" "cubicfeet"
# 3.5314667
\`\`\`

\`units\` comprend de nombreux synonymes (\`cu ft\`, \`cubic feet\`, \`ft³\`, \`L\`, \`liter\`, \`litre\`, \`gal\`, \`gallon\`, etc.) et gère les expressions composées. C'est le chemin le plus rapide pour des calculs de volume ponctuels dans une session shell, et l'idéal pour les scripts shell qui ont besoin d'incruster des conversions dans des pipelines.

## Questions fréquentes

### Les gallons US et impériaux sont-ils identiques ?

Non — et les confondre est l'une des erreurs d'unités les plus courantes. **1 gallon US = 3,785 L**, mais **1 gallon impérial = 4,546 L**. La différence est d'environ 20 %. Une recette qui demande 1 gallon d'eau aux États-Unis utilise 3,785 L ; la même recette au Royaume-Uni utilise 4,546 L. Vérifiez toujours la source de toute mesure en « gallons » avant de la traiter comme une quantité connue.

### L'« once liquide » est-elle la même que l'once de poids ?

Non. Une **once liquide** (fl oz) mesure un volume. Une **once** (oz) mesure un poids (masse). Elles partagent le nom et l'abréviation « oz », mais ce sont des unités différentes. 1 fl oz d'eau pèse environ 1 oz (avoirdupois), mais 1 fl oz de miel pèse environ 1,5 oz, et 1 fl oz de mercure pèse environ 13,6 oz. L'abréviation est un accident historique qui cause une confusion constante.

### Comment calculer le coût d'expédition en fonction du volume ?

Les transporteurs américains (FedEx, UPS, USPS) utilisent le **poids dimensionnel** : (longueur × largeur × hauteur en pouces) / 139 = livres facturables pour les envois domestiques. Pour l'international, divisez par 139 pour certains services ou par 5 000 pour cm³ vers kg. Pour estimer le volume en cu ft d'une boîte, multipliez les dimensions en pouces et divisez par 1 728 (pouces cubes par pied cube). Pour convertir en litres, multipliez par 28,317. Vérifiez toujours le calculateur spécifique du transporteur, car les diviseurs varient selon le service.

### Pourquoi la cylindrée du moteur est-elle en litres ?

La cylindrée du moteur (le volume total balayé par tous les pistons) est la métrique la plus naturelle pour la taille du moteur. **2,0 L** est bien plus facile à dire que « 122 pouces cubes ». L'unité SI de volume est le mètre cube, mais 1 m³ = 1 000 000 cm³ = 1 000 L, et les moteurs font typiquement 1–8 L, donc les litres sont la subdivision naturelle. Les passionnés de muscle cars américains utilisent encore les pouces cubes (« un 350 small-block ») par tradition, mais la fiche technique officielle est en litres.

### Quelle est la différence entre une « tasse » aux États-Unis, au Royaume-Uni et en métrique ?

Trois tasses différentes :

- **Tasse légale américaine** : 240 mL (utilisée sur les étiquettes nutritionnelles depuis les années 1990, mais les recettes utilisent souvent 236,588 mL = 8 fl oz)
- **Tasse coutumière américaine** : 236,5882365 mL (la tasse standard de cuisine américaine)
- **Tasse métrique** : 250 mL (utilisée en Australie, Nouvelle-Zélande et dans les recettes métriques)
- **Tasse impériale** : 284,131 mL (rare, surtout dans les vieilles recettes britanniques)

La différence de 5–20 % entre ces tasses compte en pâtisserie, où de petites erreurs de farine ou d'eau changent le résultat. Utilisez des valeurs exactes pour la pâtisserie ; les approximations de « 1 tasse » conviennent pour la soupe.

### Combien fait 1 m³ en termes concrets ?

Un mètre cube est le volume d'un cube de 1 mètre de côté. Quelques équivalents du monde réel :

- Un lave-linge standard : environ 0,4 m³
- Une baignoire pleine : environ 0,3 m³
- Un petit réfrigérateur : environ 0,5 m³
- Une palette d'expédition (palette EUR standard, chargée à 1 m de hauteur) : exactement 1,2 × 0,8 × 1,0 = 0,96 m³
- Le coffre d'un SUV : environ 1,5–2,5 m³
- Une pièce de 10×10×10 ft : 28,3 m³

## Conclusion

Pieds cubes en litres est une conversion fondamentale qui couvre l'expédition, la cuisine, le brassage, le CVC et l'automobile. Le facteur exact (28,316846592) n'a pas changé depuis 1959 et est exact. Pour des conversions ponctuelles, le [Convertisseur de Volume de UtilBoxx](/fr/tools/unit/volume) est privé, gratuit et fonctionne hors ligne une fois chargé. Pour le travail par lots, Python et la CLI \`units\` gèrent des milliers de valeurs sans quitter le terminal. Et pour les conversions ponctuelles, Google ou un assistant vocal donnent une réponse instantanée.

Les raccourcis mentaux : **1 cu ft ≈ 28 L** (une petite valise), et **1 L ≈ 35 mL par pouce cube**. Un sac de 5 cu ft fait environ 142 L, une bouteille de 1 L fait environ 0,035 cu ft. Avec ces ancres, vous pouvez faire une vérification de bon sens de n'importe quel volume dans votre tête.`;

const cubicFeetLitersDe = `## Warum Kubikfuß in Liter umrechnen?

Die Volumenumrechnung taucht überall auf, wo Sie etwas versenden, lagern, brauen, kochen oder entwerfen, das einen messbaren Raum enthält oder bewegt. Der **Kubikfuß** (cu ft oder ft³) ist die Standardeinheit in den USA für Versand (FedEx, UPS), HVAC-Dimensionierung, Kühl- und Gefrierschrankkapazität und Erdgasabrechnung. Der **Liter** (L) ist der SI-Standard für fast alles andere, insbesondere beim Kochen, Brauen, in der Automobilbranche (Hubraum) und in der Konsumgüterverpackung in den meisten Ländern.

Sie begegnen dieser Umrechnung, wenn:

- **Sie ein Paket versenden**: FedEx und UPS berechnen nach dem dimensionsbasierten Gewicht in Kubikzoll oder Kubikfuß. Internationale Ziele geben in der Regel Kubikmeter an.
- **Sie eine HVAC-Anlage dimensionieren**: Luftstrom wird in CFM (Kubikfuß pro Minute) bewertet. Gerätespezifikationen geben oft Liter pro Sekunde an.
- **Sie einen Kühl- oder Gefrierschrank kaufen**: US-Modelle listen die Kapazität in cu ft. Europäische Modelle in Litern.
- **Beim Brauen und Kochen**: Rezepte mischen Einheiten frei. Eine 5-Gallonen-Charge sind 18,93 L; eine 1-L-Flasche sind 0,0353 cu ft.
- **Beim Hubraum**: 2,0 L entsprechen 122 cu in.

Die gute Nachricht: Die Formeln sind kurz, exakt und leicht zu merken.

## Die exakten Umrechnungsformeln

### Kubikfuß zu Liter

\`\`\`
1 cu ft = 28,316846592 L   (exakt, per Definition)
1 L     = 0,03531466672149 cu ft
1 L     = 1 dm³ (Kubikdezimeter, exakt)
1 m³    = 1.000 L           (exakt)
1 m³    = 35,3146667215 cu ft
\`\`\`

**Warum die exakte Zahl**: Seit 1959 ist der internationale Fuß definiert als **genau 0,3048 m**. Ein Kubikfuß ist also 0,3048³ = 0,028316846592 m³ exakt. Ein Liter ist genau 0,001 m³ (ein Kubikdezimeter). Also 1 cu ft = 0,028316846592 / 0,001 = 28,316846592 L, exakt.

**Durchgerechnete Beispiele:**

- **5 cu ft → L**: 5 × 28,316846592 = **141,58 L** (eine große Duffel-Tasche)
- **100 L → cu ft**: 100 / 28,316846592 = **3,53 cu ft**
- **1,5 cu ft → mL**: 1,5 × 28.316,846592 = **42.475,27 mL** (eine kleine Kühlbox)

### Gallonen und andere gängige Einheiten

Die zwei Gallonen, denen Sie begegnen werden:

\`\`\`
1 US-Gallone            = 3,785411784 L     (exakt)
1 US-Gallone            = 0,133680556 cu ft
1 Imperial-Gallone      = 4,54609 L         (exakt)
1 Imperial-Gallone      = 0,160543653 cu ft
1 Tasse (US)            = 236,5882365 mL
1 Tasse (metrisch)      = 250 mL
1 Flüssigunze (US)      = 29,5735295625 mL
\`\`\`

**Die Gallonen-Falle**: US-Gallonen und Imperial-Gallonen (UK) sind verschieden. **1 US-Gallone = 3,785 L**, aber **1 Imperial-Gallone = 4,546 L**. Der Unterschied beträgt etwa 20 %. Ein 1-Gallonen-Milchkrug in den USA sind 3,785 L; derselbe Krug im Vereinigten Königreich wären 4,546 L. Sie zu verwechseln ergibt einen Fehler von 20 %.

### Tassen, Esslöffel und Teelöffel (US)

\`\`\`
1 Esslöffel (US)         = 14,78676478125 mL
1 Teelöffel (US)         = 4,92892159375 mL
1 Flüssigunze (US)       = 29,5735295625 mL
1 Tasse (US)             = 236,5882365 mL = 8 fl oz
1 Pint (US)              = 473,176473 mL
1 Quart (US)             = 946,352946 mL
1 Gallone (US)           = 3,785411784 L
\`\`\`

Für die meisten Kochzwecke reicht die einfache Näherung **1 Tasse ≈ 240 mL**. Zum Backen oder Hochskalieren verwenden Sie exakte Werte.

## Schnellreferenztabelle

| Einheit        | Liter         | Kubikfuß       | Üblicher Kontext          |
|----------------|--------------:|---------------:|---------------------------|
| 1 fl oz (US)   | 0,0296        | 0,00104        | Esslöffel Flüssigkeit     |
| 1 Tasse (US)   | 0,2366        | 0,00836        | Kaffeetasse               |
| 1 L            | 1             | 0,0353         | Wasserflasche             |
| 1 Gallone (US) | 3,79          | 0,1337         | Milchkrug                 |
| 1 cu ft        | 28,32         | 1              | Handgepäck, Gefrierschrank|
| 1 m³           | 1.000         | 35,31          | Versandpalette            |

## Methode 1: Den Volumenumrechner von UtilBoxx verwenden (Empfohlen)

Der schnellste, privateste und genaueste Weg, Volumen im Browser umzurechnen, ist der [Volumenumrechner von UtilBoxx](/de/tools/unit/volume). Er unterstützt Kubikmeter, Liter, Milliliter, Kubikfuß, Kubikzoll, US-Gallonen, Imperial-Gallonen, Tassen, Flüssigunzen, Esslöffel, Teelöffel und mehr, mit bidirektionaler sofortiger Umrechnung. Alles läuft in Ihrem Browser — kein Server, kein Upload, keine Logs.

**So verwenden Sie ihn:**

1. Gehen Sie zu [utilboxx.com/de/tools/unit/volume](/de/tools/unit/volume)
2. Geben Sie einen Wert in ein beliebiges Feld ein (L, mL, gal, cu ft, cu in, Tasse, fl oz usw.)
3. Alle anderen Felder aktualisieren sich sofort
4. Kopieren Sie das Ergebnis

**Warum wir diese Methode empfehlen:**

- **100 % kostenlos**, keine Registrierung, keine E-Mail, keine Werbung
- **Privatsphäre zuerst**: Nichts verlässt Ihren Browser
- **Deckt US-, Imperial- und metrische Einheiten gleichzeitig ab**, sodass Sie zwei beliebige Einheiten ohne Rechnen vergleichen können
- **Exakte Präzision** — verwendet den präzisen Faktor 28,316846592
- **Funktioniert auf jedem Gerät** mit Browser

Wenn Sie Pakete versenden, Bier brauen, Brot backen oder internationale Geräte kaufen, erspart Ihnen dieses Werkzeug kostspielige Einheitenverwirrung.

## Methode 2: Google-Suche

Für eine einmalige Umrechnung ist Google der schnellste Weg. Geben Sie \`5 cu ft to L\` oder \`100 Liter in Kubikfuß\` in das Suchfeld ein. Google antwortet mit einer eingebauten Umrechnungskarte oben in den Ergebnissen.

**Vorteile:** Null Reibung, kein Klick nötig, funktioniert auf jedem Gerät mit Browser.

**Nachteile:** Erfordert eine Internetverbindung, nur für einen Wert gleichzeitig gut, und Google protokolliert jede Umrechnung. Für datenschutzsensible Werte (Rezeptentwicklung, Lieferantenpreise) bevorzugen Sie eine Offline-Methode. Google hat auch Schwierigkeiten mit US- vs. Imperial-Gallonen und unterscheidet sie möglicherweise nicht, außer Sie schreiben es explizit (z. B. „US gallon").

## Methode 3: Python (oder jede Sprache)

Ein paar Zeilen Python decken jede Volumenumrechnung ab. Derselbe Faktor 28,316846592 ist exakt, Sie können ihn also verwenden, ohne sich um Gleitkomma-Drift zu sorgen.

\`\`\`python
L_PER_CUFT   = 28.316846592
L_PER_USGAL  = 3.785411784
L_PER_IMPGAL = 4.54609
ML_PER_CUP   = 236.5882365

def cuft_to_l(cuft):     return cuft * L_PER_CUFT
def l_to_cuft(l):        return l / L_PER_CUFT
def usgal_to_l(gal):     return gal * L_PER_USGAL
def impgal_to_l(gal):    return gal * L_PER_IMPGAL
def cup_to_ml(cup):      return cup * ML_PER_CUP

print(cuft_to_l(5))         # 141.58423...
print(usgal_to_l(1))        # 3.785411784
print(impgal_to_l(1))       # 4.54609
print(cup_to_ml(1))         # 236.5882365
\`\`\`

In JavaScript mit derselben Idee:

\`\`\`js
const L_PER_CUFT = 28.316846592;
const cuftToL = cuft => cuft * L_PER_CUFT;
const lToCuft = l => l / L_PER_CUFT;
console.log(cuftToL(5).toFixed(2));  // 141.58
\`\`\`

Für die Stapelumrechnung von Rezeptdaten (eine CSV mit Zutatenmengen in Tassen zum Beispiel, die Sie für ein metrisches Kochbuch in mL umwandeln möchten) verarbeitet ein 3-zeiliges pandas-Skript Tausende von Zeilen in Millisekunden.

## Methode 4: CLI mit units (Linux/macOS)

Das GNU-Dienstprogramm \`units\` erledigt die Volumenumrechnung in der Kommandozeile. Installieren Sie auf macOS mit Homebrew (\`brew install units\`).

\`\`\`bash
# 5 cu ft in Liter umrechnen
units "5 cubicfeet" "liters"
# 141.58423

# 1 US-Gallone in Liter
units "1 gallon" "liters"
# 3.7854118

# 100 L in Kubikfuß
units "100 liters" "cubicfeet"
# 3.5314667
\`\`\`

\`units\` versteht viele Synonyme (\`cu ft\`, \`cubic feet\`, \`ft³\`, \`L\`, \`liter\`, \`litre\`, \`gal\`, \`gallon\` usw.) und verarbeitet zusammengesetzte Ausdrücke. Es ist der schnellste Weg für einmalige Volumenmathematik in einer Shell-Sitzung und ideal für Shell-Skripte, die Umrechnungen in Pipelines einbetten müssen.

## Häufige Fragen

### Sind US-Gallonen und Imperial-Gallonen gleich?

Nein — und sie zu verwechseln ist einer der häufigsten Einheitenfehler. **1 US-Gallone = 3,785 L**, aber **1 Imperial-Gallone = 4,546 L**. Der Unterschied beträgt etwa 20 %. Ein Rezept, das 1 Gallone Wasser in den USA verlangt, verwendet 3,785 L; dasselbe Rezept im Vereinigten Königreich verwendet 4,546 L. Überprüfen Sie immer die Quelle jeder „Gallonen"-Messung, bevor Sie sie als bekannte Größe behandeln.

### Ist die „Flüssigunze" dasselbe wie die Gewichtsunze?

Nein. Eine **Flüssigunze** (fl oz) misst Volumen. Eine **Unze** (oz) misst Gewicht (Masse). Sie teilen sich den Namen und die Abkürzung „oz", sind aber unterschiedliche Einheiten. 1 fl oz Wasser wiegt ungefähr 1 oz (Avoirdupois), aber 1 fl oz Honig wiegt etwa 1,5 oz, und 1 fl oz Quecksilber wiegt etwa 13,6 oz. Die Abkürzung ist ein historischer Zufall, der ständig für Verwirrung sorgt.

### Wie berechne ich die Versandkosten basierend auf dem Volumen?

US-Versanddienstleister (FedEx, UPS, USPS) verwenden das **dimensionale Gewicht**: (Länge × Breite × Höhe in Zoll) / 139 = abrechnungsfähige Pfunde für Inlandsendungen. Für internationale Sendungen teilen Sie je nach Dienst durch 139 oder 5.000 für cm³ zu kg. Um das Volumen in cu ft einer Schachtel zu schätzen, multiplizieren Sie die Zollmaße und teilen durch 1.728 (Kubikzoll pro Kubikfuß). Zur Umrechnung in Liter multiplizieren Sie mit 28,317. Überprüfen Sie immer den spezifischen Rechner des Versanddienstleisters, da die Divisoren je nach Dienst variieren.

### Warum wird der Hubraum in Litern angegeben?

Der Hubraum (das von allen Kolben verdrängte Gesamtvolumen) ist das natürlichste Maß für die Motorgröße. **2,0 L** ist viel einfacher zu sagen als „122 Kubikzoll". Die SI-Volumeneinheit ist der Kubikmeter, aber 1 m³ = 1.000.000 cm³ = 1.000 L, und Motoren haben typischerweise 1–8 L, daher sind Liter die natürliche Untereinheit. US-Muscle-Car-Enthusiasten verwenden aus Tradition immer noch Kubikzoll („ein 350 Small-Block"), aber das offizielle Datenblatt ist in Litern.

### Was ist der Unterschied zwischen einer „Tasse" in den USA, Großbritannien und metrisch?

Drei verschiedene Tassen:

- **US-rechtliche Tasse**: 240 mL (seit den 1990ern auf Nährwertkennzeichnungen verwendet, aber Rezepte verwenden oft 236,588 mL = 8 fl oz)
- **US-übliche Tasse**: 236,5882365 mL (die Standard-US-Kochtasse)
- **Metrische Tasse**: 250 mL (verwendet in Australien, Neuseeland und metrischen Rezepten)
- **Imperial-Tasse**: 284,131 mL (selten, hauptsächlich in älteren britischen Rezepten)

Der Unterschied von 5–20 % zwischen diesen Tassen ist beim Backen wichtig, wo kleine Fehler bei Mehl oder Wasser das Ergebnis verändern. Verwenden Sie exakte Werte beim Backen; „1 Tasse"-Näherungen sind für Suppe in Ordnung.

### Wie viel ist 1 m³ in der realen Welt?

Ein Kubikmeter ist das Volumen eines Würfels mit 1 Meter Kantenlänge. Einige reale Entsprechungen:

- Eine Standard-Waschmaschine: etwa 0,4 m³
- Eine volle Badewanne: etwa 0,3 m³
- Ein kleiner Kühlschrank: etwa 0,5 m³
- Eine Versandpalette (Standard-EUR-Palette, beladen auf 1 m Höhe): genau 1,2 × 0,8 × 1,0 = 0,96 m³
- Der Kofferraum eines SUV: etwa 1,5–2,5 m³
- Ein 10×10×10-Fuß-Raum: 28,3 m³

## Fazit

Kubikfuß zu Liter ist eine grundlegende Umrechnung, die Versand-, Koch-, Brau-, HVAC- und Automobilkontexte umfasst. Der exakte Faktor (28,316846592) hat sich seit 1959 nicht geändert und ist exakt. Für gelegentliche Umrechnungen ist der [Volumenumrechner von UtilBoxx](/de/tools/unit/volume) privat, kostenlos und funktioniert offline, sobald er geladen ist. Für Stapelverarbeitung bewältigen Python und die \`units\`-CLI Tausende von Werten, ohne das Terminal zu verlassen. Und für gelegentliche Einmalumrechnungen geben Google oder ein Sprachassistent sofortige Antworten.

Die mentalen Abkürzungen: **1 cu ft ≈ 28 L** (ein kleiner Koffer), und **1 L ≈ 35 mL pro Kubikzoll**. Eine 5-cu-ft-Tasche sind etwa 142 L, eine 1-L-Flasche sind etwa 0,035 cu ft. Mit diesen Ankern können Sie jedes Volumen im Kopf auf Plausibilität prüfen.`;

export const cubicFeetToLitersPost: Record<string, BlogPost> = {
  en: {
    slug: "cubic-feet-to-liters-conversion",
    category: "Unit Tools",
    date: "2026-03-28",
    readTime: "4 min",
    title: "Cubic Feet to Liters Conversion: A Practical Guide",
    description: "Convert cu ft to liters, gallons, cubic meters, and cups. With shipping context.",
    content: cubicFeetLitersEn,
  },
  zh: {
    slug: "cubic-feet-to-liters-conversion",
    category: "单位工具",
    date: "2026-03-28",
    readTime: "4 分钟",
    title: "立方英尺转升换算：实用指南",
    description: "在立方英尺、升、加仑、立方米和杯之间换算。附运输场景。",
    content: cubicFeetLitersZh,
  },
  ja: {
    slug: "cubic-feet-to-liters-conversion",
    category: "単位ツール",
    date: "2026-03-28",
    readTime: "4 分",
    title: "立方フィートからリットルへの換算：実践ガイド",
    description: "立方フィート、リットル、ガロン、立方メートル、カップの間で換算。輸送の文脈とともに。",
    content: cubicFeetLitersJa,
  },
  es: {
    slug: "cubic-feet-to-liters-conversion",
    category: "Herramientas de unidades",
    date: "2026-03-28",
    readTime: "4 min",
    title: "Conversión de pies cúbicos a litros: Una guía práctica",
    description: "Convierta entre pies cúbicos, litros, galones, metros cúbicos y tazas. Con contexto de envío.",
    content: cubicFeetLitersEs,
  },
  pt: {
    slug: "cubic-feet-to-liters-conversion",
    category: "Ferramentas de unidades",
    date: "2026-03-28",
    readTime: "4 min",
    title: "Conversão de pés cúbicos para litros: Um guia prático",
    description: "Converta entre pés cúbicos, litros, galões, metros cúbicos e xícaras. Com contexto de envio.",
    content: cubicFeetLitersPt,
  },
  fr: {
    slug: "cubic-feet-to-liters-conversion",
    category: "Outils d'unités",
    date: "2026-03-28",
    readTime: "4 min",
    title: "Conversion de pieds cubes en litres : un guide pratique",
    description: "Convertissez entre pieds cubes, litres, gallons, mètres cubes et tasses. Avec un contexte d'expédition.",
    content: cubicFeetLitersFr,
  },
  de: {
    slug: "cubic-feet-to-liters-conversion",
    category: "Einheiten-Tools",
    date: "2026-03-28",
    readTime: "4 Min",
    title: "Kubikfuß in Liter umrechnen: Ein praktischer Leitfaden",
    description: "Rechnen Sie zwischen Kubikfuß, Liter, Gallonen, Kubikmeter und Tassen um. Mit Versand-Kontext.",
    content: cubicFeetLitersDe,
  },
};
