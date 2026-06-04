// Blog post: MPH to KPH Conversion: A Complete Guide
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const mphKphEn = `## Why convert mph to kph?

Speed conversion comes up whenever you cross a road-sign border. The **mile per hour** (mph) is the everyday speed unit in the US, UK, and a handful of other countries. The **kilometer per hour** (kph or km/h) is used by every other country in the world for road signs, speedometers, and weather reports.

You will hit this conversion when:

- **Driving abroad**: Renting a car in Europe, Australia, or Japan, and trying to read a 120 km/h sign at a glance.
- **Following motorsport**: F1 reports speeds in kph; NASCAR uses mph.
- **Reading weather data**: Wind speed, storm categories, and tornado reports mix mph and kph.
- **Cycling and running**: Some apps default to one unit and your body thinks in the other.
- **Aviation and sailing**: Knots (nautical miles per hour) are the standard, but ground speed is often reported in mph or kph.

The good news: the conversion is one number, exact, and easy to remember.

## The exact conversion formulas

\`\`\`
1 mph = 1.609344 kph      (exact, by definition)
1 kph = 0.6213711922 mph
1 knot = 1.852 kph        (exact, by definition)
1 mph = 0.8689762419 knots
1 m/s = 3.6 kph           (exact)
1 mph = 0.44704 m/s       (exact, by definition)
1 Mach (at sea level) ≈ 1,235 kph ≈ 767 mph
\`\`\`

**Why these are exact**: The international mile is defined as **exactly 1,609.344 meters** (since 1959). A nautical mile is defined as exactly 1,852 m. Therefore 1 mph = 1,609.344 m/h = 1.609344 km/h, exact.

**Worked examples:**

- **65 mph → kph**: 65 × 1.609344 = **104.61 kph** (a US highway speed limit)
- **100 kph → mph**: 100 / 1.609344 = **62.14 mph**
- **120 kph → mph**: 120 / 1.609344 = **74.56 mph** (a typical European highway speed)
- **200 mph → kph**: 200 × 1.609344 = **321.87 kph** (top speed of many sports cars)
- **1 knot → kph**: 1 × 1.852 = **1.852 kph**

A useful mental shortcut: multiply mph by 1.6 to get a quick kph estimate. **60 mph × 1.6 = 96 kph** (the actual value is 96.56, so the shortcut is within 0.6%). For a back-of-envelope calculation, this is close enough.

## Quick reference table

| mph     | kph       | knots    | m/s      | Context                       |
|--------:|----------:|---------:|---------:|-------------------------------|
| 5       | 8.05      | 4.34     | 2.23     | Walking pace                  |
| 20      | 32.19     | 17.38    | 8.94     | Residential street            |
| 55      | 88.51     | 47.79    | 24.59    | US highway speed limit        |
| 65      | 104.61    | 56.48    | 29.06    | US highway (most states)      |
| 100     | 160.93    | 86.90    | 44.70    | Fast highway                  |
| 120     | 193.12    | 104.27   | 53.64    | European highway              |
| 200     | 321.87    | 173.78   | 89.41    | Sports car top speed          |
| 767     | 1,234.71  | 666.74   | 342.98   | Mach 1 at sea level           |

## Method 1: Use UtilBoxx's Speed Converter (Recommended)

The fastest, most private, and most precise way to convert speed in your browser is the [UtilBoxx Speed Converter](/en/tools/unit/speed). It supports mph, kph, m/s, knots, ft/s, Mach, and more, with bidirectional instant conversion. Everything runs in your browser — no server, no upload, no logs.

**How to use it:**

1. Go to [utilboxx.com/en/tools/unit/speed](/en/tools/unit/speed)
2. Type a value in any field (mph, kph, knots, m/s, etc.)
3. All other fields update instantly
4. Copy the result

**Why we recommend this method:**

- **100% free**, no signup, no email, no ads
- **Privacy-first**: nothing leaves your browser
- **Covers mph, kph, m/s, knots, and Mach** in one place
- **Exact precision** — uses the precise 1.609344 factor
- **Works on any device** with a browser

If you travel internationally, drive a car with mixed units, or follow motorsport, this tool pays for itself the first time you use it.

## Method 2: Google Search

For a one-off conversion, Google is the fastest path. Type \`65 mph to kph\` or \`100 km/h in mph\` into the search box. Google replies with a built-in converter card at the top of the results, including the exact conversion.

**Pros:** zero friction, no click required, works on any device with a browser.

**Cons:** requires an internet connection, only good for one value at a time, and Google logs every conversion. For privacy-sensitive values (vehicle telematics, fleet tracking), prefer an offline method.

## Method 3: Python (or any language)

A one-liner in Python handles every speed conversion:

\`\`\`python
KPH_PER_MPH = 1.609344
KPH_PER_KNOT = 1.852
MS_PER_MPH = 0.44704

def mph_to_kph(mph):   return mph * KPH_PER_MPH
def kph_to_mph(kph):   return kph / KPH_PER_MPH
def knots_to_kph(kt):  return kt * KPH_PER_KNOT
def mph_to_ms(mph):    return mph * MS_PER_MPH

print(mph_to_kph(65))    # 104.6074
print(kph_to_mph(120))   # 74.5645
print(knots_to_kph(10))  # 18.52
\`\`\`

JavaScript, with the same idea:

\`\`\`js
const KPH_PER_MPH = 1.609344;
const mphToKph = mph => mph * KPH_PER_MPH;
const kphToMph = kph => kph / KPH_PER_MPH;
console.log(mphToKph(65).toFixed(2));  // 104.61
\`\`\`

For batch conversion of a CSV (a fleet's mixed-unit speed logs, for instance), a 3-line pandas script does it:

\`\`\`python
import pandas as pd
df = pd.read_csv("speeds.csv")
df["kph"] = df["mph"] * 1.609344
df.to_csv("speeds_kph.csv", index=False)
\`\`\`

## Method 4: CLI with units (Linux/macOS)

The GNU \`units\` utility handles speed conversion on the command line. Install on macOS with Homebrew (\`brew install units\`).

\`\`\`bash
# Convert 65 mph to kph
units "65 mph" "kph"
# 104.60736

# Convert 100 kph to mph
units "100 kph" "mph"
# 62.137119

# Convert 10 knots to kph
units "10 knots" "kph"
# 18.52
\`\`\`

\`units\` understands many synonyms (\`mph\`, \`mi/h\`, \`kph\`, \`km/h\`, \`knots\`, \`m/s\`, etc.) and handles compound expressions. It is the fastest path for one-off speed math in a shell session.

## Common questions

### Are mph and knot the same?

No. A **knot** is a nautical mile per hour, used in aviation and maritime contexts. 1 knot = 1.852 kph, while 1 mph = 1.609344 kph. So **1 knot ≈ 1.151 mph** — knots are about 15% faster than mph. Pilots and sailors think in knots because a nautical mile corresponds to one minute of latitude, simplifying navigation. Ground vehicles (cars, bikes) use mph or kph.

### Why is Mach different at different altitudes?

**Mach 1** is the speed of sound, and the speed of sound depends on air temperature (and slightly on pressure and humidity). At sea level, with air at 15 °C, sound travels at about **1,235 kph = 767 mph = 343 m/s**. At 36,000 ft (typical jet cruise altitude), the air is much colder (−56 °C), so the speed of sound is only about **1,062 kph = 660 mph**. When Concorde cruised at Mach 2, it was going about 2,180 kph at altitude, not 2,470 kph.

### What is the difference between "mph" and "mi/h"?

None. They are the same unit. **mph** stands for "miles per hour", and **mi/h** is the symbol. The same applies to **kph** (kilometers per hour) and **km/h**. Style guides vary: the US style guide typically uses "mph", while SI style prefers "km/h". Both are correct.

### How fast is a typical car at 100 kph?

100 kph is the speed limit on many European highways (autobahns have sections without limits). It is roughly 62 mph. A typical family car reaches 100 kph in 8–12 seconds. A sports car does it in 3–5 seconds. A high-performance car (Bugatti, Koenigsegg) can do 100 kph in under 3 seconds. At 100 kph, a car travels about 28 m per second, so a 1-second distraction covers 28 m — about 7 car lengths.

### How do I convert miles per gallon to liters per 100 km?

This is an inverse problem: US fuel economy is in mpg (more = better), while European economy is in L/100 km (less = better). The formula:

\`\`\`
L/100km = 235.215 / mpg
\`\`\`

So 30 mpg = 7.84 L/100 km, and 50 mpg = 4.70 L/100 km. The exact formula uses 1.609344 km per mile and 3.785412 L per US gallon: 1 / (mpg × 1.609344 / 3.785412) = 3.785412 × 100 / (mpg × 1.609344) = 235.215 / mpg.

### Is 100 mph fast?

For a car on a highway, 100 mph (161 kph) is fast — only a few countries have roads with no speed limit where this is normal (most US interstates have 70–80 mph limits). For a race car, 100 mph is slow; an F1 car tops out around 220 mph (354 kph). For an airplane, 100 mph is barely moving — even a small Cessna cruises at 140 mph. Context matters.

## Conclusion

Mph to kph is one of the simplest conversions to memorize. **1 mph = 1.609344 kph** is exact, and a one-line mental shortcut (multiply mph by 1.6) gets you within 0.6% for everyday use. For occasional conversions, the [UtilBoxx Speed Converter](/en/tools/unit/speed) is private, free, and works offline once loaded. For batch work, Python and the \`units\` CLI handle thousands of values without leaving the terminal. And for one-offs, Google or a voice assistant gives an instant answer.

The mental shortcut: **60 mph ≈ 100 kph**, and **100 kph ≈ 60 mph**. With these two anchors, you can sanity-check any road sign in your head.`;

