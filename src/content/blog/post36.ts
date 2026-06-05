// Blog post: How to Crop PDF Pages
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const cropPdfEn = `## Why crop PDF pages?

PDF cropping removes unwanted white space, margins, or extraneous content from a page. It is a small edit that makes a big difference — your documents become tighter, easier to read, and better suited to specific layouts like ebooks, slide decks, or print formats.

You typically crop PDFs when you are:

- **Cleaning up scanned documents**: Remove scanner edges and shadows
- **Preparing ebooks**: Crop margins to fit smaller e-reader screens
- **Creating slide images**: Crop landscape pages to 16:9
- **Extracting specific regions**: Take a screenshot-like crop of a chart or diagram
- **Removing watermarks or borders**: When the original has unnecessary decorations

Cropping is non-destructive when done right — the original PDF stays intact in the file's data, but the visible area is reduced.

## Method 1: Use UtilBoxx's Free PDF Crop Tool (Recommended)

Our [Crop PDF tool](/en/tools/pdf/cropPdf) lets you define crop areas visually. Here's how:

1. Go to [utilboxx.com/en/tools/pdf/cropPdf](/en/tools/pdf/cropPdf)
2. Upload your PDF
3. Drag the crop handles on the page preview to select the area you want to keep
4. Choose whether to apply the crop to all pages or a specific range
5. Click "Process" and download the cropped PDF

**Why this method works**:
- Visual drag-and-drop cropping
- Apply to all pages or a custom range
- No installation, no signup
- 100% free

## Method 2: Adobe Acrobat (Paid)

Adobe Acrobat's Edit PDF > Crop tool offers precise numeric inputs and the ability to save crop presets. It is the most accurate but costs $19.99/month — way more than most users need.

## Method 3: macOS Preview

On a Mac, Preview lets you crop a PDF using the Rectangular Selection tool, then save. It works for simple crops but lacks batch processing and precise control.

## Common questions

### Will cropping reduce the quality of the PDF?
No. Cropping only changes the visible area. The underlying page content is preserved at its original resolution.

### Can I crop each page differently?
Yes. UtilBoxx lets you define different crop boxes for individual pages, page ranges, or all pages at once.

### Can I undo a crop?
With UtilBoxx, the original is never modified — the cropped version is a new file, so your original stays safe. To "undo," just re-upload the original.

### Does cropping work on scanned PDFs?
Yes. Cropping works on any PDF, including scanned ones, because it operates on the page boundaries, not the content itself.

## Conclusion

For most users, [UtilBoxx's Crop PDF tool](/en/tools/pdf/cropPdf) is the fastest way to trim margins and clean up page layouts. It is free, browser-based, and gives you visual control over the crop area.`;

