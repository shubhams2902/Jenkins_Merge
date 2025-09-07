const Mocha = require('mocha');
const path = require('path');

// Instantiate a Mocha instance
const mocha = new Mocha({
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

// Add test file to Mocha
mocha.addFile(path.join(__dirname, 'test', 'apiTest.js'));

// Run the tests
mocha.run(failures => {
  process.exitCode = failures ? 1 : 0;
});
