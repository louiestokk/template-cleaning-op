import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
import Confirmation from '../../../emails/Confirmation'
import React from "react";


export async function POST(req: Request) {
    try {
        const {emailTo,lead } = await req.json();
        const { data, error } = await resend.emails.send({
          from: 'TantRut Kundtjänst <info@tantrut-alltjanst.com>',
          to: [emailTo],
          subject: 'Tack för din förfrågan',
          react: <Confirmation/>
        });
    
        if (error) {
          return new Response(JSON.stringify({ error }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }
    
        return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }

}