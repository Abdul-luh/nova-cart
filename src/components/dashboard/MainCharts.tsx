import { useState, useEffect } from "react";
import { 
  Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart
} from "recharts";
import { Maximize2, MoreHorizontal } from "lucide-react";

// Mock Data
const generateUserConvData = () => [
  { name: 'Mon', users: 4000, conv: 2.4 },
  { name: 'Tue', users: 3000, conv: 1.3 },
  { name: 'Wed', users: 2000, conv: 3.8 },
  { name: 'Thu', users: 2780, conv: 3.9 },
  { name: 'Fri', users: 1890, conv: 4.8 },
  { name: 'Sat', users: 2390, conv: 3.8 },
  { name: 'Sun', users: 3490, conv: 4.3 },
];

const generateRevData = () => [
  { name: '00:00', revenue: 4000, refunds: 240 },
  { name: '04:00', revenue: 3000, refunds: 139 },
  { name: '08:00', revenue: 2000, refunds: 980 },
  { name: '12:00', revenue: 2780, refunds: 390 },
  { name: '16:00', revenue: 1890, refunds: 480 },
  { name: '20:00', revenue: 2390, refunds: 380 },
  { name: '24:00', revenue: 3490, refunds: 430 },
];

export function MainCharts() {
  const [userConvData, setUserConvData] = useState(generateUserConvData());
  const [revData, setRevData] = useState(generateRevData());

  // Simulate real-time updates for charts
  useEffect(() => {
    const interval = setInterval(() => {
      setUserConvData(current => {
        const newData = [...current];
        const lastIdx = newData.length - 1;
        // Jiggle the last day's data slightly
        newData[lastIdx] = {
          ...newData[lastIdx],
          users: newData[lastIdx].users + Math.floor((Math.random() - 0.5) * 100),
          conv: Number((newData[lastIdx].conv + (Math.random() - 0.5) * 0.2).toFixed(1))
        };
        return newData;
      });

      setRevData(current => {
        const newData = [...current];
        const lastIdx = newData.length - 1;
        newData[lastIdx] = {
          ...newData[lastIdx],
          revenue: newData[lastIdx].revenue + Math.floor(Math.random() * 200),
          refunds: newData[lastIdx].refunds + (Math.random() > 0.8 ? Math.floor(Math.random() * 20) : 0)
        };
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#111827] border border-white/10 p-3 rounded-lg shadow-xl backdrop-blur-md">
          <p className="text-gray-300 mb-2 font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm font-semibold">
              {entry.name}: {entry.name === 'Conversion Rate' ? `${entry.value}%` : entry.name === 'Revenue' || entry.name === 'Refunds' ? `$${entry.value}` : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Users vs Conversion Rate Chart */}
      <div className="glass-panel p-6 lg:col-span-2 relative">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">Users Last 7 Days vs Conversion Rate</h3>
            <p className="text-sm text-gray-400">Traffic vs Successful Checkouts</p>
          </div>
          <div className="flex gap-2 text-gray-400">
            <button className="p-1.5 hover:bg-white/10 rounded-md transition-colors"><Maximize2 className="w-4 h-4" /></button>
            <button className="p-1.5 hover:bg-white/10 rounded-md transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
          </div>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={userConvData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00f2fe" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#00f2fe" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" stroke="rgba(255,255,255,0.3)" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" stroke="rgba(255,255,255,0.3)" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Bar yAxisId="left" dataKey="users" name="Users" fill="url(#colorUsers)" radius={[4, 4, 0, 0]} barSize={30} />
              <Line yAxisId="right" type="monotone" dataKey="conv" name="Conversion Rate" stroke="#a855f7" strokeWidth={3} dot={{ r: 4, fill: '#a855f7', strokeWidth: 2, stroke: '#111827' }} activeDot={{ r: 6, strokeWidth: 0 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue vs Refunds Chart */}
      <div className="glass-panel p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">Revenue vs Refunds</h3>
            <p className="text-sm text-gray-400">Today's financial flow</p>
          </div>
          <button className="p-1.5 text-gray-400 hover:bg-white/10 rounded-md transition-colors"><MoreHorizontal className="w-4 h-4" /></button>
        </div>

        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revData} margin={{ top: 5, right: 0, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: '#9ca3af', fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
              <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#84cc16" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#84cc16', strokeWidth: 0 }} />
              <Line type="monotone" dataKey="refunds" name="Refunds" stroke="#ef4444" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#ef4444', strokeWidth: 0 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
