import { test, expect } from '@playwright/test';

test.describe('OneBookshelf App', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    
    // Check that the title is correct
    await expect(page).toHaveTitle('OneBookshelf');
    
    // Check that the main heading is visible
    await expect(page.getByRole('heading', { name: 'OneBookshelf', level: 1 })).toBeVisible();
  });

  test('should switch language to German', async ({ page }) => {
    await page.goto('/');
    
    // Click the DE button
    await page.getByRole('button', { name: 'DE' }).click();
    
    // Check that navigation changed to German
    await expect(page.getByRole('link', { name: 'Startseite' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Dateien' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Bücherregale' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Einstellungen' })).toBeVisible();
  });

  test('should display system status', async ({ page }) => {
    await page.goto('/');
    
    // Check that system status is visible
    await expect(page.getByRole('heading', { name: 'System Status', level: 3 })).toBeVisible();
    await expect(page.getByText('Offline Mode: Yes')).toBeVisible();
  });
});
