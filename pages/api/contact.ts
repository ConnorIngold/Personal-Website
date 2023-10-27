import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = JSON.parse(req.body);

    if (!name || !email || !message) {
      // return error message if any of the fields are missing
      return res.status(400).json({ message: 'Please fill out all fields.' });
    }

    // Basic spam filtering: Checking if the message or email contains suspicious content
    // This is a very basic check and can be improved using more sophisticated methods or external services.
    const spamRegex = /\b(?:loan|winning|bulk email|mortgage|free|fuck|sex|nft)\b/i;

    if (spamRegex.test(message) || spamRegex.test(email)) {
      return res.status(400).json({ message: 'Your message is possibly spam!' });
    }



    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.NEXT_PUBLIC_TEST_EMAIL_USER,
        clientId: process.env.NEXT_PUBLIC_TEST_OAUTH_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_TEST_OAUTH_CLIENT_SECRET,
        refreshToken: process.env.NEXT_PUBLIC_TEST_OAUTH_REFRESH_TOKEN
      },
    });

    const mailOptions = {
      from: email,
      to: 'connoringold@gmail.com',
      subject: 'New message from your website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

