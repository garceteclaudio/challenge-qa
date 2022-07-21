const { When, Then, After, Before } = require('@cucumber/cucumber')
const chrome = require('selenium-webdriver/chrome');
const {Builder, Key, By, Capabilities} = require('selenium-webdriver');
const assert = require("chai").should()


let chromeCapabilities;
let driver;

Before( async function() {
  
  chromeCapabilities = Capabilities.chrome();
  chromeCapabilities.set('chromeOptions', {args: ['--headless']});
  driver = new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
  await driver.manage().setTimeouts({implicit: (9000)});
  // await driver.manage().window().maximize();
});

When('I lanch open zapatoca website', {timeout: 4 * 5000},  async function () {
  await driver.get("https://staging-zapatoca.miaguila.com/login");
  Thread.sleep(1000);
});

// def {string}'
Then('I should assert Bienvenido a Zapatoca', {timeout: 4 * 5000},  async function () {
  let xpathTrue = `//*[@id="__layout"]/div/div[2]/div[4]/div/div[1]/h1`;
  let xpath = `//h1[text()=’Bienvenido a Zapatoca’]`;
  
  let element = await driver.findElement(By.xpath(xpathTrue));
  let bienvenidoAZapatocaText = await element.getText();

  assert.equal(bienvenidoAZapatocaText , "Bienvenido a Zapatoca");



});


When('I type my email', {timeout: 4 * 5000},  async function () {
  let element = await driver.findElement(By.xpath("//input[@placeholder='Escribe tu correo electrónico']"));
  await element.sendKeys("test@gmail.com");
});


When('I type my password', {timeout: 4 * 5000},  async function () {
  let element = await driver.findElement(By.xpath("//input[@placeholder='Escribe tu contraseña']"));
  await element.sendKeys("AAA1234aaaa");

});

When('I click Ingresar', {timeout: 4 * 5000},  async function () {
  let element = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div[1]/button`));
  await element.click();  
});


Then('I should assert Hola message', {timeout: 4 * 5000},  async function () {

  let element = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div[2]/div[2]/div[2]/div[2]/div/div/div/div/div/span[1]`));
  let text = await element.getText();
 
  assert.equal(text , "Hola");

  Thread.sleep(2000);

});




When('I add five products', {timeout: 10 * 5000},  async function () {
  //Limpiar carrito
  let element = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div[2]/div[2]/div[2]/div[2]/button/div/span`));
  let text = await element.getText();

  if (Number(text) > 0) {
    let carritoElement = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div[2]/div[2]/div[2]/div[2]/button`));
    await driver.executeScript("arguments[0].click()",carritoElement);

    Thread.sleep(2000);
    let vaciarCarritoElement = await driver.findElement(By.id(`clean-cart`));
    await driver.executeScript("arguments[0].click()",vaciarCarritoElement);
  

    let siEstoySeguroElement = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div[3]/div[2]/div/button[2]`));
    await driver.executeScript("arguments[0].click()",siEstoySeguroElement);


    let closeFrame = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div[2]/header/button`));
    await driver.executeScript("arguments[0].click()",closeFrame);
    
    Thread.sleep(2000);
  }else{
    console.log("No hay productos")
  }

  Thread.sleep(2000);

  let increaseProduct = await driver.findElement(By.xpath(`//*[@id="i60te-2-2"]/section/div[2]/div/div/div[1]/div/div/div/div[1]/div/div/button[2]`));
  await driver.executeScript("arguments[0].click()",increaseProduct);

  
  let element1 = await driver.findElement(By.xpath(`//*[@id="i60te-2-2"]/section/div[2]/div/div/div[1]/div/div/div/div[1]/div/button`));
  await driver.executeScript("arguments[0].click()",element1);
  await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div/div[2]/div[2]/div/div/div[2]/h3`)).click();
  Thread.sleep(2000);
  // await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div[2]/header/button`)).click();
  

  let element2 = await driver.findElement(By.xpath(`//*[@id="i60te-2-2"]/section/div[2]/div/div/div[2]/div/div/div/div[1]/div/button`));
  await driver.executeScript("arguments[0].click()",element2);
  Thread.sleep(2000);
  // await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div[2]/header/button`)).click();

  
  let element3 = await driver.findElement(By.xpath(`//*[@id="i60te-2-2"]/section/div[2]/div/div/div[4]/div/div/div/div[1]/div/button`));
  await driver.executeScript("arguments[0].click()",element3);
  Thread.sleep(2000);
  // await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div[2]/header/button`)).click();
  
  let element4 = await driver.findElement(By.xpath(`//*[@id="i60te-2-3"]/section/div[2]/div/div/div[1]/div/div/div/div[1]/div/button`));
  await driver.executeScript("arguments[0].click()",element4);



});



When('I click finalizar compra', {timeout: 4 * 5000},  async function () {
  

  // let carritoElement = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div[2]/div[2]/div[2]/div[2]/button`));
  // await driver.executeScript("arguments[0].click()",carritoElement);


  Thread.sleep(1000);
  await driver.findElement(By.xpath(`//*[@id="cart-finalize-purchase"]`)).click();

  Thread.sleep(1000);
  try {
    await driver.findElement(By.xpath(`//*[@id="suggested-finalize-purchase"]`)).click();
  } catch (error) {
    console.log(`${error}`);
  }

  

});


Then('I should assert my order summary', {timeout: 4 * 5000},  async function () {
  Thread.sleep(4000);

  let element = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div/section[2]/article/h2`));
  let text = await element.getText();
 
  assert.equal(text , "Resumen del pedido");

  Thread.sleep(2000);

});





After(  async function() {
  await driver.close();
});


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


// npx cucumber-js