const cropPdfZh = `## 为什么要裁剪 PDF 页面？

PDF 裁剪可以删除页面中不需要的空白、边距或多余内容。这是一个小修改，却能带来大不同——你的文档变得更紧凑、更易读，并且更适合电子书的布局、幻灯片或印刷格式等。

通常你会在以下情况裁剪 PDF：

- **清理扫描的文档**：去除扫描仪边缘和阴影
- **准备电子书**：裁剪边距以适应较小的电子阅读器屏幕
- **创建幻灯片图像**：将横向页面裁剪为 16:9
- **提取特定区域**：对图表或图示进行类似截图的裁剪
- **删除水印或边框**：当原件有不必要的装饰时

正确完成时，裁剪是无损的——原始 PDF 在文件数据中保持完整，但可见区域减少。

## 方法 1：使用 UtilBoxx 免费 PDF 裁剪工具（推荐）

我们的 [裁剪 PDF 工具](/zh/tools/pdf/cropPdf) 让你以可视化方式定义裁剪区域。步骤如下：

1. 访问 [utilboxx.com/zh/tools/pdf/cropPdf](/zh/tools/pdf/cropPdf)
2. 上传你的 PDF
3. 在页面预览上拖动裁剪手柄以选择要保留的区域
4. 选择将裁剪应用于所有页面或特定范围
5. 点击"处理"并下载裁剪后的 PDF

**这个方法的优势**：
- 可视化拖放裁剪
- 应用于所有页面或自定义范围
- 无需安装、无需注册
- 100% 免费

## 方法 2：Adobe Acrobat（付费）

Adobe Acrobat 的"编辑 PDF">"裁剪"工具提供精确的数字输入和保存裁剪预设的能力。它是最准确的，但每月 $19.99——比大多数用户需要的多得多。

## 方法 3：macOS 预览

在 Mac 上，预览允许你使用矩形选择工具裁剪 PDF，然后保存。它适用于简单裁剪，但缺少批处理和精确控制。

## 常见问题

### 裁剪会降低 PDF 的质量吗？
不会。裁剪只改变可见区域。底层页面内容以原始分辨率保留。

### 我可以为每页进行不同的裁剪吗？
可以。UtilBoxx 允许你为单个页面、页面范围或所有页面定义不同的裁剪框。

### 我可以撤销裁剪吗？
使用 UtilBoxx，原始文件永远不会被修改——裁剪版本是一个新文件，所以你的原始文件保持安全。要"撤销"，只需重新上传原始文件。

### 裁剪对扫描的 PDF 有效吗？
是的。裁剪对任何 PDF 都有效，包括扫描的 PDF，因为它对页面边界操作，而不是内容本身。

## 结论

对大多数用户来说，[UtilBoxx 的裁剪 PDF 工具](/zh/tools/pdf/cropPdf) 是修剪边距和清理页面布局的最快方法。它免费、基于浏览器，并为你提供对裁剪区域的可视化控制。`;

const cropPdfJa = `## なぜ PDF ページをトリミングするのか？

PDF のトリミングは、ページから不要な余白、余白、または余分なコンテンツを削除します。これは小さな編集ですが大きな違いを生みます — ドキュメントはよりコンパクトになり、読みやすくなり、電子書籍、スライド、印刷形式などの特定のレイアウトに適しています。

次のような場合に PDF をトリミングします：

- **スキャンしたドキュメントのクリーンアップ**：スキャナーの端と影を削除
- **電子書籍の準備**：小さな電子書籍リーダー画面に合わせるために余白をトリミング
- **スライド画像の作成**：横向きページを 16:9 にトリミング
- **特定の領域の抽出**：チャートや図のスクリーンショットのようなトリミング
- **透かしや境界線の削除**：原本に不要な装飾がある場合

正しく行えばトリミングは非破壊的です — オリジナル PDF はファイルデータ内で完全なままですが、可視領域が減少します。

## 方法 1：UtilBoxx の無料 PDF トリミングツールを使用（推奨）

私たちの [PDF トリミングツール](/ja/tools/pdf/cropPdf) を使えば、トリミング領域を視覚的に定義できます。手順は次のとおり：

1. [utilboxx.com/ja/tools/pdf/cropPdf](/ja/tools/pdf/cropPdf) にアクセス
2. PDF をアップロード
3. ページプレビューでトリミングハンドルをドラッグして保持したい領域を選択
4. トリミングをすべてのページに適用するか、特定の範囲に適用するかを選択
5. 「処理」をクリックしてトリミングされた PDF をダウンロード

**この方法の長所**：
- ビジュアルドラッグ＆ドロップトリミング
- すべてのページまたはカスタム範囲に適用
- インストール不要、登録不要
- 100% 無料

## 方法 2：Adobe Acrobat（有料）

Adobe Acrobat の PDF 編集 > トリミングツールは、正確な数値入力とトリミングプリセットの保存機能を提供します。最も正確ですが、月額 $19.99 で — ほとんどのユーザーが必要とする以上のものです。

## 方法 3：macOS プレビュー

Mac では、プレビューで長方形選択ツールを使って PDF をトリミングし、保存できます。シンプルなトリミングには機能しますが、バッチ処理や精密制御が欠けています。

## よくある質問

### トリミングで PDF の品質は低下しますか？
いいえ。トリミングは可視領域のみを変更します。基になるページコンテンツは元の解像度で保持されます。

### ページごとに異なるトリミングができますか？
はい。UtilBoxx では、個々のページ、ページ範囲、またはすべてのページに対して異なるトリミングボックスを定義できます。

### トリミングを元に戻せますか？
UtilBoxx では、オリジナルは変更されません — トリミングバージョンは新しいファイルなので、オリジナルは安全なままです。「元に戻す」には、オリジナルを再アップロードするだけです。

### スキャンした PDF でもトリミングできますか？
はい。トリミングはコンテンツ自体ではなく、ページ境界で動作するため、スキャンを含む任意の PDF で機能します。

## 結論

ほとんどのユーザーにとって、[UtilBoxx の PDF トリミングツール](/ja/tools/pdf/cropPdf) は余白をトリミングしてページレイアウトをクリーンアップする最速の方法です。無料でブラウザベース、トリミング領域の視覚的制御を提供します。`;

