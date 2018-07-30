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

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized requess')
  }
  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.status(401).send('Unauthorized requess')
  }
  let payload = jwt.verify(token, 'secretKey');
  if (!payload) {
    return res.status(401).send('Unauthorized requess')
  }
  req.userId = payload.subject
}

router.get('/', (req, res) => {
  res.send('From API')
});

router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error)
    } else {
      let payload = {subject: registeredUser.id};
      let token = jwt.sign(payload, 'secretKey');
      res.status(200).send({token})
    }
  })
});

router.get('/getAllUsers', (req, res) => {
  User.find({})
    .exec((err, users) => {
      if (err) {
        console.log(error);
      } else {
        res.json(users)
      }
    })
});

module.exports = router;
