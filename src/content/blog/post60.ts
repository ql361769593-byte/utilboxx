// Blog post: How to Compute File Checksum
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const checksumEn = `## What is a file checksum?

A file checksum is a fixed-size string computed from the contents of a file using a cryptographic hash function. Even a tiny change to the file produces a completely different checksum. The most common algorithms are MD5, SHA-1, SHA-256, and SHA-512.

Checksums serve as digital fingerprints. They let you verify that a file was downloaded correctly, that it has not been tampered with, and that two copies of a file are identical. Software distributors publish checksums alongside their downloads, and operating systems use them internally to detect data corruption.

## Common use cases

- **Verifying downloads**: Comparing the checksum of a downloaded file with one published by the author
- **Detecting tampering**: Ensuring a file has not been modified in transit or storage
- **Backup verification**: Confirming that backed-up files match the originals
- **Deduplication**: Identifying identical files in a storage system
- **Build systems**: Tracking the integrity of artifacts and dependencies

## Method 1: Use UtilBoxx's free file checksum tool (Recommended)

Our [file checksum tool](/en/tools/crypto/checksum) computes MD5, SHA-1, SHA-256, and SHA-512 hashes of any file in your browser, with no upload. Here is how to use it:

1. Go to [utilboxx.com/en/tools/crypto/checksum](/en/tools/crypto/checksum)
2. Drop your file into the upload area (or click to select)
3. The hashes for all algorithms appear as they are computed
4. Copy any hash with one click
5. Use the "Compare" field to check against a known checksum

**Why this method works**:
- Files are processed entirely in your browser — never uploaded
- Supports MD5, SHA-1, SHA-256, and SHA-512 in parallel
- Works with files of any size (uses streaming)
- Built-in comparison against a published hash
- Mobile-friendly with drag-and-drop

## Method 2: Use a built-in command line tool

On Linux, macOS, and modern Windows (PowerShell):

\`\`\`bash
# MD5
md5sum file.zip         # Linux/macOS
md5 file.zip            # macOS
Get-FileHash file.zip -Algorithm MD5  # PowerShell

# SHA-256
sha256sum file.zip      # Linux/macOS
shasum -a 256 file.zip  # macOS
Get-FileHash file.zip -Algorithm SHA256  # PowerShell
\`\`\`

These commands are pre-installed and work on any file. They are the most common way to verify downloads in documentation.

## Method 3: Use a language library

In Python:

\`\`\`python
import hashlib
with open("file.zip", "rb") as f:
    print(hashlib.sha256(f.read()).hexdigest())
\`\`\`

In Node.js:

\`\`\`javascript
const crypto = require('crypto');
const fs = require('fs');
const data = fs.readFileSync('file.zip');
console.log(crypto.createHash('sha256').update(data).digest('hex'));
\`\`\`

For large files, stream the data in chunks to avoid loading the whole file in memory.

## Frequently asked questions

### Is MD5 still safe to use?
For verifying file integrity (not security), MD5 is fine. For cryptographic purposes — like password storage or digital signatures — MD5 is broken and should not be used. Use SHA-256 or SHA-512 for security-sensitive applications.

### What is the difference between SHA-1, SHA-256, and SHA-512?
They differ in output size and security. SHA-1 produces 160-bit hashes; SHA-256 produces 256-bit hashes; SHA-512 produces 512-bit hashes. Larger hashes are more collision-resistant. SHA-1 is deprecated for security use.

### How do I verify a downloaded file?
Compute the checksum of the downloaded file using the same algorithm and compare it to the value published on the download site. If they match, the file is intact. If not, the file is corrupted or tampered with.

### Can two different files have the same checksum?
In theory, yes — this is called a collision. For SHA-256, finding a collision is computationally infeasible. MD5 and SHA-1 have known practical collisions, which is why they are not recommended for security.

## Conclusion

File checksums are a simple, powerful way to verify integrity. For a private, in-browser tool that works on any file, the [UtilBoxx file checksum tool](/en/tools/crypto/checksum) is the easiest way to compute and compare hashes.`;

