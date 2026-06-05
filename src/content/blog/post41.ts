// Blog post: How to Blur an Image
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const blurEn = `## Why blur an image?

Blurring part of an image — or the whole thing — is one of the most common photo edits in the world. It hides sensitive details, draws attention to a specific area, or simply adds a soft, dreamy aesthetic. Once the domain of Photoshop experts, today anyone can blur an image in seconds with a free browser tool.

## Common reasons to blur an image

- **Privacy on screenshots**: hide usernames, email addresses, phone numbers, account balances, API keys
- **Redact sensitive documents**: blur signatures, ID numbers, or addresses before sharing
- **Backgrounds for portraits**: simulate a shallow depth of field and make the subject pop
- **Hide faces**: protect identities in news photos, street photography, or social media
- **Censor content**: cover logos, license plates, or NSFW regions in a tasteful way
- **Design and aesthetic**: motion blur, bokeh, and dreamy backgrounds for marketing visuals

## Method 1: Use UtilBoxx's Free Image Blur Tool (Recommended)

The fastest way to blur a photo is [UtilBoxx's Image Blur tool](/en/tools/image/blur). It runs in your browser, your image never leaves your device, and you can blur either the whole image or just a region.

How to use it:

1. Go to [utilboxx.com/en/tools/image/blur](/en/tools/image/blur)
2. Click the upload area or drag and drop your image (JPG, PNG, WebP)
3. Choose your mode:
   - **Whole image**: pick a blur intensity slider (light, medium, strong)
   - **Selective**: paint a region with your mouse or finger, then set the blur strength
   - **Shape**: cover a specific rectangle, circle, or oval
4. Adjust the blur radius — typical values are 5-25 pixels
5. Click "Apply" and download the result

**Why we recommend this method**:

- **100% free**, no account, no signup
- **Privacy-first**: the image is processed locally, never uploaded
- **Multiple blur modes**: whole-image, selective brush, geometric shapes
- **Adjustable intensity**: dial in exactly the strength you want
- **Instant preview**: see the result before downloading
- **Works on any device**: phone, tablet, desktop, any modern browser

If you need to redact something in a screenshot or cover a face, this is the lowest-friction option.

## Method 2: iOS / Android built-in editor

Both major mobile operating systems ship with a built-in photo editor that can blur backgrounds (portrait mode) and apply basic effects.

- **iOS**: open the photo, tap **Edit**, then use the **Portrait** mode slider to adjust background blur
- **Android (Google Photos)**: open the photo, tap **Edit > Tools > Blur**

This works well for portrait shots, but you cannot blur arbitrary regions or rectangles. The native editors also do not always let you control the strength precisely.

## Method 3: GIMP (Free desktop app)

For more advanced blurring on a desktop, the open-source image editor **GIMP** is excellent.

1. Open your image in GIMP
2. Select a region with the rectangle or ellipse tool
3. Go to **Filters > Blur > Gaussian Blur**
4. Set the size (H and V) to 10-30
5. Click OK

GIMP is free, powerful, and scriptable, but it has a steep learning curve and a heavy install. For one-off blurring, a browser tool is faster.

## Frequently Asked Questions

### What is the best blur intensity?
It depends. For redacting text, use a high value (20-40). For portrait backgrounds, 5-15 looks more natural. Always preview before saving.

### Is blurring reversible?
No. Once pixels are blurred, the original detail is gone. Keep an unblurred original if you might need it later.

### Can I unblur an image?
Generally no. Real unblurring is the stuff of movies. You can sometimes upscale or sharpen to recover soft edges, but you cannot restore lost data.

### Does blurring reduce image quality?
Blurring only the region you choose keeps the rest of the image pixel-perfect. Whole-image blurring is a creative choice and does not damage the file in any technical sense.

### Is it safe to blur sensitive information this way?
Yes — pixel-based blurring is enough to defeat casual screenshot readers. For highly sensitive data (medical, financial, legal), a solid black or white box is more reliable, since clever attacks can sometimes reconstruct blurred regions.

## Conclusion

For quick redactions and privacy cleanups, [UtilBoxx's free Image Blur tool](/en/tools/image/blur) is the fastest and safest option. Mobile users can do portrait-mode blurs in their built-in editors. Power users with desktop installs will enjoy GIMP. Pick the right tool and redact responsibly.`;

