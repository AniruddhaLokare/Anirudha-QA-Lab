# GitHub + Vercel deployment guide

## Before publishing
- Open `content/data.js` and check name, experience, email, LinkedIn and optional GitHub URL. Do not publish confidential employer/client data.
- Confirm the resume PDF contains only information you intend to share publicly.
- The website's interactive QA test runner is a **simulation**; Playwright tests in `tests/` are the real browser automation suite.

## GitHub (first time)
1. Create an **empty** repository on GitHub (for example `aniruddha-qa-lab`). Do not initialize it with a README.
2. Open the extracted folder in VS Code and open Terminal.
3. Run:

```bash
git init
git add .
git commit -m "Initial QA Lab portfolio and Playwright tests"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aniruddha-qa-lab.git
git push -u origin main
```

GitHub may ask you to authenticate. Replace `YOUR_USERNAME` with your own username.

## Vercel
1. Sign in at https://vercel.com and select **Add New → Project**.
2. Import the GitHub repository you just created.
3. Select **Framework Preset: Other**. Root Directory: `./`.
4. Build Command: leave **empty** (override any automatically suggested build command); Output Directory: leave empty / default. Install Command: leave empty / default for this static site.
5. Deploy. Vercel will give you a `*.vercel.app` URL.
6. Open the live site and check resume, case studies, crew, mobile navigation, and interactive simulation.
7. Later edits: change files, commit, push to `main`; Vercel automatically redeploys.

The root `index.html`, `assets/`, `content/`, and resume PDF are served as static files. The Playwright test suite is development-only and excluded from Vercel by `.vercelignore`.

## Real automated tests (local)

```bash
npm ci
npx playwright install chromium
npm test
npm run test:report
```

Run `npm install` once if no `package-lock.json` is present. CI tests run on GitHub Actions; see `.github/workflows/`.

## Local website without npm
Double-click `run_portfolio.bat` on Windows or open `index.html` directly.

## What is *not* done automatically
The repository and Vercel deployment are not created until you sign in and follow the steps above. No public URL exists yet.
