# R D Physiotherapy Clinic & Rehab Centre — Website

Production website for **R D Physiotherapy Clinic & Rehab Centre**, Hyderabad Gate, Susuwahi, Varanasi.

- **Live site:** https://rd-physiotherapy-website.vercel.app
- **Repository:** https://github.com/akshaycoderg/rd-physiotherapy-website

The site is a single-page marketing site with appointment booking that hands off to WhatsApp. There is no backend, database, or patient data storage.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, static prerendering) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Fonts | Inter (body), Poppins (headings) via `next/font/google` |
| Hosting | Vercel |

## Project structure

```
app/                 Routes, metadata, sitemap, robots, icons, global styles
components/
  layout/            Header, footer, floating WhatsApp button, mobile action bar
  sections/          The 12 homepage sections
  ui/                Small shared primitives (buttons, headings, logo)
data/clinic.ts       Single source of truth for all clinic content
lib/                 Site URL constants, WhatsApp helpers, class utilities
assets/              Optimized WebP images used by the site
public/images/       Open Graph image
scripts/             One-off asset preparation script
```

## Local development

Requires Node.js 20.9+ (see `.nvmrc`, pinned to Node 22).

```bash
npm install
npm run dev        # http://localhost:3000
```

Useful checks:

```bash
npm run lint
npm run typecheck
npm run build
```

On Windows PowerShell, use `npm.cmd` instead of `npm` if script execution is blocked.

## Updating content

Almost all text lives in **`data/clinic.ts`**. Edit that file for:

- phone / WhatsApp number and address (`contact`, `address`)
- opening hours (`hours`)
- services (`services`)
- doctor profile (`doctor`)
- facilities (`facilities`)
- FAQs (`faqs`)
- the list of items still awaiting clinic approval (`pendingApprovals`)

Changing the phone number in `clinic.contact` updates every Call and WhatsApp link on the site, including the appointment form message.

### Images

- Doctor portrait: `assets/doctor-portrait.webp`
- Treatment room: `assets/physiotherapy-treatment-room.webp`
- Social share image: `public/images/og-image.jpg` (1200 × 630)

To regenerate the optimized assets from new source images, update the paths in `scripts/prepare-assets.mjs` and run:

```bash
node scripts/prepare-assets.mjs
```

## Deployment

The project is connected to Vercel. Pushing to `main` triggers a production deployment.

Manual deploy:

```bash
vercel --prod
```

### Environment variables

| Name | Value | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://rd-physiotherapy-website.vercel.app` | Canonical URL, Open Graph URL, sitemap and robots |

Set this in **Vercel → Project → Settings → Environment Variables** for Production (and Preview if desired). If a custom domain is added later, update this value and redeploy so canonical links and the sitemap point at the new domain.

## SEO

- Per-page metadata, canonical URLs, Open Graph and Twitter cards
- `sitemap.xml` and `robots.txt` generated from `app/sitemap.ts` and `app/robots.ts`
- `MedicalClinic` structured data with address, opening hours, and phone
- No review, rating, or credential markup — nothing unverified is published

After changing the domain, re-submit `https://<domain>/sitemap.xml` in Google Search Console.

## Accessibility

Semantic landmarks, skip link, labelled form fields with inline errors, visible focus states, keyboard-operable menu and FAQ (`<details>`), and colour combinations that pass WCAG AA contrast.

## Pending clinic approval

These are intentionally left out or marked as pending until the clinic confirms them:

1. Doctor qualifications and years of experience
2. Consultation fee
3. Official logo and brand assets
4. Approved patient testimonials (the reviews section currently explains that verified feedback is pending)
5. Final list of equipment and facilities
6. Confirmation of the service list
7. Confirmation that the supplied images are the clinic's own photos

Update `data/clinic.ts` as each item is confirmed.
