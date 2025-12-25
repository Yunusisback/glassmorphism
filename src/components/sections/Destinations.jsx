import { destinations } from '../../utils/constants';
import {  ArrowUpRight } from "lucide-react";


export default function Destinations() {
  return (
    <section className="py-20 relative">
      
      {/* Başlık Grubu */}
      <div className="mb-16 px-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-0.5 bg-cyan-400"></div>
          <span className="text-cyan-400 font-black tracking-[0.4em] text-[10px] uppercase">
            SeaGlass Exclusive Travel
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter text-white">
          Popüler <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-cyan-400">Rotalar</span>
        </h2>
      </div>
      
      {/* Rota  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {destinations.map((dest, index) => (
          <div 
            key={index} 
            className="group relative cursor-pointer rounded-[2.5rem] overflow-hidden border border-white/5 bg-black/20 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Görsel Alanı */}
            <div className="aspect-4/5 overflow-hidden relative">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Sağ Üst İkon  */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <ArrowUpRight className="text-white" size={20} />
              </div>

              {/* İndirim Rozeti */}
              <div className="absolute top-6 left-6">
                <div className="bg-black/40 backdrop-blur-xl border border-white/10 text-cyan-300 font-black px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase shadow-2xl">
                  {dest.discount} İndirimli
                </div>
              </div>
            </div>

            {/* Bilgi Alanı*/}
            <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-2 mb-2">
              </div>
              
              <h3 className="text-3xl font-black text-white italic mb-3 tracking-tighter">
                {dest.name}
              </h3>
              
              <div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-white/70 text-sm font-medium leading-relaxed italic border-l-2 border-cyan-400/30 pl-4">
                  {dest.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full"></div>
    </section>
  );
}