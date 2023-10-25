import { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey('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' as string);

interface MailRequestBody {
  subject: string;
  // Add other fields if needed
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body } = req;
    const mailBody = body as MailRequestBody;
    
    await sendgrid.send({
      to: "connoringold@gmail.com", 
      from: "dannyingold@gmail.com",
      subject: "Test!",
      html: `<div>You've got a mail</div>`,
    });
  } catch (error: any) {
    // If error is an instance of sendgrid's error, it might have a statusCode property.w
    // Adjust accordingly if your error object is different.
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;