const blurZh = `## 为什么要给图片加模糊？

对图片的一部分——或整张图——做模糊处理，是世界上最常见的图片编辑操作之一。它能隐藏敏感细节、把注意力吸引到某个区域，或者简单地营造柔和梦幻的美感。曾经是 Photoshop 高手的专属领域，如今任何人都能用免费浏览器工具在几秒钟内完成。

## 常见的图片模糊原因

- **截图的隐私处理**：隐藏用户名、邮箱、电话、账户余额、API 密钥
- **脱敏文档**：在分享前模糊签名、身份证号或地址
- **人像背景虚化**：模拟浅景深，让主体更突出
- **隐藏面部**：在新闻照片、街拍或社交媒体中保护身份
- **内容打码**：用更体面的方式遮挡 Logo、车牌或不合适的内容
- **设计与美学**：运动模糊、散景、营销视觉中的梦幻背景

## 方法 1：使用 UtilBoxx 免费图片模糊工具（推荐）

最快给照片加模糊的方法是 [UtilBoxx 的图片模糊工具](/zh/tools/image/blur)。它运行在浏览器中，图片根本不会离开你的设备，并且可以模糊整张图或只是某个区域。

使用步骤：

1. 访问 [utilboxx.com/zh/tools/image/blur](/zh/tools/image/blur)
2. 点击上传区域或拖放你的图片（JPG、PNG、WebP）
3. 选择模式：
   - **整图模糊**：拉动模糊强度滑块（轻、中、强）
   - **局部模糊**：用鼠标或手指在某个区域涂抹，然后设置模糊强度
   - **形状模糊**：覆盖特定的矩形、圆形或椭圆形
4. 调整模糊半径——典型值是 5-25 像素
5. 点击"应用"并下载结果

**为什么推荐这个方法**：

- **100% 免费**，无需账号、无需注册
- **隐私优先**：图片在本地处理，从不上传
- **多种模糊模式**：整图、画笔选区、几何形状
- **强度可调**：精确控制到你想要的强度
- **即时预览**：下载前先看到结果
- **所有设备都能用**：手机、平板、桌面，任何现代浏览器

如果你需要在截图上脱敏，或盖住一张脸，这是摩擦最小的方案。

## 方法 2：iOS / Android 自带编辑器

两大主流手机系统都自带可以模糊背景（人像模式）和应用基础特效的图片编辑器。

- **iOS**：打开照片，点击**编辑**，然后用**人像**模式滑块调整背景模糊
- **Android（Google Photos）**：打开照片，点击**编辑 > 工具 > 模糊**

对人像照片效果不错，但你不能模糊任意区域或矩形。自带编辑器也不总能让你精确控制强度。

## 方法 3：GIMP（免费桌面应用）

要在桌面上做更高级的模糊，开源图片编辑器 **GIMP** 是首选。

1. 在 GIMP 中打开图片
2. 用矩形或椭圆工具选中一个区域
3. 进入**滤镜 > 模糊 > 高斯模糊**
4. 把大小（H 和 V）设为 10-30
5. 点击确定

GIMP 免费、强大、可脚本化，但学习曲线陡、安装体积大。对于一次性的模糊操作，浏览器工具更快。

## 常见问题

### 最佳的模糊强度是多少？
看场景。要脱敏文字，用较高值（20-40）。人像背景虚化，5-15 看起来更自然。下载前一定要预览。

### 模糊操作可以撤销吗？
不能。一旦像素被模糊，原始细节就消失了。如果你以后可能需要，请保留一张未模糊的原件。

### 可以把模糊去掉吗？
通常不能。真正的"反模糊"是电影里的情节。你可以靠放大或锐化稍微恢复柔和边缘，但丢失的数据无法找回。

### 模糊会降低画质吗？
只模糊你选的区域，其余部分像素完全无损。整图模糊是一种创意选择，从技术层面来说并不损伤文件。

### 用这种方式模糊敏感信息安全吗？
是的——基于像素的模糊足以应付普通的截图阅读。对于高度敏感的数据（医疗、财务、法律），使用纯黑或纯白的实心色块更可靠，因为有些聪明的攻击可以重建模糊区域。

## 结论

对于快速脱敏和隐私清理，[UtilBoxx 的免费图片模糊工具](/zh/tools/image/blur) 是最快最安全的方案。手机用户可以用自带编辑器做人像模式模糊。装了桌面的高级用户可以选择 GIMP。选对工具，负责任地脱敏。`;

