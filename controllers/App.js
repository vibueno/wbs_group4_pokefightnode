const appController = {
  pageNotFound: (req, res) => {
    res
      .status(httpNotFound)
      .send(buildResponse(httpNotFound, resOpFailure, msgPageNotFound));
  },
};

module.exports = appController;
