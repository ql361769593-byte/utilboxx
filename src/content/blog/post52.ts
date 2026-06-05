// Blog post: Power Units Explained
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const powerEn = `## What is power and why are there so many units?

Power is the rate at which energy is used or transferred. Every appliance, vehicle, and engine has a power rating, but units vary wildly across regions and industries. Electric appliances use watts, motors are rated in horsepower, and physicists work in joules per second. Heating and cooling systems use BTU per hour, while data centers often talk about kilowatts or even megawatts.

Understanding these units — and converting between them accurately — matters whether you are sizing a generator, comparing cars, or estimating electricity costs.

## Common use cases

- **Appliance ratings**: Bulbs, microwaves, and vacuum cleaners in watts; air conditioners in BTU/h
- **Cars and engines**: Horsepower (hp) for cars, brake horsepower (bhp) for engines, kilowatts (kW) for EVs
- **Solar and batteries**: Solar panel output in watts or kilowatts, capacity in Wh or kWh
- **Heating and cooling**: BTU per hour for HVAC, watts for electric heaters
- **Data centers and industry**: Megawatts (MW) for large facilities, gigawatts (GW) for power plants

## Method 1: Use UtilBoxx's free power converter (Recommended)

Our [power unit converter](/en/tools/unit/power) supports watts, kilowatts, megawatts, gigawatts, milliwatts, horsepower (mechanical, metric, electric), BTU/h, foot-pounds per second, and more. Here is how to use it:

1. Go to [utilboxx.com/en/tools/unit/power](/en/tools/unit/power)
2. Type a value in any field
3. All other units update as you type
4. Use the swap button to invert the conversion
5. Copy any value with one click

**Why this method works**:
- 10+ power units in a single view
- Handles mechanical, metric, and electric horsepower correctly
- Exact constants, no rounding errors
- Mobile-friendly with large fields
- 100% in-browser, no server calls

## Method 2: Memorize the key factors

A few anchor values cover most everyday conversions:

- 1 hp (mechanical) = 745.7 W = 0.7457 kW
- 1 hp (metric) = 735.5 W
- 1 BTU/h ≈ 0.293 W
- 1 kW = 1,000 W = 1.341 hp
- 1 MW = 1,000 kW = 1,000,000 W

For air conditioners, a common rule of thumb is 20 BTU/h per square foot of living space.

## Method 3: Use a spreadsheet

In Excel or Google Sheets, you can build a quick conversion table:

\`\`\`
= A1 * 745.7          // hp to W
= A1 * 0.7457         // hp to kW
= A1 * 3.41214        // W to BTU/h
= A1 / 1000           // W to kW
\`\`\`

This is convenient for engineering calculations or batch conversions.

## Frequently asked questions

### What is the SI unit of power?
The watt (W), defined as one joule per second. It is named after James Watt, the inventor who improved the steam engine. The kilowatt (kW) and megawatt (MW) are used for larger values.

### What is the difference between horsepower and watts?
Horsepower is an older unit, originally defined to compare steam engines to draft horses. 1 mechanical hp = 745.7 W. Watts are the universal SI unit and are used in all scientific and most modern engineering contexts.

### Why are there different types of horsepower?
Mechanical (imperial) horsepower, metric horsepower, and electric horsepower differ slightly. Mechanical hp = 745.7 W, metric hp = 735.5 W, electric hp = 746 W exactly. Car and engine specifications sometimes quote different versions.

### How do I convert BTU/h to watts?
Multiply BTU/h by 0.293071. For example, 12,000 BTU/h ≈ 3,517 W ≈ 3.5 kW. The [UtilBoxx power converter](/en/tools/unit/power) does this automatically.

## Conclusion

Power ratings are everywhere — on appliances, vehicles, and HVAC systems. For a fast, accurate conversion, the [UtilBoxx power converter](/en/tools/unit/power) is the easiest tool to keep on hand.`;

