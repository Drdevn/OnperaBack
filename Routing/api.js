const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/user');
const db = "mongodb://drdevn:asd12345@ds161316.mlab.com:61316/onpback";
const requestIp = require('request-ip');


mongoose.connect(db, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
    console.log('Connected to mongodb')
  }
});

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1];
  if (token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey');
  if (!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
}

//  function sayBoi(req, res, next) {
//   const clientIp = requestIp.getClientIp(req);
//   console.log(clientIp);
//   next();
//   console.log(clientIp);
// }

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

router.post('/login', (req, res) => {
  let userData = req.body;
  User.findOne({email: userData.email}, (error, user) => {
    if (error) {
      console.log(error)
    } else {
      if (!user) {
        res.status(401).send('Invalid email')
      }
      else if (user.password !== userData.password) {
        res.status(401).send('Invalid password')
      } else {
        let payload = {subject: user.id};
        let token = jwt.sign(payload, 'secretKey');
        res.status(200).send({token});
        // sayBoi();
      }
    }
  })
});





module.exports = router;
