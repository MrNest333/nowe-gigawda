"use client"



export function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 py-2 bg-background">
      <div className="flex items-center">
        <span className="rounded-full bg-destructive px-3 py-0.5 text-xs font-bold text-destructive-foreground">
          21:18
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <Signal className="h-3.5 w-3.5 text-foreground" />
        <Wifi className="h-3.5 w-3.5 text-foreground" />
        <div className="flex items-center gap-0.5">
          <Battery className="h-3.5 w-3.5 text-foreground" />
          <span className="text-[10px] font-medium text-foreground">164</span>
        </div>
      </div>
    </div>
  )
}
