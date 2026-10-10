const{test , expect} = require('@playwright/test');
const loginPage = require('../pages/LoginPage')
const loginData = require('../test-data/loginData')


test.describe('login with data driven',()=>{

    
    for(const loginValues of loginData){
        
        test(`login with ${loginValues.scenario}` , async({page})=>{
                       
               const login = new loginPage(page);

                await page.goto(login.appUrl());
                await login.enterUserName(loginValues.username)
                await login.enterPassword(loginValues.password)
                await login.clickLoginButton();
               

            if(loginValues.expectedStatus==="Success"){

                await expect(await login.verifyLogin()).toBeVisible();
                
            }
           else if(loginValues.expectedStatus==="invalid username or password"){

                await expect(await login.getLoginErrorMessage()).toHaveText("Epic sadface: Username and password do not match any user in this service")
            
            }  else if(loginValues.expectedStatus==="password is required"){

                await expect(await login.getLoginErrorMessage()).toHaveText('Epic sadface: Password is required');
            
            }
              else if(loginValues.expectedStatus==="username is required"){

                await expect(await login.getLoginErrorMessage()).toHaveText("Epic sadface: Username is required")
            
            }
            
    
        })

}

})


