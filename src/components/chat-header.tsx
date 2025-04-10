import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ChatHeader() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold">Espace de discussion</h2>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Input
            placeholder="Rechercher une conversation..."
            className="h-9 w-[150px] lg:w-[250px]"
          />
          <Button variant="outline" size="sm">
            Nouvelle conversation
          </Button>
        </div>
      </div>
    </div>
  )
} 