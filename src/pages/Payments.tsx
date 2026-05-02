export function Payments() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">Payments & Finance</h1>
          <p className="text-gray-400 text-sm mt-1">Revenue, payouts, and gateway status</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Platform Balance", value: "$142,500.00", trend: "+$12k this week", color: "text-white" },
          { label: "Pending Payouts", value: "$45,200.00", trend: "Processing...", color: "text-yellow-400" },
          { label: "Fees Earned (30d)", value: "$18,450.00", trend: "+15%", color: "text-green-400" },
          { label: "Refund Rate", value: "1.2%", trend: "Healthy", color: "text-neon-cyan" },
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
            <div className="flex items-end gap-2">
              <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-4">
          <h2 className="text-lg font-bold text-gray-200">Withdrawals Queue</h2>
          <div className="flex flex-col gap-3">
            {[
              { user: "pro_tools", amount: "$12,450.00", method: "Wire Transfer", status: "Processing", eta: "2 days" },
              { user: "design_hub", amount: "$850.00", method: "PayPal", status: "Pending", eta: "4 hours" },
              { user: "crypto_master", amount: "$4,200.00", method: "USDT (TRC20)", status: "Completed", eta: "Done" },
            ].map((wd, i) => (
              <div key={i} className="p-4 rounded-xl bg-black/20 border border-white/5 flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-200">{wd.user}</p>
                  <p className="text-xs text-gray-500">{wd.method}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-white">{wd.amount}</p>
                  <p className={`text-xs ${wd.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {wd.status} • {wd.eta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-4">
          <h2 className="text-lg font-bold text-gray-200">Payment Gateways</h2>
          <div className="flex flex-col gap-3">
            {[
              { name: "Stripe", volume: "$845k", status: "Operational", color: "bg-indigo-500" },
              { name: "PayPal", volume: "$320k", status: "Operational", color: "bg-blue-500" },
              { name: "Coinbase Commerce", volume: "$150k", status: "Degraded", color: "bg-blue-400" },
              { name: "Paystack", volume: "$45k", status: "Operational", color: "bg-cyan-500" },
            ].map((gw, i) => (
              <div key={i} className="p-4 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${gw.color}/20 text-${gw.color.split('-')[1]}-400 font-bold border border-${gw.color.split('-')[1]}-500/30`}>
                    {gw.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-200">{gw.name}</p>
                    <p className="text-xs text-gray-500">Vol: {gw.volume}</p>
                  </div>
                </div>
                <div>
                  <span className={`px-2 py-1 rounded-full text-xs border ${
                    gw.status === 'Operational' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                    'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
                  }`}>
                    {gw.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
