import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('API route called');
    console.log('Request headers:', Object.fromEntries(request.headers));

    // Parse the form data with error handling
    let data;
    try {
      const rawBody = await request.text();
      console.log('Raw request body:', rawBody);
      data = JSON.parse(rawBody);
      console.log('Parsed form data:', data);
    } catch (parseError) {
      console.error('JSON parsing failed:', parseError);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid JSON format',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const { name, email, projectType, budget, vision, recaptchaToken } = data;

    // Validate required fields
    if (!name || !email || !projectType || !vision || !recaptchaToken) {
      console.log('Validation failed:', {
        name: !!name,
        email: !!email,
        projectType: !!projectType,
        vision: !!vision,
        recaptchaToken: !!recaptchaToken,
      });
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields',
          details: {
            name: !!name,
            email: !!email,
            projectType: !!projectType,
            vision: !!vision,
            recaptchaToken: !!recaptchaToken,
          },
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

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
    console.log('reCAPTCHA result:', recaptchaResult);

    // Check if reCAPTCHA verification failed
    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      console.log('reCAPTCHA verification failed:', recaptchaResult);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'reCAPTCHA verification failed',
          recaptchaResult,
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
    try {
      const resend = new Resend(import.meta.env.RESEND_API_KEY);

      const emailResult = await resend.emails.send({
        from: 'no-reply@pixil.ca', // Using Resend test domain
        to: 'shavarsean@gmail.com', // Must be your Resend account email for test domain
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

      console.log('Email sent successfully:', emailResult);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue anyway - don't fail the entire request if email fails
    }
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
