const { Builder, Capabilities } = require("selenium-webdriver");


var capabilities = Capabilities.firefox();

(async function helloSelenium() {
    let driver = new Builder()
        .usingServer("http://172.17.0.2:4444")   
        .withCapabilities(capabilities)
        .build();
    try {
        await driver.get('http://www.google.com');
    } finally {
        await driver.quit();
    }
})();  