<template>
  <nav class="nav sticky top-0 z-50">
    <div class="section-wrap flex items-center justify-between h-[var(--nav-h)]">

      <!-- Brand: the logo's rust chat bubble, redrawn crisp, + serif wordmark -->
      <a href="#home" class="flex items-center gap-2.5 group" aria-label="BeChatty, home">
        <span class="brand-mark shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg]" aria-hidden="true">
          <span class="chat-dots"><i></i><i></i><i></i></span>
        </span>
        <span class="brand-word text-[1.5rem] leading-none">
          <span class="italic text-terra">Be</span><span class="text-walnut">Chatty</span>
        </span>
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="nav-link text-sm"
            :class="{ 'nav-link--active': activeId === link.href.slice(1) }"
            :aria-current="activeId === link.href.slice(1) ? 'true' : undefined"
          >{{ t(link.en, link.pl) }}</a>
        </li>
      </ul>

      <!-- Right: language + CTA + mobile toggle -->
      <div class="flex items-center gap-3">
        <div class="lang-toggle" role="group" aria-label="Language">
          <button
            v-for="lang in ['pl','en']" :key="lang"
            @click="setLang(lang)"
            class="lang-btn"
            :class="currentLang === lang ? 'lang-btn--active' : ''"
            :aria-pressed="currentLang === lang ? 'true' : 'false'"
          >{{ lang.toUpperCase() }}</button>
        </div>
        <a href="#contact" class="btn-primary btn-sm hidden sm:inline-flex">{{ t('Book a trial lesson', 'Umów lekcję próbną') }}</a>
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden p-2 -mr-2 border-none bg-transparent text-xl cursor-pointer text-walnut"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="mobile-nav"
        >
          <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <transition name="menu-slide">
      <div v-show="menuOpen" id="mobile-nav" class="md:hidden mobile-menu px-[var(--gutter)] pt-3 pb-5">
        <div class="flex flex-col">
          <a
            v-for="link in navLinks" :key="link.href"
            :href="link.href"
            @click="menuOpen = false"
            class="mobile-link flex items-center justify-between py-3 px-1 font-semibold text-sm"
            :class="activeId === link.href.slice(1) ? 'text-terra-deep' : 'text-ink'"
            :aria-current="activeId === link.href.slice(1) ? 'true' : undefined"
          >
            {{ t(link.en, link.pl) }}
            <i class="fas fa-arrow-right text-xs" :class="activeId === link.href.slice(1) ? 'text-terra-deep' : 'text-ink-mute'" aria-hidden="true"></i>
          </a>
        </div>
        <a href="#contact" @click="menuOpen = false" class="btn-primary btn-sm w-full mt-4">
          {{ t('Book a trial lesson', 'Umów lekcję próbną') }}
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
const activeId = ref('home')

const navLinks = [
  { href: '#about',    en: 'About',        pl: 'O mnie'        },
  { href: '#lessons',  en: 'How it works', pl: 'Jak to działa' },
  { href: '#services', en: 'Pricing',      pl: 'Cennik'        },
  { href: '#reviews',  en: 'Reviews',      pl: 'Opinie'        },
  { href: '#contact',  en: 'Contact',      pl: 'Kontakt'       },
]

let spy = null
onMounted(() => {
  const ids = ['home', 'about', 'lessons', 'services', 'reviews', 'contact']
  spy = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) activeId.value = e.target.id }),
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  )
  ids.forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el) })
})
onUnmounted(() => { spy?.disconnect() })
</script>

<style scoped>
/* Flat print bar: solid linen, firm walnut rule. No glass, no shadow. */
.nav {
  background: var(--linen);
  border-bottom: 2px solid var(--rule);
}

/* The wordmark speaks in the logo's serif voice */
.brand-word {
  font-family: var(--font-display);
  font-optical-sizing: auto;
  font-weight: 640; letter-spacing: -0.02em;
}
.brand-word .italic { font-weight: 500; color: var(--terra-mid); }  /* pastel coral is too pale at wordmark size */

/* the rust speech bubble from the logo mark (round: it's conversation) */
.brand-mark {
  display: inline-flex; align-items: center; justify-content: center;
  width: 36px; height: 32px;
  border-radius: 11px 11px 11px 3px;
  background: var(--terra);
  color: var(--linen);
}
.brand-mark .chat-dots { font-size: 0.72rem; }

.mobile-menu { background: var(--linen); border-top: 1.5px solid var(--rule); }
.mobile-link + .mobile-link { border-top: 1px solid var(--line); }
</style>
