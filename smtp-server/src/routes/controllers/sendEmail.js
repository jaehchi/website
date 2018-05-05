require('dotenv').config();
import mailer from 'nodemailer';

const PASSWORD = process.env.PASSWORD;
const EMAIL = process.env.EMAIL;


export const sendEmail = async ( req, res, options ) => {
  const transporter = mailer.createTransport({
    service: 'Gmail',
    port: 8080,
    secure: false,
    auth: {
      user: EMAIL,
      pass: PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    await transporter.sendMail( options, (err, info) => {
      if ( err ) {
        console.log(err);
      }
      res.status(200).send(info);
    });
  } catch ( err ) {
    res.status(500).send(err)
  }

}
