const Mocha = require('mocha');
const path = require('path');
const addContext = require('mochawesome/addContext');


const mocha = new Mocha({
  timeout: 30000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    reportFilename: 'demo-api-test-report',
    quiet: true,
    overwrite: true,
    html: true,
    json: true
  }
});

mocha.addFile(path.join(__dirname, 'test', 'apiTest.js'));
addContext("Mochawesome report generated ...")

mocha.run(failures => {
  process.exitCode = failures ? 1 : 0;
});
