// Blog post: What is Lorem Ipsum
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const loremEn = `## What is Lorem Ipsum?

**Lorem Ipsum** is placeholder text that designers, typesetters, printers, and developers have used for centuries to fill a layout with realistic-looking text without distracting the viewer with actual readable content. The standard chunk begins with "Lorem ipsum dolor sit amet..." and looks like Latin but is in fact a scrambled, meaningless passage derived from a work by the Roman philosopher Cicero.

The whole point of Lorem Ipsum is to look like real prose — varied word lengths, natural rhythm, a mix of consonants and vowels — so a designer can judge how a page will look when filled with real content, without being distracted by what the words actually say.

## Where did Lorem Ipsum come from?

The standard Lorem Ipsum passage has been the industry's standard dummy text since the **1500s**, when an unknown printer scrambled a passage from Cicero's *De Finibus Bonorum et Malorum* (On the Ends of Good and Evil) to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently into desktop publishing software and web design.

The text became popular in the 1960s when Letraset released dry-transfer sheets with Lorem Ipsum passages, and again in the 1990s when Aldus PageMaker (later Adobe) bundled it with its publishing software. Today it is the default placeholder for almost every design and prototyping tool.

## Common reasons to use Lorem Ipsum

- **Design mockups**: fill a layout without writing copy yet
- **Web development**: populate a CMS, blog, or theme with realistic text
- **Fonts and typography**: test how a typeface handles real-looking prose
- **Printing proofs**: previews for clients with a believable body of text
- **Wireframes**: avoid lorem-shift ("asdf asdf asdf") that looks fake
- **Filler content**: when the real text isn't ready, but the layout needs testing
- **Privacy**: don't use real client text in screenshots and demo materials

## Method 1: Use UtilBoxx's Free Lorem Ipsum Generator (Recommended)

The fastest way to get as much Lorem Ipsum as you need is [UtilBoxx's Lorem Ipsum Generator](/en/tools/text/lorem). It runs in your browser, has no character limit, and lets you specify exactly how many paragraphs, sentences, or words you want.

How to use it:

1. Go to [utilboxx.com/en/tools/text/lorem](/en/tools/text/lorem)
2. Choose how much text to generate:
   - **Words** (e.g., 50, 100, 500)
   - **Sentences** (e.g., 5, 10, 20)
   - **Paragraphs** (e.g., 3, 5, 10)
3. Click "Generate"
4. Copy the result with one click

**Why this method works best**:

- **100% free**, no signup, no ads
- **Privacy-first**: text never leaves your browser
- **Flexible quantity**: words, sentences, paragraphs on demand
- **Classic Lorem Ipsum**: the same trusted passage since the 1500s
- **One-click copy**: paste into any design tool, CMS, or document
- **No limits**: generate a single sentence or 100 paragraphs

If you need a chunk of placeholder text, this is by far the easiest path.

## Method 2: lipsum.com (long-standing web classic)

**lipsum.com** is one of the oldest Lorem Ipsum generators on the web. It has the original passage and supports generation by paragraphs, words, bytes, or lists. The interface is utilitarian but functional, and it is the generator most old-school designers have bookmarked for 20+ years.

Pros:
- Trusted, long-running site
- Multiple output formats (HTML, plain text, etc.)
- Free, no signup

Cons:
- Ads and popups on the page
- No privacy guarantees
- Less polished UX than modern tools

## Method 3: Faker.js / Faker libraries (developer-friendly)

For developers who need placeholder data in code (names, addresses, lorem text, the works), **Faker** libraries exist for nearly every language: \`faker.js\` (JavaScript), \`Faker\` (Python and Ruby), \`FakerPHP\` (PHP), and so on.

In JavaScript:

\`\`\`
import { faker } from '@faker-js/faker';
const text = faker.lorem.paragraphs(3);
\`\`\`

In Python:

\`\`\`
from faker import Faker
fake = Faker()
text = fake.paragraphs(3)
\`\`\`

These are perfect for seeding databases, generating test data, or filling a dev environment. For one-off design mockups, a browser generator is faster.

## Frequently Asked Questions

### Is Lorem Ipsum actual Latin?
Mostly no. The standard passage is derived from Cicero's Latin, but it has been scrambled, truncated, and modified over the centuries. Words like "lorem" don't exist in classical Latin. It looks Latin but is largely nonsense.

### Why not just use "asdf asdf asdf" or repeated words?
Because Lorem Ipsum has natural variation in word length, syllable count, and letter distribution. Real-looking prose reveals layout problems (orphans, widows, awkward breaks, bad rag) that "asdf asdf" hides.

### Is Lorem Ipsum free to use?
Yes. The original Cicero text is in the public domain, and the scrambled Lorem Ipsum has been reused freely for centuries. There is no copyright on it.

### Can I use Lorem Ipsum on a live website?
Technically yes, but don't — replace it with real content before launch. Lorem Ipsum on a live site is a sign of an unfinished product.

### What's the difference between Lorem Ipsum and other filler text?
Other generators exist (Bacon Ipsum, Cupcake Ipsum, Hipster Ipsum) and are fun for personality. For serious design and dev work, Lorem Ipsum is the universal standard.

### How long should a paragraph of Lorem Ipsum be?
The classic paragraph is 6-8 sentences and around 50-80 words. UtilBoxx lets you specify exactly what you need.

## Conclusion

For quick placeholder text in any design or dev context, [UtilBoxx's free Lorem Ipsum Generator](/en/tools/text/lorem) is the right tool. For the historical classic, lipsum.com is still up. For code-driven generation, Faker libraries are unbeatable. Whichever route, Lorem Ipsum remains the universal language of "real-looking fake text."`;

