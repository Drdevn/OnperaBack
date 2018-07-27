const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/user');
const db = "mongodb://drdevn:asd12345@ds161316.mlab.com:61316/onpback";

mongoose.connect(db, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
    console.log('Connected to mongodb')
  }
});

router.get('/', (req, res) => {
  res.send('From API')
});

router.post('/adduser', (req, res) => {
  console.log(req);
  let userdata = req.body;
  let user = new User(userdata);
  user.save((error, newuser) => {
    if (error) {
      console.log(error)
    } else {
      res.status(200).send(newuser)

    }
  })
});

module.exports = router;
