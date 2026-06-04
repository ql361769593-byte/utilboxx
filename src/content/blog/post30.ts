// Blog post: How to Create Strong, Memorable Passwords (2026)
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const strongPasswordsEn = `## Why passwords still matter in 2026

We are deep into the passkey era, but passwords remain the single most common authentication credential on the internet. Most online accounts — email, banking, social media, work tools, streaming services — still rely on a username and password as the primary or backup authentication method. Even when biometrics or passkeys are available, a strong master password protects the manager that holds everything else.

A weak password is one of the easiest things for an attacker to exploit. **Brute-force** tools can test billions of password guesses per second against a stolen password hash. **Credential stuffing** reuses passwords leaked from one breach to compromise accounts on unrelated services. **Phishing** tricks users into typing passwords into fake login pages. The defenses against all of these start with a strong, unique password for every account.

This guide covers how to generate strong passwords, the different character classes you can use, how to make them memorable, and how to use a password manager to keep them organized.

## What makes a password strong?

A password's strength is measured in **entropy bits**. Each bit of entropy doubles the work an attacker must do to guess it. The formula:

\`\`\`
entropy = log2(character_pool^length)
\`\`\`

Where \`character_pool\` is the number of distinct characters available and \`length\` is the password length.

For a password to be considered strong in 2026:

- **At least 16 characters** long (longer is always better)
- **Mix of character classes**: uppercase, lowercase, digits, and symbols
- **Random or pseudo-random** generation (not a dictionary word, name, or common phrase)
- **Unique per service** (never reuse passwords across sites)

A 16-character random password using all 4 character classes has about **95 bits of entropy** — enough to resist brute-force for decades, even with a stolen hash and the fastest hardware.

Common weak patterns to avoid:

- **Dictionary words**: "password", "sunshine", "football"
- **Names, birthdays, anniversaries**: "John1990", "Maggie2010"
- **Common substitutions**: "P@ssw0rd" — looks random, but is in every attacker's dictionary
- **Reused passwords**: "MyDog2020!" used on 14 different sites
- **Sequential or repeated characters**: "12345678", "aaaaaaaa"

## Character classes

The four character classes and their typical pool sizes:

| Class       | Examples                       | Pool size |
|-------------|--------------------------------|-----------|
| Lowercase   | a–z                            | 26        |
| Uppercase   | A–Z                            | 26        |
| Digits      | 0–9                            | 10        |
| Symbols     | !@#$%^&*()_-+={}[]\|:;"'<>,.?/ | 32        |
| **Total**   |                                | **94**    |

A password using all four classes has 94 possible characters at each position. A 16-character password from this pool: **94^16 ≈ 3.7 × 10^31** possibilities, or about 105 bits of entropy.

Some services restrict the symbol set they accept (e.g., only \`!@#$%\`). A common workaround: avoid the most problematic characters (\`/\`, \`\\\`, quotes, backticks) and stick to the simpler subset.

## Memorable vs random

There are two main approaches to creating strong passwords:

### Random (highest strength, lowest memorability)

Pure random passwords like \`aB7#kP2&mN9$qR3!\` have maximum entropy but are essentially impossible to remember. Use them for accounts that live in a password manager — you only need to remember one master password.

### Memorable passphrases (good strength, easy to remember)

A **passphrase** is several random words joined together: \`correct-horse-battery-staple\`. The classic XKCD example. With 4 random words from a 7,776-word list (the Diceware word list), entropy is about **51 bits** — strong against online attacks, easy to remember, easy to type.

A passphrases' strength comes from entropy per word, not length. Adding a symbol and a number (e.g., \`correct-horse-battery-staple-7!\`) pushes entropy to ~57 bits.

Best practice: combine the two. Use a **strong master password** (random, high-entropy, stored in your brain) for your password manager, and **unique random passwords** for every other account (stored in the manager).

## Method 1: Use UtilBoxx's Password Generator (Recommended)

The fastest, most private, and most flexible way to generate passwords in your browser is the [UtilBoxx Password Generator](/en/tools/dev/password). It supports custom length, character classes (uppercase, lowercase, digits, symbols), and a pronounceable mode for memorable passwords. Everything runs in your browser using \`crypto.getRandomValues\` — cryptographically secure, no upload, no log.

**How to use it:**

1. Go to [utilboxx.com/en/tools/dev/password](/en/tools/dev/password)
2. Choose the password length (12, 16, 20, 32, 64 are common)
3. Toggle which character classes to include
4. Click Generate
5. Copy the result

**For pronounceable passwords:**

1. Toggle the "Pronounceable" option
2. The generator produces syllable-based passwords like \`vahkibozu\` or \`fremo-jady\`
3. These are easier to type from memory but slightly less random

**Why we recommend this method:**

- **100% free**, no signup, no email, no ads
- **Privacy-first**: passwords are generated in your browser. They never leave your device.
- **Cryptographically secure**: uses \`crypto.getRandomValues\`, the browser's CSPRNG
- **Customizable**: length, character classes, pronounceable mode
- **Works on any device** with a browser

Bookmark this tool — you will use it every time you sign up for a new service.

## Method 2: Password managers (1Password, Bitwarden)

A **password manager** is software that generates, stores, and autofills strong passwords. You only need to remember one strong master password; the manager handles everything else.

The two most popular options:

- **1Password** (paid, ~$3/month): Polished apps for every platform, excellent security track record, family plans, secret sharing.
- **Bitwarden** (free for individuals, $10/year for premium): Open source, end-to-end encrypted, available on every platform, supports self-hosting.

Both:

- Generate strong random passwords on demand
- Auto-fill them in browsers and apps
- Sync across all your devices
- Alert you to breached or reused passwords
- Support passkeys, 2FA, and secure notes

A password manager is the single biggest security upgrade you can make. If you only adopt one tool from this guide, make it a password manager.

## Method 3: CLI with openssl or pwgen

The Unix \`openssl\` and \`pwgen\` utilities are quick, scriptable ways to generate passwords from a terminal.

\`\`\`bash
# Generate a 24-character base64 password
openssl rand -base64 24
# kPq3M9zT8sB1eF7gH5jL0nR2w==

# Generate a 32-character hex password
openssl rand -hex 32
# 7a4f8b2c1d9e3f5a6b8c0d2e4f6a8b0c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3

# 16 random alphanumeric characters
LC_ALL=C tr -dc 'A-Za-z0-9' </dev/urandom | head -c 16
# kP3mN9bT7sB1eF5g

# Using pwgen (if installed)
pwgen -s 20 1
# 8Hk3jP9mN2qB5vR7wL4t

pwgen 16 1
# aezohCai9Iesohph
\`\`\`

\`openssl rand\` is the most secure option (uses OpenSSL's CSPRNG). \`/dev/urandom\` is the kernel's CSPRNG, also fine. \`pwgen\` is convenient but its default mode generates pronounceable passwords that are slightly less random.

## Method 4: The diceware method (offline, no computer needed)

If you want a strong password without trusting any software, the **Diceware** method is the gold standard. It uses physical dice to generate truly random passphrases.

1. Get a Diceware word list (find one at diceware.com).
2. Roll five dice together. The numbers rolled (e.g., 4-2-6-1-3) correspond to a word in the list (e.g., "siren").
3. Repeat for each word in your passphrase (4-5 words is typical).
4. Join the words with spaces or hyphens.

Example: 5 rolls of 5 dice each → "siren-vivid-arcade-bulb-quest". 5 words × 12.9 bits of entropy per word = **64.5 bits** of entropy, well above the minimum for a strong password.

The advantage: zero software, zero trust. You can verify the entropy yourself, by hand. The disadvantage: slow (a few minutes per passphrase) and not practical for the hundreds of passwords a typical person needs.

## Common questions

### How long should my password be?

In 2026, **at least 16 characters** for any important account. 20+ is better. The longer, the stronger — and length matters more than character variety. A 20-character lowercase-only password (log2(26^20) = 94 bits) is stronger than an 8-character mixed-case-with-symbols password (log2(94^8) = 52 bits).

For master passwords and high-value accounts, aim for 20+ characters.

### Should I use special characters in my password?

Yes, when the service allows them. Special characters increase the character pool, which directly increases entropy. But length matters more — a 20-character all-lowercase password is stronger than a 12-character mixed-everything password.

A 16-character password with uppercase, lowercase, digits, and symbols: log2(94^16) ≈ 105 bits of entropy. The same length with only lowercase: log2(26^16) ≈ 75 bits. Both are strong, but the former is dramatically stronger.

### Are passphrases better than passwords?

A 5-word Diceware passphrase has ~65 bits of entropy, similar to a 12-character random password (~70 bits). For passwords you need to type from memory regularly, passphrases are easier. For passwords stored in a manager, random is fine.

The trade-off: passphrases are easier to remember but take longer to type, and some services have length limits (e.g., 16 characters) that exclude long passphrases.

### Is "P@ssw0rd1!" a strong password?

No. Common substitutions (\`@\` for \`a\`, \`0\` for \`o\`, \`!\` for \`i\`) are well-known to attackers and included in every password cracking dictionary. Modern cracking rules generate millions of such variants per second. "P@ssw0rd1!" is cracked in well under a second.

The same applies to keyboard patterns (\`qwerty123\`, \`asdf1234\`) and number-suffix additions (\`password1\`, \`password123\`).

### Should I change my passwords regularly?

The old advice was "change every 90 days". NIST now recommends **against mandatory periodic password changes**, because they encourage users to choose weaker passwords (they cycle through predictable patterns like \`Spring2024!\` → \`Summer2024!\` → \`Fall2024!\`).

Change your password when:

- A service you use announces a breach
- You accidentally enter it on a phishing site
- You share it with someone who shouldn't have it
- It's a credential on a device you lost

Otherwise, a strong, unique password can last indefinitely.

### What is the best password manager?

There is no single "best" — the best is the one you will use. Among the popular options:

- **1Password**: Best UX, family plans, paid
- **Bitwarden**: Best free option, open source, self-hostable
- **Apple iCloud Keychain**: Built into macOS/iOS, free for Apple users
- **Google Password Manager**: Built into Chrome and Android, free
- **Firefox Lockwise**: Built into Firefox, free
- **KeePass / KeePassXC**: Local-only, no cloud, free, open source

Each has trade-offs between convenience, security, and platform support. Pick one and use it consistently.

### What about passkeys?

Passkeys (based on FIDO2/WebAuthn) are the future: they replace passwords with cryptographic key pairs that cannot be phished. Major platforms (Apple, Google, Microsoft) support them, and an increasing number of services accept them.

But passkeys are not yet universal, and most accounts still need a password as a fallback. Use passkeys where available, but still maintain a strong master password for your password manager.

## Conclusion

Strong passwords are the foundation of personal cybersecurity in 2026. A 16+ character random password, generated cryptographically and stored in a password manager, is the gold standard. Passphrases are a great alternative for passwords you need to remember from memory. Password reuse is the single biggest risk to avoid.

The minimum viable setup:

1. Install a password manager (1Password, Bitwarden, or your OS's built-in option)
2. Set a strong master password (16+ characters, random, or a 5-word Diceware passphrase)
3. Enable 2FA on your password manager and critical accounts
4. Generate a new random password for every site you sign up for
5. Audit existing passwords and replace any that are reused or weak

For occasional one-off password generation, the [UtilBoxx Password Generator](/en/tools/dev/password) is private, free, and runs entirely in your browser using cryptographically secure randomness. Pair it with a password manager and you have 95% of the security you need.

The remaining 5% is passkeys, hardware security keys, and good operational security. But get the basics right first.`;

