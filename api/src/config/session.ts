import { SessionOptions } from "express-session";
import { IN_PROD } from "./app";

const ONE_HOUR = 1000 * 60 * 60;

const THIRTY_MINUTES = ONE_HOUR / 2;

const ONE_DAY = ONE_HOUR * 24;

const SIX_HOURS = ONE_HOUR;

export const {
  SESSION_SECRET = "secret",
  SESSION_NAME = "sessionId",
  SESSION_IDLE_TIMEOUT = THIRTY_MINUTES,
  SESSION_RESAVE = false,
  SESSION_ABSOLUTE_TIMEOUT = SIX_HOURS,
} = process.env;

export const SESSION_OPTIONS: SessionOptions = {
  secret: SESSION_SECRET,
  name: SESSION_NAME,
  cookie: {
    maxAge: +SESSION_IDLE_TIMEOUT,
    secure: IN_PROD,
    sameSite: true,
  },
  rolling: true,
  resave: false,
  saveUninitialized: false,
};
