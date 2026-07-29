<template>
  <section id="about" class="py-24 bg-bg-alt">
    <div class="section-wrap">

      <!-- The visitor asks; the section answers -->
      <div class="q-head" v-reveal>
        <h2 class="text-ink">{{ t('About me', 'O mnie') }}</h2>
      </div>

      <!-- Credentials, stamped like certificate seals -->
      <ul class="flex flex-wrap gap-2.5 mt-8" v-reveal>
        <li v-for="c in credentials" :key="c.en" class="stamp">
          <i :class="c.icon" class="text-[0.75rem]" aria-hidden="true"></i>{{ t(c.en, c.pl) }}
        </li>
      </ul>

      <div class="mt-12 grid gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-x-20 items-start">

        <!-- The answer, in Ola's voice -->
        <div class="max-w-[66ch]">
          <p class="about-lead text-ink text-[clamp(1.2rem,2.1vw,1.45rem)]" v-reveal v-html="t(bio.en[0], bio.pl[0])"></p>

          <div v-reveal style="transition-delay:.06s">
            <p class="mt-7 text-ink-soft text-lg leading-relaxed" v-html="t(bio.en[1], bio.pl[1])"></p>
            <h3 class="text-[1.45rem] text-ink mt-12 mb-5">{{ t("Let's get to know each other", 'Poznajmy się bliżej') }}</h3>
            <p class="prose-drop text-ink-soft leading-relaxed mb-4" v-html="t(bio.en[2], bio.pl[2])"></p>
            <p class="text-ink-soft leading-relaxed mb-4" v-html="t(bio.en[3], bio.pl[3])"></p>
            <p class="text-ink-soft leading-relaxed mb-4" v-html="t(bio.en[4], bio.pl[4])"></p>
            <p class="text-ink-soft leading-relaxed mb-4" v-html="t(bio.en[5], bio.pl[5])"></p>
            <p class="text-ink-soft leading-relaxed" v-html="t(bio.en[6], bio.pl[6])"></p>
          </div>
        </div>

        <!-- The closing line, pinned like a note in the margin -->
        <aside class="lg:sticky lg:top-28" v-reveal style="transition-delay:.1s">
          <blockquote class="aside-quote" v-html="t(bio.en[7], bio.pl[7])"></blockquote>
        </aside>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const credentials = [
  { icon: 'fas fa-graduation-cap', en: "Master's, Bournemouth (UK)", pl: 'Magister, Bournemouth (UK)' },
  { icon: 'fas fa-language',       en: 'English Philology, Kraków',   pl: 'Filologia angielska, Kraków' },
  { icon: 'fas fa-certificate',    en: 'TEFL certificate (Brighton)', pl: 'Certyfikat TEFL (Brighton)' },
  { icon: 'fas fa-chart-line',     en: '90%+ exam results',           pl: 'Wyniki egzaminów 90%+' },
  { icon: 'fas fa-layer-group',    en: 'Levels A0-C1',                pl: 'Poziomy A0-C1' },
]

