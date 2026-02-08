"use client"

import { CheckCircle2 } from "lucide-react"

export function ValidBadge() {
  return (
    <div className="mx-4 mt-3 flex items-center gap-2 rounded-xl bg-card px-5 py-3.5">
      <CheckCircle2 className="h-5 w-5 text-[#22c55e]" />
      <span className="text-sm font-medium text-[#22c55e]">{"Dokument ważny"}</span>
    </div>
  )
}
