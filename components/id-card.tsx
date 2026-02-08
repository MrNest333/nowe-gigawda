"use client"

import Image from "next/image"

export function IDCard() {
  return (
    <div className="mx-4 overflow-hidden rounded-xl shadow-lg">
      <div
        className="relative p-5"
        style={{
          background: "linear-gradient(135deg, #d4e4f7 0%, #b8d4f0 30%, #e8eff8 60%, #c5d9ef 100%)",
        }}
      >
        {/* Tło z giloszem */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.02) 10px, rgba(0,0,0,0.02) 20px)",
        }} />

        <div className="relative flex gap-4">
          {/* Kolumna lewa: Zdjęcie i Flaga */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative h-32 w-28 overflow-hidden rounded-md border-2 border-[#cc2222] bg-white shadow-md">
              <Image 
                src="/fotkaa.png" 
                alt="Zdjęcie profilowe"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="h-6 w-12 overflow-hidden rounded-sm shadow-sm border border-gray-200">
              <div className="h-3 bg-[#ffffff]" />
              <div className="h-3 bg-[#dc143c]" />
            </div>

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

          {/* Kolumna prawa: Dane (wpisz tu swoje) */}
          <div className="flex flex-1 flex-col justify-center gap-2">
            <div>
              <p className="text-base font-bold text-[#1a1a2e]">MICHAŁ</p>
              <p className="text-[10px] text-[#4a5568]">Imię (imiona)</p>
            </div>
            <div>
              <p className="text-base font-bold text-[#1a1a2e]">KRUCZEK</p>
              <p className="text-[10px] text-[#4a5568]">Nazwisko</p>
            </div>
            <div>
              <p className="text-base font-bold text-[#1a1a2e]">POLSKIE</p>
              <p className="text-[10px] text-[#4a5568]">Obywatelstwo</p>
            </div>
            <div>
              <p className="text-base font-bold text-[#1a1a2e]">31.05.2007</p>
              <p className="text-[10px] text-[#4a5568]">Data urodzenia</p>
            </div>
            <div>
              <p className="text-base font-bold text-[#1a1a2e]">07253169476</p>
              <p className="text-[10px] text-[#4a5568]">Numer PESEL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
