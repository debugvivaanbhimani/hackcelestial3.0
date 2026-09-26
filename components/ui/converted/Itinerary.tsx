import React from 'react';

export default function Itinerary() {
  return (
    <>
<header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.03)] pt-safe"><div className="flex items-center justify-between px-margin h-16"><div className="flex items-center gap-space-sm"><img alt="GroupTrip Brand Mark" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Wci8rD5fkEYvBkx7TMlT-mlMKjF-ia_aT3zRv4pTgsuXCjuUYndAdyxwcKyXH4QJVKzqfrwcoM3cNGLZsCXEfrHurFsmWcTf2pxpsVgW9Uo0scGTbLJobFPQGr3J4tZA4gHiQOpbLqC3ECYBb6n_ZPa5WJmhG_VxdbaUojk0bhAiRLOX-M7Cvwbjxz9trgsnBqeuQda9af_0wWPAokeRfPYahW2UrTvd4KIqQXp_vbwSPgkZ2Eeno9Oj27"/><div className="flex flex-col"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Active Trip</span><h1 className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">Monsoon Escape</h1></div></div><div className="flex items-center gap-space-sm"><button aria-label="Aisha Profile" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors ring-2 ring-primary/20"><img alt="Aisha" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyd6CeleLXsnMPJQvTeAdsUAgcZvlE_zS_krlY_TiqhmILU8Q7AlkZWu58uK72rwgcytazmYYBoSECIJlWsbKYp8wNErglOTpr58hG2Khv7qGkwq_imJVb0Ix7iN3op-Rc8jcKQtuastrnD6nVNgtjTkiYKZNpz2LoRAWzjAxmkPdYlfIwkWCCCg8eAt9Ur2qxWMkPymvGjT0s2cCTIvEHj_ed-87l3vBVDy1875IaH1O-TNOEcN8mmQ"/></button></div></div></header><main className="flex-1 w-full bg-surface pt-16 pb-28"><div className="flex flex-col w-full">
{/*  Day Selector Carousel  */}
<div className="px-margin pt-space-md pb-space-sm">
<div className="flex items-center justify-between pb-space-xs">
<span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">Chronicle &amp; Itinerary</span>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        Dandeli Reserve
      </span>
</div>
<div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-space-xs -mx-margin px-margin">
<button className="flex-shrink-0 px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-colors">
        Day 1 <span className="opacity-60 text-xs font-normal">12 Sep</span>
</button>
<button className="flex-shrink-0 px-4 py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm flex items-center gap-1.5">
<span>Day 2 <span className="font-normal opacity-80">13 Sep</span></span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
<span className="text-[10px] tracking-tight uppercase opacity-90">Today</span>
</button>
<button className="flex-shrink-0 px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-colors">
        Day 3 <span className="opacity-60 text-xs font-normal">14 Sep</span>
</button>
<button className="flex-shrink-0 px-4 py-2 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-colors">
        Day 4 <span className="opacity-60 text-xs font-normal">15 Sep</span>
