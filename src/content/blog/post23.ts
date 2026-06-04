// Blog post: KG to LBS Conversion: A Practical Guide
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const kgToLbsEn = `## Why convert kg to lbs?

The kilogram is the SI base unit of mass and is used by every country that has adopted the metric system — which is most of them. The pound is the everyday mass unit in the United States (and to a lesser extent, the UK and Canada for body weight). Whenever you read a US recipe, weigh yourself on an American scale, check a dumbbell at a US gym, or quote a baby's weight from a US birth certificate, you encounter pounds.

Three more units show up in the same contexts:

- **Ounce (oz)**: 1 lb = 16 oz. Used in US cooking.
- **Gram (g)**: 1 kg = 1,000 g. The metric base unit, used worldwide for small masses.
- **Stone (st)**: 1 st = 14 lb. Still common in the UK and Ireland for body weight.

The good news: the conversion is one number, and it's exact. Memorize 1 kg = 2.20462 lbs and you can do the math in your head for any value.

## The exact formulas

\`\`\`
1 kg = 2.2046226218 lbs (exact)
1 kg = 35.27396195 oz
1 kg = 1,000 g
1 lb = 0.45359237 kg (exact)
1 lb = 453.59237 g
1 st = 14 lb = 6.35029318 kg
\`\`\`

Worked examples:

- **70 kg → lbs**: 70 × 2.20462 = **154.32 lbs**
- **150 lbs → kg**: 150 × 0.45359237 = **68.04 kg**
- **5 kg → oz**: 5 × 35.27396 = **176.37 oz**
- **12 st → kg**: 12 × 6.35029 = **76.20 kg**

A useful mental shortcut: divide pounds by 2.2 to get a quick kg estimate. **154 lbs / 2.2 ≈ 70 kg**. The result is within 0.5% — close enough for everyday use, not for shipping manifests.

## Quick reference table

| kg   | lbs     | oz       | st (stone) |
|-----:|--------:|---------:|-----------:|
| 1    | 2.20    | 35.27    | 0.16       |
| 5    | 11.02   | 176.37   | 0.79       |
| 10   | 22.05   | 352.74   | 1.57       |
| 25   | 55.12   | 881.85   | 3.94       |
| 50   | 110.23  | 1,763.70 | 7.87       |
| 70   | 154.32  | 2,469.18 | 11.02      |
| 100  | 220.46  | 3,527.40 | 15.75      |

## Method 1: Use UtilBoxx's Weight Converter (Recommended)

The fastest, most private, and most accurate way to convert weight in your browser is the [UtilBoxx Weight Converter](/en/tools/unit/weight). It supports kilograms, grams, milligrams, pounds, ounces, stones, US tons, and metric tons, with bidirectional instant conversion and a clean interface. Everything runs in your browser — no server, no upload, no logs.

**How to use it:**

1. Go to [utilboxx.com/en/tools/unit/weight](/en/tools/unit/weight)
2. Type a value in any field (kg, g, mg, lbs, oz, st, etc.)
3. All other fields update instantly
4. Copy the result with one click

**Why we recommend this method:**

- **100% free**, no signup, no email, no ads
- **Privacy-first**: nothing leaves your browser
- **All common weight units**: kg, g, mg, lbs, oz, st, tons
- **High precision**: no rounding errors
- **Works on any device** with a browser

If you weigh packages, track fitness, or interpret US recipes, bookmarking this tool will save time every week.

## Method 2: Google Search

For a one-off conversion, Google is the fastest path. Type \`70 kg to lbs\` or \`150 pounds in kg\` directly into the search box. Google replies with a built-in converter card at the top of the results, including the formula and a small calculator.

**Pros:** zero friction, no click required, works on any device with a browser.

**Cons:** requires an internet connection, only good for one value at a time, and Google logs every conversion. For privacy-sensitive values (medical weight, prescription dosing), prefer an offline method.

## Method 3: Python (or any language)

A one-liner in Python handles every conversion:

\`\`\`python
KG_TO_LBS = 2.2046226218
KG_TO_OZ  = 35.27396195
KG_TO_ST  = 0.1574730444
LB_TO_KG  = 0.45359237

def kg_to_lbs(kg): return kg * KG_TO_LBS
def lbs_to_kg(lb): return lb * LB_TO_KG

print(kg_to_lbs(70))   # 154.32358...
print(lbs_to_kg(150))  # 68.0388555
print(70 * 35.27396)   # 2469.1772 oz
\`\`\`

JavaScript, with the same idea:

\`\`\`js
const kgToLbs = kg => kg * 2.2046226218;
const lbsToKg = lb => lb * 0.45359237;
console.log(kgToLbs(70).toFixed(2));  // 154.32
\`\`\`

For batch conversion of a CSV (say, a list of patient weights in kg that you want in lbs for a US report), a 3-line pandas script does it:

\`\`\`python
import pandas as pd
df = pd.read_csv("weights.csv")
df["lbs"] = df["kg"] * 2.20462
df.to_csv("weights_lbs.csv", index=False)
\`\`\`

## Method 4: CLI with units (Linux/macOS)

The GNU \`units\` utility handles weight conversion on the command line. Install on macOS with Homebrew (\`brew install units\`).

\`\`\`bash
# Convert 70 kg to pounds
units "70 kg" "lb"
# 154.3236

# 150 lbs to kg
units "150 lb" "kg"
# 68.03886

# 1 stone to kg
units "1 stone" "kg"
# 6.350293
\`\`\`

\`units\` understands many synonyms: \`lb\`, \`lbs\`, \`pound\`, \`pounds\`, \`kg\`, \`kilogram\`, \`g\`, \`gram\`, \`oz\`, \`ounce\`, \`stone\`, \`ton\`, \`tonne\`, etc. It also accepts compound expressions like \`2 lb 3 oz\`. This is the fastest path for one-off weight math in a shell session.

## Common questions

### Is 1 kg exactly 2.20462 lbs?

Yes, in practical terms. The exact international avoirdupois pound is defined as **exactly 0.45359237 kg**, making 1 kg = **2.2046226218... lbs** to full precision. For everyday use, **2.20462** (5 decimals) is more than enough. For scientific or shipping use, use the full value or a tool that displays 6+ decimal places.

### What about troy ounces?

Troy ounces (oz t) are a different unit used for precious metals: **1 troy oz = 31.1034768 g**, while **1 avoirdupois oz = 28.349523125 g**. The converter above uses avoirdupois. Gold, silver, and platinum are quoted in troy ounces. If you are trading commodities, make sure you know which ounce you are dealing with — a troy ounce is about 10% heavier than an avoirdupois ounce.

### Why does the US still use pounds?

Historical and cultural inertia. The pound dates back to Roman times (the word "pound" comes from Latin *libra*, which is why the symbol is "lb"). The metric system was proposed in 1795 and has been adopted by most countries, but the US has never mandated a switch. Pounds are deeply embedded in US commerce, cooking, sports (boxing, weightlifting, wrestling are weighed in lbs), and body weight. Switching would require retooling scales, packaging, and decades of public re-education.

### Is body weight in the UK measured in kg or stones?

Both, in different contexts. **Stones** (1 st = 14 lb = 6.35 kg) are still widely used informally for body weight — "I weigh 12 stone 4". Medical records, gyms, and most official contexts use **kg**. The UK has officially used metric since 1965 but never banned stones. Ireland is similar.

### How do I convert "5'10" and 165 lbs" to metric?

Height and weight use different conversions:

- **Feet/inches to cm**: 5 ft 10 in = (5 × 12 + 10) × 2.54 = 70 × 2.54 = **177.8 cm**
- **Pounds to kg**: 165 × 0.45359237 = **74.84 kg**

For body mass index, you need both. BMI = weight (kg) / height (m)² = 74.84 / 1.778² = **23.7**, which is in the "normal" range.

### Can I use a kitchen scale for body weight?

Most kitchen scales top out at 5 kg (11 lbs) and are not designed for body weight. A bathroom scale is the right tool for body weight and is accurate to ±0.1 kg / 0.2 lbs at most. For medical use, clinical scales go to 0.01 kg / 0.02 lbs.

## Conclusion

Kilograms to pounds is one of the simplest conversions to memorize. **1 kg = 2.20462 lbs** is exact to 5 decimals, and a one-line mental shortcut (divide lbs by 2.2) gets you within 0.5% for everyday use. For occasional conversions, the [UtilBoxx Weight Converter](/en/tools/unit/weight) is private, free, and works offline once loaded. For batch work, Python and the \`units\` CLI handle thousands of values without leaving the terminal. And for occasional one-offs, Google or a voice assistant gives an instant answer.

Whichever method you pick, the math is identical: **kg × 2.20462 = lbs**, or equivalently **lbs × 0.45359237 = kg**.`;

