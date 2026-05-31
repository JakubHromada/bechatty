<template>
  <section id="reviews" class="py-20 bg-bsandy-light">
    <div class="section-wrap">
      <div class="text-center mb-12">
        <h2 class="font-playfair font-bold text-[clamp(2.1rem,4.5vw,3rem)] text-btext tracking-tight">{{ t('What Students Say', 'Co mówią uczniowie') }}</h2>
        <div class="brand-divider"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-7">
        <div
          v-for="(review, i) in reviews" :key="i"
          v-reveal
          class="bg-white rounded-[14px] p-8 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
          :style="{ boxShadow: 'var(--shadow)', transitionDelay: `${i * 0.15}s` }"
        >
          <div class="flex gap-0.5">
            <i v-for="s in 5" :key="s" class="fas fa-star text-bsandy text-base"></i>
          </div>
          <div class="flex-1">
            <p
              class="text-btext-light italic leading-loose transition-all duration-300 overflow-hidden"
              :style="{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: expanded.has(i) ? 'unset' : '4', overflow: 'hidden' }"
            >{{ t(review.en.text, review.pl.text) }}</p>
            <button
              v-if="isLong(t(review.en.text, review.pl.text))"
              @click="toggle(i)"
              class="card-toggle-btn mt-3"
              style="color: #A24E64"
            >
              <span>{{ expanded.has(i) ? t('Show less', 'Zwiń') : t('Show more', 'Rozwiń') }}</span>
              <i
                class="fas fa-chevron-down transition-transform duration-300"
                :style="{ transform: expanded.has(i) ? 'rotate(180deg)' : 'rotate(0deg)' }"
              ></i>
            </button>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg shrink-0"
                 :style="{ background: i % 2 === 0 ? '#5C7053' : '#A24E64', color: '#fff' }">
              {{ review.initial }}
            </div>
            <div>
              <strong class="block text-btext text-sm">{{ review.name }}</strong>
              <span class="text-btext-light text-xs">{{ t(review.en.label, review.pl.label) }}</span>
              <span v-if="review.date" class="text-btext-light text-xs block">{{ review.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const expanded = reactive(new Set())
function toggle(i) { expanded.has(i) ? expanded.delete(i) : expanded.add(i) }
function isLong(text) { return text.length > 250 }

const reviews = [
  {
    initial: 'M', name: 'Madzia', date: '7 stycznia 2026',
    en: { text: '"I have lessons preparing me for the extended Matura exam, but I also had conversation lessons. I rate them 5/5 and I am really very satisfied. The teacher is incredibly kind and supportive, and the atmosphere in class is great, which makes me feel relaxed and not afraid to speak English. Lessons go by very quickly, yet I take away a lot of concrete knowledge — I can see great progress in myself. I also really appreciate that when I come with a problem from school (e.g. grammar or tasks), the teacher can explain everything and teach me even within one lesson. I wholeheartedly recommend lessons to anyone who wants to prepare well for the exam and genuinely improve their English."', label: 'Matura preparation & conversation' },
    pl: { text: '"Mam zajęcia przygotowujące do matury rozszerzonej, ale miałam też lekcje konwersacji. Oceniam je na 5/5 i jestem naprawdę bardzo zadowolona. Pani jest niezwykle miła i wspierająca, a atmosfera na zajęciach jest świetna, dzięki czemu czuję się swobodnie i nie boję się mówić po angielsku. Lekcje mijają bardzo szybko, a jednocześnie wynoszę z nich dużo konkretów — widzę u siebie duży postęp. Bardzo cenię też to, że gdy przyjdę z jakimś problemem ze szkoły (np. z gramatyki albo zadaniami), Pani potrafi mi wszystko wytłumaczyć i nauczyć mnie tego nawet w trakcie jednej lekcji. Zdecydowanie polecam zajęcia każdemu, kto chce się dobrze przygotować do egzaminu i realnie poprawić swój angielski."', label: 'Przygotowanie do matury i konwersacje' },
  },
  {
    initial: 'A', name: 'Ania', date: '20 maja 2026',
    en: { text: '"Ms. Ola prepared me brilliantly for the Matura exam in English. Thanks to our lessons I feel much more confident using the language and I cope significantly better with both grammar and speaking. The lessons were always conducted in a pleasant, stress-free atmosphere, and at the same time very specific and effective. I am still continuing lessons with Ms. Ola, now more conversation-based, because I can really see the results and feel more at ease in English. Highly recommended!"', label: 'Matura preparation & conversation' },
    pl: { text: '"Pani Ola świetnie przygotowała mnie do matury z angielskiego. Dzięki naszym lekcjom czuję się dużo pewniej w posługiwaniu się językiem i zdecydowanie lepiej radzę sobie zarówno z gramatyką, jak i mówieniem. Zajęcia zawsze były prowadzone w miłej atmosferze, bez stresu, a jednocześnie bardzo konkretnie i skutecznie. Nadal kontynuuję lekcje z panią Olą, tym razem bardziej konwersacyjne, bo naprawdę widzę efekty i czuję większą swobodę w angielskim. Bardzo polecam!"', label: 'Przygotowanie do matury i konwersacje' },
  },
  {
    initial: 'Ł', name: 'Łukasz', date: '23 kwietnia 2024',
    en: { text: '"Ola not only shares her knowledge of English brilliantly, but also knows how to adapt to my learning needs. Her commitment and flexible approach mean I feel more and more confident using the language. I am convinced that with her I will achieve my long-term learning goals, which is why I will definitely stay with her for the long run."', label: 'Comprehensive English' },
    pl: { text: '"Ola nie tylko doskonale przekazuje wiedzę z angielskiego, ale również potrafi dostosować się do moich potrzeb w nauce. Jej zaangażowanie i elastyczne podejście sprawiają, że czuję się coraz pewniej w posługiwaniu się językiem. Mam przekonanie, że dzięki niej osiągnę długoterminowe cele w nauce, dlatego zdecydowanie pozostanę z nią na dłużej."', label: 'Angielski kompleksowo' },
  },
  {
    initial: 'I', name: 'Iwona', date: '2 lipca 2023',
    en: { text: '"I am very grateful to Ola for the enormous warmth and patience she showed me while learning English. Very broad knowledge and the ability to share it, creativity, a haven of calm and full professionalism — that is exactly who Ola is :) I warmly recommend her :)"', label: 'Comprehensive English' },
    pl: { text: '"Jestem bardzo wdzięczna Oli za ogrom ciepła i cierpliwości, którym mnie obdarzyła podczas nauki języka angielskiego. Bardzo duża wiedza oraz umiejętność jej przekazywania, kreatywność, ostoja spokoju i pełny profesjonalizm - taka jest właśnie Ola :) Bardzo gorąco polecam :)"', label: 'Angielski kompleksowo' },
  },
  {
    initial: 'F', name: 'Filip', date: '23 sierpnia 2024',
    en: { text: '"I would like to warmly recommend lessons with Ola. The lessons were excellently planned and tailored to my needs. The materials were varied and effective, and the teacher was always patient and supportive. Thanks to systematic work and clear explanations, I not only mastered the required material but also gained confidence. I passed my Matura exam at a very high level, which exceeded my expectations. I am enormously grateful for the professional approach and I heartily recommend these lessons to anyone who wants to achieve great results!"', label: 'Matura preparation' },
    pl: { text: '"Chciałbym gorąco polecić zajęcia z Olą. Lekcje były doskonale zaplanowane i dostosowane do moich potrzeb. Materiały były różnorodne i skuteczne, a nauczycielka zawsze cierpliwa i wspierająca. Dzięki systematycznej pracy i klarownym wyjaśnieniom nie tylko opanowałem wymagany materiał, ale także nabrałem pewności siebie. Egzamin maturalny zdałem na bardzo wysokim poziomie, co przerosło moje oczekiwania. Jestem ogromnie wdzięczny za profesjonalne podejście i serdecznie polecam te zajęcia wszystkim, którzy chcą osiągnąć świetne wyniki!"', label: 'Przygotowanie do matury' },
  },
  {
    initial: 'A', name: 'Ania', date: '19 października 2024',
    en: { text: '"Aleksandra, with whom I had the pleasure of studying, is a true gem. Her passion for the language and her ability to convey knowledge make the lessons not only effective but also very enjoyable. Her patience and support make everyone feel motivated to learn. I recommend her wholeheartedly."', label: 'Comprehensive English' },
    pl: { text: '"Pani Aleksandra z którą miałam przyjemność się uczyć, to prawdziwy skarb. Jej pasja do języka i umiejętność przekazywania wiedzy sprawiają, że lekcje są nie tylko efektywne, ale także bardzo przyjemne, a jej cierpliwość i wsparcie sprawiają, że każdy czuje się zmotywowany do nauki. Polecam z całego serca."', label: 'Angielski kompleksowo' },
  },
  {
    initial: 'J', name: 'Justyna', date: '23 maja 2025',
    en: { text: '"I really enjoy attending English classes with Ola. I have been learning for two years now and I have come to know her as someone with an extraordinary passion for what she does. She is calm and warm-hearted. I have learned so much with her and I feel that my level of English has improved greatly. Ola always has excellently prepared materials for every lesson and explains every topic very well — exactly what we need to progress. I warmly recommend her!"', label: 'Comprehensive English' },
    pl: { text: '"Bardzo lubię uczęszczać na zajęcia z j. angielskiego do Pani Oli. Uczę się już od dwóch lat i poznałam Panią Olę jako osobę niezwykle pełną pasji w tym co robi. Jest pełna spokoju, o ciepłym sercu. Bardzo dużo się przy niej nauczyłam i czuję że mój poziom j. angielskiego bardzo się podniósł. Pani Ola zawsze ma świetnie przygotowane materiały na każdą lekcję i bardzo dobrze wykłada każdy materiał, który jest potrzebny do naszego rozwoju. Serdecznie polecam!"', label: 'Angielski kompleksowo' },
  },
  {
    initial: 'S', name: 'Sylwia i Szymon', date: '8 lipca 2025',
    en: { text: '"Ola has been teaching English to my son for several months — general lessons and preparation for the 8th-grade exam — and I can say with full conviction that it was the best decision we could have made. Ola is a teacher with enormous passion and dedication. Every lesson is thoughtful, carefully planned and fully tailored to the student\'s needs. My son quickly built a great rapport with her, which means learning takes place in a wonderful, stress-free atmosphere. It is clear that Ola not only knows the exam material inside out, but can also convey knowledge in a clear, accessible and motivating way. The progress my son has made in just a few months is truly impressive — his grammar has improved, as has his reading comprehension and written expression. Most importantly, he has gained confidence and stopped being afraid to speak English, which was previously a major barrier. Ola regularly keeps us informed about progress, clearly identifies strengths and areas for further work. She is also very punctual, organised and flexible, which we greatly appreciate. If you are looking for a tutor who really knows her stuff, can build a great relationship with young people and effectively prepare them for an exam — Ola is the perfect choice. I recommend her wholeheartedly!"', label: '8th-grade exam preparation — parent\'s review' },
    pl: { text: '"Pani Ola od kilku miesięcy prowadzi zajęcia z języka angielskiego z moim synem, nauka ogólna oraz w ramach przygotowań do egzaminu ósmoklasisty i z pełnym przekonaniem mogę powiedzieć, że to najlepsza decyzja, jaką mogliśmy podjąć.\n\nPani Ola to nauczycielka z ogromną pasją i zaangażowaniem. Każda lekcja jest przemyślana, starannie zaplanowana i w pełni dostosowana do potrzeb ucznia. Syn bardzo szybko złapał z nią dobry kontakt, dzięki czemu nauka przebiega w świetnej, bezstresowej atmosferze. Widać, że Pani Ola nie tylko świetnie zna materiał egzaminacyjny, ale też potrafi przekazać wiedzę w sposób jasny, przystępny i motywujący.\n\nPostępy, jakie zrobił mój syn w ciągu kilku miesięcy, są naprawdę imponujące – poprawiła się zarówno jego gramatyka, jak i umiejętność rozumienia tekstu czy pisania wypowiedzi pisemnych. Co najważniejsze – zyskał pewność siebie i przestał bać się mówić po angielsku, co wcześniej było dużą barierą.\n\nPani Ola regularnie przekazuje nam informacje o postępach, jasno wskazuje mocne strony oraz obszary do dalszej pracy. Jest przy tym bardzo punktualna, zorganizowana i elastyczna, co również bardzo cenimy.\n\nJeśli ktoś szuka korepetytorki, która naprawdę zna się na rzeczy, potrafi nawiązać świetny kontakt z młodzieżą i skutecznie przygotować do egzaminu – Pani Ola będzie idealnym wyborem. Z całego serca polecam!"', label: 'Przygotowanie do egzaminu 8-klasisty — opinia rodzica' },
  },
  {
    initial: 'B', name: 'Beata', date: '9 lipca 2025',
    en: { text: '"I highly recommend lessons with Ola. I have been attending classes for a year and I can see great progress. Ola is very patient and helpful. The lessons are also well prepared and tailored to my level. I recommend her again to anyone looking for a great teacher."', label: 'Comprehensive English' },
    pl: { text: '"Bardzo polecam lekcję z Olą. Na zajęcia uczęszczam od roku i widzę duże postępy. Ola jest bardzo cierpliwa i pomocna. Lekcje również są dobrze przygotowane i dostosowane do mojego poziomu. Jeszcze raz polecam wszystkim, którzy szukają świetnego nauczyciela."', label: 'Angielski kompleksowo' },
  },
]
</script>
