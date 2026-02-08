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
        <span className="text-[10px]">82%</span>
        <div className="w-5 h-2.5 border border-current rounded-sm relative">
          <div className="absolute top-0.5 left-0.5 bottom-0.5 right-0.5 bg-current rounded-px" style={{width: '80%'}} />
        </div>
      </div>
    </div>
  )
}
