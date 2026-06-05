// Blog post: Fuel Economy MPG vs L/100km
// 7-language versions (en, zh, ja, es, pt, fr, de)

import type { BlogPost } from "./posts";

const fuelEn = `## MPG vs L/100km: why does fuel economy use two systems?

Fuel economy measures how far a vehicle travels per unit of fuel. The problem is that two competing systems are in widespread use: the United States and the United Kingdom report miles per gallon (MPG), while most of Europe, Asia, and Latin America report liters per 100 kilometers (L/100km). They are mathematically inverse — a "higher" MPG means better efficiency, while a "lower" L/100km means better efficiency.

Converting between them is more involved than a simple factor because the gallon itself differs: the US gallon is 3.785 L, while the imperial (UK) gallon is 4.546 L. That is why a UK MPG and a US MPG are not directly comparable.

## Common use cases

- **Comparing cars across markets**: Buying guides often quote fuel economy in the "wrong" unit for the reader
- **Importing vehicles**: Converters help when reading spec sheets from another country
- **Trip planning**: Estimate fuel needed for a road trip with a foreign rental car
- **Fleet management**: International fleets need consistent efficiency reporting
- **Sustainability reporting**: Companies report emissions in L/100km, while employees discuss MPG

## Method 1: Use UtilBoxx's free fuel economy converter (Recommended)

Our [fuel economy converter](/en/tools/unit/fuel) handles both US and imperial gallons, plus L/100km, km/L, and miles per gallon (US and UK). Here is how to use it:

1. Go to [utilboxx.com/en/tools/unit/fuel](/en/tools/unit/fuel)
2. Enter a value in any field (L/100km, MPG US, MPG UK, km/L)
3. All other fields update instantly
4. Toggle between US and UK gallons with a single switch
5. Copy any value with one click

**Why this method works**:
- Handles both US and imperial gallons correctly
- Real-time conversion as you type
- Mobile-friendly with large fields
- No ads, no signup, no tracking
- 100% in-browser, your data never leaves the device

## Method 2: Use the manual formulas

If you need to do the math by hand:

- L/100km to MPG (US) = 235.215 / (L/100km)
- L/100km to MPG (UK) = 282.481 / (L/100km)
- MPG (US) to L/100km = 235.215 / MPG
- MPG (UK) to L/100km = 282.481 / MPG
- km/L to MPG (US) = km/L × 2.352

For example, 7 L/100km = 235.215 / 7 ≈ 33.6 MPG (US).

## Method 3: Use a spreadsheet

In Google Sheets or Excel, you can build a small conversion table:

\`\`\`
= 235.215 / A1   // L/100km to MPG (US)
= 282.481 / A1   // L/100km to MPG (UK)
= A1 / 2.352     // km/L to MPG (US)
= A1 * 0.425144  // MPG (US) to km/L
\`\`\`

This is great for batch conversion of vehicle data.

## Frequently asked questions

### Is higher MPG better or lower?
In MPG, higher is better — you travel more miles per gallon. In L/100km, lower is better — you use less fuel per 100 km. The two systems are inversely related.

### What is the difference between US MPG and UK MPG?
A US gallon is 3.785 L; a UK (imperial) gallon is 4.546 L. A car rated 30 MPG (US) = 30 / 1.201 ≈ 25 MPG (UK). The numbers are not interchangeable.

### What is a "good" fuel economy?
A modern compact car typically achieves 6-8 L/100km (about 30-40 MPG US). Hybrids and EVs do much better. Anything above 10 L/100km (under 24 MPG US) is considered thirsty.

### How do I compare cars from different countries?
Use the [UtilBoxx fuel economy converter](/en/tools/unit/fuel) to put both cars in the same unit, or use the standard L/100km metric which is increasingly common worldwide.

## Conclusion

Whether you are browsing a US auction site, comparing European hatchbacks, or planning a road trip abroad, the [UtilBoxx fuel economy converter](/en/tools/unit/fuel) makes the math disappear.`;

