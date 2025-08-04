// This file should be excluded by the exact path rule
const chai = require('chai');
const sinon = require('sinon');

function setupTestEnvironment() {
  // Test setup code
  return {
    expect: chai.expect,
    spy: sinon.spy,
    stub: sinon.stub
  };
}

module.exports = { setupTestEnvironment };
