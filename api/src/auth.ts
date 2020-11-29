import { Request, Response } from "express";
import { SESSION_NAME } from "./config";
import { UserDocument } from "./models";

export function logIn(req: Request, userId: string) {
  // @ts-ignore
  req.session!.userId = userId;
  // @ts-ignore
  req.session!.createdAt = Date.now();
}

export function isLoggedIn(req: Request) {
  // @ts-ignore
  return !!req.session!.userId;
}

export function logOut(req: Request, res: Response) {
  return new Promise((resolve, reject) => {
    req.session!.destroy((err: Error) => {
      if (err) {
        reject(err);
      }
      res.clearCookie(SESSION_NAME);

      resolve();
    });
  });
}

export const markAsVerified = async (user: UserDocument) => {
  user.verifiedAt = new Date();
  await user.save();
};

export const resetPassword = async (user: UserDocument, password: string) => {
  user.password = password;
  await user.save();
};
