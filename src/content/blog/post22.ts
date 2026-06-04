// Blog post: How to Convert Bytes, KB, MB, GB, TB (and PB)
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const bytesKbMbEn = `## Why are there two different "MB"?

Buy a 1 TB hard drive, plug it in, and your operating system reports 931 GB. The drive is "missing" 69 GB. This is not a bug, a scam, or a format error. It is the **binary vs decimal** confusion baked into how we name storage.

The core issue: do you multiply by 1,000 (decimal, the SI standard) or by 1,024 (binary, what computers actually do internally)?

- **1 KB = 1,000 bytes** (decimal, what hard drive vendors use, what SI dictates)
- **1 KiB = 1,024 bytes** (binary, what Windows used to call "KB", what RAM is measured in)

To remove the ambiguity, the IEC introduced new binary prefixes in 1998: **KiB** (kibibyte, 2^10), **MiB** (mebibyte, 2^20), **GiB** (gibibyte, 2^30), **TiB** (tebibyte, 2^40), **PiB** (pebibyte, 2^50). In practice, the old labels persist everywhere except in technical documentation, and most operating systems are inconsistent: macOS uses decimal for storage, Windows uses a mix, Linux distributions vary.

This guide explains the math, the conventions, and three reliable ways to convert.

## The exact formulas

### Decimal (SI, used by hard drive makers, network speeds)

\`\`\`
1 KB  = 1,000 B        = 10^3 B
1 MB  = 1,000 KB      = 1,000,000 B      = 10^6 B
1 GB  = 1,000 MB      = 1,000,000,000 B  = 10^9 B
1 TB  = 1,000 GB      = 1,000,000,000,000 B  = 10^12 B
1 PB  = 1,000 TB      = 10^15 B
\`\`\`

### Binary (IEC, used by RAM, file formats, some OSes)

\`\`\`
1 KiB = 1,024 B       = 2^10 B
1 MiB = 1,024 KiB     = 1,048,576 B       = 2^20 B
1 GiB = 1,024 MiB     = 1,073,741,824 B   = 2^30 B
1 TiB = 1,024 GiB     = 1,099,511,627,776 B = 2^40 B
1 PiB = 1,024 TiB     = 2^50 B
\`\`\`

The ratio between decimal and binary grows quickly: a "1 TB" drive is 1,000,000,000,000 bytes in marketing, but your OS may show 931 GiB of usable space after formatting and overhead. That gap widens with size — a "1 PB" drive is roughly 0.89 PiB.

## Quick reference table

| Bytes    | Decimal (SI)         | Binary (IEC)            |
|---------:|----------------------|-------------------------|
| 1,000    | 1 KB                 | 0.977 KiB               |
| 1,024    | 1.024 KB             | 1 KiB                   |
| 1,000,000| 1 MB                 | 0.954 MiB               |
| 1,048,576| 1.049 MB             | 1 MiB                   |
| 10^9     | 1 GB                 | 0.931 GiB               |
| 2^30     | 1.074 GB             | 1 GiB                   |
| 10^12    | 1 TB                 | 0.909 TiB               |
| 2^40     | 1.100 TB             | 1 TiB                   |
| 10^15    | 1 PB                 | 0.888 PiB               |

## Method 1: Use UtilBoxx's Data Storage Converter (Recommended)

The fastest, safest way to convert between B, KB, MB, GB, TB, and PB is the [UtilBoxx Data Storage Converter](/en/tools/unit/data). It supports both decimal and binary modes, lets you pick the precision, and runs entirely in your browser — no upload, no signup, no log of your files.

**How to use it:**

1. Go to [utilboxx.com/en/tools/unit/data](/en/tools/unit/data)
2. Enter a value in any field (B, KB, MB, GB, TB, or PB)
3. Choose decimal (SI) or binary (IEC) mode
4. All other fields update instantly
5. Copy the result

**Why we recommend this method:**

- **100% free**, no signup, no email, no ads
- **Privacy-first**: nothing leaves your browser
- **Decimal and binary modes** with a single toggle
- **Bidirectional** conversion across all six units
- **High precision** — no floating-point rounding surprises
- **Works on any device** with a browser

If you frequently quote file sizes, drive capacities, or RAM amounts, this tool will save you from making the same 1024 vs 1000 mistake over and over.

## Method 2: macOS Finder (and other OS file managers)

If you only need to know the exact byte count of a specific file, your operating system's file manager gives you the decimal answer with full precision.

On **macOS Finder**:

1. Right-click any file and choose **Get Info** (or press Cmd+I)
2. The size is shown in decimal units: KB, MB, GB
3. Click the size field to flip between bytes, KB, MB, and GB
4. The exact byte count is in parentheses

On **Windows File Explorer**:

1. Right-click a file and choose **Properties**
2. Size is shown in KB, MB, or GB (Windows uses a mix of binary and decimal depending on version)
3. For exact bytes, divide KB by 1,024 only if Windows reports binary KB; modern Windows 10/11 actually reports in binary for some dialogs and decimal for others

On **Linux**:

1. \`ls -l file\` shows exact bytes
2. \`ls -lh file\` shows human-readable size (most distros use binary by default; some use decimal — check your \`alias ls\`)

This method is great when you want to know the size of a specific file or folder, but it does not help with batch conversion or unit-to-unit math.

## Method 3: Python (or any language)

For programmatic conversion, a few lines of Python cover all six units. The \`bit_length()\` method gives you the number of bits needed to represent an integer — useful when sizing buffers.

\`\`\`python
# Decimal (SI) conversion
def to_bytes(value, unit):
    units = {"B": 1, "KB": 1e3, "MB": 1e6, "GB": 1e9, "TB": 1e12, "PB": 1e15}
    return value * units[unit]

# Binary (IEC) conversion
def to_bytes_binary(value, unit):
    units = {"B": 1, "KiB": 2**10, "MiB": 2**20, "GiB": 2**30, "TiB": 2**40, "PiB": 2**50}
    return value * units[unit]

# bit_length of an integer
n = 123456789
print(n.bit_length())  # 27 bits
\`\`\`

For one-liners in a Python REPL:

\`\`\`python
# Convert 1 GiB to bytes
1024 * 1024 * 1024            # 1073741824

# Convert 1 TB to GiB
1_000_000_000_000 / (2**30)   # 931.3225746154785

# Convert 5 PB to TiB
5 * 1e15 / (2**40)            # 4547.473508864641
\`\`\`

In JavaScript, the same idea:

\`\`\`js
const GiB = 1024 ** 3;
const TB_in_bytes = 1e12;
console.log((TB_in_bytes / GiB).toFixed(3));  // 931.323
\`\`\`

## Method 4: CLI on macOS/Linux

Most shells have built-in math, and macOS ships with a calculator that handles big numbers:

\`\`\`bash
# In bash, using awk
awk 'BEGIN { printf "1 TB in GiB = %.3f\\n", 1e12 / (2^30) }'
# 1 TB in GiB = 931.323

awk 'BEGIN { printf "1 GiB in bytes = %d\\n", 2^30 }'
# 1 GiB in bytes = 1073741824

# macOS only: use units
units "1 TB" "GiB"
# 931.32257

# Linux only: numfmt is built into coreutils
numfmt --to=iec --suffix=B 1000000000000
# 931G
numfmt --to=si  --suffix=B 1073741824
# 1.1G
\`\`\`

The \`numfmt\` tool is particularly useful in shell scripts: it accepts numbers with optional units and reformats them, supports both decimal (--si) and binary (--iec) modes, and handles negative numbers correctly.

## Common questions

### Why does my "1 TB" drive show 931 GB?

Drive vendors use decimal: 1 TB = 1,000,000,000,000 bytes. Operating systems often display this in binary, which they call GB but actually means GiB. 1,000,000,000,000 bytes ÷ 1,073,741,824 bytes per GiB = **931.32 GiB**. The "missing" space is the difference between decimal and binary, plus overhead from formatting, partition tables, and filesystem metadata.

### Is MB bigger than MiB?

Yes. **MB is decimal (1,000,000 bytes)** and **MiB is binary (1,048,576 bytes)**. MiB is about 4.86% larger than MB. The same applies to KB vs KiB, GB vs GiB, TB vs TiB.

### Does RAM use binary or decimal?

RAM is sold and addressed in binary. A "16 GB" stick of RAM is 16 GiB (17,179,869,184 bytes) and reports as such to the OS. The marketing "GB" is technically incorrect by SI standards, but the convention is so entrenched that no one has tried to relabel memory as "GiB".

### What about network speeds?

Network equipment has historically used **decimal** for bits per second (1 Mbps = 1,000,000 bits per second). Many ISPs also advertise in decimal but quote speeds in **bytes per second** mixed with **bits**, leading to the classic "I pay for 100 Mbps but I only get 12 MB/s" confusion. Divide by 8 (bits to bytes) and account for overhead, and 100 Mbps becomes roughly 11-12 MB/s. The math checks out; the units are confusing.

### What's bigger, a KB or a KiB?

A KiB is bigger. **1 KiB = 1,024 B**, while **1 KB = 1,000 B**. The KiB (kibibyte) is 2.4% larger than the KB (kilobyte). The same pattern holds: MiB > MB, GiB > GB, TiB > TB, PiB > PB.

### Why hasn't the industry standardized on one?

It has, in standards. The IEC has officially used binary prefixes (KiB, MiB, GiB) since 1998 and the SI standard explicitly says "kilo" means 1,000. But the binary prefixes have not displaced the old labels in everyday use. Apple uses decimal GB and TB consistently. Microsoft uses binary for RAM but decimal for storage. Linux tools are split. The result is permanent ambiguity, and the only fix is to know which convention you are dealing with in any given context.

## Conclusion

Bytes, kilobytes, megabytes, gigabytes, terabytes, and petabytes are not interchangeable, and the decimal-vs-binary gap grows with each step up the ladder. The formulas are simple — divide by 1,000 for decimal, by 1,024 for binary — but remembering which one to use is the hard part.

For a quick answer, the [UtilBoxx Data Storage Converter](/en/tools/unit/data) does the math in either mode with one click. For the size of a specific file, your OS file manager gives you the exact byte count. For batch or scripted work, Python's arithmetic or the \`numfmt\` CLI are unbeatable. And when in doubt, look for the trailing "i": **KiB, MiB, GiB, TiB, PiB** always mean binary.`;

