import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Droplet, Thermometer, Filter, Beaker, CheckCircle } from "lucide-react"

export default function AguaEExtracao() {
  return (
    <div className="min-h-screen pb-16">
      <PageHeader title="Água e Extração" description="A ciência por trás da água perfeita para o seu café" />

      {/* Introdução */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-gradient">
                A Importância da Água no Café
              </h2>
              <p className="text-muted-foreground mb-4">
                O café é 98-99% água, tornando-a o ingrediente mais importante depois dos grãos. A qualidade da água
                afeta diretamente o sabor, aroma e corpo da bebida final, podendo realçar ou mascarar as características
                do café.
              </p>
              <p className="text-muted-foreground">
                Mesmo o melhor café do mundo, preparado com técnica impecável, pode resultar em uma xícara medíocre se a
                água utilizada não for adequada. Nesta página, exploraremos os aspectos fundamentais da água para café e
                como otimizar a extração.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-coffee-200 dark:from-blue-900 dark:to-coffee-800 rounded-3xl blur-2xl opacity-30" />
              <div className="relative glass-effect rounded-3xl p-2">
                <Image
                  src="/water.jpg"
                  width={600}
                  height={400}
                  alt="Água sendo despejada sobre café moído"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Composição Ideal da Água */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Droplet className="h-5 w-5 text-blue-600 dark:text-blue-300" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gradient">Composição Ideal da Água</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl font-serif font-medium mb-3">Dureza Total</h3>
              <p className="text-muted-foreground mb-4">
                A dureza total refere-se principalmente à concentração de cálcio e magnésio na água. A Specialty Coffee
                Association (SCA) recomenda uma dureza total entre 50-175 ppm (partes por milhão).
              </p>
              <p className="text-muted-foreground mb-6">
                Água muito mole (baixa dureza) resulta em extração insuficiente e sabor aguado, enquanto água muito dura
                pode causar extração excessiva e sabores metálicos ou amargos.
              </p>

              <h3 className="text-xl font-serif font-medium mb-3">Alcalinidade</h3>
              <p className="text-muted-foreground">
                A alcalinidade mede a capacidade da água de neutralizar ácidos. A SCA recomenda uma alcalinidade entre
                40-70 ppm. Água com alta alcalinidade neutraliza os ácidos desejáveis do café, resultando em uma bebida
                sem brilho e com sabores planos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-medium mb-3">pH</h3>
              <p className="text-muted-foreground mb-4">
                O pH ideal para água de café está entre 6.5 e 7.5 (neutro a ligeiramente ácido). Água muito ácida ou
                muito alcalina interfere na extração adequada dos compostos do café.
              </p>

              <h3 className="text-xl font-serif font-medium mb-3">TDS (Total de Sólidos Dissolvidos)</h3>
              <p className="text-muted-foreground mb-4">
                O TDS ideal para café está entre 75-250 ppm. Este valor representa todos os minerais e sais dissolvidos
                na água. Água com TDS muito baixo (como água destilada) produz café sem corpo e com sabor plano,
                enquanto TDS muito alto pode resultar em sabores indesejados.
              </p>

              <div className="glass-effect rounded-lg p-4 mt-4">
                <h4 className="font-medium mb-2">Padrão SCA para Água de Café</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Odor: Limpo/Fresco, sem odor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Cloro: 0 mg/L</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>TDS: 75-250 mg/L (ideal: 150 mg/L)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Dureza: 50-175 mg/L (ideal: 75-125 mg/L)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Alcalinidade: 40-70 mg/L (ideal: 40 mg/L)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>pH: 6.5-7.5 (ideal: 7.0)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Sódio: 10 mg/L</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Efeito dos Minerais */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-coffee-100 dark:bg-coffee-900 flex items-center justify-center">
              <Beaker className="h-5 w-5 text-coffee-600 dark:text-coffee-300" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gradient">
              Efeito dos Minerais no Sabor
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-serif font-medium mb-3">Cálcio (Ca²⁺)</h3>
              <p className="text-muted-foreground">
                O cálcio é excelente para extrair compostos que contribuem para o corpo e doçura do café. Ele se liga
                bem aos ácidos do café, criando uma xícara equilibrada. Níveis ideais de cálcio estão entre 50-80 ppm.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-serif font-medium mb-3">Magnésio (Mg²⁺)</h3>
              <p className="text-muted-foreground">
                O magnésio é ainda melhor que o cálcio para extrair sabores, especialmente os compostos que contribuem
                para acidez e notas frutadas. Níveis ideais estão entre 10-30 ppm. Muitos baristas preferem água com uma
                proporção maior de magnésio em relação ao cálcio.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-serif font-medium mb-3">Bicarbonato (HCO₃⁻)</h3>
              <p className="text-muted-foreground">
                O bicarbonato atua como um tampão, neutralizando ácidos. Em níveis adequados (40-70 ppm), ele ajuda a
                equilibrar a acidez do café. Em excesso, ele neutraliza os ácidos desejáveis, resultando em café sem
                brilho e com sabor plano.
              </p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-serif font-medium mb-3">Minerais Indesejados</h3>
              <p className="text-muted-foreground mb-4">
                Alguns minerais e compostos devem ser evitados ou minimizados na água para café:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span>
                    <strong>Cloro:</strong> Interfere nos aromas e adiciona sabores químicos
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span>
                    <strong>Ferro:</strong> Causa sabores metálicos e oxidação
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span>
                    <strong>Sódio:</strong> Em excesso, adiciona salinidade indesejada
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span>
                    <strong>Sulfatos:</strong> Podem adicionar sabores sulfurosos
                  </span>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-coffee-200 dark:from-blue-900 dark:to-coffee-800 rounded-3xl blur-2xl opacity-30" />
              <div className="relative glass-effect rounded-3xl p-2">
                <Image
                  src="/mineral.jpg"
                  width={500}
                  height={300}
                  alt="Ilustração dos minerais na água"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temperatura */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
              <Thermometer className="h-5 w-5 text-red-600 dark:text-red-300" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gradient">
              Temperatura e seu Impacto na Extração
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-4">
                A temperatura da água é um fator crítico na extração do café. Água mais quente extrai compostos mais
                rapidamente, enquanto água mais fria resulta em extração mais lenta e seletiva.
              </p>

              <h3 className="text-xl font-serif font-medium mb-3">Faixas de Temperatura Recomendadas</h3>
              <ul className="space-y-4 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 dark:text-red-300 font-medium">90°C</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Cafés torrados claros:</strong> 90-96°C (195-205°F)
                    <p className="text-sm mt-1">
                      Torras claras contêm mais ácidos e compostos solúveis que se beneficiam de temperaturas mais altas
                      para extração adequada.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-amber-600 dark:text-amber-300 font-medium">88°C</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Cafés torrados médios:</strong> 88-92°C (190-198°F)
                    <p className="text-sm mt-1">
                      Torras médias oferecem um equilíbrio entre ácidos e compostos desenvolvidos na torra, funcionando
                      bem com temperaturas intermediárias.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-coffee-100 dark:bg-coffee-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-coffee-600 dark:text-coffee-300 font-medium">85°C</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Cafés torrados escuros:</strong> 85-90°C (185-195°F)
                    <p className="text-sm mt-1">
                      Torras escuras são mais solúveis e podem se tornar amargas com temperaturas muito altas,
                      beneficiando-se de água ligeiramente mais fria.
                    </p>
                  </div>
                </li>
              </ul>

              <p className="text-muted-foreground">
                É importante notar que a temperatura cai rapidamente durante o preparo. Por exemplo, em métodos de
                filtração, a temperatura pode cair 5-8°C entre o momento em que a água é despejada e quando ela
                atravessa o café moído.
              </p>
            </div>

            <div>
              <div className="glass-effect rounded-xl p-6 mb-6">
                <h3 className="text-xl font-serif font-medium mb-3">Efeitos da Temperatura</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></span>
                    <span>
                      <strong>Temperatura alta (94-96°C):</strong> Extrai mais ácidos, compostos aromáticos e cafeína.
                      Pode resultar em maior acidez e corpo, mas também pode extrair compostos amargos indesejados.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2"></span>
                    <span>
                      <strong>Temperatura média (88-92°C):</strong> Oferece extração equilibrada, destacando tanto
                      acidez quanto doçura.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                    <span>
                      <strong>Temperatura baixa (80-85°C):</strong> Extração mais seletiva, com menos compostos amargos.
                      Pode resultar em café com menos corpo e acidez mais suave, mas também pode levar à sub-extração.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-serif font-medium mb-3">Cold Brew</h3>
                <p className="text-muted-foreground">
                  A extração a frio (cold brew) usa água em temperatura ambiente ou refrigerada (2-21°C) por períodos
                  prolongados (12-24 horas). Este método extrai menos ácidos e compostos amargos, resultando em uma
                  bebida naturalmente doce e suave, com baixa acidez e alto teor de cafeína.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtração e Tratamento */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <Filter className="h-5 w-5 text-blue-600 dark:text-blue-300" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gradient">
              Filtração e Tratamento da Água
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl font-serif font-medium mb-3">Métodos de Filtração</h3>
              <ul className="space-y-4 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-300 font-medium">1</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Filtros de Carbono Ativado</strong>
                    <p className="text-sm mt-1">
                      Removem cloro, odores e alguns contaminantes orgânicos. São eficazes para melhorar o sabor, mas
                      não alteram a dureza ou mineralização da água.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-300 font-medium">2</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Osmose Reversa</strong>
                    <p className="text-sm mt-1">
                      Remove praticamente todos os minerais e contaminantes, resultando em água quase pura. Para café,
                      esta água precisa ser remineralizada para obter resultados ideais.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-300 font-medium">3</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Filtros de Troca Iônica</strong>
                    <p className="text-sm mt-1">
                      Substituem íons indesejados por outros mais benéficos. Alguns filtros específicos para café trocam
                      sódio por magnésio e cálcio em proporções ideais.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 dark:text-blue-300 font-medium">4</span>
                  </div>
                  <div>
                    <strong className="text-foreground">Filtros Específicos para Café</strong>
                    <p className="text-sm mt-1">
                      Produtos como BWT, Third Wave Water e Peak Water são projetados especificamente para otimizar a
                      água para café, ajustando a mineralização para níveis ideais.
                    </p>
                  </div>
                </li>
              </ul>

              <h3 className="text-xl font-serif font-medium mb-3">Remineralização</h3>
              <p className="text-muted-foreground">
                Se você usa água destilada ou de osmose reversa, é essencial adicionar minerais para obter uma extração
                adequada. Existem produtos comerciais como Third Wave Water (sachês de minerais) ou você pode criar sua
                própria mistura usando bicarbonato de sódio, sulfato de magnésio (sal de Epsom) e cloreto de cálcio em
                proporções específicas.
              </p>
            </div>

            <div>
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-200 to-coffee-200 dark:from-blue-900 dark:to-coffee-800 rounded-3xl blur-2xl opacity-30" />
                <div className="relative glass-effect rounded-3xl p-2">
                  <Image
                    src="barro.jpg"
                    width={500}
                    height={300}
                    alt="Sistemas de filtração de água para café"
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-xl font-serif font-medium mb-3">Testando sua Água</h3>
                <p className="text-muted-foreground mb-4">
                  Para otimizar sua água para café, é útil conhecer sua composição atual. Existem várias opções para
                  testar:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>
                      <strong>Kits de teste de dureza:</strong> Medem cálcio e magnésio
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>
                      <strong>Medidores de TDS:</strong> Medem o total de sólidos dissolvidos
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>
                      <strong>Tiras de pH:</strong> Medem a acidez/alcalinidade
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>
                      <strong>Testes profissionais:</strong> Laboratórios podem fornecer análises detalhadas
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recomendações Práticas */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 text-gradient text-center">
            Recomendações Práticas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-serif font-medium mb-3">Para Uso Doméstico</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Use filtros de carbono ativado para remover cloro e melhorar o sabor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Se sua água for muito dura, considere um amaciante específico para café</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Evite água engarrafada com alto teor de sódio ou sulfatos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Água mineral com TDS entre 75-150 ppm geralmente funciona bem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Considere produtos como Third Wave Water para remineralizar água filtrada</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-serif font-medium mb-3">Para Cafeterias</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Invista em um sistema de filtração profissional com remineralização controlada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Teste sua água regularmente e ajuste o sistema conforme necessário</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Considere diferentes perfis de água para diferentes cafés e métodos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Use filtros de proteção contra calcário para máquinas de espresso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Mantenha registros da qualidade da água e como ela afeta diferentes cafés</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <h3 className="text-xl font-serif font-medium mb-3">Dicas de Temperatura</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Use um termômetro ou chaleira com controle de temperatura</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Para cafés mais ácidos, use temperaturas mais baixas para suavizar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Para cafés com notas mais sutis, use temperaturas mais altas para extrair mais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Pré-aqueça todos os equipamentos para minimizar a queda de temperatura</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></span>
                  <span>Lembre-se que a altitude afeta o ponto de ebulição (diminui ~1°C a cada 300m)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 glass-effect rounded-xl p-6">
            <h3 className="text-xl font-serif font-medium mb-4 text-center">Receita Básica para Água de Café</h3>
            <p className="text-muted-foreground text-center mb-6">
              Se você quiser criar sua própria água para café usando água destilada ou de osmose reversa, aqui está uma
              receita simples:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 dark:text-blue-300 font-medium">1</span>
                </div>
                <p className="text-muted-foreground">
                  <strong>40mg</strong> de bicarbonato de sódio (NaHCO₃)
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 dark:text-blue-300 font-medium">2</span>
                </div>
                <p className="text-muted-foreground">
                  <strong>80mg</strong> de sulfato de magnésio (MgSO₄, sal de Epsom)
                </p>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 dark:text-blue-300 font-medium">3</span>
                </div>
                <p className="text-muted-foreground">
                  <strong>1 litro</strong> de água destilada ou de osmose reversa
                </p>
              </div>
            </div>

            <p className="text-muted-foreground text-center mt-6">
              Dissolva completamente os minerais na água. Esta mistura fornecerá aproximadamente 40ppm de alcalinidade e
              20ppm de dureza de magnésio, criando uma água leve mas eficaz para extração.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
