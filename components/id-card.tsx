"use client"

export function IDCard() {
  return (
    <div className="mx-4 overflow-hidden rounded-xl">
      {/* ID Card visual */}
      <div
        className="relative p-5"
        style={{
          background: "linear-gradient(135deg, #d4e4f7 0%, #b8d4f0 30%, #e8eff8 60%, #c5d9ef 100%)",
        }}
      >
        {/* Subtle watermark pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.02) 10px, rgba(0,0,0,0.02) 20px)",
        }} />

        <div className="relative flex gap-4">
          {/* Eagle emblem */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-28 w-24 items-center justify-center rounded-sm bg-[#cc2222] p-2">
              <svg viewBox="0 0 80 100" className="h-full w-full">
                <g fill="#8b0000" stroke="#8b0000" strokeWidth="0.5">
                  {/* Eagle head */}
                  <ellipse cx="40" cy="20" rx="12" ry="10" />
                  {/* Beak */}
                  <path d="M 35 22 Q 28 28 32 30 L 38 25 Z" />
                  {/* Body */}
                  <ellipse cx="40" cy="48" rx="18" ry="22" />
                  {/* Left wing */}
                  <path d="M 22 40 Q 5 30 8 55 Q 12 48 22 50 Z" />
                  <path d="M 22 50 Q 2 55 5 65 Q 12 58 22 55 Z" />
                  {/* Right wing */}
                  <path d="M 58 40 Q 75 30 72 55 Q 68 48 58 50 Z" />
                  <path d="M 58 50 Q 78 55 75 65 Q 68 58 58 55 Z" />
                  {/* Tail feathers */}
                  <path d="M 30 68 L 25 90 L 35 78 Z" />
                  <path d="M 40 70 L 40 92 L 45 78 Z" />
                  <path d="M 50 68 L 55 90 L 45 78 Z" />
                  {/* Crown */}
                  <path d="M 32 12 L 34 5 L 37 11 Z" fill="#DAA520" stroke="#DAA520" />
                  <path d="M 37 10 L 40 2 L 43 10 Z" fill="#DAA520" stroke="#DAA520" />
                  <path d="M 43 12 L 46 5 L 48 12 Z" fill="#DAA520" stroke="#DAA520" />
                  {/* Eye */}
                  <circle cx="43" cy="18" r="2" fill="#fff" />
                  <circle cx="43" cy="18" r="1" fill="#000" />
                </g>
              </svg>
            </div>
            {/* Polish flag */}
            <div className="h-6 w-12 overflow-hidden rounded-sm shadow-sm">
              <div className="h-3 bg-[#ffffff]" />
              <div className="h-3 bg-[#dc143c]" />
            </div>
            {/* Country badge */}
            <div className="flex items-center gap-1.5">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1a3a6b]">
                <span className="text-[6px] font-bold text-[#f0f0f0]">RP</span>
              </div>
              <div className="text-left">
                <p className="text-[8px] font-medium leading-tight text-[#1a3a6b]">Rzeczpospolita</p>
                <p className="text-[8px] font-medium leading-tight text-[#1a3a6b]">Polska</p>
              </div>
            </div>
          </div>

          {/* Personal data */}
          <div className="flex flex-1 flex-col justify-center gap-2">
            <div>
              <p className="text-base font-bold text-[#1a1a2e]">Michał</p>
              <p className="text-xs text-[#4a5568]">{"Imię (imiona)"}</p>
            </div>
            <div>
              <p className="text-base font-bold text-[#1a1a2e]">discord.gg/fobywatel</p>
              <p className="text-xs text-[#4a5568]">Nazwisko</p>
            </div>
            <div>
              <p className="text-base font-bold text-[#1a1a2e]">POLSKIE</p>
              <p className="text-xs text-[#4a5568]">{"Obywatelstwo"}</p>
            </div>
            <div>
              <p className="text-base font-bold text-[#1a1a2e]">9.07.2025</p>
              <p className="text-xs text-[#4a5568]">Data urodzenia</p>
            </div>
            <div>
              <p className="text-base font-bold text-[#1a1a2e]">00000000000</p>
              <p className="text-xs text-[#4a5568]">Numer PESEL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
