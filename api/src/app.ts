import express from "express";
import session, { Store } from "express-session";
import { SESSION_OPTIONS } from "./config";
import { home, login, register } from "./routes";
import {
  pathNotFoundErrorHandler,
  serverErrorHandler,
  unauthorizedErrorHandler,
  unprocessableErrorHandler,
} from "./errors";

export function createApp(store: Store) {
  const app = express();

  app.use(express.json());
  app.use(session({ ...SESSION_OPTIONS, store }));

  app.use(home);
  app.use(register);
  app.use(login);

  app.use(pathNotFoundErrorHandler);
  app.use(serverErrorHandler);
  app.use(unprocessableErrorHandler);
  app.use(unauthorizedErrorHandler);

  return app;
}
