// Blog post: How to Create CSS Gradient
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const gradientEn = `## Why use CSS gradients?

CSS gradients let you create smooth color transitions without image files. They are perfect for backgrounds, buttons, cards, and hero sections. Because gradients are generated in the browser from code, they scale perfectly to any resolution, add zero download weight, and can be tweaked instantly. The two main types are linear gradients (straight color flow) and radial gradients (circular color flow), with conic gradients (swept around a center) added more recently.

A well-chosen gradient can elevate a flat design, set a mood, or guide the eye to a call to action. The key is starting from a strong color pair and choosing the right direction and stops.

## Common use cases

- **Hero sections**: Eye-catching backgrounds for landing pages
- **Buttons**: Subtle gradients make CTAs feel more clickable
- **Cards and panels**: Background depth without images
- **Loading states**: Smooth shimmer effects for placeholders
- **Borders and text**: Newer CSS lets you apply gradients to text strokes and borders

## Method 1: Use UtilBoxx's free CSS gradient generator (Recommended)

Our [CSS gradient generator](/en/tools/color/gradient) lets you pick colors, set stops, choose direction, and copy production-ready CSS. Here is how to use it:

1. Go to [utilboxx.com/en/tools/color/gradient](/en/tools/color/gradient)
2. Pick two or more colors with the color pickers
3. Adjust stops, angle, and shape (linear, radial, conic)
4. Preview the result live in the canvas
5. Click "Copy CSS" to grab the snippet

**Why this method works**:
- Live preview with no page reload
- Exports clean, vendor-prefixed CSS
- Supports linear, radial, and conic gradients
- Lets you save and share gradients via URL
- Works on mobile with touch-friendly controls

## Method 2: Write the CSS by hand

A linear gradient in CSS looks like this:

\`\`\`css
background: linear-gradient(135deg, #ff7e5f, #feb47b);
\`\`\`

For a radial gradient:

\`\`\`css
background: radial-gradient(circle at center, #6a11cb, #2575fc);
\`\`\`

For a conic gradient (great for pie-chart effects):

\`\`\`css
background: conic-gradient(from 180deg, red, yellow, lime, cyan, blue, magenta, red);
\`\`\`

You can use any number of color stops and percentages to control blending.

## Method 3: Use a pre-made gradient library

Sites like uiGradients, Grabient, and ColorHub offer curated collections of beautiful gradients. You can browse, copy the CSS, and paste it into your project. This is the fastest option when you do not need a custom design.

## Frequently asked questions

### What is the difference between linear, radial, and conic gradients?
Linear flows in a straight line; radial radiates from a center point; conic sweeps colors around a center, like a color wheel. Each creates a different visual effect.

### Do CSS gradients affect performance?
No. Gradients are computed by the browser's compositor and are essentially free at runtime. They have smaller payload than background images and scale to any resolution.

### Can I use gradients in borders and text?
Yes. With \`border-image: linear-gradient(...)\` for borders, and \`background-clip: text; color: transparent;\` for text fills, you can apply gradients almost anywhere.

### How do I make a gradient accessible?
Ensure adequate contrast with the text on top. Use a contrast checker to verify, and consider providing a solid-color fallback for users who prefer reduced motion or high contrast.

## Conclusion

CSS gradients are a powerful, lightweight design tool. For a fast, visual workflow, the [UtilBoxx CSS gradient generator](/en/tools/color/gradient) is the easiest way to design and copy production-ready code.`;

