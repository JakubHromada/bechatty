<template>
  <section id="services" class="py-20 bg-bmustard-light">
    <div class="section-wrap">
      <div class="text-center mb-12">
        <h2 class="font-playfair font-bold text-[clamp(2.1rem,4.5vw,3rem)] text-btext tracking-tight">{{ t('Services & Pricing', 'Oferta i cennik') }}</h2>
        <div class="brand-divider"></div>
        <p class="text-btext-light mt-2">{{ t('Classes for teenagers and adults. Prices per lesson, in zł.', 'Zajęcia dla młodzieży i dorosłych. Ceny za lekcję, w zł.') }}</p>
      </div>

      <div class="grid md:grid-cols-3 gap-7 items-start">
        <div
          v-for="(svc, i) in services"
          :key="i"
          class="bg-white rounded-[14px] flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
          :style="{ boxShadow: 'var(--shadow)', borderTop: '4px solid ' + svc.accent }"
        >
          <div class="flex flex-col">
            <!-- Always-visible header -->
            <div class="p-8 text-center">
              <div class="w-17 h-17 rounded-full flex items-center justify-center mx-auto mb-5"
                   :style="{ background: svc.iconBg }">
                <i :class="svc.icon" class="text-2xl" :style="{ color: svc.accentText }"></i>
              </div>
              <h3 class="font-playfair font-semibold text-xl text-btext mb-3">{{ t(svc.en.title, svc.pl.title) }}</h3>
              <p class="text-btext-light text-sm leading-relaxed">{{ t(svc.en.summary, svc.pl.summary) }}</p>
            </div>

            <!-- Prices (always visible, so all three are comparable) -->
            <div class="px-8 pt-1 pb-1">
              <div class="border-t pt-3" :style="{ borderColor: svc.accent + '44' }">
                <template v-for="(group, gi) in svc.prices.pl" :key="gi">
                  <p v-if="group.label" class="text-xs font-bold uppercase tracking-wide pt-3 pb-1" :style="{ color: svc.accentText }">
                    {{ t(svc.prices.en[gi].label, group.label) }}
                  </p>
                  <div v-for="(row, ri) in group.rows" :key="ri" class="flex items-center justify-between py-2 border-b border-bpink last:border-0">
                    <span class="text-btext-light text-sm">{{ t(svc.prices.en[gi].rows[ri].format, row.format) }}</span>
                    <span class="font-bold text-sm ml-4 whitespace-nowrap" :style="{ color: svc.accentText }">{{ t(svc.prices.en[gi].rows[ri].price, row.price) }}</span>
                  </div>
                </template>
              </div>
            </div>

            <!-- Toggle button -->
            <div class="px-8 pb-6 text-center">
            <button
              @click="toggle(i)"
              class="card-toggle-btn"
              :style="{ color: svc.accentText }"
            >
              <span>{{ activeIndex === i ? t('Show less', 'Zwiń') : t('Learn more', 'Dowiedz się więcej') }}</span>
              <i
                class="fas fa-chevron-down transition-transform duration-300"
                :style="{ transform: activeIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }"
              ></i>
            </button>
            </div>
          </div><!-- end fixed-height wrapper -->

          <!-- Expandable details -->
          <div
            class="overflow-hidden transition-all duration-500 ease-in-out"
            :style="{ maxHeight: activeIndex === i ? '900px' : '0px', opacity: activeIndex === i ? '1' : '0' }"
          >
            <div class="px-8 pb-8 border-t" :style="{ borderColor: svc.accent + '44' }">
              <div class="pt-5 text-left text-sm text-btext-light leading-relaxed flex flex-col gap-4">

                <div>
                  <p class="font-bold text-btext mb-2">{{ t('How lessons work', 'Jak wyglądają zajęcia') }}</p>
                  <ul class="flex flex-col gap-1.5">
                    <li v-for="(point, j) in svc.pl.points" :key="j" class="flex items-start gap-2">
                      <i class="fas fa-check mt-0.5 shrink-0" :style="{ color: svc.accentText }"></i>
                      <span>{{ t(svc.en.points[j], point) }}</span>
                    </li>
                  </ul>
                </div>

                <div class="flex flex-col gap-1.5 pt-1">
                  <p v-if="svc.pl.levels" class="flex items-center gap-2">
                    <i class="fas fa-layer-group w-4 text-center" :style="{ color: svc.accentText }"></i>
                    <span><strong>{{ t('Levels', 'Poziomy') }}:</strong> {{ t(svc.en.levels, svc.pl.levels) }}</span>
                  </p>
                  <p class="flex items-center gap-2">
                    <i class="fas fa-user-friends w-4 text-center" :style="{ color: svc.accentText }"></i>
                    <span><strong>{{ t('Format', 'Format') }}:</strong> {{ t(svc.en.format, svc.pl.format) }}</span>
                  </p>
                  <p class="flex items-center gap-2">
                    <i class="fas fa-clock w-4 text-center" :style="{ color: svc.accentText }"></i>
                    <span><strong>{{ t('Duration', 'Czas trwania') }}:</strong> {{ t(svc.en.duration, svc.pl.duration) }}</span>
                  </p>
                </div>

                <div v-if="svc.pl.note" class="flex items-start gap-2 text-xs italic px-3 py-2 rounded-md bg-bsandy-light/60">
                  <i class="fas fa-calendar-alt mt-0.5 shrink-0" :style="{ color: svc.accentText }"></i>
                  <span>{{ t(svc.en.note, svc.pl.note) }}</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const activeIndex = ref(null)

