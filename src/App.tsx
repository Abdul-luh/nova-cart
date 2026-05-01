import { TopNav } from "./components/dashboard/TopNav";
import { DashboardHeader } from "./components/dashboard/DashboardHeader";
import { KPICards } from "./components/dashboard/KPICards";
import { MainCharts } from "./components/dashboard/MainCharts";
import { SecondaryMetrics } from "./components/dashboard/SecondaryMetrics";
import { ActivityFeed } from "./components/dashboard/ActivityFeed";

function App() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden selection:bg-neon-cyan/30">
      {/* Background Ambient Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-purple/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-cyan/10 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 relative z-10">
        <TopNav />
        
        <main className="animate-in fade-in duration-700">
          <DashboardHeader />
          <KPICards />
          <MainCharts />
          <SecondaryMetrics />
          <ActivityFeed />
        </main>
        
        <footer className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-gray-500 pb-6">
          &copy; {new Date().getFullYear()} NovaCart Live Analytics. Internal Dashboard.
        </footer>
      </div>
    </div>
  );
}

export default App;
