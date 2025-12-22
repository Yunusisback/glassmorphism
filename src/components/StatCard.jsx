import Tilt from "react-parallax-tilt";
import { TrendingUp } from "lucide-react";
import GlassCard from "./cards/GlassCard";

function StatCard({ title, value, trend, data, icon: Icon, color = "#FFD700" }) {

  // Maksimum değeri bul (grafik normalizasyonu için)
  const maxVal = Math.max(...data.map(d => d.val));

  return (
    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
      <GlassCard className="h-full flex flex-col justify-between">

        {/*İkon ve trend göstergesi */}
        <div className="flex justify-between items-start mb-2">
          <div className="p-3 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/5">
            <Icon size={20} style={{ color }} />
          </div>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${trend > 0 ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'} border border-white/5`}>
            {trend > 0 ? <TrendingUp size={12} /> : <TrendingUp size={12} className="rotate-180" />}
            <span className="text-[10px] font-bold">{Math.abs(trend)}%</span>
          </div>
        </div>

        {/* Ana değer ve başlık */}
        <div>
          <h3 className="text-3xl font-black text-white tracking-tight">{value}</h3>
          <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mt-1">{title}</p>
        </div>

        {/* Mini bar chart  */}
        <div className="flex items-end gap-1 h-12 mt-4 opacity-40">
          {data.map((d, i) => (
            <div
              key={i}
              className="flex-1 rounded-t transition-all duration-300"
              style={{
                height: `${(d.val / maxVal) * 100}%`,
                backgroundColor: color,
                boxShadow: `0 0 8px ${color}40`
              }}
            />
          ))}
        </div>
      </GlassCard>
    </Tilt>
  );
}

export default StatCard;