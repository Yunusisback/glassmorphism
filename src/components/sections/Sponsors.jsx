import { Hotel, Plane, Utensils, Ship, Palmtree, Umbrella } from "lucide-react";
import { useState } from "react";

function Sponsors() {
  const [touchedIndex, setTouchedIndex] = useState(null);

  const sponsors = [
    { name: "Oteller", icon: Hotel },
    { name: "Havayolları", icon: Plane },
    { name: "Restoranlar", icon: Utensils },
    { name: "Kruvaziyerler", icon: Ship },
    { name: "Tatil Köyleri", icon: Palmtree },
    { name: "Plaj Kulüpleri", icon: Umbrella }
  ];

  return (
    <div className="w-full px-4 sm:px-6 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl px-4 sm:px-8 py-4 sm:py-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        
          <div className="text-center mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-bold text-white/90 uppercase tracking-wider mb-1 sm:mb-2">
              Anlaşmalı Partnerlerimiz
            </h3>
            <p className="text-[10px] sm:text-xs text-white/50">
              500+ otel, restoran ve tatil merkeziyle özel anlaşmalar
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                onTouchStart={() => setTouchedIndex(index)}
                onTouchEnd={() => setTimeout(() => setTouchedIndex(null), 200)}
                className={`flex flex-col items-center justify-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 transition-all cursor-pointer active:scale-95 ${
                  touchedIndex === index 
                    ? 'bg-white/10 border-white/30' 
                    : 'md:hover:bg-white/10 md:hover:border-white/30'
                }`}
              >
                <sponsor.icon 
                  size={28} 
                  className={`transition-colors sm:w-8 sm:h-8 ${
                    touchedIndex === index 
                      ? 'text-cyan-300' 
                      : 'text-cyan-400 md:group-hover:text-cyan-300'
                  }`}
                  strokeWidth={1.5}
                />
                <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-colors text-center ${
                  touchedIndex === index 
                    ? 'text-white/80' 
                    : 'text-white/60 md:group-hover:text-white/80'
                }`}>
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-[9px] sm:text-[10px] text-white/40">
              © 2025 SeaGlass Premium. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;