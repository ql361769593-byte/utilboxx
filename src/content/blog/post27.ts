// Blog post: How to Convert Unix Timestamps to Dates (and Back)
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const unixTimestampEn = `## What is a Unix timestamp?

A **Unix timestamp** (also called Unix time, POSIX time, or epoch time) is the number of seconds that have elapsed since **00:00:00 UTC on January 1, 1970**, not counting leap seconds. That moment is called the **Unix epoch**.

For example:

- 0 = 1970-01-01 00:00:00 UTC (the epoch)
- 1,000,000,000 = 2001-09-09 01:46:40 UTC (the "billennium")
- 1,234,567,890 = 2009-02-13 23:31:30 UTC
- 1,700,000,000 = 2023-11-14 22:13:20 UTC
- 2,000,000,000 = 2033-05-18 03:33:20 UTC

Unix timestamps are everywhere in computing:

- **Databases**: PostgreSQL, MySQL, and SQLite all store time internally as Unix timestamps (or with reference to them).
- **File systems**: ext4, NTFS, and APFS store file mtimes as Unix timestamps.
- **APIs**: JSON APIs commonly return timestamps as integers, e.g., \`"created_at": 1700000000\`.
- **Logs**: Most logging systems emit timestamps in Unix format.
- **Programming languages**: PHP, Python, JavaScript, Go, Rust, and Java all have built-in support.

The reason Unix timestamps are popular: they are simple integers, easy to compare, easy to sort, timezone-independent (they always refer to UTC), and trivial to store. They also make arithmetic simple — to find the duration of two events, subtract their timestamps.

## How to read a Unix timestamp

The mental model: imagine a clock that started ticking at midnight UTC on January 1, 1970, and has been counting seconds ever since. The Unix timestamp is the reading on that clock.

\`\`\`
1 minute   = 60 seconds
1 hour     = 3,600 seconds
1 day      = 86,400 seconds   (24 × 60 × 60)
1 week     = 604,800 seconds  (7 × 86,400)
1 year     ≈ 31,536,000 seconds (365.25 × 86,400, average)
1 decade   ≈ 315,360,000 seconds
\`\`\`

A few mental anchors:

- **1,000,000,000** = 2001-09-09. The Unix billennium — the first second with 10 digits.
- **1,500,000,000** = 2017-07-14. The "1.5 billion" mark.
- **2,000,000,000** = 2033-05-18. The first 2-billion-second date.
- **The 2038 problem**: 32-bit signed integers overflow at 2,147,483,647, which is **2038-01-19 03:14:07 UTC**. After that, 32-bit Unix timestamps wrap around to negative values.

## The exact conversion formulas

### Timestamp to human date

\`\`\`
human_date = epoch + timestamp seconds (UTC)
local_date = human_date converted to local timezone
\`\`\`

In most programming languages:

\`\`\`python
import datetime
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00
local = datetime.datetime.fromtimestamp(ts)
# depends on your system timezone
\`\`\`

\`\`\`js
const ts = 1700000000;
const date = new Date(ts * 1000);  // JS uses milliseconds
// 2023-11-14T22:13:20.000Z
\`\`\`

### Human date to timestamp

\`\`\`
timestamp = (date - epoch) in seconds
\`\`\`

\`\`\`python
import datetime
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000
\`\`\`

\`\`\`js
const d = new Date("2023-11-14T22:13:20Z");
const ts = Math.floor(d.getTime() / 1000);
// 1700000000
\`\`\`

## Common timezone offsets (relative to UTC)

When working with timestamps, you often need to display in a specific timezone:

| Timezone                       | Abbreviation | Offset          | Example cities                    |
|--------------------------------|--------------|-----------------|----------------------------------|
| Coordinated Universal Time     | UTC          | 0               | London (winter), Reykjavik       |
| Eastern Standard Time          | EST          | UTC−5           | New York (winter)                |
| Eastern Daylight Time          | EDT          | UTC−4           | New York (summer)                |
| Pacific Standard Time          | PST          | UTC−8           | Los Angeles (winter)             |
| Pacific Daylight Time          | PDT          | UTC−7           | Los Angeles (summer)             |
| Central European Time          | CET          | UTC+1           | Paris (winter), Berlin           |
| Central European Summer Time   | CEST         | UTC+2           | Paris (summer), Berlin           |
| Japan Standard Time            | JST          | UTC+9           | Tokyo                            |
| China Standard Time            | CST          | UTC+8           | Beijing, Shanghai                |
| India Standard Time            | IST          | UTC+5:30        | Mumbai, Delhi                    |
| Australian Eastern Standard    | AEST         | UTC+10          | Sydney (winter)                  |
| Australian Eastern Daylight     | AEDT         | UTC+11          | Sydney (summer)                  |

Note that some countries (India, China) observe a single year-round offset with no daylight saving.

## Method 1: Use UtilBoxx's Time Converter (Recommended)

The fastest, most private, and most accurate way to convert Unix timestamps in your browser is the [UtilBoxx Time Converter](/en/tools/unit/time). It supports both seconds and milliseconds, displays in any timezone, and shows the corresponding ISO 8601 date, UTC, and local time. Everything runs in your browser — no server, no upload, no logs.

**How to use it:**

1. Go to [utilboxx.com/en/tools/unit/time](/en/tools/unit/time)
2. Type a Unix timestamp (in seconds) or a date string
3. The converted value appears instantly
4. Switch between timezones with one click
5. Copy the result

**Why we recommend this method:**

- **100% free**, no signup, no email, no ads
- **Privacy-first**: nothing leaves your browser
- **Bidirectional**: timestamp ↔ date in either direction
- **Multi-timezone**: see your timestamp in UTC, your local zone, or any zone
- **Handles milliseconds** for JavaScript-style timestamps
- **Works on any device** with a browser

If you work with APIs, logs, or databases that store time as Unix timestamps, this tool pays for itself the first week.

## Method 2: Python (datetime module)

Python's \`datetime\` module is the canonical tool for timestamp conversion. The two key functions are \`fromtimestamp()\` and \`timestamp()\`.

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# Convert timestamp to date (UTC)
ts = 1700000000
utc_date = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# Convert timestamp to date in a specific timezone
ny_tz = ZoneInfo("America/New_York")
ny_date = datetime.datetime.fromtimestamp(ts, tz=ny_tz)
# 2023-11-14 17:13:20-05:00

# Convert date to timestamp
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# Now: current timestamp
now_ts = int(datetime.datetime.now(tz=datetime.timezone.utc).timestamp())

# Format date as ISO 8601
print(utc_date.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Python 3.9+ also has the simpler \`datetime.fromtimestamp(ts, tz=UTC)\` form, and the \`zoneinfo\` module (replacing the older \`pytz\`) makes timezone handling easy.

## Method 3: Bash / command line

The \`date\` command on macOS and Linux can both parse and emit Unix timestamps.

\`\`\`bash
# Convert a Unix timestamp to a human-readable date (macOS / BSD)
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Convert a Unix timestamp (Linux / GNU date)
date -d @1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Get the current Unix timestamp
date +%s
# 1700000000 (or whatever it is now)

# Convert a date string to a Unix timestamp (GNU)
date -d "2023-11-14 22:13:20 UTC" +%s
# 1700000000

# Convert a date string to a Unix timestamp (macOS)
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s
# 1700000000

# Display in a specific timezone
TZ="America/New_York" date -d @1700000000
# Tue Nov 14 17:13:20 EST 2023
\`\`\`

The syntax differs between macOS and Linux. On macOS, \`-r\` reads a timestamp; on Linux, \`-d @...\` reads a timestamp and \`-d "..."\` parses a date. For scripting, the GNU form (Linux) is friendlier; the macOS form is more cumbersome but works.

## Method 4: JavaScript (in the browser or Node.js)

JavaScript uses **milliseconds** for Unix timestamps, not seconds. Multiply by 1,000 going from seconds to milliseconds.

\`\`\`js
// Current timestamp in milliseconds
const now = Date.now();
// e.g., 1700000000000

// Convert seconds to milliseconds and create a Date
const ts = 1700000000;
const date = new Date(ts * 1000);
// 2023-11-14T22:13:20.000Z

// Display in a specific timezone using Intl
console.log(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
// 11/14/2023, 5:13:20 PM

// Display as ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z

// Convert date to timestamp (seconds)
const d = new Date("2023-11-14T22:13:20Z");
const ts2 = Math.floor(d.getTime() / 1000);
// 1700000000

// Parse various formats
new Date("2023-11-14");           // midnight UTC
new Date("2023-11-14T22:13:20Z"); // 22:13:20 UTC
new Date(1700000000 * 1000);      // from milliseconds
new Date("Nov 14, 2023 22:13:20");// locale-dependent parsing (avoid!)
\`\`\`

JavaScript's \`Date\` object is famously quirky. For serious work, use a library like \`date-fns\`, \`Luxon\`, or \`Day.js\`. For quick conversions, the built-in \`Date\` is fine.

## Common questions

### Why is the Unix epoch January 1, 1970?

It is the date the Unix operating system was first implemented. Ken Thompson and Dennis Ritchie chose it arbitrarily when designing Unix at Bell Labs in 1969-1970. There is no astronomical or mathematical reason; it was simply the start of the decade they were working in. Several other systems have chosen different epochs: Windows FILETIME uses January 1, 1601; macOS HFS+ used January 1, 1904; GPS uses January 6, 1980.

### What is the 2038 problem?

The **2038 problem** (also called Y2K38) is the 32-bit signed integer overflow that occurs on **January 19, 2038, at 03:14:07 UTC**. A 32-bit signed integer can hold values up to 2,147,483,647. One second later, it overflows to −2,147,483,648, which is interpreted as 1901-12-13 20:45:52 UTC. Any system still using 32-bit Unix timestamps (mostly embedded devices, older databases, and some file systems) will break unless updated.

The fix is straightforward: switch to 64-bit integers, which extend the Unix timestamp range by 290 billion years. Most modern systems have already done this; the problem is mainly with legacy and embedded systems.

### Are Unix timestamps in seconds or milliseconds?

It depends on the language:

- **Seconds**: C, Python, Go, Rust, Java (traditionally), shell, SQL
- **Milliseconds**: JavaScript, Java (java.time.Instant), some databases

JavaScript is the major outlier with milliseconds, which leads to bugs when JavaScript code is mixed with code from other languages. Always clarify the unit. The UtilBoxx converter handles both with a single toggle.

### How do leap seconds affect Unix timestamps?

Strictly speaking, **Unix timestamps ignore leap seconds**. They count every second as if there were exactly 86,400 per day. Real-world UTC has occasional leap seconds (added to keep atomic time aligned with Earth's rotation), but Unix time does not include them. This means Unix time gradually drifts from UTC by a fraction of a second every few years.

In practice, this rarely matters for application code. NTP (Network Time Protocol) handles the discrepancy. If you need strict TAI or atomic time, Unix timestamps are not the right tool.

### What is "ISO 8601"?

ISO 8601 is an international standard for date and time formats, designed to be unambiguous and machine-readable. Examples:

- \`2023-11-14\` (date only)
- \`2023-11-14T22:13:20\` (date and time, no timezone)
- \`2023-11-14T22:13:20Z\` (UTC, "Z" = "Zulu time")
- \`2023-11-14T22:13:20+05:00\` (with timezone offset)
- \`2023-11-14T22:13:20.123Z\` (with milliseconds)
- \`20231114T221320Z\` (compact form, no separators)

ISO 8601 is the recommended format for storing and exchanging date/time values because it sorts lexicographically and parses unambiguously. Most APIs use it.

### How do I get the current Unix timestamp?

In every major language:

\`\`\`bash
# bash
date +%s
\`\`\`

\`\`\`python
import time
time.time()  # 1700000000.123 (float, with fractional seconds)
int(time.time())  # 1700000000 (integer seconds)
\`\`\`

\`\`\`js
Date.now() / 1000  // 1700000000.123
Math.floor(Date.now() / 1000)  // 1700000000
\`\`\`

## Conclusion

Unix timestamps are the universal language of time in computing. They are simple integers, easy to compare, easy to store, and timezone-independent. The epoch is January 1, 1970, and timestamps count seconds since then.

For occasional conversions, the [UtilBoxx Time Converter](/en/tools/unit/time) is private, free, and works offline once loaded. For batch or scripted work, Python's \`datetime\` or the bash \`date\` command handle any volume of data. For interactive work, JavaScript's \`Date\` is built into every browser.

The mental shortcut: **1,000,000,000 = 2001** (Unix billennium), **1,500,000,000 = 2017**, and **2,000,000,000 = 2033**. With these anchors, you can estimate the year of any 10-digit timestamp in your head. And remember: in 12 years, the 2038 problem arrives, so audit your 32-bit timestamps now.`;

