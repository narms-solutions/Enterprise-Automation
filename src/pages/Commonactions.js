import HomePage from "./HomePage";

export default class Commonactions{
    constructor(page){
        this.page=page;
    }

    async wait(){
        await this.page.pause();
    }

    async getTextBoxField(role,Name, text){
      await this.page.waitForLoadState('domcontentloaded');
      
      const inputField=  await this.page.getByRole(role, {name:Name});
      await inputField.fill(text);
    }

    async pominnMigSenareLink(role, Name){
        const button=await this.page.getByRole(role, {name:Name});
        await button.click().catch((error)=>{
            console.error(`Error locationg the link${error}`)
            throw error
        });
         
    }
    async clickLoginButton(selector){
        await this.page.locator(selector).click();
       const homePage=new HomePage(this.page)
        return homePage;
    }

    async getStartPageTitle(role, Name){
      await this.page.waitForLoadState('domcontentloaded');
        return this.page.getByRole(role, {name:Name});
       
    }

    async getTitle(selector){
        const title= await this.page.getByTitle(selector);
        return  title.textContent();
    }
}