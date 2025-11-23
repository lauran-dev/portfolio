# Portfolio

Personal portfolio site built with Next.js 15 (App Router), TypeScript, and Tailwind CSS 4. Static, dark-mode aware, and zero-config deployable to Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

All copy — profile, skills, work experience, and projects — lives in one place: [src/lib/data.ts](src/lib/data.ts). Edit that file to update the site; the section components under [src/components/sections/](src/components/sections/) render straight from it.

The `projects` array currently has placeholder cards — swap them for real projects with links to live demos and source repos.

## Resume PDF

[public/resume.pdf](public/resume.pdf) is a generated PDF matching the on-page resume data. Regenerate it after editing `src/lib/data.ts` by writing your own copy over it, or by re-running a small `pdfkit` script (see git history for the generator used to create the original).

## SEO

Set `NEXT_PUBLIC_SITE_URL` (e.g. in a Vercel environment variable) to your production domain — it's used for canonical URLs, the sitemap, and Open Graph metadata in [src/app/layout.tsx](src/app/layout.tsx), [src/app/sitemap.ts](src/app/sitemap.ts), and [src/app/robots.ts](src/app/robots.ts).

## Deploy

Push to a Git repo and import it on [Vercel](https://vercel.com/new) — no additional configuration needed.
