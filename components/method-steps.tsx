interface MethodStepsProps {
  steps: Array<{
    title: string
    description: string
    tip?: string
  }>
}

export function MethodSteps({ steps }: MethodStepsProps) {
  return (
    <div className="space-y-4 md:space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col sm:flex-row gap-4">
          <div className="flex-shrink-0 w-8 h-8 step-number rounded-full flex items-center justify-center font-bold text-sm">
            {index + 1}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-2 text-sm md:text-base">{step.title}</h4>
            <p className="text-muted-foreground mb-2 text-sm md:text-base leading-relaxed">{step.description}</p>
            {step.tip && (
              <div className="info-box">
                <p className="text-sm text-foreground">
                  <span className="font-medium">💡 Dica:</span> {step.tip}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
