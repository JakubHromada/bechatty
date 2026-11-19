<template>
  <!-- Always-on promo strip at the top of the sticky header; the whole strip is one link to the ebook -->
  <a href="/ebook/" class="ticker" :aria-label="label">
    <div class="ticker-track" aria-hidden="true">
      <div v-for="g in 2" :key="g" class="ticker-group">
        <span v-for="n in 6" :key="n" class="ticker-item">
          <b>{{ t('Get the free ebook', 'Pobierz darmowy ebook') }}</b>
          <em>„{{ t('Say it in English!', 'Powiedz to po angielsku!') }}”</em>
          <span class="ticker-spark">✦</span>
        </span>
      </div>
    </div>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const label = computed(() => t('Get the free ebook: Say it in English!', 'Pobierz darmowy ebook: Powiedz to po angielsku!'))
</script>

<style scoped>
.ticker {
  display: block; overflow: hidden;
  height: var(--bar-h);
  background: var(--walnut); color: var(--linen);
  text-decoration: none;
}
.ticker:focus-visible { outline: 2px solid var(--sun); outline-offset: -3px; }

.ticker-track {
  display: flex; width: max-content; height: 100%;
  animation: ticker-run 60s linear infinite;
}
.ticker:hover .ticker-track,
.ticker:focus-visible .ticker-track { animation-play-state: paused; }

.ticker-group { display: flex; flex: 0 0 auto; }
.ticker-item {
  display: inline-flex; align-items: center; gap: 0.7rem;
  padding-right: 1rem; white-space: nowrap;
  font-size: 1.02rem; line-height: 1;
}
.ticker-item b { font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; }
.ticker-item em {
  font-family: var(--font-display); font-style: italic; font-size: 1.08em;
  color: color-mix(in oklch, var(--linen) 82%, var(--walnut));
}
.ticker-spark { color: var(--sun); margin-left: 1rem; }

/* Two identical groups: sliding by exactly one group width loops seamlessly */
@keyframes ticker-run { to { transform: translateX(-50%); } }

/* The strip always moves (owner's call); for visitors who asked for less motion it just drifts slower */
@media (prefers-reduced-motion: reduce) {
  .ticker-track { animation-duration: 120s !important; }
}
</style>
