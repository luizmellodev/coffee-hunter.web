import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  Sparkles,
  BookOpen,
  ArrowRight,
  Droplets,
  Heart,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import LottieAnimation from "@/components/LottieAnimation";
import { Onboarding } from "@/components/onboarding";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Onboarding />
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 xl:py-40">
        <div className="absolute inset-0 elegant-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />

        <div className="container relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="animate-fade-in order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full glass-effect text-xs md:text-sm text-muted-foreground mb-6 md:mb-8">
                  <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                  <span>Seu guia completo para cafés especiais</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-6 md:mb-8">
                  <span className="text-gradient">Descubra</span>
                  <br />
                  <span className="text-foreground">o Universo dos</span>
                  <br />
                  <span className="text-gradient">Cafés Especiais</span>
                </h1>

                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 md:mb-12 max-w-lg">
                  Uma jornada educativa completa desde o cultivo até a xícara.
                  Aprenda sobre variedades, processamento, métodos de preparo e
                  degustação.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-coffee-700 to-coffee-800 hover:from-coffee-800 hover:to-coffee-900 dark:from-coffee-300 dark:to-coffee-200 dark:text-coffee-900 text-white border-0 rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg group"
                  >
                    <Link href="/cafe-especial">
                      <BookOpen className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                      Começar a Aprender
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="glass-effect border-0 rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg group hover:bg-accent/50"
                  >
                    <Link href="/guia-para-iniciantes/">
                      <Coffee className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                      Guia para iniciantes
                      <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

                <div className="relative animate-fade-in order-1 lg:order-2">
                <div className="absolute -inset-4 bg-gradient-to-r from-coffee-200 to-gold-200 dark:from-black dark:to-gray-950 blur-3xl opacity-30" />
                <LottieAnimation
                  animation="catcoffee"
                  width="100%"
                  height="100%"
                />
                </div>
            </div>
          </div>
        </div>
      </section>

    {/* Stats Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-coffee-900 via-coffee-800 to-coffee-900 dark:from-black dark:via-coffee-950 dark:to-black text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 md:mb-4 text-gold-300">
                50+
              </div>
              <div className="text-white/80 text-sm md:text-lg">
                Métodos de Preparo
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 md:mb-4 text-gold-300">
                100+
              </div>
              <div className="text-white/80 text-sm md:text-lg">
                Variedades de Café
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 md:mb-4 text-gold-300">
                25+
              </div>
              <div className="text-white/80 text-sm md:text-lg">
                Países Produtores
              </div>
            </div>
            <div className="animate-fade-in">
              <div className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 md:mb-4 text-gold-300">
                ∞
              </div>
              <div className="text-white/80 text-sm md:text-lg">
                Possibilidades de Sabor
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Do Grão à Xícara Section */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm">Explore</div>
              <h2 className="text-3xl font-serif font-bold tracking-tighter sm:text-5xl">Do Grão à Xícara</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cada etapa do processo influencia o sabor final do seu café. Conheça a jornada completa e aprenda como
                cada detalhe faz a diferença.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/variedades"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors"
            >
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold">Variedades</h3>
                  <p className="text-muted-foreground">
                    Descubra as diferentes espécies e variedades de café cultivadas ao redor do mundo.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/terroir"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors"
            >
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold">Terroir</h3>
                  <p className="text-muted-foreground">
                    Entenda como o solo, clima e altitude influenciam o perfil sensorial do café.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/processamento"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors"
            >
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold">Processamento</h3>
                  <p className="text-muted-foreground">
                    Conheça os diferentes métodos de processamento e como eles afetam o sabor final.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/torra"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors"
            >
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold">Torra</h3>
                  <p className="text-muted-foreground">
                    Aprenda sobre os perfis de torra e como eles transformam os grãos verdes em café aromático.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/metodos"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors"
            >
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold">Métodos de Preparo</h3>
                  <p className="text-muted-foreground">
                    Explore diferentes técnicas de extração e descubra qual se adapta melhor ao seu paladar.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/degustacao"
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors"
            >
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold">Degustação</h3>
                  <p className="text-muted-foreground">
                    Desenvolva seu paladar e aprenda a identificar as nuances de sabor e aroma no café.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 text-gradient">Explore Nossos Guias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card de Métodos de Preparo */}
            <Link
              href="/metodos"
              className="group relative overflow-hidden rounded-lg bg-zinc-50 dark:bg-zinc-900 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src="methods.jpg"
                  fill
                  alt="Métodos de Preparo de Café"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-medium">Métodos de Preparo</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Descubra diferentes técnicas para extrair o melhor do seu café
                </p>
              </div>
            </Link>

            {/* Card de Grãos de Café */}
            <Link
              href="/guia-para-iniciantes"
              className="group relative overflow-hidden rounded-lg bg-zinc-50 dark:bg-zinc-900 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src="coffee2.webp"
                  fill
                  alt="Guia para Iniciantes"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-medium">Guia para Iniciantes</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Comece sua jornada no mundo do café especial com este guia completo
                </p>
              </div>
            </Link>

            {/* Card de Equipamentos */}
            <Link
              href="/equipamentos"
              className="group relative overflow-hidden rounded-lg bg-zinc-50 dark:bg-zinc-900 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-[300px]">
                <Image
                  src="equipments.webp"
                  fill
                  alt="Equipamentos para café"
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-medium">Equipamentos</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Guia completo sobre os equipamentos essenciais para preparar o café perfeito
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* A Arte da Extração Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-accent/20">
        <div className="container px-4 md:px-6 max-w-5xl">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm">Métodos</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gradient mb-4 md:mb-6">A Arte da Extração</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Cada método de preparo revela diferentes características do café. Descubra qual combina melhor com seu
                estilo e preferências.
              </p>
              <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-coffee-600 to-gold-500 mx-auto mt-6 md:mt-8" />
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl">
              <Link href="/metodos/espresso" className="absolute inset-0 z-10">
                <span className="sr-only">Ver método Espresso</span>
              </Link>
              <Image
                src="espresso.jpg"
                width={600}
                height={400}
                alt="Café espresso sendo extraído"
                className="h-60 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-xl font-bold text-white">Espresso</h3>
                  <p className="text-sm text-gray-200">A base para muitas bebidas de café</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <Link href="/metodos/v60" className="absolute inset-0 z-10">
                <span className="sr-only">Ver método V60</span>
              </Link>
              <Image
                src="v60.jpg"
                width={600}
                height={400}
                alt="Preparo de café com V60"
                className="h-60 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-xl font-bold text-white">V60</h3>
                  <p className="text-sm text-gray-200">Clareza e complexidade em cada gota</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <Link href="/metodos/aeropress" className="absolute inset-0 z-10">
                <span className="sr-only">Ver método AeroPress</span>
              </Link>
              <Image
                src="aeropress.webp"
                width={600}
                height={400}
                alt="Preparo de café com AeroPress"
                className="h-60 w-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-xl font-bold text-white">AeroPress</h3>
                  <p className="text-sm text-gray-200">Versatilidade e praticidade</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-coffee-700 text-white hover:bg-coffee-800">
              <Link href="/metodos">Explorar Todos os Métodos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recursos Adicionais */}
      <section className="py-12 md:py-16">
        <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gradient mb-4 md:mb-6">
              Explore o Conhecimento
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Mergulhe fundo no mundo dos cafés especiais com nossos guias
              detalhados e informativos.
            </p>
            <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-coffee-600 to-gold-500 mx-auto mt-6 md:mt-8" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/historia-do-cafe" className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors">
              <div className="flex flex-col h-full">
                <div className="bg-coffee-100 dark:bg-coffee-800 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-coffee-700 dark:text-coffee-300" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">História do Café</h3>
                <p className="text-sm text-muted-foreground flex-grow">
                  Da lenda de Kaldi à bebida global: conheça a fascinante jornada do café através dos séculos.
                </p>
                <div className="flex items-center mt-4 text-coffee-700 dark:text-coffee-300">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/agua-e-extracao" className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors">
              <div className="flex flex-col h-full">
                <div className="bg-coffee-100 dark:bg-coffee-800 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <Droplets className="h-6 w-6 text-coffee-700 dark:text-coffee-300" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Água e Extração</h3>
                <p className="text-sm text-muted-foreground flex-grow">
                  Entenda como a qualidade da água e os parâmetros de extração afetam o resultado final na xícara.
                </p>
                <div className="flex items-center mt-4 text-coffee-700 dark:text-coffee-300">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/guia-para-iniciantes" className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors">
              <div className="flex flex-col h-full">
                <div className="bg-coffee-100 dark:bg-coffee-800 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-coffee-700 dark:text-coffee-300" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Guia para Iniciantes</h3>
                <p className="text-sm text-muted-foreground flex-grow">Primeiros passos no mundo do café especial</p>
                <div className="flex items-center mt-4 text-coffee-700 dark:text-coffee-300">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/cafe-e-saude" className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors">
              <div className="flex flex-col h-full">
                <div className="bg-coffee-100 dark:bg-coffee-800 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-coffee-700 dark:text-coffee-300" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Café e Saúde</h3>
                <p className="text-sm text-muted-foreground flex-grow">
                  Benefícios comprovados, efeitos da cafeína e recomendações para um consumo saudável.
                </p>
                <div className="flex items-center mt-4 text-coffee-700 dark:text-coffee-300">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recursos Adicionais - Segunda Linha */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <Link href="/equipamentos" className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors">
              <div className="flex flex-col h-full">
                <div className="bg-coffee-100 dark:bg-coffee-800 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-coffee-700 dark:text-coffee-300" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Equipamentos</h3>
                <p className="text-sm text-muted-foreground flex-grow">
                  Guia completo sobre moedores, máquinas e acessórios essenciais para preparar café de qualidade.
                </p>
                <div className="flex items-center mt-4 text-coffee-700 dark:text-coffee-300">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/visite-cafeterias" className="group relative overflow-hidden rounded-xl border bg-background p-6 hover:border-coffee-500 dark:hover:border-coffee-700 transition-colors">
              <div className="flex flex-col h-full">
                <div className="bg-coffee-100 dark:bg-coffee-800 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-coffee-700 dark:text-coffee-300" />
                </div>
                <h3 className="font-serif text-lg font-medium mb-2">Encontre Cafeterias</h3>
                <p className="text-sm text-muted-foreground flex-grow">
                  Descubra cafeterias especializadas próximas a você
                </p>
                <div className="flex items-center mt-4 text-coffee-700 dark:text-coffee-300">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
