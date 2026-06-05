// Blog post: How to Mix Colors
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const mixerEn = `## Why mix colors digitally?

Color mixing is fundamental to design, illustration, painting, branding, and UI work. Doing it in software is fast, precise, and reversible — you can try a hundred variations in minutes and undo anything that does not work. Digital mixing also lets you export exact hex, RGB, HSL, or CMYK values for downstream tools.

The two main systems are additive (RGB, used in screens) and subtractive (CMYK, used in print). They behave differently, so picking the right model matters depending on the medium.

## Common use cases

- **UI design**: Creating brand palettes and component variants
- **Digital painting**: Sampling and tweaking skin tones, skies, and shadows
- **Print prep**: Translating screen colors to CMYK for accurate printing
- **Brand identity**: Building a consistent color system from a base hue
- **Web design**: Generating hover, focus, and disabled states from one base

## Method 1: Use UtilBoxx's free color mixer (Recommended)

Our [color mixer](/en/tools/color/mixer) lets you blend two or more colors using RGB, HSL, or CMYK blending modes, with a live preview. Here is how to use it:

1. Go to [utilboxx.com/en/tools/color/mixer](/en/tools/color/mixer)
2. Pick two or more source colors
3. Choose a blending mode (average, multiply, screen, additive, subtractive)
4. Adjust each color's weight with the sliders
5. Copy the resulting hex, RGB, HSL, or CMYK value

**Why this method works**:
- Live preview as you adjust inputs
- Multiple blending models for screen and print
- Weight sliders for fine control
- One-click copy to your design tool
- 100% in-browser, no image upload

## Method 2: Mix in Figma, Photoshop, or Procreate

Professional design tools have powerful color mixers built in. In Figma, open the color picker and use the alpha sliders to blend with another swatch. In Photoshop, use a layer with a blending mode to mix painted colors. In Procreate, drop a color onto another to mix on the canvas.

These tools are essential for illustration and complex branding work.

## Method 3: Use mathematical color blending

For simple cases, you can average RGB channels:

\`\`\`
mixed = (color1 + color2) / 2
\`\`\`

For more accurate results, blend in linear RGB or use a perceptual model like OKLCH. Libraries like Chroma.js and culori can do this in JavaScript:

\`\`\`javascript
import { mix } from "culori";
mix("#ff0000", "#0000ff", 0.5); // mid purple
\`\`\`

## Frequently asked questions

### What is the difference between RGB and CMYK mixing?
RGB is additive — combining light. Mixing red and green makes yellow. CMYK is subtractive — combining pigments. Mixing cyan and yellow makes green. The same numeric values look very different in each system.

### Why do my mixed colors look muddy on screen?
That usually means you are mixing complementary or far-apart hues. Try blending colors that are closer in hue, or use a perceptual color space like OKLCH for cleaner transitions.

### How do I match a brand color across screen and print?
Convert your brand color from sRGB to CMYK using a color profile. Note that some bright screen colors have no equivalent in print and will shift. Request a proof from your printer for the most accurate result.

### Can I save a custom palette?
Yes. Use the [UtilBoxx color mixer](/en/tools/color/mixer) to generate your tones, then paste them into a design system tool like Figma, Coolors, or your codebase.

## Conclusion

Digital color mixing gives you speed, precision, and reproducibility. For a quick, visual way to blend colors and export values, the [UtilBoxx color mixer](/en/tools/color/mixer) is the easiest tool to keep open.`;

