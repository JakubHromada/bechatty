import { defineConfig, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        playfair: [{ name: 'Playfair Display', weights: ['400', '600', '700'] }],
        lato:     [{ name: 'Lato',             weights: ['300', '400', '700'] }],
      },
    }),
  ],

  theme: {
    colors: {
      bpink:    { DEFAULT: '#FCE4CC', dark: '#EFCAA0' },
      bsage:    { DEFAULT: '#D88098', dark: '#A24E64' },
      bmustard: { DEFAULT: '#8FA386', light: '#EAF0E6', dark: '#5C7053' },
      bsandy:   { DEFAULT: '#E8C575', light: '#FAF6E8' },
      bblush:   { DEFAULT: '#F9D5DC', dark: '#EFB8C4' },
      btext:    { DEFAULT: '#1F2426', light: '#566062' },
    },
  },

  shortcuts: {
    'btn-base':     'inline-block rounded-full px-8 py-3.5 font-lato font-bold tracking-wide cursor-pointer no-underline text-center text-sm',
    'section-wrap': 'max-w-[1100px] mx-auto px-6',
  },
})
