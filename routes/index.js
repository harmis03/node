var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
// hgccgaqaetrpeeqc
/* GET home page. */
// router.get('/in ', function(req, res){
//   res.send("Hello, world!");
// })

router.post('/mailer', function (req, res, next) {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vaghaniyash576@gmail.com',
      pass: 'hgccgaqaetrpeeqc'
    }
  });

  var mailOptions = {
    from: 'vaghaniyash576@gmail.com',
    to: 'bhuvajeet99@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

module.exports = router;