const blurJa = `## なぜ画像をぼかすのか？

画像の一部——あるいは全体——をぼかすのは、世界で最も一般的な写真編集のひとつです。機微な情報を隠したり、視線を集めたり、単に柔らかく夢のような雰囲気を加えたりします。一昔前は Photoshop の専事項，如今は誰もが無料ブラウザツールで数秒でぼかしを入れられます。

## 画像をぼかすよくある理由

- **スクリーンショットのプライバシー処理**：ユーザー名、メール、電話番号、残高、API キーを隠す
- **機密書類の墨消し**：署名、ID 番号、住所を共有前にぼかす
- **ポートレートの背景ぼかし**：浅い被写界深度を再現し、被写体を引き立てる
- **顔を隠す**：ニュース写真、ストリート写真、SNS で身元を守る
- **コンテンツ Censorship**：ロゴ、ナンバープレート、不適切なエリアをスマートに覆う
- **デザインと演出**：モーションブラー、ボケ、マーケティングビジュアルでのドリーミーな背景

## 方法 1：UtilBoxx 無料画像ぼかしツール（推奨）

写真を最速でぼかす方法は [UtilBoxx の画像ぼかしツール](/ja/tools/image/blur) です。ブラウザ内で動き、画像は端末から出ません。全体でも一部分でもぼかせます。

使い方：

1. [utilboxx.com/ja/tools/image/blur](/ja/tools/image/blur) にアクセス
2. アップロードエリアをクリック、または画像をドラッグ＆ドロップ（JPG、PNG、WebP）
3. モードを選択：
   - **全体ぼかし**：ぼかし強度のスライダーを選ぶ（弱、中、強）
   - **選択ぼかし**：マウスや指で範囲を塗り、強度を設定
   - **シェイプぼかし**：矩形・円・楕円で覆う
4. ぼかし半径を調整——一般的な値は 5〜25 ピクセル
5.「適用」をクリックして結果をダウンロード

**この方法を推奨する理由**：

- **100% 無料**、アカウント・登録不要
- **プライバシー重視**：画像はローカル処理され、アップロードされない
- **複数のぼかしモード**：全体、選択ブラシ、幾何学シェイプ
- **強度調整可能**：ちょうどよい強度にダイヤルで合わせる
- **即時プレビュー**：ダウンロード前に結果を確認
- **全デバイス対応**：スマホ、タブレット、デスクトップ、どのモダンブラウザでも

スクリーンショットの墨消しや顔隠しがしたいなら、最も低摩擦な選択肢です。

## 方法 2：iOS / Android 標準エディタ

両モバイル OS とも標準の写真エディタで背景ぼかし（ポートレートモード）と基本エフェクトが使えます。

- **iOS**：写真を開いて**編集**をタップ、**ポートレート**モードのスライダーで背景ぼかしを調整
- **Android（Google フォト）**：写真を開いて**編集 > ツール > ぼかし**をタップ

ポートレートには良いですが、任意の範囲や矩形をぼかすことはできません。標準エディタは強度を精密に制御できるとは限りません。

## 方法 3：GIMP（無料デスクトップアプリ）

デスクトップでより高度なぼかしをするなら、オープンソースの画像編集ソフト **GIMP** が優れています。

1. GIMP で画像を開く
2. 矩形または楕円ツールで範囲を選択
3. **フィルター > ぼかし > ガウスぼかし**へ
4. サイズ（H と V）を 10〜30 に設定
5. OK をクリック

GIMP は無料で強力でスクリプト化も可能ですが、学習曲線が急でインストールも重め。単発のぼかしならブラウザツールが速いです。

## よくある質問

### 最適なぼかし強度は？
用途次第です。テキスト墨消しには大きめ（20〜40）。ポートレートの背景なら 5〜15 が自然に見えます。保存前に必ずプレビューを。

### ぼかしは取り消せますか？
いいえ。一度ピクセルがぼかされると、元の詳細は失われます。後で必要になるかもしれないなら、ぼかしていないオリジナルを保管しておいてください。

### ぼかしを解除できますか？
基本的にできません。本当の「アンブラー」は映画の中だけの話。アップスケールやシャープ化でやわらかいエッジを多少戻すことはあっても、消失したデータは復元できません。

### ぼかしは画質を落としますか？
選択範囲だけをぼかせば、残りの部分はピクセルのままです。全体ぼかしはクリエイティブな選択であり、ファイルへの技術的ダメージではありません。

### 機微情報をこの方法でぼかして安全ですか？
はい——ピクセルベースのぼかしは一般的なスクリーンショット読者には十分です。極めて機密性の高いデータ（医療・財務・法務）にはベタ塗り（黒や白の塗りつぶし）の方が信頼できます。巧妙な攻撃でぼかし領域が復元される場合もあるためです。

## 結論

クイックな墨消しとプライバシー処理には、[UtilBoxx の無料画像ぼかしツール](/ja/tools/image/blur) が最速かつ最も安全です。スマホユーザーは標準エディタでポートレートぼかしが可能。デスクトップに慣れたパワーユーザーは GIMP を楽しんでください。ツールを使い分けて、責任を持って墨消ししましょう。`;

