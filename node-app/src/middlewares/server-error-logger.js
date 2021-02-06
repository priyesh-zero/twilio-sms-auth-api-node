module.exports = (serverError, _request, _response, next) => {
  if (serverError instanceof Error) {
    console.error("Server Error Log: ", serverError);
  }
  next(serverError);
};
