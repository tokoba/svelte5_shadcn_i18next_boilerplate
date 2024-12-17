/* Customize your test conditions for playwright
 * The default sample is checking the tags on the top page '/'.
 * https://playwright.dev/
 */
import { expect, test } from '@playwright/test'

test('Top page has expected h2', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h2')).toBeVisible()
})
test('Top page has expected h1', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toBeVisible()
})
