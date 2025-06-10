import Image from "next/image";
import { Dna, MapPin, Award, TrendingUp } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { InfoCard } from "@/components/info-card";

export default function VariedadesPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Variedades de Café"
        description="Conheça as principais variedades de café e como cada uma contribui para perfis sensoriais únicos."
        icon={<Dna className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                Diversidade Genética
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  Existem mais de 100 espécies de café no mundo, mas apenas duas
                  são comercialmente relevantes: Coffea arabica (75% da produção
                  mundial) e Coffea canephora (robusta, 25%). Dentro da espécie
                  arabica, encontramos centenas de variedades, cada uma com
                  características únicas.
                </p>
                <p>
                  As variedades de café são resultado de seleção natural,
                  mutações espontâneas e melhoramento genético. Cada variedade
                  possui características específicas de resistência a doenças,
                  adaptação climática e, principalmente, perfil sensorial.
                </p>
                <p>
                  Compreender as variedades é fundamental para apreciar a
                  diversidade de sabores no café especial, pois cada uma
                  expressa notas sensoriais distintas quando cultivada nas
                  condições ideais.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Diferentes variedades de café"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Coffea Arabica"
              description="75% da produção mundial, sabor mais suave e complexo, cultivada em altitudes elevadas."
              icon={<Award className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Coffea Canephora"
              description="25% da produção, maior teor de cafeína, mais resistente a pragas e doenças."
              icon={<TrendingUp className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Híbridos"
              description="Cruzamentos entre variedades para combinar resistência e qualidade sensorial."
              icon={<Dna className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Heirloom"
              description="Variedades nativas e tradicionais, especialmente da Etiópia, berço do café."
              icon={<MapPin className="h-6 w-6 text-[#C38154]" />}
            />
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Principais Variedades Arabica
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="text-lg font-bold text-green-800 mb-2">
                    Bourbon
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Uma das variedades mais tradicionais, originária da Ilha
                    Bourbon (atual Reunião). Conhecida por sua doçura natural e
                    complexidade.
                  </p>
                  <div className="text-xs text-green-700">
                    <strong>Perfil:</strong> Doce, equilibrado, notas de
                    chocolate e caramelo
                  </div>
                  <div className="text-xs text-green-600">
                    <strong>Regiões:</strong> Brasil, Ruanda, El Salvador
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-lg font-bold text-blue-800 mb-2">
                    Typica
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Variedade ancestral trazida do Iêmen para Java e depois para
                    as Américas. Base genética de muitas outras variedades.
                  </p>
                  <div className="text-xs text-blue-700">
                    <strong>Perfil:</strong> Limpo, acidez brilhante, notas
                    florais
                  </div>
                  <div className="text-xs text-blue-600">
                    <strong>Regiões:</strong> Jamaica, Peru, Indonésia
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="text-lg font-bold text-purple-800 mb-2">
                    Geisha/Gesha
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Originária da Etiópia, ganhou fama mundial no Panamá.
                    Considerada uma das variedades mais excepcionais.
                  </p>
                  <div className="text-xs text-purple-700">
                    <strong>Perfil:</strong> Floral intenso, chá, bergamota,
                    jasmin
                  </div>
                  <div className="text-xs text-purple-600">
                    <strong>Regiões:</strong> Panamá, Colômbia, Costa Rica
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="text-lg font-bold text-red-800 mb-2">
                    Caturra
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Mutação natural do Bourbon descoberta no Brasil. Planta mais
                    compacta e produtiva, mantendo boa qualidade.
                  </p>
                  <div className="text-xs text-red-700">
                    <strong>Perfil:</strong> Acidez vibrante, corpo médio,
                    cítrico
                  </div>
                  <div className="text-xs text-red-600">
                    <strong>Regiões:</strong> Brasil, Colômbia, América Central
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="text-lg font-bold text-yellow-800 mb-2">
                    Catuaí
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Híbrido entre Mundo Novo e Caturra, desenvolvido no Brasil.
                    Combina produtividade com qualidade sensorial.
                  </p>
                  <div className="text-xs text-yellow-700">
                    <strong>Perfil:</strong> Equilibrado, doce, notas de
                    chocolate
                  </div>
                  <div className="text-xs text-yellow-600">
                    <strong>Regiões:</strong> Brasil, América Central
                  </div>
                </div>

                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="text-lg font-bold text-indigo-800 mb-2">
                    SL28 & SL34
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Variedades desenvolvidas no Quênia pelos laboratórios Scott
                    Labs. Famosas pela acidez intensa e notas de groselha.
                  </p>
                  <div className="text-xs text-indigo-700">
                    <strong>Perfil:</strong> Acidez intensa, groselha preta,
                    vinho
                  </div>
                  <div className="text-xs text-indigo-600">
                    <strong>Regiões:</strong> Quênia, alguns países da América
                    Central
                  </div>
                </div>

                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="text-lg font-bold text-pink-800 mb-2">
                    Pacamara
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Híbrido entre Pacas e Maragogipe, criado em El Salvador.
                    Grãos grandes e perfil sensorial complexo.
                  </p>
                  <div className="text-xs text-pink-700">
                    <strong>Perfil:</strong> Complexo, frutado, corpo encorpado
                  </div>
                  <div className="text-xs text-pink-600">
                    <strong>Regiões:</strong> El Salvador, Nicarágua, Honduras
                  </div>
                </div>

                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="text-lg font-bold text-teal-800 mb-2">
                    Heirloom Etíopes
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white mb-2">
                    Centenas de variedades nativas da Etiópia, berço do café.
                    Cada região possui variedades únicas com perfis distintos.
                  </p>
                  <div className="text-xs text-teal-700">
                    <strong>Perfil:</strong> Extremamente diversos, florais,
                    frutados
                  </div>
                  <div className="text-xs text-teal-600">
                    <strong>Regiões:</strong> Etiópia (Yirgacheffe, Sidamo,
                    Harrar)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Variedades Resistentes
              </h3>
              <p className="text-[#884A39] dark:text-white dark:text-white mb-4">
                Com as mudanças climáticas e pressão de pragas, variedades
                resistentes ganham importância:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Castillo
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Desenvolvida na Colômbia, resistente à ferrugem, mantendo
                    qualidade sensorial próxima ao Caturra.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Ruiru 11
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Variedade queniana resistente a doenças, compacta e
                    produtiva, adequada para pequenos produtores.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    F1 Híbridos
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Nova geração de híbridos que combinam resistência,
                    produtividade e qualidade excepcional.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Identificação por Região
              </h3>
              <p className="text-[#884A39] dark:text-white dark:text-white mb-4">
                Algumas variedades são características de regiões específicas:
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-[#F9E0BB]/30 rounded">
                  <span className="text-[#884A39] dark:text-white">
                    🇪🇹 Etiópia
                  </span>
                  <span className="font-medium text-[#C38154]">
                    Heirloom varieties
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#F9E0BB]/30 rounded">
                  <span className="text-[#884A39] dark:text-white">
                    🇰🇪 Quênia
                  </span>
                  <span className="font-medium text-[#C38154]">
                    SL28, SL34, Ruiru 11
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#F9E0BB]/30 rounded">
                  <span className="text-[#884A39] dark:text-white">
                    🇵🇦 Panamá
                  </span>
                  <span className="font-medium text-[#C38154]">
                    Geisha, Caturra
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#F9E0BB]/30 rounded">
                  <span className="text-[#884A39] dark:text-white">
                    🇧🇷 Brasil
                  </span>
                  <span className="font-medium text-[#C38154]">
                    Bourbon, Catuaí, Mundo Novo
                  </span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#F9E0BB]/30 rounded">
                  <span className="text-[#884A39] dark:text-white">
                    🇨🇴 Colômbia
                  </span>
                  <span className="font-medium text-[#C38154]">
                    Caturra, Castillo, Geisha
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
