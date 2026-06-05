// Blog post: How to Decode JWT Tokens
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const jwtEn = `## What is a JWT and why decode it?

A JSON Web Token (JWT) is a compact, URL-safe token format used to transmit claims between two parties, most commonly between a client and a server. A JWT consists of three Base64URL-encoded parts separated by dots: the header, the payload, and the signature.

Decoding a JWT is the act of reading the header and payload to understand what claims it carries. This is essential for debugging authentication issues, inspecting tokens in API responses, or simply understanding what data is being sent on your behalf. It is important to know that decoding does **not** verify the signature — for that, you need the secret or public key from the issuing party.

## Common use cases

- **Debugging auth flows**: Inspecting tokens returned by login APIs
- **Auditing claims**: Checking the expiration, issuer, audience, and custom fields
- **Local development**: Reading tokens stored in localStorage or cookies
- **Learning**: Understanding how authentication works in modern web apps
- **Security reviews**: Spotting sensitive data accidentally included in tokens

## Method 1: Use UtilBoxx's free JWT decoder (Recommended)

Our [JWT decoder](/en/tools/crypto/jwt) parses any JWT and displays its header and payload in a readable format, with timestamps converted to human dates. Here is how to use it:

1. Go to [utilboxx.com/en/tools/crypto/jwt](/en/tools/crypto/jwt)
2. Paste your JWT into the input field
3. See the header and payload decoded instantly
4. Check expiration, issued-at, and other claims
5. Copy any section with one click

**Why this method works**:
- Runs entirely in your browser — token never leaves your device
- Auto-formats JSON for readability
- Highlights expired tokens and upcoming expirations
- Mobile-friendly with large text fields
- 100% free, no signup, no tracking

## Method 2: Use jwt.io

The website [jwt.io](https://jwt.io) (by Auth0) is a popular JWT playground. Paste a token, and it decodes the header and payload, optionally verifying the signature if you supply the secret. It is widely used and supports many libraries' algorithms.

## Method 3: Decode in your language of choice

In Node.js, with the \`jsonwebtoken\` library:

\`\`\`javascript
const jwt = require('jsonwebtoken');
const decoded = jwt.decode('eyJhbGciOi...', { complete: true });
console.log(decoded.header);
console.log(decoded.payload);
\`\`\`

In Python, with the \`PyJWT\` library:

\`\`\`python
import jwt
payload = jwt.decode("eyJhbGciOi...", options={"verify_signature": False})
print(payload)
\`\`\`

The \`verify_signature: False\` option is critical — it tells the library to decode without checking the signature, which is what you want for inspection.

## Frequently asked questions

### Is it safe to decode a JWT online?
Decoding is safe because the contents are not secret. They are only Base64URL-encoded, not encrypted. However, never paste production tokens into untrusted services if they might contain sensitive data. The UtilBoxx decoder runs locally in your browser, so the token never leaves your device.

### Can a decoded JWT be trusted?
No. Decoding shows the claims but does not verify the signature. A token can be decoded but not authentic. Always verify the signature using the issuer's secret or public key before trusting any claim.

### What is the difference between decoding and verifying?
Decoding reads the contents. Verifying uses a cryptographic key to confirm the token was issued by a trusted party and was not tampered with. For local inspection, decoding is enough. For security decisions, verification is required.

### What claims are commonly included in a JWT?
Standard claims include \`iss\` (issuer), \`sub\` (subject), \`aud\` (audience), \`exp\` (expiration), \`iat\` (issued at), and \`nbf\` (not before). Custom claims vary by application, such as \`role\`, \`email\`, or \`user_id\`.

## Conclusion

Decoding JWTs is a routine task for developers. For a fast, private, in-browser experience, the [UtilBoxx JWT decoder](/en/tools/crypto/jwt) is the easiest tool to keep in your bookmarks.`;

