import Image from "next/image"
import { Award, TrendingUp, Globe, Users, Star, Coffee, Flame, ArrowUpCircle, Info } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationSection } from "@/components/NavigationSection";

export default function CafeEspecialPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="O que é Café Especial?"
        description="Descubra as características que tornam um café verdadeiramente especial e como identificar qualidade excepcional."
        icon={<Award className="h-6 w-6 md:h-8 md:w-8 text-coffee-600 dark:text-coffee-400" />}
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                Definição e Características
              </h2>
              <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
                <p>
                  Cafés especiais são grãos de qualidade superior que recebem pontuação acima de 80 pontos na escala de
                  100 da Specialty Coffee Association (SCA). Esta avaliação considera aspectos como aroma, sabor,
                  acidez, corpo, equilíbrio e ausência de defeitos.
                </p>
                <p>
                  O que diferencia um café especial não é apenas a pontuação, mas toda a cadeia de cuidados: desde o
                  cultivo em microclimas específicos, colheita seletiva, processamento cuidadoso, até a torra artesanal
                  que revela o potencial único de cada lote.
                </p>
                <p>
                  Cada café especial conta uma história sobre seu terroir - a combinação única de solo, clima, altitude
                  e variedade que resulta em perfis sensoriais complexos e distintivos.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-coffee-200 to-gold-200 dark:from-coffee-800 dark:to-coffee-700 rounded-full blur-3xl opacity-40" />
              <Image
                src="/coffee1.jpg"
                width={500}
                height={400}
                alt="Grãos de café especial"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
            <InfoCard
              title="Pontuação SCA"
              description="Avaliação rigorosa que considera 10 critérios sensoriais, com pontuação mínima de 80 pontos."
              icon={<TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Rastreabilidade"
              description="Origem conhecida e documentada, permitindo rastrear desde a fazenda até a xícara."
              icon={<Globe className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Sustentabilidade"
              description="Práticas ambientalmente responsáveis e socialmente justas na produção."
              icon={<span className="text-xl md:text-2xl">🌱</span>}
            />
            <InfoCard
              title="Comunidade"
              description="Valorização do trabalho dos produtores e fortalecimento das comunidades rurais."
              icon={<Users className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
          </div>

          <div className="space-y-16">
            <div>
              <p className="text-foreground text-lg leading-relaxed">
                No Brasil, temos um sistema duplo de classificação de cafés. A ABIC é responsável por avaliar e certificar os cafés comerciais que encontramos no mercado, usando uma escala de 0 a 10. Por outro lado, os cafés especiais são avaliados pela BSCA e SCA, que utilizam uma metodologia mais rigorosa com pontuação de 0 a 100.
              </p>
            </div>

            {/* Categorias de Café Comercial */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Categorias de Café Comercial no Brasil</h3>
              <div className="space-y-8">
                <div className="bg-coffee-50/50 dark:bg-coffee-900/30 p-6 rounded-lg">
                  <p className="text-sm text-coffee-800 dark:text-coffee-200">
                    <strong>Importante:</strong> As categorias abaixo se referem apenas aos cafés comerciais. Mesmo o café Gourmet, que é a melhor categoria comercial, ainda está abaixo dos padrões exigidos para um café especial (que precisa ter mais de 80 pontos na escala SCA).
                  </p>
                </div>
                <p className="text-foreground text-lg">
                  A ABIC classifica os cafés comerciais em quatro categorias principais, em ordem decrescente de qualidade:
                </p>
                <div className="grid gap-8">
                  <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                        <Award className="h-6 w-6 text-coffee-600 dark:text-coffee-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">Gourmet</h4>
                        <p className="text-sm text-muted-foreground/80 mt-1">Melhor Categoria Comercial</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Mistura pura de grãos arábica de alta qualidade, sem defeitos. Colheita seletiva, processamento cuidadoso e torra controlada. É o melhor entre os cafés comerciais, mas ainda não atinge a complexidade e os critérios rigorosos dos cafés especiais.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                        <Star className="h-6 w-6 text-coffee-600 dark:text-coffee-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">Superior</h4>
                        <p className="text-sm text-muted-foreground/80 mt-1">Qualidade Intermediária</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Grãos mais refinados, com até 10% de defeitos permitidos. Blend de arábica com pequena porcentagem de conilon. Sabor e aroma mais pronunciados que o tradicional.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                        <Coffee className="h-6 w-6 text-coffee-600 dark:text-coffee-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">Tradicional</h4>
                        <p className="text-sm text-muted-foreground/80 mt-1">Qualidade Básica</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Mistura de grãos arábica e conilon sem seleção específica. Colheita não seletiva, incluindo grãos verdes e maduros. Maior tolerância a defeitos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                        <Flame className="h-6 w-6 text-coffee-600 dark:text-coffee-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">Extraforte</h4>
                        <p className="text-sm text-muted-foreground/80 mt-1">Torra Muito Escura</p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Torra muito escura, quase carbonizada. Geralmente contém maior quantidade de impurezas e defeitos, que são mascarados pela torra intensa. Sabor mais amargo e intenso.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-6">
                <div className="bg-coffee-100 dark:bg-coffee-900 p-3 rounded-lg flex-shrink-0">
                  <ArrowUpCircle className="h-6 w-6 text-coffee-600 dark:text-coffee-400" />
                </div>
                <p className="text-foreground text-lg leading-relaxed">
                  Enquanto a ABIC classifica os cafés comerciais, a SCA estabelece padrões internacionais para cafés especiais. A BSCA adota esses padrões e trabalha para promover os cafés especiais brasileiros no mercado global. Para um café ser considerado especial, ele precisa atingir no mínimo 80 pontos na escala SCA, o que exige um nível de qualidade e cuidado muito superior ao encontrado mesmo nos melhores cafés comerciais.
                </p>
              </div>
            </div>

            {/* Escala de Pontuação SCA */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Escala de Pontuação SCA</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-muted-foreground mb-6">
                    A metodologia SCA é considerada o padrão ouro na avaliação de cafés especiais. Cada café é avaliado por Q-Graders (provadores certificados) que analisam diversos aspectos da bebida:
                  </p>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      { criteria: "Aroma/Fragrância", description: "Intensidade e qualidade do cheiro", points: "10 pontos" },
                      { criteria: "Sabor", description: "Características na xícara", points: "15 pontos" },
                      { criteria: "Doçura", description: "Presença de açúcares naturais", points: "10 pontos" },
                      { criteria: "Acidez", description: "Vivacidade e notas frutadas", points: "15 pontos" },
                      { criteria: "Corpo", description: "Textura e densidade na boca", points: "15 pontos" },
                      { criteria: "Finalização", description: "Sabor que permanece após beber", points: "15 pontos" },
                      { criteria: "Equilíbrio", description: "Harmonia entre os elementos", points: "10 pontos" },
                      { criteria: "Defeitos", description: "Ausência de sabores ruins", points: "10 pontos" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col p-2 md:p-3 info-box rounded text-sm md:text-base"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-foreground">{item.criteria}</span>
                          <span className="text-coffee-600 dark:text-coffee-400 text-sm">{item.points}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">{item.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="space-y-3 md:space-y-4">
                    <div className="p-4 md:p-5 bg-violet-100 dark:bg-violet-900/30 border-l-4 border-violet-500 rounded-lg">
                      <div className="font-bold text-violet-800 dark:text-violet-300 text-lg">Extraordinário</div>
                      <div className="text-violet-700 dark:text-violet-400">90+ pontos</div>
                      <div className="mt-2 text-sm text-violet-600 dark:text-violet-300">
                        Raridades premiadas no Cup of Excellence. São os melhores cafés do mundo, com características únicas e excepcionais.
                      </div>
                    </div>
                    <div className="p-4 md:p-5 bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 rounded-lg">
                      <div className="font-bold text-green-800 dark:text-green-300 text-lg">Especial</div>
                      <div className="text-green-700 dark:text-green-400">80-89 pontos</div>
                      <div className="mt-2 text-sm text-green-600 dark:text-green-300">
                        Grãos maduros cuidadosamente selecionados. Alta qualidade, complexidade sensorial e características distintivas.
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/50 rounded-lg">
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>Você sabia?</strong> O café mais bem pontuado do mundo é brasileiro! 
                      A Fazenda Santa Inês, em Carmo de Minas, alcançou 95.85 pontos em 2005, um recorde histórico que permanece até hoje.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-6">
                <div className="bg-coffee-100 dark:bg-coffee-900 p-3 rounded-lg flex-shrink-0">
                  <Info className="h-6 w-6 text-coffee-600 dark:text-coffee-400" />
                </div>
                <p className="text-foreground text-lg leading-relaxed">
                  É importante notar que mesmo dentro da categoria de cafés especiais, há uma grande variação de qualidade e características. Um café de 82 pontos já é considerado especial, mas um café de 90+ pontos representa o ápice da qualidade, geralmente premiado em competições internacionais e altamente valorizado no mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Diferenças entre Café Especial e Comum
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-coffee-600 dark:text-coffee-400 mb-3 md:mb-4">
                ☕ Café Especial
              </h3>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                <li>• Pontuação acima de 80 pontos SCA</li>
                <li>• Origem rastreável e conhecida</li>
                <li>• Colheita seletiva manual</li>
                <li>• Processamento cuidadoso</li>
                <li>• Torra artesanal personalizada</li>
                <li>• Perfil sensorial complexo</li>
                <li>• Preço premium justo</li>
                <li>• Sustentabilidade social e ambiental</li>
              </ul>
            </div>
            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                ☕ Café Comum
              </h3>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                <li>• Pontuação abaixo de 80 pontos</li>
                <li>• Origem genérica ou misturada</li>
                <li>• Colheita mecanizada em massa</li>
                <li>• Processamento industrial</li>
                <li>• Torra padronizada</li>
                <li>• Sabor uniforme e simples</li>
                <li>• Preço baseado na bolsa de valores</li>
                <li>• Foco na quantidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <NavigationSection
        afterNav={{ href: "/variedades", label: "Variedades do café" }}
      />
    </div>
  )
}
