"use client";
import React from 'react';

export default function DisputeThread() {
  return (
    <>
<header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span></button><span className="material-symbols-outlined text-[24px] text-primary">explore</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Dispute Thread</h1></div><div className="flex items-center gap-space-sm"><button aria-label="Close" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[22px]">close</span></button></div></div></header><main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full pb-10">
{/*  Reference Sub-header  */}
<div className="px-margin pt-4 pb-2 flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Arbitration · Case</span>
<span className="font-label-md text-label-md px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-medium">Dispute #882</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary" style={{"fontVariationSettings":"\"FILL\" 1"}}>lock</span>
<span className="font-label-sm text-label-sm">Escrow Protected</span>
</div>
</div>
{/*  Primary Disputed Charge Card (Frost/Lavender Tint)  */}
<section className="px-margin my-space-sm">
<div className="relative overflow-hidden rounded-xl bg-tertiary-fixed text-on-tertiary-fixed p-5 shadow-sm">
{/*  Watermark / Texture Accent  */}
<div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-on-tertiary-container/10 pointer-events-none flex items-center justify-center">
<span className="material-symbols-outlined text-[88px] text-tertiary-container/15 select-none">hourglass_pause</span>
</div>
<div className="flex items-start justify-between relative z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[18px]">local_taxi</span>
</div>
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Shared Transfer</span>
<h2 className="font-headline-sm text-headline-sm text-on-tertiary-fixed leading-tight">Airport cab · ₹3,600</h2>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-lowest/80 text-tertiary font-label-sm text-label-sm font-semibold shadow-xs">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse"></span>
          Frozen
        </span>
</div>
{/*  Banner Strip  */}
<div className="mt-4 p-3 rounded-lg bg-surface-container-lowest/70 backdrop-blur-sm flex items-start gap-2.5 relative z-10">
<span className="material-symbols-outlined text-[20px] text-primary-container shrink-0 mt-0.5">pause_circle</span>
<p className="font-title-md text-title-md text-on-tertiary-fixed leading-snug">
          ₹3,600 held in the pool while you sort this out
        </p>
</div>
{/*  Breakdown Details  */}
<div className="mt-3.5 space-y-1.5 relative z-10 text-on-tertiary-fixed-variant">
<div className="flex items-center gap-1.5 font-body-md text-body-md">
<span className="material-symbols-outlined text-[16px] text-primary shrink-0">group</span>
<span>Billed to: <strong className="font-semibold text-on-tertiary-fixed">All 5 members</strong> (₹720/person)</span>
</div>
<div className="flex items-center gap-1.5 font-body-md text-body-md">
<span className="material-symbols-outlined text-[16px] text-primary shrink-0">receipt_long</span>
<span>Paid by: <strong className="font-semibold text-on-tertiary-fixed">Amit Sharma</strong> on 12 Sep</span>
</div>
</div>
{/*  Quiet Reassurance Divider & Pill  */}
<div className="mt-4 pt-3.5 border-t border-tertiary-fixed-dim/40 flex items-center gap-2 relative z-10">
<span className="material-symbols-outlined text-[18px] text-primary shrink-0">shield</span>
<p className="font-label-sm text-label-sm text-tertiary leading-relaxed">
          Funds are paused in escrow. Nobody is charged until resolved.
        </p>
</div>
</div>
</section>
{/*  Editorial Note / Timeline Marker  */}
<div className="px-margin mt-4 mb-2 flex items-center justify-between">
<h3 className="font-title-lg text-title-lg text-on-surface">Member Discussion</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">3 messages</span>
</div>
{/*  Comment Thread  */}
<section className="px-margin space-y-3">
{/*  Message 1: Rohan Sen  */}
<article className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Editorial portrait photograph of Rohan, a stylish Indian traveler in his late twenties wearing a warm linen shirt against a muted sunlit coastal landscape." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk7k7V2qn7x-vnGX_4H3K5ZPsUYA09P8qAEix_WyKrGheG7_BbuhV_PQ_W0nTGOiE7KLO1LafAAn4p_WRgXpHqxQebQrDPSbr7096hB7gwjaLoVY70U55FKV8XlYfmbmDnKElSKGzLWZv0pbVjBTT1h9y5GkMd9rgml-SRgsNEDiS80cMALPaB4bPcskyM4-mgV6H9VeFgiLjH9kW5z464wYUoE-t-4rgKN9a_1TWfMXo1OkiT8i0myw"/>
</div>
<div>
<h4 className="font-title-md text-title-md text-on-surface leading-none">Rohan Sen</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant">12 Sep, 6:15 PM</span>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">Passenger</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed pl-12 -mt-1">
        Hey guys, Amit booked an Innova from Goa airport, but only Amit, Neha, and I took it. Aisha and Priya arrived by KSRTC bus directly in Dandeli!
      </p>
{/*  Supporting Visual Asset (Transit Ticket Attachment Fragment)  */}
<div className="ml-12 mt-1 p-2.5 rounded-lg bg-surface-container-low flex items-center gap-3">
<div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Document photo of a printed transport itinerary showing an Innova Crysta rental receipt on natural textured desk paper with warm side lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-hq36o3ysZwmp4E92HfrumJDgsQLGQywJqF_cdn-bx-r5lvJ1hDqxRA9roRxYfurpSmraEgwN-iIk07DQjwWRTfI0LTe2o-tHec410o-EuqoIi6fDf4Y_M24cZVGAXp6FOopMMxBYitlyTF2SXyCMRma8spmJY2wDo6fhAY9C2nux8g9UMaiHgTv5HiU0q4mx-TxRPKrfE8DfzdMLVrZDjsb4aJRazeAuyZObEb_48konZPHK1FC_cQ"/>
</div>
<div className="min-w-0">
<p className="font-label-md text-label-md text-on-surface truncate">Cab_Booking_GOA_0892.pdf</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">Innova Crysta · Goa Airport Pick-up</span>
</div>
</div>
</article>
{/*  Message 2: Amit Sharma  */}
<article className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Warm natural film portrait of Amit, an Indian man in his early thirties with spectacles, outdoors with lush tropical foliage in soft evening focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPn1paoOGo-woPy39ZxjPUMgnprLg6Z27Y6z1n_HevVcaRt76aIo0p8DW9CaP_NPgc9585R_IOyyRmaCWiBx3oZCv2rCmNjVmsavA4JJsYWImE-m8HPj47boGxlJbErymvb5dPemPAI5GjVPThNmRBUhthWG4rr1h9ObEAaLQHbtq9KQljMmW5hVaLVoYPty7_99XIKAYIXHyUZJWBaSKbOPmb5GojW93leyEUO-4FRJy6zejd8dntxA"/>
</div>
<div>
<h4 className="font-title-md text-title-md text-on-surface leading-none">Amit Sharma</h4>
<span className="font-label-sm text-label-sm text-on-surface-variant">12 Sep, 7:02 PM</span>
</div>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-medium">Payer</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed pl-12 -mt-1">
        My bad! I forgot the auto-split defaulted to all 5. Let’s adjust it so it’s split only between the 3 of us who rode.
      </p>
</article>
{/*  Message 3: Aisha Sharma (You)  */}
<article className="p-4 rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-2.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="Close-up candid portrait of Aisha, an Indian woman traveler smiling warmly with golden sunset rim light and subtle travel journal aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALdF8Ay5wceYV1JsnPORWuclMwDHFiSHoBUc6PMdHC9WW-M_xFCaCStcnxM_Nljf2dJSI0YA5IwHqrYFf6WmrhcQo-9hPsqIjqDL3kgFCbviupWz0eof0G2cdxlPpjOsmXJJAUCKew5gvsgAskkJDqoO6s92LSQpbTAltl8EEPo3c8zApzZV9WOV0f95kMItdFEIeCH74EVWvd2b1l-QTvmbh4EZWYYUiyH09B-pPbhyZyMYZPv6Anng"/>
</div>
<div>
<div className="flex items-center gap-1.5">
<h4 className="font-title-md text-title-md text-on-surface leading-none">Aisha Sharma</h4>
<span className="font-label-sm text-label-sm text-primary font-semibold">(You)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">12 Sep, 7:30 PM</span>
</div>
</div>
<span className="material-symbols-outlined text-[18px] text-primary" style={{"fontVariationSettings":"\"FILL\" 1"}}>check_circle</span>
</div>
<p className="font-body-md text-body-md text-on-surface leading-relaxed pl-12 -mt-1">
        Thanks Rohan &amp; Amit! That would be ₹1,200 each for the three of you.
      </p>
</article>
</section>
{/*  Consensus Tracker Gauge  */}
<section className="px-margin mt-5 mb-2">
<div className="p-4 rounded-xl bg-surface-container flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary">how_to_vote</span>
<span className="font-title-md text-title-md text-on-surface">Consensus Status</span>
</div>
<span className="font-label-md text-label-md px-2.5 py-1 rounded-full bg-surface-container-lowest text-primary font-semibold">
          2 of 3 required confirmations
        </span>
</div>
{/*  Segmented Bar  */}
<div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden flex">
<div className="w-2/3 h-full bg-primary-container rounded-full transition-all duration-300"></div>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1 text-primary font-medium">
<span className="material-symbols-outlined text-[14px]">done</span> Amit confirmed
        </span>
<span className="flex items-center gap-1 text-primary font-medium">
<span className="material-symbols-outlined text-[14px]">done</span> Rohan confirmed
        </span>
<span className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">schedule</span> Neha pending
        </span>
</div>
</div>
</section>
{/*  Resolution Action Sheet (Bottom Controls)  */}
<section className="px-margin mt-4 pt-3 flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Suggested Resolution</span>
<span className="font-label-sm text-label-sm text-primary font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">auto_fix_high</span> Auto-calculated
      </span>
</div>
{/*  1. Primary Action: Split differently (Lagoon)  */}
<button className="w-full text-left p-4 rounded-xl bg-primary-container text-on-primary shadow-sm hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-between group" id="btn-split-diff" type="button">
<div className="flex items-start gap-3 min-w-0 pr-2">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest/15 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[22px] text-on-primary">call_split</span>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="font-title-md text-title-md text-on-primary font-semibold leading-tight">Split differently</span>
<span className="font-label-sm text-label-sm px-2 py-0.2 rounded-full bg-secondary-container text-on-secondary-container font-semibold">Recommended</span>
</div>
<p className="font-body-md text-body-md text-on-primary-container leading-snug mt-0.5 truncate">
            3-way split · ₹1,200 each for Rohan, Amit, Neha
          </p>
</div>
</div>
<span className="material-symbols-outlined text-[20px] text-on-primary shrink-0 transition-transform group-hover:translate-x-0.5">arrow_forward</span>
</button>
{/*  2. Secondary Action: Keep as is  */}
<button className="w-full text-left p-3.5 rounded-xl bg-surface-container-lowest text-on-surface shadow-xs hover:bg-surface-container transition-colors flex items-center justify-between" id="btn-keep-as-is" type="button">
<div className="flex items-center gap-3 min-w-0">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">restart_alt</span>
</div>
<div className="min-w-0">
<span className="font-title-md text-title-md text-on-surface font-semibold leading-tight">Keep as is</span>
<p className="font-label-sm text-label-sm text-on-surface-variant truncate">Maintain initial ₹720 split across 5 members</p>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Default</span>
</button>
{/*  3. Tertiary Muted Action: Remove expense  */}
<button className="w-full p-3 rounded-xl bg-transparent text-error hover:bg-error-container/20 transition-colors flex items-center justify-center gap-2 font-label-md text-label-md font-semibold" id="btn-remove-expense" type="button">
<span className="material-symbols-outlined text-[18px]">delete_sweep</span>
<span>Remove expense entirely</span>
</button>
</section>
{/*  Interactive Toast Notification Placeholder  */}
<div className="fixed bottom-6 inset-x-margin max-w-sm mx-auto p-4 rounded-xl bg-inverse-surface text-inverse-on-surface shadow-xl flex items-center gap-3 transition-opacity duration-300 opacity-0 pointer-events-none z-50" id="resolution-toast">
<span className="material-symbols-outlined text-inverse-primary text-[22px]">check_circle</span>
<div className="min-w-0">
<p className="font-title-md text-title-md leading-tight" id="toast-title">Vote Registered</p>
<p className="font-label-sm text-label-sm opacity-80" id="toast-subtitle">Waiting for Neha’s confirmation to finalize escrow release.</p>
</div>
</div>
</div>
</main>
</>
  );
}