const kgToLbsZh = `## 为什么要做千克到磅的换算？

千克是国际单位制（SI）的质量基本单位，所有采用公制（即绝大多数国家）都使用它。磅是美国日常使用的质量单位（英国和加拿大的体重单位也用磅，只是程度较轻）。每当你看美国食谱、在美国体重秤上称重、检查美国健身房的哑铃、或引用美国出生证明上的婴儿体重时，就会遇到磅。

同一个场景里还可能出现三个单位：

- **盎司（oz）**：1 lb = 16 oz。用于美国烹饪。
- **克（g）**：1 kg = 1,000 g。公制基本单位，全世界用于小质量。
- **英石（st）**：1 st = 14 lb。在英国和爱尔兰仍常用于表示体重。

好消息是：换算就是一个数，而且是精确的。记住 1 kg = 2.20462 lbs，你就能心算任何值。

## 精确公式

\`\`\`
1 kg = 2.2046226218 lbs（精确）
1 kg = 35.27396195 oz
1 kg = 1,000 g
1 lb = 0.45359237 kg（精确）
1 lb = 453.59237 g
1 st = 14 lb = 6.35029318 kg
\`\`\`

计算示例：

- **70 kg → lbs**：70 × 2.20462 = **154.32 lbs**
- **150 lbs → kg**：150 × 0.45359237 = **68.04 kg**
- **5 kg → oz**：5 × 35.27396 = **176.37 oz**
- **12 st → kg**：12 × 6.35029 = **76.20 kg**

一个实用的心算捷径：把磅除以 2.2 得到 kg 的粗略估计。**154 lbs / 2.2 ≈ 70 kg**。结果在 0.5% 以内 —— 日常使用足够，货运清单不够。

## 速查表

| kg   | lbs     | oz        | st (英石) |
|-----:|--------:|----------:|---------:|
| 1    | 2.20    | 35.27     | 0.16     |
| 5    | 11.02   | 176.37    | 0.79     |
| 10   | 22.05   | 352.74    | 1.57     |
| 25   | 55.12   | 881.85    | 3.94     |
| 50   | 110.23  | 1,763.70  | 7.87     |
| 70   | 154.32  | 2,469.18  | 11.02    |
| 100  | 220.46  | 3,527.40  | 15.75    |

## 方法一：使用 UtilBoxx 重量换算工具（推荐）

在浏览器中换算重量最快、最私密、最准确的方式是 [UtilBoxx 重量换算工具](/zh/tools/unit/weight)。它支持千克、克、毫克、磅、盎司、英石、美吨和公吨，双向即时换算，界面干净。所有计算在浏览器本地完成 —— 没有服务器、没有上传、没有日志。

**使用方法：**

1. 打开 [utilboxx.com/zh/tools/unit/weight](/zh/tools/unit/weight)
2. 在任意一个输入框（kg、g、mg、lbs、oz、st 等）输入数值
3. 所有其他输入框即时更新
4. 一键复制结果

**为什么推荐这个方法：**

- **100% 免费**，无注册、无邮箱、无广告
- **隐私优先**：不离开你的浏览器
- **所有常见重量单位**：kg、g、mg、lbs、oz、st、吨
- **高精度**：没有四舍五入误差
- **任何有浏览器的设备都能用**

如果你要称包裹、追踪健身数据或解读美国食谱，把这个工具加书签每周能省时间。

## 方法二：Google 搜索

一次性换算用 Google 是最快的路径。直接在搜索框输入 \`70 kg to lbs\` 或 \`150 磅等于多少公斤\`。Google 会在结果顶部返回内建的换算卡片，包括公式和小计算器。

**优点**：零摩擦、无需点击、在任何有浏览器的设备上都能用。

**缺点**：需要联网、一次只能换算一个值，而且 Google 会记录你的每次换算。对于隐私敏感的值（医疗体重、处方剂量），请优先选择离线方法。

## 方法三：Python（或任何语言）

Python 一行代码处理所有换算：

\`\`\`python
KG_TO_LBS = 2.2046226218
KG_TO_OZ  = 35.27396195
KG_TO_ST  = 0.1574730444
LB_TO_KG  = 0.45359237

def kg_to_lbs(kg): return kg * KG_TO_LBS
def lbs_to_kg(lb): return lb * LB_TO_KG

print(kg_to_lbs(70))   # 154.32358...
print(lbs_to_kg(150))  # 68.0388555
print(70 * 35.27396)   # 2469.1772 oz
\`\`\`

JavaScript 同样的思路：

\`\`\`js
const kgToLbs = kg => kg * 2.2046226218;
const lbsToKg = lb => lb * 0.45359237;
console.log(kgToLbs(70).toFixed(2));  // 154.32
\`\`\`

要批量换算一个 CSV（例如，要把一份以 kg 为单位的病人体重清单换成 lbs 以供美国报告使用），3 行 pandas 脚本搞定：

\`\`\`python
import pandas as pd
df = pd.read_csv("weights.csv")
df["lbs"] = df["kg"] * 2.20462
df.to_csv("weights_lbs.csv", index=False)
\`\`\`

## 方法四：命令行 units（Linux/macOS）

GNU 的 \`units\` 工具在命令行里处理重量换算。macOS 上用 Homebrew 安装（\`brew install units\`）。

\`\`\`bash
# 70 千克转磅
units "70 kg" "lb"
# 154.3236

# 150 磅转千克
units "150 lb" "kg"
# 68.03886

# 1 英石转千克
units "1 stone" "kg"
# 6.350293
\`\`\`

\`units\` 理解很多同义词：\`lb\`、\`lbs\`、\`pound\`、\`pounds\`、\`kg\`、\`kilogram\`、\`g\`、\`gram\`、\`oz\`、\`ounce\`、\`stone\`、\`ton\`、\`tonne\` 等。它也接受复合表达式如 \`2 lb 3 oz\`。这是 shell 会话中一次性重量计算的最快路径。

## 常见问题

### 1 kg 正好是 2.20462 lbs 吗？

在日常使用上是的。精确的国际常衡磅定义为**正好 0.45359237 kg**，因此 1 kg = **2.2046226218... lbs** 完全精确。日常使用 **2.20462**（5 位小数）已经足够。科学或货运使用，请用完整的值或显示 6 位以上小数的工具。

### 金衡盎司呢？

金衡盎司（oz t）是用于贵金属的不同单位：**1 金衡 oz = 31.1034768 g**，而**1 常衡 oz = 28.349523125 g**。上面的换算器用的是常衡。黄金、白银和铂金以金衡盎司报价。如果你在做商品交易，请确保知道你在用哪种盎司 —— 金衡盎司比常衡盎司重约 10%。

### 美国为什么还在用磅？

历史和文化的惯性。磅可以追溯到罗马时代（"pound"这个词来自拉丁文 *libra*，这就是符号"lb"的来源）。公制在 1795 年提出，已被大多数国家采用，但美国从未强制切换。磅深深嵌入美国商业、烹饪、运动（拳击、举重、摔跤都用 lbs 计重）和体重中。切换需要重新校准秤、包装和数十年的公众再教育。

### 英国的体重用 kg 还是英石？

两种都用，看场景。**英石**（1 st = 14 lb = 6.35 kg）在日常非正式谈论体重时仍广泛使用 —— "我重 12 英石 4"。医疗记录、健身房和大多数正式场合用 **kg**。英国自 1965 年起正式使用公制，但从未禁用英石。爱尔兰类似。

### 我怎么把"5'10" 和 165 lbs"换算成公制？

身高和体重的换算方法不同：

- **英尺/英寸转 cm**：5 ft 10 in = (5 × 12 + 10) × 2.54 = 70 × 2.54 = **177.8 cm**
- **磅转 kg**：165 × 0.45359237 = **74.84 kg**

算 BMI 需要两者。BMI = 体重（kg）/ 身高（m）² = 74.84 / 1.778² = **23.7**，属于"正常"范围。

### 我能用厨房秤称体重吗？

大多数厨房秤上限 5 kg（11 lbs），不是为称体重设计的。体重秤是称体重的正确工具，精度大多在 ±0.1 kg / 0.2 lbs 以内。医疗用途的话，临床秤精度可达 0.01 kg / 0.02 lbs。

## 结论

千克到磅是最容易记住的换算之一。**1 kg = 2.20462 lbs** 在 5 位小数上精确，而一个心算捷径（把 lbs 除以 2.2）在日常使用中能保证 0.5% 以内的精度。偶尔换算的话，[UtilBoxx 重量换算工具](/zh/tools/unit/weight) 私密、免费、加载后离线可用。批量工作用 Python 和 \`units\` 命令行可以在不离开终端的情况下处理上千个值。偶尔的一次性换算，Google 或语音助手能给出即时答案。

无论选哪种方法，数学都是一样的：**kg × 2.20462 = lbs**，或等价的 **lbs × 0.45359237 = kg**。`;