const mixerZh = `## 为什么要用数字方式调色？

调色是设计、插画、绘画、品牌和 UI 工作的基础。用软件调色快速、精准、可逆——你可以在几分钟内尝试上百种变化，不满意随时撤销。数字调色还能让你导出精确的 hex、RGB、HSL 或 CMYK 值，方便在其它工具中使用。

两套主要体系是加色（RGB，用于屏幕）和减色（CMYK，用于印刷）。它们的混合行为不同，所以根据媒介选择合适的模型很重要。

## 常见使用场景

- **UI 设计**：打造品牌色板和组件变体
- **数字绘画**：取样并微调肤色、天空和阴影
- **印刷准备**：将屏幕色转换为 CMYK 以保证印刷准确
- **品牌识别**：从基础色构建一致的颜色体系
- **网页设计**：从一个基础色生成 hover、focus、disabled 等状态

## 方法 1：使用 UtilBoxx 免费调色工具（推荐）

我们的 [调色工具](/zh/tools/color/mixer) 支持用 RGB、HSL 或 CMYK 模型混合两种或多种颜色，并实时预览。步骤如下：

1. 访问 [utilboxx.com/zh/tools/color/mixer](/zh/tools/color/mixer)
2. 选择两种或更多源色
3. 选择混合模式（平均、乘法、滤色、加色、减色）
4. 用滑块调整每种颜色的权重
5. 复制得到的 hex、RGB、HSL 或 CMYK 值

**这个方法的优势**：
- 调整输入时实时预览
- 多种混合模型，覆盖屏幕和印刷
- 权重滑块精细控制
- 一键复制到设计工具
- 完全在浏览器中运行，不上传图片

## 方法 2：在 Figma、Photoshop 或 Procreate 中混合

专业设计工具内置强大的调色器。在 Figma 中打开拾色器，使用 alpha 滑块与另一个色板混合。在 Photoshop 中用带混合模式的图层混合颜色。在 Procreate 中把一个颜色拖到画布上的另一种颜色上即可混合。

这些工具对插画和复杂品牌工作必不可少。

## 方法 3：使用数学方式调色

简单情况下可以对 RGB 通道求平均：

\`\`\`
mixed = (color1 + color2) / 2
\`\`\`

想要更准确的结果，可在线性 RGB 中混合，或使用 OKLCH 等感知模型。Chroma.js 和 culori 等库可以在 JavaScript 中完成：

\`\`\`javascript
import { mix } from "culori";
mix("#ff0000", "#0000ff", 0.5); // 中间紫色
\`\`\`

## 常见问题

### RGB 和 CMYK 调色有什么区别？
RGB 是加色——混合光。红加绿得黄。CMYK 是减色——混合颜料。青色加黄色得绿色。同一组数值在两个体系里看起来差别很大。

### 为什么屏幕上混合的颜色看起来灰浊？
通常是因为你在混合互补色或色相距离大的颜色。试着混合更接近的色相，或使用 OKLCH 等感知色彩空间，得到更干净的过渡。

### 如何在屏幕和印刷间匹配品牌色？
使用色彩配置将品牌色从 sRGB 转换为 CMYK。注意：有些鲜艳的屏幕色在印刷中无法完全还原，会发生偏移。想要最准确的结果，请向印刷厂索要样张。

### 可以保存自定义色板吗？
可以。用 [UtilBoxx 调色工具](/zh/tools/color/mixer) 生成色系后，粘贴到 Figma、Coolors 或代码库等设计系统工具中即可。

## 结论

数字调色给你速度、精度和可复现性。想要一种快速、可视化的颜色混合并导出值的方法，把 [UtilBoxx 调色工具](/zh/tools/color/mixer) 一直开着是最方便的选择。`;