const gradientZh = `## 为什么要用 CSS 渐变？

CSS 渐变让你在不使用图片的情况下创建平滑的色彩过渡。它非常适合做背景、按钮、卡片和首屏区域。由于渐变是浏览器从代码生成的，它可以完美缩放到任意分辨率，不增加下载体积，并能即时调整。主要有两类：线性渐变（沿直线流动）和径向渐变（沿圆形流动），近几年又新增了锥形渐变（围绕中心旋转）。

选好渐变可以让扁平设计更有层次、营造氛围，或引导视线聚焦在行动号召上。关键是从一组强对比的配色开始，并选对方向和色彩节点。

## 常见使用场景

- **首屏区域**：吸睛的着陆页背景
- **按钮**：细腻的渐变让 CTA 看起来更可点
- **卡片和面板**：不靠图片也能打造背景层次
- **加载状态**：为占位符制作平滑流光效果
- **边框和文字**：新一代 CSS 可以把渐变应用到文字描边和边框

## 方法 1：使用 UtilBoxx 免费 CSS 渐变生成器（推荐）

我们的 [CSS 渐变生成器](/zh/tools/color/gradient) 让你挑选颜色、设置节点、选择方向，并复制可上线的 CSS。步骤如下：

1. 访问 [utilboxx.com/zh/tools/color/gradient](/zh/tools/color/gradient)
2. 用拾色器选择两种或更多颜色
3. 调整节点、角度和形状（线性、径向、锥形）
4. 在画布中实时预览效果
5. 点击"复制 CSS"获取代码片段

**这个方法的优势**：
- 实时预览，无需刷新页面
- 输出干净、含浏览器前缀的 CSS
- 支持线性、径向、锥形渐变
- 可通过 URL 保存和分享渐变
- 移动端可用，触控友好

## 方法 2：手写 CSS

CSS 中的线性渐变长这样：

\`\`\`css
background: linear-gradient(135deg, #ff7e5f, #feb47b);
\`\`\`

径向渐变：

\`\`\`css
background: radial-gradient(circle at center, #6a11cb, #2575fc);
\`\`\`

锥形渐变（特别适合做饼图效果）：

\`\`\`css
background: conic-gradient(from 180deg, red, yellow, lime, cyan, blue, magenta, red);
\`\`\`

你可以使用任意数量的颜色节点和百分比来控制混合。

## 方法 3：使用现成的渐变库

uiGradients、Grabient、ColorHub 等网站提供了精心挑选的渐变集合。你可以浏览、复制 CSS 粘贴到项目中。当你不需要定制设计时，这是最快的方式。

## 常见问题

### 线性、径向、锥形渐变的区别是什么？
线性沿直线流动；径向从中心点向外辐射；锥形围绕中心扫过颜色，像调色盘。每种都产生不同的视觉效果。

### CSS 渐变会影响性能吗？
不会。渐变由浏览器的合成器计算，运行时几乎免费。比背景图片体积小，并能适应任意分辨率。

### 渐变能用在边框和文字上吗？
可以。用 \`border-image: linear-gradient(...)\` 应用到边框，用 \`background-clip: text; color: transparent;\` 填充文字。渐变几乎可以应用到任何地方。

### 如何让渐变具备可访问性？
确保与上面文字的对比度足够。用对比度检查器验证，并考虑为偏好减弱动效或高对比度的用户提供纯色回退。

## 结论

CSS 渐变是一种强大、轻量的设计工具。想要快速、可视化的工作流，[UtilBoxx CSS 渐变生成器](/zh/tools/color/gradient) 是设计和复制可上线代码的最简单方式。`;

