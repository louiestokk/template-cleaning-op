import React from 'react';
import {Resend} from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const {lead } = await req.json();
        const { data, error } = await resend.emails.send({
          from: 'Nytt Lead TantRut <info@tantrut-alltjanst.com>',
          to: ['info@tantrut-alltjanst.com'],
          subject: 'Ett nytt lead!',
          react: <div>
            <h2>Tjänst: {lead.service}</h2>
            <h4>Email: {lead.email}</h4>
            <p>Beskriv: {lead.description}</p>
          </div>
        });
    
        if (error) {
          return new Response(JSON.stringify({ error }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }
    
        return new Response(JSON.stringify(data), { status: 200, headers: { 'Content-Type': 'application/json' } });
      } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
      }

}