import Tilt from "react-parallax-tilt";
import { userData } from "../utils/constants";

function CreditCard() {
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareMaxOpacity={0.3} glareColor="#FFD700" className="w-full">
      <div className="relative aspect-[1.586/1] w-full rounded-4xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform hover:scale-[1.02] border border-white/10 bg-linear-to-br from-gray-900 via-gray-800 to-black">

   
        <div className="absolute inset-0">

          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 250">
            <circle cx="80" cy="180" r="60" fill="url(#g)" />
            <circle cx="320" cy="100" r="80" fill="url(#g)" />
            <defs>
              <radialGradient id="g">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Kart içeriği */}
        <div className="relative z-10 h-full p-8 flex flex-col justify-between">

          {/* Bakiye ve VISA logosu */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">Current Balance</p>
              <h3 className="text-3xl font-black text-white tracking-tighter">
                {userData.balance.split('.')[0]}.<span className="text-lg text-gray-400">{userData.balance.split('.')[1]}</span>
              </h3>
            </div>
            <h2 className="text-2xl font-black italic text-white/90">VISA</h2>
          </div>

          {/*  Kart sahibi bilgileri ve numara */}
          <div className="flex justify-between items-end">
            <div className="flex gap-6">

              {/* Kart sahibi */}
              <div className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                <p className="mb-1.5">Card Holder</p>
                <p className="text-white text-sm tracking-normal font-bold">{userData.fullName}</p>
              </div>

              {/* Son kullanma tarihi */}
              <div className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">
                <p className="mb-1.5">Expires</p>
                <p className="text-white text-sm tracking-normal font-bold">{userData.cardExpiry}</p>
              </div>
            </div>

            {/* Kart numarası */}
            <div className="text-lg font-mono text-white/90 tracking-[0.3em] font-bold">
              {userData.cardNumber}
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default CreditCard;