const unixTimestampZh = `## 什么是 Unix 时间戳？

**Unix 时间戳**（也称为 Unix time、POSIX time 或 epoch time）是从 **1970 年 1 月 1 日 UTC 00:00:00** 起经过的秒数，不包括闰秒。这一刻被称为 **Unix 纪元**。

例如：

- 0 = 1970-01-01 00:00:00 UTC（纪元）
- 1,000,000,000 = 2001-09-09 01:46:40 UTC（"十亿秒"）
- 1,234,567,890 = 2009-02-13 23:31:30 UTC
- 1,700,000,000 = 2023-11-14 22:13:20 UTC
- 2,000,000,000 = 2033-05-18 03:33:20 UTC

Unix 时间戳在计算中无处不在：

- **数据库**：PostgreSQL、MySQL 和 SQLite 内部都把时间存储为 Unix 时间戳（或以其为参考）。
- **文件系统**：ext4、NTFS 和 APFS 把文件修改时间存储为 Unix 时间戳。
- **API**：JSON API 通常以整数形式返回时间戳，例如 \`"created_at": 1700000000\`。
- **日志**：大多数日志系统以 Unix 格式发出时间戳。
- **编程语言**：PHP、Python、JavaScript、Go、Rust 和 Java 都有内置支持。

Unix 时间戳流行的原因是：它们是简单的整数，易于比较、排序、与时区无关（始终指 UTC）并且易于存储。它们也使算术简单 —— 要找到两个事件的持续时间，相减它们的时间戳即可。

## 如何读 Unix 时间戳

心理模型：想象一个从 1970 年 1 月 1 日 UTC 午夜开始滴答的时钟，此后一直在计数秒数。Unix 时间戳就是那个时钟的读数。

\`\`\`
1 分钟   = 60 秒
1 小时   = 3,600 秒
1 天     = 86,400 秒   （24 × 60 × 60）
1 周     = 604,800 秒  （7 × 86,400）
1 年     ≈ 31,536,000 秒 （平均 365.25 × 86,400）
1 十年   ≈ 315,360,000 秒
\`\`\`

一些心算锚点：

- **1,000,000,000** = 2001-09-09。Unix 十亿秒 —— 第一个 10 位数的秒。
- **1,500,000,000** = 2017-07-14。"15 亿" 标记。
- **2,000,000,000** = 2033-05-18。第一个 20 亿秒日期。
- **2038 问题**：32 位有符号整数在 2,147,483,647 处溢出，即 **2038-01-19 03:14:07 UTC**。之后，32 位 Unix 时间戳会环绕到负值。

## 精确换算公式

### 时间戳转人类日期

\`\`\`
human_date = epoch + timestamp 秒（UTC）
local_date = human_date 转换为本地时区
\`\`\`

在大多数编程语言中：

\`\`\`python
import datetime
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00
local = datetime.datetime.fromtimestamp(ts)
# 取决于你的系统时区
\`\`\`

\`\`\`js
const ts = 1700000000;
const date = new Date(ts * 1000);  // JS 使用毫秒
// 2023-11-14T22:13:20.000Z
\`\`\`

### 人类日期转时间戳

\`\`\`
timestamp = (date - epoch) 的秒数
\`\`\`

\`\`\`python
import datetime
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000
\`\`\`

\`\`\`js
const d = new Date("2023-11-14T22:13:20Z");
const ts = Math.floor(d.getTime() / 1000);
// 1700000000
\`\`\`

## 常见时区偏移（相对于 UTC）

处理时间戳时，你经常需要以特定时区显示：

| 时区                          | 缩写   | 偏移            | 示例城市                     |
|------------------------------|--------|-----------------|----------------------------|
| 协调世界时                    | UTC    | 0               | 伦敦（冬），雷克雅未克       |
| 美国东部标准时间              | EST    | UTC−5           | 纽约（冬）                  |
| 美国东部夏令时                | EDT    | UTC−4           | 纽约（夏）                  |
| 太平洋标准时间                | PST    | UTC−8           | 洛杉矶（冬）                |
| 太平洋夏令时                  | PDT    | UTC−7           | 洛杉矶（夏）                |
| 中欧时间                      | CET    | UTC+1           | 巴黎（冬），柏林            |
| 中欧夏令时                    | CEST   | UTC+2           | 巴黎（夏），柏林            |
| 日本标准时间                  | JST    | UTC+9           | 东京                        |
| 中国标准时间                  | CST    | UTC+8           | 北京、上海                  |
| 印度标准时间                  | IST    | UTC+5:30        | 孟买、德里                  |
| 澳大利亚东部标准时间          | AEST   | UTC+10          | 悉尼（冬）                  |
| 澳大利亚东部夏令时            | AEDT   | UTC+11          | 悉尼（夏）                  |

注意：一些国家（印度、中国）全年采用单一偏移，不实行夏令时。

## 方法一：使用 UtilBoxx 时间换算工具（推荐）

在浏览器中换算 Unix 时间戳最快、最私密、最准确的方式是 [UtilBoxx 时间换算工具](/zh/tools/unit/time)。它支持秒和毫秒，在任何时区显示，并显示相应的 ISO 8601 日期、UTC 和本地时间。所有计算在浏览器本地完成 —— 没有服务器、没有上传、没有日志。

**使用方法：**

1. 打开 [utilboxx.com/zh/tools/unit/time](/zh/tools/unit/time)
2. 输入 Unix 时间戳（以秒为单位）或日期字符串
3. 换算后的值立即出现
4. 一次点击即可切换时区
5. 复制结果

**为什么推荐这个方法：**

- **100% 免费**，无注册、无邮箱、无广告
- **隐私优先**：不离开你的浏览器
- **双向**：时间戳 ↔ 日期任一方向
- **多时区**：在 UTC、本地时区或任何时区查看你的时间戳
- **处理毫秒**，用于 JavaScript 风格的时间戳
- **任何有浏览器的设备都能用**

如果你使用存储时间为 Unix 时间戳的 API、日志或数据库，这个工具第一周就值回票价。

## 方法二：Python（datetime 模块）

Python 的 \`datetime\` 模块是时间戳换算的规范工具。两个关键函数是 \`fromtimestamp()\` 和 \`timestamp()\`。

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# 时间戳转日期（UTC）
ts = 1700000000
utc_date = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# 时间戳转特定时区的日期
ny_tz = ZoneInfo("America/New_York")
ny_date = datetime.datetime.fromtimestamp(ts, tz=ny_tz)
# 2023-11-14 17:13:20-05:00

# 日期转时间戳
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# 现在：当前时间戳
now_ts = int(datetime.datetime.now(tz=datetime.timezone.utc).timestamp())

# 将日期格式化为 ISO 8601
print(utc_date.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Python 3.9+ 也有更简单的 \`datetime.fromtimestamp(ts, tz=UTC)\` 形式，\`zoneinfo\` 模块（取代较老的 \`pytz\`）使时区处理变得简单。

## 方法三：Bash / 命令行

macOS 和 Linux 上的 \`date\` 命令既可以解析也可以发出 Unix 时间戳。

\`\`\`bash
# 将 Unix 时间戳转换为人类可读的日期（macOS / BSD）
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# 将 Unix 时间戳转换（Linux / GNU date）
date -d @1700000000
# Tue Nov 14 22:13:20 UTC 2023

# 获取当前 Unix 时间戳
date +%s
# 1700000000（或其他当前值）

# 将日期字符串转换为 Unix 时间戳（GNU）
date -d "2023-11-14 22:13:20 UTC" +%s
# 1700000000

# 将日期字符串转换为 Unix 时间戳（macOS）
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s
# 1700000000

# 以特定时区显示
TZ="America/New_York" date -d @1700000000
# Tue Nov 14 17:13:20 EST 2023
\`\`\`

macOS 和 Linux 之间的语法不同。在 macOS 上，\`-r\` 读取时间戳；在 Linux 上，\`-d @...\` 读取时间戳，\`-d "..."\` 解析日期。对于脚本编写，GNU 形式（Linux）更友好；macOS 形式更繁琐但能用。

## 方法四：JavaScript（在浏览器或 Node.js 中）

JavaScript 对 Unix 时间戳使用**毫秒**而非秒。从秒转到毫秒时乘以 1,000。

\`\`\`js
// 当前时间戳（毫秒）
const now = Date.now();
// 例如，1700000000000

// 将秒转换为毫秒并创建 Date
const ts = 1700000000;
const date = new Date(ts * 1000);
// 2023-11-14T22:13:20.000Z

// 使用 Intl 在特定时区显示
console.log(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
// 11/14/2023, 5:13:20 PM

// 显示为 ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z

// 将日期转换为时间戳（秒）
const d = new Date("2023-11-14T22:13:20Z");
const ts2 = Math.floor(d.getTime() / 1000);
// 1700000000

// 解析各种格式
new Date("2023-11-14");           // UTC 午夜
new Date("2023-11-14T22:13:20Z"); // 22:13:20 UTC
new Date(1700000000 * 1000);      // 从毫秒
new Date("Nov 14, 2023 22:13:20");// 区域相关解析（避免！）
\`\`\`

JavaScript 的 \`Date\` 对象是出了名的诡异。对于严肃的工作，使用 \`date-fns\`、\`Luxon\` 或 \`Day.js\` 这样的库。对于快速换算，内置的 \`Date\` 没问题。

## 常见问题

### 为什么 Unix 纪元是 1970 年 1 月 1 日？

这是 Unix 操作系统首次实现的日期。Ken Thompson 和 Dennis Ritchie 在 1969-1970 年于贝尔实验室设计 Unix 时随意选择了它。没有天文或数学上的原因；这只是他们工作时十年的开始。其他几个系统选择了不同的纪元：Windows FILETIME 使用 1601 年 1 月 1 日；macOS HFS+ 使用 1904 年 1 月 1 日；GPS 使用 1980 年 1 月 6 日。

### 什么是 2038 问题？

**2038 问题**（也称为 Y2K38）是发生在 **2038 年 1 月 19 日 UTC 03:14:07** 的 32 位有符号整数溢出。32 位有符号整数最大可容纳 2,147,483,647。一秒后，它溢出到 −2,147,483,648，被解释为 1901-12-13 20:45:52 UTC。任何仍在使用 32 位 Unix 时间戳的系统（主要是嵌入式设备、旧数据库和某些文件系统）若不更新就会崩溃。

修复方法很直接：切换到 64 位整数，将 Unix 时间戳范围延长 2900 亿年。大多数现代系统已经这样做了；问题主要在于遗留和嵌入式系统。

### Unix 时间戳是秒还是毫秒？

取决于语言：

- **秒**：C、Python、Go、Rust、Java（传统上）、shell、SQL
- **毫秒**：JavaScript、Java（java.time.Instant）、某些数据库

JavaScript 是使用毫秒的主要异类，这导致当 JavaScript 代码与其他语言的代码混合时会出现 bug。请始终澄清单位。UtilBoxx 换算器通过单一开关处理两者。

### 闰秒如何影响 Unix 时间戳？

严格来说，**Unix 时间戳忽略闰秒**。它们把每天算作正好 86,400 秒。现实世界的 UTC 有偶尔的闰秒（添加以保持原子时间与地球自转一致），但 Unix 时间不包括它们。这意味着 Unix 时间每隔几年就会从 UTC 漂移一小部分秒。

实际上，这对应用代码很少有影响。NTP（网络时间协议）处理这种差异。如果你需要严格的 TAI 或原子时间，Unix 时间戳不是正确的工具。

### 什么是"ISO 8601"？

ISO 8601 是日期和时间格式的国际标准，旨在无歧义且机器可读。示例：

- \`2023-11-14\`（仅日期）
- \`2023-11-14T22:13:20\`（日期和时间，无时区）
- \`2023-11-14T22:13:20Z\`（UTC，"Z" 代表 "Zulu time"）
- \`2023-11-14T22:13:20+05:00\`（带时区偏移）
- \`2023-11-14T22:13:20.123Z\`（带毫秒）
- \`20231114T221320Z\`（紧凑形式，无分隔符）

ISO 8601 是存储和交换日期/时间值的推荐格式，因为它能按字典序排序并能无歧义地解析。大多数 API 都使用它。

### 如何获取当前 Unix 时间戳？

在所有主要语言中：

\`\`\`bash
# bash
date +%s
\`\`\`

\`\`\`python
import time
time.time()  # 1700000000.123（浮点数，带小数秒）
int(time.time())  # 1700000000（整数秒）
\`\`\`

\`\`\`js
Date.now() / 1000  // 1700000000.123
Math.floor(Date.now() / 1000)  // 1700000000
\`\`\`

## 结论

Unix 时间戳是计算中时间的通用语言。它们是简单的整数，易于比较、存储，且与时区无关。纪元是 1970 年 1 月 1 日，时间戳从那时起按秒计数。

偶尔换算的话，[UtilBoxx 时间换算工具](/zh/tools/unit/time) 私密、免费、加载后离线可用。批量或脚本工作用 Python 的 \`datetime\` 或 bash 的 \`date\` 命令可以处理任何数据量。交互式工作用 JavaScript 的 \`Date\`，它内置在每个浏览器中。

心算捷径：**1,000,000,000 = 2001**（Unix 十亿秒），**1,500,000,000 = 2017**，**2,000,000,000 = 2033**。有了这些锚点，你可以在脑中估算任何 10 位数时间戳的年份。记住：再过 12 年，2038 问题就会到来，所以现在就审计你的 32 位时间戳。`;

