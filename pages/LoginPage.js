class LoginPage{

    constructor(page){

            this.page=page;       
    }

     appUrl(){

        

        return '/';

    }

    async enterUserName(username){

                await this.page.locator(LoginPage.locators.userNameField).fill(username);
                console.log('INFO :: Entered Username')
    }

    async enterPassword(password){

                await this.page.locator(LoginPage.locators.passwordField).fill(password);
                    console.log('INFO :: Entered Password')
    }
    
    async clickLoginButton(){
                await this.page.locator(LoginPage.locators.loginButton).click()
    console.log('INFO :: Clicked Login Button')

    }

   async getLoginErrorMessage() {

    return await this.page.locator(LoginPage.locators.loginError);
}
    async verifyLogin(){
        
        return await this.page.locator(LoginPage.locators.productsHeading);
    }



}


LoginPage.locators = {

        userNameField : '//input[@placeholder="Username"]',
        passwordField : '//input[@placeholder="Password"]',

        loginButton  : '//input[@id="login-button"]',
        loginError :'//h3[@data-test="error"]',

        productsHeading: '//span[@class="title" and text()="Products"]',


}

module.exports = LoginPage;