import { Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="icon" asChild>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
    </div>
  )
} 