const bio = {
  pl: [
    'Dopiero zaczynasz naukę, bo wiesz, że <strong class="text-ink">język angielski daje ogrom możliwości</strong>? A może uczysz się go od lat, ale wciąż trudno Ci się porozumieć?',
    'Nazywam się <strong class="text-ink">Aleksandra Susek-Hromada</strong> i <strong class="text-ink">od ponad 10 lat</strong> pomagam <strong class="text-ink">dorosłym i młodzieży przełamać barierę językową</strong> oraz <strong class="text-ink">osiągać wymarzone rezultaty na egzaminach</strong>. W swojej pracy wypracowałam formułę opartą na <strong class="text-ink">natychmiastowym wdrażaniu nauki w praktykę</strong>, która sprawia, że moi uczniowie zaczynają mówić w zaskakującym tempie, nie tracąc czasu.',
    'Moja historia z angielskim zaczęła się od fascynacji: językiem, kulturą i krajami anglojęzycznymi. <strong class="text-ink">W 2014 roku ukończyłam filologię angielską w Krakowie</strong>, częściowo na uniwersytecie w Nottingham w ramach programu ERASMUS, a tytuł magistra uzyskałam na Uniwersytecie w Bournemouth w Wielkiej Brytanii. <strong class="text-ink">Przez prawie dekadę mieszkałam i pracowałam w Anglii</strong>. To właśnie tam, pomagając Polakom odnaleźć się w anglojęzycznej rzeczywistości, odkryłam swoją misję: <strong class="text-ink">uczyć języka, który naprawdę działa w życiu</strong>. Moje kwalifikacje uzupełniają <strong class="text-ink">certyfikat TEFL</strong> ukończony w Brighton oraz <strong class="text-ink">kurs pedagogiczny</strong> w Polsce.',
    'Uczniowie przygotowujący się ze mną do egzaminów zdają je ze średnimi wynikami powyżej 90%. Osoby, które przychodzą do mnie z blokadą językową, <strong class="text-ink">zaczynają mówić swobodnie, pewnie i bez strachu</strong>.',
    'Jak to osiągam? Moja metoda wyrasta z realnego doświadczenia w środowisku anglojęzycznym. <strong class="text-ink">Uczę języka konkretnego, użytecznego i osadzonego w rzeczywistości, nie w teorii</strong>. Korzystam z <strong class="text-ink">autorskich i autentycznych materiałów</strong>, a każda lekcja jest przemyślana i dopasowana do Twoich celów.',
    'Przygotowujesz się do matury i <strong class="text-ink">chcesz osiągnąć wynik, który otworzy Ci drzwi na wymarzone studia? Chcesz podróżować bez stresu, zawierać nowe znajomości czy zdobyć lepszą pracę lub awans?</strong> Niezależnie od tego, jaki jest Twój cel, <strong class="text-ink">nauka ze mną jest dostosowana do Ciebie</strong>.',
    'Pracuję z młodzieżą i dorosłymi <strong class="text-ink">na wszystkich poziomach językowych (A0 do C1)</strong>. Tworzę atmosferę profesjonalną, a jednocześnie wspierającą, w której błędy to nie porażka, lecz naturalny i niezbędny krok w nauce.',
    'Jeśli zależy Ci na <strong class="text-ink">konkretnych efektach</strong>, a nie kolejnych latach nauki bez rezultatu, <strong class="text-ink">jesteś we właściwym miejscu.</strong>',
  ],
  en: [
    'Are you just starting out because you know <strong class="text-ink">English opens up a world of possibilities</strong>? Or have you been learning for years but still struggle to communicate?',
    'My name is <strong class="text-ink">Aleksandra Susek-Hromada</strong> and for <strong class="text-ink">over 10 years</strong> I have been helping <strong class="text-ink">adults and teenagers break through the language barrier</strong> and <strong class="text-ink">achieve the exam results they have always dreamed of</strong>. Over time I have developed a method based on <strong class="text-ink">putting what you learn into practice immediately</strong>, which is why my students start speaking at a surprising pace, without wasting time.',
    'My story with English began with a fascination: the language, the culture, and English-speaking countries. <strong class="text-ink">In 2014 I graduated in English Philology in Kraków</strong>, with part of my studies completed at the University of Nottingham through the ERASMUS programme, and I earned my Master\'s degree at Bournemouth University in the UK. <strong class="text-ink">I lived and worked in England for nearly a decade</strong>. It was there, helping Polish people find their footing in an English-speaking world, that I discovered my mission: <strong class="text-ink">to teach a language that actually works in real life</strong>. My qualifications also include a <strong class="text-ink">TEFL certificate</strong> earned in Brighton and a <strong class="text-ink">teaching qualification</strong> earned in Poland.',
    'Students who prepare for exams with me pass them with average scores above 90%. People who come to me stuck behind a language barrier <strong class="text-ink">start speaking freely, confidently, and without fear</strong>.',
    'How do I do it? My method grows out of real experience in an English-speaking environment. <strong class="text-ink">I teach a language that is concrete, useful, and rooted in reality, not in theory</strong>. I work with <strong class="text-ink">my own original and authentic materials</strong>, and every lesson is carefully planned and tailored to your goals.',
    'Are you preparing for the Matura exam and <strong class="text-ink">want a score that opens the doors to the studies you dream of? Do you want to travel without stress, make new connections, or land a better job or a promotion?</strong> Whatever your goal is, <strong class="text-ink">learning with me is shaped around you</strong>.',
    'I work with teenagers and adults <strong class="text-ink">at every language level (A0 to C1)</strong>. I create an atmosphere that is professional and at the same time supportive, one where mistakes are not failures but a natural and essential step in learning.',
    'If what matters to you is <strong class="text-ink">real results</strong>, not more years of learning without progress, <strong class="text-ink">you are in the right place.</strong>',
  ],
}
</script>

<style scoped>
/* The section opens like an essay: the lead speaks in the display voice */
.about-lead {
  font-family: var(--font-display);
  font-optical-sizing: auto;
  font-weight: 470; letter-spacing: -0.01em; line-height: 1.5;
  max-width: 52ch;
}

/* A serif drop cap opens her story — literary, grown-up warmth */
.prose-drop::first-letter {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 3.3em; line-height: 0.82;
  float: left;
  padding: 0.08em 0.14em 0 0;
  color: var(--terra);
}

/* The closing line as a margin note: rust rule, big italic serif, no box */
.aside-quote {
  border-top: 4px solid var(--terra);
  padding-top: 1.5rem;
  font-family: var(--font-display); font-optical-sizing: auto;
  font-style: italic; font-weight: 480;
  font-size: clamp(1.4rem, 2vw, 1.7rem);
  line-height: 1.45; letter-spacing: -0.01em;
  color: var(--ink);
}
.aside-quote :deep(strong) { font-weight: 640; color: var(--walnut-deep); }
</style>
