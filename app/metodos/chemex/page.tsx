import Image from "next/image"
import { Beaker, Timer, Scale, Thermometer } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { MethodSteps } from "@/components/method-steps"
import { InfoCard } from "@/components/info-card"

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
      description: "Complete até 500ml total. Aguarde a drenagem completa, que deve ocorrer entre 4:00 e 4:30 minutos.",
      tip: "O leito de café deve ficar plano ao final da extração, indicando uniformidade.",
    },
  ]

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
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Elegância e Pureza</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  O Chemex é um método de preparo icônico, criado em 1941 pelo químico alemão Peter Schlumbohm. Seu
                  design elegante combina funcionalidade e estética, sendo inclusive parte da coleção permanente do MoMA
                  (Museu de Arte Moderna de Nova York).
                </p>
                <p>
                  O diferencial do Chemex está em seu filtro especial, 20-30% mais espesso que filtros convencionais.
                  Esta característica, combinada com o formato cônico, retém óleos e sedimentos finos, resultando em uma
                  bebida excepcionalmente limpa e brilhante.
                </p>
                <p>
                  O Chemex é ideal para destacar notas delicadas e sutis em cafés de torra clara, especialmente florais,
                  cítricas e frutadas. A clareza sensorial obtida permite apreciar nuances que outros métodos podem
                  mascarar.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
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

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-amber-300 mb-8">Técnica Passo a Passo</h3>
            <MethodSteps steps={chemexSteps} />
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
                    <div className="text-2xl font-bold text-[#C38154] dark:text-amber-400">95°C</div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-amber-200">Tempo</div>
                    <div className="text-2xl font-bold text-[#C38154] dark:text-amber-400">4:15</div>
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

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Características Únicas</h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300">Filtro Especial</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-200">
                    20-30% mais espesso que filtros convencionais, retendo mais óleos e sedimentos.
                  </p>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800 dark:text-green-300">Design Funcional</h4>
                  <p className="text-sm text-green-700 dark:text-green-200">
                    O formato cônico e o canal de ar permitem fluxo constante e estabilidade térmica.
                  </p>
                </div>

                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 rounded">
                  <h4 className="font-medium text-purple-800 dark:text-purple-300">Perfil Sensorial</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-200">
                    Clareza excepcional, corpo leve, acidez brilhante e notas delicadas em evidência.
                  </p>
                </div>

                <div className="p-3 bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 rounded">
                  <h4 className="font-medium text-amber-800 dark:text-amber-300">Versatilidade</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-200">
                    Disponível em vários tamanhos, de 3 a 10 xícaras, ideal para servir múltiplas pessoas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Equipamentos Necessários</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <Beaker className="h-4 w-4 text-[#C38154] dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Chemex</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Recipiente de vidro borossilicato com cinta de madeira. Disponível em vários tamanhos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">📄</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Filtros Chemex</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Filtros específicos mais espessos. Não substitua por filtros convencionais.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <Scale className="h-4 w-4 text-[#C38154] dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Balança de Precisão</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Com timer integrado e precisão de 0,1g para dosagem e controle de fluxo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">🫖</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Chaleira Gooseneck</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Bico longo e fino para controle preciso do fluxo de água.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Dicas para Chemex Perfeito</h3>
              <div className="space-y-3">
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Pré-aquecimento</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Pré-aqueça bem o Chemex para compensar a perda de calor no vidro espesso.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Posicionamento do Filtro</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Posicione o lado de três camadas voltado para o bico para melhor fluxo de ar.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Fluxo de Água</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Mantenha despejo constante e lento. Nunca deixe o nível de água baixar completamente.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Cafés Recomendados</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Prefira cafés de torra clara com notas florais, frutadas ou cítricas.
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