const mphKphZh = `## 为什么要做 mph 到 kph 的换算？

当你跨越道路标志的边界时，就会遇到速度换算。**英里每小时**（mph）在美国、英国和其他少数国家是日常速度单位。**公里每小时**（kph 或 km/h）被世界上其他所有国家用于道路标志、车速表和天气报告。

你会在以下场景遇到这个换算：

- **在国外驾驶**：在欧洲、澳大利亚或日本租车，试图一眼读懂 120 km/h 的标志。
- **观看赛车**：F1 报告速度用 kph；NASCAR 用 mph。
- **阅读天气数据**：风速、风暴等级和龙卷风报告混用 mph 和 kph。
- **骑行和跑步**：一些应用默认使用一种单位，而你的身体按另一种思考。
- **航空和航海**：节（海里每小时）是标准，但地面速度常以 mph 或 kph 报告。

好消息是：换算就是一个数，精确，容易记住。

## 精确换算公式

\`\`\`
1 mph = 1.609344 kph      （精确，按定义）
1 kph = 0.6213711922 mph
1 节 = 1.852 kph          （精确，按定义）
1 mph = 0.8689762419 节
1 m/s = 3.6 kph           （精确）
1 mph = 0.44704 m/s       （精确，按定义）
1 马赫（海平面）≈ 1,235 kph ≈ 767 mph
\`\`\`

**为什么这些是精确的**：自 1959 年以来，国际英里被定义为**正好 1,609.344 米**。一海里被定义为正好 1,852 米。因此 1 mph = 1,609.344 m/h = 1.609344 km/h，精确。

**计算示例：**

- **65 mph → kph**：65 × 1.609344 = **104.61 kph**（美国高速公路限速）
- **100 kph → mph**：100 / 1.609344 = **62.14 mph**
- **120 kph → mph**：120 / 1.609344 = **74.56 mph**（典型欧洲高速公路速度）
- **200 mph → kph**：200 × 1.609344 = **321.87 kph**（许多跑车的最高速度）
- **1 节 → kph**：1 × 1.852 = **1.852 kph**

实用的心算捷径：把 mph 乘以 1.6 就能快速估算 kph。**60 mph × 1.6 = 96 kph**（实际值是 96.56，所以捷径误差在 0.6% 以内）。对于粗略计算，这已经够近了。

## 速查表

| mph     | kph        | 节        | m/s       | 场景                       |
|--------:|-----------:|---------:|---------:|---------------------------|
| 5       | 8.05       | 4.34      | 2.23      | 步行速度                  |
| 20      | 32.19      | 17.38     | 8.94      | 居民区街道                |
| 55      | 88.51      | 47.79     | 24.59     | 美国高速限速              |
| 65      | 104.61     | 56.48     | 29.06     | 美国高速（多数州）        |
| 100     | 160.93     | 86.90     | 44.70     | 快速公路                  |
| 120     | 193.12     | 104.27    | 53.64     | 欧洲高速                  |
| 200     | 321.87     | 173.78    | 89.41     | 跑车最高速度              |
| 767     | 1,234.71   | 666.74    | 342.98    | 海平面马赫 1              |

## 方法一：使用 UtilBoxx 速度换算工具（推荐）

在浏览器中换算速度最快、最私密、最精确的方式是 [UtilBoxx 速度换算工具](/zh/tools/unit/speed)。它支持 mph、kph、m/s、节、ft/s、马赫等，双向即时换算。所有计算在浏览器本地完成 —— 没有服务器、没有上传、没有日志。

**使用方法：**

1. 打开 [utilboxx.com/zh/tools/unit/speed](/zh/tools/unit/speed)
2. 在任意一个输入框（mph、kph、节、m/s 等）输入数值
3. 所有其他输入框即时更新
4. 复制结果

**为什么推荐这个方法：**

- **100% 免费**，无注册、无邮箱、无广告
- **隐私优先**：不离开你的浏览器
- **一个工具覆盖 mph、kph、m/s、节和马赫**
- **精确精度** —— 使用精确的 1.609344 系数
- **任何有浏览器的设备都能用**

如果你国际旅行、驾驶混用单位的车辆，或观看赛车，这个工具第一次用就值回票价。

## 方法二：Google 搜索

一次性换算用 Google 是最快的路径。在搜索框输入 \`65 mph to kph\` 或 \`100 km/h 等于多少 mph\`。Google 会在结果顶部返回内建的换算卡片，包括精确换算。

**优点**：零摩擦、无需点击、在任何有浏览器的设备上都能用。

**缺点**：需要联网、一次只能换算一个值，而且 Google 会记录你的每次换算。对于隐私敏感的值（车辆远程信息处理、车队追踪），请优先选择离线方法。

## 方法三：Python（或任何语言）

Python 一行代码处理所有速度换算：

\`\`\`python
KPH_PER_MPH = 1.609344
KPH_PER_KNOT = 1.852
MS_PER_MPH = 0.44704

def mph_to_kph(mph):   return mph * KPH_PER_MPH
def kph_to_mph(kph):   return kph / KPH_PER_MPH
def knots_to_kph(kt):  return kt * KPH_PER_KNOT
def mph_to_ms(mph):    return mph * MS_PER_MPH

print(mph_to_kph(65))    # 104.6074
print(kph_to_mph(120))   # 74.5645
print(knots_to_kph(10))  # 18.52
\`\`\`

JavaScript 同样的思路：

\`\`\`js
const KPH_PER_MPH = 1.609344;
const mphToKph = mph => mph * KPH_PER_MPH;
const kphToMph = kph => kph / KPH_PER_MPH;
console.log(mphToKph(65).toFixed(2));  // 104.61
\`\`\`

要批量换算一个 CSV（例如一个车队的混合单位速度日志），3 行 pandas 脚本搞定：

\`\`\`python
import pandas as pd
df = pd.read_csv("speeds.csv")
df["kph"] = df["mph"] * 1.609344
df.to_csv("speeds_kph.csv", index=False)
\`\`\`

## 方法四：命令行 units（Linux/macOS）

GNU 的 \`units\` 工具在命令行里处理速度换算。macOS 上用 Homebrew 安装（\`brew install units\`）。

\`\`\`bash
# 65 mph 转 kph
units "65 mph" "kph"
# 104.60736

# 100 kph 转 mph
units "100 kph" "mph"
# 62.137119

# 10 节转 kph
units "10 knots" "kph"
# 18.52
\`\`\`

\`units\` 理解很多同义词（\`mph\`、\`mi/h\`、\`kph\`、\`km/h\`、\`knots\`、\`m/s\` 等），并处理复合表达式。它是 shell 会话中一次性速度计算的最快路径。

## 常见问题

### mph 和节一样吗？

不一样。**节**是每小时一海里，用于航空和航海语境。1 节 = 1.852 kph，而 1 mph = 1.609344 kph。所以 **1 节 ≈ 1.151 mph** —— 节比 mph 快约 15%。飞行员和水手按节思考，因为一海里对应纬度的 1 分，简化了导航。地面车辆（汽车、自行车）用 mph 或 kph。

### 为什么马赫在不同高度不同？

**马赫 1**是音速，音速取决于空气温度（也与气压和湿度略有关系）。在海平面，空气为 15 °C 时，声音传播速度约为 **1,235 kph = 767 mph = 343 m/s**。在 36,000 英尺（典型喷气客机巡航高度），空气温度低得多（−56 °C），所以音速只有约 **1,062 kph = 660 mph**。当协和飞机以马赫 2 巡航时，它在高空以约 2,180 kph 飞行，而不是 2,470 kph。

### "mph" 和 "mi/h" 有什么区别？

没有区别，它们是同一个单位。**mph** 代表 "miles per hour"，**mi/h** 是其符号。**kph**（公里每小时）和 **km/h** 也一样。风格指南各异：美国风格指南通常用 "mph"，SI 风格更喜欢 "km/h"。两者都正确。

### 100 kph 对一辆典型汽车来说有多快？

100 kph 是许多欧洲高速公路的限速（德国高速公路部分路段不限速）。它大约是 62 mph。典型家用车在 8-12 秒内达到 100 kph。跑车 3-5 秒。高性能车（布加迪、柯尼赛克）能在 3 秒内达到 100 kph。在 100 kph 时，汽车每秒行驶约 28 米，所以 1 秒的疏忽意味着 28 米 —— 约 7 辆车长。

### 我怎么把英里每加仑换算成升每百公里？

这是一个反向问题：美国燃油经济性用 mpg（越多越好），欧洲经济性用 L/100 km（越少越好）。公式：

\`\`\`
L/100km = 235.215 / mpg
\`\`\`

所以 30 mpg = 7.84 L/100 km，50 mpg = 4.70 L/100 km。精确公式使用每英里 1.609344 公里和每美制加仑 3.785412 升：1 / (mpg × 1.609344 / 3.785412) = 3.785412 × 100 / (mpg × 1.609344) = 235.215 / mpg。

### 100 mph 算快吗？

对公路上的汽车来说，100 mph（161 kph）算快 —— 只有少数国家有不限速的道路能达到这个速度（大多数美国州际公路限速 70-80 mph）。对赛车来说，100 mph 算慢；F1 赛车最高速度约 220 mph（354 kph）。对飞机来说，100 mph 几乎没动 —— 即使是小型塞斯纳飞机巡航速度也有 140 mph。语境很重要。

## 结论

mph 到 kph 是最容易记住的换算之一。**1 mph = 1.609344 kph** 精确，而一个心算捷径（mph 乘以 1.6）在日常使用中能保证 0.6% 以内的精度。偶尔换算的话，[UtilBoxx 速度换算工具](/zh/tools/unit/speed) 私密、免费、加载后离线可用。批量工作用 Python 和 \`units\` 命令行可以在不离开终端的情况下处理上千个值。偶尔的一次性换算，Google 或语音助手能给出即时答案。

心算捷径：**60 mph ≈ 100 kph**，**100 kph ≈ 60 mph**。有了这两个锚点，你可以在脑中核对任何道路标志。`;

