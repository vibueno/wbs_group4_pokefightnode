const { httpOK, httpNotFound } = require('./constants');

const buildResponse = (status, message, data) => {
  return {
    status: status,
    operation:
      status === httpOK || status === httpNotFound ? 'succeeded' : 'failed',
    message: message,
    data: data,
  };
};

module.exports = buildResponse;
