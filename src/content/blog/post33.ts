// Blog post: How to Edit PDF Metadata
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const metadataEn = `## What is PDF metadata and why edit it?

PDF metadata is the hidden information stored inside a PDF: title, author, subject, keywords, creation date, modification date, and producer software. Most people never see it, but search engines, file managers, and document systems all read it.

Editing metadata matters when you are:

- **Organizing a document library**: Search by author or subject in your file manager
- **Preparing documents for publication**: Set proper title and author for SEO and discoverability
- **Anonymizing files before sharing**: Remove author name or company info for privacy
- **Fixing incorrect information**: Auto-generated PDFs often have wrong titles
- **Meeting compliance requirements**: Some industries require specific metadata fields

Editing PDF metadata is one of the simplest things you can do to make your files more professional and findable.

## Method 1: Use UtilBoxx's Free PDF Metadata Editor (Recommended)

Our [Edit PDF Metadata tool](/en/tools/pdf/metadata) lets you view and edit all metadata fields in a clean interface. Here's how:

1. Go to [utilboxx.com/en/tools/pdf/metadata](/en/tools/pdf/metadata)
2. Upload your PDF
3. Edit any field: title, author, subject, keywords, creator, producer
4. Optionally clear fields you want to remove
5. Click "Process" and download the updated PDF

**Why this method works**:
- No installation, no signup
- Files processed in your browser (privacy-first)
- Edit multiple fields at once
- 100% free

## Method 2: Adobe Acrobat (Paid)

Adobe Acrobat offers a full metadata panel under File > Properties. It also supports XMP (Extensible Metadata Platform) for advanced schemas. But for occasional metadata tweaks, it is overpriced at $19.99/month.

## Method 3: ExifTool (Command Line)

ExifTool is a powerful cross-platform command-line utility that can read and write PDF metadata. It is free and scriptable, but the command-line interface makes it unsuitable for non-technical users.

## Common questions

### What are the most important metadata fields?
The most important fields are Title, Author, Subject, and Keywords. These appear in search results and document properties in nearly all PDF readers.

### Will editing metadata change the visible content?
No. Metadata is separate from the document's text and images. Editing metadata is completely non-destructive.

### Can I remove all metadata for privacy?
Yes. With UtilBoxx, you can clear any field by leaving it empty. This is useful when sharing documents publicly and you don't want to leak author information.

### Does metadata affect SEO?
Yes. Search engines like Google index PDF metadata, especially the Title and Description fields. Well-edited metadata can help PDFs rank in search results.

## Conclusion

For most users, [UtilBoxx's Edit PDF Metadata tool](/en/tools/pdf/metadata) is the quickest way to view and update document properties. It is free, private, and works on any device — perfect for cleaning up auto-generated PDFs or preparing files for publication.`;

