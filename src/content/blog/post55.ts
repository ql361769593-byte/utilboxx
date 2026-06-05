// Blog post: WCAG Color Contrast Guide
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const contrastEn = `## What is WCAG color contrast and why does it matter?

WCAG (Web Content Accessibility Guidelines) defines the minimum contrast ratio between text and its background that is considered accessible. The guidelines set ratios of 4.5:1 for normal text and 3:1 for large text in AA level, and 7:1 and 4.5:1 respectively in AAA level.

Accessible color contrast is not just a checkbox — it directly affects whether users with low vision, color blindness, or those reading in bright sunlight can read your content. Designing with contrast in mind makes your product usable by a wider audience and is required by law in many jurisdictions.

## Common use cases

- **Body text and headings**: Verifying foreground/background pairs in designs
- **Buttons and links**: Ensuring CTAs are clearly readable on their backgrounds
- **Form fields**: Checking label and placeholder contrast
- **Charts and graphs**: Making sure data labels stand out from the visuals
- **Mobile UI**: Compensating for glare and small screen sizes

## Method 1: Use UtilBoxx's free WCAG contrast checker (Recommended)

Our [WCAG color contrast checker](/en/tools/color/contrast) computes the contrast ratio between two colors instantly, then evaluates it against AA and AAA thresholds. Here is how to use it:

1. Go to [utilboxx.com/en/tools/color/contrast](/en/tools/color/contrast)
2. Pick a foreground color and a background color (hex, RGB, or picker)
3. See the contrast ratio and pass/fail status for AA and AAA
4. Try suggested adjustments directly in the tool
5. Copy the values for your design system

**Why this method works**:
- Live updates as you adjust colors
- Shows AA, AAA, AA Large, and AAA Large status at a glance
- Suggests accessible alternatives when a pair fails
- Includes a vision simulator (normal, low vision, color blindness)
- 100% in-browser, no images uploaded

## Method 2: Calculate contrast by hand

The contrast ratio formula is defined by WCAG:

1. Convert each color to its relative luminance
2. Compute (L1 + 0.05) / (L2 + 0.05), where L1 is the lighter color
3. Round to two decimal places

For example, black (#000000) on white (#FFFFFF) yields a 21:1 ratio — the maximum possible.

If you do not want to do the math, our [contrast checker](/en/tools/color/contrast) is faster.

## Method 3: Use browser dev tools

Most modern browsers include accessibility inspectors. In Chrome DevTools, click "Inspect", then go to the "Accessibility" tab in the Elements panel to see the contrast ratio of any element on the page. This is great for debugging production code.

## Frequently asked questions

### What is a good contrast ratio?
For AA, aim for at least 4.5:1 for body text and 3:1 for large text. For AAA, target 7:1 and 4.5:1 respectively. Anything above 7:1 is excellent.

### What counts as "large" text?
WCAG defines large text as 18pt (24px) regular or 14pt (18.66px) bold. Large text has a more relaxed threshold because it is easier to read at lower contrast.

### Does color contrast apply to non-text elements?
Yes. WCAG 2.1 introduced a 3:1 minimum for UI components and graphical objects. Icons, form field borders, and chart elements should all meet this minimum.

### How do I check contrast for gradients and images?
Place a solid color swatch under your text in a worst-case scenario (e.g., the lightest part of the background) and check that. For images, increase the opacity of an overlay or add a text-shadow to maintain readability.

## Conclusion

Accessible contrast is fundamental to inclusive design. The [UtilBoxx WCAG contrast checker](/en/tools/color/contrast) makes verifying pairs quick, visual, and educational.`;

