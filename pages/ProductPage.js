class ProductPage{

    constructor(page){

            this.page=page;       
    }

    verifyProductsPage(){

        return this.page.locator(ProductPage.locators.productsHeading);
    }

    async addProductTocart() {
        const allProducts = await this.getProductName();
        
        const randomIndex = Math.floor(Math.random() * allProducts.length);
        const randomProduct = allProducts[randomIndex];

        const item = this.page.locator(ProductPage.locators.items).filter({ hasText: randomProduct.name });
        const addButton = item.getByRole('button', { name: 'Add to cart', exact: true });

        await addButton.click();
        await item.getByRole('button', { name: 'Remove', exact: true }).waitFor({ state: 'visible' });

        console.log("Selected Product: " + randomProduct.name);
        console.log("Price: " + randomProduct.price);

        return randomProduct;
    }

    async getProductName() {
        const items = this.page.locator(ProductPage.locators.items);
        await items.first().waitFor({ state: 'visible' });

        const count = await items.count();
        const productDetails = [];

        for (let i = 0; i < count; i++) {
            const item = items.nth(i);
            const name = await item.locator(ProductPage.locators.productName).innerText();
            const price = await item.locator(ProductPage.locators.productPrice).innerText();
            productDetails.push({
                item: i + 1,
                name,
                price
            });
        }

        return productDetails;
    }
}




ProductPage.locators = {

        productsHeading: '.title',
        items: '.inventory_item',
        productName: '.inventory_item_name',
        productPrice: '.inventory_item_price',
        addToCardButton : 'button:has-text("Add to cart")',

}




module.exports = ProductPage;