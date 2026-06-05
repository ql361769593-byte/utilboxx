// Blog post: CSS Named Colors Complete List
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const namedEn = `## What are CSS named colors?

CSS includes 148 named colors that you can use in place of hex codes or RGB values. Words like "tomato", "rebeccapurple", and "lightseagreen" are valid CSS color values, defined by the W3C and supported in every modern browser. Named colors make your stylesheets easier to read and remember.

They cover the full color wheel: primary, secondary, tertiary, gray, and a few special tones. Each name maps to a precise sRGB value. Some names are obvious ("red", "blue", "green"), while others are delightfully specific ("papayawhip", "lemonchiffon", "mediumvioletred").

## Common use cases

- **Quick prototyping**: Type a color name to set a placeholder
- **Readable CSS**: Replace \`#ff6347\` with \`tomato\` for clarity
- **Theming**: Use semantic names (--brand-primary: rebeccapurple) in CSS variables
- **Email templates**: Some clients restrict hex codes; named colors are widely supported
- **Teaching**: Named colors are great for introducing CSS to beginners

## Method 1: Use UtilBoxx's CSS named colors list (Recommended)

Our [CSS named colors list](/en/tools/color/named) shows every named color with its hex and RGB equivalent, supports search, and lets you copy any name or value with one click. Here is how to use it:

1. Go to [utilboxx.com/en/tools/color/named](/en/tools/color/named)
2. Browse or search the list (try "purple" or "gray")
3. Click any swatch to copy its name
4. Click the hex value to copy the precise code
5. Use the favorites button to bookmark the colors you use most

**Why this method works**:
- Searchable, color-grouped list
- One-click copy for name, hex, and RGB
- Shows a visual swatch for every color
- Mobile-friendly layout
- Free, no signup, no ads

## Method 2: Memorize the basics

A small set of named colors covers 80% of everyday CSS work:

- Red, green, blue (primary)
- Yellow, cyan, magenta (secondary)
- Black, white, gray
- Orange, pink, purple, brown
- Light/dark variants: lightgray, darkblue, etc.

For more exotic choices, keep a reference list handy.

## Method 3: Use CSS variables in your stylesheet

Define your palette as CSS custom properties and use the names in your code:

\`\`\`css
:root {
  --color-bg: white;
  --color-text: black;
  --color-accent: rebeccapurple;
  --color-warning: tomato;
}
\`\`\`

This combines the readability of named colors with the power of a centralized design system.

## Frequently asked questions

### How many named colors are there in CSS?
There are 148 named colors in the CSS Color Module Level 4 specification. The list includes all the historical colors plus newer additions like rebeccapurple (added in 2014 in memory of Eric Meyer's daughter).

### Are named colors case-insensitive?
Yes. CSS color names are case-insensitive, so "Tomato", "tomato", and "TOMATO" all refer to the same color. Lowercase is the conventional style.

### What is rebeccapurple?
It is \`#663399\`, added to the CSS spec in 2014 to honor Rebecca Alison Meyer, the daughter of CSS pioneer Eric Meyer. It is the only named color added to CSS for a non-technical reason.

### Can I use named colors in SVG and canvas?
Yes. SVG and the HTML5 canvas API both accept CSS named colors, making them universally compatible with the same names and values.

## Conclusion

CSS named colors are an underused gem. For a fast, searchable reference, the [UtilBoxx CSS named colors list](/en/tools/color/named) is the easiest way to find, compare, and copy them.`;

