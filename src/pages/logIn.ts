import { Page, Locator } from '@playwright/test';
import { env } from '../config/env';

{
//LOCATORS
public mainPageLogo () => this.page.getByRole('img', {
    name: 'Website for automation practice',
  });

//METHODS
async navigateToUrlAndLogIn(){
    await this.page.navigateToUrl(env.url);
}

}