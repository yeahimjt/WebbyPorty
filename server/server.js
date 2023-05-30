const express = require('express');
const port = 5000;

const app = express();
const cors = require('cors');
const bodyParser = require ('body-parser');
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')



// app.use(cors({
//     origin: ['https://myllave.com'],
//     methods: ['GET', 'POST'],
//     credentials: true,
//     exposedHeaders: ["Set-Cookie"],
// }));
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
}));

app.use(express.json());


dotenv.config();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.E_MAIL,
      pass: process.env.PASS_WORD
    }
  });
  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });
app.post("/send", function (req, res) {
    const {name, email, body} = req.body
    let mailOptions = {
      from: process.env.E_MAIL,
      to: process.env.E_MAIL,
      subject: `${name} has sent you an email!`,
      html: `<h4>${email}</h4><br/><h1>${body}</h1>`,
    };
   
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.json({
              status: "fail",
            });
          } else {
            console.log("== Message Sent ==");
            res.json({
              status: "success",
            });
          }
    });
   });




app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });