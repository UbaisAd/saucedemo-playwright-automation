class CartPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToCart() {
        await this.page.locator(CartPage.locators.cartButton).click();
        await this.page.waitForURL('**/cart.html');
        await this.page.locator(CartPage.locators.pageTitle).waitFor({ state: 'visible' });
        console.log("INFO::Navigated to Cart Page");
    }

    async getCartItem() {
        const cartItem = this.page.locator(CartPage.locators.cartItemLabel);
        return await cartItem.allInnerTexts();
    }

    async removeProduct(productName) {
        const item = this.page.locator(CartPage.locators.cartItem).filter({ hasText: productName });

        await item.getByRole('button', { name: 'Remove' }).click();
        await item.waitFor({ state: 'detached' });

        console.log('INFO::Removed product from cart: ' + productName);
    }

    async navigateToCheckout() {
        await this.page.locator(CartPage.locators.checkoutButton).click();
        await this.page.waitForURL('**/checkout-step-one.html');

        console.log("INFO::Navigated to Checkout Page");
    }
}

CartPage.locators = {
    cartButton: '.shopping_cart_link',
    cartItem: '.cart_item',
    checkoutButton: '#checkout',
    cartItemLabel: '.cart_item .inventory_item_name',
    pageTitle: '.title',
};

module.exports = CartPage;