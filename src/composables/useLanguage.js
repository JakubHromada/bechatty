import { ref } from 'vue'

function applyLang(lang) {
  document.documentElement.lang = lang
  document.title = lang === 'en'
    ? 'BeChatty — Online English School'
    : 'BeChatty — Nauczyciel angielskiego'
}

// Module-level ref — shared across all components (singleton)
const currentLang = ref(localStorage.getItem('bechatty-lang') || 'pl')

// Sync <html lang> + document.title to the stored preference on first load,
// not only when the user clicks the toggle.
applyLang(currentLang.value)

export function useLanguage() {
  function setLang(lang) {
    currentLang.value = lang
    localStorage.setItem('bechatty-lang', lang)
    applyLang(lang)
  }

  /** Return English or Polish string based on current language */
  function t(en, pl) {
    return currentLang.value === 'en' ? en : pl
  }

  return { currentLang, setLang, t }
}