const namedZh = `## 什么是 CSS 命名颜色？

CSS 内置了 148 种命名颜色，可以代替十六进制代码或 RGB 值使用。诸如 "tomato"、"rebeccapurple"、"lightseagreen" 这样的单词都是合法的 CSS 颜色值，由 W3C 定义，所有现代浏览器都支持。命名颜色让你的样式表更易读、更易记。

它们覆盖了整个色环：原色、二次色、三次色、灰色，以及一些特殊色调。每个名字都对应一个精确的 sRGB 值。有些名字很明显（"red"、"blue"、"green"），其它则出奇地具体（"papayawhip"、"lemonchiffon"、"mediumvioletred"）。

## 常见使用场景

- **快速原型**：用颜色名设置占位符
- **可读 CSS**：用 \`tomato\` 代替 \`#ff6347\`，更清晰
- **主题化**：在 CSS 变量中使用语义化名字（--brand-primary: rebeccapurple）
- **邮件模板**：一些客户端限制 hex，命名颜色支持更广
- **教学**：命名颜色是给 CSS 初学者讲课的好材料

## 方法 1：使用 UtilBoxx CSS 命名颜色清单（推荐）

我们的 [CSS 命名颜色清单](/zh/tools/color/named) 展示每个命名颜色对应的 hex 和 RGB，支持搜索，一键复制名字或值。步骤如下：

1. 访问 [utilboxx.com/zh/tools/color/named](/zh/tools/color/named)
2. 浏览或搜索清单（试试 "purple" 或 "gray"）
3. 点击任意色板复制其名字
4. 点击 hex 值复制精确代码
5. 用收藏按钮收藏最常用的颜色

**这个方法的优势**：
- 可搜索、按颜色分组的清单
- 名字、hex、RGB 一键复制
- 每种颜色都有可视色板
- 移动端友好布局
- 免费、无需注册、无广告

## 方法 2：记住基础颜色

一组小而常用的命名颜色能覆盖 80% 的日常 CSS 工作：

- red、green、blue（原色）
- yellow、cyan、magenta（二次色）
- black、white、gray
- orange、pink、purple、brown
- 浅/深变体：lightgray、darkblue 等

需要更特殊的颜色时，备一份参考清单即可。

## 方法 3：在样式表中使用 CSS 变量

把你的色板定义为 CSS 自定义属性，在代码中使用名字：

\`\`\`css
:root {
  --color-bg: white;
  --color-text: black;
  --color-accent: rebeccapurple;
  --color-warning: tomato;
}
\`\`\`

这既保留了命名颜色的可读性，又具备集中化设计系统的能力。

## 常见问题

### CSS 一共有多少命名颜色？
CSS Color Module Level 4 规范中定义了 148 种命名颜色。清单包括所有历史颜色以及较新的 rebeccapurple（2014 年为纪念 Eric Meyer 的女儿而加入）。

### 命名颜色大小写敏感吗？
不敏感。"Tomato"、"tomato" 和 "TOMATO" 都指向同一种颜色。小写是约定风格。

### 什么是 rebeccapurple？
它是 \`#663399\`，2014 年加入 CSS 规范，用以纪念 CSS 先驱 Eric Meyer 的女儿 Rebecca Alison Meyer。它是 CSS 中唯一因非技术原因加入的命名颜色。

### SVG 和 canvas 中能用命名颜色吗？
可以。SVG 和 HTML5 canvas API 都接受 CSS 命名颜色，名字和值在各处通用。

## 结论

CSS 命名颜色是被低估的瑰宝。想要一个快速、可搜索的参考，把 [UtilBoxx CSS 命名颜色清单](/zh/tools/color/named) 加为书签是最佳选择。`;

