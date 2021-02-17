const appController = {
  pageNotFound: (req, res) => {
    res
      .status(httpNotFound)
      .send(
        buildResponse(
          httpNotFound,
          resOpFailure,
          "The requested page does not exist. But don't worry, we all have felt lost at some point in our lives."
        )
      );
  },
};

module.exports = appController;