const checksumZh = `## 什么是文件校验和？

文件校验和是用加密哈希函数对文件内容计算得到的固定长度字符串。即使文件有一丁点改动，校验和也会完全不同。最常用的算法有 MD5、SHA-1、SHA-256 和 SHA-512。

校验和相当于数字指纹。它能让你验证文件下载是否正确、是否被篡改，以及两份文件是否完全相同。软件发布者会在下载链接旁公布校验和，操作系统内部也用它们来检测数据损坏。

## 常见使用场景

- **验证下载**：比较下载文件的校验和与作者公布的数值
- **检测篡改**：确保文件在传输或存储过程中没有被修改
- **备份验证**：确认备份的文件与原件一致
- **去重**：在存储系统中识别相同文件
- **构建系统**：追踪构件和依赖的完整性

## 方法 1：使用 UtilBoxx 免费文件校验和工具（推荐）

我们的 [文件校验和工具](/zh/tools/crypto/checksum) 能在浏览器中计算任意文件的 MD5、SHA-1、SHA-256、SHA-512 哈希，不上传文件。步骤如下：

1. 访问 [utilboxx.com/zh/tools/crypto/checksum](/zh/tools/crypto/checksum)
2. 把文件拖入上传区域（或点击选择）
3. 各算法的哈希在计算时即时显示
4. 一键复制任意哈希
5. 用"对比"字段检查是否匹配已知校验和

**这个方法的优势**：
- 文件完全在浏览器中处理——不上传
- 并行支持 MD5、SHA-1、SHA-256、SHA-512
- 支持任意大小文件（流式处理）
- 内置与已发布哈希的对比功能
- 移动端友好，支持拖放

## 方法 2：使用内置命令行工具

在 Linux、macOS 和现代 Windows（PowerShell）上：

\`\`\`bash
# MD5
md5sum file.zip         # Linux/macOS
md5 file.zip            # macOS
Get-FileHash file.zip -Algorithm MD5  # PowerShell

# SHA-256
sha256sum file.zip      # Linux/macOS
shasum -a 256 file.zip  # macOS
Get-FileHash file.zip -Algorithm SHA256  # PowerShell
\`\`\`

这些命令是预装的，可处理任何文件。它们是文档中验证下载最常用的方式。

## 方法 3：使用语言库

Python：

\`\`\`python
import hashlib
with open("file.zip", "rb") as f:
    print(hashlib.sha256(f.read()).hexdigest())
\`\`\`

Node.js：

\`\`\`javascript
const crypto = require('crypto');
const fs = require('fs');
const data = fs.readFileSync('file.zip');
console.log(crypto.createHash('sha256').update(data).digest('hex'));
\`\`\`

对大文件，可以分块流式处理，避免一次性把整个文件读入内存。

## 常见问题

### MD5 还安全吗？
用于验证文件完整性（不是安全目的）时 MD5 是没问题的。但用于密码学用途——比如密码存储或数字签名——MD5 已被攻破，不应再使用。安全敏感的应用请使用 SHA-256 或 SHA-512。

### SHA-1、SHA-256、SHA-512 有什么区别？
它们的输出长度和安全性不同。SHA-1 输出 160 位哈希；SHA-256 输出 256 位；SHA-512 输出 512 位。更长的哈希抗碰撞能力更强。SHA-1 在安全场景下已不推荐。

### 如何验证下载的文件？
用同样的算法计算下载文件的校验和，与下载页公布的数值对比。匹配说明文件完好；不匹配则文件已损坏或被篡改。

### 两个不同文件会有相同校验和吗？
理论上会——这叫碰撞。对 SHA-256，找到碰撞在计算上不可行。MD5 和 SHA-1 已经存在实际碰撞，所以不建议用于安全。

## 结论

文件校验和是验证完整性的简单而强大的方法。想要一个在浏览器内、隐私友好、可处理任意文件的工具，[UtilBoxx 文件校验和工具](/zh/tools/crypto/checksum) 是计算和对比哈希最简单的方式。`;

