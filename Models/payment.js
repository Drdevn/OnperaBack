const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const paymentSchema = new Schema({

  postdate: Date,
  transactions: Number,
  transdate: Date,
  isActive: Boolean,
  amount: String



});
module.exports = mongoose.model('payment', paymentSchema, 'payments');