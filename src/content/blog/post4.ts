// Blog post: JSON Formatting Best Practices for Developers
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

export const jsonFormattingPost: Record<string, BlogPost> = {
  en: {
    slug: "json-formatting-best-practices",
    category: "Developer Tools",
    date: "2026-02-01",
    readTime: "7 min",
    title: "JSON Formatting Best Practices for Developers",
    description:
      "Learn JSON formatting best practices: avoid common errors, validate, pretty-print, and master APIs with practical tips and real examples.",
    content: `## What is JSON and why does formatting matter?

JSON (JavaScript Object Notation) is the de facto data interchange format of the web. It is lightweight, human-readable, and supported by virtually every programming language. Whether you are building a REST API, storing configuration, or moving data between a frontend and a backend, JSON is almost always the format of choice.

But "human-readable" depends on how you write it. A single line of minified JSON may be 4 KB; the same data pretty-printed with two-space indentation may be 8 KB. Both are valid. The difference is whether the next developer — including future you — can read it at 2 AM during an incident.

Good formatting is not just about aesthetics. It directly affects:

- **Debuggability**: A pretty-printed payload shows structure at a glance. Nested objects are easy to navigate, missing keys are obvious, and typos jump out.
- **Diff readability**: Code reviews on minified JSON are useless. A two-space-indented diff clearly shows which fields changed.
- **Error localization**: When parsing fails, line and column numbers only make sense if the document has a real layout.
- **Collaboration**: A consistent style across a team means nobody wastes time reformatting files before they can work with them.

In short, formatting is a form of communication. Treat your JSON the same way you treat your code.

## The most common JSON errors

Even seasoned developers make these mistakes. They are not syntax errors in JavaScript, which is why they slip through the editor unnoticed.

### Trailing commas

A trailing comma after the last element of an array or object is perfectly valid JavaScript. JSON does not allow it.

\`\`\`json
// INVALID
{
  "name": "Ada",
  "age": 36,
}
\`\`\`

The fix is trivial: remove the comma. Most linters catch this. If yours does not, switch to one that does.

### Single quotes for strings

JSON strings must use double quotes. Single quotes are a JavaScript convention, not a JSON one.

\`\`\`json
// INVALID
{ 'name': 'Ada' }
\`\`\`

This often bites developers who copy a value out of a JavaScript object literal or a Python dictionary rendered with single quotes. Always use double quotes for both keys and string values.

### Unquoted keys

Keys in JSON must be strings, and strings must be quoted.

\`\`\`json
// INVALID
{ name: "Ada" }
\`\`\`

### Comments

JSON does not support comments. \`//\` and \`/* */\` will both fail to parse. If you need annotations, use a sidecar file, a separate \`"_comment"\` field, or migrate to JSON5 or JSONC — but only on the producer side, since most consumers expect strict JSON.

### Mismatched brackets and braces

A missing \`}\` or an extra \`]\` is the most common source of "Unexpected end of JSON input" and similar errors. Pretty-printing is the fastest way to find these: your eyes will spot the imbalance immediately.

## How to validate JSON

Validation falls into two categories: **syntactic** (is this well-formed JSON?) and **semantic** (does this match the schema I expect?).

For syntactic validation, every modern editor has you covered. VS Code highlights malformed JSON in red. The CLI tool \`jq\` will tell you on the first character that fails. Online validators work but be careful with sensitive data — paste only non-sensitive samples.

For semantic validation, you need a JSON Schema (more on that below) or a typed parser in your language of choice. In TypeScript, libraries like \`zod\` or \`io-ts\` let you describe the expected shape and reject anything that does not match. This catches the worst class of bug: the API silently returns a new field, or an old field becomes \`null\`, and your code crashes three layers down.

A good workflow is:

1. Pretty-print incoming JSON while debugging.
2. Validate against a schema at the boundary of your system (controller, API client, message handler).
3. Trust nothing inside the boundary.

## Pretty-printing vs. minification

These are two sides of the same coin, and both are useful — just in different places.

**Pretty-print** (also called "beautify" or "expand") adds indentation and line breaks. Use it for:

- Source files you commit to git
- API responses you inspect during development
- Log entries where you might need to read them later
- Documentation and examples

**Minify** strips all whitespace. Use it for:

- Production API responses
- Tokens and cookies (JWT, session storage)
- Storage in size-constrained databases or caches
- Network payloads where every byte matters

A practical rule: pretty-print in development, minify in production. Most build tools can do this automatically. For ad-hoc work, a free [JSON Formatter](/en/tools/dev/json-format) handles both directions in a single paste.

If you need to compare two JSON documents, a [text diff tool](/en/tools/text/diff) will highlight exactly which fields changed — far more useful than squinting at minified output.

## Working with nested data

Nested objects and arrays are where JSON's expressiveness shines — and where bugs love to hide.

A few principles:

- **Keep nesting shallow.** Three levels is fine. Five levels means you should probably model the data as a flat list with foreign keys, or split it into multiple endpoints.
- **Be consistent with arrays vs. objects.** A field that is sometimes an array and sometimes \`null\` is a common source of \`Cannot read property 'map' of null\`. Decide upfront: if there are zero items, return \`[]\`, not \`null\`.
- **Use stable key ordering when it matters.** JSON does not require key order, but parsers and diff tools behave better when ordering is predictable. Alphabetical is a safe default.
- **Watch out for large arrays.** A 50 MB JSON blob with one million items in an array is technically valid but impossible to stream. Consider NDJSON (one JSON object per line) or a paginated API.

## JSON in APIs: content-type and status codes

If you build HTTP APIs, two headers do most of the work:

- \`Content-Type: application/json\` — tells the client (and any intermediary) what to expect. Forgetting this is the single most common API bug in the wild.
- \`Accept: application/json\` — what the client is willing to receive. Useful for content negotiation.

On the response side, match the status code to the outcome:

- \`200 OK\` — success, body contains the resource or result.
- \`201 Created\` — a new resource was created; the \`Location\` header should point to it.
- \`204 No Content\` — success, no body (common for DELETE).
- \`400 Bad Request\` — the request was malformed (invalid JSON, missing required field).
- \`401 Unauthorized\` — no valid credentials.
- \`403 Forbidden\` — credentials are valid but lack permission.
- \`404 Not Found\` — the resource does not exist.
- \`422 Unprocessable Entity\` — JSON is valid but semantically wrong (e.g., negative age).
- \`500 Internal Server Error\` — something blew up on the server. Never leak stack traces.

A common pattern is to wrap responses in an envelope: \`{ "data": ..., "error": null }\` or \`{ "data": null, "error": { "code": "...", "message": "..." } }\`. This is fine, but not required. Either is better than inconsistent ad-hoc shapes.

## JSON Schema basics

JSON Schema is a vocabulary that lets you describe the shape and constraints of a JSON document. Think of it as a type system for JSON.

A minimal schema:

\`\`\`json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["name", "age"],
  "properties": {
    "name": { "type": "string", "minLength": 1 },
    "age": { "type": "integer", "minimum": 0 }
  }
}
\`\`\`

This says: the document must be an object with a non-empty string \`name\` and a non-negative integer \`age\`. You can extend it with formats (\`"format": "email"\`), enums, regex patterns, and references to other schemas.

Why bother? Validation at the boundary catches bad data before it propagates. It also serves as living documentation: the schema describes what your API actually accepts, not what someone thinks it accepts.

Most languages have a JSON Schema validator. TypeScript tools like \`zod\` are increasingly popular because they generate TypeScript types from the schema for you.

## Common pitfalls with dates, numbers, and special characters

JSON is intentionally minimal. It does not have a date type, and that trips up everyone.

- **Dates**: store them as ISO 8601 strings (\`"2026-02-01T12:00:00Z"\`). Avoid formats like \`"02/01/2026"\` — ambiguous and locale-dependent.
- **Numbers**: JSON numbers are decimal. There is no integer type. Large integers above 2^53 lose precision in JavaScript. For IDs or money, prefer strings.
- **Booleans**: only literal \`true\` and \`false\`. Strings like \`"true"\` will not coerce automatically.
- **Unicode**: JSON strings are Unicode, so emojis and CJK characters are fine. But the escape sequences matter: \`\\n\` is a newline, \`\\\\\` is a backslash, \`\\u0041\` is \`A\`. When in doubt, paste your data into a [JSON Formatter](/en/tools/dev/json-format) and inspect the raw bytes.
- **Null vs. missing**: \`{"age": null}\` and \`{}\` mean different things. Decide which one represents "unknown" in your system, and use it consistently.

## Tools that save your time

A good formatter is one of those tools you do not realize you need until you use one. Our free [JSON Formatter](/en/tools/dev/json-format) runs entirely in your browser — no upload, no signup, no tracking. Paste a minified payload, get a readable tree, copy it back. It validates as it formats, so syntax errors show up inline with a pointer to the offending line.

For comparing two versions of a JSON document — say, before and after a migration — the [text diff tool](/en/tools/text/diff) does the same job for any plain text, with line-by-line highlighting.

Both are part of a broader set of [developer tools](/en/tools/dev) designed for the kind of quick, in-browser utilities that you reach for dozens of times a day.

## Conclusion

JSON formatting is one of those small disciplines that compounds over the course of a project. Pretty-print in development, minify in production. Validate at the boundary. Use schemas when the data is more than a one-off. Store dates as ISO 8601, large numbers as strings, and treat \`null\` with intention.

None of this is glamorous. All of it will save you hours of debugging the next time something goes wrong — and something always goes wrong. The good news is that with a formatter and a schema in your toolkit, the fix is usually a single paste away.`,
  },
  zh: {
    slug: "json-formatting-best-practices",
    category: "开发工具",
    date: "2026-02-01",
    readTime: "7 分钟",
    title: "开发者必读：JSON 格式化最佳实践",
    description:
      "掌握 JSON 格式化最佳实践：避开常见错误、学会校验、格式化与压缩，并配合真实示例搞定 API 数据交互。",
    content: `## 什么是 JSON？为什么格式化很重要？

JSON（JavaScript Object Notation）是 Web 事实上通用的数据交换格式。它轻量、易读，几乎所有编程语言都原生支持。无论你是在构建 REST API、存储配置，还是在前端和后端之间传递数据，JSON 几乎都是默认选择。

但"易读"取决于你如何书写它。同一段数据，最小化（minify）后可能是 4 KB 的单行文本；用两个空格缩进美化（pretty-print）后可能变成 8 KB。两者都有效。区别在于：下一个开发者——也包括未来的你——能不能在凌晨两点的故障现场一眼读懂。

好的格式化不只是美观，它直接影响：

- **可调试性**：美化后的负载一眼就能看出结构，嵌套对象一目了然，缺失的字段、笔误都无处遁形。
- **Diff 可读性**：在最小化的 JSON 上做代码评审毫无意义。两个空格缩进的 diff 能清楚标出哪些字段变了。
- **错误定位**：解析失败时，行号和列号只有在文档有真实排版的前提下才有意义。
- **团队协作**：统一的风格意味着没人需要先把文件重新格式化一遍才能开工。

简单说，格式化是一种沟通方式，请像对待代码一样对待你的 JSON。

## 最常见的 JSON 错误

即便是资深开发者也会犯这些错。它们在 JavaScript 里都是合法语法，所以编辑器不会提醒。

### 末尾多余的逗号

数组或对象最后一个元素后面加逗号，在 JavaScript 里完全合法，但在 JSON 中不允许。

\`\`\`json
// 非法
{
  "name": "Ada",
  "age": 36,
}
\`\`\`

修复很简单：删掉那个逗号。大部分 linter 都能发现，如果你的工具不报，换一个。

### 用单引号包裹字符串

JSON 字符串必须用双引号。单引号是 JavaScript 的约定，不是 JSON 的。

\`\`\`json
// 非法
{ 'name': 'Ada' }
\`\`\`

这种问题经常出现在从 JavaScript 对象字面量或 Python 字典里复制值的时候。键和字符串值都要用双引号。

### 未加引号的键

JSON 的键必须是字符串，字符串必须加引号。

\`\`\`json
// 非法
{ name: "Ada" }
\`\`\`

### 注释

JSON 不支持注释。\`//\` 和 \`/* */\` 都会解析失败。如果你需要注释，要么用 \`"_comment"\` 字段，要么换 JSON5/JSONC——但只在生产端用，因为大多数消费者只认严格 JSON。

### 大括号不匹配

漏写 \`}\` 或多写 \`]\` 是 "Unexpected end of JSON input" 这类错误的最常见来源。美化输出是最快的定位方式：眼睛会立刻发现不对称。

## 如何校验 JSON

校验分两类：**语法层面**（是不是合法 JSON？）和**语义层面**（是否符合我期望的结构？）。

语法校验方面，每个现代编辑器都够用。VS Code 会把不合法 JSON 标红。命令行工具 \`jq\` 会在第一个出错字符处直接报错。在线校验工具能用，但涉及敏感数据时要小心——只粘贴非敏感的样例。

语义校验需要 JSON Schema（下面会讲）或带类型的解析器。在 TypeScript 里，\`zod\`、\`io-ts\` 这类库可以描述期望的形状并拒绝不匹配的数据。它们能抓住最糟糕的那类 bug：API 静默地新增了一个字段，或老字段突然变成 \`null\`，等你的代码在三层之下崩溃时已经太晚。

推荐的工作流：

1. 调试时把入参 JSON 美化一下。
2. 在系统边界（控制器、API 客户端、消息处理器）用 schema 校验。
3. 边界内部一律不再信任。

## 美化 vs. 压缩

它们是同一枚硬币的两面，都有用，只是用在不同地方。

**美化**（也称 beautify、expand）会加缩进和换行。适合：

- 提交到 git 的源文件
- 开发期要查看的 API 响应
- 以后可能要回看的日志
- 文档和示例

**压缩**会去掉所有空白。适合：

- 生产环境的 API 响应
- Token 和 Cookie（JWT、Session）
- 写入空间有限的数据库或缓存
- 对每个字节都斤斤计较的网络负载

一条经验法则：开发期美化，生产期压缩。大部分构建工具可以自动完成。临时性工作用免费的 [JSON 格式化工具](/zh/tools/dev/json-format) 一次粘贴就能双向转换。

如果你要对比两份 JSON 文档，用 [文本 Diff 工具](/zh/tools/text/diff) 能高亮标出具体哪些字段变了——比盯着压缩后的输出猜要强太多。

## 处理嵌套数据

嵌套对象和数组是 JSON 表现力最强的地方——也是 bug 最爱藏身的地方。

几个原则：

- **保持浅层嵌套**。三层以内都没问题，五层就该考虑拆成扁平的列表加外键，或者拆成多个接口。
- **数组与对象保持一致**。有时是数组有时是 \`null\` 的字段是 \`Cannot read property 'map' of null\` 的常见来源。事先定好：没数据就返回 \`[]\`，不要返回 \`null\`。
- **需要时让键的顺序稳定**。JSON 不规定键的顺序，但解析器和 diff 工具在顺序可预测时表现更好。按字母排序是个稳妥的默认。
- **警惕超大数组**。单个数组里塞一百万条 50 MB 的 JSON 字段值，技术上合法但无法流式处理。考虑改用 NDJSON（每行一个 JSON 对象）或分页 API。

## API 中的 JSON：Content-Type 与状态码

如果你做 HTTP API，两个请求头承担了大部分工作：

- \`Content-Type: application/json\` —— 告诉客户端（以及中间件）接下来是什么内容。忘了加这个，是线上最常见的 API bug。
- \`Accept: application/json\` —— 客户端能接收什么类型。用于内容协商。

响应端，状态码要对得上结果：

- \`200 OK\` —— 成功，body 是资源或结果。
- \`201 Created\` —— 新建了资源，\`Location\` 头应指向它。
- \`204 No Content\` —— 成功但没有 body（DELETE 常见）。
- \`400 Bad Request\` —— 请求格式错误（JSON 非法、缺少必填字段）。
- \`401 Unauthorized\` —— 没有有效凭证。
- \`403 Forbidden\` —— 凭证有效但权限不够。
- \`404 Not Found\` —— 资源不存在。
- \`422 Unprocessable Entity\` —— JSON 合法但语义不对（比如年龄为负数）。
- \`500 Internal Server Error\` —— 服务端炸了，绝不要把堆栈泄露出去。

一种常见做法是把响应包一层：\`{ "data": ..., "error": null }\` 或 \`{ "data": null, "error": { "code": "...", "message": "..." } }\`。这种结构没问题，但不是必须的。无论选哪种，都比每次临时拍脑袋不一致要强。

## JSON Schema 入门

JSON Schema 是一套用来描述 JSON 文档形状和约束的词汇。可以把它理解为 JSON 的类型系统。

一个最小化的 schema：

\`\`\`json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["name", "age"],
  "properties": {
    "name": { "type": "string", "minLength": 1 },
    "age": { "type": "integer", "minimum": 0 }
  }
}
\`\`\`

它说明：文档必须是包含非空字符串 \`name\` 和非负整数 \`age\` 的对象。你还可以扩展 format（\`"format": "email"\`）、枚举、正则以及引用其他 schema。

为什么要费这个劲？在边界处校验，能在脏数据扩散之前拦住它。它也充当活的文档：schema 描述的是你的 API 实际接受什么，而不是某人以为它接受什么。

大部分语言都有 JSON Schema 校验器。TypeScript 生态里 \`zod\` 这类工具越来越流行，因为它们能从 schema 直接生成 TypeScript 类型。

## 日期、数字、特殊字符的常见坑

JSON 故意做得很克制：它没有日期类型，所以人人都会踩坑。

- **日期**：存 ISO 8601 字符串（\`"2026-02-01T12:00:00Z"\`）。不要用 \`"02/01/2026"\` 这种——有歧义还依赖语言环境。
- **数字**：JSON 数字都是十进制，没有整数类型。JavaScript 里超过 2^53 的整数会丢精度，ID 或金额最好用字符串。
- **布尔**：只能是字面量 \`true\` 和 \`false\`，写 \`"true"\` 不会自动转换。
- **Unicode**：JSON 字符串是 Unicode，emoji 和中日韩字符都直接能用。但转义序列要清楚：\`\\n\` 是换行，\`\\\\\` 是反斜杠，\`\\u0041\` 是 \`A\`。不确定时，把数据粘到 [JSON 格式化工具](/zh/tools/dev/json-format) 里看原始字节。
- **null 与缺失**：\`{"age": null}\` 和 \`{}\` 含义不同。在你的系统里统一约定"未知"该用哪个。

## 节省时间的工具

好用的格式化工具，是你用过才发现自己离不开的那种。我们免费的 [JSON 格式化工具](/zh/tools/dev/json-format) 完全在浏览器里运行——不上传、不注册、不追踪。粘进去一段压缩负载，立刻得到可读的树结构，复制即可。它一边格式化一边校验，语法错误会直接标注在出错的那一行。

要对比两份 JSON 文档（比如迁移前后的版本），[文本 Diff 工具](/zh/tools/text/diff) 对任何纯文本都好用，逐行高亮差异。

这些都属于 [开发者工具](/zh/tools/dev) 套件的一部分，专为浏览器内一次性、快速的常用操作而设计。

## 结论

JSON 格式化是一个小习惯，但会在整个项目周期里持续复利。开发期美化、生产期压缩。边界处校验。数据不只是临时用就老老实实写 schema。日期用 ISO 8601，大数字用字符串，\`null\` 也要用得有意义。

这些事都不性感，但下次出问题时都能帮你省下数小时的排查——而出问题几乎是必然的。好消息是：手边有一个格式化工具加一份 schema，修复往往只需要一次粘贴。`,
  },
  ja: {
    slug: "json-formatting-best-practices",
    category: "開発者ツール",
    date: "2026-02-01",
    readTime: "7 分",
    title: "開発者のための JSON フォーマットベストプラクティス",
    description:
      "JSON フォーマットのベストプラクティスを解説。よくあるミス、検証方法、整形・圧縮、API 運用のコツを実例で学べます。",
    content: `## JSON とは何か？なぜフォーマットが重要なのか？

JSON（JavaScript Object Notation）は、Web における事実上のデータ交換フォーマットです。軽量で人間が読みやすく、ほぼすべてのプログラミング言語がネイティブにサポートしています。REST API の構築でも、設定の保存でも、フロントエンドとバックエンドのデータ連携でも、JSON は常に第一候補です。

ただし「読みやすい」は書き方次第です。ミニファイ（minify）された 1 行の JSON は 4 KB かもしれません。同じデータを 2 スペースでインデント整形すれば 8 KB になります。どちらも正しい JSON です。違いは、夜中の障害対応で次の開発者——将来の自分を含む——が読めるかどうかです。

良いフォーマットは見た目だけの問題ではありません。直接的に影響します。

- **デバッグのしやすさ**：整形済みのペイロードは一目で構造が分かります。ネストしたオブジェクトも把握しやすく、欠落したキーやタイプミスもすぐに目に入ります。
- **Diff の可読性**：ミニファイ済み JSON のコードレビューには意味がありません。2 スペースインデントの diff なら、どのフィールドが変わったかが一目で分かります。
- **エラーの位置特定**：パースに失敗した時、行番号・列番号はドキュメントが整形されている前提で初めて意味を持ちます。
- **コラボレーション**：チームで一貫したスタイルなら、誰も作業前に再フォーマットする必要がありません。

要するにフォーマットは「コミュニケーション」です。コードと同じように JSON を扱いましょう。

## よくある JSON のエラー

経験豊富な開発者でもやるミスがこちら。JavaScript では合法なため、エディタが警告を出さないことが多いです。

### 末尾のカンマ

配列やオブジェクトの最後の要素に続くカンマは JavaScript では合法ですが、JSON では許されません。

\`\`\`json
// 無効
{
  "name": "Ada",
  "age": 36,
}
\`\`\`

修正は単純、そのカンマを消すだけです。多くの linter が検出します。検出しないなら linter を変えましょう。

### 文字列がシングルクォート

JSON の文字列はダブルクォートでなければなりません。シングルクォートは JavaScript の流儀であって JSON の流儀ではありません。

\`\`\`json
// 無効
{ 'name': 'Ada' }
\`\`\`

JavaScript のオブジェクトリテラルや、シングルクォートでレンダリングされた Python の辞書から値をコピーした時にやりがちです。キーも文字列値も必ずダブルクォートにしましょう。

### キーがクォートされていない

JSON のキーは文字列でなければならず、文字列はクォート必須です。

\`\`\`json
// 無効
{ name: "Ada" }
\`\`\`

### コメント

JSON はコメントをサポートしません。\`//\` も \`/* */\` もパースに失敗します。注釈を残したいなら、\`"_comment"\` フィールドを使うか、JSON5 / JSONC に乗り換えてください——ただし、消費者が厳格 JSON を期待する可能性があるなら送信側だけにしましょう。

### 括弧の不一致

\`}\` の書き忘れや \`]\` の過不足は「Unexpected end of JSON input」のようなエラーの原因第一位です。整形すれば一瞬で気づけます。

## JSON を検証する方法

検証には 2 種類あります。**構文的**（整形式か？）と**意味的**（期待する構造と一致するか？）。

構文検証はモダンなエディタで十分です。VS Code は不正な JSON を赤くハイライトします。CLI の \`jq\` は最初の失敗文字でエラーを返してくれます。オンラインのバリデータは便利ですが、機微なデータには注意。非機微なサンプルだけを貼り付けましょう。

意味検証には JSON Schema（後述）か、型付きのパーサが必要です。TypeScript では \`zod\` や \`io-ts\` といったライブラリで期待する形を宣言し、合わないデータを弾けます。これらは最悪クラスのバグ——API が新しいフィールドを返し始めたり、既存フィールドが \`null\` になり、3 レイヤ下でクラッシュする——を境界で捕まえられます。

おすすめのワークフロー：

1. デバッグ中は受け取った JSON を整形する。
2. システムの境界（コントローラ、API クライアント、メッセージハンドラ）でスキーマ検証する。
3. 内部では一切信用しない。

## 整形と圧縮の使い分け

コインの裏表で、どちらも便利です。場所が違うだけです。

**整形（pretty-print）**：インデントと改行を加えます。用途：

- git にコミットするソースファイル
- 開発中に確認する API レスポンス
- 後から見直す可能性のあるログ
- ドキュメントやサンプル

**圧縮（minify）**：すべての空白を削除します。用途：

- 本番 API レスポンス
- トークンや Cookie（JWT、セッション）
- 容量制限のある DB やキャッシュ
- 1 バイトでも削りたいネットワークペイロード

経験則：開発中は整形、本番では圧縮。大抵のビルドツールは自動でやってくれます。アドホックな作業は、無料の [JSON フォーマッタ](/ja/tools/dev/json-format) を一度貼り付ければ双方向に変換できます。

2 つの JSON 文書を比較したいなら、[テキスト diff ツール](/ja/tools/text/diff) を使えばどのフィールドが変わったかを正確にハイライトできます。ミニファイ済み出力と睨めっこするより圧倒的に楽です。

## ネストしたデータの扱い

ネストされたオブジェクトと配列は、JSON の表現力が最も輝く場所——同時にバグが好んで潜む場所でもあります。

原則をいくつか：

- **ネストは浅く**。3 階層までなら OK、5 階層になったら外部キーでフラットにしたリストに分解するか、複数のエンドポイントに分けましょう。
- **配列と null の扱いを統一**。フィールドが配列になったり \`null\` になったりすると、\`Cannot read property 'map' of null\` の温床です。事前に決める：要素がなければ \`[]\` を返す、\`null\` は使わない。
- **必要ならキー順を安定させる**。JSON はキー順を規定しませんが、順序が予測できる方がパーサや diff ツールの挙動が安定します。アルファベット順は安全なデフォルトです。
- **巨大配列に注意**。100 万件・50 MB の JSON 配列は技術的に有効でもストリーミングできません。NDJSON（1 行 1 JSON オブジェクト）やページネーション API を検討しましょう。

## API における JSON：Content-Type とステータスコード

HTTP API を作るなら、2 つのヘッダでほぼ完結します。

- \`Content-Type: application/json\` —— クライアント（と中間層）にこれから何を返すか伝える。これを付け忘れるのは、本番で最も多い API バグです。
- \`Accept: application/json\` —— クライアントが受信できる形式。コンテンツネゴシエーションに使います。

レスポンス側は、ステータスコードと結果を一致させましょう。

- \`200 OK\` —— 成功、body にリソースや結果。
- \`201 Created\` —— 新規作成、\`Location\` ヘッダで指し示す。
- \`204 No Content\` —— 成功、body なし（DELETE で一般的）。
- \`400 Bad Request\` —— リクエストが不正（JSON 不正、必須フィールド欠落）。
- \`401 Unauthorized\` —— 有効な資格情報なし。
- \`403 Forbidden\` —— 資格情報は有効だが権限不足。
- \`404 Not Found\` —— リソースが存在しない。
- \`422 Unprocessable Entity\` —— JSON は合法だが意味的に NG（例：年齢が負数）。
- \`500 Internal Server Error\` —— サーバ側で何かが壊れた。スタックトレースを絶対に漏らさない。

よくあるパターンはレスポンスを包むこと：\`{ "data": ..., "error": null }\` または \`{ "data": null, "error": { "code": "...", "message": "..." } }\`。この形は良いですが必須ではありません。どちらかに統一する方が、都度アドホックに形を変えるよりずっと良いです。

## JSON Schema 基礎

JSON Schema は JSON 文書の形と制約を記述するための語彙です。JSON の型システムと思えばいいでしょう。

最小のスキーマ：

\`\`\`json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["name", "age"],
  "properties": {
    "name": { "type": "string", "minLength": 1 },
    "age": { "type": "integer", "minimum": 0 }
  }
}
\`\`\`

これは「ドキュメントは非空文字列の \`name\` と非負整数の \`age\` を持つオブジェクトでなければならない」という意味です。format（\`"format": "email"\`）、enum、正規表現、他のスキーマへの参照で拡張できます。

なぜ必要か？境界で検証すれば、汚染データが拡散する前に止められます。スキーマは「動くドキュメント」としても機能し、API が実際に受け付ける形を、誰かの思い込みではなく正確に記述できます。

ほとんどの言語に JSON Schema バリデータがあります。TypeScript では \`zod\` のようなツールが人気で、スキーマから TypeScript 型を自動生成してくれます。

## 日付・数値・特殊文字の落とし穴

JSON は意図的にミニマルです。日付型がないため、誰もが一度はハマります。

- **日付**：ISO 8601 文字列で保存（\`"2026-02-01T12:00:00Z"\`）。\`"02/01/2026"\` のような表記は曖昧でロケール依存なので NG。
- **数値**：JSON の数値は十進数で整数型はありません。JavaScript では 2^53 を超える整数は精度が落ちます。ID や金額は文字列が無難。
- **ブール**：リテラル \`true\` / \`false\` のみ。\`"true"\` という文字列は自動で変換されません。
- **Unicode**：JSON 文字列は Unicode なので、絵文字も CJK もそのまま使えます。ただしエスケープは正確に：\`\\n\` は改行、\`\\\\\` はバックスラッシュ、\`\\u0041\` は \`A\`。迷ったら [JSON フォーマッタ](/ja/tools/dev/json-format) に貼り付けて生バイトを確認しましょう。
- **null と欠落**：\`{"age": null}\` と \`{}\` は別物です。システム内で「不明」をどちらで表現するか統一しましょう。

## 時間を節約するツール

良いフォーマッタは、使ってみて初めて手放せなくなるツールです。私たちの無料 [JSON フォーマッタ](/ja/tools/dev/json-format) はブラウザ内だけで動作します——アップロードなし、登録なし、追跡なし。ミニファイ済みペイロードを貼り付けて、整形済みのツリーを受け取り、コピーするだけ。整形と同時に検証するので、構文エラーは行単位でインライン表示されます。

JSON 文書の 2 バージョン（例：移行前後）を比較するなら、[テキスト diff ツール](/ja/tools/text/diff) も同じ役割を汎用テキストに対して果たし、行単位で差分をハイライトします。

いずれも、毎日何度も手が届くよう設計された [開発者ツール](/ja/tools/dev) 群の一部です。

## まとめ

JSON フォーマットは小さな習慣ですが、プロジェクト期間全体にわたって複利で効いてきます。開発中は整形、本番では圧縮。境界で検証。一度限りのデータでなければスキーマを書く。日付は ISO 8601、大きな数値は文字列、\`null\` は意図的に使う。

どれも派手ではありません。しかし次回何かが壊れた時、何時間ものデバッグを節約してくれます——そして何かは壊れるものです。良いニュースは、フォーマッタとスキーマが手元にあれば、修正はたいてい 1 回のペーストで済むということです。`,
  },
  es: {
    slug: "json-formatting-best-practices",
    category: "Herramientas de desarrollador",
    date: "2026-02-01",
    readTime: "7 min",
    title: "Buenas prácticas de formato JSON para desarrolladores",
    description:
      "Aprende las mejores prácticas de formato JSON: evita errores comunes, valida, embellece y domina las APIs con ejemplos reales.",
    content: `## ¿Qué es JSON y por qué importa el formato?

JSON (JavaScript Object Notation) es el formato de intercambio de datos de facto en la web. Es ligero, legible y prácticamente todos los lenguajes lo soportan de forma nativa. Tanto si construyes una API REST como si guardas configuración o mueves datos entre el frontend y el backend, JSON es casi siempre la opción por defecto.

Pero "legible" depende de cómo lo escribas. Una sola línea de JSON minificado puede ocupar 4 KB; los mismos datos con indentación de dos espacios pueden ocupar 8 KB. Ambos son válidos. La diferencia es si el próximo desarrollador —incluido tú mismo en el futuro— podrá leerlo a las 2 de la madrugada durante una incidencia.

Un buen formato no va solo de estética. Afecta directamente a:

- **Depurabilidad**: un payload embellecido muestra la estructura de un vistazo. Los objetos anidados se navegan fácil, las claves que faltan saltan a la vista y las erratas se notan.
- **Legibilidad del diff**: revisar código sobre JSON minificado es inútil. Un diff con indentación de dos espacios muestra claramente qué campos cambiaron.
- **Localización de errores**: cuando el parseo falla, los números de línea y columna solo tienen sentido si el documento tiene un diseño real.
- **Colaboración**: un estilo coherente en el equipo evita que nadie pierda tiempo reformateando archivos antes de poder trabajar con ellos.

En resumen, formatear es una forma de comunicación. Trata tu JSON como tratas tu código.

## Los errores de JSON más comunes

Incluso desarrolladores con experiencia cometen estos fallos. Son sintaxis válida en JavaScript, por eso pasan desapercibidos en el editor.

### Comas finales

Una coma extra tras el último elemento de un array u objeto es perfectamente válida en JavaScript. JSON no la permite.

\`\`\`json
// INVÁLIDO
{
  "name": "Ada",
  "age": 36,
}
\`\`\`

La solución es trivial: quita la coma. La mayoría de los linters lo detectan. Si el tuyo no, cambia a uno que sí.

### Comillas simples para strings

Los strings en JSON deben ir con comillas dobles. Las comillas simples son convención de JavaScript, no de JSON.

\`\`\`json
// INVÁLIDO
{ 'name': 'Ada' }
\`\`\`

Esto pasa a menudo al copiar valores de un literal de objeto en JavaScript o de un diccionario en Python. Usa siempre comillas dobles, tanto para claves como para valores de tipo string.

### Claves sin comillas

Las claves en JSON deben ser strings, y los strings deben ir entre comillas.

\`\`\`json
// INVÁLIDO
{ name: "Ada" }
\`\`\`

### Comentarios

JSON no soporta comentarios. Ni \`//\` ni \`/* */\` se parsearán. Si necesitas anotaciones, usa un campo \`"_comment"\`, un fichero auxiliar o pasa a JSON5/JSONC — pero solo en el lado productor, porque la mayoría de consumidores esperan JSON estricto.

### Llaves y corchetes descompensados

Una \`}\` que falta o un \`]\` de más es la causa más común de "Unexpected end of JSON input" y similares. Embellecer es la forma más rápida de detectarlo: tu ojo lo verá al instante.

## Cómo validar JSON

Validar se divide en dos categorías: **sintáctica** (¿es un JSON bien formado?) y **semántica** (¿coincide con el esquema que espero?).

Para validación sintáctica, cualquier editor moderno te vale. VS Code resalta en rojo el JSON malformado. La herramienta CLI \`jq\` te dirá en el primer carácter que falla. Los validadores online funcionan, pero ve con cuidado con datos sensibles — pega solo muestras no sensibles.

Para validación semántica necesitas un JSON Schema (más abajo) o un parser tipado en tu lenguaje. En TypeScript, librerías como \`zod\` o \`io-ts\` permiten describir la forma esperada y rechazar lo que no encaje. Esto atrapa la peor clase de bug: que la API devuelva silenciosamente un campo nuevo, o que un campo antiguo pase a ser \`null\`, y tu código reviente tres capas más abajo.

Un buen flujo de trabajo:

1. Embellece el JSON entrante mientras depuras.
2. Valida contra un esquema en la frontera de tu sistema (controlador, cliente de API, handler de mensajes).
3. No confíes en nada dentro de la frontera.

## Embellecer vs. minificar

Son las dos caras de la misma moneda, y las dos son útiles — solo que en sitios distintos.

**Embellecer** (también "beautify" o "expand") añade indentación y saltos de línea. Úsalo para:

- Ficheros fuente que subes a git
- Respuestas de API que inspeccionas en desarrollo
- Entradas de log que podrías necesitar leer más tarde
- Documentación y ejemplos

**Minificar** elimina todos los espacios. Úsalo para:

- Respuestas de API en producción
- Tokens y cookies (JWT, almacenamiento de sesión)
- Almacenamiento en bases de datos o cachés con espacio limitado
- Cargas de red donde cada byte cuenta

Regla práctica: embellece en desarrollo, minifica en producción. La mayoría de herramientas de build lo hacen automáticamente. Para tareas puntuales, un [formateador de JSON](/es/tools/dev/json-format) gratuito hace ambas direcciones con solo pegar.

Si necesitas comparar dos documentos JSON, una [herramienta de diff de texto](/es/tools/text/diff) resaltará exactamente qué campos cambiaron — mucho más útil que mirar fijamente la salida minificada.

## Trabajar con datos anidados

Los objetos y arrays anidados son donde brilla la expresividad de JSON — y donde se esconden los bugs.

Algunos principios:

- **Mantén el anidamiento poco profundo.** Tres niveles está bien. Cinco niveles significa que probablemente deberías modelar los datos como una lista plana con claves foráneas, o dividir en varios endpoints.
- **Sé coherente entre arrays y objetos.** Un campo que a veces es array y a veces \`null\` es causa común de \`Cannot read property 'map' of null\`. Decide de antemano: si no hay elementos, devuelve \`[]\`, no \`null\`.
- **Usa un orden de claves estable cuando importe.** JSON no exige orden, pero los parsers y herramientas de diff se comportan mejor con un orden predecible. Alfabético es un valor por defecto seguro.
- **Cuidado con arrays enormes.** Un blob JSON de 50 MB con un millón de elementos en un array es técnicamente válido pero imposible de streamear. Considera NDJSON (un objeto JSON por línea) o una API paginada.

## JSON en APIs: content-type y códigos de estado

Si construyes APIs HTTP, dos cabeceras hacen casi todo el trabajo:

- \`Content-Type: application/json\` — indica al cliente (y a cualquier intermediario) qué esperar. Olvidarla es el bug de API más común en producción.
- \`Accept: application/json\` — lo que el cliente está dispuesto a recibir. Útil para negociación de contenido.

En la respuesta, haz coincidir el código de estado con el resultado:

- \`200 OK\` — éxito, el cuerpo contiene el recurso o resultado.
- \`201 Created\` — se creó un nuevo recurso; la cabecera \`Location\` debería apuntar a él.
- \`204 No Content\` — éxito, sin cuerpo (frecuente en DELETE).
- \`400 Bad Request\` — la petición está mal formada (JSON inválido, falta un campo obligatorio).
- \`401 Unauthorized\` — sin credenciales válidas.
- \`403 Forbidden\` — credenciales válidas pero sin permiso.
- \`404 Not Found\` — el recurso no existe.
- \`422 Unprocessable Entity\` — JSON válido pero semánticamente incorrecto (p. ej., edad negativa).
- \`500 Internal Server Error\` — algo explotó en el servidor. Nunca filtres stack traces.

Un patrón habitual es envolver respuestas: \`{ "data": ..., "error": null }\` o \`{ "data": null, "error": { "code": "...", "message": "..." } }\`. Está bien, pero no es obligatorio. Cualquiera de las dos opciones es mejor que formas incoherentes improvisadas.

## Básico de JSON Schema

JSON Schema es un vocabulario que permite describir la forma y restricciones de un documento JSON. Piensa en él como el sistema de tipos de JSON.

Un esquema mínimo:

\`\`\`json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["name", "age"],
  "properties": {
    "name": { "type": "string", "minLength": 1 },
    "age": { "type": "integer", "minimum": 0 }
  }
}
\`\`\`

Dice: el documento debe ser un objeto con un \`name\` no vacío y un \`age\` entero no negativo. Puedes extenderlo con formatos (\`"format": "email"\`), enums, regex y referencias a otros esquemas.

¿Para qué molestarse? Validar en la frontera atrapa datos malos antes de que se propaguen. También sirve como documentación viva: el esquema describe lo que tu API realmente acepta, no lo que alguien cree que acepta.

Casi todos los lenguajes tienen un validador de JSON Schema. En TypeScript, herramientas como \`zod\` son cada vez más populares porque generan tipos TypeScript a partir del esquema por ti.

## Problemas frecuentes con fechas, números y caracteres especiales

JSON es deliberadamente minimalista. No tiene tipo fecha, y eso confunde a todo el mundo.

- **Fechas**: guárdalas como strings ISO 8601 (\`"2026-02-01T12:00:00Z"\`). Evita formatos como \`"02/01/2026"\` — ambiguos y dependientes de la configuración regional.
- **Números**: los números en JSON son decimales. No hay tipo entero. En JavaScript, los enteros por encima de 2^53 pierden precisión. Para IDs o dinero, prefiere strings.
- **Booleanos**: solo los literales \`true\` y \`false\`. Strings como \`"true"\` no se convierten automáticamente.
- **Unicode**: los strings en JSON son Unicode, así que emojis y caracteres CJK funcionan directamente. Pero las secuencias de escape importan: \`\\n\` es salto de línea, \`\\\\\` es barra invertida, \`\\u0041\` es \`A\`. En caso de duda, pega tus datos en un [formateador de JSON](/es/tools/dev/json-format) e inspecciona los bytes.
- **Null vs. ausente**: \`{"age": null}\` y \`{}\` significan cosas distintas. Decide en tu sistema cuál representa "desconocido" y apégate a ello.

## Herramientas que ahorran tiempo

Un buen formateador es de esas herramientas que no sabes que necesitas hasta que la usas. Nuestro [formateador de JSON](/es/tools/dev/json-format) gratuito se ejecuta por completo en el navegador — sin subidas, sin registro, sin tracking. Pega un payload minificado, obtén un árbol legible, cópialo. Valida mientras formatea, así los errores de sintaxis aparecen en línea señalando el carácter problemático.

Para comparar dos versiones de un documento JSON — por ejemplo, antes y después de una migración — la [herramienta de diff de texto](/es/tools/text/diff) hace el mismo trabajo con cualquier texto plano, resaltando línea a línea.

Ambas forman parte de un conjunto más amplio de [herramientas de desarrollador](/es/tools/dev) pensadas para esas utilidades rápidas en el navegador que usas decenas de veces al día.

## Conclusión

El formato JSON es una de esas pequeñas disciplinas que se acumulan a lo largo de un proyecto. Embellece en desarrollo, minifica en producción. Valida en la frontera. Usa esquemas cuando los datos vayan a reutilizarse. Guarda las fechas como ISO 8601, los números grandes como strings, y trata \`null\` con intención.

Nada de esto es glamuroso. Pero todo te ahorrará horas de depuración la próxima vez que algo falle — y algo siempre falla. La buena noticia es que, con un formateador y un esquema a mano, la solución suele estar a un solo pegar.`,
  },
  pt: {
    slug: "json-formatting-best-practices",
    category: "Ferramentas de desenvolvedor",
    date: "2026-02-01",
    readTime: "7 min",
    title: "Boas práticas de formatação JSON para desenvolvedores",
    description:
      "Aprenda boas práticas de formatação JSON: evite erros comuns, valide, embeleze e domine APIs com exemplos práticos e reais.",
    content: `## O que é JSON e por que a formatação importa?

JSON (JavaScript Object Notation) é o formato de troca de dados padrão da web. É leve, legível e praticamente todas as linguagens o suportam nativamente. Seja construindo uma API REST, guardando configuração ou movendo dados entre frontend e backend, JSON é quase sempre a escolha.

Mas "legível" depende de como você escreve. Uma única linha de JSON minificado pode ter 4 KB; os mesmos dados com indentação de dois espaços podem ter 8 KB. Ambos são válidos. A diferença é se o próximo desenvolvedor — incluindo você no futuro — consegue ler às 2 da manhã durante um incidente.

Boa formatação não é só estética. Ela afeta diretamente:

- **Depurabilidade**: um payload embelezado mostra a estrutura de cara. Objetos anidados são fáceis de navegar, chaves faltando saltam aos olhos e erros de digitação se destacam.
- **Legibilidade do diff**: revisar código em JSON minificado é inútil. Um diff indentado com dois espaços mostra claramente quais campos mudaram.
- **Localização de erros**: quando o parse falha, os números de linha e coluna só fazem sentido se o documento tem um layout real.
- **Colaboração**: um estilo consistente no time evita que ninguém perca tempo reformatando arquivos antes de trabalhar com eles.

Em resumo, formatar é uma forma de comunicação. Trate seu JSON como trata seu código.

## Os erros mais comuns em JSON

Até desenvolvedores experientes cometem esses equívocos. Eles são sintaxe válida em JavaScript, por isso passam despercebidos pelo editor.

### Vírgulas no final

Uma vírgula extra após o último elemento de um array ou objeto é perfeitamente válida em JavaScript. JSON não permite.

\`\`\`json
// INVÁLIDO
{
  "name": "Ada",
  "age": 36,
}
\`\`\`

A correção é trivial: remova a vírgula. A maioria dos linters pega isso. Se o seu não pega, troque por um que pegue.

### Aspas simples para strings

Strings em JSON devem usar aspas duplas. Aspas simples são convenção de JavaScript, não de JSON.

\`\`\`json
// INVÁLIDO
{ 'name': 'Ada' }
\`\`\`

Isso acontece com frequência ao copiar valores de um literal de objeto em JavaScript ou de um dicionário em Python. Use sempre aspas duplas, tanto para chaves quanto para valores string.

### Chaves sem aspas

Chaves em JSON precisam ser strings, e strings precisam estar entre aspas.

\`\`\`json
// INVÁLIDO
{ name: "Ada" }
\`\`\`

### Comentários

JSON não suporta comentários. Nem \`//\` nem \`/* */\` serão parseados. Se precisar de anotações, use um campo \`"_comment"\`, um arquivo auxiliar, ou migre para JSON5/JSONC — mas só no lado produtor, porque a maioria dos consumidores espera JSON estrito.

### Chaves e colchetes desbalanceados

Um \`}\` faltando ou um \`]\` a mais é a causa mais comum de "Unexpected end of JSON input" e similares. Embelezar é a forma mais rápida de encontrar: seus olhos percebem o desequilíbrio na hora.

## Como validar JSON

Validação se divide em duas categorias: **sintática** (está bem formado?) e **semântica** (corresponde ao esquema esperado?).

Para validação sintática, qualquer editor moderno resolve. O VS Code destaca em vermelho o JSON malformado. A ferramenta CLI \`jq\` indica erro no primeiro caractere que falhou. Validadores online funcionam, mas tenha cuidado com dados sensíveis — cole apenas amostras não sensíveis.

Para validação semântica, você precisa de um JSON Schema (ver abaixo) ou um parser tipado na sua linguagem. Em TypeScript, bibliotecas como \`zod\` ou \`io-ts\` permitem descrever a forma esperada e rejeitar o que não bate. Isso captura a pior classe de bug: a API retorna silenciosamente um campo novo, ou um campo antigo vira \`null\`, e seu código quebra três camadas abaixo.

Um bom fluxo de trabalho:

1. Embeleze o JSON recebido enquanto depura.
2. Valide contra um esquema na fronteira do sistema (controller, cliente de API, handler de mensagem).
3. Não confie em nada dentro da fronteira.

## Embelezar vs. minificar

São dois lados da mesma moeda, e ambos são úteis — só que em lugares diferentes.

**Embelezar** (também "beautify" ou "expand") adiciona indentação e quebras de linha. Use para:

- Arquivos fonte commitados no git
- Respostas de API que você inspeciona em desenvolvimento
- Entradas de log que talvez precise ler depois
- Documentação e exemplos

**Minificar** remove todos os espaços em branco. Use para:

- Respostas de API em produção
- Tokens e cookies (JWT, armazenamento de sessão)
- Armazenamento em bancos de dados ou caches com pouco espaço
- Cargas de rede onde cada byte conta

Regra prática: embeleze em desenvolvimento, minifique em produção. A maioria das ferramentas de build faz isso automaticamente. Para tarefas pontuais, um [formatador de JSON](/pt/tools/dev/json-format) gratuito resolve as duas direções com um único paste.

Se precisar comparar dois documentos JSON, uma [ferramenta de diff de texto](/pt/tools/text/diff) destaca exatamente quais campos mudaram — bem mais útil do que encarar uma saída minificada.

## Trabalhando com dados aninhados

Objetos e arrays aninhados são onde o JSON brilha — e onde os bugs adoram se esconder.

Alguns princípios:

- **Mantenha o aninhamento raso.** Três níveis está ótimo. Cinco níveis significa que você provavelmente deve modelar os dados como uma lista plana com chaves estrangeiras, ou dividir em vários endpoints.
- **Seja consistente entre arrays e objetos.** Um campo que às vezes é array e às vezes é \`null\` é causa comum de \`Cannot read property 'map' of null\`. Decida antes: se não houver itens, retorne \`[]\`, não \`null\`.
- **Use uma ordem de chaves estável quando importar.** JSON não exige ordem, mas parsers e ferramentas de diff se comportam melhor com ordem previsível. Ordem alfabética é um padrão seguro.
- **Cuidado com arrays gigantes.** Um blob JSON de 50 MB com um milhão de itens em um array é tecnicamente válido, mas impossível de fazer streaming. Considere NDJSON (um objeto JSON por linha) ou uma API paginada.

## JSON em APIs: content-type e códigos de status

Se você constrói APIs HTTP, dois cabeçalhos fazem quase todo o trabalho:

- \`Content-Type: application/json\` — informa ao cliente (e a qualquer intermediário) o que esperar. Esquecê-lo é o bug de API mais comum em produção.
- \`Accept: application/json\` — o que o cliente aceita receber. Útil para negociação de conteúdo.

No lado da resposta, combine o código de status com o resultado:

- \`200 OK\` — sucesso, corpo contém o recurso ou resultado.
- \`201 Created\` — um novo recurso foi criado; o cabeçalho \`Location\` deve apontar para ele.
- \`204 No Content\` — sucesso, sem corpo (comum em DELETE).
- \`400 Bad Request\` — requisição malformada (JSON inválido, campo obrigatório faltando).
- \`401 Unauthorized\` — sem credenciais válidas.
- \`403 Forbidden\` — credenciais válidas, mas sem permissão.
- \`404 Not Found\` — o recurso não existe.
- \`422 Unprocessable Entity\` — JSON válido, mas semanticamente errado (ex.: idade negativa).
- \`500 Internal Server Error\` — algo quebrou no servidor. Nunca exponha stack traces.

Um padrão comum é envelopar as respostas: \`{ "data": ..., "error": null }\` ou \`{ "data": null, "error": { "code": "...", "message": "..." } }\`. Tudo bem, mas não é obrigatório. Qualquer um dos dois é melhor do que formatos improvisados e inconsistentes.

## Básico de JSON Schema

JSON Schema é um vocabulário que permite descrever a forma e as restrições de um documento JSON. Pense nele como o sistema de tipos do JSON.

Um esquema mínimo:

\`\`\`json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["name", "age"],
  "properties": {
    "name": { "type": "string", "minLength": 1 },
    "age": { "type": "integer", "minimum": 0 }
  }
}
\`\`\`

Diz: o documento deve ser um objeto com \`name\` não vazio e \`age\` inteiro não negativo. Você pode estender com formatos (\`"format": "email"\`), enums, regex e referências a outros esquemas.

Por que se dar a esse trabalho? Validar na fronteira impede que dados ruins se propaguem. Também serve como documentação viva: o esquema descreve o que sua API realmente aceita, não o que alguém acha que aceita.

Quase toda linguagem tem um validador de JSON Schema. No ecossistema TypeScript, ferramentas como \`zod\` são cada vez mais populares porque geram tipos TypeScript a partir do esquema para você.

## Armadilhas comuns com datas, números e caracteres especiais

JSON é intencionalmente minimalista. Não tem tipo data, e isso pega todo mundo.

- **Datas**: armazene como strings ISO 8601 (\`"2026-02-01T12:00:00Z"\`). Evite formatos como \`"02/01/2026"\` — ambíguos e dependentes de locale.
- **Números**: números em JSON são decimais. Não existe tipo inteiro. No JavaScript, inteiros acima de 2^53 perdem precisão. Para IDs ou dinheiro, prefira strings.
- **Booleanos**: apenas os literais \`true\` e \`false\`. Strings como \`"true"\` não são convertidas automaticamente.
- **Unicode**: strings em JSON são Unicode, então emojis e caracteres CJK funcionam diretamente. Mas as sequências de escape importam: \`\\n\` é nova linha, \`\\\\\` é barra invertida, \`\\u0041\` é \`A\`. Em caso de dúvida, cole seus dados em um [formatador de JSON](/pt/tools/dev/json-format) e inspecione os bytes brutos.
- **Null vs. ausente**: \`{"age": null}\` e \`{}\` significam coisas diferentes. Decida qual representa "desconhecido" no seu sistema e mantenha o padrão.

## Ferramentas que economizam seu tempo

Um bom formatador é uma daquelas ferramentas que você não percebe que precisa até usar. Nosso [formatador de JSON](/pt/tools/dev/json-format) gratuito roda inteiramente no seu navegador — sem upload, sem cadastro, sem rastreamento. Cole um payload minificado, receba uma árvore legível, copie. Ele valida enquanto formata, então erros de sintaxe aparecem em linha, apontando o caractere problemático.

Para comparar duas versões de um documento JSON — por exemplo, antes e depois de uma migração — a [ferramenta de diff de texto](/pt/tools/text/diff) faz o mesmo trabalho com qualquer texto puro, com destaque linha a linha.

Ambas fazem parte de um conjunto maior de [ferramentas de desenvolvedor](/pt/tools/dev) pensadas para aquelas utilidades rápidas no navegador que você usa dezenas de vezes por dia.

## Conclusão

A formatação de JSON é uma daquelas pequenas disciplinas que se acumulam ao longo de um projeto. Embeleze em desenvolvimento, minifique em produção. Valide na fronteira. Use esquemas quando os dados forem além de um caso pontual. Armazene datas como ISO 8601, números grandes como strings, e trate \`null\` com intenção.

Nada disso é glamoroso. Mas tudo isso vai te poupar horas de depuração na próxima vez que algo der errado — e algo sempre dá errado. A boa notícia é que, com um formatador e um esquema à mão, a correção costuma estar a um único paste de distância.`,
  },
  fr: {
    slug: "json-formatting-best-practices",
    category: "Outils de développeur",
    date: "2026-02-01",
    readTime: "7 min",
    title: "Bonnes pratiques de formatage JSON pour les développeurs",
    description:
      "Maîtrisez les bonnes pratiques JSON : évitez les erreurs courantes, validez, embellissez et domptez les API avec des exemples concrets.",
    content: `## Qu'est-ce que JSON et pourquoi le formatage compte ?

JSON (JavaScript Object Notation) est le format d'échange de données de facto du web. Il est léger, lisible, et quasiment tous les langages le prennent en charge nativement. Que vous construisiez une API REST, stockiez de la configuration ou fassiez transiter des données entre un frontend et un backend, JSON est presque toujours le choix par défaut.

Mais « lisible » dépend de la manière dont vous l'écrivez. Une seule ligne de JSON minifié peut faire 4 Ko ; les mêmes données joliment indentées avec deux espaces peuvent faire 8 Ko. Les deux sont valides. La différence, c'est si le prochain développeur — vous-même y compris — pourra le lire à 2 h du matin pendant un incident.

Un bon formatage n'est pas qu'une question d'esthétique. Il impacte directement :

- **La débogabilité** : un payload joliment formaté révèle la structure d'un coup d'œil. Les objets imbriqués se parcourent facilement, les clés manquantes sautent aux yeux, et les fautes de frappe se voient immédiatement.
- **La lisibilité du diff** : relire du code sur du JSON minifié est inutile. Un diff avec deux espaces d'indentation montre clairement quels champs ont changé.
- **La localisation des erreurs** : quand le parsing échoue, les numéros de ligne et de colonne n'ont de sens que si le document a une mise en page réelle.
- **La collaboration** : un style cohérent dans l'équipe évite à quiconque de perdre du temps à reformater des fichiers avant de pouvoir travailler dessus.

En résumé, le formatage est une forme de communication. Traitez votre JSON comme vous traitez votre code.

## Les erreurs JSON les plus courantes

Même des développeurs chevronnés font ces fautes. Elles sont valides en JavaScript, c'est pourquoi l'éditeur ne les signale pas.

### Virgules traînantes

Une virgule après le dernier élément d'un tableau ou d'un objet est parfaitement valide en JavaScript. JSON ne l'autorise pas.

\`\`\`json
// INVALIDE
{
  "name": "Ada",
  "age": 36,
}
\`\`\`

La correction est triviale : retirez la virgule. La plupart des linters la détectent. Si le vôtre ne le fait pas, changez-en.

### Guillemets simples pour les chaînes

Les chaînes JSON doivent utiliser des guillemets doubles. Les guillemets simples sont une convention JavaScript, pas JSON.

\`\`\`json
// INVALIDE
{ 'name': 'Ada' }
\`\`\`

On tombe souvent dans ce piège en copiant une valeur depuis un littéral d'objet JavaScript ou un dictionnaire Python affiché avec des guillemets simples. Utilisez toujours des guillemets doubles, pour les clés comme pour les valeurs textuelles.

### Clés non entourées de guillemets

Les clés JSON doivent être des chaînes, et les chaînes doivent être entre guillemets.

\`\`\`json
// INVALIDE
{ name: "Ada" }
\`\`\`

### Commentaires

JSON ne supporte pas les commentaires. Ni \`//\` ni \`/* */\` ne seront parsés. Si vous avez besoin d'annotations, utilisez un champ \`"_comment"\`, un fichier d'accompagnement, ou passez à JSON5/JSONC — mais uniquement côté producteur, car la plupart des consommateurs attendent du JSON strict.

### Accolades et crochets dépareillés

Un \`}\` manquant ou un \`]\` en trop est la cause la plus fréquente de « Unexpected end of JSON input » et autres erreurs similaires. Embellir est la façon la plus rapide de les repérer : vos yeux verront le déséquilibre immédiatement.

## Comment valider du JSON

La validation se décline en deux catégories : **syntaxique** (est-ce du JSON bien formé ?) et **sémantique** (correspond-il au schéma attendu ?).

Pour la validation syntaxique, n'importe quel éditeur moderne fait le travail. VS Code surligne en rouge le JSON malformé. L'outil CLI \`jq\` vous indique dès le premier caractère fautif. Les validateurs en ligne fonctionnent, mais attention aux données sensibles — ne collez que des échantillons non sensibles.

Pour la validation sémantique, il vous faut un JSON Schema (voir plus bas) ou un parseur typé dans votre langage. En TypeScript, des bibliothèques comme \`zod\` ou \`io-ts\` permettent de décrire la forme attendue et de rejeter tout ce qui ne correspond pas. Cela attrape la pire classe de bug : l'API renvoie silencieusement un nouveau champ, ou un ancien champ devient \`null\`, et votre code plante trois niveaux plus bas.

Un bon flux de travail :

1. Embellissez le JSON entrant pendant le débogage.
2. Validez par rapport à un schéma à la frontière de votre système (contrôleur, client API, gestionnaire de messages).
3. Ne faites confiance à rien à l'intérieur de la frontière.

## Embellir ou minifier

Ce sont les deux faces d'une même pièce, et les deux sont utiles — simplement à des endroits différents.

**Embellir** (aussi « beautify » ou « expand ») ajoute l'indentation et les sauts de ligne. À utiliser pour :

- Les fichiers source versionnés dans git
- Les réponses d'API que vous inspectez en développement
- Les entrées de log que vous pourriez avoir à relire
- La documentation et les exemples

**Minifier** supprime tous les espaces. À utiliser pour :

- Les réponses d'API en production
- Les tokens et cookies (JWT, stockage de session)
- Le stockage dans des bases ou caches à l'espace limité
- Les charges réseau où chaque byte compte

Règle pratique : embellir en développement, minifier en production. La plupart des outils de build le font automatiquement. Pour le ponctuel, un [formateur JSON](/fr/tools/dev/json-format) gratuit gère les deux directions en un seul copier-coller.

Pour comparer deux documents JSON, un [outil de diff texte](/fr/tools/text/diff) mettra en évidence exactement les champs qui ont changé — bien plus utile que de plisser les yeux sur une sortie minifiée.

## Travailler avec des données imbriquées

Les objets et tableaux imbriqués sont l'endroit où brille l'expressivité de JSON — et où les bugs aiment se cacher.

Quelques principes :

- **Gardez un imbrication peu profonde.** Trois niveaux, c'est bien. Cinq niveaux, il faut probablement modéliser les données sous forme de liste plate avec des clés étrangères, ou répartir sur plusieurs endpoints.
- **Soyez cohérent entre tableaux et objets.** Un champ qui est tantôt un tableau, tantôt \`null\`, est une source classique de \`Cannot read property 'map' of null\`. Décidez à l'avance : s'il n'y a pas d'éléments, renvoyez \`[]\`, pas \`null\`.
- **Utilisez un ordre de clés stable quand cela compte.** JSON n'impose pas l'ordre des clés, mais les parseurs et outils de diff se comportent mieux avec un ordre prévisible. L'alphabétique est une valeur par défaut sûre.
- **Méfiez-vous des très grands tableaux.** Un blob JSON de 50 Mo contenant un million d'éléments dans un tableau est techniquement valide mais impossible à streamer. Envisagez NDJSON (un objet JSON par ligne) ou une API paginée.

## JSON dans les API : content-type et codes de statut

Si vous construisez des API HTTP, deux en-têtes font presque tout le travail :

- \`Content-Type: application/json\` — indique au client (et à tout intermédiaire) à quoi s'attendre. L'oublier est le bug d'API le plus fréquent en production.
- \`Accept: application/json\` — ce que le client est prêt à recevoir. Utile pour la négociation de contenu.

Côté réponse, faites correspondre le code de statut au résultat :

- \`200 OK\` — succès, le corps contient la ressource ou le résultat.
- \`201 Created\` — une nouvelle ressource a été créée ; l'en-tête \`Location\` doit la pointer.
- \`204 No Content\` — succès, pas de corps (fréquent pour DELETE).
- \`400 Bad Request\` — la requête est mal formée (JSON invalide, champ requis manquant).
- \`401 Unauthorized\` — pas d'identifiants valides.
- \`403 Forbidden\` — identifiants valides mais droits insuffisants.
- \`404 Not Found\` — la ressource n'existe pas.
- \`422 Unprocessable Entity\` — JSON valide mais sémantiquement incorrect (ex. âge négatif).
- \`500 Internal Server Error\` — quelque chose a explosé côté serveur. Ne jamais exposer la stack trace.

Un schéma courant consiste à envelopper les réponses : \`{ "data": ..., "error": null }\` ou \`{ "data": null, "error": { "code": "...", "message": "..." } }\`. C'est bien, mais pas obligatoire. L'un ou l'autre vaut mieux que des formes ad hoc incohérentes.

## Bases de JSON Schema

JSON Schema est un vocabulaire qui permet de décrire la forme et les contraintes d'un document JSON. Pensez-y comme au système de types de JSON.

Un schéma minimal :

\`\`\`json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["name", "age"],
  "properties": {
    "name": { "type": "string", "minLength": 1 },
    "age": { "type": "integer", "minimum": 0 }
  }
}
\`\`\`

Cela dit : le document doit être un objet avec un \`name\` non vide et un \`age\` entier non négatif. On peut l'étendre avec des formats (\`"format": "email"\`), des enums, des regex et des références à d'autres schémas.

Pourquoi s'embêter ? Valider à la frontière empêche les données douteuses de se propager. Le schéma sert aussi de documentation vivante : il décrit ce que votre API accepte réellement, pas ce que quelqu'un croit qu'elle accepte.

Quasiment tous les langages disposent d'un validateur JSON Schema. Dans l'écosystème TypeScript, des outils comme \`zod\` sont de plus en plus populaires car ils génèrent pour vous les types TypeScript à partir du schéma.

## Pièges classiques avec dates, nombres et caractères spéciaux

JSON est volontairement minimaliste. Il n'a pas de type date, et ça piége tout le monde.

- **Dates** : stockez-les en chaînes ISO 8601 (\`"2026-02-01T12:00:00Z"\`). Évitez les formats type \`"02/01/2026"\` — ambigus et dépendants de la locale.
- **Nombres** : les nombres JSON sont décimaux. Il n'existe pas de type entier. En JavaScript, les entiers au-dessus de 2^53 perdent en précision. Pour des ID ou des montants, préférez les chaînes.
- **Booléens** : uniquement les littéraux \`true\` et \`false\`. Une chaîne comme \`"true"\` n'est pas convertie automatiquement.
- **Unicode** : les chaînes JSON sont Unicode, donc les emojis et les caractères CJK passent directement. Mais les séquences d'échappement comptent : \`\\n\` est un saut de ligne, \`\\\\\` est un antislash, \`\\u0041\` est \`A\`. En cas de doute, collez vos données dans un [formateur JSON](/fr/tools/dev/json-format) et inspectez les octets bruts.
- **Null vs. absent** : \`{"age": null}\` et \`{}\` ne veulent pas dire la même chose. Décidez dans votre système lequel représente « inconnu », et tenez-vous-y.

## Des outils qui vous font gagner du temps

Un bon formateur est l'un de ces outils dont on ne réalise pas le besoin avant d'y avoir goûté. Notre [formateur JSON](/fr/tools/dev/json-format) gratuit s'exécute entièrement dans votre navigateur — pas d'envoi, pas d'inscription, pas de pistage. Collez un payload minifié, obtenez un arbre lisible, recopiez. Il valide en même temps qu'il formate, donc les erreurs de syntaxe apparaissent en ligne, avec un pointeur sur le caractère fautif.

Pour comparer deux versions d'un document JSON — par exemple avant et après une migration — l'[outil de diff texte](/fr/tools/text/diff) fait le même travail pour n'importe quel texte brut, avec une mise en évidence ligne par ligne.

Tous deux font partie d'un ensemble plus large d'[outils de développeur](/fr/tools/dev) pensés pour ces utilitaires rapides dans le navigateur que vous utilisez des dizaines de fois par jour.

## Conclusion

Le formatage JSON est l'une de ces petites disciplines qui s'accumulent sur la durée d'un projet. Embellir en développement, minifier en production. Valider à la frontière. Utiliser des schémas quand les données dépassent l'usage ponctuel. Stocker les dates en ISO 8601, les grands nombres en chaînes, et traiter \`null\` avec intention.

Rien de tout cela n'est glamour. Mais tout cela vous fera gagner des heures de débogage la prochaine fois que quelque chose casse — et quelque chose casse toujours. La bonne nouvelle, c'est qu'avec un formateur et un schéma sous la main, la correction est souvent à un seul copier-coller.`,
  },
  de: {
    slug: "json-formatting-best-practices",
    category: "Entwickler-Tools",
    date: "2026-02-01",
    readTime: "7 Min",
    title: "Best Practices für JSON-Formatierung für Entwickler",
    description:
      "Lerne JSON-Best-Practices: vermeide typische Fehler, validiere, formatiere und meistere APIs mit praxisnahen Beispielen.",
    content: `## Was ist JSON und warum ist Formatierung wichtig?

JSON (JavaScript Object Notation) ist das De-facto-Datenaustauschformat im Web. Es ist leichtgewichtig, gut lesbar und wird praktisch von jeder Programmiersprache nativ unterstützt. Egal ob Sie eine REST-API bauen, Konfiguration speichern oder Daten zwischen Frontend und Backend übertragen – JSON ist fast immer die erste Wahl.

Aber „lesbar" hängt davon ab, wie Sie es schreiben. Eine einzelne Zeile minifiziertes JSON kann 4 KB groß sein; dieselben Daten mit Zwei-Leerzeichen-Einrückung schön formatiert können 8 KB sein. Beides ist gültig. Der Unterschied ist, ob der nächste Entwickler – Sie selbst in der Zukunft eingeschlossen – es um 2 Uhr nachts während einer Störung lesen kann.

Gute Formatierung ist nicht nur Ästhetik. Sie wirkt sich direkt aus auf:

- **Debugbarkeit**: Ein schön formatierter Payload zeigt die Struktur auf einen Blick. Verschachtelte Objekte sind leicht zu navigieren, fehlende Schlüssel springen ins Auge und Tippfehler sind sofort sichtbar.
- **Diff-Lesbarkeit**: Code-Reviews auf minifiziertem JSON sind sinnlos. Ein Diff mit Zwei-Leerzeichen-Einrückung zeigt klar, welche Felder sich geändert haben.
- **Fehlerlokalisierung**: Wenn das Parsen fehlschlägt, sind Zeilen- und Spaltennummern nur dann sinnvoll, wenn das Dokument ein echtes Layout hat.
- **Zusammenarbeit**: Ein einheitlicher Stil im Team bedeutet, dass niemand Zeit damit verliert, Dateien neu zu formatieren, bevor er damit arbeiten kann.

Kurz gesagt: Formatierung ist eine Form der Kommunikation. Behandeln Sie Ihr JSON so, wie Sie Ihren Code behandeln.

## Die häufigsten JSON-Fehler

Selbst erfahrene Entwickler machen diese Fehler. Sie sind gültige JavaScript-Syntax, weshalb der Editor sie stillschweigend durchgehen lässt.

### Abschließende Kommas

Ein Komma nach dem letzten Element eines Arrays oder Objekts ist in JavaScript völlig gültig. JSON erlaubt es nicht.

\`\`\`json
// UNGÜLTIG
{
  "name": "Ada",
  "age": 36,
}
\`\`\`

Die Korrektur ist trivial: Komma entfernen. Die meisten Linter erkennen das. Wenn Ihrer es nicht tut, wechseln Sie das Werkzeug.

### Einfache Anführungszeichen für Strings

JSON-Strings müssen in doppelte Anführungszeichen gesetzt werden. Einfache Anführungszeichen sind eine JavaScript-Konvention, keine JSON-Konvention.

\`\`\`json
// UNGÜLTIG
{ 'name': 'Ada' }
\`\`\`

Das passiert oft, wenn man einen Wert aus einem JavaScript-Objektliteral oder einem mit einfachen Anführungszeichen gerenderten Python-Dictionary kopiert. Verwenden Sie immer doppelte Anführungszeichen – für Schlüssel und für String-Werte.

### Nicht in Anführungszeichen gesetzte Schlüssel

Schlüssel in JSON müssen Strings sein, und Strings müssen in Anführungszeichen stehen.

\`\`\`json
// UNGÜLTIG
{ name: "Ada" }
\`\`\`

### Kommentare

JSON unterstützt keine Kommentare. Weder \`//\` noch \`/* */\` werden geparst. Wenn Sie Anmerkungen brauchen, verwenden Sie ein \`"_comment"\`-Feld, eine Begleitdatei oder wechseln Sie zu JSON5/JSONC – aber nur auf der Produzentenseite, da die meisten Konsumenten striktes JSON erwarten.

### Unbalancierte Klammern

Eine fehlende \`}\` oder ein überzähliges \`]\` ist die häufigste Ursache für „Unexpected end of JSON input" und ähnliche Fehler. Schön formatieren ist der schnellste Weg, das zu finden: Ihre Augen sehen das Ungleichgewicht sofort.

## Wie man JSON validiert

Validierung gibt es in zwei Kategorien: **syntaktisch** (ist es wohlgeformt?) und **semantisch** (entspricht es dem erwarteten Schema?).

Für syntaktische Validierung reicht jeder moderne Editor aus. VS Code hebt fehlerhaftes JSON rot hervor. Das CLI-Tool \`jq\` meldet den Fehler beim ersten fehlerhaften Zeichen. Online-Validatoren funktionieren, aber seien Sie bei sensiblen Daten vorsichtig – fügen Sie nur nicht-sensible Beispiele ein.

Für semantische Validierung brauchen Sie ein JSON-Schema (dazu gleich mehr) oder einen typisierten Parser in Ihrer Sprache. In TypeScript können Bibliotheken wie \`zod\` oder \`io-ts\` die erwartete Form beschreiben und alles ablehnen, was nicht passt. Damit fangen Sie die schlimmste Bug-Klasse: Die API liefert stillschweigend ein neues Feld, oder ein altes Feld wird \`null\`, und Ihr Code stürzt drei Schichten tiefer ab.

Ein guter Workflow:

1. Eingehendes JSON beim Debuggen schön formatieren.
2. An der Systemgrenze (Controller, API-Client, Message-Handler) gegen ein Schema validieren.
3. Innerhalb der Grenze nichts mehr vertrauen.

## Schön formatieren vs. minifizieren

Das sind die zwei Seiten derselben Medaille, und beide sind nützlich – nur an unterschiedlichen Stellen.

**Schön formatieren** (auch „beautify" oder „expand") fügt Einrückung und Zeilenumbrüche hinzu. Verwenden Sie es für:

- Quelltextdateien, die Sie in git committen
- API-Antworten, die Sie in der Entwicklung prüfen
- Log-Einträge, die Sie später vielleicht lesen müssen
- Dokumentation und Beispiele

**Minifizieren** entfernt alle Leerzeichen. Verwenden Sie es für:

- Produktive API-Antworten
- Tokens und Cookies (JWT, Session-Storage)
- Speicherung in platzbeschränkten Datenbanken oder Caches
- Netzwerk-Payloads, bei denen jedes Byte zählt

Faustregel: In der Entwicklung schön formatieren, in Produktion minifizieren. Die meisten Build-Tools erledigen das automatisch. Für Ad-hoc-Aufgaben erledigt ein kostenloser [JSON-Formatter](/de/tools/dev/json-format) beide Richtungen mit einem einzigen Einfügen.

Wenn Sie zwei JSON-Dokumente vergleichen möchten, hebt ein [Text-Diff-Tool](/de/tools/text/diff) genau hervor, welche Felder sich geändert haben – deutlich nützlicher, als minifizierte Outputs anzustarren.

## Arbeiten mit verschachtelten Daten

Verschachtelte Objekte und Arrays sind der Ort, an dem JSON seine Ausdrucksstärke zeigt – und wo sich Bugs am liebsten verstecken.

Einige Grundsätze:

- **Halten Sie die Verschachtelung flach.** Drei Ebenen sind in Ordnung. Fünf Ebenen bedeuten, dass Sie die Daten vermutlich als flache Liste mit Fremdschlüsseln modellieren oder auf mehrere Endpunkte aufteilen sollten.
- **Seien Sie konsistent bei Arrays vs. Objekten.** Ein Feld, das mal ein Array und mal \`null\` ist, ist eine häufige Quelle für \`Cannot read property 'map' of null\`. Entscheiden Sie vorab: Wenn keine Elemente da sind, liefern Sie \`[]\`, nicht \`null\`.
- **Verwenden Sie eine stabile Schlüsselreihenfolge, wenn es darauf ankommt.** JSON schreibt keine Reihenfolge vor, aber Parser und Diff-Tools verhalten sich besser mit vorhersagbarer Reihenfolge. Alphabetisch ist ein sicherer Standard.
- **Vorsicht bei riesigen Arrays.** Ein 50-MB-JSON-Blob mit einer Million Array-Elementen ist technisch gültig, aber nicht streambar. Erwägen Sie NDJSON (ein JSON-Objekt pro Zeile) oder eine paginierte API.

## JSON in APIs: Content-Type und Statuscodes

Wenn Sie HTTP-APIs bauen, erledigen zwei Header fast die gesamte Arbeit:

- \`Content-Type: application/json\` – teilt dem Client (und allen Zwischenstationen) mit, was zu erwarten ist. Das zu vergessen ist der häufigste API-Bug in Produktion.
- \`Accept: application/json\` – was der Client entgegennehmen kann. Nützlich für Content Negotiation.

Auf der Antwortseite muss der Statuscode zum Ergebnis passen:

- \`200 OK\` – Erfolg, der Body enthält die Ressource oder das Ergebnis.
- \`201 Created\` – eine neue Ressource wurde erstellt; der \`Location\`-Header sollte darauf zeigen.
- \`204 No Content\` – Erfolg, kein Body (häufig bei DELETE).
- \`400 Bad Request\` – die Anfrage ist fehlerhaft (ungültiges JSON, Pflichtfeld fehlt).
- \`401 Unauthorized\` – keine gültigen Anmeldedaten.
- \`403 Forbidden\` – Anmeldedaten gültig, aber keine Berechtigung.
- \`404 Not Found\` – die Ressource existiert nicht.
- \`422 Unprocessable Entity\` – JSON ist gültig, aber semantisch falsch (z. B. negatives Alter).
- \`500 Internal Server Error\` – auf dem Server ist etwas kaputtgegangen. Niemals Stack-Traces herausgeben.

Ein gängiges Muster ist es, Antworten einzuhüllen: \`{ "data": ..., "error": null }\` oder \`{ "data": null, "error": { "code": "...", "message": "..." } }\`. Das ist in Ordnung, aber nicht vorgeschrieben. Beide Varianten sind besser als inkonsistente Ad-hoc-Formen.

## JSON Schema Grundlagen

JSON Schema ist ein Vokabular, mit dem Sie Form und Einschränkungen eines JSON-Dokuments beschreiben können. Betrachten Sie es als Typsystem für JSON.

Ein minimales Schema:

\`\`\`json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["name", "age"],
  "properties": {
    "name": { "type": "string", "minLength": 1 },
    "age": { "type": "integer", "minimum": 0 }
  }
}
\`\`\`

Es sagt: Das Dokument muss ein Objekt mit nicht-leerem \`name\` und nicht-negativer ganzzahliger \`age\` sein. Sie können es mit Formaten (\`"format": "email"\`), Enums, Regex und Verweisen auf andere Schemata erweitern.

Warum die Mühe? Validierung an der Grenze fängt schlechte Daten ab, bevor sie sich ausbreiten. Das Schema dient zugleich als lebendige Dokumentation: Es beschreibt, was Ihre API tatsächlich akzeptiert, nicht was jemand glaubt.

In fast jeder Sprache gibt es einen JSON-Schema-Validator. Im TypeScript-Ökosystem werden Tools wie \`zod\` immer beliebter, weil sie TypeScript-Typen direkt aus dem Schema generieren.

## Häufige Stolperfallen bei Daten, Zahlen und Sonderzeichen

JSON ist bewusst minimal. Es hat keinen Datumstyp, und genau das bringt jeden irgendwann ins Stolpern.

- **Daten**: Speichern Sie sie als ISO-8601-Strings (\`"2026-02-01T12:00:00Z"\`). Vermeiden Sie Formate wie \`"02/01/2026"\` – mehrdeutig und locale-abhängig.
- **Zahlen**: JSON-Zahlen sind dezimal. Es gibt keinen Integer-Typ. In JavaScript verlieren ganze Zahlen über 2^53 an Präzision. Für IDs oder Geldwerte lieber Strings verwenden.
- **Booleans**: nur die Literale \`true\` und \`false\`. Strings wie \`"true"\` werden nicht automatisch umgewandelt.
- **Unicode**: JSON-Strings sind Unicode, also funktionieren Emojis und CJK-Zeichen direkt. Aber die Escape-Sequenzen müssen stimmen: \`\\n\` ist ein Zeilenumbruch, \`\\\\\` ist ein Backslash, \`\\u0041\` ist \`A\`. Im Zweifel die Daten in einen [JSON-Formatter](/de/tools/dev/json-format) einfügen und die Rohbytes prüfen.
- **Null vs. fehlend**: \`{"age": null}\` und \`{}\` bedeuten Unterschiedliches. Entscheiden Sie in Ihrem System, was „unbekannt" darstellt, und bleiben Sie konsistent.

## Werkzeuge, die Zeit sparen

Ein guter Formatter gehört zu den Werkzeugen, deren Notwendigkeit man erst bemerkt, wenn man einen benutzt. Unser kostenloser [JSON-Formatter](/de/tools/dev/json-format) läuft vollständig im Browser – kein Upload, keine Registrierung, kein Tracking. Minifizierten Payload einfügen, einen lesbaren Baum erhalten, zurückkopieren. Er validiert beim Formatieren, sodass Syntaxfehler inline an der problematischen Zeile erscheinen.

Um zwei Versionen eines JSON-Dokuments zu vergleichen – etwa vor und nach einer Migration – leistet das [Text-Diff-Tool](/de/tools/text/diff) dieselbe Arbeit für jeden Klartext, mit zeilenweiser Hervorhebung.

Beide gehören zu einem größeren Satz von [Entwickler-Tools](/de/tools/dev), gedacht für diese schnellen, im Browser verfügbaren Helfer, die Sie täglich Dutzende Male brauchen.

## Fazit

JSON-Formatierung ist eine dieser kleinen Disziplinen, die sich über die Dauer eines Projekts summieren. In der Entwicklung schön formatieren, in Produktion minifizieren. An der Grenze validieren. Schemas verwenden, wenn die Daten über den Einzelfall hinausgehen. Daten als ISO 8601 speichern, große Zahlen als Strings, und \`null\` mit Bedacht einsetzen.

Nichts davon ist glamourös. Aber alles davon spart Ihnen beim nächsten Mal etliche Debug-Stunden ein – und es gibt immer ein nächstes Mal. Die gute Nachricht: Mit einem Formatter und einem Schema in Reichweite ist die Lösung meistens nur eine einzige Einfüge-Operation entfernt.`,
  },
};

export default jsonFormattingPost;