const blurEs = `## ¿Por qué desenfocar una imagen?

Desenfocar parte de una imagen —o toda ella— es una de las ediciones fotográficas más comunes del mundo. Oculta detalles sensibles, dirige la atención a una zona concreta o simplemente añade una estética suave y de ensueño. Antes dominio de expertos en Photoshop, hoy cualquiera puede desenfocar una imagen en segundos con una herramienta gratuita en el navegador.

## Razones habituales para desenfocar una imagen

- **Privacidad en capturas de pantalla**: oculta nombres de usuario, correos, teléfonos, saldos de cuenta, claves API
- **Censurar documentos sensibles**: difumina firmas, números de ID o direcciones antes de compartir
- **Fondos de retrato**: simula una profundidad de campo reducida y hace que el sujeto destaque
- **Ocultar rostros**: protege identidades en fotos de prensa, fotografía callejera o redes sociales
- **Censurar contenido**: cubre logos, matrículas o zonas NSFW de forma elegante
- **Diseño y estética**: motion blur, bokeh y fondos oníricos para visuales de marketing

## Método 1: Usa el Desenfocador de Imágenes Gratuito de UtilBoxx (Recomendado)

La forma más rápida de desenfocar una foto es el [Desenfocador de Imágenes de UtilBoxx](/es/tools/image/blur). Funciona en tu navegador, tu imagen nunca sale de tu dispositivo y puedes desenfocar toda la imagen o solo una región.

Cómo usarlo:

1. Ve a [utilboxx.com/es/tools/image/blur](/es/tools/image/blur)
2. Haz clic en el área de subida o arrastra tu imagen (JPG, PNG, WebP)
3. Elige tu modo:
   - **Imagen completa**: mueve el deslizador de intensidad (suave, medio, fuerte)
   - **Selectivo**: pinta una región con el ratón o el dedo y define la intensidad
   - **Forma**: cubre un rectángulo, círculo u óvalo concreto
4. Ajusta el radio de desenfoque — valores típicos 5-25 píxeles
5. Haz clic en "Aplicar" y descarga el resultado

**Por qué recomendamos este método**:

- **100% gratis**, sin cuenta, sin registro
- **Privacidad primero**: la imagen se procesa en local, nunca se sube
- **Múltiples modos de desenfoque**: imagen completa, pincel selectivo, formas geométricas
- **Intensidad ajustable**: afina exactamente la fuerza que necesitas
- **Vista previa instantánea**: mira el resultado antes de descargar
- **Funciona en cualquier dispositivo**: móvil, tablet, escritorio, cualquier navegador moderno

Si necesitas censurar algo en una captura o cubrir una cara, esta es la opción de menor fricción.

## Método 2: Editor integrado de iOS / Android

Ambos sistemas operativos móviles traen un editor de fotos integrado que puede desenfocar fondos (modo retrato) y aplicar efectos básicos.

- **iOS**: abre la foto, toca **Editar** y usa el deslizador del modo **Retrato**
- **Android (Google Fotos)**: abre la foto, toca **Editar > Herramientas > Desenfocar**

Funciona bien para retratos, pero no puedes desenfocar regiones arbitrarias o rectángulos. Los editores nativos tampoco siempre dejan controlar la intensidad con precisión.

## Método 3: GIMP (Aplicación de escritorio gratuita)

Para desenfoques más avanzados en escritorio, el editor de imágenes de código abierto **GIMP** es excelente.

1. Abre tu imagen en GIMP
2. Selecciona una región con la herramienta de rectángulo o elipse
3. Ve a **Filtros > Desenfocar > Desenfoque gaussiano**
4. Ajusta el tamaño (H y V) a 10-30
5. Pulsa OK

GIMP es gratis, potente y scriptable, pero tiene una curva de aprendizaje pronunciada y una instalación pesada. Para desenfocar puntualmente, una herramienta de navegador es más rápida.

## Preguntas frecuentes

### ¿Cuál es la mejor intensidad de desenfoque?
Depende. Para censurar texto, usa un valor alto (20-40). Para fondos de retrato, 5-15 queda más natural. Siempre previsualiza antes de guardar.

### ¿Se puede revertir el desenfoque?
No. Una vez que los píxeles están difuminados, el detalle original se pierde. Conserva el original sin desenfocar por si lo necesitas más adelante.

### ¿Se puede eliminar el desenfoque?
Por lo general, no. El "des-desenfoque" real es cosa de películas. A veces puedes reescalar o enfocar para recuperar bordes suaves, pero no recuperas datos perdidos.

### ¿El desenfoque reduce la calidad de imagen?
Desenfocar solo la región elegida deja el resto de la imagen intacto a nivel de píxel. El desenfoque completo es una decisión creativa y no daña técnicamente el archivo.

### ¿Es seguro censurar información sensible así?
Sí — el desenfoque basado en píxeles basta para defenderse de lectores casuales de capturas. Para datos altamente sensibles (médicos, financieros, legales), una caja negra o blanca sólida es más fiable, porque algunos ataques ingeniosos pueden reconstruir regiones difuminadas.

## Conclusión

Para censurados rápidos y limpieza de privacidad, el [Desenfocador de Imágenes gratuito de UtilBoxx](/es/tools/image/blur) es la opción más rápida y segura. Los usuarios móviles pueden hacer desenfoques de retrato en sus editores integrados. Los usuarios avanzados con escritorio instalado disfrutarán de GIMP. Elige la herramienta adecuada y censura con responsabilidad.`;

