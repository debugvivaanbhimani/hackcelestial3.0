"use client";
import React from 'react';

export default function MoneyPool() {
  return (
    <>
<header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.03)] pt-safe"><div className="flex items-center justify-between px-margin h-16"><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[28px] text-primary">explore</span><div className="flex flex-col"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">GroupTrip</span><h1 className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">Monsoon Escape</h1></div></div><div className="flex items-center gap-space-sm"><button aria-label="Aisha Profile" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors ring-2 ring-primary/20"><img alt="Aisha" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyd6CeleLXsnMPJQvTeAdsUAgcZvlE_zS_krlY_TiqhmILU8Q7AlkZWu58uK72rwgcytazmYYBoSECIJlWsbKYp8wNErglOTpr58hG2Khv7qGkwq_imJVb0Ix7iN3op-Rc8jcKQtuastrnD6nVNgtjTkiYKZNpz2LoRAWzjAxmkPdYlfIwkWCCCg8eAt9Ur2qxWMkPymvGjT0s2cCTIvEHj_ed-87l3vBVDy1875IaH1O-TNOEcN8mmQ"/></button></div></div></header><main className="flex-1 w-full bg-surface pt-16 pb-28"><div className="flex flex-col w-full">
{/*  Sub-Navigation Pill Tabs  */}
<div className="px-margin pt-space-sm pb-space-md">
<div className="flex items-center gap-space-xs p-1 bg-surface-container-high rounded-full">
<button className="flex-1 py-1.5 px-3 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all duration-200 text-center">
        Pool
      </button>
<button className="flex-1 py-1.5 px-3 rounded-full text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all duration-200 text-center">
        Expenses
      </button>
<button className="flex-1 py-1.5 px-3 rounded-full text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all duration-200 text-center">
        Budget
      </button>
<button className="flex-1 py-1.5 px-3 rounded-full text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all duration-200 text-center">
        Settle
      </button>
</div>
</div>
{/*  Editorial Headline & Meta  */}
<section className="px-margin pt-space-xs pb-space-sm">
<div className="flex items-center justify-between">
<div>
<p className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold mb-0.5">Treasury Custody</p>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Trip Vault Escrow</h2>
</div>
<div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">lock</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Monsoon Escape · Dandeli · 5 members</p>
</section>
{/*  Total Escrow Vault Card  */}
<section className="px-margin py-space-sm">
<div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-primary-fixed/20 blur-2xl pointer-events-none"></div>
<div className="flex items-center justify-between mb-space-sm">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Total in Escrow Vault</span>
<span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">verified</span>
          Ledger balanced ✓
        </span>
</div>
<div className="flex items-baseline gap-1.5 my-2">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">₹60,000</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">INR</span>
</div>
<div className="mt-4 pt-4 flex items-center justify-between bg-surface-container-low rounded-xl px-3.5 py-2.5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">shield</span>
<span className="font-label-md text-label-md text-on-surface">Dual sign-off enabled</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">4/5 approvals auto</span>
</div>
</div>
</section>
{/*  Your Personal Holding Card  */}
<section className="px-margin py-space-sm">
<div className="rounded-2xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
</div>
<div>
<h3 className="font-title-md text-title-md text-on-surface">Your Vault Share</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Aisha Sharma · 20.0% allocation</p>
</div>
</div>
<button className="font-label-sm text-label-sm text-primary font-semibold flex items-center gap-0.5 hover:underline" id="explainBtn">
          Explain balance
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
{/*  Financial Metrics Grid  */}
<div className="grid grid-cols-3 gap-2 mt-2 pt-2">
<div className="bg-surface-container-low rounded-xl p-3 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Added</span>
<p className="font-title-md text-title-md text-on-surface mt-1">₹12,000</p>
</div>
<div className="bg-surface-container-low rounded-xl p-3 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Committed</span>
<p className="font-title-md text-title-md text-on-surface mt-1">₹8,667</p>
</div>
<div className="bg-surface-container rounded-xl p-3 flex flex-col justify-between">
<span className="font-label-sm text-label-sm text-primary font-semibold">Available</span>
<p className="font-title-md text-title-md text-primary font-bold mt-1">₹3,333</p>
</div>
</div>
{/*  Visual ratio gauge  */}
<div className="mt-4">
<div className="flex justify-between items-center mb-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">Reserved for River Raft &amp; Stay</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">72.2% utilized</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden flex">
<div className="bg-primary-container h-full rounded-full transition-all duration-500" style={{"width":"72.2%"}}></div>
<div className="bg-secondary-container h-full rounded-full transition-all duration-500" style={{"width":"27.8%"}}></div>
</div>
</div>
{/*  Card Action Shortcut  */}
<div className="mt-4 pt-3 flex items-center justify-end">
<button className="font-label-md text-label-md text-primary font-semibold inline-flex items-center gap-1 hover:underline">
          Withdraw / Add funds
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</section>
{/*  Quick Actions Row  */}
<section className="px-margin py-space-sm flex gap-space-sm">
<button className="flex-1 h-12 rounded-xl bg-primary-container text-on-primary font-title-md text-title-md flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-[20px]">add_circle</span>
      Deposit to Pool
    </button>
