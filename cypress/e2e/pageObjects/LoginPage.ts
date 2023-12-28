import {PageBaseClass} from './PageBaseClass';

class LoginPage extends PageBaseClass {
    // Login Page Selectors
    private WEBSITE_LINK = 'https://www.saucedemo.com/';
    private waitTime = 500;
    private loginFormSelector = '.form_group';
    private usernameInputSelector = '#user-name';
    private passwordInputSelector = '#password';
    private loginButtonSelector = '[data-test="login-button"]';
    private errorMessageSelector = '[data-test="error"]';
    private inventoryPageSelector = '#inventory_container';

    // Login Page Methods
    openWebsite() {
        this.openUrl(this.WEBSITE_LINK);
    }

    waitForLoginFormVisible() {
        cy.get(this.loginFormSelector).wait(this.waitTime);
    }

    waitForUsernameInputVisible() {
        cy.get(this.usernameInputSelector).wait(this.waitTime);
    }

    waitForPasswordInputVisible() {
        cy.get(this.passwordInputSelector).wait(this.waitTime);
    }

    fillUsernameInput(userName: string) {
        cy.get(this.usernameInputSelector).type(userName);
    }

    fillPasswordInput(password: string) {
        cy.get(this.passwordInputSelector).type(password);
    }

    clickLoginBtn() {
        cy.get(this.loginButtonSelector).click().wait(this.waitTime);
    }

    isErrorMessageShown() {
        return cy.get(this.errorMessageSelector);
    }

    getErrorMessageText = () => cy.get(this.errorMessageSelector)
        .then((el) => {
            el.text();
        });

    getInventoryPageElement() {
        return cy.get(this.inventoryPageSelector);
    }
}

export const loginPage = new LoginPage();
