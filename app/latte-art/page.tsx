import Image from "next/image"
import { Droplet, Sparkles, Zap, Flame } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"

export default function LatteArtPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Latte Art"
        description="Domine a arte de desenhar no café: técnicas, padrões e segredos para criar designs perfeitos."
        icon={<Droplet className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">A Arte no Café</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  Latte Art é a técnica de criar desenhos na superfície de bebidas à base de espresso utilizando leite
                  vaporizado. Mais que uma simples decoração, é a expressão visual da habilidade do barista e um
                  indicador da qualidade da bebida.
                </p>
                <p>
                  A técnica surgiu na Itália, mas foi em Seattle, nos anos 1980-90, que ganhou popularidade mundial.
                  Hoje, é parte fundamental da cultura de café especial, com campeonatos dedicados exclusivamente a esta
                  arte.
                </p>
                <p>
                  Dominar o latte art requer prática constante, compreensão da textura ideal do leite e controle preciso
                  de movimento. Os padrões básicos incluem o coração, a roseta e a tulipa, mas as possibilidades são
                  infinitas para baristas criativos.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Latte Art"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Textura do Leite"
              description="Microespuma cremosa com bolhas imperceptíveis, consistência de tinta."
              icon={<Droplet className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Espresso"
              description="Crema consistente e dourada para contraste visual perfeito."
              icon={<Flame className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Altura de Despejo"
              description="Varia conforme a fase: alta para misturar, baixa para desenhar."
              icon={<Zap className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Velocidade"
              description="Fluxo constante e movimento preciso para definição dos padrões."
              icon={<Sparkles className="h-6 w-6 text-[#C38154]" />}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-amber-300 mb-8">Técnica Fundamental</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">1. Preparação do Espresso</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Extraia um espresso de qualidade com crema consistente e dourada. A crema é a "tela" onde o desenho
                    será formado, por isso deve ter boa consistência e cor.
                  </p>
                </div>

                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">2. Vaporização do Leite</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Posicione o vaporizador ligeiramente abaixo da superfície para criar o vórtice adequado. O objetivo
                    é incorporar ar nos primeiros segundos e depois homogeneizar a temperatura.
                  </p>
                </div>

                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">3. Textura Ideal</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    O leite deve ter consistência de "tinta" - cremoso, brilhante e sem bolhas visíveis. A temperatura
                    ideal é entre 60-65°C para preservar a doçura natural.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">4. Técnica de Despejo</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Comece despejando de altura maior (5-7cm) para misturar leite e espresso. Gradualmente, aproxime o
                    bico do jarro à superfície para iniciar o desenho.
                  </p>
                </div>

                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">5. Controle de Fluxo</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Mantenha um fluxo constante e controlado. A velocidade do despejo e o movimento da mão determinam a
                    definição do desenho.
                  </p>
                </div>

                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">6. Finalização</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Para finalizar o desenho, corte através do padrão com um movimento rápido e preciso, criando
                    contraste e definição.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Coração</h3>
              <div className="aspect-square relative mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Latte Art - Coração"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  O padrão mais básico e ponto de partida para iniciantes. Requer:
                </p>
                <ol className="list-decimal pl-4 space-y-1 text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  <li>Despeje o leite no centro da xícara</li>
                  <li>Mantenha o fluxo constante</li>
                  <li>Quando a xícara estiver quase cheia, levante ligeiramente o jarro</li>
                  <li>Corte através do desenho com movimento rápido</li>
                </ol>
                <div className="p-2 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded text-xs text-[#884A39]/80 dark:text-amber-100/80">
                  <strong>Dica:</strong> Pratique o movimento de corte final, que define a forma do coração.
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Roseta</h3>
              <div className="aspect-square relative mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Latte Art - Roseta"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  Padrão intermediário que cria uma forma semelhante a uma folha ou samambaia:
                </p>
                <ol className="list-decimal pl-4 space-y-1 text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  <li>Comece despejando no centro</li>
                  <li>Quando a base branca se formar, aproxime o jarro à superfície</li>
                  <li>Inicie um movimento lateral de "vai-e-vem"</li>
                  <li>Avance lentamente em direção oposta ao barista</li>
                  <li>Finalize com um corte reto pelo centro</li>
                </ol>
                <div className="p-2 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded text-xs text-[#884A39]/80 dark:text-amber-100/80">
                  <strong>Dica:</strong> O ritmo do movimento lateral deve ser constante e suave.
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Tulipa</h3>
              <div className="aspect-square relative mb-4 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  fill
                  alt="Latte Art - Tulipa"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  Padrão avançado que combina elementos do coração em camadas:
                </p>
                <ol className="list-decimal pl-4 space-y-1 text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  <li>Despeje uma pequena base branca no centro</li>
                  <li>Puxe o jarro para trás criando um pequeno coração</li>
                  <li>Repita o processo 3-4 vezes, cada vez ligeiramente acima</li>
                  <li>Finalize com um corte suave pelo centro</li>
                </ol>
                <div className="p-2 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded text-xs text-[#884A39]/80 dark:text-amber-100/80">
                  <strong>Dica:</strong> O timing entre cada camada é crucial para definição do desenho.
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Vaporização Perfeita</h3>
              <div className="space-y-4">
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Posicionamento</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Insira o vaporizador ligeiramente deslocado do centro, em ângulo que crie vórtice.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Fase de Aeração</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Nos primeiros 3-5 segundos, mantenha o vaporizador próximo à superfície para incorporar ar.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Fase de Texturização</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Submerja o vaporizador para homogeneizar a temperatura e refinar a textura.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Temperatura</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    60-65°C é ideal. Acima disso, as proteínas desnaturadas afetam sabor e textura.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Erros Comuns</h3>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 dark:border-red-500 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300">Leite Superaquecido</h4>
                  <p className="text-sm text-red-700 dark:text-red-200">
                    Resulta em sabor queimado e textura granulada. Use termômetro até ganhar sensibilidade.
                  </p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 dark:border-red-500 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300">Bolhas Grandes</h4>
                  <p className="text-sm text-red-700 dark:text-red-200">
                    Causadas por aeração excessiva ou incorreta. Bata levemente o jarro na bancada para eliminá-las.
                  </p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 dark:border-red-500 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300">Despejo Muito Alto</h4>
                  <p className="text-sm text-red-700 dark:text-red-200">
                    Impede a formação de desenhos definidos. Aproxime mais o jarro da superfície.
                  </p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 dark:border-red-500 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300">Movimento Brusco</h4>
                  <p className="text-sm text-red-700 dark:text-red-200">
                    Causa distorções no desenho. Pratique movimentos suaves e controlados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Desenhos Avançados</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-lg">
                <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">Cisne</h4>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80 mb-3">
                  Combinação de roseta com manipulação do pescoço e cabeça usando um palito.
                </p>
                <div className="aspect-video relative bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=250"
                    fill
                    alt="Latte Art - Cisne"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-4 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-lg">
                <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">Roseta Múltipla</h4>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80 mb-3">
                  Várias rosetas pequenas dispostas em círculo, exigindo controle extremo.
                </p>
                <div className="aspect-video relative bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=250"
                    fill
                    alt="Latte Art - Roseta Múltipla"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-4 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-lg">
                <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">Etching</h4>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80 mb-3">
                  Técnica que usa palitos para desenhar na superfície após o despejo básico.
                </p>
                <div className="aspect-video relative bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=150&width=250"
                    fill
                    alt="Latte Art - Etching"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