const unixTimestampJa = `## Unix タイムスタンプとは？

**Unix タイムスタンプ**（Unix time、POSIX time、epoch time とも呼ばれます）は、**1970 年 1 月 1 日 UTC 00:00:00** から経過した秒数で、閏秒は含みません。この瞬間は **Unix エポック**と呼ばれます。

例えば：

- 0 = 1970-01-01 00:00:00 UTC（エポック）
- 1,000,000,000 = 2001-09-09 01:46:40 UTC（"10 億秒"）
- 1,234,567,890 = 2009-02-13 23:31:30 UTC
- 1,700,000,000 = 2023-11-14 22:13:20 UTC
- 2,000,000,000 = 2033-05-18 03:33:20 UTC

Unix タイムスタンプはコンピューティングのあらゆるところにあります：

- **データベース**：PostgreSQL、MySQL、SQLite はすべて時間を Unix タイムスタンプとして（またはそれを参照して）内部に保存します。
- **ファイルシステム**：ext4、NTFS、APFS はファイル更新時刻を Unix タイムスタンプとして保存します。
- **API**：JSON API はタイムスタンプを整数で返すことが一般的です（例：\`"created_at": 1700000000\`）。
- **ログ**：ほとんどのログシステムは Unix 形式でタイムスタンプを出力します。
- **プログラミング言語**：PHP、Python、JavaScript、Go、Rust、Java にはすべて組み込みサポートがあります。

Unix タイムスタンプが普及している理由：それらは単純な整数で、比較、並べ替えが容易で、タイムゾーンに依存せず（常に UTC を参照）、保存が簡単です。また、算術も簡単になります —— 2 つのイベントの期間を見つけるには、タイムスタンプを減算するだけです。

## Unix タイムスタンプの読み方

メンタルモデル：1970 年 1 月 1 日 UTC 真夜中から動き始めた時計を想像してください。その時計はその後ずっと秒を数え続けています。Unix タイムスタンプはその時計の読み値です。

\`\`\`
1 分   = 60 秒
1 時間   = 3,600 秒
1 日     = 86,400 秒   （24 × 60 × 60）
1 週     = 604,800 秒  （7 × 86,400）
1 年     ≈ 31,536,000 秒 （平均 365.25 × 86,400）
1 十年   ≈ 315,360,000 秒
\`\`\`

いくつかの暗算アンカー：

- **1,000,000,000** = 2001-09-09。Unix 10 億秒 —— 10 桁の秒の最初。
- **1,500,000,000** = 2017-07-14。「15 億」マーク。
- **2,000,000,000** = 2033-05-18。最初の 20 億秒の日付。
- **2038 年問題**：32 ビット符号付き整数は 2,147,483,647 でオーバーフローし、**2038-01-19 03:14:07 UTC** となります。その後、32 ビット Unix タイムスタンプは負の値にラップアラウンドします。

## 正確な換算公式

### タイムスタンプから人間可読日付へ

\`\`\`
human_date = epoch + タイムスタンプ秒（UTC）
local_date = human_date をローカルタイムゾーンに変換
\`\`\`

ほとんどのプログラミング言語で：

\`\`\`python
import datetime
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00
local = datetime.datetime.fromtimestamp(ts)
# システムのタイムゾーンに依存
\`\`\`

\`\`\`js
const ts = 1700000000;
const date = new Date(ts * 1000);  // JS はミリ秒を使用
// 2023-11-14T22:13:20.000Z
\`\`\`

### 人間可読日付からタイムスタンプへ

\`\`\`
timestamp = (date - epoch) の秒数
\`\`\`

\`\`\`python
import datetime
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000
\`\`\`

\`\`\`js
const d = new Date("2023-11-14T22:13:20Z");
const ts = Math.floor(d.getTime() / 1000);
// 1700000000
\`\`\`

## 一般的なタイムゾーンオフセット（UTC 基準）

タイムスタンプを扱うとき、特定のタイムゾーンで表示する必要がよくあります：

| タイムゾーン                    | 略称   | オフセット       | 例となる都市                |
|------------------------------|--------|-----------------|---------------------------|
| 協定世界時                    | UTC    | 0               | ロンドン（冬）、レイキャビク |
| 米国東部標準時                | EST    | UTC−5           | ニューヨーク（冬）         |
| 米国東部夏時間                | EDT    | UTC−4           | ニューヨーク（夏）         |
| 太平洋標準時                  | PST    | UTC−8           | ロサンゼルス（冬）         |
| 太平洋夏時間                  | PDT    | UTC−7           | ロサンゼルス（夏）         |
| 中央ヨーロッパ時間            | CET    | UTC+1           | パリ（冬）、ベルリン       |
| 中央ヨーロッパ夏時間          | CEST   | UTC+2           | パリ（夏）、ベルリン       |
| 日本標準時                    | JST    | UTC+9           | 東京                       |
| 中国標準時                    | CST    | UTC+8           | 北京、上海                 |
| インド標準時                  | IST    | UTC+5:30        | ムンバイ、デリー           |
| オーストラリア東部標準時      | AEST   | UTC+10          | シドニー（冬）             |
| オーストラリア東部夏時間      | AEDT   | UTC+11          | シドニー（夏）             |

一部の国（インド、中国）は年間を通じて単一のオフセットを使用し、夏時間はありません。

## 方法 1：UtilBoxx 時間換算ツール（推奨）

ブラウザで Unix タイムスタンプを換算する最も速く、最もプライベートで、最も正確な方法は [UtilBoxx 時間換算ツール](/ja/tools/unit/time) です。秒とミリ秒の両方をサポートし、任意のタイムゾーンで表示し、対応する ISO 8601 日付、UTC、ローカル時間を表示します。すべてブラウザ内で動作します。サーバーも、アップロードも、ログもなし。

**使い方：**

1. [utilboxx.com/ja/tools/unit/time](/ja/tools/unit/time) を開く
2. Unix タイムスタンプ（秒単位）または日付文字列を入力
3. 換算値が即座に表示される
4. ワンクリックでタイムゾーンを切り替え
5. 結果をコピー

**この方法を推奨する理由：**

- **100% 無料**、登録不要、メールアドレス不要、広告なし
- **プライバシー最優先**：ブラウザから出ない
- **双方向**：タイムスタンプ ↔ 日付の双方向
- **マルチタイムゾーン**：UTC、ローカルゾーン、または任意のゾーンでタイムスタンプを表示
- **ミリ秒対応**、JavaScript スタイルのタイムスタンプ用
- **ブラウザがあるあらゆるデバイスで動作**

時間を Unix タイムスタンプとして保存する API、ログ、データベースを扱うなら、このツールは最初の週で元が取れます。

## 方法 2：Python（datetime モジュール）

Python の \`datetime\` モジュールはタイムスタンプ換算の正規ツールです。2 つの重要な関数は \`fromtimestamp()\` と \`timestamp()\` です。

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# タイムスタンプを日付に変換（UTC）
ts = 1700000000
utc_date = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# タイムスタンプを特定のタイムゾーンの日付に変換
ny_tz = ZoneInfo("America/New_York")
ny_date = datetime.datetime.fromtimestamp(ts, tz=ny_tz)
# 2023-11-14 17:13:20-05:00

# 日付をタイムスタンプに変換
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# 現在：現在のタイムスタンプ
now_ts = int(datetime.datetime.now(tz=datetime.timezone.utc).timestamp())

# 日付を ISO 8601 としてフォーマット
print(utc_date.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Python 3.9+ にはよりシンプルな \`datetime.fromtimestamp(ts, tz=UTC)\` 形式もあり、\`zoneinfo\` モジュール（古い \`pytz\` を置き換え）がタイムゾーン処理を容易にします。

## 方法 3：Bash / コマンドライン

macOS と Linux の \`date\` コマンドは Unix タイムスタンプを解析も出力もできます。

\`\`\`bash
# Unix タイムスタンプを人間が読める日付に変換（macOS / BSD）
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Unix タイムスタンプを変換（Linux / GNU date）
date -d @1700000000
# Tue Nov 14 22:13:20 UTC 2023

# 現在の Unix タイムスタンプを取得
date +%s
# 1700000000（または現在値）

# 日付文字列を Unix タイムスタンプに変換（GNU）
date -d "2023-11-14 22:13:20 UTC" +%s
# 1700000000

# 日付文字列を Unix タイムスタンプに変換（macOS）
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s
# 1700000000

# 特定のタイムゾーンで表示
TZ="America/New_York" date -d @1700000000
# Tue Nov 14 17:13:20 EST 2023
\`\`\`

macOS と Linux で構文が異なります。macOS では \`-r\` がタイムスタンプを読み取ります。Linux では \`-d @...\` がタイムスタンプを読み取り、\`-d "..."\` が日付を解析します。スクリプト作成には GNU 形式（Linux）の方がフレンドリー。macOS 形式はより面倒ですが動作します。

## 方法 4：JavaScript（ブラウザまたは Node.js）

JavaScript は Unix タイムスタンプに**ミリ秒**を使用し、秒ではありません。秒からミリ秒に変換するには 1,000 を掛けます。

\`\`\`js
// 現在のタイムスタンプ（ミリ秒）
const now = Date.now();
// 例：1700000000000

// 秒をミリ秒に変換して Date を作成
const ts = 1700000000;
const date = new Date(ts * 1000);
// 2023-11-14T22:13:20.000Z

// Intl を使って特定のタイムゾーンで表示
console.log(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
// 11/14/2023, 5:13:20 PM

// ISO 8601 として表示
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z

// 日付をタイムスタンプ（秒）に変換
const d = new Date("2023-11-14T22:13:20Z");
const ts2 = Math.floor(d.getTime() / 1000);
// 1700000000

// さまざまな形式を解析
new Date("2023-11-14");           // UTC 真夜中
new Date("2023-11-14T22:13:20Z"); // 22:13:20 UTC
new Date(1700000000 * 1000);      // ミリ秒から
new Date("Nov 14, 2023 22:13:20");// ロケール依存の解析（避ける！）
\`\`\`

JavaScript の \`Date\` オブジェクトは有名なほど風変わりです。本格的な作業には \`date-fns\`、\`Luxon\`、\`Day.js\` のようなライブラリを使用してください。迅速な換算には組み込みの \`Date\` で十分です。

## よくある質問

### なぜ Unix エポックは 1970 年 1 月 1 日なのか？

Unix オペレーティングシステムが最初に実装された日付です。Ken Thompson と Dennis Ritchie は 1969-1970 年にベル研究所で Unix を設計する際に任意に選びました。天文学的または数学的な理由はありません。彼らが作業していた 10 年の始まりにすぎません。他のいくつかのシステムは異なるエポックを選んでいます：Windows FILETIME は 1601 年 1 月 1 日を使用。macOS HFS+ は 1904 年 1 月 1 日を使用。GPS は 1980 年 1 月 6 日を使用します。

### 2038 年問題とは何ですか？

**2038 年問題**（Y2K38 とも呼ばれます）は **2038 年 1 月 19 日 UTC 03:14:07** に発生する 32 ビット符号付き整数のオーバーフローです。32 ビット符号付き整数は最大 2,147,483,647 まで保持できます。1 秒後、オーバーフローして −2,147,483,648 になり、これは 1901-12-13 20:45:52 UTC として解釈されます。32 ビット Unix タイムスタンプを使い続けるシステム（主に組み込みデバイス、古いデータベース、一部のファイルシステム）は更新されなければ壊れます。

修正は簡単です：64 ビット整数に切り替えれば、Unix タイムスタンプの範囲が 2900 億年延びます。ほとんどの現代システムはすでにこれを行っています。問題は主にレガシーと組み込みシステムです。

### Unix タイムスタンプは秒とミリ秒のどちらですか？

言語によって異なります：

- **秒**：C、Python、Go、Rust、Java（伝統的に）、shell、SQL
- **ミリ秒**：JavaScript、Java（java.time.Instant）、一部のデータベース

JavaScript がミリ秒を使う主な異端者で、JavaScript のコードが他の言語のコードと混在するときにバグを引き起こします。常に単位を明確にしてください。UtilBoxx 換算ツールは単一のトグルで両方を処理します。

### 閏秒は Unix タイムスタンプにどう影響しますか？

厳密に言えば、**Unix タイムスタンプは閏秒を無視します**。毎日が正確に 86,400 秒であるかのように秒を数えます。現実世界の UTC には時折閏秒がありますが（原子時間と地球の自転を一致させるために追加される）、Unix 時間には含まれません。これは、Unix 時間が数年ごとに UTC から数分の一秒ずつ徐々にドリフトすることを意味します。

実際には、これがアプリケーションコードに影響することはほとんどありません。NTP（ネットワーク時刻プロトコル）がこの不一致を処理します。厳密な TAI や原子時間が必要な場合は、Unix タイムスタンプは適切なツールではありません。

### "ISO 8601"とは何ですか？

ISO 8601 は、曖昧さがなく機械可読な日付と時刻の形式を設計した国際規格です。例：

- \`2023-11-14\`（日付のみ）
- \`2023-11-14T22:13:20\`（日付と時刻、タイムゾーンなし）
- \`2023-11-14T22:13:20Z\`（UTC、"Z" は "Zulu time"）
- \`2023-11-14T22:13:20+05:00\`（タイムゾーンオフセット付き）
- \`2023-11-14T22:13:20.123Z\`（ミリ秒付き）
- \`20231114T221320Z\`（コンパクト形式、区切りなし）

ISO 8601 は、辞書順でソートでき、曖昧さなく解析できるため、日付/時刻値を保存・交換するための推奨形式です。ほとんどの API で使用されています。

### 現在の Unix タイムスタンプを取得するには？

すべての主要言語で：

\`\`\`bash
# bash
date +%s
\`\`\`

\`\`\`python
import time
time.time()  # 1700000000.123（浮動小数点、小数秒付き）
int(time.time())  # 1700000000（整数秒）
\`\`\`

\`\`\`js
Date.now() / 1000  // 1700000000.123
Math.floor(Date.now() / 1000)  // 1700000000
\`\`\`

## まとめ

Unix タイムスタンプはコンピューティングにおける時間の普遍言語です。これらは単純な整数で、比較、格納が容易で、タイムゾーンに依存しません。エポックは 1970 年 1 月 1 日で、タイムスタンプはそこから秒単位で数えます。

たまに換算するなら、[UtilBoxx 時間換算ツール](/ja/tools/unit/time) はプライベートで、無料で、読み込み後はオフラインで動作します。バッチやスクリプト作業には Python の \`datetime\` または bash の \`date\` コマンドが任意のデータ量を処理できます。対話的な作業には、JavaScript の \`Date\` がすべてのブラウザに組み込まれています。

暗算の近道：**1,000,000,000 = 2001**（Unix 10 億秒）、**1,500,000,000 = 2017**、**2,000,000,000 = 2033**。これらのアンカーがあれば、任意の 10 桁のタイムスタンプの年を頭の中で推定できます。そして覚えておいてください：12 年後に 2038 年問題がやってくるので、今すぐ 32 ビットタイムスタンプを監査してください。`;

