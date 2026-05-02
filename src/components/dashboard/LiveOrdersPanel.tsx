import { useState, useEffect } from "react";
import { Clock, ShieldCheck, CheckCircle2, AlertTriangle, RefreshCcw, CheckCircle } from "lucide-react";

type OrderStatus = 'Pending' | 'Escrowed' | 'Delivered' | 'Disputed' | 'Refunded' | 'Completed';

type OrderEvent = {
  id: number;
  status: OrderStatus;
  message: string;
  time: string;
  amount?: string;
  isNew?: boolean;
  isFlagged?: boolean;
};

const initialEvents: OrderEvent[] = [
  { id: 1, status: 'Completed', message: 'Valorant Immortal Account sold', time: 'Just now', amount: '$220', isNew: true },
  { id: 2, status: 'Escrowed', message: 'AI Prompt Pack purchased', time: '2m ago', amount: '$19', isNew: true },
  { id: 3, status: 'Delivered', message: 'FIFA Coins delivered', time: '5m ago', amount: '$12', isNew: true },
  { id: 4, status: 'Disputed', message: 'Suspicious refund request', time: '12m ago', isFlagged: true },
  { id: 5, status: 'Pending', message: 'Roblox account "OofMaster" pending', time: '18m ago', amount: '$45' },
  { id: 6, status: 'Refunded', message: 'CS:GO Skin "Asiimov" refunded', time: '22m ago', amount: '$85' },
];

const getStatusStyles = (status: OrderStatus) => {
  switch (status) {
    case 'Pending': return { color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/20', icon: Clock };
    case 'Escrowed': return { color: 'text-indigo-400', bg: 'bg-indigo-400/10', border: 'border-indigo-400/20', icon: ShieldCheck };
    case 'Delivered': return { color: 'text-neon-cyan', bg: 'bg-neon-cyan/10', border: 'border-neon-cyan/20', icon: CheckCircle2 };
    case 'Disputed': return { color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/20', icon: AlertTriangle };
    case 'Refunded': return { color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20', icon: RefreshCcw };
    case 'Completed': return { color: 'text-neon-lime', bg: 'bg-neon-lime/10', border: 'border-neon-lime/20', icon: CheckCircle };
  }
};

export function LiveOrdersPanel() {
  const [events, setEvents] = useState<OrderEvent[]>(initialEvents);

  useEffect(() => {
    const newEvents = [
      { status: 'Completed', message: 'Rare CS:GO Skin "Dragon Lore" sold', amount: '$1,500', isNew: true },
      { status: 'Pending', message: 'Discord Nitro (1yr) purchase pending', amount: '$99' },
      { status: 'Delivered', message: 'Robux (10k) transferred', amount: '$100' },
      { status: 'Disputed', message: 'Chargeback filed by bank', isFlagged: true },
    ];

    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        const randomEvent = newEvents[Math.floor(Math.random() * newEvents.length)];
        const newActivity: OrderEvent = {
          id: Date.now(),
          status: randomEvent.status as OrderStatus,
          message: randomEvent.message,
          time: 'Just now',
          amount: randomEvent.amount,
          isNew: randomEvent.isNew,
          isFlagged: randomEvent.isFlagged
        };

        setEvents(prev => {
          const updated = [newActivity, ...prev.map(a => {
            if (a.time === 'Just now') return { ...a, time: '1m ago' };
            if (a.time === '1m ago') return { ...a, time: '2m ago' };
            return a;
          })];
          return updated.slice(0, 8); // Keep max 8
        });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="w-80 glass-panel hidden xl:flex flex-col h-[calc(100vh-4rem)] sticky top-8 relative overflow-hidden">
      <div className="p-5 border-b border-white/10 flex justify-between items-center bg-white/5">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          Live Orders
          <span className="relative flex h-2.5 w-2.5 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-cyan shadow-[0_0_8px_rgba(0,242,254,0.8)]"></span>
          </span>
        </h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {events.map((event, index) => {
          const styles = getStatusStyles(event.status);
          const Icon = styles.icon;
          
          return (
            <div 
              key={event.id} 
              className={`p-3 rounded-xl border ${styles.border} hover:bg-white/5 transition-all group animate-in slide-in-from-right-4 fade-in duration-300 relative overflow-hidden`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Highlight flash for new events */}
              {event.time === 'Just now' && (
                <div className="absolute inset-0 bg-white/10 animate-pulse pointer-events-none rounded-xl"></div>
              )}

              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${styles.bg}`}>
                    <Icon className={`w-3.5 h-3.5 ${styles.color}`} />
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${styles.color}`}>
                    {event.status}
                  </span>
                </div>
                {event.amount && (
                  <span className="text-sm font-bold text-white">
                    {event.amount}
                  </span>
                )}
              </div>
              
              <div className="mt-1 flex items-start gap-2">
                <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors leading-tight">
                  {event.isNew && <span className="text-neon-cyan font-bold mr-1">[NEW]</span>}
                  {event.isFlagged && <span className="text-red-500 font-bold mr-1">[FLAGGED]</span>}
                  {event.message}
                </p>
              </div>
              
              <p className="text-xs text-gray-500 mt-2 text-right">{event.time}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
