import { AlertCircle } from "lucide-react"

export function ContentDisclaimer() {
  return (
    <div className="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 rounded-lg p-4">
      <div className="flex gap-3">
        <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-1" />
        <div className="space-y-2">
          <h4 className="font-medium text-amber-900 dark:text-amber-200">
            Nota sobre o conteúdo
          </h4>
          <p className="text-sm text-amber-800/90 dark:text-amber-200/90 leading-relaxed">
            Nos esforçamos para trazer informações precisas e atualizadas, mas é importante lembrar que muitos aspectos do café são variáveis e subjetivos. 
            Receitas, tempos de preparo, proporções e técnicas podem variar dependendo do equipamento, tipo de café, preferência pessoal e outros fatores.
          </p>
          <p className="text-sm text-amber-800/90 dark:text-amber-200/90 leading-relaxed">
            Use nossas recomendações como ponto de partida e ajuste de acordo com seu gosto e experiência.
          </p>
        </div>
      </div>
    </div>
  )
} 