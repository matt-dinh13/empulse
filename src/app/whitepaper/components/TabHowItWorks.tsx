export default function TabHowItWorks() {
    return (
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Business Flow</h2>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20 -z-10"></div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Step 1 */}
                    <div className="text-center group">
                        <div className="w-24 h-24 mx-auto bg-black border-2 border-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)] group-hover:scale-110 transition duration-300">
                            <span className="text-4xl">💌</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">1. Send Vote</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Select a colleague from the directory. Currently supports searching by name/email.
                            <br />
                            <span className="text-emerald-500 text-xs mt-2 block">Min message length: 20 chars</span>
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center group">
                        <div className="w-24 h-24 mx-auto bg-black border-2 border-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)] group-hover:scale-110 transition duration-300 delay-100">
                            <span className="text-4xl">💰</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">2. Accumulate</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Points are deducted from Sender's <span className="text-white">Quota Wallet</span> and added to Receiver's <span className="text-white">Reward Wallet</span> instantly.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center group">
                        <div className="w-24 h-24 mx-auto bg-black border-2 border-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)] group-hover:scale-110 transition duration-300 delay-200">
                            <span className="text-4xl">🎁</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">3. Redeem</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Employees browse the Catalog (Region-specific) and exchange points for Vouchers or Merchandise.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-6">Validation Rules</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400">
                    <div className="flex gap-3 p-4 bg-black/20 rounded-lg">
                        <span className="text-emerald-500 font-mono">01</span>
                        <span>Cannot vote for self or direct manager.</span>
                    </div>
                    <div className="flex gap-3 p-4 bg-black/20 rounded-lg">
                        <span className="text-emerald-500 font-mono">02</span>
                        <span>Limit: 2 votes per week to encourage steady engagement.</span>
                    </div>
                    <div className="flex gap-3 p-4 bg-black/20 rounded-lg">
                        <span className="text-emerald-500 font-mono">03</span>
                        <span>Limit: 2 votes per person/month (prevents spamming friends).</span>
                    </div>
                    <div className="flex gap-3 p-4 bg-black/20 rounded-lg">
                        <span className="text-emerald-500 font-mono">04</span>
                        <span>Same-team limit: Max 50% of monthly quota can go to teammates.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
