import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Waves } from "lucide-react";

function CreditCardShowcase() {
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div
      className="w-full max-w-md mx-auto"
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
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
        className={`rounded-[2.5rem] overflow-hidden transition-all duration-500 ${isTouched ? "shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : ""
          }`}
      >
        {/* Kart Ana Gövdesi */}
        <div className="relative aspect-[1.586/1] w-full rounded-[2.5rem] overflow-hidden border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">

          {/* Arkaplan Etkileri */}
          <div className="absolute inset-0 backdrop-blur-[15px] bg-white/10 z-0" />
          <div className="absolute inset-0 bg-linear-to-br from-cyan-400/20 via-transparent to-blue-600/30 z-0" />

          {/* Kart İçeriği */}
          <div className="relative z-10 h-full p-8 flex flex-col justify-between select-none">

            {/* Üst Kısım */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold text-white tracking-tight">SEAGLASS</h3>
              </div>
              <div className="opacity-80">
                <Waves size={32} className="text-white" strokeWidth={1.5} />
              </div>
            </div>

            {/* Orta Kısım*/}
            <div className="flex items-center gap-4 -mt-4">
              <div className="w-14 h-11 rounded-lg bg-linear-to-br from-yellow-200 via-yellow-500 to-amber-600 p-px shadow-lg relative">
                <div className="w-full h-full border border-black/10 rounded-lg flex flex-col justify-around p-1">
                  <div className="w-full h-px bg-black/20"></div>
                  <div className="w-full h-px bg-black/20"></div>
                  <div className="w-full h-px bg-black/20"></div>
                </div>
              </div>
              {/* Temassız Simgesi */}
              <div className="flex gap-1 rotate-90 opacity-40">
                <div className="w-1 h-3 rounded-full bg-white"></div>
                <div className="w-1 h-3 rounded-full bg-white scale-y-125"></div>
                <div className="w-1 h-3 rounded-full bg-white scale-y-150"></div>
              </div>
            </div>

            {/* Alt Kısım */}
            <div className="flex flex-col gap-4">

              {/* Kart Numarası */}
              <div className="text-2xl font-mono text-white font-medium tracking-[0.15em] drop-shadow-lg">
                1524 9578 9576 9528
              </div>

              <div className="flex justify-between items-end">
                <div className="flex gap-8">
                  <div>
                    <p className="text-[8px] text-white/50 uppercase tracking-widest mb-1">Kart Sahibi</p>
                    <p className="text-xs text-white font-semibold uppercase tracking-wider">EMMA TAKUREEA</p>
                  </div>
                  <div>
                    <p className="text-[8px] text-white/50 uppercase tracking-widest mb-1">VALID THRU</p>
                    <p className="text-xs text-white font-semibold">12 / 28</p>
                  </div>
                </div>

                {/* VISA Logo  */}
                <div className="relative group">
                  <span className="text-4xl font-black italic text-white/60 tracking-tighter select-none">
                    VISA
                  </span>


                  <div className="absolute -inset-1 bg-white/5 blur-xl rounded-full group-hover:bg-white/10 transition-colors"></div>
                </div>
              </div>
            </div>
          </div>


          <div className={`absolute inset-0 rounded-[2.5rem] border-2 border-white/20 transition-opacity duration-500 pointer-events-none ${isTouched ? "opacity-100" : "opacity-0"
            }`} />

          <div className={`absolute top-0 left-0 w-full h-full bg-linear-to-tr from-transparent via-white/10 to-transparent transition-opacity duration-700 pointer-events-none ${isTouched ? "opacity-100" : "opacity-0"
            }`} />

        </div>
      </Tilt>
    </div>
  );
}

export default CreditCardShowcase;