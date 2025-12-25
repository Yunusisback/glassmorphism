import { Waves, Hotel, UtensilsCrossed, Plane, Sailboat, Crown } from 'lucide-react';
import { benefits } from '../../utils/constants';


const IconMap = { Hotel, Waves, UtensilsCrossed, Plane, Sailboat, Crown };

export default function Benefits() {
  return (
    <section>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 italic tracking-tighter">Ayrıcalıklar Dünyası</h2>
        <p className="text-cyan-400 font-bold tracking-[0.3em] text-xs uppercase opacity-80">SeaGlass Özel Avantajlar</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => {
          const IconComp = IconMap[benefit.icon] || Waves;
          return (
            <div key={index} className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 group">
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-400/20 transition-all">
                <IconComp className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-white/50 text-sm">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}