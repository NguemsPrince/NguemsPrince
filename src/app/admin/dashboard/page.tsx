import { Metadata } from "next"
import { DashboardShell } from "@/components/shell"
import { DashboardHeader } from "@/components/header"
import { DashboardTabs } from "@/components/dashboard-tabs"

export const metadata: Metadata = {
  title: "Tableau de bord administrateur",
  description: "Gérez votre plateforme depuis le tableau de bord administrateur",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Tableau de bord"
        text="Bienvenue dans votre espace administrateur"
      />
      <DashboardTabs />
    </DashboardShell>
  )
} 