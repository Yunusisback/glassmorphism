import { Waves, Hotel, UtensilsCrossed, Plane, Sailboat, Crown } from 'lucide-react';
import { benefits } from '../../utils/constants';

const IconMap = { Hotel, Waves, UtensilsCrossed, Plane, Sailboat, Crown };

export default function Benefits() {
  return (
    <section className="px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-black mb-4 italic tracking-tighter">Ayrıcalıklar Dünyası</h2>
        <p className="text-cyan-400 font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs uppercase opacity-80">SeaGlass Özel Avantajlar</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {benefits.map((benefit, index) => {
          const IconComp = IconMap[benefit.icon] || Waves;
          return (
            <div key={index} className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-cyan-400/20 transition-all">
                <IconComp className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{benefit.title}</h3>
              <p className="text-white/50 text-xs sm:text-sm">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}