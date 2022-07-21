const { When, Then, Given, After, Before } = require('@cucumber/cucumber')
const chrome = require('selenium-webdriver/chrome');
const {Builder, Key, By, Capabilities, Alert} = require('selenium-webdriver');
const assert = require("chai").should()


let chromeCapabilities;
let driver;

Before( async function() {
  
  chromeCapabilities = Capabilities.chrome();
  chromeCapabilities.set('chromeOptions', {args: ['--headless']});
  chromeCapabilities.set('unexpectedAlertBehaviour', 'accept');

  
  driver = new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
  await driver.manage().setTimeouts({implicit: (9000)});
  // await driver.manage().window().maximize();


  // let ciudadAlert = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div/form/div[2]/div[2]/div/div/input`));
  // await driver.executeScript("arguments[0].click()",ciudadAlert);
  // await ciudadAlert.getRect();

});


Given('I open zapatoca registration website', {timeout: 4 * 5000},  async function () {
  await driver.get("https://staging-zapatoca.miaguila.com/registro/?hidecaptcha=true");
  Thread.sleep(2000);
});


function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

When('I complete the form', {timeout: 4 * 5000},  async function () {


  await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/div[1]/div[1]/input`)).sendKeys("Test");

  Thread.sleep(500);
  await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/div[2]/div[1]/input`)).sendKeys("username");

  Thread.sleep(500);
  let dniElement = await driver.findElement(By.xpath("//input[@placeholder='1234567890']"));
  await dniElement.sendKeys("1234567890");

  Thread.sleep(500);
  // await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/div[5]/div/input`)).sendKeys("1234567890");
  let telephoneElement = await driver.findElement(By.xpath("//input[@placeholder='Escribe tu teléfono de contacto']"));
  await telephoneElement.sendKeys(randomNumber(10000000000, 2434123490));
  

  Thread.sleep(500);
  await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/div[6]/div/input`)).sendKeys(makeid(10)+"@gmail.com");

  Thread.sleep(500);
  // await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/div[7]/div/input`)).sendKeys("Fakepassword123");
  let element = await driver.findElement(By.xpath("//input[@placeholder='Escribe tu contraseña']"));
  await element.sendKeys("Fakepassword123");

  
  Thread.sleep(500);
  // await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/div[9]/div/input`)).sendKeys("Fakepassword123");
  let element2 = await driver.findElement(By.xpath("//input[@placeholder='Confirma tu contraseña']"));
  await element2.sendKeys("Fakepassword123");
  

  Thread.sleep(500);
  let aceptoPoliticas = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/label/input`));
  await driver.executeScript("arguments[0].click()",aceptoPoliticas);

  Thread.sleep(500);
  let crearCuenta = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/button`));
  await driver.executeScript("arguments[0].click()",crearCuenta);

  Thread.sleep(2000);

  // let Alert alert = 
  // await driver.switchTo().frame(await driver.findElement(By.xpath('//*[@id="__layout"]/div/div[1]/div/form')));

  await driver.switchTo().alert().then(async function(alert) {

    await alert.accept();
    // await alert.sendKeys("Test");

  }, function(err) {
    if (err.code == webdriver.error.ErrorCode.UNEXPECTED_ALERT_OPEN) {
      fail('Fail this spec');
    }
  });

  Thread.sleep(1000);
  // Alerts
  //Ciudad
  let ciudadAlert = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div/form/div[2]/div[2]/div/div/input`));
  let rect = await ciudadAlert.getRect();
  await ciudadAlert.sendKeys("Bogotá");
  Thread.sleep(500);
  await ciudadAlert.sendKeys(Key.RETURN);
  Thread.sleep(500);
  let ciudadMosqueraAlert = await driver.findElement(By.xpath(`//*[@id="autocomplete-item-0"]`));
  await driver.executeScript("arguments[0].click()",ciudadMosqueraAlert);

  Thread.sleep(500);
  let firstField = await driver.findElement(By.xpath("//input[@placeholder='23A Sur']"));
  await firstField.sendKeys("104");
  Thread.sleep(500);
  let secondField = await driver.findElement(By.xpath("//input[@placeholder='# 00']"));
  await secondField.sendKeys("152a");
  Thread.sleep(500);
  let thirdField = await driver.findElement(By.xpath("//input[@placeholder='-00']"));
  await thirdField.sendKeys("-55");

  await driver.findElement(By.xpath('//*[@id="__layout"]/div/div[1]/div/form/div[2]/div[3]/div[1]/div/div/select')).sendKeys('Carrera');

  let buscarButton = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div/form/div[2]/button`));
  await driver.executeScript("arguments[0].click()",buscarButton);


  Thread.sleep(2000);

  let guardarButton = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div/div[2]/button[3]`));
  await driver.executeScript("arguments[0].click()",guardarButton);



  Thread.sleep(500);
  let crearCuenta2 = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/button`));
  await driver.executeScript("arguments[0].click()",crearCuenta2);


});




When('I open zapatoca website', {timeout: 4 * 5000},  async function () {
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

  Thread.sleep(2000);
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