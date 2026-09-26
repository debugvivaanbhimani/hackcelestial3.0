"use client";
import React from 'react';

export default function BookingDetail() {
  return (
    <>
<header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.03)] pt-safe"><div className="flex items-center justify-between px-margin h-16"><div className="flex items-center gap-space-sm"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-variant transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[22px]">arrow_back</span></button><h1 className="font-headline-sm text-headline-sm tracking-tight text-on-surface">Booking Detail</h1></div><div className="flex items-center gap-space-sm"><button aria-label="Close" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[22px]">close</span></button></div></div></header><main className="flex-1 w-full bg-surface pt-16 pb-safe"><div className="flex flex-col w-full">
{/*  Visual Hero Container (Monsoon Escape Resort in Western Ghats)  */}
<div className="relative w-full h-72 sm:h-80 overflow-hidden shadow-sm">
<div className="w-full h-full bg-cover bg-center" data-alt="A lush tropical rainforest resort with stilted wooden chalets nestled in dense green canopy above a winding emerald river in Dandeli Karnataka during monsoon, morning mist rising over distant peaks, warm teak architecture, cinematic morning light, editorial travel magazine photo." style={{"backgroundImage":"url(\"https"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/85 via-inverse-surface/30 to-transparent"></div>
<div className="absolute bottom-4 left-margin right-margin flex flex-col gap-space-xs text-surface-bright">
<div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-surface-lowest/20 backdrop-blur-md text-surface-bright text-label-sm font-label-sm uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse"></span>
        Confirmed Booking · #FR-88910
      </div>
<h2 className="font-headline-md text-headline-md tracking-tight text-surface-bright drop-shadow-sm">The Fern Riverfront Chalets</h2>
<p className="font-body-md text-body-md text-surface-container-high flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-primary-fixed">calendar_today</span>
        12–15 Sep (3 nights) · Dandeli River Valley
      </p>
</div>
</div>
{/*  Primary Content Sheet  */}
<div className="px-margin flex flex-col gap-space-lg py-space-lg">
{/*  Escrow & Total Financial Capsule  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-baseline justify-between">
<div>
<span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider block">Total Vault Escrow</span>
<span className="font-currency-display text-currency-display text-on-surface tracking-tight">₹24,000</span>
</div>
<div className="text-right">
<span className="font-label-md text-label-md text-primary font-semibold px-2 py-1 rounded-md bg-surface-container-low">All 3 Nights</span>
<span className="block text-label-sm font-label-sm text-on-surface-variant mt-0.5">₹8,000 / night</span>
</div>
</div>
{/*  Escrow Progress Bar  */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-md text-label-md text-on-surface">
<span className="flex items-center gap-1.5 text-on-surface">
<span className="material-symbols-outlined text-[16px] text-primary" style={{"fontVariationSettings":"\"FILL\" 1"}}>verified_user</span>
<span>Funding Progress</span>
</span>
<span className="font-semibold text-primary">₹19,200 <span className="font-normal text-on-surface-variant">of ₹24,000</span></span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{"width":"80%"}}></div>
</div>
<div className="flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant pt-0.5">
<span>4 of 5 travelers secured in escrow</span>
<span className="text-secondary font-semibold">1 pending (Neha)</span>
</div>
</div>
</div>
{/*  Editorial Calculation Spread  */}
<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-sm">
<div className="flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-wider">
<span className="material-symbols-outlined text-[18px]">calculate</span>
<span>How your share is worked out</span>
</div>
<div className="rounded-lg bg-surface-container-lowest p-3 flex flex-col gap-1 shadow-sm">
<div className="font-currency-md text-currency-md text-on-surface flex items-center justify-between">
<span className="text-on-surface-variant font-normal">Split Equation</span>
<span>₹24,000 ÷ 5 members</span>
</div>
<div className="font-body-md text-body-md text-on-surface-variant flex items-center justify-between pt-1">
<span>Per Person Base</span>
<span className="font-currency-md text-currency-md text-primary">₹4,800</span>
</div>
</div>
<div className="flex items-start gap-2.5 pt-1 px-1">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5" style={{"fontVariationSettings":"\"FILL\" 1"}}>check_circle</span>
<p className="font-body-md text-body-md text-on-surface">
<span className="font-title-md text-title-md text-on-surface">Your share (Aisha): ₹4,800.</span> Deducted automatically from your Dandeli Vault escrow deposit upon group checkout.
        </p>
</div>
</div>
{/*  Card Optimization Benefit Card (Marigold Warm Accent)  */}
<div className="rounded-xl bg-secondary-container/25 p-space-md flex items-start gap-space-sm">
<div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center shrink-0 text-on-secondary-container">
<span className="material-symbols-outlined text-[20px]">credit_card_heart</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="font-title-md text-title-md text-on-secondary-fixed">Card Perk Active: Group saves ₹1,200</span>
<p className="font-body-md text-body-md text-on-secondary-fixed-variant">
          Amit opted to settle the resort front desk with his HDFC Millennia card. The ₹1,200 cashback rebate is refunded directly into Amit's treasury balance.
        </p>
