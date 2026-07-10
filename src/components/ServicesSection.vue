<template>
  <section id="services" class="py-24 bg-bg-alt">
    <div class="section-wrap">

      <!-- Header -->
      <div class="mb-12" v-reveal>
        <span class="eyebrow mb-4">{{ t('Lessons & pricing', 'Oferta i cennik') }}</span>
        <h2 class="font-bold text-ink text-[clamp(2rem,4vw,3rem)] max-w-[16ch]">{{ t('Services & Pricing', 'Oferta i cennik') }}</h2>
        <p class="mt-3 text-ink-soft leading-relaxed max-w-[58ch]">{{ t('Classes for teenagers and adults. Prices are per lesson, in zł — clear and upfront, nothing to dig for.', 'Zajęcia dla młodzieży i dorosłych. Ceny za lekcję, w zł — jasno i wprost, nic nie trzeba wyszukiwać.') }}</p>
        <div class="flex flex-wrap gap-2 mt-6">
          <span v-for="f in facts" :key="f.en" class="pill"><i :class="f.icon" class="text-[0.7rem]" aria-hidden="true"></i>{{ t(f.en, f.pl) }}</span>
        </div>
      </div>

      <div class="flex flex-col gap-8">

        <!-- Featured spotlight: Exam English -->
        <article class="card overflow-hidden" v-reveal>
          <div class="lg:grid lg:grid-cols-[0.92fr_1.08fr]">
            <!-- tinted intro panel -->
            <div class="svc-intro">
              <span class="svc-icon" :style="iconStyle(featured)" aria-hidden="true"><i :class="featured.icon"></i></span>
              <h3 class="font-bold text-[1.7rem] leading-tight text-ink mt-4">{{ t(featured.en.title, featured.pl.title) }}</h3>
              <p class="text-ink-soft leading-relaxed mt-3">{{ t(featured.en.summary, featured.pl.summary) }}</p>
              <ul class="flex flex-col gap-2 mt-5 text-sm text-ink-soft">
                <li class="flex items-center gap-2.5"><i class="fas fa-user-friends w-4 text-center text-sage-deep" aria-hidden="true"></i>{{ t(featured.en.format, featured.pl.format) }}</li>
                <li class="flex items-center gap-2.5"><i class="fas fa-clock w-4 text-center text-sage-deep" aria-hidden="true"></i>{{ t(featured.en.duration, featured.pl.duration) }}</li>
              </ul>
            </div>
            <!-- additional information -->
            <div class="p-8 lg:p-9">
              <p class="font-bold text-ink mb-3">{{ t('How lessons work', 'Jak wyglądają zajęcia') }}</p>
              <ul class="flex flex-col gap-2 text-sm text-ink-soft leading-relaxed">
                <li v-for="(point, j) in featured.pl.points" :key="j" class="flex items-start gap-2">
                  <i class="fas fa-check mt-1 shrink-0" :style="{ color: featured.tone }" aria-hidden="true"></i>
                  <span>{{ t(featured.en.points[j], point) }}</span>
                </li>
              </ul>
              <div v-if="featured.pl.note" class="flex items-start gap-2 text-xs italic px-3 py-2 rounded-lg bg-sage-soft mt-5 text-ink-soft">
                <i class="fas fa-calendar-alt mt-0.5 shrink-0" :style="{ color: featured.tone }" aria-hidden="true"></i>
                <span>{{ t(featured.en.note, featured.pl.note) }}</span>
              </div>
            </div>
          </div>

          <div class="px-8 lg:px-9 pb-8">
            <button class="card-toggle-btn" :style="{ color: featured.tone }" @click="toggle(0)" :aria-expanded="activeIndex === 0 ? 'true' : 'false'" aria-controls="svc-details-0">
              <span>{{ activeIndex === 0 ? t('Hide pricing', 'Ukryj cennik') : t('Show pricing', 'Pokaż cennik') }}</span>
              <i class="fas fa-chevron-down transition-transform duration-300" :style="{ transform: activeIndex === 0 ? 'rotate(180deg)' : 'rotate(0deg)' }" aria-hidden="true"></i>
            </button>
            <div id="svc-details-0" class="disclosure" :class="{ open: activeIndex === 0 }">
              <div class="disclosure-inner">
                <div class="pt-5 border-t border-line">
                  <p class="price-caption">{{ t('Price per lesson', 'Cena za lekcję') }}</p>
                  <template v-for="(group, gi) in featured.prices.pl" :key="gi">
                    <p v-if="group.label" class="price-group">{{ t(featured.prices.en[gi].label, group.label) }}</p>
                    <div v-for="(row, ri) in group.rows" :key="ri" class="price-row">
                      <span class="fmt">{{ t(featured.prices.en[gi].rows[ri].format, row.format) }}</span>
                      <span class="leader" aria-hidden="true"></span>
                      <span class="amt num" :style="{ color: featured.tone }">{{ t(featured.prices.en[gi].rows[ri].price, row.price) }}</span>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <a href="#contact" class="btn-primary btn-sm w-full mt-6">{{ t('Book a trial lesson', 'Umów lekcję próbną') }}</a>
          </div>
        </article>

        <!-- Supporting services -->
        <div class="grid gap-8 md:grid-cols-2">
          <article
            v-for="(svc, k) in supporting" :key="k"
            class="svc-card card card-lift overflow-hidden flex flex-col"
            v-reveal
          >
            <span class="svc-edge" :style="{ background: svc.accent }" aria-hidden="true"></span>
            <div class="p-8">
              <span class="svc-icon" :style="iconStyle(svc)" aria-hidden="true"><i :class="svc.icon"></i></span>
              <h3 class="font-bold text-xl text-ink mt-4">{{ t(svc.en.title, svc.pl.title) }}</h3>
              <p class="text-ink-soft text-sm leading-relaxed mt-2.5">{{ t(svc.en.summary, svc.pl.summary) }}</p>
              <div class="mt-5 text-sm text-ink-soft leading-relaxed flex flex-col gap-4">
                <div>
                  <p class="font-bold text-ink mb-2">{{ t('How lessons work', 'Jak wyglądają zajęcia') }}</p>
                  <ul class="flex flex-col gap-1.5">
                    <li v-for="(point, j) in svc.pl.points" :key="j" class="flex items-start gap-2">
                      <i class="fas fa-check mt-1 shrink-0" :style="{ color: svc.tone }" aria-hidden="true"></i>
                      <span>{{ t(svc.en.points[j], point) }}</span>
                    </li>
                  </ul>
                </div>
                <div class="flex flex-col gap-1.5">
                  <p v-if="svc.pl.levels" class="flex items-center gap-2"><i class="fas fa-layer-group w-4 text-center" :style="{ color: svc.tone }" aria-hidden="true"></i><span><strong class="text-ink">{{ t('Levels', 'Poziomy') }}:</strong> {{ t(svc.en.levels, svc.pl.levels) }}</span></p>
                  <p class="flex items-center gap-2"><i class="fas fa-clock w-4 text-center" :style="{ color: svc.tone }" aria-hidden="true"></i><span><strong class="text-ink">{{ t('Duration', 'Czas trwania') }}:</strong> {{ t(svc.en.duration, svc.pl.duration) }}</span></p>
                </div>
                <div v-if="svc.pl.note" class="flex items-start gap-2 text-xs italic px-3 py-2 rounded-lg bg-sage-soft">
                  <i class="fas fa-calendar-alt mt-0.5 shrink-0" :style="{ color: svc.tone }" aria-hidden="true"></i>
                  <span>{{ t(svc.en.note, svc.pl.note) }}</span>
                </div>
              </div>
            </div>
            <div class="px-8 pb-8 mt-auto">
              <button class="card-toggle-btn" :style="{ color: svc.tone }" @click="toggle(k + 1)" :aria-expanded="activeIndex === k + 1 ? 'true' : 'false'" :aria-controls="'svc-details-' + (k + 1)">
                <span>{{ activeIndex === k + 1 ? t('Hide pricing', 'Ukryj cennik') : t('Show pricing', 'Pokaż cennik') }}</span>
                <i class="fas fa-chevron-down transition-transform duration-300" :style="{ transform: activeIndex === k + 1 ? 'rotate(180deg)' : 'rotate(0deg)' }" aria-hidden="true"></i>
              </button>
              <div :id="'svc-details-' + (k + 1)" class="disclosure" :class="{ open: activeIndex === k + 1 }">
                <div class="disclosure-inner">
                  <div class="pt-5 border-t border-line">
                    <p class="price-caption">{{ t('Price per lesson', 'Cena za lekcję') }}</p>
                    <template v-for="(group, gi) in svc.prices.pl" :key="gi">
                      <p v-if="group.label" class="price-group">{{ t(svc.prices.en[gi].label, group.label) }}</p>
                      <div v-for="(row, ri) in group.rows" :key="ri" class="price-row">
                        <span class="fmt">{{ t(svc.prices.en[gi].rows[ri].format, row.format) }}</span>
                        <span class="leader" aria-hidden="true"></span>
                        <span class="amt num" :style="{ color: svc.tone }">{{ t(svc.prices.en[gi].rows[ri].price, row.price) }}</span>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <a href="#contact" class="btn-primary btn-sm w-full mt-6">{{ t('Book a trial lesson', 'Umów lekcję próbną') }}</a>
            </div>
          </article>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const activeIndex = ref(null)