const metadataZh = `## 什么是 PDF 元数据，为什么要编辑它？

PDF 元数据是存储在 PDF 内部的隐藏信息：标题、作者、主题、关键词、创建日期、修改日期和生成软件。大多数人从不会看到它，但搜索引擎、文件管理器和文档系统都会读取它。

在以下情况下编辑元数据很重要：

- **整理文档库**：在文件管理器中按作者或主题搜索
- **为发布准备文档**：设置正确的标题和作者以便 SEO 和可发现性
- **在共享前匿名化文件**：删除作者姓名或公司信息以保护隐私
- **修正错误信息**：自动生成的 PDF 经常有错误的标题
- **满足合规要求**：某些行业要求特定的元数据字段

编辑 PDF 元数据是让你的文件更专业、更易查找的最简单方法之一。

## 方法 1：使用 UtilBoxx 免费 PDF 元数据编辑器（推荐）

我们的 [编辑 PDF 元数据工具](/zh/tools/pdf/metadata) 让你在简洁的界面中查看和编辑所有元数据字段。步骤如下：

1. 访问 [utilboxx.com/zh/tools/pdf/metadata](/zh/tools/pdf/metadata)
2. 上传你的 PDF
3. 编辑任何字段：标题、作者、主题、关键词、创建者、生成器
4. 可选择清除要删除的字段
5. 点击"处理"并下载更新后的 PDF

**这个方法的优势**：
- 无需安装、无需注册
- 文件在浏览器中处理（隐私优先）
- 一次编辑多个字段
- 100% 免费

## 方法 2：Adobe Acrobat（付费）

Adobe Acrobat 在"文件">"属性"下提供完整的元数据面板。它还支持用于高级 schema 的 XMP（可扩展元数据平台）。但对于偶尔的元数据调整，每月 $19.99 的价格过于昂贵。

## 方法 3：ExifTool（命令行）

ExifTool 是一个强大的跨平台命令行实用程序，可读写 PDF 元数据。它免费且可脚本化，但命令行界面不适合非技术用户。

## 常见问题

### 最重要的元数据字段是哪些？
最重要的字段是标题、作者、主题和关键词。这些字段几乎在所有 PDF 阅读器的搜索结果和文档属性中显示。

### 编辑元数据会改变可见内容吗？
不会。元数据与文档的文本和图像是分开的。编辑元数据完全是无损的。

### 我可以删除所有元数据以保护隐私吗？
可以。使用 UtilBoxx，你可以通过将字段留空来清除任何字段。这在公开共享文档且不想泄露作者信息时很有用。

### 元数据会影响 SEO 吗？
是的。Google 等搜索引擎会索引 PDF 元数据，尤其是标题和描述字段。编辑良好的元数据可以帮助 PDF 在搜索结果中排名。

## 结论

对大多数用户来说，[UtilBoxx 的编辑 PDF 元数据工具](/zh/tools/pdf/metadata) 是查看和更新文档属性的最快方式。它免费、私密、适用于任何设备——非常适合清理自动生成的 PDF 或为发布准备文件。`;

const metadataJa = `## PDF メタデータとは何ですか？なぜ編集するのですか？

PDF メタデータは、PDF 内に保存される隠れた情報です：タイトル、作成者、件名、キーワード、作成日、変更日、プロデューサソフトウェア。ほとんどの人は見ることはありませんが、検索エンジン、ファイルマネージャー、ドキュメントシステムはすべてそれを読み取ります。

次のような場合にメタデータの編集が重要です：

- **ドキュメントライブラリを整理**：ファイルマネージャーで作成者や件名で検索
- **出版用のドキュメントを準備**：SEO と発見性のために適切なタイトルと作成者を設定
- **共有前にファイルを匿名化**：プライバシー保護のために作成者名や会社情報を削除
- **誤った情報を修正**：自動生成された PDF は間違ったタイトルを持つことが多い
- **コンプライアンス要件を満たす**：一部の業界では特定のメタデータフィールドが必要

PDF メタデータの編集は、ファイルをよりプロフェッショナルで見つけやすくするためにできる最も簡単なことの 1 つです。

## 方法 1：UtilBoxx の無料 PDF メタデータエディタを使用（推奨）

私たちの [PDF メタデータ編集ツール](/ja/tools/pdf/metadata) を使えば、クリーンなインターフェースですべてのメタデータフィールドを表示および編集できます。手順は次のとおり：

1. [utilboxx.com/ja/tools/pdf/metadata](/ja/tools/pdf/metadata) にアクセス
2. PDF をアップロード
3. 任意のフィールドを編集：タイトル、作成者、件名、キーワード、作成者、プロデューサ
4. 必要に応じて削除したいフィールドをクリア
5. 「処理」をクリックして更新された PDF をダウンロード

**この方法の長所**：
- インストール不要、登録不要
- ブラウザでファイル処理（プライバシー重視）
- 複数のフィールドを一度に編集
- 100% 無料

## 方法 2：Adobe Acrobat（有料）

Adobe Acrobat は、ファイル > プロパティの下に完全なメタデータパネルを提供します。高度なスキーマ用の XMP（Extensible Metadata Platform）もサポートします。ただし、たまのメタデータ調整には月額 $19.99 は高すぎます。

## 方法 3：ExifTool（コマンドライン）

ExifTool は、PDF メタデータを読み書きできる強力なクロスプラットフォームコマンドラインユーティリティです。無料でスクリプト可能ですが、コマンドラインインターフェースは非技術ユーザーには適していません。

## よくある質問

### 最も重要なメタデータフィールドは何ですか？
最も重要なフィールドは、タイトル、作成者、件名、キーワードです。これらはほぼすべての PDF リーダーの検索結果とドキュメントプロパティに表示されます。

### メタデータを編集すると表示内容が変わりますか？
いいえ。メタデータはドキュメントのテキストや画像とは別物です。メタデータの編集は完全に非破壊的です。

### プライバシー保護のためにすべてのメタデータを削除できますか？
はい。UtilBoxx では、フィールドを空にすることで任意のフィールドをクリアできます。これはドキュメントを公開共有する際に、作成者情報を漏らしたくない場合に便利です。

### メタデータは SEO に影響しますか？
はい。Google などの検索エンジンは PDF メタデータをインデックス化します。特にタイトルと説明フィールドは重要です。適切に編集されたメタデータは、検索結果での PDF のランキングに役立ちます。

## 結論

ほとんどのユーザーにとって、[UtilBoxx の PDF メタデータ編集ツール](/ja/tools/pdf/metadata) はドキュメントプロパティを表示および更新する最速の方法です。無料でプライベート、任意のデバイスで動作 — 自動生成された PDF のクリーンアップや出版用のファイル準備に最適です。`;

