import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<Payload>;

  if (body.website) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = (body.name ?? "").toString().trim();
  const email = (body.email ?? "").toString().trim();
  const company = (body.company ?? "").toString().trim();
  const subject = (body.subject ?? "").toString().trim();
  const message = (body.message ?? "").toString().trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Server email is not configured. Add RESEND_API_KEY and contact emails." },
      { status: 500 }
    );
  }

  const resend = new Resend(resendApiKey);

  const text = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Website Contact: ${subject}`,
      text,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