const loremZh = `## 什么是 Lorem Ipsum？

**Lorem Ipsum** 是占位文字，几个世纪以来被设计师、排版师、印刷工和开发者用来填充版面，让布局看起来有真实文本的体量，又不会让读者被实际内容分心。标准的一段以 "Lorem ipsum dolor sit amet..." 开头，看起来像拉丁文，但实际上是一段被打乱的、无意义的内容，源自罗马哲学家西塞罗的作品。

Lorem Ipsum 的全部意义在于它看起来像真实的散文——词长有变化、节奏自然、辅音和元音混合——这样设计师就能在不被具体词义干扰的情况下判断页面填满内容后的样子。

## Lorem Ipsum 从哪里来？

标准 Lorem Ipsum 段落自 **1500 年代**起就是行业的标准虚拟文本，当时一位不知名的印刷工把西塞罗 *De Finibus Bonorum et Malorum*（《善恶之至》）中的一段打乱，做了一本字体样本书。它不仅存活了五个世纪，还跨越了电子排版时代，并进入了桌面出版软件和网页设计。

它在 1960 年代流行起来，当时 Letraset 发布了带有 Lorem Ipsum 段落的干转印贴纸；1990 年代又因为 Aldus PageMaker（后来的 Adobe）在排版软件中捆绑了它而再次走红。今天，它是几乎所有设计和原型工具的默认占位符。

## 常见的 Lorem Ipsum 使用原因

- **设计稿**：在还没写文案时填充版面
- **Web 开发**：用真实感的文本填充 CMS、博客或主题
- **字体和排版**：测试一款字体处理真实散文时的效果
- **印刷打样**：给客户的预览需要可信的正文
- **线框图**：避免 "asdf asdf asdf" 之类的 lorem-shift 看起来假
- **填充内容**：当真实文字还没准备好，但布局需要测试
- **隐私**：在截图和演示材料中不使用真实客户文字

## 方法 1：使用 UtilBoxx 免费 Lorem Ipsum 生成器（推荐）

获得你所需 Lorem Ipsum 最快的方法是 [UtilBoxx 的 Lorem Ipsum 生成器](/zh/tools/text/lorem)。它在浏览器中运行，没有字符限制，让你精确指定段落、句子或单词的数量。

使用步骤：

1. 访问 [utilboxx.com/zh/tools/text/lorem](/zh/tools/text/lorem)
2. 选择要生成的数量：
   - **单词**（如 50、100、500）
   - **句子**（如 5、10、20）
   - **段落**（如 3、5、10）
3. 点击"生成"
4. 一键复制结果

**为什么这个方法最有效**：

- **100% 免费**，无需注册、无广告
- **隐私优先**：文字根本不会离开浏览器
- **数量灵活**：按需生成单词、句子、段落
- **经典 Lorem Ipsum**：自 1500 年代以来同样可信的段落
- **一键复制**：粘贴到任何设计工具、CMS 或文档
- **无限制**：一段句子或 100 段都能生成

如果你需要一段占位文字，这是最简单的路径。

## 方法 2：lipsum.com（老牌经典网站）

**lipsum.com** 是网上最古老的 Lorem Ipsum 生成器之一。它有原始段落，并支持按段落、单词、字节或列表生成。界面朴素但功能完善，是老一辈设计师 20 多年来一直收藏的生成器。

优点：
- 受信赖、长期运行的网站
- 多种输出格式（HTML、纯文本等）
- 免费、无需注册

缺点：
- 页面有广告和弹窗
- 隐私无保证
- UX 不如现代工具精致

## 方法 3：Faker.js / Faker 库（适合开发者）

对于需要在代码中生成占位数据的开发者（姓名、地址、lorem 文本等），几乎每种语言都有 **Faker** 库：\`faker.js\`（JavaScript）、\`Faker\`（Python 和 Ruby）、\`FakerPHP\`（PHP）等等。

在 JavaScript 中：

\`\`\`
import { faker } from '@faker-js/faker';
const text = faker.lorem.paragraphs(3);
\`\`\`

在 Python 中：

\`\`\`
from faker import Faker
fake = Faker()
text = fake.paragraphs(3)
\`\`\`

这些非常适合播种数据库、生成测试数据或填充开发环境。对于一次性的设计稿，浏览器生成器更快。

## 常见问题

### Lorem Ipsum 是真正的拉丁文吗？
基本不是。标准段落源自西塞罗的拉丁文，但经过几个世纪的打乱、截断和修改。"lorem" 这种词在古典拉丁文中根本不存在。它看起来像拉丁文，但基本上是无意义的。

### 为什么不直接用 "asdf asdf asdf" 或重复的词？
因为 Lorem Ipsum 在词长、音节数和字母分布上有自然变化。看起来真实的散文会暴露布局问题（孤行、寡行、尴尬的断行、糟糕的 ragged 边距），而 "asdf asdf" 隐藏了这些问题。

### Lorem Ipsum 免费使用吗？
免费。原文西塞罗的作品是公共领域，打乱后的 Lorem Ipsum 几百年来一直被自由使用。它没有任何版权。

### 可以在正式网站上用 Lorem Ipsum 吗？
技术上可以，但不要——上线前一定要用真实内容替换。正式网站上出现 Lorem Ipsum 意味着产品未完成。

### Lorem Ipsum 和其他填充文字有什么区别？
其他生成器（Bacon Ipsum、Cupcake Ipsum、Hipster Ipsum）也很有趣，但更个性。严肃的设计和开发工作，Lorem Ipsum 是通用标准。

### 一段 Lorem Ipsum 应该多长？
经典段落是 6-8 个句子、约 50-80 个单词。UtilBoxx 让你精确指定所需数量。

## 结论

对于任何设计或开发场景下的快速占位文字，[UtilBoxx 的免费 Lorem Ipsum 生成器](/zh/tools/text/lorem) 是合适的工具。对于历史经典，lipsum.com 仍在线。对于代码驱动的生成，Faker 库无可匹敌。无论选哪条路，Lorem Ipsum 仍是"看起来真实的假文字"的通用语言。`;

