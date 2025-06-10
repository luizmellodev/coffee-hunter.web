import Image from "next/image";
import { Beaker, Timer, Scale, Thermometer } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { MethodSteps } from "@/components/method-steps";
import { InfoCard } from "@/components/info-card";

export default function ChemexPage() {
  const chemexSteps = [
    {
      title: "Preparação do Filtro",
      description:
        "Dobre o filtro Chemex em formato cônico, com três camadas em um lado e uma no outro. Posicione com o lado de três camadas voltado para o bico.",
      tip: "Pré-aqueça o filtro e o Chemex com água quente para remover o sabor de papel e aquecer o recipiente.",
    },
    {
      title: "Moagem e Dosagem",
      description:
        "Moa 30g de café em granulometria média-grossa (mais grossa que V60). A moagem deve ser uniforme para extração equilibrada.",
      tip: "A moagem mais grossa compensa a espessura do filtro, que já retarda naturalmente a extração.",
    },
    {
      title: "Bloom (Pré-infusão)",
      description:
        "Despeje 60ml de água (2x o peso do café) em movimentos circulares, começando do centro. Aguarde 45 segundos.",
      tip: "Certifique-se de molhar todos os grãos uniformemente para uma extração homogênea.",
    },
    {
      title: "Primeira Despejada",
      description:
        "Despeje água até 200ml em movimentos circulares lentos, mantendo o nível constante. Evite despejar diretamente nas paredes.",
      tip: "Mantenha um fluxo constante e suave. O nível de água não deve ultrapassar 1cm abaixo da borda.",
    },
    {
      title: "Segunda Despejada",
      description:
        "Quando o nível baixar, despeje até 350ml total. Continue com movimentos circulares do centro para fora.",
      tip: "Mantenha a água em movimento para evitar canalização e garantir extração uniforme.",
    },
    {
      title: "Despejada Final",
      description:
        "Complete até 500ml total. Aguarde a drenagem completa, que deve ocorrer entre 4:00 e 4:30 minutos.",
      tip: "O leito de café deve ficar plano ao final da extração, indicando uniformidade.",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Chemex"
        description="Explore a elegância do Chemex, método que combina design icônico com filtração superior para cafés excepcionalmente limpos."
        icon={<Beaker className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                Elegância e Pureza
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  O Chemex é um método de preparo icônico, criado em 1941 pelo
                  químico alemão Peter Schlumbohm. Seu design elegante combina
                  funcionalidade e estética, sendo inclusive parte da coleção
                  permanente do MoMA (Museu de Arte Moderna de Nova York).
                </p>
                <p>
                  O diferencial do Chemex está em seu filtro especial, 20-30%
                  mais espesso que filtros convencionais. Esta característica,
                  combinada com o formato cônico, retém óleos e sedimentos
                  finos, resultando em uma bebida excepcionalmente limpa e
                  brilhante.
                </p>
                <p>
                  O Chemex é ideal para destacar notas delicadas e sutis em
                  cafés de torra clara, especialmente florais, cítricas e
                  frutadas. A clareza sensorial obtida permite apreciar nuances
                  que outros métodos podem mascarar.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Chemex em uso"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Proporção"
              description="1:16 a 1:17 (30g de café para 500ml de água) para clareza ideal."
              icon={<Scale className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Temperatura"
              description="94-96°C para compensar a perda de calor no vidro espesso."
              icon={<Thermometer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Tempo Total"
              description="4:00 a 4:30 minutos para extração completa e equilibrada."
              icon={<Timer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Moagem"
              description="Média-grossa, similar à areia grossa. Mais grossa que V60."
              icon={<span className="text-2xl">⚙️</span>}
            />
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Técnica Passo a Passo
            </h3>
            <MethodSteps steps={chemexSteps} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Receita Clássica
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Café
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">30g</div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Água
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">
                      500ml
                    </div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Temperatura
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">
                      95°C
                    </div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Tempo
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">
                      4:15
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
                      <span>60ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>0:45 - Primeira despejada</span>
                      <span>até 200ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>1:45 - Segunda despejada</span>
                      <span>até 350ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>2:45 - Despejada final</span>
                      <span>até 500ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4:15 - Drenagem completa</span>
                      <span>-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Características Únicas
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <h4 className="font-medium text-blue-800">Filtro Especial</h4>
                  <p className="text-sm text-blue-700">
                    20-30% mais espesso que filtros convencionais, retendo mais
                    óleos e sedimentos.
                  </p>
                </div>

                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800">
                    Design Funcional
                  </h4>
                  <p className="text-sm text-green-700">
                    O formato cônico e o canal de ar permitem fluxo constante e
                    estabilidade térmica.
                  </p>
                </div>

                <div className="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
                  <h4 className="font-medium text-purple-800">
                    Perfil Sensorial
                  </h4>
                  <p className="text-sm text-purple-700">
                    Clareza excepcional, corpo leve, acidez brilhante e notas
                    delicadas em evidência.
                  </p>
                </div>

                <div className="p-3 bg-amber-50 border-l-4 border-amber-500 rounded">
                  <h4 className="font-medium text-amber-800">Versatilidade</h4>
                  <p className="text-sm text-amber-700">
                    Disponível em vários tamanhos, de 3 a 10 xícaras, ideal para
                    servir múltiplas pessoas.
                  </p>
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
                    <Beaker className="h-4 w-4 text-[#C38154]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Chemex
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Recipiente de vidro borossilicato com cinta de madeira.
                      Disponível em vários tamanhos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">📄</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Filtros Chemex
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Filtros específicos mais espessos. Não substitua por
                      filtros convencionais.
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
                    Extração muito lenta ({">"} 5:00)
                  </h4>
                  <p className="text-sm text-red-700">
                    Moagem mais grossa, despejo mais centralizado, ou verifique
                    se o filtro está posicionado corretamente.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <h4 className="font-medium text-yellow-800">
                    Extração muito rápida ({"<"} 3:30)
                  </h4>
                  <p className="text-sm text-yellow-700">
                    Moagem mais fina, despejo mais lento, ou verifique se está
                    usando o filtro Chemex original.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <h4 className="font-medium text-blue-800">Sabor de papel</h4>
                  <p className="text-sm text-blue-700">
                    Pré-aqueça melhor o filtro com água quente abundante antes
                    da extração.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 border-l-4 border-purple-400 rounded">
                  <h4 className="font-medium text-purple-800">
                    Café muito fraco
                  </h4>
                  <p className="text-sm text-purple-700">
                    Aumente a dose de café ou diminua a quantidade de água.
                    Verifique se a moagem não está muito grossa.
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