const strongPasswordsZh = `## 为什么密码在 2026 年仍然重要

我们已深入到 passkey 时代，但密码仍然是最常见的互联网身份验证凭证。大多数在线账户 —— 电子邮件、银行、社交媒体、工作工具、流媒体服务 —— 仍然依赖用户名和密码作为主要或备用身份验证方法。即使生物识别或 passkey 可用，一个强的主密码保护着管理其他一切的密码管理器。

弱密码是攻击者最容易利用的东西之一。**暴力破解**工具可以对被盗的密码哈希每秒测试数十亿个猜测。**撞库**重用在一次泄露中泄露的密码来入侵不相关服务的账户。**钓鱼**诱骗用户在伪造的登录页面上输入密码。对所有这些的防御始于为每个账户设置一个强、唯一的密码。

本指南涵盖如何生成强密码、可以使用的不同字符类别、如何让它们容易记忆，以及如何使用密码管理器来组织它们。

## 什么使密码强？

密码的强度以**熵比特**来衡量。每比特的熵使攻击者必须做的工作翻倍。公式：

\`\`\`
entropy = log2(character_pool^length)
\`\`\`

其中 \`character_pool\` 是可用不同字符的数量，\`length\` 是密码长度。

要在 2026 年被认为是强密码：

- **至少 16 个字符**长（更长总是更好）
- **混合字符类别**：大写、小写、数字和符号
- **随机或伪随机**生成（不是字典词、姓名或常见短语）
- **每个服务唯一**（不要在站点之间重复使用密码）

一个使用全部 4 个字符类别的 16 字符随机密码约有 **95 比特熵** —— 足以抵抗数十年的暴力破解，即使有被盗的哈希和最快的硬件。

要避免的常见弱模式：

- **字典词**："password"、"sunshine"、"football"
- **姓名、生日、纪念日**："John1990"、"Maggie2010"
- **常见替换**："P@ssw0rd" —— 看起来随机，但在每个攻击者的字典中
- **重复使用的密码**："MyDog2020!" 在 14 个不同站点使用
- **顺序或重复字符**："12345678"、"aaaaaaaa"

## 字符类别

四个字符类别及其典型池大小：

| 类别       | 示例                          | 池大小 |
|-----------|------------------------------|--------|
| 小写       | a–z                          | 26      |
| 大写       | A–Z                          | 26      |
| 数字       | 0–9                          | 10      |
| 符号       | !@#$%^&*()_-+={}[]\|:;"'<>,.?/ | 32      |
| **总计**   |                              | **94**  |

使用所有四个类别的密码在每个位置有 94 个可能字符。来自此池的 16 字符密码：**94^16 ≈ 3.7 × 10^31** 种可能性，约 105 比特熵。

某些服务限制它们接受的符号集（例如只有 \`!@#$%\`）。一个常见的解决方法：避免最有问题的字符（\`/\`、\`\\\`、引号、反引号），坚持使用更简单的子集。

## 易记 vs 随机

创建强密码有两种主要方法：

### 随机（最高强度，最低可记忆性）

像 \`aB7#kP2&mN9$qR3!\` 这样的纯随机密码具有最大熵但基本上不可能记住。将它们用于存储在密码管理器中的账户 —— 你只需要记住一个主密码。

### 易记密码短语（良好强度，易于记忆）

**密码短语**是几个随机单词连接在一起：\`correct-horse-battery-staple\`。经典的 XKCD 例子。从 7,776 词的列表（Diceware 词表）中选 4 个随机词，熵约为 **51 比特** —— 抵抗在线攻击的强度强，易于记忆，易于输入。

密码短语的强度来自每个单词的熵，而不是长度。添加一个符号和一个数字（例如 \`correct-horse-battery-staple-7!\`）将熵提高到约 57 比特。

最佳实践：结合两者。使用**强主密码**（随机、高熵、存储在你脑中）作为密码管理器，使用**唯一随机密码**作为每个其他账户（存储在管理器中）。

## 方法一：使用 UtilBoxx 密码生成器（推荐）

在你的浏览器中生成密码最快、最私密、最灵活的方式是 [UtilBoxx 密码生成器](/zh/tools/dev/password)。它支持自定义长度、字符类别（大写、小写、数字、符号）以及可发音模式以获得易记的密码。一切都使用 \`crypto.getRandomValues\` 在你的浏览器中运行 —— 加密学上安全，无上传，无日志。

**使用方法：**

1. 打开 [utilboxx.com/zh/tools/dev/password](/zh/tools/dev/password)
2. 选择密码长度（12、16、20、32、64 是常见的）
3. 切换要包含的字符类别
4. 点击"生成"
5. 复制结果

**对于可发音的密码：**

1. 切换"可发音"选项
2. 生成器产生基于音节的密码，如 \`vahkibozu\` 或 \`fremo-jady\`
3. 这些更容易从记忆中输入，但随机性略低

**为什么推荐这个方法：**

- **100% 免费**，无注册、无邮箱、无广告
- **隐私优先**：密码在浏览器中生成，永远不离开你的设备
- **加密学上安全**：使用 \`crypto.getRandomValues\`，浏览器的 CSPRNG
- **可定制**：长度、字符类别、可发音模式
- **任何有浏览器的设备都能用**

把这个工具加入书签 —— 你每次注册新服务时都会用到它。

## 方法二：密码管理器（1Password、Bitwarden）

**密码管理器**是生成、存储和自动填充强密码的软件。你只需要记住一个强主密码；管理器处理其他一切。

两个最受欢迎的选项：

- **1Password**（付费，约 $3/月）：每个平台都有精致的应用，优秀的安全记录，家庭计划，秘密共享。
- **Bitwarden**（个人免费，高级版 $10/年）：开源，端到端加密，每个平台都可用，支持自托管。

两者都：

- 按需生成强随机密码
- 在浏览器和应用中自动填充
- 在所有设备之间同步
- 提醒你泄露或重复使用的密码
- 支持 passkey、2FA 和安全备注

密码管理器是你可以做的最大的安全升级。如果你从这个指南中只采用一个工具，就让它成为密码管理器。

## 方法三：命令行 openssl 或 pwgen

Unix 的 \`openssl\` 和 \`pwgen\` 实用程序是从终端快速、可脚本化生成密码的方法。

\`\`\`bash
# 生成 24 字符的 base64 密码
openssl rand -base64 24
# kPq3M9zT8sB1eF7gH5jL0nR2w==

# 生成 32 字符的十六进制密码
openssl rand -hex 32
# 7a4f8b2c1d9e3f5a6b8c0d2e4f6a8b0c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3

# 16 个随机字母数字字符
LC_ALL=C tr -dc 'A-Za-z0-9' </dev/urandom | head -c 16
# kP3mN9bT7sB1eF5g

# 使用 pwgen（如果已安装）
pwgen -s 20 1
# 8Hk3jP9mN2qB5vR7wL4t

pwgen 16 1
# aezohCai9Iesohph
\`\`\`

\`openssl rand\` 是最安全的选项（使用 OpenSSL 的 CSPRNG）。\`/dev/urandom\` 是内核的 CSPRNG，也很好。\`pwgen\` 很方便，但其默认模式生成可发音的密码，随机性略低。

## 方法四：Diceware 方法（离线，不需要计算机）

如果你想在不信任任何软件的情况下获得强密码，**Diceware** 方法是黄金标准。它使用物理骰子来生成真正随机的密码短语。

1. 获取一个 Diceware 词表（在 diceware.com 找到一个）。
2. 一起掷五个骰子。掷出的数字（例如 4-2-6-1-3）对应列表中的一个词（例如 "siren"）。
3. 为你的密码短语中的每个词重复此操作（4-5 个词是典型的）。
4. 用空格或连字符将单词连接起来。

示例：5 次掷 5 个骰子 → "siren-vivid-arcade-bulb-quest"。5 个词 × 每个词 12.9 比特熵 = **64.5 比特**熵，远高于强密码的最低要求。

优点：零软件，零信任。你可以自己验证熵，徒手。缺点：慢（每个密码短语几分钟）且对典型人需要的数百个密码不实用。

## 常见问题

### 我的密码应该多长？

在 2026 年，任何重要账户**至少 16 个字符**。20+ 更好。越长越强 —— 长度比字符多样性更重要。一个 20 字符全小写密码（log2(26^20) = 94 比特）比一个 8 字符混合大小写带符号的密码（log2(94^8) = 52 比特）更强。

对于主密码和高价值账户，目标 20+ 字符。

### 我应该在密码中使用特殊字符吗？

是的，当服务允许时。特殊字符增加字符池，直接增加熵。但长度更重要 —— 一个 20 字符全小写密码比一个 12 字符混合各种字符的密码更强。

一个 16 字符的密码使用大写、小写、数字和符号：log2(94^16) ≈ 105 比特熵。相同长度仅小写：log2(26^16) ≈ 75 比特。两者都很强，但前者显著更强。

### 密码短语比密码更好吗？

5 词 Diceware 密码短语有约 65 比特熵，类似于 12 字符随机密码（约 70 比特）。对于你需要定期从记忆中输入的密码，密码短语更容易。对于存储在管理器中的密码，随机就可以。

权衡：密码短语更容易记忆但输入时间更长，某些服务有长度限制（例如 16 字符）排除了长密码短语。

### "P@ssw0rd1!" 是强密码吗？

不是。常见替换（\`@\` 代替 \`a\`，\`0\` 代替 \`o\`，\`!\` 代替 \`i\`）是攻击者熟知的，包含在每个密码破解字典中。现代破解规则每秒生成数百万个这样的变体。"P@ssw0rd1!" 在远不到一秒内被破解。

同样的情况适用于键盘模式（\`qwerty123\`、\`asdf1234\`）和数字后缀添加（\`password1\`、\`password123\`）。

### 我应该定期更改密码吗？

旧建议是"每 90 天更改一次"。NIST 现在**反对强制定期更改密码**，因为它们鼓励用户选择更弱的密码（他们循环使用可预测的模式，如 \`Spring2024!\` → \`Summer2024!\` → \`Fall2024!\`）。

在以下情况下更改你的密码：

- 你使用的服务宣布了泄露
- 你不小心在钓鱼网站上输入了它
- 你与不应该有它的人分享了它
- 它是你丢失的设备上的凭证

否则，一个强的、唯一的密码可以无限期使用。

### 最好的密码管理器是什么？

没有单一的"最好" —— 最好的是你会使用的那一个。在流行的选项中：

- **1Password**：最佳 UX，家庭计划，付费
- **Bitwarden**：最佳免费选项，开源，可自托管
- **Apple iCloud Keychain**：内置于 macOS/iOS，Apple 用户免费
- **Google Password Manager**：内置于 Chrome 和 Android，免费
- **Firefox Lockwise**：内置于 Firefox，免费
- **KeePass / KeePassXC**：仅本地，无云，免费，开源

每个在便利性、安全性和平台支持之间都有权衡。选择一个并一致使用。

### Passkey 呢？

Passkey（基于 FIDO2/WebAuthn）是未来：它们用不能被钓鱼的加密密钥对替换密码。主要平台（Apple、Google、Microsoft）支持它们，越来越多的服务接受它们。

但 passkey 尚未普及，大多数账户仍需要密码作为后备。在可用处使用 passkey，但仍为你的密码管理器维护一个强主密码。

## 结论

强密码是 2026 年个人网络安全的基础。16+ 字符的随机密码、加密学生成并存储在密码管理器中，是黄金标准。密码短语是你需要从记忆中记住的密码的绝佳替代。密码重复使用是要避免的最大风险。

最小可行设置：

1. 安装密码管理器（1Password、Bitwarden 或你操作系统的内置选项）
2. 设置强主密码（16+ 字符，随机，或 5 词 Diceware 密码短语）
3. 在你的密码管理器和关键账户上启用 2FA
4. 为你注册的每个站点生成新的随机密码
5. 审计现有密码并替换任何重复使用或弱的密码

对于偶尔的一次性密码生成，[UtilBoxx 密码生成器](/zh/tools/dev/password) 是私密的、免费的，并使用加密学上安全的随机数完全在你的浏览器中运行。将其与密码管理器配对，你就有 95% 你需要的安全性。

剩下的 5% 是 passkey、硬件安全密钥和良好的操作安全性。但首先要把基础做对。`;

const strongPasswordsJa = `## 2026 年でもパスワードが依然重要な理由

私たちはパスキー時代に深く入っていますが、パスワードはインターネット上で最も一般的な認証資格情報のままです。ほとんどのオンラインアカウント —— メール、銀行、ソーシャルメディア、仕事のツール、ストリーミングサービス —— は依然としてプライマリまたはバックアップの認証方法としてユーザー名とパスワードに依存しています。生体認証やパスキーが利用可能な場合でも、強力なマスターパスワードが他のすべてを保持するマネージャーを保護します。

弱いパスワードは攻撃者が悪用する最も簡単なものの 1 つです。**ブルートフォース**ツールは盗まれたパスワードハッシュに対して 1 秒あたり数十億のパスワード推測をテストできます。**クレデンシャルスタッフィング**は、ある侵害から漏洩したパスワードを再利用して、関連しないサービスのアカウントを侵害します。**フィッシング**はユーザーを騙して偽のログインページにパスワードを入力させます。これらすべてに対する防御は、すべてのアカウントに対して強力でユニークなパスワードを設定することから始まります。

このガイドでは、強力なパスワードの生成方法、使用できる異なる文字クラス、覚えやすくする方法、およびパスワードマネージャーを使って整理する方法について説明します。

## パスワードを強力にするものは何ですか？

パスワードの強度は**エントロピービット**で測定されます。エントロピーの 1 ビットごとに、攻撃者が推測しなければならない作業が 2 倍になります。公式：

\`\`\`
entropy = log2(character_pool^length)
\`\`\`

ここで、\`character_pool\` は利用可能な異なる文字の数、\`length\` はパスワードの長さです。

2026 年に強力と見なされるパスワード：

- **少なくとも 16 文字**の長さ（長いほど常に良い）
- **文字クラスの混在**：大文字、小文字、数字、記号
- **ランダムまたは擬似ランダム**生成（辞書単語、名前、一般的なフレーズではない）
- **サービスごとにユニーク**（サイト間でパスワードを再利用しない）

4 つの文字クラスをすべて使用する 16 文字のランダムパスワードは、約 **95 ビットエントロピー**を持ちます —— 盗まれたハッシュと最速のハードウェアがあっても、数十年はブルートフォースに耐えます。

避けるべき一般的な弱いパターン：

- **辞書単語**：「password」、「sunshine」、「football」
- **名前、誕生日、記念日**：「John1990」、「Maggie2010」
- **一般的な置換**：「P@ssw0rd」 —— ランダムに見えますが、すべての攻撃者の辞書にあります
- **再利用されるパスワード**：14 の異なるサイトで使われる「MyDog2020!」
- **連続または繰り返し文字**：「12345678」、「aaaaaaaa」

## 文字クラス

4 つの文字クラスとその典型的なプールサイズ：

| クラス      | 例                            | プールサイズ |
|------------|------------------------------|------------|
| 小文字      | a–z                          | 26         |
| 大文字      | A–Z                          | 26         |
| 数字        | 0–9                          | 10         |
| 記号        | !@#$%^&*()_-+={}[]\|:;"'<>,.?/ | 32         |
| **合計**    |                              | **94**     |

4 つのクラスをすべて使用するパスワードは、各位置に 94 の可能な文字があります。このプールからの 16 文字のパスワード：**94^16 ≈ 3.7 × 10^31** の可能性、約 105 ビットエントロピー。

一部のサービスは受け入れる記号セットを制限しています（例：\`!@#$%\` のみ）。一般的な回避策：最も問題のある文字（\`/\`、\`\\\`、引用符、バッククォート）を避け、よりシンプルなサブセットを使用します。

## 覚えやすい vs ランダム

強力なパスワードを作成する 2 つの主要なアプローチ：

### ランダム（最高の強度、最低の記憶可能性）

\`aB7#kP2&mN9$qR3!\` のような純粋にランダムなパスワードは最大エントロピーを持っていますが、本質的に記憶できません。パスワードマネージャーに保存するアカウントに使用してください —— 覚えておく必要があるのは 1 つのマスターパスワードだけです。

### 覚えやすいパスフレーズ（良好な強度、覚えやすい）

**パスフレーズ**は、いくつかのランダムな単語をつなげたものです：\`correct-horse-battery-staple\`。古典的な XKCD の例。7,776 語のリスト（Diceware 単語リスト）から 4 つのランダムな単語を選ぶと、エントロピーは約 **51 ビット** —— オンライン攻撃に対して強く、覚えやすく、入力しやすい。

パスフレーズの強みは、単語ごとのエントロピーから生まれ、長さではありません。記号と数字を追加する（例：\`correct-horse-battery-staple-7!\`）と、エントロピーは約 57 ビットに増加します。

ベストプラクティス：両方を組み合わせる。**強力なマスターパスワード**（ランダム、高エントロピー、頭に保存）をパスワードマネージャーに使用し、**ユニークなランダムパスワード**を他のすべてのアカウントに使用します（マネージャーに保存）。

## 方法 1：UtilBoxx パスワード生成器（推奨）

ブラウザでパスワードを生成する最も速く、最もプライベートで、最も柔軟な方法は [UtilBoxx パスワード生成器](/ja/tools/dev/password) です。カスタム長さ、文字クラス（大文字、小文字、数字、記号）、および覚えやすいパスワードのための発音可能モードをサポートします。すべて \`crypto.getRandomValues\` を使用してブラウザで実行されます —— 暗号学的に安全、アップロードなし、ログなし。

**使い方：**

1. [utilboxx.com/ja/tools/dev/password](/ja/tools/dev/password) を開く
2. パスワードの長さを選択（12、16、20、32、64 が一般的）
3. 含める文字クラスを切り替え
4. 生成をクリック
5. 結果をコピー

**発音可能なパスワードの場合：**

1. 「発音可能」オプションを切り替え
2. 生成器は \`vahkibozu\` や \`fremo-jady\` のような音節ベースのパスワードを生成します
3. これらは記憶から入力しやすいですが、ランダム性はわずかに低くなります

**この方法を推奨する理由：**

- **100% 無料**、登録不要、メールアドレス不要、広告なし
- **プライバシー最優先**：パスワードはブラウザで生成され、デバイスを離れません
- **暗号学的に安全**：ブラウザの CSPRNG である \`crypto.getRandomValues\` を使用
- **カスタマイズ可能**：長さ、文字クラス、発音可能モード
- **ブラウザがあるあらゆるデバイスで動作**

このツールをブックマークしてください —— 新しいサービスに登録するたびに使用します。

## 方法 2：パスワードマネージャー（1Password、Bitwarden）

**パスワードマネージャー**は、強力なパスワードを生成、保存、自動入力するソフトウェアです。覚えておく必要があるのは 1 つの強力なマスターパスワードだけです。マネージャーが他のすべてを処理します。

最も人気のある 2 つのオプション：

- **1Password**（有料、約 $3/月）：すべてのプラットフォームに洗練されたアプリ、優れたセキュリティ実績、家族プラン、シークレット共有。
- **Bitwarden**（個人無料、プレミアム $10/年）：オープンソース、エンドツーエンド暗号化、すべてのプラットフォームで利用可能、セルフホスト対応。

両者とも：

- オンデマンドで強力なランダムパスワードを生成
- ブラウザとアプリで自動入力
- すべてのデバイス間で同期
- 侵害または再利用されたパスワードを警告
- パスキー、2FA、安全なメモをサポート

パスワードマネージャーは、あなたができる最大のセキュリティアップグレードです。このガイドから 1 つだけ採用するなら、パスワードマネージャーにしてください。

## 方法 3：CLI で openssl または pwgen

Unix の \`openssl\` および \`pwgen\` ユーティリティは、ターミナルからパスワードを迅速かつスクリプト可能な方法で生成します。

\`\`\`bash
# 24 文字の base64 パスワードを生成
openssl rand -base64 24
# kPq3M9zT8sB1eF7gH5jL0nR2w==

# 32 文字の 16 進パスワードを生成
openssl rand -hex 32
# 7a4f8b2c1d9e3f5a6b8c0d2e4f6a8b0c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3

# 16 個のランダムな英数字
LC_ALL=C tr -dc 'A-Za-z0-9' </dev/urandom | head -c 16
# kP3mN9bT7sB1eF5g

# pwgen を使用（インストールされている場合）
pwgen -s 20 1
# 8Hk3jP9mN2qB5vR7wL4t

pwgen 16 1
# aezohCai9Iesohph
\`\`\`

\`openssl rand\` が最も安全なオプションです（OpenSSL の CSPRNG を使用）。\`/dev/urandom\` はカーネルの CSPRNG で、これも問題ありません。\`pwgen\` は便利ですが、デフォルトモードは発音可能なパスワードを生成し、ランダム性はわずかに低くなります。

## 方法 4：Diceware 法（オフライン、コンピュータ不要）

ソフトウェアを信頼せずに強力なパスワードが必要な場合、**Diceware** 法がゴールドスタンダードです。物理的なサイコロを使用して真にランダムなパスフレーズを生成します。

1. Diceware 単語リストを入手します（diceware.com で見つかります）。
2. 5 つのサイコロを一緒に振ります。出た数字（例：4-2-6-1-3）に対応するリストの単語（例：「siren」）。
3. パスフレーズの各単語について繰り返します（4-5 単語が典型的）。
4. 単語をスペースまたはハイフンで結合します。

例：5 つのサイコロを 5 回振る → "siren-vivid-arcade-bulb-quest"。5 単語 × 1 単語あたり 12.9 ビットエントロピー = **64.5 ビット**エントロピー、強力なパスワードの最小要件をはるかに上回ります。

利点：ソフトウェアゼロ、信頼ゼロ。エントロピーを手で自分で検証できます。欠点：遅い（パスフレーズごとに数分）、典型的な人が必要とする数百のパスワードには実用的ではありません。

## よくある質問

### パスワードはどれくらいの長さにすべきですか？

2026 年には、重要なアカウントに対して**少なくとも 16 文字**。20+ が望ましいです。長いほど強く、長さは文字の多様性よりも重要です。20 文字のすべて小文字のパスワード（log2(26^20) = 94 ビット）は、8 文字の大文字小文字記号混在のパスワード（log2(94^8) = 52 ビット）よりも強力です。

マスターパスワードと高価値アカウントには、20+ 文字を目指してください。

### パスワードに特殊文字を使用すべきですか？

サービスが許可する場合は、はい。特殊文字は文字プールを増やし、エントロピーを直接増加させます。しかし長さがより重要です —— 20 文字のすべて小文字のパスワードは、12 文字のあらゆる文字が混在するパスワードよりも強力です。

16 文字のパスワードに大文字、小文字、数字、記号を使用：log2(94^16) ≈ 105 ビットエントロピー。同じ長さで小文字のみ：log2(26^16) ≈ 75 ビット。両方とも強力ですが、前者は著しく強力です。

### パスフレーズはパスワードより優れていますか？

5 語の Diceware パスフレーズは約 65 ビットエントロピーを持ち、12 文字のランダムパスワード（約 70 ビット）と同様です。記憶から定期的に入力する必要があるパスワードには、パスフレーズの方が簡単です。マネージャーに保存するパスワードには、ランダムで問題ありません。

トレードオフ：パスフレーズは覚えやすいが入力に時間がかかり、一部のサービスには長いパスフレーズを除外する長さ制限があります（例：16 文字）。

### "P@ssw0rd1!" は強力なパスワードですか？

いいえ。一般的な置換（\`@\` の代わりに \`a\`、\`0\` の代わりに \`o\`、\`!\` の代わりに \`i\`）は攻撃者に知られており、すべてのパスワードクラッキング辞書に含まれています。最新のクラッキングルールは、毎秒数百万のそのようなバリアントを生成します。"P@ssw0rd1!" は 1 秒未満でクラックされます。

同じことはキーボードパターン（\`qwerty123\`、\`asdf1234\`）と数字接尾辞の追加（\`password1\`、\`password123\`）にも当てはまります。

### パスワードを定期的に変更すべきですか？

古いアドバイスは「90 日ごとに変更」でした。NIST は現在、**強制的な定期的なパスワード変更に反対**しています。なぜなら、ユーザーは予測可能なパターンを循環させる（\`Spring2024!\` → \`Summer2024!\` → \`Fall2024!\` など）ことで弱いパスワードを選ぶようになるからです。

次の場合にパスワードを変更してください：

- 使用しているサービスが侵害を発表
- フィッシングサイトで誤って入力した
- 持つべきでない人と共有した
- 紛失したデバイスの認証情報である

それ以外の場合、強力でユニークなパスワードは無期限に使用できます。

### 最高のパスワードマネージャーは何ですか？

単一の「最高」はありません —— 最高はあなたが使用するもの。人気のオプションの中で：

- **1Password**：最高の UX、家族プラン、有料
- **Bitwarden**：最高の無料オプション、オープンソース、セルフホスト可能
- **Apple iCloud Keychain**：macOS/iOS に内蔵、Apple ユーザー無料
- **Google Password Manager**：Chrome と Android に内蔵、無料
- **Firefox Lockwise**：Firefox に内蔵、無料
- **KeePass / KeePassXC**：ローカルのみ、クラウドなし、無料、オープンソース

それぞれに利便性、セキュリティ、プラットフォームサポートのトレードオフがあります。1 つを選び、一貫して使用してください。

### パスキーはどうですか？

パスキー（FIDO2/WebAuthn ベース）は未来です：フィッシングできない暗号鍵ペアでパスワードを置き換えます。主要プラットフォーム（Apple、Google、Microsoft）がサポートしており、ますます多くのサービスが受け入れています。

しかしパスキーはまだ普遍的ではなく、ほとんどのアカウントは依然としてパスワードをフォールバックとして必要としています。利用可能な場所ではパスキーを使用してください、しかしパスワードマネージャーには強力なマスターパスワードを維持してください。

## まとめ

強力なパスワードは 2026 年の個人サイバーセキュリティの基盤です。16 文字以上のランダムパスワード、暗号学的に生成され、パスワードマネージャーに保存されるのがゴールドスタンダードです。パスフレーズは、記憶から覚えておく必要があるパスワードの優れた代替手段です。パスワードの再利用は避けるべき最大のリスクです。

最小限の実行可能なセットアップ：

1. パスワードマネージャーをインストール（1Password、Bitwarden、または OS の組み込みオプション）
2. 強力なマスターパスワードを設定（16+ 文字、ランダム、または 5 語の Diceware パスフレーズ）
3. パスワードマネージャーと重要なアカウントで 2FA を有効化
4. 登録するすべてのサイトに新しいランダムパスワードを生成
5. 既存のパスワードを監査し、再利用されているものや弱いものを置き換え

時折の単発パスワード生成には、[UtilBoxx パスワード生成器](/ja/tools/dev/password) はプライベートで、無料で、暗号学的に安全なランダム性を使って完全にブラウザで実行されます。パスワードマネージャーと組み合わせれば、必要なセキュリティの 95% が得られます。

残りの 5% はパスキー、ハードウェアセキュリティキー、良好な運用セキュリティです。しかしまず基本を正しくやりましょう。`;

