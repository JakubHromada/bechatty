<template>
  <section id="services" class="py-24 bg-linen">
    <div class="section-wrap">

      <div class="q-head" v-reveal>
        <h2 class="text-ink">{{ t('Types of classes', 'Rodzaje zajęć') }}</h2>
      </div>

      <div class="flex flex-wrap gap-2 mt-6" v-reveal>
        <span v-for="f in facts" :key="f.en" class="stamp"><i :class="f.icon" class="text-[0.7rem]" aria-hidden="true"></i>{{ t(f.en, f.pl) }}</span>
      </div>

      <!-- One honest price board: three services, ruled apart, prices in ink -->
      <div class="board mt-12" v-reveal>
        <article
          v-for="(svc, k) in services" :key="k"
          class="board-col" :class="{ 'board-col--featured': svc.featured }"
        >
          <div class="flex items-center gap-3 flex-wrap">
            <h3 class="text-[1.5rem] text-ink leading-tight">{{ t(svc.en.title, svc.pl.title) }}</h3>
          </div>
          <p class="text-ink-soft text-sm leading-relaxed mt-3">{{ t(svc.en.summary, svc.pl.summary) }}</p>

          <p class="font-bold text-ink text-sm mt-6 mb-2">{{ t('How lessons work', 'Jak wyglądają zajęcia') }}</p>
          <ul class="flex flex-col gap-1.5 text-sm text-ink-soft leading-relaxed">
            <li v-for="(point, j) in svc.pl.points" :key="j" class="flex items-start gap-2">
              <i class="fas fa-check mt-1 shrink-0" :style="{ color: svc.tone }" aria-hidden="true"></i>
              <span>{{ t(svc.en.points[j], point) }}</span>
            </li>
          </ul>

          <div class="flex flex-col gap-1.5 text-sm text-ink-soft mt-5">
            <p v-if="svc.pl.levels" class="flex items-center gap-2"><i class="fas fa-layer-group w-4 text-center" :style="{ color: svc.tone }" aria-hidden="true"></i><span><strong class="text-ink">{{ t('Levels', 'Poziomy') }}:</strong> {{ t(svc.en.levels, svc.pl.levels) }}</span></p>
            <p class="flex items-center gap-2"><i class="fas fa-user-friends w-4 text-center" :style="{ color: svc.tone }" aria-hidden="true"></i><span><strong class="text-ink">{{ t('Format', 'Forma') }}:</strong> {{ t(svc.en.format, svc.pl.format) }}</span></p>
            <p class="flex items-center gap-2"><i class="fas fa-clock w-4 text-center" :style="{ color: svc.tone }" aria-hidden="true"></i><span><strong class="text-ink">{{ t('Duration', 'Czas trwania') }}:</strong> {{ t(svc.en.duration, svc.pl.duration) }}</span></p>
          </div>

          <p v-if="svc.pl.note" class="note text-xs italic text-ink-soft mt-5">
            {{ t(svc.en.note, svc.pl.note) }}
          </p>

          <!-- price: revealed on demand, bottom-anchored across the board.
               #pricing (first card only) is where "Cennik" in the nav jumps to,
               so the toggle is reachable without extra scrolling. -->
          <div class="price-block" :id="k === 0 ? 'pricing' : undefined">
            <button
              class="card-toggle-btn self-start"
              @click="pricesOpen[k] = !pricesOpen[k]"
              :aria-expanded="pricesOpen[k] ? 'true' : 'false'"
            >
              <span>{{ pricesOpen[k] ? t('Hide price', 'Ukryj cenę') : t('See the price', 'Zobacz cenę') }}</span>
              <i class="fas fa-chevron-down transition-transform duration-300" :style="{ transform: pricesOpen[k] ? 'rotate(180deg)' : 'rotate(0deg)' }" aria-hidden="true"></i>
            </button>

            <div v-show="pricesOpen[k]" class="mt-4">
              <p class="price-caption">{{ t('Price per lesson', 'Cena za lekcję') }}</p>
              <template v-for="(group, gi) in svc.prices.pl" :key="gi">
                <p v-if="group.label" class="price-group">{{ t(svc.prices.en[gi].label, group.label) }}</p>
                <div v-for="(row, ri) in group.rows" :key="ri" class="price-row">
                  <span class="fmt">{{ t(svc.prices.en[gi].rows[ri].format, row.format) }}</span>
                  <span class="leader" aria-hidden="true"></span>
                  <span class="amt num">{{ t(svc.prices.en[gi].rows[ri].price, row.price) }}</span>
                </div>
              </template>
            </div>

            <a href="#contact" class="btn-primary btn-sm mt-6 self-start">
              {{ t('Book a trial lesson', 'Umów lekcję próbną') }}
              <i class="fas fa-arrow-right text-[0.8em]" aria-hidden="true"></i>
            </a>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