const mixerJa = `## なぜデジタルで色を混ぜるのか？

色の混合はデザイン、イラストレーション、ペインティング、ブランディング、UI 制作の基礎です。ソフトウェアで行うと高速・正確・可逆で、何百通りものバリエーションを数分で試せますし、気に入らなければ元に戻せます。また、デジタルなら正確な hex、RGB、HSL、CMYK 値を出力して下流のツールに渡せます。

主な体系は加法混色（RGB、画面用）と減法混色（CMYK、印刷用）で、振る舞いが異なるため、メディアに応じて適切なモデルを選ぶことが大切です。

## よくある用途

- **UI デザイン**：ブランドパレットやコンポーネントのバリアント作成
- **デジタルペインティング**：肌、空、影のサンプリングと微調整
- **印刷準備**：画面の色を CMYK に変換して印刷精度を確保
- **ブランドアイデンティティ**：基本色から一貫したカラーシステムを構築
- **Web デザイン**：1 つのベース色からホバー、フォーカス、無効状態を生成

## 方法 1：UtilBoxx の無料カラーミキサーを使う（推奨）

当社の [カラーミキサー](/ja/tools/color/mixer) は、RGB、HSL、CMYK で 2 色以上をブレンドし、ライブプレビューします。手順は次のとおりです：

1. [utilboxx.com/ja/tools/color/mixer](/ja/tools/color/mixer) にアクセス
2. 2 色以上のソース色を選ぶ
3. ブレンドモード（平均、乗算、スクリーン、加法、減法）を選択
4. スライダーで各色の重みを調整
5. 結果の hex、RGB、HSL、CMYK 値をコピー

**この方法の長所**：
- 入力調整に合わせてライブプレビュー
- 画面用と印刷用の複数ブレンドモデル
- 重みスライダーで繊細な制御
- デザインソフトにワンクリックでコピー
- 100% ブラウザ内動作、画像はアップロードされない

## 方法 2：Figma、Photoshop、Procreate で混ぜる

プロフェッショナル向けデザインツールには強力なカラーミキサーが内蔵されています。Figma ではカラーピッカーを開いてアルファスライダーで別のスウォッチとブレンドします。Photoshop ではブレンドモード付きレイヤーで描画色を混ぜます。Procreate ではキャンバス上で色を別の色の上にドロップしてミックスします。

イラストや複雑なブランディングには必須のツールです。

## 方法 3：数学的に色を混ぜる

簡単なケースでは RGB チャンネルを平均化します：

\`\`\`
mixed = (color1 + color2) / 2
\`\`\`

より正確にはリニア RGB でブレンドするか、OKLCH のような知覚モデルを使います。Chroma.js や culori などのライブラリが JavaScript で実現します：

\`\`\`javascript
import { mix } from "culori";
mix("#ff0000", "#0000ff", 0.5); // 中間の紫
\`\`\`

## よくある質問

### RGB と CMYK の混色の違いは？
RGB は加法混色 — 光を混ぜます。赤と緑を混ぜると黄色。CMYK は減法混色 — 顔料を混ぜます。シアンと黄色を混ぜると緑。同じ数値でも 2 つの体系ではまったく違って見えます。

### 画面上で混ぜた色が濁って見えるのはなぜ？
通常、補色や離れた色相を混ぜているためです。近い色相をブレンドするか、OKLCH のような知覚色空間で試してみてください。

### ブランド色を画面と印刷で一致させるには？
カラープロファイルを使って sRGB から CMYK に変換します。鮮やかな画面色には印刷に相当する色がなく、ずれる点に注意してください。最も正確には印刷所にプルーフを依頼しましょう。

### カスタムパレットを保存できますか？
はい。[UtilBoxx のカラーミキサー](/ja/tools/color/mixer) でトーンを生成し、Figma、Coolors、コードベースなどのデザインシステムに貼り付けてください。

## 結論

デジタルカラーミキシングはスピード、精度、再現性を提供します。色を視覚的にブレンドして値を出力する手軽な方法として、[UtilBoxx のカラーミキサー](/ja/tools/color/mixer) は常に開いておく価値のあるツールです。`;

