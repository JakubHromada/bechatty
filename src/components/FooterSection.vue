<template>
  <footer class="text-white py-12 pb-6" style="background:linear-gradient(135deg,#1e1e2e 0%,#2D3436 100%);">
    <div class="section-wrap">
      <div class="grid md:grid-cols-[2fr_1fr_1fr] gap-8 mb-8">

        <div>
          <p class="mb-2">
            <span class="font-playfair text-3xl font-bold tracking-tight">
              <span class="text-bmustard">Be</span><span style="color: #EFB8C4;">Chatty</span>
            </span>
          </p>
          <p class="text-sm leading-relaxed" style="color:#D5CFC9;">
            {{ t('Online lessons for teenagers and adults.', 'Lekcje online dla młodzieży i dorosłych.') }}
          </p>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest mb-4 text-bmustard">{{ t('Quick Links', 'Szybkie linki') }}</h4>
          <ul class="flex flex-col gap-2">
            <li v-for="link in footerLinks" :key="link.href">
              <a :href="link.href" class="text-sm transition-colors hover:text-white" style="color:#D5CFC9;">
                {{ t(link.en, link.pl) }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest mb-4 text-bmustard">{{ t('Contact', 'Kontakt') }}</h4>
          <p class="text-sm flex items-center gap-2 mb-2" style="color:#D5CFC9;">
            <i class="fas fa-envelope text-bmustard"></i> <a href="mailto:learnwithaleks@gmail.com" class="hover:text-white transition-colors">learnwithaleks@gmail.com</a>
          </p>
          <p class="text-sm flex items-center gap-2" style="color:#D5CFC9;">
            <i class="fas fa-phone text-bmustard"></i> <a href="tel:+48783433335" class="hover:text-white transition-colors">(+48) 783 433 335</a>
          </p>
        </div>

      </div>

      <div class="border-t pt-6 text-center text-xs" style="border-color:rgba(255,255,255,0.14);color:#ABA39C;">
        &copy; 2026 BeChatty. {{ t('Online English School. All rights reserved.', 'Internetowa szkoła języka angielskiego. Wszelkie prawa zastrzeżone.') }}
      </div>
      <div class="text-center text-xs italic mt-3" style="color:#ABA39C;">
        {{ t('Website built by BeChatty.', 'Strona wykonana przez BeChatty.') }}
        {{ t('Like it?', 'Podoba Ci się?') }}
        <a href="mailto:jakubhromada@gmail.com" class="hover:text-bmustard transition-colors" style="color:#D5CFC9;">
          {{ t('Get in touch', 'Skontaktuj się') }}
        </a>
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
