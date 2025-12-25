import { ArrowRight } from 'lucide-react';
import { applySteps } from '../../utils/constants';


export default function Steps() {
  return (
    <section>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black mb-4 italic tracking-tighter">Nasıl Başvurulur?</h2>
        <p className="text-cyan-400 font-bold tracking-[0.3em] text-xs uppercase opacity-80">3 Basit Adımda Kartınız Hazır</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {applySteps.map((step, index) => (
          <div key={index} className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-center group">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-cyan-500 text-black font-black flex items-center justify-center text-xl shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              {step.step}
            </div>
            <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
            <p className="text-white/50 text-sm">{step.description}</p>
            {index < 2 && (
              <ArrowRight className="hidden md:block absolute top-1/2 -right-6 text-cyan-500/30 group-hover:text-cyan-500 transition-colors" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}