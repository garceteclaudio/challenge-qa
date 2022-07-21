const chrome = require('selenium-webdriver/chrome');
// const { Builder, By, Key, util } = require("selenium-webdriver");

const {Builder, Key, By, Capabilities} = require('selenium-webdriver');



const chromeCapabilities = Capabilities.chrome();
chromeCapabilities.set('chromeOptions', {args: ['--headless']});
let driver = new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();

async function tes2(){


  await driver.manage().setTimeouts({implicit: (9000)});
  
  

  await driver.get("https://staging-zapatoca.miaguila.com/login");
  Thread.sleep(2000);

  let element = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div[1]/div[1]/div[1]/input`));
  await element.sendKeys("Claudio");


  Thread.sleep(4000);
  
  await driver.quit();
}




const Thread = {
  sleep: function (ms) {
    const start = Date.now();

    while (true) {
      const clock = Date.now() - start;
      if (clock >= ms) {
        break;
      }
    }
  },
};


tes2()