const gradientJa = `## なぜ CSS グラデーションを使うのか？

CSS グラデーションを使うと、画像ファイルなしで滑らかな色の遷移を作れます。背景、ボタン、カード、ヒーローセクションに最適です。グラデーションはコードからブラウザで生成されるため、あらゆる解像度にきれいにスケールし、ダウンロードサイズを増やさず、瞬時に調整できます。主な種類は直線状の流れを作る「リニアグラデーション」と、円形に広がる「ラジアルグラデーション」、そして近年追加された中心の周りを回転する「コーニックグラデーション」です。

良いグラデーションを選べば、フラットデザインに奥行きを足し、雰囲気を演出し、視線を CTA に導けます。鍵は強い色の組み合わせから始め、方向とカラーストップを適切に選ぶことです。

## よくある用途

- **ヒーローセクション**：ランディングページの目を引く背景
- **ボタン**：微妙なグラデーションで CTA をクリックしやすく
- **カードとパネル**：画像なしで背景に奥行き
- **ローディング状態**：プレースホルダーに滑らかなシマーを作る
- **ボーダーとテキスト**：新しい CSS ではグラデーションを文字やボーダーに適用可能

## 方法 1：UtilBoxx の無料 CSS グラデーションメーカーを使う（推奨）

当社の [CSS グラデーションメーカー](/ja/tools/color/gradient) では、色を選び、ストップを設定し、方向を選んで、本番対応の CSS をコピーできます。手順は次のとおりです：

1. [utilboxx.com/ja/tools/color/gradient](/ja/tools/color/gradient) にアクセス
2. カラーピッカーで 2 色以上を選ぶ
3. ストップ、角度、形状（リニア、ラジアル、コーニック）を調整
4. キャンバスで結果をライブプレビュー
5.「CSS をコピー」をクリックしてスニペットを取得

**この方法の長所**：
- ページリロードなしのライブプレビュー
- ベンダープレフィックス付きのクリーンな CSS を出力
- リニア、ラジアル、コーニックに対応
- URL でグラデーションを保存・共有可能
- モバイル対応でタッチ操作に最適

## 方法 2：手で CSS を書く

リニアグラデーションの例：

\`\`\`css
background: linear-gradient(135deg, #ff7e5f, #feb47b);
\`\`\`

ラジアルグラデーション：

\`\`\`css
background: radial-gradient(circle at center, #6a11cb, #2575fc);
\`\`\`

コーニックグラデーション（円グラフ風効果に最適）：

\`\`\`css
background: conic-gradient(from 180deg, red, yellow, lime, cyan, blue, magenta, red);
\`\`\`

任意数のカラーストップとパーセンテージでブレンドを制御できます。

## 方法 3：既成のグラデーションライブラリを使う

uiGradients、Grabient、ColorHub などのサイトが、厳選された美しいグラデーション集を提供しています。閲覧して CSS をコピーし、プロジェクトに貼り付けるだけ。カスタムデザインが必要ない場合は最も早い手段です。

## よくある質問

### リニア、ラジアル、コーニックの違いは？
リニアは直線、ラジアルは中心から外側へ放射状に、コーニックは中心の周りをカラーホイールのように回ります。すべて異なる視覚効果を生みます。

### CSS グラデーションはパフォーマンスに影響しますか？
いいえ。グラデーションはブラウザのコンポジターで計算され、実行時はほぼ無料です。背景画像より軽く、あらゆる解像度にスケールします。

### グラデーションをボーダーやテキストに使えますか？
はい。\`border-image: linear-gradient(...)\` でボーダーに、\`background-clip: text; color: transparent;\` でテキスト塗りつぶしに適用できます。

### アクセシブルなグラデーションにするには？
上のテキストと十分なコントラストを確保してください。コントラストチェッカーで検証し、アニメーション抑制や高コントラスト設定のユーザーには単色フォールバックを提供することを検討してください。

## 結論

CSS グラデーションは強力で軽量なデザインツールです。迅速で視覚的なワークフローには [UtilBoxx の CSS グラデーションメーカー](/ja/tools/color/gradient) がデザインと本番コードのコピーに最も手軽です。`;