const loremJa = `## Lorem Ipsum とは？

**Lorem Ipsum** は、デザイナー・植字工・印刷工・開発者が何世紀にもわたって使い続けてきたプレースホルダーテキストで、実際に読める内容で読者を惑わせることなく、本物のテキストのような体裁でレイアウトを埋めるためのものです。標準的な塊は「Lorem ipsum dolor sit amet...」で始まり、ラテン語のように見えますが、実際にはローマの哲学者キケロの著作から取られた、スクランブルされて無意味な文章です。

Lorem Ipsum の意義は、本物の散文のように見える——単語の長さに変化があり、韻律が自然で、子音と母音が混ざっている——点にあります。デザイナーは、単語の意味に邪魔されず、本物のコンテンツで埋めたときの見栄えを判断できます。

## Lorem Ipsum の起源は？

標準的な Lorem Ipsum のパスは、**1500 年代**から業界の標準ダミーテキストです。当時、名の知れない印刷工がキケロの *De Finibus Bonorum et Malorum*（善と悪の限界について）の一節をスクランブルして、字体見本帳を作りました。5 世紀を生き延びただけでなく、電子植字、そしてデスクトップパブリッシングソフトウェアとウェブデザインへの跳躍も超えました。

1960 年代に Letraset が Lorem Ipsum のパスが印刷されたドライ転写シートを発売して人気が出、1990 年代には Aldus PageMaker（後の Adobe）がパブリッシングソフトウェアに同梱したことで再び普及しました。今日では、ほとんどすべてのデザイン・プロトタイピングツールのデフォルトプレースホルダーです。

## Lorem Ipsum を使うよくある理由

- **デザインモックアップ**：コピーをまだ書いていないときのレイアウト埋め
- **Web 開発**：CMS、ブログ、テーマにリアルなテキストを投入
- **フォントとタイポグラフィ**：書体がリアルな散文をどう処理するかをテスト
- **印刷ゲラ**：クライアントへのプレビューに説得力のある本文
- **ワイヤーフレーム**：「asdf asdf asdf」のような lorem-shift を避ける
- **フィラーコンテンツ**：本物のテキストが未準備でもレイアウトテストが必要
- **プライバシー**：スクリーンショットやデモ素材に本物のクライアントテキストを使わない

## 方法 1：UtilBoxx 無料 Lorem Ipsum ジェネレーター（推奨）

必要なだけ Lorem Ipsum を最速で取得する方法は [UtilBoxx の Lorem Ipsum ジェネレーター](/ja/tools/text/lorem) です。ブラウザで動き、文字数制限はなく、段落・文・単語数を正確に指定できます。

使い方：

1. [utilboxx.com/ja/tools/text/lorem](/ja/tools/text/lorem) にアクセス
2. 生成量を選択：
   - **単語**（例：50、100、500）
   - **文**（例：5、10、20）
   - **段落**（例：3、5、10）
3.「生成」をクリック
4. ワンクリックで結果をコピー

**この方法が最適な理由**：

- **100% 無料**、登録不要、広告なし
- **プライバシー重視**：テキストはブラウザから出ない
- **柔軟な量**：必要に応じて単語、文、段落
- **クラシック Lorem Ipsum**：1500 年代から変わらない信頼のパッセージ
- **ワンクリックコピー**：どんなデザインツール、CMS、ドキュメントにも貼り付け
- **制限なし**：1 文でも 100 段落でも生成可能

プレースホルダーテキストが必要なら、最も簡単なルートです。

## 方法 2：lipsum.com（老舗 Web クラシック）

**lipsum.com** は Web 上で最も古い Lorem Ipsum ジェネレーターの一つです。元のパッセージを持ち、段落・単語・バイト・リストでの生成をサポート。インターフェースは質実剛健で、旧世代デザイナーが 20 年以上ブックマークし続けてきたジェネレーターです。

長所：
- 信頼され、長期稼働しているサイト
- 複数の出力フォーマット（HTML、プレーンテキストなど）
- 無料、登録不要

短所：
- 広告やポップアップが表示される
- プライバシー保証なし
- モダンなツールほどの UX ではない

## 方法 3：Faker.js / Faker ライブラリ（開発者向け）

コード内でプレースホルダーデータ（名前、住所、lorem テキストなど）が必要な開発者には、ほぼすべての言語に **Faker** ライブラリがあります：\`faker.js\`（JavaScript）、\`Faker\`（Python と Ruby）、\`FakerPHP\`（PHP）など。

JavaScript：

\`\`\`
import { faker } from '@faker-js/faker';
const text = faker.lorem.paragraphs(3);
\`\`\`

Python：

\`\`\`
from faker import Faker
fake = Faker()
text = fake.paragraphs(3)
\`\`\`

データベースのシード、テストデータ生成、開発環境充填に最適。単発のデザインにはブラウザジェネレーターが速いです。

## よくある質問

### Lorem Ipsum は本物のラテン語ですか？
ほぼ違います。標準的なパッセージはキケロのラテン語に由来しますが、何世紀にもわたってスクランブル・切断・改変されてきました。「lorem」のような単語は古典ラテン語には存在しません。ラテン語のように見えますが、ほぼ無意味です。

### なぜ「asdf asdf asdf」や繰り返し単語を使わないのですか？
Lorem Ipsum は単語長、音節数、文字分布に自然なバリエーションがあるためです。リアルな散文は、「asdf asdf」では隠れるレイアウト問題（オーファン、ウィドー、ぎこちない改行、悪いラグ）を明らかにします。

### Lorem Ipsum は無料で使えますか？
はい。原文のキケロの著作はパブリックドメインで、スクランブルされた Lorem Ipsum は何世紀も自由に再利用されてきました。著作権は一切ありません。

### 本番サイトで Lorem Ipsum を使えますか？
技術的には可能ですが、避けてください——ローンチ前に必ず本物のコンテンツに置き換えてください。本番サイトの Lorem Ipsum は未完成のサインです。

### Lorem Ipsum と他のフィラーテキストの違いは？
他のジェネレーター（Bacon Ipsum、Cupcake Ipsum、Hipster Ipsum）も個性的で楽しいですが、本格的なデザイン・開発作業には Lorem Ipsum が世界標準です。

### Lorem Ipsum の段落はどれくらいが適切？
クラシック段落は 6〜8 文、約 50〜80 単語。UtilBoxx なら必要な量を正確に指定できます。

## 結論

どんなデザイン・開発シーンでもクイックなプレースホルダーテキストには、[UtilBoxx の無料 Lorem Ipsum ジェネレーター](/ja/tools/text/lorem) が最適なツールです。歴史的クラシックなら lipsum.com がまだ稼働中。コード駆動生成なら Faker ライブラリが无敌です。どのルートでも、Lorem Ipsum は「リアルに見えるフェイクテキスト」の世界共通語です。`;

