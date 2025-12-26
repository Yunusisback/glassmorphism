import { ArrowRight } from 'lucide-react';
import { applySteps } from '../../utils/constants';

export default function Steps() {
  return (
    <section className="px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-black mb-4 italic tracking-tighter">Nasıl Başvurulur?</h2>
        <p className="text-cyan-400 font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs uppercase opacity-80">3 Basit Adımda Kartınız Hazır</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
        {applySteps.map((step, index) => (
          <div key={index} className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-center group">
            <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-500 text-black font-black flex items-center justify-center text-lg sm:text-xl shadow-[0_0_20px_rgba(34,211,238,0.5)]">
              {step.step}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mt-4 mb-2 sm:mb-3">{step.title}</h3>
            <p className="text-white/50 text-xs sm:text-sm">{step.description}</p>
            {index < 2 && (
              <ArrowRight className="hidden md:block absolute top-1/2 -right-6 text-cyan-500/30 group-hover:text-cyan-500 transition-colors" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}