"use client";
import React from 'react';

export default function MyTrips() {
  return (
    <>
<header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.03)] pt-safe"><div className="flex items-center justify-between px-margin h-16"><div className="flex items-center gap-space-sm"><img alt="GroupTrip Brand Mark" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Wci8rD5fkEYvBkx7TMlT-mlMKjF-ia_aT3zRv4pTgsuXCjuUYndAdyxwcKyXH4QJVKzqfrwcoM3cNGLZsCXEfrHurFsmWcTf2pxpsVgW9Uo0scGTbLJobFPQGr3J4tZA4gHiQOpbLqC3ECYBb6n_ZPa5WJmhG_VxdbaUojk0bhAiRLOX-M7Cvwbjxz9trgsnBqeuQda9af_0wWPAokeRfPYahW2UrTvd4KIqQXp_vbwSPgkZ2Eeno9Oj27"/><span className="font-headline-sm text-headline-sm tracking-tight text-on-surface">GroupTrip</span></div><div className="flex items-center gap-space-sm"><span className="font-title-md text-title-md text-primary">Trips</span><button aria-label="User Profile" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyd6CeleLXsnMPJQvTeAdsUAgcZvlE_zS_krlY_TiqhmILU8Q7AlkZWu58uK72rwgcytazmYYBoSECIJlWsbKYp8wNErglOTpr58hG2Khv7qGkwq_imJVb0Ix7iN3op-Rc8jcKQtuastrnD6nVNgtjTkiYKZNpz2LoRAWzjAxmkPdYlfIwkWCCCg8eAt9Ur2qxWMkPymvGjT0s2cCTIvEHj_ed-87l3vBVDy1875IaH1O-TNOEcN8mmQ"/></button></div></div></header><main className="flex-1 w-full bg-surface pt-16 pb-28"><div className="flex flex-col w-full px-margin pb-10 gap-space-lg">
{/*  Top Greeting & Persona  */}
<div className="flex items-center justify-between pt-2">
<div className="flex flex-col">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">Hi Aisha</h1>
<p className="font-body-md text-body-md text-on-surface-variant/80">Where are we wandering next?</p>
</div>
<div className="relative">
<img alt="Aisha" className="w-11 h-11 rounded-full object-cover shadow-sm bg-surface-container-high" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyd6CeleLXsnMPJQvTeAdsUAgcZvlE_zS_krlY_TiqhmILU8Q7AlkZWu58uK72rwgcytazmYYBoSECIJlWsbKYp8wNErglOTpr58hG2Khv7qGkwq_imJVb0Ix7iN3op-Rc8jcKQtuastrnD6nVNgtjTkiYKZNpz2LoRAWzjAxmkPdYlfIwkWCCCg8eAt9Ur2qxWMkPymvGjT0s2cCTIvEHj_ed-87l3vBVDy1875IaH1O-TNOEcN8mmQ"/>
<span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-primary-container"></span>
</div>
</div>
{/*  Section 1: Active Trip (Hero Feature)  */}
<section className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm tracking-widest uppercase text-primary font-semibold">Active Trip</span>
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span> Live vault
      </span>
</div>
{/*  Hero Card  */}
<div className="relative w-full h-64 rounded-xl overflow-hidden shadow-sm bg-surface-container cursor-pointer transition-transform duration-300 active:scale-[0.99]">
<div className="absolute inset-0 bg-cover bg-center" data-alt="Misty tropical river surrounded by dense rainforest foliage and calm dark water reflections in Dandeli Western Ghats India, moody atmospheric morning mist, quiet wooden canoe tied to riverbank, cinematic editorial travel photography" style={{"backgroundImage":"url(\"https"}}></div>
{/*  Ambient Gradient Scrim  */}
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-inverse-surface/40 to-transparent"></div>
{/*  Top Badges inside Hero  */}
<div className="relative z-10 p-4 flex items-center justify-between">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md text-on-surface font-label-md text-label-md shadow-sm">
          In 4 days
        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/90 backdrop-blur-md text-on-primary font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined text-[15px]" style={{"fontVariationSettings":"\"FILL\" 1"}}>verified</span>
          Escrow funded (5/5)
        </span>