const metadataEs = `## ¿Qué son los metadatos de PDF y por qué editarlos?

Los metadatos de PDF son la información oculta almacenada dentro de un PDF: título, autor, asunto, palabras clave, fecha de creación, fecha de modificación y software productor. La mayoría de las personas nunca lo ven, pero los motores de búsqueda, gestores de archivos y sistemas de documentos sí lo leen.

Editar metadatos importa cuando:

- **Organizas una biblioteca de documentos**: Buscar por autor o asunto en tu gestor de archivos
- **Preparas documentos para publicación**: Establecer título y autor adecuados para SEO y descubribilidad
- **Anonimizas archivos antes de compartir**: Eliminar el nombre del autor o información de la empresa por privacidad
- **Corriges información incorrecta**: Los PDFs autogenerados a menudo tienen títulos incorrectos
- **Cumples requisitos de cumplimiento**: Algunas industrias requieren campos de metadatos específicos

Editar metadatos de PDF es una de las cosas más simples que puedes hacer para que tus archivos sean más profesionales y localizables.

## Método 1: Usa el Editor Gratuito de Metadatos PDF de UtilBoxx (Recomendado)

Nuestra [herramienta de Editar Metadatos PDF](/es/tools/pdf/metadata) te permite ver y editar todos los campos de metadatos en una interfaz limpia. Así se hace:

1. Ve a [utilboxx.com/es/tools/pdf/metadata](/es/tools/pdf/metadata)
2. Sube tu PDF
3. Edita cualquier campo: título, autor, asunto, palabras clave, creador, productor
4. Opcionalmente limpia los campos que desees eliminar
5. Haz clic en "Procesar" y descarga el PDF actualizado

**Por qué funciona este método**:
- Sin instalación, sin registro
- Archivos procesados en tu navegador (privacidad primero)
- Edita múltiples campos a la vez
- 100% gratis

## Método 2: Adobe Acrobat (De pago)

Adobe Acrobat ofrece un panel completo de metadatos en Archivo > Propiedades. También admite XMP (Extensible Metadata Platform) para esquemas avanzados. Pero para ajustes ocasionales de metadatos, su precio de $19.99/mes es excesivo.

## Método 3: ExifTool (Línea de comandos)

ExifTool es una potente utilidad de línea de comandos multiplataforma que puede leer y escribir metadatos de PDF. Es gratuita y programable, pero la interfaz de línea de comandos la hace inadecuada para usuarios no técnicos.

## Preguntas frecuentes

### ¿Cuáles son los campos de metadatos más importantes?
Los campos más importantes son Título, Autor, Asunto y Palabras clave. Estos aparecen en los resultados de búsqueda y propiedades del documento en casi todos los lectores de PDF.

### ¿Editar metadatos cambiará el contenido visible?
No. Los metadatos están separados del texto e imágenes del documento. Editar metadatos es completamente no destructivo.

### ¿Puedo eliminar todos los metadatos por privacidad?
Sí. Con UtilBoxx, puedes limpiar cualquier campo dejándolo vacío. Esto es útil al compartir documentos públicamente y no querer filtrar información del autor.

### ¿Los metadatos afectan al SEO?
Sí. Motores de búsqueda como Google indexan los metadatos de PDF, especialmente los campos Título y Descripción. Unos metadatos bien editados pueden ayudar a los PDFs a posicionarse en los resultados de búsqueda.

## Conclusión

Para la mayoría de los usuarios, la [herramienta de Editar Metadatos PDF de UtilBoxx](/es/tools/pdf/metadata) es la forma más rápida de ver y actualizar las propiedades del documento. Es gratuita, privada y funciona en cualquier dispositivo — perfecta para limpiar PDFs autogenerados o preparar archivos para publicación.`;