const gradientEs = `## ¿Por qué usar gradientes CSS?

Los gradientes CSS te permiten crear transiciones de color suaves sin archivos de imagen. Son perfectos para fondos, botones, tarjetas y secciones hero. Como los gradientes se generan en el navegador a partir de código, escalan perfectamente a cualquier resolución, no añaden peso de descarga y se pueden ajustar al instante. Los dos tipos principales son gradientes lineales (flujo recto de color) y gradientes radiales (flujo circular), a los que se han sumado los gradientes cónicos (que barren alrededor de un centro).

Un gradiente bien elegido puede elevar un diseño plano, fijar un ambiente o guiar la vista hacia una llamada a la acción. La clave es partir de un par de colores con fuerza y elegir bien la dirección y las paradas.

## Casos de uso comunes

- **Secciones hero**: fondos llamativos para landing pages
- **Botones**: gradientes sutiles hacen los CTA más clickables
- **Tarjetas y paneles**: profundidad de fondo sin imágenes
- **Estados de carga**: efectos de brillo suave para placeholders
- **Bordes y texto**: las versiones más nuevas de CSS permiten aplicar gradientes a bordes y contornos de texto

## Método 1: Usa el generador de gradientes CSS gratuito de UtilBoxx (Recomendado)

Nuestro [generador de gradientes CSS](/es/tools/color/gradient) te permite elegir colores, ajustar paradas, dirección y copiar CSS listo para producción. Así se usa:

1. Ve a [utilboxx.com/es/tools/color/gradient](/es/tools/color/gradient)
2. Elige dos o más colores con los selectores
3. Ajusta paradas, ángulo y forma (lineal, radial, cónico)
4. Previsualiza el resultado en vivo en el lienzo
5. Pulsa "Copiar CSS" para obtener el fragmento

**Por qué funciona este método**:
- Vista previa en vivo sin recargar
- Exporta CSS limpio y con prefijos de proveedor
- Soporta gradientes lineales, radiales y cónicos
- Permite guardar y compartir gradientes por URL
- Funciona en móvil con controles táctiles

## Método 2: Escribe el CSS a mano

Un gradiente lineal en CSS se ve así:

\`\`\`css
background: linear-gradient(135deg, #ff7e5f, #feb47b);
\`\`\`

Para un gradiente radial:

\`\`\`css
background: radial-gradient(circle at center, #6a11cb, #2575fc);
\`\`\`

Para un gradiente cónico (ideal para efectos de gráfico circular):

\`\`\`css
background: conic-gradient(from 180deg, red, yellow, lime, cyan, blue, magenta, red);
\`\`\`

Puedes usar cualquier número de paradas y porcentajes para controlar la mezcla.

## Método 3: Usa una biblioteca de gradientes prefabricada

Sitios como uiGradients, Grabient y ColorHub ofrecen colecciones cuidadas de gradientes. Puedes navegar, copiar el CSS y pegarlo en tu proyecto. Es la opción más rápida cuando no necesitas un diseño a medida.

## Preguntas frecuentes

### ¿Cuál es la diferencia entre gradiente lineal, radial y cónico?
El lineal fluye en línea recta; el radial irradia desde un punto central; el cónico barre los colores alrededor de un centro, como una rueda de color. Cada uno crea un efecto visual diferente.

### ¿Afectan los gradientes CSS al rendimiento?
No. Los gradientes los calcula el compositor del navegador y son esencialmente gratis en tiempo de ejecución. Tienen menor peso que las imágenes de fondo y escalan a cualquier resolución.

### ¿Puedo usar gradientes en bordes y texto?
Sí. Con \`border-image: linear-gradient(...)\` para bordes, y \`background-clip: text; color: transparent;\` para rellenar texto, puedes aplicar gradientes casi en cualquier parte.

### ¿Cómo hago un gradiente accesible?
Asegura un contraste adecuado con el texto encima. Usa un verificador de contraste y considera ofrecer un color sólido de respaldo para usuarios con movimiento reducido o alto contraste.

## Conclusión

Los gradientes CSS son una herramienta de diseño potente y ligera. Para un flujo de trabajo rápido y visual, el [generador de gradientes CSS de UtilBoxx](/es/tools/color/gradient) es la forma más fácil de diseñar y copiar código listo para producción.`;

