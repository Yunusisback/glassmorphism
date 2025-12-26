import { CheckCircle2 } from 'lucide-react';
import { cardTiers } from '../../utils/constants';
import { useState } from 'react';

export default function Pricing() {
  const [touchedCard, setTouchedCard] = useState(null);

  return (
    <section className="pb-12 sm:pb-20">
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-black italic tracking-tighter mb-4 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
          Size Özel Paketler
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center px-4">
        {cardTiers.map((tier, index) => (
          <div 
            key={index}
            onTouchStart={() => setTouchedCard(index)}
            onTouchEnd={() => setTimeout(() => setTouchedCard(null), 300)}
            className={`
              relative p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] backdrop-blur-3xl border transition-all duration-500 cursor-default
              ${touchedCard === index ? '-translate-y-2 sm:-translate-y-4' : 'md:hover:-translate-y-2 md:hover:sm:-translate-y-4'}
              ${tier.popular 
                ? 'bg-black/40 border-cyan-400 shadow-[0_20px_50px_rgba(34,211,238,0.3)] md:scale-105 z-20' 
                : `bg-black/60 border-white/20 ${
                    touchedCard === index 
                      ? 'border-cyan-400/50 shadow-[0_20px_50px_rgba(255,255,255,0.1)]' 
                      : 'md:hover:border-cyan-400/50 md:hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)]'
                  }`
              }
            `}
          >
            {tier.popular && (
              <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-[9px] sm:text-[10px] font-black px-4 sm:px-6 py-1 sm:py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                En Popüler
              </div>
            )}

            <h3 className="text-2xl sm:text-3xl font-black mb-1 italic tracking-tighter text-white drop-shadow-md">
              {tier.name}
            </h3>
            <div className="text-cyan-400 font-bold text-xl sm:text-2xl mb-6 sm:mb-8 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
              {tier.price}
            </div>

            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {tier.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm font-black">
                  <CheckCircle2 
                    size={16} 
                    className="text-cyan-400 shrink-0 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] sm:w-4.5 sm:h-4.5" 
                  />
                  <span className="text-white drop-shadow-sm leading-tight">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <button className={`
              w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black uppercase text-[10px] sm:text-xs transition-all duration-300 active:scale-95 touch-manipulation
              ${tier.popular 
                ? 'bg-cyan-400 text-black active:bg-white shadow-[0_10px_20px_rgba(34,211,238,0.4)] md:hover:bg-white md:hover:scale-105' 
                : 'bg-white/10 text-white border border-white/20 active:bg-white active:text-black md:hover:bg-white md:hover:text-black'
              }
            `}>
              Seç
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}