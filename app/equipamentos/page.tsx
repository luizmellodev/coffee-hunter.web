import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Coffee, Settings, Droplets, Scale, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"

export default function EquipamentosPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Guia de Equipamentos para Café"
        description="Conheça os equipamentos essenciais para preparar café especial em casa, desde máquinas de espresso até métodos manuais."
        icon={<Coffee className="h-8 w-8 text-[#C38154]" />}
      />

      {/* Introdução */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Equipamentos Essenciais</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
            A escolha dos equipamentos certos pode transformar completamente sua experiência com café. Cada método de
            preparo exige ferramentas específicas que influenciam diretamente o resultado final na xícara.
          </p>
          <p>
            Neste guia, apresentamos os principais equipamentos para diferentes métodos de preparo, com recomendações
            para todos os níveis de experiência e orçamentos. Lembre-se que o mais importante é encontrar equipamentos
            que se adequem ao seu estilo de vida, preferências de sabor e nível de envolvimento com o café.
          </p>
        </div>
        </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
            <Image
                src="/equipments.webp"
                width={500}
                height={400}
                alt="Equipamentos para café"
                className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-[#C38154]" />
              </div>
              <h3 className="text-lg font-bold text-[#884A39] dark:text-amber-300 mb-2">Moedores</h3>
              <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                Consistência na moagem é fundamental para extração perfeita.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-[#C38154]" />
            </div>
              <h3 className="text-lg font-bold text-[#884A39] dark:text-amber-300 mb-2">Máquinas de Espresso</h3>
              <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                Pressão e temperatura controladas para extração ideal.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Droplets className="h-6 w-6 text-[#C38154]" />
            </div>
              <h3 className="text-lg font-bold text-[#884A39] dark:text-amber-300 mb-2">Métodos de Filtro</h3>
              <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                Clareza e complexidade em cada gota de café.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-[#C38154]" />
              </div>
              <h3 className="text-lg font-bold text-[#884A39] dark:text-amber-300 mb-2">Acessórios</h3>
              <p className="text-sm text-[#884A39]/80 dark:text-amber-100/80">
                Ferramentas essenciais para precisão e consistência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Índice */}
      <section className="py-16 bg-accent/20">
        <div className="container max-w-5xl">
          <h2 className="text-2xl font-bold text-[#884A39] dark:text-amber-300 mb-8">Nesta página</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="#moedores"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                  <Settings className="h-5 w-5 text-[#C38154]" />
          </div>
                <span className="font-medium text-[#884A39] dark:text-amber-300">Moedores</span>
        </div>
            </Link>

            <Link
              href="#espresso"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                  <Coffee className="h-5 w-5 text-[#C38154]" />
        </div>
                <span className="font-medium text-[#884A39] dark:text-amber-300">Máquinas de Espresso</span>
          </div>
            </Link>

            <Link
              href="#metodos-filtro"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-[#C38154]" />
                </div>
                <span className="font-medium text-[#884A39] dark:text-amber-300">Métodos de Filtro</span>
              </div>
            </Link>

            <Link
              href="#metodos-imersao"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#C38154]" />
                </div>
                <span className="font-medium text-[#884A39] dark:text-amber-300">Métodos de Imersão</span>
              </div>
            </Link>

            <Link
              href="#acessorios"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                  <Scale className="h-5 w-5 text-[#C38154]" />
                </div>
                <span className="font-medium text-[#884A39] dark:text-amber-300">Acessórios Essenciais</span>
              </div>
            </Link>

            <Link
              href="#manutencao"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#F9E0BB]/30 dark:bg-amber-900/30 rounded-full p-2 w-10 h-10 flex items-center justify-center">
                  <Settings className="h-5 w-5 text-[#C38154]" />
                </div>
                <span className="font-medium text-[#884A39] dark:text-amber-300">Manutenção e Cuidados</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Moedores */}
      <section id="moedores" className="py-16">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Moedores</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  O moedor é um dos equipamentos mais importantes para preparar café especial. A consistência da moagem
                  afeta diretamente a extração e, consequentemente, o sabor final do café.
              </p>
              <p>
                  Existem dois tipos principais de moedores: os de lâminas e os de mós. Os moedores de mós são
                  preferidos por baristas e entusiastas por oferecerem maior consistência na moagem.
              </p>
            </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/grinders.jpg"
                width={500}
                height={400}
                alt="Moedor de café"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Moedores de Mós</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Maior consistência na moagem</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Ajuste preciso do tamanho da moagem</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Menor geração de calor durante a moagem</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Maior durabilidade</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Moedores de Lâminas</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Preço mais acessível</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Compactos e portáteis</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Fácil de limpar</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Bons para iniciantes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Máquinas de Espresso */}
      <section id="espresso" className="py-16 bg-accent/20">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Máquinas de Espresso</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  As máquinas de espresso são equipamentos sofisticados que utilizam pressão para extrair o café. Elas
                  podem variar desde modelos manuais até máquinas superautomáticas.
                </p>
                <p>
                  A escolha da máquina ideal depende do seu nível de experiência, orçamento e quantidade de café que
                  pretende preparar diariamente.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/espresso.jpg"
                width={500}
                height={400}
                alt="Máquina de espresso"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Máquinas Manuais</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Controle total sobre a extração</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Preço mais acessível</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Portáteis e compactas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Ideal para iniciantes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Máquinas Semi-Automáticas</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Bom equilíbrio entre controle e praticidade</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Preparo mais rápido</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Ideal para uso diário</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Ótima para entusiastas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Métodos de Filtro */}
      <section id="metodos-filtro" className="py-16">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Métodos de Filtro</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  Os métodos de filtro são conhecidos por produzirem cafés limpos e complexos, destacando as nuances
                  aromáticas dos grãos. São ideais para apreciar a origem e características do café.
              </p>
              <p>
                  Cada método tem suas particularidades e pode destacar diferentes aspectos do café, desde a doçura até a
                  acidez e corpo.
              </p>
            </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/v60.jpg"
                width={500}
                height={400}
                alt="Método V60"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">V60</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Café limpo e complexo</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Destaque para acidez e doçura</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Controle total sobre a extração</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Ideal para cafés especiais</span>
                </li>
              </ul>
        </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Chemex</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Café extremamente limpo</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Filtro mais espesso</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Design icônico</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Perfeito para compartilhar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Métodos de Imersão */}
      <section id="metodos-imersao" className="py-16 bg-accent/20">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Métodos de Imersão</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  Os métodos de imersão são conhecidos por sua simplicidade e consistência. O café fica em contato
                  direto com a água por um período determinado, resultando em bebidas encorpadas e ricas em sabor.
              </p>
              <p>
                  São ideais para iniciantes e para quem busca praticidade sem abrir mão da qualidade do café.
              </p>
            </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/frenchpress.jpg"
                width={500}
                height={400}
                alt="Cafeteira Francesa"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">French Press</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Café encorpado e rico</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Fácil de usar</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Versátil e durável</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Ideal para iniciantes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">AeroPress</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Versátil e portátil</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Rápido e prático</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Fácil de limpar</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Perfeito para viagens</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Acessórios */}
      <section id="acessorios" className="py-16">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Acessórios Essenciais</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  Além dos equipamentos principais, existem acessórios que podem melhorar significativamente a qualidade
                  do seu café e a experiência de preparo.
                </p>
                <p>
                  Estes itens ajudam a garantir consistência, precisão e praticidade no dia a dia.
                </p>
          </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/accessories.jpg"
                width={500}
                height={400}
                alt="Acessórios para café"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Medição e Pesagem</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Balança de precisão</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Termômetro</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Cronômetro</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Xícaras graduadas</span>
                </li>
              </ul>
          </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Utensílios</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Chaleira com bico fino</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Colher dosadora</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Pincel para limpeza</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Filtros de papel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Manutenção */}
      <section id="manutencao" className="py-16 bg-accent/20">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-amber-300 mb-6">Manutenção e Cuidados</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-amber-100/90">
                <p>
                  A manutenção adequada dos equipamentos é essencial para garantir a qualidade do café e a durabilidade
                  dos equipamentos.
                </p>
                <p>
                  Cada tipo de equipamento requer cuidados específicos, mas alguns princípios básicos se aplicam a todos.
          </p>
        </div>
                </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-amber-900/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/cleaner.jpeg"
                width={500}
                height={400}
                alt="Manutenção de equipamentos"
                className="rounded-2xl shadow-lg"
              />
                </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Limpeza Regular</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Limpe após cada uso</span>
              </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Use produtos específicos</span>
              </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Seque completamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Verifique filtros</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-[#884A39] dark:text-amber-300 mb-4">Manutenção Preventiva</h3>
              <ul className="space-y-3 text-[#884A39]/80 dark:text-amber-100/90">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Calibração periódica</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Troca de peças</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Verificação de vazamentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C38154] mt-2"></div>
                  <span>Assistência técnica</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
