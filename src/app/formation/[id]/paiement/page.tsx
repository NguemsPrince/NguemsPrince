import { Metadata } from "next"
import { PaymentForm } from "@/components/payment-form"

export const metadata: Metadata = {
  title: "Paiement de la formation",
  description: "Effectuez le paiement pour accéder à la formation",
}

export default function PaymentPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="container max-w-2xl py-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Paiement de la formation</h1>
          <p className="text-muted-foreground">
            Choisissez votre méthode de paiement pour accéder à la formation.
          </p>
        </div>
        <PaymentForm formationId={params.id} />
      </div>
    </div>
  )
} 