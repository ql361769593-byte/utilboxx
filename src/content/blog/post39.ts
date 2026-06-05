// Blog post: How to Convert Image to Base64
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const imageToBase64En = `## What is Base64 and why convert images to it?

Base64 is a way to encode binary data (like images) into a plain-text string using only ASCII characters. The result is a long string of letters, numbers, and symbols that you can paste into HTML, CSS, JSON, or any text-based format. The browser decodes the string back into the image on the fly.

You typically need Base64 images when you are:

- **Embedding images in HTML/CSS**: Avoid extra HTTP requests by inlining small images
- **Sending images in JSON APIs**: Many APIs only accept text, not binary uploads
- **Storing images in databases**: Some setups store images as Base64 strings in text fields
- **Email templates**: Inline images render reliably across email clients
- **Sharing in code snippets**: Easy to copy/paste a single string into Stack Overflow or a GitHub README

Base64 increases the encoded size by about 33% compared to the binary, so it is best for small images like icons and logos, not full photos.

## Method 1: Use UtilBoxx's Free Image to Base64 Tool (Recommended)

Our [Image to Base64 tool](/en/tools/image/base64) generates a clean, ready-to-paste Base64 string from any image. Here's how:

1. Go to [utilboxx.com/en/tools/image/base64](/en/tools/image/base64)
2. Upload your image (JPG, PNG, GIF, SVG, WebP, BMP)
3. Choose the output format: raw Base64 string, data URI, CSS background, or HTML img tag
4. Copy the result with one click
5. Paste it directly into your code

**Why this method works**:
- Multiple output formats for different use cases
- One-click copy
- Works in the browser (no upload to a server)
- 100% free

## Method 2: Command Line (Base64)

On macOS/Linux you can run 'base64 image.png' in a terminal. On Windows, PowerShell's '[Convert]::ToBase64String([IO.File]::ReadAllBytes("image.png"))' works. Both are fast and scriptable but require technical comfort.

## Method 3: Online Generators (Various)

Many ad-laden websites offer the same conversion. UtilBoxx is the cleanest, fastest, and only runs in your browser, keeping your image private.

## Common questions

### Is Base64 smaller than the original image?
No. Base64 encoding adds about 33% overhead. The trade-off is that the encoded text can be embedded directly in source code, eliminating separate file requests.

### Can I use Base64 images in CSS?
Yes. Use the format 'background-image: url(data:image/png;base64,iVBORw0KG...)'. UtilBoxx can output the exact CSS snippet for you.

### Does Base64 work with all image formats?
Yes. JPG, PNG, GIF, SVG, WebP, BMP, and most other formats can all be Base64-encoded. The browser then decodes them transparently.

### Should I Base64-encode large photos?
For small images (logos, icons, UI elements) it is a great fit. For large photos, you are usually better off keeping them as separate files and serving them normally.

## Conclusion

For most developers and designers, [UtilBoxx's Image to Base64 tool](/en/tools/image/base64) is the fastest way to generate embeddable image strings. It is free, private, and outputs code-ready snippets in a single click.`;

