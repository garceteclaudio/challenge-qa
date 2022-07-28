const {After, Before , setDefaultTimeout } = require('@cucumber/cucumber')
const { performance } = require('perf_hooks');

let staticDriver = require("../../pageObjects/staticDriver");

setDefaultTimeout(60 * 1000);

let startTime;

Before( {timeout: 60 * 1000}, async function() {
  startTime = performance.now()

  console.log(`----------------------------------------------------------------------------------------------------------------
  
                                                Before all tests
  
  ----------------------------------------------------------------------------------------------------------------`);



  await staticDriver.driverConfig();

  await staticDriver.driver.manage().setTimeouts({implicit: (9000)});
});

After( {timeout: 60 * 1000}, async function() {


  console.log(`----------------------------------------------------------------------------------------------------------------
  
                                                After all tests
  
  ----------------------------------------------------------------------------------------------------------------`);

  await staticDriver.driver.close();

  let endTime = performance.now()
  let seconds = endTime - startTime;
  console.log(`Total execution time:  ${seconds/1000} seconds`) 
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

// module.exports = {

// }