const checksumJa = `## ファイルチェックサムとは？

ファイルチェックサムは、暗号化ハッシュ関数を使ってファイル内容から計算される固定長の文字列です。ファイルがほんの少しでも変われば、チェックサムも完全に変わります。最も一般的なアルゴリズムは MD5、SHA-1、SHA-256、SHA-512 です。

チェックサムはデジタル指紋のようなものです。ファイルが正しくダウンロードされたか、改竄されていないか、2 つのコピーが同一かを確認できます。ソフトウェア配布者はダウンロードと共にチェックサムを公開し、OS も内部でデータ破損検出に使っています。

## よくある用途

- **ダウンロード検証**：ダウンロードしたファイルのチェックサムと作者が公開した値を比較する
- **改竄検出**：転送中や保存中にファイルが変更されていないか確認する
- **バックアップ検証**：バックアップしたファイルが原本と一致しているか確認する
- **重複排除**：ストレージシステムで同一ファイルを識別する
- **ビルドシステム**：成果物や依存関係の整合性を追跡する

## 方法 1：UtilBoxx の無料ファイルチェックサムツールを使う（推奨）

当社の [ファイルチェックサムツール](/ja/tools/crypto/checksum) は、任意のファイルの MD5、SHA-1、SHA-256、SHA-512 をブラウザで計算し、アップロードは発生しません。手順は次のとおりです：

1. [utilboxx.com/ja/tools/crypto/checksum](/ja/tools/crypto/checksum) にアクセス
2. ファイルをアップロード領域にドロップ（またはクリックして選択）
3. 各アルゴリズムのハッシュが計算され次第表示される
4. ワンクリックで任意のハッシュをコピー
5.「比較」フィールドで既知のチェックサムと照合

**この方法の長所**：
- ファイルは完全にブラウザ内で処理され、アップロードされない
- MD5、SHA-1、SHA-256、SHA-512 を並列サポート
- あらゆるサイズに対応（ストリーミング処理）
- 公開ハッシュとの比較機能を内蔵
- モバイル対応でドラッグ＆ドロップ対応

## 方法 2：組み込みコマンドラインツールを使う

Linux、macOS、モダン Windows（PowerShell）：

\`\`\`bash
# MD5
md5sum file.zip         # Linux/macOS
md5 file.zip            # macOS
Get-FileHash file.zip -Algorithm MD5  # PowerShell

# SHA-256
sha256sum file.zip      # Linux/macOS
shasum -a 256 file.zip  # macOS
Get-FileHash file.zip -Algorithm SHA256  # PowerShell
\`\`\`

これらのコマンドはプリインストールで、どんなファイルにも使えます。ドキュメントでダウンロード検証する際の最も一般的な方法です。

## 方法 3：言語ライブラリを使う

Python：

\`\`\`python
import hashlib
with open("file.zip", "rb") as f:
    print(hashlib.sha256(f.read()).hexdigest())
\`\`\`

Node.js：

\`\`\`javascript
const crypto = require('crypto');
const fs = require('fs');
const data = fs.readFileSync('file.zip');
console.log(crypto.createHash('sha256').update(data).digest('hex'));
\`\`\`

大きなファイルではメモリにロードせず、データをチャンク単位でストリーミング処理してください。

## よくある質問

### MD5 は今でも安全ですか？
ファイルの整合性確認（セキュリティ目的でない用途）では MD5 で問題ありません。パスワード保存や電子署名といった暗号学的用途では MD5 は破られており、使用すべきではありません。セキュリティが重要な用途では SHA-256 か SHA-512 を使用してください。

### SHA-1、SHA-256、SHA-512 の違いは？
出力サイズとセキュリティが異なります。SHA-1 は 160 ビット、SHA-256 は 256 ビット、SHA-512 は 512 ビットのハッシュを出力します。長いハッシュほど衝突耐性が強くなります。SHA-1 はセキュリティ用途では非推奨です。

### ダウンロードしたファイルを検証するには？
同じアルゴリズムでダウンロードファイルのチェックサムを計算し、ダウンロードページで公開されている値と比較します。一致すればファイルは正常、一致しなければ破損または改竄されています。

### 異なる 2 つのファイルが同じチェックサムを持つことはありますか？
理論上はあり得ます — これを衝突と呼びます。SHA-256 では衝突を見つけることは計算上不可能です。MD5 と SHA-1 には実際の衝突が知られており、セキュリティ目的には推奨されません。

## 結論

ファイルチェックサムは整合性を確認するシンプルで強力な方法です。ブラウザ内、プライバシー重視、任意サイズのファイルに対応するツールとしては、[UtilBoxx のファイルチェックサムツール](/ja/tools/crypto/checksum) がハッシュ計算と照合に最も手軽です。`;

