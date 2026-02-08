"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface HelpModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#000000]/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Modal content */}
      <div className="relative z-10 w-full max-w-lg animate-in slide-in-from-bottom duration-300 rounded-t-2xl bg-card p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-foreground">Pomoc</h2>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground"
            aria-label="Zamknij"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            {"mDowód to cyfrowa wersja Twojego dokumentu tożsamości. Możesz go użyć do potwierdzenia swoich danych w wielu sytuacjach."}
          </p>
          <p>
            {"Dokument jest aktualizowany automatycznie. Możesz także ręcznie zaktualizować dane, klikając przycisk \"Aktualizuj\"."}
          </p>
          <p>
            {"W razie pytań skontaktuj się z Centrum Pomocy pod numerem 12 345 67 89."}
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Rozumiem
        </button>
      </div>
    </div>
  )
}