const unixTimestampEs = `## ¿Qué es un timestamp Unix?

Un **timestamp Unix** (también llamado tiempo Unix, tiempo POSIX o tiempo epoch) es el número de segundos que han transcurrido desde **00:00:00 UTC del 1 de enero de 1970**, sin contar los segundos intercalares. Ese momento se llama **epoch Unix**.

Por ejemplo:

- 0 = 1970-01-01 00:00:00 UTC (la epoch)
- 1.000.000.000 = 2001-09-09 01:46:40 UTC (el "billonio")
- 1.234.567.890 = 2009-02-13 23:31:30 UTC
- 1.700.000.000 = 2023-11-14 22:13:20 UTC
- 2.000.000.000 = 2033-05-18 03:33:20 UTC

Los timestamps Unix están en todas partes de la informática:

- **Bases de datos**: PostgreSQL, MySQL y SQLite almacenan el tiempo internamente como timestamps Unix (o con referencia a ellos).
- **Sistemas de archivos**: ext4, NTFS y APFS almacenan los mtimes de archivo como timestamps Unix.
- **APIs**: Las APIs JSON comúnmente devuelven timestamps como enteros, p. ej., \`"created_at": 1700000000\`.
- **Logs**: La mayoría de los sistemas de logging emiten timestamps en formato Unix.
- **Lenguajes de programación**: PHP, Python, JavaScript, Go, Rust y Java tienen soporte integrado.

La razón por la que los timestamps Unix son populares: son enteros simples, fáciles de comparar, fáciles de ordenar, independientes de la zona horaria (siempre se refieren a UTC) y triviales de almacenar. También hacen la aritmética simple: para encontrar la duración de dos eventos, reste sus timestamps.

## Cómo leer un timestamp Unix

El modelo mental: imagine un reloj que comenzó a contar desde la medianoche UTC del 1 de enero de 1970, y ha estado contando segundos desde entonces. El timestamp Unix es la lectura de ese reloj.

\`\`\`
1 minuto   = 60 segundos
1 hora     = 3.600 segundos
1 día      = 86.400 segundos   (24 × 60 × 60)
1 semana   = 604.800 segundos  (7 × 86.400)
1 año      ≈ 31.536.000 segundos (365,25 × 86.400, promedio)
1 década   ≈ 315.360.000 segundos
\`\`\`

Algunos anclajes mentales:

- **1.000.000.000** = 2001-09-09. El billonio Unix: el primer segundo con 10 dígitos.
- **1.500.000.000** = 2017-07-14. La marca de "1,5 mil millones".
- **2.000.000.000** = 2033-05-18. La primera fecha de 2 mil millones de segundos.
- **El problema de 2038**: Los enteros con signo de 32 bits se desbordan en 2.147.483.647, que es **2038-01-19 03:14:07 UTC**. Después de eso, los timestamps Unix de 32 bits se desbordan a valores negativos.

## Las fórmulas exactas de conversión

### Timestamp a fecha humana

\`\`\`
human_date = epoch + timestamp segundos (UTC)
local_date = human_date convertida a zona horaria local
\`\`\`

En la mayoría de los lenguajes de programación:

\`\`\`python
import datetime
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00
local = datetime.datetime.fromtimestamp(ts)
# depende de la zona horaria de su sistema
\`\`\`

\`\`\`js
const ts = 1700000000;
const date = new Date(ts * 1000);  // JS usa milisegundos
// 2023-11-14T22:13:20.000Z
\`\`\`

### Fecha humana a timestamp

\`\`\`
timestamp = (date - epoch) en segundos
\`\`\`

\`\`\`python
import datetime
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000
\`\`\`

\`\`\`js
const d = new Date("2023-11-14T22:13:20Z");
const ts = Math.floor(d.getTime() / 1000);
// 1700000000
\`\`\`

## Zonas horarias comunes (relativas a UTC)

Cuando trabaja con timestamps, a menudo necesita mostrar en una zona horaria específica:

| Zona horaria                       | Abreviatura | Offset          | Ciudades de ejemplo          |
|------------------------------------|-------------|-----------------|------------------------------|
| Tiempo Universal Coordinado        | UTC         | 0               | Londres (invierno), Reikiavik|
| Hora Estándar del Este             | EST         | UTC−5           | Nueva York (invierno)        |
| Hora de Verano del Este            | EDT         | UTC−4           | Nueva York (verano)          |
| Hora Estándar del Pacífico         | PST         | UTC−8           | Los Ángeles (invierno)       |
| Hora de Verano del Pacífico        | PDT         | UTC−7           | Los Ángeles (verano)         |
| Hora Central Europea               | CET         | UTC+1           | París (invierno), Berlín     |
| Hora de Verano Central Europea     | CEST        | UTC+2           | París (verano), Berlín       |
| Hora Estándar de Japón             | JST         | UTC+9           | Tokio                        |
| Hora Estándar de China             | CST         | UTC+8           | Beijing, Shanghái            |
| Hora Estándar de la India          | IST         | UTC+5:30        | Mumbai, Delhi                |
| Hora Estándar del Este de Australia| AEST        | UTC+10          | Sídney (invierno)            |
| Hora de Verano del Este de Australia| AEDT       | UTC+11          | Sídney (verano)              |

Tenga en cuenta que algunos países (India, China) observan un único offset durante todo el año sin horario de verano.

## Método 1: Use el conversor de tiempo de UtilBoxx (Recomendado)

La forma más rápida, privada y precisa de convertir timestamps Unix en el navegador es el [Conversor de Tiempo de UtilBoxx](/es/tools/unit/time). Soporta tanto segundos como milisegundos, muestra en cualquier zona horaria, y muestra la fecha ISO 8601 correspondiente, UTC y hora local. Todo se ejecuta en su navegador: sin servidor, sin carga, sin registros.

**Cómo usarlo:**

1. Vaya a [utilboxx.com/es/tools/unit/time](/es/tools/unit/time)
2. Escriba un timestamp Unix (en segundos) o una cadena de fecha
3. El valor convertido aparece al instante
4. Cambie entre zonas horarias con un clic
5. Copie el resultado

**Por qué recomendamos este método:**

- **100 % gratis**, sin registro, sin email, sin anuncios
- **Privacidad primero**: nada sale de su navegador
- **Bidireccional**: timestamp ↔ fecha en cualquier dirección
- **Multi-zona horaria**: vea su timestamp en UTC, su zona local o cualquier zona
- **Maneja milisegundos** para timestamps estilo JavaScript
- **Funciona en cualquier dispositivo** con navegador

Si trabaja con APIs, logs o bases de datos que almacenan tiempo como timestamps Unix, esta herramienta se amortiza la primera semana.

## Método 2: Python (módulo datetime)

El módulo \`datetime\` de Python es la herramienta canónica para la conversión de timestamps. Las dos funciones clave son \`fromtimestamp()\` y \`timestamp()\`.

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# Convertir timestamp a fecha (UTC)
ts = 1700000000
utc_date = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# Convertir timestamp a fecha en una zona horaria específica
ny_tz = ZoneInfo("America/New_York")
ny_date = datetime.datetime.fromtimestamp(ts, tz=ny_tz)
# 2023-11-14 17:13:20-05:00

# Convertir fecha a timestamp
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# Ahora: timestamp actual
now_ts = int(datetime.datetime.now(tz=datetime.timezone.utc).timestamp())

# Formatear fecha como ISO 8601
print(utc_date.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Python 3.9+ también tiene la forma más simple \`datetime.fromtimestamp(ts, tz=UTC)\`, y el módulo \`zoneinfo\` (que reemplaza al antiguo \`pytz\`) facilita el manejo de zonas horarias.

## Método 3: Bash / línea de comandos

El comando \`date\` en macOS y Linux puede tanto analizar como emitir timestamps Unix.

\`\`\`bash
# Convertir un timestamp Unix a una fecha legible (macOS / BSD)
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Convertir un timestamp Unix (Linux / GNU date)
date -d @1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Obtener el timestamp Unix actual
date +%s
# 1700000000 (o lo que sea ahora)

# Convertir una cadena de fecha a timestamp Unix (GNU)
date -d "2023-11-14 22:13:20 UTC" +%s
# 1700000000

# Convertir una cadena de fecha a timestamp Unix (macOS)
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s
# 1700000000

# Mostrar en una zona horaria específica
TZ="America/New_York" date -d @1700000000
# Tue Nov 14 17:13:20 EST 2023
\`\`\`

La sintaxis difiere entre macOS y Linux. En macOS, \`-r\` lee un timestamp; en Linux, \`-d @...\` lee un timestamp y \`-d "..."\` analiza una fecha. Para scripting, la forma GNU (Linux) es más amigable; la forma macOS es más engorrosa pero funciona.

## Método 4: JavaScript (en el navegador o Node.js)

JavaScript usa **milisegundos** para timestamps Unix, no segundos. Multiplique por 1.000 al ir de segundos a milisegundos.

\`\`\`js
// Timestamp actual en milisegundos
const now = Date.now();
// p. ej., 1700000000000

// Convertir segundos a milisegundos y crear un Date
const ts = 1700000000;
const date = new Date(ts * 1000);
// 2023-11-14T22:13:20.000Z

// Mostrar en una zona horaria específica usando Intl
console.log(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
// 11/14/2023, 5:13:20 PM

// Mostrar como ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z

// Convertir fecha a timestamp (segundos)
const d = new Date("2023-11-14T22:13:20Z");
const ts2 = Math.floor(d.getTime() / 1000);
// 1700000000

// Analizar varios formatos
new Date("2023-11-14");           // medianoche UTC
new Date("2023-11-14T22:13:20Z"); // 22:13:20 UTC
new Date(1700000000 * 1000);      // desde milisegundos
new Date("Nov 14, 2023 22:13:20");// análisis dependiente de locale (¡evitar!)
\`\`\`

El objeto \`Date\` de JavaScript es famoso por ser peculiar. Para trabajo serio, use una biblioteca como \`date-fns\`, \`Luxon\` o \`Day.js\`. Para conversiones rápidas, el \`Date\` integrado está bien.

## Preguntas frecuentes

### ¿Por qué la epoch Unix es el 1 de enero de 1970?

Es la fecha en que el sistema operativo Unix se implementó por primera vez. Ken Thompson y Dennis Ritchie la eligieron arbitrariamente al diseñar Unix en Bell Labs en 1969-1970. No hay razón astronómica o matemática; fue simplemente el comienzo de la década en la que estaban trabajando. Varios otros sistemas han elegido epochs diferentes: Windows FILETIME usa el 1 de enero de 1601; macOS HFS+ usó el 1 de enero de 1904; GPS usa el 6 de enero de 1980.

### ¿Qué es el problema de 2038?

El **problema de 2038** (también llamado Y2K38) es el desbordamiento de entero con signo de 32 bits que ocurre el **19 de enero de 2038 a las 03:14:07 UTC**. Un entero con signo de 32 bits puede contener valores hasta 2.147.483.647. Un segundo después, se desborda a −2.147.483.648, que se interpreta como 1901-12-13 20:45:52 UTC. Cualquier sistema que todavía use timestamps Unix de 32 bits (principalmente dispositivos embebidos, bases de datos antiguas y algunos sistemas de archivos) se romperá a menos que se actualice.

La solución es directa: cambiar a enteros de 64 bits, que extienden el rango de timestamp Unix en 290 mil millones de años. La mayoría de los sistemas modernos ya lo han hecho; el problema es principalmente con sistemas heredados y embebidos.

### ¿Los timestamps Unix están en segundos o milisegundos?

Depende del lenguaje:

- **Segundos**: C, Python, Go, Rust, Java (tradicionalmente), shell, SQL
- **Milisegundos**: JavaScript, Java (java.time.Instant), algunas bases de datos

JavaScript es el gran caso atípico con milisegundos, lo que lleva a errores cuando el código JavaScript se mezcla con código de otros lenguajes. Siempre aclare la unidad. El conversor de UtilBoxx maneja ambos con un solo interruptor.

### ¿Cómo afectan los segundos intercalares a los timestamps Unix?

Estrictamente hablando, **los timestamps Unix ignoran los segundos intercalares**. Cuentan cada segundo como si hubiera exactamente 86.400 por día. El UTC del mundo real tiene segundos intercalares ocasionales (añadidos para mantener el tiempo atómico alineado con la rotación de la Tierra), pero el tiempo Unix no los incluye. Esto significa que el tiempo Unix se desvía gradualmente del UTC en una fracción de segundo cada pocos años.

En la práctica, esto rara vez importa para el código de aplicación. NTP (Network Time Protocol) maneja la discrepancia. Si necesita TAI estricto o tiempo atómico, los timestamps Unix no son la herramienta adecuada.

### ¿Qué es "ISO 8601"?

ISO 8601 es un estándar internacional para formatos de fecha y hora, diseñado para ser inequívoco y legible por máquina. Ejemplos:

- \`2023-11-14\` (solo fecha)
- \`2023-11-14T22:13:20\` (fecha y hora, sin zona horaria)
- \`2023-11-14T22:13:20Z\` (UTC, "Z" = "Zulu time")
- \`2023-11-14T22:13:20+05:00\` (con offset de zona horaria)
- \`2023-11-14T22:13:20.123Z\` (con milisegundos)
- \`20231114T221320Z\` (forma compacta, sin separadores)

ISO 8601 es el formato recomendado para almacenar e intercambiar valores de fecha/hora porque se ordena lexicográficamente y se analiza sin ambigüedad. La mayoría de las APIs lo usan.

### ¿Cómo obtengo el timestamp Unix actual?

En todos los lenguajes principales:

\`\`\`bash
# bash
date +%s
\`\`\`

\`\`\`python
import time
time.time()  # 1700000000.123 (float, con segundos fraccionarios)
int(time.time())  # 1700000000 (segundos enteros)
\`\`\`

\`\`\`js
Date.now() / 1000  // 1700000000.123
Math.floor(Date.now() / 1000)  // 1700000000
\`\`\`

## Conclusión

Los timestamps Unix son el lenguaje universal del tiempo en la informática. Son enteros simples, fáciles de comparar, fáciles de almacenar e independientes de la zona horaria. La epoch es el 1 de enero de 1970 y los timestamps cuentan segundos desde entonces.

Para conversiones ocasionales, el [Conversor de Tiempo de UtilBoxx](/es/tools/unit/time) es privado, gratis y funciona sin conexión una vez cargado. Para trabajo por lotes o con scripts, el \`datetime\` de Python o el comando \`date\` de bash manejan cualquier volumen de datos. Para trabajo interactivo, el \`Date\` de JavaScript está integrado en cada navegador.

El atajo mental: **1.000.000.000 = 2001** (billonio Unix), **1.500.000.000 = 2017**, y **2.000.000.000 = 2033**. Con estos anclajes, puede estimar el año de cualquier timestamp de 10 dígitos en su cabeza. Y recuerde: en 12 años llega el problema de 2038, así que audite sus timestamps de 32 bits ahora.`;

