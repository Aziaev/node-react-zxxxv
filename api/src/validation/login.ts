import Joi from "@hapi/joi";
import { email } from "./common";

const password = Joi.string().required();

export const login = Joi.object({
  email,
  password,
});