const namedJa = `## CSS 名前付きカラーとは？

CSS には 148 種類の名前付きカラーがあり、16 進コードや RGB 値の代わりに使えます。「tomato」「rebeccapurple」「lightseagreen」といった単語は有効な CSS カラー値で、W3C で定義され、すべての最新ブラウザでサポートされています。名前付きカラーを使うとスタイルシートが読みやすく覚えやすくなります。

色相環全体をカバー：原色、二次色、三次色、グレー、特殊なトーンも少しだけ含みます。各名前は正確な sRGB 値に対応します。「red」「blue」「green」のように明快なものもあれば、「papayawhip」「lemonchiffon」「mediumvioletred」のように愉快に具体的なものもあります。

## よくある用途

- **クイックプロトタイピング**：色の名前を入力してプレースホルダを設定
- **読みやすい CSS**：\`#ff6347\` の代わりに \`tomato\` で意図が明確に
- **テーマ設定**：CSS 変数でセマンティックな名前（--brand-primary: rebeccapurple）を使用
- **メールテンプレート**：一部クライアントは 16 進を制限するため、名前付きの方が広く対応
- **教育**：CSS の入門に最適

## 方法 1：UtilBoxx の CSS 名前付きカラーリストを使う（推奨）

当社の [CSS 名前付きカラーリスト](/ja/tools/color/named) は、すべての名前付きカラーと hex・RGB 対応値を一覧表示し、検索とワンクリックコピーに対応します。手順は次のとおりです：

1. [utilboxx.com/ja/tools/color/named](/ja/tools/color/named) にアクセス
2. リストを閲覧または検索（「purple」や「gray」などで試す）
3. 任意の見本をクリックして名前をコピー
4. hex 値をクリックして正確なコードをコピー
5. お気に入りボタンで最も使う色をブックマーク

**この方法の長所**：
- 検索可能、色ごとにグループ化されたリスト
- 名前、hex、RGB をワンクリックでコピー
- 全色にビジュアル見本を表示
- モバイル向けレイアウト
- 無料、登録不要、広告なし

## 方法 2：基本色を暗記する

少数の名前付きカラーを覚えておくだけで日常 CSS の 80% をカバーできます：

- red、green、blue（原色）
- yellow、cyan、magenta（二次色）
- black、white、gray
- orange、pink、purple、brown
- 明暗のバリアント：lightgray、darkblue など

珍しい色はリファレンスを手元に置いておくのが良いでしょう。

## 方法 3：スタイルシートで CSS 変数を使う

パレットを CSS カスタムプロパティとして定義し、コード内で名前を使います：

\`\`\`css
:root {
  --color-bg: white;
  --color-text: black;
  --color-accent: rebeccapurple;
  --color-warning: tomato;
}
\`\`\`

名前付きカラーの読みやすさと一元化されたデザインシステムの力を両立できます。

## よくある質問

### CSS には何種類の名前付きカラーがありますか？
CSS Color Module Level 4 仕様には 148 種類の名前付きカラーがあります。すべての歴史的カラーと、rebeccapurple のような新しい追加（2014 年、Eric Meyer の娘を追悼して追加）を含みます。

### 名前付きカラーは大小文字を区別しますか？
いいえ。CSS のカラー名は大文字小文字を区別しないので、「Tomato」「tomato」「TOMATO」はすべて同じ色を表します。小文字が慣例です。

### rebeccapurple とは何ですか？
\`#663399\` で、CSS のパイオニア Eric Meyer の娘 Rebecca Alison Meyer さんを偲んで 2014 年に追加されました。技術的な理由以外で追加された唯一の名前付きカラーです。

### SVG や canvas で名前付きカラーを使えますか？
はい。SVG と HTML5 canvas API はどちらも CSS 名前付きカラーを受け付け、どの環境でも同じ名前と値で動作します。

## 結論

CSS 名前付きカラーは過小評価されている宝石です。素早く検索できるリファレンスとしては、[UtilBoxx の CSS 名前付きカラーリスト](/ja/tools/color/named) をブックマークしておくのが最も手軽です。`;

