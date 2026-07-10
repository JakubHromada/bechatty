<template>
  <section id="reviews" class="py-24 reviews-band">
    <div class="section-wrap">

      <!-- Header: heading left, aggregate rating right -->
      <div class="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-12">
        <div>
          <span class="eyebrow mb-4">{{ t('In their words', 'Ich słowami') }}</span>
          <h2 class="font-bold text-ink text-[clamp(2rem,4vw,3rem)] leading-tight max-w-[16ch]">
            {{ t('What Students Say', 'Co mówią uczniowie') }}
          </h2>
        </div>
        <div class="rating-chip flex items-center gap-3 rounded-2xl px-5 py-3.5 self-start">
          <span class="font-extrabold text-3xl text-sage-deep leading-none">5.0</span>
          <span class="flex flex-col items-start">
            <span class="flex gap-0.5 text-terra text-sm" aria-hidden="true"><i v-for="n in 5" :key="'rs'+n" class="fas fa-star"></i></span>
            <span class="text-xs text-ink-soft mt-1">{{ t('from real student reviews', 'z prawdziwych opinii uczniów') }}</span>
          </span>
          <span class="sr-only">{{ t('Rated 5 out of 5 from real student reviews', 'Ocena 5 na 5 z prawdziwych opinii uczniów') }}</span>
        </div>
      </div>

      <!-- Pinned message: the parent's full story -->
      <div v-if="featured" class="msg-row max-w-[840px] mb-10" v-reveal>
        <span class="msg-avatar msg-avatar--lg">{{ featured.initial }}</span>
        <figure class="msg msg--feature">
          <div class="flex items-center gap-2.5 mb-3 flex-wrap">
            <span class="sr-only">{{ t('Rated 5 out of 5 stars', 'Ocena 5 na 5 gwiazdek') }}</span>
            <span class="flex gap-0.5 text-terra text-sm" aria-hidden="true"><i v-for="n in 5" :key="'fs'+n" class="fas fa-star"></i></span>
            <span class="pill pill--terra">{{ t('Parent review', 'Opinia rodzica') }}</span>
          </div>
          <blockquote
            class="text-ink leading-relaxed text-[1.04rem] max-w-[64ch]"
            :class="featuredOpen ? '' : 'line-clamp-6'"
          >{{ t(featured.en.text, featured.pl.text) }}</blockquote>
          <button
            class="card-toggle-btn mt-4 text-sage-deep"
            @click="featuredOpen = !featuredOpen"
            :aria-expanded="featuredOpen ? 'true' : 'false'"
          >
            <span>{{ featuredOpen ? t('Show less', 'Zwiń') : t('Show more', 'Rozwiń') }}</span>
            <i class="fas fa-chevron-down transition-transform duration-300" :style="{ transform: featuredOpen ? 'rotate(180deg)' : 'rotate(0deg)' }" aria-hidden="true"></i>
          </button>
          <figcaption class="mt-5 text-sm">
            <strong class="text-ink">{{ featured.name }}</strong>
            <span class="text-ink-soft"> · {{ t(featured.en.label, featured.pl.label) }} · {{ featured.date }}</span>
          </figcaption>
        </figure>
      </div>

      <!-- The conversation wall: each review is a message -->
      <div class="columns-1 lg:columns-2 xl:columns-3 gap-x-6">
        <figure
          v-for="(review, i) in rest" :key="review.name + review.date"
          v-reveal :style="{ transitionDelay: Math.min(i * 0.05, 0.3) + 's' }"
          class="msg-row break-inside-avoid mb-6"
        >
          <span class="msg-avatar">{{ review.initial }}</span>
          <div class="msg" :class="i % 3 === 1 ? 'msg--sage' : ''">
            <span class="sr-only">{{ t('Rated 5 out of 5 stars', 'Ocena 5 na 5 gwiazdek') }}</span>
            <span class="flex gap-0.5 text-terra text-sm mb-2.5" aria-hidden="true"><i v-for="n in 5" :key="'c'+i+'-'+n" class="fas fa-star"></i></span>
            <blockquote class="text-ink-soft leading-relaxed text-[0.95rem]">{{ t(review.en.text, review.pl.text) }}</blockquote>
            <figcaption class="mt-3.5 text-xs">
              <strong class="text-ink block">{{ review.name }}</strong>
              <span class="text-ink-mute">{{ t(review.en.label, review.pl.label) }} · {{ review.date }}</span>
            </figcaption>
          </div>
        </figure>
      </div>

      <!-- Invitation: your story could be next (progressive CTA, in-metaphor) -->
      <div class="msg-row max-w-[440px] mt-2" v-reveal>
        <span class="msg-avatar" style="background:var(--terra-soft);color:var(--terra-deep)" aria-hidden="true"><i class="fas fa-plus"></i></span>
        <a href="#contact" class="msg msg--join">
          <span class="chat-dots text-sage-deep mb-2" aria-hidden="true"><i></i><i></i><i></i></span>
          <p class="font-bold text-ink">{{ t('Your story could be next', 'Twoja historia może być następna') }}</p>
          <p class="text-sm text-ink-soft mt-0.5">{{ t('Book a trial lesson and start writing it.', 'Umów lekcję próbną i zacznij ją pisać.') }}</p>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const featuredOpen = ref(false)

