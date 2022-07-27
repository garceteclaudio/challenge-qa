
const {Builder, Key, By, Capabilities, Alert} = require('selenium-webdriver');
const assert = require("chai").should()
const { performance } = require('perf_hooks');

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


async function testing(){
    var startTime = performance.now()

    let driver;
    console.log(`Calling StaticDriver Instance...`);
    let chromeCapabilities = Capabilities.chrome();
    chromeCapabilities.set('chromeOptions', {args: ['--headless']});
    chromeCapabilities.set('unexpectedAlertBehaviour', 'accept');

    driver = new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();  
    let mySession = await driver.getSession();
    let mySessionID =  mySession.getId();
    console.log("Session: "+ mySessionID);

    await driver.get(`https://staging-zapatoca.miaguila.com/login`);
    await driver.manage().setTimeouts({implicit: (9000)});


    let element = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[1]/h1`));
    let bienvenidoAZapatocaText = await element.getText();
    assert.equal(bienvenidoAZapatocaText , "Bienvenido a Zapatoca");
    // Thread.sleep(500);

    let element2 = await driver.findElement(By.xpath("//input[@placeholder='Escribe tu correo electrónico']"));
    await element2.sendKeys("test@gmail.com");

    // Thread.sleep(500);

    await driver.quit();   

    var endTime = performance.now()
    let seconds = endTime - startTime;
    
    console.log(`Took ${seconds/1000} seconds`) 
}






Promise.all([ testing().then(driver => {
    console.log("End testing")
}), testing().then(driver => {

    console.log("End testing 2")

}),  testing().then(driver => {

    console.log("End testing 3")
})]).then((values) => {
//   console.log(values);
});
