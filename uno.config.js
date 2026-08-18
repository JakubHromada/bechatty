import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  // One brand family — Fraunces (loaded in index.html with its optical-size +
  // italic axes). Hierarchy comes from weight + scale + italic + optical size.
  presets: [
    presetUno(),
  ],

  theme: {
    colors: {
      // ── PALETTE: "Blue & Orange Pastel" summer palette (schemecolor.com) ──
      // Names keep their brand ROLE (sage = everyday, terra = warm peak,
      // walnut = ink anchor).
      // Hex mirrors the CSS custom properties in style.css; keep the two in sync.
      bg:      { DEFAULT: '#FAF4EA', alt: '#FDF9F2' },   // cream ground + warm-white band
      surface: '#FFFDF8',                                // lifted warm-white boards / inputs
      linen:   '#FAF4EA',

      ink:     { DEFAULT: '#2C3D54', soft: '#52616F', mute: '#5F6C7B' }, // ink-navy text scale
      sage:    { DEFAULT: '#779ECC', deep: '#3D6289', soft: '#E1EAF4' }, // Wedgwood Blue (deep = text-safe)
      terra:   { DEFAULT: '#FF985A', mid: '#D96828', deep: '#A9531F', soft: '#FFE6D4' }, // Vibrant Coral family
      walnut:  { DEFAULT: '#2C3D54', deep: '#1C2938' }, // the rare dark anchor (footer)

      line:    { DEFAULT: '#DCE1E8', soft: '#E8ECF1' }, // cool hairlines
    },
  },

  shortcuts: {
    'section-wrap': 'max-w-[1140px] mx-auto px-[var(--gutter)]',
  },
})