const contrastZh = `## 什么是 WCAG 颜色对比度？为什么重要？

WCAG（Web 内容无障碍指南）定义了文本与背景之间被视为无障碍的最低对比度。指南规定：AA 级下，正文文本为 4.5:1，大字为 3:1；AAA 级下分别为 7:1 和 4.5:1。

无障碍的颜色对比度不只是一个检查项——它直接影响低视力、色盲用户，以及在强光下阅读的人能否看清你的内容。在设计阶段就考虑对比度，能让你的产品被更广泛的受众所使用，并且在许多司法管辖区也是法律要求。

## 常见使用场景

- **正文和标题**：验证设计中的前景/背景配色
- **按钮和链接**：确保 CTA 在其背景上清晰可读
- **表单字段**：检查标签和占位文字的对比度
- **图表和可视化**：让数据标签从图像中凸显
- **移动端 UI**：补偿眩光和小屏幕的影响

## 方法 1：使用 UtilBoxx 免费 WCAG 对比度检查器（推荐）

我们的 [WCAG 颜色对比度检查器](/zh/tools/color/contrast) 能即时计算两种颜色之间的对比度，并对照 AA 和 AAA 阈值评估。步骤如下：

1. 访问 [utilboxx.com/zh/tools/color/contrast](/zh/tools/color/contrast)
2. 选择前景色和背景色（hex、RGB 或拾色器）
3. 查看对比度数值以及 AA / AAA 通过状态
4. 直接在工具中尝试推荐调整
5. 复制数值用于设计系统

**这个方法的优势**：
- 调整颜色时实时更新
- 一目了然显示 AA、AAA、AA Large、AAA Large 状态
- 不达标时给出可访问的替代方案
- 包含视觉模拟（正常、低视力、色盲）
- 完全在浏览器中运行，不上传图片

## 方法 2：手算对比度

对比度公式由 WCAG 定义：

1. 把每种颜色转换为相对亮度
2. 计算 (L1 + 0.05) / (L2 + 0.05)，L1 为较浅颜色
3. 保留两位小数

例如，黑 (#000000) 配白 (#FFFFFF) 得到 21:1——这是最大可能值。

如果你不想算，[对比度检查器](/zh/tools/color/contrast) 更快。

## 方法 3：使用浏览器开发者工具

大多数现代浏览器都内置无障碍检查器。在 Chrome DevTools 中点击"检查"，然后在 Elements 面板切换到"Accessibility"标签页，就能看到页面上任意元素的对比度。这对调试生产代码非常方便。

## 常见问题

### 多少对比度算好？
AA 级下，正文至少 4.5:1，大字至少 3:1。AAA 级下分别目标 7:1 和 4.5:1。超过 7:1 已经非常优秀。

### "大字"的定义？
WCAG 把大字定义为 18pt（24px）常规或 14pt（18.66px）粗体。大字在低对比下也更容易看清，所以阈值更宽松。

### 对比度规则适用于非文字元素吗？
是的。WCAG 2.1 对 UI 组件和图形对象引入了 3:1 的最低要求。图标、表单边框、图表元素都应满足该最低值。

### 如何检查渐变和图片背景的对比度？
把文本放在最坏情况（背景最浅的部分）下用纯色块测试。对于图片，可以提高覆盖层的不透明度或添加文字阴影以保持可读性。

## 结论

可访问的对比度是包容性设计的基石。[UtilBoxx WCAG 对比度检查器](/zh/tools/color/contrast) 让验证颜色对变得快速、直观且具有教育意义。`;

