# Stelios Vasileiou – Portfolio

[**▶ Visit live site**](https://stuchain.github.io/portfolio/)

Minimal, CRT-inspired developer portfolio built with **Vite + React + TypeScript**.  
Features pixel-art UI, scroll-aware navigation, keyboard shortcuts, and a single `profile.md` as the content source of truth.

---

## Quick start

Requires **Node.js 18+** and **npm**.

```bash
git clone <this-repo-url>
cd portfolio
npm install
npm run dev
```

Then open the URL from the terminal (usually `http://localhost:5173`).

---

## Content: edit `profile.md` only

All the text and links you see on the site come from **`profile.md`** in the repo root:

- **Profile & hero:** name, GitHub username, tagline, location.
- **Social links:** GitHub, LinkedIn, email, phone.
- **About & Resume:** bio paragraphs, education, experience.
- **Skills & projects:** skill categories, featured repos, fallback repos.

Example (simplified) shape:

```yaml
name: Your Name
githubUsername: your-github
tagline: Full-Stack Developer
location: City, Country

social:
  github: https://github.com/your-github
  linkedin: https://www.linkedin.com/in/you/
  email: mailto:you@example.com

bio:
  - "Short about paragraph 1."
  - "Short about paragraph 2."
```

Whenever you change `profile.md`, regenerate data with:

```bash
npm run generate
```

or simply run:

```bash
npm run dev
```

and the generator will run before the dev server. The script writes `src/data/generated.ts`; do **not** edit files in `src/data/` by hand (they are generated or types only).

---

## Commands

- **`npm run dev`** – generate data from `profile.md` and start the Vite dev server.
- **`npm run build`** – generate data, run TypeScript build, and produce a production bundle in `dist/`.
- **`npm run preview`** – serve the built `dist/` locally for a production-like preview.

---

## Pixel-art UI / UX details

- **CRT feel:** dark theme with subtle dot grid and scanline overlay.
- **Pixel typography:** headings and nav use a pixel font for a retro terminal vibe.
- **Centered layout:** hero, resume, projects, skills, and contact are centered with generous spacing.
- **Scroll-aware nav:** the active section is highlighted in the top nav as you scroll.
- **Keyboard shortcuts:** `Alt+1`…`Alt+6` jump to Hero, About, Resume, Projects, Skills, Contact.
- **Smooth entrance animations:** sections fade in and slide up once as they enter the viewport, respecting `prefers-reduced-motion`.
- **Project filters & cards:** language filters, lifted hover states, and consistent card shadows.
- **Back to top:** a small floating button appears after scrolling past the hero, scrolling smoothly back up.

---

## Deployment (GitHub Pages or any static host)

The app is just static files, so you can deploy the `dist/` folder to any static host.

For this repo, it’s configured for **GitHub Pages** via **GitHub Actions**:

1. In GitHub: **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main`. The workflow builds and deploys to:  
   `https://stuchain.github.io/stelios-vasileiou-cv/`

If you fork or rename the repo, the path segment after `github.io/` will change accordingly.

---

## Using this as a template

If you want to adapt this portfolio for yourself:

1. **Fork** the repo.
2. Update **`profile.md`** with your own details (name, GitHub username, bio, CV, skills, repos).
3. Run **`npm run build`** (or `npm run dev`) to regenerate `src/data/generated.ts`.
4. Deploy the `dist/` folder to your host (GitHub Pages or elsewhere).

Avoid editing anything under `src/data/` except for type definitions; content should always flow from `profile.md`.