</div>
{/*  Hero Bottom Details  */}
<div className="absolute bottom-0 inset-x-0 p-4 z-10 flex flex-col gap-1 text-on-primary">
<div className="flex items-baseline justify-between">
<h2 className="font-headline-sm text-headline-sm text-surface-container-lowest font-medium tracking-tight">Monsoon Escape</h2>
<span className="font-label-md text-label-md text-primary-fixed bg-primary-container/60 px-2 py-0.5 rounded backdrop-blur-sm">Group of 5</span>
</div>
<p className="font-body-md text-body-md text-surface-container-low/90">Dandeli · 12–15 Sep</p>
<div className="mt-2.5 pt-2.5 flex items-center justify-between bg-inverse-surface/60 backdrop-blur-md px-3 py-2 rounded-lg">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary-fixed">lock</span>
<span className="font-label-md text-label-md text-surface-bright">Vault: ₹59,200</span>
</div>
<span className="font-label-sm text-label-sm text-primary-fixed-dim">All balances clear</span>
</div>
</div>
</div>
</section>
{/*  Section 2: Upcoming & Planning  */}
<section className="flex flex-col gap-space-sm mt-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h2 className="font-title-lg text-title-lg text-on-surface">Upcoming trips</h2>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">2</span>
</div>
<button className="font-title-md text-title-md text-primary hover:text-primary-container flex items-center gap-0.5 transition-colors">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>Plan trip</span>
</button>
</div>
{/*  Card 1: South Goa Coastline  */}
<div className="w-full bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex gap-3.5 items-center hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="w-20 h-20 rounded-lg bg-cover bg-center shrink-0 relative overflow-hidden bg-surface-container-high" data-alt="Golden hour tropical sunset over Palolem beach in South Goa with serene palm trees silhouetted, couple walking barefoot along gentle tidal waves on warm golden sand, atmospheric fine art film photograph" style={{"backgroundImage":"url(\"https"}}>
<span className="absolute top-1 left-1 bg-surface/90 text-on-surface text-[10px] font-semibold px-1.5 py-0.5 rounded-full shadow-sm">Oct</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<h3 className="font-headline-sm text-title-lg text-on-surface truncate">South Goa Drift</h3>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant/60">arrow_forward</span>
</div>
<p className="font-label-md text-label-md text-on-surface-variant truncate mt-0.5">Palolem · 24–28 Oct · 4 people</p>
<div className="flex items-center justify-between mt-2 pt-1.5">
<span className="font-label-sm text-label-sm text-primary font-semibold">Pool: ₹48,000</span>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed/50 px-2 py-0.5 rounded-full">3/4 funded</span>
</div>
</div>
</div>
{/*  Card 2: Ubud Sanctuary  */}
<div className="w-full bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex gap-3.5 items-center hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="w-20 h-20 rounded-lg bg-cover bg-center shrink-0 relative overflow-hidden bg-surface-container-high" data-alt="Lush cascading emerald green rice terraces in Ubud Bali at sunrise with morning mist rising through coconut palm groves and distant volcano peaks, solitary local farmer walking along terraced ridge, serene documentary travel photography" style={{"backgroundImage":"url(\"https"}}>
<span className="absolute top-1 left-1 bg-surface/90 text-on-surface text-[10px] font-semibold px-1.5 py-0.5 rounded-full shadow-sm">Jan</span>
</div>
<div className="flex flex-col flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<h3 className="font-headline-sm text-title-lg text-on-surface truncate">Ubud Sanctuary</h3>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant/60">arrow_forward</span>
</div>
<p className="font-label-md text-label-md text-on-surface-variant truncate mt-0.5">Bali · Jan 2025 · 6 invited</p>
<div className="flex items-center justify-between mt-2 pt-1.5">
<span className="font-label-sm text-label-sm text-tertiary">Drafting itinerary</span>
<span className="font-label-sm text-label-sm text-primary-container flex items-center gap-0.5">
<span className="material-symbols-outlined text-[14px]">edit_note</span> 8 votes in
          </span>
</div>
</div>
</div>
</section>
{/*  Section 3: Past Journeys (Quiet Archive)  */}
<section className="flex flex-col gap-space-sm mt-1">
<div className="flex items-center justify-between">
<h2 className="font-title-lg text-title-lg text-on-surface">Past journeys</h2>
<span className="font-label-md text-label-md text-on-surface-variant">Archived</span>
</div>
<div className="flex flex-col gap-2">
{/*  Past Trip Item 1  */}
<div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low/70 hover:bg-surface-container transition-colors cursor-pointer">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined text-[20px]">local_cafe</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-on-surface truncate">Coorg Coffee Trails</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">July 2024 · 4 travellers</span>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="font-label-md text-label-md text-primary font-medium">Settled ₹42,100</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant/50">chevron_right</span>
</div>
</div>
{/*  Past Trip Item 2  */}
<div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low/70 hover:bg-surface-container transition-colors cursor-pointer">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined text-[20px]">kayaking</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-on-surface truncate">Alleppey Backwaters</span>
<span className="font-label-sm text-label-sm text-on-surface-variant/70">Feb 2024 · 6 travellers</span>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<span className="font-label-md text-label-md text-primary font-medium">Settled ₹68,500</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant/50">chevron_right</span>
</div>
</div>
</div>
</section>
</div></main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-2px_12px_rgba(16,32,28,0.04)]" data-active-classes="text-primary-container font-semibold"><div className="flex items-center justify-around h-20 px-space-xs"><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs transition-colors text-primary-container font-semibold" data-path="trips" href="#"><span className="material-symbols-outlined text-[24px]">explore</span><span className="font-label-md text-label-md">Trips</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="itinerary" href="#"><span className="material-symbols-outlined text-[24px]">calendar_today</span><span className="font-label-md text-label-md">Itinerary</span></a><div className="flex items-center justify-center min-w-[56px] min-h-[44px] -mt-5"><a className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-[0_8px_20px_rgba(30,111,100,0.35)] hover:bg-primary transition-all duration-200 active:scale-95" data-path="new-trip" href="#"><span className="material-symbols-outlined text-[28px]">add</span></a></div><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="treasury" href="#"><span className="material-symbols-outlined text-[24px]">account_balance_wallet</span><span className="font-label-md text-label-md">Money</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="fellowship" href="#"><span className="material-symbols-outlined text-[24px]">group</span><span className="font-label-md text-label-md">Group</span></a></div></nav>
</>
  );
}