const kgToLbsJa = `## なぜ kg を lbs に換算するのか？

キログラムは SI の質量の基本単位であり、公制を採用しているすべての国（つまりほぼすべての国）で使われています。ポンドはアメリカ合衆国での日常的な質量単位であり（英国やカナダでも体重に関してはある程度使われています）。アメリカのレシピを読むとき、アメリカの体重計で体重を量るとき、アメリカのジムでダンベルを確認するとき、アメリカの出生証明書から赤ちゃんの体重を引用するとき、必ずポンドに出会います。

同じ文脈でさらに 3 つの単位が登場します：

- **オンス（oz）**：1 lb = 16 oz。アメリカの料理で使用。
- **グラム（g）**：1 kg = 1,000 g。メートル法の基本単位で、小さな質量に世界中で使用。
- **ストーン（st）**：1 st = 14 lb。英国とアイルランドでは体重表現に今も一般的。

朗報です：換算は 1 つの数字で、しかも正確です。1 kg = 2.20462 lbs を覚えれば、任意の値を暗算できます。

## 正確な公式

\`\`\`
1 kg = 2.2046226218 lbs（正確）
1 kg = 35.27396195 oz
1 kg = 1,000 g
1 lb = 0.45359237 kg（正確）
1 lb = 453.59237 g
1 st = 14 lb = 6.35029318 kg
\`\`\`

計算例：

- **70 kg → lbs**：70 × 2.20462 = **154.32 lbs**
- **150 lbs → kg**：150 × 0.45359237 = **68.04 kg**
- **5 kg → oz**：5 × 35.27396 = **176.37 oz**
- **12 st → kg**：12 × 6.35029 = **76.20 kg**

便利な暗算の近道：ポンドを 2.2 で割ると kg のおおよその推定値が出ます。**154 lbs / 2.2 ≈ 70 kg**。結果は 0.5% 以内の精度で、日常使用には十分、貨物のマニフェストには不十分です。

## 早見表

| kg   | lbs      | oz        | st (ストーン) |
|-----:|---------:|----------:|-------------:|
| 1    | 2.20     | 35.27     | 0.16         |
| 5    | 11.02    | 176.37    | 0.79         |
| 10   | 22.05    | 352.74    | 1.57         |
| 25   | 55.12    | 881.85    | 3.94         |
| 50   | 110.23   | 1,763.70  | 7.87         |
| 70   | 154.32   | 2,469.18  | 11.02        |
| 100  | 220.46   | 3,527.40  | 15.75        |

## 方法 1：UtilBoxx 重量換算ツール（推奨）

ブラウザで重量を換算する最も速く、最もプライベートで、最も正確な方法は [UtilBoxx 重量換算ツール](/ja/tools/unit/weight) です。キログラム、グラム、ミリグラム、ポンド、オンス、ストーン、米トン、メートルトンをサポートし、双方向の即時換算とクリーンなインターフェースを提供します。すべてブラウザ内で動作します。サーバーも、アップロードも、ログもなし。

**使い方：**

1. [utilboxx.com/ja/tools/unit/weight](/ja/tools/unit/weight) を開く
2. 任意のフィールド（kg、g、mg、lbs、oz、st など）に値を入力
3. 他のフィールドが即座に更新
4. ワンクリックで結果をコピー

**この方法を推奨する理由：**

- **100% 無料**、登録不要、メールアドレス不要、広告なし
- **プライバシー最優先**：ブラウザから出ない
- **すべての一般的な重量単位**：kg、g、mg、lbs、oz、st、ton
- **高精度**：丸め誤差なし
- **ブラウザがあるあらゆるデバイスで動作**

荷物の計量、フィットネスの記録、アメリカのレシピの解釈をするなら、このツールをブックマークすれば毎週時間を節約できます。

## 方法 2：Google 検索

一度限りの換算なら、Google が最速です。検索ボックスに \`70 kg to lbs\` や \`150 ポンドを kg に\` と直接入力します。Google は結果の上部に、式と小さな電卓を含む内蔵換算カードを返します。

**長所**：摩擦ゼロ、クリック不要、ブラウザがあるデバイスで動作。

**短所**：インターネット接続が必要、一度に一つの値しか換算できない、Google がすべての換算をログに記録する。プライバシーに敏感な値（医療体重、処方用量）の場合は、オフラインの方法を選んでください。

## 方法 3：Python（または任意の言語）

Python のワンライナーですべての換算を処理します：

\`\`\`python
KG_TO_LBS = 2.2046226218
KG_TO_OZ  = 35.27396195
KG_TO_ST  = 0.1574730444
LB_TO_KG  = 0.45359237

def kg_to_lbs(kg): return kg * KG_TO_LBS
def lbs_to_kg(lb): return lb * LB_TO_KG

print(kg_to_lbs(70))   # 154.32358...
print(lbs_to_kg(150))  # 68.0388555
print(70 * 35.27396)   # 2469.1772 oz
\`\`\`

JavaScript でも同じ考え方：

\`\`\`js
const kgToLbs = kg => kg * 2.2046226218;
const lbsToKg = lb => lb * 0.45359237;
console.log(kgToLbs(70).toFixed(2));  // 154.32
\`\`\`

CSV の一括換算（例えば、kg 単位の患者の体重リストをアメリカのレポート用に lbs に変えたい場合）は、3 行の pandas スクリプトで完了します：

\`\`\`python
import pandas as pd
df = pd.read_csv("weights.csv")
df["lbs"] = df["kg"] * 2.20462
df.to_csv("weights_lbs.csv", index=False)
\`\`\`

## 方法 4：コマンドラインで units（Linux/macOS）

GNU の \`units\` ユーティリティはコマンドラインで重量を扱えます。macOS では Homebrew でインストール（\`brew install units\`）。

\`\`\`bash
# 70 kg をポンドに換算
units "70 kg" "lb"
# 154.3236

# 150 lbs を kg に
units "150 lb" "kg"
# 68.03886

# 1 ストーンを kg に
units "1 stone" "kg"
# 6.350293
\`\`\`

\`units\` は多くの同義語を理解します：\`lb\`、\`lbs\`、\`pound\`、\`pounds\`、\`kg\`、\`kilogram\`、\`g\`、\`gram\`、\`oz\`、\`ounce\`、\`stone\`、\`ton\`、\`tonne\` など。\`2 lb 3 oz\` のような複合式も受け付けます。シェルセッションで単発の重量計算をする際の最速パスです。

## よくある質問

### 1 kg はちょうど 2.20462 lbs ですか？

実用上はそうです。正確な国際常衡ポンドは**ちょうど 0.45359237 kg**と定義されており、1 kg = **2.2046226218... lbs** が完全な精度です。日常使用では **2.20462**（小数 5 桁）で十分です。科学や貨物の用途には、完全な値または 6 桁以上を表示するツールを使ってください。

### トロイオンスは？

トロイオンス（oz t）は貴金属に使われる別の単位です：**1 トロイオンス = 31.1034768 g**、一方**1 常衡オンス = 28.349523125 g**。上記の換算ツールは常衡を使用しています。金、銀、プラチナはトロイオンスで报价されます。商品取引をする場合は、どのオンスを扱っているのかを確認してください —— トロイオンスは常衡オンスより約 10% 重いです。

### なぜ米国はポンドを使い続けるのか？

歴史的および文化的な慣性です。ポンドはローマ時代にまでさかのぼります（「pound」という単語はラテン語の *libra* に由来し、記号が「lb」になっている理由です）。メートル法は 1795 年に提案され、ほとんどの国が採用しましたが、米国は切り替えを強制したことはありません。ポンドは米国の商業、料理、スポーツ（ボクシング、ウェイトリフティング、レスリングは lbs で計量）、そして体重に深く埋め込まれています。切り替えには体重計、包装の再調整、そして数十年の公衆再教育が必要になります。

### 英国の体重は kg とストーンのどちらで測る？

両方、場面によって違います。**ストーン**（1 st = 14 lb = 6.35 kg）は日常の非公式な体重表現に今も広く使われています ——「私は 12 ストーン 4 です」。医療記録、ジム、ほとんどの公式な場面では **kg** が使われます。英国は 1965 年から公式にメートル法を使用していますが、ストーンを禁止したことはありません。アイルランドも同様です。

### 「5'10" と 165 lbs」をメートル法に換算するには？

身長と体重は異なる換算式を使います：

- **フィート/インチを cm に**：5 ft 10 in = (5 × 12 + 10) × 2.54 = 70 × 2.54 = **177.8 cm**
- **ポンドを kg に**：165 × 0.45359237 = **74.84 kg**

BMI には両方が必要です。BMI = 体重（kg）/ 身長（m）² = 74.84 / 1.778² = **23.7** で、「正常」範囲に入ります。

### キッチン用スケールで体重を量れますか？

ほとんどのキッチン用スケールは上限 5 kg（11 lbs）で、体重計用には設計されていません。体重計が正しい道具で、ほとんどの精度は ±0.1 kg / 0.2 lbs 以内です。医療用途には、臨床用スケールは 0.01 kg / 0.02 lbs までの精度があります。

## まとめ

キログラムからポンドへの換算は最も覚えやすい換算の一つです。**1 kg = 2.20462 lbs** は小数 5 桁で正確であり、心算の近道（lbs を 2.2 で割る）は日常使用で 0.5% 以内の精度を提供します。たまに換算するなら、[UtilBoxx 重量換算ツール](/ja/tools/unit/weight) はプライベートで、無料で、読み込み後はオフラインで動作します。バッチ作業には Python と \`units\` コマンドラインが、ターミナルから出ずに何千もの値を処理できます。単発なら、Google や音声アシスタントが即座に答えてくれます。

どの方法を選んでも、数学は同じです：**kg × 2.20462 = lbs**、あるいは等価に **lbs × 0.45359237 = kg**。`;

