import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly heading: Locator;
  readonly contactButton: Locator;
  readonly navContacts: Locator;

  constructor(private page: Page) {
    this.heading = page.locator('h1'); // "Катерина"
    this.contactButton = page.getByRole('link', { name: 'Зв’язатися зі мною' });
    this.navContacts = page.getByRole('link', { name: 'Контакти' });
  }

  async goto() {
    await this.page.goto('/index.html');
  }
}