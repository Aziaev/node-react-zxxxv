import { NextFunction, Request, Response } from "express";
import { isLoggedIn } from "../auth";
import { BadRequest, Unauthorized } from "../errors";

export function guest(req: Request, res: Response, next: NextFunction) {
  if (isLoggedIn(req)) {
    return next(new BadRequest("You are already logged in"));
  }

  next();
}

export function auth(req: Request, res: Response, next: NextFunction) {
  if (!isLoggedIn(req)) {
    return next(new Unauthorized("You must be logged in"));
  }

  next();
}