const mphKphJa = `## なぜ mph を kph に換算するのか？

速度換算は、道路標識の国境を越えるときに必ず発生します。**マイル毎時**（mph）は米国、英国、その他いくつかの国での日常的な速度単位です。**キロメートル毎時**（kph または km/h）は、道路標識、速度計、天気予報に世界の他のすべての国で使用されています。

以下のような場面で換算が必要になります：

- **海外での運転**：ヨーロッパ、オーストラリア、日本でレンタカーを借り、120 km/h の標識を一目で読もうとする。
- **モータースポーツの視聴**：F1 は速度を kph で報告、NASCAR は mph。
- **天気データの閲覧**：風速、嵐のカテゴリー、竜巻の報告が mph と kph を混在させる。
- **サイクリングとランニング**：アプリは一方の単位がデフォルトで、体は他方で考える。
- **航空と航海**：ノット（海里毎時）が標準だが、地上速度はよく mph または kph で報告される。

朗報です：換算は 1 つの数字で、正確で、覚えやすい。

## 正確な換算公式

\`\`\`
1 mph = 1.609344 kph      （正確に、定義により）
1 kph = 0.6213711922 mph
1 ノット = 1.852 kph      （正確に、定義により）
1 mph = 0.8689762419 ノット
1 m/s = 3.6 kph           （正確）
1 mph = 0.44704 m/s       （正確に、定義により）
1 マッハ（海面）≈ 1,235 kph ≈ 767 mph
\`\`\`

**なぜこれらが正確か**：1959 年以来、国際マイルは**ちょうど 1,609.344 メートル**と定義されています。1 海里はちょうど 1,852 メートルと定義されています。したがって 1 mph = 1,609.344 m/h = 1.609344 km/h が正確。

**計算例：**

- **65 mph → kph**：65 × 1.609344 = **104.61 kph**（米国の高速道路の速度制限）
- **100 kph → mph**：100 / 1.609344 = **62.14 mph**
- **120 kph → mph**：120 / 1.609344 = **74.56 mph**（典型的な欧州の高速道路速度）
- **200 mph → kph**：200 × 1.609344 = **321.87 kph**（多くのスポーツカーの最高速度）
- **1 ノット → kph**：1 × 1.852 = **1.852 kph**

便利な暗算の近道：mph に 1.6 を掛けると kph の素早い見積もりが得られます。**60 mph × 1.6 = 96 kph**（実際は 96.56 なので、近道の誤差は 0.6% 以内）。概算としてはこれで十分近いです。

## 早見表

| mph     | kph        | ノット    | m/s       | コンテキスト                 |
|--------:|-----------:|--------:|---------:|------------------------------|
| 5       | 8.05       | 4.34     | 2.23     | 歩行ペース                    |
| 20      | 32.19      | 17.38    | 8.94     | 住宅街                        |
| 55      | 88.51      | 47.79    | 24.59    | 米国の高速道路の速度制限      |
| 65      | 104.61     | 56.48    | 29.06    | 米国高速道路（ほとんどの州）  |
| 100     | 160.93     | 86.90    | 44.70    | 高速道路                      |
| 120     | 193.12     | 104.27   | 53.64    | 欧州高速道路                  |
| 200     | 321.87     | 173.78   | 89.41    | スポーツカー最高速度          |
| 767     | 1,234.71   | 666.74   | 342.98   | 海面でのマッハ 1              |

## 方法 1：UtilBoxx 速度換算ツール（推奨）

ブラウザで速度を換算する最も速く、最もプライベートで、最も正確な方法は [UtilBoxx 速度換算ツール](/ja/tools/unit/speed) です。mph、kph、m/s、ノット、ft/s、マッハなどをサポートし、双方向の即時換算を提供します。すべてブラウザ内で動作します。サーバーも、アップロードも、ログもなし。

**使い方：**

1. [utilboxx.com/ja/tools/unit/speed](/ja/tools/unit/speed) を開く
2. 任意のフィールド（mph、kph、ノット、m/s など）に値を入力
3. 他のフィールドが即座に更新
4. 結果をコピー

**この方法を推奨する理由：**

- **100% 無料**、登録不要、メールアドレス不要、広告なし
- **プライバシー最優先**：ブラウザから出ない
- **mph、kph、m/s、ノット、マッハを 1 か所でカバー**
- **正確な精度** — 正確な 1.609344 係数を使用
- **ブラウザがあるあらゆるデバイスで動作**

国際的に旅行する、単位が混在する車を運転する、モータースポーツを見るなら、このツールは最初に使っただけで元が取れます。

## 方法 2：Google 検索

一度限りの換算なら、Google が最速です。検索ボックスに \`65 mph to kph\` や \`100 km/h を mph に\` と入力します。Google は結果の上部に、正確な換算を含む内蔵換算カードを返します。

**長所**：摩擦ゼロ、クリック不要、ブラウザがあるデバイスで動作。

**短所**：インターネット接続が必要、一度に一つの値しか換算できない、Google がすべての換算をログに記録する。プライバシーに敏感な値（車両テレマティクス、フリート追跡）の場合は、オフラインの方法を選んでください。

## 方法 3：Python（または任意の言語）

Python のワンライナーですべての速度換算を処理します：

\`\`\`python
KPH_PER_MPH = 1.609344
KPH_PER_KNOT = 1.852
MS_PER_MPH = 0.44704

def mph_to_kph(mph):   return mph * KPH_PER_MPH
def kph_to_mph(kph):   return kph / KPH_PER_MPH
def knots_to_kph(kt):  return kt * KPH_PER_KNOT
def mph_to_ms(mph):    return mph * MS_PER_MPH

print(mph_to_kph(65))    # 104.6074
print(kph_to_mph(120))   # 74.5645
print(knots_to_kph(10))  # 18.52
\`\`\`

JavaScript でも同じ考え方：

\`\`\`js
const KPH_PER_MPH = 1.609344;
const mphToKph = mph => mph * KPH_PER_MPH;
const kphToMph = kph => kph / KPH_PER_MPH;
console.log(mphToKph(65).toFixed(2));  // 104.61
\`\`\`

CSV の一括換算（例えば、フリートの混合単位速度ログ）をするには、3 行の pandas スクリプトで完了します：

\`\`\`python
import pandas as pd
df = pd.read_csv("speeds.csv")
df["kph"] = df["mph"] * 1.609344
df.to_csv("speeds_kph.csv", index=False)
\`\`\`

## 方法 4：コマンドラインで units（Linux/macOS）

GNU の \`units\` ユーティリティはコマンドラインで速度を扱えます。macOS では Homebrew でインストール（\`brew install units\`）。

\`\`\`bash
# 65 mph を kph に換算
units "65 mph" "kph"
# 104.60736

# 100 kph を mph に
units "100 kph" "mph"
# 62.137119

# 10 ノットを kph に
units "10 knots" "kph"
# 18.52
\`\`\`

\`units\` は多くの同義語（\`mph\`、\`mi/h\`、\`kph\`、\`km/h\`、\`knots\`、\`m/s\` など）を理解し、複合式を扱います。シェルセッションでの単発速度計算の最速パスです。

## よくある質問

### mph とノットは同じですか？

いいえ。**ノット**は 1 時間あたり 1 海里で、航空と海事のコンテキストで使われます。1 ノット = 1.852 kph、一方 1 mph = 1.609344 kph。したがって **1 ノット ≈ 1.151 mph** — ノットは mph より約 15% 速いです。パイロットと船乗りはノットで考えます。1 海里が緯度の 1 分に対応するからです。地上車両（車、自転車）は mph または kph を使用します。

### なぜマッハは高度によって異なるのか？

**マッハ 1**は音速であり、音速は空気温度（およびわずかに気圧と湿度）に依存します。海面で、気温 15 °C の場合、音速は約 **1,235 kph = 767 mph = 343 m/s** です。36,000 フィート（典型的なジェット巡航高度）では、空気は非常に冷たく（−56 °C）、音速は約 **1,062 kph = 660 mph** しかありません。コンコルドがマッハ 2 で巡航した時、高度では約 2,180 kph で飛んでおり、2,470 kph ではありません。

### "mph" と "mi/h" の違いは何ですか？

違いはありません、同じ単位です。**mph** は "miles per hour" の略で、**mi/h** はその記号です。**kph**（キロメートル毎時）と **km/h** も同じです。スタイルガイドはさまざまです：米国のスタイルガイドは通常 "mph" を使用し、SI スタイルは "km/h" を好みます。どちらも正しいです。

### 100 kph は典型的な車にとってどのくらい速いですか？

100 kph は多くの欧州高速道路の速度制限です（アウトバーンには制限なしの区間があります）。およそ 62 mph です。典型的なファミリーカーは 100 kph に 8〜12 秒で達します。スポーツカーは 3〜5 秒です。ハイパフォーマンスカー（ブガッティ、ケーニグセグ）は 3 秒未満で 100 kph に達します。100 kph では、車両は毎秒約 28 m 進むので、1 秒の注意散漫で 28 m、約 7 車長をカバーします。

### mpg を L/100 km に変換するには？

これは逆問題です：米国の燃料経済は mpg（多いほど良い）で、欧州の経済は L/100 km（少ないほど良い）です。公式：

\`\`\`
L/100km = 235.215 / mpg
\`\`\`

したがって 30 mpg = 7.84 L/100 km、50 mpg = 4.70 L/100 km。正確な式は 1 マイルあたり 1.609344 km、1 米国ガロンあたり 3.785412 L を使用します：1 / (mpg × 1.609344 / 3.785412) = 3.785412 × 100 / (mpg × 1.609344) = 235.215 / mpg。

### 100 mph は速いですか？

高速道路の車にとって、100 mph（161 kph）は速いです — この速度が普通の道路は一部の国にしかなく（ほとんどの米国州間高速道路は 70〜80 mph 制限）、制限なしの道路がある国はほんの数か国だけです。レースカーにとって、100 mph は遅いです。F1 マシンは最大約 220 mph（354 kph）に達します。飛行機にとって、100 mph はほぼ動いていません — 小型のセスナ機でも巡航速度は 140 mph です。コンテキストが重要です。

## まとめ

mph から kph への換算は最も覚えやすい換算の一つです。**1 mph = 1.609344 kph** は正確で、暗算の近道（mph に 1.6 を掛ける）は日常使用で 0.6% 以内の精度を提供します。たまに換算するなら、[UtilBoxx 速度換算ツール](/ja/tools/unit/speed) はプライベートで、無料で、読み込み後はオフラインで動作します。バッチ作業には Python と \`units\` コマンドラインが、ターミナルから出ずに何千もの値を処理できます。単発なら、Google や音声アシスタントが即座に答えてくれます。

暗算の近道：**60 mph ≈ 100 kph**、**100 kph ≈ 60 mph**。この 2 つのアンカーがあれば、どんな道路標識も頭の中で sanity-check できます。`;