const checksumEs = `## ¿Qué es un checksum de archivo?

Un checksum de archivo es una cadena de tamaño fijo calculada a partir del contenido de un archivo mediante una función hash criptográfica. Incluso un cambio minúsculo en el archivo produce un checksum completamente diferente. Los algoritmos más comunes son MD5, SHA-1, SHA-256 y SHA-512.

Los checksums actúan como huellas digitales. Permiten verificar que un archivo se descargó correctamente, que no fue alterado, y que dos copias son idénticas. Los distribuidores de software publican checksums junto a sus descargas, y los sistemas operativos los usan internamente para detectar corrupción de datos.

## Casos de uso comunes

- **Verificar descargas**: comparar el checksum de un archivo descargado con el publicado por el autor
- **Detectar alteraciones**: asegurar que un archivo no se ha modificado en tránsito o almacenamiento
- **Verificar backups**: confirmar que los archivos respaldados coinciden con los originales
- **Deduplicación**: identificar archivos idénticos en un sistema de almacenamiento
- **Sistemas de build**: rastrear la integridad de artefactos y dependencias

## Método 1: Usa la herramienta de checksum gratuita de UtilBoxx (Recomendado)

Nuestra [herramienta de checksum de archivos](/es/tools/crypto/checksum) calcula hashes MD5, SHA-1, SHA-256 y SHA-512 de cualquier archivo en tu navegador, sin subirlo. Así se usa:

1. Ve a [utilboxx.com/es/tools/crypto/checksum](/es/tools/crypto/checksum)
2. Suelta tu archivo en el área de carga (o haz clic para seleccionar)
3. Los hashes para todos los algoritmos aparecen según se calculan
4. Copia cualquier hash con un clic
5. Usa el campo "Comparar" para verificar contra un checksum conocido

**Por qué funciona este método**:
- Los archivos se procesan por completo en tu navegador — nunca se suben
- Soporta MD5, SHA-1, SHA-256 y SHA-512 en paralelo
- Funciona con archivos de cualquier tamaño (usa streaming)
- Comparación integrada contra un hash publicado
- Adaptado a móvil con arrastrar y soltar

## Método 2: Usa una herramienta de línea de comandos integrada

En Linux, macOS y Windows moderno (PowerShell):

\`\`\`bash
# MD5
md5sum file.zip         # Linux/macOS
md5 file.zip            # macOS
Get-FileHash file.zip -Algorithm MD5  # PowerShell

# SHA-256
sha256sum file.zip      # Linux/macOS
shasum -a 256 file.zip  # macOS
Get-FileHash file.zip -Algorithm SHA256  # PowerShell
\`\`\`

Estos comandos están preinstalados y funcionan con cualquier archivo. Son la forma más habitual de verificar descargas en la documentación.

## Método 3: Usa una librería en tu lenguaje

En Python:

\`\`\`python
import hashlib
with open("file.zip", "rb") as f:
    print(hashlib.sha256(f.read()).hexdigest())
\`\`\`

En Node.js:

\`\`\`javascript
const crypto = require('crypto');
const fs = require('fs');
const data = fs.readFileSync('file.zip');
console.log(crypto.createHash('sha256').update(data).digest('hex'));
\`\`\`

Para archivos grandes, procesa los datos en chunks para no cargarlos enteros en memoria.

## Preguntas frecuentes

### ¿MD5 sigue siendo seguro?
Para verificar integridad de archivos (no seguridad), MD5 está bien. Para fines criptográficos — como almacenamiento de contraseñas o firmas digitales — MD5 está roto y no debe usarse. Usa SHA-256 o SHA-512 para aplicaciones sensibles a la seguridad.

### ¿Cuál es la diferencia entre SHA-1, SHA-256 y SHA-512?
Difieren en tamaño de salida y seguridad. SHA-1 produce hashes de 160 bits; SHA-256 de 256 bits; SHA-512 de 512 bits. Los hashes más grandes son más resistentes a colisiones. SHA-1 está obsoleto para uso de seguridad.

### ¿Cómo verifico un archivo descargado?
Calcula el checksum del archivo descargado usando el mismo algoritmo y compáralo con el valor publicado en el sitio de descarga. Si coinciden, el archivo está intacto. Si no, está corrupto o alterado.

### ¿Pueden dos archivos distintos tener el mismo checksum?
En teoría, sí — esto se llama colisión. Para SHA-256, encontrar una colisión es computacionalmente inviable. MD5 y SHA-1 tienen colisiones prácticas conocidas, por lo que no se recomiendan para seguridad.

## Conclusión

Los checksums de archivo son una forma simple y potente de verificar integridad. Para una herramienta privada y en el navegador que funcione con cualquier archivo, la [herramienta de checksum de UtilBoxx](/es/tools/crypto/checksum) es la forma más fácil de calcular y comparar hashes.`;

