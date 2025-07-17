import { expect } from "@playwright/test";
import Commonactions from "./Commonactions.js";

export default class HomePage{

    startPageTypeSelector='link';
    startPageSelector='Startsida';
    startMentTitleSelector='Startsida';
    constructor(page){
        this.page=page;
        this.actions=new Commonactions(page)
    }

    async expectStartPageToBeVisible(){
        await this.page.screenshot({ path: 'debug-visible.png' });
      const startPageTitle=  await this.actions.getStartPageTitle(this.startPageTypeSelector, this.startPageSelector);
      await expect(startPageTitle).toBeVisible({timeout:15000});
      await this.page.screenshot({ path: 'debug-visible.png' });
    }

    async printStatPageTitle(){
        const title= await this.actions.getTitle(this.startMentTitleSelector);
        console.log(`The title of the home page: ${title}`);
        await this.page.screenshot({ path: 'debug-visible.png' });

    }
}