const kgToLbsEs = `## ¿Por qué convertir kg a lbs?

El kilogramo es la unidad base de masa del SI y lo usan todos los países que han adoptado el sistema métrico, que son la mayoría. La libra es la unidad de masa cotidiana en Estados Unidos (y en menor medida, en el Reino Unido y Canadá para el peso corporal). Siempre que leas una receta estadounidense, te peses en una báscula americana, revises una mancuerna en un gimnasio de EE. UU. o cites el peso de un bebé de un certificado de nacimiento estadounidense, te encontrarás con libras.

Tres unidades más aparecen en los mismos contextos:

- **Onza (oz)**: 1 lb = 16 oz. Usada en la cocina estadounidense.
- **Gramo (g)**: 1 kg = 1.000 g. La unidad base métrica, usada en todo el mundo para masas pequeñas.
- **Stone (st)**: 1 st = 14 lb. Todavía común en el Reino Unido e Irlanda para el peso corporal.

La buena noticia: la conversión es un solo número, y es exacta. Memoriza 1 kg = 2,20462 lbs y podrás hacer el cálculo mental para cualquier valor.

## Las fórmulas exactas

\`\`\`
1 kg = 2,2046226218 lbs (exacto)
1 kg = 35,27396195 oz
1 kg = 1.000 g
1 lb = 0,45359237 kg (exacto)
1 lb = 453,59237 g
1 st = 14 lb = 6,35029318 kg
\`\`\`

Ejemplos trabajados:

- **70 kg → lbs**: 70 × 2,20462 = **154,32 lbs**
- **150 lbs → kg**: 150 × 0,45359237 = **68,04 kg**
- **5 kg → oz**: 5 × 35,27396 = **176,37 oz**
- **12 st → kg**: 12 × 6,35029 = **76,20 kg**

Un atajo mental útil: divide las libras entre 2,2 para obtener una estimación rápida en kg. **154 lbs / 2,2 ≈ 70 kg**. El resultado está dentro del 0,5 %, suficiente para uso cotidiano, no para manifiestos de envío.

## Tabla de referencia rápida

| kg   | lbs      | oz         | st (stone) |
|-----:|---------:|-----------:|-----------:|
| 1    | 2,20     | 35,27      | 0,16       |
| 5    | 11,02    | 176,37     | 0,79       |
| 10   | 22,05    | 352,74     | 1,57       |
| 25   | 55,12    | 881,85     | 3,94       |
| 50   | 110,23   | 1.763,70   | 7,87       |
| 70   | 154,32   | 2.469,18   | 11,02      |
| 100  | 220,46   | 3.527,40   | 15,75      |

## Método 1: Use el conversor de peso de UtilBoxx (Recomendado)

La forma más rápida, privada y precisa de convertir peso en el navegador es el [Conversor de Peso de UtilBoxx](/es/tools/unit/weight). Soporta kilogramos, gramos, miligramos, libras, onzas, stones, toneladas estadounidenses y toneladas métricas, con conversión bidireccional instantánea y una interfaz limpia. Todo se ejecuta en su navegador: sin servidor, sin carga, sin registros.

**Cómo usarlo:**

1. Vaya a [utilboxx.com/es/tools/unit/weight](/es/tools/unit/weight)
2. Escriba un valor en cualquier campo (kg, g, mg, lbs, oz, st, etc.)
3. Todos los demás campos se actualizan al instante
4. Copie el resultado con un clic

**Por qué recomendamos este método:**

- **100 % gratis**, sin registro, sin email, sin anuncios
- **Privacidad primero**: nada sale de su navegador
- **Todas las unidades de peso comunes**: kg, g, mg, lbs, oz, st, toneladas
- **Alta precisión**: sin errores de redondeo
- **Funciona en cualquier dispositivo** con navegador

Si pesa paquetes, sigue su forma física o interpreta recetas estadounidenses, marcar esta herramienta como favorita le ahorrará tiempo cada semana.

## Método 2: Búsqueda en Google

Para una conversión puntual, Google es el camino más rápido. Escriba \`70 kg to lbs\` o \`150 libras a kg\` directamente en el cuadro de búsqueda. Google responde con una tarjeta de conversión integrada en la parte superior de los resultados, incluyendo la fórmula y una calculadora pequeña.

**Ventajas:** cero fricción, sin clics, funciona en cualquier dispositivo con navegador.

**Desventajas:** requiere conexión a internet, solo es útil para un valor a la vez, y Google registra cada conversión. Para valores sensibles a la privacidad (peso médico, dosis de prescripción), prefiera un método sin conexión.

## Método 3: Python (o cualquier lenguaje)

Un one-liner en Python maneja cada conversión:

\`\`\`python
KG_TO_LBS = 2.2046226218
KG_TO_OZ  = 35.27396195
KG_TO_ST  = 0.1574730444
LB_TO_KG  = 0.45359237

def kg_to_lbs(kg): return kg * KG_TO_LBS
def lbs_to_kg(lb): return lb * LB_TO_KG

print(kg_to_lbs(70))   # 154.32358...
print(lbs_to_kg(150))  # 68.0388555
print(70 * 35.27396)   # 2469.1772 oz
\`\`\`

En JavaScript, con la misma idea:

\`\`\`js
const kgToLbs = kg => kg * 2.2046226218;
const lbsToKg = lb => lb * 0.45359237;
console.log(kgToLbs(70).toFixed(2));  // 154.32
\`\`\`

Para conversión por lotes de un CSV (por ejemplo, una lista de pesos de pacientes en kg que quiere en lbs para un informe estadounidense), un script de pandas de 3 líneas lo hace:

\`\`\`python
import pandas as pd
df = pd.read_csv("weights.csv")
df["lbs"] = df["kg"] * 2.20462
df.to_csv("weights_lbs.csv", index=False)
\`\`\`

## Método 4: CLI con units (Linux/macOS)

La utilidad GNU \`units\` maneja la conversión de peso en la línea de comandos. Instale en macOS con Homebrew (\`brew install units\`).

\`\`\`bash
# Convertir 70 kg a libras
units "70 kg" "lb"
# 154.3236

# 150 lbs a kg
units "150 lb" "kg"
# 68.03886

# 1 stone a kg
units "1 stone" "kg"
# 6.350293
\`\`\`

\`units\` entiende muchos sinónimos: \`lb\`, \`lbs\`, \`pound\`, \`pounds\`, \`kg\`, \`kilogram\`, \`g\`, \`gram\`, \`oz\`, \`ounce\`, \`stone\`, \`ton\`, \`tonne\`, etc. También acepta expresiones compuestas como \`2 lb 3 oz\`. Es el camino más rápido para cálculos puntuales de peso en una sesión de shell.

## Preguntas frecuentes

### ¿1 kg es exactamente 2,20462 lbs?

En términos prácticos, sí. La libra avoirdupois internacional exacta se define como **exactamente 0,45359237 kg**, lo que hace que 1 kg = **2,2046226218... lbs** con precisión total. Para uso cotidiano, **2,20462** (5 decimales) es más que suficiente. Para uso científico o de envío, use el valor completo o una herramienta que muestre 6 o más decimales.

### ¿Qué pasa con las onzas troy?

Las onzas troy (oz t) son una unidad diferente usada para metales preciosos: **1 oz troy = 31,1034768 g**, mientras que **1 oz avoirdupois = 28,349523125 g**. El conversor de arriba usa avoirdupois. El oro, la plata y el platino se cotizan en onzas troy. Si comercia con commodities, asegúrese de saber qué onza está manejando: una onza troy es aproximadamente un 10 % más pesada que una onza avoirdupois.

### ¿Por qué EE. UU. sigue usando libras?

Inercia histórica y cultural. La libra se remonta a la época romana (la palabra «pound» viene del latín *libra*, de ahí el símbolo «lb»). El sistema métrico se propuso en 1795 y ha sido adoptado por la mayoría de los países, pero EE. UU. nunca ha impuesto un cambio. Las libras están profundamente arraigadas en el comercio, la cocina, los deportes (el boxeo, el levantamiento de pesas y la lucha se pesan en lbs) y el peso corporal estadounidenses. Un cambio requeriría recalibrar básculas, envases y décadas de reeducación pública.

### ¿El peso corporal en el Reino Unido se mide en kg o stones?

Ambos, en contextos diferentes. Los **stones** (1 st = 14 lb = 6,35 kg) todavía se usan mucho informalmente para el peso corporal: «peso 12 stones 4». Los registros médicos, los gimnasios y la mayoría de los contextos oficiales usan **kg**. El Reino Unido ha usado oficialmente el sistema métrico desde 1965 pero nunca prohibió los stones. Irlanda es similar.

### ¿Cómo convierto "5'10" y 165 lbs" a métrico?

La altura y el peso usan conversiones diferentes:

- **Pies/pulgadas a cm**: 5 ft 10 in = (5 × 12 + 10) × 2,54 = 70 × 2,54 = **177,8 cm**
- **Libras a kg**: 165 × 0,45359237 = **74,84 kg**

Para el índice de masa corporal, necesita ambos. IMC = peso (kg) / altura (m)² = 74,84 / 1,778² = **23,7**, que está en el rango «normal».

### ¿Puedo usar una báscula de cocina para el peso corporal?

La mayoría de las básculas de cocina tienen un tope de 5 kg (11 lbs) y no están diseñadas para peso corporal. Una báscula de baño es la herramienta correcta para el peso corporal y tiene una precisión de ±0,1 kg / 0,2 lbs en la mayoría de los casos. Para uso médico, las básculas clínicas llegan a 0,01 kg / 0,02 lbs.

## Conclusión

Kilogramos a libras es una de las conversiones más fáciles de memorizar. **1 kg = 2,20462 lbs** es exacto a 5 decimales, y un atajo mental (dividir lbs entre 2,2) le sitúa dentro del 0,5 % para uso cotidiano. Para conversiones ocasionales, el [Conversor de Peso de UtilBoxx](/es/tools/unit/weight) es privado, gratis y funciona sin conexión una vez cargado. Para trabajo por lotes, Python y la CLI \`units\` manejan miles de valores sin salir de la terminal. Y para conversiones puntuales ocasionales, Google o un asistente de voz dan una respuesta instantánea.

Sea cual sea el método que elija, las matemáticas son idénticas: **kg × 2,20462 = lbs**, o equivalentemente **lbs × 0,45359237 = kg**.`;