const bytesKbMbZh = `## 为什么有两种不同的"MB"？

买一块 1 TB 硬盘，插上后操作系统显示 931 GB。硬盘"少"了 69 GB。这不是 bug、欺诈或格式错误。这是**二进制和十进制**的混淆，根植于我们命名存储的方式。

核心问题是：你用 1,000（十进制，SI 标准）还是用 1,024（二进制，计算机内部实际做法）来换算？

- **1 KB = 1,000 字节**（十进制，硬盘厂商使用，SI 标准）
- **1 KiB = 1,024 字节**（二进制，老 Windows 称之为"KB"，RAM 使用此单位）

为消除歧义，IEC 在 1998 年引入了新的二进制前缀：**KiB**（kibibyte，2^10）、**MiB**（mebibyte，2^20）、**GiB**（gibibyte，2^30）、**TiB**（tebibyte，2^40）、**PiB**（pebibyte，2^50）。实际上，旧标签在技术文档之外的任何地方都被沿用，大多数操作系统也不一致：macOS 存储用十进制，Windows 混用，Linux 各发行版各异。

本文讲解数学原理、惯例以及三种可靠的换算方法。

## 精确公式

### 十进制（SI，硬盘厂商、网络速度使用）

\`\`\`
1 KB  = 1,000 B        = 10^3 B
1 MB  = 1,000 KB      = 1,000,000 B      = 10^6 B
1 GB  = 1,000 MB      = 1,000,000,000 B  = 10^9 B
1 TB  = 1,000 GB      = 1,000,000,000,000 B  = 10^12 B
1 PB  = 1,000 TB      = 10^15 B
\`\`\`

### 二进制（IEC，RAM、文件格式、部分操作系统使用）

\`\`\`
1 KiB = 1,024 B       = 2^10 B
1 MiB = 1,024 KiB     = 1,048,576 B       = 2^20 B
1 GiB = 1,024 MiB     = 1,073,741,824 B   = 2^30 B
1 TiB = 1,024 GiB     = 1,099,511,627,776 B = 2^40 B
1 PiB = 1,024 TiB     = 2^50 B
\`\`\`

十进制和二进制的比值增长很快：营销上的"1 TB"是 1,000,000,000,000 字节，但你的操作系统在格式化和元数据开销后可能显示 931 GiB 可用空间。这个差距随容量增大而扩大 —— 一块"1 PB"硬盘大约是 0.89 PiB。

## 速查表

| 字节     | 十进制 (SI)         | 二进制 (IEC)            |
|--------:|--------------------|------------------------|
| 1,000   | 1 KB                | 0.977 KiB              |
| 1,024   | 1.024 KB            | 1 KiB                  |
| 1,000,000 | 1 MB              | 0.954 MiB              |
| 1,048,576 | 1.049 MB          | 1 MiB                  |
| 10^9    | 1 GB                | 0.931 GiB              |
| 2^30    | 1.074 GB            | 1 GiB                  |
| 10^12   | 1 TB                | 0.909 TiB              |
| 2^40    | 1.100 TB            | 1 TiB                  |
| 10^15   | 1 PB                | 0.888 PiB              |

## 方法一：使用 UtilBoxx 数据存储换算工具（推荐）

在 B、KB、MB、GB、TB 和 PB 之间换算最快、最安全的方式是 [UtilBoxx 数据存储换算工具](/zh/tools/unit/data)。它支持十进制和二进制两种模式，可选择精度，完全在浏览器中运行 —— 无上传、无注册、无文件记录。

**使用方法：**

1. 打开 [utilboxx.com/zh/tools/unit/data](/zh/tools/unit/data)
2. 在任意一个输入框（B、KB、MB、GB、TB 或 PB）输入数值
3. 选择十进制（SI）或二进制（IEC）模式
4. 其他输入框即时更新
5. 复制结果

**为什么推荐这个方法：**

- **100% 免费**，无注册、无邮箱、无广告
- **隐私优先**：不离开你的浏览器
- **十进制和二进制模式**，一键切换
- **六个单位双向换算**
- **高精度** —— 不会因浮点四舍五入而失真
- **任何有浏览器的设备都能用**

如果你经常引用文件大小、硬盘容量或内存容量，这个工具能让你避免反复犯 1024 vs 1000 的错误。

## 方法二：macOS Finder（以及其他操作系统的文件管理器）

如果你只需要知道某个特定文件的精确字节数，操作系统的文件管理器可以以十进制给出完整精度的答案。

在 **macOS Finder** 中：

1. 右键点击任意文件，选择**显示简介**（或按 Cmd+I）
2. 大小以十进制单位显示：KB、MB、GB
3. 点击大小字段可在字节、KB、MB、GB 之间切换
4. 精确字节数显示在括号里

在 **Windows 文件资源管理器**中：

1. 右键点击文件，选择**属性**
2. 大小以 KB、MB 或 GB 显示（Windows 不同版本二进制和十进制混用）
3. 想要精确字节数，如果 Windows 报告的是二进制 KB，则除以 1,024；现代 Windows 10/11 实际上在某些对话框中报告二进制，另一些用十进制

在 **Linux** 中：

1. \`ls -l file\` 显示精确字节数
2. \`ls -lh file\` 显示人类可读大小（大多数发行版默认使用二进制；有些用十进制 —— 查看你的 \`alias ls\`）

这个方法适合想知道某个特定文件或文件夹的大小时使用，但无法帮你做批量换算或单位之间的数学运算。

## 方法三：Python（或任何语言）

对于编程换算，几行 Python 就能覆盖所有六个单位。\`bit_length()\` 方法返回一个整数表示所需的位数 —— 在为缓冲区大小时很有用。

\`\`\`python
# 十进制 (SI) 换算
def to_bytes(value, unit):
    units = {"B": 1, "KB": 1e3, "MB": 1e6, "GB": 1e9, "TB": 1e12, "PB": 1e15}
    return value * units[unit]

# 二进制 (IEC) 换算
def to_bytes_binary(value, unit):
    units = {"B": 1, "KiB": 2**10, "MiB": 2**20, "GiB": 2**30, "TiB": 2**40, "PiB": 2**50}
    return value * units[unit]

# 整数的 bit_length
n = 123456789
print(n.bit_length())  # 27 bits
\`\`\`

Python REPL 中的单行命令：

\`\`\`python
# 1 GiB 转字节
1024 * 1024 * 1024            # 1073741824

# 1 TB 转 GiB
1_000_000_000_000 / (2**30)   # 931.3225746154785

# 5 PB 转 TiB
5 * 1e15 / (2**40)            # 4547.473508864641
\`\`\`

JavaScript 中同样的思路：

\`\`\`js
const GiB = 1024 ** 3;
const TB_in_bytes = 1e12;
console.log((TB_in_bytes / GiB).toFixed(3));  // 931.323
\`\`\`

## 方法四：命令行（macOS/Linux）

大多数 shell 都内置了数学计算，macOS 自带的计算器可以处理大数：

\`\`\`bash
# bash 中使用 awk
awk 'BEGIN { printf "1 TB in GiB = %.3f\\n", 1e12 / (2^30) }'
# 1 TB in GiB = 931.323

awk 'BEGIN { printf "1 GiB in bytes = %d\\n", 2^30 }'
# 1 GiB in bytes = 1073741824

# 仅 macOS：使用 units
units "1 TB" "GiB"
# 931.32257

# 仅 Linux：numfmt 内置于 coreutils
numfmt --to=iec --suffix=B 1000000000000
# 931G
numfmt --to=si  --suffix=B 1073741824
# 1.1G
\`\`\`

\`numfmt\` 工具在 shell 脚本中特别有用：它接受带可选单位的数字并重新格式化，同时支持十进制（--si）和二进制（--iec）模式，并能正确处理负数。

## 常见问题

### 为什么我的"1 TB"硬盘显示 931 GB？

硬盘厂商使用十进制：1 TB = 1,000,000,000,000 字节。操作系统通常以二进制显示，虽然他们称之为 GB，但实际是 GiB。1,000,000,000,000 字节 ÷ 1,073,741,824 字节/GiB = **931.32 GiB**。"少"的部分就是十进制和二进制的差，加上格式化、分区表和文件系统元数据的开销。

### MB 比 MiB 大吗？

是的。**MB 是十进制（1,000,000 字节）**，**MiB 是二进制（1,048,576 字节）**。MiB 比 MB 大约 4.86%。同样的规律适用于 KB vs KiB、GB vs GiB、TB vs TiB。

### 内存用二进制还是十进制？

内存的售卖和寻址都用二进制。一条"16 GB"的内存是 16 GiB（17,179,869,184 字节），系统也这样报告。营销上的"GB"按 SI 标准严格来说是不准确的，但惯例根深蒂固，没人尝试把内存重新标记为"GiB"。

### 网速呢？

网络设备历来对每秒位数（1 Mbps = 1,000,000 比特/秒）使用**十进制**。许多 ISP 也以十进制宣传，但用**字节/秒**和**比特**混用报价，导致"我付了 100 Mbps 但我只能拿到 12 MB/s"的经典困惑。除以 8（比特转字节）并考虑开销，100 Mbps 大约是 11-12 MB/s。数学没错，单位让人糊涂。

### KB 和 KiB 哪个大？

KiB 更大。**1 KiB = 1,024 B**，而 **1 KB = 1,000 B**。KiB（kibibyte）比 KB（kilobyte）大 2.4%。同样的模式：MiB > MB，GiB > GB，TiB > TB，PiB > PB。

### 为什么行业没有统一标准？

在标准层面是统一的。IEC 自 1998 年起正式使用二进制前缀（KiB、MiB、GiB），SI 标准也明确说"千"等于 1,000。但二进制前缀在日常使用中并未取代旧标签。Apple 的 GB 和 TB 一致使用十进制。Microsoft 对内存用二进制，存储用十进制。Linux 工具则分裂。结果是永久的歧义，唯一可靠的办法是知道你在任何给定上下文中面对的是哪种惯例。

## 结论

字节、千字节、兆字节、吉字节、太字节和拍字节并不互换，十进制和二进制的差距随每一步升级而扩大。公式很简单 —— 十进制除以 1,000，二进制除以 1,024 —— 但难的是记住用哪个。

要快速得到答案，[UtilBoxx 数据存储换算工具](/zh/tools/unit/data) 一键完成任意模式的计算。要查看某个特定文件的大小，操作系统文件管理器给出精确字节数。要做批量或脚本工作，Python 的算术运算或 \`numfmt\` 命令行无可替代。拿不准时，看末尾的"i"：**KiB、MiB、GiB、TiB、PiB** 永远表示二进制。`;