const namedEs = `## ¿Qué son los colores con nombre en CSS?

CSS incluye 148 colores con nombre que puedes usar en lugar de códigos hex o valores RGB. Palabras como "tomato", "rebeccapurple" y "lightseagreen" son valores de color CSS válidos, definidos por el W3C y soportados en todos los navegadores modernos. Los colores con nombre hacen que tus hojas de estilo sean más legibles y memorizables.

Cubren todo el círculo cromático: primarios, secundarios, terciarios, grises y algunos tonos especiales. Cada nombre se asigna a un valor sRGB preciso. Algunos nombres son evidentes ("red", "blue", "green"), mientras que otros son encantadoramente específicos ("papayawhip", "lemonchiffon", "mediumvioletred").

## Casos de uso comunes

- **Prototipado rápido**: escribe un nombre de color para fijar un placeholder
- **CSS legible**: reemplaza \`#ff6347\` con \`tomato\` para mayor claridad
- **Theming**: usa nombres semánticos (--brand-primary: rebeccapurple) en variables CSS
- **Plantillas de email**: algunos clientes limitan los hex; los nombres tienen mayor soporte
- **Enseñanza**: los nombres son ideales para introducir CSS a principiantes

## Método 1: Usa la lista de colores con nombre de CSS de UtilBoxx (Recomendado)

Nuestra [lista de colores con nombre de CSS](/es/tools/color/named) muestra cada color con su equivalente hex y RGB, permite buscar y copiar cualquier nombre o valor con un clic. Así se usa:

1. Ve a [utilboxx.com/es/tools/color/named](/es/tools/color/named)
2. Navega o busca en la lista (prueba "purple" o "gray")
3. Haz clic en cualquier muestra para copiar su nombre
4. Haz clic en el valor hex para copiar el código exacto
5. Usa el botón de favoritos para marcar los colores que más usas

**Por qué funciona este método**:
- Lista agrupada por color y con búsqueda
- Copia con un clic de nombre, hex y RGB
- Muestra una muestra visual para cada color
- Diseño adaptado a móvil
- Gratis, sin registro, sin anuncios

## Método 2: Memoriza los básicos

Un pequeño conjunto de colores con nombre cubre el 80% del trabajo CSS cotidiano:

- red, green, blue (primarios)
- yellow, cyan, magenta (secundarios)
- black, white, gray
- orange, pink, purple, brown
- Variantes claras/oscuras: lightgray, darkblue, etc.

Para elecciones más exóticas, ten a mano una lista de referencia.

## Método 3: Usa variables CSS en tu hoja de estilos

Define tu paleta como propiedades personalizadas y usa los nombres en tu código:

\`\`\`css
:root {
  --color-bg: white;
  --color-text: black;
  --color-accent: rebeccapurple;
  --color-warning: tomato;
}
\`\`\`

Esto combina la legibilidad de los nombres con la potencia de un sistema de diseño centralizado.

## Preguntas frecuentes

### ¿Cuántos colores con nombre hay en CSS?
Hay 148 colores con nombre en la especificación CSS Color Module Level 4. La lista incluye todos los colores históricos más adiciones modernas como rebeccapurple (añadido en 2014 en memoria de la hija de Eric Meyer).

### ¿Los nombres de color distinguen mayúsculas y minúsculas?
No. Los nombres de color CSS no distinguen mayúsculas, por lo que "Tomato", "tomato" y "TOMATO" se refieren al mismo color. La convención es minúscula.

### ¿Qué es rebeccapurple?
Es \`#663399\`, añadido a la especificación CSS en 2014 en honor a Rebecca Alison Meyer, hija del pionero de CSS Eric Meyer. Es el único color con nombre añadido a CSS por un motivo no técnico.

### ¿Puedo usar colores con nombre en SVG y canvas?
Sí. Tanto SVG como la API de canvas de HTML5 aceptan colores con nombre de CSS, siendo universalmente compatibles con los mismos nombres y valores.

## Conclusión

Los colores con nombre de CSS son una joya infrautilizada. Para una referencia rápida y buscable, la [lista de colores con nombre de UtilBoxx](/es/tools/color/named) es la forma más fácil de encontrarlos, compararlos y copiarlos.`;

