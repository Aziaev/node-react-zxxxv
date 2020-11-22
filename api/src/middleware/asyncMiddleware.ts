import { NextFunction, Request, RequestHandler, Response } from "express";

export function catchAsync(handler: RequestHandler) {
  return function (...args: [Request, Response, NextFunction]) {
    return handler(...args).catch(args[2]);
  };
}
