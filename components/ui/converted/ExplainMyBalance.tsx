import React from 'react';

export default function ExplainMyBalance() {
  return (
    <>
<header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span></button><span className="material-symbols-outlined text-[24px] text-primary">explore</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Explain My Balance</h1></div><div className="flex items-center gap-space-sm"><button aria-label="Close" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[22px]">close</span></button></div></div></header><main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full pb-10">
{/*  Editorial Intro & Top Banner  */}
<div className="px-margin pt-space-md pb-space-lg">
<div className="flex items-center gap-space-xs text-primary font-label-md text-label-md uppercase tracking-wider mb-space-xs">
<span className="material-symbols-outlined text-[16px]">account_balance_wallet</span>
<span>Personal Treasury Breakdown</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Aisha's Ledger Balance</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
      Here is the step-by-step arithmetic of every rupee in your name.
    </p>
</div>
{/*  Vault Summary Card (Tactile Art Paper aesthetic)  */}
<div className="px-margin mb-space-xl">
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden">
{/*  Ambient watermark accent  */}
<div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-surface-container-low opacity-60 pointer-events-none flex items-center justify-center">
<span className="material-symbols-outlined text-[90px] text-surface-variant/40">lock</span>
</div>
<div className="relative z-10">
<div className="flex items-center justify-between gap-space-sm mb-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Net Group Position</span>
<span className="inline-flex items-center gap-1 bg-surface-container-high text-primary px-2.5 py-0.5 rounded-full font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Reconciled
          </span>
</div>
<div className="flex items-baseline gap-space-xs mb-space-xs">
<span className="font-headline-md text-headline-md text-primary">₹</span>
<span className="font-currency-display text-currency-display text-on-surface tracking-tight">3,333</span>
</div>
<p className="font-title-md text-title-md text-primary-container font-medium">Available in Vault</p>
{/*  Dynamic Math Indicator Bar  */}
<div className="mt-space-md pt-space-md bg-surface-container-low/60 rounded-lg p-space-sm">
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant mb-1.5">
<span>Pool Deposit ₹12,000</span>
<span className="font-semibold text-on-surface">27.8% Liquid</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden flex">
<div className="bg-primary h-full rounded-full transition-all duration-700" style={{"width":"27.8%"}}></div>
<div className="bg-secondary-fixed-dim h-full transition-all duration-700" style={{"width":"6.0%"}}></div>
<div className="bg-surface-variant h-full flex-1"></div>
</div>
<div className="flex items-center justify-between text-label-sm font-label-sm mt-2 text-on-surface-variant">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary inline-block"></span> ₹3,333 Free</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary-fixed-dim inline-block"></span> ₹720 Escrow</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-surface-variant inline-block"></span> ₹7,947 Settled</span>
</div>
</div>
</div>
</div>
</div>
{/*  Editorial Timeline Section  */}
<div className="px-margin mb-space-xl">
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-md text-label-md text-on-surface-variant tracking-wider uppercase">Ledger Chronicle</span>
<span className="font-label-sm text-label-sm text-primary font-medium">5 Events Accounted</span>
</div>
{/*  Timeline Wrapper  */}
<div className="relative pl-6 space-y-space-lg">
{/*  Vertical Flow Hairline  */}
<div className="absolute left-2.5 top-3 bottom-4 w-0.5 bg-surface-variant -translate-x-1/2"></div>
{/*  Step 1  */}
<div className="relative group">
{/*  Timeline Marker Node  */}
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[13px]">add</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:bg-surface-container-low/40">
<div className="flex items-start justify-between gap-space-xs">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant">10 Sep · UPI Federal Bank</p>
<h3 className="font-title-md text-title-md text-on-surface mt-0.5">Trip Pool Initial Deposit</h3>
</div>
<span className="font-currency-md text-currency-md text-primary font-bold whitespace-nowrap">+₹12,000</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1.5">You added ₹12,000 to the communal trip treasury pool</p>
<div className="mt-space-sm pt-space-xs flex items-center justify-between bg-surface-container-low px-space-sm py-1 rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Running Balance</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">₹12,000 in holding</span>
</div>
</div>
</div>
{/*  Step 2  */}
<div className="relative group">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[13px]">hotel</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:bg-surface-container-low/40">
<div className="flex items-start justify-between gap-space-xs">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant">11 Sep · Auto-committed from pool</p>
<h3 className="font-title-md text-title-md text-on-surface mt-0.5">The Fern Riverfront Chalets</h3>
</div>
<span className="font-currency-md text-currency-md text-on-surface font-semibold whitespace-nowrap">-₹4,800</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1.5">Hotel confirmed — your share ₹4,800</p>
<div className="mt-space-sm pt-space-xs flex items-center justify-between bg-surface-container-low px-space-sm py-1 rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Running Balance</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">₹7,200 available</span>
</div>
</div>
</div>
{/*  Step 3  */}
<div className="relative group">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[13px]">kayaking</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:bg-surface-container-low/40">
<div className="flex items-start justify-between gap-space-xs">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant">12 Sep · Rebalanced automatically</p>
<h3 className="font-title-md text-title-md text-on-surface mt-0.5">Kali Rapids River Rafting</h3>
</div>
<span className="font-currency-md text-currency-md text-on-surface font-semibold whitespace-nowrap">-₹1,750</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
            Priya cancelled rafting — refund of ₹1,333 moved to her, your revised share ₹1,750
          </p>
<div className="mt-space-sm pt-space-xs flex items-center justify-between bg-surface-container-low px-space-sm py-1 rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Running Balance</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">₹5,450 available</span>
</div>
</div>
</div>
{/*  Step 4  */}
<div className="relative group">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[13px]">restaurant</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:bg-surface-container-low/40">
<div className="flex items-start justify-between gap-space-xs">
<div>
<p className="font-label-sm text-label-sm text-on-surface-variant">13 Sep · Reconciled</p>
<h3 className="font-title-md text-title-md text-on-surface mt-0.5">Bistro &amp; Grill Dinner</h3>
</div>
<span className="font-currency-md text-currency-md text-on-surface font-semibold whitespace-nowrap">-₹720</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1.5">Malnad Bistro dinner — your share ₹720</p>
<div className="mt-space-sm pt-space-xs flex items-center justify-between bg-surface-container-low px-space-sm py-1 rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant">Running Balance</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">₹4,730 available</span>
</div>
</div>
</div>
{/*  Step 5 (Escrow / Final Hold Milestone)  */}
<div className="relative group">
<div className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-[13px]">lock_clock</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all hover:bg-surface-container-low/40">
<div className="flex items-start justify-between gap-space-xs">
<div>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold bg-secondary-fixed/50 px-2 py-0.5 rounded-full mb-1">
<span className="material-symbols-outlined text-[12px]">hourglass_empty</span>
                Under Verification
              </span>
<h3 className="font-title-md text-title-md text-on-surface">Fuel &amp; Transit Rebalance</h3>
</div>
<span className="font-currency-md text-currency-md text-secondary font-semibold whitespace-nowrap">₹720 frozen</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-1.5">
            Airport cab ₹3,600 held in review; your pending share ₹720 temporarily frozen
          </p>
{/*  Final Resolution Banner inside Step 5  */}
<div className="mt-space-md bg-surface-container-high/80 rounded-lg p-space-sm flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">verified</span>
<span className="font-label-md text-label-md text-on-surface">Unencumbered Total</span>
</div>
<span className="font-currency-md text-currency-md text-primary font-bold">₹3,333 liquid</span>
</div>
</div>
</div>
</div>
</div>
{/*  Editorial Note / Transparency Guarantee  */}
<div className="px-margin mb-space-lg">
<div className="bg-surface-container-low rounded-xl p-space-md flex gap-space-sm items-start">
<span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">shield</span>
<div>
<h4 className="font-title-md text-title-md text-on-surface">Group Escrow Safe-Vault</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
          Unspent contributions stay strictly ring-fenced in your own name under ICICI Escrow custody until verified by all members.
        </p>
</div>
</div>
</div>
{/*  Bottom Actions  */}
<div className="px-margin mt-auto flex flex-col gap-space-sm">
<button className="w-full h-12 bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-xl shadow-sm flex items-center justify-center gap-space-xs transition-transform active:scale-[0.98]" id="withdrawBtn">
<span className="material-symbols-outlined text-[18px]">payments</span>
<span>Withdraw ₹3,333 Now</span>
</button>
<button className="w-full h-12 bg-surface-container text-on-surface font-label-md text-label-md rounded-xl flex items-center justify-center gap-space-xs transition-all hover:bg-surface-container-high active:scale-[0.98]" id="downloadLedgerBtn">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
<span>Download PDF Ledger</span>
</button>
</div>
{/*  Micro-interaction Toast Container  */}
<div className="fixed bottom-6 inset-x-margin z-50 pointer-events-none transform translate-y-20 opacity-0 transition-all duration-300 flex justify-center" id="toastNotification">
<div className="bg-inverse-surface text-inverse-on-surface px-space-md py-space-sm rounded-xl shadow-lg flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-inverse-primary" id="toastIcon">check_circle</span>
<span className="font-body-md text-body-md" id="toastMessage">Action recorded</span>
</div>
</div>
</div>
</main>
</>
  );
}
