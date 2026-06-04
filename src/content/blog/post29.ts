// Blog post: Understanding Unix Timestamps: A Developer's Guide
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const unixTimestampsDevEn = `## Why developers should understand Unix timestamps

A **Unix timestamp** is an integer representing the number of seconds elapsed since **00:00:00 UTC on 1 January 1970** (the Unix epoch). They are the lingua franca of time in computing: databases index them, APIs return them, file systems store them, and protocols like NTP and HTTP use them. Every developer eventually has to convert between Unix timestamps and human-readable dates — and to debug the issues that arise when different systems represent time differently.

This guide covers what Unix timestamps are, how they work in different languages, the time zone and leap second complications, and the upcoming 2038 problem.

## How Unix timestamps work

A Unix timestamp is just an integer count of seconds. There is no time zone, no daylight saving, no calendar arithmetic. Adding 86,400 to a timestamp always advances the date by exactly one day in UTC.

\`\`\`
0           = 1970-01-01 00:00:00 UTC   (the epoch)
1,000       = 1970-01-01 00:16:40 UTC
1,000,000   = 1970-01-12 13:46:40 UTC
1,000,000,000 = 2001-09-09 01:46:40 UTC (the "billennium")
1,500,000,000 = 2017-07-14 02:40:00 UTC
2,000,000,000 = 2033-05-18 03:33:20 UTC
2,147,483,647 = 2038-01-19 03:14:07 UTC (32-bit signed max)
\`\`\`

The largest representable value depends on the integer type:

- **32-bit signed**: 2,147,483,647 (2^31 − 1) → 2038-01-19 03:14:07 UTC
- **32-bit unsigned**: 4,294,967,295 (2^32 − 1) → 2106-02-07 06:28:15 UTC
- **64-bit signed**: 9,223,372,036,854,775,807 → year 292,277,026,596

This is why the **2038 problem** is a thing: any 32-bit signed timestamp overflows on 2038-01-19. 64-bit timestamps avoid the problem for hundreds of billions of years.

## Unix time vs UTC: the leap second issue

Strictly, **Unix time ignores leap seconds**. It counts every second as if there were exactly 86,400 per day, even when the international time authorities add a leap second to UTC. After 27 leap seconds have been inserted (as of 2024), Unix time is now about 27 seconds ahead of "true" UTC.

In practice, this rarely matters. TAI (International Atomic Time) keeps perfect seconds, and UTC stays within 0.9 seconds of UT1 (Earth's rotation time) by adding leap seconds. Unix time simply uses TAI's second count minus a fixed offset.

If you need strict atomic time, use TAI directly. For everything else, Unix time's tiny drift is irrelevant.

## Time zones and offsets

A Unix timestamp refers to a single moment in time. To display it in a human-readable form, you apply a time zone offset. Common offsets:

| Zone | Abbreviation | Offset from UTC |
|------|--------------|-----------------|
| Coordinated Universal Time | UTC | 0 |
| US Eastern (winter) | EST | −5 |
| US Eastern (summer) | EDT | −4 |
| US Pacific (winter) | PST | −8 |
| US Pacific (summer) | PDT | −7 |
| UK (winter) | GMT | 0 |
| UK (summer) | BST | +1 |
| Central Europe (winter) | CET | +1 |
| Central Europe (summer) | CEST | +2 |
| Japan | JST | +9 |
| China | CST | +8 |
| India | IST | +5:30 |
| Australia (Sydney, winter) | AEST | +10 |
| Australia (Sydney, summer) | AEDT | +11 |

Notice that India and China use a single year-round offset (no daylight saving). The US, UK, and most of Europe observe DST, which complicates everything.

A common bug: a server stores a Unix timestamp (always UTC), then displays it without applying the user's local offset, and the user sees a time that is off by several hours. Always store in UTC, always convert to local at display time.

## The 2038 problem in detail

The **2038 problem** (a.k.a. Y2K38) is the 32-bit signed integer overflow that will occur on **2038-01-19 03:14:07 UTC**. The next second overflows to −2,147,483,648, which on most systems is interpreted as **1901-12-13 20:45:52 UTC**. Anything that depends on Unix timestamps as 32-bit signed integers will break:

- File systems that store mtime in 32-bit time_t
- Older databases (older MySQL, some SQLite builds)
- Embedded systems (routers, IoT devices, cars)
- Network protocols that use 32-bit time fields (NTP, DNS, Kerberos, some TLS handshakes)

Modern systems (Linux on 64-bit, macOS on 64-bit, modern Windows, modern databases) have already migrated to 64-bit. The risk is in legacy and embedded code that has not been updated.

The fix: change the data type from \`time_t\` (32-bit) to \`int64_t\` (or equivalent). One declaration change, plus a recompile. The challenge is finding every place the 32-bit assumption lives — file formats, wire protocols, persisted data, third-party libraries.

## Working with Unix timestamps in code

### Python

Python's \`datetime\` module is the canonical tool.

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# Current Unix timestamp (seconds, float)
import time
now = time.time()                              # 1700000000.123

# Convert Unix timestamp to datetime (UTC)
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# Convert Unix timestamp to datetime (specific zone)
ny = datetime.datetime.fromtimestamp(ts, tz=ZoneInfo("America/New_York"))
# 2023-11-14 17:13:20-05:00

# Convert datetime to Unix timestamp
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# Format as ISO 8601
print(utc.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Watch out: \`datetime.fromtimestamp(ts)\` (without \`tz\`) uses the local time zone, which is rarely what you want in a server context. Always pass an explicit time zone.

### JavaScript

JavaScript uses **milliseconds**, not seconds. \`Date.now()\` returns milliseconds since epoch.

\`\`\`js
// Current Unix timestamp in milliseconds
const now = Date.now();
// e.g., 1700000000000

// Current Unix timestamp in seconds
const nowSec = Math.floor(Date.now() / 1000);

// Convert seconds to milliseconds and create a Date
const date = new Date(1700000000 * 1000);
// 2023-11-14T22:13:20.000Z

// Convert milliseconds to seconds
const ts = Math.floor(date.getTime() / 1000);

// Display in a specific timezone using Intl
console.log(date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
// 11/15/2023, 7:13:20 AM

// ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z
\`\`\`

The biggest JavaScript gotcha: every other language uses seconds; JavaScript uses milliseconds. Forgetting to multiply or divide by 1000 is the source of countless "off by a factor of 1000" bugs.

### SQL

Most databases support Unix timestamps natively or via functions.

\`\`\`sql
-- MySQL
SELECT UNIX_TIMESTAMP(NOW());          -- current timestamp (seconds)
SELECT FROM_UNIXTIME(1700000000);     -- 2023-11-14 22:13:20
SELECT FROM_UNIXTIME(1700000000, '%Y-%m-%d %H:%i:%s');

-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());      -- current timestamp (seconds, float)
SELECT TO_TIMESTAMP(1700000000);       -- 2023-11-14 22:13:20+00

-- SQLite
SELECT strftime('%Y-%m-%dT%H:%M:%fZ', 'unixepoch', 1700000000);
-- 2023-11-14T22:13:20.000Z
\`\`\`

The MySQL \`UNIX_TIMESTAMP()\` returns seconds; the PostgreSQL \`EXTRACT(EPOCH FROM ...)\` returns seconds with fractional precision. SQLite requires the manual \`strftime\` recipe.

### Bash

The \`date\` command handles Unix timestamps on every Unix system.

\`\`\`bash
# Current Unix timestamp
date +%s
# 1700000000

# Convert Unix timestamp to a date string
# Linux (GNU date)
date -d @1700000000
# Tue Nov 14 22:13:20 PM UTC 2023

# macOS (BSD date)
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Convert a date string to a Unix timestamp
# Linux
date -d "2023-11-14 22:13:20 UTC" +%s
# macOS
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s

# Display in a specific timezone
TZ="Asia/Tokyo" date -d @1700000000
# Wed Nov 15 07:13:20 JST 2023
\`\`\`

For a quick reference: \`date +%s\` for "now as Unix time" is a one-liner you'll use weekly.

## Storing timestamps in databases

Best practices for database storage:

1. **Store as integers (BIGINT)**: Native Unix timestamps are cheap to store, easy to index, simple to compare.
2. **Always use UTC**: Convert to the local zone only at display time.
3. **Use BIGINT, not INT**: A 32-bit signed integer overflows in 2038. Always use 64-bit.
4. **Consider millisecond precision**: For high-frequency event logging (trading, gaming, telemetry), 1-second resolution is too coarse. Store as BIGINT milliseconds.
5. **Use TIMESTAMP WITH TIME ZONE**: PostgreSQL's \`timestamptz\` is the most robust. MySQL's \`TIMESTAMP\` has the 2038 problem; use \`DATETIME\` instead.
6. **Index timestamp columns**: Queries like \`WHERE created_at > ?\` are extremely common. A BTREE index on a timestamp column makes them fast.

A common schema:

\`\`\`sql
CREATE TABLE events (
  id          BIGSERIAL PRIMARY KEY,
  event_type  TEXT NOT NULL,
  payload     JSONB NOT NULL,
  created_at  BIGINT NOT NULL,                -- Unix ms
  INDEX idx_events_created (created_at)
);
\`\`\`

## Common pitfalls

### The JavaScript millisecond bug

JavaScript timestamps are in **milliseconds**; every other major language uses **seconds**. Mixing them produces timestamps off by a factor of 1000.

\`\`\`js
// From a Python backend
const python_ts = 1700000000;            // seconds
const js_date = new Date(python_ts);     // 1970-01-20T08:13:20.000Z  ← WRONG!

// Correct: multiply by 1000
const js_date = new Date(python_ts * 1000);
\`\`\`

### Time zone display bugs

A timestamp refers to a moment in time, not a date. If your server logs "2023-11-14 22:13:20" without indicating UTC vs. local, the user has no way to know which it is. Always:

- Store as Unix timestamp (inherently UTC)
- Send to clients with an explicit time zone
- Convert to local at display time using the user's actual zone

\`\`\`js
// Server sends "2023-11-14T22:13:20Z" (Z = UTC)
// Client renders it in user's local zone
const d = new Date("2023-11-14T22:13:20Z");
console.log(d.toLocaleString());   // "11/14/2023, 5:13:20 PM" (in EST)
\`\`\`

### DST edge cases

A 24-hour day in spring is actually 23 hours (DST skips an hour); a 24-hour day in fall is 25 hours. Code that assumes "add 86,400 to get tomorrow" works fine; code that does "add 24 × 60 × 60" or "tomorrow at 2:30 AM" can fail across DST transitions.

\`\`\`python
# This is a 23-hour or 25-hour day in DST zones
d = datetime.datetime(2024, 3, 10, 1, 0, 0, tzinfo=ZoneInfo("America/New_York"))  # DST starts
print((d + datetime.timedelta(days=1)).isoformat())
# 2024-03-11T01:00:00-05:00  ← correct
print((d + datetime.timedelta(hours=24)).isoformat())
# 2024-03-11T02:00:00-04:00  ← DST has jumped, this is 25 hours later
\`\`\`

For scheduling and time-of-day math, prefer libraries (Luxon, Arrow, date-fns) that handle these edge cases correctly.

## Method 1: Use UtilBoxx's Timestamp Converter (Recommended)

For quick conversions during development, the [UtilBoxx Timestamp Converter](/en/tools/dev/timestamp) is a private, in-browser tool that converts between Unix timestamps and dates in any timezone, supports both seconds and milliseconds, and runs entirely client-side. No upload, no signup, no log. Bookmark it for the next time you need to decode an unfamiliar timestamp from an API response.

## Conclusion

Unix timestamps are simple, fast, and universal — but the surrounding ecosystem (time zones, leap seconds, the 2038 problem, millisecond vs. second confusion) is full of traps. Every developer eventually hits each of these; the only defense is to know they exist.

Best practices:

- **Store as 64-bit integers** in UTC
- **Convert to local at display time** with the user's actual time zone
- **Use a real time zone library** (Luxon, date-fns-tz, zoneinfo) for non-trivial time math
- **Audit 32-bit timestamps now** if you maintain legacy code

Unix timestamps are one of the oldest data formats still in use, and they will outlive us all — but only if we use them correctly.`;

