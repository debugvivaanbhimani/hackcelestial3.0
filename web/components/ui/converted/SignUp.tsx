"use client";
import React from 'react';

export default function SignUp() {
  return (
    <>
<main className="flex-1 w-full bg-surface pt-safe pb-safe"><div className="flex flex-col w-full relative overflow-hidden select-none" style={{"minHeight":"calc(100vh - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px))"}}>
{/*  Full-bleed Misty Rainforest Background Layer  */}
<div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{"backgroundImage":"url(\"https"}}></div>
{/*  Multi-layered Filmic Scrim for Poetic Depth & Contrast  */}
<div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/30 via-inverse-surface/40 to-inverse-surface/95 pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-inverse-surface via-inverse-surface/80 to-transparent pointer-events-none"></div>
{/*  Foreground Content Layout  */}
<div className="relative z-10 flex flex-col justify-between w-full h-full px-margin py-space-lg flex-1">
{/*  Top Bar: Minimal Status & Brand Mark  */}
<header className="flex items-center justify-between w-full pt-space-xs">
<div className="flex items-center gap-space-xs group cursor-default">
<div className="w-8 h-8 rounded-lg overflow-hidden bg-surface-container-lowest/15 backdrop-blur-md p-1 shadow-sm flex items-center justify-center">
<img alt="GroupTrip Brand Mark" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1Wci8rD5fkEYvBkx7TMlT-mlMKjF-ia_aT3zRv4pTgsuXCjuUYndAdyxwcKyXH4QJVKzqfrwcoM3cNGLZsCXEfrHurFsmWcTf2pxpsVgW9Uo0scGTbLJobFPQGr3J4tZA4gHiQOpbLqC3ECYBb6n_ZPa5WJmhG_VxdbaUojk0bhAiRLOX-M7Cvwbjxz9trgsnBqeuQda9af_0wWPAokeRfPYahW2UrTvd4KIqQXp_vbwSPgkZ2Eeno9Oj27"/>
</div>
<span className="font-headline-sm text-headline-sm text-surface-bright/90 tracking-tight font-medium pl-1">
          GroupTrip
        </span>
</div>
{/*  Serene Ambient Pill  */}
<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-primary-fixed animate-pulse"></span>
<span className="font-label-sm text-label-sm text-surface-bright/80 font-normal tracking-wider uppercase">
          Kerala, 24°C
        </span>
</div>
</header>
{/*  Center-to-Lower Narrative Anchor  */}
<div className="flex flex-col w-full mt-auto mb-space-xl">
{/*  Ambient Archival Chip  */}
<div className="inline-flex items-center gap-2 mb-space-sm self-start">
<span className="font-label-sm text-label-sm text-surface-bright/70 uppercase tracking-widest">
          Shared Journeys • Vol. IV
        </span>
</div>
{/*  App Name / Main Title  */}
<h1 className="font-display-lg-mobile text-display-lg-mobile text-surface-bright tracking-tight leading-none mb-space-xs drop-shadow-sm font-normal">
        GroupTrip
      </h1>
{/*  Refined Tagline  */}
<p className="font-body-lg text-body-lg text-surface-bright/85 tracking-wide max-w-xs font-normal">
        Plan it together. Split it fairly.
      </p>
{/*  Delicate Horizontal Divider Indicator  */}
<div className="w-12 h-0.5 bg-surface-bright/20 rounded-full mt-space-md"></div>
</div>
{/*  Bottom Actions & Legal Microcopy  */}
<div className="flex flex-col w-full gap-space-sm pb-space-xs">
{/*  Primary Action: Continue with Google  */}
<button className="w-full h-[52px] rounded-xl bg-surface-container-lowest text-inverse-surface font-title-md text-title-md flex items-center justify-center gap-3 px-space-md active:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer" id="btn-google" type="button">
<svg aria-hidden="true" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
</svg>
<span className="tracking-normal font-semibold">Continue with Google</span>
</button>
{/*  Secondary Action: Continue with Phone  */}
<button className="w-full h-[52px] rounded-xl bg-surface-container-lowest/15 backdrop-blur-md text-surface-bright font-title-md text-title-md flex items-center justify-center gap-2.5 px-space-md active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-sm" id="btn-phone" type="button">
<span className="material-symbols-outlined text-surface-bright/90 text-[20px]">phone_iphone</span>
<span className="tracking-normal font-medium">Continue with phone</span>
</button>
{/*  Legal Microcopy  */}
<footer className="mt-space-sm text-center">
<p className="font-label-sm text-label-sm text-surface-bright/50 font-normal leading-relaxed">
          By continuing, you agree to our 
          <a className="underline underline-offset-2 text-surface-bright/70 hover:text-surface-bright transition-colors" href="#">Terms</a> 
          • 
          <a className="underline underline-offset-2 text-surface-bright/70 hover:text-surface-bright transition-colors" href="#">Privacy Policy</a>
</p>
</footer>
</div>
</div>
</div>
</main>
</>
  );
}
