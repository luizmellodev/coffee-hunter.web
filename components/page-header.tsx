import type React from "react"

interface PageHeaderProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 elegant-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {icon && (
            <div className="mb-8 flex justify-center">
              <div className="glass-effect p-6 rounded-2xl">{icon}</div>
            </div>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gradient mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-coffee-600 to-gold-500 mx-auto mt-8" />
        </div>
      </div>
    </div>
  )
}