const mixerEs = `## ¿Por qué mezclar colores digitalmente?

La mezcla de colores es fundamental en diseño, ilustración, pintura, branding y trabajo de UI. Hacerlo en software es rápido, preciso y reversible: puedes probar cien variaciones en minutos y deshacer lo que no funcione. La mezcla digital también te permite exportar valores exactos en hex, RGB, HSL o CMYK para otras herramientas.

Los dos sistemas principales son el aditivo (RGB, usado en pantallas) y el sustractivo (CMYK, usado en impresión). Se comportan distinto, por lo que elegir el modelo correcto según el medio es clave.

## Casos de uso comunes

- **Diseño UI**: crear paletas de marca y variantes de componentes
- **Pintura digital**: muestrear y afinar tonos de piel, cielos y sombras
- **Preparación de impresión**: traducir colores de pantalla a CMYK para imprimir con precisión
- **Identidad de marca**: construir un sistema de color consistente a partir de un tono base
- **Diseño web**: generar estados hover, focus y disabled a partir de un color base

## Método 1: Usa el mezclador de colores gratuito de UtilBoxx (Recomendado)

Nuestro [mezclador de colores](/es/tools/color/mixer) te permite combinar dos o más colores en RGB, HSL o CMYK, con vista previa en vivo. Así se usa:

1. Ve a [utilboxx.com/es/tools/color/mixer](/es/tools/color/mixer)
2. Elige dos o más colores de origen
3. Selecciona un modo de mezcla (promedio, multiplicar, trama, aditivo, sustractivo)
4. Ajusta el peso de cada color con los deslizadores
5. Copia el valor hex, RGB, HSL o CMYK resultante

**Por qué funciona este método**:
- Vista previa en vivo al ajustar entradas
- Múltiples modelos de mezcla para pantalla e impresión
- Deslizadores de peso para control fino
- Copia con un clic a tu herramienta de diseño
- 100% en el navegador, sin subida de imágenes

## Método 2: Mezcla en Figma, Photoshop o Procreate

Las herramientas profesionales de diseño llevan mezcladores potentes integrados. En Figma, abre el selector de color y usa los deslizadores alfa para mezclar con otra muestra. En Photoshop, usa una capa con modo de fusión para mezclar colores pintados. En Procreate, deja caer un color sobre otro en el lienzo.

Estas herramientas son imprescindibles para ilustración y branding complejo.

## Método 3: Usa mezcla matemática de colores

Para casos simples, puedes promediar los canales RGB:

\`\`\`
mixed = (color1 + color2) / 2
\`\`\`

Para resultados más precisos, mezcla en RGB lineal o usa un modelo perceptual como OKLCH. Librerías como Chroma.js y culori lo hacen en JavaScript:

\`\`\`javascript
import { mix } from "culori";
mix("#ff0000", "#0000ff", 0.5); // morado intermedio
\`\`\`

## Preguntas frecuentes

### ¿Cuál es la diferencia entre mezclar en RGB y CMYK?
RGB es aditivo — combina luz. Mezclar rojo y verde da amarillo. CMYK es sustractivo — combina pigmentos. Mezclar cian y amarillo da verde. Los mismos valores numéricos se ven muy distinto en cada sistema.

### ¿Por qué mis colores mezclados se ven turbios en pantalla?
Suele significar que estás mezclando colores complementarios o muy alejados. Prueba a mezclar tonos más cercanos o usa un espacio perceptual como OKLCH para transiciones más limpias.

### ¿Cómo igualo un color de marca entre pantalla e impresión?
Convierte tu color de marca de sRGB a CMYK usando un perfil de color. Ten en cuenta que algunos colores brillantes de pantalla no tienen equivalente en impresión y se desviarán. Pide una prueba a tu imprenta para mayor precisión.

### ¿Puedo guardar una paleta personalizada?
Sí. Usa el [mezclador de colores de UtilBoxx](/es/tools/color/mixer) para generar tus tonos y luego pégalos en una herramienta de design system como Figma, Coolors o tu código.

## Conclusión

La mezcla digital de colores te aporta velocidad, precisión y reproducibilidad. Para una forma rápida y visual de mezclar colores y exportar valores, el [mezclador de colores de UtilBoxx](/es/tools/color/mixer) es la herramienta más fácil de tener siempre a mano.`;