function toggle(i) { activeIndex.value = activeIndex.value === i ? null : i }

const services = [
  {
    icon: 'fas fa-graduation-cap', accent: 'var(--sage-deep)', tone: 'var(--sage-deep)',
    prices: {
      en: [
        { label: '8th-grade exam',   rows: [ { format: 'Individual', price: '120 zł' }, { format: 'In pairs', price: '80 zł' } ] },
        { label: 'Matura',           rows: [ { format: 'Individual', price: '130 zł' }, { format: 'In pairs', price: '90 zł' } ] },
        { label: 'B2, C1, C2 Exams', rows: [ { format: 'Individual', price: '140 zł - 160 zł' }, { format: 'In pairs', price: '90 zł - 110 zł' } ] },
      ],
      pl: [
        { label: 'Egzamin ósmoklasisty', rows: [ { format: 'Indywidualnie', price: '120 zł' }, { format: 'W parach', price: '80 zł' } ] },
        { label: 'Matura',               rows: [ { format: 'Indywidualnie', price: '130 zł' }, { format: 'W parach', price: '90 zł' } ] },
        { label: 'Egzaminy B2, C1, C2',  rows: [ { format: 'Indywidualnie', price: '140 zł - 160 zł' }, { format: 'W parach', price: '90 zł - 110 zł' } ] },
      ],
    },
    en: {
      title: 'Exam English',
      summary: 'Thorough preparation for the 8th-grade exam, Matura (basic & extended), and Cambridge exams (B2 First, C1 Advanced, C2 Proficiency), following a proven, structured approach.',
      points: [
        'Level diagnosis and gap identification',
        'Systematic coverage of all exam material (listening, reading, grammar, writing & speaking)',
        'Step-by-step exam task practice',
        'Detailed error analysis and exam strategy implementation',
        'Practice with past exam papers',
        'Practical tips and proven exam frameworks',
      ],
      levels: null, format: 'Individual or in pairs', duration: '55 minutes',
      note: 'I recommend starting preparation 2 years before the exam, or earlier if there are significant gaps. My students preparing for exams pass them, averaging scores above 90%, the result of a well-planned process and consistent work.',
    },
    pl: {
      title: 'Angielski na egzaminie',
      summary: 'Rzetelne przygotowanie do egzaminu ósmoklasisty, matury podstawowej i rozszerzonej oraz egzaminów (B2 First, C1 Advanced, C2 Proficiency) według sprawdzonego, uporządkowanego schematu.',
      points: [
        'Diagnoza poziomu i identyfikacja braków',
        'Systematyczne opracowanie całego materiału egzaminacyjnego (słuchanie, czytanie, gramatyka, pisanie i mówienie)',
        'Rozwiązywanie zadań egzaminacyjnych krok po kroku',
        'Szczegółowa analiza błędów oraz wdrażanie strategii egzaminacyjnych',
        'Praca na arkuszach z lat ubiegłych',
        'Praktyczne wskazówki i sprawdzone schematy egzaminacyjne',
      ],
      levels: null, format: 'Indywidualnie lub w parach', duration: '55 minut',
      note: 'Polecam rozpocząć przygotowanie 2 lata przed egzaminem, a w przypadku większych zaległości, odpowiednio wcześniej. Moi uczniowie przygotowujący się do egzaminów zdają je, uzyskując wyniki średnio powyżej 90%, to efekt dobrze zaplanowanego procesu i konsekwentnej pracy.',
    },
  },
  {
    icon: 'fas fa-book-open', accent: 'var(--sage-deep)', tone: 'var(--sage-deep)',
    prices: {
      en: [ { label: null, rows: [ { format: 'Individual', price: '120 zł' }, { format: 'In pairs', price: '80 zł' }, { format: 'Small group (3-4 people)', price: '65 zł' } ] } ],
      pl: [ { label: null, rows: [ { format: 'Indywidualnie', price: '120 zł' }, { format: 'W parach', price: '80 zł' }, { format: 'Kameralne grupy (3-4 osoby)', price: '65 zł' } ] } ],
    },
    en: {
      title: 'Comprehensive English',
      summary: 'Complete English language learning for teenagers and adults, covering all key areas of the language.',
      points: [
        'Review of previous material and a short warm-up',
        'Vocabulary in context (collocations, phrasal verbs, practical everyday expressions)',
        'Listening and/or reading combined with conversation',
        'Grammar woven naturally into the topic and level',
        'Intensive speaking practice (minimum 50% of the lesson)',
        'Work with authentic, everyday language',
        'Creative homework and consolidation materials',
      ],
      levels: 'A0-C1', format: 'Individual, in pairs, or small groups (3-4 people)', duration: '55 minutes', note: null,
    },
    pl: {
      title: 'Angielski kompleksowo',
      summary: 'Kompleksowa nauka języka angielskiego dla młodzieży i dorosłych, obejmująca wszystkie kluczowe elementy języka.',
      points: [
        'Powtórka materiału z poprzednich zajęć oraz krótka rozgrzewka językowa (warm up)',
        'Wprowadzenie słownictwa w kontekście (kolokacje, czasowniki frazowe, praktyczne, codzienne wyrażenia)',
        'Rozumienie ze słuchu i/lub czytanie połączone z rozmową',
        'Niewidzialny element gramatyczny dopasowany do tematu i poziomu',
        'Intensywna praktyka mówienia (minimum 50% zajęć)',
        'Praca z autentycznym, codziennym językiem',
        'Kreatywne zadanie domowe oraz materiały utrwalające',
      ],
      levels: 'A0-C1', format: 'Indywidualnie, w parach lub w kameralnych grupach (3-4 osoby)', duration: '55 minut', note: null,
    },
  },
  {
    icon: 'fas fa-comments', accent: 'var(--terra)', tone: 'var(--terra-deep)',
    prices: {
      en: [ { label: null, rows: [ { format: 'Individual', price: '75 zł' }, { format: 'In pairs', price: '50 zł' } ] } ],
      pl: [ { label: null, rows: [ { format: 'Indywidualnie', price: '75 zł' }, { format: 'W parach', price: '50 zł' } ] } ],
    },
    en: {
      title: 'English in Practice',
      summary: 'Intensive lessons focused purely on speaking, based on a short authentic text or audio material.',
      points: [
        'Full focus on speaking, based on a text or audio recording',
        'Attentive, ongoing correction from the teacher throughout the entire lesson',
        'Developing your speech by introducing natural phrases and constructions',
        'Building confidence and breaking the speaking barrier',
        'Topics tailored to the student\'s needs, from practical, everyday situations to more complex topics for higher-level learners',
        'Concrete skills ready for immediate use',
      ],
      levels: 'A2/B1 and above', format: 'Individual or in pairs', duration: '30 minutes',
      note: 'For students who already have the basics and want to break the language barrier, or simply want to start speaking freely.',
    },
    pl: {
      title: 'Angielski w praktyce',
      summary: 'Intensywne zajęcia skoncentrowane wyłącznie na mówieniu, oparte na krótkim autentycznym tekście lub materiale audio.',
      points: [
        'Pełne skupienie na mówieniu, w oparciu o tekst lub nagranie',
        'Uważna i bieżąca korekta ze strony lektora przez cały czas trwania zajęć',
        'Rozwijanie wypowiedzi poprzez wprowadzanie naturalnych zwrotów i konstrukcji',
        'Budowanie pewności siebie i przełamywanie bariery mówienia',
        'Tematy dopasowane do potrzeb ucznia, od praktycznych, codziennych sytuacji po bardziej złożone zagadnienia dla osób na wyższych poziomach',
        'Konkretne umiejętności gotowe do natychmiastowego użycia',
      ],
      levels: 'od A2/B1', format: 'Indywidualnie lub w parach', duration: '30 minut',
      note: 'Dla osób, które posiadają podstawy i chcą przełamać barierę językową lub po prostu chcą się rozgadać.',
    },
  },
]

