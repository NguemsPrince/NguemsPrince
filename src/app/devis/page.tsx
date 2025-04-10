import { Metadata } from "next"
import { DevisForm } from "@/components/devis-form"

export const metadata: Metadata = {
  title: "Devis personnalisé",
  description: "Demandez un devis personnalisé pour nos services",
}

export default function DevisPage() {
  return (
    <div className="container max-w-2xl py-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Devis personnalisé</h1>
          <p className="text-muted-foreground">
            Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé.
          </p>
        </div>
        <DevisForm />
      </div>
    </div>
  )
} 