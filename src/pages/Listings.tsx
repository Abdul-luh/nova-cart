export function Listings() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Marketplace Listings</h1>
          <p className="text-gray-400 text-sm mt-1">Manage active digital products and services</p>
        </div>
        <button className="px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/50 text-neon-cyan rounded-xl hover:bg-neon-cyan/20 transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Add New Listing
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-4">
          <div className="flex gap-4 mb-2">
             <div className="relative w-full sm:w-64">
              <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input type="text" placeholder="Search listings..." className="w-full bg-black/20 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-neon-cyan/50 transition-all placeholder:text-gray-500" />
            </div>
            <select className="bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-neon-cyan/50">
              <option>All Categories</option>
              <option>Gaming Accounts</option>
              <option>Rare Skins</option>
              <option>AI Tools</option>
              <option>Automation</option>
            </select>
          </div>

          <div className="grid gap-4">
            {[
              { title: "Premium Midjourney Prompts", seller: "ai_master", price: "$15.00", views: "1.2k", conv: "4.5%", status: "Active" },
              { title: "Valorant Radiant Account", seller: "game_king", price: "$450.00", views: "856", conv: "1.2%", status: "Featured" },
              { title: "Shopify Dropship Template", seller: "ecom_pro", price: "$89.99", views: "2.4k", conv: "8.1%", status: "Active" },
              { title: "Discord Nitro 1 Year (Gift)", seller: "nitro_plug", price: "$65.00", views: "4.1k", conv: "12.4%", status: "Out of Stock" },
            ].map((listing, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 transition-colors gap-4">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-200">{listing.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">by <span className="text-neon-cyan">{listing.seller}</span></p>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="text-right">
                    <p className="text-gray-400 text-xs">Price</p>
                    <p className="font-medium text-white">{listing.price}</p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-gray-400 text-xs">Views</p>
                    <p className="text-gray-300">{listing.views}</p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <p className="text-gray-400 text-xs">Conv.</p>
                    <p className="text-green-400">{listing.conv}</p>
                  </div>
                  <div>
                    <span className={`px-2 py-1 rounded-full text-xs border ${
                      listing.status === 'Active' ? 'bg-green-500/10 border-green-500/20 text-green-400' :
                      listing.status === 'Featured' ? 'bg-neon-purple/10 border-neon-purple/20 text-neon-purple' :
                      'bg-red-500/10 border-red-500/20 text-red-400'
                    }`}>
                      {listing.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-4">
          <h2 className="text-lg font-bold text-gray-200">Trending Categories</h2>
          <div className="flex flex-col gap-3">
            {[
              { name: "Gaming Accounts", growth: "+24%", count: "1,204" },
              { name: "AI Tools & Prompts", growth: "+118%", count: "856" },
              { name: "In-Game Currency", growth: "+12%", count: "3,421" },
              { name: "Software Licenses", growth: "+5%", count: "942" },
              { name: "Social Media Assets", growth: "-2%", count: "654" },
            ].map((cat, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-black/20 border border-white/5">
                <div>
                  <p className="text-sm font-medium text-gray-300">{cat.name}</p>
                  <p className="text-xs text-gray-500">{cat.count} listings</p>
                </div>
                <span className={`text-xs font-medium ${cat.growth.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {cat.growth}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