const cropPdfEs = `## ¿Por qué recortar páginas PDF?

El recorte de PDF elimina el espacio en blanco no deseado, los márgenes o el contenido extraño de una página. Es una pequeña edición que marca una gran diferencia: tus documentos se vuelven más compactos, fáciles de leer y mejor adaptados a diseños específicos como ebooks, presentaciones o formatos de impresión.

Normalmente recortas PDFs cuando:

- **Limpias documentos escaneados**: Elimina bordes y sombras del escáner
- **Preparas ebooks**: Recorta márgenes para que se ajusten a pantallas de lectores electrónicos más pequeñas
- **Creas imágenes de diapositivas**: Recorta páginas horizontales a 16:9
- **Extraes regiones específicas**: Haz un recorte tipo captura de un gráfico o diagrama
- **Eliminas marcas de agua o bordes**: Cuando el original tiene decoraciones innecesarias

El recorte no es destructivo cuando se hace correctamente: el PDF original permanece intacto en los datos del archivo, pero el área visible se reduce.

## Método 1: Usa la Herramienta Gratuita de Recortar PDF de UtilBoxx (Recomendado)

Nuestra [herramienta de Recortar PDF](/es/tools/pdf/cropPdf) te permite definir áreas de recorte visualmente. Así se hace:

1. Ve a [utilboxx.com/es/tools/pdf/cropPdf](/es/tools/pdf/cropPdf)
2. Sube tu PDF
3. Arrastra los controladores de recorte en la vista previa de la página para seleccionar el área que quieres conservar
4. Elige si aplicar el recorte a todas las páginas o a un rango específico
5. Haz clic en "Procesar" y descarga el PDF recortado

**Por qué funciona este método**:
- Recorte visual de arrastrar y soltar
- Aplica a todas las páginas o a un rango personalizado
- Sin instalación, sin registro
- 100% gratis

## Método 2: Adobe Acrobat (De pago)

La herramienta Editar PDF > Recortar de Adobe Acrobat ofrece entradas numéricas precisas y la capacidad de guardar preajustes de recorte. Es la más precisa pero cuesta $19.99/mes, mucho más de lo que la mayoría de los usuarios necesita.

## Método 3: Vista Previa de macOS

En Mac, Vista Previa te permite recortar un PDF usando la herramienta de selección rectangular, y luego guardar. Funciona para recortes simples pero carece de procesamiento por lotes y control preciso.

## Preguntas frecuentes

### ¿El recorte reducirá la calidad del PDF?
No. El recorte solo cambia el área visible. El contenido subyacente de la página se conserva a su resolución original.

### ¿Puedo recortar cada página de manera diferente?
Sí. UtilBoxx te permite definir diferentes cajas de recorte para páginas individuales, rangos de páginas o todas las páginas a la vez.

### ¿Puedo deshacer un recorte?
Con UtilBoxx, el original nunca se modifica: la versión recortada es un archivo nuevo, por lo que tu original permanece seguro. Para "deshacer", solo vuelve a subir el original.

### ¿El recorte funciona con PDFs escaneados?
Sí. El recorte funciona con cualquier PDF, incluidos los escaneados, porque opera en los límites de la página, no en el contenido en sí.

## Conclusión

Para la mayoría de los usuarios, la [herramienta de Recortar PDF de UtilBoxx](/es/tools/pdf/cropPdf) es la forma más rápida de recortar márgenes y limpiar el diseño de las páginas. Es gratuita, basada en navegador y te da control visual sobre el área de recorte.`;