const namedPt = `## O que são cores nomeadas em CSS?

CSS inclui 148 cores nomeadas que você pode usar no lugar de códigos hex ou valores RGB. Palavras como "tomato", "rebeccapurple" e "lightseagreen" são valores de cor CSS válidos, definidos pelo W3C e suportados em todos os navegadores modernos. Cores nomeadas deixam suas folhas de estilo mais legíveis e fáceis de lembrar.

Cobrem todo o círculo cromático: primárias, secundárias, terciárias, cinzas e alguns tons especiais. Cada nome mapeia para um valor sRGB preciso. Alguns nomes são óbvios ("red", "blue", "green"), enquanto outros são deliciosamente específicos ("papayawhip", "lemonchiffon", "mediumvioletred").

## Casos de uso comuns

- **Prototipagem rápida**: digite um nome de cor para definir um placeholder
- **CSS legível**: troque \`#ff6347\` por \`tomato\` para maior clareza
- **Theming**: use nomes semânticos (--brand-primary: rebeccapurple) em variáveis CSS
- **Templates de e-mail**: alguns clientes limitam hex; nomes têm suporte amplo
- **Ensino**: cores nomeadas são ótimas para introduzir CSS a iniciantes

## Método 1: Use a lista de cores nomeadas CSS do UtilBoxx (Recomendado)

Nossa [lista de cores nomeadas CSS](/pt/tools/color/named) mostra cada cor com seu equivalente hex e RGB, permite buscar e copiar qualquer nome ou valor com um clique. Veja como usar:

1. Vá para [utilboxx.com/pt/tools/color/named](/pt/tools/color/named)
2. Navegue ou busque na lista (tente "purple" ou "gray")
3. Clique em qualquer amostra para copiar o nome
4. Clique no valor hex para copiar o código exato
5. Use o botão de favoritos para marcar as cores que mais usa

**Por que este método funciona**:
- Lista agrupada por cor e com busca
- Cópia com um clique de nome, hex e RGB
- Mostra uma amostra visual para cada cor
- Layout adaptado para celular
- Grátis, sem cadastro, sem anúncios

## Método 2: Memorize os básicos

Um conjunto pequeno de cores nomeadas cobre 80% do trabalho CSS do dia a dia:

- red, green, blue (primárias)
- yellow, cyan, magenta (secundárias)
- black, white, gray
- orange, pink, purple, brown
- Variantes claras/escuras: lightgray, darkblue, etc.

Para escolhas mais exóticas, tenha uma lista de referência por perto.

## Método 3: Use variáveis CSS na sua folha de estilo

Defina sua paleta como propriedades customizadas e use os nomes no seu código:

\`\`\`css
:root {
  --color-bg: white;
  --color-text: black;
  --color-accent: rebeccapurple;
  --color-warning: tomato;
}
\`\`\`

Isso combina a legibilidade dos nomes com o poder de um design system centralizado.

## Perguntas frequentes

### Quantas cores nomeadas existem em CSS?
Existem 148 cores nomeadas na especificação CSS Color Module Level 4. A lista inclui todas as cores históricas e adições mais novas como rebeccapurple (adicionada em 2014 em memória da filha de Eric Meyer).

### Cores nomeadas diferenciam maiúsculas de minúsculas?
Não. Os nomes de cor em CSS não diferenciam maiúsculas, então "Tomato", "tomato" e "TOMATO" se referem à mesma cor. A convenção é minúscula.

### O que é rebeccapurple?
É \`#663399\`, adicionada à especificação CSS em 2014 em homenagem a Rebecca Alison Meyer, filha do pioneiro do CSS Eric Meyer. É a única cor nomeada adicionada ao CSS por motivo não técnico.

### Posso usar cores nomeadas em SVG e canvas?
Sim. SVG e a API de canvas do HTML5 aceitam cores nomeadas de CSS, sendo universalmente compatíveis com os mesmos nomes e valores.

## Conclusão

Cores nomeadas em CSS são uma joia subutilizada. Para uma referência rápida e pesquisável, a [lista de cores nomeadas do UtilBoxx](/pt/tools/color/named) é a forma mais fácil de encontrar, comparar e copiá-las.`;

