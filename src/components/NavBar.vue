<template>
  <nav ref="navRef" class="sticky top-0 z-50 py-4 font-lato overflow-visible" style="background:linear-gradient(135deg,#1e1e2e 0%,#2D3436 100%); box-shadow: 0 2px 12px rgba(0,0,0,0.18);">
    <div class="section-wrap flex items-center justify-between">

      <!-- Logo -->
      <a href="#home" class="font-playfair text-3xl font-bold tracking-tight" aria-label="BeChatty home">
        <span class="text-bmustard">Be</span><span style="color: #EFB8C4;">Chatty</span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-6 lg:gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-sm font-bold tracking-wide transition-all duration-300"
            :class="link.cta ? 'nav-cta' : ['nav-link', { 'nav-link--active': activeId === link.href.slice(1) }]"
          >{{ t(link.en, link.pl) }}</a>
        </li>
      </ul>

      <!-- Right: language switcher + mobile CTA + mobile toggle -->
      <div class="flex items-center gap-3 md:gap-4">
        <!-- Language toggle -->
        <div class="lang-toggle">
          <button
            v-for="lang in ['pl','en']" :key="lang"
            @click="setLang(lang)"
            class="lang-btn"
            :class="currentLang === lang ? 'lang-btn--active' : ''"
          >{{ lang.toUpperCase() }}</button>
        </div>
        <!-- Persistent conversion CTA on mobile (desktop has it in the link row) -->
        <a href="#contact" class="md:hidden nav-cta text-xs">{{ t('Contact', 'Kontakt') }}</a>
        <button @click="menuOpen = !menuOpen" class="md:hidden border-none bg-transparent text-xl cursor-pointer text-white hover:text-bblush-dark transition-colors p-2 -mr-2" :aria-label="menuOpen ? 'Close menu' : 'Open menu'">
          <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
        </button>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <transition name="menu-slide">
      <div v-show="menuOpen" class="md:hidden bg-white px-6 pt-2 pb-5 mt-1" style="border-top: 1px solid var(--bpink-dark);">
        <a
          v-for="link in navLinks" :key="link.href"
          :href="link.href"
          @click="menuOpen = false"
          class="flex items-center justify-between py-3 font-bold text-sm text-btext hover:text-bsage transition-colors"
          style="border-bottom: 1px solid var(--bpink);"
        >
          {{ t(link.en, link.pl) }}
          <i class="fas fa-chevron-right text-xs text-bpink-dark"></i>
        </a>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { currentLang, setLang, t } = useLanguage()
const menuOpen = ref(false)
const navRef   = ref(null)
const activeId = ref('home')

const navLinks = [
  { href: '#about',    en: 'About',      pl: 'O mnie',  cta: false },
  { href: '#lessons',  en: 'Lessons',    pl: 'Zajęcia', cta: false },
  { href: '#services', en: 'Services',   pl: 'Oferta',  cta: false },
  { href: '#reviews',  en: 'Reviews',    pl: 'Opinie',  cta: false },
  { href: '#contact',  en: 'Contact Me', pl: 'Kontakt', cta: true  },
]

let spy = null

function onScroll() {
  if (navRef.value)
    navRef.value.style.boxShadow = window.scrollY > 20
      ? '0 2px 20px rgba(0,0,0,0.12)'
      : '0 2px 12px rgba(0,0,0,0.08)'
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  // Scroll-spy: highlight the nav link for the section currently in view.
  const ids = ['home', 'about', 'lessons', 'services', 'reviews', 'contact']
  spy = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) activeId.value = e.target.id }),
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  )
  ids.forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el) })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  spy?.disconnect()
})
</script>
