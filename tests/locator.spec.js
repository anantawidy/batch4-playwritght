// @ts-check
import {test, expect, request} from '@playwright/test';
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

test('Contoh GET API', async ({page}) => {
    const apiContext = await request.newContext();
    const res = await apiContext.get('https://reqres.in/api/users?page=2');
    expect(res.status()).toBe(200);
    const respondJSON = await res.json();
    expect(respondJSON.page).toBe(2);
    expect(respondJSON.total).toBe(12);
});

test('Contoh POST API', async ({page}) => {
    const apiContext = await request.newContext();
    const POSTData = {
        "name":"morpheus",
        "job":"Leader"
    }
    const res = await apiContext.post('https://reqres.in/api/users', {
            data : POSTData
        });
    expect(res.status()).toBe(201);
    const respondJSON = await res.json();
    expect(respondJSON.name).toBe('morpheus');
    expect(respondJSON.job).toBe('Leader');
});

test('Contoh DELETE API', async ({page}) => {
    const apiContext = await request.newContext();
    const DELETEdata = {
        id : 2
    }
    const res = await apiContext.delete('https://reqres.in/api/users/2', {
        data : DELETEdata
    });
    expect(res.status()).toBe(204);
    const responseText = await res.text();
    expect(responseText).toBe('');
});