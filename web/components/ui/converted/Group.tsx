"use client";
import React from 'react';

export default function Group() {
  return (
    <>

<header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.03)] pt-safe">
<div className="flex items-center justify-between px-margin h-16">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[28px] text-primary">explore</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">GroupTrip</span>
<h1 className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">Monsoon Escape</h1>
</div>
</div>
<div className="flex items-center gap-space-sm">
<a aria-label="User Profile" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors ring-2 ring-primary/20" data-path="profile" href="#">
<img alt="Aisha" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyd6CeleLXsnMPJQvTeAdsUAgcZvlE_zS_krlY_TiqhmILU8Q7AlkZWu58uK72rwgcytazmYYBoSECIJlWsbKYp8wNErglOTpr58hG2Khv7qGkwq_imJVb0Ix7iN3op-Rc8jcKQtuastrnD6nVNgtjTkiYKZNpz2LoRAWzjAxmkPdYlfIwkWCCCg8eAt9Ur2qxWMkPymvGjT0s2cCTIvEHj_ed-87l3vBVDy1875IaH1O-TNOEcN8mmQ"/>
</a>
</div>
</div>
</header>
<main className="flex-1 w-full bg-surface pt-16 pb-28"><div className="flex flex-col w-full">
{/*  Top Curated Group Header Context  */}
<div className="px-margin pt-space-md pb-space-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary tracking-widest uppercase font-semibold">Travel Circle</span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-high px-2.5 py-1 rounded-full">5 Travelers</span>
</div>
<div className="flex items-baseline justify-between">
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Fellow Wayfarers</h2>
<span className="font-label-md text-label-md text-primary font-medium">Western Ghats</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
      Shared custody treasury, pace preferences, and collective itinerary notes for the monsoon trail.
    </p>
