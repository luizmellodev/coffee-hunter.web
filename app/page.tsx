import Image from "next/image";
import Link from "next/link";
import {
  Coffee,
  Sparkles,
  BookOpen,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfoCard } from "@/components/info-card";
import LottieAnimation from "@/components/LottieAnimation";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 lg:py-32 xl:py-40">
        <div className="absolute inset-0 elegant-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />

        <div className="container relative">
          <div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="animate-fade-in order-1 lg:order-1">
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
                    <Link href="/metodos/">
                      <Coffee className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                      Ver Métodos
                      <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
<div className="relative animate-fade-in order-1 lg:order-2">
  <div className="relative animate-fade-in order-2">
    <div className="absolute -inset-4 bg-gradient-to-r from-coffee-200 to-gold-200 dark:from-black dark:to-gray-950 blur-3xl opacity-30" />
    <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-full lg:h-full mx-auto">
      <LottieAnimation
        animation="catcoffee"
        width="100%"
        height="100%"
      />
    </div>
  </div>
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

      {/* Features Section */}
      <section className="py-16 md:py-24 lg:py-32">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <InfoCard
              title="Fundamentos"
              description="Entenda o que torna um café especial, suas características únicas e como identificar qualidade."
              icon={
                <Award className="h-6 w-6 md:h-8 md:w-8 text-coffee-700 dark:text-coffee-300" />
              }
            >
              <div className="space-y-4 md:space-y-6">
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/cafe-especial"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>O que é Café Especial?</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/variedades"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Variedades de Café</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
                                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/terroir"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Terroir e Origem</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
              </div>
            </InfoCard>

            <InfoCard
              title="Produção"
              description="Acompanhe toda a jornada do café, desde o cultivo até o processamento e torra."
              icon={<span className="text-2xl md:text-3xl">🌱</span>}
            >
              <div className="space-y-4 md:space-y-6">
                                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/colheita"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Cultivo e Colheita</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
                                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/processamento"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Processamento</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
                                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/torra"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Torra</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
              </div>
            </InfoCard>

            <InfoCard
              title="Métodos de Preparo"
              description="Domine diferentes técnicas de extração e descubra como cada método revela sabores únicos."
              icon={
                <Coffee className="h-6 w-6 md:h-8 md:w-8 text-coffee-700 dark:text-coffee-300" />
              }
            >
              <div className="space-y-4 md:space-y-6">
                                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/metodos/espresso"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Espresso</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
                                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/metodos/v60"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Hario V60</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
                
                                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/metodos/aeropress"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>AeroPress</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
              </div>
            </InfoCard>

            <InfoCard
              title="Latte Art"
              description="Aprenda a criar arte no leite, desde técnicas básicas até desenhos avançados."
              icon={<span className="text-2xl md:text-3xl">🎨</span>}
            >
              <div className="space-y-4 md:space-y-6">
                                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/latte-art"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Técnicas Básicas</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
                                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/latte-art#vaporizacao"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Vaporização do Leite</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between h-auto p-2 text-sm hover:bg-accent/50"
                >
                <Link
                  href="/latte-art#desenhos"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Desenhos Avançados</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                </Button>
              </div>
            </InfoCard>

            <InfoCard
              title="Degustação"
              description="Desenvolva seu paladar e aprenda a identificar notas sensoriais complexas."
              icon={<span className="text-2xl md:text-3xl">👃</span>}
            >
              <div className="space-y-4 md:space-y-6">
                <Link
                  href="/degustacao"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Análise Sensorial</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/degustacao#cupping"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Cupping</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/degustacao#notas"
                  className="flex items-center justify-between text-sm text-black dark:text-white hover:text-coffee-700 dark:hover:text-coffee-300 transition-colors group"
                >
                  <span>Identificação de Notas</span>
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </InfoCard>

            <InfoCard
              title="Comunidade"
              description="Conecte-se com outros amantes de café e descubra as melhores cafeterias."
              icon={
                <Users className="h-6 w-6 md:h-8 md:w-8 text-coffee-700 dark:text-coffee-300" />
              }
            >
              <div className="pt-3 md:pt-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-coffee-700 to-coffee-800 hover:from-coffee-800 hover:to-coffee-900 dark:from-coffee-300 dark:to-coffee-200 dark:text-coffee-900 text-white border-0 rounded-full text-sm"
                >
                  <Link href="/visite-cafeterias">Encontrar Cafeterias</Link>
                </Button>
              </div>
            </InfoCard>
          </div>
        </div>
      </section>
    </div>
  );
}