const fuelZh = `## MPG vs L/100km：为什么油耗有这两种体系？

油耗衡量的是车辆每单位燃料能行驶的距离。问题在于，两套互为竞争的体系都在广泛使用：美国和英国用英里每加仑（MPG），而欧洲、亚洲、拉美大多数国家用升每百公里（L/100km）。它们在数学上是倒数关系——MPG"越高"代表效率越好，而 L/100km"越低"代表效率越好。

它们之间的换算比简单系数更复杂，因为加仑本身就不一样：美制加仑是 3.785 L，英制（英国）加仑是 4.546 L。这就是为什么英国 MPG 和美国 MPG 不能直接比较。

## 常见使用场景

- **跨市场比较车辆**：购车指南常常用读者"不熟悉"的单位标油耗
- **进口车辆**：读国外规格表时需要换算
- **行程规划**：估算国外租车的燃油需求
- **车队管理**：跨国车队需要统一的效率报告
- **可持续报告**：公司用 L/100km 报告排放，员工却讨论 MPG

## 方法 1：使用 UtilBoxx 免费油耗换算工具（推荐）

我们的 [油耗换算工具](/zh/tools/unit/fuel) 同时处理美制和英制加仑，还支持 L/100km、km/L、MPG（美制和英制）。步骤如下：

1. 访问 [utilboxx.com/zh/tools/unit/fuel](/zh/tools/unit/fuel)
2. 在任意字段中输入数值（L/100km、MPG 美制、MPG 英制、km/L）
3. 其它字段实时更新
4. 一键切换美制和英制加仑
5. 一键复制任意数值

**这个方法的优势**：
- 正确处理美制和英制加仑
- 输入时实时换算
- 移动端友好，输入框大
- 无广告、无需注册、不追踪
- 完全在浏览器中运行，数据不外传

## 方法 2：使用手工公式

如果你需要手算：

- L/100km 转 MPG（美制）= 235.215 / (L/100km)
- L/100km 转 MPG（英制）= 282.481 / (L/100km)
- MPG（美制）转 L/100km = 235.215 / MPG
- MPG（英制）转 L/100km = 282.481 / MPG
- km/L 转 MPG（美制）= km/L × 2.352

例如，7 L/100km = 235.215 / 7 ≈ 33.6 MPG（美制）。

## 方法 3：使用电子表格

在 Google Sheets 或 Excel 中，可以搭建一个小型换算表：

\`\`\`
= 235.215 / A1   // L/100km 转 MPG（美制）
= 282.481 / A1   // L/100km 转 MPG（英制）
= A1 / 2.352     // km/L 转 MPG（美制）
= A1 * 0.425144  // MPG（美制）转 km/L
\`\`\`

适合车辆数据的批量换算。

## 常见问题

### MPG 越高越好还是越低越好？
在 MPG 中，越高越好——每加仑能跑更多英里。在 L/100km 中，越低越好——每百公里用的油更少。两套体系是反比关系。

### 美制 MPG 和英制 MPG 有什么区别？
美制加仑是 3.785 L；英制（英国）加仑是 4.546 L。一辆车标 30 MPG（美制）= 30 / 1.201 ≈ 25 MPG（英制）。这两个数字不能互换。

### 多少算"好"的油耗？
现代紧凑型轿车通常在 6-8 L/100km（约 30-40 MPG 美制）。混动车和电动车更好。超过 10 L/100km（低于 24 MPG 美制）就算耗油了。

### 如何比较不同国家的车辆？
用 [UtilBoxx 油耗换算工具](/zh/tools/unit/fuel) 把两辆车统一到同一单位，或使用越来越国际通用的 L/100km 指标。

## 结论

无论你是在浏览美国拍卖网站、比较欧洲两厢车还是规划境外自驾游，[UtilBoxx 油耗换算工具](/zh/tools/unit/fuel) 都能让换算消失于无形。`;