const contrastJa = `## WCAG カラーコントラストとは？なぜ重要か？

WCAG（Web Content Accessibility Guidelines）は、テキストと背景の間の最小コントラスト比を定義しています。AA レベルでは通常テキストで 4.5:1、ラージテキストで 3:1、AAA レベルではそれぞれ 7:1 と 4.5:1 が基準です。

アクセシブルなコントラストは単なるチェック項目ではなく、低視力、色覚異常、強い日差しの下で読むユーザーがコンテンツを読めるかどうかに直結します。コントラストを考慮して設計すれば、より広いユーザーに製品を使ってもらえ、多くの地域で法的要件でもあります。

## よくある用途

- **本文と見出し**：デザインでの前景/背景の組み合わせを検証
- **ボタンとリンク**：CTA が背景上で明確に読めるか確認
- **フォームフィールド**：ラベルとプレースホルダのコントラストをチェック
- **チャートとグラフ**：データラベルがビジュアルから目立つようにする
- **モバイル UI**：グレアと小さい画面サイズを補う

## 方法 1：UtilBoxx の無料 WCAG コントラストチェッカーを使う（推奨）

当社の [WCAG カラーコントラストチェッカー](/ja/tools/color/contrast) は 2 色間のコントラスト比を即座に計算し、AA と AAA 基準で評価します。手順は次のとおりです：

1. [utilboxx.com/ja/tools/color/contrast](/ja/tools/color/contrast) にアクセス
2. 前景色と背景色を選択（hex、RGB、ピッカー）
3. コントラスト比と AA / AAA の合否ステータスを確認
4. ツール内で推奨される調整を直接試す
5. デザインシステム用に値をコピー

**この方法の長所**：
- 色の調整に合わせてリアルタイム更新
- AA、AAA、AA Large、AAA Large のステータスを一目で表示
- 不合格時にアクセシブルな代替案を提案
- 視覚シミュレーター（通常、低視力、色覚異常）付き
- 100% ブラウザ内動作、画像はアップロードされない

## 方法 2：手でコントラストを計算する

コントラスト比の式は WCAG で定義されています：

1. 各色を相対輝度に変換
2. (L1 + 0.05) / (L2 + 0.05) を計算（L1 が明るい色）
3. 小数 2 桁に丸める

例えば黒 (#000000) と白 (#FFFFFF) は 21:1 の比になり、これが最大値です。

自分で計算したくない場合は [コントラストチェッカー](/ja/tools/color/contrast) がより手軽です。

## 方法 3：ブラウザの開発ツールを使う

ほとんどの最新ブラウザにはアクセシビリティインスペクターがあります。Chrome DevTools で「検証」をクリックし、Elements パネルの「Accessibility」タブを開くと、ページ上の任意の要素のコントラスト比を確認できます。本番コードのデバッグに便利です。

## よくある質問

### どのコントラスト比が良いですか？
AA では本文テキストで最低 4.5:1、ラージテキストで 3:1 を目安にしてください。AAA ではそれぞれ 7:1 と 4.5:1 を目指します。7:1 を超えると非常に優れています。

### 「ラージテキスト」とは何ですか？
WCAG ではラージテキストを 18pt（24px）のレギュラー、または 14pt（18.66px）のボールドと定義しています。ラージテキストは低コントラストでも読みやすいため、閾値が緩和されています。

### コントラストルールは非テキスト要素にも適用されますか？
はい。WCAG 2.1 では UI コンポーネントとグラフィカルオブジェクトに 3:1 の最低値が導入されました。アイコン、フォームフィールドの境界線、チャート要素はすべてこの最低値を満たす必要があります。

### グラデーションや画像の背景のコントラストはどう確認しますか？
最悪のケース（背景の最も明るい部分）にテキストを置き、単色スウォッチでテストします。画像の場合はオーバーレイの不透明度を上げるか、テキストシャドウを追加して可読性を保ちます。

## 結論

アクセシブルなコントラストはインクルーシブデザインの基礎です。[UtilBoxx の WCAG コントラストチェッカー](/ja/tools/color/contrast) は、ペアの検証を迅速・視覚的・教育的かつ簡単に行えるようにします。`;