const unixTimestampsDevZh = `## 为什么开发者应该理解 Unix 时间戳

**Unix 时间戳**是一个整数，表示自 **1970 年 1 月 1 日 UTC 00:00:00**（Unix 纪元）以来经过的秒数。它们是计算中时间的通用语言：数据库索引它们，API 返回它们，文件系统存储它们，NTP 和 HTTP 等协议使用它们。每个开发者最终都必须在 Unix 时间戳和人类可读日期之间进行转换 —— 并调试不同系统以不同方式表示时间时出现的问题。

本指南涵盖 Unix 时间戳是什么、它们如何在不同语言中工作、时区和闰秒的复杂性，以及即将到来的 2038 年问题。

## Unix 时间戳如何工作

Unix 时间戳只是一个整数秒计数。没有时区，没有夏令时，没有日历算术。给时间戳加 86,400 总是将日期在 UTC 中精确推进一天。

\`\`\`
0           = 1970-01-01 00:00:00 UTC   （纪元）
1,000       = 1970-01-01 00:16:40 UTC
1,000,000   = 1970-01-12 13:46:40 UTC
1,000,000,000 = 2001-09-09 01:46:40 UTC （"十亿秒"）
1,500,000,000 = 2017-07-14 02:40:00 UTC
2,000,000,000 = 2033-05-18 03:33:20 UTC
2,147,483,647 = 2038-01-19 03:14:07 UTC （32 位有符号最大值）
\`\`\`

最大可表示值取决于整数类型：

- **32 位有符号**：2,147,483,647 (2^31 − 1) → 2038-01-19 03:14:07 UTC
- **32 位无符号**：4,294,967,295 (2^32 − 1) → 2106-02-07 06:28:15 UTC
- **64 位有符号**：9,223,372,036,854,775,807 → 292,277,026,596 年

这就是**2038 年问题**存在的原因：任何 32 位有符号时间戳都会在 2038-01-19 溢出。64 位时间戳可以避免这个问题达数千亿年。

## Unix 时间 vs UTC：闰秒问题

严格来说，**Unix 时间忽略闰秒**。它把每天算作正好 86,400 秒，即使国际时间机构向 UTC 添加了闰秒。在插入了 27 个闰秒之后（截至 2024 年），Unix 时间现在比"真正的"UTC 提前约 27 秒。

实际上，这很少有影响。TAI（国际原子时）保持完美的秒，UTC 通过添加闰秒保持在 UT1（地球自转时间）的 0.9 秒以内。Unix 时间简单地使用 TAI 的秒计数减去一个固定偏移。

如果你需要严格的原子时间，请直接使用 TAI。对于其他一切，Unix 时间的微小漂移是无关紧要的。

## 时区和偏移

Unix 时间戳指的是时间中的单个瞬间。要以人类可读的形式显示它，你需要应用时区偏移。常见偏移：

| 时区 | 缩写 | 距 UTC 的偏移 |
|------|------|---------------|
| 协调世界时 | UTC | 0 |
| 美国东部（冬） | EST | −5 |
| 美国东部（夏） | EDT | −4 |
| 美国太平洋（冬） | PST | −8 |
| 美国太平洋（夏） | PDT | −7 |
| 英国（冬） | GMT | 0 |
| 英国（夏） | BST | +1 |
| 中欧（冬） | CET | +1 |
| 中欧（夏） | CEST | +2 |
| 日本 | JST | +9 |
| 中国 | CST | +8 |
| 印度 | IST | +5:30 |
| 澳大利亚（悉尼，冬） | AEST | +10 |
| 澳大利亚（悉尼，夏） | AEDT | +11 |

注意：印度和中国使用单一的全年偏移（无夏令时）。美国、英国和大多数欧洲国家实行夏令时，这使一切变得复杂。

一个常见的 bug：服务器存储 Unix 时间戳（始终是 UTC），然后在显示时不应用用户的本地偏移，用户看到的时间偏差几个小时。始终以 UTC 存储，始终在显示时转换为本地时间。

## 2038 年问题详解

**2038 年问题**（又称 Y2K38）是将发生在 **2038-01-19 03:14:07 UTC** 的 32 位有符号整数溢出。下一秒溢出到 −2,147,483,648，在大多数系统上被解释为 **1901-12-13 20:45:52 UTC**。任何依赖 Unix 时间戳作为 32 位有符号整数的东西都会崩溃：

- 将 mtime 存储为 32 位 time_t 的文件系统
- 较旧的数据库（较旧的 MySQL、某些 SQLite 版本）
- 嵌入式系统（路由器、物联网设备、汽车）
- 使用 32 位时间字段的网络协议（NTP、DNS、Kerberos、某些 TLS 握手）

现代系统（64 位 Linux、64 位 macOS、现代 Windows、现代数据库）已经迁移到 64 位。风险在于未更新的遗留和嵌入式代码。

修复方法：将数据类型从 \`time_t\`（32 位）更改为 \`int64_t\`（或等效）。一个声明更改，加上重新编译。挑战在于找到 32 位假设存在的每个地方 —— 文件格式、线协议、持久化数据、第三方库。

## 在代码中使用 Unix 时间戳

### Python

Python 的 \`datetime\` 模块是规范工具。

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# 当前 Unix 时间戳（秒，浮点）
import time
now = time.time()                              # 1700000000.123

# 将 Unix 时间戳转换为 datetime（UTC）
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# 将 Unix 时间戳转换为 datetime（特定时区）
ny = datetime.datetime.fromtimestamp(ts, tz=ZoneInfo("America/New_York"))
# 2023-11-14 17:13:20-05:00

# 将 datetime 转换为 Unix 时间戳
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# 格式化为 ISO 8601
print(utc.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

注意：\`datetime.fromtimestamp(ts)\`（不带 \`tz\`）使用本地时区，这在服务器环境中很少是你想要的。始终传递显式时区。

### JavaScript

JavaScript 使用**毫秒**而不是秒。\`Date.now()\` 返回自纪元以来的毫秒数。

\`\`\`js
// 当前 Unix 时间戳（毫秒）
const now = Date.now();
// 例如，1700000000000

// 当前 Unix 时间戳（秒）
const nowSec = Math.floor(Date.now() / 1000);

// 将秒转换为毫秒并创建 Date
const date = new Date(1700000000 * 1000);
// 2023-11-14T22:13:20.000Z

// 将毫秒转换为秒
const ts = Math.floor(date.getTime() / 1000);

// 使用 Intl 在特定时区显示
console.log(date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
// 11/15/2023, 7:13:20 AM

// ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z
\`\`\`

JavaScript 最大的陷阱：每个其他语言都使用秒；JavaScript 使用毫秒。忘记乘以或除以 1000 是无数"差 1000 倍"bug 的根源。

### SQL

大多数数据库原生支持 Unix 时间戳或通过函数支持。

\`\`\`sql
-- MySQL
SELECT UNIX_TIMESTAMP(NOW());          -- 当前时间戳（秒）
SELECT FROM_UNIXTIME(1700000000);     -- 2023-11-14 22:13:20
SELECT FROM_UNIXTIME(1700000000, '%Y-%m-%d %H:%i:%s');

-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());      -- 当前时间戳（秒，浮点）
SELECT TO_TIMESTAMP(1700000000);       -- 2023-11-14 22:13:20+00

-- SQLite
SELECT strftime('%Y-%m-%dT%H:%M:%fZ', 'unixepoch', 1700000000);
-- 2023-11-14T22:13:20.000Z
\`\`\`

MySQL 的 \`UNIX_TIMESTAMP()\` 返回秒；PostgreSQL 的 \`EXTRACT(EPOCH FROM ...)\` 返回带小数精度的秒。SQLite 需要手动 \`strftime\` 配方。

### Bash

\`date\` 命令在每个 Unix 系统上处理 Unix 时间戳。

\`\`\`bash
# 当前 Unix 时间戳
date +%s
# 1700000000

# 将 Unix 时间戳转换为日期字符串
# Linux（GNU date）
date -d @1700000000
# Tue Nov 14 22:13:20 PM UTC 2023

# macOS（BSD date）
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# 将日期字符串转换为 Unix 时间戳
# Linux
date -d "2023-11-14 22:13:20 UTC" +%s
# macOS
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s

# 在特定时区显示
TZ="Asia/Tokyo" date -d @1700000000
# Wed Nov 15 07:13:20 JST 2023
\`\`\`

快速参考：\`date +%s\`（"当前 Unix 时间"）是一个你每周都会用的一行命令。

## 在数据库中存储时间戳

数据库存储的最佳实践：

1. **存储为整数（BIGINT）**：原生 Unix 时间戳便宜、易于存储、易于索引、易于比较。
2. **始终使用 UTC**：仅在显示时转换为本地时区。
3. **使用 BIGINT，而不是 INT**：32 位有符号整数会在 2038 年溢出。始终使用 64 位。
4. **考虑毫秒精度**：对于高频事件日志（交易、游戏、遥测），1 秒分辨率太粗。存储为 BIGINT 毫秒。
5. **使用 TIMESTAMP WITH TIME ZONE**：PostgreSQL 的 \`timestamptz\` 是最健壮的。MySQL 的 \`TIMESTAMP\` 有 2038 年问题；请改用 \`DATETIME\`。
6. **索引时间戳列**：像 \`WHERE created_at > ?\` 这样的查询非常常见。在时间戳列上的 BTREE 索引使它们快速。

一个常见的模式：

\`\`\`sql
CREATE TABLE events (
  id          BIGSERIAL PRIMARY KEY,
  event_type  TEXT NOT NULL,
  payload     JSONB NOT NULL,
  created_at  BIGINT NOT NULL,                -- Unix ms
  INDEX idx_events_created (created_at)
);
\`\`\`

## 常见陷阱

### JavaScript 毫秒 bug

JavaScript 时间戳以**毫秒**为单位；每个其他主要语言都使用**秒**。混合使用它们会产生差 1000 倍的时间戳。

\`\`\`js
// 来自 Python 后端
const python_ts = 1700000000;            // 秒
const js_date = new Date(python_ts);     // 1970-01-20T08:13:20.000Z  ← 错误！

// 正确：乘以 1000
const js_date = new Date(python_ts * 1000);
\`\`\`

### 时区显示 bug

时间戳指的是时间中的一个时刻，而不是一个日期。如果你的服务器记录"2023-11-14 22:13:20"而没有指明 UTC 还是本地，用户无法知道是哪个。始终：

- 存储为 Unix 时间戳（本质上是 UTC）
- 发送给带有显式时区的客户端
- 在显示时使用用户的实际时区转换为本地时间

\`\`\`js
// 服务器发送 "2023-11-14T22:13:20Z"（Z = UTC）
// 客户端在用户的本地时区渲染
const d = new Date("2023-11-14T22:13:20Z");
console.log(d.toLocaleString());   // "11/14/2023, 5:13:20 PM"（在 EST）
\`\`\`

### 夏令时边界情况

春季的 24 小时实际上是 23 小时（夏令时跳过一小时）；秋季的 24 小时是 25 小时。假设"加 86,400 得到明天"的代码工作正常；而做"加 24 × 60 × 60"或"明天 2:30 AM"的代码可能在夏令时转换时失败。

\`\`\`python
# 在夏令时时区中，这是 23 小时或 25 小时的一天
d = datetime.datetime(2024, 3, 10, 1, 0, 0, tzinfo=ZoneInfo("America/New_York"))  # 夏令时开始
print((d + datetime.timedelta(days=1)).isoformat())
# 2024-03-11T01:00:00-05:00  ← 正确
print((d + datetime.timedelta(hours=24)).isoformat())
# 2024-03-11T02:00:00-04:00  ← 夏令时已跳转，这是 25 小时后
\`\`\`

对于调度和时刻数学，优先使用正确处理这些边缘情况的库（Luxon、Arrow、date-fns）。

## 方法一：使用 UtilBoxx 时间戳换算工具（推荐）

对于开发过程中的快速换算，[UtilBoxx 时间戳换算工具](/zh/tools/dev/timestamp) 是一个私密的、浏览器内的工具，可以在任何时区在 Unix 时间戳和日期之间进行换算，支持秒和毫秒，完全在客户端运行。没有上传、没有注册、没有日志。下次你需要解码 API 响应中不熟悉的时间戳时，把它加入书签。

## 结论

Unix 时间戳是简单、快速和通用的 —— 但周围的生态系统（时区、闰秒、2038 年问题、毫秒 vs 秒混淆）充满了陷阱。每个开发者最终都会遇到每一个；唯一的防御就是知道它们的存在。

最佳实践：

- 在 UTC 中以 64 位整数存储
- 在显示时使用用户的实际时区转换为本地时间
- 对非平凡的时间数学使用真正的时区库（Luxon、date-fns-tz、zoneinfo）
- 如果你维护遗留代码，立即审计 32 位时间戳

Unix 时间戳是仍在使用的最古老的数据格式之一，它们将比我们所有人都更长寿 —— 但前提是我们正确使用它们。`;

