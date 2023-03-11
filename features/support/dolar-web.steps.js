const { When, Then, Given, After, Before } = require('@cucumber/cucumber')
const {Builder, Key, By, Capabilities, Alert} = require('selenium-webdriver');

let StaticDriver = require("../../pageObjects/staticDriver");

var fs = require('fs');

let cotizacionDolarBlueCompra= 0;
let cotizacionDolarBlueVenta= 0;
let myFile="./generated/cotizacion-dolar.txt"

Given('Test {string} and {string}', {timeout: 4 * 30000},  async function (user, password) {
  
    console.log(`User: ${user}\npasswrd ${password}`);
  });

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
    let date_time = new Date();
    // get current date
    // adjust 0 before single digit date
    let date = ("0" + date_time.getDate()).slice(-2);

    // get current month
    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

    // get current year
    let year = date_time.getFullYear();

    // get current hours
    let hours = date_time.getHours();

    // get current minutes
    let minutes = date_time.getMinutes();

    // get current seconds
    let seconds = date_time.getSeconds();

    // prints date in YYYY-MM-DD format
    let yearMonthDate = year + "-" + month + "-" + date;
    // prints date & time in YYYY-MM-DD HH:MM:SS format
    let yearMonthDateHoursMinutesSeconds = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

    console.log(yearMonthDate);
    console.log(yearMonthDateHoursMinutesSeconds);


    console.log(`\n\n\n\n\nCotizacion compra: ${cotizacionDolarBlueCompra}\n\n\n\n`);

    console.log(`\n\n\n\n\nCotizacion venta: ${cotizacionDolarBlueVenta}\n\n\n\n`);

        // Append data to file
    fs.appendFileSync(myFile, `\nFecha: ${yearMonthDateHoursMinutesSeconds}\nDolar blue compra: ${cotizacionDolarBlueCompra}\nDolar blue venta: ${cotizacionDolarBlueVenta}`, 'utf8');
});