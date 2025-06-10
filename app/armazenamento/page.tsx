import Image from "next/image"
import { Package, Thermometer, Droplets, Calendar } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"

export default function ArmazenamentoPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Armazenamento do Café"
        description="Aprenda as melhores práticas para preservar a qualidade e frescor do café após a torra."
        icon={<Package className="h-6 w-6 md:h-8 md:w-8 text-coffee-600 dark:text-coffee-400" />}
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">Preservando a Qualidade</h2>
              <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
                <p>
                  O armazenamento adequado é crucial para manter a qualidade do café especial. Após a torra, o café
                  continua liberando CO₂ e compostos aromáticos, sendo vulnerável à oxidação, umidade, luz e
                  contaminação por odores externos.
                </p>
                <p>
                  O café torrado atinge seu pico de sabor entre 3-14 dias após a torra, dependendo do método de preparo.
                  Para espresso, recomenda-se aguardar 7-14 dias, enquanto métodos filtrados podem ser consumidos a
                  partir do 3º dia.
                </p>
                <p>
                  Compreender os fatores que afetam a deterioração do café permite aos consumidores maximizar a
                  experiência sensorial e aproveitar todo o potencial dos grãos especiais.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-coffee-200 to-gold-200 dark:from-coffee-800 dark:to-coffee-700 rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Armazenamento adequado de café"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <InfoCard
              title="Temperatura"
              description="Ambiente fresco e estável, evitando variações térmicas que aceleram a deterioração."
              icon={<Thermometer className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Umidade"
              description="Ambiente seco para prevenir desenvolvimento de fungos e absorção de umidade."
              icon={<Droplets className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Validade"
              description="Consumo ideal até 30 dias após a torra para máxima qualidade sensorial."
              icon={<Calendar className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Embalagem"
              description="Recipientes herméticos com válvula unidirecional para liberação de CO₂."
              icon={<Package className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
          </div>

          <div className="section-card p-6 md:p-8 mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">Inimigos do Café</h3>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-4 md:space-y-6">
                <div className="border-l-4 border-red-500 pl-3 md:pl-4">
                  <h4 className="text-base md:text-lg font-bold text-red-800 dark:text-red-300 mb-2">🌬️ Oxigênio</h4>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    Principal causador da oxidação dos óleos do café, resultando em sabores rançosos e perda de aroma. O
                    contato com ar deve ser minimizado ao máximo.
                  </p>
                  <div className="text-xs md:text-sm text-red-700 dark:text-red-400">
                    <strong>Solução:</strong> Embalagens herméticas, válvulas unidirecionais, consumo rápido após
                    abertura
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-3 md:pl-4">
                  <h4 className="text-base md:text-lg font-bold text-yellow-800 dark:text-yellow-300 mb-2">☀️ Luz</h4>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    Luz solar direta e artificial aceleram a degradação dos compostos aromáticos e podem causar
                    aquecimento indesejado.
                  </p>
                  <div className="text-xs md:text-sm text-yellow-700 dark:text-yellow-400">
                    <strong>Solução:</strong> Armazenamento em local escuro, embalagens opacas
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-3 md:pl-4">
                  <h4 className="text-base md:text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">💧 Umidade</h4>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    Umidade excessiva pode causar desenvolvimento de fungos e absorção de água pelos grãos, alterando
                    sabor e textura.
                  </p>
                  <div className="text-xs md:text-sm text-blue-700 dark:text-blue-400">
                    <strong>Solução:</strong> Ambiente seco (umidade relativa {"<"} 60%), dessecantes se necessário
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="border-l-4 border-purple-500 pl-3 md:pl-4">
                  <h4 className="text-base md:text-lg font-bold text-purple-800 dark:text-purple-300 mb-2">🌡️ Calor</h4>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    Temperaturas elevadas aceleram todas as reações químicas de deterioração e podem causar
                    "re-torrefação" dos grãos.
                  </p>
                  <div className="text-xs md:text-sm text-purple-700 dark:text-purple-400">
                    <strong>Solução:</strong> Temperatura ambiente estável (18-22°C), longe de fontes de calor
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-3 md:pl-4">
                  <h4 className="text-base md:text-lg font-bold text-green-800 dark:text-green-300 mb-2">👃 Odores</h4>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    Café absorve facilmente odores do ambiente, contaminando seu aroma natural com cheiros indesejados.
                  </p>
                  <div className="text-xs md:text-sm text-green-700 dark:text-green-400">
                    <strong>Solução:</strong> Recipientes herméticos, longe de produtos aromáticos
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-3 md:pl-4">
                  <h4 className="text-base md:text-lg font-bold text-orange-800 dark:text-orange-300 mb-2">⏰ Tempo</h4>
                  <p className="text-sm md:text-base text-muted-foreground mb-2">
                    Mesmo em condições ideais, o café perde gradualmente seus compostos aromáticos voláteis com o passar
                    do tempo.
                  </p>
                  <div className="text-xs md:text-sm text-orange-700 dark:text-orange-400">
                    <strong>Solução:</strong> Consumo dentro de 2-4 semanas após a torra
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Embalagens Ideais</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800 dark:text-green-300 text-sm md:text-base">
                    ✅ Válvula Unidirecional
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Permite saída de CO₂ sem entrada de ar. Ideal para café recém-torrado.
                  </p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800 dark:text-green-300 text-sm md:text-base">
                    ✅ Laminado Multicamadas
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Barreira contra luz, oxigênio e umidade. Material mais eficaz para preservação.
                  </p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800 dark:text-green-300 text-sm md:text-base">
                    ✅ Recipiente Hermético
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Para transferência após abertura. Vidro escuro ou metal com vedação eficaz.
                  </p>
                </div>
              </div>
            </div>

            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Embalagens a Evitar</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300 text-sm md:text-base">❌ Papel Comum</h4>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Permeável ao ar e umidade. Não oferece proteção adequada.
                  </p>
                </div>
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300 text-sm md:text-base">
                    ❌ Plástico Transparente
                  </h4>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Permite passagem de luz e pode transferir sabores plásticos.
                  </p>
                </div>
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300 text-sm md:text-base">
                    ❌ Recipientes Porosos
                  </h4>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Cerâmica não vitrificada ou madeira permitem troca gasosa.
                  </p>
                </div>
              </div>
            </div>

            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Cronologia do Frescor</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300 text-sm md:text-base">0-3 dias</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-400">
                    Desgaseificação intensa. Ideal aguardar para métodos filtrados.
                  </p>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded">
                  <h4 className="font-medium text-green-800 dark:text-green-300 text-sm md:text-base">3-14 dias</h4>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Pico de qualidade. Melhor período para consumo em todos os métodos.
                  </p>
                </div>
                <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded">
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-300 text-sm md:text-base">14-30 dias</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400">
                    Ainda bom, mas com perda gradual de aromas voláteis.
                  </p>
                </div>
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300 text-sm md:text-base">30+ dias</h4>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Qualidade comprometida. Sabores planos e possível rancidez.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Dicas Práticas</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-coffee-100 dark:bg-coffee-800 p-2 rounded-full">
                    <span className="text-sm">📅</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm md:text-base">Anote a Data de Torra</h4>
                    <p className="text-sm text-muted-foreground">
                      Sempre verifique e anote a data de torra para controlar o frescor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-coffee-100 dark:bg-coffee-800 p-2 rounded-full">
                    <span className="text-sm">🥄</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm md:text-base">Compre Pequenas Quantidades</h4>
                    <p className="text-sm text-muted-foreground">
                      Prefira embalagens menores para consumir dentro do prazo ideal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-coffee-100 dark:bg-coffee-800 p-2 rounded-full">
                    <span className="text-sm">❄️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm md:text-base">Evite Refrigeração</h4>
                    <p className="text-sm text-muted-foreground">
                      Geladeira causa condensação e absorção de odores. Prefira local seco e fresco.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-coffee-100 dark:bg-coffee-800 p-2 rounded-full">
                    <span className="text-sm">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm md:text-base">Moa na Hora</h4>
                    <p className="text-sm text-muted-foreground">
                      Café moído perde qualidade 10x mais rápido. Moa apenas o necessário.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">Sinais de Deterioração</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300 text-sm md:text-base">Aroma</h4>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Perda do aroma característico ou desenvolvimento de cheiro rançoso/mofo.
                  </p>
                </div>
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300 text-sm md:text-base">Sabor</h4>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Sabor plano, sem complexidade, ou desenvolvimento de amargor excessivo.
                  </p>
                </div>
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300 text-sm md:text-base">Aparência</h4>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Excesso de óleos na superfície ou presença de mofo (pontos brancos/verdes).
                  </p>
                </div>
                <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300 text-sm md:text-base">Extração</h4>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    Dificuldade para extrair ou crema pálida/inexistente no espresso.
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
