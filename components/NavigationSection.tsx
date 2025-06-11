'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

interface NavigationSectionProps {
  beforeNav?: NavItem;
  afterNav?: NavItem;
}

export function NavigationSection({ beforeNav, afterNav }: NavigationSectionProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1200);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes pulse-rotate {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.05) rotate(3deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        .animate-pulse-rotate {
          animation: pulse-rotate 1.2s ease-in-out infinite;
          /* Preserve transform origin centralizado */
          transform-origin: center;
        }
      `}</style>

      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Vamos aprender mais?
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            {beforeNav && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="glass-effect border-0 rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg group hover:bg-accent/50"
              >
                <Link href={beforeNav.href}>
                  <ArrowLeft className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:-translate-x-1 transition-transform" />
                  {beforeNav.label}
                </Link>
              </Button>
            )}

            {afterNav && (
              <Button
                asChild
                size="lg"
                className={cn(
                  'bg-gradient-to-r from-coffee-700 to-coffee-800 hover:from-coffee-800 hover:to-coffee-900 dark:from-coffee-300 dark:to-coffee-200 dark:text-coffee-900 text-white border-0 rounded-full px-6 md:px-8 py-4 md:py-6 text-base md:text-lg group',
                  animate && 'animate-pulse-rotate'
                )}
              >
                <Link href={afterNav.href}>
                  {afterNav.label}
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