const strongPasswordsEs = `## Por qué las contraseñas siguen importando en 2026

Estamos profundamente en la era de las passkeys, pero las contraseñas siguen siendo la credencial de autenticación más común en Internet. La mayoría de las cuentas en línea — correo, banca, redes sociales, herramientas de trabajo, servicios de streaming — todavía dependen de un nombre de usuario y contraseña como método de autenticación principal o de respaldo. Incluso cuando la biometría o las passkeys están disponibles, una contraseña maestra fuerte protege al gestor que guarda todo lo demás.

Una contraseña débil es una de las cosas más fáciles de explotar para un atacante. Las herramientas de **fuerza bruta** pueden probar miles de millones de conjeturas de contraseñas por segundo contra un hash de contraseña robado. El **credential stuffing** reutiliza contraseñas filtradas de una brecha para comprometer cuentas en servicios no relacionados. El **phishing** engaña a los usuarios para que escriban contraseñas en páginas de inicio de sesión falsas. Las defensas contra todo esto empiezan con una contraseña fuerte y única para cada cuenta.

Esta guía cubre cómo generar contraseñas fuertes, las diferentes clases de caracteres que puede usar, cómo hacerlas memorables, y cómo usar un gestor de contraseñas para mantenerlas organizadas.

## ¿Qué hace que una contraseña sea fuerte?

La fuerza de una contraseña se mide en **bits de entropía**. Cada bit de entropía duplica el trabajo que un atacante debe hacer para adivinarla. La fórmula:

\`\`\`
entropy = log2(character_pool^length)
\`\`\`

Donde \`character_pool\` es el número de caracteres distintos disponibles y \`length\` es la longitud de la contraseña.

Para que una contraseña se considere fuerte en 2026:

- **Al menos 16 caracteres** de longitud (más larga siempre es mejor)
- **Mezcla de clases de caracteres**: mayúsculas, minúsculas, dígitos y símbolos
- **Generación aleatoria o pseudoaleatoria** (no una palabra del diccionario, nombre o frase común)
- **Única por servicio** (nunca reutilizar contraseñas entre sitios)

Una contraseña aleatoria de 16 caracteres usando las 4 clases de caracteres tiene aproximadamente **95 bits de entropía** — suficiente para resistir fuerza bruta durante décadas, incluso con un hash robado y el hardware más rápido.

Patrones débiles comunes a evitar:

- **Palabras del diccionario**: "password", "sunshine", "football"
- **Nombres, cumpleaños, aniversarios**: "Juan1990", "Maggie2010"
- **Sustituciones comunes**: "P@ssw0rd" — parece aleatorio, pero está en el diccionario de cada atacante
- **Contraseñas reutilizadas**: "MiPerro2020!" usada en 14 sitios diferentes
- **Caracteres secuenciales o repetidos**: "12345678", "aaaaaaaa"

## Clases de caracteres

Las cuatro clases de caracteres y sus tamaños de pool típicos:

| Clase       | Ejemplos                       | Tamaño de pool |
|-------------|--------------------------------|----------------|
| Minúsculas  | a–z                            | 26             |
| Mayúsculas  | A–Z                            | 26             |
| Dígitos     | 0–9                            | 10             |
| Símbolos    | !@#$%^&*()_-+={}[]\|:;"'<>,.?/ | 32             |
| **Total**   |                                | **94**         |

Una contraseña que usa las cuatro clases tiene 94 caracteres posibles en cada posición. Una contraseña de 16 caracteres de este pool: **94^16 ≈ 3.7 × 10^31** posibilidades, o aproximadamente 105 bits de entropía.

Algunos servicios restringen el conjunto de símbolos que aceptan (por ejemplo, solo \`!@#$%\`). Una solución común: evite los caracteres más problemáticos (\`/\`, \`\\\`, comillas, backticks) y quédese con el subconjunto más simple.

## Memorables vs aleatorias

Hay dos enfoques principales para crear contraseñas fuertes:

### Aleatorias (máxima fuerza, mínima memorabilidad)

Las contraseñas puramente aleatorias como \`aB7#kP2&mN9$qR3!\` tienen entropía máxima pero son esencialmente imposibles de recordar. Úselas para cuentas que viven en un gestor de contraseñas — solo necesita recordar una contraseña maestra.

### Frases de contraseña memorables (buena fuerza, fáciles de recordar)

Una **frase de contraseña** son varias palabras aleatorias unidas: \`correcto-caballo-bateria-grapa\`. El ejemplo clásico de XKCD. Con 4 palabras aleatorias de una lista de 7,776 palabras (la lista de palabras de Diceware), la entropía es de aproximadamente **51 bits** — fuerte contra ataques en línea, fácil de recordar, fácil de escribir.

La fuerza de una frase de contraseña proviene de la entropía por palabra, no de la longitud. Añadir un símbolo y un número (por ejemplo, \`correcto-caballo-bateria-grapa-7!\`) lleva la entropía a ~57 bits.

Mejor práctica: combine ambos. Use una **contraseña maestra fuerte** (aleatoria, alta entropía, almacenada en su cerebro) para su gestor de contraseñas, y **contraseñas aleatorias únicas** para cada otra cuenta (almacenadas en el gestor).

## Método 1: Use el generador de contraseñas de UtilBoxx (Recomendado)

La forma más rápida, privada y flexible de generar contraseñas en su navegador es el [Generador de Contraseñas de UtilBoxx](/es/tools/dev/password). Soporta longitud personalizada, clases de caracteres (mayúsculas, minúsculas, dígitos, símbolos), y un modo pronunciable para contraseñas memorables. Todo se ejecuta en su navegador usando \`crypto.getRandomValues\` — criptográficamente seguro, sin carga, sin log.

**Cómo usarlo:**

1. Vaya a [utilboxx.com/es/tools/dev/password](/es/tools/dev/password)
2. Elija la longitud de la contraseña (12, 16, 20, 32, 64 son comunes)
3. Active qué clases de caracteres incluir
4. Haga clic en Generar
5. Copie el resultado

**Para contraseñas pronunciables:**

1. Active la opción "Pronunciable"
2. El generador produce contraseñas basadas en sílabas como \`vahkibozu\` o \`fremo-jady\`
3. Son más fáciles de escribir de memoria pero ligeramente menos aleatorias

**Por qué recomendamos este método:**

- **100 % gratis**, sin registro, sin email, sin anuncios
- **Privacidad primero**: las contraseñas se generan en su navegador. Nunca salen de su dispositivo.
- **Criptográficamente seguro**: usa \`crypto.getRandomValues\`, el CSPRNG del navegador
- **Personalizable**: longitud, clases de caracteres, modo pronunciable
- **Funciona en cualquier dispositivo** con navegador

Marque esta herramienta como favorita — la usará cada vez que se registre en un nuevo servicio.

## Método 2: Gestores de contraseñas (1Password, Bitwarden)

Un **gestor de contraseñas** es un software que genera, almacena y autocompleta contraseñas fuertes. Solo necesita recordar una contraseña maestra fuerte; el gestor se encarga de todo lo demás.

Las dos opciones más populares:

- **1Password** (de pago, ~$3/mes): Aplicaciones pulidas para cada plataforma, excelente historial de seguridad, planes familiares, compartición de secretos.
- **Bitwarden** (gratis para individuos, $10/año para premium): Código abierto, cifrado de extremo a extremo, disponible en cada plataforma, admite auto-hospedaje.

Ambos:

- Generan contraseñas aleatorias fuertes bajo demanda
- Las autocompletan en navegadores y apps
- Sincronizan entre todos sus dispositivos
- Le alertan sobre contraseñas filtradas o reutilizadas
- Admiten passkeys, 2FA y notas seguras

Un gestor de contraseñas es la mayor mejora de seguridad que puede hacer. Si solo adopta una herramienta de esta guía, que sea un gestor de contraseñas.

## Método 3: CLI con openssl o pwgen

Las utilidades Unix \`openssl\` y \`pwgen\` son formas rápidas y scriptables de generar contraseñas desde un terminal.

\`\`\`bash
# Generar una contraseña base64 de 24 caracteres
openssl rand -base64 24
# kPq3M9zT8sB1eF7gH5jL0nR2w==

# Generar una contraseña hexadecimal de 32 caracteres
openssl rand -hex 32
# 7a4f8b2c1d9e3f5a6b8c0d2e4f6a8b0c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3

# 16 caracteres alfanuméricos aleatorios
LC_ALL=C tr -dc 'A-Za-z0-9' </dev/urandom | head -c 16
# kP3mN9bT7sB1eF5g

# Usando pwgen (si está instalado)
pwgen -s 20 1
# 8Hk3jP9mN2qB5vR7wL4t

pwgen 16 1
# aezohCai9Iesohph
\`\`\`

\`openssl rand\` es la opción más segura (usa el CSPRNG de OpenSSL). \`/dev/urandom\` es el CSPRNG del kernel, también está bien. \`pwgen\` es conveniente pero su modo por defecto genera contraseñas pronunciables que son ligeramente menos aleatorias.

## Método 4: El método diceware (sin conexión, sin computadora)

Si desea una contraseña fuerte sin confiar en ningún software, el método **Diceware** es el estándar de oro. Usa dados físicos para generar frases de contraseña verdaderamente aleatorias.

1. Obtenga una lista de palabras de Diceware (encuentre una en diceware.com).
2. Tire cinco dados juntos. Los números obtenidos (por ejemplo, 4-2-6-1-3) corresponden a una palabra en la lista (por ejemplo, "siren").
3. Repita para cada palabra en su frase de contraseña (4-5 palabras es típico).
4. Una las palabras con espacios o guiones.

Ejemplo: 5 tiradas de 5 dados cada una → "siren-vivid-arcade-bulb-quest". 5 palabras × 12.9 bits de entropía por palabra = **64.5 bits** de entropía, muy por encima del mínimo para una contraseña fuerte.

La ventaja: cero software, cero confianza. Puede verificar la entropía usted mismo, a mano. La desventaja: lento (unos minutos por frase de contraseña) y no práctico para los cientos de contraseñas que una persona típica necesita.

## Preguntas frecuentes

### ¿Qué longitud debe tener mi contraseña?

En 2026, **al menos 16 caracteres** para cualquier cuenta importante. 20+ es mejor. Cuanto más larga, más fuerte — y la longitud importa más que la variedad de caracteres. Una contraseña de 20 caracteres solo en minúsculas (log2(26^20) = 94 bits) es más fuerte que una contraseña de 8 caracteres con mayúsculas, minúsculas y símbolos (log2(94^8) = 52 bits).

Para contraseñas maestras y cuentas de alto valor, apunte a 20+ caracteres.

### ¿Debo usar caracteres especiales en mi contraseña?

Sí, cuando el servicio lo permita. Los caracteres especiales aumentan el pool de caracteres, lo que aumenta directamente la entropía. Pero la longitud importa más — una contraseña de 20 caracteres solo en minúsculas es más fuerte que una contraseña de 12 caracteres con todo mezclado.

Una contraseña de 16 caracteres con mayúsculas, minúsculas, dígitos y símbolos: log2(94^16) ≈ 105 bits de entropía. La misma longitud solo con minúsculas: log2(26^16) ≈ 75 bits. Ambas son fuertes, pero la primera es dramáticamente más fuerte.

### ¿Son las frases de contraseña mejores que las contraseñas?

Una frase de contraseña Diceware de 5 palabras tiene ~65 bits de entropía, similar a una contraseña aleatoria de 12 caracteres (~70 bits). Para contraseñas que necesita escribir de memoria regularmente, las frases de contraseña son más fáciles. Para contraseñas almacenadas en un gestor, aleatorias está bien.

El compromiso: las frases de contraseña son más fáciles de recordar pero tardan más en escribir, y algunos servicios tienen límites de longitud (por ejemplo, 16 caracteres) que excluyen frases de contraseña largas.

### ¿Es "P@ssw0rd1!" una contraseña fuerte?

No. Las sustituciones comunes (\`@\` por \`a\`, \`0\` por \`o\`, \`!\` por \`i\`) son bien conocidas por los atacantes e incluidas en cada diccionario de cracking de contraseñas. Las reglas modernas de cracking generan millones de tales variantes por segundo. "P@ssw0rd1!" se craquea en mucho menos de un segundo.

Lo mismo se aplica a patrones de teclado (\`qwerty123\`, \`asdf1234\`) y adiciones de números al final (\`password1\`, \`password123\`).

### ¿Debo cambiar mis contraseñas regularmente?

El consejo antiguo era "cambiar cada 90 días". NIST ahora recomienda **no hacer cambios periódicos obligatorios de contraseñas**, porque animan a los usuarios a elegir contraseñas más débiles (ciclan a través de patrones predecibles como \`Primavera2024!\` → \`Verano2024!\` → \`Otoño2024!\`).

Cambie su contraseña cuando:

- Un servicio que usa anuncia una brecha
- Accidentalmente la ingresa en un sitio de phishing
- La comparte con alguien que no debería tenerla
- Es una credencial en un dispositivo que perdió

De lo contrario, una contraseña fuerte y única puede durar indefinidamente.

### ¿Cuál es el mejor gestor de contraseñas?

No hay un solo "mejor" — el mejor es el que usará. Entre las opciones populares:

- **1Password**: Mejor UX, planes familiares, de pago
- **Bitwarden**: Mejor opción gratuita, código abierto, auto-hospedable
- **Apple iCloud Keychain**: Integrado en macOS/iOS, gratis para usuarios de Apple
- **Google Password Manager**: Integrado en Chrome y Android, gratis
- **Firefox Lockwise**: Integrado en Firefox, gratis
- **KeePass / KeePassXC**: Solo local, sin nube, gratis, código abierto

Cada una tiene compromisos entre conveniencia, seguridad y soporte de plataformas. Elija una y úsela consistentemente.

### ¿Qué hay de las passkeys?

Las passkeys (basadas en FIDO2/WebAuthn) son el futuro: reemplazan las contraseñas con pares de claves criptográficas que no pueden ser objeto de phishing. Las principales plataformas (Apple, Google, Microsoft) las admiten, y un número creciente de servicios las acepta.

Pero las passkeys aún no son universales, y la mayoría de las cuentas aún necesitan una contraseña como respaldo. Use passkeys donde estén disponibles, pero mantenga una contraseña maestra fuerte para su gestor de contraseñas.

## Conclusión

Las contraseñas fuertes son la base de la ciberseguridad personal en 2026. Una contraseña aleatoria de 16+ caracteres, generada criptográficamente y almacenada en un gestor de contraseñas, es el estándar de oro. Las frases de contraseña son una excelente alternativa para contraseñas que necesita recordar de memoria. La reutilización de contraseñas es el mayor riesgo a evitar.

La configuración mínima viable:

1. Instale un gestor de contraseñas (1Password, Bitwarden, o la opción integrada en su SO)
2. Establezca una contraseña maestra fuerte (16+ caracteres, aleatoria, o una frase Diceware de 5 palabras)
3. Habilite 2FA en su gestor de contraseñas y cuentas críticas
4. Genere una nueva contraseña aleatoria para cada sitio en el que se registre
5. Audite las contraseñas existentes y reemplace las que estén reutilizadas o sean débiles

Para generación ocasional de contraseñas únicas, el [Generador de Contraseñas de UtilBoxx](/es/tools/dev/password) es privado, gratis, y se ejecuta completamente en su navegador usando aleatoriedad criptográficamente segura. Combínelo con un gestor de contraseñas y tendrá el 95 % de la seguridad que necesita.

El 5 % restante son passkeys, claves de seguridad de hardware y buena seguridad operativa. Pero primero haga bien lo básico.`;