const powerZh = `## 什么是功率？为什么有这么多单位？

功率是能量使用或转移的速率。每个电器、车辆、引擎都有功率额定值，但不同地区和行业的单位差异很大。电器用瓦特，引擎用马力，物理学家用焦耳每秒。暖通空调用 BTU/h，数据中心通常用千瓦甚至兆瓦。

无论你是在为发电机选型、比较汽车性能还是估算电费，理解这些单位并准确换算都很重要。

## 常见使用场景

- **电器额定值**：灯泡、微波炉、吸尘器用瓦特；空调用 BTU/h
- **汽车与引擎**：汽车用马力（hp），引擎用制动马力（bhp），电动车用千瓦（kW）
- **太阳能与电池**：太阳能板输出用瓦或千瓦，容量用 Wh 或 kWh
- **供暖与制冷**：HVAC 用 BTU/h，电暖器用瓦
- **数据中心和工业**：大型设施用兆瓦（MW），发电厂用吉瓦（GW）

## 方法 1：使用 UtilBoxx 免费功率换算工具（推荐）

我们的 [功率单位换算工具](/zh/tools/unit/power) 支持瓦特、千瓦、兆瓦、吉瓦、毫瓦、马力（机械、公制、电力）、BTU/h、英尺·磅/秒等。步骤如下：

1. 访问 [utilboxx.com/zh/tools/unit/power](/zh/tools/unit/power)
2. 在任意字段中输入数值
3. 其它单位在你输入时实时更新
4. 使用交换按钮可以反转换算
5. 一键复制任意数值

**这个方法的优势**：
- 单页面 10+ 功率单位
- 正确处理机械、公制和电力马力
- 精确常数，无四舍五入误差
- 移动端友好，输入框大
- 完全在浏览器中运行，无服务器调用

## 方法 2：记住关键系数

几个锚点值就能覆盖大多数日常换算：

- 1 hp（机械）= 745.7 W = 0.7457 kW
- 1 hp（公制）= 735.5 W
- 1 BTU/h ≈ 0.293 W
- 1 kW = 1,000 W = 1.341 hp
- 1 MW = 1,000 kW = 1,000,000 W

对空调来说，常用的经验法则是每平方英尺居住面积 20 BTU/h。

## 方法 3：使用电子表格

在 Excel 或 Google Sheets 中，可以搭建一个快速换算表：

\`\`\`
= A1 * 745.7          // hp 转 W
= A1 * 0.7457         // hp 转 kW
= A1 * 3.41214        // W 转 BTU/h
= A1 / 1000           // W 转 kW
\`\`\`

适合工程计算或批量换算。

## 常见问题

### 功率的国际单位制（SI）单位是什么？
瓦特（W），定义为 1 焦耳每秒。它以改进蒸汽机的发明家詹姆斯·瓦特命名。日常中更常用千瓦（kW）和兆瓦（MW）。

### 马力和瓦特有什么区别？
马力是较老的单位，最初用于比较蒸汽引擎和拉车的马。1 机械马力 = 745.7 W。瓦特是全球通用的 SI 单位，被所有科学和大多数现代工程领域采用。

### 为什么有不同种类的马力？
机械（英制）马力、公制马力和电力马力略有差别。机械 hp = 745.7 W，公制 hp = 735.5 W，电力 hp = 正好 746 W。汽车和引擎规格有时会引用不同的版本。

### 如何把 BTU/h 换算成瓦？
用 BTU/h 乘以 0.293071。例如，12,000 BTU/h ≈ 3,517 W ≈ 3.5 kW。[UtilBoxx 功率换算工具](/zh/tools/unit/power) 可自动完成。

## 结论

功率额定值无处不在——在电器、车辆、暖通系统上。想要一个快速、准确的换算，把 [UtilBoxx 功率换算工具](/zh/tools/unit/power) 一直开着是最方便的选择。`;

