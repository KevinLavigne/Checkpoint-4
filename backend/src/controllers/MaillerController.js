const nodemailer = require("nodemailer");
require("dotenv").config();

class sendMailer {
  static sendMail = async (req, res) => {
    const { email, message, fullname, object } = req.body[0];

    const transporter = await nodemailer.createTransport({
      host: process.env.SMTP_SENDIN,
      port: process.env.SMTP_PORT_SENDIN,
      secure: false,
      auth: {
        user: process.env.SMTP_SENDIN_USER,
        pass: process.env.SMTP_SENDIN_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: `lavigne.kevin02@gmail.com`, // this is the address to which the email will be sent
      subject: `${object}`,
      text: `${message} \n\n from: ${fullname} \n\n Email: ${email}`,
      html: `<p>${message}</p> <p>from: ${fullname}</> <p>Email: ${email}</p>`,
    };

    return transporter
      .sendMail(mailOptions)
      .then((info) => {
        res.status(200).send(info);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  };
}

module.exports = sendMailer;
