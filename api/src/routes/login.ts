import { Router } from "express";
import { validate } from "../validation";
import { loginValidation } from "../validation/loginValidation";
import { auth, catchAsync, guest } from "../middleware";
import { User } from "../models";
import { Unprocessable } from "../errors";
import { logIn, logOut } from "../auth";

const router = Router();

router.post(
  "/loginValidation",
  guest,
  catchAsync(async (req, res) => {
    await validate(loginValidation, req.body);
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await user.matchesPassword(password))) {
      throw new Unprocessable("Incorrect email or password");
    }

    logIn(req, user.id);

    res.json({ message: "Ok", user: { name: user.name, email: user.email } });
  })
);

router.post(
  "/logout",
  auth,
  catchAsync(async (req, res) => {
    await logOut(req, res);

    res.json({ message: "Ok" });
  })
);

export default router;