const mphKphEs = `## ¿Por qué convertir mph a kph?

La conversión de velocidad aparece cada vez que cruza una frontera de señales de tráfico. La **milla por hora** (mph) es la unidad de velocidad cotidiana en EE. UU., el Reino Unido y un puñado de otros países. El **kilómetro por hora** (kph o km/h) lo usa todos los demás países del mundo para señales de tráfico, velocímetros y partes meteorológicos.

Encontrará esta conversión cuando:

- **Conduzca en el extranjero**: Alquile un coche en Europa, Australia o Japón e intente leer de un vistazo una señal de 120 km/h.
- **Siga el motorsport**: La F1 reporta velocidades en kph; NASCAR usa mph.
- **Lea datos meteorológicos**: La velocidad del viento, las categorías de tormenta y los reportes de tornado mezclan mph y kph.
- **Vaya en bicicleta o corra**: Algunas apps usan una unidad por defecto y su cuerpo piensa en la otra.
- **Aviación y navegación**: Los nudos (millas náuticas por hora) son el estándar, pero la velocidad sobre tierra a menudo se reporta en mph o kph.

La buena noticia: la conversión es un solo número, exacto y fácil de memorizar.

## Las fórmulas exactas de conversión

\`\`\`
1 mph = 1,609344 kph      (exacto, por definición)
1 kph = 0,6213711922 mph
1 nudo = 1,852 kph        (exacto, por definición)
1 mph = 0,8689762419 nudos
1 m/s = 3,6 kph           (exacto)
1 mph = 0,44704 m/s       (exacto, por definición)
1 Mach (a nivel del mar) ≈ 1.235 kph ≈ 767 mph
\`\`\`

**Por qué son exactos**: La milla internacional se define como **exactamente 1.609,344 metros** (desde 1959). Una milla náutica se define como exactamente 1.852 m. Por lo tanto 1 mph = 1.609,344 m/h = 1,609344 km/h, exacto.

**Ejemplos trabajados:**

- **65 mph → kph**: 65 × 1,609344 = **104,61 kph** (un límite de autopista estadounidense)
- **100 kph → mph**: 100 / 1,609344 = **62,14 mph**
- **120 kph → mph**: 120 / 1,609344 = **74,56 mph** (velocidad típica de autopista europea)
- **200 mph → kph**: 200 × 1,609344 = **321,87 kph** (velocidad máxima de muchos deportivos)
- **1 nudo → kph**: 1 × 1,852 = **1,852 kph**

Un atajo mental útil: multiplique mph por 1,6 para obtener una estimación rápida en kph. **60 mph × 1,6 = 96 kph** (el valor real es 96,56, así que el atajo está dentro del 0,6 %). Para un cálculo aproximado, esto es suficientemente cercano.

## Tabla de referencia rápida

| mph     | kph        | nudos     | m/s       | Contexto                       |
|--------:|-----------:|---------:|---------:|--------------------------------|
| 5       | 8,05       | 4,34      | 2,23      | Ritmo de caminata              |
| 20      | 32,19      | 17,38     | 8,94      | Calle residencial             |
| 55      | 88,51      | 47,79     | 24,59     | Límite de autopista EE. UU.    |
| 65      | 104,61     | 56,48     | 29,06     | Autopista EE. UU. (mayoría)   |
| 100     | 160,93     | 86,90     | 44,70     | Autopista rápida              |
| 120     | 193,12     | 104,27    | 53,64     | Autopista europea              |
| 200     | 321,87     | 173,78    | 89,41     | Velocidad máxima deportivo     |
| 767     | 1.234,71   | 666,74    | 342,98    | Mach 1 a nivel del mar         |

## Método 1: Use el conversor de velocidad de UtilBoxx (Recomendado)

La forma más rápida, privada y precisa de convertir velocidad en el navegador es el [Conversor de Velocidad de UtilBoxx](/es/tools/unit/speed). Soporta mph, kph, m/s, nudos, ft/s, Mach y más, con conversión bidireccional instantánea. Todo se ejecuta en su navegador: sin servidor, sin carga, sin registros.

**Cómo usarlo:**

1. Vaya a [utilboxx.com/es/tools/unit/speed](/es/tools/unit/speed)
2. Escriba un valor en cualquier campo (mph, kph, nudos, m/s, etc.)
3. Todos los demás campos se actualizan al instante
4. Copie el resultado

**Por qué recomendamos este método:**

- **100 % gratis**, sin registro, sin email, sin anuncios
- **Privacidad primero**: nada sale de su navegador
- **Cubre mph, kph, m/s, nudos y Mach** en un solo lugar
- **Precisión exacta** — usa el factor preciso 1,609344
- **Funciona en cualquier dispositivo** con navegador

Si viaja internacionalmente, conduce un coche con unidades mixtas o sigue el motorsport, esta herramienta se amortiza la primera vez que la usa.

## Método 2: Búsqueda en Google

Para una conversión puntual, Google es el camino más rápido. Escriba \`65 mph to kph\` o \`100 km/h en mph\` en el cuadro de búsqueda. Google responde con una tarjeta de conversión integrada en la parte superior de los resultados, incluyendo la conversión exacta.

**Ventajas:** cero fricción, sin clics, funciona en cualquier dispositivo con navegador.

**Desventajas:** requiere conexión a internet, solo es útil para un valor a la vez, y Google registra cada conversión. Para valores sensibles a la privacidad (telemática de vehículos, seguimiento de flotas), prefiera un método sin conexión.

## Método 3: Python (o cualquier lenguaje)

Un one-liner en Python maneja cada conversión de velocidad:

\`\`\`python
KPH_PER_MPH = 1.609344
KPH_PER_KNOT = 1.852
MS_PER_MPH = 0.44704

def mph_to_kph(mph):   return mph * KPH_PER_MPH
def kph_to_mph(kph):   return kph / KPH_PER_MPH
def knots_to_kph(kt):  return kt * KPH_PER_KNOT
def mph_to_ms(mph):    return mph * MS_PER_MPH

print(mph_to_kph(65))    # 104.6074
print(kph_to_mph(120))   # 74.5645
print(knots_to_kph(10))  # 18.52
\`\`\`

En JavaScript, con la misma idea:

\`\`\`js
const KPH_PER_MPH = 1.609344;
const mphToKph = mph => mph * KPH_PER_MPH;
const kphToMph = kph => kph / KPH_PER_MPH;
console.log(mphToKph(65).toFixed(2));  // 104.61
\`\`\`

Para conversión por lotes de un CSV (por ejemplo, registros de velocidad de unidades mixtas de una flota), un script de pandas de 3 líneas lo hace:

\`\`\`python
import pandas as pd
df = pd.read_csv("speeds.csv")
df["kph"] = df["mph"] * 1.609344
df.to_csv("speeds_kph.csv", index=False)
\`\`\`

## Método 4: CLI con units (Linux/macOS)

La utilidad GNU \`units\` maneja la conversión de velocidad en la línea de comandos. Instale en macOS con Homebrew (\`brew install units\`).

\`\`\`bash
# Convertir 65 mph a kph
units "65 mph" "kph"
# 104.60736

# Convertir 100 kph a mph
units "100 kph" "mph"
# 62.137119

# Convertir 10 nudos a kph
units "10 knots" "kph"
# 18.52
\`\`\`

\`units\` entiende muchos sinónimos (\`mph\`, \`mi/h\`, \`kph\`, \`km/h\`, \`knots\`, \`m/s\`, etc.) y maneja expresiones compuestas. Es el camino más rápido para matemáticas de velocidad puntuales en una sesión de shell.

## Preguntas frecuentes

### ¿Son lo mismo mph y nudo?

No. Un **nudo** es una milla náutica por hora, usado en contextos de aviación y marítimo. 1 nudo = 1,852 kph, mientras 1 mph = 1,609344 kph. Así que **1 nudo ≈ 1,151 mph** — los nudos son aproximadamente un 15 % más rápidos que mph. Los pilotos y marineros piensan en nudos porque una milla náutica corresponde a un minuto de latitud, lo que simplifica la navegación. Los vehículos terrestres (coches, bicicletas) usan mph o kph.

### ¿Por qué Mach es diferente a distintas altitudes?

**Mach 1** es la velocidad del sonido, y la velocidad del sonido depende de la temperatura del aire (y ligeramente de la presión y humedad). A nivel del mar, con aire a 15 °C, el sonido viaja a unos **1.235 kph = 767 mph = 343 m/s**. A 36.000 ft (altitud típica de crucero de jets), el aire es mucho más frío (−56 °C), por lo que la velocidad del sonido es solo de unos **1.062 kph = 660 mph**. Cuando el Concorde crucero a Mach 2, iba a unos 2.180 kph a altitud, no a 2.470 kph.

### ¿Cuál es la diferencia entre "mph" y "mi/h"?

Ninguna. Son la misma unidad. **mph** significa "miles per hour", y **mi/h** es el símbolo. Lo mismo aplica a **kph** (kilómetros por hora) y **km/h**. Las guías de estilo varían: la guía de estilo estadounidense suele usar "mph", mientras que el estilo SI prefiere "km/h". Ambas son correctas.

### ¿Qué tan rápido es un coche típico a 100 kph?

100 kph es el límite en muchas autopistas europeas (los autobahns tienen tramos sin límite). Es aproximadamente 62 mph. Un coche familiar típico alcanza 100 kph en 8-12 segundos. Un deportivo lo hace en 3-5 segundos. Un coche de alto rendimiento (Bugatti, Koenigsegg) puede hacer 100 kph en menos de 3 segundos. A 100 kph, un coche recorre unos 28 m por segundo, por lo que una distracción de 1 segundo cubre 28 m — unas 7 longitudes de coche.

### ¿Cómo convierto millas por galón a litros por 100 km?

Este es un problema inverso: el ahorro de combustible en EE. UU. se mide en mpg (más = mejor), mientras que el europeo se mide en L/100 km (menos = mejor). La fórmula:

\`\`\`
L/100km = 235,215 / mpg
\`\`\`

Así 30 mpg = 7,84 L/100 km, y 50 mpg = 4,70 L/100 km. La fórmula exacta usa 1,609344 km por milla y 3,785412 L por galón estadounidense: 1 / (mpg × 1,609344 / 3,785412) = 3,785412 × 100 / (mpg × 1,609344) = 235,215 / mpg.

### ¿Es 100 mph rápido?

Para un coche en autopista, 100 mph (161 kph) es rápido — solo unos pocos países tienen vías sin límite donde esto es normal (la mayoría de las interestatales de EE. UU. tienen límites de 70-80 mph). Para un coche de carreras, 100 mph es lento; un F1 alcanza unos 220 mph (354 kph). Para un avión, 100 mph apenas se mueve — incluso un pequeño Cessna cruza a 140 mph. El contexto importa.

## Conclusión

Mph a kph es una de las conversiones más fáciles de memorizar. **1 mph = 1,609344 kph** es exacto, y un atajo mental (multiplicar mph por 1,6) le sitúa dentro del 0,6 % para uso cotidiano. Para conversiones ocasionales, el [Conversor de Velocidad de UtilBoxx](/es/tools/unit/speed) es privado, gratis y funciona sin conexión una vez cargado. Para trabajo por lotes, Python y la CLI \`units\` manejan miles de valores sin salir de la terminal. Y para conversiones puntuales, Google o un asistente de voz dan una respuesta instantánea.

El atajo mental: **60 mph ≈ 100 kph**, y **100 kph ≈ 60 mph**. Con estos dos anclajes, puede hacer una comprobación de cordura de cualquier señal de tráfico en su cabeza.`;