const imageToBase64Zh = `## 什么是 Base64，为什么要转换图片到它？

Base64 是一种使用纯 ASCII 字符将二进制数据（如图片）编码为纯文本字符串的方法。结果是一长串字母、数字和符号，你可以将其粘贴到 HTML、CSS、JSON 或任何基于文本的格式中。浏览器即时将字符串解码回图片。

通常你会在以下情况需要 Base64 图片：

- **在 HTML/CSS 中嵌入图片**：通过内联小图片避免额外的 HTTP 请求
- **在 JSON API 中发送图片**：许多 API 只接受文本，不接受二进制上传
- **在数据库中存储图片**：某些设置将图片作为 Base64 字符串存储在文本字段中
- **电子邮件模板**：内联图片在各种电子邮件客户端中可靠渲染
- **在代码片段中共享**：可以轻松将单个字符串复制/粘贴到 Stack Overflow 或 GitHub README

Base64 使编码大小比二进制增加约 33%，因此最适合图标和 logo 等小图片，不适合完整照片。

## 方法 1：使用 UtilBoxx 免费图片转 Base64 工具（推荐）

我们的 [图片转 Base64 工具](/zh/tools/image/base64) 从任何图片生成干净、随时可粘贴的 Base64 字符串。步骤如下：

1. 访问 [utilboxx.com/zh/tools/image/base64](/zh/tools/image/base64)
2. 上传你的图片（JPG、PNG、GIF、SVG、WebP、BMP）
3. 选择输出格式：原始 Base64 字符串、数据 URI、CSS 背景或 HTML img 标签
4. 一键复制结果
5. 直接粘贴到你的代码中

**这个方法的优势**：
- 多种输出格式满足不同用例
- 一键复制
- 在浏览器中运行（不上传到服务器）
- 100% 免费

## 方法 2：命令行（Base64）

在 macOS/Linux 上，你可以在终端运行 'base64 image.png'。在 Windows 上，PowerShell 的 '[Convert]::ToBase64String([IO.File]::ReadAllBytes("image.png"))' 有效。两者都快速且可脚本化，但需要技术熟练度。

## 方法 3：在线生成器（各种）

许多充满广告的网站提供相同的转换。UtilBoxx 是最干净、最快的，并且仅在浏览器中运行，保护你的图片隐私。

## 常见问题

### Base64 比原始图片小吗？
不。Base64 编码增加约 33% 的开销。权衡是编码后的文本可以直接嵌入源代码，消除单独的文件请求。

### 我可以在 CSS 中使用 Base64 图片吗？
可以。使用格式 'background-image: url(data:image/png;base64,iVBORw0KG...)'。UtilBoxx 可以为你输出确切的 CSS 代码片段。

### Base64 适用于所有图片格式吗？
是的。JPG、PNG、GIF、SVG、WebP、BMP 和大多数其他格式都可以进行 Base64 编码。浏览器然后透明地解码它们。

### 我应该对大照片进行 Base64 编码吗？
对于小图片（logo、图标、UI 元素）非常适合。对于大照片，通常最好将它们保留为单独的文件并正常提供。

## 结论

对大多数开发者和设计师来说，[UtilBoxx 的图片转 Base64 工具](/zh/tools/image/base64) 是生成可嵌入图片字符串的最快方式。它免费、私密、单击即可输出代码就绪的片段。`;

const imageToBase64Ja = `## Base64 とは何か、なぜ画像を Base64 に変換するのか？

Base64 は、バイナリデータ（画像など）を ASCII 文字のみを使用したプレーンテキスト文字列にエンコードする方法です。結果として、文字、数字、記号の長い文字列が得られ、HTML、CSS、JSON、またはその他のテキストベースの形式に貼り付けることができます。ブラウザはオンデマンドで文字列を画像にデコードします。

次のような場合に Base64 画像が必要です：

- **HTML/CSS への画像の埋め込み**：小さな画像をインライン化することで追加の HTTP リクエストを回避
- **JSON API での画像送信**：多くの API はバイナリアップロードではなくテキストのみを受け入れる
- **データベースへの画像の保存**：一部の設定では、画像をテキストフィールドの Base64 文字列として保存
- **メールテンプレート**：インライン画像はメールクライアント間で確実にレンダリングされる
- **コードスニペットでの共有**：Stack Overflow や GitHub README に単一の文字列をコピー/ペーストしやすい

Base64 はバイナリと比較してエンコードサイズを約 33% 増加させるため、アイコンやロゴなどの小さな画像に最適で、完全に写真には向きません。

## 方法 1：UtilBoxx の無料画像 Base64 変換ツールを使用（推奨）

私たちの [画像 Base64 変換ツール](/ja/tools/image/base64) は、任意の画像からクリーンで貼り付け可能な Base64 文字列を生成します。手順は次のとおり：

1. [utilboxx.com/ja/tools/image/base64](/ja/tools/image/base64) にアクセス
2. 画像をアップロード（JPG、PNG、GIF、SVG、WebP、BMP）
3. 出力形式を選択：生の Base64 文字列、データ URI、CSS 背景、または HTML img タグ
4. ワンクリックで結果をコピー
5. コードに直接貼り付け

**この方法の長所**：
- さまざまなユースケースに対応する複数の出力形式
- ワンクリックコピー
- ブラウザで動作（サーバーへのアップロードなし）
- 100% 無料

## 方法 2：コマンドライン（Base64）

macOS/Linux では、ターミナルで 'base64 image.png' を実行できます。Windows では、PowerShell の '[Convert]::ToBase64String([IO.File]::ReadAllBytes("image.png"))' が機能します。どちらも高速でスクリプト可能ですが、技術的な習熟が必要です。

## 方法 3：オンラインジェネレーター（さまざま）

多くの広告だらけのウェブサイトが同じ変換を提供しています。UtilBoxx は最もクリーンで高速、ブラウザでのみ実行されるため、画像をプライベートに保ちます。

## よくある質問

### Base64 は元の画像より小さいですか？
いいえ。Base64 エンコードは約 33% のオーバーヘッドを追加します。トレードオフは、エンコードされたテキストをソースコードに直接埋め込むことで、別ファイルのリクエストを排除できることです。

### CSS で Base64 画像を使用できますか？
はい。形式 'background-image: url(data:image/png;base64,iVBORw0KG...)' を使用します。UtilBoxx は正確な CSS スニペットを出力できます。

### Base64 はすべての画像形式に対応していますか？
はい。JPG、PNG、GIF、SVG、WebP、BMP、およびほとんどの他の形式はすべて Base64 エンコードできます。ブラウザはそれらを透過的にデコードします。

### 大きな写真を Base64 エンコードすべきですか？
小さな画像（ロゴ、アイコン、UI 要素）には最適です。大きな写真の場合、通常は別ファイルとして保持し、通常通り提供することをお勧めします。

## 結論

ほとんどの開発者やデザイナーにとって、[UtilBoxx の画像 Base64 変換ツール](/ja/tools/image/base64) は埋め込み可能な画像文字列を生成する最速の方法です。無料でプライベート、ワンクリックでコード対応スニペットを出力します。`;

