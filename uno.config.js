import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  // One brand family — Fraunces (loaded in index.html with its optical-size +
  // italic axes). Hierarchy comes from weight + scale + italic + optical size.
  presets: [
    presetUno(),
  ],

  theme: {
    colors: {
      // ── BeChatty brand palette — sage / linen / rust / walnut (colour_rules.jpg) ──
      // Hex mirrors the CSS custom properties in style.css; keep the two in sync.
      bg:      { DEFAULT: '#F7F0E8', alt: '#FCF8F1' },   // linen ground + warm-white band
      surface: '#FFFCF6',                                // lifted warm-white cards / inputs
      linen:   '#F7F0E8',

      ink:     { DEFAULT: '#4A3728', soft: '#6B5544', mute: '#7A6757' }, // walnut text scale
      sage:    { DEFAULT: '#8FA89C', deep: '#44615A', soft: '#E4E8E0' }, // everyday colour (deep = text-safe)
      terra:   { DEFAULT: '#C45028', deep: '#9E3D1B', soft: '#F4DDD1' }, // rust orange — peaks / CTAs / ratings
      walnut:  { DEFAULT: '#4A3728', deep: '#3B2C20' }, // the rare dark anchor (footer)

      line:    { DEFAULT: '#E6DACA', soft: '#EFE6D8' }, // warm hairlines
    },
  },

  shortcuts: {
    'section-wrap': 'max-w-[1140px] mx-auto px-[var(--gutter)]',
  },
})
