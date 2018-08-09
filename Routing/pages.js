const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Page = require('../models/page');
const db = "mongodb://drdevn:asd12345@ds161316.mlab.com:61316/onpback";

mongoose.connect(db, err => {
  if (err) {
    console.error('Error!' + err)
  } else {
  }
});

router.post('/addpage', (req, res) => {
  console.log(req);
  let pageData = req.body;
  let page = new Page(pageData);
    page.save((error, registeredPage) => {
    if (error) {
      console.log(error)
    } else {
      res.status(200).send(registeredPage)

    }
  })
});

router.put('/update/:id', (req, res) => {
  console.log(req.body);
  Page.findByIdAndUpdate(req.params.id, req.body

    , {
      new: true
    },
    (err, updatedPage) => {
      if (err) {
        res.send("Error")

      } else {
        res.send(updatedPage);
        console.log(req)
      }
    }
  )
});



module.exports = router;
