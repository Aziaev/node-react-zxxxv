import { Document, model, Model, Schema } from "mongoose";
import { PASSWORD_RESET_BYTES, PASSWORD_RESET_TIMEOUT } from "../config/auth";
import { createHmac, randomBytes, timingSafeEqual } from "crypto";
import { APP_ORIGIN, APP_SECRET } from "../config";

export interface PasswordResetDocument extends Document {
  userId: string;
  token: string;
  expiredAt: Date;
  url: (plaintextToken: string) => string;
  isValid: (plaintextToken: string) => boolean;
}

interface PasswordResetModel extends Model<PasswordResetDocument> {
  plaintextToken: () => string;
  hashedToken: (plaintextToken: string) => string;
}

const passwordResetSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    token: String,
    expiredAt: Date,
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

passwordResetSchema.pre<PasswordResetDocument>("save", function () {
  if (this.isModified("token")) {
    this.token = PasswordReset.hashedToken(this.token);
  }

  if (!this.expiredAt) {
    this.expiredAt = new Date(new Date().getTime() + PASSWORD_RESET_TIMEOUT);
  }
});

passwordResetSchema.methods.url = function (plaintextToken: string) {
  return `${APP_ORIGIN}/password/reset?id=${this.id}&token=${plaintextToken}`;
};

passwordResetSchema.methods.isValid = function (plaintextToken: string) {
  const hash = PasswordReset.hashedToken(plaintextToken);
  return (
    timingSafeEqual(Buffer.from(hash), Buffer.from(this.token)) &&
    this.expiredAt > new Date()
  );
};

passwordResetSchema.statics.plaintextToken = function () {
  return randomBytes(PASSWORD_RESET_BYTES).toString("hex");
};

passwordResetSchema.statics.hashedToken = function (plaintextToken: string) {
  return createHmac("sha", APP_SECRET).update(plaintextToken).digest("hex");
};

export const PasswordReset = model<PasswordResetDocument, PasswordResetModel>(
  "PasswordReset",
  passwordResetSchema
);
