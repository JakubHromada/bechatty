<template>
  <nav class="nav sticky top-0 z-50">
    <div class="section-wrap flex items-center justify-between h-[var(--nav-h)]">

      <!-- Brand: the logo's rust chat bubble, redrawn crisp, + serif wordmark -->
      <a href="#home" class="flex items-center group" aria-label="BeChatty, home">
        <img src="/logo-summer.png" alt="BeChatty" class="brand-logo transition-transform duration-500 group-hover:rotate-[-2deg]" />
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            @click="onNavClick(link)"
            class="nav-link text-base"
            :class="{ 'nav-link--active': activeId === link.spyId }"
            :aria-current="activeId === link.spyId ? 'true' : undefined"
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
            @click="onNavClick(link); menuOpen = false"
            class="mobile-link flex items-center justify-between py-3 px-1 font-semibold text-base"
            :class="activeId === link.spyId ? 'text-terra-deep' : 'text-ink'"
            :aria-current="activeId === link.spyId ? 'true' : undefined"
          >
            {{ t(link.en, link.pl) }}
            <i class="fas fa-arrow-right text-xs" :class="activeId === link.spyId ? 'text-terra-deep' : 'text-ink-mute'" aria-hidden="true"></i>
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
  { href: '#about',    spyId: 'about',    en: 'About',        pl: 'O mnie'        },
  { href: '#lessons',  spyId: 'lessons',  en: 'Offer',        pl: 'Oferta'        },
  { href: '#pricing',  spyId: 'services', en: 'Pricing',      pl: 'Cennik'        },
  { href: '#reviews',  spyId: 'reviews',  en: 'Reviews',      pl: 'Opinie'        },
  { href: '#contact',  spyId: 'contact',  en: 'Contact',      pl: 'Kontakt'       },
]

// Clicking a link (e.g. "Cennik", which jumps to #pricing near the tail
// end of the services section) can land past the mid-viewport band the
// scroll-spy watches, handing the highlight to the next section instead.
// Set the active link immediately and hold it until the jump's smooth
// scroll settles, then let the spy take back over.
let spySuppressedUntil = 0
function onNavClick(link) {
  activeId.value = link.spyId
  spySuppressedUntil = Date.now() + 1000
}

let spy = null
onMounted(() => {
  const ids = ['home', 'about', 'lessons', 'services', 'reviews', 'contact']
  spy = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting && Date.now() >= spySuppressedUntil) activeId.value = e.target.id
    }),
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

/* The logo asset: cropped to its content box, its own cream ground
   matches --linen closely enough to sit flush on the nav. */
.brand-logo { height: 64px; width: auto; display: block; }

.mobile-menu { background: var(--linen); border-top: 1.5px solid var(--rule); }
.mobile-link + .mobile-link { border-top: 1px solid var(--line); }
</style>