const powerJa = `## 電力とは？なぜこんなに単位があるのか？

電力はエネルギーが使われたり移動したりする速度です。すべての家電、車、エンジンには電力定格がありますが、単位は地域や業界によって大きく異なります。家電はワット、エンジンは馬力、物理学者はジュール毎秒を使います。冷暖房は BTU/h、データセンターはキロワットやメガワットで語られることが多いです。

これらの単位を理解し、正確に換算することは、発電機の選定、車の比較、電気代の見積もりのいずれにも重要です。

## よくある用途

- **家電の定格**：電球、電子レンジ、掃除機はワット、エアコンは BTU/h
- **車とエンジン**：自動車は馬力（hp）、エンジンはブレーキ馬力（bhp）、EV はキロワット（kW）
- **太陽光とバッテリー**：太陽光パネルの出力は W または kW、容量は Wh または kWh
- **冷暖房**：HVAC は BTU/h、電気ヒーターはワット
- **データセンターと産業**：大規模施設はメガワット（MW）、発電所はギガワット（GW）

## 方法 1：UtilBoxx の無料電力換算ツールを使う（推奨）

当社の [電力単位換算ツール](/ja/tools/unit/power) は、ワット、キロワット、メガワット、ギガワット、ミリワット、馬力（機械、メートル法、電気）、BTU/h、フィートポンド毎秒などに対応します。手順は次のとおりです：

1. [utilboxx.com/ja/tools/unit/power](/ja/tools/unit/power) にアクセス
2. 任意の欄に値を入力
3. 入力中に他の単位が更新される
4.「入れ替え」ボタンで換算方向を反転
5. ワンクリックで任意の値をコピー

**この方法の長所**：
- 1 つの画面に 10 以上の電力単位
- 機械、メートル法、電気馬力を正確に区別
- 正確な定数、丸め誤差なし
- モバイル対応で入力欄が大きめ
- ブラウザ内 100% 動作、サーバー呼び出しなし

## 方法 2：主要な係数を覚える

いくつかの基準値で日常の換算のほとんどをカバーできます：

- 1 hp（機械）= 745.7 W = 0.7457 kW
- 1 hp（メートル法）= 735.5 W
- 1 BTU/h ≈ 0.293 W
- 1 kW = 1,000 W = 1.341 hp
- 1 MW = 1,000 kW = 1,000,000 W

エアコンでは「1 平方フィートあたり 20 BTU/h」という経験則がよく使われます。

## 方法 3：表計算ソフトを使う

Excel や Google スプレッドシートで簡易換算表を作れます：

\`\`\`
= A1 * 745.7          // hp → W
= A1 * 0.7457         // hp → kW
= A1 * 3.41214        // W → BTU/h
= A1 / 1000           // W → kW
\`\`\`

工学計算や一括換算に便利です。

## よくある質問

### 電力の SI 単位は？
ワット（W）で、1 ジュール毎秒と定義されます。蒸気機関を改良した発明家ジェームズ・ワットにちなんで名付けられました。より大きな値にはキロワット（kW）やメガワット（MW）が使われます。

### 馬力とワットの違いは？
馬力は古い単位で、もともとは蒸気機関と馬力を比較するために定義されました。1 機械馬力 = 745.7 W。ワットは普遍的な SI 単位で、すべての科学と現代のほとんどの工学分野で使用されています。

### なぜ馬力に種類があるのですか？
機械（帝国）馬力、メートル法馬力、電気馬力はわずかに異なります。機械 hp = 745.7 W、メートル法 hp = 735.5 W、電気 hp = ちょうど 746 W。車やエンジンの仕様は別々のバージョンを引用することがあります。

### BTU/h をワットに変換するには？
BTU/h に 0.293071 を掛けます。例えば 12,000 BTU/h ≈ 3,517 W ≈ 3.5 kW。[UtilBoxx の電力換算ツール](/ja/tools/unit/power) なら自動で換算できます。

## 結論

電力定格はあらゆるところに——家電、車、HVAC システムに——あります。素早く正確な換算には [UtilBoxx の電力換算ツール](/ja/tools/unit/power) をいつでも開いておくのが最も手軽です。`;

