export function FraudCenter() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">Fraud Center</h1>
          <p className="text-gray-400 text-sm mt-1">AI-powered threat detection and dispute resolution</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Active Threats", value: "12", trend: "+2", color: "text-red-400" },
          { label: "Blocked Transactions", value: "142", trend: "Today", color: "text-orange-400" },
          { label: "Risk Score Avg", value: "2.4/10", trend: "-0.5", color: "text-green-400" },
          { label: "Pending Reviews", value: "28", trend: "Urgent", color: "text-yellow-400" },
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-2xl bg-white/5 border border-red-500/10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-red-500/10 rounded-full blur-xl pointer-events-none"></div>
            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
            <div className="flex items-end gap-2">
              <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-xs text-gray-500 mb-1">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-4">
        <h2 className="text-lg font-bold text-gray-200">Suspicious Activity Feed</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-400 uppercase bg-black/20">
              <tr>
                <th className="px-4 py-3 rounded-tl-lg">Transaction ID</th>
                <th className="px-4 py-3">User</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Risk Level</th>
                <th className="px-4 py-3">Flag Reason</th>
                <th className="px-4 py-3 rounded-tr-lg text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { id: "TX-8829", user: "anon_991", amount: "$4,500.00", risk: "Critical", reason: "Multiple failed CVV attempts" },
                { id: "TX-8828", user: "johndoe_x", amount: "$12.99", risk: "Medium", reason: "IP location mismatch (Proxy)" },
                { id: "TX-8827", user: "new_seller_1", amount: "$850.00", risk: "High", reason: "Velocity limit exceeded" },
                { id: "TX-8826", user: "guest_buyer", amount: "$299.00", risk: "Low", reason: "First time large purchase" },
              ].map((alert, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 font-mono text-gray-400">{alert.id}</td>
                  <td className="px-4 py-3 text-gray-200">{alert.user}</td>
                  <td className="px-4 py-3 font-medium">{alert.amount}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                      alert.risk === 'Critical' ? 'bg-red-500/20 border-red-500/50 text-red-400 animate-pulse' :
                      alert.risk === 'High' ? 'bg-orange-500/20 border-orange-500/50 text-orange-400' :
                      alert.risk === 'Medium' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                      'bg-white/5 border-white/10 text-gray-400'
                    }`}>
                      {alert.risk}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-400 text-xs">{alert.reason}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="px-3 py-1 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 rounded-lg text-xs transition-colors">Approve</button>
                      <button className="px-3 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg text-xs transition-colors">Freeze</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
