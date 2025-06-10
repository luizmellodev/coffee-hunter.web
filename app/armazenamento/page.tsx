import Image from "next/image";
import { Package, Thermometer, Droplets, Calendar } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { InfoCard } from "@/components/info-card";

export default function ArmazenamentoPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Armazenamento do Café"
        description="Aprenda as melhores práticas para preservar a qualidade e frescor do café após a torra."
        icon={<Package className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                Preservando a Qualidade
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  O armazenamento adequado é crucial para manter a qualidade do
                  café especial. Após a torra, o café continua liberando CO₂ e
                  compostos aromáticos, sendo vulnerável à oxidação, umidade,
                  luz e contaminação por odores externos.
                </p>
                <p>
                  O café torrado atinge seu pico de sabor entre 3-14 dias após a
                  torra, dependendo do método de preparo. Para espresso,
                  recomenda-se aguardar 7-14 dias, enquanto métodos filtrados
                  podem ser consumidos a partir do 3º dia.
                </p>
                <p>
                  Compreender os fatores que afetam a deterioração do café
                  permite aos consumidores maximizar a experiência sensorial e
                  aproveitar todo o potencial dos grãos especiais.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Armazenamento adequado de café"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Temperatura"
              description="Ambiente fresco e estável, evitando variações térmicas que aceleram a deterioração."
              icon={<Thermometer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Umidade"
              description="Ambiente seco para prevenir desenvolvimento de fungos e absorção de umidade."
              icon={<Droplets className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Validade"
              description="Consumo ideal até 30 dias após a torra para máxima qualidade sensorial."
              icon={<Calendar className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Embalagem"
              description="Recipientes herméticos com válvula unidirecional para liberação de CO₂."
              icon={<Package className="h-6 w-6 text-[#C38154]" />}
            />
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Inimigos do Café
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-lg font-bold text-red-800 mb-2">
                    🌬️ Oxigênio
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Principal causador da oxidação dos óleos do café, resultando
                    em sabores rançosos e perda de aroma. O contato com ar deve
                    ser minimizado ao máximo.
                  </p>
                  <div className="text-xs text-red-700">
                    <strong>Solução:</strong> Embalagens herméticas, válvulas
                    unidirecionais, consumo rápido após abertura
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="text-lg font-bold text-yellow-800 mb-2">
                    ☀️ Luz
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Luz solar direta e artificial aceleram a degradação dos
                    compostos aromáticos e podem causar aquecimento indesejado.
                  </p>
                  <div className="text-xs text-yellow-700">
                    <strong>Solução:</strong> Armazenamento em local escuro,
                    embalagens opacas
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-bold text-blue-800 mb-2">
                    💧 Umidade
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Umidade excessiva pode causar desenvolvimento de fungos e
                    absorção de água pelos grãos, alterando sabor e textura.
                  </p>
                  <div className="text-xs text-blue-700">
                    <strong>Solução:</strong> Ambiente seco (umidade relativa{" "}
                    {"<"} 60%), dessecantes se necessário
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-bold text-purple-800 mb-2">
                    🌡️ Calor
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Temperaturas elevadas aceleram todas as reações químicas de
                    deterioração e podem causar "re-torrefação" dos grãos.
                  </p>
                  <div className="text-xs text-purple-700">
                    <strong>Solução:</strong> Temperatura ambiente estável
                    (18-22°C), longe de fontes de calor
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-bold text-green-800 mb-2">
                    👃 Odores
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Café absorve facilmente odores do ambiente, contaminando seu
                    aroma natural com cheiros indesejados.
                  </p>
                  <div className="text-xs text-green-700">
                    <strong>Solução:</strong> Recipientes herméticos, longe de
                    produtos aromáticos
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-lg font-bold text-orange-800 mb-2">
                    ⏰ Tempo
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Mesmo em condições ideais, o café perde gradualmente seus
                    compostos aromáticos voláteis com o passar do tempo.
                  </p>
                  <div className="text-xs text-orange-700">
                    <strong>Solução:</strong> Consumo dentro de 2-4 semanas após
                    a torra
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Embalagens Ideais
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800">
                    ✅ Válvula Unidirecional
                  </h4>
                  <p className="text-sm text-green-700">
                    Permite saída de CO₂ sem entrada de ar. Ideal para café
                    recém-torrado.
                  </p>
                </div>
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800">
                    ✅ Laminado Multicamadas
                  </h4>
                  <p className="text-sm text-green-700">
                    Barreira contra luz, oxigênio e umidade. Material mais
                    eficaz para preservação.
                  </p>
                </div>
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800">
                    ✅ Recipiente Hermético
                  </h4>
                  <p className="text-sm text-green-700">
                    Para transferência após abertura. Vidro escuro ou metal com
                    vedação eficaz.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Embalagens a Evitar
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                  <h4 className="font-medium text-red-800">❌ Papel Comum</h4>
                  <p className="text-sm text-red-700">
                    Permeável ao ar e umidade. Não oferece proteção adequada.
                  </p>
                </div>
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                  <h4 className="font-medium text-red-800">
                    ❌ Plástico Transparente
                  </h4>
                  <p className="text-sm text-red-700">
                    Permite passagem de luz e pode transferir sabores plásticos.
                  </p>
                </div>
                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                  <h4 className="font-medium text-red-800">
                    ❌ Recipientes Porosos
                  </h4>
                  <p className="text-sm text-red-700">
                    Cerâmica não vitrificada ou madeira permitem troca gasosa.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Cronologia do Frescor
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded">
                  <h4 className="font-medium text-blue-800">0-3 dias</h4>
                  <p className="text-sm text-blue-700">
                    Desgaseificação intensa. Ideal aguardar para métodos
                    filtrados.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded">
                  <h4 className="font-medium text-green-800">3-14 dias</h4>
                  <p className="text-sm text-green-700">
                    Pico de qualidade. Melhor período para consumo em todos os
                    métodos.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 rounded">
                  <h4 className="font-medium text-yellow-800">14-30 dias</h4>
                  <p className="text-sm text-yellow-700">
                    Ainda bom, mas com perda gradual de aromas voláteis.
                  </p>
                </div>
                <div className="p-3 bg-red-50 rounded">
                  <h4 className="font-medium text-red-800">30+ dias</h4>
                  <p className="text-sm text-red-700">
                    Qualidade comprometida. Sabores planos e possível rancidez.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Dicas Práticas
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">📅</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Anote a Data de Torra
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Sempre verifique e anote a data de torra para controlar o
                      frescor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🥄</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Compre Pequenas Quantidades
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Prefira embalagens menores para consumir dentro do prazo
                      ideal.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">❄️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Evite Refrigeração
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Geladeira causa condensação e absorção de odores. Prefira
                      local seco e fresco.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Moa na Hora
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Café moído perde qualidade 10x mais rápido. Moa apenas o
                      necessário.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Sinais de Deterioração
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border border-red-200 rounded">
                  <h4 className="font-medium text-red-800">Aroma</h4>
                  <p className="text-sm text-red-700">
                    Perda do aroma característico ou desenvolvimento de cheiro
                    rançoso/mofo.
                  </p>
                </div>
                <div className="p-3 bg-red-50 border border-red-200 rounded">
                  <h4 className="font-medium text-red-800">Sabor</h4>
                  <p className="text-sm text-red-700">
                    Sabor plano, sem complexidade, ou desenvolvimento de amargor
                    excessivo.
                  </p>
                </div>
                <div className="p-3 bg-red-50 border border-red-200 rounded">
                  <h4 className="font-medium text-red-800">Aparência</h4>
                  <p className="text-sm text-red-700">
                    Excesso de óleos na superfície ou presença de mofo (pontos
                    brancos/verdes).
                  </p>
                </div>
                <div className="p-3 bg-red-50 border border-red-200 rounded">
                  <h4 className="font-medium text-red-800">Extração</h4>
                  <p className="text-sm text-red-700">
                    Dificuldade para extrair ou crema pálida/inexistente no
                    espresso.
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