// Prices stay collapsed until someone asks to see them
const pricesOpen = ref([false, false, false])

const services = [
  {
    tone: 'var(--sage-deep)',
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
      note: 'For people who already have solid foundations but want to break the language barrier and start speaking freely.',
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
      note: 'Dla osób, które posiadają już solidne podstawy ale chcą przełamać barierę językową i się rozgadać.',
    },
  },
  {
    // Centre slot: the one we most want people to book, so it gets the
    // wider column and the warm background wash (see .board-col--featured).
    featured: true,
    tone: 'var(--terra-deep)',
    prices: {
      en: [ { label: null, rows: [ { format: 'Individual', price: '120 zł' }, { format: 'In pairs', price: '80 zł' }, { format: 'Small group', price: '65 zł' } ] } ],
      pl: [ { label: null, rows: [ { format: 'Indywidualnie', price: '120 zł' }, { format: 'W parach', price: '80 zł' }, { format: 'Kameralne grupy', price: '65 zł' } ] } ],
    },
    en: {
      title: 'Comprehensive English',
      summary: 'Complete English language learning, covering all key areas of the language.',
      points: [
        'Review of previous material and a short warm-up',
        'Vocabulary in context (collocations, phrasal verbs, practical everyday expressions)',
        'Listening and/or reading combined with conversation',
        'Grammar woven naturally into the topic and level',
        'Intensive speaking practice (minimum 50% of the lesson)',
        'Work with authentic, everyday language',
        'Creative homework and consolidation materials',
      ],
      levels: 'A0-C1', format: 'Individual, in pairs, or small groups', duration: '55 minutes',
      note: 'For anyone, at any level, who wants to systematically build every language skill — from solid foundations to speaking freely about advanced topics.',
    },
    pl: {
      title: 'Angielski kompleksowo',
      summary: 'Kompleksowa nauka języka angielskiego, obejmująca wszystkie kluczowe elementy języka.',
      points: [
        'Powtórka materiału z poprzednich zajęć oraz krótka rozgrzewka językowa (warm up)',
        'Wprowadzenie słownictwa w kontekście (kolokacje, czasowniki frazowe, praktyczne, codzienne wyrażenia)',
        'Rozumienie ze słuchu i/lub czytanie połączone z rozmową',
        'Niewidzialny element gramatyczny dopasowany do tematu i poziomu',
        'Intensywna praktyka mówienia (minimum 50% zajęć)',
        'Praca z autentycznym, codziennym językiem',
        'Kreatywne zadanie domowe oraz materiały utrwalające',
      ],
      levels: 'A0-C1', format: 'Indywidualnie, w parach lub w kameralnych grupach', duration: '55 minut',
      note: 'Dla osób, na każdym poziomie, które chcą systematycznie rozwijać wszystkie umiejętności językowe – od zbudowania solidnych fundamentów po swobodne mówienie na zaawansowane tematy.',
    },
  },
  {
    tone: 'var(--sage-deep)',
    prices: {
      en: [
        { label: '8th-grade exam',              rows: [ { format: 'Individual', price: '110 zł' }, { format: 'In pairs', price: '75 zł' } ] },
        { label: 'Matura (basic & extended)',    rows: [ { format: 'Individual', price: '120 zł' }, { format: 'In pairs', price: '80 zł' } ] },
        { label: 'B2 First Exam',                rows: [ { format: 'Individual', price: '140 zł' }, { format: 'In pairs', price: '90 zł' } ] },
        { label: 'C1 Advanced Exam',             rows: [ { format: 'Individual', price: '150 zł' }, { format: 'In pairs', price: '100 zł' } ] },
      ],
      pl: [
        { label: 'Egzamin ósmoklasisty',              rows: [ { format: 'Indywidualnie', price: '110 zł' }, { format: 'W parach', price: '75 zł' } ] },
        { label: 'Matura (podstawowa i rozszerzona)', rows: [ { format: 'Indywidualnie', price: '120 zł' }, { format: 'W parach', price: '80 zł' } ] },
        { label: 'Egzamin B2 First',                  rows: [ { format: 'Indywidualnie', price: '140 zł' }, { format: 'W parach', price: '90 zł' } ] },
        { label: 'Egzamin C1 Advanced',                rows: [ { format: 'Indywidualnie', price: '150 zł' }, { format: 'W parach', price: '100 zł' } ] },
      ],
    },
    en: {
      title: 'Exam English',
      summary: 'Thorough preparation for the 8th-grade exam, Matura (basic & extended), and Cambridge exams (B2 First, C1 Advanced), following a proven, structured approach.',
      points: [
        'Level diagnosis and gap identification',
        'Systematic coverage of all exam material (listening, reading, grammar, writing & speaking)',
        'Step-by-step exam task practice',
        'Detailed error analysis and exam strategy implementation',
        'Practice with past exam papers',
        'Practical tips and proven exam frameworks',
      ],
      levels: null, format: 'Individual or in pairs', duration: '55 minutes',
      note: 'We start preparation well in advance. Thanks to a well-planned process and consistent work, my students achieve great results.',
    },
    pl: {
      title: 'Angielski na egzaminie',
      summary: 'Rzetelne przygotowanie do egzaminu ósmoklasisty, matury podstawowej i rozszerzonej oraz egzaminów (B2 First, C1 Advanced) według sprawdzonego, uporządkowanego schematu.',
      points: [
        'Diagnoza poziomu i identyfikacja braków',
        'Systematyczne opracowanie całego materiału egzaminacyjnego (słuchanie, czytanie, gramatyka, pisanie i mówienie)',
        'Rozwiązywanie zadań egzaminacyjnych krok po kroku',
        'Szczegółowa analiza błędów oraz wdrażanie strategii egzaminacyjnych',
        'Praca na arkuszach z lat ubiegłych',
        'Praktyczne wskazówki i sprawdzone schematy egzaminacyjne',
      ],
      levels: null, format: 'Indywidualnie lub w parach', duration: '55 minut',
      note: 'Przygotowania zaczynamy odpowiednio wcześniej. Dzięki dobrze zaplanowanemu procesowi i konsekwentnej pracy moi uczniowie osiągają świetne wyniki.',
    },
  },
]

