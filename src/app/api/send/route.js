
import { Resend } from 'resend';
import {  NextResponse } from 'next/server';

const resend = new Resend('re_YjBR458c_JUu4iziK3hkuaWTVBHME3Pvk');
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request, res) {
    const body = await request.json();
    
    const {email , subject , message} = body
    
    if (!email || !subject || !message) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }else{
        try {
            const { data, error } = await resend.emails.send({
              from: 'Kulsoom <onboarding@resend.dev>',
              to: ['adnanirfan282@gmail.com'],
              replyTo: email,
              subject: subject,
              react:<>
              <h1>{subject}</h1>
              <p>{message}</p>
              <p>Thank you for contacting us!</p>
              <p>New Message Submitted:</p>
              </>
            });
        
            if (error) {
              return NextResponse.json({ error }, { status: 500 });
            }
        
            return NextResponse.json(data);
          } catch (error) {
            return NextResponse.json({ error }, { status: 500 });
          }
      }
 
}
