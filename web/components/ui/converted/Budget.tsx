"use client";
import React from 'react';

export default function Budget() {
  return (
    <>
<header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.03)] pt-safe"><div className="flex items-center justify-between px-margin h-16"><div className="flex items-center gap-space-sm"><span className="material-symbols-outlined text-[28px] text-primary">explore</span><div className="flex flex-col"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">GroupTrip</span><h1 className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">Monsoon Escape</h1></div></div><div className="flex items-center gap-space-sm"><button aria-label="Aisha Profile" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors ring-2 ring-primary/20"><img alt="Aisha" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyd6CeleLXsnMPJQvTeAdsUAgcZvlE_zS_krlY_TiqhmILU8Q7AlkZWu58uK72rwgcytazmYYBoSECIJlWsbKYp8wNErglOTpr58hG2Khv7qGkwq_imJVb0Ix7iN3op-Rc8jcKQtuastrnD6nVNgtjTkiYKZNpz2LoRAWzjAxmkPdYlfIwkWCCCg8eAt9Ur2qxWMkPymvGjT0s2cCTIvEHj_ed-87l3vBVDy1875IaH1O-TNOEcN8mmQ"/></button></div></div></header><main className="flex-1 w-full bg-surface pt-16 pb-28"><div className="flex flex-col w-full">
<div className="w-full px-margin pt-space-sm pb-space-xs">
<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-1">
<a className="px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant whitespace-nowrap transition-colors hover:bg-surface-variant" href="#">Pool</a>
<a className="px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant whitespace-nowrap transition-colors hover:bg-surface-variant" href="#">Expenses</a>
<a className="px-4 py-2 rounded-full font-label-md text-label-md bg-primary-container text-on-primary whitespace-nowrap shadow-sm" href="#">Budget</a>
<a className="px-4 py-2 rounded-full font-label-md text-label-md bg-surface-container text-on-surface-variant whitespace-nowrap transition-colors hover:bg-surface-variant" href="#">Settle</a>
</div>
</div>
<div className="px-margin flex flex-col gap-space-lg pt-space-sm pb-space-xl">
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Projected Personal Share</span>
<span className="font-display-lg-mobile text-display-lg-mobile text-on-surface font-normal mt-0.5">₹18,400</span>
</div>
<div className="flex flex-col items-end text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Target Cap</span>
<span className="font-currency-md text-currency-md text-on-surface mt-0.5">₹20,000</span>
</div>
</div>
<div className="flex flex-col gap-1.5 pt-1">
<div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary-container rounded-full transition-all duration-700" style={{"width":"92%"}}></div>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm">92% utilized</span>
<span className="font-label-sm text-label-sm">₹1,600 buffer balance</span>
</div>
</div>
<div className="flex items-center gap-space-sm bg-surface-container-low px-3.5 py-2.5 rounded-lg text-on-surface">
<span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
<span className="font-body-md text-body-md text-on-surface-variant">₹1,600 buffer remaining across 2 remaining days</span>
</div>
</div>
<div className="rounded-xl bg-secondary-fixed/50 p-space-md flex items-start gap-space-md shadow-sm">
<div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[20px]">restaurant</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-2">
<span className="font-title-md text-title-md text-on-surface">Dining cadence running high</span>
<span className="w-2 h-2 rounded-full bg-secondary-container shrink-0"></span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
          Food spend is above the ₹1,500/day cap. Avg ₹1,820/day currently tracking.
        </p>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest p-space-lg shadow-sm flex flex-col gap-space-lg">
