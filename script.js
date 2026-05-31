// =====================================================
// ENGLISH TEACHER PORTFOLIO — JAVASCRIPT
// =====================================================

// --- Language Switcher ---
const formMsgs = {
  en: {
    required: 'Please fill in all required fields (marked with *).',
    email:    'Please enter a valid email address.',
    success:  '✓ Thank you! Your message has been received. I will get back to you soon.'
  },
  pl: {
    required: 'Proszę wypełnić wszystkie wymagane pola (oznaczone *).',
    email:    'Proszę podać prawidłowy adres email.',
    success:  '✓ Dziękuję! Twoja wiadomość została odebrana. Odezwę się wkrótce.'
  }
};

let currentLang = localStorage.getItem('bechatty-lang') || 'pl';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('bechatty-lang', lang);

  // Switch all translatable text elements
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.pl;
  });

  // Switch input placeholders
  document.querySelectorAll('[data-placeholder-en]').forEach(el => {
    el.placeholder = lang === 'en' ? el.dataset.placeholderEn : el.dataset.placeholderPl;
  });

  // Highlight active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update <html lang> and page title
  document.documentElement.lang = lang;
  document.title = lang === 'en'
    ? 'BeChatty — English Teacher'
    : 'BeChatty — Nauczyciel angielskiego';
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// Apply saved language on load
applyLanguage(currentLang);

// --- Mobile Navigation Toggle ---
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const icon = navToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const icon = navToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  });
});

// --- Navbar shadow on scroll ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.12)';
  } else {
    navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
  }
});

// --- Contact Form Validation & Feedback ---
const contactForm = document.getElementById('contactForm');
const formNote    = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  if (!name || !email || !message) {
    formNote.textContent = formMsgs[currentLang].required;
    formNote.style.color = '#c0392b';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formNote.textContent = formMsgs[currentLang].email;
    formNote.style.color = '#c0392b';
    return;
  }

  formNote.textContent = formMsgs[currentLang].success;
  formNote.style.color = '#E88E8E';
  contactForm.reset();
});

// --- Word Bubble Animation on Hero ---
const wordPairs = [
  { pl: 'witaj',        en: 'hello'        },
  { pl: 'dziękuję',    en: 'thank you'    },
  { pl: 'proszę',      en: 'please'       },
  { pl: 'przepraszam', en: 'sorry'        },
  { pl: 'tak',         en: 'yes'          },
  { pl: 'nie',         en: 'no'           },
  { pl: 'dobry',       en: 'good'         },
  { pl: 'piękny',      en: 'beautiful'    },
  { pl: 'szkoła',      en: 'school'       },
  { pl: 'książka',     en: 'book'         },
  { pl: 'język',       en: 'language'     },
  { pl: 'nauka',       en: 'learning'     },
  { pl: 'słowo',       en: 'word'         },
  { pl: 'zdanie',      en: 'sentence'     },
  { pl: 'rozmowa',     en: 'conversation' },
  { pl: 'przyjaciel',  en: 'friend'       },
  { pl: 'rodzina',     en: 'family'       },
  { pl: 'praca',       en: 'work'         },
  { pl: 'podróż',      en: 'journey'      },
  { pl: 'marzenie',    en: 'dream'        },
  { pl: 'sukces',      en: 'success'      },
  { pl: 'pewność',     en: 'confidence'   },
  { pl: 'wiedza',      en: 'knowledge'    },
  { pl: 'uczyć się',   en: 'to learn'     },
  { pl: 'mówić',       en: 'to speak'     },
  { pl: 'słuchać',     en: 'to listen'    },
  { pl: 'pisać',       en: 'to write'     },
  { pl: 'czytać',      en: 'to read'      },
  { pl: 'rozumieć',    en: 'to understand'},
  { pl: 'pytanie',     en: 'question'     },
  { pl: 'odpowiedź',   en: 'answer'       },
  { pl: 'lekcja',      en: 'lesson'       },
  { pl: 'nauczyciel',  en: 'teacher'      },
  { pl: 'uczeń',       en: 'student'      },
  { pl: 'egzamin',     en: 'exam'         },
  { pl: 'świat',       en: 'world'        },
  { pl: 'czas',        en: 'time'         },
  { pl: 'dom',         en: 'home'         },
  { pl: 'miłość',      en: 'love'         },
  { pl: 'szczęście',   en: 'happiness'    },
];

const heroSection  = document.querySelector('.hero');
const heroBtns     = document.querySelector('.hero-buttons');
let lastBubbleTime = 0;
let lastMouseX     = 0;
let lastMouseY     = 0;
let lastUsedIndex  = -1;
let lastDotTime    = 0;

const trailColors  = ['#FAA1A1', '#A8B8A8', '#F9D4B8'];

heroSection.addEventListener('mousemove', (e) => {
  const rect = heroSection.getBoundingClientRect();
  const x    = e.clientX - rect.left;
  const y    = e.clientY - rect.top;

  // --- Trail dots (frequent, delicate) ---
  const nowDot = Date.now();
  if (nowDot - lastDotTime > 35) {
    lastDotTime = nowDot;
    const dot   = document.createElement('div');
    dot.className = 'trail-dot';
    const size  = 3 + Math.random() * 4;          // 3–7 px
    const color = trailColors[Math.floor(Math.random() * trailColors.length)];
    const ox    = (Math.random() - 0.5) * 10;     // tiny sideways drift
    dot.style.cssText = `
      width:${size}px; height:${size}px;
      background:${color};
      left:${x + ox - size / 2}px;
      top:${y - size / 2}px;
    `;
    heroSection.appendChild(dot);
    setTimeout(() => dot.remove(), 1050);
  }

  // --- Speech bubbles (throttled) ---
  const now = Date.now();
  if (now - lastBubbleTime < 450) return;

  const dx = e.clientX - lastMouseX;
  const dy = e.clientY - lastMouseY;
  if (Math.sqrt(dx * dx + dy * dy) < 35) return;

  // Skip if cursor is over the buttons area (+ 30px padding)
  if (heroBtns) {
    const r = heroBtns.getBoundingClientRect();
    if (
      e.clientX >= r.left  - 30 && e.clientX <= r.right  + 30 &&
      e.clientY >= r.top   - 30 && e.clientY <= r.bottom + 30
    ) return;
  }

  lastBubbleTime = now;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;

  // Pick a random pair, avoid repeating the last one
  let idx;
  do { idx = Math.floor(Math.random() * wordPairs.length); }
  while (idx === lastUsedIndex);
  lastUsedIndex = idx;
  const pair = wordPairs[idx];

  const bubble = document.createElement('div');
  bubble.className = 'word-bubble';
  bubble.innerHTML = `<span class="bubble-pl">${pair.pl}</span><span class="bubble-en">${pair.en}</span>`;

  // Random horizontal drift so bubbles don't stack
  const offsetX = (Math.random() - 0.5) * 90;
  bubble.style.left = (x + offsetX - 50) + 'px';
  bubble.style.top  = (y - 60) + 'px';

  heroSection.appendChild(bubble);
  setTimeout(() => bubble.remove(), 2500);
});

// --- Scroll Reveal Animations ---
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// --- Smooth scroll active link highlight ---
const sections = document.querySelectorAll('section[id]');
const navItems  = document.querySelectorAll('.nav-links a[href^="#"]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
