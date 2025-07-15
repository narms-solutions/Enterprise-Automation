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
      const startPageTitle=  await this.actions.getStartPageTitle(this.startPageTypeSelector, this.startPageSelector);
      await expect(startPageTitle).toBeVisible({timeout:15000});
    }

    async printStatPageTitle(){
        const title= await this.actions.getTitle(this.startMentTitleSelector);
        console.log(`The title of the home page: ${title}`);

    }
}