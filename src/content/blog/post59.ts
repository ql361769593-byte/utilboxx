// Blog post: How to Generate HMAC Signatures
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const hmacEn = `## What is an HMAC signature?

HMAC (Hash-based Message Authentication Code) is a way to verify both the integrity and authenticity of a message. It uses a cryptographic hash function (typically SHA-256) combined with a shared secret key to produce a unique signature for a given input. If even a single byte of the message changes, the signature changes too.

HMAC is widely used in API authentication, webhook verification, JWT signing, and secure communication protocols. Unlike a plain hash, HMAC requires a key, which means only parties who hold the secret can produce or verify the signature.

## Common use cases

- **Webhook verification**: Confirming that an incoming request came from a known sender
- **API request signing**: Letting a server verify that a request was issued by a known client
- **JWT signing**: Producing the signature segment of a JSON Web Token
- **File integrity**: Detecting tampering in transit or storage
- **OAuth 1.0a and AWS Signature V4**: Classical and modern request signing schemes

## Method 1: Use UtilBoxx's free HMAC generator (Recommended)

Our [HMAC signature generator](/en/tools/crypto/hmac) supports HMAC-SHA-256, HMAC-SHA-1, and HMAC-SHA-512, and produces hex or Base64 output. Here is how to use it:

1. Go to [utilboxx.com/en/tools/crypto/hmac](/en/tools/crypto/hmac)
2. Enter your message and secret key
3. Choose the algorithm (SHA-256 is the default)
4. Pick the output encoding (hex or Base64)
5. Copy the generated signature with one click

**Why this method works**:
- Runs entirely in your browser — secrets never leave your device
- Supports the most common HMAC algorithms
- Live updates as you type
- Mobile-friendly
- 100% free, no signup, no ads

## Method 2: Use OpenSSL on the command line

The \`openssl\` command is available on Linux, macOS, and Windows (with Git Bash or WSL):

\`\`\`bash
echo -n "message" | openssl dgst -sha256 -hmac "mysecretkey"
\`\`\`

This produces a hex-encoded HMAC-SHA-256 signature. Replace \`sha256\` with \`sha1\` or \`sha512\` for other algorithms.

## Method 3: Use a language library

In Node.js, the built-in \`crypto\` module handles HMAC:

\`\`\`javascript
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'mysecretkey');
hmac.update('message');
console.log(hmac.digest('hex'));
\`\`\`

In Python:

\`\`\`python
import hmac, hashlib
print(hmac.new(b"mysecretkey", b"message", hashlib.sha256).hexdigest())
\`\`\`

In Go:

\`\`\`go
package main
import ("crypto/hmac"; "crypto/sha256"; "encoding/hex"; "fmt")
func main() {
    mac := hmac.New(sha256.New, []byte("mysecretkey"))
    mac.Write([]byte("message"))
    fmt.Println(hex.EncodeToString(mac.Sum(nil)))
}
\`\`\`

## Frequently asked questions

### Is HMAC the same as a digital signature?
No. HMAC uses a shared secret, while a digital signature uses asymmetric cryptography (public/private key). HMAC is faster and simpler, but you must securely share the secret with all parties who need to verify the signature.

### Which hash function should I use?
HMAC-SHA-256 is the modern default. It is widely supported, secure, and fast. HMAC-SHA-1 is considered legacy and is only used for compatibility with old systems. HMAC-SHA-512 offers higher security for very sensitive applications.

### Can a HMAC signature be reversed?
No. The signature is a one-way function. An attacker cannot recover the message or the key from a signature, but they can verify guesses if they suspect the message. Use long, random keys to maximize security.

### What happens if the key is leaked?
A leaked key allows attackers to forge valid signatures for any message, completely breaking the authentication. Treat HMAC keys like passwords: store them securely, rotate them regularly, and never commit them to source control.

## Conclusion

HMAC is a foundational tool for secure APIs and message integrity. For a quick, in-browser generator, the [UtilBoxx HMAC signature tool](/en/tools/crypto/hmac) is the easiest way to compute and verify signatures.`;

