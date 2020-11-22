import Joi from "@hapi/joi";
import { email } from "./common";

export const password = Joi.string().required();

export const loginValidation = Joi.object({
  email,
  password,
});