const unixTimestampPt = `## O que é um timestamp Unix?

Um **timestamp Unix** (também chamado de tempo Unix, tempo POSIX ou tempo epoch) é o número de segundos que se passaram desde **00:00:00 UTC de 1 de janeiro de 1970**, não contando segundos intercalares. Esse momento é chamado de **epoch Unix**.

Por exemplo:

- 0 = 1970-01-01 00:00:00 UTC (a epoch)
- 1.000.000.000 = 2001-09-09 01:46:40 UTC (o "bilênio")
- 1.234.567.890 = 2009-02-13 23:31:30 UTC
- 1.700.000.000 = 2023-11-14 22:13:20 UTC
- 2.000.000.000 = 2033-05-18 03:33:20 UTC

Timestamps Unix estão em toda parte da computação:

- **Bancos de dados**: PostgreSQL, MySQL e SQLite armazenam tempo internamente como timestamps Unix (ou com referência a eles).
- **Sistemas de arquivos**: ext4, NTFS e APFS armazenam mtimes de arquivo como timestamps Unix.
- **APIs**: APIs JSON comumente retornam timestamps como inteiros, ex.: \`"created_at": 1700000000\`.
- **Logs**: A maioria dos sistemas de logging emite timestamps em formato Unix.
- **Linguagens de programação**: PHP, Python, JavaScript, Go, Rust e Java têm suporte integrado.

A razão pela qual os timestamps Unix são populares: são inteiros simples, fáceis de comparar, fáceis de ordenar, independentes de fuso horário (sempre se referem a UTC) e triviais de armazenar. Também tornam a aritmética simples — para encontrar a duração de dois eventos, subtraia seus timestamps.

## Como ler um timestamp Unix

O modelo mental: imagine um relógio que começou a tiquetaquear à meia-noite UTC de 1 de janeiro de 1970, e tem contado segundos desde então. O timestamp Unix é a leitura desse relógio.

\`\`\`
1 minuto   = 60 segundos
1 hora     = 3.600 segundos
1 dia      = 86.400 segundos   (24 × 60 × 60)
1 semana   = 604.800 segundos  (7 × 86.400)
1 ano      ≈ 31.536.000 segundos (365,25 × 86.400, média)
1 década   ≈ 315.360.000 segundos
\`\`\`

Algumas âncoras mentais:

- **1.000.000.000** = 2001-09-09. O bilênio Unix — o primeiro segundo com 10 dígitos.
- **1.500.000.000** = 2017-07-14. A marca de "1,5 bilhão".
- **2.000.000.000** = 2033-05-18. A primeira data de 2 bilhões de segundos.
- **O problema de 2038**: Inteiros com sinal de 32 bits estouram em 2.147.483.647, que é **2038-01-19 03:14:07 UTC**. Depois disso, timestamps Unix de 32 bits transbordam para valores negativos.

## As fórmulas exatas de conversão

### Timestamp para data humana

\`\`\`
human_date = epoch + timestamp segundos (UTC)
local_date = human_date convertida para fuso horário local
\`\`\`

Na maioria das linguagens de programação:

\`\`\`python
import datetime
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00
local = datetime.datetime.fromtimestamp(ts)
# depende do fuso horário do seu sistema
\`\`\`

\`\`\`js
const ts = 1700000000;
const date = new Date(ts * 1000);  // JS usa milissegundos
// 2023-11-14T22:13:20.000Z
\`\`\`

### Data humana para timestamp

\`\`\`
timestamp = (date - epoch) em segundos
\`\`\`

\`\`\`python
import datetime
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000
\`\`\`

\`\`\`js
const d = new Date("2023-11-14T22:13:20Z");
const ts = Math.floor(d.getTime() / 1000);
// 1700000000
\`\`\`

## Fusos horários comuns (relativos a UTC)

Ao trabalhar com timestamps, você frequentemente precisa exibir em um fuso horário específico:

| Fuso horário                         | Abreviação | Offset          | Cidades de exemplo          |
|--------------------------------------|------------|-----------------|------------------------------|
| Tempo Universal Coordenado           | UTC        | 0               | Londres (inverno), Reykjavik|
| Horário Padrão do Leste              | EST        | UTC−5           | Nova York (inverno)         |
| Horário de Verão do Leste            | EDT        | UTC−4           | Nova York (verão)           |
| Horário Padrão do Pacífico           | PST        | UTC−8           | Los Angeles (inverno)       |
| Horário de Verão do Pacífico         | PDT        | UTC−7           | Los Angeles (verão)         |
| Horário da Europa Central            | CET        | UTC+1           | Paris (inverno), Berlim     |
| Horário de Verão da Europa Central   | CEST       | UTC+2           | Paris (verão), Berlim       |
| Horário Padrão do Japão              | JST        | UTC+9           | Tóquio                      |
| Horário Padrão da China              | CST        | UTC+8           | Pequim, Xangai              |
| Horário Padrão da Índia              | IST        | UTC+5:30        | Mumbai, Délhi               |
| Horário Padrão Leste da Austrália    | AEST       | UTC+10          | Sydney (inverno)            |
| Horário de Verão Leste da Austrália  | AEDT       | UTC+11          | Sydney (verão)              |

Observe que alguns países (Índia, China) observam um único offset o ano todo, sem horário de verão.

## Método 1: Use o conversor de tempo do UtilBoxx (Recomendado)

A maneira mais rápida, privada e precisa de converter timestamps Unix no navegador é o [Conversor de Tempo do UtilBoxx](/pt/tools/unit/time). Suporta tanto segundos quanto milissegundos, exibe em qualquer fuso horário, e mostra a data ISO 8601 correspondente, UTC e hora local. Tudo roda no seu navegador: sem servidor, sem upload, sem registros.

**Como usar:**

1. Acesse [utilboxx.com/pt/tools/unit/time](/pt/tools/unit/time)
2. Digite um timestamp Unix (em segundos) ou uma string de data
3. O valor convertido aparece instantaneamente
4. Alterne entre fusos horários com um clique
5. Copie o resultado

**Por que recomendamos este método:**

- **100 % grátis**, sem cadastro, sem e-mail, sem anúncios
- **Privacidade em primeiro lugar**: nada sai do seu navegador
- **Bidirecional**: timestamp ↔ data em qualquer direção
- **Multi-fuso horário**: veja seu timestamp em UTC, seu fuso local, ou qualquer fuso
- **Lida com milissegundos** para timestamps estilo JavaScript
- **Funciona em qualquer dispositivo** com navegador

Se você trabalha com APIs, logs ou bancos de dados que armazenam tempo como timestamps Unix, esta ferramenta se paga na primeira semana.

## Método 2: Python (módulo datetime)

O módulo \`datetime\` do Python é a ferramenta canônica para conversão de timestamps. As duas funções chave são \`fromtimestamp()\` e \`timestamp()\`.

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# Converter timestamp para data (UTC)
ts = 1700000000
utc_date = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# Converter timestamp para data em um fuso horário específico
ny_tz = ZoneInfo("America/New_York")
ny_date = datetime.datetime.fromtimestamp(ts, tz=ny_tz)
# 2023-11-14 17:13:20-05:00

# Converter data para timestamp
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# Agora: timestamp atual
now_ts = int(datetime.datetime.now(tz=datetime.timezone.utc).timestamp())

# Formatar data como ISO 8601
print(utc_date.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Python 3.9+ também tem a forma mais simples \`datetime.fromtimestamp(ts, tz=UTC)\`, e o módulo \`zoneinfo\` (substituindo o antigo \`pytz\`) facilita o manuseio de fusos horários.

## Método 3: Bash / linha de comando

O comando \`date\` no macOS e Linux pode tanto analisar quanto emitir timestamps Unix.

\`\`\`bash
# Converter um timestamp Unix para uma data legível (macOS / BSD)
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Converter um timestamp Unix (Linux / GNU date)
date -d @1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Obter o timestamp Unix atual
date +%s
# 1700000000 (ou o que for agora)

# Converter uma string de data para timestamp Unix (GNU)
date -d "2023-11-14 22:13:20 UTC" +%s
# 1700000000

# Converter uma string de data para timestamp Unix (macOS)
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s
# 1700000000

# Exibir em um fuso horário específico
TZ="America/New_York" date -d @1700000000
# Tue Nov 14 17:13:20 EST 2023
\`\`\`

A sintaxe difere entre macOS e Linux. No macOS, \`-r\` lê um timestamp; no Linux, \`-d @...\` lê um timestamp e \`-d "..."\` analisa uma data. Para scripting, a forma GNU (Linux) é mais amigável; a forma macOS é mais trabalhosa mas funciona.

## Método 4: JavaScript (no navegador ou Node.js)

JavaScript usa **milissegundos** para timestamps Unix, não segundos. Multiplique por 1.000 ao ir de segundos para milissegundos.

\`\`\`js
// Timestamp atual em milissegundos
const now = Date.now();
// ex.: 1700000000000

// Converter segundos para milissegundos e criar um Date
const ts = 1700000000;
const date = new Date(ts * 1000);
// 2023-11-14T22:13:20.000Z

// Exibir em um fuso horário específico usando Intl
console.log(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
// 11/14/2023, 5:13:20 PM

// Exibir como ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z

// Converter data para timestamp (segundos)
const d = new Date("2023-11-14T22:13:20Z");
const ts2 = Math.floor(d.getTime() / 1000);
// 1700000000

// Analisar vários formatos
new Date("2023-11-14");           // meia-noite UTC
new Date("2023-11-14T22:13:20Z"); // 22:13:20 UTC
new Date(1700000000 * 1000);      // a partir de milissegundos
new Date("Nov 14, 2023 22:13:20");// análise dependente de locale (evite!)
\`\`\`

O objeto \`Date\` do JavaScript é famoso por ser peculiar. Para trabalho sério, use uma biblioteca como \`date-fns\`, \`Luxon\` ou \`Day.js\`. Para conversões rápidas, o \`Date\` integrado serve.

## Perguntas frequentes

### Por que a epoch Unix é 1 de janeiro de 1970?

É a data em que o sistema operacional Unix foi implementado pela primeira vez. Ken Thompson e Dennis Ritchie a escolheram arbitrariamente ao projetar o Unix nos Bell Labs em 1969-1970. Não há razão astronômica ou matemática; foi simplesmente o início da década em que estavam trabalhando. Vários outros sistemas escolheram epochs diferentes: Windows FILETIME usa 1 de janeiro de 1601; macOS HFS+ usou 1 de janeiro de 1904; GPS usa 6 de janeiro de 1980.

### O que é o problema de 2038?

O **problema de 2038** (também chamado Y2K38) é o overflow de inteiro com sinal de 32 bits que ocorre em **19 de janeiro de 2038 às 03:14:07 UTC**. Um inteiro com sinal de 32 bits pode conter valores até 2.147.483.647. Um segundo depois, ele transborda para −2.147.483.648, que é interpretado como 1901-12-13 20:45:52 UTC. Qualquer sistema que ainda use timestamps Unix de 32 bits (principalmente dispositivos embarcados, bancos de dados antigos e alguns sistemas de arquivos) irá quebrar a menos que seja atualizado.

A solução é direta: mudar para inteiros de 64 bits, que estendem o alcance do timestamp Unix em 290 bilhões de anos. A maioria dos sistemas modernos já fez isso; o problema é principalmente com sistemas legados e embarcados.

### Os timestamps Unix estão em segundos ou milissegundos?

Depende da linguagem:

- **Segundos**: C, Python, Go, Rust, Java (tradicionalmente), shell, SQL
- **Milissegundos**: JavaScript, Java (java.time.Instant), alguns bancos de dados

JavaScript é o grande caso atípico com milissegundos, o que causa bugs quando código JavaScript é misturado com código de outras linguagens. Sempre esclareça a unidade. O conversor do UtilBoxx lida com ambos com um único alternador.

### Como os segundos intercalares afetam os timestamps Unix?

Estritamente falando, **os timestamps Unix ignoram os segundos intercalares**. Eles contam cada segundo como se houvesse exatamente 86.400 por dia. O UTC do mundo real tem segundos intercalares ocasionais (adicionados para manter o tempo atômico alinhado com a rotação da Terra), mas o tempo Unix não os inclui. Isso significa que o tempo Unix se desvia gradualmente do UTC em uma fração de segundo a cada poucos anos.

Na prática, isso raramente importa para código de aplicação. NTP (Network Time Protocol) lida com a discrepância. Se você precisa de TAI estrito ou tempo atômico, timestamps Unix não são a ferramenta certa.

### O que é "ISO 8601"?

ISO 8601 é um padrão internacional para formatos de data e hora, projetado para ser inequívoco e legível por máquina. Exemplos:

- \`2023-11-14\` (apenas data)
- \`2023-11-14T22:13:20\` (data e hora, sem fuso horário)
- \`2023-11-14T22:13:20Z\` (UTC, "Z" = "Zulu time")
- \`2023-11-14T22:13:20+05:00\` (com offset de fuso horário)
- \`2023-11-14T22:13:20.123Z\` (com milissegundos)
- \`20231114T221320Z\` (forma compacta, sem separadores)

ISO 8601 é o formato recomendado para armazenar e trocar valores de data/hora porque ordena lexicograficamente e analisa sem ambiguidade. A maioria das APIs o utiliza.

### Como obtenho o timestamp Unix atual?

Em todas as principais linguagens:

\`\`\`bash
# bash
date +%s
\`\`\`

\`\`\`python
import time
time.time()  # 1700000000.123 (float, com segundos fracionários)
int(time.time())  # 1700000000 (segundos inteiros)
\`\`\`

\`\`\`js
Date.now() / 1000  // 1700000000.123
Math.floor(Date.now() / 1000)  // 1700000000
\`\`\`

## Conclusão

Timestamps Unix são a linguagem universal do tempo na computação. São inteiros simples, fáceis de comparar, fáceis de armazenar, e independentes de fuso horário. A epoch é 1 de janeiro de 1970, e os timestamps contam segundos desde então.

Para conversões ocasionais, o [Conversor de Tempo do UtilBoxx](/pt/tools/unit/time) é privado, grátis e funciona offline uma vez carregado. Para trabalho em lote ou com scripts, o \`datetime\` do Python ou o comando \`date\` do bash lidam com qualquer volume de dados. Para trabalho interativo, o \`Date\` do JavaScript está embutido em todo navegador.

O atalho mental: **1.000.000.000 = 2001** (bilênio Unix), **1.500.000.000 = 2017**, e **2.000.000.000 = 2033**. Com estas âncoras, você pode estimar o ano de qualquer timestamp de 10 dígitos na sua cabeça. E lembre-se: em 12 anos chega o problema de 2038, então audite seus timestamps de 32 bits agora.`;

