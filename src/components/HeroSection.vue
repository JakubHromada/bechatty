<template>
  <section
    id="home"
    ref="heroRef"
    class="relative min-h-[90vh] flex items-center overflow-hidden bg-bsandy-light px-6 py-20"
    @mousemove="onMouseMove"
  >
    <!-- Soft warm atmosphere: a few faint, heavily diffused washes (no candy pink/rose) -->
    <div class="hero-blob hero-blob--drift-a absolute w-[460px] h-[460px] rounded-full bg-bsandy opacity-[0.22] -top-32 -right-28 pointer-events-none blur-3xl"></div>
    <div class="hero-blob hero-blob--drift-b absolute w-[380px] h-[380px] rounded-full bg-bmustard opacity-[0.15] -bottom-20 -left-24 pointer-events-none blur-3xl"></div>
    <div class="hero-blob absolute w-[300px] h-[300px] rounded-full bg-bpink-dark opacity-[0.18] top-[45%] right-[26%] pointer-events-none blur-3xl"></div>

    <!-- Main content -->
    <div class="hero-animate w-full min-w-0 max-w-[720px] mx-auto text-center relative z-2">
      <h1 ref="titleRef" class="font-playfair font-bold text-[clamp(2.1rem,4.6vw,3.75rem)] text-btext leading-[1.15] tracking-tight mb-6" style="text-wrap: balance;">
        {{ t('Speak English, with confidence and no barriers', 'Mów po angielsku, pewnie i bez blokady') }}
      </h1>
      <p ref="subtitleRef" class="font-lato text-btext-light text-base md:text-lg mb-10 max-w-[560px] mx-auto leading-relaxed">
        {{ t('Online lessons for teenagers and adults.', 'Lekcje online dla młodzieży i dorosłych.') }}
      </p>
      <div ref="btnsRef" class="flex gap-4 justify-center flex-wrap">
        <a href="#contact" class="hero-btn-primary">
          {{ t('Book a Trial Lesson', 'Umów lekcję próbną') }}
        </a>
        <a href="#about" class="hero-btn-outline">
          {{ t('Learn More', 'Dowiedz się więcej') }}
        </a>
      </div>

      <!-- Trust strip -->
      <div class="flex flex-wrap gap-x-5 gap-y-2 sm:gap-6 md:gap-8 justify-center mt-10 sm:mt-12 text-xs sm:text-sm md:text-base font-bold text-btext tracking-wide">
        <span class="flex items-center gap-1.5 md:gap-2 shrink-0">
          <i class="fas fa-award text-bmustard text-sm md:text-lg"></i>
          {{ t('10+ years experience', '10+ lat doświadczenia') }}
        </span>
        <span class="flex items-center gap-1.5 md:gap-2 shrink-0">
          <i class="fas fa-users text-bmustard text-sm md:text-lg"></i>
          {{ t('450+ happy students', '450+ zadowolonych uczniów') }}
        </span>
        <span class="flex items-center gap-1.5 md:gap-2 shrink-0">
          <i class="fas fa-chart-line text-bmustard text-sm md:text-lg"></i>
          {{ t('Exam results: 90%+', 'Wyniki egzaminów na poziomie 90%+') }}
        </span>
      </div>
    </div>

    <!-- Word bubbles spawned on mouse move -->
    <div
      v-for="b in bubbles" :key="b.id"
      class="word-bubble"
      :style="{ left: b.x + 'px', top: b.y + 'px' }"
    >
      <span class="bubble-pl">{{ b.pair.pl }}</span>
      <span class="bubble-en">{{ b.pair.en }}</span>
    </div>

    <!-- Static signature bubbles for touch devices (the mouse trail is pointer-only) -->
    <div class="word-bubble word-bubble--static md:hidden" style="top: 13%; left: 5%;">
      <span class="bubble-pl">cześć</span>
      <span class="bubble-en">hi there</span>
    </div>
    <div class="word-bubble word-bubble--static md:hidden" style="top: 17%; right: 5%;">
      <span class="bubble-pl">brawo</span>
      <span class="bubble-en">well done</span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const heroRef     = ref(null)
const btnsRef     = ref(null)
const titleRef    = ref(null)
const subtitleRef = ref(null)
const bubbles     = ref([])

