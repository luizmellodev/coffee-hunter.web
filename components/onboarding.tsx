"use client";

import { useState, useEffect } from "react";
import { Coffee, BookOpen, AlertTriangle, ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Coffee,
    title: "Bem-vindo(a) ao Coffee Hunter!",
    description: "Seu guia completo no mundo dos cafés especiais. Aqui você encontrará informações sobre métodos de preparo, equipamentos, história do café e muito mais.",
  },
  {
    icon: BookOpen,
    title: "Conteúdo Educativo",
    description: "Nosso conteúdo é organizado em seções temáticas, facilitando sua jornada de aprendizado. Clique no botão 'Começar a aprender' ou explore diretamente os tópicos que mais te interessam.",
  },
  {
    icon: AlertTriangle,
    title: "Compromisso com a Qualidade",
    description: "Buscamos sempre trazer informações precisas e atualizadas. No entanto, o mundo do café está em constante evolução, com novas pesquisas e descobertas. Por isso, algumas informações podem precisar de atualizações ou conter imprecisões.",
  },
];

export function Onboarding() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if onboarding has been seen
    const hasSeenOnboarding = localStorage.getItem("hasSeenOnboarding");
    if (!hasSeenOnboarding) {
      // Small delay to ensure smooth animation on first load
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    localStorage.setItem("hasSeenOnboarding", "true");
    // Add animation delay before closing
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleClose();
    }
  };

  if (!isOpen) return null;

  const Step = steps[currentStep];
  const StepIcon = Step.icon;

  return (
    <div 
      className={cn(
        "fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-2xl z-50",
        "transition-all duration-300 transform",
        isClosing ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      )}
    >
      <div className={cn(
        "relative bg-background rounded-xl shadow-2xl border",
        "p-4 md:p-6"
      )}>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-accent/50 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar onboarding"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-coffee-500/20 to-gold-500/20 blur-lg rounded-full" />
            <div className="relative bg-gradient-to-r from-coffee-100 to-gold-100 dark:from-coffee-800 dark:to-coffee-900 rounded-full p-3">
              <StepIcon className="h-6 w-6 text-coffee-700 dark:text-coffee-300" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-serif font-semibold mb-1">{Step.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {Step.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t">
          {/* Progress dots */}
          <div className="flex gap-1.5">
            {steps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  index === currentStep
                    ? "w-6 bg-coffee-700 dark:bg-coffee-300"
                    : "w-1.5 bg-muted"
                )}
              />
            ))}
          </div>

          {/* Navigation button */}
          <button
            onClick={handleNext}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
              "bg-gradient-to-r from-coffee-700 to-coffee-800 hover:from-coffee-800 hover:to-coffee-900",
              "dark:from-coffee-300 dark:to-coffee-200 dark:text-coffee-900",
              "text-white shadow-md hover:shadow-lg",
              "transform hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            <span className="flex items-center gap-1.5">
              {currentStep === steps.length - 1 ? (
                "Entendi"
              ) : (
                <>
                  Próximo
                  <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
} 