const cropPdfPt = `## Por que recortar páginas de PDF?

O recorte de PDF remove espaço em branco indesejado, margens ou conteúdo extra de uma página. É uma pequena edição que faz uma grande diferença — seus documentos ficam mais compactos, mais fáceis de ler e mais adequados a layouts específicos como ebooks, slides ou formatos de impressão.

Normalmente você recorta PDFs quando:

- **Limpa documentos escaneados**: Remove bordas e sombras do scanner
- **Prepara ebooks**: Recorta margens para caber em telas menores de e-readers
- **Cria imagens de slides**: Recorta páginas horizontais para 16:9
- **Extrai regiões específicas**: Faz um recorte tipo captura de tela de um gráfico ou diagrama
- **Remove marcas d'água ou bordas**: Quando o original tem decorações desnecessárias

O recorte não é destrutivo quando feito corretamente — o PDF original permanece intacto nos dados do arquivo, mas a área visível é reduzida.

## Método 1: Use a Ferramenta Gratuita de Recortar PDF do UtilBoxx (Recomendado)

Nossa [ferramenta de Recortar PDF](/pt/tools/pdf/cropPdf) permite definir áreas de recorte visualmente. Veja como:

1. Vá para [utilboxx.com/pt/tools/pdf/cropPdf](/pt/tools/pdf/cropPdf)
2. Envie seu PDF
3. Arraste as alças de recorte na visualização da página para selecionar a área que deseja manter
4. Escolha se aplica o recorte a todas as páginas ou a um intervalo específico
5. Clique em "Processar" e baixe o PDF recortado

**Por que este método funciona**:
- Recorte visual de arrastar e soltar
- Aplique a todas as páginas ou a um intervalo personalizado
- Sem instalação, sem cadastro
- 100% grátis

## Método 2: Adobe Acrobat (Pago)

A ferramenta Editar PDF > Recortar do Adobe Acrobat oferece entradas numéricas precisas e a capacidade de salvar predefinições de recorte. É a mais precisa, mas custa $19.99/mês — muito mais do que a maioria dos usuários precisa.

## Método 3: Visualização do macOS

No Mac, o Visualização permite que você recorte um PDF usando a ferramenta de seleção retangular e salve em seguida. Funciona para recortes simples, mas carece de processamento em lote e controle preciso.

## Perguntas frequentes

### O recorte reduz a qualidade do PDF?
Não. O recorte altera apenas a área visível. O conteúdo subjacente da página é preservado em sua resolução original.

### Posso recortar cada página de forma diferente?
Sim. O UtilBoxx permite definir diferentes caixas de recorte para páginas individuais, intervalos de páginas ou todas as páginas de uma vez.

### Posso desfazer um recorte?
Com o UtilBoxx, o original nunca é modificado — a versão recortada é um novo arquivo, então seu original permanece seguro. Para "desfazer", basta reenviar o original.

### O recorte funciona em PDFs escaneados?
Sim. O recorte funciona em qualquer PDF, incluindo escaneados, porque opera nos limites da página, não no conteúdo em si.

## Conclusão

Para a maioria dos usuários, a [ferramenta de Recortar PDF do UtilBoxx](/pt/tools/pdf/cropPdf) é a maneira mais rápida de aparar margens e limpar layouts de página. É gratuita, baseada em navegador e oferece controle visual sobre a área de recorte.`;

