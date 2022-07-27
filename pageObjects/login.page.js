const {Builder, Key, By, Capabilities, Alert} = require('selenium-webdriver');
const assert = require("chai").should()

let StaticDriver = require("./staticDriver");

class Login {

    constructor(name) {
        this.name = name;
        console.log(`----------------------------------------------------------------------------------------------------------------
  
                                                                        Login constructor

----------------------------------------------------------------------------------------------------------------`);
    }

    welcomeToZpatoca = `//*[@id="__layout"]/div/div[2]/div[4]/div/div[1]/h1`;
    emailInput = "//input[@placeholder='Escribe tu correo electrónico']";
    passwordInput = "//input[@placeholder='Escribe tu contraseña']";
    ingresarButton = `//*[@id="__layout"]/div/div[2]/div[4]/div/div[3]/div[2]/div[1]/button`;
    holaLabel = `//*[@id="__layout"]/div/div[1]/div[2]/div[2]/div[2]/div[2]/div/div/div/div/div/span[1]`;


    async assertBienvenidoAZapatoca(){        
    let element = await StaticDriver.driver.findElement(By.xpath(this.welcomeToZpatoca));
    let bienvenidoAZapatocaText = await element.getText();
  
    assert.equal(bienvenidoAZapatocaText , "Bienvenido a Zapatoca");
    Thread.sleep(500);
    }

    async typeEmail(mail){ 
        let element = await StaticDriver.driver.findElement(By.xpath(this.emailInput));
        await element.sendKeys(mail);
    
        Thread.sleep(500);
    }

    async typePassword(password){ 
        let element = await StaticDriver.driver.findElement(By.xpath(this.passwordInput));
        await element.sendKeys(password);
    
        Thread.sleep(500);
    }

    async clickIngresarButton(){ 
        let element = await StaticDriver.driver.findElement(By.xpath(this.ingresarButton));
        await element.click();  
    
        Thread.sleep(500);
    }

    async assertHolaMessage(){        
        

        let element = await StaticDriver.driver.findElement(By.xpath(this.holaLabel));
        let text = await element.getText();
       
        assert.equal(text , "Hola");

        Thread.sleep(1000);
    }


    async asserErrorMessage(){        
        

      let element = await StaticDriver.driver.findElement(By.xpath(`(//div[@class='alert__text'][contains(text(),'Contraseña inválida. Si no recuerdas la contraseña')])[2]`));
      let text = await element.getText();
     
      console.log(`text to assert : ${text}`);

      assert.equal(text , " Contraseña inválida. Si no recuerdas la contraseña podemos generarte una nueva. ");

      Thread.sleep(1000);
  }    


    

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

module.exports = Login