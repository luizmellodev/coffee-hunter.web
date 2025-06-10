import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface InfoCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export function InfoCard({ title, description, icon, children }: InfoCardProps) {
  return (
    <Card className="group glass-effect border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
      <CardContent className="p-6 md:p-8">
        {icon && (
          <div className="mb-4 md:mb-6 flex justify-center">
            <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-coffee-100 to-gold-100 dark:from-coffee-800 dark:to-coffee-700 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          </div>
        )}
        <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-3 md:mb-4 text-center">
          {title}
        </h3>
        <p className="text-muted-foreground text-center leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
          {description}
        </p>
        {children}
      </CardContent>
    </Card>
  )
}
