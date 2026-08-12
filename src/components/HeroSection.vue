<template>
  <section
    id="home"
    class="hero relative overflow-hidden bg-linen flex flex-col"
    @mousemove="onHeroMouseMove"
    @mouseleave="bubbles = []"
  >
    <div class="section-wrap w-full flex-1 flex flex-col justify-center pt-8 pb-10 lg:pt-6 lg:pb-8">
      <div class="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-x-16 lg:items-center">

        <!-- The teacher, in print: sharp frame, sage offset block, honest caption -->
        <figure class="hero-photo order-2 lg:order-1 lg:col-span-6" v-reveal>
          <div class="hero-photo__frame">
            <span class="hero-photo__offset" aria-hidden="true"></span>
            <span class="hero-photo__clip">
              <img
                src="/ola_image.jpg"
                :alt="t('Aleksandra Susek-Hromada, English teacher', 'Aleksandra Susek-Hromada, nauczycielka języka angielskiego')"
                class="hero-photo__img"
                width="800" height="1200"
                fetchpriority="high"
              />
            </span>
          </div>
          <figcaption class="hero-photo__cap bubble-safe">
            Aleksandra Susek-Hromada · {{ t('English teacher · owner of BeChatty', 'lektorka języka angielskiego · właścicielka BeChatty') }}
          </figcaption>
        </figure>

        <!-- The opening exchange: the answer in poster type -->
        <div class="order-1 lg:order-2 lg:col-span-6 bubble-safe">
          <h1 class="hero-title text-walnut text-[clamp(2.5rem,4.8vw,4rem)] arrive a2" v-html="t(headline.en, headline.pl)"></h1>

          <p class="mt-6 text-ink-soft text-[1.1rem] leading-relaxed max-w-[44ch] arrive a3">
            {{ t(headline.subEn, headline.subPl) }}
          </p>

          <div class="mt-9 arrive a4">
            <a href="#contact" class="btn-primary">
              {{ t('Book a trial lesson', 'Umów lekcję próbną') }}
              <i class="fas fa-arrow-right text-[0.8em]" aria-hidden="true"></i>
            </a>
          </div>
        </div>

      </div>
    </div>

    <!-- Earned credibility: a double-ruled masthead strip, pinned to the fold -->
    <div class="hero-band mt-auto bubble-safe">
      <ul class="section-wrap grid grid-cols-1 sm:grid-cols-3">
        <li v-for="s in stats" :key="s.en" class="band-item">
          <span class="band-num num">{{ s.value }}</span>
          <span class="band-label">{{ t(s.en, s.pl) }}</span>
        </li>
      </ul>
    </div>

    <!-- A word floats up wherever the cursor lingers: a small, playful
         "conversation" aside. It steps out of the way over anything
         with text of its own, so it never fights what it's near. -->
    <TransitionGroup name="bubble-pop" tag="div" class="word-bubbles" aria-hidden="true">
      <span v-for="b in bubbles" :key="b.id" class="word-bubble" :style="{ left: b.x + 'px', top: b.y + 'px' }">
        <span class="bubble-pl">{{ b.pl }}</span>
        <span class="bubble-en">{{ b.en }}</span>
      </span>
    </TransitionGroup>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const headline = {
  en: 'Speak English with <em>confidence</em>, not hesitation.',
  pl: 'Mów po angielsku <em>pewnie</em>, bez blokady.',
  subEn: 'Practical and professional online English lessons for teenagers and adults.',
  subPl: 'Praktyczne i profesjonalne lekcje angielskiego online dla młodzieży i dorosłych.',
}

const stats = [
  { value: '10+',  en: 'years of teaching', pl: 'lat doświadczenia' },
  { value: '250+', en: 'students taught',   pl: 'uczniów' },
  { value: '90%+', en: 'avg. exam results', pl: 'średnie wyniki egzaminów' },
]

