# Tobytoki

Astro static site for Tobytoki — face painting, balloon art, and photography.

## Stack

- Astro (static-first)
- TypeScript
- Content Collections for Journal
- zh-HK default routes + `/en` English routes

## Develop

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:4321`.

## Build

```bash
npm run build
npm run preview
```

## Branch policy

Only two long-lived branches:

| Branch | Purpose |
| --- | --- |
| `develop` | All development, testing, and acceptance |
| `main` | Production only |

Rules:

- Work only on `develop`.
- Do **not** create `cursor/*`, `feature/*`, or other working branches unless explicitly requested.
- Do **not** open PRs for normal development.
- Do **not** merge to `main` or deploy production until an explicit release instruction is given.
- Flow: `develop` → acceptance → explicit release OK → merge `develop` → `main` → production.

## Notes

- Contact WhatsApp / email are configured in `src/data/site.ts` (empty until confirmed).
- Image slots use labelled placeholders — no stock photos.
- Legacy static prototype archived in `_archive/static-prototype/`.
