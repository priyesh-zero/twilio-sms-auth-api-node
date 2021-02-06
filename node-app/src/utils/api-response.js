class APIResponse {
  constructor(isJson = false, payload = {}, customStatus = 200) {
    this.code = customStatus;
    this.message = "The request was successful";
    this.isJson = isJson;
    this.payload = payload;
  }

  static create200Response() {
    return new APIResponse();
  }

  static createResponseWithJson(jsonResponse) {
    return new APIResponse(true, { status: "ok", data: jsonResponse });
  }

  static createResponseWithCustomCode(code, payload = {}) {
    return new APIResponse(payload !== {}, payload, code);
  }
}

module.exports = APIResponse;