</div>
{/*  Editorial Whiteboard Banner Module  */}
<div className="px-margin my-space-sm">
<a className="group block relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all duration-300 hover:shadow-md active:scale-[0.99]" data-path="whiteboard" href="#">
<div className="flex items-start justify-between gap-space-sm mb-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-xl bg-surface-container flex items-center justify-center text-primary transition-transform group-hover:rotate-6">
<span className="material-symbols-outlined text-[20px]">push_pin</span>
</div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-title-md text-title-md text-on-surface tracking-tight">Trip Whiteboard</span>
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
</div>
<p className="font-label-sm text-label-sm text-secondary font-medium">4 active pinned notes</p>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</div>
</div>
{/*  Preview Snippet Strips inside Whiteboard  */}
<div className="mt-space-sm bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[15px] text-tertiary">cottage</span>
<span className="font-body-md text-body-md text-on-surface truncate">Room 204 keycode, Villa Wi-Fi, Cab sync</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm italic truncate">"Aisha: Updated tea estate trekking route guide..."</span>
<span className="font-label-sm text-label-sm text-primary font-medium shrink-0 ml-2">Open board →</span>
</div>
</div>
</a>
</div>
{/*  Communal Vault Health Bar  */}
<div className="px-margin my-space-sm">
<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-primary">account_balance</span>
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Collective Vault</span>
</div>
<span className="font-label-md text-label-md text-primary font-bold">₹51,000 / ₹53,800</span>
</div>
<div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full transition-all duration-500" style={{"width":"94.7%"}}></div>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>4 of 5 deposits secured</span>
<span className="text-secondary font-medium">1 awaiting bank escrow release</span>
</div>
</div>
</div>
{/*  Travelers List Section  */}
<div className="px-margin mt-space-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-title-lg text-title-lg text-on-surface">The Expedition Circle</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Tap traveler for ledger</span>
</div>
{/*  Member 1: Aisha Sharma (Host / You)  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all duration-200">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<img alt="Aisha Sharma" className="w-14 h-14 rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida/AEtjO1XRzHa9wiO5QNy_kmq17I6ctA3ReamWOJQFSCw2RP_5yJs1GBn4tjuyQvjddiP-T7uCrCv6zyb7ZhwIDrJ4-tcvgluSJs4j9XJmN7Nb3BFkqORrdQdAHfzYjV13F1ud1NXXUjQ0_mnT1BsMRPCLb8l1OxZQyiZx3Q-DGZi9wK6iPPWRBTpNn2cJjWYiQS0tsLNS98lTxSHGq9euK5BRoQ86Q7EE8nvl1Jw3QIEG5dfSnhrr1yM8cp6ZX0dJ"/>
<span className="absolute -bottom-1 -right-1 bg-primary text-on-primary rounded-full p-0.5 w-5 h-5 flex items-center justify-center text-[10px]" title="Host">
<span className="material-symbols-outlined text-[12px]">verified</span>
</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-space-xs mb-1">
<div>
<div className="flex items-center gap-1.5">
<h3 className="font-title-md text-title-md text-on-surface truncate">Aisha Sharma</h3>
<span className="font-label-sm text-label-sm text-on-primary-container bg-primary-container px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase">You</span>
</div>
<p className="font-label-sm text-label-sm text-primary font-medium">Host &amp; Treasury Custodian</p>
</div>
</div>
<div className="mt-2 inline-flex items-center gap-1.5 bg-surface-container-low px-2.5 py-1 rounded-full text-primary font-medium font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
<span>In the pool · ₹12,000 funded</span>
</div>
<div className="mt-2.5 pt-2 flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm truncate">HDFC cardholder · Slow mornings pace</span>
<span className="material-symbols-outlined text-[18px] text-tertiary shrink-0 ml-1">coffee</span>
</div>
</div>
</div>
</div>
{/*  Member 2: Rohan Sen  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all duration-200">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Portrait photo of Rohan, an athletic Indian man in his late 20s with a cheerful outdoorsy expression, sunlit monsoon greenery background, casual linen safari shirt, crisp clean warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApk1zoXFUgI1bqWyktjGFL_IsckkVsdxbWtn8zIkDAiDiUuojGz5KMZ7rirBPOtCRIoxJhIJcy42Bb4nCAtnjgTyBZRSFsVF81q7Xds5_Q07jaY3KYWzVDOPtjWtPhPBuJfrnPN3yExL11ia4ysuB1q3GkNWNUCrHneiCmFvPMU7aW2tgKxr9Nt76a9epId4EH33kLB719yXixvPz5AyukI4xBWoJ5PM4apkNQ2elyujcPuLtkZwAEuA"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-space-xs mb-1">
<div>
<h3 className="font-title-md text-title-md text-on-surface truncate">Rohan Sen</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant font-medium">Co-traveler</p>
</div>
</div>
<div className="mt-2 inline-flex items-center gap-1.5 bg-surface-container-low px-2.5 py-1 rounded-full text-primary font-medium font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
<span>In the pool · ₹12,000 funded</span>
</div>
<div className="mt-2.5 pt-2 flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm truncate">Adventure lead · Activity scout</span>
<span className="material-symbols-outlined text-[18px] text-tertiary shrink-0 ml-1">hiking</span>
</div>
</div>
</div>
</div>
{/*  Member 3: Amit Sharma  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all duration-200">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Candid portrait headshot of Amit, an Indian man in his early 30s with gentle smile and glasses, natural daylight, soft focus background of a veranda overlooking rain-drenched hills" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4Mda0ttdINLR7JxaxjnfLrsaMfUVwq5ON0Ms1kpsn-oAjmgZlwbDhZOD11yISsTBCnfFRV2AJuB3bhxGViTXZHYyfu_eoe2bm9YEJdcW0CJheP17jCicVc8sWKqBKC-gC7ytGDaRmL6nTrGyBi8J223AsI1oiBDgkyf0m8R3bg98NgfKvfQMGog6IES3qIZrb5fbAWQYLlIutHz-dTrBD2ackWpyxomTGM-qoek8aTBKrWycDIZQJwg"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-space-xs mb-1">
<div>
<h3 className="font-title-md text-title-md text-on-surface truncate">Amit Sharma</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant font-medium">Co-traveler</p>
</div>
</div>
<div className="mt-2 inline-flex items-center gap-1.5 bg-surface-container-low px-2.5 py-1 rounded-full text-primary font-medium font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
<span>In the pool · ₹14,000 funded</span>
</div>
<div className="mt-2.5 pt-2 flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm truncate">HDFC Millennia card perk applied · Foodie</span>
<span className="material-symbols-outlined text-[18px] text-tertiary shrink-0 ml-1">restaurant</span>
</div>
</div>
</div>
</div>
{/*  Member 4: Priya Desai  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all duration-200">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Close-up editorial portrait of Priya, a poised Indian woman with shoulder-length wavy hair, serene smile, natural dewy makeup, monsoon balcony background with warm earthy tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDCoTpyaVkgYDOYe5agFU4j3-ANkauiIhCXVKdQZhCHSlmT6E1QIA9O5P_MlfD2v_TNHUyDTbir1y_Jn1bt8tDdEAN5MYi-PocPao8i-GgG8AG1DoHk9SXrGMZgx_jiuxWjCg8kQfGdkLcHFUqgCM9n8zbIY7-dP3ER9F19zhN3dYiUB6SRUho0fnhEHUSSPbxY01_BJyrspFmgSD2Gv7q5IIJM22K_-kAONXpFZPPogfAft8FwY8qug"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-space-xs mb-1">
<div>
<h3 className="font-title-md text-title-md text-on-surface truncate">Priya Desai</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant font-medium">Co-traveler</p>
</div>
</div>
<div className="mt-2 inline-flex items-center gap-1.5 bg-surface-container-low px-2.5 py-1 rounded-full text-primary font-medium font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
<span>In the pool · ₹11,000 funded</span>
</div>
<div className="mt-2.5 pt-2 flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm truncate">Wellness &amp; spa lead · Sunrise yoga</span>
<span className="material-symbols-outlined text-[18px] text-tertiary shrink-0 ml-1">spa</span>
</div>
</div>
</div>
</div>
{/*  Member 5: Neha Kulkarni (Pending deposit)  */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm transition-all duration-200">
<div className="flex items-start gap-space-md">
<div className="relative shrink-0">
<img className="w-14 h-14 rounded-full object-cover shadow-sm" data-alt="Portrait of Neha, a young Indian woman in her late 20s smiling warmly outdoors with cozy knit cardigan, ambient monsoon mist atmosphere, editorial travel style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBowjw60kHKM4zKXmJkgTazf2N1y1ScCzjjQMvy5YaLsMhL6J-mmDxtO6gRu86uvqZunb_COumfO0jkS6J-vfthF9vQqSyaIg8ZqGS3LSQTCYdAORSITwShQ11DWHOqlIo_iwUMbB_D7ZsTNIgheLVmu4_qyu1ZJcrD2doZFp9TvY7WNR-V4jGyYX4fT09xHdsSizUEJIvIWyw7mF8XijNh_mU6TMzRuJgNr_KwzZFhhD7cNchverGGgQ"/>
<span className="absolute -bottom-1 -right-1 bg-secondary-container text-on-secondary-container rounded-full p-0.5 w-5 h-5 flex items-center justify-center" title="Pending Deposit">
<span className="material-symbols-outlined text-[12px]">hourglass_top</span>
</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-start justify-between gap-space-xs mb-1">
<div>
<h3 className="font-title-md text-title-md text-on-surface truncate">Neha Kulkarni</h3>
<p className="font-label-sm text-label-sm text-on-surface-variant font-medium">Co-traveler</p>
</div>
</div>
<div className="mt-2 inline-flex items-center gap-1.5 bg-secondary-fixed text-on-secondary-fixed px-2.5 py-1 rounded-full font-medium font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
<span>Pending deposit · ₹2,800 due</span>
</div>
<div className="mt-2.5 pt-2 flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm truncate">Escrow hold pending verification</span>
<button className="font-label-sm text-label-sm text-secondary font-semibold hover:underline shrink-0 ml-1" onClick={() => {}} type="button">Nudge</button>
</div>
</div>
</div>
</div>
</div>
{/*  Invite New Friend Action Section  */}
<div className="px-margin my-space-lg flex flex-col gap-space-sm">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md w-full sm:w-auto">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[26px]">person_add</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-title-md text-title-md text-on-surface">Expand the Circle</span>
<span className="font-body-md text-body-md text-on-surface-variant text-xs">Share invite link or scan trip QR code</span>
</div>
</div>
<button className="w-full sm:w-auto bg-primary-container text-on-primary font-title-md text-title-md px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary transition-all duration-200 shadow-sm active:scale-95" id="inviteBtn" type="button">
<span className="material-symbols-outlined text-[20px]">link</span>
<span>Invite to Monsoon Escape</span>
</button>
</div>
{/*  Quiet Escrow Trust Footnote  */}
<div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-primary shrink-0 mt-0.5">lock</span>
<p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed">
        Escrow balances are locked to individual bank accounts under ICICI Custody. New members can join before Day 2 cutoff. Unused pooled funds auto-reverse within 24 hours of trip checkout.
      </p>
</div>
</div>
{/*  Client-side Interactive Toast / Micro-interaction  */}
<div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-4 py-2.5 rounded-full font-label-md text-label-md shadow-xl opacity-0 pointer-events-none transition-all duration-300 flex items-center gap-2" id="copyToast">
<span className="material-symbols-outlined text-[16px] text-primary-fixed">check_circle</span>
<span>Invite link copied to clipboard!</span>
</div>

</div></main>
<nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-2px_12px_rgba(16,32,28,0.04)]" data-active-classes="text-primary font-semibold">
<div className="flex items-center justify-around h-20 px-space-xs">
<a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="trip" href="#">
<span className="material-symbols-outlined text-[24px]">landscape</span>
<span className="font-label-md text-label-md">Trip</span>
</a>
<a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="itinerary" href="#">
<span className="material-symbols-outlined text-[24px]">calendar_today</span>
<span className="font-label-md text-label-md">Itinerary</span>
</a>
<div className="flex items-center justify-center min-w-[56px] min-h-[44px] -mt-5">
<a className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-[0_8px_20px_rgba(30,111,100,0.35)] hover:bg-primary transition-all duration-200 active:scale-95" data-path="add-expense" href="#">
<span className="material-symbols-outlined text-[28px]">add</span>
</a>
</div>
<a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="money-pool" href="#">
<span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
<span className="font-label-md text-label-md">Money</span>
</a>
<a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs transition-colors text-primary font-semibold" data-path="group" href="#">
<span className="material-symbols-outlined text-[24px]">group</span>
<span className="font-label-md text-label-md">Group</span>
</a>
</div>
</nav>

</>
  );
}