const fuelJa = `## MPG vs L/100km：なぜ燃費に 2 つの方式があるのか？

燃費は車両が単位燃料あたりに進む距離を測るものです。問題は、広く使われている 2 つの競合する方式があることです：米国と英国はマイル毎ガロン（MPG）を使い、ヨーロッパ、アジア、ラテンアメリカの大部分はリットル毎 100 キロメートル（L/100km）を使います。両者は数学的に逆数で、MPG が高いほど効率が良く、L/100km が低いほど効率が良いという意味になります。

ガロン自体が違うため、換算は単純な係数では済みません：米ガロンは 3.785 L、帝国（英国）ガロンは 4.546 L です。そのため英国 MPG と米国 MPG は直接比較できません。

## よくある用途

- **市場をまたいだ車の比較**：購入ガイドは読者にとって「見慣れない」単位で燃費を表記することが多い
- **車の輸入**：他国の仕様書を読む際に換算が必要
- **旅の計画**：海外のレンタカーで必要な燃料を推定
- **フリート管理**：国際的な fleet では統一された効率報告が必要
- **サステナビリティ報告**：企業は L/100km で排出量を報告し、従業員は MPG で語る

## 方法 1：UtilBoxx の無料燃費換算ツールを使う（推奨）

当社の [燃費換算ツール](/ja/tools/unit/fuel) は米ガロンと帝国ガロンの両方に対応し、L/100km、km/L、MPG（米・英）に対応します。手順は次のとおりです：

1. [utilboxx.com/ja/tools/unit/fuel](/ja/tools/unit/fuel) にアクセス
2. 任意のフィールドに値を入力（L/100km、MPG 米、MPG 英、km/L）
3. 他のフィールドが即座に更新される
4. 切替スイッチで米ガロンと英ガロンを切り替え
5. ワンクリックで任意の値をコピー

**この方法の長所**：
- 米ガロンと帝国ガロンを正確に扱う
- 入力中にリアルタイム換算
- モバイル対応で入力欄が大きめ
- 広告なし、登録不要、追跡なし
- ブラウザ内 100% 動作、データは端末から出ない

## 方法 2：手計算の公式

手計算する必要がある場合：

- L/100km → MPG（米）= 235.215 / (L/100km)
- L/100km → MPG（英）= 282.481 / (L/100km)
- MPG（米）→ L/100km = 235.215 / MPG
- MPG（英）→ L/100km = 282.481 / MPG
- km/L → MPG（米）= km/L × 2.352

例えば 7 L/100km = 235.215 / 7 ≈ 33.6 MPG（米）。

## 方法 3：表計算ソフトを使う

Google スプレッドシートや Excel では小さな換算表を作れます：

\`\`\`
= 235.215 / A1   // L/100km → MPG（米）
= 282.481 / A1   // L/100km → MPG（英）
= A1 / 2.352     // km/L → MPG（米）
= A1 * 0.425144  // MPG（米）→ km/L
\`\`\`

車両データの一括変換に便利です。

## よくある質問

### MPG は高い方が良い？低い方が良い？
MPG では高いほど良い — 1 ガロンでより多く走れることを意味します。L/100km では低いほど良い — 100 km で使う燃料が少ないことを意味します。2 つの体系は逆数の関係です。

### 米 MPG と英 MPG の違いは？
米ガロンは 3.785 L、英（帝国）ガロンは 4.546 L。30 MPG（米）の車は 30 / 1.201 ≈ 25 MPG（英）です。この数字は入れ替えできません。

### 「良い」燃費とは？
現代のコンパクトカーは通常 6〜8 L/100km（約 30〜40 MPG 米）です。ハイブリッドや EV はさらに上。10 L/100km（24 MPG 米 未満）以上はガゾリン食いです。

### 違う国の車はどう比較する？
[UtilBoxx の燃費換算ツール](/ja/tools/unit/fuel) で両車を同じ単位に揃えるか、世界的に普及が進む L/100km を使うと良いでしょう。

## 結論

米国のオークションサイトを見るにしても、ヨーロッパのハッチバックを比較するにしても、海外でロードトリップを計画するにしても、[UtilBoxx の燃費換算ツール](/ja/tools/unit/fuel) があれば計算が瞬時に消えます。`;

