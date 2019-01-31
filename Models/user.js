const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  surname: String,
  password: String,
  birthday: String,
  position: String,
  phone: String,
  email: String,
  salary: String,
  gender: String,
  isActive: Boolean,
  project: [
    {
      projectname: String,
      userposition: String
    }
    ],
  // avatar: File,
  dayOf: [
      {
      publDate: Date,
      log: String,
      startDate: Date,
      endDate: Date,
      vacDayOff: String,
      reason: String,
      status: String,
      pending: Boolean,
      declined: Boolean
    }
  ]

});
module.exports = mongoose.model('user', userSchema, 'users');