const namedFr = `## Que sont les couleurs nommées CSS ?

CSS inclut 148 couleurs nommées utilisables à la place des codes hex ou des valeurs RGB. Des mots comme « tomato », « rebeccapurple » et « lightseagreen » sont des valeurs de couleur CSS valides, définies par le W3C et supportées par tous les navigateurs modernes. Les couleurs nommées rendent vos feuilles de style plus lisibles et plus faciles à mémoriser.

Elles couvrent l'ensemble du cercle chromatique : primaires, secondaires, tertiaires, gris, et quelques teintes spéciales. Chaque nom correspond à une valeur sRGB précise. Certains noms sont évidents (« red », « blue », « green »), d'autres sont étonnamment spécifiques (« papayawhip », « lemonchiffon », « mediumvioletred »).

## Cas d'usage courants

- **Prototypage rapide** : tapez un nom de couleur pour définir un placeholder
- **CSS lisible** : remplacez \`#ff6347\` par \`tomato\` pour plus de clarté
- **Thématisation** : utilisez des noms sémantiques (--brand-primary: rebeccapurple) dans des variables CSS
- **Templates d'email** : certains clients limitent les hex ; les noms sont largement supportés
- **Enseignement** : les couleurs nommées sont idéales pour introduire CSS aux débutants

## Méthode 1 : Utilisez la liste de couleurs nommées CSS d'UtilBoxx (Recommandé)

Notre [liste de couleurs nommées CSS](/fr/tools/color/named) affiche chaque couleur avec son équivalent hex et RGB, permet la recherche et la copie de tout nom ou valeur en un clic. Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/color/named](/fr/tools/color/named)
2. Parcourez ou recherchez dans la liste (essayez « purple » ou « gray »)
3. Cliquez sur une pastille pour copier son nom
4. Cliquez sur la valeur hex pour copier le code exact
5. Utilisez le bouton favoris pour mémoriser les couleurs que vous utilisez le plus

**Pourquoi cette méthode fonctionne** :
- Liste groupée par couleur et recherchable
- Copie en un clic du nom, hex et RGB
- Montre une pastille visuelle pour chaque couleur
- Mise en page adaptée au mobile
- Gratuit, sans inscription, sans publicité

## Méthode 2 : Mémorisez les bases

Un petit ensemble de couleurs nommées couvre 80 % du travail CSS courant :

- red, green, blue (primaires)
- yellow, cyan, magenta (secondaires)
- black, white, gray
- orange, pink, purple, brown
- Variantes claires/sombres : lightgray, darkblue, etc.

Pour des choix plus exotiques, gardez une liste de référence à portée.

## Méthode 3 : Utilisez des variables CSS dans votre feuille de style

Définissez votre palette comme propriétés personnalisées et utilisez les noms dans votre code :

\`\`\`css
:root {
  --color-bg: white;
  --color-text: black;
  --color-accent: rebeccapurple;
  --color-warning: tomato;
}
\`\`\`

Cela combine la lisibilité des noms avec la puissance d'un design system centralisé.

## Questions fréquentes

### Combien de couleurs nommées existe-t-il en CSS ?
Il y a 148 couleurs nommées dans la spécification CSS Color Module Level 4. La liste inclut toutes les couleurs historiques ainsi que des ajouts plus récents comme rebeccapurple (ajoutée en 2014 en mémoire de la fille d'Eric Meyer).

### Les noms de couleur sont-ils sensibles à la casse ?
Non. Les noms de couleur CSS sont insensibles à la casse, donc « Tomato », « tomato » et « TOMATO » désignent la même couleur. La convention est en minuscules.

### Qu'est-ce que rebeccapurple ?
C'est \`#663399\`, ajoutée à la spécification CSS en 2014 en hommage à Rebecca Alison Meyer, la fille du pionnier de CSS Eric Meyer. C'est la seule couleur nommée ajoutée à CSS pour une raison non technique.

### Puis-je utiliser les couleurs nommées en SVG et canvas ?
Oui. SVG et l'API canvas de HTML5 acceptent toutes deux les couleurs nommées CSS, avec les mêmes noms et valeurs de manière universelle.

## Conclusion

Les couleurs nommées CSS sont un joyau sous-employé. Pour une référence rapide et recherchable, la [liste de couleurs nommées d'UtilBoxx](/fr/tools/color/named) est la façon la plus simple de les trouver, comparer et copier.`;

