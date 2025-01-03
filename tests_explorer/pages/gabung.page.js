const basePage = require(process.cwd() + '/tests_explorer/pages/basePage')
const {webdriver, builder, By, Key, until} = require('selenium-webdriver')

const mainPage = By.xpath('//div[@id="__next"]/main/div/div[2]/div');
const mobilePhone = By.xpath('//input[@id="mobilePhone"]');
const email = By.xpath('//input[@id="email"]');
const firstName = By.xpath('//input[@id="firstName"]');
const lastName = By.xpath('//input[@id="lastName"]');
const buttonDaftar = By.xpath('//div[@id="__next"]/main/div/div[2]/div/button');

class gabung extends basePage {
    async daftar(paramMobilePhone, 
                 paramEmail, 
                 paramFirstName, 
                 paramLastName) {
        await this.waitForDisplayed(mainPage);
        await this.click(mobilePhone);
        await this.sendKeys(mobilePhone, paramMobilePhone);
        await this.click(email);
        await this.sendKeys(email, paramEmail);
        await this.click(firstName);
        await this.sendKeys(firstName, paramFirstName);
        await this.click(lastName);
        await this.sendKeys(lastName, paramLastName);
        await this.click(buttonDaftar);
    }
}
module.exports = gabung