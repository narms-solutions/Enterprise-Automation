import{test} from "@playwright/test";
import pomManager from "../pages/pomManager.js";

let pm;

test.describe(" Salesforce application",()=>{
    test.beforeEach("Navigate to salesforce application", async({page})=>{
        pm=new pomManager(page); 

})
test.afterEach('Close the browser',async({page})=>{
    await page.close();
})

test('Navigate to Login Page', async()=>{

    await pm.loginPage.navigateToLoginPage();
    await pm.loginPage.fillCredentials();
})
    

})