const kgToLbsPt = `## Por que converter kg para lbs?

O quilograma é a unidade base de massa do SI e é usado por todos os países que adotaram o sistema métrico, que são a maioria. A libra é a unidade de massa cotidiana nos Estados Unidos (e em menor grau, no Reino Unido e Canadá para peso corporal). Sempre que você lê uma receita americana, se pesa em uma balança americana, verifica uma halter em uma academia dos EUA, ou cita o peso de um bebê de uma certidão de nascimento americana, você encontra libras.

Três unidades a mais surgem nos mesmos contextos:

- **Onça (oz)**: 1 lb = 16 oz. Usada na culinária americana.
- **Grama (g)**: 1 kg = 1.000 g. A unidade base métrica, usada no mundo todo para massas pequenas.
- **Stone (st)**: 1 st = 14 lb. Ainda comum no Reino Unido e Irlanda para peso corporal.

A boa notícia: a conversão é um único número, e é exato. Memorize 1 kg = 2,20462 lbs e você pode fazer a conta de cabeça para qualquer valor.

## As fórmulas exatas

\`\`\`
1 kg = 2,2046226218 lbs (exato)
1 kg = 35,27396195 oz
1 kg = 1.000 g
1 lb = 0,45359237 kg (exato)
1 lb = 453,59237 g
1 st = 14 lb = 6,35029318 kg
\`\`\`

Exemplos resolvidos:

- **70 kg → lbs**: 70 × 2,20462 = **154,32 lbs**
- **150 lbs → kg**: 150 × 0,45359237 = **68,04 kg**
- **5 kg → oz**: 5 × 35,27396 = **176,37 oz**
- **12 st → kg**: 12 × 6,35029 = **76,20 kg**

Um atalho mental útil: divida as libras por 2,2 para obter uma estimativa rápida em kg. **154 lbs / 2,2 ≈ 70 kg**. O resultado está dentro de 0,5 %, próximo o suficiente para uso cotidiano, não para manifestos de embarque.

## Tabela de referência rápida

| kg   | lbs      | oz         | st (stone) |
|-----:|---------:|-----------:|-----------:|
| 1    | 2,20     | 35,27      | 0,16       |
| 5    | 11,02    | 176,37     | 0,79       |
| 10   | 22,05    | 352,74     | 1,57       |
| 25   | 55,12    | 881,85     | 3,94       |
| 50   | 110,23   | 1.763,70   | 7,87       |
| 70   | 154,32   | 2.469,18   | 11,02      |
| 100  | 220,46   | 3.527,40   | 15,75      |

## Método 1: Use o conversor de peso do UtilBoxx (Recomendado)

A maneira mais rápida, privada e precisa de converter peso no navegador é o [Conversor de Peso do UtilBoxx](/pt/tools/unit/weight). Suporta quilogramas, gramas, miligramas, libras, onças, stones, toneladas americanas e toneladas métricas, com conversão bidirecional instantânea e interface limpa. Tudo roda no seu navegador: sem servidor, sem upload, sem registros.

**Como usar:**

1. Acesse [utilboxx.com/pt/tools/unit/weight](/pt/tools/unit/weight)
2. Digite um valor em qualquer campo (kg, g, mg, lbs, oz, st, etc.)
3. Todos os outros campos se atualizam instantaneamente
4. Copie o resultado com um clique

**Por que recomendamos este método:**

- **100 % grátis**, sem cadastro, sem e-mail, sem anúncios
- **Privacidade em primeiro lugar**: nada sai do seu navegador
- **Todas as unidades de peso comuns**: kg, g, mg, lbs, oz, st, toneladas
- **Alta precisão**: sem erros de arredondamento
- **Funciona em qualquer dispositivo** com navegador

Se você pesa pacotes, acompanha a forma física ou interpreta receitas americanas, favoritar esta ferramenta economiza tempo toda semana.

## Método 2: Busca no Google

Para uma conversão pontual, o Google é o caminho mais rápido. Digite \`70 kg to lbs\` ou \`150 libras em kg\` diretamente na caixa de busca. O Google responde com um cartão conversor embutido no topo dos resultados, incluindo a fórmula e uma pequena calculadora.

**Prós:** zero atrito, sem cliques, funciona em qualquer dispositivo com navegador.

**Contras:** requer conexão à internet, só serve para um valor por vez, e o Google registra cada conversão. Para valores sensíveis à privacidade (peso médico, dosagem de prescrição), prefira um método offline.

## Método 3: Python (ou qualquer linguagem)

Um one-liner em Python lida com cada conversão:

\`\`\`python
KG_TO_LBS = 2.2046226218
KG_TO_OZ  = 35.27396195
KG_TO_ST  = 0.1574730444
LB_TO_KG  = 0.45359237

def kg_to_lbs(kg): return kg * KG_TO_LBS
def lbs_to_kg(lb): return lb * LB_TO_KG

print(kg_to_lbs(70))   # 154.32358...
print(lbs_to_kg(150))  # 68.0388555
print(70 * 35.27396)   # 2469.1772 oz
\`\`\`

Em JavaScript, com a mesma ideia:

\`\`\`js
const kgToLbs = kg => kg * 2.2046226218;
const lbsToKg = lb => lb * 0.45359237;
console.log(kgToLbs(70).toFixed(2));  // 154.32
\`\`\`

Para conversão em lote de um CSV (digamos, uma lista de pesos de pacientes em kg que você quer em lbs para um relatório americano), um script de pandas de 3 linhas resolve:

\`\`\`python
import pandas as pd
df = pd.read_csv("weights.csv")
df["lbs"] = df["kg"] * 2.20462
df.to_csv("weights_lbs.csv", index=False)
\`\`\`

## Método 4: CLI com units (Linux/macOS)

O utilitário GNU \`units\` lida com conversão de peso na linha de comando. Instale no macOS com Homebrew (\`brew install units\`).

\`\`\`bash
# Converter 70 kg para libras
units "70 kg" "lb"
# 154.3236

# 150 lbs para kg
units "150 lb" "kg"
# 68.03886

# 1 stone para kg
units "1 stone" "kg"
# 6.350293
\`\`\`

O \`units\` entende muitos sinônimos: \`lb\`, \`lbs\`, \`pound\`, \`pounds\`, \`kg\`, \`kilogram\`, \`g\`, \`gram\`, \`oz\`, \`ounce\`, \`stone\`, \`ton\`, \`tonne\`, etc. Também aceita expressões compostas como \`2 lb 3 oz\`. É o caminho mais rápido para cálculos pontuais de peso em uma sessão de shell.

## Perguntas frequentes

### 1 kg é exatamente 2,20462 lbs?

Em termos práticos, sim. A libra avoirdupois internacional exata é definida como **exatamente 0,45359237 kg**, o que torna 1 kg = **2,2046226218... lbs** com precisão total. Para uso cotidiano, **2,20462** (5 casas decimais) é mais que suficiente. Para uso científico ou de embarque, use o valor completo ou uma ferramenta que exiba 6 ou mais casas decimais.

### E as onças troy?

As onças troy (oz t) são uma unidade diferente usada para metais preciosos: **1 oz troy = 31,1034768 g**, enquanto **1 oz avoirdupois = 28,349523125 g**. O conversor acima usa avoirdupois. Ouro, prata e platina são cotados em onças troy. Se você negocia commodities, certifique-se de saber qual onça está usando: uma onça troy é aproximadamente 10 % mais pesada que uma onça avoirdupois.

### Por que os EUA ainda usam libras?

Inércia histórica e cultural. A libra remonta à época romana (a palavra "pound" vem do latim *libra*, daí o símbolo "lb"). O sistema métrico foi proposto em 1795 e foi adotado pela maioria dos países, mas os EUA nunca impuseram uma troca. As libras estão profundamente enraizadas no comércio, culinária, esportes (boxe, levantamento de peso, luta são pesados em lbs) e peso corporal americanos. A troca exigiria recalibrar balanças, embalagens e décadas de reeducação pública.

### O peso corporal no Reino Unido é medido em kg ou stones?

Ambos, em contextos diferentes. Os **stones** (1 st = 14 lb = 6,35 kg) ainda são amplamente usados informalmente para peso corporal: "peso 12 stones 4". Registros médicos, academias e a maioria dos contextos oficiais usam **kg**. O Reino Unido usa oficialmente o sistema métrico desde 1965, mas nunca proibiu os stones. A Irlanda é semelhante.

### Como converto "5'10" e 165 lbs" para métrico?

Altura e peso usam conversões diferentes:

- **Pés/polegadas para cm**: 5 ft 10 in = (5 × 12 + 10) × 2,54 = 70 × 2,54 = **177,8 cm**
- **Libras para kg**: 165 × 0,45359237 = **74,84 kg**

Para o índice de massa corporal, você precisa de ambos. IMC = peso (kg) / altura (m)² = 74,84 / 1,778² = **23,7**, que está na faixa "normal".

### Posso usar uma balança de cozinha para peso corporal?

A maioria das balanças de cozinha tem limite de 5 kg (11 lbs) e não são projetadas para peso corporal. Uma balança de banheiro é a ferramenta certa para peso corporal e tem precisão de ±0,1 kg / 0,2 lbs na maioria dos casos. Para uso médico, balanças clínicas vão a 0,01 kg / 0,02 lbs.

## Conclusão

Quilogramas para libras é uma das conversões mais fáceis de memorizar. **1 kg = 2,20462 lbs** é exato em 5 casas decimais, e um atalho mental (dividir lbs por 2,2) coloca você dentro de 0,5 % para uso cotidiano. Para conversões ocasionais, o [Conversor de Peso do UtilBoxx](/pt/tools/unit/weight) é privado, grátis e funciona offline uma vez carregado. Para trabalho em lote, Python e a CLI \`units\` lidam com milhares de valores sem sair do terminal. E para conversões pontuais ocasionais, Google ou um assistente de voz dão uma resposta instantânea.

Seja qual for o método que você escolher, a matemática é idêntica: **kg × 2,20462 = lbs**, ou equivalentemente **lbs × 0,45359237 = kg**.`;