const cropPdfFr = `## Pourquoi recadrer des pages PDF ?

Le recadrage de PDF supprime les espaces blancs, les marges ou le contenu superflu d'une page. C'est une petite modification qui fait une grande différence — vos documents deviennent plus compacts, plus faciles à lire et mieux adaptés à des mises en page spécifiques comme les ebooks, les présentations ou les formats d'impression.

Vous recadrez généralement des PDF quand :

- **Vous nettoyez des documents scannés** : Supprimez les bords et ombres du scanner
- **Vous préparez des ebooks** : Recadrez les marges pour s'adapter aux petits écrans de liseuses
- **Vous créez des images de diapositives** : Recadrez les pages paysage en 16:9
- **Vous extrayez des régions spécifiques** : Faites un recadrage de type capture d'écran d'un graphique ou schéma
- **Vous supprimez des filigranes ou bordures** : Quand l'original a des décorations inutiles

Le recadrage est non destructif lorsqu'il est bien fait — le PDF original reste intact dans les données du fichier, mais la zone visible est réduite.

## Méthode 1 : Utilisez l'outil gratuit de recadrage PDF d'UtilBoxx (Recommandé)

Notre [outil de recadrage PDF](/fr/tools/pdf/cropPdf) vous permet de définir visuellement les zones de recadrage. Voici comment :

1. Allez sur [utilboxx.com/fr/tools/pdf/cropPdf](/fr/tools/pdf/cropPdf)
2. Téléchargez votre PDF
3. Faites glisser les poignées de recadrage sur l'aperçu de la page pour sélectionner la zone que vous voulez conserver
4. Choisissez d'appliquer le recadrage à toutes les pages ou à une plage spécifique
5. Cliquez sur « Traiter » et téléchargez le PDF recadré

**Pourquoi cette méthode fonctionne** :
- Recadrage visuel par glisser-déposer
- Appliquez à toutes les pages ou à une plage personnalisée
- Pas d'installation, pas d'inscription
- 100% gratuit

## Méthode 2 : Adobe Acrobat (Payant)

L'outil Modifier PDF > Recadrer d'Adobe Acrobat offre des saisies numériques précises et la possibilité d'enregistrer des préréglages de recadrage. C'est le plus précis mais coûte 19,99 $/mois — bien plus que ce dont la plupart des utilisateurs ont besoin.

## Méthode 3 : Aperçu de macOS

Sur Mac, Aperçu vous permet de recadrer un PDF à l'aide de l'outil de sélection rectangulaire, puis d'enregistrer. Cela fonctionne pour les recadrages simples mais manque de traitement par lots et de contrôle précis.

## Questions fréquentes

### Le recadrage réduit-il la qualité du PDF ?
Non. Le recadrage modifie uniquement la zone visible. Le contenu sous-jacent de la page est préservé à sa résolution d'origine.

### Puis-je recadrer chaque page différemment ?
Oui. UtilBoxx vous permet de définir différentes boîtes de recadrage pour des pages individuelles, des plages de pages ou toutes les pages à la fois.

### Puis-je annuler un recadrage ?
Avec UtilBoxx, l'original n'est jamais modifié — la version recadrée est un nouveau fichier, donc votre original reste sûr. Pour « annuler », il suffit de re-télécharger l'original.

### Le recadrage fonctionne-t-il sur des PDF scannés ?
Oui. Le recadrage fonctionne sur n'importe quel PDF, y compris les scans, car il opère sur les limites de la page, pas sur le contenu lui-même.

## Conclusion

Pour la plupart des utilisateurs, [l'outil de recadrage PDF d'UtilBoxx](/fr/tools/pdf/cropPdf) est le moyen le plus rapide de rogner les marges et de nettoyer les mises en page. Il est gratuit, basé sur le navigateur et vous donne un contrôle visuel sur la zone de recadrage.`;