const checksumPt = `## O que é um checksum de arquivo?

Um checksum de arquivo é uma sequência de tamanho fixo calculada a partir do conteúdo de um arquivo usando uma função hash criptográfica. Mesmo uma mudança mínima no arquivo produz um checksum completamente diferente. Os algoritmos mais comuns são MD5, SHA-1, SHA-256 e SHA-512.

Checksums funcionam como impressões digitais. Permitem verificar que um arquivo foi baixado corretamente, que não foi adulterado e que duas cópias são idênticas. Distribuidores de software publicam checksums junto com seus downloads, e sistemas operacionais os usam internamente para detectar corrupção de dados.

## Casos de uso comuns

- **Verificar downloads**: comparar o checksum de um arquivo baixado com o publicado pelo autor
- **Detectar adulterações**: garantir que um arquivo não foi modificado em trânsito ou em armazenamento
- **Verificação de backup**: confirmar que os arquivos copiados batem com os originais
- **Deduplicação**: identificar arquivos idênticos em um sistema de armazenamento
- **Sistemas de build**: rastrear a integridade de artefatos e dependências

## Método 1: Use a ferramenta de checksum gratuita do UtilBoxx (Recomendado)

Nossa [ferramenta de checksum de arquivo](/pt/tools/crypto/checksum) calcula hashes MD5, SHA-1, SHA-256 e SHA-512 de qualquer arquivo no seu navegador, sem upload. Veja como usar:

1. Vá para [utilboxx.com/pt/tools/crypto/checksum](/pt/tools/crypto/checksum)
2. Solte seu arquivo na área de upload (ou clique para selecionar)
3. Os hashes de todos os algoritmos aparecem conforme são calculados
4. Copie qualquer hash com um clique
5. Use o campo "Comparar" para checar contra um checksum conhecido

**Por que este método funciona**:
- Os arquivos são processados inteiramente no seu navegador — nunca são enviados
- Suporta MD5, SHA-1, SHA-256 e SHA-512 em paralelo
- Funciona com arquivos de qualquer tamanho (usa streaming)
- Comparação interna contra um hash publicado
- Adaptado para celular com arrastar e soltar

## Método 2: Use uma ferramenta de linha de comando integrada

No Linux, macOS e Windows moderno (PowerShell):

\`\`\`bash
# MD5
md5sum file.zip         # Linux/macOS
md5 file.zip            # macOS
Get-FileHash file.zip -Algorithm MD5  # PowerShell

# SHA-256
sha256sum file.zip      # Linux/macOS
shasum -a 256 file.zip  # macOS
Get-FileHash file.zip -Algorithm SHA256  # PowerShell
\`\`\`

Esses comandos vêm pré-instalados e funcionam em qualquer arquivo. São a forma mais comum de verificar downloads na documentação.

## Método 3: Use uma biblioteca na sua linguagem

Em Python:

\`\`\`python
import hashlib
with open("file.zip", "rb") as f:
    print(hashlib.sha256(f.read()).hexdigest())
\`\`\`

Em Node.js:

\`\`\`javascript
const crypto = require('crypto');
const fs = require('fs');
const data = fs.readFileSync('file.zip');
console.log(crypto.createHash('sha256').update(data).digest('hex'));
\`\`\`

Para arquivos grandes, processe os dados em chunks para não carregar tudo na memória.

## Perguntas frequentes

### O MD5 ainda é seguro?
Para verificar integridade de arquivos (não segurança), o MD5 serve. Para fins criptográficos — como armazenamento de senhas ou assinaturas digitais — o MD5 está quebrado e não deve ser usado. Use SHA-256 ou SHA-512 para aplicações sensíveis em segurança.

### Qual a diferença entre SHA-1, SHA-256 e SHA-512?
Diferem em tamanho de saída e segurança. SHA-1 gera hashes de 160 bits; SHA-256 de 256 bits; SHA-512 de 512 bits. Hashes maiores são mais resistentes a colisões. SHA-1 é considerado obsoleto para uso em segurança.

### Como verifico um arquivo baixado?
Calcule o checksum do arquivo baixado usando o mesmo algoritmo e compare com o valor publicado no site de download. Se baterem, o arquivo está íntegro. Se não, está corrompido ou adulterado.

### Dois arquivos diferentes podem ter o mesmo checksum?
Em teoria sim — isso se chama colisão. Para SHA-256, encontrar uma colisão é computacionalmente inviável. MD5 e SHA-1 têm colisões práticas conhecidas, por isso não são recomendados para segurança.

## Conclusão

Checksums de arquivo são uma forma simples e poderosa de verificar integridade. Para uma ferramenta privada, no navegador, que funcione em qualquer arquivo, a [ferramenta de checksum do UtilBoxx](/pt/tools/crypto/checksum) é a forma mais fácil de calcular e comparar hashes.`;

