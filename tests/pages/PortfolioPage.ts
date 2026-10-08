import { expect, type Page } from '@playwright/test';

export class PortfolioPage {
  constructor(readonly page: Page) {}
  async open() { await this.page.goto('/'); }
  async expectProfile() {
    await expect(this.page.locator('#name')).toContainText('ANIRUDDHA');
    await expect(this.page.locator('#role')).toContainText('QA');
  }
  async openCase(index: number) {
    await this.page.locator('#caseStudies .case-tab').nth(index).click();
    await expect(this.page.locator('#caseStudies .case-panel.active')).toBeVisible();
  }
}
