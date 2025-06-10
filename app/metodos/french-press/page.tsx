import Image from "next/image";
import { Clock, Timer, Scale, Thermometer } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { MethodSteps } from "@/components/method-steps";
import { InfoCard } from "@/components/info-card";

export default function FrenchPressPage() {
  const frenchPressSteps = [
    {
      title: "Pré-aquecimento",
      description:
        "Pré-aqueça a French Press com água quente para manter a temperatura estável durante a extração.",
      tip: "Não pule esta etapa, pois o vidro frio pode reduzir significativamente a temperatura da água.",
    },
    {
      title: "Moagem e Dosagem",
      description:
        "Moa 30g de café em granulometria grossa (similar à açúcar cristal grosso). A uniformidade é crucial.",
      tip: "Moagem muito fina resultará em excesso de sedimentos e amargor na xícara.",
    },
    {
      title: "Adição do Café",
      description:
        "Descarte a água de pré-aquecimento e adicione o café moído na French Press vazia.",
      tip: "Agite levemente para nivelar o leito de café antes de adicionar água.",
    },
    {
      title: "Primeira Adição de Água",
      description:
        "Despeje 60ml de água a 93°C sobre o café, molhando todos os grãos. Aguarde 30 segundos para bloom.",
      tip: "Use movimento circular para garantir que todos os grãos sejam molhados uniformemente.",
    },
    {
      title: "Adição Principal",
      description:
        "Complete com água até 500ml total. Mexa suavemente com colher de madeira para garantir saturação uniforme.",
      tip: "Evite mexer vigorosamente para não acelerar a extração e causar amargor.",
    },
    {
      title: "Infusão e Prensagem",
      description:
        "Coloque a tampa sem pressionar e aguarde 4 minutos. Pressione o êmbolo lentamente (15-20 segundos).",
      tip: "Pressão muito rápida pode agitar os sedimentos e aumentar a turbidez do café.",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="French Press"
        description="Domine o método de imersão clássico que produz cafés encorpados e com textura rica."
        icon={<Clock className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                Imersão Total
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  A French Press, também conhecida como prensa francesa ou
                  cafeteira de êmbolo, é um dos métodos mais tradicionais e
                  acessíveis para preparar café. Inventada na França no século
                  XIX, sua popularidade se deve à simplicidade de uso e ao
                  perfil sensorial característico.
                </p>
                <p>
                  Este método de imersão total permite contato prolongado entre
                  água e café, extraindo compostos solúveis de forma completa. A
                  ausência de filtro de papel permite que óleos e
                  micropartículas permaneçam na bebida, resultando em corpo
                  encorpado e textura rica.
                </p>
                <p>
                  A French Press é ideal para quem aprecia cafés com corpo
                  pronunciado, doçura intensa e complexidade aromática. É
                  particularmente adequada para cafés de torra média a escura,
                  destacando notas de chocolate, nozes e caramelo.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="French Press em uso"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Proporção"
              description="1:16 a 1:17 (30g de café para 500ml de água) para equilíbrio ideal."
              icon={<Scale className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Temperatura"
              description="92-94°C, ligeiramente mais baixa que outros métodos."
              icon={<Thermometer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Tempo de Infusão"
              description="4:00 minutos para extração completa sem excesso de amargor."
              icon={<Timer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Moagem"
              description="Grossa, similar ao açúcar cristal grosso. Uniformidade é crucial."
              icon={<span className="text-2xl">⚙️</span>}
            />
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Técnica Passo a Passo
            </h3>
            <MethodSteps steps={frenchPressSteps} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Receita Clássica
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Café
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">30g</div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Água
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">
                      500ml
                    </div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Temperatura
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">
                      93°C
                    </div>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <div className="font-medium text-[#884A39] dark:text-white">
                      Infusão
                    </div>
                    <div className="text-2xl font-bold text-[#C38154]">
                      4:00
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    Timeline:
                  </h4>
                  <div className="space-y-2 text-sm text-[#884A39] dark:text-white dark:text-white">
                    <div className="flex justify-between">
                      <span>0:00 - Adição inicial</span>
                      <span>60ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>0:30 - Adição principal</span>
                      <span>até 500ml</span>
                    </div>
                    <div className="flex justify-between">
                      <span>0:45 - Mexer suavemente</span>
                      <span>-</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4:00 - Prensagem lenta</span>
                      <span>15-20s</span>
                    </div>
                    <div className="flex justify-between">
                      <span>4:20 - Servir imediatamente</span>
                      <span>-</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Variações de Técnica
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <h4 className="font-medium text-blue-800">Método Hoffmann</h4>
                  <p className="text-sm text-blue-700 mb-2">
                    Quebra da crosta aos 4 minutos, remoção da espuma, aguardar
                    mais 5-8 minutos sem prensar.
                  </p>
                  <div className="text-xs text-blue-600">
                    Reduz sedimentos e aumenta clareza sem perder corpo
                  </div>
                </div>

                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800">
                    Dupla Filtragem
                  </h4>
                  <p className="text-sm text-green-700 mb-2">
                    Após prensar, despeje em outro recipiente através de filtro
                    de papel.
                  </p>
                  <div className="text-xs text-green-600">
                    Mantém corpo mas reduz significativamente os sedimentos
                  </div>
                </div>

                <div className="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
                  <h4 className="font-medium text-purple-800">Cold Brew</h4>
                  <p className="text-sm text-purple-700 mb-2">
                    Proporção 1:10, água fria, infusão de 12-24 horas na
                    geladeira.
                  </p>
                  <div className="text-xs text-purple-600">
                    Baixa acidez, doçura intensa, ideal para o verão
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Vantagens da French Press
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">💪</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Corpo Encorpado
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Ausência de filtro de papel permite passagem de óleos e
                      micropartículas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🧠</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Simplicidade
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Método intuitivo e acessível, ideal para iniciantes no
                      café especial.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🌍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Sustentabilidade
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Não utiliza filtros descartáveis, reduzindo resíduos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Versatilidade
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Pode ser usado para café quente, cold brew e até infusões
                      de chá.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Solução de Problemas
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                  <h4 className="font-medium text-red-800">
                    Excesso de Sedimentos
                  </h4>
                  <p className="text-sm text-red-700">
                    Moagem muito fina ou prensagem muito rápida. Use moagem mais
                    grossa e prense lentamente.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <h4 className="font-medium text-yellow-800">
                    Difícil de Prensar
                  </h4>
                  <p className="text-sm text-yellow-700">
                    Moagem muito fina ou excesso de café. Ajuste a moagem ou
                    reduza a dose.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <h4 className="font-medium text-blue-800">Sabor Amargo</h4>
                  <p className="text-sm text-blue-700">
                    Tempo de infusão muito longo ou moagem muito fina. Reduza o
                    tempo ou ajuste a moagem.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 border-l-4 border-purple-400 rounded">
                  <h4 className="font-medium text-purple-800">Sabor Fraco</h4>
                  <p className="text-sm text-purple-700">
                    Moagem muito grossa ou tempo insuficiente. Aumente o tempo
                    de infusão ou ajuste a moagem.
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