const gradientPt = `## Por que usar gradientes CSS?

Gradientes CSS permitem criar transições de cor suaves sem arquivos de imagem. São perfeitos para fundos, botões, cartões e seções hero. Como os gradientes são gerados no navegador a partir de código, escalam perfeitamente em qualquer resolução, não acrescentam peso de download e podem ser ajustados na hora. Os dois tipos principais são gradientes lineares (fluxo reto de cor) e radiais (fluxo circular), com os gradientes cônicos (que varrem em torno de um centro) chegando mais recentemente.

Um gradiente bem escolhido pode elevar um design plano, definir o clima ou guiar o olhar para uma chamada à ação. A chave é começar com um par de cores forte e escolher a direção e os pontos certos.

## Casos de uso comuns

- **Seções hero**: fundos chamativos para landing pages
- **Botões**: gradientes sutis tornam CTAs mais clicáveis
- **Cartões e painéis**: profundidade de fundo sem imagens
- **Estados de carregamento**: efeitos de brilho suave em placeholders
- **Bordas e texto**: versões mais novas do CSS permitem aplicar gradientes em bordas e contornos de texto

## Método 1: Use o gerador de gradientes CSS gratuito do UtilBoxx (Recomendado)

Nosso [gerador de gradientes CSS](/pt/tools/color/gradient) permite escolher cores, ajustar paradas, direção e copiar CSS pronto para produção. Veja como usar:

1. Vá para [utilboxx.com/pt/tools/color/gradient](/pt/tools/color/gradient)
2. Escolha duas ou mais cores com os seletores
3. Ajuste paradas, ângulo e forma (linear, radial, cônico)
4. Pré-visualize o resultado ao vivo no canvas
5. Clique em "Copiar CSS" para pegar o snippet

**Por que este método funciona**:
- Pré-visualização ao vivo sem recarregar
- Exporta CSS limpo e com prefixos de vendor
- Suporta gradientes lineares, radiais e cônicos
- Permite salvar e compartilhar gradientes por URL
- Funciona no celular com controles de toque

## Método 2: Escreva o CSS à mão

Um gradiente linear em CSS fica assim:

\`\`\`css
background: linear-gradient(135deg, #ff7e5f, #feb47b);
\`\`\`

Para um gradiente radial:

\`\`\`css
background: radial-gradient(circle at center, #6a11cb, #2575fc);
\`\`\`

Para um gradiente cônico (ótimo para efeitos de gráfico de pizza):

\`\`\`css
background: conic-gradient(from 180deg, red, yellow, lime, cyan, blue, magenta, red);
\`\`\`

Você pode usar qualquer número de paradas e percentuais para controlar a mistura.

## Método 3: Use uma biblioteca de gradientes pronta

Sites como uiGradients, Grabient e ColorHub oferecem coleções curadas de gradientes bonitos. Você pode navegar, copiar o CSS e colar no seu projeto. É a opção mais rápida quando você não precisa de um design sob medida.

## Perguntas frequentes

### Qual a diferença entre gradiente linear, radial e cônico?
O linear flui em linha reta; o radial irradia de um ponto central; o cônico varre as cores em torno de um centro, como uma roda de cores. Cada um cria um efeito visual diferente.

### Gradientes CSS afetam a performance?
Não. Gradientes são calculados pelo compositor do navegador e são essencialmente gratuitos em tempo de execução. Têm peso menor que imagens de fundo e escalam em qualquer resolução.

### Posso usar gradientes em bordas e texto?
Sim. Com \`border-image: linear-gradient(...)\` para bordas, e \`background-clip: text; color: transparent;\` para preencher texto, dá para aplicar gradientes em quase qualquer lugar.

### Como fazer um gradiente acessível?
Garanta contraste adequado com o texto em cima. Use um verificador de contraste e considere oferecer uma cor sólida alternativa para usuários que preferem movimento reduzido ou alto contraste.

## Conclusão

Gradientes CSS são uma ferramenta de design poderosa e leve. Para um fluxo de trabalho rápido e visual, o [gerador de gradientes CSS do UtilBoxx](/pt/tools/color/gradient) é a forma mais fácil de projetar e copiar código pronto para produção.`;

