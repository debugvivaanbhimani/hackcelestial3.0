import React from 'react';

export default function ConfirmSplit() {
  return (
    <>
<header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(16,32,28,0.04)] pt-safe"><div className="h-16 px-margin flex items-center justify-between"><div className="flex items-center gap-space-sm"><button aria-label="Go Back" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span></button><img alt="GroupTrip" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VWnsHU-h7xSd0XpLiIZ5rWmXc-jjCPM0CfNt6zM2oWpAhvAxGbUe7igQqpcl2IBXCFbMGyWsOPKn2oxfNnIDx0ZWC5IKwhz99vGI3U2vCX-QurJaIRg8B3doe_7cD34KrBdFfXvuJlgVfaGlpgLYhZz52JekAzcnvhC6Wtk62ACBzqet-DEo_1KrlydBzXXNfmEdLpyUCrt2ELcbyHTirisWxZ-4d_ONWa4XUAB-YSFiR8886fhoBEdB0"/><h1 className="font-headline-sm text-headline-sm text-on-surface truncate">Expense Breakdown</h1></div><div className="flex items-center gap-space-sm"><button aria-label="Close" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" onClick={() => {}}><span className="material-symbols-outlined text-[22px]">close</span></button><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XRzHa9wiO5QNy_kmq17I6ctA3ReamWOJQFSCw2RP_5yJs1GBn4tjuyQvjddiP-T7uCrCv6zyb7ZhwIDrJ4-tcvgluSJs4j9XJmN7Nb3BFkqORrdQdAHfzYjV13F1ud1NXXUjQ0_mnT1BsMRPCLb8l1OxZQyiZx3Q-DGZi9wK6iPPWRBTpNn2cJjWYiQS0tsLNS98lTxSHGq9euK5BRoQ86Q7EE8nvl1Jw3QIEG5dfSnhrr1yM8cp6ZX0dJ"/></div></div></header><main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen"><div className="flex flex-col w-full pb-10 space-y-space-lg">
{/*  Sub-header & Voice Intelligence Cue  */}
<section className="px-margin pt-space-xs flex flex-col space-y-space-sm">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-md text-body-md text-on-surface-variant">Dinner at Malnad Bistro · ₹2,400</span>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface">
<span className="material-symbols-outlined text-[15px] text-primary" style={{"fontVariationSettings":"\"FILL\" 1"}}>graphic_eq</span>
<span className="font-label-sm text-label-sm tracking-wide">Auto-parsed from voice note</span>
</div>
</div>
</section>
{/*  Editorial Expense Summary Card  */}
<section className="px-margin">
<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex flex-col space-y-space-md">
{/*  Merchant Meta & Editorial Vignette  */}
<div className="flex items-start justify-between">
<div className="flex flex-col space-y-0.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Merchant &amp; Locale</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Malnad Forest Bistro &amp; Grill</h2>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-outline">schedule</span>
<span>Today, 8:45 PM · Dandeli Outpost</span>
</p>
</div>
<div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Warm candlelight scene of an intimate wooden forest lodge restaurant in Dandeli Western Ghats, mist outside the windows, authentic Indian clay tableware, serene editorial magazine aesthetic in earthy tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbHIA8qIqPxKZxHL3CWak08KYI9Fkv0yWFtohLcz8dDVfAlVl8fl05NzYl0Iby1bZ_AxZhxMs1TwAbXHdyV7sibeyIvmjslgACNoYHCDAjr5356xnLtbBWT5Thmrzxf6veuqIwHZ6Mwmqh5rqC3Tx-npckheaGrL1NwasET2VESY6v3QdFdgrD6uHqKxFWogS8s42CtTjLIlsMgj-ZGVx5ySrgVLN8t1QyUtlm6DfEUIlXj1gz7TvEVA"/>
</div>
</div>
<div className="h-[1px] w-full bg-surface-container-highest"></div>
{/*  Ledger Anchor Row  */}
<div className="flex items-end justify-between pt-1">
<div className="flex flex-col space-y-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Settlement Owner</span>
<div className="flex items-center gap-2">
<div className="relative w-7 h-7 rounded-full overflow-hidden shadow-sm bg-surface-container-high">
<img alt="Aisha" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XRzHa9wiO5QNy_kmq17I6ctA3ReamWOJQFSCw2RP_5yJs1GBn4tjuyQvjddiP-T7uCrCv6zyb7ZhwIDrJ4-tcvgluSJs4j9XJmN7Nb3BFkqORrdQdAHfzYjV13F1ud1NXXUjQ0_mnT1BsMRPCLb8l1OxZQyiZx3Q-DGZi9wK6iPPWRBTpNn2cJjWYiQS0tsLNS98lTxSHGq9euK5BRoQ86Q7EE8nvl1Jw3QIEG5dfSnhrr1yM8cp6ZX0dJ"/>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Aisha (You)</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Settled via UPI · Federal Bank</span>
</div>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Total Billed</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-normal">₹2,400</span>
</div>
</div>
</div>
</div>
</section>
{/*  Itemized Breakdown & Distinct Allocation  */}
<section className="px-margin flex flex-col space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-primary">receipt_long</span>
<h3 className="font-title-lg text-title-lg text-on-surface">Itemized Apportionment</h3>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">3 Items Verified</span>
</div>
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
{/*  Item 1  */}
<div className="flex flex-col space-y-1 pb-3">
<div className="flex items-start justify-between">
<span className="font-title-md text-title-md text-on-surface">Coastal Fish Curry Thali &amp; Rice <span className="font-body-md text-body-md text-on-surface-variant">(×3)</span></span>
<span className="font-currency-md text-currency-md text-on-surface tabular-nums">₹1,140</span>
</div>
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md text-on-surface-variant">Split equally across 5 members</span>
<span className="font-label-md text-label-md text-on-surface-variant tabular-nums">₹228 each</span>
</div>
</div>
<div className="h-[1px] w-full bg-surface-container-highest"></div>
{/*  Item 2  */}
<div className="flex flex-col space-y-1 pb-3">
<div className="flex items-start justify-between">
<span className="font-title-md text-title-md text-on-surface">Wood-fired Malabar Parottas &amp; Veg Stew</span>
<span className="font-currency-md text-currency-md text-on-surface tabular-nums">₹460</span>
</div>
<div className="flex items-center justify-between">
<span className="font-body-md text-body-md text-on-surface-variant">Split equally across 5 members</span>
<span className="font-label-md text-label-md text-on-surface-variant tabular-nums">₹92 each</span>
</div>
</div>
<div className="h-[1px] w-full bg-surface-container-highest"></div>
{/*  Item 3 - Highlighted Wine Split  */}
<div className="flex flex-col space-y-space-sm pt-1">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Specialty Sula Chenin Wine</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Single bottle vintage reserve</span>
</div>
<span className="font-currency-md text-currency-md text-on-surface tabular-nums">₹800</span>
</div>
{/*  Voice Memo Exception Badge  */}
<div className="rounded-xl bg-surface-container-low p-space-md flex flex-col space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="Aisha" className="w-6 h-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XRzHa9wiO5QNy_kmq17I6ctA3ReamWOJQFSCw2RP_5yJs1GBn4tjuyQvjddiP-T7uCrCv6zyb7ZhwIDrJ4-tcvgluSJs4j9XJmN7Nb3BFkqORrdQdAHfzYjV13F1ud1NXXUjQ0_mnT1BsMRPCLb8l1OxZQyiZx3Q-DGZi9wK6iPPWRBTpNn2cJjWYiQS0tsLNS98lTxSHGq9euK5BRoQ86Q7EE8nvl1Jw3QIEG5dfSnhrr1yM8cp6ZX0dJ"/>
<img className="w-6 h-6 rounded-full object-cover" data-alt="Candid daylight portrait of Amit, a thoughtful Indian man in his late 20s with spectacles and a soft warm linen shirt, relaxed vacation lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd-gQhBv_v9Z2B0G8evjzxMAE3zN-U3ko5xPqb97OYyPj8bx6UoXYcOwaRkIQjdJtgkPmgZYiz31W8PRt4rXyAL7Ieu3md9_7ijWeuLpfJ3SWPqjRqQ3x6AqQrCBcIjAgwFiC8S-rKjs9nfOmOwEyLdHIELNSVwZHdtGspaapYKXReoJMytgypT73VPCigqmUq3Sv1Vuf80bhX-6iOL1MXsK8Lp2zzqgJhGDnvwL9fez1_w3vwe3Hzkg"/>
</div>
<span className="font-title-md text-title-md text-on-surface italic">“Wine split between Aisha and Amit”</span>
</div>
<span className="px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm">Selective</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            ₹400 allocated to Aisha, ₹400 allocated to Amit. Excluded from Rohan, Priya, and Neha.
          </p>
</div>
</div>
</div>
</section>
{/*  Individual Member Contributions  */}
<section className="px-margin flex flex-col space-y-space-md">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<h3 className="font-title-lg text-title-lg text-on-surface">Member Balance Summary</h3>
<span className="font-label-sm text-label-sm text-on-surface-variant">5 participant ledger records</span>
</div>
<div className="inline-flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span className="font-label-md text-label-md">Reconciled ₹2,400</span>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl divide-y divide-surface-container-highest shadow-sm">
{/*  Aisha (You)  */}
<div className="p-space-md flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img alt="Aisha" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1XRzHa9wiO5QNy_kmq17I6ctA3ReamWOJQFSCw2RP_5yJs1GBn4tjuyQvjddiP-T7uCrCv6zyb7ZhwIDrJ4-tcvgluSJs4j9XJmN7Nb3BFkqORrdQdAHfzYjV13F1ud1NXXUjQ0_mnT1BsMRPCLb8l1OxZQyiZx3Q-DGZi9wK6iPPWRBTpNn2cJjWYiQS0tsLNS98lTxSHGq9euK5BRoQ86Q7EE8nvl1Jw3QIEG5dfSnhrr1yM8cp6ZX0dJ"/>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-title-md text-title-md text-on-surface">Aisha (You)</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">Primary</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Meal ₹320 + Wine ₹400</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-currency-md text-currency-md text-on-surface tabular-nums">₹720</span>
<span className="font-label-sm text-label-sm text-primary">Settling from personal pool</span>
</div>
</div>
{/*  Amit  */}
<div className="p-space-md flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Candid daylight portrait of Amit, a thoughtful Indian man in his late 20s with spectacles and a soft warm linen shirt, relaxed vacation lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9fYQsPNEDMbqQYRBIYCmUMXqtC1iNEIsrnBWHH5ZL9XPc97ymo7gd0gnEdxDeZFcwXv9IlxEFjUhDI83dlskyuthwhGVOaCmAsSJ61LZA-JQOWEXGR2TUTqM7XwdJmO45cUAi3CwdyRO2y64WGYZGtekjnfSdfI_u3poRMz-WnfdMlzF46TP9YuZP5Q1ieyB7eQGWs4rrUpR1mEe9iyASwkIfzjW36qz2OCCn0z5FWPBbpaT2bnm9cg"/>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Amit Sharma</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Meal ₹320 + Wine ₹400</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-currency-md text-currency-md text-on-surface tabular-nums">₹720</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Approved</span>
</div>
</div>
{/*  Rohan  */}
<div className="p-space-md flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Portrait of Rohan, a joyful Indian man in his 20s outdoors in Dandeli nature park, gentle morning sunlight and serene expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUau-ong1EPw22Ryvi5BcKFBxPFnYzcxv3xRgxfley3X__SW8qjSsFpnZ04D5wG76asVyUQ0MZWQL5NYEcnMHhGxyLgl6wNJ7nPxjn8av4I2YxB5_aLw9HilkcjLDADBrScEjbphmHAZMnb0J4JaxxVh5o9NljwExlk1No_JuAu8IsOAk-e4UfQH9u8JmnRzD7NWrjpIptXXhKxRsbEutvhgLrk2pcaiQpMfjO64QBVLjN1ExhWq7-aw"/>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Rohan Sen</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Base meal only</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-currency-md text-currency-md text-on-surface tabular-nums">₹320</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Approved</span>
</div>
</div>
{/*  Priya  */}
<div className="p-space-md flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Portrait of Priya, a relaxed Indian woman traveler enjoying coffee in the Western Ghats, authentic editorial travel photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9-HystSY3bWecRPRgRjqLfuoxpYvCqYwiEGG1AIH7aNgQE625x6MHhxFmfiXiUOgzdW4IcKhVDhXzvFWFrgbHoiHrv3sSfI7cwqqFCWxkHxWosiku7WbZZHw4-x6qwmifqwiKWYfyTB4x-QPe7gffad4fFvWLu2i5MYabbaAgt-fAufzzuZmWbfvRcTTu6GxxYT079nLu2OOJAAfH7lHyth0nKBBCfjQRZajPl3NorhASZ7pJ3TE72Q"/>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Priya Desai</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Base meal only</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-currency-md text-currency-md text-on-surface tabular-nums">₹320</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Approved</span>
</div>
</div>
{/*  Neha  */}
<div className="p-space-md flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Portrait of Neha, a cheerful Indian woman smiling naturally against a rustic stone cottage backdrop in the monsoon lush woods" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOUkNdOuipESz8IEOSmHfR0odtXWqcXbuObofWv3HDS724BDJ7BrGzpjku9aUuuSZKJaYbWgrRcZwlcG1f0DLdOAolGoniB3tvnKaUTpc6S-P9MYBFEm5vmlGT1XuqLpVioIDCyi14ibhX7WtZTMNOc9cBbLI7LC9CMqE98WX3w-AQQGKD626ySbYKj0_qeCENTYqM0AdhJmALC1mbzm5jqLhNtDstuCqwhpwnbF14jIhAAgKbLr-tXg"/>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Neha Kulkarni</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Base meal only</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-currency-md text-currency-md text-on-surface tabular-nums">₹320</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Approved</span>
</div>
</div>
</div>
</section>
{/*  Editorial Calm Budget Insight  */}
<section className="px-margin">
<div className="rounded-xl bg-surface-container p-space-lg shadow-sm flex items-start gap-space-md">
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[22px] text-primary">eco</span>
</div>
<div className="flex flex-col space-y-1">
<h4 className="font-title-md text-title-md text-on-surface">
          ₹2,400 left in food, about ₹600 a day for the four of you still here.
        </h4>
<p className="font-body-md text-body-md text-on-surface-variant">
          Based on 4 remaining meal windows in Dandeli. Shared escrow remains healthy and on schedule.
        </p>
</div>
</div>
</section>
{/*  Interactive Affirmation & CTA Dock  */}
<section className="px-margin flex flex-col space-y-space-md pt-2">
<button className="w-full h-12 bg-primary-container text-on-primary rounded-xl font-title-md text-title-md flex items-center justify-center gap-2 shadow-sm active:scale-[0.99] transition-all" id="save-expense-btn">
<span>Save expense</span>
<span className="material-symbols-outlined text-[20px]">check</span>
</button>
<div className="flex justify-center pb-2">
<button className="font-label-md text-label-md text-on-surface-variant hover:text-on-surface underline decoration-outline-variant underline-offset-4 transition-colors">
        Edit line items &amp; tax
      </button>
</div>
</section>

</div></main>
</>
  );
}
