# Ostermoor → tobytoki.hk Design System

Reference site: [https://ostermoor.com/](https://ostermoor.com/)  
Captured: 2026-09-25 · Screenshots in `docs/ostermoor-reference/`

Toby likes this heritage-editorial look and wants tobytoki.hk to feel the same: quiet luxury, mixed typography, full-bleed imagery, notched frames, and a hero carousel.

---

## 1. Brand feel (what to copy)

| Trait | How Ostermoor does it | Apply to tobytoki |
| --- | --- | --- |
| Heritage editorial | Cream paper ground, black type, archival photos | Cream ground, serif accents, restrained copy |
| Mix of modern + classic | ALL-CAPS sans + italic display serif in one headline | Same pattern: 無襯線大寫／正文 + 襯線斜體強調 |
| Brand-first hero | Oversized wordmark above nav / imagery | `tobytoki` as hero-level signal, not nav-only |
| Quiet luxury | Huge whitespace, thin rules, no loud CTAs | Outline buttons, small caps links |
| Tactile frames | Notched / chamfered media borders | `.frame` / `.frame-notch` on gallery & lifestyle |

---

## 2. Exact tokens from Ostermoor `theme.css`

```css
:root {
  --color-black: #1A1B1C;
  --color-white: #FBFCF4;      /* paper / cream */
  --color-tan: #E2D7C3;
  --color-crimson: #471818;   /* announcement bar, deep ink */
  --color-burnt: #A83F1A;     /* terracotta accent */
  --color-green: #AFC0AC;     /* sage */
  --color-light-blue: #5D7296; /* footer / slate */
  --color-dark-blue: #113551;
  --color-pink: #FBA2AA;

  --font-serif: "WT Kormelink SemLt", serif;
  --font-sans: "Untitled Sans", sans-serif;
  --corner-radius: 10px;
}
```

### Type scale (mobile → desktop ≥1024px)

| Token | Mobile | Desktop | Style |
| --- | --- | --- | --- |
| H1 serif | 32 / 1.12 | 62 / 1.0 | italic |
| H1 sans | 16 / 1.25 | 45 / 1.11 | normal |
| H2 serif | 25 / 1.12 | 40 / 0.97 | italic |
| H2 sans | 14 / 1.42 | 32 / 1.21 | normal |
| Body regular sans | 14 / 1.35 | 14 / 1.35 | — |
| Body tiny sans | 9 / 1.22 | (nav uses ~9–12px all-caps) | uppercase + tracking |

---

## 3. Fonts — original vs legal substitutes

Ostermoor ships **licensed** faces (do not hotlink their font files):

| Role | Original | Foundry | Free substitute (Google Fonts) |
| --- | --- | --- | --- |
| Display / italic accent | **WT Kormelink SemLt** (Roman + Italic) | WiseType | **Cormorant Garamond** italic (Latin accents) + **Noto Serif TC** (中文強調) |
| UI / body sans | **Untitled Sans** Regular | Klim Type Foundry | **Public Sans** + **Noto Sans TC** |
| Logo wordmark | Custom engraved display serif (ornate O) | Custom | Cormorant Garamond 600 + letter-spacing; optional monogram mark |

### Recommended Google Fonts URL

```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Noto+Sans+TC:wght@300;400;500;700&family=Noto+Serif+TC:wght@400;500;600&family=Public+Sans:wght@300;400;500;600&display=swap
```

### CSS pairing

```css
--font-serif: "Cormorant Garamond", "Noto Serif TC", serif;
--font-sans: "Public Sans", "Noto Sans TC", sans-serif;
```

If Toby later licenses the originals, swap the family names only — token structure stays.

---

## 4. Signature layout patterns

1. **Announcement bar** — full-width `--color-crimson`, white tiny caps / marquee.
2. **Header** — sticky; left nav (all-caps sans) · center crest/logo · right action; thin **double rule** under nav.
3. **Hero carousel** — nearly `100svh` lifestyle slides; soft focus; minimal chrome.
4. **Mixed headline** — e.g. `SLEEP BEYOND YOUR` (sans caps) + `Wildest Dreams` (serif italic).
5. **Notched frames** — ~10px corner cut / double stroke on images & form fields.
6. **Heritage strip** — centered mixed headline + 3-column archival / process photos + tiny captions.
7. **Footer** — `--color-light-blue` ground; serif italic column titles; oversized wordmark at bottom.

---

## 5. Elements Toby specifically wants

- **走馬燈 / carousel**: hero image rotator + optional top announcement marquee.
- **相片邊框**: notched double-line frames (Ostermoor “fancy box”).
- Thin double horizontal rules as section separators.
- Outline CTAs (`SHOP ALL` style) instead of filled gradient pills.
- No emoji badges / purple-pink gradients (previous tobytoki look).

---

## 6. Reference screenshots

| File | Section |
| --- | --- |
| `01-desktop-hero-fullscreen.webp` | Oversized wordmark + hero |
| `04-sleep-beyond-heading.webp` | Mixed headline + texture photo |
| `08-brand-promise-section.webp` | Hotspots + promise headline |
| `11-heritage-section.webp` | Heritage grid |
| `15-footer-section.webp` | Slate footer + wordmark |
| `17-mobile-hero-390px.webp` | Mobile hero |

---

## 7. Implementation notes for zh-Hant

- Latin accent words (`Face Painting`, English slogans) use Cormorant italic.
- Chinese emphasis spans use Noto Serif TC (no true italic; use weight + slight opacity or keep upright serif).
- Keep body in Noto Sans TC / Public Sans for readability.
- Preserve SEO copy and WhatsApp / schema; only restyle chrome.
