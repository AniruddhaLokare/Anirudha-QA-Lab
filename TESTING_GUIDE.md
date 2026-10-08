# Running real Playwright tests

## Windows (VS Code or Antigravity)

1. Extract the entire ZIP to a folder.
2. Install Node.js LTS, if not already installed.
3. Open the folder in VS Code / Antigravity.
4. Double-click `RUN_TESTS_WINDOWS.bat`, or use the terminal:

```powershell
npm install
npx playwright install chromium
npm test
npm run test:report
```

`npm test` starts the local static server automatically at `http://127.0.0.1:4173` **for the tests only**. To view the portfolio normally, open `run_portfolio.bat` without Node.js.

## Run one browser or test

```powershell
npm run test:chromium
npm run test:mobile
npx playwright test -g "case studies"
npx playwright test --headed
```

## Understanding results

- Playwright tests in `tests/portfolio.spec.ts` are **real browser automation**.
- The site's interactive test-runner and defect lifecycle are **browser-only simulations**.
- The HTML report is generated at `playwright-report/index.html`.
- Screenshots, videos and traces are captured on failures in `test-results/`.
- If a test fails, open the report and inspect the trace before changing the test or the site.

## Troubleshooting

- **`npm` not recognized**: install Node.js LTS and restart your terminal.
- **Browser executable missing**: run `npx playwright install chromium`.
- **Port 4173 in use**: close the other process running the test server.
- **Company proxy or restricted network**: npm and browser downloads may need proxy configuration or administrator assistance.
- **Headless browser fails on your machine**: try `npm run test:headed`.
- **Test failure after editing `content/data.js`**: update hard-coded expectations in the test to reflect the new content if appropriate.

## Validation status of this delivery

The code was reviewed and static JavaScript syntax checks were run, but automated browser navigation was blocked by the build environment (`ERR_BLOCKED_BY_ADMINISTRATOR`), and dependency installation timed out. **Do not treat the test suite as passing until you run it on your computer.**
