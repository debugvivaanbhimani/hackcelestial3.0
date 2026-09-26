import React from 'react';

export default function Whiteboard() {
  return (
    <>

<header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.04)] pt-safe">
<div className="h-16 px-margin flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={() => {}}>
<span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
</button>
<div className="flex flex-col">
<h1 className="font-headline-sm text-headline-sm text-on-surface truncate leading-tight">Whiteboard</h1>
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
<section className="px-margin pt-space-md pb-space-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs text-on-surface-variant">
<span className="material-symbols-outlined text-[18px] text-primary">push_pin</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">Collective Board</span>
</div>
<div className="flex items-center -space-x-2">
<div className="w-6 h-6 rounded-full overflow-hidden shadow-sm bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Intimate film portrait of Aisha smiling warmly in soft natural monsoon morning light with muted earthen tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBooBYvGl1psWMg7fIju5Oa7TZwtMgGjNV3n3zM8eWfFv5MTIgBxuonPf5_yTH4eZfm-SIIld9Z0WCyt6KxtbC6zlxWVmscVIAhpTUn0hJVK0XJL0bQZAPfFLCXMixueNwYMmZaukaDERBbaUCbJX_SEulX90a-s_EEHn0M0EdyjQDURogUPb88sMiZT8pHXBP0Xj1-2nhJZucSnBqQ3wcmsQYBQMbvH6dS_LwJ3dhzFvsYB6lRu4kKTQ"/>
</div>
<div className="w-6 h-6 rounded-full overflow-hidden shadow-sm bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Candid portrait of Rohan wearing linen shirt by tea plantations under soft cloudy sky, editorial film grain." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClKL0zWU12n7xEAW8AL2VvfjV10WOJbbFCr0Jy87qNnZ8s-JpBQwTmYzERlfddWb5dhO2tA-ep7mwsyNP96k7SLLurIQjU47wyWI34dgvsaI175DXDGHFKJUnfPA2aPdaU9bPXrybC_KX0gE0VuLCzIpGOeOov1t5SU0E1eE1rHz_V3Tn0p1asQaG14-7xUr8AVt4qSEXz9DwkN8RXemJa9SkDr8kN8Il2_kynGVK-1hIZghWwrITifw"/>
</div>
<div className="w-6 h-6 rounded-full overflow-hidden shadow-sm bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Atmospheric profile photograph of Priya standing beside tranquil river mist in Coorg, cinematic earth tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnxSKmbWIfIdsL5-pZh0gVB7cgv903JbntVOL8M85j0IEIA3EWyHKTaFvvCC_EZkKKDpQhKZo0eRw-Abb1pF3nsidPmG1juWmOQ4SJDN8IJdF9YE8HOGn_0pl8FhO_kb5RAKTdhfN1yenq6kgAUHvS4-2TvN3iubV6FQEPeyJ1wyXqeKamxCXqd41fljtTLXrwcKKj1KEkwz0n7-QQer54T-O8gG_ZZPck2p-D30rPLqtKE1MTuIRWjg"/>
</div>
<div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed font-label-sm text-label-sm shadow-sm">
          +2
        </div>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
      A shared board for little trip truths that everyone needs quick. Anyone can pin, update, or remove.
    </p>
</section>
<div className="px-margin py-space-sm">
<button className="w-full h-12 bg-primary text-on-primary rounded-xl px-space-md flex items-center justify-between shadow-[0_8px_20px_-4px_rgba(0,86,76,0.22)] active:scale-[0.99] transition-transform duration-200" id="open-composer-btn">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px]">add_circle</span>
<span className="font-title-md text-title-md tracking-tight font-medium">Pin a new note</span>
</div>
<span className="font-label-sm text-label-sm bg-on-primary/15 text-on-primary px-2.5 py-1 rounded-full">Fast Save</span>
</button>
</div>
<section className="py-space-sm">
<div className="flex items-center gap-space-xs overflow-x-auto px-margin no-scrollbar py-1">
<button className="filter-pill whitespace-nowrap px-4 py-1.5 rounded-full font-label-md text-label-md bg-primary text-on-primary shadow-sm transition-all duration-150" data-filter="all">
        All (4)
      </button>
