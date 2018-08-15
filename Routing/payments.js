const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Payment = require('../Models/payment');
const db = "mongodb://drdevn:asd12345@ds161316.mlab.com:61316/onpback";

mongoose.connect(db, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
  }
});

router.post('/addpayment', (req, res) => {
  console.log(req);
  let paymentData = req.body;
  let payment = new Payment(paymentData);
  payment.save((error, registeredPayment) => {
    if (error) {
      console.log(error)
    } else {
      res.status(200).send(registeredPayment)
    }
  })
});




module.exports = router;