const reviews = [
  {
    initial: 'M', name: 'Madzia', date: '7 stycznia 2026',
    en: { text: 'I have lessons preparing me for the extended Matura exam, but I also had conversation lessons. I rate them 5/5 and I am really very satisfied. The teacher is incredibly kind and supportive, and the atmosphere in class is great, which makes me feel relaxed and not afraid to speak English. Lessons go by very quickly, yet I take away a lot of concrete knowledge. I can see great progress in myself. I also really appreciate that when I come with a problem from school (e.g. grammar or tasks), the teacher can explain everything and teach me even within one lesson. I wholeheartedly recommend lessons to anyone who wants to prepare well for the exam and genuinely improve their English.', label: 'Matura preparation & conversation' },
    pl: { text: 'Mam zajęcia przygotowujące do matury rozszerzonej, ale miałam też lekcje konwersacji. Oceniam je na 5/5 i jestem naprawdę bardzo zadowolona. Pani jest niezwykle miła i wspierająca, a atmosfera na zajęciach jest świetna, dzięki czemu czuję się swobodnie i nie boję się mówić po angielsku. Lekcje mijają bardzo szybko, a jednocześnie wynoszę z nich dużo konkretów. Widzę u siebie duży postęp. Bardzo cenię też to, że gdy przyjdę z jakimś problemem ze szkoły (np. z gramatyki albo zadaniami), Pani potrafi mi wszystko wytłumaczyć i nauczyć mnie tego nawet w trakcie jednej lekcji. Zdecydowanie polecam zajęcia każdemu, kto chce się dobrze przygotować do egzaminu i realnie poprawić swój angielski.', label: 'Przygotowanie do matury i konwersacje' },
  },
  {
    initial: 'A', name: 'Ania', date: '20 maja 2026',
    en: { text: 'Ms. Ola prepared me brilliantly for the Matura exam in English. Thanks to our lessons I feel much more confident using the language and I cope significantly better with both grammar and speaking. The lessons were always conducted in a pleasant, stress-free atmosphere, and at the same time very specific and effective. I am still continuing lessons with Ms. Ola, now more conversation-based, because I can really see the results and feel more at ease in English. Highly recommended!', label: 'Matura preparation & conversation' },
    pl: { text: 'Pani Ola świetnie przygotowała mnie do matury z angielskiego. Dzięki naszym lekcjom czuję się dużo pewniej w posługiwaniu się językiem i zdecydowanie lepiej radzę sobie zarówno z gramatyką, jak i mówieniem. Zajęcia zawsze były prowadzone w miłej atmosferze, bez stresu, a jednocześnie bardzo konkretnie i skutecznie. Nadal kontynuuję lekcje z panią Olą, tym razem bardziej konwersacyjne, bo naprawdę widzę efekty i czuję większą swobodę w angielskim. Bardzo polecam!', label: 'Przygotowanie do matury i konwersacje' },
  },
  {
    initial: 'Ł', name: 'Łukasz', date: '23 kwietnia 2024',
    en: { text: 'Ola not only shares her knowledge of English brilliantly, but also knows how to adapt to my learning needs. Her commitment and flexible approach mean I feel more and more confident using the language. I am convinced that with her I will achieve my long-term learning goals, which is why I will definitely stay with her for the long run.', label: 'Comprehensive English' },
    pl: { text: 'Ola nie tylko doskonale przekazuje wiedzę z angielskiego, ale również potrafi dostosować się do moich potrzeb w nauce. Jej zaangażowanie i elastyczne podejście sprawiają, że czuję się coraz pewniej w posługiwaniu się językiem. Mam przekonanie, że dzięki niej osiągnę długoterminowe cele w nauce, dlatego zdecydowanie pozostanę z nią na dłużej.', label: 'Angielski kompleksowo' },
  },
  {
    initial: 'I', name: 'Iwona', date: '2 lipca 2023',
    en: { text: 'I am very grateful to Ola for the enormous warmth and patience she showed me while learning English. Very broad knowledge and the ability to share it, creativity, a haven of calm and full professionalism. That is exactly who Ola is :) I warmly recommend her :)', label: 'Comprehensive English' },
    pl: { text: 'Jestem bardzo wdzięczna Oli za ogrom ciepła i cierpliwości, którym mnie obdarzyła podczas nauki języka angielskiego. Bardzo duża wiedza oraz umiejętność jej przekazywania, kreatywność, ostoja spokoju i pełny profesjonalizm. Taka jest właśnie Ola :) Bardzo gorąco polecam :)', label: 'Angielski kompleksowo' },
  },
  {
    initial: 'F', name: 'Filip', date: '23 sierpnia 2024',
    en: { text: 'I would like to warmly recommend lessons with Ola. The lessons were excellently planned and tailored to my needs. The materials were varied and effective, and the teacher was always patient and supportive. Thanks to systematic work and clear explanations, I not only mastered the required material but also gained confidence. I passed my Matura exam at a very high level, which exceeded my expectations. I am enormously grateful for the professional approach and I heartily recommend these lessons to anyone who wants to achieve great results!', label: 'Matura preparation' },
    pl: { text: 'Chciałbym gorąco polecić zajęcia z Olą. Lekcje były doskonale zaplanowane i dostosowane do moich potrzeb. Materiały były różnorodne i skuteczne, a nauczycielka zawsze cierpliwa i wspierająca. Dzięki systematycznej pracy i klarownym wyjaśnieniom nie tylko opanowałem wymagany materiał, ale także nabrałem pewności siebie. Egzamin maturalny zdałem na bardzo wysokim poziomie, co przerosło moje oczekiwania. Jestem ogromnie wdzięczny za profesjonalne podejście i serdecznie polecam te zajęcia wszystkim, którzy chcą osiągnąć świetne wyniki!', label: 'Przygotowanie do matury' },
  },
  {
    initial: 'A', name: 'Ania', date: '19 października 2024',
    en: { text: 'Aleksandra, with whom I had the pleasure of studying, is a true gem. Her passion for the language and her ability to convey knowledge make the lessons not only effective but also very enjoyable. Her patience and support make everyone feel motivated to learn. I recommend her wholeheartedly.', label: 'Comprehensive English' },
    pl: { text: 'Pani Aleksandra z którą miałam przyjemność się uczyć, to prawdziwy skarb. Jej pasja do języka i umiejętność przekazywania wiedzy sprawiają, że lekcje są nie tylko efektywne, ale także bardzo przyjemne, a jej cierpliwość i wsparcie sprawiają, że każdy czuje się zmotywowany do nauki. Polecam z całego serca.', label: 'Angielski kompleksowo' },
  },
  {
    initial: 'J', name: 'Justyna', date: '23 maja 2025',
    en: { text: 'I really enjoy attending English classes with Ola. I have been learning for two years now and I have come to know her as someone with an extraordinary passion for what she does. She is calm and warm-hearted. I have learned so much with her and I feel that my level of English has improved greatly. Ola always has excellently prepared materials for every lesson and explains every topic very well, exactly what we need to progress. I warmly recommend her!', label: 'Comprehensive English' },
    pl: { text: 'Bardzo lubię uczęszczać na zajęcia z j. angielskiego do Pani Oli. Uczę się już od dwóch lat i poznałam Panią Olę jako osobę niezwykle pełną pasji w tym co robi. Jest pełna spokoju, o ciepłym sercu. Bardzo dużo się przy niej nauczyłam i czuję że mój poziom j. angielskiego bardzo się podniósł. Pani Ola zawsze ma świetnie przygotowane materiały na każdą lekcję i bardzo dobrze wykłada każdy materiał, który jest potrzebny do naszego rozwoju. Serdecznie polecam!', label: 'Angielski kompleksowo' },
  },
  {
    initial: 'S', name: 'Sylwia i Szymon', date: '8 lipca 2025', featured: true,
    en: { text: 'Ola has been teaching English to my son for several months, general lessons and preparation for the 8th-grade exam, and I can say with full conviction that it was the best decision we could have made. Ola is a teacher with enormous passion and dedication. Every lesson is thoughtful, carefully planned and fully tailored to the student\'s needs. My son quickly built a great rapport with her, which means learning takes place in a wonderful, stress-free atmosphere. It is clear that Ola not only knows the exam material inside out, but can also convey knowledge in a clear, accessible and motivating way. The progress my son has made in just a few months is truly impressive. His grammar has improved, as has his reading comprehension and written expression. Most importantly, he has gained confidence and stopped being afraid to speak English, which was previously a major barrier. Ola regularly keeps us informed about progress, clearly identifies strengths and areas for further work. She is also very punctual, organised and flexible, which we greatly appreciate. If you are looking for a tutor who really knows her stuff, can build a great relationship with young people and effectively prepare them for an exam, Ola is the perfect choice. I recommend her wholeheartedly!', label: '8th-grade exam preparation, parent\'s review' },
    pl: { text: 'Pani Ola od kilku miesięcy prowadzi zajęcia z języka angielskiego z moim synem, nauka ogólna oraz w ramach przygotowań do egzaminu ósmoklasisty i z pełnym przekonaniem mogę powiedzieć, że to najlepsza decyzja, jaką mogliśmy podjąć. Pani Ola to nauczycielka z ogromną pasją i zaangażowaniem. Każda lekcja jest przemyślana, starannie zaplanowana i w pełni dostosowana do potrzeb ucznia. Syn bardzo szybko złapał z nią dobry kontakt, dzięki czemu nauka przebiega w świetnej, bezstresowej atmosferze. Widać, że Pani Ola nie tylko świetnie zna materiał egzaminacyjny, ale też potrafi przekazać wiedzę w sposób jasny, przystępny i motywujący. Postępy, jakie zrobił mój syn w ciągu kilku miesięcy, są naprawdę imponujące. Poprawiła się zarówno jego gramatyka, jak i umiejętność rozumienia tekstu czy pisania wypowiedzi pisemnych. Co najważniejsze, zyskał pewność siebie i przestał bać się mówić po angielsku, co wcześniej było dużą barierą. Pani Ola regularnie przekazuje nam informacje o postępach, jasno wskazuje mocne strony oraz obszary do dalszej pracy. Jest przy tym bardzo punktualna, zorganizowana i elastyczna, co również bardzo cenimy. Jeśli ktoś szuka korepetytorki, która naprawdę zna się na rzeczy, potrafi nawiązać świetny kontakt z młodzieżą i skutecznie przygotować do egzaminu, Pani Ola będzie idealnym wyborem. Z całego serca polecam!', label: 'Przygotowanie do egzaminu 8-klasisty, opinia rodzica' },
  },
  {
    initial: 'B', name: 'Beata', date: '9 lipca 2025',
    en: { text: 'I highly recommend lessons with Ola. I have been attending classes for a year and I can see great progress. Ola is very patient and helpful. The lessons are also well prepared and tailored to my level. I recommend her again to anyone looking for a great teacher.', label: 'Comprehensive English' },
    pl: { text: 'Bardzo polecam lekcję z Olą. Na zajęcia uczęszczam od roku i widzę duże postępy. Ola jest bardzo cierpliwa i pomocna. Lekcje również są dobrze przygotowane i dostosowane do mojego poziomu. Jeszcze raz polecam wszystkim, którzy szukają świetnego nauczyciela.', label: 'Angielski kompleksowo' },
  },
]

