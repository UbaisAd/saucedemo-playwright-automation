class CartPage{

    constructor(page){

            this.page=page;       
    }
async navigateToCart(){

        await  this.page.locator(CartPage.locators.cartButton).click();
    console.log("INFO::Navigated to Cart Page");
}

async getCartItem(){

    
const cartItem = this.page.locator(CartPage.locators.cartItemLabel);
    const ItemVisibleInCart = [];
    for(let i = 0;i<await cartItem.count();i++){

        const itemName = await cartItem.nth(i).innerText();
        ItemVisibleInCart.push(itemName);
    }

    return await ItemVisibleInCart;
}


async removeProduct(productName) {
    const item = this.page.locator(CartPage.locators.cartItem).filter({ hasText: productName });

    await item.getByRole('button', { name: 'Remove' }).click();

    console.log('INFO::Removed product from cart: ' + productName);
}

async navigateToCheckout() {
    await this.page.locator(CartPage.locators.checkoutButton).click();

    console.log("INFO::Navigated to Checkout Page");
}
}

CartPage.locators = {

            cartButton : '.shopping_cart_link',
            cartItem : '.cart_item',
            checkoutButton : '#checkout',
            cartItemLabel : '.inventory_item_name',
        
                 }

module.exports = CartPage;