const kgToLbsFr = `## Pourquoi convertir des kg en lbs ?

Le kilogramme est l'unité de masse de base du SI et est utilisé par tous les pays qui ont adopté le système métrique, c'est-à-dire la plupart d'entre eux. La livre est l'unité de masse quotidienne aux États-Unis (et dans une moindre mesure, au Royaume-Uni et au Canada pour le poids corporel). Dès que vous lisez une recette américaine, vous pesez sur une balance américaine, vérifiez un haltère dans une salle de sport américaine, ou citez le poids d'un bébé d'un certificat de naissance américain, vous rencontrez des livres.

Trois autres unités apparaissent dans les mêmes contextes :

- **Once (oz)** : 1 lb = 16 oz. Utilisée en cuisine américaine.
- **Gramme (g)** : 1 kg = 1 000 g. L'unité de base du système métrique, utilisée dans le monde entier pour les petites masses.
- **Stone (st)** : 1 st = 14 lb. Encore courant au Royaume-Uni et en Irlande pour le poids corporel.

Bonne nouvelle : la conversion tient en un seul nombre, et il est exact. Mémorisez 1 kg = 2,20462 lbs et vous pouvez faire le calcul de tête pour n'importe quelle valeur.

## Les formules exactes

\`\`\`
1 kg = 2,2046226218 lbs (exact)
1 kg = 35,27396195 oz
1 kg = 1 000 g
1 lb = 0,45359237 kg (exact)
1 lb = 453,59237 g
1 st = 14 lb = 6,35029318 kg
\`\`\`

Exemples détaillés :

- **70 kg → lbs** : 70 × 2,20462 = **154,32 lbs**
- **150 lbs → kg** : 150 × 0,45359237 = **68,04 kg**
- **5 kg → oz** : 5 × 35,27396 = **176,37 oz**
- **12 st → kg** : 12 × 6,35029 = **76,20 kg**

Un raccourci mental utile : divisez les livres par 2,2 pour obtenir une estimation rapide en kg. **154 lbs / 2,2 ≈ 70 kg**. Le résultat est à 0,5 % près — assez proche pour un usage quotidien, pas pour un manifeste d'expédition.

## Table de référence rapide

| kg   | lbs      | oz          | st (stone) |
|-----:|---------:|------------:|-----------:|
| 1    | 2,20     | 35,27       | 0,16       |
| 5    | 11,02    | 176,37      | 0,79       |
| 10   | 22,05    | 352,74      | 1,57       |
| 25   | 55,12    | 881,85      | 3,94       |
| 50   | 110,23   | 1 763,70    | 7,87       |
| 70   | 154,32   | 2 469,18    | 11,02      |
| 100  | 220,46   | 3 527,40    | 15,75      |

## Méthode 1 : Utilisez le convertisseur de poids de UtilBoxx (Recommandé)

La façon la plus rapide, privée et précise de convertir le poids dans le navigateur est le [Convertisseur de Poids de UtilBoxx](/fr/tools/unit/weight). Il prend en charge les kilogrammes, grammes, milligrammes, livres, onces, stones, tonnes américaines et tonnes métriques, avec conversion bidirectionnelle instantanée et une interface épurée. Tout s'exécute dans votre navigateur : pas de serveur, pas de téléversement, pas de logs.

**Comment l'utiliser :**

1. Allez sur [utilboxx.com/fr/tools/unit/weight](/fr/tools/unit/weight)
2. Saisissez une valeur dans n'importe quel champ (kg, g, mg, lbs, oz, st, etc.)
3. Tous les autres champs se mettent à jour instantanément
4. Copiez le résultat en un clic

**Pourquoi nous recommandons cette méthode :**

- **100 % gratuit**, sans inscription, sans e-mail, sans publicité
- **Confidentialité d'abord** : rien ne quitte votre navigateur
- **Toutes les unités de poids courantes** : kg, g, mg, lbs, oz, st, tonnes
- **Haute précision** : pas d'erreurs d'arrondi
- **Fonctionne sur tout appareil** avec navigateur

Si vous pesez des colis, suivez votre forme ou interprétez des recettes américaines, mettre cet outil en favori vous fera gagner du temps chaque semaine.

## Méthode 2 : Recherche Google

Pour une conversion ponctuelle, Google est le chemin le plus rapide. Saisissez \`70 kg to lbs\` ou \`150 livres en kg\` directement dans la zone de recherche. Google répond avec une carte de conversion intégrée en haut des résultats, incluant la formule et une petite calculatrice.

**Avantages :** zéro friction, aucun clic requis, fonctionne sur tout appareil avec navigateur.

**Inconvénients :** nécessite une connexion internet, bon pour une seule valeur à la fois, et Google enregistre chaque conversion. Pour les valeurs sensibles à la confidentialité (poids médical, dosage de prescription), préférez une méthode hors ligne.

## Méthode 3 : Python (ou tout langage)

Un one-liner en Python gère chaque conversion :

\`\`\`python
KG_TO_LBS = 2.2046226218
KG_TO_OZ  = 35.27396195
KG_TO_ST  = 0.1574730444
LB_TO_KG  = 0.45359237

def kg_to_lbs(kg): return kg * KG_TO_LBS
def lbs_to_kg(lb): return lb * LB_TO_KG

print(kg_to_lbs(70))   # 154.32358...
print(lbs_to_kg(150))  # 68.0388555
print(70 * 35.27396)   # 2469.1772 oz
\`\`\`

En JavaScript, avec la même idée :

\`\`\`js
const kgToLbs = kg => kg * 2.2046226218;
const lbsToKg = lb => lb * 0.45359237;
console.log(kgToLbs(70).toFixed(2));  // 154.32
\`\`\`

Pour la conversion par lots d'un CSV (disons, une liste de poids de patients en kg que vous voulez en lbs pour un rapport américain), un script pandas de 3 lignes suffit :

\`\`\`python
import pandas as pd
df = pd.read_csv("weights.csv")
df["lbs"] = df["kg"] * 2.20462
df.to_csv("weights_lbs.csv", index=False)
\`\`\`

## Méthode 4 : CLI avec units (Linux/macOS)

L'utilitaire GNU \`units\` gère la conversion de poids en ligne de commande. Installez sur macOS avec Homebrew (\`brew install units\`).

\`\`\`bash
# Convertir 70 kg en livres
units "70 kg" "lb"
# 154.3236

# 150 lbs en kg
units "150 lb" "kg"
# 68.03886

# 1 stone en kg
units "1 stone" "kg"
# 6.350293
\`\`\`

\`units\` comprend de nombreux synonymes : \`lb\`, \`lbs\`, \`pound\`, \`pounds\`, \`kg\`, \`kilogram\`, \`g\`, \`gram\`, \`oz\`, \`ounce\`, \`stone\`, \`ton\`, \`tonne\`, etc. Il accepte aussi les expressions composées comme \`2 lb 3 oz\`. C'est le chemin le plus rapide pour des calculs ponctuels de poids dans une session shell.

## Questions fréquentes

### 1 kg fait-il exactement 2,20462 lbs ?

En termes pratiques, oui. La livre avoirdupois internationale exacte est définie comme **exactement 0,45359237 kg**, ce qui fait que 1 kg = **2,2046226218... lbs** à pleine précision. Pour l'usage quotidien, **2,20462** (5 décimales) est plus que suffisant. Pour un usage scientifique ou d'expédition, utilisez la valeur complète ou un outil qui affiche 6 décimales ou plus.

### Et les onces troy ?

Les onces troy (oz t) sont une unité différente utilisée pour les métaux précieux : **1 oz troy = 31,1034768 g**, tandis que **1 oz avoirdupois = 28,349523125 g**. Le convertisseur ci-dessus utilise l'avoirdupois. L'or, l'argent et le platine sont cotés en onces troy. Si vous faites du commerce de matières premières, assurez-vous de savoir quelle once vous manipulez : une once troy est environ 10 % plus lourde qu'une once avoirdupois.

### Pourquoi les États-Unis utilisent-ils encore les livres ?

Inertie historique et culturelle. La livre remonte à l'époque romaine (le mot « pound » vient du latin *libra*, d'où le symbole « lb »). Le système métrique a été proposé en 1795 et a été adopté par la plupart des pays, mais les États-Unis n'ont jamais imposé de basculement. Les livres sont profondément ancrées dans le commerce, la cuisine, les sports (la boxe, l'haltérophilie, la lutte se pèsent en lbs) et le poids corporel américains. Une transition nécessiterait de recalibrer les balances, les emballages, et des décennies de rééducation publique.

### Le poids corporel au Royaume-Uni se mesure-t-il en kg ou en stones ?

Les deux, selon le contexte. Les **stones** (1 st = 14 lb = 6,35 kg) sont encore largement utilisés de manière informelle pour le poids corporel : « je pèse 12 stones 4 ». Les dossiers médicaux, les salles de sport et la plupart des contextes officiels utilisent les **kg**. Le Royaume-Uni utilise officiellement le système métrique depuis 1965 mais n'a jamais interdit les stones. L'Irlande est similaire.

### Comment convertir « 5'10" et 165 lbs » en métrique ?

La taille et le poids utilisent des conversions différentes :

- **Pieds/pouces en cm** : 5 ft 10 in = (5 × 12 + 10) × 2,54 = 70 × 2,54 = **177,8 cm**
- **Livres en kg** : 165 × 0,45359237 = **74,84 kg**

Pour l'indice de masse corporelle, il faut les deux. IMC = poids (kg) / taille (m)² = 74,84 / 1,778² = **23,7**, ce qui se trouve dans la plage « normale ».

### Puis-je utiliser une balance de cuisine pour le poids corporel ?

La plupart des balances de cuisine plafonnent à 5 kg (11 lbs) et ne sont pas conçues pour le poids corporel. Un pèse-personne est l'outil adapté pour le poids corporel, avec une précision de ±0,1 kg / 0,2 lbs dans la plupart des cas. Pour un usage médical, les balances cliniques descendent à 0,01 kg / 0,02 lbs.

## Conclusion

Kilogrammes en livres est l'une des conversions les plus faciles à mémoriser. **1 kg = 2,20462 lbs** est exact à 5 décimales, et un raccourci mental (diviser les lbs par 2,2) vous place à 0,5 % près pour l'usage quotidien. Pour les conversions ponctuelles, le [Convertisseur de Poids de UtilBoxx](/fr/tools/unit/weight) est privé, gratuit et fonctionne hors ligne une fois chargé. Pour le travail par lots, Python et la CLI \`units\` gèrent des milliers de valeurs sans quitter le terminal. Et pour les conversions ponctuelles occasionnelles, Google ou un assistant vocal donnent une réponse instantanée.

Quelle que soit la méthode choisie, les mathématiques sont identiques : **kg × 2,20462 = lbs**, ou de manière équivalente **lbs × 0,45359237 = kg**.`;

