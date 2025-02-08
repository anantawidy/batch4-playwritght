// @ts-check
import {test, expect} from '@playwright/test';
const {default: LoginActions} = require('../tests/pom/objectActions/loginActions');
const {default: CheckoutActions} = require('../tests/pom/objectActions/checkoutActions');

test('Testcase Login using POM', async ({page}) => {
    const objLogin = new LoginActions(page);
    await objLogin.goto();
    await objLogin.login();
});

test('Testcase Checkout using POM', async ({page}) => {
    const objCheckout = new CheckoutActions(page);
    await objCheckout.goto();
    await objCheckout.zoomOut();
    await objCheckout.checkout();
});
