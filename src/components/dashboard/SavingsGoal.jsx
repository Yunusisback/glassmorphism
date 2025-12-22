import { motion } from "framer-motion";
import GlassCard from "../cards/GlassCard";

function SavingsGoal() {
  return (
    <GlassCard className="flex-1 flex flex-col justify-center gap-4">

      {/* Başlık ve ilerleme yüzdesi */}
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-xs font-bold text-gray-500">SAVINGS GOAL</p>
          <p className="text-2xl font-black text-white">Ferrari 488</p>
        </div>
        <p className="text-2xl font-bold text-yellow-400">70%</p>
      </div>

      {/* İlerleme çubuğu */}
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "70%" }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="h-full bg-yellow-400 shadow-[0_0_15px_#FFD700]"
        />
      </div>
    </GlassCard>
  );
}

export default SavingsGoal;