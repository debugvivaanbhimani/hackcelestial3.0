"use client";
import React from 'react';

export default function AddExpense() {
  return (
    <>
<header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span></button><img alt="GroupTrip" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VWnsHU-h7xSd0XpLiIZ5rWmXc-jjCPM0CfNt6zM2oWpAhvAxGbUe7igQqpcl2IBXCFbMGyWsOPKn2oxfNnIDx0ZWC5IKwhz99vGI3U2vCX-QurJaIRg8B3doe_7cD34KrBdFfXvuJlgVfaGlpgLYhZz52JekAzcnvhC6Wtk62ACBzqet-DEo_1KrlydBzXXNfmEdLpyUCrt2ELcbyHTirisWxZ-4d_ONWa4XUAB-YSFiR8886fhoBEdB0"/><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Add Vault Contribution</h1></div><div className="flex items-center gap-space-sm"><button aria-label="Close" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[22px]">close</span></button><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XRzHa9wiO5QNy_kmq17I6ctA3ReamWOJQFSCw2RP_5yJs1GBn4tjuyQvjddiP-T7uCrCv6zyb7ZhwIDrJ4-tcvgluSJs4j9XJmN7Nb3BFkqORrdQdAHfzYjV13F1ud1NXXUjQ0_mnT1BsMRPCLb8l1OxZQyiZx3Q-DGZi9wK6iPPWRBTpNn2cJjWYiQS0tsLNS98lTxSHGq9euK5BRoQ86Q7EE8nvl1Jw3QIEG5dfSnhrr1yM8cp6ZX0dJ"/></div></div></header><main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full relative">
{/*  Backdrop Layer  */}
<div className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm z-30 transition-opacity"></div>
{/*  Bottom Sheet Container  */}
<div className="relative z-40 flex flex-col w-full bg-surface-container-lowest rounded-t-[28px] shadow-[0_-8px_32px_rgba(16,32,28,0.12)] overflow-hidden mt-6 pb-space-lg">
{/*  Drag Pill Indicator  */}
<div className="w-full flex items-center justify-center pt-space-sm pb-1">
<div className="w-10 h-1 rounded-full bg-outline-variant/60"></div>
</div>
{/*  Sheet Header  */}
<div className="px-margin pt-1 pb-space-sm flex items-start justify-between">
<div className="flex flex-col">
<span className="font-headline-md text-headline-md text-on-surface">Add Expense</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Monsoon Escape · Escrow Pool</span>
</div>
</div>
<button aria-label="Dismiss sheet" className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
{/*  Mode Switcher (Segmented Control)  */}
<div className="px-margin py-space-xs">
<div className="bg-surface-container p-1 rounded-full flex items-center justify-between">
<button className="flex-1 py-2 rounded-full font-label-md text-label-md text-on-surface-variant flex items-center justify-center gap-1.5 transition-all" id="tab-snap" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">photo_camera</span>
<span>Snap</span>
</button>
<button className="flex-1 py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center gap-1.5 shadow-sm transition-all relative" id="tab-say" onClick={() => {}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed-dim opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-fixed"></span>
</span>
<span className="material-symbols-outlined text-[16px]">mic</span>
<span>Say</span>
</button>
<button className="flex-1 py-2 rounded-full font-label-md text-label-md text-on-surface-variant flex items-center justify-center gap-1.5 transition-all" id="tab-type" onClick={() => {}}>
<span className="material-symbols-outlined text-[16px]">edit_note</span>
<span>Type</span>
</button>
</div>
</div>
{/*  Mode 1: SNAP (Camera & UPI receipt scanner)  */}
<section className="hidden px-margin py-space-sm flex-col gap-space-sm" id="panel-snap">
<div className="relative w-full aspect-[16/10] bg-surface-container-low rounded-2xl overflow-hidden flex flex-col items-center justify-center p-space-md shadow-sm">
<img className="absolute inset-0 w-full h-full object-cover opacity-25" data-alt="Intimate top-down flatlay of an authentic brass travel journal and a crumpled restaurant invoice receipt resting on warm textured Indian khadi paper under natural afternoon sunlight with gentle shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDadThXn_CdHcaANoRUbjLTdyKWlYDC2SMvyPaxumEXJZD-9Pggkw1Fzd4bvwWG08ms1f12PXoRKAdvxLTq-P0JBrSR-BGyQd8P1jrEG20NHRFEjsg7xUnRKvj39TZ6Xveb43eSki1gjbqEJ9HJM8uuck-JlfWcwYoecfwpGOlOTav3jxWT3_W-ehh10NDVXYntMc7_wgbxOPEg0LAnvhMULGuhuASEkOAi_6h6FCAYnEIcajjl2jmO5w"/>
{/*  Framing Corner Reticles  */}
<div className="absolute inset-4 pointer-events-none flex flex-col justify-between">
<div className="flex justify-between">
<div className="w-6 h-6 border-t-2 border-l-2 border-primary-container rounded-tl"></div>
<div className="w-6 h-6 border-t-2 border-r-2 border-primary-container rounded-tr"></div>
</div>
<div className="flex justify-between">
<div className="w-6 h-6 border-b-2 border-l-2 border-primary-container rounded-bl"></div>
<div className="w-6 h-6 border-b-2 border-r-2 border-primary-container rounded-br"></div>
</div>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-lowest/90 backdrop-blur shadow-sm flex items-center justify-center text-primary-container mb-2">
<span className="material-symbols-outlined text-[24px]">document_scanner</span>
</div>
<span className="font-title-md text-title-md text-on-surface">Target bill or UPI confirmation</span>
<span className="font-body-md text-body-md text-on-surface-variant mt-0.5">Auto-detects items, taxes &amp; tip</span>
</div>
</div>
<div className="flex items-center gap-space-sm bg-surface-container p-3 rounded-xl">
<span className="material-symbols-outlined text-secondary text-[20px]">auto_awesome</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Instant OCR &amp; Itemization</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Works seamlessly with Google Pay, PhonePe &amp; printed menus</span>
</div>
</div>
</section>
{/*  Mode 2: SAY (Primary Showcased Voice Mode)  */}
<section className="flex flex-col px-margin py-space-sm gap-space-md" id="panel-say">
{/*  Voice Waveform & Pulse Hub  */}
<div className="relative bg-surface-container-low rounded-2xl p-space-lg flex flex-col items-center justify-center overflow-hidden">
{/*  Decorative Ambient Rings  */}
<div className="absolute w-44 h-44 rounded-full bg-primary-container/10 animate-ping opacity-60"></div>
<div className="absolute w-32 h-32 rounded-full bg-secondary-fixed/40 animate-pulse"></div>
{/*  Mic Trigger Avatar  */}
<div className="relative z-10 w-20 h-20 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-lg shadow-primary-container/25">
<span className="material-symbols-outlined text-[36px]" style={{"fontVariationSettings":"\"FILL\" 1"}}>mic</span>
</div>
{/*  Soundwave Visualization Bars  */}
<div className="relative z-10 flex items-center gap-1.5 h-8 mt-space-md">
<span className="w-1 bg-primary-container rounded-full h-3 animate-pulse"></span>
<span className="w-1 bg-primary-container rounded-full h-5 animate-pulse" style={{"animationDelay":"150ms"}}></span>
<span className="w-1 bg-secondary rounded-full h-8 animate-pulse" style={{"animationDelay":"75ms"}}></span>
<span className="w-1 bg-primary-container rounded-full h-6 animate-pulse" style={{"animationDelay":"220ms"}}></span>
<span className="w-1 bg-secondary rounded-full h-4 animate-pulse" style={{"animationDelay":"180ms"}}></span>
<span className="w-1 bg-primary-container rounded-full h-7 animate-pulse" style={{"animationDelay":"90ms"}}></span>
<span className="w-1 bg-primary-container rounded-full h-2 animate-pulse" style={{"animationDelay":"300ms"}}></span>
</div>
<span className="relative z-10 font-label-md text-label-md text-on-surface-variant mt-2 tracking-wide uppercase">Listening in Dandeli...</span>
</div>
{/*  Live Transcript Speech Bubble  */}
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant px-1">Live Transcript</span>
<div className="bg-surface-container rounded-2xl p-space-md shadow-sm relative">
<p className="font-headline-sm text-headline-sm text-on-surface italic leading-snug">
            “Dinner ₹2,400, wine only for Aman and me.”
          </p>
</div>
</div>
{/*  Smart AI Interpretation Card  */}
<div className="bg-surface-container-high rounded-2xl p-space-md flex items-start gap-space-sm">
<div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center shrink-0 text-on-secondary-fixed">
<span className="material-symbols-outlined text-[18px]">neurology</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface">Parsed Intent</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">98% match</span>
</div>
<p className="font-body-md text-body-md text-on-surface">
            ₹2,400 Dinner · Shared base pool across 5 members · Wine excluded &amp; targeted to Aman &amp; Aisha.
          </p>
</div>
</div>
</section>
{/*  Mode 3: TYPE (Manual Entry & Tactile Pad)  */}
<section className="hidden flex-col px-margin py-space-xs gap-space-sm" id="panel-type">
{/*  Big Currency Entry Display  */}
<div className="bg-surface-container-low rounded-2xl p-space-md flex flex-col items-center justify-center">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Expense Amount</span>
<div className="flex items-baseline gap-1 mt-1">
<span className="font-headline-lg text-headline-lg text-on-surface-variant font-light">₹</span>
<span className="font-currency-display text-currency-display text-on-surface font-semibold tracking-tight" id="amount-display">2,400</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Wildernest Forest Bistro · Dandeli</span>
</div>
{/*  Category Filter Pills  */}
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant px-1">Category</span>
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
<button className="px-3.5 py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-1 shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[15px]">check</span>
<span>Food &amp; Drink</span>
</button>
<button className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0">Transit</button>
<button className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0">Stay</button>
<button className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0">Safari Activity</button>
<button className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface font-label-md text-label-md shrink-0">Supplies</button>
</div>
</div>
{/*  Who Paid Selector  */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Payer</span>
<span className="font-label-sm text-label-sm text-primary font-medium">Shared Pool Enabled</span>
</div>
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
{/*  Aisha (You) - Selected  */}
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-container text-on-primary shrink-0 shadow-sm">
<img alt="Aisha" className="w-6 h-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XRzHa9wiO5QNy_kmq17I6ctA3ReamWOJQFSCw2RP_5yJs1GBn4tjuyQvjddiP-T7uCrCv6zyb7ZhwIDrJ4-tcvgluSJs4j9XJmN7Nb3BFkqORrdQdAHfzYjV13F1ud1NXXUjQ0_mnT1BsMRPCLb8l1OxZQyiZx3Q-DGZi9wK6iPPWRBTpNn2cJjWYiQS0tsLNS98lTxSHGq9euK5BRoQ86Q7EE8nvl1Jw3QIEG5dfSnhrr1yM8cp6ZX0dJ"/>
<span className="font-label-md text-label-md">You (Aisha)</span>
</div>
{/*  Escrow Vault  */}
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface shrink-0">
<span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
<span className="font-label-md text-label-md">Vault Escrow</span>
</div>
{/*  Rohan  */}
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-on-surface shrink-0">
<div className="w-6 h-6 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-label-sm text-label-sm font-semibold">R</div>
<span className="font-label-md text-label-md">Rohan</span>
</div>
{/*  Amit  */}
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-on-surface shrink-0">
<div className="w-6 h-6 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-label-sm text-label-sm font-semibold">A</div>
<span className="font-label-md text-label-md">Amit</span>
</div>
{/*  Priya  */}
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-on-surface shrink-0">
<div className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-label-sm text-label-sm font-semibold">P</div>
<span className="font-label-md text-label-md">Priya</span>
</div>
</div>
</div>
{/*  Compact Tactile Numeric Keypad  */}
<div className="bg-surface-container p-2 rounded-2xl grid grid-cols-3 gap-1.5 mt-1">
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-title-lg text-title-lg flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>1</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-title-lg text-title-lg flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>2</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-title-lg text-title-lg flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>3</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-title-lg text-title-lg flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>4</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-title-lg text-title-lg flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>5</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-title-lg text-title-lg flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>6</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-title-lg text-title-lg flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>7</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-title-lg text-title-lg flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>8</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-title-lg text-title-lg flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>9</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-title-lg text-title-lg flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>.</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface font-title-lg text-title-lg flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>0</button>
<button className="h-11 rounded-xl bg-surface-container-lowest text-on-surface flex items-center justify-center active:scale-95 transition-transform" onClick={() => {}}>
<span className="material-symbols-outlined text-[20px]">backspace</span>
</button>
</div>
</section>
{/*  Shared Participants Preview Bar  */}
<div className="px-margin pt-space-xs pb-1">
<div className="flex items-center justify-between bg-surface-container-low px-3 py-2.5 rounded-xl">
<div className="flex items-center gap-2">
<div className="flex -space-x-2 overflow-hidden">
<img alt="User 1" className="inline-block h-6 w-6 rounded-full ring-2 ring-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XRzHa9wiO5QNy_kmq17I6ctA3ReamWOJQFSCw2RP_5yJs1GBn4tjuyQvjddiP-T7uCrCv6zyb7ZhwIDrJ4-tcvgluSJs4j9XJmN7Nb3BFkqORrdQdAHfzYjV13F1ud1NXXUjQ0_mnT1BsMRPCLb8l1OxZQyiZx3Q-DGZi9wK6iPPWRBTpNn2cJjWYiQS0tsLNS98lTxSHGq9euK5BRoQ86Q7EE8nvl1Jw3QIEG5dfSnhrr1yM8cp6ZX0dJ"/>
<span className="inline-flex h-6 w-6 rounded-full ring-2 ring-surface-container-lowest bg-primary-fixed text-on-primary-fixed items-center justify-center text-[10px] font-bold">R</span>
<span className="inline-flex h-6 w-6 rounded-full ring-2 ring-surface-container-lowest bg-secondary-fixed text-on-secondary-fixed items-center justify-center text-[10px] font-bold">A</span>
<span className="inline-flex h-6 w-6 rounded-full ring-2 ring-surface-container-lowest bg-tertiary-fixed text-on-tertiary-fixed items-center justify-center text-[10px] font-bold">P</span>
<span className="inline-flex h-6 w-6 rounded-full ring-2 ring-surface-container-lowest bg-surface-variant text-on-surface-variant items-center justify-center text-[10px] font-bold">+1</span>
</div>
<span className="font-label-md text-label-md text-on-surface">Splitting with all 5</span>
</div>
<button className="font-label-sm text-label-sm text-primary font-semibold hover:underline">Customize</button>
</div>
</div>
{/*  Action Tray  */}
<div className="px-margin pt-space-xs flex flex-col items-center gap-2">
<button className="w-full h-12 bg-primary-container text-on-primary rounded-xl font-title-md text-title-md font-semibold flex items-center justify-center gap-2 shadow-sm hover:opacity-95 active:scale-[0.99] transition-all">
<span>Review split</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span className="font-label-sm text-label-sm">Auto-synced with Dandeli Escrow Vault</span>
</div>
</div>
</div>
</div>
</main>
</>
  );
}
