import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://staging-geosight.unitst.org/');
  await expect(page.getByRole('link', { name: 'Demo GeoSight Project This is' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Demo GeoSight Project This is' })).toBeVisible();
  await page.getByRole('link', { name: 'Demo GeoSight Project This is' }).click();
  await expect(page.getByText('Project Overview')).toBeVisible();
  await expect(page.getByText('This is a sample description')).toBeVisible();
  await expect(page.getByText('This is test')).toBeVisible();
  await expect(page.locator('label').filter({ hasText: 'Do not show this again!' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close' })).toBeVisible();
  await page.getByText('Do not show this again!').click();
  await page.getByText('Project Overview').click();
  await page.getByText('This is test').click();
  await page.getByText('Do not show this again!').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByPlaceholder('Search Geography Entity')).toBeEmpty();
  await page.getByPlaceholder('Search Geography Entity').click();
  await page.getByPlaceholder('Search Geography Entity').fill('somalia');
  await page.getByPlaceholder('Search Geography Entity').press('Enter');
  await page.getByPlaceholder('Search Geography Entity').click();
  await page.getByPlaceholder('Search Geography Entity').press('Enter');
  await expect(page.getByPlaceholder('Search Geography Entity')).toHaveValue('Somalia (Country)');
  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 726,
      y: 272
    }
  });
  await expect(page.locator('#map div').filter({ hasText: 'Hobyo' }).nth(4)).toBeVisible();
  await page.locator('#map div').filter({ hasText: 'Hobyo' }).nth(4).click();
  await expect(page.getByRole('rowgroup')).toContainText('Sample Indicator A');
  await expect(page.getByRole('cell', { name: '42' })).toBeVisible();
  await expect(page.locator('#map')).toContainText('Hobyo');
  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 512,
      y: 398
    }
  });
  await expect(page.getByText('Baydhaba', { exact: true })).toBeVisible();
  await expect(page.getByRole('rowgroup')).toContainText('Sample Indicator A');
  await expect(page.getByRole('rowgroup')).toContainText('34.00 - 53.00');
  await expect(page.getByRole('cell', { name: '-01-2024T00:00:00+00:00' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'SOMA_SOM_0005_0001_V1' })).toBeVisible();
  await page.getByLabel('Close popup').click();
  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 548,
      y: 436
    }
  });
  await page.getByLabel('Close popup').click();
  await expect(page.locator('.widget__sw__content')).toBeVisible();
  await page.locator('.CloseIcon > svg').click();
  await page.locator('.widget__time_series__wrapper').click();
  await page.goto('https://staging-geosight.unitst.org/project/demo-geosight-project');
  await page.locator('div').filter({ hasText: /^DistrictCountryProvinceDistrict$/ }).first().click();
  await expect(page.locator('.widget__sw__content')).toBeVisible();
  await expect(page.getByText('Sample Widget')).toBeVisible();
  await expect(page.getByText('Time Widget')).toBeVisible();
  await expect(page.locator('section').filter({ hasText: 'Sample Indicator A83.00 - 99.' }).locator('canvas')).toBeVisible();
  await expect(page.getByText('Sample Indicator A').nth(2)).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Sample Widget');
});