const bytesKbMbJa = `## なぜ 2 種類の "MB" があるのか？

1 TB のハードドライブを買って接続すると、OS は 931 GB と表示します。ドライブが「69 GB 不足」しているように見えます。これはバグでも詐欺でもフォーマットエラーでもありません。私たちがストレージを命名する方法に根ざした**二進と十進の混乱**です。

核心的な問題は：1,000（十進、SI 標準）で割るか、1,024（二進、コンピュータが内部で実際に使う）で割るか、という点です。

- **1 KB = 1,000 バイト**（十進、ハードドライブメーカーが使用、SI が規定）
- **1 KiB = 1,024 バイト**（二進、旧 Windows が "KB" と呼んでいたもの、RAM の計測単位）

曖昧さを解消するため、IEC は 1998 年に新しい二進接頭辞を導入しました：**KiB**（kibibyte、2^10）、**MiB**（mebibyte、2^20）、**GiB**（gibibyte、2^30）、**TiB**（tebibyte、2^40）、**PiB**（pebibyte、2^50）。実際には、旧ラベルは技術文書以外のあらゆる場所で使われ続けており、多くの OS が一貫していません：macOS はストレージに十進、Windows は混在、Linux ディストリビューションはまちまちです。

このガイドでは、数学、慣習、そして 3 つの信頼できる換算方法を説明します。

## 正確な公式

### 十進（SI、ハードドライブメーカー、ネットワーク速度で使用）

\`\`\`
1 KB  = 1,000 B        = 10^3 B
1 MB  = 1,000 KB      = 1,000,000 B      = 10^6 B
1 GB  = 1,000 MB      = 1,000,000,000 B  = 10^9 B
1 TB  = 1,000 GB      = 1,000,000,000,000 B  = 10^12 B
1 PB  = 1,000 TB      = 10^15 B
\`\`\`

### 二進（IEC、RAM、ファイルフォーマット、一部の OS で使用）

\`\`\`
1 KiB = 1,024 B       = 2^10 B
1 MiB = 1,024 KiB     = 1,048,576 B       = 2^20 B
1 GiB = 1,024 MiB     = 1,073,741,824 B   = 2^30 B
1 TiB = 1,024 GiB     = 1,099,511,627,776 B = 2^40 B
1 PiB = 1,024 TiB     = 2^50 B
\`\`\`

十進と二進の比は急速に増大します：マーケティング上の「1 TB」は 1,000,000,000,000 バイトですが、OS はフォーマットとオーバーヘッド後に 931 GiB の使用可能領域を表示することがあります。このギャップは容量とともに拡大します ——「1 PB」のドライブは約 0.89 PiB です。

## 早見表

| バイト    | 十進 (SI)            | 二進 (IEC)              |
|---------:|----------------------|--------------------------|
| 1,000    | 1 KB                 | 0.977 KiB                |
| 1,024    | 1.024 KB             | 1 KiB                    |
| 1,000,000| 1 MB                 | 0.954 MiB                |
| 1,048,576| 1.049 MB             | 1 MiB                    |
| 10^9     | 1 GB                 | 0.931 GiB                |
| 2^30     | 1.074 GB             | 1 GiB                    |
| 10^12    | 1 TB                 | 0.909 TiB                |
| 2^40     | 1.100 TB             | 1 TiB                    |
| 10^15    | 1 PB                 | 0.888 PiB                |

## 方法 1：UtilBoxx データ容量換算ツール（推奨）

B、KB、MB、GB、TB、PB 間で換算する最も速く、安全な方法は [UtilBoxx データ容量換算ツール](/ja/tools/unit/data) です。十進と二進の両モードをサポートし、精度を選択でき、すべてブラウザ内で動作します。アップロードなし、登録なし、ファイルの記録なし。

**使い方：**

1. [utilboxx.com/ja/tools/unit/data](/ja/tools/unit/data) を開く
2. 任意のフィールド（B、KB、MB、GB、TB、または PB）に値を入力
3. 十進（SI）または二進（IEC）モードを選択
4. 他のフィールドが即座に更新
5. 結果をコピー

**この方法を推奨する理由：**

- **100% 無料**、登録不要、メールアドレス不要、広告なし
- **プライバシー最優先**：ブラウザから出ない
- **十進と二進モード**をワンクリックで切替
- **6 つの単位を双方向換算**
- **高精度** —— 浮動小数点の四捨五入に驚かされない
- **ブラウザがあるあらゆるデバイスで動作**

ファイルサイズ、ドライブ容量、メモリ容量を頻繁に引用するなら、このツールは 1024 vs 1000 の同じ間違いを繰り返すのを防いでくれます。

## 方法 2：macOS Finder（および他の OS のファイルマネージャ）

特定のファイルの正確なバイト数を知るだけなら、OS のファイルマネージャが十進で完全な精度の答えをくれます。

**macOS Finder** で：

1. ファイルを右クリックして**情報を見る**（または Cmd+I）
2. サイズが十進単位（KB、MB、GB）で表示される
3. サイズフィールドをクリックして、バイト、KB、MB、GB を切り替え
4. 正確なバイト数は括弧内に表示される

**Windows ファイルエクスプローラー**で：

1. ファイルを右クリックして**プロパティ**を選択
2. サイズが KB、MB、または GB で表示される（Windows のバージョンにより二進と十進が混在）
3. 正確なバイト数を得るには、Windows が二進 KB を報告している場合 1,024 で割る；最新の Windows 10/11 は実は一部のダイアログでは二進、他では十進で報告する

**Linux** で：

1. \`ls -l file\` は正確なバイト数を表示
2. \`ls -lh file\` は人間が読めるサイズを表示（ほとんどのディストロはデフォルトで二進；一部は十進 —— \`alias ls\` を確認）

この方法は特定のファイルやフォルダのサイズを知りたいときに最適ですが、バッチ換算や単位間の計算には役立ちません。

## 方法 3：Python（または任意の言語）

プログラムでの換算には、わずかな行の Python で 6 つの単位すべてをカバーできます。\`bit_length()\` メソッドは整数を表現するのに必要なビット数を返します —— バッファサイズ決定時に便利です。

\`\`\`python
# 十進 (SI) 換算
def to_bytes(value, unit):
    units = {"B": 1, "KB": 1e3, "MB": 1e6, "GB": 1e9, "TB": 1e12, "PB": 1e15}
    return value * units[unit]

# 二進 (IEC) 換算
def to_bytes_binary(value, unit):
    units = {"B": 1, "KiB": 2**10, "MiB": 2**20, "GiB": 2**30, "TiB": 2**40, "PiB": 2**50}
    return value * units[unit]

# 整数の bit_length
n = 123456789
print(n.bit_length())  # 27 bits
\`\`\`

Python REPL のワンライナー：

\`\`\`python
# 1 GiB をバイトに
1024 * 1024 * 1024            # 1073741824

# 1 TB を GiB に
1_000_000_000_000 / (2**30)   # 931.3225746154785

# 5 PB を TiB に
5 * 1e15 / (2**40)            # 4547.473508864641
\`\`\`

JavaScript でも同じ考え方：

\`\`\`js
const GiB = 1024 ** 3;
const TB_in_bytes = 1e12;
console.log((TB_in_bytes / GiB).toFixed(3));  // 931.323
\`\`\`

## 方法 4：macOS/Linux のコマンドライン

ほとんどのシェルには組み込みの計算機能があり、macOS には大きな数を扱える計算器が付属しています：

\`\`\`bash
# bash で awk を使用
awk 'BEGIN { printf "1 TB in GiB = %.3f\\n", 1e12 / (2^30) }'
# 1 TB in GiB = 931.323

awk 'BEGIN { printf "1 GiB in bytes = %d\\n", 2^30 }'
# 1 GiB in bytes = 1073741824

# macOS のみ：units を使用
units "1 TB" "GiB"
# 931.32257

# Linux のみ：numfmt は coreutils に組み込まれている
numfmt --to=iec --suffix=B 1000000000000
# 931G
numfmt --to=si  --suffix=B 1073741824
# 1.1G
\`\`\`

\`numfmt\` ツールはシェルスクリプトで特に有用です：オプションの単位付きの数字を受け取り再フォーマットし、十進（--si）と二進（--iec）の両方をサポートし、負の数を正しく扱います。

## よくある質問

### なぜ "1 TB" ドライブが 931 GB と表示されるのか？

ドライブメーカーは十進を使用：1 TB = 1,000,000,000,000 バイト。OS はしばしばこれを二進で表示し、GB と呼びますが実際は GiB です。1,000,000,000,000 バイト ÷ 1,073,741,824 バイト/GiB = **931.32 GiB**。「不足」分は十進と二進の差に、フォーマット、パーティションテーブル、ファイルシステムメタデータのオーバーヘッドを加えたものです。

### MB は MiB より大きい？

はい。**MB は十進（1,000,000 バイト）**、**MiB は二進（1,048,576 バイト）**。MiB は MB より約 4.86% 大きいです。同じパターンが KB vs KiB、GB vs GiB、TB vs TiB にも当てはまります。

### RAM は二進と十進のどちらを使う？

RAM は販売もアドレスも二進です。「16 GB」のメモリは 16 GiB（17,179,869,184 バイト）で、OS もそう報告します。マーケティング上の「GB」は SI 基準では厳密には不正確ですが、慣習が根深いため誰もメモリを「GiB」と呼び直そうとはしていません。

### ネットワーク速度は？

ネットワーク機器は歴史的にビット/秒で**十進**を使ってきました（1 Mbps = 1,000,000 ビット/秒）。多くの ISP も十進で広告しますが、**バイト/秒**と**ビット**を混在させて引用するため、「100 Mbps を契約しているのに 12 MB/s しか出ない」という古典的な混乱が生じます。8 で割って（ビット→バイト）、オーバーヘッドを考慮すると、100 Mbps はおおよそ 11-12 MB/s です。計算は合っており、単位が混乱を招いているのです。

### KB と KiB はどちらが大きい？

KiB の方が大きいです。**1 KiB = 1,024 B**、**1 KB = 1,000 B**。KiB（kibibyte）は KB（kilobyte）より 2.4% 大きいです。同じパターン：MiB > MB、GiB > GB、TiB > TB、PiB > PB。

### 業界がなぜ統一しないのか？

標準レベルでは統一されています。IEC は 1998 年から公式に二進接頭辞（KiB、MiB、GiB）を使用しており、SI 標準も明確に「キロ」は 1,000 であると言っています。しかし二進接頭辞は日常使用で旧ラベルを置き換えられていません。Apple は GB と TB に一貫して十進を使用。Microsoft は RAM は二進、ストレージは十進。Linux ツールは分裂状態。結果として永続的な曖昧さが生じ、ある文脈でどちらの慣習に直面しているかを知ることだけが唯一の解決策です。

## まとめ

バイト、キロバイト、メガバイト、ギガバイト、テラバイト、ペタバイトは互換ではなく、十進と二進のギャップは階段を上がるごとに拡大します。公式は単純です —— 十進なら 1,000、二進なら 1,024 で割る —— しかしどれを使うかを覚えるのが難しいところです。

素早く答えを得るには、[UtilBoxx データ容量換算ツール](/ja/tools/unit/data) がワンクリックで両モード計算します。特定ファイルのサイズを知るには、OS ファイルマネージャが正確なバイト数を示します。バッチやスクリプト作業には、Python の演算または \`numfmt\` コマンドラインが最強です。迷ったときは末尾の「i」を見てください：**KiB、MiB、GiB、TiB、PiB** は常に二進を意味します。`;

