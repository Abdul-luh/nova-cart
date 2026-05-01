import { Calendar, Download, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

export function DashboardHeader() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Fake loading animation for refresh button
  useEffect(() => {
    if (isRefreshing) {
      const timer = setTimeout(() => setIsRefreshing(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isRefreshing]);

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Real-Time Commerce Analytics
        </h1>
        <p className="text-gray-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-lime animate-pulse shadow-[0_0_8px_rgba(132,204,22,0.8)]"></span>
          Real-time marketplace intelligence
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="glass-panel px-4 py-2 flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-all hover:bg-white/5">
          <Calendar className="w-4 h-4 text-neon-cyan" />
          <span>Last 7 Days</span>
        </button>
        <button 
          onClick={() => setIsRefreshing(true)}
          className="glass-panel px-4 py-2 flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-all hover:bg-white/5"
        >
          <RefreshCw className={`w-4 h-4 text-neon-purple ${isRefreshing ? 'animate-spin' : ''}`} />
          <span>Live Sync</span>
        </button>
        <button className="bg-neon-cyan text-background font-medium px-4 py-2 rounded-lg flex items-center gap-2 text-sm hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,242,254,0.4)]">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>
    </div>
  );
}
