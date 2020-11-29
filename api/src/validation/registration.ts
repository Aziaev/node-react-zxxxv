import Joi from "@hapi/joi";
import { email, password, passwordConfirmation } from "./common";

const name = Joi.string().min(3).max(128).trim().required();

export const registerSchema = Joi.object({
  email,
  name,
  password,
  passwordConfirmation,
});
