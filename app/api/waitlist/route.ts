import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Your notification email address
const NOTIFICATION_EMAIL = 'hello@node2date.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validation
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email format validation
    if (!EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Sanitize email
    const sanitizedEmail = email.trim().toLowerCase();

    // Send notification email to hello@node2date.com
    try {
      // Ensure API key is loaded
      if (!process.env.RESEND_API_KEY) {
        throw new Error('RESEND_API_KEY is not configured');
      }

      await resend.emails.send({
        from: 'onboarding@resend.dev', // Resend sandbox mode - will use verified domain after setup
        to: NOTIFICATION_EMAIL,
        subject: `🎉 New Waitlist Signup: ${sanitizedEmail}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #7c3aed;">New Waitlist Signup</h2>
            <p style="font-size: 16px; color: #333;">
              Someone just joined the Node2Date waitlist!
            </p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold; color: #7c3aed;">Email Address:</p>
              <p style="margin: 5px 0 0 0; font-size: 18px; color: #333;">${sanitizedEmail}</p>
            </div>
            <p style="font-size: 14px; color: #666;">
              Timestamp: ${new Date().toLocaleString('en-US', { 
                timeZone: 'UTC',
                dateStyle: 'full',
                timeStyle: 'long'
              })}
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error('Failed to send notification email:', emailError);
      // Continue with success response even if email fails
    }

    // Log for debugging
    console.log('Waitlist signup:', sanitizedEmail);

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Successfully joined the waitlist!',
        email: sanitizedEmail
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist API error:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Something went wrong. Please try again later.'
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET handler for health check
export async function GET() {
  return NextResponse.json(
    { status: 'ok', service: 'waitlist-api' },
    { status: 200 }
  );
}
