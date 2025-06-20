import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, Trophy, Coffee, Users, Star, Award, MapPin, Link } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Eventos de Café | Coffee Hunter",
  description: "Guia completo dos principais eventos e campeonatos de café no Brasil.",
}

const mainEvents = [
  {
    title: "Semana Internacional do Café (SIC)",
    period: "Anualmente em novembro",
    location: "Expominas - Belo Horizonte, MG",
    description: "O maior evento de café do Brasil e um dos mais importantes da América Latina. A SIC reúne toda a cadeia produtiva do café, desde produtores até baristas e consumidores finais. O evento conta com uma extensa programação que inclui workshops, palestras, competições, rodadas de negócios e uma grande feira com expositores nacionais e internacionais.",
    highlights: [
      "Feira de Negócios com mais de 100 expositores",
      "Competições de barismo e qualidade de café",
      "Palestras com especialistas internacionais",
      "Cupping sessions e workshops práticos"
    ],
    images: [
      {
        src: "/sic1.jpg",
        alt: "Feira de negócios na Semana Internacional do Café"
      },
      {
        src: "/sic2.jpg",
        alt: "Workshop de café durante o evento"
      }
    ],
    website: "https://semanainternacionaldocafe.com.br",
    icon: Coffee,
  },
  {
    title: "Campeonato Brasileiro de Barista",
    period: "Anualmente, geralmente no primeiro semestre",
    location: "Diferentes cidades",
    description: "Principal competição de barismo do Brasil, organizada pela SCA Brazil (Specialty Coffee Association). Os competidores são avaliados em diversos aspectos do preparo de café, incluindo espresso, bebidas com leite e bebidas autorais. O vencedor representa o Brasil no World Barista Championship.",
    highlights: [
      "Competição técnica de alto nível",
      "Apresentações de 15 minutos por competidor",
      "Avaliação por juízes certificados internacionalmente",
      "Networking entre profissionais do setor"
    ],
    images: [
      {
        src: "/cbb1.webp",
        alt: "Barista competindo no campeonato brasileiro"
      },
      {
        src: "/cbb2.jpg",
        alt: "Apresentação de bebidas no campeonato"
      }
    ],
    website: "https://bsca.com.br/page/resultados-campeonatos",
    icon: Trophy,
  },
  {
    title: "Cup of Excellence",
    period: "Realizado anualmente",
    location: "Diferentes regiões produtoras do Brasil",
    description: "O mais prestigiado concurso de qualidade de café do mundo. No Brasil, é organizado pela BSCA (Brazilian Specialty Coffee Association). Os cafés são avaliados por um júri internacional e os vencedores são leiloados para compradores do mundo todo, frequentemente alcançando preços recordes.",
    highlights: [
      "Avaliação rigorosa por Q-Graders internacionais",
      "Leilão internacional dos cafés vencedores",
      "Reconhecimento mundial para produtores brasileiros",
      "Promoção dos melhores cafés do Brasil"
    ],
    images: [
      {
        src: "/cupofexcellence.webp",
        alt: "Avaliação de cafés no Cup of Excellence"
      }
    ],
    website: "https://allianceforcoffeeexcellence.org/brazil-2025/",
    icon: Award,
  },
  {
    title: "Feira Internacional de Cafés Especiais do Norte Pioneiro do Paraná (FICAFÉ)",
    period: "Realizado anualmente",
    location: "Jacarezinho, PR",
    description: "Um dos principais eventos do setor cafeeiro no Paraná, focado em cafés especiais. A feira reúne produtores, compradores, torrefadores e entusiastas, com uma programação que inclui palestras, workshops, competições e rodadas de negócios.",
    highlights: [
      "Exposição de cafés especiais da região",
      "Concursos de qualidade",
      "Palestras técnicas",
      "Encontro entre produtores e compradores"
    ],
    images: [
      {
        src: "/ficafe.webp",
        alt: "Exposição na FICAFÉ"
      }
    ],
    icon: Star,
    website: "https://ficafe.com.br/",
  }
]

export default function EventosDeCafe() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">

      <PageHeader
        title="Eventos de Café no Brasil"
        description="Conheça os mais importantes eventos e campeonatos do universo do café brasileiro. De competições nacionais a feiras internacionais, descubra onde a comunidade cafeeira se reúne para celebrar, aprender e evoluir."
        icon={<Trophy className="h-16 w-16 text-coffee-600 dark:text-coffee-400" />}
      />

      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {mainEvents.map((event) => (
            <div
              key={event.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-coffee-100 p-3 dark:bg-coffee-900">
                  <event.icon className="h-6 w-6 text-coffee-600 dark:text-coffee-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-neutral-950 dark:text-white">
                    {event.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-3">
                    <div className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
                      <Calendar className="h-4 w-4" />
                      <span>{event.period}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
                {event.description}
              </p>

              <div className="mt-4">
                <h4 className="font-display text-sm font-semibold text-neutral-950 dark:text-white">
                  Destaques
                </h4>
                <ul className="mt-2 grid gap-2">
                  {event.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <div className="h-1 w-1 rounded-full bg-coffee-600 dark:bg-coffee-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {event.images?.map((image) => (
                  <div
                    key={image.alt}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-800"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {event.website && (
                <a
                  href={event.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-coffee-600 hover:text-coffee-700 dark:text-coffee-400 dark:hover:text-coffee-300"
                >
                  <Link className="h-4 w-4" />
                  Visitar site oficial
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}