</div>
</div>
{/*  Room Allocations Module  */}
<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Room Allocation &amp; Split</h3>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-full">2 Cottages</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Tap travelers to reassign beds or adjust individual split inclusions.</p>
{/*  Room 204 Suite  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm mt-1">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">bed</span>
<span className="font-title-md text-title-md text-on-surface">Cottage 204 · Canopy Suite</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold bg-surface-container-low px-2 py-0.5 rounded">2 Guests</span>
</div>
<div className="flex flex-col gap-2">
{/*  Aisha (You)  */}
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low/60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-title-md text-title-md flex items-center justify-center">A</div>
<div>
<span className="font-title-md text-title-md text-on-surface block">Aisha Sharma <span className="font-normal text-label-sm text-primary">(You)</span></span>
<span className="text-label-sm font-label-sm text-on-surface-variant">King Bed · Escrow verified</span>
</div>
</div>
<button aria-pressed="true" className="room-toggle flex items-center justify-center w-12 h-7 rounded-full bg-primary text-on-primary transition-all shadow-sm" type="button">
<span className="font-label-sm text-label-sm font-semibold">IN</span>
</button>
</div>
{/*  Priya  */}
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low/60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary font-title-md text-title-md flex items-center justify-center">P</div>
<div>
<span className="font-title-md text-title-md text-on-surface block">Priya Nair</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">Balcony Daybed · Escrow verified</span>
</div>
</div>
<button aria-pressed="true" className="room-toggle flex items-center justify-center w-12 h-7 rounded-full bg-primary text-on-primary transition-all shadow-sm" type="button">
<span className="font-label-sm text-label-sm font-semibold">IN</span>
</button>
</div>
</div>
</div>
{/*  Room 206 Villa  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-space-sm mt-1">
<div className="flex items-center justify-between pb-1">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">villa</span>
<span className="font-title-md text-title-md text-on-surface">Villa 206 · Riverfront Duplex</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold bg-surface-container-low px-2 py-0.5 rounded">3 Guests</span>
</div>
<div className="flex flex-col gap-2">
{/*  Rohan  */}
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low/60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant font-title-md text-title-md flex items-center justify-center">R</div>
<div>
<span className="font-title-md text-title-md text-on-surface block">Rohan Mehta</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">Twin Bed A · Escrow verified</span>
</div>
</div>
<button aria-pressed="true" className="room-toggle flex items-center justify-center w-12 h-7 rounded-full bg-primary text-on-primary transition-all shadow-sm" type="button">
<span className="font-label-sm text-label-sm font-semibold">IN</span>
</button>
</div>
{/*  Amit  */}
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low/60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-title-md text-title-md flex items-center justify-center">A</div>
<div>
<span className="font-title-md text-title-md text-on-surface block">Amit Deshmukh</span>
<span className="text-label-sm font-label-sm text-on-surface-variant">Twin Bed B · Paid via Card</span>
</div>
</div>
<button aria-pressed="true" className="room-toggle flex items-center justify-center w-12 h-7 rounded-full bg-primary text-on-primary transition-all shadow-sm" type="button">
<span className="font-label-sm text-label-sm font-semibold">IN</span>
</button>
</div>
{/*  Neha  */}
<div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low/60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-dim text-on-surface font-title-md text-title-md flex items-center justify-center">N</div>
<div>
<span className="font-title-md text-title-md text-on-surface block">Neha Kulkarni</span>
<span className="text-label-sm font-label-sm text-secondary font-semibold">Escrow transfer pending</span>
</div>
</div>
<button aria-pressed="true" className="room-toggle flex items-center justify-center w-12 h-7 rounded-full bg-primary text-on-primary transition-all shadow-sm" type="button">
<span className="font-label-sm text-label-sm font-semibold">IN</span>
</button>
</div>
</div>
</div>
</div>
{/*  Clear Tranquil Cancellation Policy  */}
<div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col gap-2">
<div className="flex items-center gap-2 text-primary font-title-md text-title-md">
<span className="material-symbols-outlined text-[20px]">policy</span>
<span>Cancellation &amp; Refund Guarantee</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
<span className="font-semibold text-on-surface">Free cancellation until 10 Sep, 12:00 PM.</span> If the reservation is cancelled, the full ₹24,000 returns instantly into the shared Dandeli Vault with zero dispute or card chargebacks.
      </p>
<div className="flex items-center gap-2 pt-1 text-label-sm font-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary" style={{"fontVariationSettings":"\"FILL\" 1"}}>shield</span>
<span>Secured by Trip Vault Escrow Protocol</span>
</div>
</div>
{/*  Action Bar  */}
<div className="pt-space-xs pb-space-lg flex flex-col gap-3">
<button className="w-full h-12 rounded-xl bg-primary text-on-primary font-title-md text-title-md flex items-center justify-center gap-2 hover:bg-primary-container active:scale-[0.99] transition-all shadow-md" id="manageStayBtn" type="button">
<span className="material-symbols-outlined text-[20px]">tune</span>
<span>Edit Room Allocation</span>
</button>
<button className="w-full h-11 rounded-xl bg-surface-container text-on-surface font-title-md text-title-md flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Download Tax Invoice (GST)</span>
</button>
</div>
</div>

</div></main>
</>
  );
}
