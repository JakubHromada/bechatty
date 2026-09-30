// Cloudflare Pages middleware: guards every request under /materialy/ with
// HTTP Basic Auth. The browser shows its own login prompt; the username is
// ignored, only the password is checked.
//
// The password comes from the MATERIALS_PASSWORD variable, set as a secret in
// the Cloudflare Pages dashboard (Settings → Variables and Secrets). If it is
// not set, every request is refused.

const REALM = 'Materialy BeChatty'

export async function onRequest({ request, env, next }) {
  const expected = env.MATERIALS_PASSWORD
  if (!expected) {
    return new Response('Materials are not configured.', { status: 503 })
  }

  const password = readPassword(request.headers.get('Authorization'))
  if (password === null || !(await safeEqual(password, expected))) {
    return new Response('Wymagane hasło / Password required.', {
      status: 401,
      headers: {
        'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
        'Cache-Control': 'no-store',
      },
    })
  }

  const response = await next()
  const guarded = new Response(response.body, response)
  guarded.headers.set('Cache-Control', 'private, no-cache')
  guarded.headers.set('X-Robots-Tag', 'noindex')
  return guarded
}

function readPassword(header) {
  if (!header || !header.startsWith('Basic ')) return null
  try {
    const bytes = Uint8Array.from(atob(header.slice(6)), c => c.charCodeAt(0))
    const decoded = new TextDecoder().decode(bytes)
    const colon = decoded.indexOf(':')
    return colon === -1 ? null : decoded.slice(colon + 1)
  } catch {
    return null
  }
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
