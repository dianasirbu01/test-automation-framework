import { test, expect } from '../../src/fixtures/ui.fixtures';

test.describe('LogIn tests', () => {
  test('Log in test', async ({ logIn }) => {
    await logIn.navigateToUrlAndLogIn();
    await expect(logIn.mainPageLogo()).toBeVisible();
  });
});