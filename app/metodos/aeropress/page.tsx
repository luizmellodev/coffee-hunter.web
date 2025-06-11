import Image from "next/image"
import { Zap, Timer, Scale, Thermometer } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { MethodSteps } from "@/components/method-steps"
import { InfoCard } from "@/components/info-card"

export default function AeropressPage() {
  const aeropressSteps = [
    {
      title: "Preparação do Equipamento",
      description:
        "Monte a AeroPress com filtro no cap. Pré-aqueça com água quente e posicione sobre a xícara ou servidor.",
      tip: "Use a posição invertida para maior controle sobre o tempo de infusão.",
    },
    {
      title: "Moagem e Dosagem",
      description:
        "Moa 15g de café em granulometria média-fina. A moagem deve ser mais fina que pour-over, mas mais grossa que espresso.",
      tip: "A AeroPress é tolerante a diferentes moagens, permitindo experimentação.",
    },
    {
      title: "Adição do Café",
      description: "Adicione o café moído na câmara. Nivele suavemente sem compactar.",
      tip: "Na posição invertida, adicione o café com a AeroPress de cabeça para baixo.",
    },
    {
      title: "Primeira Adição de Água",
      description: "Despeje 50ml de água a 85°C sobre o café. Mexa vigorosamente por 10 segundos.",
      tip: "Temperatura mais baixa que outros métodos devido ao tempo de contato prolongado.",
    },
    {
      title: "Infusão",
      description: "Complete com água até 200ml total. Mexa novamente e deixe infundir por 1:30 minutos.",
      tip: "Tempo de infusão pode variar de 1-4 minutos dependendo da receita.",
    },
    {
      title: "Pressão",
      description: "Pressione lenta e constantemente por 20-30 segundos. Pare quando ouvir o som de ar.",
      tip: "Pressão excessiva pode causar amargor. Mantenha pressão constante e suave.",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="AeroPress"
        description="Descubra a versatilidade da AeroPress, método que combina imersão e pressão para cafés encorpados e limpos."
        icon={<Zap className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Inovação e Versatilidade</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  A AeroPress, inventada por Alan Adler em 2005, revolucionou o preparo de café caseiro. Combinando
                  imersão total com pressão suave, produz cafés encorpados, limpos e com baixa acidez.
                </p>
                <p>
                  Sua versatilidade permite desde cafés concentrados similares ao espresso até bebidas mais diluídas
                  como pour-over. A tolerância a diferentes moagens e temperaturas torna a AeroPress ideal para
                  iniciantes e experimentadores.
                </p>
                <p>
                  O método de pressão remove sedimentos e óleos, resultando em uma bebida limpa mas com corpo presente.
                  É perfeita para viagens devido à sua durabilidade e facilidade de limpeza.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/aeropress.webp"
                width={500}
                height={400}
                alt="AeroPress em uso"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Proporção"
              description="1:13 a 1:15 (15g de café para 200ml de água) para concentração ideal."
              icon={<Scale className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Temperatura"
              description="80-85°C, mais baixa devido ao tempo de contato prolongado."
              icon={<Thermometer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Tempo Total"
              description="2:30 a 3:00 minutos incluindo infusão e pressão."
              icon={<Timer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Pressão"
              description="Pressão manual suave e constante por 20-30 segundos."
              icon={<Zap className="h-6 w-6 text-[#C38154]" />}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-amber-300 mb-8">Método Padrão</h3>
            <MethodSteps steps={aeropressSteps} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Receita Clássica</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-amber-200">Café</div>
                    <div className="text-2xl font-bold text-[#C38154] dark:text-amber-400">15g</div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-amber-200">Água</div>
                    <div className="text-2xl font-bold text-[#C38154] dark:text-amber-400">200ml</div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-amber-200">Temperatura</div>
                    <div className="text-2xl font-bold text-[#C38154] dark:text-amber-400">85°C</div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-amber-200">Infusão</div>
                    <div className="text-2xl font-bold text-[#C38154] dark:text-amber-400">1:30</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Método Invertido</h3>
              <div className="space-y-3">
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  Método alternativo que oferece maior controle sobre o tempo de infusão:
                </p>
                <ol className="list-decimal pl-4 space-y-2 text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  <li>Monte a AeroPress invertida (êmbolo para baixo)</li>
                  <li>Adicione café e água, mexa</li>
                  <li>Deixe infundir pelo tempo desejado</li>
                  <li>Coloque o cap com filtro</li>
                  <li>Vire rapidamente sobre a xícara</li>
                  <li>Pressione normalmente</li>
                </ol>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <p className="text-xs text-[#884A39] dark:text-amber-200">
                    <strong>Vantagem:</strong> Permite infusões mais longas sem gotejamento
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Receitas Especiais</h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300">Concentrado (Tipo Espresso)</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-200 mb-2">
                    20g café, 60ml água, 90°C, infusão 45s
                  </p>
                  <div className="text-xs text-blue-600 dark:text-blue-300">Ideal para americano ou café com leite</div>
                </div>

                <div className="p-3 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800 dark:text-green-300">Café Gelado</h4>
                  <p className="text-sm text-green-700 dark:text-green-200 mb-2">
                    20g café, 150ml água quente + 100ml gelo
                  </p>
                  <div className="text-xs text-green-600 dark:text-green-300">Pressione diretamente sobre o gelo</div>
                </div>

                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-500 rounded">
                  <h4 className="font-medium text-purple-800 dark:text-purple-300">Bypass (Diluído)</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-200 mb-2">
                    15g café, 150ml água + 50ml água quente extra
                  </p>
                  <div className="text-xs text-purple-600 dark:text-purple-300">
                    Adicione água quente após a extração
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Vantagens da AeroPress</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Tolerante a Erros</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Perdoa variações na moagem, temperatura e timing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">🧳</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Portátil</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Durável e compacta, ideal para viagens e escritório.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">🧽</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Fácil Limpeza</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Limpeza rápida e simples, sem partes complexas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">🔬</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Versátil</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Múltiplas receitas e estilos de preparo possíveis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
