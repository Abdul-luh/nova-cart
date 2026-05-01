import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from "recharts";
import { Globe, ArrowRight, TrendingUp } from "lucide-react";

const categoryData = [
  { name: 'Gaming Accounts', value: 45 },
  { name: 'Rare Skins', value: 25 },
  { name: 'AI Tools', value: 15 },
  { name: 'Prompt Packs', value: 10 },
  { name: 'Coins', value: 5 },
];

const COLORS = ['#00f2fe', '#a855f7', '#3b82f6', '#84cc16', '#ef4444'];

const trafficSources = [
  { name: 'Direct', value: 45, color: 'bg-neon-cyan' },
  { name: 'Search', value: 30, color: 'bg-neon-purple' },
  { name: 'Discord', value: 15, color: 'bg-indigo-500' },
  { name: 'TikTok', value: 7, color: 'bg-pink-500' },
  { name: 'Ads', value: 3, color: 'bg-neon-lime' },
];

const regionalSales = [
  { country: 'United States', flag: '🇺🇸', users: '12.4k', trend: '+14%' },
  { country: 'United Kingdom', flag: '🇬🇧', users: '8.2k', trend: '+5%' },
  { country: 'Nigeria', flag: '🇳🇬', users: '6.1k', trend: '+22%' },
  { country: 'UAE', flag: '🇦🇪', users: '4.8k', trend: '+18%' },
  { country: 'South Africa', flag: '🇿🇦', users: '3.9k', trend: '+9%' },
];

export function SecondaryMetrics() {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111827] border border-white/10 p-2 rounded-lg shadow-xl backdrop-blur-md">
          <p className="text-gray-200 text-sm font-semibold">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      {/* Category Sales Donut */}
      <div className="glass-panel p-6 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2">Orders by Category</h3>
        <p className="text-sm text-gray-400 mb-4">Distribution of completed orders</p>
        
        <div className="flex-1 min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                stroke="rgba(0,0,0,0)"
              >
                {categoryData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <RechartsTooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="bottom" 
                height={36} 
                iconType="circle" 
                wrapperStyle={{ fontSize: '12px', color: '#9ca3af' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Live Traffic Sources */}
      <div className="glass-panel p-6 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2">Traffic Sources</h3>
        <p className="text-sm text-gray-400 mb-6">Real-time visitor acquisition</p>
        
        <div className="flex-1 flex flex-col justify-center gap-5">
          {trafficSources.map((source, idx) => (
            <div key={idx} className="relative">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300 font-medium">{source.name}</span>
                <span className="text-white font-bold">{source.value}%</span>
              </div>
              <div className="w-full bg-white/5 rounded-full h-2">
                <div 
                  className={`${source.color} h-2 rounded-full shadow-[0_0_8px_currentColor] opacity-80`} 
                  style={{ width: `${source.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Sales */}
      <div className="glass-panel p-6 xl:col-span-1 md:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">Live Regional Activity</h3>
            <p className="text-sm text-gray-400">Top converting countries</p>
          </div>
          <div className="p-2 bg-white/5 rounded-lg text-neon-cyan">
            <Globe className="w-5 h-5" />
          </div>
        </div>

        <div className="space-y-4">
          {regionalSales.map((region, idx) => (
            <div key={idx} className="flex items-center justify-between group cursor-pointer hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-xl">{region.flag}</span>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{region.country}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white font-semibold">{region.users}</span>
                <span className="flex items-center text-xs font-medium text-neon-lime">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {region.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-6 py-2 border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2 group">
          View Full Map
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
