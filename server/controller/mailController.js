'use strict';
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yeahimjt@gmail.com',
      pass: process.env.PASS_WORD
    }
  });

  const mailer = async (req,res,next) => {
    const {name, email, body} = req.body
    try {
        var mailOptions = {
            from: 'yeahimjt@gmail.com',
            to: 'yeahimjt@gmail.com',
            subject: `${name} has sent you an email`,
            html: `<h1>${email}</h1><br/><p>${body}</p>`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    } catch (error) {
        return error.message
    }
}

module.exports = {
    mailer
}