const mphKphPt = `## Por que converter mph para kph?

A conversão de velocidade aparece sempre que você cruza uma fronteira de placas de trânsito. A **milha por hora** (mph) é a unidade de velocidade cotidiana nos EUA, Reino Unido e um punhado de outros países. O **quilômetro por hora** (kph ou km/h) é usado por todos os outros países do mundo para placas de trânsito, velocímetros e boletins meteorológicos.

Você vai encontrar esta conversão quando:

- **Dirigir no exterior**: Alugar um carro na Europa, Austrália ou Japão e tentar ler de relance uma placa de 120 km/h.
- **Acompanhar o automobilismo**: F1 reporta velocidades em kph; NASCAR usa mph.
- **Ler dados meteorológicos**: Velocidade do vento, categorias de tempestades e relatórios de tornado misturam mph e kph.
- **Andar de bicicleta ou correr**: Alguns apps usam uma unidade por padrão e seu corpo pensa na outra.
- **Aviação e navegação**: Nós (milhas náuticas por hora) são o padrão, mas a velocidade em relação ao solo é frequentemente reportada em mph ou kph.

A boa notícia: a conversão é um único número, exato e fácil de memorizar.

## As fórmulas exatas de conversão

\`\`\`
1 mph = 1,609344 kph      (exato, por definição)
1 kph = 0,6213711922 mph
1 nó   = 1,852 kph        (exato, por definição)
1 mph  = 0,8689762419 nós
1 m/s  = 3,6 kph          (exato)
1 mph  = 0,44704 m/s      (exato, por definição)
1 Mach (ao nível do mar) ≈ 1.235 kph ≈ 767 mph
\`\`\`

**Por que são exatos**: A milha internacional é definida como **exatamente 1.609,344 metros** (desde 1959). Uma milha náutica é definida como exatamente 1.852 m. Portanto 1 mph = 1.609,344 m/h = 1,609344 km/h, exato.

**Exemplos resolvidos:**

- **65 mph → kph**: 65 × 1,609344 = **104,61 kph** (limite de rodovia americana)
- **100 kph → mph**: 100 / 1,609344 = **62,14 mph**
- **120 kph → mph**: 120 / 1,609344 = **74,56 mph** (velocidade típica de rodovia europeia)
- **200 mph → kph**: 200 × 1,609344 = **321,87 kph** (velocidade máxima de muitos carros esportivos)
- **1 nó → kph**: 1 × 1,852 = **1,852 kph**

Um atalho mental útil: multiplique mph por 1,6 para obter uma estimativa rápida em kph. **60 mph × 1,6 = 96 kph** (o valor real é 96,56, então o atalho está dentro de 0,6 %). Para um cálculo aproximado, está perto o suficiente.

## Tabela de referência rápida

| mph     | kph        | nós       | m/s       | Contexto                      |
|--------:|-----------:|---------:|---------:|-------------------------------|
| 5       | 8,05       | 4,34      | 2,23      | Ritmo de caminhada            |
| 20      | 32,19      | 17,38     | 8,94      | Rua residencial               |
| 55      | 88,51      | 47,79     | 24,59     | Limite de rodovia EUA         |
| 65      | 104,61     | 56,48     | 29,06     | Rodovia EUA (maioria)         |
| 100     | 160,93     | 86,90     | 44,70     | Rodovia rápida                |
| 120     | 193,12     | 104,27    | 53,64     | Rodovia europeia              |
| 200     | 321,87     | 173,78    | 89,41     | Velocidade máxima esportivo   |
| 767     | 1.234,71   | 666,74    | 342,98    | Mach 1 ao nível do mar        |

## Método 1: Use o conversor de velocidade do UtilBoxx (Recomendado)

A maneira mais rápida, privada e precisa de converter velocidade no navegador é o [Conversor de Velocidade do UtilBoxx](/pt/tools/unit/speed). Suporta mph, kph, m/s, nós, ft/s, Mach e mais, com conversão bidirecional instantânea. Tudo roda no seu navegador: sem servidor, sem upload, sem registros.

**Como usar:**

1. Acesse [utilboxx.com/pt/tools/unit/speed](/pt/tools/unit/speed)
2. Digite um valor em qualquer campo (mph, kph, nós, m/s, etc.)
3. Todos os outros campos se atualizam instantaneamente
4. Copie o resultado

**Por que recomendamos este método:**

- **100 % grátis**, sem cadastro, sem e-mail, sem anúncios
- **Privacidade em primeiro lugar**: nada sai do seu navegador
- **Cobre mph, kph, m/s, nós e Mach** em um só lugar
- **Precisão exata** — usa o fator preciso 1,609344
- **Funciona em qualquer dispositivo** com navegador

Se você viaja internacionalmente, dirige um carro com unidades mistas ou acompanha automobilismo, esta ferramenta se paga da primeira vez que você a usa.

## Método 2: Busca no Google

Para uma conversão pontual, o Google é o caminho mais rápido. Digite \`65 mph to kph\` ou \`100 km/h em mph\` na caixa de busca. O Google responde com um cartão conversor embutido no topo dos resultados, incluindo a conversão exata.

**Prós:** zero atrito, sem cliques, funciona em qualquer dispositivo com navegador.

**Contras:** requer conexão à internet, só serve para um valor por vez, e o Google registra cada conversão. Para valores sensíveis à privacidade (telemática de veículos, rastreamento de frotas), prefira um método offline.

## Método 3: Python (ou qualquer linguagem)

Um one-liner em Python lida com cada conversão de velocidade:

\`\`\`python
KPH_PER_MPH = 1.609344
KPH_PER_KNOT = 1.852
MS_PER_MPH = 0.44704

def mph_to_kph(mph):   return mph * KPH_PER_MPH
def kph_to_mph(kph):   return kph / KPH_PER_MPH
def knots_to_kph(kt):  return kt * KPH_PER_KNOT
def mph_to_ms(mph):    return mph * MS_PER_MPH

print(mph_to_kph(65))    # 104.6074
print(kph_to_mph(120))   # 74.5645
print(knots_to_kph(10))  # 18.52
\`\`\`

Em JavaScript, com a mesma ideia:

\`\`\`js
const KPH_PER_MPH = 1.609344;
const mphToKph = mph => mph * KPH_PER_MPH;
const kphToMph = kph => kph / KPH_PER_MPH;
console.log(mphToKph(65).toFixed(2));  // 104.61
\`\`\`

Para conversão em lote de um CSV (por exemplo, registros de velocidade de unidades mistas de uma frota), um script de pandas de 3 linhas resolve:

\`\`\`python
import pandas as pd
df = pd.read_csv("speeds.csv")
df["kph"] = df["mph"] * 1.609344
df.to_csv("speeds_kph.csv", index=False)
\`\`\`

## Método 4: CLI com units (Linux/macOS)

O utilitário GNU \`units\` lida com conversão de velocidade na linha de comando. Instale no macOS com Homebrew (\`brew install units\`).

\`\`\`bash
# Converter 65 mph para kph
units "65 mph" "kph"
# 104.60736

# Converter 100 kph para mph
units "100 kph" "mph"
# 62.137119

# Converter 10 nós para kph
units "10 knots" "kph"
# 18.52
\`\`\`

O \`units\` entende muitos sinônimos (\`mph\`, \`mi/h\`, \`kph\`, \`km/h\`, \`knots\`, \`m/s\`, etc.) e lida com expressões compostas. É o caminho mais rápido para matemática de velocidade pontual em uma sessão de shell.

## Perguntas frequentes

### mph e nó são a mesma coisa?

Não. Um **nó** é uma milha náutica por hora, usado em contextos de aviação e marítimo. 1 nó = 1,852 kph, enquanto 1 mph = 1,609344 kph. Então **1 nó ≈ 1,151 mph** — nós são cerca de 15 % mais rápidos que mph. Pilotos e marinheiros pensam em nós porque uma milha náutica corresponde a um minuto de latitude, simplificando a navegação. Veículos terrestres (carros, bicicletas) usam mph ou kph.

### Por que Mach é diferente em altitudes diferentes?

**Mach 1** é a velocidade do som, e a velocidade do som depende da temperatura do ar (e ligeiramente da pressão e umidade). Ao nível do mar, com ar a 15 °C, o som viaja a cerca de **1.235 kph = 767 mph = 343 m/s**. A 36.000 ft (altitude típica de cruzeiro de jatos), o ar é muito mais frio (−56 °C), então a velocidade do som é de apenas cerca de **1.062 kph = 660 mph**. Quando o Concorde cruzava a Mach 2, estava indo a cerca de 2.180 kph em altitude, não a 2.470 kph.

### Qual a diferença entre "mph" e "mi/h"?

Nenhuma. São a mesma unidade. **mph** significa "miles per hour", e **mi/h** é o símbolo. O mesmo se aplica a **kph** (quilômetros por hora) e **km/h**. Os guias de estilo variam: o guia de estilo americano geralmente usa "mph", enquanto o estilo SI prefere "km/h". Ambos estão corretos.

### Quão rápido é um carro típico a 100 kph?

100 kph é o limite de velocidade em muitas rodovias europeias (autobahns têm trechos sem limite). São aproximadamente 62 mph. Um carro familiar típico alcança 100 kph em 8-12 segundos. Um esportivo faz isso em 3-5 segundos. Um carro de alto desempenho (Bugatti, Koenigsegg) pode fazer 100 kph em menos de 3 segundos. A 100 kph, um carro percorre cerca de 28 m por segundo, então uma distração de 1 segundo cobre 28 m — cerca de 7 comprimentos de carro.

### Como converto milhas por galão para litros por 100 km?

Este é um problema inverso: a economia de combustível nos EUA é em mpg (mais = melhor), enquanto a europeia é em L/100 km (menos = melhor). A fórmula:

\`\`\`
L/100km = 235,215 / mpg
\`\`\`

Então 30 mpg = 7,84 L/100 km, e 50 mpg = 4,70 L/100 km. A fórmula exata usa 1,609344 km por milha e 3,785412 L por galão americano: 1 / (mpg × 1,609344 / 3,785412) = 3,785412 × 100 / (mpg × 1,609344) = 235,215 / mpg.

### 100 mph é rápido?

Para um carro em rodovia, 100 mph (161 kph) é rápido — apenas alguns países têm vias sem limite onde isso é normal (a maioria das interestaduais dos EUA tem limites de 70-80 mph). Para um carro de corrida, 100 mph é lento; um F1 chega a cerca de 220 mph (354 kph). Para um avião, 100 mph mal se move — mesmo um pequeno Cessna cruza a 140 mph. O contexto importa.

## Conclusão

Mph para kph é uma das conversões mais fáceis de memorizar. **1 mph = 1,609344 kph** é exato, e um atalho mental (multiplicar mph por 1,6) coloca você dentro de 0,6 % para uso cotidiano. Para conversões ocasionais, o [Conversor de Velocidade do UtilBoxx](/pt/tools/unit/speed) é privado, grátis e funciona offline uma vez carregado. Para trabalho em lote, Python e a CLI \`units\` lidam com milhares de valores sem sair do terminal. E para conversões pontuais, Google ou um assistente de voz dão uma resposta instantânea.

O atalho mental: **60 mph ≈ 100 kph**, e **100 kph ≈ 60 mph**. Com estas duas âncoras, você pode fazer uma checagem de sanidade de qualquer placa de trânsito na sua cabeça.`;

