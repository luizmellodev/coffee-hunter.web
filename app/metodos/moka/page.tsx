import Image from "next/image"
import { Flame, Timer, Scale, Thermometer } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { MethodSteps } from "@/components/method-steps"
import { InfoCard } from "@/components/info-card"

export default function MokaPage() {
  const mokaSteps = [
    {
      title: "Preparação da Água",
      description:
        "Aqueça água previamente até aproximadamente 70-80°C. Isso evita que o café fique em contato com a fonte de calor por muito tempo.",
      tip: "Água pré-aquecida reduz o risco de sabor metálico e queimado no café final.",
    },
    {
      title: "Moagem e Dosagem",
      description:
        "Moa o café em granulometria média-fina (entre espresso e V60). Encha o filtro completamente, nivelando sem compactar.",
      tip: "Não compacte o café como no espresso. Apenas nivele suavemente com o dedo.",
    },
    {
      title: "Montagem",
      description:
        "Coloque a água quente no compartimento inferior até a válvula de segurança. Insira o filtro com café e rosqueie a parte superior.",
      tip: "Certifique-se de que não há grãos de café nas bordas, o que pode comprometer a vedação.",
    },
    {
      title: "Extração",
      description:
        "Posicione a cafeteira em fogo baixo com a tampa aberta. O café começará a subir em aproximadamente 3-5 minutos.",
      tip: "Mantenha o fogo baixo para extração lenta e controlada. Fogo alto resulta em café queimado.",
    },
    {
      title: "Finalização",
      description: "Quando ouvir um borbulhar e o fluxo começar a ficar mais claro, retire do fogo imediatamente.",
      tip: "O som de 'gorgolejo' indica o final da extração. Não deixe extrair até o fim para evitar sabores amargos.",
    },
    {
      title: "Resfriamento Rápido",
      description: "Envolva a base em um pano úmido ou coloque em água fria para interromper a extração.",
      tip: "Este passo é crucial para evitar que os últimos resíduos de café, mais amargos, subam para o reservatório.",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Moka"
        description="Domine a cafeteira italiana que produz um café concentrado e aromático, tradição em milhões de lares."
        icon={<Flame className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Tradição Italiana</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  A cafeteira Moka, também conhecida como "cafeteira italiana" ou "Bialetti" (sua marca mais famosa),
                  foi inventada por Alfonso Bialetti em 1933 e se tornou um ícone do design italiano e da cultura do
                  café.
                </p>
                <p>
                  Seu funcionamento baseia-se em um princípio simples: a pressão do vapor de água força a passagem da
                  água quente pelo café moído. Embora a pressão gerada (1-2 bar) seja inferior à de máquinas de espresso
                  (9 bar), o resultado é um café concentrado e aromático.
                </p>
                <p>
                  A Moka é apreciada pela sua praticidade, durabilidade e pela capacidade de produzir um café encorpado
                  com notas intensas. É um método que conecta gerações e continua presente em milhões de lares ao redor
                  do mundo.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/moka.webp"
                width={500}
                height={400}
                alt="Cafeteira Moka em uso"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Moagem"
              description="Média-fina, entre espresso e V60. Não deve ser tão fina quanto espresso."
              icon={<span className="text-2xl">⚙️</span>}
            />
            <InfoCard
              title="Temperatura"
              description="Água pré-aquecida a 70-80°C para evitar superaquecimento do café."
              icon={<Thermometer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Tempo"
              description="3-5 minutos de extração total em fogo baixo."
              icon={<Timer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Proporção"
              description="Filtro cheio de café (aproximadamente 15-18g para Moka de 3 xícaras)."
              icon={<Scale className="h-6 w-6 text-[#C38154]" />}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-amber-300 mb-8">Técnica Aprimorada</h3>
            <MethodSteps steps={mokaSteps} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Tamanhos e Capacidades</h3>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b dark:border-gray-700">
                        <th className="py-2 text-left text-[#884A39] dark:text-amber-200">Tamanho</th>
                        <th className="py-2 text-left text-[#884A39] dark:text-amber-200">Capacidade</th>
                        <th className="py-2 text-left text-[#884A39] dark:text-amber-200">Dose de Café</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-gray-700">
                      <tr>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">1 xícara</td>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">60ml</td>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">7g</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">3 xícaras</td>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">150ml</td>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">15-18g</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">6 xícaras</td>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">300ml</td>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">30-35g</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">9 xícaras</td>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">450ml</td>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">45-50g</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">12 xícaras</td>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">600ml</td>
                        <td className="py-2 text-[#884A39]/80 dark:text-amber-100/80">60-65g</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-[#884A39]/70 dark:text-amber-100/70 italic">
                  *Valores aproximados. A "xícara" na nomenclatura italiana é menor que uma xícara padrão.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Mitos e Verdades</h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 dark:border-red-500 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300">Mito: Deve-se compactar o café</h4>
                  <p className="text-sm text-red-700 dark:text-red-200">
                    Diferente do espresso, o café na Moka deve apenas ser nivelado, não compactado.
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 dark:border-green-500 rounded">
                  <h4 className="font-medium text-green-800 dark:text-green-300">
                    Verdade: Água pré-aquecida melhora o sabor
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-200">
                    Usar água já quente reduz o tempo de contato do café com o metal quente.
                  </p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 dark:border-red-500 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300">Mito: Fogo alto acelera sem prejudicar</h4>
                  <p className="text-sm text-red-700 dark:text-red-200">
                    Fogo alto queima o café e resulta em sabores desagradáveis.
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 dark:border-green-500 rounded">
                  <h4 className="font-medium text-green-800 dark:text-green-300">
                    Verdade: Deve-se interromper a extração
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-200">
                    Retirar do fogo quando começar o "gorgolejo" evita amargor excessivo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Manutenção e Cuidados</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">🧼</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Limpeza</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Lave apenas com água quente. Evite detergentes que podem deixar resíduos e afetar o sabor.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">⚠️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Vedação</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Verifique regularmente o estado da borracha de vedação e substitua quando necessário.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">🔧</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Válvula de Segurança</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Mantenha a válvula limpa e desobstruída. Ela é essencial para a segurança.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">🔥</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Cabo</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Posicione o cabo para fora da fonte de calor para evitar danos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Solução de Problemas</h3>
              <div className="space-y-3">
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Café não sobe</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Verifique se a moagem não está muito fina, se há vedação adequada, ou se a válvula está obstruída.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Café muito amargo</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Use água pré-aquecida, fogo mais baixo, e interrompa a extração mais cedo.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Café fraco</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Experimente uma moagem ligeiramente mais fina ou aumente a quantidade de café.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Vazamentos</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Verifique a borracha de vedação, certifique-se de que não há grãos nas bordas, e que as partes estão
                    bem rosqueadas.
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
