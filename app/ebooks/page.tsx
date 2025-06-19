"use client"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, Star, Users, Clock, Heart, Brain, Coffee } from "lucide-react"
import Link from "next/link"
import { createCheckoutSession } from "@/lib/stripe"
import { useState } from "react"
import { useRouter } from "next/navigation"

// Variável para controlar a visibilidade do overlay
const SHOW_COMING_SOON = true;

export default function Ebooks() {
  const router = useRouter();
  const ebooks = [
    {
      id: "guia-definitivo",
      titulo: "O Guia Definitivo do Café Especial",
      subtitulo: "Tudo que você precisa saber para se tornar um especialista",
      preco: "R$ 47,90",
      precoOriginal: "R$ 67,90",
      descricao:
        "Um guia completo e prático que vai te levar do básico ao avançado no mundo do café especial. Mais de 150 páginas com conteúdo exclusivo, receitas testadas e dicas profissionais.",
      destaque: "Mais Completo",
      paginas: "150+",
      capitulos: "12",
      bonus: ["Planilha de Degustação", "Guia de Receitas", "Vídeos Exclusivos"],
      topicos: [
        "História e origem do café especial",
        "Como escolher grãos de qualidade",
        "Métodos de preparo detalhados",
        "Técnicas de degustação profissional",
        "Montando sua cafeteria em casa",
        "Troubleshooting: resolvendo problemas",
      ],
      icon: <Coffee className="h-6 w-6" />,
      cor: "from-coffee-600 to-coffee-700",
    },
    {
      id: "100-perguntas",
      titulo: "100 Perguntas Sobre Café Especial",
      subtitulo: "E Respostas Práticas para o Dia a Dia",
      preco: "R$ 29,90",
      precoOriginal: "R$ 39,90",
      descricao:
        "As perguntas mais frequentes sobre café especial respondidas de forma clara e objetiva. Ideal para consultas rápidas e aprendizado contínuo.",
      destaque: "Mais Prático",
      paginas: "80+",
      capitulos: "10",
      bonus: ["Glossário Ilustrado", "Checklist do Barista"],
      topicos: [
        "Dúvidas sobre equipamentos",
        "Problemas na extração",
        "Escolha e armazenamento de grãos",
        "Técnicas de preparo",
        "Manutenção de equipamentos",
        "Dicas de economia e sustentabilidade",
      ],
      icon: <Brain className="h-6 w-6" />,
      cor: "from-blue-600 to-blue-700",
    },
    {
      id: "cafe-com-emocao",
      titulo: "Café com Emoção",
      subtitulo: "Rituais, Histórias e Sensações",
      preco: "R$ 19,90",
      precoOriginal: "R$ 29,90",
      descricao:
        "Uma jornada sensorial e emocional pelo universo do café. Capítulos curtos e poéticos sobre momentos especiais, rituais e o lado humano do café. Perfeito como presente.",
      destaque: "Mais Sensorial",
      paginas: "60+",
      capitulos: "15",
      bonus: ["Playlist Exclusiva", "Cartões de Presente"],
      topicos: [
        "O ritual matinal perfeito",
        "Café e memórias afetivas",
        "Momentos de pausa e reflexão",
        "A arte de compartilhar café",
        "Viagens através dos aromas",
        "Café como linguagem do amor",
      ],
      icon: <Heart className="h-6 w-6" />,
      cor: "from-rose-600 to-rose-700",
    },
  ]

  const EbookCard = ({ ebook }: { ebook: any }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handlePurchase = async () => {
      try {
        setIsLoading(true);
        
        // Using mock checkout session for now
        await createCheckoutSession(ebook.id, ebook.preco);
        
        // In development, just redirect to success page
        router.push('/ebooks/success');
      } catch (error) {
        console.error('Error:', error);
        alert('Ocorreu um erro ao processar o pagamento. Por favor, tente novamente.');
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-accent/5 overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-3">
            <Badge variant="secondary" className="bg-coffee-100 text-coffee-800 dark:bg-coffee-800 dark:text-coffee-100">
              {ebook.destaque}
            </Badge>
            <div className={`p-2 bg-gradient-to-r ${ebook.cor} rounded-lg text-white`}>{ebook.icon}</div>
          </div>

          <div className="aspect-[3/4] bg-gradient-to-br from-coffee-50 to-coffee-100 dark:from-coffee-900 dark:to-coffee-800 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
            <div className="text-center z-10">
              <BookOpen className="h-16 w-16 text-coffee-600 dark:text-coffee-400 mx-auto mb-2" />
              <div className="text-xs text-coffee-700 dark:text-coffee-300 font-medium">{ebook.paginas} páginas</div>
            </div>
          </div>

          <CardTitle className="text-xl font-serif group-hover:text-coffee-700 dark:group-hover:text-coffee-300 transition-colors leading-tight">
            {ebook.titulo}
          </CardTitle>
          <CardDescription className="text-sm font-medium text-coffee-600 dark:text-coffee-400">
            {ebook.subtitulo}
          </CardDescription>
          <p className="text-sm text-muted-foreground leading-relaxed mt-2">{ebook.descricao}</p>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{ebook.paginas}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{ebook.capitulos} capítulos</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">O que você vai aprender:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {ebook.topicos.slice(0, 3).map((topico: string, index: number) => (
                  <li key={`${ebook.id}-topico-${index}`} className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-coffee-600 dark:bg-coffee-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{topico}</span>
                  </li>
                ))}
                <li className="text-coffee-600 dark:text-coffee-400 font-medium">
                  + {ebook.topicos.length - 3} tópicos adicionais
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Bônus inclusos:</h4>
              <div className="flex flex-wrap gap-1">
                {ebook.bonus.map((bonus: string, index: number) => (
                  <Badge key={`${ebook.id}-bonus-${index}`} variant="outline" className="text-xs">
                    {bonus}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-coffee-700 dark:text-coffee-300">{ebook.preco}</span>
            <span className="text-sm text-muted-foreground line-through">{ebook.precoOriginal}</span>
          </div>

          <Button
            className={`w-full bg-gradient-to-r ${ebook.cor} hover:opacity-90 text-white border-0 rounded-full`}
            size="lg"
            onClick={handlePurchase}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processando...
              </div>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Comprar Agora
              </>
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-2">Download imediato após o pagamento</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 relative">
      {SHOW_COMING_SOON && (
        <>
          <div className="bg-gradient-to-r from-coffee-700 to-coffee-800 dark:from-coffee-800 dark:to-coffee-900 text-white py-3 sticky top-14 md:top-16 z-50">
            <div className="container">
              <div className="flex items-center justify-center gap-2">
                <div className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">Em Breve</div>
                <p className="text-sm text-white/90">Nossa loja de e-books está chegando...</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[8px] z-40" />
        </>
      )}
      <div className={SHOW_COMING_SOON ? "relative pointer-events-none opacity-50" : ""}>
        <PageHeader
          title="E-books Exclusivos"
          description="Conhecimento especializado em café especial para levar seu aprendizado ao próximo nível. Conteúdo prático, testado e aprovado por especialistas."
        />

        <div className="container py-8 md:py-12">
          {/* Seção de benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-coffee-50 to-coffee-100 dark:from-coffee-900 dark:to-coffee-800 rounded-xl">
              <Download className="h-8 w-8 text-coffee-600 dark:text-coffee-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Download Imediato</h3>
              <p className="text-sm text-muted-foreground">
                Acesso instantâneo após o pagamento. Sem espera, sem complicação.
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Suporte Exclusivo</h3>
              <p className="text-sm text-muted-foreground">Tire suas dúvidas diretamente com nossos especialistas.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl">
              <Star className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Garantia Total</h3>
              <p className="text-sm text-muted-foreground">30 dias de garantia. Não gostou? Devolvemos seu dinheiro.</p>
            </div>
          </div>

          {/* Grid de e-books */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {ebooks.map((ebook) => (
              <EbookCard key={ebook.id} ebook={ebook} />
            ))}
          </div>

          {/* Seção de depoimentos */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-center text-gradient mb-8">
              O que nossos leitores dizem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  nome: "Maria Silva",
                  depoimento:
                    "O Guia Definitivo transformou completamente minha relação com o café. Agora preparo cafés incríveis em casa!",
                  ebook: "Guia Definitivo",
                },
                {
                  nome: "João Santos",
                  depoimento:
                    "As 100 perguntas salvaram minha vida! Sempre consulto quando tenho dúvidas. Super prático e direto ao ponto.",
                  ebook: "100 Perguntas",
                },
                {
                  nome: "Ana Costa",
                  depoimento:
                    "Café com Emoção é poesia pura. Dei de presente para minha mãe e ela ficou emocionada. Lindo demais!",
                  ebook: "Café com Emoção",
                },
              ].map((depoimento, index) => (
                <Card key={index} className="border-0 bg-gradient-to-br from-background to-accent/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 italic">"{depoimento.depoimento}"</p>
                    <div>
                      <p className="font-semibold text-sm">{depoimento.nome}</p>
                      <p className="text-xs text-muted-foreground">Leitor do {depoimento.ebook}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action Final */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-coffee-50 to-coffee-100 dark:from-coffee-900 dark:to-coffee-800 rounded-2xl p-8 md:p-12">
              <BookOpen className="h-12 w-12 text-coffee-600 dark:text-coffee-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gradient mb-4">
                Pronto para elevar seu conhecimento?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Junte-se a mais de 1.000 pessoas que já transformaram sua relação com o café através dos nossos e-books.
                Conhecimento que vale para a vida toda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-coffee-700 to-coffee-800 hover:from-coffee-800 hover:to-coffee-900 dark:from-coffee-300 dark:to-coffee-200 dark:text-coffee-900 text-white border-0 rounded-full px-8"
                >
                  Ver Todos os E-books
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                  <Link href="/sobre">Falar com Especialista</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
