import { ref } from 'vue'

// Site is Polish-only for now — kept as a ref/t() pair so components
// that call t(en, pl) don't need to change when English comes back.
const currentLang = ref('pl')

document.documentElement.lang = currentLang.value
document.title = 'BeChatty: Nauczyciel angielskiego'

export function useLanguage() {
  /** Return English or Polish string based on current language */
  function t(en, pl) {
    return currentLang.value === 'en' ? en : pl
  }

  return { currentLang, t }
}
