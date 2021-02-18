const { httpNotFound, resOpFailure } = require('../variables/constants');
const { msgPageNotFound } = require('../variables/messages');

const buildResponse = require('../utils/response');

const appController = {
  pageNotFound: (req, res) => {
    res
      .status(httpNotFound)
      .json(buildResponse(httpNotFound, resOpFailure, msgPageNotFound));
  },
};

module.exports = appController;
