"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type MenuLinkProps = {
  href: string;
  children: React.ReactNode;
  onClose?: () => void;
  isMobile?: boolean;
};

export function MenuLink({ href, children, onClose, isMobile = false }: MenuLinkProps) {
  const baseStyles = "text-sm font-medium text-foreground/80 hover:text-foreground transition-colors";
  const mobileStyles = "block py-2 font-serif font-medium text-base";
  const desktopStyles = "";

  return (
    <Link
      href={href}
      className={cn(baseStyles, isMobile ? mobileStyles : desktopStyles)}
      onClick={onClose}
    >
      {children}
    </Link>
  );
} 