import Image from "next/image"
import { Flame, Timer, Thermometer, TrendingUp } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"

export default function TorraPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Torra do Café"
        description="Descubra a arte e ciência por trás da torra, processo que transforma o grão verde em café aromático."
        icon={<Flame className="h-6 w-6 md:h-8 md:w-8 text-coffee-600 dark:text-coffee-400" />}
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">A Transformação Alquímica</h2>
              <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
                <p>
                  A torra é o processo que transforma o grão verde em café aromático através da aplicação controlada de
                  calor. Durante este processo, ocorrem centenas de reações químicas que desenvolvem os sabores, aromas
                  e cores característicos do café.
                </p>
                <p>
                  O mestre torrador deve equilibrar tempo, temperatura e fluxo de ar para revelar o potencial único de
                  cada origem e variedade. Uma torra bem executada realça as características positivas do grão, enquanto
                  uma torra inadequada pode mascarar ou destruir sua complexidade.
                </p>
                <p>
                  Compreender os fundamentos da torra permite aos apreciadores de café especial identificar diferentes
                  perfis de torra e como eles influenciam o sabor final na xícara.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-coffee-200 to-gold-200 dark:from-coffee-800 dark:to-coffee-700 rounded-full blur-3xl opacity-40" />
              <Image
                src="/torra.jpg"
                width={500}
                height={400}
                alt="Processo de torra do café"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <InfoCard
              title="Temperatura"
              description="Controle preciso entre 160-240°C durante todo o processo de torra."
              icon={<Thermometer className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Tempo"
              description="Duração típica de 8-15 minutos, variando conforme o perfil desejado."
              icon={<Timer className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Desenvolvimento"
              description="Fase crítica após o primeiro crack, onde se define o perfil sensorial."
              icon={<TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Resfriamento"
              description="Parada rápida do processo para preservar o perfil de torra desejado."
              icon={<span className="text-xl md:text-2xl">❄️</span>}
            />
          </div>

          <div className="section-card p-6 md:p-8 mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">Fases da Torra</h3>

            <div className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3 md:space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-3 md:pl-4">
                    <h4 className="text-base md:text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2">
                      1. Secagem (0-5 min)
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground mb-2">
                      Remoção da umidade residual do grão verde (10-12% para 0%). Temperatura sobe gradualmente até
                      160°C.
                    </p>
                    <div className="text-xs md:text-sm text-yellow-700 dark:text-yellow-400">
                      <strong>Características:</strong> Cor verde, aroma herbáceo, sem reações químicas significativas
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-3 md:pl-4">
                    <h4 className="text-base md:text-lg font-bold text-orange-800 dark:text-orange-300 mb-2">
                      2. Reação de Maillard (5-8 min)
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground mb-2">
                      Início das reações entre açúcares e aminoácidos. Desenvolvimento de compostos aromáticos e
                      escurecimento do grão.
                    </p>
                    <div className="text-xs md:text-sm text-orange-700 dark:text-orange-400">
                      <strong>Características:</strong> Cor amarelada, aroma de pão/biscoito, formação de CO₂
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-3 md:pl-4">
                    <h4 className="text-base md:text-lg font-bold text-red-800 dark:text-red-300 mb-2">
                      3. Primeiro Crack (8-10 min)
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground mb-2">
                      Expansão do grão devido ao vapor interno. Som audível de "crack". Início da caramelização dos
                      açúcares.
                    </p>
                    <div className="text-xs md:text-sm text-red-700 dark:text-red-400">
                      <strong>Características:</strong> Cor marrom clara, aroma doce, estrutura celular se rompe
                    </div>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <div className="border-l-4 border-purple-500 pl-3 md:pl-4">
                    <h4 className="text-base md:text-lg font-bold text-purple-800 dark:text-purple-300 mb-2">
                      4. Desenvolvimento (10-12 min)
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground mb-2">
                      Fase crítica onde se define o perfil sensorial. Equilíbrio entre acidez, doçura e amargor se
                      estabelece.
                    </p>
                    <div className="text-xs md:text-sm text-purple-700 dark:text-purple-400">
                      <strong>Características:</strong> Cor marrom média, desenvolvimento de óleos, complexidade
                      aromática
                    </div>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-3 md:pl-4">
                    <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-300 mb-2">
                      5. Segundo Crack (12+ min)
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground mb-2">
                      Quebra da estrutura celular mais profunda. Som mais sutil que o primeiro crack. Início da
                      carbonização.
                    </p>
                    <div className="text-xs md:text-sm text-gray-700 dark:text-gray-400">
                      <strong>Características:</strong> Cor marrom escura, óleos na superfície, notas torradas
                    </div>
                  </div>

                  <div className="border-l-4 border-black dark:border-gray-400 pl-3 md:pl-4">
                    <h4 className="text-base md:text-lg font-bold text-black dark:text-gray-300 mb-2">
                      6. Resfriamento
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground mb-2">
                      Parada imediata do processo através de resfriamento rápido com ar frio. Preserva o perfil de torra
                      desejado.
                    </p>
                    <div className="text-xs md:text-sm text-gray-700 dark:text-gray-400">
                      <strong>Objetivo:</strong> Temperatura de 60°C em 2-4 minutos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Torra Clara</h3>
              <div className="w-full h-3 md:h-4 bg-gradient-to-r from-yellow-200 to-yellow-600 rounded mb-3 md:mb-4"></div>
              <div className="space-y-2 md:space-y-3">
                <div className="text-sm md:text-base text-muted-foreground">
                  <strong>Tempo:</strong> Finalizada logo após o primeiro crack
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  <strong>Características:</strong>
                  <ul className="list-disc pl-4 mt-1 space-y-1">
                    <li>Acidez pronunciada</li>
                    <li>Sabores florais e frutados</li>
                    <li>Corpo mais leve</li>
                    <li>Origem bem definida</li>
                  </ul>
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  <strong>Ideal para:</strong> Métodos filtrados, cafés de origem única
                </div>
              </div>
            </div>

            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Torra Média</h3>
              <div className="w-full h-3 md:h-4 bg-gradient-to-r from-yellow-600 to-amber-800 rounded mb-3 md:mb-4"></div>
              <div className="space-y-2 md:space-y-3">
                <div className="text-sm md:text-base text-muted-foreground">
                  <strong>Tempo:</strong> Entre primeiro e segundo crack
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  <strong>Características:</strong>
                  <ul className="list-disc pl-4 mt-1 space-y-1">
                    <li>Equilíbrio entre acidez e doçura</li>
                    <li>Corpo médio</li>
                    <li>Notas de caramelo e chocolate</li>
                    <li>Versatilidade de preparo</li>
                  </ul>
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  <strong>Ideal para:</strong> Espresso, métodos diversos
                </div>
              </div>
            </div>

            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Torra Escura</h3>
              <div className="w-full h-3 md:h-4 bg-gradient-to-r from-amber-800 to-gray-900 rounded mb-3 md:mb-4"></div>
              <div className="space-y-2 md:space-y-3">
                <div className="text-sm md:text-base text-muted-foreground">
                  <strong>Tempo:</strong> Após o segundo crack
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  <strong>Características:</strong>
                  <ul className="list-disc pl-4 mt-1 space-y-1">
                    <li>Baixa acidez</li>
                    <li>Corpo encorpado</li>
                    <li>Notas torradas e defumadas</li>
                    <li>Óleos na superfície</li>
                  </ul>
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  <strong>Ideal para:</strong> Espresso tradicional, café com leite
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Defeitos Comuns na Torra</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border-l-4 border-red-400 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300 text-sm md:text-base">Tipping</h4>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Pontas queimadas devido ao calor excessivo inicial. Causa amargor localizado.
                  </p>
                </div>
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-400 rounded">
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-300 text-sm md:text-base">Scorching</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400">
                    Queima da superfície por contato direto com metal quente. Sabor acre e desagradável.
                  </p>
                </div>
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-400 rounded">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300 text-sm md:text-base">
                    Underdevelopment
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    Desenvolvimento insuficiente após o primeiro crack. Sabor herbáceo e adstringente.
                  </p>
                </div>
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 border-l-4 border-purple-400 rounded">
                  <h4 className="font-medium text-purple-800 dark:text-purple-300 text-sm md:text-base">Baking</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-400">
                    Torra muito lenta com pouco desenvolvimento. Sabor plano e sem complexidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Equipamentos de Torra</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="p-3 info-box rounded">
                  <h4 className="font-medium text-foreground text-sm md:text-base">Torrador de Tambor</h4>
                  <p className="text-sm text-muted-foreground">
                    Mais comum comercialmente. Tambor rotativo com aquecimento indireto. Permite controle preciso.
                  </p>
                </div>
                <div className="p-3 info-box rounded">
                  <h4 className="font-medium text-foreground text-sm md:text-base">Torrador de Ar Quente</h4>
                  <p className="text-sm text-muted-foreground">
                    Usa fluxo de ar quente para torrar. Torra mais rápida e limpa, ideal para perfis claros.
                  </p>
                </div>
                <div className="p-3 info-box rounded">
                  <h4 className="font-medium text-foreground text-sm md:text-base">Torrador Híbrido</h4>
                  <p className="text-sm text-muted-foreground">
                    Combina condução e convecção. Oferece flexibilidade para diferentes perfis de torra.
                  </p>
                </div>
                <div className="p-3 info-box rounded">
                  <h4 className="font-medium text-foreground text-sm md:text-base">Torrador Caseiro</h4>
                  <p className="text-sm text-muted-foreground">
                    Equipamentos menores para uso doméstico. Permitem experimentação e aprendizado.
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