const hmacZh = `## 什么是 HMAC 签名？

HMAC（基于哈希的消息认证码）是一种验证消息完整性和真实性的方法。它结合了加密哈希函数（通常是 SHA-256）和一个共享密钥，为给定的输入生成唯一的签名。哪怕消息中只有一个字节改变，签名也会变化。

HMAC 广泛应用于 API 认证、Webhook 验证、JWT 签名和安全通信协议。HMAC 与普通哈希不同，它需要密钥，这意味着只有持有密钥的参与方才能生成或验证签名。

## 常见使用场景

- **Webhook 验证**：确认收到的请求来自已知发送方
- **API 请求签名**：让服务器验证请求由已知客户端发出
- **JWT 签名**：生成 JSON Web Token 的签名段
- **文件完整性**：检测传输或存储过程中的篡改
- **OAuth 1.0a 与 AWS Signature V4**：经典与现代的请求签名方案

## 方法 1：使用 UtilBoxx 免费 HMAC 生成器（推荐）

我们的 [HMAC 签名生成器](/zh/tools/crypto/hmac) 支持 HMAC-SHA-256、HMAC-SHA-1、HMAC-SHA-512，并输出 hex 或 Base64。步骤如下：

1. 访问 [utilboxx.com/zh/tools/crypto/hmac](/zh/tools/crypto/hmac)
2. 输入消息和密钥
3. 选择算法（默认 SHA-256）
4. 选择输出编码（hex 或 Base64）
5. 一键复制生成的签名

**这个方法的优势**：
- 完全在浏览器中运行——密钥不离开你的设备
- 支持最常用的 HMAC 算法
- 输入时实时更新
- 移动端友好
- 100% 免费、无需注册、无广告

## 方法 2：使用命令行 OpenSSL

\`openssl\` 命令在 Linux、macOS 和 Windows（带 Git Bash 或 WSL）都可用：

\`\`\`bash
echo -n "message" | openssl dgst -sha256 -hmac "mysecretkey"
\`\`\`

这会输出一个 hex 编码的 HMAC-SHA-256 签名。把 \`sha256\` 换成 \`sha1\` 或 \`sha512\` 可使用其它算法。

## 方法 3：使用语言库

在 Node.js 中，内置的 \`crypto\` 模块处理 HMAC：

\`\`\`javascript
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'mysecretkey');
hmac.update('message');
console.log(hmac.digest('hex'));
\`\`\`

在 Python 中：

\`\`\`python
import hmac, hashlib
print(hmac.new(b"mysecretkey", b"message", hashlib.sha256).hexdigest())
\`\`\`

在 Go 中：

\`\`\`go
package main
import ("crypto/hmac"; "crypto/sha256"; "encoding/hex"; "fmt")
func main() {
    mac := hmac.New(sha256.New, []byte("mysecretkey"))
    mac.Write([]byte("message"))
    fmt.Println(hex.EncodeToString(mac.Sum(nil)))
}
\`\`\`

## 常见问题

### HMAC 和数字签名一样吗？
不一样。HMAC 使用共享密钥，而数字签名使用非对称加密（公钥/私钥）。HMAC 更快、更简单，但你必须安全地把密钥共享给所有需要验证签名的参与方。

### 应该用哪种哈希函数？
HMAC-SHA-256 是现代默认。它被广泛支持、安全、快速。HMAC-SHA-1 属于遗留方案，仅用于老系统兼容。HMAC-SHA-512 为非常敏感的应用提供更高安全性。

### HMAC 签名能反推吗？
不能。签名是单向函数。攻击者无法从签名中恢复消息或密钥，但如果他们怀疑消息内容，可以验证猜测。使用长且随机的密钥可最大化安全性。

### 密钥泄露会怎样？
密钥泄露后，攻击者可以为任何消息伪造有效签名，认证机制彻底失效。像对待密码一样对待 HMAC 密钥：安全存储、定期轮换、绝不入库到源码。

## 结论

HMAC 是安全 API 和消息完整性的基础工具。想要一个快速、浏览器内的生成器，[UtilBoxx HMAC 签名工具](/zh/tools/crypto/hmac) 是计算和验证签名最简单的方式。`;

