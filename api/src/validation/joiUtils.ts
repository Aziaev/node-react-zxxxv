import Joi, {
  ExtensionFactory,
  ObjectSchema,
  Root,
  StringSchema,
} from "@hapi/joi";
import { BadRequest } from "../errors";
import mongoose from "mongoose";

export async function validate(schema: ObjectSchema, payload: any) {
  try {
    await schema.validateAsync(payload, { abortEarly: false });
  } catch (e) {
    console.log(JSON.stringify(e.details));
    throw new BadRequest(e);
  }
}

const objectId: ExtensionFactory = (Joi) => ({
  type: "objectId",
  base: Joi.string(),
  messages: {
    objectId: '"{#label}" is not valid ID',
  },
  validate(value: any, helpers: Joi.CustomHelpers): any {
    if (!mongoose.Types.ObjectId.isValid(value)) {
      return { value, errors: helpers.error("objectId") };
    }
  },
});

interface ExtendedRoot extends Root {
  objectId(): StringSchema;
}

export const ExtendedJoi: ExtendedRoot = Joi.extend(objectId);
