function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-white/10 text-white border-white/20",
    discount: "bg-gradient-to-r from-amber-500 to-orange-500 text-white border-amber-400/30",
    popular: "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400/30",
    success: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-400/30"
  };

  return (
    <span className={`
      inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
      backdrop-blur-sm border shadow-lg
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
}

export default Badge;