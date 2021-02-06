class APIError {
  constructor(code = 500, message = "Internal Server Error") {
    this.code = code;
    this.message = message;
  }

  static badRequest(message = "Bad Request") {
    return new APIError(400, message);
  }

  static authFailError(message = "Authentication Required") {
    return new APIError(401, message);
  }

  static permissionError(message = "Inssuficient Permission") {
    return new APIError(403, message);
  }

  static notFoundError(message = "Resource requested is missing") {
    return new APIError(404, message);
  }

  static deprecatedError(message = "Resourcec requested has been removed") {
    return new APIError(410, messagej);
  }
}

module.exports = APIError;
