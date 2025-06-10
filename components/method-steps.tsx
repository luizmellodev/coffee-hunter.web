interface MethodStepsProps {
  steps: Array<{
    title: string;
    description: string;
    tip?: string;
  }>;
}

export function MethodSteps({ steps }: MethodStepsProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex-shrink-0 w-8 h-8 bg-[#C38154 text-white rounded-full flex items-center justify-center font-bold">
            {index + 1}
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[#884A39] dark:text-white mb-2">
              {step.title}
            </h4>
            <p className="text-[#884A39] dark:text-white dark:text-white mb-2">
              {step.description}
            </p>
            {step.tip && (
              <div className="bg-[#F9E0BB]/50 p-3 rounded-lg">
                <p className="text-sm text-[#884A39] dark:text-white">
                  <span className="font-medium">💡 Dica:</span> {step.tip}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
