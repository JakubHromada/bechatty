<template>
  <section id="home" class="relative overflow-hidden bg-linen">
    <div class="section-wrap pt-10 pb-14 lg:pt-14 lg:pb-16">
      <div class="flex flex-col gap-12 lg:grid lg:grid-cols-12 lg:gap-x-14 lg:items-center">

        <!-- The teacher, in print: sharp frame, sage offset block, honest caption -->
        <figure class="hero-photo order-2 lg:order-1 lg:col-span-5" v-reveal>
          <div class="hero-photo__frame">
            <span class="hero-photo__offset" aria-hidden="true"></span>
            <img
              src="/ola_image.png"
              :alt="t('Aleksandra Susek-Hromada, English teacher', 'Aleksandra Susek-Hromada, nauczycielka języka angielskiego')"
              class="hero-photo__img"
              width="820" height="1024"
              fetchpriority="high"
            />
          </div>
          <figcaption class="hero-photo__cap">
            Aleksandra Susek-Hromada · {{ t('English teacher', 'nauczycielka angielskiego') }}
          </figcaption>
        </figure>

        <!-- The opening exchange: the visitor's fear, then the answer in poster type -->
        <div class="order-1 lg:order-2 lg:col-span-7">
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

    <!-- Earned credibility: a double-ruled masthead strip -->
    <div class="hero-band">
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
.hero-title { font-weight: 580; line-height: 1.06; letter-spacing: -0.024em; }

/* the emphasis word is "marked" with a soft terracotta stroke — the teacher's
   pen, not a highlighter. Drawn as an SVG so it keeps a hand-made curve. */
.hero-title :deep(em) {
  font-style: italic; font-weight: 520; color: var(--terra);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 14' preserveAspectRatio='none'%3E%3Cpath d='M3 9 C 55 3.5, 150 3, 197 7.5' fill='none' stroke='%23C45028' stroke-width='3.2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0 94%;
  background-size: 100% 0.32em;
  padding-bottom: 0.09em;
}

/* ── The photo block: sharp, ruled, offset in sage ── */
.hero-photo { max-width: 24rem; margin-inline: auto; }
@media (min-width: 1024px) { .hero-photo { margin-inline: 0 auto; } }
.hero-photo__frame { position: relative; }
.hero-photo__offset {
  position: absolute; inset: 0; z-index: 0;
  transform: translate(14px, 14px);
  background: var(--sage);
  border-radius: var(--radius);
}
.hero-photo__img {
  position: relative; z-index: 1;
  width: 100%; height: auto; aspect-ratio: 4 / 5;
  object-fit: cover; object-position: 50% 18%;
  border: 1.5px solid var(--walnut);
  border-radius: var(--radius);
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
