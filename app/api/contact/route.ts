import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const SUPPORT_EMAIL = "support@wearminimal.eu";

type ContactPayload = {
  name?: string;
  email?: string;
  isOrderRelated?: boolean;
  orderNumber?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  const body: ContactPayload = await req.json();

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const isOrderRelated = Boolean(body.isOrderRelated);
  const orderNumber = body.orderNumber?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  if (isOrderRelated && !orderNumber) {
    return NextResponse.json(
      { error: "Order number is required for order-related messages." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email sending is not configured." },
      { status: 500 }
    );
  }

  const subject = isOrderRelated
    ? `MINIMAL Support Request — Order ${orderNumber}`
    : `MINIMAL Contact Message — ${name}`;

  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Order Related: ${isOrderRelated ? "Yes" : "No"}`,
  ];
  if (isOrderRelated) {
    bodyLines.push(`Order Number: ${orderNumber}`);
  }
  bodyLines.push("", "Message:", message);

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "MINIMAL Contact <support@wearminimal.eu>",
      to: [SUPPORT_EMAIL],
      replyTo: email,
      subject,
      text: bodyLines.join("\n"),
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
