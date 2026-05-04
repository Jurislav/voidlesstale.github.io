# Sveltia CMS Auth Worker

This Worker is the Cloudflare-side OAuth bridge for Sveltia CMS when the site is hosted outside Netlify.

## What it is for

Sveltia CMS can talk directly to GitHub only when the editor already has a usable token flow. On Cloudflare Pages, the usual fix is a small Worker that:

- starts the GitHub OAuth flow
- receives the callback from GitHub
- returns the token back to the CMS popup

## 1. Create a GitHub OAuth app

In GitHub, create an OAuth app with:

- Homepage URL: `https://www.voidlesstale.com`
- Authorization callback URL: `https://<your-worker-subdomain>.workers.dev/callback`

## 2. Set Worker secrets

From this folder, set the Worker secrets and allowed domains:

```sh
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET
```

Then put the allowed domains into `.dev.vars` for local testing or into your Worker environment config:

- `ALLOWED_DOMAINS=voidlesstale.com,www.voidlesstale.com`

## 3. Deploy the Worker

```sh
wrangler deploy
```

After deploy, note the Worker URL, for example:

- `https://sveltia-cms-auth.<your-subdomain>.workers.dev`

## 4. Update the CMS config

In `public/cms/config.yml`, set:

```yml
backend:
  name: github
  repo: Jurislav/voidlesstale.github.io
  branch: main
  base_url: https://sveltia-cms-auth.<your-subdomain>.workers.dev
```

## 5. Smoke test

- Open `/cms/`
- Trigger GitHub login
- Confirm the popup returns to the CMS without a domain or callback error
- Create a draft devlog post and verify it opens a PR or commit flow as expected

## Notes

- This scaffold is GitHub-only because that is the backend configured for this site.
- The Worker source is adapted from the official Sveltia CMS authenticator flow for Cloudflare Workers.
