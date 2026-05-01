import { Search, Bell, User, Menu } from "lucide-react";

export function TopNav() {
  return (
    <nav className="w-full glass-panel mb-6 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon-cyan to-neon-purple flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,242,254,0.5)]">
          N
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          Nova<span className="text-neon-cyan text-glow-cyan">Cart</span>
        </span>
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-8 relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-neon-cyan transition-colors" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-full leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all sm:text-sm"
          placeholder="Search assets, users, orders..."
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 block h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-white/10 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-white group-hover:text-neon-cyan transition-colors">Admin User</p>
            <p className="text-xs text-gray-400">Founder</p>
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden group-hover:border-neon-cyan transition-colors shadow-[0_0_10px_rgba(0,242,254,0.2)]">
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
              <User className="h-6 w-6 text-gray-300" />
            </div>
          </div>
        </div>
        <button className="md:hidden p-2 text-gray-400 hover:text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