const unixTimestampsDevJa = `## なぜ開発者が Unix タイムスタンプを理解すべきか

**Unix タイムスタンプ**は、**1970 年 1 月 1 日 UTC 00:00:00**（Unix エポック）から経過した秒数を表す整数です。コンピューティングにおける時間の共通語です：データベースはインデックス化し、API は返し、ファイルシステムは保存し、NTP や HTTP などのプロトコルは使用します。すべての開発者は最終的に Unix タイムスタンプと人間が読める日付の間で変換を行う必要があります —— また、異なるシステムが時間を異なる方法で表すときに発生する問題をデバッグする必要があります。

このガイドでは、Unix タイムスタンプとは何か、それらが異なる言語でどのように動作するか、タイムゾーンと閏秒の複雑さ、そして今後の 2038 年問題について説明します。

## Unix タイムスタンプの仕組み

Unix タイムスタンプは単なる整数の秒数です。タイムゾーン、夏時間、カレンダー算術はありません。タイムスタンプに 86,400 を追加すると、UTC で常に正確に 1 日進みます。

\`\`\`
0           = 1970-01-01 00:00:00 UTC   （エポック）
1,000       = 1970-01-01 00:16:40 UTC
1,000,000   = 1970-01-12 13:46:40 UTC
1,000,000,000 = 2001-09-09 01:46:40 UTC （"10 億秒"）
1,500,000,000 = 2017-07-14 02:40:00 UTC
2,000,000,000 = 2033-05-18 03:33:20 UTC
2,147,483,647 = 2038-01-19 03:14:07 UTC （32 ビット符号付き最大）
\`\`\`

表現可能な最大値は整数型に依存します：

- **32 ビット符号付き**：2,147,483,647 (2^31 − 1) → 2038-01-19 03:14:07 UTC
- **32 ビット符号なし**：4,294,967,295 (2^32 − 1) → 2106-02-07 06:28:15 UTC
- **64 ビット符号付き**：9,223,372,036,854,775,807 → 292,277,026,596 年

これが**2038 年問題**が存在する理由です：32 ビット符号付きタイムスタンプはすべて 2038-01-19 にオーバーフローします。64 ビットタイムスタンプは数千億年の間この問題を回避します。

## Unix 時間と UTC：閏秒の問題

厳密に言えば、**Unix 時間は閏秒を無視します**。UTC に閏秒が追加された場合でも、毎日が正確に 86,400 秒であるかのように秒を数えます。27 個の閏秒が挿入された後（2024 年現在）、Unix 時間は「真の」UTC より約 27 秒進んでいます。

実際には、これはほとんど問題になりません。TAI（国際原子時）は完璧な秒を刻み、UTC は閏秒を追加することで UT1（地球の自転時間）の 0.9 秒以内に保たれます。Unix 時間は単に固定オフセットを引いた TAI の秒数を使用します。

厳密な原子時間が必要な場合は、TAI を直接使用してください。それ以外の場合、Unix 時間のわずかな drift は無関係です。

## タイムゾーンとオフセット

Unix タイムスタンプは時間の中の単一の瞬間を指します。人間が読める形式で表示するには、タイムゾーンオフセットを適用します。一般的なオフセット：

| ゾーン | 略称 | UTC からのオフセット |
|------|------|-----------------|
| 協定世界時 | UTC | 0 |
| 米国東部（冬） | EST | −5 |
| 米国東部（夏） | EDT | −4 |
| 米国太平洋（冬） | PST | −8 |
| 米国太平洋（夏） | PDT | −7 |
| 英国（冬） | GMT | 0 |
| 英国（夏） | BST | +1 |
| 中央ヨーロッパ（冬） | CET | +1 |
| 中央ヨーロッパ（夏） | CEST | +2 |
| 日本 | JST | +9 |
| 中国 | CST | +8 |
| インド | IST | +5:30 |
| オーストラリア（シドニー、冬） | AEST | +10 |
| オーストラリア（シドニー、夏） | AEDT | +11 |

インドと中国は年間を通じて単一のオフセットを使用します（夏時間なし）。米国、英国、およびほとんどのヨーロッパは夏時間を採用しており、すべてが複雑になります。

一般的なバグ：サーバーが Unix タイムスタンプ（常に UTC）を保存し、ユーザーのローカルオフセットを適用せずに表示すると、ユーザーは数時間ずれた時間を見ます。常に UTC で保存し、表示時にローカルに変換してください。

## 2038 年問題の詳細

**2038 年問題**（別名 Y2K38）は、**2038-01-19 03:14:07 UTC** に発生する 32 ビット符号付き整数のオーバーフローです。次の 1 秒で −2,147,483,648 にオーバーフローし、ほとんどのシステムで **1901-12-13 20:45:52 UTC** として解釈されます。Unix タイムスタンプを 32 ビット符号付き整数として依存するものが壊れます：

- mtime を 32 ビット time_t として保存するファイルシステム
- 古いデータベース（古い MySQL、一部の SQLite ビルド）
- 組み込みシステム（ルーター、IoT デバイス、車）
- 32 ビット時間フィールドを使用するネットワークプロトコル（NTP、DNS、Kerberos、一部の TLS ハンドシェイク）

最新のシステム（64 ビット Linux、64 ビット macOS、最新の Windows、最新のデータベース）はすでに 64 ビットに移行しています。リスクは更新されていないレガシーおよび組み込みコードにあります。

修正：データ型を \`time_t\`（32 ビット）から \`int64_t\`（または同等のもの）に変更します。1 つの宣言変更と再コンパイル。課題は 32 ビット仮定が存在するすべての場所を見つけることです —— ファイル形式、ワイヤープロトコル、永続化されたデータ、サードパーティライブラリ。

## コードでの Unix タイムスタンプの操作

### Python

Python の \`datetime\` モジュールは正規ツールです。

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# 現在の Unix タイムスタンプ（秒、浮動小数点）
import time
now = time.time()                              # 1700000000.123

# Unix タイムスタンプを datetime（UTC）に変換
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# Unix タイムスタンプを datetime（特定のゾーン）に変換
ny = datetime.datetime.fromtimestamp(ts, tz=ZoneInfo("America/New_York"))
# 2023-11-14 17:13:20-05:00

# datetime を Unix タイムスタンプに変換
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# ISO 8601 としてフォーマット
print(utc.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

注意：\`datetime.fromtimestamp(ts)\`（\`tz\` なし）はローカルタイムゾーンを使用します。これはサーバーコンテキストではめったに望まれません。常に明示的なタイムゾーンを渡してください。

### JavaScript

JavaScript は秒ではなく**ミリ秒**を使用します。\`Date.now()\` はエポックからのミリ秒を返します。

\`\`\`js
// 現在の Unix タイムスタンプ（ミリ秒）
const now = Date.now();
// 例：1700000000000

// 現在の Unix タイムスタンプ（秒）
const nowSec = Math.floor(Date.now() / 1000);

// 秒をミリ秒に変換して Date を作成
const date = new Date(1700000000 * 1000);
// 2023-11-14T22:13:20.000Z

// ミリ秒を秒に変換
const ts = Math.floor(date.getTime() / 1000);

// Intl を使用して特定のタイムゾーンで表示
console.log(date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
// 11/15/2023, 7:13:20 AM

// ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z
\`\`\`

JavaScript の最大の落とし穴：他のすべての言語は秒を使用します。JavaScript はミリ秒を使用します。1000 倍の乗算または除算を忘れることは、無数の「1000 倍ずれる」バグの原因です。

### SQL

ほとんどのデータベースは Unix タイムスタンプをネイティブまたは関数経由でサポートします。

\`\`\`sql
-- MySQL
SELECT UNIX_TIMESTAMP(NOW());          -- 現在のタイムスタンプ（秒）
SELECT FROM_UNIXTIME(1700000000);     -- 2023-11-14 22:13:20
SELECT FROM_UNIXTIME(1700000000, '%Y-%m-%d %H:%i:%s');

-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());      -- 現在のタイムスタンプ（秒、浮動小数点）
SELECT TO_TIMESTAMP(1700000000);       -- 2023-11-14 22:13:20+00

-- SQLite
SELECT strftime('%Y-%m-%dT%H:%M:%fZ', 'unixepoch', 1700000000);
-- 2023-11-14T22:13:20.000Z
\`\`\`

MySQL の \`UNIX_TIMESTAMP()\` は秒を返します。PostgreSQL の \`EXTRACT(EPOCH FROM ...)\` は小数精度付きの秒を返します。SQLite は手動の \`strftime\` レシピが必要です。

### Bash

\`date\` コマンドはすべての Unix システムで Unix タイムスタンプを処理します。

\`\`\`bash
# 現在の Unix タイムスタンプ
date +%s
# 1700000000

# Unix タイムスタンプを日付文字列に変換
# Linux（GNU date）
date -d @1700000000
# Tue Nov 14 22:13:20 PM UTC 2023

# macOS（BSD date）
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# 日付文字列を Unix タイムスタンプに変換
# Linux
date -d "2023-11-14 22:13:20 UTC" +%s
# macOS
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s

# 特定のタイムゾーンで表示
TZ="Asia/Tokyo" date -d @1700000000
# Wed Nov 15 07:13:20 JST 2023
\`\`\`

クイックリファレンス：\`date +%s\`（「現在を Unix 時刻で」）は、毎週使うワンライナーです。

## データベースでのタイムスタンプの保存

データベース保存のベストプラクティス：

1. **整数（BIGINT）として保存**：ネイティブ Unix タイムスタンプは保存が安価で、インデックス化が容易で、比較が簡単です。
2. **常に UTC を使用**：表示時にのみローカルタイムゾーンに変換します。
3. **INT ではなく BIGINT を使用**：32 ビット符号付き整数は 2038 年にオーバーフローします。常に 64 ビットを使用してください。
4. **ミリ秒精度を検討**：高頻度イベントロギング（取引、ゲーム、テレメトリ）の場合、1 秒の解像度は粗すぎます。BIGINT ミリ秒として保存します。
5. **TIMESTAMP WITH TIME ZONE を使用**：PostgreSQL の \`timestamptz\` が最も堅牢です。MySQL の \`TIMESTAMP\` には 2038 年問題があります。代わりに \`DATETIME\` を使用してください。
6. **タイムスタンプ列にインデックスを作成**：\`WHERE created_at > ?\` のようなクエリは非常に一般的です。タイムスタンプ列の BTREE インデックスにより高速になります。

一般的なスキーマ：

\`\`\`sql
CREATE TABLE events (
  id          BIGSERIAL PRIMARY KEY,
  event_type  TEXT NOT NULL,
  payload     JSONB NOT NULL,
  created_at  BIGINT NOT NULL,                -- Unix ms
  INDEX idx_events_created (created_at)
);
\`\`\`

## よくある落とし穴

### JavaScript ミリ秒バグ

JavaScript タイムスタンプは**ミリ秒**単位です。他のすべての主要言語は**秒**を使用します。それらを混在させると、1000 倍ずれたタイムスタンプが生成されます。

\`\`\`js
// Python バックエンドから
const python_ts = 1700000000;            // 秒
const js_date = new Date(python_ts);     // 1970-01-20T08:13:20.000Z  ← 間違い！

// 正解：1000 を掛ける
const js_date = new Date(python_ts * 1000);
\`\`\`

### タイムゾーン表示バグ

タイムスタンプは時間の中の瞬間を指し、日付ではありません。サーバーが「2023-11-14 22:13:20」を UTC なのかローカルなのかを示さずにログに記録すると、ユーザーはどちらかを知る方法がありません。常に：

- Unix タイムスタンプとして保存（本質的に UTC）
- 明示的なタイムゾーンでクライアントに送信
- ユーザーの実際のタイムゾーンで表示時にローカルに変換

\`\`\`js
// サーバーが "2023-11-14T22:13:20Z"（Z = UTC）を送信
// クライアントがユーザーのローカルタイムゾーンでレンダリング
const d = new Date("2023-11-14T22:13:20Z");
console.log(d.toLocaleString());   // "11/14/2023, 5:13:20 PM"（EST で）
\`\`\`

### 夏時間のエッジケース

春の 24 時間は実際には 23 時間（夏時間が 1 時間をスキップする）；秋の 24 時間は 25 時間です。「86,400 を足して明日を取得する」と仮定するコードは問題なく動作します。一方、「24 × 60 × 60 を足す」または「明日の午前 2:30」とするコードは、夏時間の遷移をまたぐと失敗する可能性があります。

\`\`\`python
# 夏時間タイムゾーンでは、これは 23 時間または 25 時間の日
d = datetime.datetime(2024, 3, 10, 1, 0, 0, tzinfo=ZoneInfo("America/New_York"))  # 夏時間開始
print((d + datetime.timedelta(days=1)).isoformat())
# 2024-03-11T01:00:00-05:00  ← 正しい
print((d + datetime.timedelta(hours=24)).isoformat())
# 2024-03-11T02:00:00-04:00  ← 夏時間がジャンプ、これは 25 時間後
\`\`\`

スケジューリングや時刻の計算には、これらのエッジケースを正しく処理するライブラリ（Luxon、Arrow、date-fns）を優先してください。

## 方法 1：UtilBoxx タイムスタンプ換算ツール（推奨）

開発中の迅速な換算には、[UtilBoxx タイムスタンプ換算ツール](/ja/tools/dev/timestamp) は、Unix タイムスタンプと日付を任意のタイムゾーンで相互に換算し、秒とミリ秒の両方をサポートし、完全にクライアントサイドで実行されるプライベートなブラウザ内ツールです。アップロードなし、登録なし、ログなし。API レスポンスの未知のタイムスタンプを次にデコードする必要があるときに、ブックマークしてください。

## まとめ

Unix タイムスタンプはシンプルで、高速で、普遍的ですが —— 周囲のエコシステム（タイムゾーン、閏秒、2038 年問題、ミリ秒 vs 秒の混乱）は落とし穴だらけです。すべての開発者は最終的にこれらすべてに遭遇します。唯一の防御は、それらが存在することを知ることです。

ベストプラクティス：

- UTC で 64 ビット整数として保存
- 表示時にユーザーの実際のタイムゾーンでローカルに変換
- 非自明な時間計算には本格的なタイムゾーンライブラリ（Luxon、date-fns-tz、zoneinfo）を使用
- レガシーコードを保守している場合は今すぐ 32 ビットタイムスタンプを監査

Unix タイムスタンプは現在も使用されている最も古いデータ形式の一つであり、私たち全員より長生きするでしょう —— しかし、正しく使用する場合に限ります。`;

