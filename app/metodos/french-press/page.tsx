import Image from "next/image"
import { Clock, Timer, Scale, Thermometer } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { MethodSteps } from "@/components/method-steps"
import { InfoCard } from "@/components/info-card"

export default function FrenchPressPage() {
  const frenchPressSteps = [
    {
      title: "Pré-aquecimento",
      description: "Pré-aqueça a French Press com água quente. Descarte a água antes de adicionar o café.",
      tip: "Este passo é crucial para manter a temperatura estável durante a extração.",
    },
    {
      title: "Moagem e Dosagem",
      description:
        "Moa 30g de café em granulometria grossa (similar à açúcar cristal grosso). A uniformidade é essencial.",
      tip: "Moagem muito fina resultará em sobre-extração e dificuldade para pressionar o êmbolo.",
    },
    {
      title: "Adição do Café",
      description: "Adicione o café moído na French Press pré-aquecida.",
      tip: "Agite levemente para nivelar o leito de café antes de adicionar água.",
    },
    {
      title: "Bloom (Pré-infusão)",
      description: "Despeje 60ml de água a 93°C, molhando todos os grãos. Aguarde 30 segundos.",
      tip: "O bloom libera CO2 e prepara o café para extração mais uniforme.",
    },
    {
      title: "Adição Principal de Água",
      description: "Complete com água até 500ml total. Mexa suavemente em formato de cruz para homogeneizar.",
      tip: "Evite movimentos circulares que podem criar um vórtice e causar extração desigual.",
    },
    {
      title: "Infusão e Finalização",
      description: "Coloque a tampa sem pressionar. Aguarde 4 minutos. Pressione o êmbolo lentamente até o fim.",
      tip: "Sirva imediatamente após pressionar para evitar sobre-extração no fundo.",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="French Press"
        description="Explore a tradição da French Press, método de imersão que produz cafés encorpados e aromáticos."
        icon={<Clock className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Tradição e Corpo</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  A French Press, também conhecida como prensa francesa, é um dos métodos mais tradicionais e acessíveis
                  para preparar café. Inventada na França no século XIX, seu design simples e eficaz permanece
                  praticamente inalterado até hoje.
                </p>
                <p>
                  Este método de imersão total permite contato prolongado entre água e café, resultando em uma bebida
                  encorpada, aromática e com textura sedosa característica. A ausência de filtro de papel permite que
                  óleos essenciais e finos sedimentos permaneçam na bebida.
                </p>
                <p>
                  A French Press é ideal para destacar notas de chocolate, nozes e caramelo em cafés de torra média a
                  escura. É um método democrático que combina simplicidade de preparo com resultados consistentes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/frenchpress.jpg"
                width={500}
                height={400}
                alt="French Press em uso"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Proporção"
              description="1:15 a 1:17 (30g de café para 500ml de água) para equilíbrio ideal."
              icon={<Scale className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Temperatura"
              description="92-94°C, ligeiramente abaixo do ponto de ebulição."
              icon={<Thermometer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Tempo de Infusão"
              description="4 minutos para extração completa e equilibrada."
              icon={<Timer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Moagem"
              description="Grossa, similar ao açúcar cristal grosso. Uniformidade é crucial."
              icon={<span className="text-2xl">⚙️</span>}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-amber-300 mb-8">Método Tradicional</h3>
            <MethodSteps steps={frenchPressSteps} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Receita Clássica</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-amber-200">Café</div>
                    <div className="text-2xl font-bold text-[#C38154] dark:text-amber-400">30g</div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-amber-200">Água</div>
                    <div className="text-2xl font-bold text-[#C38154] dark:text-amber-400">500ml</div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-amber-200">Temperatura</div>
                    <div className="text-2xl font-bold text-[#C38154] dark:text-amber-400">93°C</div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-amber-200">Infusão</div>
                    <div className="text-2xl font-bold text-[#C38154] dark:text-amber-400">4:00</div>
                  </div>
                </div>

                <div className="border-t dark:border-gray-600 pt-4">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200 mb-2">Timeline:</h4>
                  <div className="space-y-2 text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    <div className="flex justify-between">
                      <span>0:00 - Bloom</span>
                      <span>60ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>0:30 - Adição principal</span>
                      <span>até 500ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>0:45 - Quebra da crosta</span>
                      <span>-</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4:00 - Pressionar êmbolo</span>
                      <span>-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Método Hoffman</h3>
              <div className="space-y-3">
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  Variação criada pelo campeão mundial James Hoffman para reduzir sedimentos:
                </p>
                <ol className="list-decimal pl-4 space-y-2 text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  <li>Prepare normalmente até o passo da infusão</li>
                  <li>Após 4 minutos, quebre e remova a crosta com colher</li>
                  <li>Aguarde mais 5-8 minutos para sedimentos decantarem</li>
                  <li>Pressione o êmbolo apenas até a superfície do líquido</li>
                  <li>Sirva cuidadosamente para não agitar os sedimentos</li>
                </ol>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <p className="text-xs text-[#884A39] dark:text-amber-200">
                    <strong>Vantagem:</strong> Café mais limpo e com menos sedimentos no fundo da xícara
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Variações de Preparo</h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300">Cold Brew</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-200 mb-2">
                    Proporção 1:10, água fria, infusão de 12-24h na geladeira
                  </p>
                  <div className="text-xs text-blue-600 dark:text-blue-300">Ideal para dias quentes, baixa acidez</div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800 dark:text-green-300">Infusão Curta</h4>
                  <p className="text-sm text-green-700 dark:text-green-200 mb-2">
                    Moagem média, infusão de apenas 2:30, para cafés mais leves
                  </p>
                  <div className="text-xs text-green-600 dark:text-green-300">Menos corpo, mais acidez</div>
                </div>

                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 rounded">
                  <h4 className="font-medium text-purple-800 dark:text-purple-300">Dupla Filtragem</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-200 mb-2">
                    Após pressionar, filtre novamente em filtro de papel
                  </p>
                  <div className="text-xs text-purple-600 dark:text-purple-300">
                    Clareza de pour-over com sabor de imersão
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Dicas e Soluções</h3>
              <div className="space-y-3">
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Êmbolo Difícil de Pressionar</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Moagem muito fina. Ajuste para mais grossa na próxima vez.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Excesso de Sedimentos</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Pressione mais lentamente e deixe a última porção no fundo.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Sabor Fraco</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Aumente a dose de café ou reduza a quantidade de água.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Limpeza</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Desmonte completamente após cada uso para evitar sabores residuais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
