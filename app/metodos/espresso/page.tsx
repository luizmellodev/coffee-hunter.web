import Image from "next/image"
import { Timer, Gauge, Coffee, Thermometer } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { MethodSteps } from "@/components/method-steps"
import { InfoCard } from "@/components/info-card"

export default function EspressoPage() {
  const espressoSteps = [
    {
      title: "Preparação da Máquina",
      description:
        "Ligue a máquina e aguarde atingir a temperatura ideal (90-96°C). Faça um flush para limpar o grupo.",
      tip: "Uma máquina bem aquecida é fundamental para a estabilidade térmica durante a extração.",
    },
    {
      title: "Moagem do Café",
      description:
        "Moa 18-20g de café em granulometria fina, similar ao açúcar refinado. A moagem deve ser feita na hora.",
      tip: "Ajuste a moagem conforme o tempo de extração: mais fina para acelerar, mais grossa para desacelerar.",
    },
    {
      title: "Dosagem e Distribuição",
      description:
        "Distribua o café uniformemente no porta-filtro, eliminando grumos e criando uma superfície nivelada.",
      tip: "Use técnicas como WDT (Weiss Distribution Technique) para distribuição perfeita.",
    },
    {
      title: "Tamping",
      description: "Tampe com pressão consistente de aproximadamente 15kg, mantendo o tamper nivelado.",
      tip: "A pressão deve ser firme e uniforme. O polimento final ajuda a selar a superfície.",
    },
    {
      title: "Extração",
      description:
        "Inicie a extração imediatamente após tampar. O espresso deve fluir como 'mel morno' em 25-30 segundos.",
      tip: "Observe a cor e consistência do fluxo. Ajuste a moagem se necessário para próximas extrações.",
    },
    {
      title: "Avaliação",
      description:
        "O espresso final deve ter crema dourada, corpo aveludado e equilíbrio entre acidez, doçura e amargor.",
      tip: "Prove imediatamente após a extração para avaliar o perfil sensorial completo.",
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Espresso"
        description="Domine a arte do espresso perfeito: técnicas, equipamentos e segredos para extrações excepcionais."
        icon={<Coffee className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">O Coração do Café Especial</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  O espresso é a base de praticamente todas as bebidas de café especial. Esta técnica italiana de
                  extração utiliza água quente sob alta pressão (9 bar) para extrair os compostos solúveis do café moído
                  fino em aproximadamente 25-30 segundos.
                </p>
                <p>
                  O resultado é uma bebida concentrada de 25-35ml, com crema dourada característica, corpo aveludado e
                  perfil sensorial intenso que revela todas as nuances do grão utilizado.
                </p>
                <p>
                  Dominar o espresso requer compreensão das variáveis de extração: dose, moagem, tempo, temperatura e
                  pressão. Pequenos ajustes em qualquer uma dessas variáveis podem transformar completamente o resultado
                  final.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/espresso.jpg"
                width={500}
                height={400}
                alt="Extração de espresso"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Dose"
              description="18-20g de café moído fino para espresso duplo (dose padrão atual)."
              icon={<Gauge className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Tempo"
              description="25-30 segundos de extração para 25-35ml de bebida final."
              icon={<Timer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Temperatura"
              description="90-96°C na saída do grupo, variando conforme o perfil de torra."
              icon={<Thermometer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Pressão"
              description="9 bar de pressão constante durante toda a extração."
              icon={<span className="text-2xl">⚡</span>}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-amber-300 mb-8">Passo a Passo Detalhado</h3>
            <MethodSteps steps={espressoSteps} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Equipamentos Essenciais</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <Coffee className="h-4 w-4 text-[#C38154] dark:text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Máquina de Espresso</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Máquina com controle de temperatura e pressão estáveis. Modelos semi-automáticos oferecem melhor
                      controle para iniciantes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">⚙️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Moedor</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Moedor de rebarbas com ajuste fino de granulometria. A consistência da moagem é crucial para
                      extrações uniformes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">⚖️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Balança de Precisão</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Balança com precisão de 0,1g para dosagem exata do café e medição do yield final.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] dark:bg-amber-900/50 p-2 rounded-full">
                    <span className="text-sm">🔨</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-amber-200">Tamper</h4>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                      Tamper com diâmetro exato do porta-filtro e base plana para compactação uniforme.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Problemas Comuns e Soluções</h3>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 dark:bg-red-900/30 border-l-4 border-red-400 dark:border-red-500 rounded">
                  <h4 className="font-medium text-red-800 dark:text-red-300">
                    Extração muito rápida (&lt; 20 segundos)
                  </h4>
                  <p className="text-sm text-red-700 dark:text-red-200">
                    Moagem muito grossa ou dose insuficiente. Ajuste para moagem mais fina ou aumente a dose.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-500 rounded">
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-300">
                    Extração muito lenta (&gt; 35 segundos)
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    Moagem muito fina ou dose excessiva. Ajuste para moagem mais grossa ou reduza a dose.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-500 rounded">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300">Crema pálida ou ausente</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-200">
                    Café muito velho, moagem inadequada ou temperatura baixa. Use café fresco e ajuste parâmetros.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-400 dark:border-purple-500 rounded">
                  <h4 className="font-medium text-purple-800 dark:text-purple-300">Sabor amargo excessivo</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-200">
                    Sobre-extração. Reduza tempo, temperatura ou use moagem mais grossa.
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