const mixerPt = `## Por que misturar cores digitalmente?

A mistura de cores é fundamental em design, ilustração, pintura, branding e trabalho de UI. Fazer isso em software é rápido, preciso e reversível — dá para testar centenas de variações em minutos e desfazer o que não funcionar. A mistura digital também permite exportar valores exatos em hex, RGB, HSL ou CMYK para outras ferramentas.

Os dois sistemas principais são o aditivo (RGB, usado em telas) e o subtrativo (CMYK, usado em impressão). Eles se comportam de forma diferente, então escolher o modelo certo conforme o meio é essencial.

## Casos de uso comuns

- **Design UI**: criar paletas de marca e variantes de componentes
- **Pintura digital**: amostrar e ajustar tons de pele, céus e sombras
- **Preparação de impressão**: traduzir cores de tela para CMYK com precisão
- **Identidade de marca**: construir um sistema de cores consistente a partir de um tom base
- **Design web**: gerar estados hover, focus e disabled a partir de uma cor base

## Método 1: Use o misturador de cores gratuito do UtilBoxx (Recomendado)

Nosso [misturador de cores](/pt/tools/color/mixer) permite combinar duas ou mais cores em RGB, HSL ou CMYK, com pré-visualização ao vivo. Veja como usar:

1. Vá para [utilboxx.com/pt/tools/color/mixer](/pt/tools/color/mixer)
2. Escolha duas ou mais cores de origem
3. Selecione um modo de mistura (média, multiplicar, screen, aditivo, subtrativo)
4. Ajuste o peso de cada cor com os controles deslizantes
5. Copie o valor hex, RGB, HSL ou CMYK resultante

**Por que este método funciona**:
- Pré-visualização ao vivo ao ajustar as entradas
- Múltiplos modelos de mistura para tela e impressão
- Controles de peso para controle fino
- Cópia com um clique para sua ferramenta de design
- 100% no navegador, sem upload de imagens

## Método 2: Misture em Figma, Photoshop ou Procreate

Ferramentas profissionais de design têm misturadores potentes integrados. No Figma, abra o seletor de cor e use os controles alfa para misturar com outra amostra. No Photoshop, use uma camada com modo de mesclagem para misturar cores pintadas. No Procreate, solte uma cor sobre outra na tela.

Essas ferramentas são essenciais para ilustração e branding complexo.

## Método 3: Use mistura matemática de cores

Para casos simples, tire a média dos canais RGB:

\`\`\`
mixed = (color1 + color2) / 2
\`\`\`

Para resultados mais precisos, misture em RGB linear ou use um modelo perceptual como OKLCH. Bibliotecas como Chroma.js e culori fazem isso em JavaScript:

\`\`\`javascript
import { mix } from "culori";
mix("#ff0000", "#0000ff", 0.5); // roxo intermediário
\`\`\`

## Perguntas frequentes

### Qual a diferença entre misturar em RGB e CMYK?
RGB é aditivo — combina luz. Misturar vermelho e verde dá amarelo. CMYK é subtrativo — combina pigmentos. Misturar ciano e amarelo dá verde. Os mesmos valores numéricos ficam muito diferentes em cada sistema.

### Por que minhas cores misturadas ficam turvas na tela?
Geralmente significa que você está misturando cores complementares ou muito distantes. Tente misturar tons mais próximos, ou use um espaço perceptual como OKLCH para transições mais limpas.

### Como igualar uma cor de marca entre tela e impressão?
Converta sua cor de marca de sRGB para CMYK usando um perfil de cor. Note que algumas cores brilhantes de tela não têm equivalente na impressão e vão mudar. Peça uma prova à sua gráfica para maior precisão.

### Posso salvar uma paleta personalizada?
Sim. Use o [misturador de cores do UtilBoxx](/pt/tools/color/mixer) para gerar seus tons e depois cole em uma ferramenta de design system como Figma, Coolors ou seu código.

## Conclusão

A mistura digital de cores traz velocidade, precisão e reprodutibilidade. Para uma forma rápida e visual de misturar cores e exportar valores, o [misturador de cores do UtilBoxx](/pt/tools/color/mixer) é a ferramenta mais fácil de manter sempre à mão.`;

