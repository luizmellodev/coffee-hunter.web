import Image from "next/image";
import { Mountain, Thermometer, Cloud, Leaf } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { InfoCard } from "@/components/info-card";
import { NavigationSection } from "@/components/NavigationSection";

export default function TerroirPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Terroir do Café"
        description="Entenda como geografia, clima e solo se combinam para criar perfis sensoriais únicos em cada região cafeeira."
        icon={
          <Mountain className="h-6 w-6 md:h-8 md:w-8 text-coffee-600 dark:text-coffee-400" />
        }
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 md:mb-6">
                A Personalidade do Lugar
              </h2>
              <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm md:text-base">
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
              <div className="absolute -z-10 inset-0 bg-gradient-to-r from-coffee-200 to-gold-200 dark:from-coffee-800 dark:to-coffee-700 rounded-full blur-3xl opacity-40" />
              <Image
                src="/terroir.jpg"
                width={500}
                height={500}
                alt="Paisagem de plantação de café em montanha"
                className="rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            <InfoCard
              title="Altitude"
              description="Altitudes elevadas (1000-2000m) criam stress que concentra açúcares e desenvolve acidez complexa."
              icon={
                <Mountain className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />
              }
            />
            <InfoCard
              title="Temperatura"
              description="Variações térmicas diárias influenciam o desenvolvimento dos compostos aromáticos."
              icon={
                <Thermometer className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />
              }
            />
            <InfoCard
              title="Precipitação"
              description="Padrões de chuva afetam o crescimento e a concentração de sabores no fruto."
              icon={
                <Cloud className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />
              }
            />
            <InfoCard
              title="Solo"
              description="Composição mineral do solo contribui para o perfil nutricional e sensorial do café."
              icon={
                <Leaf className="h-5 w-5 md:h-6 md:w-6 text-coffee-600 dark:text-coffee-400" />
              }
            />
          </div>

          <div className="section-card p-6 md:p-8 mb-12 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8">
              Principais Regiões e Seus Terroirs
            </h3>

            <div className="space-y-8 md:space-y-10">
              {/* Etiópia */}
              <div className="region-card p-6 rounded-xl border-l-4 border-green-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇪🇹</span>
                  <h4 className="text-lg md:text-xl font-bold text-green-800 dark:text-green-300">
                    Etiópia - Berço do Café
                  </h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Yirgacheffe
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Altitude:</span>{" "}
                        1700-2200m
                      </p>
                      <p>
                        <span className="font-medium">Solo:</span> Vulcânico
                        rico
                      </p>
                      <p>
                        <span className="font-medium">Perfil:</span> Floral,
                        chá, limão, bergamota
                      </p>
                    </div>
                  </div>
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Sidamo
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Altitude:</span>{" "}
                        1400-2200m
                      </p>
                      <p>
                        <span className="font-medium">Solo:</span> Vulcânico e
                        sedimentar
                      </p>
                      <p>
                        <span className="font-medium">Perfil:</span> Frutado,
                        vinho, complexo
                      </p>
                    </div>
                  </div>
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Harrar
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Altitude:</span>{" "}
                        1500-2100m
                      </p>
                      <p>
                        <span className="font-medium">Solo:</span> Calcário e
                        argila
                      </p>
                      <p>
                        <span className="font-medium">Perfil:</span> Vinho,
                        frutas vermelhas, terroso
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quênia */}
              <div className="region-card p-6 rounded-xl border-l-4 border-red-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇰🇪</span>
                  <h4 className="text-lg md:text-xl font-bold text-red-800 dark:text-red-300">
                    Quênia - Acidez Intensa
                  </h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Características do Terroir
                    </h5>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>
                        • <span className="font-medium">Altitude:</span>{" "}
                        1400-2100m
                      </li>
                      <li>
                        • <span className="font-medium">Solo:</span> Vulcânico
                        rico em fósforo
                      </li>
                      <li>
                        • <span className="font-medium">Clima:</span> Duas
                        estações chuvosas
                      </li>
                      <li>
                        • <span className="font-medium">Processo:</span> Via
                        úmida dupla
                      </li>
                    </ul>
                  </div>
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Perfil Sensorial
                    </h5>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Acidez intensa e brilhante</li>
                      <li>• Notas de groselha preta</li>
                      <li>• Corpo encorpado</li>
                      <li>• Final longo e complexo</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Colômbia */}
              <div className="region-card p-6 rounded-xl border-l-4 border-blue-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇨🇴</span>
                  <h4 className="text-lg md:text-xl font-bold text-blue-800 dark:text-blue-300">
                    Colômbia - Diversidade Regional
                  </h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Huila
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Altitude:</span>{" "}
                        1200-1800m
                      </p>
                      <p>
                        <span className="font-medium">Perfil:</span> Doce,
                        caramelo, frutas tropicais
                      </p>
                    </div>
                  </div>
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Nariño
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Altitude:</span>{" "}
                        1500-2300m
                      </p>
                      <p>
                        <span className="font-medium">Perfil:</span> Acidez
                        cítrica, floral, complexo
                      </p>
                    </div>
                  </div>
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Cauca
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Altitude:</span>{" "}
                        1400-2000m
                      </p>
                      <p>
                        <span className="font-medium">Perfil:</span>{" "}
                        Equilibrado, chocolate, frutas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brasil */}
              <div className="region-card p-6 rounded-xl border-l-4 border-yellow-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇧🇷</span>
                  <h4 className="text-lg md:text-xl font-bold text-yellow-800 dark:text-yellow-300">
                    Brasil - Maior Produtor
                  </h4>
                </div>
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Cerrado Mineiro
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Altitude:</span> 800-1300m
                      </p>
                      <p>
                        <span className="font-medium">Perfil:</span> Corpo
                        encorpado, chocolate, nozes
                      </p>
                    </div>
                  </div>
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Sul de Minas
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Altitude:</span> 700-1200m
                      </p>
                      <p>
                        <span className="font-medium">Perfil:</span> Doce,
                        equilibrado, caramelo
                      </p>
                    </div>
                  </div>
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Mogiana
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Altitude:</span> 900-1400m
                      </p>
                      <p>
                        <span className="font-medium">Perfil:</span> Corpo
                        médio, acidez suave, chocolate
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panamá */}
              <div className="region-card p-6 rounded-xl border-l-4 border-purple-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">🇵🇦</span>
                  <h4 className="text-lg md:text-xl font-bold text-purple-800 dark:text-purple-300">
                    Panamá - Geisha Excepcional
                  </h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Boquete
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Altitude:</span>{" "}
                        1400-1800m
                      </p>
                      <p>
                        <span className="font-medium">Microclima:</span> Neblina
                        constante
                      </p>
                      <p>
                        <span className="font-medium">Perfil:</span> Floral
                        intenso, chá, bergamota
                      </p>
                    </div>
                  </div>
                  <div className="info-box p-4 rounded-lg">
                    <h5 className="font-semibold text-foreground mb-3 text-base">
                      Volcán
                    </h5>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>
                        <span className="font-medium">Altitude:</span>{" "}
                        1200-1600m
                      </p>
                      <p>
                        <span className="font-medium">Solo:</span> Vulcânico
                        rico
                      </p>
                      <p>
                        <span className="font-medium">Perfil:</span> Complexo,
                        frutas tropicais, floral
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">
                Fatores Climáticos
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="p-3 md:p-4 info-box rounded-lg">
                  <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">
                    🌡️ Temperatura
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Temperaturas ideais entre 18-24°C. Variações diurnas de
                    8-10°C favorecem o desenvolvimento de açúcares e ácidos
                    complexos.
                  </p>
                </div>
                <div className="p-3 md:p-4 info-box rounded-lg">
                  <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">
                    🌧️ Precipitação
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    1200-1800mm anuais bem distribuídos, com período seco
                    durante a maturação para concentração de sabores.
                  </p>
                </div>
                <div className="p-3 md:p-4 info-box rounded-lg">
                  <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">
                    ☀️ Luminosidade
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Luz solar filtrada por neblina ou sombra de árvores protege
                    os frutos e permite maturação lenta e uniforme.
                  </p>
                </div>
              </div>
            </div>

            <div className="process-card p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">
                Tipos de Solo
              </h3>
              <div className="space-y-3 md:space-y-4">
                <div className="p-3 md:p-4 info-box rounded-lg">
                  <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">
                    🌋 Vulcânico
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Rico em minerais, boa drenagem, pH ligeiramente ácido. Comum
                    na América Central e Etiópia. Produz cafés com acidez
                    brilhante.
                  </p>
                </div>
                <div className="p-3 md:p-4 info-box rounded-lg">
                  <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">
                    🏔️ Calcário
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Boa drenagem, rico em cálcio. Encontrado em algumas regiões
                    do Brasil e Etiópia. Contribui para corpo mais encorpado.
                  </p>
                </div>
                <div className="p-3 md:p-4 info-box rounded-lg">
                  <h4 className="font-medium text-foreground mb-2 text-sm md:text-base">
                    🌱 Orgânico
                  </h4>
                  <p className="text-sm text-muted-foreground">
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


      <NavigationSection
      beforeNav={{ href: "/variedades", label: "Variedades de Café" }}
        afterNav={{ href: "/colheita", label: "A colheita de café" }}
      />
    </div>
  );
}