const mphKphFr = `## Pourquoi convertir des mph en kph ?

La conversion de vitesse apparaît chaque fois que vous franchissez une frontière de panneaux de signalisation. Le **mile par heure** (mph) est l'unité de vitesse quotidienne aux États-Unis, au Royaume-Uni et dans une poignée d'autres pays. Le **kilomètre par heure** (kph ou km/h) est utilisé par tous les autres pays du monde pour les panneaux, les compteurs de vitesse et les bulletins météo.

Vous rencontrerez cette conversion quand :

- **Vous conduisez à l'étranger** : Louer une voiture en Europe, en Australie ou au Japon, et essayer de lire un panneau de 120 km/h d'un coup d'œil.
- **Vous suivez le sport automobile** : La F1 rapporte les vitesses en kph ; la NASCAR utilise les mph.
- **Vous lisez des données météo** : La vitesse du vent, les catégories de tempête et les rapports de tornade mélangent mph et kph.
- **Vous faites du vélo ou courez** : Certaines apps utilisent une unité par défaut et votre corps pense dans l'autre.
- **L'aviation et la navigation** : Les nœuds (miles nautiques par heure) sont la norme, mais la vitesse sol est souvent rapportée en mph ou kph.

Bonne nouvelle : la conversion tient en un seul nombre, exact et facile à mémoriser.

## Les formules exactes de conversion

\`\`\`
1 mph = 1,609344 kph      (exact, par définition)
1 kph = 0,6213711922 mph
1 nœud = 1,852 kph        (exact, par définition)
1 mph = 0,8689762419 nœuds
1 m/s = 3,6 kph           (exact)
1 mph = 0,44704 m/s       (exact, par définition)
1 Mach (au niveau de la mer) ≈ 1 235 kph ≈ 767 mph
\`\`\`

**Pourquoi ces valeurs sont exactes** : Le mile international est défini comme **exactement 1 609,344 mètres** (depuis 1959). Un mile nautique est défini comme exactement 1 852 m. Donc 1 mph = 1 609,344 m/h = 1,609344 km/h, exact.

**Exemples détaillés :**

- **65 mph → kph** : 65 × 1,609344 = **104,61 kph** (une limite d'autoroute américaine)
- **100 kph → mph** : 100 / 1,609344 = **62,14 mph**
- **120 kph → mph** : 120 / 1,609344 = **74,56 mph** (une vitesse d'autoroute européenne typique)
- **200 mph → kph** : 200 × 1,609344 = **321,87 kph** (vitesse de pointe de nombreuses sportives)
- **1 nœud → kph** : 1 × 1,852 = **1,852 kph**

Un raccourci mental utile : multipliez les mph par 1,6 pour obtenir une estimation rapide en kph. **60 mph × 1,6 = 96 kph** (la valeur réelle est 96,56, donc le raccourci est à 0,6 % près). Pour un calcul de poche, c'est suffisamment proche.

## Table de référence rapide

| mph     | kph        | nœuds     | m/s       | Contexte                       |
|--------:|-----------:|---------:|---------:|--------------------------------|
| 5       | 8,05       | 4,34      | 2,23      | Vitesse de marche              |
| 20      | 32,19      | 17,38     | 8,94      | Rue résidentielle              |
| 55      | 88,51      | 47,79     | 24,59     | Limite autoroute US            |
| 65      | 104,61     | 56,48     | 29,06     | Autoroute US (majorité)        |
| 100     | 160,93     | 86,90     | 44,70     | Autoroute rapide               |
| 120     | 193,12     | 104,27    | 53,64     | Autoroute européenne           |
| 200     | 321,87     | 173,78    | 89,41     | Vitesse de pointe sportive     |
| 767     | 1 234,71   | 666,74    | 342,98    | Mach 1 au niveau de la mer     |

## Méthode 1 : Utilisez le convertisseur de vitesse de UtilBoxx (Recommandé)

La façon la plus rapide, privée et précise de convertir la vitesse dans le navigateur est le [Convertisseur de Vitesse de UtilBoxx](/fr/tools/unit/speed). Il prend en charge mph, kph, m/s, nœuds, ft/s, Mach et plus, avec conversion bidirectionnelle instantanée. Tout s'exécute dans votre navigateur : pas de serveur, pas de téléversement, pas de logs.

**Comment l'utiliser :**

1. Allez sur [utilboxx.com/fr/tools/unit/speed](/fr/tools/unit/speed)
2. Saisissez une valeur dans n'importe quel champ (mph, kph, nœuds, m/s, etc.)
3. Tous les autres champs se mettent à jour instantanément
4. Copiez le résultat

**Pourquoi nous recommandons cette méthode :**

- **100 % gratuit**, sans inscription, sans e-mail, sans publicité
- **Confidentialité d'abord** : rien ne quitte votre navigateur
- **Couvre mph, kph, m/s, nœuds et Mach** au même endroit
- **Précision exacte** — utilise le facteur précis 1,609344
- **Fonctionne sur tout appareil** avec navigateur

Si vous voyagez à l'international, conduisez une voiture avec des unités mixtes ou suivez le sport automobile, cet outil est rentabilisé dès la première utilisation.

## Méthode 2 : Recherche Google

Pour une conversion ponctuelle, Google est le chemin le plus rapide. Saisissez \`65 mph to kph\` ou \`100 km/h en mph\` dans la zone de recherche. Google répond avec une carte de conversion intégrée en haut des résultats, incluant la conversion exacte.

**Avantages :** zéro friction, aucun clic requis, fonctionne sur tout appareil avec navigateur.

**Inconvénients :** nécessite une connexion internet, bon pour une seule valeur à la fois, et Google enregistre chaque conversion. Pour les valeurs sensibles à la confidentialité (télématique de véhicules, suivi de flotte), préférez une méthode hors ligne.

## Méthode 3 : Python (ou tout langage)

Un one-liner en Python gère chaque conversion de vitesse :

\`\`\`python
KPH_PER_MPH = 1.609344
KPH_PER_KNOT = 1.852
MS_PER_MPH = 0.44704

def mph_to_kph(mph):   return mph * KPH_PER_MPH
def kph_to_mph(kph):   return kph / KPH_PER_MPH
def knots_to_kph(kt):  return kt * KPH_PER_KNOT
def mph_to_ms(mph):    return mph * MS_PER_MPH

print(mph_to_kph(65))    # 104.6074
print(kph_to_mph(120))   # 74.5645
print(knots_to_kph(10))  # 18.52
\`\`\`

En JavaScript, avec la même idée :

\`\`\`js
const KPH_PER_MPH = 1.609344;
const mphToKph = mph => mph * KPH_PER_MPH;
const kphToMph = kph => kph / KPH_PER_MPH;
console.log(mphToKph(65).toFixed(2));  // 104.61
\`\`\`

Pour la conversion par lots d'un CSV (par exemple, les journaux de vitesse en unités mixtes d'une flotte), un script pandas de 3 lignes suffit :

\`\`\`python
import pandas as pd
df = pd.read_csv("speeds.csv")
df["kph"] = df["mph"] * 1.609344
df.to_csv("speeds_kph.csv", index=False)
\`\`\`

## Méthode 4 : CLI avec units (Linux/macOS)

L'utilitaire GNU \`units\` gère la conversion de vitesse en ligne de commande. Installez sur macOS avec Homebrew (\`brew install units\`).

\`\`\`bash
# Convertir 65 mph en kph
units "65 mph" "kph"
# 104.60736

# Convertir 100 kph en mph
units "100 kph" "mph"
# 62.137119

# Convertir 10 nœuds en kph
units "10 knots" "kph"
# 18.52
\`\`\`

\`units\` comprend de nombreux synonymes (\`mph\`, \`mi/h\`, \`kph\`, \`km/h\`, \`knots\`, \`m/s\`, etc.) et gère les expressions composées. C'est le chemin le plus rapide pour des calculs de vitesse ponctuels dans une session shell.

## Questions fréquentes

### Les mph et les nœuds sont-ils la même chose ?

Non. Un **nœud** est un mille nautique par heure, utilisé dans les contextes d'aviation et maritime. 1 nœud = 1,852 kph, tandis que 1 mph = 1,609344 kph. Donc **1 nœud ≈ 1,151 mph** — les nœuds sont environ 15 % plus rapides que les mph. Les pilotes et les marins pensent en nœuds parce qu'un mille nautique correspond à une minute de latitude, simplifiant la navigation. Les véhicules terrestres (voitures, vélos) utilisent les mph ou kph.

### Pourquoi Mach est-il différent selon l'altitude ?

**Mach 1** est la vitesse du son, et la vitesse du son dépend de la température de l'air (et légèrement de la pression et de l'humidité). Au niveau de la mer, avec de l'air à 15 °C, le son se déplace à environ **1 235 kph = 767 mph = 343 m/s**. À 36 000 ft (altitude typique de croisière des jets), l'air est bien plus froid (−56 °C), donc la vitesse du son n'est que d'environ **1 062 kph = 660 mph**. Quand le Concorde croisait à Mach 2, il volait à environ 2 180 kph en altitude, pas à 2 470 kph.

### Quelle est la différence entre « mph » et « mi/h » ?

Aucune. C'est la même unité. **mph** signifie « miles per hour », et **mi/h** est le symbole. La même chose s'applique à **kph** (kilomètres par heure) et **km/h**. Les guides de style varient : le guide de style américain utilise généralement « mph », tandis que le style SI préfère « km/h ». Les deux sont corrects.

### À quelle vitesse est une voiture typique à 100 kph ?

100 kph est la limite sur de nombreuses autoroutes européennes (les autoroutes allemandes ont des sections sans limite). Cela représente environ 62 mph. Une voiture familiale typique atteint 100 kph en 8-12 secondes. Une sportive y parvient en 3-5 secondes. Une voiture haute performance (Bugatti, Koenigsegg) peut faire 100 kph en moins de 3 secondes. À 100 kph, une voiture parcourt environ 28 m par seconde, donc une distraction d'1 seconde couvre 28 m — environ 7 longueurs de voiture.

### Comment convertir des miles par gallon en litres aux 100 km ?

C'est un problème inverse : la consommation de carburant aux États-Unis est en mpg (plus = mieux), tandis que la consommation européenne est en L/100 km (moins = mieux). La formule :

\`\`\`
L/100km = 235,215 / mpg
\`\`\`

Donc 30 mpg = 7,84 L/100 km, et 50 mpg = 4,70 L/100 km. La formule exacte utilise 1,609344 km par mile et 3,785412 L par gallon américain : 1 / (mpg × 1,609344 / 3,785412) = 3,785412 × 100 / (mpg × 1,609344) = 235,215 / mpg.

### 100 mph, c'est rapide ?

Pour une voiture sur autoroute, 100 mph (161 kph) c'est rapide — seuls quelques pays ont des routes sans limite où c'est normal (la plupart des interstates américaines ont des limites de 70-80 mph). Pour une voiture de course, 100 mph c'est lent ; une F1 culmine à environ 220 mph (354 kph). Pour un avion, 100 mph bouge à peine — même un petit Cessna croise à 140 mph. Le contexte compte.

## Conclusion

Mph en kph est l'une des conversions les plus faciles à mémoriser. **1 mph = 1,609344 kph** est exact, et un raccourci mental (multiplier les mph par 1,6) vous place à 0,6 % près pour l'usage quotidien. Pour des conversions ponctuelles, le [Convertisseur de Vitesse de UtilBoxx](/fr/tools/unit/speed) est privé, gratuit et fonctionne hors ligne une fois chargé. Pour le travail par lots, Python et la CLI \`units\` gèrent des milliers de valeurs sans quitter le terminal. Et pour les conversions ponctuelles, Google ou un assistant vocal donnent une réponse instantanée.

Le raccourci mental : **60 mph ≈ 100 kph**, et **100 kph ≈ 60 mph**. Avec ces deux ancres, vous pouvez faire une vérification de bon sens de n'importe quel panneau routier dans votre tête.`;

