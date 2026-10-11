const { test, expect } = require('../fixtures/testFixtures');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

const loginData = require('../test-data/loginData');
const checkoutData = require('../test-data/checkoutData');

//TC04 Covered in this script


test('should display product names and prices on the products page', async ({ page,login }) => {
    

    const product = new ProductPage(page);
    const cart = new CartPage(page);

    await page.goto(login.appUrl());
    await login.enterUserName(loginData[0].username);
    await login.enterPassword(loginData[0].password);
     await login.clickLoginButton();

        await expect(product.verifyProductsPage()).toBeVisible();
        await expect(product.verifyProductsPage()).toHaveText('Products');
    

    
        const productDetails = await product.getProductName();

        expect(productDetails.length).toBeGreaterThan(0);   

            for(const product of productDetails){

                    expect(product.name.trim()).not.toBe('');
                expect(product.price.trim()).not.toBe('');


                

            }

    
    
    
    })


    


