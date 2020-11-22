import { Request, Response } from "express";
import { SESSION_NAME } from "./config";

export function logIn(req: Request, userId: string) {
  // @ts-ignore
  req.session!.userId = userId;
}

export function isLoggedIn(req: Request) {
  // @ts-ignore
  return !!req.session!.userId;
}

export function logOut(req: Request, res: Response) {
  new Promise((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) {
        reject(err);
      }
      res.clearCookie(SESSION_NAME);
      resolve();
    });
  });
}
