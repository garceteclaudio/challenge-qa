const { When, Then, Given, After, Before } = require('@cucumber/cucumber')
const {Builder, Key, By, Capabilities, Alert} = require('selenium-webdriver');
const assert = require("chai").should()
let StaticDriver = require("../../pageObjects/staticDriver");


Given('I open zapatoca registration website', {timeout: 4 * 5000},  async function () {
    await StaticDriver.driver.get("https://staging-zapatoca.miaguila.com/registro/?hidecaptcha=true");
    Thread.sleep(1000);
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
  
  
    await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/div[1]/div[1]/input`)).sendKeys("Test");
  
    Thread.sleep(500);
    await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/div[2]/div[1]/input`)).sendKeys("username");
  
    Thread.sleep(500);
    let dniElement = await StaticDriver.driver.findElement(By.xpath("//input[@placeholder='1234567890']"));
    await dniElement.sendKeys("1234567890");
  
    Thread.sleep(500);
    let telephoneElement = await StaticDriver.driver.findElement(By.xpath("//input[@placeholder='Escribe tu teléfono de contacto']"));
    await telephoneElement.sendKeys(randomNumber(10000000000, 2434123490));
    
  
    Thread.sleep(500);
    await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/div[6]/div/input`)).sendKeys(makeid(10)+"@gmail.com");
  
    Thread.sleep(500);
    let element = await StaticDriver.driver.findElement(By.xpath("//input[@placeholder='Escribe tu contraseña']"));
    await element.sendKeys("Fakepassword123");
  
    
    Thread.sleep(500);
    let element2 = await StaticDriver.driver.findElement(By.xpath("//input[@placeholder='Confirma tu contraseña']"));
    await element2.sendKeys("Fakepassword123");
    
  
    Thread.sleep(500);
    let aceptoPoliticas = await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/label/input`));
    await StaticDriver.driver.executeScript("arguments[0].click()",aceptoPoliticas);
  
    Thread.sleep(500);
    let crearCuenta = await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/button`));
    await StaticDriver.driver.executeScript("arguments[0].click()",crearCuenta);
  
    Thread.sleep(2000);
    
    await StaticDriver.driver.switchTo().alert().then(async function(alert) {
  
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
    let ciudadAlert = await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div/form/div[2]/div[2]/div/div/input`));
    let rect = await ciudadAlert.getRect();
    await ciudadAlert.sendKeys("Bogotá");
    Thread.sleep(500);
    await ciudadAlert.sendKeys(Key.RETURN);
    Thread.sleep(500);
    let ciudadMosqueraAlert = await StaticDriver.driver.findElement(By.xpath(`//*[@id="autocomplete-item-0"]`));
    await StaticDriver.driver.executeScript("arguments[0].click()",ciudadMosqueraAlert);
  
    Thread.sleep(500);
    let firstField = await StaticDriver.driver.findElement(By.xpath("//input[@placeholder='23A Sur']"));
    await firstField.sendKeys("104");
    Thread.sleep(500);
    let secondField = await StaticDriver.driver.findElement(By.xpath("//input[@placeholder='# 00']"));
    await secondField.sendKeys("152a");
    Thread.sleep(500);
    let thirdField = await StaticDriver.driver.findElement(By.xpath("//input[@placeholder='-00']"));
    await thirdField.sendKeys("-55");
  
    await StaticDriver.driver.findElement(By.xpath('//*[@id="__layout"]/div/div[1]/div/form/div[2]/div[3]/div[1]/div/div/select')).sendKeys('Carrera');
  
    let buscarButton = await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div/form/div[2]/button`));
    await StaticDriver.driver.executeScript("arguments[0].click()",buscarButton);
  
  
    Thread.sleep(2000);
  
    let guardarButton = await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div/div[2]/button[3]`));
    await StaticDriver.driver.executeScript("arguments[0].click()",guardarButton);
  
  
  
    Thread.sleep(500);
    let crearCuenta2 = await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div/button`));
    await StaticDriver.driver.executeScript("arguments[0].click()",crearCuenta2);
  
  
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