const blurPt = `## Por que desfocar uma imagem?

Desfocar parte de uma imagem — ou a imagem inteira — é uma das edições fotográficas mais comuns do mundo. Esconde detalhes sensíveis, direciona a atenção para uma área específica ou simplesmente adiciona uma estética suave e sonhadora. Antes domínio de especialistas em Photoshop, hoje qualquer pessoa pode desfocar uma imagem em segundos com uma ferramenta gratuita no navegador.

## Razões comuns para desfocar uma imagem

- **Privacidade em screenshots**: esconda nomes de usuário, e-mails, telefones, saldos de conta, chaves de API
- **Censurar documentos sensíveis**: difume assinaturas, números de identidade ou endereços antes de compartilhar
- **Fundos de retrato**: simule uma profundidade de campo rasa e faça o sujeito se destacar
- **Esconder rostos**: proteja identidades em fotos de notícias, street photography ou redes sociais
- **Censurar conteúdo**: cubra logos, placas ou regiões NSFW de forma elegante
- **Design e estética**: motion blur, bokeh e fundos sonhadores para visuais de marketing

## Método 1: Use o Desfocador de Imagens Gratuito do UtilBoxx (Recomendado)

A forma mais rápida de desfocar uma foto é o [Desfocador de Imagens do UtilBoxx](/pt/tools/image/blur). Ele roda no seu navegador, sua imagem nunca sai do seu dispositivo, e você pode desfocar a imagem inteira ou apenas uma região.

Como usar:

1. Vá para [utilboxx.com/pt/tools/image/blur](/pt/tools/image/blur)
2. Clique na área de upload ou arraste sua imagem (JPG, PNG, WebP)
3. Escolha o modo:
   - **Imagem inteira**: mova o controle de intensidade (suave, médio, forte)
   - **Seletivo**: pinte uma região com o mouse ou o dedo e defina a intensidade
   - **Forma**: cubra um retângulo, círculo ou oval específico
4. Ajuste o raio do desfoque — valores típicos 5-25 pixels
5. Clique em "Aplicar" e baixe o resultado

**Por que recomendamos este método**:

- **100% grátis**, sem conta, sem cadastro
- **Privacidade em primeiro lugar**: a imagem é processada localmente, nunca é enviada
- **Vários modos de desfoque**: imagem inteira, pincel seletivo, formas geométricas
- **Intensidade ajustável**: afine exatamente a força desejada
- **Pré-visualização instantânea**: veja o resultado antes de baixar
- **Funciona em qualquer dispositivo**: celular, tablet, desktop, qualquer navegador moderno

Se você precisa censurar algo em um print ou cobrir um rosto, esta é a opção de menor atrito.

## Método 2: Editor integrado do iOS / Android

Os dois principais sistemas operacionais móveis trazem um editor de fotos integrado que pode desfocar fundos (modo retrato) e aplicar efeitos básicos.

- **iOS**: abra a foto, toque em **Editar** e use o controle do modo **Retrato**
- **Android (Google Fotos)**: abra a foto, toque em **Editar > Ferramentas > Desfocar**

Funciona bem para retratos, mas você não pode desfocar regiões arbitrárias ou retângulos. Os editores nativos nem sempre permitem controlar a intensidade com precisão.

## Método 3: GIMP (App gratuito para desktop)

Para desfoques mais avançados no desktop, o editor de imagens open-source **GIMP** é excelente.

1. Abra sua imagem no GIMP
2. Selecione uma região com a ferramenta de retângulo ou elipse
3. Vá em **Filtros > Desfoque > Desfoque Gaussiano**
4. Ajuste o tamanho (H e V) para 10-30
5. Clique em OK

O GIMP é grátis, poderoso e scriptable, mas tem uma curva de aprendizado íngreme e uma instalação pesada. Para desfoques pontuais, uma ferramenta de navegador é mais rápida.

## Perguntas frequentes

### Qual a melhor intensidade de desfoque?
Depende. Para censurar texto, use um valor alto (20-40). Para fundos de retrato, 5-15 fica mais natural. Sempre visualize antes de salvar.

### O desfoque é reversível?
Não. Uma vez que os pixels estão desfocados, o detalhe original se perde. Mantenha o original sem desfoque caso precise depois.

### Dá para remover o desfoque?
Em geral, não. O "des-desfoque" de verdade é coisa de filme. Às vezes você pode redimensionar ou aplicar sharpen para recuperar bordas suaves, mas não recupera dados perdidos.

### O desfoque reduz a qualidade da imagem?
Desfocar apenas a região escolhida deixa o restante da imagem pixel-perfect. O desfoque total é uma escolha criativa e não danifica tecnicamente o arquivo.

### É seguro censurar informações sensíveis assim?
Sim — o desfoque baseado em pixels basta para se defender de leitores casuais de print. Para dados altamente sensíveis (médicos, financeiros, jurídicos), uma caixa sólida preta ou branca é mais confiável, pois ataques engenhosos às vezes conseguem reconstruir regiões desfocadas.

## Conclusão

Para censuras rápidas e limpeza de privacidade, o [Desfocador de Imagens gratuito do UtilBoxx](/pt/tools/image/blur) é a opção mais rápida e segura. Usuários de celular podem fazer desfoques de retrato nos editores integrados. Usuários avançados com desktop instalado vão curtir o GIMP. Escolha a ferramenta certa e censure com responsabilidade.`;