const unixTimestampsDevEs = `## Por qué los desarrolladores deben entender los timestamps Unix

Un **timestamp Unix** es un entero que representa el número de segundos transcurridos desde **00:00:00 UTC del 1 de enero de 1970** (la época Unix). Son la lengua franca del tiempo en la informática: las bases de datos los indexan, las APIs los devuelven, los sistemas de archivos los almacenan, y protocolos como NTP y HTTP los usan. Todo desarrollador eventualmente tiene que convertir entre timestamps Unix y fechas legibles por humanos — y depurar los problemas que surgen cuando diferentes sistemas representan el tiempo de manera diferente.

Esta guía cubre qué son los timestamps Unix, cómo funcionan en diferentes lenguajes, las complicaciones de zonas horarias y segundos intercalares, y el próximo problema de 2038.

## Cómo funcionan los timestamps Unix

Un timestamp Unix es solo un conteo entero de segundos. No hay zona horaria, no hay horario de verano, no hay aritmética de calendario. Sumar 86,400 a un timestamp siempre avanza la fecha exactamente un día en UTC.

\`\`\`
0           = 1970-01-01 00:00:00 UTC   (la época)
1,000       = 1970-01-01 00:16:40 UTC
1,000,000   = 1970-01-12 13:46:40 UTC
1,000,000,000 = 2001-09-09 01:46:40 UTC (el "billonio")
1,500,000,000 = 2017-07-14 02:40:00 UTC
2,000,000,000 = 2033-05-18 03:33:20 UTC
2,147,483,647 = 2038-01-19 03:14:07 UTC (máx. 32 bits con signo)
\`\`\`

El valor máximo representable depende del tipo de entero:

- **32 bits con signo**: 2.147.483.647 (2^31 − 1) → 2038-01-19 03:14:07 UTC
- **32 bits sin signo**: 4.294.967.295 (2^32 − 1) → 2106-02-07 06:28:15 UTC
- **64 bits con signo**: 9.223.372.036.854.775.807 → año 292.277.026.596

Por eso existe el **problema de 2038**: cualquier timestamp con signo de 32 bits se desborda el 2038-01-19. Los timestamps de 64 bits evitan el problema durante cientos de miles de millones de años.

## Tiempo Unix vs UTC: el problema del segundo intercalar

Estrictamente, **el tiempo Unix ignora los segundos intercalares**. Cuenta cada segundo como si hubiera exactamente 86.400 por día, incluso cuando las autoridades internacionales de tiempo añaden un segundo intercalar a UTC. Después de que se hayan insertado 27 segundos intercalares (a fecha de 2024), el tiempo Unix está ahora unos 27 segundos por delante del UTC "verdadero".

En la práctica, esto rara vez importa. TAI (Tiempo Atómico Internacional) mantiene segundos perfectos, y UTC se mantiene dentro de 0,9 segundos de UT1 (tiempo de rotación de la Tierra) añadiendo segundos intercalares. El tiempo Unix simplemente usa el conteo de segundos de TAI menos un desplazamiento fijo.

Si necesitas tiempo atómico estricto, usa TAI directamente. Para todo lo demás, la pequeña deriva del tiempo Unix es irrelevante.

## Zonas horarias y desplazamientos

Un timestamp Unix se refiere a un único instante en el tiempo. Para mostrarlo en forma legible por humanos, aplicas un desplazamiento de zona horaria. Desplazamientos comunes:

| Zona | Abreviatura | Desplazamiento desde UTC |
|------|-------------|--------------------------|
| Tiempo Universal Coordinado | UTC | 0 |
| Este de EE. UU. (invierno) | EST | −5 |
| Este de EE. UU. (verano) | EDT | −4 |
| Pacífico de EE. UU. (invierno) | PST | −8 |
| Pacífico de EE. UU. (verano) | PDT | −7 |
| Reino Unido (invierno) | GMT | 0 |
| Reino Unido (verano) | BST | +1 |
| Europa Central (invierno) | CET | +1 |
| Europa Central (verano) | CEST | +2 |
| Japón | JST | +9 |
| China | CST | +8 |
| India | IST | +5:30 |
| Australia (Sídney, invierno) | AEST | +10 |
| Australia (Sídney, verano) | AEDT | +11 |

Observa que India y China usan un único desplazamiento durante todo el año (sin horario de verano). EE. UU., Reino Unido y la mayor parte de Europa observan DST, lo que complica todo.

Un error común: un servidor almacena un timestamp Unix (siempre UTC), luego lo muestra sin aplicar el desplazamiento local del usuario, y el usuario ve una hora desplazada varias horas. Almacena siempre en UTC, convierte a local en el momento de mostrar.

## El problema de 2038 en detalle

El **problema de 2038** (también Y2K38) es el desbordamiento de entero con signo de 32 bits que ocurrirá el **2038-01-19 03:14:07 UTC**. El siguiente segundo se desborda a −2.147.483.648, que en la mayoría de los sistemas se interpreta como **1901-12-13 20:45:52 UTC**. Cualquier cosa que dependa de timestamps Unix como enteros con signo de 32 bits se romperá:

- Sistemas de archivos que almacenan mtime en time_t de 32 bits
- Bases de datos antiguas (MySQL antiguo, algunas builds de SQLite)
- Sistemas embebidos (routers, dispositivos IoT, coches)
- Protocolos de red que usan campos de tiempo de 32 bits (NTP, DNS, Kerberos, algunos handshakes TLS)

Los sistemas modernos (Linux de 64 bits, macOS de 64 bits, Windows moderno, bases de datos modernas) ya han migrado a 64 bits. El riesgo está en código heredado y embebido que no se ha actualizado.

La solución: cambiar el tipo de dato de \`time_t\` (32 bits) a \`int64_t\` (o equivalente). Un cambio de declaración, más una recompilación. El reto es encontrar cada lugar donde vive la suposición de 32 bits — formatos de archivo, protocolos de red, datos persistidos, bibliotecas de terceros.

## Trabajando con timestamps Unix en código

### Python

El módulo \`datetime\` de Python es la herramienta canónica.

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# Timestamp Unix actual (segundos, float)
import time
now = time.time()                              # 1700000000.123

# Convertir timestamp Unix a datetime (UTC)
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# Convertir timestamp Unix a datetime (zona específica)
ny = datetime.datetime.fromtimestamp(ts, tz=ZoneInfo("America/New_York"))
# 2023-11-14 17:13:20-05:00

# Convertir datetime a timestamp Unix
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# Formatear como ISO 8601
print(utc.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Cuidado: \`datetime.fromtimestamp(ts)\` (sin \`tz\`) usa la zona horaria local, que rara vez es lo que quieres en un contexto de servidor. Pasa siempre una zona horaria explícita.

### JavaScript

JavaScript usa **milisegundos**, no segundos. \`Date.now()\` devuelve milisegundos desde la época.

\`\`\`js
// Timestamp Unix actual en milisegundos
const now = Date.now();
// p. ej., 1700000000000

// Timestamp Unix actual en segundos
const nowSec = Math.floor(Date.now() / 1000);

// Convertir segundos a milisegundos y crear un Date
const date = new Date(1700000000 * 1000);
// 2023-11-14T22:13:20.000Z

// Convertir milisegundos a segundos
const ts = Math.floor(date.getTime() / 1000);

// Mostrar en una zona horaria específica con Intl
console.log(date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
// 11/15/2023, 7:13:20 AM

// ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z
\`\`\`

El mayor escollo de JavaScript: todos los demás lenguajes usan segundos; JavaScript usa milisegundos. Olvidar multiplicar o dividir por 1000 es la fuente de incontables errores "fuera por un factor de 1000".

### SQL

La mayoría de bases de datos soportan timestamps Unix nativamente o mediante funciones.

\`\`\`sql
-- MySQL
SELECT UNIX_TIMESTAMP(NOW());          -- timestamp actual (segundos)
SELECT FROM_UNIXTIME(1700000000);     -- 2023-11-14 22:13:20
SELECT FROM_UNIXTIME(1700000000, '%Y-%m-%d %H:%i:%s');

-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());      -- timestamp actual (segundos, float)
SELECT TO_TIMESTAMP(1700000000);       -- 2023-11-14 22:13:20+00

-- SQLite
SELECT strftime('%Y-%m-%dT%H:%M:%fZ', 'unixepoch', 1700000000);
-- 2023-11-14T22:13:20.000Z
\`\`\`

\`UNIX_TIMESTAMP()\` de MySQL devuelve segundos; \`EXTRACT(EPOCH FROM ...)\` de PostgreSQL devuelve segundos con precisión fraccional. SQLite requiere la receta manual con \`strftime\`.

### Bash

El comando \`date\` maneja timestamps Unix en todo sistema Unix.

\`\`\`bash
# Timestamp Unix actual
date +%s
# 1700000000

# Convertir timestamp Unix a una cadena de fecha
# Linux (GNU date)
date -d @1700000000
# Tue Nov 14 22:13:20 PM UTC 2023

# macOS (BSD date)
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Convertir una cadena de fecha a timestamp Unix
# Linux
date -d "2023-11-14 22:13:20 UTC" +%s
# macOS
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s

# Mostrar en una zona horaria específica
TZ="Asia/Tokyo" date -d @1700000000
# Wed Nov 15 07:13:20 JST 2023
\`\`\`

Para una referencia rápida: \`date +%s\` para "ahora como tiempo Unix" es un one-liner que usarás semanalmente.

## Almacenar timestamps en bases de datos

Mejores prácticas para almacenamiento en bases de datos:

1. **Almacena como enteros (BIGINT)**: Los timestamps Unix nativos son baratos de almacenar, fáciles de indexar, simples de comparar.
2. **Usa siempre UTC**: Convierte a la zona local solo en el momento de mostrar.
3. **Usa BIGINT, no INT**: Un entero con signo de 32 bits se desborda en 2038. Usa siempre 64 bits.
4. **Considera precisión de milisegundos**: Para logging de eventos de alta frecuencia (trading, gaming, telemetría), 1 segundo de resolución es demasiado grueso. Almacena como BIGINT milisegundos.
5. **Usa TIMESTAMP WITH TIME ZONE**: \`timestamptz\` de PostgreSQL es el más robusto. \`TIMESTAMP\` de MySQL tiene el problema de 2038; usa \`DATETIME\` en su lugar.
6. **Indexa columnas timestamp**: Queries como \`WHERE created_at > ?\` son extremadamente comunes. Un índice BTREE en una columna timestamp las hace rápidas.

Un esquema común:

\`\`\`sql
CREATE TABLE events (
  id          BIGSERIAL PRIMARY KEY,
  event_type  TEXT NOT NULL,
  payload     JSONB NOT NULL,
  created_at  BIGINT NOT NULL,                -- Unix ms
  INDEX idx_events_created (created_at)
);
\`\`\`

## Trampas comunes

### El bug de milisegundos de JavaScript

Los timestamps de JavaScript están en **milisegundos**; todos los demás lenguajes principales usan **segundos**. Mezclarlos produce timestamps fuera por un factor de 1000.

\`\`\`js
// Desde un backend Python
const python_ts = 1700000000;            // segundos
const js_date = new Date(python_ts);     // 1970-01-20T08:13:20.000Z  ← ¡MAL!

// Correcto: multiplicar por 1000
const js_date = new Date(python_ts * 1000);
\`\`\`

### Bugs de visualización de zona horaria

Un timestamp se refiere a un momento en el tiempo, no a una fecha. Si tu servidor registra "2023-11-14 22:13:20" sin indicar UTC o local, el usuario no tiene forma de saber cuál es. Siempre:

- Almacena como timestamp Unix (inherentemente UTC)
- Envía a clientes con una zona horaria explícita
- Convierte a local en el momento de mostrar usando la zona real del usuario

\`\`\`js
// El servidor envía "2023-11-14T22:13:20Z" (Z = UTC)
// El cliente lo renderiza en la zona local del usuario
const d = new Date("2023-11-14T22:13:20Z");
console.log(d.toLocaleString());   // "11/14/2023, 5:13:20 PM" (en EST)
\`\`\`

### Casos límite de DST

Un día de 24 horas en primavera es en realidad 23 horas (DST salta una hora); un día de 24 horas en otoño es 25 horas. El código que asume "sumar 86,400 para obtener mañana" funciona bien; el código que hace "sumar 24 × 60 × 60" o "mañana a las 2:30 AM" puede fallar en las transiciones de DST.

\`\`\`python
# Este es un día de 23 o 25 horas en zonas con DST
d = datetime.datetime(2024, 3, 10, 1, 0, 0, tzinfo=ZoneInfo("America/New_York"))  # DST empieza
print((d + datetime.timedelta(days=1)).isoformat())
# 2024-03-11T01:00:00-05:00  ← correcto
print((d + datetime.timedelta(hours=24)).isoformat())
# 2024-03-11T02:00:00-04:00  ← DST ha saltado, esto es 25 horas después
\`\`\`

Para scheduling y matemáticas de hora del día, prefiere bibliotecas (Luxon, Arrow, date-fns) que manejen estos casos límite correctamente.

## Método 1: Use el conversor de timestamp de UtilBoxx (Recomendado)

Para conversiones rápidas durante el desarrollo, el [Conversor de Timestamp de UtilBoxx](/es/tools/dev/timestamp) es una herramienta privada, en el navegador, que convierte entre timestamps Unix y fechas en cualquier zona horaria, soporta tanto segundos como milisegundos, y se ejecuta completamente en el cliente. Sin carga, sin registro, sin logs. Márcalo como favorito para la próxima vez que necesites decodificar un timestamp desconocido de una respuesta de API.

## Conclusión

Los timestamps Unix son simples, rápidos y universales — pero el ecosistema que los rodea (zonas horarias, segundos intercalares, el problema de 2038, confusión entre milisegundos y segundos) está lleno de trampas. Todo desarrollador eventualmente choca con cada una de ellas; la única defensa es saber que existen.

Mejores prácticas:

- **Almacena como enteros de 64 bits** en UTC
- **Convierte a local en el momento de mostrar** con la zona horaria real del usuario
- **Usa una biblioteca de zonas horarias real** (Luxon, date-fns-tz, zoneinfo) para matemáticas de tiempo no triviales
- **Audita los timestamps de 32 bits ahora** si mantienes código heredado

Los timestamps Unix son uno de los formatos de datos más antiguos aún en uso, y nos sobrevivirán a todos — pero solo si los usamos correctamente.`;