const checksumFr = `## Qu'est-ce qu'une somme de contrôle de fichier ?

Une somme de contrôle (checksum) est une chaîne de taille fixe calculée à partir du contenu d'un fichier via une fonction de hachage cryptographique. Le moindre changement dans le fichier produit une somme complètement différente. Les algorithmes les plus courants sont MD5, SHA-1, SHA-256 et SHA-512.

Les sommes de contrôle servent d'empreintes digitales. Elles permettent de vérifier qu'un fichier a été téléchargé correctement, qu'il n'a pas été altéré, et que deux copies sont identiques. Les éditeurs de logiciels publient des sommes de contrôle à côté de leurs téléchargements, et les systèmes d'exploitation les utilisent en interne pour détecter la corruption.

## Cas d'usage courants

- **Vérifier des téléchargements** : comparer la somme d'un fichier téléchargé avec celle publiée par l'auteur
- **Détecter les altérations** : s'assurer qu'un fichier n'a pas été modifié en transit ou en stockage
- **Vérification de sauvegarde** : confirmer que les fichiers sauvegardés correspondent aux originaux
- **Déduplication** : identifier des fichiers identiques dans un système de stockage
- **Systèmes de build** : suivre l'intégrité des artefacts et dépendances

## Méthode 1 : Utilisez l'outil de checksum gratuit d'UtilBoxx (Recommandé)

Notre [outil de checksum de fichier](/fr/tools/crypto/checksum) calcule les hachages MD5, SHA-1, SHA-256 et SHA-512 de tout fichier dans votre navigateur, sans téléversement. Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/crypto/checksum](/fr/tools/crypto/checksum)
2. Déposez votre fichier dans la zone de dépôt (ou cliquez pour le choisir)
3. Les hachages de tous les algorithmes s'affichent au fur et à mesure
4. Copiez n'importe quel hachage en un clic
5. Utilisez le champ « Comparer » pour vérifier contre une somme connue

**Pourquoi cette méthode fonctionne** :
- Les fichiers sont traités entièrement dans votre navigateur — jamais téléversés
- Supporte MD5, SHA-1, SHA-256 et SHA-512 en parallèle
- Fonctionne avec des fichiers de toute taille (streaming)
- Comparaison intégrée contre un hachage publié
- Adapté au mobile avec glisser-déposer

## Méthode 2 : Utilisez un outil en ligne de commande intégré

Sur Linux, macOS et Windows moderne (PowerShell) :

\`\`\`bash
# MD5
md5sum file.zip         # Linux/macOS
md5 file.zip            # macOS
Get-FileHash file.zip -Algorithm MD5  # PowerShell

# SHA-256
sha256sum file.zip      # Linux/macOS
shasum -a 256 file.zip  # macOS
Get-FileHash file.zip -Algorithm SHA256  # PowerShell
\`\`\`

Ces commandes sont préinstallées et fonctionnent sur tout fichier. C'est la façon la plus courante de vérifier des téléchargements dans la documentation.

## Méthode 3 : Utilisez une bibliothèque dans votre langage

En Python :

\`\`\`python
import hashlib
with open("file.zip", "rb") as f:
    print(hashlib.sha256(f.read()).hexdigest())
\`\`\`

En Node.js :

\`\`\`javascript
const crypto = require('crypto');
const fs = require('fs');
const data = fs.readFileSync('file.zip');
console.log(crypto.createHash('sha256').update(data).digest('hex'));
\`\`\`

Pour les gros fichiers, traitez les données par blocs pour ne pas tout charger en mémoire.

## Questions fréquentes

### MD5 est-il encore sûr ?
Pour vérifier l'intégrité d'un fichier (hors sécurité), MD5 convient. Pour des usages cryptographiques — comme le stockage de mots de passe ou les signatures numériques — MD5 est cassé et ne doit pas être utilisé. Préférez SHA-256 ou SHA-512 pour les applications sensibles.

### Quelle est la différence entre SHA-1, SHA-256 et SHA-512 ?
Ils diffèrent par la taille de sortie et la sécurité. SHA-1 produit des hachages de 160 bits ; SHA-256 de 256 bits ; SHA-512 de 512 bits. Les hachages plus longs sont plus résistants aux collisions. SHA-1 est obsolète pour un usage de sécurité.

### Comment vérifier un fichier téléchargé ?
Calculez la somme de contrôle du fichier téléchargé avec le même algorithme et comparez-la à la valeur publiée sur le site de téléchargement. Si elles correspondent, le fichier est intact. Sinon, il est corrompu ou altéré.

### Deux fichiers différents peuvent-ils avoir la même somme ?
En théorie, oui — c'est ce qu'on appelle une collision. Pour SHA-256, trouver une collision est informatiquement irréalisable. MD5 et SHA-1 ont des collisions pratiques connues, c'est pourquoi ils ne sont pas recommandés pour la sécurité.

## Conclusion

Les sommes de contrôle de fichier sont un moyen simple et puissant de vérifier l'intégrité. Pour un outil privé, dans le navigateur, qui fonctionne sur tout fichier, l'[outil de checksum d'UtilBoxx](/fr/tools/crypto/checksum) est la façon la plus simple de calculer et comparer des hachages.`;

