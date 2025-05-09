/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || '465', 10),
      secure: parseInt(process.env.EMAIL_SERVER_PORT || '465', 10) === 465,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const ownerMailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.SITE_OWNER_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Message</h2>
          <p>You have received a new message through the Techscholars contact form:</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; border: 1px solid #ddd; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 20px;">
          <p style="font-size: 0.9em; color: #777;">This email was sent from the contact form on techscholars.com.</p>
        </div>
      `,
    };

    const userMailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank you for contacting Techscholars!',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">Message Received!</h2>
          <p>Hello ${name},</p>
          <p>Thank you for reaching out to Techscholars. We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <div style="background-color: #f9f9f9; border: 1px solid #ddd; padding: 15px; border-radius: 5px;">
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
            <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>If you have any urgent inquiries, please feel free to call us at 9351736629.</p>
          <br>
          <p>Sincerely,</p>
          <p>The Techscholars Team</p>
          <p><a href="https://your-website.com">your-website.com</a></p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(ownerMailOptions);
      console.log('Owner notification email sent successfully.');

      await transporter.sendMail(userMailOptions);
      console.log('User confirmation email sent successfully.');

      return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });
    } catch (emailError: any) {
      console.error('Error sending email(s):', emailError);
      return NextResponse.json({ error: 'Failed to send one or more emails.', details: emailError.message }, { status: 500 });
    }

  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}