const metadataPt = `## O que são metadados de PDF e por que editá-los?

Metadados de PDF são as informações ocultas armazenadas dentro de um PDF: título, autor, assunto, palavras-chave, data de criação, data de modificação e software produtor. A maioria das pessoas nunca vê, mas mecanismos de busca, gerenciadores de arquivos e sistemas de documentos todos leem.

Editar metadados importa quando:

- **Organiza uma biblioteca de documentos**: Pesquise por autor ou assunto no seu gerenciador de arquivos
- **Prepara documentos para publicação**: Defina título e autor adequados para SEO e descobribilidade
- **Anonimiza arquivos antes de compartilhar**: Remova o nome do autor ou informações da empresa por privacidade
- **Corrige informações incorretas**: PDFs autogerados frequentemente têm títulos errados
- **Atende requisitos de conformidade**: Algumas indústrias exigem campos de metadados específicos

Editar metadados de PDF é uma das coisas mais simples que você pode fazer para tornar seus arquivos mais profissionais e localizáveis.

## Método 1: Use o Editor Gratuito de Metadados PDF do UtilBoxx (Recomendado)

Nossa [ferramenta de Editar Metadados PDF](/pt/tools/pdf/metadata) permite ver e editar todos os campos de metadados em uma interface limpa. Veja como:

1. Vá para [utilboxx.com/pt/tools/pdf/metadata](/pt/tools/pdf/metadata)
2. Envie seu PDF
3. Edite qualquer campo: título, autor, assunto, palavras-chave, criador, produtor
4. Opcionalmente limpe os campos que deseja remover
5. Clique em "Processar" e baixe o PDF atualizado

**Por que este método funciona**:
- Sem instalação, sem cadastro
- Arquivos processados no seu navegador (privacidade em primeiro lugar)
- Edite vários campos de uma vez
- 100% grátis

## Método 2: Adobe Acrobat (Pago)

O Adobe Acrobat oferece um painel completo de metadados em Arquivo > Propriedades. Também suporta XMP (Extensible Metadata Platform) para esquemas avançados. Mas para ajustes ocasionais de metadados, o preço de $19.99/mês é excessivo.

## Método 3: ExifTool (Linha de comando)

ExifTool é um utilitário de linha de comando multiplataforma poderoso que pode ler e escrever metadados de PDF. É gratuito e programável, mas a interface de linha de comando o torna inadequado para usuários não técnicos.

## Perguntas frequentes

### Quais são os campos de metadados mais importantes?
Os campos mais importantes são Título, Autor, Assunto e Palavras-chave. Estes aparecem nos resultados de pesquisa e propriedades do documento em quase todos os leitores de PDF.

### Editar metadados mudará o conteúdo visível?
Não. Metadados são separados do texto e imagens do documento. Editar metadados é completamente não destrutivo.

### Posso remover todos os metadados por privacidade?
Sim. Com o UtilBoxx, você pode limpar qualquer campo deixando-o vazio. Isso é útil ao compartilhar documentos publicamente e você não quer vazar informações do autor.

### Metadados afetam SEO?
Sim. Mecanismos de busca como o Google indexam metadados de PDF, especialmente os campos Título e Descrição. Metadados bem editados podem ajudar PDFs a classificar nos resultados de pesquisa.

## Conclusão

Para a maioria dos usuários, a [ferramenta de Editar Metadados PDF do UtilBoxx](/pt/tools/pdf/metadata) é a maneira mais rápida de visualizar e atualizar propriedades de documentos. É gratuita, privada e funciona em qualquer dispositivo — perfeita para limpar PDFs autogerados ou preparar arquivos para publicação.`;

