const respondWithSuccessPayload = (response, payload) => {
  response.status(200).send({
    status: "ok",
    success: true,
    data: payload,
  });
};

const respondWithSuccess = (response) => {
  response.status(200).send({
    status: "ok",
    success: true,
  });
};

const respondWithErrorPayload = (response, payload, errorCode = 500) => {
  response.status(errorCode).send({
    status: "ok",
    success: false,
    error: payload,
  });
};

const respondWithError = (response, errorCode) => {
  response.status(errorCode).send({
    status: "ok",
    success: false,
    error: `Server responded with a ${errorCode} error!`,
  });
};

module.exports = {
  respondWithSuccess,
  respondWithErrorPayload,
  respondWithSuccessPayload,
  respondWithError,
};