const checksumDe = `## Was ist eine Datei-Prüfsumme?

Eine Datei-Prüfsumme ist eine Zeichenkette fester Länge, die aus dem Inhalt einer Datei mithilfe einer kryptografischen Hash-Funktion berechnet wird. Selbst die kleinste Änderung an der Datei erzeugt eine völlig andere Prüfsumme. Die gängigsten Algorithmen sind MD5, SHA-1, SHA-256 und SHA-512.

Prüfsummen dienen als digitale Fingerabdrücke. Sie ermöglichen die Überprüfung, dass eine Datei korrekt heruntergeladen wurde, nicht manipuliert wurde und dass zwei Kopien identisch sind. Softwareanbieter veröffentlichen Prüfsummen neben ihren Downloads, und Betriebssysteme nutzen sie intern, um Datenkorruption zu erkennen.

## Häufige Anwendungsfälle

- **Downloads prüfen**: Prüfsumme einer heruntergeladenen Datei mit der vom Autor veröffentlichten vergleichen
- **Manipulationen erkennen**: Sicherstellen, dass eine Datei beim Transfer oder Speichern nicht verändert wurde
- **Backup-Verifikation**: Bestätigen, dass gesicherte Dateien mit den Originalen übereinstimmen
- **Deduplizierung**: Identische Dateien in einem Speichersystem erkennen
- **Build-Systeme**: Integrität von Artefakten und Abhängigkeiten verfolgen

## Methode 1: Das kostenlose Prüfsummen-Tool von UtilBoxx verwenden (Empfohlen)

Unser [Datei-Prüfsummen-Tool](/de/tools/crypto/checksum) berechnet MD5-, SHA-1-, SHA-256- und SHA-512-Hashes jeder Datei in Ihrem Browser, ohne Upload. So verwenden Sie es:

1. Gehen Sie zu [utilboxx.com/de/tools/crypto/checksum](/de/tools/crypto/checksum)
2. Ziehen Sie Ihre Datei in den Upload-Bereich (oder klicken Sie zur Auswahl)
3. Die Hashes aller Algorithmen erscheinen während der Berechnung
4. Kopieren Sie jeden Hash mit einem Klick
5. Verwenden Sie das „Vergleichen"-Feld, um gegen eine bekannte Prüfsumme zu prüfen

**Warum diese Methode funktioniert**:
- Dateien werden vollständig im Browser verarbeitet — kein Upload
- Unterstützt MD5, SHA-1, SHA-256 und SHA-512 parallel
- Funktioniert mit Dateien jeder Größe (Streaming)
- Eingebauter Vergleich gegen einen veröffentlichten Hash
- Mobilfreundlich mit Drag & Drop

## Methode 2: Integriertes Kommandozeilen-Tool nutzen

Auf Linux, macOS und modernem Windows (PowerShell):

\`\`\`bash
# MD5
md5sum file.zip         # Linux/macOS
md5 file.zip            # macOS
Get-FileHash file.zip -Algorithm MD5  # PowerShell

# SHA-256
sha256sum file.zip      # Linux/macOS
shasum -a 256 file.zip  # macOS
Get-FileHash file.zip -Algorithm SHA256  # PowerShell
\`\`\`

Diese Befehle sind vorinstalliert und arbeiten mit jeder Datei. Sie sind die gängigste Methode, Downloads in der Dokumentation zu prüfen.

## Methode 3: Eine Bibliothek in Ihrer Sprache nutzen

In Python:

\`\`\`python
import hashlib
with open("file.zip", "rb") as f:
    print(hashlib.sha256(f.read()).hexdigest())
\`\`\`

In Node.js:

\`\`\`javascript
const crypto = require('crypto');
const fs = require('fs');
const data = fs.readFileSync('file.zip');
console.log(crypto.createHash('sha256').update(data).digest('hex'));
\`\`\`

Für große Dateien verarbeiten Sie die Daten chunkweise, um sie nicht komplett in den Speicher zu laden.

## Häufig gestellte Fragen

### Ist MD5 noch sicher?
Für die Integritätsprüfung von Dateien (nicht für Sicherheit) ist MD5 in Ordnung. Für kryptografische Zwecke — wie Passwortspeicherung oder digitale Signaturen — ist MD5 gebrochen und sollte nicht verwendet werden. Nutzen Sie SHA-256 oder SHA-512 für sicherheitskritische Anwendungen.

### Was ist der Unterschied zwischen SHA-1, SHA-256 und SHA-512?
Sie unterscheiden sich in Ausgabegröße und Sicherheit. SHA-1 erzeugt 160-Bit-Hashes; SHA-256 erzeugt 256-Bit-Hashes; SHA-512 erzeugt 512-Bit-Hashes. Längere Hashes sind kollisionsresistenter. SHA-1 ist für Sicherheitszwecke veraltet.

### Wie verifiziere ich eine heruntergeladene Datei?
Berechnen Sie die Prüfsumme der heruntergeladenen Datei mit demselben Algorithmus und vergleichen Sie sie mit dem auf der Download-Seite veröffentlichten Wert. Stimmen sie überein, ist die Datei intakt. Andernfalls ist sie beschädigt oder manipuliert.

### Können zwei verschiedene Dateien dieselbe Prüfsumme haben?
Theoretisch ja — das nennt man Kollision. Für SHA-256 ist das Auffinden einer Kollision rechnerisch unmöglich. MD5 und SHA-1 haben bekannte praktische Kollisionen, weshalb sie für Sicherheit nicht empfohlen werden.

## Fazit

Datei-Prüfsummen sind ein einfaches, leistungsfähiges Mittel zur Integritätsprüfung. Für ein privates, browserbasiertes Tool, das mit jeder Datei funktioniert, ist das [Prüfsummen-Tool von UtilBoxx](/de/tools/crypto/checksum) die einfachste Möglichkeit, Hashes zu berechnen und zu vergleichen.`;