const strongPasswordsPt = `## Por que as senhas ainda importam em 2026

Estamos profundamente na era das passkeys, mas as senhas continuam sendo a credencial de autenticação mais comum na internet. A maioria das contas online — email, banco, redes sociais, ferramentas de trabalho, serviços de streaming — ainda depende de um nome de usuário e senha como método primário ou de backup de autenticação. Mesmo quando biometria ou passkeys estão disponíveis, uma senha mestra forte protege o gerenciador que guarda todo o resto.

Uma senha fraca é uma das coisas mais fáceis para um atacante explorar. Ferramentas de **força bruta** podem testar bilhões de palpites de senha por segundo contra um hash de senha roubado. **Credential stuffing** reutiliza senhas vazadas de uma violação para comprometer contas em serviços não relacionados. **Phishing** engana usuários para que digitem senhas em páginas de login falsas. As defesas contra tudo isso começam com uma senha forte e única para cada conta.

Este guia cobre como gerar senhas fortes, as diferentes classes de caracteres que você pode usar, como torná-las memoráveis, e como usar um gerenciador de senhas para mantê-las organizadas.

## O que torna uma senha forte?

A força de uma senha é medida em **bits de entropia**. Cada bit de entropia dobra o trabalho que um atacante deve fazer para adivinhá-la. A fórmula:

\`\`\`
entropy = log2(character_pool^length)
\`\`\`

Onde \`character_pool\` é o número de caracteres distintos disponíveis e \`length\` é o comprimento da senha.

Para que uma senha seja considerada forte em 2026:

- **Pelo menos 16 caracteres** de comprimento (mais longa é sempre melhor)
- **Mistura de classes de caracteres**: maiúsculas, minúsculas, dígitos e símbolos
- **Geração aleatória ou pseudoaleatória** (não uma palavra de dicionário, nome ou frase comum)
- **Única por serviço** (nunca reutilize senhas entre sites)

Uma senha aleatória de 16 caracteres usando todas as 4 classes de caracteres tem aproximadamente **95 bits de entropia** — suficiente para resistir força bruta por décadas, mesmo com um hash roubado e o hardware mais rápido.

Padrões fracos comuns a evitar:

- **Palavras de dicionário**: "password", "sunshine", "football"
- **Nomes, aniversários**: "Joao1990", "Maggie2010"
- **Substituições comuns**: "P@ssw0rd" — parece aleatório, mas está no dicionário de todo atacante
- **Senhas reutilizadas**: "MeuCachorro2020!" usada em 14 sites diferentes
- **Caracteres sequenciais ou repetidos**: "12345678", "aaaaaaaa"

## Classes de caracteres

As quatro classes de caracteres e seus tamanhos de pool típicos:

| Classe      | Exemplos                       | Tamanho do pool |
|-------------|--------------------------------|-----------------|
| Minúsculas  | a–z                            | 26              |
| Maiúsculas  | A–Z                            | 26              |
| Dígitos     | 0–9                            | 10              |
| Símbolos    | !@#$%^&*()_-+={}[]\|:;"'<>,.?/ | 32              |
| **Total**   |                                | **94**          |

Uma senha que usa as quatro classes tem 94 caracteres possíveis em cada posição. Uma senha de 16 caracteres deste pool: **94^16 ≈ 3.7 × 10^31** possibilidades, ou aproximadamente 105 bits de entropia.

Alguns serviços restringem o conjunto de símbolos que aceitam (por exemplo, apenas \`!@#$%\`). Uma solução comum: evite os caracteres mais problemáticos (\`/\`, \`\\\`, aspas, crases) e fique com o subconjunto mais simples.

## Memoráveis vs aleatórias

Existem duas abordagens principais para criar senhas fortes:

### Aleatórias (força máxima, memorabilidade mínima)

Senhas puramente aleatórias como \`aB7#kP2&mN9$qR3!\` têm entropia máxima, mas são essencialmente impossíveis de lembrar. Use-as para contas que vivem em um gerenciador de senhas — você só precisa lembrar de uma senha mestra.

### Frases de senha memoráveis (boa força, fáceis de lembrar)

Uma **frase de senha** são várias palavras aleatórias unidas: \`cavalo-correto-bateria-grampo\`. O exemplo clássico do XKCD. Com 4 palavras aleatórias de uma lista de 7.776 palavras (a lista de palavras Diceware), a entropia é de aproximadamente **51 bits** — forte contra ataques online, fácil de lembrar, fácil de digitar.

A força de uma frase de senha vem da entropia por palavra, não do comprimento. Adicionar um símbolo e um número (por exemplo, \`cavalo-correto-bateria-grampo-7!\`) leva a entropia a ~57 bits.

Melhor prática: combine ambos. Use uma **senha mestra forte** (aleatória, alta entropia, armazenada no seu cérebro) para seu gerenciador de senhas, e **senhas aleatórias únicas** para cada outra conta (armazenadas no gerenciador).

## Método 1: Use o gerador de senhas do UtilBoxx (Recomendado)

A maneira mais rápida, privada e flexível de gerar senhas no seu navegador é o [Gerador de Senhas do UtilBoxx](/pt/tools/dev/password). Suporta comprimento personalizado, classes de caracteres (maiúsculas, minúsculas, dígitos, símbolos) e um modo pronunciável para senhas memoráveis. Tudo roda no seu navegador usando \`crypto.getRandomValues\` — criptograficamente seguro, sem upload, sem log.

**Como usar:**

1. Acesse [utilboxx.com/pt/tools/dev/password](/pt/tools/dev/password)
2. Escolha o comprimento da senha (12, 16, 20, 32, 64 são comuns)
3. Alterne quais classes de caracteres incluir
4. Clique em Gerar
5. Copie o resultado

**Para senhas pronunciáveis:**

1. Ative a opção "Pronunciável"
2. O gerador produz senhas baseadas em sílabas como \`vahkibozu\` ou \`fremo-jady\`
3. São mais fáceis de digitar de memória, mas ligeiramente menos aleatórias

**Por que recomendamos este método:**

- **100 % grátis**, sem cadastro, sem e-mail, sem anúncios
- **Privacidade em primeiro lugar**: as senhas são geradas no seu navegador. Nunca saem do seu dispositivo.
- **Criptograficamente seguro**: usa \`crypto.getRandomValues\`, o CSPRNG do navegador
- **Personalizável**: comprimento, classes de caracteres, modo pronunciável
- **Funciona em qualquer dispositivo** com navegador

Favorite esta ferramenta — você vai usá-la toda vez que se inscrever em um novo serviço.

## Método 2: Gerenciadores de senhas (1Password, Bitwarden)

Um **gerenciador de senhas** é um software que gera, armazena e preenche automaticamente senhas fortes. Você só precisa lembrar de uma senha mestra forte; o gerenciador cuida de todo o resto.

As duas opções mais populares:

- **1Password** (pago, ~$3/mês): Apps refinados para cada plataforma, excelente histórico de segurança, planos familiares, compartilhamento de segredos.
- **Bitwarden** (grátis para indivíduos, $10/ano para premium): Código aberto, criptografia ponta a ponta, disponível em todas as plataformas, suporta auto-hospedagem.

Ambos:

- Geram senhas aleatórias fortes sob demanda
- Preenchem automaticamente em navegadores e apps
- Sincronizam entre todos os seus dispositivos
- Alertam sobre senhas vazadas ou reutilizadas
- Suportam passkeys, 2FA e notas seguras

Um gerenciador de senhas é a maior melhoria de segurança que você pode fazer. Se você adotar apenas uma ferramenta deste guia, que seja um gerenciador de senhas.

## Método 3: CLI com openssl ou pwgen

Os utilitários Unix \`openssl\` e \`pwgen\` são formas rápidas e scriptáveis de gerar senhas a partir de um terminal.

\`\`\`bash
# Gerar uma senha base64 de 24 caracteres
openssl rand -base64 24
# kPq3M9zT8sB1eF7gH5jL0nR2w==

# Gerar uma senha hexadecimal de 32 caracteres
openssl rand -hex 32
# 7a4f8b2c1d9e3f5a6b8c0d2e4f6a8b0c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3

# 16 caracteres alfanuméricos aleatórios
LC_ALL=C tr -dc 'A-Za-z0-9' </dev/urandom | head -c 16
# kP3mN9bT7sB1eF5g

# Usando pwgen (se instalado)
pwgen -s 20 1
# 8Hk3jP9mN2qB5vR7wL4t

pwgen 16 1
# aezohCai9Iesohph
\`\`\`

\`openssl rand\` é a opção mais segura (usa o CSPRNG do OpenSSL). \`/dev/urandom\` é o CSPRNG do kernel, também é bom. \`pwgen\` é conveniente, mas seu modo padrão gera senhas pronunciáveis que são ligeiramente menos aleatórias.

## Método 4: O método diceware (offline, sem computador)

Se você quer uma senha forte sem confiar em nenhum software, o método **Diceware** é o padrão ouro. Ele usa dados físicos para gerar frases de senha verdadeiramente aleatórias.

1. Obtenha uma lista de palavras Diceware (encontre uma em diceware.com).
2. Role cinco dados juntos. Os números rolados (por exemplo, 4-2-6-1-3) correspondem a uma palavra na lista (por exemplo, "siren").
3. Repita para cada palavra em sua frase de senha (4-5 palavras é típico).
4. Junte as palavras com espaços ou hífens.

Exemplo: 5 rolagens de 5 dados cada → "siren-vivid-arcade-bulb-quest". 5 palavras × 12.9 bits de entropia por palavra = **64.5 bits** de entropia, bem acima do mínimo para uma senha forte.

A vantagem: zero software, zero confiança. Você pode verificar a entropia sozinho, à mão. A desvantagem: lento (alguns minutos por frase de senha) e não prático para as centenas de senhas que uma pessoa típica precisa.

## Perguntas frequentes

### Qual deve ser o comprimento da minha senha?

Em 2026, **pelo menos 16 caracteres** para qualquer conta importante. 20+ é melhor. Quanto mais longa, mais forte — e o comprimento importa mais do que a variedade de caracteres. Uma senha de 20 caracteres apenas em minúsculas (log2(26^20) = 94 bits) é mais forte que uma senha de 8 caracteres com maiúsculas, minúsculas e símbolos (log2(94^8) = 52 bits).

Para senhas mestras e contas de alto valor, mire em 20+ caracteres.

### Devo usar caracteres especiais na minha senha?

Sim, quando o serviço permitir. Caracteres especiais aumentam o pool de caracteres, o que aumenta diretamente a entropia. Mas o comprimento importa mais — uma senha de 20 caracteres apenas em minúsculas é mais forte que uma senha de 12 caracteres com tudo misturado.

Uma senha de 16 caracteres com maiúsculas, minúsculas, dígitos e símbolos: log2(94^16) ≈ 105 bits de entropia. O mesmo comprimento apenas com minúsculas: log2(26^16) ≈ 75 bits. Ambas são fortes, mas a primeira é dramaticamente mais forte.

### Frases de senha são melhores que senhas?

Uma frase de senha Diceware de 5 palavras tem ~65 bits de entropia, similar a uma senha aleatória de 12 caracteres (~70 bits). Para senhas que você precisa digitar de memória regularmente, frases de senha são mais fáceis. Para senhas armazenadas em um gerenciador, aleatórias é bom.

A troca: frases de senha são mais fáceis de lembrar, mas levam mais tempo para digitar, e alguns serviços têm limites de comprimento (por exemplo, 16 caracteres) que excluem frases de senha longas.

### "P@ssw0rd1!" é uma senha forte?

Não. Substituições comuns (\`@\` por \`a\`, \`0\` por \`o\`, \`!\` por \`i\`) são bem conhecidas pelos atacantes e incluídas em todo dicionário de quebra de senhas. Regras modernas de quebra geram milhões de tais variantes por segundo. "P@ssw0rd1!" é quebrado em muito menos de um segundo.

O mesmo se aplica a padrões de teclado (\`qwerty123\`, \`asdf1234\`) e adições de números no final (\`password1\`, \`password123\`).

### Devo mudar minhas senhas regularmente?

O conselho antigo era "mudar a cada 90 dias". O NIST agora recomenda **contra mudanças periódicas obrigatórias de senhas**, porque elas encorajam os usuários a escolher senhas mais fracas (eles ciclam através de padrões previsíveis como \`Primavera2024!\` → \`Verao2024!\` → \`Outono2024!\`).

Mude sua senha quando:

- Um serviço que você usa anuncia uma violação
- Você acidentalmente a insere em um site de phishing
- Você compartilha com alguém que não deveria ter
- É uma credencial em um dispositivo que você perdeu

Caso contrário, uma senha forte e única pode durar indefinidamente.

### Qual é o melhor gerenciador de senhas?

Não há um único "melhor" — o melhor é aquele que você vai usar. Entre as opções populares:

- **1Password**: Melhor UX, planos familiares, pago
- **Bitwarden**: Melhor opção gratuita, código aberto, auto-hospedável
- **Apple iCloud Keychain**: Integrado ao macOS/iOS, gratuito para usuários Apple
- **Google Password Manager**: Integrado ao Chrome e Android, gratuito
- **Firefox Lockwise**: Integrado ao Firefox, gratuito
- **KeePass / KeePassXC**: Apenas local, sem nuvem, gratuito, código aberto

Cada um tem compromissos entre conveniência, segurança e suporte de plataforma. Escolha um e use consistentemente.

### E quanto às passkeys?

As passkeys (baseadas em FIDO2/WebAuthn) são o futuro: elas substituem senhas por pares de chaves criptográficas que não podem ser alvo de phishing. As principais plataformas (Apple, Google, Microsoft) as suportam, e um número crescente de serviços as aceita.

Mas as passkeys ainda não são universais, e a maioria das contas ainda precisa de uma senha como backup. Use passkeys onde disponíveis, mas ainda mantenha uma senha mestra forte para seu gerenciador de senhas.

## Conclusão

Senhas fortes são a base da segurança cibernética pessoal em 2026. Uma senha aleatória de 16+ caracteres, gerada criptograficamente e armazenada em um gerenciador de senhas, é o padrão ouro. Frases de senha são uma ótima alternativa para senhas que você precisa lembrar de memória. A reutilização de senhas é o maior risco a evitar.

A configuração mínima viável:

1. Instale um gerenciador de senhas (1Password, Bitwarden, ou a opção integrada do seu SO)
2. Defina uma senha mestra forte (16+ caracteres, aleatória, ou uma frase Diceware de 5 palavras)
3. Habilite 2FA no seu gerenciador de senhas e contas críticas
4. Gere uma nova senha aleatória para cada site em que se inscrever
5. Audite as senhas existentes e substitua quaisquer que sejam reutilizadas ou fracas

Para geração ocasional de senhas únicas, o [Gerador de Senhas do UtilBoxx](/pt/tools/dev/password) é privado, grátis e roda inteiramente no seu navegador usando aleatoriedade criptograficamente segura. Combine-o com um gerenciador de senhas e você terá 95 % da segurança que precisa.

Os 5 % restantes são passkeys, chaves de segurança de hardware e boa segurança operacional. Mas primeiro faça o básico corretamente.`;

