import { NavLink } from "react-router-dom";
import { LayoutDashboard, ShoppingCart, Tags, Users, ShieldAlert, CreditCard, BarChart2, Settings } from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Orders", icon: ShoppingCart, path: "/orders" },
  { name: "Listings", icon: Tags, path: "/listings" },
  { name: "Users", icon: Users, path: "/users" },
  { name: "Fraud Center", icon: ShieldAlert, path: "/fraud" },
  { name: "Payments", icon: CreditCard, path: "/payments" },
  { name: "Reports", icon: BarChart2, path: "/reports" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export function Sidebar() {
  return (
    <aside className="w-64 glass-panel hidden lg:flex flex-col h-[calc(100vh-4rem)] sticky top-8">
      <div className="p-6 border-b border-white/10 flex justify-center items-center gap-3">
        <img src="/nova-cart.png" alt="Nova Cart" className="w-32 h-32" />
        {/* <span className="text-xl font-bold tracking-tight text-white">
          Nova<span className="text-neon-cyan text-glow-cyan">Cart</span>
        </span> */}
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-neon-cyan/10 text-neon-cyan shadow-[inset_0_0_10px_rgba(0,242,254,0.1)] border border-neon-cyan/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`w-5 h-5 ${isActive ? "text-neon-cyan" : ""}`} />
                <span className="font-medium">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="bg-white/5 rounded-xl p-4 border border-white/5 relative overflow-hidden group">
          <div className="absolute top-[-20%] right-[-20%] w-[50%] h-[50%] rounded-full bg-neon-purple/20 blur-[30px] group-hover:bg-neon-purple/40 transition-all"></div>
          <p className="text-sm text-gray-300 font-medium relative z-10">Pro Plan Active</p>
          <p className="text-xs text-gray-500 relative z-10 mt-1">14 days remaining</p>
          <button className="w-full mt-3 py-1.5 bg-neon-purple/20 hover:bg-neon-purple/30 text-neon-purple border border-neon-purple/30 rounded-lg text-sm font-medium transition-all shadow-[0_0_10px_rgba(168,85,247,0.2)]">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
}
