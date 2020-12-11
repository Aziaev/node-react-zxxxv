import { MAIL_FROM, SMTP_OPTIONS } from "./config";

const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(SMTP_OPTIONS);

export const sendMail = (options: any) =>
  transporter.sendMail({
    ...options,
    from: MAIL_FROM,
  });
