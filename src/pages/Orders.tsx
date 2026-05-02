export function Orders() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Orders Management</h1>
          <p className="text-gray-400 text-sm mt-1">View and manage all transactions</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Export CSV
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Orders", value: "24,592", trend: "+12.5%", color: "text-neon-cyan" },
          { label: "Pending", value: "1,204", trend: "-2.4%", color: "text-yellow-400" },
          { label: "Completed", value: "22,145", trend: "+14.2%", color: "text-neon-purple" },
          { label: "Refunded", value: "243", trend: "-0.5%", color: "text-red-400" },
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
            <div className="flex items-end gap-2">
              <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-xs text-green-400 mb-1">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-96">
            <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input type="text" placeholder="Search orders by ID, buyer, or seller..." className="w-full bg-black/20 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all placeholder:text-gray-500" />
          </div>
          <div className="flex gap-2">
            <select className="bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-neon-cyan/50">
              <option>All Statuses</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Refunded</option>
              <option>Disputed</option>
            </select>
            <select className="bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-neon-cyan/50">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Today</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-400 uppercase bg-black/20">
              <tr>
                <th className="px-4 py-3 rounded-tl-lg">Order ID</th>
                <th className="px-4 py-3">Buyer / Seller</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 rounded-tr-lg">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { id: "#ORD-9921", buyer: "alex_dev", seller: "pro_tools", product: "AI Prompt Bundle v2", amount: "$49.99", status: "Completed", date: "2 mins ago" },
                { id: "#ORD-9920", buyer: "sarah_j", seller: "crypto_master", product: "Trading Bot Setup", amount: "$199.00", status: "Pending", date: "15 mins ago" },
                { id: "#ORD-9919", buyer: "mike_w", seller: "design_hub", product: "UI Kit Premium", amount: "$79.00", status: "Refunded", date: "1 hour ago" },
                { id: "#ORD-9918", buyer: "emma_s", seller: "dev_accs", product: "AWS Setup Guide", amount: "$29.99", status: "Completed", date: "3 hours ago" },
                { id: "#ORD-9917", buyer: "josh_t", seller: "seo_ninja", product: "Backlink Package", amount: "$149.00", status: "Disputed", date: "5 hours ago" },
              ].map((order, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 font-mono text-neon-cyan">{order.id}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-col">
                      <span className="text-gray-200">{order.buyer}</span>
                      <span className="text-xs text-gray-500">→ {order.seller}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-300">{order.product}</td>
                  <td className="px-4 py-3 font-medium">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs border ${
                      order.status === 'Completed' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                      order.status === 'Pending' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                      order.status === 'Refunded' ? 'bg-red-500/10 border-red-500/20 text-red-400' :
                      'bg-orange-500/10 border-orange-500/20 text-orange-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
