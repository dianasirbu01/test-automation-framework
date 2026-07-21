import { test as base } from '@playwright/test';
import { LogIn } from '../pages/logIn.po';

type UiFixures = {
    logIn: LogIn;
};

export const test = base.extend<UiFixures>({
logIn: async ({ page }, use) => {
await use(new LogIn(page));
},
});

export { expect } from '@playwright/test';