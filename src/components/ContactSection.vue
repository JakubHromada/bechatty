<template>
  <section id="contact" class="py-20 bg-bmustard-light">
    <div class="section-wrap">
      <div class="text-center mb-12">
        <h2 class="font-playfair font-bold text-[clamp(2.1rem,4.5vw,3rem)] text-btext tracking-tight">{{ t('Write to me', 'Napisz do mnie') }}</h2>
        <div class="brand-divider"></div>
        <p class="text-btext-light mt-2 max-w-[640px] mx-auto">
          {{ t('Want to see what lessons with me look like? Book a trial lesson. It is a great chance for us to meet, talk about your goals, and check your current level.', 'Chcesz zobaczyć jak wyglądają zajęcia ze mną? Umów lekcję próbną. To świetna okazja, żeby się poznać, porozmawiać o Twoich celach i sprawdzić na jakim poziomie jesteś.') }}<br/>
          {{ t('Relaxed atmosphere, zero stress:)', 'Luźna atmosfera, zero stresu:)') }}
        </p>
      </div>

      <div class="grid md:grid-cols-[1fr_2fr] gap-12">
        <!-- Info -->
        <div>
          <h3 class="font-playfair text-2xl text-btext mb-4">{{ t('Time to learn the language?', 'Czas na naukę języka?') }}</h3>
          <p class="text-btext-light mb-6">
            {{ t('Want to come on board? ', 'Chcesz wskoczyć na pokład? ') }}<a href="#contact-form" @click="focusName" class="text-bsage-dark font-bold hover:text-brose-dark transition-colors cursor-pointer">{{ t('Sign up for lessons.', 'Zapisz się na zajęcia.') }}</a>{{ t(' Got questions? Happy to answer.', ' Masz pytania? Chętnie odpowiem.') }}
          </p>
          <div class="flex flex-col gap-3 mb-6">
            <div class="flex items-center gap-3 text-btext-light text-sm">
              <i class="fas fa-envelope text-bsage w-5 text-center"></i>
              <a href="mailto:learnwithaleks@gmail.com" class="hover:text-bsage transition-colors">learnwithaleks@gmail.com</a>
            </div>
            <div class="flex items-center gap-3 text-btext-light text-sm">
              <i class="fas fa-phone text-bsage w-5 text-center"></i>
              <a href="tel:+48783433335" class="hover:text-bsage transition-colors">(+48) 783 433 335</a>
            </div>
            <div class="flex items-center gap-3 text-btext-light text-sm">
              <i class="fab fa-instagram text-bsage w-5 text-center"></i>
              <a href="https://www.instagram.com/be_chatty/" target="_blank" rel="noopener" class="hover:text-bsage transition-colors">@be_chatty</a>
            </div>
            <div class="flex items-center gap-3 text-btext-light text-sm">
              <i class="fab fa-facebook text-bsage w-5 text-center"></i>
              <a href="https://www.facebook.com/profile.php?id=61564479697405" target="_blank" rel="noopener" class="hover:text-bsage transition-colors">Facebook</a>
            </div>
            <div class="flex items-center gap-3 text-btext-light text-sm">
              <i class="fas fa-building text-bsage w-5 text-center"></i>
              <span>NIP: <span class="font-medium">5512651594</span></span>
            </div>
          </div>
        </div>

        <!-- Form -->
        <form id="contact-form" @submit.prevent="handleSubmit" novalidate class="flex flex-col gap-5">
          <div class="flex flex-col gap-1.5">
            <label for="cf-name" class="text-sm font-bold text-btext">{{ t('Your Name *', 'Twoje imię *') }}</label>
            <input id="cf-name" ref="nameInput" v-model="form.name" type="text" class="input-field"
              :placeholder="t('e.g. Maria Smith', 'np. Maria Kowalska')" required />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="cf-email" class="text-sm font-bold text-btext">{{ t('Your Email *', 'Twój email *') }}</label>
            <input id="cf-email" v-model="form.email" type="email" class="input-field"
              placeholder="e.g. maria@email.com" required />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="cf-phone" class="text-sm font-bold text-btext">{{ t('Phone (optional)', 'Numer telefonu (opcjonalnie)') }}</label>
            <input id="cf-phone" v-model="form.phone" type="tel" class="input-field"
              :placeholder="t('e.g. +48 123 456 789', 'np. +48 123 456 789')" />
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="cf-level" class="text-sm font-bold text-btext">{{ t('Your English Level (optional)', 'Twój poziom angielskiego (opcjonalnie)') }}</label>
            <select id="cf-level" v-model="form.level" class="input-field">
              <option value="" disabled hidden>{{ t('Select your level', 'Wybierz poziom') }}</option>
              <option value="beginner">{{ t('Beginner (A1/A2)', 'Początkujący (A1/A2)') }}</option>
              <option value="intermediate">{{ t('Intermediate (B1/B2)', 'Średniozaawansowany (B1/B2)') }}</option>
              <option value="advanced">{{ t('Advanced (C1/C2)', 'Zaawansowany (C1/C2)') }}</option>
              <option value="unsure">{{ t("I'm not sure", 'Nie jestem pewien/pewna') }}</option>
            </select>
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="cf-message" class="text-sm font-bold text-btext">{{ t('Your Message *', 'Twoja wiadomość *') }}</label>
            <textarea id="cf-message" v-model="form.message" rows="5" class="input-field resize-y"
              :placeholder="t('Tell me about your goals, availability, or any questions you have...', 'Napisz o swoich celach, dostępności lub pytaniach...')"
              required></textarea>
          </div>
          <button type="submit" :disabled="sending" class="btn-primary w-full opacity-100 disabled:opacity-60 disabled:cursor-not-allowed">
            <i :class="sending ? 'fas fa-spinner fa-spin mr-2' : 'fas fa-paper-plane mr-2'"></i>
            {{ sending ? t('Sending…', 'Wysyłanie…') : t('Send Message', 'Wyślij wiadomość') }}
          </button>
          <p v-if="note.text" class="text-center text-sm font-bold" :style="{ color: note.color }">{{ note.text }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t, currentLang } = useLanguage()

// ← Paste your Web3Forms access key here (get it free at web3forms.com)
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE'

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
  },
  pl: {
    required: 'Proszę wypełnić wszystkie wymagane pola oznaczone *',
    email:    'Proszę podać prawidłowy adres email.',
    success:  '✓ Dziękuję! Twoja wiadomość została odebrana. Odezwę się wkrótce.',
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

  sending.value = true
  note.text = ''

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject:    `Nowa wiadomość od ${form.name} — BeChatty`,
        from_name:  'BeChatty Contact Form',
        name:       form.name,
        email:      form.email,
        phone:      form.phone || '—',
        level:      form.level || '—',
        message:    form.message,
      }),
    })
    const data = await res.json()
    if (data.success) {
      note.text = msgs[lang].success
      note.color = '#D88098'
      Object.assign(form, { name: '', email: '', phone: '', level: '', message: '' })
    } else {
      throw new Error(data.message)
    }
  } catch {
    note.text  = lang === 'pl'
      ? 'Coś poszło nie tak. Spróbuj napisać bezpośrednio na learnwithaleks@gmail.com'
      : 'Something went wrong. Please email learnwithaleks@gmail.com directly.'
    note.color = '#B23A3A'
  } finally {
    sending.value = false
  }
}
</script>
