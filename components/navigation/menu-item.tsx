"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type MenuItemProps = {
  href: string;
  onClose?: () => void;
  children: React.ReactNode;
  isMobile?: boolean;
};

export function MenuItem({ href, onClose, children, isMobile = false }: MenuItemProps) {
  const baseStyles = "text-sm text-foreground/80 hover:text-foreground transition-colors";
  const mobileStyles = "block py-2";
  const desktopStyles = "block px-4 py-3 hover:bg-accent/50 rounded-lg";

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