<template>
  <section id="lessons" class="py-24 bg-linen" aria-labelledby="lessons-heading">
    <div class="section-wrap lg:grid lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-x-16 xl:gap-x-24">

      <!-- Sticky intro rail (breaks the full-width-header pattern) -->
      <div class="lg:sticky lg:top-28 lg:self-start mb-12 lg:mb-0" v-reveal>
        <span class="eyebrow mb-4">{{ t('The method', 'Metoda') }}</span>
        <h2 id="lessons-heading" class="font-bold text-ink text-[clamp(2rem,4vw,3rem)]">
          {{ t('How I work with students', 'Jak wyglądają zajęcia ze mną?') }}
        </h2>
        <p class="mt-4 text-ink-soft leading-relaxed max-w-[42ch]">
          {{ t('A clear path from first hello to real, visible progress — every step planned, nothing left to chance.', 'Jasna droga od pierwszego „cześć” do realnych, widocznych postępów — każdy etap przemyślany, nic na przypadek.') }}
        </p>
        <a href="#contact" class="inline-flex items-center gap-2 mt-7 font-bold text-sage-deep group">
          <span class="border-b-2 border-sage/50 group-hover:border-sage-deep transition-colors pb-0.5">
            {{ t('Start with a trial lesson', 'Zacznij od lekcji próbnej') }}
          </span>
          <i class="fas fa-arrow-right text-sm transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true"></i>
        </a>
      </div>

      <!-- Steps: oversized serif numerals carry the rhythm -->
      <ol class="steps">
        <li
          v-for="(step, i) in steps" :key="i"
          class="step" :class="{ 'step--peak': i === steps.length - 1 }"
          v-reveal :style="{ transitionDelay: Math.min(i * 0.07, 0.4) + 's' }"
        >
          <div class="step-marker">
            <span class="num step-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <span v-if="i < steps.length - 1" class="step-line" aria-hidden="true"></span>
          </div>
          <div class="step-body">
            <div class="flex items-center gap-2.5 mb-1.5">
              <i :class="step.icon" class="step-icon" aria-hidden="true"></i>
              <h3 class="font-bold text-[1.2rem] text-ink">{{ t(step.en.title, step.pl.title) }}</h3>
            </div>
            <p class="text-ink-soft leading-relaxed max-w-[56ch]">{{ t(step.en.desc, step.pl.desc) }}</p>
          </div>
        </li>
      </ol>

    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const steps = [
  {
    icon: 'fas fa-handshake',
    en: { title: 'Initial conversation & level assessment', desc: 'We start with a conversation about your goals, needs and a thorough diagnosis of your current language level. This multi-faceted assessment allows lessons to be precisely tailored from the very first session.' },
    pl: { title: 'Rozmowa wstępna i diagnoza poziomu',      desc: 'Współpraca rozpoczyna się od rozmowy na temat celów, potrzeb i diagnozy aktualnego poziomu językowego. Wielopłaszczyznowa ocena pozwala na precyzyjne dopasowanie zajęć już od pierwszego spotkania.' },
  },
  {
    icon: 'fas fa-clipboard-list',
    en: { title: 'Personalised learning plan',  desc: 'Based on the diagnosis, an individual learning plan is developed: structured, goal-oriented, and tailored to your level and needs.' },
    pl: { title: 'Spersonalizowany plan nauki', desc: 'Na podstawie diagnozy opracowywany jest indywidualny plan nauki: uporządkowany, nastawiony na cel i dostosowany do poziomu oraz potrzeb.' },
  },
  {
    icon: 'fas fa-laptop',
    en: { title: 'Online lessons, convenient and effective',  desc: 'Each lesson has clearly defined didactic objectives and a well-thought-out structure based on modern teaching methods. Lessons take place online via a convenient platform, no commuting or leaving home required.' },
    pl: { title: 'Zajęcia online, wygodnie i skutecznie',     desc: 'Każda lekcja posiada jasno określone cele dydaktyczne oraz przemyślaną strukturę opartą na nowoczesnych metodach nauczania. Zajęcia odbywają się online, przez wygodną platformę, bez konieczności dojazdów lub wychodzenia z domu.' },
  },
  {
    icon: 'fas fa-pencil-alt',
    en: { title: 'Materials & self-study',  desc: 'I use original, authentic materials and proven, high-quality course books. After every lesson I send creative homework and self-study materials, because progress happens between lessons too.' },
    pl: { title: 'Materiały i praca własna', desc: 'Korzystam z autorskich i autentycznych materiałów oraz sprawdzonych, wysokiej jakości podręczników dostępnych na rynku. Po każdej lekcji wysyłam kreatywne zadania domowe oraz materiały do pracy własnej, ponieważ postęp zachodzi również między zajęciami.' },
  },
  {
    icon: 'fas fa-chart-line',
    en: { title: 'Progress monitoring & feedback',  desc: 'I regularly update you on your progress, share tips and ideas on how to learn effectively and which resources to use. I support and motivate you to keep going.' },
    pl: { title: 'Monitorowanie postępów (feedback)', desc: 'Regularnie informuję o postępach, daję wskazówki i pomysły dotyczące tego, jak efektywnie się uczyć oraz z jakich źródeł wiedzy korzystać. Wspieram i motywuję do dalszego działania.' },
  },
]
</script>

<style scoped>
.steps { display: flex; flex-direction: column; }
.step  { position: relative; display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1.25rem; padding-bottom: 2.5rem; }
.step:last-child { padding-bottom: 0; }

@media (min-width: 640px) { .step { gap: 2rem; } }

.step-marker { position: relative; display: flex; flex-direction: column; align-items: center; }
.step-num {
  font-size: clamp(2.1rem, 4vw, 2.9rem); line-height: 1;
  font-weight: 600; color: var(--sage-deep);
  font-variation-settings: 'SOFT' 6;
  transition: color .4s var(--ease-quint), transform .4s var(--ease-quint);
}
.step--peak .step-num { color: var(--cta); }
.step-line {
  flex: 1; width: 2px; margin-top: 0.6rem; border-radius: 2px;
  background: linear-gradient(var(--sage-line), color-mix(in oklch, var(--sage-line) 25%, transparent));
}
.step-icon { color: var(--sage-deep); font-size: 0.95rem; }
.step--peak .step-icon { color: var(--cta); }
.step-body { padding-top: 0.35rem; }

/* a little life: the numeral leans in as its row is hovered */
.step:hover .step-num { transform: translateY(-2px); }
</style>
