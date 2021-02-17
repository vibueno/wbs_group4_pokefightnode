const constants = {
  httpOK: 200,
  httpBadRequest: 400,
  httpNotFound: 404,
  httpServerError: 500,
  resOpSuccess: 'succeeded',
  resOpFailure: 'failed',

  validInfoRequests: ['type', 'name', 'base'],

  msgInvalidFightResult: 'There must one and only one winner',
};

module.exports = constants;