const imageToBase64Es = `## ¿Qué es Base64 y por qué convertir imágenes a él?

Base64 es una forma de codificar datos binarios (como imágenes) en una cadena de texto plano usando solo caracteres ASCII. El resultado es una cadena larga de letras, números y símbolos que puedes pegar en HTML, CSS, JSON o cualquier formato basado en texto. El navegador decodifica la cadena de vuelta a la imagen sobre la marcha.

Normalmente necesitas imágenes Base64 cuando:

- **Incrustas imágenes en HTML/CSS**: Evita peticiones HTTP extra inlineando imágenes pequeñas
- **Envías imágenes en APIs JSON**: Muchas APIs solo aceptan texto, no cargas binarias
- **Almacenas imágenes en bases de datos**: Algunas configuraciones almacenan imágenes como cadenas Base64 en campos de texto
- **Plantillas de correo electrónico**: Las imágenes inline se renderizan de forma fiable en todos los clientes de correo
- **Compartes en fragmentos de código**: Fácil de copiar/pegar una sola cadena en Stack Overflow o un README de GitHub

Base64 aumenta el tamaño codificado en aproximadamente un 33% en comparación con el binario, por lo que es mejor para imágenes pequeñas como iconos y logos, no para fotos completas.

## Método 1: Usa la Herramienta Gratuita de Imagen a Base64 de UtilBoxx (Recomendado)

Nuestra [herramienta de Imagen a Base64](/es/tools/image/base64) genera una cadena Base64 limpia y lista para pegar desde cualquier imagen. Así se hace:

1. Ve a [utilboxx.com/es/tools/image/base64](/es/tools/image/base64)
2. Sube tu imagen (JPG, PNG, GIF, SVG, WebP, BMP)
3. Elige el formato de salida: cadena Base64 sin procesar, URI de datos, fondo CSS o etiqueta img HTML
4. Copia el resultado con un clic
5. Pégalo directamente en tu código

**Por qué funciona este método**:
- Múltiples formatos de salida para diferentes casos de uso
- Copia con un clic
- Funciona en el navegador (sin subida al servidor)
- 100% gratis

## Método 2: Línea de Comandos (Base64)

En macOS/Linux puedes ejecutar 'base64 image.png' en una terminal. En Windows, el '[Convert]::ToBase64String([IO.File]::ReadAllBytes("image.png"))' de PowerShell funciona. Ambos son rápidos y programables, pero requieren comodidad técnica.

## Método 3: Generadores Online (Varios)

Muchos sitios web llenos de publicidad ofrecen la misma conversión. UtilBoxx es el más limpio, rápido, y solo se ejecuta en tu navegador, manteniendo tu imagen privada.

## Preguntas frecuentes

### ¿Base64 es más pequeño que la imagen original?
No. La codificación Base64 agrega aproximadamente un 33% de sobrecarga. La compensación es que el texto codificado se puede incrustar directamente en el código fuente, eliminando peticiones de archivos separados.

### ¿Puedo usar imágenes Base64 en CSS?
Sí. Usa el formato 'background-image: url(data:image/png;base64,iVBORw0KG...)'. UtilBoxx puede generar el fragmento CSS exacto para ti.

### ¿Base64 funciona con todos los formatos de imagen?
Sí. JPG, PNG, GIF, SVG, WebP, BMP y la mayoría de los otros formatos se pueden codificar en Base64. El navegador los decodifica transparentemente.

### ¿Debería codificar fotos grandes en Base64?
Para imágenes pequeñas (logos, iconos, elementos UI) es perfecto. Para fotos grandes, suele ser mejor mantenerlas como archivos separados y servirlas normalmente.

## Conclusión

Para la mayoría de desarrolladores y diseñadores, la [herramienta de Imagen a Base64 de UtilBoxx](/es/tools/image/base64) es la forma más rápida de generar cadenas de imágenes embebibles. Es gratuita, privada y genera fragmentos listos para código con un solo clic.`;

