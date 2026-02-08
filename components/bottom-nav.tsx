"use client"

import { FileText, Briefcase, QrCode, LayoutGrid } from "lucide-react"

interface BottomNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "dokumenty", icon: FileText, label: "Dokumenty" },
    { id: "uslugi", icon: Briefcase, label: "Usługi" },
    { id: "qr", icon: QrCode, label: "Kod QR" },
    { id: "wiecej", icon: LayoutGrid, label: "Więcej" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background" role="navigation" aria-label="Nawigacja główna">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-2 pb-safe">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 px-3 py-1.5 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
              aria-label={tab.label}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className={`h-6 w-6 ${isActive ? "text-primary" : ""}`} />
              <span className={`text-[10px] font-medium ${isActive ? "text-primary" : ""}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