const powerEs = `## ¿Qué es la potencia y por qué hay tantas unidades?

La potencia es la tasa a la que se usa o transfiere energía. Cada electrodoméstico, vehículo y motor tiene una potencia nominal, pero las unidades varían mucho entre regiones e industrias. Los aparatos eléctricos usan vatios, los motores se miden en caballos de fuerza, y los físicos trabajan en julios por segundo. Los sistemas de calefacción y refrigeración usan BTU/h, mientras que los centros de datos suelen hablar de kilovatios o incluso megavatios.

Entender estas unidades — y convertir entre ellas con precisión — importa al dimensionar un generador, comparar coches o estimar costes eléctricos.

## Casos de uso comunes

- **Aparatos eléctricos**: bombillas, microondas y aspiradoras en vatios; aires acondicionados en BTU/h
- **Coches y motores**: caballos (hp) en coches, caballos al freno (bhp) en motores, kilovatios (kW) en VE
- **Solar y baterías**: salida de paneles solares en vatios o kilovatios, capacidad en Wh o kWh
- **Calefacción y refrigeración**: BTU/h para HVAC, vatios para calefactores eléctricos
- **Centros de datos e industria**: megavatios (MW) para grandes instalaciones, gigavatios (GW) para centrales

## Método 1: Usa el conversor de potencia gratuito de UtilBoxx (Recomendado)

Nuestro [conversor de unidades de potencia](/es/tools/unit/power) admite vatios, kilovatios, megavatios, gigavatios, milivatios, caballos de fuerza (mecánico, métrico, eléctrico), BTU/h, libras-pie por segundo y más. Así se usa:

1. Ve a [utilboxx.com/es/tools/unit/power](/es/tools/unit/power)
2. Escribe un valor en cualquier campo
3. Las demás unidades se actualizan al instante mientras escribes
4. Usa el botón de intercambio para invertir la conversión
5. Copia cualquier valor con un solo clic

**Por qué funciona este método**:
- Más de 10 unidades de potencia en una sola vista
- Gestiona correctamente caballos mecánico, métrico y eléctrico
- Constantes exactas, sin errores de redondeo
- Adaptado a móvil con campos grandes
- 100% en el navegador, sin llamadas al servidor

## Método 2: Memoriza los factores clave

Unos valores ancla cubren la mayoría de las conversiones cotidianas:

- 1 hp (mecánico) = 745,7 W = 0,7457 kW
- 1 hp (métrico) = 735,5 W
- 1 BTU/h ≈ 0,293 W
- 1 kW = 1.000 W = 1,341 hp
- 1 MW = 1.000 kW = 1.000.000 W

Para aires acondicionados, una regla común es 20 BTU/h por pie cuadrado de superficie habitable.

## Método 3: Usa una hoja de cálculo

En Excel o Google Sheets, puedes montar una tabla de conversión rápida:

\`\`\`
= A1 * 745.7          // hp a W
= A1 * 0.7457         // hp a kW
= A1 * 3.41214        // W a BTU/h
= A1 / 1000           // W a kW
\`\`\`

Es útil para cálculos de ingeniería o conversiones en lote.

## Preguntas frecuentes

### ¿Cuál es la unidad SI de potencia?
El vatio (W), definido como un julio por segundo. Lleva el nombre de James Watt, el inventor que mejoró la máquina de vapor. El kilovatio (kW) y el megavatio (MW) se usan para valores mayores.

### ¿Cuál es la diferencia entre caballos de fuerza y vatios?
El caballo de fuerza es una unidad antigua, definida originalmente para comparar máquinas de vapor con caballos de tiro. 1 hp mecánico = 745,7 W. El vatio es la unidad SI universal y se usa en toda la ciencia y en la mayoría de la ingeniería moderna.

### ¿Por qué hay distintos tipos de caballos de fuerza?
El caballo mecánico (imperial), el caballo métrico y el eléctrico difieren ligeramente. hp mecánico = 745,7 W, hp métrico = 735,5 W, hp eléctrico = exactamente 746 W. Las especificaciones de coches y motores a veces citan versiones diferentes.

### ¿Cómo convierto BTU/h a vatios?
Multiplica BTU/h por 0,293071. Por ejemplo, 12.000 BTU/h ≈ 3.517 W ≈ 3,5 kW. El [conversor de potencia de UtilBoxx](/es/tools/unit/power) lo hace automáticamente.

## Conclusión

Las potencias nominales están en todas partes — en electrodomésticos, vehículos y sistemas HVAC. Para una conversión rápida y precisa, el [conversor de potencia de UtilBoxx](/es/tools/unit/power) es la herramienta más fácil de tener siempre a mano.`;