const contrastEs = `## ¿Qué es el contraste de color WCAG y por qué importa?

Las WCAG (Web Content Accessibility Guidelines) definen la relación de contraste mínima entre el texto y su fondo que se considera accesible. Las guías establecen relaciones de 4.5:1 para texto normal y 3:1 para texto grande en el nivel AA, y de 7:1 y 4.5:1 respectivamente en el nivel AAA.

El contraste de color accesible no es solo un requisito más: afecta directamente a si los usuarios con baja visión, daltonismo o los que leen bajo luz solar intensa pueden leer tu contenido. Diseñar con el contraste en mente hace que tu producto lo pueda usar una audiencia más amplia, y es obligatorio por ley en muchas jurisdicciones.

## Casos de uso comunes

- **Cuerpo de texto y titulares**: verificar combinaciones de前景 y fondo en los diseños
- **Botones y enlaces**: asegurar que los CTA se lean con claridad sobre sus fondos
- **Campos de formulario**: comprobar el contraste de etiquetas y placeholders
- **Gráficos y visualizaciones**: lograr que las etiquetas de datos destaquen sobre los elementos visuales
- **UI móvil**: compensar reflejos y tamaños de pantalla pequeños

## Método 1: Usa el verificador de contraste WCAG gratuito de UtilBoxx (Recomendado)

Nuestro [verificador de contraste de color WCAG](/es/tools/color/contrast) calcula al instante la relación de contraste entre dos colores y la evalúa según los umbrales AA y AAA. Así se usa:

1. Ve a [utilboxx.com/es/tools/color/contrast](/es/tools/color/contrast)
2. Elige un color de primer plano y un color de fondo (hex, RGB o selector)
3. Observa la relación de contraste y el estado pass/fail para AA y AAA
4. Prueba los ajustes sugeridos directamente en la herramienta
5. Copia los valores para tu sistema de diseño

**Por qué funciona este método**:
- Actualización en vivo al ajustar colores
- Muestra de un vistazo el estado AA, AAA, AA Large y AAA Large
- Sugiere alternativas accesibles cuando una combinación falla
- Incluye un simulador visual (normal, baja visión, daltonismo)
- 100% en el navegador, sin imágenes subidas

## Método 2: Calcular el contraste a mano

La fórmula de relación de contraste está definida por WCAG:

1. Convierte cada color a su luminancia relativa
2. Calcula (L1 + 0.05) / (L2 + 0.05), donde L1 es el color más claro
3. Redondea a dos decimales

Por ejemplo, negro (#000000) sobre blanco (#FFFFFF) da una relación 21:1, el máximo posible.

Si no quieres hacer el cálculo, nuestro [verificador de contraste](/es/tools/color/contrast) es más rápido.

## Método 3: Usa las herramientas de desarrollo del navegador

La mayoría de los navegadores modernos incluyen inspectores de accesibilidad. En Chrome DevTools, haz clic en "Inspeccionar" y abre la pestaña "Accessibility" en el panel Elements para ver la relación de contraste de cualquier elemento de la página. Ideal para depurar código en producción.

## Preguntas frecuentes

### ¿Qué relación de contraste es buena?
Para AA, apunta a al menos 4.5:1 en texto normal y 3:1 en texto grande. Para AAA, busca 7:1 y 4.5:1 respectivamente. Por encima de 7:1 es excelente.

### ¿Qué cuenta como "texto grande"?
WCAG define texto grande como 18pt (24px) normal o 14pt (18,66px) en negrita. El texto grande tiene un umbral más relajado porque se lee mejor con menos contraste.

### ¿Se aplica el contraste a elementos no textuales?
Sí. WCAG 2.1 introdujo un mínimo de 3:1 para componentes de UI y objetos gráficos. Iconos, bordes de campos de formulario y elementos de gráficos deben cumplir este mínimo.

### ¿Cómo verifico el contraste sobre degradados e imágenes?
Coloca una muestra de color sólido bajo el texto en el peor caso (la parte más clara del fondo) y compruébalo. Para imágenes, sube la opacidad de una capa o añade text-shadow para mantener la legibilidad.

## Conclusión

El contraste accesible es fundamental para un diseño inclusivo. El [verificador de contraste WCAG de UtilBoxx](/es/tools/color/contrast) hace que verificar combinaciones sea rápido, visual y formativo.`;

