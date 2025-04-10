import { cn } from "@/lib/utils"

interface ChatShellProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ChatShell({
  children,
  className,
  ...props
}: ChatShellProps) {
  return (
    <div className={cn("flex flex-col h-screen", className)} {...props}>
      {children}
    </div>
  )
} 