const loremEs = `## ¿Qué es Lorem Ipsum?

**Lorem Ipsum** es texto de relleno que diseñadores, tipógrafos, impresores y desarrolladores han usado durante siglos para llenar un diseño con texto de aspecto realista sin distraer al lector con contenido realmente legible. El fragmento estándar comienza con "Lorem ipsum dolor sit amet..." y parece latín, pero en realidad es un pasaje desordenado y sin sentido derivado de una obra del filósofo romano Cicerón.

El punto de Lorem Ipsum es parecer prosa real —variación en la longitud de palabras, ritmo natural, mezcla de consonantes y vocales— para que un diseñador pueda juzgar cómo se verá una página cuando se llene con contenido real, sin distraerse con lo que las palabras realmente dicen.

## ¿De dónde viene Lorem Ipsum?

El pasaje estándar de Lorem Ipsum ha sido el texto ficticio estándar de la industria desde los **años 1500**, cuando un impresor desconocido desordenó un pasaje del *De Finibus Bonorum et Malorum* (Sobre los fines de los bienes y los males) de Cicerón para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la tipografía electrónica y, más recientemente, al software de autoedición y al diseño web.

El texto se hizo popular en la década de 1960 cuando Letraset lanzó hojas de transferencia en seco con pasajes de Lorem Ipsum, y de nuevo en la de 1990 cuando Aldus PageMaker (luego Adobe) lo incluyó con su software de publicación. Hoy es el placeholder por defecto de casi todas las herramientas de diseño y prototipado.

## Razones habituales para usar Lorem Ipsum

- **Maquetas de diseño**: llenar un diseño antes de escribir el copy
- **Desarrollo web**: poblar un CMS, blog o tema con texto realista
- **Fuentes y tipografía**: probar cómo maneja una tipografía prosa realista
- **Pruebas de impresión**: previsualizaciones para clientes con cuerpo de texto creíble
- **Wireframes**: evitar lorem-shift ("asdf asdf asdf") que parece falso
- **Contenido de relleno**: cuando el texto real no está listo, pero el diseño necesita probarse
- **Privacidad**: no usar texto real de clientes en capturas y materiales de demo

## Método 1: Usa el Generador de Lorem Ipsum Gratuito de UtilBoxx (Recomendado)

La forma más rápida de obtener tanto Lorem Ipsum como necesites es el [Generador de Lorem Ipsum de UtilBoxx](/es/tools/text/lorem). Funciona en tu navegador, sin límite de caracteres, y te permite especificar exactamente cuántos párrafos, frases o palabras quieres.

Cómo usarlo:

1. Ve a [utilboxx.com/es/tools/text/lorem](/es/tools/text/lorem)
2. Elige cuánto texto generar:
   - **Palabras** (p. ej., 50, 100, 500)
   - **Frases** (p. ej., 5, 10, 20)
   - **Párrafos** (p. ej., 3, 5, 10)
3. Haz clic en "Generar"
4. Copia el resultado con un solo clic

**Por qué este método es el mejor**:

- **100% gratis**, sin registro, sin anuncios
- **Privacidad primero**: el texto nunca sale de tu navegador
- **Cantidad flexible**: palabras, frases, párrafos bajo demanda
- **Lorem Ipsum clásico**: el mismo pasaje confiable desde los 1500
- **Copia en un clic**: pega en cualquier herramienta de diseño, CMS o documento
- **Sin límites**: desde una sola frase hasta 100 párrafos

Si necesitas un fragmento de texto de relleno, esta es con diferencia la ruta más fácil.

## Método 2: lipsum.com (clásico web de larga data)

**lipsum.com** es uno de los generadores de Lorem Ipsum más antiguos de la web. Tiene el pasaje original y soporta generación por párrafos, palabras, bytes o listas. La interfaz es utilitaria pero funcional, y es el generador que la mayoría de diseñadores veteranos llevan 20+ años en sus marcadores.

Pros:
- Sitio confiable y de larga data
- Múltiples formatos de salida (HTML, texto plano, etc.)
- Gratis, sin registro

Contras:
- Anuncios y popups en la página
- Sin garantías de privacidad
- UX menos pulida que las herramientas modernas

## Método 3: Faker.js / bibliotecas Faker (amigo de los devs)

Para desarrolladores que necesitan datos de relleno en código (nombres, direcciones, texto lorem, todo), existen bibliotecas **Faker** para casi todos los lenguajes: \`faker.js\` (JavaScript), \`Faker\` (Python y Ruby), \`FakerPHP\` (PHP), y así.

En JavaScript:

\`\`\`
import { faker } from '@faker-js/faker';
const text = faker.lorem.paragraphs(3);
\`\`\`

En Python:

\`\`\`
from faker import Faker
fake = Faker()
text = fake.paragraphs(3)
\`\`\`

Son perfectas para sembrar bases de datos, generar datos de prueba o llenar un entorno de desarrollo. Para maquetas puntuales, un generador de navegador es más rápido.

## Preguntas frecuentes

### ¿Lorem Ipsum es latín real?
En su mayoría no. El pasaje estándar deriva del latín de Cicerón, pero ha sido desordenado, truncado y modificado durante siglos. Palabras como "lorem" no existen en latín clásico. Parece latín pero es en gran parte sinsentido.

### ¿Por qué no usar simplemente "asdf asdf asdf" o palabras repetidas?
Porque Lorem Ipsum tiene variación natural en longitud de palabra, conteo de sílabas y distribución de letras. La prosa de aspecto real revela problemas de diseño (huérfanas, viudas, cortes torpes, rag malo) que "asdf asdf" oculta.

### ¿Lorem Ipsum es de uso libre?
Sí. El texto original de Cicerón es de dominio público, y el Lorem Ipsum desordenado se ha reutilizado libremente durante siglos. No tiene copyright.

### ¿Puedo usar Lorem Ipsum en un sitio en producción?
Técnicamente sí, pero no lo hagas — reemplázalo con contenido real antes del lanzamiento. Lorem Ipsum en un sitio en vivo es señal de un producto sin terminar.

### ¿Cuál es la diferencia entre Lorem Ipsum y otros textos de relleno?
Existen otros generadores (Bacon Ipsum, Cupcake Ipsum, Hipster Ipsum) y son divertidos por personalidad. Para trabajo serio de diseño y desarrollo, Lorem Ipsum es el estándar universal.

### ¿Cuánto debe medir un párrafo de Lorem Ipsum?
El párrafo clásico tiene 6-8 frases y unas 50-80 palabras. UtilBoxx te deja especificar exactamente lo que necesitas.

## Conclusión

Para texto de relleno rápido en cualquier contexto de diseño o desarrollo, el [Generador de Lorem Ipsum gratuito de UtilBoxx](/es/tools/text/lorem) es la herramienta adecuada. Para el clásico histórico, lipsum.com sigue en pie. Para generación desde código, las bibliotecas Faker son imbatibles. Sea cual sea la ruta, Lorem Ipsum sigue siendo el idioma universal del "texto falso de aspecto real".`;