const strongPasswordsFr = `## Pourquoi les mots de passe comptent encore en 2026

Nous sommes profondément dans l'ère des passkeys, mais les mots de passe restent la méthode d'authentification la plus courante sur Internet. La plupart des comptes en ligne — email, banque, réseaux sociaux, outils de travail, services de streaming — reposent toujours sur un nom d'utilisateur et un mot de passe comme méthode d'authentification principale ou de secours. Même lorsque la biométrie ou les passkeys sont disponibles, un mot de passe maître fort protège le gestionnaire qui contient tout le reste.

Un mot de passe faible est l'une des choses les plus faciles à exploiter pour un attaquant. Les outils de **force brute** peuvent tester des milliards de suppositions de mots de passe par seconde contre un hash de mot de passe volé. Le **credential stuffing** réutilise les mots de passe divulgués lors d'une violation pour compromettre des comptes sur des services sans rapport. Le **phishing** trompe les utilisateurs pour qu'ils tapent leurs mots de passe sur de fausses pages de connexion. Les défenses contre tout cela commencent par un mot de passe fort et unique pour chaque compte.

Ce guide couvre comment générer des mots de passe forts, les différentes classes de caractères que vous pouvez utiliser, comment les rendre mémorables, et comment utiliser un gestionnaire de mots de passe pour les garder organisés.

## Qu'est-ce qui rend un mot de passe fort ?

La force d'un mot de passe se mesure en **bits d'entropie**. Chaque bit d'entropie double le travail qu'un attaquant doit faire pour le deviner. La formule :

\`\`\`
entropy = log2(character_pool^length)
\`\`\`

Où \`character_pool\` est le nombre de caractères distincts disponibles et \`length\` est la longueur du mot de passe.

Pour qu'un mot de passe soit considéré comme fort en 2026 :

- **Au moins 16 caractères** de longueur (plus long est toujours mieux)
- **Mélange de classes de caractères** : majuscules, minuscules, chiffres et symboles
- **Génération aléatoire ou pseudo-aléatoire** (pas un mot du dictionnaire, un nom ou une phrase courante)
- **Unique par service** (ne jamais réutiliser les mots de passe entre sites)

Un mot de passe aléatoire de 16 caractères utilisant les 4 classes de caractères a environ **95 bits d'entropie** — suffisant pour résister à la force brute pendant des décennies, même avec un hash volé et le matériel le plus rapide.

Modèles faibles courants à éviter :

- **Mots du dictionnaire** : « password », « sunshine », « football »
- **Noms, anniversaires** : « Jean1990 », « Maggie2010 »
- **Substitutions courantes** : « P@ssw0rd » — semble aléatoire, mais est dans le dictionnaire de chaque attaquant
- **Mots de passe réutilisés** : « MonChien2020! » utilisé sur 14 sites différents
- **Caractères séquentiels ou répétés** : « 12345678 », « aaaaaaaa »

## Classes de caractères

Les quatre classes de caractères et leurs tailles de pool typiques :

| Classe      | Exemples                       | Taille du pool |
|-------------|--------------------------------|----------------|
| Minuscules  | a–z                            | 26             |
| Majuscules  | A–Z                            | 26             |
| Chiffres    | 0–9                            | 10             |
| Symboles    | !@#$%^&*()_-+={}[]\|:;"'<>,.?/ | 32             |
| **Total**   |                                | **94**         |

Un mot de passe qui utilise les quatre classes a 94 caractères possibles à chaque position. Un mot de passe de 16 caractères de ce pool : **94^16 ≈ 3,7 × 10^31** possibilités, soit environ 105 bits d'entropie.

Certains services restreignent l'ensemble des symboles qu'ils acceptent (par exemple, seulement \`!@#$%\`). Une solution courante : évitez les caractères les plus problématiques (\`/\`, \`\\\`, guillemets, backticks) et restez sur le sous-ensemble le plus simple.

## Mémorables vs aléatoires

Il y a deux approches principales pour créer des mots de passe forts :

### Aléatoires (force maximale, mémorabilité minimale)

Les mots de passe purement aléatoires comme \`aB7#kP2&mN9$qR3!\` ont une entropie maximale mais sont essentiellement impossibles à mémoriser. Utilisez-les pour les comptes qui vivent dans un gestionnaire de mots de passe — vous n'avez qu'à mémoriser un mot de passe maître.

### Passphrases mémorables (bonne force, faciles à mémoriser)

Une **passphrase** est constituée de plusieurs mots aléatoires assemblés : \`correct-horse-battery-staple\`. L'exemple classique de XKCD. Avec 4 mots aléatoires d'une liste de 7 776 mots (la liste de mots Diceware), l'entropie est d'environ **51 bits** — forte contre les attaques en ligne, facile à mémoriser, facile à taper.

La force d'une passphrase vient de l'entropie par mot, pas de la longueur. Ajouter un symbole et un chiffre (par exemple, \`correct-horse-battery-staple-7!\`) porte l'entropie à ~57 bits.

Meilleure pratique : combinez les deux. Utilisez un **mot de passe maître fort** (aléatoire, haute entropie, stocké dans votre cerveau) pour votre gestionnaire de mots de passe, et des **mots de passe aléatoires uniques** pour chaque autre compte (stockés dans le gestionnaire).

## Méthode 1 : Utilisez le générateur de mots de passe de UtilBoxx (Recommandé)

La façon la plus rapide, privée et flexible de générer des mots de passe dans votre navigateur est le [Générateur de Mots de Passe de UtilBoxx](/fr/tools/dev/password). Il prend en charge la longueur personnalisée, les classes de caractères (majuscules, minuscules, chiffres, symboles), et un mode prononçable pour des mots de passe mémorables. Tout s'exécute dans votre navigateur en utilisant \`crypto.getRandomValues\` — cryptographiquement sûr, pas de téléversement, pas de log.

**Comment l'utiliser :**

1. Allez sur [utilboxx.com/fr/tools/dev/password](/fr/tools/dev/password)
2. Choisissez la longueur du mot de passe (12, 16, 20, 32, 64 sont courants)
3. Activez les classes de caractères à inclure
4. Cliquez sur Générer
5. Copiez le résultat

**Pour les mots de passe prononçables :**

1. Activez l'option « Prononçable »
2. Le générateur produit des mots de passe basés sur des syllabes comme \`vahkibozu\` ou \`fremo-jady\`
3. Ceux-ci sont plus faciles à taper de mémoire mais légèrement moins aléatoires

**Pourquoi nous recommandons cette méthode :**

- **100 % gratuit**, sans inscription, sans e-mail, sans publicité
- **Confidentialité d'abord** : les mots de passe sont générés dans votre navigateur. Ils ne quittent jamais votre appareil.
- **Cryptographiquement sûr** : utilise \`crypto.getRandomValues\`, le CSPRNG du navigateur
- **Personnalisable** : longueur, classes de caractères, mode prononçable
- **Fonctionne sur tout appareil** avec navigateur

Ajoutez cette page aux favoris — vous l'utiliserez à chaque fois que vous vous inscrivez à un nouveau service.

## Méthode 2 : Gestionnaires de mots de passe (1Password, Bitwarden)

Un **gestionnaire de mots de passe** est un logiciel qui génère, stocke et remplit automatiquement des mots de passe forts. Vous n'avez qu'à mémoriser un mot de passe maître fort ; le gestionnaire s'occupe de tout le reste.

Les deux options les plus populaires :

- **1Password** (payant, ~$3/mois) : Applications soignées pour chaque plateforme, excellent historique de sécurité, plans familiaux, partage de secrets.
- **Bitwarden** (gratuit pour les particuliers, $10/an pour premium) : Open source, chiffrement de bout en bout, disponible sur toutes les plateformes, prend en charge l'auto-hébergement.

Les deux :

- Génèrent des mots de passe aléatoires forts à la demande
- Les remplissent automatiquement dans les navigateurs et les applications
- Se synchronisent sur tous vos appareils
- Vous alertent des mots de passe divulgués ou réutilisés
- Prennent en charge les passkeys, la 2FA et les notes sécurisées

Un gestionnaire de mots de passe est la plus grande amélioration de sécurité que vous puissiez faire. Si vous n'adoptez qu'un seul outil de ce guide, que ce soit un gestionnaire de mots de passe.

## Méthode 3 : CLI avec openssl ou pwgen

Les utilitaires Unix \`openssl\` et \`pwgen\` sont des moyens rapides et scriptables de générer des mots de passe depuis un terminal.

\`\`\`bash
# Générer un mot de passe base64 de 24 caractères
openssl rand -base64 24
# kPq3M9zT8sB1eF7gH5jL0nR2w==

# Générer un mot de passe hexadécimal de 32 caractères
openssl rand -hex 32
# 7a4f8b2c1d9e3f5a6b8c0d2e4f6a8b0c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3

# 16 caractères alphanumériques aléatoires
LC_ALL=C tr -dc 'A-Za-z0-9' </dev/urandom | head -c 16
# kP3mN9bT7sB1eF5g

# Utiliser pwgen (si installé)
pwgen -s 20 1
# 8Hk3jP9mN2qB5vR7wL4t

pwgen 16 1
# aezohCai9Iesohph
\`\`\`

\`openssl rand\` est l'option la plus sûre (utilise le CSPRNG d'OpenSSL). \`/dev/urandom\` est le CSPRNG du noyau, il est aussi bien. \`pwgen\` est pratique mais son mode par défaut génère des mots de passe prononçables qui sont légèrement moins aléatoires.

## Méthode 4 : La méthode diceware (hors ligne, sans ordinateur)

Si vous voulez un mot de passe fort sans faire confiance à un logiciel, la méthode **Diceware** est l'étalon-or. Elle utilise des dés physiques pour générer des passphrases véritablement aléatoires.

1. Obtenez une liste de mots Diceware (trouvez-en une sur diceware.com).
2. Lancez cinq dés ensemble. Les chiffres obtenus (par exemple, 4-2-6-1-3) correspondent à un mot dans la liste (par exemple, « siren »).
3. Répétez pour chaque mot de votre passphrase (4-5 mots est typique).
4. Joignez les mots avec des espaces ou des traits d'union.

Exemple : 5 lancers de 5 dés chacun → « siren-vivid-arcade-bulb-quest ». 5 mots × 12,9 bits d'entropie par mot = **64,5 bits** d'entropie, bien au-dessus du minimum pour un mot de passe fort.

L'avantage : zéro logiciel, zéro confiance. Vous pouvez vérifier l'entropie vous-même, à la main. L'inconvénient : lent (quelques minutes par passphrase) et peu pratique pour les centaines de mots de passe dont une personne typique a besoin.

## Questions fréquentes

### Quelle longueur doit avoir mon mot de passe ?

En 2026, **au moins 16 caractères** pour tout compte important. 20+ est mieux. Plus c'est long, plus c'est fort — et la longueur compte plus que la variété des caractères. Un mot de passe de 20 caractères uniquement en minuscules (log2(26^20) = 94 bits) est plus fort qu'un mot de passe de 8 caractères avec majuscules, minuscules et symboles (log2(94^8) = 52 bits).

Pour les mots de passe maîtres et les comptes de grande valeur, visez 20+ caractères.

### Dois-je utiliser des caractères spéciaux dans mon mot de passe ?

Oui, lorsque le service le permet. Les caractères spéciaux augmentent le pool de caractères, ce qui augmente directement l'entropie. Mais la longueur compte plus — un mot de passe de 20 caractères uniquement en minuscules est plus fort qu'un mot de passe de 12 caractères avec tout mélangé.

Un mot de passe de 16 caractères avec majuscules, minuscules, chiffres et symboles : log2(94^16) ≈ 105 bits d'entropie. La même longueur uniquement en minuscules : log2(26^16) ≈ 75 bits. Les deux sont forts, mais le premier est considérablement plus fort.

### Les passphrases sont-elles meilleures que les mots de passe ?

Une passphrase Diceware de 5 mots a ~65 bits d'entropie, similaire à un mot de passe aléatoire de 12 caractères (~70 bits). Pour les mots de passe que vous devez taper de mémoire régulièrement, les passphrases sont plus faciles. Pour les mots de passe stockés dans un gestionnaire, l'aléatoire convient.

Le compromis : les passphrases sont plus faciles à mémoriser mais prennent plus de temps à taper, et certains services ont des limites de longueur (par exemple, 16 caractères) qui excluent les passphrases longues.

### « P@ssw0rd1! » est-il un mot de passe fort ?

Non. Les substitutions courantes (\`@\` pour \`a\`, \`0\` pour \`o\`, \`!\` pour \`i\`) sont bien connues des attaquants et incluses dans chaque dictionnaire de cassage de mots de passe. Les règles modernes de cassage génèrent des millions de ces variantes par seconde. « P@ssw0rd1! » est cassé en bien moins d'une seconde.

Il en va de même pour les motifs de clavier (\`qwerty123\`, \`asdf1234\`) et les ajouts de chiffres à la fin (\`password1\`, \`password123\`).

### Dois-je changer mes mots de passe régulièrement ?

L'ancien conseil était « changer tous les 90 jours ». Le NIST recommande maintenant **contre les changements périodiques obligatoires de mots de passe**, car ils encouragent les utilisateurs à choisir des mots de passe plus faibles (ils cyclent à travers des motifs prévisibles comme \`Printemps2024!\` → \`Ete2024!\` → \`Automne2024!\`).

Changez votre mot de passe lorsque :

- Un service que vous utilisez annonce une violation
- Vous l'avez accidentellement saisi sur un site de phishing
- Vous l'avez partagé avec quelqu'un qui ne devrait pas l'avoir
- C'est un identifiant sur un appareil que vous avez perdu

Sinon, un mot de passe fort et unique peut durer indéfiniment.

### Quel est le meilleur gestionnaire de mots de passe ?

Il n'y a pas de « meilleur » unique — le meilleur est celui que vous utiliserez. Parmi les options populaires :

- **1Password** : Meilleure UX, plans familiaux, payant
- **Bitwarden** : Meilleure option gratuite, open source, auto-hébergeable
- **Apple iCloud Keychain** : Intégré à macOS/iOS, gratuit pour les utilisateurs Apple
- **Google Password Manager** : Intégré à Chrome et Android, gratuit
- **Firefox Lockwise** : Intégré à Firefox, gratuit
- **KeePass / KeePassXC** : Local uniquement, sans cloud, gratuit, open source

Chacun a des compromis entre commodité, sécurité et support de plateforme. Choisissez-en un et utilisez-le systématiquement.

### Qu'en est-il des passkeys ?

Les passkeys (basées sur FIDO2/WebAuthn) sont l'avenir : elles remplacent les mots de passe par des paires de clés cryptographiques qui ne peuvent pas être victimes de phishing. Les principales plateformes (Apple, Google, Microsoft) les prennent en charge, et un nombre croissant de services les accepte.

Mais les passkeys ne sont pas encore universelles, et la plupart des comptes ont toujours besoin d'un mot de passe comme solution de secours. Utilisez les passkeys là où elles sont disponibles, mais maintenez un mot de passe maître fort pour votre gestionnaire de mots de passe.

## Conclusion

Les mots de passe forts sont le fondement de la cybersécurité personnelle en 2026. Un mot de passe aléatoire de 16+ caractères, généré cryptographiquement et stocké dans un gestionnaire de mots de passe, est l'étalon-or. Les passphrases sont une excellente alternative pour les mots de passe que vous devez mémoriser de mémoire. La réutilisation des mots de passe est le plus grand risque à éviter.

La configuration minimale viable :

1. Installez un gestionnaire de mots de passe (1Password, Bitwarden, ou l'option intégrée de votre OS)
2. Définissez un mot de passe maître fort (16+ caractères, aléatoire, ou une passphrase Diceware de 5 mots)
3. Activez la 2FA sur votre gestionnaire de mots de passe et les comptes critiques
4. Générez un nouveau mot de passe aléatoire pour chaque site où vous vous inscrivez
5. Auditez les mots de passe existants et remplacez ceux qui sont réutilisés ou faibles

Pour la génération occasionnelle de mots de passe uniques, le [Générateur de Mots de Passe de UtilBoxx](/fr/tools/dev/password) est privé, gratuit et s'exécute entièrement dans votre navigateur en utilisant une randomisation cryptographiquement sûre. Associez-le à un gestionnaire de mots de passe et vous avez 95 % de la sécurité dont vous avez besoin.

Les 5 % restants sont les passkeys, les clés de sécurité matérielles et une bonne sécurité opérationnelle. Mais commencez par maîtriser les bases.`;