const featured = computed(() => reviews.find(r => r.featured))
const rest = computed(() => reviews.filter(r => !r.featured))
</script>

<style scoped>
/* The sage drench — the brand's everyday colour owns this whole band
   (colour rules: sage 40%), so the linen-white messages pop like a real
   chat thread. Headings stay walnut: light text on sage fails contrast. */
.reviews-band {
  background:
    radial-gradient(110% 90% at 92% -6%, color-mix(in oklch, #fff 20%, transparent), transparent 58%),
    radial-gradient(90% 80% at 0% 104%, color-mix(in oklch, var(--walnut) 12%, transparent), transparent 55%),
    var(--sage);
}
/* the recurring eyebrow voice flips dark on the sage ground (AA ~5.6:1) */
.reviews-band .eyebrow { color: var(--walnut-deep); }
.reviews-band .eyebrow::before {
  background: linear-gradient(90deg, var(--walnut-deep), color-mix(in oklch, var(--walnut-deep) 0%, transparent));
}

/* Aggregate rating — a lifted warm-white chip so the 5.0 stays readable */
.rating-chip { background: var(--surface); box-shadow: var(--shadow); }

/* Pinned parent message — larger, lifted off the wall */
.msg-avatar--lg { width: 3.25rem; height: 3.25rem; font-size: 1.15rem; }
.msg--feature {
  padding: 1.6rem 1.75rem;
  border-color: color-mix(in oklch, var(--walnut) 18%, var(--line));
  box-shadow: var(--shadow-hover);
}
.msg--feature:hover { transform: none; }   /* it's a statement, not a hover target */

/* The invitation bubble — a warm, in-metaphor call to action */
.msg--join {
  display: block; background: var(--terra-soft);
  border-color: color-mix(in oklch, var(--terra) 32%, var(--linen));
}
.msg--join::before {
  background: var(--terra-soft);
  border-color: color-mix(in oklch, var(--terra) 32%, var(--linen));
}
</style>
