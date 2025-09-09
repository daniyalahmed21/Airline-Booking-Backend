export default class AppError extends Error {
    constructor(message, statusCode, explanation = []) {
      super(message);
  
      this.statusCode = statusCode;
      this.status = false; // always false for errors
      this.explanation = explanation; // array of error details
      this.isOperational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  