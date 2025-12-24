import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Waves } from "lucide-react";

function CreditCardShowcase() {
    
  // Dokunma durumunu takip eden state
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div 
      className="w-full max-w-md mx-auto"
      // Mobilde dokunma başladığında ve bittiğinde tetiklenir
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}

      // Mouse ile kullanım desteği (PC için)
      onMouseEnter={() => setIsTouched(true)}
      onMouseLeave={() => setIsTouched(false)}
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={2500}
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="#ffffff"
        glarePosition="all"
      
        className={`rounded-[2.5rem] overflow-hidden transition-all duration-500 ${
          isTouched ? "shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        {/* Kart Ana Gövdesi */}
        <div className="relative aspect-[1.586/1] w-full rounded-[2.5rem] overflow-hidden border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
          
            {/* 1. cam etkisi */}
          <div className="absolute inset-0 backdrop-blur-[15px] bg-white/10 z-0" />
          
          {/* 2. gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-600/30 z-0" />

          {/* Kart İçeriği */}
          <div className="relative z-10 h-full p-8 flex flex-col justify-between select-none">
            
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] text-white/70 font-bold tracking-[0.3em] uppercase mb-1">SeaCard Premium</p>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  Credit Card
                </h3>
              </div>
              <div className="opacity-80">
                <Waves size={32} className="text-white" strokeWidth={1.5} />
              </div>
            </div>

            {/* Çip Bölümü */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-11 rounded-lg bg-gradient-to-br from-yellow-200 via-yellow-500 to-amber-600 p-[1px] shadow-lg relative overflow-hidden">
                 <div className="w-full h-full border border-black/10 rounded-lg"></div>
              </div>
            </div>

            {/* Alt Bölüm */}
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-mono text-white font-medium tracking-[0.15em]">
                1524 9578 9576 9528
              </div>
              
              <div className="flex justify-between items-end">
                  <div className="flex gap-6">
                      <div>
                          <p className="text-[8px] text-white/50 uppercase tracking-widest">Cardholder</p>
                          <p className="text-xs text-white font-semibold uppercase">EMMA TAKUREEA</p>
                      </div>
                      <div>
                          <p className="text-[8px] text-white/50 uppercase tracking-widest">Expires</p>
                          <p className="text-xs text-white font-semibold">12 / 28</p>
                      </div>
                  </div>
                  <div className="w-12 h-8 rounded-md bg-gradient-to-tr from-gray-300 to-gray-100 opacity-40"></div>
              </div>
            </div>
          </div>

     
          <div className={`absolute inset-0 rounded-[2.5rem] border-2 border-white/20 transition-opacity duration-500 pointer-events-none ${
            isTouched ? "opacity-100" : "opacity-0"
          }`} />
          
          <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent transition-opacity duration-700 pointer-events-none ${
            isTouched ? "opacity-100" : "opacity-0"
          }`} />

        </div>
      </Tilt>
    </div>
  );
}

export default CreditCardShowcase;