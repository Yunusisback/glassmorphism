import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft, FileText, Plus } from "lucide-react";

function QuickActions() {

  const actions = [
    { label: "Send", icon: ArrowUpRight },
    { label: "Receive", icon: ArrowDownLeft },
    { label: "Bill", icon: FileText },
    { label: "More", icon: Plus },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {actions.map((act, i) => (
        <motion.button
          whileHover={{ scale: 1.05, translateY: -2 }}
          whileTap={{ scale: 0.95 }}
          key={i}
          className="flex flex-col items-center gap-2 group"
        >
          {/* İkon container */}
          <div className="w-14 h-14 rounded-[1.2rem] bg-[#1a1a1a] border border-white/5 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300">
            <act.icon size={22} className="text-gray-400 group-hover:text-black transition-colors" />
          </div>

          {/* Buton etiketi */}
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
            {act.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}

export default QuickActions;