const bytesKbMbEs = `## ¿Por qué hay dos "MB" diferentes?

Compra un disco duro de 1 TB, conéctalo y tu sistema operativo reporta 931 GB. Al disco le "faltan" 69 GB. Esto no es un bug, una estafa ni un error de formato. Es la **confusión entre binario y decimal** arraigada en cómo nombramos el almacenamiento.

El problema central: ¿multiplicas por 1.000 (decimal, el estándar SI) o por 1.024 (binario, lo que las computadoras hacen internamente)?

- **1 KB = 1.000 bytes** (decimal, lo que usan los fabricantes de discos, lo que dicta el SI)
- **1 KiB = 1.024 bytes** (binario, lo que Windows solía llamar "KB", en lo que se mide la RAM)

Para eliminar la ambigüedad, la IEC introdujo nuevos prefijos binarios en 1998: **KiB** (kibibyte, 2^10), **MiB** (mebibyte, 2^20), **GiB** (gibibyte, 2^30), **TiB** (tebibyte, 2^40), **PiB** (pebibyte, 2^50). En la práctica, las etiquetas antiguas persisten en todas partes excepto en documentación técnica, y la mayoría de sistemas operativos son inconsistentes: macOS usa decimal para almacenamiento, Windows usa una mezcla, las distribuciones de Linux varían.

Esta guía explica la matemática, las convenciones y tres formas confiables de convertir.

## Las fórmulas exactas

### Decimal (SI, usado por fabricantes de discos, velocidades de red)

\`\`\`
1 KB  = 1.000 B        = 10^3 B
1 MB  = 1.000 KB      = 1.000.000 B      = 10^6 B
1 GB  = 1.000 MB      = 1.000.000.000 B  = 10^9 B
1 TB  = 1.000 GB      = 1.000.000.000.000 B  = 10^12 B
1 PB  = 1.000 TB      = 10^15 B
\`\`\`

### Binario (IEC, usado por RAM, formatos de archivo, algunos SO)

\`\`\`
1 KiB = 1.024 B       = 2^10 B
1 MiB = 1.024 KiB     = 1.048.576 B       = 2^20 B
1 GiB = 1.024 MiB     = 1.073.741.824 B   = 2^30 B
1 TiB = 1.024 GiB     = 1.099.511.627.776 B = 2^40 B
1 PiB = 1.024 TiB     = 2^50 B
\`\`\`

La relación entre decimal y binario crece rápidamente: un disco "1 TB" de marketing es 1.000.000.000.000 bytes, pero tu SO puede mostrar 931 GiB de espacio utilizable tras el formateo y la sobrecarga. La brecha se amplía con el tamaño: un disco "1 PB" es aproximadamente 0,89 PiB.

## Tabla de referencia rápida

| Bytes    | Decimal (SI)         | Binario (IEC)            |
|---------:|----------------------|--------------------------|
| 1.000    | 1 KB                 | 0,977 KiB                |
| 1.024    | 1,024 KB             | 1 KiB                    |
| 1.000.000| 1 MB                 | 0,954 MiB                |
| 1.048.576| 1,049 MB             | 1 MiB                    |
| 10^9     | 1 GB                 | 0,931 GiB                |
| 2^30     | 1,074 GB             | 1 GiB                    |
| 10^12    | 1 TB                 | 0,909 TiB                |
| 2^40     | 1,100 TB             | 1 TiB                    |
| 10^15    | 1 PB                 | 0,888 PiB                |

## Método 1: Use el conversor de almacenamiento de datos de UtilBoxx (Recomendado)

La forma más rápida y segura de convertir entre B, KB, MB, GB, TB y PB es el [Conversor de Almacenamiento de UtilBoxx](/es/tools/unit/data). Soporta tanto el modo decimal como el binario, le permite elegir la precisión y se ejecuta por completo en su navegador: sin carga, sin registro, sin registro de sus archivos.

**Cómo usarlo:**

1. Vaya a [utilboxx.com/es/tools/unit/data](/es/tools/unit/data)
2. Ingrese un valor en cualquier campo (B, KB, MB, GB, TB o PB)
3. Elija el modo decimal (SI) o binario (IEC)
4. Todos los demás campos se actualizan al instante
5. Copie el resultado

**Por qué recomendamos este método:**

- **100% gratis**, sin registro, sin email, sin anuncios
- **Privacidad primero**: nada sale de su navegador
- **Modos decimal y binario** con un solo interruptor
- **Conversión bidireccional** entre las seis unidades
- **Alta precisión**: sin sorpresas de redondeo de punto flotante
- **Funciona en cualquier dispositivo** con navegador

Si cita tamaños de archivo, capacidades de disco o cantidades de RAM con frecuencia, esta herramienta le evitará caer una y otra vez en la confusión de 1024 vs 1000.

## Método 2: macOS Finder (y otros administradores de archivos del SO)

Si solo necesita saber el conteo exacto de bytes de un archivo específico, el administrador de archivos de su sistema operativo le da la respuesta decimal con precisión completa.

En **macOS Finder**:

1. Haga clic derecho en cualquier archivo y elija **Obtener información** (o presione Cmd+I)
2. El tamaño se muestra en unidades decimales: KB, MB, GB
3. Haga clic en el campo de tamaño para alternar entre bytes, KB, MB y GB
4. El conteo exacto de bytes está entre paréntesis

En **Windows Explorador de archivos**:

1. Haga clic derecho en un archivo y elija **Propiedades**
2. El tamaño se muestra en KB, MB o GB (Windows usa una mezcla de binario y decimal según la versión)
3. Para los bytes exactos, divida KB por 1.024 solo si Windows reporta KB binario; Windows 10/11 moderno en realidad reporta en binario para algunos diálogos y decimal para otros

En **Linux**:

1. \`ls -l file\` muestra los bytes exactos
2. \`ls -lh file\` muestra el tamaño legible por humanos (la mayoría de las distros usan binario por defecto; algunas usan decimal — revise su \`alias ls\`)

Este método es ideal cuando quiere conocer el tamaño de un archivo o carpeta específico, pero no ayuda con la conversión por lotes o la matemática entre unidades.

## Método 3: Python (o cualquier lenguaje)

Para conversión programática, unas pocas líneas de Python cubren las seis unidades. El método \`bit_length()\` le da el número de bits necesarios para representar un entero — útil al dimensionar buffers.

\`\`\`python
# Conversión decimal (SI)
def to_bytes(value, unit):
    units = {"B": 1, "KB": 1e3, "MB": 1e6, "GB": 1e9, "TB": 1e12, "PB": 1e15}
    return value * units[unit]

# Conversión binaria (IEC)
def to_bytes_binary(value, unit):
    units = {"B": 1, "KiB": 2**10, "MiB": 2**20, "GiB": 2**30, "TiB": 2**40, "PiB": 2**50}
    return value * units[unit]

# bit_length de un entero
n = 123456789
print(n.bit_length())  # 27 bits
\`\`\`

Para one-liners en un REPL de Python:

\`\`\`python
# Convertir 1 GiB a bytes
1024 * 1024 * 1024            # 1073741824

# Convertir 1 TB a GiB
1_000_000_000_000 / (2**30)   # 931.3225746154785

# Convertir 5 PB a TiB
5 * 1e15 / (2**40)            # 4547.473508864641
\`\`\`

En JavaScript, la misma idea:

\`\`\`js
const GiB = 1024 ** 3;
const TB_in_bytes = 1e12;
console.log((TB_in_bytes / GiB).toFixed(3));  // 931.323
\`\`\`

## Método 4: CLI en macOS/Linux

La mayoría de los shells tienen matemáticas integradas, y macOS incluye una calculadora que maneja números grandes:

\`\`\`bash
# En bash, usando awk
awk 'BEGIN { printf "1 TB in GiB = %.3f\\n", 1e12 / (2^30) }'
# 1 TB in GiB = 931.323

awk 'BEGIN { printf "1 GiB in bytes = %d\\n", 2^30 }'
# 1 GiB in bytes = 1073741824

# Solo macOS: use units
units "1 TB" "GiB"
# 931.32257

# Solo Linux: numfmt está integrado en coreutils
numfmt --to=iec --suffix=B 1000000000000
# 931G
numfmt --to=si  --suffix=B 1073741824
# 1.1G
\`\`\`

La herramienta \`numfmt\` es particularmente útil en scripts de shell: acepta números con unidades opcionales y los reformatea, soporta ambos modos decimal (--si) y binario (--iec), y maneja números negativos correctamente.

## Preguntas frecuentes

### ¿Por qué mi disco de "1 TB" muestra 931 GB?

Los fabricantes de discos usan decimal: 1 TB = 1.000.000.000.000 bytes. Los sistemas operativos suelen mostrar esto en binario, que llaman GB pero en realidad significa GiB. 1.000.000.000.000 bytes ÷ 1.073.741.824 bytes por GiB = **931,32 GiB**. El espacio "faltante" es la diferencia entre decimal y binario, más la sobrecarga del formateo, las tablas de particiones y los metadatos del sistema de archivos.

### ¿MB es más grande que MiB?

Sí. **MB es decimal (1.000.000 bytes)** y **MiB es binario (1.048.576 bytes)**. MiB es aproximadamente un 4,86% más grande que MB. Lo mismo aplica a KB vs KiB, GB vs GiB, TB vs TiB.

### ¿La RAM usa binario o decimal?

La RAM se vende y se direcciona en binario. Una memoria "16 GB" es 16 GiB (17.179.869.184 bytes) y el SO la reporta así. El "GB" de marketing es técnicamente incorrecto según los estándares SI, pero la convención está tan arraigada que nadie ha intentado renombrar la memoria como "GiB".

### ¿Qué pasa con las velocidades de red?

El equipamiento de red ha usado históricamente **decimal** para bits por segundo (1 Mbps = 1.000.000 bits por segundo). Muchos ISP también anuncian en decimal pero cotizan velocidades mezclando **bytes por segundo** con **bits**, llevando a la clásica confusión de "pago 100 Mbps pero solo obtengo 12 MB/s". Divida por 8 (bits a bytes) y tenga en cuenta la sobrecarga, y 100 Mbps se convierten en aproximadamente 11-12 MB/s. La matemática cuadra; las unidades confunden.

### ¿Qué es más grande, un KB o un KiB?

Un KiB es más grande. **1 KiB = 1.024 B**, mientras que **1 KB = 1.000 B**. El KiB (kibibyte) es un 2,4% más grande que el KB (kilobyte). El mismo patrón se mantiene: MiB > MB, GiB > GB, TiB > TB, PiB > PB.

### ¿Por qué la industria no se ha estandarizado en uno?

En los estándares sí lo está. La IEC usa oficialmente prefijos binarios (KiB, MiB, GiB) desde 1998 y el estándar SI dice explícitamente que "kilo" significa 1.000. Pero los prefijos binarios no han desplazado a las etiquetas antiguas en el uso diario. Apple usa decimal consistente para GB y TB. Microsoft usa binario para RAM pero decimal para almacenamiento. Las herramientas de Linux están divididas. El resultado es ambigüedad permanente, y la única solución es saber con qué convención está lidiando en cada contexto.

## Conclusión

Los bytes, kilobytes, megabytes, gigabytes, terabytes y petabytes no son intercambiables, y la brecha decimal-vs-binario crece con cada paso en la escalera. Las fórmulas son simples — divida por 1.000 para decimal, por 1.024 para binario — pero recordar cuál usar es la parte difícil.

Para una respuesta rápida, el [Conversor de Almacenamiento de UtilBoxx](/es/tools/unit/data) hace la matemática en cualquier modo con un clic. Para el tamaño de un archivo específico, el administrador de archivos de su SO le da el conteo exacto de bytes. Para trabajo por lotes o con scripts, la aritmética de Python o la CLI \`numfmt\` son imbatibles. Y en caso de duda, busque la "i" final: **KiB, MiB, GiB, TiB, PiB** siempre significan binario.`;