const loremPt = `## O que é Lorem Ipsum?

**Lorem Ipsum** é um texto de placeholder que designers, tipógrafos, impressores e desenvolvedores vêm usando há séculos para preencher um layout com texto de aparência realista, sem distrair o leitor com conteúdo realmente legível. O trecho padrão começa com "Lorem ipsum dolor sit amet..." e parece latim, mas na verdade é uma passagem embaralhada e sem sentido derivada de uma obra do filósofo romano Cícero.

O ponto do Lorem Ipsum é parecer prosa real — variação no comprimento das palavras, ritmo natural, mistura de consoantes e vogais — para que um designer possa julgar como uma página ficará quando preenchida com conteúdo real, sem se distrair com o que as palavras dizem.

## De onde veio o Lorem Ipsum?

O trecho padrão de Lorem Ipsum é o texto fictício padrão da indústria desde os **anos 1500**, quando um impressor desconhecido embaralhou uma passagem do *De Finibus Bonorum et Malorum* (Sobre os fins dos bens e males) de Cícero para fazer um livro de amostras tipográficas. Sobreviveu não só cinco séculos, mas também a transição para a tipografia eletrônica e, mais recentemente, para softwares de editoração e design web.

O texto virou moda nos anos 1960, quando a Letraset lançou folhas de transferência a seco com trechos de Lorem Ipsum, e de novo nos anos 1990, quando o Aldus PageMaker (depois Adobe) o empacotou com seu software de publicação. Hoje é o placeholder padrão de quase toda ferramenta de design e prototipagem.

## Razões comuns para usar Lorem Ipsum

- **Maquetes de design**: preencher um layout antes de escrever o copy
- **Desenvolvimento web**: popular um CMS, blog ou tema com texto realista
- **Fontes e tipografia**: testar como uma tipografia lida com prosa realista
- **Provas de impressão**: previews para clientes com corpo de texto crível
- **Wireframes**: evitar lorem-shift ("asdf asdf asdf") que parece falso
- **Conteúdo de preenchimento**: quando o texto real não está pronto, mas o layout precisa de teste
- **Privacidade**: não usar texto real de clientes em prints e materiais de demo

## Método 1: Use o Gerador de Lorem Ipsum Gratuito do UtilBoxx (Recomendado)

A forma mais rápida de obter Lorem Ipsum na quantidade que você precisa é o [Gerador de Lorem Ipsum do UtilBoxx](/pt/tools/text/lorem). Ele roda no seu navegador, sem limite de caracteres, e permite especificar exatamente quantos parágrafos, frases ou palavras você quer.

Como usar:

1. Vá para [utilboxx.com/pt/tools/text/lorem](/pt/tools/text/lorem)
2. Escolha quanto texto gerar:
   - **Palavras** (ex.: 50, 100, 500)
   - **Frases** (ex.: 5, 10, 20)
   - **Parágrafos** (ex.: 3, 5, 10)
3. Clique em "Gerar"
4. Copie o resultado com um clique

**Por que este método é o melhor**:

- **100% grátis**, sem cadastro, sem anúncios
- **Privacidade em primeiro lugar**: o texto nunca sai do seu navegador
- **Quantidade flexível**: palavras, frases, parágrafos sob demanda
- **Lorem Ipsum clássico**: a mesma passagem confiável desde os 1500
- **Cópia em um clique**: cole em qualquer ferramenta de design, CMS ou documento
- **Sem limites**: de uma única frase a 100 parágrafos

Se você precisa de um trecho de texto de placeholder, este é disparado o caminho mais fácil.

## Método 2: lipsum.com (clássico web de longa data)

**lipsum.com** é um dos mais antigos geradores de Lorem Ipsum da web. Tem a passagem original e suporta geração por parágrafos, palavras, bytes ou listas. A interface é utilitária mas funcional, e é o gerador que a maioria dos designers old-school tem nos favoritos há 20+ anos.

Prós:
- Site confiável e de longa data
- Múltiplos formatos de saída (HTML, texto puro, etc.)
- Grátis, sem cadastro

Contras:
- Anúncios e popups na página
- Sem garantias de privacidade
- UX menos polida que ferramentas modernas

## Método 3: Faker.js / bibliotecas Faker (amigo dos devs)

Para desenvolvedores que precisam de dados de placeholder em código (nomes, endereços, texto lorem, etc.), existem bibliotecas **Faker** para praticamente toda linguagem: \`faker.js\` (JavaScript), \`Faker\` (Python e Ruby), \`FakerPHP\` (PHP), e por aí vai.

Em JavaScript:

\`\`\`
import { faker } from '@faker-js/faker';
const text = faker.lorem.paragraphs(3);
\`\`\`

Em Python:

\`\`\`
from faker import Faker
fake = Faker()
text = fake.paragraphs(3)
\`\`\`

São perfeitas para semear bancos, gerar dados de teste ou preencher um ambiente de dev. Para maquetes pontuais, um gerador de navegador é mais rápido.

## Perguntas frequentes

### Lorem Ipsum é latim de verdade?
Em sua maioria, não. O trecho padrão deriva do latim de Cícero, mas foi embaralhado, truncado e modificado ao longo dos séculos. Palavras como "lorem" não existem no latim clássico. Parece latim, mas é em grande parte sem sentido.

### Por que não usar apenas "asdf asdf asdf" ou palavras repetidas?
Porque Lorem Ipsum tem variação natural no comprimento das palavras, contagem de sílabas e distribuição de letras. Prosa de aparência real revela problemas de layout (órfãs, viúvas, quebras ruins, rag ruim) que "asdf asdf" esconde.

### Lorem Ipsum é livre para usar?
Sim. A obra original de Cícero é de domínio público, e o Lorem Ipsum embaralhado é reutilizado livremente há séculos. Não tem copyright.

### Posso usar Lorem Ipsum em um site no ar?
Tecnicamente sim, mas não faça isso — substitua por conteúdo real antes do lançamento. Lorem Ipsum num site ao vivo é sinal de produto inacabado.

### Qual a diferença entre Lorem Ipsum e outros textos de preenchimento?
Existem outros geradores (Bacon Ipsum, Cupcake Ipsum, Hipster Ipsum) e são divertidos pela personalidade. Para trabalho sério de design e dev, Lorem Ipsum é o padrão universal.

### Qual o tamanho certo de um parágrafo de Lorem Ipsum?
O parágrafo clássico tem 6-8 frases e cerca de 50-80 palavras. O UtilBoxx permite especificar exatamente o que você precisa.

## Conclusão

Para texto de placeholder rápido em qualquer contexto de design ou dev, o [Gerador de Lorem Ipsum gratuito do UtilBoxx](/pt/tools/text/lorem) é a ferramenta certa. Para o clássico histórico, o lipsum.com segue no ar. Para geração via código, as bibliotecas Faker são imbatíveis. Seja qual for o caminho, Lorem Ipsum segue sendo a língua universal do "texto falso de aparência real".`;