const gradientFr = `## Pourquoi utiliser des dégradés CSS ?

Les dégradés CSS permettent de créer des transitions de couleur fluides sans fichiers image. Ils sont parfaits pour les fonds, boutons, cartes et sections hero. Comme les dégradés sont générés dans le navigateur à partir de code, ils s'adaptent à toute résolution, n'ajoutent aucun poids de téléchargement et se règlent instantanément. Les deux principaux types sont les dégradés linéaires (flux de couleur en ligne droite) et les dégradés radiaux (flux circulaire), rejoints plus récemment par les dégradés coniques (qui balayent autour d'un centre).

Un dégradé bien choisi peut rehausser un design plat, fixer une ambiance ou guider l'œil vers un appel à l'action. La clé est de partir d'une paire de couleurs fortes et de choisir la bonne direction et les bons points d'arrêt.

## Cas d'usage courants

- **Sections hero** : fonds accrocheurs pour les pages d'atterrissage
- **Boutons** : des dégradés subtils rendent les CTA plus cliquables
- **Cartes et panneaux** : profondeur de fond sans images
- **États de chargement** : effets de scintillement doux pour les placeholders
- **Bordures et texte** : les versions plus récentes du CSS permettent d'appliquer des dégradés aux bordures et aux contours de texte

## Méthode 1 : Utilisez le générateur de dégradés CSS gratuit d'UtilBoxx (Recommandé)

Notre [générateur de dégradés CSS](/fr/tools/color/gradient) vous permet de choisir des couleurs, régler les arrêts, la direction et de copier du CSS prêt pour la production. Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/color/gradient](/fr/tools/color/gradient)
2. Choisissez deux couleurs ou plus avec les sélecteurs
3. Ajustez arrêts, angle et forme (linéaire, radial, conique)
4. Prévisualisez le résultat en direct dans le canvas
5. Cliquez sur « Copier le CSS » pour récupérer le snippet

**Pourquoi cette méthode fonctionne** :
- Aperçu en direct sans rechargement
- Exporte un CSS propre et préfixé pour les navigateurs
- Supporte les dégradés linéaires, radiaux et coniques
- Permet de sauvegarder et partager les dégradés via URL
- Fonctionne sur mobile avec des contrôles tactiles

## Méthode 2 : Écrire le CSS à la main

Un dégradé linéaire en CSS ressemble à :

\`\`\`css
background: linear-gradient(135deg, #ff7e5f, #feb47b);
\`\`\`

Pour un dégradé radial :

\`\`\`css
background: radial-gradient(circle at center, #6a11cb, #2575fc);
\`\`\`

Pour un dégradé conique (idéal pour des effets de camembert) :

\`\`\`css
background: conic-gradient(from 180deg, red, yellow, lime, cyan, blue, magenta, red);
\`\`\`

Vous pouvez utiliser autant d'arrêts et de pourcentages que vous le souhaitez pour contrôler le mélange.

## Méthode 3 : Utiliser une bibliothèque de dégradés préfabriqués

Des sites comme uiGradients, Grabient et ColorHub proposent des collections soignées de beaux dégradés. Vous parcourez, copiez le CSS et le collez dans votre projet. C'est l'option la plus rapide quand vous n'avez pas besoin d'un design sur mesure.

## Questions fréquentes

### Quelle est la différence entre dégradé linéaire, radial et conique ?
Le linéaire s'écoule en ligne droite ; le radial rayonne depuis un point central ; le conique balaie les couleurs autour d'un centre, comme une roue chromatique. Chacun crée un effet visuel différent.

### Les dégradés CSS affectent-ils les performances ?
Non. Les dégradés sont calculés par le compositeur du navigateur et sont essentiellement gratuits à l'exécution. Ils sont plus légers que les images de fond et s'adaptent à toute résolution.

### Puis-je utiliser des dégradés sur les bordures et le texte ?
Oui. Avec \`border-image: linear-gradient(...)\` pour les bordures, et \`background-clip: text; color: transparent;\` pour remplir le texte, vous pouvez appliquer des dégradés presque partout.

### Comment rendre un dégradé accessible ?
Assurez un contraste suffisant avec le texte par-dessus. Utilisez un vérificateur de contraste et prévoyez une couleur unie de secours pour les utilisateurs qui réduisent les animations ou activent un contraste élevé.

## Conclusion

Les dégradés CSS sont un outil de design puissant et léger. Pour un workflow rapide et visuel, le [générateur de dégradés CSS d'UtilBoxx](/fr/tools/color/gradient) est la façon la plus simple de concevoir et copier du code prêt pour la production.`;

