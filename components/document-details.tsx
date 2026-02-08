"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface DetailRowProps {
  label: string
  value: string
}

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <div className="border-b border-border px-5 py-4 last:border-b-0">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-base font-semibold text-foreground">{value}</p>
    </div>
  )
}

interface DocumentDetailsProps {
  onCopy?: () => void
}

export function DocumentDetails({ onCopy }: DocumentDetailsProps) {
  const [additionalExpanded, setAdditionalExpanded] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
    onCopy?.()
    navigator.clipboard?.writeText("MEVM 21949")
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-5 space-y-3 px-4">
      {/* Series and number */}
      <div className="rounded-xl bg-card">
        <div className="border-b border-border px-5 py-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-muted-foreground mb-1">{"Seria i numer mDowodu"}</p>
              <p className="text-2xl font-bold text-foreground">MEVM 21949</p>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {"Dane mDowodu i dowodu osobistego są inne – to dwa różne dokumenty."}
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="ml-3 shrink-0 rounded-full border border-primary px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {copied ? "Skopiowano!" : "Kopiuj"}
            </button>
          </div>
        </div>

        <DetailRow label="Termin ważności" value="10.07.2034" />
        <DetailRow label="Data wydania" value="10.07.2024" />
        <DetailRow label="Imię ojca" value="Stanisław" />
        <DetailRow label="Imię matki" value="Katarzyna" />
      </div>

      {/* Additional data accordion */}
      <button
        onClick={() => setAdditionalExpanded(!additionalExpanded)}
        className="flex w-full items-center justify-between rounded-xl bg-card px-5 py-4"
      >
        <span className="text-base font-semibold text-foreground">{"Twoje dodatkowe dane"}</span>
        {additionalExpanded ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>

      {additionalExpanded && (
        <div className="rounded-xl bg-card overflow-hidden animate-in slide-in-from-top-2 duration-200">
          <DetailRow label="Numer PESEL" value="07253169476" />
          <DetailRow label="Płeć" value="M" />
          <DetailRow label="Obywatelstwo" value="POLSKIE" />
          <DetailRow label="Miejsce urodzenia" value="Wadowice" />
        </div>
      )}

      {/* Last update */}
      <div className="flex items-center justify-between rounded-xl bg-card px-5 py-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Ostatnia aktualizacja</p>
          <p className="text-base font-semibold text-foreground">05.02.2026</p>
        </div>
        <button className="rounded-full border border-primary px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
          Aktualizuj
        </button>
      </div>
    </div>
  )
}
