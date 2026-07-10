<template>
  <section id="contact" class="py-24 bg-linen" aria-labelledby="contact-heading">
    <div class="section-wrap">

      <!-- Header (left-aligned, hairline instead of centered divider) -->
      <div class="max-w-[58ch]" v-reveal>
        <span class="eyebrow mb-4">{{ t('Let\'s talk', 'Porozmawiajmy') }}</span>
        <h2 id="contact-heading" class="font-bold text-ink text-[clamp(2rem,4vw,3rem)]">{{ t('Write to me', 'Napisz do mnie') }}</h2>
        <p class="mt-4 text-ink-soft leading-relaxed">
          {{ t('Want to see what lessons with me look like? Book a trial lesson. It is a great chance for us to meet, talk about your goals, and check your current level.', 'Chcesz zobaczyć jak wyglądają zajęcia ze mną? Umów lekcję próbną. To świetna okazja, żeby się poznać, porozmawiać o Twoich celach i sprawdzić na jakim poziomie jesteś.') }}<br/>
          {{ t('Relaxed atmosphere, zero stress:)', 'Luźna atmosfera, zero stresu:)') }}
        </p>
      </div>
      <div class="mt-8 border-t border-line"></div>

      <div class="mt-12 grid gap-12 md:grid-cols-[1fr_2fr] items-start">

        <!-- Info / reassurance rail -->
        <div class="md:sticky md:top-28 bg-$sage-soft border border-$sage-line rounded-2xl p-7 shadow-[var(--shadow)]" v-reveal>
          <h3 class="font-bold text-xl text-ink mb-3">{{ t('Time to learn the language?', 'Czas na naukę języka?') }}</h3>
          <p class="text-ink-soft mb-6">
            {{ t('Want to come on board? ', 'Chcesz wskoczyć na pokład? ') }}<a href="#contact-form" @click="focusName" class="text-sage-deep font-bold hover:underline cursor-pointer">{{ t('Sign up for lessons.', 'Zapisz się na zajęcia.') }}</a>{{ t(' Got questions? Happy to answer.', ' Masz pytania? Chętnie odpowiem.') }}
          </p>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3 text-ink-soft text-sm">
              <i class="fas fa-envelope text-sage-deep w-5 text-center" aria-hidden="true"></i>
              <a href="mailto:learnwithaleks@gmail.com" class="hover:text-sage-deep transition-colors">learnwithaleks@gmail.com</a>
            </div>
            <div class="flex items-center gap-3 text-ink-soft text-sm">
              <i class="fas fa-phone text-sage-deep w-5 text-center" aria-hidden="true"></i>
              <a href="tel:+48783433335" class="hover:text-sage-deep transition-colors">(+48) 783 433 335</a>
            </div>
            <div class="flex items-center gap-3 text-ink-soft text-sm">
              <i class="fab fa-instagram text-sage-deep w-5 text-center" aria-hidden="true"></i>
              <a href="https://www.instagram.com/be_chatty/" target="_blank" rel="noopener" class="hover:text-sage-deep transition-colors">@be_chatty<span class="sr-only"> {{ t('(opens in a new tab)', '(otwiera się w nowej karcie)') }}</span></a>
            </div>
            <div class="flex items-center gap-3 text-ink-soft text-sm">
              <i class="fab fa-facebook text-sage-deep w-5 text-center" aria-hidden="true"></i>
              <a href="https://www.facebook.com/profile.php?id=61564479697405" target="_blank" rel="noopener" class="hover:text-sage-deep transition-colors">Facebook<span class="sr-only"> {{ t('(opens in a new tab)', '(otwiera się w nowej karcie)') }}</span></a>
            </div>
            <div class="flex items-center gap-3 text-ink-soft text-sm">
              <i class="fas fa-building text-sage-deep w-5 text-center" aria-hidden="true"></i>
              <span>NIP: <span class="font-medium">5512651594</span></span>
            </div>
          </div>
        </div>

        <!-- Form -->
        <form id="contact-form" @submit.prevent="handleSubmit" novalidate class="card p-7 lg:p-8 flex flex-col gap-5" v-reveal style="transition-delay:.08s">
          <p class="text-sm text-ink-soft">{{ t('Fields marked * are required.', 'Pola oznaczone * są wymagane.') }}</p>

          <div class="flex flex-col gap-1.5">
            <label for="cf-name" class="text-sm font-bold text-ink">{{ t('Your Name *', 'Twoje imię *') }}</label>
            <input id="cf-name" ref="nameInput" v-model="form.name" type="text" class="input-field" aria-required="true"
              :placeholder="t('e.g. Maria Smith', 'np. Maria Kowalska')" required />
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="cf-email" class="text-sm font-bold text-ink">{{ t('Your Email *', 'Twój email *') }}</label>
            <input id="cf-email" v-model="form.email" type="email" class="input-field" aria-required="true"
              placeholder="e.g. maria@email.com" required />
          </div>

          <div class="grid sm:grid-cols-2 gap-5">
            <div class="flex flex-col gap-1.5">
              <label for="cf-phone" class="text-sm font-bold text-ink">{{ t('Phone (optional)', 'Numer telefonu (opcjonalnie)') }}</label>
              <input id="cf-phone" v-model="form.phone" type="tel" class="input-field"
                :placeholder="t('e.g. +48 123 456 789', 'np. +48 123 456 789')" />
            </div>
            <div class="flex flex-col gap-1.5">
              <label for="cf-level" class="text-sm font-bold text-ink">{{ t('Your English Level (optional)', 'Twój poziom angielskiego (opcjonalnie)') }}</label>
              <select id="cf-level" v-model="form.level" class="input-field">
                <option value="" disabled hidden>{{ t('Select your level', 'Wybierz poziom') }}</option>
                <option value="beginner">{{ t('Beginner (A1/A2)', 'Początkujący (A1/A2)') }}</option>
                <option value="intermediate">{{ t('Intermediate (B1/B2)', 'Średniozaawansowany (B1/B2)') }}</option>
                <option value="advanced">{{ t('Advanced (C1/C2)', 'Zaawansowany (C1/C2)') }}</option>
                <option value="unsure">{{ t("I'm not sure", 'Nie jestem pewien/pewna') }}</option>
              </select>
            </div>
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="cf-message" class="text-sm font-bold text-ink">{{ t('Your Message *', 'Twoja wiadomość *') }}</label>
            <textarea id="cf-message" v-model="form.message" rows="5" class="input-field resize-y" aria-required="true"
              :placeholder="t('Tell me about your goals, availability, or any questions you have...', 'Napisz o swoich celach, dostępności lub pytaniach...')"
              required></textarea>
          </div>

          <button type="submit" :disabled="sending" :aria-busy="sending ? 'true' : 'false'" class="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
            <i :class="sending ? 'fas fa-spinner fa-spin mr-2' : 'fas fa-paper-plane mr-2'" aria-hidden="true"></i>
            {{ sending ? t('Sending…', 'Wysyłanie…') : t('Send Message', 'Wyślij wiadomość') }}
          </button>
          <p aria-live="polite" class="text-center text-sm font-bold min-h-[1.25rem]" :style="{ color: note.color }">{{ note.text }}</p>
        </form>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t, currentLang } = useLanguage()