const namedDe = `## Was sind benannte Farben in CSS?

CSS enthält 148 benannte Farben, die Sie anstelle von Hex-Codes oder RGB-Werten verwenden können. Wörter wie „tomato", „rebeccapurple" und „lightseagreen" sind gültige CSS-Farbwerte, definiert vom W3C und unterstützt in allen modernen Browsern. Benannte Farben machen Ihre Stylesheets lesbarer und einprägsamer.

Sie decken den gesamten Farbkreis ab: Primärfarben, Sekundärfarben, Tertiärfarben, Grautöne und einige spezielle Töne. Jeder Name ist einem präzisen sRGB-Wert zugeordnet. Manche Namen sind offensichtlich („red", „blue", „green"), andere sind erfreulich spezifisch („papayawhip", „lemonchiffon", „mediumvioletred").

## Häufige Anwendungsfälle

- **Schnelles Prototyping**: Geben Sie einen Farbnamen ein, um einen Platzhalter zu setzen
- **Lesbares CSS**: Ersetzen Sie \`#ff6347\` durch \`tomato\` für mehr Klarheit
- **Theming**: Verwenden Sie semantische Namen (--brand-primary: rebeccapurple) in CSS-Variablen
- **E-Mail-Vorlagen**: Manche Clients schränken Hex ein; Namen sind weit verbreitet
- **Lehre**: Benannte Farben eignen sich hervorragend, um CSS-Anfängern den Einstieg zu erleichtern

## Methode 1: Die CSS-Named-Colors-Liste von UtilBoxx verwenden (Empfohlen)

Unsere [CSS-Named-Colors-Liste](/de/tools/color/named) zeigt jede benannte Farbe mit ihrem Hex- und RGB-Äquivalent, unterstützt Suche und kopiert jeden Namen oder Wert mit einem Klick. So verwenden Sie sie:

1. Gehen Sie zu [utilboxx.com/de/tools/color/named](/de/tools/color/named)
2. Durchsuchen Sie die Liste (probieren Sie „purple" oder „gray")
3. Klicken Sie auf ein Farbfeld, um den Namen zu kopieren
4. Klicken Sie auf den Hex-Wert, um den exakten Code zu kopieren
5. Markieren Sie mit dem Favoriten-Button Ihre meistgenutzten Farben

**Warum diese Methode funktioniert**:
- Durchsuchbare, nach Farben gruppierte Liste
- Ein-Klick-Kopie von Name, Hex und RGB
- Zeigt für jede Farbe ein visuelles Feld
- Mobilfreundliches Layout
- Kostenlos, keine Registrierung, keine Werbung

## Methode 2: Die Grundlagen im Kopf behalten

Ein kleiner Satz benannter Farben deckt 80 % der alltäglichen CSS-Arbeit ab:

- red, green, blue (Primärfarben)
- yellow, cyan, magenta (Sekundärfarben)
- black, white, gray
- orange, pink, purple, brown
- Helle/dunkle Varianten: lightgray, darkblue usw.

Für exotischere Wahlen halten Sie eine Referenzliste griffbereit.

## Methode 3: CSS-Variablen im Stylesheet nutzen

Definieren Sie Ihre Palette als benutzerdefinierte Eigenschaften und verwenden Sie die Namen im Code:

\`\`\`css
:root {
  --color-bg: white;
  --color-text: black;
  --color-accent: rebeccapurple;
  --color-warning: tomato;
}
\`\`\`

Das verbindet die Lesbarkeit benannter Farben mit der Macht eines zentralisierten Designsystems.

## Häufig gestellte Fragen

### Wie viele benannte Farben gibt es in CSS?
Die Spezifikation CSS Color Module Level 4 enthält 148 benannte Farben. Die Liste umfasst alle historischen Farben sowie neuere Ergänzungen wie rebeccapurple (2014 hinzugefügt, zum Gedenken an die Tochter von Eric Meyer).

### Sind benannte Farben case-sensitive?
Nein. CSS-Farbnamen sind case-insensitiv, daher bezeichnen „Tomato", „tomato" und „TOMATO" dieselbe Farbe. Kleinschreibung ist die Konvention.

### Was ist rebeccapurple?
Es ist \`#663399\`, das 2014 zu Ehren von Rebecca Alison Meyer, der Tochter des CSS-Pioniers Eric Meyer, in die CSS-Spezifikation aufgenommen wurde. Es ist die einzige benannte Farbe, die aus einem nicht-technischen Grund in CSS aufgenommen wurde.

### Kann ich benannte Farben in SVG und Canvas verwenden?
Ja. Sowohl SVG als auch die HTML5-Canvas-API akzeptieren benannte CSS-Farben und sind universell mit denselben Namen und Werten kompatibel.

## Fazit

Benannte CSS-Farben sind ein unterschätztes Juwel. Für eine schnelle, durchsuchbare Referenz ist die [CSS-Named-Colors-Liste von UtilBoxx](/de/tools/color/named) die einfachste Möglichkeit, sie zu finden, zu vergleichen und zu kopieren.`;