const mixerFr = `## Pourquoi mélanger les couleurs numériquement ?

Le mélange des couleurs est fondamental en design, illustration, peinture, branding et travail UI. Le faire en logiciel est rapide, précis et réversible : vous pouvez essayer des centaines de variations en quelques minutes et annuler ce qui ne convient pas. Le mélange numérique permet aussi d'exporter des valeurs exactes en hex, RGB, HSL ou CMYK vers d'autres outils.

Les deux grands systèmes sont l'additif (RGB, pour les écrans) et le soustractif (CMJN, pour l'impression). Ils se comportent différemment, donc choisir le bon modèle selon le support est essentiel.

## Cas d'usage courants

- **Design UI** : créer des palettes de marque et des variantes de composants
- **Peinture numérique** : échantillonner et affiner les tons de peau, ciels et ombres
- **Préparation d'impression** : traduire les couleurs écran en CMJN pour une impression fidèle
- **Identité de marque** : bâtir un système de couleurs cohérent à partir d'une teinte de base
- **Design web** : générer des états hover, focus et disabled à partir d'une couleur de base

## Méthode 1 : Utilisez le mélangeur de couleurs gratuit d'UtilBoxx (Recommandé)

Notre [mélangeur de couleurs](/fr/tools/color/mixer) vous permet de combiner deux couleurs ou plus en RGB, HSL ou CMJN, avec aperçu en direct. Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/color/mixer](/fr/tools/color/mixer)
2. Choisissez deux couleurs sources ou plus
3. Sélectionnez un mode de mélange (moyenne, multiplication, écran, additif, soustractif)
4. Ajustez le poids de chaque couleur avec les curseurs
5. Copiez la valeur hex, RGB, HSL ou CMJN résultante

**Pourquoi cette méthode fonctionne** :
- Aperçu en direct à mesure que vous ajustez les entrées
- Plusieurs modèles de mélange pour écran et impression
- Curseurs de poids pour un contrôle fin
- Copie en un clic vers votre outil de design
- 100% dans le navigateur, aucun téléversement d'image

## Méthode 2 : Mélangez dans Figma, Photoshop ou Procreate

Les outils de design professionnels intègrent des mélangeurs puissants. Dans Figma, ouvrez le sélecteur de couleur et utilisez les curseurs alpha pour mélanger avec une autre nuance. Dans Photoshop, utilisez un calque en mode de fusion pour mélanger les couleurs peintes. Dans Procreate, déposez une couleur sur une autre sur le canevas.

Ces outils sont indispensables pour l'illustration et le branding complexe.

## Méthode 3 : Utilisez le mélange mathématique des couleurs

Pour des cas simples, faites la moyenne des canaux RGB :

\`\`\`
mixed = (color1 + color2) / 2
\`\`\`

Pour des résultats plus précis, mélangez en RGB linéaire ou utilisez un modèle perceptuel comme OKLCH. Des bibliothèques comme Chroma.js et culori le font en JavaScript :

\`\`\`javascript
import { mix } from "culori";
mix("#ff0000", "#0000ff", 0.5); // violet intermédiaire
\`\`\`

## Questions fréquentes

### Quelle est la différence entre mélange RGB et CMJN ?
Le RGB est additif — il combine la lumière. Mélanger rouge et vert donne du jaune. Le CMJN est soustractif — il combine des pigments. Mélanger cyan et jaune donne du vert. Les mêmes valeurs numériques rendent très différemment dans chaque système.

### Pourquoi mes couleurs mélangées ont l'air ternes à l'écran ?
Cela signifie généralement que vous mélangez des couleurs complémentaires ou très éloignées. Essayez des teintes plus proches, ou utilisez un espace perceptuel comme OKLCH pour des transitions plus nettes.

### Comment aligner une couleur de marque entre écran et impression ?
Convertissez votre couleur de marque du sRGB vers le CMJN via un profil colorimétrique. Notez que certaines couleurs vives à l'écran n'ont pas d'équivalent à l'impression et seront altérées. Demandez un BAT à votre imprimeur pour plus de précision.

### Puis-je sauvegarder une palette personnalisée ?
Oui. Utilisez le [mélangeur de couleurs d'UtilBoxx](/fr/tools/color/mixer) pour générer vos tons, puis collez-les dans un outil de design system comme Figma, Coolors ou votre code.

## Conclusion

Le mélange numérique des couleurs apporte vitesse, précision et reproductibilité. Pour un moyen rapide et visuel de mélanger des couleurs et d'exporter les valeurs, le [mélangeur de couleurs d'UtilBoxx](/fr/tools/color/mixer) est l'outil le plus simple à garder sous la main.`;