const hmacJa = `## HMAC 署名とは？

HMAC（Hash-based Message Authentication Code）は、メッセージの完全性と信頼性を検証する手法です。暗号学的ハッシュ関数（通常 SHA-256）と共有秘密鍵を組み合わせて、入力に対して一意の署名を生成します。メッセージが 1 バイトでも変われば署名も変わります。

HMAC は API 認証、Webhook 検証、JWT 署名、安全な通信プロトコルで広く使われています。通常のハッシュと異なり、HMAC は鍵を要するため、署名を作成・検証できるのは鍵を持つ当事者だけです。

## よくある用途

- **Webhook 検証**：受信リクエストが既知の送信者からのものだと確認する
- **API リクエスト署名**：サーバーがリクエストを既知のクライアントが発行したものだと検証できるようにする
- **JWT 署名**：JSON Web Token の署名セグメントを生成する
- **ファイル完全性**：転送中や保存中の改竄を検出する
- **OAuth 1.0a と AWS Signature V4**：古典的・現代的なリクエスト署名方式

## 方法 1：UtilBoxx の無料 HMAC ジェネレーターを使う（推奨）

当社の [HMAC 署名ジェネレーター](/ja/tools/crypto/hmac) は HMAC-SHA-256、HMAC-SHA-1、HMAC-SHA-512 をサポートし、hex または Base64 を出力します。手順は次のとおりです：

1. [utilboxx.com/ja/tools/crypto/hmac](/ja/tools/crypto/hmac) にアクセス
2. メッセージと秘密鍵を入力
3. アルゴリズムを選択（既定は SHA-256）
4. 出力エンコーディングを選択（hex または Base64）
5. ワンクリックで生成された署名をコピー

**この方法の長所**：
- 完全にブラウザ内で動作 — 鍵は端末から出ない
- 最も一般的な HMAC アルゴリズムに対応
- 入力中にリアルタイム更新
- モバイル対応
- 100% 無料、登録不要、広告なし

## 方法 2：コマンドラインの OpenSSL を使う

\`openssl\` コマンドは Linux、macOS、Windows（Git Bash または WSL）で使えます：

\`\`\`bash
echo -n "message" | openssl dgst -sha256 -hmac "mysecretkey"
\`\`\`

hex エンコードされた HMAC-SHA-256 署名が出力されます。\`sha256\` を \`sha1\` や \`sha512\` に置き換えると他のアルゴリズムになります。

## 方法 3：言語ライブラリを使う

Node.js の組み込み \`crypto\` モジュールが HMAC を扱います：

\`\`\`javascript
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'mysecretkey');
hmac.update('message');
console.log(hmac.digest('hex'));
\`\`\`

Python の場合：

\`\`\`python
import hmac, hashlib
print(hmac.new(b"mysecretkey", b"message", hashlib.sha256).hexdigest())
\`\`\`

Go の場合：

\`\`\`go
package main
import ("crypto/hmac"; "crypto/sha256"; "encoding/hex"; "fmt")
func main() {
    mac := hmac.New(sha256.New, []byte("mysecretkey"))
    mac.Write([]byte("message"))
    fmt.Println(hex.EncodeToString(mac.Sum(nil)))
}
\`\`\`

## よくある質問

### HMAC はデジタル署名と同じですか？
いいえ。HMAC は共有鍵を使いますが、デジタル署名は非対称暗号（公開鍵／秘密鍵）を使います。HMAC の方が高速でシンプルですが、署名を検証する必要があるすべての当事者と鍵を安全に共有する必要があります。

### どのハッシュ関数を使うべきですか？
HMAC-SHA-256 が現代の標準です。広く対応し、安全、高速です。HMAC-SHA-1 はレガシーで、古いシステムとの互換性のためだけに使われます。HMAC-SHA-512 は特に機密性の高い用途に高い安全性を提供します。

### HMAC 署名は逆算できますか？
いいえ。署名は一方向関数です。攻撃者は署名からメッセージや鍵を復元できませんが、メッセージを推測できる場合は推測を検証できます。長くランダムな鍵を使って安全性を最大化してください。

### 鍵が漏れたらどうなりますか？
鍵が漏れると、攻撃者はあらゆるメッセージに対して有効な署名を偽造できるようになり、認証が完全に破綻します。HMAC の鍵はパスワードと同様に扱い、安全に保管し、定期的にローテーションし、ソース管理には絶対にコミットしないでください。

## 結論

HMAC は安全な API とメッセージ完全性の基礎ツールです。ブラウザ内で素早く計算するなら、[UtilBoxx の HMAC 署名ツール](/ja/tools/crypto/hmac) が最も手軽です。`;

