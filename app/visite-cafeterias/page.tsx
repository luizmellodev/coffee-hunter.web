import Image from "next/image"
import { MapPin, Coffee, ExternalLink, Instagram, TrendingUp } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VisiteCafeteriasPage() {
  const influencers = [
    {
      name: "Café com Julia",
      handle: "@cafecomjulia",
      platform: "Instagram",
      followers: "125K",
      description: "Explorando cafeterias especiais pelo Brasil. Dicas, reviews e muito café!",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Pedro Barista",
      handle: "@pedrobarista",
      platform: "TikTok",
      followers: "450K",
      description: "Barista campeão compartilhando técnicas, receitas e as melhores cafeterias.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Café nas Alturas",
      handle: "@cafenasalturas",
      platform: "Instagram",
      followers: "89K",
      description: "Cafeterias com vistas incríveis e cafés de altitude. Experiências únicas!",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Roteiro do Café",
      handle: "@roteirodocafe",
      platform: "TikTok",
      followers: "320K",
      description: "Mapeando as melhores cafeterias em cada cidade. Guias completos e reviews honestos.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Café e Cultura",
      handle: "@cafeecultura",
      platform: "Instagram",
      followers: "75K",
      description: "Cafeterias com programação cultural, arte e boa música. Experiência completa!",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Café da Semana",
      handle: "@cafesemana",
      platform: "TikTok",
      followers: "210K",
      description: "Toda semana uma nova cafeteria especial. Reviews rápidos e dicas imperdíveis.",
      image: "/placeholder.svg?height=100&width=100",
    },
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
              <h2 className="text-3xl font-bold text-[#884A39] mb-6">Nosso App: CaféMap</h2>
              <div className="space-y-4 text-[#884A39]/80">
                <p>
                  O CaféMap é o seu guia definitivo para descobrir cafeterias especiais. Com uma interface intuitiva e
                  informações detalhadas, você encontra facilmente os melhores lugares para apreciar café de qualidade.
                </p>
                <p>
                  Nosso app oferece avaliações detalhadas, informações sobre métodos de preparo disponíveis, tipos de
                  grãos servidos, e até mesmo horários de menor movimento para uma experiência mais tranquila.
                </p>
                <p>
                  Conecte-se com outros amantes de café, compartilhe suas experiências e descubra novos sabores através
                  da nossa comunidade ativa de entusiastas.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-bold text-[#884A39]">Funcionalidades:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80">Mapa interativo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80">Avaliações detalhadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80">Filtros por método</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80">Check-ins e reviews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80">Rotas personalizadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#C38154] rounded-full"></div>
                    <span className="text-[#884A39]/80">Comunidade ativa</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#C38154] hover:bg-[#884A39] text-white px-8 py-6 rounded-full">
                  <Coffee className="mr-2 h-5 w-5" />
                  Baixar para iOS
                </Button>
                <Button
                  variant="outline"
                  className="border-[#C38154] text-[#884A39] hover:bg-[#F9E0BB]/30 px-8 py-6 rounded-full"
                >
                  <Coffee className="mr-2 h-5 w-5" />
                  Baixar para Android
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=500&width=400"
                width={400}
                height={500}
                alt="CaféMap App Interface"
                className="rounded-2xl shadow-lg mx-auto"
              />
            </div>
          </div>

          {/* Influencers Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#884A39] mb-4">Influencers do Café</h2>
              <p className="text-[#884A39]/80 max-w-2xl mx-auto">
                Siga estes criadores de conteúdo que compartilham as melhores experiências em cafeterias especiais pelo
                Brasil e pelo mundo.
              </p>
              <div className="w-20 h-1 bg-[#C38154] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {influencers.map((influencer, index) => (
                <Card key={index} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
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
                        <h3 className="font-bold text-[#884A39] mb-1">{influencer.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-[#884A39]/80">
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
                    <p className="text-sm text-[#884A39]/80 mb-4">{influencer.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-[#C38154] text-[#884A39] hover:bg-[#F9E0BB]/30"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Seguir no {influencer.platform}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-[#884A39] mb-8 text-center">Por que usar o CaféMap?</h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F9E0BB] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-[#C38154]" />
                </div>
                <h4 className="text-xl font-bold text-[#884A39] mb-3">Localização Precisa</h4>
                <p className="text-[#884A39]/80">
                  Encontre cafeterias especiais próximas a você com informações detalhadas sobre localização, horários e
                  contato.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#F9E0BB] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-[#C38154]" />
                </div>
                <h4 className="text-xl font-bold text-[#884A39] mb-3">Qualidade Garantida</h4>
                <p className="text-[#884A39]/80">
                  Todas as cafeterias são cuidadosamente selecionadas e avaliadas por nossa equipe e comunidade de
                  especialistas.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#F9E0BB] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h4 className="text-xl font-bold text-[#884A39] mb-3">Comunidade Ativa</h4>
                <p className="text-[#884A39]/80">
                  Conecte-se com outros amantes de café, compartilhe experiências e descubra novos lugares através da
                  nossa comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
