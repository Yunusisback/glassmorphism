function GlassCard({ children, className = "" }) {
  return (
    <div className={`relative bg-white/2 backdrop-blur-sm border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-4xl overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/4 p-6 ${className}`}>


      <div className="absolute inset-0 rounded-4xl border border-white/5 pointer-events-none" />

      {children}
    </div>
  );
}

export default GlassCard;