const metadataFr = `## Que sont les métadonnées PDF et pourquoi les modifier ?

Les métadonnées PDF sont les informations cachées stockées dans un PDF : titre, auteur, sujet, mots-clés, date de création, date de modification et logiciel producteur. La plupart des gens ne les voient jamais, mais les moteurs de recherche, gestionnaires de fichiers et systèmes documentaires les lisent.

Modifier les métadonnées est important quand :

- **Vous organisez une bibliothèque de documents** : Recherchez par auteur ou sujet dans votre gestionnaire de fichiers
- **Vous préparez des documents pour publication** : Définissez un titre et un auteur appropriés pour le SEO et la découvrabilité
- **Vous anonymisez les fichiers avant partage** : Supprimez le nom de l'auteur ou les infos de l'entreprise pour la confidentialité
- **Vous corrigez des informations incorrectes** : Les PDF auto-générés ont souvent des titres erronés
- **Vous répondez aux exigences de conformité** : Certaines industries exigent des champs de métadonnées spécifiques

Modifier les métadonnées PDF est l'une des choses les plus simples que vous puissiez faire pour rendre vos fichiers plus professionnels et plus faciles à trouver.

## Méthode 1 : Utilisez l'éditeur gratuit de métadonnées PDF d'UtilBoxx (Recommandé)

Notre [outil d'édition de métadonnées PDF](/fr/tools/pdf/metadata) vous permet de visualiser et modifier tous les champs de métadonnées dans une interface claire. Voici comment :

1. Allez sur [utilboxx.com/fr/tools/pdf/metadata](/fr/tools/pdf/metadata)
2. Téléchargez votre PDF
3. Modifiez n'importe quel champ : titre, auteur, sujet, mots-clés, créateur, producteur
4. Optionnellement effacez les champs que vous voulez supprimer
5. Cliquez sur « Traiter » et téléchargez le PDF mis à jour

**Pourquoi cette méthode fonctionne** :
- Pas d'installation, pas d'inscription
- Fichiers traités dans votre navigateur (confidentialité d'abord)
- Modifiez plusieurs champs à la fois
- 100% gratuit

## Méthode 2 : Adobe Acrobat (Payant)

Adobe Acrobat offre un panneau de métadonnées complet sous Fichier > Propriétés. Il prend également en charge XMP (Extensible Metadata Platform) pour les schémas avancés. Mais pour des modifications occasionnelles, son prix de 19,99 $/mois est excessif.

## Méthode 3 : ExifTool (Ligne de commande)

ExifTool est un puissant utilitaire en ligne de commande multiplateforme qui peut lire et écrire des métadonnées PDF. Il est gratuit et scriptable, mais son interface en ligne de commande le rend inadapté aux utilisateurs non techniques.

## Questions fréquentes

### Quels sont les champs de métadonnées les plus importants ?
Les champs les plus importants sont Titre, Auteur, Sujet et Mots-clés. Ils apparaissent dans les résultats de recherche et les propriétés du document dans presque tous les lecteurs PDF.

### Modifier les métadonnées changera-t-il le contenu visible ?
Non. Les métadonnées sont séparées du texte et des images du document. Modifier les métadonnées est complètement non destructif.

### Puis-je supprimer toutes les métadonnées pour la confidentialité ?
Oui. Avec UtilBoxx, vous pouvez effacer n'importe quel champ en le laissant vide. C'est utile lors du partage public de documents quand vous ne voulez pas divulguer d'informations sur l'auteur.

### Les métadonnées affectent-elles le SEO ?
Oui. Les moteurs de recherche comme Google indexent les métadonnées PDF, en particulier les champs Titre et Description. Des métadonnées bien modifiées peuvent aider les PDF à se classer dans les résultats de recherche.

## Conclusion

Pour la plupart des utilisateurs, [l'outil d'édition de métadonnées PDF d'UtilBoxx](/fr/tools/pdf/metadata) est le moyen le plus rapide de visualiser et mettre à jour les propriétés des documents. Il est gratuit, privé et fonctionne sur n'importe quel appareil — parfait pour nettoyer les PDF auto-générés ou préparer des fichiers pour publication.`;