const mphKphDe = `## Warum mph in kph umrechnen?

Die Geschwindigkeitsumrechnung kommt jedes Mal vor, wenn Sie eine Schildergrenze überqueren. Die **Meile pro Stunde** (mph) ist die alltägliche Geschwindigkeitseinheit in den USA, Großbritannien und einer Handvoll anderer Länder. Der **Kilometer pro Stunde** (kph oder km/h) wird von allen anderen Ländern der Welt für Verkehrsschilder, Tachometer und Wetterberichte verwendet.

Sie begegnen dieser Umrechnung, wenn:

- **Sie im Ausland Auto fahren**: Mieten Sie ein Auto in Europa, Australien oder Japan und versuchen Sie, ein 120-km/h-Schild auf einen Blick zu lesen.
- **Sie Motorsport verfolgen**: F1 gibt Geschwindigkeiten in kph an; NASCAR verwendet mph.
- **Sie Wetterdaten lesen**: Windgeschwindigkeit, Sturm­kategorien und Tornadoberichte mischen mph und kph.
- **Sie Rad fahren oder laufen**: Manche Apps verwenden standardmäßig eine Einheit, und Ihr Körper denkt in der anderen.
- **In der Luft- und Schifffahrt**: Knoten (Seemeilen pro Stunde) sind der Standard, aber die Geschwindigkeit über Grund wird oft in mph oder kph angegeben.

Die gute Nachricht: Die Umrechnung ist eine einzige Zahl, exakt und leicht zu merken.

## Die exakten Umrechnungsformeln

\`\`\`
1 mph = 1,609344 kph      (exakt, per Definition)
1 kph = 0,6213711922 mph
1 Knoten = 1,852 kph      (exakt, per Definition)
1 mph = 0,8689762419 Knoten
1 m/s = 3,6 kph           (exakt)
1 mph = 0,44704 m/s       (exakt, per Definition)
1 Mach (auf Meereshöhe) ≈ 1.235 kph ≈ 767 mph
\`\`\`

**Warum diese exakt sind**: Die internationale Meile ist definiert als **genau 1.609,344 Meter** (seit 1959). Eine Seemeile ist definiert als genau 1.852 m. Also 1 mph = 1.609,344 m/h = 1,609344 km/h, exakt.

**Durchgerechnete Beispiele:**

- **65 mph → kph**: 65 × 1,609344 = **104,61 kph** (ein US-Autobahn-Tempolimit)
- **100 kph → mph**: 100 / 1,609344 = **62,14 mph**
- **120 kph → mph**: 120 / 1,609344 = **74,56 mph** (eine typische europäische Autobahngeschwindigkeit)
- **200 mph → kph**: 200 × 1,609344 = **321,87 kph** (Höchstgeschwindigkeit vieler Sportwagen)
- **1 Knoten → kph**: 1 × 1,852 = **1,852 kph**

Eine nützliche mentale Abkürzung: Multiplizieren Sie mph mit 1,6 für eine schnelle kph-Schätzung. **60 mph × 1,6 = 96 kph** (der tatsächliche Wert ist 96,56, also liegt die Abkürzung innerhalb von 0,6 %). Für eine Überschlagsrechnung ist das nah genug.

## Schnellreferenztabelle

| mph     | kph        | Knoten    | m/s       | Kontext                       |
|--------:|-----------:|---------:|---------:|-------------------------------|
| 5       | 8,05       | 4,34      | 2,23      | Schrittgeschwindigkeit        |
| 20      | 32,19      | 17,38     | 8,94      | Wohnstraße                    |
| 55      | 88,51      | 47,79     | 24,59     | US-Autobahn-Tempolimit        |
| 65      | 104,61     | 56,48     | 29,06     | US-Autobahn (meiste Bundesstaaten) |
| 100     | 160,93     | 86,90     | 44,70     | Schnelle Autobahn             |
| 120     | 193,12     | 104,27    | 53,64     | Europäische Autobahn          |
| 200     | 321,87     | 173,78    | 89,41     | Höchstgeschwindigkeit Sportwagen |
| 767     | 1.234,71   | 666,74    | 342,98    | Mach 1 auf Meereshöhe         |

## Methode 1: Den Geschwindigkeitsumrechner von UtilBoxx verwenden (Empfohlen)

Der schnellste, privateste und genaueste Weg, Geschwindigkeit im Browser umzurechnen, ist der [Geschwindigkeitsumrechner von UtilBoxx](/de/tools/unit/speed). Er unterstützt mph, kph, m/s, Knoten, ft/s, Mach und mehr, mit bidirektionaler sofortiger Umrechnung. Alles läuft in Ihrem Browser — kein Server, kein Upload, keine Logs.

**So verwenden Sie ihn:**

1. Gehen Sie zu [utilboxx.com/de/tools/unit/speed](/de/tools/unit/speed)
2. Geben Sie einen Wert in ein beliebiges Feld ein (mph, kph, Knoten, m/s usw.)
3. Alle anderen Felder aktualisieren sich sofort
4. Kopieren Sie das Ergebnis

**Warum wir diese Methode empfehlen:**

- **100 % kostenlos**, keine Registrierung, keine E-Mail, keine Werbung
- **Privatsphäre zuerst**: Nichts verlässt Ihren Browser
- **Deckt mph, kph, m/s, Knoten und Mach** an einem Ort ab
- **Exakte Präzision** — verwendet den präzisen Faktor 1,609344
- **Funktioniert auf jedem Gerät** mit Browser

Wenn Sie international reisen, ein Auto mit gemischten Einheiten fahren oder Motorsport verfolgen, amortisiert sich dieses Werkzeug bei der ersten Nutzung.

## Methode 2: Google-Suche

Für eine einmalige Umrechnung ist Google der schnellste Weg. Geben Sie \`65 mph to kph\` oder \`100 km/h in mph\` in das Suchfeld ein. Google antwortet mit einer eingebauten Umrechnungskarte oben in den Ergebnissen, einschließlich der genauen Umrechnung.

**Vorteile:** Null Reibung, kein Klick nötig, funktioniert auf jedem Gerät mit Browser.

**Nachteile:** Erfordert eine Internetverbindung, nur für einen Wert gleichzeitig gut, und Google protokolliert jede Umrechnung. Für datenschutzsensible Werte (Fahrzeugtelematik, Flottenverfolgung) bevorzugen Sie eine Offline-Methode.

## Methode 3: Python (oder jede Sprache)

Ein Einzeiler in Python erledigt jede Geschwindigkeitsumrechnung:

\`\`\`python
KPH_PER_MPH = 1.609344
KPH_PER_KNOT = 1.852
MS_PER_MPH = 0.44704

def mph_to_kph(mph):   return mph * KPH_PER_MPH
def kph_to_mph(kph):   return kph / KPH_PER_MPH
def knots_to_kph(kt):  return kt * KPH_PER_KNOT
def mph_to_ms(mph):    return mph * MS_PER_MPH

print(mph_to_kph(65))    # 104.6074
print(kph_to_mph(120))   # 74.5645
print(knots_to_kph(10))  # 18.52
\`\`\`

In JavaScript mit derselben Idee:

\`\`\`js
const KPH_PER_MPH = 1.609344;
const mphToKph = mph => mph * KPH_PER_MPH;
const kphToMph = kph => kph / KPH_PER_MPH;
console.log(mphToKph(65).toFixed(2));  // 104.61
\`\`\`

Für die Stapelumrechnung einer CSV (z. B. gemischte Geschwindigkeitsprotokolle einer Flotte) erledigt ein 3-zeiliges pandas-Skript dies:

\`\`\`python
import pandas as pd
df = pd.read_csv("speeds.csv")
df["kph"] = df["mph"] * 1.609344
df.to_csv("speeds_kph.csv", index=False)
\`\`\`

## Methode 4: CLI mit units (Linux/macOS)

Das GNU-Dienstprogramm \`units\` erledigt die Geschwindigkeitsumrechnung in der Kommandozeile. Installieren Sie auf macOS mit Homebrew (\`brew install units\`).

\`\`\`bash
# 65 mph in kph umrechnen
units "65 mph" "kph"
# 104.60736

# 100 kph in mph
units "100 kph" "mph"
# 62.137119

# 10 Knoten in kph
units "10 knots" "kph"
# 18.52
\`\`\`

\`units\` versteht viele Synonyme (\`mph\`, \`mi/h\`, \`kph\`, \`km/h\`, \`knots\`, \`m/s\` usw.) und verarbeitet zusammengesetzte Ausdrücke. Es ist der schnellste Weg für einmalige Geschwindigkeitsmathematik in einer Shell-Sitzung.

## Häufige Fragen

### Sind mph und Knoten dasselbe?

Nein. Ein **Knoten** ist eine Seemeile pro Stunde und wird in der Luft- und Schifffahrt verwendet. 1 Knoten = 1,852 kph, während 1 mph = 1,609344 kph. Also **1 Knoten ≈ 1,151 mph** — Knoten sind etwa 15 % schneller als mph. Piloten und Seeleute denken in Knoten, weil eine Seemeile einer Bogenminute entspricht, was die Navigation vereinfacht. Bodenfahrzeuge (Autos, Fahrräder) verwenden mph oder kph.

### Warum ist Mach in verschiedenen Höhen unterschiedlich?

**Mach 1** ist die Schallgeschwindigkeit, und die Schallgeschwindigkeit hängt von der Lufttemperatur ab (und leicht von Druck und Feuchtigkeit). Auf Meereshöhe bei 15 °C Lufttemperatur breitet sich Schall mit etwa **1.235 kph = 767 mph = 343 m/s** aus. In 36.000 ft (typische Reiseflughöhe von Jets) ist die Luft viel kälter (−56 °C), daher beträgt die Schallgeschwindigkeit nur etwa **1.062 kph = 660 mph**. Als die Concorde mit Mach 2 kreuzte, flog sie in der Höhe mit etwa 2.180 kph, nicht mit 2.470 kph.

### Was ist der Unterschied zwischen „mph" und „mi/h"?

Keiner. Es ist dieselbe Einheit. **mph** steht für „miles per hour", und **mi/h** ist das Symbol. Dasselbe gilt für **kph** (Kilometer pro Stunde) und **km/h**. Stilrichtlinien variieren: Der US-Stilrichtlinie verwendet typischerweise „mph", während der SI-Stil „km/h" bevorzugt. Beides ist korrekt.

### Wie schnell ist ein typisches Auto bei 100 kph?

100 kph ist das Tempolimit auf vielen europäischen Autobahnen (Autobahnen haben Abschnitte ohne Limit). Es sind ungefähr 62 mph. Ein typisches Familienauto erreicht 100 kph in 8–12 Sekunden. Ein Sportwagen schafft es in 3–5 Sekunden. Ein Hochleistungswagen (Bugatti, Koenigsegg) kann 100 kph in unter 3 Sekunden erreichen. Bei 100 kph legt ein Auto etwa 28 m pro Sekunde zurück, sodass eine 1-sekündige Ablenkung 28 m — etwa 7 Autolängen — bedeutet.

### Wie rechne ich Miles per Gallon in Liter pro 100 km um?

Das ist ein inverses Problem: Der US-Kraftstoffverbrauch wird in mpg angegeben (mehr = besser), während der europäische in L/100 km (weniger = besser) angegeben wird. Die Formel:

\`\`\`
L/100km = 235,215 / mpg
\`\`\`

Also 30 mpg = 7,84 L/100 km, und 50 mpg = 4,70 L/100 km. Die exakte Formel verwendet 1,609344 km pro Meile und 3,785412 L pro US-Gallone: 1 / (mpg × 1,609344 / 3,785412) = 3,785412 × 100 / (mpg × 1,609344) = 235,215 / mpg.

### Sind 100 mph schnell?

Für ein Auto auf der Autobahn sind 100 mph (161 kph) schnell — nur wenige Länder haben Straßen ohne Tempolimit, auf denen das normal ist (die meisten US-Interstates haben 70–80 mph Limits). Für ein Rennauto sind 100 mph langsam; ein F1 erreicht etwa 220 mph (354 kph). Für ein Flugzeug bewegt sich 100 mph kaum — selbst eine kleine Cessna kreuzt mit 140 mph. Der Kontext zählt.

## Fazit

Mph in kph ist eine der am einfachsten zu merkenden Umrechnungen. **1 mph = 1,609344 kph** ist exakt, und eine mentale Abkürzung (mph mit 1,6 multiplizieren) bringt Sie für den Alltag auf 0,6 % genau. Für gelegentliche Umrechnungen ist der [Geschwindigkeitsumrechner von UtilBoxx](/de/tools/unit/speed) privat, kostenlos und funktioniert offline, sobald er geladen ist. Für Stapelverarbeitung bewältigen Python und die \`units\`-CLI Tausende von Werten, ohne das Terminal zu verlassen. Und für gelegentliche Einmalumrechnungen geben Google oder ein Sprachassistent sofortige Antworten.

Die mentale Abkürzung: **60 mph ≈ 100 kph**, und **100 kph ≈ 60 mph**. Mit diesen beiden Ankern können Sie jedes Verkehrsschild im Kopf auf Plausibilität prüfen.`;

