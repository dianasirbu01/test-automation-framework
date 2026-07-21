import { Locator } from '@playwright/test';
import { BasePage } from './basePage.po';
import { env } from '../config/env';

export class LogIn extends BasePage {
  // LOCATORS
  public mainPageLogo = () => this.page.getByRole('img', {
    name: 'Website for automation practice',
  });

  // METHODS
  async navigateToUrlAndLogIn() {
    await this.page.goto(env.url);
  }
}