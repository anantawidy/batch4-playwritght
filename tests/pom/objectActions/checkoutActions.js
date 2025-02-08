import CheckoutPage from "../locator/checkoutPage";
import { expect } from "@playwright/test";

export default class CheckoutActions {
    /**
     * 
     * @param {import {'@playwright/test'}.page} page 
     */
    constructor(page) {
        this.page = page;
        this.checkoutPage = new CheckoutPage(page);
        this.inputUsername = page.locator(this.checkoutPage.inputUsername);
        this.inputPassword = page.locator(this.checkoutPage.inputPassword);
        this.buttonLogin = page.locator(this.checkoutPage.buttonLogin);
        this.addToCartProduct1 = page.locator(this.checkoutPage.addToCartProduct1);
        this.addToCartProduct2 = page.locator(this.checkoutPage.addToCartProduct2);
        this.cartButton = page.locator(this.checkoutPage.cartButton);
        this.checkoutButton = page.locator(this.checkoutPage.checkoutButton);
        this.inputFirstName = page.locator(this.checkoutPage.inputFirstName);
        this.inputLastName = page.locator(this.checkoutPage.inputLastName);
        this.inputPostalCode = page.locator(this.checkoutPage.inputPostalCode);
        this.continueButton = page.locator(this.checkoutPage.continueButton);
        this.checkoutStepTwo = page.locator(this.checkoutPage.checkoutStepTwo);
        this.confirmationMessage = page.locator(this.checkoutPage.confirmationMessage);
    }

    async goto () {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async zoomOut(page) {
        await this.page.evaluate(() => {
            document.body.style.zoom = '75%';
        });
    }

    async checkout(){
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.buttonLogin.click();
        await expect(this.page.url()).toContain('https://www.saucedemo.com/inventory.html');
        await this.addToCartProduct1.click();
        await this.addToCartProduct2.click();
        await this.cartButton.click();
        await this.checkoutButton.click();
        await this.inputFirstName.fill('Ananta')
        await expect(this.inputFirstName).toHaveValue('Ananta');
        await this.inputLastName.fill('Widyaswara');
        await expect(this.inputLastName).toHaveValue('Widyaswara');
        await this.inputPostalCode.fill('123456');
        await expect(this.inputPostalCode).toHaveValue('123456');
        await this.continueButton.click();
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
        await this.checkoutStepTwo.click();
        await expect(this.confirmationMessage).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
}