const kgToLbsDe = `## Warum kg in lbs umrechnen?

Das Kilogramm ist die SI-Basis­einheit der Masse und wird von allen Ländern verwendet, die das metrische System übernommen haben — das sind die meisten. Das Pfund ist die alltägliche Masseneinheit in den Vereinigten Staaten (und in geringerem Maße in Großbritannien und Kanada für das Körpergewicht). Wann immer Sie ein US-Rezept lesen, sich auf einer amerikanischen Waage wiegen, eine Hantel in einem US-Fitnessstudio prüfen oder das Gewicht eines Babys aus einer US-Geburtsurkunde zitieren, stoßen Sie auf Pfund.

Drei weitere Einheiten tauchen in denselben Kontexten auf:

- **Unze (oz)**: 1 lb = 16 oz. In der US-Küche verwendet.
- **Gramm (g)**: 1 kg = 1.000 g. Die metrische Basiseinheit, weltweit für kleine Massen verwendet.
- **Stone (st)**: 1 st = 14 lb. Im Vereinigten Königreich und in Irland immer noch üblich für das Körpergewicht.

Die gute Nachricht: Die Umrechnung ist eine einzige Zahl, und sie ist exakt. Merken Sie sich 1 kg = 2,20462 lbs, und Sie können jeden Wert im Kopf umrechnen.

## Die exakten Formeln

\`\`\`
1 kg = 2,2046226218 lbs (exakt)
1 kg = 35,27396195 oz
1 kg = 1.000 g
1 lb = 0,45359237 kg (exakt)
1 lb = 453,59237 g
1 st = 14 lb = 6,35029318 kg
\`\`\`

Durchgerechnete Beispiele:

- **70 kg → lbs**: 70 × 2,20462 = **154,32 lbs**
- **150 lbs → kg**: 150 × 0,45359237 = **68,04 kg**
- **5 kg → oz**: 5 × 35,27396 = **176,37 oz**
- **12 st → kg**: 12 × 6,35029 = **76,20 kg**

Eine nützliche mentale Abkürzung: Teilen Sie Pfund durch 2,2, um eine schnelle kg-Schätzung zu erhalten. **154 lbs / 2,2 ≈ 70 kg**. Das Ergebnis liegt innerhalb von 0,5 % — genau genug für den Alltag, nicht für Frachtmanifeste.

## Schnellreferenztabelle

| kg   | lbs      | oz          | st (Stone) |
|-----:|---------:|------------:|-----------:|
| 1    | 2,20     | 35,27       | 0,16       |
| 5    | 11,02    | 176,37      | 0,79       |
| 10   | 22,05    | 352,74      | 1,57       |
| 25   | 55,12    | 881,85      | 3,94       |
| 50   | 110,23   | 1.763,70    | 7,87       |
| 70   | 154,32   | 2.469,18    | 11,02      |
| 100  | 220,46   | 3.527,40    | 15,75      |

## Methode 1: Den Gewichtsumrechner von UtilBoxx verwenden (Empfohlen)

Der schnellste, privateste und genaueste Weg, Gewicht im Browser umzurechnen, ist der [Gewichtsumrechner von UtilBoxx](/de/tools/unit/weight). Er unterstützt Kilogramm, Gramm, Milligramm, Pfund, Unzen, Stones, US-Tonnen und metrische Tonnen, mit bidirektionaler sofortiger Umrechnung und einer sauberen Oberfläche. Alles läuft in Ihrem Browser — kein Server, kein Upload, keine Logs.

**So verwenden Sie ihn:**

1. Gehen Sie zu [utilboxx.com/de/tools/unit/weight](/de/tools/unit/weight)
2. Geben Sie einen Wert in ein beliebiges Feld ein (kg, g, mg, lbs, oz, st usw.)
3. Alle anderen Felder aktualisieren sich sofort
4. Kopieren Sie das Ergebnis mit einem Klick

**Warum wir diese Methode empfehlen:**

- **100 % kostenlos**, keine Registrierung, keine E-Mail, keine Werbung
- **Privatsphäre zuerst**: Nichts verlässt Ihren Browser
- **Alle gängigen Gewichtseinheiten**: kg, g, mg, lbs, oz, st, Tonnen
- **Hohe Genauigkeit**: keine Rundungsfehler
- **Funktioniert auf jedem Gerät** mit Browser

Wenn Sie Pakete wiegen, Ihre Fitness verfolgen oder US-Rezepte interpretieren, spart das Favorisieren dieses Werkzeugs jede Woche Zeit.

## Methode 2: Google-Suche

Für eine einmalige Umrechnung ist Google der schnellste Weg. Geben Sie \`70 kg to lbs\` oder \`150 Pfund in kg\` direkt in das Suchfeld ein. Google antwortet mit einer eingebauten Umrechnungskarte oben in den Ergebnissen, einschließlich Formel und kleinem Taschenrechner.

**Vorteile:** Null Reibung, kein Klick nötig, funktioniert auf jedem Gerät mit Browser.

**Nachteile:** Erfordert eine Internetverbindung, nur für einen Wert gleichzeitig gut, und Google protokolliert jede Umrechnung. Für datenschutzsensible Werte (medizinisches Gewicht, Verschreibungsdosierung) bevorzugen Sie eine Offline-Methode.

## Methode 3: Python (oder jede Sprache)

Ein Einzeiler in Python erledigt jede Umrechnung:

\`\`\`python
KG_TO_LBS = 2.2046226218
KG_TO_OZ  = 35.27396195
KG_TO_ST  = 0.1574730444
LB_TO_KG  = 0.45359237

def kg_to_lbs(kg): return kg * KG_TO_LBS
def lbs_to_kg(lb): return lb * LB_TO_KG

print(kg_to_lbs(70))   # 154.32358...
print(lbs_to_kg(150))  # 68.0388555
print(70 * 35.27396)   # 2469.1772 oz
\`\`\`

In JavaScript mit derselben Idee:

\`\`\`js
const kgToLbs = kg => kg * 2.2046226218;
const lbsToKg = lb => lb * 0.45359237;
console.log(kgToLbs(70).toFixed(2));  // 154.32
\`\`\`

Für die Batch-Umrechnung einer CSV (z. B. eine Liste von Patientengewichten in kg, die Sie für einen US-Bericht in lbs umwandeln möchten), erledigt ein 3-zeiliges pandas-Skript dies:

\`\`\`python
import pandas as pd
df = pd.read_csv("weights.csv")
df["lbs"] = df["kg"] * 2.20462
df.to_csv("weights_lbs.csv", index=False)
\`\`\`

## Methode 4: CLI mit units (Linux/macOS)

Das GNU-Dienstprogramm \`units\` erledigt die Gewichtsumrechnung in der Kommandozeile. Installieren Sie auf macOS mit Homebrew (\`brew install units\`).

\`\`\`bash
# 70 kg in Pfund umrechnen
units "70 kg" "lb"
# 154.3236

# 150 lbs in kg
units "150 lb" "kg"
# 68.03886

# 1 Stone in kg
units "1 stone" "kg"
# 6.350293
\`\`\`

\`units\` versteht viele Synonyme: \`lb\`, \`lbs\`, \`pound\`, \`pounds\`, \`kg\`, \`kilogram\`, \`g\`, \`gram\`, \`oz\`, \`ounce\`, \`stone\`, \`ton\`, \`tonne\` usw. Es akzeptiert auch zusammengesetzte Ausdrücke wie \`2 lb 3 oz\`. Dies ist der schnellste Weg für einmalige Gewichtsberechnungen in einer Shell-Sitzung.

## Häufige Fragen

### Sind 1 kg genau 2,20462 lbs?

In praktischer Hinsicht ja. Das exakte internationale Avoirdupois-Pfund ist definiert als **genau 0,45359237 kg**, sodass 1 kg = **2,2046226218... lbs** mit voller Genauigkeit. Für den Alltag reichen **2,20462** (5 Dezimalstellen) mehr als aus. Für wissenschaftliche oder Versandzwecke verwenden Sie den vollen Wert oder ein Werkzeug, das 6 oder mehr Dezimalstellen anzeigt.

### Was ist mit Feinunzen?

Feinunzen (oz t) sind eine andere Einheit für Edelmetalle: **1 Feinunze = 31,1034768 g**, während **1 Avoirdupois-Unze = 28,349523125 g**. Der obige Umrechner verwendet Avoirdupois. Gold, Silber und Platin werden in Feinunzen quotiert. Wenn Sie mit Rohstoffen handeln, stellen Sie sicher, dass Sie wissen, mit welcher Unze Sie es zu tun haben — eine Feinunze ist etwa 10 % schwerer als eine Avoirdupois-Unze.

### Warum verwenden die USA immer noch Pfund?

Historische und kulturelle Trägheit. Das Pfund reicht bis in die Römerzeit zurück (das Wort „pound" kommt vom lateinischen *libra*, daher das Symbol „lb"). Das metrische System wurde 1795 vorgeschlagen und von den meisten Ländern übernommen, aber die USA haben nie einen Wechsel vorgeschrieben. Pfund sind tief im US-Handel, in der Küche, im Sport (Boxen, Gewichtheben, Ringen werden in lbs gewogen) und im Körpergewicht verankert. Ein Wechsel würde die Neukalibrierung von Waagen, Verpackungen und jahrzehntelange öffentliche Aufklärung erfordern.

### Wird das Körpergewicht in Großbritannien in kg oder Stones gemessen?

Beides, je nach Kontext. **Stones** (1 st = 14 lb = 6,35 kg) werden informell immer noch häufig für das Körpergewicht verwendet — „Ich wiege 12 Stones 4". Medizinische Aufzeichnungen, Fitnessstudios und die meisten offiziellen Kontexte verwenden **kg**. Großbritannien verwendet seit 1965 offiziell das metrische System, hat Stones aber nie verboten. Irland ist ähnlich.

### Wie rechne ich „5'10" und 165 lbs" in metrisch um?

Größe und Gewicht verwenden unterschiedliche Umrechnungen:

- **Fuß/Zoll in cm**: 5 ft 10 in = (5 × 12 + 10) × 2,54 = 70 × 2,54 = **177,8 cm**
- **Pfund in kg**: 165 × 0,45359237 = **74,84 kg**

Für den Body-Mass-Index benötigen Sie beides. BMI = Gewicht (kg) / Größe (m)² = 74,84 / 1,778² = **23,7**, was im „normalen" Bereich liegt.

### Kann ich eine Küchenwaage für das Körpergewicht verwenden?

Die meisten Küchenwaagen sind auf 5 kg (11 lbs) begrenzt und nicht für Körpergewicht ausgelegt. Eine Personenwaage ist das richtige Werkzeug für das Körpergewicht und hat in den meisten Fällen eine Genauigkeit von ±0,1 kg / 0,2 lbs. Für medizinische Zwecke gehen klinische Waagen bis 0,01 kg / 0,02 lbs.

## Fazit

Kilogramm in Pfund ist eine der am einfachsten zu merkenden Umrechnungen. **1 kg = 2,20462 lbs** ist auf 5 Dezimalstellen genau, und eine mentale Abkürzung (Pfund durch 2,2 teilen) bringt Sie für den Alltag auf 0,5 % genau. Für gelegentliche Umrechnungen ist der [Gewichtsumrechner von UtilBoxx](/de/tools/unit/weight) privat, kostenlos und funktioniert offline, sobald er geladen ist. Für Stapelverarbeitung bewältigen Python und die \`units\`-CLI Tausende von Werten, ohne das Terminal zu verlassen. Und für gelegentliche Einmalumrechnungen geben Google oder ein Sprachassistent sofortige Antworten.

Welche Methode Sie auch wählen, die Mathematik ist identisch: **kg × 2,20462 = lbs**, oder äquivalent **lbs × 0,45359237 = kg**.`;