const powerPt = `## O que é potência e por que existem tantas unidades?

Potência é a taxa com que a energia é usada ou transferida. Todo eletrodoméstico, veículo e motor tem uma potência nominal, mas as unidades variam muito entre regiões e setores. Aparelhos elétricos usam watts, motores são classificados em cavalos de força, e físicos trabalham em joules por segundo. Sistemas de aquecimento e refrigeração usam BTU/h, enquanto data centers costumam falar em quilowatts ou até megawatts.

Entender essas unidades — e converter entre elas com precisão — importa ao dimensionar um gerador, comparar carros ou estimar custos de eletricidade.

## Casos de uso comuns

- **Eletrodomésticos**: lâmpadas, micro-ondas e aspiradores em watts; ar-condicionado em BTU/h
- **Carros e motores**: cavalos (hp) em carros, brake horsepower (bhp) em motores, quilowatts (kW) em EVs
- **Solar e baterias**: saída do painel solar em watts ou quilowatts, capacidade em Wh ou kWh
- **Aquecimento e refrigeração**: BTU/h para HVAC, watts para aquecedores elétricos
- **Data centers e indústria**: megawatts (MW) para grandes instalações, gigawatts (GW) para usinas

## Método 1: Use o conversor de potência gratuito do UtilBoxx (Recomendado)

Nosso [conversor de unidades de potência](/pt/tools/unit/power) suporta watts, quilowatts, megawatts, gigawatts, miliwatts, cavalos de força (mecânico, métrico, elétrico), BTU/h, libra-pé por segundo e mais. Veja como usar:

1. Vá para [utilboxx.com/pt/tools/unit/power](/pt/tools/unit/power)
2. Digite um valor em qualquer campo
3. As outras unidades se atualizam na hora enquanto você digita
4. Use o botão de troca para inverter a conversão
5. Copie qualquer valor com um clique

**Por que este método funciona**:
- Mais de 10 unidades de potência em uma única tela
- Trata corretamente cavalos mecânico, métrico e elétrico
- Constantes exatas, sem erros de arredondamento
- Adaptado para celular com campos grandes
- 100% no navegador, sem chamadas ao servidor

## Método 2: Memorize os fatores-chave

Alguns valores de referência cobrem a maioria das conversões do dia a dia:

- 1 hp (mecânico) = 745,7 W = 0,7457 kW
- 1 hp (métrico) = 735,5 W
- 1 BTU/h ≈ 0,293 W
- 1 kW = 1.000 W = 1,341 hp
- 1 MW = 1.000 kW = 1.000.000 W

Para ar-condicionado, uma regra comum é 20 BTU/h por pé quadrado de área habitável.

## Método 3: Use uma planilha

No Excel ou Google Sheets, dá para montar uma tabela de conversão rápida:

\`\`\`
= A1 * 745.7          // hp para W
= A1 * 0.7457         // hp para kW
= A1 * 3.41214        // W para BTU/h
= A1 / 1000           // W para kW
\`\`\`

Útil para cálculos de engenharia ou conversões em lote.

## Perguntas frequentes

### Qual é a unidade SI de potência?
O watt (W), definido como um joule por segundo. Recebe o nome de James Watt, o inventor que aperfeiçoou a máquina a vapor. O quilowatt (kW) e o megawatt (MW) são usados para valores maiores.

### Qual a diferença entre cavalos de força e watts?
Cavalo de força é uma unidade antiga, definida originalmente para comparar máquinas a vapor com cavalos de tração. 1 hp mecânico = 745,7 W. O watt é a unidade SI universal e é usado em toda a ciência e na maior parte da engenharia moderna.

### Por que existem diferentes tipos de cavalos de força?
O cavalo mecânico (imperial), o métrico e o elétrico diferem levemente. hp mecânico = 745,7 W, hp métrico = 735,5 W, hp elétrico = exatamente 746 W. Especificações de carros e motores às vezes citam versões diferentes.

### Como converter BTU/h em watts?
Multiplique BTU/h por 0,293071. Por exemplo, 12.000 BTU/h ≈ 3.517 W ≈ 3,5 kW. O [conversor de potência do UtilBoxx](/pt/tools/unit/power) faz isso automaticamente.

## Conclusão

Potências nominais estão em todo lugar — em eletrodomésticos, veículos e sistemas HVAC. Para uma conversão rápida e precisa, o [conversor de potência do UtilBoxx](/pt/tools/unit/power) é a ferramenta mais fácil de manter sempre à mão.`;