const gradientDe = `## Warum CSS-Verläufe verwenden?

CSS-Verläufe (Gradients) ermöglichen sanfte Farbübergänge ohne Bilddateien. Sie eignen sich perfekt für Hintergründe, Buttons, Karten und Hero-Sektionen. Da Verläufe im Browser aus Code erzeugt werden, skalieren sie auf jede Auflösung, haben kein Download-Gewicht und lassen sich sofort anpassen. Die zwei Haupttypen sind lineare Verläufe (gerader Farbfluss) und radiale Verläufe (kreisförmiger Fluss), ergänzt durch konische Verläufe (um einen Mittelpunkt geschwungen).

Ein gut gewählter Verlauf kann ein flaches Design aufwerten, eine Stimmung erzeugen oder den Blick auf einen Call-to-Action lenken. Der Schlüssel liegt in einem starken Farbpaar, der passenden Richtung und den richtigen Farbstopps.

## Häufige Anwendungsfälle

- **Hero-Sektionen**: Aufmerksamkeitsstarke Hintergründe für Landingpages
- **Buttons**: Subtile Verläufe lassen CTAs klickbarer wirken
- **Karten und Panels**: Hintergrundebene ohne Bilder
- **Ladezustände**: Sanfte Shimmer-Effekte für Platzhalter
- **Borders und Text**: Neuere CSS-Versionen erlauben Verläufe auf Text- und Rahmenkonturen

## Methode 1: Den kostenlosen CSS-Gradient-Generator von UtilBoxx verwenden (Empfohlen)

Unser [CSS-Gradient-Generator](/de/tools/color/gradient) lässt Sie Farben wählen, Stopps einstellen, die Richtung festlegen und produktionsreifes CSS kopieren. So verwenden Sie ihn:

1. Gehen Sie zu [utilboxx.com/de/tools/color/gradient](/de/tools/color/gradient)
2. Wählen Sie zwei oder mehr Farben mit den Farbwählern
3. Passen Sie Stopps, Winkel und Form (linear, radial, konisch) an
4. Sehen Sie das Ergebnis live in der Vorschau
5. Klicken Sie auf „CSS kopieren", um den Snippet zu holen

**Warum diese Methode funktioniert**:
- Live-Vorschau ohne Neuladen
- Exportiert sauberes, mit Vendor-Prefixes versehenes CSS
- Unterstützt lineare, radiale und konische Verläufe
- Verläufe per URL speicher- und teilbar
- Mobil bedienbar mit touchfreundlichen Steuerelementen

## Methode 2: CSS von Hand schreiben

Ein linearer Verlauf in CSS sieht so aus:

\`\`\`css
background: linear-gradient(135deg, #ff7e5f, #feb47b);
\`\`\`

Für einen radialen Verlauf:

\`\`\`css
background: radial-gradient(circle at center, #6a11cb, #2575fc);
\`\`\`

Für einen konischen Verlauf (ideal für Tortendiagramm-Effekte):

\`\`\`css
background: conic-gradient(from 180deg, red, yellow, lime, cyan, blue, magenta, red);
\`\`\`

Sie können beliebig viele Farbstopps und Prozente zur Steuerung der Mischung einsetzen.

## Methode 3: Vorgefertigte Verlaufsbibliothek nutzen

Seiten wie uiGradients, Grabient und ColorHub bieten kuratierte Sammlungen schöner Verläufe. Sie stöbern, kopieren das CSS und fügen es in Ihr Projekt ein. Das ist die schnellste Option, wenn Sie kein individuelles Design brauchen.

## Häufig gestellte Fragen

### Was ist der Unterschied zwischen linear, radial und konisch?
Linear fließt in einer geraden Linie; radial strahlt von einem Mittelpunkt aus; konisch umrundet die Farben kreisförmig wie ein Farbrad. Jede Variante erzeugt einen anderen visuellen Effekt.

### Beeinträchtigen CSS-Verläufe die Performance?
Nein. Verläufe werden vom Kompositor des Browsers berechnet und sind zur Laufzeit praktisch kostenlos. Sie sind leichter als Hintergrundbilder und skalieren auf jede Auflösung.

### Kann ich Verläufe auf Borders und Text anwenden?
Ja. Mit \`border-image: linear-gradient(...)\` für Borders und \`background-clip: text; color: transparent;\` für Textfüllungen können Sie Verläufe nahezu überall einsetzen.

### Wie mache ich einen Verlauf barrierearm?
Achten Sie auf ausreichenden Kontrast zum darüberliegenden Text. Verwenden Sie einen Kontrastprüfer und bieten Sie gegebenenfalls eine Vollfarb-Fallback-Lösung für Nutzer mit reduzierter Bewegung oder hohem Kontrast an.

## Fazit

CSS-Verläufe sind ein leistungsfähiges, schlankes Designwerkzeug. Für einen schnellen, visuellen Workflow ist der [CSS-Gradient-Generator von UtilBoxx](/de/tools/color/gradient) die einfachste Möglichkeit, produktionsreife Verläufe zu entwerfen und zu kopieren.`;