const hmacEs = `## ¿Qué es una firma HMAC?

HMAC (Hash-based Message Authentication Code) es una forma de verificar la integridad y autenticidad de un mensaje. Usa una función hash criptográfica (normalmente SHA-256) combinada con una clave secreta compartida para producir una firma única para una entrada dada. Si cambia un solo byte del mensaje, la firma también cambia.

HMAC se usa ampliamente en autenticación de API, verificación de webhooks, firma de JWT y protocolos de comunicación seguros. A diferencia de un hash simple, HMAC requiere una clave, lo que significa que solo las partes que poseen el secreto pueden producir o verificar la firma.

## Casos de uso comunes

- **Verificación de webhooks**: confirmar que una solicitud entrante viene de un emisor conocido
- **Firma de solicitudes API**: permitir que un servidor verifique que la solicitud la emitió un cliente conocido
- **Firma de JWT**: producir el segmento de firma de un JSON Web Token
- **Integridad de archivos**: detectar manipulaciones en tránsito o en almacenamiento
- **OAuth 1.0a y AWS Signature V4**: esquemas de firma clásicos y modernos

## Método 1: Usa el generador HMAC gratuito de UtilBoxx (Recomendado)

Nuestro [generador de firmas HMAC](/es/tools/crypto/hmac) admite HMAC-SHA-256, HMAC-SHA-1 y HMAC-SHA-512, y produce salida en hex o Base64. Así se usa:

1. Ve a [utilboxx.com/es/tools/crypto/hmac](/es/tools/crypto/hmac)
2. Introduce tu mensaje y clave secreta
3. Elige el algoritmo (SHA-256 por defecto)
4. Elige el formato de salida (hex o Base64)
5. Copia la firma generada con un clic

**Por qué funciona este método**:
- Se ejecuta por completo en tu navegador — los secretos nunca salen de tu dispositivo
- Soporta los algoritmos HMAC más comunes
- Actualización en vivo al escribir
- Adaptado a móvil
- 100% gratis, sin registro, sin anuncios

## Método 2: Usa OpenSSL en la línea de comandos

El comando \`openssl\` está disponible en Linux, macOS y Windows (con Git Bash o WSL):

\`\`\`bash
echo -n "message" | openssl dgst -sha256 -hmac "mysecretkey"
\`\`\`

Esto produce una firma HMAC-SHA-256 en hex. Sustituye \`sha256\` por \`sha1\` o \`sha512\` para otros algoritmos.

## Método 3: Usa una librería en tu lenguaje

En Node.js, el módulo \`crypto\` integrado maneja HMAC:

\`\`\`javascript
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'mysecretkey');
hmac.update('message');
console.log(hmac.digest('hex'));
\`\`\`

En Python:

\`\`\`python
import hmac, hashlib
print(hmac.new(b"mysecretkey", b"message", hashlib.sha256).hexdigest())
\`\`\`

En Go:

\`\`\`go
package main
import ("crypto/hmac"; "crypto/sha256"; "encoding/hex"; "fmt")
func main() {
    mac := hmac.New(sha256.New, []byte("mysecretkey"))
    mac.Write([]byte("message"))
    fmt.Println(hex.EncodeToString(mac.Sum(nil)))
}
\`\`\`

## Preguntas frecuentes

### ¿HMAC es lo mismo que una firma digital?
No. HMAC usa una clave compartida, mientras que una firma digital usa criptografía asimétrica (clave pública/privada). HMAC es más rápido y simple, pero debes compartir el secreto de forma segura con todas las partes que necesiten verificar la firma.

### ¿Qué función hash debo usar?
HMAC-SHA-256 es el estándar moderno. Es muy compatible, seguro y rápido. HMAC-SHA-1 se considera legacy y solo se usa por compatibilidad con sistemas antiguos. HMAC-SHA-512 ofrece mayor seguridad para aplicaciones muy sensibles.

### ¿Se puede revertir una firma HMAC?
No. La firma es una función unidireccional. Un atacante no puede recuperar el mensaje ni la clave a partir de la firma, pero puede verificar conjeturas si sospecha el mensaje. Usa claves largas y aleatorias para maximizar la seguridad.

### ¿Qué pasa si la clave se filtra?
Una clave filtrada permite a los atacantes falsificar firmas válidas para cualquier mensaje, rompiendo completamente la autenticación. Trata las claves HMAC como contraseñas: guárdalas de forma segura, rótalas con regularidad y nunca las subas al control de código fuente.

## Conclusión

HMAC es una herramienta fundamental para API seguras e integridad de mensajes. Para un generador rápido en el navegador, la [herramienta de firma HMAC de UtilBoxx](/es/tools/crypto/hmac) es la forma más fácil de calcular y verificar firmas.`;

