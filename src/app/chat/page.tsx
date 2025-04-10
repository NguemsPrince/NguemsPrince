import { Metadata } from "next"
import { ChatShell } from "@/components/chat-shell"
import { ChatHeader } from "@/components/chat-header"
import { ChatMessages } from "@/components/chat-messages"
import { ChatInput } from "@/components/chat-input"

export const metadata: Metadata = {
  title: "Espace de discussion",
  description: "Discutez avec les autres utilisateurs de la plateforme",
}

export default function ChatPage() {
  return (
    <ChatShell>
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </ChatShell>
  )
} 