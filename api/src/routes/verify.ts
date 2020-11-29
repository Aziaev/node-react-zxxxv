import { Request, Response, Router } from "express";
import { resendEmailSchema, validate, verifyEmailSchema } from "../validation";
import { User } from "../models";
import { markAsVerified } from "../auth";
import { catchAsync } from "../middleware";
import { BadRequest } from "../errors";
import { sendMail } from "../mail";

const router = Router();

router.post(
  "/email/verify",
  catchAsync(async (req: Request, res: Response) => {
    console.log("/email/verify req.query", req.query);
    await validate(verifyEmailSchema, req.query);

    const { id } = req.query;

    const user = await User.findById(id).select("verifiedAt");
    console.log("/email/verify user", user);

    if (!user || !User.hasValidVerificationUrl(req.originalUrl, req.query)) {
      throw new BadRequest("Invalid activation link");
    }

    if (user.verifiedAt) {
      throw new BadRequest("Email already verified");
    }

    await markAsVerified(user);

    res.json({ message: "User email successfully verified" });
  })
);

router.post(
  "/email/resend",
  catchAsync(async (req, res) => {
    await validate(resendEmailSchema, req.body);

    const { email } = req.body;

    const user = await User.findOne({ email }).select("email verifiedAt");

    if (user && !user.verifiedAt) {
      const link = user.verificationUrl();

      await sendMail({
        to: email,
        subject: "Verify your email address",
        text: link,
      });
    }

    res.json({
      message:
        "If your email address needs to be verified, you will receive an email with the activation link",
    });
  })
);

export default router;
