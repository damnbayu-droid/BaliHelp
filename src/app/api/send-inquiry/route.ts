export const runtime = 'edge';

import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * BaliHelp v5.0 Inquiry API - HARDENED VERSION
 * 1. Saves to Supabase Database (Inquiries)
 * 2. Sends Notification to Admin (Resend)
 * 3. Sends Confirmation to Customer (Resend)
 * 4. Records all Email activity in Email Master (email_logs)
 */
export async function POST(req: Request) {
  try {
    const { name, whatsapp, email, notes, service_id } = await req.json();
    const apiKey = process.env.RESEND_API_KEY;

    console.log(`[INQUIRY] New submission from: ${name}`);

    // --- STEP 1: SAVE TO SUPABASE (INQUIRIES) ---
    const { data: dbData, error: dbError } = await supabase
      .from('inquiries')
      .insert([{ 
        name, email, whatsapp, message: notes, 
        service_id: service_id || null, status: 'pending' 
      }])
      .select();

    if (dbError) console.error('[DB] Error:', dbError.message);

    // --- STEP 2: SEND EMAILS & RECORD LOGS ---
    if (!apiKey) {
      return NextResponse.json({ error: 'RESEND_API_KEY missing' }, { status: 500 });
    }

    const sender = "BALI HELP <info@balihelp.id>";
    
    // Helper function to send and log email
    const sendAndLogEmail = async (to: string, subject: string, type: string, html: string) => {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ from: sender, to: [to], subject, html })
      });
      
      const resData = await res.json();
      
      // Record in email_logs (Email Master)
      await supabase.from('email_logs').insert([{
        recipient: to,
        subject: subject,
        type: type,
        status: res.ok ? 'success' : 'failed',
        error_message: res.ok ? null : JSON.stringify(resData)
      }]);

      return { ok: res.ok, data: resData };
    };

    // 2.1 Notification to Admin
    const adminMail = await sendAndLogEmail(
      'info@balihelp.id', 
      `New Inquiry: ${name}`, 
      'inquiry_notification', 
      `<h2>New Inquiry</h2><p>Name: ${name}</p><p>WA: ${whatsapp}</p><p>Email: ${email}</p><p>Notes: ${notes}</p>`
    );

    // 2.2 Confirmation to Customer
    const customerMail = await sendAndLogEmail(
      email, 
      `Inquiry Received - BaliHelp`, 
      'customer_confirmation', 
      `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #6d28d9;">Hello ${name}!</h2>
          <p>Thank you for reaching out to <strong>BaliHelp</strong>. We have received your inquiry and our team is already reviewing it.</p>
          <p>We will respond via <strong>WhatsApp</strong> shortly.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #999;">BaliHelp - Professional Business & Lifestyle Services in Bali.</p>
        </div>
      `
    );

    console.log('[LOG] Email Master updated.');

    return NextResponse.json({ 
      success: true, 
      db: !dbError,
      admin: adminMail.ok,
      customer: customerMail.ok
    });

  } catch (error) {
    console.error('[SYSTEM] Fatal:', error);
    return NextResponse.json({ error: 'System error' }, { status: 500 });
  }
}
