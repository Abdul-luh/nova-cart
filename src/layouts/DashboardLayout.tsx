import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/dashboard/Sidebar";
import { TopNav } from "../components/dashboard/TopNav";
import { LiveOrdersPanel } from "../components/dashboard/LiveOrdersPanel";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden selection:bg-neon-cyan/30 text-gray-100">
      {/* Background Ambient Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-purple/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-cyan/10 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1800px] mx-auto p-4 md:p-6 lg:p-8 relative z-10 flex gap-6 lg:gap-8">
        <Sidebar />
        
        <div className="flex-1 min-w-0 flex flex-col h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)]">
          <TopNav />
          
          <main className="flex-1 overflow-y-auto pr-2 custom-scrollbar animate-in fade-in duration-700 mt-6">
            <Outlet />
            
            <footer className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-500 pb-6">
              &copy; {new Date().getFullYear()} NovaCart Live Analytics. Internal Dashboard.
            </footer>
          </main>
        </div>

        <LiveOrdersPanel />
      </div>
    </div>
  );
}