const metadataDe = `## Was sind PDF-Metadaten und warum sollte man sie bearbeiten?

PDF-Metadaten sind die versteckten Informationen, die in einer PDF gespeichert sind: Titel, Autor, Betreff, Stichwörter, Erstellungsdatum, Änderungsdatum und Producer-Software. Die meisten Menschen sehen sie nie, aber Suchmaschinen, Dateimanager und Dokumentensysteme lesen sie.

Metadaten zu bearbeiten ist wichtig, wenn Sie:

- **Eine Dokumentbibliothek organisieren**: Suche nach Autor oder Betreff in Ihrem Dateimanager
- **Dokumente für die Veröffentlichung vorbereiten**: Richtigen Titel und Autor für SEO und Auffindbarkeit festlegen
- **Dateien vor dem Teilen anonymisieren**: Autorname oder Firmeninformationen aus Datenschutzgründen entfernen
- **Falsche Informationen korrigieren**: Automatisch generierte PDFs haben oft falsche Titel
- **Compliance-Anforderungen erfüllen**: Einige Branchen erfordern bestimmte Metadatenfelder

PDF-Metadaten zu bearbeiten ist eine der einfachsten Maßnahmen, um Ihre Dateien professioneller und auffindbarer zu machen.

## Methode 1: Verwenden Sie den kostenlosen PDF-Metadaten-Editor von UtilBoxx (Empfohlen)

Unser [PDF-Metadaten-Editor-Tool](/de/tools/pdf/metadata) ermöglicht es Ihnen, alle Metadatenfelder in einer übersichtlichen Oberfläche anzuzeigen und zu bearbeiten. So geht's:

1. Gehen Sie zu [utilboxx.com/de/tools/pdf/metadata](/de/tools/pdf/metadata)
2. Laden Sie Ihre PDF hoch
3. Bearbeiten Sie beliebige Felder: Titel, Autor, Betreff, Stichwörter, Ersteller, Producer
4. Leeren Sie optional Felder, die Sie entfernen möchten
5. Klicken Sie auf „Verarbeiten" und laden Sie die aktualisierte PDF herunter

**Warum diese Methode funktioniert**:
- Keine Installation, keine Registrierung
- Dateien werden in Ihrem Browser verarbeitet (Datenschutz zuerst)
- Mehrere Felder gleichzeitig bearbeiten
- 100% kostenlos

## Methode 2: Adobe Acrobat (Kostenpflichtig)

Adobe Acrobat bietet ein vollständiges Metadaten-Panel unter Datei > Eigenschaften. Es unterstützt auch XMP (Extensible Metadata Platform) für erweiterte Schemata. Aber für gelegentliche Metadaten-Anpassungen ist der Preis von 19,99 $/Monat überzogen.

## Methode 3: ExifTool (Kommandozeile)

ExifTool ist ein leistungsstarkes plattformübergreifendes Kommandozeilen-Dienstprogramm, das PDF-Metadaten lesen und schreiben kann. Es ist kostenlos und skriptfähig, aber die Kommandozeilen-Schnittstelle macht es für nicht-technische Benutzer ungeeignet.

## Häufig gestellte Fragen

### Was sind die wichtigsten Metadatenfelder?
Die wichtigsten Felder sind Titel, Autor, Betreff und Stichwörter. Diese erscheinen in Suchergebnissen und Dokumenteigenschaften in nahezu allen PDF-Readern.

### Verändert die Bearbeitung von Metadaten den sichtbaren Inhalt?
Nein. Metadaten sind vom Text und den Bildern des Dokuments getrennt. Die Bearbeitung von Metadaten ist vollständig zerstörungsfrei.

### Kann ich alle Metadaten aus Datenschutzgründen entfernen?
Ja. Mit UtilBoxx können Sie jedes Feld leeren, indem Sie es leer lassen. Dies ist nützlich, wenn Sie Dokumente öffentlich teilen und keine Autoreninformationen preisgeben möchten.

### Beeinflussen Metadaten SEO?
Ja. Suchmaschinen wie Google indexieren PDF-Metadaten, insbesondere die Felder Titel und Beschreibung. Gut bearbeitete Metadaten können PDFs helfen, in Suchergebnissen zu ranken.

## Fazit

Für die meisten Benutzer ist das [PDF-Metadaten-Editor-Tool von UtilBoxx](/de/tools/pdf/metadata) der schnellste Weg, Dokumenteigenschaften anzuzeigen und zu aktualisieren. Es ist kostenlos, privat und funktioniert auf jedem Gerät — perfekt zum Bereinigen automatisch generierter PDFs oder zur Vorbereitung von Dateien für die Veröffentlichung.`;