export const cssGradientPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-create-css-gradient",
    category: "Color Tools",
    date: "2026-05-20",
    readTime: "7 min",
    title: "How to Create a CSS Gradient (Linear, Radial, Conic)",
    description: "Learn how to design and code beautiful CSS gradients. Includes a free visual gradient generator.",
    content: gradientEn,
  },
  zh: {
    slug: "how-to-create-css-gradient",
    category: "颜色工具",
    date: "2026-05-20",
    readTime: "7 分钟",
    title: "如何创建 CSS 渐变（线性、径向、锥形）",
    description: "学习如何设计并编写漂亮的 CSS 渐变。附赠免费可视化渐变生成器。",
    content: gradientZh,
  },
  ja: {
    slug: "how-to-create-css-gradient",
    category: "色ツール",
    date: "2026-05-20",
    readTime: "7 分",
    title: "CSS グラデーションの作り方（リニア、ラジアル、コーニック）",
    description: "美しく実用的な CSS グラデーションを設計・記述する方法を学びます。無料ビジュアル生成ツール付き。",
    content: gradientJa,
  },
  es: {
    slug: "how-to-create-css-gradient",
    category: "Herramientas de Color",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Cómo crear un gradiente CSS (lineal, radial, cónico)",
    description: "Aprende a diseñar y codificar hermosos gradientes CSS. Incluye un generador visual gratuito.",
    content: gradientEs,
  },
  pt: {
    slug: "how-to-create-css-gradient",
    category: "Ferramentas de Cor",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Como criar um gradiente CSS (linear, radial, cônico)",
    description: "Aprenda a projetar e codificar belos gradientes CSS. Inclui um gerador visual gratuito.",
    content: gradientPt,
  },
  fr: {
    slug: "how-to-create-css-gradient",
    category: "Outils de Couleur",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Comment créer un dégradé CSS (linéaire, radial, conique)",
    description: "Apprenez à concevoir et coder de beaux dégradés CSS. Avec un générateur visuel gratuit.",
    content: gradientFr,
  },
  de: {
    slug: "how-to-create-css-gradient",
    category: "Farb-Tools",
    date: "2026-05-20",
    readTime: "7 Min",
    title: "CSS-Verlauf erstellen (linear, radial, konisch)",
    description: "Lernen Sie, schöne CSS-Verläufe zu entwerfen und zu codieren. Inklusive kostenlosem visuellen Generator.",
    content: gradientDe,
  },
};