const cropPdfDe = `## Warum PDF-Seiten beschneiden?

PDF-Beschneidung entfernt unerwünschte Leerzeichen, Ränder oder überflüssige Inhalte von einer Seite. Es ist eine kleine Bearbeitung, die einen großen Unterschied macht — Ihre Dokumente werden kompakter, leichter zu lesen und besser für bestimmte Layouts wie Ebooks, Folien oder Druckformate geeignet.

Sie beschneiden normalerweise PDFs, wenn Sie:

- **Gescannte Dokumente bereinigen**: Scanner-Ränder und Schatten entfernen
- **Ebooks vorbereiten**: Ränder beschneiden, um auf kleinere E-Reader-Bildschirme zu passen
- **Folienbilder erstellen**: Querformat-Seiten auf 16:9 zuschneiden
- **Bestimmte Bereiche extrahieren**: Screenshot-ähnlichen Zuschnitt einer Grafik oder eines Diagramms vornehmen
- **Wasserzeichen oder Rahmen entfernen**: Wenn das Original unnötige Verzierungen hat

Beschneidung ist zerstörungsfrei, wenn sie r gemacht wird — die Original-PDF bleibt in den Dateidaten intakt, aber der sichtbare Bereich wird reduziert.

## Methode 1: Verwenden Sie das kostenlose PDF-Beschneidungstool von UtilBoxx (Empfohlen)

Unser [PDF-Beschneidungstool](/de/tools/pdf/cropPdf) ermöglicht es Ihnen, Schnittbereiche visuell zu definieren. So geht's:

1. Gehen Sie zu [utilboxx.com/de/tools/pdf/cropPdf](/de/tools/pdf/cropPdf)
2. Laden Sie Ihre PDF hoch
3. Ziehen Sie die Zuschneidegriffe in der Seitenvorschau, um den Bereich auszuwählen, den Sie behalten möchten
4. Wählen Sie, ob der Zuschnitt auf alle Seiten oder einen bestimmten Bereich angewendet werden soll
5. Klicken Sie auf „Verarbeiten" und laden Sie die zugeschnittene PDF herunter

**Warum diese Methode funktioniert**:
- Visuelles Drag & Drop-Beschneiden
- Auf alle Seiten oder einen benutzerdefinierten Bereich anwenden
- Keine Installation, keine Registrierung
- 100% kostenlos

## Methode 2: Adobe Acrobat (Kostenpflichtig)

Das PDF bearbeiten > Zuschneiden-Tool von Adobe Acrobat bietet präzise numerische Eingaben und die Möglichkeit, Zuschneide-Voreinstellungen zu speichern. Es ist am genauesten, kostet aber 19,99 $/Monat — weit mehr als die meisten Benutzer brauchen.

## Methode 3: macOS Vorschau

Auf dem Mac können Sie mit der Vorschau eine PDF mit dem rechteckigen Auswahlwerkzeug zuschneiden und dann speichern. Es funktioniert für einfache Zuschnitte, es fehlen jedoch Stapelverarbeitung und präzise Steuerung.

## Häufig gestellte Fragen

### Reduziert das Beschneiden die Qualität der PDF?
Nein. Das Beschneiden ändert nur den sichtbaren Bereich. Der zugrunde liegende Seiteninhalt wird in seiner ursprünglichen Auflösung erhalten.

### Kann ich jede Seite unterschiedlich zuschneiden?
Ja. UtilBoxx ermöglicht es Ihnen, verschiedene Zuschneideboxen für einzelne Seiten, Seitenbereiche oder alle Seiten gleichzeitig zu definieren.

### Kann ich einen Zuschnitt rückgängig machen?
Mit UtilBoxx wird das Original nie geändert — die zugeschnittene Version ist eine neue Datei, sodass Ihr Original sicher bleibt. Zum „Rückgängig machen" laden Sie einfach das Original erneut hoch.

### Funktioniert das Beschneiden mit gescannten PDFs?
Ja. Das Beschneiden funktioniert mit jeder PDF, einschließlich gescannter, da es auf den Seitengrenzen arbeitet, nicht auf dem Inhalt selbst.

## Fazit

Für die meisten Benutzer ist das [PDF-Beschneidungstool von UtilBoxx](/de/tools/pdf/cropPdf) der schnellste Weg, Ränder zu kürzen und Seitenlayouts zu bereinigen. Es ist kostenlos, browserbasiert und gibt Ihnen visuelle Kontrolle über den Schnittbereich.`;