export const editMetadataPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-edit-pdf-metadata",
    category: "PDF Tools",
    date: "2026-05-20",
    readTime: "4 min",
    title: "How to Edit PDF Metadata: Title, Author & More (2026)",
    description: "Learn how to view and edit PDF metadata fields like title, author, and keywords. Free browser tool, no signup.",
    content: metadataEn,
  },
  zh: {
    slug: "how-to-edit-pdf-metadata",
    category: "PDF 工具",
    date: "2026-05-20",
    readTime: "4 分钟",
    title: "如何编辑 PDF 元数据：标题、作者等 (2026)",
    description: "学习如何查看和编辑 PDF 元数据字段，如标题、作者和关键词。免费浏览器工具，无需注册。",
    content: metadataZh,
  },
  ja: {
    slug: "how-to-edit-pdf-metadata",
    category: "PDF ツール",
    date: "2026-05-20",
    readTime: "4 分",
    title: "PDF メタデータを編集する方法：タイトル、作成者など (2026)",
    description: "タイトル、作成者、キーワードなどの PDF メタデータフィールドを表示および編集する方法を学びましょう。無料ブラウザツール、登録不要。",
    content: metadataJa,
  },
  es: {
    slug: "how-to-edit-pdf-metadata",
    category: "Herramientas PDF",
    date: "2026-05-20",
    readTime: "4 min",
    title: "Cómo Editar Metadatos de PDF: Título, Autor y Más (2026)",
    description: "Aprende cómo ver y editar campos de metadatos de PDF como título, autor y palabras clave. Herramienta gratuita en el navegador, sin registro.",
    content: metadataEs,
  },
  pt: {
    slug: "how-to-edit-pdf-metadata",
    category: "Ferramentas PDF",
    date: "2026-05-20",
    readTime: "4 min",
    title: "Como Editar Metadados de PDF: Título, Autor e Mais (2026)",
    description: "Aprenda como visualizar e editar campos de metadados de PDF como título, autor e palavras-chave. Ferramenta gratuita no navegador, sem cadastro.",
    content: metadataPt,
  },
  fr: {
    slug: "how-to-edit-pdf-metadata",
    category: "Outils PDF",
    date: "2026-05-20",
    readTime: "4 min",
    title: "Comment Modifier les Métadonnées PDF : Titre, Auteur et Plus (2026)",
    description: "Apprenez à afficher et modifier les champs de métadonnées PDF comme le titre, l'auteur et les mots-clés. Outil gratuit dans le navigateur, sans inscription.",
    content: metadataFr,
  },
  de: {
    slug: "how-to-edit-pdf-metadata",
    category: "PDF-Tools",
    date: "2026-05-20",
    readTime: "4 Min",
    title: "PDF-Metadaten bearbeiten: Titel, Autor & Mehr (2026)",
    description: "Erfahren Sie, wie Sie PDF-Metadatenfelder wie Titel, Autor und Stichwörter anzeigen und bearbeiten. Kostenloses Browser-Tool, keine Registrierung.",
    content: metadataDe,
  },
};