// A little word floats up as the cursor moves through the hero — a nod to
// the site's whole "conversation" idea. Throttled so it stays a garnish,
// not a distraction, and it clears instantly over anything with its own
// text (see .bubble-safe) so it never sits on top of what someone's reading.
const wordPairs = [
  { pl: 'witaj',        en: 'hello' },
  { pl: 'dziękuję',     en: 'thank you' },
  { pl: 'proszę',       en: 'please' },
  { pl: 'przepraszam',  en: 'sorry' },
  { pl: 'dobry',        en: 'good' },
  { pl: 'piękny',       en: 'beautiful' },
  { pl: 'szkoła',       en: 'school' },
  { pl: 'książka',      en: 'book' },
  { pl: 'język',        en: 'language' },
  { pl: 'nauka',        en: 'learning' },
  { pl: 'słowo',        en: 'word' },
  { pl: 'zdanie',       en: 'sentence' },
  { pl: 'rozmowa',      en: 'conversation' },
  { pl: 'przyjaciel',   en: 'friend' },
  { pl: 'rodzina',      en: 'family' },
  { pl: 'praca',        en: 'work' },
  { pl: 'podróż',       en: 'journey' },
  { pl: 'marzenie',     en: 'dream' },
  { pl: 'sukces',       en: 'success' },
  { pl: 'pewność',      en: 'confidence' },
  { pl: 'wiedza',       en: 'knowledge' },
  { pl: 'uczyć się',    en: 'to learn' },
  { pl: 'mówić',        en: 'to speak' },
  { pl: 'słuchać',      en: 'to listen' },
  { pl: 'pisać',        en: 'to write' },
  { pl: 'czytać',       en: 'to read' },
  { pl: 'rozumieć',     en: 'to understand' },
  { pl: 'pytanie',      en: 'question' },
  { pl: 'odpowiedź',    en: 'answer' },
  { pl: 'lekcja',       en: 'lesson' },
  { pl: 'nauczyciel',   en: 'teacher' },
  { pl: 'uczeń',        en: 'student' },
  { pl: 'egzamin',      en: 'exam' },
  { pl: 'świat',        en: 'world' },
  { pl: 'czas',         en: 'time' },
  { pl: 'dom',          en: 'home' },
  { pl: 'miłość',       en: 'love' },
  { pl: 'szczęście',    en: 'happiness' },
]

const bubbles = ref([])
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
let nextId = 0
let lastSpawn = 0
let lastX = 0
let lastY = 0
let lastIndex = -1

function onHeroMouseMove(e) {
  if (reduceMotion) return

  if (e.target.closest('.bubble-safe')) {
    if (bubbles.value.length) bubbles.value = []
    return
  }

  const now = Date.now()
  if (now - lastSpawn < 450) return
  if (Math.hypot(e.clientX - lastX, e.clientY - lastY) < 35) return
  lastSpawn = now
  lastX = e.clientX
  lastY = e.clientY

  let idx
  do { idx = Math.floor(Math.random() * wordPairs.length) } while (idx === lastIndex)
  lastIndex = idx
  const pair = wordPairs[idx]

  const rect = e.currentTarget.getBoundingClientRect()
  const x = e.clientX - rect.left + (Math.random() - 0.5) * 90 - 50
  const y = e.clientY - rect.top - 60

  const id = nextId++
  bubbles.value.push({ id, x, y, pl: pair.pl, en: pair.en })
  setTimeout(() => { bubbles.value = bubbles.value.filter(b => b.id !== id) }, 2500)
}
</script>

<style scoped>
/* The hero owns the whole first screen: viewport height minus the sticky
   nav. min-height (not height) so short viewports still fit the content;
   dvh keeps mobile address bars from causing layout jumps. */
.hero { min-height: calc(100vh - var(--nav-h)); min-height: calc(100dvh - var(--nav-h)); }

.hero-title { font-weight: 580; line-height: 1.06; letter-spacing: -0.024em; }

/* the emphasis word is "marked" with a soft terracotta stroke — the teacher's
   pen, not a highlighter. Drawn as an SVG so it keeps a hand-made curve. */
.hero-title :deep(em) {
  font-style: italic; font-weight: 520; color: var(--terra-mid);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 14' preserveAspectRatio='none'%3E%3Cpath d='M3 9 C 55 3.5, 150 3, 197 7.5' fill='none' stroke='%23D96828' stroke-width='3.2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0 94%;
  background-size: 100% 0.32em;
  padding-bottom: 0.09em;
}