const mixerDe = `## Warum Farben digital mischen?

Das Mischen von Farben ist grundlegend für Design, Illustration, Malerei, Branding und UI-Arbeit. In Software geht es schnell, präzise und reversibel — Sie können in Minuten Hunderte Variationen ausprobieren und jederzeit rückgängig machen. Digitales Mischen erlaubt außerdem den Export genauer Hex-, RGB-, HSL- oder CMYK-Werte für nachgelagerte Tools.

Die zwei Hauptmodelle sind additiv (RGB, für Bildschirme) und subtraktiv (CMYK, für Druck). Sie verhalten sich unterschiedlich, daher ist die Wahl des passenden Modells je nach Medium entscheidend.

## Häufige Anwendungsfälle

- **UI-Design**: Erstellung von Markenpaletten und Komponentenvarianten
- **Digitale Malerei**: Abtasten und Feinabstimmung von Hauttönen, Himmeln und Schatten
- **Druckvorbereitung**: Übersetzung von Bildschirmfarben in CMYK für präzisen Druck
- **Markenidentität**: Aufbau eines konsistenten Farbsystems aus einem Basiston
- **Webdesign**: Erzeugung von Hover-, Fokus- und Disabled-Zuständen aus einer Basisfarbe

## Methode 1: Den kostenlosen Farbmischer von UtilBoxx verwenden (Empfohlen)

Unser [Farbmischer](/de/tools/color/mixer) erlaubt das Mischen von zwei oder mehr Farben in RGB, HSL oder CMYK mit Live-Vorschau. So verwenden Sie ihn:

1. Gehen Sie zu [utilboxx.com/de/tools/color/mixer](/de/tools/color/mixer)
2. Wählen Sie zwei oder mehr Quellfarben
3. Wählen Sie einen Mischmodus (Mittelwert, Multiplizieren, Negativ-Multiplizieren, additiv, subtraktiv)
4. Passen Sie das Gewicht jeder Farbe mit den Schiebereglern an
5. Kopieren Sie den resultierenden Hex-, RGB-, HSL- oder CMYK-Wert

**Warum diese Methode funktioniert**:
- Live-Vorschau beim Anpassen der Eingaben
- Mehrere Mischmodelle für Bildschirm und Druck
- Gewichts-Schieberegler für feine Kontrolle
- Ein-Klick-Kopie in Ihr Designtool
- 100% im Browser, keine Bild-Uploads

## Methode 2: In Figma, Photoshop oder Procreate mischen

Professionelle Designtools haben leistungsfähige Mixer eingebaut. In Figma öffnen Sie die Farbauswahl und nutzen die Alpha-Schieberegler zum Mischen mit einer anderen Probe. In Photoshop verwenden Sie eine Ebene mit Mischmodus zum Mischen gemalter Farben. In Procreate lassen Sie eine Farbe auf eine andere auf der Leinwand fallen.

Diese Tools sind für Illustration und komplexes Branding unverzichtbar.

## Methode 3: Mathematische Farbmischung

Für einfache Fälle mitteln Sie die RGB-Kanäle:

\`\`\`
mixed = (color1 + color2) / 2
\`\`\`

Für genauere Ergebnisse mischen Sie in linearem RGB oder verwenden Sie ein perzeptuelles Modell wie OKLCH. Bibliotheken wie Chroma.js und culori erledigen das in JavaScript:

\`\`\`javascript
import { mix } from "culori";
mix("#ff0000", "#0000ff", 0.5); // mittleres Violett
\`\`\`

## Häufig gestellte Fragen

### Was ist der Unterschied zwischen RGB- und CMYK-Mischung?
RGB ist additiv — es kombiniert Licht. Rot und Grün ergeben Gelb. CMYK ist subtraktiv — es kombiniert Pigmente. Cyan und Gelb ergeben Grün. Dieselben Zahlenwerte sehen in beiden Systemen sehr unterschiedlich aus.

### Warum wirken meine gemischten Farben auf dem Bildschirm trüb?
Das bedeutet meist, dass Sie Komplementärfarben oder weit auseinanderliegende Farbtöne mischen. Mischen Sie näher beieinanderliegende Töne, oder verwenden Sie einen perzeptuellen Farbraum wie OKLCH für sauberere Übergänge.

### Wie gleiche ich eine Markenfarbe zwischen Bildschirm und Druck ab?
Wandeln Sie Ihre Markenfarbe mithilfe eines Farbprofils von sRGB in CMYK um. Beachten Sie, dass manche leuchtenden Bildschirmfarben im Druck keine Entsprechung haben und sich verschieben. Fragen Sie bei Ihrer Druckerei einen Proof an.

### Kann ich eine benutzerdefinierte Palette speichern?
Ja. Erzeugen Sie Ihre Töne mit dem [Farbmischer von UtilBoxx](/de/tools/color/mixer) und fügen Sie sie in ein Design-System-Tool wie Figma, Coolors oder Ihren Code ein.

## Fazit

Digitales Mischen bietet Geschwindigkeit, Präzision und Reproduzierbarkeit. Für eine schnelle, visuelle Möglichkeit, Farben zu mischen und Werte zu exportieren, ist der [Farbmischer von UtilBoxx](/de/tools/color/mixer) das praktischste Tool, das man immer geöffnet lassen kann.`;

