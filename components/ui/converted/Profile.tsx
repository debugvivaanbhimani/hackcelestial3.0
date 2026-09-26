import React from 'react';

export default function Profile() {
  return (
    <>

<header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.04)] pt-safe">
<div className="h-16 px-margin flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
</button>
<div className="flex flex-col">
<h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Profile</h1>
<span className="font-label-sm text-label-sm text-on-surface-variant leading-none">Monsoon Escape · Shared Canvas</span>
</div>
</div>
<div className="flex items-center gap-space-sm">
<button aria-label="Close" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[22px]">close</span>
</button>
</div>
</div>
</header>
<main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full pb-12">
{/*  Top Ambient Banner  */}
<div className="relative w-full px-margin pt-6 pb-4">
{/*  Profile Card Enclosure  */}
<div className="relative bg-surface-container-lowest rounded-xl p-6 shadow-sm overflow-hidden flex flex-col items-center text-center">
{/*  Decorative Atmospheric Arc  */}
<div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-surface-container-low/60 blur-2xl pointer-events-none"></div>
{/*  Avatar with Edit Badge  */}
<div className="relative mb-4">
<div className="w-24 h-24 rounded-full overflow-hidden shadow-md bg-surface-container">
<img alt="Aisha Sharma" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XRzHa9wiO5QNy_kmq17I6ctA3ReamWOJQFSCw2RP_5yJs1GBn4tjuyQvjddiP-T7uCrCv6zyb7ZhwIDrJ4-tcvgluSJs4j9XJmN7Nb3BFkqORrdQdAHfzYjV13F1ud1NXXUjQ0_mnT1BsMRPCLb8l1OxZQyiZx3Q-DGZi9wK6iPPWRBTpNn2cJjWYiQS0tsLNS98lTxSHGq9euK5BRoQ86Q7EE8nvl1Jw3QIEG5dfSnhrr1yM8cp6ZX0dJ"/>
</div>
<button aria-label="Edit Profile Photo" className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[16px]">photo_camera</span>
</button>
</div>
{/*  Identity Typography  */}
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-1">Aisha Sharma</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xs leading-snug mb-3">
        Bengaluru, India · 4 GroupTrips completed
      </p>
{/*  Trust Badge  */}
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-primary text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings":"\"FILL\" 1"}}>verified</span>
<span>Verified Escrow Member</span>
</div>
</div>
</div>
{/*  Section 1: Travel Style  */}
<div className="px-margin mt-6 flex flex-col gap-6">
<div className="flex flex-col">
<div className="flex items-center justify-between mb-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface">Your Travel Style</h3>
<span className="text-label-sm font-label-sm text-primary uppercase tracking-wider">Flexible</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
        Tell your travel circle what makes a trip great for you. Update anytime without taking a rigid quiz.
      </p>