const unixTimestampFr = `## Qu'est-ce qu'un timestamp Unix ?

Un **timestamp Unix** (aussi appelé temps Unix, temps POSIX ou temps epoch) est le nombre de secondes écoulées depuis **00:00:00 UTC le 1er janvier 1970**, sans compter les secondes intercalaires. Ce moment est appelé l'**époque Unix**.

Par exemple :

- 0 = 1970-01-01 00:00:00 UTC (l'époque)
- 1 000 000 000 = 2001-09-09 01:46:40 UTC (le « billionième »)
- 1 234 567 890 = 2009-02-13 23:31:30 UTC
- 1 700 000 000 = 2023-11-14 22:13:20 UTC
- 2 000 000 000 = 2033-05-18 03:33:20 UTC

Les timestamps Unix sont partout en informatique :

- **Bases de données** : PostgreSQL, MySQL et SQLite stockent le temps en interne sous forme de timestamps Unix (ou en s'y référant).
- **Systèmes de fichiers** : ext4, NTFS et APFS stockent les mtimes des fichiers comme timestamps Unix.
- **APIs** : Les APIs JSON renvoient souvent les timestamps sous forme d'entiers, par ex., \`"created_at": 1700000000\`.
- **Logs** : La plupart des systèmes de journalisation émettent des timestamps au format Unix.
- **Langages de programmation** : PHP, Python, JavaScript, Go, Rust et Java ont tous un support intégré.

La raison pour laquelle les timestamps Unix sont populaires : ce sont de simples entiers, faciles à comparer, à trier, indépendants du fuseau horaire (ils se réfèrent toujours à UTC) et triviaux à stocker. Ils rendent aussi l'arithmétique simple — pour trouver la durée de deux événements, soustrayez leurs timestamps.

## Comment lire un timestamp Unix

Le modèle mental : imaginez une horloge qui a commencé à tourner à minuit UTC le 1er janvier 1970, et qui compte les secondes depuis. Le timestamp Unix est la lecture de cette horloge.

\`\`\`
1 minute   = 60 secondes
1 heure     = 3 600 secondes
1 jour      = 86 400 secondes   (24 × 60 × 60)
1 semaine   = 604 800 secondes  (7 × 86 400)
1 an        ≈ 31 536 000 secondes (365,25 × 86 400, moyenne)
1 décennie  ≈ 315 360 000 secondes
\`\`\`

Quelques ancres mentales :

- **1 000 000 000** = 2001-09-09. Le billionième Unix — la première seconde à 10 chiffres.
- **1 500 000 000** = 2017-07-14. La marque des « 1,5 milliard ».
- **2 000 000 000** = 2033-05-18. La première date à 2 milliards de secondes.
- **Le problème de 2038** : Les entiers signés 32 bits débordent à 2 147 483 647, soit **2038-01-19 03:14:07 UTC**. Après cela, les timestamps Unix 32 bits reviennent à des valeurs négatives.

## Les formules exactes de conversion

### Timestamp vers date humaine

\`\`\`
human_date = époque + timestamp secondes (UTC)
local_date = human_date convertie en fuseau horaire local
\`\`\`

Dans la plupart des langages de programmation :

\`\`\`python
import datetime
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00
local = datetime.datetime.fromtimestamp(ts)
# dépend du fuseau horaire de votre système
\`\`\`

\`\`\`js
const ts = 1700000000;
const date = new Date(ts * 1000);  // JS utilise les millisecondes
// 2023-11-14T22:13:20.000Z
\`\`\`

### Date humaine vers timestamp

\`\`\`
timestamp = (date - époque) en secondes
\`\`\`

\`\`\`python
import datetime
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000
\`\`\`

\`\`\`js
const d = new Date("2023-11-14T22:13:20Z");
const ts = Math.floor(d.getTime() / 1000);
// 1700000000
\`\`\`

## Fuseaux horaires courants (relatifs à UTC)

Lorsque vous travaillez avec des timestamps, vous devez souvent afficher dans un fuseau horaire spécifique :

| Fuseau horaire                        | Abréviation | Décalage        | Villes d'exemple             |
|---------------------------------------|-------------|-----------------|------------------------------|
| Temps Universel Coordonné              | UTC         | 0               | Londres (hiver), Reykjavik   |
| Heure Normale de l'Est                 | EST         | UTC−5           | New York (hiver)             |
| Heure Avancée de l'Est                | EDT         | UTC−4           | New York (été)               |
| Heure Normale du Pacifique             | PST         | UTC−8           | Los Angeles (hiver)          |
| Heure Avancée du Pacifique            | PDT         | UTC−7           | Los Angeles (été)            |
| Heure d'Europe Centrale                | CET         | UTC+1           | Paris (hiver), Berlin        |
| Heure d'Été d'Europe Centrale         | CEST        | UTC+2           | Paris (été), Berlin          |
| Heure Normale du Japon                 | JST         | UTC+9           | Tokyo                        |
| Heure Normale de Chine                 | CST         | UTC+8           | Pékin, Shanghai              |
| Heure Normale de l'Inde                | IST         | UTC+5:30        | Mumbai, Delhi                |
| Heure Normale de l'Est de l'Australie  | AEST        | UTC+10          | Sydney (hiver)               |
| Heure d'Été de l'Est de l'Australie   | AEDT        | UTC+11          | Sydney (été)                 |

Notez que certains pays (Inde, Chine) observent un seul décalage toute l'année sans heure d'été.

## Méthode 1 : Utilisez le convertisseur de temps de UtilBoxx (Recommandé)

La façon la plus rapide, privée et précise de convertir des timestamps Unix dans le navigateur est le [Convertisseur de Temps de UtilBoxx](/fr/tools/unit/time). Il prend en charge les secondes et les millisecondes, affiche dans n'importe quel fuseau horaire, et montre la date ISO 8601 correspondante, UTC et heure locale. Tout s'exécute dans votre navigateur : pas de serveur, pas de téléversement, pas de logs.

**Comment l'utiliser :**

1. Allez sur [utilboxx.com/fr/tools/unit/time](/fr/tools/unit/time)
2. Saisissez un timestamp Unix (en secondes) ou une chaîne de date
3. La valeur convertie apparaît instantanément
4. Basculez entre fuseaux horaires en un clic
5. Copiez le résultat

**Pourquoi nous recommandons cette méthode :**

- **100 % gratuit**, sans inscription, sans e-mail, sans publicité
- **Confidentialité d'abord** : rien ne quitte votre navigateur
- **Bidirectionnel** : timestamp ↔ date dans les deux sens
- **Multi-fuseaux horaires** : voyez votre timestamp en UTC, votre fuseau local, ou n'importe quel fuseau
- **Gère les millisecondes** pour les timestamps style JavaScript
- **Fonctionne sur tout appareil** avec navigateur

Si vous travaillez avec des APIs, des logs ou des bases de données qui stockent le temps comme timestamps Unix, cet outil est rentabilisé la première semaine.

## Méthode 2 : Python (module datetime)

Le module \`datetime\` de Python est l'outil canonique pour la conversion de timestamps. Les deux fonctions clés sont \`fromtimestamp()\` et \`timestamp()\`.

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# Convertir timestamp en date (UTC)
ts = 1700000000
utc_date = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# Convertir timestamp en date dans un fuseau horaire spécifique
ny_tz = ZoneInfo("America/New_York")
ny_date = datetime.datetime.fromtimestamp(ts, tz=ny_tz)
# 2023-11-14 17:13:20-05:00

# Convertir date en timestamp
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# Maintenant : timestamp actuel
now_ts = int(datetime.datetime.now(tz=datetime.timezone.utc).timestamp())

# Formater la date en ISO 8601
print(utc_date.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Python 3.9+ a aussi la forme plus simple \`datetime.fromtimestamp(ts, tz=UTC)\`, et le module \`zoneinfo\` (qui remplace l'ancien \`pytz\`) facilite la gestion des fuseaux horaires.

## Méthode 3 : Bash / ligne de commande

La commande \`date\` sur macOS et Linux peut à la fois analyser et émettre des timestamps Unix.

\`\`\`bash
# Convertir un timestamp Unix en date lisible (macOS / BSD)
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Convertir un timestamp Unix (Linux / GNU date)
date -d @1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Obtenir le timestamp Unix actuel
date +%s
# 1700000000 (ou ce que c'est maintenant)

# Convertir une chaîne de date en timestamp Unix (GNU)
date -d "2023-11-14 22:13:20 UTC" +%s
# 1700000000

# Convertir une chaîne de date en timestamp Unix (macOS)
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s
# 1700000000

# Afficher dans un fuseau horaire spécifique
TZ="America/New_York" date -d @1700000000
# Tue Nov 14 17:13:20 EST 2023
\`\`\`

La syntaxe diffère entre macOS et Linux. Sur macOS, \`-r\` lit un timestamp ; sur Linux, \`-d @...\` lit un timestamp et \`-d "..."\` analyse une date. Pour scripter, la forme GNU (Linux) est plus conviviale ; la forme macOS est plus laborieuse mais fonctionne.

## Méthode 4 : JavaScript (dans le navigateur ou Node.js)

JavaScript utilise les **millisecondes** pour les timestamps Unix, pas les secondes. Multipliez par 1 000 en passant des secondes aux millisecondes.

\`\`\`js
// Timestamp actuel en millisecondes
const now = Date.now();
// p. ex., 1700000000000

// Convertir des secondes en millisecondes et créer un Date
const ts = 1700000000;
const date = new Date(ts * 1000);
// 2023-11-14T22:13:20.000Z

// Afficher dans un fuseau horaire spécifique avec Intl
console.log(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
// 11/14/2023, 5:13:20 PM

// Afficher en ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z

// Convertir date en timestamp (secondes)
const d = new Date("2023-11-14T22:13:20Z");
const ts2 = Math.floor(d.getTime() / 1000);
// 1700000000

// Analyser divers formats
new Date("2023-11-14");           // minuit UTC
new Date("2023-11-14T22:13:20Z"); // 22:13:20 UTC
new Date(1700000000 * 1000);      // à partir de millisecondes
new Date("Nov 14, 2023 22:13:20");// analyse dépendante de la locale (à éviter !)
\`\`\`

L'objet \`Date\` de JavaScript est célèbre pour être capricieux. Pour un travail sérieux, utilisez une bibliothèque comme \`date-fns\`, \`Luxon\` ou \`Day.js\`. Pour des conversions rapides, le \`Date\` intégré convient.

## Questions fréquentes

### Pourquoi l'époque Unix est-elle le 1er janvier 1970 ?

C'est la date à laquelle le système d'exploitation Unix a été implémenté pour la première fois. Ken Thompson et Dennis Ritchie l'ont choisi arbitrairement lors de la conception d'Unix aux Bell Labs en 1969-1970. Il n'y a aucune raison astronomique ou mathématique ; c'était simplement le début de la décennie pendant laquelle ils travaillaient. Plusieurs autres systèmes ont choisi des époques différentes : Windows FILETIME utilise le 1er janvier 1601 ; macOS HFS+ utilisait le 1er janvier 1904 ; GPS utilise le 6 janvier 1980.

### Qu'est-ce que le problème de 2038 ?

Le **problème de 2038** (aussi appelé Y2K38) est le débordement d'entier signé 32 bits qui se produit le **19 janvier 2038 à 03:14:07 UTC**. Un entier signé 32 bits peut contenir des valeurs jusqu'à 2 147 483 647. Une seconde plus tard, il déborde vers −2 147 483 648, qui est interprété comme 1901-12-13 20:45:52 UTC. Tout système utilisant encore des timestamps Unix 32 bits (principalement les appareils embarqués, les anciennes bases de données et certains systèmes de fichiers) se cassera à moins d'être mis à jour.

La solution est simple : passer aux entiers 64 bits, ce qui étend la plage des timestamps Unix de 290 milliards d'années. La plupart des systèmes modernes l'ont déjà fait ; le problème concerne principalement les systèmes hérités et embarqués.

### Les timestamps Unix sont-ils en secondes ou en millisecondes ?

Cela dépend du langage :

- **Secondes** : C, Python, Go, Rust, Java (traditionnellement), shell, SQL
- **Millisecondes** : JavaScript, Java (java.time.Instant), certaines bases de données

JavaScript est le grand cas particulier avec les millisecondes, ce qui entraîne des bugs lorsque du code JavaScript est mélangé avec du code d'autres langages. Précisez toujours l'unité. Le convertisseur de UtilBoxx gère les deux avec un seul commutateur.

### Comment les secondes intercalaires affectent-elles les timestamps Unix ?

Strictement parlant, **les timestamps Unix ignorent les secondes intercalaires**. Ils comptent chaque seconde comme s'il y en avait exactement 86 400 par jour. L'UTC du monde réel a des secondes intercalaires occasionnelles (ajoutées pour maintenir le temps atomique aligné sur la rotation de la Terre), mais le temps Unix ne les inclut pas. Cela signifie que le temps Unix dérive progressivement de l'UTC d'une fraction de seconde tous les quelques années.

En pratique, cela a rarement d'importance pour le code applicatif. NTP (Network Time Protocol) gère la divergence. Si vous avez besoin de TAI strict ou de temps atomique, les timestamps Unix ne sont pas le bon outil.

### Qu'est-ce que « ISO 8601 » ?

ISO 8601 est une norme internationale pour les formats de date et d'heure, conçue pour être non ambiguë et lisible par machine. Exemples :

- \`2023-11-14\` (date seule)
- \`2023-11-14T22:13:20\` (date et heure, sans fuseau)
- \`2023-11-14T22:13:20Z\` (UTC, « Z » = « Zulu time »)
- \`2023-11-14T22:13:20+05:00\` (avec décalage de fuseau)
- \`2023-11-14T22:13:20.123Z\` (avec millisecondes)
- \`20231114T221320Z\` (forme compacte, sans séparateurs)

ISO 8601 est le format recommandé pour stocker et échanger des valeurs de date/heure car il se trie lexicographiquement et s'analyse sans ambiguïté. La plupart des APIs l'utilisent.

### Comment obtenir le timestamp Unix actuel ?

Dans tous les principaux langages :

\`\`\`bash
# bash
date +%s
\`\`\`

\`\`\`python
import time
time.time()  # 1700000000.123 (float, avec secondes fractionnaires)
int(time.time())  # 1700000000 (secondes entières)
\`\`\`

\`\`\`js
Date.now() / 1000  // 1700000000.123
Math.floor(Date.now() / 1000)  // 1700000000
\`\`\`

## Conclusion

Les timestamps Unix sont le langage universel du temps en informatique. Ce sont de simples entiers, faciles à comparer, à stocker, et indépendants du fuseau horaire. L'époque est le 1er janvier 1970, et les timestamps comptent les secondes depuis.

Pour des conversions ponctuelles, le [Convertisseur de Temps de UtilBoxx](/fr/tools/unit/time) est privé, gratuit et fonctionne hors ligne une fois chargé. Pour le travail par lots ou scripté, le \`datetime\` de Python ou la commande bash \`date\` gèrent n'importe quel volume de données. Pour le travail interactif, le \`Date\` de JavaScript est intégré à chaque navigateur.

Le raccourci mental : **1 000 000 000 = 2001** (billionième Unix), **1 500 000 000 = 2017**, et **2 000 000 000 = 2033**. Avec ces ancres, vous pouvez estimer l'année de n'importe quel timestamp à 10 chiffres dans votre tête. Et rappelez-vous : dans 12 ans, le problème de 2038 arrive, alors auditez vos timestamps 32 bits maintenant.`;

