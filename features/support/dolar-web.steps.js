const { When, Then, Given, After, Before } = require('@cucumber/cucumber')
const {Builder, Key, By, Capabilities, Alert} = require('selenium-webdriver');

let StaticDriver = require("../../pageObjects/staticDriver");

let cotizacionDolarBlueCompra= 0;
let cotizacionDolarBlueVenta= 0;

Given('Estoy en la pagina de dolar hoy', {timeout: 4 * 5000},  async function () {
    await StaticDriver.driver.get("https://dolarhoy.com/");
});


// Xpath absoluto: Utiliza la ruta completa desde el elemento raíz hasta el elemento deseado.
//Un xpath absoluto en HTML DOM comienza con / html e.g. /html/body/div[5]/div[2]

// Xpath relativo: Simplemente puede comenzar haciendo referencia al elemento que desea e ir desde allí.


When('Obtengo la cotizacion', {timeout: 4 * 5000},  async function () {
    cotizacionDolarBlueCompra = await StaticDriver.driver.findElement(By.xpath(`//body/div[@id='sitio']/div[@id='main_body ']/div[@id='top']/div[@id='home_0']/div[2]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]`)).getText();
    // abs xpath no anda
    // rel xpath si anda
    cotizacionDolarBlueVenta = await StaticDriver.driver.findElement(By.xpath(`//body/div[@id='sitio']/div[@id='main_body ']/div[@id='top']/div[@id='home_0']/div[2]/section[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]`)).getText();
});

Then('Guardo el dato en un archivo txt', {timeout: 4 * 5000},  async function () {
    console.log(`\n\n\n\n\nCotizacion compra: ${cotizacionDolarBlueCompra}\n\n\n\n`);

    console.log(`\n\n\n\n\nCotizacion venta: ${cotizacionDolarBlueVenta}\n\n\n\n`);
});