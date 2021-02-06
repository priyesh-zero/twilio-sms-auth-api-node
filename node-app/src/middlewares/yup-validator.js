const yup = require("yup");
const APIError = require("../utils/api-error");

module.exports = (schema) => {
  return async (request, _, next) => {
    try {
      const body = await schema.validate(request.body);
      request.body = body;
      next();
    } catch (e) {
      next(
        APIError.badRequest({ name: "Validation Errors", errors: e.errors })
      );
    }
  };
};
