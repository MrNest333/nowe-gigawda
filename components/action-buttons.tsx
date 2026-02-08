"use client"

import { RefreshCw, Shield, MoreHorizontal } from "lucide-react"
import { useState } from "react"

interface ActionButtonsProps {
  onAction?: (action: string) => void
}

export function ActionButtons({ onAction }: ActionButtonsProps) {
  const [activeAction, setActiveAction] = useState<string | null>(null)

  const actions = [
    {
      id: "verify",
      icon: RefreshCw,
      label: "Potwierdź",
      sublabel: "swoje dane",
      color: "text-foreground",
    },
    {
      id: "data",
      icon: () => (
        <div className="h-6 w-8 overflow-hidden rounded-sm">
          <div className="h-3 bg-[#ffffff]" />
          <div className="h-3 bg-[#dc143c]" />
        </div>
      ),
      label: "Dane",
      sublabel: "dowodu osobistego",
      color: "text-foreground",
    },
    {
      id: "pesel",
      icon: Shield,
      label: "Zastrzeż",
      sublabel: "PESEL",
      color: "text-foreground",
    },
    {
      id: "more",
      icon: MoreHorizontal,
      label: "Pozostałe",
      sublabel: "skróty",
      color: "text-foreground",
    },
  ]

  const handleClick = (id: string) => {
    setActiveAction(id)
    onAction?.(id)
    setTimeout(() => setActiveAction(null), 200)
  }

  return (
    <div className="mx-4 mt-5 grid grid-cols-4 gap-3">
      {actions.map((action) => {
        const IconComponent = action.icon
        return (
          <button
            key={action.id}
            onClick={() => handleClick(action.id)}
            className={`flex flex-col items-center gap-2 transition-transform ${
              activeAction === action.id ? "scale-95" : ""
            }`}
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-card">
              {typeof IconComponent === "function" && action.id === "data" ? (
                <IconComponent />
              ) : (
                // @ts-expect-error dynamic component
                <IconComponent className={`h-5 w-5 ${action.color}`} />
              )}
            </div>
            <div className="text-center">
              <p className="text-xs text-foreground leading-tight">{action.label}</p>
              <p className="text-xs text-foreground leading-tight">{action.sublabel}</p>
            </div>
          </button>
        )
      })}
    </div>
  )
}