const jwtZh = `## 什么是 JWT？为什么要解码？

JSON Web Token（JWT）是一种紧凑、URL 安全的令牌格式，用于在两方之间传递声明（claims），最常见的是客户端和服务器之间。JWT 由三段 Base64URL 编码的部分组成，用点号分隔：头部（header）、载荷（payload）、签名（signature）。

解码 JWT 就是读取头部和载荷以了解它携带了哪些声明。这对调试认证问题、检查 API 响应中的令牌、或者理解"代表你发送了什么数据"至关重要。要注意：解码并**不会**校验签名——要做到这一点，你需要从签发方获取密钥或公钥。

## 常见使用场景

- **调试认证流程**：检查登录 API 返回的令牌
- **审计声明**：查看过期时间、签发者、受众和自定义字段
- **本地开发**：读取存储在 localStorage 或 cookie 中的令牌
- **学习**：理解现代 Web 应用中的认证机制
- **安全审查**：发现令牌中意外包含的敏感数据

## 方法 1：使用 UtilBoxx 免费 JWT 解码器（推荐）

我们的 [JWT 解码器](/zh/tools/crypto/jwt) 能解析任意 JWT，并以可读格式展示头部和载荷，时间戳会转换为人类可读的日期。步骤如下：

1. 访问 [utilboxx.com/zh/tools/crypto/jwt](/zh/tools/crypto/jwt)
2. 把 JWT 粘贴到输入框
3. 头部和载荷即时解码显示
4. 检查过期时间、签发时间等声明
5. 一键复制任意段落

**这个方法的优势**：
- 完全在浏览器中运行——令牌不离开你的设备
- 自动格式化 JSON 便于阅读
- 高亮显示已过期和即将过期的令牌
- 移动端友好，文本框大
- 100% 免费、无需注册、不追踪

## 方法 2：使用 jwt.io

[jwt.io](https://jwt.io)（由 Auth0 提供）是流行的 JWT 在线工具。粘贴令牌即可解码头部和载荷，如果你提供密钥，还能选择性地校验签名。它被广泛使用，并支持许多库的算法。

## 方法 3：用你熟悉的语言解码

在 Node.js 中，使用 \`jsonwebtoken\` 库：

\`\`\`javascript
const jwt = require('jsonwebtoken');
const decoded = jwt.decode('eyJhbGciOi...', { complete: true });
console.log(decoded.header);
console.log(decoded.payload);
\`\`\`

在 Python 中，使用 \`PyJWT\` 库：

\`\`\`python
import jwt
payload = jwt.decode("eyJhbGciOi...", options={"verify_signature": False})
print(payload)
\`\`\`

\`verify_signature: False\` 这个参数很关键——它告诉库只解码、不校验签名，这正是你做检查时想要的。

## 常见问题

### 在线解码 JWT 安全吗？
解码是安全的，因为内容并非秘密——它们只是 Base64URL 编码，不是加密。但请勿把生产环境令牌粘贴到不可信的服务中。UtilBoxx 解码器在浏览器本地运行，令牌不会离开你的设备。

### 解码出来的 JWT 能信任吗？
不能。解码只显示声明，不会校验签名。一个令牌可以被解码但并不合法。在信任任何声明之前，务必使用签发方的密钥或公钥来校验签名。

### 解码和验证有什么区别？
解码读取内容。验证使用加密密钥确认令牌由可信方签发且未被篡改。用于本地检查时，解码就够；用于安全决策时，必须验证。

### JWT 中通常包含哪些声明？
标准声明包括 \`iss\`（签发者）、\`sub\`（主题）、\`aud\`（受众）、\`exp\`（过期时间）、\`iat\`（签发时间）、\`nbf\`（生效时间）。自定义声明因应用而异，比如 \`role\`、\`email\`、\`user_id\`。

## 结论

解码 JWT 是开发者的日常任务。想要一个快速、私密、浏览器内的体验，把 [UtilBoxx JWT 解码器](/zh/tools/crypto/jwt) 加入书签是最简单的方式。`;

