import Image from "next/image"
import { Sparkles, Flame, Leaf } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export default function DegustacaoPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Degustação"
        description="Aprenda a identificar aromas, sabores e texturas do café como um profissional."
        icon={<Sparkles className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">A Arte da Percepção</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  A degustação profissional de café, também conhecida como "cupping", é uma prática sistemática para
                  avaliar as características sensoriais do café. É através dela que produtores, compradores e baristas
                  identificam qualidades e defeitos.
                </p>
                <p>
                  Diferente do consumo casual, a degustação técnica envolve metodologia específica, vocabulário
                  padronizado e treinamento sensorial contínuo. O objetivo é criar uma linguagem comum que permita
                  comunicar com precisão as nuances de cada café.
                </p>
                <p>
                  Desenvolver habilidades de degustação não apenas enriquece a experiência pessoal com o café, mas
                  também permite identificar cafés de qualidade superior e compreender como diferentes variáveis de
                  produção e preparo afetam o resultado final.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Degustação de café"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-amber-300 mb-8">
              Os Cinco Sentidos na Degustação
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg text-center">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-full w-fit mx-auto mb-3">
                  <span className="text-2xl">👁️</span>
                </div>
                <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">Visão</h4>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  Cor, transparência, uniformidade da moagem, presença de defeitos visíveis.
                </p>
              </div>

              <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg text-center">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-full w-fit mx-auto mb-3">
                  <span className="text-2xl">👃</span>
                </div>
                <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">Olfato</h4>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  Aroma seco, fragrância úmida, intensidade e complexidade aromática.
                </p>
              </div>

              <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg text-center">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-full w-fit mx-auto mb-3">
                  <span className="text-2xl">👅</span>
                </div>
                <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">Paladar</h4>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  Doce, ácido, amargo, salgado e umami. Base para identificação de sabores.
                </p>
              </div>

              <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg text-center">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-full w-fit mx-auto mb-3">
                  <span className="text-2xl">🤏</span>
                </div>
                <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">Tato</h4>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  Corpo, textura, viscosidade, adstringência e sensação na boca.
                </p>
              </div>

              <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg text-center">
                <div className="bg-white dark:bg-gray-700 p-3 rounded-full w-fit mx-auto mb-3">
                  <span className="text-2xl">👂</span>
                </div>
                <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">Audição</h4>
                <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                  Som da moagem, crepitar dos grãos, ruído da extração - indicadores de qualidade.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-amber-300 mb-8">Protocolo de Cupping</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">1. Preparação</h4>
                  <ul className="text-sm text-[#884A39]/80 dark:text-amber-100/80 space-y-1">
                    <li>• 8,25g de café moído médio por xícara</li>
                    <li>• Água a 93°C, proporção 1:18</li>
                    <li>• Xícaras de 150ml, preferencialmente brancas</li>
                    <li>• Ambiente neutro, sem odores</li>
                  </ul>
                </div>

                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">2. Avaliação do Aroma Seco</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Cheire o café moído antes de adicionar água. Identifique intensidade e características aromáticas
                    iniciais.
                  </p>
                </div>

                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">3. Adição da Água</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Despeje água quente sobre o café, saturando todos os grãos. Aguarde 4 minutos para infusão completa.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">4. Quebra da Crosta</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Com uma colher, quebre a crosta formada na superfície. Este é o momento de maior intensidade
                    aromática.
                  </p>
                </div>

                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">5. Limpeza da Superfície</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Remova a espuma e partículas flutuantes com duas colheres. Aguarde o café esfriar até 70°C.
                  </p>
                </div>

                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 p-4 rounded-lg">
                  <h4 className="font-bold text-[#884A39] dark:text-amber-200 mb-2">6. Degustação</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Aspire o café com força para espalhar por toda a boca. Avalie sabor, acidez, corpo e finalização.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-amber-300 mb-8">Roda de Sabores</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <h4 className="font-bold text-green-800 dark:text-green-300">Florais/Frutados</h4>
                </div>
                <ul className="text-sm text-green-700 dark:text-green-200 space-y-1">
                  <li>• Jasmim, lavanda</li>
                  <li>• Frutas vermelhas</li>
                  <li>• Cítricos</li>
                  <li>• Frutas tropicais</li>
                  <li>• Frutas de caroço</li>
                </ul>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Flame className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="font-bold text-amber-800 dark:text-amber-300">Doces/Caramelizados</h4>
                </div>
                <ul className="text-sm text-amber-700 dark:text-amber-200 space-y-1">
                  <li>• Chocolate</li>
                  <li>• Caramelo</li>
                  <li>• Mel, açúcar mascavo</li>
                  <li>• Baunilha</li>
                  <li>• Malte</li>
                </ul>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-600 dark:text-orange-400 text-xl">🌰</span>
                  <h4 className="font-bold text-orange-800 dark:text-orange-300">Nozes/Especiarias</h4>
                </div>
                <ul className="text-sm text-orange-700 dark:text-orange-200 space-y-1">
                  <li>• Amêndoa, avelã</li>
                  <li>• Canela, cravo</li>
                  <li>• Noz-moscada</li>
                  <li>• Pimenta</li>
                  <li>• Cardamomo</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-gray-600 dark:text-gray-400 text-xl">🏭</span>
                  <h4 className="font-bold text-gray-800 dark:text-gray-300">Outros</h4>
                </div>
                <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>• Terroso, mineral</li>
                  <li>• Defumado</li>
                  <li>• Herbáceo</li>
                  <li>• Cereais</li>
                  <li>• Tabaco</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Desenvolvendo o Paladar</h3>
              <div className="space-y-4">
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Prática Regular</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Deguste diferentes cafés diariamente. Compare origens, processamentos e torras.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Calibração</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Participe de sessões de cupping em grupo para calibrar suas percepções com outros degustadores.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Memória Sensorial</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Mantenha um diário de degustação. Registre impressões e compare com avaliações posteriores.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-amber-200">Treinamento Específico</h4>
                  <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                    Use kits de aromas e sabores para treinar identificação de compostos específicos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">
                Fatores que Afetam a Degustação
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 dark:border-yellow-500 rounded">
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-300">Temperatura</h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    Sabores se revelam em diferentes temperaturas. Avalie o café conforme esfria.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-400 dark:border-blue-500 rounded">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300">Hidratação</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-200">
                    Mantenha-se hidratado e limpe o paladar entre amostras com água neutra.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900/30 border-l-4 border-purple-400 dark:border-purple-500 rounded">
                  <h4 className="font-medium text-purple-800 dark:text-purple-300">Ambiente</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-200">
                    Evite odores externos, ruídos e distrações que possam interferir na concentração.
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900/30 border-l-4 border-green-400 dark:border-green-500 rounded">
                  <h4 className="font-medium text-green-800 dark:text-green-300">Estado Físico</h4>
                  <p className="text-sm text-green-700 dark:text-green-200">
                    Evite degustação quando doente, após refeições pesadas ou uso de produtos mentolados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