const unixTimestampDe = `## Was ist ein Unix-Zeitstempel?

Ein **Unix-Zeitstempel** (auch Unix-Zeit, POSIX-Zeit oder Epochenzeit genannt) ist die Anzahl der Sekunden, die seit **00:00:00 UTC am 1. Januar 1970** vergangen sind, ohne Schaltsekunden. Dieser Moment wird als **Unix-Epoche** bezeichnet.

Zum Beispiel:

- 0 = 1970-01-01 00:00:00 UTC (die Epoche)
- 1.000.000.000 = 2001-09-09 01:46:40 UTC (das „Milliardenste")
- 1.234.567.890 = 2009-02-13 23:31:30 UTC
- 1.700.000.000 = 2023-11-14 22:13:20 UTC
- 2.000.000.000 = 2033-05-18 03:33:20 UTC

Unix-Zeitstempel sind überall in der Informatik:

- **Datenbanken**: PostgreSQL, MySQL und SQLite speichern die Zeit intern als Unix-Zeitstempel (oder mit Bezug darauf).
- **Dateisysteme**: ext4, NTFS und APFS speichern Datei-mtimes als Unix-Zeitstempel.
- **APIs**: JSON-APIs geben Zeitstempel häufig als Ganzzahlen zurück, z. B. \`"created_at": 1700000000\`.
- **Logs**: Die meisten Protokollierungssysteme geben Zeitstempel im Unix-Format aus.
- **Programmiersprachen**: PHP, Python, JavaScript, Go, Rust und Java haben alle eingebaute Unterstützung.

Der Grund, warum Unix-Zeitstempel beliebt sind: Sie sind einfache Ganzzahlen, leicht zu vergleichen, leicht zu sortieren, zeitzonenunabhängig (sie beziehen sich immer auf UTC) und trivial zu speichern. Sie machen auch Arithmetik einfach — um die Dauer zweier Ereignisse zu finden, subtrahieren Sie ihre Zeitstempel.

## Wie man einen Unix-Zeitstempel liest

Das mentale Modell: Stellen Sie sich eine Uhr vor, die um Mitternacht UTC am 1. Januar 1970 zu ticken begann und seitdem Sekunden zählt. Der Unix-Zeitstempel ist die Anzeige dieser Uhr.

\`\`\`
1 Minute   = 60 Sekunden
1 Stunde   = 3.600 Sekunden
1 Tag      = 86.400 Sekunden   (24 × 60 × 60)
1 Woche    = 604.800 Sekunden  (7 × 86.400)
1 Jahr     ≈ 31.536.000 Sekunden (365,25 × 86.400, Durchschnitt)
1 Jahrzehnt ≈ 315.360.000 Sekunden
\`\`\`

Einige mentale Anker:

- **1.000.000.000** = 2001-09-09. Das Unix-Milliardenste — die erste Sekunde mit 10 Ziffern.
- **1.500.000.000** = 2017-07-14. Die „1,5-Milliarden"-Marke.
- **2.000.000.000** = 2033-05-18. Das erste 2-Milliarden-Sekunden-Datum.
- **Das 2038-Problem**: 32-Bit-Ganzzahlen mit Vorzeichen laufen bei 2.147.483.647 über, das ist **2038-01-19 03:14:07 UTC**. Danach laufen 32-Bit-Unix-Zeitstempel zu negativen Werten über.

## Die exakten Umrechnungsformeln

### Zeitstempel zu menschlichem Datum

\`\`\`
human_date = Epoche + Zeitstempel-Sekunden (UTC)
local_date = human_date in lokale Zeitzone konvertiert
\`\`\`

In den meisten Programmiersprachen:

\`\`\`python
import datetime
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00
local = datetime.datetime.fromtimestamp(ts)
# hängt von Ihrer Systemzeitzone ab
\`\`\`

\`\`\`js
const ts = 1700000000;
const date = new Date(ts * 1000);  // JS verwendet Millisekunden
// 2023-11-14T22:13:20.000Z
\`\`\`

### Menschliches Datum zu Zeitstempel

\`\`\`
timestamp = (date - Epoche) in Sekunden
\`\`\`

\`\`\`python
import datetime
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000
\`\`\`

\`\`\`js
const d = new Date("2023-11-14T22:13:20Z");
const ts = Math.floor(d.getTime() / 1000);
// 1700000000
\`\`\`

## Häufige Zeitzonen-Offsets (relativ zu UTC)

Wenn Sie mit Zeitstempeln arbeiten, müssen Sie oft in einer bestimmten Zeitzone anzeigen:

| Zeitzone                          | Abkürzung | Offset          | Beispieldtädte              |
|----------------------------------|-----------|-----------------|------------------------------|
| Koordinierte Weltzeit            | UTC       | 0               | London (Winter), Reykjavik  |
| Eastern Standard Time            | EST       | UTC−5           | New York (Winter)            |
| Eastern Daylight Time            | EDT       | UTC−4           | New York (Sommer)            |
| Pacific Standard Time            | PST       | UTC−8           | Los Angeles (Winter)         |
| Pacific Daylight Time            | PDT       | UTC−7           | Los Angeles (Sommer)         |
| Mitteleuropäische Zeit           | CET       | UTC+1           | Paris (Winter), Berlin       |
| Mitteleuropäische Sommerzeit     | CEST      | UTC+2           | Paris (Sommer), Berlin       |
| Japanische Standardzeit          | JST       | UTC+9           | Tokio                        |
| Chinesische Standardzeit         | CST       | UTC+8           | Peking, Shanghai             |
| Indische Standardzeit            | IST       | UTC+5:30        | Mumbai, Delhi                |
| Australian Eastern Standard Time | AEST      | UTC+10          | Sydney (Winter)              |
| Australian Eastern Daylight Time | AEDT      | UTC+11          | Sydney (Sommer)              |

Beachten Sie, dass einige Länder (Indien, China) einen ganzjährigen einzigen Offset ohne Sommerzeit beobachten.

## Methode 1: Den Zeitumrechner von UtilBoxx verwenden (Empfohlen)

Der schnellste, privateste und genaueste Weg, Unix-Zeitstempel im Browser umzurechnen, ist der [Zeitumrechner von UtilBoxx](/de/tools/unit/time). Er unterstützt sowohl Sekunden als auch Millisekunden, zeigt in jeder Zeitzone an und zeigt das entsprechende ISO 8601-Datum, UTC und Ortszeit. Alles läuft in Ihrem Browser — kein Server, kein Upload, keine Logs.

**So verwenden Sie ihn:**

1. Gehen Sie zu [utilboxx.com/de/tools/unit/time](/de/tools/unit/time)
2. Geben Sie einen Unix-Zeitstempel (in Sekunden) oder eine Datumszeichenfolge ein
3. Der umgerechnete Wert erscheint sofort
4. Wechseln Sie mit einem Klick zwischen Zeitzonen
5. Kopieren Sie das Ergebnis

**Warum wir diese Methode empfehlen:**

- **100 % kostenlos**, keine Registrierung, keine E-Mail, keine Werbung
- **Privatsphäre zuerst**: Nichts verlässt Ihren Browser
- **Bidirektional**: Zeitstempel ↔ Datum in beide Richtungen
- **Mehrere Zeitzonen**: Sehen Sie Ihren Zeitstempel in UTC, Ihrer lokalen Zone oder einer beliebigen Zone
- **Verarbeitet Millisekunden** für Zeitstempel im JavaScript-Stil
- **Funktioniert auf jedem Gerät** mit Browser

Wenn Sie mit APIs, Logs oder Datenbanken arbeiten, die Zeit als Unix-Zeitstempel speichern, amortisiert sich dieses Werkzeug in der ersten Woche.

## Methode 2: Python (datetime-Modul)

Pythons \`datetime\`-Modul ist das kanonische Werkzeug für Zeitstempelumrechnungen. Die zwei Schlüsselfunktionen sind \`fromtimestamp()\` und \`timestamp()\`.

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# Zeitstempel in Datum umrechnen (UTC)
ts = 1700000000
utc_date = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# Zeitstempel in Datum in einer bestimmten Zeitzone umrechnen
ny_tz = ZoneInfo("America/New_York")
ny_date = datetime.datetime.fromtimestamp(ts, tz=ny_tz)
# 2023-11-14 17:13:20-05:00

# Datum in Zeitstempel umrechnen
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# Jetzt: aktueller Zeitstempel
now_ts = int(datetime.datetime.now(tz=datetime.timezone.utc).timestamp())

# Datum als ISO 8601 formatieren
print(utc_date.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Python 3.9+ hat auch die einfachere Form \`datetime.fromtimestamp(ts, tz=UTC)\`, und das \`zoneinfo\`-Modul (das das ältere \`pytz\` ersetzt) macht die Zeitzonenbehandlung einfach.

## Methode 3: Bash / Kommandozeile

Der \`date\`-Befehl unter macOS und Linux kann Unix-Zeitstempel sowohl analysieren als auch ausgeben.

\`\`\`bash
# Unix-Zeitstempel in lesbares Datum umrechnen (macOS / BSD)
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Unix-Zeitstempel umrechnen (Linux / GNU date)
date -d @1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Aktuellen Unix-Zeitstempel abrufen
date +%s
# 1700000000 (oder was auch immer gerade aktuell ist)

# Datumszeichenfolge in Unix-Zeitstempel umrechnen (GNU)
date -d "2023-11-14 22:13:20 UTC" +%s
# 1700000000

# Datumszeichenfolge in Unix-Zeitstempel umrechnen (macOS)
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s
# 1700000000

# In einer bestimmten Zeitzone anzeigen
TZ="America/New_York" date -d @1700000000
# Tue Nov 14 17:13:20 EST 2023
\`\`\`

Die Syntax unterscheidet sich zwischen macOS und Linux. Unter macOS liest \`-r\` einen Zeitstempel; unter Linux liest \`-d @...\` einen Zeitstempel und \`-d "..."\` analysiert ein Datum. Zum Skripten ist die GNU-Form (Linux) freundlicher; die macOS-Form ist umständlicher, funktioniert aber.

## Methode 4: JavaScript (im Browser oder Node.js)

JavaScript verwendet **Millisekunden** für Unix-Zeitstempel, nicht Sekunden. Multiplizieren Sie mit 1.000, wenn Sie von Sekunden zu Millisekunden gehen.

\`\`\`js
// Aktueller Zeitstempel in Millisekunden
const now = Date.now();
// z. B. 1700000000000

// Sekunden in Millisekunden umrechnen und Date erstellen
const ts = 1700000000;
const date = new Date(ts * 1000);
// 2023-11-14T22:13:20.000Z

// In einer bestimmten Zeitzone mit Intl anzeigen
console.log(date.toLocaleString("en-US", { timeZone: "America/New_York" }));
// 11/14/2023, 5:13:20 PM

// Als ISO 8601 anzeigen
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z

// Datum in Zeitstempel (Sekunden) umrechnen
const d = new Date("2023-11-14T22:13:20Z");
const ts2 = Math.floor(d.getTime() / 1000);
// 1700000000

// Verschiedene Formate analysieren
new Date("2023-11-14");           // Mitternacht UTC
new Date("2023-11-14T22:13:20Z"); // 22:13:20 UTC
new Date(1700000000 * 1000);      // aus Millisekunden
new Date("Nov 14, 2023 22:13:20");// Lokalabhängige Analyse (vermeiden!)
\`\`\`

JavaScripts \`Date\`-Objekt ist berüchtigt eigenwillig. Für ernsthafte Arbeit verwenden Sie eine Bibliothek wie \`date-fns\`, \`Luxon\` oder \`Day.js\`. Für schnelle Umrechnungen ist das eingebaute \`Date\` in Ordnung.

## Häufige Fragen

### Warum ist die Unix-Epoche der 1. Januar 1970?

Es ist das Datum, an dem das Unix-Betriebssystem erstmals implementiert wurde. Ken Thompson und Dennis Ritchie wählten es willkürlich, als sie 1969-1970 Unix in den Bell Labs entwarfen. Es gibt keinen astronomischen oder mathematischen Grund; es war einfach der Beginn des Jahrzehnts, in dem sie arbeiteten. Mehrere andere Systeme haben unterschiedliche Epochen gewählt: Windows FILETIME verwendet den 1. Januar 1601; macOS HFS+ verwendete den 1. Januar 1904; GPS verwendet den 6. Januar 1980.

### Was ist das 2038-Problem?

Das **2038-Problem** (auch Y2K38 genannt) ist der 32-Bit-Ganzzahlüberlauf mit Vorzeichen, der am **19. Januar 2038 um 03:14:07 UTC** auftritt. Eine vorzeichenbehaftete 32-Bit-Ganzzahl kann Werte bis 2.147.483.647 enthalten. Eine Sekunde später läuft sie zu −2.147.483.648 über, was als 1901-12-13 20:45:52 UTC interpretiert wird. Jedes System, das noch 32-Bit-Unix-Zeitstempel verwendet (hauptsächlich eingebettete Geräte, ältere Datenbanken und einige Dateisysteme), wird brechen, sofern es nicht aktualisiert wird.

Die Lösung ist einfach: Wechseln Sie zu 64-Bit-Ganzzahlen, die den Unix-Zeitstempelbereich um 290 Milliarden Jahre erweitern. Die meisten modernen Systeme haben dies bereits getan; das Problem betrifft hauptsächlich Legacy- und eingebettete Systeme.

### Sind Unix-Zeitstempel in Sekunden oder Millisekunden?

Es hängt von der Sprache ab:

- **Sekunden**: C, Python, Go, Rust, Java (traditionell), Shell, SQL
- **Millisekunden**: JavaScript, Java (java.time.Instant), einige Datenbanken

JavaScript ist der große Ausreißer mit Millisekunden, was zu Fehlern führt, wenn JavaScript-Code mit Code aus anderen Sprachen gemischt wird. Klären Sie immer die Einheit. Der UtilBoxx-Umrechner behandelt beide mit einem einzigen Schalter.

### Wie wirken sich Schaltsekunden auf Unix-Zeitstempel aus?

Streng genommen **ignorieren Unix-Zeitstempel Schaltsekunden**. Sie zählen jede Sekunde, als gäbe es genau 86.400 pro Tag. Das reale UTC hat gelegentliche Schaltsekunden (hinzugefügt, um die Atomzeit mit der Erdrotation in Einklang zu halten), aber die Unix-Zeit enthält sie nicht. Das bedeutet, dass die Unix-Zeit alle paar Jahre um einen Bruchteil einer Sekunde von UTC abdriftet.

In der Praxis spielt dies für Anwendungscode selten eine Rolle. NTP (Network Time Protocol) behandelt die Abweichung. Wenn Sie strikte TAI oder Atomzeit benötigen, sind Unix-Zeitstempel nicht das richtige Werkzeug.

### Was ist „ISO 8601"?

ISO 8601 ist ein internationaler Standard für Datums- und Zeitformate, der darauf ausgelegt ist, eindeutig und maschinenlesbar zu sein. Beispiele:

- \`2023-11-14\` (nur Datum)
- \`2023-11-14T22:13:20\` (Datum und Uhrzeit, ohne Zeitzone)
- \`2023-11-14T22:13:20Z\` (UTC, „Z" = „Zulu time")
- \`2023-11-14T22:13:20+05:00\` (mit Zeitzonen-Offset)
- \`2023-11-14T22:13:20.123Z\` (mit Millisekunden)
- \`20231114T221320Z\` (kompakte Form, ohne Trennzeichen)

ISO 8601 ist das empfohlene Format zum Speichern und Austauschen von Datums-/Zeitwerten, da es lexikografisch sortiert und eindeutig analysiert wird. Die meisten APIs verwenden es.

### Wie erhalte ich den aktuellen Unix-Zeitstempel?

In allen wichtigen Sprachen:

\`\`\`bash
# bash
date +%s
\`\`\`

\`\`\`python
import time
time.time()  # 1700000000.123 (float, mit Sekundenbruchteilen)
int(time.time())  # 1700000000 (Ganzzahlsekunden)
\`\`\`

\`\`\`js
Date.now() / 1000  // 1700000000.123
Math.floor(Date.now() / 1000)  // 1700000000
\`\`\`

## Fazit

Unix-Zeitstempel sind die universelle Sprache der Zeit in der Informatik. Sie sind einfache Ganzzahlen, leicht zu vergleichen, leicht zu speichern und zeitzonenunabhängig. Die Epoche ist der 1. Januar 1970, und Zeitstempel zählen Sekunden ab diesem Zeitpunkt.

Für gelegentliche Umrechnungen ist der [Zeitumrechner von UtilBoxx](/de/tools/unit/time) privat, kostenlos und funktioniert offline, sobald er geladen ist. Für Stapel- oder Skriptarbeit bewältigen Pythons \`datetime\` oder der bash-\`date\`-Befehl jedes Datenvolumen, ohne das Terminal zu verlassen. Für interaktive Arbeit ist JavaScripts \`Date\` in jeden Browser integriert.

Die mentale Abkürzung: **1.000.000.000 = 2001** (Unix-Milliardenste), **1.500.000.000 = 2017**, und **2.000.000.000 = 2033**. Mit diesen Ankern können Sie das Jahr jedes 10-stelligen Zeitstempels im Kopf schätzen. Und denken Sie daran: In 12 Jahren kommt das 2038-Problem, also prüfen Sie jetzt Ihre 32-Bit-Zeitstempel.`;