<button className="filter-pill whitespace-nowrap px-4 py-1.5 rounded-full font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high transition-all duration-150" data-filter="Logistics">
        Logistics (2)
      </button>
<button className="filter-pill whitespace-nowrap px-4 py-1.5 rounded-full font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high transition-all duration-150" data-filter="Rooms &amp; Stay">
        Rooms &amp; Stay (1)
      </button>
<button className="filter-pill whitespace-nowrap px-4 py-1.5 rounded-full font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high transition-all duration-150" data-filter="Plans">
        Plans (1)
      </button>
</div>
</section>
<section className="px-margin pt-space-sm pb-space-lg flex flex-col gap-space-md" id="cards-container">
<article className="note-card relative bg-surface-container-lowest rounded-xl p-5 shadow-[0_8px_24px_-8px_rgba(16,32,28,0.08),0_2px_6px_-2px_rgba(16,32,28,0.04)] overflow-hidden transition-all duration-200 active:scale-[0.99] cursor-pointer" data-category="Rooms &amp; Stay">
<div className="absolute -top-1 left-8 w-14 h-4 bg-secondary-fixed/50 rounded-sm shadow-inner rotate-[-2deg] pointer-events-none"></div>
<div className="flex items-start justify-between gap-space-sm mb-3">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          Rooms &amp; Stay
        </span>
<button aria-label="Card actions" className="text-on-surface-variant hover:text-on-surface">
<span className="material-symbols-outlined text-[18px]">more_horiz</span>
</button>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-2 tracking-tight">
        Room 204 — Aisha, Priya
      </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
        Key is at reception under Aisha's name. Balcony door needs a firm pull.
      </p>
<div className="flex items-center justify-between pt-3 bg-surface-container-low/50 -mx-5 -mb-5 px-5 py-3 mt-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full overflow-hidden shadow-sm bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Portrait of Aisha Sharma in Kerala greenery with warm editorial soft lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXuoLmTFsWYOxGJdo3N88jidqgbo-1O8UMXTiVHhZ4cFzglvkXOfBPmhMwqx6FiKvFAJxLiUchecljOTOfveniqLDP9Sz9t2h8NHBzu1l5wNZ7aqPU3RDBw7FAQeM3XLNsTXVh7uc2yOCoC8zkgH4M18zonHtXWS1Ekel9AmtqTmrQvAabZUk_30dT-QrrkA4ONbuhdafEpFzG5G0Uj2oTlfajufrvm_GolPGOj8QI7hQkrFBw44-zMg"/>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold leading-tight">Aisha Sharma</span>
<span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Pinned 2h ago</span>
</div>
</div>
<div className="flex items-center gap-1 text-on-surface-variant text-[11px] font-label-sm">
<span className="material-symbols-outlined text-[15px] text-primary">mode_comment</span>
<span>1 note</span>
</div>
</div>
</article>
<article className="note-card relative bg-surface-container-low rounded-xl p-5 shadow-[0_8px_24px_-8px_rgba(16,32,28,0.08),0_2px_6px_-2px_rgba(16,32,28,0.04)] overflow-hidden transition-all duration-200 active:scale-[0.99] cursor-pointer" data-category="Logistics">
<div className="absolute top-2 right-4 flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary pointer-events-none">
<span className="material-symbols-outlined text-[14px]">push_pin</span>
</div>
<div className="flex items-start justify-between gap-space-sm mb-3">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-highest text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Logistics
        </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-2 tracking-tight">
        Cab: KA-25 N 4412
      </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
        Driver Ravi · <a className="text-primary font-medium underline underline-offset-2" href="tel:+919845211029">+91 98452 11029</a>. Silver Innova waiting at Jetty point.
      </p>
