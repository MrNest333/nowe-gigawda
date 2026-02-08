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
      <div className="flex items-center gap-2">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><path d="M0 2C0 0.895431 0.895431 0 2 0H15C16.1046 0 17 0.895431 17 2V9C17 10.1046 16.1046 11 15 11H2C0.895431 11 0 10.1046 0 9V2Z" fill="currentColor" fillOpacity="0.3"/><path d="M2 2H15V9H2V2Z" fill="currentColor"/></svg>
      </div>
    </div>
  )
}
