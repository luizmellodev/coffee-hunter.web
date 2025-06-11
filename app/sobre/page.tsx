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
        description="Um pouco sobre mim e a jornada de criação deste site."
        icon={<Heart className="h-8 w-8 text-[#C38154]" />}
      />

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#884A39] dark:text-[#F9E0BB] mb-6">Minha História</h2>
              <div className="space-y-4 text-[#884A39]/80 dark:text-[#F9E0BB]/90">
                <p>
                  E aí! Sou o Luiz, um dev iOS que decidiu se aventurar no mundo do desenvolvimento web. Apaixonado por
                  café, estou atualmente tentando aprender latte art (com muitas tentativas frustradas, mas
                  persistindo!).
                </p>
                <p>
                  Sempre senti falta de ter um material completo e bem organizado sobre cafés especiais em português.
                  Então resolvi criar este site como um projeto pessoal, juntando conhecimentos de vários artigos,
                  canais no YouTube, perfis no Instagram e muitas conversas com especialistas.
                </p>
                <p>
                  Este projeto é uma forma de organizar o que aprendi e compartilhar com outros entusiastas. Não sou um
                  especialista, apenas alguém que ama café e quer aprender mais sobre esse universo fascinante.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -z-10 inset-0 bg-[#F9E0BB] dark:bg-[#C38154]/30 rounded-full blur-3xl opacity-40" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Desenvolvedor trabalhando com café"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-[#F9E0BB] mb-8 text-center">Agradecimentos</h3>

            <div className="space-y-6 text-[#884A39]/80 dark:text-[#F9E0BB]/90">
              <p className="text-center max-w-3xl mx-auto">
                Este site não seria possível sem a ajuda e conhecimento compartilhado por muitas pessoas. Gostaria de
                agradecer especialmente:
              </p>

              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-[#F9E0BB]/30 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="font-bold text-[#884A39] dark:text-[#F9E0BB] mb-2">João - Williams and Sons</h4>
                  <p className="text-sm">
                    Pelas conversas inspiradoras e pelo conhecimento compartilhado sobre o mundo dos cafés especiais (e pelo nome Coffee Hunter!).
                  </p>
                </div>

                <div className="bg-[#F9E0BB]/30 dark:bg-gray-700 p-6 rounded-xl">
                  <h4 className="font-bold text-[#884A39] dark:text-[#F9E0BB] mb-2">Cássio - Café ao Quadrado</h4>
                  <p className="text-sm">Pelos insights valiosos e pela paixão contagiante pelo café de qualidade.</p>
                </div>
              </div>

              <p className="text-center max-w-3xl mx-auto mt-6">
                E a todos os baristas, produtores, torrefadores e entusiastas que compartilham seu conhecimento online e
                pessoalmente.
              </p>
            </div>
          </div>

          <div className="bg-[#F9E0BB]/20 dark:bg-gray-800 p-8 rounded-xl shadow-md mb-16">
            <h3 className="text-2xl font-bold text-[#884A39] dark:text-[#F9E0BB] mb-6 text-center">Sobre o Conteúdo</h3>

            <div className="space-y-4 text-[#884A39]/80 dark:text-[#F9E0BB]/90 max-w-3xl mx-auto">
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

          <div className="bg-[#884A39] text-white dark:bg-gray-900 rounded-2xl p-8 shadow-md text-center">
            <h3 className="text-2xl font-bold mb-4">Entre em Contato</h3>
            <p className="max-w-2xl mx-auto mb-8">
              Tem alguma sugestão, correção ou apenas quer bater um papo sobre café? Ficarei feliz em ouvir de você!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                className="border-white text-white hover:bg-white/20 px-8 py-6 rounded-full"
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
