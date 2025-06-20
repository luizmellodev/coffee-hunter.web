"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export type MenuSectionProps = {
  title: string;
  href?: string;
  onClose?: () => void;
  children: React.ReactNode;
  isMobile?: boolean;
};

export function MenuSection({ title, href, onClose, children, isMobile = false }: MenuSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
    if (href && onClose) {
      onClose();
    }
  };

  const TitleComponent = href ? (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        "text-foreground/80 hover:text-foreground transition-colors flex items-center justify-between w-full",
        isMobile ? "font-serif font-medium text-base" : "text-sm font-medium py-2"
      )}
    >
      {title}
      {isMobile && (
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      )}
    </Link>
  ) : (
    <button 
      onClick={handleClick}
      className={cn(
        "text-foreground/80 hover:text-foreground transition-colors flex items-center justify-between w-full",
        isMobile ? "font-serif font-medium text-base" : "text-sm font-medium py-2"
      )}
    >
      {title}
      {isMobile && (
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "transform rotate-180"
          )}
        />
      )}
    </button>
  );

  if (isMobile) {
    return (
      <div className="border-b border-muted/30 last:border-0">
        <div className="py-2">
          {TitleComponent}
        </div>
        <div
          className={cn(
            "overflow-hidden transition-all duration-200 ease-in-out",
            isOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="pl-4 space-y-1 pb-2">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      {TitleComponent}
      <div className="absolute top-full left-0 mt-2 w-56 glass-effect rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
        {children}
      </div>
    </div>
  );
} 