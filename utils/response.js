const {
  httpOK,
  httpNotFound,
  resOpSuccess,
  resOpFailure,
} = require('../variables/constants');

const buildResponse = (status, operation, message, data = []) => {
  return {
    status: status,
    operation: operation,
    message: message,
    data: data,
  };
};

module.exports = buildResponse;
