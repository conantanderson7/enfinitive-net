# Enfinitive

The homepage for Enfinitive, an organization with the purpose of perfecting
conscious being.

The only wording on the site is "Enfinitive" and "To Perfect Conscious Being".

The live site for now is [enfinitive.net](https://enfinitive.net).
`enfinitive.org` stays on Outlook mail until that cutover is done on purpose.

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

## Domains

Use **one** live site, not two copies.

| Domain | Role now | Later |
| --- | --- | --- |
| `enfinitive.net` | Public homepage (GitHub Pages) | Redirect to `.org` |
| `enfinitive.org` | Outlook mail only | Canonical homepage |

Push this project to [conantanderson7/enfinitive-net](https://github.com/conantanderson7/enfinitive-net),
then set Settings → Pages → Source to **GitHub Actions** and Custom domain to
`enfinitive.net`. Enable **Enforce HTTPS**.

`public/CNAME` is `enfinitive.net`. The workflow in
`.github/workflows/deploy.yml` publishes on every push to `main`.

### 1. Point `enfinitive.org` at GitHub Pages (GoDaddy)

Do not delete the Outlook records.

Keep:

- `MX` → `enfinitive-org.mail.protection.outlook.com`
- `TXT` records for Microsoft 365 / SPF
- any `CNAME` records GoDaddy or Microsoft added for Autodiscover

Change only the web records:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `enfinitive.org` |

If GitHub shows a domain-verification `TXT`, add that too. DNS can take a
few minutes to a few hours. HTTPS is issued after GitHub sees the domain.

### 2. Redirect `enfinitive.net` (Google Domains / Cloud DNS)

After Pages is serving `.org`, stop pointing `.net` at GitHub. A Pages
certificate covers only the custom domain in `CNAME`, so leaving `.net` on
those IPs will produce a certificate error.

In the `.net` DNS host, replace the GitHub A records with a **URL forward**
(sometimes called a synthetic record) from `enfinitive.net` and
`www.enfinitive.net` to `https://enfinitive.org`.

## Stack

- Next.js (static export)
- TypeScript
- Tailwind CSS
- Cormorant Garamond and Geist
