import Image from "next/image";
import { Award, TrendingUp, Globe, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { InfoCard } from "@/components/info-card";

export default function CafeEspecialPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="O que é Café Especial?"
        description="Descubra as características que tornam um café verdadeiramente especial e como identificar qualidade excepcional."
        icon={<Award className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16 ">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white dark:text-white mb-6">
                Definição e Características
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white dark:text-white">
                <p>
                  Cafés especiais são grãos de qualidade superior que recebem
                  pontuação acima de 80 pontos na escala de 100 da Specialty
                  Coffee Association (SCA). Esta avaliação considera aspectos
                  como aroma, sabor, acidez, corpo, equilíbrio e ausência de
                  defeitos.
                </p>
                <p>
                  O que diferencia um café especial não é apenas a pontuação,
                  mas toda a cadeia de cuidados: desde o cultivo em microclimas
                  específicos, colheita seletiva, processamento cuidadoso, até a
                  torra artesanal que revela o potencial único de cada lote.
                </p>
                <p>
                  Cada café especial conta uma história sobre seu terroir - a
                  combinação única de solo, clima, altitude e variedade que
                  resulta em perfis sensoriais complexos e distintivos.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Grãos de café especial"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Pontuação SCA"
              description="Avaliação rigorosa que considera 10 critérios sensoriais, com pontuação mínima de 80 pontos."
              icon={<TrendingUp className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Rastreabilidade"
              description="Origem conhecida e documentada, permitindo rastrear desde a fazenda até a xícara."
              icon={<Globe className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Sustentabilidade"
              description="Práticas ambientalmente responsáveis e socialmente justas na produção."
              icon={<span className="text-2xl">🌱</span>}
            />
            <InfoCard
              title="Comunidade"
              description="Valorização do trabalho dos produtores e fortalecimento das comunidades rurais."
              icon={<Users className="h-6 w-6 text-[#C38154]" />}
            />
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-6">
              Escala de Pontuação SCA
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-[#884A39] dark:text-white mb-4">
                  Critérios de Avaliação:
                </h4>
                <div className="space-y-3">
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
                      className="flex justify-between items-center p-2 bg-[#F9E0BB]/30 rounded"
                    >
                      <span className="text-[#884A39] dark:text-white">
                        {item.criteria}
                      </span>
                      <span className="font-medium text-[#C38154]">
                        {item.points}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-[#884A39] dark:text-white mb-4">
                  Classificação por Pontos:
                </h4>
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                    <div className="font-bold text-green-800">
                      90-100 pontos
                    </div>
                    <div className="text-green-700">
                      Excepcional - Cafés raros e únicos
                    </div>
                  </div>
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                    <div className="font-bold text-blue-800">85-89 pontos</div>
                    <div className="text-blue-700">
                      Excelente - Cafés premium
                    </div>
                  </div>
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                    <div className="font-bold text-yellow-800">
                      80-84 pontos
                    </div>
                    <div className="text-yellow-700">
                      Muito Bom - Cafés especiais
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 border-l-4 border-gray-400 rounded">
                    <div className="font-bold text-gray-700">Abaixo de 80</div>
                    <div className="text-gray-600">
                      Café comercial/commodity
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F9E0BB]/20">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-8 text-center">
            Diferenças entre Café Especial e Commodity
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#C38154] mb-4">
                ☕ Café Especial
              </h3>
              <ul className="space-y-2 text-[#884A39] dark:text-white dark:text-white">
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
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-600 mb-4">
                ☕ Café Commodity
              </h3>
              <ul className="space-y-2 text-gray-600">
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
  );
}