const loremFr = `## Qu'est-ce que Lorem Ipsum ?

**Lorem Ipsum** est un texte de remplissage que les designers, typographes, imprimeurs et développeurs utilisent depuis des siècles pour remplir une mise en page avec un texte d'apparence réaliste, sans distraire le lecteur avec du contenu réellement lisible. Le passage standard commence par "Lorem ipsum dolor sit amet..." et ressemble à du latin, mais est en fait un passage brouillé et dénué de sens dérivé d'une œuvre du philosophe romain Cicéron.

Tout l'intérêt de Lorem Ipsum est de ressembler à de la vraie prose — longueur de mots variée, rythme naturel, mélange de consonnes et de voyelles — pour qu'un designer puisse juger de l'apparence d'une page remplie de vrai contenu, sans être distrait par le sens des mots.

## D'où vient Lorem Ipsum ?

Le passage standard de Lorem Ipsum est le texte factice standard de l'industrie depuis les **années 1500**, lorsqu'un imprimeur inconnu a brouillé un passage du *De Finibus Bonorum et Malorum* (Des fins des biens et des maux) de Cicéron pour faire un livre d'échantillons de caractères. Il a survécu non seulement cinq siècles, mais aussi le passage à la typographie électronique, et plus récemment aux logiciels de PAO et au webdesign.

Le texte est devenu populaire dans les années 1960 lorsque Letraset a sorti des feuilles de transfert à sec avec des passages de Lorem Ipsum, puis à nouveau dans les années 1990 quand Aldus PageMaker (plus tard Adobe) l'a intégré à son logiciel de publication. Aujourd'hui, c'est le placeholder par défaut de presque tous les outils de design et de prototypage.

## Raisons courantes d'utiliser Lorem Ipsum

- **Maquettes de design** : remplir une mise en page avant d'écrire le copy
- **Développement web** : peupler un CMS, blog ou thème avec du texte réaliste
- **Polices et typographie** : tester comment une typo gère de la prose réaliste
- **Épreuves d'impression** : aperçus pour clients avec un corps de texte crédible
- **Wireframes** : éviter le lorem-shift ("asdf asdf asdf") qui a l'air faux
- **Contenu de remplissage** : quand le vrai texte n'est pas prêt mais la mise en page a besoin d'être testée
- **Confidentialité** : ne pas utiliser de vrai texte client dans les captures et les démos

## Méthode 1 : Utilise le Générateur de Lorem Ipsum Gratuit d'UtilBoxx (Recommandé)

La façon la plus rapide d'obtenir autant de Lorem Ipsum qu'il te faut est le [Générateur de Lorem Ipsum d'UtilBoxx](/fr/tools/text/lorem). Il tourne dans ton navigateur, sans limite de caractères, et te permet de spécifier exactement combien de paragraphes, phrases ou mots tu veux.

Comment l'utiliser :

1. Va sur [utilboxx.com/fr/tools/text/lorem](/fr/tools/text/lorem)
2. Choisis la quantité à générer :
   - **Mots** (p. ex. 50, 100, 500)
   - **Phrases** (p. ex. 5, 10, 20)
   - **Paragraphes** (p. ex. 3, 5, 10)
3. Clique sur "Générer"
4. Copie le résultat en un clic

**Pourquoi cette méthode est la meilleure** :

- **100% gratuit**, pas d'inscription, pas de pubs
- **Confidentialité d'abord** : le texte ne quitte jamais ton navigateur
- **Quantité flexible** : mots, phrases, paragraphes à la demande
- **Lorem Ipsum classique** : le même passage fiable depuis les années 1500
- **Copie en un clic** : colle dans n'importe quel outil de design, CMS ou document
- **Sans limite** : d'une seule phrase à 100 paragraphes

Si tu as besoin d'un bloc de texte de remplissage, c'est de loin la voie la plus simple.

## Méthode 2 : lipsum.com (classique web de longue date)

**lipsum.com** est l'un des plus anciens générateurs de Lorem Ipsum du web. Il a le passage original et supporte la génération par paragraphes, mots, octets ou listes. L'interface est utilitaire mais fonctionnelle, et c'est le générateur que la plupart des designers old-school ont en favori depuis 20+ ans.

Avantages :
- Site fiable et de longue date
- Multiples formats de sortie (HTML, texte brut, etc.)
- Gratuit, sans inscription

Inconvénients :
- Pubs et popups sur la page
- Pas de garantie de confidentialité
- UX moins soignée que les outils modernes

## Méthode 3 : Faker.js / bibliothèques Faker (ami des devs)

Pour les développeurs qui ont besoin de données de remplissage en code (noms, adresses, texte lorem, etc.), il existe des bibliothèques **Faker** pour presque tous les langages : \`faker.js\` (JavaScript), \`Faker\` (Python et Ruby), \`FakerPHP\` (PHP), etc.

En JavaScript :

\`\`\`
import { faker } from '@faker-js/faker';
const text = faker.lorem.paragraphs(3);
\`\`\`

En Python :

\`\`\`
from faker import Faker
fake = Faker()
text = fake.paragraphs(3)
\`\`\`

Parfaites pour seeder des bases, générer des données de test ou remplir un environnement de dev. Pour des maquettes ponctuelles, un générateur en navigateur est plus rapide.

## Questions fréquentes

### Lorem Ipsum est-il du vrai latin ?
En grande partie non. Le passage standard dérive du latin de Cicéron, mais il a été brouillé, tronqué et modifié au fil des siècles. Des mots comme "lorem" n'existent pas en latin classique. Ça ressemble à du latin mais c'est largement du non-sens.

### Pourquoi ne pas utiliser "asdf asdf asdf" ou des mots répétés ?
Parce que Lorem Ipsum a une variation naturelle de longueur de mot, de nombre de syllabes et de distribution des lettres. La prose d'apparence réelle révèle des problèmes de mise en page (orphelines, veuves, coupures gênantes, rag raté) que "asdf asdf" cache.

### Lorem Ipsum est-il libre d'utilisation ?
Oui. L'œuvre originale de Cicéron est dans le domaine public, et le Lorem Ipsum brouillé est réutilisé librement depuis des siècles. Il n'y a aucun copyright dessus.

### Puis-je utiliser Lorem Ipsum sur un site en production ?
Techniquement oui, mais ne le fais pas — remplace par du vrai contenu avant la mise en ligne. Du Lorem Ipsum sur un site en production est le signe d'un produit inachevé.

### Quelle est la différence entre Lorem Ipsum et les autres textes de remplissage ?
D'autres générateurs existent (Bacon Ipsum, Cupcake Ipsum, Hipster Ipsum) et sont sympas par leur personnalité. Pour le travail sérieux de design et de dev, Lorem Ipsum est le standard universel.

### Combien de temps doit faire un paragraphe de Lorem Ipsum ?
Le paragraphe classique fait 6-8 phrases et environ 50-80 mots. UtilBoxx te permet de spécifier exactement ce dont tu as besoin.

## Conclusion

Pour du texte de remplissage rapide dans n'importe quel contexte de design ou de dev, le [Générateur de Lorem Ipsum gratuit d'UtilBoxx](/fr/tools/text/lorem) est le bon outil. Pour le classique historique, lipsum.com est toujours en ligne. Pour de la génération en code, les bibliothèques Faker sont imbattables. Quelle que soit la voie, Lorem Ipsum reste la langue universelle du "faux texte à l'air vrai".`;

