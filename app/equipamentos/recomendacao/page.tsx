"use client"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Award, Zap, Coffee, Filter } from "lucide-react"
import Link from "next/link"

// Variável para controlar a visibilidade do overlay
const SHOW_COMING_SOON = true;

export default function EquipamentosIndicados() {
  const equipamentos = [
    {
      categoria: "Moedores",
      icon: <Coffee className="h-5 w-5" />,
      produtos: [
        {
          nome: "Moedor Hario Mini Mill Slim",
          preco: "R$ 189,90",
          precoOriginal: "R$ 229,90",
          descricao: "Moedor manual compacto, perfeito para iniciantes. Moagem consistente para métodos de filtro.",
          rating: 4.5,
          reviews: 1247,
          destaque: "Mais Vendido",
          amazonLink: "#",
          mercadoLivreLink: "#",
          imagem: "/placeholder.svg?height=200&width=200",
        },
        {
          nome: "Moedor Elétrico Oster OMDR100",
          preco: "R$ 299,90",
          precoOriginal: "R$ 349,90",
          descricao: "Moedor elétrico com lâminas de aço inox. Ideal para quem busca praticidade no dia a dia.",
          rating: 4.2,
          reviews: 892,
          destaque: "Custo-Benefício",
          amazonLink: "#",
          mercadoLivreLink: "#",
          imagem: "/placeholder.svg?height=200&width=200",
        },
        {
          nome: "Moedor Timemore C2",
          preco: "R$ 459,90",
          precoOriginal: "R$ 529,90",
          descricao: "Moedor manual premium com rebarbas cônicas. Moagem uniforme para todos os métodos.",
          rating: 4.8,
          reviews: 634,
          destaque: "Premium",
          amazonLink: "#",
          mercadoLivreLink: "#",
          imagem: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      categoria: "Métodos de Filtro",
      icon: <Filter className="h-5 w-5" />,
      produtos: [
        {
          nome: "Hario V60 Kit Completo",
          preco: "R$ 129,90",
          precoOriginal: "R$ 159,90",
          descricao: "Kit completo com dripper, filtros e servidor. Tudo que você precisa para começar.",
          rating: 4.7,
          reviews: 2156,
          destaque: "Kit Completo",
          amazonLink: "#",
          mercadoLivreLink: "#",
          imagem: "/placeholder.svg?height=200&width=200",
        },
        {
          nome: "Chemex Classic 6 Xícaras",
          preco: "R$ 389,90",
          precoOriginal: "R$ 449,90",
          descricao: "O icônico Chemex de vidro borossilicato. Design elegante e café limpo e aromático.",
          rating: 4.6,
          reviews: 743,
          destaque: "Design Icônico",
          amazonLink: "#",
          mercadoLivreLink: "#",
          imagem: "/placeholder.svg?height=200&width=200",
        },
        {
          nome: "AeroPress Original",
          preco: "R$ 249,90",
          precoOriginal: "R$ 289,90",
          descricao: "O revolucionário AeroPress. Café encorpado em apenas 1 minuto. Inclui 350 filtros.",
          rating: 4.8,
          reviews: 3421,
          destaque: "Revolucionário",
          amazonLink: "#",
          mercadoLivreLink: "#",
          imagem: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      categoria: "Máquinas de Espresso",
      icon: <Zap className="h-5 w-5" />,
      produtos: [
        {
          nome: "Cafeteira Italiana Bialetti Moka Express",
          preco: "R$ 179,90",
          precoOriginal: "R$ 219,90",
          descricao: "A clássica cafeteira italiana. Café forte e aromático no fogão. Disponível em vários tamanhos.",
          rating: 4.4,
          reviews: 1876,
          destaque: "Clássica",
          amazonLink: "#",
          mercadoLivreLink: "#",
          imagem: "/placeholder.svg?height=200&width=200",
        },
        {
          nome: "Máquina de Espresso Oster Prima Latte",
          preco: "R$ 899,90",
          precoOriginal: "R$ 1.199,90",
          descricao: "Máquina semiautomática com vaporizador. Espresso autêntico e cappuccinos cremosos em casa.",
          rating: 4.3,
          reviews: 567,
          destaque: "Semiautomática",
          amazonLink: "#",
          mercadoLivreLink: "#",
          imagem: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      categoria: "Acessórios Essenciais",
      icon: <Award className="h-5 w-5" />,
      produtos: [
        {
          nome: "Balança Digital de Precisão",
          preco: "R$ 89,90",
          precoOriginal: "R$ 119,90",
          descricao: "Balança com precisão de 0,1g e timer integrado. Essencial para receitas consistentes.",
          rating: 4.5,
          reviews: 1432,
          destaque: "Essencial",
          amazonLink: "#",
          mercadoLivreLink: "#",
          imagem: "/placeholder.svg?height=200&width=200",
        },
        {
          nome: "Chaleira Gooseneck Hario Buono",
          preco: "R$ 259,90",
          precoOriginal: "R$ 299,90",
          descricao: "Chaleira com bico de ganso para controle preciso do fluxo. Ideal para métodos de filtro.",
          rating: 4.7,
          reviews: 892,
          destaque: "Controle Preciso",
          amazonLink: "#",
          mercadoLivreLink: "#",
          imagem: "/placeholder.svg?height=200&width=200",
        },
        {
          nome: "Termômetro Digital Instantâneo",
          preco: "R$ 49,90",
          precoOriginal: "R$ 69,90",
          descricao: "Termômetro digital com leitura rápida. Temperatura ideal para cada método de preparo.",
          rating: 4.3,
          reviews: 654,
          destaque: "Leitura Rápida",
          amazonLink: "#",
          mercadoLivreLink: "#",
          imagem: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
  ]

  const ProductCard = ({ produto }: { produto: any }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-accent/5">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="bg-coffee-100 text-coffee-800 dark:bg-coffee-800 dark:text-coffee-100">
            {produto.destaque}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{produto.rating}</span>
            <span>({produto.reviews})</span>
          </div>
        </div>
        <div className="aspect-square bg-gradient-to-br from-coffee-50 to-coffee-100 dark:from-coffee-900 dark:to-coffee-800 rounded-lg mb-4 flex items-center justify-center">
          <img src={produto.imagem || "/placeholder.svg"} alt={produto.nome} className="w-32 h-32 object-contain" />
        </div>
        <CardTitle className="text-lg font-serif group-hover:text-coffee-700 dark:group-hover:text-coffee-300 transition-colors">
          {produto.nome}
        </CardTitle>
        <CardDescription className="text-sm leading-relaxed">{produto.descricao}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-coffee-700 dark:text-coffee-300">{produto.preco}</span>
          <span className="text-sm text-muted-foreground line-through">{produto.precoOriginal}</span>
        </div>
        <div className="flex gap-2">
          <Button
            asChild
            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0"
          >
            <Link href={produto.amazonLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Amazon
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-950"
          >
            <Link href={produto.mercadoLivreLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Mercado Livre
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 relative">
      {SHOW_COMING_SOON && (
        <>
          <div className="bg-gradient-to-r from-coffee-700 to-coffee-800 dark:from-coffee-800 dark:to-coffee-900 text-white py-3 sticky top-14 md:top-16 z-50">
            <div className="container">
              <div className="flex items-center justify-center gap-2">
                <div className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium">Em Breve</div>
                <p className="text-sm text-white/90">Nossa seção de equipamentos recomendados está chegando...</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[8px] z-40" />
        </>
      )}
      <div className={SHOW_COMING_SOON ? "relative pointer-events-none opacity-50" : ""}>
        <PageHeader
          title="Equipamentos Indicados"
          description="Nossa seleção cuidadosa dos melhores equipamentos para café especial. Links de afiliado que ajudam a manter o site funcionando."
        />

        <div className="container py-8 md:py-12">
          {/* Aviso sobre links de afiliado */}
          <div className="mb-8 p-4 bg-coffee-50 dark:bg-coffee-950 border border-coffee-200 dark:border-coffee-800 rounded-xl">
            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-coffee-600 dark:text-coffee-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-coffee-800 dark:text-coffee-200 mb-1">Transparência Total</h3>
                <p className="text-sm text-coffee-700 dark:text-coffee-300 leading-relaxed">
                  Os links abaixo são links de afiliado. Quando você compra através deles, recebemos uma pequena comissão
                  que nos ajuda a manter o Coffee Hunter funcionando, sem custo adicional para você. Recomendamos apenas
                  produtos que realmente usamos e confiamos.
                </p>
              </div>
            </div>
          </div>

          {equipamentos.map((categoria, index) => (
            <div key={index} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-coffee-100 dark:bg-coffee-800 rounded-lg">{categoria.icon}</div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gradient">{categoria.categoria}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoria.produtos.map((produto, produtoIndex) => (
                  <ProductCard key={produtoIndex} produto={produto} />
                ))}
              </div>
            </div>
          ))}

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-coffee-50 to-coffee-100 dark:from-coffee-900 dark:to-coffee-800 rounded-2xl p-8 md:p-12">
              <Coffee className="h-12 w-12 text-coffee-600 dark:text-coffee-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gradient mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Entre em contato conosco! Estamos sempre atualizando nossa lista com os melhores equipamentos do mercado e
                adoraríamos ajudar você a encontrar o equipamento perfeito.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-coffee-700 to-coffee-800 hover:from-coffee-800 hover:to-coffee-900 dark:from-coffee-300 dark:to-coffee-200 dark:text-coffee-900 text-white border-0 rounded-full px-8"
              >
                <Link href="/sobre">Entre em Contato</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
