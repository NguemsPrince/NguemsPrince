import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Paperclip, Send } from "lucide-react"

export function ChatInput() {
  return (
    <div className="border-t p-4">
      <div className="flex items-end space-x-4">
        <Textarea
          placeholder="Écrivez votre message..."
          className="min-h-[80px]"
        />
        <div className="flex flex-col space-y-2">
          <Button size="icon" variant="ghost">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
} 