const loremDe = `## Was ist Lorem Ipsum?

**Lorem Ipsum** ist Platzhaltertext, den Designer, Schriftsetzer, Drucker und Entwickler seit Jahrhunderten verwenden, um ein Layout mit realistisch wirkendem Text zu füllen, ohne den Betrachter durch tatsächlich lesbaren Inhalt abzulenken. Der Standard-Abschnitt beginnt mit "Lorem ipsum dolor sit amet..." und sieht nach Latein aus, ist aber tatsächlich ein durcheinander gewürfelter, bedeutungsloser Abschnitt, der aus einem Werk des römischen Philosophen Cicero stammt.

Der ganze Sinn von Lorem Ipsum ist es, wie echte Prosa auszusehen — variierende Wortlängen, natürlicher Rhythmus, eine Mischung aus Konsonanten und Vokalen — damit ein Designer beurteilen kann, wie eine Seite aussehen wird, wenn sie mit echtem Inhalt gefüllt ist, ohne von der Bedeutung der Wörter abgelenkt zu werden.

## Woher kommt Lorem Ipsum?

Der Standard-Lorem-Ipsum-Abschnitt ist seit den **1500er Jahren** der Standard-Platzhaltertext der Branche, als ein unbekannter Drucker einen Abschnitt aus Ciceros *De Finibus Bonorum et Malorum* (Über die Grenzen des Guten und Bösen) durcheinander würfelte, um ein Schriftmusterbuch zu erstellen. Er hat nicht nur fünf Jahrhunderte überlebt, sondern auch den Sprung in den elektronischen Schriftsatz und schließlich in Desktop-Publishing-Software und Webdesign.

Der Text wurde in den 1960ern populär, als Letraset Trockenübertragungsbögen mit Lorem-Ipsum-Abschnitten herausbrachte, und erneut in den 1990ern, als Aldus PageMaker (später Adobe) ihn mit seiner Publishing-Software bündelte. Heute ist er der Standard-Platzhalter in nahezu jedem Design- und Prototyping-Tool.

## Häufige Gründe, Lorem Ipsum zu verwenden

- **Design-Mockups**: ein Layout füllen, bevor der Copy geschrieben ist
- **Web-Entwicklung**: ein CMS, Blog oder Theme mit realistischem Text befüllen
- **Schriften und Typografie**: testen, wie eine Schrift echte Prosa verarbeitet
- **Druckfahnen**: Vorschauen für Kunden mit glaubhaftem Textkörper
- **Wireframes**: Lorem-Shift ("asdf asdf asdf") vermeiden, der unecht aussieht
- **Füllinhalt**: wenn der echte Text nicht fertig ist, aber das Layout getestet werden muss
- **Datenschutz**: in Screenshots und Demo-Material keinen echten Kunden-Text verwenden

## Methode 1: Verwende den kostenlosen Lorem-Ipsum-Generator von UtilBoxx (Empfohlen)

Der schnellste Weg, so viel Lorem Ipsum zu bekommen, wie du brauchst, ist der [Lorem-Ipsum-Generator von UtilBoxx](/de/tools/text/lorem). Er läuft im Browser, hat keine Zeichenbegrenzung und lässt dich genau angeben, wie viele Absätze, Sätze oder Wörter du willst.

So nutzt du ihn:

1. Gehe zu [utilboxx.com/de/tools/text/lorem](/de/tools/text/lorem)
2. Wähle, wie viel Text erzeugt werden soll:
   - **Wörter** (z. B. 50, 100, 500)
   - **Sätze** (z. B. 5, 10, 20)
   - **Absätze** (z. B. 3, 5, 10)
3. Klicke auf "Generieren"
4. Kopiere das Ergebnis mit einem Klick

**Warum diese Methode am besten funktioniert**:

- **100% kostenlos**, keine Registrierung, keine Werbung
- **Datenschutz zuerst**: Text verlässt nie deinen Browser
- **Flexible Menge**: Wörter, Sätze, Absätze auf Abruf
- **Klassisches Lorem Ipsum**: derselbe bewährte Abschnitt seit den 1500ern
- **Ein-Klick-Kopie**: einfügen in jedes Design-Tool, CMS oder Dokument
- **Keine Grenzen**: vom einzelnen Satz bis zu 100 Absätzen

Wenn du einen Block Platzhaltertext brauchst, ist das mit Abstand der einfachste Weg.

## Methode 2: lipsum.com (langlebiger Web-Klassiker)

**lipsum.com** ist einer der ältesten Lorem-Ipsum-Generatoren im Web. Er hat den Original-Abschnitt und unterstützt die Generierung nach Absätzen, Wörtern, Bytes oder Listen. Die Oberfläche ist zweckmäßig, aber funktional, und es ist der Generator, den die meisten Alt-Schul-Designer seit 20+ Jahren als Lesezeichen haben.

Vorteile:
- Vertrauenswürdige, lang laufende Seite
- Mehrere Ausgabeformate (HTML, Klartext usw.)
- Kostenlos, keine Registrierung

Nachteile:
- Werbung und Popups auf der Seite
- Keine Datenschutzgarantien
- Weniger polierte UX als moderne Tools

## Methode 3: Faker.js / Faker-Bibliotheken (entwicklerfreundlich)

Für Entwickler, die Platzhalterdaten im Code brauchen (Namen, Adressen, Lorem-Text, das volle Programm), gibt es **Faker**-Bibliotheken für nahezu jede Sprache: \`faker.js\` (JavaScript), \`Faker\` (Python und Ruby), \`FakerPHP\` (PHP) und so weiter.

In JavaScript:

\`\`\`
import { faker } from '@faker-js/faker';
const text = faker.lorem.paragraphs(3);
\`\`\`

In Python:

\`\`\`
from faker import Faker
fake = Faker()
text = fake.paragraphs(3)
\`\`\`

Diese sind perfekt zum Seeden von Datenbanken, zum Erzeugen von Testdaten oder zum Befüllen einer Dev-Umgebung. Für gelegentliche Mockups ist ein Browser-Generator schneller.

## Häufig gestellte Fragen

### Ist Lorem Ipsum echtes Latein?
Meistens nicht. Der Standard-Abschnitt stammt von Ciceros Latein, wurde aber über die Jahrhunderte verwürfelt, gekürzt und verändert. Wörter wie "lorem" existieren im klassischen Latein nicht. Es sieht nach Latein aus, ist aber weitgehend Unsinn.

### Warum nicht einfach "asdf asdf asdf" oder wiederholte Wörter?
Weil Lorem Ipsum eine natürliche Variation in Wortlänge, Silbenzahl und Buchstabenverteilung hat. Echt wirkende Prosa deckt Layout-Probleme auf (Hurenkinder, Schusterjungen, unschöne Umbrüche, schlechte Rag), die "asdf asdf" versteckt.

### Ist Lorem Ipsum frei verwendbar?
Ja. Ciceros Originalwerk ist gemeinfrei, und das verwürfelte Lorem Ipsum wird seit Jahrhunderten frei wiederverwendet. Es hat keinen Copyright.

### Kann ich Lorem Ipsum auf einer Live-Site verwenden?
Technisch ja, aber tu es nicht — ersetze es vor dem Launch durch echten Content. Lorem Ipsum auf einer Live-Site ist ein Zeichen für ein unfertiges Produkt.

### Was ist der Unterschied zwischen Lorem Ipsum und anderen Fülltexten?
Es gibt andere Generatoren (Bacon Ipsum, Cupcake Ipsum, Hipster Ipsum), die durch Persönlichkeit Spaß machen. Für ernsthafte Design- und Dev-Arbeit ist Lorem Ipsum der universelle Standard.

### Wie lang sollte ein Lorem-Ipsum-Absatz sein?
Ein klassischer Absatz hat 6-8 Sätze und etwa 50-80 Wörter. UtilBoxx lässt dich genau angeben, was du brauchst.

## Fazit

Für schnellen Platzhaltertext in jedem Design- oder Dev-Kontext ist der [kostenlose Lorem-Ipsum-Generator von UtilBoxx](/de/tools/text/lorem) das richtige Tool. Für den historischen Klassiker ist lipsum.com weiter online. Für codegetriebene Generierung sind Faker-Bibliotheken ungeschlagen. Egal welchen Weg du wählst, Lorem Ipsum bleibt die Universalsprache des "echt wirkenden Falschtexts".`;