function toggle(i) { activeIndex.value = activeIndex.value === i ? null : i }

const services = [
  {
    icon: 'fas fa-graduation-cap', accent: '#D88098', accentText: '#A24E64', iconBg: '#EDE1D3',
    prices: {
      en: [
        { label: '8th-grade exam',   rows: [ { format: 'Individual', price: '120 zł' }, { format: 'In pairs', price: '80 zł' } ] },
        { label: 'Matura',           rows: [ { format: 'Individual', price: '130 zł' }, { format: 'In pairs', price: '90 zł' } ] },
        { label: 'B2, C1, C2 Exams', rows: [ { format: 'Individual', price: '140 zł – 160 zł' }, { format: 'In pairs', price: '90 zł – 110 zł' } ] },
      ],
      pl: [
        { label: 'Egzamin ósmoklasisty', rows: [ { format: 'Indywidualnie', price: '120 zł' }, { format: 'W parach', price: '80 zł' } ] },
        { label: 'Matura',               rows: [ { format: 'Indywidualnie', price: '130 zł' }, { format: 'W parach', price: '90 zł' } ] },
        { label: 'Egzaminy B2, C1, C2',  rows: [ { format: 'Indywidualnie', price: '140 zł – 160 zł' }, { format: 'W parach', price: '90 zł – 110 zł' } ] },
      ],
    },
    en: {
      title:    'Exam English',
      summary:  'Thorough preparation for the 8th-grade exam, Matura (basic & extended), and Cambridge exams (B2 First, C1 Advanced, C2 Proficiency) — following a proven, structured approach.',
      points:   [
        'Level diagnosis and gap identification',
        'Systematic coverage of all exam material (listening, reading, grammar, writing & speaking)',
        'Step-by-step exam task practice',
        'Detailed error analysis and exam strategy implementation',
        'Practice with past exam papers',
        'Practical tips and proven exam frameworks',
      ],
      levels:   null,
      format:   'Individual or in pairs',
      duration: '55 minutes',
      note:     'I recommend starting preparation 2 years before the exam — or earlier if there are significant gaps. My students preparing for exams pass them, averaging scores above 90% — the result of a well-planned process and consistent work.',
    },
    pl: {
      title:    'Angielski na egzaminie',
      summary:  'Rzetelne przygotowanie do egzaminu ósmoklasisty, matury podstawowej i rozszerzonej oraz egzaminów (B2 First, C1 Advanced, C2 Proficiency) według sprawdzonego, uporządkowanego schematu.',
      points:   [
        'Diagnoza poziomu i identyfikacja braków',
        'Systematyczne opracowanie całego materiału egzaminacyjnego (słuchanie, czytanie, gramatyka, pisanie i mówienie)',
        'Rozwiązywanie zadań egzaminacyjnych krok po kroku',
        'Szczegółowa analiza błędów oraz wdrażanie strategii egzaminacyjnych',
        'Praca na arkuszach z lat ubiegłych',
        'Praktyczne wskazówki i sprawdzone schematy egzaminacyjne',
      ],
      levels:   null,
      format:   'Indywidualnie lub w parach',
      duration: '55 minut',
      note:     'Polecam rozpocząć przygotowanie 2 lata przed egzaminem, a w przypadku większych zaległości — odpowiednio wcześniej. Moi uczniowie przygotowujący się do egzaminów zdają je, uzyskując wyniki średnio powyżej 90% — to efekt dobrze zaplanowanego procesu i konsekwentnej pracy.',
    },
  },
  {
    icon: 'fas fa-book-open', accent: '#5C7053', accentText: '#5C7053', iconBg: '#D6DECF',
    prices: {
      en: [ { label: null, rows: [ { format: 'Individual', price: '120 zł' }, { format: 'In pairs', price: '80 zł' }, { format: 'Small group (3–4 people)', price: '65 zł' } ] } ],
      pl: [ { label: null, rows: [ { format: 'Indywidualnie', price: '120 zł' }, { format: 'W parach', price: '80 zł' }, { format: 'Kameralne grupy (3–4 osoby)', price: '65 zł' } ] } ],
    },
    en: {
      title:    'Comprehensive English',
      summary:  'Complete English language learning for teenagers and adults, covering all key areas of the language.',
      points:   [
        'Review of previous material and a short warm-up',
        'Vocabulary in context (collocations, phrasal verbs, practical everyday expressions)',
        'Listening and/or reading combined with conversation',
        'Grammar woven naturally into the topic and level',
        'Intensive speaking practice (minimum 50% of the lesson)',
        'Work with authentic, everyday language',
        'Creative homework and consolidation materials',
      ],
      levels:   'A0 – C1',
      format:   'Individual, in pairs, or small groups (3–4 people)',
      duration: '55 minutes',
      note:     null,
    },
    pl: {
      title:    'Angielski kompleksowo',
      summary:  'Kompleksowa nauka języka angielskiego dla młodzieży i dorosłych, obejmująca wszystkie kluczowe elementy języka.',
      points:   [
        'Powtórka materiału z poprzednich zajęć oraz krótka rozgrzewka językowa (warm up)',
        'Wprowadzenie słownictwa w kontekście (kolokacje, czasowniki frazowe, praktyczne, codzienne wyrażenia)',
        'Rozumienie ze słuchu i/lub czytanie połączone z rozmową',
        'Niewidzialny element gramatyczny dopasowany do tematu i poziomu',
        'Intensywna praktyka mówienia (minimum 50% zajęć)',
        'Praca z autentycznym, codziennym językiem',
        'Kreatywne zadanie domowe oraz materiały utrwalające',
      ],
      levels:   'A0 – C1',
      format:   'Indywidualnie, w parach lub w kameralnych grupach (3–4 osoby)',
      duration: '55 minut',
      note:     null,
    },
  },
  {
    icon: 'fas fa-comments', accent: '#A24E64', accentText: '#A24E64', iconBg: '#EDDCD9',
    prices: {
      en: [ { label: null, rows: [ { format: 'Individual', price: '75 zł' }, { format: 'In pairs', price: '50 zł' } ] } ],
      pl: [ { label: null, rows: [ { format: 'Indywidualnie', price: '75 zł' }, { format: 'W parach', price: '50 zł' } ] } ],
    },
    en: {
      title:    'English in Practice',
      summary:  'Intensive lessons focused purely on speaking, based on a short authentic text or audio material.',
      points:   [
        'Full focus on speaking — based on a text or audio recording',
        'Attentive, ongoing correction from the teacher throughout the entire lesson',
        'Developing your speech by introducing natural phrases and constructions',
        'Building confidence and breaking the speaking barrier',
        'Topics tailored to the student\'s needs — from practical, everyday situations to more complex topics for higher-level learners',
        'Concrete skills ready for immediate use',
      ],
      levels:   'A2/B1 and above',
      format:   'Individual or in pairs',
      duration: '30 minutes',
      note:     'For students who already have the basics and want to break the language barrier — or simply want to start speaking freely.',
    },
    pl: {
      title:    'Angielski w praktyce',
      summary:  'Intensywne zajęcia skoncentrowane wyłącznie na mówieniu, oparte na krótkim autentycznym tekście lub materiale audio.',
      points:   [
        'Pełne skupienie na mówieniu — w oparciu o tekst lub nagranie',
        'Uważna i bieżąca korekta ze strony lektora przez cały czas trwania zajęć',
        'Rozwijanie wypowiedzi poprzez wprowadzanie naturalnych zwrotów i konstrukcji',
        'Budowanie pewności siebie i przełamywanie bariery mówienia',
        'Tematy dopasowane do potrzeb ucznia — od praktycznych, codziennych sytuacji po bardziej złożone zagadnienia dla osób na wyższych poziomach',
        'Konkretne umiejętności gotowe do natychmiastowego użycia',
      ],
      levels:   'od A2/B1',
      format:   'Indywidualnie lub w parach',
      duration: '30 minut',
      note:     'Dla osób, które posiadają podstawy i chcą przełamać barierę językową lub po prostu chcą się rozgadać.',
    },
  },
]
</script>