const bytesKbMbPt = `## Por que existem dois "MB" diferentes?

Compre um disco rígido de 1 TB, conecte e seu sistema operacional reporta 931 GB. O disco está "faltando" 69 GB. Isso não é bug, golpe ou erro de formatação. É a **confusão binário vs decimal** embutida em como nomeamos armazenamento.

A questão central: você multiplica por 1.000 (decimal, o padrão SI) ou por 1.024 (binário, o que os computadores realmente fazem internamente)?

- **1 KB = 1.000 bytes** (decimal, o que os fabricantes de disco usam, o que o SI dita)
- **1 KiB = 1.024 bytes** (binário, o que o Windows costumava chamar de "KB", em que a RAM é medida)

Para remover a ambiguidade, a IEC introduziu novos prefixos binários em 1998: **KiB** (kibibyte, 2^10), **MiB** (mebibyte, 2^20), **GiB** (gibibyte, 2^30), **TiB** (tebibyte, 2^40), **PiB** (pebibyte, 2^50). Na prática, os rótulos antigos persistem em todos os lugares exceto em documentação técnica, e a maioria dos sistemas operacionais é inconsistente: macOS usa decimal para armazenamento, Windows usa uma mistura, distribuições Linux variam.

Este guia explica a matemática, as convenções e três formas confiáveis de converter.

## As fórmulas exatas

### Decimal (SI, usado por fabricantes de discos, velocidades de rede)

\`\`\`
1 KB  = 1.000 B        = 10^3 B
1 MB  = 1.000 KB      = 1.000.000 B      = 10^6 B
1 GB  = 1.000 MB      = 1.000.000.000 B  = 10^9 B
1 TB  = 1.000 GB      = 1.000.000.000.000 B  = 10^12 B
1 PB  = 1.000 TB      = 10^15 B
\`\`\`

### Binário (IEC, usado por RAM, formatos de arquivo, alguns SOs)

\`\`\`
1 KiB = 1.024 B       = 2^10 B
1 MiB = 1.024 KiB     = 1.048.576 B       = 2^20 B
1 GiB = 1.024 MiB     = 1.073.741.824 B   = 2^30 B
1 TiB = 1.024 GiB     = 1.099.511.627.776 B = 2^40 B
1 PiB = 1.024 TiB     = 2^50 B
\`\`\`

A razão entre decimal e binário cresce rapidamente: um disco "1 TB" de marketing é 1.000.000.000.000 bytes, mas seu SO pode mostrar 931 GiB de espaço utilizável após formatação e overhead. A lacuna se amplia com o tamanho — um disco "1 PB" é aproximadamente 0,89 PiB.

## Tabela de referência rápida

| Bytes    | Decimal (SI)         | Binário (IEC)            |
|---------:|----------------------|--------------------------|
| 1.000    | 1 KB                 | 0,977 KiB                |
| 1.024    | 1,024 KB             | 1 KiB                    |
| 1.000.000| 1 MB                 | 0,954 MiB                |
| 1.048.576| 1,049 MB             | 1 MiB                    |
| 10^9     | 1 GB                 | 0,931 GiB                |
| 2^30     | 1,074 GB             | 1 GiB                    |
| 10^12    | 1 TB                 | 0,909 TiB                |
| 2^40     | 1,100 TB             | 1 TiB                    |
| 10^15    | 1 PB                 | 0,888 PiB                |

## Método 1: Use o conversor de armazenamento de dados do UtilBoxx (Recomendado)

A maneira mais rápida e segura de converter entre B, KB, MB, GB, TB e PB é o [Conversor de Armazenamento do UtilBoxx](/pt/tools/unit/data). Suporta tanto o modo decimal quanto o binário, permite escolher a precisão e roda inteiramente no seu navegador: sem upload, sem cadastro, sem registro dos seus arquivos.

**Como usar:**

1. Acesse [utilboxx.com/pt/tools/unit/data](/pt/tools/unit/data)
2. Digite um valor em qualquer campo (B, KB, MB, GB, TB ou PB)
3. Escolha o modo decimal (SI) ou binário (IEC)
4. Todos os outros campos se atualizam instantaneamente
5. Copie o resultado

**Por que recomendamos este método:**

- **100% grátis**, sem cadastro, sem e-mail, sem anúncios
- **Privacidade em primeiro lugar**: nada sai do seu navegador
- **Modos decimal e binário** com um único alternador
- **Conversão bidirecional** entre as seis unidades
- **Alta precisão** — sem surpresas de arredondamento de ponto flutuante
- **Funciona em qualquer dispositivo** com navegador

Se você cita tamanhos de arquivo, capacidades de disco ou quantidades de RAM com frequência, esta ferramenta vai evitar que você cometa o mesmo erro de 1024 vs 1000 repetidamente.

## Método 2: macOS Finder (e outros gerenciadores de arquivos do SO)

Se você só precisa saber a contagem exata de bytes de um arquivo específico, o gerenciador de arquivos do seu sistema operacional dá a resposta decimal com precisão total.

No **macOS Finder**:

1. Clique com o botão direito em qualquer arquivo e escolha **Obter informações** (ou pressione Cmd+I)
2. O tamanho é mostrado em unidades decimais: KB, MB, GB
3. Clique no campo de tamanho para alternar entre bytes, KB, MB e GB
4. A contagem exata de bytes está entre parênteses

No **Windows Explorador de Arquivos**:

1. Clique com o botão direito em um arquivo e escolha **Propriedades**
2. O tamanho é mostrado em KB, MB ou GB (Windows usa uma mistura de binário e decimal dependendo da versão)
3. Para bytes exatos, divida KB por 1.024 apenas se o Windows reporta KB binário; Windows 10/11 moderno na verdade reporta em binário para alguns diálogos e decimal para outros

No **Linux**:

1. \`ls -l file\` mostra os bytes exatos
2. \`ls -lh file\` mostra o tamanho legível por humanos (a maioria das distros usa binário por padrão; algumas usam decimal — cheque seu \`alias ls\`)

Este método é ótimo quando você quer saber o tamanho de um arquivo ou pasta específico, mas não ajuda com conversão em lote ou matemática entre unidades.

## Método 3: Python (ou qualquer linguagem)

Para conversão programática, poucas linhas de Python cobrem todas as seis unidades. O método \`bit_length()\` dá o número de bits necessários para representar um inteiro — útil ao dimensionar buffers.

\`\`\`python
# Conversão decimal (SI)
def to_bytes(value, unit):
    units = {"B": 1, "KB": 1e3, "MB": 1e6, "GB": 1e9, "TB": 1e12, "PB": 1e15}
    return value * units[unit]

# Conversão binária (IEC)
def to_bytes_binary(value, unit):
    units = {"B": 1, "KiB": 2**10, "MiB": 2**20, "GiB": 2**30, "TiB": 2**40, "PiB": 2**50}
    return value * units[unit]

# bit_length de um inteiro
n = 123456789
print(n.bit_length())  # 27 bits
\`\`\`

Para one-liners no REPL do Python:

\`\`\`python
# Converter 1 GiB para bytes
1024 * 1024 * 1024            # 1073741824

# Converter 1 TB para GiB
1_000_000_000_000 / (2**30)   # 931.3225746154785

# Converter 5 PB para TiB
5 * 1e15 / (2**40)            # 4547.473508864641
\`\`\`

Em JavaScript, a mesma ideia:

\`\`\`js
const GiB = 1024 ** 3;
const TB_in_bytes = 1e12;
console.log((TB_in_bytes / GiB).toFixed(3));  // 931.323
\`\`\`

## Método 4: CLI no macOS/Linux

A maioria dos shells tem matemática embutida, e o macOS vem com uma calculadora que lida com números grandes:

\`\`\`bash
# No bash, usando awk
awk 'BEGIN { printf "1 TB in GiB = %.3f\\n", 1e12 / (2^30) }'
# 1 TB in GiB = 931.323

awk 'BEGIN { printf "1 GiB in bytes = %d\\n", 2^30 }'
# 1 GiB in bytes = 1073741824

# Apenas macOS: use units
units "1 TB" "GiB"
# 931.32257

# Apenas Linux: numfmt é parte do coreutils
numfmt --to=iec --suffix=B 1000000000000
# 931G
numfmt --to=si  --suffix=B 1073741824
# 1.1G
\`\`\`

A ferramenta \`numfmt\` é particularmente útil em scripts shell: aceita números com unidades opcionais e os reformata, suporta ambos os modos decimal (--si) e binário (--iec), e lida com números negativos corretamente.

## Perguntas frequentes

### Por que meu disco "1 TB" mostra 931 GB?

Fabricantes de disco usam decimal: 1 TB = 1.000.000.000.000 bytes. Sistemas operacionais frequentemente mostram isso em binário, que chamam de GB mas na verdade significa GiB. 1.000.000.000.000 bytes ÷ 1.073.741.824 bytes por GiB = **931,32 GiB**. O espaço "ausente" é a diferença entre decimal e binário, mais overhead de formatação, tabelas de partição e metadados do sistema de arquivos.

### MB é maior que MiB?

Sim. **MB é decimal (1.000.000 bytes)** e **MiB é binário (1.048.576 bytes)**. MiB é aproximadamente 4,86% maior que MB. O mesmo se aplica a KB vs KiB, GB vs GiB, TB vs TiB.

### A RAM usa binário ou decimal?

A RAM é vendida e endereçada em binário. Um pente de memória "16 GB" é 16 GiB (17.179.869.184 bytes) e o SO reporta assim. O "GB" de marketing é tecnicamente incorreto pelos padrões SI, mas a convenção é tão enraizada que ninguém tentou renomear a memória como "GiB".

### E as velocidades de rede?

Equipamentos de rede historicamente usaram **decimal** para bits por segundo (1 Mbps = 1.000.000 bits por segundo). Muitos ISPs também anunciam em decimal mas cotam velocidades misturando **bytes por segundo** com **bits**, levando à clássica confusão de "pago 100 Mbps mas só recebo 12 MB/s". Divida por 8 (bits para bytes) e considere o overhead, e 100 Mbps se torna aproximadamente 11-12 MB/s. A matemática bate; as unidades confundem.

### O que é maior, KB ou KiB?

Um KiB é maior. **1 KiB = 1.024 B**, enquanto **1 KB = 1.000 B**. O KiB (kibibyte) é 2,4% maior que o KB (kilobyte). O mesmo padrão se mantém: MiB > MB, GiB > GB, TiB > TB, PiB > PB.

### Por que a indústria não padronizou em um?

Nos padrões, sim. A IEC usa oficialmente prefixos binários (KiB, MiB, GiB) desde 1998 e o padrão SI diz explicitamente que "kilo" significa 1.000. Mas os prefixos binários não deslocaram os rótulos antigos no uso diário. A Apple usa decimal consistente para GB e TB. A Microsoft usa binário para RAM mas decimal para armazenamento. As ferramentas Linux estão divididas. O resultado é ambiguidade permanente, e a única solução é saber com qual convenção você está lidando em qualquer contexto.

## Conclusão

Bytes, kilobytes, megabytes, gigabytes, terabytes e petabytes não são intercambiáveis, e a lacuna decimal-vs-binário cresce a cada degrau na escada. As fórmulas são simples — divida por 1.000 para decimal, por 1.024 para binário — mas lembrar qual usar é a parte difícil.

Para uma resposta rápida, o [Conversor de Armazenamento do UtilBoxx](/pt/tools/unit/data) faz a matemática em qualquer modo com um clique. Para o tamanho de um arquivo específico, o gerenciador de arquivos do seu SO dá a contagem exata de bytes. Para trabalho em lote ou com scripts, a aritmética do Python ou a CLI \`numfmt\` são imbatíveis. E em caso de dúvida, procure o "i" final: **KiB, MiB, GiB, TiB, PiB** sempre significam binário.`;