const jwtJa = `## JWT とは何か？なぜデコードするのか？

JSON Web Token (JWT) は、二者間でクレーム（claims）を伝送するためのコンパクトで URL セーフなトークン形式です。最も一般的にはクライアントとサーバー間で使用されます。JWT は 3 つの Base64URL エンコードされた部分をドットで区切った構造で、ヘッダー、ペイロード、署名から成ります。

JWT のデコードとは、ヘッダーとペイロードを読み取り、どのようなクレームが含まれているかを理解することです。認証フローのデバッグ、API レスポンスのトークン確認、あるいは「代わりにどんなデータが送られているのか」を理解するために不可欠です。重要なのは、デコードは**署名を検証しない**ということです。検証には発行側の秘密鍵または公開鍵が必要です。

## よくある用途

- **認証フローのデバッグ**：ログイン API が返すトークンを確認
- **クレームの監査**：有効期限、発行者、対象、カスタムフィールドの確認
- **ローカル開発**：localStorage や cookie に保存されたトークンを読む
- **学習**：モダン Web アプリの認証の仕組みを理解する
- **セキュリティレビュー**：トークンにうっかり含まれた機密データを発見

## 方法 1：UtilBoxx の無料 JWT デコーダーを使う（推奨）

当社の [JWT デコーダー](/ja/tools/crypto/jwt) は任意の JWT を解析し、ヘッダーとペイロードを読みやすい形式で表示し、タイムスタンプを人間の日付に変換します。手順は次のとおりです：

1. [utilboxx.com/ja/tools/crypto/jwt](/ja/tools/crypto/jwt) にアクセス
2. 入力欄に JWT を貼り付け
3. ヘッダーとペイロードが即座にデコード表示される
4. 有効期限、発行時刻、その他のクレームを確認
5. ワンクリックで任意のセクションをコピー

**この方法の長所**：
- 完全にブラウザ内で動作 — トークンは端末から出ない
- JSON を自動的に整形して可読化
- 期限切れ・期限間近のトークンをハイライト
- モバイル対応でテキスト入力欄が大きめ
- 100% 無料、登録不要、追跡なし

## 方法 2：jwt.io を使う

[jwt.io](https://jwt.io)（Auth0 提供）は人気の JWT プレイグラウンドです。トークンを貼り付けるとヘッダーとペイロードがデコードされ、秘密鍵を提供すれば署名の検証もできます。広く使われており、多くのライブラリのアルゴリズムに対応します。

## 方法 3：使い慣れた言語でデコードする

Node.js では \`jsonwebtoken\` ライブラリを使用：

\`\`\`javascript
const jwt = require('jsonwebtoken');
const decoded = jwt.decode('eyJhbGciOi...', { complete: true });
console.log(decoded.header);
console.log(decoded.payload);
\`\`\`

Python では \`PyJWT\` ライブラリを使用：

\`\`\`python
import jwt
payload = jwt.decode("eyJhbGciOi...", options={"verify_signature": False})
print(payload)
\`\`\`

\`verify_signature: False\` オプションは重要です — 署名を検証せずにデコードすることをライブラリに指示します。これは検査時にやりたいことです。

## よくある質問

### JWT をオンラインでデコードするのは安全ですか？
デコードは安全です。中身は秘密ではなく、Base64URL でエンコードされているだけです（暗号化ではない）。ただし、本番環境のトークンに機密データが含まれる可能性がある場合は、信頼できないサービスに貼り付けないでください。UtilBoxx のデコーダーはブラウザ内でローカルに動作するので、トークンは端末から出ません。

### デコードした JWT は信頼できますか？
いいえ。デコードはクレームを表示するだけで、署名は検証しません。トークンはデコードできても正当であるとは限りません。クレームを信頼する前に、必ず発行者の秘密鍵または公開鍵で署名を検証してください。

### デコードと検証の違いは？
デコードは内容を読みます。検証は暗号鍵を使ってトークンが信頼できる発行者によるもので、改竄されていないことを確認します。ローカル検査にはデコードで十分です。セキュリティ判断には検証が必要です。

### JWT にはどんなクレームがよく含まれますか？
標準クレームには \`iss\`（発行者）、\`sub\`（サブジェクト）、\`aud\`（オーディエンス）、\`exp\`（有効期限）、\`iat\`（発行時刻）、\`nbf\`（発効時刻）があります。カスタムクレームは \`role\`、\`email\`、\`user_id\` などアプリごとに異なります。

## 結論

JWT のデコードは開発者の日常業務です。高速でプライベートなブラウザ内体験には [UtilBoxx の JWT デコーダー](/ja/tools/crypto/jwt) をブックマークしておくと最も手軽です。`;

