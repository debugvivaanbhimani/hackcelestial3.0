import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { "secondary": "#805600", "on-tertiary-fixed-variant": "#454557", "on-secondary-container": "#6e4900", "on-error": "#ffffff", "primary-fixed-dim": "#89d4c7", "tertiary": "#4a4a5c", "primary": "#00564c", "primary-fixed": "#a5f1e3", "surface-variant": "#d4e7e0", "surface-container": "#dff2eb", "surface-tint": "#166a5f", "on-secondary": "#ffffff", "on-tertiary": "#ffffff", "surface-dim": "#ccded7", "primary-container": "#1e6f64", "on-secondary-fixed": "#291800", "secondary-container": "#ffb638", "on-surface": "#0e1e1b", "secondary-fixed-dim": "#ffba47", "on-primary": "#ffffff", "on-tertiary-fixed": "#1a1a2a", "on-tertiary-container": "#e0dff4", "on-error-container": "#93000a", "inverse-surface": "#23342f", "surface-bright": "#ebfef6", "surface-container-highest": "#d4e7e0", "on-surface-variant": "#3f4946", "on-primary-container": "#a3efe1", "surface-container-low": "#e5f8f1", "background": "#ebfef6", "tertiary-fixed-dim": "#c6c4da", "error-container": "#ffdad6", "tertiary-fixed": "#e2e0f6", "surface-container-lowest": "#ffffff", "secondary-fixed": "#ffddb0", "error": "#ba1a1a", "inverse-on-surface": "#e2f5ee", "on-secondary-fixed-variant": "#614000", "outline": "#6f7976", "tertiary-container": "#626274", "outline-variant": "#bec9c5", "on-primary-fixed-variant": "#005047", "inverse-primary": "#89d4c7", "on-background": "#0e1e1b", "surface": "#ebfef6", "on-primary-fixed": "#00201c", "surface-container-high": "#daece5" },
      borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
      spacing: { "margin-desktop": "4rem", "space-sm": "0.5rem", "gutter-desktop": "2rem", "gutter-tablet": "1.5rem", "space-xl": "2.5rem", "space-lg": "1.5rem", "space-md": "1rem", "margin": "1.25rem", "space-xs": "0.25rem", "gutter": "1rem", "margin-tablet": "2rem" },
      fontFamily: { "display-lg-mobile": ["Playfair Display"], "body-md": ["Plus Jakarta Sans"], "title-md": ["Plus Jakarta Sans"], "headline-sm": ["Playfair Display"], "label-md": ["Plus Jakarta Sans"], "display-lg": ["Playfair Display"], "label-sm": ["Plus Jakarta Sans"], "body-lg": ["Plus Jakarta Sans"], "title-lg": ["Plus Jakarta Sans"], "currency-md": ["Plus Jakarta Sans"], "headline-md": ["Playfair Display"], "currency-display": ["Plus Jakarta Sans"], "headline-lg": ["Playfair Display"] },
      fontSize: { "display-lg-mobile": ["36px", { lineHeight: "44px", letterSpacing: "-0.01em", fontWeight: "400" }], "body-md": ["14px", { lineHeight: "22px", letterSpacing: "0.01em", fontWeight: "400" }], "title-md": ["16px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "600" }], "headline-sm": ["20px", { lineHeight: "28px", letterSpacing: "0em", fontWeight: "600" }], "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "600" }], "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "400" }], "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.06em", fontWeight: "500" }], "body-lg": ["16px", { lineHeight: "26px", letterSpacing: "0.01em", fontWeight: "400" }], "title-lg": ["18px", { lineHeight: "26px", letterSpacing: "-0.01em", fontWeight: "600" }], "currency-md": ["18px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "600" }], "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "0em", fontWeight: "500" }], "currency-display": ["32px", { lineHeight: "38px", letterSpacing: "-0.02em", fontWeight: "600" }], "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "400" }] }
    },
  },
  plugins: [],
};
export default config;
