import type { Locale } from "./config";

export type ToolSlug =
  | "pdf/merge"
  | "pdf/split"
  | "pdf/compress"
  | "pdf/to-image"
  | "pdf/image-to-pdf"
  | "pdf/add-watermark"
  | "pdf/rotate"
  | "pdf/extract-text"
  | "pdf/reorder"
  | "image/compress"
  | "image/resize"
  | "image/crop"
  | "image/convert"
  | "image/add-watermark"
  | "text/char-count"
  | "text/case-convert"
  | "text/duplicate"
  | "text/diff"
  | "text/regex"
  | "unit/length"
  | "unit/weight"
  | "unit/temperature"
  | "unit/area"
  | "unit/volume"
  | "unit/speed"
  | "unit/data"
  | "unit/time"
  | "color/picker"
  | "color/hex-rgb"
  | "color/palette"
  | "crypto/hash"
  | "crypto/base64"
  | "crypto/url-encode"
  | "crypto/uuid"
  | "dev/json-format"
  | "dev/timestamp"
  | "dev/qrcode"
  | "dev/password";

export type Tool = {
  slug: ToolSlug;
  category: "pdf" | "image" | "text" | "unit" | "color" | "crypto" | "dev";
  icon: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
};

// 工具图标用 lucide-react 名字
export const tools: Tool[] = [
  // PDF
  { slug: "pdf/merge", category: "pdf", icon: "Combine", name: { en: "Merge PDF", zh: "合并 PDF", ja: "PDF 結合", es: "Combinar PDF", pt: "Mesclar PDF", fr: "Fusionner PDF", de: "PDF zusammenführen" }, description: { en: "Combine multiple PDF files into one", zh: "将多个 PDF 合并为一个", ja: "複数の PDF を 1 つに結合", es: "Combinar varios PDF en uno", pt: "Combine vários PDFs em um", fr: "Combinez plusieurs PDF en un", de: "Mehrere PDFs in einer Datei kombinieren" } },
  { slug: "pdf/split", category: "pdf", icon: "Scissors", name: { en: "Split PDF", zh: "分割 PDF", ja: "PDF 分割", es: "Dividir PDF", pt: "Dividir PDF", fr: "Diviser PDF", de: "PDF teilen" }, description: { en: "Split PDF into separate pages or ranges", zh: "将 PDF 拆分为单独页面或范围", ja: "PDF を個別のページまたは範囲に分割", es: "Dividir PDF en páginas o rangos separados", pt: "Dividir PDF em páginas ou intervalos separados", fr: "Diviser un PDF en pages séparées", de: "PDF in separate Seiten oder Bereiche aufteilen" } },
  { slug: "pdf/compress", category: "pdf", icon: "Minimize2", name: { en: "Compress PDF", zh: "压缩 PDF", ja: "PDF 圧縮", es: "Comprimir PDF", pt: "Comprimir PDF", fr: "Compresser PDF", de: "PDF komprimieren" }, description: { en: "Reduce PDF file size while keeping quality", zh: "在保持质量的同时减小 PDF 文件大小", ja: "品質を保ちながら PDF ファイルサイズを縮小", es: "Reducir el tamaño del PDF manteniendo la calidad", pt: "Reduzir o tamanho do PDF mantendo a qualidade", fr: "Réduire la taille du PDF tout en gardant la qualité", de: "PDF-Dateigröße reduzieren bei erhaltener Qualität" } },
  { slug: "pdf/to-image", category: "pdf", icon: "Image", name: { en: "PDF to Image", zh: "PDF 转图片", ja: "PDF を画像に", es: "PDF a Imagen", pt: "PDF para Imagem", fr: "PDF en Image", de: "PDF zu Bild" }, description: { en: "Convert each PDF page to PNG or JPG", zh: "将每个 PDF 页面转换为 PNG 或 JPG", ja: "各 PDF ページを PNG または JPG に変換", es: "Convertir cada página PDF a PNG o JPG", pt: "Converter cada página PDF para PNG ou JPG", fr: "Convertir chaque page PDF en PNG ou JPG", de: "Jede PDF-Seite in PNG oder JPG konvertieren" } },
  { slug: "pdf/image-to-pdf", category: "pdf", icon: "FileImage", name: { en: "Image to PDF", zh: "图片转 PDF", ja: "画像を PDF に", es: "Imagen a PDF", pt: "Imagem para PDF", fr: "Image en PDF", de: "Bild zu PDF" }, description: { en: "Convert images to a single PDF file", zh: "将图片转换为单个 PDF 文件", ja: "画像を 1 つの PDF ファイルに変換", es: "Convertir imágenes a un solo PDF", pt: "Converter imagens em um único PDF", fr: "Convertir des images en un seul PDF", de: "Bilder in eine PDF-Datei konvertieren" } },
  { slug: "pdf/add-watermark", category: "pdf", icon: "Stamp", name: { en: "Add Watermark", zh: "添加水印", ja: "透かし追加", es: "Añadir Marca de Agua", pt: "Adicionar Marca D'água", fr: "Ajouter Filigrane", de: "Wasserzeichen hinzufügen" }, description: { en: "Add text watermark to PDF pages", zh: "向 PDF 页面添加文本水印", ja: "PDF ページにテキスト透かしを追加", es: "Añadir marca de agua de texto a páginas PDF", pt: "Adicionar marca d'água de texto a páginas PDF", fr: "Ajouter un filigrane de texte aux pages PDF", de: "Textwasserzeichen zu PDF-Seiten hinzufügen" } },
  { slug: "pdf/rotate", category: "pdf", icon: "RotateCw", name: { en: "Rotate PDF", zh: "旋转 PDF", ja: "PDF 回転", es: "Rotar PDF", pt: "Girar PDF", fr: "Pivoter PDF", de: "PDF drehen" }, description: { en: "Rotate PDF pages by 90, 180 or 270 degrees", zh: "将 PDF 页面旋转 90、180 或 270 度", ja: "PDF ページを 90、180、270 度回転", es: "Rotar páginas PDF 90, 180 o 270 grados", pt: "Girar páginas PDF em 90, 180 ou 270 graus", fr: "Pivoter les pages PDF de 90, 180 ou 270 degrés", de: "PDF-Seiten um 90, 180 oder 270 Grad drehen" } },
  { slug: "pdf/extract-text", category: "pdf", icon: "FileText", name: { en: "Extract Text", zh: "提取文本", ja: "テキスト抽出", es: "Extraer Texto", pt: "Extrair Texto", fr: "Extraire Texte", de: "Text extrahieren" }, description: { en: "Extract text content from PDF as plain text", zh: "从 PDF 中提取纯文本内容", ja: "PDF からテキストを抽出", es: "Extraer texto del PDF como texto plano", pt: "Extrair texto do PDF como texto simples", fr: "Extraire le texte du PDF en texte brut", de: "Text aus PDF extrahieren" } },
  { slug: "pdf/reorder", category: "pdf", icon: "ListOrdered", name: { en: "Reorder Pages", zh: "重排页面", ja: "ページ並び替え", es: "Reordenar Páginas", pt: "Reordenar Páginas", fr: "Réorganiser Pages", de: "Seiten neu anordnen" }, description: { en: "Drag and drop to reorder PDF pages", zh: "拖放以重新排序 PDF 页面", ja: "ドラッグ&ドロップで PDF ページを並べ替え", es: "Arrastra y suelta para reordenar páginas PDF", pt: "Arraste e solte para reordenar páginas PDF", fr: "Glissez-déposez pour réorganiser les pages PDF", de: "PDF-Seiten per Drag & Drop neu anordnen" } },

  // Image
  { slug: "image/compress", category: "image", icon: "Minimize2", name: { en: "Compress Image", zh: "压缩图片", ja: "画像圧縮", es: "Comprimir Imagen", pt: "Comprimir Imagem", fr: "Compresser Image", de: "Bild komprimieren" }, description: { en: "Reduce image file size with quality control", zh: "在控制质量的同时减小图片大小", ja: "画質を制御しながら画像サイズを縮小", es: "Reducir el tamaño de la imagen con control de calidad", pt: "Reduzir o tamanho da imagem com controle de qualidade", fr: "Réduire la taille de l'image avec contrôle qualité", de: "Bildgröße mit Qualitätskontrolle reduzieren" } },
  { slug: "image/resize", category: "image", icon: "Maximize2", name: { en: "Resize Image", zh: "调整大小", ja: "リサイズ", es: "Redimensionar", pt: "Redimensionar", fr: "Redimensionner", de: "Bild skalieren" }, description: { en: "Resize images to any width and height", zh: "将图片调整为任意宽度和高度", ja: "画像を任意の幅と高さにリサイズ", es: "Redimensionar imágenes a cualquier ancho y alto", pt: "Redimensionar imagens para qualquer largura e altura", fr: "Redimensionner des images à toute largeur et hauteur", de: "Bilder auf beliebige Breite und Höhe skalieren" } },
  { slug: "image/crop", category: "image", icon: "Crop", name: { en: "Crop Image", zh: "裁剪图片", ja: "画像切り取り", es: "Recortar Imagen", pt: "Recortar Imagem", fr: "Recadrer Image", de: "Bild zuschneiden" }, description: { en: "Crop images to remove unwanted areas", zh: "裁剪图片以去除不需要的区域", ja: "不要な領域を削除するために画像を切り取る", es: "Recortar imágenes para eliminar áreas no deseadas", pt: "Recortar imagens para remover áreas indesejadas", fr: "Recadrer des images pour supprimer les zones inutiles", de: "Bilder zuschneiden, um unerwünschte Bereiche zu entfernen" } },
  { slug: "image/convert", category: "image", icon: "RefreshCw", name: { en: "Convert Image", zh: "转换格式", ja: "形式変換", es: "Convertir Formato", pt: "Converter Formato", fr: "Convertir Format", de: "Format konvertieren" }, description: { en: "Convert images between JPG, PNG, WebP, BMP", zh: "在 JPG、PNG、WebP、BMP 之间转换", ja: "JPG、PNG、WebP、BMP 間で画像を変換", es: "Convertir entre JPG, PNG, WebP, BMP", pt: "Converter entre JPG, PNG, WebP, BMP", fr: "Convertir entre JPG, PNG, WebP, BMP", de: "Zwischen JPG, PNG, WebP, BMP konvertieren" } },
  { slug: "image/add-watermark", category: "image", icon: "Stamp", name: { en: "Add Watermark", zh: "添加水印", ja: "透かし追加", es: "Marca de Agua", pt: "Marca D'água", fr: "Filigrane", de: "Wasserzeichen" }, description: { en: "Add text watermark to images", zh: "向图片添加文本水印", ja: "画像にテキスト透かしを追加", es: "Añadir marca de agua de texto a imágenes", pt: "Adicionar marca d'água de texto a imagens", fr: "Ajouter un filigrane de texte aux images", de: "Textwasserzeichen zu Bildern hinzufügen" } },

  // Text
  { slug: "text/char-count", category: "text", icon: "Hash", name: { en: "Character Count", zh: "字符统计", ja: "文字数カウント", es: "Contar Caracteres", pt: "Contar Caracteres", fr: "Compter Caractères", de: "Zeichen zählen" }, description: { en: "Count characters, words, lines and bytes", zh: "统计字符、单词、行数和字节", ja: "文字、単語、行、バイトをカウント", es: "Contar caracteres, palabras, líneas y bytes", pt: "Contar caracteres, palavras, linhas e bytes", fr: "Compter caractères, mots, lignes et octets", de: "Zeichen, Wörter, Zeilen und Bytes zählen" } },
  { slug: "text/case-convert", category: "text", icon: "CaseSensitive", name: { en: "Case Converter", zh: "大小写转换", ja: "大文字小文字変換", es: "Convertir Mayúsculas", pt: "Converter Maiúsculas", fr: "Convertir Casse", de: "Groß-/Kleinschreibung" }, description: { en: "Convert text to upper, lower, title, sentence case", zh: "将文本转换为大写、小写、标题、句首大写", ja: "テキストを大文字、小文字、タイトル文、 文頭大文字に変換", es: "Convertir texto a mayúsculas, minúsculas, título, oración", pt: "Converter texto para maiúsculas, minúsculas, título, frase", fr: "Convertir texte en majuscules, minuscules, titre, phrase", de: "Text in Groß-, Klein-, Titel- oder Satzkleinbuchstaben umwandeln" } },
  { slug: "text/duplicate", category: "text", icon: "CopyX", name: { en: "Remove Duplicates", zh: "去除重复", ja: "重複削除", es: "Eliminar Duplicados", pt: "Remover Duplicados", fr: "Supprimer Doublons", de: "Duplikate entfernen" }, description: { en: "Remove duplicate lines from text", zh: "从文本中删除重复行", ja: "テキストから重複行を削除", es: "Eliminar líneas duplicadas del texto", pt: "Remover linhas duplicadas do texto", fr: "Supprimer les lignes en double du texte", de: "Doppelte Zeilen aus Text entfernen" } },
  { slug: "text/diff", category: "text", icon: "GitCompare", name: { en: "Text Diff", zh: "文本对比", ja: "テキスト比較", es: "Comparar Texto", pt: "Comparar Texto", fr: "Comparer Texte", de: "Text vergleichen" }, description: { en: "Compare two texts and show differences", zh: "比较两个文本并显示差异", ja: "2 つのテキストを比較し、違いを表示", es: "Comparar dos textos y mostrar diferencias", pt: "Comparar dois textos e mostrar diferenças", fr: "Comparer deux textes et afficher les différences", de: "Zwei Texte vergleichen und Unterschiede anzeigen" } },
  { slug: "text/regex", category: "text", icon: "Regex", name: { en: "Regex Tester", zh: "正则测试", ja: "正規表現テスター", es: "Probador Regex", pt: "Testador Regex", fr: "Testeur Regex", de: "Regex-Tester" }, description: { en: "Test and debug regular expressions", zh: "测试和调试正则表达式", ja: "正規表現のテストとデバッグ", es: "Probar y depurar expresiones regulares", pt: "Testar e depurar expressões regulares", fr: "Tester et déboguer des expressions régulières", de: "Reguläre Ausdrücke testen und debuggen" } },

  // Unit
  { slug: "unit/length", category: "unit", icon: "Ruler", name: { en: "Length Converter", zh: "长度换算", ja: "長さ変換", es: "Conversor de Longitud", pt: "Conversor de Comprimento", fr: "Convertisseur de Longueur", de: "Längenumrechner" }, description: { en: "Convert between meters, feet, inches, miles and more", zh: "米、英尺、英寸、英里等单位换算", ja: "メートル、フィート、インチ、マイルなどの変換", es: "Convertir entre metros, pies, pulgadas, millas y más", pt: "Converter entre metros, pés, polegadas, milhas e mais", fr: "Convertir entre mètres, pieds, pouces, miles et plus", de: "Zwischen Meter, Fuß, Zoll, Meilen und mehr umrechnen" } },
  { slug: "unit/weight", category: "unit", icon: "Weight", name: { en: "Weight Converter", zh: "重量换算", ja: "重さ変換", es: "Conversor de Peso", pt: "Conversor de Peso", fr: "Convertisseur de Poids", de: "Gewichtsumrechner" }, description: { en: "Convert between kg, lbs, oz, grams and more", zh: "千克、磅、盎司、克等单位换算", ja: "キログラム、ポンド、オンス、グラムなどの変換", es: "Convertir entre kg, lbs, oz, gramos y más", pt: "Converter entre kg, lbs, oz, gramas e mais", fr: "Convertir entre kg, lbs, oz, grammes et plus", de: "Zwischen kg, lbs, oz, Gramm und mehr umrechnen" } },
  { slug: "unit/temperature", category: "unit", icon: "Thermometer", name: { en: "Temperature Converter", zh: "温度换算", ja: "温度変換", es: "Conversor de Temperatura", pt: "Conversor de Temperatura", fr: "Convertisseur de Température", de: "Temperaturumrechner" }, description: { en: "Convert between Celsius, Fahrenheit, Kelvin", zh: "摄氏、华氏、开尔文之间转换", ja: "摂氏、華氏、ケルビン間で変換", es: "Convertir entre Celsius, Fahrenheit, Kelvin", pt: "Converter entre Celsius, Fahrenheit, Kelvin", fr: "Convertir entre Celsius, Fahrenheit, Kelvin", de: "Zwischen Celsius, Fahrenheit, Kelvin umrechnen" } },
  { slug: "unit/area", category: "unit", icon: "Square", name: { en: "Area Converter", zh: "面积换算", ja: "面積変換", es: "Conversor de Área", pt: "Conversor de Área", fr: "Convertisseur de Surface", de: "Flächenumrechner" }, description: { en: "Convert between m², ft², acres, hectares and more", zh: "平方米、平方英尺、英亩、公顷等单位换算", ja: "平方メートル、平方フィート、エーカー、ヘクタールなど", es: "Convertir entre m², ft², acres, hectáreas y más", pt: "Converter entre m², ft², acres, hectares e mais", fr: "Convertir entre m², ft², acres, hectares et plus", de: "Zwischen m², ft², Acres, Hektar und mehr umrechnen" } },
  { slug: "unit/volume", category: "unit", icon: "Beaker", name: { en: "Volume Converter", zh: "体积换算", ja: "体積変換", es: "Conversor de Volumen", pt: "Conversor de Volume", fr: "Convertisseur de Volume", de: "Volumenumrechner" }, description: { en: "Convert between liters, gallons, cups, ml and more", zh: "升、加仑、杯、毫升等单位换算", ja: "リットル、ガロン、カップ、ミリリットルなど", es: "Convertir entre litros, galones, tazas, ml y más", pt: "Converter entre litros, galões, copos, ml e mais", fr: "Convertir entre litres, gallons, tasses, ml et plus", de: "Zwischen Liter, Gallonen, Tassen, ml und mehr umrechnen" } },
  { slug: "unit/speed", category: "unit", icon: "Gauge", name: { en: "Speed Converter", zh: "速度换算", ja: "速度変換", es: "Conversor de Velocidad", pt: "Conversor de Velocidade", fr: "Convertisseur de Vitesse", de: "Geschwindigkeitsumrechner" }, description: { en: "Convert between km/h, mph, m/s, knots and more", zh: "公里/小时、英里/小时、米/秒、节等单位换算", ja: "km/h、mph、m/s、ノットなどの変換", es: "Convertir entre km/h, mph, m/s, nudos y más", pt: "Converter entre km/h, mph, m/s, nós e mais", fr: "Convertir entre km/h, mph, m/s, nœuds et plus", de: "Zwischen km/h, mph, m/s, Knoten und mehr umrechnen" } },
  { slug: "unit/data", category: "unit", icon: "HardDrive", name: { en: "Data Storage Converter", zh: "数据存储换算", ja: "データ容量変換", es: "Conversor de Almacenamiento", pt: "Conversor de Armazenamento", fr: "Convertisseur de Stockage", de: "Datenspeicher-Umrechner" }, description: { en: "Convert between B, KB, MB, GB, TB, PB", zh: "B、KB、MB、GB、TB、PB 之间转换", ja: "B、KB、MB、GB、TB、PB 間で変換", es: "Convertir entre B, KB, MB, GB, TB, PB", pt: "Converter entre B, KB, MB, GB, TB, PB", fr: "Convertir entre B, KB, MB, GB, TB, PB", de: "Zwischen B, KB, MB, GB, TB, PB umrechnen" } },
  { slug: "unit/time", category: "unit", icon: "Clock", name: { en: "Time Converter", zh: "时间换算", ja: "時間変換", es: "Conversor de Tiempo", pt: "Conversor de Tempo", fr: "Convertisseur de Temps", de: "Zeitumrechner" }, description: { en: "Convert between seconds, minutes, hours, days, years", zh: "秒、分钟、小时、天、年之间转换", ja: "秒、分、時間、日、年の間で変換", es: "Convertir entre segundos, minutos, horas, días, años", pt: "Converter entre segundos, minutos, horas, dias, anos", fr: "Convertir entre secondes, minutes, heures, jours, années", de: "Zwischen Sekunden, Minuten, Stunden, Tagen, Jahren umrechnen" } },

  // Color
  { slug: "color/picker", category: "color", icon: "Pipette", name: { en: "Color Picker", zh: "取色器", ja: "カラーピッカー", es: "Selector de Color", pt: "Seletor de Cor", fr: "Sélecteur de Couleur", de: "Farbwähler" }, description: { en: "Pick colors from images and get HEX, RGB, HSL", zh: "从图片中取色，获取 HEX、RGB、HSL", ja: "画像から色を取得し、HEX、RGB、HSL を取得", es: "Elegir colores de imágenes y obtener HEX, RGB, HSL", pt: "Escolher cores de imagens e obter HEX, RGB, HSL", fr: "Choisir des couleurs dans des images et obtenir HEX, RGB, HSL", de: "Farben aus Bildern wählen und HEX, RGB, HSL erhalten" } },
  { slug: "color/hex-rgb", category: "color", icon: "Palette", name: { en: "HEX/RGB Converter", zh: "HEX/RGB 转换", ja: "HEX/RGB 変換", es: "Conversor HEX/RGB", pt: "Conversor HEX/RGB", fr: "Convertisseur HEX/RGB", de: "HEX/RGB-Konverter" }, description: { en: "Convert between HEX, RGB, HSL and CMYK", zh: "HEX、RGB、HSL、CMYK 之间转换", ja: "HEX、RGB、HSL、CMYK 間で変換", es: "Convertir entre HEX, RGB, HSL y CMYK", pt: "Converter entre HEX, RGB, HSL e CMYK", fr: "Convertir entre HEX, RGB, HSL et CMYK", de: "Zwischen HEX, RGB, HSL und CMYK konvertieren" } },
  { slug: "color/palette", category: "color", icon: "SwatchBook", name: { en: "Palette Generator", zh: "色板生成", ja: "パレット生成", es: "Generador de Paleta", pt: "Gerador de Paleta", fr: "Générateur de Palette", de: "Palettengenerator" }, description: { en: "Generate harmonious color palettes", zh: "生成和谐的颜色搭配", ja: "調和のとれたカラーパレットを生成", es: "Generar paletas de colores armoniosas", pt: "Gerar paletas de cores harmoniosas", fr: "Générer des palettes de couleurs harmonieuses", de: "Harmonische Farbpaletten generieren" } },

  // Crypto
  { slug: "crypto/hash", category: "crypto", icon: "Lock", name: { en: "Hash Generator", zh: "哈希生成", ja: "ハッシュ生成", es: "Generador de Hash", pt: "Gerador de Hash", fr: "Générateur de Hash", de: "Hash-Generator" }, description: { en: "Generate MD5, SHA-1, SHA-256, SHA-512 hashes", zh: "生成 MD5、SHA-1、SHA-256、SHA-512 哈希", ja: "MD5、SHA-1、SHA-256、SHA-512 ハッシュを生成", es: "Generar hashes MD5, SHA-1, SHA-256, SHA-512", pt: "Gerar hashes MD5, SHA-1, SHA-256, SHA-512", fr: "Générer des hashes MD5, SHA-1, SHA-256, SHA-512", de: "MD5, SHA-1, SHA-256, SHA-512 Hashes generieren" } },
  { slug: "crypto/base64", category: "crypto", icon: "Binary", name: { en: "Base64 Encode/Decode", zh: "Base64 编解码", ja: "Base64 エンコード/デコード", es: "Codificar/Decodificar Base64", pt: "Codificar/Decodificar Base64", fr: "Encoder/Décoder Base64", de: "Base64 kodieren/dekodieren" }, description: { en: "Encode and decode Base64 strings", zh: "Base64 字符串的编码和解码", ja: "Base64 文字列のエンコードとデコード", es: "Codificar y decodificar cadenas Base64", pt: "Codificar e decodificar strings Base64", fr: "Encoder et décoder des chaînes Base64", de: "Base64-Strings kodieren und dekodieren" } },
  { slug: "crypto/url-encode", category: "crypto", icon: "Link", name: { en: "URL Encode/Decode", zh: "URL 编解码", ja: "URL エンコード/デコード", es: "Codificar/Decodificar URL", pt: "Codificar/Decodificar URL", fr: "Encoder/Décoder URL", de: "URL kodieren/dekodieren" }, description: { en: "Encode and decode URL-encoded strings", zh: "URL 编码字符串的编码和解码", ja: "URL エンコード文字列のエンコードとデコード", es: "Codificar y decodificar cadenas URL-encoded", pt: "Codificar e decodificar strings URL-encoded", fr: "Encoder et décoder des chaînes URL-encoded", de: "URL-codierte Strings kodieren und dekodieren" } },
  { slug: "crypto/uuid", category: "crypto", icon: "Fingerprint", name: { en: "UUID Generator", zh: "UUID 生成", ja: "UUID 生成", es: "Generador UUID", pt: "Gerador UUID", fr: "Générateur UUID", de: "UUID-Generator" }, description: { en: "Generate UUID v1 and v4 identifiers", zh: "生成 UUID v1 和 v4 标识符", ja: "UUID v1 および v4 識別子を生成", es: "Generar identificadores UUID v1 y v4", pt: "Gerar identificadores UUID v1 e v4", fr: "Générer des identifiants UUID v1 et v4", de: "UUID v1 und v4 Identifikatoren generieren" } },

  // Dev
  { slug: "dev/json-format", category: "dev", icon: "Braces", name: { en: "JSON Formatter", zh: "JSON 格式化", ja: "JSON フォーマッタ", es: "Formateador JSON", pt: "Formatador JSON", fr: "Formateur JSON", de: "JSON-Formatierer" }, description: { en: "Format, validate and beautify JSON", zh: "格式化、验证、美化 JSON", ja: "JSON のフォーマット、検証、整形", es: "Formatear, validar y embellecer JSON", pt: "Formatar, validar e embelezar JSON", fr: "Formater, valider et embellir JSON", de: "JSON formatieren, validieren und verschönern" } },
  { slug: "dev/timestamp", category: "dev", icon: "Timer", name: { en: "Timestamp Converter", zh: "时间戳转换", ja: "タイムスタンプ変換", es: "Conversor Timestamp", pt: "Conversor Timestamp", fr: "Convertisseur Timestamp", de: "Zeitstempel-Konverter" }, description: { en: "Convert between Unix timestamps and dates", zh: "Unix 时间戳和日期之间转换", ja: "Unix タイムスタンプと日付の間で変換", es: "Convertir entre timestamps Unix y fechas", pt: "Converter entre timestamps Unix e datas", fr: "Convertir entre timestamps Unix et dates", de: "Zwischen Unix-Zeitstempeln und Daten umrechnen" } },
  { slug: "dev/qrcode", category: "dev", icon: "QrCode", name: { en: "QR Code Generator", zh: "QR 码生成", ja: "QR コード生成", es: "Generador QR", pt: "Gerador QR", fr: "Générateur QR", de: "QR-Code-Generator" }, description: { en: "Generate QR codes from text or URLs", zh: "从文本或 URL 生成 QR 码", ja: "テキストまたは URL から QR コードを生成", es: "Generar códigos QR desde texto o URLs", pt: "Gerar códigos QR de texto ou URLs", fr: "Générer des codes QR à partir de texte ou d'URLs", de: "QR-Codes aus Text oder URLs generieren" } },
  { slug: "dev/password", category: "dev", icon: "Key", name: { en: "Password Generator", zh: "密码生成", ja: "パスワード生成", es: "Generador de Contraseña", pt: "Gerador de Senha", fr: "Générateur de Mot de Passe", de: "Passwort-Generator" }, description: { en: "Generate strong random passwords", zh: "生成强随机密码", ja: "強力なランダムパスワードを生成", es: "Generar contraseñas aleatorias seguras", pt: "Gerar senhas aleatórias fortes", fr: "Générer des mots de passe aléatoires forts", de: "Starke zufällige Passwörter generieren" } },
];

export const getToolsByCategory = (category: Tool["category"]) =>
  tools.filter((t) => t.category === category);

export const getToolBySlug = (slug: string) =>
  tools.find((t) => t.slug === slug);
