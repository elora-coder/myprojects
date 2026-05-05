import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { ContactsPage } from './pages/ContactsPage';

test.describe('Портфоліо Катерини', () => {

  test('Головна сторінка має правильний заголовок', async ({ page }) => {
    const home = new HomePage(page);

    await home.goto();

    await expect(page).toHaveTitle(/Портфоліо/);
    await expect(home.heading).toContainText('Катерина');
  });

  test('Кнопка "Зв’язатися" існує і видима', async ({ page }) => {
    const home = new HomePage(page);

    await home.goto();

    await expect(home.contactButton).toBeVisible();
    await expect(home.contactButton).toHaveAttribute('href', '#contacts');
  });

  test('Сторінка контактів містить email і GitHub', async ({ page }) => {
    const contacts = new ContactsPage(page);

    await contacts.goto();

    await expect(contacts.heading).toBeVisible();

    await expect(contacts.emailLink).toBeVisible();
    await expect(contacts.emailLink).toHaveAttribute('href', /mailto:/);

    await expect(contacts.githubLink).toBeVisible();
    await expect(contacts.githubLink).toHaveAttribute('href', /github/);
  });

});