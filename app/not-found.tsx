"use client";

import { Button } from "@/components/ui/button";
import LottieAnimation from "@/components/LottieAnimation";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-14 ">
        <div className="w-64 h-64 mx-auto">
          <LottieAnimation
            animation="coffee404"
            width={400}
            height={400}
          />
        </div>
        
        <h1 className="text-4xl font-bold text-primary mt-10 mb-10">Ops! Café derramado...</h1>
        
        <p className="text-xl text-muted-foreground">
          Parece que esta página se perdeu como grãos de café ao vento.
          Que tal voltarmos para uma xícara fresca de conteúdo?
        </p>

        <Link href="/" className="block">
          <Button
            variant="default"
            size="lg"
            className="mt-6"
          >
            Voltar ao Início
          </Button>
        </Link>
      </div>
    </div>
  );
} 