//this middleware constrics the errors throwen from whatever route using it to two types
//404 - not found
//500 - generic server error
//will replace mongoDB wierd error msg with one that is more clear and debugable

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//changing satus 200 - the request was successful
//to 500 - the server encountered an unexpected condition that prevented it from fulfilling the request
const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
