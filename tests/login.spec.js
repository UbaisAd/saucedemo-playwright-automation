const { test, expect } = require('../fixtures/testFixtures');
const loginData = require('../test-data/loginData')

// TC01 - Login with valid credentials
// TC02 - Login with invalid credentials
// TC03 - Login with empty credentials

test.describe('login with data driven',()=>{

    
    for(const loginValues of loginData){
        
test(loginValues.scenario, async ({ page, login }) => {      


                await page.goto(login.appUrl());
                await login.enterUserName(loginValues.username)
                await login.enterPassword(loginValues.password)
                await login.clickLoginButton();
               

            if(loginValues.expectedStatus==="Success"){

                await expect(await login.verifyLogin()).toBeVisible();
                
            }
           else if(loginValues.expectedStatus==="invalid username or password"){

                await expect(await login.getLoginErrorMessage()).toHaveText("Epic sadface: Username and password do not match any user in this service")
            
            }        else if(loginValues.expectedStatus==="password is required"){

                await expect(await login.getLoginErrorMessage()).toHaveText("Epic sadface: Password is required")
            
            }
              else if(loginValues.expectedStatus==="username is required"){

                await expect(await login.getLoginErrorMessage()).toHaveText("Epic sadface: Username is required")
            
            }
            
    
        })

}

})


