function GlassCard({ children, className = "" }) {
  return (
    <div className={`
      relative 
      bg-white/5 
      backdrop-blur-xl 
      backdrop-saturate-150
      rounded-4xl 
      border border-white/20
      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
      p-8
      transition-all duration-300
      hover:bg-white/10
      hover:border-white/30
      ${className}
    `}>
     
      <div className="absolute inset-0 rounded-4xl border border-white/10 pointer-events-none" />
      
     
      {children}
    </div>
  );
}

export default GlassCard;