import { createApp } from 'vue'
import 'virtual:uno.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// v-reveal: reveal elements as they scroll into view.
// Hard rule: this is a progressive enhancement, never a content gate. Three
// failsafes guarantee content is shown even if the observer never fires
// (prerender/headless, background-tab loads, throttled callbacks, JS hiccups):
//   1. anything at/above the fold on mount reveals on the next frame
//   2. no IntersectionObserver support → reveal immediately
//   3. a global timer reveals whatever is still hidden shortly after load
const FAILSAFE_MS = 2400
const pending = new Set()

const io = typeof IntersectionObserver !== 'undefined'
  ? new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) show(e.target) }),
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    )
  : null

function show(el) {
  el.classList.add('visible')
  pending.delete(el)
  io?.unobserve(el)
}

app.directive('reveal', {
  beforeMount(el) { el.classList.add('reveal') },
  mounted(el) {
    const vh = window.innerHeight || document.documentElement.clientHeight
    // Above/at the fold, or no observer: play the entrance on the next frame
    // (rAF keeps the opacity transition; a synchronous add would skip it).
    if (!io || el.getBoundingClientRect().top < vh) {
      requestAnimationFrame(() => requestAnimationFrame(() => show(el)))
      return
    }
    pending.add(el)
    io.observe(el)
  },
  unmounted(el) { pending.delete(el); io?.unobserve(el) },
})

// Backstop: nothing stays invisible. Off-screen reveals flip silently; on-screen
// ones still animate in via the observer well before this fires. Scheduled from
// module execution (not the `load` event, which may already have fired) and
// queried straight from the DOM so even untracked nodes are caught.
function revealAll() {
  document.querySelectorAll('.reveal:not(.visible)').forEach(show)
}
setTimeout(revealAll, FAILSAFE_MS)
window.addEventListener('load', () => setTimeout(revealAll, FAILSAFE_MS))

app.mount('#app')