const unixTimestampsDevPt = `## Por que os desenvolvedores devem entender timestamps Unix

Um **timestamp Unix** é um inteiro representando o número de segundos decorridos desde **00:00:00 UTC de 1 de janeiro de 1970** (a época Unix). Eles são a língua franca do tempo na computação: bancos de dados os indexam, APIs os retornam, sistemas de arquivos os armazenam, e protocolos como NTP e HTTP os usam. Todo desenvolvedor eventualmente tem que converter entre timestamps Unix e datas legíveis por humanos — e depurar os problemas que surgem quando diferentes sistemas representam o tempo de maneira diferente.

Este guia cobre o que são timestamps Unix, como funcionam em diferentes linguagens, as complicações de fuso horário e segundo intercalar, e o problema do 2038 que se aproxima.

## Como os timestamps Unix funcionam

Um timestamp Unix é apenas uma contagem inteira de segundos. Não há fuso horário, não há horário de verão, não há aritmética de calendário. Adicionar 86.400 a um timestamp sempre avança a data exatamente um dia em UTC.

\`\`\`
0           = 1970-01-01 00:00:00 UTC   (a época)
1,000       = 1970-01-01 00:16:40 UTC
1,000,000   = 1970-01-12 13:46:40 UTC
1,000,000,000 = 2001-09-09 01:46:40 UTC (o "bilênio")
1,500,000,000 = 2017-07-14 02:40:00 UTC
2,000,000,000 = 2033-05-18 03:33:20 UTC
2,147,483,647 = 2038-01-19 03:14:07 UTC (máx. 32 bits com sinal)
\`\`\`

O maior valor representável depende do tipo de inteiro:

- **32 bits com sinal**: 2.147.483.647 (2^31 − 1) → 2038-01-19 03:14:07 UTC
- **32 bits sem sinal**: 4.294.967.295 (2^32 − 1) → 2106-02-07 06:28:15 UTC
- **64 bits com sinal**: 9.223.372.036.854.775.807 → ano 292.277.026.596

Por isso o **problema de 2038** existe: qualquer timestamp com sinal de 32 bits transborda em 2038-01-19. Timestamps de 64 bits evitam o problema por centenas de bilhões de anos.

## Tempo Unix vs UTC: o problema do segundo intercalar

Estritamente, **o tempo Unix ignora os segundos intercalares**. Ele conta cada segundo como se houvesse exatamente 86.400 por dia, mesmo quando as autoridades internacionais de tempo adicionam um segundo intercalar ao UTC. Depois que 27 segundos intercalares foram inseridos (a partir de 2024), o tempo Unix agora está cerca de 27 segundos à frente do UTC "verdadeiro".

Na prática, isso raramente importa. TAI (Tempo Atômico Internacional) mantém segundos perfeitos, e UTC fica dentro de 0,9 segundo de UT1 (tempo de rotação da Terra) adicionando segundos intercalares. O tempo Unix simplesmente usa a contagem de segundos de TAI menos um deslocamento fixo.

Se você precisa de tempo atômico estrito, use TAI diretamente. Para todo o resto, a pequena deriva do tempo Unix é irrelevante.

## Fusos horários e deslocamentos

Um timestamp Unix se refere a um único instante no tempo. Para exibi-lo de forma legível por humanos, você aplica um deslocamento de fuso horário. Deslocamentos comuns:

| Zona | Abreviação | Deslocamento do UTC |
|------|-------------|---------------------|
| Tempo Universal Coordenado | UTC | 0 |
| Leste dos EUA (inverno) | EST | −5 |
| Leste dos EUA (verão) | EDT | −4 |
| Pacífico dos EUA (inverno) | PST | −8 |
| Pacífico dos EUA (verão) | PDT | −7 |
| Reino Unido (inverno) | GMT | 0 |
| Reino Unido (verão) | BST | +1 |
| Europa Central (inverno) | CET | +1 |
| Europa Central (verão) | CEST | +2 |
| Japão | JST | +9 |
| China | CST | +8 |
| Índia | IST | +5:30 |
| Austrália (Sydney, inverno) | AEST | +10 |
| Austrália (Sydney, verão) | AEDT | +11 |

Observe que Índia e China usam um único deslocamento durante todo o ano (sem horário de verão). Os EUA, Reino Unido e a maior parte da Europa observam DST, o que complica tudo.

Um bug comum: um servidor armazena um timestamp Unix (sempre UTC), depois o exibe sem aplicar o deslocamento local do usuário, e o usuário vê um horário com diferença de várias horas. Sempre armazene em UTC, sempre converta para local no momento da exibição.

## O problema de 2038 em detalhes

O **problema de 2038** (também conhecido como Y2K38) é o overflow de inteiro com sinal de 32 bits que ocorrerá em **2038-01-19 03:14:07 UTC**. O segundo seguinte transborda para −2.147.483.648, que na maioria dos sistemas é interpretado como **1901-12-13 20:45:52 UTC**. Qualquer coisa que dependa de timestamps Unix como inteiros com sinal de 32 bits quebrará:

- Sistemas de arquivos que armazenam mtime em time_t de 32 bits
- Bancos de dados antigos (MySQL antigo, alguns builds de SQLite)
- Sistemas embarcados (roteadores, dispositivos IoT, carros)
- Protocolos de rede que usam campos de tempo de 32 bits (NTP, DNS, Kerberos, alguns handshakes TLS)

Sistemas modernos (Linux de 64 bits, macOS de 64 bits, Windows moderno, bancos de dados modernos) já migraram para 64 bits. O risco está no código legado e embarcado que não foi atualizado.

A correção: mude o tipo de dado de \`time_t\` (32 bits) para \`int64_t\` (ou equivalente). Uma mudança de declaração, mais uma recompilação. O desafio é encontrar cada lugar onde a suposição de 32 bits vive — formatos de arquivo, protocolos de fio, dados persistidos, bibliotecas de terceiros.

## Trabalhando com timestamps Unix em código

### Python

O módulo \`datetime\` do Python é a ferramenta canônica.

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# Timestamp Unix atual (segundos, float)
import time
now = time.time()                              # 1700000000.123

# Converter timestamp Unix para datetime (UTC)
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# Converter timestamp Unix para datetime (zona específica)
ny = datetime.datetime.fromtimestamp(ts, tz=ZoneInfo("America/New_York"))
# 2023-11-14 17:13:20-05:00

# Converter datetime para timestamp Unix
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# Formatar como ISO 8601
print(utc.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Cuidado: \`datetime.fromtimestamp(ts)\` (sem \`tz\`) usa o fuso horário local, que raramente é o que você quer em um contexto de servidor. Sempre passe um fuso horário explícito.

### JavaScript

JavaScript usa **milissegundos**, não segundos. \`Date.now()\` retorna milissegundos desde a época.

\`\`\`js
// Timestamp Unix atual em milissegundos
const now = Date.now();
// ex.: 1700000000000

// Timestamp Unix atual em segundos
const nowSec = Math.floor(Date.now() / 1000);

// Converter segundos para milissegundos e criar um Date
const date = new Date(1700000000 * 1000);
// 2023-11-14T22:13:20.000Z

// Converter milissegundos para segundos
const ts = Math.floor(date.getTime() / 1000);

// Exibir em um fuso horário específico com Intl
console.log(date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
// 11/15/2023, 7:13:20 AM

// ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z
\`\`\`

A maior armadilha do JavaScript: todas as outras linguagens usam segundos; JavaScript usa milissegundos. Esquecer de multiplicar ou dividir por 1000 é a fonte de incontáveis bugs "fora por um fator de 1000".

### SQL

A maioria dos bancos de dados suporta timestamps Unix nativamente ou através de funções.

\`\`\`sql
-- MySQL
SELECT UNIX_TIMESTAMP(NOW());          -- timestamp atual (segundos)
SELECT FROM_UNIXTIME(1700000000);     -- 2023-11-14 22:13:20
SELECT FROM_UNIXTIME(1700000000, '%Y-%m-%d %H:%i:%s');

-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());      -- timestamp atual (segundos, float)
SELECT TO_TIMESTAMP(1700000000);       -- 2023-11-14 22:13:20+00

-- SQLite
SELECT strftime('%Y-%m-%dT%H:%M:%fZ', 'unixepoch', 1700000000);
-- 2023-11-14T22:13:20.000Z
\`\`\`

\`UNIX_TIMESTAMP()\` do MySQL retorna segundos; \`EXTRACT(EPOCH FROM ...)\` do PostgreSQL retorna segundos com precisão fracionária. SQLite requer a receita manual com \`strftime\`.

### Bash

O comando \`date\` lida com timestamps Unix em todo sistema Unix.

\`\`\`bash
# Timestamp Unix atual
date +%s
# 1700000000

# Converter timestamp Unix para uma string de data
# Linux (GNU date)
date -d @1700000000
# Tue Nov 14 22:13:20 PM UTC 2023

# macOS (BSD date)
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Converter uma string de data para timestamp Unix
# Linux
date -d "2023-11-14 22:13:20 UTC" +%s
# macOS
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s

# Exibir em um fuso horário específico
TZ="Asia/Tokyo" date -d @1700000000
# Wed Nov 15 07:13:20 JST 2023
\`\`\`

Para referência rápida: \`date +%s\` para "agora como tempo Unix" é um one-liner que você usará semanalmente.

## Armazenando timestamps em bancos de dados

Melhores práticas para armazenamento em banco de dados:

1. **Armazene como inteiros (BIGINT)**: Timestamps Unix nativos são baratos de armazenar, fáceis de indexar, simples de comparar.
2. **Sempre use UTC**: Converta para a zona local apenas no momento da exibição.
3. **Use BIGINT, não INT**: Um inteiro com sinal de 32 bits transborda em 2038. Sempre use 64 bits.
4. **Considere precisão de milissegundos**: Para logging de eventos de alta frequência (trading, gaming, telemetria), 1 segundo de resolução é muito grosseiro. Armazene como BIGINT milissegundos.
5. **Use TIMESTAMP WITH TIME ZONE**: O \`timestamptz\` do PostgreSQL é o mais robusto. O \`TIMESTAMP\` do MySQL tem o problema de 2038; use \`DATETIME\` em vez disso.
6. **Indexe colunas de timestamp**: Queries como \`WHERE created_at > ?\` são extremamente comuns. Um índice BTREE em uma coluna de timestamp as torna rápidas.

Um esquema comum:

\`\`\`sql
CREATE TABLE events (
  id          BIGSERIAL PRIMARY KEY,
  event_type  TEXT NOT NULL,
  payload     JSONB NOT NULL,
  created_at  BIGINT NOT NULL,                -- Unix ms
  INDEX idx_events_created (created_at)
);
\`\`\`

## Armadilhas comuns

### O bug de milissegundos do JavaScript

Timestamps do JavaScript estão em **milissegundos**; todas as outras linguagens principais usam **segundos**. Misturá-los produz timestamps fora por um fator de 1000.

\`\`\`js
// De um backend Python
const python_ts = 1700000000;            // segundos
const js_date = new Date(python_ts);     // 1970-01-20T08:13:20.000Z  ← ERRADO!

// Correto: multiplicar por 1000
const js_date = new Date(python_ts * 1000);
\`\`\`

### Bugs de exibição de fuso horário

Um timestamp se refere a um momento no tempo, não a uma data. Se seu servidor registra "2023-11-14 22:13:20" sem indicar UTC ou local, o usuário não tem como saber qual é. Sempre:

- Armazene como timestamp Unix (inerentemente UTC)
- Envie aos clientes com um fuso horário explícito
- Converta para local no momento da exibição usando o fuso real do usuário

\`\`\`js
// Servidor envia "2023-11-14T22:13:20Z" (Z = UTC)
// Cliente renderiza no fuso local do usuário
const d = new Date("2023-11-14T22:13:20Z");
console.log(d.toLocaleString());   // "11/14/2023, 5:13:20 PM" (em EST)
\`\`\`

### Casos extremos de DST

Um dia de 24 horas na primavera é na verdade 23 horas (DST pula uma hora); um dia de 24 horas no outono é 25 horas. Código que assume "adicionar 86.400 para obter amanhã" funciona bem; código que faz "adicionar 24 × 60 × 60" ou "amanhã às 2:30 AM" pode falhar nas transições de DST.

\`\`\`python
# Este é um dia de 23 ou 25 horas em zonas com DST
d = datetime.datetime(2024, 3, 10, 1, 0, 0, tzinfo=ZoneInfo("America/New_York"))  # DST começa
print((d + datetime.timedelta(days=1)).isoformat())
# 2024-03-11T01:00:00-05:00  ← correto
print((d + datetime.timedelta(hours=24)).isoformat())
# 2024-03-11T02:00:00-04:00  ← DST pulou, isto é 25 horas depois
\`\`\`

Para agendamento e matemática de hora do dia, prefira bibliotecas (Luxon, Arrow, date-fns) que tratam esses casos extremos corretamente.

## Método 1: Use o conversor de timestamp do UtilBoxx (Recomendado)

Para conversões rápidas durante o desenvolvimento, o [Conversor de Timestamp do UtilBoxx](/pt/tools/dev/timestamp) é uma ferramenta privada, no navegador, que converte entre timestamps Unix e datas em qualquer fuso horário, suporta tanto segundos quanto milissegundos, e roda inteiramente no cliente. Sem upload, sem cadastro, sem logs. Favorite-o para a próxima vez que precisar decodificar um timestamp desconhecido de uma resposta de API.

## Conclusão

Timestamps Unix são simples, rápidos e universais — mas o ecossistema ao redor (fusos horários, segundos intercalares, o problema de 2038, confusão entre milissegundos e segundos) está cheio de armadilhas. Todo desenvolvedor eventualmente encontra cada uma delas; a única defesa é saber que elas existem.

Melhores práticas:

- **Armazene como inteiros de 64 bits** em UTC
- **Converta para local no momento da exibição** com o fuso horário real do usuário
- **Use uma biblioteca de fuso horário real** (Luxon, date-fns-tz, zoneinfo) para matemática de tempo não trivial
- **Audite timestamps de 32 bits agora** se você mantém código legado

Timestamps Unix são um dos formatos de dados mais antigos ainda em uso, e sobreviverão a todos nós — mas somente se os usarmos corretamente.`;

