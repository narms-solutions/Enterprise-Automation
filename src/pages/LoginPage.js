import Commonactions from "./Commonactions.js";
import data from "./data.json"


export default class LoginPage{

    inputFiledTypeSelector='textbox';
    userNameInputSelector= "username";
    passwordInputSelector="password";
    loginButtonSelector="#Login";
    registermigTypekSelector='link'
  registerMigLinkSelector='Påminn mig senare'

    constructor(page){
        this.page=page;
        this.data=data;
        this.actions=new Commonactions(page);
    }

    async navigateToLoginPage(){
        await this.page.goto("/");
        
     }
     async fillCredentials(){
       await this.actions.getTextBoxField(this.inputFiledTypeSelector, this.userNameInputSelector, data.userName);
       await this.actions.getTextBoxField(this.inputFiledTypeSelector, this.passwordInputSelector, data.Password );
       const homePage=await this.actions.clickLoginButton(this.loginButtonSelector);
        //const homepage=await this.actions.pominnMigSenareLink(this.registermigTypekSelector, this.registerMigLinkSelector);
      await homePage.expectStartPageToBeVisible();
      await homePage.printStatPageTitle();
       
     }
}