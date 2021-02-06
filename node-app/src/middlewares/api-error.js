const APIError = require("../utils/api-error");

module.exports = (serverResponse, _request, response, next) => {
  if (!(serverResponse instanceof APIError)) {
    if (serverResponse instanceof Error) {
      return response.status(500).send("something went wrong");
    }
    return next(serverResponse);
  }
  return response.status(serverResponse.code).send(serverResponse.message);
};
