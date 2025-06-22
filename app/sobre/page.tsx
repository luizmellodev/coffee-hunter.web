"use client"
import Image from "next/image"
import { Heart, Mail, Instagram } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Sobre o Coffee Hunter"
        description="A história e o propósito por trás deste projeto."
        icon={<Heart className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12 items-start mb-16">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-[#F9E0BB] mb-6">O Projeto</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-[#F9E0BB]/90">
                <p>
                  O Coffee Hunter nasceu da necessidade de ter um material completo e bem organizado sobre cafés especiais em português.
                  A ideia é reunir conhecimentos de diversas fontes - artigos, canais no YouTube, perfis no Instagram e conversas com especialistas - em um único lugar,
                  de forma clara e acessível.
                </p>
                <p>
                  Este projeto é uma forma de organizar e compartilhar conhecimento com outros entusiastas. Não é um site comercial,
                  mas sim um espaço dedicado a quem quer aprender mais sobre o fascinante mundo do café especial.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src="/me.jpg"
                      fill
                      alt="Luiz Mello"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm">
                      Oi! Sou o Luiz, desenvolvedor iOS e entusiasta de café. Criei este site como um projeto pessoal para ajudar
                      outros amantes de café a encontrarem informações confiáveis em português. Atualmente estou tentando aprender
                      latte art (com muitas tentativas frustradas, mas persistindo!).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[#F9E0BB]/30 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-[#884A39] dark:text-[#F9E0BB] mb-4">Objetivos do Site</h3>
                <ul className="space-y-3 text-[#884A39]/80 dark:text-[#F9E0BB]/90">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#884A39] dark:bg-[#F9E0BB] rounded-full mt-2" />
                    <span>Fornecer informações confiáveis sobre café especial em português</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#884A39] dark:bg-[#F9E0BB] rounded-full mt-2" />
                    <span>Explicar conceitos complexos de forma clara e acessível</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#884A39] dark:bg-[#F9E0BB] rounded-full mt-2" />
                    <span>Ajudar consumidores a entenderem melhor o que estão comprando</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#884A39] dark:bg-[#F9E0BB] rounded-full mt-2" />
                    <span>Contribuir para a disseminação da cultura do café especial no Brasil</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-[#F9E0BB] mb-8 text-center">Agradecimentos Especiais</h3>

            <div className="space-y-8 text-[#884A39]/80 dark:text-[#F9E0BB]/90">
              <p className="text-center max-w-3xl mx-auto">
                Este site não seria possível sem a ajuda e conhecimento compartilhado por pessoas especiais que cruzaram meu caminho.
                Além de me ensinarem sobre café, me mostraram como a paixão pelo que fazemos pode transformar vidas.
              </p>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-[#F9E0BB]/30 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="font-bold text-[#884A39] dark:text-[#F9E0BB] mb-3">João - William and Sons</h4>
                  <p className="text-sm mb-4">
                    Por me introduzir ao mundo do café especial, pela amizade e conversas sobre o café e a vida.
                  </p>
                  <div className="bg-[#F9E0BB]/20 dark:bg-gray-600 p-4 rounded-lg">
                    <h5 className="font-medium text-[#884A39] dark:text-[#F9E0BB] mb-2 text-sm">William and Sons</h5>
                    <p className="text-xs">
                    Uma cafeteria e torrefação artesanal de Porto Alegre - RS. Tem um dos melhores pão de queijo que já experimentei.
                    </p>
                    <a 
                      href="https://instagram.com/williamsonscoffee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#884A39] dark:text-[#F9E0BB] mt-2 hover:underline"
                    >
                      <Instagram className="h-3 w-3" />
                      @williamsonscoffee
                    </a>
                  </div>
                </div>

                <div className="bg-[#F9E0BB]/30 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="font-bold text-[#884A39] dark:text-[#F9E0BB] mb-3">Cássio - Café ao Quadrado</h4>
                  <p className="text-sm mb-4">
                    Pelas incontáveis aulas sobre café especial, pela grande amizade, conversas, carinho e pela paixão contagiante sobre cafés!
                  </p>
                  <div className="bg-[#F9E0BB]/20 dark:bg-gray-600 p-4 rounded-lg">
                    <h5 className="font-medium text-[#884A39] dark:text-[#F9E0BB] mb-2 text-sm">Café ao Quadrado</h5>
                    <p className="text-xs">
                    A primeira cafeteria do litoral gaúcho, localizada em Tramandaí - RS, a trabalhar com cafés especiais e métodos de preparos. O melhor lugar pra aprender sobre cafés especiais e criar amizades.
                    </p>
                    <a 
                      href="https://instagram.com/cafeao2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#884A39] dark:text-[#F9E0BB] mt-2 hover:underline"
                    >
                      <Instagram className="h-3 w-3" />
                      @cafeao2
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-center max-w-3xl mx-auto mt-8">
                E a todos os baristas, produtores, torrefadores e entusiastas que compartilham seu conhecimento e paixão,
                contribuindo para um mundo do café mais rico e acessível.
              </p>
            </div>
          </div>

          <div className="bg-[#884A39] text-white dark:bg-gray-90 p-8 rounded-xl shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#F9E0BB] dark:text-[#F9E0BB] mb-6 text-center">Sobre o Conteúdo</h3>

            <div className="space-y-4 text-[#F9E0BB] dark:text-[#F9E0BB]/90 max-w-3xl mx-auto">
              <p>
                O conteúdo deste site foi compilado de diversas fontes, incluindo artigos, livros, vídeos e conversas
                com profissionais do café. Embora eu tenha me esforçado para garantir a precisão das informações, posso
                ter cometido erros ou imprecisões.
              </p>

              <p>
                Se você encontrar alguma informação incorreta ou tiver sugestões para melhorar o conteúdo, por favor,
                entre em contato. Estou sempre aberto a aprender mais e corrigir qualquer erro.
              </p>

              <p>
                Este é um projeto em constante evolução, e novas seções e informações serão adicionadas regularmente.
              </p>
            </div>
          </div>

          <div className="bg-[#F9E0BB]/20 dark:bg-gray-800 text-black dark:text-white rounded-2xl p-8 shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Entre em Contato</h3>
            <p className="max-w-2xl mx-auto mb-8">
              Tem alguma sugestão, correção ou apenas quer bater um papo sobre café? Ficarei feliz em ouvir de você!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                asChild
                variant="outline"
                className="border-white text-black dark:text-white hover:bg-white/20 px-8 py-6 rounded-full"
              >
                <Link href="https://luizmello.dev" target="_blank" rel="noopener noreferrer">
                  Meu Site
                </Link>
              </Button>
              <Button
                asChild
                className="bg-white text-[#884A39] hover:bg-[#F9E0BB] dark:hover:bg-[#F9E0BB]/80 px-8 py-6 rounded-full"
              >
                <Link href="https://instagram.com/luizdudu" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-black dark:text-white hover:bg-white/20 px-8 py-6 rounded-full"
              >
                <Link href="mailto:contato@luizmello.dev">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
