<template>
  <section id="home" class="relative overflow-hidden bg-linen">
    <!-- Ambient brand atmosphere -->
    <div class="hero-decor" aria-hidden="true">
      <span class="glow glow--sage"></span>
      <span class="glow glow--terra"></span>
    </div>

    <div class="section-wrap relative section-y lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-center">

      <!-- Text column — kept lean so the chat can breathe -->
      <div class="lg:col-span-6" v-reveal>
        <span class="eyebrow mb-5">
          <span class="chat-dots text-sage-deep"><i></i><i></i><i></i></span>
          {{ t('Online English school', 'Szkoła języka angielskiego online') }}
        </span>

        <h1 class="hero-title text-walnut text-[clamp(2.5rem,5vw,4rem)]" v-html="t(headline.en, headline.pl)"></h1>

        <p class="mt-6 text-ink-soft text-[1.075rem] leading-relaxed max-w-[42ch]">
          {{ t(headline.subEn, headline.subPl) }}
        </p>

        <div class="mt-9">
          <a href="#contact" class="btn-primary">
            {{ t('Book a trial lesson', 'Umów lekcję próbną') }}
            <i class="fas fa-arrow-right text-[0.8em]" aria-hidden="true"></i>
          </a>
        </div>

        <!-- a quiet, confident proof row -->
        <ul class="proof mt-10">
          <li v-for="s in stats" :key="s.en" class="proof-item">
            <span class="proof-num num">{{ s.value }}</span>
            <span class="proof-label">{{ t(s.en, s.pl) }}</span>
          </li>
        </ul>
      </div>

      <!-- The conversation — a real chat thread. Be chatty. -->
      <div class="lg:col-span-6 mt-14 lg:mt-0">
        <div class="convo" role="img"
             :aria-label="t('A sample conversation: a hesitant learner, reassured by the teacher', 'Przykładowa rozmowa: niepewny uczeń, uspokojony przez nauczycielkę')">

          <div class="c-row c-row--in arrive a1">
            <div class="c-bubble c-bubble--in">
              <p>{{ t(convo.learnerEn, convo.learnerPl) }}</p>
            </div>
          </div>

          <div class="c-row c-row--out arrive a2">
            <div class="c-bubble c-bubble--out">
              <p>{{ t(convo.teacherEn, convo.teacherPl) }}</p>
              <span class="c-name">Ola · BeChatty</span>
            </div>
            <span class="c-avatar">
              <img src="/logo-sage.png" alt="BeChatty" width="56" height="56" />
              <span class="c-dot" aria-hidden="true"></span>
            </span>
          </div>

          <a href="#contact" class="c-row c-row--out c-typing-link arrive a3">
            <span class="c-typing">
              <span class="chat-dots" aria-hidden="true"><i></i><i></i><i></i></span>
              {{ t('Your turn — say hello', 'Twoja kolej — napisz') }}
            </span>
          </a>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const headline = {
  en: 'Speak English with <em>confidence</em>, not hesitation.',
  pl: 'Mów po angielsku <em>pewnie</em>, bez blokady.',
  subEn: 'Personalised online lessons for teenagers and adults — exam prep, conversation, and lasting fluency.',
  subPl: 'Spersonalizowane lekcje online dla młodzieży i dorosłych — egzaminy, konwersacje i trwała swoboda.',
}

const convo = {
  learnerEn: 'I understand a lot, but the moment I have to speak — I freeze.',
  learnerPl: 'Rozumiem sporo, ale gdy mam coś powiedzieć — blokada.',
  teacherEn: "That's exactly what we'll unlock — you'll be speaking from the very first lesson. Calmly, no judgement.",
  teacherPl: 'To właśnie odblokujemy — będziesz mówić od pierwszej lekcji. Spokojnie, bez oceniania.',
}

const stats = [
  { value: '10+',  en: 'years', pl: 'lat doświadczenia' },
  { value: '450+', en: 'students', pl: 'uczniów' },
  { value: '90%+', en: 'avg. exam results', pl: 'średnie wyniki' },
]
</script>

<style scoped>
.hero-title { font-weight: 540; line-height: 1.02; letter-spacing: -0.026em; }

/* the emphasis word is "marked" with a soft terracotta stroke — the teacher's
   pen, not a highlighter. Drawn as an SVG so it keeps a hand-made curve. */
.hero-title :deep(em) {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 14' preserveAspectRatio='none'%3E%3Cpath d='M3 9 C 55 3.5, 150 3, 197 7.5' fill='none' stroke='%23C45028' stroke-width='3.2' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: 0 92%;
  background-size: 100% 0.34em;
  padding-bottom: 0.06em;
}

