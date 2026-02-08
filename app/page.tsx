"use client"

import { useState, useEffect } from "react"
import { StatusBar } from "@/components/status-bar"
import { AppHeader } from "@/components/app-header"
import { IDCard } from "@/components/id-card"
import { ValidBadge } from "@/components/valid-badge"
import { ActionButtons } from "@/components/action-buttons"
import { DocumentDetails } from "@/components/document-details"
import { BottomNav } from "@/components/bottom-nav"
import { HelpModal } from "@/components/help-modal"
import { ActionModal } from "@/components/action-modal"

export default function Page() {
  const [activeTab, setActiveTab] = useState("dokumenty")
  const [helpOpen, setHelpOpen] = useState(false)
  const [actionModalId, setActionModalId] = useState<string | null>(null)
  const [copiedToast, setCopiedToast] = useState(false)
  
  // Zegar z zabezpieczeniem
  const [now, setNow] = useState(new Date())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCopy = () => {
    setCopiedToast(true)
    setTimeout(() => setCopiedToast(false), 2000)
  }

  const handleAction = (id: string) => {
    setActionModalId(id)
  }

  // Jeśli strona jeszcze się "nie załadowała" w przeglądarce, pokazujemy pusty czas, żeby nie było błędu
  const timeString = mounted 
    ? now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) 
    : "--:--:--"
  const dateString = mounted 
    ? now.toLocaleDateString('pl-PL') 
    : "--.--.----"

  return (
    <div className="relative mx-auto min-h-screen max-w-lg bg-background">
      <StatusBar />

      <AppHeader
        onBack={() => {}}
        onHelp={() => setHelpOpen(true)}
      />

      <main className="overflow-y-auto pb-24">
        {/* Timestamp */}
        <p className="py-2 text-center text-xs text-muted-foreground font-medium">
          {timeString} {dateString}
        </p>

        <IDCard />
        <ValidBadge />
        <ActionButtons onAction={handleAction} />
        <DocumentDetails onCopy={handleCopy} />
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      <HelpModal isOpen={helpOpen} onClose={() => setHelpOpen(false)} />
      <ActionModal
        isOpen={actionModalId !== null}
        onClose={() => setActionModalId(null)}
        actionId={actionModalId}
      />

      {copiedToast && (
        <div className="fixed left-1/2 top-20 z-[200] -translate-x-1/2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="rounded-xl bg-[#22c55e] px-5 py-2.5 text-sm font-medium text-[#ffffff] shadow-lg">
            Skopiowano do schowka
          </div>
        </div>
      )}
    </div>
  )
}
