# michelledong200.github.io

Michelle Dong's personal site, served by GitHub Pages at **https://michelledong200.github.io/**.

The whole site is one static file, [`site/index.html`](site/index.html): HTML, CSS and JavaScript with no build step. Fonts come from Google Fonts and smooth scrolling from [Lenis](https://github.com/darkroomengineering/lenis) on jsDelivr.

## What's on the page

- **Hero:** nine animated widgets, one per project and sport. Hover one to see its label, push them around with the cursor, click one to jump to its section.
- **Work:** each project is a pinned section. Scrolling scrubs its animation: GuacBand, the skin disease classifier, Brass Rail Poker, the AI Study Assistant and the C++ inference engine.
- **Breaks:** cartoon tennis, sailing, windsurfing and basketball scenes between the projects.
- **Index:** every repo and project, with links.

## Run locally

```bash
cd site && python3 -m http.server 8000
```

Then open http://localhost:8000.

## Editing

- Copy (headings, project text, steps) is plain HTML in `site/index.html`.
- Colors and fonts are CSS variables in the `:root` block at the top of the `<style>`. The contrast button switches to the `[data-contrast="inverse"]` palette.
- Each project and sport animation is a function in the `scenes` object in the script. It receives scroll progress `p` from 0 to 1 and redraws its SVG.
- The repo list in the Index section is the `REPOS` array in the script.

## Deployment

`.github/workflows/deploy.yml` uploads the `site/` folder and deploys it on every push to `main`, or manually from the Actions tab (**Run workflow**). Pages must be set to **Settings → Pages → Source: GitHub Actions**.

## Previous site

The earlier Next.js version (`app/`, `components/`, `content/`, `lib/`, `public/` and the npm config) is still in the repo but is no longer built or deployed. It can be deleted, or recovered from history before the switch to the static site.
