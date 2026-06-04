<template>
  <section id="about" class="py-24 bg-white">
    <div class="section-wrap">

      <!-- Masthead: left-aligned, standfirst hook, hairline (no centered divider) -->
      <div class="max-w-[820px]" v-reveal>
        <span class="eyebrow mb-4">{{ t('Meet your teacher', 'Poznaj nauczycielkę') }}</span>
        <h2 class="font-bold text-ink text-[clamp(2rem,4vw,3rem)]">{{ t('About Me', 'O mnie') }}</h2>
        <p class="mt-4 text-ink-soft text-lg leading-relaxed max-w-[60ch]" v-html="t(bio.en[0], bio.pl[0])"></p>
      </div>
      <div class="mt-8 border-t border-line"></div>

      <!-- Editorial spread: sticky credential rail + long-form prose -->
      <div class="mt-12 grid gap-10 md:grid-cols-[300px_minmax(0,1fr)] md:gap-x-20 items-start">

        <!-- Left rail -->
        <aside class="md:sticky md:top-24 flex flex-col gap-6 max-w-[320px]" v-reveal>
          <!-- layered frame: a sage card sits behind the photo for brand depth -->
          <div class="photo-frame">
            <span class="photo-frame__shadow" aria-hidden="true"></span>
            <img
              src="/ola_image.png"
              :alt="t('Aleksandra Susek-Hromada, English teacher', 'Aleksandra Susek-Hromada, nauczycielka języka angielskiego')"
              class="photo-frame__img"
              style="aspect-ratio:4/5;"
              loading="lazy"
            />
            <span class="photo-frame__badge" aria-hidden="true">
              <span class="chat-dots"><i></i><i></i><i></i></span>
            </span>
          </div>
          <div>
            <strong class="block text-ink text-[1.05rem]">Aleksandra Susek-Hromada</strong>
            <span class="text-ink-soft text-sm">{{ t('English teacher', 'Nauczycielka języka angielskiego') }}</span>
          </div>
          <div>
            <h3 class="text-sm font-bold text-ink mb-3">{{ t('Qualifications', 'Kwalifikacje') }}</h3>
            <ul class="flex flex-col gap-2.5">
              <li v-for="c in credentials" :key="c.en" class="flex items-center gap-2.5 text-sm text-ink">
                <i :class="c.icon" class="text-sage-deep w-4 text-center shrink-0" aria-hidden="true"></i>{{ t(c.en, c.pl) }}
              </li>
            </ul>
          </div>
        </aside>

        <!-- Prose -->
        <div class="max-w-[68ch]" v-reveal style="transition-delay:.08s">
          <p class="text-ink-soft text-lg leading-relaxed mb-5" v-html="t(bio.en[1], bio.pl[1])"></p>
          <h3 class="font-semibold text-xl text-ink mt-10 mb-4">{{ t("Let's get to know each other", 'Poznajmy się bliżej') }}</h3>
          <p class="text-ink-soft leading-relaxed mb-4" v-html="t(bio.en[2], bio.pl[2])"></p>
          <p class="text-ink-soft leading-relaxed mb-4" v-html="t(bio.en[3], bio.pl[3])"></p>
          <p class="text-ink-soft leading-relaxed mb-4" v-html="t(bio.en[4], bio.pl[4])"></p>
          <p class="text-ink-soft leading-relaxed mb-4" v-html="t(bio.en[5], bio.pl[5])"></p>
          <p class="text-ink-soft leading-relaxed mb-4" v-html="t(bio.en[6], bio.pl[6])"></p>
          <blockquote class="pull-quote" v-html="t(bio.en[7], bio.pl[7])"></blockquote>
        </div>

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
/* Layered photo frame — a sage card peeks behind the portrait for depth + brand */
.photo-frame { position: relative; }
.photo-frame__shadow {
  position: absolute; inset: 0; transform: translate(14px, 14px);
  border-radius: var(--radius-lg);
  background: var(--sage); opacity: 0.5; z-index: 0;
}
.photo-frame__img {
  position: relative; z-index: 1;
  width: 100%; height: auto; object-fit: cover;
  border-radius: var(--radius-lg);
  border: 5px solid var(--surface);
  box-shadow: var(--shadow);
}
.photo-frame__badge {
  position: absolute; z-index: 2; right: -12px; bottom: -12px;
  display: inline-flex; align-items: center; justify-content: center;
  width: 52px; height: 40px; border-radius: 14px 14px 14px 4px;
  background: var(--cta); color: #fff;
  box-shadow: 0 10px 22px -10px color-mix(in oklch, var(--cta) 80%, transparent);
}
.photo-frame__badge .chat-dots { font-size: 0.85rem; }

/* Branded pull-quote — reads as the teacher's voice, with a soft sage well */
.pull-quote {
  position: relative;
  margin-top: 2.5rem; padding: 1.6rem 1.6rem 1.6rem 2rem;
  border-radius: 6px var(--radius) var(--radius) 6px;
  border-left: 4px solid var(--sage-deep);
  background: var(--sage-soft);
  color: var(--ink);
  font-family: var(--font-display); font-optical-sizing: auto;
  font-weight: 500; font-style: italic;
  font-size: clamp(1.3rem, 2.4vw, 1.8rem); line-height: 1.35; letter-spacing: -0.01em;
}
</style>