export const kgToLbsPost: Record<string, BlogPost> = {
  en: {
    slug: "kg-to-lbs-conversion",
    category: "Unit Tools",
    date: "2026-03-22",
    readTime: "4 min",
    title: "KG to LBS Conversion: A Practical Guide",
    description: "Convert kilograms to pounds, ounces, grams, and stones. With exact formulas.",
    content: kgToLbsEn,
  },
  zh: {
    slug: "kg-to-lbs-conversion",
    category: "单位工具",
    date: "2026-03-22",
    readTime: "4 分钟",
    title: "千克转磅换算：实用指南",
    description: "在千克、磅、盎司、克和英石之间换算。附精确公式。",
    content: kgToLbsZh,
  },
  ja: {
    slug: "kg-to-lbs-conversion",
    category: "単位ツール",
    date: "2026-03-22",
    readTime: "4 分",
    title: "キログラムからポンドへの換算：実践ガイド",
    description: "キログラム、ポンド、オンス、グラム、ストーンの間で換算。正確な式付き。",
    content: kgToLbsJa,
  },
  es: {
    slug: "kg-to-lbs-conversion",
    category: "Herramientas de unidades",
    date: "2026-03-22",
    readTime: "4 min",
    title: "Conversión de KG a LBS: Una guía práctica",
    description: "Convierta entre kilogramos, libras, onzas, gramos y stones. Con fórmulas exactas.",
    content: kgToLbsEs,
  },
  pt: {
    slug: "kg-to-lbs-conversion",
    category: "Ferramentas de unidades",
    date: "2026-03-22",
    readTime: "4 min",
    title: "Conversão de KG para LBS: Um guia prático",
    description: "Converta entre quilogramas, libras, onças, gramas e stones. Com fórmulas exatas.",
    content: kgToLbsPt,
  },
  fr: {
    slug: "kg-to-lbs-conversion",
    category: "Outils d'unités",
    date: "2026-03-22",
    readTime: "4 min",
    title: "Conversion KG en LBS : un guide pratique",
    description: "Convertissez entre kilogrammes, livres, onces, grammes et stones. Avec des formules exactes.",
    content: kgToLbsFr,
  },
  de: {
    slug: "kg-to-lbs-conversion",
    category: "Einheiten-Tools",
    date: "2026-03-22",
    readTime: "4 Min",
    title: "KG in LBS umrechnen: Ein praktischer Leitfaden",
    description: "Rechnen Sie zwischen Kilogramm, Pfund, Unzen, Gramm und Stones um. Mit exakten Formeln.",
    content: kgToLbsDe,
  },
};
