'use client'

import Image from "next/image"
import { MapPin, Coffee, ExternalLink, Instagram, TrendingUp } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { link } from "fs"
import LottieAnimation from "@/components/LottieAnimation"

export default function VisiteCafeteriasPage() {
  const influencers = [
    {
      name: "Não sou Barista",
      handle: "@naosoubarista",
      platform: "YouTube",
      followers: "54 mil",
      description: "Canal no YouTube com vídeos tutoriais, reviews de cafeteiras, moedores e dicas para amantes de café.",
      image: "/naosoubarista.jpg",
      link: "https://www.youtube.com/@naosoubarista/",
    },
    {
      name: "James Hoffmann",
      handle: "@jimseven",
      platform: "YouTube",
      followers: "2.3 milhões",
      description: "Barista campeão mundial compartilhando técnicas, receitas e análises de equipamentos de café.",
      image: "/james.jpg",
      link: "https://www.youtube.com/@jameshoffmann",
    },
    {
      name: "MorganDrinksCoffee",
      handle: "@cafenasalturas",
      platform: "YouTube",
      followers: "1.4 milhões",
      description: "Barista campeã mundial e especialista em café, explorando métodos de preparo, equipamentos e dicas práticas.",
      image: "/morgan.jpg",
      link: "https://www.youtube.com/@morgandrinkscoffee",
    }
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Visite Cafeterias"
        description="Descubra as melhores cafeterias especiais através do nosso app e siga influencers que compartilham experiências incríveis."
        icon={<MapPin className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          {/* App Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Em breve nosso App!</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  O Coffee Hunter será o seu guia definitivo para descobrir cafeterias especiais. Com uma interface intuitiva e
                  informações detalhadas, você encontra facilmente os melhores lugares para apreciar café de qualidade.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold text-[#884A39]/80 dark:text-amber-100/90">Funcionalidades:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80 dark:text-amber-100/90">Mapa interativo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80 dark:text-amber-100/90">Avaliações detalhadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80 dark:text-amber-100/90">Filtros por método</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80 dark:text-amber-100/90">Check-ins e reviews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80 dark:text-amber-100/90">Rotas personalizadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80 dark:text-amber-100/90">Comunidade ativa</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div className="bg-[#F9E0BB] border-l-4 border-[#C38154] p-4 rounded-r-lg flex items-center space-x-3">
                  <Coffee className="h-5 w-5 text-[#884A39]" />
                  <div>
                    <p className="text-[#884A39] font-medium">Em desenvolvimento!</p>
                    <p className="text-[#884A39]/80 text-sm">Estamos trabalhando bastante para trazer o app em breve.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-10" />
              <LottieAnimation animation="pccafe"></LottieAnimation>
            </div>
          </div>

          {/* Influencers Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Influenciadores do Café</h2>
              <p className="text-[#884A39]/80 dark:text-amber-100/90 max-w-2xl mx-auto">
                Siga estes criadores de conteúdo que compartilham as melhores experiências em cafeterias especiais pelo
                Brasil e pelo mundo.
              </p>
              <p className="text-black dark:text-white mt-6">
              Em breve, mais influenciadores serão adicionados!
              </p>
              <div className="w-20 h-1 bg-[#C38154] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {influencers.map((influencer, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Image
                        src={influencer.image || "/placeholder.svg"}
                        width={60}
                        height={60}
                        alt={influencer.name}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-[#884A39] dark:text-amber-300 mb-1">{influencer.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-[#884A39]/80 dark:text-amber-100/90">
                          {influencer.platform === "Instagram" ? (
                            <Instagram className="h-4 w-4" />
                          ) : (
                            <TrendingUp className="h-4 w-4" />
                          )}
                          <span>{influencer.handle}</span>
                        </div>
                        <div className="text-xs text-[#C38154] font-medium mt-1">{influencer.followers} seguidores</div>
                      </div>
                    </div>
                    <p className="text-sm text-[#884A39]/80 dark:text-amber-100/90 mb-4">{influencer.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#C38154] text-[#884A39] dark:text-amber-300 hover:bg-[#F9E0BB]/30"
                      onClick={() => window.open(influencer.link, '_blank')}
                    >
                      <ExternalLink className="text-[#884A39] dark:text-amber-300 mr-2 h-4 w-4" />
                      Seguir no {influencer.platform}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Call to Action Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Quer ser um Influencer?</h2>
            <p className="text-[#884A39]/80 dark:text-amber-100/90 mb-6">
              Se você é um criador de conteúdo apaixonado por café e quer aparecer aqui, entre em contato conosco!
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-[#C38154] text-[#884A39] dark:text-amber-300 hover:bg-[#F9E0BB]/30"
              onClick={() => window.open("mailto:contato@luizmello.dev", "_blank")}
            >
              Entre em contato
            </Button>
            </div>
        </div>
      </section>
    </div>
  )
}