.hero-decor { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.glow { position: absolute; border-radius: 50%; filter: blur(66px); }
.glow--sage  { width: 46vw; height: 46vw; max-width: 640px; max-height: 640px; top: -24%; right: -8%;
               background: radial-gradient(circle, var(--sage) 0%, transparent 68%); opacity: 0.55; }
.glow--terra { width: 34vw; height: 34vw; max-width: 440px; max-height: 440px; bottom: -30%; left: -12%;
               background: radial-gradient(circle, var(--terra) 0%, transparent 70%); opacity: 0.18; }

/* proof row: serif numerals lead, hairline-divided, scannable but unshouty.
   Dividers only kick in once the row is wide enough not to wrap — otherwise a
   wrapped stat would carry a stray leading hairline. */
.proof { display: flex; flex-wrap: wrap; gap: 0.9rem 1.6rem; }
.proof-item { display: flex; flex-direction: column; gap: 0.12rem; }
.proof-num { font-size: 1.65rem; line-height: 1; color: var(--sage-deep); }
.proof-label { font-size: 0.82rem; line-height: 1.3; color: var(--ink-mute); }
@media (min-width: 600px) {
  .proof { gap: 1.7rem; }
  .proof-item { padding-left: 1.7rem; border-left: 1px solid var(--line); }
  .proof-item:first-child { padding-left: 0; border-left: none; }
}

/* ── The conversation ─────────────────────────────── */
.convo { position: relative; display: flex; flex-direction: column; gap: 1rem; max-width: 30rem; margin-inline: auto; }
.c-row { display: flex; align-items: flex-end; gap: 0.7rem; }
.c-row--in  { justify-content: flex-start; }
.c-row--out { justify-content: flex-end; }

.c-bubble {
  position: relative; max-width: 23rem;
  padding: 0.95rem 1.2rem;
  font-size: 1rem; line-height: 1.5; color: var(--ink);
  box-shadow: var(--shadow);
}
.c-bubble p { text-wrap: pretty; }
/* incoming — the learner, in sage */
.c-bubble--in {
  background: var(--sage-soft);
  border: 1px solid color-mix(in oklch, var(--sage) 32%, var(--linen));
  border-radius: 20px 20px 20px 6px;
}
/* outgoing — Ola, in warm white */
.c-bubble--out {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px 20px 6px 20px;
}
.c-name {
  display: block; margin-top: 0.5rem;
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.04em; color: var(--sage-deep);
}

/* Ola's avatar — circular (echoes the round logo), with a presence dot */
.c-avatar { position: relative; flex-shrink: 0; width: 3rem; height: 3rem; }
.c-avatar img {
  width: 3rem; height: 3rem; border-radius: 50%; object-fit: cover; object-position: center;
  border: 2px solid var(--surface); box-shadow: var(--shadow);
}
.c-dot {
  position: absolute; right: 1px; bottom: 1px; width: 0.7rem; height: 0.7rem;
  border-radius: 50%; background: var(--sage); border: 2px solid var(--surface);
  box-shadow: 0 0 0 0 color-mix(in oklch, var(--sage) 70%, transparent);
  animation: pulse 2.6s var(--ease-quint) infinite;
}
@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 color-mix(in oklch, var(--sage) 60%, transparent); }
  70%  { box-shadow: 0 0 0 8px color-mix(in oklch, var(--sage) 0%, transparent); }
  100% { box-shadow: 0 0 0 0 color-mix(in oklch, var(--sage) 0%, transparent); }
}

/* the typing indicator — invites the visitor to reply (links to contact) */
.c-typing-link { text-decoration: none; }
.c-typing {
  display: inline-flex; align-items: center; gap: 0.6rem;
  padding: 0.65rem 1.05rem; border-radius: 18px 18px 6px 18px;
  background: var(--terra-soft); color: var(--terra-deep);
  border: 1px solid color-mix(in oklch, var(--terra) 30%, var(--linen));
  font-weight: 700; font-size: 0.9rem;
  transition: transform .35s var(--ease-quint), box-shadow .35s var(--ease-quint);
}
.c-typing-link:hover .c-typing { transform: translateY(-2px); box-shadow: var(--shadow); }
.c-typing .chat-dots { color: var(--terra); font-size: 1.05rem; }
.c-typing .chat-dots i { animation: blink 1.4s ease-in-out infinite both; }
.c-typing .chat-dots i:nth-child(2) { animation-delay: 0.2s; }
.c-typing .chat-dots i:nth-child(3) { animation-delay: 0.4s; }
@keyframes blink { 0%, 80%, 100% { opacity: 0.3; } 40% { opacity: 1; } }

/* messages "arrive" in sequence — the chat unfolding */
.arrive { animation: arrive .65s var(--ease-expo) both; }
.a1 { animation-delay: .35s; }
.a2 { animation-delay: .75s; }
.a3 { animation-delay: 1.15s; }
@keyframes arrive { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }

@media (prefers-reduced-motion: reduce) {
  .arrive { animation: none; }
  .c-dot { animation: none; }
  .c-typing .chat-dots i { animation: none; opacity: 1; }
}
</style>