const blurFr = `## Pourquoi flouter une image ?

Flouter une partie d'une image — ou l'image entière — est l'une des retouches photo les plus courantes au monde. Cela cache des détails sensibles, attire l'attention sur une zone précise, ou ajoute simplement une esthétique douce et onirique. Autrefois réservé aux experts de Photoshop, aujourd'hui n'importe qui peut flouter une image en quelques secondes avec un outil gratuit dans le navigateur.

## Raisons courantes de flouter une image

- **Vie privée sur les captures d'écran** : masquer noms d'utilisateur, e-mails, téléphones, soldes de compte, clés API
- **Caviarder des documents sensibles** : flouter signatures, numéros d'identité ou adresses avant partage
- **Arrière-plans de portrait** : simuler une faible profondeur de champ et faire ressortir le sujet
- **Masquer des visages** : protéger les identités sur des photos de presse, de rue ou sur les réseaux sociaux
- **Censurer du contenu** : couvrir logos, plaques d'immatriculation ou zones sensibles avec goût
- **Design et esthétique** : flou de mouvement, bokeh et arrière-plans oniriques pour des visuels marketing

## Méthode 1 : Utilisez le Flouteur d'Image Gratuit d'UtilBoxx (Recommandé)

La façon la plus rapide de flouter une photo est le [Flouteur d'Image d'UtilBoxx](/fr/tools/image/blur). Il fonctionne dans votre navigateur, votre image ne quitte jamais votre appareil et vous pouvez flouter toute l'image ou seulement une zone.

Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/image/blur](/fr/tools/image/blur)
2. Cliquez sur la zone de téléchargement ou glissez-déposez votre image (JPG, PNG, WebP)
3. Choisissez votre mode :
   - **Image entière** : déplacez le curseur d'intensité (léger, moyen, fort)
   - **Sélectif** : peignez une zone à la souris ou au doigt, puis réglez l'intensité
   - **Forme** : couvrez un rectangle, cercle ou ovale précis
4. Ajustez le rayon de flou — valeurs typiques 5-25 pixels
5. Cliquez sur "Appliquer" et téléchargez le résultat

**Pourquoi nous recommandons cette méthode** :

- **100% gratuit**, pas de compte, pas d'inscription
- **Confidentialité d'abord** : l'image est traitée en local, jamais envoyée
- **Plusieurs modes de flou** : image entière, pinceau sélectif, formes géométriques
- **Intensité réglable** : dosez exactement la force voulue
- **Aperçu instantané** : voyez le résultat avant de télécharger
- **Fonctionne sur tout appareil** : mobile, tablette, desktop, tout navigateur moderne

Si vous avez besoin de caviarder une capture ou de couvrir un visage, c'est l'option la plus directe.

## Méthode 2 : Éditeur intégré iOS / Android

Les deux grands OS mobiles intègrent un éditeur photo capable de flouter l'arrière-plan (mode portrait) et d'appliquer des effets basiques.

- **iOS** : ouvrez la photo, touchez **Modifier**, puis utilisez le curseur du mode **Portrait**
- **Android (Google Photos)** : ouvrez la photo, touchez **Modifier > Outils > Flou**

Cela marche bien pour les portraits, mais on ne peut pas flouter des zones arbitraires ou des rectangles. Les éditeurs natifs ne permettent pas toujours de régler l'intensité avec précision.

## Méthode 3 : GIMP (Application de bureau gratuite)

Pour des flous plus avancés sur ordinateur, l'éditeur d'image open-source **GIMP** est excellent.

1. Ouvrez votre image dans GIMP
2. Sélectionnez une zone avec l'outil rectangle ou ellipse
3. Allez dans **Filtres > Flou > Flou gaussien**
4. Réglez la taille (H et V) à 10-30
5. Cliquez sur OK

GIMP est gratuit, puissant et scriptable, mais sa courbe d'apprentissage est raide et l'installation lourde. Pour un flou ponctuel, un outil de navigateur est plus rapide.

## Questions fréquentes

### Quelle est la meilleure intensité de flou ?
Cela dépend. Pour caviarder du texte, utilisez une valeur élevée (20-40). Pour des arrière-plans de portrait, 5-15 paraît plus naturel. Prévisualisez toujours avant d'enregistrer.

### Le flou est-il réversible ?
Non. Une fois les pixels floutés, le détail d'origine est perdu. Gardez l'original non flouté au cas où.

### Peut-on déflouter une image ?
En général, non. Le vrai "dé-flou" relève du cinéma. Parfois on peut agrandir ou accentuer pour récupérer des bords doux, mais les données perdues ne reviennent pas.

### Le flou réduit-il la qualité de l'image ?
Flouter uniquement la zone choisie laisse le reste de l'image intact au pixel près. Le flou global est un choix créatif et n'abîme pas techniquement le fichier.

### Est-il sûr de caviarder des informations sensibles ainsi ?
Oui — le flou à base de pixels suffit contre les lecteurs de capture occasionnels. Pour des données très sensibles (médicales, financières, juridiques), un aplat noir ou blanc est plus fiable, car des attaques malignes peuvent parfois reconstruire des zones floutées.

## Conclusion

Pour des caviardages rapides et un nettoyage de la confidentialité, le [Flouteur d'Image gratuit d'UtilBoxx](/fr/tools/image/blur) est l'option la plus rapide et la plus sûre. Les utilisateurs mobiles peuvent faire des flous de portrait dans leurs éditeurs intégrés. Les utilisateurs avancés avec un bureau installé apprécieront GIMP. Choisissez le bon outil et caviardez de manière responsable.`;