const powerFr = `## Qu'est-ce que la puissance et pourquoi y a-t-il autant d'unités ?

La puissance est la vitesse à laquelle l'énergie est utilisée ou transférée. Chaque appareil, véhicule et moteur a une puissance nominale, mais les unités varient énormément selon les régions et les industries. Les appareils électriques s'expriment en watts, les moteurs en chevaux, et les physiciens en joules par seconde. Le chauffage et la climatisation utilisent le BTU/h, tandis que les centres de données parlent souvent en kilowatts, voire en mégawatts.

Comprendre ces unités — et convertir entre elles avec précision — compte aussi bien pour dimensionner un générateur que pour comparer des voitures ou estimer des coûts d'électricité.

## Cas d'usage courants

- **Puissance des appareils** : ampoules, micro-ondes et aspirateurs en watts ; climatiseurs en BTU/h
- **Voitures et moteurs** : chevaux (hp) pour les voitures, frein (bhp) pour les moteurs, kilowatts (kW) pour les VE
- **Solaire et batteries** : sortie des panneaux solaires en watts ou kilowatts, capacité en Wh ou kWh
- **Chauffage et climatisation** : BTU/h pour le CVC, watts pour les radiateurs électriques
- **Centres de données et industrie** : mégawatts (MW) pour les grandes installations, gigawatts (GW) pour les centrales

## Méthode 1 : Utilisez le convertisseur de puissance gratuit d'UtilBoxx (Recommandé)

Notre [convertisseur d'unités de puissance](/fr/tools/unit/power) prend en charge watts, kilowatts, mégawatts, gigawatts, milliwatts, chevaux (mécanique, métrique, électrique), BTU/h, pied-livres par seconde, et plus encore. Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/unit/power](/fr/tools/unit/power)
2. Saisissez une valeur dans n'importe quel champ
3. Les autres unités se mettent à jour pendant la frappe
4. Utilisez le bouton d'échange pour inverser la conversion
5. Copiez n'importe quelle valeur en un clic

**Pourquoi cette méthode fonctionne** :
- Plus de 10 unités de puissance dans un seul écran
- Gère correctement les chevaux mécanique, métrique et électrique
- Constantes exactes, aucune erreur d'arrondi
- Adapté au mobile avec de grands champs
- 100% dans le navigateur, aucun appel serveur

## Méthode 2 : Mémorisez les facteurs clés

Quelques valeurs repères couvrent la plupart des conversions du quotidien :

- 1 hp (mécanique) = 745,7 W = 0,7457 kW
- 1 hp (métrique) = 735,5 W
- 1 BTU/h ≈ 0,293 W
- 1 kW = 1 000 W = 1,341 hp
- 1 MW = 1 000 kW = 1 000 000 W

Pour la climatisation, une règle courante est 20 BTU/h par pied carré de surface habitable.

## Méthode 3 : Utilisez un tableur

Dans Excel ou Google Sheets, vous pouvez monter une table de conversion rapide :

\`\`\`
= A1 * 745.7          // hp en W
= A1 * 0.7457         // hp en kW
= A1 * 3.41214        // W en BTU/h
= A1 / 1000           // W en kW
\`\`\`

Pratique pour des calculs d'ingénierie ou des conversions en lot.

## Questions fréquentes

### Quelle est l'unité SI de puissance ?
Le watt (W), défini comme un joule par seconde. Il doit son nom à James Watt, l'inventeur qui a amélioré la machine à vapeur. Le kilowatt (kW) et le mégawatt (MW) sont utilisés pour les valeurs plus grandes.

### Quelle est la différence entre chevaux et watts ?
Le cheval est une unité ancienne, conçue à l'origine pour comparer les machines à vapeur à la force des chevaux de trait. 1 hp mécanique = 745,7 W. Le watt est l'unité SI universelle, utilisée dans toutes les sciences et la plupart de l'ingénierie moderne.

### Pourquoi existe-t-il différents types de chevaux ?
Les chevaux mécanique (impérial), métrique et électrique diffèrent légèrement. hp mécanique = 745,7 W, hp métrique = 735,5 W, hp électrique = exactement 746 W. Les fiches de voitures et de moteurs citent parfois des versions différentes.

### Comment convertir BTU/h en watts ?
Multipliez les BTU/h par 0,293071. Par exemple, 12 000 BTU/h ≈ 3 517 W ≈ 3,5 kW. Le [convertisseur de puissance d'UtilBoxx](/fr/tools/unit/power) le fait automatiquement.

## Conclusion

Les puissances nominales sont partout — sur les appareils, véhicules et systèmes CVC. Pour une conversion rapide et précise, le [convertisseur de puissance d'UtilBoxx](/fr/tools/unit/power) est l'outil le plus simple à garder à portée de main.`;

