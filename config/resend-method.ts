"use server";

import ContactFormEmail from "@/emails/contact";
import { resend } from "./resend";

export const sendContact = async (
  email: string,
  name: string,
  subject: string,
  message: string
) => {
  try {
    const res = await resend.emails.send({
      from: "Portfolio <portfolio@ikbal.info>",
      to: ["azimari.toure.ikbal@gmail.com"],
      subject: subject,
      react: ContactFormEmail({ name, email, subject, message }),
    });

    if (res.data?.id) {
      return res.data.id;
    }
  } catch (error) {
    throw new Error("Une erreur est survenue lors de l'envoi du message.");
  }
};
