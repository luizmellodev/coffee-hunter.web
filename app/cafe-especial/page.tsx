import Image from "next/image"
import { Award, TrendingUp, Globe, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { InfoCard } from "@/components/info-card"

export default function CafeEspecialPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="O que é Café Especial?"
        description="Descubra as características que tornam um café verdadeiramente especial e como identificar qualidade excepcional."
        icon={<Award className="h-6 w-6 md:h-8 md:w-8 text-coffee-600 dark:text-coffee-400" />}
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                Definição e Características
              </h2>
              <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
                <p>
                  Cafés especiais são grãos de qualidade superior que recebem pontuação acima de 80 pontos na escala de
                  100 da Specialty Coffee Association (SCA). Esta avaliação considera aspectos como aroma, sabor,
                  acidez, corpo, equilíbrio e ausência de defeitos.
                </p>
                <p>
                  O que diferencia um café especial não é apenas a pontuação, mas toda a cadeia de cuidados: desde o
                  cultivo em microclimas específicos, colheita seletiva, processamento cuidadoso, até a torra artesanal
                  que revela o potencial único de cada lote.
                </p>
                <p>
                  Cada café especial conta uma história sobre seu terroir - a combinação única de solo, clima, altitude
                  e variedade que resulta em perfis sensoriais complexos e distintivos.
                </p>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-coffee-200 to-gold-200 dark:from-coffee-800 dark:to-coffee-700 rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Grãos de café especial"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <InfoCard
              title="Pontuação SCA"
              description="Avaliação rigorosa que considera 10 critérios sensoriais, com pontuação mínima de 80 pontos."
              icon={<TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Rastreabilidade"
              description="Origem conhecida e documentada, permitindo rastrear desde a fazenda até a xícara."
              icon={<Globe className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
            <InfoCard
              title="Sustentabilidade"
              description="Práticas ambientalmente responsáveis e socialmente justas na produção."
              icon={<span className="text-xl md:text-2xl">🌱</span>}
            />
            <InfoCard
              title="Comunidade"
              description="Valorização do trabalho dos produtores e fortalecimento das comunidades rurais."
              icon={<Users className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />}
            />
          </div>

          <div className="section-card p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Escala de Pontuação SCA</h3>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4 className="font-bold text-foreground mb-3 md:mb-4 text-sm md:text-base">Critérios de Avaliação:</h4>
                <div className="space-y-2 md:space-y-3">
                  {[
                    { criteria: "Aroma", points: "10 pontos" },
                    { criteria: "Sabor", points: "15 pontos" },
                    { criteria: "Acidez", points: "15 pontos" },
                    { criteria: "Corpo", points: "15 pontos" },
                    { criteria: "Equilíbrio", points: "15 pontos" },
                    { criteria: "Finalização", points: "10 pontos" },
                    { criteria: "Doçura", points: "10 pontos" },
                    { criteria: "Uniformidade", points: "10 pontos" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 md:p-3 info-box rounded text-sm md:text-base"
                    >
                      <span className="text-foreground">{item.criteria}</span>
                      <span className="font-medium text-coffee-600 dark:text-coffee-400">{item.points}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-3 md:mb-4 text-sm md:text-base">
                  Classificação por Pontos:
                </h4>
                <div className="space-y-2 md:space-y-3">
                  <div className="p-3 md:p-4 bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 rounded text-sm md:text-base">
                    <div className="font-bold text-green-800 dark:text-green-300">90-100 pontos</div>
                    <div className="text-green-700 dark:text-green-400">Excepcional - Cafés raros e únicos</div>
                  </div>
                  <div className="p-3 md:p-4 bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded text-sm md:text-base">
                    <div className="font-bold text-blue-800 dark:text-blue-300">85-89 pontos</div>
                    <div className="text-blue-700 dark:text-blue-400">Excelente - Cafés premium</div>
                  </div>
                  <div className="p-3 md:p-4 bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 rounded text-sm md:text-base">
                    <div className="font-bold text-yellow-800 dark:text-yellow-300">80-84 pontos</div>
                    <div className="text-yellow-700 dark:text-yellow-400">Muito Bom - Cafés especiais</div>
                  </div>
                  <div className="p-3 md:p-4 bg-gray-100 dark:bg-gray-700 border-l-4 border-gray-400 dark:border-gray-500 rounded text-sm md:text-base">
                    <div className="font-bold text-gray-700 dark:text-gray-300">Abaixo de 80</div>
                    <div className="text-gray-600 dark:text-gray-400">Café comercial/commodity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Diferenças entre Café Especial e Commodity
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-coffee-600 dark:text-coffee-400 mb-3 md:mb-4">
                ☕ Café Especial
              </h3>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                <li>• Pontuação acima de 80 pontos SCA</li>
                <li>• Origem rastreável e conhecida</li>
                <li>• Colheita seletiva manual</li>
                <li>• Processamento cuidadoso</li>
                <li>• Torra artesanal personalizada</li>
                <li>• Perfil sensorial complexo</li>
                <li>• Preço premium justo</li>
                <li>• Sustentabilidade social e ambiental</li>
              </ul>
            </div>
            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                ☕ Café Commodity
              </h3>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
                <li>• Pontuação abaixo de 80 pontos</li>
                <li>• Origem genérica ou misturada</li>
                <li>• Colheita mecanizada em massa</li>
                <li>• Processamento industrial</li>
                <li>• Torra padronizada</li>
                <li>• Sabor uniforme e simples</li>
                <li>• Preço baseado na bolsa de valores</li>
                <li>• Foco na quantidade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