const strongPasswordsDe = `## Warum Passwörter 2026 immer noch wichtig sind

Wir sind tief im Passkey-Zeitalter, aber Passwörter bleiben die häufigste Authentifizierungs­berechtigung im Internet. Die meisten Online-Konten — E-Mail, Banking, soziale Medien, Arbeitswerkzeuge, Streaming-Dienste — verlassen sich immer noch auf einen Benutzernamen und ein Passwort als primäre oder Backup-Authentifizierungsmethode. Selbst wenn biometrische Daten oder Passkeys verfügbar sind, schützt ein starkes Master-Passwort den Manager, der alles andere enthält.

Ein schwaches Passwort ist eines der einfachsten Dinge, die ein Angreifer ausnutzen kann. **Brute-Force**-Tools können Milliarden von Passwortvermuten pro Sekunde gegen einen gestohlenen Passwort-Hash testen. **Credential Stuffing** verwendet Passwörter, die bei einer Datenpanne geleakt wurden, um Konten bei nicht verwandten Diensten zu kompromittieren. **Phishing** bringt Benutzer dazu, Passwörter auf gefälschten Login-Seiten einzugeben. Die Abwehr gegen all dies beginnt mit einem starken, eindeutigen Passwort für jedes Konto.

Dieser Leitfaden behandelt, wie man starke Passwörter generiert, die verschiedenen Zeichenklassen, die Sie verwenden können, wie Sie sie einprägsam machen, und wie Sie einen Passwort-Manager verwenden, um sie organisiert zu halten.

## Was macht ein Passwort stark?

Die Stärke eines Passworts wird in **Entropie-Bits** gemessen. Jedes Bit Entropie verdoppelt die Arbeit, die ein Angreifer leisten muss, um es zu erraten. Die Formel:

\`\`\`
entropy = log2(character_pool^length)
\`\`\`

Wobei \`character_pool\` die Anzahl der verfügbaren unterschiedlichen Zeichen und \`length\` die Länge des Passworts ist.

Damit ein Passwort 2026 als stark gilt:

- **Mindestens 16 Zeichen** lang (länger ist immer besser)
- **Mischung aus Zeichenklassen**: Großbuchstaben, Kleinbuchstaben, Ziffern und Symbole
- **Zufällige oder pseudozufällige** Generierung (kein Wörterbuchwort, Name oder häufige Phrase)
- **Eindeutig pro Dienst** (niemals Passwörter zwischen Websites wiederverwenden)

Ein zufälliges 16-Zeichen-Passwort unter Verwendung aller 4 Zeichenklassen hat ungefähr **95 Bit Entropie** — genug, um Brute-Force jahrzehntelang zu widerstehen, selbst mit einem gestohlenen Hash und der schnellsten Hardware.

Häufige schwache Muster, die zu vermeiden sind:

- **Wörterbuchwörter**: „password", „sunshine", „football"
- **Namen, Geburtstage, Jahrestage**: „Hans1990", „Maggie2010"
- **Häufige Ersetzungen**: „P@ssw0rd" — sieht zufällig aus, ist aber in jedem Angreifer-Wörterbuch
- **Wiederverwendete Passwörter**: „MeinHund2020!" auf 14 verschiedenen Websites verwendet
- **Sequentielle oder wiederholte Zeichen**: „12345678", „aaaaaaaa"

## Zeichenklassen

Die vier Zeichenklassen und ihre typischen Pool-Größen:

| Klasse      | Beispiele                      | Pool-Größe |
|-------------|--------------------------------|------------|
| Kleinbuchstaben | a–z                        | 26         |
| Großbuchstaben  | A–Z                        | 26         |
| Ziffern         | 0–9                        | 10         |
| Symbole         | !@#$%^&*()_-+={}[]\|:;"'<>,.?/ | 32         |
| **Gesamt**      |                            | **94**     |

Ein Passwort, das alle vier Klassen verwendet, hat 94 mögliche Zeichen an jeder Position. Ein 16-Zeichen-Passwort aus diesem Pool: **94^16 ≈ 3,7 × 10^31** Möglichkeiten, oder ungefähr 105 Bit Entropie.

Einige Dienste beschränken den akzeptierten Symbolumfang (z. B. nur \`!@#$%\`). Eine übliche Lösung: Vermeiden Sie die problematischsten Zeichen (\`/\`, \`\\\`, Anführungszeichen, Backticks) und bleiben Sie bei der einfacheren Teilmenge.

## Einprägsam vs zufällig

Es gibt zwei Hauptansätze zur Erstellung starker Passwörter:

### Zufällig (höchste Stärke, geringste Einprägsamkeit)

Rein zufällige Passwörter wie \`aB7#kP2&mN9$qR3!\` haben maximale Entropie, sind aber im Wesentlichen unmöglich zu merken. Verwenden Sie sie für Konten, die in einem Passwort-Manager leben — Sie müssen sich nur ein Master-Passwort merken.

### Einprägsame Passphrasen (gute Stärke, leicht zu merken)

Eine **Passphrase** besteht aus mehreren zufälligen Wörtern, die zusammengefügt werden: \`correct-horse-battery-staple\`. Das klassische XKCD-Beispiel. Mit 4 zufälligen Wörtern aus einer 7.776-Wörter-Liste (der Diceware-Wortliste) beträgt die Entropie ungefähr **51 Bit** — stark gegen Online-Angriffe, leicht zu merken, leicht zu tippen.

Die Stärke einer Passphrase kommt aus der Entropie pro Wort, nicht aus der Länge. Das Hinzufügen eines Symbols und einer Zahl (z. B. \`correct-horse-battery-staple-7!\`) erhöht die Entropie auf ~57 Bit.

Beste Praxis: Kombinieren Sie beide. Verwenden Sie ein **starkes Master-Passwort** (zufällig, hohe Entropie, im Kopf gespeichert) für Ihren Passwort-Manager, und **eindeutige zufällige Passwörter** für jedes andere Konto (im Manager gespeichert).

## Methode 1: Den Passwort-Generator von UtilBoxx verwenden (Empfohlen)

Der schnellste, privateste und flexibelste Weg, Passwörter in Ihrem Browser zu generieren, ist der [Passwort-Generator von UtilBoxx](/de/tools/dev/password). Er unterstützt benutzerdefinierte Länge, Zeichenklassen (Großbuchstaben, Kleinbuchstaben, Ziffern, Symbole) und einen aussprechbaren Modus für einprägsame Passwörter. Alles läuft in Ihrem Browser mit \`crypto.getRandomValues\` — kryptographisch sicher, kein Upload, keine Logs.

**So verwenden Sie ihn:**

1. Gehen Sie zu [utilboxx.com/de/tools/dev/password](/de/tools/dev/password)
2. Wählen Sie die Passwortlänge (12, 16, 20, 32, 64 sind üblich)
3. Schalten Sie um, welche Zeichenklassen einbezogen werden sollen
4. Klicken Sie auf Generieren
5. Kopieren Sie das Ergebnis

**Für aussprechbare Passwörter:**

1. Aktivieren Sie die Option „Aussprechbar"
2. Der Generator erzeugt silbenbasierte Passwörter wie \`vahkibozu\` oder \`fremo-jady\`
3. Diese sind leichter aus dem Gedächtnis zu tippen, aber etwas weniger zufällig

**Warum wir diese Methode empfehlen:**

- **100 % kostenlos**, keine Registrierung, keine E-Mail, keine Werbung
- **Privatsphäre zuerst**: Passwörter werden in Ihrem Browser generiert. Sie verlassen niemals Ihr Gerät.
- **Kryptographisch sicher**: verwendet \`crypto.getRandomValues\`, den CSPRNG des Browsers
- **Anpassbar**: Länge, Zeichenklassen, aussprechbarer Modus
- **Funktioniert auf jedem Gerät** mit Browser

Setzen Sie ein Lesezeichen auf dieses Werkzeug — Sie werden es jedes Mal verwenden, wenn Sie sich für einen neuen Dienst anmelden.

## Methode 2: Passwort-Manager (1Password, Bitwarden)

Ein **Passwort-Manager** ist eine Software, die starke Passwörter generiert, speichert und automatisch ausfüllt. Sie müssen sich nur ein starkes Master-Passwort merken; der Manager erledigt alles andere.

Die beiden beliebtesten Optionen:

- **1Password** (kostenpflichtig, ~$3/Monat): Polierte Apps für jede Plattform, ausgezeichnete Sicherheitsbilanz, Familienpläne, Secret-Sharing.
- **Bitwarden** (kostenlos für Einzelpersonen, $10/Jahr für Premium): Open Source, Ende-zu-Ende-Verschlüsselung, auf jeder Plattform verfügbar, unterstützt Self-Hosting.

Beide:

- Generieren bei Bedarf starke zufällige Passwörter
- Füllen sie in Browsern und Apps automatisch aus
- Synchronisieren über alle Ihre Geräte
- Warnen Sie vor kompromittierten oder wiederverwendeten Passwörtern
- Unterstützen Passkeys, 2FA und sichere Notizen

Ein Passwort-Manager ist die größte Sicherheitsverbesserung, die Sie vornehmen können. Wenn Sie nur ein Werkzeug aus diesem Leitfaden übernehmen, dann einen Passwort-Manager.

## Methode 3: CLI mit openssl oder pwgen

Die Unix-Dienstprogramme \`openssl\` und \`pwgen\` sind schnelle, skriptbare Möglichkeiten, Passwörter aus einem Terminal zu generieren.

\`\`\`bash
# Generieren Sie ein 24-Zeichen-Base64-Passwort
openssl rand -base64 24
# kPq3M9zT8sB1eF7gH5jL0nR2w==

# Generieren Sie ein 32-Zeichen-Hex-Passwort
openssl rand -hex 32
# 7a4f8b2c1d9e3f5a6b8c0d2e4f6a8b0c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3

# 16 zufällige alphanumerische Zeichen
LC_ALL=C tr -dc 'A-Za-z0-9' </dev/urandom | head -c 16
# kP3mN9bT7sB1eF5g

# Verwendung von pwgen (falls installiert)
pwgen -s 20 1
# 8Hk3jP9mN2qB5vR7wL4t

pwgen 16 1
# aezohCai9Iesohph
\`\`\`

\`openssl rand\` ist die sicherste Option (verwendet den CSPRNG von OpenSSL). \`/dev/urandom\` ist der CSPRNG des Kernels, auch gut. \`pwgen\` ist bequem, aber sein Standardmodus generiert aussprechbare Passwörter, die etwas weniger zufällig sind.

## Methode 4: Die Diceware-Methode (offline, kein Computer)

Wenn Sie ein starkes Passwort wollen, ohne einer Software zu vertrauen, ist die **Diceware**-Methode der Goldstandard. Sie verwendet physische Würfel, um wirklich zufällige Passphrasen zu generieren.

1. Besorgen Sie sich eine Diceware-Wortliste (finden Sie eine auf diceware.com).
2. Werfen Sie fünf Würfel gleichzeitig. Die geworfenen Zahlen (z. B. 4-2-6-1-3) entsprechen einem Wort in der Liste (z. B. „siren").
3. Wiederholen Sie dies für jedes Wort in Ihrer Passphrase (4-5 Wörter sind typisch).
4. Verbinden Sie die Wörter mit Leerzeichen oder Bindestrichen.

Beispiel: 5 Würfe mit je 5 Würfeln → „siren-vivid-arcade-bulb-quest". 5 Wörter × 12,9 Bit Entropie pro Wort = **64,5 Bit** Entropie, weit über dem Minimum für ein starkes Passwort.

Der Vorteil: Null Software, null Vertrauen. Sie können die Entropie selbst überprüfen, von Hand. Der Nachteil: Langsam (einige Minuten pro Passphrase) und unpraktisch für die Hunderte von Passwörtern, die eine typische Person benötigt.

## Häufige Fragen

### Wie lang sollte mein Passwort sein?

In 2026 **mindestens 16 Zeichen** für jedes wichtige Konto. 20+ ist besser. Je länger, desto stärker — und die Länge ist wichtiger als die Zeichenvielfalt. Ein 20-Zeichen-Passwort nur in Kleinbuchstaben (log2(26^20) = 94 Bit) ist stärker als ein 8-Zeichen-Passwort mit Groß- und Kleinbuchstaben und Symbolen (log2(94^8) = 52 Bit).

Für Master-Passwörter und hochwertige Konten zielen Sie auf 20+ Zeichen.

### Sollte ich Sonderzeichen in meinem Passwort verwenden?

Ja, wenn der Dienst es erlaubt. Sonderzeichen erhöhen den Zeichenvorrat, was die Entropie direkt erhöht. Aber die Länge ist wichtiger — ein 20-Zeichen-Passwort nur in Kleinbuchstaben ist stärker als ein 12-Zeichen-Passwort mit allem gemischt.

Ein 16-Zeichen-Passwort mit Groß- und Kleinbuchstaben, Ziffern und Symbolen: log2(94^16) ≈ 105 Bit Entropie. Die gleiche Länge nur in Kleinbuchstaben: log2(26^16) ≈ 75 Bit. Beide sind stark, aber das erste ist dramatisch stärker.

### Sind Passphrasen besser als Passwörter?

Eine 5-Wörter-Diceware-Passphrase hat ~65 Bit Entropie, ähnlich einem 12-Zeichen-Zufallspasswort (~70 Bit). Für Passwörter, die Sie regelmäßig aus dem Gedächtnis eingeben müssen, sind Passphrasen einfacher. Für Passwörter, die in einem Manager gespeichert sind, ist zufällig in Ordnung.

Der Kompromiss: Passphrasen sind leichter zu merken, aber dauern länger beim Tippen, und einige Dienste haben Längenbeschränkungen (z. B. 16 Zeichen), die lange Passphrasen ausschließen.

### Ist „P@ssw0rd1!" ein starkes Passwort?

Nein. Häufige Ersetzungen (\`@\` für \`a\`, \`0\` für \`o\`, \`!\` für \`i\`) sind Angreifern gut bekannt und in jedem Passwort-Cracking-Wörterbuch enthalten. Moderne Cracking-Regeln generieren Millionen solcher Varianten pro Sekunde. „P@ssw0rd1!" wird in weit weniger als einer Sekunde geknackt.

Das Gleiche gilt für Tastaturmuster (\`qwerty123\`, \`asdf1234\`) und Zahlensuffixe (\`password1\`, \`password123\`).

### Sollte ich meine Passwörter regelmäßig ändern?

Der alte Rat war „alle 90 Tage ändern". Das NIST empfiehlt jetzt **gegen obligatorische regelmäßige Passwortänderungen**, weil sie Benutzer dazu ermutigen, schwächere Passwörter zu wählen (sie durchlaufen vorhersehbare Muster wie \`Frühling2024!\` → \`Sommer2024!\` → \`Herbst2024!\`).

Ändern Sie Ihr Passwort, wenn:

- Ein von Ihnen genutzter Dienst eine Datenpanne meldet
- Sie es versehentlich auf einer Phishing-Seite eingegeben haben
- Sie es mit jemandem geteilt haben, der es nicht haben sollte
- Es sich um Anmeldedaten auf einem verlorenen Gerät handelt

Andernfalls kann ein starkes, eindeutiges Passwort unbegrenzt halten.

### Was ist der beste Passwort-Manager?

Es gibt nicht den einen „besten" — der beste ist der, den Sie verwenden werden. Unter den beliebten Optionen:

- **1Password**: Beste UX, Familienpläne, kostenpflichtig
- **Bitwarden**: Beste kostenlose Option, Open Source, selbst-hostbar
- **Apple iCloud Keychain**: In macOS/iOS integriert, kostenlos für Apple-Nutzer
- **Google Password Manager**: In Chrome und Android integriert, kostenlos
- **Firefox Lockwise**: In Firefox integriert, kostenlos
- **KeePass / KeePassXC**: Nur lokal, keine Cloud, kostenlos, Open Source

Jeder hat Kompromisse zwischen Komfort, Sicherheit und Plattformunterstützung. Wählen Sie einen und verwenden Sie ihn konsequent.

### Was ist mit Passkeys?

Passkeys (basierend auf FIDO2/WebAuthn) sind die Zukunft: Sie ersetzen Passwörter durch kryptographische Schlüsselpaare, die nicht für Phishing anfällig sind. Große Plattformen (Apple, Google, Microsoft) unterstützen sie, und eine wachsende Zahl von Diensten akzeptiert sie.

Aber Passkeys sind noch nicht allgegenwärtig, und die meisten Konten benötigen immer noch ein Passwort als Fallback. Verwenden Sie Passkeys, wo verfügbar, aber pflegen Sie trotzdem ein starkes Master-Passwort für Ihren Passwort-Manager.

## Fazit

Starke Passwörter sind das Fundament der persönlichen Cybersicherheit im Jahr 2026. Ein zufälliges Passwort mit 16+ Zeichen, kryptographisch generiert und in einem Passwort-Manager gespeichert, ist der Goldstandard. Passphrasen sind eine großartige Alternative für Passwörter, die Sie aus dem Gedächtnis behalten müssen. Passwort-Wiederverwendung ist das größte zu vermeidende Risiko.

Die minimal funktionsfähige Einrichtung:

1. Installieren Sie einen Passwort-Manager (1Password, Bitwarden oder die integrierte Option Ihres Betriebssystems)
2. Legen Sie ein starkes Master-Passwort fest (16+ Zeichen, zufällig oder eine 5-Wörter-Diceware-Passphrase)
3. Aktivieren Sie 2FA auf Ihrem Passwort-Manager und kritischen Konten
4. Generieren Sie für jede Website, auf der Sie sich anmelden, ein neues zufälliges Passwort
5. Überprüfen Sie bestehende Passwörter und ersetzen Sie wiederverwendete oder schwache

Für gelegentliche einmalige Passwortgenerierung ist der [Passwort-Generator von UtilBoxx](/de/tools/dev/password) privat, kostenlos und läuft vollständig in Ihrem Browser mit kryptographisch sicherer Zufälligkeit. Kombinieren Sie ihn mit einem Passwort-Manager und Sie haben 95 % der Sicherheit, die Sie brauchen.

Die restlichen 5 % sind Passkeys, Hardware-Sicherheitsschlüssel und gute operative Sicherheit. Aber zuerst die Grundlagen richtig machen.`;

