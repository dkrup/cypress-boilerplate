import {loginPageTestData} from './testData/LoginPageTestData';
import {loginPageService} from '../services/LoginPageService';
import {loginPage} from '../pageObjects/LoginPage';

const invalidUser = loginPageTestData.invalidUsername;
const invalidPass = loginPageTestData.invalidPassword;
const validUser = loginPageTestData.validUsername;
const validPass = loginPageTestData.validPassword;

describe('Try to log in with invalid and valid credentials', () => {
    it('Should not login with invalid credentials', () => {
        loginPageService.openLoginPage();
        loginPageService.fillLoginPageForm(invalidUser, invalidPass);

        loginPage.isErrorMessageShown().then((el) => {
            Cypress.dom.isVisible(el);
        });

        loginPage.isErrorMessageShown().then((el) => {
            expect(el.text()).equal(loginPageTestData.errorMessageText);
        });
    });

    it('Should login with valid credentials', () => {
        loginPageService.openLoginPage();
        loginPageService.fillLoginPageForm(validUser, validPass);

        loginPage.getInventoryPageElement().then((el) => {
            Cypress.dom.isVisible(el);
        });
    });
});


