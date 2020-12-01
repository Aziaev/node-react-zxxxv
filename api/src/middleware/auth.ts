import { NextFunction, Request, Response } from "express";
import { isLoggedIn, logOut } from "../auth";
import { SESSION_ABSOLUTE_TIMEOUT } from "../config";
import { BadRequest, Unauthorized } from "../errors";
import { catchAsync } from "./asyncMiddleware";

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

export const active = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (isLoggedIn(req)) {
      const now = Date.now();
      // @ts-ignore
      const { createdAt } = req.session as Express.Session;

      if (now > createdAt + SESSION_ABSOLUTE_TIMEOUT) {
        await logOut(req, res);

        return next(new Unauthorized("Session expired"));
      }
    }

    next();
  }
);