const contrastPt = `## O que é contraste de cor WCAG e por que importa?

As WCAG (Web Content Accessibility Guidelines) definem a relação de contraste mínima entre o texto e seu fundo considerada acessível. As diretrizes estabelecem relações de 4,5:1 para texto normal e 3:1 para texto grande no nível AA, e 7:1 e 4,5:1 respectivamente no nível AAA.

Contraste de cor acessível não é apenas um item de checklist — afeta diretamente se usuários com baixa visão, daltonismo ou que leem sob luz solar forte conseguem ler seu conteúdo. Projetar pensando em contraste torna seu produto utilizável por uma audiência mais ampla e é exigência legal em muitas jurisdições.

## Casos de uso comuns

- **Corpo de texto e títulos**: verificar combinações de frente e fundo em designs
- **Botões e links**: garantir que os CTAs se leiam com clareza sobre seus fundos
- **Campos de formulário**: checar contraste de rótulos e placeholders
- **Gráficos e visualizações**: fazer os rótulos de dados se destacarem do visual
- **UI mobile**: compensar reflexos e telas pequenas

## Método 1: Use o verificador de contraste WCAG gratuito do UtilBoxx (Recomendado)

Nosso [verificador de contraste de cor WCAG](/pt/tools/color/contrast) calcula a relação de contraste entre duas cores na hora e avalia em relação aos limites AA e AAA. Veja como usar:

1. Vá para [utilboxx.com/pt/tools/color/contrast](/pt/tools/color/contrast)
2. Escolha uma cor de frente e uma de fundo (hex, RGB ou seletor)
3. Veja a relação de contraste e o status de aprovação AA e AAA
4. Experimente os ajustes sugeridos direto na ferramenta
5. Copie os valores para seu design system

**Por que este método funciona**:
- Atualiza ao vivo conforme você ajusta as cores
- Mostra de cara o status AA, AAA, AA Large e AAA Large
- Sugere alternativas acessíveis quando a combinação falha
- Inclui simulador visual (normal, baixa visão, daltonismo)
- 100% no navegador, sem upload de imagens

## Método 2: Calcule o contraste à mão

A fórmula da relação de contraste é definida pela WCAG:

1. Converta cada cor para sua luminância relativa
2. Calcule (L1 + 0,05) / (L2 + 0,05), onde L1 é a cor mais clara
3. Arredonde para duas casas decimais

Por exemplo, preto (#000000) sobre branco (#FFFFFF) resulta em 21:1, o máximo possível.

Se não quiser fazer a conta, nosso [verificador de contraste](/pt/tools/color/contrast) é mais rápido.

## Método 3: Use as ferramentas de desenvolvedor do navegador

A maioria dos navegadores modernos inclui inspetores de acessibilidade. No Chrome DevTools, clique em "Inspecionar" e abra a aba "Accessibility" no painel Elements para ver a relação de contraste de qualquer elemento da página. Ótimo para depurar código em produção.

## Perguntas frequentes

### Qual é uma boa relação de contraste?
Para AA, mire ao menos 4,5:1 em texto normal e 3:1 em texto grande. Para AAA, busque 7:1 e 4,5:1 respectivamente. Acima de 7:1 é excelente.

### O que conta como "texto grande"?
A WCAG define texto grande como 18pt (24px) regular ou 14pt (18,66px) em negrito. Texto grande tem um limite mais relaxado porque é mais fácil de ler com menos contraste.

### O contraste se aplica a elementos não textuais?
Sim. A WCAG 2.1 introduziu um mínimo de 3:1 para componentes de UI e objetos gráficos. Ícones, bordas de campos de formulário e elementos de gráfico devem atender a esse mínimo.

### Como verifico contraste sobre gradientes e imagens?
Coloque uma amostra de cor sólida sob o texto no pior caso (a parte mais clara do fundo) e teste. Para imagens, aumente a opacidade de uma sobreposição ou adicione text-shadow para manter a legibilidade.

## Conclusão

Contraste acessível é fundamental para o design inclusivo. O [verificador de contraste WCAG do UtilBoxx](/pt/tools/color/contrast) torna a verificação de combinações rápida, visual e didática.`;

