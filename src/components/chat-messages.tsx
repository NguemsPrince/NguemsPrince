import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Message {
  id: string
  content: string
  sender: {
    name: string
    avatar?: string
  }
  timestamp: string
}

const messages: Message[] = [
  {
    id: "1",
    content: "Bonjour à tous !",
    sender: {
      name: "John Doe",
      avatar: "/avatars/john.png"
    },
    timestamp: "10:00"
  },
  {
    id: "2",
    content: "Salut ! Comment allez-vous ?",
    sender: {
      name: "Jane Smith",
      avatar: "/avatars/jane.png"
    },
    timestamp: "10:01"
  }
]

export function ChatMessages() {
  return (
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={message.sender.avatar} />
              <AvatarFallback>{message.sender.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">{message.sender.name}</p>
                <span className="text-xs text-muted-foreground">{message.timestamp}</span>
              </div>
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
} 