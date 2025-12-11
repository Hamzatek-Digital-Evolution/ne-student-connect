# NE-Students-Connect

This is a static site (HTML/CSS/JS). The repository is configured to deploy to GitHub Pages using a GitHub Actions workflow.

How to publish:

1. Initialize a git repo (if you haven't):

```bash
git init
git add .
git commit -m "Initial commit"
```

2a. Create a GitHub repo and push (using `gh` CLI):

```bash
gh repo create <OWNER>/<REPO> --public --source=. --remote=origin --push
```

2b. Or create a repo on GitHub website, then push manually:

```bash
git remote add origin https://github.com/<OWNER>/<REPO>.git
git branch -M main
git push -u origin main
```

3. The GitHub Actions workflow `.github/workflows/deploy-pages.yml` will upload the repository contents to GitHub Pages on push to `main` branch.

Notes:

- The site root is served from the repository root (no build step). `.nojekyll` is present to prevent Jekyll processing.
- If you want a custom domain, add a `CNAME` file at the repo root containing the domain.
