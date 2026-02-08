"use client"

import React from "react"

import { X, RefreshCw, Shield, MoreHorizontal, FileText } from "lucide-react"
import { useEffect } from "react"

interface ActionModalProps {
  isOpen: boolean
  onClose: () => void
  actionId: string | null
}

const actionContent: Record<string, { title: string; description: string; icon: React.ElementType }> = {
  verify: {
    title: "Potwierdź swoje dane",
    description: "Użyj mDowodu, aby potwierdzić swoją tożsamość. Możesz udostępnić wybrane dane urzędnikom lub instytucjom za pomocą kodu QR.",
    icon: RefreshCw,
  },
  data: {
    title: "Dane dowodu osobistego",
    description: "Tutaj znajdziesz pełne dane Twojego dowodu osobistego, w tym serię, numer, datę wydania i termin ważności.",
    icon: FileText,
  },
  pesel: {
    title: "Zastrzeż PESEL",
    description: "Zastrzeżenie numeru PESEL chroni Cię przed wyłudzeniem kredytu lub pożyczki na Twoje dane. Możesz w każdej chwili cofnąć zastrzeżenie.",
    icon: Shield,
  },
  more: {
    title: "Pozostałe skróty",
    description: "Dodatkowe funkcje i skróty dostępne w aplikacji mObywatel, takie jak zgłoszenie utraty dokumentu czy zmiana PIN-u.",
    icon: MoreHorizontal,
  },
}

export function ActionModal({ isOpen, onClose, actionId }: ActionModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen || !actionId || !actionContent[actionId]) return null

  const content = actionContent[actionId]
  const Icon = content.icon

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      <div
        className="absolute inset-0 bg-[#000000]/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-lg animate-in slide-in-from-bottom duration-300 rounded-t-2xl bg-card p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">{content.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground"
            aria-label="Zamknij"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{content.description}</p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          OK
        </button>
      </div>
    </div>
  )
}
