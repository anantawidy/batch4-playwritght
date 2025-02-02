// @ts-check
import {test, expect} from '@playwright/test';

test('Testcase Login', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect(inputUsername).toHaveValue('standard_user');

    const inputPassword = page.locator('#password');
    await inputPassword.fill('secret_sauce');
    await expect(inputPassword).toHaveValue('secret_sauce');

    const loginButton = page.locator('#login-button');
    await loginButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Testcase Checkout 2 Items', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    const inputUsername = page.locator('#user-name');
    await inputUsername.fill('standard_user');
    await expect(inputUsername).toHaveValue('standard_user');

    const inputPassword = page.locator('#password');
    await inputPassword.fill('secret_sauce');
    await expect(inputPassword).toHaveValue('secret_sauce');

    const loginButton = page.locator('#login-button');
    await loginButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    const addToChartProduct1 = page.locator('#add-to-cart-sauce-labs-backpack');
    await addToChartProduct1.click();
    
    const addToChartProduct2 = page.locator('#add-to-cart-sauce-labs-bike-light');
    await addToChartProduct2.click();

    const cartButton = page.locator('#shopping_cart_container > a');
    await cartButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    const checkoutButton = page.locator('#checkout');
    await checkoutButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    const firstName = page.locator('#first-name');
    await firstName.fill('Ananta');
    await expect(firstName).toHaveValue('Ananta');

    const lastName = page.locator('#last-name');
    await lastName.fill('Widyaswara');
    await expect(lastName).toHaveValue('Widyaswara');

    const postalCode = page.locator('#postal-code');
    await postalCode.fill('12345');
    await expect(postalCode).toHaveValue('12345');

    const continueButton = page.locator('#continue');
    await continueButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    const checkoutStepTwo = page.locator('//*[@id="finish"]');
    await page.locator('//*[@id="finish"]').scrollIntoViewIfNeeded();
    await checkoutStepTwo.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

    const confirmationMessage = page.locator('#checkout_complete_container > div');
    await expect(confirmationMessage).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
});