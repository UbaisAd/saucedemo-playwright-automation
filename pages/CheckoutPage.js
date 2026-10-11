class CheckoutPage {
    
constructor(page) {
    this.page = page;
}
    async enterFirstName(firstName) {
        await this.page.locator(CheckoutPage.locators.firstName).fill(firstName);
    }   
      async enterLastName(lastName) {
        await this.page.locator(CheckoutPage.locators.lastName).fill(lastName);
     }
    async enterPostalCode(postalCode) {
    await this.page.locator(CheckoutPage.locators.postalCode).fill(postalCode);
        }
     async clickContinue() {
          await this.page.locator(CheckoutPage.locators.continueButton).click();
    } 
            async getCheckoutError() {
               return this.page.locator(CheckoutPage.locators.errorMessage);
            }
async clickFinish() {
        await this.page.locator(CheckoutPage.locators.finishButton).click();
    }
    verifyCheckoutOverview() {
        return this.page.locator(CheckoutPage.locators.overviewHeading);
    }
   verifyOrderConfirmation() {
        return this.page.locator(CheckoutPage.locators.confirmationMessage);
    }
}

CheckoutPage.locators = {
    firstName: '#first-name',

     lastName: '#last-name',
     postalCode: '#postal-code',
    continueButton: '#continue',
     errorMessage: '[data-test="error"]',
    overviewHeading: '.title',
    finishButton: '#finish',
    confirmationMessage: '.complete-header'
};

module.exports = CheckoutPage;