const unixTimestampsDevFr = `## Pourquoi les développeurs doivent comprendre les timestamps Unix

Un **timestamp Unix** est un entier représentant le nombre de secondes écoulées depuis **00:00:00 UTC le 1er janvier 1970** (l'époque Unix). C'est la lingua franca du temps en informatique : les bases de données les indexent, les APIs les renvoient, les systèmes de fichiers les stockent, et les protocoles comme NTP et HTTP les utilisent. Tout développeur finit par devoir convertir entre timestamps Unix et dates lisibles par l'humain — et par déboguer les problèmes qui surviennent quand différents systèmes représentent le temps différemment.

Ce guide couvre ce que sont les timestamps Unix, comment ils fonctionnent dans différents langages, les complications de fuseau horaire et de seconde intercalaire, et le problème de 2038 à venir.

## Comment fonctionnent les timestamps Unix

Un timestamp Unix est juste un compte entier de secondes. Il n'y a pas de fuseau horaire, pas d'heure d'été, pas d'arithmétique de calendrier. Ajouter 86 400 à un timestamp avance toujours la date d'exactement un jour en UTC.

\`\`\`
0           = 1970-01-01 00:00:00 UTC   (l'époque)
1,000       = 1970-01-01 00:16:40 UTC
1,000,000   = 1970-01-12 13:46:40 UTC
1,000,000,000 = 2001-09-09 01:46:40 UTC (le « billionième »)
1,500,000,000 = 2017-07-14 02:40:00 UTC
2,000,000,000 = 2033-05-18 03:33:20 UTC
2,147,483,647 = 2038-01-19 03:14:07 UTC (max 32 bits signé)
\`\`\`

La plus grande valeur représentable dépend du type d'entier :

- **32 bits signé** : 2 147 483 647 (2^31 − 1) → 2038-01-19 03:14:07 UTC
- **32 bits non signé** : 4 294 967 295 (2^32 − 1) → 2106-02-07 06:28:15 UTC
- **64 bits signé** : 9 223 372 036 854 775 807 → année 292 277 026 596

C'est pourquoi le **problème de 2038** existe : tout timestamp signé 32 bits déborde le 2038-01-19. Les timestamps 64 bits évitent le problème pour des centaines de milliards d'années.

## Temps Unix vs UTC : le problème de la seconde intercalaire

Strictement, **le temps Unix ignore les secondes intercalaires**. Il compte chaque seconde comme s'il y en avait exactement 86 400 par jour, même quand les autorités internationales du temps ajoutent une seconde intercalaire à l'UTC. Après que 27 secondes intercalaires ont été insérées (à partir de 2024), le temps Unix est maintenant environ 27 secondes en avance sur l'UTC « vrai ».

En pratique, cela a rarement d'importance. TAI (Temps Atomique International) maintient des secondes parfaites, et l'UTC reste à moins de 0,9 seconde de UT1 (temps de rotation de la Terre) en ajoutant des secondes intercalaires. Le temps Unix utilise simplement le compte de secondes de TAI moins un décalage fixe.

Si vous avez besoin de temps atomique strict, utilisez TAI directement. Pour tout le reste, la petite dérive du temps Unix est sans importance.

## Fuseaux horaires et décalages

Un timestamp Unix se réfère à un unique instant dans le temps. Pour l'afficher sous une forme lisible par l'humain, vous appliquez un décalage de fuseau horaire. Décalages courants :

| Zone | Abréviation | Décalage depuis UTC |
|------|--------------|---------------------|
| Temps Universel Coordonné | UTC | 0 |
| Est des États-Unis (hiver) | EST | −5 |
| Est des États-Unis (été) | EDT | −4 |
| Pacifique des États-Unis (hiver) | PST | −8 |
| Pacifique des États-Unis (été) | PDT | −7 |
| Royaume-Uni (hiver) | GMT | 0 |
| Royaume-Uni (été) | BST | +1 |
| Europe Centrale (hiver) | CET | +1 |
| Europe Centrale (été) | CEST | +2 |
| Japon | JST | +9 |
| Chine | CST | +8 |
| Inde | IST | +5:30 |
| Australie (Sydney, hiver) | AEST | +10 |
| Australie (Sydney, été) | AEDT | +11 |

Notez que l'Inde et la Chine utilisent un décalage unique toute l'année (pas d'heure d'été). Les États-Unis, le Royaume-Uni et la majeure partie de l'Europe observent l'heure d'été, ce qui complique tout.

Un bug courant : un serveur stocke un timestamp Unix (toujours UTC), puis l'affiche sans appliquer le décalage local de l'utilisateur, et l'utilisateur voit une heure décalée de plusieurs heures. Stockez toujours en UTC, convertissez toujours en local au moment de l'affichage.

## Le problème de 2038 en détail

Le **problème de 2038** (aussi appelé Y2K38) est le débordement d'entier signé 32 bits qui se produira le **2038-01-19 03:14:07 UTC**. La seconde suivante déborde à −2 147 483 648, ce qui sur la plupart des systèmes est interprété comme **1901-12-13 20:45:52 UTC**. Tout ce qui dépend des timestamps Unix comme entiers signés 32 bits se cassera :

- Systèmes de fichiers qui stockent le mtime en time_t 32 bits
- Bases de données anciennes (MySQL ancien, certaines builds de SQLite)
- Systèmes embarqués (routeurs, appareils IoT, voitures)
- Protocoles réseau qui utilisent des champs de temps 32 bits (NTP, DNS, Kerberos, certains handshakes TLS)

Les systèmes modernes (Linux 64 bits, macOS 64 bits, Windows moderne, bases de données modernes) ont déjà migré vers 64 bits. Le risque se trouve dans le code hérité et embarqué qui n'a pas été mis à jour.

La correction : changez le type de données de \`time_t\` (32 bits) à \`int64_t\` (ou équivalent). Un changement de déclaration, plus une recompilation. Le défi est de trouver chaque endroit où vit l'hypothèse 32 bits — formats de fichier, protocoles réseau, données persistées, bibliothèques tierces.

## Travailler avec les timestamps Unix en code

### Python

Le module \`datetime\` de Python est l'outil canonique.

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# Timestamp Unix actuel (secondes, float)
import time
now = time.time()                              # 1700000000.123

# Convertir timestamp Unix en datetime (UTC)
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# Convertir timestamp Unix en datetime (zone spécifique)
ny = datetime.datetime.fromtimestamp(ts, tz=ZoneInfo("America/New_York"))
# 2023-11-14 17:13:20-05:00

# Convertir datetime en timestamp Unix
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# Formater en ISO 8601
print(utc.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Attention : \`datetime.fromtimestamp(ts)\` (sans \`tz\`) utilise le fuseau horaire local, ce qui est rarement ce que vous voulez dans un contexte serveur. Passez toujours un fuseau horaire explicite.

### JavaScript

JavaScript utilise les **millisecondes**, pas les secondes. \`Date.now()\` retourne les millisecondes depuis l'époque.

\`\`\`js
// Timestamp Unix actuel en millisecondes
const now = Date.now();
// p. ex., 1700000000000

// Timestamp Unix actuel en secondes
const nowSec = Math.floor(Date.now() / 1000);

// Convertir des secondes en millisecondes et créer un Date
const date = new Date(1700000000 * 1000);
// 2023-11-14T22:13:20.000Z

// Convertir des millisecondes en secondes
const ts = Math.floor(date.getTime() / 1000);

// Afficher dans un fuseau horaire spécifique avec Intl
console.log(date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
// 11/15/2023, 7:13:20 AM

// ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z
\`\`\`

Le plus grand piège de JavaScript : tous les autres langages utilisent les secondes ; JavaScript utilise les millisecondes. Oublier de multiplier ou diviser par 1 000 est la source d'innombrables bugs « décalés d'un facteur 1 000 ».

### SQL

La plupart des bases de données supportent les timestamps Unix nativement ou via des fonctions.

\`\`\`sql
-- MySQL
SELECT UNIX_TIMESTAMP(NOW());          -- timestamp actuel (secondes)
SELECT FROM_UNIXTIME(1700000000);     -- 2023-11-14 22:13:20
SELECT FROM_UNIXTIME(1700000000, '%Y-%m-%d %H:%i:%s');

-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());      -- timestamp actuel (secondes, float)
SELECT TO_TIMESTAMP(1700000000);       -- 2023-11-14 22:13:20+00

-- SQLite
SELECT strftime('%Y-%m-%dT%H:%M:%fZ', 'unixepoch', 1700000000);
-- 2023-11-14T22:13:20.000Z
\`\`\`

\`UNIX_TIMESTAMP()\` de MySQL retourne des secondes ; \`EXTRACT(EPOCH FROM ...)\` de PostgreSQL retourne des secondes avec précision fractionnelle. SQLite nécessite la recette manuelle avec \`strftime\`.

### Bash

La commande \`date\` gère les timestamps Unix sur tout système Unix.

\`\`\`bash
# Timestamp Unix actuel
date +%s
# 1700000000

# Convertir un timestamp Unix en chaîne de date
# Linux (GNU date)
date -d @1700000000
# Tue Nov 14 22:13:20 PM UTC 2023

# macOS (BSD date)
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Convertir une chaîne de date en timestamp Unix
# Linux
date -d "2023-11-14 22:13:20 UTC" +%s
# macOS
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s

# Afficher dans un fuseau horaire spécifique
TZ="Asia/Tokyo" date -d @1700000000
# Wed Nov 15 07:13:20 JST 2023
\`\`\`

Pour une référence rapide : \`date +%s\` pour « maintenant en temps Unix » est un one-liner que vous utiliserez chaque semaine.

## Stocker les timestamps dans les bases de données

Meilleures pratiques pour le stockage en base de données :

1. **Stockez comme entiers (BIGINT)** : Les timestamps Unix natifs sont peu coûteux à stocker, faciles à indexer, simples à comparer.
2. **Utilisez toujours UTC** : Convertissez en fuseau local seulement au moment de l'affichage.
3. **Utilisez BIGINT, pas INT** : Un entier signé 32 bits déborde en 2038. Utilisez toujours 64 bits.
4. **Considérez la précision en millisecondes** : Pour le logging d'événements haute fréquence (trading, gaming, télémétrie), 1 seconde de résolution est trop grossier. Stockez comme BIGINT millisecondes.
5. **Utilisez TIMESTAMP WITH TIME ZONE** : Le \`timestamptz\` de PostgreSQL est le plus robuste. Le \`TIMESTAMP\` de MySQL a le problème de 2038 ; utilisez \`DATETIME\` à la place.
6. **Indexez les colonnes timestamp** : Les requêtes comme \`WHERE created_at > ?\` sont extrêmement courantes. Un index BTREE sur une colonne timestamp les rend rapides.

Un schéma courant :

\`\`\`sql
CREATE TABLE events (
  id          BIGSERIAL PRIMARY KEY,
  event_type  TEXT NOT NULL,
  payload     JSONB NOT NULL,
  created_at  BIGINT NOT NULL,                -- Unix ms
  INDEX idx_events_created (created_at)
);
\`\`\`

## Pièges courants

### Le bug de millisecondes de JavaScript

Les timestamps JavaScript sont en **millisecondes** ; tous les autres grands langages utilisent les **secondes**. Les mélanger produit des timestamps décalés d'un facteur 1 000.

\`\`\`js
// Depuis un backend Python
const python_ts = 1700000000;            // secondes
const js_date = new Date(python_ts);     // 1970-01-20T08:13:20.000Z  ← FAUX !

// Correct : multiplier par 1 000
const js_date = new Date(python_ts * 1000);
\`\`\`

### Bugs d'affichage de fuseau horaire

Un timestamp se réfère à un instant dans le temps, pas à une date. Si votre serveur journalise « 2023-11-14 22:13:20 » sans indiquer UTC ou local, l'utilisateur n'a aucun moyen de savoir lequel c'est. Toujours :

- Stockez comme timestamp Unix (intrinsèquement UTC)
- Envoyez aux clients avec un fuseau horaire explicite
- Convertissez en local au moment de l'affichage en utilisant le fuseau réel de l'utilisateur

\`\`\`js
// Le serveur envoie "2023-11-14T22:13:20Z" (Z = UTC)
// Le client rend dans le fuseau local de l'utilisateur
const d = new Date("2023-11-14T22:13:20Z");
console.log(d.toLocaleString());   // "11/14/2023, 5:13:20 PM" (en EST)
\`\`\`

### Cas limites de l'heure d'été

Un jour de 24 heures au printemps fait en fait 23 heures (l'heure d'été saute une heure) ; un jour de 24 heures en automne fait 25 heures. Le code qui suppose « ajouter 86 400 pour obtenir demain » fonctionne bien ; le code qui fait « ajouter 24 × 60 × 60 » ou « demain à 2:30 AM » peut échouer aux transitions d'heure d'été.

\`\`\`python
# Ceci est un jour de 23 ou 25 heures dans les fuseaux avec DST
d = datetime.datetime(2024, 3, 10, 1, 0, 0, tzinfo=ZoneInfo("America/New_York"))  # DST commence
print((d + datetime.timedelta(days=1)).isoformat())
# 2024-03-11T01:00:00-05:00  ← correct
print((d + datetime.timedelta(hours=24)).isoformat())
# 2024-03-11T02:00:00-04:00  ← DST a sauté, ceci est 25 heures plus tard
\`\`\`

Pour la planification et les calculs d'heure de la journée, préférez des bibliothèques (Luxon, Arrow, date-fns) qui gèrent correctement ces cas limites.

## Méthode 1 : Utilisez le convertisseur de timestamp de UtilBoxx (Recommandé)

Pour des conversions rapides pendant le développement, le [Convertisseur de Timestamp de UtilBoxx](/fr/tools/dev/timestamp) est un outil privé, dans le navigateur, qui convertit entre les timestamps Unix et les dates dans n'importe quel fuseau horaire, supporte à la fois les secondes et les millisecondes, et s'exécute entièrement côté client. Pas de téléversement, pas d'inscription, pas de logs. Ajoutez-le aux favoris pour la prochaine fois où vous aurez besoin de décoder un timestamp inconnu d'une réponse API.

## Conclusion

Les timestamps Unix sont simples, rapides et universels — mais l'écosystème qui les entoure (fuseaux horaires, secondes intercalaires, le problème de 2038, confusion millisecondes vs secondes) est plein de pièges. Tout développeur finit par tomber sur chacun d'eux ; la seule défense est de savoir qu'ils existent.

Meilleures pratiques :

- **Stockez comme entiers 64 bits** en UTC
- **Convertissez en local au moment de l'affichage** avec le fuseau horaire réel de l'utilisateur
- **Utilisez une vraie bibliothèque de fuseaux horaires** (Luxon, date-fns-tz, zoneinfo) pour les calculs de temps non triviaux
- **Auditez les timestamps 32 bits maintenant** si vous maintenez du code hérité

Les timestamps Unix sont l'un des plus anciens formats de données encore utilisés, et ils nous survivront à tous — mais seulement si nous les utilisons correctement.`;