export const colorMixerPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-mix-colors",
    category: "Color Tools",
    date: "2026-05-20",
    readTime: "7 min",
    title: "How to Mix Colors: RGB, HSL, and CMYK",
    description: "A practical guide to mixing colors digitally in RGB, HSL, and CMYK for design, illustration, and print.",
    content: mixerEn,
  },
  zh: {
    slug: "how-to-mix-colors",
    category: "颜色工具",
    date: "2026-05-20",
    readTime: "7 分钟",
    title: "如何调色：RGB、HSL 与 CMYK",
    description: "在 RGB、HSL、CMYK 中进行数字调色的实战指南，适用于设计、插画与印刷。",
    content: mixerZh,
  },
  ja: {
    slug: "how-to-mix-colors",
    category: "色ツール",
    date: "2026-05-20",
    readTime: "7 分",
    title: "色の混ぜ方：RGB、HSL、CMYK",
    description: "デザイン、イラスト、印刷のために RGB、HSL、CMYK でデジタルに色を混ぜる実践ガイド。",
    content: mixerJa,
  },
  es: {
    slug: "how-to-mix-colors",
    category: "Herramientas de Color",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Cómo mezclar colores: RGB, HSL y CMYK",
    description: "Guía práctica para mezclar colores digitalmente en RGB, HSL y CMYK para diseño, ilustración e impresión.",
    content: mixerEs,
  },
  pt: {
    slug: "how-to-mix-colors",
    category: "Ferramentas de Cor",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Como misturar cores: RGB, HSL e CMYK",
    description: "Guia prático para misturar cores digitalmente em RGB, HSL e CMYK para design, ilustração e impressão.",
    content: mixerPt,
  },
  fr: {
    slug: "how-to-mix-colors",
    category: "Outils de Couleur",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Comment mélanger des couleurs : RGB, HSL et CMJN",
    description: "Guide pratique pour mélanger des couleurs numériquement en RGB, HSL et CMJN pour le design, l'illustration et l'impression.",
    content: mixerFr,
  },
  de: {
    slug: "how-to-mix-colors",
    category: "Farb-Tools",
    date: "2026-05-20",
    readTime: "7 Min",
    title: "Farben mischen: RGB, HSL und CMYK",
    description: "Praktischer Leitfaden zum digitalen Mischen in RGB, HSL und CMYK für Design, Illustration und Druck.",
    content: mixerDe,
  },
};
