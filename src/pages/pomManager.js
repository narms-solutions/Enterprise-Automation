import LoginPage from "./LoginPage.js";
import HomePage from "./HomePage.js";
import Commonactions from "./Commonactions.js";

export default class pomManager{
    constructor(page){
        this.page=page;
        this.actions=new Commonactions(page);
        this.loginPage=new LoginPage(page)
        this.homePage=new HomePage(page);
    }

}