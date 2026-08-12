// Runs after `vite build`. Boots the built site, lets a headless browser
// render it, and overwrites dist/index.html with the fully-rendered DOM —
// so crawlers get real page content instead of an empty <div id="app">,
// without needing a Node SSR server at request time (Cloudflare Pages just
// serves the resulting static file).
//
// If anything here fails (e.g. no Chromium available in the build
// container), the plain SPA build from `vite build` is left untouched and
// still deploys — this step is a pure enhancement, never a build gate.
import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distIndex = path.resolve(__dirname, '../dist/index.html')
const PORT = 4173

async function main() {
  const server = await preview({ preview: { port: PORT, host: '127.0.0.1' }, logLevel: 'silent' })

  let browser
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()
    await page.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle0', timeout: 30000 })

    // Past the v-reveal failsafe (main.js reveals everything at 2400ms)
    // so the captured markup shows fully-visible content, not mid-animation.
    await new Promise(resolve => setTimeout(resolve, 2800))

    const html = await page.evaluate(() => '<!DOCTYPE html>\n' + document.documentElement.outerHTML)
    writeFileSync(distIndex, html)
    console.log('[prerender] dist/index.html now contains fully rendered content')
  } catch (err) {
    console.warn('[prerender] skipped — shipping the plain SPA build instead.')
    console.warn(err?.message || err)
  } finally {
    if (browser) await browser.close()
    await new Promise(resolve => server.httpServer.close(resolve))
  }
}

main()
