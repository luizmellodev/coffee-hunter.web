import { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Calendar, Coffee, MapPin, Users, Sparkles, Link as LinkIcon, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Eventos de Café | Coffee Hunter",
  description: "Guia completo dos principais eventos e festivais do universo do café brasileiro. De feiras internacionais a festivais locais, descubra onde a comunidade cafeeira se reúne para celebrar, aprender e evoluir.",
}

interface Event {
  name: string
  date: string
  location: string
  venue?: string
  description: string
  highlights?: string[]
  audience?: string[]
  organizer?: string
  importance?: string
  website?: string
}

interface MonthGroup {
  month: string
  events: Event[]
}

const calendarEvents: MonthGroup[] = [
  { 
    month: "Abril",
    events: [
      {
        name: "Encafé (Encontro Nacional do Café)",
        date: "23 a 25 de abril",
        location: "Campinas, SP",
        venue: "Local a confirmar",
        description: "Principal evento corporativo da cadeia cafeeira no Brasil, organizado pela ABIC.",
        highlights: [
          "Feira de negócios",
          "Palestras sobre tendências, sustentabilidade e exportação",
          "Campeonato de blends",
          "Olimpíada de qualidade"
        ],
        audience: ["Profissionais do setor industrial", "Profissionais do setor comercial"],
        organizer: "ABIC (Associação Brasileira da Indústria de Café)",
        importance: "É o principal evento corporativo da cadeia cafeeira no Brasil",
        website: "https://encafe.com.br/"
      }
    ]
  },
  { 
    month: "Junho",
    events: [
      {
        name: "São Paulo Coffee Festival",
        date: "27 a 29 de junho",
        location: "São Paulo, SP",
        venue: "Bienal do Ibirapuera",
        description: "O maior evento de cultura do café no Brasil, inspirado no formato do London/New York Coffee Festival.",
        highlights: [
          "Degustações ilimitadas",
          "Copa Barista (campeonato de baristas)",
          "Workshops de métodos (V60, Aeropress, espresso)",
          "Música ao vivo, gastronomia e arte"
        ],
        audience: ["Apreciadores", "Profissionais", "Baristas", "Entusiastas"],
        importance: "É o maior evento de cultura do café no Brasil",
        website: "https://saopaulocoffeefestival.com.br"
      }
    ]
  },
  { 
    month: "Julho",
    events: [
      {
        name: "Coffee Dinner & Summit",
        date: "2 a 4 de julho",
        location: "Campinas, SP",
        description: "Evento voltado ao alto escalão do café brasileiro e investidores internacionais.",
        highlights: [
          "ESG no setor cafeeiro",
          "Exportações",
          "Futuro do café",
          "Networking de alto nível"
        ],
        audience: ["Profissionais", "Líderes do setor", "Investidores"],
        importance: "Encontro estratégico para líderes e tomadores de decisão do setor",
        website: "https://coffeedinner.com.br"
      },
      {
        name: "Caféstival POA",
        date: "25 a 27 de julho",
        location: "Porto Alegre, RS",
        venue: "BarraShoppingSul",
        description: "O maior festival de cafés especiais do Sul do Brasil, celebrando a cultura do café especial na capital gaúcha.",
        highlights: [
          "Degustações de cafés especiais",
          "Workshops e palestras",
          "Exposição de equipamentos",
          "Apresentações de baristas",
          "Área gastronômica"
        ],
        audience: ["Apreciadores", "Profissionais", "Baristas", "Entusiastas"],
        importance: "Principal evento de café do Sul do Brasil",
        website: "https://www.instagram.com/cafestival_poa/"
      },
      {
        name: "Coffee LATAM",
        date: "29 de julho",
        location: "Campinas, SP",
        description: "Principal evento de negócios do setor cafeeiro na América Latina.",
        highlights: [
          "Mercado LATAM",
          "Oportunidades de exportação",
          "Networking internacional"
        ],
        audience: ["Exportadores", "Produtores", "Investidores"],
        importance: "Principal plataforma de negócios para o mercado latino-americano de café",
        website: "https://informaconnect.com/coffee-latam/br/"
      }
    ]
  },
  { 
    month: "Outubro",
    events: [
      {
        name: "FICAFÉ",
        date: "21 a 23 de outubro",
        location: "Jacarezinho, PR",
        venue: "Parque de Exposições Dr. Alício Dias dos Reis",
        description: "Feira Internacional de Cafés Especiais do Norte Pioneiro do Paraná, um dos principais eventos do setor cafeeiro no Paraná.",
        highlights: [
          "Exposição de cafés especiais da região",
          "Concursos de qualidade",
          "Palestras técnicas",
          "Rodadas de negócios",
          "Encontro entre produtores e compradores"
        ],
        audience: ["Produtores", "Compradores", "Torrefadores", "Exportadores", "Entusiastas"],
        organizer: "ACENPP - Associação dos Cafés Especiais do Norte Pioneiro do Paraná",
        importance: "Principal evento de cafés especiais do Paraná",
        website: "https://ficafe.com.br"
      }
    ]
  },
  { 
    month: "Novembro",
    events: [
      {
        name: "Semana Internacional do Café (SIC)",
        date: "Data a confirmar",
        location: "Belo Horizonte, MG",
        venue: "Expominas",
        description: "O maior evento de café da América Latina, reunindo toda a cadeia produtiva.",
        highlights: [
          "Feira internacional",
          "Palestras e workshops",
          "Degustações",
          "Campeonatos",
          "Encontro de produtores, torrefações e cafeterias"
        ],
        audience: ["Profissionais", "Apreciadores", "Produtores", "Torrefadores", "Baristas"],
        organizer: "SEBRAE, FAEMG e parceiros",
        importance: "Maior e mais completo evento de café da América Latina",
        website: "https://semanainternacionaldocafe.com.br"
      }
    ]
  }
]

