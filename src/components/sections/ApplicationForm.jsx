import GlassCard from "../cards/GlassCard";
import Button from "../ui/Button";
import { Sparkles, User, Mail, Phone, Send } from "lucide-react";



export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cardType: "gold"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <GlassCard className="w-full max-w-5xl p-6 md:p-8 border-white/30 bg-black/60 backdrop-blur-3xl shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
      
      <div className="flex items-center justify-between mb-8 border-b border-white/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
            <Sparkles size={20} className="text-cyan-400" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-white italic tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Hemen Başvur
            </h2>
            <p className="text-[11px] text-cyan-400 uppercase tracking-[0.2em] font-black drop-shadow-sm">
              Hızlı Onay Sistemi
            </p>
          </div>
        </div>
        <div className="hidden md:block text-right">
          <span className="text-[10px] text-white font-black tracking-widest uppercase border-2 border-cyan-400/30 px-4 py-1.5 rounded-full bg-cyan-400/10">
            SeaGlass Özel
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group">
            <User size={18} className="absolute left-3 top-9.75 text-cyan-400 z-10" />
            <label className="block text-[11px] font-black text-white uppercase mb-2 ml-1 tracking-widest">
              Ad Soyad
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Adınız Soyadınız"
              className="w-full pl-11 pr-4 py-3.5 bg-white/10 border-2 border-white/30 rounded-xl text-sm text-white placeholder-white/40 focus:bg-black/40 focus:border-cyan-400 focus:outline-none transition-all font-bold shadow-inner"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative group">
            <Mail size={18} className="absolute left-3 top-9.75 text-cyan-400 z-10" />
            <label className="block text-[11px] font-black text-white uppercase mb-2 ml-1 tracking-widest">
              E-posta
            </label>
            <input
              type="email"
              name="email"
              placeholder="ornek@mail.com"
              className="w-full pl-11 pr-4 py-3.5 bg-white/10 border-2 border-white/30 rounded-xl text-sm text-white placeholder-white/40 focus:bg-black/40 focus:border-cyan-400 focus:outline-none transition-all font-bold shadow-inner"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative group">
            <Phone size={18} className="absolute left-3 top-9.75 text-cyan-400 z-10" />
            <label className="block text-[11px] font-black text-white uppercase mb-2 ml-1 tracking-widest">
              Telefon
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="05xx..."
              className="w-full pl-11 pr-4 py-3.5 bg-white/10 border-2 border-white/30 rounded-xl text-sm text-white placeholder-white/40 focus:bg-black/40 focus:border-cyan-400 focus:outline-none transition-all font-bold shadow-inner"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end border-t border-white/20 pt-8">
          <div className="md:col-span-1 group">
            <label className="block text-[11px] font-black text-white uppercase mb-2 ml-1 tracking-widest">
              Kart Tipi
            </label>
            <select
              name="cardType"
              className="w-full px-4 py-3.5 bg-white/10 border-2 border-white/30 rounded-xl text-sm text-white font-bold focus:bg-black focus:border-cyan-400 focus:outline-none transition-all cursor-pointer appearance-none shadow-inner"
              onChange={handleChange}
            >
              <option value="classic" className="bg-neutral-900">Classic</option>
              <option value="gold" className="bg-neutral-900">Gold</option>
              <option value="platinum" className="bg-neutral-900">Platinum</option>
            </select>
          </div>

          <div className="md:col-span-3">
            <Button 
              type="submit" 
              className="cursor-pointer w-full py-4.5 bg-cyan-400 hover:bg-white text-black font-black uppercase text-sm tracking-[0.25em] transition-all duration-500 rounded-xl flex items-center justify-center gap-3 group shadow-[0_15px_30px_rgba(34,211,238,0.4)] hover:shadow-cyan-400/20"
            >
              BAŞVURUYU SİSTEME GÖNDER
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </form>
    </GlassCard>
  );
}