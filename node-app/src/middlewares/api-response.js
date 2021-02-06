const APIResponse = require("../utils/api-response");

module.exports = (serverResponse, _request, response, next) => {
  if (!(serverResponse instanceof APIResponse)) {
    return next(serverResponse);
  }
  return response
    .status(serverResponse.code)
    .send(
      serverResponse.isJson ? serverResponse.payload : serverResponse.message
    );
};
