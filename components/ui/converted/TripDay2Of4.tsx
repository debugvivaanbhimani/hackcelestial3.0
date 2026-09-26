import React from 'react';

export default function TripDay2Of4() {
  return (
    <>
<header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.03)] pt-safe"><div className="flex items-center justify-between px-margin h-16"><div className="flex items-center gap-space-sm"><img alt="GroupTrip Brand Mark" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Wci8rD5fkEYvBkx7TMlT-mlMKjF-ia_aT3zRv4pTgsuXCjuUYndAdyxwcKyXH4QJVKzqfrwcoM3cNGLZsCXEfrHurFsmWcTf2pxpsVgW9Uo0scGTbLJobFPQGr3J4tZA4gHiQOpbLqC3ECYBb6n_ZPa5WJmhG_VxdbaUojk0bhAiRLOX-M7Cvwbjxz9trgsnBqeuQda9af_0wWPAokeRfPYahW2UrTvd4KIqQXp_vbwSPgkZ2Eeno9Oj27"/><div className="flex flex-col"><span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Active Trip</span><h1 className="font-headline-sm text-headline-sm tracking-tight text-on-surface leading-none">Monsoon Escape</h1></div></div><div className="flex items-center gap-space-sm"><button aria-label="Aisha Profile" className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors ring-2 ring-primary/20"><img alt="Aisha" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyd6CeleLXsnMPJQvTeAdsUAgcZvlE_zS_krlY_TiqhmILU8Q7AlkZWu58uK72rwgcytazmYYBoSECIJlWsbKYp8wNErglOTpr58hG2Khv7qGkwq_imJVb0Ix7iN3op-Rc8jcKQtuastrnD6nVNgtjTkiYKZNpz2LoRAWzjAxmkPdYlfIwkWCCCg8eAt9Ur2qxWMkPymvGjT0s2cCTIvEHj_ed-87l3vBVDy1875IaH1O-TNOEcN8mmQ"/></button></div></div></header><main className="flex-1 w-full bg-surface pt-16 pb-28"><div className="flex flex-col w-full">
<div className="relative w-full overflow-hidden rounded-b-3xl shadow-md">
<div className="relative w-full h-[320px] bg-cover bg-center" style={{"backgroundImage":"url(\"https"}}>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent"></div>
<div className="absolute top-4 left-margin right-margin flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-on-surface text-label-sm font-label-sm uppercase tracking-widest shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          Day 2 of 4 · Friday
        </span>