// Quick-scan reassurances beside the intro
const facts = [
  { icon: 'fas fa-laptop',        en: 'Online lessons',        pl: 'Lekcje online' },
  { icon: 'fas fa-comments',      en: 'Conversations',         pl: 'Konwersacje' },
  { icon: 'fas fa-book-open',     en: 'Comprehensive English',  pl: 'Angielski kompleksowo' },
  { icon: 'fas fa-file-alt',      en: 'Exams',                 pl: 'Egzaminy' },
  { icon: 'fas fa-layer-group',   en: 'Levels A1-C1',          pl: 'Poziomy A1-C1' },
]
</script>

<style scoped>
/* The board: one ruled print surface holding all three services */
.board {
  background: var(--surface);
  border: 1.5px solid var(--walnut);
  border-radius: var(--radius);
  overflow: hidden;
}
.board-col { display: flex; flex-direction: column; padding: 2rem; }
.board-col--featured { background: color-mix(in oklch, var(--sand) 42%, var(--surface)); }  /* Waffle wash marks the recommended pick */

@media (min-width: 1024px) {
  .board { display: grid; grid-template-columns: 1fr 1.12fr 1fr; }
  .board-col { padding: 2.25rem 2rem; }
  .board-col + .board-col { border-left: 1px solid var(--line); }
}
@media (max-width: 1023.9px) {
  .board-col + .board-col { border-top: 1px solid var(--line); }
}

.note {
  border-left: 3px solid var(--sage);
  padding-left: 0.85rem;
  line-height: 1.55;
}

/* Menu pricing: format … amount, dotted leader, serif numerals in rust.
   Bottom-anchored on desktop so the three price menus align across the board. */
.price-block {
  display: flex; flex-direction: column;
  margin-top: 1.75rem;
  padding-top: 1.4rem;
  border-top: 1.5px solid var(--walnut);
  scroll-margin-top: calc(var(--nav-h) + 16px);
}
@media (min-width: 1024px) { .price-block { margin-top: auto; } }
.price-caption {
  font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--ink-mute); margin-bottom: 0.35rem;
}
.price-group {
  font-size: 0.84rem; font-weight: 700; color: var(--ink);
  margin-top: 0.7rem;
}
.price-row { display: flex; align-items: baseline; gap: 0.6rem; padding: 0.4rem 0; }
.price-row .fmt { color: var(--ink-soft); font-size: 0.92rem; }
.price-row .leader {
  flex: 1; align-self: center; min-width: 1.25rem; height: 0;
  border-bottom: 1.5px dotted color-mix(in oklch, var(--ink-mute) 50%, transparent);
}
.price-row .amt { font-size: 1.15rem; white-space: nowrap; color: var(--terra-deep); }
</style>