const hmacPt = `## O que é uma assinatura HMAC?

HMAC (Hash-based Message Authentication Code) é uma forma de verificar a integridade e a autenticidade de uma mensagem. Ele usa uma função hash criptográfica (normalmente SHA-256) combinada com uma chave secreta compartilhada para produzir uma assinatura única para uma entrada dada. Se um único byte da mensagem mudar, a assinatura também muda.

HMAC é amplamente usado em autenticação de API, verificação de webhook, assinatura de JWT e protocolos de comunicação segura. Diferente de um hash simples, HMAC requer uma chave, o que significa que só as partes que detêm o segredo podem produzir ou verificar a assinatura.

## Casos de uso comuns

- **Verificação de webhook**: confirmar que uma requisição recebida veio de um remetente conhecido
- **Assinatura de requisições API**: permitir que um servidor verifique que a requisição foi emitida por um cliente conhecido
- **Assinatura de JWT**: produzir o segmento de assinatura de um JSON Web Token
- **Integridade de arquivos**: detectar adulterações em trânsito ou em armazenamento
- **OAuth 1.0a e AWS Signature V4**: esquemas de assinatura clássicos e modernos

## Método 1: Use o gerador HMAC gratuito do UtilBoxx (Recomendado)

Nosso [gerador de assinaturas HMAC](/pt/tools/crypto/hmac) suporta HMAC-SHA-256, HMAC-SHA-1 e HMAC-SHA-512, e produz saída em hex ou Base64. Veja como usar:

1. Vá para [utilboxx.com/pt/tools/crypto/hmac](/pt/tools/crypto/hmac)
2. Digite sua mensagem e chave secreta
3. Escolha o algoritmo (SHA-256 por padrão)
4. Escolha a codificação de saída (hex ou Base64)
5. Copie a assinatura gerada com um clique

**Por que este método funciona**:
- Roda inteiramente no seu navegador — segredos nunca saem do seu dispositivo
- Suporta os algoritmos HMAC mais comuns
- Atualiza ao vivo enquanto você digita
- Adaptado para celular
- 100% grátis, sem cadastro, sem anúncios

## Método 2: Use o OpenSSL na linha de comando

O comando \`openssl\` está disponível em Linux, macOS e Windows (com Git Bash ou WSL):

\`\`\`bash
echo -n "message" | openssl dgst -sha256 -hmac "mysecretkey"
\`\`\`

Isso produz uma assinatura HMAC-SHA-256 em hex. Substitua \`sha256\` por \`sha1\` ou \`sha512\` para outros algoritmos.

## Método 3: Use uma biblioteca na sua linguagem

Em Node.js, o módulo \`crypto\` embutido lida com HMAC:

\`\`\`javascript
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'mysecretkey');
hmac.update('message');
console.log(hmac.digest('hex'));
\`\`\`

Em Python:

\`\`\`python
import hmac, hashlib
print(hmac.new(b"mysecretkey", b"message", hashlib.sha256).hexdigest())
\`\`\`

Em Go:

\`\`\`go
package main
import ("crypto/hmac"; "crypto/sha256"; "encoding/hex"; "fmt")
func main() {
    mac := hmac.New(sha256.New, []byte("mysecretkey"))
    mac.Write([]byte("message"))
    fmt.Println(hex.EncodeToString(mac.Sum(nil)))
}
\`\`\`

## Perguntas frequentes

### HMAC é o mesmo que uma assinatura digital?
Não. HMAC usa uma chave compartilhada, enquanto uma assinatura digital usa criptografia assimétrica (chave pública/privada). HMAC é mais rápido e simples, mas você precisa compartilhar o segredo com segurança com todas as partes que precisam verificar a assinatura.

### Qual função hash devo usar?
HMAC-SHA-256 é o padrão moderno. É amplamente compatível, seguro e rápido. HMAC-SHA-1 é considerado legado e só é usado por compatibilidade com sistemas antigos. HMAC-SHA-512 oferece mais segurança para aplicações muito sensíveis.

### Uma assinatura HMAC pode ser revertida?
Não. A assinatura é uma função unidirecional. Um atacante não consegue recuperar a mensagem nem a chave a partir da assinatura, mas pode verificar palpites se suspeitar da mensagem. Use chaves longas e aleatórias para maximizar a segurança.

### O que acontece se a chave vazar?
Uma chave vazada permite que invasores forjem assinaturas válidas para qualquer mensagem, quebrando completamente a autenticação. Trate chaves HMAC como senhas: armazene com segurança, faça rotação regular e nunca faça commit no controle de versão.

## Conclusão

HMAC é uma ferramenta fundamental para APIs seguras e integridade de mensagens. Para um gerador rápido no navegador, a [ferramenta de assinatura HMAC do UtilBoxx](/pt/tools/crypto/hmac) é a forma mais fácil de calcular e verificar assinaturas.`;