const imageToBase64Pt = `## O que é Base64 e por que converter imagens para ele?

Base64 é uma forma de codificar dados binários (como imagens) em uma string de texto simples usando apenas caracteres ASCII. O resultado é uma longa string de letras, números e símbolos que você pode colar em HTML, CSS, JSON ou qualquer formato baseado em texto. O navegador decodifica a string de volta para a imagem dinamicamente.

Normalmente você precisa de imagens Base64 quando:

- **Incorpora imagens em HTML/CSS**: Evite requisições HTTP extras inlineando imagens pequenas
- **Envia imagens em APIs JSON**: Muitas APIs só aceitam texto, não uploads binários
- **Armazena imagens em bancos de dados**: Algumas configurações armazenam imagens como strings Base64 em campos de texto
- **Modelos de e-mail**: Imagens inline renderizam de forma confiável entre clientes de e-mail
- **Compartilha em trechos de código**: Fácil de copiar/colar uma única string no Stack Overflow ou README do GitHub

Base64 aumenta o tamanho codificado em cerca de 33% em comparação com o binário, então é melhor para imagens pequenas como ícones e logos, não para fotos completas.

## Método 1: Use a Ferramenta Gratuita de Imagem para Base64 do UtilBoxx (Recomendado)

Nossa [ferramenta de Imagem para Base64](/pt/tools/image/base64) gera uma string Base64 limpa e pronta para colar de qualquer imagem. Veja como:

1. Vá para [utilboxx.com/pt/tools/image/base64](/pt/tools/image/base64)
2. Envie sua imagem (JPG, PNG, GIF, SVG, WebP, BMP)
3. Escolha o formato de saída: string Base64 bruta, URI de dados, fundo CSS ou tag img HTML
4. Copie o resultado com um clique
5. Cole diretamente no seu código

**Por que este método funciona**:
- Múltiplos formatos de saída para diferentes casos de uso
- Cópia com um clique
- Funciona no navegador (sem envio para servidor)
- 100% grátis

## Método 2: Linha de Comando (Base64)

No macOS/Linux você pode executar 'base64 image.png' em um terminal. No Windows, o '[Convert]::ToBase64String([IO.File]::ReadAllBytes("image.png"))' do PowerShell funciona. Ambos são rápidos e programáveis, mas requerem familiaridade técnica.

## Método 3: Geradores Online (Vários)

Muitos sites cheios de anúncios oferecem a mesma conversão. O UtilBoxx é o mais limpo, rápido, e só roda no seu navegador, mantendo sua imagem privada.

## Perguntas frequentes

### Base64 é menor que a imagem original?
Não. A codificação Base64 adiciona cerca de 33% de sobrecarga. A compensação é que o texto codificado pode ser incorporado diretamente no código-fonte, eliminando requisições de arquivos separados.

### Posso usar imagens Base64 em CSS?
Sim. Use o formato 'background-image: url(data:image/png;base64,iVBORw0KG...)'. O UtilBoxx pode gerar o trecho CSS exato para você.

### Base64 funciona com todos os formatos de imagem?
Sim. JPG, PNG, GIF, SVG, WebP, BMP e a maioria dos outros formatos podem ser codificados em Base64. O navegador os decodifica transparentemente.

### Devo codificar fotos grandes em Base64?
Para imagens pequenas (logos, ícones, elementos UI) é uma ótima opção. Para fotos grandes, geralmente é melhor mantê-las como arquivos separados e servi-las normalmente.

## Conclusão

Para a maioria dos desenvolvedores e designers, a [ferramenta de Imagem para Base64 do UtilBoxx](/pt/tools/image/base64) é a maneira mais rápida de gerar strings de imagens incorporáveis. É gratuita, privada e gera trechos prontos para código com um único clique.`;