const jwtEs = `## ¿Qué es un JWT y por qué decodificarlo?

Un JSON Web Token (JWT) es un formato de token compacto y seguro para URL, usado para transmitir claims entre dos partes, normalmente un cliente y un servidor. Un JWT consta de tres partes codificadas en Base64URL separadas por puntos: el header, el payload y la signature.

Decodificar un JWT es leer el header y el payload para entender qué claims lleva. Es esencial para depurar flujos de autenticación, inspeccionar tokens en respuestas de API o simplemente entender qué datos se envían en tu nombre. Es importante saber que decodificar **no** verifica la firma: para eso necesitas la clave secreta o pública de la parte que emitió el token.

## Casos de uso comunes

- **Depurar flujos de auth**: inspeccionar tokens devueltos por APIs de login
- **Auditar claims**: comprobar expiración, emisor, audiencia y campos personalizados
- **Desarrollo local**: leer tokens guardados en localStorage o cookies
- **Aprendizaje**: entender cómo funciona la autenticación en apps web modernas
- **Revisiones de seguridad**: detectar datos sensibles incluidos por error en tokens

## Método 1: Usa el decodificador JWT gratuito de UtilBoxx (Recomendado)

Nuestro [decodificador JWT](/es/tools/crypto/jwt) analiza cualquier JWT y muestra su header y payload en un formato legible, con marcas de tiempo convertidas a fechas humanas. Así se usa:

1. Ve a [utilboxx.com/es/tools/crypto/jwt](/es/tools/crypto/jwt)
2. Pega tu JWT en el campo de entrada
3. El header y el payload se decodifican al instante
4. Comprueba la expiración, el emitido en, y otros claims
5. Copia cualquier sección con un clic

**Por qué funciona este método**:
- Se ejecuta por completo en tu navegador — el token nunca sale de tu dispositivo
- Formatea JSON automáticamente para legibilidad
- Resalta tokens caducados y próximos a caducar
- Adaptado a móvil con campos de texto grandes
- 100% gratis, sin registro, sin seguimiento

## Método 2: Usa jwt.io

El sitio [jwt.io](https://jwt.io) (de Auth0) es un playground JWT popular. Pega un token y decodifica header y payload, con la opción de verificar la firma si proporcionas la clave secreta. Es muy usado y soporta algoritmos de muchas librerías.

## Método 3: Decodifica en tu lenguaje favorito

En Node.js, con la librería \`jsonwebtoken\`:

\`\`\`javascript
const jwt = require('jsonwebtoken');
const decoded = jwt.decode('eyJhbGciOi...', { complete: true });
console.log(decoded.header);
console.log(decoded.payload);
\`\`\`

En Python, con la librería \`PyJWT\`:

\`\`\`python
import jwt
payload = jwt.decode("eyJhbGciOi...", options={"verify_signature": False})
print(payload)
\`\`\`

La opción \`verify_signature: False\` es clave: le indica a la librería que decodifique sin comprobar la firma, justo lo que quieres para inspeccionar.

## Preguntas frecuentes

### ¿Es seguro decodificar un JWT en línea?
Decodificar es seguro porque el contenido no es secreto: solo está codificado en Base64URL, no cifrado. Aun así, no pegues tokens de producción en servicios no confiables si pudieran contener datos sensibles. El decodificador de UtilBoxx se ejecuta localmente en tu navegador, así que el token nunca sale de tu dispositivo.

### ¿Se puede confiar en un JWT decodificado?
No. Decodificar muestra los claims pero no verifica la firma. Un token puede decodificarse y aun así no ser auténtico. Verifica siempre la firma con la clave secreta o pública del emisor antes de confiar en cualquier claim.

### ¿Cuál es la diferencia entre decodificar y verificar?
Decodificar lee el contenido. Verificar usa una clave criptográfica para confirmar que el token fue emitido por una parte confiable y que no fue alterado. Para inspección local basta con decodificar. Para decisiones de seguridad se requiere verificar.

### ¿Qué claims se incluyen normalmente en un JWT?
Los claims estándar incluyen \`iss\` (emisor), \`sub\` (sujeto), \`aud\` (audiencia), \`exp\` (expiración), \`iat\` (emitido en) y \`nbf\` (no antes de). Los claims personalizados varían según la aplicación, por ejemplo \`role\`, \`email\` o \`user_id\`.

## Conclusión

Decodificar JWTs es una tarea habitual para los desarrolladores. Para una experiencia rápida, privada y en el navegador, el [decodificador JWT de UtilBoxx](/es/tools/crypto/jwt) es la herramienta más fácil de tener en tus marcadores.`;

