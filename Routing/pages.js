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






module.exports = router;
