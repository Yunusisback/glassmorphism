import { Search, ChevronDown } from "lucide-react";
import { userData } from "../../utils/constants";

function Header() {
  return (
    <header className="flex justify-between items-end">
      <div className="flex items-center">

        {/* Logo */}
        <img
          src="/unnamed.png"
          alt="BankGolden Logo"
          className="w-35 h-35"
        />

        <div>

          {/* Ana başlık */}
          <h1 className="text-5xl font-black text-white tracking-tighter leading-tight">
            Bank<span className="text-yellow-400">Golden</span>
          </h1>

          {/* Hoş geldin mesajı */}
          <p className="text-gray-500 text-sm font-medium tracking-wide mt-1">
            Welcome back, <span className="text-white">{userData.name.split(' ')[0]}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">

        {/* Arama çubuğu */}
        <div className="hidden md:flex items-center bg-[#1a1a1a]/50 backdrop-blur-md border border-white/5 rounded-full px-5 py-3 mb-6 gap-3 focus-within:border-yellow-400/50 transition-colors">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search assets..."
            className="bg-transparent outline-none text-sm text-white placeholder-gray-600 w-48"
          />
        </div>

        {/* Profil butonu */}
        <button className="flex items-center gap-3 mb-6 bg-[#1a1a1a]/80 backdrop-blur-xl pl-3 pr-6 py-1 rounded-full border border-white/10 hover:border-yellow-400/30 transition-all group">
          <img
            src={userData.avatar}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-yellow-400/20 group-hover:border-yellow-400 transition-colors object-cover"
          />
          <div className="text-left hidden sm:block">
            <p className="text-xs font-bold text-white leading-tight">{userData.name}</p>
            <p className="text-[9px] font-bold text-yellow-500 uppercase tracking-widest">{userData.status}</p>
          </div>
          <ChevronDown size={14} className="text-gray-500" />
        </button>
      </div>
    </header>
  );
}

export default Header;