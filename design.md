# KUBIC STUDIO — design system

Brutalist, Swiss-modern, digital-first. The site is built from scale, negative space, and two typefaces: Wallnutt for display, Neue Haas Grotesk Display Pro for the nav bar. Decoration is refused. Hierarchy is size.

## Brand

- **Name:** KUBIC STUDIO
- **Line:** DIGITAL-FIRST DESIGN STUDIO
- **Copyright:** ©2026 ALL RIGHTS RESERVED
- **Founded lockup:** C.2026
- **Beliefs date:** (SINCE 2024)

Replace any reference-studio naming (including OXYMORON) with the lockups above. Do not invent a second wordmark.

## Color

Guessed from the reference frames and used as tokens in `app/globals.css`.

| Token | Hex | Use |
| --- | --- | --- |
| Paper | `#FFFFFF` | Default page ground, work, footer |
| Mist | `#F4F4F4` | Hero ground (slightly cooler than pure white) |
| Ink | `#000000` | Type, rules, header, list hover invert |
| Void | `#111111` | Full-screen menu |
| Panel | `#16171C` | Featured-work stage |
| Mint | `#71F9A7` | Mocbrush accent tile |
| Rule | `#E8E8E8` | Hairline list dividers |
| Mute | `#9A9A9A` | Secondary labels |

No gradients. No drop shadows. No dark-mode inversion — the product is light, with one intentional black overlay (menu) and one charcoal stage (featured work).

Selection is inverted: ink ground, paper type.

## Type

Two families, loaded through `next/font/local`. Do not add a third.

**Display — Wallnutt Corps Regular** (`app/fonts/WallnuttCorps-Regular.otf`)

Wide, geometric, heavy sans. Tracking is tight (`letter-spacing: -0.055em`). Line-height ~0.82. Used for hero, beliefs, section titles, work lists, services, footer wordmark, and the oversized menu links.

**Nav — Neue Haas Grotesk Display Pro** (`NeueHaasDisplayRoman.woff` / `NeueHaasDisplayMedium.woff`)

Clean Swiss grotesque. Used in the top bar (MENU, studio lockup, CONTACT, `[ X ] CLOSE`) and the footer chrome (lockup, mail, nav links). Medium (500), ~11px, letter-spacing `0.08em`, uppercase. Class: `.nav-bar`. The oversized footer wordmark stays Wallnutt.

Almost all UI is uppercase.

Three sizes, not a type scale:

1. **Meta** — ~11px. Nav bar and small labels.
2. **Index / list** — clamp from ~28px to ~84px. Project names, service names.
3. **Display** — clamp / vw, often 8–16vw. Hero, beliefs, section titles, footer wordmark.

## Layout

- Horizontal padding is a viewport unit: `4vw`.
- Header is a three-column lock: MENU · mark · CONTACT, fixed, no background bar.
- Hero type is staggered: first line full-left (`TVOŘÍME WEBY.`), second line indented ~18% (`BEZ ZBYTEČNOSTÍ.`).
- Beliefs is a black three-column band with a hairline top rule: large statement left (~6/12), supporting copy center, services list right. Neue Haas Grotesk, white + `#808080`.
- Featured work is ~3/9: metadata left, 16:9 stage right showing each case study’s `main` screenshot (`jtomasekCaseStudy/Main.png`, `jt-interiorCaseStudy/main.png`). Numbered gallery frames stay off the homepage.
- Services are full-bleed hairline rows.
- Footer repeats the studio wordmark at the bottom edge, oversized, clipped.

The rounded grey frame in the reference shots is browser chrome. It is not part of the site.

## Motion

GSAP only (`gsap` + `@gsap/react` + `useGSAP`).

- Menu drops in from the top; links stagger. Escape and `[ X ] CLOSE` reverse it.
- `prefers-reduced-motion: reduce` skips the menu motion.

Do not add scroll-jacking, smooth-scroll libraries, or hover parallax.

## Components / pages

| Surface | Role |
| --- | --- |
| Hero | Home, first viewport |
| Beliefs | Directly under hero |
| Featured work | Work section (JTomasek, JT Interior — main photos) |
| What we do | Services |
| Footer | Studio, mail, giant mark |
| Menu overlay | HOME / WORK / ABOUT / CONTACT |
| `/work` `/about` `/contact` | Empty shells — display title only |

## Interaction

- Menu is a full-screen takeover, not a drawer.
- Service rows invert to paper-on-ink on hover.
- Menu links drop to 50% opacity on hover.
- Empty routes keep header, menu, and footer so the chrome stays stable while those pages are still unbuilt.

## Do not

- Mix in Geist, Inter, or system UI fonts.
- Soften corners on the page itself.
- Center the hero manifesto.
- Put a sticky colored header bar behind MENU / CONTACT.
