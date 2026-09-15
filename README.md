# Enfinitive

The homepage for Enfinitive, an organization with the purpose of perfecting
conscious being.

The only wording on the site is "Enfinitive" and "To Perfect Conscious Being".

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The site is a fully static export, written to `out/`.

## Deploy to enfinitive.net

`enfinitive.net` is served by GitHub Pages, and its DNS already points at the
GitHub Pages apex addresses.

1. Push this project to the GitHub repository that serves the domain.
2. In that repository, set Settings → Pages → Build and deployment → Source to
   GitHub Actions.
3. Confirm Settings → Pages → Custom domain is `enfinitive.net`.

The workflow in `.github/workflows/deploy.yml` builds the static export and
publishes it on every push to `main`. `public/CNAME` keeps the custom domain
bound to the deployment.

## Stack

- Next.js (static export)
- TypeScript
- Tailwind CSS
- Cormorant Garamond and Geist