<div className="flex items-center justify-between">
<h2 className="font-title-lg text-title-lg text-on-surface">Category Milestones</h2>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">5 Envelopes</span>
</div>
<div className="flex flex-col gap-space-lg">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">hotel</span>
<span className="font-title-md text-title-md text-on-surface">Stay</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-currency-md text-currency-md text-on-surface">₹4,800</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ ₹5,000</span>
</div>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"96%"}}></div>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm">96% allocated</span>
<span className="font-label-sm text-label-sm text-primary font-medium">On track</span>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">directions_car</span>
<span className="font-title-md text-title-md text-on-surface">Travel</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-currency-md text-currency-md text-on-surface">₹4,200</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ ₹4,500</span>
</div>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"93%"}}></div>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm">93% allocated</span>
<span className="font-label-sm text-label-sm text-primary font-medium">On track</span>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">lunch_dining</span>
<span className="font-title-md text-title-md text-on-surface">Food</span>
<span className="w-2 h-2 rounded-full bg-secondary-container"></span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-currency-md text-currency-md text-on-surface">₹4,900</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ ₹4,000</span>
</div>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-secondary-container rounded-full" style={{"width":"100%"}}></div>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm">122% allocated</span>
<span className="font-label-sm text-label-sm text-secondary font-medium">Near limit</span>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">kayaking</span>
<span className="font-title-md text-title-md text-on-surface">Activities</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-currency-md text-currency-md text-on-surface">₹3,200</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ ₹4,500</span>
</div>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"71%"}}></div>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm">71% allocated</span>
<span className="font-label-sm text-label-sm text-primary font-medium">Under budget</span>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">shopping_bag</span>
<span className="font-title-md text-title-md text-on-surface">Shopping &amp; Extras</span>
</div>
<div className="flex items-baseline gap-1">
<span className="font-currency-md text-currency-md text-on-surface">₹1,300</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ ₹2,000</span>
</div>
</div>
<div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"65%"}}></div>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="font-label-sm text-label-sm">65% allocated</span>
<span className="font-label-sm text-label-sm text-primary font-medium">Under budget</span>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-tertiary-fixed/60 p-space-md shadow-sm flex flex-col gap-space-sm text-on-tertiary-fixed">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-tertiary">groups</span>
<span className="font-title-md text-title-md text-on-tertiary-fixed">Collective Treasury</span>
</div>
<span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-tertiary-fixed-dim text-on-tertiary-fixed">5 Travelers</span>
</div>
<p className="font-body-md text-body-md text-on-tertiary-fixed-variant">
        Collective group budget: ₹92,000 total · 78% utilized
      </p>
<div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden mt-1">
<div className="h-full bg-tertiary rounded-full" style={{"width":"78%"}}></div>
</div>
<div className="flex items-center justify-between text-on-tertiary-fixed-variant pt-0.5">
<span className="font-label-sm text-label-sm">₹71,760 logged across all ledgers</span>
<span className="font-label-sm text-label-sm">₹20,240 collective reserve</span>
</div>
</div>
<div className="pt-space-xs">
<button className="w-full h-12 rounded-xl bg-surface-container text-on-surface font-title-md text-title-md flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-[0.99] hover:bg-surface-variant" type="button">
<span className="material-symbols-outlined text-[20px] text-primary">tune</span>
<span>Adjust my budget limits</span>
</button>
</div>
</div>
</div></main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-2px_12px_rgba(16,32,28,0.04)]" data-active-classes="text-primary font-semibold"><div className="flex items-center justify-around h-20 px-space-xs"><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="trip" href="#"><span className="material-symbols-outlined text-[24px]">landscape</span><span className="font-label-md text-label-md">Trip</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="itinerary" href="#"><span className="material-symbols-outlined text-[24px]">calendar_today</span><span className="font-label-md text-label-md">Itinerary</span></a><div className="flex items-center justify-center min-w-[56px] min-h-[44px] -mt-5"><a className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-[0_8px_20px_rgba(30,111,100,0.35)] hover:bg-primary transition-all duration-200 active:scale-95" data-path="add-expense" href="#"><span className="material-symbols-outlined text-[28px]">add</span></a></div><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="pool" href="#"><span className="material-symbols-outlined text-[24px]">account_balance_wallet</span><span className="font-label-md text-label-md">Money</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="group" href="#"><span className="material-symbols-outlined text-[24px]">group</span><span className="font-label-md text-label-md">Group</span></a></div></nav>
</>
  );
}