const bytesKbMbFr = `## Pourquoi y a-t-il deux « Mo » différents ?

Achetez un disque dur de 1 To, branchez-le et votre système d'exploitation indique 931 Go. Il « manque » 69 Go au disque. Ce n'est pas un bug, une arnaque ni une erreur de format. C'est la **confusion binaire/décimale** ancrée dans notre façon de nommer le stockage.

Le problème central : multipliez-vous par 1 000 (décimal, la norme SI) ou par 1 024 (binaire, ce que font réellement les ordinateurs en interne) ?

- **1 ko = 1 000 octets** (décimal, utilisé par les fabricants de disques, dicté par le SI)
- **1 Kio = 1 024 octets** (binaire, ce que Windows appelait autrefois « ko », l'unité de la RAM)

Pour lever l'ambiguïté, la CEI a introduit de nouveaux préfixes binaires en 1998 : **Kio** (kibioctet, 2^10), **Mio** (mébioctet, 2^20), **Gio** (gibioctet, 2^30), **Tio** (tébioctet, 2^40), **Pio** (pébioctet, 2^50). En pratique, les anciennes étiquettes persistent partout sauf dans la documentation technique, et la plupart des systèmes d'exploitation sont incohérents : macOS utilise le décimal pour le stockage, Windows mélange, les distributions Linux varient.

Ce guide explique les mathématiques, les conventions et trois méthodes fiables de conversion.

## Les formules exactes

### Décimal (SI, utilisé par les fabricants de disques, vitesses réseau)

\`\`\`
1 ko  = 1 000 o        = 10^3 o
1 Mo  = 1 000 ko      = 1 000 000 o      = 10^6 o
1 Go  = 1 000 Mo      = 1 000 000 000 o  = 10^9 o
1 To  = 1 000 Go      = 1 000 000 000 000 o  = 10^12 o
1 Po  = 1 000 To      = 10^15 o
\`\`\`

### Binaire (CEI, utilisé par la RAM, les formats de fichiers, certains SE)

\`\`\`
1 Kio = 1 024 o       = 2^10 o
1 Mio = 1 024 Kio     = 1 048 576 o       = 2^20 o
1 Gio = 1 024 Mio     = 1 073 741 824 o   = 2^30 o
1 Tio = 1 024 Gio     = 1 099 511 627 776 o = 2^40 o
1 Pio = 1 024 Tio     = 2^50 o
\`\`\`

Le rapport entre décimal et binaire croît rapidement : un disque « 1 To » marketing représente 1 000 000 000 000 octets, mais votre SE peut afficher 931 Gio d'espace utilisable après formatage et surcoût. L'écart s'élargit avec la taille — un disque « 1 Po » représente environ 0,89 Pio.

## Table de référence rapide

| Octets   | Décimal (SI)         | Binaire (CEI)            |
|---------:|----------------------|--------------------------|
| 1 000    | 1 ko                 | 0,977 Kio                |
| 1 024    | 1,024 ko             | 1 Kio                    |
| 1 000 000| 1 Mo                 | 0,954 Mio                |
| 1 048 576| 1,049 Mo             | 1 Mio                    |
| 10^9     | 1 Go                 | 0,931 Gio                |
| 2^30     | 1,074 Go             | 1 Gio                    |
| 10^12    | 1 To                 | 0,909 Tio                |
| 2^40     | 1,100 To             | 1 Tio                    |
| 10^15    | 1 Po                 | 0,888 Pio                |

## Méthode 1 : Utilisez le convertisseur de stockage de données de UtilBoxx (Recommandé)

La façon la plus rapide et la plus sûre de convertir entre o, ko, Mo, Go, To et Po est le [Convertisseur de Stockage de UtilBoxx](/fr/tools/unit/data). Il prend en charge les modes décimal et binaire, vous laisse choisir la précision, et s'exécute entièrement dans votre navigateur — pas de téléversement, pas d'inscription, pas de journalisation de vos fichiers.

**Comment l'utiliser :**

1. Allez sur [utilboxx.com/fr/tools/unit/data](/fr/tools/unit/data)
2. Saisissez une valeur dans n'importe quel champ (o, ko, Mo, Go, To ou Po)
3. Choisissez le mode décimal (SI) ou binaire (CEI)
4. Tous les autres champs se mettent à jour instantanément
5. Copiez le résultat

**Pourquoi nous recommandons cette méthode :**

- **100 % gratuit**, sans inscription, sans e-mail, sans publicité
- **Confidentialité d'abord** : rien ne quitte votre navigateur
- **Modes décimal et binaire** avec un seul commutateur
- **Conversion bidirectionnelle** entre les six unités
- **Haute précision** — pas de surprises d'arrondi en virgule flottante
- **Fonctionne sur tout appareil** avec navigateur

Si vous citez souvent des tailles de fichiers, des capacités de disque ou des quantités de RAM, cet outil vous évitera de retomber dans la confusion 1024 vs 1000.

## Méthode 2 : macOS Finder (et autres gestionnaires de fichiers du SE)

Si vous n'avez besoin que du nombre exact d'octets d'un fichier spécifique, le gestionnaire de fichiers de votre système d'exploitation vous donne la réponse décimale avec une précision totale.

Sur **macOS Finder** :

1. Cliquez-droit sur n'importe quel fichier et choisissez **Lire les informations** (ou appuyez sur Cmd+I)
2. La taille est affichée en unités décimales : ko, Mo, Go
3. Cliquez sur le champ de taille pour basculer entre octets, ko, Mo et Go
4. Le nombre exact d'octets est entre parenthèses

Sur **Windows Explorateur de fichiers** :

1. Cliquez-droit sur un fichier et choisissez **Propriétés**
2. La taille est affichée en ko, Mo ou Go (Windows utilise un mélange de binaire et décimal selon la version)
3. Pour les octets exacts, divisez les ko par 1 024 uniquement si Windows rapporte des ko binaires ; Windows 10/11 moderne rapporte en fait en binaire pour certaines boîtes de dialogue et en décimal pour d'autres

Sur **Linux** :

1. \`ls -l file\` affiche les octets exacts
2. \`ls -lh file\` affiche la taille lisible par l'homme (la plupart des distros utilisent le binaire par défaut ; certaines utilisent le décimal — vérifiez votre \`alias ls\`)

Cette méthode est idéale pour connaître la taille d'un fichier ou dossier spécifique, mais n'aide pas pour la conversion par lots ou les calculs entre unités.

## Méthode 3 : Python (ou tout langage)

Pour la conversion programmatique, quelques lignes de Python couvrent les six unités. La méthode \`bit_length()\` donne le nombre de bits nécessaires pour représenter un entier — utile pour dimensionner des tampons.

\`\`\`python
# Conversion décimale (SI)
def to_bytes(value, unit):
    units = {"B": 1, "KB": 1e3, "MB": 1e6, "GB": 1e9, "TB": 1e12, "PB": 1e15}
    return value * units[unit]

# Conversion binaire (CEI)
def to_bytes_binary(value, unit):
    units = {"B": 1, "KiB": 2**10, "MiB": 2**20, "GiB": 2**30, "TiB": 2**40, "PiB": 2**50}
    return value * units[unit]

# bit_length d'un entier
n = 123456789
print(n.bit_length())  # 27 bits
\`\`\`

Pour des one-liners dans un REPL Python :

\`\`\`python
# Convertir 1 Gio en octets
1024 * 1024 * 1024            # 1073741824

# Convertir 1 To en Gio
1_000_000_000_000 / (2**30)   # 931.3225746154785

# Convertir 5 Po en Tio
5 * 1e15 / (2**40)            # 4547.473508864641
\`\`\`

En JavaScript, la même idée :

\`\`\`js
const GiB = 1024 ** 3;
const TB_in_bytes = 1e12;
console.log((TB_in_bytes / GiB).toFixed(3));  // 931.323
\`\`\`

## Méthode 4 : CLI sous macOS/Linux

La plupart des shells ont des maths intégrées, et macOS fournit une calculatrice qui gère les grands nombres :

\`\`\`bash
# En bash, avec awk
awk 'BEGIN { printf "1 TB in GiB = %.3f\\n", 1e12 / (2^30) }'
# 1 TB in GiB = 931.323

awk 'BEGIN { printf "1 GiB in bytes = %d\\n", 2^30 }'
# 1 GiB in bytes = 1073741824

# macOS uniquement : utilisez units
units "1 TB" "GiB"
# 931.32257

# Linux uniquement : numfmt fait partie de coreutils
numfmt --to=iec --suffix=B 1000000000000
# 931G
numfmt --to=si  --suffix=B 1073741824
# 1.1G
\`\`\`

L'outil \`numfmt\` est particulièrement utile dans les scripts shell : il accepte des nombres avec des unités optionnelles et les reformate, prend en charge les modes décimal (--si) et binaire (--iec), et gère correctement les nombres négatifs.

## Questions fréquentes

### Pourquoi mon disque « 1 To » affiche-t-il 931 Go ?

Les fabricants de disques utilisent le décimal : 1 To = 1 000 000 000 000 octets. Les systèmes d'exploitation affichent souvent cela en binaire, qu'ils appellent Go mais qui signifie en réalité Gio. 1 000 000 000 000 octets ÷ 1 073 741 824 octets par Gio = **931,32 Gio**. L'espace « manquant » est la différence entre décimal et binaire, plus la surcharge du formatage, des tables de partition et des métadonnées du système de fichiers.

### Mo est-il plus grand que Mio ?

Oui. **Mo est décimal (1 000 000 octets)** et **Mio est binaire (1 048 576 octets)**. Mio est environ 4,86 % plus grand que Mo. La même logique s'applique à ko vs Kio, Go vs Gio, To vs Tio.

### La RAM utilise-t-elle le binaire ou le décimal ?

La RAM est vendue et adressée en binaire. Une barrette « 16 Go » est 16 Gio (17 179 869 184 octets) et le SE la rapporte ainsi. Le « Go » marketing est techniquement incorrect selon les normes SI, mais la convention est tellement ancrée que personne n'a essayé de renommer la mémoire en « Gio ».

### Qu'en est-il des vitesses réseau ?

L'équipement réseau a historiquement utilisé le **décimal** pour les bits par seconde (1 Mbps = 1 000 000 bits par seconde). De nombreux FAI annoncent aussi en décimal mais communiquent des vitesses en mélangeant **octets par seconde** et **bits**, menant à la confusion classique du « je paie 100 Mbps mais je n'obtiens que 12 Mo/s ». Divisez par 8 (bits vers octets) et tenez compte de la surcharge, et 100 Mbps deviennent environ 11-12 Mo/s. Le calcul est juste ; les unités prêtent à confusion.

### Qu'est-ce qui est plus grand, un ko ou un Kio ?

Un Kio est plus grand. **1 Kio = 1 024 o**, alors que **1 ko = 1 000 o**. Le Kio (kibioctet) est 2,4 % plus grand que le ko (kilooctet). Le même schéma se vérifie : Mio > Mo, Gio > Go, Tio > To, Pio > Po.

### Pourquoi l'industrie ne s'est-elle pas standardisée sur l'un ?

Dans les normes, si. La CEI utilise officiellement les préfixes binaires (Kio, Mio, Gio) depuis 1998 et la norme SI dit explicitement que « kilo » signifie 1 000. Mais les préfixes binaires n'ont pas remplacé les anciennes étiquettes dans l'usage quotidien. Apple utilise le décimal de manière cohérente pour Go et To. Microsoft utilise le binaire pour la RAM mais le décimal pour le stockage. Les outils Linux sont divisés. Le résultat est une ambiguïté permanente, et la seule parade est de savoir à quelle convention vous avez affaire dans chaque contexte.

## Conclusion

Les octets, kilooctets, mégaoctets, gigaoctets, téraoctets et pétaoctets ne sont pas interchangeables, et l'écart décimal/binaire grandit à chaque marche de l'échelle. Les formules sont simples — divisez par 1 000 pour le décimal, par 1 024 pour le binaire — mais se souvenir laquelle utiliser est la partie difficile.

Pour une réponse rapide, le [Convertisseur de Stockage de UtilBoxx](/fr/tools/unit/data) fait le calcul dans n'importe quel mode en un clic. Pour la taille d'un fichier spécifique, le gestionnaire de fichiers de votre SE vous donne le nombre exact d'octets. Pour le travail par lots ou scripté, l'arithmétique Python ou la CLI \`numfmt\` sont imbattables. Et en cas de doute, cherchez le « i » final : **Kio, Mio, Gio, Tio, Pio** signifient toujours binaire.`;

