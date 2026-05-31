---
name: BeChatty
description: Warm, encouraging, professional landing page for an online English teacher — editorial studio aesthetic with restrained warm accents and a bilingual signature.
colors:
  warm-peach-cream: "#FCE4CC"
  muted-apricot: "#EFCAA0"
  dusty-rose: "#D88098"
  wine-rose: "#A24E64"
  herb-green: "#8FA386"
  pale-herb-wash: "#EAF0E6"
  honey-ochre: "#E8C575"
  vanilla-cream: "#FAF1E3"
  pale-blush: "#F9D5DC"
  soft-pink-rose: "#EFB8C4"
  warm-graphite: "#1F2426"
  soft-slate: "#566062"
  ink-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(2.2rem, 5.5vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "2.2rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "normal"
  body:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Lato, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  sm: "4px"
  md: "14px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.wine-rose}"
    textColor: "{colors.ink-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1rem 2.6rem"
  button-primary-hover:
    backgroundColor: "{colors.wine-rose}"
    textColor: "{colors.ink-white}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.wine-rose}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.8rem"
  button-outline-hover:
    backgroundColor: "{colors.dusty-rose}"
    textColor: "{colors.ink-white}"
  button-ghost-herb:
    backgroundColor: "transparent"
    textColor: "{colors.herb-green}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.8rem"
  input-field:
    backgroundColor: "{colors.ink-white}"
    textColor: "{colors.warm-graphite}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1rem"
  input-field-focus:
    backgroundColor: "{colors.ink-white}"
    textColor: "{colors.warm-graphite}"
  card:
    backgroundColor: "{colors.ink-white}"
    textColor: "{colors.warm-graphite}"
    rounded: "{rounded.md}"
    padding: "2rem"
  card-accent-top:
    backgroundColor: "{colors.ink-white}"
    textColor: "{colors.warm-graphite}"
    rounded: "{rounded.md}"
    padding: "2rem"
  speech-bubble:
    backgroundColor: "{colors.ink-white}"
    textColor: "{colors.wine-rose}"
    rounded: "18px"
    padding: "8px 16px"
  lang-toggle-active:
    backgroundColor: "{colors.ink-white}"
    textColor: "{colors.wine-rose}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.65rem"
---

# Design System: BeChatty

## 1. Overview

**Creative North Star: "The Editorial Tutor's Studio"**

BeChatty looks and feels like the studio of a serious, experienced teacher who happens to be warm — not a whimsical hobby site, not a children's classroom, not a coaching funnel. The page reads as **warm, encouraging, professional**: an adult considering a paid commitment and a parent evaluating where to send their teenager must both feel they are in the right place.

The register is editorial. Headlines are set in Playfair Display — the serif of an essay collection, not a fairy-tale book. Body copy is set in Lato, clean and unobtrusive. The warm palette (peach, dusty rose, herb green, honey ochre) is dialed back into supporting roles: it tints, washes, and accents, but it never dominates and never crosses into cute-pastel territory. White space and Playfair carry the seriousness; the warm accents carry the welcome.

The bilingual identity is a restrained signature, not a playground. The paired-word "speech bubble" pattern remains — it is the literal product (bilingual learning) made visual — but it appears with discipline (one or two well-placed instances, not a comic-strip explosion). The language toggle is a first-class nav component, not a footer afterthought.

What this system explicitly rejects: the **childish / kids-language-school template** (cartoon mascots, rainbow primaries, oversaturated pastels, flag emojis, bouncy spring motion, hand-lettered doodle fonts, comic-strip speech-bubble overload). It rejects the **influencer-coach personal-brand template** (big face hero, italic script signatures, "transform your life", testimonial walls, lead-magnet popups). It rejects generic SaaS landing-page clichés (hero-metric cards, gradient text, identical icon-headline-text card grids), and sterile corporate e-learning blue.

**Key Characteristics:**
- Warm palette dialed into supporting roles — peach, dusty rose, herb green, honey ochre — wash and accent only, never the dominant surface.
- Editorial Playfair + Lato pairing as the load-bearing voice; the seriousness comes from type, the warmth from color.
- Restrained ambient shadows tinted in brand hues; cards float gently, never bounce, never spring.
- Bilingual signature surfaced with discipline: language toggle as a first-class component, paired-word bubbles used sparingly.
- One conversion handle: pill-shaped wine-rose CTA, used decisively in the hero and nav, quieter everywhere else.
- Generous white space and considered typography — the page reads as a teacher's portfolio, not a craft project.

## 2. Colors

The palette is sun-warmed and restrained: every color sits in the same warm tonal family, but the warm tones are dialed back into supporting roles. The page is mostly cream + warm graphite type, with rose and herb-green earning their accent role on a minority of the surface. There is no neutral grey here; even the text "black" is warm graphite. Equally, there is no oversaturated pastel — the page is grown-up warm, not nursery-bright.

### Primary
- **Wine Rose** (`#A24E64`): the single conversion accent. Pill CTAs, link hovers, primary numerals (450+, 90%+), focus states. Lives on ≤15% of any given screen.
- **Dusty Rose** (`#D88098`): the soft sibling of wine-rose. Gradient companion on CTA buttons, divider accents, secondary heading flourishes, language-toggle active text.

### Secondary
- **Herb Green** (`#8FA386`): the calm counterpoint to rose. Trust-strip icons, secondary CTA borders ("Learn More" outline), section dividers, "About" section background base.
- **Honey Ochre** (`#E8C575`): warmth and friendliness. Pricing accent borders, hero blob washes, sandy section backgrounds.

### Tertiary
- **Pale Blush** (`#F9D5DC`) and **Soft Pink Rose** (`#EFB8C4`): the watercolor border family. Speech-bubble outlines, hero blob washes, highlight chip backgrounds. Always subordinate; never the main event.

### Neutral
- **Warm Peach Cream** (`#FCE4CC`) and **Muted Apricot** (`#EFCAA0`): warmest cream tones; highlight chips, language-toggle background, hero subtle washes.
- **Vanilla Cream** (`#FAF1E3`): hero section background. The page begins on cream, never on white.
- **Pale Herb Wash** (`#EAF0E6`): "About" section background. A near-white that still carries herb-green warmth.
- **Ink White** (`#FFFFFF`): card surfaces, speech bubbles, language-toggle active pill. Use deliberately — the page is not a white sheet, white is a surface treatment.
- **Warm Graphite** (`#1F2426`): primary text. Warmer than pure black; sits in the brand's tonal family.
- **Soft Slate** (`#566062`): secondary text, captions, bilingual word-bubble Polish label. Never `#666` grey.

### Named Rules

**The No-Grey Rule.** No neutral grey is permitted. Text "black" is warm graphite (`#1F2426`); secondary text is warm slate (`#566062`); shadows are tinted in brand hues (sage-green, rose, blush), never `rgba(0,0,0,...)` except sub-10% noise layers. If a swatch looks cool or sterile next to the rest of the palette, it is wrong.

**The No-Pure-White Rule.** The page never begins on `#FFFFFF`. Section backgrounds rotate through vanilla cream, pale herb wash, and warm peach cream. White is reserved for elevated surfaces (cards, speech bubbles, language-toggle active pill) so it reads as paper resting on a tablecloth, not as a blank canvas.

**The One Voice Rule.** Wine Rose is the only color that earns a CTA. Herb Green is the only secondary accent on outline buttons. Honey Ochre and Blush stay decorative. Never let a tertiary color carry an action.

**The Adult-Warm Rule.** Pastels are tools, not statements. Pale Blush, Soft Pink Rose, and Warm Peach Cream are permitted as washes, borders, and small accents — not as section backgrounds, not as button fills, never as the dominant surface of a hero or content area. The hero background is Vanilla Cream or Pale Herb Wash, not pink. If a section looks like a nursery or a bridal-shower invitation, the pastel allocation is wrong.

## 3. Typography

**Display Font:** Playfair Display (with Georgia, serif fallback)
**Body Font:** Lato (with system-ui, sans-serif fallback)

**Character:** A classic essay-and-margin-notes pairing. Playfair's high-contrast didone strokes read as literary and considered; Lato's humanist sans is warm and unfussy. Together they say "a teacher who writes." Hierarchy is carried by weight contrast and serif/sans contrast more than by raw size.

### Hierarchy
- **Display** (Playfair 700, clamp 2.2–3.6rem, line-height 1.15): hero headline only. The page has one display moment.
- **Headline** (Playfair 700, 2.2rem, line-height 1.2): section titles ("O mnie", "Cennik", "Recenzje").
- **Title** (Playfair 600, 1.25rem, line-height 1.35): card titles, pricing tier names.
- **Body** (Lato 400, 1rem, line-height 1.7): paragraph copy. Generous line-height because students read here. Cap at 75ch.
- **Label** (Lato 700, 0.75rem, letter-spacing 0.1em, often uppercase): "See prices", language toggle, trust-strip badges, sub-group labels on price tables.

### Named Rules

**The Weight-Over-Scale Rule.** Hierarchy comes from weight contrast (Playfair 700 against Lato 400) and the serif/sans switch — not from cranking sizes. A 1.25rem Playfair 600 sits comfortably above a 1rem Lato 400 without needing to be 2rem. Resist size inflation.

**The Bilingual Type Rule.** When Polish and English appear side by side (speech bubbles, language toggle), the active language is Playfair, the inactive/translation is italic Lato in soft-slate. Type itself signals which language is "front."

**The 75ch Body Rule.** Body paragraphs never exceed 75 characters per line. Students read here; line length matters more than container width.

## 4. Elevation

Surfaces float on soft ambient shadows tinted in the brand's own hues — sage-green, rose, blush — not neutral grey. Depth feels watercolor-painterly: diffuse, low-contrast, warm. Cards lift gently on hover (−2 to −3px translateY) with a slightly deeper shadow; they never punch.

### Shadow Vocabulary
- **Ambient card** (`box-shadow: 0 4px 24px rgba(31, 36, 38, 0.08)`): default card rest state. The graphite-tinted base shadow.
- **Ambient card hover** (`box-shadow: 0 12px 36px rgba(31, 36, 38, 0.14)`): card hover lift.
- **Rose-tinted CTA** (`box-shadow: 0 8px 28px rgba(162, 78, 100, 0.45), 0 2px 8px rgba(0, 0, 0, 0.12)`): primary hero CTA at rest. Carries wine-rose hue.
- **Rose-tinted CTA hover** (`box-shadow: 0 14px 36px rgba(162, 78, 100, 0.5), 0 4px 12px rgba(0, 0, 0, 0.15)`): primary CTA hover.
- **Sage speech-bubble** (`box-shadow: 0 6px 20px rgba(143, 163, 134, 0.20), 0 2px 6px rgba(0, 0, 0, 0.08)`): speech bubbles. Herb-green tinted glow.
- **Herb outline lift** (`box-shadow: 0 12px 32px rgba(143, 163, 134, 0.36)`): secondary CTA hover.

### Named Rules

**The Tinted Shadow Rule.** Every shadow inherits a hue from its parent component. A CTA on wine-rose carries wine-rose tinted shadow. A speech bubble bordered in blush carries herb-green tinted shadow (its complement). A neutral card uses graphite-tinted shadow — never `rgba(0,0,0,...)` at full strength. If a shadow reads as plain grey, it is wrong.

**The −2px Lift Rule.** Hover lifts are exactly `translateY(-2px)` for ambient cards and small buttons, `translateY(-3px)` for hero-scale CTAs. No more. The page does not bounce or spring.

## 5. Components

### Buttons

- **Shape:** Pill (border-radius: 999px). The CTA shape never changes; only padding and color vary.
- **Primary** (`button-primary`): wine-rose → dusty-rose linear gradient, white text, Lato 700 0.04em letter-spacing, padding 1rem 2.6rem (hero scale) or 0.875rem 2rem (inline). Rose-tinted ambient shadow at rest.
- **Hover / Focus:** translateY(−2 to −3px), deeper rose-tinted shadow, gradient darkens to wine-rose → deeper-wine (`#7A3650`). Transition is `transform .25s ease, box-shadow .25s ease, background .25s ease`. No bounce.
- **Outline (wine)** (`button-outline`): transparent background, 2px wine-rose border, wine-rose text. Hovers fill with the rose gradient, white text, identical lift.
- **Outline (herb)** (`button-ghost-herb`): transparent on translucent white, 2px herb-green border, herb-green text. Hero "Learn More" secondary. Hovers fill with herb-green gradient (to `#6A7B62`).
- **Toggle button** (`card-toggle-btn`): pill, transparent, 1.5px `currentColor` border, uppercase Lato 700 0.06em. Used inline on pricing cards — inherits the card's accent color.

### Inputs / Fields

- **Style:** white background, 2px **muted-apricot** border, 14px radius, Lato 1rem body inside, generous `0.75rem 1rem` padding.
- **Focus:** border color shifts to **dusty-rose** over 0.35s ease. No glow, no growing ring; the color shift carries the signal.
- **Disabled / Error:** not yet implemented; when added, disabled uses pale-blush border + soft-slate text; error uses wine-rose border + a small wine-rose error message in Lato 0.875rem below the field.

### Cards / Containers

- **Corner Style:** 14px radius (`rounded.md`). The single card radius across the system.
- **Background:** ink-white on cream/wash section backgrounds. Cards must contrast with their section, but the contrast is paper-on-tablecloth, not card-on-canvas.
- **Shadow Strategy:** Ambient card (rest) → Ambient card hover. See Elevation.
- **Border:** none by default. **Pricing-tier card variant** adds a 4px solid accent top border in herb-green, wine-rose, or honey-ochre depending on tier — the only place a colored stripe is permitted.
- **Internal Padding:** 2rem default; pricing cards split into 2rem header / 1.5rem 2rem body sections.

### Navigation

- **Style:** Horizontal nav over a dark backdrop (graphite gradient). White link text, Lato 600 ~0.875rem with subtle letter-spacing.
- **Hover:** A gradient underline (herb-green → wine-rose) animates in from left to right under the link in 0.3s. Link text shifts to soft-pink-rose.
- **CTA in nav** (`nav-cta`): a small pill in wine-rose gradient, lifts on hover with deeper rose shadow. The conversion handle stays visible at all scroll depths.
- **Mobile:** menu slides in with a `translateY(-8px)` + opacity fade transition over 0.25s.

### Language Toggle (signature)

- A small pill (`bg: warm-peach-cream`, `padding: 3px`) holding two micro-pills labeled `PL` / `EN`.
- The active language sits on an ink-white pill with a soft graphite shadow and Playfair-feeling weight; the inactive language is transparent with soft-slate text.
- Switching is instant; the active pill has an implicit color-shift transition for the text.
- This component IS the product's bilingual identity. It belongs in the persistent nav, never buried in a footer.

### Speech Bubble (signature)

- A white rounded rectangle (`rounded: 18px`) with a 1.5px **soft-pink-rose** border, sage-green tinted shadow, and a small CSS triangle "tail" at the bottom (using border tricks).
- Carries two stacked lines: Polish in italic Lato 0.72rem soft-slate, English in Playfair 0.95rem 700 in wine-rose.
- Appears in three contexts: (1) the hero mouse-trail (auto-spawned, 2.4s float-and-fade animation, capped so it never feels chatty or comic-strip-like), (2) the about section as floating "hi" / greeting bubbles (3.5s gentle sinusoidal float), (3) the logo header as a static brand mark.
- **Never recolor the bubble fill** — it stays white. The border color stays in the blush family. This is the constant visual signature.
- **Use sparingly.** The bubble is a refined signature, not a recurring decoration. A serious teacher's studio shows it once or twice with confidence; a children's classroom would scatter them everywhere. The page is the former.

### Trust Strip (hero)

- Inline row of three claims (years experience, students taught, exam results) with a herb-green Font Awesome icon and bold Lato graphite text.
- No background, no card. Sits directly on the hero cream.
- Spacing collapses gracefully on mobile (gap shrinks, font drops to 11px).
- This is the "earned credibility" pattern that replaces the SaaS hero-metric card or trusted-by logo strip.

## 6. Do's and Don'ts

### Do:
- **Do** start every section on a **cream wash** background — vanilla cream, pale herb wash, warm peach cream, or sandy light. Pure white is for elevated surfaces only.
- **Do** carry one consistent card radius across the system (14px). Inputs share it; buttons override to pill.
- **Do** tint every shadow with its parent's hue. Wine-rose CTA → wine-rose shadow. Herb-green outline → herb-green shadow. Card → graphite-tinted shadow.
- **Do** use **weight + serif/sans contrast** to build hierarchy. A Playfair 700 1.25rem can comfortably sit above a Lato 400 1rem; you do not need 2rem.
- **Do** keep body line length under 75ch. Students read here.
- **Do** lift on hover by exactly −2px (cards, small buttons) or −3px (hero CTAs). Pair with a slightly deeper tinted shadow. Transitions are `0.25s ease`. No bounce, no elastic.
- **Do** honor `prefers-reduced-motion` for the hero mouse-trail bubbles and scroll reveals — the page is still readable without them.
- **Do** treat the **speech bubble** as a load-bearing signature, not a decoration. It's the product's bilingual identity made visual.
- **Do** use Font Awesome icons sparingly and always tinted in **herb-green** for trust signals, **wine-rose** for conversion signals, **honey-ochre** for warmth. Never multicolor icons.

### Don't:
- **Don't** use pure `#000` or pure `#FFF` anywhere. Text is warm graphite `#1F2426`; secondary is soft slate `#566062`; backgrounds are warm creams.
- **Don't** use any neutral grey for shadows. All shadows tint with brand hues. Pure `rgba(0,0,0,X)` reads as foreign.
- **Don't** use gradient text (`background-clip: text`). Headings are solid wine-rose, warm graphite, or herb-green. Emphasis comes from Playfair weight, not color theatrics.
- **Don't** use side-stripe borders on cards (`border-left` greater than 1px as a colored accent). The pricing card's 4px **top border** is the single sanctioned exception; never apply it to left or right.
- **Don't** add a big-face hero photo or italic script display font. This is **not an influencer-coach site**. Anti-reference enforced.
- **Don't** write "transform your life", "unlock your potential", "your journey", or any coaching-funnel copy. The voice is a teacher's, not a coach's.
- **Don't** build "trusted by" / "featured in" logo strips. Earned credibility shows up as the trust strip (years, students, results) — three quiet badges, no theater.
- **Don't** build hero-metric template cards (big number, small label, supporting stat, gradient accent). The trust strip replaces this entirely.
- **Don't** build identical icon-headline-text card grids. Every card variation must justify itself; pricing cards differ via accent color, services cards differ via content shape.
- **Don't** ship modals as a first thought. Inline disclosure (the pricing card expand pattern) is the house style. A modal must justify itself against the inline alternative.
- **Don't** bounce or spring in motion. Easing is `ease` or `ease-out`. No `cubic-bezier` with overshoot. No elastic. Hover lifts are translate only — never animate width, height, padding, margin, or border-radius.
- **Don't** introduce a fourth font. Playfair Display + Lato + Font Awesome is the entire type system. A monospace would be foreign.
- **Don't** recolor the speech-bubble fill. It is always white with a blush-family border. The constant signature.
- **Don't** use cartoon mascots, flag emojis, or rainbow-bright primary palettes. This is not a kids' language school.
- **Don't** let pink dominate any section. Pale Blush, Soft Pink Rose, and Warm Peach Cream are accents and washes only — never the background of a hero, a content area, or a card fill. If a section reads as nursery, bridal-shower, or candy-aisle, the pastel allocation is wrong.
- **Don't** scatter speech bubbles or playful illustrations across the page. The bilingual signature appears with discipline (one or two well-placed instances). A comic-strip explosion turns a teacher's studio into a children's classroom.
- **Don't** use bouncy or springy motion. No `cubic-bezier` overshoot, no elastic, no wobble. Hover lifts are restrained straight-line translates. Children's sites bounce; this one moves with composure.
- **Don't** use hand-lettered "doodle" fonts, sticker-style emoji-icons, or any typography that signals "fun" over "considered". Playfair Display and Lato are the entire voice.
