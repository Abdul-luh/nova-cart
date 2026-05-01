import { useState, useEffect } from "react";
import { DollarSign, Users, ShoppingCart, Activity, ShieldAlert, ArrowUpRight, ArrowDownRight } from "lucide-react";

type KPI = {
  id: string;
  title: string;
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
  color: string;
  glowClass: string;
};

export function KPICards() {
  const [kpis, setKpis] = useState<KPI[]>([
    { id: "rev", title: "Revenue Today", numericValue: 48320, prefix: "$", value: "48,320", change: "+12.5%", trend: "up", icon: <DollarSign />, color: "text-neon-cyan", glowClass: "shadow-[0_0_15px_rgba(0,242,254,0.15)]" },
    { id: "buyers", title: "Live Buyers", numericValue: 1284, value: "1,284", change: "+5.2%", trend: "up", icon: <Users />, color: "text-neon-purple", glowClass: "shadow-[0_0_15px_rgba(168,85,247,0.15)]" },
    { id: "orders", title: "Orders Completed", numericValue: 742, value: "742", change: "+8.1%", trend: "up", icon: <ShoppingCart />, color: "text-neon-blue", glowClass: "shadow-[0_0_15px_rgba(59,130,246,0.15)]" },
    { id: "conv", title: "Conversion Rate", numericValue: 4.8, suffix: "%", value: "4.8", change: "-0.4%", trend: "down", icon: <Activity />, color: "text-neon-lime", glowClass: "shadow-[0_0_15px_rgba(132,204,22,0.15)]" },
    { id: "fraud", title: "Fraud Alerts", numericValue: 12, value: "12", change: "-2.0%", trend: "down", icon: <ShieldAlert />, color: "text-red-500", glowClass: "shadow-[0_0_15px_rgba(239,68,68,0.15)]" },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setKpis(current => current.map(kpi => {
        // Only update some values randomly to make it look realistic
        if (Math.random() > 0.6) {
          let changeAmt = 0;
          if (kpi.id === "rev") changeAmt = Math.floor(Math.random() * 50) * (Math.random() > 0.3 ? 1 : -1);
          if (kpi.id === "buyers") changeAmt = Math.floor(Math.random() * 5) * (Math.random() > 0.4 ? 1 : -1);
          if (kpi.id === "orders") changeAmt = Math.random() > 0.7 ? 1 : 0;
          if (kpi.id === "conv") changeAmt = Number((Math.random() * 0.2 * (Math.random() > 0.5 ? 1 : -1)).toFixed(1));
          if (kpi.id === "fraud") changeAmt = Math.random() > 0.95 ? 1 : 0; // Rarely goes up

          const newValue = kpi.numericValue + changeAmt;
          
          return {
            ...kpi,
            numericValue: newValue,
            value: kpi.id === "conv" ? newValue.toFixed(1) : newValue.toLocaleString(),
          };
        }
        return kpi;
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mb-8">
      {kpis.map((kpi) => (
        <div key={kpi.id} className={`glass-panel p-5 relative overflow-hidden group ${kpi.glowClass}`}>
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-[0.02] rounded-full blur-2xl group-hover:opacity-[0.05] transition-opacity"></div>
          
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">{kpi.title}</p>
              <h3 className="text-3xl font-bold text-white tracking-tight flex items-baseline gap-1">
                {kpi.prefix}<span className="tabular-nums">{kpi.value}</span>{kpi.suffix}
              </h3>
            </div>
            <div className={`p-2 rounded-lg bg-white/5 ${kpi.color}`}>
              {kpi.icon}
            </div>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <span className={`flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${
              kpi.trend === 'up' ? 'text-neon-lime bg-neon-lime/10' : 'text-red-400 bg-red-400/10'
            }`}>
              {kpi.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
              {kpi.change}
            </span>
            <span className="text-gray-500 text-xs">vs last 24h</span>
          </div>
        </div>
      ))}
    </div>
  );
}
