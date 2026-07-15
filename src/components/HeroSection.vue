<template>
  <section id="home" class="hero relative overflow-hidden bg-linen flex flex-col">
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
          <figcaption class="hero-photo__cap">
            Aleksandra Susek-Hromada · {{ t('English teacher', 'nauczycielka angielskiego') }}
          </figcaption>
        </figure>

        <!-- The opening exchange: the visitor's fear, then the answer in poster type -->
        <div class="order-1 lg:order-2 lg:col-span-6">
          <div class="ask arrive a1" role="img"
               :aria-label="t('A message from a learner: I understand a lot, but the moment I have to speak, I freeze.', 'Wiadomość od uczennicy: Rozumiem sporo, ale gdy mam coś powiedzieć, czuję blokadę.')">
            <p>{{ t('“I understand a lot, but the moment I have to speak, I freeze.”', '„Rozumiem sporo, ale gdy mam coś powiedzieć, czuję blokadę.”') }}</p>
            <span class="ask__who">{{ t('a student, before her first lesson', 'uczennica, przed pierwszą lekcją') }}</span>
          </div>

          <h1 class="hero-title text-walnut text-[clamp(2.5rem,4.8vw,4rem)] mt-7 arrive a2" v-html="t(headline.en, headline.pl)"></h1>

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
    <div class="hero-band mt-auto">
      <ul class="section-wrap grid grid-cols-1 sm:grid-cols-3">
        <li v-for="s in stats" :key="s.en" class="band-item">
          <span class="band-num num">{{ s.value }}</span>
          <span class="band-label">{{ t(s.en, s.pl) }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const headline = {
  en: 'Speak English with <em>confidence</em>, not hesitation.',
  pl: 'Mów po angielsku <em>pewnie</em>, bez blokady.',
  subEn: 'Personalised online lessons for teenagers and adults: exam prep, conversation, and lasting fluency.',
  subPl: 'Spersonalizowane lekcje online dla młodzieży i dorosłych: egzaminy, konwersacje i trwała swoboda.',
}

const stats = [
  { value: '10+',  en: 'years of teaching', pl: 'lat doświadczenia' },
  { value: '450+', en: 'students taught',   pl: 'uczniów' },
  { value: '90%+', en: 'avg. exam results', pl: 'średnie wyniki egzaminów' },
]
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
.hero-photo { max-width: 27rem; margin-inline: auto; }
@media (min-width: 1024px) {
  /* fills its (now wider) column, left-aligned toward the centre gap */
  .hero-photo { max-width: 34rem; margin-inline: 0 auto; }
}
.hero-photo__frame { position: relative; }
.hero-photo__offset {
  position: absolute; inset: 0; z-index: 0;
  transform: translate(14px, 14px);
  background: var(--sage);
  border-radius: var(--radius);
}
.hero-photo__clip {
  position: relative; z-index: 1;
  display: block; aspect-ratio: 4 / 5; overflow: hidden;
  border: 1.5px solid var(--walnut);
  border-radius: var(--radius);
}
.hero-photo__img {
  width: 100%; height: 100%;
  /* the 2:3 source is a wide beach shot with open sky: anchor the crop
     low, then zoom in around the subject so she carries the frame */
  object-fit: cover; object-position: 50% 88%;
  transform: scale(1.45); transform-origin: 50% 50%;
}
.hero-photo__cap {
  margin-top: 1.4rem;
  font-size: 0.85rem; color: var(--ink-mute);
}

/* ── The learner's opening message (round: it's conversation) ── */
.ask {
  display: inline-block; max-width: 36rem;
  background: var(--sage-soft);
  border: 1.5px solid var(--border-mid);
  border-radius: 4px var(--radius-bubble) var(--radius-bubble) var(--radius-bubble);
  padding: 1rem 1.3rem;
}
.ask p { font-size: 1rem; line-height: 1.55; color: var(--ink); }
.ask__who {
  display: block; margin-top: 0.4rem;
  font-size: 0.74rem; font-weight: 700; letter-spacing: 0.04em;
  color: var(--sage-deep);
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
.a1 { animation-delay: .25s; }
.a2 { animation-delay: .5s; }
.a3 { animation-delay: .7s; }
.a4 { animation-delay: .85s; }
@keyframes arrive { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }

@media (prefers-reduced-motion: reduce) {
  .arrive { animation: none; }
}
</style>
