"use client";
import React from 'react';

export default function AddOrWithdraw() {
  return (
    <>
<header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span></button><span className="material-symbols-outlined text-[24px] text-primary">explore</span><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Add Or Withdraw</h1></div><div className="flex items-center gap-space-sm"><button aria-label="Close" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[22px]">close</span></button></div></div></header><main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full pb-10">
{/*  Atmospheric Scrim & Ambient Header Badge  */}
<div className="px-margin pt-4 pb-2 flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        Monsoon Escape Escrow Pool
      </div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Vault ID · ME-894</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant pt-1">
      Adjust your treasury balance. Withdraw surplus liquidity instantly or top up your shared itinerary escrow.
    </p>
</div>
{/*  Segmented Selector (Add to Pool vs Take Back)  */}
<div className="px-margin mt-3">
<div className="grid grid-cols-2 gap-space-sm p-1.5 bg-surface-container-high rounded-xl">
{/*  Inactive Tab: Add to pool  */}
<button className="flex flex-col items-center justify-center py-3 px-2 rounded-lg text-on-surface-variant hover:text-on-surface transition-all duration-200" id="tab-add" onClick={() => {}} type="button">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span className="font-title-md text-title-md">Add to pool</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant/80 mt-0.5">Top-up share</span>
</button>
{/*  Active Tab: Take back  */}
<button className="flex flex-col items-center justify-center py-3 px-2 rounded-lg bg-surface-container-lowest shadow-sm text-primary transition-all duration-200" id="tab-withdraw" onClick={() => {}} type="button">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings":"\"FILL\" 1"}}>arrow_circle_down</span>
<span className="font-title-md text-title-md font-bold">Take back</span>
</div>
<span className="font-label-sm text-label-sm text-primary-container mt-0.5">Surplus available</span>
</button>
</div>
</div>
{/*  CONTAINER 1: TAKE BACK (ACTIVE DEFAULT VIEW)  */}
<div className="flex flex-col px-margin mt-4 gap-4" id="view-withdraw">
{/*  Prominent Hero Surplus Card  */}
<div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
{/*  Watermark flourish  */}
<div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-surface-container-low/60 pointer-events-none"></div>
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm mb-3">
<span className="material-symbols-outlined text-[14px]">lock_open</span>
<span>Verified Surplus Available</span>
</div>
<div className="flex items-baseline justify-center gap-1">
<span className="font-currency-display text-currency-display text-on-surface tracking-tight">₹3,333</span>
</div>
<p className="font-label-md text-label-md text-on-surface-variant mt-1">Maximum available to you right now</p>
{/*  Atmospheric Reason Card  */}
<div className="w-full mt-5 p-3.5 bg-surface-container-low rounded-xl flex items-start gap-3 text-left">
<div className="w-7 h-7 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0 mt-0.5 text-primary">
<span className="material-symbols-outlined text-[16px]">receipt_long</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          You paid <span className="font-semibold text-on-surface">₹3,333</span> more than your equal share for the hotel stay and initial provisions in Wayanad.
        </p>
</div>
{/*  Arithmetic Ledger Breakdown  */}
<div className="w-full mt-4 bg-surface-container/60 rounded-xl p-4 flex flex-col gap-2.5 text-left">
<div className="flex items-center justify-between font-body-md text-body-md">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            Total contributed
          </span>
<span className="font-title-md text-title-md text-on-surface">₹12,000</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md">
<span className="text-on-surface-variant flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            Actual locked obligations
          </span>