const imageToBase64Fr = `## Qu'est-ce que Base64 et pourquoi convertir des images en Base64 ?

Base64 est un moyen d'encoder des données binaires (comme des images) en une chaîne de texte brut en utilisant uniquement des caractères ASCII. Le résultat est une longue chaîne de lettres, chiffres et symboles que vous pouvez coller dans HTML, CSS, JSON ou tout format textuel. Le navigateur décode la chaîne en image à la volée.

Vous avez généralement besoin d'images Base64 quand :

- **Vous intégrez des images en HTML/CSS** : Évitez des requêtes HTTP supplémentaires en inlineant de petites images
- **Vous envoyez des images dans des API JSON** : Beaucoup d'API n'acceptent que du texte, pas des uploads binaires
- **Vous stockez des images dans des bases de données** : Certaines configurations stockent les images comme chaînes Base64 dans des champs texte
- **Modèles d'e-mail** : Les images inline s'affichent de manière fiable dans les clients e-mail
- **Partage dans des extraits de code** : Facile à copier/coller une seule chaîne dans Stack Overflow ou un README GitHub

Base64 augmente la taille encodée d'environ 33% par rapport au binaire, donc il convient mieux aux petites images comme les icônes et logos, pas aux photos complètes.

## Méthode 1 : Utilisez l'outil gratuit d'image vers Base64 d'UtilBoxx (Recommandé)

Notre [outil d'image vers Base64](/fr/tools/image/base64) génère une chaîne Base64 propre et prête à coller à partir de n'importe quelle image. Voici comment :

1. Allez sur [utilboxx.com/fr/tools/image/base64](/fr/tools/image/base64)
2. Téléchargez votre image (JPG, PNG, GIF, SVG, WebP, BMP)
3. Choisissez le format de sortie : chaîne Base64 brute, URI de données, fond CSS ou balise img HTML
4. Copiez le résultat en un clic
5. Collez-le directement dans votre code

**Pourquoi cette méthode fonctionne** :
- Plusieurs formats de sortie pour différents cas d'usage
- Copie en un clic
- Fonctionne dans le navigateur (pas d'upload sur un serveur)
- 100% gratuit

## Méthode 2 : Ligne de commande (Base64)

Sur macOS/Linux, vous pouvez exécuter 'base64 image.png' dans un terminal. Sur Windows, le '[Convert]::ToBase64String([IO.File]::ReadAllBytes("image.png"))' de PowerShell fonctionne. Les deux sont rapides et scriptables mais nécessitent une aisance technique.

## Méthode 3 : Générateurs en ligne (divers)

De nombreux sites web remplis de publicités offrent la même conversion. UtilBoxx est le plus propre, rapide, et ne fonctionne que dans votre navigateur, gardant votre image privée.

## Questions fréquentes

### Base64 est-il plus petit que l'image originale ?
Non. L'encodage Base64 ajoute environ 33% de surcharge. La compensation est que le texte encodé peut être intégré directement dans le code source, éliminant les requêtes de fichiers séparés.

### Puis-je utiliser des images Base64 en CSS ?
Oui. Utilisez le format 'background-image: url(data:image/png;base64,iVBORw0KG...)'. UtilBoxx peut générer l'extrait CSS exact pour vous.

### Base64 fonctionne-t-il avec tous les formats d'image ?
Oui. JPG, PNG, GIF, SVG, WebP, BMP et la plupart des autres formats peuvent être encodés en Base64. Le navigateur les décode ensuite de manière transparente.

### Dois-je encoder de grandes photos en Base64 ?
Pour les petites images (logos, icônes, éléments UI), c'est parfait. Pour les grandes photos, il est généralement préférable de les garder comme fichiers séparés et de les servir normalement.

## Conclusion

Pour la plupart des développeurs et designers, [l'outil d'image vers Base64 d'UtilBoxx](/fr/tools/image/base64) est le moyen le plus rapide de générer des chaînes d'images intégrables. Il est gratuit, privé, et produit des extraits prêts pour le code en un seul clic.`;