const fuelEs = `## MPG vs L/100km: ¿por qué hay dos sistemas de consumo?

El consumo de combustible mide la distancia que recorre un vehículo por unidad de combustible. El problema es que coexisten dos sistemas competidores: Estados Unidos y el Reino Unido usan millas por galón (MPG), mientras que la mayor parte de Europa, Asia y Latinoamérica usan litros por 100 kilómetros (L/100km). Son matemáticamente inversos: un MPG "más alto" significa mejor eficiencia, mientras que un L/100km "más bajo" significa mejor eficiencia.

La conversión entre ellos es más compleja que un simple factor porque el galón mismo difiere: el galón estadounidense es 3,785 L, mientras que el galón imperial (Reino Unido) es 4,546 L. Por eso un MPG británico y un MPG estadounidense no son directamente comparables.

## Casos de uso comunes

- **Comparar coches entre mercados**: las guías de compra a menudo citan consumos en la unidad "incorrecta" para el lector
- **Importar vehículos**: los conversores ayudan al leer fichas técnicas de otros países
- **Planificar viajes**: estimar combustible para un viaje por carretera con un coche alquilado en el extranjero
- **Gestión de flotas**: flotas internacionales necesitan informes de eficiencia consistentes
- **Informes de sostenibilidad**: las empresas reportan emisiones en L/100km, mientras los empleados hablan de MPG

## Método 1: Usa el conversor de consumo gratuito de UtilBoxx (Recomendado)

Nuestro [conversor de consumo de combustible](/es/tools/unit/fuel) maneja galones estadounidenses e imperiales, además de L/100km, km/L y MPG (US y UK). Así se usa:

1. Ve a [utilboxx.com/es/tools/unit/fuel](/es/tools/unit/fuel)
2. Introduce un valor en cualquier campo (L/100km, MPG US, MPG UK, km/L)
3. Todos los demás campos se actualizan al instante
4. Alterna entre galón US y UK con un solo interruptor
5. Copia cualquier valor con un clic

**Por qué funciona este método**:
- Maneja correctamente los galones US e imperial
- Conversión en tiempo real al escribir
- Adaptado a móvil con campos grandes
- Sin anuncios, sin registro, sin seguimiento
- 100% en el navegador, tus datos no salen del dispositivo

## Método 2: Usa las fórmulas manuales

Si necesitas hacer el cálculo a mano:

- L/100km a MPG (US) = 235,215 / (L/100km)
- L/100km a MPG (UK) = 282,481 / (L/100km)
- MPG (US) a L/100km = 235,215 / MPG
- MPG (UK) a L/100km = 282,481 / MPG
- km/L a MPG (US) = km/L × 2,352

Por ejemplo, 7 L/100km = 235,215 / 7 ≈ 33,6 MPG (US).

## Método 3: Usa una hoja de cálculo

En Google Sheets o Excel puedes montar una pequeña tabla de conversión:

\`\`\`
= 235.215 / A1   // L/100km a MPG (US)
= 282.481 / A1   // L/100km a MPG (UK)
= A1 / 2.352     // km/L a MPG (US)
= A1 * 0.425144  // MPG (US) a km/L
\`\`\`

Genial para conversiones en lote de datos de vehículos.

## Preguntas frecuentes

### ¿En MPG es mejor un número alto o bajo?
En MPG, más alto es mejor — recorres más millas por galón. En L/100km, más bajo es mejor — usas menos combustible por 100 km. Los dos sistemas son inversos.

### ¿Cuál es la diferencia entre MPG US y MPG UK?
Un galón US son 3,785 L; un galón UK (imperial) son 4,546 L. Un coche con 30 MPG (US) = 30 / 1,201 ≈ 25 MPG (UK). Los números no son intercambiables.

### ¿Qué es un consumo "bueno"?
Un compacto moderno suele lograr 6-8 L/100km (unos 30-40 MPG US). Los híbridos y eléctricos rinden mucho más. Por encima de 10 L/100km (menos de 24 MPG US) se considera sediento.

### ¿Cómo comparo coches de distintos países?
Usa el [conversor de consumo de UtilBoxx](/es/tools/unit/fuel) para poner ambos coches en la misma unidad, o recurre a la métrica L/100km cada vez más común en el mundo.

## Conclusión

Tanto si navegas por un sitio de subastas estadounidense, comparas compactos europeos o planificas un viaje por carretera en el extranjero, el [conversor de consumo de UtilBoxx](/es/tools/unit/fuel) hace que las matemáticas desaparezcan.`;