const blurDe = `## Warum ein Bild weichzeichnen?

Einen Teil eines Bildes weichzuzeichnen — oder das ganze Bild — ist einer der häufigsten Fotobearbeitungen überhaupt. Es versteckt sensible Details, lenkt die Aufmerksamkeit auf einen bestimmten Bereich oder verleiht dem Bild einfach eine sanfte, verträumte Ästhetik. Früher Photoshop-Profis vorbehalten, kann heute jeder mit einem kostenlosen Browser-Tool in Sekunden ein Bild weichzeichnen.

## Häufige Gründe, ein Bild weichzuzeichnen

- **Privatsphäre auf Screenshots**: Benutzernamen, E-Mails, Telefonnummern, Kontostände, API-Schlüssel verbergen
- **Sensible Dokumente schwärzen**: Unterschriften, Ausweisnummern oder Adressen vor dem Teilen weichzeichnen
- **Porträt-Hintergründe**: eine geringe Tiefenschärfe simulieren und das Motiv hervorheben
- **Gesichter verbergen**: Identitäten in Pressefotos, Street Photography oder sozialen Medien schützen
- **Inhalte zensieren**: Logos, Kennzeichen oder sensible Bereiche geschmackvoll abdecken
- **Design und Ästhetik**: Bewegungsunschärfe, Bokeh und verträumte Hintergründe für Marketing-Visuals

## Methode 1: Verwende das kostenlose Bild-Weichzeichner-Tool von UtilBoxx (Empfohlen)

Der schnellste Weg, ein Foto weichzuzeichnen, ist der [Bild-Weichzeichner von UtilBoxx](/de/tools/image/blur). Er läuft im Browser, dein Bild verlässt dein Gerät nie, und du kannst entweder das ganze Bild oder nur einen Bereich weichzeichnen.

So nutzt du ihn:

1. Gehe zu [utilboxx.com/de/tools/image/blur](/de/tools/image/blur)
2. Klicke auf den Upload-Bereich oder ziehe dein Bild per Drag & Drop (JPG, PNG, WebP)
3. Wähle deinen Modus:
   - **Ganzes Bild**: Bewege den Intensitätsregler (leicht, mittel, stark)
   - **Selektiv**: Male einen Bereich mit Maus oder Finger und stelle die Stärke ein
   - **Form**: decke ein bestimmtes Rechteck, einen Kreis oder ein Oval ab
4. Passe den Unschärferadius an — typische Werte sind 5-25 Pixel
5. Klicke auf "Anwenden" und lade das Ergebnis herunter

**Warum wir diese Methode empfehlen**:

- **100% kostenlos**, kein Konto, keine Registrierung
- **Datenschutz zuerst**: Das Bild wird lokal verarbeitet, niemals hochgeladen
- **Mehrere Unschärfemodi**: Ganzes Bild, Auswahlpinsel, geometrische Formen
- **Intensität einstellbar**: genau die Stärke dosieren, die du brauchst
- **Sofortige Vorschau**: Sieh das Ergebnis vor dem Download
- **Funktioniert auf jedem Gerät**: Handy, Tablet, Desktop, jeder moderne Browser

Wenn du auf einem Screenshot etwas schwärzen oder ein Gesicht abdecken musst, ist das die reibungsloseste Option.

## Methode 2: Integrierter Editor in iOS / Android

Beide großen mobilen Betriebssysteme liefern einen integrierten Foto-Editor, der Hintergründe (Porträtmodus) weichzeichnen und einfache Effekte anwenden kann.

- **iOS**: Öffne das Foto, tippe auf **Bearbeiten** und nutze den **Porträt**-Modus-Schieberegler
- **Android (Google Fotos)**: Öffne das Foto, tippe auf **Bearbeiten > Werkzeuge > Weichzeichnen**

Funktioniert gut für Porträts, aber du kannst keine beliebigen Bereiche oder Rechtecke weichzeichnen. Die nativen Editoren erlauben auch nicht immer eine präzise Stärkensteuerung.

## Methode 3: GIMP (Kostenlose Desktop-App)

Für fortgeschrittenere Unschärfen am Desktop ist der Open-Source-Bildeditor **GIMP** ausgezeichnet.

1. Öffne dein Bild in GIMP
2. Wähle einen Bereich mit dem Rechteck- oder Ellipsenwerkzeug aus
3. Gehe zu **Filter > Weichzeichnen > Gaußscher Weichzeichner**
4. Setze die Größe (H und V) auf 10-30
5. Klicke auf OK

GIMP ist kostenlos, mächtig und skriptbar, hat aber eine steile Lernkurve und eine schwere Installation. Für punktuelles Weichzeichnen ist ein Browser-Tool schneller.

## Häufig gestellte Fragen

### Was ist die beste Unschärfeintensität?
Es kommt darauf an. Zum Schwärzen von Text nimmst du einen hohen Wert (20-40). Für Porträt-Hintergründe wirken 5-15 natürlicher. Immer vorher in der Vorschau prüfen.

### Ist Weichzeichnen rückgängig zu machen?
Nein. Sind die Pixel erst weichgezeichnet, ist das Originaldetail weg. Bewahre das unweichgezeichnete Original auf, falls du es später brauchst.

### Kann man die Unschärfe wieder entfernen?
Im Allgemeinen nein. Echtes "Entschärfen" ist Filmkram. Manchmal kann man hochskalieren oder schärfen, um weiche Kanten zurückzugewinnen, aber verlorene Daten kommen nicht zurück.

### Reduziert Weichzeichnen die Bildqualität?
Weichzeichnest du nur den ausgewählten Bereich, bleibt der Rest des Bildes pixelgenau. Eine globale Unschärfe ist eine kreative Entscheidung und beschädigt die Datei technisch nicht.

### Ist es sicher, sensible Informationen so zu schwärzen?
Ja — pixelbasierte Unschärfe reicht aus, um gelegentliche Screenshot-Leser abzuwehren. Für hochsensible Daten (Medizin, Finanzen, Recht) ist ein massiver schwarzer oder weißer Block zuverlässiger, da clevere Angriffe weichgezeichnete Bereiche manchmal rekonstruieren können.

## Fazit

Für schnelle Schwärzungen und Privatsphäre-Bereinigung ist der [kostenlose Bild-Weichzeichner von UtilBoxx](/de/tools/image/blur) die schnellste und sicherste Option. Mobilnutzer können Porträt-Unschärfen in den integrierten Editoren machen. Power-User mit Desktop-Installation werden GIMP genießen. Wähle das richtige Tool und schwärze verantwortungsvoll.`;

