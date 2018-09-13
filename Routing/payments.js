const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Payment = require('../models/payment');
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

router.get('/getAllPayments', (req, res) => {
  Payment.find({})
    .exec((err, payments) => {
      if (err) {
        console.log(error);
      } else {
        res.json(payments)
      }
    })
});


router.put('/update/:id', (req, res) => {
  console.log(req.body);
  Payment.findByIdAndUpdate(req.params.id, req.body

    , {
      new: true
    },
    (err, updatedPayment) => {
      if (err) {
        res.send("Error")

      } else {
        res.send(updatedPayment);
        console.log(req)
      }
    }
  )
});



module.exports = router;
