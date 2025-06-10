import Image from "next/image";
import { Droplets, Timer, Scale, Thermometer } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { MethodSteps } from "@/components/method-steps";
import { InfoCard } from "@/components/info-card";

export default function V60Page() {
  const v60Steps = [
    {
      title: "Preparação do Filtro",
      description:
        "Coloque o filtro V60 no suporte e faça um pré-aquecimento com água quente para remover o sabor do papel e aquecer o equipamento.",
      tip: "Use água a 95°C para o pré-aquecimento. Isso também aquece a xícara ou servidor.",
    },
    {
      title: "Moagem e Dosagem",
      description:
        "Moa 15g de café em granulometria média (similar ao açúcar cristal). A moagem deve ser uniforme para extração equilibrada.",
      tip: "Ajuste a moagem conforme o tempo de extração: mais fina se muito rápido, mais grossa se muito lento.",
    },
    {
      title: "Bloom (Pré-infusão)",
      description:
        "Despeje 30ml de água (2x o peso do café) em movimentos circulares, começando do centro. Aguarde 30-45 segundos.",
      tip: "O café deve 'florescer' criando uma cúpula. Se não florescer, o café pode estar velho.",
    },
    {
      title: "Primeira Despejada",
      description:
        "Despeje água até 150ml em movimentos circulares lentos, mantendo o nível constante. Evite as bordas do filtro.",
      tip: "Mantenha o fluxo constante e suave. Movimentos muito rápidos podem causar canalização.",
    },
    {
      title: "Segunda Despejada",
      description:
        "Quando o nível baixar, despeje até 250ml total. Continue com movimentos circulares do centro para fora.",
      tip: "O tempo total deve ficar entre 2:30 e 3:30 minutos para extração ideal.",
    },
    {
      title: "Finalização",
      description:
        "Aguarde a drenagem completa. O leito de café deve ficar plano, indicando extração uniforme.",
      tip: "Se o leito ficar côncavo ou com paredes altas, ajuste a técnica de despejo.",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Hario V60"
        description="Domine a técnica do V60, método japonês que produz cafés limpos e com acidez brilhante."
        icon={<Droplets className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                Precisão Japonesa
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  O Hario V60 é um dos métodos de coado mais populares no mundo
                  dos cafés especiais. Criado pela empresa japonesa Hario, seu
                  design cônico com espirais internas e grande orifício de saída
                  permite controle total sobre a extração.
                </p>
                <p>
                  O V60 produz cafés limpos, com acidez brilhante e sabores bem
                  definidos. É ideal para destacar as características de origem
                  de cafés especiais, especialmente aqueles com perfis mais
                  delicados e complexos.
                </p>
                <p>
                  A técnica de despejo é fundamental no V60. Pequenas variações
                  na velocidade, direção e timing podem resultar em extrações
                  completamente diferentes, tornando este método tanto
                  desafiador quanto recompensador.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Hario V60 em uso"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Proporção"
              description="1:15 a 1:17 (15g de café para 250ml de água) para equilíbrio ideal."
              icon={<Scale className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Temperatura"
              description="92-96°C dependendo da torra. Torras claras pedem temperaturas mais altas."
              icon={<Thermometer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Tempo Total"
              description="2:30 a 3:30 minutos para extração completa e equilibrada."
              icon={<Timer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Moagem"
              description="Média, similar ao açúcar cristal. Uniformidade é crucial."
              icon={<span className="text-2xl">⚙️</span>}
            />
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Técnica Passo a Passo
            </h3>
            <MethodSteps steps={v60Steps} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Receita Básica
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Café
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">15g</div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Água
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">
                      250ml
                    </div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Temperatura
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">
                      94°C
                    </div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Tempo
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">
                      3:00
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    Timeline:
                  </h4>
                  <div className="space-y-2 text-sm text-[#884A39] dark:text-white dark:text-white">
                    <div className="flex justify-between">
                      <span>0:00 - Bloom</span>
                      <span>30ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>0:45 - Primeira despejada</span>
                      <span>até 150ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1:30 - Segunda despejada</span>
                      <span>até 250ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>3:00 - Drenagem completa</span>
                      <span>-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Variações de Receita
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <h4 className="font-medium text-blue-800">
                    Receita Ácida (Torra Clara)
                  </h4>
                  <p className="text-sm text-blue-700 mb-2">
                    Para destacar acidez e notas florais
                  </p>
                  <div className="text-xs text-blue-600">
                    Proporção: 1:16 | Temperatura: 96°C | Moagem: Média-fina
                  </div>
                </div>

                <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
                  <h4 className="font-medium text-orange-800">
                    Receita Equilibrada
                  </h4>
                  <p className="text-sm text-orange-700 mb-2">
                    Para cafés de torra média com equilíbrio
                  </p>
                  <div className="text-xs text-orange-600">
                    Proporção: 1:15 | Temperatura: 94°C | Moagem: Média
                  </div>
                </div>

                <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded">
                  <h4 className="font-medium text-red-800">
                    Receita Doce (Torra Escura)
                  </h4>
                  <p className="text-sm text-red-700 mb-2">
                    Para realçar doçura e corpo
                  </p>
                  <div className="text-xs text-red-600">
                    Proporção: 1:14 | Temperatura: 92°C | Moagem: Média-grossa
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Equipamentos Necessários
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <Droplets className="h-4 w-4 text-[#C38154]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Hario V60
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Suporte cônico em cerâmica, plástico ou metal. Cerâmica
                      retém melhor o calor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">📄</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Filtros V60
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Filtros específicos com formato cônico. Brancos ou
                      naturais, ambos funcionam bem.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <Scale className="h-4 w-4 text-[#C38154]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Balança de Precisão
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Com timer integrado e precisão de 0,1g para dosagem e
                      controle de fluxo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🫖</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Chaleira Gooseneck
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Bico longo e fino para controle preciso do fluxo de água.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Solução de Problemas
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                  <h4 className="font-medium text-red-800">
                    Extração muito rápida ({"<"} 2:30)
                  </h4>
                  <p className="text-sm text-red-700">
                    Moagem mais fina, despejo mais lento, ou aumente a dose de
                    café.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <h4 className="font-medium text-yellow-800">
                    Extração muito lenta ({">"} 4:00)
                  </h4>
                  <p className="text-sm text-yellow-700">
                    Moagem mais grossa, despejo mais rápido, ou diminua a dose.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <h4 className="font-medium text-blue-800">Sabor amargo</h4>
                  <p className="text-sm text-blue-700">
                    Temperatura mais baixa, moagem mais grossa, ou proporção
                    maior (mais água).
                  </p>
                </div>
                <div className="p-3 bg-purple-50 border-l-4 border-purple-400 rounded">
                  <h4 className="font-medium text-purple-800">
                    Sabor ácido demais
                  </h4>
                  <p className="text-sm text-purple-700">
                    Temperatura mais alta, moagem mais fina, ou proporção menor
                    (menos água).
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
