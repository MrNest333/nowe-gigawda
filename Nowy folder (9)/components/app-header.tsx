"use client"

import { ChevronLeft, HelpCircle } from "lucide-react"

interface AppHeaderProps {
  onBack?: () => void
  onHelp?: () => void
}

export function AppHeader({ onBack, onHelp }: AppHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-primary font-medium"
        aria-label="Wróć"
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="text-lg">{"Wróć"}</span>
      </button>
      <h1 className="text-lg font-semibold text-foreground">{"mDowód"}</h1>
      <button
        onClick={onHelp}
        className="text-muted-foreground"
        aria-label="Pomoc"
      >
        <HelpCircle className="h-5 w-5" />
      </button>
    </div>
  )
}
