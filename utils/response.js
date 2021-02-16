const buildResponse = (status, message, data) => {
  return {
    status: status,
    operation: status === 200 ? 'succeeded' : 'failed',
    message: message,
    data: data,
  };
};

module.exports = buildResponse;
