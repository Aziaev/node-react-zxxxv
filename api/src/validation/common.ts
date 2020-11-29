import Joi from "@hapi/joi";
import {
  PASSWORD_MAX_BYTES,
  PASSWORD_MESSAGE,
  PASSWORD_REGEX,
} from "../config/auth";

export const email = Joi.string()
  .email()
  .min(8)
  .max(254)
  .lowercase()
  .trim()
  .required();

export const password = Joi.string()
  .min(8)
  .max(PASSWORD_MAX_BYTES, "utf8")
  .regex(PASSWORD_REGEX)
  .message(PASSWORD_MESSAGE)
  .required();

export const passwordConfirmation = Joi.valid(Joi.ref("password")).required();
