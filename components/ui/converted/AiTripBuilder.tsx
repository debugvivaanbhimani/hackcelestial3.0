import React from 'react';

export default function AiTripBuilder() {
  return (
    <>
<header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.03)] pt-safe"><div className="flex items-center justify-between px-margin h-16"><div className="flex items-center gap-space-sm"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-variant transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[22px]">arrow_back</span></button><h1 className="font-headline-sm text-headline-sm tracking-tight text-on-surface">Ai Trip Builder</h1></div><div className="flex items-center gap-space-sm"><button aria-label="Close" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[22px]">close</span></button></div></div></header><main className="flex-1 w-full bg-surface pt-16 pb-safe"><div className="flex flex-col w-full pb-32">
<section className="px-margin pt-4 pb- space-y-2">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/20 text-on-secondary-fixed">
<span className="material-symbols-outlined text-[15px] text-secondary" style={{"fontVariationSettings":"\"FILL\" 1"}}>auto_awesome</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-secondary">Collective Synthesis</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Built around everyone.</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xs">Synthesizing preferences from 5 travellers to balance thrill, rest, and regional food culture.</p>
</section>
<section className="mt-4 px-margin">
<div className="p-4 rounded-xl bg-surface-container-low shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"\"FILL\" 1"}}>insights</span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-title-md text-title-md text-primary">98% Harmony Score</span>
<span className="material-symbols-outlined text-[16px] text-secondary" style={{"fontVariationSettings":"\"FILL\" 1"}}>verified</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant">0 schedule conflicts · 100% matched wishes</p>
</div>
</div>
<div className="flex -space-x-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="w-2 h-2 rounded-full bg-primary-fixed-dim"></span>
</div>
</div>
</section>
<section className="mt-6">
<div className="px-margin flex items-center justify-between mb-3">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Travel Party Profiles</span>
<span className="font-label-sm text-label-sm text-primary font-medium">5 Synchronized</span>
</div>
<div className="flex gap-3 overflow-x-auto px-margin no-scrollbar pb-2">
{/*  Aisha (Me)  */}
<div className="min-w-[210px] max-w-[210px] p-3.5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between shrink-0">
<div>
<div className="flex items-center gap-2.5 mb-2.5">
<img alt="Aisha" className="w-9 h-9 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XRzHa9wiO5QNy_kmq17I6ctA3ReamWOJQFSCw2RP_5yJs1GBn4tjuyQvjddiP-T7uCrCv6zyb7ZhwIDrJ4-tcvgluSJs4j9XJmN7Nb3BFkqORrdQdAHfzYjV13F1ud1NXXUjQ0_mnT1BsMRPCLb8l1OxZQyiZx3Q-DGZi9wK6iPPWRBTpNn2cJjWYiQS0tsLNS98lTxSHGq9euK5BRoQ86Q7EE8nvl1Jw3QIEG5dfSnhrr1yM8cp6ZX0dJ"/>
<div>
<div className="flex items-center gap-1">
<p className="font-title-md text-title-md text-on-surface leading-tight">Aisha</p>
<span className="font-label-sm text-[10px] text-on-primary bg-primary px-1.5 py-0.2 rounded-full">You</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Slow Pace</p>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Quiet mornings, specialty coffee &amp; slow nature trails.</p>
</div>
<div className="mt-3 flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[14px]">eco</span>
<span className="font-label-sm text-label-sm">Morning serenity</span>
</div>
</div>
{/*  Rohan  */}
<div className="min-w-[210px] max-w-[210px] p-3.5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between shrink-0">
<div>
<div className="flex items-center gap-2.5 mb-2.5">
<img className="w-9 h-9 rounded-full object-cover" data-alt="Close up warm cinematic portrait of an energetic young Indian man smiling outdoors against warm golden sunlight, cinematic film photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4mIBHzQ04vqJ07jBvkCarjAqzFfPAkddOOrY4K0ImJ-gFq4VWp0oF1nG9oLgDaqAq4PD3S1uw-0qQgSAQFn7anEDgJ-TnSUHBaRnRgMu53Y8N-RgjDJFq21tZVV2iZ1Y-gIuSKOFY4aBvpdvTgHJLwbEjxSULnH-AL3cEjjnMX0-TNcZaXMGx-ysD1mLqp27KB-vj-PurLhgKnobJECKOnH82Uu7IHSx_UqJcE8rX5IfMb4gCLRyzaw"/>
<div>
<p className="font-title-md text-title-md text-on-surface leading-tight">Rohan</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Active Thrills</p>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">White-water rafting &amp; canopy zip-lining adventure.</p>
</div>
<div className="mt-3 flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[14px]">kayaking</span>
<span className="font-label-sm text-label-sm">High adrenaline</span>
</div>
</div>
{/*  Priya  */}
<div className="min-w-[210px] max-w-[210px] p-3.5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between shrink-0">
<div>
<div className="flex items-center gap-2.5 mb-2.5">
<img className="w-9 h-9 rounded-full object-cover" data-alt="Serene portrait of an Indian woman with silver hoop earrings wearing artisanal handwoven linen against warm clay architecture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5ch6wNI890-fDBN93Gj3rAXFkjZfAJudJxpyIXFS0oPDpvzPtz2WamZ040TwSBDrIcVas060lMNn58cySpolY4pusj6JGv3k_I2-Uyk84d-E1hPiuiM4UY-0p8SVmMH-VfwPubqd9S1nqwDSrOHfjEQxntWzVdvuzYx0-DdgX_UkoqHesZnQZ5R53RyN0M0l-K49xx6S6W-VHJsEr5x-VqpYbCg8-TVf5LtAqTxzalBh1qwcHKbvxow"/>
<div>
<p className="font-title-md text-title-md text-on-surface leading-tight">Priya</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Wellness Focus</p>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Ayurvedic wellness, photography spots &amp; temple stone craft.</p>
</div>
<div className="mt-3 flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-[14px]">spa</span>
<span className="font-label-sm text-label-sm">Restorative</span>
</div>
</div>
{/*  Amit  */}
<div className="min-w-[210px] max-w-[210px] p-3.5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between shrink-0">
<div>
<div className="flex items-center gap-2.5 mb-2.5">
<img className="w-9 h-9 rounded-full object-cover" data-alt="Candid lifestyle portrait of a cheerful Indian male traveller holding coffee cup outside rustic cafe in lush green hillside" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuDmLRneFfp2rvZ_vB3husFHF8rKUBLusiXPUy0W-S2Ht9avVsRNnaSqWRJDO07vlsd__6hWZGpSandXmS3FSlsjzqAbAl0co5eMqWpnwBFhDTIRl3S09y9PhMWb6P7ATOzQLoI8x0FPFbLP2vd1XkMIQJcRtOaz4WrWDmgPiK9l2IqU-zWEzhdz8OqwHtTjcB6GYs9PeDM0Dvd7DqooKTf8Tn-1AZnPIHMSFX8_WNzg9bksjrcDRvqQ"/>
<div>
<p className="font-title-md text-title-md text-on-surface leading-tight">Amit</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Culinary Scout</p>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Local food trails, river barbecue &amp; hidden bistro gems.</p>
</div>
<div className="mt-3 flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[14px]">restaurant</span>
<span className="font-label-sm text-label-sm">Spice &amp; feast</span>
</div>
</div>
{/*  Neha  */}
<div className="min-w-[210px] max-w-[210px] p-3.5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between shrink-0">
<div>
<div className="flex items-center gap-2.5 mb-2.5">
<img className="w-9 h-9 rounded-full object-cover" data-alt="Artistic warm natural portrait of a relaxed young Indian woman laughing softly with soft natural sun flares in an outdoor tropical courtyard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1XEPpFXw82IO4TEUouOXDu9qS3TpGX4Ljy88ATmVJCyVYReP6aP29p_FruCjnEBEaVq2hWtxz3f-HPShsxGGUOEAgRk9Zbfnur3p7B4XvqLdOdPzA-iVAnWFcZdfunSs8tYY1dBmdcC3m2bHt_h4ajgZFNELb5BUnTxWEi7JQ00pFHGa-ioAVrWcOkp9gzHKYMGzhvIOcd5tMxcN0XpKt55PNTceoqIIJyBSkMMrJKQlyIeQ8cT4D4g"/>
<div>
<p className="font-title-md text-title-md text-on-surface leading-tight">Neha</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Rest &amp; Chill</p>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">Flexible timing, afternoon hammocks &amp; zero 6 AM alarms.</p>
</div>
<div className="mt-3 flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[14px]">bedtime</span>
<span className="font-label-sm text-label-sm">No rushed dawn</span>
</div>
</div>
</div>
</section>
{/*  Balanced Day Plan Preview  */}
<section className="mt-6 px-margin">
<div className="flex items-center justify-between mb-4">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Balanced Day Plan</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">Day 2 · Dandeli Wild Sanctuary</p>
</div>
<span className="font-label-md text-label-md px-2.5 py-1 rounded-md bg-surface-container text-on-surface">Oct 14</span>
</div>
<div className="space-y-3">
{/*  09:00 AM  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2 relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-title-md text-title-md text-secondary">09:00 AM</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">Active pick</span>
</div>
<div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[13px] text-on-surface">group</span>
<span className="font-label-sm text-[11px] text-on-surface">Rohan · Amit</span>
</div>
</div>
<h4 className="font-title-lg text-title-lg text-on-surface">Kali Rapids Whitewater</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Class III river rafting run. Tailored launch time allows Aisha &amp; Neha leisurely camp breakfast without pre-dawn rushes.</p>
<div className="flex items-center gap-2 pt-1">
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface text-label-sm font-label-sm">120 mins</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface text-label-sm font-label-sm">Water gear included</span>
</div>
</div>
{/*  01:30 PM  */}
<div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-title-md text-title-md text-primary">01:30 PM</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold">Culinary pick</span>
</div>
<div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[13px] text-on-surface">group</span>
<span className="font-label-sm text-[11px] text-on-surface">Amit · Aisha</span>
</div>
</div>
<h4 className="font-title-lg text-title-lg text-on-surface">Malnad Spice Plantation Lunch</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Farm-to-banana-leaf thali under pepper vines. Includes quiet botanical walk for Aisha and bold cardamom tasting for Amit.</p>
<div className="flex items-center gap-2 pt-1">
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface text-label-sm font-label-sm">Organic Thali</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface text-label-sm font-label-sm">Single-origin Robusta</span>
</div>
</div>
{/*  03:30 PM  */}
<div className="p-4 rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-title-md text-title-md text-tertiary">03:30 PM</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-semibold">Split track</span>
</div>
<div className="flex items-center gap-1 bg-surface-container-highest px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[13px] text-on-surface">call_split</span>
<span className="font-label-sm text-[11px] text-on-surface">Priya &amp; Neha choice</span>
</div>
</div>
<h4 className="font-title-lg text-title-lg text-on-surface">Split Hour: Forest Spa or Riverside Hammocks</h4>
<p className="font-body-md text-body-md text-on-surface-variant">No forced itinerary. Option A: Warm oil Ayurvedic kadi massage for Priya. Option B: High-canopy riverside breeze naps for Neha.</p>
<div className="flex items-center gap-2 pt-1">
<span className="px-2 py-0.5 rounded-md bg-surface-container-lowest text-on-surface text-label-sm font-label-sm">Zero pressure</span>
<span className="px-2 py-0.5 rounded-md bg-surface-container-lowest text-on-surface text-label-sm font-label-sm">Self-paced</span>
</div>
</div>
{/*  07:00 PM  */}
<div className="p-4 rounded-xl bg-primary-container text-on-primary shadow-sm flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-title-md text-title-md text-on-primary-container">07:00 PM</span>
<span className="w-1.5 h-1.5 rounded-full bg-on-primary-container/40"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container font-semibold">Unanimous</span>
</div>
<div className="flex items-center gap-1 bg-surface-tint/60 px-2 py-0.5 rounded-full text-on-primary">
<span className="material-symbols-outlined text-[13px]" style={{"fontVariationSettings":"\"FILL\" 1"}}>favorite</span>
<span className="font-label-sm text-[11px]">All 5 travellers</span>
</div>
</div>
<h4 className="font-headline-sm text-headline-sm text-on-primary">Sunset Kayak &amp; Campfire Acoustic</h4>
<p className="font-body-md text-body-md text-surface-container">Gentle downstream paddle under twilight mist followed by fresh jackfruit river roast and unplugged music.</p>
<div className="flex items-center gap-2 pt-1">
<span className="px-2 py-0.5 rounded-md bg-surface-tint/60 text-surface-bright text-label-sm font-label-sm">Shared treasury covered</span>
</div>
</div>
</div>
</section>
{/*  Floating Sticky Action Container  */}
<aside aria-label="Trip actions" className="fixed bottom-0 left-0 right-0 p-margin bg-surface/90 backdrop-blur-md shadow-lg flex flex-col gap-2 z-40 max-w-lg mx-auto">
<button className="w-full h-12 bg-primary-container text-on-primary rounded-xl font-title-md text-title-md flex items-center justify-center gap-2 shadow-md hover:bg-primary transition-all active:scale-[0.99]" id="addPlanBtn">
<span>Add to itinerary</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
<button className="w-full py-2 text-center font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center gap-1.5" id="regenBtn">
<span className="material-symbols-outlined text-[16px]">refresh</span>
<span>Regenerate alternative with quieter afternoon</span>
</button>
</aside>
</div>
</main>
</>
  );
}
