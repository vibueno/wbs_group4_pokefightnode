const { httpNotFound, resOpFailure } = require('../constants');
const buildResponse = require('../utils/response');
const { msgPageNotFound } = require('../messages');

const appController = {
  pageNotFound: (req, res) => {
    res
      .status(httpNotFound)
      .json(buildResponse(httpNotFound, resOpFailure, msgPageNotFound));
  },
};

module.exports = appController;
