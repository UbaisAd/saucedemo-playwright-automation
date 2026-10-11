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

    const item = await this.page.locator(ProductPage.locators.items).filter({ hasText: randomProduct.name });

    const addButton = item.getByRole('button', {name: 'Add to cart',exact: true });

          await addButton.click();
    
    
    console.log("Selected Product: " + randomProduct.name);
    console.log("Price: " + randomProduct.price);
   
    return randomProduct
}

    async getProductName(){
            const items = this.page.locator(ProductPage.locators.items);
            const productNames = items.locator(ProductPage.locators.productName);
            const productPrices = items.locator(ProductPage.locators.productPrice);

            await items.first().waitFor({ state: 'visible' });

            const productDetails = [];

            for(let i = 0;i<await items.count();i++){

                productDetails.push({
                     item: i+1,
                    name: await productNames.nth(i).innerText(),
                        price: await productPrices.nth(i).innerText()
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