const _ = require('lodash');

function processData(data) {
  return _.filter(data, (item) => item.active);
}

function formatResponse(data) {
  return {
    success: true,
    data: data,
    timestamp: new Date().toISOString()
  };
}

module.exports = {
  processData,
  formatResponse
};