// Set VITE_WEB3FORMS_KEY in a .env file (see .env.example). While unset, the
// form skips the request and shows the "email me directly" fallback.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

const form      = reactive({ name: '', email: '', phone: '', level: '', message: '' })
const note      = reactive({ text: '', color: '' })
const sending   = ref(false)
const nameInput = ref(null)

function focusName() {
  setTimeout(() => nameInput.value?.focus(), 450)
}

const msgs = {
  en: {
    required: 'Please fill in all required fields marked with *',
    email:    'Please enter a valid email address.',
    success:  '✓ Thank you! Your message has been received. I will get back to you soon.',
    failure:  'Something went wrong. Please email learnwithaleks@gmail.com directly.',
  },
  pl: {
    required: 'Proszę wypełnić wszystkie wymagane pola oznaczone *',
    email:    'Proszę podać prawidłowy adres email.',
    success:  '✓ Dziękuję! Twoja wiadomość została odebrana. Odezwę się wkrótce.',
    failure:  'Coś poszło nie tak. Spróbuj napisać bezpośrednio na learnwithaleks@gmail.com',
  },
}

async function handleSubmit() {
  const lang = currentLang.value
  if (!form.name || !form.email || !form.message) {
    note.text = msgs[lang].required; note.color = '#B23A3A'; return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    note.text = msgs[lang].email; note.color = '#B23A3A'; return
  }
  // No key configured yet: skip the doomed request, point to direct email.
  if (!WEB3FORMS_KEY) {
    note.text = msgs[lang].failure; note.color = '#B23A3A'; return
  }

  sending.value = true
  note.text = ''

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject:    `Nowa wiadomość od ${form.name}: BeChatty`,
        from_name:  'BeChatty Contact Form',
        name:       form.name,
        email:      form.email,
        phone:      form.phone || '-',
        level:      form.level || '-',
        message:    form.message,
      }),
    })
    const data = await res.json()
    if (data.success) {
      note.text = msgs[lang].success
      note.color = 'var(--sage-deep)'
      Object.assign(form, { name: '', email: '', phone: '', level: '', message: '' })
    } else {
      throw new Error(data.message)
    }
  } catch {
    note.text = msgs[lang].failure
    note.color = '#B23A3A'
  } finally {
    sending.value = false
  }
}
</script>
