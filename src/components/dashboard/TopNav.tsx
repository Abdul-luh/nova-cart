import { useState, useRef, useEffect } from "react";
import { Search, Bell, User, Menu, Box, Users, Tag, ShoppingBag } from "lucide-react";

const searchData = [
  { id: 1, type: 'user', title: 'OofMaster', sub: 'Joined 2 days ago' },
  { id: 2, type: 'user', title: 'xX_Sniper_Xx', sub: 'Pro Gamer' },
  { id: 3, type: 'order', title: '#ORD-9912', sub: 'Completed - $220' },
  { id: 4, type: 'order', title: '#ORD-8821', sub: 'Pending - $45' },
  { id: 5, type: 'seller', title: 'ProSeller1', sub: 'Top Rated Seller' },
  { id: 6, type: 'seller', title: 'SkinMarket', sub: 'Verified Vendor' },
  { id: 7, type: 'asset', title: 'Valorant Immortal Account', sub: 'Gaming Accounts' },
  { id: 8, type: 'asset', title: 'Midjourney Pro Pack', sub: 'AI Tools' },
  { id: 9, type: 'asset', title: 'Dragon Lore', sub: 'Rare Skins' },
];

const getSearchIcon = (type: string) => {
  switch (type) {
    case 'user': return <Users className="w-4 h-4 text-neon-lime" />;
    case 'order': return <ShoppingBag className="w-4 h-4 text-neon-cyan" />;
    case 'seller': return <Tag className="w-4 h-4 text-neon-purple" />;
    case 'asset': return <Box className="w-4 h-4 text-yellow-400" />;
    default: return <Search className="w-4 h-4 text-gray-400" />;
  }
};

const notifications = [
  { id: 1, text: "3 chargebacks today", type: "alert", time: "10m ago" },
  { id: 2, text: "12 new sellers joined", type: "success", time: "1h ago" },
  { id: 3, text: "Server latency elevated", type: "warning", time: "2h ago" },
  { id: 4, text: "Top seller reached $10k", type: "info", time: "5h ago" },
];

export function TopNav() {
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showNotifs, setShowNotifs] = useState(false);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setShowNotifs(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredSearch = searchData.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.sub.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <nav className="w-full glass-panel mb-6 px-6 py-4 flex items-center justify-between z-50">
      <div className="flex items-center gap-2 lg:hidden">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon-cyan to-neon-purple flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,242,254,0.5)]">
          N
        </div>
        <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
          Nova<span className="text-neon-cyan text-glow-cyan">Cart</span>
        </span>
      </div>

      <div className="flex-1 max-w-xl mx-4 sm:mx-8 relative group" ref={searchRef}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-neon-cyan transition-colors" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          className="block w-full pl-10 pr-3 py-2.5 border border-white/10 rounded-xl leading-5 bg-white/5 text-gray-300 placeholder-gray-500 focus:outline-none focus:bg-white/10 focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all sm:text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]"
          placeholder="Search assets, users, orders..."
        />
        
        {/* Search Results Dropdown */}
        {isSearchFocused && query && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1e2e] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
            <div className="p-2">
              <p className="text-xs font-semibold text-gray-500 mb-2 px-3 pt-2">SEARCH RESULTS</p>
              {filteredSearch.length > 0 ? (
                filteredSearch.map(item => (
                  <button key={item.id} className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors text-left group">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      {getSearchIcon(item.type)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.sub}</p>
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-sm text-gray-400">
                  No results found for "{query}"
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="relative" ref={notifRef}>
          <button 
            onClick={() => setShowNotifs(!showNotifs)}
            className={`p-2.5 transition-colors rounded-xl relative ${showNotifs ? 'bg-white/10 text-white shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 block h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] border border-[#111827]"></span>
          </button>
          
          {/* Notifications Dropdown */}
          {showNotifs && (
            <div className="absolute top-full right-0 mt-3 w-80 bg-[#1a1e2e] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
              <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                <h4 className="font-bold text-white">Notifications</h4>
                <button className="text-xs text-neon-cyan hover:text-white transition-colors">Mark all as read</button>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                {notifications.map(n => (
                  <div key={n.id} className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors flex flex-col gap-1 cursor-pointer">
                    <p className={`text-sm font-medium ${
                      n.type === 'alert' ? 'text-red-400' : 
                      n.type === 'success' ? 'text-neon-lime' : 
                      n.type === 'warning' ? 'text-yellow-400' : 'text-neon-cyan'
                    }`}>
                      {n.text}
                    </p>
                    <p className="text-xs text-gray-500">{n.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-3 bg-white/5 text-center">
                <button className="text-sm text-gray-400 hover:text-white transition-colors">View all notifications</button>
              </div>
            </div>
          )}
        </div>

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
        <button className="lg:hidden p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  );
}
