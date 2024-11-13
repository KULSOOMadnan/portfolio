// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend('re_YjBR458c_JUu4iziK3hkuaWTVBHME3Pvk');

// export async function POST(request: Request, ) {
//    const body = await request.json();
//   const { email, subject, message } = body;
//   console.log(body)

//   if (!email || !subject || !message) {
//     return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//   } else {
//     try {
//       const { data, error } = await resend.emails.send({
//         from: 'Kulsoom <onboarding@resend.dev>',
//         to: ['adnanirfan282@gmail.com'],
//         replyTo: email,
//         subject: subject,
//         html: `
//           <div>
//             <h1>${subject}</h1>
//             <p>${message}</p>
//             <p>Thank you for contacting us!</p>
//             <p>New Message Submitted:</p>
//           </div>
//         `,
//       });

//       if (error) {
//         return NextResponse.json({ error }, { status: 500 });
//       }else{
//         return NextResponse.json(data);

//       }

//     } catch (error) {
//       return NextResponse.json({ error }, { status: 500 });
//     }
//   }
// }

import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_YjBR458c_JUu4iziK3hkuaWTVBHME3Pvk');

export async function POST(request: Request) {
  let body;

  try {
    // Attempt to parse JSON body
    body = await request.json();
  } catch (error) {
    console.error("Failed to parse JSON:", error);
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { email, subject, message } = body;
  console.log("Received body:", body);

  if (!email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Kulsoom <onboarding@resend.dev>',
      to: ['adnanirfan282@gmail.com'],
      replyTo: email,
      subject: subject,
      html: `
        <div>
          <h1>${subject}</h1>
          <p>${message}</p>
          <p>Thank you for contacting us!</p>
          <p>New Message Submitted:</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error: error.message || "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json({ error: "Server error occurred" }, { status: 500 });
  }
}


// import { Resend } from 'resend';
// import {  NextResponse } from 'next/server';
// import { NextApiRequest, NextApiResponse } from 'next';

// const resend = new Resend('re_YjBR458c_JUu4iziK3hkuaWTVBHME3Pvk');
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(request : NextApiRequest , res : NextApiResponse) {
//     // const body = await request.json();
    
//     const {email , subject , message} = request.body
    
//     if (!email || !subject || !message) {
//         return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     }else{
//         try {
//             const { data, error } = await resend.emails.send({
//               from: 'Kulsoom <onboarding@resend.dev>',
//               to: ['adnanirfan282@gmail.com'],
//               replyTo: email,
//               subject: subject,
//               // react:<>
//               // <h1>{subject}</h1>
//               // <p>{message}</p>
//               // <p>Thank you for contacting us!</p>
//               // <p>New Message Submitted:</p>
//               // </>
//             });
        
//             if (error) {
//               return NextResponse.json({ error }, { status: 500 });
//             }
        
//             return NextResponse.json(data);
//           } catch (error) {
//             return NextResponse.json({ error }, { status: 500 });
//           }
//       }
 
// }