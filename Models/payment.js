const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const paymentSchema = new Schema({

  date: Date,
  transactions: String,
  amount: String



});
module.exports = mongoose.model('payment', paymentSchema, 'payments');