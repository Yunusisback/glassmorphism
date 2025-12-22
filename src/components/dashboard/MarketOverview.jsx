import GlassCard from "../cards/GlassCard";
import { mockMarketData } from "../../utils/constants";

function MarketOverview() {
  return (
    <GlassCard className="flex-1 flex flex-col gap-6 relative overflow-hidden">

      {/* Başlık ve Tümünü Gör butonu */}
      <div className="flex justify-between items-center z-10">
        <h3 className="text-lg font-bold text-white">Market Overview</h3>
        <button className="text-xs font-bold text-yellow-400 border border-yellow-400/20 px-3 py-1 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
          View All
        </button>
      </div>

      {/* Piyasa listesi */}
      <div className="space-y-4 z-10">
        {mockMarketData.map((item, i) => (
          <div key={i} className="flex items-center justify-between group cursor-pointer">

            {/* Sol taraf */}
            <div className="flex items-center gap-3">

              {/* Kripto- varlık ikonu */}
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-yellow-400/50 transition-colors">
                <span className="font-bold text-xs text-yellow-400">{item.s}</span>
              </div>

              {/* Varlık bilgileri */}
              <div>
                <p className="text-sm font-bold text-white">{item.n}</p>
                <p className="text-[10px] text-gray-500 font-medium">Global Avg.</p>
              </div>
            </div>

            {/* Sağ taraf */}
            <div className="text-right">
              <p className="text-sm font-bold text-white">{item.p}</p>
              <p className={`text-[10px] font-bold ${item.up ? 'text-green-400' : 'text-red-400'}`}>
                {item.g}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* dekoratif gradient */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-400/10 blur-[80px] rounded-full pointer-events-none" />
    </GlassCard>
  );
}

export default MarketOverview;