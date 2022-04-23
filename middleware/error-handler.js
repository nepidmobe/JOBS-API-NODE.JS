// const { CustomAPIError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, please try again later",
  };

  // if (err instanceof CustomAPIError) {
  //   return res.status(err.statusCode).json({ msg: err.message });
  // }
  if (err.code && err.code === 11000) {
    customError.statusCode = 400;
    customError.msg = `Duplicate ${Object.keys(err.keyValue)}`;
  }
  if (err.name === "ValidationError") {
    customError.msg = Object.values(err.errors)
      .map((each) => each.message)
      .join(",");

    customError.statusCode = 400;
  }
  if (err.name === "CastError") {
    customError.msg = `NO item found with id: ${err.value}`;
    customError.statusCode = 404;
  }
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandlerMiddleware;
