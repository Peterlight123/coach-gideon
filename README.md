# Coach Gideon Basketball — Website

React + TypeScript + Vite rebuild of the Coach Gideon Basketball site (previously a static
Bootstrap HTML site). Same look and feel, same Bootstrap 5 styling, now built as a proper React
app with client-side routing and a single content file that works like a lightweight CMS.

## Tech Stack

- React 18 + TypeScript
- Vite (dev server + build)
- React Router v6 (client-side routing)
- Bootstrap 5.3 + Bootstrap Icons (via CDN, kept from the original design)
- Formspree (contact form backend — no server needed)

## Getting Started

```bash
npm install
npm run dev
```

Open the URL Vite prints (defaults to `http://localhost:5173`).

```bash
npm run build      # production build to /dist
npm run preview    # preview the production build locally
```

## The "CMS": `src/content/siteContent.ts`

This project has no database or admin panel — instead, every piece of editable text, every price,
every link, and every contact detail lives in one file:

```
src/content/siteContent.ts
```

To update the site — change a price, add a testimonial, fix the phone number, add a blog post —
edit that file. You should almost never need to touch the actual page/component code in
`src/pages/` or `src/components/`.

Images referenced from `siteContent.ts` (by filename, e.g. `"coach-portrait.jpg"`) are resolved
through `src/content/images.ts`, which maps those filenames to the real bundled files in
`src/assets/images/`. To add a new photo:

1. Drop the image file into `src/assets/images/`
2. Add one line to the map in `src/content/images.ts`
3. Reference the filename from `siteContent.ts` (e.g. in `galleryImages` or `services`)

## Project Structure

```
/
├── index.html                 — HTML shell, Bootstrap CDN links, SEO meta tags
├── src/
│   ├── main.tsx                — app entry point
│   ├── App.tsx                 — routes + page layout
│   ├── content/
│   │   ├── siteContent.ts      — ⭐ all editable site content (the "CMS")
│   │   └── images.ts           — filename → bundled image lookup
│   ├── hooks/
│   │   └── usePageMeta.ts      — sets page title/description per route
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ChatWidget.tsx      — floating FAQ chat assistant
│   │   └── NotFound.tsx        — 404 page
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Schedule.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── assets/images/          — real site photos
│   └── styles/global.css       — brand colors, hero/card/chatbot styles
├── public/
│   ├── favicon.svg
│   ├── opengraph.jpg
│   └── robots.txt
└── TODO.md                     — everything still marked as a placeholder
```

## Deploying to GitHub Pages

This repo includes a ready-to-go GitHub Actions workflow at
`.github/workflows/deploy.yml`. It builds the app with `npm run build` and
publishes the built `dist/` folder — **not** the raw source — to GitHub
Pages.

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **"GitHub Actions"** (you've already done this).
3. Push to `main` (or run the workflow manually from the **Actions** tab) —
   it'll build and deploy automatically.
4. Your site will be live at `https://<your-username>.github.io/coach-gideon/`.

### If your repo isn't named `coach-gideon`

Vite needs to know the subpath your site is served from. Open
`vite.config.ts` and change `BASE_PATH` to match your actual repo name,
e.g.:

```ts
const BASE_PATH = "/your-repo-name/";
```

If instead you're deploying to a GitHub **user/organization** site (a repo
literally named `<username>.github.io`, served from the domain root, no
subpath) or a custom domain, set:

```ts
const BASE_PATH = "/";
```

### Why the site showed a blank page with `main.tsx` / `favicon.svg` 404s

That happens when the raw, unbuilt `index.html` gets published instead of
the Vite production build — browsers can't execute a `.tsx` file directly,
and the `/favicon.svg` reference (a dev-server-only convenience) doesn't
resolve on a static host. The workflow above fixes this by always building
first and only publishing `dist/`.

### Client-side routing on GitHub Pages

GitHub Pages is a static file host with no server-side rewrites, so a
direct visit (or refresh) on a route like `/coach-gideon/about` would
normally 404 — no literal file exists at that path. The build's
`postbuild` script (`scripts/copy-404-page.mjs`) copies `dist/index.html`
to `dist/404.html` so GitHub Pages serves the app for any unknown path,
and React Router then renders the correct page from the URL.

## Contact Form (Formspree)


The Contact page posts directly to [Formspree](https://formspree.io) — no backend required.

1. Create a free form at formspree.io
2. Copy your form's endpoint (`https://formspree.io/f/xxxxabcd`)
3. Paste it into `formspreeEndpoint` in `src/content/siteContent.ts`

Until you do that, the form will submit to a placeholder URL and fail — see `TODO.md`.

## Color Scheme

| Variable   | Value     | Usage                |
|------------|-----------|-----------------------|
| Orange     | `#D97706` | Brand, CTAs, icons     |
| Dark       | `#111827` | Navbar, hero, footer   |
| Light gray | `#F3F4F6` | Section backgrounds   |

## What changed from the old static site

See `TODO.md` for the full list — highlights: the site is now a real SPA with client-side
routing, Testimonials and Blog are back in the navigation, the WhatsApp button on the Schedule
page is a working link instead of `href="#"`, the chat widget's show/hide logic no longer relies
on a CSS class that could desync from its button, and all photo placeholders have been replaced
with real photos you provided.
