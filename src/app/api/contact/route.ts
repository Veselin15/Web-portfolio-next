import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Default sender for free tier
      to: ['veselinveselinov06@gmail.com'], // Your email (Fixed the typo 'gmmail')
      replyTo: email, // When you hit reply, it goes to the user!
      subject: `New Message from ${name} (Portfolio)`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}