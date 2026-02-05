import { Resend } from "resend";
import Confirmation from '../../../emails/Confirmation'
import React from "react";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is missing");
}

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; 
const MAX_REQUESTS = 3; 

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  if (now - entry.lastRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
    return false;
  }

  entry.count += 1;
  entry.lastRequest = now;

  return entry.count > MAX_REQUESTS;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    // --- IP-adress ---
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ??
      "unknown";

    // --- Rate limit ---
    if (isRateLimited(ip)) {
      return new Response(
        JSON.stringify({ error: "Too many requests" }),
        { status: 429 }
      );
    }

    const body = await req.json();
    const { emailTo, honeypot } = body;

    // --- Honeypot ---
    if (honeypot) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200 }
      );
    }

    // --- Validering ---
    if (!emailTo || !isValidEmail(emailTo)) {
      return new Response(
        JSON.stringify({ error: "Invalid email" }),
        { status: 400 }
      );
    }

    // --- Skicka mail ---
    const { data, error } = await resend.emails.send({
      from: 'TantRut Kundtjänst <info@tantrut-alltjanst.com>',
      to: [emailTo],
      subject: 'Tack för din förfrågan',
      react: <Confirmation />
    });

    if (error) {
      return new Response(
        JSON.stringify({ error }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
}