const fuelPt = `## MPG vs L/100km: por que existem dois sistemas de consumo?

O consumo de combustível mede a distância percorrida por unidade de combustível. O problema é que existem dois sistemas concorrentes em uso: os Estados Unidos e o Reino Unido usam milhas por galão (MPG), enquanto a maior parte da Europa, Ásia e América Latina usa litros por 100 quilômetros (L/100km). Eles são matematicamente inversos — um MPG "mais alto" significa melhor eficiência, enquanto um L/100km "mais baixo" significa melhor eficiência.

A conversão entre eles é mais complicada do que um fator simples, porque o galão em si difere: o galão americano é 3,785 L, enquanto o galão imperial (Reino Unido) é 4,546 L. Por isso um MPG britânico e um MPG americano não são diretamente comparáveis.

## Casos de uso comuns

- **Comparar carros entre mercados**: guias de compra frequentemente citam consumo na unidade "errada" para o leitor
- **Importar veículos**: conversores ajudam ao ler fichas técnicas de outros países
- **Planejamento de viagens**: estimar combustível para uma road trip com carro alugado no exterior
- **Gestão de frotas**: frotas internacionais precisam de relatórios de eficiência consistentes
- **Relatórios de sustentabilidade**: empresas reportam emissões em L/100km, enquanto funcionários discutem MPG

## Método 1: Use o conversor de consumo gratuito do UtilBoxx (Recomendado)

Nosso [conversor de consumo de combustível](/pt/tools/unit/fuel) trata galões americanos e imperiais, além de L/100km, km/L e MPG (US e UK). Veja como usar:

1. Vá para [utilboxx.com/pt/tools/unit/fuel](/pt/tools/unit/fuel)
2. Digite um valor em qualquer campo (L/100km, MPG US, MPG UK, km/L)
3. Todos os outros campos se atualizam na hora
4. Alterne entre galão US e UK com um único seletor
5. Copie qualquer valor com um clique

**Por que este método funciona**:
- Trata corretamente galões US e imperial
- Conversão em tempo real enquanto você digita
- Adaptado para celular com campos grandes
- Sem anúncios, sem cadastro, sem rastreamento
- 100% no navegador, seus dados não saem do dispositivo

## Método 2: Use as fórmulas manuais

Se você precisa fazer a conta à mão:

- L/100km para MPG (US) = 235,215 / (L/100km)
- L/100km para MPG (UK) = 282,481 / (L/100km)
- MPG (US) para L/100km = 235,215 / MPG
- MPG (UK) para L/100km = 282,481 / MPG
- km/L para MPG (US) = km/L × 2,352

Por exemplo, 7 L/100km = 235,215 / 7 ≈ 33,6 MPG (US).

## Método 3: Use uma planilha

No Google Sheets ou Excel, dá para montar uma pequena tabela de conversão:

\`\`\`
= 235.215 / A1   // L/100km para MPG (US)
= 282.481 / A1   // L/100km para MPG (UK)
= A1 / 2.352     // km/L para MPG (US)
= A1 * 0.425144  // MPG (US) para km/L
\`\`\`

Ótimo para converter dados de veículos em lote.

## Perguntas frequentes

### No MPG, é melhor um número alto ou baixo?
No MPG, quanto maior melhor — você roda mais milhas por galão. No L/100km, quanto menor melhor — você gasta menos combustível por 100 km. Os dois sistemas são inversos.

### Qual a diferença entre MPG US e MPG UK?
Um galão US são 3,785 L; um galão UK (imperial) são 4,546 L. Um carro com 30 MPG (US) = 30 / 1,201 ≈ 25 MPG (UK). Os números não são intercambiáveis.

### O que é um consumo "bom"?
Um compacto moderno costuma fazer 6-8 L/100km (cerca de 30-40 MPG US). Híbridos e EVs rendem muito mais. Acima de 10 L/100km (menos de 24 MPG US) é considerado beberrão.

### Como comparar carros de países diferentes?
Use o [conversor de consumo do UtilBoxx](/pt/tools/unit/fuel) para colocar os dois carros na mesma unidade, ou use a métrica L/100km que é cada vez mais comum no mundo.

## Conclusão

Seja navegando em um site de leilões americano, comparando hatches europeus ou planejando uma road trip no exterior, o [conversor de consumo do UtilBoxx](/pt/tools/unit/fuel) faz a matemática desaparecer.`;

