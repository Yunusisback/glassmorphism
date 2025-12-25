import { Hotel, Plane, Utensils, Ship, Palmtree, Umbrella } from "lucide-react";

function Sponsors() {
  const sponsors = [
    { name: "Oteller", icon: Hotel },
    { name: "Havayolları", icon: Plane },
    { name: "Restoranlar", icon: Utensils },
    { name: "Kruvaziyerler", icon: Ship },
    { name: "Tatil Köyleri", icon: Palmtree },
    { name: "Plaj Kulüpleri", icon: Umbrella }
  ];

  return (
    <div className="w-full px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        
          {/* Başlık */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-white/90 uppercase tracking-wider mb-2">
              Anlaşmalı Partnerlerimiz
            </h3>
            <p className="text-xs text-white/50">
              500+ otel, restoran ve tatil merkeziyle özel anlaşmalar
            </p>
          </div>

          {/* Sponsor grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer group"
              >
                <sponsor.icon 
                  size={32} 
                  className="text-cyan-400 group-hover:text-cyan-300 transition-colors" 
                  strokeWidth={1.5}
                />
                <span className="text-[10px] font-bold text-white/60 group-hover:text-white/80 uppercase tracking-wider transition-colors">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>

          {/* Alt Bilgi */}
          <div className="mt-6 text-center">
            <p className="text-[10px] text-white/40">
              © 2025 SeaGlass Premium. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;