# Deployment Guide

Use this when pushing the demo to GitHub and deploying it.

## Open Project Folder in Terminal

```bash
cd "/Users/soestep/Desktop/Freelance Websites"
```

## Check Status

```bash
git status
```

If this says the folder is not a git repository, initialize git.

## Initialize Git If Needed

```bash
git init
git branch -M main
```

## Install and Build

```bash
npm install
npm run build
```

## First Commit

```bash
git add .
git commit -m "Create fictional contractor portfolio demo"
```

## Create a GitHub Repo

Option 1: GitHub website

1. Go to GitHub.
2. Create a new repository.
3. Name it something like `brentwood-contractor-demo`.
4. Keep it private if this is client work. GitHub Pro from the Student Developer Pack is useful for private/client repositories.
5. Do not add a README from GitHub because this project already has one.

Option 2: GitHub CLI

```bash
gh repo create brentwood-contractor-demo --private --source=. --remote=origin
```

Use `--public` instead of `--private` if you want it visible as a portfolio demo.

## Push to GitHub

If you created the repo on GitHub manually:

```bash
git remote add origin https://github.com/YOUR_USERNAME/brentwood-contractor-demo.git
git push -u origin main
```

If you used `gh repo create --source=. --remote=origin`:

```bash
git push -u origin main
```

## Deploy to Vercel

Vercel settings:

- Framework preset: `Vite`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

Steps:

1. Go to Vercel.
2. Import the GitHub repository.
3. Confirm the Vite settings above.
4. Deploy.
5. Run the checks in `QA_CHECKLIST.md`.

## GitHub Pages Alternative

GitHub Pages can host the static Vite build for free. For simple demos, Vercel is usually easier. If using GitHub Pages, use a GitHub Actions workflow that runs `npm install`, `npm run build`, and publishes `dist`.

Important Vite note: if deploying to a GitHub Pages project URL like:

```text
https://YOUR_USERNAME.github.io/brentwood-contractor-demo/
```

you may need to set Vite `base` to:

```ts
base: '/brentwood-contractor-demo/'
```

For a custom domain or Vercel deployment, the current Vite config can stay simple.

## Domain Setup After Payment

After a real client pays and approves launch:

- Buy or connect the domain through Name.com, Namecheap, `.TECH`, or the client's existing registrar.
- Point DNS to Vercel or the chosen host.
- Store registrar, hosting, DNS, Pageclip, and analytics credentials in 1Password.
- Never keep client passwords in code, notes, screenshots, or chat messages.
