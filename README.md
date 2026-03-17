# Stelios Vasileiou – Portfolio

Personal portfolio with a pixel-art UI.

## Tech stack

- **Vite** – dev server and build
- **React** – UI
- **TypeScript** – types

## Prerequisites

- **Node.js** 18+ and **npm**

## Setup

```bash
git clone <repo-url>
cd <repo-name>
npm install
```

## Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (e.g. http://localhost:5173).

## Build

```bash
npm run build
```

Output is in the `dist/` directory.

## Deploy to GitHub Pages

The workflow uses **GitHub Actions** (upload-pages-artifact + deploy-pages). The site URL depends on the **repository name**:

- Repo **`stuchain.github.io`** → https://stuchain.github.io/ (root URL)
- Repo **`portfolio`** → https://stuchain.github.io/portfolio/
- Repo **`stelios-vasileiou-cv`** → https://stuchain.github.io/stelios-vasileiou-cv/

**404 redirect:** When a visitor hits an unknown path (e.g. `/some/missing/page`), GitHub Pages serves `public/404.html`, which redirects to `/` and shows a “Go home” link so they land on the SPA.

### One-time setup (do this first)

1. **Enable GitHub Pages**  
   In the repo: **Settings → Pages**.

2. **Set the publishing source**  
   Under "Build and deployment":
   - **Source:** choose **GitHub Actions** (not "Deploy from a branch").

3. **Push to `main`**  
   The workflow runs on push to `main`. After it succeeds, the site is live at the URL above.

### If the site is still blank

- **Check the repo name.** Only a repo named `portfolio` is served at `.../portfolio/`. If your repo is `stelios-vasileiou-cv`, open `.../stelios-vasileiou-cv/` instead.
- **Check the workflow run.** Repo → **Actions** tab. The "Deploy to GitHub Pages" workflow should be green. If the **deploy** job failed, fix the error (e.g. permissions, environment).
- **Confirm Pages source.** Settings → Pages → Source must be **GitHub Actions**. If it is "Deploy from a branch", switch it to **GitHub Actions** and push again.

## Editing content

**All content is in a single file:** **`profile.md`** in the repo root. Edit that file (YAML frontmatter) with your name, tagline, location, social links, bio, education, experience, skills, featured repos, and fallback repo descriptions. Do not edit files under `src/data/` by hand; they are generated from `profile.md`.

After changing `profile.md`, run:

```bash
npm run generate
```

(or run `npm run dev` or `npm run build`, which run generate automatically). Then the site uses your updated content.

**Favicon:** A simple pixel-style placeholder favicon is in `public/favicon.ico`. You can replace it by dropping your own `favicon.ico` (e.g. 16×16 or 32×32) into `public/`; no code changes needed.
