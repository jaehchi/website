
import { sendEmail } from './sendEmail';
import { email } from './email';


export const emailController = async (req, res) => {

  const html = await email(req.body);

  const options = {
    sender: `${req.body.name} <${req.body.email}>`,
    replyTo: `${req.body.email}`,
    to: 'jaehchi@gmail.com',
    subject: `${req.body.subject}`,
    text: `${req.body.body}`,
    html,
  };

  await sendEmail(req, res, options);
};