export const cropPdfPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-crop-pdf-pages",
    category: "PDF Tools",
    date: "2026-05-20",
    readTime: "4 min",
    title: "How to Crop PDF Pages: Free Browser Tool (2026)",
    description: "Learn how to crop PDF pages to remove margins and unwanted areas. Visual drag-and-drop, no signup, 100% free.",
    content: cropPdfEn,
  },
  zh: {
    slug: "how-to-crop-pdf-pages",
    category: "PDF 工具",
    date: "2026-05-20",
    readTime: "4 分钟",
    title: "如何裁剪 PDF 页面：免费浏览器工具 (2026)",
    description: "学习如何裁剪 PDF 页面以删除边距和不需要的区域。可视化拖放，无需注册，100% 免费。",
    content: cropPdfZh,
  },
  ja: {
    slug: "how-to-crop-pdf-pages",
    category: "PDF ツール",
    date: "2026-05-20",
    readTime: "4 分",
    title: "PDF ページをトリミングする方法：無料ブラウザツール (2026)",
    description: "余白と不要な領域を削除するために PDF ページをトリミングする方法を学びましょう。ビジュアルドラッグ＆ドロップ、登録不要、100% 無料。",
    content: cropPdfJa,
  },
  es: {
    slug: "how-to-crop-pdf-pages",
    category: "Herramientas PDF",
    date: "2026-05-20",
    readTime: "4 min",
    title: "Cómo Recortar Páginas PDF: Herramienta Gratuita en el Navegador (2026)",
    description: "Aprende cómo recortar páginas PDF para eliminar márgenes y áreas no deseadas. Arrastrar y soltar visual, sin registro, 100% gratis.",
    content: cropPdfEs,
  },
  pt: {
    slug: "how-to-crop-pdf-pages",
    category: "Ferramentas PDF",
    date: "2026-05-20",
    readTime: "4 min",
    title: "Como Recortar Páginas de PDF: Ferramenta Grátis no Navegador (2026)",
    description: "Aprenda como recortar páginas de PDF para remover margens e áreas indesejadas. Arrastar e soltar visual, sem cadastro, 100% grátis.",
    content: cropPdfPt,
  },
  fr: {
    slug: "how-to-crop-pdf-pages",
    category: "Outils PDF",
    date: "2026-05-20",
    readTime: "4 min",
    title: "Comment Recadrer des Pages PDF : Outil Gratuit dans le Navigateur (2026)",
    description: "Apprenez à recadrer des pages PDF pour supprimer les marges et les zones indésirables. Glisser-déposer visuel, sans inscription, 100% gratuit.",
    content: cropPdfFr,
  },
  de: {
    slug: "how-to-crop-pdf-pages",
    category: "PDF-Tools",
    date: "2026-05-20",
    readTime: "4 Min",
    title: "PDF-Seiten beschneiden: Kostenloses Browser-Tool (2026)",
    description: "Erfahren Sie, wie Sie PDF-Seiten beschneiden, um Ränder und unerwünschte Bereiche zu entfernen. Visuelles Drag & Drop, keine Registrierung, 100% kostenlos.",
    content: cropPdfDe,
  },
};
