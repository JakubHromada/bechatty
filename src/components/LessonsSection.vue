<template>
  <section id="lessons" class="py-20 bg-bsandy-light">
    <div class="section-wrap">
      <div class="text-center mb-12">
        <h2 class="font-playfair font-bold text-[clamp(2.1rem,4.5vw,3rem)] text-btext tracking-tight">{{ t('How I work with students', 'Jak wyglądają zajęcia ze mną?') }}</h2>
        <div class="brand-divider"></div>
      </div>

      <div class="flex flex-col max-w-3xl mx-auto">
        <div v-for="(step, i) in steps" :key="i" class="flex gap-6 md:gap-8">

          <!-- Left column: number circle + connector -->
          <div class="flex flex-col items-center shrink-0">
            <div
              class="w-14 h-14 rounded-full flex items-center justify-center font-playfair text-xl font-bold shrink-0 relative z-1"
              :style="{ background: step.accent, color: step.accent === '#E8C575' ? '#1F2426' : '#fff', boxShadow: '0 4px 16px ' + step.accent + '55' }"
            >{{ i + 1 }}</div>
            <!-- Connector line between steps -->
            <div
              v-if="i < steps.length - 1"
              class="w-0.5 flex-1 my-2"
              :style="{ background: 'linear-gradient(to bottom, ' + step.accent + '66, ' + steps[i+1].accent + '33)' }"
            ></div>
          </div>

          <!-- Right column: card -->
          <div
            class="rounded-[14px] p-6 mb-6 flex-1 bg-white"
            :style="{ boxShadow: 'var(--shadow)' }"
          >
            <div class="flex items-center gap-3 mb-2">
              <i :class="step.icon" class="text-base" :style="{ color: step.accent }"></i>
              <h3 class="font-playfair font-semibold text-lg text-btext">{{ t(step.en.title, step.pl.title) }}</h3>
            </div>
            <p class="text-btext-light text-sm leading-relaxed">{{ t(step.en.desc, step.pl.desc) }}</p>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const steps = [
  {
    icon: 'fas fa-handshake', accent: '#5C7053',
    en: { title: 'Initial conversation & level assessment', desc: 'We start with a conversation about your goals, needs and a thorough diagnosis of your current language level. This multi-faceted assessment allows lessons to be precisely tailored from the very first session.' },
    pl: { title: 'Rozmowa wstępna i diagnoza poziomu',      desc: 'Współpraca rozpoczyna się od rozmowy na temat celów, potrzeb i diagnozy aktualnego poziomu językowego. Wielopłaszczyznowa ocena pozwala na precyzyjne dopasowanie zajęć już od pierwszego spotkania.' },
  },
  {
    icon: 'fas fa-clipboard-list', accent: '#E8C575',
    en: { title: 'Personalised learning plan',       desc: 'Based on the diagnosis, an individual learning plan is developed — structured, goal-oriented, and tailored to your level and needs.' },
    pl: { title: 'Spersonalizowany plan nauki',      desc: 'Na podstawie diagnozy opracowywany jest indywidualny plan nauki — uporządkowany, nastawiony na cel i dostosowany do poziomu oraz potrzeb.' },
  },
  {
    icon: 'fas fa-laptop', accent: '#5C7053',
    en: { title: 'Online lessons — convenient and effective',  desc: 'Each lesson has clearly defined didactic objectives and a well-thought-out structure based on modern teaching methods. Lessons take place online via a convenient platform — no commuting or leaving home required.' },
    pl: { title: 'Zajęcia online — wygodnie i skutecznie',     desc: 'Każda lekcja posiada jasno określone cele dydaktyczne oraz przemyślaną strukturę opartą na nowoczesnych metodach nauczania. Zajęcia odbywają się online, przez wygodną platformę — bez konieczności dojazdów lub wychodzenia z domu.' },
  },
  {
    icon: 'fas fa-pencil-alt', accent: '#E8C575',
    en: { title: 'Materials & self-study',          desc: 'I use original, authentic materials and proven, high-quality course books. After every lesson I send creative homework and self-study materials — because progress happens between lessons too.' },
    pl: { title: 'Materiały i praca własna',         desc: 'Korzystam z autorskich i autentycznych materiałów oraz sprawdzonych, wysokiej jakości podręczników dostępnych na rynku. Po każdej lekcji wysyłam kreatywne zadania domowe oraz materiały do pracy własnej — ponieważ postęp zachodzi również między zajęciami.' },
  },
  {
    icon: 'fas fa-chart-line', accent: '#5C7053',
    en: { title: 'Progress monitoring & feedback',  desc: 'I regularly update you on your progress, share tips and ideas on how to learn effectively and which resources to use. I support and motivate you to keep going.' },
    pl: { title: 'Monitorowanie postępów (feedback)', desc: 'Regularnie informuję o postępach, daję wskazówki i pomysły dotyczące tego, jak efektywnie się uczyć oraz z jakich źródeł wiedzy korzystać. Wspieram i motywuję do dalszego działania.' },
  },
]
</script>
