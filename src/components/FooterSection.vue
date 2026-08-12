<template>
  <footer class="footer pt-16 pb-8">
    <div class="section-wrap" v-reveal>

      <!-- The brand imperative, as the closing line of the conversation -->
      <p class="foot-word" aria-hidden="true">Be chatty<span class="foot-dot">.</span></p>

      <div class="grid gap-x-10 gap-y-12 md:grid-cols-12 mt-12">

        <div class="md:col-span-5">
          <p class="text-sm leading-relaxed max-w-[36ch] footer-mute">
            {{ t('Practical and professional online English lessons for teenagers and adults.', 'Praktyczne i profesjonalne lekcje angielskiego online dla młodzieży i dorosłych.') }}
          </p>
          <a href="#contact" class="btn-primary btn-sm mt-6 footer-cta">
            {{ t('Book a trial lesson', 'Umów lekcję próbną') }}
            <i class="fas fa-arrow-right text-[0.8em]" aria-hidden="true"></i>
          </a>
        </div>

        <nav class="md:col-span-3 md:col-start-7" aria-label="Footer">
          <p class="footer-label">{{ t('Explore', 'Nawigacja') }}</p>
          <ul class="flex flex-col gap-2.5 mt-4">
            <li v-for="link in footerLinks" :key="link.href">
              <a :href="link.href" class="text-sm footer-link">{{ t(link.en, link.pl) }}</a>
            </li>
          </ul>
        </nav>

        <div class="md:col-span-3 md:col-start-10">
          <p class="footer-label">{{ t('Get in touch', 'Kontakt') }}</p>
          <div class="flex flex-col gap-3 mt-4">
            <a href="mailto:bechattyschool@mail.com" class="text-sm flex items-center gap-2.5 footer-link">
              <i class="fas fa-envelope" style="color:var(--terra)" aria-hidden="true"></i>bechattyschool@mail.com
            </a>
            <a href="tel:+48783433335" class="text-sm flex items-center gap-2.5 footer-link">
              <i class="fas fa-phone" style="color:var(--terra)" aria-hidden="true"></i>(+48) 783 433 335
            </a>
            <a href="https://www.instagram.com/be_chatty/" target="_blank" rel="noopener" class="text-sm flex items-center gap-2.5 footer-link">
              <i class="fab fa-instagram" style="color:var(--terra)" aria-hidden="true"></i>@be_chatty
            </a>
          </div>
        </div>

      </div>

      <div class="footer-rule mt-14 pt-6 text-xs">
        <p class="footer-mute">&copy; 2026 BeChatty. {{ t('English language school online. All rights reserved.', 'Szkoła języka angielskiego online. Wszelkie prawa zastrzeżone.') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const footerLinks = [
  { href: '#about',    en: 'About Me', pl: 'O mnie'  },
  { href: '#lessons',  en: 'Lessons',  pl: 'Zajęcia' },
  { href: '#services', en: 'Services', pl: 'Oferta'  },
  { href: '#reviews',  en: 'Reviews',  pl: 'Opinie'  },
  { href: '#contact',  en: 'Contact',  pl: 'Kontakt' },
]
</script>

<style scoped>
/* Walnut = the rare dark anchor. Linen text, terracotta accents. Flat. */
.footer {
  color: var(--linen);
  background: var(--walnut);
  border-top: 2px solid var(--walnut-deep);
}

/* the sign-off: the brand name as an invitation, in the wordmark's voice */
.foot-word {
  font-family: var(--font-display);
  font-optical-sizing: auto;
  font-style: italic; font-weight: 500;
  font-size: clamp(2.6rem, 6vw, 4.4rem);
  line-height: 1.1; padding-bottom: 0.06em;
  letter-spacing: -0.02em;
  color: var(--linen);
}
.foot-dot { color: var(--terra); font-style: normal; }

.footer-label {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
  /* rust lifted toward linen so the small labels stay AA (~5:1) on walnut */
  color: color-mix(in oklch, var(--terra) 62%, var(--linen));
}
.footer-mute  { color: color-mix(in oklch, var(--linen) 68%, var(--walnut)); }
.footer-link  { color: color-mix(in oklch, var(--linen) 85%, var(--walnut)); transition: color .2s ease; }
.footer-link:hover { color: var(--linen); }
.footer-rule  { border-top: 1px solid color-mix(in oklch, var(--linen) 18%, transparent); }

/* the offset block flips to linen on the dark anchor */
.footer-cta { box-shadow: 3px 3px 0 0 color-mix(in oklch, var(--linen) 55%, var(--walnut)); border-color: var(--walnut-deep); }
.footer-cta:hover { box-shadow: 1.5px 1.5px 0 0 color-mix(in oklch, var(--linen) 55%, var(--walnut)); }
</style>