export const unixTimestampPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-convert-unix-timestamp",
    category: "Unit Tools",
    date: "2026-04-05",
    readTime: "5 min",
    title: "How to Convert Unix Timestamps to Dates (and Back)",
    description: "Convert Unix epoch seconds to human-readable dates in any timezone. With practical examples.",
    content: unixTimestampEn,
  },
  zh: {
    slug: "how-to-convert-unix-timestamp",
    category: "单位工具",
    date: "2026-04-05",
    readTime: "5 分钟",
    title: "如何换算 Unix 时间戳和日期（互转）",
    description: "将 Unix 纪元秒数转换为任何时区的人类可读日期。附实际示例。",
    content: unixTimestampZh,
  },
  ja: {
    slug: "how-to-convert-unix-timestamp",
    category: "単位ツール",
    date: "2026-04-05",
    readTime: "5 分",
    title: "Unix タイムスタンプと日付を変換する方法（およびその逆）",
    description: "Unix エポック秒を任意のタイムゾーンで人間が読める日付に変換。実用例とともに。",
    content: unixTimestampJa,
  },
  es: {
    slug: "how-to-convert-unix-timestamp",
    category: "Herramientas de unidades",
    date: "2026-04-05",
    readTime: "5 min",
    title: "Cómo convertir timestamps Unix a fechas (y viceversa)",
    description: "Convierta segundos de la época Unix a fechas legibles en cualquier zona horaria. Con ejemplos prácticos.",
    content: unixTimestampEs,
  },
  pt: {
    slug: "how-to-convert-unix-timestamp",
    category: "Ferramentas de unidades",
    date: "2026-04-05",
    readTime: "5 min",
    title: "Como converter timestamps Unix para datas (e vice-versa)",
    description: "Converta segundos da época Unix para datas legíveis em qualquer fuso horário. Com exemplos práticos.",
    content: unixTimestampPt,
  },
  fr: {
    slug: "how-to-convert-unix-timestamp",
    category: "Outils d'unités",
    date: "2026-04-05",
    readTime: "5 min",
    title: "Comment convertir des timestamps Unix en dates (et inversement)",
    description: "Convertissez les secondes de l'époque Unix en dates lisibles dans n'importe quel fuseau horaire. Avec des exemples pratiques.",
    content: unixTimestampFr,
  },
  de: {
    slug: "how-to-convert-unix-timestamp",
    category: "Einheiten-Tools",
    date: "2026-04-05",
    readTime: "5 Min",
    title: "Unix-Zeitstempel in Daten umrechnen (und zurück)",
    description: "Rechnen Sie Unix-Epochen-Sekunden in jeder Zeitzone in lesbare Daten um. Mit praktischen Beispielen.",
    content: unixTimestampDe,
  },
};
