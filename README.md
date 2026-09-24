# michelledong200.github.io

Michelle Dong's personal portfolio. It's a single-page Next.js site (App Router, TypeScript, Tailwind CSS v4) exported as static files and hosted on GitHub Pages at **https://michelledong200.github.io/**.

## Run locally

Requires Node.js LTS (20+).

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

| Command             | What it does                                       |
| ------------------- | -------------------------------------------------- |
| `npm run build`     | Static export to `out/` (what GitHub Pages serves) |
| `npm run lint`      | ESLint                                             |
| `npm run typecheck` | TypeScript, no emit                                |
| `npm run format`    | Prettier (with Tailwind class sorting)             |

To preview the production build: `npm run build && npx serve out`.

## Editing content

**All copy lives in [`content/site.ts`](content/site.ts).** Components never hardcode personal text. Change a value there and the page updates. That file covers the hero, about text and stats, experience, projects, skills, clubs, education, contact text, and nav links.

- **Add a project:** append an object to `projects.items`. Only links you list get rendered, so leave `links: []` if there's nothing to show yet.
- **Add a job:** append to `experience.items` (newest first).
- The **"More on GitHub"** list is fetched from the GitHub API at build time. It shows your 6 most recently updated public repos, minus any already featured as project cards (matched by URL). If GitHub is unreachable or rate-limited, the list is skipped and the build still succeeds.

Colors and fonts are CSS variables at the top of [`app/globals.css`](app/globals.css), with separate light and dark values. Dark mode follows the system setting.

## Guac quest (the game)

Every section hides a 🥑. Visitors click them to fill the counter in the bottom-right corner, climb ranks from Seed to Guac master, and get avocado confetti plus an "Email me" prompt when they find all eight. Progress is saved in their browser, and the counter's panel has a reset button.

All game text (ranks, cheers, finale message, which sections have avocados) lives under `game` in `content/site.ts`. To add an avocado to a new section, add its section `id` to `game.spots`.

## Swapping the photo

Put a square headshot at **`public/profile.jpg`** (at least 560×560). The site checks for it at build time:

- If it exists, it's used in the hero and as the social-share (Open Graph/Twitter) image.
- If it's missing, the hero shows an avocado half with "MD" on the pit and no share image is advertised.

To change the favicon, replace `app/icon.png` (a square PNG, 64×64 or larger).

## Deployment

`.github/workflows/deploy.yml` builds and deploys with the official Pages actions. It runs:

- on every push to `main`
- weekly (Mondays 15:00 UTC), so the GitHub repo list and footer year stay current
- manually, from the Actions tab (**Run workflow**)

One-time setup:

1. Create a public GitHub repo named exactly **`michelledong200.github.io`** and push this project to `main`.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

`public/.nojekyll` stops GitHub from running Jekyll, which would otherwise hide the `_next/` asset folder.

## Remaining TODO(michelle) checklist

Search the code for `TODO(michelle)` to find each one.

- [ ] **Email:** replace `TODO@berkeley.edu` in `content/site.ts` (used by the hero, the Email link, and "Email me").
- [ ] **Headshot:** add `public/profile.jpg`.
- [ ] **Favicon:** replace the placeholder avocado `app/icon.png` (optional).
- [ ] **Hero meta:** confirm pronouns ("She/Her") and class year ("Class of 2030").
- [ ] **About stats:** keep or swap "5 projects" and "4 sports".
- [ ] **Shoreline Lake:** add numbers (students taught, age range) to the bullets.
- [ ] **Coere AI:** add a GitHub or live-demo link.
- [ ] **GuacBand:** add a GitHub or demo link.
- [ ] **Skin Disease Classification:** add bullets on the dataset, model, and accuracy.
- [ ] **AI Study Assistant:** add bullets on what it does.
- [ ] **SkyRL (fork):** add bullets on your contribution.
- [ ] **Skills:** add or remove items in each group.
- [ ] **Education:** confirm the exact major/program name and graduation year.
- [ ] **Resume (optional):** add `public/resume.pdf` and a link to it in `content/site.ts` if you want one.
