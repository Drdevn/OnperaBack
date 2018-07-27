const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  surname: String,
  birthday: String,
  position: String,
  phone: String,
  email: String,
  Project: [{projectname: String, userposition: String}]

});
module.exports = mongoose.model('user', userSchema, 'users');