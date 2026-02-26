import { Resend } from "resend";
import Confirmation from "../../../emails/Confirmation";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY!);

// Enkel in-memory cooldown (tidsbaserad, funkar bättre än Map-rate-limit)
const lastRequestByEmail = new Map<string, number>();
const COOLDOWN_MS = 5 * 60 * 1000; // 5 minuter

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function looksLikeSpam(description: string) {
  if (!description) return true;
  if (description.length < 10) return true;
  if (description.length > 2000) return true;

  const spamKeywords = ["http", "www", "crypto", "seo", "casino"];
  return spamKeywords.some((k) =>
    description.toLowerCase().includes(k)
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { emailTo, description, service, honeypot } = body;

    // --- Honeypot (måste vara tom) ---
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    // --- Validering ---
    if (!emailTo || !isValidEmail(emailTo)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400 });
    }

    if (looksLikeSpam(description)) {
      return new Response(JSON.stringify({ error: "Spam detected" }), { status: 400 });
    }

    // --- Cooldown per email ---
    const now = Date.now();
    const last = lastRequestByEmail.get(emailTo);

    if (last && now - last < COOLDOWN_MS) {
      return new Response(
        JSON.stringify({ error: "Too many requests" }),
        { status: 429 }
      );
    }

    lastRequestByEmail.set(emailTo, now);

    // --- Skicka mail till kund ---
    await resend.emails.send({
      from: "TantRut Kundtjänst <info@tantrut-alltjanst.com>",
      to: [emailTo],
      subject: "Tack för din förfrågan",
      react: <Confirmation />,
    });

    // --- Skicka mail till admin (endast server-side) ---
    await resend.emails.send({
      from: "TantRut Web <info@tantrut-alltjanst.com>",
      to: ["info@tantrut-alltjanst.com"],
      subject: "Ny offertförfrågan",
      text: `
Email: ${emailTo}
Tjänst: ${service}
Beskrivning:
${description}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
}