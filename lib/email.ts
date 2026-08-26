import { Resend } from "resend";
import { site } from "./site";
import { getSiteSettings } from "./content";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const settings = await getSiteSettings();
  const resend = new Resend(apiKey);

  await resend.emails.send({
    from: `${site.name} Website <onboarding@resend.dev>`,
    to: settings.email,
    replyTo: payload.email,
    subject: `New contact form message from ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.company ? `Company: ${payload.company}` : null,
      "",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });
}