const fuelFr = `## MPG vs L/100km : pourquoi deux systèmes de consommation ?

La consommation de carburant mesure la distance parcourue par un véhicule par unité de carburant. Le problème, c'est que deux systèmes concurrents coexistent : les États-Unis et le Royaume-Uni utilisent les miles par gallon (MPG), tandis que la majeure partie de l'Europe, de l'Asie et de l'Amérique latine utilisent les litres aux 100 kilomètres (L/100km). Ils sont mathématiquement inverses — un MPG « plus élevé » signifie une meilleure efficacité, tandis qu'un L/100km « plus bas » signifie une meilleure efficacité.

La conversion entre eux est plus complexe qu'un simple facteur, car le gallon lui-même diffère : le gallon américain fait 3,785 L, tandis que le gallon impérial (Royaume-Uni) fait 4,546 L. C'est pourquoi un MPG britannique et un MPG américain ne sont pas directement comparables.

## Cas d'usage courants

- **Comparer des voitures entre marchés** : les guides d'achat citent souvent la consommation dans la « mauvaise » unité pour le lecteur
- **Importer un véhicule** : les convertisseurs aident à lire les fiches techniques d'un autre pays
- **Planifier un voyage** : estimer le carburant pour un road trip avec une voiture de location à l'étranger
- **Gestion de flotte** : les flottes internationales ont besoin de rapports d'efficacité homogènes
- **Rapports RSE** : les entreprises communiquent en L/100km, tandis que les employés discutent en MPG

## Méthode 1 : Utilisez le convertisseur de consommation gratuit d'UtilBoxx (Recommandé)

Notre [convertisseur de consommation de carburant](/fr/tools/unit/fuel) gère les gallons américains et impériaux, ainsi que le L/100km, le km/L et le MPG (US et UK). Voici comment l'utiliser :

1. Allez sur [utilboxx.com/fr/tools/unit/fuel](/fr/tools/unit/fuel)
2. Saisissez une valeur dans n'importe quel champ (L/100km, MPG US, MPG UK, km/L)
3. Tous les autres champs se mettent à jour instantanément
4. Basculez entre gallon US et UK d'un seul clic
5. Copiez n'importe quelle valeur en un clic

**Pourquoi cette méthode fonctionne** :
- Gère correctement les gallons US et impérial
- Conversion en temps réel à la frappe
- Adapté au mobile avec de grands champs
- Sans publicité, sans inscription, sans suivi
- 100% dans le navigateur, vos données ne quittent pas l'appareil

## Méthode 2 : Utilisez les formules manuelles

Si vous devez calculer à la main :

- L/100km en MPG (US) = 235,215 / (L/100km)
- L/100km en MPG (UK) = 282,481 / (L/100km)
- MPG (US) en L/100km = 235,215 / MPG
- MPG (UK) en L/100km = 282,481 / MPG
- km/L en MPG (US) = km/L × 2,352

Par exemple, 7 L/100km = 235,215 / 7 ≈ 33,6 MPG (US).

## Méthode 3 : Utilisez un tableur

Dans Google Sheets ou Excel, vous pouvez bâtir une petite table de conversion :

\`\`\`
= 235.215 / A1   // L/100km en MPG (US)
= 282.481 / A1   // L/100km en MPG (UK)
= A1 / 2.352     // km/L en MPG (US)
= A1 * 0.425144  // MPG (US) en km/L
\`\`\`

Idéal pour convertir en lot des données de véhicules.

## Questions fréquentes

### En MPG, un chiffre élevé est-il meilleur ou pire ?
En MPG, plus c'est élevé, mieux c'est — vous parcourez plus de miles par gallon. En L/100km, plus c'est bas, mieux c'est — vous consommez moins de carburant pour 100 km. Les deux systèmes sont inverses.

### Quelle est la différence entre MPG US et MPG UK ?
Un gallon US fait 3,785 L ; un gallon UK (impérial) fait 4,546 L. Une voiture à 30 MPG (US) = 30 / 1,201 ≈ 25 MPG (UK). Les chiffres ne sont pas interchangeables.

### Qu'est-ce qu'une « bonne » consommation ?
Une compacte moderne fait typiquement 6-8 L/100km (environ 30-40 MPG US). Les hybrides et électriques font bien mieux. Au-delà de 10 L/100km (moins de 24 MPG US) on parle de voiture assoiffée.

### Comment comparer des voitures de pays différents ?
Utilisez le [convertisseur de consommation d'UtilBoxx](/fr/tools/unit/fuel) pour ramener les deux voitures à la même unité, ou adoptez le L/100km, de plus en plus répandu dans le monde.

## Conclusion

Que vous parcouriez un site d'enchères américain, compariez des citadines européennes ou planifiiez un road trip à l'étranger, le [convertisseur de consommation d'UtilBoxx](/fr/tools/unit/fuel) fait disparaître les calculs.`;

