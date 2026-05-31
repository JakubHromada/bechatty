<template>
  <section id="about" class="py-20 bg-bmustard-light">
    <div class="section-wrap">
      <!-- Heading + bubbles -->
      <div class="relative text-center mb-12">
        <!-- Greeting bubble -->
        <div class="hidden md:flex items-end" style="position:absolute; left:0; top:-10px;">
          <div class="about-bubble about-bubble--right" @click="toggleHi">
            <span class="font-playfair font-bold text-3xl" style="color: var(--bsage-dark)">{{ hiText }}</span>
          </div>
        </div>

        <h2 class="font-playfair font-bold text-[clamp(2.1rem,4.5vw,3rem)] text-btext tracking-tight">{{ t('About Me', 'O mnie') }}</h2>
        <div class="brand-divider"></div>
      </div>

      <div class="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <!-- Photo column -->
        <div class="sticky top-24 flex flex-col gap-4 max-w-[280px] mx-auto w-full">
          <img
            src="/ola_image.png"
            alt="Aleksandra Susek-Hromada — nauczycielka języka angielskiego"
            class="rounded-[14px] w-full h-auto object-cover border border-bpink-dark/60"
            style="aspect-ratio:4/5; box-shadow: var(--shadow);"
            loading="lazy"
          />
        </div>

        <!-- Bio -->
        <div class="max-w-[68ch]">
          <p class="text-btext text-lg leading-relaxed mb-5" v-html="t(bio.en[0], bio.pl[0])"></p>
          <!-- Credential chips: surface the proof a parent scans for, above the prose -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span v-for="c in credentials" :key="c.pl"
                  class="inline-flex items-center gap-1.5 text-xs font-bold text-bsage-dark bg-white/70 rounded-full px-3 py-1.5"
                  style="box-shadow: var(--shadow);">
              <i :class="c.icon" class="text-bmustard-dark"></i>{{ t(c.en, c.pl) }}
            </span>
          </div>
          <p class="text-btext-light mb-6" v-html="t(bio.en[1], bio.pl[1])"></p>
          <h4 class="font-playfair font-semibold text-xl text-bsage-dark my-6">{{ t("Let's get to know each other", 'Poznajmy się bliżej') }}</h4>
          <p class="text-btext-light mb-4" v-html="t(bio.en[2], bio.pl[2])"></p>
          <p class="text-btext-light mb-4" v-html="t(bio.en[3], bio.pl[3])"></p>
          <p class="text-btext-light mb-4" v-html="t(bio.en[4], bio.pl[4])"></p>
          <p class="text-btext-light mb-4" v-html="t(bio.en[5], bio.pl[5])"></p>
          <p class="text-btext-light mb-4" v-html="t(bio.en[6], bio.pl[6])"></p>
          <p class="text-btext-light mb-8" v-html="t(bio.en[7], bio.pl[7])"></p>

          <!-- Highlights -->
          <div class="flex gap-6 flex-wrap">
            <div v-for="(h, i) in highlights" :key="h.number"
                 class="flex-1 min-w-[100px] text-center rounded-[14px] p-4 bg-white"
                 :style="{ boxShadow: 'var(--shadow)', borderTop: '3px solid ' + ['var(--bsage-dark)', 'var(--bmustard)', 'var(--bsandy)'][i] }">
              <span class="block font-playfair text-3xl font-bold text-bsage-dark">{{ h.number }}</span>
              <span class="text-xs text-btext-light font-bold tracking-wide uppercase">{{ t(h.en, h.pl) }}</span>
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

const hiText = ref('Hi there!')
function toggleHi() {
  hiText.value = hiText.value.startsWith('Hi') ? 'Cześć!' : 'Hi there!'
}

const credentials = [
  { icon: 'fas fa-graduation-cap', en: "Master's, Bournemouth (UK)", pl: 'Magister, Bournemouth (UK)' },
  { icon: 'fas fa-language',       en: 'English Philology, Kraków',   pl: 'Filologia angielska, Kraków' },
  { icon: 'fas fa-certificate',    en: 'TEFL certificate (Brighton)', pl: 'Certyfikat TEFL (Brighton)' },
  { icon: 'fas fa-chart-line',     en: '90%+ exam results',           pl: 'Wyniki egzaminów 90%+' },
  { icon: 'fas fa-layer-group',    en: 'Levels A0–C1',                pl: 'Poziomy A0–C1' },
]

const highlights = [
  { number: '10+',  en: 'Years Experience', pl: 'Lata doświadczenia'   },
  { number: '450+', en: 'Happy Students',   pl: 'Zadowolonych uczniów' },
  { number: '5',   en: 'Certifications',   pl: 'Certyfikatów'         },
]