const hmacFr = `## Qu'est-ce qu'une signature HMAC ?

HMAC (Hash-based Message Authentication Code) est un moyen de vérifier à la fois l'intégrité et l'authenticité d'un message. Il utilise une fonction de hachage cryptographique (généralement SHA-256) combinée à une clé secrète partagée pour produire une signature unique pour une entrée donnée. Si un seul octet du message change, la signature change aussi.

HMAC est largement utilisé pour l'authentification d'API, la vérification de webhooks, la signature de JWT et les protocoles de communication sécurisés. Contrairement à un simple hachage, HMAC nécessite une clé, ce qui signifie que seules les parties détenant le secret peuvent produire ou vérifier la signature.

## Cas d'usage courants

- **Vérification de webhooks** : confirmer qu'une requête entrante provient d'un émetteur connu
- **Signature de requêtes API** : permettre à un serveur de vérifier qu'une requête a été émise par un client connu
- **Signature de JWT** : produire le segment de signature d'un JSON Web Token
- **Intégrité de fichiers** : détecter les altérations en transit ou en stockage
- **OAuth 1.0a et AWS Signature V4** : schémas de signature classiques et modernes

## Méthode 1 : Utilisez le générateur HMAC gratuit d'UtilBoxx (Recommandé)

Notre [générateur de signatures HMAC](/fr/tools/crypto/hmac) prend en charge HMAC-SHA-256, HMAC-SHA-1 et HMAC-SHA-512, et produit une sortie en hex ou Base64. Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/crypto/hmac](/fr/tools/crypto/hmac)
2. Saisissez votre message et votre clé secrète
3. Choisissez l'algorithme (SHA-256 par défaut)
4. Choisissez l'encodage de sortie (hex ou Base64)
5. Copiez la signature générée en un clic

**Pourquoi cette méthode fonctionne** :
- Tourne entièrement dans votre navigateur — les secrets ne quittent jamais votre appareil
- Prend en charge les algorithmes HMAC les plus courants
- Mise à jour en direct à la frappe
- Adapté au mobile
- 100% gratuit, sans inscription, sans publicité

## Méthode 2 : Utilisez OpenSSL en ligne de commande

La commande \`openssl\` est disponible sous Linux, macOS et Windows (avec Git Bash ou WSL) :

\`\`\`bash
echo -n "message" | openssl dgst -sha256 -hmac "mysecretkey"
\`\`\`

Cela produit une signature HMAC-SHA-256 en hex. Remplacez \`sha256\` par \`sha1\` ou \`sha512\` pour d'autres algorithmes.

## Méthode 3 : Utilisez une bibliothèque dans votre langage

En Node.js, le module \`crypto\` intégré gère HMAC :

\`\`\`javascript
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'mysecretkey');
hmac.update('message');
console.log(hmac.digest('hex'));
\`\`\`

En Python :

\`\`\`python
import hmac, hashlib
print(hmac.new(b"mysecretkey", b"message", hashlib.sha256).hexdigest())
\`\`\`

En Go :

\`\`\`go
package main
import ("crypto/hmac"; "crypto/sha256"; "encoding/hex"; "fmt")
func main() {
    mac := hmac.New(sha256.New, []byte("mysecretkey"))
    mac.Write([]byte("message"))
    fmt.Println(hex.EncodeToString(mac.Sum(nil)))
}
\`\`\`

## Questions fréquentes

### HMAC est-il identique à une signature numérique ?
Non. HMAC utilise une clé partagée, alors qu'une signature numérique utilise la cryptographie asymétrique (clé publique/privée). HMAC est plus rapide et plus simple, mais vous devez partager le secret en toute sécurité avec toutes les parties qui doivent vérifier la signature.

### Quelle fonction de hachage dois-je utiliser ?
HMAC-SHA-256 est la valeur par défaut moderne. Il est largement pris en charge, sécurisé et rapide. HMAC-SHA-1 est considéré comme legacy et n'est utilisé que pour la compatibilité avec les anciens systèmes. HMAC-SHA-512 offre une sécurité accrue pour les applications très sensibles.

### Une signature HMAC peut-elle être inversée ?
Non. La signature est une fonction à sens unique. Un attaquant ne peut pas récupérer le message ni la clé à partir de la signature, mais il peut vérifier des hypothèses s'il suspecte le message. Utilisez des clés longues et aléatoires pour maximiser la sécurité.

### Que se passe-t-il si la clé fuite ?
Une clé qui fuite permet à des attaquants de forger des signatures valides pour n'importe quel message, brisant totalement l'authentification. Traitez les clés HMAC comme des mots de passe : stockez-les en sécurité, faites-les tourner régulièrement, et ne les committez jamais dans un dépôt de code.

## Conclusion

HMAC est un outil fondamental pour des API sécurisées et l'intégrité des messages. Pour un générateur rapide dans le navigateur, l'[outil de signature HMAC d'UtilBoxx](/fr/tools/crypto/hmac) est la façon la plus simple de calculer et vérifier des signatures.`;

