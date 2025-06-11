import Link from "next/link";
import { CoffeeIcon, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-t from-coffee-950 to-coffee-900 dark:from-coffee-950 dark:to-black text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <CoffeeIcon className="h-7 w-7 text-gold-400" />
              <span className="text-2xl font-serif font-semibold">
                Coffee Hunter
              </span>
            </div>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Seu guia completo para o mundo dos cafés especiais. Aprenda,
              explore e saboreie a excelência em cada xícara.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-6 text-gold-300">
              Conhecimento
            </h3>
            <div className="space-y-4">
              <Link
                href="/cafe-especial"
                className="block text-white/70 hover:text-gold-300 transition-colors"
              >
                Café Especial
              </Link>
              <Link
                href="/variedades"
                className="block text-white/70 hover:text-gold-300 transition-colors"
              >
                Variedades
              </Link>
              <Link
                href="/terroir"
                className="block text-white/70 hover:text-gold-300 transition-colors"
              >
                Terroir
              </Link>
              <Link
                href="/metodos"
                className="block text-white/70 hover:text-gold-300 transition-colors"
              >
                Métodos
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-6 text-gold-300">
              Comunidade
            </h3>
            <div className="space-y-4">
              <Link
                href="/visite-cafeterias"
                className="block text-white/70 hover:text-gold-300 transition-colors"
              >
                Cafeterias
              </Link>
              <Link
                href="/sobre"
                className="block text-white/70 hover:text-gold-300 transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/latte-art"
                className="block text-white/70 hover:text-gold-300 transition-colors"
              >
                Latte Art
              </Link>
              <Link
                href="/degustacao"
                className="block text-white/70 hover:text-gold-300 transition-colors"
              >
                Degustação
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} Coffee Hunter. Feito com{" "}
            <Heart className="inline h-4 w-4 text-red-400" /> para amantes de café.
          </p>
          <p className="text-white/50 text-sm mt-4 md:mt-0">
            Alguns direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