<button className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm shadow-sm transition-transform active:scale-95" id="alert-pill-btn">
<span className="material-symbols-outlined text-[16px] text-on-secondary-fixed">info</span>
<span>1 charge under review</span>
</button>
</div>
<div className="absolute bottom-5 left-margin right-margin">
<span className="text-on-primary/80 font-label-sm text-label-sm uppercase tracking-widest">Active Itinerary</span>
<h2 className="text-on-primary font-headline-lg text-headline-lg font-normal tracking-tight mt-0.5">Monsoon Escape</h2>
<div className="flex items-center gap-2 mt-1 text-on-primary/90 font-body-md text-body-md">
<span className="material-symbols-outlined text-[18px]">location_on</span>
<span>Dandeli, Karnataka · 12–15 Sep</span>
</div>
</div>
</div>
</div>
<div className="hidden fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/40 backdrop-blur-sm transition-opacity" id="review-modal">
<div className="bg-surface-container-lowest w-full max-w-sm rounded-2xl p-5 shadow-2xl flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[20px]">receipt_long</span>
<span className="font-title-md text-title-md">Pending Toll Split</span>
</div>
<button className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors" id="close-modal">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Rohan flagged ₹450 for the Kali Bridge state checkpost permit. 5 members split equally.</p>
<div className="p-3 rounded-xl bg-surface-container-low flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface">Your slice (1/5)</span>
<span className="font-currency-md text-currency-md text-primary">₹90</span>
</div>
<div className="flex gap-2 pt-2">
<button className="flex-1 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md transition-colors hover:bg-primary-container" id="approve-toll">Approve &amp; Settle</button>
</div>
</div>
</div>
<div className="px-margin flex flex-col gap-space-lg mt-space-md">
<section className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">NEXT UP</span>
<div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px]">timer</span>
<span id="countdown">In 20 mins</span>
</div>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-on-surface">Rafting · Meet at the Jetty 8:40</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Kali River Outpost · Rapids briefing with Captain Vikram</p>
</div>
<div className="flex items-center justify-between pt-2">
<div className="flex items-center -space-x-2">
<img className="w-8 h-8 rounded-full ring-2 ring-surface-container-lowest object-cover" data-alt="Close up warm lifestyle portrait of Rohan wearing a rain-jacket, monsoon travel editorial style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXxi6KGOrs4FGnPlnO_vqcZNsYiQmocvbHkvzSGO0KaalVAmkGvdIylk4Pu4tCg2fqGzjDysa06l0oZwxGdveTv9z4iT7rT-aRofxXANedxULq_ILjXlXD_tJVDrm3xfYnC0UXylD_6gX82FrOuJpscRcrW3von8_O1TkLb4J4acNz9zwkmoABvaIL49_q0w99xhwhJXvxVX523CF402TnzPrsztWN5o2dp18RByZvAWyeMInEQHDQjQ"/>
<img className="w-8 h-8 rounded-full ring-2 ring-surface-container-lowest object-cover" data-alt="Portrait of Priya smiling under lush forest canopy, earthy organic colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2SJ0BNEqUSAAZATexRWAuWeJdtSGe9BEHOphaF8PHZLiCtpeWlzb0-5w9sZ0CzUFNR-XzqtWR6WC06KWhm8aYgPjTv1ujj1Gi4ey4-bpTtdz-kdbDzt_0XYdxHQPoIsLZ-drVInMZeiE9hF6dv7ym7V8NM-ZeSQdoEHlaSGPDKz1DrYGwmqXr-crtHu72jQvFcN3JLioOf41nviVLViTvS8QUl7-BCUUoaylqhd8oBgWPrAumWq2MLQ"/>
<img className="w-8 h-8 rounded-full ring-2 ring-surface-container-lowest object-cover" data-alt="Portrait of Amit laughing with damp hair outdoors in misty Karnataka" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdClb1lANQhhClMQt7RM3MqPJTMih4F0n1s-4zbEjH9w0DQwQ3OkN_QzYTOKqM5-Nja2XOBwOdh0CG6oq99cZPHxiQhppRT98FCDk4fjzjyLt3vNMW8lsXPFItBnzvcc7o_SX1OcfwvPjs92zhWQ3bkLiC-K83uYAi8gAdup9SB_LzWTfjfrPxglpi7qC17vkujtfFG82SaL6Bu6-v5z040QWIemLdJrejB9jdyoYgwRQYMVE3pdQC3g"/>
<img className="w-8 h-8 rounded-full ring-2 ring-surface-container-lowest object-cover" data-alt="Portrait of Neha in outdoor monsoon gear with lush jungle greenery background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDOzWT7o-d8lIXvpXGfx72PAkPltryl3Bxb2ZloCzJQQEEh47MhzOcESi-Ac-X2OLO474IxEhxtQuqZYOBaNhQkzAWc9s7ShMuYTSg64YCoJQ9H2NqnTV6WCsI_g7J9sDvEvYWTN8ZKotT-xffM6a4JY3ilyR0XQMmlCPsQlsADU-Jhh1yAFLKvNSHgiF9ZTiFqZqabSXY0Mfj9WohaenNvnPpGdJKtq4B_eEKD0YelzJfQc9tEc42Vw"/>
<span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant ring-2 ring-surface-container-lowest flex items-center justify-center font-label-sm text-label-sm">+1</span>
</div>
<button className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md shadow-sm active:scale-95 transition-all">
<span className="material-symbols-outlined text-[16px]">navigation</span>
<span>Open Trail Map</span>
</button>
</div>
</section>
<section className="bg-surface-container-low rounded-2xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
</div>
<div>
<div className="flex items-baseline gap-1.5">
<span className="font-currency-md text-currency-md text-on-surface font-semibold">₹600</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">left for today</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant">Daily pool share: ₹2,200 · Group total: ₹18,400</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">chevron_right</span>
</section>
<section className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h4 className="font-headline-sm text-headline-sm text-on-surface">Today's Schedule</h4>
<span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">4 Milestones</span>
</div>
<div className="flex flex-col gap-3">
<div className="relative bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex gap-4">
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm font-semibold text-primary">09:00</span>
<div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
<div className="w-0.5 flex-1 bg-surface-variant my-1"></div>
</div>
<div className="flex-1 flex flex-col gap-1 pb-1">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md text-on-surface">Kali River White Water Rafting</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface text-label-sm font-label-sm">Grade 3</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">11 km run along the swollen Kali gorge. 5 crew confirmed with life-jackets issued.</p>
<div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm mt-1">
<span className="material-symbols-outlined text-[16px]">groups</span>
<span>Aisha, Rohan, Priya, Amit, Neha</span>
</div>
</div>
</div>
<div className="relative bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex gap-4">
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm font-semibold text-on-surface-variant">13:00</span>
<div className="w-2 h-2 rounded-full bg-surface-variant mt-2"></div>
<div className="w-0.5 flex-1 bg-surface-variant my-1"></div>
</div>
<div className="flex-1 flex flex-col gap-1 pb-1">
<span className="font-title-md text-title-md text-on-surface">Riverfront Malnad Lunch &amp; Rest</span>
<p className="font-body-md text-body-md text-on-surface-variant">River Mist Dining Hall. Steamed rice dumplings, bamboo shoot curry, and fresh spiced buttermilk.</p>
<span className="text-on-surface-variant/80 font-label-sm text-label-sm">Covered by Communal Meal Pot</span>
</div>
</div>
<div className="relative bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex gap-4">
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm font-semibold text-on-surface-variant">14:30</span>
<div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
<div className="w-0.5 flex-1 bg-surface-variant my-1"></div>
</div>
<div className="flex-1 flex flex-col gap-2 pb-1">
<div className="flex items-center justify-between">
<span className="font-title-md text-title-md text-on-surface">Choose Your Afternoon</span>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-label-sm font-label-sm">Choice Slot</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Free-roam hour. Pick an activity with your group:</p>
<div className="grid grid-cols-3 gap-2 pt-1" id="choice-pills">
<button className="choice-btn px-2 py-1.5 rounded-xl bg-surface-container-high text-on-surface text-center font-label-sm text-label-sm transition-all hover:bg-primary-fixed">Nature Trail</button>
<button className="choice-btn px-2 py-1.5 rounded-xl bg-primary text-on-primary text-center font-label-sm text-label-sm transition-all">Kayak</button>
<button className="choice-btn px-2 py-1.5 rounded-xl bg-surface-container-high text-on-surface text-center font-label-sm text-label-sm transition-all hover:bg-primary-fixed">Hammock</button>
</div>
</div>
</div>
<div className="relative bg-surface-container-lowest rounded-2xl p-4 shadow-sm flex gap-4">
<div className="flex flex-col items-center">
<span className="font-label-sm text-label-sm font-semibold text-on-surface-variant">19:30</span>
<div className="w-2 h-2 rounded-full bg-surface-variant mt-2"></div>
</div>
<div className="flex-1 flex flex-col gap-1 pb-1">
<span className="font-title-md text-title-md text-on-surface">Campfire &amp; Barbecue at Jetty Chalet</span>
<p className="font-body-md text-body-md text-on-surface-variant">Rain shelter setup, acoustic guitars, and freshly roasted river corn beneath monsoon canopies.</p>
</div>
</div>
</div>
</section>
<div className="w-full rounded-2xl overflow-hidden shadow-sm relative h-40">
<div className="w-full h-full bg-cover bg-center" data-alt="Dense emerald green teak forests along the misty shoreline of Kali River, soft gentle rain falling onto calm river waters, moody cinematic lighting" style={{"backgroundImage":"url(\"https"}}>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent flex items-end p-4">
<div className="flex justify-between items-center w-full text-on-primary">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary/80">Camp Guide</span>
<p className="font-title-md text-title-md">Hornbill Watch &amp; Forest Etiquette</p>
</div>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main><nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-2px_12px_rgba(16,32,28,0.04)]" data-active-classes="text-primary font-semibold"><div className="flex items-center justify-around h-20 px-space-xs"><a aria-current="page" className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs transition-colors text-primary font-semibold" data-path="trip" href="#"><span className="material-symbols-outlined text-[24px]">landscape</span><span className="font-label-md text-label-md">Trip</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="itinerary" href="#"><span className="material-symbols-outlined text-[24px]">calendar_today</span><span className="font-label-md text-label-md">Itinerary</span></a><div className="flex items-center justify-center min-w-[56px] min-h-[44px] -mt-5"><a className="w-12 h-12 rounded-full bg-primary-container text-on-primary flex items-center justify-center shadow-[0_8px_20px_rgba(30,111,100,0.35)] hover:bg-primary transition-all duration-200 active:scale-95" data-path="ai-trip-builder" href="#"><span className="material-symbols-outlined text-[28px]">add</span></a></div><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="money" href="#"><span className="material-symbols-outlined text-[24px]">account_balance_wallet</span><span className="font-label-md text-label-md">Money</span></a><a className="flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="group" href="#"><span className="material-symbols-outlined text-[24px]">group</span><span className="font-label-md text-label-md">Group</span></a></div></nav>
</>
  );
}