const fuelDe = `## MPG vs L/100km: Warum gibt es zwei Verbrauchssysteme?

Der Kraftstoffverbrauch misst die Strecke, die ein Fahrzeug pro Einheit Kraftstoff zurücklegt. Das Problem: Es gibt zwei konkurrierende Systeme: Die USA und Großbritannien verwenden Meilen pro Gallone (MPG), während der Großteil Europas, Asiens und Lateinamerikas Liter pro 100 Kilometer (L/100km) nutzt. Sie sind mathematisch invers — ein „höherer" MPG bedeutet bessere Effizienz, ein „niedrigerer" L/100km bedeutet bessere Effizienz.

Die Umrechnung zwischen ihnen ist komplexer als ein einfacher Faktor, denn die Gallone selbst unterscheidet sich: Die US-Gallone fasst 3,785 L, die imperiale (UK) Gallone 4,546 L. Deshalb sind UK-MPG und US-MPG nicht direkt vergleichbar.

## Häufige Anwendungsfälle

- **Fahrzeuge zwischen Märkten vergleichen**: Kaufberater geben den Verbrauch oft in der für den Leser „falschen" Einheit an
- **Fahrzeuge importieren**: Umrechner helfen beim Lesen ausländischer Datenblätter
- **Reiseplanung**: Kraftstoffbedarf für einen Roadtrip mit einem Mietwagen im Ausland schätzen
- **Flottenmanagement**: Internationale Flotten benötigen einheitliche Effizienzberichte
- **Nachhaltigkeitsberichte**: Unternehmen berichten in L/100km, während Mitarbeiter in MPG denken

## Methode 1: Den kostenlosen Verbrauchsumrechner von UtilBoxx verwenden (Empfohlen)

Unser [Kraftstoffverbrauchs-Umrechner](/de/tools/unit/fuel) verarbeitet US- und Imperial-Gallonen sowie L/100km, km/L und MPG (US und UK). So verwenden Sie ihn:

1. Gehen Sie zu [utilboxx.com/de/tools/unit/fuel](/de/tools/unit/fuel)
2. Geben Sie einen Wert in ein beliebiges Feld ein (L/100km, MPG US, MPG UK, km/L)
3. Alle anderen Felder aktualisieren sich sofort
4. Wechseln Sie mit einem Schalter zwischen US- und UK-Gallone
5. Kopieren Sie jeden Wert mit einem Klick

**Warum diese Methode funktioniert**:
- Verarbeitet US- und Imperial-Gallonen korrekt
- Echtzeit-Umrechnung beim Tippen
- Mobilfreundlich mit großen Feldern
- Keine Werbung, keine Registrierung, kein Tracking
- 100% im Browser, Ihre Daten verlassen das Gerät nicht

## Methode 2: Manuelle Formeln

Wenn Sie die Rechnung von Hand erledigen müssen:

- L/100km zu MPG (US) = 235,215 / (L/100km)
- L/100km zu MPG (UK) = 282,481 / (L/100km)
- MPG (US) zu L/100km = 235,215 / MPG
- MPG (UK) zu L/100km = 282,481 / MPG
- km/L zu MPG (US) = km/L × 2,352

Beispiel: 7 L/100km = 235,215 / 7 ≈ 33,6 MPG (US).

## Methode 3: Tabellenkalkulation verwenden

In Google Sheets oder Excel können Sie eine kleine Umrechnungstabelle anlegen:

\`\`\`
= 235.215 / A1   // L/100km zu MPG (US)
= 282.481 / A1   // L/100km zu MPG (UK)
= A1 / 2.352     // km/L zu MPG (US)
= A1 * 0.425144  // MPG (US) zu km/L
\`\`\`

Ideal für die Stapelumrechnung von Fahrzeugdaten.

## Häufig gestellte Fragen

### Ist ein hoher oder niedriger MPG besser?
Bei MPG ist höher besser — Sie fahren mehr Meilen pro Gallone. Bei L/100km ist niedriger besser — Sie verbrauchen weniger Kraftstoff pro 100 km. Die beiden Systeme sind umgekehrt proportional.

### Was ist der Unterschied zwischen US-MPG und UK-MPG?
Eine US-Gallone fasst 3,785 L; eine UK-(Imperial-)Gallone 4,546 L. Ein Auto mit 30 MPG (US) = 30 / 1,201 ≈ 25 MPG (UK). Die Zahlen sind nicht austauschbar.

### Was ist ein „guter" Verbrauch?
Ein moderner Kompaktwagen schafft typisch 6-8 L/100km (etwa 30-40 MPG US). Hybride und Elektroautos liegen deutlich darunter. Über 10 L/100km (unter 24 MPG US) gilt als durstig.

### Wie vergleiche ich Autos aus verschiedenen Ländern?
Verwenden Sie den [Verbrauchsumrechner von UtilBoxx](/de/tools/unit/fuel), um beide Autos auf dieselbe Einheit zu bringen, oder nutzen Sie die zunehmend weltweite L/100km-Metrik.

## Fazit

Ob Sie eine US-Auktionsseite durchstöbern, europäische Kompakte vergleichen oder einen Roadtrip im Ausland planen — der [Verbrauchsumrechner von UtilBoxx](/de/tools/unit/fuel) lässt die Mathematik verschwinden.`;

