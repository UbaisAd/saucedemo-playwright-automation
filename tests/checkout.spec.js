const { test, expect } = require('../fixtures/testFixtures');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

const loginData = require('../test-data/loginData');
const checkoutData = require('../test-data/checkoutData');

// TC07 - Complete the checkout workflow
// TC08 - Attempt checkout with missing customer information

test.describe('Checkout tests', () => {

async function navigateToCheckout(page, login) {
         const product = new ProductPage(page);
    const cart = new CartPage(page);

       await page.goto(login.appUrl());
         await login.enterUserName(loginData[0].username);
         await login.enterPassword(loginData[0].password);

        await login.clickLoginButton();

         await product.addProductTocart();
        await cart.navigateToCart();

        await cart.navigateToCheckout();
    }

test('should complete checkout successfully with valid customer information', async ({ page,login }) => {

        const checkout = new CheckoutPage(page);
        await navigateToCheckout(page,login);
         
        const customer = checkoutData.validCustomer;
          await checkout.enterFirstName(customer.firstName);
          await checkout.enterLastName(customer.lastName);
         await checkout.enterPostalCode(customer.postalCode);
           await checkout.clickContinue();
        await expect(checkout.verifyCheckoutOverview()).toHaveText('Checkout: Overview');

            await checkout.clickFinish();
        await expect(checkout.verifyOrderConfirmation()).toHaveText('Thank you for your order!');
    });

test('should display an error when customer information is missing', async ({ page,login }) => { 
    
     const checkout = new CheckoutPage(page);

            await navigateToCheckout(page,login);

        const customer = checkoutData.emptyCustomer;

            await checkout.enterFirstName(customer.firstName);
         await checkout.enterLastName(customer.lastName);

      await checkout.enterPostalCode(customer.postalCode);
        await checkout.clickContinue();

        await expect(await checkout.getCheckoutError()).toContainText('First Name is required');
    });
});