const contrastFr = `## Qu'est-ce que le contraste de couleur WCAG et pourquoi est-ce important ?

Les WCAG (Web Content Accessibility Guidelines) définissent le rapport de contraste minimal entre le texte et son fond considéré comme accessible. Les directives fixent des rapports de 4,5:1 pour le texte normal et 3:1 pour le grand texte au niveau AA, et de 7:1 et 4,5:1 respectivement au niveau AAA.

Le contraste de couleur accessible n'est pas qu'une case à cocher — il détermine directement si les utilisateurs ayant une basse vision, une daltonie ou lisant en plein soleil peuvent lire votre contenu. Concevoir en tenant compte du contraste élargit l'audience de votre produit et est une exigence légale dans de nombreuses juridictions.

## Cas d'usage courants

- **Corps de texte et titres** : vérifier les paires前景/arrière-plan dans les designs
- **Boutons et liens** : s'assurer que les CTA sont clairement lisibles sur leur fond
- **Champs de formulaire** : vérifier le contraste des labels et placeholders
- **Graphiques et visualisations** : faire ressortir les étiquettes de données du visuel
- **UI mobile** : compenser l'éblouissement et les petits écrans

## Méthode 1 : Utilisez le vérificateur de contraste WCAG gratuit d'UtilBoxx (Recommandé)

Notre [vérificateur de contraste de couleur WCAG](/fr/tools/color/contrast) calcule instantanément le rapport de contraste entre deux couleurs et l'évalue selon les seuils AA et AAA. Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/color/contrast](/fr/tools/color/contrast)
2. Choisissez une couleur de premier plan et une couleur d'arrière-plan (hex, RGB ou sélecteur)
3. Observez le rapport de contraste et le statut réussite/échec AA et AAA
4. Essayez les ajustements suggérés directement dans l'outil
5. Copiez les valeurs pour votre design system

**Pourquoi cette méthode fonctionne** :
- Mise à jour en direct à mesure que vous ajustez les couleurs
- Affiche d'un coup d'œil le statut AA, AAA, AA Large et AAA Large
- Suggère des alternatives accessibles quand une paire échoue
- Inclut un simulateur de vision (normale, basse vision, daltonie)
- 100% dans le navigateur, aucune image téléversée

## Méthode 2 : Calculer le contraste à la main

La formule du rapport de contraste est définie par les WCAG :

1. Convertissez chaque couleur en sa luminance relative
2. Calculez (L1 + 0,05) / (L2 + 0,05), L1 étant la couleur la plus claire
3. Arrondissez à deux décimales

Par exemple, le noir (#000000) sur blanc (#FFFFFF) donne un rapport 21:1, le maximum possible.

Si vous ne voulez pas faire le calcul, notre [vérificateur de contraste](/fr/tools/color/contrast) est plus rapide.

## Méthode 3 : Utilisez les outils de développement du navigateur

La plupart des navigateurs modernes incluent des inspecteurs d'accessibilité. Dans Chrome DevTools, cliquez sur « Inspecter » puis ouvrez l'onglet « Accessibility » du panneau Elements pour voir le rapport de contraste de n'importe quel élément. Idéal pour déboguer du code en production.

## Questions fréquentes

### Quel est un bon rapport de contraste ?
Pour AA, visez au moins 4,5:1 pour le texte courant et 3:1 pour le grand texte. Pour AAA, ciblez 7:1 et 4,5:1 respectivement. Au-delà de 7:1, c'est excellent.

### Qu'est-ce qu'un « grand » texte ?
Les WCAG définissent le grand texte comme 18pt (24px) en Regular ou 14pt (18,66px) en Bold. Le grand texte bénéficie d'un seuil plus souple car il reste lisible à contraste réduit.

### Le contraste s'applique-t-il aux éléments non textuels ?
Oui. Les WCAG 2.1 introduisent un minimum de 3:1 pour les composants d'UI et les objets graphiques. Icônes, bordures de champs de formulaire et éléments de graphiques doivent respecter ce minimum.

### Comment vérifier le contraste sur des dégradés et images ?
Placez une pastille de couleur unie sous le texte dans le pire cas (la zone la plus claire du fond) et testez. Pour les images, augmentez l'opacité d'un overlay ou ajoutez un text-shadow pour préserver la lisibilité.

## Conclusion

Le contraste accessible est au fondement du design inclusif. Le [vérificateur de contraste WCAG d'UtilBoxx](/fr/tools/color/contrast) rend la vérification des paires rapide, visuelle et formatrice.`;

