const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join('/Users/henryoresegun/projects/serenity-spaces', 'public')));

app.get('/',  (_req, res) => {
  res.sendFile(path.join('/Users/henryoresegun/projects/serenity-spaces', 'public', 'index.html'));
});

app.post('/api/send-email', (req, res) => {
  const { fullName, phoneNumber, email } = req.body;


  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true,
    auth: {
      user: 'Info@Serenityspaceluxuryhomes.com',
      pass: 'Serenity@2020',
    },
  });


  const mailOptions = {
    from: 'Info@Serenityspaceluxuryhomes.com',
    to: 'Info@Serenityspaceluxuryhomes.com',
    subject: 'New Enquiry',
    html: `
      <h1>New Enquiry</h1>
      <p>Full Name: ${fullName}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Email: ${email}</p>
    `,
  };


  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent successfully!');
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(__dirname);
  console.log(process.env.PASSWORD);
});
