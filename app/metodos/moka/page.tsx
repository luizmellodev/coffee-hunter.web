import Image from "next/image";
import { Flame, Timer, Thermometer } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { MethodSteps } from "@/components/method-steps";
import { InfoCard } from "@/components/info-card";

export default function MokaPage() {
  const mokaSteps = [
    {
      title: "Preparação da Água",
      description:
        "Aqueça água previamente até aproximadamente 70-80°C. Isso evita que o café fique em contato com o metal quente por muito tempo.",
      tip: "Água já quente reduz o tempo de extração e evita sabores metálicos ou queimados.",
    },
    {
      title: "Moagem e Dosagem",
      description:
        "Moa o café em granulometria média-fina (entre espresso e coado). Encha o compartimento sem compactar.",
      tip: "Não compacte o café como no espresso. Apenas nivele suavemente com o dedo.",
    },
    {
      title: "Montagem",
      description:
        "Coloque a água no compartimento inferior até a válvula. Insira o filtro com café e rosqueie a parte superior.",
      tip: "Certifique-se que não há resíduos de café nas bordas para garantir vedação perfeita.",
    },
    {
      title: "Aquecimento",
      description:
        "Coloque a Moka em fogo baixo com a tampa aberta. Mantenha o cabo afastado da fonte de calor.",
      tip: "Fogo muito alto pode causar extração rápida demais e sabores desagradáveis.",
    },
    {
      title: "Extração",
      description:
        "Observe o café começando a subir. Quando começar a borbulhar e ficar mais claro, retire do fogo.",
      tip: "O som de 'gorgolejo' indica que a extração está terminando e deve ser interrompida.",
    },
    {
      title: "Finalização",
      description:
        "Resfrie imediatamente a base com água fria ou pano úmido para interromper a extração.",
      tip: "Este passo é crucial para evitar sabores queimados no final da extração.",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Moka"
        description="Descubra os segredos da cafeteira italiana que produz um café concentrado e aromático."
        icon={<Flame className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                Tradição Italiana
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  A cafeteira Moka, também conhecida como cafeteira italiana,
                  foi inventada por Alfonso Bialetti em 1933 e revolucionou a
                  forma como os italianos preparavam café em casa. Seu design
                  icônico de oito faces é reconhecido mundialmente como símbolo
                  da cultura cafeeira italiana.
                </p>
                <p>
                  Funcionando por pressão de vapor, a Moka força água quente
                  através do café moído, produzindo uma bebida concentrada que
                  se situa entre o espresso e o café coado em termos de
                  intensidade. A pressão gerada (1-2 bar) é menor que a de
                  máquinas de espresso (9 bar), mas suficiente para extrair
                  óleos e compostos aromáticos intensos.
                </p>
                <p>
                  Apesar de sua aparente simplicidade, a Moka requer técnica
                  precisa para evitar sabores queimados ou metálicos. Quando bem
                  executada, produz um café encorpado, aromático e com crema
                  leve, perfeito para ser apreciado puro ou como base para
                  bebidas com leite.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Cafeteira Moka em uso"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Moagem"
              description="Média-fina, entre espresso e coado. Não deve ser compactada."
              icon={<span className="text-2xl">⚙️</span>}
            />
            <InfoCard
              title="Temperatura"
              description="Água pré-aquecida a 70-80°C, fogo baixo durante a extração."
              icon={<Thermometer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Tempo"
              description="2-3 minutos total, desde o início do aquecimento até a extração completa."
              icon={<Timer className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Pressão"
              description="1-2 bar, gerada pelo vapor de água no compartimento inferior."
              icon={<Flame className="h-6 w-6 text-[#C38154]" />}
            />
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Técnica Passo a Passo
            </h3>
            <MethodSteps steps={mokaSteps} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Anatomia da Moka
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Compartimento Inferior
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Reservatório de água com válvula de segurança. Encha até
                    abaixo da válvula.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Filtro
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Compartimento para o café moído. Deve ser preenchido sem
                    compactação.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Filtro Superior
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Disco metálico com gaxeta que cria vedação. Deve ser mantido
                    limpo.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Compartimento Superior
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Coletor do café extraído com coluna central por onde o café
                    sobe.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Técnicas Avançadas
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <h4 className="font-medium text-blue-800">Pré-infusão</h4>
                  <p className="text-sm text-blue-700">
                    Adicione água quase fervente no compartimento superior e
                    aguarde 30 segundos antes de montar.
                  </p>
                </div>

                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800">Toalha Úmida</h4>
                  <p className="text-sm text-green-700">
                    Envolva a base com toalha úmida durante a extração para
                    controlar a temperatura.
                  </p>
                </div>

                <div className="p-3 bg-purple-50 border-l-4 border-purple-500 rounded">
                  <h4 className="font-medium text-purple-800">
                    Extração Interrompida
                  </h4>
                  <p className="text-sm text-purple-700">
                    Retire do fogo quando apenas 70-80% do café tiver subido
                    para evitar notas amargas.
                  </p>
                </div>

                <div className="p-3 bg-amber-50 border-l-4 border-amber-500 rounded">
                  <h4 className="font-medium text-amber-800">
                    Água Filtrada Quente
                  </h4>
                  <p className="text-sm text-amber-700">
                    Use água filtrada já aquecida a 80°C para reduzir tempo no
                    fogo e melhorar sabor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Manutenção e Cuidados
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🧼</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Limpeza
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Lave apenas com água quente, sem detergente. Seque
                      completamente após o uso.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🔄</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Gaxeta e Filtro
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Substitua a gaxeta e o filtro anualmente ou quando
                      apresentarem desgaste.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">⚠️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Válvula de Segurança
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Mantenha limpa e desobstruída. Verifique regularmente seu
                      funcionamento.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🔥</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Condicionamento
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Faça algumas extrações descartáveis ao usar uma Moka nova
                      para remover resíduos de fabricação.
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
                  <h4 className="font-medium text-red-800">Sabor Metálico</h4>
                  <p className="text-sm text-red-700">
                    Use água pré-aquecida e mantenha a Moka limpa. Considere
                    condicioná-la com algumas extrações descartáveis.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <h4 className="font-medium text-yellow-800">Café Não Sobe</h4>
                  <p className="text-sm text-yellow-700">
                    Verifique se a moagem não está muito fina, se há vedação
                    adequada, ou se a válvula está obstruída.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                  <h4 className="font-medium text-blue-800">Vazamentos</h4>
                  <p className="text-sm text-blue-700">
                    Verifique a gaxeta, certifique-se que não há resíduos de
                    café nas bordas e que as partes estão bem rosqueadas.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 border-l-4 border-purple-400 rounded">
                  <h4 className="font-medium text-purple-800">
                    Sabor Queimado
                  </h4>
                  <p className="text-sm text-purple-700">
                    Use fogo mais baixo, água pré-aquecida e retire do fogo
                    assim que começar a borbulhar.
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
