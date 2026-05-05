import { Page, Locator } from '@playwright/test';

export class ContactsPage {
  readonly heading: Locator;
  readonly emailLink: Locator;
  readonly githubLink: Locator;

  constructor(private page: Page) {
    this.heading = page.getByText('Контактна інформація');
    this.emailLink = page.getByRole('link', { name: 'Надіслати e-mail' });
    this.githubLink = page.getByRole('link', { name: /github/i });
  }

  async goto() {
    await this.page.goto('/contacts.html');
  }
}