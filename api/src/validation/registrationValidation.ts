import Joi from "@hapi/joi";
import { email } from "./common";
import {
  PASSWORD_MAX_BYTES,
  PASSWORD_MESSAGE,
  PASSWORD_REGEX,
} from "../config/auth";

const name = Joi.string().min(3).max(128).trim().required();
const passwordConfirmation = Joi.valid(Joi.ref("password")).required();

export const password = Joi.string()
  .min(8)
  .max(PASSWORD_MAX_BYTES, "utf8")
  .regex(PASSWORD_REGEX)
  .message(PASSWORD_MESSAGE)
  .required();

export const registerSchema = Joi.object({
  email,
  name,
  password,
  passwordConfirmation,
});