</button>
</div>
</div>
{/*  Editorial Timeline Section  */}
<div className="px-margin pt-space-xs pb-space-xl relative">
{/*  Continuous Timeline Spine  */}
<div className="absolute left-[31px] top-6 bottom-8 w-[2px] bg-surface-container-highest rounded-full"></div>
<div className="flex flex-col gap-space-lg">
{/*  Event 1: 08:30 AM (Completed/Confirmed)  */}
<div className="relative flex items-start gap-space-md group">
{/*  Milestone Pin  */}
<div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary mt-1">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings":"\"FILL\" 1"}}>check_circle</span>
</div>
{/*  Event Body  */}
<div className="flex-1 bg-surface-container-lowest rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between gap-2">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">08:30 AM · Pavilion</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[10px] uppercase font-semibold">Done</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Morning Chai &amp; Briefing</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Weather update, life-jacket fitting and river rapid protocol review.</p>
<div className="mt-3 pt-2.5 flex items-center justify-between border-t-0 bg-surface-container-low/60 -mx-space-md -mb-space-md p-space-sm px-space-md rounded-b-xl">
<span className="font-label-sm text-label-sm text-on-surface-variant">Attended by all 5 members</span>
<div className="flex items-center -space-x-1.5">
<span className="w-6 h-6 rounded-full bg-primary-container text-on-primary text-[10px] font-bold flex items-center justify-center ring-2 ring-surface-container-lowest">A</span>
<span className="w-6 h-6 rounded-full bg-secondary text-on-secondary text-[10px] font-bold flex items-center justify-center ring-2 ring-surface-container-lowest">R</span>
<span className="w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary-container text-[10px] font-bold flex items-center justify-center ring-2 ring-surface-container-lowest">P</span>
<span className="w-6 h-6 rounded-full bg-surface-tint text-on-primary text-[10px] font-bold flex items-center justify-center ring-2 ring-surface-container-lowest">A</span>
<span className="w-6 h-6 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center ring-2 ring-surface-container-lowest">N</span>
</div>
</div>
</div>
</div>
{/*  Event 2: 09:00 AM (Confirmed Major Activity)  */}
<div className="relative flex items-start gap-space-md group">
{/*  Milestone Pin  */}
<div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-primary text-on-primary shadow flex items-center justify-center mt-1">
<span className="material-symbols-outlined text-[14px]">kayaking</span>
</div>
{/*  Event Body  */}
<div className="flex-1 bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">
<div className="relative h-28 w-full bg-cover bg-center" data-alt="A tranquil, misty Kali River canyon in Dandeli surrounded by dense lush green rainforest canopy, with morning sunbeams piercing mist and water droplets glistening on dark river rocks." style={{"backgroundImage":"url(\"https"}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-2.5 left-3">
<span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-[10px] font-bold tracking-wider uppercase">
                09:00 AM – 12:30 PM
              </span>
</div>
<div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between text-on-primary">
<span className="font-label-sm text-label-sm text-surface-variant font-medium">Kali River · Grade 3 Rapids</span>
<span className="font-currency-md text-currency-md text-secondary-fixed">₹1,400<span className="text-xs font-normal text-surface-container-highest">/p</span></span>
</div>
</div>
<div className="p-space-md">
<h2 className="font-headline-sm text-headline-sm text-on-surface">White Water Rafting</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">9 km expedition navigating the Hornbill and Smugglers’ rapids with certified instructors.</p>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary" style={{"fontVariationSettings":"\"FILL\" 1"}}>check_circle</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Confirmed · 5 going</span>
</div>
<div className="flex items-center -space-x-2">
<span className="w-6 h-6 rounded-full bg-primary-container text-on-primary text-[10px] font-bold flex items-center justify-center ring-2 ring-surface-container-lowest" title="Aisha (You)">A</span>
<span className="w-6 h-6 rounded-full bg-secondary text-on-secondary text-[10px] font-bold flex items-center justify-center ring-2 ring-surface-container-lowest" title="Rohan">R</span>
<span className="w-6 h-6 rounded-full bg-tertiary-container text-on-tertiary-container text-[10px] font-bold flex items-center justify-center ring-2 ring-surface-container-lowest" title="Priya">P</span>
<span className="w-6 h-6 rounded-full bg-surface-tint text-on-primary text-[10px] font-bold flex items-center justify-center ring-2 ring-surface-container-lowest" title="Amit">A</span>
<span className="w-6 h-6 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center ring-2 ring-surface-container-lowest" title="Neha">N</span>
</div>
</div>
</div>
</div>
</div>
{/*  Event 3: 01:15 PM (Planned / Light Card)  */}
<div className="relative flex items-start gap-space-md">
{/*  Milestone Pin  */}
<div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center mt-1">
<span className="material-symbols-outlined text-[14px]">restaurant</span>
</div>
<div className="flex-1 bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">01:15 PM · Deck Dining</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[10px] uppercase font-semibold">Planned</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Riverside Lunch at Bison Camp</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Coastal Karnataka thali &amp; wood-fired Malabar flatbreads over the riverbend.</p>
<div className="mt-2.5 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">group</span> All 5 members
            </span>
<span className="font-label-sm text-label-sm text-primary font-semibold">Pre-reserved</span>
</div>
</div>
</div>
{/*  Event 4: 02:00 PM – 05:00 PM (Choice Slot - Interactive Group Splitting)  */}
<div className="relative flex items-start gap-space-md">
{/*  Milestone Pin  */}
<div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-secondary-container text-on-secondary-container shadow flex items-center justify-center mt-1">
<span className="material-symbols-outlined text-[14px]">call_split</span>
</div>
<div className="flex-1 bg-surface-container-lowest rounded-xl p-space-md shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Parallel Choice Slot</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] uppercase font-bold">Split Track</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">2:00 – 5:00 PM · Afternoon Free Split</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5 text-xs">
            The group splits into smaller adventures. Each person pays only their individual choice.
          </p>
{/*  3 Parallel Options Cards  */}
<div className="mt-space-md flex flex-col gap-2.5" id="choiceSlotOptions">
{/*  Option 1: Rafting Drift  */}
<div className="choice-card p-3 rounded-lg bg-surface-container-low cursor-pointer transition-all hover:bg-surface-container" onClick={() => {}}>
<div className="flex items-start justify-between">
<div>
<h3 className="font-title-md text-title-md text-on-surface">Rapid Drift &amp; Kayaking</h3>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">3 people</span>
<span className="w-1 h-1 rounded-full bg-on-surface-variant/40"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Rohan, Amit, Neha</span>
</div>
</div>
<div className="text-right">
<span className="font-currency-md text-currency-md text-on-surface block">₹1,800</span>
<span className="font-label-sm text-label-sm text-on-surface-variant text-[11px]">per person</span>
</div>
</div>
</div>
{/*  Option 2: Ayurvedic Spa (My Pick)  */}
<div className="choice-card p-3 rounded-lg bg-surface-container text-on-surface cursor-pointer shadow-sm transition-all relative" onClick={() => {}}>
<div className="absolute -top-2 right-3">
<span className="px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-[10px] uppercase font-bold tracking-wider shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">check</span> My Pick
                </span>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="font-title-md text-title-md text-primary font-semibold">Ayurvedic Forest Spa</h3>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-sm text-label-sm text-primary font-medium">1 person</span>
<span className="w-1 h-1 rounded-full bg-primary/40"></span>
<span className="font-label-sm text-label-sm text-primary">Aisha (You)</span>
</div>
</div>
<div className="text-right">
<span className="font-currency-md text-currency-md text-primary block">₹2,400</span>
<span className="font-label-sm text-label-sm text-on-surface-variant text-[11px]">per person</span>
</div>
</div>
</div>
{/*  Option 3: Free time / River Walk  */}
<div className="choice-card p-3 rounded-lg bg-surface-container-low cursor-pointer transition-all hover:bg-surface-container" onClick={() => {}}>
<div className="flex items-start justify-between">
<div>
<h3 className="font-title-md text-title-md text-on-surface">River Walk &amp; Hammocks</h3>
<div className="flex items-center gap-2 mt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant">1 person</span>
<span className="w-1 h-1 rounded-full bg-on-surface-variant/40"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Priya</span>
</div>
</div>
<div className="text-right">
<span className="font-currency-md text-currency-md text-primary block">₹0</span>
<span className="font-label-sm text-label-sm text-on-surface-variant text-[11px]">Complimentary</span>
</div>
</div>
</div>
</div>
<div className="mt-3 text-center">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock_clock</span> Choices lock today at 1:00 PM
            </span>
</div>
</div>
</div>
{/*  Event 5: 07:30 PM (Planned Night Safari)  */}
<div className="relative flex items-start gap-space-md">
{/*  Milestone Pin  */}
<div className="relative z-10 flex-shrink-0 w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center mt-1">
<span className="material-symbols-outlined text-[14px]">nightlight</span>
</div>
<div className="flex-1 bg-surface-container-low rounded-xl p-space-md shadow-sm">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">07:30 PM – 10:00 PM</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[10px] uppercase font-semibold">Planned</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">Jungle Night Safari &amp; Dinner</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Open-top jeep exploration in Anshi core zone followed by campfire dinner.</p>
<div className="mt-3 pt-2 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">4 interested · Needs 1 vote</span>
<span className="font-currency-md text-currency-md text-on-surface">₹900<span className="text-xs font-normal text-on-surface-variant">/p</span></span>
</div>
<div className="mt-2.5 flex items-center gap-2">
<button className="flex-1 py-2 px-3 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md text-center shadow-xs hover:bg-surface-variant transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">thumb_up</span> Count Me In
            </button>
<button className="py-2 px-3 rounded-lg bg-surface-container text-on-surface-variant font-label-md text-label-md hover:bg-surface-container-high transition-colors">
              Decline
            </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-2px_12px_rgba(16,32,28,0.04)]" data-active-classes="text-primary font-semibold"><div className="flex items-center justify-around h-20 px-space-xs"><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="trip" href="#"><span className="material-symbols-outlined text-[24px]">landscape</span><span className="font-label-md text-label-md">Trip</span></a><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs transition-colors text-primary font-semibold" data-path="itinerary" href="#"><span className="material-symbols-outlined text-[24px]">calendar_today</span><span className="font-label-md text-label-md">Itinerary</span></a><div className="flex items-center justify-center min-w-[56px] min-h-[44px] -mt-5"><a className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-[0_8px_20px_rgba(30,111,100,0.35)] hover:bg-primary transition-all duration-200 active:scale-95" data-path="ai-trip-builder" href="#"><span className="material-symbols-outlined text-[28px]">add</span></a></div><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="money" href="#"><span className="material-symbols-outlined text-[24px]">account_balance_wallet</span><span className="font-label-md text-label-md">Money</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="group" href="#"><span className="material-symbols-outlined text-[24px]">group</span><span className="font-label-md text-label-md">Group</span></a></div></nav>
</>
  );
}
