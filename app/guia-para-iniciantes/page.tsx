import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import { ArrowRight, BookOpen, Coffee, Leaf, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContentDisclaimer } from "@/components/content-disclaimer"

export default function GuiaParaIniciantes() {
  return (
    <>
      <PageHeader
        title="Guia para Iniciantes"
        description="Comece sua jornada no mundo dos cafés especiais. Entenda o que são, como são produzidos e como apreciar melhor cada xícara."
        icon={<BookOpen className="h-8 w-8 text-[#C38154]" />}
      />

      <main className="container px-4 md:px-6 py-10 md:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto mb-16">
          <ContentDisclaimer />
        </div>

        {/* O que é Café Especial */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">O que é Café Especial?</h2>
                <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    Cafés especiais são grãos de alta qualidade, cultivados com cuidado excepcional e processados com precisão.
                    Diferente dos cafés comerciais, eles possuem características únicas de sabor, aroma e origem.
                  </p>
                  <div className="mt-8">
                    <Link href="/cafe-especial">
                      <Button className="bg-[#C38154] hover:bg-[#884A39] text-white">
                        Saiba mais sobre Café Especial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/specialcoffee2.jpeg"
                    fill
                    alt="Café especial"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Do Cultivo à Xícara */}
        <section className="py-16 bg-accent/20">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-12 text-center">A Jornada do Café Especial</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cultivo e Colheita */}
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-[#884A39] dark:text-amber-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-3">Do Campo à Mesa</h3>
                <p className="text-[#884A39]/80 dark:text-amber-100/90 mb-4">
                  Entenda como o terroir, variedades e colheita influenciam o sabor final do café.
                </p>
                <div className="space-y-2">
                  <Link href="/terroir" className="block text-sm text-[#884A39] dark:text-amber-300 hover:underline">
                    • Terroir e Clima
                  </Link>
                  <Link href="/variedades" className="block text-sm text-[#884A39] dark:text-amber-300 hover:underline">
                    • Variedades de Café
                  </Link>
                  <Link href="/colheita" className="block text-sm text-[#884A39] dark:text-amber-300 hover:underline">
                    • Colheita e Seleção
                  </Link>
                </div>
              </div>

              {/* Processamento */}
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center">
                    <Coffee className="h-6 w-6 text-[#884A39] dark:text-amber-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-3">Processamento e Torra</h3>
                <p className="text-[#884A39]/80 dark:text-amber-100/90 mb-4">
                  Descubra como o processamento e a torra desenvolvem os sabores do café.
                </p>
                <div className="space-y-2">
                  <Link href="/processamento" className="block text-sm text-[#884A39] dark:text-amber-300 hover:underline">
                    • Métodos de Processamento
                  </Link>
                  <Link href="/torra" className="block text-sm text-[#884A39] dark:text-amber-300 hover:underline">
                    • Torra e seus Estágios
                  </Link>
                  <Link href="/armazenamento" className="block text-sm text-[#884A39] dark:text-amber-300 hover:underline">
                    • Armazenamento Correto
                  </Link>
                </div>
              </div>

              {/* Preparo */}
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center">
                    <Droplets className="h-6 w-6 text-[#884A39] dark:text-amber-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-3">Preparo e Degustação</h3>
                <p className="text-[#884A39]/80 dark:text-amber-100/90 mb-4">
                  Aprenda diferentes métodos de preparo e como degustar café.
                </p>
                <div className="space-y-2">
                  <Link href="/metodos" className="block text-sm text-[#884A39] dark:text-amber-300 hover:underline">
                    • Métodos de Preparo
                  </Link>
                  <Link href="/agua-e-extracao" className="block text-sm text-[#884A39] dark:text-amber-300 hover:underline">
                    • Água e Extração
                  </Link>
                  <Link href="/degustacao" className="block text-sm text-[#884A39] dark:text-amber-300 hover:underline">
                    • Como Degustar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por Onde Começar */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/v60.jpg"
                    fill
                    alt="Preparo de café"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Por Onde Começar?</h2>
                <div className="space-y-6 text-[#884A39]/80 dark:text-amber-100/90">
                  <p>
                    Sugerimos começar sua jornada com estes passos:
                  </p>
                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium text-[#884A39] dark:text-amber-300">1</span>
                      </div>
                      <div>
                        <Link href="/cafe-especial" className="block text-[#884A39] dark:text-amber-300 font-medium hover:underline">
                          Entenda o Café Especial
                        </Link>
                        <span className="text-sm block mt-1">
                          Conheça as características que tornam um café especial.
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium text-[#884A39] dark:text-amber-300">2</span>
                      </div>
                      <div>
                        <Link href="/equipamentos" className="block text-[#884A39] dark:text-amber-300 font-medium hover:underline">
                          Escolha seu Equipamento
                        </Link>
                        <span className="text-sm block mt-1">
                          Descubra os equipamentos básicos para começar.
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium text-[#884A39] dark:text-amber-300">3</span>
                      </div>
                      <div>
                        <Link href="/metodos" className="block text-[#884A39] dark:text-amber-300 font-medium hover:underline">
                          Escolha um Método
                        </Link>
                        <span className="text-sm block mt-1">
                          Comece com métodos mais simples como V60 ou AeroPress.
                        </span>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#F9E0BB] dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-medium text-[#884A39] dark:text-amber-300">4</span>
                      </div>
                      <div>
                        <Link href="/degustacao" className="block text-[#884A39] dark:text-amber-300 font-medium hover:underline">
                          Aprenda a Degustar
                        </Link>
                        <span className="text-sm block mt-1">
                          Desenvolva seu paladar e aprecie melhor cada xícara.
                        </span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Mais */}
        <section className="py-16 bg-gradient-to-r from-coffee-700 to-coffee-800 dark:from-coffee-800 dark:to-coffee-900 text-white rounded-xl">
          <div className="container max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Explore Mais
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
              Aprofunde seus conhecimentos explorando nossa biblioteca completa de conteúdo sobre café especial.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/historia-do-cafe">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  História do Café
                </Button>
              </Link>
              <Link href="/cafe-e-saude">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Café e Saúde
                </Button>
              </Link>
              <Link href="/latte-art">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Latte Art
                </Button>
              </Link>
              <Link href="/visite-cafeterias">
                <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Visite Cafeterias
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
