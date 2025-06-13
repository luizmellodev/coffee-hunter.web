import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { AlertTriangle, Check, Heart, Info, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CafeESaude() {
  return (
    <>
      {/* Header */}
      <PageHeader
        title="Café e Saúde"
        description="Entenda os efeitos do café no organismo, benefícios comprovados e recomendações para um consumo saudável. Descubra como o café pode contribuir para seu bem-estar quando consumido com moderação."
        icon={<Heart className="h-8 w-8 text-[#C38154]" />}
      />

      <main className="container px-4 md:px-6 py-10 md:py-12 lg:py-16">
        {/* Introdução */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Café: Mais que uma Bebida</h2>
                <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    O café é uma das bebidas mais consumidas no mundo, e há séculos desperta interesse não apenas por seu
                    sabor e aroma, mas também por seus efeitos no organismo.
                  </p>
                  <p>
                    Nos últimos anos, a ciência tem se dedicado a entender melhor a relação entre o café e a saúde,
                    revelando que, quando consumido com moderação, o café pode oferecer diversos benefícios.
                  </p>
                  <p>
                    Nesta página, apresentamos informações baseadas em estudos científicos sobre os efeitos do café no
                    organismo, seus benefícios, possíveis contraindicações e recomendações para um consumo saudável.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="degustation.jpg"
                    fill
                    alt="Xícara de café com grãos ao redor"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Efeitos da Cafeína */}
        <section className="py-16 bg-accent/20">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/methods.jpg"
                    fill
                    alt="Efeitos da cafeína no organismo"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Efeitos da Cafeína no Organismo</h2>
                <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    A cafeína é o componente mais conhecido do café e responsável por muitos de seus efeitos no organismo. Ela
                    atua como um estimulante do sistema nervoso central, bloqueando a ação da adenosina, um neurotransmissor que
                    promove o relaxamento e o sono.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Efeitos Imediatos</h3>
                      <ul className="space-y-3">
                        <li className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#884A39] dark:bg-amber-300"></div>
                          </div>
                          <div>
                            <strong className="block text-[#884A39] dark:text-amber-300">Aumento do estado de alerta</strong>
                            <span className="text-sm">A cafeína bloqueia os receptores de adenosina, reduzindo a sensação de cansaço.</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#884A39] dark:bg-amber-300"></div>
                          </div>
                          <div>
                            <strong className="block text-[#884A39] dark:text-amber-300">Melhora da concentração</strong>
                            <span className="text-sm">Aumenta a capacidade de foco e atenção por períodos mais longos.</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#884A39] dark:bg-amber-300"></div>
                          </div>
                          <div>
                            <strong className="block text-[#884A39] dark:text-amber-300">Aumento do metabolismo</strong>
                            <span className="text-sm">Acelera temporariamente o metabolismo e pode aumentar a queima de gordura.</span>
                          </div>
                        </li>
                        <li className="flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#884A39] dark:bg-amber-300"></div>
                          </div>
                          <div>
                            <strong className="block text-[#884A39] dark:text-amber-300">Melhora do desempenho físico</strong>
                            <span className="text-sm">Aumenta a resistência e reduz a percepção de esforço durante exercícios.</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Metabolismo e Duração</h3>
                      <p className="mb-4">
                        A cafeína é absorvida rapidamente pelo organismo, com pico de concentração no sangue entre 30 e 60
                        minutos após o consumo. Seus efeitos podem durar de 3 a 5 horas, dependendo de fatores individuais.
                      </p>
                      <div className="bg-[#F9E0BB]/20 dark:bg-amber-900/20 rounded-lg p-4">
                        <h4 className="font-bold text-[#884A39] dark:text-amber-300 mb-2">Fatores que afetam o metabolismo da cafeína:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Genética - Algumas pessoas metabolizam a cafeína mais rapidamente que outras</li>
                          <li>• Idade - Adultos mais velhos tendem a metabolizar a cafeína mais lentamente</li>
                          <li>• Gravidez - Mulheres grávidas metabolizam a cafeína mais lentamente</li>
                          <li>• Medicamentos - Alguns medicamentos podem interferir no metabolismo da cafeína</li>
                          <li>• Tabagismo - Fumantes metabolizam a cafeína mais rapidamente</li>
                          <li>• Tolerância - Consumidores regulares desenvolvem tolerância a alguns efeitos da cafeína</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios Comprovados */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Benefícios Comprovados Cientificamente</h2>
                <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    Nas últimas décadas, centenas de estudos científicos investigaram os efeitos do café na saúde. Aqui estão
                    alguns dos benefícios mais consistentemente observados e respaldados por evidências científicas:
                  </p>
                  <div className="grid gap-6">
                    <div className="bg-[#F9E0BB]/20 dark:bg-amber-900/20 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <Heart className="h-6 w-6 text-[#884A39] dark:text-amber-300 mr-2" />
                        <h3 className="font-bold text-[#884A39] dark:text-amber-300">Saúde Cardiovascular</h3>
                      </div>
                      <p className="text-sm mb-3">
                        Estudos de longo prazo sugerem que o consumo moderado de café (3-5 xícaras por dia) está associado a um
                        menor risco de doenças cardiovasculares, incluindo insuficiência cardíaca e acidente vascular cerebral.
                      </p>
                      <div className="text-xs font-medium text-[#884A39]/60 dark:text-amber-300/60">
                        Fonte: American Heart Association, European Journal of Preventive Cardiology
                      </div>
                    </div>

                    <div className="bg-[#F9E0BB]/20 dark:bg-amber-900/20 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-2">🧠</span>
                        <h3 className="font-bold text-[#884A39] dark:text-amber-300">Proteção Neurológica</h3>
                      </div>
                      <p className="text-sm mb-3">
                        O consumo regular de café está associado a um risco reduzido de doenças neurodegenerativas como
                        Alzheimer, Parkinson e demência. Os compostos do café podem proteger os neurônios e reduzir a inflamação
                        no cérebro.
                      </p>
                      <div className="text-xs font-medium text-[#884A39]/60 dark:text-amber-300/60">
                        Fonte: Journal of Alzheimer's Disease, Movement Disorders
                      </div>
                    </div>

                    <div className="bg-[#F9E0BB]/20 dark:bg-amber-900/20 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-2">🔬</span>
                        <h3 className="font-bold text-[#884A39] dark:text-amber-300">Metabolismo da Glicose</h3>
                      </div>
                      <p className="text-sm mb-3">
                        Estudos indicam que o consumo regular de café pode melhorar a sensibilidade à insulina e reduzir o risco
                        de diabetes tipo 2. Os compostos do café podem ajudar a regular o metabolismo da glicose.
                      </p>
                      <div className="text-xs font-medium text-[#884A39]/60 dark:text-amber-300/60">
                        Fonte: Diabetes Care, European Journal of Nutrition
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/grounds.jpg"
                    fill
                    alt="Benefícios do café para a saúde"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contraindicações */}
        <section className="py-16 bg-accent/20">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/espresso.jpg"
                    fill
                    alt="Contraindicações do café"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Contraindicações e Cuidados</h2>
                <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    Embora o café ofereça diversos benefícios, existem situações em que seu consumo deve ser limitado ou
                    evitado. É importante conhecer essas contraindicações para um consumo seguro e saudável.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-[#F9E0BB]/20 dark:bg-amber-900/20 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <AlertTriangle className="h-6 w-6 text-[#884A39] dark:text-amber-300 mr-2" />
                        <h3 className="font-bold text-[#884A39] dark:text-amber-300">Gravidez e Amamentação</h3>
                      </div>
                      <p className="text-sm mb-3">
                        Durante a gravidez, recomenda-se limitar o consumo de cafeína a 200mg por dia (cerca de 2 xícaras de café).
                        Durante a amamentação, a cafeína pode passar para o leite materno e afetar o bebê.
                      </p>
                    </div>

                    <div className="bg-[#F9E0BB]/20 dark:bg-amber-900/20 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <AlertTriangle className="h-6 w-6 text-[#884A39] dark:text-amber-300 mr-2" />
                        <h3 className="font-bold text-[#884A39] dark:text-amber-300">Problemas de Sono</h3>
                      </div>
                      <p className="text-sm mb-3">
                        A cafeína pode interferir na qualidade do sono. Recomenda-se evitar o consumo de café nas 6 horas
                        anteriores ao horário de dormir.
                      </p>
                    </div>

                    <div className="bg-[#F9E0BB]/20 dark:bg-amber-900/20 rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <AlertTriangle className="h-6 w-6 text-[#884A39] dark:text-amber-300 mr-2" />
                        <h3 className="font-bold text-[#884A39] dark:text-amber-300">Ansiedade e Estresse</h3>
                      </div>
                      <p className="text-sm mb-3">
                        Em pessoas com ansiedade ou estresse elevado, a cafeína pode piorar os sintomas. Nestes casos,
                        recomenda-se reduzir ou evitar o consumo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consumo Moderado e Recomendações */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-gradient">
            Consumo Moderado e Recomendações
          </h2>

          <div className="glass-effect rounded-xl p-6 md:p-8">
            <p className="text-muted-foreground mb-6">
              Para a maioria dos adultos saudáveis, o consumo moderado de café é seguro e pode oferecer benefícios à
              saúde. Aqui estão algumas recomendações para um consumo equilibrado:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif font-medium mb-4">Quantidade Recomendada</h3>
                <div className="bg-accent/30 rounded-lg p-5 mb-6">
                  <p className="text-muted-foreground">
                    De acordo com a Food and Drug Administration (FDA) e a European Food Safety Authority (EFSA), o
                    consumo de até 400mg de cafeína por dia (aproximadamente 3-4 xícaras de café) é considerado seguro
                    para a maioria dos adultos saudáveis.
                  </p>
                </div>

                <h4 className="font-medium mb-3">Teor de cafeína por bebida (aproximado):</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-3 bg-background/80 rounded-lg">
                    <span>Espresso (30ml)</span>
                    <span className="font-medium">63-80mg</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-background/80 rounded-lg">
                    <span>Café filtrado (240ml)</span>
                    <span className="font-medium">95-165mg</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-background/80 rounded-lg">
                    <span>Café instantâneo (240ml)</span>
                    <span className="font-medium">30-90mg</span>
                  </li>
                  <li className="flex justify-between items-center p-3 bg-background/80 rounded-lg">
                    <span>Café descafeinado (240ml)</span>
                    <span className="font-medium">2-5mg</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-serif font-medium mb-4">Dicas para um Consumo Saudável</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium">Evite o consumo tardio</span> - Limite o café às primeiras horas do
                      dia, idealmente antes das 14h, para não interferir no sono.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium">Hidrate-se adequadamente</span> - O café tem efeito diurético leve,
                      então compense bebendo água suficiente ao longo do dia.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium">Cuidado com adições</span> - Açúcar, xaropes e cremes podem adicionar
                      calorias significativas. Prefira o café puro ou com pequenas quantidades de leite.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium">Faça pausas ocasionais</span> - Considere fazer pausas periódicas no
                      consumo de café para evitar o desenvolvimento de tolerância e dependência.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium">Não substitua refeições</span> - O café não deve substituir refeições
                      ou ser usado como principal fonte de energia.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-coffee-100 dark:bg-coffee-800 text-coffee-800 dark:text-coffee-100 p-1 rounded-full mr-3 mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-medium">Evite o café em jejum</span> - Se você tem sensibilidade gástrica,
                      consuma café após as refeições, não em jejum.
                    </div>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-coffee-50 dark:bg-coffee-900/50 rounded-lg">
                  <h4 className="font-medium mb-2">Reduzindo gradualmente:</h4>
                  <p className="text-sm text-muted-foreground">
                    Se você precisa reduzir o consumo de cafeína, faça-o gradualmente ao longo de 1-2 semanas para
                    minimizar os sintomas de abstinência (dores de cabeça, fadiga, irritabilidade). Substitua
                    progressivamente por descafeinado ou outras bebidas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternativas Descafeinadas */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-6 text-gradient">Alternativas Descafeinadas</h2>

          <div className="glass-effect rounded-xl p-6 md:p-8">
            <p className="text-muted-foreground mb-6">
              Se você precisa ou deseja reduzir o consumo de cafeína, existem diversas alternativas que podem oferecer uma
              experiência semelhante:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-accent/30 rounded-lg p-5">
                <h3 className="font-serif font-medium text-lg mb-3">Café Descafeinado</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  O café descafeinado mantém grande parte do sabor e aroma do café tradicional, com apenas 2-5mg de
                  cafeína por xícara. Os métodos modernos de descafeinação preservam melhor os compostos aromáticos.
                </p>
                <div className="text-xs font-medium text-coffee-700 dark:text-coffee-300">
                  Dica: Procure cafés descafeinados por métodos naturais, como o processo suíço com água ou com dióxido de
                  carbono.
                </div>
              </div>

              <div className="bg-accent/30 rounded-lg p-5">
                <h3 className="font-serif font-medium text-lg mb-3">Chicória</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  A raiz de chicória torrada tem um sabor semelhante ao café, mas sem cafeína. Rica em inulina, um tipo de
                  fibra prebiótica que pode beneficiar a saúde digestiva.
                </p>
                <div className="text-xs font-medium text-coffee-700 dark:text-coffee-300">
                  Dica: Pode ser preparada como café em prensa francesa ou filtro. Também disponível em misturas com café.
                </div>
              </div>

              <div className="bg-accent/30 rounded-lg p-5">
                <h3 className="font-serif font-medium text-lg mb-3">Cevada Torrada</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Bebida tradicional em vários países, a cevada torrada oferece um sabor maltado e encorpado. Não contém
                  cafeína e é naturalmente rica em antioxidantes.
                </p>
                <div className="text-xs font-medium text-coffee-700 dark:text-coffee-300">
                  Dica: Na Itália é conhecida como "caffè d'orzo" e no Japão como "mugicha".
                </div>
              </div>

              <div className="bg-accent/30 rounded-lg p-5">
                <h3 className="font-serif font-medium text-lg mb-3">Dandelion Root Coffee</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Feito a partir da raiz de dente-de-leão torrada, tem sabor terroso semelhante ao café. Tradicionalmente
                  usado para apoiar a saúde do fígado e a digestão.
                </p>
                <div className="text-xs font-medium text-coffee-700 dark:text-coffee-300">
                  Dica: Combina bem com especiarias como canela e cardamomo.
                </div>
              </div>

              <div className="bg-accent/30 rounded-lg p-5">
                <h3 className="font-serif font-medium text-lg mb-3">Rooibos</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Chá sul-africano naturalmente sem cafeína, com sabor suave e levemente adocicado. Rico em antioxidantes
                  e minerais, pode ser consumido a qualquer hora do dia.
                </p>
                <div className="text-xs font-medium text-coffee-700 dark:text-coffee-300">
                  Dica: Pode ser preparado com leite, semelhante a um latte, e combina bem com baunilha e canela.
                </div>
              </div>

              <div className="bg-accent/30 rounded-lg p-5">
                <h3 className="font-serif font-medium text-lg mb-3">Chás de Ervas</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Infusões de ervas como camomila, hortelã, gengibre e hibisco oferecem uma variedade de sabores e
                  benefícios à saúde, sem cafeína.
                </p>
                <div className="text-xs font-medium text-coffee-700 dark:text-coffee-300">
                  Dica: Experimente misturas como chai de ervas para uma experiência mais complexa e aromática.
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 bg-coffee-50 dark:bg-coffee-900/50 rounded-lg">
              <h3 className="text-xl font-serif font-medium mb-3">Sobre o Processo de Descafeinação</h3>
              <p className="text-muted-foreground mb-4">
                O café descafeinado passa por um processo para remover a cafeína dos grãos verdes antes da torra. Existem
                diferentes métodos:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-1">Processo com Solventes</h4>
                  <p className="text-sm text-muted-foreground">
                    Utiliza solventes químicos como acetato de etila (que ocorre naturalmente em frutas) ou cloreto de
                    metileno para extrair a cafeína. Os solventes são removidos antes da torra.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Processo Suíço com Água</h4>
                  <p className="text-sm text-muted-foreground">
                    Usa água quente para extrair a cafeína e outros compostos solúveis, depois filtra a água através de
                    carvão ativado para remover apenas a cafeína. A água é então devolvida aos grãos.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Processo com CO₂</h4>
                  <p className="text-sm text-muted-foreground">
                    Utiliza dióxido de carbono pressurizado para extrair seletivamente a cafeína. É considerado um dos
                    métodos mais naturais e que melhor preserva o sabor original.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Processo com Carvão Ativado</h4>
                  <p className="text-sm text-muted-foreground">
                    Os grãos são embebidos em água quente e depois passados por filtros de carvão ativado que capturam as
                    moléculas de cafeína.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusão */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Consumo Consciente</h2>
                <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    O café é uma bebida rica em benefícios para a saúde, mas como tudo na vida, o equilíbrio é fundamental.
                    Consumir café com moderação e atenção às suas particularidades é a chave para aproveitar ao máximo seus
                    benefícios.
                  </p>
                  <p>
                    Lembre-se de que cada pessoa reage de maneira diferente à cafeína, e é importante respeitar os limites
                    do seu corpo. Se você tem alguma condição de saúde específica, consulte seu médico antes de fazer
                    alterações no seu consumo de café.
                  </p>
                  <div className="mt-8">
                    <Link href="/receitas">
                      <Button className="bg-[#C38154] hover:bg-[#884A39] text-white">
                        Explorar Receitas
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/specialcoffee.jpeg"
                    fill
                    alt="Consumo consciente de café"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
