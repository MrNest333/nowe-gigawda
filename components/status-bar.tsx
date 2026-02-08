"use client"
import { useState, useEffect } from "react"

export function StatusBar() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const timeString = now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="flex items-center justify-between px-6 py-3 text-sm font-medium">
      <span>{timeString}</span>
      <div className="flex items-center gap-2 text-xs">
        {/* Ikony baterii/sieci */}
        <span>82%</span>
      </div>
    </div>
  )
}
