# TODO — Coach Gideon Basketball Website (React)

Almost everything editable lives in **`src/content/siteContent.ts`**.
Open that one file first — most items below are a single line change there.

---

## ✅ Already done in this rebuild

- [x] Converted the static Bootstrap HTML site to a React + TypeScript + Vite app
- [x] Centralized all copy/pricing/links into `src/content/siteContent.ts` (the "CMS" layer)
- [x] Replaced the coach photo and about-page portrait placeholders with real photos
- [x] Replaced training/gallery photo placeholders with real photos (see "Images used" below)
- [x] Restored Testimonials and Blog to the navbar and footer (they were hard-coded hidden before)
- [x] Fixed the WhatsApp button on the Schedule page — it now builds a real `wa.me/<number>` link
      from `siteInfo.whatsappNumber` instead of a dead `href="#"`
- [x] Fixed the chatbot widget's open/close logic (previously relied on a CSS class toggle that
      could get out of sync with React state; now it's a single conditional render)
- [x] Fixed duplicated/inconsistent `<meta>` tags per page — now handled by one `usePageMeta` hook
- [x] Wired the Contact page form up to Formspree (needs your real form ID — see below)
- [x] Confirmed the footer "Website Designed by" link points at `peterlightspeed.com` (not a
      placeholder domain) — update `designerCredit` in `siteContent.ts` if this ever needs to change

## Deployment (GitHub Pages)

- [x] Added `.github/workflows/deploy.yml` — builds with `npm run build` and publishes `dist/`
- [x] Set `base` in `vite.config.ts` to `/coach-gideon/` so built asset URLs resolve under the
      GitHub Pages project subpath
- [x] Added a `postbuild` step that copies `index.html` → `404.html` so client-side routes
      (e.g. `/about`) don't 404 on refresh — GitHub Pages has no server-side rewrites
- [ ] If the GitHub repo is ever renamed away from `coach-gideon`, update `BASE_PATH` in
      `vite.config.ts` to match (see README → "Deploying to GitHub Pages")
- [ ] Once dependencies stabilize, run `npm install` locally and commit the generated
      `package-lock.json` — the workflow currently uses `npm install` instead of the faster,
      stricter `npm ci` because no lockfile exists yet

## Content to replace

- [ ] Confirm/edit the biography text in `bio.paragraphs` (`siteContent.ts`) — currently the
      original placeholder copy
- [ ] Add real certifications: replace `certifications` array (name, year, issuing body)
- [ ] Add real achievements/medal history: replace `achievements` array
- [ ] Replace placeholder testimonials in `testimonials` with real quotes from athletes/parents
- [ ] Write and add real blog articles — replace `blogPosts`, and link each "Read Full Article"
      to a real article page/URL (currently `href="#"` in `src/pages/Blog.tsx`)
- [ ] Add more gallery photos as they become available — add entries to `galleryImages`

## Contact details (`siteInfo` in `siteContent.ts`)

- [ ] Replace `phone`: `"+234 XX XXX XXXX"` with the real number
- [ ] Replace `whatsappNumber` with the real WhatsApp number (digits only, country code, no `+`)
- [ ] Replace `email`: `"coachgideon@example.com"` with the real email address
- [ ] Replace `venue` with the specific training venue / gym address

## Contact form — Formspree

- [ ] Create a form at [formspree.io](https://formspree.io) (free tier is fine to start)
- [ ] Copy the endpoint it gives you (looks like `https://formspree.io/f/xxxxabcd`)
- [ ] Paste it into `formspreeEndpoint` in `src/content/siteContent.ts`
- [ ] Send a test message from the live Contact page to confirm it arrives in your inbox

## Social media

- [ ] Replace every `"#"` in `socialLinks` (`siteContent.ts`) with real profile URLs, or delete
      the corresponding icon from `Footer.tsx` / `Contact.tsx` if a platform isn't used

## Pricing

- [ ] Replace every `"₦--,--"` price in the `services` array with a real per-session rate

## Domain / SEO

- [ ] Replace `siteInfo.domain` and every `https://example.com` reference in `index.html`
      (canonical URL, `og:url`, `og:image`, `twitter:image`) with the real production domain
- [ ] `public/opengraph.jpg` and `public/robots.txt` already exist — just double check the
      sitemap URL in `robots.txt` once the domain is final

## Images used in this build

All sourced from the photos you provided — swap any of these out at any time by replacing the
file in `src/assets/images/` and updating the filename reference in `siteContent.ts` /
`src/content/images.ts`.

| File                        | Used for                                   |
|------------------------------|---------------------------------------------|
| `coach-portrait.jpg`         | About page portrait, Game IQ service card    |
| `coach-casual.jpg`           | Conditioning service card, gallery (Coaching)|
| `action-1v1.jpg`             | Home hero photo, 1-on-1 coaching card        |
| `action-drive-contact.jpg`   | Shooting Development card, gallery (Match)   |
| `team-training.jpg`          | Group Training card, gallery (Coaching)      |
| `action-dribble-fmn.jpg`     | Youth Development card, gallery (Training)   |
| `action-defense.jpg`         | Ball Handling card, gallery (Match)          |
| `medals.jpg`                 | About page achievements, gallery (Success Stories) |

A few original WhatsApp photos were **not** used because they included a third-party TikTok
watermark (`@jordan180`) — best to avoid publishing someone else's handle on the site. Ask for
clean versions of those if you'd like them included later.

## Nice-to-haves (not required to launch)

- [ ] Swap the keyword-matching chat widget (`ChatWidget.tsx`) for a real chat/help-desk tool if
      you want it to handle more than a handful of canned questions
- [ ] Add Google Analytics / a privacy-friendly analytics tool once the domain is live
- [ ] Add a real sitemap.xml
