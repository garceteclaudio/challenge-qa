const {Builder, Key, By, Capabilities, Alert} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
require('chromedriver');


class StaticDriver {

    //Need chrome driver in the path
    static async chromeDriverConfig(){
        console.log(`Calling StaticDriver Instance...`);
        let chromeCapabilities = Capabilities.chrome();
        chromeCapabilities.set('chromeOptions', {args: ['--headless']});
        chromeCapabilities.set('unexpectedAlertBehaviour', 'accept');
        this.driver = new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();  

        let session = await this.driver.getSession();    

        console.log(`Session ID: ${session.getId()}`);
    }

    static async driverConfig(){
        console.log(`Calling StaticDriver Instance...`);

        this.driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

        let session = await this.driver.getSession();    

        console.log(`Session ID: ${session.getId()}`);
    }

}

module.exports = StaticDriver