export const namedColorsPost: Record<string, BlogPost> = {
  en: {
    slug: "css-named-colors-complete-list",
    category: "Color Tools",
    date: "2026-05-20",
    readTime: "7 min",
    title: "CSS Named Colors: Complete List of 148 Colors",
    description: "The full list of CSS named colors with hex and RGB equivalents. Searchable, copyable, and mobile-friendly.",
    content: namedEn,
  },
  zh: {
    slug: "css-named-colors-complete-list",
    category: "颜色工具",
    date: "2026-05-20",
    readTime: "7 分钟",
    title: "CSS 命名颜色：148 种颜色完整清单",
    description: "完整的 CSS 命名颜色清单，含 hex 和 RGB 对应值。可搜索、可复制，移动端友好。",
    content: namedZh,
  },
  ja: {
    slug: "css-named-colors-complete-list",
    category: "色ツール",
    date: "2026-05-20",
    readTime: "7 分",
    title: "CSS 名前付きカラー：148 色の完全リスト",
    description: "CSS 名前付きカラーの完全リストと hex・RGB 対応値。検索、コピー、モバイル対応。",
    content: namedJa,
  },
  es: {
    slug: "css-named-colors-complete-list",
    category: "Herramientas de Color",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Colores con nombre en CSS: lista completa de 148 colores",
    description: "Lista completa de colores con nombre en CSS con hex y RGB. Buscable, copiable y adaptada a móvil.",
    content: namedEs,
  },
  pt: {
    slug: "css-named-colors-complete-list",
    category: "Ferramentas de Cor",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Cores nomeadas em CSS: lista completa de 148 cores",
    description: "Lista completa de cores nomeadas em CSS com hex e RGB. Pesquisável, copiável e adaptada para celular.",
    content: namedPt,
  },
  fr: {
    slug: "css-named-colors-complete-list",
    category: "Outils de Couleur",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Couleurs nommées CSS : liste complète des 148 couleurs",
    description: "Liste complète des couleurs nommées CSS avec hex et RGB. Recherchable, copiable et adaptée au mobile.",
    content: namedFr,
  },
  de: {
    slug: "css-named-colors-complete-list",
    category: "Farb-Tools",
    date: "2026-05-20",
    readTime: "7 Min",
    title: "Benannte CSS-Farben: vollständige Liste der 148 Farben",
    description: "Vollständige Liste der benannten CSS-Farben mit Hex- und RGB-Werten. Durchsuchbar, kopierbar, mobilfreundlich.",
    content: namedDe,
  },
};