export const fuelPost: Record<string, BlogPost> = {
  en: {
    slug: "fuel-economy-mpg-vs-l100km",
    category: "Unit Converters",
    date: "2026-05-20",
    readTime: "7 min",
    title: "MPG vs L/100km: How to Compare Fuel Economy Across Markets",
    description: "A practical guide to converting between US/UK MPG and L/100km, plus tips for comparing cars worldwide.",
    content: fuelEn,
  },
  zh: {
    slug: "fuel-economy-mpg-vs-l100km",
    category: "单位换算",
    date: "2026-05-20",
    readTime: "7 分钟",
    title: "MPG vs L/100km：如何跨市场比较油耗",
    description: "美制/英制 MPG 与 L/100km 之间换算的实用指南，以及跨国比较车辆的技巧。",
    content: fuelZh,
  },
  ja: {
    slug: "fuel-economy-mpg-vs-l100km",
    category: "単位変換",
    date: "2026-05-20",
    readTime: "7 分",
    title: "MPG vs L/100km：市場を越えて燃費を比較する方法",
    description: "米国/英国 MPG と L/100km を換算する実践ガイドと、世界中で車を比較するコツ。",
    content: fuelJa,
  },
  es: {
    slug: "fuel-economy-mpg-vs-l100km",
    category: "Conversores de Unidades",
    date: "2026-05-20",
    readTime: "7 min",
    title: "MPG vs L/100km: cómo comparar el consumo entre mercados",
    description: "Guía práctica para convertir entre MPG US/UK y L/100km, con consejos para comparar coches en todo el mundo.",
    content: fuelEs,
  },
  pt: {
    slug: "fuel-economy-mpg-vs-l100km",
    category: "Conversores de Unidades",
    date: "2026-05-20",
    readTime: "7 min",
    title: "MPG vs L/100km: como comparar o consumo entre mercados",
    description: "Guia prático para converter entre MPG US/UK e L/100km, com dicas para comparar carros no mundo todo.",
    content: fuelPt,
  },
  fr: {
    slug: "fuel-economy-mpg-vs-l100km",
    category: "Convertisseurs d'Unités",
    date: "2026-05-20",
    readTime: "7 min",
    title: "MPG vs L/100km : comment comparer la consommation entre marchés",
    description: "Guide pratique pour convertir entre MPG US/UK et L/100km, avec des conseils pour comparer les voitures dans le monde.",
    content: fuelFr,
  },
  de: {
    slug: "fuel-economy-mpg-vs-l100km",
    category: "Einheitenumrechner",
    date: "2026-05-20",
    readTime: "7 Min",
    title: "MPG vs L/100km: Kraftstoffverbrauch zwischen Märkten vergleichen",
    description: "Praktischer Leitfaden zur Umrechnung zwischen US/UK MPG und L/100km, mit Tipps zum weltweiten Fahrzeugvergleich.",
    content: fuelDe,
  },
};
