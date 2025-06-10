import Image from "next/image";
import { Flame, Timer, Thermometer, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { InfoCard } from "@/components/info-card";

export default function TorraPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Torra do Café"
        description="Descubra a arte e ciência por trás da torra, processo que transforma o grão verde em café aromático."
        icon={<Flame className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                A Transformação Alquímica
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  A torra é o processo que transforma o grão verde em café
                  aromático através da aplicação controlada de calor. Durante
                  este processo, ocorrem centenas de reações químicas que
                  desenvolvem os sabores, aromas e cores característicos do
                  café.
                </p>
                <p>
                  O mestre torrador deve equilibrar tempo, temperatura e fluxo
                  de ar para revelar o potencial único de cada origem e
                  variedade. Uma torra bem executada realça as características
                  positivas do grão, enquanto uma torra inadequada pode mascarar
                  ou destruir sua complexidade.
                </p>
                <p>
                  Compreender os fundamentos da torra permite aos apreciadores
                  de café especial identificar diferentes perfis de torra e como
                  eles influenciam o sabor final na xícara.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Processo de torra do café"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Temperatura"
              description="Controle preciso entre 160-240°C durante todo o processo de torra."
              icon={<Thermometer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Tempo"
              description="Duração típica de 8-15 minutos, variando conforme o perfil desejado."
              icon={<Timer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Desenvolvimento"
              description="Fase crítica após o primeiro crack, onde se define o perfil sensorial."
              icon={<TrendingUp className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Resfriamento"
              description="Parada rápida do processo para preservar o perfil de torra desejado."
              icon={<span className="text-2xl">❄️</span>}
            />
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Fases da Torra
            </h3>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="text-lg font-bold text-yellow-800 mb-2">
                      1. Secagem (0-5 min)
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                      Remoção da umidade residual do grão verde (10-12% para
                      0%). Temperatura sobe gradualmente até 160°C.
                    </p>
                    <div className="text-xs text-yellow-700">
                      <strong>Características:</strong> Cor verde, aroma
                      herbáceo, sem reações químicas significativas
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="text-lg font-bold text-orange-800 mb-2">
                      2. Reação de Maillard (5-8 min)
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                      Início das reações entre açúcares e aminoácidos.
                      Desenvolvimento de compostos aromáticos e escurecimento do
                      grão.
                    </p>
                    <div className="text-xs text-orange-700">
                      <strong>Características:</strong> Cor amarelada, aroma de
                      pão/biscoito, formação de CO₂
                    </div>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="text-lg font-bold text-red-800 mb-2">
                      3. Primeiro Crack (8-10 min)
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                      Expansão do grão devido ao vapor interno. Som audível de
                      "crack". Início da caramelização dos açúcares.
                    </p>
                    <div className="text-xs text-red-700">
                      <strong>Características:</strong> Cor marrom clara, aroma
                      doce, estrutura celular se rompe
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                      4. Desenvolvimento (10-12 min)
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                      Fase crítica onde se define o perfil sensorial. Equilíbrio
                      entre acidez, doçura e amargor se estabelece.
                    </p>
                    <div className="text-xs text-purple-700">
                      <strong>Características:</strong> Cor marrom média,
                      desenvolvimento de óleos, complexidade aromática
                    </div>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-4">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      5. Segundo Crack (12+ min)
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                      Quebra da estrutura celular mais profunda. Som mais sutil
                      que o primeiro crack. Início da carbonização.
                    </p>
                    <div className="text-xs text-gray-700">
                      <strong>Características:</strong> Cor marrom escura, óleos
                      na superfície, notas torradas
                    </div>
                  </div>

                  <div className="border-l-4 border-black pl-4">
                    <h4 className="text-lg font-bold text-black mb-2">
                      6. Resfriamento
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                      Parada imediata do processo através de resfriamento rápido
                      com ar frio. Preserva o perfil de torra desejado.
                    </p>
                    <div className="text-xs text-gray-700">
                      <strong>Objetivo:</strong> Temperatura de 60°C em 2-4
                      minutos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Torra Clara
              </h3>
              <div className="w-full h-4 bg-gradient-to-r from-yellow-200 to-yellow-600 rounded mb-4"></div>
              <div className="space-y-3">
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Tempo:</strong> Finalizada logo após o primeiro crack
                </div>
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Características:</strong>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Acidez pronunciada</li>
                    <li>Sabores florais e frutados</li>
                    <li>Corpo mais leve</li>
                    <li>Origem bem definida</li>
                  </ul>
                </div>
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Ideal para:</strong> Métodos filtrados, cafés de
                  origem única
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Torra Média
              </h3>
              <div className="w-full h-4 bg-gradient-to-r from-yellow-600 to-amber-800 rounded mb-4"></div>
              <div className="space-y-3">
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Tempo:</strong> Entre primeiro e segundo crack
                </div>
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Características:</strong>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Equilíbrio entre acidez e doçura</li>
                    <li>Corpo médio</li>
                    <li>Notas de caramelo e chocolate</li>
                    <li>Versatilidade de preparo</li>
                  </ul>
                </div>
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Ideal para:</strong> Espresso, métodos diversos
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Torra Escura
              </h3>
              <div className="w-full h-4 bg-gradient-to-r from-amber-800 to-gray-900 rounded mb-4"></div>
              <div className="space-y-3">
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Tempo:</strong> Após o segundo crack
                </div>
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Características:</strong>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Baixa acidez</li>
                    <li>Corpo encorpado</li>
                    <li>Notas torradas e defumadas</li>
                    <li>Óleos na superfície</li>
                  </ul>
                </div>
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Ideal para:</strong> Espresso tradicional, café com
                  leite
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Defeitos Comuns na Torra
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                  <h4 className="font-medium text-red-800">Tipping</h4>
                  <p className="text-sm text-red-700">
                    Pontas queimadas devido ao calor excessivo inicial. Causa
                    amargor localizado.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <h4 className="font-medium text-yellow-800">Scorching</h4>
                  <p className="text-sm text-yellow-700">
                    Queima da superfície por contato direto com metal quente.
                    Sabor acre e desagradável.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <h4 className="font-medium text-blue-800">
                    Underdevelopment
                  </h4>
                  <p className="text-sm text-blue-700">
                    Desenvolvimento insuficiente após o primeiro crack. Sabor
                    herbáceo e adstringente.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 border-l-4 border-purple-400 rounded">
                  <h4 className="font-medium text-purple-800">Baking</h4>
                  <p className="text-sm text-purple-700">
                    Torra muito lenta com pouco desenvolvimento. Sabor plano e
                    sem complexidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Equipamentos de Torra
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Torrador de Tambor
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Mais comum comercialmente. Tambor rotativo com aquecimento
                    indireto. Permite controle preciso.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Torrador de Ar Quente
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Usa fluxo de ar quente para torrar. Torra mais rápida e
                    limpa, ideal para perfis claros.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Torrador Híbrido
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Combina condução e convecção. Oferece flexibilidade para
                    diferentes perfis de torra.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Torrador Caseiro
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Equipamentos menores para uso doméstico. Permitem
                    experimentação e aprendizado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