const unixTimestampsDevDe = `## Warum Entwickler Unix-Zeitstempel verstehen sollten

Ein **Unix-Zeitstempel** ist eine Ganzzahl, die die Anzahl der Sekunden seit **00:00:00 UTC am 1. Januar 1970** (der Unix-Epoche) darstellt. Sie sind die lingua franca der Zeit in der Informatik: Datenbanken indizieren sie, APIs geben sie zurück, Dateisysteme speichern sie, und Protokolle wie NTP und HTTP verwenden sie. Jeder Entwickler muss irgendwann zwischen Unix-Zeitstempeln und für Menschen lesbaren Daten umrechnen — und die Probleme debuggen, die entstehen, wenn verschiedene Systeme die Zeit unterschiedlich darstellen.

Dieser Leitfaden behandelt, was Unix-Zeitstempel sind, wie sie in verschiedenen Sprachen funktionieren, die Komplikationen mit Zeitzonen und Schaltsekunden, und das kommende 2038-Problem.

## Wie Unix-Zeitstempel funktionieren

Ein Unix-Zeitstempel ist nur ein ganzzahliger Sekundenzähler. Es gibt keine Zeitzone, keine Sommerzeit, keine Kalenderarithmetik. Das Addieren von 86.400 zu einem Zeitstempel rückt das Datum in UTC immer genau einen Tag vor.

\`\`\`
0           = 1970-01-01 00:00:00 UTC   (die Epoche)
1,000       = 1970-01-01 00:16:40 UTC
1,000,000   = 1970-01-12 13:46:40 UTC
1,000,000,000 = 2001-09-09 01:46:40 UTC (das „Milliardenste")
1,500,000,000 = 2017-07-14 02:40:00 UTC
2,000,000,000 = 2033-05-18 03:33:20 UTC
2,147,483,647 = 2038-01-19 03:14:07 UTC (32-Bit signed max)
\`\`\`

Der größte darstellbare Wert hängt vom Ganzzahltyp ab:

- **32-Bit signed**: 2.147.483.647 (2^31 − 1) → 2038-01-19 03:14:07 UTC
- **32-Bit unsigned**: 4.294.967.295 (2^32 − 1) → 2106-02-07 06:28:15 UTC
- **64-Bit signed**: 9.223.372.036.854.775.807 → Jahr 292.277.026.596

Deshalb gibt es das **2038-Problem**: Jeder 32-Bit-signed-Zeitstempel läuft am 2038-01-19 über. 64-Bit-Zeitstempel vermeiden das Problem für Hunderte von Milliarden Jahren.

## Unix-Zeit vs. UTC: das Schaltsekunden-Problem

Streng genommen **ignoriert die Unix-Zeit Schaltsekunden**. Sie zählt jede Sekunde, als gäbe es genau 86.400 pro Tag, selbst wenn die internationalen Zeitbehörden eine Schaltsekunde zur UTC hinzufügen. Nachdem 27 Schaltsekunden eingefügt wurden (Stand 2024), ist die Unix-Zeit jetzt etwa 27 Sekunden vor der „echten" UTC.

In der Praxis spielt dies selten eine Rolle. TAI (Internationale Atomzeit) hält perfekte Sekunden, und UTC bleibt durch das Hinzufügen von Schaltsekunden innerhalb von 0,9 Sekunden von UT1 (Erdrotationszeit). Die Unix-Zeit verwendet einfach den Sekundenzähler von TAI minus einen festen Versatz.

Wenn Sie strikte Atomzeit benötigen, verwenden Sie TAI direkt. Für alles andere ist die kleine Drift der Unix-Zeit irrelevant.

## Zeitzonen und Versätze

Ein Unix-Zeitstempel bezieht sich auf einen einzigen Zeitpunkt. Um ihn in einer für Menschen lesbaren Form anzuzeigen, wenden Sie einen Zeitzonen-Versatz an. Häufige Versätze:

| Zone | Abkürzung | Versatz von UTC |
|------|------------|-----------------|
| Koordinierte Weltzeit | UTC | 0 |
| US-Osten (Winter) | EST | −5 |
| US-Osten (Sommer) | EDT | −4 |
| US-Pazifik (Winter) | PST | −8 |
| US-Pazifik (Sommer) | PDT | −7 |
| Vereinigtes Königreich (Winter) | GMT | 0 |
| Vereinigtes Königreich (Sommer) | BST | +1 |
| Mitteleuropa (Winter) | CET | +1 |
| Mitteleuropa (Sommer) | CEST | +2 |
| Japan | JST | +9 |
| China | CST | +8 |
| Indien | IST | +5:30 |
| Australien (Sydney, Winter) | AEST | +10 |
| Australien (Sydney, Sommer) | AEDT | +11 |

Beachten Sie, dass Indien und China einen ganzjährigen einzelnen Versatz verwenden (keine Sommerzeit). Die USA, das Vereinigte Königreich und der größte Teil Europas beobachten die Sommerzeit, was alles kompliziert.

Ein häufiger Fehler: Ein Server speichert einen Unix-Zeitstempel (immer UTC), zeigt ihn dann ohne Anwendung des lokalen Versatzes des Benutzers an, und der Benutzer sieht eine um mehrere Stunden verschobene Zeit. Speichern Sie immer in UTC, konvertieren Sie immer zur Anzeigezeit in lokal.

## Das 2038-Problem im Detail

Das **2038-Problem** (auch Y2K38 genannt) ist der 32-Bit-signed-Ganzzahlüberlauf, der am **2038-01-19 03:14:07 UTC** auftreten wird. Die nächste Sekunde läuft zu −2.147.483.648 über, was auf den meisten Systemen als **1901-12-13 20:45:52 UTC** interpretiert wird. Alles, was von Unix-Zeitstempeln als 32-Bit-signed-Ganzzahlen abhängt, wird kaputtgehen:

- Dateisysteme, die mtime in 32-Bit-time_t speichern
- Ältere Datenbanken (altes MySQL, einige SQLite-Builds)
- Eingebettete Systeme (Router, IoT-Geräte, Autos)
- Netzwerkprotokolle, die 32-Bit-Zeitfelder verwenden (NTP, DNS, Kerberos, einige TLS-Handshakes)

Moderne Systeme (64-Bit-Linux, 64-Bit-macOS, modernes Windows, moderne Datenbanken) sind bereits auf 64-Bit migriert. Das Risiko liegt in Legacy- und eingebettetem Code, der nicht aktualisiert wurde.

Die Lösung: Ändern Sie den Datentyp von \`time_t\` (32-Bit) zu \`int64_t\` (oder gleichwertig). Eine Deklarationsänderung, plus eine Neukompilierung. Die Herausforderung besteht darin, jede Stelle zu finden, an der die 32-Bit-Annahme lebt — Dateiformate, Netzwerkprotokolle, persistierte Daten, Drittanbieter-Bibliotheken.

## Arbeiten mit Unix-Zeitstempeln im Code

### Python

Pythons \`datetime\`-Modul ist das kanonische Werkzeug.

\`\`\`python
import datetime
from zoneinfo import ZoneInfo

# Aktueller Unix-Zeitstempel (Sekunden, float)
import time
now = time.time()                              # 1700000000.123

# Unix-Zeitstempel in datetime umrechnen (UTC)
ts = 1700000000
utc = datetime.datetime.fromtimestamp(ts, tz=datetime.timezone.utc)
# 2023-11-14 22:13:20+00:00

# Unix-Zeitstempel in datetime umrechnen (bestimmte Zone)
ny = datetime.datetime.fromtimestamp(ts, tz=ZoneInfo("America/New_York"))
# 2023-11-14 17:13:20-05:00

# datetime in Unix-Zeitstempel umrechnen
d = datetime.datetime(2023, 11, 14, 22, 13, 20, tzinfo=datetime.timezone.utc)
ts = int(d.timestamp())
# 1700000000

# Als ISO 8601 formatieren
print(utc.isoformat())
# 2023-11-14T22:13:20+00:00
\`\`\`

Vorsicht: \`datetime.fromtimestamp(ts)\` (ohne \`tz\`) verwendet die lokale Zeitzone, was in einem Server-Kontext selten das ist, was Sie wollen. Übergeben Sie immer eine explizite Zeitzone.

### JavaScript

JavaScript verwendet **Millisekunden**, nicht Sekunden. \`Date.now()\` gibt Millisekunden seit der Epoche zurück.

\`\`\`js
// Aktueller Unix-Zeitstempel in Millisekunden
const now = Date.now();
// z. B. 1700000000000

// Aktueller Unix-Zeitstempel in Sekunden
const nowSec = Math.floor(Date.now() / 1000);

// Sekunden in Millisekunden umrechnen und Date erstellen
const date = new Date(1700000000 * 1000);
// 2023-11-14T22:13:20.000Z

// Millisekunden in Sekunden umrechnen
const ts = Math.floor(date.getTime() / 1000);

// In einer bestimmten Zeitzone mit Intl anzeigen
console.log(date.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
// 11/15/2023, 7:13:20 AM

// ISO 8601
console.log(date.toISOString());
// 2023-11-14T22:13:20.000Z
\`\`\`

Die größte JavaScript-Falle: Alle anderen Sprachen verwenden Sekunden; JavaScript verwendet Millisekunden. Das Vergessen der Multiplikation oder Division mit 1000 ist die Quelle unzähliger „um den Faktor 1000 daneben"-Bugs.

### SQL

Die meisten Datenbanken unterstützen Unix-Zeitstempel nativ oder über Funktionen.

\`\`\`sql
-- MySQL
SELECT UNIX_TIMESTAMP(NOW());          -- aktueller Zeitstempel (Sekunden)
SELECT FROM_UNIXTIME(1700000000);     -- 2023-11-14 22:13:20
SELECT FROM_UNIXTIME(1700000000, '%Y-%m-%d %H:%i:%s');

-- PostgreSQL
SELECT EXTRACT(EPOCH FROM NOW());      -- aktueller Zeitstempel (Sekunden, float)
SELECT TO_TIMESTAMP(1700000000);       -- 2023-11-14 22:13:20+00

-- SQLite
SELECT strftime('%Y-%m-%dT%H:%M:%fZ', 'unixepoch', 1700000000);
-- 2023-11-14T22:13:20.000Z
\`\`\`

MySQLs \`UNIX_TIMESTAMP()\` gibt Sekunden zurück; PostgreSQLs \`EXTRACT(EPOCH FROM ...)\` gibt Sekunden mit Bruchteilgenauigkeit zurück. SQLite erfordert das manuelle \`strftime\`-Rezept.

### Bash

Der Befehl \`date\` verarbeitet Unix-Zeitstempel auf jedem Unix-System.

\`\`\`bash
# Aktueller Unix-Zeitstempel
date +%s
# 1700000000

# Unix-Zeitstempel in eine Datumszeichenfolge umrechnen
# Linux (GNU date)
date -d @1700000000
# Tue Nov 14 22:13:20 PM UTC 2023

# macOS (BSD date)
date -r 1700000000
# Tue Nov 14 22:13:20 UTC 2023

# Datumszeichenfolge in Unix-Zeitstempel umrechnen
# Linux
date -d "2023-11-14 22:13:20 UTC" +%s
# macOS
date -j -f "%Y-%m-%d %H:%M:%S" "2023-11-14 22:13:20" +%s

# In einer bestimmten Zeitzone anzeigen
TZ="Asia/Tokyo" date -d @1700000000
# Wed Nov 15 07:13:20 JST 2023
\`\`\`

Als Kurzreferenz: \`date +%s\` für „jetzt als Unix-Zeit" ist ein Einzeiler, den Sie wöchentlich verwenden werden.

## Zeitstempel in Datenbanken speichern

Best Practices für die Datenbankspeicherung:

1. **Als Ganzzahlen (BIGINT) speichern**: Native Unix-Zeitstempel sind günstig zu speichern, leicht zu indizieren, einfach zu vergleichen.
2. **Immer UTC verwenden**: Erst zur Anzeigezeit in die lokale Zone umrechnen.
3. **BIGINT verwenden, nicht INT**: Eine 32-Bit-signed-Ganzzahl läuft 2038 über. Verwenden Sie immer 64-Bit.
4. **Millisekunden-Genauigkeit erwägen**: Für Hochfrequenz-Ereignisprotokollierung (Trading, Gaming, Telemetrie) ist 1-Sekunden-Auflösung zu grob. Als BIGINT-Millisekunden speichern.
5. **TIMESTAMP WITH TIME ZONE verwenden**: PostgreSQLs \`timestamptz\` ist am robustesten. MySQLs \`TIMESTAMP\` hat das 2038-Problem; verwenden Sie stattdessen \`DATETIME\`.
6. **Zeitstempel-Spalten indizieren**: Abfragen wie \`WHERE created_at > ?\` sind extrem häufig. Ein BTREE-Index auf einer Zeitstempel-Spalte macht sie schnell.

Ein gängiges Schema:

\`\`\`sql
CREATE TABLE events (
  id          BIGSERIAL PRIMARY KEY,
  event_type  TEXT NOT NULL,
  payload     JSONB NOT NULL,
  created_at  BIGINT NOT NULL,                -- Unix ms
  INDEX idx_events_created (created_at)
);
\`\`\`

## Häufige Fallstricke

### Der JavaScript-Millisekunden-Bug

JavaScript-Zeitstempel sind in **Millisekunden**; alle anderen wichtigen Sprachen verwenden **Sekunden**. Das Mischen erzeugt Zeitstempel, die um den Faktor 1000 daneben liegen.

\`\`\`js
// Von einem Python-Backend
const python_ts = 1700000000;            // Sekunden
const js_date = new Date(python_ts);     // 1970-01-20T08:13:20.000Z  ← FALSCH!

// Korrekt: mit 1000 multiplizieren
const js_date = new Date(python_ts * 1000);
\`\`\`

### Zeitzonen-Anzeigefehler

Ein Zeitstempel bezieht sich auf einen Zeitpunkt, nicht auf ein Datum. Wenn Ihr Server „2023-11-14 22:13:20" protokolliert, ohne UTC oder lokal anzugeben, hat der Benutzer keine Möglichkeit zu wissen, welches es ist. Immer:

- Als Unix-Zeitstempel speichern (inhärent UTC)
- An Clients mit expliziter Zeitzone senden
- Zur Anzeigezeit mit der tatsächlichen Zeitzone des Benutzers in lokal umrechnen

\`\`\`js
// Server sendet "2023-11-14T22:13:20Z" (Z = UTC)
// Client rendert in der lokalen Zeitzone des Benutzers
const d = new Date("2023-11-14T22:13:20Z");
console.log(d.toLocaleString());   // "11/14/2023, 5:13:20 PM" (in EST)
\`\`\`

### Sommerzeit-Randfälle

Ein 24-Stunden-Tag im Frühling ist tatsächlich 23 Stunden (Sommerzeit überspringt eine Stunde); ein 24-Stunden-Tag im Herbst ist 25 Stunden. Code, der „86.400 addieren, um morgen zu erhalten" annimmt, funktioniert gut; Code, der „24 × 60 × 60 addieren" oder „morgen um 2:30 Uhr" macht, kann bei Sommerzeit-Übergängen fehlschlagen.

\`\`\`python
# Dies ist ein 23- oder 25-Stunden-Tag in Sommerzeit-Zonen
d = datetime.datetime(2024, 3, 10, 1, 0, 0, tzinfo=ZoneInfo("America/New_York"))  # Sommerzeit beginnt
print((d + datetime.timedelta(days=1)).isoformat())
# 2024-03-11T01:00:00-05:00  ← korrekt
print((d + datetime.timedelta(hours=24)).isoformat())
# 2024-03-11T02:00:00-04:00  ← Sommerzeit ist gesprungen, dies ist 25 Stunden später
\`\`\`

Für Planung und Tageszeit-Mathematik bevorzugen Sie Bibliotheken (Luxon, Arrow, date-fns), die diese Randfälle korrekt behandeln.

## Methode 1: Den Zeitstempel-Umrechner von UtilBoxx verwenden (Empfohlen)

Für schnelle Umrechnungen während der Entwicklung ist der [Zeitstempel-Umrechner von UtilBoxx](/de/tools/dev/timestamp) ein privates, browserbasiertes Werkzeug, das zwischen Unix-Zeitstempeln und Daten in jeder Zeitzone umrechnet, sowohl Sekunden als auch Millisekunden unterstützt und vollständig clientseitig läuft. Kein Upload, keine Registrierung, keine Logs. Setzen Sie ein Lesezeichen für das nächste Mal, wenn Sie einen unbekannten Zeitstempel aus einer API-Antwort dekodieren müssen.

## Fazit

Unix-Zeitstempel sind einfach, schnell und universell — aber das umgebende Ökosystem (Zeitzonen, Schaltsekunden, das 2038-Problem, Millisekunden-vs-Sekunden-Verwirrung) ist voller Fallstricke. Jeder Entwickler stößt irgendwann auf jeden davon; die einzige Verteidigung ist zu wissen, dass sie existieren.

Best Practices:

- **Als 64-Bit-Ganzzahlen in UTC speichern**
- **Zur Anzeigezeit in lokal umrechnen** mit der tatsächlichen Zeitzone des Benutzers
- **Eine echte Zeitzonen-Bibliothek verwenden** (Luxon, date-fns-tz, zoneinfo) für nicht-triviale Zeitmathematik
- **32-Bit-Zeitstempel jetzt auditieren** wenn Sie Legacy-Code warten

Unix-Zeitstempel sind eines der ältesten Datenformate, die noch verwendet werden, und werden uns alle überleben — aber nur, wenn wir sie richtig verwenden.`;

