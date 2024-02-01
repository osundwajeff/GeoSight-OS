import { test, expect } from '@playwright/test';

test.use({
  storageState: 'auth.json'
});

test('test', async ({ page }) => {
  await page.goto('https://staging-geosight.unitst.org/');
  await page.getByRole('banner').getByRole('link', { name: 'Logo' }).click();
  await page.getByRole('link', { name: 'GeoSight', exact: true }).click();
  await expect(page.getByRole('banner').getByRole('link', { name: 'Logo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'GeoSight', exact: true })).toBeVisible();
  await expect(page.getByRole('paragraph')).toContainText('GeoSight is an open-source web geospatial data platform developed by UNICEF for easy data visualization and analysis. It is specifically designed to simplify the creation of online maps for visualizing multiple indicators at a subnational level to support evidence-based decision-making for better results for children.');
  await expect(page.getByRole('link', { name: 'Demo GeoSight Project This is' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Demo GeoSight Project This is' })).toBeVisible();
  await page.getByRole('link', { name: 'Demo GeoSight Project This is' }).click();
  await expect(page.locator('div').filter({ hasText: 'Project Overview' }).nth(3)).toBeVisible();
  await page.getByText('This is a sample description').click();
  await expect(page.locator('body')).toContainText('This is a sample description of the GeoSight Demo Project using some custom markdown styling. The project showcases the various GeoSight functionalities, e.g. Single and Multi-Indicator Layers, Dynamic Layers, Indicator Layers created on Related Tables etc. The dashboard has been created for demonstration purposes only using random/mockup data.');
  await expect(page.locator('body')).toContainText('This is test');
  await page.getByRole('button', { name: 'Close' }).click();
  await expect(page.getByPlaceholder('Search Geography Entity')).toBeEmpty();
  await page.getByPlaceholder('Search Geography Entity').click();
  await page.getByPlaceholder('Search Geography Entity').fill('Somalia');
  await page.getByTestId('SearchIcon').click();
  await page.getByText('SomaliaCountry').click();
  await expect(page.getByPlaceholder('Search Geography Entity')).toHaveValue('Somalia (Country)');
  await page.locator('.CloseIcon > svg > path').click();
  await page.locator('.Toolbar-Right').click();
  await page.locator('div').filter({ hasText: /^DistrictCountryProvinceDistrict$/ }).first().click();
  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 728,
      y: 280
    }
  });
  await expect(page.locator('#map div').filter({ hasText: 'Hobyo' }).nth(4)).toBeVisible();
  await expect(page.getByRole('rowgroup')).toContainText('Sample Indicator A');
  await expect(page.getByRole('cell', { name: '42' })).toBeVisible();
  await expect(page.getByRole('rowgroup')).toContainText('42');
  await page.getByLabel('Close popup').click();
  await page.getByLabel('Map', { exact: true }).click({
    position: {
      x: 747,
      y: 66
    }
  });
  await expect(page.locator('#bfdda5dd-1343-4222-80b2-08050785ed8e div').filter({ hasText: 'Laasqoray' })).toBeVisible();
  await expect(page.getByRole('rowgroup')).toContainText('Sample Indicator A');
  await expect(page.getByRole('cell', { name: 'Sample Indicator A' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '8' })).toBeVisible();
  await page.getByLabel('Close popup').click();
  await expect(page.locator('.widget__fill').first()).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Time WidgetAwdal \(SOMA_SOM_0001_V1\)Sample Indicator A$/ }).nth(1)).toBeVisible();
  await page.locator('.DropdownIndicator').first().click();
  await page.getByPlaceholder('Search Geography Entity').click();
  await page.locator('div').filter({ hasText: /^DistrictCountryProvinceDistrict$/ }).first().click();
  await page.getByPlaceholder('Search Geography Entity').click();
  await page.locator('div').filter({ hasText: /^DistrictCountryProvinceDistrict$/ }).first().click();
  await expect(page.getByText('Sample Indicator A83.00 - 99.')).toBeVisible();
});