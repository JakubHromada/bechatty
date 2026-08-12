# SEO — remaining work

Started 2026-08-12. Site: bechatty.pl (Vue 3 + Vite, static build on Cloudflare Pages).

## Done this session
- Fixed broken JSON-LD image URLs in `index.html` (`logo`, Person `image` pointed at nonexistent files).
- Cleaned up `public/sitemap.xml` (removed fake fragment "pages" and misleading `hreflang` alternates, refreshed `lastmod`).
- Added build-time prerendering (`scripts/prerender.mjs`, wired into `npm run build` via `puppeteer`) so crawlers get real rendered HTML instead of an empty `<div id="app">`. Verified locally — not yet verified on an actual Cloudflare Pages build.
- Decision: keep bilingual PL/EN as a single URL with the client-side JS toggle (not building separate `/en/` pages) — optimize primarily for Polish search for now.

## Next up
- [ ] **Watch the next Cloudflare Pages deploy** to confirm the prerender step succeeds in their build container (headless Chrome can hit missing-library issues in locked-down CI images). If it fails, the build still ships the plain SPA (non-blocking), but worth checking.
- [ ] Aleksandra is compressing `ola_image.jpg` (currently ~3.9MB, hero LCP image) herself — once swapped in, rerun PageSpeed Insights / Core Web Vitals to confirm the LCP improvement.
- [ ] Set up **Google Search Console**: verify domain, submit `sitemap.xml`, monitor indexing + Core Web Vitals report.
- [ ] Set up/optimize **Google Business Profile**: consistent NAP (name, address if any, phone, NIP), correct service categories — likely the single biggest lever for local Polish search visibility.
- [ ] Ask existing 5-star reviewers (already quoted on-site) to also post a Google review — compounds trust signal + local ranking.
- [ ] **Backlinks**: Polish tutoring/education directories, link from Instagram/Facebook bio to the site.
- [ ] **Content strategy**: consider blog-style pages targeting long-tail Polish queries (e.g. "jak przygotować się do matury z angielskiego", "egzamin ósmoklasisty angielski wskazówki") — right now there's only one URL to rank, which caps organic reach.

## Notes / open questions
- Bing Webmaster Tools submission not yet discussed — worth a quick mention alongside GSC.
- No analytics currently reviewed (Cloudflare Web Analytics vs Google Analytics) — could inform which content ideas to prioritize.