const bytesKbMbDe = `## Warum gibt es zwei verschiedene „MB"?

Kauft man eine 1-TB-Festplatte, schließt sie an und das Betriebssystem meldet 931 GB. Der Festplatte „fehlen" 69 GB. Das ist kein Bug, kein Betrug und kein Formatierungsfehler. Es ist die **Binär/Dezimal-Verwirrung**, die unserer Art, Speicher zu benennen, eingeschrieben ist.

Die Kernfrage: Multiplizieren Sie mit 1.000 (Dezimal, der SI-Standard) oder mit 1.024 (Binär, was Computer intern tatsächlich tun)?

- **1 KB = 1.000 Bytes** (Dezimal, von Festplattenherstellern verwendet, von der SI vorgeschrieben)
- **1 KiB = 1.024 Bytes** (Binär, was Windows früher „KB" nannte, in dem RAM gemessen wird)

Um die Mehrdeutigkeit zu beseitigen, führte die IEC 1998 neue Binärpräfixe ein: **KiB** (Kibibyte, 2^10), **MiB** (Mebibyte, 2^20), **GiB** (Gibibyte, 2^30), **TiB** (Tebibyte, 2^40), **PiB** (Pebibyte, 2^50). In der Praxis bestehen die alten Bezeichnungen überall fort, außer in der technischen Dokumentation, und die meisten Betriebssysteme sind inkonsistent: macOS verwendet Dezimal für Speicher, Windows eine Mischung, Linux-Distributionen variieren.

Dieser Leitfaden erklärt die Mathematik, die Konventionen und drei zuverlässige Umrechnungsmethoden.

## Die exakten Formeln

### Dezimal (SI, von Festplattenherstellern, Netzwerkgeschwindigkeiten verwendet)

\`\`\`
1 KB  = 1.000 B        = 10^3 B
1 MB  = 1.000 KB      = 1.000.000 B      = 10^6 B
1 GB  = 1.000 MB      = 1.000.000.000 B  = 10^9 B
1 TB  = 1.000 GB      = 1.000.000.000.000 B  = 10^12 B
1 PB  = 1.000 TB      = 10^15 B
\`\`\`

### Binär (IEC, von RAM, Dateiformaten, einigen Betriebssystemen verwendet)

\`\`\`
1 KiB = 1.024 B       = 2^10 B
1 MiB = 1.024 KiB     = 1.048.576 B       = 2^20 B
1 GiB = 1.024 MiB     = 1.073.741.824 B   = 2^30 B
1 TiB = 1.024 GiB     = 1.099.511.627.776 B = 2^40 B
1 PiB = 1.024 TiB     = 2^50 B
\`\`\`

Das Verhältnis zwischen Dezimal und Binär wächst schnell: Eine „1 TB"-Platte im Marketing ist 1.000.000.000.000 Bytes, aber Ihr Betriebssystem zeigt nach Formatierung und Overhead vielleicht 931 GiB nutzbaren Speicher an. Die Lücke vergrößert sich mit der Kapazität — eine „1 PB"-Platte sind ungefähr 0,89 PiB.

## Schnellreferenztabelle

| Bytes    | Dezimal (SI)         | Binär (IEC)              |
|---------:|----------------------|--------------------------|
| 1.000    | 1 KB                 | 0,977 KiB                |
| 1.024    | 1,024 KB             | 1 KiB                    |
| 1.000.000| 1 MB                 | 0,954 MiB                |
| 1.048.576| 1,049 MB             | 1 MiB                    |
| 10^9     | 1 GB                 | 0,931 GiB                |
| 2^30     | 1,074 GB             | 1 GiB                    |
| 10^12    | 1 TB                 | 0,909 TiB                |
| 2^40     | 1,100 TB             | 1 TiB                    |
| 10^15    | 1 PB                 | 0,888 PiB                |

## Methode 1: Den Datenspeicher-Umrechner von UtilBoxx verwenden (Empfohlen)

Der schnellste und sicherste Weg, zwischen B, KB, MB, GB, TB und PB umzurechnen, ist der [Datenspeicher-Umrechner von UtilBoxx](/de/tools/unit/data). Er unterstützt sowohl den Dezimal- als auch den Binärmodus, lässt Sie die Genauigkeit wählen und läuft vollständig in Ihrem Browser — kein Upload, keine Registrierung, keine Protokollierung Ihrer Dateien.

**So verwenden Sie ihn:**

1. Gehen Sie zu [utilboxx.com/de/tools/unit/data](/de/tools/unit/data)
2. Geben Sie einen Wert in ein beliebiges Feld ein (B, KB, MB, GB, TB oder PB)
3. Wählen Sie den Dezimal- (SI) oder Binär- (IEC) Modus
4. Alle anderen Felder aktualisieren sich sofort
5. Kopieren Sie das Ergebnis

**Warum wir diese Methode empfehlen:**

- **100 % kostenlos**, keine Registrierung, keine E-Mail, keine Werbung
- **Privatsphäre zuerst**: Nichts verlässt Ihren Browser
- **Dezimal- und Binärmodi** mit einem einzigen Schalter
- **Bidirektionale Umrechnung** zwischen allen sechs Einheiten
- **Hohe Genauigkeit** — keine Überraschungen durch Gleitkomma-Rundung
- **Funktioniert auf jedem Gerät** mit Browser

Wenn Sie häufig Dateigrößen, Festplattenkapazitäten oder RAM-Mengen zitieren, erspart Ihnen dieses Werkzeug, immer wieder in die 1024-vs-1000-Falle zu tappen.

## Methode 2: macOS Finder (und andere Dateimanager des Betriebssystems)

Wenn Sie nur die exakte Bytezahl einer bestimmten Datei wissen müssen, liefert der Dateimanager Ihres Betriebssystems die dezimale Antwort mit voller Genauigkeit.

In **macOS Finder**:

1. Rechtsklick auf eine beliebige Datei und **Informationen** wählen (oder Cmd+I drücken)
2. Die Größe wird in Dezimaleinheiten angezeigt: KB, MB, GB
3. Klicken Sie auf das Größenfeld, um zwischen Bytes, KB, MB und GB zu wechseln
4. Die exakte Bytezahl steht in Klammern

In **Windows-Explorer**:

1. Rechtsklick auf eine Datei und **Eigenschaften** wählen
2. Die Größe wird in KB, MB oder GB angezeigt (Windows verwendet je nach Version eine Mischung aus Binär und Dezimal)
3. Für exakte Bytes teilen Sie KB durch 1.024, nur wenn Windows binäre KB meldet; modernes Windows 10/11 meldet tatsächlich in einigen Dialogen binär und in anderen dezimal

In **Linux**:

1. \`ls -l file\` zeigt exakte Bytes
2. \`ls -lh file\` zeigt eine menschenlesbare Größe (die meisten Distributionen verwenden standardmäßig Binär; einige verwenden Dezimal — prüfen Sie Ihren \`alias ls\`)

Diese Methode eignet sich hervorragend, wenn Sie die Größe einer bestimmten Datei oder eines Ordners wissen möchten, hilft aber nicht bei der Stapelumrechnung oder der Mathematik zwischen Einheiten.

## Methode 3: Python (oder jede Sprache)

Für programmatische Umrechnung decken wenige Zeilen Python alle sechs Einheiten ab. Die Methode \`bit_length()\` liefert die Anzahl der Bits, die zur Darstellung einer Ganzzahl nötig sind — nützlich beim Dimensionieren von Puffern.

\`\`\`python
# Dezimal-Umrechnung (SI)
def to_bytes(value, unit):
    units = {"B": 1, "KB": 1e3, "MB": 1e6, "GB": 1e9, "TB": 1e12, "PB": 1e15}
    return value * units[unit]

# Binär-Umrechnung (IEC)
def to_bytes_binary(value, unit):
    units = {"B": 1, "KiB": 2**10, "MiB": 2**20, "GiB": 2**30, "TiB": 2**40, "PiB": 2**50}
    return value * units[unit]

# bit_length einer Ganzzahl
n = 123456789
print(n.bit_length())  # 27 bits
\`\`\`

Für One-Liner in einer Python-REPL:

\`\`\`python
# 1 GiB in Bytes umrechnen
1024 * 1024 * 1024            # 1073741824

# 1 TB in GiB umrechnen
1_000_000_000_000 / (2**30)   # 931.3225746154785

# 5 PB in TiB umrechnen
5 * 1e15 / (2**40)            # 4547.473508864641
\`\`\`

In JavaScript dieselbe Idee:

\`\`\`js
const GiB = 1024 ** 3;
const TB_in_bytes = 1e12;
console.log((TB_in_bytes / GiB).toFixed(3));  // 931.323
\`\`\`

## Methode 4: CLI unter macOS/Linux

Die meisten Shells haben eingebaute Mathematik, und macOS liefert einen Taschenrechner, der große Zahlen verarbeitet:

\`\`\`bash
# In bash mit awk
awk 'BEGIN { printf "1 TB in GiB = %.3f\\n", 1e12 / (2^30) }'
# 1 TB in GiB = 931.323

awk 'BEGIN { printf "1 GiB in bytes = %d\\n", 2^30 }'
# 1 GiB in bytes = 1073741824

# Nur macOS: units verwenden
units "1 TB" "GiB"
# 931.32257

# Nur Linux: numfmt ist Teil von coreutils
numfmt --to=iec --suffix=B 1000000000000
# 931G
numfmt --to=si  --suffix=B 1073741824
# 1.1G
\`\`\`

Das Werkzeug \`numfmt\` ist besonders nützlich in Shell-Skripten: Es akzeptiert Zahlen mit optionalen Einheiten und formatiert sie um, unterstützt sowohl Dezimal- (--si) als auch Binärmodus (--iec) und behandelt negative Zahlen korrekt.

## Häufige Fragen

### Warum zeigt meine „1 TB"-Platte 931 GB an?

Festplattenhersteller verwenden Dezimal: 1 TB = 1.000.000.000.000 Bytes. Betriebssysteme zeigen dies oft in Binär an, das sie GB nennen, das aber eigentlich GiB bedeutet. 1.000.000.000.000 Bytes ÷ 1.073.741.824 Bytes pro GiB = **931,32 GiB**. Der „fehlende" Speicher ist die Differenz zwischen Dezimal und Binär, plus Overhead durch Formatierung, Partitionstabellen und Dateisystem-Metadaten.

### Ist MB größer als MiB?

Ja. **MB ist dezimal (1.000.000 Bytes)** und **MiB ist binär (1.048.576 Bytes)**. MiB ist ungefähr 4,86 % größer als MB. Dasselbe gilt für KB vs KiB, GB vs GiB, TB vs TiB.

### Verwendet RAM Binär oder Dezimal?

RAM wird in Binär verkauft und adressiert. Ein „16 GB"-Riegel ist 16 GiB (17.179.869.184 Bytes), und das Betriebssystem meldet das auch so. Das „GB" im Marketing ist nach SI-Standards technisch inkorrekt, aber die Konvention ist so verfestigt, dass niemand versucht hat, Speicher als „GiB" umzubenennen.

### Was ist mit Netzwerkgeschwindigkeiten?

Netzwerkgeräte haben historisch **Dezimal** für Bits pro Sekunde verwendet (1 Mbps = 1.000.000 Bits pro Sekunde). Viele ISPs werben auch mit Dezimal, geben Geschwindigkeiten aber als Mischung aus **Bytes pro Sekunde** und **Bits** an, was zur klassischen Verwirrung „Ich zahle 100 Mbps, bekomme aber nur 12 MB/s" führt. Teilen Sie durch 8 (Bits zu Bytes) und berücksichtigen Sie den Overhead, dann werden aus 100 Mbps ungefähr 11–12 MB/s. Die Mathematik stimmt; die Einheiten verwirren.

### Was ist größer, KB oder KiB?

Ein KiB ist größer. **1 KiB = 1.024 B**, während **1 KB = 1.000 B** ist. Das KiB (Kibibyte) ist 2,4 % größer als das KB (Kilobyte). Dasselbe Muster gilt: MiB > MB, GiB > GB, TiB > TB, PiB > PB.

### Warum hat sich die Industrie nicht auf eines standardisiert?

In den Standards schon. Die IEC verwendet seit 1998 offiziell Binärpräfixe (KiB, MiB, GiB), und der SI-Standard sagt explizit, dass „Kilo" 1.000 bedeutet. Aber die Binärpräfixe haben die alten Bezeichnungen im Alltag nicht verdrängt. Apple verwendet durchgängig Dezimal für GB und TB. Microsoft verwendet Binär für RAM, aber Dezimal für Speicher. Linux-Werkzeuge sind gespalten. Das Ergebnis ist eine dauerhafte Mehrdeutigkeit, und die einzige Lösung besteht darin, in jedem Kontext zu wissen, mit welcher Konvention man es zu tun hat.

## Fazit

Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes und Petabytes sind nicht austauschbar, und die Dezimal/Binär-Lücke wächst mit jeder Stufe der Leiter. Die Formeln sind einfach — durch 1.000 für Dezimal teilen, durch 1.024 für Binär — aber sich zu merken, welche man verwenden muss, ist der schwierige Teil.

Für eine schnelle Antwort erledigt der [Datenspeicher-Umrechner von UtilBoxx](/de/tools/unit/data) die Mathematik in beiden Modi mit einem Klick. Für die Größe einer bestimmten Datei liefert der Dateimanager Ihres Betriebssystems die exakte Bytezahl. Für Stapel- oder Skriptarbeit sind die Python-Arithmetik oder die \`numfmt\`-CLI unschlagbar. Und im Zweifelsfall achten Sie auf das abschließende „i": **KiB, MiB, GiB, TiB, PiB** bedeuten immer Binär.`;

