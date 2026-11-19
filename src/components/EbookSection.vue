<template>
  <section id="ebook" class="py-24 ebook-band" aria-labelledby="ebook-heading">
    <div class="section-wrap">
      <div class="ebook-board" v-reveal>

        <div class="ebook-copy">
          <p class="ebook-eyebrow">{{ t('Free ebook', 'Darmowy ebook') }}</p>
          <h2 id="ebook-heading" class="ebook-title text-ink">
            {{ t('Say it in English', 'Powiedz to po angielsku') }}<span class="q">!</span>
          </h2>
          <p class="mt-5 text-ink-soft leading-relaxed max-w-[48ch]">
            {{ t(
              '25 everyday phrases that make your English sound natural, with examples, flashcards, matching games and a quiz after every chapter.',
              '25 codziennych zwrotów, dzięki którym zabrzmisz naturalnie, z przykładami, fiszkami, łączeniem w pary i quizem po każdym rozdziale.'
            ) }}
          </p>

          <div class="mt-9">
            <a href="/ebook/" class="btn-primary">
              {{ t('Get the free ebook', 'Odbierz darmowy ebook') }}
              <i class="fas fa-arrow-right text-[0.8em]" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <a href="/ebook/" class="ebook-cover" tabindex="-1" aria-hidden="true">
          <img src="/ebook/ola.jpg" alt="" width="800" height="1000" loading="lazy" decoding="async" />
          <span class="cover-tag">{{ t('25 phrases', '25 zwrotów') }}</span>
        </a>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>

<style scoped>
/* Warm waffle wash: the "featured moment" colour, set apart from the sage method band */
.ebook-band { background: color-mix(in oklch, var(--sand) 34%, var(--linen)); }

.ebook-board {
  display: grid; gap: clamp(2.5rem, 5vw, 4.5rem); align-items: center;
  grid-template-columns: minmax(0, 1fr);
}
@media (min-width: 860px) {
  .ebook-board { grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr); }
}

.ebook-eyebrow {
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--terra-deep);
}
.ebook-title {
  margin-top: 0.6rem;
  font-style: italic; font-weight: 540;
  font-size: clamp(2.1rem, 4.6vw, 3.6rem);
  line-height: 1.18; padding-bottom: 0.08em;
  letter-spacing: -0.02em;
}
.ebook-title .q { color: var(--terra-mid); }

/* The cover: Ola's photo as a printed card with the site's offset block shadow */
.ebook-cover {
  position: relative; display: block; justify-self: center;
  width: min(100%, 300px);
  border: 2px solid var(--walnut); border-radius: 22px; overflow: hidden;
  box-shadow: 8px 8px 0 0 var(--sage);
  transform: rotate(1.5deg);
  transition: transform .5s var(--ease-quint), box-shadow .5s var(--ease-quint);
}
.ebook-cover:hover { transform: rotate(0deg) translate(2px, 2px); box-shadow: 5px 5px 0 0 var(--sage); }
.ebook-cover img { display: block; width: 100%; height: auto; aspect-ratio: 4 / 5; object-fit: cover; }
.cover-tag {
  position: absolute; left: 14px; bottom: 14px;
  background: var(--linen); color: var(--ink);
  border: 1.5px solid var(--walnut); border-radius: 999px;
  padding: 0.3rem 0.85rem; font-size: 0.82rem; font-weight: 700;
}
@media (prefers-reduced-motion: reduce) {
  .ebook-cover, .ebook-cover:hover { transform: none; transition: none; }
}
</style>