const contrastDe = `## Was ist WCAG-Farbkontrast und warum ist er wichtig?

Die WCAG (Web Content Accessibility Guidelines) definieren das Mindestkontrastverhältnis zwischen Text und Hintergrund, das als barrierearm gilt. Die Richtlinien setzen 4,5:1 für normalen Text und 3:1 für großen Text auf AA-Niveau sowie 7:1 und 4,5:1 auf AAA-Niveau.

Barrierearmer Farbkontrast ist nicht nur ein Häkchen auf der Checkliste — er entscheidet direkt darüber, ob Nutzer mit Sehschwäche, Farbblindheit oder beim Lesen in grellem Sonnenlicht Ihre Inhalte lesen können. Wer Kontraste von Anfang an mitdenkt, macht sein Produkt für ein breiteres Publikum nutzbar — und erfüllt in vielen Rechtsräumen gesetzliche Pflichten.

## Häufige Anwendungsfälle

- **Fließtext und Überschriften**: Vorder-/Hintergrundkombinationen im Design prüfen
- **Buttons und Links**: Sicherstellen, dass CTAs auf ihrem Hintergrund klar lesbar sind
- **Formularfelder**: Kontrast von Labels und Platzhaltern prüfen
- **Diagramme und Grafiken**: Datenbeschriftungen aus dem Visual hervorheben
- **Mobile UI**: Blendung und kleine Displays kompensieren

## Methode 1: Den kostenlosen WCAG-Kontrastprüfer von UtilBoxx verwenden (Empfohlen)

Unser [WCAG-Farbkontrastprüfer](/de/tools/color/contrast) berechnet das Kontrastverhältnis zweier Farben sofort und bewertet es nach AA- und AAA-Schwellen. So verwenden Sie ihn:

1. Gehen Sie zu [utilboxx.com/de/tools/color/contrast](/de/tools/color/contrast)
2. Wählen Sie eine Vorder- und Hintergrundfarbe (Hex, RGB oder Farbwähler)
3. Sehen Sie das Kontrastverhältnis und den Pass/Fail-Status für AA und AAA
4. Probieren Sie vorgeschlagene Anpassungen direkt im Tool
5. Kopieren Sie die Werte für Ihr Designsystem

**Warum diese Methode funktioniert**:
- Live-Aktualisierung beim Anpassen der Farben
- Zeigt AA-, AAA-, AA-Large- und AAA-Large-Status auf einen Blick
- Schlägt barrierearme Alternativen vor, wenn ein Paar scheitert
- Enthält einen Sehsimulation (normal, Sehschwäche, Farbblindheit)
- 100% im Browser, keine Bild-Uploads

## Methode 2: Kontrast per Hand berechnen

Die Kontrastverhältnis-Formel ist von WCAG definiert:

1. Wandeln Sie jede Farbe in ihre relative Leuchtdichte um
2. Berechnen Sie (L1 + 0,05) / (L2 + 0,05), wobei L1 die hellere Farbe ist
3. Runden Sie auf zwei Dezimalstellen

Beispiel: Schwarz (#000000) auf Weiß (#FFFFFF) ergibt 21:1 — das theoretische Maximum.

Wenn Sie nicht rechnen wollen, ist unser [Kontrastprüfer](/de/tools/color/contrast) schneller.

## Methode 3: Browser-Entwicklertools nutzen

Die meisten modernen Browser enthalten Accessibility-Inspektoren. In Chrome DevTools klicken Sie auf „Inspect" und öffnen im Elements-Panel den Tab „Accessibility", um das Kontrastverhältnis jedes Elements zu sehen. Praktisch für die Fehlersuche in Produktion.

## Häufig gestellte Fragen

### Was ist ein gutes Kontrastverhältnis?
Für AA mindestens 4,5:1 bei Fließtext und 3:1 bei großem Text. Für AAA 7:1 und 4,5:1. Über 7:1 ist ausgezeichnet.

### Was zählt als „großer" Text?
WCAG definiert großen Text als 18pt (24px) regular oder 14pt (18,66px) fett. Großer Text hat einen milderen Schwellenwert, da er bei weniger Kontrast besser lesbar bleibt.

### Gilt der Kontrast auch für Nicht-Text-Elemente?
Ja. WCAG 2.1 führt 3:1 als Minimum für UI-Komponenten und grafische Objekte ein. Icons, Formularfeld-Ränder und Diagrammelemente sollten dieses Minimum erfüllen.

### Wie prüfe ich Kontrast auf Verläufen und Bildern?
Legen Sie im schlimmsten Fall (hellster Bereich des Hintergrundes) ein einfarbiges Feld unter den Text und prüfen Sie. Bei Bildern erhöhen Sie die Opazität einer Überlagerung oder fügen einen text-shadow hinzu, um die Lesbarkeit zu sichern.

## Fazit

Barrierearmer Kontrast ist die Grundlage inklusiven Designs. Der [WCAG-Kontrastprüfer von UtilBoxx](/de/tools/color/contrast) macht die Prüfung von Farbpaaren schnell, visuell und lehrreich.`;

