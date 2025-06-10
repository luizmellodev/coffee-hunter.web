import type React from "react"

interface PageHeaderProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 elegant-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {icon && (
            <div className="mb-6 md:mb-8 flex justify-center">
              <div className="glass-effect p-4 md:p-6 rounded-2xl">{icon}</div>
            </div>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gradient mb-4 md:mb-6 leading-tight px-4">
            {title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            {description}
          </p>
          <div className="w-16 md:w-24 h-0.5 bg-gradient-to-r from-coffee-600 to-gold-500 mx-auto mt-6 md:mt-8" />
        </div>
      </div>
    </div>
  )
}
