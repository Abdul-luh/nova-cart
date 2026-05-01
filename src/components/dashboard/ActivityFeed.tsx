import { useState, useEffect } from "react";
import { UserPlus, ShoppingBag, ShieldBan, Bot, Coins } from "lucide-react";

type Activity = {
  id: number;
  type: 'purchase' | 'user' | 'fraud' | 'ai' | 'crypto';
  message: string;
  time: string;
  amount?: string;
};

const initialActivities: Activity[] = [
  { id: 1, type: 'purchase', message: 'User bought Valorant Diamond account', time: 'Just now', amount: '$120' },
  { id: 2, type: 'ai', message: 'AI Prompt Pack "Midjourney Pro" sold', time: '2m ago', amount: '$15' },
  { id: 3, type: 'crypto', message: 'FIFA Coins (1M) delivered to user', time: '5m ago', amount: '$45' },
  { id: 4, type: 'user', message: 'New seller "xX_Sniper_Xx" joined', time: '12m ago' },
  { id: 5, type: 'fraud', message: 'Fraud transaction blocked (High Risk IP)', time: '18m ago', amount: '$350' },
];

const getIcon = (type: Activity['type']) => {
  switch (type) {
    case 'purchase': return <ShoppingBag className="w-4 h-4 text-neon-cyan" />;
    case 'ai': return <Bot className="w-4 h-4 text-neon-purple" />;
    case 'crypto': return <Coins className="w-4 h-4 text-yellow-400" />;
    case 'user': return <UserPlus className="w-4 h-4 text-neon-lime" />;
    case 'fraud': return <ShieldBan className="w-4 h-4 text-red-500" />;
  }
};

const getBgColor = (type: Activity['type']) => {
  switch (type) {
    case 'purchase': return 'bg-neon-cyan/10 border-neon-cyan/20';
    case 'ai': return 'bg-neon-purple/10 border-neon-purple/20';
    case 'crypto': return 'bg-yellow-400/10 border-yellow-400/20';
    case 'user': return 'bg-neon-lime/10 border-neon-lime/20';
    case 'fraud': return 'bg-red-500/10 border-red-500/20';
  }
};

export function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>(initialActivities);

  useEffect(() => {
    const newEvents = [
      { type: 'purchase', message: 'Rare CS:GO Skin "Dragon Lore" sold', amount: '$1,500' },
      { type: 'user', message: 'User verified KYC successfully' },
      { type: 'crypto', message: 'Robux (10k) transferred' },
      { type: 'ai', message: 'Automation Template "Auto-Reply" purchased', amount: '$25' },
    ];

    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        const randomEvent = newEvents[Math.floor(Math.random() * newEvents.length)];
        const newActivity: Activity = {
          id: Date.now(),
          type: randomEvent.type as any,
          message: randomEvent.message,
          time: 'Just now',
          amount: randomEvent.amount
        };

        setActivities(prev => {
          const updated = [newActivity, ...prev.map(a => {
            // Very hacky time update for demo
            if (a.time === 'Just now') return { ...a, time: '1m ago' };
            if (a.time === '1m ago') return { ...a, time: '2m ago' };
            return a;
          })];
          return updated.slice(0, 6); // Keep max 6
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel p-6 mb-8 overflow-hidden relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            Live Activity Feed
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-cyan shadow-[0_0_8px_rgba(0,242,254,0.8)]"></span>
            </span>
          </h3>
        </div>
        <button className="text-sm text-neon-cyan hover:text-white transition-colors">View All</button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div 
            key={activity.id} 
            className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group animate-in slide-in-from-top-2 fade-in duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={`mt-1 w-8 h-8 rounded-full flex items-center justify-center border ${getBgColor(activity.type)}`}>
              {getIcon(activity.type)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {activity.message}
                </p>
                {activity.amount && (
                  <span className="text-sm font-bold text-white bg-white/10 px-2 py-0.5 rounded-md ml-2">
                    {activity.amount}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
