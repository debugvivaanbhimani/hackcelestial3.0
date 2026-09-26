"use client";
import React from 'react';

export default function CreateTrip() {
  return (
    <>
<header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.03)] pt-safe"><div className="flex items-center justify-between px-margin h-16"><div className="flex items-center gap-space-sm"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-variant transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[22px]">arrow_back</span></button><img alt="GroupTrip Brand Mark" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Wci8rD5fkEYvBkx7TMlT-mlMKjF-ia_aT3zRv4pTgsuXCjuUYndAdyxwcKyXH4QJVKzqfrwcoM3cNGLZsCXEfrHurFsmWcTf2pxpsVgW9Uo0scGTbLJobFPQGr3J4tZA4gHiQOpbLqC3ECYBb6n_ZPa5WJmhG_VxdbaUojk0bhAiRLOX-M7Cvwbjxz9trgsnBqeuQda9af_0wWPAokeRfPYahW2UrTvd4KIqQXp_vbwSPgkZ2Eeno9Oj27"/><h1 className="font-headline-sm text-headline-sm tracking-tight text-on-surface">New Trip</h1></div><div className="flex items-center gap-space-sm"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyd6CeleLXsnMPJQvTeAdsUAgcZvlE_zS_krlY_TiqhmILU8Q7AlkZWu58uK72rwgcytazmYYBoSECIJlWsbKYp8wNErglOTpr58hG2Khv7qGkwq_imJVb0Ix7iN3op-Rc8jcKQtuastrnD6nVNgtjTkiYKZNpz2LoRAWzjAxmkPdYlfIwkWCCCg8eAt9Ur2qxWMkPymvGjT0s2cCTIvEHj_ed-87l3vBVDy1875IaH1O-TNOEcN8mmQ"/></div></div></header><main className="flex-1 w-full bg-surface pt-16 pb-safe"><div className="flex flex-col w-full">
{/*  Content Container with Editorial Breathing Room  */}
<div className="px-margin pt-space-md pb-space-xl flex flex-col gap-space-lg">
{/*  Step Indicator & Subtle Progress  */}
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md tracking-wider uppercase text-on-surface-variant">Step 2 of 2: Invite Friends</span>
<div className="flex items-center gap-1.5">
<span className="w-6 h-1 rounded-full bg-primary-container"></span>
<span className="w-6 h-1 rounded-full bg-primary-container"></span>
</div>
</div>
{/*  Trip Overview Summary Card (Step 1 Recap)  */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex items-center justify-between gap-space-sm">
<div className="flex flex-col min-w-0 pr-2">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">Trip Draft</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface truncate mt-0.5">Monsoon Escape</h2>
<div className="flex items-center gap-1 text-on-surface-variant mt-1">
<span className="material-symbols-outlined text-[16px] text-primary">pin_drop</span>
<span className="font-body-md text-body-md text-xs truncate">Dandeli, Western Ghats · 12–15 Sep</span>
</div>
</div>
<div className="relative w-[52px] h-[52px] rounded-xl overflow-hidden shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Dense emerald green tropical rainforest enveloped in morning fog and mist along a serene river reflection, tranquil natural landscape of Western Ghats Dandeli" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmlIvuTFWRl6FrVx52W-AAtayWf4qRg2oebTK7skt6x8euive2jrM7mqfrmJ84MO3w-DzeOIuZjLWVZvNGQWZDhzH-cwsPdDA8nMM1foyeTUvTTuGXqLcq04mgbumrnaFDfcy9e3LVLSbayw9G-_0XmWqGw5CCRlPaJg-7Zgw05KJRbk0L6y-C5s2P8eFv7OWtQqW40tUfJh84qFVbVjynKwx10wR-frzTLzULXdQy5nAhE5vtKEdo5Q"/>
</div>
</div>
{/*  Editorial Header Section  */}
<div className="flex flex-col gap-space-xs mt-1">
<h2 className="font-headline-md text-headline-md text-on-surface">Bring the circle together</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        Friends can view dates, vote on stays, and lock in their collective share into the secure escrow vault.
      </p>
</div>
{/*  Quick Sharing Channels  */}
<div className="flex flex-col gap-space-sm">
{/*  WhatsApp Primary Highlight Trigger  */}
<button className="w-full bg-primary-fixed/30 hover:bg-primary-fixed/45 transition-colors p-4 rounded-xl flex items-center justify-between text-left group" id="whatsapp-btn">
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">chat</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface font-semibold">Share on WhatsApp</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Quickest way for group chats</span>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary-container group-hover:translate-x-0.5 transition-transform">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</button>
{/*  Share Link Container  */}
<div className="bg-surface-container-lowest rounded-xl p-3 flex items-center justify-between gap-space-sm shadow-sm">
<div className="flex items-center gap-2 pl-2 min-w-0">
<span className="material-symbols-outlined text-[18px] text-outline">link</span>
<span className="font-body-md text-body-md text-xs text-on-surface-variant truncate select-all" id="trip-link-text">grouptrip.in/t/monsoon-escape-98x</span>
</div>
<button className="shrink-0 bg-primary-container hover:bg-primary transition-colors text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-1 shadow-sm" id="copy-btn" onClick={() => {}}>
<span className="material-symbols-outlined text-[15px]" id="copy-icon">content_copy</span>
<span id="copy-label">Copy</span>
</button>
</div>
{/*  Expandable QR Code Drawer  */}
<div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-sm">
<button className="w-full flex items-center justify-between text-left text-on-surface" onClick={() => {}}>
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-tertiary">qr_code_2</span>
<span className="font-title-md text-title-md text-sm">Show Trip QR code</span>
</div>
<span className="material-symbols-outlined text-outline text-[20px] transition-transform duration-200" id="qr-chevron">expand_more</span>
</button>
<div className="hidden flex-col items-center justify-center pt-space-md pb-space-sm" id="qr-content">
<div className="p-3 bg-surface-container-low rounded-xl flex items-center justify-center shadow-inner">
<svg className="w-36 h-36 text-on-surface" fill="currentColor" viewBox="0 0 100 100">
{/*  Geometric Minimalist QR Motif  */}
<rect fill="none" height="24" rx="3" stroke="currentColor" strokeWidth="4" width="24" x="10" y="10"></rect>
<rect fill="currentColor" height="12" width="12" x="16" y="16"></rect>
<rect fill="none" height="24" rx="3" stroke="currentColor" strokeWidth="4" width="24" x="66" y="10"></rect>
<rect fill="currentColor" height="12" width="12" x="72" y="16"></rect>
<rect fill="none" height="24" rx="3" stroke="currentColor" strokeWidth="4" width="24" x="10" y="66"></rect>
<rect fill="currentColor" height="12" width="12" x="16" y="72"></rect>
<rect height="6" rx="1" width="6" x="42" y="12"></rect>
<rect height="6" rx="1" width="6" x="52" y="18"></rect>
<rect height="6" rx="1" width="6" x="42" y="28"></rect>
<rect height="6" rx="1" width="6" x="52" y="34"></rect>
<rect height="6" rx="1" width="6" x="12" y="44"></rect>
<rect height="6" rx="1" width="6" x="22" y="44"></rect>
<rect height="6" rx="1" width="6" x="32" y="44"></rect>
<rect fill="none" height="16" rx="3" stroke="currentColor" strokeWidth="3" width="16" x="42" y="44"></rect>
<rect height="6" width="6" x="47" y="49"></rect>
<rect height="6" rx="1" width="6" x="66" y="44"></rect>
<rect height="6" rx="1" width="6" x="76" y="44"></rect>
<rect height="6" rx="1" width="6" x="86" y="44"></rect>
<rect height="6" rx="1" width="10" x="66" y="54"></rect>
<rect height="6" rx="1" width="10" x="80" y="54"></rect>
<rect height="6" rx="1" width="6" x="42" y="68"></rect>
<rect height="6" rx="1" width="6" x="52" y="68"></rect>
<rect height="12" rx="1" width="6" x="42" y="78"></rect>
<rect height="6" rx="1" width="6" x="52" y="84"></rect>
<rect height="8" rx="1" width="8" x="66" y="70"></rect>
<rect height="6" rx="1" width="12" x="78" y="70"></rect>
<rect height="8" rx="2" width="20" x="70" y="82"></rect>
</svg>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-2 text-center">Scan to open trip room directly on mobile</p>
</div>
</div>
</div>
{/*  Live Member Roster & Treasury Status  */}
<div className="flex flex-col gap-space-sm mt-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md tracking-wider uppercase text-on-surface-variant font-semibold">In the circle (3 of 6 confirmed)</span>
<span className="font-label-sm text-label-sm text-primary font-medium">Vault Open</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-3">
{/*  Participant 1: Aisha (Host)  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 min-w-0">
<div className="relative w-10 h-10 shrink-0">
<img alt="Aisha" className="w-full h-full rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyd6CeleLXsnMPJQvTeAdsUAgcZvlE_zS_krlY_TiqhmILU8Q7AlkZWu58uK72rwgcytazmYYBoSECIJlWsbKYp8wNErglOTpr58hG2Khv7qGkwq_imJVb0Ix7iN3op-Rc8jcKQtuastrnD6nVNgtjTkiYKZNpz2LoRAWzjAxmkPdYlfIwkWCCCg8eAt9Ur2qxWMkPymvGjT0s2cCTIvEHj_ed-87l3vBVDy1875IaH1O-TNOEcN8mmQ"/>
<span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-primary rounded-full flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-[10px]">star</span>
</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-sm text-on-surface font-semibold truncate">Aisha Sharma</span>
<span className="font-label-sm text-label-sm text-primary">Organizer · Pool ready</span>
</div>
</div>
<span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full font-medium shrink-0">Host</span>
</div>
<div className="h-[1px] bg-surface-variant w-full"></div>
{/*  Participant 2: Rohan M.  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-surface-container-highest text-primary font-title-md text-title-md text-sm flex items-center justify-center shrink-0 font-semibold shadow-inner">
              RM
            </div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-sm text-on-surface font-semibold truncate">Rohan Mehta</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Accepted · ₹11,840 deposited</span>
</div>
</div>
<span className="font-label-sm text-label-sm bg-secondary-fixed text-on-secondary-fixed font-semibold px-2 py-0.5 rounded-full shrink-0">Secured</span>
</div>
<div className="h-[1px] bg-surface-variant w-full"></div>
{/*  Participant 3: Kabir K.  */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 min-w-0">
<div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-title-md text-title-md text-sm flex items-center justify-center shrink-0 font-semibold">
              KK
            </div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-sm text-on-surface font-semibold truncate">Kabir Kulkarni</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Accepted · Payment pending</span>
</div>
</div>
<span className="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-2 py-0.5 rounded-full shrink-0">Pending</span>
</div>
<div className="h-[1px] bg-surface-variant w-full"></div>
{/*  Participant 4 & 5: Open Slots  */}
<div className="flex items-center justify-between py-1">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-outline shrink-0">
<span className="material-symbols-outlined text-[18px]">person_add</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-sm text-on-surface-variant">2 Open Spots</span>
<span className="font-label-sm text-label-sm text-outline">Waiting for friends to join via link</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary font-medium tracking-wide">Reserved</span>
</div>
</div>
</div>
{/*  Escrow Milestone Clarification Pill  */}
<div className="p-3.5 bg-surface-container rounded-xl flex items-start gap-3">
<span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">verified_user</span>
<p className="font-body-md text-body-md text-xs text-on-surface leading-relaxed">
        Vault balances remain safely held until the group locks the itinerary. If dates change, escrow funds automatically refund in full.
      </p>
</div>
{/*  Primary Final Action CTA  */}
<div className="pt-space-xs flex flex-col gap-2">
<button className="w-full bg-primary-container hover:bg-primary transition-all duration-200 text-on-primary py-3.5 px-6 rounded-xl font-title-md text-title-md shadow-md text-center active:scale-[0.99] flex items-center justify-center gap-2">
<span>Done &amp; view trip</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<p className="font-label-sm text-label-sm text-on-surface-variant/70 text-center">
        You can invite more friends anytime from the trip settings.
      </p>
</div>
</div>
</div>
</main>
</>
  );
}
