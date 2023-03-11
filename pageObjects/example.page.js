const {Builder, Key, By, Capabilities, Alert} = require('selenium-webdriver');
const assert = require("chai").should()

let StaticDriver = require("./staticDriver");

class ExamplePage {
    constructor(name) {
        this.name = name;
        console.log(`----------------------------------------------------------------------------------------------------------------
  
                                                                        Example Page constructor

----------------------------------------------------------------------------------------------------------------`);
    }

}

module.exports = ExamplePage