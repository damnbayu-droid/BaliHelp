import { NextResponse } from 'next/server';

/**
 * Using Native Fetch to call Resend API to avoid 'Module not found' errors 
 * when the SDK package is not installed locally.
 */
export async function POST(req: Request) {
  try {
    const { orderId, customerName, customerEmail, serviceTitle, amount, currency, invoiceUrl } = await req.json();
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
    }

    // Send Success Email with Invoice Link using Fetch
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'BaliHelp Orders <onboarding@resend.dev>',
        to: [customerEmail],
        subject: `Payment Successful! Your Invoice for ${serviceTitle}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <div style="text-align: center; margin-bottom: 20px;">
              <div style="background: #10b981; color: white; width: 60px; height: 60px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 30px; line-height: 60px;">✓</div>
            </div>
            <h2 style="color: #10b981; text-align: center;">Payment Successful!</h2>
            <p>Hello ${customerName},</p>
            <p>Thank you for your payment. Your order for <strong>${serviceTitle}</strong> has been confirmed and is now being processed.</p>
            
            <div style="background: #f9fafb; padding: 20px; border-radius: 12px; margin: 25px 0; border: 1px solid #f3f4f6;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 5px 0; color: #6b7280; font-size: 14px;">Order ID:</td>
                  <td style="padding: 5px 0; text-align: right; font-weight: bold; font-size: 14px;">#${orderId}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #6b7280; font-size: 14px;">Amount Paid:</td>
                  <td style="padding: 5px 0; text-align: right; font-weight: bold; font-size: 14px; color: #10b981;">${currency} ${amount.toLocaleString()}</td>
                </tr>
              </table>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${invoiceUrl}" style="background: #6d28d9; color: white; padding: 14px 25px; border-radius: 10px; text-decoration: none; font-weight: bold; display: inline-block;">View & Download Invoice</a>
            </div>

            <p style="font-size: 14px; color: #4b5563;">Our team will contact you shortly to coordinate the delivery of your service.</p>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;" />
            <p style="font-size: 12px; color: #999; text-align: center;">BaliHelp - Your Trusted Partner in Bali.</p>
          </div>
        `,
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: 500 });
    }

    return NextResponse.json({ message: 'Success email sent', data });
  } catch (error) {
    console.error('Payment confirm error:', error);
    return NextResponse.json({ error: 'Failed to process payment confirmation' }, { status: 500 });
  }
}