<div className="flex items-center justify-between pt-3 bg-surface-container/60 -mx-5 -mb-5 px-5 py-3 mt-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full overflow-hidden shadow-sm bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Portrait photograph of Rohan Sen smiling outdoors in monsoon travel gear with soft atmospheric depth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzMtRZRxKRHbtXDwqlb44qADUvtMHrnSxKpoYOjte8rN73pN9fcENjBi7xMieRzStFgh5Pt3oU5VR_baaJU-qQpY1ciEA-EGxIa0bmSfbORiMhulyPFJ6s0m3qbDgWm70m80EcGSgR3RjId06bEP8cir-jvBU4ch4NJgl19G9AMztx-Zce01aAKVGarUPyuDE5nRTl4_HP954XdyE2_h2gjH0A4gMIyk2FjUtjSOtx4rj8iLoQ5N1QEw"/>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold leading-tight">Rohan Sen</span>
<span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Pinned 4h ago</span>
</div>
</div>
<div className="flex items-center gap-1.5 text-primary text-[11px] font-label-sm">
<span className="material-symbols-outlined text-[15px]">call</span>
<span>Quick dial</span>
</div>
</div>
</article>
<article className="note-card relative bg-secondary-fixed/20 rounded-xl p-5 shadow-[0_8px_24px_-8px_rgba(16,32,28,0.08),0_2px_6px_-2px_rgba(16,32,28,0.04)] overflow-hidden transition-all duration-200 active:scale-[0.99] cursor-pointer" data-category="Logistics">
<div className="absolute -top-1 right-10 w-16 h-4 bg-surface-dim/40 rounded-sm shadow-inner rotate-[1.5deg] pointer-events-none"></div>
<div className="flex items-start justify-between gap-space-sm mb-3">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          Logistics
        </span>
<button aria-label="Copy wifi password" className="wifi-copy-btn flex items-center gap-1 font-label-sm text-label-sm text-secondary hover:text-on-secondary-fixed transition-colors">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
<span>Copy</span>
</button>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-2 tracking-tight">
        Wi-Fi: fern-guest
      </h2>
<div className="bg-surface-container-lowest/80 rounded-lg p-3 mb-4">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Password</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">WPA2 Personal</span>
</div>
<div className="font-currency-md text-currency-md text-on-surface tracking-wide select-all font-mono">
          monsoon24
        </div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
        (Works best near riverside deck dining and outer stone pavilion)
      </p>
<div className="flex items-center justify-between pt-3 bg-secondary-fixed/30 -mx-5 -mb-5 px-5 py-3 mt-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full overflow-hidden shadow-sm bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Portrait photograph of Amit Sharma in gentle outdoor light, warm documentary style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa8LsLe362nMrNItyYgAe1arbCHwuX6wfufSVx8IUeHkymx3MF3V1nXko4Ol9iV8U8jlc_CtYVtlCnFrNEoLno0Sl_FKcpPlBJZQEo1sosOPOHOirECt3g3-nAGRKpf1QuuJKHvWVN8jblwu0i_lGv_3phPL-NHVvoWXIKcAvkOxZrWRe_7jfc_NK-UnjSh7eoAd9UYOYTujONovFwVp2q55zUoZrVy2FoWQWMbQLXLXLGKBnWEoZDLg"/>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold leading-tight">Amit Sharma</span>
<span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Pinned yesterday</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">wifi</span> Signal: strong
        </span>
</div>
</article>
<article className="note-card relative bg-tertiary-fixed/35 rounded-xl p-5 shadow-[0_8px_24px_-8px_rgba(16,32,28,0.08),0_2px_6px_-2px_rgba(16,32,28,0.04)] overflow-hidden transition-all duration-200 active:scale-[0.99] cursor-pointer" data-category="Plans">
<div className="absolute top-2 left-3 flex items-center justify-center w-5 h-5 rounded-full bg-tertiary-container/20 text-tertiary pointer-events-none">
<span className="material-symbols-outlined text-[14px]">schedule</span>
</div>
<div className="flex items-start justify-between gap-space-sm mb-3 pl-6">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
          Plans
        </span>
<span className="font-label-sm text-label-sm bg-error-container text-on-error-container px-2 py-0.5 rounded-full font-semibold">
          High Priority
        </span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mb-2 tracking-tight">
        Meet at jetty 8:40
      </h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
        Rafting guides don't wait past 9:00. Wear waterproof shoes and leave sunglasses in cottage!
      </p>
