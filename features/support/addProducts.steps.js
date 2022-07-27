const { When, Then, Given, After, Before } = require('@cucumber/cucumber')
const {Builder, Key, By, Capabilities, Alert} = require('selenium-webdriver');
const assert = require("chai").should()


let StaticDriver = require("../../pageObjects/staticDriver");




When('I add five products', {timeout: 10 * 5000},  async function () {
    Thread.sleep(2000);

    //Limpiar carrito
    let element = await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div[2]/div[2]/div[2]/div[2]/button/div/span`));             
    let text = await element.getText();

    console.log(`Cantidad productos: ${text}`);
  
    if (Number(text) > 0) {
      let carritoElement = await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div[2]/div[2]/div[2]/div[2]/button`));
      await StaticDriver.driver.executeScript("arguments[0].click()",carritoElement);
  
      Thread.sleep(2000);
      let vaciarCarritoElement = await StaticDriver.driver.findElement(By.id(`clean-cart`));
      await StaticDriver.driver.executeScript("arguments[0].click()",vaciarCarritoElement);
    
  
      let siEstoySeguroElement = await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div[3]/div[2]/div/button[2]`));
      await StaticDriver.driver.executeScript("arguments[0].click()",siEstoySeguroElement);
  
  
      let closeFrame = await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div[2]/header/button`));
      await StaticDriver.driver.executeScript("arguments[0].click()",closeFrame);
      
      Thread.sleep(2000);
    }else{
      console.log("No hay productos")
    }
  
    Thread.sleep(2000);
  
    let increaseProduct = await StaticDriver.driver.findElement(By.xpath(`//*[@id="i60te-2-2"]/section/div[2]/div/div/div[1]/div/div/div/div[1]/div/div/button[2]`));
    await StaticDriver.driver.executeScript("arguments[0].click()",increaseProduct);
  
    
    let element1 = await StaticDriver.driver.findElement(By.xpath(`//*[@id="i60te-2-2"]/section/div[2]/div/div/div[1]/div/div/div/div[1]/div/button`));
    await StaticDriver.driver.executeScript("arguments[0].click()",element1);
    await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div/div[2]/div[2]/div/div/div[2]/h3`)).click();
    Thread.sleep(2000);
    // await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div[2]/header/button`)).click();
    
  
    let element2 = await StaticDriver.driver.findElement(By.xpath(`//*[@id="i60te-2-2"]/section/div[2]/div/div/div[2]/div/div/div/div[1]/div/button`));
    await StaticDriver.driver.executeScript("arguments[0].click()",element2);
    Thread.sleep(2000);
    // await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div[2]/header/button`)).click();
  
    
    let element3 = await StaticDriver.driver.findElement(By.xpath(`//*[@id="i60te-2-2"]/section/div[2]/div/div/div[4]/div/div/div/div[1]/div/button`));
    await StaticDriver.driver.executeScript("arguments[0].click()",element3);
    Thread.sleep(2000);
    // await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div[2]/header/button`)).click();
    
    let element4 = await StaticDriver.driver.findElement(By.xpath(`//*[@id="i60te-2-3"]/section/div[2]/div/div/div[1]/div/div/div/div[1]/div/button`));
    await StaticDriver.driver.executeScript("arguments[0].click()",element4);
  
  
  
  });
  
  
  
  When('I click finalizar compra', {timeout: 4 * 5000},  async function () {
    
  
    // let carritoElement = await driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[1]/div[2]/div[2]/div[2]/div[2]/button`));
    // await driver.executeScript("arguments[0].click()",carritoElement);
  
  
    Thread.sleep(3000);
    await StaticDriver.driver.findElement(By.xpath(`//*[@id="cart-finalize-purchase"]`)).click();
  
    Thread.sleep(1000);
    try {
        await StaticDriver.driver.findElement(By.xpath(`//*[@id="suggested-finalize-purchase"]`)).click();
    } catch (error) {
      console.log(`${error}`);
    }
  
    
  
  });
  
  
  Then('I should assert my order summary', {timeout: 4 * 5000},  async function () {
    Thread.sleep(4000);
  
    let element = await StaticDriver.driver.findElement(By.xpath(`//*[@id="__layout"]/div/div[3]/div/section[2]/article/h2`));
    let text = await element.getText();
   
    assert.equal(text , "Resumen del pedido");
  
    Thread.sleep(2000);
  
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