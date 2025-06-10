import Image from "next/image"
import { Mountain, Calendar, Hand, Leaf } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"

export default function ColheitaPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Cultivo e Colheita"
        description="Descubra como o cultivo cuidadoso e a colheita seletiva são fundamentais para a qualidade dos cafés especiais."
        icon={<Leaf className="h-6 w-6 md:h-8 md:w-8 text-coffee-600 dark:text-coffee-400" />}
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">O Início da Qualidade</h2>
              <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
                <p>
                  A qualidade de um café especial começa muito antes da torra ou do preparo. Ela nasce no campo, através
                  de práticas agrícolas cuidadosas, condições ambientais ideais e, principalmente, na colheita seletiva
                  dos frutos maduros.
                </p>
                <p>
                  O cafeeiro (Coffea) é uma planta tropical que prospera em altitudes elevadas, entre 800 e 2.000
                  metros, onde as variações de temperatura entre dia e noite contribuem para o desenvolvimento de
                  açúcares e ácidos que resultam em complexidade sensorial.
                </p>
                <p>
                  A colheita é um momento crítico: apenas os frutos cereja maduros (vermelhos) devem ser colhidos, pois
                  contêm a concentração ideal de açúcares e compostos aromáticos que caracterizam um café especial.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-coffee-200 to-gold-200 dark:from-coffee-800 dark:to-coffee-700 rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Plantação de café em montanha"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <InfoCard
              title="Altitude"
              description="800-2000m de altitude proporcionam o stress hídrico ideal para concentração de açúcares."
              icon={<Mountain className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Sazonalidade"
              description="Colheita respeitando o ciclo natural de maturação, geralmente entre maio e setembro."
              icon={<Calendar className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Colheita Manual"
              description="Seleção manual dos frutos maduros, garantindo uniformidade e qualidade superior."
              icon={<Hand className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Sustentabilidade"
              description="Práticas agrícolas que preservam o meio ambiente e valorizam o produtor."
              icon={<Leaf className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
          </div>

          <div className="section-card p-6 md:p-8 mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">
              Fatores que Influenciam a Qualidade
            </h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Fatores Ambientais</h4>
                <div className="space-y-3 md:space-y-4">
                  <div className="p-3 md:p-4 info-box rounded-lg">
                    <h5 className="font-medium text-foreground mb-2 text-sm md:text-base">🌡️ Temperatura</h5>
                    <p className="text-sm text-muted-foreground">
                      Temperaturas médias entre 18-24°C, com variação diurna de 8-10°C para desenvolvimento ideal dos
                      compostos aromáticos.
                    </p>
                  </div>
                  <div className="p-3 md:p-4 info-box rounded-lg">
                    <h5 className="font-medium text-foreground mb-2 text-sm md:text-base">🌧️ Precipitação</h5>
                    <p className="text-sm text-muted-foreground">
                      1200-1800mm anuais bem distribuídos, com período seco durante a maturação para concentração de
                      açúcares.
                    </p>
                  </div>
                  <div className="p-3 md:p-4 info-box rounded-lg">
                    <h5 className="font-medium text-foreground mb-2 text-sm md:text-base">🌱 Solo</h5>
                    <p className="text-sm text-muted-foreground">
                      Solos vulcânicos ou com boa drenagem, ricos em matéria orgânica e minerais essenciais para o
                      desenvolvimento da planta.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Práticas Agrícolas</h4>
                <div className="space-y-3 md:space-y-4">
                  <div className="p-3 md:p-4 info-box rounded-lg">
                    <h5 className="font-medium text-foreground mb-2 text-sm md:text-base">🌳 Sombreamento</h5>
                    <p className="text-sm text-muted-foreground">
                      Cultivo sob sombra de árvores nativas protege contra stress térmico e promove biodiversidade.
                    </p>
                  </div>
                  <div className="p-3 md:p-4 info-box rounded-lg">
                    <h5 className="font-medium text-foreground mb-2 text-sm md:text-base">🧪 Nutrição</h5>
                    <p className="text-sm text-muted-foreground">
                      Adubação equilibrada com foco em matéria orgânica e micronutrientes essenciais para qualidade.
                    </p>
                  </div>
                  <div className="p-3 md:p-4 info-box rounded-lg">
                    <h5 className="font-medium text-foreground mb-2 text-sm md:text-base">✂️ Manejo</h5>
                    <p className="text-sm text-muted-foreground">
                      Podas adequadas, controle de pragas e doenças de forma sustentável, respeitando o ciclo natural da
                      planta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Métodos de Colheita</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="p-3 md:p-4 border-l-4 border-green-500 bg-green-100 dark:bg-green-900/30 rounded">
                  <h4 className="font-bold text-green-800 dark:text-green-300 mb-2 text-sm md:text-base">
                    Picking (Catação)
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-400 mb-2">
                    Colheita manual seletiva, grão por grão, escolhendo apenas os frutos maduros.
                  </p>
                  <div className="text-xs text-green-600 dark:text-green-500">
                    ✅ Máxima qualidade | ✅ Seletividade total | ❌ Alto custo | ❌ Lenta
                  </div>
                </div>
                <div className="p-3 md:p-4 border-l-4 border-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                  <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 text-sm md:text-base">
                    Stripping (Derriça)
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-2">
                    Colheita de todos os frutos do ramo, independente do estágio de maturação.
                  </p>
                  <div className="text-xs text-yellow-600 dark:text-yellow-500">
                    ⚠️ Qualidade variável | ✅ Mais rápida | ✅ Menor custo | ❌ Menos seletiva
                  </div>
                </div>
                <div className="p-3 md:p-4 border-l-4 border-blue-500 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2 text-sm md:text-base">Mecanizada</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-400 mb-2">
                    Uso de máquinas colheitadeiras em terrenos planos e plantios uniformes.
                  </p>
                  <div className="text-xs text-blue-600 dark:text-blue-500">
                    ⚠️ Para commodity | ✅ Muito rápida | ✅ Baixo custo | ❌ Pouca seletividade
                  </div>
                </div>
              </div>
            </div>

            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Indicadores de Maturação</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="text-center p-3 md:p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
                  <div className="text-3xl md:text-4xl mb-2">🔴</div>
                  <h4 className="font-bold text-red-800 dark:text-red-300 text-sm md:text-base">Cereja Maduro</h4>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Fruto vermelho intenso, macio ao toque, com máxima concentração de açúcares. Ideal para cafés
                    especiais.
                  </p>
                </div>
                <div className="text-center p-3 md:p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                  <div className="text-3xl md:text-4xl mb-2">🟡</div>
                  <h4 className="font-bold text-yellow-800 dark:text-yellow-300 text-sm md:text-base">Cereja Verde</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400">
                    Fruto ainda em maturação, com acidez elevada e pouco açúcar. Deve ser evitado na colheita seletiva.
                  </p>
                </div>
                <div className="text-center p-3 md:p-4 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <div className="text-3xl md:text-4xl mb-2">🟤</div>
                  <h4 className="font-bold text-purple-800 dark:text-purple-300 text-sm md:text-base">Passa</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-400">
                    Fruto sobre-maduro, desidratado na planta. Pode adicionar doçura mas requer cuidado no
                    processamento.
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
