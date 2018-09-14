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
  isActive: Boolean,
  project: [{projectname: String, userposition: String}],
  avatar: File,
  dayOf: {
    publDate: Date,
    log: String,
    startDate: Date,
    endDate: Date,
    vacDayOff: Boolean,
    reason: String,
    proof: File,
    status: String
  }

});
module.exports = mongoose.model('user', userSchema, 'users');