export const unixTimestampsDevPost: Record<string, BlogPost> = {
  en: {
    slug: "understanding-unix-timestamps",
    category: "Developer Tools",
    date: "2026-04-12",
    readTime: "6 min",
    title: "Understanding Unix Timestamps: A Developer's Guide",
    description: "What Unix timestamps are, how they work, leap seconds, the 2038 problem, and practical conversion.",
    content: unixTimestampsDevEn,
  },
  zh: {
    slug: "understanding-unix-timestamps",
    category: "开发工具",
    date: "2026-04-12",
    readTime: "6 分钟",
    title: "理解 Unix 时间戳：开发者指南",
    description: "什么是 Unix 时间戳、它们如何工作、闰秒、2038 年问题以及实际换算。",
    content: unixTimestampsDevZh,
  },
  ja: {
    slug: "understanding-unix-timestamps",
    category: "開発者ツール",
    date: "2026-04-12",
    readTime: "6 分",
    title: "Unix タイムスタンプを理解する：開発者ガイド",
    description: "Unix タイムスタンプとは何か、その仕組み、閏秒、2038 年問題、実践的な換算。",
    content: unixTimestampsDevJa,
  },
  es: {
    slug: "understanding-unix-timestamps",
    category: "Herramientas para desarrolladores",
    date: "2026-04-12",
    readTime: "6 min",
    title: "Entendiendo los timestamps Unix: Una guía para desarrolladores",
    description: "Qué son los timestamps Unix, cómo funcionan, segundos intercalares, el problema de 2038 y conversión práctica.",
    content: unixTimestampsDevEs,
  },
  pt: {
    slug: "understanding-unix-timestamps",
    category: "Ferramentas para desenvolvedores",
    date: "2026-04-12",
    readTime: "6 min",
    title: "Entendendo timestamps Unix: Um guia para desenvolvedores",
    description: "O que são timestamps Unix, como funcionam, segundos intercalares, o problema de 2038 e conversão prática.",
    content: unixTimestampsDevPt,
  },
  fr: {
    slug: "understanding-unix-timestamps",
    category: "Outils pour développeurs",
    date: "2026-04-12",
    readTime: "6 min",
    title: "Comprendre les timestamps Unix : un guide pour développeurs",
    description: "Ce que sont les timestamps Unix, comment ils fonctionnent, secondes intercalaires, le problème de 2038 et conversion pratique.",
    content: unixTimestampsDevFr,
  },
  de: {
    slug: "understanding-unix-timestamps",
    category: "Entwickler-Tools",
    date: "2026-04-12",
    readTime: "6 Min",
    title: "Unix-Zeitstempel verstehen: Ein Leitfaden für Entwickler",
    description: "Was Unix-Zeitstempel sind, wie sie funktionieren, Schaltsekunden, das 2038-Problem und praktische Umrechnung.",
    content: unixTimestampsDevDe,
  },
};