export const blurImagePost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-blur-an-image",
    category: "Image Tools",
    date: "2026-05-20",
    readTime: "5 min",
    title: "How to Blur an Image: Quick Privacy and Aesthetic Guide (2026)",
    description: "Learn how to blur images online for privacy, design, and redacting screenshots. Free, fast, and works in your browser.",
    content: blurEn,
  },
  zh: {
    slug: "how-to-blur-an-image",
    category: "图片工具",
    date: "2026-05-20",
    readTime: "5 分钟",
    title: "如何给图片加模糊：隐私和美学快速指南 (2026)",
    description: "学习如何在线给图片加模糊以保护隐私、设计或给截图脱敏。免费、快速、浏览器中即可完成。",
    content: blurZh,
  },
  ja: {
    slug: "how-to-blur-an-image",
    category: "画像ツール",
    date: "2026-05-20",
    readTime: "5 分",
    title: "画像をぼかす方法：プライバシーと演出のクイックガイド (2026)",
    description: "プライバシー、デザイン、スクリーンショットの墨消しのためにオンラインで画像をぼかす方法を学びましょう。無料で高速、ブラウザで動作。",
    content: blurJa,
  },
  es: {
    slug: "how-to-blur-an-image",
    category: "Herramientas de Imagen",
    date: "2026-05-20",
    readTime: "5 min",
    title: "Cómo Desenfocar una Imagen: Guía Rápida de Privacidad y Estética (2026)",
    description: "Aprende a desenfocar imágenes online para privacidad, diseño y censurar capturas. Gratis, rápido y funciona en tu navegador.",
    content: blurEs,
  },
  pt: {
    slug: "how-to-blur-an-image",
    category: "Ferramentas de Imagem",
    date: "2026-05-20",
    readTime: "5 min",
    title: "Como Desfocar uma Imagem: Guia Rápido de Privacidade e Estética (2026)",
    description: "Aprenda a desfocar imagens online para privacidade, design e censurar prints. Grátis, rápido e funciona no seu navegador.",
    content: blurPt,
  },
  fr: {
    slug: "how-to-blur-an-image",
    category: "Outils d'Image",
    date: "2026-05-20",
    readTime: "5 min",
    title: "Comment Flouter une Image : Guide Rapide Vie Privée et Esthétique (2026)",
    description: "Apprenez à flouter des images en ligne pour la confidentialité, le design et le caviardage de captures. Gratuit, rapide, dans votre navigateur.",
    content: blurFr,
  },
  de: {
    slug: "how-to-blur-an-image",
    category: "Bild-Tools",
    date: "2026-05-20",
    readTime: "5 Min",
    title: "Bild weichzeichnen: Schneller Datenschutz- und Ästhetik-Leitfaden (2026)",
    description: "Lerne, Bilder online weichzuzeichnen für Datenschutz, Design und Screenshot-Schwärzung. Kostenlos, schnell und in deinem Browser.",
    content: blurDe,
  },
};
