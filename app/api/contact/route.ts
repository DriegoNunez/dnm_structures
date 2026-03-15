import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Server email is not configured. Add the SMTP variables in .env.local." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: Number(smtpPort) === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

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
    await transporter.sendMail({
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
