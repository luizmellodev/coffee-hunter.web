import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ArrowRight, Check, Coffee, Sparkles, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GuiaParaIniciantes() {
  return (
    <>
      <PageHeader
        title="Guia para Iniciantes"
        description="Comece sua jornada no mundo do café especial com este guia completo. Aprenda os conceitos básicos, equipamentos essenciais e primeiros passos para preparar um café incrível."
        icon={<BookOpen className="h-8 w-8 text-[#C38154]" />}
      />

      <main className="container px-4 md:px-6 py-10 md:py-12 lg:py-16">
        {/* Introdução */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Comece sua Jornada</h2>
                <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    Bem-vindo ao mundo do café especial! Este guia foi criado para ajudar você a dar os primeiros
                    passos nessa jornada fascinante. Vamos explorar os conceitos básicos, equipamentos essenciais
                    e técnicas fundamentais para preparar um café incrível.
                  </p>
                  <p>
                    Não se preocupe se tudo parecer um pouco complexo no início. Com o tempo e a prática,
                    você desenvolverá seu próprio estilo e preferências.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/specialcoffee.jpeg"
                    fill
                    alt="Conceitos básicos do café"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conceitos Básicos */}
        <section className="py-16 bg-accent/20">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="v60.jpg"
                    fill
                    alt="Conceitos básicos do café"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Conceitos Básicos</h2>
                <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    Antes de começar a preparar seu café, é importante entender alguns conceitos fundamentais
                    que farão toda a diferença no resultado final.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#884A39] dark:bg-amber-300"></div>
                      </div>
                      <div>
                        <strong className="block text-[#884A39] dark:text-amber-300">Frescor</strong>
                        <span className="text-sm">
                          Use grãos recém-torrados, idealmente até 3 semanas após a torra.
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#884A39] dark:bg-amber-300"></div>
                      </div>
                      <div>
                        <strong className="block text-[#884A39] dark:text-amber-300">Moagem</strong>
                        <span className="text-sm">
                          Moa os grãos logo antes de preparar o café para preservar os aromas.
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#884A39] dark:bg-amber-300"></div>
                      </div>
                      <div>
                        <strong className="block text-[#884A39] dark:text-amber-300">Água</strong>
                        <span className="text-sm">
                          Use água filtrada e na temperatura correta (90-96°C).
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipamentos Essenciais */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Equipamentos Essenciais</h2>
                <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    Você não precisa de equipamentos caros para começar, mas alguns itens são fundamentais
                    para preparar um bom café.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#884A39] dark:bg-amber-300"></div>
                      </div>
                      <div>
                        <strong className="block text-[#884A39] dark:text-amber-300">Moedor</strong>
                        <span className="text-sm">
                          Um moedor de mós é ideal, mas você pode começar com um moedor manual.
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#884A39] dark:bg-amber-300"></div>
                      </div>
                      <div>
                        <strong className="block text-[#884A39] dark:text-amber-300">Balança</strong>
                        <span className="text-sm">
                          Uma balança de precisão ajuda a manter a consistência nas receitas.
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-[#884A39] dark:bg-amber-300"></div>
                      </div>
                      <div>
                        <strong className="block text-[#884A39] dark:text-amber-300">Método de Preparo</strong>
                        <span className="text-sm">
                          Comece com métodos simples como V60, AeroPress ou French Press.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/equipments.webp"
                    fill
                    alt="Equipamentos básicos"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Primeiros Passos */}
        <section className="py-16 bg-accent/20">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/coffee1.jpg"
                    fill
                    alt="Preparo básico"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Primeiros Passos</h2>
                <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    Agora que você tem os equipamentos básicos, vamos começar a preparar seu café.
                    Siga estes passos simples para começar:
                  </p>
                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium text-[#884A39] dark:text-amber-300">1</span>
                      </div>
                      <div>
                        <strong className="block text-[#884A39] dark:text-amber-300">Pese os Grãos</strong>
                        <span className="text-sm">
                          Use 15g de café para 250ml de água como ponto de partida.
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium text-[#884A39] dark:text-amber-300">2</span>
                      </div>
                      <div>
                        <strong className="block text-[#884A39] dark:text-amber-300">Moagem</strong>
                        <span className="text-sm">
                          Ajuste a moagem de acordo com seu método de preparo.
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium text-[#884A39] dark:text-amber-300">3</span>
                      </div>
                      <div>
                        <strong className="block text-[#884A39] dark:text-amber-300">Temperatura</strong>
                        <span className="text-sm">
                          Aqueça a água até 90-96°C e mantenha essa temperatura.
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusão */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Continue Aprendendo</h2>
                <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    Este é apenas o começo da sua jornada no mundo do café especial. Continue explorando,
                    experimentando e aprendendo com cada xícara que preparar.
                  </p>
                  <p>
                    Visite nossas outras seções para aprender mais sobre métodos de preparo, equipamentos
                    e técnicas avançadas.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/metodos">
                    <Button className="bg-[#C38154] hover:bg-[#884A39] text-white">
                      Explorar Métodos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/coffee2.webp"
                    fill
                    alt="Degustação básica"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