<span className="font-title-md text-title-md text-on-surface-variant">− ₹8,667</span>
</div>
<div className="h-px w-full bg-outline-variant/40 my-1"></div>
<div className="flex items-center justify-between font-title-md text-title-md text-primary">
<span className="font-semibold">Surplus holding</span>
<span className="font-bold">₹3,333</span>
</div>
</div>
</div>
{/*  Verified UPI Destination Account  */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3 min-w-0">
<div className="w-11 h-11 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[22px]">account_balance</span>
</div>
<div className="flex flex-col min-w-0">
<div className="flex items-center gap-1.5">
<span className="font-title-md text-title-md text-on-surface truncate">Aisha Sharma</span>
<span className="material-symbols-outlined text-[16px] text-primary" style={{"fontVariationSettings":"\"FILL\" 1"}} title="Verified UPI">verified</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant truncate">HDFC Bank UPI · aisha@okhdfcbank</span>
</div>
</div>
<button className="px-2.5 py-1 rounded-lg text-primary hover:bg-surface-container font-label-md text-label-md shrink-0 transition-colors" type="button">
        Change
      </button>
</div>
{/*  Escrow Guard Security Notice  */}
<div className="flex items-center gap-2.5 px-2 py-1">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant shrink-0">shield</span>
<p className="font-label-sm text-label-sm text-on-surface-variant">
        Protected by GroupTrip Treasury Escrow. No signatures or approvals required for surplus drawdowns.
      </p>
</div>
{/*  Primary Action Button  */}
<div className="flex flex-col gap-2 mt-1">
<button className="w-full h-12 bg-primary-container text-on-primary rounded-xl font-title-md text-title-md font-semibold flex items-center justify-center gap-2 shadow-md hover:opacity-95 active:scale-[0.99] transition-all duration-150" id="btn-withdraw-action" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[20px]">bolt</span>
<span>Take back ₹3,333 via UPI</span>
</button>
<div className="flex items-center justify-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[14px] text-primary">verified_user</span>
<span>Zero fee · Instant deposit to your bank account</span>
</div>
</div>
</div>
{/*  CONTAINER 2: ADD TO POOL (ALTERNATIVE VIEW VIA JS)  */}
<div className="hidden flex flex-col px-margin mt-4 gap-4" id="view-add">
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<label className="font-title-md text-title-md text-on-surface">Enter top-up amount</label>
<span className="font-label-sm text-label-sm text-on-surface-variant">Custom split ready</span>
</div>
{/*  Live Rupee Display Input Mock  */}
<div className="bg-surface-container-low rounded-xl p-4 flex items-center justify-between">
<div className="flex items-baseline gap-1">
<span className="font-currency-display text-currency-display text-primary">₹</span>
<span className="font-currency-display text-currency-display text-on-surface" id="custom-amount-display">2,500</span>
</div>
<button className="text-on-surface-variant hover:text-on-surface p-1" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[18px]">backspace</span>
</button>
</div>
{/*  Quick Chips  */}
<div className="flex flex-col gap-1.5">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Quick Select</span>
<div className="grid grid-cols-3 gap-2">
<button className="chip-btn py-2 px-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md text-center hover:bg-surface-container-high transition-colors" onClick={() => {}} type="button">
            +₹1,000
          </button>
<button className="chip-btn py-2 px-3 rounded-full bg-primary text-on-primary font-label-md text-label-md text-center transition-colors" onClick={() => {}} type="button">
            +₹2,500
          </button>
<button className="chip-btn py-2 px-3 rounded-full bg-surface-container text-on-surface font-label-md text-label-md text-center hover:bg-surface-container-high transition-colors" onClick={() => {}} type="button">
            +₹5,000
          </button>
</div>
</div>
{/*  Destination Treasury Detail  */}
<div className="p-3 bg-surface-container-low rounded-xl flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0 font-label-md">
<span className="material-symbols-outlined text-[16px]">account_balance_wallet</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-on-surface text-[14px]">Monsoon Escape Group Vault</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Allocated toward: Jungle Safari &amp; Campfire Dinner</span>
</div>
</div>
</div>
{/*  Payment Source  */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">credit_card</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">HDFC Bank ··· 9821</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Instant UPI autopay enabled</span>
</div>
</div>
<span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
</div>
{/*  Milestone Action CTA (Marigold Accent for collective locked funds)  */}
<button className="w-full h-12 bg-secondary-container text-on-secondary-container rounded-xl font-title-md text-title-md font-semibold flex items-center justify-center gap-2 shadow-sm hover:opacity-95 active:scale-[0.99] transition-all" onClick={() => {}} type="button">
<span className="material-symbols-outlined text-[20px]">add</span>
<span id="btn-add-text">Add ₹2,500 to Vault Escrow</span>
</button>
</div>
{/*  Peer Transparency Module (Quiet Fellowship footer)  */}
<div className="px-margin mt-6">
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="flex -space-x-2 overflow-hidden">
<div className="inline-block h-7 w-7 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-label-sm border-2 border-surface-container-lowest">
            RK
          </div>
<div className="inline-block h-7 w-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm border-2 border-surface-container-lowest">
            AS
          </div>
<div className="inline-block h-7 w-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-label-sm text-label-sm border-2 border-surface-container-lowest">
            +3
          </div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">
          5 tripmates will see this adjustment in ledger
        </span>
</div>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">info</span>
</div>
</div>
{/*  Instant Toast Micro-Interaction Notification  */}
<div className="fixed bottom-6 inset-x-margin max-w-md mx-auto hidden bg-on-surface text-surface rounded-xl p-4 shadow-xl z-50 flex items-center justify-between transition-all duration-300 transform translate-y-4 opacity-0" id="toast-notification">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-inverse-on-surface" id="toast-title">Transfer Initiated</span>
<span className="font-label-sm text-label-sm text-inverse-on-surface/75" id="toast-subtitle">₹3,333 dispatched to HDFC UPI.</span>
</div>
</div>
<button className="text-inverse-on-surface/60 hover:text-inverse-on-surface" onClick={() => {}}>
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
</div>
</main>
</>
  );
}
