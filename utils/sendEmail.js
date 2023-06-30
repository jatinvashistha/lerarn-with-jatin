import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = createTransport({
    host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2a00526fb85f87",
    pass: "8b652e179a8c49"
  }
  });

  await transporter.sendMail({
    to,
    subject,
    text,
  });
};

 