const powerDe = `## Was ist Leistung und warum gibt es so viele Einheiten?

Leistung ist die Rate, mit der Energie genutzt oder übertragen wird. Jedes Gerät, Fahrzeug und jeder Motor hat eine Nennleistung, doch die Einheiten variieren je nach Region und Branche enorm. Elektrogeräte werden in Watt angegeben, Motoren in Pferdestärken, Physiker arbeiten in Joule pro Sekunde. Heiz- und Kühlsysteme nutzen BTU/h, während Rechenzentren oft in Kilowatt oder sogar Megawatt denken.

Diese Einheiten zu verstehen — und genau zwischen ihnen umzurechnen — ist wichtig, egal ob Sie einen Generator dimensionieren, Autos vergleichen oder Stromkosten schätzen.

## Häufige Anwendungsfälle

- **Geräteleistungen**: Glühbirnen, Mikrowellen und Staubsauger in Watt; Klimaanlagen in BTU/h
- **Autos und Motoren**: Pferdestärken (hp) für Autos, Brems-PS (bhp) für Motoren, Kilowatt (kW) für E-Autos
- **Solar und Akkus**: Solarpanel-Leistung in Watt oder Kilowatt, Kapazität in Wh oder kWh
- **Heizung und Kühlung**: BTU/h für HVAC, Watt für Elektroheizungen
- **Rechenzentren und Industrie**: Megawatt (MW) für große Anlagen, Gigawatt (GW) für Kraftwerke

## Methode 1: Den kostenlosen Leistungsumrechner von UtilBoxx verwenden (Empfohlen)

Unser [Leistungseinheiten-Umrechner](/de/tools/unit/power) unterstützt Watt, Kilowatt, Megawatt, Gigawatt, Milliwatt, Pferdestärken (mechanisch, metrisch, elektrisch), BTU/h, Foot-Pound pro Sekunde und mehr. So verwenden Sie ihn:

1. Gehen Sie zu [utilboxx.com/de/tools/unit/power](/de/tools/unit/power)
2. Geben Sie einen Wert in ein beliebiges Feld ein
3. Alle anderen Einheiten aktualisieren sich beim Tippen
4. Mit der Tausch-Schaltfläche kehren Sie die Umrechnung um
5. Kopieren Sie jeden Wert mit einem Klick

**Warum diese Methode funktioniert**:
- Mehr als 10 Leistungseinheiten in einer Ansicht
- Verarbeitet mechanische, metrische und elektrische PS korrekt
- Exakte Konstanten, keine Rundungsfehler
- Mobilfreundlich mit großen Feldern
- 100% im Browser, keine Server-Aufrufe

## Methode 2: Die Schlüsselfaktoren im Kopf behalten

Ein paar Ankerwerte decken die meisten alltäglichen Umrechnungen ab:

- 1 PS (mechanisch) = 745,7 W = 0,7457 kW
- 1 PS (metrisch) = 735,5 W
- 1 BTU/h ≈ 0,293 W
- 1 kW = 1.000 W = 1,341 PS
- 1 MW = 1.000 kW = 1.000.000 W

Für Klimaanlagen gilt eine gängige Faustregel: 20 BTU/h pro Quadratfuß Wohnfläche.

## Methode 3: Tabellenkalkulation verwenden

In Excel oder Google Sheets können Sie eine schnelle Umrechnungstabelle anlegen:

\`\`\`
= A1 * 745.7          // PS zu W
= A1 * 0.7457         // PS zu kW
= A1 * 3.41214        // W zu BTU/h
= A1 / 1000           // W zu kW
\`\`\`

Nützlich für technische Berechnungen oder Stapelumrechnungen.

## Häufig gestellte Fragen

### Was ist die SI-Einheit für Leistung?
Das Watt (W), definiert als ein Joule pro Sekunde. Benannt nach James Watt, dem Erfinder, der die Dampfmaschine verbesserte. Kilowatt (kW) und Megawatt (MW) werden für größere Werte verwendet.

### Was ist der Unterschied zwischen Pferdestärke und Watt?
Die Pferdestärke ist eine ältere Einheit, ursprünglich definiert, um Dampfmaschinen mit Zugpferden zu vergleichen. 1 mechanische PS = 745,7 W. Das Watt ist die universelle SI-Einheit und wird in der gesamten Wissenschaft und in den meisten modernen Ingenieursdisziplinen verwendet.

### Warum gibt es verschiedene Arten von Pferdestärken?
Mechanische (imperiale), metrische und elektrische PS unterscheiden sich leicht. Mechanische PS = 745,7 W, metrische PS = 735,5 W, elektrische PS = genau 746 W. Auto- und Motorspezifikationen geben manchmal unterschiedliche Versionen an.

### Wie rechne ich BTU/h in Watt um?
Multiplizieren Sie BTU/h mit 0,293071. Beispiel: 12.000 BTU/h ≈ 3.517 W ≈ 3,5 kW. Der [Leistungsumrechner von UtilBoxx](/de/tools/unit/power) erledigt das automatisch.

## Fazit

Nennleistungen finden sich überall — auf Geräten, Fahrzeugen und HVAC-Systemen. Für eine schnelle, genaue Umrechnung ist der [Leistungsumrechner von UtilBoxx](/de/tools/unit/power) das praktischste Tool, das man immer zur Hand hat.`;