export const fileChecksumPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-compute-file-checksum",
    category: "Crypto Tools",
    date: "2026-05-20",
    readTime: "7 min",
    title: "How to Compute a File Checksum (MD5, SHA-1, SHA-256)",
    description: "Learn how to compute and verify file checksums in your browser. Supports MD5, SHA-1, SHA-256, and SHA-512.",
    content: checksumEn,
  },
  zh: {
    slug: "how-to-compute-file-checksum",
    category: "加密工具",
    date: "2026-05-20",
    readTime: "7 分钟",
    title: "如何计算文件校验和（MD5、SHA-1、SHA-256）",
    description: "学习如何在浏览器中计算并验证文件校验和。支持 MD5、SHA-1、SHA-256 和 SHA-512。",
    content: checksumZh,
  },
  ja: {
    slug: "how-to-compute-file-checksum",
    category: "暗号ツール",
    date: "2026-05-20",
    readTime: "7 分",
    title: "ファイルチェックサムの計算方法（MD5、SHA-1、SHA-256）",
    description: "ブラウザ内でファイルのチェックサムを計算・検証する方法を学びます。MD5、SHA-1、SHA-256、SHA-512 に対応。",
    content: checksumJa,
  },
  es: {
    slug: "how-to-compute-file-checksum",
    category: "Herramientas Cripto",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Cómo calcular el checksum de un archivo (MD5, SHA-1, SHA-256)",
    description: "Aprende a calcular y verificar checksums de archivo en tu navegador. Soporta MD5, SHA-1, SHA-256 y SHA-512.",
    content: checksumEs,
  },
  pt: {
    slug: "how-to-compute-file-checksum",
    category: "Ferramentas Cripto",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Como calcular o checksum de um arquivo (MD5, SHA-1, SHA-256)",
    description: "Aprenda a calcular e verificar checksums de arquivo no seu navegador. Suporta MD5, SHA-1, SHA-256 e SHA-512.",
    content: checksumPt,
  },
  fr: {
    slug: "how-to-compute-file-checksum",
    category: "Outils Crypto",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Comment calculer un checksum de fichier (MD5, SHA-1, SHA-256)",
    description: "Apprenez à calculer et vérifier des checksums de fichier dans votre navigateur. Supporte MD5, SHA-1, SHA-256 et SHA-512.",
    content: checksumFr,
  },
  de: {
    slug: "how-to-compute-file-checksum",
    category: "Krypto-Tools",
    date: "2026-05-20",
    readTime: "7 Min",
    title: "Datei-Prüfsumme berechnen (MD5, SHA-1, SHA-256)",
    description: "Lernen Sie, Datei-Prüfsummen im Browser zu berechnen und zu prüfen. Unterstützt MD5, SHA-1, SHA-256 und SHA-512.",
    content: checksumDe,
  },
};
