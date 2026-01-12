import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse the form data
    const data = await request.json();
    const { name, email, projectType, budget, vision, recaptchaToken } = data;

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: import.meta.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaToken,
      }),
    });

    const recaptchaResult = await recaptchaResponse.json();

    // Check if reCAPTCHA verification failed
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'reCAPTCHA verification failed',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Prepare email content
    const emailContent = `
New contact form submission from ${name}

Name: ${name}
Email: ${email}
Project Type: ${projectType}
Budget: ${budget || 'Not specified'}

Message:
${vision}

reCAPTCHA Score: ${recaptchaResult.score}
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // Send email using Resend
    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'website@pixil.ca',
      to: 'hello@pixil.ca',
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${vision}</p>
        <hr>
        <p><small>reCAPTCHA Score: ${recaptchaResult.score} | Submitted: ${new Date().toLocaleString()}</small></p>
      `,
      text: emailContent,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Form submission error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