export const powerPost: Record<string, BlogPost> = {
  en: {
    slug: "power-units-explained",
    category: "Unit Converters",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Power Units Explained: W, kW, hp, BTU/h",
    description: "Convert between watts, kilowatts, horsepower, BTU per hour, and other power units with confidence.",
    content: powerEn,
  },
  zh: {
    slug: "power-units-explained",
    category: "单位换算",
    date: "2026-05-20",
    readTime: "7 分钟",
    title: "功率单位全解析：W、kW、hp、BTU/h",
    description: "在瓦特、千瓦、马力、BTU/h 等功率单位之间自如换算。",
    content: powerZh,
  },
  ja: {
    slug: "power-units-explained",
    category: "単位変換",
    date: "2026-05-20",
    readTime: "7 分",
    title: "電力単位の解説：W、kW、hp、BTU/h",
    description: "ワット、キロワット、馬力、BTU/h などの電力単位を自在に変換。",
    content: powerJa,
  },
  es: {
    slug: "power-units-explained",
    category: "Conversores de Unidades",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Unidades de potencia explicadas: W, kW, hp, BTU/h",
    description: "Convierte con confianza entre vatios, kilovatios, caballos de fuerza, BTU/h y otras unidades de potencia.",
    content: powerEs,
  },
  pt: {
    slug: "power-units-explained",
    category: "Conversores de Unidades",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Unidades de potência explicadas: W, kW, hp, BTU/h",
    description: "Converta com confiança entre watts, quilowatts, cavalos de força, BTU/h e outras unidades de potência.",
    content: powerPt,
  },
  fr: {
    slug: "power-units-explained",
    category: "Convertisseurs d'Unités",
    date: "2026-05-20",
    readTime: "7 min",
    title: "Unités de puissance expliquées : W, kW, hp, BTU/h",
    description: "Convertissez en toute confiance entre watts, kilowatts, chevaux, BTU/h et autres unités de puissance.",
    content: powerFr,
  },
  de: {
    slug: "power-units-explained",
    category: "Einheitenumrechner",
    date: "2026-05-20",
    readTime: "7 Min",
    title: "Leistungseinheiten erklärt: W, kW, PS, BTU/h",
    description: "Rechnen Sie sicher zwischen Watt, Kilowatt, Pferdestärken, BTU/h und weiteren Leistungseinheiten um.",
    content: powerDe,
  },
};