export const contrastCheckerPost: Record<string, BlogPost> = {
  en: {
    slug: "wcag-color-contrast-guide",
    category: "Color Tools",
    date: "2026-05-20",
    readTime: "8 min",
    title: "WCAG Color Contrast: A Practical Accessibility Guide",
    description: "Learn what WCAG color contrast ratios are, why they matter, and how to check them for accessible design.",
    content: contrastEn,
  },
  zh: {
    slug: "wcag-color-contrast-guide",
    category: "颜色工具",
    date: "2026-05-20",
    readTime: "8 分钟",
    title: "WCAG 颜色对比度：可访问性的实战指南",
    description: "了解 WCAG 颜色对比度比率是什么、为何重要，以及如何为无障碍设计进行检查。",
    content: contrastZh,
  },
  ja: {
    slug: "wcag-color-contrast-guide",
    category: "色ツール",
    date: "2026-05-20",
    readTime: "8 分",
    title: "WCAG カラーコントラスト：アクセシビリティ実践ガイド",
    description: "WCAG カラーコントラスト比とは何か、なぜ重要か、アクセシブルなデザインの確認方法を解説。",
    content: contrastJa,
  },
  es: {
    slug: "wcag-color-contrast-guide",
    category: "Herramientas de Color",
    date: "2026-05-20",
    readTime: "8 min",
    title: "Contraste de color WCAG: guía práctica de accesibilidad",
    description: "Aprende qué son las relaciones de contraste WCAG, por qué importan y cómo comprobarlas para un diseño accesible.",
    content: contrastEs,
  },
  pt: {
    slug: "wcag-color-contrast-guide",
    category: "Ferramentas de Cor",
    date: "2026-05-20",
    readTime: "8 min",
    title: "Contraste de cor WCAG: guia prático de acessibilidade",
    description: "Aprenda o que são as relações de contraste WCAG, por que importam e como verificá-las para um design acessível.",
    content: contrastPt,
  },
  fr: {
    slug: "wcag-color-contrast-guide",
    category: "Outils de Couleur",
    date: "2026-05-20",
    readTime: "8 min",
    title: "Contraste de couleur WCAG : guide pratique d'accessibilité",
    description: "Découvrez les rapports de contraste WCAG, leur importance et comment les vérifier pour un design accessible.",
    content: contrastFr,
  },
  de: {
    slug: "wcag-color-contrast-guide",
    category: "Farb-Tools",
    date: "2026-05-20",
    readTime: "8 Min",
    title: "WCAG-Farbkontrast: Praxisleitfaden zur Barrierefreiheit",
    description: "Erfahren Sie, was WCAG-Kontrastverhältnisse sind, warum sie zählen und wie Sie sie für barrierearmes Design prüfen.",
    content: contrastDe,
  },
};
