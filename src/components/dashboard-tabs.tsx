import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
        <TabsTrigger value="users">Utilisateurs</TabsTrigger>
        <TabsTrigger value="formations">Formations</TabsTrigger>
        <TabsTrigger value="events">Événements</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Utilisateurs totaux</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Formations actives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Événements à venir</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages non lus</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="users">
        <Card>
          <CardHeader>
            <CardTitle>Gestion des utilisateurs</CardTitle>
            <CardDescription>
              Gérez les utilisateurs de la plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Table des utilisateurs à implémenter */}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="formations">
        <Card>
          <CardHeader>
            <CardTitle>Gestion des formations</CardTitle>
            <CardDescription>
              Gérez les formations en ligne
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Table des formations à implémenter */}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="events">
        <Card>
          <CardHeader>
            <CardTitle>Gestion des événements</CardTitle>
            <CardDescription>
              Gérez les événements à venir
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Table des événements à implémenter */}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="messages">
        <Card>
          <CardHeader>
            <CardTitle>Messages</CardTitle>
            <CardDescription>
              Gérez les messages des utilisateurs
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Liste des messages à implémenter */}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
} 