const jwtPt = `## O que é um JWT e por que decodificá-lo?

Um JSON Web Token (JWT) é um formato de token compacto e seguro para URL, usado para transmitir claims entre duas partes, geralmente um cliente e um servidor. Um JWT consiste em três partes codificadas em Base64URL separadas por pontos: o header, o payload e a signature.

Decodificar um JWT é ler o header e o payload para entender quais claims ele carrega. Isso é essencial para depurar fluxos de autenticação, inspecionar tokens em respostas de API ou simplesmente entender quais dados estão sendo enviados em seu nome. É importante saber que decodificar **não** verifica a assinatura — para isso você precisa da chave secreta ou pública da parte que emitiu o token.

## Casos de uso comuns

- **Depurar fluxos de auth**: inspecionar tokens devolvidos por APIs de login
- **Auditar claims**: conferir expiração, emissor, audiência e campos personalizados
- **Desenvolvimento local**: ler tokens guardados em localStorage ou cookies
- **Aprendizado**: entender como a autenticação funciona em apps web modernas
- **Revisões de segurança**: flagrar dados sensíveis incluídos por engano em tokens

## Método 1: Use o decodificador JWT gratuito do UtilBoxx (Recomendado)

Nosso [decodificador JWT](/pt/tools/crypto/jwt) analisa qualquer JWT e exibe seu header e payload em formato legível, com timestamps convertidos para datas humanas. Veja como usar:

1. Vá para [utilboxx.com/pt/tools/crypto/jwt](/pt/tools/crypto/jwt)
2. Cole seu JWT no campo de entrada
3. O header e o payload são decodificados na hora
4. Confira a expiração, emitido em, e outros claims
5. Copie qualquer seção com um clique

**Por que este método funciona**:
- Roda inteiramente no seu navegador — o token nunca sai do dispositivo
- Formata JSON automaticamente para legibilidade
- Destaca tokens expirados e prestes a expirar
- Adaptado para celular com campos de texto grandes
- 100% grátis, sem cadastro, sem rastreamento

## Método 2: Use o jwt.io

O site [jwt.io](https://jwt.io) (da Auth0) é um playground JWT popular. Cole um token e ele decodifica header e payload, com a opção de verificar a assinatura se você fornecer a chave secreta. É amplamente usado e suporta algoritmos de muitas bibliotecas.

## Método 3: Decodifique na sua linguagem favorita

Em Node.js, com a biblioteca \`jsonwebtoken\`:

\`\`\`javascript
const jwt = require('jsonwebtoken');
const decoded = jwt.decode('eyJhbGciOi...', { complete: true });
console.log(decoded.header);
console.log(decoded.payload);
\`\`\`

Em Python, com a biblioteca \`PyJWT\`:

\`\`\`python
import jwt
payload = jwt.decode("eyJhbGciOi...", options={"verify_signature": False})
print(payload)
\`\`\`

A opção \`verify_signature: False\` é essencial — diz à biblioteca para decodificar sem verificar a assinatura, exatamente o que você quer para inspeção.

## Perguntas frequentes

### É seguro decodificar um JWT online?
Decodificar é seguro porque o conteúdo não é secreto — está apenas codificado em Base64URL, não criptografado. Mesmo assim, não cole tokens de produção em serviços não confiáveis se puderem conter dados sensíveis. O decodificador do UtilBoxx roda localmente no navegador, então o token nunca sai do seu dispositivo.

### Um JWT decodificado pode ser confiável?
Não. Decodificar mostra os claims mas não verifica a assinatura. Um token pode ser decodificado e mesmo assim não ser autêntico. Sempre verifique a assinatura com a chave secreta ou pública do emissor antes de confiar em qualquer claim.

### Qual a diferença entre decodificar e verificar?
Decodificar lê o conteúdo. Verificar usa uma chave criptográfica para confirmar que o token foi emitido por uma parte confiável e não foi alterado. Para inspeção local basta decodificar. Para decisões de segurança é preciso verificar.

### Que claims são comumente incluídos em um JWT?
Os claims padrão incluem \`iss\` (emissor), \`sub\` (assunto), \`aud\` (audiência), \`exp\` (expiração), \`iat\` (emitido em) e \`nbf\` (não antes de). Claims personalizados variam por aplicação, como \`role\`, \`email\` ou \`user_id\`.

## Conclusão

Decodificar JWTs é uma tarefa rotineira para desenvolvedores. Para uma experiência rápida, privada e no navegador, o [decodificador JWT do UtilBoxx](/pt/tools/crypto/jwt) é a ferramenta mais fácil de manter nos favoritos.`;