export default function EventosDeCafe() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <PageHeader
        title="Eventos de Café no Brasil"
        description="Conheça os mais importantes eventos e festivais do universo do café brasileiro. De feiras internacionais a festivais locais, descubra onde a comunidade cafeeira se reúne para celebrar, aprender e evoluir."
        icon={<Coffee className="h-16 w-16 text-coffee-600 dark:text-coffee-400" />}
      />

      <div className="container py-8">
        <div className="relative mb-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-neutral-200 dark:bg-neutral-800 md:left-1/2" />

          <div className="relative">
            {calendarEvents.map((monthGroup, monthIndex) => (
              <div key={monthGroup.month} className="mb-12 last:mb-0">
                {/* Month marker */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-coffee-600 text-sm font-bold text-white dark:border-neutral-950 dark:bg-coffee-500">
                    {monthGroup.month.slice(0, 3)}
                  </div>
                </div>

                {/* Events */}
                <div className="mt-8">
                  {monthGroup.events.map((event, eventIndex) => (
                    <div
                      key={event.name}
                      className={`relative mb-8 md:w-1/2 ${
                        monthIndex % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
                      }`}
                    >
                      {/* Event card */}
                      <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all hover:border-coffee-200 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-coffee-800">
                        <div className="absolute inset-0 bg-gradient-to-r from-coffee-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-coffee-950" />
                        
                        <div className="relative p-6">
                          {/* Date badge */}
                          <div className="inline-flex items-center rounded-full bg-coffee-100 px-3 py-1 text-sm font-medium text-coffee-900 dark:bg-coffee-900 dark:text-coffee-100">
                            <Calendar className="mr-1.5 h-4 w-4" />
                            {event.date}
                          </div>

                          {/* Event title */}
                          <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950 dark:text-white">
                            {event.name}
                          </h3>

                          {/* Location */}
                          <div className="mt-2 flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                            <MapPin className="h-4 w-4" />
                            <span>{event.location}</span>
                            {event.venue && (
                              <span className="before:mx-1.5 before:content-['•']">
                                {event.venue}
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                            {event.description}
                          </p>

                          {/* Tags */}
                          {event.audience && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {event.audience.map((type) => (
                                <span
                                  key={type}
                                  className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                                >
                                  <Users className="mr-1 h-3 w-3" />
                                  {type}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Highlights */}
                          {event.highlights && (
                            <div className="mt-4 space-y-2">
                              <h4 className="flex items-center gap-1.5 text-sm font-medium text-neutral-950 dark:text-white">
                                <Sparkles className="h-4 w-4 text-coffee-600 dark:text-coffee-400" />
                                Destaques
                              </h4>
                              <ul className="grid gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                                {event.highlights.map((highlight) => (
                                  <li key={highlight} className="flex items-start gap-2">
                                    <ArrowRight className="mt-1 h-3 w-3 flex-none text-coffee-600 dark:text-coffee-400" />
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Website link */}
                          {event.website && (
                            <a
                              href={event.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-coffee-600 transition-colors hover:text-coffee-700 dark:text-coffee-400 dark:hover:text-coffee-300"
                            >
                              <LinkIcon className="h-4 w-4" />
                              Visitar site oficial
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}