const hmacDe = `## Was ist eine HMAC-Signatur?

HMAC (Hash-based Message Authentication Code) ist ein Verfahren, mit dem sich sowohl die Integrität als auch die Authentizität einer Nachricht prüfen lassen. Es kombiniert eine kryptografische Hash-Funktion (üblicherweise SHA-256) mit einem gemeinsamen geheimen Schlüssel, um für eine gegebene Eingabe eine eindeutige Signatur zu erzeugen. Ändert sich auch nur ein Byte der Nachricht, ändert sich auch die Signatur.

HMAC wird häufig für API-Authentifizierung, Webhook-Verifizierung, JWT-Signaturen und sichere Kommunikationsprotokolle verwendet. Anders als ein einfacher Hash benötigt HMAC einen Schlüssel — das bedeutet, nur Parteien, die das Geheimnis besitzen, können die Signatur erzeugen oder prüfen.

## Häufige Anwendungsfälle

- **Webhook-Verifizierung**: Bestätigen, dass eine eingehende Anfrage von einem bekannten Absender stammt
- **API-Anfragensignatur**: Einem Server ermöglichen zu prüfen, dass die Anfrage von einem bekannten Client stammt
- **JWT-Signatur**: Das Signatursegment eines JSON Web Tokens erzeugen
- **Dateiintegrität**: Manipulationen während der Übertragung oder Speicherung erkennen
- **OAuth 1.0a und AWS Signature V4**: klassische und moderne Anfragensignaturen

## Methode 1: Den kostenlosen HMAC-Generator von UtilBoxx verwenden (Empfohlen)

Unser [HMAC-Signatur-Generator](/de/tools/crypto/hmac) unterstützt HMAC-SHA-256, HMAC-SHA-1 und HMAC-SHA-512 und gibt hexadezimal oder Base64 aus. So verwenden Sie ihn:

1. Gehen Sie zu [utilboxx.com/de/tools/crypto/hmac](/de/tools/crypto/hmac)
2. Geben Sie Ihre Nachricht und den geheimen Schlüssel ein
3. Wählen Sie den Algorithmus (SHA-256 ist Standard)
4. Wählen Sie die Ausgabecodierung (hex oder Base64)
5. Kopieren Sie die erzeugte Signatur mit einem Klick

**Warum diese Methode funktioniert**:
- Läuft vollständig in Ihrem Browser — Geheimnisse verlassen Ihr Gerät nicht
- Unterstützt die gängigsten HMAC-Algorithmen
- Live-Aktualisierung beim Tippen
- Mobilfreundlich
- 100% kostenlos, keine Registrierung, keine Werbung

## Methode 2: OpenSSL auf der Kommandozeile

Der Befehl \`openssl\` ist unter Linux, macOS und Windows (mit Git Bash oder WSL) verfügbar:

\`\`\`bash
echo -n "message" | openssl dgst -sha256 -hmac "mysecretkey"
\`\`\`

Dies erzeugt eine hexadezimale HMAC-SHA-256-Signatur. Ersetzen Sie \`sha256\` durch \`sha1\` oder \`sha512\` für andere Algorithmen.

## Methode 3: Eine Bibliothek in Ihrer Sprache nutzen

In Node.js übernimmt das eingebaute \`crypto\`-Modul HMAC:

\`\`\`javascript
const crypto = require('crypto');
const hmac = crypto.createHmac('sha256', 'mysecretkey');
hmac.update('message');
console.log(hmac.digest('hex'));
\`\`\`

In Python:

\`\`\`python
import hmac, hashlib
print(hmac.new(b"mysecretkey", b"message", hashlib.sha256).hexdigest())
\`\`\`

In Go:

\`\`\`go
package main
import ("crypto/hmac"; "crypto/sha256"; "encoding/hex"; "fmt")
func main() {
    mac := hmac.New(sha256.New, []byte("mysecretkey"))
    mac.Write([]byte("message"))
    fmt.Println(hex.EncodeToString(mac.Sum(nil)))
}
\`\`\`

## Häufig gestellte Fragen

### Ist HMAC dasselbe wie eine digitale Signatur?
Nein. HMAC verwendet einen gemeinsamen Schlüssel, während eine digitale Signatur asymmetrische Kryptografie (öffentlicher/privater Schlüssel) nutzt. HMAC ist schneller und einfacher, aber Sie müssen das Geheimnis sicher mit allen Parteien teilen, die die Signatur prüfen müssen.

### Welche Hash-Funktion sollte ich verwenden?
HMAC-SHA-256 ist die moderne Standardwahl. Es ist weit verbreitet, sicher und schnell. HMAC-SHA-1 gilt als Legacy und wird nur noch aus Kompatibilitätsgründen mit alten Systemen verwendet. HMAC-SHA-512 bietet höhere Sicherheit für sehr sensible Anwendungen.

### Lässt sich eine HMAC-Signatur umkehren?
Nein. Die Signatur ist eine Einwegfunktion. Ein Angreifer kann weder die Nachricht noch den Schlüssel aus der Signatur ableiten, aber er kann Vermutungen prüfen, wenn er die Nachricht erahnt. Verwenden Sie lange, zufällige Schlüssel, um die Sicherheit zu maximieren.

### Was passiert, wenn der Schlüssel geleakt wird?
Ein geleakter Schlüssel erlaubt Angreifern, gültige Signaturen für beliebige Nachrichten zu fälschen — die Authentifizierung wird vollständig gebrochen. Behandeln Sie HMAC-Schlüssel wie Passwörter: sicher speichern, regelmäßig rotieren, niemals in die Versionsverwaltung committen.

## Fazit

HMAC ist ein Grundwerkzeug für sichere APIs und Nachrichtenintegrität. Für einen schnellen Generator im Browser ist das [HMAC-Signatur-Tool von UtilBoxx](/de/tools/crypto/hmac) die einfachste Möglichkeit, Signaturen zu berechnen und zu prüfen.`;

