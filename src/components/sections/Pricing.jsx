import { CheckCircle2 } from 'lucide-react';
import { cardTiers } from '../../utils/constants';


export default function Pricing() {
  return (
    <section className="pb-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black italic tracking-tighter mb-4 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]">
          Size Özel Paketler
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {cardTiers.map((tier, index) => (
          <div 
            key={index} 
            className={`
              relative p-10 rounded-[2.5rem] backdrop-blur-3xl border transition-all duration-500 cursor-default
              group hover:-translate-y-4
              ${tier.popular 
                ? 'bg-black/40 border-cyan-400 shadow-[0_20px_50px_rgba(34,211,238,0.3)] scale-105 z-20' 
                : 'bg-black/60 border-white/20 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)]'
              }
            `}
          >
            {tier.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-cyan-400 text-black text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                En Popüler
              </div>
            )}

            <h3 className="text-3xl font-black mb-1 italic tracking-tighter text-white drop-shadow-md">
              {tier.name}
            </h3>
            <div className="text-cyan-400 font-bold text-2xl mb-8 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
              {tier.price}
            </div>

            <ul className="space-y-4 mb-10">
              {tier.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-black">
                  <CheckCircle2 
                    size={18} 
                    className="text-cyan-400 shrink-0 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" 
                  />
                  <span className="text-white drop-shadow-sm leading-tight">
                    {feat}
                  </span>
                </li>
              ))}
            </ul>

            <button className={`
              w-full py-4 rounded-2xl font-black uppercase text-xs transition-all duration-300
              ${tier.popular 
                ? 'bg-cyan-400 text-black hover:bg-white hover:scale-105 shadow-[0_10px_20px_rgba(34,211,238,0.4)]' 
                : 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black'
              }
            `}>
              Seç
            </button>
          </div>
        ))}
      </div>a
    </section>
  );
}