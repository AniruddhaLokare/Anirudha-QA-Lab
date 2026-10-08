import { test, expect } from '@playwright/test';
import { PortfolioPage } from './pages/PortfolioPage';

test.beforeEach(async ({ page }) => { await new PortfolioPage(page).open(); });

test('profile and content render from editable data', async ({ page }) => {
  const portfolio = new PortfolioPage(page);
  await portfolio.expectProfile();
  await expect(page.locator('#experienceTimeline')).not.toBeEmpty();
  await expect(page.locator('#projectsGrid')).not.toBeEmpty();
  await expect(page.locator('#skillGroups')).not.toBeEmpty();
});

test('all navigation destinations exist', async ({ page }) => {
  for (const href of await page.locator('#primaryNav a[href^="#"]').evaluateAll(links => links.map(link => link.getAttribute('href')))) {
    expect(href).toBeTruthy();
    await expect(page.locator(href!)).toHaveCount(1);
  }
});

test('case studies switch and reveal workflow details', async ({ page }) => {
  const portfolio = new PortfolioPage(page);
  const tabs = page.locator('#caseStudies .case-tab');
  expect(await tabs.count()).toBeGreaterThanOrEqual(4);
  await portfolio.openCase(1);
  const panel = page.locator('#caseStudies .case-panel.active');
  const steps = panel.locator('.case-step');
  expect(await steps.count()).toBeGreaterThan(2);
  await steps.nth(1).click();
  await expect(steps.nth(1)).toHaveClass(/active/);
  await expect(panel.locator('.case-detail p')).not.toBeEmpty();
});

test('recruiter links and resume asset are usable', async ({ page, request }) => {
  const resume = page.locator('#resume');
  await expect(resume).toHaveAttribute('download', /\.pdf$/);
  const resumeHref = await resume.getAttribute('href');
  expect(resumeHref).toBeTruthy();
  const response = await request.get(new URL(resumeHref!, page.url()).toString());
  expect(response.ok()).toBeTruthy();
  expect(response.headers()['content-type']).toContain('pdf');
  await expect(page.locator('#email')).toHaveAttribute('href', /^mailto:/);
  await expect(page.locator('#linkedin')).toHaveAttribute('href', /^https:\/\//);
});

test('original QA crew is present without duplicate cards', async ({ page }) => {
  await expect(page.locator('#characters .character')).toHaveCount(3);
  await expect(page.locator('#aniLead')).toHaveCount(1);
  await expect(page.locator('#qaCrewDock .crewBot')).toHaveCount(3);
});

test('simulated test runner displays its disclaimer and starts', async ({ page }) => {
  await expect(page.locator('#realTestingLab')).toContainText('simulation');
  await page.locator('#qaRunV3').click();
  await expect(page.locator('#qaRunV3')).toBeDisabled();
  await expect(page.locator('#testRows .testrow')).toHaveCount(8);
});

test('no horizontal overflow on the viewport', async ({ page }) => {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(2);
});

test('mobile navigation opens and closes', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Only applies to mobile layout');
  const toggle = page.locator('#mobileNavToggle');
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.locator('#primaryNav a[href="#contact"]').click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});
