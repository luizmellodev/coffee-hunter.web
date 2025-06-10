"use client";

import Link from "next/link";
import { useState } from "react";
import { CoffeeIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-effect">
      <div className="container flex h-14 md:h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="relative">
            <CoffeeIcon className="h-6 w-6 md:h-7 md:w-7 text-coffee-700 dark:text-coffee-300 transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-coffee-700 dark:bg-coffee-300 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
          </div>
          <span className="text-lg md:text-xl font-serif font-semibold text-gradient">
            Coffee Hunter
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className="relative group">
            <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
              Fundamentos
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 glass-effect rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
              <Link
                href="/cafe-especial"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                O que é Café Especial
              </Link>
              <Link
                href="/variedades"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                Variedades
              </Link>
              <Link
                href="/terroir"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                Terroir
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
              Produção
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 glass-effect rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
              <Link
                href="/colheita"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                Colheita
              </Link>
              <Link
                href="/processamento"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                Processamento
              </Link>
              <Link
                href="/torra"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                Torra
              </Link>
              <Link
                href="/armazenamento"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                Armazenamento
              </Link>
            </div>
          </div>

          <div className="relative group">
            <Link
              href="/metodos"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
            >
              Métodos
            </Link>
            <div className="absolute top-full left-0 mt-2 w-56 glass-effect rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
              <Link
                href="/metodos/espresso"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                Espresso
              </Link>
              <Link
                href="/metodos/v60"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                Hario V60
              </Link>
              <Link
                href="/metodos/aeropress"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                AeroPress
              </Link>
              <Link
                href="/metodos/chemex"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                Chemex
              </Link>
              <Link
                href="/metodos/french-press"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                French Press
              </Link>
              <Link
                href="/metodos/moka"
                className="block px-4 py-3 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors"
              >
                Moka
              </Link>
            </div>
          </div>

          <Link
            href="/latte-art"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Latte Art
          </Link>

          <Link
            href="/degustacao"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Degustação
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <Button
            asChild
            className="hidden lg:flex bg-gradient-to-r from-coffee-700 to-coffee-800 hover:from-coffee-800 hover:to-coffee-900 dark:from-coffee-300 dark:to-coffee-200 dark:text-coffee-900 dark:hover:from-coffee-200 dark:hover:to-coffee-100 text-white border-0 rounded-full px-4 md:px-6 text-sm"
          >
            <Link href="/visite-cafeterias">Encontrar Cafeterias</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-8 w-8 md:h-9 md:w-9 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4 md:h-5 md:w-5" />
            ) : (
              <Menu className="h-4 w-4 md:h-5 md:w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden glass-effect border-t">
          <div className="container py-4 md:py-6 space-y-4 md:space-y-6">
            <div>
              <h3 className="font-serif font-medium text-foreground mb-2 md:mb-3 text-sm md:text-base">
                Fundamentos
              </h3>
              <div className="pl-3 md:pl-4 space-y-2 md:space-y-3">
                <Link
                  href="/cafe-especial"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  O que é Café Especial
                </Link>
                <Link
                  href="/variedades"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Variedades
                </Link>
                <Link
                  href="/terroir"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terroir
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-serif font-medium text-foreground mb-2 md:mb-3 text-sm md:text-base">
                Produção
              </h3>
              <div className="pl-3 md:pl-4 space-y-2 md:space-y-3">
                <Link
                  href="/colheita"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Colheita
                </Link>
                <Link
                  href="/processamento"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Processamento
                </Link>
                <Link
                  href="/torra"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Torra
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-serif font-medium text-foreground mb-2 md:mb-3 text-sm md:text-base">
                Métodos
              </h3>
              <div className="pl-3 md:pl-4 space-y-2 md:space-y-3">
                <Link
                  href="/metodos/espresso"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Espresso
                </Link>
                <Link
                  href="/metodos/v60"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hario V60
                </Link>
                <Link
                  href="/metodos/aeropress"
                  className="block text-sm text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AeroPress
                </Link>
              </div>
            </div>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-coffee-700 to-coffee-800 hover:from-coffee-800 hover:to-coffee-900 dark:from-coffee-300 dark:to-coffee-200 dark:text-coffee-900 text-white border-0 rounded-full text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/visite-cafeterias">Encontrar Cafeterias</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
