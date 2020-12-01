import { Request, Response, Router } from "express";
import {
  forgotPasswordSchema,
  resetPasswordSchema,
  validate,
} from "../validation";
import { User } from "../models";
import { catchAsync } from "../middleware";
import { sendMail } from "../mail";
import { PasswordReset } from "../models/passwordReset";
import { BadRequest } from "../errors";
import { resetPassword } from "../auth";

const router = Router();

router.post(
  "/password/email",
  catchAsync(async (req: Request, res: Response) => {
    await validate(forgotPasswordSchema, req.body);

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const token = PasswordReset.plaintextToken();
      // @ts-ignore
      const reset = await PasswordReset.create({ userId: user.id, token });

      await sendMail({
        to: email,
        subject: "Reset your password",
        text:
          reset.url(token) + "\n" + JSON.stringify({ userId: user.id, token }),
      });
    }

    res.json({
      message:
        "If you have an account with us, you will receive an email with a link to reset your password",
    });
  })
);

router.post(
  "/password/reset",
  catchAsync(async ({ query, body }, res) => {
    await validate(resetPasswordSchema, { query, body });
    const { id, token } = query;
    const { password } = body;

    const reset = await PasswordReset.findById(id);
    let user;
    console.log(reset);

    if (
      !reset ||
      !reset.isValid(token as string) ||
      !(user = await User.findById(reset.userId))
    ) {
      throw new BadRequest("Invalid password reset token");
    }

    await Promise.all([
      resetPassword(user, password),
      PasswordReset.deleteMany({ userId: reset.userId }),
    ]);

    await sendMail({
      to: user.email,
      subject: "Password reset",
      text: "Your password was successfully reset",
    });

    res.json({ message: "Password reset" });
  })
);

export default router;
