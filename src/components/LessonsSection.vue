<template>
  <section id="lessons" class="py-24 lessons-band" aria-labelledby="lessons-heading">
    <div class="section-wrap">

      <div class="q-head" v-reveal>
        <h2 id="lessons-heading" class="text-ink">{{ t('What do lessons look like', 'Jak wyglądają zajęcia') }}<span class="q">?</span></h2>
      </div>

      <p class="mt-6 text-ink-soft leading-relaxed max-w-[46ch] md:ml-auto md:text-right" v-reveal>
        {{ t('A clear path from the first meeting to visible progress. Every step is thought through, planned, and tailored to the student\'s needs.', 'Jasna droga od pierwszego spotkania do widocznych postępów. Każdy etap jest przemyślany, zaplanowany i dopasowany do potrzeb ucznia.') }}
      </p>

      <!-- Five steps, laid out as an actual staircase -->
      <ol class="steps mt-14">
        <li
          v-for="(step, i) in steps" :key="i"
          class="step" :class="{ 'step--peak': i === steps.length - 1 }"
          :style="{ '--i': i }"
          v-reveal
        >
          <span class="step-num num" aria-hidden="true">{{ i + 1 }}</span>
          <div class="step-body">
            <h3 class="text-[1.35rem] text-ink">{{ t(step.en.title, step.pl.title) }}</h3>
            <p class="text-ink-soft leading-relaxed max-w-[56ch] mt-1.5">{{ t(step.en.desc, step.pl.desc) }}</p>
          </div>
        </li>
      </ol>

      <div class="mt-14" v-reveal>
        <a href="#contact" class="btn-primary">
          {{ t('Book a trial lesson', 'Umów lekcję próbną') }}
          <i class="fas fa-arrow-right text-[0.8em]" aria-hidden="true"></i>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const steps = [
  {
    en: { title: 'Initial conversation & level assessment', desc: 'We start with a conversation about your goals, needs and a thorough diagnosis of your current language level. This multi-faceted assessment allows lessons to be precisely tailored from the very first session.' },
    pl: { title: 'Rozmowa wstępna i diagnoza poziomu',      desc: 'Współpraca rozpoczyna się od rozmowy na temat celów, potrzeb i diagnozy aktualnego poziomu językowego. Wielopłaszczyznowa ocena pozwala na precyzyjne dopasowanie zajęć już od pierwszego spotkania.' },
  },
  {
    en: { title: 'Personalised learning plan',  desc: 'Based on the diagnosis, an individual learning plan is developed: structured, goal-oriented, and tailored to your level and needs.' },
    pl: { title: 'Spersonalizowany plan nauki', desc: 'Na podstawie diagnozy opracowywany jest indywidualny plan nauki: uporządkowany, nastawiony na cel i dostosowany do poziomu oraz potrzeb.' },
  },
  {
    en: { title: 'Online lessons, convenient and effective',  desc: 'Each lesson has clearly defined didactic objectives and a well-thought-out structure based on modern teaching methods. Lessons take place online via a convenient platform, no commuting or leaving home required.' },
    pl: { title: 'Zajęcia online, wygodnie i skutecznie',     desc: 'Każda lekcja posiada jasno określone cele dydaktyczne oraz przemyślaną strukturę opartą na nowoczesnych metodach nauczania. Zajęcia odbywają się online, przez wygodną platformę, bez konieczności dojazdów lub wychodzenia z domu.' },
  },
  {
    en: { title: 'Materials & self-study',  desc: 'I create my own materials from over 10 years of teaching experience, focused on living, everyday English — natural phrases and collocations you won\'t find in a textbook. I use proven course books mainly for exam preparation, supplementing them with my own flashcards and exercises. After every lesson I send creative homework, because progress happens between lessons too.' },
    pl: { title: 'Materiały i praca własna', desc: 'Autorskie materiały tworzę na bazie ponad 10 lat doświadczenia, skupiając się na żywym, codziennym angielskim — naturalnych zwrotach i kolokacjach. Sprawdzone podręczniki wykorzystuję głównie przy przygotowaniach do egzaminów, uzupełniając je własnymi fiszkami i ćwiczeniami. Po każdej lekcji wysyłam kreatywne zadania domowe, bo postęp zachodzi też między zajęciami.' },
  },
  {
    en: { title: 'Progress monitoring & feedback',  desc: 'I regularly update you on your progress, share tips and ideas on how to learn effectively and which resources to use. I support and motivate you to keep going.' },
    pl: { title: 'Monitorowanie postępów (feedback)', desc: 'Regularnie informuję o postępach, daję wskazówki i pomysły dotyczące tego, jak efektywnie się uczyć oraz z jakich źródeł wiedzy korzystać. Wspieram i motywuję do dalszego działania.' },
  },
]
</script>

<style scoped>
/* The method lives on a soft sage wash: the brand's everyday colour at work */
.lessons-band { background: var(--sage-wash); }
.lessons-band .q-head::before { background: color-mix(in oklch, var(--walnut) 38%, transparent); }

/* Each step indents one tread further — a literal staircase of progress.
   Collapses to a flat left edge below lg. */
.steps {
  --indent: clamp(0rem, 4.5vw, 3.25rem);
  display: flex; flex-direction: column; gap: 2.6rem;
}
@media (max-width: 1023.9px) { .steps { --indent: 0rem; } }

.step {
  display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 1.4rem;
  margin-left: calc(var(--i) * var(--indent));
  max-width: 54rem;
  border-left: 4px solid var(--sage-deep);
  padding-left: clamp(1rem, 2.5vw, 1.6rem);
}
.step--peak { border-left-color: var(--terra); }

.step-num {
  font-size: clamp(2.6rem, 5vw, 3.8rem); line-height: 0.9;
  font-weight: 560; color: var(--sage-deep);
  min-width: 1.2ch;
}
.step--peak .step-num { color: var(--terra-mid); }
.step-body { padding-top: 0.3rem; }
</style>
