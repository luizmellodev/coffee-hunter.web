import Image from "next/image";
import { Beaker, Droplets, Sun, Zap } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { InfoCard } from "@/components/info-card";

export default function ProcessamentoPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Processamento do Café"
        description="Explore os diferentes métodos de processamento e como cada um influencia o perfil sensorial final do café."
        icon={<Beaker className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                A Arte da Transformação
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  O processamento é a etapa que transforma o fruto do café
                  colhido em grão verde, pronto para a torra. Este processo é
                  fundamental para definir o perfil sensorial final da bebida,
                  influenciando acidez, doçura, corpo e complexidade aromática.
                </p>
                <p>
                  Existem três métodos principais de processamento: via úmida
                  (lavado), via seca (natural) e honey (descascado). Cada método
                  resulta em características sensoriais distintas, permitindo
                  que o mesmo café expresse diferentes personalidades.
                </p>
                <p>
                  A escolha do método depende de fatores como clima,
                  infraestrutura disponível, tradição local e o perfil sensorial
                  desejado pelo produtor e torrefador.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Processamento de café"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <InfoCard
              title="Via Úmida (Lavado)"
              description="Remoção da polpa antes da secagem, resultando em cafés limpos e com acidez brilhante."
              icon={<Droplets className="h-6 w-6 text-[#C38154]" />}
            >
              <div className="mt-4 space-y-2">
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Características:</strong>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Acidez brilhante e limpa</li>
                    <li>Corpo médio a leve</li>
                    <li>Sabores florais e frutados</li>
                    <li>Perfil mais "limpo"</li>
                  </ul>
                </div>
              </div>
            </InfoCard>

            <InfoCard
              title="Via Seca (Natural)"
              description="Secagem do fruto inteiro ao sol, criando cafés doces e frutados com corpo mais encorpado."
              icon={<Sun className="h-6 w-6 text-[#C38154]" />}
            >
              <div className="mt-4 space-y-2">
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Características:</strong>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Doçura intensa</li>
                    <li>Corpo encorpado</li>
                    <li>Notas frutadas complexas</li>
                    <li>Menor acidez</li>
                  </ul>
                </div>
              </div>
            </InfoCard>

            <InfoCard
              title="Honey (Descascado)"
              description="Híbrido entre lavado e natural, mantendo parte da mucilagem durante a secagem."
              icon={<Zap className="h-6 w-6 text-[#C38154]" />}
            >
              <div className="mt-4 space-y-2">
                <div className="text-sm text-[#884A39] dark:text-white dark:text-white">
                  <strong>Características:</strong>
                  <ul className="list-disc pl-4 mt-1">
                    <li>Equilíbrio entre doçura e acidez</li>
                    <li>Corpo médio</li>
                    <li>Complexidade aromática</li>
                    <li>Notas de mel e frutas</li>
                  </ul>
                </div>
              </div>
            </InfoCard>
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8">
              Processo Detalhado por Método
            </h3>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  Via Úmida (Washed/Lavado)
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Etapas do Processo:
                    </h5>
                    <ol className="list-decimal pl-4 space-y-1 text-sm text-[#884A39] dark:text-white dark:text-white">
                      <li>Despolpamento: remoção da casca e polpa</li>
                      <li>Fermentação: 12-48h em tanques com água</li>
                      <li>Lavagem: remoção da mucilagem fermentada</li>
                      <li>Secagem: em terreiros ou secadores mecânicos</li>
                      <li>Beneficiamento: remoção do pergaminho</li>
                    </ol>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Vantagens:
                    </h5>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-[#884A39] dark:text-white dark:text-white">
                      <li>Controle preciso da fermentação</li>
                      <li>Perfil sensorial consistente</li>
                      <li>Menor risco de defeitos</li>
                      <li>Secagem mais rápida</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-orange-500 pl-6">
                <h4 className="text-xl font-bold text-orange-800 mb-4">
                  Via Seca (Natural/Dry)
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Etapas do Processo:
                    </h5>
                    <ol className="list-decimal pl-4 space-y-1 text-sm text-[#884A39] dark:text-white dark:text-white">
                      <li>Seleção: separação de frutos maduros</li>
                      <li>Secagem: fruto inteiro ao sol (15-20 dias)</li>
                      <li>Revolvimento: 3-4 vezes ao dia</li>
                      <li>Monitoramento: umidade e temperatura</li>
                      <li>Descascamento: remoção de casca seca</li>
                    </ol>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Cuidados Especiais:
                    </h5>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-[#884A39] dark:text-white dark:text-white">
                      <li>Proteção contra chuva</li>
                      <li>Revolvimento constante</li>
                      <li>Controle de umidade (11-12%)</li>
                      <li>Seleção rigorosa de frutos</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-yellow-500 pl-6">
                <h4 className="text-xl font-bold text-yellow-800 mb-4">
                  Honey Process (Descascado)
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Variações do Honey:
                    </h5>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-[#884A39] dark:text-white dark:text-white">
                      <li>
                        <strong>White Honey:</strong> 80-100% mucilagem removida
                      </li>
                      <li>
                        <strong>Yellow Honey:</strong> 50-80% mucilagem removida
                      </li>
                      <li>
                        <strong>Red Honey:</strong> 25-50% mucilagem removida
                      </li>
                      <li>
                        <strong>Black Honey:</strong> 0-25% mucilagem removida
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-[#884A39] dark:text-white mb-2">
                      Fatores Críticos:
                    </h5>
                    <ul className="list-disc pl-4 space-y-1 text-sm text-[#884A39] dark:text-white dark:text-white">
                      <li>Controle da secagem</li>
                      <li>Prevenção de fermentação excessiva</li>
                      <li>Monitoramento da umidade</li>
                      <li>Tempo de secagem (10-15 dias)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Fermentação Controlada
              </h3>
              <p className="text-[#884A39] dark:text-white dark:text-white mb-4">
                Técnicas avançadas de fermentação estão revolucionando o
                processamento de cafés especiais:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Fermentação Anaeróbica
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Fermentação em ambiente sem oxigênio, criando perfis
                    sensoriais únicos e complexos.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Fermentação com Leveduras
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Inoculação de leveduras específicas para controlar e
                    direcionar o perfil sensorial.
                  </p>
                </div>
                <div className="p-3 bg-[#F9E0BB]/30 rounded">
                  <h4 className="font-medium text-[#884A39] dark:text-white">
                    Carbonic Maceration
                  </h4>
                  <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                    Técnica adaptada da vinicultura, criando cafés com notas
                    frutadas intensas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Controle de Qualidade
              </h3>
              <p className="text-[#884A39] dark:text-white dark:text-white mb-4">
                Parâmetros essenciais para garantir a qualidade durante o
                processamento:
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-[#F9E0BB]/30 rounded">
                  <span className="text-[#884A39] dark:text-white">
                    Umidade Final
                  </span>
                  <span className="font-medium text-[#C38154]">10.5-12%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#F9E0BB]/30 rounded">
                  <span className="text-[#884A39] dark:text-white">
                    Temperatura de Secagem
                  </span>
                  <span className="font-medium text-[#C38154]">{"<"} 40°C</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#F9E0BB]/30 rounded">
                  <span className="text-[#884A39] dark:text-white">
                    pH da Fermentação
                  </span>
                  <span className="font-medium text-[#C38154]">3.8-4.2</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#F9E0BB]/30 rounded">
                  <span className="text-[#884A39] dark:text-white">
                    Tempo de Fermentação
                  </span>
                  <span className="font-medium text-[#C38154]">12-48h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
