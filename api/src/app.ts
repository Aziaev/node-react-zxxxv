import express from "express";
import session, { Store } from "express-session";
import { SESSION_OPTIONS } from "./config";
import { home, login, register, reset, verify } from "./routes";
import {
  pathNotFoundErrorHandler,
  serverErrorHandler,
  unauthorizedErrorHandler,
  unprocessableErrorHandler,
} from "./errors";
import { active } from "./middleware";

export function createApp(store: Store) {
  const app = express();

  app.use(express.json());
  app.use(session({ ...SESSION_OPTIONS, store }));

  // Middlewares
  app.use(active);

  // Routes
  app.use(home);
  app.use(register);
  app.use(verify);
  app.use(reset);
  app.use(login);

  // Error handlers
  app.use(pathNotFoundErrorHandler);
  app.use(serverErrorHandler);
  app.use(unprocessableErrorHandler);
  app.use(unauthorizedErrorHandler);

  return app;
}