const bio = {
  pl: [
    'Dopiero zaczynasz naukę, bo wiesz, że <strong class="text-btext">język angielski daje ogrom możliwości</strong>? A może uczysz się go od lat, ale wciąż trudno Ci się porozumieć?',
    'Nazywam się <strong class="text-btext">Aleksandra Susek-Hromada</strong> i <strong class="text-btext">od ponad 10 lat</strong> pomagam <strong class="text-btext">dorosłym i młodzieży przełamać barierę językową</strong> oraz <strong class="text-btext">osiągać wymarzone rezultaty na egzaminach</strong>. W swojej pracy wypracowałam formułę opartą na <strong class="text-btext">natychmiastowym wdrażaniu nauki w praktykę</strong>, która sprawia, że moi uczniowie zaczynają mówić w zaskakującym tempie – nie tracąc czasu.',
    'Moja historia z angielskim zaczęła się od fascynacji — językiem, kulturą i krajami anglojęzycznymi. <strong class="text-btext">W 2014 roku ukończyłam filologię angielską w Krakowie</strong>, częściowo na uniwersytecie w Nottingham w ramach programu ERASMUS, a tytuł magistra uzyskałam na Uniwersytecie w Bournemouth w Wielkiej Brytanii. <strong class="text-btext">Przez prawie dekadę mieszkałam i pracowałam w Anglii</strong> — to właśnie tam, pomagając Polakom odnaleźć się w anglojęzycznej rzeczywistości, odkryłam swoją misję: <strong class="text-btext">uczyć języka, który naprawdę działa w życiu</strong>. Moje kwalifikacje uzupełniają <strong class="text-btext">certyfikat TEFL</strong> ukończony w Brighton oraz <strong class="text-btext">kurs pedagogiczny</strong> w Polsce.',
    'Uczniowie przygotowujący się ze mną do egzaminów zdają je ze <strong class="text-btext">średnimi wynikami powyżej 90%</strong>. Osoby, które przychodzą do mnie z blokadą językową, <strong class="text-btext">zaczynają mówić swobodnie, pewnie i bez strachu</strong>.',
    'Jak to osiągam? Moja metoda wyrasta z realnego doświadczenia w środowisku anglojęzycznym — <strong class="text-btext">uczę języka konkretnego, użytecznego i osadzonego w rzeczywistości, nie w teorii</strong>. Korzystam z <strong class="text-btext">autorskich i autentycznych materiałów</strong>, a każda lekcja jest przemyślana i dopasowana do Twoich celów.',
    'Przygotowujesz się do matury i <strong class="text-btext">chcesz osiągnąć wynik, który otworzy Ci drzwi na wymarzone studia? Chcesz podróżować bez stresu, zawierać nowe znajomości czy zdobyć lepszą pracę lub awans?</strong> Niezależnie od tego, jaki jest Twój cel, <strong class="text-btext">nauka ze mną jest dostosowana do Ciebie</strong>.',
    'Pracuję z młodzieżą i dorosłymi <strong class="text-btext">na wszystkich poziomach językowych (A0 do C1)</strong>. Tworzę atmosferę profesjonalną, a jednocześnie wspierającą, w której błędy to nie porażka, lecz naturalny i niezbędny krok w nauce.',
    'Jeśli zależy Ci na <strong class="text-btext">konkretnych efektach</strong>, a nie kolejnych latach nauki bez rezultatu — <strong class="text-btext">jesteś we właściwym miejscu.</strong>',
  ],
  en: [
    'Are you just starting out because you know <strong class="text-btext">English opens up a world of possibilities</strong>? Or have you been learning for years but still struggle to communicate?',
    'My name is <strong class="text-btext">Aleksandra Susek-Hromada</strong> and for <strong class="text-btext">over 10 years</strong> I have been helping <strong class="text-btext">adults and teenagers break through the language barrier</strong> and <strong class="text-btext">achieve the exam results they have always dreamed of</strong>. Over time I have developed a method based on <strong class="text-btext">putting what you learn into practice immediately</strong>, which is why my students start speaking at a surprising pace — without wasting time.',
    'My story with English began with a fascination — for the language, the culture, and English-speaking countries. <strong class="text-btext">In 2014 I graduated in English Philology in Kraków</strong>, with part of my studies completed at the University of Nottingham through the ERASMUS programme, and I earned my Master\'s degree at Bournemouth University in the UK. <strong class="text-btext">I lived and worked in England for nearly a decade</strong> — and it was there, helping Polish people find their footing in an English-speaking world, that I discovered my mission: <strong class="text-btext">to teach a language that actually works in real life</strong>. My qualifications also include a <strong class="text-btext">TEFL certificate</strong> earned in Brighton and a <strong class="text-btext">teaching qualification</strong> earned in Poland.',
    'Students who prepare for exams with me pass them with <strong class="text-btext">average scores above 90%</strong>. People who come to me stuck behind a language barrier <strong class="text-btext">start speaking freely, confidently, and without fear</strong>.',
    'How do I do it? My method grows out of real experience in an English-speaking environment — <strong class="text-btext">I teach a language that is concrete, useful, and rooted in reality, not in theory</strong>. I work with <strong class="text-btext">my own original and authentic materials</strong>, and every lesson is carefully planned and tailored to your goals.',
    'Are you preparing for the Matura exam and <strong class="text-btext">want a score that opens the doors to the studies you dream of? Do you want to travel without stress, make new connections, or land a better job or a promotion?</strong> Whatever your goal is, <strong class="text-btext">learning with me is shaped around you</strong>.',
    'I work with teenagers and adults <strong class="text-btext">at every language level (A0 to C1)</strong>. I create an atmosphere that is professional and at the same time supportive — one where mistakes are not failures but a natural and essential step in learning.',
    'If what matters to you is <strong class="text-btext">real results</strong>, not more years of learning without progress — <strong class="text-btext">you are in the right place.</strong>',
  ],
}
</script>
