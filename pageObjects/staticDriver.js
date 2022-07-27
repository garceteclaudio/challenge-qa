const {Builder, Key, By, Capabilities, Alert} = require('selenium-webdriver');




class StaticDriver {

    static async driverConfig(){
        console.log(`Calling StaticDriver Instance...`);
        let chromeCapabilities = Capabilities.chrome();
        chromeCapabilities.set('chromeOptions', {args: ['--headless']});
        chromeCapabilities.set('unexpectedAlertBehaviour', 'accept');

        this.driver = new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();  
        let session = await this.driver.getSession();    

        console.log(`Session ID: ${session.getId()}`);

    }

}

module.exports = StaticDriver