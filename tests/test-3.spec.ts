import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dw%26oq%3Dw%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDExNzdqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DNiuNasmDDMeu4-EPwNXR6A8&q=EgQOyeqiGLbWtNQGIjC1Qnp0zvFQlzhQnosjaBjxiRwK9jRJYPBSCTyIkQDIPV0L9_lctiWdxthacQGwCQ8yAVJaAUM');
  await page.locator('iframe[name="a-6q7l40osxw69"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});