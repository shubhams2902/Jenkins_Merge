const axios = require('axios');
const addContext = require('mochawesome/addContext');
const assert = require('assert');

describe('Demo API Test Suite', function () {
  it('should fetch a post from JSONPlaceholder', async function () {
    const response = await axios.get('https://api.restful-api.dev/objects?id=3&id=5&id=10');

    // Add context to mochawesome report
    addContext(this, {
      title: 'API Response',
      value: response.data
    });

    // Basic assertions
    assert.strictEqual(response.status, 200);
  });
});
