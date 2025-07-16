import Commonactions from "./Commonactions.js";
import dotenv from 'dotenv';
dotenv.config({path:'./src/config/.env'});


export default class LoginPage{

    inputFiledTypeSelector='textbox';
    userNameInputSelector= "username";
    passwordInputSelector="password";
    loginButtonSelector="#Login";
    registermigTypekSelector='link'
  registerMigLinkSelector='Påminn mig senare'

    constructor(page){
        this.page=page;
       
        this.actions=new Commonactions(page);
    }

    async navigateToLoginPage(){
        await this.page.goto("/");
        
     }
     async fillCredentials( ){
       await this.actions.getTextBoxField(this.inputFiledTypeSelector, this.userNameInputSelector, process.env.APP_USERNAME);
       await this.actions.getTextBoxField(this.inputFiledTypeSelector, this.passwordInputSelector, process.env.APP_PASSWORD);
       const homePage=await this.actions.clickLoginButton(this.loginButtonSelector);
        //const homepage=await this.actions.pominnMigSenareLink(this.registermigTypekSelector, this.registerMigLinkSelector);
      await homePage.expectStartPageToBeVisible();
      await homePage.printStatPageTitle();
       
     }
}