const jwtFr = `## Qu'est-ce qu'un JWT et pourquoi le décoder ?

Un JSON Web Token (JWT) est un format de token compact et compatible URL, utilisé pour transmettre des claims entre deux parties, le plus souvent un client et un serveur. Un JWT est composé de trois parties encodées en Base64URL séparées par des points : le header, le payload et la signature.

Décoder un JWT consiste à lire le header et le payload pour comprendre quels claims il porte. C'est essentiel pour déboguer les flux d'authentification, inspecter les tokens dans les réponses d'API ou simplement comprendre quelles données sont envoyées en votre nom. À noter : décoder **ne** vérifie **pas** la signature — pour cela il faut la clé secrète ou publique de l'émetteur.

## Cas d'usage courants

- **Déboguer les flux d'auth** : inspecter les tokens renvoyés par les API de login
- **Auditer les claims** : vérifier expiration, émetteur, audience et champs personnalisés
- **Développement local** : lire les tokens stockés dans localStorage ou les cookies
- **Apprentissage** : comprendre l'authentification dans les apps web modernes
- **Revues de sécurité** : repérer des données sensibles placées par erreur dans les tokens

## Méthode 1 : Utilisez le décodeur JWT gratuit d'UtilBoxx (Recommandé)

Notre [décodeur JWT](/fr/tools/crypto/jwt) analyse tout JWT et affiche son header et son payload dans un format lisible, avec les timestamps convertis en dates humaines. Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/crypto/jwt](/fr/tools/crypto/jwt)
2. Collez votre JWT dans le champ d'entrée
3. Le header et le payload sont décodés instantanément
4. Vérifiez l'expiration, l'émission, et les autres claims
5. Copiez n'importe quelle section en un clic

**Pourquoi cette méthode fonctionne** :
- Tourne entièrement dans votre navigateur — le token ne quitte jamais votre appareil
- Formate le JSON automatiquement pour la lisibilité
- Met en évidence les tokens expirés et bientôt expirés
- Adapté au mobile avec de grands champs de texte
- 100% gratuit, sans inscription, sans suivi

## Méthode 2 : Utilisez jwt.io

Le site [jwt.io](https://jwt.io) (d'Auth0) est un playground JWT populaire. Collez un token et il décode header et payload, avec la possibilité de vérifier la signature si vous fournissez la clé secrète. Très utilisé, il prend en charge les algorithmes de nombreuses librairies.

## Méthode 3 : Décodez dans votre langage préféré

En Node.js, avec la librairie \`jsonwebtoken\` :

\`\`\`javascript
const jwt = require('jsonwebtoken');
const decoded = jwt.decode('eyJhbGciOi...', { complete: true });
console.log(decoded.header);
console.log(decoded.payload);
\`\`\`

En Python, avec la librairie \`PyJWT\` :

\`\`\`python
import jwt
payload = jwt.decode("eyJhbGciOi...", options={"verify_signature": False})
print(payload)
\`\`\`

L'option \`verify_signature: False\` est cruciale — elle indique à la librairie de décoder sans vérifier la signature, exactement ce que vous voulez pour inspecter.

## Questions fréquentes

### Est-il sûr de décoder un JWT en ligne ?
Décoder est sûr car le contenu n'est pas secret : il est simplement encodé en Base64URL, pas chiffré. Cela dit, ne collez pas de tokens de production dans des services non fiables s'ils peuvent contenir des données sensibles. Le décodeur d'UtilBoxx tourne en local dans votre navigateur, donc le token ne quitte jamais votre appareil.

### Peut-on se fier à un JWT décodé ?
Non. Le décodage affiche les claims mais ne vérifie pas la signature. Un token peut être décodé et ne pas être authentique pour autant. Vérifiez toujours la signature avec la clé secrète ou publique de l'émetteur avant de faire confiance à un claim.

### Quelle est la différence entre décoder et vérifier ?
Décoder lit le contenu. Vérifier utilise une clé cryptographique pour confirmer que le token a été émis par une partie de confiance et n'a pas été altéré. Pour une inspection locale, décoder suffit. Pour une décision de sécurité, la vérification est indispensable.

### Quels claims sont généralement inclus dans un JWT ?
Les claims standard incluent \`iss\` (émetteur), \`sub\` (sujet), \`aud\` (audience), \`exp\` (expiration), \`iat\` (émis à) et \`nbf\` (pas avant). Les claims personnalisés varient selon l'application, comme \`role\`, \`email\` ou \`user_id\`.

## Conclusion

Décoder des JWT est une tâche courante pour les développeurs. Pour une expérience rapide, privée et dans le navigateur, le [décodeur JWT d'UtilBoxx](/fr/tools/crypto/jwt) est l'outil le plus simple à garder dans vos favoris.`;