export const hmacGeneratorPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-generate-hmac-signatures",
    category: "Crypto Tools",
    date: "2026-05-20",
    readTime: "7 min",
    title: "How to Generate HMAC Signatures: SHA-256, SHA-1, SHA-512",
    description: "Learn how to generate and verify HMAC signatures for API requests, webhooks, and JWTs. Free in-browser tool.",
    content: hmacEn,
  },
  zh: {
    slug: "how-to-generate-hmac-signatures",
    category: "加密工具",
    date: "2026-05-20",
    readTime: "7 分钟",
    title: "如何生成 HMAC 签名：SHA-256、SHA-1、SHA-512",
    description: "学习如何为 API 请求、Webhook 和 JWT 生成与验证 HMAC 签名。免费浏览器内工具。",
    content: hmacZh,
  },
  ja: {
    slug: "how-to-generate-hmac-signatures",
    category: "暗号ツール",
    date: "2026-05-20",
    readTime: "7 分",
    title: "HMAC 署名の生成方法：SHA-256、SHA-1、SHA-512",
    description: "API リクエスト、Webhook、JWT のための HMAC 署名を生成・検証する方法を学びます。無料ブラウザ内ツール。",
    content: hmacJa,
  },
  es: {
    slug: "how-to-generate-hmac-signatures",
    category: "Herramientas Cripto",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Cómo generar firmas HMAC: SHA-256, SHA-1, SHA-512",
    description: "Aprende a generar y verificar firmas HMAC para solicitudes API, webhooks y JWTs. Herramienta gratuita en el navegador.",
    content: hmacEs,
  },
  pt: {
    slug: "how-to-generate-hmac-signatures",
    category: "Ferramentas Cripto",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Como gerar assinaturas HMAC: SHA-256, SHA-1, SHA-512",
    description: "Aprenda a gerar e verificar assinaturas HMAC para requisições de API, webhooks e JWTs. Ferramenta gratuita no navegador.",
    content: hmacPt,
  },
  fr: {
    slug: "how-to-generate-hmac-signatures",
    category: "Outils Crypto",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Comment générer des signatures HMAC : SHA-256, SHA-1, SHA-512",
    description: "Apprenez à générer et vérifier des signatures HMAC pour requêtes API, webhooks et JWT. Outil gratuit dans le navigateur.",
    content: hmacFr,
  },
  de: {
    slug: "how-to-generate-hmac-signatures",
    category: "Krypto-Tools",
    date: "2026-05-20",
    readTime: "7 Min",
    title: "HMAC-Signaturen erzeugen: SHA-256, SHA-1, SHA-512",
    description: "Lernen Sie, HMAC-Signaturen für API-Anfragen, Webhooks und JWTs zu erzeugen und zu prüfen. Kostenloses Browser-Tool.",
    content: hmacDe,
  },
};