const imageToBase64De = `## Was ist Base64 und warum Bilder in Base64 konvertieren?

Base64 ist eine Möglichkeit, Binärdaten (wie Bilder) in eine reine Textzeichenfolge zu kodieren, die nur ASCII-Zeichen verwendet. Das Ergebnis ist eine lange Zeichenfolge aus Buchstaben, Zahlen und Symbolen, die Sie in HTML, CSS, JSON oder jedes textbasierte Format einfügen können. Der Browser dekodiert die Zeichenfolge spontan wieder zum Bild.

Sie benötigen normalerweise Base64-Bilder, wenn Sie:

- **Bilder in HTML/CSS einbetten**: Vermeiden Sie zusätzliche HTTP-Anfragen, indem Sie kleine Bilder inlinen
- **Bilder in JSON-APIs senden**: Viele APIs akzeptieren nur Text, keine binären Uploads
- **Bilder in Datenbanken speichern**: Einige Setups speichern Bilder als Base64-Strings in Textfeldern
- **E-Mail-Vorlagen**: Inline-Bilder werden zuverlässig in E-Mail-Clients gerendert
- **In Code-Snippets teilen**: Einfaches Kopieren/Einfügen einer einzelnen Zeichenkette in Stack Overflow oder eine GitHub-README

Base64 erhöht die kodierte Größe im Vergleich zur Binärversion um etwa 33%, daher ist es am besten für kleine Bilder wie Icons und Logos, nicht für vollständige Fotos.

## Methode 1: Verwenden Sie das kostenlose Bild-zu-Base64-Tool von UtilBoxx (Empfohlen)

Unser [Bild-zu-Base64-Tool](/de/tools/image/base64) erzeugt eine saubere, einfügefertige Base64-Zeichenfolge aus jedem Bild. So geht's:

1. Gehen Sie zu [utilboxx.com/de/tools/image/base64](/de/tools/image/base64)
2. Laden Sie Ihr Bild hoch (JPG, PNG, GIF, SVG, WebP, BMP)
3. Wählen Sie das Ausgabeformat: Rohe Base64-Zeichenfolge, Daten-URI, CSS-Hintergrund oder HTML-img-Tag
4. Kopieren Sie das Ergebnis mit einem Klick
5. Fügen Sie es direkt in Ihren Code ein

**Warum diese Methode funktioniert**:
- Mehrere Ausgabeformate für verschiedene Anwendungsfälle
- Ein-Klick-Kopieren
- Funktioniert im Browser (kein Upload auf einen Server)
- 100% kostenlos

## Methode 2: Kommandozeile (Base64)

Auf macOS/Linux können Sie 'base64 image.png' in einem Terminal ausführen. Auf Windows funktioniert PowerShells '[Convert]::ToBase64String([IO.File]::ReadAllBytes("image.png"))'. Beide sind schnell und skriptfähig, erfordern aber technische Vertrautheit.

## Methode 3: Online-Generatoren (verschiedene)

Viele werbelastige Websites bieten die gleiche Konvertierung an. UtilBoxx ist am saubersten, schnellsten und läuft nur in Ihrem Browser, sodass Ihr Bild privat bleibt.

## Häufig gestellte Fragen

### Ist Base64 kleiner als das Originalbild?
Nein. Die Base64-Kodierung fügt etwa 33% Overhead hinzu. Der Kompromiss ist, dass der kodierte Text direkt in Quellcode eingebettet werden kann, wodurch separate Dateianfragen entfallen.

### Kann ich Base64-Bilder in CSS verwenden?
Ja. Verwenden Sie das Format 'background-image: url(data:image/png;base64,iVBORw0KG...)'. UtilBoxx kann das genaue CSS-Snippet für Sie generieren.

### Funktioniert Base64 mit allen Bildformaten?
Ja. JPG, PNG, GIF, SVG, WebP, BMP und die meisten anderen Formate können Base64-kodiert werden. Der Browser dekodiert sie dann transparent.

### Sollte ich große Fotos in Base64 kodieren?
Für kleine Bilder (Logos, Icons, UI-Elemente) ist es ideal. Für große Fotos ist es normalerweise besser, sie als separate Dateien zu behalten und normal bereitzustellen.

## Fazit

Für die meisten Entwickler und Designer ist das [Bild-zu-Base64-Tool von UtilBoxx](/de/tools/image/base64) der schnellste Weg, einbettbare Bildzeichenfolgen zu erzeugen. Es ist kostenlos, privat und liefert codefertige Snippets mit einem einzigen Klick.`;