const jwtDe = `## Was ist ein JWT und warum dekodiert man es?

Ein JSON Web Token (JWT) ist ein kompaktes, URL-sicheres Token-Format, das verwendet wird, um Claims zwischen zwei Parteien zu übertragen — am häufigsten zwischen Client und Server. Ein JWT besteht aus drei Base64URL-kodierten Teilen, die durch Punkte getrennt sind: Header, Payload und Signature.

Ein JWT zu dekodieren bedeutet, den Header und das Payload zu lesen, um zu verstehen, welche Claims es trägt. Das ist wesentlich, um Authentifizierungsabläufe zu debuggen, Tokens in API-Antworten zu inspizieren oder zu verstehen, welche Daten in Ihrem Namen gesendet werden. Wichtig: Dekodieren **verifiziert die Signatur nicht** — dafür benötigen Sie den geheimen Schlüssel oder den öffentlichen Schlüssel der ausstellenden Partei.

## Häufige Anwendungsfälle

- **Auth-Flows debuggen**: Tokens prüfen, die von Login-APIs zurückgegeben werden
- **Claims auditieren**: Ablauf, Aussteller, Zielgruppe und benutzerdefinierte Felder prüfen
- **Lokale Entwicklung**: Tokens lesen, die in localStorage oder Cookies gespeichert sind
- **Lernen**: Authentifizierung in modernen Web-Apps verstehen
- **Sicherheitsreviews**: Versehentlich im Token enthaltene sensible Daten aufspüren

## Methode 1: Den kostenlosen JWT-Decoder von UtilBoxx verwenden (Empfohlen)

Unser [JWT-Decoder](/de/tools/crypto/jwt) parst jedes JWT und zeigt Header und Payload in lesbarem Format an, mit Zeitstempeln in menschliche Daten umgewandelt. So verwenden Sie ihn:

1. Gehen Sie zu [utilboxx.com/de/tools/crypto/jwt](/de/tools/crypto/jwt)
2. Fügen Sie Ihr JWT in das Eingabefeld ein
3. Header und Payload werden sofort dekodiert
4. Prüfen Sie Ablauf, Ausstellungszeit und andere Claims
5. Kopieren Sie jeden Abschnitt mit einem Klick

**Warum diese Methode funktioniert**:
- Läuft vollständig in Ihrem Browser — das Token verlässt Ihr Gerät nicht
- Formatiert JSON automatisch für Lesbarkeit
- Markiert abgelaufene und bald ablaufende Tokens
- Mobilfreundlich mit großen Textfeldern
- 100% kostenlos, keine Registrierung, kein Tracking

## Methode 2: jwt.io verwenden

Die Seite [jwt.io](https://jwt.io) (von Auth0) ist ein beliebter JWT-Spielplatz. Fügen Sie ein Token ein, und es dekodiert Header und Payload, optional mit Signaturprüfung, wenn Sie den geheimen Schlüssel angeben. Weit verbreitet und unterstützt Algorithmen vieler Bibliotheken.

## Methode 3: In Ihrer Lieblingssprache dekodieren

In Node.js mit der Bibliothek \`jsonwebtoken\`:

\`\`\`javascript
const jwt = require('jsonwebtoken');
const decoded = jwt.decode('eyJhbGciOi...', { complete: true });
console.log(decoded.header);
console.log(decoded.payload);
\`\`\`

In Python mit der Bibliothek \`PyJWT\`:

\`\`\`python
import jwt
payload = jwt.decode("eyJhbGciOiOi...", options={"verify_signature": False})
print(payload)
\`\`\`

Die Option \`verify_signature: False\` ist entscheidend — sie weist die Bibliothek an, ohne Signaturprüfung zu dekodieren, genau das, was Sie zur Inspektion wollen.

## Häufig gestellte Fragen

### Ist es sicher, ein JWT online zu dekodieren?
Dekodieren ist sicher, da der Inhalt nicht geheim ist — er ist nur Base64URL-kodiert, nicht verschlüsselt. Dennoch: Fügen Sie Produktions-Tokens nicht in nicht vertrauenswürdige Dienste ein, wenn diese sensible Daten enthalten könnten. Der UtilBoxx-Decoder läuft lokal im Browser, das Token verlässt Ihr Gerät nicht.

### Kann man einem dekodierten JWT vertrauen?
Nein. Dekodieren zeigt die Claims, verifiziert aber nicht die Signatur. Ein Token kann dekodierbar und trotzdem nicht authentisch sein. Verifizieren Sie immer die Signatur mit dem geheimen oder öffentlichen Schlüssel des Ausstellers, bevor Sie einem Claim vertrauen.

### Was ist der Unterschied zwischen Dekodieren und Verifizieren?
Dekodieren liest den Inhalt. Verifizieren nutzt einen kryptografischen Schlüssel, um zu bestätigen, dass das Token von einer vertrauenswürdigen Partei ausgestellt und nicht verändert wurde. Für lokale Inspektion reicht Dekodieren. Für Sicherheitsentscheidungen ist Verifikation nötig.

### Welche Claims sind üblicherweise in einem JWT enthalten?
Standardclaims sind \`iss\` (Aussteller), \`sub\` (Subjekt), \`aud\` (Zielgruppe), \`exp\` (Ablauf), \`iat\` (Ausgestellt am) und \`nbf\` (Nicht vor). Benutzerdefinierte Claims variieren je nach Anwendung, z. B. \`role\`, \`email\` oder \`user_id\`.

## Fazit

JWTs zu dekodieren ist eine Routineaufgabe für Entwickler. Für eine schnelle, private Browser-Erfahrung ist der [JWT-Decoder von UtilBoxx](/de/tools/crypto/jwt) das einfachste Tool, das man in den Lesezeichen behält.`;

