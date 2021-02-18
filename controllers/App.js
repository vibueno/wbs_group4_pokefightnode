const { httpNotFound, resOpFailure } = require('../constants');
const { msgPageNotFound } = require('../messages');

const buildResponse = require('../utils/response');

const appController = {
  pageNotFound: (req, res) => {
    res
      .status(httpNotFound)
      .json(buildResponse(httpNotFound, resOpFailure, msgPageNotFound));
  },
};

module.exports = appController;
