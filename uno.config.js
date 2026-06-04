import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  // One brand family — Fraunces (loaded in index.html with its optical-size +
  // italic axes). Hierarchy comes from weight + scale + italic + optical size.
  presets: [
    presetUno(),
  ],

  theme: {
    colors: {
      // ── BeChatty brand palette (colour_rules.jpg), tuned for screen contrast ──
      // Hex mirrors the CSS custom properties in style.css; keep the two in sync.
      bg:      { DEFAULT: '#F7F0E8', alt: '#FFFCF6' },   // linen ground + warm-white alternating band
      surface: '#FFFCF6',                                // warm-white cards / inputs
      linen:   '#F7F0E8',

      ink:     { DEFAULT: '#4A3728', soft: '#6E5848', mute: '#7A6757' }, // walnut text scale
      sage:    { DEFAULT: '#8FA89C', deep: '#3E6253', soft: '#E2EAE3' }, // brand green (deep = text-safe)
      terra:   { DEFAULT: '#C4785A', cta: '#B25A39', deep: '#97451F', soft: '#F4E2D7' }, // peaks / CTA / ratings
      walnut:  { DEFAULT: '#4A3728', deep: '#3A2A1E' }, // the rare dark anchor (footer)

      line:    { DEFAULT: '#E7DBC9', soft: '#EFE6D7' }, // warm hairlines

      // ── Legacy aliases → remapped onto the brand palette ──
      // Components authored against the old evergreen/gold system stay correct
      // (evergreen → deep sage = structure/trust, gold → terracotta = ratings).
      evergreen: { DEFAULT: '#3E6253', deep: '#2F4C40', soft: '#8FA89C' },
      gold:      { DEFAULT: '#C4785A', text: '#97451F' },
    },
  },

  shortcuts: {
    'section-wrap': 'max-w-[1140px] mx-auto px-[var(--gutter)]',
  },
})
