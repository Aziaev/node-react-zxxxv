import { NextFunction, Request, Response } from "express";

const badRequestStatusError = 400;
const unauthorizedStatusError = 401;
const notFoundStatusError = 404;
const unprocessableEntityStatusError = 422;
const serverErrorStatus = 500;

abstract class HttpError extends Error {
  public status!: number;
}

export class BadRequest extends HttpError {
  constructor(message = "Bad Request") {
    super(message);

    this.status = badRequestStatusError;
  }
}

export class Unprocessable extends HttpError {
  constructor(message = "Unprocessable entity") {
    super(message);

    this.status = unprocessableEntityStatusError;
  }
}

export class Unauthorized extends HttpError {
  constructor(message = "You must be logged in") {
    super(message);

    this.status = unauthorizedStatusError;
  }
}

export function serverErrorHandler(
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!err.status) {
    console.error(err.stack);
  }

  res
    .status(err.status || serverErrorStatus)
    .json({ message: err.message || "Internal server error" });
}

export function pathNotFoundErrorHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(notFoundStatusError).json({ message: "Can't find that" });
}

export function unprocessableErrorHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res
    .status(unprocessableEntityStatusError)
    .json({ message: "Can't find that" });
}

export function unauthorizedErrorHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(unauthorizedStatusError).json({ message: "Can't find that" });
}
