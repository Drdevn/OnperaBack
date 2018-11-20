const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const Page = require('../models/page');
const db = "mongodb://drdevn:asd12345@ds161316.mlab.com:61316/onpback";

mongoose.connect(db, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
  }
});

router.get('/user/:id', (req, res) => {
  User.findById(req.params.id)
    .then(users => {
      if (!users) {
        return res.status(404).end();
      }
      console.log(req);
      return res.status(200).json(users);
    })
    .catch(err => console.log(err));
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

router.get('/getDayOff', (req, res) => {
  User.find({$elemMatch: {status:  "waiting"}})
    .exec((err, users) => {
      if (err) {
        throw err;
      } else {
        res.json(users)
      }
    })
});

router.post('/postDayOff', (req, res) => {
  let dayOff = req.body;
  let user = new User(dayOff);
  user.save((error, dayOff) =>{
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(dayOff)
    }
  })
});

router.put('/update/:id', (req, res) => {
  console.log(req.body);
  User.findByIdAndUpdate(req.params.id, req.body

    , {
      new: true
    },
    (err, updatedUser) => {
      if (err) {
        res.send("Error")

      } else {
        res.send(updatedUser);
        console.log(req)
      }
    }
  )
});



module.exports = router;
