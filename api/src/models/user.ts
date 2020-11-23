import { model, Schema } from "mongoose";
import { compare, hash } from "bcryptjs";
import { BCRYPT_WORK_FACTOR } from "../config/auth";

interface UserDocument extends Document {
  email: string;
  name: string;
  password: string;
  matchesPassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

userSchema.pre<UserDocument>("save", async function () {
  if (this.isModified("password")) {
    this.password = await hash(this.password, BCRYPT_WORK_FACTOR);
  }
});

userSchema.methods.matchesPassword = function (password: string) {
  return compare(password, this.password);
};

userSchema.set("toJSON", {
  transform: (doc, { password, __v, ...user }, options) => {
    return user;
  },
});

export const User = model("User", userSchema);
