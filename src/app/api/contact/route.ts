import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.EMAIL_ADDRESS;

export async function POST(request: NextRequest) {
  if (!toEmail) {
    console.error('Email address is not set in environment variables.');
    return NextResponse.json(
      { error: 'Email address is not configured.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, message).' },
        { status: 400 }
      );
    }

    const fromEmail = 'onboarding@resend.dev'

    const { data, error } = await resend.emails.send({
      from: `Contact Form <${fromEmail}>`,
      to: [toEmail],
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      html: `
<div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });
    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email.', details: error },
        { status: 500 }
      );
    }
    return NextResponse.json(
      { message: 'Email sent successfully!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Route Error:', error);
    const errorMessage =
      error instanceof Error ? error.message : 'An unexpected error occurred.';
    return NextResponse.json(
      { error: 'Failed to process request.', details: errorMessage },
      { status: 500 }
    );
  }
}