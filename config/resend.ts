import { Resend } from "resend";

if (!process.env.RESEND_KEY) {
  throw new Error("RESEND_KEY is not set");
}

export const resend = new Resend(process.env.RESEND_KEY);
