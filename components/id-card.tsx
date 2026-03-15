"use client"

import Image from "next/image"

export function IDCard() {
  return (
    <div className="mx-4 py-2">
      {/* Kontener Karty z realistycznym gradientem */}
      <div 
        className="relative overflow-hidden rounded-[24px] p-5 shadow-[0_15px_35px_rgba(0,40,120,0.12)] border border-white/50"
        style={{
          background: "linear-gradient(145deg, #ffffff 0%, #f0f5ff 40%, #e6efff 100%)",
        }}
      >
        {/* Subtelny znak wodny (Orzełek) w tle */}
        <div className="absolute -right-4 -bottom-6 select-none opacity-[0.03] text-[160px] pointer-events-none rotate-[-15deg]">
          🦅
        </div>

        {/* Flaga i Rzeczpospolita Polska - Górna sekcja */}
        <div className="flex items-center mb-5 relative z-10">
          <div className="mr-3 h-[18px] w-[30px] overflow-hidden rounded-[2px] border-[0.5px] border-gray-200 shadow-sm">
            <div className="h-1/2 bg-white" />
            <div className="h-1/2 bg-[#dc143c]" />
          </div>
          <span className="text-[12px] font-[800] uppercase tracking-tighter text-[#1a1b1e]">
            Rzeczpospolita Polska
          </span>
        </div>

        <div className="relative z-10 flex gap-5">
          {/* Lewa kolumna: Zdjęcie */}
          <div className="flex flex-col items-center">
            <div className="relative h-[160px] w-[122px] overflow-hidden rounded-xl border-l-[4px] border-[#dc3545] bg-gray-100 shadow-md">
              <Image 
                src="/fotkaa.webp" 
                alt="Foto" 
                fill
                className="object-cover contrast-[1.05] brightness-[1.02]"
                priority
              />
            </div>
          </div>

          {/* Prawa kolumna: Dane (Układ 1:1) */}
          <div className="flex flex-1 flex-col justify-start pt-1">
            <div className="mb-3">
              <p className="text-[16px] font-[900] leading-none text-[#1a1b1e] uppercase">MICHAŁ</p>
              <p className="text-[9px] font-bold text-[#8e9196] uppercase tracking-tighter">Imię (imiona)</p>
            </div>
            
            <div className="mb-3">
              <p className="text-[16px] font-[900] leading-none text-[#1a1b1e] uppercase">KRUCZEK</p>
              <p className="text-[9px] font-bold text-[#8e9196] uppercase tracking-tighter">Nazwisko</p>
            </div>

            <div className="mb-3">
              <p className="text-[15px] font-[900] leading-none text-[#1a1b1e] uppercase">POLSKIE</p>
              <p className="text-[9px] font-bold text-[#8e9196] uppercase tracking-tighter">Obywatelstwo</p>
            </div>

            <div className="mb-3">
              <p className="text-[15px] font-[900] leading-none text-[#1a1b1e] uppercase">31.05.2007</p>
              <p className="text-[9px] font-bold text-[#8e9196] uppercase tracking-tighter">Data urodzenia</p>
            </div>

            <div>
              <p className="text-[15px] font-[900] leading-none text-[#1a1b1e] uppercase">07253169476</p>
              <p className="text-[9px] font-bold text-[#8e9196] uppercase tracking-tighter">Numer PESEL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
