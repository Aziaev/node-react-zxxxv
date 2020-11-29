import Joi from "@hapi/joi";
import { email, password, passwordConfirmation } from "./common";
import {
  EMAIL_VERIFICATION_SIGNATURE_BYTES,
  EMAIL_VERIFICATION_TOKEN_BYTES,
  PASSWORD_RESET_BYTES,
} from "../config/auth";
import { ExtendedJoi } from "./joiUtils";

const id = ExtendedJoi.objectId().required();

export const verifyEmailSchema = Joi.object({
  id,
  token: Joi.string().length(EMAIL_VERIFICATION_TOKEN_BYTES).required(),
  expires: Joi.date().timestamp().required(),
  signature: Joi.string().length(EMAIL_VERIFICATION_SIGNATURE_BYTES).required(),
});

export const resendEmailSchema = Joi.object({
  email,
});

export const forgotPasswordSchema = Joi.object({
  email,
});

export const resetPasswordSchema = Joi.object({
  query: Joi.object({
    id,
    token: Joi.string()
      .length(PASSWORD_RESET_BYTES * 2)
      .required(),
  }),
  body: Joi.object({
    password,
    passwordConfirmation,
  }),
});
