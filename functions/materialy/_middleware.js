// Cloudflare Pages middleware: guards every request under /materialy/.
//
// Without a valid login cookie the visitor gets the login page below. Its
// script posts the password in the background: a wrong password shows the
// error in place, the right one sets a signed cookie for 24 hours and reloads
// the same URL. Nothing is added to the browser history, so Back leaves the
// materials in one step.
//
// Without JavaScript the plain form posts instead, and both outcomes redirect
// to a normal GET (a short-lived cookie carries the error), so the history
// never holds a form post that the browser would offer to resubmit.
//
// The password comes from the MATERIALS_PASSWORD variable, set as a secret in
// the Cloudflare Pages dashboard (Settings → Variables and Secrets). If it is
// not set, every request is refused. Changing it logs everyone out.

const COOKIE = 'vb_auth'
const ERROR_COOKIE = 'vb_err'
const MAX_AGE = 60 * 60 * 24 // 24 hours, in seconds

const WRONG_PASSWORD = 'Niepoprawne hasło, spróbuj ponownie.'
const TRY_AGAIN = 'Coś poszło nie tak, spróbuj ponownie.'

export async function onRequest({ request, env, next }) {
  const secret = env.MATERIALS_PASSWORD
  if (!secret) {
    return new Response('Materials are not configured.', { status: 503 })
  }

  if (await hasValidCookie(request, secret)) {
    const response = await next()
    const guarded = new Response(response.body, response)
    guarded.headers.set('Cache-Control', 'private, no-cache')
    guarded.headers.set('X-Robots-Tag', 'noindex')
    return guarded
  }

  if (request.method === 'POST') {
    const fromScript = request.headers.get('X-Login') === 'fetch'
    const form = await request.formData().catch(() => null)
    const password = String(form?.get('password') ?? '')
    const headers = new Headers({ 'Cache-Control': 'no-store' })
    const ok = await safeEqual(normalize(password), normalize(secret))

    if (ok) {
      const expires = Math.floor(Date.now() / 1000) + MAX_AGE
      const token = `${expires}.${await sign(String(expires), secret)}`
      headers.append('Set-Cookie', `${COOKIE}=${token}; Path=/materialy; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`)
    } else if (!fromScript) {
      headers.append('Set-Cookie', `${ERROR_COOKIE}=1; Path=/materialy; Max-Age=60; HttpOnly; Secure; SameSite=Lax`)
    }

    if (fromScript) return new Response(null, { status: ok ? 204 : 401, headers })
    headers.set('Location', new URL(request.url).pathname)
    return new Response(null, { status: 303, headers })
  }

  return loginPage(readCookie(request, ERROR_COOKIE) === '1')
}

// Same rule as the original page: spaces around it and letter case don't matter.
function normalize(value) {
  return value.trim().toLowerCase()
}

function readCookie(request, name) {
  const cookies = request.headers.get('Cookie') ?? ''
  const match = cookies.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`))
  return match ? match[1] : null
}

async function hasValidCookie(request, secret) {
  const match = (readCookie(request, COOKIE) ?? '').match(/^(\d+)\.([0-9a-f]+)$/)
  if (!match) return false
  const [, expires, signature] = match
  if (Number(expires) < Date.now() / 1000) return false
  return safeEqual(signature, await sign(expires, secret))
}

async function sign(value, secret) {
  const key = await crypto.subtle.importKey(
    'raw', new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'],
  )
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value))
  return [...new Uint8Array(mac)].map(b => b.toString(16).padStart(2, '0')).join('')
}

// Hash both sides first so the comparison takes the same time whatever the input.
async function safeEqual(a, b) {
  const enc = new TextEncoder()
  const [ha, hb] = await Promise.all([
    crypto.subtle.digest('SHA-256', enc.encode(a)),
    crypto.subtle.digest('SHA-256', enc.encode(b)),
  ])
  const x = new Uint8Array(ha)
  const y = new Uint8Array(hb)
  let diff = 0
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i]
  return diff === 0
}

function loginPage(wrongPassword) {
  const html = `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex">
<title>Vocabulary Bank — Egzamin Ósmoklasisty</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Figtree:wght@400;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --paper:#F7F0E8;
  --ink:#2C4A5E;
  --coral:#FF985A;
  --violet:#4C6B85;
}
*{box-sizing:border-box;}
html,body{margin:0;padding:0;}
body{
  background:var(--ink);
  font-family:'Figtree',sans-serif;
  color:var(--ink);
  min-height:100vh;
  display:flex; align-items:center; justify-content:center;
  padding:20px;
}
.gate-box{
  background:var(--paper);
  border:2.5px solid var(--ink);
  border-radius:20px;
  padding:32px 28px;
  max-width:360px;
  width:100%;
  text-align:center;
  box-shadow:7px 7px 0 rgba(251,243,228,0.25);
}
.gate-box img.logo{
  width:120px; margin:0 auto 14px; display:block;
}
.gate-box h1{
  font-family:'Playfair Display',serif;
  font-size:22px;
  margin:0 0 6px;
}
.gate-box p{
  font-size:13.5px; color:#6a6d74; margin:0 0 18px;
}
.gate-box input{
  width:100%; font-size:16px; font-family:'Figtree',sans-serif; font-weight:600;
  padding:12px 14px; border:2px solid var(--ink); border-radius:10px;
  margin-bottom:12px; text-align:center;
}
.gate-box button{
  width:100%;
  font-family:'Figtree',sans-serif; font-weight:700; font-size:14px;
  padding:12px 18px; border-radius:10px; border:2px solid var(--ink);
  background:var(--violet); color:#fff; cursor:pointer;
  box-shadow:3px 3px 0 var(--ink);
}
.gate-box button:hover{transform:translate(-1px,-1px); box-shadow:4px 4px 0 var(--ink);}
.gate-error{color:var(--coral); font-size:13px; font-weight:700; min-height:18px; margin-top:8px;}
.sr-only{position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0 0 0 0); white-space:nowrap;}
</style>
</head>
<body>
<form class="gate-box" method="post">
  <img class="logo" src="/logo-summer.png" alt="Be Chatty">
  <h1>Vocabulary Bank</h1>
  <p>Podaj hasło od nauczyciela, aby uzyskać dostęp do ćwiczeń.</p>
  <label class="sr-only" for="pwInput">Hasło</label>
  <input type="password" id="pwInput" name="password" placeholder="hasło" autocomplete="current-password" required autofocus>
  <button type="submit">Wejdź</button>
  <div class="gate-error" id="pwError" role="alert">${wrongPassword ? WRONG_PASSWORD : ''}</div>
</form>
<script>
const form = document.querySelector('form')
const input = document.getElementById('pwInput')
const button = form.querySelector('button')
const error = document.getElementById('pwError')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  error.textContent = ''
  button.disabled = true
  try {
    const response = await fetch(location.href, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'X-Login': 'fetch' },
    })
    if (response.ok) {
      location.reload()
      return
    }
    error.textContent = response.status === 401 ? '${WRONG_PASSWORD}' : '${TRY_AGAIN}'
  } catch {
    error.textContent = '${TRY_AGAIN}'
  }
  input.value = ''
  input.focus()
  button.disabled = false
})
</script>
</body>
</html>`
  const headers = new Headers({
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Robots-Tag': 'noindex',
  })
  // The error message from a no-JavaScript attempt is shown once, then cleared.
  if (wrongPassword) headers.append('Set-Cookie', `${ERROR_COOKIE}=; Path=/materialy; Max-Age=0; HttpOnly; Secure; SameSite=Lax`)
  return new Response(html, { status: 401, headers })
}