export const mphToKphPost: Record<string, BlogPost> = {
  en: {
    slug: "mph-to-kph-conversion",
    category: "Unit Tools",
    date: "2026-04-01",
    readTime: "3 min",
    title: "MPH to KPH Conversion: A Complete Guide",
    description: "Convert miles per hour to kilometers per hour, m/s, knots, and Mach. With travel context.",
    content: mphKphEn,
  },
  zh: {
    slug: "mph-to-kph-conversion",
    category: "单位工具",
    date: "2026-04-01",
    readTime: "3 分钟",
    title: "MPH 转 KPH 换算：完整指南",
    description: "在英里每小时、公里每小时、米每秒、节和马赫之间换算。附旅行场景。",
    content: mphKphZh,
  },
  ja: {
    slug: "mph-to-kph-conversion",
    category: "単位ツール",
    date: "2026-04-01",
    readTime: "3 分",
    title: "MPH から KPH への換算：完全ガイド",
    description: "マイル毎時、キロメートル毎時、m/s、ノット、マッハの間で換算。旅行の文脈とともに。",
    content: mphKphJa,
  },
  es: {
    slug: "mph-to-kph-conversion",
    category: "Herramientas de unidades",
    date: "2026-04-01",
    readTime: "3 min",
    title: "Conversión de MPH a KPH: Una guía completa",
    description: "Convierta entre millas por hora, kilómetros por hora, m/s, nudos y Mach. Con contexto de viaje.",
    content: mphKphEs,
  },
  pt: {
    slug: "mph-to-kph-conversion",
    category: "Ferramentas de unidades",
    date: "2026-04-01",
    readTime: "3 min",
    title: "Conversão de MPH para KPH: Um guia completo",
    description: "Converta entre milhas por hora, quilômetros por hora, m/s, nós e Mach. Com contexto de viagem.",
    content: mphKphPt,
  },
  fr: {
    slug: "mph-to-kph-conversion",
    category: "Outils d'unités",
    date: "2026-04-01",
    readTime: "3 min",
    title: "Conversion MPH en KPH : un guide complet",
    description: "Convertissez entre miles par heure, kilomètres par heure, m/s, nœuds et Mach. Avec un contexte de voyage.",
    content: mphKphFr,
  },
  de: {
    slug: "mph-to-kph-conversion",
    category: "Einheiten-Tools",
    date: "2026-04-01",
    readTime: "3 Min",
    title: "MPH in KPH umrechnen: Ein vollständiger Leitfaden",
    description: "Rechnen Sie zwischen Meilen pro Stunde, Kilometer pro Stunde, m/s, Knoten und Mach um. Mit Reise-Kontext.",
    content: mphKphDe,
  },
};