<div className="flex items-center justify-between pt-3 bg-tertiary-fixed/50 -mx-5 -mb-5 px-5 py-3 mt-1">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full overflow-hidden shadow-sm bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="Candid photograph of Priya Desai in linen monsoon traveler attire smiling outdoors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa3l6cy3s3S5RAoZQKD3LZUgvFJHr2JOzibrxp9AMp9NH9RC03B_lm4WQebTUbHDZDCyr1gubvQFh8ndKD2RWGR1KnhOH0y7_RgsVoAEmDEKhHVVW3EOh3btbEATkdrK7cvwYzJlyCi0TMWTup7Ola2w45tDOICEv-SfqrD7pek3Tce2kxQIp0CmMbvP0WnzOXjYFTPmkFgaMO9XErI380HVFwkjecGXdFGUJrZyF_er4sj3W2q_X9Pg"/>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface font-semibold leading-tight">Priya Desai</span>
<span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Pinned 1h ago</span>
</div>
</div>
<div className="flex items-center gap-1 text-on-tertiary-fixed text-[11px] font-label-sm">
<span className="material-symbols-outlined text-[15px]">timer</span>
<span>Tomorrow</span>
</div>
</div>
</article>
</section>
<footer className="px-margin pt-space-xs pb-space-lg flex flex-col items-center text-center gap-space-xs">
<div className="w-8 h-1 rounded-full bg-surface-container-highest mb-1"></div>
<p className="font-body-md text-body-md text-on-surface-variant">
      Have an update? Tap any card to edit or leave a comment.
    </p>
<div className="flex items-center gap-space-sm mt-space-xs text-on-surface-variant">
<span className="flex items-center gap-1 font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        Live sync with 5 members
      </span>
</div>
</footer>
<div className="fixed inset-0 z-50 flex items-end justify-center bg-inverse-surface/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-200" id="composer-modal">
<div className="w-full max-w-lg bg-surface-container-lowest rounded-t-2xl p-margin shadow-2xl flex flex-col gap-space-md translate-y-full transition-transform duration-200" id="composer-content">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">edit_note</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Pin a Trip Truth</h3>
</div>
<button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant" id="close-composer-btn">
<span className="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Topic or Heading</label>
<input className="w-full h-12 px-3 rounded-xl bg-surface-container-low text-on-surface font-body-md outline-none focus:bg-surface-container transition-colors" id="note-title-input" placeholder="e.g. Cottage Wi-Fi code / Driver name" type="text"/>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Essential Details</label>
<textarea className="w-full p-3 rounded-xl bg-surface-container-low text-on-surface font-body-md outline-none focus:bg-surface-container transition-colors resize-none" id="note-body-input" placeholder="Key information everyone should access in one tap..." rows="3"></textarea>
</div>
<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm text-on-surface-variant">Tag Category</label>
<div className="flex items-center gap-2 overflow-x-auto py-1">
<button className="tag-select-btn px-3 py-1 rounded-full font-label-md text-label-md bg-primary text-on-primary" data-tag="Logistics" type="button">Logistics</button>
<button className="tag-select-btn px-3 py-1 rounded-full font-label-md text-label-md bg-surface-container text-on-surface" data-tag="Rooms &amp; Stay" type="button">Rooms &amp; Stay</button>
<button className="tag-select-btn px-3 py-1 rounded-full font-label-md text-label-md bg-surface-container text-on-surface" data-tag="Plans" type="button">Plans</button>
</div>
</div>
<div className="pt-2 flex items-center gap-space-sm">
<button className="flex-1 h-12 bg-primary text-on-primary rounded-xl font-title-md text-title-md font-medium active:scale-[0.98] transition-transform" id="submit-pin-btn" type="button">
          Pin to Canvas
        </button>
</div>
</div>
</div>
<div className="fixed bottom-6 inset-x-margin max-w-sm mx-auto z-50 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-lg flex items-center justify-between translate-y-16 opacity-0 pointer-events-none transition-all duration-300" id="toast">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-inverse-primary" id="toast-icon">check_circle</span>
<span className="font-body-md text-body-md text-inverse-on-surface" id="toast-text">Password copied to clipboard</span>
</div>
</div>
</div>
</main>

</>
  );
}