</div>
{/*  Category 1: Pace & Rhythm  */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-primary text-[20px]">snooze</span>
<h4 className="font-title-md text-title-md">Pace &amp; Rhythm</h4>
</div>
<div className="flex flex-wrap gap-2.5" data-chip-group="pace">
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-primary-container text-on-primary flex items-center gap-1 shadow-sm" data-selected="true" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon">check</span>
<span>Slow mornings</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>Fast-paced &amp; early</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>Flexible flow</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>Night owl</span>
</button>
</div>
</div>
{/*  Category 2: Interests & Vibe  */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-primary text-[20px]">forest</span>
<h4 className="font-title-md text-title-md">Interests &amp; Vibe</h4>
</div>
<div className="flex flex-wrap gap-2.5" data-chip-group="interests">
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-primary-container text-on-primary flex items-center gap-1 shadow-sm" data-selected="true" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon">check</span>
<span>Nature trails</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-primary-container text-on-primary flex items-center gap-1 shadow-sm" data-selected="true" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon">check</span>
<span>Specialty coffee</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>High adventure</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>Wellness &amp; spas</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-primary-container text-on-primary flex items-center gap-1 shadow-sm" data-selected="true" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon">check</span>
<span>Local food heritage</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>Historical walks</span>
</button>
</div>
</div>
{/*  Category 3: Food & Dining Preferences  */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-primary text-[20px]">restaurant</span>
<h4 className="font-title-md text-title-md">Food &amp; Dining Preferences</h4>
</div>
<div className="flex flex-wrap gap-2.5" data-chip-group="food">
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-primary-container text-on-primary flex items-center gap-1 shadow-sm" data-selected="true" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon">check</span>
<span>Seafood &amp; regional</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>Strict vegetarian</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>Vegan</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-primary-container text-on-primary flex items-center gap-1 shadow-sm" data-selected="true" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon">check</span>
<span>Casual sharing plates</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>Fine dining dinners</span>
</button>
</div>
</div>
{/*  Category 4: Budget Comfort Zone  */}
<div className="bg-surface-container-lowest rounded-xl p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-primary text-[20px]">account_balance_wallet</span>
<h4 className="font-title-md text-title-md">Budget Comfort Zone</h4>
</div>
<div className="flex flex-wrap gap-2.5" data-chip-group="budget">
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-primary-container text-on-primary flex items-center gap-1 shadow-sm" data-selected="true" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon">check</span>
<span>Thoughtful mid-range</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>Value &amp; backpacker</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>Splurge on unique stays</span>
</button>
<button className="chip-toggle px-3.5 py-1.5 rounded-full text-label-md font-label-md transition-all bg-surface-container-low text-on-surface flex items-center gap-1" data-selected="false" type="button">
<span className="material-symbols-outlined text-[15px] chip-icon hidden">check</span>
<span>Strict split tracker</span>
</button>
</div>
</div>
</div>
{/*  Section 2: Cards You Use  */}
<div className="px-margin mt-10 flex flex-col gap-4">
<div className="flex flex-col">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Cards You Use</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
        Used to unlock group booking discounts and cardholder perks for your circle. We only track issuer and brand to match partner deals.
      </p>
</div>
{/*  Reassurance Banner  */}
<div className="bg-surface-container-low/80 rounded-xl p-4 flex items-start gap-3 shadow-sm">
<span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5" style={{"fontVariationSettings":"\"FILL\" 1"}}>lock</span>
<p className="font-body-md text-body-md text-on-surface leading-snug">
        We never ask for card numbers, CVVs, or bank logins. Only card type for group discount matching.
      </p>
</div>
{/*  Card Rows List  */}
<div className="flex flex-col gap-3">
{/*  Card 1  */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3.5 min-w-0">
<div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined text-[24px]">credit_card</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-on-surface truncate">HDFC Bank · Visa Infinite</span>
<div className="inline-flex items-center gap-1 text-primary mt-0.5">
<span className="material-symbols-outlined text-[14px]">percent</span>
<span className="font-label-sm text-label-sm truncate">5% cashback on resort stays unlocked</span>
</div>
</div>
</div>
<button aria-label="Card Options" className="text-on-surface-variant hover:text-on-surface p-2 shrink-0">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3.5 min-w-0">
<div className="w-11 h-11 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-[24px]">contactless</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-on-surface truncate">ICICI Bank · Mastercard Coral</span>
<div className="inline-flex items-center gap-1 text-secondary mt-0.5">
<span className="material-symbols-outlined text-[14px]">local_airport</span>
<span className="font-label-sm text-label-sm truncate">Airport lounge partner</span>
</div>
</div>
</div>
<button aria-label="Card Options" className="text-on-surface-variant hover:text-on-surface p-2 shrink-0">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
{/*  Quiet Action: Add Card  */}
<button className="w-full py-3.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center gap-2 transition-colors font-title-md text-title-md shadow-sm active:scale-[0.99]">
<span className="material-symbols-outlined text-primary text-[20px]">add</span>
<span>Add another card type</span>
</button>
</div>
{/*  Bottom Utility Links  */}
<div className="px-margin mt-10 flex flex-col gap-2">
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden divide-y divide-surface-container">
<a className="flex items-center justify-between p-4 hover:bg-surface-container-low/40 transition-colors" href="javascript:void(0)">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">tune</span>
<span className="font-title-md text-title-md text-on-surface">Trip preferences</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">chevron_right</span>
</a>
<a className="flex items-center justify-between p-4 hover:bg-surface-container-low/40 transition-colors" href="javascript:void(0)">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">notifications_none</span>
<span className="font-title-md text-title-md text-on-surface">Notification settings</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">chevron_right</span>
</a>
<a className="flex items-center justify-between p-4 hover:bg-surface-container-low/40 transition-colors" href="javascript:void(0)">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">assured_workload</span>
<span className="font-title-md text-title-md text-on-surface">Escrow banking details</span>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-primary">Connected</span>
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">chevron_right</span>
</div>
</a>
</div>
{/*  Editorial Footer Note  */}
<p className="text-center font-label-sm text-label-sm text-on-surface-variant/70 mt-6 tracking-wide uppercase">
      Monsoon Escape Vault Protocol · Encrypted State
    </p>
</div>
</div>
</main>

</>
  );
}
