"use client"

import { useState } from "react"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Coffee, ChevronRight, ChevronLeft } from "lucide-react"

export default function HistoriaDoCafe() {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0)

  const timelineItems = [
    {
      year: "850 d.C.",
      title: "Lenda de Kaldi",
      description:
        "Um pastor etíope descobre o efeito energizante do café ao observar suas cabras mais animadas após comerem os frutos vermelhos.",
      image: "/kaldi.jpg",
    },
    {
      year: "1000 d.C.",
      title: "Primeiros Cultivos",
      description: "Árabes começam a cultivar café no Iêmen e desenvolvem o processo de torrefação.",
      image: "iemen.jpg",
    },
    {
      year: "1500",
      title: "Primeiras Cafeterias",
      description: "Surgem as primeiras cafeterias em Meca, Cairo e Constantinopla.",
      image: "meca.jpeg",
    },
    {
      year: "1600",
      title: "Chegada à Europa",
      description: "O café chega à Itália e se espalha rapidamente pela Europa, criando uma revolução cultural.",
      image: "europe.jpg",
    },
    {
      year: "1727",
      title: "Café no Brasil",
      description:
        "Francisco de Melo Palheta traz as primeiras mudas de café para o Brasil, que se tornaria o maior produtor mundial.",
      image: "brazil.jpg",
    },
    {
      year: "1900",
      title: "Industrialização",
      description: "Desenvolvimento de métodos de produção em massa e café solúvel, democratizando o consumo.",
      image: "industrialization.jpg",
    },
    {
      year: "1970",
      title: "Revolução do Espresso",
      description: "Popularização das máquinas de espresso e surgimento de grandes redes de cafeterias.",
      image: "espresso.jpg",
    },
    {
      year: "2000",
      title: "Terceira Onda",
      description: "Movimento focado na qualidade, origem única e métodos artesanais de preparo.",
      image: "specialcoffee2.jpeg",
    },
  ]

  const nextTimelineItem = () => {
    setActiveTimelineItem((prev) => (prev === timelineItems.length - 1 ? 0 : prev + 1))
  }

  const prevTimelineItem = () => {
    setActiveTimelineItem((prev) => (prev === 0 ? timelineItems.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen pb-16">
      <PageHeader
        title="História do Café"
        description="Uma jornada através dos séculos: da lenda etíope às cafeterias modernas"
      />

      {/* Lenda de Kaldi */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4 text-gradient">
                A Lenda de Kaldi: O Descobridor do Café
              </h2>
              <p className="text-muted-foreground mb-4">
                Reza a lenda que por volta do ano 850 d.C., um jovem pastor etíope chamado Kaldi notou que suas cabras
                ficavam incomumente energéticas após comerem os frutos vermelhos de um arbusto específico. Curioso,
                Kaldi experimentou os frutos e sentiu a mesma energia revigorante.
              </p>
              <p className="text-muted-foreground mb-4">
                Ele levou os frutos a um monastério próximo, onde os monges inicialmente desaprovaram e jogaram os grãos
                no fogo. Um aroma delicioso se espalhou, levando-os a resgatar os grãos torrados, moê-los e dissolvê-los
                em água quente, criando a primeira xícara de café da história.
              </p>
              <p className="text-muted-foreground">
                Embora seja impossível verificar a veracidade desta história, ela ilustra perfeitamente como o café foi
                descoberto por suas propriedades estimulantes, que continuam a ser valorizadas até hoje.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-coffee-200 to-gold-200 dark:from-coffee-800 dark:to-coffee-700 rounded-3xl blur-2xl opacity-30" />
              <div className="relative glass-effect rounded-3xl p-2">
                <Image
                  src="/kaldi.jpg"
                  width={600}
                  height={400}
                  alt="Ilustração da lenda de Kaldi"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origem e Expansão */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 text-gradient text-center">
            Da Etiópia para o Mundo
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-serif font-medium mb-4">Origem na Etiópia</h3>
              <p className="text-muted-foreground mb-4">
                O café é nativo das florestas montanhosas da Etiópia, onde crescia selvagem e era consumido de diversas
                formas pelas tribos locais. Algumas tribos misturavam os frutos com gordura animal para criar uma pasta
                energética, enquanto outras fermentavam os frutos para produzir uma bebida alcoólica.
              </p>
              <p className="text-muted-foreground mb-6">
                A palavra "café" tem origem na região de Kaffa, na Etiópia, onde a planta crescia abundantemente. Até
                hoje, a Etiópia mantém uma rica cultura cafeeira e produz alguns dos grãos mais distintos do mundo.
              </p>

              <h3 className="text-xl md:text-2xl font-serif font-medium mb-4">Expansão para o Iêmen</h3>
              <p className="text-muted-foreground">
                Por volta do século XV, o café foi levado para o Iêmen, onde começou a ser cultivado sistematicamente. A
                cidade portuária de Mocha (Al-Makha) tornou-se o principal centro de comércio de café, dando origem ao
                termo "café mocha". Os árabes foram os primeiros a desenvolver o processo de torrefação e a preparar a
                bebida como conhecemos hoje.
              </p>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-coffee-200 to-gold-200 dark:from-coffee-800 dark:to-coffee-700 rounded-3xl blur-2xl opacity-30" />
              <div className="relative glass-effect rounded-3xl p-2">
                <Image
                  src="/etiopia.jpeg"
                  width={600}
                  height={400}
                  alt="Mapa antigo mostrando a Etiópia e o Iêmen"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Difusão pelo Mundo */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 text-gradient text-center">
            Difusão pelo Mundo
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-coffee-100 dark:bg-coffee-800 flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-coffee-700 dark:text-coffee-300" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Ásia</h3>
              <p className="text-muted-foreground">
                No século XVII, comerciantes holandeses contrabandearam mudas de café do Iêmen para Java, na Indonésia,
                estabelecendo as primeiras plantações fora do mundo árabe. Rapidamente, o cultivo se espalhou por outras
                ilhas indonésias e pela Índia, criando novas variedades e métodos de processamento.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-coffee-100 dark:bg-coffee-800 flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-coffee-700 dark:text-coffee-300" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Europa</h3>
              <p className="text-muted-foreground">
                Veneza foi a porta de entrada do café na Europa no século XVI. As cafeterias se espalharam rapidamente,
                tornando-se centros de debate intelectual e político. Em Paris, o Café Procope, fundado em 1686, atraía
                figuras como Voltaire e Rousseau. Na Inglaterra, as "penny universities" permitiam que qualquer pessoa
                participasse de discussões pelo preço de uma xícara de café.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-coffee-100 dark:bg-coffee-800 flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-coffee-700 dark:text-coffee-300" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-3">Américas</h3>
              <p className="text-muted-foreground">
                O café chegou às Américas no início do século XVIII. No Brasil, as primeiras mudas foram trazidas da
                Guiana Francesa em 1727 por Francisco de Melo Palheta. O clima e solo ideais permitiram que o Brasil se
                tornasse o maior produtor mundial. Na Colômbia, Costa Rica e outros países latino-americanos, o café
                transformou economias inteiras e definiu identidades culturais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Papel Cultural e Econômico */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 text-gradient text-center">
            O Papel Cultural e Econômico do Café
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-medium mb-4">Revolução Cultural</h3>
              <p className="text-muted-foreground mb-6">
                As cafeterias foram fundamentais para o Iluminismo e várias revoluções políticas. Elas ofereciam um
                espaço onde pessoas de diferentes classes sociais podiam se reunir e discutir ideias. A Revolução
                Americana foi planejada em cafeterias, e a Revolução Francesa ganhou força nos cafés parisienses.
              </p>
              <p className="text-muted-foreground">
                O café também transformou hábitos sociais. Antes de sua popularização, a bebida matinal comum na Europa
                era a cerveja ou o vinho. A mudança para o café aumentou a produtividade e contribuiu para a Revolução
                Industrial, com trabalhadores mais alertas e menos embriagados.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-serif font-medium mb-4">Impacto Econômico</h3>
              <p className="text-muted-foreground mb-6">
                O café é a segunda commodity mais comercializada no mundo, atrás apenas do petróleo. Mais de 25 milhões
                de famílias dependem do cultivo de café para sua subsistência, principalmente em países em
                desenvolvimento.
              </p>
              <p className="text-muted-foreground">
                Historicamente, o café moldou economias inteiras e influenciou políticas coloniais. Hoje, movimentos
                como o comércio justo buscam garantir que os produtores recebam uma parte mais equitativa dos lucros,
                enquanto a crescente demanda por cafés especiais está transformando novamente o mercado global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Linha do Tempo Interativa */}
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 text-gradient text-center">
            Linha do Tempo do Café
          </h2>

          <div className="relative glass-effect rounded-xl p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
              <Button variant="outline" size="icon" className="rounded-full" onClick={prevTimelineItem}>
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <h3 className="text-xl md:text-2xl font-serif font-medium text-gradient">
                {timelineItems[activeTimelineItem].year}
              </h3>

              <Button variant="outline" size="icon" className="rounded-full" onClick={nextTimelineItem}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-lg md:text-xl font-medium mb-3">{timelineItems[activeTimelineItem].title}</h4>
                <p className="text-muted-foreground">{timelineItems[activeTimelineItem].description}</p>
              </div>

              <div className="relative w-full h-[500px]">
                <Image
                  src={timelineItems[activeTimelineItem].image || "/placeholder.svg"}
                  fill
                  alt={timelineItems[activeTimelineItem].title}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="mt-8 relative">
              <div className="h-1 bg-muted-foreground/20 rounded-full">
                <div
                  className="h-1 bg-gradient-to-r from-coffee-700 to-coffee-500 dark:from-coffee-300 dark:to-coffee-500 rounded-full transition-all duration-300"
                  style={{ width: `${(activeTimelineItem / (timelineItems.length - 1)) * 100}%` }}
                />
              </div>

              <div className="flex justify-between mt-4">
                {timelineItems.map((item, index) => (
                  <button
                    key={index}
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      index === activeTimelineItem
                        ? "bg-coffee-700 dark:bg-coffee-300 text-white dark:text-coffee-900"
                        : "bg-muted-foreground/20 hover:bg-muted-foreground/40"
                    }`}
                    onClick={() => setActiveTimelineItem(index)}
                  >
                    <span className="sr-only">{item.year}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
