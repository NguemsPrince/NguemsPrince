import { Metadata } from "next"
import { EventRegistrationForm } from "@/components/event-registration-form"

export const metadata: Metadata = {
  title: "Inscription à l'événement",
  description: "Inscrivez-vous à l'événement",
}

export default function EventRegistrationPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="container max-w-2xl py-10">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Inscription à l'événement</h1>
          <p className="text-muted-foreground">
            Remplissez le formulaire ci-dessous pour vous inscrire à l'événement.
          </p>
        </div>
        <EventRegistrationForm eventId={params.id} />
      </div>
    </div>
  )
} 