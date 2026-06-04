<template>
  <footer class="footer pt-16 pb-8">
    <div class="section-wrap relative" v-reveal>
      <div class="grid gap-x-10 gap-y-12 md:grid-cols-12">

        <!-- Brand + action: the linen logo pops on the walnut anchor -->
        <div class="md:col-span-5">
          <img src="/logo-linen.png" alt="BeChatty" class="w-[88px] h-[88px] rounded-full"
               style="box-shadow:0 10px 30px -10px rgba(0,0,0,0.5)" width="88" height="88" />
          <p class="mt-5 text-sm leading-relaxed max-w-[34ch] footer-mute">
            {{ t('Warm, professional online English lessons for teenagers and adults — exam preparation, conversation and lasting fluency.', 'Ciepłe, profesjonalne lekcje angielskiego online dla młodzieży i dorosłych — przygotowanie do egzaminów, konwersacje i trwała swoboda.') }}
          </p>
          <a href="#contact" class="btn-primary btn-sm mt-6">
            {{ t('Book a trial lesson', 'Umów lekcję próbną') }}
            <i class="fas fa-arrow-right text-[0.8em]" aria-hidden="true"></i>
          </a>
        </div>

        <!-- Quick links -->
        <nav class="md:col-span-3 md:col-start-7" aria-label="Footer">
          <p class="footer-label">{{ t('Explore', 'Nawigacja') }}</p>
          <ul class="flex flex-col gap-2.5 mt-4">
            <li v-for="link in footerLinks" :key="link.href">
              <a :href="link.href" class="text-sm footer-link">{{ t(link.en, link.pl) }}</a>
            </li>
          </ul>
        </nav>

        <!-- Contact -->
        <div class="md:col-span-3 md:col-start-10">
          <p class="footer-label">{{ t('Get in touch', 'Kontakt') }}</p>
          <div class="flex flex-col gap-3 mt-4">
            <a href="mailto:learnwithaleks@gmail.com" class="text-sm flex items-center gap-2.5 footer-link">
              <i class="fas fa-envelope" style="color:var(--terra)" aria-hidden="true"></i>learnwithaleks@gmail.com
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

      <div class="footer-rule mt-14 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs">
        <p class="footer-mute">&copy; 2026 BeChatty. {{ t('Online English School. All rights reserved.', 'Internetowa szkoła języka angielskiego. Wszelkie prawa zastrzeżone.') }}</p>
        <p class="footer-mute italic">
          {{ t('Website built by BeChatty.', 'Strona wykonana przez BeChatty.') }}
          {{ t('Like it?', 'Podoba Ci się?') }}
          <a href="mailto:jakubhromada@gmail.com" class="not-italic font-semibold footer-link" style="color:var(--linen)">
            {{ t('Get in touch', 'Skontaktuj się') }}
          </a>
        </p>
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
/* Walnut = the rare dark anchor. Linen text, terracotta accents (per colour rules). */
.footer {
  position: relative;
  color: var(--linen);
  background:
    radial-gradient(80% 120% at 90% 0%, color-mix(in oklch, var(--sage-deep) 22%, transparent), transparent 60%),
    linear-gradient(160deg, var(--walnut) 0%, var(--walnut-deep) 100%);
}
.footer-label {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
  color: color-mix(in oklch, var(--terra) 78%, var(--linen));
}
.footer-mute  { color: color-mix(in oklch, var(--linen) 62%, var(--walnut)); }
.footer-link  { color: color-mix(in oklch, var(--linen) 82%, var(--walnut)); transition: color .2s ease; }
.footer-link:hover { color: var(--linen); }
.footer-rule  { border-top: 1px solid color-mix(in oklch, var(--linen) 16%, transparent); }
</style>