export const bytesConvertPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-convert-bytes-kb-mb-gb",
    category: "Unit Tools",
    date: "2026-03-18",
    readTime: "5 min",
    title: "How to Convert Bytes, KB, MB, GB, TB (and PB)",
    description: "Understand binary vs decimal, convert between byte units, and avoid common pitfalls.",
    content: bytesKbMbEn,
  },
  zh: {
    slug: "how-to-convert-bytes-kb-mb-gb",
    category: "单位工具",
    date: "2026-03-18",
    readTime: "5 分钟",
    title: "如何换算字节、KB、MB、GB、TB（以及 PB）",
    description: "理解二进制与十进制的区别，在字节单位之间换算，并避开常见陷阱。",
    content: bytesKbMbZh,
  },
  ja: {
    slug: "how-to-convert-bytes-kb-mb-gb",
    category: "単位ツール",
    date: "2026-03-18",
    readTime: "5 分",
    title: "バイト、KB、MB、GB、TB（および PB）の換算方法",
    description: "二進と十進の理解、バイト単位間の換算、そしてよくある落とし穴の回避。",
    content: bytesKbMbJa,
  },
  es: {
    slug: "how-to-convert-bytes-kb-mb-gb",
    category: "Herramientas de unidades",
    date: "2026-03-18",
    readTime: "5 min",
    title: "Cómo convertir bytes, KB, MB, GB, TB (y PB)",
    description: "Entienda binario vs decimal, convierta entre unidades de bytes y evite errores comunes.",
    content: bytesKbMbEs,
  },
  pt: {
    slug: "how-to-convert-bytes-kb-mb-gb",
    category: "Ferramentas de unidades",
    date: "2026-03-18",
    readTime: "5 min",
    title: "Como converter bytes, KB, MB, GB, TB (e PB)",
    description: "Entenda binário vs decimal, converta entre unidades de bytes e evite armadilhas comuns.",
    content: bytesKbMbPt,
  },
  fr: {
    slug: "how-to-convert-bytes-kb-mb-gb",
    category: "Outils d'unités",
    date: "2026-03-18",
    readTime: "5 min",
    title: "Comment convertir octets, ko, Mo, Go, To (et Po)",
    description: "Comprenez binaire vs décimal, convertissez entre unités d'octets et évitez les pièges courants.",
    content: bytesKbMbFr,
  },
  de: {
    slug: "how-to-convert-bytes-kb-mb-gb",
    category: "Einheiten-Tools",
    date: "2026-03-18",
    readTime: "5 Min",
    title: "Bytes, KB, MB, GB, TB (und PB) umrechnen",
    description: "Verstehen Sie Binär vs. Dezimal, rechnen Sie zwischen Byteeinheiten um und vermeiden Sie häufige Fallstricke.",
    content: bytesKbMbDe,
  },
};
