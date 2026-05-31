import { createApp } from 'vue'
import 'virtual:uno.css'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// v-reveal: fade-in elements as they scroll into view
app.directive('reveal', {
  beforeMount(el) {
    el.classList.add('reveal')
  },
  mounted(el) {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      }),
      { threshold: 0.12 }
    )
    observer.observe(el)
  },
})

app.mount('#app')