const featured = services[0]
const supporting = computed(() => services.slice(1))

// Quick-scan reassurances shown under the heading
const facts = [
  { icon: 'fas fa-laptop',       en: 'Online lessons',               pl: 'Lekcje online' },
  { icon: 'fas fa-layer-group',  en: 'Levels A0–C1',                 pl: 'Poziomy A0–C1' },
  { icon: 'fas fa-user-friends', en: '1-on-1, pairs or small groups', pl: 'Indywidualnie, w parach lub w grupach' },
]

// Tinted icon chip in each service's own colour
function iconStyle(svc) {
  return { background: `color-mix(in oklch, ${svc.accent} 16%, var(--surface))`, color: svc.tone }
}
</script>

<style scoped>
/* Featured spotlight: intro panel beside the disclosure (sits on the card surface) */
.svc-intro {
  padding: 2rem;
}
@media (min-width: 1024px) { .svc-intro { padding: 2.5rem; } }

/* Colour-coded icon chip */
.svc-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 3rem; height: 3rem; border-radius: 14px; font-size: 1.15rem;
  box-shadow: inset 0 0 0 1px color-mix(in oklch, currentColor 22%, transparent);
}

/* Top accent edge on the supporting cards */
.svc-card { position: relative; }
.svc-edge { position: absolute; inset: 0 0 auto 0; height: 4px; }

/* Menu-style pricing: format … amount, with a dotted leader and serif numerals */
.price-caption {
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--ink-mute); margin-bottom: 0.4rem;
}
.price-group {
  font-size: 0.82rem; font-weight: 700; color: var(--ink);
  margin-top: 0.9rem; padding-bottom: 0.15rem;
}
.price-row { display: flex; align-items: baseline; gap: 0.6rem; padding: 0.42rem 0; }
.price-row .fmt { color: var(--ink-soft); font-size: 0.92rem; }
.price-row .leader {
  flex: 1; align-self: center; min-width: 1.25rem; height: 0;
  border-bottom: 1.5px dotted color-mix(in oklch, var(--ink-mute) 50%, transparent);
}
.price-row .amt { font-size: 1.1rem; white-space: nowrap; }
</style>