/* ── The photo block: sharp, ruled, offset in sage ── */
.hero-photo { max-width: calc(27rem + 20px); margin-inline: auto; }
@media (min-width: 1024px) {
  /* fills its (now wider) column, left-aligned toward the centre gap */
  .hero-photo { max-width: calc(30rem + 20px); margin-inline: 0 auto; }
  /* On shorter laptop screens a width-driven photo can outgrow the
     viewport and push the stats band below the fold. Cap it against
     the space actually left after the nav, section padding, figure
     caption and band, so the band always stays on the first screen. */
  .hero-photo__clip { max-height: calc(100dvh - var(--nav-h) - 190px); }
}
.hero-photo__frame { position: relative; width: fit-content; }
.hero-photo__offset {
  position: absolute; inset: 0; z-index: 0;
  transform: translate(14px, 14px);
  background: var(--sage);
  border-radius: var(--radius);
}
.hero-photo__clip {
  position: relative; z-index: 1;
  display: block; width: auto; aspect-ratio: 3368 / 6000; overflow: hidden;
  border: 1.5px solid var(--walnut);
  border-radius: var(--radius);
}
.hero-photo__img {
  width: 100%; height: 100%;
  /* the source is a tall portrait already framed on her face; top-anchor
     the crop so the crop trims off the desk/laptop below rather than
     her head */
  object-fit: cover; object-position: 50% 0%;
}
.hero-photo__cap {
  margin-top: 1.4rem;
  font-size: 0.62rem; color: var(--ink-mute);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
@media (min-width: 1024px) {
  .hero-photo__cap { font-size: 0.78rem; }
}

/* ── Proof strip: double-ruled, serif numerals ── */
.hero-band {
  border-top: 2px solid var(--rule);
  border-bottom: 2px solid var(--rule);
  background: var(--bg-alt);
}
.band-item {
  display: flex; align-items: baseline; gap: 0.75rem;
  padding: 1.15rem 0;
}
.band-num { font-size: clamp(1.9rem, 3vw, 2.4rem); line-height: 1; color: var(--terra-deep); }
.band-label { font-size: 0.92rem; line-height: 1.3; color: var(--ink-soft); font-weight: 500; }
@media (min-width: 640px) {
  .band-item { justify-content: center; }
  .band-item + .band-item { border-left: 1.5px solid var(--rule); }
}
@media (max-width: 639.9px) {
  .band-item + .band-item { border-top: 1px solid var(--line); }
}

/* the exchange unfolds in sequence */
.arrive { animation: arrive .6s var(--ease-expo) both; }
.a2 { animation-delay: .5s; }
.a3 { animation-delay: .7s; }
.a4 { animation-delay: .85s; }
@keyframes arrive { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }

@media (prefers-reduced-motion: reduce) {
  .arrive { animation: none; }
}

/* ── Mouse-trail word bubbles: a hero-only aside, never over text ── */
.word-bubbles { position: absolute; inset: 0; pointer-events: none; z-index: 30; }
.word-bubble {
  position: absolute;
  background: var(--surface);
  border: 1.5px solid var(--terra);
  border-radius: var(--radius-bubble);
  padding: 0.5rem 1rem 0.6rem;
  box-shadow: 0 6px 18px color-mix(in oklch, var(--walnut) 16%, transparent),
              0 2px 6px color-mix(in oklch, var(--walnut) 10%, transparent);
  text-align: center;
  white-space: nowrap;
  animation: bubbleFloat 2.5s var(--ease-quint) forwards;
}
.word-bubble::after {
  content: '';
  position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%);
  width: 0; height: 0;
  border-left: 8px solid transparent; border-right: 8px solid transparent;
  border-top: 8px solid var(--surface);
}
.bubble-pl { display: block; font-size: 0.68rem; font-style: italic; color: var(--ink-mute); }
.bubble-en { display: block; font-size: 0.92rem; font-weight: 700; color: var(--ink); font-family: var(--font-display); }

@keyframes bubbleFloat {
  0%   { opacity: 0; transform: translateY(0)     scale(0.7); }
  18%  { opacity: 1; transform: translateY(-10px) scale(1);   }
  75%  { opacity: 1; transform: translateY(-22px) scale(1);   }
  100% { opacity: 0; transform: translateY(-40px) scale(0.9); }
}

/* forced early exit (cursor reached text): a quick fade, not the full float */
.bubble-pop-leave-active {
  animation: none;   /* the base float animation would otherwise keep controlling
                         opacity/transform and mask this quick exit entirely */
  transition: opacity .15s ease, transform .15s ease;
}
.bubble-pop-leave-to { opacity: 0; transform: translateY(-6px) scale(0.92); }

@media (prefers-reduced-motion: reduce) {
  .word-bubbles { display: none; }
}
</style>
