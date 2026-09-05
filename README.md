# Henna Art Academy — Website

A complete, real, working website for a Mehndi (Henna) course, built with
Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

To build a production version:

```bash
npm run build
npm run start
```

## Where to edit content

Almost everything on the site — academy name, instructor bio, prices, contact
details, course modules, testimonials, FAQs and nav/footer links — lives in
**one file**:

```
src/config/site.ts
```

Open that file and edit the values directly. You don't need to touch any
other file to change text, prices or links.

Things you'll likely want to change first:
- `academyName`, `instructor`, `contact` — your real name/photo/numbers
- `course.originalPrice` / `course.offerPrice` — your real pricing
- `testimonials` — replace with real student reviews
- Replace `instructor.photo` and `testimonials[].photo` placeholders with
  real image files once you have them (drop images into `/public` and update
  the paths)

## Pages

| Page | Path | File |
|---|---|---|
| Home | `/` | `src/app/page.tsx` |
| Course | `/course` | `src/app/course/page.tsx` |
| About Us | `/about` | `src/app/about/page.tsx` |
| Contact Us | `/contact` | `src/app/contact/page.tsx` |
| FAQ | `/faq` | `src/app/faq/page.tsx` |
| Privacy Policy | `/privacy-policy` | `src/app/privacy-policy/page.tsx` |
| Terms & Conditions | `/terms` | `src/app/terms/page.tsx` |

## Components

Reusable pieces live in `src/components/`:
`Navbar`, `MobileNav`, `Footer`, `Hero`, `CourseCard`, `TestimonialCard`,
`FaqAccordion`, `CtaSection`, `Button`, `SectionHeading`, `PricingCard`,
`Timeline`, `ModuleAccordion`, `ContactForm`, and the decorative Mehndi/paisley
SVG motifs in `src/components/decorative/MehndiMotifs.tsx`.

## Contact form

The contact form on `/contact` (`src/components/ContactForm.tsx`) is wired up
in the UI and validates input, but it doesn't send email yet — there's a
commented example inside the file showing where to add a `fetch()` call to
your email service or a Next.js API route once you choose one (e.g. Resend,
Formspree, or your own backend).

## Deploying

This is a standard Next.js app, so it deploys to Vercel, Netlify, or any
Node.js host. The simplest path is:

1. Push this project to a GitHub repo
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Deploy — no extra configuration needed

## Notes

- All Mehndi/paisley graphics are original SVG line-art built for this site
  (not stock photography), so there are no licensing concerns and no large
  image files to load.
- Colors, fonts and spacing tokens are defined in `tailwind.config.ts`.
- The design respects `prefers-reduced-motion` and uses visible focus states
  for accessibility.
