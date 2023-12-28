import {loginPage} from '../pageObjects/LoginPage';

class LoginPageService {
    openLoginPage() {
        loginPage.openWebsite();
        loginPage.waitForLoginFormVisible();
        loginPage.waitForUsernameInputVisible();
        loginPage.waitForPasswordInputVisible();
    }

    fillLoginPageForm(userName: string, password: string) {
        loginPage.fillUsernameInput(userName);
        loginPage.fillPasswordInput(password);
        loginPage.clickLoginBtn();
    };
}

export const loginPageService = new LoginPageService();
