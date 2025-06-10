import Image from "next/image";
import { Mountain, Thermometer, Cloud, Leaf } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { InfoCard } from "@/components/info-card";

export default function TerroirPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Terroir do Café"
        description="Entenda como geografia, clima e solo se combinam para criar perfis sensoriais únicos em cada região cafeeira."
        icon={<Mountain className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                A Personalidade do Lugar
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  Terroir é um conceito francês que descreve como o ambiente -
                  solo, clima, altitude, topografia - influencia o sabor de
                  produtos agrícolas. No café, o terroir é fundamental para
                  compreender por que cafés de diferentes regiões possuem
                  características sensoriais distintas.
                </p>
                <p>
                  Cada região cafeeira do mundo possui um terroir único que se
                  expressa no perfil sensorial dos grãos. Fatores como altitude,
                  temperatura, precipitação, tipo de solo e microclima criam
                  condições específicas que influenciam diretamente a formação
                  de açúcares, ácidos e compostos aromáticos no café.
                </p>
                <p>
                  Compreender o terroir permite aos apreciadores de café
                  especial identificar e valorizar as características únicas de
                  cada origem, criando uma conexão entre o lugar e o sabor na
                  xícara.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Paisagem de plantação de café em montanha"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Altitude"
              description="Altitudes elevadas (1000-2000m) criam stress que concentra açúcares e desenvolve acidez complexa."
              icon={<Mountain className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Temperatura"
              description="Variações térmicas diárias influenciam o desenvolvimento dos compostos aromáticos."
              icon={<Thermometer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Precipitação"
              description="Padrões de chuva afetam o crescimento e a concentração de sabores no fruto."
              icon={<Cloud className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Solo"
              description="Composição mineral do solo contribui para o perfil nutricional e sensorial do café."
              icon={<Leaf className="h-6 w-6 text-[#C38154]" />}
            />
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Principais Regiões e Seus Terroirs
            </h3>

            <div className="space-y-8">
              <div className="border-l-4 border-green-600 pl-6">
                <h4 className="text-xl font-bold text-green-800 mb-4">
                  🇪🇹 Etiópia - Berço do Café
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Yirgacheffe
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      <strong>Altitude:</strong> 1700-2200m
                      <br />
                      <strong>Solo:</strong> Vulcânico rico
                      <br />
                      <strong>Perfil:</strong> Floral, chá, limão, bergamota
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Sidamo
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      <strong>Altitude:</strong> 1400-2200m
                      <br />
                      <strong>Solo:</strong> Vulcânico e sedimentar
                      <br />
                      <strong>Perfil:</strong> Frutado, vinho, complexo
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Harrar
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      <strong>Altitude:</strong> 1500-2100m
                      <br />
                      <strong>Solo:</strong> Calcário e argila
                      <br />
                      <strong>Perfil:</strong> Vinho, frutas vermelhas, terroso
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h4 className="text-xl font-bold text-red-800 mb-4">
                  🇰🇪 Quênia - Acidez Intensa
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Características do Terroir
                    </h5>
                    <ul className="text-sm text-[#884A39] dark:text-white dark:text-white space-y-1">
                      <li>• Altitude: 1400-2100m</li>
                      <li>• Solo vulcânico rico em fósforo</li>
                      <li>• Duas estações chuvosas</li>
                      <li>• Processamento via úmida dupla</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Perfil Sensorial
                    </h5>
                    <ul className="text-sm text-[#884A39] dark:text-white dark:text-white space-y-1">
                      <li>• Acidez intensa e brilhante</li>
                      <li>• Notas de groselha preta</li>
                      <li>• Corpo encorpado</li>
                      <li>• Final longo e complexo</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  🇨🇴 Colômbia - Diversidade Regional
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Huila
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      <strong>Altitude:</strong> 1200-1800m
                      <br />
                      <strong>Perfil:</strong> Doce, caramelo, frutas tropicais
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Nariño
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      <strong>Altitude:</strong> 1500-2300m
                      <br />
                      <strong>Perfil:</strong> Acidez cítrica, floral, complexo
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Cauca
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      <strong>Altitude:</strong> 1400-2000m
                      <br />
                      <strong>Perfil:</strong> Equilibrado, chocolate, frutas
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-yellow-600 pl-6">
                <h4 className="text-xl font-bold text-yellow-800 mb-4">
                  🇧🇷 Brasil - Maior Produtor
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Cerrado Mineiro
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      <strong>Altitude:</strong> 800-1300m
                      <br />
                      <strong>Perfil:</strong> Corpo encorpado, chocolate, nozes
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Sul de Minas
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      <strong>Altitude:</strong> 700-1200m
                      <br />
                      <strong>Perfil:</strong> Doce, equilibrado, caramelo
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Mogiana
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      <strong>Altitude:</strong> 900-1400m
                      <br />
                      <strong>Perfil:</strong> Corpo médio, acidez suave,
                      chocolate
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h4 className="text-xl font-bold text-purple-800 mb-4">
                  🇵🇦 Panamá - Geisha Excepcional
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Boquete
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      <strong>Altitude:</strong> 1400-1800m
                      <br />
                      <strong>Microclima:</strong> Neblina constante
                      <br />
                      <strong>Perfil:</strong> Floral intenso, chá, bergamota
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Volcán
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      <strong>Altitude:</strong> 1200-1600m
                      <br />
                      <strong>Solo:</strong> Vulcânico rico
                      <br />
                      <strong>Perfil:</strong> Complexo, frutas tropicais,
                      floral
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Fatores Climáticos
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#F9E0BB]/30 rounded-lg">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    🌡️ Temperatura
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Temperaturas ideais entre 18-24°C. Variações diurnas de
                    8-10°C favorecem o desenvolvimento de açúcares e ácidos
                    complexos.
                  </p>
                </div>
                <div className="p-4 bg-[#F9E0BB]/30 rounded-lg">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    🌧️ Precipitação
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    1200-1800mm anuais bem distribuídos, com período seco
                    durante a maturação para concentração de sabores.
                  </p>
                </div>
                <div className="p-4 bg-[#F9E0BB]/30 rounded-lg">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    ☀️ Luminosidade
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Luz solar filtrada por neblina ou sombra de árvores protege
                    os frutos e permite maturação lenta e uniforme.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Tipos de Solo
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#F9E0BB]/30 rounded-lg">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    🌋 Vulcânico
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Rico em minerais, boa drenagem, pH ligeiramente ácido. Comum
                    na América Central e Etiópia. Produz cafés com acidez
                    brilhante.
                  </p>
                </div>
                <div className="p-4 bg-[#F9E0BB]/30 rounded-lg">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    🏔️ Calcário
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Boa drenagem, rico em cálcio. Encontrado em algumas regiões
                    do Brasil e Etiópia. Contribui para corpo mais encorpado.
                  </p>
                </div>
                <div className="p-4 bg-[#F9E0BB]/30 rounded-lg">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    🌱 Orgânico
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Rico em matéria orgânica, retenção de umidade equilibrada.
                    Favorece o desenvolvimento de compostos aromáticos
                    complexos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
