export function Settings() {
  return (
    <div className="flex flex-col gap-6 pb-24">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Platform Settings</h1>
          <p className="text-gray-400 text-sm mt-1">Configure marketplace rules, security, and preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* General Settings */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-6">
            <h2 className="text-lg font-bold text-gray-200 border-b border-white/10 pb-2">General Info</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Platform Name</label>
                <input type="text" defaultValue="NovaCart" className="w-full bg-black/20 border border-white/10 rounded-xl py-2 px-4 text-sm focus:outline-none focus:border-neon-cyan/50 text-white" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Support Email</label>
                <input type="email" defaultValue="support@novacart.com" className="w-full bg-black/20 border border-white/10 rounded-xl py-2 px-4 text-sm focus:outline-none focus:border-neon-cyan/50 text-white" />
              </div>
            </div>
          </div>

          {/* Marketplace Rules */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-6">
            <h2 className="text-lg font-bold text-gray-200 border-b border-white/10 pb-2">Marketplace Fees</h2>
            <div className="grid sm:grid-cols-2 gap-4">
               <div>
                <label className="block text-sm text-gray-400 mb-1">Base Transaction Fee (%)</label>
                <input type="number" defaultValue="2.5" step="0.1" className="w-full bg-black/20 border border-white/10 rounded-xl py-2 px-4 text-sm focus:outline-none focus:border-neon-purple/50 text-white" />
              </div>
               <div>
                <label className="block text-sm text-gray-400 mb-1">Seller Payout Delay (Days)</label>
                <input type="number" defaultValue="3" className="w-full bg-black/20 border border-white/10 rounded-xl py-2 px-4 text-sm focus:outline-none focus:border-neon-purple/50 text-white" />
              </div>
            </div>
          </div>

          {/* API Keys */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-6">
            <h2 className="text-lg font-bold text-gray-200 border-b border-white/10 pb-2">API & Webhooks</h2>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center p-3 rounded-xl bg-black/20 border border-white/5">
                <div>
                  <p className="text-sm font-medium text-gray-200">Production Key</p>
                  <p className="text-xs text-gray-500 font-mono mt-1">pk_live_*************************</p>
                </div>
                <button className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs transition-colors">Reveal</button>
              </div>
              <div className="flex justify-between items-center p-3 rounded-xl bg-black/20 border border-white/5">
                <div>
                  <p className="text-sm font-medium text-gray-200">Webhook Endpoint URL</p>
                  <p className="text-xs text-gray-500 mt-1">https://api.novacart.com/webhooks/stripe</p>
                </div>
                <button className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs transition-colors">Edit</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
           {/* Security & Preferences */}
           <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-6">
            <h2 className="text-lg font-bold text-gray-200 border-b border-white/10 pb-2">Preferences</h2>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-200">Dark Mode</p>
                  <p className="text-xs text-gray-500">Force dark theme UI</p>
                </div>
                <div className="w-10 h-5 bg-neon-cyan/20 rounded-full relative cursor-pointer border border-neon-cyan/50">
                  <div className="w-4 h-4 bg-neon-cyan rounded-full absolute right-0.5 top-0.5"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-200">2FA Enforced</p>
                  <p className="text-xs text-gray-500">Require 2FA for staff</p>
                </div>
                <div className="w-10 h-5 bg-neon-purple/20 rounded-full relative cursor-pointer border border-neon-purple/50">
                  <div className="w-4 h-4 bg-neon-purple rounded-full absolute right-0.5 top-0.5"></div>
                </div>
              </div>

               <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-200">Email Alerts</p>
                  <p className="text-xs text-gray-500">Daily summary reports</p>
                </div>
                <div className="w-10 h-5 bg-white/10 rounded-full relative cursor-pointer border border-white/20">
                  <div className="w-4 h-4 bg-gray-400 rounded-full absolute left-0.5 top-0.5"></div>
                </div>
              </div>
            </div>
           </div>
           
           <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 backdrop-blur-md flex flex-col gap-4">
             <h2 className="text-lg font-bold text-red-400">Danger Zone</h2>
             <p className="text-xs text-gray-400">These actions are irreversible. Please proceed with caution.</p>
             <button className="w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl text-sm transition-colors">
               Purge Cache
             </button>
             <button className="w-full py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-xl text-sm transition-colors">
               Maintenance Mode
             </button>
           </div>
        </div>
      </div>

      {/* Floating Save Action Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl p-4 bg-black/80 border border-white/10 backdrop-blur-xl rounded-2xl flex justify-between items-center shadow-[0_0_40px_rgba(0,0,0,0.5)] z-50">
        <p className="text-sm text-gray-400">You have unsaved changes.</p>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-colors text-sm">Discard</button>
          <button className="px-6 py-2 bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan font-medium rounded-xl hover:bg-neon-cyan/30 transition-colors text-sm shadow-[0_0_15px_rgba(0,240,255,0.2)]">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