export const loremIpsumPost: Record<string, BlogPost> = {
  en: {
    slug: "what-is-lorem-ipsum",
    category: "Text Tools",
    date: "2026-05-20",
    readTime: "5 min",
    title: "What is Lorem Ipsum? History, Uses, and the Best Generator (2026)",
    description: "Discover the history of Lorem Ipsum, why designers and developers use it, and how to generate it online for free.",
    content: loremEn,
  },
  zh: {
    slug: "what-is-lorem-ipsum",
    category: "文本工具",
    date: "2026-05-20",
    readTime: "5 分钟",
    title: "什么是 Lorem Ipsum？历史、用途和最佳生成器 (2026)",
    description: "了解 Lorem Ipsum 的历史、设计师和开发者为什么使用它，以及如何在线免费生成。",
    content: loremZh,
  },
  ja: {
    slug: "what-is-lorem-ipsum",
    category: "テキストツール",
    date: "2026-05-20",
    readTime: "5 分",
    title: "Lorem Ipsum とは？歴史、用途、最良のジェネレーター (2026)",
    description: "Lorem Ipsum の歴史、デザイナーや開発者が使う理由、オンラインで無料生成する方法を紹介します。",
    content: loremJa,
  },
  es: {
    slug: "what-is-lorem-ipsum",
    category: "Herramientas de Texto",
    date: "2026-05-20",
    readTime: "5 min",
    title: "¿Qué es Lorem Ipsum? Historia, Usos y el Mejor Generador (2026)",
    description: "Descubre la historia de Lorem Ipsum, por qué lo usan diseñadores y desarrolladores, y cómo generarlo online gratis.",
    content: loremEs,
  },
  pt: {
    slug: "what-is-lorem-ipsum",
    category: "Ferramentas de Texto",
    date: "2026-05-20",
    readTime: "5 min",
    title: "O que é Lorem Ipsum? História, Usos e o Melhor Gerador (2026)",
    description: "Descubra a história do Lorem Ipsum, por que designers e desenvolvedores o usam e como gerá-lo online grátis.",
    content: loremPt,
  },
  fr: {
    slug: "what-is-lorem-ipsum",
    category: "Outils de Texte",
    date: "2026-05-20",
    readTime: "5 min",
    title: "Qu'est-ce que Lorem Ipsum ? Histoire, Usages et Meilleur Générateur (2026)",
    description: "Découvrez l'histoire de Lorem Ipsum, pourquoi designers et développeurs l'utilisent, et comment le générer en ligne gratuitement.",
    content: loremFr,
  },
  de: {
    slug: "what-is-lorem-ipsum",
    category: "Text-Tools",
    date: "2026-05-20",
    readTime: "5 Min",
    title: "Was ist Lorem Ipsum? Geschichte, Nutzen und der beste Generator (2026)",
    description: "Entdecke die Geschichte von Lorem Ipsum, warum Designer und Entwickler es nutzen, und wie du es online kostenlos erzeugst.",
    content: loremDe,
  },
};
