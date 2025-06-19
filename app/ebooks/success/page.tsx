import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <PageHeader
        title="Pagamento Confirmado!"
        description="Seu e-book está pronto para download."
      />
      
      <div className="container py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4">
              Obrigado pela sua compra!
            </h2>
            <p className="text-muted-foreground mb-6">
              Seu e-book está disponível para download imediato. Você também receberá um email com o link para download.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-coffee-700 to-coffee-800 hover:from-coffee-800 hover:to-coffee-900 dark:from-coffee-300 dark:to-coffee-200 dark:text-coffee-900 text-white border-0 rounded-full px-8"
            >
              <Download className="h-4 w-4 mr-2" />
              Baixar E-book
            </Button>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Próximos passos:</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>✓ Faça o download do seu e-book</li>
              <li>✓ Verifique seu email para backup do link</li>
              <li>✓ Entre em contato se precisar de ajuda</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 