export const jwtDecoderPost: Record<string, BlogPost> = {
  en: {
    slug: "how-to-decode-jwt-tokens",
    category: "Crypto Tools",
    date: "2026-05-20",
    readTime: "7 min",
    title: "How to Decode JWT Tokens: A Developer's Guide",
    description: "Learn how to decode JWT tokens to inspect header, payload, and claims. Includes a free in-browser decoder.",
    content: jwtEn,
  },
  zh: {
    slug: "how-to-decode-jwt-tokens",
    category: "加密工具",
    date: "2026-05-20",
    readTime: "7 分钟",
    title: "如何解码 JWT 令牌：开发者指南",
    description: "学习如何解码 JWT 令牌以检查头部、载荷和声明。附赠免费浏览器内解码器。",
    content: jwtZh,
  },
  ja: {
    slug: "how-to-decode-jwt-tokens",
    category: "暗号ツール",
    date: "2026-05-20",
    readTime: "7 分",
    title: "JWT トークンのデコード方法：開発者ガイド",
    description: "JWT トークンをデコードしてヘッダー、ペイロード、クレームを検査する方法を学びます。無料ブラウザ内デコーダー付き。",
    content: jwtJa,
  },
  es: {
    slug: "how-to-decode-jwt-tokens",
    category: "Herramientas Cripto",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Cómo decodificar tokens JWT: guía para desarrolladores",
    description: "Aprende a decodificar tokens JWT para inspeccionar header, payload y claims. Incluye decodificador gratuito en el navegador.",
    content: jwtEs,
  },
  pt: {
    slug: "how-to-decode-jwt-tokens",
    category: "Ferramentas Cripto",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Como decodificar tokens JWT: guia para desenvolvedores",
    description: "Aprenda a decodificar tokens JWT para inspecionar header, payload e claims. Inclui decodificador gratuito no navegador.",
    content: jwtPt,
  },
  fr: {
    slug: "how-to-decode-jwt-tokens",
    category: "Outils Crypto",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Comment décoder des tokens JWT : guide du développeur",
    description: "Apprenez à décoder des tokens JWT pour inspecter header, payload et claims. Avec décodeur gratuit dans le navigateur.",
    content: jwtFr,
  },
  de: {
    slug: "how-to-decode-jwt-tokens",
    category: "Krypto-Tools",
    date: "2026-05-20",
    readTime: "7 Min",
    title: "JWT-Tokens dekodieren: Ein Leitfaden für Entwickler",
    description: "Lernen Sie, JWT-Tokens zu dekodieren, um Header, Payload und Claims zu prüfen. Inklusive kostenlosem Browser-Decoder.",
    content: jwtDe,
  },
};