let lastBubbleTime = 0
let lastMouseX = 0, lastMouseY = 0
let lastIdx = -1
let bubbleId = 0

const reducedMotion = typeof window !== 'undefined'
  && window.matchMedia
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Vocabulary-style positive PL/EN pairs spanning A2 → C1.
// Single words and short phrases, no greeting-card platitudes, no imperatives.
const wordPairs = [
  // A2
  { pl: 'brawo',         en: 'well done'   },
  { pl: 'super',         en: 'lovely'      },
  { pl: 'świetnie',      en: 'great'       },
  { pl: 'radość',        en: 'joy'         },
  { pl: 'nadzieja',      en: 'hope'        },
  { pl: 'odwaga',        en: 'courage'     },
  { pl: 'uśmiech',       en: 'smile'       },
  { pl: 'pewność',       en: 'confidence'  },
  { pl: 'ciekawość',     en: 'curiosity'   },
  { pl: 'spokój',        en: 'calm'        },

  // B1
  { pl: 'powodzenia',    en: 'good luck'   },
  { pl: 'fantastycznie', en: 'fantastic'   },
  { pl: 'ciepło',        en: 'warmth'      },
  { pl: 'przyjaźń',      en: 'friendship'  },
  { pl: 'wsparcie',      en: 'support'     },
  { pl: 'zaufanie',      en: 'trust'       },
  { pl: 'wdzięczność',   en: 'gratitude'   },
  { pl: 'naturalnie',    en: 'naturally'   },
  { pl: 'swobodnie',     en: 'at ease'     },
  { pl: 'zachwyt',       en: 'wonder'      },

  // B2
  { pl: 'inspirujące',   en: 'inspiring'   },
  { pl: 'imponujące',    en: 'impressive'  },
  { pl: 'zachwycające',  en: 'wonderful'   },
  { pl: 'cierpliwość',   en: 'patience'    },
  { pl: 'harmonia',      en: 'harmony'     },
  { pl: 'życzliwość',    en: 'kindness'    },
  { pl: 'uważność',      en: 'mindfulness' },
  { pl: 'szczerość',     en: 'sincerity'   },
  { pl: 'spełnienie',    en: 'fulfilment'  },
  { pl: 'życzliwie',     en: 'warmly'      },

  // C1
  { pl: 'niezwykłe',     en: 'remarkable'    },
  { pl: 'niesamowite',   en: 'extraordinary' },
  { pl: 'olśniewające',  en: 'dazzling'      },
  { pl: 'urokliwe',      en: 'charming'      },
  { pl: 'autentycznie',  en: 'genuinely'     },
  { pl: 'swoboda',       en: 'ease'          },
  { pl: 'niezapomniane', en: 'unforgettable' },
  { pl: 'subtelność',    en: 'subtlety'      },
  { pl: 'delikatność',   en: 'delicacy'      },
  { pl: 'z przyjemnością', en: 'with pleasure' },
]

function onMouseMove(e) {
  if (reducedMotion || !heroRef.value) return
  const rect = heroRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const now = Date.now()

  if (now - lastBubbleTime < 600) return
  const dx = e.clientX - lastMouseX
  const dy = e.clientY - lastMouseY
  if (Math.sqrt(dx * dx + dy * dy) < 45) return

  // Avoid spawning over headline, subtitle, or buttons
  const blockers = [titleRef.value, subtitleRef.value, btnsRef.value]
  for (const el of blockers) {
    if (!el) continue
    const r = el.getBoundingClientRect()
    if (e.clientX >= r.left - 20 && e.clientX <= r.right + 20 &&
        e.clientY >= r.top  - 20 && e.clientY <= r.bottom + 20) return
  }

  lastBubbleTime = now
  lastMouseX = e.clientX
  lastMouseY = e.clientY

  let idx
  do { idx = Math.floor(Math.random() * wordPairs.length) } while (idx === lastIdx)
  lastIdx = idx

  const ox = (Math.random() - 0.5) * 80
  const id = bubbleId++
  bubbles.value.push({ id, pair: wordPairs[idx], x: x + ox - 50, y: y - 60 })
  setTimeout(() => { bubbles.value = bubbles.value.filter(b => b.id !== id) }, 2400)
}
</script>
