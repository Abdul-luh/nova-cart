import { useState } from "react";

type UserRole = "All Roles" | "Buyer" | "Seller" | "Admin" | "Moderator";

const allUsers = [
  { name: "alex_dev", email: "alex@example.com", role: "Buyer", loc: "US", orders: 12, value: "$450.00", date: "Jan 12, 2026", verified: true },
  { name: "pro_tools", email: "contact@protools.io", role: "Seller", loc: "UK", orders: 1432, value: "$24k", date: "Nov 05, 2025", verified: true },
  { name: "sarah_j", email: "sarah@gmail.com", role: "Buyer", loc: "CA", orders: 2, value: "$89.99", date: "Feb 28, 2026", verified: false },
  { name: "sys_admin", email: "admin@novacart.com", role: "Admin", loc: "US", orders: 0, value: "$0.00", date: "Jan 01, 2024", verified: true },
  { name: "crypto_master", email: "anon@protonmail.com", role: "Seller", loc: "CH", orders: 89, value: "$4.2k", date: "Mar 15, 2026", verified: false },
  { name: "design_hub", email: "hello@designhub.co", role: "Seller", loc: "DE", orders: 342, value: "$18k", date: "Sep 10, 2025", verified: true },
  { name: "mod_jane", email: "jane@novacart.com", role: "Moderator", loc: "US", orders: 0, value: "$0.00", date: "Jun 01, 2025", verified: true },
  { name: "lena_m", email: "lena.m@gmail.com", role: "Buyer", loc: "FR", orders: 7, value: "$220.00", date: "Apr 01, 2026", verified: false },
];

export function Users() {
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<UserRole>("All Roles");

  const filtered = allUsers.filter((user) => {
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      user.name.toLowerCase().includes(q) ||
      user.email.toLowerCase().includes(q) ||
      user.loc.toLowerCase().includes(q);
    const matchesRole =
      roleFilter === "All Roles" || user.role === roleFilter;
    return matchesQuery && matchesRole;
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">User Management</h1>
          <p className="text-gray-400 text-sm mt-1">Manage buyers, sellers, and internal roles</p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-96">
            <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input
              id="users-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by username, email, or location..."
              className="w-full bg-black/20 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-neon-cyan/50 transition-all placeholder:text-gray-500"
            />
          </div>
          <div className="flex gap-2">
            <select
              id="users-role-filter"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value as UserRole)}
              className="bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-neon-cyan/50"
            >
              <option>All Roles</option>
              <option>Buyer</option>
              <option>Seller</option>
              <option>Admin</option>
              <option>Moderator</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-400 uppercase bg-black/20">
              <tr>
                <th className="px-4 py-3 rounded-tl-lg">User</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Orders</th>
                <th className="px-4 py-3">Spend / Earned</th>
                <th className="px-4 py-3">Joined</th>
                <th className="px-4 py-3 rounded-tr-lg text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.length > 0 ? (
                filtered.map((user, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center border border-white/10">
                          <span className="text-xs font-bold text-white">{user.name.charAt(0).toUpperCase()}</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-gray-200">{user.name}</span>
                            {user.verified && (
                              <svg className="w-3 h-3 text-neon-cyan" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            )}
                          </div>
                          <span className="text-xs text-gray-500">{user.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs border ${
                        user.role === 'Admin' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                        user.role === 'Seller' ? 'bg-neon-purple/10 border-neon-purple/20 text-neon-purple' :
                        user.role === 'Moderator' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                        'bg-white/5 border-white/10 text-gray-300'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400">{user.loc}</td>
                    <td className="px-4 py-3 text-gray-300">{user.orders}</td>
                    <td className="px-4 py-3 font-medium text-gray-200">{user.value}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{user.date}</td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-gray-400 hover:text-neon-cyan transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-gray-500">
                    No users match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