export const strongPasswordsPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-create-strong-passwords",
    category: "Developer Tools",
    date: "2026-04-15",
    readTime: "5 min",
    title: "How to Create Strong, Memorable Passwords (2026)",
    description: "Generate cryptographically strong passwords. Control length, characters, and pronounceability.",
    content: strongPasswordsEn,
  },
  zh: {
    slug: "how-to-create-strong-passwords",
    category: "开发工具",
    date: "2026-04-15",
    readTime: "5 分钟",
    title: "如何创建强且易记的密码（2026）",
    description: "生成加密学上强的密码。控制长度、字符和可发音性。",
    content: strongPasswordsZh,
  },
  ja: {
    slug: "how-to-create-strong-passwords",
    category: "開発者ツール",
    date: "2026-04-15",
    readTime: "5 分",
    title: "強力で覚えやすいパスワードを作成する方法（2026）",
    description: "暗号学的に強力なパスワードを生成。長さ、文字、発音可能性を制御。",
    content: strongPasswordsJa,
  },
  es: {
    slug: "how-to-create-strong-passwords",
    category: "Herramientas para desarrolladores",
    date: "2026-04-15",
    readTime: "5 min",
    title: "Cómo crear contraseñas fuertes y memorables (2026)",
    description: "Genere contraseñas criptográficamente fuertes. Controle la longitud, los caracteres y la pronunciabilidad.",
    content: strongPasswordsEs,
  },
  pt: {
    slug: "how-to-create-strong-passwords",
    category: "Ferramentas para desenvolvedores",
    date: "2026-04-15",
    readTime: "5 min",
    title: "Como criar senhas fortes e memoráveis (2026)",
    description: "Gere senhas criptograficamente fortes. Controle comprimento, caracteres e pronunciabilidade.",
    content: strongPasswordsPt,
  },
  fr: {
    slug: "how-to-create-strong-passwords",
    category: "Outils pour développeurs",
    date: "2026-04-15",
    readTime: "5 min",
    title: "Comment créer des mots de passe forts et mémorables (2026)",
    description: "Générez des mots de passe cryptographiquement forts. Contrôlez la longueur, les caractères et la prononçabilité.",
    content: strongPasswordsFr,
  },
  de: {
    slug: "how-to-create-strong-passwords",
    category: "Entwickler-Tools",
    date: "2026-04-15",
    readTime: "5 Min",
    title: "Erstellen Sie starke, einprägsame Passwörter (2026)",
    description: "Generieren Sie kryptographisch starke Passwörter. Steuern Sie Länge, Zeichen und Aussprechbarkeit.",
    content: strongPasswordsDe,
  },
};
