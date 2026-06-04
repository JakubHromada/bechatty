<template>
  <nav
    class="sticky top-0 z-50 transition-shadow duration-300"
    :class="scrolled ? 'nav--scrolled' : ''"
    style="background:color-mix(in oklch, #fff 82%, transparent);backdrop-filter:blur(14px) saturate(1.1);-webkit-backdrop-filter:blur(14px) saturate(1.1);border-bottom:1px solid var(--line)"
  >
    <div class="section-wrap flex items-center justify-between h-[70px]">

      <!-- Brand: real logo badge + wordmark echoing the mark -->
      <a href="#home" class="flex items-center gap-2.5 group" aria-label="BeChatty — home">
        <img
          src="/logo-linen.png" alt=""
          class="w-[42px] h-[42px] rounded-full shrink-0 transition-transform duration-500 group-hover:rotate-[-6deg]"
          style="box-shadow:0 3px 10px -3px rgba(74,55,40,0.28);outline:1px solid var(--line);outline-offset:-1px"
          width="42" height="42"
        />
        <span class="text-[1.45rem] font-extrabold tracking-[-0.03em] leading-none">
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
        <a href="#contact" class="btn-primary btn-sm hidden sm:inline-flex">{{ t('Book a trial', 'Umów lekcję') }}</a>
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
      <div v-show="menuOpen" id="mobile-nav" class="md:hidden bg-surface px-[var(--gutter)] pt-3 pb-5 border-t border-line">
        <div class="flex flex-col gap-1">
          <a
            v-for="link in navLinks" :key="link.href"
            :href="link.href"
            @click="menuOpen = false"
            class="flex items-center justify-between py-2.5 px-3 rounded-xl font-semibold text-sm transition-colors"
            :class="activeId === link.href.slice(1) ? 'text-sage-deep bg-sage-soft' : 'text-ink hover:bg-sage-soft/50'"
            :aria-current="activeId === link.href.slice(1) ? 'true' : undefined"
          >
            {{ t(link.en, link.pl) }}
            <i class="fas fa-chevron-right text-xs" :class="activeId === link.href.slice(1) ? 'text-sage-deep' : 'text-ink-mute'" aria-hidden="true"></i>
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
const scrolled = ref(false)

const navLinks = [
  { href: '#about',    en: 'About',        pl: 'O mnie'        },
  { href: '#lessons',  en: 'How it works', pl: 'Jak to działa' },
  { href: '#services', en: 'Pricing',      pl: 'Cennik'        },
  { href: '#reviews',  en: 'Reviews',      pl: 'Opinie'        },
  { href: '#contact',  en: 'Contact',      pl: 'Kontakt'       },
]

let spy = null
const onScroll = () => { scrolled.value = window.scrollY > 12 }
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  const ids = ['home', 'about', 'lessons', 'services', 'reviews', 'contact']
  spy = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) activeId.value = e.target.id }),
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  )
  ids.forEach(id => { const el = document.getElementById(id); if (el) spy.observe(el) })
})
onUnmounted(() => { spy?.disconnect(); window.removeEventListener('scroll', onScroll) })
</script>

<style scoped>
.nav--scrolled { box-shadow: 0 8px 30px -16px rgba(74, 55, 40, 0.28); }
</style>
