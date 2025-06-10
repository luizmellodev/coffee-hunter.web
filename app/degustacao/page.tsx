import Image from "next/image";
import {
  SnailIcon as Nose,
  Eye,
  LanguagesIcon as Tongue,
  Brain,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { InfoCard } from "@/components/info-card";

export default function DegustacaoPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Degustação de Café"
        description="Desenvolva seu paladar e aprenda a identificar as nuances sensoriais complexas dos cafés especiais."
        icon={<Nose className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                A Arte da Análise Sensorial
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  A degustação de café é uma habilidade que pode ser
                  desenvolvida por qualquer pessoa. Através da análise sensorial
                  sistemática, podemos identificar e apreciar as centenas de
                  compostos aromáticos e saborosos presentes no café especial.
                </p>
                <p>
                  O processo envolve todos os sentidos: visão para avaliar cor e
                  aparência, olfato para captar aromas, paladar para identificar
                  sabores, e até mesmo audição e tato para avaliar corpo e
                  textura. Cada sentido contribui para a experiência completa.
                </p>
                <p>
                  Desenvolver habilidades de degustação não apenas aumenta o
                  prazer de beber café, mas também ajuda a identificar
                  qualidade, origem e métodos de processamento, tornando cada
                  xícara uma experiência educativa.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Degustação profissional de café"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <InfoCard
              title="Aroma"
              description="Primeira impressão através do olfato, revelando compostos voláteis complexos."
              icon={<Nose className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Aparência"
              description="Avaliação visual da cor, clareza e presença de óleos ou sedimentos."
              icon={<Eye className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Sabor"
              description="Percepção gustativa dos cinco sabores básicos e suas interações."
              icon={<Tongue className="h-6 w-6 text-[#C38154]" />}
            />
            <InfoCard
              title="Memória"
              description="Desenvolvimento de biblioteca sensorial para comparações futuras."
              icon={<Brain className="h-6 w-6 text-[#C38154]" />}
            />
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Os Cinco Sentidos na Degustação
            </h3>

            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold text-purple-800 mb-4">
                    👁️ Visão
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded">
                      <h5 className="font-medium text-purple-800">Cor</h5>
                      <p className="text-sm text-purple-700">
                        Varia de dourado claro a marrom escuro, indicando torra
                        e concentração.
                      </p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded">
                      <h5 className="font-medium text-purple-800">Clareza</h5>
                      <p className="text-sm text-purple-700">
                        Transparência indica método de filtração e presença de
                        sedimentos.
                      </p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded">
                      <h5 className="font-medium text-purple-800">
                        Crema (Espresso)
                      </h5>
                      <p className="text-sm text-purple-700">
                        Cor, espessura e persistência indicam qualidade da
                        extração.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold text-blue-800 mb-4">
                    👃 Olfato
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded">
                      <h5 className="font-medium text-blue-800">Aroma Seco</h5>
                      <p className="text-sm text-blue-700">
                        Cheiro do café moído antes da adição de água.
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <h5 className="font-medium text-blue-800">Aroma Úmido</h5>
                      <p className="text-sm text-blue-700">
                        Liberado quando a água quente entra em contato com o
                        café.
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <h5 className="font-medium text-blue-800">
                        Retro-olfato
                      </h5>
                      <p className="text-sm text-blue-700">
                        Aromas percebidos através da cavidade nasal durante a
                        degustação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="text-xl font-bold text-red-800 mb-4">
                    👅 Paladar
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded">
                      <h5 className="font-medium text-red-800">Doce</h5>
                      <p className="text-sm text-red-700">
                        Açúcares naturais desenvolvidos durante crescimento e
                        torra.
                      </p>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <h5 className="font-medium text-red-800">Ácido</h5>
                      <p className="text-sm text-red-700">
                        Acidez brilhante que adiciona vivacidade e complexidade.
                      </p>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <h5 className="font-medium text-red-800">Amargo</h5>
                      <p className="text-sm text-red-700">
                        Cafeína e compostos da torra que adicionam estrutura.
                      </p>
                    </div>
                    <div className="p-3 bg-red-50 rounded">
                      <h5 className="font-medium text-red-800">
                        Salgado/Umami
                      </h5>
                      <p className="text-sm text-red-700">
                        Minerais do solo e processamento que adicionam
                        complexidade.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold text-green-800 mb-4">
                    🤲 Tato
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded">
                      <h5 className="font-medium text-green-800">Corpo</h5>
                      <p className="text-sm text-green-700">
                        Sensação de peso e textura na boca (leve, médio,
                        encorpado).
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                      <h5 className="font-medium text-green-800">
                        Adstringência
                      </h5>
                      <p className="text-sm text-green-700">
                        Sensação de secura causada por taninos.
                      </p>
                    </div>
                    <div className="p-3 bg-green-50 rounded">
                      <h5 className="font-medium text-green-800">
                        Temperatura
                      </h5>
                      <p className="text-sm text-green-700">
                        Diferentes temperaturas revelam aspectos distintos do
                        café.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3
                className="text-xl font-bold text-[#884A39] dark:text-white mb-4"
                id="cupping"
              >
                Protocolo de Cupping
              </h3>
              <p className="text-[#884A39] dark:text-white dark:text-white mb-4">
                Cupping é o método padrão internacional para avaliação sensorial
                de café:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    1. Preparação
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    8,25g de café moído grosso em xícara de 150ml. Água a 93°C.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    2. Avaliação do Aroma Seco
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Cheirar o café moído antes da adição de água.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    3. Infusão
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Adicionar água e aguardar 4 minutos sem mexer.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    4. Breaking
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Quebrar a crosta com colher e avaliar aroma liberado.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    5. Degustação
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Aspirar o café com colher em diferentes temperaturas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3
                className="text-xl font-bold text-[#884A39] dark:text-white mb-4"
                id="notas"
              >
                Roda de Sabores
              </h3>
              <p className="text-[#884A39] dark:text-white dark:text-white mb-4">
                Principais categorias de sabores encontrados no café:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <h4 className="font-medium text-yellow-800">🍋 Frutados</h4>
                  <p className="text-sm text-yellow-700">
                    Cítricos, frutas vermelhas, tropicais, frutas com caroço
                  </p>
                </div>
                <div className="p-3 bg-pink-50 border-l-4 border-pink-500 rounded">
                  <h4 className="font-medium text-pink-800">🌸 Florais</h4>
                  <p className="text-sm text-pink-700">
                    Jasmin, rosa, lavanda, bergamota, chá
                  </p>
                </div>
                <div className="p-3 bg-amber-50 border-l-4 border-amber-500 rounded">
                  <h4 className="font-medium text-amber-800">🍯 Doces</h4>
                  <p className="text-sm text-amber-700">
                    Mel, caramelo, açúcar mascavo, baunilha, maple
                  </p>
                </div>
                <div className="p-3 bg-orange-50 border-l-4 border-orange-500 rounded">
                  <h4 className="font-medium text-orange-800">
                    🥜 Nozes/Chocolate
                  </h4>
                  <p className="text-sm text-orange-700">
                    Amêndoa, avelã, chocolate ao leite, cacau, nougat
                  </p>
                </div>
                <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
                  <h4 className="font-medium text-green-800">🌿 Herbáceos</h4>
                  <p className="text-sm text-green-700">
                    Ervas frescas, capim, vegetais verdes
                  </p>
                </div>
                <div className="p-3 bg-gray-50 border-l-4 border-gray-500 rounded">
                  <h4 className="font-medium text-gray-800">🔥 Torrados</h4>
                  <p className="text-sm text-gray-700">
                    Defumado, torrado, carbônico, tabaco
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Desenvolvendo o Paladar
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-[#884A39] dark:text-white mb-4">
                  Exercícios Básicos
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h5 className="font-medium text-[#884A39] dark:text-white">
                      Comparação Direta
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Compare dois cafés lado a lado para identificar
                      diferenças.
                    </p>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h5 className="font-medium text-[#884A39] dark:text-white">
                      Degustação Cega
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Prove cafés sem saber origem para desenvolver percepção
                      pura.
                    </p>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h5 className="font-medium text-[#884A39] dark:text-white">
                      Triangulação
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Identifique o diferente entre três amostras (duas iguais,
                      uma diferente).
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#884A39] dark:text-white mb-4">
                  Calibração Sensorial
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h5 className="font-medium text-[#884A39] dark:text-white">
                      Referências
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Use alimentos conhecidos como referência para sabores.
                    </p>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h5 className="font-medium text-[#884A39] dark:text-white">
                      Concentração
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Pratique identificar diferentes intensidades do mesmo
                      sabor.
                    </p>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h5 className="font-medium text-[#884A39] dark:text-white">
                      Memória
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Mantenha diário de degustação para construir biblioteca
                      sensorial.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#884A39] dark:text-white mb-4">
                  Dicas Importantes
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h5 className="font-medium text-[#884A39] dark:text-white">
                      Horário
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Deguste pela manhã quando o paladar está mais sensível.
                    </p>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h5 className="font-medium text-[#884A39] dark:text-white">
                      Neutralização
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Use água entre amostras para limpar o paladar.
                    </p>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h5 className="font-medium text-[#884A39] dark:text-white">
                      Paciência
                    </h5>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Desenvolvimento do paladar é gradual e requer prática
                      constante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
