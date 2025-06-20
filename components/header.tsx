"use client";

import Link from "next/link";
import { useState } from "react";
import { CoffeeIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MenuLink } from "@/components/navigation/menu-link";
import { MenuSection } from "@/components/navigation/menu-section";
import { MenuItem } from "@/components/navigation/menu-item";

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
          <MenuSection title="Fundamentos">
            <MenuItem href="/historia-do-cafe">História do Café</MenuItem>
            <MenuItem href="/cafe-especial">O que é Café Especial</MenuItem>
            <MenuItem href="/variedades">Variedades</MenuItem>
            <MenuItem href="/terroir">Terroir</MenuItem>
            <MenuItem href="/cafe-e-saude">Café e Saúde</MenuItem>
          </MenuSection>

          <MenuSection title="Produção">
            <MenuItem href="/colheita">Colheita</MenuItem>
            <MenuItem href="/processamento">Processamento</MenuItem>
            <MenuItem href="/torra">Torra</MenuItem>
            <MenuItem href="/armazenamento">Armazenamento</MenuItem>
            <MenuItem href="/agua-e-extracao">Água e Extração</MenuItem>
          </MenuSection>

          <MenuLink href="/equipamentos">Equipamentos</MenuLink>

          <MenuSection title="Métodos" href="/metodos">
            <MenuItem href="/metodos/espresso">Espresso</MenuItem>
            <MenuItem href="/metodos/v60">Hario V60</MenuItem>
            <MenuItem href="/metodos/aeropress">AeroPress</MenuItem>
            <MenuItem href="/metodos/chemex">Chemex</MenuItem>
            <MenuItem href="/metodos/french-press">Prensa Francesa</MenuItem>
            <MenuItem href="/metodos/moka">Moka</MenuItem>
          </MenuSection>

          <MenuLink href="/latte-art">Latte Art</MenuLink>
          <MenuLink href="/degustacao">Degustação</MenuLink>
          <MenuLink href="/guia-para-iniciantes">Guia Iniciante</MenuLink>
          <MenuLink href="/sobre">Sobre</MenuLink>
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
          <div className="container py-3">
            <nav className="space-y-0 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent pr-2 -mr-2">
              {/* Fundamentos */}
              <MenuSection title="Fundamentos" onClose={() => setIsMenuOpen(false)} isMobile>
                <MenuItem href="/historia-do-cafe" onClose={() => setIsMenuOpen(false)} isMobile>
                  História do Café
                </MenuItem>
                <MenuItem href="/cafe-especial" onClose={() => setIsMenuOpen(false)} isMobile>
                  Café Especial
                </MenuItem>
                <MenuItem href="/variedades" onClose={() => setIsMenuOpen(false)} isMobile>
                  Variedades
                </MenuItem>
                <MenuItem href="/terroir" onClose={() => setIsMenuOpen(false)} isMobile>
                  Terroir
                </MenuItem>
                <MenuItem href="/cafe-e-saude" onClose={() => setIsMenuOpen(false)} isMobile>
                  Café e Saúde
                </MenuItem>
              </MenuSection>

              {/* Produção */}
              <MenuSection title="Produção" onClose={() => setIsMenuOpen(false)} isMobile>
                <MenuItem href="/colheita" onClose={() => setIsMenuOpen(false)} isMobile>
                  Colheita
                </MenuItem>
                <MenuItem href="/processamento" onClose={() => setIsMenuOpen(false)} isMobile>
                  Processamento
                </MenuItem>
                <MenuItem href="/torra" onClose={() => setIsMenuOpen(false)} isMobile>
                  Torra
                </MenuItem>
                <MenuItem href="/armazenamento" onClose={() => setIsMenuOpen(false)} isMobile>
                  Armazenamento
                </MenuItem>
                <MenuItem href="/agua-e-extracao" onClose={() => setIsMenuOpen(false)} isMobile>
                  Água e Extração
                </MenuItem>
              </MenuSection>
              
              {/* Métodos */}
              <MenuSection title="Métodos" onClose={() => setIsMenuOpen(false)} isMobile>
                <MenuItem href="/metodos/espresso" onClose={() => setIsMenuOpen(false)} isMobile>
                  Espresso
                </MenuItem>
                <MenuItem href="/metodos/v60" onClose={() => setIsMenuOpen(false)} isMobile>
                  Hario V60
                </MenuItem>
                <MenuItem href="/metodos/aeropress" onClose={() => setIsMenuOpen(false)} isMobile>
                  AeroPress
                </MenuItem>
                <MenuItem href="/metodos/chemex" onClose={() => setIsMenuOpen(false)} isMobile>
                  Chemex
                </MenuItem>
                <MenuItem href="/metodos/french-press" onClose={() => setIsMenuOpen(false)} isMobile>
                  Prensa Francesa
                </MenuItem>
                <MenuItem href="/metodos/moka" onClose={() => setIsMenuOpen(false)} isMobile>
                  Moka
                </MenuItem>
              </MenuSection>

              {/* Links Diretos */}
              <div className="space-y-1 pt-2">
                <MenuLink href="/latte-art" onClose={() => setIsMenuOpen(false)} isMobile>
                  Latte Art
                </MenuLink>
                <MenuLink href="/equipamentos" onClose={() => setIsMenuOpen(false)} isMobile>
                  Equipamentos
                </MenuLink>
                <MenuLink href="/degustacao" onClose={() => setIsMenuOpen(false)} isMobile>
                  Degustação
                </MenuLink>
                <MenuLink href="/guia-para-iniciantes" onClose={() => setIsMenuOpen(false)} isMobile>
                  Guia Iniciante
                </MenuLink>
                <MenuLink href="/sobre" onClose={() => setIsMenuOpen(false)} isMobile>
                  Sobre
                </MenuLink>
              </div>
            </nav>

            <div className="mt-3 pt-3 border-t border-muted/30">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-coffee-700 to-coffee-800 hover:from-coffee-800 hover:to-coffee-900 dark:from-coffee-300 dark:to-coffee-200 dark:text-coffee-900 text-white border-0 rounded-full text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/visite-cafeterias">Encontrar Cafeterias</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
