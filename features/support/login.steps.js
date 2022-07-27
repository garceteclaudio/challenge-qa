const { When, Then, Given, After, Before } = require('@cucumber/cucumber')

let StaticDriver = require("../../pageObjects/staticDriver");
let Login = require("../../pageObjects/login.page");

let LoginPage = new Login();

  When('I open zapatoca website', {timeout: 4 * 5000},  async function () {
    await StaticDriver.driver.get("https://staging-zapatoca.miaguila.com/login");
  });
  
  // def {string}'
  Then('I should assert Bienvenido a Zapatoca', {timeout: 4 * 5000},  async function () {

    await LoginPage.assertBienvenidoAZapatoca();

  });

  When('I type my email {string}', {timeout: 4 * 5000},  async function (email) {
    await LoginPage.typeEmail(email);
  });
  
  
  When('I type my password {string}', {timeout: 4 * 5000},  async function (password) {

    await LoginPage.typePassword(password);
  });
  
  When('I click Ingresar', {timeout: 4 * 5000},  async function () {
    await LoginPage.clickIngresarButton();
  });
  
  Then('I should assert Hola message', {timeout: 4 * 5000},  async function () {

    await LoginPage.assertHolaMessage();
  });


  Then('I assert error message', {timeout: 4 * 5000},  async function () {

    await LoginPage.asserErrorMessage();
  });
  