import Image from "next/image";
import { Heart, Coffee, BookOpen, Users } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Sobre o CaféSaber"
        description="Conheça nossa missão de compartilhar conhecimento e paixão pelo mundo dos cafés especiais."
        icon={<Heart className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-white mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-[#884A39] dark:text-white dark:text-white">
                <p>
                  O CaféSaber nasceu da paixão por compartilhar conhecimento
                  sobre o universo dos cafés especiais. Acreditamos que a
                  educação é o caminho para valorizar toda a cadeia do café,
                  desde o produtor até o consumidor final.
                </p>
                <p>
                  Nossa jornada começou com a percepção de que faltavam recursos
                  educativos acessíveis e completos em português sobre cafés
                  especiais. Decidimos criar uma plataforma que reunisse
                  informações técnicas precisas, mas apresentadas de forma
                  amigável e compreensível.
                </p>
                <p>
                  Hoje, o CaféSaber é um guia completo para entusiastas,
                  profissionais e curiosos que desejam aprofundar seus
                  conhecimentos sobre café especial, desde o cultivo até os
                  métodos de preparo mais refinados.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Equipe CaféSaber"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-white mb-8 text-center">
              Nossa Missão
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F9E0BB] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-[#C38154]" />
                </div>
                <h4 className="text-xl font-bold text-[#884A39] dark:text-white mb-3">
                  Educar
                </h4>
                <p className="text-[#884A39] dark:text-white dark:text-white">
                  Compartilhar conhecimento técnico e acessível sobre todos os
                  aspectos do café especial, desde a produção até o consumo.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#F9E0BB] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="h-8 w-8 text-[#C38154]" />
                </div>
                <h4 className="text-xl font-bold text-[#884A39] dark:text-white mb-3">
                  Inspirar
                </h4>
                <p className="text-[#884A39] dark:text-white dark:text-white">
                  Despertar a curiosidade e paixão pelo café especial,
                  incentivando a exploração de sabores, origens e métodos.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#F9E0BB] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-[#C38154]" />
                </div>
                <h4 className="text-xl font-bold text-[#884A39] dark:text-white mb-3">
                  Conectar
                </h4>
                <p className="text-[#884A39] dark:text-white dark:text-white">
                  Criar pontes entre consumidores, produtores e
                  estabelecimentos, fortalecendo a comunidade cafeeira.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Nossos Valores
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🔍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Precisão
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Compromisso com informações técnicas corretas e
                      atualizadas, baseadas em pesquisa e experiência.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🌱</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Sustentabilidade
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Valorização de práticas que respeitam o meio ambiente e
                      promovem justiça social na cadeia do café.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Comunidade
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Fomento ao senso de pertencimento e troca entre todos os
                      envolvidos no universo do café.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#F9E0BB] p-2 rounded-full">
                    <span className="text-sm">🎨</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Acessibilidade
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Apresentação do conhecimento de forma clara e acolhedora
                      para todos os níveis de experiência.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-white mb-4">
                Equipe
              </h3>
              <div className="space-y-4">
                <p className="text-[#884A39] dark:text-white dark:text-white">
                  Somos um grupo diverso de profissionais apaixonados por café,
                  incluindo:
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Baristas Certificados
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Com experiência em competições nacionais e internacionais.
                    </p>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Q-Graders
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Especialistas em avaliação sensorial e classificação de
                      cafés.
                    </p>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Agrônomos
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Focados em práticas sustentáveis de cultivo e
                      processamento.
                    </p>
                  </div>
                  <div className="p-3 bg-[#F9E0BB]/30 rounded">
                    <h4 className="font-medium text-[#884A39] dark:text-white">
                      Educadores
                    </h4>
                    <p className="text-sm text-[#884A39] dark:text-white dark:text-white">
                      Especialistas em traduzir conhecimento técnico em conteúdo
                      acessível.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#884A39] text-white rounded-2xl p-8 shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">
              Junte-se à Nossa Comunidade
            </h3>
            <p className="max-w-2xl mx-auto mb-8">
              Faça parte do movimento de valorização do café especial. Explore
              nosso conteúdo, visite cafeterias parceiras e compartilhe sua
              jornada no mundo do café.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white dark:bg-gray-950 text-[#884A39] dark:text-white hover:bg-[#F9E0BB] px-8 py-6 rounded-full"
              >
                <Link href="/visite-cafeterias">
                  <Coffee className="mr-2 h-5 w-5" />
                  Encontrar Cafeterias
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white dark:bg-gray-950/20 px-8 py-6 rounded-full"
              >
                <Link href="/">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Explorar Conteúdo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
