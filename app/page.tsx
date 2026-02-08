"use client"

import { useState, useEffect } from "react" // Dodaliśmy useEffect
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
  
  // --- TUTAJ JEST NOWY KOD ZEGARA ---
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formattedTime = now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })
  const formattedDate = now.toLocaleDateString('pl-PL')
  // ----------------------------------

  const handleCopy = () => {
    setCopiedToast(true)
    setTimeout(() => setCopiedToast(false), 2000)
  }

  const handleAction = (id: string) => {
    setActionModalId(id)
  }

  return (
    <div className="relative mx-auto min-h-screen max-w-lg bg-background">
      {/* Status bar */}
      <StatusBar />

      {/* Header */}
      <AppHeader
        onBack={() => {}}
        onHelp={() => setHelpOpen(true)}
      />

      {/* Scrollable content */}
      <main className="overflow-y-auto pb-24">
        {/* Timestamp - TERAZ AUTOMATYCZNY */}
        <p className="py-2 text-center text-xs text-muted-foreground">
          {formattedTime} {formattedDate}
        </p>

        {/* ID Card */}
        <IDCard />

        {/* Valid badge */}
        <ValidBadge />

        {/* Action buttons */}
        <ActionButtons onAction={handleAction} />

        {/* Document details section */}
        <DocumentDetails onCopy={handleCopy} />
      </main>

      {/* Bottom navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Help modal */}
      <HelpModal isOpen={helpOpen} onClose={() => setHelpOpen(false)} />

      {/* Action modal */}
      <ActionModal
        isOpen={actionModalId !== null}
        onClose={() => setActionModalId(null)}
        actionId={actionModalId}
      />

      {/* Copy toast */}
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
