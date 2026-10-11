const { test, expect } = require('../fixtures/testFixtures');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

const loginData = require('../test-data/loginData');
const checkoutData = require('../test-data/checkoutData');


//TC05, TC06 Covered in this script

test('should remove a product from the shopping cart', async ({ page, login }) => {
     

    const product = new ProductPage(page);
    const cart = new CartPage(page);

    await page.goto(login.appUrl());
    await login.enterUserName(loginData[0].username);
    await login.enterPassword(loginData[0].password);
     await login.clickLoginButton();

    const addedProduct = await product.addProductTocart();

    await cart.navigateToCart();    

   await cart.removeProduct(addedProduct.name);
   
        const cartItems = await cart.getCartItem();
expect(cartItems).not.toContain(addedProduct.name);


})

test('should add a product to the shopping cart', async ({ page,login }) => {
    const product = new ProductPage(page);
const cart = new CartPage(page);

     await page.goto(login.appUrl());

    await login.enterUserName(loginData[0].username)
    await login.enterPassword(loginData[0].password)
    await login.clickLoginButton(); 
        
        await expect(product.verifyProductsPage()).toBeVisible();
        await expect(product.verifyProductsPage()).toHaveText('Products');

        const addedProduct = await product.addProductTocart();

        await cart.navigateToCart();

        const cartItems = await cart.getCartItem();
          expect(cartItems).toContain(addedProduct.name);
          console.log("INFO::Product added to cart is visible in cart page");
                    
})