export const imageToBase64Post: Record<string, BlogPost> = {
  en: {
    slug: "how-to-convert-image-to-base64",
    category: "Image Tools",
    date: "2026-05-20",
    readTime: "4 min",
    title: "How to Convert Image to Base64: Free Encoder (2026)",
    description: "Learn how to convert any image to a Base64 string for HTML, CSS, or JSON. Free browser tool, multiple output formats.",
    content: imageToBase64En,
  },
  zh: {
    slug: "how-to-convert-image-to-base64",
    category: "图片工具",
    date: "2026-05-20",
    readTime: "4 分钟",
    title: "如何将图片转换为 Base64：免费编码器 (2026)",
    description: "学习如何将任何图片转换为 Base64 字符串，用于 HTML、CSS 或 JSON。免费浏览器工具，多种输出格式。",
    content: imageToBase64Zh,
  },
  ja: {
    slug: "how-to-convert-image-to-base64",
    category: "画像ツール",
    date: "2026-05-20",
    readTime: "4 分",
    title: "画像を Base64 に変換する方法：無料エンコーダー (2026)",
    description: "HTML、CSS、または JSON 用の任意の画像を Base64 文字列に変換する方法を学びましょう。無料ブラウザツール、複数の出力形式。",
    content: imageToBase64Ja,
  },
  es: {
    slug: "how-to-convert-image-to-base64",
    category: "Herramientas de Imagen",
    date: "2026-05-20",
    readTime: "4 min",
    title: "Cómo Convertir Imagen a Base64: Codificador Gratuito (2026)",
    description: "Aprende cómo convertir cualquier imagen a una cadena Base64 para HTML, CSS o JSON. Herramienta gratuita en el navegador, múltiples formatos de salida.",
    content: imageToBase64Es,
  },
  pt: {
    slug: "how-to-convert-image-to-base64",
    category: "Ferramentas de Imagem",
    date: "2026-05-20",
    readTime: "4 min",
    title: "Como Converter Imagem para Base64: Codificador Grátis (2026)",
    description: "Aprenda como converter qualquer imagem para uma string Base64 para HTML, CSS ou JSON. Ferramenta gratuita no navegador, múltiplos formatos de saída.",
    content: imageToBase64Pt,
  },
  fr: {
    slug: "how-to-convert-image-to-base64",
    category: "Outils d'Image",
    date: "2026-05-20",
    readTime: "4 min",
    title: "Comment Convertir une Image en Base64 : Encodeur Gratuit (2026)",
    description: "Apprenez à convertir n'importe quelle image en chaîne Base64 pour HTML, CSS ou JSON. Outil gratuit dans le navigateur, plusieurs formats de sortie.",
    content: imageToBase64Fr,
  },
  de: {
    slug: "how-to-convert-image-to-base64",
    category: "Bild-Tools",
    date: "2026-05-20",
    readTime: "4 Min",
    title: "Bild in Base64 konvertieren: Kostenloser Encoder (2026)",
    description: "Erfahren Sie, wie Sie jedes Bild in eine Base64-Zeichenfolge für HTML, CSS oder JSON konvertieren. Kostenloses Browser-Tool, mehrere Ausgabeformate.",
    content: imageToBase64De,
  },
};
