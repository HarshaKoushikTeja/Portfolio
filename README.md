# Portfolio

Personal portfolio — ML, analytics, full-stack.

**Live:** https://harsha-portfolio.netlify.app

Built with React and Vite. Single page, dark theme, liquid glass aesthetic. One
animated canvas in the hero, everything else kept deliberately quiet.

## Stack

- React 18 + Vite
- Vanilla CSS (one `index.css`, no Tailwind, no CSS-in-JS)
- Web3Forms for the contact form
- Deployed on Netlify with auto-deploy from `main`

No animation libraries, no UI kits. Social icons are inline SVG.

## Structure

src/
├── components/
│   ├── Hero.jsx / HeroCanvas.jsx   — name, tagline, particle mesh
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx                — 7 project cards
│   ├── Experience.jsx              — 10-entry chronological timeline
│   ├── BeyondCode.jsx              — horizontal polaroid gallery
│   ├── Contact.jsx                 — Web3Forms-backed form
│   ├── Navbar.jsx
│   └── Footer.jsx
├── assets/                         — photos, auto-imported via import.meta.glob
├── index.css
└── App.jsx

## Local development

```bash
git clone https://github.com/HarshaKoushikTeja/portfolio.git
cd portfolio
npm install
cp .env.example .env    # add your Web3Forms access key
npm run dev
```

Open http://localhost:5173.

## Environment variables

| Variable | Purpose |
|---|---|
| `VITE_WEB3FORMS_KEY` | Public access key for Web3Forms submissions |

The key is public by design — Web3Forms is designed to take a client-side
access key scoped by domain allowlist. Still, it's kept in `.env` and
out of git history via `.gitignore`.

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Notes to self

- Photos in `src/assets/` are auto-imported by folder name and grouped into the
  Beyond Code gallery. To add a new section: create a folder in `assets/`, drop
  photos in, add a matching entry to `SECTIONS` in `BeyondCode.jsx`.
- The hero canvas is scoped to the hero section only. No site-wide animated
  backgrounds, by design.
- If the build suddenly balloons in size, check `src/assets/` — original photos
  should be compressed to WebP, max 1600px on the long edge, before commit.

## Contact

Email: haila1@asu.edu
LinkedIn: https://www.linkedin.com/in/aila-harsha-koushik-teja