<button className="flex-1 h-12 rounded-xl bg-surface-container text-on-surface font-title-md text-title-md flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-[20px]">payments</span>
      Withdraw
    </button>
</section>
{/*  Member Holdings Section  */}
<section className="px-margin pt-space-md pb-space-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Member Holdings</h3>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">5</span>
</div>
<button className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
<span>Ledger breakdown</span>
<span className="material-symbols-outlined text-[16px]">unfold_more</span>
</button>
</div>
{/*  Member Rows List  */}
<div className="flex flex-col gap-2.5">
{/*  Aisha Sharma (You)  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover" data-alt="A candid documentary style portrait of Aisha, a young Indian woman smiling warmly outdoors under soft natural overcast monsoon light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7KquAvGynuf3KYP4qysE8y3dH2PsxMHgB5Di0QUBHX2iYOiAWeWaMxUiEecBsb2VUlAbizpM10X1h68AMMKOAHcBjmUEmIpJ7pLcG5xi0GQKOIAH-P2IfyFCNWmcuLTYkCy-n0knPmY_SXOwfPpGRXdC1kVBPh2cjDd6mVZTg54zV2JWRCaueU1UOTzX-ZnxKZjVJF8jGOoSqSscEpVXFnOS0kZxEVENlDC6wixQKiGP2xyMl3oldjQ"/>
<span className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary text-on-primary rounded-full flex items-center justify-center font-label-sm text-[9px] font-bold">★</span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-title-md text-title-md text-on-surface">Aisha Sharma</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container text-primary font-label-sm text-[10px] uppercase font-bold">You</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Deposited ₹12,000</p>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Available</span>
<span className="font-currency-md text-currency-md text-primary font-semibold">₹3,333</span>
</div>
</div>
<div className="space-y-1 mt-3">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Committed: ₹8,667</span>
<span>Available: ₹3,333</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden flex">
<div className="bg-primary-container h-full" style={{"width":"72.2%"}}></div>
<div className="bg-secondary-container h-full" style={{"width":"27.8%"}}></div>
</div>
</div>
</div>
{/*  Rohan Sen  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" data-alt="A portrait of Rohan, an Indian man with glasses looking thoughtfully at a scenic travel horizon in Dandeli, warm natural lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUejZ0IP9QgDzOe7JsD0L875V-fyqji872Mcqi_zlFFHtBUeehJqtGxkykbw3XFYKjBUEceJiOfHgVDlIo1A2K-Jgrke9EdjXoVkSDpGMEwhpOJTus8djwaIvJyxYbxV4Pe1gJToEIVHOX8XEb4gX-z6Br1H72a8fYeUFxefhMKjUjxZlsJsAm6UxCB8fDn-63K6gD6PJntFJmicx_y0DsihiI_4iBpir0Gmvuyekfua6uDavOIXGtRw"/>
<div>
<span className="font-title-md text-title-md text-on-surface">Rohan Sen</span>
<p className="font-label-sm text-label-sm text-on-surface-variant">Deposited ₹12,000</p>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Available</span>
<span className="font-currency-md text-currency-md text-on-surface font-semibold">₹2,200</span>
</div>
</div>
<div className="space-y-1 mt-3">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Committed: ₹9,800</span>
<span>Available: ₹2,200</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden flex">
<div className="bg-primary-container h-full" style={{"width":"81.6%"}}></div>
<div className="bg-secondary-container h-full" style={{"width":"18.4%"}}></div>
</div>
</div>
</div>
{/*  Amit Sharma  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" data-alt="A warm candid portrait of Amit, a cheerful young traveler wearing a linen shirt against a backdrop of lush green rainforest foliage." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFRo-n_6fCa-D-_biL0pEJQTosaYJ3NSANakm2-YCRW4GI-3t17__mP6-QenqBteAakVAE9brrqkB6A9jDoQVAS5fpyCFyVS-R1LWeF7wpgNud4K55iS9PcIqLMsQ-JcIrW4jnEWZ1ZZh0WifsCJ7o_ZhFokCM1ZWDV5qXVYfhx05hQzL1JgG9hLgisUOdjfCffwRxSYQGcGtfM3cB2LHdrj_zK49Ip8uN5t02ZySYbDiXTciJbU-HMA"/>
<div>
<span className="font-title-md text-title-md text-on-surface">Amit Sharma</span>
<p className="font-label-sm text-label-sm text-on-surface-variant">Deposited ₹14,000</p>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Available</span>
<span className="font-currency-md text-currency-md text-on-surface font-semibold">₹2,800</span>
</div>
</div>
<div className="space-y-1 mt-3">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Committed: ₹11,200</span>
<span>Available: ₹2,800</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden flex">
<div className="bg-primary-container h-full" style={{"width":"80%"}}></div>
<div className="bg-secondary-container h-full" style={{"width":"20%"}}></div>
</div>
</div>
</div>
{/*  Priya Desai  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" data-alt="A natural light portrait of Priya, an Indian woman with hair pulled back in a loose bun, smiling softly against a misty river valley." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAstar34sb3OndiUtoSzQ22ezwhz-sCkpZY2HdEHRAbCpoPoSBEMyJojz_fTSSDO3vVy1BkLo4iseuNuCRzAwW-SQR1nKBC0SQ8yYph_LoQOoID6oGnioI0G6lfuBDKxeyR3M0LyGjkuT6ClwAim_FHqyI_6sbVlM_zjKDVqat7HRGqNlWuMEdKc9ghSkZ_DGBxDNCrSg2rveD-QwwkMw2YwgfuYAhwd9B7uhRqLYOQZdaA5cMET-j44g"/>
<div>
<span className="font-title-md text-title-md text-on-surface">Priya Desai</span>
<p className="font-label-sm text-label-sm text-on-surface-variant">Deposited ₹11,000</p>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Available</span>
<span className="font-currency-md text-currency-md text-on-surface font-semibold">₹3,666</span>
</div>
</div>
<div className="space-y-1 mt-3">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Committed: ₹7,334</span>
<span>Available: ₹3,666</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden flex">
<div className="bg-primary-container h-full" style={{"width":"66.7%"}}></div>
<div className="bg-secondary-container h-full" style={{"width":"33.3%"}}></div>
</div>
</div>
</div>
{/*  Neha Kulkarni  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Close up photographic portrait of Neha, a friendly traveler with expressive eyes, shot on 35mm film aesthetic with muted green undertones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH9x_WdckwqBOmugABhsvpbTzLVwSCzKWG0r0SZqQlr74pSOx4e31g-lKEvf-o6mUyX9MN3f324HbxI622mds5uVGlR3NtRS7pLSYRvZVS1690TRhtPD_-RjC7J5VtEjGkPDtKjtgJupRA17mQssyqGslhKykUe-G-1HBROWO3eV4Prg-gjjUuloSmiR7nWaGexZu9YjzxR2bzNGTF8TdLzEI2aj3LCXf-KUWv2VwgEeqs6QnTSs9kmA"/>
<div>
<span className="font-title-md text-title-md text-on-surface">Neha Kulkarni</span>
<p className="font-label-sm text-label-sm text-on-surface-variant">Deposited ₹11,000</p>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Available</span>
<span className="font-currency-md text-currency-md text-on-surface font-semibold">₹2,333</span>
</div>
</div>
<div className="space-y-1 mt-3">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Committed: ₹8,667</span>
<span>Available: ₹2,333</span>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden flex">
<div className="bg-primary-container h-full" style={{"width":"78.8%"}}></div>
<div className="bg-secondary-container h-full" style={{"width":"21.2%"}}></div>
</div>
</div>
</div>
</div>
</section>
{/*  Quiet Escrow Trust & Security Note  */}
<section className="px-margin py-space-md mb-space-sm">
<div className="rounded-2xl bg-surface-container-low p-space-md flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">account_balance</span>
</div>
<div>
<p className="font-title-md text-title-md text-on-surface leading-tight">Escrow backed by Federal Bank</p>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-snug">
          Funds release exclusively on verified milestone sign-offs by at least 3 co-travelers. Zero personal liability.
        </p>
</div>
</div>
</section>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-2px_12px_rgba(16,32,28,0.04)]" data-active-classes="text-primary font-semibold"><div className="flex items-center justify-around h-20 px-space-xs"><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="trip" href="#"><span className="material-symbols-outlined text-[24px]">landscape</span><span className="font-label-md text-label-md">Trip</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="itinerary" href="#"><span className="material-symbols-outlined text-[24px]">calendar_today</span><span className="font-label-md text-label-md">Itinerary</span></a><div className="flex items-center justify-center min-w-[56px] min-h-[44px] -mt-5"><a className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-[0_8px_20px_rgba(30,111,100,0.35)] hover:bg-primary transition-all duration-200 active:scale-95" data-path="add-expense" href="#"><span className="material-symbols-outlined text-[28px]">add</span></a></div><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs transition-colors text-primary font-semibold" data-path="pool" href="#"><span className="material-symbols-outlined text-[24px]">account_balance_wallet</span><span className="font-label-md text-label-md">Money</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="group" href="#"><span className="material-symbols-outlined text-[24px]">group</span><span className="font-label-md text-label-md">Group</span></a></div></nav>
</>
  );
}
