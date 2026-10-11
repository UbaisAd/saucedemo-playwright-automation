const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const path = require('node:path');

const test = base.test.extend({

            login:async({page},use)=>{

                const login = new LoginPage(page);


                await use(login);

            },
      
})

module.exports = {
    test,expect:base.expect
}