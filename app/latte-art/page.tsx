import Image from "next/image";
import { Palette, Droplets, Heart, Star } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { MethodSteps } from "@/components/method-steps";
import { InfoCard } from "@/components/info-card";

export default function LatteArtPage() {
  const latteArtSteps = [
    {
      title: "Preparação do Espresso",
      description:
        "Extraia um espresso perfeito com crema dourada e consistente. A qualidade do espresso é fundamental para a latte art.",
      tip: "Use uma xícara com boca larga (6-8cm) para facilitar os desenhos.",
    },
    {
      title: "Vaporização do Leite",
      description:
        "Vaporize 150ml de leite gelado até 65°C, criando microespuma sedosa com textura de 'tinta'.",
      tip: "O leite deve ter brilho de seda e consistência cremosa, sem bolhas grandes.",
    },
    {
      title: "Integração da Espuma",
      description:
        "Bata levemente a jarra no balcão e gire para integrar a espuma com o leite.",
      tip: "A espuma deve estar completamente integrada, sem separação visível.",
    },
    {
      title: "Posicionamento Inicial",
      description:
        "Comece despejando de altura (5-10cm) no centro da xícara para penetrar a crema.",
      tip: "Fluxo fino e constante no início para não quebrar a crema do espresso.",
    },
    {
      title: "Criação da Base",
      description:
        "Quando a xícara estiver meio cheia, aproxime a jarra da superfície e aumente o fluxo.",
      tip: "A proximidade da jarra com a superfície é crucial para a formação dos desenhos.",
    },
    {
      title: "Finalização do Desenho",
      description:
        "Execute o movimento específico do desenho escolhido e finalize com um movimento rápido através do centro.",
      tip: "Pratique os movimentos sem leite primeiro para desenvolver a coordenação.",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Latte Art"
        description="Domine a arte de criar desenhos no leite, transformando cada café em uma obra de arte."
        icon={<Palette className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                Arte na Xícara
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  Latte art é a técnica de criar desenhos na superfície de
                  bebidas à base de espresso usando leite vaporizado. Mais que
                  decoração, é uma demonstração de habilidade técnica que indica
                  a qualidade do espresso e da vaporização do leite.
                </p>
                <p>
                  A latte art requer três elementos fundamentais: espresso com
                  crema consistente, leite perfeitamente vaporizado com
                  microespuma sedosa, e técnica de despejo precisa. A combinação
                  desses elementos permite criar desde desenhos simples até
                  obras complexas.
                </p>
                <p>
                  Além da beleza visual, a latte art indica que o barista domina
                  as técnicas fundamentais do café especial, garantindo que a
                  bebida não apenas pareça boa, mas também tenha sabor
                  excepcional.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Latte art sendo criada"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Espresso"
              description="Base com crema dourada e consistente, extraída em 25-30 segundos."
              icon={<span className="text-2xl">☕</span>}
            />
            <InfoCard
              title="Leite"
              description="Vaporizado a 65°C com microespuma sedosa e brilhante."
              icon={<Droplets className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Técnica"
              description="Controle de fluxo, altura e movimento da jarra para criar desenhos."
              icon={<Palette className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Prática"
              description="Repetição constante para desenvolver coordenação e precisão."
              icon={<Star className="h-6 w-6 text-[#C38154]" />}
            />
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Técnica Fundamental
            </h3>
            <MethodSteps steps={latteArtSteps} />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Coração (Heart)
              </h3>
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-[#F9E0BB] rounded-full mx-auto flex items-center justify-center">
                  <Heart className="h-10 w-10 text-[#C38154]" />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  O desenho mais básico e fundamental. Base para todos os outros
                  padrões.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Técnica:
                  </h4>
                  <ol className="list-decimal pl-4 text-sm text-[#884A39] dark:text-white dark:text-white">
                    <li>Despeje de altura no centro</li>
                    <li>Quando meio cheio, aproxime a jarra</li>
                    <li>Crie um círculo branco</li>
                    <li>Corte através do centro rapidamente</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Roseta (Rosetta)
              </h3>
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-[#F9E0BB] rounded-full mx-auto flex items-center justify-center">
                  <span className="text-3xl">🌹</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  Desenho em forma de folha com múltiplas camadas. Requer
                  movimento lateral da jarra.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Técnica:
                  </h4>
                  <ol className="list-decimal pl-4 text-sm text-[#884A39] dark:text-white dark:text-white">
                    <li>Comece como o coração</li>
                    <li>Mova a jarra lado a lado</li>
                    <li>Diminua a amplitude gradualmente</li>
                    <li>Finalize cortando para frente</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Tulipa (Tulip)
              </h3>
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-[#F9E0BB] rounded-full mx-auto flex items-center justify-center">
                  <span className="text-3xl">🌷</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  Múltiplos corações empilhados. Requer controle preciso do
                  fluxo e timing.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Técnica:
                  </h4>
                  <ol className="list-decimal pl-4 text-sm text-[#884A39] dark:text-white dark:text-white">
                    <li>Crie o primeiro coração</li>
                    <li>Pare o fluxo e mova para trás</li>
                    <li>Repita 2-3 vezes</li>
                    <li>Corte através de todos os corações</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3
                className="text-xl font-bold text-[#884A39] dark:text-white mb-4"
                id="vaporizacao"
              >
                Vaporização Perfeita
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-[#F9E0BB]/30 rounded-lg">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    Temperatura do Leite
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Use leite gelado (3-5°C) em jarra metálica. Leite integral
                    produz melhor textura devido ao teor de gordura.
                  </p>
                </div>

                <div className="p-4 bg-[#F9E0BB]/30 rounded-lg">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    Fase de Incorporação (0-5 segundos)
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Vaporizador logo abaixo da superfície. Som de "papel
                    rasgando" indica incorporação correta de ar.
                  </p>
                </div>

                <div className="p-4 bg-[#F9E0BB]/30 rounded-lg">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    Fase de Aquecimento (5-20 segundos)
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Submerja o vaporizador mais fundo. Crie movimento circular
                    para homogeneizar a temperatura.
                  </p>
                </div>

                <div className="p-4 bg-[#F9E0BB]/30 rounded-lg">
                  <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                    Temperatura Final
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    65°C é ideal. A jarra deve estar quente mas ainda
                    confortável para segurar (3-5 segundos).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Erros Comuns
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                  <h4 className="font-medium text-red-800">Bolhas Grandes</h4>
                  <p className="text-sm text-red-700">
                    Vaporizador muito próximo da superfície ou movimento
                    excessivo. Mantenha posição estável.
                  </p>
                </div>

                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <h4 className="font-medium text-yellow-800">
                    Leite Muito Quente
                  </h4>
                  <p className="text-sm text-yellow-700">
                    Acima de 70°C destrói proteínas e cria sabor queimado. Use
                    termô metro ou pratique o toque.
                  </p>
                </div>

                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <h4 className="font-medium text-blue-800">Espuma Separada</h4>
                  <p className="text-sm text-blue-700">
                    Falta de integração. Bata a jarra e gire o leite antes de
                    despejar.
                  </p>
                </div>

                <div className="p-3 bg-purple-50 border-l-4 border-purple-400 rounded">
                  <h4 className="font-medium text-purple-800">
                    Desenho Não Forma
                  </h4>
                  <p className="text-sm text-purple-700">
                    Jarra muito alta ou fluxo inadequado. Aproxime da superfície
                    e controle o fluxo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md">
            <h3
              className="text-2xl font-bold text-[#884A39] dark:text-white mb-8"
              id="desenhos"
            >
              Desenhos Avançados
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-[#F9E0BB] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">🦢</span>
                </div>
                <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                  Cisne
                </h4>
                <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  Combinação de roseta com pescoço alongado. Requer movimento
                  preciso da jarra.
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-[#F9E0BB] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">🌊</span>
                </div>
                <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                  Ondas
                </h4>
                <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  Movimento contínuo lado a lado criando padrão ondulado. Base
                  para muitos designs.
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-[#F9E0BB] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">🌸</span>
                </div>
                <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                  Flor
                </h4>
                <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  Múltiplas camadas de pétalas. Combina técnicas de tulipa e
                  roseta.
                </p>
              </div>

              <div className="text-center p-4">
                <div className="w-16 h-16 bg-[#F9E0BB] rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">🦋</span>
                </div>
                <h4 className="font-medium text-[#884A39] dark:text-white mb-2">
                  Borboleta
                </h4>
                <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  Design simétrico com asas. Requer controle bilateral da jarra.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#F9E0BB]/20 rounded-lg">
              <h4 className="font-medium text-[#884A39] dark:text-white mb-3">
                Dicas para Progressão:
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#884A39] dark:text-white dark:text-white">
                <li>Domine o coração antes de tentar outros desenhos</li>
                <li>
                  Pratique movimentos sem leite para desenvolver coordenação
                </li>
                <li>Use água com detergente para praticar sem desperdício</li>
                <li>Filme seus movimentos para analisar e melhorar</li>
                <li>Mantenha consistência na vaporização do leite</li>
                <li>Pratique diariamente, mesmo que por poucos minutos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
