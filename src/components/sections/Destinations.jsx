import { destinations } from '../../utils/constants';
import { ArrowUpRight } from "lucide-react";
import { useState } from 'react';

export default function Destinations() {
  const [touchedCard, setTouchedCard] = useState(null);

  return (
    <section className="py-12 sm:py-20 relative">
      
      <div className="mb-12 sm:mb-16 px-4">
        <div className="flex items-center gap-2 sm:gap-3 mb-2">
          <div className="w-8 sm:w-12 h-0.5 bg-cyan-400"></div>
          <span className="text-cyan-400 font-black tracking-[0.3em] sm:tracking-[0.4em] text-[9px] sm:text-[10px] uppercase">
            SeaGlass Exclusive Travel
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black italic tracking-tighter text-white">
          Popüler <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-cyan-400">Rotalar</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-4">
        {destinations.map((dest, index) => (
          <div 
            key={index}
            onTouchStart={() => setTouchedCard(index)}
            onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
            className={`group relative cursor-pointer rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-white/5 bg-black/20 backdrop-blur-sm transition-all duration-500 active:scale-95 ${
              touchedCard === index 
                ? 'border-cyan-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] scale-105' 
                : 'md:hover:border-cyan-400/30 md:hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]'
            }`}
          >
            <div className="aspect-4/5 overflow-hidden relative">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                  touchedCard === index 
                    ? 'grayscale-0 scale-110' 
                    : 'grayscale-30 md:group-hover:grayscale-0 md:group-hover:scale-110'
                }`}
              />
              
              <div className={`absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent transition-opacity ${
                touchedCard === index ? 'opacity-60' : 'opacity-80 md:group-hover:opacity-60'
              }`} />

              <div className={`absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-500 ${
                touchedCard === index 
                  ? 'translate-y-0 opacity-100' 
                  : '-translate-y-4 opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100'
              }`}>
                <ArrowUpRight className="text-white" size={18} />
              </div>

              <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 text-cyan-300 font-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] tracking-widest uppercase shadow-2xl">
                  {dest.discount} İndirimli
                </div>
              </div>
            </div>

            <div className={`absolute bottom-0 left-0 p-5 sm:p-8 w-full transition-transform duration-500 ${
              touchedCard === index ? 'translate-y-0' : 'translate-y-4 md:group-hover:translate-y-0'
            }`}>
              <h3 className="text-2xl sm:text-3xl font-black text-white italic mb-2 sm:mb-3 tracking-tighter">
                {dest.name}
              </h3>
              
              <div className={`overflow-hidden transition-all duration-500 ${
                touchedCard === index 
                  ? 'h-10 sm:h-12 opacity-100' 
                  : 'h-0 opacity-0 md:group-hover:h-10 md:group-hover:sm:h-12 md:group-hover:opacity-100'
              }`}>
                <p className="text-white/70 text-xs sm:text-sm font-medium leading-relaxed italic border-l-2 border-cyan-400/30 pl-3 sm:pl-4">
                  {dest.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 -z-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>
    </section>
  );
}